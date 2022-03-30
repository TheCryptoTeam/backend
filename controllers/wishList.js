const connection = require("../db/db");

const addToWishList = (req, res) => {
    const user_id = req.token.userId;
    const hotel_id = req.params.id;
    const data = [user_id, hotel_id];
    const query = `INSERT INTO wishList (user_id, hotels_id) VALUES (?,?)`;
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(404).json({
          success: false,
          massage: "something went wrong while Adding to wishList",
          err: err,
        });
      }
  
      res.status(201).json({
        success: true,
        massage: "added successfully ",
        result: result,
      });
    });
  };

  //====================================

//GetMyWishList

const GetMyWishList = (req, res) => {
    const query = `SELECT   wishList.*,hotels.hotelName,hotels.image,hotels.price
  
    FROM wishList inner Join hotels on hotels_id = hotels.id WHERE wishList.is_deleted=0 AND wishList.user_id=${req.token.userId} ;`;
  
    connection.query(query, (err, result) => {
      if (err) {
          return res.status(500).json({
            success: false,
            massage: "Server Error",
            err: err,
          });
        }
      if (!result.length) {
          return res.status(500).json({
          success: true,
          massage: "The wishList is empty",
          
        });
      }
  
      res.status(200).json({
        success: true,
        massage: "All the wishList",
        results: result,
      });
    });
  };

  //===================================================

const deleteFromMyWishList = (req, res) => {
  const id = req.params.id;

  const query = `UPDATE wishList SET is_deleted=1 WHERE id=?;`;

  const data = [id];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!results.changedRows) {
      return res.status(404).json({
        success: false,
        massage: `The wishList: ${id} is not found`,
        err: err,
      });
    }

    res.status(200).json({
      success: true,
      massage: `Succeeded to delete wishList with id: ${id}`,
      results: results,
    });
  });
};

  module.exports={
    addToWishList,
    GetMyWishList,
    deleteFromMyWishList
  }