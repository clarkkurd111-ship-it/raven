// ===== CTF PLATFORM LOGIC =====

// Initialize CTF challenges - SIMPLIFIED FOR BEGINNERS
const ctfChallenges = [
    {
        id: 1,
        title: "Find the Secret Code",
        description: "Someone hid a secret code in a login form. Find it and enter it to win!",
        difficulty: "beginner",
        category: "Easy",
        points: 50,
        solves: 245,
        hint: "Look at the HTML of the login form",
        flag: "flag{secret123}",
        solved: false
    },
    {
        id: 2,
        title: "Decode the Message",
        description: "A message has been coded. Decode this: KHOOR ZRUOG",
        difficulty: "beginner",
        category: "Easy",
        points: 40,
        solves: 512,
        hint: "Each letter is shifted by a number",
        flag: "flag{hello_world}",
        solved: false
    },
    {
        id: 3,
        title: "Find the Hidden Text",
        description: "There's hidden text on a webpage. Can you find it?",
        difficulty: "beginner",
        category: "Easy",
        points: 60,
        solves: 89,
        hint: "Look at the color of text on the page",
        flag: "flag{hidden_text}",
        solved: false
    },
    {
        id: 4,
        title: "Break the Simple Password",
        description: "Crack this password: It's a common word, 8 letters long",
        difficulty: "beginner",
        category: "Easy",
        points: 50,
        solves: 678,
        hint: "Try 'password'",
        flag: "flag{password}",
        solved: false
    },
    {
        id: 5,
        title: "Find the Admin Account",
        description: "Login with the admin account. (Hint: Admin password is weak!)",
        difficulty: "intermediate",
        category: "Medium",
        points: 100,
        solves: 34,
        hint: "Try 'admin' as username and common passwords",
        flag: "flag{admin_hacked}",
        solved: false
    },
    {
        id: 6,
        title: "Exploit the Form",
        description: "Find a way to bypass the form validation",
        difficulty: "intermediate",
        category: "Medium",
        points: 80,
        solves: 112,
        hint: "Try entering special characters",
        flag: "flag{bypass_form}",
        solved: false
    },
    {
        id: 7,
        title: "Read the Database",
        description: "Access the database without proper credentials",
        difficulty: "hard",
        category: "Hard",
        points: 150,
        solves: 56,
        hint: "Look for SQL commands",
        flag: "flag{database_pwned}",
        solved: false
    },
    {
        id: 8,
        title: "Reverse the Code",
        description: "Reverse engineer the program to find the password",
        difficulty: "hard",
        category: "Hard",
        points: 120,
        solves: 167,
        hint: "Try working backwards",
        flag: "flag{reversed}",
        solved: false
    }
];

// Initialize achievements
const achievements = [
    { id: 1, name: "First Blood", description: "Solve your first challenge", icon: "🩸", earned: false },
    { id: 2, name: "Web Master", description: "Solve 5 web challenges", icon: "🕸️", earned: false },
    { id: 3, name: "Crypto Breaker", description: "Solve 5 crypto challenges", icon: "🔑", earned: false },
    { id: 4, name: "Binary Beast", description: "Solve 3 reverse engineering challenges", icon: "⚙️", earned: false },
    { id: 5, name: "Speed Hacker", description: "Solve a challenge in under 5 minutes", icon: "⚡", earned: false },
    { id: 6, name: "Point Collector", description: "Earn 1000 points", icon: "💰", earned: false },
    { id: 7, name: "Leaderboard", description: "Reach top 10 on leaderboard", icon: "🏆", earned: false },
    { id: 8, name: "Team Player", description: "Join a team", icon: "👥", earned: false }
];

// Calculate player level from points
function calculateLevel(points) {
    if (points < 100) return { level: 1, nextLevelPoints: 100 };
    if (points < 250) return { level: 2, nextLevelPoints: 250 };
    if (points < 450) return { level: 3, nextLevelPoints: 450 };
    if (points < 700) return { level: 4, nextLevelPoints: 700 };
    if (points < 1000) return { level: 5, nextLevelPoints: 1000 };
    if (points < 1350) return { level: 6, nextLevelPoints: 1350 };
    if (points < 1750) return { level: 7, nextLevelPoints: 1750 };
    return { level: 8, nextLevelPoints: 2000 };
}

