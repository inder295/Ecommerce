import React from 'react'
import { Link } from 'react-router-dom'
import { useOrders } from '../../store/useOrder'
import { Spinner } from 'flowbite-react';
import { useEffect } from 'react';
import {motion} from 'motion/react';


export const OrderDetails = () => {

    const {fetchingUserOrders,userOrdersDetails,userOrders}=useOrders();

    useEffect(()=>{
        userOrders();
    },[])
    
    setTimeout(()=>{
        if(!userOrdersDetails || userOrdersDetails.length===0){
            return <h1 className='text-2xl font-semibold mx-48'>No Orders Found</h1>
        }

    },1)

    

  return fetchingUserOrders ? <Spinner/> : (
    <>
       <div className='max-w-[1920px] mx-auto  '>
           <p className='text-3xl font-bold mx-48 text-center'>Orders</p>        
            <div className='grid grid-cols-3 my-8 place-items-centergap-4 mx-40 gap-6'>
                {
                    userOrdersDetails.map((order)=>{
                        return (

                            <motion.div  whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}>

                                    <Link to={"/orders/"
                                        +order.id} class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium hover:shadow-md">
                                    <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 line-clamp-1">OrderId : {order.id}</h5>
                                    <p className="text-body line-clamp-2 ">
                                        OrderItems: {
                                            order?.orderItem?.map((item) => (
                                            <span key={item.id} >
                                                {item.name},
                                            </span>
                                            ))
                                        }
                                        </p>
                                    <p >GrandTotal: <span> ${order.grandTotal}</span> </p>   

                                    <p >OrderStatus: <span className='text-red-500'> {order.orderStatus}</span> </p>   
                                </Link>

                            </motion.div>
 

   
                        )
                    })
                }

                
               

            </div>
        </div>  
    </>
  )
}

