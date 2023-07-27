import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/user";

export function myController(req: Request, res: Response, next: NextFunction) {
  res.json({ msg: 'respond with a resource from users' });
}

export async function signup (req: Request, res: Response, next: NextFunction) {
  const newId = uuidv4();
  const { username, email, password } = req.body;
  try {
    await User.create({
      id: newId,
      username,
      email,
      password
    });
    res.status(201).json({ msg: 'New user added successfully!' });
  } catch (error: any) {
    res.json({ error: error.message });
  }
}