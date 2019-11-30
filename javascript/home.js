const pageContainer = document.getElementById("home-container");
const imageHome = document.getElementById("image-animation");
const homeTitle = document.getElementById("home-title");
const homeTextContainer = document.getElementById("home-text-container");
const homeContent = document.getElementById("home-content");
const goUpHomeBtn = document.getElementById("go-up-home-btn");

//Make animations appear on mouseover
pageContainer.onmouseover = function() {
  imageHome.style.display = "block";
  homeContent.style.display = "block";
  setTimeout(() => {
    homeContent.style.borderLeftColor = "rgb(44, 52, 58, 0.5)";
    homeTitle.style.display = "block";
    homeTextContainer.style.display = "block";
  }, 2000);
};

//Go to top function
let goUpEvent = () => {
  jQuery("html,body").animate({ scrollTop: 0 }, 700);
};

goUpHomeBtn.addEventListener("click", goUpEvent);
