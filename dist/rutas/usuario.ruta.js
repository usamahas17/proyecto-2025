"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controlador_1 = require("../controladores/usuario.controlador");
const router = (0, express_1.Router)();
router.get('/:id', usuario_controlador_1.getUsuarios);
router.post('/', usuario_controlador_1.postUsuarios);
router.put('/:id', usuario_controlador_1.putUsuarios);
router.delete('/:id', usuario_controlador_1.deletUsuarios);
exports.default = router;
//# sourceMappingURL=usuario.ruta.js.map