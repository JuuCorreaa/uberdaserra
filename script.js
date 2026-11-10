const WHATSAPP = "5531983027511";
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll("[data-place]").forEach(link => {
  const place = link.dataset.place;
  link.href = whatsappLink(`Olá! Vim do catálogo da Uber Serra do Cipó e escolhi ${place}. Você pode me ajudar?`);
  link.target = "_blank";
  link.rel = "noopener";
});

const filterButtons = document.querySelectorAll(".filter-chip");
const cards = document.querySelectorAll(".waterfall-card");
filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = filter !== "todas" && !(filter === "natureza" ? card.dataset.category === "natureza" : card.dataset.category === filter);
  });
}));

const track = document.querySelector(".gallery-track");
document.querySelector(".gallery-next")?.addEventListener("click", () => track?.scrollBy({left: track.clientWidth * .75, behavior:"smooth"}));
document.querySelector(".gallery-prev")?.addEventListener("click", () => track?.scrollBy({left: -track.clientWidth * .75, behavior:"smooth"}));
