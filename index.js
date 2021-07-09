const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

const google_APIKEY = "AIzaSyABXIw7ehDp5lN5FVQ8SI72H8ux53n7eqo"; f

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);

  title.classList.toggle(CLICKED_CLASS)

}

function init() {
  title.addEventListener("click", handleClick);
}

init();
