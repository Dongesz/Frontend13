let adatok = [

    {
        nev: "Kis Lajos",
        kor: 25,
        neme: "férfi"
    },
    {
        nev: "Bekő Tóni",
        kor: 19,
        neme: "férfi"
    },
    {
        nev: "Elek Pista Junior",
        kor: 25,
        neme: "férfi"
    },
    {
        nev: "Olgi",
        kor: 30,
        neme: "nő"
    }
]

adatok.map((adat) => {
    // ArtGr + 7 (backtick idézőjel)
    document.getElementById("adatok").innerHTML += `
        <div class="card" style="width: 18rem;">
            
                <div class="card-body">
                    <h5 class="card-title">${adat.nev}</h5>
                    <p class="card-text">Kora: ${adat.kor}, neme: ${adat.neme}</p>
                </div>
        </div>
        `

})
 // Soronkénti végrehajtástól eltérő módszerek

// Elágazások
// if else
const szam = Number(prompt("Adj meg egy számot!"));

if(szam % 2 === 0) {
    alert("A szám páros");
}
else if (szam % 2 === 1){
        alert("A szám páratlan");
} else {
    alert("A szám nem természetes szám!");
}

// conditional operátorral
console.log(szam % 2 === 0 ? "A szám páros" : "A szám páratlan");

// switch - case elágazás (több ágú vizsgálat, tartalmat vizsgál)
// Kérd be a helyes választ (A, B, C, D)

let valasz = prompt("Mi a helyes válasz? (A, B, C, D)")

switch (valasz) {
    case "A":
        alert("Az A nem jó")
        break;
    case "B":
        alert("Ez a jó válasz")
        break;
    case "C":
        alert("A C nem jó")
        break;
    case "D":
        alert("A D nem jó")
        break;
    default:
        alert("Nem az A, B, C, D válaszok egyikét írtad be")
        break;
}


// A bekért szám osztható-e 2-vel vagy 3-mal

// bemenet -> true, ha logikai vizsgálat van
switch (true) {
    case szam % 6 === 0:  
        alert("A szám osztható 6-tal");
        break;
    case szam % 2 === 0:
        alert("A szám osztható 2-vel");
        break;
    case szam % 3 === 0:
        alert("A szám osztható 3-mal");
        break;
    default:
        alert("A szám nem osztható egyikkel sem")
        break;
}

// Ciklusok

// Előltesztelő (while)
let random = Math.random();
console.log("Eredeti szám: " + random);

while (random <= 0.5) {
    console.log("Még nem nagyobb, mint 0,5");
    random = Math.random();
}
console.log("Kiléptünk a ciklusból: ", random);
console.log("Most már nagyobb!!!");

// Hátultesztelő (do while) -> legalább 1-szer lefut a ciklus!
// Ellenőrzött bekérés

// Feladat: Bekérjük egy Igaz-Hamis eredményét (I vagy H lehet)
// Fogadjuk el a kis és nagy betűs megoldást is
// Mentsük le a felhasználó válaszát egy boolean-be
// Hátultesztelő ciklussal ellenőrizzük!
let igazeE;

do {
    igazeE = prompt("Add meg, hogy igaz-e (I vagy H):").toLowerCase();
} while (igazeE !== "i" && igazeE !== "h");

igazeE = igazeE === "i";

// Bejáró (for, for of)

let index = 0;
do {
    // valami
    index++;
} while (index < 10);

console.log(index);

// for ciklussal ugyanez
for (let i = 0; i < 10; i++) {
    // valami
    console.log(i);
}

let tomb = [1,2,3];

for (let i = 0; i < tomb.length; i++) {
    console.log(tomb[i]);
}

for (const elem of tomb) {
    console.log(elem);
}

// Függvény

// Nincs mellékhatása -> bemenet  => kimenet
function Sum(a,b) {
    return a + b;
}

console.log("Itt van 2 + 3 összege:", Sum(2,3));

// Van mellékhatása -> (bemenet) {hatás a memóriára}  => (kimenet)
let db = 0;
function parosE(a) {
    if (a % 2 === 0) {
        db++;
    }
    return a % 2 === 0;
}

console.log("Paros-e a 6:", parosE(6));

// Arrow function
let osszeg =  (a,b) => (a + b);
let haromszogHeronT =  (a,b,c) => (Math.sqrt(((a+b+c)/2)*((a+b+c)/2-a)*((a+b+c)/2-b)*((a+b+c)/2-c))); // sqrt(s*(s-a)*(s-b)*(s-c))
let haromszogT = (a, ma) => (a*ma/2);

console.log(osszeg(2,3));
console.log("Add meg a háromszög 3 oldalát (pl, 3, 4, 5)",
    haromszogHeronT(3,4,5));
console.log("Add meg a háromszög 1 oldalát és a hozzá tartozó magasságot", haromszogT(3,4));

// map függvény

let szamok = [1,4,13,121,6]

szamok.map((elem) => {
    console.log(elem);
})

let adatok1 = [

{
    nev: "Kis Lajos",
    kor: 25,
    neme: "férfi"
},
{
    nev: "Bekő Tóni",
    kor: 19,
    neme: "férfi"
},
{
    nev: "Elek Pista Junior",
    kor: 25,
    neme: "férfi"
},
{
    nev: "Olgi",
    kor: 30,
    neme: "nő"
}
]

adatok.map((adat) => {
    // ArtGr + 7 (backtick idézőjel)
    document.getElementById("adatok").innerHTML += `
        <h1>${adat.nev}</h1><br>
        <p>${adat.kor}</p><br>
        <p>${adat.neme}</p>
    `
})


