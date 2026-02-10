import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: ["user","admin"],
            default: "user"
        },
        isActive: {
            type: Boolean,
            default: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        }
    },
    {
        timestamps: true,
        strict: true
    }
)

userSchema.pre("save",async function(next) {
    console.log("pre save middle tirggered")

    this.password = await bcrypt.hash(this.password,10)
})

// const user = mongoose.model("User",userSchema)
const user = mongoose.model("User", userSchema, "users");
export default user 