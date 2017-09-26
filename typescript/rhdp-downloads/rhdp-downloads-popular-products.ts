class RHDPDownloadsPopularProducts extends HTMLElement {

    private _productList;

    constructor() {
        super();
    }

    get productList() {
        return this._productList;
    }

    set productList(value) {
        this._productList = value;
    }

    addProduct(product){

    }


    connectedCallback() {

    }

    static get observedAttributes() {
        return ['result'];
    }


    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }


}