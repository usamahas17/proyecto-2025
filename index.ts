import express, { Application } from "express";
import cors from "cors";
import db from "./bd/conection";
import bodyparse from "body-parser";
import rutasUsuario from './rutas/usuario.ruta';


class Server {
    private app: Application;
    private port: string;
    private host: string;
    private apiPaths = {
        usuarios: '/api/usuarios/'
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || "9000";
        this.host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';
        this.middlewares();
        this.dbConnection();
        this.routes();

    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(bodyparse.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, rutasUsuario);
    }

    listen() {
     
        this.app.listen(parseInt(this.port), this.host ,() => {
            console.log("el servidor corre en el puero " + this.port +this.host);
        })
        
    }
    async dbConnection() {
        try {
            await db.authenticate();
            console.log("la base de dato esta en linea");
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

}

export default Server;