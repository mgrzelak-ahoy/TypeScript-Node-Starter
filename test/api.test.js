"use strict";
exports.__esModule = true;
var supertest_1 = require("supertest");
var app_1 = require("../src/app");
describe("GET /api", function () {
    it("should return 200 OK", function () {
        return supertest_1["default"](app_1["default"]).get("/api")
            .expect(200);
    });
});
