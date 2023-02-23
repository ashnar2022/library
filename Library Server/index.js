//import express
const express= require('express');

//import cors
const cors=require('cors');


//import dataservices
const dataservices=require('./services/dataServices');


//app creation
const app=express();

//use json parser for server response
app.use(express.json())

//using cors specify the origin to the server
app.use(cors({
    origin:('http://localhost:4200')
}))
 

//Setting port number
app.listen(3000,()=>{
    console.log("listen to the port 3000");
}
)


//API call to get all books
app.get('/all-books',(req,res)=>{
    dataservices.getBooks().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


//Register request
app.post('/reg',(req,res)=>{
    dataservices.reg(req.body.id,req.body.username,req.body.password,req.body.email,req.body.phn).then(
        result=>{
         res.status(result.statusCode).json(result)

        }
    )
})

//Login request

app.post('/login',(req,res)=>{
    dataservices.login(req.body.id,req.body.password).then(
        result=>{
         res.status(result.statusCode).json(result)

        }
    )

 })

 //add to mybooks
 app.post('/addmybooks',(req,res)=>{
    dataservices.addtomybooks(req.body.id,req.body.Name,req.body.Author,req.body.Category,req.body.
        series,req.body.Totalpages,req.body.Storyline,req.body.image).then(
        result=>{
         res.status(result.statusCode).json(result)

        }
    )

 })
 //add to mybooks from adventure
 app.post('/addmybooks',(req,res)=>{
    dataservices.addadventuretomybooks(req.body.id,req.body.Name,req.body.Author,req.body.Category,req.body.
        series,req.body.Totalpages,req.body.Storyline,req.body.image).then(
        result=>{
         res.status(result.statusCode).json(result)

        }
    )

 })

 //add to mybooks from sciencefiction
 app.post('/addmybooks',(req,res)=>{
    dataservices.addsciencefictiontomybooks(req.body.id,req.body.Name,req.body.Author,req.body.Category,req.body.
        series,req.body.Totalpages,req.body.Storyline,req.body.image).then(
        result=>{
         res.status(result.statusCode).json(result)

        }
    )

 })

 //API call to get mybooks 
app.get('/getmybooks',(req,res)=>{
    dataservices.getmybooks().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//deletemybooks
app.delete('/deletemybooks/:id',(req,res)=>{
    dataservices.deletemybooks(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// //API call to get userdetails
// app.get('/getuserdetails/:id',(req,res)=>{
//     dataservices.getuserdetails().then(
//         result=>{
//             res.status(result.statusCode).json(result)
//         }
//     )
// })



//API call to get adventure books
app.get('/adventure',(req,res)=>{
    dataservices.getadventure().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


//API call to get sciencefiction books
app.get('/sciencefiction',(req,res)=>{
    dataservices.getsciencefiction().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//call single book details of allbooks
app.get('/bookdetails/:id',(req,res)=>{
    dataservices.bookdetails(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//call single book details of adventurebooks
app.get('/adventurebookdetails/:id',(req,res)=>{
    dataservices.adventurebookdetails(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//call single book details of sciencefiction
app.get('/sciencedetails/:id',(req,res)=>{
    dataservices.sciencedetails(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
