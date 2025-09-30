import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useNavigate } from 'react-router-dom'

const BackNavigation = () => {

    const navigate=useNavigate();


  return (
    <div className="w-[80%] mx-auto mt-40 flex justify-between cursor-pointer p-5 pt-0">
      <FaArrowLeft
        onClick={() => navigate(-1)}
        color='black'
        
      />
      
        
    </div>
  )
}

export default BackNavigation
