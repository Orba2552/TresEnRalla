let casilla, cont = 1;

function play(celda){

    casilla = document.querySelector(celda);

    if (casilla.innerText.length < 1){
        if (cont %2 === 0){
            casilla.innerHTML = "O";
            cont ++;
            win();
        } else {
            casilla.innerHTML = "X";
            cont ++;
            win();
        }
    } else{
            alert("Casilla ocupada!!");
        }

}

function win(){

    //Comprobación gana player X

    if(document.getElementById('uno').innerText === "X" && document.getElementById('dos').innerText === "X"
        && document.getElementById('tres').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('uno').innerText === "X" && document.getElementById('cuatro').innerText === "X"
        && document.getElementById('siete').innerText === "X") {
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('uno').innerText === "X" && document.getElementById('cinco').innerText === "X"
        && document.getElementById('nueve').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('nueve').innerText === "X" && document.getElementById('seis').innerText === "X"
        && document.getElementById('tres').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('nueve').innerText === "X" && document.getElementById('ocho').innerText === "X"
        && document.getElementById('siete').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('cinco').innerText === "X" && document.getElementById('tres').innerText === "X"
        && document.getElementById('siete').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('cuatro').innerText === "X" && document.getElementById('cinco').innerText === "X"
        && document.getElementById('seis').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    if(document.getElementById('dos').innerText === "X" && document.getElementById('cinco').innerText === "X"
        && document.getElementById('ocho').innerText === "X"){
        document.getElementById('winX').style.display = "flex";
    }

    //Comprobación gana player O

    if(document.getElementById('uno').innerText === "O" && document.getElementById('dos').innerText === "O"
        && document.getElementById('tres').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('uno').innerText === "O" && document.getElementById('cuatro').innerText === "O"
        && document.getElementById('siete').innerText === "O") {
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('uno').innerText === "O" && document.getElementById('cinco').innerText === "O"
        && document.getElementById('nueve').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('nueve').innerText === "O" && document.getElementById('seis').innerText === "O"
        && document.getElementById('tres').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('cinco').innerText === "O" && document.getElementById('tres').innerText === "O"
        && document.getElementById('siete').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('cinco').innerText === "O" && document.getElementById('tres').innerText === "O"
        && document.getElementById('siete').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('cuatro').innerText === "O" && document.getElementById('cinco').innerText === "O"
        && document.getElementById('seis').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

    if(document.getElementById('dos').innerText === "O" && document.getElementById('cinco').innerText === "O"
        && document.getElementById('ocho').innerText === "O"){
        document.getElementById('winO').style.display = "flex";
    }

   if((document.getElementById('winO').style.display !== "flex") && (document.getElementById('winX').style.display !== "flex")
    && cont === 10) {
       document.getElementById('tablas').style.display = "flex";
   }
}



let player;

function closet(ces){
    player = document.querySelector(ces);
    player.style.display = "none";
}

