// Skill Details Data Registry
const skillDetailsData = {
    'programming': {
        title: 'Programming — Python & C Language',
        icon: 'fa-code',
        color: 'text-cyan-400',
        topics: [
            'Python Syntax, Control Flow, and Functions',
            'Object-Oriented Programming (Classes, Inheritance)',
            'C Language Basics (Pointers, Memory Allocations)',
            'Data Structures Basics (Arrays, Linked Lists, Stacks)'
        ],
        projects: [
            'Security Log Analyzer',
            'Stock Portfolio Tracker',
            'Tic-Tac-Toe Game'
        ],
        pdfs: [
            { name: 'Python_Cybersecurity_Notes.pdf', size: '2.4 MB' },
            { name: 'C_Programming_Fundamentals.pdf', size: '1.8 MB' }
        ]
    },
    'linux': {
        title: 'Linux & Security Tools',
        icon: 'fa-linux',
        color: 'text-purple-400',
        topics: [
            'Linux File System Navigation and Permissions',
            'Bash Command Line Utilities & Shell Scripting',
            'Git & GitHub Version Control Workflows',
            'WSL Configuration and PowerShell Scripts'
        ],
        projects: [
            'Python Security Log Analyzer',
            'Automation Project Scripts'
        ],
        pdfs: [
            { name: 'Linux_Command_CheatSheet.pdf', size: '3.1 MB' }
        ]
    },
    'networking': {
        title: 'Networking Concepts',
        icon: 'fa-network-wired',
        color: 'text-pink-400',
        topics: [
            'OSI Model & TCP/IP Stack Operations',
            'DNS Resolution & DHCP IP Assignment',
            'HTTP / HTTPS Web Traffic Protocol Analysis',
            'Subnetting & Port Security Basics'
        ],
        projects: [
            'DRIVE-X AI/ML Navigation System',
            'Security Log Analyzer'
        ],
        pdfs: [
            { name: 'Networking_Protocols_Handbook.pdf', size: '4.2 MB' }
        ]
    },
    'python-libs': {
        title: 'Python Data Libraries',
        icon: 'fa-python',
        color: 'text-amber-400',
        topics: [
            'NumPy Multi-Dimensional Array Calculations',
            'Pandas DataFrames, Log Parsing & Filtering',
            'Matplotlib Data Graphs & Visual Attack Plots'
        ],
        projects: [
            'Python Security Log Analyzer',
            'Stock Portfolio Tracker'
        ],
        pdfs: [
            { name: 'Pandas_Matplotlib_Guide.pdf', size: '2.7 MB' }
        ]
    },
    'cyber-basics': {
        title: 'Cybersecurity & Log Security',
        icon: 'fa-shield-halved',
        color: 'text-emerald-400',
        topics: [
            'Log Analysis and Anomaly Pattern Detection',
            'Vulnerability Identification & Risk Audits',
            'Brute-Force Threat Auditing'
        ],
        projects: [
            'Security Log Analyzer',
            'Python Security Log Analyzer'
        ],
        pdfs: [
            { name: 'Cybersecurity_Fundamentals.pdf', size: '3.5 MB' }
        ]
    },
    'softskills': {
        title: 'Problem Solving & Teamwork',
        icon: 'fa-brain',
        color: 'text-indigo-400',
        topics: [
            'Logical Problem-Solving Frameworks',
            'Team Participation in Hackathons (SIH 2026)',
            'Technical Communication & Documentation'
        ],
        projects: [
            'DRIVE-X – AI/ML Navigation System (SIH 2026)'
        ],
        pdfs: [
            { name: 'Problem_Solving_Frameworks.pdf', size: '1.2 MB' }
        ]
    }
};

let currentActiveSkill = 'programming';
let currentModalTab = 'topics';

// Single-page Tab Switcher
function showTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(sec => sec.classList.add('hidden'));

    const targetSection = document.getElementById(`section-${tabName}`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active', 'text-cyan-400', 'light:text-indigo-600'));

    const activeBtn = document.getElementById(`nav-${tabName}`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'text-cyan-400', 'light:text-indigo-600');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Active Nav Link Highlighter for Multi-page Setup
function highlightActiveNav() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    const pageMap = {
        "index.html": "home",
        "about.html": "about",
        "skills.html": "skills",
        "certificates.html": "certificates",
        "projects.html": "projects",
        "contact.html": "contact"
    };

    const currentTab = pageMap[page] || "home";
    const activeBtn = document.getElementById(`nav-${currentTab}`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'text-cyan-400', 'light:text-indigo-600');
    }
}

