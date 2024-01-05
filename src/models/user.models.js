import mongoose, {Schema} from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            index: true,
            trim: true,
        },
        avatar: {
            type: String,    //cloundanay url
            required: true,
        },
        coverImage: {
            type: String,    //cloundanay url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: string,
            required: [true, 'Password is Required'],
        },
        refreshToken: {
            type: string
        }
    },
    {timeStamps: true}
    )


//password encrypt method
userSchema.pre('save', async function (next) {
    if(!this.isModefied("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

//check, is the hash password  correct
userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare("password", this.password)
}

userSchema.method.generateaccesstoken = function () {
    return Jwt.sign(
        { 
            _id: this._id,
            email: this.email,
            userName: this.UserName,
            fullName: this.fullName
    
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIERY
        }
    )
}
userSchema.method.generaterefreshtoken = function () {
    return Jwt.sign(
        { 
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIERY
        }
    )
}


export const User = mongoose.model("User", userSchema)