import { Request, Response } from 'express';
import Usuario from '../models/usuarios';
export const getUsuarios = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'dame un usuario',
        id
    });

}
export const postUsuarios = async (req: Request, res: Response) => {
    const { nombre, edad, correo, fecha } = req.body;
    try {
        const nuevousuario = Usuario.create({
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

}
export const putUsuarios = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req.body;
    res.json({
        msg: 'edita usuario'

    });
}
export const deletUsuarios = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'se elimino correctamente'
    })
} 
