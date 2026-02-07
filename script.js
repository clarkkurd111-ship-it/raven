// Chinese Rain Effect
class ChineseRain {
    constructor() {
        this.canvas = document.getElementById('rainCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;

        // Chinese characters
        this.characters = '黑客入侵网络密码系统安全防火墙加密解密病毒木马恶意代码漏洞攻击防守';
        this.fontSize = 40;
        this.drops = [];
        this.speed = 0.3; // Slower speed - reduce this for even slower

        // Initialize drops
        const columns = Math.ceil(this.width / this.fontSize);
        for (let i = 0; i < columns; i++) {
            this.drops[i] = Math.random() * this.height;
        }

        this.animate();
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    animate() {
        // Clear canvas with opacity for trail effect - darker
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Set text properties with more vibrant colors
        this.ctx.fillStyle = '#00ff96';
        this.ctx.font = `${this.fontSize}px 'Courier New', monospace`;
        this.ctx.globalAlpha = 0.9;
        this.ctx.shadowColor = '#00ff96';
        this.ctx.shadowBlur = 10;

        // Draw characters
        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const char = this.characters[Math.floor(Math.random() * this.characters.length)];

            // Draw character
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            // Vary opacity and color based on position
            this.ctx.globalAlpha = 0.6 + (Math.random() * 0.4);

            // Alternate colors for more hacker effect
            if (Math.random() > 0.7) {
                this.ctx.fillStyle = '#00ffff';
            } else if (Math.random() > 0.85) {
                this.ctx.fillStyle = '#ff00ff';
            } else {
                this.ctx.fillStyle = '#00ff96';
            }

            this.ctx.fillText(char, x, y);

            // Reset drop or move it down with slower speed
            this.drops[i] += this.speed;
            if (this.drops[i] * this.fontSize > this.height && Math.random() > 0.99) {
                this.drops[i] = 0;
            }
        }

        this.ctx.globalAlpha = 1;
        this.ctx.shadowBlur = 0;
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize rain effect on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if canvas exists before initializing rain effect
    if (document.getElementById('rainCanvas')) {
        new ChineseRain();
    }
});

// Initialize default users on page load
function initializeUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const defaultAccounts = [
        {
            fullName: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            emailVerified: true,
            memberSince: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            fullName: 'Dana',
            email: 'danakalary93@gmail.com',
            password: 'Dana11dana$',
            emailVerified: true,
            memberSince: new Date().toISOString(),
            createdAt: new Date().toISOString()
        }
    ];

    // Add default accounts if they don't exist
    defaultAccounts.forEach(account => {
        if (!users.find(u => u.email === account.email)) {
            users.push(account);
        }
    });

    localStorage.setItem('users', JSON.stringify(users));
}

// Initialize users when script loads
initializeUsers();

// Login Form Handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        // Validation
        if (!email || !password) {
            showAlert('Please fill in all fields!', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address!', 'error');
            return;
        }

        if (password.length < 6) {
            showAlert('Password must be at least 6 characters!', 'error');
            return;
        }

        // Check if user exists and password matches
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            showAlert('Invalid email or password!', 'error');

            // Track failed login attempt
            let failedAttempts = JSON.parse(localStorage.getItem('failedLoginAttempts')) || [];
            failedAttempts.push({
                email: email,
                time: new Date().toISOString(),
                reason: 'Invalid email or password',
                ip: '192.168.1.' + Math.floor(Math.random() * 256)
            });
            localStorage.setItem('failedLoginAttempts', JSON.stringify(failedAttempts));

            return;
        }

        // Login successful
        showAlert('Login successful! Redirecting...', 'success');

        // Create session
        const sessionId = 'session_' + Date.now();
        const session = {
            id: sessionId,
            device: 'Web Browser',
            ip: '192.168.1.' + Math.floor(Math.random() * 256),
            loginTime: new Date().toISOString(),
            lastActive: new Date().toISOString()
        };

        // Store session
        let sessions = JSON.parse(localStorage.getItem('sessions_' + email)) || [];
        sessions.push(session);
        localStorage.setItem('sessions_' + email, JSON.stringify(sessions));

        // Track login history
        let loginHistory = JSON.parse(localStorage.getItem('loginHistory_' + email)) || [];
        loginHistory.push({
            time: new Date().toISOString(),
            device: 'Web Browser',
            ip: session.ip,
            success: true
        });
        localStorage.setItem('loginHistory_' + email, JSON.stringify(loginHistory));

        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('currentSession', sessionId);

        // Redirect after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}

