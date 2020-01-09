import request from "supertest";
import app from "../../src/app";

describe("POST /email_template", () => {
    it("should return 200 OK", () => {
        return request(app).post("/email_template").send(
            {
                emailKey: 'example',
                emailData: {
                    companyName: "Ahoy",
                     firstName: "Michal"
                }})
            .expect(200);
    });
});
