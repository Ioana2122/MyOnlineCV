const goUpCvBtn = document.getElementById("go-up-cv-btn");
const cvListItem = document.getElementsByClassName("cv-list");

//Go to top function

let goUpCvEvent = () => {
  jQuery("html,body").animate({ scrollTop: 0 }, 700);
};

goUpCvBtn.addEventListener("click", goUpCvEvent);

//Timeline function

for (let i = 0; i < cvListItem.length; i++) {
  const listItem = cvListItem[i];
  listItem.addEventListener("click", () => {
    console.log(listItem.children[1]);
    listItem.children[1].classList.toggle("show");
    listItem.children[0].classList.toggle("changeColor");
    listItem.classList.toggle("c2");
  });
}