// Register Form Handling
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = document.getElementById('registerFullName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;

        // Validation
        if (!fullName || !email || !password || !confirmPassword) {
            showAlert('Please fill in all fields!', 'error');
            return;
        }

        if (fullName.length < 2) {
            showAlert('Full name must be at least 2 characters!', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address!', 'error');
            return;
        }

        if (password.length < 6) {
            showAlert('Password must be at least 6 characters!', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showAlert('Passwords do not match!', 'error');
            return;
        }

        if (!agreeTerms) {
            showAlert('Please agree to Terms & Conditions!', 'error');
            return;
        }

        // Check if email already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) {
            showAlert('Email already registered!', 'error');
            return;
        }

        // Generate verification code
        const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        // Store user data with verification pending
        users.push({
            fullName: fullName,
            email: email,
            password: password,
            emailVerified: false,
            verificationCode: verificationCode,
            memberSince: new Date().toISOString(),
            createdAt: new Date().toISOString()
        });
        localStorage.setItem('users', JSON.stringify(users));

        // Show verification code (simulate email)
        showAlert(`Registration successful! Your verification code: ${verificationCode}`, 'success');

        // Store for verification page
        localStorage.setItem('pendingVerificationEmail', email);
        localStorage.setItem('pendingVerificationCode', verificationCode);

        // Redirect to verification page after 3 seconds
        setTimeout(() => {
            window.location.href = 'verify-email.html';
        }, 3000);
    });
}

// Forgot Password Form Handling
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('resetEmail').value.trim();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmResetPassword').value;

        // Validation
        if (!email || !newPassword || !confirmPassword) {
            showAlert('Please fill in all fields!', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address!', 'error');
            return;
        }

        if (newPassword.length < 6) {
            showAlert('Password must be at least 6 characters!', 'error');
            return;
        }

        if (newPassword !== confirmPassword) {
            showAlert('Passwords do not match!', 'error');
            return;
        }

        // Find user and update password
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.email === email);

        if (userIndex === -1) {
            showAlert('Email not found in system!', 'error');
            return;
        }

        // Update password
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));

        // Success message
        showAlert('Password reset successful! Redirecting to login...', 'success');

        // Redirect to login after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
}

// Email Validation Function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alert Function
function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.textContent = message;

    // Add styles
    alertDiv.style.cssText = `
        padding: 12px 16px;
        margin-bottom: 15px;
        border-radius: 5px;
        text-align: center;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 400px;
        z-index: 1000;
        ${type === 'success'
            ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
            : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'}
    `;

    document.body.appendChild(alertDiv);

    // Remove alert after 4 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

// Add animation styles to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Check if user is logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname.includes('dashboard.html')) {
        window.location.href = 'index.html';
    }
}

// Run login status check on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);

