const crypto = require("crypto");

const createHash = (...args) => {
    //skapa ett objekt ifrån nodes crypto bibliotek...
    //ange algoritm(sha256)
    const hash = crypto.createHash("sha256");
    //skapa en hash av våra inskickade argument
    hash.update(args.sort().join(' '));
    //beräkna värdet baserat på algoritm, iskickade argument och 
    //skapa en output i hex format
    return hash.digest("hex");
}

module.exports = createHash;