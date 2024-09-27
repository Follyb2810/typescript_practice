"use strict";
const gameScores = [14, 21, 33, 59];
const favoriteThings = ['raindrop on roses', 'whiskers on kitten', 'bright copper kettles ', 'warm wooden mutton'];
const voters = [
    {
        name: 'folly',
        age: 21
    },
    {
        name: 'babs',
        age: 12
    },
];
function getLastItem(array) {
    let a = array[array.length - 1];
    console.log(a);
    return;
}
getLastItem(voters);
getLastItem(favoriteThings);
getLastItem(gameScores);
