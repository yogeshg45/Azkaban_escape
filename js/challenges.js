// Complete Cyber Security Learning Platform - challenges.js

// Challenge data structure
const cyberChallenges = {
    beginner: [
        {
            id: 'c1',
            title: 'Caesar Cipher Basics',
            points: 10,
            description: 'Decode this Caesar cipher (shift by 3): "WKLV LV D VHFUHW"',
            flag: 'cyber{THIS IS A SECRET}',
            category: 'Cryptography',
            solution: 'Each letter is shifted back by 3 positions in the alphabet. W-3=T, K-3=H, L-3=I, V-3=S, etc.',
            resources: {
                text: 'Caesar cipher shifts each letter by a fixed number of positions in the alphabet.'
            }
        },
        {
            id: 'c2',
            title: 'Base64 Decode',
            points: 10,
            description: 'Decode this Base64 string: Y3liZXJ7YmFzZTY0X2lzX2Vhc3l9',
            flag: 'cyber{base64_is_easy}',
            category: 'Encoding',
            solution: 'Use any Base64 decoder tool or command line: echo "Y3liZXJ7YmFzZTY0X2lzX2Vhc3l9" | base64 -d',
            resources: {
                text: 'Base64 encoding converts binary data into ASCII characters using 64 printable characters.'
            }
        },
        {
            id: 'c3',
            title: 'ROT13 Challenge',
            points: 10,
            description: 'Apply ROT13 to decode: "plore{ebg13_vf_rnfl}"',
            flag: 'cyber{rot13_is_easy}',
            category: 'Cryptography',
            solution: 'ROT13 replaces each letter with the letter 13 positions after it in the alphabet. Apply ROT13 again to decode.',
            resources: {
                text: 'ROT13 is a simple Caesar cipher with a shift of 13. It is its own inverse.'
            }
        },
        {
            id: 'c4',
            title: 'Binary to Text',
            points: 15,
            description: 'Convert this binary to text: 01100011 01111001 01100010 01100101 01110010',
            flag: 'cyber{cyber}',
            category: 'Encoding',
            solution: 'Convert each 8-bit binary to decimal, then to ASCII: 01100011=99=c, 01111001=121=y, etc.',
            resources: {
                text: 'Binary uses only 0s and 1s. Each group of 8 bits represents one ASCII character.'
            }
        },
        {
            id: 'c5',
            title: 'Hexadecimal Decode',
            points: 15,
            description: 'Decode this hex string: 63796265727b6865785f69735f66756e7d',
            flag: 'cyber{hex_is_fun}',
            category: 'Encoding',
            solution: 'Convert each pair of hex digits to ASCII characters. 63=99=c, 79=121=y, etc.',
            resources: {
                text: 'Hexadecimal uses base-16 (0-9, A-F). Each pair represents one byte/character.'
            }
        },
        {
            id: 'c6',
            title: 'URL Decode Challenge',
            points: 15,
            description: 'Decode this URL encoded string: cyber%7Burl%5Fencoding%5Fbasics%7D',
            flag: 'cyber{url_encoding_basics}',
            category: 'Web Security',
            solution: '%7B = {, %5F = _, %7D = }. URL encoding replaces special characters with % followed by hex values.',
            resources: {
                text: 'URL encoding converts characters into a format that can be transmitted over the Internet.'
            }
        },
        {
            id: 'c7',
            title: 'Morse Code Mystery',
            points: 20,
            description: 'Decode this morse code: -.-. -.-- -... . .-. / -- --- .-. ... .',
            flag: 'cyber{CYBER MORSE}',
            category: 'Cryptography',
            solution: 'Use morse code table: -.-.=C, -.--=Y, -...=B, .=E, .-.=R, space separates words.',
            resources: {
                text: 'Morse code uses dots and dashes to represent letters and numbers.'
            }
        },
        {
            id: 'c8',
            title: 'ASCII Values',
            points: 20,
            description: 'Convert these ASCII values to text: 99 121 98 101 114 123 97 115 99 105 105 125',
            flag: 'cyber{ascii}',
            category: 'Encoding',
            solution: 'Each number represents the ASCII value of a character: 99=c, 121=y, 98=b, etc.',
            resources: {
                text: 'ASCII assigns numeric values to characters. A=65, a=97, space=32, etc.'
            }
        },
        {
            id: 'c9',
            title: 'Reverse String',
            points: 15,
            description: 'Reverse this string to find the flag: }desrever_si_siht{rebyc',
            flag: 'cyber{this_is_reversed}',
            category: 'Basic Programming',
            solution: 'Simply reverse the order of all characters in the string.',
            resources: {
                text: 'String reversal is a common programming technique used in various algorithms.'
            }
        }
    ],
    intermediate: [
        {
            id: 'c10',
            title: 'SQL Injection Basics',
            points: 25,
            description: 'What SQL payload can bypass a login form? Complete: admin\' OR \'1\'=\'?',
            flag: 'cyber{1}',
            category: 'Web Security',
            solution: "The payload ' OR '1'='1 makes the WHERE clause always true, bypassing authentication.",
            resources: {
                text: 'SQL injection occurs when user input is not properly sanitized in SQL queries.'
            }
        },
        {
            id: 'c11',
            title: 'XSS Detection',
            points: 25,
            description: 'Identify the XSS vector in: &lt;script&gt;alert("XSS")&lt;/script&gt;',
            flag: 'cyber{script_tag}',
            category: 'Web Security',
            solution: 'This is a basic stored/reflected XSS using script tags to execute JavaScript.',
            resources: {
                text: 'Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages.'
            }
        },
        {
            id: 'c12',
            title: 'MD5 Hash Cracking',
            points: 30,
            description: 'Crack this MD5 hash: 5d41402abc4b2a76b9719d911017c592',
            flag: 'cyber{hello}',
            category: 'Cryptography',
            solution: 'This is the MD5 hash of "hello". Use online MD5 crackers or rainbow tables.',
            resources: {
                text: 'MD5 is a widely used hash function that produces a 128-bit hash value.'
            }
        },
        {
            id: 'c13',
            title: 'Directory Traversal',
            points: 30,
            description: 'What payload reads /etc/passwd? Complete the path: ../../?',
            flag: 'cyber{../etc/passwd}',
            category: 'Web Security',
            solution: 'Use ../ to go up directories until reaching root, then navigate to /etc/passwd.',
            resources: {
                text: 'Directory traversal attacks use ../ to access files outside the web root.'
            }
        },
        {
            id: 'c14',
            title: 'Network Ports',
            points: 20,
            description: 'What port does HTTP typically use by default?',
            flag: 'cyber{80}',
            category: 'Network Security',
            solution: 'HTTP uses port 80 by default, HTTPS uses port 443.',
            resources: {
                text: 'Well-known ports are assigned to common network services (0-1023).'
            }
        },
        {
            id: 'c15',
            title: 'File Upload Bypass',
            points: 25,
            description: 'How to bypass .php extension filter? shell.php + ?',
            flag: 'cyber{.jpg}',
            category: 'Web Security',
            solution: 'Add allowed extension after forbidden one: shell.php.jpg or use .phtml, .php5.',
            resources: {
                text: 'File upload vulnerabilities can be exploited by bypassing extension filters.'
            }
        },
        {
            id: 'c16',
            title: 'Command Injection',
            points: 30,
            description: 'Inject a command after: ping google.com',
            flag: 'cyber{; whoami}',
            category: 'Web Security',
            solution: 'Use semicolon to chain commands: ; whoami or && cat /etc/passwd.',
            resources: {
                text: 'Command injection occurs when user input is passed to system shell commands.'
            }
        },
        {
            id: 'c17',
            title: 'Steganography Text',
            points: 35,
            description: 'Find the hidden message in: "The Secret Information Stays Hidden"',
            flag: 'cyber{TSISH}',
            category: 'Steganography',
            solution: 'Take first letter of each word: T-S-I-S-H = The Secret Information Stays Hidden.',
            resources: {
                text: 'Steganography hides information within other non-secret text or data.'
            }
        }
    ],
    advanced: [
        {
            id: 'c18',
            title: 'Buffer Overflow Basics',
            points: 40,
            description: 'What vulnerability occurs when input "AAAAAAAAAAAAAAAAAAAA" exceeds 8-byte buffer?',
            flag: 'cyber{buffer_overflow}',
            category: 'Binary Exploitation',
            solution: 'Input exceeds buffer size, potentially overwriting adjacent memory locations.',
            resources: {
                text: 'Buffer overflows occur when programs write more data to a buffer than it can hold.'
            }
        },
        {
            id: 'c19',
            title: 'Linux Privilege Check',
            points: 45,
            description: 'What Linux command checks current user sudo permissions?',
            flag: 'cyber{sudo -l}',
            category: 'System Security',
            solution: 'sudo -l lists commands the current user can run with sudo privileges.',
            resources: {
                text: 'Privilege escalation involves gaining higher access levels than originally granted.'
            }
        },
        {
            id: 'c20',
            title: 'Hash Function Weakness',
            points: 40,
            description: 'Why is MD5 considered cryptographically broken?',
            flag: 'cyber{collisions}',
            category: 'Cryptography',
            solution: 'MD5 is vulnerable to collision attacks where different inputs produce same hash.',
            resources: {
                text: 'Cryptographic hash functions should be collision-resistant and one-way.'
            }
        },
        {
            id: 'c21',
            title: 'Social Engineering Defense',
            points: 35,
            description: 'What should NEVER be shared over phone calls?',
            flag: 'cyber{passwords}',
            category: 'Social Engineering',
            solution: 'Never share passwords, PINs, SSNs, or other sensitive credentials over phone.',
            resources: {
                text: 'Social engineering manipulates people to divulge confidential information.'
            }
        },
        {
            id: 'c22',
            title: 'PowerShell Analysis',
            points: 50,
            description: 'Decode PowerShell: powershell -enc cwBlAHQALQBsAG8AYwBhAHQAaQBvAG4A',
            flag: 'cyber{set-location}',
            category: 'Malware Analysis',
            solution: 'Base64 decode reveals "set-location" command (PowerShell equivalent of cd).',
            resources: {
                text: 'Malware often uses encoded PowerShell commands to evade detection.'
            }
        },
        {
            id: 'c23',
            title: 'File Signature Analysis',
            points: 40,
            description: 'What file type has magic bytes FF D8 FF E0?',
            flag: 'cyber{JPEG}',
            category: 'Digital Forensics',
            solution: 'FF D8 FF E0 is the magic number/file signature for JPEG image files.',
            resources: {
                text: 'File signatures (magic numbers) identify file types regardless of extension.'
            }
        },
        {
            id: 'c24',
            title: 'Network Packet Capture',
            points: 45,
            description: 'What Linux tool captures network packets from command line?',
            flag: 'cyber{tcpdump}',
            category: 'Network Security',
            solution: 'tcpdump is a command-line packet analyzer, Wireshark is the GUI version.',
            resources: {
                text: 'Packet capture tools help analyze network traffic for security purposes.'
            }
        },
        {
            id: 'c25',
            title: 'Assembly Language',
            points: 50,
            description: 'Calculate result of: MOV EAX, 7; ADD EAX, 5; SUB EAX, 3',
            flag: 'cyber{9}',
            category: 'Reverse Engineering',
            solution: 'MOV stores 7 in EAX, ADD adds 5 (7+5=12), SUB subtracts 3 (12-3=9).',
            resources: {
                text: 'Assembly language provides low-level control over processor instructions.'
            }
        },
        {
            id: 'c26',
            title: 'Persistence Technique',
            points: 55,
            description: 'What Linux command edits scheduled tasks for persistence?',
            flag: 'cyber{crontab -e}',
            category: 'Advanced Techniques',
            solution: 'crontab -e allows editing cron jobs for persistence, scheduling malicious scripts.',
            resources: {
                text: 'Attackers use persistence techniques to maintain access to compromised systems.'
            }
        }
    ]
};

