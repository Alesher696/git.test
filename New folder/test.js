//Деструктуризация обьекта
let restaurant = {
    menu: ['Pizza', 'Sushi', 'Pie', 'Desert'],
    location: ['Spb1', 'Spb2', "Spb3"],
    workingHours: {
        open: '8:00',
        close: '00:00'
    },
    delivery: function ({menuSelected, deliveryTime, locationPoint}) {
       return console.log(typeof(menuSelected, deliveryTime, locationPoint));
    }
}

let obj = {
    menuSelected: 'Pizza',
    deliveryTime: '18:00',
    locationPoint: 'Spb1'
}

restaurant.delivery(obj)


//оператор Spread

let arr = [1,2,3,4,5]
let newArr = [6,7,8, ...arr]

//Разобрать object.assign()


const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25
    },
};

let players1 = [...game.players[0]]
let players2 = [...game.players[1]]
console.log(players1);

[goalcepeer] = players1;
console.log(goalcepeer);

let allPlayers = [...players1, ...players2]
console.log(allPlayers);

let players1Total = [];
players1Total.push('Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola', ...players1)

console.log(players1Total);

let {team1} = game.odds
console.log(team1);


let{ team2: t2} = game.odds;
console.log(t2);

let name = 'Piter'
age = 25
let user = {
    name,
    age,
    loc: ['bratsk','kirensk','Tbilisi','Spb']
}
console.log(user.age);

console.log(user.lastName?.age);

console.log(user.loc[0]);

for( [index,el] of game.scored.entries()){
    console.log(`Goal ${index + 1} - ${el}`);
}

console.log();
let sum = 0
for ( const val of Object.values(game.odds)){

    sum += val;

}
console.log(sum);
let total = sum / Object.values(game.odds).length;
console.log(total);


