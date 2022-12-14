import request from "supertest";
import { app } from "../app";

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(app).get("/example")
            .expect(200);
    });

    it("should return OK", (done) => {
        return request(app).get("/example")
            .end(function(err, res) {
                expect(res.text).toContain("OK");
                done();
            });
    });
});
