// Logic of initialisation:


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// connection of code
// create database called Wanderlust
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// calling main function
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({}); 
    initData.data =  initData.data.map((obj)=>({...obj,owner :"683ebe9760bd92ecdb9033d6"}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized..");
};


initDB();



