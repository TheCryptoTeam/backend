const express = require("express");

const { createNewUser, getAllUsers,deleteUserById,getUsersNoLimit } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/", createNewUser);

usersRouter.get("/", getAllUsers);
usersRouter.get("/AllUsers", getUsersNoLimit);
usersRouter.delete("/:id", deleteUserById);



module.exports = usersRouter;
