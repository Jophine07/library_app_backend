const express=require("express")
const cors=require("cors")
const library=require("./modules/library.js")
const mongoose=require("mongoose")

const{libraryModel}=require("./modules/library.js")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jophine:jophinepaul@cluster0.oyyvgui.mongodb.net/LibraryDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/Add",(req,res)=>{
    let input=req.body
    let library=new libraryModel(input)
    library.save()
   console.log(library)
   res.json({"status":"test"})
})

app.get("/SearhBook",(req,res)=>{
    res.send("testt")
})

app.get("/DeleteBook",(req,res)=>{
    res.send("testt")
})

app.get("/ViewAll",(req,res)=>{
   library.libraryModel.find().then(
    (data=>{
        res.json(data)
    })
   )
})


app.listen(8800,(req,res)=>{
    console.log("Server Started")
})