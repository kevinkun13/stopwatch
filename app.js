// Select element
const stopWatchTimer = document.getElementById('stop-watch-timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Variable declaration for reassignment
let second = 0;
let minute = 0;
let hour = 0;
let timerInterval;

// Set Timer
function setTimerInterval() {
    second += 1;
    if (second > 60) {
        second = 0;
        minute += 1;
        if (minute > 60) {
            minute = 0;
            hour += 1;
        }
    }
    const secondDigit = second < 10 ? '0' + second : second;
    const minuteDigit = minute < 10 ? '0' + minute : minute;
    const hourDigit = hour < 10 ? '0' + hour : hour;
    stopWatchTimer.innerHTML = `${hourDigit}:${minuteDigit}:${secondDigit}`;
}

// Event Listener
startBtn.addEventListener('click', () => {
    timerInterval = setInterval(setTimerInterval, 1000);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    startBtn.innerText = 'Continue';
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    second = 0;
    minute = 0;
    hour = 0;
    startBtn.innerText = 'Start';
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
    stopWatchTimer.innerHTML = '00:00:00';
});






