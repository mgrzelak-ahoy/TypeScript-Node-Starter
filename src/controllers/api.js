"use strict";
exports.__esModule = true;
var mjml_react_1 = require("mjml-react");
var example_1 = require("../emails/example/example");
/**
 * GET /email_template
 * Email Api example
 */
// eslint-disable-next-line import/prefer-default-export
exports.getEmail = function (req, res) {
    console.log(req.query);
    var html = mjml_react_1.render(example_1.ExampleHtml({ title: "asd", buttonContent: "asd" }), { validationLevel: "soft" }).html;
    /*  res.json({
          htmlMessage: html,
          message: "testMessage"
      }); */
    res.send(html);
};
