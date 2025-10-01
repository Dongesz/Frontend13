// Random szamok generalasa, ellenorzese, tarolasa
let min = 1
let max = 90
let array1 = []
let seged1 = 0;
let rnd;
for (let i = 0; i < 5; i++) {
    rnd = Math.floor(Math.random() * (max - min + 1) + min)
    if (array1.includes(rnd))
        {
            console.log("A szam mar benne van a listaban!")
            continue
        }
    else{
        array1.push(rnd)
        seged1++;
    }
     
}
console.log(`Lotto szamok: ${array1} `)

// user inpout ellenorzese, tarolasa
let array2 = []
let szam = 0;
let seged2 = 0;
for (let i = 0; seged2 < 5; i++) {
        szam = parseInt(prompt("Adj meg egy szamot!"))
        if(array2.includes(szam)) 
            {
                console.log("A szam mar benne van a listaban!")
                continue
            }
        if (isNaN(szam))
            {
                console.log("Szamot adj meg!")
                continue    
            }
        else {
            array2.push(szam)
            seged2++
        }
         
    }
    console.log(`Felhasznalo tippjei: ${array2} `)

// Talalatok vizsgalata, megjelenitese
let talalt = false;
let talalatok = []
for (let i = 0; i < array1.length; i++) {
    talalt = array1.includes(array2[i])
    if (talalt === true)
        {
            talalatok.push(talalt)
            talalt = false
        }
}
switch(talalatok.length)
{
    case 0:
        alert("Sajnos nem talalt!")
        break
    case 4:
        alert("Gratulalunk, 4-es lottod van!")
        break
    case 5:
        alert("Gratulalunk, elvitted a főnyereményt!")
    default:
        alert(`Talalataid szama: ${talalatok.length}`)
}
