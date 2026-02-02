import express from 'express';
import { createReview, getProductReviews } from '../cantrollers/review.cantroller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const reviewRouter=express.Router();

reviewRouter.post('/create-review/:productId',authMiddleware,createReview);
reviewRouter.get('/get-reviews/:productId',getProductReviews)

export default reviewRouter;