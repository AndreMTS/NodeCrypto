import { createHash } from 'crypto'


function criaHash(dado, estrategia){
    return createHash(estrategia).update(dado).digest('hex')
}

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

const rainbowTable = senhasComuns.map(senha => {
    return [ senha, criaHash(senha, "MD5")]
})

//console.log(rainbowTable);


const hashesVazadas = ["21232f297a57a5a743894a0e4a801fc3",
"cedf5ab7b5c5852b3ed35d7dbe3c3835", "6a4120be23c814f80233ecbb34e71adc",
"81dc9bdb52d04dc20036dbd8313ed055"]

hashesVazadas.map(hashesVazada => {
    rainbowTable.map(pargerado => {
        if ( hashesVazada === pargerado[1]){
            console.log(`Senha encontrada: hash: ${pargerado[1]} referente a : ${pargerado[0]}`);
        }
    })
})


