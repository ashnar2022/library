//import db
const db=require('./db');


// userDetails={
//     1000:{id:1000,username:"Athira",password:1000},
//    1001:{id:1001,username:"Arathi",password:1001},
//     1002:{id:1002,username:"Adhra",password:1001},
//   }


 const reg =(id,username,password,email,phn)=>{                //using mogodb
    return db.User.findOne({id}).then(
        user=>{
            if(user){
                return{
                    status:false,
                    statusCode:401,
                    message:"User already exist",

                }
            }
            else{
                const newUser= new db.User({
                  id:id,
                  username:username,
                  password:password,
                  email:email,
                  phn:phn,
                })
                newUser.save()  //to save new data to mongodb
                return {
                    status:true,
                    statusCode:200,
                    message:"Register Successful"
                   }
                
                } 
        }
        
    )
 }
 
     
//     if (id in userDetails){              //without using mongodb
//       return {
//         status:false,
//         statusCode:200,
//         message:"User already exist",

//       }
//     }
  
//     else{
//        userDetails[id]={
//         id:id,
//         username:username,
//         password:password,
       
//        }
 
//        return {
//         status:true,
//         statusCode:401,
//         message:"Register Successful"
//        }
//     }
//    }

  const login=(id,password)=>{
    return db.User.findOne({id,password}).then(
        user=>{
           if(user){
            currentUser=user.username;
            currentId=id
            return {
                status:true,
                statusCode:200,
                message:"Login Successful",
                currentUser:user.username,
          currentId:id
               }
            }
          
          else{
           
            return {
                status:false,
                statusCode:401,
                message:"Invalid userdetails"
               }
           } 
        }
    )
  
    if(id in userDetails){
   
    
      if(pswd==userDetails[id]['password']){
        currentUser=userDetails[id]['username'];
        currentId=id
       
        return {
            status:true,
            statusCode:200,
            message:"Login Successful"
           }
        }
      
      else{
       
        return {
            status:false,
            statusCode:401,
            message:"Invalid Password"
           }
      }
    }
    else{
       
        return {
            status:false,
            statusCode:401,
            message:"Invalid Userdetails"
           }
    }
}
      
    
  
  





//get all books details from db

const getBooks=()=>{
   return db.Book.find(). then(
       (result)=> {
       if(result){
        return{
            status:true,
            statusCode:200,
            books:result
        }
       }
       else{
        return{
            status:false,
            statusCode:402,
            message:'Book not found'
        }
       }
    }
    )  
}

//add to mybooks details from db

const addtomybooks=(id,Name,Author,Category, Series, Totalpages,Storyline, image)=>{

return db.Mybooks.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:false,
                statusCode:401,
                message:'Book already added'
            }
        }
        else{
            const newBook=new db.Mybooks({
                id,Name,Author,Category, Series, Totalpages,Storyline, image
            })
              newBook.save()
              return{
                status:true,
                statusCode:200,
                message:'Book added successfully'
            }
        }
    }
)
}



//add to my books from adventure
const addadventuretomybooks=(id,Name,Author,Category, Series, Totalpages,Storyline, image)=>{

    return db.Mybooks.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Book already added'
                }
            }
            else{
                const newBook=new db.Mybooks({
                    id,Name,Author,Category, Series, Totalpages,Storyline, image
                })
                  newBook.save()
                  return{
                    status:true,
                    statusCode:200,
                    message:'Book added successfully'
                }
            }
        }
    )
    }



    //add to my books from sciencefiction
const addsciencefictiontomybooks=(id,Name,Author,Category, Series, Totalpages,Storyline, image)=>{

    return db.Mybooks.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Book already added'
                }
            }
            else{
                const newBook=new db.Mybooks({
                    id,Name,Author,Category, Series, Totalpages,Storyline, image
                })
                  newBook.save()
                  return{
                    status:true,
                    statusCode:200,
                    message:'Book added successfully'
                }
            }
        }
    )
    }

//get mybooks details from db
const getmybooks=()=>{
    return db.Mybooks.find(). then(
        (result)=> {
        if(result){
         return{
             status:true,
             statusCode:200,
             books:result
         }
        }
        else{
         return{
             status:false,
             statusCode:402,
             message:'My books is empty'
         }
        }
     }
     )  
 }


 //deletemybook
 const deletemybooks=(id)=>{
    return db.Mybooks.deleteOne({id}).then(
        (result)=> {
            if(result){
             return{
                 status:true,
                 statusCode:200,
                 books:result,
                 message:"Book removed successfully"
             }
            }
            else{
             return{
                 status:false,
                 statusCode:402,
                 message:'My books is empty'
             }
            }
       
        }
    )
 }
 

// //toget user details
// const getuserdetails=(currentUser)=>{
//     return db.User.find(). then(
//         (result)=> {
//         if(result){
//          return{
//              status:true,
//              statusCode:200,
//              user:result
//          }
//         }
//         else{
//          return{
//              status:false,
//              statusCode:402,
//              message:'user not found'
//          }
//         }
//      }
//      )  
//  }



//get all books details from db

const getadventure=()=>{
    return db.Adventure.find(). then(
        (result)=> {
        if(result){
         return{
             status:true,
             statusCode:200,
             adventure:result
         }
        }
        else{
         return{
             status:false,
             statusCode:402,
             message:'Book not found'
         }
        }
     }
     )  
 }


 const getsciencefiction=()=>{
    return db.Sciencefiction.find(). then(
        (result)=> {
        if(result){
         return{
             status:true,
             statusCode:200,
             sciencefiction:result
         }
        }
        else{
         return{
             status:false,
             statusCode:402,
             message:'Book not found'
         }
        }
     }
     )  
 }


//to get single book details of all books
 const bookdetails=(id)=>{
    return db.Book.find({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    book:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'book  not found'
                }
            }
        }
    )
}

//to get single book details of adventure books
const adventurebookdetails=(id)=>{
    return db.Adventure.find({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    adventure:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Book not found'
                }
            }
        }
    )
}




//to get single book details of sciencefiction books
const sciencedetails=(id)=>{
    return db.Sciencefiction.find({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    sciencefiction:result
                }
            }

            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Book not found'
                }
            }
        }
    )
}
module.exports={
    getBooks,
    reg,
    login,
    addtomybooks,
    getmybooks,
    deletemybooks,
    // getuserdetails
    getadventure,
    getsciencefiction,
     addadventuretomybooks,
     addsciencefictiontomybooks,bookdetails,
     adventurebookdetails,
     sciencedetails
}
 