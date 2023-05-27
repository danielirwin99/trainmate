import express from "express";
const app = express();

// Middleware
import notFoundMiddleware from "./middleware/not-found";

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(notFoundMiddleware());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`);
    });
  } catch (error) {}
};
start();
