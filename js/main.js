const menuButton = document.getElementById('menu-button');
const asideMenu = document.getElementById('dashboard-menu');

window.addEventListener('resize', () => {
    document.location.reload();
});

menuButton.addEventListener('click', () => {
    asideMenu.classList.toggle('show-menu')
});