//Go to top function

let goUpCvEvent = () => {
  jQuery("html,body").animate({ scrollTop: 0 }, 700);
};

document.getElementById("go-up-cv-btn").addEventListener("click", goUpCvEvent);

//Timeline function

const cvListItem = document.getElementsByClassName("cv-list");

for (let i = 0; i < cvListItem.length; i++) {
  const listItem = cvListItem[i];
  listItem.addEventListener("click", () => {
    listItem.children[1].classList.toggle("show");
    listItem.children[0].classList.toggle("changeColor");
    listItem.classList.toggle("c2");
  });
}
