"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('registro_2025', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889,
});
exports.default = db;
//# sourceMappingURL=conection.js.map