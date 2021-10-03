//env
require("dotenv").config();


import express from "express";
import cors from "cors";
import helmet from "helmet";

//API
import Auth from "./API/Auth";

//database cnnection
import ConnectDB from "./database/connections";



const zomato=express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

//For application routes
//route-> localhost:4000/auth/signup
zomato.use("/auth",Auth);



zomato.get("/",(req,res) => res.json({message:"Setup sicc"}));

zomato.listen(4000,()=>
ConnectDB().then(()=>console.log("server is up and running"))
.catch(()=>console.log("DB connection failed")));