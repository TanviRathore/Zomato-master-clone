require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());
zomato.use(express.urlencoded({ extended: false }));

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
