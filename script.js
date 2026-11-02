/**
 * Academic & Scientific Portfolio Script
 * Timothée Blaudin de Thé
 */

const translations = {
  en: {
    metaTitle: "Timothée Blaudin de Thé",
    metaDesc: "Personal and academic homepage of Timothée Blaudin de Thé - Cybersecurity Engineer Apprentice at Thales, engineering student at ESAIP, UC Berkeley Summer Sessions.",
    siteTitle: "Timothée Blaudin de Thé",
    sidebar: {
      bio: "Cybersecurity Engineer Apprentice @ Thales",
      location: "France",
      cvText: "Curriculum Vitae (PDF)",
      cvFile: "resume-timothee-BLAUDINDETHE-english.pdf"
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      projects: "Projects",
      volunteering: "Volunteering",
      contact: "Contact"
    },
    about: {
      paragraphs: [
        "Welcome to my homepage. I am an apprentice Cybersecurity Engineer at <strong>Thales</strong> and an engineering student at <strong>ESAIP</strong> (Cybersecurity & Networks major).",
        "I also completed Computer Security (COMPSCI 161) and Computer Programs Structure (COMPSCI 61A) at <strong>UC Berkeley</strong> during Summer Sessions.",
        "I am deeply interested in academic and applied research in cybersecurity, focusing particularly on network security, web and internet security, and resilient architectures rather than embedded systems."
      ],
      notice: "<strong>Internship Search:</strong> I am actively seeking a 3-month internship from <strong>June to September</strong>."
    },
    sectionTitles: {
      experience: "Work Experience",
      education: "Education",
      certifications: "Certifications & Honors",
      projects: "Projects",
      volunteering: "Volunteer Work",
      contact: "Contact"
    },
    experience: [
      {
        role: "Cybersecurity Engineer Apprentice",
        org: "Thales",
        date: "2026 - Present",
        logo: "logos/thales.jpg",
        desc: [
          "Security vulnerability analysis on embedded systems using test suites.",
          "Development of cybersecurity tools for IVVQ teams."
        ]
      },
      {
        role: "Cybersecurity & Logistics Intern",
        org: "Anolix",
        date: "2025",
        logo: "logos/anolix.jpg",
        desc: [
          "Conducted 2 internal web penetration tests.",
          "Inventory and supply-chain management using Sage and Excel; design of logistics flowcharts."
        ]
      },
      {
        role: "Intern",
        org: "Spinelle",
        date: "2021",
        logo: "logos/spinelle.jpg",
        logoClass: "logo-contain-small",
        desc: [
          "Collaborated with a gemologist in high-end luxury jewelry design and craftsmanship."
        ]
      }
    ],
    education: [
      {
        degree: "Master's Degree in Cybersecurity & Networks Engineering",
        school: "ESAIP School of Engineers",
        date: "2024 - 2029",
        logo: "logos/esaip.jpg",
        desc: "CTI-accredited engineering program covering applied cryptography, network architectures, malware analysis, reverse engineering, and cyber governance."
      },
      {
        degree: "Summer Sessions",
        school: "UC Berkeley",
        date: "2026",
        logo: "logos/berkeley.png",
        desc: "Successfully completed COMPSCI 161 (Computer Security: cryptography, access control, web and memory security) and COMPSCI 61A (Structure and Interpretation of Computer Programs)."
      }
    ],
    certifications: [
      {
        title: "CompTIA Security+",
        org: "CompTIA",
        date: "Certified",
        logo: "logos/sec+.jpg",
        link: "https://www.credly.com/badges/019bcfa0-0426-4b21-9f6a-debfe5636b9e",
        linkLabel: "Credly",
        desc: "Comprehensive security principles, network defense architectures, vulnerability assessment, cryptography, and incident response."
      },
      {
        title: "TOEIC Listening & Reading - 990 / 990 (Perfect Score)",
        org: "ETS Global",
        date: "2026",
        logo: "logos/ets.jpg",
        desc: "Achieved the absolute maximum score (990/990). Level C2 / Full bilingual proficiency in professional and technical English."
      },
      {
        title: "Gold Medal - Concours Lépine International Junior",
        org: "Concours Lépine",
        date: "2021",
        logo: "logos/lepine.png",
        logoClass: "logo-contain",
        desc: "Invention of the 'Autorideau': programmable motorized smart curtain system powered by Arduino and custom 3D-printed parts, resilient to power cuts and clock shifts."
      }
    ],
    projects: [
      {
        title: "Secure File Sharing System",
        context: "UC Berkeley - COMPSCI 161 Project",
        desc: "End-to-end encrypted file sharing and storage system implemented from scratch in Go. Provides confidentiality and integrity against an adversarial/untrusted storage server, with robust cryptographic access revocation."
      },
      {
        title: "Personal Infrastructure Linux Server",
        context: "System Administration & Automation",
        desc: "Deployment and ongoing administration of an Ubuntu dedicated server hosting containerized applications (Docker), Nginx reverse proxy with SSL, strict UFW/SSH hardening, and automated maintenance scripts."
      },
      {
        title: "PowerAudit - Windows Compliance & Security Scanner",
        context: "Security Audit & PowerShell Tooling",
        link: "https://github.com/DJ3T/PowerAudit",
        linkLabel: "GitHub",
        desc: "Lightweight, non-intrusive offline Windows security audit tool developed in PowerShell. Evaluates key security controls (firewall, Windows Defender, RDP, SMBv1, open listening ports, password policies) with direct terminal reporting, designed for standalone execution or deployment via Bash Bunny."
      },
      {
        title: "Weather Bot",
        context: "Weather Alert Automation Bot",
        link: "https://github.com/DJ3T/weather-bot",
        linkLabel: "GitHub",
        desc: "Automated weather notification bot written in Python utilizing OpenWeatherMap and Discord/Telegram APIs with multi-timezone support."
      }
    ],
    volunteering: [
      {
        role: "Volunteer Work",
        org: "Terre de Promesse",
        date: "2022",
        logo: "logos/tdp.jpg",
        desc: "Community solidarity construction project building a wooden structure for social reintegration."
      }
    ],
    contact: {
      text: "Feel free to reach out via email or through my professional profiles for internship opportunities, research collaborations, or technical discussions:",
      email: "timothee2t@gmail.com"
    },
    footer: "© 2026 Timothée Blaudin de Thé · Academic & Personal Website"
  },

  fr: {
    metaTitle: "Timothée Blaudin de Thé",
    metaDesc: "Site personnel et académique de Timothée Blaudin de Thé - Apprenti Ingénieur Cybersécurité chez Thales, élève-ingénieur à l'ESAIP, UC Berkeley Summer Sessions.",
    siteTitle: "Timothée Blaudin de Thé",
    sidebar: {
      bio: "Apprenti Ingénieur Cybersécurité @ Thales",
      location: "France",
      cvText: "Curriculum Vitae (PDF)",
      cvFile: "resume-timothee-BLAUDINDETHE.pdf"
    },
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      certifications: "Certifications",
      projects: "Projets",
      volunteering: "Bénévolat",
      contact: "Contact"
    },
    about: {
      paragraphs: [
        "Bienvenue sur mon site personnel. Je suis apprenti ingénieur en cybersécurité chez <strong>Thales</strong> et élève-ingénieur à l'<strong>ESAIP</strong> (majeure Cybersécurité et Réseaux).",
        "J'ai également suivi les cours de sécurité informatique (COMPSCI 161) et de structure logicielle (COMPSCI 61A) lors des Summer Sessions à l'<strong>UC Berkeley</strong>.",
        "Je m'intéresse particulièrement à la recherche dans le monde de la cybersécurité, avec un intérêt marqué pour la sécurité des réseaux, la sécurité web et les architectures internet, plutôt que pour les systèmes embarqués."
      ],
      notice: "<strong>Recherche de stage :</strong> Je recherche activement un stage de 3 mois de <strong>juin à septembre</strong>."
    },
    sectionTitles: {
      experience: "Expérience professionnelle",
      education: "Formation",
      certifications: "Certifications & Distinctions",
      projects: "Projets",
      volunteering: "Bénévolat & Engagement associatif",
      contact: "Contact"
    },
    experience: [
      {
        role: "Apprenti Ingénieur Cybersécurité",
        org: "Thales",
        date: "2026 - Présent",
        logo: "logos/thales.jpg",
        desc: [
          "Analyse de failles et de vulnérabilités de sécurité sur systèmes embarqués via des suites de tests.",
          "Développement d'outils de cybersécurité pour les équipes IVVQ."
        ]
      },
      {
        role: "Stagiaire Cybersécurité & Logistique",
        org: "Anolix",
        date: "2025",
        logo: "logos/anolix.jpg",
        desc: [
          "Réalisation de 2 tests d'intrusion (pentest) web internes.",
          "Gestion des stocks avec Sage et Excel, conception de logigrammes logistiques."
        ]
      },
      {
        role: "Stagiaire",
        org: "Spinelle",
        date: "2021",
        logo: "logos/spinelle.jpg",
        logoClass: "logo-contain-small",
        desc: [
          "Participation à la conception et création de pièces de joaillerie avec une gemmologue."
        ]
      }
    ],
    education: [
      {
        degree: "Diplôme d'ingénieur en Cybersécurité et Réseaux",
        school: "ESAIP (École d'Ingénieurs)",
        date: "2024 - 2029",
        logo: "logos/esaip.jpg",
        desc: "Formation d'ingénieur habilitée CTI : cryptographie, sécurité des infrastructures, protocoles réseaux, reverse engineering et gouvernance cyber."
      },
      {
        degree: "Summer Sessions",
        school: "UC Berkeley",
        date: "2026",
        logo: "logos/berkeley.png",
        desc: "Validation avec succès de COMPSCI 161 (Computer Security : cryptographie, contrôle d'accès, sécurité web et mémoire) et COMPSCI 61A (Structure and Interpretation of Computer Programs)."
      }
    ],
    certifications: [
      {
        title: "CompTIA Security+",
        org: "CompTIA",
        date: "Certifié",
        logo: "logos/sec+.jpg",
        link: "https://www.credly.com/badges/019bcfa0-0426-4b21-9f6a-debfe5636b9e",
        linkLabel: "Credly",
        desc: "Maîtrise des principes fondamentaux de sécurité, architectures réseau, gestion des vulnérabilités, cryptographie et réponse aux incidents."
      },
      {
        title: "TOEIC Listening & Reading - 990 / 990 (Score parfait)",
        org: "ETS Global",
        date: "2026",
        logo: "logos/ets.jpg",
        desc: "Obtention du score maximal absolu (990/990). Niveau C2 / Maîtrise bilingue complète de l'anglais professionnel et technique."
      },
      {
        title: "Médaille d’Or - Concours Lépine International Junior",
        org: "Concours Lépine",
        date: "2021",
        logo: "logos/lepine.png",
        logoClass: "logo-contain",
        desc: "Invention de l'« Autorideau » : système automatisé connecté à base d'Arduino, pièces imprimées en 3D et motorisation intégrée, résistant aux pannes d'alimentation électrique et synchronisé."
      }
    ],
    projects: [
      {
        title: "Système de Partage de Fichiers Sécurisé",
        context: "UC Berkeley - Projet COMPSCI 161",
        desc: "Conception et implémentation intégrale en Go d'un système de partage de fichiers chiffré de bout en bout. Garantit la confidentialité et l'intégrité même face à un serveur de stockage malveillant ou non fiable, avec mécanismes cryptographiques avancés pour le partage sécurisé et la révocation dynamique des accès."
      },
      {
        title: "Serveur Linux d'Infrastructure Personnelle",
        context: "Administration système & automatisation",
        desc: "Déploiement et administration continue d'un serveur dédié sous Ubuntu Server. Hébergement de services web conteneurisés avec Docker et reverse proxy Nginx, durcissement des accès SSH, pare-feu UFW et automatisation des sauvegardes par scripts Bash."
      },
      {
        title: "PowerAudit - Scanner de Conformité & Sécurité Windows",
        context: "Audit de sécurité & outillage PowerShell",
        link: "https://github.com/DJ3T/PowerAudit",
        linkLabel: "GitHub",
        desc: "Outil d'audit de sécurité Windows hors ligne, léger et non intrusif développé en PowerShell. Analyse les configurations de sécurité critiques (pare-feu, Windows Defender, RDP, SMBv1, ports ouverts, politiques de comptes) avec restitution directe dans le terminal, conçu pour une exécution autonome ou via Bash Bunny."
      },
      {
        title: "Weather Bot",
        context: "Bot d'automatisation d'alertes météo",
        link: "https://github.com/DJ3T/weather-bot",
        linkLabel: "GitHub",
        desc: "Bot Discord et Telegram développé en Python fournissant des prévisions météorologiques personnalisées et des alertes programmées, avec gestion dynamique des fuseaux horaires."
      }
    ],
    volunteering: [
      {
        role: "Engagement Associatif",
        org: "Terre de Promesse",
        date: "2022",
        logo: "logos/tdp.jpg",
        desc: "Chantier solidaire de construction d'une structure en bois dédiée à la réinsertion sociale."
      }
    ],
    contact: {
      text: "N'hésitez pas à me contacter par email ou via mes réseaux professionnels pour toute opportunité de stage, projet de recherche ou échange technique :",
      email: "timothee2t@gmail.com"
    },
    footer: "© 2026 Timothée Blaudin de Thé · Site académique & personnel"
  }
};

