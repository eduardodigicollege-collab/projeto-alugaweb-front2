function abrirMenu(){
    let overlay = document.querySelector("#overlay");
    let menu = document.querySelector("#menu");

    overlay.classList.remove("invisible", "opacity-0");
    menu.classList.remove("-left-[80%]");
    menu.classList.add("left-0");
}
function fecharMenu(){
    let overlay = document.querySelector("#overlay");
    overlay.classList.add("invisible", "opacity-0");
    menu.classList.remove("left-0");
    menu.classList.add("-left-[80%]");
}