// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

var biciclette = [
    {
        nome: "bianchi",
        peso: 1500,
    },
    {
        nome: "atala",
        peso: 2000,
    },
    {
        nome: "montegrappa",
        peso: 1300,
    },
];

// console.log(biciclette);

var biciLeggera = biciclette[0];

// console.log(biciLeggera);

for (var i = 0; i < biciclette.length; i++) {
    
    // console.log(biciclette[i]);
    // console.log(biciLeggera["peso"]);

    if (biciclette[i]["peso"] < biciLeggera["peso"]) {
        biciLeggera = biciclette[i];
    }
}

console.log("La bicicletta più leggera è la " + biciLeggera["nome"]);