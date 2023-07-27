"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("../controllers/book");
const router = express_1.default.Router();
// ../books/
router.route('/')
    .get(book_1.getAllBooks)
    .post(book_1.addBook);
// ../books/<id>
router.route('/:id')
    .get(book_1.getBook)
    .delete(book_1.deleteBook);
// ../books/<id>/update
router.route('/:id/update')
    .put(book_1.updateBook);
exports.default = router;
