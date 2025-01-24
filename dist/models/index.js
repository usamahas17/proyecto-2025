"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conection_1 = __importDefault(require("../bd/conection"));
const body_parser_1 = __importDefault(require("body-parser"));
const usuario_ruta_1 = __importDefault(require("../rutas/usuario.ruta"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios/'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "9000";
        this.middlewares();
        this.dbConnection();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_ruta_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("el servidor corre en el puero " + this.port);
        });
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log("la base de dato esta en linea");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=index.js.map