const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,'Please enter a name']
        },
        // Phone: {
        //     type: Number,
        //     required: [true,'Please enter a phone number']
        // },
        // email: {
        //     type: String,
        //     required: [true,'Please enter a email'],
        //     unique: [true,'Email is already in use'],
        //     trim: true,
        //     match:[ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //     'please enter a valid email']
        // },
        // password: {
        //     type: String,
        //     required: [true,'Please enter a password'],
        //     minlength: [6, 'Password must be at least 6 characters long']
        // }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('Users',userSchema)
module.exports = User
