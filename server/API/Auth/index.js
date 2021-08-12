//Library
import express from "express";



//Models
import {UserModel} from "../../database/user";

const Router = express.Router();

/*
Route         /signup
description   signup with email and password
params        none
access        public
method        post
*/

Router.post("/signup", async (req,res)=>{
    try {
        
        //check whether user exist by pre defined static in user schema "findByEmailAndPhone"
        await UserModel.findByEmailAndPhone(req.body.credentials);
       

        //save to DB
        const newUser=await UserModel.create(req.body.credentials);
        //generate JWT auth token
        const token = newUser.generateJwtToken();

        //return
        return res.status(200).json({token, status:"success"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

export default Router;