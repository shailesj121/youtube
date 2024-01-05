import mongoose, {Schema} from "mongoose"

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

export const User = mongoose.model("User", userSchema)