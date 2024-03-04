const serproCpfModel = require('../models/serproCpfModel');

const ConsultarCPF = async (req, res) => {
    const { doc } = req.params;    
    const data = await serproCpfModel.ConsultarCPF(doc);
    return res.status(data.status).json(data.data);    
};

module.exports = {
    ConsultarCPF
}