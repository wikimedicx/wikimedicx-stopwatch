window.onload = function() {
    let seconds = 00;
    let tens = 00;
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let appendSeconds = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");
    let interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonReset.onclick = function () {
        clearInterval(interval);
        seconds = "00";
        tens = "00";
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

    function startTimer () {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;    
            tens = 0;
            appendTens.innerHTML = "0" + 0;
         }

         if (seconds > 9) {
             appendSeconds.innerHTML = seconds;
         }
    }
}