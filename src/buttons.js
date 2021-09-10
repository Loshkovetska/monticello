class ButtonsHandlers {
    constructor() {
        this.buttonScroll = document.querySelector('.button--scroll');
        this.menuList = document.querySelector('.navigation__list');
    }

    init() {
        this.buttonScroll.addEventListener('click', () => {
            window.location.href = window.location.href.split('#')[0] + '#about';
        });

        this.menuList.addEventListener('click', (e) => this.menuListHandler(e));
    }

    menuListHandler(e) {
        const parentNode = e.target.parentNode;
        if (parentNode.classList.contains('navigation__item')) {
            const activeLink = document.querySelector('.navigation__item--active');
            activeLink.classList.remove('navigation__item--active');
            parentNode.classList.add('navigation__item--active');
        }
    }
}

new ButtonsHandlers().init();