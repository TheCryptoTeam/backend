const express=require("express")

//controllers
const {createNewCity, getAllCities, getCityByName,
    updateCityById, deleteCityById,
    getCityById, getCityNoLimit}=require("../controllers/cities");
const citiesRouter=express.Router()
citiesRouter.post("/",createNewCity)
citiesRouter.get("/",getAllCities)
citiesRouter.get("/search_name/:name",getCityByName)
citiesRouter.get("/search_id/:id",getCityById)
citiesRouter.put("/:id", updateCityById);
citiesRouter.delete("/:id",deleteCityById)
citiesRouter.get("/nolimit",getCityNoLimit)








module.exports=citiesRouter
