const menu = document.getElementById('menu1');
const head1 = document.getElementById('head1');
const img2 = document.getElementById('img2');
menu.addEventListener('click', () => {
    head1.classList.toggle('show');
    if (img2.src.includes("imgs/CombinedShape.png")) {
        img2.src = "imgs/CombinedShape(1).png";
    } else {
        img2.src = "imgs/CombinedShape.png";
    }
    console.log('clicked');
})