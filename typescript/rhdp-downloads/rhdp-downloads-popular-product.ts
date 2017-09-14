class RhdpDownloadsPopularProduct extends HTMLElement {
    constructor() {
        super();
    }

    template = (strings, name,) => {
        return `
        <div class="large-6 column">
            <div class="popular-download-box">
                <h4>Red Hat Enterprise Linux</h4>
                <a class="button heavy-cta" data-download-id="rhel" data-fallback-url="https://access.redhat.com/downloads/content/69/" href="https://developers.redhat.com/download-manager/content/origin/files/sha256/43/431a58c8c0351803a608ffa56948c5a7861876f78ccbe784724dd8c987ff7000/rhel-server-7.4-x86_64-dvd.iso"><i class="fa fa-download"></i> Download</a>
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