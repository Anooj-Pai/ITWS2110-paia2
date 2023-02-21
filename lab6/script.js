var all;
var daily_play;
var found;
var foundlist = [];
var guess;
var letters = [], todayletters = [];
var points;
var rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9;
var replaying;
var total, todaytotal, yesterdaytotal;
var win;
var wordlist = [], todaywordlist = [], yesterdaywordlist = [];
var words, todaywords, yesterdaywords;
var dark;

var comb1 = document.getElementById("comb1");
var comb2 = document.getElementById("comb2");
var comb3 = document.getElementById("comb3");
var comb4 = document.getElementById("comb4");
var comb5 = document.getElementById("comb5");
var comb6 = document.getElementById("comb6");
var comb7 = document.getElementById("comb7");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");

var noMessage = document.getElementById("no-message");
var pangram = document.getElementById("pangram");
var alreadyFound = document.getElementById("already-found");
var centerLetter = document.getElementById("center-letter");
var tooShort = document.getElementById("too-short");
var notInList = document.getElementById("not-in-list");
var guess = document.getElementById("guess");

function darkmode() {
    if (dark == 1) {
        var x = document.querySelectorAll('*');
        var nav = document.querySelector(".nav");
        var navLinks = document.querySelector(".nav-links a");
        for (var i = 0; i < x.length; i++) {
            if (x[i].className != "fg" && x[i].className != "bg") {
                x[i].style.background = "#fbfcff";
                nav.style.background=  "#FFA701";
                navLinks.style.background = "#FFA701";
                x[i].style.color = "#243b4a";
            }
        }
        dark = 0;
        localStorage.setItem("useDarkMode", 1);
    } else {
        var x = document.querySelectorAll('*');
        for (var i = 0; i < x.length; i++) {
            if (x[i].className != "fg" && x[i].className != "bg") {
                x[i].style.background = "#111111";
                x[i].style.color = "#9e9e9e";
            }
        }
        dark = 1;
        localStorage.setItem("useDarkMode", 0);
    }
}

function type(letter, combno) {
    noMessage.style.display = "inline";
    pangram.style.display = "none";
    alreadyFound.style.display = "none";
    centerLetter.style.display = "none";
    tooShort.style.display = "none";
    notInList.style.display = "none";
    document.getElementById("comb" + combno).style.height = "80px";
    document.getElementById("comb" + combno).style.width = "80px";
    document.getElementById("comb" + combno).style.left = parseInt(document.getElementById("comb" + combno).style.left) + 10 + "px";
    document.getElementById("comb" + combno).style.top = parseInt(document.getElementById("comb" + combno).style.top) + 10 + "px";
    guess.value = document.getElementById("guess").value + letter;
}

function untype() {
    comb1.style.height = "100px";
    comb1.style.width = "100px";
    comb1.style.left = "1px";
    comb1.style.top = "51px";
    comb2.style.height = "100px";
    comb2.style.width = "100px";
    comb2.style.left = "80px";
    comb2.style.top = "1px";
    comb3.style.height = "100px";
    comb3.style.width = "100px";
    comb3.style.left = "159px";
    comb3.style.top = "51px";
    comb4.style.height = "100px";
    comb4.style.width = "100px";
    comb4.style.left = "1px";
    comb4.style.top = "149px";
    comb5.style.height = "100px";
    comb5.style.width = "100px";
    comb5.style.left = "80px";
    comb5.style.top = "199px";
    comb6.style.height = "100px";
    comb6.style.width = "100px";
    comb6.style.left = "159px";
    comb6.style.top = "149px";
    comb7.style.height = "100px";
    comb7.style.width = "100px";
    comb7.style.left = "80px";
    comb7.style.top = "100px";
}

function getLetterPic(play, letter, posX, posY) {
    var letNum = letter.charCodeAt(0);
    if(letter[0] == '7') var letNum = letter.charCodeAt(1);
    letNum -= 97;
    var posX = letNum * -60;
    if(letter[0] == '7') posX -= 1560;
    play.style.backgroundPosition = posX + "px " + "0px";
}

