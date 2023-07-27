import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { Book } from "../models/book";

/** A dummy controller function, just to test if my routes are working */
export function myController(req: Request, res: Response) {
  res.json({ "msg": "respond with a resource from books" });
}

export async function addBook(req: Request, res: Response) {
  const newId = uuidv4();
  try {
    const { title, datePublished, description, pageCount, publisher, author } = req.body;
    await Book.create({ bookId: newId, title, datePublished, description, pageCount, publisher, author })
    res.redirect(201, `/books/${newId}`)
  } catch (error: any) {
    res.status(500).json({ 'error': error.message });
  }
}

export async function getAllBooks(req: Request, res: Response) {
  console.log('calling controller function to get all books');
  try {
    const allBooks = await Book.findAll();
    res.json(allBooks)
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getBook(req: Request, res: Response) {
  console.log('calling controller function to get a book by id');
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book.dataValues.title);
    } else {
      throw new Error("Book not found!");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteBook(req: Request, res: Response) {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.redirect(200, '/books');
    } else {
      throw new Error("Book not found!");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateBook(req: Request, res: Response) {
  const id = req.params.id;
  const updates = req.body;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      Object.assign(book, { ...book, ...updates });
      await book.save();
      res.redirect(200, `/books/${id}`);
    } else {
      throw new Error("Book not found!");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}