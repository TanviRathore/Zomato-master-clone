import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    restrauName: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    mapLocation: {type: String, required: true},
    cusine: [String],
    restaurantTimmings: String,
    contact: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menu: {type: mongoose.Types.ObjectId, ref: "Menus"},
    menuImages: {type: mongoose.Types.ObjectId, ref: "Images"}, 
    reviews: [{type: mongoose.Types.ObjectId, ref: "Reviews"}],
    photo:  {type: mongoose.Types.ObjectId, ref: "Images"},
},{
    timestamps: true,
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);