class RHDPProjectQuery extends HTMLElement {

    private _dcpUrl = 'https://dcp2.jboss.org/v2/rest/search/suggest_project_name_ngram_more_fields?sort=sys_title&query=';
    private _term = '';
    private _filter;
    private _data;
    // TODO: Fix this ugly hack. Add upstream projects to products once Drupal REST endpoints are exposed.
    productData = {
        "amq": {"upstream": ["activemq","fabric8"]},
        "bpmsuite": {"upstream": ["drools","guvnor","optaplanner","jbpm"]},
        "brms": {"upstream": ["optaplanner","drools","guvnor"]},
        "datagrid": {"upstream": ["infinispan","jgroups","hibernate_subprojects_search"]},
        "datavirt": {"upstream": ["teiid","teiiddesigner","modeshape"]},
        "devstudio": {"upstream": ["jbosstools"]},
        "eap": {"upstream": ["wildfly","jgroups","hibernate","hornetq","jbossclustering","jbossmc","narayana","jbossweb","jbossws","ironjacamar","jgroups","mod_cluster","jbossas_osgi","jbosssso","picketlink","resteasy","weld","wise","xnio"]},
        "fuse": {"upstream": ["camel","karaf","activemq","cxf","fabric8","switchyard","hawtio"]},
        "rhel": {"upstream": ["fedora"]},
        "webserver": {"upstream": ["tomcat","httpd","mod_cluster"]},
    };


    get term() {
        return this._term;
    }

    set term(value) {
        this._term = value;
    }

    get filter() {
        return this._filter;
    }

    set filter(value) {
        this._filter = value;
    }

    get dcpUrl(): string {
        return this._dcpUrl;
    }

    set dcpUrl(value: string) {
        this._dcpUrl = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    constructor() {
        super();

        this._filterChange = this._filterChange.bind(this);
        this._termChange = this._termChange.bind(this);
    }

    connectedCallback() {
        top.addEventListener('project-filter-change', this._filterChange);
        top.addEventListener('project-term-change', this._termChange);
        this.doSearch()
    }

    doSearch(){
        console.log("You are now in the rhdp-project-query : doSearch function");
        this.dispatchEvent(new CustomEvent('result-start', { bubbles: true }));
        let qUrl = new URL(this.dcpUrl);
        qUrl.searchParams.set('sort', 'sys_title');
        qUrl.searchParams.set('query', this.term);

        if(this.filter){
            var upstreamProjects = this.productData[this.filter]['upstream'];
            for(let i=0; i < upstreamProjects.length; i++){

                qUrl.searchParams.append('project',upstreamProjects[i])
            }
        }
        fetch(qUrl.toString())
            .then((resp) => resp.json())
            .then((data) => {
                this.data = data;
                this.dispatchEvent(new CustomEvent('data-results-complete', {
                    detail: {
                        data : this.data,
                        term : this.term,
                        filter: this.filter
                    },
                    bubbles: true
                }))
            });
    }

    _termChange(e){
        console.log("HEY FUCKER! this is your term! " + e.detail.term);
        if(e.detail && e.detail.term) {
            this.term = e.detail.term;

        }
        this.doSearch();

    }

    _filterChange(e){
        console.log("HEY FUCKER! this is your FILTER! " + e.detail.filter);
        if(e.detail && e.detail.filter) {
            this.filter = e.detail.filter;

        }
        this.doSearch();

    }
    static get observedAttributes() {
        return ['loading'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

}

window.addEventListener('WebComponentsReady', function() {
    customElements.define('rhdp-project-query', RHDPProjectQuery);
});