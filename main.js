
(function () {
  "use strict";

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // MENU RESPONSIVO
  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector("#site-nav");

  function closeMenu(returnFocus) {
    if (!menuButton || !navigation) return;

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");

    if (returnFocus) menuButton.focus();
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Abrir menu" : "Fechar menu"
      );

      navigation.classList.toggle("is-open", !isOpen);

      if (!isOpen) {
        var firstLink = navigation.querySelector("a");

        if (firstLink && window.innerWidth < 900) {
          window.setTimeout(function () {
            firstLink.focus();
          }, 40);
        }
      } else {
        menuButton.focus();
      }
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        menuButton.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu(true);
      }
    });

    document.addEventListener("click", function (event) {
      if (
        menuButton.getAttribute("aria-expanded") === "true" &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu(false);
      }
    });

    window.addEventListener(
      "resize",
      function () {
        if (window.innerWidth >= 900) closeMenu(false);
      },
      { passive: true }
    );

    navigation.addEventListener("keydown", function (event) {
      if (event.key !== "Tab" || window.innerWidth >= 900) return;

      var links = Array.prototype.slice.call(
        navigation.querySelectorAll("a")
      );

      if (!links.length) return;

      var first = links[0];
      var last = links[links.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        menuButton.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        menuButton.focus();
      }
    });
  }

  // ANIMAÇÕES AO ENTRAR NA TELA
  var revealItems = document.querySelectorAll(".rv, .ln");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("in");
    });
  }

  // BARRA DE PROGRESSO DE LEITURA
  var progressBar = document.querySelector(".bar");
  var progressQueued = false;

  function updateProgress() {
    var scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    var progress =
      scrollable > 0
        ? Math.min(window.scrollY / scrollable, 1)
        : 0;

    if (progressBar) {
      progressBar.style.transform =
        "scaleX(" + progress.toFixed(3) + ")";
    }

    progressQueued = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!progressQueued) {
        progressQueued = true;
        window.requestAnimationFrame(updateProgress);
      }
    },
    { passive: true }
  );

  updateProgress();

  // EFEITO PARALLAX
  if (!reduceMotion) {
    var parallaxItems = Array.prototype.slice.call(
      document.querySelectorAll("[data-d]")
    );

    var parallaxQueued = false;

    function updateParallax() {
      var y = window.scrollY;

      if (y < 1200) {
        parallaxItems.forEach(function (item) {
          item.style.transform =
            "translate3d(0," +
            (
              y * Number(item.getAttribute("data-d"))
            ).toFixed(1) +
            "px,0)";
        });
      }

      parallaxQueued = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!parallaxQueued) {
          parallaxQueued = true;
          window.requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
  }

  // CONTADOR ANIMADO
  var counter = document.querySelector("[data-n]");

  if (
    counter &&
    !reduceMotion &&
    "IntersectionObserver" in window
  ) {
    var counterObserver = new IntersectionObserver(
      function (entries, observer) {
        if (!entries[0].isIntersecting) return;

        observer.disconnect();

        var startTime = performance.now();
        var target = Number(counter.getAttribute("data-n"));

        function animateCounter(now) {
          var progress = Math.min(
            (now - startTime) / 1600,
            1
          );

          var value = Math.round(
            target * (1 - Math.pow(1 - progress, 3))
          );

          counter.textContent =
            "+" + value.toLocaleString("pt-BR");

          if (progress < 1) {
            window.requestAnimationFrame(animateCounter);
          }
        }

        window.requestAnimationFrame(animateCounter);
      }
    );

    counterObserver.observe(counter);
  }
})();