// Dashboard change password handling
document.addEventListener('DOMContentLoaded', function () {
    // Display user email and full name on dashboard
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const emailElement = document.getElementById('userEmail');
        if (emailElement) {
            emailElement.textContent = userEmail;
        }

        // Get and display user full name
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === userEmail);
        const fullNameElement = document.getElementById('userFullName');
        if (fullNameElement && user) {
            fullNameElement.textContent = user.fullName;
        }
    }

    // Handle change password form
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const userEmail = localStorage.getItem('userEmail');
            if (!userEmail) {
                showAlert('Not logged in!', 'error');
                return;
            }

            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                showAlert('Please fill in all fields!', 'error');
                return;
            }

            if (newPassword.length < 6) {
                showAlert('New password must be at least 6 characters!', 'error');
                return;
            }

            if (newPassword !== confirmPassword) {
                showAlert('New passwords do not match!', 'error');
                return;
            }

            // Check current password
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === userEmail);

            if (!user || user.password !== currentPassword) {
                showAlert('Current password is incorrect!', 'error');
                return;
            }

            // Update password
            user.password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));

            // Success
            showAlert('Password updated successfully!', 'success');

            // Clear form
            changePasswordForm.reset();
        });
    }
});

// Logout Function (if you add a logout button)
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('currentSession');
    window.location.href = 'index.html';
}

// ===== PROFILE MANAGEMENT FUNCTIONS =====

// Show/Hide profile sections
function showSection(sectionId, buttonElement) {
    const sections = document.querySelectorAll('.profile-section');
    const buttons = document.querySelectorAll('.profile-nav-btn');

    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }

    // Highlight active button
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}

// Load profile data
function loadProfileData() {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = 'index.html';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === userEmail);

    if (!user) {
        window.location.href = 'index.html';
        return;
    }

    // Display profile info
    document.getElementById('profileName').textContent = user.fullName;
    document.getElementById('profileEmail').textContent = user.email;
    document.getElementById('memberSince').textContent = new Date(user.memberSince || user.createdAt).toLocaleDateString();

    // Get last login from login history
    const loginHistory = JSON.parse(localStorage.getItem('loginHistory_' + userEmail)) || [];
    const lastLogin = loginHistory[loginHistory.length - 1];
    document.getElementById('lastLogin').textContent = lastLogin
        ? new Date(lastLogin.time).toLocaleString()
        : 'Just now';

    // Populate edit form
    document.getElementById('editFullName').value = user.fullName;
    document.getElementById('editEmail').value = user.email;

    // Load sessions
    loadActiveSessions(userEmail);

    // Load login history
    loadLoginHistory(userEmail);
}

// Load active sessions
function loadActiveSessions(userEmail) {
    const sessions = JSON.parse(localStorage.getItem('sessions_' + userEmail)) || [];
    const sessionsList = document.getElementById('sessionsList');

    if (sessions.length === 0) {
        sessionsList.innerHTML = '<p>No active sessions</p>';
        return;
    }

    sessionsList.innerHTML = sessions.map((session, index) => `
        <div class="session-item">
            <div class="session-info">
                <p><strong>Device:</strong> ${session.device}</p>
                <p><strong>IP Address:</strong> ${session.ip}</p>
                <p><strong>Last Active:</strong> ${new Date(session.lastActive).toLocaleString()}</p>
                <p><strong>Login Time:</strong> ${new Date(session.loginTime).toLocaleString()}</p>
            </div>
            <button class="btn btn-danger" onclick="endSession('${userEmail}', ${index})">> End Session</button>
        </div>
    `).join('');
}

// End a specific session
function endSession(userEmail, sessionIndex) {
    const sessions = JSON.parse(localStorage.getItem('sessions_' + userEmail)) || [];
    sessions.splice(sessionIndex, 1);
    localStorage.setItem('sessions_' + userEmail, JSON.stringify(sessions));
    loadActiveSessions(userEmail);
    showAlert('Session ended', 'success');
}

// Logout from all sessions
function logoutAllSessions() {
    const userEmail = localStorage.getItem('userEmail');
    if (confirm('Are you sure? You will be logged out from all devices.')) {
        localStorage.removeItem('sessions_' + userEmail);
        logout();
    }
}

