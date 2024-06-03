import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.body.token || req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token missing",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;
    } catch (e) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
    });
  }
};
