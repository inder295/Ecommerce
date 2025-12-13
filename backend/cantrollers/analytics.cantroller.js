import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient();

export const ordersData=async (req,res)=>{
   
    try {
        const totalOrders=await prisma.order.count();
        const pendingOrders=await prisma.order.count({
            where:{
                orderStatus:"PENDING"
            }
        });

        const completedOrders=await prisma.order.count({
            where:{
                orderStatus:"COMPLETE"
            }
        })

        const canceledOrder=await prisma.order.count({
            where:{
                orderStatus:"CANCELLED"
            }
        })

        return res.status(200).json({
            totalOrders,
            pendingOrders,
            completedOrders,
            canceledOrder
        })

    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }

}

export const sales=async(req,res)=>{
    
    try {
        const { type } = req.query; 

        let groupBy;
        if (type === "weekly") groupBy = "week";
        else if (type === "monthly") groupBy = "month";
        else if (type === "yearly") groupBy = "year";
        else groupBy = "week";

        const sales = await prisma.$queryRawUnsafe(`
            SELECT 
            DATE_TRUNC('${groupBy}', "createdAt") AS period,
            SUM("grandTotal") AS totalSales,
            COUNT(*) AS orderCount
            FROM "Order"
            GROUP BY 1
            ORDER BY 1 ASC;
        `);

       

         const result = sales.map(item => ({
            period: item.period,
            totalSales: Number(item.totalsales),
            orderCount: Number(item.ordercount)
            }));

        
        
        return res.status(200).json({
            result
        })


    } catch (error) {
       
        return res.status(400).json({
         message:error.message
       })   

    }
}