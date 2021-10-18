import express from "express";
import {FoodModel} from "../../database/allmodel";

import { ValidateCategory, ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
Route           /food/:_id
Des             Get specific food
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const foods = await FoodModel.findById(_id);
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route           /food/r/:_id
Description     Get all food related to particular restaurant
params          _id
Access          Public
Method          GET
*/

Router.get("/r/:_id", async (req, res) => {
    try{
        await ValidateRestaurantId(req.params);
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

        await ValidateCategory(req.params);
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