const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

const characters = [];

//____________________________________________________________

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "starWarsCharacters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}

console.log("Array personaggi.\n", characters);
//____________________________________________________________

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i].name);
  } else {
    continue;
  }
}

console.log("Array personaggi femmine.\n", femaleCharacters);
//____________________________________________________________

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

//____________________________________________________________

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (true) {
    case starWarsCharacters[i].eye_color === "blue":
      eyeColor.blue.push(starWarsCharacters[i].name);
      break;
    case starWarsCharacters[i].eye_color === "yellow":
      eyeColor.yellow.push(starWarsCharacters[i].name);
      break;
    case starWarsCharacters[i].eye_color === "brown":
      eyeColor.brown.push(starWarsCharacters[i].name);
      break;
    case starWarsCharacters[i].eye_color === "red":
      eyeColor.red.push(starWarsCharacters[i].name);
      break;
    case starWarsCharacters[i].eye_color === "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i].name);
      break;
  }
}

console.log("Array colore occhi.\n", eyeColor);

//____________________________________________________________

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = null;

//con il while
let j = 0;
while (starWarsCharacters.length > j) {
  crewMass = crewMass + starWarsCharacters[j].mass;
  j++;
}
console.log(`Ciclo while.\nLa massa totale dell'equipaggio è: ${crewMass}`);

//con il for
// for (let i = 0; i < starWarsCharacters.length; i++) {
//   crewMass = crewMass + starWarsCharacters[i].mass;
// }
// console.log(`Ciclo for.\nLa massa totale dell'equipaggio è: ${crewMass}`);

//____________________________________________________________

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"
  
  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

// Con una variabile che cambiamo a mano
// let massa_carico = 499;

// if (massa_carico < 500) {
//   console.log(`Mass: ${massa_carico}. Ship is under loaded`);
// } else if (massa_carico >= 500 && massa_carico < 700) {
//   massa_carico = massa_carico + starWarsCharacters[i].mass;
//   console.log(`Mass: ${massa_carico}. Ship is half loaded`);
// } else if (massa_carico >= 700 && massa_carico < 900) {
//   massa_carico = massa_carico + starWarsCharacters[i].mass;
//   console.log(`Mass: ${massa_carico}. Warning: Load is over 700`);
// } else if (massa_carico >= 900 && massa_carico < 1000) {
//   console.log(`Mass: ${massa_carico}. Critical Load: Over 900`);
// } else if (massa_carico >= 1000) {
//   console.log(
//     `Mass: ${massa_carico}. DANGER! OVERLOAD ALERT: escape from ship now!`
//   );
// }

// Con l'array starWarsCharacters

const warnings = [];
let carMass = null;
for (let i = 0; i < starWarsCharacters.length; i++) {
  carMass = carMass + starWarsCharacters[i].mass;
  if (carMass < 500) {
    warnings.push(`Mass: ${carMass}. Ship is under loaded`);
  } else if (carMass >= 500 && carMass < 700) {
    warnings.push(`Mass: ${carMass}. Ship is half loaded`);
  } else if (carMass >= 700 && carMass < 900) {
    warnings.push(`Mass: ${carMass}. Warning: Load is over 700`);
  } else if (carMass >= 900 && carMass < 1000) {
    warnings.push(`Mass: ${carMass}. Critical Load: Over 900`);
  } else if (carMass >= 1000) {
    warnings.push(
      `Mass: ${carMass}. DANGER! OVERLOAD ALERT: escape from ship now!`
    );
  }
}
// console.log("Warnings:\n", warnings);
console.log(warnings[warnings.length - 1]);

//____________________________________________________________

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

const NewStarWarsCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  NewStarWarsCharacters.push(starWarsCharacters[i]);
}

for (let i = 0; i < NewStarWarsCharacters.length; i++) {
  if (NewStarWarsCharacters[i].gender === "n/a") {
    NewStarWarsCharacters[i].gender = "robot";
  } else {
    continue;
  }
}

console.log(
  "Nuovo array personaggi star wars.\nDa 'n/a' a 'robot'",
  NewStarWarsCharacters
);

//____________________________________________________________

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/

//____________________________________________________________

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

//____________________________________________________________
