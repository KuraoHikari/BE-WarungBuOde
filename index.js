import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.js";

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

app.use((req, res) => {
  res.send("route tidak ditemukan.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
