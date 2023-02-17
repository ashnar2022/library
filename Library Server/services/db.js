//import mongoose
const mongoose=require('mongoose');

//define the connection string
mongoose.connect('mongodb://localhost:27017/Library',()=>{
   
console.log('connected to mongodb');
})

//create a model for the collection

const Book=mongoose.model('Book',{
   // schema creation
//   kind:String,
//   id:String,
//   etag:String,
//   selfLink:String,
//   volumeInfo:[{
//     title:String,
//     subtitle:String,
  
//   authors:{
//     0:String
//   },
//     publishedDate:String,
//     description:String,
//     industryIdentifiers:{
//         0:{
//             type:String,
//             identifier:String
//         },
//         1:{
//             type:String,
//             identifier:String

//         }
//     },
//     readingModes:{
//         text:Boolean,
//         image:Boolean,
//     },
//     pageCount:Number,
//     printType:String,
//     categories:{
//         0:String
//     },
//     maturityRating:String,
//     allowAnonLogging:Boolean,
//     contentVersion:String,
//     language:String,
//     previewLink:String,
//     infoLink:String,
//     canonicalVolumeLink:String
//   }],
//   salesInfo:[{
//     country:String,
//     saleability:String,
//     isEbook:Boolean,
//     listPrice:{
//         amount:Number,
//         currencyCode:String
//     },
//     retailPrice:{
//         amount:Number,
//         CurrencyCode:String,
//         buyLink:String
//     },
//     offers:{
//         0:{
//             finskyOfferType:Number,
//             listPrice:{
//                 amountInMicros:Number,
//                 currencyCode:String
//             },
//             retailPrice:{
//                 amountInMicros:Number,
//                 currencyCode:String           
//              },
//         },
//     },

//   }],
//   accessInfo:[{
//     country:String,
//     viewability:String,
//     embeddable:Boolean,
//     publicDomain:Boolean,
//     textToSpeechPermisssion:String,
//     epub:{
//         isAvailable:Boolean
//     },
//     pdf:{
//         isAvailable:Boolean,
//         acsTokenLink:String,
//         webReaderLink:String,
//         accessViewStatus:String,
//         quoteSharingAllowed:Boolean
//     },

//   }],
//   searchInfo:{
//   textSnippet:String,

  
//   },
// id:String,
// key:String,
// type:String,
// name:String,
// top_work:String,
// work_count:Number,
// version:String


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
    stream:String,
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