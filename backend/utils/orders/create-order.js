import {PrismaClient,PaymentStatus} from '@prisma/client';

const Prisma=new PrismaClient();

export const createOrder=async(addressId,shipmentMehod,paymentMethod,userId,sessionId)=>{

    
    
    try {
        const {order,address,items}=await Prisma.$transaction(async (tx)=>{
      
            const orderItems=await tx.cartItems.findMany({
                  where:{
                      userId:userId
                  },
                  include:{
                      product:true
                  }
              })
                  await tx.cartItems.deleteMany({
                      where:{
                          userId:userId
                      }
                  })         
      
                  const grandTotal=await orderItems.reduce((total,item)=>total + item.totalPrice,0)
                  
      
                  const order=await tx.order.create({
      
                      data:{
                          userId:userId,
                          addressId:addressId,
                          paymentMethod:paymentMethod,
                          paymentStatus:PaymentStatus.SUCCESS,
                          shipmentMehod:shipmentMehod,
                          orderStatus:"PENDING",
                          grandTotal:grandTotal,
                          shipmentMehod:shipmentMehod,
                          sessionId: sessionId || "",
                          orderItem:{
                              create:orderItems.map(item=>({
                                  productId:item.productId,
                                  name:item.product.name,
                                  image:item.product.image[0],
                                  price:item.product.price,
                                  quantity:item.quantity,
                                  totalPrice:item.totalPrice
                              }))
                          },
                          
                          },
                          include:{
                              user:true
                          }                 
                      })
      
                      for(const item of orderItems){
                          await tx.product.update({
                              where:{
                                  id:item.productId
                              },
                              data:{
                                  inventory:{
                                      decrement:item.quantity
                                  }
                              }
                          })
                      }
      
                      const address=await tx.address.findUnique({
                      where:{
                          id:addressId
                      }
              })
      
              if(!address){
                  return res.status(404).json({
                      message:"Address not found"
                  })
              }
      
              const items=await tx.orderItem.findMany({
                  where:{
                      orderId:order.id
                  }
              })
                      return {order,address,items};
          });
    
          return {order,address,items};
        
    } catch (error) {
        console.log(error.message);
        return error.message
        
    }
    
}