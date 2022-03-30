const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db/db");

//routers

const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

//importing routers
const rolesRouter = require("./routes/roles");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");

const hotelsRouter = require("./routes/hotels");

const citiesRouter = require("./routes/cities");
const wishListRouter = require("./routes/wishList")
const ratingsRouter =require('./routes/ratings')
const stripe = require("./routes/stripe");
const commentsRouter = require("./routes/comments");


// router middleware
app.use("/roles", rolesRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);

app.use("/hotels", hotelsRouter);

app.use("/cities", citiesRouter);
app.use("/wishList",wishListRouter)
app.use("/rate",ratingsRouter)
app.use("/payment", stripe);
app.use(commentsRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
