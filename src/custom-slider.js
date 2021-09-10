class CustomSlider {
    constructor() {
        this.controls = document.querySelector('.dots--vertical');
        this.sliderContent = document.querySelector('.slider--header .slider__content');
        this.currentControl = 0;
    }

    init() {
        this.controls.addEventListener('click', (e) => this.controlsHandler(e));
        this.sliderContent.addEventListener('click', (e) => this.sliderContentHandler(e));
        window.innerWidth >= 1601 && this.sliderOnBigScreen();
    }

    sliderOnBigScreen() {
        let idSlide = 1;
        const idInterval = setInterval(() => {
            (idSlide === 5) ? idSlide = 1 : idSlide++;
            this.toggleContainersClass(idSlide);
            window.innerWidth < 1601 && clearInterval(idInterval);
        }, 5000);
    }

    toggleContainersClass(idSlide) {
        const currentDiv = document.querySelector('.slide--show');
        currentDiv.classList.remove('slide--show');
        const divShow = document.querySelector(`.slider--header .slide:nth-child(${idSlide})`);
        divShow.classList.add('slide--show');
    }

    slider(slideId) {
        this.toggleContainersClass(slideId);
        this.controls.children[this.currentControl].classList.remove('button--dot-selected');
        this.currentControl = slideId - 1;
        this.controls.children[slideId - 1].classList.add('button--dot-selected');
    }

    controlsHandler(e) {
        if (e.target.nodeName === 'BUTTON') {
            const slideId = e.target.dataset.slideId;
            this.slider(slideId);
        }
    }

    sliderContentHandler(e) {
        if (e.target.parentNode.classList.contains('slide')) {
            let slideId = +e.target.parentNode.dataset.slideId;
            (slideId === 5) ? slideId = 1 : slideId++;
            this.slider(slideId);
        }
    }
}

new CustomSlider().init();
