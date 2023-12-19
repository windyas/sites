let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menutoggle');


menuToggle.addEventListener('click',() => {
    menuContent.classList.toggle('on',show);
    show = !show;

});


