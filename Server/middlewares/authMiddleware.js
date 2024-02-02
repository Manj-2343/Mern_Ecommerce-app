import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes Token Base
export const requireSignIn = async (req, res, next) => {
  try {
    //decode the token
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRETE_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error.message);
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized Access....",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error: error.message,
        message: "Error in adminMiddleware",
      });
    }
  };
  