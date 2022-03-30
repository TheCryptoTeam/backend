const connection = require("../db/db");

const createNewRating =(req,res)=>{
    const hotelId= req.params.id
    const userId =req.token.userId
    const {rating}=req.body
    const query =`INSERT INTO ratings (rating,user_id,hotels_id) VALUES (?,?,?)`
    const data =[rating,userId,hotelId]
    connection.query(query,data,(err,result)=>{
        if (err) {
            return res.status(404).json({
                success: false,
          massage: "something went wrong while creating a new Rateing",
          err: err,
            })
            
        }
        res.status(201).json({
            success: true,
            massage: "The Rateing has been created success ",
            results: result,
        })
    })
}

const getRatings =(req,res)=>{
    const query ='SELECT * FROM ratings WHERE hotels_id=? AND is_deleted=0'
    const hotel_id =[req.params.id]
    connection.query(query,hotel_id,(err,result)=>{
        if (err) {
            res.json({ success: false, massege: "the rating not found", err: err });
            res.status(404);
          } else {
            res.json({ success: true, massege: `the ratings `,results: result });
            res.status(200);
          }
       
    })
}



module.exports={
    createNewRating,
    getRatings 
}