function display() {
    var didtouch = 0;

    getLetterPic(p1, letters[0]);
    p1.alt = letters[0];
    comb1.alt = letters[0];
    p1.style.left = "21px";
    p1.style.top = "51px";
    p1.ontouchstart = function () { didtouch = 1; type(letters[0], 1) };
    p1.onmousedown = function () { if (didtouch != 1) { type(letters[0], 1) } };
    p1.style.display = "block";
    p1.onmouseup = function () { untype() };
    p1.ondragend = function () { untype() };
    p1.ontouchend = function () { untype() };
    p1.ontouchcancel = function () { untype() };
    
    getLetterPic(p2, letters[1]);
    p2.alt = letters[1];
    comb2.alt = letters[1];
    p2.style.left = "100px";
    p2.style.top = "1px";
    p2.ontouchstart = function () { didtouch = 1; type(letters[1], 2) };
    p2.onmousedown = function () { if (didtouch != 1) { type(letters[1], 2) } };
    p2.style.display = "block";
    p2.onmouseup = function () { untype() };
    p2.ondragend = function () { untype() };
    p2.ontouchend = function () { untype() };
    p2.ontouchcancel = function () { untype() };
    
    getLetterPic(p3, letters[2]);
    p3.alt = letters[2];
    comb3.alt = letters[2];
    p3.style.left = "179px";
    p3.style.top = "51px";
    p3.ontouchstart = function () { didtouch = 1; type(letters[2], 3) };
    p3.onmousedown = function () { if (didtouch != 1) { type(letters[2], 3) } };
    p3.style.display = "block";
    p3.onmouseup = function () { untype() };
    p3.ondragend = function () { untype() };
    p3.ontouchend = function () { untype() };
    p3.ontouchcancel = function () { untype() };
    
    getLetterPic(p4, letters[3]);
    p4.alt = letters[3];
    comb4.alt = letters[3];
    p4.style.left = "21px";
    p4.style.top = "149px";
    p4.ontouchstart = function () { didtouch = 1; type(letters[3], 4) };
    p4.onmousedown = function () { if (didtouch != 1) { type(letters[3], 4) } };
    p4.style.display = "block";
    p4.onmouseup = function () { untype() };
    p4.ondragend = function () { untype() };
    p4.ontouchend = function () { untype() };
    p4.ontouchcancel = function () { untype() };
    
    getLetterPic(p5, letters[4]);
    p5.alt = letters[4];
    comb5.alt = letters[4];
    p5.style.left = "100px";
    p5.style.top = "199px";
    p5.ontouchstart = function () { didtouch = 1; type(letters[4], 5) };
    p5.onmousedown = function () { if (didtouch != 1) { type(letters[4], 5) } };
    p5.style.display = "block";
    p5.onmouseup = function () { untype() };
    p5.ondragend = function () { untype() };
    p5.ontouchend = function () { untype() };
    p5.ontouchcancel = function () { untype() };
    
    getLetterPic(p6, letters[5]);
    p6.alt = letters[5];
    comb6.alt = letters[5];
    p6.style.left = "179px";
    p6.style.top = "149px";
    p6.ontouchstart = function () { didtouch = 1; type(letters[5], 6) };
    p6.onmousedown = function () { if (didtouch != 1) { type(letters[5], 6) } };
    p6.style.display = "block";
    p6.onmouseup = function () { untype() };
    p6.ondragend = function () { untype() };
    p6.ontouchend = function () { untype() };
    p6.ontouchcancel = function () { untype() };

    getLetterPic(p7, letters[6]);
    p7.alt = "center: " + letters[6][1];
    comb7.alt = "center: " + letters[6][1];
    p7.style.left = "100px";
    p7.style.top = "100px";
    p7.ontouchstart = function () { didtouch = 1; type(letters[6][1], 7) };
    p7.onmousedown = function () { if (didtouch != 1) { type(letters[6][1], 7) } };
    p7.style.display = "block";
    p7.onmouseup = function () { untype() };
    p7.ondragend = function () { untype() };
    p7.ontouchend = function () { untype() };
    p7.ontouchcancel = function () { untype() };
}

function update_rank() {
    var rank;

    if (points >= rank9) {
        if (win == 0) {
            alert("You earned the rank of Queen Bee!\n\nCan you find all the words?");
            win = 1;
        }
        rank = "Queen Bee!";
    } else if (points >= rank8) {
        rank = "Outstanding";
    } else if (points >= rank7) {
        rank = "Marvellous";
    } else if (points >= rank6) {
        rank = "Superb";
    } else if (points >= rank5) {
        rank = "Excellent";
    } else if (points >= rank4) {
        rank = "Skilled";
    } else if (points >= rank3) {
        rank = "Fine";
    } else if (points >= rank2) {
        rank = "Novice";
    } else {
        rank = "Newbie";
    }

    document.getElementById("rank-update").innerHTML = rank;
}

