//console.log("holaa");
const varTitulo = document.getElementById("titulo");
const varTextooo = document.getElementById("textooo");

const listaTextoss =["Esta es la hisoria de Manolito", "Manolito está maldito", "Está condenado a siempre sonrojarse cuando se le acercan ", "Cuando se sonroja le crece la cabeza", "Y la cabeza le da vueltas porque esto no lo puede controlar", "entonces ahora esá condenado al sonrojo perpetuo", "Y a verse como el meme del hamster de ojos grandes y llorosos"];

let estadoInicial = true;
let indice = 0

varTitulo.addEventListener("click", () => {
    if(estadoInicial === true){
        varTitulo.innerText = "¡Medio litro de helado por tan solo 2000 pesitos!";
        varTitulo.style.backgroundColor= "pink";
        varTitulo.style.color="royalblue";
    }
    else {
        varTitulo.innerText = "Manolito";
        varTitulo.style.backgroundColor= "transparent";
        varTitulo.style.color="rgb(85, 17, 119)";
    }
    estadoInicial = !estadoInicial;
})

listaTextoss[listaTextoss[0]];
varTextooo.addEventListener("click", () =>{
    if (indice < listaTextoss.length){
         varTextooo.innerText= listaTextoss[indice];
        indice = indice +1;
    }
    else {
        varTextooo.innerText = "el fin <3";
    }

})