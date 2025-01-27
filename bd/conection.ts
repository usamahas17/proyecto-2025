import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const db = new Sequelize(process.env.DB_NAME || "registro_2025", process.env.DB_USER || "root", process.env.DB_PASSWORD || "root", {
    host: process.env.DB_HOST || "localhost", 
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejecUnauthorized: false
        }
    },
    port: 5432, 

});

export default db;