// Theme Switcher (Dark Mode vs Vibrant Bright Mode)
function toggleTheme() {
    const body = document.getElementById('bodyElement');
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');

    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        body.classList.remove('bg-slate-950', 'text-slate-100');
        body.classList.add('bright-mode-bg', 'text-slate-900');
        
        if (icon) icon.className = 'fa-solid fa-moon text-indigo-600 text-sm';
        if (label) label.innerText = 'Vibrant Dark';
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        body.classList.remove('bright-mode-bg', 'text-slate-900');
        body.classList.add('bg-slate-950', 'text-slate-100');

        if (icon) icon.className = 'fa-solid fa-sun text-yellow-400 text-sm';
        if (label) label.innerText = 'Glowing Bright';
    }
}

// Mobile Menu Drawer Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('hidden');
}

// Skill Modal Actions
function openSkillModal(skillKey) {
    currentActiveSkill = skillKey;
    currentModalTab = 'topics';
    renderModalContent();
    const modal = document.getElementById('skillModal');
    if (modal) modal.classList.remove('hidden');
}

function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    if (modal) modal.classList.add('hidden');
}

function switchModalTab(tabKey) {
    currentModalTab = tabKey;
    ['topics', 'projects', 'pdfs'].forEach(k => {
        const btn = document.getElementById(`mTab-${k}`);
        if (btn) {
            if (k === tabKey) {
                btn.className = 'pb-2 text-cyan-400 border-b-2 border-cyan-400 font-extrabold';
            } else {
                btn.className = 'pb-2 text-slate-400 font-bold';
            }
        }
    });
    renderModalBody();
}

function renderModalContent() {
    const data = skillDetailsData[currentActiveSkill];
    const header = document.getElementById('modalHeader');
    if (!header || !data) return;

    header.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="text-3xl ${data.color}"><i class="fa-solid ${data.icon}"></i></span>
            <div>
                <h3 class="text-2xl font-bold font-display text-slate-100 light:text-slate-900">${data.title}</h3>
                <p class="text-xs text-slate-400 font-mono">Detailed Learning Roadmap & Practical Applications</p>
            </div>
        </div>
    `;
    switchModalTab('topics');
}

function renderModalBody() {
    const data = skillDetailsData[currentActiveSkill];
    const body = document.getElementById('modalBody');
    if (!body || !data) return;

    if (currentModalTab === 'topics') {
        body.innerHTML = `
            <h4 class="text-xs font-mono font-bold text-cyan-400 uppercase">Topics Learnt & Core Concepts</h4>
            <ul class="space-y-2 mt-2">
                ${data.topics.map(t => `
                    <li class="flex items-start gap-2 text-sm text-slate-300 light:text-slate-700">
                        <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs"></i>
                        <span>${t}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    } else if (currentModalTab === 'projects') {
        body.innerHTML = `
            <h4 class="text-xs font-mono font-bold text-cyan-400 uppercase">Related Projects</h4>
            <div class="space-y-2 mt-2">
                ${data.projects.map(p => `
                    <div class="p-3 rounded-xl bg-slate-800 light:bg-slate-100 text-sm font-bold flex items-center justify-between">
                        <span class="text-slate-200 light:text-slate-800"><i class="fa-solid fa-code text-cyan-400 mr-2"></i> ${p}</span>
                        <a href="projects.html" class="text-xs text-cyan-400 light:text-indigo-600 hover:underline">View Projects →</a>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (currentModalTab === 'pdfs') {
        body.innerHTML = `
            <h4 class="text-xs font-mono font-bold text-cyan-400 uppercase">Available Notes & Attachments</h4>
            <div class="space-y-3 mt-2">
                ${data.pdfs.map(pdf => `
                    <div class="p-3.5 rounded-2xl bg-slate-800 light:bg-slate-100 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-file-pdf text-rose-500 text-2xl"></i>
                            <div>
                                <h5 class="text-xs font-bold text-slate-200 light:text-slate-800">${pdf.name}</h5>
                                <span class="text-[10px] text-slate-400 font-mono">${pdf.size}</span>
                            </div>
                        </div>
                        <button onclick="alert('Downloading ${pdf.name}')" class="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400">
                            Download
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Project Category Filter Logic
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    
    ['all', 'cyber', 'aiml', 'python'].forEach(c => {
        const btn = document.getElementById(`btn-filter-${c}`);
        if (btn) {
            if (c === category) {
                btn.className = 'px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs shadow-lg transition-all';
            } else {
                btn.className = 'px-5 py-2 rounded-xl bg-slate-900 light:bg-slate-200 text-slate-300 light:text-slate-700 font-bold text-xs hover:text-cyan-400 transition-all';
            }
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Copy to Clipboard Action
function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Copied to clipboard: ' + text);
}

// Certificate Document Preview Action
function openCertPreview(certTitle) {
    alert('Opening Certificate Viewer for: ' + certTitle);
}

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
});