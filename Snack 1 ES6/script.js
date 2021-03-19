// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const biciclette = [
    {
        nome: "bianchi",
        peso: 1600,
    },
    {
        nome: "atala",
        peso: 2000,
    },
    {
        nome: "vangoof",
        peso: 1300,
    },
]

console.log(biciclette);

var biciLeggera = biciclette[0].peso;

for (var i = 0; i < biciclette.length; i++) {

    if (biciclette[i].peso < biciLeggera) {
        biciLeggera = biciclette[i];
    }
}

console.log(` La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} grammi`);