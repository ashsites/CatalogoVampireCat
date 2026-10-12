const CONFIG = {
  instagram: "https://instagram.com/vampirecat.cr",
  facebook:  "https://www.facebook.com/people/Vampire-Cat/61594929705251/",
  moneda: "₡",
};

const PRODUCTOS = [
  { nombre: "Prensas de estrella blancas y negras", precio: 600, detalle: "por 2 unidades", cat: "prensas", nuevo: true, img: "imagenes-catalogo/estrellitas-sueltas.jpeg" },
  { nombre: "Pliego de prensas de estrella", precio: 1300, detalle: "todo el pliego", cat: "prensas", nuevo: true, img: "imagenes-catalogo/estrellitas-conjunto.jpeg" },
  { nombre: "Lazos rosados con perlitas", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rosados-con-perlitas.jpeg" },
  { nombre: "Lazos blancos con perlitas", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-blancos-con-perlitas.jpeg" },
  { nombre: "Lazos fucsia con florecita", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-fucsia-con-flores.jpeg" },
  { nombre: "Lazos rojos con florecita", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rojos-con-flores.jpeg" },
  { nombre: "Lazos lilas con florecita", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-lilas-con-flores.jpeg" },
  { nombre: "Lazos morados con florecita", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-morados-con-flores.jpeg" },
  { nombre: "Lazos rosados con florecita", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rosados-con-flores.jpeg" },
  { nombre: "Lazos blancos con florecita", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-blancos-con-flores.jpeg" },
  { nombre: "Lazos rosados con dona", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rosa-con-dona.jpeg" },
  { nombre: "Lazos celestes con dona", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-celeste-con-dona.jpeg" },
  { nombre: "Lazos fucsia con dona", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-fucsia-con-dona.jpeg" },
  { nombre: "Lazos rojos con dona", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rojo-con-dona.jpeg" },
  { nombre: "Lazos lilas con dona", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-lila-con-dona.jpeg" },
  { nombre: "Lazos rosa pastel con flor", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rosa-con-flor.jpeg" },
  { nombre: "Lazos color piel con flor", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-piel-con-flor.jpeg" },
  { nombre: "Lazos rosa chicle con flor", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rosados-con-flor.jpeg" },
  { nombre: "Lazos rojos con flor", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rojos-con-flor.jpeg" },
  { nombre: "Lazos celestes con flor", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-celestes-con-flor.jpeg" },
  { nombre: "Lazos navideños verdes", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-4.jpeg" },
  { nombre: "Lazos navideños blancos", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-5.jpeg" },
  { nombre: "Lazos navideños rojos", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-6.jpeg" },
  { nombre: "Lazos navideños rojos", precio: 600, detalle: "o 2 pares por ₡1.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-7.jpeg" },
  { nombre: "Lazos navideños grandes blancos", precio: 1500, detalle: "cada uno", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-1.jpeg" },
  { nombre: "Lazos navideños grandes rojos", precio: 1500, detalle: "cada uno", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-2.jpeg" },
  { nombre: "Lazos navideños grandes verdes", precio: 1500, detalle: "cada uno", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-navidad-3.jpeg" },
  { nombre: "Lazos mini rosados y blancos", precio: 600, detalle: "cada uno o los 4 por ₡2.000", cat: "lazos", nuevo: true, img: "imagenes-catalogo/lazos-rosados-blancos.jpeg" },
  { nombre: "Prensas grandes con puntitos en colores", precio: 1500, detalle: "cada una", cat: "prensas", nuevo: true, img: "imagenes-catalogo/prensas-grandes-1.jpeg" },
  { nombre: "Prensas grandes con puntitos negras y mostaza", precio: 1500, detalle: "cada una", cat: "prensas", nuevo: true, img: "imagenes-catalogo/prensas-grandes-2.jpeg" },
  { nombre: "Pulseras navideñas doradas", precio: 1500, detalle: "cada una", cat: "pulseras", nuevo: true, img: "imagenes-catalogo/pandoras-doradas.jpeg" },
  { nombre: "Pulseras navideñas plateadas", precio: 1500, detalle: "cada una", cat: "pulseras", nuevo: true, img: "imagenes-catalogo/pandoras-grises.jpeg" },
  { nombre: "Prensitas Hello Kitty negras", precio: 600, detalle: "cada una o las 5 por ₡2.000", cat: "prensas", nuevo: true, img: "imagenes-catalogo/prensitas-hello-kitty-negras.jpeg" },
  { nombre: "Prensitas Hello Kitty transparentes", precio: 600, detalle: "cada una o las 5 por ₡2.000", cat: "prensas", nuevo: true, img: "imagenes-catalogo/prensitas-hello-kitty-transparentes.jpeg" },
];

const NOMBRES_CAT = {
  lazos: "Lazos", vinchas: "Vinchas", prensas: "Prensas", pulseras: "Pulseras",
};

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const normalizar = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const precio = (n) => CONFIG.moneda + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const ICONO_PATITA = `<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="31" rx="9" ry="8" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="12" cy="20" rx="4" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="20" cy="12" rx="4" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="29" cy="12" rx="4" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="37" cy="20" rx="4" ry="5" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;

const EXTENSIONES = [".jpeg", ".jpg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

function cargarImagen(img) {
  const base = img.dataset.img;
  let i = 0;
  const probar = () => { if (i < EXTENSIONES.length) img.src = base + EXTENSIONES[i++]; };
  img.addEventListener("error", probar);
  probar();
}
$$("img[data-img]").forEach(cargarImagen);

(function ponerFavicon() {
  const link = $("#favicon");
  const base = "imagenes-tienda/IconoCorazon1";
  let i = 0;
  const probar = () => {
    if (i >= EXTENSIONES.length) return;
    const url = base + EXTENSIONES[i++];
    const t = new Image();
    t.onload = () => { link.href = url; };
    t.onerror = probar;
    t.src = url;
  };
  probar();
})();

function tarjeta(p) {
  const media = p.img
    ? `<img src="${esc(encodeURI(p.img))}" alt="${esc(p.nombre)}" loading="lazy" />`
    : `<div class="img-slot">${ICONO_PATITA}<span>Tu foto aquí</span></div>`;
  const etiqueta = p.nuevo ? `<span class="badge">Nuevo</span>` : "";

  return `
    <article class="card reveal" data-cat="${esc(p.cat)}" data-new="${p.nuevo ? "1" : "0"}" data-name="${esc(p.nombre)}">
      <div class="card__media">
        ${media}
        ${etiqueta}
      </div>
      <h3 class="card__name">${esc(p.nombre)}</h3>
      <p class="card__price">${precio(p.precio)}${p.detalle ? " " + esc(p.detalle) : ""}</p>
    </article>`;
}

const grid = $("#productGrid");
grid.innerHTML = PRODUCTOS.map(tarjeta).join("");
const cards = $$(".card", grid);

const estiloLb = document.createElement("style");
estiloLb.textContent = `
  .card:has(.card__media img) { cursor: zoom-in; }
  .lightbox { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; gap: 12px; padding: 64px 12px 24px; background: rgba(18, 10, 18, .9); }
  .lightbox[hidden] { display: none; }
  .lightbox__fig { margin: 0; max-width: min(92vw, 900px); display: flex; flex-direction: column; align-items: center; gap: 12px; }
  .lightbox__img { max-width: 100%; max-height: calc(100vh - 170px); max-height: calc(100dvh - 170px); object-fit: contain; border-radius: 12px; background: #fff; }
  .lightbox__cap { color: #fff; text-align: center; font-size: 1rem; line-height: 1.4; }
  .lightbox__cap strong { display: block; font-weight: 600; }
  .lightbox__close, .lightbox__nav { flex: none; width: 44px; height: 44px; display: grid; place-items: center; border: 0; border-radius: 50%; background: rgba(255, 255, 255, .16); color: #fff; font-size: 28px; line-height: 1; cursor: pointer; }
  .lightbox__close:hover, .lightbox__nav:hover { background: rgba(255, 255, 255, .3); }
  .lightbox__close { position: absolute; top: 12px; right: 12px; }
  @media (max-width: 600px) {
    .lightbox { padding: 64px 8px 76px; }
    .lightbox__nav { position: absolute; bottom: 16px; }
    .lightbox__nav--prev { left: 20px; }
    .lightbox__nav--next { right: 20px; }
  }
`;
document.head.appendChild(estiloLb);

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.hidden = true;
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.setAttribute("aria-label", "Imagen ampliada");
lightbox.innerHTML = `
  <button class="lightbox__close" aria-label="Cerrar">&times;</button>
  <button class="lightbox__nav lightbox__nav--prev" aria-label="Anterior">&#8249;</button>
  <figure class="lightbox__fig">
    <img class="lightbox__img" alt="" />
    <figcaption class="lightbox__cap"></figcaption>
  </figure>
  <button class="lightbox__nav lightbox__nav--next" aria-label="Siguiente">&#8250;</button>`;
document.body.appendChild(lightbox);

const lbImg = $(".lightbox__img", lightbox);
const lbCap = $(".lightbox__cap", lightbox);
const lbPrev = $(".lightbox__nav--prev", lightbox);
const lbNext = $(".lightbox__nav--next", lightbox);
const lbClose = $(".lightbox__close", lightbox);
let lbLista = [];
let lbIndice = 0;

function mostrarLb() {
  const c = lbLista[lbIndice];
  const im = $(".card__media img", c);
  lbImg.src = im.currentSrc || im.src;
  lbImg.alt = im.alt;
  lbCap.innerHTML = `<strong>${esc($(".card__name", c).textContent)}</strong>${esc($(".card__price", c).textContent)}`;
  const varias = lbLista.length > 1;
  lbPrev.hidden = lbNext.hidden = !varias;
}
function abrirLb(card) {
  lbLista = cards.filter((c) => !c.hidden && $(".card__media img", c));
  lbIndice = Math.max(0, lbLista.indexOf(card));
  mostrarLb();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lbClose.focus();
}
function cerrarLb() {
  lightbox.hidden = true;
  lbImg.removeAttribute("src");
  document.body.style.overflow = "";
}
function moverLb(d) {
  lbIndice = (lbIndice + d + lbLista.length) % lbLista.length;
  mostrarLb();
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card && $(".card__media img", card)) abrirLb(card);
});
lbClose.addEventListener("click", cerrarLb);
lbPrev.addEventListener("click", () => moverLb(-1));
lbNext.addEventListener("click", () => moverLb(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox__fig")) cerrarLb();
});
document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") cerrarLb();
  else if (e.key === "ArrowLeft" && lbLista.length > 1) moverLb(-1);
  else if (e.key === "ArrowRight" && lbLista.length > 1) moverLb(1);
});
window.addEventListener("hashchange", () => { if (!lightbox.hidden) cerrarLb(); });

$("#catsShop").appendChild($("#catTpl").content.cloneNode(true));

const emptyMsg = $("#emptyMsg");
const catalogTitle = $("#catalogTitle");
const searchInput = $("#searchInput");

const TITULOS = { todos: "Todo el catálogo", nuevos: "Nuevos ingresos", ...NOMBRES_CAT };
let filtro = "todos";

function aplicar() {
  const q = normalizar(searchInput.value.trim());
  let visibles = 0;

  cards.forEach((c) => {
    const okCat = filtro === "todos" || (filtro === "nuevos" ? c.dataset.new === "1" : c.dataset.cat === filtro);
    const okTxt = !q || normalizar(c.dataset.name).includes(q);
    const mostrar = okCat && okTxt;
    c.hidden = !mostrar;
    if (mostrar) { visibles++; c.classList.add("is-visible"); }
  });

  emptyMsg.hidden = visibles > 0;
  catalogTitle.textContent = q ? `Resultados para “${searchInput.value.trim()}”` : (TITULOS[filtro] || "Catálogo");
  $$(".cat").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === filtro));
}

function elegirFiltro(nombre) {
  filtro = nombre;
  searchInput.value = "";
  aplicar();
}

const VISTAS = ["inicio", "tienda", "nosotros", "contacto"];
const vistas = $$("[data-view]");
let vistaActual = null;

function mostrarVista(nombre) {
  vistas.forEach((v) => { v.hidden = v.dataset.view !== nombre; });
  $$(".nav__link").forEach((a) => a.classList.toggle("is-active", a.dataset.route === nombre));
  vistaActual = nombre;
  document.title = {
    inicio: "Inicio · Vampire Cat",
    tienda: "Tienda · Vampire Cat",
    nosotros: "Nosotros · Vampire Cat",
    contacto: "Contacto · Vampire Cat",
  }[nombre];
}

function ruta() {
  const h = location.hash.replace("#", "");

  const nombre = VISTAS.includes(h) ? h : "inicio";
  if (nombre !== vistaActual) {
    mostrarVista(nombre);
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}
window.addEventListener("hashchange", ruta);

function irA(vista) {
  if (location.hash === "#" + vista) ruta(); else location.hash = vista;
}

$$(".cat").forEach((btn) => {
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    elegirFiltro(vistaActual === "tienda" && filtro === f ? "todos" : f);
    if (vistaActual !== "tienda") irA("tienda");
  });
});

$("#heroBtn").addEventListener("click", () => elegirFiltro("todos"));
$$('.nav__link[data-route="tienda"]').forEach((a) => a.addEventListener("click", () => elegirFiltro("todos")));

searchInput.addEventListener("input", () => { filtro = "todos"; aplicar(); });
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchInput.value) { searchInput.value = ""; aplicar(); }
});

const burger = $("#burger");
const nav = $("#nav");

function cerrarMenuMovil() {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", false);
}
burger.addEventListener("click", () => {
  const abierto = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", abierto);
});
$$(".nav__link, .logo").forEach((a) => a.addEventListener("click", cerrarMenuMovil));

["#igFooter", "#igContact"].forEach((id) => { $(id).href = CONFIG.instagram; });
["#fbFooter", "#fbContact"].forEach((id) => { $(id).href = CONFIG.facebook; });
$("#year").textContent = new Date().getFullYear();

const revealEls = $$(".reveal, .cat, .section-head, .story__img, .story__text, .social-card, .info-card");
revealEls.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

aplicar();
ruta();
