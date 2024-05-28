document.addEventListener("DOMContentLoaded", function (event) {
  const hamburger = document.querySelector(".hamburger"),
    navMenu = document.querySelector(".nav-menu"),
    dropdowns = document.querySelectorAll(".dropdown");

  function toggleNav() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      const content = dropdown.querySelector(".dropdown-content");
      const dropdownIcon = dropdown.querySelector(".bx-chevron-down");
      content.classList.remove("show");
      dropdownIcon.classList.remove("rotate");
    });
  }

  hamburger.addEventListener("click", () => {
    toggleNav();
  });

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    const content = dropdown.querySelector(".dropdown-content");
    const dropdownIcon = dropdown.querySelector(".bx-chevron-down");

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (content.classList.contains("show")) {
        content.classList.remove("show");
        dropdownIcon.classList.remove("rotate");
      } else {
        closeAllDropdowns();
        content.classList.add("show");
        dropdownIcon.classList.add("rotate");
      }
    });
  });

  const readMoreButton = document.querySelector(".btn.btn-more");
  const demoList = document.getElementById("demo");

  readMoreButton.addEventListener("click", function () {
    if (demoList.classList.contains("collapse")) {
      demoList.classList.remove("collapse");
      readMoreButton.querySelector("span").innerText = "Read less";
      readMoreButton.querySelector("i").classList.remove("bx-right-arrow-alt");
      readMoreButton.querySelector("i").classList.add("bx-left-arrow-alt");
    } else {
      demoList.classList.add("collapse");
      readMoreButton.querySelector("span").innerText = "Read more";
      readMoreButton.querySelector("i").classList.remove("bx-left-arrow-alt");
      readMoreButton.querySelector("i").classList.add("bx-right-arrow-alt");
    }
  });
});
