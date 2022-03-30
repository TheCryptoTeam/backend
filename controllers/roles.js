const connection = require("../db/db");

const createNewRole = (req, res) => {
  const { roleName } = req.body;
  const query = `INSERT INTO roles (role) VALUES (?)`;
  const values = [roleName];
  connection.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Role created successfully",
      data: results,
    });
  });
};

module.exports = { createNewRole };
