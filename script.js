//  leeftijd
const age = 24;

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("helaas, je mag niet naar binnen");
}

// dit is voor vrouw of man
const isFemal = false;

if (isFemal) {
  console.log("Top, jij bent inderdaad een vrouw");
} else {
  console.log("Jij bent geen vrouw");
}

// wel of geen Bob
const driverStatus = "Bob";

if (driverStatus == "Bob") {
  console.log("jij mag rijden");
} else {
  console.log("jij mag niet rijden");
}

// Gratis bier als je Bram of Sarah heet
const naam = "Bram";

if (naam == "Sarah" || naam == "Bram") {
  console.log("Gratis biertje op deze feestelijke dag!");
} else {
  console.log("Jammer, geen gratis biertje op deze feestdag")
}

// welke korting
const totalAmount = 101;

if (totalAmount >= 25 && totalAmount < 50) {
console.log("jij krijgt vegaballen gratis");
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("jij krijgt Nachos gratis");
} else if (totalAmount >= 100) {
  console.log("jij krijgt champagne gratis");
} else {
  console.log("jij krijgt geen extra's");
}



