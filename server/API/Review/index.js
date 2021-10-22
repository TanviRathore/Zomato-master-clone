import express from "express";
import passport from "passport";
import ReviewModel from "../../database/allmodel";

const Router = express.Router();

/*
Route           /review/:resid
Description     get all the reviews related to particular restaurant
Params          resid
Access          Public
Method          GET
*/

Router.get("/:resid", async (req, res) => {
    try{
        const {resid} = req.params;
        const reviews = await RestaurantModel.find({restaurant: resid});

        return res.json({reviews});
    }catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /review/new
Description     Add new food review/rating
Params          none
BODY            review object
Access          Public
Method          POST
*/

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try{
        const {_id} = req.session.passport.user._doc;
        const {reviewData} = req.body;

        await ReviewModel.create({...reviewData, user: _id});

        return res.json({ review: "Review Successfully created" });
    }catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /review/delete/:id
Descriptio      Delete food review/rating
Params          _id
BODY            none
Access          Public
Method          DELETE
*/

Router.delete("/delete/:_id", async (req, res) => {
    try{
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Successfully Deleted Review"});
    }catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;