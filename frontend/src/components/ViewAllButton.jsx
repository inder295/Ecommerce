import { Link } from "react-router-dom"

export const ViewAllButton=()=>{
    return (
        <div className="flex justify-center items-center mt-10 my-2 flex-col gap-4 my-10">
            <Link to="/product-list"> 
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View All</button>

            </Link>


        </div>
    )
}