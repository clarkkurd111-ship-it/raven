// Admin Dashboard Functions

function switchAdminTab(tab, buttonElement) {
    document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(tab).classList.add('active');

    document.querySelectorAll('.admin-tab-btn').forEach(el => el.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    // Load data based on tab
    if (tab === 'manage-users') loadAdminUsers();
    if (tab === 'analytics') loadAnalytics();
    if (tab === 'tournaments') loadTournaments();
    if (tab === 'dashboard') loadAdminDashboard();
}

// Load Admin Dashboard Stats
function loadAdminDashboard() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const challenges = JSON.parse(localStorage.getItem('ctfChallenges')) || [];

    let totalPoints = 0;
    ctfProfiles.forEach(p => totalPoints += p.score);

    const totalUsersEl = document.getElementById('adminTotalUsers');
    const totalChallengesEl = document.getElementById('adminTotalChallenges');
    const totalPointsEl = document.getElementById('adminTotalPoints');
    const activeSessionsEl = document.getElementById('adminActiveSessions');
    const recentActivityEl = document.getElementById('recentActivity');

    if (totalUsersEl) totalUsersEl.textContent = users.length;
    if (totalChallengesEl) totalChallengesEl.textContent = challenges.length || 8;
    if (totalPointsEl) totalPointsEl.textContent = totalPoints;
    if (activeSessionsEl) activeSessionsEl.textContent = ctfProfiles.filter(p =>
        JSON.parse(localStorage.getItem('sessions_' + p.email) || '[]').length > 0
    ).length;

    // Recent activity log
    if (recentActivityEl) {
        const activity = [
            'User registered',
            'Challenge solved: SQL Injection',
            'Achievement earned: First Blood',
            'User joined team',
            'Challenge failed attempt recorded'
        ];

        recentActivityEl.innerHTML = activity.map(a =>
            `<div class="activity-item">• ${a}</div>`
        ).join('');
    }
}

// Load Admin Users
function loadAdminUsers() {
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const usersList = document.getElementById('usersList');

    if (!usersList) return;

    usersList.innerHTML = ctfProfiles.map(user => `
        <div class="admin-user-card">
            <h4>${user.alias}</h4>
            <p>Email: ${user.email}</p>
            <p>Score: ${user.score} | Solved: ${user.solved.length}</p>
            <div class="admin-user-actions">
                <button class="btn btn-small" onclick="promoteUser('${user.email}')">> Promote</button>
                <button class="btn btn-small btn-danger" onclick="resetUserProgress('${user.email}')">> Reset</button>
            </div>
        </div>
    `).join('');
}

// Promote User (add verification badge)
function promoteUser(email) {
    const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
    const user = ctfProfiles.find(p => p.email === email);
    if (user) {
        user.verified = true;
        localStorage.setItem('ctfProfiles', JSON.stringify(ctfProfiles));
        showAlert('User promoted!', 'success');
        loadAdminUsers();
    }
}

// Reset User Progress
function resetUserProgress(email) {
    if (confirm('Reset this user\'s progress?')) {
        const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles')) || [];
        const user = ctfProfiles.find(p => p.email === email);
        if (user) {
            user.score = 0;
            user.solved = [];
            user.achievements = [];
            localStorage.setItem('ctfProfiles', JSON.stringify(ctfProfiles));
            showAlert('User progress reset!', 'success');
            loadAdminUsers();
        }
    }
}

