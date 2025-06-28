import React from 'react'



function Body() {
  return (
    <div >

        <div className=' h-screen flex relative'>
            <div className='p-40'>
                <p className='text-7xl font-serif'>A Touch of Style,</p>
                 <p className='text-7xl font-serif font-bold'>A Dash of You,</p>
                <p className='text-7xl font-serif'>Shop the Looks,</p>
                <p className='text-7xl font-serif'>Just like You 💕❤️</p> 

                <button className="bg-amber-200 px-4 py-2 rounded-2xl mt-4 w-60 h-15 cursor-pointer hover:bg-amber-300 text-lg font-bold font-serif
">Your Style, Your Way </button>
            </div>
            <img src="/girl2.webp" alt="Front image" className='h-180 absolute bottom-0  right-0 px-10' />


        </div>

        <div className='bg-cyan-100 h-screen w-full flex items-end   '>

           
           <div className=' w-1/2  '>
                         <img src="boy.webp" alt="boy-section" className='h-180 bottom-0' />
           </div>
           
                
             <div className='w-1/2  pb-60 pr-20'>
                <p className='text-7xl font-serif'>Fashion is What You Buy,</p>
                <p className='text-7xl font-serif font-bold'>Style is What You Do With It.</p>
                <button className="bg-amber-200 px-4 py-2 rounded-2xl mt-4 w-60 h-15 cursor-pointer hover:bg-amber-300 text-lg font-bold font-serif
">Take It</button>
            </div>
           

                
                

        </div>

       
            <div className='bg-white h-screen w-full relative flex justify-center items-end'>
                 <div className='w-1/3 pb-68 pl-40 '>
                    <p className='text-7xl font-serif'>Dress Up!</p>
                    <p className='text-7xl font-serif'>Your Every</p>
                    <p className='text-7xl font-serif font-bold'>Moment</p>
                   
                    <button className="bg-amber-200 px-4 py-2 rounded-2xl mt-4 w-60 h-15 cursor-pointer hover:bg-amber-300 text-lg font-bold font-serif
">Moments</button>
                   
                    
                 </div>
                <img src="family2.png" alt="family" className='h-180 bottom-0 w-auto ' />
                <div className='w-1/3 mb-80 '>
                    <p className=' text-7xl font-serif'>Dress your little ones in </p>
                <p className='text-7xl font-serif font-bold'>Love</p>
                <button className="bg-amber-200 px-4 py-2 rounded-2xl mt-4 w-60 h-15 cursor-pointer hover:bg-amber-300 text-lg font-bold font-serif
">Sale</button>
                </div>
            </div>

                 
    </div>

   
  )
}

export default Body
