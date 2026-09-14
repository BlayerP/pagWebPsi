(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var nombre = form.querySelector("#nombre");
      var email = form.querySelector("#email");
      var mensaje = form.querySelector("#mensaje");
      var privacidad = form.querySelector("#privacidad");
      var success = document.getElementById("form-success");

      var valid = true;
      if (!nombre.value.trim()) {
        nombre.focus();
        valid = false;
      } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
        email.focus();
        valid = false;
      } else if (!mensaje.value.trim()) {
        mensaje.focus();
        valid = false;
      } else if (!privacidad.checked) {
        privacidad.focus();
        valid = false;
      }

      if (valid && success) {
        success.classList.add("show");
        form.reset();
      }
    });
  }

  var nlForm = document.getElementById("newsletter-form");
  if (nlForm) {
    nlForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = nlForm.querySelector("#newsletter-email");
      var error = document.getElementById("newsletter-error");
      var success = document.getElementById("newsletter-success");

      error.classList.remove("show");
      success.classList.remove("show");

      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
        error.classList.add("show");
        email.focus();
        return;
      }

      success.classList.add("show");
      nlForm.reset();
    });
  }
})();