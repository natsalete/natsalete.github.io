// Translations
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      tech: "Tecnologias",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou<br>Natalia Salete",
      title: "Desenvolvedora Full Stack & Consultora ERP",
      tech: "ADVPL • React.js • TypeScript • Next.js",
      btn1: "Ver Projetos",
      btn2: "Contato",
    },
    about: {
      title: "Sobre Mim",
      lead: "Sou uma desenvolvedora apaixonada por tecnologia e inovação, com experiência sólida em sistemas ERP e desenvolvimento web moderno.",
      description:
        "Trabalho com TOTVS Protheus e ADVPL, criando e adaptando módulos de ERP, além de estar constantemente aprimorando minhas habilidades em tecnologias web modernas como React, TypeScript e Next.js.",
      location: {
        label: "Localização:",
        value: "Monte Carmelo, Minas Gerais, Brasil",
      },
      areas: {
        label: "Áreas de Atuação:",
        value: "Desenvolvimento Full Stack, Consultoria ERP, Sistemas TOTVS",
      },
      interests: {
        label: "Interesses:",
        value: "Inovação tecnológica, Soluções criativas e eficientes",
      },
    },
    tech: {
      title: "Tecnologias & Ferramentas",
      languages: "Linguagens de Programação",
      frontend: "Frontend Development",
      backend: "Backend Development",
      databases: "Databases",
      tools: "Ferramentas & Plataformas",
    },
    projects: {
      title: "Projetos em Destaque",
      project1: {
        title: "L'Essence Beauté - Loja Virtual",
        description:
          "Loja virtual focada em oferecer uma experiência agradável para a compra de produtos de beleza. Interface amigável e responsiva desenvolvida com tecnologias web modernas.",
      },
      project2: {
        title: "Minhas Tarefas",
        description:
          "Aplicação web para gerenciamento de tarefas construída com React. Permite organizar atividades de forma eficiente com interface moderna e intuitiva.",
      },
      project3: {
        title: "Firebase Authentication",
        description:
          "Aplicativo Android moderno com sistema completo de autenticação usando Firebase. Suporta registro, login com email/senha e login com Google, seguindo as melhores práticas Android.",
      },
    },
    contact: {
      title: "Entre em Contato",
      location: {
        label: "Localização",
        value: "Monte Carmelo, Minas Gerais, Brasil",
      },
    },
    footer: {
      made: "Feito com",
      tech: "e tecnologia",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      tech: "Technologies",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm<br>Natalia Salete",
      title: "Full Stack Developer & ERP Consultant",
      tech: "ADVPL • React.js • TypeScript • Next.js",
      btn1: "View Projects",
      btn2: "Contact",
    },
    about: {
      title: "About Me",
      lead: "I'm a developer passionate about technology and innovation, with solid experience in ERP systems and modern web development.",
      description:
        "I work with TOTVS Protheus and ADVPL, creating and adapting ERP modules, while constantly improving my skills in modern web technologies like React, TypeScript, and Next.js.",
      location: {
        label: "Location:",
        value: "Monte Carmelo, Minas Gerais, Brazil",
      },
      areas: {
        label: "Work Areas:",
        value: "Full Stack Development, ERP Consulting, TOTVS Systems",
      },
      interests: {
        label: "Interests:",
        value: "Technological innovation, Creative and efficient solutions",
      },
    },
    tech: {
      title: "Technologies & Tools",
      languages: "Programming Languages",
      frontend: "Frontend Development",
      backend: "Backend Development",
      databases: "Databases",
      tools: "Tools & Platforms",
    },
    projects: {
      title: "Featured Projects",
      project1: {
        title: "L'Essence Beauté - Virtual Store",
        description:
          "Virtual store focused on providing a pleasant shopping experience for beauty products. User-friendly and responsive interface developed with modern web technologies.",
      },
      project2: {
        title: "My Tasks",
        description:
          "Web application for task management built with React. Allows organizing activities efficiently with a modern and intuitive interface.",
      },
      project3: {
        title: "Firebase Authentication",
        description:
          "Modern Android app with complete authentication system using Firebase. Supports registration, email/password login, and Google sign-in, following Android best practices.",
      },
    },
    contact: {
      title: "Get In Touch",
      location: {
        label: "Location",
        value: "Monte Carmelo, Minas Gerais, Brazil",
      },
    },
    footer: {
      made: "Made with",
      tech: "and technology",
    },
  },
};

// Current language
let currentLang = localStorage.getItem("language") || "pt";
let currentTheme = localStorage.getItem("theme") || "light";

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Apply saved theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  // Apply saved language
  setLanguage(currentLang);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  // Navbar background on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.15)";
    } else {
      navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    }
  });
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = document.querySelector("#themeToggle i");
  if (currentTheme === "dark") {
    icon.className = "bi bi-sun-fill";
  } else {
    icon.className = "bi bi-moon-fill";
  }
}

// Language Toggle
document.getElementById("langToggle").addEventListener("click", function () {
  currentLang = currentLang === "pt" ? "en" : "pt";
  setLanguage(currentLang);
  localStorage.setItem("language", currentLang);
});

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const keys = element.getAttribute("data-i18n").split(".");
    let value = translations[lang];

    keys.forEach((key) => {
      value = value[key];
    });

    if (element.innerHTML.includes("<br>")) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  // Update flag
  document.getElementById("langFlag").textContent = lang === "pt" ? "🇺🇸" : "🇧🇷";

  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
}
