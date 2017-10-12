"use strict";
// Test rhdp-search-result-count component

describe('Downloads Popular Product Item', function() {
    var wc;
    beforeEach(function() {
        wc = document.createElement('rhdp-downloads-popular-product');
    });

    afterEach(function() {
        document.body.removeChild(document.body.firstChild);
    });

    describe('properties', function() {


        beforeEach(function() {
            wc.name = "Test Name";
            wc.productId = "testproduct";
            wc.dataFallbackUrl = "http://www.testproduct.com";
            wc.downloadUrl = "http://www.downloadtestproduct.com";

            document.body.insertBefore(wc, document.body.firstChild);

        });

        it('should update productList and productList attributes', function() {
            wc.products = products;
            expect(wc.products).toEqual(products);
        });
        it('should update productList and productList attributes', function() {
            wc.products = products;
            expect(wc.products).toEqual(products);
        });
        it('should update productList and productList attributes', function() {
            wc.products = products;
            expect(wc.products).toEqual(products);
        });
        it('should update productList and productList attributes', function() {
            wc.products = products;
            expect(wc.products).toEqual(products);
        });

    });

});