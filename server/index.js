require("dotenv").config();
//libraries
import express from "express";
import cors from "cors";  //cross origin request
import helmet from "helmet" //add security 

//microservices routes
import Auth from "./API/Auth";

//database conncection 
import connectDB from "./database/connection";
const zomato = express();
//application middlewares
zomato.use(express.json())
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());


//app routes
zomato.use("/auth", Auth);

zomato.get("/", (req,res) => res.json({message:"setup success"}));
zomato.listen(4000, ()=>
connectDB()
    .then(()=>console.log("server is running and databse is connected")
    .catch(()=>console.log("server is running but database conncection failed"))
    )
);