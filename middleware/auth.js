import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.token;
 console.log(token);
  if (!token) {
   
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const testUser = payload.userId === "63a4415dd2da310c2b2da628";
    req.user = { userId: payload.userId, testUser };
   
    next();
  } catch (error) {
    
    throw new UnAuthenticatedError("Authentication invalid");
  }
};

export default auth;
