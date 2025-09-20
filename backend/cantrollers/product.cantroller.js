import { PrismaClient } from "@prisma/client";
import cloudinary from "../utils/cloud/cloudinary.js";

const Prisma = new PrismaClient();


export const createProduct=async (req,res)=>{

    let {name,description,price,inventory,category,brand,attributes }=req.body;
    const placeholderImage=["https://res.cloudinary.com/dafbi3qbv/image/upload/v1757789300/products_images/ksxkcyucydr1jhaeicia.png"]
    
    if(req.files.length>0){
        var imageurl=await req.files.map(async (file)=>
                await cloudinary.uploader.upload(file.path,{
                folder:"products_images"
            })
        )

        var result=await Promise.all(imageurl);
        var urls=result.map((links)=>links.secure_url)
    }

    if(!name || !description || !price || !inventory) {
        return res.status(400).json({ message: "All fields are required" });
    }

   

    if(attributes){
        attributes=JSON.parse(attributes);
    }

   
    

    if (category) {
        
        category = typeof category === "string" ? JSON.parse(category) : category;
        
        } else {
        category = [];
    }

    
    



    try {
        const product=await Prisma.product.create({
        data:{
            name:name,
            description:description,
            price:parseFloat(price),
            inventory:parseInt(inventory),
            image:urls || placeholderImage,
            brand,
            attributes,
            categories:{
                connect:category?.map((id)=>({id}))
            }
        },
        include:{
            categories:true
        }
    })


    res.status(201).json({
        message:"Product created successfully",
    })
    } catch (error) {
        res.status(500).json({
            message:"Error in creating product",
            error:error.message
        });
        
    }
}


export const deleteProducts=async (req,res)=>{
    const {ids}=req.body;
    try {
        const products=await Prisma.product.findMany({
            where:{
                id:{
                    in:ids
                }
            }

        })
        

        if(products.length === 0 || !products){
            return res.status(404).json({
                message:"No products found with the provided ids"
            })
        }

        await Prisma.product.deleteMany({
            where:{
                id:{
                    in:products.map(product=> product.id)
                }
            }
        })


                
        res.status(200).json({
            message : "Products deleted successfully"
        })
        

    } catch (error) {
        console.log("error in deleting product");
        res.status(500).json({
            message:"Error in deleting product",
            error:error.message
        });
        
    }
}

export const getAllProducts=async(req,res)=>{
    try {
        const products =await Prisma.product.findMany();

        res.status(200).json({
            message:"Products fetched successfully",
            products:products
        })
        
    } catch (error) {

        res.status(500).json({
            message:"Error in fetching products",
            error:error.message
        });
        
    }
}

export const getProductById=async(req,res)=>{
    const {id}=req.params;
    try {
        const product =await Prisma.product.findUnique({
            where:{
                id:id
            }
        })

        if(!product){
            return res.status(404).json({
                message:"Product not found"
            })
        }



        res.status(200).json({
            message:"Product fetched successfully",
            product:product
        })
    } catch (error) {

        return res.status(500).json({
            message:"Error in fetching product",
            error:error.message
        });
        
    }
}

export const updateProductById=async(req,res)=>{
    const {id}=req.params;
    const {name,description,price,inventory,categoryIds}=req.body;

    try {
        const product= await Prisma.product.findUnique({
            where:{
                id:id
            }
        })

        if(!product){
            return res.status(404).json({
                message:"Product not found"
            })
        }

        const updatedProduct =await Prisma.product.update({
            where:{
                id:id
            },
            data:{
                name:name || product.name,
                description:description || product.description,
                price:price ? parseFloat(price): product.price,
                inventory:inventory ? parseInt(inventory): product.inventory,
                image:req.file ? req.file.path : product.image,
                categories:{
                    set : categoryIds ? categoryIds.map((id)=>({id:id})) : [...product.categories]
                }
            },
            include:{
                categories:true
            }
        })
        
        res.status(200).json({
            message:"Product updated successfully",
            product:updatedProduct
        })
        
    } catch (error) {

        return res.status(500).json({
            message:"Error in updating product",
            error:error.message
        });
        
    }
}

export const getProductsByCategory=async(req,res)=>{
    const {categoryId}=req.params;
    try {
        const products=await Prisma.product.findMany({
            where:{
                categories:{
                    some:{
                        id:categoryId
                    }                   

                }   

            }

        })

        if(products.length===0){
            return res.status(404).json({
                message:"No products found for this category"
            })
        }

        res.status(200).json({
            message:"Products fetched successfully",
            products:products
        })

    } catch (error) {
        return res.status(500).json({
            message:"Error in fetching products by category"
        })
        
    }
}




