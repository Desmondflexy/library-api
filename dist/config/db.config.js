"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// to connect to our sqlite database
const db = new sequelize_1.Sequelize("database", 'desmond', 'passWor!d', {
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false
});
// export db and import into app.ts
exports.default = db;
