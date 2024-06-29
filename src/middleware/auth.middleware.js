import { ApiError } from "../utlis/ApiError";
import { asyncHandler } from "../utlis/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";


export const verifyJWt = asyncHandler(async(req,res,next) => {
    const token =req.cookies?.accessToken || req.header
    ("Authorization")?.replace("Bearer ", "")

    if(!token) {
        throw new ApiError(401, "Unauthorized request")
    }

    const decodedToken=jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user =await User.findById(decodedToken?._id).select("-passowrd -refreshToken")

    if(!user){
        // NEXT VIDEO: discuss about frontend
        throw new ApiError(401, "Invalid Access Token")
    }
    
})

