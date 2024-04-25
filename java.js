function updateTime() {
    const now = new Date();
    const options = {timeZone: 'Australia/Sydney', hour12: false};
    const timeString = now.toLocaleTimeString('en-AU', options);
    document.getElementById('clock').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);
