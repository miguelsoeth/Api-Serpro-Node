const validateDoc = require('./validateDoc');

const validateCpf = (req, res, next) => {
    const { doc } = req.params;

    if (doc == undefined) {
        return res.status(400).json({ message: 'Documento não informado'});
    }

    if (!validateDoc.validateCPF(doc)) {
        return res.status(400).json({ message: 'Documento inválido'});
    }

    next();
};

module.exports = {
    validateCpf,
}