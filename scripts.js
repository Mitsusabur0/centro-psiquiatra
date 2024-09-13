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
const cards = document.querySelectorAll(".team-card");
const closeBtn = document.querySelector(".close");

const teamData = {
  jose: {
    name: "Andrés Heerlein Lobenstein",
    position: "Psiquiatra",
    email: "ajheerlein@gmail.com",
    phone: "",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9s-heerlein-lobenstein-46257a7a/",
    description: "Psiquiatra",
    image: "../images/andres-portrait.jpeg"
  },
  beltran: {
    name: "Estrella Muñoz",
    position: "Psicóloga",
    email: "mail",
    phone: "phone",
    linkedin: "",
    description: "Psicóloga",
    image: "../images/estrella.jpg"
  },
  bianca: {
    name: "Daniela",
    position: "Psicóloga",
    email: "mail",
    phone: "",
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
    document.getElementById("modal-phone").textContent = data.phone;
    document.getElementById("modal-linkedin").href = data.linkedin;
    document.getElementById("modal-description").textContent = data.description;
    
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