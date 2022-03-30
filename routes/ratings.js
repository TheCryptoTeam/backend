const express = require(`express`)
const {createNewRating,getRatings } =require('../controllers/rating')
const authentication = require("../middlewares/authentication");
const ratingsRouter=express.Router()

ratingsRouter.post("/:id",authentication,createNewRating)
ratingsRouter.get("/:id",getRatings)

module.exports=ratingsRouter