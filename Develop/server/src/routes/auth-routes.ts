import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;

    const user = await User.findOne({
        where: { username },
    });
    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).json({ message: 'Incorrect password' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';
    if (!secretKey) {
      return res.status(500).json({ message: 'Internal server error: JWT_SECRET_KEY is not set' });
    }

    const token = jwt.sign({ id: user.id, username: user.username, }, secretKey, { expiresIn: '1h' });
    console.log('Token generated:', token);
    return res.json({ token });
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
