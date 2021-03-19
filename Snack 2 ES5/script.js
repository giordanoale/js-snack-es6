// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
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
    },

];

var newSquadre = [];

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for (var i = 0; i < squadre.length; i++) {
    
    squadre[i].puntiFatti = randomize(0, 100);
    squadre[i].falliSubiti = randomize(0, 20);
    var team = {};
    team.nome = squadre[i]["nome"];
    team.falliSubiti = squadre[i]["falliSubiti"];
    newSquadre.push(team);

}

console.log(newSquadre);