let startTime = 0;
let intervalId = null;

const displayTime = document.getElementById('displayTime');
const startPauseButton = document.getElementById('start-pause-button');
const resetButton = document.getElementById('reset-button');
const lapTimesList = document.getElementById('lap-times-list');

startPauseButton.addEventListener('click', toggleStartPause);

resetButton.addEventListener('click', resetStopwatch);

function toggleStartPause() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        startPauseButton.textContent = 'Start';
    } else {
        startTime = Date.now();
        intervalId = setInterval(updateDisplay, 1000);
        startPauseButton.textContent = 'Pause';
    }
}

function updateDisplay() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    displayTime.textContent = formattedTime;
}

function formatTime(time) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function resetStopwatch() {
    clearInterval(intervalId);
    intervalId = null;
    displayTime.textContent = '00:00:00';
    startPauseButton.textContent = 'Start';
    lapTimesList.innerHTML = '';
}

updateDisplay();