// Challenge Management Class
class CyberLearningPlatform {
    constructor() {
        this.currentUser = this.loadUser();
        this.solvedChallenges = this.currentUser.solvedChallenges || [];
        this.initializePage();
    }

    loadUser() {
        let user = JSON.parse(localStorage.getItem('cyberUser'));
        if (!user) {
            user = {
                username: 'CyberLearner',
                email: 'learner@cyber.academy',
                totalPoints: 0,
                solvedChallenges: [],
                joinDate: new Date().toISOString()
            };
            localStorage.setItem('cyberUser', JSON.stringify(user));
        }
        return user;
    }

    initializePage() {
        this.createHTML();
        this.initializeChallenges();
        this.setupModal();
        this.updateUserStats();
        console.log('🔐 Cyber Security Learning Platform Initialized');
        console.log(`👤 Welcome ${this.currentUser.username}!`);
    }

    createHTML() {
        // Create the main page structure if it doesn't exist
        if (!document.getElementById('beginnerChallenges')) {
            document.body.innerHTML = `
                <div class="cyber-platform">
                    <header class="platform-header">
                        <h1>🔐 Cyber Security Learning Platform</h1>
                        <div class="user-stats">
                            <span>👤 ${this.currentUser.username}</span>
                            <span>🏆 Points: <span id="userPoints">${this.currentUser.totalPoints}</span></span>
                        </div>
                    </header>
                    
                    <main class="challenge-container">
                        <section class="challenge-section">
                            <h2>🟢 Beginner Challenges (1-9)</h2>
                            <div id="beginnerChallenges" class="challenges-grid"></div>
                        </section>
                        
                        <section class="challenge-section">
                            <h2>🟡 Intermediate Challenges (10-17)</h2>
                            <div id="intermediateChallenges" class="challenges-grid"></div>
                        </section>
                        
                        <section class="challenge-section">
                            <h2>🔴 Advanced Challenges (18-26)</h2>
                            <div id="advancedChallenges" class="challenges-grid"></div>
                        </section>
                    </main>

                    <!-- Challenge Modal -->
                    <div id="challengeModal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h2 id="modalTitle">Challenge Title</h2>
                            <div id="modalDescription">Challenge Description</div>
                            <div class="flag-submission">
                                <input type="text" id="flagInput" placeholder="Enter your answer: cyber{...}" />
                                <button id="submitFlag">Submit Answer</button>
                            </div>
                            <div id="submissionStatus"></div>
                        </div>
                    </div>
                </div>
            `;
            
            this.addStyles();
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            
            body {
                font-family: 'Courier New', monospace;
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f23 100%);
                color: #00ff41;
                min-height: 100vh;
                line-height: 1.6;
            }
            
            .cyber-platform {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            
            .platform-header {
                text-align: center;
                margin-bottom: 40px;
                padding: 20px;
                background: rgba(0, 255, 65, 0.1);
                border: 1px solid #00ff41;
                border-radius: 10px;
            }
            
            .platform-header h1 {
                font-size: 2.5em;
                text-shadow: 0 0 10px #00ff41;
                margin-bottom: 10px;
            }
            
            .user-stats {
                display: flex;
                justify-content: center;
                gap: 30px;
                font-size: 1.1em;
            }
            
            .challenge-section {
                margin-bottom: 40px;
            }
            
            .challenge-section h2 {
                font-size: 1.8em;
                margin-bottom: 20px;
                text-align: center;
                text-shadow: 0 0 5px currentColor;
            }
            
            .challenges-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 20px;
                padding: 20px;
            }
            
            .challenge-card {
                background: rgba(0, 20, 40, 0.8);
                border: 1px solid #00ff41;
                border-radius: 10px;
                padding: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .challenge-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 255, 65, 0.3);
                border-color: #ffff00;
            }
            