// Global State - Default is English as requested
let currentLang = 'en';

/**
 * Toggle Language between English and French
 */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('lang', currentLang);
  renderPage();
}

/**
 * Toggle Theme between Light (White) and Dark (Deep Navy Blue)
 */
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    if (isDark) {
      icon.className = 'fas fa-sun';
      icon.parentElement.setAttribute('title', currentLang === 'en' ? 'Switch to Light mode' : 'Passer en mode jour');
    } else {
      icon.className = 'fas fa-moon';
      icon.parentElement.setAttribute('title', currentLang === 'en' ? 'Switch to Dark mode' : 'Passer en mode nuit');
    }
  }
}

/**
 * Render the entire site content for the active language
 */
function renderPage() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang;
  document.title = t.metaTitle;

  // Language button text displays target language
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
    langBtn.title = currentLang === 'en' ? 'Passer en Français' : 'Switch to English';
  }

  // Sidebar elements
  const sidebarBio = document.getElementById('sidebar-bio');
  if (sidebarBio) sidebarBio.textContent = t.sidebar.bio;

  const sidebarLocation = document.getElementById('sidebar-location');
  if (sidebarLocation) sidebarLocation.textContent = t.sidebar.location;

  const sidebarCv = document.getElementById('sidebar-cv');
  const sidebarCvText = document.getElementById('sidebar-cv-text');
  if (sidebarCv) {
    sidebarCv.href = t.sidebar.cvFile;
    if (sidebarCvText) sidebarCvText.textContent = t.sidebar.cvText;
  }

  // Navigation Links
  const navIds = ['nav-about', 'nav-experience', 'nav-education', 'nav-certifications', 'nav-projects', 'nav-volunteering', 'nav-contact'];
  const navKeys = ['about', 'experience', 'education', 'certifications', 'projects', 'volunteering', 'contact'];
  navIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t.nav[navKeys[i]];
  });

  // Section Titles
  const sectionIds = ['experience-title', 'education-title', 'certifications-title', 'projects-title', 'volunteering-title', 'contact-title'];
  const titleKeys = ['experience', 'education', 'certifications', 'projects', 'volunteering', 'contact'];
  sectionIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t.sectionTitles[titleKeys[i]];
  });

  // Bio Section
  const bioLead = document.getElementById('bio-lead');
  if (bioLead) {
    bioLead.innerHTML = `
      ${t.about.paragraphs.map(p => `<p>${p}</p>`).join('')}
      <p class="internship-lead">${t.about.notice}</p>
    `;
  }

  // Experience Section
  renderExperience(t.experience);

  // Education Section
  renderEducation(t.education);

  // Certifications Section
  renderCertifications(t.certifications);

  // Projects Section
  renderProjects(t.projects);

  // Volunteering Section
  renderVolunteering(t.volunteering);

  // Contact Section
  renderContact(t.contact);

  // Footer
  const footerText = document.getElementById('footer-text');
  if (footerText) footerText.textContent = t.footer;

  // Update theme button tooltip
  const isDark = document.body.classList.contains('dark');
  updateThemeIcon(isDark);
}

