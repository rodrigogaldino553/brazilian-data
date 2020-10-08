// Function to do CEP formatting;

function getCep(value) {
    return String(value)
            .replace(/\D/g, "")
            .slice(0, 8)
            .replace(/(\d{5})(\d)/, "$1-$2")
}



// Functions;

module.exports = {
    getCep
}