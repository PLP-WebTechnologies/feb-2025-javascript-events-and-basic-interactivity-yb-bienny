// Button click event
document.getElementById('magicBtn').addEventListener('click', () => {
    alert('Button clicked!');
    const btn = document.getElementById('magicBtn');
    btn.textContent = 'Clicked!';
    btn.style.backgroundColor = 'green';
});

// Hover effect
const hoverBox = document.querySelector('.hover-box');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightblue';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '';
});

// Keypress detection
document.getElementById('keyInput').addEventListener('keyup', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Double-click action
document.getElementById('magicBtn').addEventListener('dblclick', () => {
    alert('Double-click detected!');
});

// Tabs/Accordion
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        tab.classList.add('active');
        tabContents[index].style.display = 'block';
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', (event) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@')) {
        alert('Invalid email format!');
        event.preventDefault();
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        event.preventDefault();
    }
});

// Real-time feedback
document.getElementById('password').addEventListener('input', (event) => {
    const feedback = document.getElementById('passwordFeedback');
    if (event.target.value.length < 8) {
        feedback.textContent = 'Password is too short!';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Password looks good!';
        feedback.style.color = 'green';
    }
});