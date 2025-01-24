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
exports.deletUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuarios = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
const getUsuarios = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'dame un usuario',
        id
    });
};
exports.getUsuarios = getUsuarios;
const postUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, edad, correo, fecha } = req.body;
    try {
        const nuevousuario = usuarios_1.default.create({
            nombre,
            edad,
            correo,
            fecha,
        });
        console.log(nuevousuario);
        res.redirect('/sesion.html');
    }
    catch (error) {
        console.error(error);
    }
});
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    res.json({
        msg: 'edita usuario'
    });
};
exports.putUsuarios = putUsuarios;
const deletUsuarios = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'se elimino correctamente'
    });
};
exports.deletUsuarios = deletUsuarios;
//# sourceMappingURL=usuario.controlador.js.map