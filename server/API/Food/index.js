// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /r
Des       Get all food based on particular restaurant
Params    id
Access    Public
Method    GET  
*/
