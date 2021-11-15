import express from "express";
import {UserModel} from "../../database/allmodel";

const Router = express.Router();

/*
Route           /password/checkOtp/:email
Des             Check for otp
Params          email
Body            otpEnter
Access          Public
Method          PUT
*/

Router.get("/checkOtp/:email", async(req, res) => {
    try{
        const {email} = req.params;
        const {otpEnter} = req.body;

        const user = await UserModel.find({email});
        const {otp} = user;

        if(otpEnter !== otp)
        {
            alert(`Ivalid OTP.......
            Redirect yourself to previous page to regenerate new OTP...`
            );
            // history.push("/forget/passreset")
            return res.redirect(`http://localhost:3000/forget/passreset`) ;
        }

        return res.redirect(`http://localhost:3000/reset/otp/${email}`)
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route           /password/otp/:email
Des             Get otp and save it
Params          email
Access          Public
Method          PUT
*/

Router.put("/otp/:email", async (req, res) => {
    try{
        const otp =  Math.floor(1000 + Math.random() * 9000);
        console.log(otp);
        const {email} = req.params;
        console.log({email});

        const user = await UserModel.findOneAndUpdate({email}, {$set: {"otp": otp}},{new: true, upsert: true});
            console.log(user);
        return res.json({ otp: user.otp });

    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;