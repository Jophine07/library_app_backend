const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
       
        "booktitle":String,
        "category":String,
        "publishedYear":String,
        "AuthorName":String,
        "Description":String,
        "DistributorName":String,
        "PublisherName":String,
        "Price":String,
        "Edition":String
    }
)
let libraryModel=mongoose.model("Libraries",schema)
module.exports={libraryModel}