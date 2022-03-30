const express = require("express");

//controllers
const { createNewComment, getAllComments,deleteComment } = require("../controllers/comments");

//middlewares
const authentication = require("../middlewares/authentication");

const commentsRouter = express.Router();

commentsRouter.post(
  "/hotels/:hotel_id/comments",
  authentication,
  createNewComment
);
commentsRouter.get(
  "/hotels/:hotel_id/comments",
  getAllComments
);

commentsRouter.delete(
  "/hotels/:id/comments",
  deleteComment
);

module.exports = commentsRouter;
