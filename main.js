// ── TRANSLATIONS ──────────────────────────────────────────────
const translations = {
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_services: 'Services',
    nav_projects: 'Projects', nav_contact: 'Contact',
    hero_greeting: 'Hi, my name is',
    hero_title: 'QA Automation Engineer',
    hero_desc: 'Software Test Engineer with 5+ years of experience in QA for complex platforms — EV charging, fintech and pharmaceutical. Specialized in building automation frameworks, defining test strategies, and managing cloud infrastructure. Results-driven with an Agile & SAFe mindset.',
    hero_cta_work: 'View My Work', hero_cta_contact: 'Get In Touch',
    about_title: 'About Me',
    about_p1: "I'm a Software Test Engineer with expertise in QA for complex platforms — EV charging (Total Energies), fintech (Mangopay, Fiserv) and pharmaceutical (GxP). I specialize in building API & UI automation frameworks integrated in CI/CD, and in defining end-to-end test strategies with Shift-Left approach in Agile and SAFe teams.",
    about_p2: "Based in Paris, I work with Selenium, Playwright, Cypress, Python and TypeScript. I have hands-on experience testing OCPP 1.6 & 2.0.1 and OCPI protocols, Websocket communications, payment flows, and log analysis with Kibana / Elasticsearch.",
    skills_title: 'Skills & Tools',
    skill_automation_title: 'Test Automation', skill_languages_title: 'Languages',
    skill_api_title: 'API Testing', skill_cicd_title: 'CI / CD & DevOps',
    skill_frameworks_title: 'Frameworks', skill_tools_title: 'Project & QA Tools',
    services_title: 'Services',
    svc1_title: 'Test Automation Framework',
    svc1_desc: 'Design and build scalable, maintainable automation frameworks from scratch using Selenium, Playwright, or Cypress — tailored to your tech stack and team workflow.',
    svc2_title: 'API & Backend Testing',
    svc2_desc: 'End-to-end API test suites with Postman collections, REST Assured, or Python requests — covering functional, contract, and regression testing.',
    svc3_title: 'CI/CD Test Integration',
    svc3_desc: 'Integrate your test suite into GitHub Actions, Jenkins, or GitLab CI pipelines so quality gates run automatically on every commit and pull request.',
    svc4_title: 'QA Strategy & Consulting',
    svc4_desc: 'Define test strategies, coverage plans, and quality processes from scratch — helping teams shift quality left and reduce bug escape rate.',
    projects_title: 'Projects', nda_label: 'Confidential',
    proj1_industry: 'EV Charging · Total Energies',
    proj1_title: 'EV Charging Platform — End-to-End Automation',
    proj1_desc: 'API & UI automation framework integrated in CI/CD via GitHub Actions. OCPP 1.6 & 2.0.1 / OCPI protocol validation, Websocket monitoring, payment flow certification (Mangopay, Fiserv), and Kibana log analysis.',
    proj1_impact1: '✓ OCPP 1.6 & 2.0.1 certified', proj1_impact2: '✓ API + UI CI/CD pipeline',
    proj2_industry: 'Pharmaceutical · GSK / BioNTech USA',
    proj2_title: 'GxP Software Validation',
    proj2_desc: 'QA and software validation in a highly regulated pharmaceutical environment (GxP). Anomaly management via ServiceNow, validation documentation for audits, and critical application compliance verification.',
    proj2_impact1: '✓ GxP regulatory compliance', proj2_impact2: '✓ Audit documentation',
    proj3_industry: 'Personal · Learning Project',
    proj3_title: 'Python OOP & API Testing',
    proj3_desc: 'Personal project exploring OOP principles in Python, including a REST API test suite with pytest and mocked HTTP calls.',
    projects_note: '* Client projects above are anonymised under NDA. Case studies available on request.',
    contact_overline: "05. What's Next?", contact_title: 'Get In Touch',
    contact_desc: 'Whether you have a project to automate, a team that needs a QA strategy, or just want to say hi — my inbox is always open.',
    form_name: 'Name', form_email: 'Email', form_subject: 'Subject', form_message: 'Message', form_submit: 'Send Message',
    form_name_ph: 'Your name', form_email_ph: 'your@email.com',
    form_subject_ph: "What's this about?", form_message_ph: 'Tell me about your project...',
  },
  fr: {
    nav_about: 'À propos', nav_skills: 'Compétences', nav_services: 'Services',
    nav_projects: 'Projets', nav_contact: 'Contact',
    hero_greeting: "Bonjour, je m'appelle",
    hero_title: 'Ingénieur QA Automation',
    hero_desc: "Ingénieur QA / Software Test Engineer avec 5+ ans d'expérience dans les tests de plateformes complexes — recharge EV, fintech et pharmaceutique. Spécialisé dans la mise en place de frameworks d'automatisation, la définition de stratégies de test et la gestion d'infrastructures cloud. Orienté résultats et collaboration Agile & SAFe.",
    hero_cta_work: 'Voir mes projets', hero_cta_contact: 'Me contacter',
    about_title: 'À propos de moi',
    about_p1: "Je suis Software Test Engineer expert dans l'assurance qualité des plateformes complexes — recharge EV (Total Energies), fintech (Mangopay, Fiserv) et pharmaceutique (GxP). Je me spécialise dans le développement de frameworks d'automatisation API & IHM intégrés en CI/CD, et dans la définition de stratégies de test avec approche Shift-Left en équipes Agile et SAFe.",
    about_p2: "Basé à Paris, je travaille avec Selenium, Playwright, Cypress, Python et TypeScript. J'ai une expérience pratique dans la validation des protocoles OCPP 1.6 & 2.0.1 et OCPI, des communications Websockets, des flux de paiement et l'analyse de logs Kibana / Elasticsearch.",
    skills_title: 'Compétences & Outils',
    skill_automation_title: 'Automatisation de tests', skill_languages_title: 'Langages',
    skill_api_title: 'Tests API', skill_cicd_title: 'CI / CD & DevOps',
    skill_frameworks_title: 'Frameworks', skill_tools_title: 'Outils QA & Projet',
    services_title: 'Services',
    svc1_title: "Framework d'automatisation",
    svc1_desc: "Conception et développement de frameworks d'automatisation évolutifs avec Selenium, Playwright ou Cypress — adaptés à votre stack technique et à votre équipe.",
    svc2_title: 'Tests API & Backend',
    svc2_desc: 'Suites de tests API end-to-end avec Postman, REST Assured ou Python requests — couvrant les tests fonctionnels, de contrat et de régression.',
    svc3_title: 'Intégration CI/CD',
    svc3_desc: "Intégrez votre suite de tests dans GitHub Actions, Jenkins ou GitLab CI pour que les contrôles qualité s'exécutent automatiquement à chaque commit et pull request.",
    svc4_title: 'Stratégie QA & Conseil',
    svc4_desc: "Définissez des stratégies de test, des plans de couverture et des processus qualité — aidant les équipes à déplacer la qualité en amont et à réduire le taux d'échappement des bugs.",
    projects_title: 'Projets', nda_label: 'Confidentiel',
    proj1_industry: 'Recharge EV · Total Energies',
    proj1_title: 'Plateforme de recharge EV — Automatisation E2E',
    proj1_desc: "Framework d'automatisation API & IHM intégré en CI/CD via GitHub Actions. Validation des protocoles OCPP 1.6 & 2.0.1 / OCPI, monitoring Websockets, certification des flux de paiement (Mangopay, Fiserv) et analyse des logs Kibana.",
    proj1_impact1: '✓ OCPP 1.6 & 2.0.1 certifié', proj1_impact2: '✓ Pipeline CI/CD API + IHM',
    proj2_industry: 'Pharmaceutique · GSK / BioNTech USA',
    proj2_title: 'Validation logicielle GxP',
    proj2_desc: "Assurance qualité et validation des logiciels dans un environnement pharmaceutique hautement réglementé (GxP). Gestion des anomalies via ServiceNow, documentation de validation pour les audits et vérification de la conformité des applications critiques.",
    proj2_impact1: '✓ Conformité réglementaire GxP', proj2_impact2: '✓ Documentation audit',
    proj3_industry: "Personnel · Projet d'apprentissage",
    proj3_title: 'Python POO & Tests API',
    proj3_desc: 'Projet personnel explorant les principes de la POO en Python, incluant une suite de tests REST API avec pytest et des appels HTTP simulés.',
    projects_note: '* Les projets clients ci-dessus sont anonymisés sous NDA. Des études de cas sont disponibles sur demande.',
    contact_overline: '05. Et maintenant ?', contact_title: 'Prendre contact',
    contact_desc: "Que vous ayez un projet à automatiser, une équipe qui a besoin d'une stratégie QA, ou que vous vouliez juste dire bonjour — ma boîte mail est toujours ouverte.",
    form_name: 'Nom', form_email: 'Email', form_subject: 'Sujet', form_message: 'Message', form_submit: 'Envoyer',
    form_name_ph: 'Votre nom', form_email_ph: 'votre@email.com',
    form_subject_ph: "De quoi s'agit-il ?", form_message_ph: 'Parlez-moi de votre projet...',
  },
  bg: {
    nav_about: 'За мен', nav_skills: 'Умения', nav_services: 'Услуги',
    nav_projects: 'Проекти', nav_contact: 'Контакт',
    hero_greeting: 'Здравейте, казвам се',
    hero_title: 'QA Automation инженер',
    hero_desc: 'Software Test Engineer с над 5 години опит в QA за сложни платформи — EV зареждане, финтех и фармацевтика. Специализиран в изграждането на фреймуърки за автоматизация, дефинирането на стратегии за тестване и управлението на cloud инфраструктури. Ориентиран към резултати с Agile & SAFe мислене.',
    hero_cta_work: 'Моите проекти', hero_cta_contact: 'Свържете се',
    about_title: 'За мен',
    about_p1: 'Аз съм Software Test Engineer с експертиза в QA за сложни платформи — EV зареждане (Total Energies), финтех (Mangopay, Fiserv) и фармацевтика (GxP). Специализирам се в изграждането на фреймуърки за автоматизация на API и UI, интегрирани в CI/CD, и в дефинирането на стратегии за тестване с Shift-Left подход в Agile и SAFe екипи.',
    about_p2: 'Базиран в Париж, работя с Selenium, Playwright, Cypress, Python и TypeScript. Имам практически опит в тестването на протоколи OCPP 1.6 & 2.0.1 и OCPI, Websocket комуникации, платежни потоци и анализ на логове с Kibana / Elasticsearch.',
    skills_title: 'Умения и инструменти',
    skill_automation_title: 'Автоматизация на тестове', skill_languages_title: 'Езици',
    skill_api_title: 'API тестване', skill_cicd_title: 'CI / CD и DevOps',
    skill_frameworks_title: 'Фреймуърки', skill_tools_title: 'QA инструменти',
    services_title: 'Услуги',
    svc1_title: 'Фреймуърк за автоматизация',
    svc1_desc: 'Проектиране и изграждане на мащабируеми фреймуърки за автоматизация от нулата, използвайки Selenium, Playwright или Cypress — адаптирани към вашия стек и работен процес.',
    svc2_title: 'API и Backend тестване',
    svc2_desc: 'End-to-end API тест суити с Postman, REST Assured или Python requests — покриващи функционални тестове, тестове за контракт и регресионни тестове.',
    svc3_title: 'CI/CD интеграция на тестове',
    svc3_desc: 'Интегрирайте вашата тест суита в GitHub Actions, Jenkins или GitLab CI така, че порталите за качество да работят автоматично при всеки commit и pull request.',
    svc4_title: 'QA стратегия и консултиране',
    svc4_desc: 'Дефинирайте стратегии за тестване, планове за покритие и процеси за качество — помагайки на екипите да преместят качеството наляво и да намалят процента на избягали бъгове.',
    projects_title: 'Проекти', nda_label: 'Поверително',
    proj1_industry: 'EV зареждане · Total Energies',
    proj1_title: 'EV платформа — End-to-End автоматизация',
    proj1_desc: 'Фреймуърк за автоматизация на API и UI интегриран в CI/CD чрез GitHub Actions. Валидиране на протоколи OCPP 1.6 & 2.0.1 / OCPI, Websocket мониторинг, сертификация на платежни потоци (Mangopay, Fiserv) и анализ на логове с Kibana.',
    proj1_impact1: '✓ OCPP 1.6 & 2.0.1 сертифициран', proj1_impact2: '✓ CI/CD API + UI тръбопровод',
    proj2_industry: 'Фармацевтика · GSK / BioNTech USA',
    proj2_title: 'GxP валидиране на софтуер',
    proj2_desc: 'QA и валидиране на софтуер в силно регулирана фармацевтична среда (GxP). Управление на аномалии чрез ServiceNow, документация за валидиране за одити и проверка на съответствието на критични приложения.',
    proj2_impact1: '✓ GxP регулаторно съответствие', proj2_impact2: '✓ Одитна документация',
    proj3_industry: 'Личен · Обучителен проект',
    proj3_title: 'Python ООП и API тестване',
    proj3_desc: 'Личен обучителен проект, изследващ принципите на ООП в Python, включително REST API тест суита, изградена с pytest и симулирани HTTP заявки.',
    projects_note: '* Клиентски проекти са анонимизирани по NDA. Казуси са достъпни при поискване.',
    contact_overline: '05. Какво следва?', contact_title: 'Свържете се с мен',
    contact_desc: 'Независимо дали имате проект за автоматизиране, екип нуждаещ се от QA стратегия, или просто искате да кажете здравей — пощата ми е винаги отворена.',
    form_name: 'Имe', form_email: 'Имейл', form_subject: 'Тема', form_message: 'Съобщение', form_submit: 'Изпрати',
    form_name_ph: 'Вашето имe', form_email_ph: 'вашия@имейл.com',
    form_subject_ph: 'За какво става въпрос?', form_message_ph: 'Разкажете ми за вашия проект...',
  },
};

// ── I18N ENGINE ────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

setLanguage(currentLang);

// ── NAVBAR: shadow on scroll ───────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE HAMBURGER MENU ─────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── FADE-IN ON SCROLL ─────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.skill-card, .service-card, .project-card, .about-grid, .hero-content, .hero-terminal'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// ── CONTACT FORM (AJAX for Formspree) ────────────────────────
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = '...';
  btn.disabled = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      btn.textContent = '✓ Sent!';
      btn.style.borderColor = 'var(--accent)';
      btn.style.color = 'var(--accent)';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 3000);
    } else { throw new Error(); }
  } catch {
    btn.textContent = '✗ Error — try again';
    btn.style.borderColor = '#ff5f57';
    btn.style.color = '#ff5f57';
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 3000);
  }
});

// ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
}, { passive: true });
