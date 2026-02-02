import Api from "./index"

export const createReview=async(productId ,form)=>{
    try {
        const res=await Api.post(`/review/create-review/${productId.id}`,form,{
            withCredentials:true,
            headers:{
                'Content-Type':'application/json'
            }
        })
        return res.data;
    
    } catch (error) {
        
        console.log("Error in creating review:",error); 
    }
}

export const getReviewsByProductId=async(productId)=>{

    try {
        const res=await Api.get(`/review/get-reviews/${productId.id}`);
        return res.data;
    } catch (error) {
        console.log(`Error in fetching the review`,error);
        
    }

}
