import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allmodel";

const Router = express.Router();

/*
Route           /order/:_id
Description     Get all orders based on id
Params          _id
Access          Public
Method          GET
*/

Router.get("/:_id", passport.authenticate('jwt', { session: false }), async (req, res) => {
    try{
        const {_id} = req.params;

        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders) {
            return res.status(404).json({error: "User not found"});
        }

        return res.status(200).json({orders: getOrders});

    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route           /order/new/:_id
Description     Add new order
Params          _id
Body            orderDetails
Access          Public
Method          POST
*/

Router.post("/new", passport.authenticate('jwt'), async (req, res) => {
    try{
        const {_id} = req.params;

        const {orderDetails} = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id,
            },
            {
                $push: {orderDetails},
            },
            {
                new: true,
            }
        );

        if (!addNewOrder) {
            const details = await OrderModel.create({
              user: _id,
              orderDetails: [orderDetails],
            });
            console.log(details);
            return res.json({ order: details });
          }

        return res.json({ order: addNewOrder });

    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;