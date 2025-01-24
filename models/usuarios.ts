import { DataTypes } from "sequelize";
import db from "../bd/conection";
const Usuarios = db.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    edad: {
        type: DataTypes.INTEGER,
    },
    correo:{
        type: DataTypes.TEXT,
    },
    fecha: {
        type: DataTypes.DATE,
    }
    
    

});
export default Usuarios;