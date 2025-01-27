import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const db = new Sequelize(process.env.DB_NAME || "registro_2025", process.env.DB_USER || "root", process.env.DB_PASSWORD || "root", {
    host: process.env.DB_HOST || "localhost", 
    dialect: 'mysql',
    port: parseInt(process.env.DB_PORT || '3306'), 

});

export default db;