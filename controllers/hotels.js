const connection = require("../db/db");

const createNewHotels = (req, res) => {
  const query = `INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,city_id,price) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const {
    hotelName,
    image,
    image2,
    image3,
    image4,
    image5,
    guests,
    bedrooms,
    beds,
    bathrooms,
    description ,
    city_id,
    price,
  } = req.body;
  const data = [
    hotelName,
    image,
    image2,
    image3,
    image4,
    image5,
    guests,
    bedrooms,
    beds,
    bathrooms,
    description ,
    city_id,
    price,
  ];
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(201).json({
      success: true,
      results: results,
    });
  });
};
//===========================================
const getAllHotels = (req, res) => {
  const query = `SELECT * FROM hotels WHERE is_deleted=0`;
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      results: results,
    });
  });
};


const getHotelsLimit=(req, res)=>{
  let skip = req.query.skip;
  let limit = req.query.limit;
  const query= `SELECT * FROM hotels WHERE is_deleted=0 LIMIT ${skip},${limit}`
  connection.query(query,(err,results)=>{
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      })
    }
    res.status(200).json({
      success: true,
      results: results,
    });
  })
}
//===========================================
const gethotelByName = (req, res) => {
  const query = `SELECT * FROM hotels WHERE hotelName=? AND is_deleted=0`;
  const hotel = [req.query.hotelName];

  connection.query(query, hotel, (err, result) => {
    if (err) {
      res.json({ success: false, massege: "the hotel not found", err: err });
      res.status(404);
    } else {
      res.json({ success: true, massege: `the hotel `, result: result });
      res.status(200);
    }
  });
};
//================================================
const gethotelById = (req, res) => {
  const query = `SELECT * FROM hotels WHERE id=? AND is_deleted=0`;
  const id = req.params.id;
  connection.query(query, id, (err, result) => {
    if (err) {
      res.json({ success: false, massege: "the hotel not found", err: err });
      res.status(404);
    } else {
      res.json({ success: true, massege: ` the hotel `, result: result });
      res.status(200);
    }
  });
};
//===============================================
// const gethotelsBycity = (req, res) => {
//   const query = `SELECT  hotels.*,city.name FROM hotels inner Join city on city_id =city.id  WHERE hotels.is_deleted=0 AND city.id=?;`;
//   const cityName = req.params.city_id;
//   connection.query(query, cityName, (err, result) => {
//     if (err) {
//       res.json({ success: false, massege: "the hotels not found", err: err });
//       res.status(404);
//     } else {
//       res.json({ success: true, massege: ` the hotels `, result: result });
//       res.status(200);
//     }
//   });
// };

//=====================================================
const gethotelsBycity = (req, res) => {
  const query = `SELECT * FROM hotels WHERE is_deleted=0 AND city_id = ${req.params.id};`;
  
  
  connection.query(query, (err, result) => {
    if (err) {
      res.json({ success: false, massege: "the hotels not found", err: err });
      res.status(404);
    } else {
      res.json({ success: true, massege: ` the hotels `, result: result });
      res.status(200);
    }
  });
};

//===========================================
const updateHotelsById = (req, res) => {
  const query = `UPDATE hotels SET ? WHERE id=? AND is_deleted=0`;
  const body = req.body;
  const id = req.params.id;
  const data = [body, id];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.json(err);
    }

    res.json(result);
  });
};
//===========================================
const deleteHotelsById = (req, res) => {
  const query = `UPDATE hotels SET is_deleted=1 WHERE id=?`;
  const id = req.params.id;
  connection.query(query, id, (err) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: `The hotel: ${id} is not found`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massege: `Succeeded to delete hotel with id: ${id}`,
    });
  });
};
module.exports = {
  createNewHotels,
  getAllHotels,
  getHotelsLimit,
  updateHotelsById,
  deleteHotelsById,
  gethotelByName,
  gethotelById,
  gethotelsBycity,
};
