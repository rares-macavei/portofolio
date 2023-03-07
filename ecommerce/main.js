
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

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
