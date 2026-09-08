// Translations
const translations = {
    fr: {
        greeting: "Bienvenue !",
        staticIntro: "Je suis",
        typedItems: [
            "ingénieur cybersécurité chez Thales en apprentissage."
        ],
        intro2: "Je recherche un stage à l’étranger de 3 mois, de juin à septembre.",
        scrollHint: "Défiler",
        download: "Télécharger mon CV",
        navHome: "Accueil",
        navSkills: "Compétences",
        navCertifications: "Certifications",
        navExperience: "Expériences",
        navProjects: "Projets",
        navContact: "Contact",
        contact: "Contact",
        footer: "Conçu par Timothée BLAUDIN DE THÉ.",
        experienceTitle: "Parcours & Expériences",
        skillsTitle: "Compétences",
        projectsTitle: "Projets",
        certificationsTitle: "Certifications",
        contactTitle: "Contact",
        skills: {
            techTitle: "🛠️ Compétences Techniques",
            softTitle: "🧠 Savoir-être",
            langTitle: "🌍 Langues",
            tech: [
                "Sécurité des systèmes embarqués", "Tests d'intrusion (Web)", "Sécurité réseau",
                "Cloud Security (AWS)", "Zero Trust", "Frameworks MITRE", "Analyse de logs (SIEM)",
                "Audit de conformité (Windows)", "Python", "Bash", "SQL", "Docker & Nginx",
                "Burp Suite", "Cryptographie & Hachage"
            ],
            soft: [
                "Persévérance", "Curiosité technique", "Gestion de projet", "Capacité d'adaptation",
                "Autonomie & Rigueur"
            ],
            lang: [
                "Français (natif)", "Anglais (TOEIC 975/990)"
            ]
        },
        certifications: {
            cert1: ["• Maîtrise des principes essentiels de la cybersécurité.", "• Gestion des incidents et protection des données."],
            cert2: ["• EC2, S3, IAM, VPC et bonnes pratiques cloud."],
            cert3: ["• Menaces courantes, gestion des accès, SIEM (Linux, SQL)."],
            cert4: ["Validation d’un niveau C1 en anglais professionnel."]
        },
        experience: {
            categories: {
                work: "Expérience professionnelle",
                education: "Formation",
                volunteering: "Bénévolat",
                awards: "Honneurs et récompenses"
            },
            work: [
                {
                    role: "Apprenti Ingénieur Cybersécurité",
                    company: "Thales",
                    date: "2026 - Présent",
                    logo: "logos/thales.jpg",
                    fillLogo: true,
                    desc: ["Participation à des projets complexes.", "Scripting pour le test de logiciels sur systèmes embarqués."]
                },
                {
                    role: "Stagiaire",
                    company: "Anolix",
                    date: "2025",
                    logo: "logos/anolix.jpg",
                    fillLogo: true,
                    desc: ["Gestion de stocks (Excel, Sage).", "Pentest : 2 tests d’intrusion web internes.", "Conception de logigrammes logistiques."]
                },
                {
                    role: "Stagiaire",
                    company: "Spinelle",
                    date: "2021",
                    logo: "logos/spinelle.jpg",
                    fillLogo: false,
                    desc: ["Création de produits de luxe avec une gemmologue."]
                }
            ],
            education: [
                {
                    role: "Master Ingénierie des Réseaux et des Systèmes",
                    school: "Université Paris-Saclay",
                    date: "2030",
                    logo: "logos/saclay.png",
                    fillLogo: false,
                    desc: "Spécialisation dans les réseaux complexes et la sécurité.",
                    active: false
                },
                {
                    role: "Diplôme d'ingénieur",
                    school: "ESAIP",
                    date: "2024–2029",
                    logo: "logos/esaip.jpg",
                    fillLogo: true,
                    desc: "Spécialisation Cybersécurité et Réseaux",
                    active: true
                },
                {
                    role: "Summer Sessions",
                    school: "UC Berkeley",
                    date: "2026",
                    logo: "logos/berkeley.png",
                    fillLogo: true,
                    desc: "Validation de COMPSCI 161 et COMPSCI 61A",
                    active: true
                }
            ],
            volunteering: [
                {
                    role: "Engagement associatif",
                    company: "Terre de promesse",
                    date: "2022",
                    logo: "logos/tdp.jpg",
                    fillLogo: false,
                    desc: ["Construction d’une maison en bois pour réinsertion."]
                }
            ],
            awards: [
                {
                    role: "Médaille d’Or Concours Lépine Jr",
                    company: "Concours Lépine",
                    date: "2021",
                    logo: "logos/lepine.png",
                    fillLogo: false,
                    desc: ["Invention de l’Autorideau (rideau automatique) : système à base d'Arduino connecté à un moteur, des pièces imprimées en 3D et une structure en bois montée sur une tringle de rideau. Permet d'ouvrir et de fermer automatiquement un rideau à des heures programmables, résistant aux pannes de courant et s'adaptant aux changements d'heure."]
                }
            ]
        },
        projects: {
            proj1: {
                title: "Système de Partage de Fichiers Sécurisé",
                desc: "Projet CS 161 (UC Berkeley) - Stockage chiffré de bout en bout",
                list: [
                    "Conception et implémentation d'un système de stockage et de partage de fichiers chiffré de bout en bout en Go.",
                    "Authentification utilisateur sécurisée et stockage confidentiel sur serveur non fiable.",
                    "Contrôle d'accès cryptographique pour le partage et la révocation de fichiers."
                ]
            },
            proj2: {
                title: "Serveur Linux",
                desc: "Administration d'un serveur Ubuntu pour mes projets.",
                list: [
                    "Stack : Ubuntu Server, Docker, Nginx, SSH, Bash.",
                    "Hébergement de sites web, d'API et de scripts personnels.",
                    "Apprentissage des systèmes Linux et automatisation."
                ]
            },
            proj3: {
                title: "Hashly",
                desc: "App décryptage hashs",
                list: [
                    "Projet universitaire qui détecte automatiquement l'algorithme de hashing d'un hash donné, qui propose une méthode adaptée de cracking et génère une commande prête à l'emploi pour Hashcat."
                ]
            },
            proj4: {
                title: "Weather Bot",
                desc: "Bot météo Discord",
                list: [
                    "Stack : Python, OpenWeatherMap, Telegram API.",
                    "Prévisions météo personnalisées.",
                    "Gestion fuseaux horaires."
                ]
            }
        }
    },
    en: {
        greeting: "Welcome!",
        staticIntro: "I am",
        typedItems: [
            "an apprentice Cybersecurity Engineer at Thales.",
        ],
        intro2: "I am looking for a 3-month internship abroad, from June to September.",
        scrollHint: "Scroll",
        download: "Download my Resume",
        navHome: "Home",
        navSkills: "Skills",
        navCertifications: "Certifications",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",
        contact: "Contact",
        footer: "Designed by Timothée BLAUDIN DE THÉ.",
        experienceTitle: "Career & Experience",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        certificationsTitle: "Certifications",
        contactTitle: "Contact",
        skills: {
            techTitle: "🛠️ Technical Skills",
            softTitle: "🧠 Soft Skills",
            langTitle: "🌍 Languages",
            tech: [
                "Embedded Systems Security", "Web Pentesting", "Network Security",
                "Cloud Security (AWS)", "Zero Trust", "MITRE Frameworks", "Log Analysis (SIEM)",
                "Compliance Auditing (Windows)", "Python", "Bash", "SQL", "Docker & Nginx",
                "Burp Suite", "Cryptography & Hashing"
            ],
            soft: [
                "Persistence", "Technical Curiosity", "Project Management", "Adaptability",
                "Autonomy & Rigor"
            ],
            lang: [
                "French (Native)", "English (TOEIC 975/990)"
            ]
        },
        certifications: {
            cert1: ["• Mastery of essential cybersecurity principles.", "• Incident management and data protection."],
            cert2: ["• EC2, S3, IAM, VPC, and cloud best practices."],
            cert3: ["• Common threats, access management, SIEM (Linux, SQL)."],
            cert4: ["Validation of C1 level in professional English."]
        },
        experience: {
            categories: {
                work: "Work Experience",
                education: "Education",
                volunteering: "Volunteering",
                awards: "Honors & Awards"
            },
            work: [
                {
                    role: "Cybersecurity Engineer Apprentice",
                    company: "Thales",
                    date: "2026 - Present",
                    logo: "logos/thales.jpg",
                    fillLogo: true,
                    desc: ["Involvement in complex projects.", "Scripting for software testing in embedded systems."]
                },
                {
                    role: "Intern",
                    company: "Anolix",
                    date: "2025",
                    logo: "logos/anolix.jpg",
                    fillLogo: true,
                    desc: ["Inventory management (Excel, Sage).", "Pentest: 2 internal web intrusion tests.", "Design of logistics flowcharts."]
                },
                {
                    role: "Intern",
                    company: "Spinelle",
                    date: "2021",
                    logo: "logos/spinelle.jpg",
                    fillLogo: false,
                    desc: ["Creation of luxury products with a gemologist."]
                }
            ],
            education: [
                {
                    role: "Master of Science",
                    school: "Université Paris-Saclay",
                    date: "2030",
                    logo: "logos/saclay.png",
                    fillLogo: false,
                    desc: "Specialization in complex networks and security.",
                    active: false
                },
                {
                    role: "Engineering Degree",
                    school: "ESAIP",
                    date: "2024–2029",
                    logo: "logos/esaip.jpg",
                    fillLogo: true,
                    desc: "Specialization in Cybersecurity and Networks",
                    active: true
                },
                {
                    role: "Summer Sessions",
                    school: "UC Berkeley",
                    date: "2026",
                    logo: "logos/berkeley.png",
                    fillLogo: true,
                    desc: "Passed COMPSCI 161 and COMPSCI 61A",
                    active: true
                }
            ],
            volunteering: [
                {
                    role: "Volunteer Engagement",
                    company: "Terre de promesse",
                    date: "2022",
                    logo: "logos/tdp.jpg",
                    fillLogo: false,
                    desc: ["Construction of a wooden house for reintegration."]
                }
            ],
            awards: [
                {
                    role: "Gold Medal Lépine Jr Contest",
                    company: "Concours Lépine",
                    date: "2021",
                    logo: "logos/lepine.png",
                    fillLogo: false,
                    desc: ["Invention of the 'Autorideau' (automatic curtain): Arduino-based system connected to a motor, 3D printed parts, and a wooden structure mounted on a curtain rod. Enables automatic opening and closing of a curtain at programmable times, resilient to power outages and adapting to timezone/hour changes."]
                }
            ]
        },
        projects: {
            proj1: {
                title: "Secure File Sharing System",
                desc: "CS 161 Project (UC Berkeley) - End-to-end encrypted storage",
                list: [
                    "Design and implementation of an end-to-end encrypted file sharing and storage system in Go.",
                    "Secure user authentication and confidential storage on untrusted servers.",
                    "Cryptographic access control for file sharing and revocation."
                ]
            },
            proj2: {
                title: "Linux Server",
                desc: "Administration of an Ubuntu server to host my projects.",
                list: [
                    "Stack: Ubuntu Server, Docker, Nginx, SSH, Bash.",
                    "Hosting websites, APIs, and personal automation scripts.",
                    "Learning Linux administration and system automation."
                ]
            },
            proj3: {
                title: "Hashly",
                desc: "Hash Decryption App",
                list: [
                    "University project that automatically detects the hashing algorithm of a given hash, proposes a suitable cracking method, and generates a ready-to-use command for Hashcat."
                ]
            },
            proj4: {
                title: "Weather Bot",
                desc: "Discord Weather Bot",
                list: [
                    "Stack: Python, OpenWeatherMap, Telegram API.",
                    "Personalized weather forecasts.",
                    "Time zone management."
                ]
            }
        }
    }
};

