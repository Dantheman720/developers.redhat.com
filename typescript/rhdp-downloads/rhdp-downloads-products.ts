class RHDPDownloadsProducts extends HTMLElement {
    private _category;
    // private _products = '../rhdp-apps/downloads/products.json';
    private _products;
    private _data;

    get category() {
        return this._category;
    }

    set category(value) {
        if(this._category === value) return;
        this._category = value;
        this.setAttribute('category',this._category);

    }

    get products() {
        return this._products;
    }

    set products(value) {
        if(this._products === value) return;
        this._products = value;
        this.setAttribute('products',this._products);
    }


    get data() {
        return this._data;
    }

    set data(value) {
        if(this._data === value) return;
        this._data = value;
        this.setAttribute('data',this._data);
        this._createProductList();
    }


    _createProductList(){
        //if (this._data)
        //foreach product in products
            //foreach item in data
                //if item.productCode == product.productCode
                    //product.downloadLink = item.featuredArtifact.url
                    //if product.version !== 'none'
                        //product.version = item.featuredArtifact.versionName
        this._products = {"products":[{"productName":"Red Hat JBoss Data Virtualization","groupHeading":"INTEGRATION AND AUTOMATION","productCode":"datavirt","featured":false,"downloadLink":"https://developers.stage.redhat.com/download-manager/content/origin/files/sha256/b4/b466affbcc1740bf2c7c73b60bb6ffa7e1ec844fc08447224ab15aa3bcee3949/jboss-dv-6.3.0-1-installer.jar","description":"A tool that brings operational and analytical insight from data dispersed in various business units, apps, and technologies.","version":"6.3.0","learnMoreLink":"https://developers.redhat.com/products/datavirt/overview/"}]};
        this.setAttribute('products',this._products);

    }

    getProductsWithHeading(heading){
        //if(products)
            //var productCategoryList;
        //foreach product in products
            //if product.groupHeading == heading
                //productCategoryList.append(product)
        //return productCateogryList;


    }



}