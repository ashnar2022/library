//import mongoose
const mongoose=require('mongoose');

//define the connection string
mongoose.connect('mongodb://localhost:27017/Library',()=>{
   
console.log('connected to mongodb');
})

//create a model for the collection

const Book=mongoose.model('Book',{
   // schema creation



id:Number,
Name:String,
Author:String,
Category:String,
Series:String,
Totalpages:Number,
Storyline:String,
image:String
})

//Create a new collection in mongobd -create a model
const Mybooks=mongoose.model('mybooks',{
    id:Number,
Name:String,
Author:String,
Category:String,
Series:String,
Totalpages:Number,
Storyline:String,
image:String
})


const User=mongoose.model('User',{
    id:Number,
    username:String,
    password:String,
    email:String,
    Phn:Number

})
const Adventure=mongoose.model('adventure',{
    id:Number,
    Name:String,
    Author:String,
    Category:String,
    Series:String,
    Totalpages:Number,
    Storyline:String,
    image:String  
})
const Sciencefiction=mongoose.model('sciencefiction',{

    id:Number,
    Name:String,
    Author:String,
    Category:String,
    Series:String,
    Totalpages:Number,
    Storyline:String,
    image:String  
})

module.exports={
    Book,User,Mybooks,Adventure,Sciencefiction
}