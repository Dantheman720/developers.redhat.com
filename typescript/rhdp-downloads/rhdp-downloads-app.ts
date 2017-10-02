class RHDPDownloadsApp extends HTMLElement {
    constructor() {
        super();
    }

    //_url = 'http://dcp.stage.jboss.org/v2/rest/search';
    _url;

    popularProduct = new RHDPDownloadsPopularProducts();

    get url() {
        return this._url;
    }


    set url(val) {
        if (this._url === val) return;
        this._url = val;
        this.setAttribute('url', this.url);
    }

    template = `<div class="hero hero-wide hero-downloads">
                    <div class="row">
                        <div class="large-12 medium-24 columns" id="downloads">
                            <h2>Downloads</h2>
                        </div>
                    </div>
                </div>
                <div class="most-popular-downloads">
                    <div class="row">
                        <div class="large-24 column">
                            <h3>Most Popular</h3>
                        </div>
                    </div>
                
                    <div class="row">
                    </div>
                </div>
                <div class="row" id="downloads">
                    <div class="large-24 columns">
                        <h3 class="downloads-header">All Downloads</h3>
                    </div>
                </div>`;



    connectedCallback() {
        this.innerHTML = this.template;
        this.querySelector('.row .large-12').appendChild(this.popularProduct);
        this.addGroupHeadings()

    }

    addGroupHeadings(){
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('accelerated_development_and_management','ACCELERATED DEVELOPMENT AND MANAGEMENT'));
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('developer_tools','DEVELOPER TOOLS'));
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('infrastructure','INFRASTRUCTURE'));
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('integration_and_automation','INTEGRATION AND AUTOMATION'));
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('mobile','MOBILE'));
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('cloud','CLOUD'));
        this.querySelector('#downloads').appendChild(new RHDPDownloadsAll('runtimes','RUNTIMES'));

    }

    static get observedAttributes() { 
        return ['url', 'name']; 
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

}