import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { use } from "react";
const userSchema = new Schema({
username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
    trim:true,
    index:true,//search able karaych ahe tar means searching sathi use kart asela tar index la true karaych

},
email:
{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
    trim:true,
},
fullname:
{
    type:String,
    required:true,
    trim:true,
    index:true,
},
avatar:
{
type:String,//cloudinary url
required:true,
},
coverImage:
{
type:String,//cloudinary url
},
watchhistory:
[
    {
type:Schema.Types.mongoose.ObjectId,//cloudinary url
ref:"video"
    }
],
password:
{
    type:String,
    required:[true,"Password is required"]
},
refreshToken:
{
    type:String,
},
timestamps:true
})
userSchema .pre("save",async function (next){//data la save karnaya adhi save karaych
    if(this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect = async function(password){//method
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRT
        }
    
    )

}//access token generate

userSchema.methods.generateRefreshToken= function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.REFRSH_TOKEN_SECRET,{
            expiresIn: process.env.REFRSH_TOKEN_EXPIRT
        }
    
    )
}//access token generate



export const User =mongoose.model("User",userSchema)