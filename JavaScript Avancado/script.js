
let numero = [5,3,2]

let total = numeros.reduce((acumulador,numero,indice,original)=>{
console.log(`${acumulador} - total ate o momento`);
console.log(`${numero} - numero atual`);
console.log(`${indice} - indice atual`);
console.log(original);
})