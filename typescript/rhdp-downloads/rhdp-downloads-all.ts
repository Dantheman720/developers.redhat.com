class RHDPDownloadsAll extends HTMLElement {


    private _id;
    private _heading;

    constructor(id, heading) {
        super();
        this.id = id;
        this.heading = heading;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get heading() {
        return this._heading;
    }

    set heading(value) {
        this._heading = value;
    }

    template = (strings, id, heading) => {
        return `<div class="download-list">
                    <div class="large-24 category-label" id="${id}">
                        <h4>${heading}</h4>
                    </div>
                </div>
                `; };

    connectedCallback() {

        this.getProductsWithTargetHeading(new RHDPDownloadsProducts())
    }

    getProductsWithTargetHeading(productList){

    }
    static get observedAttributes() {
        return ['result'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

}