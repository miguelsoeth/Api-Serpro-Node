const axios = require('axios');
require('dotenv').config();

const ConsultarCPF = async (doc) => {
    const headers = { Authorization: process.env.SERPRO_AUTH_TOKEN };
    try {
        const response = await axios.get(`https://gateway.apiserpro.serpro.gov.br/consulta-cpf-df-trial/v1/cpf/${doc}`, { headers });
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        const { data, status } = error.response;
        return { data, status };
    }
}

module.exports = {
    ConsultarCPF
};