// Create Challenge
document.addEventListener('DOMContentLoaded', function () {
    const createChallengeForm = document.getElementById('createChallengeForm');
    if (createChallengeForm) {
        createChallengeForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const newChallenge = {
                id: Date.now(),
                title: document.getElementById('challengeTitle').value,
                description: document.getElementById('challengeDesc').value,
                category: document.getElementById('challengeCategory').value,
                difficulty: document.getElementById('challengeDifficulty').value,
                points: parseInt(document.getElementById('challengePoints').value),
                hint: document.getElementById('challengeHint').value,
                flag: document.getElementById('challengeFlag').value,
                solves: 0,
                solved: false
            };

            let challenges = JSON.parse(localStorage.getItem('ctfChallenges')) || [];
            challenges.push(newChallenge);
            localStorage.setItem('ctfChallenges', JSON.stringify(challenges));

            showAlert('Challenge created!', 'success');
            createChallengeForm.reset();
        });
    }

    const createTournamentForm = document.getElementById('createTournamentForm');
    if (createTournamentForm) {
        createTournamentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const newTournament = {
                id: Date.now(),
                name: document.getElementById('tournamentName').value,
                description: document.getElementById('tournamentDesc').value,
                startTime: document.getElementById('tournamentStart').value,
                endTime: document.getElementById('tournamentEnd').value,
                prizePool: parseInt(document.getElementById('tournamentPrize').value) || 0,
                participants: [],
                status: 'upcoming'
            };

            let tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
            tournaments.push(newTournament);
            localStorage.setItem('tournaments', JSON.stringify(tournaments));

            showAlert('Tournament created!', 'success');
            createTournamentForm.reset();
            loadTournaments();
        });
    } !tournamentsList) return;

if (
});

// Load Tournaments
function loadTournaments() {
    const tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    const tournamentsList = document.getElementById('tournamentsList');

    if (tournaments.length === 0) {
        tournamentsList.innerHTML = '<p style="color: #888;">No tournaments yet</p>';
        return;
    }

    tournamentsList.innerHTML = tournaments.map(t => `
        <div class="tournament-card">
            <h3>${t.name}</h3>
            <p>${t.description}</p>
            <p>Prize Pool: $${t.prizePool}</p>
            <p>Starts: ${new Date(t.startTime).toLocaleString()}</p>
            <div class="tournament-actions">
                <button class="btn btn-small" onclick="startTournament(${t.id})">> Start</button>
                <button class="btn btn-small btn-danger" onclick="deleteTournament(${t.id})">> Delete</button>
            </div>
        </div>
    `).join('');
}

function startTournament(id) {
    const tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    const tournament = tournaments.find(t => t.id === id);
    if (tournament) {
        tournament.status = 'active';
        localStorage.setItem('tournaments', JSON.stringify(tournaments));
        showAlert('Tournament started!', 'success');
        loadTournaments();
    }
}

function deleteTournament(id) {
    if (confirm('Delete this tournament?')) {
        let tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
        tournaments = tournaments.filter(t => t.id !== id);
        localStorage.setItem('tournaments', JSON.stringify(tournaments));
        showAlert('Tournament deleted', 'success');
        loadTournaments();
    }
}

// Load Analytics
function loadAnalytics() {
    const rankStatsEl = document.getElementById('rankStats');
    if (rankStatsEl) {
        rankStatsEl.innerHTML = `
            <p>Newbie: ${newbies}</p>
            <p>Intermediate: ${intermediate}</p>
            <p>Advanced: ${advanced}</p>
            <p>Expert: ${expert}</p>
        `;
    }

    // Top solvers
    const topSolversEl = document.getElementById('topSolvers');
    if (topSolversEl) {
        const topSolvers = ctfProfiles.sort((a, b) => b.score - a.score).slice(0, 5);
        topSolversEl.innerHTML = topSolvers.map((user, i) =>
            `<p>#${i + 1} ${user.alias} - ${user.score}pts</p>`
        ).join('');
    }

    // Difficulty distribution
    const difficultyEl = document.getElementById('difficultyStats');
    if (difficultyEl) {
        difficultyEl.innerHTML = `
            <p>Beginner: 15 users</p>
            <p>Intermediate: 8 users</p>
            <p>Advanced: 3 users</p>
        `;
    }

    // Challenge popularity
    const challengeEl = document.getElementById('challengePopularity');
    if (challengeEl) {
        challengeEl.innerHTML = `
            <p>SQL Injection: 245 solves</p>
            <p>Caesar Cipher: 512 solves</p>
            <p>Hash Cracking: 678 solves</p>
        `;
    } <p>Advanced: 3 users</p>
    `;

    // Challenge popularity
    document.getElementById('challengePopularity').innerHTML = `
        < p > SQL Injection: 245 solves</p >
        <p>Caesar Cipher: 512 solves</p>
        <p>Hash Cracking: 678 solves</p>
    `;
}
