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

        var mockProduct = {
           "productInfo" :{
               "downloadLink" : "http://www.testdownload.com",
               "title" : "Test Product",
               "description" : "Test product in group category",
               "version" : 1.0,
               "learnMoreLink" : "http://www.testdownload.com/learnmore"
           }
        };

        beforeEach(function() {
            document.body.insertBefore(wc, document.body.firstChild);

        });
        afterEach(function() {
            mockProduct = null;

        });


        it('should update the title heading', function() {
            var groupHeading ='Test Group';
            wc.groupHeading = groupHeading;
            expect(wc.getAttribute('groupHeading')).toEqual(groupHeading);
        });

        it('should set the product list', function() {
            wc.title = title;
            wc.downloadURL = downloadURL;
            expect(wc.getAttribute('title')).toEqual(title);
            expect(wc.getAttribute('downloadURL')).toEqual(downloadURL);
        });
    });

    describe('with incomplete properties', function() {
        beforeEach(function() {
            document.body.insertBefore(wc, document.body.firstChild);
        });

        it('should be blank with no values', function() {
            wc.setAttribute('url', '');
            wc.setAttribute('term', '');
            expect(wc.innerHTML.length).toEqual(0);
        });

        it('should be blank with only a URL value', function() {
            wc.setAttribute('url', 'https://developers.redhat.com/rhdp-apps/onebox/onebox.json');
            expect(wc.innerHTML.length).toEqual(0);
        });

        it('should be blank with only a term value', function() {
            wc.setAttribute('url', '');
            wc.setAttribute('term', 'Test Feature Heading');
            expect(wc.innerHTML.length).toEqual(0);
        });
    })

});