class LeaderboardManager {
    constructor() {
        this.loadLeaderboard();
        this.startAutoRefresh();
    }

    loadLeaderboard() {
        // In a real implementation, you would fetch this data from your Google Sheets
        // For now, we'll simulate with localStorage data
        const leaderboardData = this.generateLeaderboardData();
        this.renderLeaderboard(leaderboardData);
    }

    generateLeaderboardData() {
        // Get all users from localStorage (this is a simplified approach)
        const allUsers = this.getAllUsers();
        
        // Sort by total points descending, then by number of solved challenges
        return allUsers.sort((a, b) => {
            if (b.totalPoints !== a.totalPoints) {
                return b.totalPoints - a.totalPoints;
            }
            return b.solvedChallenges.length - a.solvedChallenges.length;
        });
    }

    getAllUsers() {
        // This is a simplified simulation - in real implementation,
        // you would fetch from Google Sheets API
        const currentUser = JSON.parse(localStorage.getItem('ctfUser'));
        
        // Generate some sample users for demonstration
        const sampleUsers = [
            {
                username: 'Alice',
                totalPoints: 1250,
                solvedChallenges: ['b1', 'b2', 'b3', 'b4', 'b5', 'i1', 'i2', 'a1']
            },
            {
                username: 'Bob',
                totalPoints: 800,
                solvedChallenges: ['b1', 'b2', 'b3', 'b4', 'i1', 'i2']
            },
            {
                username: 'Charlie',
                totalPoints: 1100,
                solvedChallenges: ['b1', 'b2', 'b3', 'b4', 'b5', 'i1', 'i3', 'i4']
            },
            {
                username: 'Diana',
                totalPoints: 1500,
                solvedChallenges: ['b1', 'b2', 'b3', 'b4', 'b5', 'i1', 'i2', 'i3', 'a1', 'a2']
            }
        ];

        // Add current user if they exist and haven't solved any challenges yet
        if (currentUser && !sampleUsers.find(user => user.username === currentUser.username)) {
            sampleUsers.push({
                username: currentUser.username,
                totalPoints: currentUser.totalPoints || 0,
                solvedChallenges: currentUser.solvedChallenges || []
            });
        }

        return sampleUsers;
    }

    renderLeaderboard(leaderboardData) {
        const tbody = document.getElementById('leaderboardBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        leaderboardData.forEach((user, index) => {
            const row = document.createElement('tr');
            const rank = index + 1;
            
            // Highlight current user's row
            const currentUser = JSON.parse(localStorage.getItem('ctfUser'));
            if (currentUser && user.username === currentUser.username) {
                row.style.backgroundColor = '#2a4a2a';
            }

            row.innerHTML = `
                <td>${this.getRankDisplay(rank)}</td>
                <td>${user.username}</td>
                <td>${user.solvedChallenges.length}/15</td>
                <td>${user.totalPoints}</td>
            `;

            tbody.appendChild(row);
        });
    }

    getRankDisplay(rank) {
        switch(rank) {
            case 1: return '🥇 1st';
            case 2: return '🥈 2nd';
            case 3: return '🥉 3rd';
            default: return `${rank}th`;
        }
    }

    startAutoRefresh() {
        // Refresh leaderboard every 30 seconds
        setInterval(() => {
            this.loadLeaderboard();
        }, 30000);
    }

    // Method to fetch data from Google Sheets (for real implementation)
    async fetchFromGoogleSheets() {
        // You would implement this to fetch from your Google Sheets API
        // const response = await fetch('YOUR_GOOGLE_SHEETS_API_URL');
        // const data = await response.json();
        // return data;
    }
}

// Initialize leaderboard when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('leaderboardTable')) {
        new LeaderboardManager();
    }
});

// Logout functionality
document.getElementById('logoutBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('ctfUser');
    window.location.href = 'login.html';
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
