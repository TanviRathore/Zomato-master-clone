require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import ConnectDB from "./database/connection";

import Auth from "./API/Auth/index";

import googleAuthConfig from "./config/google.config";

const zomato = express();

// passport configuration
googleAuthConfig(passport);

zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.use("/auth", Auth);

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
