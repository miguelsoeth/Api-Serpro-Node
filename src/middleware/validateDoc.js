function validateCPF(cpf) {
    // Remove non-numeric characters
    cpf = cpf.replace(/[^\d]/g, '');

    // Check for a valid length
    if (cpf.length !== 11) return false;

    // Check for known invalid CPFs
    const invalidCPFs = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];
    if (invalidCPFs.includes(cpf)) return false;

    // Calculate the first verifier digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit === 10 || digit === 11) digit = 0;

    // Compare with the first verifier digit
    if (digit !== parseInt(cpf.charAt(9))) return false;

    // Calculate the second verifier digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit === 10 || digit === 11) digit = 0;

    // Compare with the second verifier digit
    if (digit !== parseInt(cpf.charAt(10))) return false;

    // If all checks pass, the CPF is valid
    return true;
}

module.exports = {
    validateCPF,
}