/**
 * Render Experience Entries
 */
function renderExperience(items) {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="academic-entry">
      <div class="entry-logo-col">
        <img src="${item.logo}" alt="${item.org} Logo" class="entry-logo ${item.logoClass || ''}" />
      </div>
      <div class="entry-body">
        <div class="entry-header">
          <span class="entry-title">${item.role} · <span class="entry-org">${item.org}</span></span>
          <span class="entry-date">${item.date}</span>
        </div>
        <div class="entry-desc">
          <ul>
            ${item.desc.map(line => `<li>${line}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Education Entries
 */
function renderEducation(items) {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="academic-entry">
      <div class="entry-logo-col">
        <img src="${item.logo}" alt="${item.school} Logo" class="entry-logo ${item.logoClass || ''}" />
      </div>
      <div class="entry-body">
        <div class="entry-header">
          <span class="entry-title">${item.degree}</span>
          <span class="entry-date">${item.date}</span>
        </div>
        <div class="entry-subtitle">${item.school}</div>
        <div class="entry-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Certifications Entries
 */
function renderCertifications(items) {
  const container = document.getElementById('certifications-list');
  if (!container) return;

  container.innerHTML = items.map(item => {
    const linkHtml = item.link ? `
      <span class="bracket-link">[<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel || 'Link'}</a>]</span>
    ` : '';

    return `
      <div class="academic-entry">
        <div class="entry-logo-col">
          <img src="${item.logo}" alt="${item.org} Logo" class="entry-logo ${item.logoClass || ''}" />
        </div>
        <div class="entry-body">
          <div class="entry-header">
            <span class="entry-title">${item.title} ${linkHtml}</span>
            <span class="entry-date">${item.date}</span>
          </div>
          <div class="entry-subtitle">${item.org}</div>
          <div class="entry-desc">${item.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Projects Entries (without tech tags underneath)
 */
function renderProjects(items) {
  const container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = items.map(item => {
    const linkHtml = item.link ? `
      <span class="bracket-link">[<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel || 'Code'}</a>]</span>
    ` : '';

    return `
      <div class="academic-entry">
        <div class="entry-body">
          <div class="entry-header">
            <span class="entry-title">${item.title} ${linkHtml}</span>
            <span class="entry-date">${item.context}</span>
          </div>
          <div class="entry-desc">
            <p>${item.desc}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Volunteering Entries
 */
function renderVolunteering(items) {
  const container = document.getElementById('volunteering-list');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="academic-entry">
      <div class="entry-logo-col">
        <img src="${item.logo}" alt="${item.org} Logo" class="entry-logo ${item.logoClass || ''}" />
      </div>
      <div class="entry-body">
        <div class="entry-header">
          <span class="entry-title">${item.role} · <span class="entry-org">${item.org}</span></span>
          <span class="entry-date">${item.date}</span>
        </div>
        <div class="entry-desc">
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Contact
 */
function renderContact(contact) {
  const container = document.getElementById('contact-content');
  if (!container) return;

  container.innerHTML = `
    <p>${contact.text}</p>
    <div class="contact-links-grid">
      <a href="mailto:${contact.email}" class="contact-card-btn">
        <i class="fas fa-envelope"></i>
        <span>${contact.email}</span>
      </a>
      <a href="https://github.com/DJ3T" target="_blank" rel="noopener noreferrer" class="contact-card-btn">
        <i class="fab fa-github"></i>
        <span>GitHub (@DJ3T)</span>
      </a>
      <a href="https://www.linkedin.com/in/timothee-blaudin-de-the/" target="_blank" rel="noopener noreferrer" class="contact-card-btn">
        <i class="fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
    </div>
  `;
}

/**
 * Active Navigation ScrollSpy
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section.section');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    let currentId = 'about';
    const offset = 120;

    sections.forEach(sec => {
      const top = sec.offsetTop - offset;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
      }
    });

    navMenu.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  // Always default to white (day mode) on initial visits or reset
  let savedTheme = localStorage.getItem('theme');
  if (!savedTheme || localStorage.getItem('theme_v3') !== 'true') {
    savedTheme = 'light';
    localStorage.setItem('theme', 'light');
    localStorage.setItem('theme_v3', 'true');
  }
  const isDark = savedTheme === 'dark';
  document.body.classList.toggle('dark', isDark);

  // Default to English ('en')
  let savedLang = localStorage.getItem('lang');
  if (!savedLang || localStorage.getItem('lang_v3') !== 'true') {
    savedLang = 'en';
    localStorage.setItem('lang', 'en');
    localStorage.setItem('lang_v3', 'true');
  }
  currentLang = savedLang === 'fr' ? 'fr' : 'en';

  // Render initial page
  renderPage();

  // ScrollSpy & Navigation
  initScrollSpy();
  initMobileNav();
});
