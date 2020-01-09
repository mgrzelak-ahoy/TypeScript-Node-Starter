"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var path_1 = require("path");
// Controllers (route handlers)
var apiController = require("./controllers/api");
// Create Express server
var app = express_1["default"]();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path_1["default"].join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
/**
 * Primary app routes.
 */
app.get("/email_template", apiController.getEmail);
exports["default"] = app;
