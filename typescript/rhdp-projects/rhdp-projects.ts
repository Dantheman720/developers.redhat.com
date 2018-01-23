class RHDPProjects extends HTMLElement {

    private _loading = true;
    private _data;


    get loading() {
        return this._loading;
    }

    set loading(value) {
        if(value == false){
            this.querySelector('ul.results').classList.remove('loading');
        }else{
            this.querySelector('ul.results').classList.add('loading');
        }
        this._loading = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.template`${this}`;
    }

    static get observedAttributes() {
        return ['loading'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template`${this}`;
    }


    template = (strings, project) => {
        return `

        <ul class="small-block-grid-2 large-block-grid-4 medium-block-grid-3 results ${project.loading == true ? 'loading' : ''}"></ul>
        
        `;
    }
}

window.addEventListener('WebComponentsReady', function() {
    customElements.define('rhdp-projects', RHDPProjects);
});