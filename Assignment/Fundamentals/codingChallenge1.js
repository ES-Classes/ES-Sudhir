let prabinMass = 93;
let ramMass = 67;

let prabinHeight = 170;
let ramHeight = 150;

let prabinsBMI = prabinMass / (prabinHeight * prabinHeight)
let ramBMI = ramMass / (ramMass * ramMass)

let prabinHigherBMi = prabinsBMI > ramBMI;

console.log(`The BMI of prabin is ${prabinsBMI}.`);
console.log(`The BMI of ram is ${ramBMI}.`);

switch (prabinHigherBMi) {
    case true:
        console.log(`Prabin has higher BMI than ram.`);
        break;
    case false:
        console.log(`Ram has higher BMI than prabin.`);
        break;
}