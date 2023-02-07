// 21
const x = "John";
const y = "Doe";

console.log(x + " <> " + y);

//22
const oggetto = {
    name: "John",
    surname: "Doe",
    email: "john.doe@email.com",
};

//23
delete oggetto.email;
console.log(oggetto);

//24
const arr = ["Anchilosauro", "Apatosauro", "Allosauro", "Brachiosauro", "Megalodon", "Titanosauro", "Sauropelta", "Spinosauro", "Stegosauro", "Triceratopo"];

//25
for(let element of arr) {
    console.log(element);
}

//26
const NUMERI_A_CASO = [];
for(let i = 0; i <= 99; i++) {
    const numero = Math.random() * 100;
    const numeroIntero = Math.ceil(numero);
    NUMERI_A_CASO.push(numeroIntero);
}

console.log(NUMERI_A_CASO);

//27
function numeroGrandePiccolo() {
    let max = NUMERI_A_CASO[0];
    for(let i = 1 ; i < NUMERI_A_CASO.length ; i++) {
        if (NUMERI_A_CASO[i] > max) {
            max = NUMERI_A_CASO[i];
        }
    }
    let min = NUMERI_A_CASO[0];
    for(let i = 1 ; i < NUMERI_A_CASO.length ; i++) {
        if (NUMERI_A_CASO[i] < min) {
            min = NUMERI_A_CASO[i];
        }
    }
    console.log(max);
    console.log(min);
}

numeroGrandePiccolo();

//28
function generaArray(n) {
    let arrPadre = [];
    for(let i = 0 ; i < n ; i++) {
        let arrFiglio = [];
        for(let x = 0 ; x < 10 ; x ++ ) {
            let numero = Math.ceil(Math.random()) * 100;
            arrFiglio.push(numero);
        } 
        arrPadre.push(arrFiglio);  
    }
    return arrPadre;
}

console.log(generaArray(3));

//29
function arrayPiuGrande (arr1 , arr2) {
    const lunghezzaArr1 = arr1.length;
    const lunghezzaArr2 = arr2.length;
    if (lunghezzaArr1 > lunghezzaArr2) {
        return arr1;
    } else {
        return arr2;
    }
}

const ArrayNumeri = [ 1 , 2 , 3 , 4 , 5];
const ArrayLettere = [ "A" , "B" , "C" , "D"]

console.log(arrayPiuGrande (ArrayNumeri , ArrayLettere));

//30
function sommaDiArray(arr1 , arr2) {
    let totaleArr1 = 0;
    for(let element of arr1) {
        totaleArr1 += element;
    }
    let totaleArr2 = 0;
    for(let element of arr2) {
        totaleArr2 += element;
    }
    if (totaleArr1 > totaleArr2) {
        return arr1;
    } else (totaleArr2 > totaleArr1); {
        return arr2;
    }
} 

console.log(sommaDiArray([56,22,89] , [5,78,2]));

//31
let container = document.getElementById("container");

//32
let columns = document.getElementsByTagName("td");
console.log(columns);

//33
for(let testoColonna of columns) {
    console.log(testoColonna.innerText);
}

//34 
function cambiaTitolo(titolo) {
    let titoloPagina = document.getElementsByTagName("h1")[0];
    titoloPagina.innerText = titolo;
} 

cambiaTitolo("Dinosauri");


//35
function addRow() {
    let tabelle = document.getElementsByTagName("table");
    let tabella = tabelle[0];
    let newRow = document.createElement("tr");
    for(let i = 0 ; i < 5 ; i++) {
        let newColumn = document.createElement("td");
        newColumn.innerText = "Questa è una cella.";
        newRow.appendChild(newColumn);
    }
    tabella.appendChild(newRow);
}

addRow();


//36
function addClass() {
    let tabelle = document.getElementsByTagName("table");
    let tabella = tabelle[0];
    let rows = tabella.getElementsByTagName("tr");
    for (let element of rows) {
        element.classList.add("test");
    }
}

addClass();

//37
function addBackground() { //ho aggiunto una classe solo per gli anchor tag che effettivamente volevo modificare, perchè non mi piaceva l'effetto sulle immagini
    let linkPagina = document.getElementsByClassName("link");
    for(let element of linkPagina) {
        element.style.backgroundColor = "rgb(218, 82, 82)";
    }
}

addBackground();

//38
window.onload = function() {
    console.log("Page Loaded");
}

//39
function addNewElementUl(arr) {
    let ul = document.getElementsByTagName("ul")[0];
    for(let i = 0 ; i < arr.length ; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = arr[i];
        ul.appendChild(newLi);
    }

}

