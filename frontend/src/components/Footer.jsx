import React from 'react'

function Footer() {
  return (
    <div className='h-50 grid grid-cols-3 gap-10 p-10 pl-15 font-serif'>

        <div className='text-xl'>
           
            <ul>Our Colection</ul>
            <li className='cursor-pointer hover:text-amber-700'>Formal</li>
            <li className='cursor-pointer hover:text-amber-700'>Sports</li>
            <li className='cursor-pointer hover:text-amber-700'>Leads</li>
        </div>
        <div className='text-2xl'>
            <p>Subscripe to Our Newsletter</p>
           <input
  type="text"
  placeholder="Enter your Email here"
  class="w-90 max-w-md px-4 py-2 mt-3 text-base border border-gray-300 rounded  focus:outline-none focus:ring-2 "
/>
              <button className='bg-amber-200 px-4 py-2 rounded-xl mt-4 w-50 h-10 cursor-pointer hover:bg-amber-300 text-lg font-bold font-serif'>Subscribe</button>
        </div>
        <div className='text-xl'>
            <ul>Help and Support</ul>
            <li className='cursor-pointer hover:text-amber-700'>Contact Us</li>
            <li className='cursor-pointer hover:text-amber-700'>FAQ</li>
            <li className='cursor-pointer hover:text-amber-700'>Shipping And Delivery</li>
            <li className='cursor-pointer hover:text-amber-700'>User Guide</li>
        </div>
        
    </div>
  )
}

export default Footer
