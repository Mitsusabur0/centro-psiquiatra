// Navbar Hamburger
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  const body = document.body;

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);
    if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", closeMenu));

  // Prevent scrolling when menu is open
  document.addEventListener('touchmove', (e) => {
    if (body.classList.contains('menu-open')) {
      e.preventDefault();
    }
  }, { passive: false });
});






// JS to show lawyers new window on click
const modal = document.getElementById("team-modal");
const cards = document.querySelectorAll(".team-member");
const closeBtn = document.querySelector(".close");

const teamData = {
  andres: {
    name: "Andrés Heerlein Lobenstein",
    position: "Psiquiatra",
    email: "ajheerlein@gmail.com",
    modalidad: "Presencial",
    phone: "",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9s-heerlein-lobenstein-46257a7a/",
    description: "Psiquiatra",
    image: "../images/andres-portrait.jpeg"
  },
  estrella: {
    name: "Estrella Muñoz",
    position: "Psicóloga clínica",
    email: "esmuve@gmail.com",
    modalidad: "Remota",
    phone: "+56 9 9439 9128",
    linkedin: "https://www.linkedin.com/in/estrella-munoz-a20ab944/",
    description: "<p>Estrella Muñoz Venegas es una Psicóloga Clínica Acreditada, especialista en Psicoterapia de Adultos, Pareja y Familia. Tiene un Magíster en Psicología Clínica y amplia experiencia en psicoterapia, docencia e investigación.</p> <br><strong>Formación y Especialización</strong>: <ul> <li>Magíster en Psicología Clínica</li> <li>Psicóloga Clínica Acreditada Especialista en Psicoterapia</li> <li>Post-Título en Terapia Familiar, Individual y de Pareja</li> <li>Certificada en Coaching Cognitivo Estratégico</li></ul> <br> <strong>Áreas de Experiencia:</strong> <ul><li>Psicoterapia de Adultos</li> <li>Terapia de Pareja y Familia</li> <li>Investigación en Salud Mental</li> <li>Docencia Académica en Psicología</li></ul>",
    image: "../images/estrella.jpg"
  },
  daniela: {
    name: "Daniela",
    position: "Psicóloga clínica",
    email: "",
    modalidad: "Presencial",
    phone: "+56 9 9499 4689",
    linkedin: "",
    description: "Psicóloga",
    image: "../images/daniela.jpg",
  }
};

cards.forEach(card => {
  card.addEventListener("click", () => {
    const member = card.dataset.member;
    const data = teamData[member];
    
    document.getElementById("modal-image").src = data.image;
    document.getElementById("modal-image").alt = data.name;
    document.getElementById("modal-name").textContent = data.name;
    document.getElementById("modal-position").textContent = data.position;
    document.getElementById("modal-email").textContent = data.email;
    document.getElementById("modal-attention-type").textContent = data.modalidad;
    document.getElementById("modal-phone").textContent = data.phone;
    document.getElementById("modal-linkedin").href = data.linkedin;
    document.getElementById("modal-description").innerHTML = data.description;
    
    modal.style.display = "block";
    void modal.offsetWidth;
    modal.classList.add("show");
  });
});

closeBtn.onclick = () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Wait for transition to finish
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Wait for transition to finish
  }
};