import express from "express";
import {getAllBooks, addBook, getBook, deleteBook, updateBook} from "../controllers/book"

const router = express.Router();

// ../books/
router.route('/')
  .get(getAllBooks)
  .post(addBook);

// ../books/<id>
router.route('/:id')
  .get(getBook)
  .delete(deleteBook);

// ../books/<id>/update
router.route('/:id/update')
  .put(updateBook)

export default router;
