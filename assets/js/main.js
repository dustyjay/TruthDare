slotitem = ['0', '1', '2', '3'];

var playBtn = $("#control");

playBtn.click(() => {
    start();
});

function start() {
    counter = 0;
    $('#control').keydown((event) => {
        if (event.keyCode === 32 || event.keyCode === 13)
            event.preventDefault();
        return false;
    });
    playBtn.html("Rolling...");
    playBtn.addClass('disabled')
    run();
    pauseLose();
    pauseWin()
    playSpin();
}
var counts = 0

function run() {
    if (counts < 30) {
        setTimeout(() => {
            randomSlot(".slot1");
            randomSlot(".slot2");
            randomSlot(".slot3");
            randomSlot(".slot4");
            run()
        }, 80);
    }
    else if (counts < 40) {

        setTimeout(() => {
            randomSlot(".slot2");
            randomSlot(".slot3");
            randomSlot(".slot4");
            run()
        }, 100);
    }
    else if (counts < 60) {

        setTimeout(() => {
            randomSlot(".slot3");
            randomSlot(".slot4");
            run()
        }, 100);
    }
    else if (counts < 70) {

        setTimeout(() => {
            randomSlot(".slot4");
            run()
        }, 100);
    }
    else {
        counts = 0
        checkMatch();
    }

    counts++;

}


function randomSlot(slot) {
    randTurns = 4 + Math.floor((Math.random() * 4));
    for (a = 0; a < randTurns; a++) {
        $(slot).attr("src", "assets/images/" + slotitem[a % 3] + ".png");
    }
}

function checkCard(slot) {

    var src = $(slot).attr("src");

    var cards = {
        maple: 0,
        diamonds: 0,
        clover: 0,
        hearts: 0
    };

    switch (src) {
        case "assets/images/0.png":
            cards.maple += 1;
            break;
        case "assets/images/1.png":
            cards.diamonds += 1;
            break;
        case "assets/images/2.png":
            cards.clover += 1;
            break;
        case "assets/images/3.png":
            cards.hearts += 1;
            break;
        default:
            break;
    }
    return cards;
}

function countCards() {
    var allCards = {
        maple: 0,
        diamonds: 0,
        clover: 0,
        hearts: 0
    };
    for (var key in allCards) {
        allCards[key] = checkCard(".slot1")[key] + checkCard(".slot2")[key] + checkCard(".slot3")[key] + checkCard(".slot4")[key];
    }
    ;
    return allCards;
}

function checkMatch() {
    var cards = countCards();

    if (cards.clover == 4 || cards.diamonds == 4 || cards.maple == 4 || cards.hearts == 4) {
        Materialize.toast('Bravo vous avez gagné', 5000, 'green');
        pauseSpin();
        playWin();
    }
    else if ((cards.clover == 2 && cards.diamonds == 2) || (cards.clover == 2 && cards.hearts == 2) || (cards.clover == 2 && cards.maple == 2) || (cards.diamonds == 2 && cards.hearts == 2) || (cards.diamonds == 2 && cards.maple == 2) || (cards.hearts == 2 && cards.maple == 2)) {
        Materialize.toast('Yay! You won', 5000, 'green');
        pauseSpin();
        playWin();
    }
    else {
        Materialize.toast('Sorry. Try Again', 5000, 'red');
        // save(0);
        pauseSpin();
        playLose();
    }
    playBtn.removeClass(" disabled ");
    playBtn.html('Play')
}

var spin = document.getElementById("spin");
var lose = document.getElementById("lose");
var win = document.getElementById("win");

function playSpin() {
    spin.play();
}

function pauseSpin() {
    spin.pause();
    spin.currentTime = 0;
}

function playLose() {
    lose.play();
}

function pauseLose() {
    lose.pause();
    lose.currentTime = 0;
}

function playWin() {
    win.play();
}

function pauseWin() {
    win.pause();
    win.currentTime = 0;
}

function setVolume() {
    var media0 = document.getElementById("spin");
    var media1 = document.getElementById("win");
    var media2 = document.getElementById("lose");
    media0.volume = document.getElementById("vol").value;
    media1.volume = document.getElementById("vol").value;
    media2.volume = document.getElementById("vol").value;
    if (media0.volume < 1) {
        $("#change").html("volume_down");
    }
    if (media0.volume == 0) {
        $("#change").html("volume_off");
    }
    if (media0.volume == 1) {
        $("#change").html("volume_up");
    }
}

var year = (new Date()).getFullYear();
$("#copyright").html(year);

