import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DATABASE || "apirest_7i13", process.env.DB_USER || "apirest", process.env.DB_PASSWORD || "oml8ebqCPnAodgLCTgTc5zICw5VvaJd8", {
    host: process.env.DB_HOST || "dpg-cubtcnl2ng1s73asfkig-a.oregon-postgres.render.com",  
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, // Obliga a usar SSL
          rejectUnauthorized: false, // Acepta certificados autofirmados (opcional)
        },
      },
    port: 5432

});

export default db;