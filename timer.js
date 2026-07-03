const fs = require('fs');
const startTime = Date.now();
const duration = 30 * 60 * 1000; // 30 minutes

console.log("Timer started for 30 minutes.");
fs.writeFileSync('timer_status.txt', 'Timer started: 30 minutes remaining.');

const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, duration - elapsed);
    
    if (remaining === 0) {
        fs.writeFileSync('timer_status.txt', 'DONE');
        console.log("30 minutes reached. Timer complete.");
        clearInterval(interval);
        process.exit(0);
    } else {
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        fs.writeFileSync('timer_status.txt', `RUNNING: ${mins}m ${secs}s remaining.`);
    }
}, 10000); // Update every 10 seconds
