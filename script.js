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

function place(title) {


    mark = "";
    player = getPlayer(round);

    if (player == 1) {
        mark = "X";
        
    }
    if (player == 2) {
        mark = "O",
            
    }

    if (!checkIfTaken(title)) {
        changePlace(title, mark);
        round++;
        if (player == 1) {
            document.getElementById("melyik").innerHTML = "Player2 jön!";
        }
        if (player == 2) {
            document.getElementById("melyik").innerHTML = "Player1 jön!";
        }
    }



}