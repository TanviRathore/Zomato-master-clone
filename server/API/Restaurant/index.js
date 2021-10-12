import express from "express";
import RestaurantModel from "../../database/allmodel";

const Router = express.Router();

/*
Route           /restaurant
Des             Get all the restaurant details based on the city name
Params          none
Access          Public
Method          GET
*/

Router.get("/restaurant", async(req, res) => {
    try{
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});

        return res.json({ restaurants });
    }catch(error) {
        return res.status(500).json({error: error.message});
    };
});

/*
Route           /restaurant/:_id
Des             Get individual restaurant details based on id
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if(!restaurant){
            return res.status(404).json({ error: "Restaurant Not Found" });
        }

        return res.json({restaurant});

    }catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /restaurant/search
Des             Get restaurant details based on search string
Params          none
Access          Public
Method          GET
*/

Router.get("/search", async (req, res) => {
    try{
        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });

        if(!restaurant){
            return res.status(404).json({ error: `No restaurant matched with ${searchString}` });
        }

        return res.json({ restaurants });

    }catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;