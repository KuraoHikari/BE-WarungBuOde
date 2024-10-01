import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.js";
import kyInstance, { isHTTPError } from "./api/baseWaApi.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("Hello World");
});

app.use(router);

app.get("/api/json-stat", async (req, res) => {
  const username = req.query.username;
  try {
    const response = await fetch(
      `https://github-readme-stats-tau-topaz-99.vercel.app/api/json-stat?username=${username}`
    );
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/wa/auth/login", async (req, res) => {
  try {
    const response = await kyInstance
      .post(`auth/login`, {
        json: {
          email: req.body.email,
          password: req.body.password,
        },
      })
      .json();

    return res.status(200).json(response);
  } catch (error) {
    if (isHTTPError(error)) {
      const errorResponse = await error.response.json();

      return res.status(400).send(errorResponse);
    }
    return res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.use((req, res) => {
  res.send("route tidak ditemukan.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
