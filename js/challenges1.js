// Challenge data and management with multimedia support
const challengeData = {
    beginner: [
        {
            id: 'b1',
            title: 'The name of the park',
            points: 50,
            description: 'Find the hidden flag by identifying park in this geolocation challenge.',
            flag: 'azkaban{vogel_state_park}',
            category: 'GEOINT',
            resources: {
                image: 'src/images/b1_geolocation.jpg',
                text: 'src/text/b1_description.txt'
            }
        },
        {
            id: 'b2',
            title: 'Base-58 Decode Challenge',
            points: 75,
            description: 'Decode this Base-58 encoded hash to reveal the hidden flag.',
            flag: 'azkaban{ef87f929db36c702c984590b3d95fba9}',
            category: 'Cryptography',
            resources: {
                text: 'src/text/b2_base58_hash.txt'
            }
        },
        {
            id: 'b3',
            title: 'SSTV Signal Decoding',
            points: 100,
            description: 'Decode this SSTV signal using Robot36 mode. The signal contains a hidden image with the flag.',
            flag: 'azkaban{778404c7cbfbc53735ff4b85e9a3f347}',
            category: 'Signal Processing',
            resources: {
                audio: 'src/audio/b3_sstv_signal.wav',
                text: 'src/text/b3_sstv_instructions.txt'
            }
        },
        {
            id: 'b4',
            title: 'What3Words Location Challenge',
            points: 100,
            description: 'In the midst lies the place where Hedwig doth keep her companions. Pray, obtain the society\'s numerals of communication.',
            flag: 'azkaban{07973819389}',
            category: 'GEOINT',
            resources: {
                text: 'src/text/b4_what3words.txt',
            }
        },
        {
            id: 'b5',
            title: 'TLSH Hash Analysis',
            points: 150,
            description: 'Analyze the given TLSH hashes and find the matching spell variation from the provided data.',
            flag: 'azkaban{tlsh_similarity_analysis}',
            category: 'Forensics',
            resources: {
                text: 'src/text/b5_tlsh_hashes.txt'
            }
        }
    ],
    intermediate: [
        {
            id: 'i1',
            title: 'Tor Network Investigation',
            points: 200,
            description: 'The password to the vault corresponds to the fingerprint of one of the Tor relays within its effective family. Investigate the network to find the correct relay.',
            flag: 'azkaban{9973E1E9730A58FDBA9E112D2B3342D2C0D921B5}',
            category: 'Network Analysis',
            resources: {
                text: 'src/text/i1_tor_investigation.txt',
                image: 'src/images/i1_tor_network.png'
            }
        },
        {
            id: 'i2',
            title: 'JavaScript Deobfuscation',
            points: 250,
            description: 'Deobfuscate the given JavaScript code and find the hidden base64 encoded flag in the redirect function.',
            flag: 'azkaban{2a52b483f9f65df16f7fa1a25e77de03}',
            category: 'Reverse Engineering',
            resources: {
                text: 'src/text/i2_obfuscated_js.txt'
            }
        },
        {
            id: 'i3',
            title: 'Akira Ransomware Analysis',
            points: 300,
            description: 'Analyze the Akira ransomware sample and extract the hidden information from the ransom note.',
            flag: 'azkaban{akira_ransomware_analysis}',
            category: 'Malware Analysis',
            resources: {
                text: 'src/text/i3_ransomware_hash.txt',
                image: 'src/images/i3_ransomware_note.png'
            }
        },
        {
            id: 'i4',
            title: 'French Maritime Vessel MMSI',
            points: 200,
            description: 'Identify the French boat\'s MMSI (Maritime Mobile Service Identity) from the provided maritime intelligence image.',
            flag: 'azkaban{228157500}',
            category: 'GEOINT',
            resources: {
                image: 'src/images/i4_french_boat.jpg'
            }
        },
        {
            id: 'i5',
            title: 'Western Bar Location Challenge',
            points: 250,
            description: 'Name the bar that is to the west of the location where this photo was taken. Use precise geolocation techniques.',
            flag: 'azkaban{el_nautico_terrace}',
            category: 'GEOINT',
            resources: {
                image: 'src/images/i5_bar_location.jpg'
            }
        }
    ],
    advanced: [
        {
            id: 'a1',
            title: 'AnonPaste Serverless Vault Investigation',
            points: 400,
            description: 'Reconstruct the pathway through AnonPaste in serverless mode using the provided fragment and document evidence. The vault contains critical intelligence.',
            flag: 'azkaban{anonpaste_serverless_vault}',
            category: 'Digital Forensics',
            resources: {
                text: 'src/text/a1_anonpaste_data.txt'
            }
        },
        {
            id: 'a2',
            title: 'Air France Building Maritime Connection',
            points: 500,
            description: 'This Air France business no longer resides in this building. Find the MMSI of the new business owner\'s yacht that currently operates from this location.',
            flag: 'azkaban{235112247}',
            category: 'GEOINT',
            resources: {
                image: 'src/images/a2_air_france_building.webp'
            }
        },
        {
            id: 'a3',
            title: 'Multi-Location Wizarding Intelligence',
            points: 450,
            description: 'Solve the comprehensive multi-location challenge involving wizarding locations: Three Owls Bird Sanctuary, Ashworth Waterfall, Naden Valley, Stoco Italian Bar, and Tea Garden.',
            flag: 'azkaban{wizarding_locations_complete}',
            category: 'GEOINT',
            resources: {
                text: 'src/text/a3_wizarding_locations.txt'
            }
        },
        {
            id: 'a4',
            title: 'Advanced TLSH Spell Transformation',
            points: 500,
            description: 'Match the obfuscated spell variations against the original TLSH hash using advanced fuzzy hashing techniques to identify the correct transformation pattern.',
            flag: 'azkaban{spell_transformation_master}',
            category: 'Cryptography',
            resources: {
                text: 'src/text/a4_spell_variations.txt'
            }
        },
        {
            id: 'a5',
            title: 'Comprehensive Maritime Intelligence Fusion',
            points: 400,
            description: 'Combine all maritime intelligence gathered from previous challenges to solve the comprehensive vessel tracking and identification scenario.',
            flag: 'azkaban{maritime_intelligence_complete}',
            category: 'GEOINT',
            resources: {
                text: 'src/text/a5_maritime_intelligence.txt',
                image: 'src/images/a5_vessel_tracking.jpg'
            }
        }
    ]
};

