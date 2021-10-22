import express from "express";
import passport from "passport";
import {UserModel} from "../../database/allmodel";

const Router = express.Router();

/*
Route           /user
Des             Get user data
Params          null
Access          Public
Method          GET
*/

Router.get("/", passport.authenticate("jwt"), (req, res) => {
    try{
        const {email, fullName, phoneNumber, address} = req.session.passport.user._doc;

        return res.json({ user: { email, fullName, phoneNumber, address } });
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route           /user/:_id
Des             Get user data
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;

        const getUser = await UserModel.findById(_id);

        if (!getUser) return res.status(400).json({ user: "User not found" });
        
        const { fullName } = getUser;

        return res.json({ user: { fullName } });
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route           /user/update/:userId
Des             update user data
Params          userId
BODY            user data
Access          Public
Method          PUT
*/

Router.put("/update/:userId", async (req, res) => {
    try{
        const {userId} = req.params;

        const {userData} = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData,
            },
            {
                new: true,
            }
        );
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;