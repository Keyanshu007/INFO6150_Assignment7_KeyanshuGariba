document.addEventListener("DOMContentLoaded", function () {
    const Display = document.getElementById('Timer');
    const dateMenu = document.getElementById('date-menu'); // Changed the id from 'date-picker' to 'date-menu' to match the HTML
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    let intervalId = null; // Variable to store the interval ID for the stopwatch
    let elapsedTime = 0; // Variable to track the elapsed time in milliseconds

    // Set current date in date picker and prevent typing
    dateMenu.valueAsDate = new Date(); // Set the date picker to the current date
    dateMenu.addEventListener('keydown', (e) => {
        e.preventDefault(); // Prevent typing in the date field
    });

    // Update the display with the elapsed time
    const updateDisplay = () => {
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        Display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    // Pad numbers with leading zeros
    const pad = (number) => {
        return String(number).padStart(2, '0');
    };

    // A promise-based delay function
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Start the stopwatch using async/await and Promises
    startButton.addEventListener('click', () => {
        if (intervalId !== null) return; // Prevent multiple intervals
        intervalId = setInterval(() => {
            elapsedTime += 1000; // Increment elapsed time by 1 second (1000 ms)
            updateDisplay(); // Update the stopwatch display
        }, 1000); // Update every 1 second (1000 ms)
    });

    // Stop the stopwatch using async/await
    stopButton.addEventListener('click', async () => {
        if (intervalId !== null) {
            clearInterval(intervalId); // Clear the interval to stop the stopwatch
            intervalId = null;
            // An example of using async/await with a Promise
            // This does nothing functional here but shows how you can wait for a promise to resolve
            await delay(0);
        }
    });

    // Reset the stopwatch using async/await
    resetButton.addEventListener('click', async () => {
        if (intervalId !== null) {
            clearInterval(intervalId); // Clear the interval to stop the stopwatch
            intervalId = null;
        }
        elapsedTime = 0; // Reset elapsed time to 0
        updateDisplay(); // Update the display to show 00:00:00
        // An example of using async/await with a Promise
        // This does nothing functional here but shows how you can wait for a promise to resolve
        await delay(0);
    });
});
