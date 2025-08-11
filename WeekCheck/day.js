// name button
document.getElementById('submit-name').addEventListener('click', () => {
    const name = document.getElementById('username').value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    // show welcome message
    const welcomeEl = document.getElementById('welcome-message');
    welcomeEl.textContent = `Welcome ${name} to Day of Week!`;
    welcomeEl.classList.add('visible');

    // show day of week selection
    document.getElementById('day-section').classList.remove('hidden');

    // hide name selection
    document.getElementById('name-section').classList.add('hidden');
});

// day of week submit button
document.getElementById('submit-day').addEventListener('click', () => {
    const day = document.getElementById('day').value;

    if (day === "") {
        alert("Please select a day!");
        return;
    }

    let message;
    if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
        message = "Have a nice weekend!";
    } else {
        message = "Have a nice week!";
    }

    // show final result
    const dayMsgEl = document.getElementById('day-message');
    dayMsgEl.textContent = message;
    dayMsgEl.classList.add('visible');

    document.getElementById('result-section').classList.remove('hidden');
});