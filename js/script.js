const content = {
  pt: {
    skip: "Pular para o conteúdo",
    mainNav: "Navegação principal",
    menuLabel: "Abrir menu",
    terminalLabel: "Representação visual de uma janela de terminal",
    heroEyebrow: "DISPONÍVEL PARA NOVOS DESAFIOS",
    heroRole: "Desenvolvedor de Software <span>&amp;</span> Suporte de TI N2",
    heroDescription:
      "Apaixonado por tecnologia, software e soluções que transformam ideias em aplicações funcionais.",
    viewProjects: "Ver projetos <span>↗</span>",
    contactMe: "Entrar em contato",
    scroll: "ROLE PARA EXPLORAR",
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Skills",
    navProjects: "Projetos",
    navContact: "Contato",
    aboutLabel: "SOBRE MIM",
    aboutTitle: "Tecnologia com propósito, soluções com impacto.",
    aboutText1:
      "Sou bacharel em Sistemas de Informação e atuo atualmente como Analista de Suporte N2. Minha experiência me trouxe uma visão prática sobre sistemas, pessoas e a importância de resolver problemas com clareza.",
    aboutText2:
      "Movido pela curiosidade e pela busca constante por evolução técnica, concentro meus estudos no desenvolvimento de software — do frontend ao backend e aos sistemas embarcados.",
    years: "anos",
    degree: "Sistemas de Informação",
    skillsLabel: "HABILIDADES",
    skillsTitle: "Ferramentas para construir o que importa.",
    skillsIntro:
      "Tecnologias que fazem parte da minha jornada de aprendizado e desenvolvimento.",
    projectsLabel: "PROJETOS",
    projectsTitle: "Em construção.<br />Como bons produtos devem ser.",
    filterAll: "Todos",
    filterSystems: "Sistemas",
    filtersLabel: "Filtros de projetos",
    pathLabel: "TRAJETÓRIA",
    pathTitle: "Uma caminhada guiada por curiosidade.",
    educationTitle: "Formação",
    educationText: "Bacharelado em Sistemas de Informação",
    workTitle: "Experiência atual",
    workText: "Analista de Suporte N2",
    goalTitle: "Objetivo profissional",
    goalText: "Desenvolvimento de software",
    contactLabel: "CONTATO",
    contactTitle: "Vamos criar algo<br /><em>relevante</em> juntos.",
    contactIntro:
      "Estou aberto a conexões, oportunidades e boas conversas sobre tecnologia.",
    addLink: "adicionar link ↗",
    formName: "Nome",
    formEmail: "Email",
    formMessage: "Mensagem",
    formSubmit: "Enviar mensagem <span>↗</span>",
    rights: "Todos os direitos reservados.",
    terminalName: "Fernando Coelho Mendes Filho",
    terminalRole: "Software Developer & IT Support N2",
    required: "Preencha todos os campos.",
    invalidEmail: "Informe um email válido.",
    sent: "Mensagem pronta para envio. Obrigado pelo contato!",
  },
  en: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    menuLabel: "Open menu",
    terminalLabel: "Visual representation of a terminal window",
    heroEyebrow: "OPEN TO NEW CHALLENGES",
    heroRole: "Software Developer <span>&amp;</span> IT Support N2",
    heroDescription:
      "Passionate about technology, software, and solutions that turn ideas into functional applications.",
    viewProjects: "View projects <span>↗</span>",
    contactMe: "Contact me",
    scroll: "SCROLL TO EXPLORE",
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    aboutLabel: "ABOUT ME",
    aboutTitle: "Purposeful technology, impactful solutions.",
    aboutText1:
      "I hold a degree in Information Systems and currently work as an N2 Support Analyst. My experience has given me a practical perspective on systems, people, and the importance of solving problems with clarity.",
    aboutText2:
      "Driven by curiosity and a constant pursuit of technical growth, I focus my studies on software development — from frontend and backend to embedded systems.",
    years: "years old",
    degree: "Information Systems",
    skillsLabel: "SKILLS",
    skillsTitle: "Tools to build what matters.",
    skillsIntro:
      "Technologies that are part of my learning and development journey.",
    projectsLabel: "PROJECTS",
    projectsTitle: "In progress.<br />As good products should be.",
    filterAll: "All",
    filterSystems: "Systems",
    filtersLabel: "Project filters",
    pathLabel: "PATH",
    pathTitle: "A journey guided by curiosity.",
    educationTitle: "Education",
    educationText: "Bachelor’s degree in Information Systems",
    workTitle: "Current experience",
    workText: "N2 Support Analyst",
    goalTitle: "Professional goal",
    goalText: "Software development",
    contactLabel: "CONTACT",
    contactTitle: "Let’s create something<br /><em>meaningful</em> together.",
    contactIntro:
      "I am open to connections, opportunities, and good conversations about technology.",
    addLink: "add link ↗",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message <span>↗</span>",
    rights: "All rights reserved.",
    terminalName: "Fernando Coelho Mendes Filho",
    terminalRole: "Software Developer & IT Support N2",
    required: "Please fill in all fields.",
    invalidEmail: "Enter a valid email address.",
    sent: "Message ready to send. Thank you for reaching out!",
  },
};
const skills = [
  ["01", "Frontend", ["HTML5", "CSS3", "JavaScript", "TypeScript"]],
  ["02", "Backend", ["Node.js", "Firebase", "MongoDB"]],
  ["03", "Programming & Systems", ["Python", "Arduino"]],
];
const projects = [
  { category: "frontend", tags: ["HTML", "CSS", "JavaScript"] },
  { category: "backend", tags: ["Node.js", "MongoDB"] },
  { category: "systems", tags: ["Python", "Arduino"] },
];
let language = localStorage.getItem("portfolio-language") || "pt";
function renderCards() {
  document.querySelector("#skill-grid").innerHTML = skills
    .map(
      ([n, title, items]) =>
        `<article class="skill-card reveal"><span class="skill-icon">${n}</span><h3>${title}</h3><div class="tech-list">${items.map((item) => `<span>${item}</span>`).join("")}</div></article>`,
    )
    .join("");
  document.querySelector("#project-grid").innerHTML = projects
    .map(
      (project, index) =>
        `<article class="project-card reveal" data-category="${project.category}"><div class="project-art" aria-hidden="true"><span></span><span></span><span></span><span></span></div><div><p class="project-status">${language === "pt" ? "EM DESENVOLVIMENTO" : "IN DEVELOPMENT"}</p><h3>${language === "pt" ? "Espaço para um novo projeto" : "Space for a new project"}</h3></div><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></article>`,
    )
    .join("");
  observeReveals();
}
function translate() {
  const t = content[language];
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title =
    language === "pt"
      ? "Fernando Coelho | Desenvolvedor de Software"
      : "Fernando Coelho | Software Developer";
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.innerHTML = t[el.dataset.i18n]));
  document
    .querySelectorAll("[data-i18n-aria]")
    .forEach((el) => el.setAttribute("aria-label", t[el.dataset.i18nAria]));
  document.querySelector(".language-current").textContent =
    language.toUpperCase();
  renderCards();
}
function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => observer.observe(el));
}
document.querySelector(".language-toggle").addEventListener("click", () => {
  language = language === "pt" ? "en" : "pt";
  localStorage.setItem("portfolio-language", language);
  translate();
});
const menu = document.querySelector(".menu-toggle"),
  links = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
document.querySelector(".theme-toggle").addEventListener("click", () => {
  const light = document.documentElement.dataset.theme === "light";
  document.documentElement.dataset.theme = light ? "dark" : "light";
  localStorage.setItem("portfolio-theme", light ? "dark" : "light");
});
document.documentElement.dataset.theme =
  localStorage.getItem("portfolio-theme") || "dark";
document.querySelectorAll(".filter").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    document
      .querySelectorAll(".project-card")
      .forEach(
        (card) =>
          (card.hidden =
            button.dataset.filter !== "all" &&
            card.dataset.category !== button.dataset.filter),
      );
  }),
);
document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget,
    feedback = form.querySelector(".form-feedback"),
    data = new FormData(form),
    t = content[language];
  feedback.className = "form-feedback";
  if (!data.get("name") || !data.get("email") || !data.get("message")) {
    feedback.textContent = t.required;
    feedback.classList.add("error");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(data.get("email"))) {
    feedback.textContent = t.invalidEmail;
    feedback.classList.add("error");
    return;
  }
  feedback.textContent = t.sent;
  form.reset();
});
translate();
observeReveals();
