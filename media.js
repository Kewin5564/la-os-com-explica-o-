let notas = [6, 8, 7, 9, 10];   // aqui guardamos as notas numa caixinha chamada array
let soma = 0;                   // começamos com a soma zerada

for (let nota of notas) soma += nota;   // passamos por cada nota e vamos somando

let media = soma / notas.length;       // dividimos a soma pelo total de notas → média
let acimaDeSete = 0;                    // contador começa em zero

for (let nota of notas) if (nota > 7) acimaDeSete++;   // cada vez que achamos nota > 7, somamos +1

console.log("📊 Média:", media);        // mostramos a média
console.log("✅ Notas acima de 7:", acimaDeSete);   // mostramos quantas ficaram acima de 7
