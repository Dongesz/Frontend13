/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/
let van = false;
document.getElementById("element-one").onclick = function(){
  
  if(!van)
    {
      document.getElementById("element-one").classList.add("blur")
     van = true;
    }
  else if (van){
    document.getElementById("element-one").classList.remove("blur")
    van = false;
  } 
}


/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
let eredeti = document.getElementById("element-two").style.background;
document.getElementById("element-two").onmouseenter = function() 
{
  document.getElementById("element-two").style.background = "red";
}
document.getElementById("element-two").onmouseleave = function() 
{
  document.getElementById("element-two").style.background = eredeti;
}

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

document.getElementById("element-three").ondblclick = function()
{
  let rnd = Math.floor(Math.random() * 21);
  document.getElementById("element-three").firstElementChild.innerHTML = rnd
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementById("element-four").onclick = function()
{
  document.getElementById("element-four").style.visibility = "hidden"
  setTimeout(() => {
    document.getElementById("element-four").style.visibility = "visible"
  }, 1000);
}

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
document.getElementById("element-five").onclick = function()
{
  let array = document.getElementsByClassName("shape")
  for (let i = 0; i < array.length; i++) {
    array[i].style.borderRadius = "50%"
    
  }
}


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/
document.getElementById("box-6").onsubmit = function(event) {
  event.preventDefault();

  let inputValue = document.getElementsByName("boxNumber")[0].value;

  document.getElementById("element-six").firstElementChild.innerHTML = inputValue;
};

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
document.getElementById("box7-input").onkeydown = function() 
{
  let inputValue = document.getElementsByName("boxNumber")[1].value;

  document.getElementById("element-seven").firstElementChild.innerHTML = inputValue
}


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/
document.addEventListener('mousemove', function(event) {
  const x = event.clientX; 
  const y = event.clientY; 
  document.getElementById("element-eight").firstElementChild.innerHTML = (`${x}, ${y}`);
});

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/
