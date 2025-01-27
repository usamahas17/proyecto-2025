import { Sequelize } from "sequelize";
const db = new Sequelize(process.env.DB_NAME || "registro_2025", process.env.DB_USER || "root", process.env.DB_PASSWORD || "root", {
    host: process.env.DB_HOST || "localhost", 
    dialect: 'mysql',
    port: 8889, 

});

export default db;