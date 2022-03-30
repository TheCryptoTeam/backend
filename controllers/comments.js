const connection = require("../db/db");

const createNewComment = (req, res) => {
  const hotelId = req.params.hotel_id;
  const commenter_id = req.token.userId;
  const commenter = req.token.userName;
  const { comment } = req.body;

  const query = `INSERT INTO comments (comment, commenter_id, hotels_id,commenter) VALUES (?,?,?,?)`;
  const data = [comment, commenter_id, hotelId,commenter];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: "something went wrong while creating a new comment",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(201).json({
      success: true,
      massage: "The comment has been created success ",
      results: results,
    });
  });
};

//get all comment

const getAllComments = (req, res) => {
  const query = `SELECT * FROM comments WHERE hotels_id=? AND is_deleted=0`;
  const hotelID = [req.params.hotel_id];

  connection.query(query, hotelID, (err, result, field) => {
    if (err) {
      res.json({ success: false, massege: "the comments not found", err: err });
      res.status(404);
    } else {
      res.json({ success: true, massege: `the comments `,comments: result });
      res.status(200);
    }
  });
};

const deleteComment = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE comments SET is_deleted=1 WHERE id=? AND is_deleted=0`;

  connection.query(query, id, (err, result, field) => {
    if (err) {
      res.status(404);
      res.json({ success: false, massege: `The comment: ${id} is not found` });
    } else {
      res.status(200);
      res.json({
        success: true,
        massege: `Succeeded to delete comment with id: ${id}`,
      });
    }
  });
};

module.exports = {
  createNewComment,
  getAllComments,
  deleteComment,
};