addNewElementUl(["(Chasmosaurini)" , "(Anchilosauri)" , "(Saurischi...)"]);

//40
function emptyList(list) {
    while(list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

//41
let anchorTag = document.getElementsByTagName("a");
for(let element of anchorTag) {
    element.addEventListener("mouseover" , hrefAlert); 
}
function hrefAlert(event) {
    let anchor = event.target;
    const href = anchor.getAttribute("href");
    alert(href);
} 

//42
let button = document.createElement("button");
let body = document.getElementsByTagName("body")[0];
let tabella = document.getElementsByTagName("table")[0];


button.addEventListener("click", hideImg);
button.innerText = "Evento K-T: fai estinguere i dinosauri 😭"; 
body.insertBefore(button , tabella);
button.style.backgroundColor = "rgb(218, 82, 82)";
button.style.borderRadius = "20px";
button.style.height = "30px";
button.style.width = "300px";
button.style.color = "white";
button.style.borderColor = "white";


function hideImg() {
    let immagini = document.getElementsByTagName("img");
    for(let element of immagini) {
        element.style.display = "none";
    } 
}

//43
let button2 = document.createElement("button");
body.insertBefore(button2 , tabella);
button2.addEventListener("click", hideShowTable);
button2.innerText = "Nascondi tabella"; 
button2.style.display = "block";
button2.style.backgroundColor = "rgb(218, 82, 82)";
button2.style.borderRadius = "20px";
button2.style.height = "30px";
button2.style.width = "300px";
button2.style.color = "white";
button2.style.borderColor = "white";

let tableVisibility = true;

function hideShowTable(){
    if (tableVisibility) {
    tabella.style.display = "none";
    tableVisibility = false;
    button2.innerText = "Vedi Tabella"
    } else {
        tabella.style.display = "table";
        tableVisibility = true;
        button2.innerText = "Nascondi Tabella"
    }
}

//44
function sommaNumTabella() {
    let tabella = document.getElementsByTagName("table")[0];
    let tdTabella = tabella.getElementsByTagName("td");
    let somma = 0;
    for(let element of tdTabella) {
        console.log(element.innerText);
        if (parseInt(element.innerText)) {
            somma += Number(element.innerText);
        }
    }
    console.log(somma);
}

sommaNumTabella();

//45 
let titoloPagina = document.getElementsByTagName("h1")[0];
titoloPagina.addEventListener("click" , hideLetter);

function hideLetter() {
    let testoH1 = titoloPagina.innerText;
    let newText = testoH1.substring(0, testoH1.length -1);
    titoloPagina.innerText = newText;
}

//46
let tdPagina = document.getElementsByTagName("td");

for(let element of tdPagina) {
    element.addEventListener("click", changeColour);
}
function changeColour(event) {
        event.target.style.backgroundColor = "rgb(218, 82, 82)";
}


//47
let button3 = document.createElement("button");
button3.innerText = "Cancella cella random";
let table = document.getElementsByTagName("table")[0];
table.after(button3);
button3.addEventListener("click", deleteRandomTd);
button3.style.backgroundColor = "rgb(218, 82, 82)";
button3.style.borderRadius = "20px";
button3.style.height = "30px";
button3.style.width = "300px";
button3.style.color = "white";
button3.style.borderColor = "white"; 

function deleteRandomTd() {
    let rows = table.getElementsByTagName("tr");
    let randomIndexRow = Math.ceil(Math.random() * rows.length) - 1;
    let rowCells = rows[randomIndexRow].getElementsByTagName("td");
    let randomIndexCell = Math.ceil(Math.random() * rowCells.length) - 1;
    rows[randomIndexRow].removeChild(rowCells[randomIndexCell]);
} 

//48
let celle = table.getElementsByTagName("td");
for(let element of celle){
    element.addEventListener("mouseover" , cellBorderColor);
}

function cellBorderColor(event) {
    event.target.style.borderColor = "pink";
}

//49
function createNewTable() {
    let newTable = document.createElement("table");
    for(let i = 0 ; i < 4 ; i++) {
        let newRow = document.createElement("tr");
        for(let j = 0 ; j < 3 ; j++) {
            let newCell = document.createElement("td");
            newRow.appendChild(newCell);
        } 
        newTable.appendChild(newRow);
    }
    body.appendChild(newTable);
}
createNewTable();

//50
function deleteTable() {
    let tableArr = document.getElementsByTagName("table");
    let tableToDelete = tableArr[tableArr.length - 1];
    body.removeChild(tableToDelete);
}

deleteTable();