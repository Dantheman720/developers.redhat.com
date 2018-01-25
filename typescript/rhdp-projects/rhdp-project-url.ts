class RHDPProjectURL extends HTMLElement {

    private _uri = new URL(window.location.href); // https://developers.redhat.com/search/?q=term+term1+term2&f=a+b+c&s=sort&r=100
    private _term;
    private _filters;


    get uri(): URL {
        return this._uri;
    }

    set uri(value: URL) {
        this._uri = value;
    }

    get term(): string{
        return this._term;
    }

    set term(value: string) {
        if(value.length > 0){
            this.uri.searchParams.set('filter-text',value);
        }
        this._term = value;
    }

    get filters() {

        return this._filters;
    }

    set filters(value) {
        if(value.length > 0){
            this.uri.searchParams.set('filter-product',value);
        }
        this._filters = value;
    }

    constructor() {
        super();
        this._updateURI = this._updateURI.bind(this);
    }

    connectedCallback() {
        top.addEventListener('data-results-complete', this._updateURI)
    }

    _updateURI(e){
        if(e.detail.term || e.detail.filter){
            this.term = e.detail.term ? e.detail.term : '';
            this.filters = e.detail.filter ? e.detail.filter : '';
            history.pushState({}, 'RHDP Projects:', `${this.uri.pathname}${this.uri.searchParams ? `#!${this.uri.searchParams}` : ''}`);
        }


    }
    static get observedAttributes() {
        return ['loading'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

}

window.addEventListener('WebComponentsReady', function() {
    customElements.define('rhdp-project-url', RHDPProjectURL);
});