const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function () {
                return 'invalid email format'
            }
        }
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isURL(value)
            },
            message: function () {
                return 'invalid url'
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User