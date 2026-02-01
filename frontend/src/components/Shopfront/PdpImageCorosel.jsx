import { motion } from "framer-motion";

export const PdpImageCorosel = ({ image }) => {
 
  
  return (
    <>
      <div className="rounded mt-0 p-5 pt-0 grid grid-cols-2 gap-6 w-full ">
        {
          image?.map((img) => 
             <motion.img
              whileHover={{scale:1.1}}
              src={img}
              alt="image"
              className="rounded-lg w-full h-full px-2 py-4 object-fit border shadow-md "
        />
          ) 
        }
        
      </div>
    </>
  );
};