function set_rank() {
    rank1 = 0;
    rank2 = Math.floor(total * 0.02);
    rank3 = Math.floor(total * 0.05);
    rank4 = Math.floor(total * 0.08);
    rank5 = Math.floor(total * 0.15);
    rank6 = Math.floor(total * 0.25);
    rank7 = Math.floor(total * 0.40);
    rank8 = Math.floor(total * 0.50);
    rank9 = Math.floor(total * 0.70);
}

function save_word() {
    localStorage.setItem("foundwords", JSON.stringify(foundlist));
}

function add_points() {
    var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
    var i = 0, j = 0;

    if (daily_play === 1) {
        save_word();
    }

    i = guess.length;
    if (i < 7) {
        if (i == 4) {
            i = 1;
        }
        points = points + i;

        return;
    }

    i = 0;
    while (i < guess.length) {
        for (j = 0; j < 7; j++) {
            if (guess[i] == letters[j]) {
                //Use switch statement rather than series of if's
                switch (j) {
                    case 0:
                        one = 1;
                        break;
                    case 1:
                        two = 1;
                        break;
                    case 2:
                        three = 1;
                        break;
                    case 3:
                        four = 1;
                        break;
                    case 4:
                        five = 1;
                        break;
                    default:
                        six = 1;
                        break;
                }
            }
        }
        i = i + 1;
    }

    if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
        points = points + guess.length + 7;
        document.getElementById("no-message").style.display = "none";
        document.getElementById("pangram").style.display = "inline";

        return;
    }

    points = points + guess.length;
}

function found_word() {
    var i;

    for (i = 0; i < found; i++) {
        if (guess == foundlist[i]) {
            document.getElementById("no-message").style.display = "none";
            document.getElementById("already-found").style.display = "inline";
            return 1;
        }
    }

    foundlist.push(guess);

    found = found + 1;

    add_points();

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");

    update_rank();

    if (found == words) {
        alert("Congratulations! You found all the words!");
        all = 1;
    }

    return 0;
}

function check() {
    var center = 0, i;

    

    noMessage.style.display = "inline";
    pangram.style.display = "none";
    alreadyFound.style.display = "none";
    centerLetter.style.display = "none";
    tooShort.style.display = "none";
    notInList.style.display = "none";

    if (replaying === 0) {
        g = guess.value.toLowerCase();
        document.getElementById("player-guess").reset();
    } else {
        if(guess.value == "") guess.value = " ";
        g = guess.value.toLowerCase();
        document.getElementById("player-guess").reset();
    }

    for (i = 0; i < g.length; i++) {
        if ("7" + g[i] == letters[6]) {
            center = 1;
        }
    }

    if (g.length < 4) {
        noMessage.style.display = "none";
        tooShort.style.display = "inline";
        return 1;
    }

    if (center == 0) {
        noMessage.style.display = "none";
        centerLetter.style.display = "inline";
        return 1;
    }

    for (i = 0; i < words; i++) {
        if (g == wordlist[i]) {
            i = found_word();
            return i;
        }
    }
    noMessage.style.display = "none";
    notInList.style.display = "inline";

    return 1;

}

function replay_words() {
    var i, replay;

    replaying = 1;

    replay = JSON.parse(localStorage.getItem("foundwords"));

    localStorage.removeItem("foundwords");

    for (i = 0; i < replay.length; i++) {
        guess = replay[i];

        if (check() == 1) {
            localStorage.removeItem("foundwords");

            for (i = 0; i < found; i++) {
                foundlist.pop();
            }

            all = 0;
            found = 0;
            points = 0;
            rank = "Newbie";
            win = 0;

            noMessage.style.display = "inline";
            pangram.style.display = "none";
            alreadyFound.style.display = "none";
            centerLetter.style.display = "none";
            tooShort.style.display = "none";
            notInList.style.display = "none";

            replaying = 0;

            return;
        }
    }

    noMessage.style.display = "inline";
    pangram.style.display = "none";
    alreadyFound.style.display = "none";
    centerLetter.style.display = "none";
    tooShort.style.display = "none";
    notInList.style.display = "none";

    replaying = 0;

}

