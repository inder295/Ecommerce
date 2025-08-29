import React, { useState } from 'react'

const CreateProduct = () => {

    const [formData,setFormData]=useState({
       name:"",
       description:"",
       price:"",
       inventory:"",
       //image:""
    })

    const [error,setError]=useState({})


    function validate(name,value){
        
        let error={}
        
        

        return error;
        
    }

    const handleChange=(e)=>{
         const {name,value}=e.target;
         setFormData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=()=>{



    }
  return (
    <div className='text-4xl ml-64 p-6'>

        <form>
          <div className='py-2'>
            <label for="first_name" class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white">Product name</label>
             <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" value={formData.name} placeholder="Name" required  onChange={handleChange}/>
            {error.name==="name" && <p className="text-red-500 text-sm">{error.message}</p> }
        </div>

        <div className='py-2'>
            <label for="first_name" class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white">Product Description</label>
             <textarea
        className="w-full border rounded-lg p-2 text-gray-800 text-sm bg-gray-50"
        placeholder="Write description in markdown..." name="description" value={formData.description}
         onChange={handleChange}
      />
      {error.name && <p className="text-red-500 text-sm">{error.name}</p> }
        </div>

        <div className='py-2'>
            <label for="first_name" class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white">Product Inventory</label>
             <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inventory" required name="inventory" value={formData.inventory} onChange={handleChange}/>
            {error.name && <p className="text-red-500 text-sm">{error.name}</p> }
        </div>

        <div className='py-2'>
            <label for="first_name" class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white">Product Price</label>
             <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required  name="price" value={formData.price} onChange={handleChange} />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p> }
        </div>
         
         {/* <div className='py-2'>
             <label for="first_name" class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white">Product Image</label>
             <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="image" value={formData.image} onChange={handleChange} />
             
         </div> */}

         <div className='py-2'>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onSubmit={handleSubmit}>Submit</button>

         </div>

        </form>
      
    </div>
  )
}

export default CreateProduct
