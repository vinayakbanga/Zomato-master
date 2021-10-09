import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

//Models
 import { UserModel } from "../../database/user";

 // validation
import { ValidateSignup, ValidateSignin } from "../../Validation/auth"
/*
Route  /signup
Descrip  Signup with email and password
params  None
Access Public
 Method Post
 */

 Router.post("/signup",async(req,res)=>{
     try{

        await ValidateSignup(req.body.credentials);
         
         
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
        await ValidateSignin(req.body.credentials);
        
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

/*
Route  /google
Descrip  google signin
params  None
Access Public
 Method get
 */


Router.get("/google", passport.authenticate("google",{
scope: [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email"
],
})
);
/*
Route         /google/callback
Descrip       Google Signin callback
Params        None
Access        Public
Method        GET
*/

Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req,res) => {
  return res.json({token: req.session.passport.user.token});
}
);


 export default Router;