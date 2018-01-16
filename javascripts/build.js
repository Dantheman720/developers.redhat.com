var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RHDPAlert = /** @class */ (function (_super) {
    __extends(RHDPAlert, _super);
    function RHDPAlert() {
        var _this = _super.call(this) || this;
        _this._type = 'info';
        _this._icon = true;
        _this.template = function (strings, alert) {
            return "\n        <div class=\"alert-box alert-" + alert.type + " " + (alert.size ? "alert-" + alert.size : '') + "\">\n            " + (alert.size === 'xl' ? '<div class="row">' : '') + "\n                <div class=\"icon\"></div>\n                <div class=\"alert-content\">\n                " + (alert.size === 'xl' ? '<h3>' : '<strong>') + "\n                " + (alert.heading ? alert.heading : '') + "\n                " + (alert.size === 'xl' ? '</h3>' : '</strong>') + "\n                    <p>" + alert.text + "</p>\n                </div>\n            " + (alert.size === 'xl' ? '<a class="close"></a></div>' : '') + "\n        </div>";
        };
        _this.text = _this.innerHTML;
        return _this;
    }
    Object.defineProperty(RHDPAlert.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            if (this._type === val)
                return;
            this._type = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPAlert.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            if (this._size === val)
                return;
            this._size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPAlert.prototype, "heading", {
        get: function () {
            return this._heading;
        },
        set: function (val) {
            if (this._heading === val)
                return;
            this._heading = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPAlert.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (val) {
            if (this._text === val)
                return;
            this._text = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPAlert.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            if (this._icon === val)
                return;
            this._icon = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPAlert.prototype.connectedCallback = function () {
        var _this = this;
        this.innerHTML = (_a = ["", ""], _a.raw = ["", ""], this.template(_a, this));
        this.addEventListener('click', function (e) {
            if (e.target && e.target['className'] === 'close') {
                _this.innerHTML = '';
            }
        });
        var _a;
    };
    Object.defineProperty(RHDPAlert, "observedAttributes", {
        get: function () {
            return ['type', 'size', 'heading', 'text'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPAlert.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = (_a = ["", ""], _a.raw = ["", ""], this.template(_a, this));
        var _a;
    };
    return RHDPAlert;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-alert', RHDPAlert);
});
var RHDPOSDownload = /** @class */ (function (_super) {
    __extends(RHDPOSDownload, _super);
    function RHDPOSDownload() {
        var _this = _super.call(this) || this;
        _this._rhelURL = "";
        _this._macURL = "";
        _this._winURL = "";
        _this.template = function (strings, product, downloadUrl, platform, version) {
            return "<div class=\"large-8 columns download-link\">\n                    <a class=\"button heavy-cta\" href=\"" + downloadUrl + "\">\n                        <i class=\"fa fa-download\"></i> Download</a>\n                    <div class=\"version-name\">" + product + " " + version + " " + (_this.displayOS ? "for " + platform : '') + "</div>\n                </div>\n                ";
        };
        _this.downloadsTemplate = function (strings, product, downloadUrl, platform, version) {
            return "<div class=\"large-8 columns download-link\">\n                    <a class=\"button heavy-cta\" href=\"" + downloadUrl + "\">\n                        <i class=\"fa fa-download\"></i> Download</a>\n                    <div class=\"version-name\">" + product + " " + version + " " + (_this.displayOS ? "for " + platform : '') + "</div>\n                </div>\n                ";
        };
        return _this;
    }
    Object.defineProperty(RHDPOSDownload.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            if (this._url === value)
                return;
            this._url = value;
            this.setAttribute('url', this._url);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "productCode", {
        get: function () {
            return this._productCode;
        },
        set: function (value) {
            if (this._productCode === value)
                return;
            this._productCode = value;
            this.setAttribute('product-code', this._productCode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "platformType", {
        get: function () {
            return this._platformType;
        },
        set: function (value) {
            if (this._platformType === value)
                return;
            this._platformType = value;
            this.setAttribute('platform-type', this._platformType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "downloadURL", {
        get: function () {
            return this._downloadURL;
        },
        set: function (value) {
            if (this._downloadURL === value)
                return;
            this._downloadURL = value;
            this.setAttribute('download-url', this._downloadURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "rhelURL", {
        get: function () {
            return this._rhelURL;
        },
        set: function (value) {
            if (this._rhelURL === value)
                return;
            this._rhelURL = value;
            this.setAttribute('rhel-download', this._rhelURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "macURL", {
        get: function () {
            return this._macURL;
        },
        set: function (value) {
            if (this._macURL === value)
                return;
            this._macURL = value;
            this.setAttribute('mac-download', this._macURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "winURL", {
        get: function () {
            return this._winURL;
        },
        set: function (value) {
            if (this._winURL === value)
                return;
            this._winURL = value;
            this.setAttribute('windows-download', this._winURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (value) {
            if (this._productName === value)
                return;
            this._productName = value;
            this.setAttribute('name', this._productName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            if (this._version === value)
                return;
            this._version = value;
            this.setAttribute('version', this._version);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPOSDownload.prototype, "displayOS", {
        get: function () {
            return this._displayOS;
        },
        set: function (value) {
            if (this._displayOS === value)
                return;
            this._displayOS = value;
            this.setAttribute('display-os', this._displayOS);
        },
        enumerable: true,
        configurable: true
    });
    RHDPOSDownload.prototype.connectedCallback = function () {
        this.platformType = this.getUserAgent();
        this.setDownloadURLByPlatform();
        this.innerHTML = (_a = ["", "", "", "", ""], _a.raw = ["", "", "", "", ""], this.template(_a, this.productName, this.downloadURL, this.platformType, this.version));
        var _a;
    };
    Object.defineProperty(RHDPOSDownload, "observedAttributes", {
        get: function () {
            return ['product-code', 'platform-type', 'download-url', 'name'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPOSDownload.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPOSDownload.prototype.getUserAgent = function () {
        var OSName = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1)
            OSName = "MacOS";
        if (navigator.appVersion.indexOf("Linux") != -1)
            OSName = "RHEL";
        return OSName;
    };
    RHDPOSDownload.prototype.setDownloadURLByPlatform = function () {
        if (this.winURL.length <= 0 || this.macURL.length <= 0 || this.rhelURL.length <= 0) {
            return;
        }
        this.displayOS = true;
        switch (this.platformType) {
            case "Windows":
                this.downloadURL = this.winURL;
                break;
            case "MacOS":
                this.downloadURL = this.macURL;
                break;
            case "RHEL":
                this.downloadURL = this.rhelURL;
                break;
            default:
                this.downloadURL = this.winURL;
        }
    };
    return RHDPOSDownload;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-os-download', RHDPOSDownload);
});
var RHDPThankyou = /** @class */ (function (_super) {
    __extends(RHDPThankyou, _super);
    function RHDPThankyou() {
        var _this = _super.call(this) || this;
        _this.template = function (strings, name, directLink) {
            return "<div class=\"row\">\n                    <div class=\"large-24 medium-24 small-24 columns\">\n                        <div class=\"alert-box alert-info\">\n                            <div class=\"icon\"></div>\n                            <div class=\"alert-content\">\n                                <strong>Your download should start automatically.</strong>\n                                <p>If you have any problems with the download, please use the <a id=\"download-link\" href=\"" + directLink + "\">direct link.</a></p>\n                            </div>\n                        </div>\n                \n                        <div class=\"large-24 medium-16 small-24 columns thankyou\">\n                                <h2>Thank you for downloading the:</h2>\n                                <h2>" + name + "</h2>\n                            <iframe src=\"" + directLink + "\"></iframe>\n                        </div>\n                        <div class=\"large-24 medium-16 small-24 columns\">\n                            <div class=\"thankyou-button\">\n                                <a href=\"/\" class=\"button heavy-cta\">Continue\n                                    to Homepage</a>\n                            </div>\n                        </div>\n                \n                    </div>\n                </div>";
        };
        return _this;
    }
    Object.defineProperty(RHDPThankyou.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            if (this._url === value)
                return;
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPThankyou.prototype, "mediaName", {
        get: function () {
            return this._mediaName;
        },
        set: function (value) {
            if (this._mediaName === value)
                return;
            this._mediaName = value;
            this.setAttribute('media-name', this._mediaName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPThankyou.prototype, "directLink", {
        get: function () {
            return this._directLink;
        },
        set: function (value) {
            if (this._directLink === value)
                return;
            this._directLink = value;
            this.setAttribute('direct-download', this._directLink);
        },
        enumerable: true,
        configurable: true
    });
    RHDPThankyou.prototype.connectedCallback = function () {
        this.mediaName = this.mediaName ? this.mediaName : this.stripLabelFromMedia(this.getParameterByName('p'));
        this.directLink = this.directLink ? this.directLink : this.getParameterByName('tcDownloadURL');
        this.innerHTML = (_a = ["", "", ""], _a.raw = ["", "", ""], this.template(_a, this.mediaName, this.directLink));
        var _a;
    };
    Object.defineProperty(RHDPThankyou, "observedAttributes", {
        get: function () {
            return ['media-name', 'direct-link'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPThankyou.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPThankyou.prototype.stripLabelFromMedia = function (name) {
        if (name) {
            name = name.replace(/Media:[\s]/g, "");
        }
        return name;
    };
    RHDPThankyou.prototype.getParameterByName = function (urlName) {
        this.url = this.url ? this.url : window.location.href;
        urlName = urlName.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + urlName + "(=([^&#]*)|&|#|$)"), results = regex.exec(this.url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    return RHDPThankyou;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-thankyou', RHDPThankyou);
});
var RHDPTryItNow = /** @class */ (function (_super) {
    __extends(RHDPTryItNow, _super);
    function RHDPTryItNow() {
        var _this = _super.call(this) || this;
        _this._title = '';
        _this._subtitle = '';
        _this._buttonID = '';
        _this._buttonText = '';
        _this._buttonLink = '';
        _this._icon = '';
        _this.template = function (strings, title, subtitle, buttonLink, icon, buttonText, buttonID) {
            return "<section> \n                    <div class=\"row\"> \n                        " + (icon ? "<img src=\"" + icon + "\"> " : '') + "\n                        <div class=\"tryitnow-titles\">\n                            " + (title ? "<h4>" + title + "</h4>" : '') + "\n                            " + (subtitle ? "<h5>" + subtitle + "</h5>" : '') + "\n                        </div>\n                        <a " + (buttonID ? "id=\"" + buttonID + "\" " : '') + " href=\"" + buttonLink + "\" class=\"button medium-cta white\">" + buttonText + "</a>\n                    </div>\n                </section>";
        };
        return _this;
    }
    Object.defineProperty(RHDPTryItNow.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title === value)
                return;
            this._title = value;
            this.setAttribute('title', this._title);
            this.querySelector('h4') ? this.querySelector('h4').innerHTML = this._title : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPTryItNow.prototype, "subtitle", {
        get: function () {
            return this._subtitle;
        },
        set: function (value) {
            if (this._subtitle === value)
                return;
            this._subtitle = value;
            this.setAttribute('subtitle', this._subtitle);
            this.querySelector('h5') ? this.querySelector('h5').innerHTML = this._subtitle : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPTryItNow.prototype, "buttonid", {
        get: function () {
            return this._buttonID;
        },
        set: function (value) {
            if (this._buttonID === value)
                return;
            this._buttonID = value;
            this.setAttribute('buttonid', this._buttonID);
            this.querySelector('a') ? this.querySelector('a').id = this._buttonID : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPTryItNow.prototype, "buttonlink", {
        get: function () {
            return this._buttonLink;
        },
        set: function (value) {
            if (this._buttonLink === value)
                return;
            this._buttonLink = value;
            this.setAttribute('buttonlink', this._buttonLink);
            this.querySelector('a') ? this.querySelector('a').href = this._buttonLink : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPTryItNow.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            if (this._icon === value)
                return;
            this._icon = value;
            this.setAttribute('icon', this._icon);
            this.querySelector('img') ? this.querySelector('img').src = this._icon : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPTryItNow.prototype, "buttontext", {
        get: function () {
            return this._buttonText;
        },
        set: function (value) {
            if (this._buttonText === value)
                return;
            this._buttonText = value;
            this.setAttribute('buttontext', this._buttonText);
            this.querySelector('a') ? this.querySelector('a').innerHTML = this._buttonText : '';
        },
        enumerable: true,
        configurable: true
    });
    RHDPTryItNow.prototype.connectedCallback = function () {
        this.innerHTML = (_a = ["", "", "", "", "", "", ""], _a.raw = ["", "", "", "", "", "", ""], this.template(_a, this.title, this.subtitle, this.buttonlink, this.icon, this.buttontext, this.buttonid));
        var _a;
    };
    ;
    Object.defineProperty(RHDPTryItNow, "observedAttributes", {
        get: function () {
            return ['buttontext', 'icon', 'buttonlink', 'buttonid', 'subtitle', 'title'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPTryItNow.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPTryItNow;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-tryitnow', RHDPTryItNow);
});
var DevNationLiveSession = /** @class */ (function () {
    function DevNationLiveSession(obj) {
        var _this = this;
        this._title = '';
        this._date = '';
        this._youtube_id = '';
        this._offer_id = '';
        this._abstract = '';
        this._confirmed = false;
        this._register = true;
        this._eloqua = '';
        Object.keys(obj).map(function (key) {
            _this[key] = obj[key];
        });
    }
    Object.defineProperty(DevNationLiveSession.prototype, "offer_id", {
        get: function () {
            return this._offer_id;
        },
        set: function (val) {
            if (this._offer_id === val)
                return;
            this._offer_id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (val) {
            if (this._title === val)
                return;
            this._title = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (val) {
            if (this._date === val)
                return;
            this._date = val;
            // try {
            //     var timeStamp = new Date(val);
            //     var timeString = timeStamp.toString();
            //     var x = timeString.split(' ', 4).join(' ');
            //     var t = timeStamp.toLocaleTimeString();
            //     var timezone = (String(String(timeStamp).split("(")[1]).split(")")[0]);
            //     this._date = x + " " + t + " " + timezone;
            // } catch(e) {
            //     this._date = 'Date TBD';
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "youtube_id", {
        get: function () {
            return this._youtube_id;
        },
        set: function (val) {
            if (this._youtube_id === val)
                return;
            this._youtube_id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "speakers", {
        get: function () {
            return this._speakers;
        },
        set: function (val) {
            if (this._speakers === val)
                return;
            this._speakers = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "abstract", {
        get: function () {
            return this._abstract;
        },
        set: function (val) {
            if (this._abstract === val)
                return;
            this._abstract = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "register", {
        get: function () {
            return this._register;
        },
        set: function (val) {
            if (this._register === val)
                return;
            this._register = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "confirmed", {
        get: function () {
            return this._confirmed;
        },
        set: function (val) {
            if (this._confirmed === val)
                return;
            this._confirmed = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSession.prototype, "eloqua", {
        get: function () {
            return this._eloqua;
        },
        set: function (val) {
            if (this._eloqua === val)
                return;
            this._eloqua = val;
        },
        enumerable: true,
        configurable: true
    });
    return DevNationLiveSession;
}());
var DevNationLiveSpeaker = /** @class */ (function () {
    function DevNationLiveSpeaker(obj) {
        var _this = this;
        this._name = '';
        this._intro = '';
        this._twitter = '';
        Object.keys(obj).map(function (key) {
            _this[key] = obj[key];
        });
    }
    Object.defineProperty(DevNationLiveSpeaker.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (this._name === val)
                return;
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSpeaker.prototype, "intro", {
        get: function () {
            return this._intro;
        },
        set: function (val) {
            if (this._intro === val)
                return;
            this._intro = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveSpeaker.prototype, "twitter", {
        get: function () {
            return this._twitter;
        },
        set: function (val) {
            if (this._twitter === val)
                return;
            this._twitter = val;
        },
        enumerable: true,
        configurable: true
    });
    return DevNationLiveSpeaker;
}());
var DevNationLiveApp = /** @class */ (function (_super) {
    __extends(DevNationLiveApp, _super);
    function DevNationLiveApp() {
        var _this = _super.call(this) || this;
        _this._src = '../rhdp-apps/devnationlive/devnationlive.json';
        _this._form = '../rhdp-apps/devnationlive/';
        _this._mode = 'cors';
        _this.nextSession = function (strings, next) {
            return "<section>\n            <div class=\"row\">\n                <div class=\"large-24 columns\">\n                    <h5 class=\"caps session-label\">Next Live Session</h5>\n                </div>\n                <div class=\"large-17 small-24 columns\">\n                    <h2 class=\"caps\">" + next.title + "</h2>\n                </div>\n                <div class=\"large-7 small-24 columns devnation-live-date\" data-tags=\"" + next.date + "\">\n                    <div class=\"session-date\"><span><i class=\"fa fa-calendar fa-2x right\"></i></span> " + next.date + "</div>\n                </div>\n            </div>\n            <div class=\"row\" data-video=\"" + next.youtube_id + "\">\n                <div class=\"medium-14 columns event-video\">\n                    " + (_this.getCookie('dn_live_' + next.offer_id) || !next.register ? "\n                    <div class=\"flex-video\">\n                        <iframe src=\"https://www.youtube.com/embed/" + next.youtube_id + "?rel=0&autoplay=1\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen></iframe>\n                    </div>" : "\n                    <img width=\"640\" height=\"360\" src=\"../images/design/devnationlive_herographic_0.jpg\" alt=\"" + next.title + "\">\n                    ") + "\n                </div>\n                <div class=\"medium-10 columns event-chat\" data-chat=\"" + next.youtube_id + "\">\n                    " + (_this.getCookie('dn_live_' + next.offer_id) || !next.register ? "\n                    <iframe class=\"embedded-chat\" src=\"https://www.youtube.com/live_chat?v=" + next.youtube_id + "&embed_domain=" + window.location.href.replace(/http(s)?:\/\//, '').split('/')[0] + "\"></iframe>\n                    " : "\n                    <iframe class=\"session-reg\" src=\"" + _this.form + "?id=" + next.offer_id + "\"></iframe>\n                    ") + "\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"large-24 columns divider\">\n                <p>Speaker(s): " + next.speakers.map(function (speaker) {
                return (_a = ["", ""], _a.raw = ["", ""], _this.speakerShortTemplate(_a, speaker));
                var _a;
            }).join('') + " </p>\n                <p>" + next.abstract + "</p>\n                " + next.speakers.map(function (speaker) {
                return (_a = ["", ""], _a.raw = ["", ""], _this.speakerIntroTemplate(_a, speaker));
                var _a;
            }).join('') + "\n                </div>\n            </div>\n        </section>";
        };
        _this.upcomingSession = function (strings, sess) {
            return "\n        " + (sess.confirmed ? "\n            <li class=\"single-event\">\n                <div class=\"row\">\n                    <div class=\"large-24 columns\">\n                        <h4 class=\"caps\">" + sess.title + "</h4>\n                        <p>Speaker(s): " + sess.speakers.map(function (speaker) {
                return (_a = ["", ""], _a.raw = ["", ""], _this.speakerShortTemplate(_a, speaker));
                var _a;
            }).join('') + " </p>\n                        <p>" + sess.date + "</p>\n                        <p>" + sess.abstract + "</p>\n                    </div>\n                    " + (sess.register ? "\n                        <div class=\"large-16 medium-10 small-24 columns align-center\">\n                        " + (_this.getCookie('dn_live_' + sess.offer_id) ? "\n                            <div class=\"button disabled\">You are Registered</div>"
                : "<iframe class=\"session-reg\" src=\"" + _this.form + "?id=" + sess.offer_id + "\"></iframe>\n                            </div>")
                : '') + "\n                </div>\n            </li>"
                : '');
        };
        _this.speakerShortTemplate = function (strings, speaker) {
            return " <strong>" + speaker.name + "</strong>\n            " + (speaker.twitter ? "(<a href=\"https://twitter.com/" + speaker.twitter + "\" target=\"_blank\" class=\"external-link\">@" + speaker.twitter + "</a>)" : '');
        };
        _this.speakerIntroTemplate = function (strings, speaker) {
            return "" + (speaker.intro ? "<p>" + speaker.intro + "</p>" : '');
        };
        _this.pastSession = function (strings, sess) {
            return "\n        " + (sess.confirmed ? "\n            <li class=\"single-event\">\n                <div class=\"row\">\n                    <div class=\"large-24 columns\">\n                        <h4 class=\"caps\">" + sess.title + "</h4>\n                        <p>Speaker(s): " + sess.speakers.map(function (speaker) {
                return (_a = ["", ""], _a.raw = ["", ""], _this.speakerShortTemplate(_a, speaker));
                var _a;
            }).join('') + " </p>\n                        <p>" + sess.date + "</p>\n                        <p>" + sess.abstract + "</p>\n                        <a href=\"https://developers.redhat.com/video/youtube/" + sess.youtube_id + "\" class=\"button external-link\">VIDEO</a>\n                    </div>\n                </div>\n            </li>"
                : '');
        };
        _this.template = function (strings, next, upcoming, past) {
            return "<div class=\"wide wide-hero devnation-live\">\n        <div class=\"row\">\n            <div class=\"large-24 columns\">\n                <img class=\"show-for-large-up\" src=\"https://design.jboss.org/redhatdeveloper/website/redhatdeveloper_2_0/microsite_graphics/images/devnationlive_microsite_banner_desktop_logo_r4v1.png\" alt=\"DevNation Live logo\">\n                <img class=\"hide-for-large-up\" src=\"https://design.jboss.org/redhatdeveloper/website/redhatdeveloper_2_0/microsite_graphics/images/devnationlive_microsite_banner_mobile_logo_r4v1.png\" alt=\"DevNation Live logo\">\n            </div>\n        </div>\n    </div>\n    <div id=\"devnationLive-microsite\">\n        " + (next ? "" + (_a = ["", ""], _a.raw = ["", ""], _this.nextSession(_a, next)) : '') + "\n        <section>\n            <div class=\"row\">\n                " + (upcoming.length > 0 ? "\n                " + (past.length > 0 ? "<div class=\"large-12 columns\">" : "<div class=\"large-24 columns\">") + "\n                    <h5 class=\"caps\">Upcoming Sessions</h5>\n                    <br>\n                    <ul class=\"events-list\">\n                    " + upcoming.map(function (sess) {
                return (_a = ["", ""], _a.raw = ["", ""], _this.upcomingSession(_a, sess));
                var _a;
            }).join('') + "\n                    </ul>\n                </div>" : '') + "\n                " + (past.length > 0 ? "\n                " + (upcoming.length > 0 ? "<div class=\"large-12 columns\">" : "<div class=\"large-24 columns\">") + "\n                    <h5 class=\"caps\">Past Sessions</h5>\n                        <br>\n                        <ul class=\"events-list\">\n                        " + past.map(function (sess) {
                return (_a = ["", ""], _a.raw = ["", ""], _this.pastSession(_a, sess));
                var _a;
            }).join('') + "\n                        </ul>\n                    </div>"
                : '') + "\n            </div>\n        </section>\n    </div>";
            var _a;
        };
        return _this;
    }
    Object.defineProperty(DevNationLiveApp.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (val) {
            if (this._next === val)
                return;
            this._next = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp.prototype, "past", {
        get: function () {
            return this._past;
        },
        set: function (val) {
            if (this._past === val)
                return;
            this._past = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (val) {
            if (this._src === val)
                return;
            this._src = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (val) {
            if (this._mode === val)
                return;
            this._mode = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp.prototype, "form", {
        get: function () {
            return this._form;
        },
        set: function (val) {
            if (this._form === val)
                return;
            this._form = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp.prototype, "upcoming", {
        get: function () {
            return this._upcoming;
        },
        set: function (val) {
            if (this._upcoming === val)
                return;
            this._upcoming = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (val) {
            if (this._data === val)
                return;
            this._data = val['sessions'] ? val['sessions'].sort(this.sortSessions) : [];
            this.next = this.getNextSession();
            this.upcoming = this.getUpcoming();
            this.past = this.getPast();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevNationLiveApp, "observedAttributes", {
        get: function () {
            return ['src', 'form', 'mode'];
        },
        enumerable: true,
        configurable: true
    });
    DevNationLiveApp.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    DevNationLiveApp.prototype.connectedCallback = function () {
        var _this = this;
        var fHead = new Headers();
        var fInit = {
            method: 'GET',
            headers: fHead,
            mode: this.mode,
            cache: 'default'
        };
        this.addEventListener('registered', this.setRegistered);
        fetch(this.src, fInit)
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            _this.data = data;
            _this.innerHTML = (_a = ["", "", "", ""], _a.raw = ["", "", "", ""], _this.template(_a, _this.next, _this.upcoming, _this.past));
            var _a;
        });
    };
    DevNationLiveApp.prototype.getCookie = function (name) {
        var re = new RegExp('(?:(?:^|.*;\\s*)' + name + '\\s*\\=\\s*([^;]*).*$)|^.*$');
        return document.cookie.replace(re, "$1");
    };
    DevNationLiveApp.prototype.setRegistered = function (e) {
        this.innerHTML = (_a = ["", "", "", ""], _a.raw = ["", "", "", ""], this.template(_a, this.next, this.upcoming, this.past));
        var _a;
    };
    DevNationLiveApp.prototype.sortSessions = function (a, b) {
        var da = (Date.parse(a.date) ? Date.parse(a.date) : new Date(9999999999999)).valueOf(), db = (Date.parse(b.date) ? Date.parse(b.date) : new Date(9999999999999)).valueOf();
        return da - db;
    };
    DevNationLiveApp.prototype.getNextSession = function () {
        for (var i = 0; i < this.data.length; i++) {
            var dt = Date.parse(this.data[i].date);
            if (dt && dt > Date.now() - 259200000) {
                return this.data[i];
            }
        }
    };
    DevNationLiveApp.prototype.getUpcoming = function () {
        var upcoming = [];
        var first = true;
        for (var i = 0; i < this.data.length; i++) {
            var dt = Date.parse(this.data[i].date);
            if (dt && (dt > Date.now() || dt > Date.now() - 259200000)) {
                if (!first && this.data[i].offer_id.length > 0) {
                    upcoming.push(this.data[i]);
                }
                else {
                    first = false;
                }
            }
        }
        return upcoming;
    };
    DevNationLiveApp.prototype.getPast = function () {
        var past = [];
        for (var i = 0; i < this.data.length; i++) {
            var dt = Date.parse(this.data[i].date);
            if (dt && dt + 3600000 < Date.now()) {
                past.push(this.data[i]);
            }
        }
        return past;
    };
    return DevNationLiveApp;
}(HTMLElement));
customElements.define('devnation-live-app', DevNationLiveApp);
var RHDPDownloadsAllItem = /** @class */ (function (_super) {
    __extends(RHDPDownloadsAllItem, _super);
    function RHDPDownloadsAllItem() {
        var _this = _super.call(this) || this;
        _this.productDownloads = {
            "devsuite": {
                "windowsUrl": "https://developers.redhat.com/download-manager/file/devsuite-2.1.0-GA-bundle-installer.exe",
                "macUrl": "https://developers.redhat.com/download-manager/file/devsuite-2.1.0-GA-bundle-installer-mac.zip",
                "rhelUrl": "https://developers.redhat.com/products/devsuite/hello-world/#fndtn-rhel"
            },
            "cdk": {
                "windowsUrl": "https://developers.redhat.com/download-manager/file/devsuite-2.1.0-GA-bundle-installer.exe",
                "macUrl": "https://developers.redhat.com/download-manager/file/devsuite-2.1.0-GA-bundle-installer-mac.zip",
                "rhelUrl": "https://developers.redhat.com/products/cdk/hello-world/#fndtn-rhel"
            }
        };
        _this.template = function (strings, name, productId, dataFallbackUrl, downloadUrl, learnMore, description, version, platform) {
            return "\n            <div class=\"row\">\n                <hr>\n                <div class=\"large-24 column\">\n                    <h5>" + name + "</h5>\n                </div>\n            \n                <div class=\"large-10 columns\">\n                    <p></p>\n            \n                    <div class=\"paragraph\">\n                        <p>" + description + "</p>\n                    </div>\n                    <a href=\"" + learnMore + "\">Learn More</a></div>\n            \n                <div class=\"large-9 center columns\">\n                \n                  " + (version ? "<p data-download-id-version=\"" + productId + "\">Version: " + version + " " + (_this.platform ? "for " + platform : '') + "</p>" : "<p data-download-id-version=\"" + productId + "\">&nbsp;</p>") + "  \n                </div>\n            \n                <div class=\"large-5 columns\"><a class=\"button medium-cta blue\" data-download-id=\"" + productId + "\"\n                                                data-fallback-url=\"" + dataFallbackUrl + "\"\n                                                href=\"" + downloadUrl + "\">Download</a></div>\n            </div>\n";
        };
        return _this;
    }
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (this._name === value)
                return;
            this._name = value;
            this.setAttribute('name', this.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        set: function (value) {
            if (this.productId === value)
                return;
            this._productId = value;
            this.setAttribute('productid', this._productId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "dataFallbackUrl", {
        get: function () {
            return this._dataFallbackUrl;
        },
        set: function (value) {
            if (this.dataFallbackUrl === value)
                return;
            this._dataFallbackUrl = value;
            this.setAttribute('datafallbackurl', this._dataFallbackUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "downloadUrl", {
        get: function () {
            return this._downloadUrl;
        },
        set: function (value) {
            if (this.downloadUrl === value)
                return;
            this._downloadUrl = value;
            this.setAttribute('downloadurl', this._downloadUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
            this.setAttribute('description', this._description);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "learnMore", {
        get: function () {
            return this._learnMore;
        },
        set: function (value) {
            this._learnMore = value;
            this.setAttribute('learnmore', this._learnMore);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            this._version = value;
            this.setAttribute('version', this._version);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAllItem.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        set: function (value) {
            this._platform = value;
            this.setAttribute('platform', this._platform);
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsAllItem.prototype.connectedCallback = function () {
        if (this.productId === 'devsuite' || this.productId === 'cdk') {
            this.osVersionExtract(this.productId);
            this.innerHTML = (_a = ["", "", "", "", "", "", "", "", ""], _a.raw = ["", "", "", "", "", "", "", "", ""], this.template(_a, this.name, this.productId, this.dataFallbackUrl, this.downloadUrl, this.learnMore, this.description, this.version, this.platform));
        }
        else {
            this.innerHTML = (_b = ["", "", "", "", "", "", "", "", ""], _b.raw = ["", "", "", "", "", "", "", "", ""], this.template(_b, this.name, this.productId, this.dataFallbackUrl, this.downloadUrl, this.learnMore, this.description, this.version, null));
        }
        var _a, _b;
    };
    RHDPDownloadsAllItem.prototype.osVersionExtract = function (productId) {
        var osPlatform = new RHDPOSDownload();
        osPlatform.platformType = osPlatform.getUserAgent();
        switch (productId) {
            case 'devsuite':
                osPlatform.winURL = this.productDownloads.devsuite.windowsUrl;
                osPlatform.macURL = this.productDownloads.devsuite.macUrl;
                osPlatform.rhelURL = this.productDownloads.devsuite.rhelUrl;
                break;
            case 'cdk':
                osPlatform.winURL = this.productDownloads.cdk.windowsUrl;
                osPlatform.macURL = this.productDownloads.cdk.macUrl;
                osPlatform.rhelURL = this.productDownloads.cdk.rhelUrl;
                break;
            default:
                osPlatform.winURL = this.downloadUrl;
                osPlatform.macURL = this.downloadUrl;
                osPlatform.rhelURL = this.downloadUrl;
        }
        osPlatform.setDownloadURLByPlatform();
        this.downloadUrl = osPlatform.downloadURL;
        this.platform = osPlatform.platformType;
    };
    Object.defineProperty(RHDPDownloadsAllItem, "observedAttributes", {
        get: function () {
            return ['name'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsAllItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPDownloadsAllItem;
}(HTMLElement));
var RHDPDownloadsAll = /** @class */ (function (_super) {
    __extends(RHDPDownloadsAll, _super);
    function RHDPDownloadsAll() {
        var _this = _super.call(this) || this;
        _this.template = function (strings, id, heading) {
            return "<div class=\"download-list\">\n                    <div class=\"large-24 category-label\" id=\"" + id + "\">\n                        <h4>" + heading + "</h4>\n                    </div>\n                </div>\n                ";
        };
        return _this;
    }
    Object.defineProperty(RHDPDownloadsAll.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            if (this.id === value)
                return;
            this._id = value;
            this.setAttribute('id', this._id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAll.prototype, "heading", {
        get: function () {
            return this._heading;
        },
        set: function (value) {
            if (this.heading === value)
                return;
            this._heading = value;
            this.setAttribute('heading', this._heading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsAll.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (value) {
            if (this.products === value)
                return;
            this._products = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsAll.prototype.connectedCallback = function () {
        this.innerHTML = (_a = ["", "", ""], _a.raw = ["", "", ""], this.template(_a, this.id, this.heading));
        this.getProductsWithTargetHeading(this.products);
        var _a;
    };
    RHDPDownloadsAll.prototype.getProductsWithTargetHeading = function (productList) {
        if (productList.products) {
            var products = productList.products.products;
            var len = products.length;
            for (var i = 0; i < len; i++) {
                if (products[i].groupHeading === this.heading) {
                    var item = new RHDPDownloadsAllItem();
                    item.name = products[i].productName;
                    item.productId = products[i].productCode ? products[i].productCode : "";
                    item.dataFallbackUrl = products[i].dataFallbackUrl ? products[i].dataFallbackUrl : "";
                    item.downloadUrl = products[i].downloadLink ? products[i].downloadLink : "";
                    item.description = products[i].description ? products[i].description : "";
                    item.learnMore = products[i].learnMoreLink ? products[i].learnMoreLink : "";
                    item.version = products[i].version ? products[i].version : "";
                    this.querySelector('.download-list').appendChild(item);
                }
            }
        }
    };
    Object.defineProperty(RHDPDownloadsAll, "observedAttributes", {
        get: function () {
            return ['id', 'heading'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsAll.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPDownloadsAll;
}(HTMLElement));
var RHDPDownloadsApp = /** @class */ (function (_super) {
    __extends(RHDPDownloadsApp, _super);
    function RHDPDownloadsApp() {
        var _this = _super.call(this) || this;
        _this.popularProduct = new RHDPDownloadsPopularProducts();
        _this.products = new RHDPDownloadsProducts();
        _this.template = "<div class=\"hero hero-wide hero-downloads\">\n                    <div class=\"row\">\n                        <div class=\"large-12 medium-24 columns\" id=\"downloads\">\n                            <h2>Downloads</h2>\n                        </div>\n                    </div>\n                </div>\n                <span class=\"dl-outage-msg\"></span>\n                <div class=\"most-popular-downloads\">\n                    <div class=\"row\">\n                        <div class=\"large-24 column\">\n                            <h3>Most Popular</h3>\n                        </div>\n                    </div>\n                \n                    <div class=\"row\">\n                    </div>\n                </div>\n                <div class=\"row\" id=\"downloads\">\n                    <div class=\"large-24 columns\">\n                        <h3 class=\"downloads-header\">All Downloads</h3>\n                    </div>\n                </div>";
        return _this;
    }
    Object.defineProperty(RHDPDownloadsApp.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (val) {
            if (this._url === val)
                return;
            this._url = val;
            this.setAttribute('url', this.url);
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsApp.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
        this.setProductsDownloadData(this.url);
    };
    RHDPDownloadsApp.prototype.addGroups = function (productList) {
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('accelerated_development_and_management', 'ACCELERATED DEVELOPMENT AND MANAGEMENT', productList));
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('developer_tools', 'DEVELOPER TOOLS', productList));
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('infrastructure', 'INFRASTRUCTURE', productList));
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('integration_and_automation', 'INTEGRATION AND AUTOMATION', productList));
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('mobile', 'MOBILE', productList));
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('cloud', 'CLOUD', productList));
        this.querySelector('#downloads .large-24').appendChild(this.downloadsAllFactory('runtimes', 'LANGUAGES AND COMPILERS', productList));
    };
    RHDPDownloadsApp.prototype.setPopularProducts = function (productList) {
        this.popularProduct.productList = productList.products;
        this.querySelector('.most-popular-downloads .row').appendChild(this.popularProduct);
    };
    RHDPDownloadsApp.prototype.downloadsAllFactory = function (id, heading, productList) {
        var downloads = new RHDPDownloadsAll();
        downloads.id = id;
        downloads.heading = heading;
        downloads.products = productList;
        return downloads;
    };
    RHDPDownloadsApp.prototype.setProductsDownloadData = function (url) {
        var _this = this;
        var fInit = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch(url, fInit)
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            _this.products.data = data;
            _this.setPopularProducts(_this.products);
            _this.addGroups(_this.products);
        });
    };
    Object.defineProperty(RHDPDownloadsApp, "observedAttributes", {
        get: function () {
            return ['url'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsApp.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPDownloadsApp;
}(HTMLElement));
var RHDPDownloadsPopularProduct = /** @class */ (function (_super) {
    __extends(RHDPDownloadsPopularProduct, _super);
    function RHDPDownloadsPopularProduct() {
        var _this = _super.call(this) || this;
        _this.template = function (strings, name, id, dataFallbackUrl, url) {
            return "\n        <div class=\"large-6 column\">\n            <div class=\"popular-download-box\">\n                <h4>" + name + "</h4>\n                <a class=\"button heavy-cta\" data-download-id=\"" + id + "\" data-fallback-url=\"" + dataFallbackUrl + "\" href=\"" + url + "\"><i class=\"fa fa-download\"></i> Download</a>\n            </div>\n        </div>";
        };
        return _this;
    }
    Object.defineProperty(RHDPDownloadsPopularProduct.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (this._name === value)
                return;
            this._name = value;
            this.setAttribute('name', this.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsPopularProduct.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        set: function (value) {
            if (this.productId === value)
                return;
            this._productId = value;
            this.setAttribute('productid', this.productId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsPopularProduct.prototype, "dataFallbackUrl", {
        get: function () {
            return this._dataFallbackUrl;
        },
        set: function (value) {
            if (this.dataFallbackUrl === value)
                return;
            this._dataFallbackUrl = value;
            this.setAttribute('datafallbackurl', this.dataFallbackUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsPopularProduct.prototype, "downloadUrl", {
        get: function () {
            return this._downloadUrl;
        },
        set: function (value) {
            if (this.downloadUrl === value)
                return;
            this._downloadUrl = value;
            this.setAttribute('downloadurl', this.downloadUrl);
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsPopularProduct.prototype.connectedCallback = function () {
        this.innerHTML = (_a = ["", "", "", "", ""], _a.raw = ["", "", "", "", ""], this.template(_a, this.name, this.productId, this.dataFallbackUrl, this.downloadUrl));
        var _a;
    };
    Object.defineProperty(RHDPDownloadsPopularProduct, "observedAttributes", {
        get: function () {
            return ['name', 'productid', 'downloadurl', 'datafallbackurl'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsPopularProduct.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPDownloadsPopularProduct;
}(HTMLElement));
var RHDPDownloadsPopularProducts = /** @class */ (function (_super) {
    __extends(RHDPDownloadsPopularProducts, _super);
    function RHDPDownloadsPopularProducts() {
        return _super.call(this) || this;
    }
    Object.defineProperty(RHDPDownloadsPopularProducts.prototype, "productList", {
        get: function () {
            return this._productList;
        },
        set: function (value) {
            if (this._productList === value)
                return;
            this._productList = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsPopularProducts.prototype.addProduct = function (product) {
        var productNode = new RHDPDownloadsPopularProduct();
        productNode.name = product.productName;
        productNode.productId = product.productCode;
        productNode.dataFallbackUrl = product.dataFallbackUrl;
        productNode.downloadUrl = product.downloadLink;
        this.appendChild(productNode);
    };
    RHDPDownloadsPopularProducts.prototype.renderProductList = function () {
        // Set instance variable productList to the overall productList returned from download-manager
        // If the product is popular, append it, else: forget about it.
        if (this.productList.products) {
            var products = this.productList.products;
            var len = products.length;
            for (var i = 0; i < len; i++) {
                if (products[i].featured) {
                    this.addProduct(products[i]);
                }
            }
        }
    };
    RHDPDownloadsPopularProducts.prototype.connectedCallback = function () {
        this.renderProductList();
    };
    RHDPDownloadsPopularProducts.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPDownloadsPopularProducts;
}(HTMLElement));
var RHDPDownloadsProducts = /** @class */ (function (_super) {
    __extends(RHDPDownloadsProducts, _super);
    function RHDPDownloadsProducts() {
        var _this = _super.call(this) || this;
        _this._products = {
            "products": [{
                    "productName": "Red Hat JBoss Data Grid",
                    "groupHeading": "ACCELERATED DEVELOPMENT AND MANAGEMENT",
                    "productCode": "datagrid",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=data.grid&downloadType=distributions",
                    "downloadLink": "",
                    "description": "An in-memory data grid to accelerate performance that is fast, distributed, scalable, and independent from the data tier.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/datagrid/overview/"
                }, {
                    "productName": "Red Hat JBoss Enterprise Application Platform",
                    "groupHeading": "ACCELERATED DEVELOPMENT AND MANAGEMENT",
                    "productCode": "eap",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=appplatform&downloadType=distributions",
                    "downloadLink": "",
                    "description": "An innovative, modular, cloud-ready application platform that addresses management, automation and developer productivity.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/eap/overview/"
                }, {
                    "productName": "Red Hat JBoss Web Server",
                    "groupHeading": "ACCELERATED DEVELOPMENT AND MANAGEMENT",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?downloadType=distributions&product=webserver&productChanged=yes",
                    "downloadLink": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?downloadType=distributions&product=webserver&productChanged=yes",
                    "description": "Apache httpd, Tomcat, etc. to provide a single solution for large-scale websites and light-weight Java web applications.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/webserver/overview/"
                }, {
                    "productName": "Red Hat Application Migration Toolkit",
                    "groupHeading": "DEVELOPER TOOLS",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/downloads",
                    "downloadLink": "https://access.redhat.com/downloads",
                    "description": "Red Hat Application Migration Toolkit is an assembly of open source tools that enables large-scale application migrations and modernizations. The tooling consists of multiple individual components that provide support for each phase of a migration process.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/rhamt/overview/"
                }, {
                    "productName": "Red Hat Container Development Kit",
                    "groupHeading": "DEVELOPER TOOLS",
                    "productCode": "cdk",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/downloads/content/293/",
                    "downloadLink": "",
                    "description": "For container development, includes RHEL and OpenShift 3.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/cdk/overview/"
                }, {
                    "productName": "Red Hat Development Suite",
                    "groupHeading": "DEVELOPER TOOLS",
                    "productCode": "devsuite",
                    "featured": true,
                    "dataFallbackUrl": "https://access.redhat.com/downloads",
                    "downloadLink": "",
                    "description": "A fully integrated development environment for modern enterprise development.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/devsuite/overview/"
                }, {
                    "productName": "Red Hat JBoss Developer Studio",
                    "groupHeading": "DEVELOPER TOOLS",
                    "productCode": "devstudio",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=jbossdeveloperstudio&downloadType=distributions",
                    "downloadLink": "",
                    "description": "An Eclipse-based IDE to create apps for web, mobile, transactional enterprise, and SOA-based integration apps/services.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/devstudio/overview/"
                }, {
                    "productName": "Red Hat Enterprise Linux",
                    "groupHeading": "INFRASTRUCTURE",
                    "productCode": "rhel",
                    "featured": true,
                    "dataFallbackUrl": "https://access.redhat.com/downloads/content/69/",
                    "downloadLink": "",
                    "description": "For traditional development, includes Software Collections and Developer Toolset.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/rhel/overview/"
                }, {
                    "productName": "Red Hat JBoss AMQ",
                    "groupHeading": "INTEGRATION AND AUTOMATION",
                    "productCode": "amq",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=jboss.amq&downloadType=distributions",
                    "downloadLink": "",
                    "description": "A small-footprint, performant, robust messaging platform that enables real-time app, device, and service integration.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/amq/overview/"
                }, {
                    "productName": "Red Hat JBoss BRMS",
                    "groupHeading": "INTEGRATION AND AUTOMATION",
                    "productCode": "brms",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=brms&downloadType=distributions",
                    "downloadLink": "",
                    "description": "A programming platform to easily capture and maintain rules for business changes, without impacting static applications.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/brms/overview/"
                }, {
                    "productName": "Red Hat JBoss BPM Suite",
                    "groupHeading": "INTEGRATION AND AUTOMATION",
                    "productCode": "bpmsuite",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?downloadType=distributions&product=bpm.suite&productChanged=yes",
                    "downloadLink": "",
                    "description": "A platform that combines business rules and process management (BPM), and complex event processing.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/bpmsuite/overview/"
                }, {
                    "productName": "Red Hat JBoss Data Virtualization",
                    "groupHeading": "INTEGRATION AND AUTOMATION",
                    "productCode": "datavirt",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=data.services.platform&downloadType=distributions",
                    "downloadLink": "",
                    "description": "A tool that brings operational and analytical insight from data dispersed in various business units, apps, and technologies.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/datavirt/overview/"
                }, {
                    "productName": "Red Hat JBoss Fuse",
                    "groupHeading": "INTEGRATION AND AUTOMATION",
                    "productCode": "fuse",
                    "featured": true,
                    "dataFallbackUrl": "https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=jboss.fuse&downloadType=distributions",
                    "downloadLink": "",
                    "description": "A small-footprint enterprise service bus (ESB) that lets you build, deploy and integrate applications and services.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/fuse/overview/"
                }, {
                    "productName": "Red Hat Mobile Application Platform",
                    "groupHeading": "MOBILE",
                    "featured": true,
                    "dataFallbackUrl": "https://access.redhat.com/downloads/content/316/",
                    "downloadLink": "https://access.redhat.com/downloads/content/316/",
                    "description": "Develop and deploy mobile apps in an agile and flexible manner.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/mobileplatform/overview/"
                }, {
                    "productName": "Red Hat OpenShift Container Platform",
                    "groupHeading": "CLOUD",
                    "productCode": "openshift",
                    "featured": false,
                    "dataFallbackUrl": "https://access.redhat.com/downloads/content/290/",
                    "downloadLink": "",
                    "description": "An open, hybrid Platform-as-a-Service (PaaS) to quickly develop, host, scale, and deliver apps in the cloud.",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/openshift/overview/"
                }, {
                    "productName": "OpenJDK",
                    "groupHeading": "LANGUAGES AND COMPILERS",
                    "productCode": "openjdk",
                    "featured": false,
                    "dataFallbackUrl": "https://developers.redhat.com/products/openjdk/overview/",
                    "downloadLink": "",
                    "description": "A Tried, Tested and Trusted open source implementation of the Java platform",
                    "version": "",
                    "learnMoreLink": "https://developers.redhat.com/products/openjdk/overview/"
                }]
        };
        return _this;
    }
    Object.defineProperty(RHDPDownloadsProducts.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            if (this._category === value)
                return;
            this._category = value;
            this.setAttribute('category', this._category);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsProducts.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (value) {
            if (this._products === value)
                return;
            this._products = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPDownloadsProducts.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (this._data === value)
                return;
            this._data = value;
            this.setAttribute('data', this._data);
            this._createProductList();
        },
        enumerable: true,
        configurable: true
    });
    RHDPDownloadsProducts.prototype._createProductList = function () {
        var tempProductList = { "products": [] };
        if (this._data) {
            var productLen = this.products.products.length;
            var dataLen = this.data.length;
            for (var i = 0; i < productLen; i++) {
                var product = this.products.products[i];
                for (var j = 0; j < dataLen; j++) {
                    var data = this.data[j];
                    if (data['productCode'] == product['productCode']) {
                        this.products.products[i]['downloadLink'] = data['featuredArtifact']['url'];
                        this.products.products[i]['version'] = data['featuredArtifact']['versionName'];
                    }
                }
                tempProductList['products'].push(product);
            }
        }
        this.products = tempProductList;
    };
    return RHDPDownloadsProducts;
}(HTMLElement));
customElements.define('rhdp-downloads-all-item', RHDPDownloadsAllItem);
customElements.define('rhdp-downloads-all', RHDPDownloadsAll);
customElements.define('rhdp-downloads-popular-product', RHDPDownloadsPopularProduct);
customElements.define('rhdp-downloads-popular-products', RHDPDownloadsPopularProducts);
customElements.define('rhdp-downloads-products', RHDPDownloadsProducts);
customElements.define('rhdp-downloads-app', RHDPDownloadsApp);
var RHDPProjectsApp = /** @class */ (function (_super) {
    __extends(RHDPProjectsApp, _super);
    function RHDPProjectsApp() {
        var _this = _super.call(this) || this;
        _this.productObj = {
            key: 'product',
            items: [
                { key: 'amq', name: 'Red Hat JBoss AMQ', upstream: ['activemq', 'fabric8'] },
                { key: 'bpmsuite', name: 'Red Hat JBoss BPM Suite', upstream: ["drools", "guvnor", "optaplanner", "jbpm"] },
                { key: 'brms', name: 'Red Hat JBoss BRMS', upstream: ["optaplanner", "drools", "guvnor"] },
                { key: 'datagrid', name: 'Red Hat JBoss Data Grid', upstream: ["infinispan", "jgroups", "hibernate_subprojects_search"] },
                { key: 'datavirt', name: 'Red Hat JBoss Data Virtualization', upstream: ["teiid", "teiiddesigner", "modeshape"] },
                { key: 'devstudio', name: 'Red Hat JBoss Developer Studio', upstream: ["jbosstools"] },
                { key: 'eap', name: 'Red Hat JBoss Enterprise Application Platform', upstream: ["wildfly", "jgroups", "hibernate", "hornetq", "jbossclustering", "jbossmc", "narayana", "jbossweb", "jbossws", "ironjacamar", "jgroups", "mod_cluster", "jbossas_osgi", "jbosssso", "picketlink", "resteasy", "weld", "wise", "xnio"] },
                { key: 'fuse', name: 'Red Hat JBoss Fuse', upstream: ["camel", "karaf", "activemq", "cxf", "fabric8", "switchyard", "hawtio"] },
                { key: 'webserver', name: 'Red Hat JBoss Web Server', upstream: ["tomcat", "httpd", "mod_cluster"] },
            ]
        };
        _this.template = "\n    <div class=\"hero hero-projects\">\n    <div class=\"row\">\n        <div class=\"large-24 columns\">\n            <h2 id=\"upstream-projects\">Upstream Community</h2>\n        </div>\n    </div>\n</div>\n\n<div class=\"row content\">\n    <div class=\"large-6 column\">\n        <form action=\"\" class=\"project-filters\" method=\"GET\">\n            <h4>Filters<a class=\"project-filters-clear\" href=\"#\">Clear All Filters</a></h4>\n            <input name=\"filter-text\" placeholder=\"Filter by keyword\" type=\"text\" />\n            <div class=\"filter-block\">\n                <h5>Included In</h5>\n\n                <div class=\"styled-select\"><select name=\"filter-products\"><option value=\"\">Select Product...</option><option value=\"eap\">JBoss Enterprise Application Platform</option><option value=\"webserver\">JBoss Web Server</option><option value=\"datagrid\">JBoss Data Grid</option><option value=\"portal\">JBoss Portal</option><option value=\"fsw\">JBoss Fuse Service Works</option><option value=\"datavirt\">JBoss Data Virtualization</option><option value=\"fuse\">JBoss Fuse</option><option value=\"amq\">JBoss A-MQ</option><option value=\"brms\">JBoss BRMS</option><option value=\"bpmsuite\">JBoss BPM Suite</option><option value=\"devstudio\">JBoss Developer Studio</option></select></div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"large-18 column\">\n        <div class=\"featured-projects\">\n            <ul class=\"featured-projects-results\">\n                <li>\n                    <div class=\"defaultprojectimage\"><a class=\"image-link\" href=\"https://getfedora.org\"><img alt=\"Fedora Linux\" onerror=\"app.project.fallbackImage(this)\" src=\"https://static.jboss.org/rhd/images/images_community_fedora_500x400-3.png\" /></a></div>\n\n                    <h5 class=\"solution-name\"><a class=\"solution-name-link external-link\" href=\"https://getfedora.org\">Fedora Linux</a></h5>\n                </li>\n                <li>\n                    <div class=\"defaultprojectimage\"><a class=\"image-link\" href=\"http://www.wildfly.org\"><img alt=\"WildFly Application Server\" onerror=\"app.project.fallbackImage(this)\" src=\"https://static.jboss.org/rhd/images/images_community_wildfly_500x400-4.png\" /></a></div>\n\n                    <h5 class=\"solution-name\"><a class=\"solution-name-link external-link\" href=\"http://www.wildfly.org\">WildFly Application Server</a></h5>\n                </li>\n                <li>\n                    <div class=\"defaultprojectimage\"><a class=\"image-link\" href=\"http://commons.openshift.org\"><img alt=\"OpenShift Commons\" onerror=\"app.project.fallbackImage(this)\" src=\"https://static.jboss.org/rhd/images/images_community_openshiftcommons_500x400-3.png\" /></a></div>\n\n                    <h5 class=\"solution-name\"><a class=\"solution-name-link external-link\" href=\"http://commons.openshift.org\">OpenShift Commons</a></h5>\n                </li>\n            </ul>\n        </div>\n\n        <h2 class=\"divider\">&nbsp;</h2>\n\n        <ul class=\"small-block-grid-2 large-block-grid-4 medium-block-grid-3 results\">\n        </ul>\n    </div>\n</div>\n\n    ";
        return _this;
    }
    RHDPProjectsApp.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
    };
    Object.defineProperty(RHDPProjectsApp, "observedAttributes", {
        get: function () {
            return ['dcpUrl', 'data'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectsApp.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template;
    };
    return RHDPProjectsApp;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-projects-app', RHDPProjectsApp);
});
var RHDPProjectFilterItem = /** @class */ (function (_super) {
    __extends(RHDPProjectFilterItem, _super);
    function RHDPProjectFilterItem() {
        var _this = _super.call(this) || this;
        _this._active = false;
        _this.template = "\n    \n    ";
        return _this;
    }
    Object.defineProperty(RHDPProjectFilterItem.prototype, "productCode", {
        get: function () {
            return this._productCode;
        },
        set: function (value) {
            if (this._productCode === value)
                return;
            this._productCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectFilterItem.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (value) {
            if (this._product === value)
                return;
            this._product = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectFilterItem.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            if (typeof value === 'string') {
                value = true;
            }
            if (this._active === value)
                return;
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectFilterItem.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
        this.addEventListener('click', this._updateStatus);
    };
    RHDPProjectFilterItem.prototype._updateStatus = function (e) {
        e.preventDefault();
        this.active = true;
        this.dispatchEvent(new CustomEvent('params-ready', { detail: { filter: this } }));
    };
    Object.defineProperty(RHDPProjectFilterItem, "observedAttributes", {
        get: function () {
            return ['product-code', 'product'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectFilterItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template;
    };
    return RHDPProjectFilterItem;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-project-filter-item', RHDPProjectFilterItem);
});
var RHDPProjectItem = /** @class */ (function (_super) {
    __extends(RHDPProjectItem, _super);
    function RHDPProjectItem() {
        var _this = _super.call(this) || this;
        _this.template = function (strings, project) {
            return "\n        <li class=\"upstream\">\n            <div class=\"defaultprojectimage\">\n                <p class=\"image-link\"><img src=\"" + project.imageUrl + "\" alt=\"" + project.projectName + "\"></p></div>\n            <h5 class=\"solution-name\">\n                <p class=\"solution-name-link\">" + project.projectName + "</p>\n            </h5>\n            <p>\n        \n            </p>\n            <a class=\"solution-overlay-learn link-sm\">Learn more</a> | <a\n                href=\"" + project.downloadsLink + "\" class=\"link-sm\">Download</a>\n            <div class=\"project-content row\">\n                <div class=\"large-6 project-content-left columns\"><img\n                        src=\"" + project.imageUrl + "\" alt=\"" + project.projectName + "\">\n                    <p><a class=\"upstream-download\"\n                          href=\"" + project.downloadsLink + "\"><i\n                            class=\"fa fa-download\"></i> Download</a></p>\n                    <p><a href=\"" + project.sys_url_view + "\">Visit home page</a></p>\n                    <ul class=\"project-social\">\n                        <li><a href=\"" + project.twitterLink + "\"><i class=\"fa fa-twitter\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"large-18 project-content-right columns\"><h3><a href=\"" + project.sys_url_view + "\">" + project.projectName + "</a>\n                </h3>\n                    <p>" + project.description + "</p>\n                    <div class=\"upstream-more-content\">\n                        <ul class=\"project-details-list\">\n                            <li>Docs: <a href=\"" + project.docsLink + "\">Documentation</a></li>\n                            <li>Issue: <a href=\"" + project.issueTracker + "\">github.com/dotnet/core/issues</a></li>\n                            <li>Github: <a href=\"" + project.githubLink + "\">github.com/dotnet/core</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>";
        };
        return _this;
    }
    Object.defineProperty(RHDPProjectItem.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        set: function (value) {
            if (this._imageUrl === value)
                return;
            this._imageUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "projectName", {
        get: function () {
            return this._projectName;
        },
        set: function (value) {
            if (this._projectName === value)
                return;
            this._projectName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "downloadsLink", {
        get: function () {
            return this._downloadsLink;
        },
        set: function (value) {
            if (this._downloadsLink === value)
                return;
            this._downloadsLink = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "sys_url_view", {
        get: function () {
            return this._sys_url_view;
        },
        set: function (value) {
            if (this._sys_url_view === value)
                return;
            this._sys_url_view = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "twitterLink", {
        get: function () {
            return this._twitterLink;
        },
        set: function (value) {
            if (this._twitterLink === value)
                return;
            this._twitterLink = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "descriptions", {
        get: function () {
            return this._descriptions;
        },
        set: function (value) {
            if (this._descriptions === value)
                return;
            this._descriptions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "docsLink", {
        get: function () {
            return this._docsLink;
        },
        set: function (value) {
            if (this._docsLink === value)
                return;
            this._docsLink = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "issueTracker", {
        get: function () {
            return this._issueTracker;
        },
        set: function (value) {
            if (this._issueTracker === value)
                return;
            this._issueTracker = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectItem.prototype, "githubLink", {
        get: function () {
            return this._githubLink;
        },
        set: function (value) {
            if (this._githubLink === value)
                return;
            this._githubLink = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectItem.prototype.getCorrectUrl = function (url) {
        if (url.constructor === Array && url.length > 0) {
            url = url[0];
        }
        if (url.indexOf("/") > 0) {
            return url;
        }
        else {
            return "https://developers.redhat.com" + url;
        }
    };
    RHDPProjectItem.prototype.connectedCallback = function () {
        this.innerHTML = (_a = ["", ""], _a.raw = ["", ""], this.template(_a, this));
        var _a;
    };
    Object.defineProperty(RHDPProjectItem, "observedAttributes", {
        get: function () {
            return ['type', 'size', 'heading', 'text'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = (_a = ["", ""], _a.raw = ["", ""], this.template(_a, this));
        var _a;
    };
    return RHDPProjectItem;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-project-item', RHDPProjectItem);
});
var RHDPProjectQuery = /** @class */ (function (_super) {
    __extends(RHDPProjectQuery, _super);
    function RHDPProjectQuery() {
        var _this = _super.call(this) || this;
        _this.template = "\n    \n    ";
        return _this;
    }
    Object.defineProperty(RHDPProjectQuery.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectQuery.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjectQuery.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (value) {
            this._term = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectQuery.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
        top.addEventListener('params-ready', this._updateFilter);
        top.addEventListener('term-update', this._updateTerm);
    };
    Object.defineProperty(RHDPProjectQuery, "observedAttributes", {
        get: function () {
            return ['product-code', 'product'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectQuery.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template;
    };
    RHDPProjectQuery.prototype._updateTerm = function (e) {
        if (e.detail && e.detail.box) {
            this.term = e.detail.box.term;
            this.search();
        }
    };
    RHDPProjectQuery.prototype._updateFilter = function (e) {
        if (e.detail && e.detail.filter) {
            this.filter = e.detail.filter.productCode;
            this.search();
        }
    };
    RHDPProjectQuery.prototype.search = function () {
        return '{"uuid":"61aa6ac7-730c-46af-99ce-0f6dc8ad52bf","took":20,"timed_out":false,"_shards":{"total":3,"successful":3,"failed":0},"hits":{"total":104,"max_score":null,"hits":[{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-dotnetcore","_score":null,"fields":{"sys_url_view":["https://dotnetfoundation.org/"],"license":["ASL"],"githubLink":["https://github.com/dotnet/core"],"docsLink":["https://github.com/dotnet/core/tree/master/Documentation"],"sys_project":["dotnetcore"],"issueTrackerLink":["https://github.com/dotnet/core/issues"],"downloadsLink":["https://github.com/dotnet/core/blob/master/release-notes/download-archive.md"],"twitterLink":["https://twitter.com/dotnet"],"sys_project_name":[".NET Core"],"description":[".NET Core has a high-performance and modular design, and supports full side by side to make it easy to adopt new .NET Core versions without affecting other apps. It currently runs on Linux, Mac, and Windows."],"projectName":[".NET Core"]},"sort":[".net core"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-aerogear","_score":null,"fields":{"githubLink":["https://github.com/aerogear"],"docsLink":["http://aerogear.org/docs/"],"jiraLink":["https://issues.jboss.org/browse/AEROGEAR"],"downloadsLink":["http://aerogear.org/download/"],"description":["Open Source Libraries for Mobile Connectivity"],"communityLink":["http://aerogear.org/community"],"sys_url_view":["http://aerogear.org"],"license":["ASL"],"srcLink":["https://github.com/aerogear"],"buildLink":["https://aerogear.ci.cloudbees.com/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/aerogear-dev"],"sys_project":["aerogear"],"twitterLink":["https://twitter.com/aerogears"],"sys_project_name":["Aerogear"],"chatLink":["http://webchat.freenode.net/?channels=aerogear"],"projectName":["AeroGear"]},"sort":["aerogear"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-activemq","_score":null,"fields":{"sys_url_view":["http://activemq.apache.org/"],"license":["ASL"],"githubLink":["https://github.com/apache/activemq"],"docsLink":["http://activemq.apache.org/using-activemq-5.html"],"devForumLink":["http://activemq.2283324.n4.nabble.com/ActiveMQ-Dev-f2368404.html"],"sys_project":["activemq"],"issueTrackerLink":["https://issues.apache.org/jira/browse/AMQ"],"userForumLink":["http://activemq.2283324.n4.nabble.com/ActiveMQ-User-f2341805.html"],"sys_project_name":["Apache ActiveMQ"],"description":["Apache ActiveMQ Ã¢Â„Â¢ is the most popular and powerful open source messaging and Integration Patterns server."],"projectName":["Apache ActiveMQ"]},"sort":["apache activemq"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-camel","_score":null,"fields":{"sys_url_view":["http://camel.apache.org"],"license":["ASL"],"githubLink":["https://github.com/apache/camel"],"docsLink":["http://camel.apache.org/documentation.html"],"sys_project":["camel"],"issueTrackerLink":["https://issues.apache.org/jira/browse/CAMEL"],"userForumLink":["http://camel.apache.org/discussion-forums.html"],"sys_project_name":["Apache Camel"],"description":["Apache Camel is a versatile open-source integration framework based on known Enterprise Integration Patterns."],"projectName":["Apache Camel"]},"sort":["apache camel"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-cxf","_score":null,"fields":{"sys_url_view":["http://cxf.apache.org"],"license":["ASL"],"githubLink":["https://github.com/apache/cxf"],"docsLink":["http://cxf.apache.org/docs/index.html"],"mailingListLink":["http://cxf.apache.org/mailing-lists.html"],"sys_project":["cxf"],"issueTrackerLink":["https://issues.apache.org/jira/browse/CXF"],"sys_project_name":["Apache CXF"],"description":["Apache CXF is an open source services framework. CXF helps you build and develop services using frontend programming APIs, like JAX-WS and JAX-RS. These services can speak a variety of protocols such as SOAP, XML/HTTP, RESTful HTTP, or CORBA and work over a variety of transports such as HTTP, JMS or JBI."],"projectName":["Apache CXF"]},"sort":["apache cxf"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-karaf","_score":null,"fields":{"sys_url_view":["http://karaf.apache.org/"],"license":["ASL"],"githubLink":["https://github.com/apache/karaf"],"docsLink":["http://karaf.apache.org/index/documentation.html"],"devForumLink":["http://karaf.922171.n3.nabble.com/Karaf-Dev-f930721.html"],"sys_project":["karaf"],"issueTrackerLink":["https://issues.apache.org/jira/browse/KARAF"],"userForumLink":["http://karaf.922171.n3.nabble.com/Karaf-User-f930749.html"],"sys_project_name":["Apache Karaf"],"description":["Apache Karaf is a small OSGi based runtime which provides a lightweight container onto which various components and applications can be deployed."],"projectName":["Apache Karaf"]},"sort":["apache karaf"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-servicemix","_score":null,"fields":{"sys_url_view":["http://servicemix.apache.org/"],"license":["ASL"],"githubLink":["https://github.com/apache/cxf"],"docsLink":["http://servicemix.apache.org/documentation.html"],"mailingListLink":["http://servicemix.apache.org/community/mailing-lists.html"],"sys_project":["servicemix"],"issueTrackerLink":["https://github.com/apache/servicemix"],"userForumLink":["http://servicemix.apache.org/community/discussion-forums.html"],"sys_project_name":["Apache ServiceMix"],"description":["Apache ServiceMix is a flexible, open-source integration container that unifies the features and functionality of Apache ActiveMQ, Camel, CXF, and Karaf into a powerful runtime platform you can use to build your own integrations solutions. It provides a complete, enterprise ready ESB exclusively powered by OSGi."],"projectName":["Apache ServiceMix"]},"sort":["apache servicemix"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-tomcat","_score":null,"fields":{"githubLink":["https://github.com/apache/tomcat"],"docsLink":["http://tomcat.apache.org/"],"devForumLink":["mail list: dev@tomcat.apache.org"],"issueTrackerLink":["https://issues.apache.org/bugzilla/"],"description":["Apache Tomcat"],"knowledgeBaseLink":["http://tomcat.apache.org/"],"sys_url_view":["http://tomcat.apache.org/"],"license":["ASL"],"blogLink":["https://blogs.apache.org/tomcat/"],"sys_project":["tomcat"],"userForumLink":["mail list: users@tomcat.apache.org"],"sys_project_name":["Apache Tomcat"],"projectName":["Apache Tomcat"]},"sort":["apache tomcat"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-apiman","_score":null,"fields":{"githubLink":["https://github.com/apiman/apiman"],"docsLink":["http://www.apiman.io/latest/tutorials.html"],"jiraLink":["https://issues.jboss.org/browse/APIMAN"],"downloadsLink":["http://www.apiman.io/latest/download.html"],"description":["The apiman project brings an open source development methodology to API Management, coupling a rich API design & configuration layer with a blazingly fast runtime."],"sys_url_view":["http://apiman.io/"],"license":["ASL"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/apiman-user"],"sys_project":["apiman"],"twitterLink":["https://twitter.com/apiman_io"],"sys_project_name":["apiman"],"chatLink":["http://www.apiman.io/latest/chat.html"],"projectName":["apiman"]},"sort":["apiman"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-apiviz","_score":null,"fields":{"sys_url_view":["https://code.google.com/p/apiviz/"],"license":["LGPL2"],"srcLink":["http://anonsvn.jboss.org/repos/apiviz/trunk/"],"docsLink":["https://code.google.com/p/apiviz/"],"jiraLink":["https://issues.jboss.org/browse/APIVIZ"],"sys_project":["apiviz"],"downloadsLink":["https://code.google.com/p/apiviz/downloads/list"],"sys_project_name":["APIviz"],"description":["APIviz is a JavaDoc doclet which extends the Java standard doclet. It generates comprehensive UML-like class and package diagrams for quick understanding of the overall API structure."],"fisheyeLink":["https://source.jboss.org/browse/APIviz"],"projectName":["APIviz"]},"sort":["apiviz"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-arquillian","_score":null,"fields":{"githubLink":["https://github.com/arquillian"],"docsLink":["http://arquillian.org/guides"],"devForumLink":["http://community.jboss.org/en/arquillian/dev?view=discussions"],"issueTrackerLink":["https://issues.jboss.org/browse/ARQ"],"description":["An innovative testing platform for the Java Virtual Machine (JVM). Open source. Highly extensible."],"knowledgeBaseLink":["https://docs.jboss.org/author/display/ARQ/Reference+Guide"],"sys_url_view":["http://arquillian.org"],"license":["ASL"],"blogLink":["http://arquillian.org/blog"],"sys_project":["arquillian"],"userForumLink":["http://community.jboss.org/en/arquillian?view=discussions"],"sys_project_name":["Arquillian"],"projectName":["Arquillian"]},"sort":["arquillian"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-artificer","_score":null,"fields":{"githubLink":["https://github.com/ArtificerRepo/artificer"],"docsLink":["http://docs.jboss.org/artificer"],"devForumLink":["https://developer.jboss.org/en/artificer/dev"],"jiraLink":["https://issues.jboss.org/browse/ARTIF"],"downloadsLink":["http://artificer.jboss.org/downloads.html"],"description":["Artificer is a software artifact, logical metadata, and information repository.  It consists of a common data model, multiple interfaces, useful tools, and extensibility. 100% Open source. Untangle all the things!"],"communityLink":["http://artificer.jboss.org/contribute.html"],"sys_url_view":["http://artificer.jboss.org"],"license":["ASL"],"blogLink":["https://developer.jboss.org/en/artificer/blog"],"sys_project":["artificer"],"twitterLink":["https://twitter.com/ArtificerRepo"],"userForumLink":["https://developer.jboss.org/en/artificer"],"sys_project_name":["Artificer"],"chatLink":["http://artificer.jboss.org/chat.html"],"projectName":["Artificer"]},"sort":["artificer"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-boxgrinder","_score":null,"fields":{"githubLink":["http://boxgrinder.org/development"],"docsLink":["http://boxgrinder.org/tutorials/"],"issueTrackerLink":["http://boxgrinder.org/community/"],"downloadsLink":["/boxgrinder/downloads"],"description":["BoxGrinder is a set of projects that help you grind out appliances for multiple virtualization and Cloud providers."],"knowledgeBaseLink":["http://boxgrinder.org/tutorials/"],"communityLink":["http://boxgrinder.org/community/"],"sys_url_view":["http://boxgrinder.org"],"archived":["false"],"license":["LGPL3"],"blogLink":["http://boxgrinder.org/blog/"],"sys_project":["boxgrinder"],"twitterLink":["http://twitter.com/boxgrinder"],"userForumLink":["http://community.jboss.org/en/boxgrinder?view=discussions"],"sys_project_name":["BoxGrinder"],"chatLink":["irc://irc.freenode.net/boxgrinder"],"projectName":["BoxGrinder"]},"sort":["boxgrinder"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-byteman","_score":null,"fields":{"githubLink":["http://github.com/bytemanproject/byteman"],"docsLink":["/byteman/documentation"],"devForumLink":["https://community.jboss.org/en/byteman/dev"],"issueTrackerLink":["https://issues.jboss.org/browse/BYTEMAN"],"downloadsLink":["/byteman/downloads"],"description":["Byteman is a tool which simplifies tracing and testing of Java programs."],"fisheyeLink":["https://source.jboss.org/browse/Byteman"],"sys_url_view":["/byteman"],"archived":["false"],"license":["LGPL"],"sys_project":["byteman"],"userForumLink":["https://community.jboss.org/en/byteman"],"sys_project_name":["Byteman"],"projectName":["Byteman"]},"sort":["byteman"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-capedwarf","_score":null,"fields":{"sys_url_view":["/capedwarf"],"archived":["false"],"license":["LGPL"],"githubLink":["https://github.com/capedwarf"],"docsLink":["http://capedwarf.org/documentation/"],"jiraLink":["https://issues.jboss.org/browse/CAPEDWARF"],"sys_project":["capedwarf"],"downloadsLink":["/capedwarf/downloads"],"sys_project_name":["CapeDwarf"],"description":["JBoss CapeDwarf is an implementation of the Google App Engine API, which allows applications to be deployed on JBoss Application Servers without modification."],"projectName":["CapeDwarf"],"communityLink":["https://community.jboss.org/en/capedwarf"]},"sort":["capedwarf"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-stormgrind_projects_cirras","_score":null,"fields":{"githubLink":["http://github.com/stormgrind/cirras"],"docsLink":["http://community.jboss.org/docs/DOC-14399"],"issueTrackerLink":["/stormgrind/issues"],"downloadsLink":["/stormgrind/downloads/cirras"],"specialIcon":["cirras"],"description":["CirrAS is an effort to automatically deploy a clustered JBoss AS server in the Cloud."],"communityLink":["https://community.jboss.org/en/stormgrind?view=documents"],"sys_url_view":["/stormgrind/projects/cirras"],"archived":["false"],"license":["LGPL"],"sys_project":["stormgrind_cirras"],"userForumLink":["http://community.jboss.org/en/stormgrind?view=discussions"],"sys_project_name":["CirrAS"],"chatLink":["irc://irc.freenode.net/stormgrind"],"projectName":["CirrAS"]},"sort":["cirras"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-debezium","_score":null,"fields":{"githubLink":["https://github.com/debezium/debezium/"],"docsLink":["http://debezium.io/docs"],"devForumLink":["https://gitter.im/debezium/dev"],"jiraLink":["https://issues.jboss.org/browse/DBZ/"],"downloadsLink":["http://debezium.io/docs/releases/"],"description":["Change data capture and event streams for databases"],"communityLink":["http://debezium.io/community/"],"sys_url_view":["http://debezium.io"],"license":["ASL2"],"blogLink":["http://debezium.io/blog/"],"buildLink":["https://travis-ci.org/debezium/"],"mailingListLink":["https://groups.google.com/forum/#!forum/debezium"],"sys_project":["debezium"],"twitterLink":["http://twitter.com/debezium"],"userForumLink":["https://gitter.im/debezium/user"],"sys_project_name":["Debezium"],"projectName":["Debezium"]},"sort":["debezium"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-drools","_score":null,"fields":{"docsLink":["/drools/documentation"],"issueTrackerLink":["/drools/issue-tracker"],"downloadsLink":["/drools/downloads"],"description":["A business logic integration platform which provides a unified and integrated platform for rules, workflow and event processing"],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/JBossRules"],"hudsonLink":["https://hudson.jboss.org/hudson/view/Drools%20jBPM/"],"sys_url_view":["/drools"],"archived":["false"],"license":["ASL"],"blogLink":["http://blog.athico.com/"],"srcLink":["/drools/source-code"],"mailingListLink":["/drools/lists"],"sys_project":["drools"],"userForumLink":["http://drools-java-rules-engine.46999.n3.nabble.com/Drools-User-f47000.html"],"sys_project_name":["Drools"],"chatLink":["/drools/irc"],"projectName":["Drools"]},"sort":["drools"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-ejb3","_score":null,"fields":{"docsLink":["/ejb3/docs"],"devForumLink":["https://community.jboss.org/en/ejb3/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/EJBTHREE"],"downloadsLink":["/ejb3/downloads"],"description":["An implementation of EJB 3 specification for JBossAS"],"fisheyeLink":["http://fisheye.jboss.org/browse/JBossAS/projects/ejb3"],"knowledgeBaseLink":["https://community.jboss.org/wiki/EJB3"],"committerLink":["https://svn.jboss.org/repos/jbossas/projects/ejb3/trunk/"],"sys_url_view":["/ejb3"],"archived":["false"],"buildLink":["/ejb3/build"],"sys_project":["ejb3"],"userForumLink":["https://community.jboss.org/en/ejb3"],"sys_project_name":["EJB3"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossas/projects/ejb3/trunk/"],"chatLink":["/ejb3/chat"],"projectName":["JBoss EJB3"]},"sort":["ejb3"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-errai","_score":null,"fields":{"githubLink":["https://github.com/errai"],"docsLink":["http://docs.jboss.org/errai/"],"devForumLink":["http://community.jboss.org/en/errai/dev?view=discussions"],"issueTrackerLink":["https://issues.jboss.org/browse/ERRAI"],"description":["Errai is a GWT-based framework for building rich web applications using next-generation web technologies."],"knowledgeBaseLink":["https://github.com/errai/errai/blob/master/errai-docs/src/main/asciidoc/reference.asciidoc"],"hudsonLink":["https://hudson.jboss.org/hudson/job/errai"],"sys_url_view":["http://erraiframework.org"],"license":["ASL"],"blogLink":["http://errai-blog.blogspot.com"],"sys_project":["errai"],"twitterLink":["https://twitter.com/jbosserrai"],"userForumLink":["http://community.jboss.org/en/errai?view=discussions"],"sys_project_name":["Errai"],"projectName":["Errai"]},"sort":["errai"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-exojcr","_score":null,"fields":{"sys_url_view":["/exojcr"],"archived":["false"],"docsLink":["/exojcr/documentation"],"jiraLink":["https://jira.jboss.org/browse/EXOJCR"],"sys_project":["exojcr"],"downloadsLink":["/exojcr/downloads"],"sys_project_name":["eXo JCR"],"description":["An implementation of the Java Specification Request 170, (Content Repository for Java technology API)"],"projectName":["eXo JCR"],"hudsonLink":["http://hudson.jboss.org/hudson/view/jboss-exo-jcr/"]},"sort":["exo jcr"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-fabric8","_score":null,"fields":{"githubLink":["https://github.com/fabric8io/fabric8"],"docsLink":["http://fabric8.io/docs/"],"jiraLink":["https://github.com/fabric8io/fabric8/issues?q=is%3Aopen"],"downloadsLink":["http://fabric8.io/getstarted/"],"description":["Open Source Libraries for Mobile Connectivity"],"communityLink":["http://fabric8.io/community/"],"sys_url_view":["http://fabric8.io/"],"license":["ASL"],"srcLink":["https://github.com/fabric8io/fabric8"],"mailingListLink":["https://groups.google.com/forum/#!forum/fabric8"],"sys_project":["fabric8"],"twitterLink":["https://twitter.com/fabric8io"],"sys_project_name":["Fabric8"],"chatLink":["http://webchat.freenode.net/?channels=fabric8"],"projectName":["fabric8"]},"sort":["fabric8"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-forge_projectnav","_score":null,"fields":{"githubLink":["http://github.com/forge/core"],"docsLink":["http://docs.jboss.org/author/display/FORGE"],"devForumLink":["http://lists.jboss.org/mailman/listinfo/forge-dev"],"issueTrackerLink":["http://issues.jboss.org/browse/FORGE"],"specialIcon":["forge"],"description":["A core framework and next-generation shell for tooling and automation at a command line level; with APIs for integration in IDEs, exending built in functionality with plugins, and scripting for automating repeditive tasks, Forge is a tool every open-source developer should be looking at."],"fisheyeLink":["http://source.jboss.org/browse/Forge"],"sys_url_view":["http://jboss.org/forge"],"archived":["false"],"sys_project":["forge"],"userForumLink":["http://lists.jboss.org/mailman/listinfo/forge-users"],"sys_project_name":["Forge"],"chatLink":["irc://irc.freenode.net:6667/forge"],"projectName":["Forge"]},"sort":["forge"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-gatein","_score":null,"fields":{"githubLink":["https://github.com/gatein"],"docsLink":["https://docs.jboss.org/author/display/GTNPORTALDOC/Home"],"devForumLink":["http://community.jboss.org/en/gatein/dev?view=discussions"],"jiraLink":["https://jira.jboss.org/jira/browse/GTNPORTAL"],"downloadsLink":["/gatein/download"],"description":["Opensource Website Framework"],"knowledgeBaseLink":["https://community.jboss.org/en/gatein?view=documents"],"communityLink":["http://community.jboss.org/en/gatein"],"hudsonLink":["https://hudson.jboss.org/hudson/view/GateIn/"],"sys_url_view":["/gatein"],"archived":["false"],"license":["LGPL"],"blogLink":["http://community.jboss.org/en/gatein?view=blog"],"sys_project":["gatein"],"twitterLink":["http://www.twitter.com/gatein"],"userForumLink":["http://community.jboss.org/en/gatein?view=discussions"],"sys_project_name":["GateIn"],"chatLink":["irc://irc.freenode.net/gatein"],"projectName":["GateIn"]},"sort":["gatein"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-gatein_portletcontainer","_score":null,"fields":{"docsLink":["/gatein/portletcontainer/documentation"],"jiraLink":["https://jira.jboss.org/jira/browse/GTNPC"],"downloadsLink":["/gatein/portletcontainer/downloads"],"description":["GateIn Portlet Container is the next generation portlet container on which GateIn Portal, and the Enterprise Portal Platform are based."],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/JBossPortletContainer"],"committerLink":["https://svn.jboss.org/repos/gatein/components/pc/"],"sys_url_view":["/gatein/portletcontainer"],"archived":["false"],"license":["LGPL"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/gatein/components/pc/"],"sys_project":["gatein_portletcontainer"],"sys_project_name":["GateIn Portlet Container"],"anonymousLink":["http://anonsvn.jboss.org/repos/gatein/components/pc/"],"projectName":["GateIn Portlet Container"]},"sort":["gatein portlet container"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-guvnor","_score":null,"fields":{"devForumLink":["http://community.jboss.org/en/guvnor/dev?view=all"],"jiraLink":["http://jira.jboss.org/jira/browse/GUVNORSOA"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/GUVNORSOA"],"description":["The Overlord project for \\"Governance\\" requires a repository for governing and managing artifacts, such as rule and process definitions, service descriptions, databases schemas, etc. This is Guvnor!"],"fisheyeLink":["http://fisheye.jboss.org/browse/Guvnor"],"knowledgeBaseLink":["http://community.jboss.org/wiki/Guvnor"],"committerLink":["http://svn.jboss.org/repos/guvnor"],"sys_url_view":["/guvnor"],"archived":["false"],"blogLink":["http://guvtalk.blogspot.com"],"sys_project":["guvnor"],"twitterLink":["http://twitter.com/guvtalk"],"userForumLink":["http://community.jboss.org/en/guvnor?view=all"],"sys_project_name":["Guvnor"],"anonymousLink":["http://anonsvn.jboss.org/repos/guvnor"],"projectName":["Guvnor"]},"sort":["guvnor"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hawkular","_score":null,"fields":{"githubLink":["https://github.com/hawkular"],"docsLink":["http://www.hawkular.org/docs/user/quick-start.html"],"jiraLink":["https://issues.jboss.org/browse/HAWKULAR"],"downloadsLink":["http://www.hawkular.org/downloads.html"],"description":["Systems Management and Monitoring Platform"],"sys_url_view":["http://www.hawkular.org"],"license":["ASL"],"blogLink":["http://www.hawkular.org/blog.html"],"buildLink":["https://travis-ci.org/hawkular"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hawkular-dev"],"sys_project":["hawkular"],"twitterLink":["https://twitter.com/hawkular_org"],"sys_project_name":["Hawkular"],"chatLink":["irc://irc.freenode.net/#hawkular"],"projectName":["Hawkular"]},"sort":["hawkular"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hawtio","_score":null,"fields":{"githubLink":["https://github.com/hawtio/hawtio"],"docsLink":["http://hawt.io/docs/"],"jiraLink":["https://github.com/hawtio/hawtio/issues?q=is%3Aopen"],"downloadsLink":["http://hawt.io/getstarted/"],"description":["Open Source Libraries for Mobile Connectivity"],"communityLink":["http://hawt.io/community/"],"sys_url_view":["http://hawt.io"],"license":["ASL"],"srcLink":["https://github.com/hawtio/hawtio"],"mailingListLink":["https://groups.google.com/forum/#!forum/hawtio"],"sys_project":["hawtio"],"twitterLink":["https://twitter.com/hawtio"],"sys_project_name":["hawtio"],"chatLink":["http://webchat.freenode.net/?channels=hawtio"],"projectName":["hawtio"]},"sort":["hawtio"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hibernateOgm","_score":null,"fields":{"githubLink":["https://github.com/hibernate/hibernate-ogm/"],"docsLink":["http://hibernate.org/ogm/documentation/"],"jiraLink":["https://hibernate.atlassian.net/browse/OGM"],"downloadsLink":["http://hibernate.org/ogm/downloads/"],"specialIcon":["hibernate"],"description":["Domain model persistence for NoSQL datastores"],"communityLink":["http://hibernate.org/community/"],"sys_url_view":["http://hibernate.org/ogm/"],"license":["LGPL2"],"blogLink":["http://in.relation.to/"],"buildLink":["http://ci.hibernate.org"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hibernate-dev"],"sys_project":["hibernate_ogm"],"twitterLink":["http://twitter.com/hibernate"],"userForumLink":["https://forum.hibernate.org/viewforum.php?f=31"],"sys_project_name":["Hibernate OGM"],"chatLink":["http://webchat.freenode.net/?channels=hibernate"],"projectName":["Hibernate OGM"]},"sort":["hibernate ogm"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hibernateOrm","_score":null,"fields":{"githubLink":["https://github.com/hibernate/hibernate-orm/"],"docsLink":["http://hibernate.org/orm/documentation/"],"jiraLink":["https://hibernate.atlassian.net/browse/HHH"],"downloadsLink":["http://hibernate.org/orm/downloads/"],"specialIcon":["hibernate"],"description":["Domain model persistence for relational databases"],"communityLink":["http://hibernate.org/community/"],"sys_url_view":["http://hibernate.org/orm/"],"license":["LGPL2"],"blogLink":["http://in.relation.to/"],"buildLink":["http://ci.hibernate.org"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hibernate-dev"],"sys_project":["hibernate"],"twitterLink":["http://twitter.com/hibernate"],"userForumLink":["https://forum.hibernate.org/viewforum.php?f=1"],"sys_project_name":["Hibernate ORM"],"chatLink":["http://webchat.freenode.net/?channels=hibernate"],"projectName":["Hibernate ORM"]},"sort":["hibernate orm"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hibernateSearch","_score":null,"fields":{"githubLink":["https://github.com/hibernate/hibernate-search/"],"docsLink":["http://hibernate.org/search/documentation/"],"jiraLink":["https://hibernate.atlassian.net/browse/HSEARCH"],"downloadsLink":["http://hibernate.org/search/downloads/"],"specialIcon":["hibernate"],"description":["Full-text search for your domain model"],"communityLink":["http://hibernate.org/community/"],"sys_url_view":["http://hibernate.org/search/"],"license":["LGPL2"],"blogLink":["http://in.relation.to/"],"buildLink":["http://ci.hibernate.org"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hibernate-dev"],"sys_project":["hibernate_search"],"twitterLink":["http://twitter.com/hibernate"],"userForumLink":["https://forum.hibernate.org/viewforum.php?f=9"],"sys_project_name":["Hibernate Search"],"chatLink":["http://webchat.freenode.net/?channels=hibernate"],"projectName":["Hibernate Search"]},"sort":["hibernate search"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hibernateShards","_score":null,"fields":{"githubLink":["https://github.com/hibernate/hibernate-shards/"],"docsLink":["http://docs.jboss.org/hibernate/stable/shards/reference/en/html/"],"jiraLink":["https://hibernate.atlassian.net/browse/HSHARDS"],"downloadsLink":["http://sourceforge.net/projects/hibernate/files/hibernate-shards/"],"specialIcon":["hibernate"],"description":["Horizontal sharding for your relational database"],"communityLink":["http://hibernate.org/community/"],"sys_url_view":["http://hibernate.org/others/"],"license":["LGPL2"],"blogLink":["http://in.relation.to/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hibernate-dev"],"sys_project":["hibernate_shards"],"twitterLink":["http://twitter.com/hibernate"],"userForumLink":["https://forum.hibernate.org/viewforum.php?f=9"],"sys_project_name":["Hibernate Shards"],"chatLink":["http://webchat.freenode.net/?channels=hibernate"],"projectName":["Hibernate Shards"]},"sort":["hibernate shards"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hibernateTools","_score":null,"fields":{"githubLink":["https://github.com/hibernate/hibernate-tools/"],"docsLink":["http://www.jboss.org/tools/docs/"],"jiraLink":["https://hibernate.atlassian.net/browse/HBX"],"downloadsLink":["http://www.jboss.org/tools/download/"],"specialIcon":["hibernate"],"description":["Command line tools and IDE plugins for your Hibernate usages"],"communityLink":["http://hibernate.org/community/"],"sys_url_view":["http://hibernate.org/tools/"],"license":["LGPL2"],"blogLink":["http://in.relation.to/"],"buildLink":["http://hudson.jboss.org/hudson/job/hibernate-tools-trunk/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hibernate-dev"],"sys_project":["hibernate_tools"],"twitterLink":["http://twitter.com/hibernate"],"userForumLink":["https://forum.hibernate.org/viewforum.php?f=6"],"sys_project_name":["Hibernate Tools"],"chatLink":["http://webchat.freenode.net/?channels=hibernate"],"projectName":["Hibernate Tools"]},"sort":["hibernate tools"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hibernateValidator","_score":null,"fields":{"githubLink":["https://github.com/hibernate/hibernate-validator/"],"docsLink":["http://hibernate.org/validator/documentation/"],"jiraLink":["https://hibernate.atlassian.net/browse/HV"],"downloadsLink":["http://hibernate.org/validator/downloads/"],"specialIcon":["hibernate"],"description":["Annotation based constraints for your domain model"],"communityLink":["http://hibernate.org/community/"],"sys_url_view":["http://hibernate.org/validator/"],"license":["ASL"],"blogLink":["http://in.relation.to/"],"buildLink":["https://hibernate-validator.ci.cloudbees.com/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/hibernate-dev"],"sys_project":["hibernate_validator"],"twitterLink":["http://twitter.com/hibernate"],"userForumLink":["https://forum.hibernate.org/viewforum.php?f=9"],"sys_project_name":["Hibernate Validator"],"chatLink":["http://webchat.freenode.net/?channels=hibernate"],"projectName":["Hibernate Validator"]},"sort":["hibernate validator"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-hornetq","_score":null,"fields":{"githubLink":["https://github.com/hornetq/hornetq"],"docsLink":["/hornetq/docs"],"devForumLink":["https://community.jboss.org/en/hornetq/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/HORNETQ"],"downloadsLink":["/hornetq/downloads"],"specialIcon":["hornetQ"],"description":["HornetQ is an open source project to build a multi-protocol, embeddable, very high performance, clustered, asynchronous messaging system."],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/HornetQ"],"communityLink":["/hornetq/community"],"anonymousGitLink":["https://github.com/hornetq/hornetq.git"],"sys_url_view":["/hornetq"],"archived":["false"],"license":["ASL"],"blogLink":["http://hornetq.blogspot.com/"],"buildLink":["/hornetq/build"],"sys_project":["hornetq"],"twitterLink":["http://twitter.com/hornetq"],"userForumLink":["https://community.jboss.org/en/hornetq"],"sys_project_name":["HornetQ"],"chatLink":["irc://freenode.net:6667/hornetq"],"projectName":["HornetQ"]},"sort":["hornetq"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-immutant","_score":null,"fields":{"githubLink":["https://github.com/immutant/immutant"],"docsLink":["http://immutant.org/documentation/"],"issueTrackerLink":["https://issues.jboss.org/browse/IMMUTANT"],"downloadsLink":["http://immutant.org/install/"],"description":["An application server for Clojure, built on JBoss AS"],"communityLink":["http://immutant.org/community/"],"hudsonLink":["https://projectodd.ci.cloudbees.com/job/immutant-incremental/"],"sys_url_view":["http://immutant.org"],"license":["LGPL3"],"blogLink":["http://immutant.org/news/"],"srcLink":["https://github.com/immutant/immutant"],"buildLink":["http://immutant.org/releases/"],"mailingListLink":["http://immutant.org/community/mailing_lists/"],"sys_project":["immutant"],"twitterLink":["https://twitter.com/immutant"],"sys_project_name":["Immutant"],"chatLink":["http://webchat.freenode.net/?channels=immutant"],"projectName":["Immutant"]},"sort":["immutant"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-infinispan","_score":null,"fields":{"githubLink":["http://github.com/infinispan/infinispan"],"docsLink":["http://infinispan.org/documentation/"],"jiraLink":["https://jira.jboss.org/jira/browse/ISPN"],"downloadsLink":["http://infinispan.org/download/"],"description":["Transactional in-memory key/value NoSQL datastore & Data Grid"],"knowledgeBaseLink":["http://community.jboss.org/en/infinispan?view=documents"],"communityLink":["http://infinispan.org/community/"],"hudsonLink":["https://infinispan.ci.cloudbees.com/"],"sys_url_view":["http://infinispan.org/"],"archived":["false"],"license":["LGPL"],"blogLink":["http://infinispan.blogspot.com/"],"srcLink":["http://github.com/infinispan/infinispan"],"buildLink":["http://ci.infinispan.org/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/infinispan-dev"],"sys_project":["infinispan"],"userForumLink":["https://community.jboss.org/en/infinispan/content?filterID=contentstatus%5Bpublished%5D~objecttype~objecttype%5Bthread%5D"],"sys_project_name":["Infinispan"],"chatLink":["irc://irc.freenode.org/infinispan"],"projectName":["Infinispan"]},"sort":["infinispan"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-ironjacamar","_score":null,"fields":{"githubLink":["https://github.com/ironjacamar/ironjacamar"],"docsLink":["/ironjacamar/docs"],"devForumLink":["http://community.jboss.org/en/ironjacamar/dev?view=all"],"jiraLink":["https://issues.jboss.org/jira/browse/JBJCA"],"issueTrackerLink":["/ironjacamar/issues"],"downloadsLink":["/ironjacamar/downloads"],"description":["IronJacamar implements the Java Connector Architecture"],"communityLink":["/ironjacamar/community"],"sys_url_view":["/ironjacamar"],"archived":["false"],"license":["LGPL"],"srcLink":["/ironjacamar/sourcecode"],"buildLink":["/ironjacamar/build"],"sys_project":["ironjacamar"],"userForumLink":["http://community.jboss.org/en/ironjacamar?view=all"],"sys_project_name":["IronJacamar"],"projectName":["IronJacamar"]},"sort":["ironjacamar"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-javassist","_score":null,"fields":{"devForumLink":["https://community.jboss.org/en/javassist/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/JASSIST"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JASSIST"],"downloadsLink":["/javassist/downloads"],"description":["Javassist (Java programming assistant) is a load-time reflective system for Java."],"anonymousGitLink":["https://github.com/jboss-javassist/javassist.git"],"sys_url_view":["/javassist"],"archived":["false"],"license":["LGPL"],"srcLink":["https://github.com/jboss-javassist/javassist"],"sys_project":["javassist"],"userForumLink":["https://community.jboss.org/en/javassist"],"sys_project_name":["Javassist"],"projectName":["Javassist"]},"sort":["javassist"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jberet","_score":null,"fields":{"githubLink":["https://github.com/jberet/jsr352"],"docsLink":["http://docs.jboss.org/jberet/"],"jiraLink":["https://issues.jboss.org/browse/JBERET"],"downloadsLink":["https://repository.jboss.org/nexus/index.html#nexus-search;quick~jberet"],"description":["A standard-based, lightweight and scalable Java batch framework"],"communityLink":["https://community.jboss.org/en/wildfly?view=discussions"],"sys_url_view":["https://github.com/jberet/jsr352"],"license":["EPL"],"srcLink":["https://github.com/jberet/jsr352"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/jberet-dev"],"sys_project":["jberet"],"sys_project_name":["JBeret"],"chatLink":["irc://freenode.org/#wildfly"],"projectName":["JBeret"]},"sort":["jberet"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossas","_score":null,"fields":{"githubLink":["https://github.com/jbossas/jboss-as"],"docsLink":["/jbossas/docs"],"issueTrackerLink":["https://issues.jboss.org/browse/AS7"],"downloadsLink":["/jbossas/downloads"],"description":["An open source Java application server"],"fisheyeLink":["https://source.jboss.org/browse/JBossAS"],"knowledgeBaseLink":["http://community.jboss.org/en/jbossas"],"hudsonLink":["http://hudson.jboss.org/jenkins/view/JBoss%20AS/"],"sys_url_view":["/jbossas"],"archived":["false"],"license":["LGPL"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/jboss-as7-dev"],"sys_project":["jbossas"],"userForumLink":["https://community.jboss.org/en/jbossas7"],"sys_project_name":["JBoss Application Server 7"],"chatLink":["irc://irc.freenode.net#jboss"],"projectName":["JBoss Application Server 7"]},"sort":["jboss application server 7"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossclustering","_score":null,"fields":{"docsLink":["http://docs.jboss.org/jbossclustering/"],"devForumLink":["https://community.jboss.org/en/jbossas/clustering/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/JBCLUSTER"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBCLUSTER"],"description":["Scalability and High Availability for the JBoss Application Server"],"fisheyeLink":["http://fisheye.jboss.org/browse/JBossAS/projects/cluster"],"knowledgeBaseLink":["https://community.jboss.org/wiki/JBossHAAS5x"],"sys_url_view":["/jbossclustering"],"archived":["false"],"sys_project":["jbossclustering"],"userForumLink":["https://community.jboss.org/en/jbossas/clustering"],"sys_project_name":["JBoss Clustering"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossas/projects/cluster/"],"projectName":["JBoss Clustering"]},"sort":["jboss clustering"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossdtf","_score":null,"fields":{"devForumLink":["http://community.jboss.org/en/dtf/dev?view=discussions"],"jiraLink":["http://jira.jboss.org/jira/browse/DTF"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/DTF"],"description":["JBossDTF is a distributed testing tool designed to run tests that involve multiple processes (such as clients and servers) on heterogeneous environments."],"fisheyeLink":["http://fisheye.jboss.org/browse/DTF"],"knowledgeBaseLink":["http://community.jboss.org/docs/DOC-10310"],"committerLink":["https://svn.jboss.org/repos/dtf/"],"sys_url_view":["/jbossdtf"],"archived":["false"],"sys_project":["jbossdtf"],"userForumLink":["http://community.jboss.org/en/dtf?view=discussions"],"sys_project_name":["JBoss DTF"],"anonymousLink":["http://anonsvn.jboss.org/repos/dtf/"],"projectName":["JBoss DTF"]},"sort":["jboss dtf"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossesb","_score":null,"fields":{"docsLink":["/jbossesb/docs"],"devForumLink":["https://community.jboss.org/en/jbossesb/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/JBESB"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBESB"],"downloadsLink":["/jbossesb/downloads"],"description":["Next generation of EAI"],"fisheyeLink":["http://fisheye.jboss.org/browse/JBossESB"],"knowledgeBaseLink":["http://community.jboss.org/wiki/JBossESB"],"committerLink":["https://svn.jboss.org/repos/labs/labs/jbossesb/trunk"],"communityLink":["http://community.jboss.org/community/jbossesb"],"sys_url_view":["/jbossesb"],"archived":["false"],"license":["LGPL"],"blogLink":["http://jbossesb.blogspot.com/"],"srcLink":["/jbossesb/subversion"],"mailingListLink":["/jbossesb/lists"],"sys_project":["jbossesb"],"userForumLink":["https://community.jboss.org/en/jbossesb"],"sys_project_name":["JBoss ESB"],"anonymousLink":["http://anonsvn.jboss.org/repos/labs/labs/jbossesb/"],"chatLink":["/jbossesb/irc"],"projectName":["JBoss ESB"]},"sort":["jboss esb"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossidentity","_score":null,"fields":{"docsLink":["http://www.jboss.org/jbossidentity/docs/guides"],"devForumLink":["https://community.jboss.org/en/picketlink/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/JBID"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBID"],"downloadsLink":["http://www.jboss.org/jbossidentity/downloads/"],"description":["JBoss Identity is an umbrella project that develops a community project for Identity Management. See also PicketLink project!"],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-13254"],"committerLink":["https://svn.jboss.org/repos/jbossidentity/"],"sys_url_view":["/jbossidentity"],"archived":["false"],"blogLink":["http://anil-identity.blogspot.com/"],"sys_project":["jbossidentity"],"userForumLink":["https://community.jboss.org/en/picketlink"],"sys_project_name":["JBoss Identity"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossidentity/"],"projectName":["JBoss Identity"]},"sort":["jboss identity"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossmarshalling","_score":null,"fields":{"githubLink":["http://github.com/jboss-remoting/jboss-marshalling"],"docsLink":["/jbossmarshalling/docs"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBMAR"],"downloadsLink":["/jbossmarshalling/downloads"],"description":["An alternative serialization API that fixes many of the problems found in the JDK serialization API."],"sys_url_view":["/jbossmarshalling"],"archived":["false"],"license":["LGPL"],"srcLink":["http://github.com/jboss-remoting/jboss-marshalling"],"sys_project":["jbossmarshalling"],"sys_project_name":["JBoss Marshalling"],"chatLink":["irc://irc.freenode.net:6667/jboss-remoting"],"projectName":["JBoss Marshalling"]},"sort":["jboss marshalling"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossprofiler","_score":null,"fields":{"docsLink":["http://www.jboss.org/jbossprofiler/doc/index.html"],"devForumLink":["http://community.jboss.org/en/jbossprofiler/dev?view=discussions"],"jiraLink":["http://jira.jboss.org/jira/browse/JBPROFILER"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBPROFILER"],"downloadsLink":["/jbossprofiler/downloads"],"description":["A log based profiler using JVMPI and JVMTI"],"fisheyeLink":["http://fisheye.jboss.org/browse/JBossProfiler"],"knowledgeBaseLink":["http://community.jboss.org/docs/DOC-10728"],"sys_url_view":["/jbossprofiler"],"archived":["false"],"license":["LGPL"],"blogLink":["http://www.jboss.org/feeds/view/jbossprofiler"],"sys_project":["jbossprofiler"],"sys_project_name":["JBoss Profiler"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossprofiler"],"projectName":["JBoss Profiler"]},"sort":["jboss profiler"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossremoting","_score":null,"fields":{"githubLink":["http://www.github.com/dmlloyd/jboss-remoting"],"docsLink":["/jbossremoting/documentation"],"devForumLink":["https://community.jboss.org/en/jbossremoting/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/JBREM"],"downloadsLink":["/jbossremoting/downloads"],"description":["A general purpose framework for symmetric and asymmetric communication over a network"],"communityLink":["/jbossremoting/getting-involved"],"sys_url_view":["/jbossremoting"],"archived":["false"],"license":["LGPL"],"blogLink":["/jbossremoting/blogs"],"srcLink":["/jbossremoting/sourcecode"],"buildLink":["/jbossremoting/sourcecode"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/jbossremoting"],"sys_project":["jbossremoting"],"userForumLink":["https://community.jboss.org/en/jbossremoting"],"sys_project_name":["JBoss Remoting"],"chatLink":["https://www.mibbit.com/chat/?server=irc.freenode.net&channel=%23jboss-remoting"],"projectName":["JBoss Remoting"]},"sort":["jboss remoting"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbosstools","_score":null,"fields":{"githubLink":["https://github.com/jbosstools"],"docsLink":["https://tools.jboss.org/documentation/"],"jiraLink":["https://issues.jboss.org/browse/JBIDE"],"downloadsLink":["https://tools.jboss.org/downloads/"],"description":["Eclipse Plugins for JBoss Technology"],"communityLink":["https://tools.jboss.org/community"],"sys_url_view":["https://tools.jboss.org"],"license":["EPL, LGPL2, ASL"],"blogLink":["https://tools.jboss.org/blog"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/jbosstools-dev"],"sys_project":["jbosstools"],"twitterLink":["http://twitter.com/jbosstools"],"userForumLink":["https://community.jboss.org/en/tools/content?filterID=contentstatus[published]~objecttype~objecttype[thread]"],"sys_project_name":["JBoss Tools"],"chatLink":["http://webchat.freenode.net/?channels=jbosstools"],"projectName":["JBoss Tools"]},"sort":["jboss tools"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossweb","_score":null,"fields":{"docsLink":["/jbossweb/docs"],"devForumLink":["https://community.jboss.org/en/jbossweb/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/JBWEB"],"downloadsLink":["/jbossweb/downloads"],"description":["An enterprise ready web server designed for medium and large applications, based on Tomcat"],"fisheyeLink":["http://fisheye.jboss.org/browse/JBossWeb"],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-11080"],"sys_url_view":["/jbossweb"],"archived":["false"],"license":["LGPL3"],"sys_project":["jbossweb"],"userForumLink":["https://community.jboss.org/en/jbossweb"],"sys_project_name":["JBoss Web"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossweb/"],"projectName":["JBoss Web"]},"sort":["jboss web"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossws","_score":null,"fields":{"githubLink":["https://github.com/jbossws"],"docsLink":["/jbossws/docs"],"devForumLink":["https://community.jboss.org/en/jbossws/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/JBWS"],"issueTrackerLink":["https://jira.jboss.org/jira/browse/JBWS"],"downloadsLink":["/jbossws/downloads"],"description":["A web service framework developed as part of the JBoss Application Server"],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/JBossWS"],"communityLink":["/jbossws/community"],"sys_url_view":["/jbossws"],"archived":["false"],"license":["LGPL"],"blogLink":["http://jbossws.blogspot.com/"],"srcLink":["/jbossws/sourcecode"],"buildLink":["/jbossws/build"],"sys_project":["jbossws"],"userForumLink":["https://community.jboss.org/en/jbossws"],"sys_project_name":["JBoss Web Services"],"projectName":["JBoss Web Services"]},"sort":["jboss web services"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbpm","_score":null,"fields":{"githubLink":["https://github.com/droolsjbpm"],"docsLink":["https://www.jbpm.org/learn/documentation.html"],"jiraLink":["https://issues.jboss.org/browse/JBPM"],"downloadsLink":["https://www.jbpm.org/download/download.html"],"description":["jBPM is a flexible Business Process Management (BPM) Suite."],"hudsonLink":["https://hudson.jboss.org/hudson/view/Drools%20jBPM/"],"sys_url_view":["https://www.jbpm.org"],"license":["ASL"],"blogLink":["http://planet.jboss.org/#projects=jbpm"],"sys_project":["jbpm"],"twitterLink":["https://twitter.com/jbossjbpm"],"userForumLink":["https://www.jbpm.org/community/forum.html"],"sys_project_name":["jBPM"],"chatLink":["https://www.jbpm.org/community/chat.html"],"projectName":["jBPM"]},"sort":["jbpm"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jca","_score":null,"fields":{"docsLink":["/jca/docs"],"devForumLink":["https://community.jboss.org/en/ironjacamar/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/JBJCA"],"issueTrackerLink":["/jca/issues"],"downloadsLink":["/jca/downloads"],"description":["The Java Connector Architecture (JCA) defines a standard architecture for connecting the Java EE platform to heterogeneous Enterprise Information Systems (EIS)."],"fisheyeLink":["http://fisheye.jboss.com/browse/JBossAS/projects/jboss-jca/trunk/"],"knowledgeBaseLink":["https://community.jboss.org/wiki/IronJacamar"],"committerLink":["https://svn.jboss.org/repos/jbossas/projects/jboss-jca/trunk/"],"communityLink":["/jca/community"],"sys_url_view":["/jca"],"archived":["false"],"srcLink":["/jca/sourcecode"],"buildLink":["/jca/build"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/jbossas/projects/jboss-jca/trunk/"],"sys_project":["jca"],"userForumLink":["https://community.jboss.org/en/ironjacamar"],"sys_project_name":["JCA"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossas/projects/jboss-jca/trunk/"],"projectName":["JBoss JCA"]},"sort":["jca"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jgroups","_score":null,"fields":{"githubLink":["https://github.com/belaban/JGroups"],"docsLink":["http://www.jgroups.org/manual/html/index.html"],"devForumLink":["https://sourceforge.net/p/javagroups/mailman/javagroups-development/"],"issueTrackerLink":["https://issues.jboss.org/browse/JGRP"],"downloadsLink":["https://sourceforge.net/projects/javagroups/files/"],"description":["Java library for reliable group communication"],"committerLink":["git@github.com:belaban/JGroups.git"],"communityLink":["http://www.jgroups.org"],"anonymousGitLink":["https://github.com/belaban/JGroups.git"],"sys_url_view":["http://www.jgroups.org"],"license":["ASL"],"blogLink":["http://belaban.blogspot.ch/"],"srcLink":["https://github.com/belaban/JGroups"],"mailingListLink":["https://sourceforge.net/p/javagroups/mailman/javagroups-users/"],"sys_project":["jgroups"],"userForumLink":["https://sourceforge.net/p/javagroups/mailman/javagroups-users/"],"sys_project_name":["JGroups"],"anonymousLink":["https://github.com/belaban/JGroups.git"],"chatLink":["irc://freenode.net/jgroups"],"projectName":["JGroups"],"committerGitLink":["https://github.com/belaban/JGroups.git"]},"sort":["jgroups"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jsfunit","_score":null,"fields":{"githubLink":["https://github.com/jsfunit/jsfunit"],"docsLink":["http://community.jboss.org/wiki/JSFUnitDocumentation"],"devForumLink":["https://developer.jboss.org/en/jsfunit"],"jiraLink":["http://jira.jboss.org/jira/browse/JSFUNIT"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JSFUNIT"],"downloadsLink":["/jsfunit/downloads"],"description":["A test framework for JSF applications"],"knowledgeBaseLink":["http://community.jboss.org/wiki/JBossJSFUnit"],"hudsonLink":["http://hudson.jboss.org/hudson/job/JSFUnit/"],"sys_url_view":["/jsfunit"],"archived":["false"],"license":["LGPL"],"blogLink":["http://jsfunit.blogspot.com/"],"srcLink":["https://github.com/jsfunit/jsfunit"],"buildLink":["/jsfunit/building-jsfunit"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/jsfunit-dev"],"sys_project":["jsfunit"],"userForumLink":["http://community.jboss.org/en/jsfunit?view=overview"],"sys_project_name":["JSFUnit"],"projectName":["JSFUnit"]},"sort":["jsfunit"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-keycloak","_score":null,"fields":{"docsLink":["/keycloak/docs"],"devForumLink":["https://lists.jboss.org/mailman/listinfo/keycloak-dev"],"issueTrackerLink":["https://issues.jboss.org/browse/KEYCLOAK"],"downloadsLink":["/keycloak/downloads"],"description":["Integrated SSO for browser apps and RESTful web services.  Built on top of the OAuth 2.0 and JSON Web Token (JWT) specifications. "],"knowledgeBaseLink":["https://github.com/keycloak/keycloak/wiki"],"communityLink":["https://github.com/keycloak/keycloak"],"sys_url_view":["/keycloak"],"archived":["false"],"license":["ASL"],"blogLink":["http://blog.keycloak.org"],"srcLink":["https://github.com/keycloak/keycloak"],"sys_project":["keycloak"],"userForumLink":["https://lists.jboss.org/mailman/listinfo/keycloak-user"],"sys_project_name":["Keycloak"],"projectName":["Keycloak"]},"sort":["keycloak"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-kompose","_score":null,"fields":{"sys_url_view":["http://kompose.io"],"license":["ASL"],"buildLink":["https://github.com/kubernetes/kompose/tree/master/build"],"githubLink":["https://github.com/kubernetes/kompose"],"docsLink":["http://kompose.io/user-guide/"],"sys_project":["kompose"],"sys_project_name":["kompose"],"description":["kompose is a tool to help users familiar with docker-compose move to Kubernetes. It takes a Docker Compose file and translates it into Kubernetes resources."],"projectName":["kompose"]},"sort":["kompose"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-liveoak","_score":null,"fields":{"githubLink":["https://github.com/liveoak-io/liveoak"],"docsLink":["http://liveoak.io/docs/"],"jiraLink":["https://issues.jboss.org/browse/LIVEOAK"],"downloadsLink":["http://liveoak.io/downloads/"],"description":["backend-as-a-service stack for simplifying mobile and web client development."],"communityLink":["http://liveoak.io/community"],"sys_url_view":["http://liveoak.io"],"license":["EPL"],"blogLink":["http://liveoak.io/blog"],"sys_project":["liveoak"],"twitterLink":["https://twitter.com/liveoak_io"],"userForumLink":["https://community.jboss.org/en/liveoak"],"sys_project_name":["LiveOak"],"chatLink":["http://webchat.freenode.net/?channels=liveoak"],"projectName":["LiveOak"]},"sort":["liveoak"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-maven-buildmagic-thirdparty-plugin","_score":null,"fields":{"docsLink":["http://www.jboss.org/files/maven-buildmagic-thirdparty-plugin/apidocs/index.html"],"jiraLink":["http://jira.jboss.org/jira/browse/JBBUILD"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBBUILD"],"downloadsLink":["http://repository.jboss.org/maven2/org/jboss/maven/plugins/maven-buildmagic-thirdparty-plugin/"],"description":["This plugin enables integration between projects using ant/buildmagic and projects using maven."],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-10550"],"committerLink":["https://svn.jboss.org/repos/maven/plugins/jboss/trunk/maven-buildmagic-thirdparty-plugin/"],"sys_url_view":["/maven-buildmagic-thirdparty-plugin"],"archived":["false"],"sys_project":["maven-buildmagic-thirdparty-plugin"],"sys_project_name":["Maven Buildmagic Thirdparty Plugin"],"anonymousLink":["http://anonsvn.jboss.org/repos/maven/plugins/jboss/trunk/maven-buildmagic-thirdparty-plugin/"],"projectName":["Maven Buildmagic Thirdparty Plugin"]},"sort":["maven buildmagic thirdparty plugin"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-maven-jboss-deploy-plugin","_score":null,"fields":{"sys_url_view":["/maven-jboss-deploy-plugin"],"archived":["false"],"docsLink":["http://www.jboss.org/files/maven-jboss-deploy-plugin/apidocs/index.html"],"jiraLink":["http://jira.jboss.org/jira/browse/JBBUILD"],"sys_project":["maven-jboss-deploy-plugin"],"issueTrackerLink":["http://www.jboss.org/maven-jboss-deploy-plugin/issue-tracking.html"],"sys_project_name":["Maven jBoss-deploy Plugin"],"anonymousLink":["http://anonsvn.jboss.org/repos/labs/labs/jbossbuild/maven-plugins/trunk/maven-jboss-deploy-plugin/"],"description":["This plugin allows maven based projects to deploy project artifacts (jars, etc) to the legacy ant/buildmagic based repository. "],"projectName":["Maven jBoss-deploy Plugin"],"committerLink":["https://svn.jboss.org/repos/labs/labs/jbossbuild/maven-plugins/trunk/maven-jboss-deploy-plugin/"]},"sort":["maven jboss-deploy plugin"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-maven-jboss-retro-plugin","_score":null,"fields":{"docsLink":["http://www.jboss.org/maven-jboss-retro-plugin/usage.html"],"jiraLink":["http://jira.jboss.org/jira/browse/JBBUILD"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBBUILD"],"downloadsLink":["http://repository.jboss.org/maven2/org/jboss/maven/plugins/maven-jboss-retro-plugin"],"description":["A tool for transforming compiled byte code from one format to another. One usage of this is to allow translation of jdk1.5 byte code to an equivalent that can be used in a jdk1.4 jvm."],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-11073"],"committerLink":["https://svn.jboss.org/repos/labs/labs/jbossbuild/maven-plugins/trunk/maven-jboss-retro-plugin/"],"sys_url_view":["/maven-jboss-retro-plugin"],"archived":["false"],"sys_project":["maven-jboss-retro-plugin"],"sys_project_name":["Maven jBoss-retro Plugin"],"anonymousLink":["http://anonsvn.jboss.org/repos/labs/labs/jbossbuild/maven-plugins/trunk/maven-jboss-retro-plugin/"],"projectName":["Maven jBoss-retro Plugin"]},"sort":["maven jboss-retro plugin"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-maven-jdocbook-plugin","_score":null,"fields":{"docsLink":["http://www.jboss.org/files/maven-jdocbook-plugin/apidocs/index.html"],"jiraLink":["https://jira.jboss.org/browse/MPJDOCBOOK"],"issueTrackerLink":["https://jira.jboss.org/browse/MPJDOCBOOK"],"downloadsLink":["http://repository.jboss.org/maven2/org/jboss/maven/plugins/maven-jdocbook-plugin/"],"description":["DocBook allows you to write and maintain a single source for documentation, and to then render that single source into multiple formats such as PDF or HTML."],"fisheyeLink":["http://fisheye.jboss.org/changelog/Maven/plugins/jdocbook/maven-jdocbook-plugin"],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-10550"],"committerLink":["https://svn.jboss.org/repos/maven/plugins/jdocbook/maven-jdocbook-plugin"],"sys_url_view":["/maven-jdocbook-plugin"],"archived":["false"],"mailingListLink":["http://www.jboss.org/maven-jdocbook-plugin/mail-lists.html"],"sys_project":["maven-jdocbook-plugin"],"sys_project_name":["Maven jDocBook Plugin"],"anonymousLink":["https://anonsvn.jboss.org/repos/maven/plugins/jdocbook/maven-jdocbook-plugin"],"projectName":["Maven jDocBook Plugin"]},"sort":["maven jdocbook plugin"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-maven-jdocbook-style-plugin","_score":null,"fields":{"sys_url_view":["/maven-jdocbook-style-plugin"],"archived":["false"],"sys_project":["maven-jdocbook-style-plugin"],"downloadsLink":["http://repository.jboss.org/maven2/org/jboss/maven/plugins/maven-jdocbook-style-plugin/"],"sys_project_name":["Maven jDocBook Style Plugin"],"anonymousLink":["http://anonsvn.jboss.org/repos/labs/labs/jbossbuild/maven-plugins/trunk/maven-jdocbook-style-plugin/"],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-10550"],"projectName":["Maven jDocBook Style Plugin"],"committerLink":["https://svn.jboss.org/repos/labs/labs/jbossbuild/maven-plugins/trunk/maven-jdocbook-style-plugin/"]},"sort":["maven jdocbook style plugin"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossmc","_score":null,"fields":{"docsLink":["/jbossmc/documentation"],"devForumLink":["http://community.jboss.org/en/jbossmc/dev?view=discussions"],"jiraLink":["http://jira.jboss.org/jira/browse/JBMICROCONT"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBMICROCONT"],"downloadsLink":["/jbossmc/downloads"],"description":["JBoss Microcontainer is a refactoring of JBoss\'s JMX Microkernel to support direct POJO deployment and standalone use outside the JBoss application server."],"fisheyeLink":["http://fisheye.jboss.org/browse/JBossAS/projects/microcontainer"],"knowledgeBaseLink":["http://community.jboss.org/docs/DOC-10505"],"committerLink":["https://svn.jboss.org/repos/jbossas/projects/microcontainer/"],"sys_url_view":["/jbossmc"],"archived":["false"],"license":["LGPL"],"sys_project":["jbossmc"],"userForumLink":["http://community.jboss.org/en/jbossmc?view=discussions"],"sys_project_name":["Microcontainer"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossas/projects/microcontainer/"],"projectName":["Microcontainer"]},"sort":["microcontainer"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-minishift","_score":null,"fields":{"sys_url_view":["https://github.com/minishift/minishift"],"license":["ASL"],"docsLink":["https://github.com/minishift/minishift#documentation"],"sys_project":["minishift"],"downloadsLink":["https://github.com/minishift/minishift/releases"],"sys_project_name":["Minishift"],"description":["Minishift is a tool that helps you run OpenShift locally by running a single-node OpenShift cluster inside a VM. You can try out OpenShift or develop with it, day-to-day, on your local host."],"projectName":["Minishift"]},"sort":["minishift"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-mod_cluster","_score":null,"fields":{"docsLink":["/docs"],"issueTrackerLink":["https://issues.jboss.org/browse/MODCLUSTER"],"downloadsLink":["/downloads"],"description":["An httpd-based load balancer"],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-11431"],"sys_url_view":["/mod_cluster/downloads"],"archived":["false"],"license":["LGPL"],"srcLink":["https://github.com/modcluster/mod_cluster"],"buildLink":["https://hudson.jboss.org/hudson/view/mod_cluster/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/mod_cluster-dev"],"sys_project":["mod_cluster"],"userForumLink":["https://community.jboss.org/en/mod_cluster"],"sys_project_name":["mod_cluster"],"projectName":["mod_cluster"]},"sort":["mod_cluster"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-modeshape","_score":null,"fields":{"githubLink":["http://github.com/ModeShape/modeshape"],"docsLink":["/modeshape/docs"],"jiraLink":["https://jira.jboss.org/browse/MODE"],"downloadsLink":["/modeshape/downloads"],"description":["ModeShape is a distributed, hierarchical, transactional, and consistent data store with support for queries, full-text search, events, versioning, references, and flexible and dynamic schemas."],"communityLink":["/modeshape/community"],"hudsonLink":["http://ci.jboss.org/jenkins/view/ModeShape/"],"sys_url_view":["/modeshape"],"archived":["false"],"license":["LGPL"],"blogLink":["http://modeshape.wordpress.com/"],"srcLink":["/modeshape/sourcecode"],"buildLink":["/modeshape/build"],"mailingListLink":[""],"sys_project":["modeshape"],"twitterLink":["http://twitter.com/modeshape"],"userForumLink":["http://community.jboss.org/community/modeshape"],"sys_project_name":["ModeShape"],"chatLink":["/modeshape/chat"],"projectName":["ModeShape"]},"sort":["modeshape"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-narayana","_score":null,"fields":{"githubLink":["https://github.com/jbosstm/"],"docsLink":["http://narayana.io/documentation/"],"devForumLink":["http://community.jboss.org/en/jbosstm/dev?view=discussions"],"jiraLink":["https://issues.jboss.org/browse/JBTM"],"downloadsLink":["http://narayana.io/downloads/"],"description":["The premier open source transaction manager"],"fisheyeLink":["http://fisheye.jboss.org/browse/narayana"],"communityLink":["https://community.jboss.org/en/jbosstm/"],"sys_url_view":["http://narayana.io"],"license":["LGPL"],"blogLink":["http://blog.narayana.io/"],"srcLink":["http://source.narayana.io/"],"mailingListLink":["http://www.jboss.org/narayana/lists"],"sys_project":["narayana"],"userForumLink":["http://community.jboss.org/en/jbosstm/?view=discussions"],"sys_project_name":["Narayana"],"chatLink":["http://www.jboss.org/narayana/team"],"projectName":["Narayana"]},"sort":["narayana"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-netty","_score":null,"fields":{"githubLink":["https://github.com/netty"],"docsLink":["http://netty.io/wiki/index.html"],"issueTrackerLink":["https://github.com/netty/netty/issues?state=open"],"downloadsLink":["http://netty.io/downloads.html"],"description":["Asynchronous event-driven network application framework"],"communityLink":["http://netty.io/community.html"],"sys_url_view":["http://netty.io"],"license":["ASL"],"srcLink":["https://github.com/netty"],"buildLink":["https://garage.netty.io/teamcity"],"mailingListLink":["https://groups.google.com/forum/#!forum/netty"],"sys_project":["netty"],"twitterLink":["https://twitter.com/netty_project"],"sys_project_name":["Netty"],"chatLink":["https://webchat.freenode.net/?channels=netty"],"projectName":["Netty"]},"sort":["netty"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-nodyn","_score":null,"fields":{"githubLink":["https://github.com/nodyn/nodyn"],"docsLink":["https://github.com/nodyn/nodyn/blob/master/README.md"],"devForumLink":["https://groups.google.com/forum/#!forum/nodyn"],"issueTrackerLink":["https://github.com/nodyn/nodyn/issues"],"downloadsLink":["https://oss.sonatype.org/content/repositories/snapshots/io/nodyn/nodyn/0.1.1-SNAPSHOT/"],"description":["A Node.js runtime built on Vert.x and DynJS"],"communityLink":["https://groups.google.com/forum/#!forum/nodyn"],"hudsonLink":["https://travis-ci.org/nodyn/nodyn"],"anonymousGitLink":["https://github.com/nodyn/nodyn.git"],"sys_url_view":["http://nodyn.io"],"license":["ASL"],"blogLink":["http://nodyn.io/posts/"],"srcLink":["https://github.com/nodyn/nodyn"],"buildLink":["https://oss.sonatype.org/content/repositories/snapshots/io/nodyn/nodyn/0.1.1-SNAPSHOT/"],"mailingListLink":["https://groups.google.com/forum/#!forum/nodyn"],"sys_project":["nodyn"],"userForumLink":["https://groups.google.com/forum/#!forum/nodyn"],"sys_project_name":["Nodyn"],"chatLink":["http://webchat.freenode.net/?channels=nodyn"],"projectName":["Nodyn"],"committerGitLink":["git@github.com:nodyn/nodyn.git"]},"sort":["nodyn"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-optaplanner","_score":null,"fields":{"githubLink":["https://github.com/kiegroup/optaplanner"],"docsLink":["https://www.optaplanner.org/learn/documentation.html"],"jiraLink":["https://issues.jboss.org/browse/PLANNER"],"downloadsLink":["https://www.optaplanner.org/download/download.html"],"description":["OptaPlanner optimizes business resource usage. It is a lightweight, embeddable, open source planning engine, written in 100% Java."],"hudsonLink":["https://hudson.jboss.org/hudson/job/optaplanner"],"sys_url_view":["https://www.optaplanner.org"],"license":["ASL"],"blogLink":["https://www.optaplanner.org/blog/"],"sys_project":["optaplanner"],"twitterLink":["https://twitter.com/OptaPlanner"],"userForumLink":["https://www.optaplanner.org/community/forum.html"],"sys_project_name":["OptaPlanner"],"chatLink":["https://www.optaplanner.org/community/chat.html"],"projectName":["OptaPlanner"]},"sort":["optaplanner"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-jbossas_osgi","_score":null,"fields":{"githubLink":["https://github.com/jbosgi/jbosgi"],"docsLink":["http://docs.jboss.org/osgi"],"devForumLink":["http://community.jboss.org/en/jbossosgi/dev?view=discussions"],"jiraLink":["https://issues.jboss.org/browse/JBOSGI"],"downloadsLink":["/jbossas/downloads"],"description":["The JBoss OSGi project provides the OSGi functionality in the JBoss"],"knowledgeBaseLink":["http://community.jboss.org/wiki/JBossOSGi"],"hudsonLink":["http://hudson.jboss.org/jenkins/view/JBoss%20AS/"],"sys_url_view":["/jbossas/osgi"],"archived":["false"],"license":["LGPL"],"sys_project":["jbossas_osgi"],"userForumLink":["http://community.jboss.org/community/jbossosgi?view=discussions"],"sys_project_name":["OSGi"],"projectName":["JBoss OSGi"]},"sort":["osgi"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-overlord_dtgov","_score":null,"fields":{"githubLink":["https://github.com/Governance/dtgov"],"docsLink":["http://www.projectoverlord.io/dtgov"],"devForumLink":["https://developer.jboss.org/en/overlord/dev"],"jiraLink":["https://issues.jboss.org/browse/DTGOV"],"downloadsLink":["http://www.projectoverlord.io/dtgov"],"description":["Design time governance."],"communityLink":["http://www.projectoverlord.io/dtgov"],"sys_url_view":["http://www.projectoverlord.io/dtgov"],"license":["ASL"],"blogLink":["http://jboss-overlord.blogspot.co.uk/"],"srcLink":["https://github.com/Governance/dtgov"],"sys_project":["overlord_dtgov"],"twitterLink":["https://twitter.com/OverlordDTGov"],"userForumLink":["https://developer.jboss.org/en/overlord"],"sys_project_name":["Overlord DTGov"],"chatLink":["https://webchat.freenode.net/?channels=jbossoverlord"],"projectName":["Overlord DTGov"]},"sort":["overlord dtgov"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-overlord_rtgov","_score":null,"fields":{"githubLink":["https://github.com/Governance/rtgov"],"docsLink":["http://www.projectoverlord.io/rtgov"],"devForumLink":["https://developer.jboss.org/en/overlord/dev"],"jiraLink":["https://issues.jboss.org/browse/RTGOV"],"downloadsLink":["http://www.projectoverlord.io/rtgov"],"description":["Infrastructure for supporting runtime governance and business transaction monitoring."],"communityLink":["http://www.projectoverlord.io/rtgov"],"sys_url_view":["http://www.projectoverlord.io/rtgov"],"license":["ASL"],"blogLink":["http://jboss-overlord.blogspot.co.uk/"],"srcLink":["https://github.com/Governance/rtgov"],"sys_project":["overlord_rtgov"],"twitterLink":["https://twitter.com/OverlordRTGov"],"userForumLink":["https://developer.jboss.org/en/overlord"],"sys_project_name":["Overlord RTGov"],"chatLink":["https://webchat.freenode.net/?channels=jbossoverlord"],"projectName":["Overlord RTGov"]},"sort":["overlord rtgov"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-picketbox","_score":null,"fields":{"githubLink":["https://github.com/picketbox/picketbox"],"docsLink":["http://community.jboss.org/docs/DOC-14744"],"devForumLink":["http://community.jboss.org/community/picketbox/dev?view=discussions"],"jiraLink":["https://jira.jboss.org/jira/browse/SECURITY"],"downloadsLink":["/picketbox/downloads"],"description":["A Java Security Framework that provides Java developers an authentication, authorization, audit and  security mapping support."],"fisheyeLink":["http://fisheye.jboss.org/browse/picketbox"],"knowledgeBaseLink":["http://community.jboss.org/en/picketbox?view=documents"],"committerLink":["https://svn.jboss.org/repos/picketbox"],"communityLink":["/picketbox/community"],"sys_url_view":["/picketbox"],"archived":["false"],"license":["LGPL"],"srcLink":["http://anonsvn.jboss.org/repos/picketbox"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/picketbox"],"sys_project":["picketbox"],"userForumLink":["http://community.jboss.org/en/picketbox?view=discussions"],"sys_project_name":["PicketBox"],"anonymousLink":["http://anonsvn.jboss.org/repos/picketbox"],"projectName":["PicketBox"]},"sort":["picketbox"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-picketlink","_score":null,"fields":{"docsLink":["/picketlink/docs"],"devForumLink":["https://community.jboss.org/en/picketlink/dev"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/PLINK"],"downloadsLink":["/picketlink/downloads"],"description":["An umbrella project that aims to address different Identity Management needs"],"fisheyeLink":["http://fisheye.jboss.org/browse/picketlink"],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-13254"],"committerLink":["https://svn.jboss.org/repos/picketlink/"],"communityLink":["/picketlink/community"],"sys_url_view":["/picketlink"],"archived":["false"],"license":["LGPL"],"blogLink":["http://anil-identity.blogspot.com/"],"srcLink":["/picketlink/sourcecode"],"buildLink":["/picketlink/build"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/picketlink"],"sys_project":["picketlink"],"userForumLink":["https://community.jboss.org/en/picketlink"],"sys_project_name":["PicketLink"],"anonymousLink":["http://anonsvn.jboss.org/repos/picketlink/"],"projectName":["PicketLink"]},"sort":["picketlink"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-portletbridge","_score":null,"fields":{"githubLink":["https://github.com/portletbridge/portletbridge"],"docsLink":["/portletbridge/docs"],"devForumLink":["https://community.jboss.org/en/portletbridge/dev?view=discussions"],"jiraLink":["https://jira.jboss.org/jira/browse/PBR"],"downloadsLink":["/portletbridge/downloads"],"description":["An implementation of the JSR-301 and JSR-329 specifications to support JSF within a portlet with additional enhancements to support other web frameworks."],"fisheyeLink":["http://fisheye.jboss.org/browse/PortletBridge"],"communityLink":["https://community.jboss.org/en/portletbridge"],"sys_url_view":["/portletbridge"],"archived":["false"],"license":["LGPL"],"blogLink":["https://community.jboss.org/en/portletbridge/blog"],"srcLink":["https://github.com/portletbridge/portletbridge"],"sys_project":["portletbridge"],"twitterLink":["http://twitter.com/portletbridge"],"userForumLink":["https://community.jboss.org/en/portletbridge?view=discussions"],"sys_project_name":["Portlet Bridge"],"anonymousLink":["http://anonsvn.jboss.org/repos/portletbridge"],"projectName":["Portlet Bridge"]},"sort":["portlet bridge"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-pressgang","_score":null,"fields":{"githubLink":["https://github.com/pressgang"],"docsLink":[""],"devForumLink":["https://community.jboss.org/en/pressgang"],"jiraLink":["https://issues.jboss.org/browse/pressgang"],"issueTrackerLink":["https://issues.jboss.org/browse/pressgang#selectedTab=com.atlassian.jira.plugin.system.project%3Aissues-panel"],"downloadsLink":["/pressgang/download"],"description":["PressGang is a centralized hub JBoss projects can use to get assistance with documentation."],"communityLink":["https://community.jboss.org/en/pressgang"],"hudsonLink":["https://repository.jboss.org/nexus/index.html#nexus-search;gav~org.jboss.pressgang~~~~"],"sys_url_view":["/pressgang"],"archived":["false"],"sys_project":["pressgang"],"twitterLink":["http://twitter.com/#!/pressgang"],"userForumLink":["https://community.jboss.org/en/pressgang"],"sys_project_name":["PressGang"],"projectName":["PressGang"]},"sort":["pressgang"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-resteasy","_score":null,"fields":{"githubLink":["https://github.com/resteasy/Resteasy"],"docsLink":["/resteasy/docs"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/RESTEASY"],"downloadsLink":["/resteasy/downloads"],"description":["Various frameworks to help you build RESTful Web Services and RESTful Java applications."],"knowledgeBaseLink":["https://www.jboss.org/community/docs/DOC-12837"],"sys_url_view":["/resteasy"],"archived":["false"],"license":["ASL"],"blogLink":["https://developer.jboss.org/en/resteasy/blog"],"srcLink":["https://github.com/resteasy/Resteasy"],"buildLink":["/resteasy/build"],"mailingListLink":["/resteasy/mailinglists"],"sys_project":["resteasy"],"twitterLink":["http://twitter.com/resteasy"],"sys_project_name":["RESTEasy"],"projectName":["RESTEasy"]},"sort":["resteasy"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-rhq","_score":null,"fields":{"docsLink":["https://docs.jboss.org/author/display/RHQ/User+Documentation"],"downloadsLink":["https://docs.jboss.org/author/display/RHQ/Download+RHQ"],"description":["An enterprise management solution for JBoss middleware projects, Tomcat, Apache Web Server, and numerous other server-side applications."],"knowledgeBaseLink":["https://docs.jboss.org/author/display/RHQ/Home"],"communityLink":["https://docs.jboss.org/author/display/RHQ/Community"],"anonymousGitLink":["https://github.com/rhq-project/rhq"],"sys_url_view":["/rhq"],"archived":["false"],"license":["LGPL2"],"blogLink":["/rhq/Blog"],"srcLink":["https://github.com/rhq-project/rhq"],"buildLink":["http://maven.apache.org/"],"mailingListLink":["https://docs.jboss.org/author/display/RHQ/Community"],"sys_project":["rhq"],"twitterLink":["https://twitter.com/#!/RHQ_Project"],"userForumLink":["https://community.jboss.org/en/rhq"],"sys_project_name":["RHQ"],"chatLink":["irc://irc.freenode.net/#rhq"],"projectName":["RHQ"],"committerGitLink":["https://github.com/rhq-project/rhq"]},"sort":["rhq"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-richfaces","_score":null,"fields":{"githubLink":["https://github.com/richfaces/"],"docsLink":["/richfaces/docs"],"devForumLink":["https://community.jboss.org/en/richfaces/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/RF"],"issueTrackerLink":["/richfaces/issuetracker"],"downloadsLink":["/richfaces/download"],"description":["An advanced UI component framework for easily integrating Ajax capabilities into business applications using JSF.  "],"fisheyeLink":["http://source.jboss.org/project/REV-RF"],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/richfaceswikihomepage"],"communityLink":["/richfaces/community"],"hudsonLink":["https://ci.jboss.org/hudson/view/RichFaces/"],"sys_url_view":["/richfaces"],"archived":["false"],"license":["LGPL"],"blogLink":["http://blog.bleathem.ca/search/label/RichFaces"],"srcLink":["/richfaces/sourcecode"],"sys_project":["richfaces"],"twitterLink":["http://twitter.com/richfaces"],"userForumLink":["https://community.jboss.org/en/richfaces"],"sys_project_name":["RichFaces"],"chatLink":["irc://irc.freenode.net/richfaces"],"projectName":["RichFaces"]},"sort":["richfaces"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-riftsaw","_score":null,"fields":{"docsLink":["/riftsaw/documentation"],"devForumLink":["https://community.jboss.org/en/riftsaw/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/RIFTSAW"],"downloadsLink":["/riftsaw/downloads"],"description":["WS-BPEL 2.0 engine that is optimized for the JBoss Application Server container."],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/RiftSaw"],"committerLink":["https://svn.jboss.org/repos/riftsaw"],"communityLink":["/riftsaw/community"],"hudsonLink":["http://hudson.jboss.org/hudson/job/RiftSaw/"],"sys_url_view":["/riftsaw"],"archived":["false"],"license":["LGPL"],"blogLink":["http://riftsaw.blogspot.com/"],"buildLink":["http://www.jboss.org/community/wiki/BuildRiftSawfromSource"],"sys_project":["riftsaw"],"userForumLink":["https://community.jboss.org/en/riftsaw"],"sys_project_name":["RiftSaw Open Source BPEL"],"anonymousLink":["http://anonsvn.jboss.org/repos/riftsaw"],"projectName":["RiftSaw Open Source BPEL"]},"sort":["riftsaw open source bpel"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-savara","_score":null,"fields":{"githubLink":["https://github.com/savara"],"docsLink":["/savara/documentation"],"devForumLink":["https://community.jboss.org/en/savara/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/SAVARA"],"downloadsLink":["/savara/downloads"],"description":["A tool support around the concept of Testable Architecture."],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/SAVARA"],"communityLink":["/savara/community"],"hudsonLink":["http://hudson.jboss.org/hudson/view/SAVARA/"],"sys_url_view":["/savara"],"archived":["false"],"license":["LGPL"],"blogLink":["http://jboss-savara.blogspot.com"],"buildLink":["http://www.jboss.org/community/wiki/BuildSAVARAfromSource"],"sys_project":["savara"],"userForumLink":["https://community.jboss.org/en/savara"],"sys_project_name":["Savara"],"projectName":["Savara"]},"sort":["savara"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-scribble","_score":null,"fields":{"sys_url_view":["/scribble"],"archived":["false"],"license":["ASL"],"githubLink":["https://github.com/scribble"],"devForumLink":["http://community.jboss.org/en/scribble/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/SCRIBBLE"],"sys_project":["scribble"],"userForumLink":["http://community.jboss.org/en/scribble"],"sys_project_name":["Scribble"],"description":["Scribble is a language to describe application-level protocols among communicating systems."],"projectName":["Scribble"],"communityLink":["/scribble/community"]},"sort":["scribble"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-seam_projectnav","_score":null,"fields":{"githubLink":["https://github.com/seam2/jboss-seam"],"docsLink":["http://www.seamframework.org/Seam2/Documentation.html"],"jiraLink":["http://jira.jboss.org/jira/browse/JBSEAM"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBSEAM"],"downloadsLink":["http://www.seamframework.org/Seam2/Downloads.html"],"description":["A platform for building rich Internet applications in Java. Seam integrates technologies such as Asynchronous JavaScript and XML (AJAX), JavaServer Faces (JSF), Java Persistence (JPA), Enterprise Java Beans (EJB 3.0) and Business Process Management (BPM) into a unified full-stack solution, complete with sophisticated tooling. "],"fisheyeLink":["http://fisheye.jboss.org/browse/Seam"],"communityLink":["http://www.seamframework.org/Documentation/KnowledgeBase.html"],"sys_url_view":["http://seamframework.org"],"archived":["false"],"license":["LGPL"],"sys_project":["seam"],"userForumLink":["https://developer.jboss.org/en/seam"],"sys_project_name":["Seam"],"projectName":["Seam"]},"sort":["seam"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-serialization","_score":null,"fields":{"devForumLink":["https://community.jboss.org/en/serialization/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/JBSER"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/JBSER"],"downloadsLink":["/serialization/downloads"],"description":["A new approach to java-serialization"],"sys_url_view":["/serialization"],"archived":["false"],"license":["LGPL"],"blogLink":["http://www.jboss.org/feeds/view/serialization"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/jbossserialization"],"sys_project":["serialization"],"userForumLink":["https://community.jboss.org/en/serialization"],"sys_project_name":["Serialization"],"anonymousLink":["http://anonsvn.jboss.org/repos/jbossserialization"],"projectName":["JBoss Serialization"]},"sort":["serialization"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-shrinkwrap","_score":null,"fields":{"githubLink":["http://github.com/shrinkwrap/shrinkwrap"],"docsLink":["http://docs.jboss.org/shrinkwrap"],"devForumLink":["http://community.jboss.org/en/shrinkwrap/dev?view=discussions"],"jiraLink":["http://jira.jboss.org/jira/browse/SHRINKWRAP"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/SHRINKWRAP"],"downloadsLink":["/shrinkwrap/downloads"],"description":["Painless Packaging for Java. Shrinkwrap provides a simple mechanism to assemble archives like JARs, WARs, and EARs with a friendly, fluent API."],"knowledgeBaseLink":["http://www.jboss.org/community/docs/DOC-14138"],"communityLink":["http://www.jboss.org/community/docs/DOC-14138"],"sys_url_view":["/shrinkwrap"],"archived":["false"],"license":["ASL"],"srcLink":["http://github.com/shrinkwrap/shrinkwrap"],"buildLink":["http://hudson.jboss.org/hudson/job/ShrinkWrap/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/shrinkwrap-issues"],"sys_project":["shrinkwrap"],"userForumLink":["http://community.jboss.org/en/shrinkwrap?view=discussions"],"sys_project_name":["Shrinkwrap"],"chatLink":["irc://irc.freenode.net:6667/#jbosstesting"],"projectName":["Shrinkwrap"]},"sort":["shrinkwrap"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-snowdrop","_score":null,"fields":{"githubLink":["https://github.com/snowdrop/snowdrop"],"docsLink":["/snowdrop/documentation"],"devForumLink":["https://community.jboss.org/en/snowdrop/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/SNOWDROP"],"issueTrackerLink":["https://jira.jboss.org/jira/browse/SNOWDROP"],"downloadsLink":["/snowdrop/downloads"],"description":["An utility package that contains JBoss-specific extensions to the Spring Framework."],"communityLink":["/snowdrop/community"],"sys_url_view":["/snowdrop"],"archived":["false"],"license":["LGPL"],"blogLink":["http://community.jboss.org/en/snowdrop/blog"],"sys_project":["snowdrop"],"userForumLink":["https://community.jboss.org/en/snowdrop"],"sys_project_name":["Snowdrop"],"chatLink":["irc://irc.freenode.net/jboss-snowdrop"],"projectName":["Snowdrop"]},"sort":["snowdrop"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-stormgrind","_score":null,"fields":{"githubLink":["/stormgrind/sourcecode"],"docsLink":["http://www.jboss.org/community/wiki/StormGrindDocumentation"],"issueTrackerLink":["/stormgrind/issues"],"downloadsLink":["/stormgrind/downloads"],"description":["StormGrind is the umbrella project aggregating all of the Cloud machinations at JBoss."],"communityLink":["/stormgrind/community"],"sys_url_view":["/stormgrind"],"archived":["false"],"license":["LGPL"],"blogLink":["http://cloudpress.org/"],"srcLink":["/stormgrind/sourcecode"],"buildLink":["/stormgrind/build"],"sys_project":["stormgrind"],"twitterLink":["http://twitter.com/stormgrind"],"userForumLink":["http://community.jboss.org/en/stormgrind?view=discussions"],"sys_project_name":["StormGrind"],"chatLink":["irc://irc.freenode.net/stormgrind"],"projectName":["StormGrind"]},"sort":["stormgrind"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-switchyard","_score":null,"fields":{"githubLink":["http://github.com/jboss-switchyard"],"docsLink":["https://docs.jboss.org/author/display/SWITCHYARDDOC/Home"],"devForumLink":["http://community.jboss.org/en/switchyard/dev?view=discussions"],"jiraLink":["https://jira.jboss.org/browse/SWITCHYARD"],"issueTrackerLink":["https://jira.jboss.org/browse/SWITCHYARD"],"downloadsLink":["/switchyard/downloads"],"description":["SwitchYard is a lightweight service delivery framework providing full lifecycle support for developing, deploying, and managing service-oriented applications."],"knowledgeBaseLink":["http://community.jboss.org/en/switchyard/dev?view=documents"],"communityLink":["http://community.jboss.org/en/switchyard"],"hudsonLink":["https://hudson.jboss.org/hudson/job/SwitchYard-Release/"],"sys_url_view":["/switchyard"],"archived":["false"],"license":["LGPL"],"blogLink":["http://community.jboss.org/en/switchyard/blog"],"srcLink":["/switchyard/sourcecode"],"buildLink":["https://hudson.jboss.org/hudson/job/SwitchYard-Release/"],"sys_project":["switchyard"],"userForumLink":["http://community.jboss.org/en/switchyard?view=discussions"],"sys_project_name":["SwitchYard"],"chatLink":["irc://irc.freenode.org/#switchyard"],"projectName":["SwitchYard"]},"sort":["switchyard"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-tattletale","_score":null,"fields":{"githubLink":["https://github.com/jesperpedersen/tattletale"],"docsLink":["/tattletale/docs"],"devForumLink":["http://community.jboss.org/en/tattletale/dev"],"jiraLink":["https://issues.jboss.org/browse/TTALE"],"issueTrackerLink":["/tattletale/issues"],"downloadsLink":["/tattletale/downloads"],"description":["Tattletale is a tool that can help you get an overview of the project you are working on or a product that you depend on."],"fisheyeLink":["http://fisheye.jboss.com/browse/Tattletale"],"communityLink":["/tattletale/community"],"sys_url_view":["/tattletale"],"archived":["false"],"license":["LGPL"],"srcLink":["/tattletale/sourcecode"],"buildLink":["/tattletale/build"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/tattletale/"],"sys_project":["tattletale"],"userForumLink":["http://community.jboss.org/en/tattletale"],"sys_project_name":["Tattletale"],"projectName":["Tattletale"]},"sort":["tattletale"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-teiid","_score":null,"fields":{"githubLink":["https://github.com/teiid/teiid"],"docsLink":["/teiid/docs"],"devForumLink":["https://community.jboss.org/en/teiid/dev"],"jiraLink":["https://jira.jboss.org/jira/browse/TEIID"],"issueTrackerLink":["https://jira.jboss.org/jira/browse/TEIID"],"downloadsLink":["/teiid/downloads"],"description":["Teiid is a data virtualization system that allows applications to use data from multiple, heterogenous data stores."],"fisheyeLink":["http://fisheye.jboss.org/browse/Teiid"],"knowledgeBaseLink":["https://www.jboss.org/community/docs/DOC-12956"],"hudsonLink":["http://hudson.jboss.org/hudson/job/Teiid%20-%20Continuous%20Build/"],"sys_url_view":["/teiid"],"archived":["false"],"license":["LGPL"],"blogLink":["http://teiid.blogspot.com/"],"buildLink":["http://hudson.jboss.org/hudson/job/Teiid%20-%20Continuous%20Build/"],"mailingListLink":["/teiid/mailinglists"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/teiid/"],"sys_project":["teiid"],"twitterLink":["https://twitter.com/#!/teiid"],"userForumLink":["https://community.jboss.org/en/teiid"],"sys_project_name":["Teiid"],"chatLink":["/teiid/chat"],"projectName":["Teiid"]},"sort":["teiid"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-teiiddesigner","_score":null,"fields":{"githubLink":["https://github.com/Teiid-Designer/teiid-designer"],"docsLink":["/teiiddesigner/designer_summary/docs"],"devForumLink":["https://community.jboss.org/en/teiiddesigner/dev"],"issueTrackerLink":["/teiiddesigner/issues"],"downloadsLink":["/teiiddesigner/designer_summary/downloads"],"description":["A visual tool that enables rapid, model-driven definition, integration, management and testing of data services without programming using the Teiid runtime framework."],"fisheyeLink":["http://fisheye.jboss.org/browse/TDesigner"],"knowledgeBaseLink":["https://community.jboss.org/wiki/TheTeiidDesignerProject"],"communityLink":["https://www.jboss.org/community/docs/DOC-13269"],"sys_url_view":["/teiiddesigner"],"archived":["false"],"license":["EPL"],"blogLink":["http://teiid.blogspot.com/"],"srcLink":["/teiiddesigner/designer_summary/sourcecode"],"mailingListLink":["/teiiddesigner/mailinglists"],"viewvcLink":["http://viewvc.jboss.org/cgi-bin/viewvc.cgi/tdesigner/"],"sys_project":["teiiddesigner"],"twitterLink":["https://twitter.com/#!/teiiddesigner"],"userForumLink":["https://community.jboss.org/en/teiiddesigner/"],"sys_project_name":["Teiid Designer"],"chatLink":[""],"projectName":["Teiid Tooling"]},"sort":["teiid tooling"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-httpd","_score":null,"fields":{"githubLink":["https://github.com/apache/httpd"],"docsLink":["http://httpd.apache.org/docs/"],"devForumLink":["mail list: dev@httpd.apache.org"],"issueTrackerLink":["https://issues.apache.org/bugzilla/"],"description":["The Number One HTTP Server On The Internet"],"knowledgeBaseLink":["http://httpd.apache.org/docs-project/"],"sys_url_view":["http://httpd.apache.org/"],"license":["ASL"],"blogLink":["https://blogs.apache.org/httpd/"],"sys_project":["httpd"],"userForumLink":["mail list: users@httpd.apache.org"],"sys_project_name":["Apache HTTP Server Project"],"projectName":["The Apache HTTP Server Project"]},"sort":["the apache http server project"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-tohu","_score":null,"fields":{"docsLink":["http://www.jboss.org/community/wiki/Tohu"],"jiraLink":["https://jira.jboss.org/jira/browse/TOHU"],"issueTrackerLink":["https://jira.jboss.org/jira/browse/TOHU"],"description":["A support for question and answer style interactions where the set of questions are dynamic and potentially dependent on the answers received "],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/Tohu"],"sys_url_view":["/tohu"],"archived":["false"],"license":["LGPL"],"srcLink":["http://svn.jboss.org/repos/tohu/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/tohu-users"],"sys_project":["tohu"],"sys_project_name":["Tohu"],"anonymousLink":["http://anonsvn.jboss.org/repos/tohu/"],"projectName":["Tohu"]},"sort":["tohu"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-torquebox","_score":null,"fields":{"githubLink":["https://github.com/torquebox/torquebox"],"docsLink":["http://torquebox.org/documentation/"],"jiraLink":["https://issues.jboss.org/browse/TORQUE"],"downloadsLink":["http://torquebox.org/download/"],"description":["An application server for Ruby, built on JBoss AS"],"communityLink":["http://torquebox.org/community/"],"hudsonLink":["https://projectodd.ci.cloudbees.com/view/TorqueBox/"],"sys_url_view":["http://torquebox.org"],"license":["LGPL3"],"blogLink":["http://torquebox.org/news/"],"mailingListLink":["http://torquebox.org/community/mailing_lists/"],"sys_project":["torquebox"],"twitterLink":["https://twitter.com/torquebox"],"sys_project_name":["TorqueBox"],"chatLink":["http://webchat.freenode.net/?channels=torquebox"],"projectName":["TorqueBox"]},"sort":["torquebox"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-undertow","_score":null,"fields":{"sys_url_view":["http://undertow.io"],"license":["ASL"],"githubLink":["https://github.com/undertow-io/undertow"],"docsLink":["http://undertow.io/documentation.html"],"jiraLink":["https://issues.jboss.org/browse/UNDERTOW"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/undertow-dev"],"sys_project":["undertow"],"downloadsLink":["http://undertow.io/downloads.html"],"sys_project_name":["Undertow"],"description":["A fast embeddable web server"],"projectName":["Undertow"],"communityLink":["http://undertow.io"]},"sort":["undertow"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-vertx","_score":null,"fields":{"sys_url_view":["http://vertx.io"],"license":["EPL v1.0 / ASL v2.0"],"githubLink":["https://github.com/eclipse/vert.x"],"docsLink":["http://vertx.io/docs"],"sys_project":["vertx"],"issueTrackerLink":["https://bugs.eclipse.org/bugs/enter_bug.cgi?product=Vertx"],"userForumLink":["https://groups.google.com/forum/#!forum/vertx"],"sys_project_name":["Vert.X"],"description":["Vert.x is a lightweight, high performance application platform for the JVM that\'s designed for modern mobile, web, and enterprise applications."],"projectName":["Vert.X"]},"sort":["vert.x"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-weld","_score":null,"fields":{"githubLink":["https://github.com/weld"],"docsLink":["http://weld.cdi-spec.org/documentation/"],"jiraLink":["https://issues.jboss.org/browse/WELD"],"downloadsLink":["http://weld.cdi-spec.org/download/"],"description":["The reference implementation of CDI: Contexts and Dependency Injection for the Java EE Platform"],"communityLink":["http://weld.cdi-spec.org/community/"],"sys_url_view":["http://weld.cdi-spec.org/"],"license":["ASL"],"blogLink":["http://weld.cdi-spec.org/news/"],"srcLink":["https://github.com/weld"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/weld-dev"],"sys_project":["weld"],"userForumLink":["https://community.jboss.org/en/weld?view=discussions"],"sys_project_name":["Weld"],"chatLink":["http://webchat.freenode.net/?channels=weld-dev"],"projectName":["Weld"]},"sort":["weld"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-wildfly","_score":null,"fields":{"githubLink":["https://github.com/wildfly/wildfly"],"docsLink":["https://docs.jboss.org/author/display/WFLY/Documentation"],"jiraLink":["https://issues.jboss.org/browse/WFLY"],"downloadsLink":["http://www.wildfly.org/downloads/"],"description":["The worldÃ¢Â€Â™s fastest Java EE 7 application server with kickass management!"],"communityLink":["http://wildfly.org/gethelp/"],"sys_url_view":["http://www.wildfly.org"],"license":["LGPL"],"buildLink":["https://ci.wildfly.org/"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/wildfly-dev"],"sys_project":["wildfly"],"userForumLink":["https://developer.jboss.org/en/wildfly"],"sys_project_name":["WildFly"],"chatLink":["http://webchat.freenode.net/?channels=wildfly"],"projectName":["WildFly Application Server"]},"sort":["wildfly application server"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-wildflyswarm","_score":null,"fields":{"githubLink":["https://github.com/wildfly-swarm/wildfly-swarm"],"docsLink":["http://wildfly-swarm.io/documentation"],"jiraLink":["https://issues.jboss.org/browse/SWARM"],"issueTrackerLink":["https://issues.jboss.org/browse/SWARM"],"description":["Java EE Microservices with WildFly"],"hudsonLink":["https://projectodd.ci.cloudbees.com/job/wildfly-swarm/"],"anonymousGitLink":["https://github.com/wildfly-swarm/wildfly-swarm.git"],"sys_url_view":["http://wildfly-swarm.io"],"license":["ASL2"],"blogLink":["http://wildfly-swarm.io/posts/"],"srcLink":["https://github.com/wildfly-swarm/wildfly-swarm"],"buildLink":["https://projectodd.ci.cloudbees.com/job/wildfly-swarm/"],"sys_project":["wildflyswarm"],"twitterLink":["https://twitter.com/wildflyswarm"],"userForumLink":["https://groups.google.com/forum/#!forum/wildfly-swarm"],"sys_project_name":["WildFly Swarm"],"chatLink":["http://webchat.freenode.net/?channels=wildfly-swarm"],"projectName":["WildFly Swarm"],"committerGitLink":["git@github.com:wildfly-swarm/wildfly-swarm.git"]},"sort":["wildfly swarm"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-windup","_score":null,"fields":{"githubLink":["http://github.com/windup/windup"],"docsLink":["http://windup.jboss.org/guides.html"],"devForumLink":["https://developer.jboss.org/en/windup/dev"],"jiraLink":["https://issues.jboss.org/browse/WINDUP"],"downloadsLink":["http://windup.jboss.org/download.html"],"description":["Windup is a tool to simplify Java application migrations. The tool analyzes application artifacts (such as Java code, JSPs and XML) and produces an HTML report highlighting areas that require changes."],"communityLink":["http://windup.jboss.org/code.html"],"sys_url_view":["http://windup.jboss.org"],"license":["EPL"],"mailingListLink":["https://lists.jboss.org/mailman/listinfo/windup-dev"],"sys_project":["windup"],"twitterLink":["http://twitter.com/jbosswindup"],"userForumLink":["https://community.jboss.org/en/windup"],"sys_project_name":["Windup"],"chatLink":["http://webchat.freenode.net/?channels=#windup"],"projectName":["Windup"]},"sort":["windup"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-wise","_score":null,"fields":{"githubLink":["https://github.com/jboss-wise"],"docsLink":["/wise/documentation"],"devForumLink":["https://community.jboss.org/en/wise/dev"],"jiraLink":["http://jira.jboss.org/jira/browse/WISE"],"issueTrackerLink":["http://jira.jboss.org/jira/browse/WISE"],"downloadsLink":["/wise/downloads"],"description":["A base for zero-code webservice invocation application. "],"knowledgeBaseLink":["https://www.jboss.org/community/docs/DOC-12753"],"communityLink":["http://community.jboss.org/community/wise"],"sys_url_view":["/wise"],"archived":["false"],"license":["LGPL"],"blogLink":["http://jbosswise.blogspot.com/"],"srcLink":["/sources"],"sys_project":["wise"],"userForumLink":["https://community.jboss.org/en/wise"],"sys_project_name":["Wise"],"projectName":["Wise"]},"sort":["wise"]},{"_index":"data_project_info","_type":"jbossorg_project_info","_id":"jbossorg_project_info-xnio","_score":null,"fields":{"githubLink":["http://github.com/dmlloyd/xnio"],"docsLink":["/xnio/docs"],"jiraLink":["https://jira.jboss.org/jira/browse/XNIO"],"issueTrackerLink":["https://jira.jboss.org/jira/browse/XNIO"],"downloadsLink":["/xnio/downloads"],"description":["XNIO is a simplified low-level I/O layer which can be used anywhere you are using NIO today."],"knowledgeBaseLink":["http://www.jboss.org/community/wiki/Xnio"],"communityLink":["/xnio/community"],"sys_url_view":["/xnio"],"archived":["false"],"license":["LGPL"],"srcLink":["http://github.com/dmlloyd/xnio"],"buildLink":["/xnio/build"],"sys_project":["xnio"],"sys_project_name":["XNIO"],"chatLink":["irc://irc.freenode.net/xnio"],"projectName":["XNIO"]},"sort":["xnio"]}]}}';
        //Put search logic here
        //This will need a fetch request with the applied project filter and term as params for dcp
    };
    return RHDPProjectQuery;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-project-query', RHDPProjectQuery);
});
var RHDPProjectSearchBox = /** @class */ (function (_super) {
    __extends(RHDPProjectSearchBox, _super);
    function RHDPProjectSearchBox() {
        var _this = _super.call(this) || this;
        _this.template = "\n    <input name=\"filter-text\" placeholder=\"Filter by keyword\" type=\"text\">\n    ";
        return _this;
    }
    Object.defineProperty(RHDPProjectSearchBox.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (value) {
            this._term = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectSearchBox.prototype.connectedCallback = function () {
        var _this = this;
        this.innerHTML = this.template;
        this.querySelector('input').addEventListener('keyup', function (e) {
            e.preventDefault();
            _this._updateTerm();
        });
    };
    RHDPProjectSearchBox.prototype._updateTerm = function () {
        this.dispatchEvent(new CustomEvent('term-change', {
            detail: {
                term: this.term
            },
            bubbles: true
        }));
    };
    Object.defineProperty(RHDPProjectSearchBox, "observedAttributes", {
        get: function () {
            return ['dcpUrl', 'data'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjectSearchBox.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template;
    };
    return RHDPProjectSearchBox;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-project-search-box', RHDPProjectSearchBox);
});
var RHDPProjects = /** @class */ (function (_super) {
    __extends(RHDPProjects, _super);
    function RHDPProjects() {
        var _this = _super.call(this) || this;
        _this.template = "\n            <ul class=\"small-block-grid-2 large-block-grid-4 medium-block-grid-3 results\">\n            </ul>\n        ";
        return _this;
    }
    Object.defineProperty(RHDPProjects.prototype, "dcpUrl", {
        get: function () {
            return this._dcpUrl;
        },
        set: function (value) {
            if (this._dcpUrl === value)
                return;
            this._dcpUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjects.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (this._data === value)
                return;
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjects.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
        this.fetchDCPData(this.dcpUrl);
    };
    Object.defineProperty(RHDPProjects, "observedAttributes", {
        get: function () {
            return ['dcpUrl', 'data'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjects.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template;
    };
    RHDPProjects.prototype.fetchDCPData = function (url) {
        var _this = this;
        var fInit = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch(url, fInit)
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            _this.data = data;
        });
    };
    return RHDPProjects;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-projects', RHDPProjects);
});
var RHDPSearchBox = /** @class */ (function (_super) {
    __extends(RHDPSearchBox, _super);
    function RHDPSearchBox() {
        var _this = _super.call(this) || this;
        _this._term = '';
        _this.name = 'Search Box';
        _this.template = function (strings, name, term) {
            return "<form class=\"search-bar\" role=\"search\">\n        <div class=\"input-cont\">\n            <input value=\"" + term + "\" class=\"user-success user-search\" type=\"search\" id=\"query\" placeholder=\"Enter your search term\">\n        </div>\n        <button id=\"search-btn\"><span>SEARCH</span><i class='fa fa-search' aria-hidden='true'></i></button>\n        </form>";
        };
        _this._checkTerm = _this._checkTerm.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchBox.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (val) {
            if (this._term === val)
                return;
            this._term = decodeURI(val);
            this.querySelector('input').setAttribute('value', this.term);
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchBox.prototype.connectedCallback = function () {
        var _this = this;
        top.addEventListener('params-ready', this._checkTerm);
        //top.window.addEventListener('popstate', e => { this.term = null; });
        top.addEventListener('term-change', this._checkTerm);
        this.innerHTML = (_a = ["", "", ""], _a.raw = ["", "", ""], this.template(_a, this.name, this.term));
        this.addEventListener('submit', function (e) {
            e.preventDefault();
            _this._termChange();
            return false;
        });
        this.querySelector('#search-btn').addEventListener('click', function (e) {
        });
        var _a;
    };
    Object.defineProperty(RHDPSearchBox, "observedAttributes", {
        get: function () {
            return ['term'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchBox.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchBox.prototype._checkTerm = function (e) {
        if (e.detail && e.detail.term) {
            this.term = e.detail.term;
        }
    };
    RHDPSearchBox.prototype._termChange = function () {
        this.term = this.querySelector('input').value;
        this.dispatchEvent(new CustomEvent('term-change', {
            detail: {
                term: this.term
            },
            bubbles: true
        }));
    };
    return RHDPSearchBox;
}(HTMLElement));
customElements.define('rhdp-search-box', RHDPSearchBox);
var RHDPSearchFilterGroup = /** @class */ (function (_super) {
    __extends(RHDPSearchFilterGroup, _super);
    function RHDPSearchFilterGroup() {
        var _this = _super.call(this) || this;
        _this._toggle = false;
        _this._more = false;
        _this.template = function (strings, name) {
            return "<h6 class=\"showFilters heading\"><span class=\"group-name\">" + name + "</span><span class=\"toggle\"><i class='fa fa-chevron-right' aria-hidden='true'></i></span></h6>\n        <div class=\"group hide\">\n            <div class=\"primary\"></div>\n            <div class=\"secondary hide\"></div>\n            <a href=\"#\" class=\"more\">Show More</a>\n        </div>";
        };
        _this.innerHTML = (_a = ["", ""], _a.raw = ["", ""], _this.template(_a, _this.name));
        return _this;
        var _a;
    }
    Object.defineProperty(RHDPSearchFilterGroup.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (val) {
            if (this._key === val)
                return;
            this._key = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterGroup.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (this._name === val)
                return;
            this._name = val;
            this.querySelector('.group-name').innerHTML = this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterGroup.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (val) {
            if (this._items === val)
                return;
            this._items = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterGroup.prototype, "toggle", {
        get: function () {
            return this._toggle;
        },
        set: function (val) {
            if (this._toggle === val)
                return;
            this._toggle = val;
            this.querySelector('.group').className = this.toggle ? 'group' : 'group hide';
            this.querySelector('.toggle').className = this.toggle ? 'toggle expand' : 'toggle';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterGroup.prototype, "more", {
        get: function () {
            return this._more;
        },
        set: function (val) {
            if (this._more === val)
                return;
            this._more = val;
            this.querySelector('.more').innerHTML = this.more ? 'Show Less' : 'Show More';
            this.querySelector('.secondary').className = this.more ? 'secondary' : 'secondary hide';
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchFilterGroup.prototype.connectedCallback = function () {
        var _this = this;
        this.querySelector('h6').addEventListener('click', function (e) {
            e.preventDefault();
            _this.toggle = !_this.toggle;
        });
        this.querySelector('.more').addEventListener('click', function (e) {
            _this.more = !_this.more;
        });
        this.toggle = true;
    };
    Object.defineProperty(RHDPSearchFilterGroup, "observedAttributes", {
        get: function () {
            return ['name', 'key', 'toggle', 'items', 'more'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchFilterGroup.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    return RHDPSearchFilterGroup;
}(HTMLElement));
customElements.define('rhdp-search-filter-group', RHDPSearchFilterGroup);
var RHDPSearchFilterItem = /** @class */ (function (_super) {
    __extends(RHDPSearchFilterItem, _super);
    function RHDPSearchFilterItem() {
        var _this = _super.call(this) || this;
        _this._active = false;
        _this._inline = false;
        _this._bubble = true;
        _this._bounce = false;
        _this.template = function (strings, name, key, active) {
            var checked = active ? 'checked' : '';
            return "<div class=\"list\"><span>" + name + "</span><input type=\"checkbox\" " + checked + " id=\"filter-item-" + key + "\" value=\"" + key + "\"><label for=\"filter-item-" + key + "\">" + name + "</label></div>";
        };
        _this.inlineTemplate = function (strings, name, active) {
            return active ? "<div class=\"inline\">" + name + " <i class=\"fa fa-times clearItem\" aria-hidden=\"true\"></i></div>" : '';
        };
        _this._checkParams = _this._checkParams.bind(_this);
        _this._clearFilters = _this._clearFilters.bind(_this);
        _this._checkChange = _this._checkChange.bind(_this);
        _this._updateFacet = _this._updateFacet.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchFilterItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (this._name === val)
                return;
            this._name = val;
            this.setAttribute('name', this._name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (val) {
            if (this._key === val)
                return;
            this._key = val;
            this.className = "filter-item-" + this._key;
            this.setAttribute('key', this._key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (val) {
            if (this._group === val)
                return;
            this._group = val;
            this.setAttribute('group', this._group);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            if (typeof val === 'string') {
                val = true;
            }
            if (val === null) {
                val = false;
            }
            if (this._active === val) {
                return;
            }
            else {
                this._active = val;
                var chkbox = this.querySelector('input');
                if (this._active) {
                    this.setAttribute('active', '');
                }
                else {
                    this.removeAttribute('active');
                }
                if (chkbox) {
                    chkbox.checked = this._active;
                }
                if (this.inline) {
                    this.innerHTML = this._active ? (_a = ["", "", ""], _a.raw = ["", "", ""], this.inlineTemplate(_a, this.name, this._active)) : '';
                }
                this.dispatchEvent(new CustomEvent('filter-item-change', { detail: { facet: this }, bubbles: this.bubble }));
                this.bubble = true;
            }
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (this._value === val)
                return;
            this._value = val;
            this.setAttribute('value', this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "inline", {
        get: function () {
            return this._inline;
        },
        set: function (val) {
            if (this._inline === val)
                return;
            this._inline = val;
            this.innerHTML = !this._inline ? (_a = ["", "", "", ""], _a.raw = ["", "", "", ""], this.template(_a, this.name, this.key, this.active)) : (_b = ["", "", ""], _b.raw = ["", "", ""], this.inlineTemplate(_b, this.name, this.active));
            var _a, _b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "bubble", {
        get: function () {
            return this._bubble;
        },
        set: function (val) {
            if (this._bubble === val)
                return;
            this._bubble = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilterItem.prototype, "bounce", {
        get: function () {
            return this._bounce;
        },
        set: function (val) {
            if (this._bounce === val)
                return;
            this._bounce = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchFilterItem.prototype.connectedCallback = function () {
        this.innerHTML = !this.inline ? (_a = ["", "", "", ""], _a.raw = ["", "", "", ""], this.template(_a, this.name, this.key, this.active)) : (_b = ["", "", ""], _b.raw = ["", "", ""], this.inlineTemplate(_b, this.name, this.active));
        if (!this.inline) {
            this.addEventListener('change', this._updateFacet);
        }
        else {
            this.addEventListener('click', this._updateFacet);
        }
        top.addEventListener('filter-item-change', this._checkChange);
        top.addEventListener('params-ready', this._checkParams);
        top.addEventListener('clear-filters', this._clearFilters);
        var _a, _b;
        //top.window.addEventListener('popstate', this._clearFilters);
    };
    Object.defineProperty(RHDPSearchFilterItem, "observedAttributes", {
        get: function () {
            return ['name', 'active', 'value', 'inline', 'key', 'group'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchFilterItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchFilterItem.prototype._updateFacet = function (e) {
        this.bounce = true;
        if (this.inline) {
            if (e.target['className'].indexOf('clearItem') >= 0) {
                this.active = !this.active;
            }
        }
        else {
            this.active = !this.active;
        }
    };
    RHDPSearchFilterItem.prototype._checkParams = function (e) {
        var _this = this;
        var chk = false;
        if (e.detail && e.detail.filters) {
            Object.keys(e.detail.filters).forEach(function (group) {
                e.detail.filters[group].forEach(function (facet) {
                    if (group === _this.group) {
                        if (facet === _this.key) {
                            chk = true;
                            _this.bubble = false;
                            _this.active = true;
                            _this.dispatchEvent(new CustomEvent('filter-item-init', { detail: { facet: _this }, bubbles: _this.bubble }));
                        }
                    }
                });
            });
        }
        if (!chk) {
            this.bubble = false;
            this.active = false;
        }
    };
    RHDPSearchFilterItem.prototype._checkChange = function (e) {
        if (e.detail && e.detail.facet) {
            if (!this.bounce) {
                if (this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                    this.bubble = false;
                    this.active = e.detail.facet.active;
                }
            }
            this.bubble = true;
            this.bounce = false;
        }
    };
    RHDPSearchFilterItem.prototype._clearFilters = function (e) {
        this.bubble = false;
        this.bounce = false;
        this.active = false;
    };
    return RHDPSearchFilterItem;
}(HTMLElement));
customElements.define('rhdp-search-filter-item', RHDPSearchFilterItem);
// import {RHDPSearchFilterGroup} from './rhdp-search-filter-group';
// import {RHDPSearchFilterItem} from './rhdp-search-filter-item';
var RHDPSearchFilters = /** @class */ (function (_super) {
    __extends(RHDPSearchFilters, _super);
    function RHDPSearchFilters() {
        var _this = _super.call(this) || this;
        _this._type = '';
        _this._title = 'Filter By';
        _this._toggle = false;
        _this.modalTemplate = function (string, title) {
            return "<div class=\"cover\" id=\"cover\">\n            <div class=\"title\">" + title + " <a href=\"#\" class=\"cancel\" id=\"cancel\">Close</a></div>\n            <div class=\"groups\">\n            </div>\n            <div class=\"footer\">\n            <a href=\"#\" class=\"clearFilters\">Clear Filters</a> \n            <a href=\"#\" class=\"applyFilters\">Apply</a>\n            </div>\n        </div>";
        };
        _this.activeTemplate = function (strings, title) {
            return "<div class=\"active-type\">\n        <strong>" + title + "</strong>\n        <div class=\"activeFilters\"></div>\n        <a href=\"#\" class=\"clearFilters\">Clear Filters</a>\n      </div>";
        };
        _this.template = function (strings, title) {
            return "<a class=\"showBtn\">Show Filters</a>\n        <div class=\"control\" id=\"control\">\n            <div class=\"title\">" + title + "</div>\n            <div class=\"groups\">\n            </div>\n        </div>";
        };
        _this._toggleModal = _this._toggleModal.bind(_this);
        _this._clearFilters = _this._clearFilters.bind(_this);
        _this._addFilters = _this._addFilters.bind(_this);
        _this._checkActive = _this._checkActive.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchFilters.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            if (this._type === val)
                return;
            this._type = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilters.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (val) {
            if (this._title === val)
                return;
            this._title = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilters.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        set: function (val) {
            if (this._filters === val)
                return;
            this._filters = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchFilters.prototype, "toggle", {
        get: function () {
            return this._toggle;
        },
        set: function (val) {
            if (this._toggle === val)
                return;
            this._toggle = val;
            if (this._toggle) {
                this.querySelector('.cover').className = 'cover modal';
                window.scrollTo(0, 0);
                document.body.style.overflow = 'hidden';
                this.style.height = window.innerHeight + 'px';
            }
            else {
                this.querySelector('.cover').className = 'cover';
                document.body.style.overflow = 'auto';
            }
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchFilters.prototype.connectedCallback = function () {
        var _this = this;
        if (this.type === 'active') {
            this.innerHTML = (_a = ["", ""], _a.raw = ["", ""], this.activeTemplate(_a, this.title));
            top.addEventListener('filter-item-change', this._checkActive);
            top.addEventListener('filter-item-init', this._checkActive);
            top.addEventListener('search-complete', this._checkActive);
            top.addEventListener('params-ready', this._checkActive);
            top.addEventListener('clear-filters', this._clearFilters);
            this._addFilters();
        }
        else if (this.type === 'modal') {
            this.innerHTML = (_b = ["", ""], _b.raw = ["", ""], this.modalTemplate(_b, this.title));
            this.addGroups();
        }
        else {
            this.innerHTML = (_c = ["", ""], _c.raw = ["", ""], this.template(_c, this.title));
            this.addGroups();
        }
        this.addEventListener('click', function (e) {
            switch (e.target['className']) {
                case 'showBtn':
                case 'cancel':
                case 'applyFilters':
                    e.preventDefault();
                    _this.dispatchEvent(new CustomEvent('toggle-modal', {
                        bubbles: true
                    }));
                    break;
                case 'clearFilters':
                    e.preventDefault();
                    _this.dispatchEvent(new CustomEvent('clear-filters', {
                        bubbles: true
                    }));
                    break;
                case 'more':
                    e.preventDefault();
                    break;
            }
        });
        //top.addEventListener('clear-filters', this._clearFilters);
        top.addEventListener('toggle-modal', this._toggleModal);
        var _a, _b, _c;
    };
    Object.defineProperty(RHDPSearchFilters, "observedAttributes", {
        get: function () {
            return ['type', 'title', 'toggle'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchFilters.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchFilters.prototype.addGroups = function () {
        var groups = this.filters.facets, len = groups.length;
        for (var i = 0; i < len; i++) {
            var group = new RHDPSearchFilterGroup(), groupInfo = groups[i], groupNode = group.querySelector('.group'), primaryFilters = group.querySelector('.primary'), secondaryFilters = group.querySelector('.secondary'), len_1 = groupInfo.items ? groupInfo.items.length : 0;
            if (len_1 <= 5) {
                groupNode.removeChild(groupNode.lastChild);
            }
            for (var j = 0; j < len_1; j++) {
                var item = new RHDPSearchFilterItem();
                item.name = groupInfo.items[j].name;
                item.value = groupInfo.items[j].value;
                item.active = groupInfo.items[j].active;
                item.key = groupInfo.items[j].key;
                item.group = groupInfo.key;
                if (j < 5) {
                    primaryFilters.appendChild(item);
                }
                else {
                    secondaryFilters.appendChild(item);
                }
            }
            group.key = groupInfo.key;
            group.name = groupInfo.name;
            this.querySelector('.groups').appendChild(group);
        }
    };
    RHDPSearchFilters.prototype._checkActive = function (e) {
        if (e.detail) {
            if (e.detail.facet) {
                this.style.display = e.detail.facet.active ? 'block' : this.style.display;
            }
            else {
                var chk = this.querySelectorAll('rhdp-search-filter-item[active]');
                if (chk.length > 0) {
                    this.style.display = 'block';
                }
                else {
                    this.style.display = 'none';
                }
            }
        }
    };
    RHDPSearchFilters.prototype._initActive = function (e, group_key, item) {
        if (e.detail && e.detail.filters) {
            //console.log(e.detail.filters);
            Object.keys(e.detail.filters).forEach(function (group) {
                e.detail.filters[group].forEach(function (facet) {
                    if (group === group_key) {
                        if (facet === item.key) {
                            return true;
                        }
                    }
                });
            });
        }
        return false;
    };
    RHDPSearchFilters.prototype._addFilters = function () {
        var groups = this.filters.facets;
        for (var i = 0; i < groups.length; i++) {
            var items = groups[i].items;
            for (var j = 0; j < items.length; j++) {
                var item = new RHDPSearchFilterItem();
                item.name = items[j].name;
                item.value = items[j].value;
                item.inline = true;
                item.bubble = false;
                item.key = items[j].key;
                item.group = groups[i].key;
                this.querySelector('.activeFilters').appendChild(item);
            }
        }
        // if (this.type === 'active') {
        //     this._checkActive();
        // }
    };
    RHDPSearchFilters.prototype._toggleModal = function (e) {
        if (this.type === 'modal') {
            this.toggle = !this.toggle;
        }
    };
    RHDPSearchFilters.prototype.applyFilters = function () {
        this.dispatchEvent(new CustomEvent('apply-filters', {
            bubbles: true
        }));
    };
    RHDPSearchFilters.prototype._clearFilters = function (e) {
        this.style.display = 'none';
    };
    return RHDPSearchFilters;
}(HTMLElement));
customElements.define('rhdp-search-filters', RHDPSearchFilters);
var RHDPSearchOneBox = /** @class */ (function (_super) {
    __extends(RHDPSearchOneBox, _super);
    function RHDPSearchOneBox() {
        var _this = _super.call(this) || this;
        _this._term = '';
        _this._url = '../rhdp-apps/onebox/onebox.json';
        _this._mock = false;
        _this.slotTemplate = function (strings, slot, id) {
            return "" + (slot && slot.url && slot.text ? "<li><a href=\"" + slot.url + "?onebox=" + id + "\">" + _this.getIcon(slot.icon) + slot.text + "</a></li>" : '');
        };
        _this.template = function (strings, feature) {
            return "<div>\n            " + (feature.heading && feature.heading.url && feature.heading.text ? "<h4><a href=\"" + feature.heading.url + "\">" + feature.heading.text + "</a></h4>" : '') + "\n            " + (feature.details ? "<p>" + feature.details + "</p>" : '') + "\n            " + (feature.button && feature.button.url && feature.button.text ? "<a href=\"" + feature.button.url + "?onebox=" + feature.id + "\" class=\"button medium-cta blue\">" + feature.button.text + "</a>" : '') + "\n            " + (feature.slots && feature.slots.length > 0 ? "<ul class=\"slots\">\n                " + feature.slots.map(function (slot) {
                return (_a = ["", "", ""], _a.raw = ["", "", ""], _this.slotTemplate(_a, slot, feature.id));
                var _a;
            }).join('') + "\n            </ul>" : '') + "\n        </div>";
        };
        _this._termChange = _this._termChange.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchOneBox.prototype, "term", {
        get: function () {
            if ((this._term === null) || (this._term === '')) {
                return this._term;
            }
            else {
                return this._term.replace(/(<([^>]+)>)/ig, '');
            }
        },
        set: function (val) {
            if (this._term === val)
                return;
            this._term = val;
            this.setAttribute('term', this._term);
            this.feature = this.getFeature();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchOneBox.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (val) {
            if (this._url === val)
                return;
            this._url = val;
            this.setAttribute('url', this._url);
            this.getData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchOneBox.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (val) {
            if (this._data === val)
                return;
            this._data = val;
            this.feature = this.getFeature();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchOneBox.prototype, "feature", {
        get: function () {
            return this._feature;
        },
        set: function (val) {
            if (this._feature === val)
                return;
            this._feature = val;
            this.innerHTML = this.feature ? (_a = ["", ""], _a.raw = ["", ""], this.template(_a, this.feature)) : '';
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchOneBox.prototype, "mock", {
        get: function () {
            return this._mock;
        },
        set: function (val) {
            if (this._mock === val)
                return;
            this._mock = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchOneBox.prototype.connectedCallback = function () {
        this.getData();
        top.addEventListener('term-change', this._termChange);
        top.addEventListener('params-ready', this._termChange);
    };
    Object.defineProperty(RHDPSearchOneBox, "observedAttributes", {
        get: function () {
            return ['term', 'url', 'mock'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchOneBox.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchOneBox.prototype._termChange = function (e) {
        if (e.detail && e.detail.term && e.detail.term.length > 0) {
            this.term = e.detail.term;
        }
        else {
            this.term = '';
        }
    };
    RHDPSearchOneBox.prototype.getData = function () {
        var _this = this;
        if (this.mock || this.data) {
            return this.data;
        }
        else {
            var fInit = {
                method: 'GET',
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            };
            fetch(this.url, fInit)
                .then(function (resp) { return resp.json(); })
                .then(function (data) {
                _this.data = data;
            });
        }
    };
    RHDPSearchOneBox.prototype.getFeature = function () {
        var len = this.data && this.data['features'] ? this.data['features'].length : 0, f;
        for (var i = 0; i < len; i++) {
            if (this.data['features'][i].match.indexOf(this.term.toLowerCase()) >= 0) {
                f = this.data['features'][i];
            }
        }
        return f;
    };
    RHDPSearchOneBox.prototype.getIcon = function (name) {
        var icons = {
            icon_help: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><title>icon_help</title><path d="M20.15,2C27.779,2,33.0651,5.2419,33.0651,12.1723A8.6318,8.6318,0,0,1,28.0266,20.4c-4.1859,1.9935-5.2333,3.14-5.3836,6.0819H15.81c0-4.736,1.3966-7.6775,7.0319-10.2718,2.4928-1.1469,3.24-1.9447,3.24-3.7393,0-2.2939-1.693-3.64-5.9317-3.64-3.792,0-6.4838,1.7945-8.729,4.1879L6.9349,7.7835A17.8438,17.8438,0,0,1,20.15,2M19.253,29.5248a4.2376,4.2376,0,1,1-4.2386,4.2366,4.2986,4.2986,0,0,1,4.2386-4.2366M20.15,1A18.8975,18.8975,0,0,0,6.211,7.0936a1,1,0,0,0-.0354,1.3406L10.6619,13.67a1,1,0,0,0,.7369.3491l.0225,0a1,1,0,0,0,.7293-.3158c2.5121-2.6779,4.9793-3.8721,8-3.8721,4.9317,0,4.9317,1.85,4.9317,2.64,0,1.167-.2291,1.7134-2.6579,2.8308-6.34,2.9189-7.6139,6.442-7.6139,11.18a1,1,0,0,0,1,1h6.833a1,1,0,0,0,.9987-.949c.121-2.3688.7339-3.2866,4.8148-5.23a9.61,9.61,0,0,0,5.6085-9.13C34.0651,5.0722,28.9933,1,20.15,1ZM19.253,28.5248a5.2376,5.2376,0,1,0,5.2386,5.2366,5.3078,5.3078,0,0,0-5.2386-5.2366Z"/></svg>',
            icon_helloworld: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.0005 38.0015"><title>icon_helloworld</title><path d="M14.0642,7.3037a.1761.1761,0,0,0-.1724-.0852l-3.5192.3888a.1775.1775,0,0,0-.14.0974.1751.1751,0,0,0,.0083.1709l.5161.853A14.6794,14.6794,0,0,0,6.9885,13.42a.5192.5192,0,0,0,.2284.6984.5112.5112,0,0,0,.2345.0563.519.519,0,0,0,.4639-.2847,13.6444,13.6444,0,0,1,3.3873-4.2595l.4622.7639a.1749.1749,0,0,0,.1471.0874.1822.1822,0,0,0,.1525-.0778L14.0588,7.496a.1788.1788,0,0,0,.0061-.192Z" transform="translate(-1 -1)"/><path d="M26.0891,7.9374a13.6292,13.6292,0,0,1,4.26,3.3871l-.7639.4621a.1747.1747,0,0,0-.0874.1471.182.182,0,0,0,.0778.1525l2.9084,1.9945a.1788.1788,0,0,0,.192.0061l0-.0007a.176.176,0,0,0,.0851-.1724l-.3888-3.5192a.1776.1776,0,0,0-.0974-.14.1751.1751,0,0,0-.1709.0084l-.8532.5162A14.6719,14.6719,0,0,0,26.559,7.0106a.52.52,0,1,0-.47.9268Z" transform="translate(-1 -1)"/><path d="M32.741,25.8826a.5183.5183,0,0,0-.6984.2284A13.64,13.64,0,0,1,28.6552,30.37l-.4623-.764a.1748.1748,0,0,0-.1471-.0874.1822.1822,0,0,0-.1526.0778l-1.9944,2.9084a.1787.1787,0,0,0-.0061.192l.0007,0a.176.176,0,0,0,.1724.0851l3.5192-.3888a.1776.1776,0,0,0,.14-.0974.1752.1752,0,0,0-.0083-.1709l-.5161-.853a14.6829,14.6829,0,0,0,3.7685-4.6916A.5192.5192,0,0,0,32.741,25.8826Z" transform="translate(-1 -1)"/><path d="M4.7816,17.938v.9587h.92v3.7573h1.481V17.197H5.92C5.7643,17.704,5.4836,17.8989,4.7816,17.938Z" transform="translate(-1 -1)"/><path d="M35.244,19.7464a1.1146,1.1146,0,0,0,.7253-1.0679c0-1.1536-.8735-1.5673-2.183-1.5673a3.304,3.304,0,0,0-2.1124.71l.7172.9821a2.1842,2.1842,0,0,1,1.3562-.4674c.538,0,.7562.1558.7562.4441,0,.3588-.1558.46-.6314.46h-.7014v1.177h.7872c.5532,0,.7715.14.7715.5223,0,.3741-.2649.5532-.8963.5532a2.49,2.49,0,0,1-1.5511-.569l-.78.9821a3.4268,3.4268,0,0,0,2.3.8344c1.481,0,2.3931-.5537,2.3931-1.8165A1.1471,1.1471,0,0,0,35.244,19.7464Z" transform="translate(-1 -1)"/><path d="M21.02,6.4467c1.0445-.4837,1.2942-.92,1.2942-1.6373,0-.99-.71-1.5358-2.0657-1.5358a4.1094,4.1094,0,0,0-2.3388.71l.6938,1.1151a2.8789,2.8789,0,0,1,1.6216-.5537c.4365,0,.608.1325.608.3741,0,.2182-.0858.304-.6629.5613a3.3785,3.3785,0,0,0-2.2764,3.3366h4.4593V7.5846H19.508C19.6252,7.2573,19.9292,6.9532,21.02,6.4467Z" transform="translate(-1 -1)"/><path d="M21.5569,30.9144H20.06L17.1215,34.29V35.397h3.0793v.9745h1.3562v-.9354h.7019V34.1576h-.7019ZM20.2008,33.62v.538h-.4055c-.3741,0-.7481.0076-1.0212.0233a9.1978,9.1978,0,0,0,.7172-.7953l.0782-.0934a8.66,8.66,0,0,0,.6547-.85C20.2084,32.7,20.2008,33.3,20.2008,33.62Z" transform="translate(-1 -1)"/><path d="M6.5184,14.6629c-.0662-.0029-.1421-.0045-.2175-.0045a5.3421,5.3421,0,0,0-.1365,10.681c.0543.0023.1168.0031.1794.0031a5.3413,5.3413,0,0,0,.1746-10.68Zm-.1746,9.64c-.0482,0-.0964-.0005-.1452-.0025a4.3027,4.3027,0,0,1,.1022-8.6027q.0911,0,.183.0039a4.3018,4.3018,0,0,1-.14,8.6013Z" transform="translate(-1 -1)"/><path d="M33.8363,14.6629c-.0535-.0023-.1164-.0031-.1786-.0031a5.3413,5.3413,0,0,0-.1751,10.68c.0548.0023.1177.0031.1807.0031a5.3413,5.3413,0,0,0,.173-10.68Zm2.7626,8.4794a4.2718,4.2718,0,0,1-2.9357,1.1607c-.0487,0-.0974-.0005-.1467-.0025a4.3018,4.3018,0,0,1,.1411-8.6013c.0477,0,.0959.0005.1441.0025a4.3022,4.3022,0,0,1,2.7971,7.4406Z" transform="translate(-1 -1)"/><path d="M20.1774,1.0044C20.1115,1.0016,20.0362,1,19.9614,1A5.3428,5.3428,0,0,0,16.1,9.9926a5.3041,5.3041,0,0,0,3.7236,1.6883c.0548.0023.1177.0031.1807.0031a5.3413,5.3413,0,0,0,.1728-10.68ZM22.94,9.4839a4.27,4.27,0,0,1-2.9352,1.1607c-.0487,0-.0974-.0005-.1467-.0025a4.3026,4.3026,0,0,1,.1036-8.6026q.09,0,.1817.0038A4.3018,4.3018,0,0,1,22.94,9.4839Z" transform="translate(-1 -1)"/><path d="M20.1776,28.3214c-.0657-.0029-.1416-.0045-.2171-.0045a5.3423,5.3423,0,0,0-.1371,10.6815c.0535.0023.1164.0031.1786.0031a5.3415,5.3415,0,0,0,.1756-10.68Zm-.1756,9.6407c-.0477,0-.0959-.0005-.1441-.0025a4.3022,4.3022,0,0,1-2.7971-7.4406,4.2219,4.2219,0,0,1,2.9-1.1627c.0606,0,.1216.0013.1826.0039a4.3021,4.3021,0,0,1-.1411,8.6018Z" transform="translate(-1 -1)"/></svg>',
            icon_docsandapi: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><g><g><g><path d="M37.5,19.3c0-0.1-0.1-0.2-0.2-0.3l-10.1-6.3l-8.6-9.6c-0.1-0.2-0.4-0.2-0.5,0l-2.7,2.4L13,4c-0.2-0.1-0.5-0.1-0.7,0.2L7,12.7l-3.1,2.7c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3l0.6,0.7l-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.1,0.1,0.2,0.2,0.3l11.3,7l8.5,9.5c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1l2.7-2.3l1.3,0.8c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.3-0.1,0.4-0.2l3.3-5.2l6.3-5.5c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3l-1.5-1.7l1.7-2.7C37.5,19.6,37.5,19.5,37.5,19.3z M12.9,5.1l1.6,1l-4.9,4.3L12.9,5.1z M3.7,19.8l1.5-2.4l6.6,7.4L3.7,19.8z M27.1,34.3l-0.6-0.4l1.8-1.6L27.1,34.3z M22.8,36.1L14,26.2l0,0l0,0L4.7,15.7L18.3,3.9l9,10.2l0,0l0,0l9.1,10.2L22.8,36.1z M35.1,21.6l-5.5-6.2l6.8,4.2L35.1,21.6z"/><path d="M19.6,12c-0.1-0.2-0.4-0.2-0.5,0l-6.2,5.4c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3l6,6.7c0.1,0.2,0.4,0.2,0.5,0l1.5-1.3l2.6,2.9c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1l4.5-3.9c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3L19.6,12zM23.7,25.6l-2.6-2.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.2,0.1l-1.5,1.3l-5.5-6.2l5.7-5l8.3,9.3L23.7,25.6z"/><path d="M30.9,25.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3l-2-2.3c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3L30.9,25.2z"/><path d="M29.2,21.7c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3c-0.1-0.1-0.2-0.1-0.3,0l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3C29.1,21.7,29.2,21.7,29.2,21.7z"/><path d="M18.7,11.5c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3L17,9c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3L18.7,11.5z"/><path d="M12.5,16.8l-2-2.3c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3l2,2.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C12.6,17,12.6,16.9,12.5,16.8z"/><path d="M20.3,11.7c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3c-0.1-0.1-0.2-0.1-0.3,0l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3C20.1,11.6,20.2,11.7,20.3,11.7z"/><path d="M24.3,27c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3l2,2.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3L24.3,27z"/><path d="M23,26.7l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3C23.2,26.6,23.1,26.6,23,26.7z"/><path d="M18.3,24.9l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3C18.5,24.8,18.4,24.8,18.3,24.9z"/><path d="M12.3,18.1l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3C12.5,18.1,12.4,18.1,12.3,18.1z"/></g></g></g></svg>'
        };
        return icons[name];
    };
    return RHDPSearchOneBox;
}(HTMLElement));
customElements.define('rhdp-search-onebox', RHDPSearchOneBox);
// import {RHDPSearchFilterItem} from './rhdp-search-filter-item';
var RHDPSearchQuery = /** @class */ (function (_super) {
    __extends(RHDPSearchQuery, _super);
    function RHDPSearchQuery() {
        var _this = _super.call(this) || this;
        _this._limit = 10;
        _this._from = 0;
        _this._sort = 'relevance';
        _this._valid = true;
        _this.urlTemplate = function (strings, url, term, from, limit, sort, types, tags, sys_types) {
            var order = '';
            if (sort === 'most-recent') {
                order = '&newFirst=true';
            }
            return url + "?tags_or_logic=true&filter_out_excluded=true&from=" + from + order + "&query=" + term + "&query_highlight=true&size" + limit + "=true" + types + tags + sys_types;
        };
        _this._changeAttr = _this._changeAttr.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchQuery.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        set: function (val) {
            if (this._filters === val)
                return;
            this._filters = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "activeFilters", {
        get: function () {
            return this._activeFilters;
        },
        set: function (val) {
            if (this._activeFilters === val)
                return;
            this._activeFilters = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (val) {
            if (this._from === val)
                return;
            this._from = val;
            this.setAttribute('from', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (val) {
            if (this._limit === val)
                return;
            this._limit = val;
            this.setAttribute('limit', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (val) {
            if (this._sort === val)
                return;
            this._sort = val;
            this.setAttribute('sort', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "results", {
        get: function () {
            return this._results;
        },
        set: function (val) {
            if (this._results === val)
                return;
            this._results = val;
            this.from = this.results && this.results.hits && typeof this.results.hits.hits !== 'undefined' ? this.from + this.results.hits.hits.length : 0;
            this.dispatchEvent(new CustomEvent('search-complete', {
                detail: {
                    term: this.term,
                    filters: this.activeFilters,
                    sort: this.sort,
                    limit: this.limit,
                    from: this.from,
                    results: this.results,
                },
                bubbles: true
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (val) {
            if (this._term === val)
                return;
            this._term = val;
            this.setAttribute('term', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (val) {
            if (this._url === val)
                return;
            this._url = val;
            this.setAttribute('url', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchQuery.prototype, "valid", {
        get: function () {
            return this._valid;
        },
        set: function (val) {
            if (this._valid === val)
                return;
            this._valid = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchQuery.prototype.filterString = function (facets) {
        var len = facets.length, filterArr = [];
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < facets[i].items.length; j++) {
                if (facets[i].items[j].active) {
                    var idx = 0;
                    while (idx < facets[i].items[j].value.length) {
                        filterArr.push(facets[i].items[j].value[idx]);
                        idx = idx + 1;
                    }
                }
            }
        }
        return filterArr.join(', ');
    };
    RHDPSearchQuery.prototype.connectedCallback = function () {
        top.addEventListener('params-ready', this._changeAttr);
        top.addEventListener('term-change', this._changeAttr);
        top.addEventListener('filter-item-change', this._changeAttr);
        top.addEventListener('sort-change', this._changeAttr);
        top.addEventListener('clear-filters', this._changeAttr);
        //top.window.addEventListener('popstate', e => { this.results = undefined; });
        top.addEventListener('load-more', this._changeAttr);
    };
    Object.defineProperty(RHDPSearchQuery, "observedAttributes", {
        get: function () {
            return ['term', 'sort', 'limit', 'results', 'url'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchQuery.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchQuery.prototype._setFilters = function (item) {
        var _this = this;
        var add = item.active;
        if (add) {
            this.activeFilters[item.group] = this.activeFilters[item.group] || [];
            this.activeFilters[item.group].push(item.key);
        }
        else {
            Object.keys(this.activeFilters).forEach(function (group) {
                if (group === item.group) {
                    var idx = _this.activeFilters[group].indexOf(item.key);
                    if (idx >= 0) {
                        _this.activeFilters[group].splice(idx, 1);
                        if (_this.activeFilters[group].length === 0) {
                            delete _this.activeFilters[group];
                        }
                    }
                }
            });
        }
    };
    RHDPSearchQuery.prototype._changeAttr = function (e) {
        switch (e.type) {
            case 'term-change':
                if (e.detail && e.detail.term && e.detail.term.length > 0) {
                    this.term = e.detail.term;
                }
                else {
                    this.term = '';
                }
                this.from = 0;
                this.search();
                break;
            case 'filter-item-change'://detail.facet
                if (e.detail && e.detail.facet) {
                    this._setFilters(e.detail.facet);
                }
                this.from = 0;
                this.search();
                // Wait for params-ready event
                break;
            case 'sort-change':// detail.sort
                if (e.detail && e.detail.sort) {
                    this.sort = e.detail.sort;
                }
                this.from = 0;
                this.search();
                break;
            case 'load-more':// detail.qty
                this.search();
                break;
            case 'clear-filters':
                this.activeFilters = {};
                this.search();
                break;
            case 'params-ready':
                if (e.detail && e.detail.term) {
                    this.term = e.detail.term;
                }
                if (e.detail && e.detail.sort) {
                    this.sort = e.detail.sort;
                }
                if (e.detail && e.detail.filters) {
                    this.activeFilters = e.detail.filters;
                }
                this.from = 0;
                if (Object.keys(e.detail.filters).length > 0 || e.detail.term !== null || e.detail.sort !== null || e.detail.qty !== null) {
                    this.search();
                }
                break;
        }
    };
    // _checkValid(e) {
    //     let obj = e.detail;
    //     this.valid = ;
    // }
    RHDPSearchQuery.prototype.search = function () {
        var _this = this;
        this.dispatchEvent(new CustomEvent('search-start', { bubbles: true }));
        if (Object.keys(this.activeFilters).length > 0 || (this.term !== null && this.term !== '' && typeof this.term !== 'undefined')) {
            var qURL_1 = new URL(this.url);
            qURL_1.searchParams.set('tags_or_logic', 'true');
            qURL_1.searchParams.set('filter_out_excluded', 'true');
            qURL_1.searchParams.set('from', this.from.toString());
            if (this.sort === 'most-recent') {
                qURL_1.searchParams.set('newFirst', 'true');
            }
            qURL_1.searchParams.set('query', this.term || '');
            qURL_1.searchParams.set('query_highlight', 'true');
            qURL_1.searchParams.set('size' + this.limit.toString(), 'true');
            if (this.activeFilters) {
                Object.keys(this.activeFilters).forEach(function (filtergroup) {
                    _this.filters.facets.forEach(function (group) {
                        if (group.key === filtergroup) {
                            group.items.forEach(function (facet) {
                                if (_this.activeFilters[group.key].indexOf(facet.key) >= 0) {
                                    facet.value.forEach(function (fval) {
                                        qURL_1.searchParams.append(group.key, fval);
                                    });
                                }
                            });
                        }
                    });
                });
            }
            //console.log(qURL.toString());
            fetch(qURL_1.toString()) //this.urlTemplate`${this.url}${this.term}${this.from}${this.limit}${this.sort}${this.filters}`)
                .then(function (resp) { return resp.json(); })
                .then(function (data) {
                _this.results = data;
            });
        }
        else {
            this.dispatchEvent(new CustomEvent('search-complete', { detail: { invalid: true }, bubbles: true }));
        }
    };
    return RHDPSearchQuery;
}(HTMLElement));
customElements.define('rhdp-search-query', RHDPSearchQuery);
var RHDPSearchResultCount = /** @class */ (function (_super) {
    __extends(RHDPSearchResultCount, _super);
    function RHDPSearchResultCount() {
        var _this = _super.call(this) || this;
        _this._count = 0;
        _this._term = '';
        _this._loading = true;
        _this.template = function (strings, count, term) {
            return count + " results found for " + term.replace('<', '&lt;').replace('>', '&gt;');
        };
        _this._setText = _this._setText.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchResultCount.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            if (this._count === val)
                return;
            this._count = val;
            this.setAttribute('count', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResultCount.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (val) {
            val = decodeURI(val).replace('<', '&lt;').replace('>', '&gt;');
            if (this._term === val)
                return;
            this._term = val;
            this.setAttribute('term', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResultCount.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (val) {
            if (this._loading === val)
                return;
            this._loading = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchResultCount.prototype.connectedCallback = function () {
        var _this = this;
        top.addEventListener('params-ready', this._setText);
        top.addEventListener('search-start', function (e) { _this.loading = true; _this._setText(e); });
        top.addEventListener('search-complete', function (e) { _this.loading = false; _this._setText(e); });
        //top.addEventListener('term-change', this._setText);
    };
    Object.defineProperty(RHDPSearchResultCount, "observedAttributes", {
        get: function () {
            return ['count', 'term'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchResultCount.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.count + " results found " + (this.term ? "for " + this.term : '');
    };
    RHDPSearchResultCount.prototype._setText = function (e) {
        if (e.detail) {
            if (typeof e.detail.invalid === 'undefined') {
                if (e.detail.term && e.detail.term.length > 0) {
                    this.term = e.detail.term;
                }
                else {
                    this.term = '';
                }
                if (e.detail.results && e.detail.results.hits && e.detail.results.hits.total) {
                    this.count = e.detail.results.hits.total;
                }
                else {
                    this.count = 0;
                }
                if (!this.loading) {
                    this.innerHTML = this.count + " results found " + (this.term ? "for " + this.term : '');
                }
            }
            else {
                this.term = '';
                this.count = 0;
                this.innerHTML = '';
            }
        }
        else {
            this.term = '';
            this.count = 0;
            this.innerHTML = '';
        }
    };
    return RHDPSearchResultCount;
}(HTMLElement));
customElements.define('rhdp-search-result-count', RHDPSearchResultCount);
var RHDPSearchResult = /** @class */ (function (_super) {
    __extends(RHDPSearchResult, _super);
    function RHDPSearchResult() {
        var _this = _super.call(this) || this;
        _this._url = ['', ''];
        _this.template = function (strings, url, title, kind, created, description, premium, thumbnail) {
            return "<div>\n            <h4>" + (url ? "<a href=\"" + url + "\">" + title + "</a>" : title) + "</h4>\n            <p " + (premium ? 'class="result-info subscription-required" data-tooltip="" title="Subscription Required" data-options="disable-for-touch:true"' : 'class="result-info"') + ">\n                <span class=\"caps\">" + kind + "</span>\n                " + (created ? "- <rh-datetime datetime=\"" + created + "\" type=\"local\" day=\"numeric\" month=\"long\" year=\"numeric\">" + created + "</rh-datetime>" : '') + "\n            </p>\n            <p class=\"result-description\">" + description + "</p>\n        </div>\n        " + (thumbnail ? "<div class=\"thumb\"><img src=\"" + thumbnail.replace('http:', 'https:') + "\"></div>" : '');
        };
        return _this;
    }
    Object.defineProperty(RHDPSearchResult.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (val) {
            if (this._url === val)
                return;
            this._url = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (val) {
            if (this._title === val)
                return;
            this._title = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (val) {
            if (this._kind === val)
                return;
            this._kind = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "created", {
        get: function () {
            return this._created;
        },
        set: function (val) {
            if (this._created === val)
                return;
            this._created = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (val) {
            if (this._description === val)
                return;
            this._description = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "premium", {
        get: function () {
            return this._premium;
        },
        set: function (val) {
            if (this._premium === val)
                return;
            this._premium = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "thumbnail", {
        get: function () {
            return this._thumbnail;
        },
        set: function (val) {
            if (this._thumbnail === val)
                return;
            this._thumbnail = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResult.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (val) {
            if (this._result === val)
                return;
            this._result = val;
            this.computeTitle(val);
            this.computeKind(val);
            this.computeCreated(val);
            this.computeDescription(val);
            this.computeURL(val);
            this.computePremium(val);
            this.computeThumbnail(val);
            this.renderResult();
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchResult.prototype.connectedCallback = function () {
    };
    Object.defineProperty(RHDPSearchResult, "observedAttributes", {
        get: function () {
            return ['result'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchResult.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchResult.prototype.renderResult = function () {
        this.innerHTML = (_a = ["", "", "", "", "", "", "", ""], _a.raw = ["", "", "", "", "", "", "", ""], this.template(_a, this.url, this.title, this.kind, this.created, this.description, this.premium, this.thumbnail));
        var _a;
    };
    RHDPSearchResult.prototype.computeThumbnail = function (result) {
        if (result.fields.thumbnail) {
            this.thumbnail = result.fields.thumbnail[0];
        }
    };
    RHDPSearchResult.prototype.computeTitle = function (result) {
        var title = '';
        if (result.highlight && result.highlight.sys_title) {
            title = result.highlight.sys_title[0];
        }
        else {
            title = result.fields.sys_title[0];
        }
        this.title = title;
    };
    RHDPSearchResult.prototype.computeKind = function (result) {
        var kind = result.fields.sys_type || "webpage", map = {
            jbossdeveloper_archetype: 'Archetype',
            article: 'Article',
            blogpost: 'Blog Post',
            jbossdeveloper_bom: 'Bom',
            book: 'Book',
            cheatsheet: 'Cheat Sheet',
            demo: 'Demo',
            event: 'Event',
            forumthread: 'Forum Thread',
            jbossdeveloper_example: 'Demo',
            quickstart: 'Quickstart',
            quickstart_early_access: 'Demo',
            solution: 'Article',
            stackoverflow_thread: 'Stack Overflow',
            video: 'Video',
            webpage: 'Web Page',
            website: 'Web Page'
        };
        this.kind = map[kind] || 'Web Page';
    };
    RHDPSearchResult.prototype.computeCreated = function (result) {
        this.created = result.fields.sys_created && result.fields.sys_created.length > 0 ? result.fields.sys_created[0] : '';
    };
    RHDPSearchResult.prototype.computeDescription = function (result) {
        var description = '';
        if (result.highlight && result.highlight.sys_description) {
            description = result.highlight.sys_description[0];
        }
        else if (result.highlight && result.highlight.sys_content_plaintext) {
            description = result.highlight.sys_content_plaintext[0];
        }
        else if (result.fields && result.fields.sys_description) {
            description = result.fields.sys_description[0];
        }
        else {
            description = result.fields.sys_content_plaintext[0];
        }
        // Removes all HTML tags from description
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = description;
        description = tempDiv.innerText;
        this.description = description;
    };
    RHDPSearchResult.prototype.computeURL = function (result) {
        if (result.fields && result.fields.sys_type === 'book' && result.fields.field_book_url) {
            this.url = result.fields.field_book_url;
        }
        else {
            this.url = (result.fields && result.fields.sys_url_view) ? result.fields.sys_url_view : '';
        }
    };
    RHDPSearchResult.prototype.computePremium = function (result) {
        var premium = false;
        if (result._type === "rht_knowledgebase_article" || result._type === "rht_knowledgebase_solution") {
            premium = true;
        }
        this.premium = premium;
    };
    return RHDPSearchResult;
}(HTMLElement));
customElements.define('rhdp-search-result', RHDPSearchResult);
// import {RHDPSearchResult} from './rhdp-search-result';
var RHDPSearchResults = /** @class */ (function (_super) {
    __extends(RHDPSearchResults, _super);
    function RHDPSearchResults() {
        var _this = _super.call(this) || this;
        _this._more = false;
        _this._last = 0;
        _this._valid = true;
        _this.invalidMsg = document.createElement('div');
        _this.loadMore = document.createElement('div');
        _this.endOfResults = document.createElement('div');
        _this.loading = document.createElement('div');
        _this._renderResults = _this._renderResults.bind(_this);
        _this._setLoading = _this._setLoading.bind(_this);
        _this._checkValid = _this._checkValid.bind(_this);
        _this._clearResults = _this._clearResults.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchResults.prototype, "results", {
        get: function () {
            return this._results;
        },
        set: function (val) {
            if (this._results === val)
                return;
            this._results = val;
            this._renderResults(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResults.prototype, "more", {
        get: function () {
            return this._more;
        },
        set: function (val) {
            if (this._more === val)
                return;
            this._more = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResults.prototype, "last", {
        get: function () {
            return this._last;
        },
        set: function (val) {
            if (this._last === val)
                return;
            this._last = val ? val : 0;
            this.setAttribute('last', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchResults.prototype, "valid", {
        get: function () {
            return this._valid;
        },
        set: function (val) {
            if (this._valid === val)
                return;
            this._valid = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchResults.prototype.connectedCallback = function () {
        var _this = this;
        this.invalidMsg.className = 'invalidMsg';
        this.invalidMsg.innerHTML = "<h4>Well, this is awkward. No search term was entered yet, so this page is a little empty right now.</h4>\n        <p>After you enter a search term in the box above, you will see the results displayed here. \n        You can also use the filters to select a content type, product or topic to see some results too. Try it out!</p>";
        this.endOfResults.innerHTML = '<p class="end-of-results">- End of Results -</p>';
        this.loadMore.className = 'moreBtn';
        this.loadMore.innerHTML = '<a class="moreBtn" href="#">Load More</a>';
        this.loading.className = 'loading';
        this.loadMore.addEventListener('click', function (e) {
            e.preventDefault();
            _this.dispatchEvent(new CustomEvent('load-more', {
                detail: {
                    from: _this.last
                },
                bubbles: true
            }));
        });
        top.addEventListener('search-complete', this._renderResults);
        top.addEventListener('search-start', this._setLoading);
        top.addEventListener('params-ready', this._checkValid);
        top.window.addEventListener('popstate', this._clearResults);
        this.addEventListener('load-more', function (e) {
            _this.more = true;
        });
    };
    RHDPSearchResults.prototype.addResult = function (result) {
        var item = new RHDPSearchResult();
        item.result = result;
        this.appendChild(item);
    };
    RHDPSearchResults.prototype._setLoading = function (e) {
        if (!this.more) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
        }
        else {
            if (this.querySelector('.moreBtn')) {
                this.removeChild(this.loadMore);
            }
            if (this.querySelector('.invalidMsg')) {
                this.removeChild(this.invalidMsg);
            }
            this.more = false;
        }
        this.appendChild(this.loading);
    };
    RHDPSearchResults.prototype._renderResults = function (e) {
        if (this.querySelector('.loading')) {
            this.removeChild(this.loading);
        }
        if (e.detail && typeof e.detail.results !== 'undefined' && typeof e.detail.invalid === 'undefined') {
            this.addResults(e.detail.results);
        }
        else {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            this.appendChild(this.invalidMsg);
        }
        this.dispatchEvent(new CustomEvent('results-loaded', {
            detail: { results: this.results },
            bubbles: true
        }));
    };
    RHDPSearchResults.prototype._clearResults = function (e) {
        this.results = undefined;
    };
    RHDPSearchResults.prototype._checkValid = function (e) {
        var obj = e.detail;
        this.valid = Object.keys(obj.filters).length > 0 || (obj.term !== null && obj.term !== '' && typeof obj.term !== 'undefined');
        if (!this.valid) {
            this.appendChild(this.invalidMsg);
        }
        else {
            if (this.querySelector('.invalidMsg')) {
                this.removeChild(this.invalidMsg);
            }
        }
    };
    RHDPSearchResults.prototype.addResults = function (results) {
        if (results && results.hits && results.hits.hits) {
            var hits = results.hits.hits;
            var l = hits.length;
            for (var i = 0; i < l; i++) {
                this.addResult(hits[i]);
            }
            this.last = this.last + l;
            if (this.last >= results.hits.total) {
                this.appendChild(this.endOfResults);
            }
            if (l > 0 && this.last < results.hits.total) {
                if (this.querySelector('.end-of-results')) {
                    this.removeChild(this.endOfResults);
                }
                this.appendChild(this.loadMore);
            }
            else {
                if (this.querySelector('.moreBtn')) {
                    this.removeChild(this.loadMore);
                }
                this.appendChild(this.endOfResults);
            }
        }
    };
    return RHDPSearchResults;
}(HTMLElement));
customElements.define('rhdp-search-results', RHDPSearchResults);
var RHDPSearchSortPage = /** @class */ (function (_super) {
    __extends(RHDPSearchSortPage, _super);
    function RHDPSearchSortPage() {
        var _this = _super.call(this) || this;
        _this.template = "<p>\n        <span>Sort results by</span>\n        <select>\n        <option value=\"relevance\">Relevance</option>\n        <option value=\"most-recent\">Most Recent</option>\n        </select>\n        </p>";
        _this._sortChange = _this._sortChange.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchSortPage.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (val) {
            if (this._sort === val)
                return;
            this._sort = val;
            this.setAttribute('sort', this._sort);
            this.querySelector('select').value = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchSortPage.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
        top.addEventListener('params-ready', this._sortChange);
        this.querySelector('select').onchange = this._sortChange;
    };
    Object.defineProperty(RHDPSearchSortPage, "observedAttributes", {
        get: function () {
            return ['sort'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchSortPage.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchSortPage.prototype._sortChange = function (e) {
        if (e.detail && e.detail.sort) {
            this.sort = e.detail.sort;
        }
        else {
            if (e.target['options'] && typeof e.target['selectedIndex'] !== 'undefined') {
                this.sort = e.target['options'][e.target['selectedIndex']].value;
                this.dispatchEvent(new CustomEvent('sort-change', {
                    detail: {
                        sort: this.sort
                    },
                    bubbles: true
                }));
            }
        }
    };
    return RHDPSearchSortPage;
}(HTMLElement));
customElements.define('rhdp-search-sort-page', RHDPSearchSortPage);
var RHDPSearchURL = /** @class */ (function (_super) {
    __extends(RHDPSearchURL, _super);
    //history.pushState({}, `Red Hat Developer Program Search: ${this.term}`, `?q=${decodeURIComponent(this.term).replace(' ', '+')}`);
    function RHDPSearchURL() {
        var _this = _super.call(this) || this;
        _this._uri = new URL(window.location.href); // https://developers.redhat.com/search/?q=term+term1+term2&f=a+b+c&s=sort&r=100
        _this._term = _this.uri.searchParams.get('t');
        _this._filters = _this._setFilters(_this.uri.searchParams.getAll('f'));
        _this._sort = _this.uri.searchParams.get('s') || 'relevance';
        _this._qty = _this.uri.searchParams.get('r');
        _this._init = true;
        _this._changeAttr = _this._changeAttr.bind(_this);
        _this._popState = _this._popState.bind(_this);
        return _this;
    }
    Object.defineProperty(RHDPSearchURL.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (val) {
            if (this._uri === val)
                return;
            this._uri = val;
            // https://developers.redhat.com/search/?q=term+term1+term2&f=a~1+2&f=b~2&f=c~1+4&s=sort&r=100
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchURL.prototype, "term", {
        get: function () {
            return this._term;
        },
        set: function (val) {
            if (this._term === val)
                return;
            this._term = val;
            this.uri.searchParams.set('t', this._term);
            this.setAttribute('term', this.term);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchURL.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        set: function (val) {
            var _this = this;
            this._filters = val;
            this.uri.searchParams.delete('f');
            Object.keys(this._filters).forEach(function (group) {
                _this.uri.searchParams.append('f', group + "~" + _this._filters[group].join(' '));
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchURL.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (val) {
            if (this._sort === val)
                return;
            this._sort = val;
            this.uri.searchParams.set('s', this._sort);
            this.setAttribute('sort', this._sort);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchURL.prototype, "qty", {
        get: function () {
            return this._qty;
        },
        set: function (val) {
            if (this._qty === val)
                return;
            this._qty = val;
            this.setAttribute('qty', this._sort);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchURL.prototype, "init", {
        get: function () {
            return this._init;
        },
        set: function (val) {
            if (this._init === val)
                return;
            this._init = val;
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchURL.prototype.connectedCallback = function () {
        //top.addEventListener('term-change', this._changeAttr);
        //top.addEventListener('filter-item-change', this._changeAttr);
        //top.addEventListener('sort-change', this._changeAttr);
        //top.addEventListener('load-more', this._changeAttr);
        top.addEventListener('search-complete', this._changeAttr);
        top.addEventListener('clear-filters', this._changeAttr);
        top.window.addEventListener('popstate', this._popState);
        // Ignoring tracking these for now
        // top.addEventListener('filter-group-toggle', this._changeAttr);
        // top.addEventListener('filter-group-more-toggle', this._changeAttr);
        this._paramsReady();
    };
    Object.defineProperty(RHDPSearchURL, "observedAttributes", {
        get: function () {
            return ['sort', 'term', 'qty'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchURL.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchURL.prototype._popState = function (e) {
        this.uri = new URL(document.location.href); // https://developers.redhat.com/search/?q=term+term1+term2&f=a+b+c&s=sort&r=100
        this.term = this.uri.searchParams.get('t') || null;
        this.filters = this._setFilters(this.uri.searchParams.getAll('f'));
        this.sort = this.uri.searchParams.get('s');
        this.qty = this.uri.searchParams.get('r');
        this._paramsReady();
    };
    RHDPSearchURL.prototype._paramsReady = function () {
        this.dispatchEvent(new CustomEvent('params-ready', {
            detail: {
                term: this.term,
                filters: this.filters,
                sort: this.sort,
                qty: this.qty
            },
            bubbles: true
        }));
    };
    RHDPSearchURL.prototype._setFilters = function (filtersQS) {
        var filters = {};
        filtersQS.forEach(function (filter) {
            var kv = filter.split('~'), k = kv[0], v = kv[1].split(' ');
            filters[k] = v;
        });
        return filters;
    };
    RHDPSearchURL.prototype._changeAttr = function (e) {
        switch (e.type) {
            case 'clear-filters':
                this.uri.searchParams.delete('f');
                this.filters = {};
                break;
            case 'load-more':// detail.qty
                break;
            case 'search-complete':// build querystring params
                // Term Change
                if (e.detail && typeof e.detail.term !== 'undefined' && e.detail.term.length > 0) {
                    this.term = e.detail.term;
                }
                else {
                    this.term = '';
                    this.uri.searchParams.delete('t');
                }
                // Filter Change
                if (e.detail && e.detail.filters) {
                    this.filters = e.detail.filters;
                }
                // Sort Change
                if (e.detail && typeof e.detail.sort !== 'undefined') {
                    this.sort = e.detail.sort;
                }
        }
        if (e.detail && typeof e.detail.invalid === 'undefined') {
            history.pushState({}, "RHDP Search: " + (this.term ? this.term : ''), "" + this.uri.pathname + this.uri.search);
        }
        else {
            this.term = '';
            this.filters = {};
            this.sort = 'relevance';
            this.uri.searchParams.delete('t');
            this.uri.searchParams.delete('f');
            this.uri.searchParams.delete('s');
            history.replaceState({}, 'RHDP Search Error', "" + this.uri.pathname + this.uri.search);
        }
    };
    return RHDPSearchURL;
}(HTMLElement));
customElements.define('rhdp-search-url', RHDPSearchURL);
// import {RHDPSearchURL} from './rhdp-search-url';
// import {RHDPSearchQuery} from './rhdp-search-query';
// import {RHDPSearchBox} from './rhdp-search-box';
// import {RHDPSearchResultCount} from './rhdp-search-result-count';
// import {RHDPSearchFilters} from './rhdp-search-filters';
// import {RHDPSearchOneBox} from './rhdp-search-onebox';
// import {RHDPSearchResults} from './rhdp-search-results';
// import {RHDPSearchSortPage} from './rhdp-search-sort-page';
var RHDPSearchApp = /** @class */ (function (_super) {
    __extends(RHDPSearchApp, _super);
    function RHDPSearchApp() {
        var _this = _super.call(this) || this;
        _this._name = 'Search';
        _this.template = "<div class=\"row\">\n    <span class=\"search-outage-msg\"></span>\n    <div class=\"large-24 medium-24 small-24 columns searchpage-middle\">\n        <div class=\"row\">\n            <div class=\"large-24 medium-24 small-24 columns\">\n                <h2>" + _this.name + "</h2>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"large-6 medium-8 small-24 columns\"></div>\n            <div class=\"large-18 medium-16 small-24 columns\"></div>\n        </div>\n    </div></div>";
        _this.urlEle = new RHDPSearchURL();
        _this.query = new RHDPSearchQuery();
        _this.box = new RHDPSearchBox();
        _this.count = new RHDPSearchResultCount();
        _this.filters = new RHDPSearchFilters();
        _this.active = new RHDPSearchFilters();
        _this.modal = new RHDPSearchFilters();
        _this.onebox = new RHDPSearchOneBox();
        _this.results = new RHDPSearchResults();
        _this.sort = new RHDPSearchSortPage();
        _this.filterObj = {
            term: '',
            facets: [
                { name: 'CONTENT TYPE', key: 'sys_type', items: [
                        { key: 'apidocs', name: 'APIs and Docs', value: ['rht_website', 'rht_apidocs'], type: ['apidocs'] },
                        { key: 'archetype', name: 'Archetype', value: ['jbossdeveloper_archetype'], type: ['jbossdeveloper_archetype'] },
                        { key: 'article', name: 'Article', value: ['article', 'solution'], type: ['rhd_knowledgebase_article', 'rht_knowledgebase_solution'] },
                        { key: 'blogpost', name: "Blog Posts", value: ['blogpost'], type: ['jbossorg_blog'] },
                        { key: 'book', name: "Book", value: ["book"], type: ["jbossdeveloper_book"] },
                        { key: 'bom', name: "BOM", value: ["jbossdeveloper_bom"], type: ['jbossdeveloper_bom'] },
                        { key: 'cheatsheet', name: "Cheat Sheet", value: ['cheatsheet'], type: ['jbossdeveloper_cheatsheet'] },
                        { key: 'demo', name: 'Demo', value: ['demo'], type: ['jbossdeveloper_demo'] },
                        { key: 'event', name: 'Event', value: ['jbossdeveloper_event'], type: ['jbossdeveloper_event'] },
                        { key: 'forum', name: 'Forum', value: ['jbossorg_sbs_forum'], type: ['jbossorg_sbs_forum'] },
                        { key: 'get-started', name: "Get Started", value: ["jbossdeveloper_example"], type: ['jbossdeveloper_example'] },
                        { key: 'quickstart', name: "Quickstart", value: ['quickstart'], type: ['jbossdeveloper_quickstart'] },
                        { key: 'stackoverflow', name: 'Stack Overflow', value: ['stackoverflow_thread'], type: ['stackoverflow_question'] },
                        { key: 'video', name: "Video", value: ["video"], type: ['jbossdeveloper_vimeo', 'jbossdeveloper_youtube'] },
                        { key: 'webpage', name: "Web Page", value: ['webpage'], type: ['rhd_website'] }
                    ]
                },
                {
                    name: 'PRODUCT',
                    key: 'product',
                    items: [
                        { key: 'dotnet', name: '.NET Runtime for Red Hat Enterprise Linux', value: ['dotnet'] },
                        { key: 'amq', name: 'JBoss A-MQ', value: ['amq'] },
                        { key: 'bpmsuite', name: 'JBoss BPM Suite', value: ['bpmsuite'] },
                        { key: 'brms', name: 'JBoss BRMS', value: ['brms'] },
                        { key: 'datagrid', name: 'JBoss Data Grid', value: ['datagrid'] },
                        { key: 'datavirt', name: 'JBoss Data Virtualization', value: ['datavirt'] },
                        { key: 'devstudio', name: 'JBoss Developer Studio', value: ['devstudio'] },
                        { key: 'eap', name: 'JBoss Enterprise Application Platform', value: ['eap'] },
                        { key: 'fuse', name: 'JBoss Fuse', value: ['fuse'] },
                        { key: 'webserver', name: 'JBoss Web Server', value: ['webserver'] },
                        { key: 'openjdk', name: 'OpenJDK', value: ['openjdk'] },
                        { key: 'rhamt', name: 'Red Hat Application Migration Toolkit', value: ['rhamt'] },
                        { key: 'cdk', name: 'Red Hat Container Development Kit', value: ['cdk'] },
                        { key: 'developertoolset', name: 'Red Hat Developer Toolset', value: ['developertoolset'] },
                        { key: 'devsuite', name: 'Red Hat Development Suite', value: ['devsuite'] },
                        { key: 'rhel', name: 'Red Hat Enterprise Linux', value: ['rhel'] },
                        { key: 'mobileplatform', name: 'Red Hat Mobile Application Platform', value: ['mobileplatform'] },
                        { key: 'openshift', name: 'Red Hat OpenShift Container Platform', value: ['openshift'] },
                        { key: 'softwarecollections', name: 'Red Hat Software Collections', value: ['softwarecollections'] }
                    ]
                },
                { name: 'TOPIC', key: 'tag', items: [
                        { key: 'dotnet', name: '.NET', value: ['dotnet', '.net', 'visual studio', 'c#'] },
                        { key: 'containers', name: 'Containers', value: ['atomic', 'cdk', 'containers'] },
                        { key: 'devops', name: 'DevOps', value: ['DevOps', 'CI', 'CD', 'Continuous Delivery'] },
                        { key: 'enterprise-java', name: 'Enterprise Java', value: ['ActiveMQ', 'AMQP', 'apache camel', 'Arquillian', 'Camel', 'CDI', 'CEP', 'CXF', 'datagrid', 'devstudio', 'Drools', 'Eclipse', 'fabric8', 'Forge', 'fuse', 'Hawkular', 'Hawtio', 'Hibernate', 'Hibernate ORM', 'Infinispan', 'iPaas', 'java ee', 'JavaEE', 'JBDS', 'JBoss', 'JBoss BPM Suite', 'JBoss BRMS', 'JBoss Data Grid', 'jboss eap', 'JBoss EAP', ''] },
                        { key: 'iot', name: 'Internet of Things', value: ['IoT', 'Internet of Things'] },
                        { key: 'microservices', name: 'Microservices', value: ['Microservices', ' WildFly Swarm'] },
                        { key: 'mobile', name: 'Mobile', value: ['Mobile', 'Red Hat Mobile', 'RHMAP', 'Cordova', 'FeedHenry'] },
                        { key: 'web-and-api-development', name: 'Web and API Development', value: ['Web', 'API', 'HTML5', 'REST', 'Camel', 'Node.js', 'RESTEasy', 'JAX-RS', 'Tomcat', 'nginx', 'Rails', 'Drupal', 'PHP', 'Bottle', 'Flask', 'Laravel', 'Dancer', 'Zope', 'TurboGears', 'Sinatra', 'httpd', 'Passenger'] },
                    ]
                }
            ]
        };
        return _this;
        //this.toggleModal = this.toggleModal.bind(this);
        //this.updateFacets = this.updateFacets.bind(this);
    }
    Object.defineProperty(RHDPSearchApp.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (this._name === val)
                return;
            this._name = val;
            this.setAttribute('name', this.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPSearchApp.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (val) {
            if (this._url === val)
                return;
            this._url = val;
            this.query.url = this.url;
            this.setAttribute('url', this.url);
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchApp.prototype.connectedCallback = function () {
        this.innerHTML = this.template;
        this.active.setAttribute('type', 'active');
        this.active.title = 'Active Filters:';
        this.modal.setAttribute('type', 'modal');
        this.modal.filters = this.filterObj;
        this.active.filters = this.filterObj;
        this.filters.filters = this.filterObj;
        this.query.filters = this.filterObj;
        //document.querySelector('.wrapper').appendChild(this.modal);
        document.body.appendChild(this.modal);
        this.querySelector('.row .large-24 .row .large-24').appendChild(this.query);
        this.querySelector('.row .large-24 .row .large-24').appendChild(this.box);
        this.querySelector('.large-6').appendChild(this.filters);
        this.querySelector('.large-18').appendChild(this.active);
        this.querySelector('.large-18').appendChild(this.count);
        this.querySelector('.large-18').appendChild(this.sort);
        this.querySelector('.large-18').appendChild(this.onebox);
        this.querySelector('.large-18').appendChild(this.results);
        document.body.appendChild(this.urlEle);
    };
    Object.defineProperty(RHDPSearchApp, "observedAttributes", {
        get: function () {
            return ['url', 'name'];
        },
        enumerable: true,
        configurable: true
    });
    RHDPSearchApp.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
    };
    RHDPSearchApp.prototype.toggleModal = function (e) {
        this.modal.toggle = e.detail.toggle;
    };
    RHDPSearchApp.prototype.updateSort = function (e) {
        this.query.sort = e.detail.sort;
        this.query.from = 0;
        this.results.last = 0;
        this.count.term = this.box.term;
    };
    return RHDPSearchApp;
}(HTMLElement));
customElements.define('rhdp-search-app', RHDPSearchApp);
