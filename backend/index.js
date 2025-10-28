import http from 'http'
import express from "express";
import {Server} from 'socket.io'
import dotenv from "dotenv"
import cors from "cors";
import authRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.route.js";
import categoryrouter  from "./routes/category.route.js";
import cartRouter from "./routes/cart.route.js";   
import addressRouter from "./routes/address.route.js";
import path from "path";
import orderRouter from "./routes/order.route.js";

const app= express();

const server=http.createServer(app);

const io=new Server(server,{
   cors:{
     origin: "http://localhost:5173", 
     methods: ["GET"],
   }
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
  origin: "http://localhost:5173",   // allow only frontend
  credentials: true                  // allow cookies/headers
}));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


dotenv.config();

const port= process.env.PORT || 3000;

app.get("/",(req,res)=>{ 
    res.send("Hello World")
})

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/product",productRouter);
app.use("/api/v1/category",categoryrouter);
app.use("/api/v1/cart",cartRouter);
app.use('/api/v1/address',addressRouter)
app.use("/api/v1/order",orderRouter);
 

io.on('connection',(socket)=>{
  console.log('user connected',socket.id);

  socket.on('disconnect',()=>{
    console.log('user disconnected',socket.id);
    
  })
  
})

export { io };


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})