            .challenge-card.solved {
                background: rgba(0, 100, 0, 0.3);
                border-color: #00ff00;
            }
            
            .challenge-card h3 {
                font-size: 1.3em;
                margin-bottom: 10px;
                color: #00ff41;
            }
            
            .challenge-points {
                position: absolute;
                top: 15px;
                right: 15px;
                background: #ffff00;
                color: #000;
                padding: 5px 10px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 0.9em;
            }
            
            .challenge-description {
                margin: 15px 0;
                color: #cccccc;
                font-size: 0.95em;
            }
            
            .challenge-category {
                color: #00ffff;
                font-size: 0.9em;
                font-style: italic;
            }
            
            .view-solution {
                margin-top: 10px;
                background: #00ff41;
                color: #000;
                border: none;
                padding: 8px 15px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
            }
            
            .view-solution:hover {
                background: #ffff00;
            }
            
            /* Modal Styles */
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
            }
            
            .modal-content {
                background: linear-gradient(145deg, #0a0a0a, #1a1a2e);
                margin: 5% auto;
                padding: 30px;
                border: 2px solid #00ff41;
                border-radius: 15px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
            }
            
            .close {
                color: #ff4444;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
                line-height: 1;
            }
            
            .close:hover {
                color: #ffff00;
            }
            
            #modalTitle {
                color: #00ff41;
                margin-bottom: 20px;
                font-size: 1.5em;
            }
            
            #modalDescription {
                margin-bottom: 30px;
                line-height: 1.8;
            }
            
            .flag-submission {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
            }
            
            #flagInput {
                flex: 1;
                padding: 12px;
                background: rgba(0, 20, 40, 0.8);
                border: 1px solid #00ff41;
                border-radius: 5px;
                color: #00ff41;
                font-family: 'Courier New', monospace;
            }
            
            #flagInput:focus {
                outline: none;
                border-color: #ffff00;
                box-shadow: 0 0 10px rgba(255, 255, 0, 0.3);
            }
            
            #submitFlag {
                padding: 12px 20px;
                background: #00ff41;
                color: #000;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
                transition: background 0.3s ease;
            }
            
            #submitFlag:hover {
                background: #ffff00;
            }
            
            #submissionStatus {
                min-height: 30px;
                padding: 10px;
                border-radius: 5px;
                font-weight: bold;
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .challenges-grid {
                    grid-template-columns: 1fr;
                    padding: 10px;
                }
                
                .platform-header h1 {
                    font-size: 2em;
                }
                
                .user-stats {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .flag-submission {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
    }

    initializeChallenges() {
        this.renderChallenges('beginner', cyberChallenges.beginner, 'beginnerChallenges');
        this.renderChallenges('intermediate', cyberChallenges.intermediate, 'intermediateChallenges');  
        this.renderChallenges('advanced', cyberChallenges.advanced, 'advancedChallenges');
    }

    renderChallenges(level, challenges, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        challenges.forEach((challenge, index) => {
            const isSolved = this.solvedChallenges.includes(challenge.id);
            const challengeCard = document.createElement('div');
            challengeCard.className = `challenge-card ${isSolved ? 'solved' : ''}`;
            
            challengeCard.innerHTML = `
                <h3>${challenge.title} ${isSolved ? '✅' : ''}</h3>
                <div class="challenge-points">${challenge.points}pts</div>
                <div class="challenge-description">${challenge.description}</div>
                <div class="challenge-category">📂 ${challenge.category}</div>
                ${isSolved ? `<button class="view-solution" onclick="cyberPlatform.showSolution('${challenge.id}')">💡 View Solution</button>` : ''}
            `;
            
            challengeCard.addEventListener('click', (e) => {
                if (!e.target.classList.contains('view-solution')) {
                    this.openChallenge(challenge);
                }
            });
            
            container.appendChild(challengeCard);
        });
    }

    openChallenge(challenge) {
        const modal = document.getElementById('challengeModal');
        const title = document.getElementById('modalTitle');
        const description = document.getElementById('modalDescription');
        
        title.textContent = challenge.title;
        description.innerHTML = `
            <p><strong>🏆 Points:</strong> ${challenge.points}</p>
            <p><strong>📂 Category:</strong> ${challenge.category}</p>
            <p><strong>📝 Challenge:</strong> ${challenge.description}</p>
            ${challenge.resources ? `<p><strong>💡 Hint:</strong> ${challenge.resources.text}</p>` : ''}
        `;
        
        modal.style.display = 'block';
        
        const submitBtn = document.getElementById('submitFlag');
        const flagInput = document.getElementById('flagInput');
        
        // Clear previous handlers
        submitBtn.onclick = null;
        flagInput.value = '';
        flagInput.placeholder = 'Enter your answer: cyber{...}';
        document.getElementById('submissionStatus').innerHTML = '';
        
        // Set new handler
        submitBtn.onclick = () => this.submitFlag(challenge.id, challenge.flag, challenge.points, challenge.solution);
        
        // Handle Enter key
        flagInput.onkeypress = (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        };
        
        // Focus on input
        setTimeout(() => flagInput.focus(), 100);
    }

    submitFlag(challengeId, correctFlag, points, solution) {
        const flagInput = document.getElementById('flagInput');
        const submissionStatus = document.getElementById('submissionStatus');
        const userFlag = flagInput.value.trim();
        
        if (!userFlag) {
            submissionStatus.innerHTML = '<div style="color: #ffff00;">⚠️ Please enter an answer!</div>';
            return;
        }
        
        if (userFlag.toLowerCase() === correctFlag.toLowerCase()) {
            if (!this.solvedChallenges.includes(challengeId)) {
                // New solve
                this.solvedChallenges.push(challengeId);
                this.currentUser.solvedChallenges = this.solvedChallenges;
                this.currentUser.totalPoints += points;
                localStorage.setItem('cyberUser', JSON.stringify(this.currentUser));
                
                submissionStatus.innerHTML = `
                    <div style="color: #00ff41; background: rgba(0,255,65,0.1); padding: 15px; border-radius: 5px;">
                        🎉 <strong>Correct!</strong> Well done! (+${points} points)<br>
                        <br><strong>💡 Solution:</strong><br>${solution}
                    </div>
                `;
                
                this.initializeChallenges();
                this.updateUserStats();
                
                // Celebration effect
                this.showCelebration();
                
            } else {
                // Already solved
                submissionStatus.innerHTML = `
                    <div style="color: #ffff00; background: rgba(255,255,0,0.1); padding: 15px; border-radius: 5px;">
                        ✅ <strong>Already solved!</strong><br>
                        <br><strong>💡 Solution:</strong><br>${solution}
                    </div>
                `;
            }
        } else {
            // Incorrect
            submissionStatus.innerHTML = '<div style="color: #ff4444; background: rgba(255,68,68,0.1); padding: 15px; border-radius: 5px;">❌ <strong>Incorrect answer.</strong> Try again! 🤔</div>';
        }
    }

    showSolution(challengeId) {
        const allChallenges = [...cyberChallenges.beginner, ...cyberChallenges.intermediate, ...cyberChallenges.advanced];
        const challenge = allChallenges.find(c => c.id === challengeId);
        if (challenge) {
            alert(`💡 Solution for "${challenge.title}":\n\n${challenge.solution}\n\n🎯 Flag: ${challenge.flag}`);
        }
    }

    updateUserStats() {
        const pointsElement = document.getElementById('userPoints');
        if (pointsElement && this.currentUser) {
            pointsElement.textContent = this.currentUser.totalPoints || 0;
        }
    }

    showCelebration() {
        // Create celebration effect
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            font-size: 3em; z-index: 10000; pointer-events: none;
            animation: celebrate 2s ease-out forwards;
        `;
        celebration.textContent = '🎉✨🔥';
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            if (celebration.parentNode) {
                celebration.parentNode.removeChild(celebration);
            }
        }, 2000);
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
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
}

// Add celebration animation
const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = `
    @keyframes celebrate {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1) translateY(-100px); }
    }
`;
document.head.appendChild(celebrationStyle);

// Global instance
let cyberPlatform;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    cyberPlatform = new CyberLearningPlatform();
});

// Console welcome message
console.log('%c🔐 Cyber Security Learning Platform', 'color: #00ff41; font-size: 24px; font-weight: bold;');
console.log('%c🎯 26 Progressive Challenges Loaded Successfully!', 'color: #ffff00; font-size: 16px;');
console.log('%c💡 Learn by doing - each challenge teaches important cybersecurity concepts!', 'color: #00ffff; font-size: 14px;');
