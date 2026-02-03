import React, { useEffect, useState } from 'react';
import { Star, X, User } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReview } from '../../store/useReview';
import { useAuth } from '../../store/useAuth';

export const ProductReviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form,setForm]=useState({
    name:"",
    rating:0,
    title:'',
    description:''
  })
  

  const productId=useParams();
  const {fetchReviews,reviews,isReviewFetching,addReview,submittingReview}=useReview();
  const {authUser}=useAuth();
  const navigate=useNavigate();
  

  useEffect( ()=>{
    fetchReviews(productId);
  },[productId])

  const handleSubmitReview =async (e)=>{
    e.preventDefault();
    console.log(form);
    await addReview(productId,form);
    setIsModalOpen(false);

  }

  const openReviewModal =async () =>{
    if(!(await authUser)){
      await navigate('/signin');
      
    }else{
      setIsModalOpen(true);
    }
  }

  

  const renderStars = (rating, interactive = false, onStarClick = null) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 cursor-pointer transition-colors ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        } ${interactive ? 'hover:text-yellow-400' : ''}`}
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));
  };

  return (
    <div className="w-[80%] mx-auto px-4 py-8 font-serif">
    
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        <button
          onClick={() => openReviewModal()}
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Write a Review
        </button>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{review.user.name}</h3>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{
                       new Date(review.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                    }</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">
                  {review.title}
                </h4>
                <p className="text-gray-700">{review.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Write a Review
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  placeholder='John Doe'
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center space-x-1">
                  {renderStars(form.rating, true, (rating) =>
                    setForm({ ...form, rating })
                  )}
                </div>
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Review Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Give your review a title"
                  required
                />
              </div>

           
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell others what you think about this product"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                 <span>{submittingReview ? "Submitting..." : "Submit Review"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
