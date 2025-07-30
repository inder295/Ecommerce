import { PrismaClient } from "@prisma/client";


const Prisma=new PrismaClient();

export const addAddress=async(req,res)=>{
    const {fullname,phone,address,city,state,country,zip}=req.body;
    const userId=req.user.id;

    if(!fullname || !phone || !address || !city || !state || !country || !zip) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        
        const Address=await Prisma.address.create({
            data:{
                userId:userId,
                fullname:fullname,
                phone:phone,
                address:address,
                city:city,
                state:state,
                country:country,
                zip:zip

            }
        })

        res.status(201).json({
            message:"Address added successfully",
            address:Address
        })

    } catch (error) {

        res.status(500).json({
            message:"Error in adding address",
            error:error.message
        })
        
    }




}

export const getAllAddresses=async(req,res)=>{

    const userId=req.user.id;

    try {
        const addresses=await Prisma.address.findMany({
            where:{
                userId:userId
            },
            orederBy:{
                createdAt:'desc'
            }
        })

        res.status(200).json({
            message:"Addresses fetched successfully",
            addresses:addresses
        })

    } catch (error) {

        res.status(500).json({
            message:"Error in fetching addresses",
            error:error.message
        })
        
    }
}

export const deleteAddress=async(req,res)=>{
    const {id}=req.params;
    const userId=req.user.id;

    try {
        const address=await Prisma.address.findUnique({
            where:{
                id:id,
                userId:userId
            }
        })

        if(!address){
            return res.status(404).json({
                message:"Address not found"
            })
        }

        await Prisma.address.delete({
            where:{
                id:id,
                userId:userId
            }
        })

        res.status(200).json({
            message:"Address deleted successfully"
        })

    } catch (error) {

        res.status(500).json({
            message:"Error in deleting address",
            error:error.message
        })
        
    }
}