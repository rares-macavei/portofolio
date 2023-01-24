let numberNeeds = document.getElementById("number-needs");
let numberWants = document.getElementById("number-wants");
let numberSavings = document.getElementById("number-savings");
let counter = 0;


window.addEventListener("load", () => {
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.content-loading');
  let counter = 0;
  setInterval(() =>{
      if(counter == 15) {
          loader.classList.add("loader-hidden");
          content.classList.remove("content-loading");
          loader.addEventListener("transitionend", () => {
              document.body.removeChild("loader");
          })
      } else {
          counter += 1;
      }
  }, 80);
});