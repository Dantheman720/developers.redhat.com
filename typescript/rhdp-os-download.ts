class RHDPOSDownload extends HTMLElement {
    private _productCode;
    private _platformType;
    private _downloadURL;

    get productCode() {
        return this._productCode;
    }

    set productCode(value) {
        if (this._productCode === value) return;
        this._productCode = value;
        this.setAttribute('productcode', this._productCode);
    }

    get platformType() {
        return this._platformType;
    }

    set platformType(value) {
        if (this._platformType === value) return;
        this._platformType = value;
        this.setAttribute('platform-type', this._platformType)
    }

    get downloadURL() {
        return this._downloadURL;
    }

    set downloadURL(value) {
        if (this._downloadURL === value) return;
        this._downloadURL = value;
        this.setAttribute('downloadurl', this._downloadURL)
    }


    constructor() {
        super();
    }

    template = (strings, product, downloadUrl, platform) => {
        return `<div class="large-8 columns download-link">
                    <a class="button heavy-cta" href="${downloadUrl}">
                        <i class="fa fa-download"></i> Download</a>
                    <div class="version-name">${product} for ${platform}</div>
                </div>
                `;

    };

    connectedCallback() {
        this.mediaName = this.mediaName ? this.mediaName : this.stripLabelFromMedia(this.getParameterByName('p'));
        this.directLink = this.directLink ? this.directLink : this.getParameterByName('tcDownloadURL');
        this.innerHTML = this.template`${this.mediaName}${this.directLink}`;
    }

    static get observedAttributes() {
        return ['media-name', 'direct-link'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    getProductFromURL(){
        // returns the target product that will be used for the JSON reference
        let url = window.location.href;
        var regex = new RegExp("[^/.]+(?=\/download)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return results[0];

    }

}

window.addEventListener('WebComponentsReady', function() {
    customElements.define('rhdp-os-download', RHDPOSDownload);
});

