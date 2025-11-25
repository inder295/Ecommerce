import React from 'react'

export const OrderDetailsById = () => {

  const orderItem = [
            {
                id: "38ba14b1-fca2-4194-a79b-4a2f19a18d01",
                orderId: "17962cbe-4623-4970-a969-ee3931482e0d",
                productId: "8ce8ebcb-7c8a-4f85-aab2-eaef0ab48d66",
                name: "Google Pixel 9",
                image: "https://res.cloudinary.com/dafbi3qbv/image/upload/v1758963267/products_images/hb5wqphahwfgefc36rmy.jpg",
                quantity: 1,
                price: 5000,
                totalPrice: 5000
            }
        ]

       const address= {
            
            fullname: "John Doe",
            email: "john@example.in",
            phone: "9811222366738",
            address: "1234 Elm Street\nSan Francisco, CA 94107\nUnited States",
            city: "New York",
            state: "America",
            country: "USA",
            zip: "110018",
            
        } 

  const order= {
        id: "17962cbe-4623-4970-a969-ee3931482e0d",
        userId: "e9af2513-e92c-4f11-953e-8cb22747a1af",
        addressId: "4158c7bb-276e-43ab-8928-e797c3bf6044",
        grandTotal: 5000,
        paymentMethod: "COD",
        paymentStatus: "SUCCESS",
        shipmentMehod: "FREE",
        sessionId: "",
        orderStatus: "PENDING",
        createdAt: "2025-11-25T15:32:23.293Z",
        updatedAt: "2025-11-25T15:32:23.293Z",
        
    }      

  return (
    <>
       <div className='max-w-[1920px] w-auto mx-auto'>
           <h1 className='text-3xl font-bold text-center'>Order Details</h1>

           <div className='grid grid-cols-4 gap-4 p-12 max-w-screen-xl mx-auto'>
              <div className='bg-slate-100 col-span-3 p-4 rounded-lg'>
                  <h2 className='text-xl font-bold'>Ordered Items</h2>
                   <div className='flex py-3'>
                      <img src={orderItem[0].image} className='h-28 w-28' />
                      <div className='mx-3'>
                        <p className='font-semibold'>{orderItem[0].name}</p>
                        <p>${orderItem[0].price}</p>
                        <p>Quantity : {orderItem[0].quantity}</p>
                        <p>TotalPrice: ${orderItem[0].totalPrice}</p>

                      </div>
                      

                      
                   </div>

                  


              </div>
              <div className='bg-slate-100 rounded-md p-4'>
                  <p className='text-xl font-bold '>Address</p>
                   <div className='my-4'>
                      <p>{address.fullname}</p>
                      <p>{address.email}</p>
                      <p>{address.phone}</p>
                      <p>{address.address}</p>
                      <p>{address.city}</p>
                      <p>{address.state}</p>
                      <p>{address.country}</p>
                      <p>{address.zip}</p>
                     
                   </div>

                   
                      <div className=''>
                        <h2 className='text-xl font-bold my-4'>Payment Details</h2>
                        <p className=''>Payment Method : {order.paymentMethod}</p>
                        <p className=''>Payment Method : {order.paymentStatus}</p>
                      </div>

                      <div>
                        <h2 className='text-xl font-bold my-4'>Shipping Details</h2>
                        <p>Shipping Method : {order.shipmentMehod}</p>
                      </div>
                  


              </div>
              <div className='bg-slate-100 col-start-4 p-4 rounded-md'>
                  <p className='font-semibold'>Grand Total: ${order.grandTotal}</p>
                  <p className='font-semibold'>Order Status: {order.orderStatus}</p>
                 
              </div>
             

           </div>
       </div>
      
    </>
  )
}


