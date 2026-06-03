const WHATSAPP_NUMBER = "917620115788";
const INSTAGRAM_URL = "https://www.instagram.com/viniai.web/";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const message =
    link.getAttribute("data-message") ||
    "Hi viniAI, I want to grow my local business online. Please share details.";
  link.href = whatsappLink(message);
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.href = INSTAGRAM_URL;
  link.target = "_blank";
  link.rel = "noopener";
});

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const business = formData.get("business") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    const whatsappMessage = [
      "Hi viniAI, I want a free growth audit.",
      `Name: ${name}`,
      `Business type: ${business}`,
      `Phone: ${phone}`,
      `Message: ${message}`,
    ].join("\n");

    window.open(whatsappLink(whatsappMessage), "_blank", "noopener");
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Dynamic Floating WhatsApp Button
function initFloatingWhatsApp() {
  if (document.querySelector(".floating-whatsapp")) return;

  const defaultMsg = "Hi viniAI, I want to grow my local business online. Please share details.";
  const button = document.createElement("a");
  button.className = "floating-whatsapp";
  button.href = whatsappLink(defaultMsg);
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.setAttribute("aria-label", "Chat on WhatsApp");
  
  // Inline SVG icon for WhatsApp
  button.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.012 2c-5.506 0-9.988 4.481-9.988 9.987 0 2.013.597 3.886 1.624 5.461L2.03 22l4.704-1.233a9.92 9.92 0 0 0 5.278 1.493c5.507 0 9.988-4.481 9.988-9.987 0-5.507-4.481-9.987-9.988-9.987zm0 18.232c-1.803 0-3.486-.532-4.908-1.442l-.352-.224-2.782.729.743-2.709-.247-.384a8.163 8.163 0 0 1-1.258-4.225c0-4.526 3.684-8.211 8.213-8.211 4.525 0 8.21 3.685 8.21 8.211 0 4.526-3.685 8.212-8.21 8.212zm4.516-6.166c-.247-.123-1.463-.721-1.69-.803-.227-.082-.392-.123-.556.123-.165.247-.639.803-.784.968-.144.165-.29.186-.537.062a7.567 7.567 0 0 1-1.996-1.23c-.77-.687-1.29-1.536-1.441-1.793-.15-.257-.016-.396.114-.525.116-.117.257-.302.386-.453.129-.15.172-.257.257-.428.086-.172.043-.322-.021-.447-.065-.124-.556-1.339-.762-1.833-.2-.482-.403-.418-.556-.425l-.474-.007c-.165 0-.433.062-.659.309-.227.247-.865.845-.865 2.059 0 1.215.885 2.39 1.009 2.555.124.165 1.741 2.657 4.218 3.727.589.255 1.05.408 1.41.522.593.189 1.133.162 1.56.098.477-.072 1.463-.598 1.669-1.175.206-.577.206-1.071.144-1.175-.062-.104-.227-.165-.474-.288z"/>
    </svg>
  `;
  
  document.body.appendChild(button);
}

// Enhance Footer Links with SVG Icons
function enhanceFooterLinks() {
  const icons = {
    // Contact Section
    whatsapp: `<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    email: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    
    // Services Section
    webDesign: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    seo: `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    funnel: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    
    // Industries Section
    clinics: `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    salons: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`,
    restaurants: `<svg viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3z"></path></svg>`,
    gyms: `<svg viewBox="0 0 24 24"><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M6 5h2v14H6M16 5h2v14h-2M8 12h8"></path></svg>`,
    cafes: `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="2" x2="6" y2="8"></line><line x1="10" y1="2" x2="10" y2="8"></line><line x1="14" y1="2" x2="14" y2="8"></line></svg>`
  };

  document.querySelectorAll(".site-footer .footer-links a").forEach((link) => {
    if (link.querySelector("svg")) return;

    const text = link.textContent.trim();
    let svgHtml = "";

    // Match Contact Links
    if (link.hasAttribute("data-whatsapp") || text.includes("+91")) {
      svgHtml = icons.whatsapp;
    } else if (link.getAttribute("href")?.startsWith("mailto:") || text.includes("@")) {
      svgHtml = icons.email;
    } else if (link.hasAttribute("data-instagram") || text.toLowerCase().includes("instagram")) {
      svgHtml = icons.instagram;
    }
    // Match Services Links
    else if (text.toLowerCase().includes("website design")) {
      svgHtml = icons.webDesign;
    } else if (text.toLowerCase().includes("local seo")) {
      svgHtml = icons.seo;
    } else if (text.toLowerCase().includes("whatsapp funnel")) {
      svgHtml = icons.funnel;
    }
    // Match Industries Links
    else if (text.toLowerCase().includes("clinics")) {
      svgHtml = icons.clinics;
    } else if (text.toLowerCase().includes("salons")) {
      svgHtml = icons.salons;
    } else if (text.toLowerCase().includes("restaurants")) {
      svgHtml = icons.restaurants;
    } else if (text.toLowerCase().includes("gyms")) {
      svgHtml = icons.gyms;
    } else if (text.toLowerCase().includes("cafes")) {
      svgHtml = icons.cafes;
    }

    if (svgHtml) {
      link.innerHTML = `${svgHtml}<span>${text}</span>`;
    }
  });
}

// Initialize components
initFloatingWhatsApp();
enhanceFooterLinks();
