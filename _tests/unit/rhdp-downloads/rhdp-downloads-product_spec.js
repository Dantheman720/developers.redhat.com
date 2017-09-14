"use strict";
// Test rhdp-search-result-count component

describe('Product downloads', function() {
    var wc;
    beforeEach(function() {
        wc = document.createElement('rhdp-downloads-product');
        wc.mock = true;
    });

    afterEach(function() {
        document.body.removeChild(document.body.firstChild);
    });

    describe('properties', function() {
        beforeEach(function() {
            document.body.insertBefore(wc, document.body.firstChild);
        });

        it('should update title attribute', function() {
            var productName = 'Test Product';
            wc.setAttribute('productName', productName);
            expect(wc.getAttribute('productName')).toEqual(productName);
        });
        it('should update downloadLink attribute', function() {
            var downloadLink = 'http://www.testproduct.com/';
            wc.setAttribute('downloadLink',downloadLink);
            expect(wc.getAttribute('downloadLink')).toEqual(downloadLink);
        });
        it('should update description attribute', function() {
            var description = 'Setting description for test product';
            wc.setAttribute('description', description);
            expect(wc.getAttribute('description')).toEqual(description);
        });
        it('should update version attribute', function() {
            var version = '1';
            wc.setAttribute('version', version);
            expect(wc.getAttribute('version')).toEqual(version);
        });
        it('should update learnMoreLink attribute', function() {
            var learnMoreLink = 'http://www.testproduct.com/learnmore';
            wc.setAttribute('learnMoreLink', learnMoreLink);
            expect(wc.getAttribute('learnMoreLink')).toEqual(learnMoreLink);
        });
        it('should update featured attribute', function() {
            var featured = 'http://www.testproduct.com/learnmore';
            wc.setAttribute('featured', featured);
            expect(wc.getAttribute('featured')).toEqual(featured);
        });
        it('should update productCode attribute', function() {
            var productCode = 'http://www.testproduct.com/learnmore';
            wc.setAttribute('productCode', productCode);
            expect(wc.getAttribute('productCode')).toEqual(productCode);
        });

    });

});