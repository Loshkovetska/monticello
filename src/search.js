class Search {
    constructor() {
        this.input = document.querySelector('.form--header > input');
        this.buttonSearch = document.querySelector('.button--search');
        this.sections = ['about', 'news', 'projects', 'contact'];
    }

    init() {
        this.buttonSearch.addEventListener('click', (e) => this.buttonSearchHandler(e));
        this.input.addEventListener('keydown', (e) => this.inputHandler(e));
    }

    buttonSearchHandler(e) {
        if (window.innerWidth <= 1024) {

            (this.input.classList.contains('input--search-visible')) ?
                this.input.classList.remove('input--search-visible') :
                this.input.classList.add('input--search-visible');
        }
        else this.request(`https://httpbin.org/get?sect=${this.input.value}`);
    }

    inputHandler(e) {
        if (e.key === 'Enter') {
            this.request(`https://httpbin.org/get?sect=${this.input.value}`);
        }
    }

    request(url) {
        fetch(url)
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else throw new Error(`HTTP status ${response.status}: ${response.statusText}`);
                },
                reject => {
                    throw new Error(reject);
                })
            .then(result => {
                const sectName = result.args.sect;
                if (this.sections.includes(sectName)) {
                    const href = window.location.href.split('#')[0];
                    window.location.href = `${href}#${result.args.sect}`;
                }
                else throw new Error("Can't find!");

            }).catch(e => {
                (e.message === 'TypeError: Failed to fetch') ? alert("Something's gone wrong") : alert(e.message);
            });
    }
}


new Search().init();