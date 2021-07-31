import express from "express";
import cors from "cors";  //cross origin request
import helmet from "helmet" //add security 

const zomato = express();
//application middlewares
zomato.use(express.json())
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());


zomato.get("/", (req,res) => res.json({message:"setup success"}));
zomato.listen(4000, ()=>console.log("server is running"));