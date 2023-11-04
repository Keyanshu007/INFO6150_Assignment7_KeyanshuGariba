document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('Timer');
    const datePicker = document.getElementById('date-picker');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');
    let intervalId = null;
    let elapsedTime = 0;

    // Set current date in date picker and prevent typing
    datePicker.valueAsDate = new Date();
    datePicker.addEventListener('keydown', (e) => {
        e.preventDefault(); // Prevent typing in the date field
    });

    // Update the display with the elapsed time
    const updateDisplay = () => {
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    // Pad numbers with leading zeros
    const pad = (number) => {
        return String(number).padStart(2, '0');
    };

    // A promise-based delay function
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Start the stopwatch using async/await and Promises
    startBtn.addEventListener('click', () => {
        if (intervalId !== null) return; // Prevent multiple intervals
        intervalId = setInterval(() => {
            elapsedTime += 1000;
            updateDisplay();
        }, 1000);
    });

    // Stop the stopwatch using async/await
    stopBtn.addEventListener('click', async () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
            // An example of using async/await with a Promise
            // This does nothing functional here but shows how you can wait for a promise to resolve
            await delay(0);
        }
    });

    // Reset the stopwatch using async/await
    resetBtn.addEventListener('click', async () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        elapsedTime = 0;
        updateDisplay();
        // An example of using async/await with a Promise
        // This does nothing functional here but shows how you can wait for a promise to resolve
        await delay(0);
    });
});