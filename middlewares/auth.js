import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization === undefined) return res.status(401).json({ message: "Unauthorized" });
    
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
