const sayingContainer = document.querySelector(".js-saying"),
    sayingTitle = sayingContainer.querySelector("h3");

const saying = [`"Things work out best for those who make the best of how things work out."`, `"If you are not willing to risk the usual, you will have to settle for the ordinary."`, `"Stop chasing the money and start chasing the passion." `, `"All our dreams can come true if we have the courage to pursue them." `
    , `"No one can make you feel inferior without your consent." `, `"Start where you are. Use what you have. Do what you can." `, `"Success is the sum of small efforts, repeated day-in and day-out."`]

function getSaying() {
    let sayingNum = Math.floor(Math.random() * saying.length);
    sayingTitle.innerText = `${saying[sayingNum]}`;
}

function init() {
    getSaying();
    setInterval(getSaying, 6000);
}

init();