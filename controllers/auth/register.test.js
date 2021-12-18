/*
1. ответ должен иметь статус-код 200
2. в ответе должен возвращаться токен
3. в ответе должен возвращаться объект user с 2 полями email и subscription,
 имеющие тип данных String
*/
/*
const express = require("express");
const request = require("supertest");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

const isRegister = require("./register");

const app = express();

app.get("/api/auth", isRegister);

describe("test Register controller", () => {
  let server, user, token;
  beforeAll(() => {
    server = app.listen(3000);
    const SECRET_KEY = process.env.JWT_SECRET_KEY;
    const issueToken = (payload, secret) => jwt.sign(payload, secret);
    token = issueToken({ id: user._id }, SECRET_KEY);
    await User.updateOne({ _id: user._id }, { token });
  });

  describe("POST request", () => {
    it("should return status 201 create", async () => {
      const response = await request(app)
        .post("/api/auth")
        .set("Authorization", `Bearer ${token}`)
        .send(newCat)
        .set("Accept", "application/json");

      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
      console.log(response.body);
    });
  });
});
*/