// Get level title by level number
function getLevelTitle(level) {
    const titles = ['', 'Hacker', 'Expert Hacker', 'Master Hacker', 'Elite Hacker', 'Legendary', 'Supreme', 'God Mode', 'UNSTOPPABLE'];
    return titles[level] || 'Unknown';
}

// CTF Navigation - Make globally accessible
window.showLogin = function () {
    const ctfHome = document.getElementById('ctf-home');
    const ctfAuth = document.getElementById('ctf-auth');

    if (ctfHome) ctfHome.classList.remove('active');
    if (ctfAuth) ctfAuth.classList.add('active');

    switchAuthTab('login');
}

window.switchAuthTab = function (tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) loginForm.classList.remove('active');
    if (registerForm) registerForm.classList.remove('active');

    const targetForm = document.getElementById(tab + 'Form');
    if (targetForm) targetForm.classList.add('active');
}

window.scrollToSection = function (id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// CTF Login/Register
document.addEventListener('DOMContentLoaded', function () {
    // CTF Login Form
    const ctfLoginForm = document.getElementById('ctfLoginForm');
    if (ctfLoginForm) {
        ctfLoginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (!user) {
                showAlert('Invalid credentials!', 'error');
                return;
            }

            // Login successful
            localStorage.setItem('ctfLoggedIn', 'true');
            localStorage.setItem('ctfUserEmail', email);
            localStorage.setItem('ctfUserAlias', user.fullName);

            showAlert('Welcome to RAVEN CTF!', 'success');
            setTimeout(() => {
                loadCTFDashboard();
            }, 1000);
        });
    }

    // CTF Register Form
    const ctfRegisterForm = document.getElementById('ctfRegisterForm');
    if (ctfRegisterForm) {
        ctfRegisterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const alias = document.getElementById('regAlias').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirm = document.getElementById('regConfirm').value;

            if (password !== confirm) {
                showAlert('Passwords do not match!', 'error');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email === email)) {
                showAlert('Email already exists!', 'error');
                return;
            }

            // Create new user
            users.push({
                fullName: alias,
                email: email,
                password: password,
                emailVerified: true,
                memberSince: new Date().toISOString()
            });
            localStorage.setItem('users', JSON.stringify(users));

            // Create CTF profile
            const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
            ctfProfiles.push({
                email: email,
                alias: alias,
                score: 0,
                solved: [],
                achievements: [],
                joinDate: new Date().toISOString(),
                team: null
            });
            localStorage.setItem('ctfProfiles', JSON.stringify(ctfProfiles));

            showAlert('Account created! Please login.', 'success');
            switchAuthTab('login');
        });
    }

    // Check if already logged in
    if (localStorage.getItem('ctfLoggedIn')) {
        loadCTFDashboard();
    }
});

function loadCTFDashboard() {
    const email = localStorage.getItem('ctfUserEmail');
    const alias = localStorage.getItem('ctfUserAlias');

    document.getElementById('ctf-auth').classList.remove('active');
    document.getElementById('ctf-home').classList.remove('active');
    document.getElementById('ctf-dashboard').classList.add('active');
    document.getElementById('navUser').textContent = `🟢 ${alias}`;

    loadUserProfile();
    loadChallenges();
    loadLeaderboard();
    loadAchievements();
    updateStats();
}

