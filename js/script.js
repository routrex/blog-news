const navLink = document.querySelectorAll(".nav-link");
const scroolEffect = document.querySelectorAll(".scrool-effect");

window.addEventListener("scroll", function () {
  const windoHeight = this.window.innerHeight;

  scroolEffect.forEach((e, i) => {
    const scroolSize = e.getBoundingClientRect().top;
    const scrollPoint = 200;

    if (scroolSize < windoHeight - scrollPoint) {
      scroolEffect[i].classList.add("active");
    }
  });
});

navLink.forEach((e) => {
  e.addEventListener("click", function(e) {
    e.preventDefault();

    const targetAttribute = this.getAttribute("href");
    const target = document.querySelector(targetAttribute);

    target.scrollIntoView({
      behavior: "smooth",
   
    });
  });
});
