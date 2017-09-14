class RHDPDownloadsProduct extends HTMLElement {
    _productName;
    _groupHeading;
    _productCode;
    _featured;
    _downloadLink;
    _description;
    _version;
    _learnMoreLink;

    get productName() {
        return this._productName;
    }

    set productName(value) {
        this._productName = value;
    }

    get groupHeading() {
        return this._groupHeading;
    }

    set groupHeading(value) {
        this._groupHeading = value;
    }

    get productCode() {
        return this._productCode;
    }

    set productCode(value) {
        this._productCode = value;
    }

    get featured() {
        return this._featured;
    }

    set featured(value) {
        this._featured = value;
    }

    get downloadLink() {
        return this._downloadLink;
    }

    set downloadLink(value) {
        this._downloadLink = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get version() {
        return this._version;
    }

    set version(value) {
        this._version = value;
    }

    get learnMoreLink() {
        return this._learnMoreLink;
    }

    set learnMoreLink(value) {
        this._learnMoreLink = value;
    }


}