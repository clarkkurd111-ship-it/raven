// Language Translations - Kurdish Sorani (ئۆکۆ) & English
const translations = {
    en: {
        // Header & Navigation
        nav_home: "Home",
        nav_challenges: "Challenges",
        nav_writeups: "Writeups",
        nav_forum: "Forum",
        nav_admin: "Admin",
        
        // Landing Page
        landing_title: "RAVEN",
        landing_subtitle: "created by dana namat",
        landing_what_is: "What is RAVEN?",
        landing_description: "RAVEN is a free platform to learn ethical hacking through real-world challenges. Test your security skills, compete with other hackers, and become a cybersecurity expert.",
        landing_beginner: "Whether you're a beginner or advanced, there's something for everyone.",
        
        landing_getting_started: "Getting Started (3 Steps)",
        landing_step1_title: "Step 1: Start Hacking",
        landing_step1_desc: "Click \"Enter CTF Platform\" below to start solving challenges immediately. No account needed to begin!",
        landing_step2_title: "Step 2: Create an Account (Optional)",
        landing_step2_desc: "Create an account to save your progress, join leaderboards, and earn badges. Register during CTF when ready.",
        landing_step3_title: "Step 3: Learn & Compete",
        landing_step3_desc: "Solve challenges, read writeups from others, join forums to discuss strategies, and see your rank on the leaderboard.",
        
        landing_choose_path: "Choose Your Path",
        landing_ctf: "CTF Challenges",
        landing_ctf_desc: "8 hacking challenges with increasing difficulty. Learn by doing!",
        landing_learn: "Learn More",
        landing_learn_desc: "Read writeups, join forum discussions, and learn from the community",
        landing_account: "My Account",
        landing_account_desc: "Manage your profile, security settings, and login history",
        landing_start_here: "Start Here",
        landing_explore: "Explore",
        landing_sign_in: "Sign In",
        
        landing_features: "Platform Features",
        feature_challenges: "Challenges - From SQL injection to buffer overflow",
        feature_leaderboards: "Leaderboards - Compete globally with other hackers",
        feature_achievements: "Achievements - Earn badges for solving challenges",
        feature_writeups: "Community Writeups - Learn from solution tutorials",
        feature_forum: "Forum - Discuss strategies and tips",
        feature_teams: "Teams - Collaborate with other hackers",
        feature_admin: "Admin Tools - Create custom challenges",
        feature_free: "100% Free - No payments, open for all",
        
        landing_faq: "Quick FAQ",
        faq_what_ctf: "What is a CTF Challenge?",
        faq_what_ctf_ans: "CTF (Capture The Flag) is a competition where you solve security puzzles to find hidden \"flags\" and gain points.",
        faq_experience: "Do I need experience?",
        faq_experience_ans: "No! Challenges range from beginner to expert. Start with easy ones and level up.",
        faq_legal: "Is this legal?",
        faq_legal_ans: "Yes! RAVEN is a legal learning platform. We teach ethical hacking skills in a controlled environment.",
        faq_help: "Can I get help?",
        faq_help_ans: "Absolutely! Check writeups, ask in the forum, or read hints within each challenge.",
        
        landing_ready: "Ready to Start?",
        landing_enter_ctf: "Enter CTF Platform",
        landing_no_signup: "No sign-up required. Start solving challenges now!",
        
        // CTF Page
        ctf_title: "RAVEN CTF",
        ctf_subtitle: "Solve Security Challenges & Learn Ethical Hacking",
        ctf_get_started: "Log In / Sign Up",
        ctf_browse: "Browse Challenges",
        ctf_tip: "Tip: You can try challenges without an account!",
        
        ctf_how_works: "How RAVEN Works",
        ctf_browse_challenge: "Browse a challenge and read the description",
        ctf_analyze: "Analyze the problem to find the vulnerability",
        ctf_find_flag: "Find the flag (usually a special code or phrase)",
        ctf_submit: "Submit the flag to earn points",
        ctf_compete: "Compete on the leaderboard and earn badges",
        
        ctf_available: "Start Here: Available Challenges",
        ctf_total_challenges: "Total Challenges",
        ctf_active_hackers: "Active Hackers",
        ctf_solved: "Challenges Solved",
        ctf_points: "Points Earned",
        
        // Writeups Page
        writeups_title: "Challenge Writeups & Solutions",
        writeups_subtitle: "Learn how other hackers solved challenges",
        writeups_share_solution: "Share Your Solution",
        writeups_what: "What Are Writeups?",
        writeups_what_desc: "Writeups are tutorials and walkthroughs written by community members explaining how they solved a challenge. They include hints, techniques, and step-by-step solutions. Great for learning new hacking methods!",
        writeups_write: "Write a Writeup",
        writeups_help_others: "Share your solution with the community and help others learn",
        writeups_select_challenge: "Select Challenge...",
        writeups_content: "Your writeup...",
        writeups_tags: "Tags (comma separated, e.g., sql, injection, database)",
        writeups_publish: "Publish Writeup",
        writeups_search: "Search writeups...",
        
        // Forum Page
        forum_title: "Community Forum",
        forum_start_discussion: "Start Discussion",
        forum_welcome: "Welcome to the Forum",
        forum_welcome_desc: "Ask questions, share tips, discuss hacking strategies, and connect with other hackers. Whether you're stuck on a challenge or want to share a clever technique, this is the place to discuss anything security-related!",
        forum_new_discussion: "Start New Discussion",
        forum_title_placeholder: "Discussion title (be specific!)",
        forum_message_placeholder: "Your message... (ask clearly, provide details)",
        forum_create: "Create Thread",
        forum_search: "Search discussions...",
        forum_all_categories: "All Categories",
        
        forum_general: "General Discussion",
        forum_help: "Help & Questions",
        forum_tips: "Tips & Tricks",
        forum_tools: "Tools & Resources",
        forum_bug: "Bug Reports",
        
        // Admin
        admin_title: "Admin Dashboard",
        admin_subtitle: "Manage challenges, users, tournaments, and view analytics. Only accessible to admins.",
        admin_dashboard: "Dashboard",
        admin_create_challenge: "Create Challenge",
        admin_manage_users: "Manage Users",
        admin_tournaments: "Tournaments",
        admin_analytics: "Analytics",
        admin_total_users: "Total Users",
        admin_total_challenges: "Total Challenges",
        admin_total_points: "Total Points Awarded",
        
        // Common
        lang_select: "Language",
        select_all_challenges: "All Challenges",
        login: "Login",
        register: "Register",
        logout: "Logout",
        btn_back_home: "Back Home",
    },
    
    ckb: {
        // Header & Navigation
        nav_home: "ماڵ",
        nav_challenges: "چالەنج",
        nav_writeups: "بڕواڕکاریی کات",
        nav_forum: "فۆرام",
        nav_admin: "بەڕێوەبەری",
        
        // Landing Page
        landing_title: "RAVEN",
        landing_subtitle: "داڕێژراوە لەلایەن دانا نەمەت",
        landing_what_is: "RAVEN چی یە؟",
        landing_description: "RAVEN پلاتفۆرمێکی بێ تێچونە جۆری خوێندنی هاکینگی ئینسانی لە ریگەی بۆچوونە جیهانی. تاقی کردنەوەی بリندەکانی ئایمنی خۆت، شتۆمگی لەگەڵ هاکەرانی تر و بووبوونەوە پسپۆڕێک لە ئایمنی کۆمپیوتەر.",
        landing_beginner: "ئێستا تو تازە یان پسپۆڕ بیت، شتێک هەیە بۆ هەموو یەک.",
        
        landing_getting_started: "دەستپێکردن (3 هەنگاو)",
        landing_step1_title: "هەنگاوی 1: دەستپێکردنی هاکینگ",
        landing_step1_desc: "کلیک بکە لەسەر \"چوونە ناو پلاتفۆرمی CTF\" بۆ دەستپێکردنی حەلکردنی چالەنج بێ دواتر. پێویستی هیچ هەژمار نیە بۆ دەستپێکردن!",
        landing_step2_title: "هەنگاوی 2: دروستکردنی هەژمار (بە تێچونی)",
        landing_step2_desc: "هەژماری دروست بکە بۆ پاشکێشکردنی پێشتاگی خۆت، بەشداری بوون لە تاختە پێوەندیکان، و بەدەستهێنانی نیشانە. تۆمار بکە لە کاتی CTF کاتێک بڕیاری لێت.",
        landing_step3_title: "هەنگاوی 3: فێربوون و شتۆمگی",
        landing_step3_desc: "حەل بکەوە چالەنج، بڕواڕکاریی خوێندنەوە بخوێنە، بەشداری لە فۆرام بکە بۆ قسەکردن، و بینی ڕۆلی خۆت لە تاختە پێوەندیکاندا.",
        
        landing_choose_path: "بژێرە ڕێگای خۆت",
        landing_ctf: "چالەنجی CTF",
        landing_ctf_desc: "8 چالەنجی هاکینگ بە ئاستی هەبوونەوە. فێر بووە بە کردنةوة!",
        landing_learn: "زیاتر فێربوون",
        landing_learn_desc: "بڕواڕکاریی خوێندنەوە بخوێنە، بەشداری لە قسەی فۆرام بکە، و لە کۆمەڵە فێر بوو",
        landing_account: "هەژمارەکەم",
        landing_account_desc: "بەڕێوەبەری پرۆفایلی خۆت، ڕێکخستنی ئایمنی، و مێژووی چوونە ناو",
        landing_start_here: "لێرە دەستپێ بکە",
        landing_explore: "گەڕاننەوە",
        landing_sign_in: "چوونە ناو",
        
        landing_features: "تایبەتمەندییە کۆکردەکان",
        feature_challenges: "چالەنج - لە SQL Injection بۆ Buffer Overflow",
        feature_leaderboards: "تاختە پێوەندیکان - شتۆمگی جیهانی لەگەڵ هاکەرانی تر",
        feature_achievements: "کۆتایی - بەدەستهێنانی نیشانە بۆ حەلکردنی چالەنج",
        feature_writeups: "بڕواڕکاریی کۆمەڵە - فێربوون لە تەشریحاتی حەلکردن",
        feature_forum: "فۆرام - قسەکردن هەمبەرە و بڕیاری",
        feature_teams: "تیمەکان - کاری پێکەوە لەگەڵ هاکەرانی تر",
        feature_admin: "ئامرازی بەڕێوەبەری - دروستکردنی چالەنجی تایبەت",
        feature_free: "بێ جاز - بێ پێش کلێبێن، کردابوو بۆ هەموو",
        
        landing_faq: "پرسیاری فیلی پشت",
        faq_what_ctf: "چالەنجی CTF چی یە؟",
        faq_what_ctf_ans: "CTF (Capture The Flag) شتۆمگیێکە کە تو حەل دەکەی بۆچوونە ئایمنی بۆ دۆزینەوەی \"نیشانە\" تێدا و بەدەستهێنانی پۆینت.",
        faq_experience: "پێویستم تێجۆری بێ؟",
        faq_experience_ans: "نا! چالەنج لە سادە بۆ پسپۆڕ. دەستپێ بکە بە سادە و بەرزتر بچۆ بەرەو سەرەوە.",
        faq_legal: "ایا ئەمە یاسایی یە؟",
        faq_legal_ans: "بەڵێ! RAVEN پلاتفۆرمێکی یاسایی فێربوونە. ئیمە تێجۆری هاکینگی ئینسانی فێر دەکەین لە ناو ناوچەی کۆنترۆڵ.",
        faq_help: "ئایا دەتوانم یارمەتی بگرم؟",
        faq_help_ans: "بیرکوڕ! تاقی بکە بڕواڕکاریی بخوێنە، لە فۆرام پرسیار بکە، یان تێبینی لە ناو هەر چالەنجێک بخوێنە.",
        
        landing_ready: "ئایا بۆ دەستپێکردن بڕیاری یە؟",
        landing_enter_ctf: "چوونە ناو پلاتفۆرمی CTF",
        landing_no_signup: "پێویستی ثبت نام نیە. دێن حەل کردنی چالەنج ئێستا!",
        
        // CTF Page
        ctf_title: "RAVEN CTF",
        ctf_subtitle: "حەلکردنی چالەنجی ئایمنی و فێربوونی هاکینگی ئینسانی",
        ctf_get_started: "چوونە ناو / آپل کردن",
        ctf_browse: "گەڕاننەوەی چالەنج",
        ctf_tip: "تێبینی: تو دەتوانی تاقی بکەیت چالەنج بێ هەژمار!",
        
        ctf_how_works: "چۆن RAVEN کار دەکات",
        ctf_browse_challenge: "گەڕاننەوەی چالەنج و خوێندنەوەی تێبینی",
        ctf_analyze: "شیکردنەوەی پێشکە بۆ دۆزینەوەی کاریگیری",
        ctf_find_flag: "دۆزینەوەی نیشانە (زۆربەی جار کۆدێک یان ملمانی تایبەت)",
        ctf_submit: "ناردنی نیشانە بۆ بەدەستهێنانی پۆینت",
        ctf_compete: "شتۆمگی لە تاختە پێوەندیکاندا و بەدەستهێنانی نیشانە",
        
        ctf_available: "لێرە دەستپێ بکە: چالەنجی دەڕچاو",
        ctf_total_challenges: "کۆی هەموو چالەنج",
        ctf_active_hackers: "هاکەری چالاک",
        ctf_solved: "چالەنجی حەل کراو",
        ctf_points: "پۆینتی بەدەستهاتو",
        
        // Writeups Page
        writeups_title: "بڕواڕکاریی چالەنج و حەلکردن",
        writeups_subtitle: "فێر بوو کۆمەڵە هاکەرەکان چۆن حەل کرد چالەنج",
        writeups_share_solution: "بانگهێشتی حەلکردنی خۆت",
        writeups_what: "بڕواڕکاریی چی یە؟",
        writeups_what_desc: "بڕواڕکاریی تێبینی و گێڕانی ڕێ نوسراون لە لایەن ئەندامانی کۆمەڵە کە تێبینی دەکەن کۆمەڵە چۆن حەل کرد چالەنج. ئەمانە تێبینی، تێجۆری، و هەنگاوی بە هەنگاو حەلکردنی تێدایە. زۆر باش بۆ فێربوونی تێجۆری نوێی هاکینگ!",
        writeups_write: "نوسینی بڕواڕکاریی",
        writeups_help_others: "بانگهێشتی حەلکردنی خۆت بۆ کۆمەڵە و یارمەتیدانی تیای فێربوون",
        writeups_select_challenge: "بژێرە چالەنج...",
        writeups_content: "بڕواڕکاریی خۆت...",
        writeups_tags: "تاگەکان (جیاکراوە بە کۆما، مثلاً: sql, injection, database)",
        writeups_publish: "بڵاوکردنەوەی بڕواڕکاریی",
        writeups_search: "گەڕاننەوەی بڕواڕکاریی...",
        
        // Forum Page
        forum_title: "فۆرامی کۆمەڵە",
        forum_start_discussion: "دەستپێکردنی قسە",
        forum_welcome: "بەخێربێن بۆ فۆرام",
        forum_welcome_desc: "پرسیار بکە، بڕیاری شەقیمەکان، قسە بکە هەمبەرە هاکینگی، و پەیوەندی بگرە بۆ هاکەرانی تر. ئێستا تو گڕفتاونی چالەنج یە یان دەتە بۆ بانگهێشتی تێجۆری تیاترَ، ئەمە جێی ئاست برای قسەکردنی هەموو شتێک دەرباری ئایمنی!",
        forum_new_discussion: "دەستپێکردنی قسەی نوێ",
        forum_title_placeholder: "ناونیشانی قسە (بە تایبەتی!)",
        forum_message_placeholder: "نامەی خۆت... (پرسیار بکە بە روون، تێبینی بدە)",
        forum_create: "دروستکردنی تایپ",
        forum_search: "گەڕاننەوەی قسە...",
        forum_all_categories: "هەموو کاتەگۆریدان",
        
        forum_general: "قسەی فیلی",
        forum_help: "یارمەتی و پرسیار",
        forum_tips: "تێبینی و بڕیاری",
        forum_tools: "ئامرازیه و ڕێچوو",
        forum_bug: "رێپۆرتی بوگ",
        
        // Admin
        admin_title: "داشبۆرדی بەڕێوەبەری",
        admin_subtitle: "بەڕێوەبەری چالەنج، ئەندامان، شتۆمگی، و بینینی گونجاندنی. تەنیا بۆ بەڕێوەبەریاندا دەستڕاپێی هەیە.",
        admin_dashboard: "داشبۆرד",
        admin_create_challenge: "دروستکردنی چالەنج",
        admin_manage_users: "بەڕێوەبەری ئەندامان",
        admin_tournaments: "شتۆمگی",
        admin_analytics: "شیکردنەوە",
        admin_total_users: "کۆی ئەندامان",
        admin_total_challenges: "کۆی چالەنج",
        admin_total_points: "کۆی پۆینتی پێدراو",
        
        // Common
        lang_select: "زمان",
        select_all_challenges: "هەموو چالەنج",
        login: "چوونە ناو",
        register: "تۆمار کردن",
        logout: "دەرچوون",
        btn_back_home: "گەڕانەوە بۆ ماڵ",
    }
};

