let startButton = document.getElementById("startButton");
let tempoDisplay = document.getElementById("tempo");
let rosso = document.getElementById("rosso");
let giallo = document.getElementById("giallo");
let verde = document.getElementById("verde");

let startTime;
let timeoutId;
let isGreen = false;

function iniziaTest() {
    startButton.disabled = true;
    tempoDisplay.textContent = "";
    resetSemaforo();

    
    let tempoAttesa = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
        
        resetSemaforo();
        verde.style.backgroundColor = "green";
        startTime = new Date().getTime();
        isGreen = true;
    }, tempoAttesa);
}

function resetSemaforo() {
    rosso.style.backgroundColor = "red";
    giallo.style.backgroundColor = "yellow";
    verde.style.backgroundColor = "gray";
}

verde.addEventListener("click", function() {
    console.log("here")
    if (isGreen) {
        console.log("now here")
        let endTime = new Date().getTime();
        let reactionTime = (endTime - startTime) / 1000; 
        tempoDisplay.textContent = "Tempo di reazione: " + reactionTime + " secondi!";
        isGreen = false;
        startButton.disabled = false; 
    }
});