function daily() {
    var i;

    daily_play = 1;

    for (i = 0; i < found; i++) {
        foundlist.pop();
    }

    all = 0;
    found = 0;
    points = 0;
    rank = "Newbie";
    replaying = 0;
    win = 0;

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
    document.getElementById("rank-update").innerHTML = rank;
    document.getElementById("yesterday-or-random").innerHTML = "Yesterday's answers";
    document.getElementById("random-answers").style.display = "none";
    document.getElementById("restart-daily-button").style.visibility = "hidden";
    document.getElementById("update-random").innerHTML = "";
    noMessage.style.display = "inline";
    pangram.style.display = "none";
    alreadyFound.style.display = "none";
    centerLetter.style.display = "none";
    tooShort.style.display = "none";
    notInList.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";

    letters[0] = todayletters[0];
    letters[1] = todayletters[1];
    letters[2] = todayletters[2];
    letters[3] = todayletters[3];
    letters[4] = todayletters[4];
    letters[5] = todayletters[5];
    letters[6] = todayletters[6];
    words = todaywords;
    total = todaytotal;
    wordlist = todaywordlist;
    set_rank();
    if (localStorage.hasOwnProperty("foundwords") === true) {
        replay_words();
    }
    document.getElementById("update-random").innerHTML = yesterdaywordlist.join("<br />") + "<br />" + "<br />Total words:  " + yesterdaywords + "<br />Total points: " + yesterdaytotal + "<br />Points for Queen Bee: " + Math.floor(yesterdaytotal * 0.70);
    display();
}

async function get_yesterday() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://freebee.fun/cgi-bin/yesterday", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            yesterdaywords = gameObj.words;
            yesterdaytotal = gameObj.total;
            yesterdaywordlist = gameObj.wordlist;
        }
    };
    xhttp.send();
}

async function get_today() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://freebee.fun/cgi-bin/today", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            todayletters[0] = gameObj.letters[0];
            todayletters[1] = gameObj.letters[1];
            todayletters[2] = gameObj.letters[2];
            todayletters[3] = gameObj.letters[3];
            todayletters[4] = gameObj.letters[4];
            todayletters[5] = gameObj.letters[5];
            todayletters[6] = "7" + gameObj.center;
            todaywords = gameObj.words;
            todaytotal = gameObj.total;
            todaywordlist = gameObj.wordlist;
            daily();
        }
    };
    xhttp.send();
}

window.onload = function () {
    get_yesterday();
    get_today();
    if (localStorage.hasOwnProperty("useDarkMode") === true) {
        dark = Number(localStorage.getItem("useDarkMode"));
    } else {
        dark = 1;
    }
    darkmode();
};

function shuffle() {
    var i, j, t;

    for (i = 5; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        t = letters[j];
        letters[j] = letters[i];
        letters[i] = t;
    }

    display();
}

function random() {
    var xhttp = new XMLHttpRequest();
    var i;

    daily_play = 0;

    for (i = 0; i < found; i++) {
        foundlist.pop();
    }

    all = 0;
    found = 0;
    points = 0;
    rank = "Newbie";
    win = 0;

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
    document.getElementById("rank-update").innerHTML = rank;
    document.getElementById("yesterday-or-random").innerHTML = "Answers";
    document.getElementById("update-random").innerHTML = "";
    noMessage.style.display = "inline";
    pangram.style.display = "none";
    alreadyFound.style.display = "none";
    centerLetter.style.display = "none";
    tooShort.style.display = "none";
    notInList.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";

    xhttp.open("GET", "https://freebee.fun/cgi-bin/random", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            letters[0] = gameObj.letters[0];
            letters[1] = gameObj.letters[1];
            letters[2] = gameObj.letters[2];
            letters[3] = gameObj.letters[3];
            letters[4] = gameObj.letters[4];
            letters[5] = gameObj.letters[5];
            letters[6] = "7" + gameObj.center;
            words = gameObj.words;
            total = gameObj.total;
            wordlist = gameObj.wordlist;
            set_rank();
            display();
            document.getElementById("random-answers").style.display = "block";
            document.getElementById("restart-daily-button").style.visibility = "visible";
        }
    };
    xhttp.send();
}

function show_random() {
    document.getElementById("update-random").innerHTML = wordlist.join("<br />") + "<br />" + "<br />Total words:  " + words + "<br />Total points: " + total + "<br />Points for Queen Bee: " + Math.floor(total * 0.70);
}

function delete_letter() {
    var str = guess.value;
    var len = str.length;

    str = str.slice(0, len - 1) + str.slice(len, len);
    guess.value = str;
}