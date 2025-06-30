const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating Schema called review

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt : {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
})

//export this schema

module.exports = mongoose.model("Review", reviewSchema);