// Load login history
function loadLoginHistory(userEmail) {
    const history = JSON.parse(localStorage.getItem('loginHistory_' + userEmail)) || [];
    const historyDiv = document.getElementById('loginHistory');

    if (history.length === 0) {
        historyDiv.innerHTML = '<p>No login history</p>';
        return;
    }

    historyDiv.innerHTML = history.slice().reverse().slice(0, 10).map(entry => `
        <div class="history-item">
            <p><strong>Time:</strong> ${new Date(entry.time).toLocaleString()}</p>
            <p><strong>IP:</strong> ${entry.ip}</p>
            <p><strong>Device:</strong> ${entry.device}</p>
        </div>
    `).join('');
}

// Show change password form on dashboard (if exists)
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on profile page
    const isProfilePage = document.getElementById('editProfileForm') !== null ||
        document.getElementById('profileName') !== null;

    if (isProfilePage) {
        loadProfileData();
    }

    // The rest of the dashboard functionality
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail && isProfilePage) {
        window.location.href = 'index.html';
        return;
    }

    // Edit Profile Form
    const editProfileForm = document.getElementById('editProfileForm');
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const newFullName = document.getElementById('editFullName').value.trim();
            const newEmail = document.getElementById('editEmail').value.trim();

            if (!newFullName || !newEmail) {
                showAlert('Please fill in all fields!', 'error');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === userEmail);

            if (!user) {
                showAlert('User not found!', 'error');
                return;
            }

            // Check if new email is already taken (by another user)
            if (newEmail !== userEmail && users.find(u => u.email === newEmail)) {
                showAlert('Email already in use!', 'error');
                return;
            }

            // Update user info
            user.fullName = newFullName;
            const oldEmail = user.email;
            user.email = newEmail;

            localStorage.setItem('users', JSON.stringify(users));

            // Migrate session and history data to new email
            const oldSessions = JSON.parse(localStorage.getItem('sessions_' + oldEmail) || '[]');
            const oldHistory = JSON.parse(localStorage.getItem('loginHistory_' + oldEmail) || '[]');
            const oldCTFProfile = JSON.parse(localStorage.getItem('ctfProfiles') || '[]').find(p => p.email === oldEmail);

            if (oldSessions.length > 0) {
                localStorage.setItem('sessions_' + newEmail, JSON.stringify(oldSessions));
                localStorage.removeItem('sessions_' + oldEmail);
            }
            if (oldHistory.length > 0) {
                localStorage.setItem('loginHistory_' + newEmail, JSON.stringify(oldHistory));
                localStorage.removeItem('loginHistory_' + oldEmail);
            }

            // Update CTF profile email if it exists
            if (oldCTFProfile) {
                const ctfProfiles = JSON.parse(localStorage.getItem('ctfProfiles') || '[]');
                const ctfIndex = ctfProfiles.findIndex(p => p.email === oldEmail);
                if (ctfIndex !== -1) {
                    ctfProfiles[ctfIndex].email = newEmail;
                    localStorage.setItem('ctfProfiles', JSON.stringify(ctfProfiles));
                }
            }

            localStorage.setItem('userEmail', newEmail);

            showAlert('Profile updated successfully!', 'success');
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        });
    }

    // Change Password Form
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const currentPassword = document.getElementById('secCurrentPassword').value;
            const newPassword = document.getElementById('secNewPassword').value;
            const confirmPassword = document.getElementById('secConfirmPassword').value;

            if (!currentPassword || !newPassword || !confirmPassword) {
                showAlert('Please fill in all fields!', 'error');
                return;
            }

            if (newPassword.length < 6) {
                showAlert('New password must be at least 6 characters!', 'error');
                return;
            }

            if (newPassword !== confirmPassword) {
                showAlert('New passwords do not match!', 'error');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === userEmail);

            if (!user || user.password !== currentPassword) {
                showAlert('Current password is incorrect!', 'error');
                return;
            }

            user.password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));

            showAlert('Password updated successfully!', 'success');
            changePasswordForm.reset();
        });
    }
});

