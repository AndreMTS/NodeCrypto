import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign(
    {
        apelido: "matos",
        curso: "segurança e node.js"
    }, chaveSecreta)

console.log(token);

//decodificando token 

const tokenDecodificado = jwt.decode(token, chaveSecreta)
console.log(tokenDecodificado);