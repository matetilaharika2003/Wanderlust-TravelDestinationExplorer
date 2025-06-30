const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

// creating User schema

const userSchema = new Schema({
    // Define email
    email: {
        type: String,
        required: true
    }

});
userSchema.plugin(passportLocalMongoose);
//export this schema

module.exports = mongoose.model("User", userSchema);

