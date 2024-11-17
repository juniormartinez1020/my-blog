const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            require: true,
            unique: true
        },

        email: {
            type: String,
            require: true,
            unique: true
        },

        firstName: {
            type: String,
            require: true,
        },

        lastName: {
            type: String,
            require: true
        },

        username: {
            type: String,
            require: true,
            unique: true
        },

        profilePicture: {
            type: String,
            require: false
        },

        isAdmin: {
            type: Boolean,
            default: false
        }


    }, {timestamps: true}
)


const User = mongoose.models.User || mongoose.model('User', userSchema)


export default User