// Set language in localStorage
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.dir = lang === 'ckb' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    setTimeout(() => applyTranslations(), 10);
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

// Translate text
function t(key) {
    const lang = getCurrentLanguage();
    return translations[lang]?.[key] || translations['en']?.[key] || key;
}

// Apply RTL/LTR on page load
document.addEventListener('DOMContentLoaded', function() {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ckb' ? 'rtl' : 'ltr';
    applyTranslations();
});

// Apply translations to the page
function applyTranslations() {
    const lang = getCurrentLanguage();
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translated = t(key);
        
        if (!translated || translated === key) return; // Skip if no translation found
        
        // Handle different element types
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translated;
        } else if (element.tagName === 'SELECT') {
            // For select dropdowns, update option text
            Array.from(element.options).forEach(option => {
                const optKey = option.getAttribute('data-translate-option');
                if (optKey) {
                    option.textContent = t(optKey);
                }
            });
        } else {
            // For other elements, check if there's wrapper HTML
            // If element only contains a span with data-translate, update just that
            const children = element.querySelectorAll('[data-translate]');
            if (children.length === 0) {
                // No child elements with data-translate, safe to update textContent
                element.textContent = translated;
            } else {
                // Has children with data-translate, don't modify
                element.textContent = translated;
            }
        }
    });
    
    // Update page title based on current page
    const pageTitles = {
        'en': {
            'index': 'RAVEN - Learn Ethical Hacking',
            'ctf': 'RAVEN CTF - Hacking Challenges',
            'writeups': 'RAVEN CTF - Challenge Writeups',
            'forum': 'RAVEN CTF - Community Forum',
            'admin': 'RAVEN CTF - Admin Dashboard'
        },
        'ckb': {
            'index': 'RAVEN - فێری هاکینگی ئینسانی',
            'ctf': 'RAVEN CTF - چالەنجی هاکینگ',
            'writeups': 'RAVEN CTF - بڕواڕکاریی چالەنج',
            'forum': 'RAVEN CTF - فۆرامی کۆمەڵە',
            'admin': 'RAVEN CTF - داشبۆردی بەڕێوەبەری'
        }
    };
    
    // Determine current page
    let currentPage = 'index';
    if (window.location.pathname.includes('ctf.html')) currentPage = 'ctf';
    else if (window.location.pathname.includes('writeups.html')) currentPage = 'writeups';
    else if (window.location.pathname.includes('forum.html')) currentPage = 'forum';
    else if (window.location.pathname.includes('admin.html')) currentPage = 'admin';
    
    const titleKey = pageTitles[lang] ? pageTitles[lang][currentPage] : pageTitles['en'][currentPage];
    if (titleKey) document.title = titleKey;
    
    // Update language button active state
    const btnEn = document.getElementById('langEnBtn');
    const btnCkb = document.getElementById('langCkbBtn');
    
    if (btnEn && btnCkb) {
        btnEn.classList.remove('active');
        btnCkb.classList.remove('active');
        if (lang === 'ckb') {
            btnCkb.classList.add('active');
        } else {
            btnEn.classList.add('active');
        }
    }
}

// Override setLanguage to apply translations
window.setLanguage = function(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.dir = lang === 'ckb' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    setTimeout(() => applyTranslations(), 10);
};

// Apply translations on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
} else {
    // DOM is already loaded
    setTimeout(() => applyTranslations(), 100);
}