// State
let currentLang = 'en';
let typed;

// DOM Elements
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('nav a');
const themeBtn = document.getElementById('theme-toggle');

// Functions
function showSection(id) {
    if (id === 'home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return;
    }
    const target = document.getElementById(id);
    if (target) {
        const headerOffset = 70; // Header height
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ScrollSpy: Update active nav links based on current scroll position
function updateActiveNavLink() {
    let current = 'home';
    const headerOffset = 100; // offset threshold

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - headerOffset)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const id = href === '#' ? 'home' : href.replace('#', '');
        if (id === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById('scroll-progress');
function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('back-to-top');
function updateBackToTop() {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}
window.addEventListener('scroll', updateBackToTop, { passive: true });
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SCROLL REVEAL OBSERVER =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

function initRevealObserver() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark');
    const btn = document.querySelector('button[onclick="toggleTheme()"]');
    if (btn) btn.textContent = isDark ? '☀️' : '🌓';
}

function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    switchLang(newLang);
}

function initTyped(strings) {
    if (typed) {
        typed.destroy();
    }
    typed = new Typed('#typed', {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: false,
        cursorChar: '|',
        onComplete: function (self) { self.cursor.remove() }
    });
}

function switchLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update Flag Icon
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        // If current lang is FR, show EN flag (to switch to) ?? Or show current?
        // User asked for "emoji qui switch dans anglais a français", usually implies a toggle. 
        // If I am in FR, I see a flag that suggests "Change to EN"? Or "Current is FR"?
        // Standard is often showing the *current* or the *target*.
        // Let's go with showing the *target* language flag, or a static globe?
        // User said: "juste l'émoji qui switch dans anglais a français"
        // Let's implement: if FR, show UK flag. If EN, show FR flag.
        langBtn.textContent = lang === 'fr' ? '🇺🇸 / 🇬🇧' : '🇫🇷';
        langBtn.title = lang === 'fr' ? 'Switch to English' : 'Passer en Français';
    }

    // Update simple text elements
    setText('greeting', t.greeting);
    setText('static-intro', t.staticIntro);
    initTyped(t.typedItems);
    setHTML('intro2', t.intro2);
    setText('scroll-hint-text', t.scrollHint);
    setText('download-btn', t.download);
    setText('contact-download-btn', t.download); // Secondary button

    // Dynamic CV download links based on language
    const resumePath = lang === 'fr' ? 'resume-timothee-BLAUDINDETHE.pdf' : 'resume-timothee-BLAUDINDETHE-english.pdf';
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.setAttribute('href', resumePath);
    }
    const contactDownloadBtn = document.getElementById('contact-download-btn');
    if (contactDownloadBtn) {
        contactDownloadBtn.setAttribute('href', resumePath);
    }

    // Update Section Titles
    setText('skills-title', t.skillsTitle);
    setText('projects-title', t.projectsTitle);
    setText('certifications-title', t.certificationsTitle);
    setText('experience-title', t.experienceTitle);
    setText('contact-title', t.contactTitle);

    // Update Nav
    const navKeys = ['navHome', 'navExperience', 'navCertifications', 'navProjects', 'navSkills', 'navContact'];
    const navIds = ['nav-home', 'nav-experience', 'nav-certifications', 'nav-projects', 'nav-skills', 'nav-contact'];

    navIds.forEach((id, index) => {
        setText(id, t[navKeys[index]]);
    });

    // Update Footer
    setText('footer-text', '');
    const footerEl = document.getElementById('footer-text');
    if (footerEl) {
        footerEl.innerHTML = `Conçu par <strong>Timothée BLAUDIN DE THÉ</strong> · 2025`;
        if (lang === 'en') footerEl.innerHTML = `Designed by <strong>Timothée BLAUDIN DE THÉ</strong> · 2025`;
    }

    // Update Skills
    setText('tech-skills-title', t.skills.techTitle);
    setText('soft-skills-title', t.skills.softTitle);
    setText('lang-skills-title', t.skills.langTitle);

    updateList('tech-skills-list', t.skills.tech);
    updateList('soft-skills-list', t.skills.soft);
    updateList('lang-skills-list', t.skills.lang);

    // Update Certifications
    setText('cert-1-desc-1', t.certifications.cert1[0]);
    setText('cert-1-desc-2', t.certifications.cert1[1]);
    setText('cert-2-desc-1', t.certifications.cert2[0]);
    setText('cert-3-desc-1', t.certifications.cert3[0]);
    setText('cert-4-desc-1', t.certifications.cert4[0]);

    // Update Category Headers
    setText('exp-category-work', t.experience.categories.work);
    setText('exp-category-education', t.experience.categories.education);
    setText('exp-category-volunteering', t.experience.categories.volunteering);
    setText('exp-category-awards', t.experience.categories.awards);

    // Render lists
    renderExperienceList('experience-work-list', t.experience.work);
    renderExperienceList('experience-education-list', t.experience.education);
    renderExperienceList('experience-volunteering-list', t.experience.volunteering);
    renderExperienceList('experience-awards-list', t.experience.awards);

    // Update Projects
    for (let i = 1; i <= 4; i++) {
        const proj = t.projects[`proj${i}`];
        setText(`proj-${i}-title`, proj.title);
        setText(`proj-${i}-desc`, proj.desc);
        proj.list.forEach((line, idx) => {
            setText(`proj-${i}-li-${idx + 1}`, line);
        });
    }
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Theme: default to dark on first visit, and always apply stored theme
    try {
        let savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            // no saved theme -> default to dark and remember it
            savedTheme = 'dark';
            localStorage.setItem('theme', 'dark');
            localStorage.setItem('visited_before', '1');
        }
        document.body.classList.toggle('dark', savedTheme === 'dark');
    } catch (e) {
        // ignore storage errors
    }
    updateThemeIcon();

    // Init Typed
    if (translations[currentLang] && translations[currentLang].typedItems) {
        initTyped(translations[currentLang].typedItems);
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            const isActive = navUl.classList.contains('active');
            menuToggle.textContent = isActive ? '✕' : '☰';
            menuToggle.setAttribute('aria-expanded', isActive);
        });
    }

    // Navigation Click Handling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const id = href === '#' ? 'home' : href.replace('#', '');
            showSection(id);

            // Close mobile menu
            if (navUl && navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                if (menuToggle) {
                    menuToggle.textContent = '☰';
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Avatar / Thales logo click -> Smooth scroll to experience section
    const avatarWrapper = document.querySelector('.hero-avatar-wrapper');
    if (avatarWrapper) {
        avatarWrapper.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('experience');
        });
    }

    // Force initial render of skills
    switchLang(currentLang);

    // Set correct active nav link on page load based on scroll position
    updateActiveNavLink();

    // Add reveal classes to cards & section headings
    document.querySelectorAll('.card, .linkedin-card, .cert-card, .project-card').forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 2 === 1) el.classList.add(`reveal-delay-${Math.min(i % 4 + 1, 4)}`);
    });
    document.querySelectorAll('section h2').forEach(el => el.classList.add('reveal'));
    initRevealObserver();

    // Initial scroll states
    updateScrollProgress();
    updateBackToTop();
});

