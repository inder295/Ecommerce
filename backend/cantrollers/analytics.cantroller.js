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

export const weeklySales=async(req,res)=>{
    
    try {
        const weeklySales= await prisma.$queryRaw ` 
             SELECT 
             DATE_TRUNC('week', "createdAt") AS week,
             SUM("grandTotal") AS total_sales
             FROM "Order"
             GROUP BY week
             ORDER BY week;
         `;
        
        return res.status(200).json({
            weeklySales
        })


    } catch (error) {
       
        return res.status(400).json({
         message:error.message
       })   

    }
}