// ---- Love page: typed message + floating hearts ----
(function () {
    const loveMessageText = "To my dearest Tina, every moment with you is pure magic. Your smile lights up my world, and I'm so grateful for you. I love you — forever and always. 💕";

    function typeText(el, text, speed = 40) {
        el.textContent = '';
        let i = 0;
        el.setAttribute('aria-hidden', 'false');
        const id = setInterval(() => {
            el.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(id);
        }, speed);
    }

    // Heart animation on canvas
    class Heart {
        constructor(x, y, size, speed, hue) {
            this.x = x; this.y = y; this.size = size; this.speed = speed; this.hue = hue; this.alpha = 1;
        }
        draw(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.size, this.size);
            ctx.beginPath();
            ctx.moveTo(0, -12);
            ctx.bezierCurveTo(8, -28, 34, -20, 0, 10);
            ctx.bezierCurveTo(-34, -20, -8, -28, 0, -12);
            ctx.closePath();
            ctx.fillStyle = `hsla(${this.hue},80%,60%,${this.alpha})`;
            ctx.fill();
            ctx.restore();
        }
        update() {
            this.y -= this.speed;
            this.alpha -= 0.005;
        }
    }

    function initHearts(canvas) {
        const ctx = canvas.getContext('2d');
        let hearts = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function spawn() {
            const x = Math.random() * canvas.width;
            const y = canvas.height + 20;
            const size = 0.6 + Math.random() * 1.2;
            const speed = 0.7 + Math.random() * 1.2;
            const hue = 330 - Math.random() * 40;
            hearts.push(new Heart(x, y, size, speed, hue));
        }

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = hearts.length - 1; i >= 0; i--) {
                const h = hearts[i];
                h.update();
                h.draw(ctx);
                if (h.alpha <= 0) hearts.splice(i, 1);
            }
            requestAnimationFrame(loop);
        }

        window.addEventListener('resize', resize);
        resize();
        const spawnInterval = setInterval(spawn, 220);
        requestAnimationFrame(loop);
        return () => clearInterval(spawnInterval);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const openBtn = document.getElementById('loveOpenBtn');
        const msgEl = document.getElementById('loveMessage');
        const heartCanvas = document.getElementById('heartCanvas');
        const starsCanvas = document.getElementById('starsCanvas');
        const confettiContainer = document.getElementById('confetti');
        let stopHearts = null;
        let stopStars = null;

        if (!openBtn || !msgEl || !heartCanvas) return;

        // Initialize stars immediately
        if (starsCanvas) {
            stopStars = initStars(starsCanvas);
        }

        // Mark as love page for styling
        document.body.classList.add('love-page');

        // Add mouse trail
        addMouseTrail();

        // Add floating particles
        addFloatingParticles();

        openBtn.addEventListener('click', () => {
            openBtn.style.display = 'none';
            openBtn.style.pointerEvents = 'none';

            // Trigger multiple explosions
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    if (confettiContainer) createConfetti(confettiContainer);
                }, i * 600);
            }

            // Delay message reveal for dramatic effect
            setTimeout(() => {
                typeText(msgEl, loveMessageText, 25);
                stopHearts = initHearts(heartCanvas);
            }, 400);
        });
    });

    // Stars animation with shooting stars
    function initStars(canvas) {
        const ctx = canvas.getContext('2d');
        const stars = [];
        const shootingStars = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            regenerateStars();
        }

        function regenerateStars() {
            stars.length = 0;
            const starCount = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < starCount; i++) {
                stars.push(new Star());
            }
        }

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.r = Math.random() * 2.5;
                this.opacity = Math.random() * 0.6 + 0.4;
                this.twinklespeed = Math.random() * 0.04 + 0.015;
                this.direction = Math.random() > 0.5 ? 1 : -1;
                this.hue = Math.random() > 0.7 ? 45 : 280;
            }
            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
                let brightness = 70 + this.opacity * 50;
                ctx.fillStyle = `hsla(${this.hue},100%,${brightness}%,${this.opacity})`;
                ctx.fill();

                if (this.r > 1.5) {
                    ctx.strokeStyle = `hsla(${this.hue},80%,80%,${this.opacity * 0.6})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
            update() {
                this.opacity += this.twinklespeed * this.direction;
                if (this.opacity > 0.9 || this.opacity < 0.3) this.direction *= -1;
            }
        }

        class ShootingStar {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * (canvas.height / 2);
                this.length = Math.random() * 80 + 50;
                this.opacity = 1;
                this.speed = Math.random() * 8 + 4;
                this.angle = Math.random() * 0.3 + 0.2;
            }
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.strokeStyle = 'hsla(50,100%,80%,' + this.opacity + ')';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
                ctx.stroke();
                ctx.restore();
            }
            update() {
                this.x += this.speed;
                this.y += this.speed * Math.tan(this.angle);
                this.opacity -= 0.02;
            }
        }

        function spawnShootingStar() {
            shootingStars.push(new ShootingStar());
        }

        function loop() {
            // Draw aurora glow
            const gradient1 = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.2);
            gradient1.addColorStop(0, 'rgba(147, 51, 234, 0.15)');
            gradient1.addColorStop(1, 'rgba(147, 51, 234, 0)');
            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, canvas.width, canvas.height * 0.2);

            const gradient2 = ctx.createLinearGradient(0, canvas.height * 0.8, 0, canvas.height);
            gradient2.addColorStop(0, 'rgba(236, 72, 153, 0)');
            gradient2.addColorStop(1, 'rgba(236, 72, 153, 0.1)');
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, canvas.height * 0.8, canvas.width, canvas.height * 0.2);

            // Draw stars
            stars.forEach(star => {
                star.update();
                star.draw(ctx);
            });

            // Draw shooting stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                shootingStars[i].update();
                shootingStars[i].draw(ctx);
                if (shootingStars[i].opacity <= 0) shootingStars.splice(i, 1);
            }

            requestAnimationFrame(loop);
        }

        window.addEventListener('resize', resize);

        // Initial setup
        resize();
        loop();

        // Spawn shooting stars periodically
        setInterval(spawnShootingStar, 3000);
    }

    // Confetti burst with more effects
    function createConfetti(container) {
        const confettiPieces = 100;
        const colors = ['#ff6b9a', '#ffb3cc', '#ffd6e8', '#ff9bb3', '#ffff00', '#ff69b4', '#00ffff', '#ff1493'];

        for (let i = 0; i < confettiPieces; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece active';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            piece.style.animationDuration = (2 + Math.random() * 2.5) + 's';
            piece.style.animationDelay = Math.random() * 0.6 + 's';
            piece.style.width = (5 + Math.random() * 12) + 'px';
            piece.style.height = piece.style.width;
            piece.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${piece.style.backgroundColor}`;
            container.appendChild(piece);

            setTimeout(() => piece.remove(), 5000);
        }
    }

    // Mouse trail effect
    function addMouseTrail() {
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.8) {
                const trail = document.createElement('div');
                trail.style.position = 'fixed';
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                trail.style.fontSize = (8 + Math.random() * 8) + 'px';
                trail.style.pointerEvents = 'none';
                trail.style.zIndex = '5';
                trail.textContent = '💕';
                trail.style.opacity = '0.7';
                trail.style.animation = 'trail-fade 1s ease-out forwards';
                document.body.appendChild(trail);
                setTimeout(() => trail.remove(), 1000);
            }
        });
    }

    // Floating particles effect
    function addFloatingParticles() {
        const particleContainer = document.body;
        const particleEmojis = ['✨', '💫', '⭐', '🌟'];

        setInterval(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '4';
            particle.style.fontSize = (6 + Math.random() * 14) + 'px';
            particle.textContent = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            particle.style.animation = `float-particle ${4 + Math.random() * 3}s ease-in forwards`;
            particleContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 7000);
        }, 800);
    }
})();
