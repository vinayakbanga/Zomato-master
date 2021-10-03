import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Router = express.Router();

//Models
 import { UserModel } from "../../database/user";

/*
Route  /signup
Descrip  Signup with email and password
params  None
Access Public
 Method Post
 */

 Router.post("/signup",async(req,res)=>{
     try{
         
         
         await UserModel.findEmailAndPhone(req.body.credentials);

         //db
          const newUser = await UserModel.create(
              req.body.credentials);

          //JWT auth token
          const token = newUser.generateJwtToken();

          return res.status(200).json({token,  status: "Success"});



     } catch(error){
         return res.status(500).json({error : error.message});
     }

 });

 
/*
Route  /signin
Descrip  Signin with email and password
params  None
Access Public
 Method Post
 */

 Router.post("/signin",async(req,res)=>{
    try{
        
        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
        );
        
        await UserModel.findEmailAndPhone(req.body.credentials);

        //db
        //  const newUser = await UserModel.create(
        //      req.body.credentials);

         //JWT auth token
         const token = user.generateJwtToken();

         return res.status(200).json({token,  status: "Success"});



    } catch(error){
        return res.status(500).json({error : error.message});
    }

});

 export default Router;