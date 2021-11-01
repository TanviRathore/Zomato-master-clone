require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import ConnectDB from "./database/connection";

import googleAuthConfig from "./config/google.config";

import Auth from "./API/Auth/index";
import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";
import Menu from "./API/Menu/index";
import Image from "./API/Image/index";
import Order from "./API/Order/index";
import Review from "./API/Review/index";
import User from "./API/User/index";
import MailService from "./API/Mail/index";

const zomato = express();

// passport configuration
googleAuthConfig(passport);

zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(passport.initialize());
zomato.use(passport.session());

//API
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);
zomato.use("/mail", MailService);

zomato.get("/", (req, res) => {
  res.json({ message: "Setup Success" });
});

zomato.listen(4000, () => 
ConnectDB()
    .then(() => console.log("Server is running"))
    .catch((error) =>
      console.log(error)
    )
);
