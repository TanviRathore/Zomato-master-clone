import express from "express";
import passport from "passport";

import { UserModel } from "../../database/allmodel";
import {ValidateSignIn, ValidateSignUp} from "../../validation/auth";

const Router = express.Router();

/*
Route           /auth//signup
description     add a new user
params          none
Access          Public
method          POST
*/

Router.post("/signup", async (req, res) => {
    try{
        await ValidateSignUp(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const  newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "success" });
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route           /auth/signin
description     Sign In the user
params          none
Access          Public
method          POST
*/

Router.post("/signin", async (req, res) => {
    try{
        await ValidateSignIn(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token, status: "success"});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route           /auth/google
Desc            Signin with email and password
Params          none
Access          Public
Method          GET
*/

Router.get("/google", passport.authenticate("google",{
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
}));

/*
Route           /auth/google/callback
Desc            for redirecting
Params          none
Access          Public
Method          GET
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}), async (req, res) => {
    return res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`);
});

export default Router;