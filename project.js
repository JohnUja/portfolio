document.addEventListener("DOMContentLoaded", function (event) {
    const projectCards = document.querySelectorAll(".project-card");
  
    projectCards.forEach((card) => {
      card.addEventListener("click", function () {
        const url = card.getAttribute("data-url");
        if (url) {
          // Add a confirmation dialog before opening the project
          if (confirm('Do you want to open this project?')) {
            window.open(url, "_blank");
          }
        }
      });
    });
  });