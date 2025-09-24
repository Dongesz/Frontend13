// Feladat1 - kesz
let kor = parseInt(prompt("Add meg az eletkorod: "))
console.log(kor >= 18? "Nagykoru vagy!" : "Kiskoru vagy!")

// Feladat2 - kesz
let r = parseInt(prompt("Add meg egy kor sugarat: "))
//K = 2 ∙ r ∙ π
//T = r2 ∙ π
alert("Masodik Feladat:\nA kor kerulete: "+(2*r*Math.PI)+"\nA kor terulete: " + (r**2)*Math.PI)

// Feladat3 - kesz
console.log("Harmadik Feladat: ")
let szam = parseInt(prompt("Adj meg egy szamot: "))
for (let i = 1; i < 101; i++) {
    if(i%szam===0) console.log(i)
}

// Feladat4 - kesz
let min = parseInt(prompt("Adj meg egy also hatart: "))
let max = parseInt(prompt("Adj meg egy felso hatart: "))

let array = []
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random()*(max-min+1)+min)
}
console.log("Negyedik Feladat: "+array)

// Feladat5 - kesz
let szam1 = parseInt(prompt("Adj meg egy szamot(Eddig fog menni a tomb): "))
let array1 = []
for (let i = 0; i < szam1; i++) {
    array1[i] = i+1
}
console.log("Otodik Feladat: "+array1)


