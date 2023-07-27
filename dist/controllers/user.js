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
exports.signup = exports.myController = void 0;
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
function myController(req, res, next) {
    res.json({ msg: 'respond with a resource from users' });
}
exports.myController = myController;
function signup(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const newId = (0, uuid_1.v4)();
        const { username, email, password } = req.body;
        try {
            yield user_1.User.create({
                id: newId,
                username,
                email,
                password
            });
            res.status(201).json({ msg: 'New user added successfully!' });
        }
        catch (error) {
            res.json({ error: error.message });
        }
    });
}
exports.signup = signup;
