(function () {
  "use strict";

  function currentPage() {
    var map = {
      "servicios.html": "servicios",
      "sobre-mi.html": "sobre-mi",
      "contacto.html": "contacto"
    };
    var filename = window.location.pathname.split("/").pop() || "index.html";
    return map[filename] || "inicio";
  }

  var links = [
    { label: "Inicio", href: "index.html", key: "inicio" },
    { label: "Servicios", href: "servicios.html", key: "servicios" },
    { label: "Sobre mí", href: "sobre-mi.html", key: "sobre-mi" },
    { label: "Contacto", href: "contacto.html", key: "contacto" }
  ];

  var page = currentPage();

  var navLinks = links
    .map(function (link) {
      if (link.key === "contacto") {
        return "";
      }
      return (
        '<a href="' + link.href + '"' + (page === link.key ? ' class="active"' : "") + ">" + link.label + "</a>"
      );
    })
    .join("");

  var headerHtml =
    '<div class="container header-inner">' +
    '<a class="brand" href="index.html">Marisa Cara<span>Psicóloga sanitaria</span></a>' +
    '<button class="nav-toggle" id="nav-toggle" aria-label="Abrir menú" aria-expanded="false">' +
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
    "</button>" +
    '<nav class="main-nav" id="main-nav">' +
    navLinks +
    '<a href="contacto.html" class="btn btn-primary nav-cta">Contacto</a>' +
    "</nav>" +
    "</div>";

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = headerHtml;
  }

  var footerHtml =
    '<div class="container">' +
    '<div class="footer-grid">' +
    "<div>" +
    '<a class="brand" href="index.html">Lorem Ipsum<span>Psicología</span></a>' +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" +
    "</div>" +
    '<div class="footer-col">' +
    "<h4>Navegación</h4>" +
    "<ul>" +
    '<li><a href="index.html">Inicio</a></li>' +
    '<li><a href="servicios.html">Servicios</a></li>' +
    '<li><a href="sobre-mi.html">Sobre mí</a></li>' +
    '<li><a href="contacto.html">Contacto</a></li>' +
    "</ul>" +
    "</div>" +
    '<div class="footer-col">' +
    "<h4>Contacto</h4>" +
    '<ul class="footer-contact">' +
    "<li>" +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>' +
    "Calle Lorem Ipsum, 00 · 00000 Ciudad" +
    "</li>" +
    "<li>" +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>' +
    "+34 000 00 00 00" +
    "</li>" +
    "<li>" +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>' +
    "hola@loremipsum.es" +
    "</li>" +
    "</ul>" +
    "</div>" +
    '<div class="footer-col">' +
    "<h4>Legal</h4>" +
    "<ul>" +
    '<li><a href="#">Aviso legal</a></li>' +
    '<li><a href="#">Política de privacidad</a></li>' +
    '<li><a href="#">Política de cookies</a></li>' +
    "</ul>" +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    "<p>© 2026 Lorem Ipsum · Psicología. Todos los derechos reservados.</p>" +
    "<nav>" +
    '<a href="#">Aviso legal</a>' +
    '<a href="#">Privacidad</a>' +
    '<a href="#">Cookies</a>' +
    "</nav>" +
    "</div>" +
    "</div>";

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = footerHtml;
  }
})();