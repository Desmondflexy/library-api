"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.getBook = exports.getAllBooks = exports.addBook = exports.myController = void 0;
const uuid_1 = require("uuid");
const book_1 = require("../models/book");
/** A dummy controller function, just to test if my routes are working */
function myController(req, res) {
    res.json({ "msg": "respond with a resource from books" });
}
exports.myController = myController;
function addBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newId = (0, uuid_1.v4)();
        try {
            const { title, datePublished, description, pageCount, publisher, author } = req.body;
            yield book_1.Book.create({ bookId: newId, title, datePublished, description, pageCount, publisher, author });
            res.redirect(201, `/books/${newId}`);
        }
        catch (error) {
            res.status(500).json({ 'error': error.message });
        }
    });
}
exports.addBook = addBook;
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('calling controller function to get all books');
        try {
            const allBooks = yield book_1.Book.findAll();
            res.json(allBooks);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
exports.getAllBooks = getAllBooks;
function getBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('calling controller function to get a book by id');
        try {
            const book = yield book_1.Book.findByPk(req.params.id);
            if (book) {
                res.json(book.dataValues.title);
            }
            else {
                throw new Error("Book not found!");
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
exports.getBook = getBook;
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield book_1.Book.findByPk(req.params.id);
            if (book) {
                yield book.destroy();
                res.redirect(200, '/books');
            }
            else {
                throw new Error("Book not found!");
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
exports.deleteBook = deleteBook;
function updateBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updates = req.body;
        try {
            const book = yield book_1.Book.findByPk(id);
            if (book) {
                Object.assign(book, Object.assign(Object.assign({}, book), updates));
                yield book.save();
                res.redirect(200, `/books/${id}`);
            }
            else {
                throw new Error("Book not found!");
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
exports.updateBook = updateBook;
