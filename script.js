var timer = 60;
var score = 0;
var hitrun = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrun = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrun;
}

function makeBubble() {
    var cluster = "";
    for (var i = 1; i <= 152; i++) {
        var rn = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${rn}</div>`;
    }

    document.getElementById("bottompnl").innerHTML = cluster;
}

function runTimer() {
   var timerint= setInterval(function () {
       if (timer > 0) {
           timer--;
            document.querySelector("#timerval").textContent = timer;   
        } else {
           clearInterval(timerint);
           document.querySelector("#bottompnl").innerHTML = `<h1>Game Over</h1>`;
        }
      
    }, 1000);
}

document.querySelector("#bottompnl").addEventListener("click", function (dets) {
    var clickeddnum = (Number(dets.target.textContent));
    if (clickeddnum === hitrun) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();