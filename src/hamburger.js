class Hamburger {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.menuList = document.querySelector('.navigation__list');
    }

    init() {
        this.hamburger.addEventListener('click', (e) => this.hamburgerHandler(e));
    }

    hamburgerHandler(e) {
        if (this.hamburger.classList.contains('hamburger--close')) {
            this.hamburger.classList.remove('hamburger--close');
            this.menuList.classList.remove('navigation__list--open');
        }
        else {
            this.hamburger.classList.add('hamburger--close');
            this.menuList.classList.add('navigation__list--open');
        }
    }
}

new Hamburger().init();