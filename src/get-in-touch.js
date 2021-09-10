class GetInTouch {
    constructor() {
        this.form = document.querySelector('.form--contact');
        this.buttonSubmit = document.querySelector('.button--submit');
    }

    init() {
        this.buttonSubmit.addEventListener('click', (e) => this.buttonSubmitHandler(e));
    }

    buttonSubmitHandler(e) {
        e.preventDefault();
        const url = "https://httpbin.org/post";

        fetch(url, {
            method: 'post',
            body: new FormData(this.form)
        })
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else throw new Error("HTTP status " + response.status + " " + response.statusText);
                },
                reject => {
                    throw new Error(reject);
                })
            .then(result => {
                alert(`Hello, ${result.form['user-name']}! We'll call you later`);
            }).catch(e => {
                if (e.message === 'TypeError: Failed to fetch') {
                    alert("Something's gone wrong");
                }
            });
    }
}

new GetInTouch().init();