import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.get("/about", (req, res) => {
  console.log("req.body", req.body, "aboutme");
  res.send("About Me!");
});
app.post("/signup", (req, res) => {
  const { name, email } = req.body;
  res.send({ name, email });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
