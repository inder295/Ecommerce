import React from 'react'



function Body() {
  return (
    <div >

        <div className=' h-screen flex relative'>
            <div>
                <h1 className='text-red-500 text-9xl m-10 py-10 '></h1>
                <h1 className=''></h1>
            </div>
            <img src="/girl2.webp" alt="Front image" className='h-180 absolute bottom-0  right-0 px-10' />


        </div>

        <div className='bg-cyan-100 h-screen flex relative '>

            <img src="boy.webp" alt="boy-section" className='h-180 absolute bottom-0' />
            <div>
                
            </div>

        </div>

        <div>

            <div className='bg-white h-screen relative flex justify-center'>
                
                <img src="family2.png" alt="family" className='h-180 absolute bottom-0 ' />
            </div>

        </div>

        
       
    </div>

   
  )
}

export default Body
