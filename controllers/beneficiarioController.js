// beneficiarioController.js
import Beneficiario from '../models/beneficiario.js';
import { verificarToken } from "../middlewares/requireToken.js"; // Importa el middleware de autenticación

export const mostrar = async (req, res) => {
    try {
        const beneficiarios = await Beneficiario.find({});
        res.json({ beneficiarios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const crear = [verificarToken, async (req, res) => {
    try {
        const beneficiario = await new Beneficiario({
            identificacion: req.body.identificacion,
            nombre_Completo: req.body.nombre_Completo,
            telefono: req.body.telefono,
            num_Familiares: req.body.num_Familiares,
        });
        await beneficiario.save();
        res.json({ mensaje: 'Beneficiario creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}];

export const editar = [verificarToken, async (req, res) => {
    const { id_Editar, identificacion_Editar, nombre_Completo_Editar, telefono_Editar, num_Familiares_Editar } = req.body;

    try {
        await Beneficiario.findByIdAndUpdate(id_Editar, {
            identificacion: identificacion_Editar,
            nombre_Completo: nombre_Completo_Editar,
            telefono: telefono_Editar,
            num_Familiares: num_Familiares_Editar
        });
        res.json({ mensaje: 'Beneficiario actualizado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}];

export const borrar = [verificarToken, async (req, res) => {
    const id = req.params.id;

    try {
        await Beneficiario.findByIdAndDelete(id);
        res.json({ mensaje: 'Beneficiario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}];
