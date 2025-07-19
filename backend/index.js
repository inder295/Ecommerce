import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import authRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.route.js";

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(cookieParser());

dotenv.config();

const port= process.env.PORT || 3000;

app.get("/",(req,res)=>{ 
    res.send("GHello World")
})

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/product",productRouter);
 


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})



