// 1
console.log(457);

// 2
// The 5 main types of PRIMITIVES are Numbers, Strings, Booleans, Null, and Undefined.

// 3
/* The 6 OPERATOR SYMBOLS are
Adding ( + )
Subtracting ( - )
Multiplying ( * )
Dividing ( / )
Exponentiation ( ** )
Modulus ( % )
*/

// 4
console.log(5 % 4);
console.log(6 % 5);

// 5
console.log('I\'M MARY POPPINS, Y\'ALL!');

// 6
console.log("Hawk" + "eye");

// 7
console.log("LB".length + "Kistler".length);

// 8
// console.log("Avengers: Endgame".length);
console.log("Avengers: Endgame"[16]);

// B1
console.log("\\"[1]);

// B2
console.log((5 ** 4) - 9);
// OR
// console.log(5 ** 4 - 9);

// B3
console.log(("I".length - "Am".length) + ("Iron".length - "Man".length));
console.log(("I".length - "Am".length) + ("Iron".length) % "Man".length);

// B4
console.log("CAP"[1]);
console.log("VISION"[0]);
console.log("OKOYE"[4]);
console.log("NICK FURY"[0]);
console.log("GROOT"[0]);
console.log("DOCTOR STRANGE"[13]);
console.log("THOR"[3]);
console.log("STAR-LORD"[0]);

// Horizontal:
console.log("CAP"[1] + "VISION"[0] + "OKOYE"[4] + "NICK FURY"[0] + "GROOT"[0] + "DOCTOR STRANGE"[13] + "THOR"[3] + "STAR-LORD"[0]);

// OR
lArray = ["CAP" , "VISION" , "OKOYE" , "NICK FURY" , "GROOT" , "DOCTOR STRANGE" , "THOR" ,"STAR-LORD"]
console.log(lArray[0][1] + lArray[1][0] + lArray[2][4]+ lArray[3][0] + lArray[4][0] + lArray[5][13] + lArray[6][3] + lArray[7][0]);

// B5 (can also use let before numbers)
m = 25;
c = 4;
u = m + c;
console.log(u);
