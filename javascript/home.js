//Make animations appear on mouseover

document.getElementById("home-container").onmouseover = () => {
  document.getElementById("image-animation").style.display = "block";
  document.getElementById("home-content").style.display = "block";
  setTimeout(() => {
    document.getElementById("home-title").style.display = "block";
    document.getElementById("home-text-container").style.display = "block";
  }, 2000);
};

//Go to top function

let goUpEvent = () => {
  jQuery("html,body").animate({ scrollTop: 0 }, 700);
};

document.getElementById("go-up-home-btn").addEventListener("click", goUpEvent);
