// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Scafatese",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Longobarda",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const newSquadre = [];

for (let i = 0; i < squadre.length; i++) {

    squadre[i].puntiFatti = randomize(0, 100);
    squadre[i].falliSubiti = randomize(0, 20);
    
}

for (let i = 0; i < squadre.length; i++) {

    const {nome, puntiFatti, falliSubiti} = squadre[i];

    newSquadre.push({
        nome,
        falliSubiti
    });

}
console.log(newSquadre);