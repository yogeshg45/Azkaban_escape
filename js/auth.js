// Authentication and user management
class Auth {
    constructor() {
        this.currentUser = this.getCurrentUser();
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('ctfUser')) || null;
    }

    setCurrentUser(user) {
        localStorage.setItem('ctfUser', JSON.stringify(user));
        this.currentUser = user;
    }

    logout() {
        localStorage.removeItem('ctfUser');
        this.currentUser = null;
        window.location.href = 'login.html';
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }
}

const auth = new Auth();

// Login form handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (username && email) {
                const user = {
                    username: username,
                    email: email,
                    joinedAt: new Date().toISOString(),
                    solvedChallenges: [],
                    totalPoints: 0
                };
                
                auth.setCurrentUser(user);
                window.location.href = 'challenges.html';
            }
        });
    }

    // Check if user is logged in on protected pages
    const currentPage = window.location.pathname.split('/').pop();
    if (['challenges.html', 'leaderboard.html'].includes(currentPage)) {
        if (!auth.isLoggedIn()) {
            window.location.href = 'login.html';
        } else {
            // Display welcome message
            const welcomeElement = document.getElementById('welcomeUser');
            if (welcomeElement) {
                welcomeElement.textContent = `Welcome, ${auth.currentUser.username}!`;
            }
        }
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            auth.logout();
        });
    }
});

// Block inspect actions (right click & devtool shortcuts)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', function(e) {
    // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
    ) {
        e.preventDefault();
        return false;
    }
});

// Optional: show a banner if devtools window is detected (does not block anything, just warns)
let devtoolsOpen = false;
setInterval(function() {
    if (
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160
    ) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            let warning = document.getElementById('devtools-warning');
            if (!warning) {
                warning = document.createElement('div');
                warning.id = 'devtools-warning';
                warning.style.cssText = `
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 60px;
                    background: #ea1515ed; color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    z-index: 9999; font-size: 18px; font-family: Arial, sans-serif;
                    border-bottom: 2px solid #aa0000;
                `;
                warning.innerHTML = `⚠️ Developer Tools Detected - Inspection is blocked (site remains usable)`;
                document.body.appendChild(warning);
            } else {
                warning.style.display = 'flex';
            }
        }
    } else {
        if (devtoolsOpen) {
            devtoolsOpen = false;
            let warning = document.getElementById('devtools-warning');
            if (warning) warning.style.display = 'none';
        }
    }
}, 500);