class ChallengeManager {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('ctfUser'));
        this.solvedChallenges = this.getSolvedChallenges();
        this.initializeChallenges();
        this.setupModal();
        this.setupImageModal();
    }

    getSolvedChallenges() {
        return this.currentUser ? this.currentUser.solvedChallenges || [] : [];
    }

    initializeChallenges() {
        this.renderChallenges('beginner', challengeData.beginner, 'beginnerChallenges');
        this.renderChallenges('intermediate', challengeData.intermediate, 'intermediateChallenges');
        this.renderChallenges('advanced', challengeData.advanced, 'advancedChallenges');
    }

    renderChallenges(level, challenges, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        challenges.forEach((challenge, index) => {
            const isSolved = this.solvedChallenges.includes(challenge.id);
            const challengeCard = document.createElement('div');
            challengeCard.className = `challenge-card ${isSolved ? 'solved' : ''}`;
            challengeCard.style.animationDelay = `${index * 0.1}s`;
            challengeCard.innerHTML = `
                <h3>${challenge.title} ${isSolved ? '✓' : ''}</h3>
                <div class="challenge-points">${challenge.points} points</div>
                <div class="challenge-description">${challenge.description}</div>
                <div class="challenge-category">Category: ${challenge.category}</div>
                ${this.getResourceIndicators(challenge.resources)}
            `;
            
            challengeCard.addEventListener('click', () => this.openChallenge(challenge));
            container.appendChild(challengeCard);
        });
    }

    getResourceIndicators(resources) {
        if (!resources) return '';
        
        let indicators = '<div class="resource-indicators">';
        if (resources.text) indicators += '<span class="resource-icon">📄</span>';
        if (resources.image) indicators += '<span class="resource-icon">🖼️</span>';
        if (resources.audio) indicators += '<span class="resource-icon">🔊</span>';
        indicators += '</div>';
        
        return indicators;
    }

    async openChallenge(challenge) {
        const modal = document.getElementById('challengeModal');
        const title = document.getElementById('modalTitle');
        const description = document.getElementById('modalDescription');
        
        title.textContent = challenge.title;
        
        // Show loading state
        description.innerHTML = `
            <p><strong>Points:</strong> ${challenge.points}</p>
            <p><strong>Category:</strong> ${challenge.category}</p>
            <p><strong>Description:</strong> ${challenge.description}</p>
            <div class="challenge-resources">
                <div class="resource-loading">🔄 Loading challenge resources...</div>
            </div>
        `;
        
        modal.style.display = 'block';
        
        // Load challenge resources
        let resourcesHTML = `
            <p><strong>Points:</strong> ${challenge.points}</p>
            <p><strong>Category:</strong> ${challenge.category}</p>
            <p><strong>Description:</strong> ${challenge.description}</p>
            <div class="challenge-resources" id="resourcesContainer">
        `;

        if (challenge.resources) {
            // Load text content first
            if (challenge.resources.text) {
                resourcesHTML += `
                    <div class="resource-section">
                        <h4>📄 Challenge Data</h4>
                        <div id="textContent-${challenge.id}" class="resource-loading">Loading challenge data...</div>
                    </div>
                `;
            }

            // Load image content
            if (challenge.resources.image) {
                resourcesHTML += `
                    <div class="resource-section">
                        <h4>🖼️ Challenge Image</h4>
                        <img src="${challenge.resources.image}" 
                             alt="Challenge Image" 
                             class="challenge-image" 
                             onclick="challengeManager.openImageModal('${challenge.resources.image}')"
                             onload="this.style.opacity='1'" 
                    </div>
                `;
            }

            // Load audio content
            if (challenge.resources.audio) {
                resourcesHTML += `
                    <div class="resource-section">
                        <h4>🔊 Challenge Audio</h4>
                        <audio controls class="challenge-audio" preload="metadata">
                            <source src="${challenge.resources.audio}" type="audio/wav">
                            <source src="${challenge.resources.audio}" type="audio/mpeg">
                            <source src="${challenge.resources.audio}" type="audio/ogg">
                            <div class="resource-error">❌ Your browser does not support the audio element.</div>
                        </audio>
                    </div>
                `;
            }
        }

        resourcesHTML += '</div>';
        description.innerHTML = resourcesHTML;
        
        // Load text content asynchronously
        if (challenge.resources && challenge.resources.text) {
            try {
                const textContent = await this.loadTextFile(challenge.resources.text);
                const textContainer = document.getElementById(`textContent-${challenge.id}`);
                if (textContainer) {
                    textContainer.innerHTML = `<pre class="challenge-text">${this.escapeHtml(textContent)}</pre>`;
                }
            } catch (error) {
                const textContainer = document.getElementById(`textContent-${challenge.id}`);
                if (textContainer) {
                    textContainer.innerHTML = '<div class="resource-error">❌ Error loading challenge data</div>';
                }
            }
        }
        
        // Setup flag submission
        const submitBtn = document.getElementById('submitFlag');
        const flagInput = document.getElementById('flagInput');
        
        submitBtn.onclick = () => this.submitFlag(challenge.id, challenge.flag, challenge.points);
        
        flagInput.value = '';
        flagInput.placeholder = 'Enter flag: azkaban{...}';
        document.getElementById('submissionStatus').innerHTML = '';
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    async loadTextFile(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            return text || 'No content available';
        } catch (error) {
            console.error('Error fetching text file:', error);
            return 'Error loading challenge data. Please contact administrators.';
        }
    }

    setupModal() {
        const modal = document.getElementById('challengeModal');
        const closeBtn = modal.querySelector('.close');
        
        closeBtn.onclick = () => modal.style.display = 'none';
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        // Handle Enter key for flag submission
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && modal.style.display === 'block') {
                const flagInput = document.getElementById('flagInput');
                if (document.activeElement === flagInput && flagInput.value.trim()) {
                    document.getElementById('submitFlag').click();
                }
            }
        });
    }

    setupImageModal() {
        // Remove existing modal if any
        const existingModal = document.getElementById('imageModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create image modal
        const imageModal = document.createElement('div');
        imageModal.id = 'imageModal';
        imageModal.className = 'image-modal';
        imageModal.innerHTML = `
            <span class="close-modal">&times;</span>
            <img id="modalImage" src="" alt="Full Size Image">
        `;
        document.body.appendChild(imageModal);
        
        // Setup modal events
        imageModal.onclick = () => imageModal.style.display = 'none';
        imageModal.querySelector('.close-modal').onclick = () => imageModal.style.display = 'none';

        // Handle Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.style.display === 'block') {
                imageModal.style.display = 'none';
            }
        });
    }

    openImageModal(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        if (modal && modalImg) {
            modal.style.display = 'block';
            modalImg.src = imageSrc;
        }
    }

    submitFlag(challengeId, correctFlag, points) {
        const flagInput = document.getElementById('flagInput');
        const submissionStatus = document.getElementById('submissionStatus');
        const userFlag = flagInput.value.trim();
        
        if (!userFlag) {
            submissionStatus.innerHTML = '<div style="color: #ffff00;">⚠️ Please enter a flag!</div>';
            return;
        }
        
        if (userFlag === correctFlag) {
            if (!this.solvedChallenges.includes(challengeId)) {
                this.solvedChallenges.push(challengeId);
                this.currentUser.solvedChallenges = this.solvedChallenges;
                this.currentUser.totalPoints += points;
                localStorage.setItem('ctfUser', JSON.stringify(this.currentUser));
                
                // Submit to Google Form
                this.submitToGoogleForm(challengeId, points);
                
                submissionStatus.innerHTML = '<div style="color: #00ff41;">🎉 Excellent work, wizard! Challenge conquered! ⚡</div>';
                this.initializeChallenges(); // Re-render to show solved status
                
                // Update user stats in header if available
                this.updateUserStats();
            } else {
                submissionStatus.innerHTML = '<div style="color: #ffff00;">⚡ This challenge has already been conquered by you!</div>';
            }
        } else {
            submissionStatus.innerHTML = '<div style="color: #ff4444;">❌ Incorrect flag. The magic is not quite right. Try again, young wizard!</div>';
        }
    }

    updateUserStats() {
        const pointsElement = document.getElementById('userPoints');
        if (pointsElement && this.currentUser) {
            pointsElement.textContent = this.currentUser.totalPoints || 0;
        }
    }

    submitToGoogleForm(challengeId, points) {
        // Google Form submission URL
        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeB4nzZZ0Ur1QsvTcQCpiXfwMzgpy7FXzYy7xy-BRwf8_pWfw/formResponse';
        
        const formData = new FormData();
        formData.append('entry.1438968906', this.currentUser.username);
        formData.append('entry.626412859', this.currentUser.email);
        formData.append('entry.1523850852', challengeId);
        formData.append('entry.1715597694', points);
        formData.append('entry.1034678139', new Date().toISOString());
        
        // Submit using fetch
        fetch(formUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).catch(() => {
            // Expected to fail due to CORS, but form submission still works
        });
    }
}

