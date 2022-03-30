const connection = require("../db/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const createNewUser = async (req, res) => {
  const { userName, phone, email, password, role_id } = req.body;
  let encryptedPassword;
  if (password) {
    encryptedPassword = await bcrypt.hash(password, saltRounds);
  }

  const query = `INSERT INTO users ( userName,phone,email, password, role_id) VALUES (?,?,?,?,?)`;
  const data = [userName, phone, email, encryptedPassword, role_id];
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(409).json({
        success: false,
        message: "have a problem with the register",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      message: "Success user Added",
      results: results,
    });
  });
};

/////////////////////////////////////////////////////////////////////////////////////
//get all users

const getAllUsers = (req, res) => {
  let skip = req.query.skip;
  let limit = req.query.limit;
  const query = `SELECT * FROM users WHERE is_deleted=0 LIMIT ${skip},${limit}  `;

  connection.query(query, (err, result, field) => {
    if (err) {
      res.json({ success: false, massege: "server erorr", err: err });
      res.status(500);
    } else {
      res.json({ success: true, massege: "All the users", result: result });
      res.status(200);
    }
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// delete user

const deleteUserById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE users SET is_deleted=1 WHERE id=?;`;

  connection.query(query, id, (err, result, field) => {
    if (err) {
      res.status(404);
      res.json({ success: false, massege: `The user: ${id} is not found` });
    } else {
      res.status(200);
      res.json({
        success: true,
        massege: `Succeeded to delete user with id: ${id}`,
      });
    }
  });
};

//=================================================
const getUsersNoLimit = (req, res) => {
  const query = `SELECT * FROM users WHERE is_deleted=0 `;

  connection.query(query, (err, result, field) => {
    if (err) {
      res.json({ success: false, massege: "server erorr", err: err });
      res.status(500);
    } else {
      res.json({ success: true, massege: "All the users", result: result });
      res.status(200);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUsers,
  deleteUserById,
  getUsersNoLimit,
};
