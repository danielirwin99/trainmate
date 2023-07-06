import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";


// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/connect.js";

// Routers
import authRouter from "./routes/authRoute.js";
import journalRouter from "./routes/journalRoute.js";
import errorHandlerMiddleware from "./middleware/ErrorHandler.js";
import authenticateUser from "./middleware/auth.js";

// Lets us pass through json data with this Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== "productions") {
  app.use(morgan("dev"));
}

// Our Cookie Middleware
app.use(cookieParser());

app.use(mongoSanitize());

// Our Base URL
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API Base" });
});

// Auth Router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/exercises", authenticateUser, journalRouter);

// Middleware
app.use(notFoundMiddleware);
// This converts the errors into json readable error responses
app.use(errorHandlerMiddleware);


// Our port from localHost
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
