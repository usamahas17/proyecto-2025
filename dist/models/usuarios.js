"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../bd/conection"));
const Usuarios = conection_1.default.define('Usuarios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    correo: {
        type: sequelize_1.DataTypes.TEXT,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
    }
});
exports.default = Usuarios;
//# sourceMappingURL=usuarios.js.map