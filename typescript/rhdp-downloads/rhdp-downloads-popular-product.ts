class RhdpDownloadsPopularProduct extends HTMLElement {

    private _name;
    private _productId;
    private _dataFallbackUrl;
    private _downloadUrl;


    get name() {
        return this._name;
    }

    set name(value) {
        if (this._name === value) return;
        this._name = value;
    }

    get productId() {

        return this._productId;

    }

    set productId(value) {
        if (this.productId === value) return;

        this._productId = value;
    }

    get dataFallbackUrl() {
        return this._dataFallbackUrl;
    }

    set dataFallbackUrl(value) {
        if (this.dataFallbackUrl === value) return;
        this._dataFallbackUrl = value;
    }

    get downloadUrl() {
        return this._downloadUrl;
    }

    set downloadUrl(value) {
        if (this.downloadUrl === value) return;
        this._downloadUrl = value;
    }

    constructor() {
        super();
    }

    template = (strings, name, id, dataFallbackUrl, url) => {
        return `
        <div class="large-6 column">
            <div class="popular-download-box">
                <h4>${name}</h4>
                <a class="button heavy-cta" data-download-id="${id}" data-fallback-url="${dataFallbackUrl}" href="${url}"><i class="fa fa-download"></i> Download</a>
            </div>
        </div>`; };

    connectedCallback() {

    }

    static get observedAttributes() {
        return ['result'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

}