document.addEventListener('DOMContentLoaded', (event)=>{
    
    const menuButton = document.querySelector('.group-button--circle:first-child');
    const menuList = document.querySelector('.header__nav');
    const groupButtons = document.querySelector('.group-buttons')

    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        menuList.classList.toggle('header__nav--active');
        groupButtons.classList.toggle('group-buttons--active');
    });



});