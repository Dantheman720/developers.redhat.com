class RHDPProjectItem extends HTMLElement {

    private _imageUrl : String;
    private _projectName : String;
    private _downloadsLink : String;
    private _sys_url_view : String;
    private _twitterLink : String;
    private _descriptions : String;
    private _docsLink : String;
    private _issueTracker : String;
    private _githubLink : String;

    get imageUrl(): String {
        return this._imageUrl;
    }

    set imageUrl(value: String) {
        if (this._imageUrl === value) return;
        this._imageUrl = value;

    }

    get projectName(): String {
        return this._projectName;
    }

    set projectName(value: String) {
        if (this._projectName === value) return;
        this._projectName = value;
    }

    get downloadsLink(): String {
        return this._downloadsLink;
    }

    set downloadsLink(value: String) {
        if (this._downloadsLink === value) return;
        this._downloadsLink = value;
    }

    get sys_url_view(): String {
        return this._sys_url_view;
    }

    set sys_url_view(value: String) {
        if (this._sys_url_view === value) return;
        this._sys_url_view = value;
    }

    get twitterLink(): String {
        return this._twitterLink;
    }

    set twitterLink(value: String) {
        if (this._twitterLink === value) return;
        this._twitterLink = value;
    }

    get descriptions(): String {
        return this._descriptions;
    }

    set descriptions(value: String) {
        if (this._descriptions === value) return;
        this._descriptions = value;
    }

    get docsLink(): String {
        return this._docsLink;
    }

    set docsLink(value: String) {
        if (this._docsLink === value) return;
        this._docsLink = value;
    }

    get issueTracker(): String {
        return this._issueTracker;
    }

    set issueTracker(value: String) {
        if (this._issueTracker === value) return;
        this._issueTracker = value;
    }

    get githubLink(): String {
        return this._githubLink;
    }

    set githubLink(value: String) {
        if (this._githubLink === value) return;
        this._githubLink = value;
    }

    constructor() {
        super();
    }

    getCorrectUrl(url) {
        if (url.constructor === Array && url.length > 0) {
            url = url[0];
        }
        if (url.indexOf("/") > 0) {
            return url;
        } else {
            return "https://developers.redhat.com" + url;
        }

    }
    connectedCallback() {
        this.innerHTML = this.template`${this}`;
    }

    static get observedAttributes() {
        return ['type', 'size', 'heading', 'text'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template`${this}`;
    }


    template = (strings, project) => {
        return `
        <li class="upstream">
            <div class="defaultprojectimage">
                <p class="image-link"><img src="${project.imageUrl}" alt="${project.projectName}"></p></div>
            <h5 class="solution-name">
                <p class="solution-name-link">${project.projectName}</p>
            </h5>
            <p>
        
            </p>
            <a class="solution-overlay-learn link-sm">Learn more</a> | <a
                href="${project.downloadsLink}" class="link-sm">Download</a>
            <div class="project-content row">
                <div class="large-6 project-content-left columns"><img
                        src="${project.imageUrl}" alt="${project.projectName}">
                    <p><a class="upstream-download"
                          href="${project.downloadsLink}"><i
                            class="fa fa-download"></i> Download</a></p>
                    <p><a href="${project.sys_url_view}">Visit home page</a></p>
                    <ul class="project-social">
                        <li><a href="${project.twitterLink}"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div class="large-18 project-content-right columns"><h3><a href="${project.sys_url_view}">${project.projectName}</a>
                </h3>
                    <p>${project.description}</p>
                    <div class="upstream-more-content">
                        <ul class="project-details-list">
                            <li>Docs: <a href="${project.docsLink}">Documentation</a></li>
                            <li>Issue: <a href="${project.issueTracker}">github.com/dotnet/core/issues</a></li>
                            <li>Github: <a href="${project.githubLink}">github.com/dotnet/core</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>`;
    }
}

window.addEventListener('WebComponentsReady', function() {
    customElements.define('rhdp-project-item', RHDPProjectItem);
});