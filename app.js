/**
 * @license Apache-2.0
 * @copyright inuldev 2024
 */

"use strict";

/**
 * node modules
 */
const cors = require("cors");
const cookieParser = require("cookie-parser");

/**
 * custom modules
 */
const login = require("./src/routes/login.route");
const auth = require("./src/routes/auth.route");
const authenticatedUser = require("./src/middlewares/auth_user.middleware");
const home = require("./src/routes/home.route");

// Initial express app
const express = require("express");
const app = express();

/**
 * EJS setting
 */
app.set("view engine", "ejs");

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());

/**
 * Login page
 */
app.use("/login", login);

/**
 * Auth page
 */
app.use("/auth", auth);

/**
 * Check user is authenticated
 */
app.use(authenticatedUser);

/**
 * Home page
 */
app.use("/", home);

app.listen(5000, () => {
  console.log(`Server listening att http://localhost:5000`);
});
