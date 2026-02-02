import { create } from "zustand";
import { createReview, getReviewsByProductId } from "../Api/review.api";
import toast from "react-hot-toast";

export const useReview = create((set)=> ({
     
    reviews:[],
    isReviewFetching:false,
    submittingReview:false,

    async fetchReviews(productId){
        try {
            set({isReviewFetching:true});
            const data=await getReviewsByProductId(productId);
            set({reviews:data.reviews});
        } catch (error) {
            console.log("Error in fetching reviews:",error);   
        }finally{
            set({isReviewFetching:false});
        }
    },

    async addReview(productId,form){
        try {
            set({submittingReview:true});
            const data=await createReview(productId,form);
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message || "Error in adding review");
            console.log(error);
            
        }finally{
            set({submittingReview:false});
        }
    }


}))