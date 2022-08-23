let isContentShown = false;

const btn = document.querySelector(".collapsible__button");
const textIfContentVisible = document.querySelector(
  ".collapsible__action--visible"
);
const textIfContentHidden = document.querySelector(
  ".collapsible__action--hidden"
);
const content = document.querySelector(".collapsible__content");

const switchText = (isContentShown) => {
  if (isContentShown) {
    textIfContentVisible.style.display = "block";
    textIfContentHidden.style.display = "none";
  } else {
    textIfContentVisible.style.display = "none";
    textIfContentHidden.style.display = "block";
  }
};

switchText(isContentShown);
content.style.opacity = "0";

const showContent = content.animate([{ opacity: "0" }, { opacity: "1" }], {
  fill: "forwards",
});

showContent.reverse();

btn.addEventListener("click", function () {
  isContentShown = !isContentShown;
  switchText(isContentShown);
  showContent.reverse();
});