function loadUserProfile() {
    const email = localStorage.getItem('ctfUserEmail');
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const profile = ctfProfiles.find(p => p.email === email);

    if (profile) {
        const dashAliasEl = document.getElementById('dashAlias');
        const dashScoreEl = document.getElementById('dashScore');
        const dashSolvedEl = document.getElementById('dashSolved');
        const dashPositionEl = document.getElementById('dashPosition');
        const dashRankEl = document.getElementById('dashRank');

        if (dashAliasEl) dashAliasEl.textContent = profile.alias;
        if (dashScoreEl) dashScoreEl.textContent = profile.score + ' pts';
        if (dashSolvedEl) dashSolvedEl.textContent = profile.solved.length;

        // Calculate level and rank
        const sorted = ctfProfiles.sort((a, b) => b.score - a.score);
        const position = sorted.findIndex(p => p.email === email) + 1;
        const levelData = calculateLevel(profile.score);

        if (dashPositionEl) dashPositionEl.textContent = `#${position}`;
        if (dashRankEl) {
            dashRankEl.textContent = `LEVEL ${levelData.level} - ${getLevelTitle(levelData.level)}`;
            dashRankEl.style.color = '#00ffff';
            dashRankEl.style.fontWeight = 'bold';
        }
        const diffColor = {
            beginner: '#00ff96',
            intermediate: '#ffff00',
            advanced: '#ff6b6b'
        }[challenge.difficulty];

        return `
            <div class="challenge-card ${isSolved ? 'solved' : ''}">
                <div class="challenge-header">
                    <h3>${challenge.title} ${isSolved ? '✓' : ''}</h3>
                    <span class="points">${challenge.points} pts</span>
                </div>
                <p>${challenge.description}</p>
                <div class="challenge-footer">
                    <span style="color: ${diffColor};">${challenge.difficulty.toUpperCase()}</span>
                    <span>${challenge.category}</span>
                    <span>${challenge.solves} solves</span>
                    <button class="btn btn-small" onclick="showChallenge(${challenge.id})">> ${isSolved ? 'View' : 'Solve'}</button>
                </div>
            </div>
        `;
    }).join('');
}

window.showChallenge = function (id) {
    const challenge = ctfChallenges.find(c => c.id === id);
    const modal = document.getElementById('challengeModal');
    if (!modal) return;

    const email = localStorage.getItem('ctfUserEmail');
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const profile = ctfProfiles.find(p => p.email === email);
    const isSolved = profile && profile.solved.includes(id);

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (modalTitle) modalTitle.textContent = challenge.title;
    if (modalBody) {
        modalBody.innerHTML = `
            <p><strong>Category:</strong> ${challenge.category}</p>
            <p><strong>Difficulty:</strong> ${challenge.difficulty}</p>
            <p><strong>Points:</strong> ${challenge.points}</p>
            <p><strong>Description:</strong><br>${challenge.description}</p>
            <p><strong>Hint:</strong> ${challenge.hint}</p>
            ${isSolved ? `<p style="color: #00ff96;">✓ You solved this challenge!</p>` : `
                <input type="text" id="flagInput" placeholder="> Enter flag" style="width: 100%; padding: 10px; margin: 10px 0; background: #000; border: 1px solid #00ff96; color: #00ff96;">
                <button class="btn" onclick="submitFlag(${id})">> Submit Flag</button>
            `}
        `;
    }

    modal.style.display = 'block';
}

window.submitFlag = function (challengeId) {
    const flagInput = document.getElementById('flagInput');
    if (!flagInput) return;

    const flagValue = flagInput.value;
    const challenge = ctfChallenges.find(c => c.id === challengeId);
    const email = localStorage.getItem('ctfUserEmail');
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const profile = ctfProfiles.find(p => p.email === email);

    if (!profile) return;

    if (flagValue === challenge.flag) {
        profile.score += challenge.points;
        if (!profile.solved.includes(challengeId)) {
            profile.solved.push(challengeId);
        }
        localStorage.setItem('ctfProfiles', JSON.stringify(ctfProfiles));

        showAlert(`Correct! You earned ${challenge.points} points!`, 'success');
        window.closeModal();
        loadUserProfile();
        loadChallenges();
        loadLeaderboard();
    } else {
        showAlert('Incorrect flag!', 'error');
    }
}