// Global challenge manager instance
let challengeManager;

// Initialize challenge manager when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('beginnerChallenges')) {
        challengeManager = new ChallengeManager();
    }
});

// Enhanced security measures
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showSecurityAlert();
    return false;
});

document.addEventListener('keydown', function(e) {
    // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C, Ctrl+A, Ctrl+S
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 65) || // Ctrl+A
        (e.ctrlKey && e.keyCode === 83)    // Ctrl+S
    ) {
        e.preventDefault();
        showSecurityAlert();
        return false;
    }
});

// Security alert function
function showSecurityAlert() {
    const alerts = [
        "🔒 The magic of Azkaban protects these challenges!",
        "⚡ Nice try, wizard! But the mysteries remain sealed!",
        "🏰 Azkaban's defenses are stronger than your curiosity!",
        "🧙‍♂️ Use your wit, not your tools, young wizard!"
    ];
    
    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    
    // Create temporary alert
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(0, 255, 65, 0.9); color: #000; padding: 20px;
        border-radius: 10px; z-index: 10001; font-size: 16px; font-weight: bold;
        animation: fadeInOut 2s ease-in-out;
    `;
    alertDiv.textContent = randomAlert;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 2000);
}

// Advanced devtools detection with multiple methods
let devtoolsOpen = false;
let devtoolsCheckInterval;

// Start devtools detection
devtoolsCheckInterval = setInterval(detectDevTools, 500);

// Alternative detection method using console
let consoleCheck = () => {};
consoleCheck.toString = () => {
    if (!devtoolsOpen) {
        devtoolsOpen = true;
        showDevToolsWarning();
    }
    return '';
};

// Periodically trigger console check
setInterval(() => {
    console.clear();
    console.log(consoleCheck);
}, 1000);

// Console styling and warnings
console.log('%c🏰 AZKABAN CTF ARENA', 'color: #00ff41; font-size: 28px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,255,65,0.3);');
console.log('%c⚡ Welcome, brave wizard! The challenges await your magical prowess! 🧙‍♂️', 'color: #ffff00; font-size: 16px; font-style: italic;');
console.log('%c🔒 Challenge flags are magically protected. Use your wit and wisdom to solve them!', 'color: #ff4444; font-size: 14px;');

// Performance monitoring
let performanceWarningShown = false;
setInterval(() => {
    if (performance.now() > 30000 && !performanceWarningShown) { // After 30 seconds
        console.log('%c📊 Performance tip: Close unnecessary browser tabs for optimal CTF experience!', 'color: #00ffff; font-size: 12px;');
        performanceWarningShown = true;
    }
}, 5000);

// Additional protection against tampering
Object.freeze(challengeData);
Object.freeze(ChallengeManager.prototype);

// Prevent page modifications
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
                    if (!node.src.includes('localhost') && !node.src.includes('127.0.0.1')) {
                        node.remove();
                        console.warn('🔒 Unauthorized script injection blocked by Azkaban security!');
                    }
                }
            });
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Cleanup function
window.addEventListener('beforeunload', () => {
    if (devtoolsCheckInterval) {
        clearInterval(devtoolsCheckInterval);
    }
    if (observer) {
        observer.disconnect();
    }
});

// Add CSS animation for fadeInOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    .resource-indicators {
        display: flex;
        gap: 5px;
        margin-top: 10px;
        justify-content: flex-end;
    }
    
    .resource-icon {
        font-size: 16px;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .challenge-card:hover .resource-icon {
        opacity: 1;
    }
`;
document.head.appendChild(style);
