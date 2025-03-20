import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}
interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("Unauthorized: No token provided");
      return res.sendStatus(401);   
  }

  const token = authHeader.split(" ")[1];
  const secretKey = process.env.JWT_SECRET_KEY || "";

  if (!secretKey) {
    console.error('JWT_SECRET_KEY is not defined!');
    return res.status(500).send('Internal Server Error'); 
  }

  jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
          console.log("Forbidden: Invalid token", err);
          res.sendStatus(403);
          return;
      }

      console.log("Decoded token:", decoded);
      req.user = decoded as JwtPayload;
      next();
  });

  return;
};