// Helper: Update UL list
function updateList(id, items) {
    const ul = document.getElementById(id);
    if (ul) {
        ul.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }
}

// Helper: Render LinkedIn-style lists dynamically
function renderExperienceList(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    // Filter active items
    const activeItems = items.filter(item => item.active !== false);

    if (activeItems.length === 0) {
        // Hide the card if no active items
        const card = container.closest('.linkedin-card');
        if (card) card.style.display = 'none';
        return;
    } else {
        const card = container.closest('.linkedin-card');
        if (card) card.style.display = 'block';
    }

    activeItems.forEach((item, idx) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'linkedin-item';

        // Logo Column
        const logoCol = document.createElement('div');
        logoCol.className = 'linkedin-logo-col';

        const img = document.createElement('img');
        img.src = item.logo;
        img.alt = `${item.company || item.school} Logo`;
        img.className = 'linkedin-item-logo';
        if (item.fillLogo) {
            img.classList.add('fill-logo');
        }
        logoCol.appendChild(img);

        // Content Column
        const contentCol = document.createElement('div');
        contentCol.className = 'linkedin-content-col';

        const roleEl = document.createElement('h4');
        roleEl.className = 'linkedin-item-role';
        roleEl.textContent = item.school ? item.school : item.role;
        contentCol.appendChild(roleEl);

        const orgEl = document.createElement('span');
        orgEl.className = 'linkedin-item-org';
        orgEl.textContent = item.school ? item.role : item.company;
        contentCol.appendChild(orgEl);

        const dateEl = document.createElement('span');
        dateEl.className = 'linkedin-item-date';
        dateEl.textContent = item.date;
        contentCol.appendChild(dateEl);

        if (item.desc) {
            const descEl = document.createElement('div');
            descEl.className = 'linkedin-item-desc';
            if (Array.isArray(item.desc)) {
                const ul = document.createElement('ul');
                item.desc.forEach(line => {
                    const li = document.createElement('li');
                    li.textContent = line;
                    ul.appendChild(li);
                });
                descEl.appendChild(ul);
            } else {
                const p = document.createElement('p');
                p.textContent = item.desc;
                descEl.appendChild(p);
            }
            contentCol.appendChild(descEl);
        }

        itemEl.appendChild(logoCol);
        itemEl.appendChild(contentCol);

        container.appendChild(itemEl);

        // Add a divider line between items (not after the last one)
        if (idx < activeItems.length - 1) {
            const divider = document.createElement('hr');
            divider.className = 'linkedin-divider';
            container.appendChild(divider);
        }
    });
}
