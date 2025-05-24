console.log('Building Cricketing App');
/* We are building Crircketing App
    Suppose we get data from a web service about a certain game below.
    In this challenge we're gonna work with the data. So here are your task : 
    1. Create one player array for each team (variables 'Player1' and 'Player2')
    2. The first player in player array is the wicket keeper and the others are field players, and one array ('fieldPlayers')
    with all the remaining 10 field players.
    3. Create an array 'allPlayer' containing all players of both teams (22 players)
    4. During the game, India (Team1) used 3 substitute players, so create a new array ('playersFinal') containing all the original
    team 1 player plus 'Sandeep', 'John', 'Sunil'
    5. Based on the game, odds object, create one variable for each odd (called 'team1' 'draw', 'team2')
    6. The team with lower odd is more likely to win.
    Print to the console which team is more likely to win.
    Without using an if/else statement or the ternary operator.
    7. Loop over the game. Century array and print each player name to the 
    console, along with the century number (Example: "Century 1: Kohli")
    8. Use a loop to calculate the average odd log it to the console.
 */

    const game = {
        team1 : "India",
        team2 : "Australia",
        players :[
        [
            "Dhoni",
            "Sharma",
            "Kohli",
            "Rahul",
            "Jadeja",
            "Pandey",
            "Ashwin",
            "Chahal",
            "khan",
            "Bumrah",
            "Shami"
        ],
        [
            "Wade",
            "Cummins",
            "Green",
            "Maxwell",
            "Finch",
            "Hazelwood",
            "Marsh",
            "Stoinis",
            "Richardson",
            "Starc",
            "Warner"

        ],
    ],
    century : ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds : {
        team1 : 1.33,
        x : 3.25,
        team2 : 6.5,
    },
    }

    //  1. Create one player array for each team (variables 'Player1' and 'Player2')

    // let players = game.players;
    let [players1, players2] = game.players; // destructuring
    console.log('players1', players1);
    console.log('players2', players2);  
    
// 2. The first player in player array is the wicket keeper and the others are field players, 
// and one array ('fieldPlayers')
//     with all the remaining 10 field players.

// rest operator
let [captain,...fieldPlayers] = players1;

    console.log('captain', captain);
    console.log('fieldPlayers', fieldPlayers);  

//    3. Create an array 'allPlayer' containing all players of both teams (22 players) 
// spread operator
let allPlayers = [...players1, ...players2];
console.log( 'allPlayers', allPlayers);

//4. During the game, India (Team1) used 3 substitute players, so create a new array ('playersFinal') containing all the original
//    team 1 player plus 'Sandeep', 'John', 'Sunil'

let players1Final = [...players1, "Sandeep", "John", "Sunil"];

console.log('players1Final', players1Final);

// 5. Based on the game, odds object, create one variable for each odd (called 'team1' 'draw', 'team2')

// destructure the object
let {team1, x : draw, team2} = game.odds;
console.log('team1',  team1);
console.log('draw', draw);
// console.log('x', x);
console.log('team2',  team2);

// 6. The team with lower odd is more likely to win.
//     Print to the console which team is more likely to win.
//     Without using an if/else statement or the ternary operator.

// if(team1>team2){
// console.log('Team 2 will win');
// }
// else{
// console.log('Team 1 will win');

// }

// team1>team2 ? console.log('Team 2 will win') : console.log('Team 1 will win');
 

// logical operator && || !
team1<team2 && console.log('Team 1 will win');
team2<team1 && console.log('Team 2 will win');

//  7. Loop over the game. Century array and print each player name to the 
//     console, along with the century number (Example: "Century 1: Kohli")

for(let [index, value] of game.century.entries()){
    // console.log(currItem);

    console.log(`Century ${index +1} : ${value}`);
    
    
}

// 8. Use a loop to calculate the average odd log it to the console.
let sum = 0;
let counter = 0;

for(let currItem of Object.values(game.odds)){
    console.log(currItem);
    sum = sum + currItem;
    counter = counter + 1;
}

console.log('Sum', sum);
console.log('counter', counter);
console.log('Average', Math.round(sum/counter));


let inSum = 0;
let inCounter = 0;
for(let currItem in game.odds){
    console.log( 'currItem', currItem);
    console.log( 'currItem', game.odds[currItem]);
    inSum = inSum + game.odds[currItem];
    inCounter = inCounter + 1;
}

console.log('inSum', inSum);
console.log('inCounter', inCounter);
console.log('Average', Math.floor(inSum/inCounter));
