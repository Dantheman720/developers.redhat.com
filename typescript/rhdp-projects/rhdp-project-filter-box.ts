class RHDPProjectFilterBox extends HTMLElement {

    private _term = '';
    private _filter = '';

    get filter(): string {
        return this._filter;
    }

    set filter(value: string) {
        if (this._filter === value) return;
        this._filter = decodeURI(value);
        this.querySelector('select[name="filter-products"]').setAttribute('value', this.filter);
    }

    get term(): string {
        return this._term;
    }

    set term(value: string) {
        if (this._term === value) return;
        this._term = decodeURI(value);
        this.querySelector('input').setAttribute('value', this.term);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.template`${this}`;
        this.addEventListener('keyup', e => {
            e.preventDefault();
            this._termChange(e);
        })
        this.querySelector('select[name="filter-products"]').addEventListener('change', e => {
            e.preventDefault();
            this._filterChange(e);
        })
    }


    _filterChange(e){
        this.filter = e.currentTarget.value;
        this.dispatchEvent(new CustomEvent('project-filter-change', {
            detail: {
                filter: this.filter
            },
            bubbles: true
        }));
    }

    _termChange(e){

        this.term = this.querySelector('input').value;
        this.dispatchEvent(new CustomEvent('project-term-change', {
            detail: {
                term: this.term
            },
            bubbles: true
        }));
    }
    static get observedAttributes() {
        return ['loading'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    template = (strings, project) => {
        return `
        <form action="" class="project-filters" method="GET" data-drupal-form-fields="">
            <h4>Filters<a class="project-filters-clear" href="#">Clear All Filters</a></h4>
            <input name="filter-text" placeholder="Filter by keyword" type="text" value="${project.term}">
            <div class="filter-block">
                <h5>Included In</h5>
        
                <div class="styled-select"><select name="filter-products">
                    <option value="">Select Product...</option>
                    <option value="amq">Red Hat JBoss AMQ</option>
                    <option value="bpmsuite">Red Hat JBoss BPM Suite</option>
                    <option value="brms">Red Hat JBoss BRMS</option>
                    <option value="datagrid">Red Hat JBoss Data Grid</option>
                    <option value="datavirt">Red Hat JBoss Data Virtualization</option>
                    <option value="devstudio">Red Hat JBoss Developer Studio</option>
                    <option value="eap">Red Hat JBoss Enterprise Application Platform</option>
                    <option value="fuse">Red Hat JBoss Fuse</option>
                    <option value="rhel">Red Hat Enterprise Linux</option>
                    <option value="webserver">Red Hat JBoss Web Server</option>
                </select></div>
            </div>
        </form>
`;
    }

}

window.addEventListener('WebComponentsReady', function() {
    customElements.define('rhdp-project-filter-box', RHDPProjectFilterBox);
});