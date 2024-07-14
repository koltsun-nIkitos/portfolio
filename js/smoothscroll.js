const smoothscrollElems = document.querySelectorAll('a.header__nav__link');

smoothscrollElems.forEach((link) => {
    

    link.addEventListener('click', (event) => {
        event.preventDefault();

        const menuList = document.querySelector('.header__nav--active');
        const groupButtons = document.querySelector('.group-buttons');

        if (menuList){
            menuList.classList.toggle('header__nav--active');
            groupButtons.classList.toggle('group-buttons--active');
        }

        const id = event.target.getAttribute('href').substring(1);
        const elem = document.getElementById(id);

        elem.scrollIntoView(
            {
                block: 'start',
                behavior: 'smooth',
            }
        );
    });


});

