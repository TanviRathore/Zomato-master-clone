import express from "express";
import {FoodModel} from "../../database/allmodel";

const Router = express.Router();

/*
Route           /food/r/:_id
Description     Get all food related to particular restaurant
params          _id
Access          Public
Method          GET
*/

Router.get("/r/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});
        
        return res.json({foods});
    }catch(error){
       return res.status(500).json({error: error.message});
    }
});

/*
Route           /food/c/:category
description     get all the food based on particular category
Params          category
Access          Public
Method          GET
*/

Router.get("/c/:category", async (req, res) => {
    try{
        const {category} = req.params;

        const foods = await FoodModel.findOne({
            category: {$regex: category, $options: "i"},
        });

        return res.json({foods});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;