import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const db = new Sequelize(process.env.DB_DATABASE || 'apirest_7i13', process.env.DB_USER ||'apirest' , process.env.DB_PASSWORD || 'oml8ebqCPnAodgLCTgTc5zICw5VvaJd8', {
    host: process.env.DB_HOST || "localhost", 
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT || '8080'), 
    logging: false,

});

export default db;