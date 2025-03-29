import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const adminSchema = new Schema({
    adminname: {
        type:String,
        required:true,
        
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        
    },
    password: {
        type:String,
        required:[true,"password is required"],
       
    },
    refreshToken:{
        type:String
    }
    
},{timestamps:true});

adminSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
adminSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

adminSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            adminname: this.adminname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

adminSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const Admin = mongoose.model("Admin", adminSchema);