"use strict";
let sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
// for (let i = 0; i < sportOne.length; i++) {
//     console.log(sportOne[i]);
// }
// Let's use the simplied for loop
for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
