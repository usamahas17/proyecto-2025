import { Router } from "express";
import { getUsuarios, postUsuarios, putUsuarios, deletUsuarios } from '../controladores/usuario.controlador';
const router = Router();
router.get('/:id', getUsuarios);
router.post('/', postUsuarios);
router.put('/:id', putUsuarios);
router.delete('/:id', deletUsuarios);
export default router;
