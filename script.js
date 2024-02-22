round = 1;

function getPlayer(round) {
    if (round % 2 == 0) {
        return 2;
    }
    else {
        return 1;
    }

}

function checkIfTaken(title) {
    if (document.getElementById(title).innerHTML == "") {
        return false;
    }
    else {
        return true;
    }
}

function changePlace(title, mark) {
    document.getElementById(title).innerHTML = mark;
}

function checkWin() {
    square1 = document.getElementById("square1");
    square2 = document.getElementById("square2");
    square3 = document.getElementById("square3");
    square4 = document.getElementById("square4");
    square5 = document.getElementById("square5");
    square6 = document.getElementById("square6");
    square7 = document.getElementById("square7");
    square8 = document.getElementById("square8");
    square9 = document.getElementById("square9");



    //Player 1 
    if (square1.innerHTML == "X" && square2.innerHTML == "X" && square3.innerHTML == "X") {
        return true;
    }
    else if (square4.innerHTML == "X" && square5.innerHTML == "X" && square6.innerHTML == "X") {
        return true;
    }
    else if (square7.innerHTML == "X" && square8.innerHTML == "X" && square9.innerHTML == "X") {
        return true;
    }
    else if (square1.innerHTML == "X" && square4.innerHTML == "X" && square7.innerHTML == "X") {
        return true;
    }
    else if (square2.innerHTML == "X" && square5.innerHTML == "X" && square8.innerHTML == "X") {
        return true;
    }
    else if (square3.innerHTML == "X" && square6.innerHTML == "X" && square9.innerHTML == "X") {
        return true;
    }
    else if (square1.innerHTML == "X" && square5.innerHTML == "X" && square9.innerHTML == "X") {
        return true;
    }
    else if (square2.innerHTML == "X" && square5.innerHTML == "X" && square8.innerHTML == "X") {
        return true;
    }
    else if (square3.innerHTML == "X" && square5.innerHTML == "X" && square7.innerHTML == "X") {
        return true;
    }


    else if (square4.innerHTML == "O" && square5.innerHTML == "O" && square6.innerHTML == "O") {
        return true;
    }
    else if (square7.innerHTML == "O" && square8.innerHTML == "O" && square9.innerHTML == "O") {
        return true;
    }
    else if (square1.innerHTML == "O" && square4.innerHTML == "O" && square7.innerHTML == "O") {
        return true;
    }
    else if (square2.innerHTML == "O" && square5.innerHTML == "O" && square8.innerHTML == "O") {
        return true;
    }
    else if (square3.innerHTML == "O" && square6.innerHTML == "O" && square9.innerHTML == "O") {
        return true;
    }
    else if (square1.innerHTML == "O" && square5.innerHTML == "O" && square9.innerHTML == "O") {
        return true;
    }
    else if (square2.innerHTML == "O" && square5.innerHTML == "O" && square8.innerHTML == "O") {
        return true;
    }
    else if (square3.innerHTML == "O" && square5.innerHTML == "O" && square7.innerHTML == "O") {
        return true;
    }

    else {
        return false;
    }



    //Player2
}


function checkDraw() {
    square1 = document.getElementById("square1").innerHTML;
    square2 = document.getElementById("square2").innerHTML;
    square3 = document.getElementById("square3").innerHTML;
    square4 = document.getElementById("square4").innerHTML;
    square5 = document.getElementById("square5").innerHTML;
    square6 = document.getElementById("square6").innerHTML;
    square7 = document.getElementById("square7").innerHTML;
    square8 = document.getElementById("square8").innerHTML;
    square9 = document.getElementById("square9").innerHTML;

    if (square1.length > 0 && square2.length > 0 && square3.length > 0 && square4.length > 0 && square5.length > 0 && square6.length > 0 && square7.length > 0 && square8.length > 0 && square9.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function place(title) {


    mark = "";
    player = getPlayer(round);

    if (player == 1) {
        mark = "X";

    }
    if (player == 2) {
        mark = "O";
    }

    if (!checkIfTaken(title)) {
        changePlace(title, mark);
        win = checkWin()
        draw = checkDraw();
        if (win == true) {
            document.getElementById("melyik").innerHTML = "A nyertes: Player" + player

            if (player == 1) {
                var score = parseInt(document.getElementById("player1wins").innerHTML);
                score = score + 1
                document.getElementById("player1wins").innerHTML = score
            }
            else if (player == 2) {
                var score = parseInt(document.getElementById("player2wins").innerHTML);
                score = score + 1
                document.getElementById("player2wins").innerHTML = score

            }
           
            square1 = document.getElementById("square1").innerHTML = "";
            square2 = document.getElementById("square2").innerHTML = "";
            square3 = document.getElementById("square3").innerHTML = "";
            square4 = document.getElementById("square4").innerHTML = "";
            square5 = document.getElementById("square5").innerHTML = "";
            square6 = document.getElementById("square6").innerHTML = "";
            square7 = document.getElementById("square7").innerHTML = "";
            square8 = document.getElementById("square8").innerHTML = "";
            square9 = document.getElementById("square9").innerHTML = "";

            document.getElementById("melyik").innerHTML = "Player" + player+ " kezd"
        }
        else if (draw == true) {
            document.getElementById("melyik").innerHTML = "Döntetlen!"
            square1 = document.getElementById("square1").innerHTML = "";
            square2 = document.getElementById("square2").innerHTML = "";
            square3 = document.getElementById("square3").innerHTML = "";
            square4 = document.getElementById("square4").innerHTML = "";
            square5 = document.getElementById("square5").innerHTML = "";
            square6 = document.getElementById("square6").innerHTML = "";
            square7 = document.getElementById("square7").innerHTML = "";
            square8 = document.getElementById("square8").innerHTML = "";
            square9 = document.getElementById("square9").innerHTML = "";

            document.getElementById("melyik").innerHTML = "Player" + player+ " kezd"
        }
        else {
            round++;
            if (player == 1) {
                document.getElementById("melyik").innerHTML = "Player2 jön!";
            }
            if (player == 2) {
                document.getElementById("melyik").innerHTML = "Player1 jön!";
            }
        }

    }



}