function loadLeaderboard() {
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const sorted = ctfProfiles.sort((a, b) => b.score - a.score);

    const leaderboardList = document.getElementById('leaderboardList');
    if (!leaderboardList) return;

    leaderboardList.innerHTML = sorted.slice(0, 50).map((profile, index) => {
        const level = calculateLevel(profile.score);
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
        const bgColor = index < 3 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 255, 150, 0.05)';
        const borderColor = index === 0 ? '#ffd700' : index === 1 ? '#c0c0c0' : index === 2 ? '#cd7f32' : '#00ff96';
        return `
        <div class="leaderboard-entry" style="background: ${bgColor}; border-left: 3px solid ${borderColor}; padding: 12px; margin: 8px 0; border-radius: 3px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 20px; font-weight: bold; color: ${borderColor}; width: 40px;">${medal}</div>
                <div style="flex: 1; margin-left: 15px;">
                    <h4 style="margin: 0; color: #fff;">${profile.alias}</h4>
                    <p style="margin: 3px 0; color: #00ffff; font-size: 12px;">LEVEL ${level.level} - ${getLevelTitle(level.level)}</p>
                </div>
                <div style="text-align: right;">
                    <p style="margin: 0; color: #00ff96; font-weight: bold; font-size: 16px;">${profile.score} pts</p>
                    <p style="margin: 3px 0; color: #888; font-size: 12px;">${profile.solved.length} challenges</p>
                </div>
            </div>
        </div>
    `}).join('');
}

function loadAchievements() {
    const email = localStorage.getItem('ctfUserEmail');
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const profile = ctfProfiles.find(p => p.email === email);

    const achievementsList = document.getElementById('achievementsList');
    if (!achievementsList) return;

    achievementsList.innerHTML = achievements.map(achievement => `
        <div class="achievement-badge ${profile && profile.achievements.includes(achievement.id) ? 'earned' : 'locked'}">
            <div class="badge-icon">${achievement.icon}</div>
            <h4>${achievement.name}</h4>
            <p>${achievement.description}</p>
        </div>
    `).join('');
}

window.closeModal = function () {
    const modal = document.getElementById('challengeModal');
    if (modal) modal.style.display = 'none';
}

window.switchTab = function (tab, buttonElement) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    const tabEl = document.getElementById(tab);
    if (tabEl) tabEl.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    if (tab === 'leaderboard') loadLeaderboard();
    if (tab === 'achievements') loadAchievements();
}

function updateStats() {
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    let totalSolved = 0;
    let totalPoints = 0;

    ctfProfiles.forEach(profile => {
        totalSolved += profile.solved.length;
        totalPoints += profile.score;
    });

    document.getElementById('totalChallenges').textContent = ctfChallenges.length;
    document.getElementById('totalUsers').textContent = ctfProfiles.length;
    document.getElementById('totalSolved').textContent = totalSolved;
    document.getElementById('totalPoints').textContent = totalPoints;
}

window.logoutFromCTF = function () {
    localStorage.removeItem('ctfLoggedIn');
    localStorage.removeItem('ctfUserEmail');
    localStorage.removeItem('ctfUserAlias');

    const dashboard = document.getElementById('ctf-dashboard');
    const home = document.getElementById('ctf-home');
    const navUser = document.getElementById('navUser');

    if (dashboard) dashboard.classList.remove('active');
    if (home) home.classList.add('active');
    if (navUser) navUser.textContent = '';

    if (typeof showAlert === 'function') {
        showAlert('Logged out from CTF', 'success');
    }
}

function createTeam() {
    const teamName = prompt('Enter team name:');
    if (!teamName) return;

    const email = localStorage.getItem('ctfUserEmail');
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const profile = ctfProfiles.find(p => p.email === email);

    if (profile) {
        const teams = JSON.parse(localStorage.getItem('ctfTeams')) || [];
        teams.push({
            id: Date.now(),
            name: teamName,
            leader: email,
            members: [email],
            score: profile.score,
            createdAt: new Date().toISOString()
        });
        localStorage.setItem('ctfTeams', JSON.stringify(teams));
        profile.team = teamName;
        localStorage.setItem('ctfProfiles', JSON.stringify(ctfProfiles));

        showAlert(`Team "${teamName}" created!`, 'success');
    }
}

function toggleNav() {
    event.preventDefault();
}
