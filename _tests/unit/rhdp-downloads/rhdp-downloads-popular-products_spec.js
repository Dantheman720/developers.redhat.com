"use strict";
// Test rhdp-search-result-count component

describe('Downloads Popular Products', function() {
    var wc;
    beforeEach(function() {
        wc = document.createElement('rhdp-downloads-popular-product-group_spec');
    });

    afterEach(function() {
        document.body.removeChild(document.body.firstChild);
    });

    describe('properties', function() {

        var product;

        beforeEach(function() {
            document.body.insertBefore(wc, document.body.firstChild);

        });
        afterEach(function() {
            product = null;

        });

        it('should update title and download attribute', function() {
            var title ='Most Popular',
                downloadURL = 'http://www.test-downloads.com';
            wc.title = title;
            wc.downloadURL = downloadURL;
            expect(wc.getAttribute('title')).toEqual(title);
            expect(wc.getAttribute('downloadURL')).toEqual(downloadURL);
        });

        it('should set the product list', function() {
            wc.title = title;
            wc.downloadURL = downloadURL;
            expect(wc.getAttribute('title')).toEqual(title);
            expect(wc.getAttribute('downloadURL')).toEqual(downloadURL);
        });
    });

});