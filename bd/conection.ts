import { Sequelize } from "sequelize";
const db = new Sequelize('registro_2025','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    port: 8889,

} );

export default db;