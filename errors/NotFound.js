import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPI.js";

// Pulls the CustomAPIError's functionality across
// This handles the errors that 
class NotFoundError extends CustomAPIError {
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.NOT_FOUND;
    }
  }

  export default NotFoundError