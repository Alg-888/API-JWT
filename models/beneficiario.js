const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beneficiarioShema = new Schema({
    identificacion: Number,
    nombre_Completo: String,
    telefono: Number,
    num_Familiares: Number
}, { versionKey: false });

module.exports = mongoose.model('Beneficiario', beneficiarioShema);
