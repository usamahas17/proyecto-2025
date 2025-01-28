"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = new sequelize_1.Sequelize(process.env.DATABASE || "apirest_7i13", process.env.DB_USER || "apirest", process.env.DB_PASSWORD || "oml8ebqCPnAodgLCTgTc5zICw5VvaJd8", {
    host: process.env.DB_HOST || "dpg-cubtcnl2ng1s73asfkig-a.oregon-postgres.render.com",
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Acepta certificados autofirmados (opcional)
        },
    },
    port: 5432
});
exports.default = db;
//# sourceMappingURL=conection.js.map