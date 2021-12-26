(function(t) {
    function e(e) {
        for (var n, o, r = e[0], l = e[1], c = e[2], p = 0, d = []; p < r.length; p++) o = r[p], Object.prototype.hasOwnProperty.call(s, o) && s[o] && d.push(s[o][0]), s[o] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        u && u(e);
        while (d.length) d.shift()();
        return i.push.apply(i, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], n = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== s[l] && (n = !1)
            }
            n && (i.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var n = {},
        s = { app: 0 },
        i = [];

    function o(e) { if (n[e]) return n[e].exports; var a = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports }
    o.m = t, o.c = n, o.d = function(t, e, a) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, o.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(a, n, function(e) { return t[e] }.bind(null, n));
        return a
    }, o.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var u = l;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) { t.exports = a("56d7") },
    "034f": function(t, e, a) {
        "use strict";
        a("85ec")
    },
    1: function(t, e) {},
    10: function(t, e) {},
    11: function(t, e) {},
    12: function(t, e) {},
    13: function(t, e) {},
    14: function(t, e) {},
    15: function(t, e) {},
    16: function(t, e) {},
    17: function(t, e) {},
    18: function(t, e) {},
    19: function(t, e) {},
    2: function(t, e) {},
    20: function(t, e) {},
    21: function(t, e) {},
    22: function(t, e) {},
    23: function(t, e) {},
    24: function(t, e) {},
    25: function(t, e) {},
    26: function(t, e) {},
    27: function(t, e) {},
    28: function(t, e) {},
    29: function(t, e) {},
    3: function(t, e) {},
    30: function(t, e) {},
    31: function(t, e) {},
    32: function(t, e) {},
    33: function(t, e) {},
    34: function(t, e) {},
    4: function(t, e) {},
    5: function(t, e) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"),
            s = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { attrs: { id: "app" } }, [a("header", [a("nav", { staticClass: "navbar navbar-expand-md navbar-dark fixed-top bg-dark" }, [a("div", { staticClass: "container-fluid" }, [t._m(0), t._m(1), t._m(2), a("div", { staticClass: "action" }, [a("div", { staticClass: "custom-button-wrapper" }, [a("button", { staticClass: "button", on: { click: function(e) { return t.bagla() } } }, [t._v(" " + t._s(t.connectionwallet()) + " ")])])])])])]), a("section", { attrs: { id: "topSection" } }, [a("div", { attrs: { id: "mintModule" } }, [t._m(3), a("div", { staticClass: "mint-button-increment-decrement" }, [a("div", { staticClass: "increment-decrement" }, [a("div", { staticClass: "decrement-wrapper incdec-wrapper" }, [a("a", { staticClass: "mint-incdec-button-style", attrs: { id: "buttonDecrement" }, on: { click: function(e) { return t.incrementValueks() } } }, [a("img", { attrs: { src: "assets/img/minus.png", alt: "" } })])]), a("input", { attrs: { type: "text", id: "piece", name: "piece" }, domProps: { value: t.mintcount }, on: { input: function(e) { t.mintcount = e.target.value } } }), a("div", { staticClass: "increment-wrapper incdec-wrapper" }, [a("a", { staticClass: "mint-incdec-button-style", attrs: { id: "buttonIncrement" }, on: { click: function(e) { return t.incrementValue() } } }, [a("img", { attrs: { src: "assets/img/plus.png", alt: "" } })])])]), a("div", { staticClass: "mint-button-wrapper" }, [a("a", { staticClass: "mint-button", on: { click: function(e) { return t.buyFameApePublic() } } }, [t._v("MINT")])])])]), a("div", { staticClass: "animated-mouse-down" }, [a("a", { attrs: { href: "#aboutSection" } }, [a("svg", { staticStyle: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "1.5" }, attrs: { width: "30px", height: "100%", viewBox: "0 0 247 390", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" } }, [a("path", { staticStyle: { fill: "none", stroke: "#ffffff", "stroke-width": "30px" }, attrs: { id: "wheel", d: "M123.359,79.775l0,72.843" } }), a("path", { staticStyle: { fill: "none", stroke: "#ffffff", "stroke-width": "30px" }, attrs: { id: "mouse", d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" } })])])])]), t._m(4), t._m(5), t._m(6), t._m(7), t._m(8), t._m(9)])
            },
            i = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "social-media-module" }, [a("ul", { staticClass: "social-list" }, [a("li", { staticClass: "social-item" }, [a("a", { attrs: { href: "https://twitter.com/cwpcrypto" } }, [a("img", { attrs: { src: "assets/img/twitter.png", alt: "" } })])]), a("li", { staticClass: "social-item" }, [a("a", { attrs: { href: "https://t.me/CleanWaterProjectOfficial" } }, [a("img", { attrs: { src: "assets/img/instagram.png", alt: "" } })])]), a("li", { staticClass: "social-item" }, [a("a", { attrs: { href: "#" } }, [a("img", { attrs: { src: "assets/img/discord.png", alt: "" } })])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("button", { staticClass: "navbar-toggler", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarCollapse", "aria-controls": "navbarCollapse", "aria-expanded": "false", "aria-label": "Toggle navigation" } }, [a("span", { staticClass: "navbar-toggl-icon" }, [a("input", { attrs: { type: "checkbox", id: "menu_checkbox" } }), a("label", { attrs: { for: "menu_checkbox" } }, [a("div"), a("div"), a("div")])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "collapse navbar-collapse", attrs: { id: "navbarCollapse" } }, [a("ul", { staticClass: "navbar-nav me-auto mb-2 mb-md-0" }, [a("li", { staticClass: "nav-item" }, [a("a", { staticClass: "nav-link active", attrs: { "aria-current": "page", href: "#aboutSection" } }, [t._v("Home")])]), a("li", { staticClass: "nav-item" }, [a("a", { staticClass: "nav-link active", attrs: { "aria-current": "page", href: "#aboutSection" } }, [t._v("About Us")])]), a("li", { staticClass: "nav-item" }, [a("a", { staticClass: "nav-link active", attrs: { "aria-current": "page", href: "#roadMapSection" } }, [t._v("Roadmap")])]), a("li", { staticClass: "nav-item" }, [a("a", { staticClass: "nav-link active", attrs: { "aria-current": "page", href: "#faqSection" } }, [t._v("Faq")])]), a("li", { staticClass: "nav-item" }, [a("a", { staticClass: "nav-link active", attrs: { "aria-current": "page", href: "#futuresSection" } }, [t._v("Traits")])]), a("li", { staticClass: "nav-item" }, [a("a", { staticClass: "nav-link active", attrs: { "aria-current": "page", href: "#videoSection" } }, [t._v("CWP NFTs")])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "head" }, [a("h1", [t._v(" CLEAN WATER PROJECT ( CWP ) ")]), a("h1", [t._v(" Mint Your CWP Now ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", { attrs: { id: "aboutSection" } }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "inner-row" }, [a("div", { staticClass: "left" }, [a("div", { staticClass: "head" }, [a("h2", [a("span", { staticClass: "left" }, [t._v(" WELCOME TO ")]), a("span", { staticClass: "right" }, [t._v(" CLEAN WATER PROJECT ")])])]), a("div", { staticClass: "description" }, [a("p", [t._v(" Aside from all the information about what CWP is and what we want to do is, what about the people behind it?  Well we are still a small team. The core team is based in Western Canada. Alberta and Yukon. We also have people contributing their knowledge and expertise from many spots on the globe. As we grow in size and become a force in ability, our team will fully DOXX. ")])])]), a("div", { staticClass: "right image-right" }, [a("img", { attrs: { src: "assets/img/famousapegif1.png", alt: "gif" } })])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", { attrs: { id: "roadMapSection" } }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "section-top" }, [a("div", { staticClass: "head" }, [a("h2", [t._v(" OUR ROADMAP ")])])]), a("div", { staticClass: "section-bottom" }, [a("ul", { staticClass: "road-list" }, [a("li", { staticClass: "road-item" }, [a("span", { staticClass: "percent" }, [t._v(" Q1 – 2021 ")]), a("span", { staticClass: "road-map-description" }, [a("p", [t._v(" Stealth launch on Pancake V2 "), a("br"), t._v(" Release info website "), a("br"), t._v(" First use case – NFT minting for upcoming game Neveroff"), a("br"), t._v(" Soft marketing start ")])])]), a("li", { staticClass: "road-item" }, [a("span", { staticClass: "percent" }, [t._v(" Q1 – 2021 ")]), a("span", { staticClass: "road-map-description" }, [a("p", [t._v(" First charity recipient announcement "), a("br"), t._v(" Launch of CWP platform "), a("br"), t._v(" CMC and CG listing "), a("br"), t._v(" Charity recipient list increased ")])])]), a("li", { staticClass: "road-item" }, [a("span", { staticClass: "percent" }, [t._v(" Q2 – 2022 ")]), a("span", { staticClass: "road-map-description" }, [a("p"), t._v(" CWP platform expansion. "), a("br"), t._v(" Staking "), a("br"), t._v(" Release of CWP NFT ")])]), a("li", { staticClass: "road-item" }, [a("span", { staticClass: "percent" }, [t._v(" Q3– 2022 ")]), a("span", { staticClass: "road-map-description" }, [a("p", [t._v(" Coming Soon ")])])]), ])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", { attrs: { id: "faqSection" } }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "head" }, [a("h2", [t._v(" FAQ ")])]), a("div", { staticClass: "default-accordion" }, [a("div", { staticClass: "accordion", attrs: { id: "accordionExample" } }, [a("div", { staticClass: "accordion-item" }, [a("h2", { staticClass: "accordion-header", attrs: { id: "headingOne" } }, [a("button", { staticClass: "accordion-button collapsed", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne" } }, [a("span", [t._v(" What is CWP? ")])])]), a("div", { staticClass: "accordion-collapse collapse", attrs: { id: "collapseOne", "aria-labelledby": "headingOne", "data-bs-parent": "#accordionExample" } }, [a("div", { staticClass: "accordion-body" }, [a("h3", [t._v(" We are a charity seeking to fix clean water issues around the world. ")])])])]), a("div", { staticClass: "accordion-item" }, [a("h2", { staticClass: "accordion-header", attrs: { id: "headingTwo" } }, [a("button", { staticClass: "accordion-button collapsed", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseTwo", "aria-expanded": "false", "aria-controls": "collapseTwo" } }, [a("span", [t._v(" How do I buy CWP? ")])])]), a("div", { staticClass: "accordion-collapse collapse", attrs: { id: "collapseTwo", "aria-labelledby": "headingTwo", "data-bs-parent": "#accordionExample" } }, [a("div", { staticClass: "accordion-body" }, [a("h3", [t._v(" Currently the only place to buy it is from Pancakeswap V2, though you can use inbetween sites like poocoin ")])])])]), a("div", { staticClass: "accordion-item" }, [a("h2", { staticClass: "accordion-header", attrs: { id: "headingThree" } }, [a("button", { staticClass: "accordion-button collapsed", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseThree", "aria-expanded": "false", "aria-controls": "collapseThree" } }, [a("span", [t._v(" When is the launch date? ")])])]), a("div", { staticClass: "accordion-collapse collapse", attrs: { id: "collapseThree", "aria-labelledby": "headingThree", "data-bs-parent": "#accordionExample" } }, [a("div", { staticClass: "accordion-body" }, [a("h3", [t._v(" Soon "), a("br"), t._v(" ...... ")])])])]), a("div", { staticClass: "accordion-item" }, [a("h2", { staticClass: "accordion-header", attrs: { id: "headingFour" } }, [a("button", { staticClass: "accordion-button collapsed", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseFour", "aria-expanded": "false", "aria-controls": "collapseFour" } }, [a("span", [t._v(" What about Mint Price? ")])])]), a("div", { staticClass: "accordion-collapse collapse", attrs: { id: "collapseFour", "aria-labelledby": "headingFour", "data-bs-parent": "#accordionExample" } }, [a("div", { staticClass: "accordion-body" }, [a("h3", [t._v(" 50 Billion CWP mint price  ")])])])]), a("div", { staticClass: "accordion-item" }, [a("h2", { staticClass: "accordion-header", attrs: { id: "headingFive" } }, [a("button", { staticClass: "accordion-button collapsed", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseFive", "aria-expanded": "false", "aria-controls": "collapseFive" } }, [a("span", [t._v(" Do you have a limit for minting? ")])])]), a("div", { staticClass: "accordion-collapse collapse", attrs: { id: "collapseFive", "aria-labelledby": "headingFive", "data-bs-parent": "#accordionExample" } }, [a("div", { staticClass: "accordion-body" }, [a("h3", [t._v("Mint limit per member is 1.")])])])])]), a("div", { staticClass: "accordion-item" }, [a("h2", { staticClass: "accordion-header", attrs: { id: "headingSix" } }, [a("button", { staticClass: "accordion-button collapsed", attrs: { type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseSix", "aria-expanded": "false", "aria-controls": "collapseFive" } }, [a("span", [t._v(" What can I do with CWP? ")])])]), a("div", { staticClass: "accordion-collapse collapse", attrs: { id: "collapseSix", "aria-labelledby": "headingSix", "data-bs-parent": "#accordionExample" } }, [a("div", { staticClass: "accordion-body" }, [a("h3", [t._v(" It’s a reflection token as well. Meaning your stack will grow just by holding it. But we have many utilities in the works. NFT minting, games, staking. Lots to come! ")])])])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", { attrs: { id: "futuresSection" } }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "left" }, [a("div", { staticClass: "head" }, [a("h3", [t._v(" RARITY ")])]), a("div", { staticClass: "left-bottom" }, [a("ul", { staticClass: "futures-list" }, [a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 22.5K ")]), a("span", { staticClass: "inner-right" }, [t._v(" Total CWP NFTs ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 00 ")]), a("span", { staticClass: "inner-right" }, [t._v(" Skins ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 00 ")]), a("span", { staticClass: "inner-right" }, [t._v(" Heading ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 00")]), a("span", { staticClass: "inner-right" }, [t._v(" Heading ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 00 ")]), a("span", { staticClass: "inner-right" }, [t._v(" Heading ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 00 ")]), a("span", { staticClass: "inner-right" }, [t._v(" Heading ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 00 ")]), a("span", { staticClass: "inner-right" }, [t._v(" Heading ")])]), a("li", { staticClass: "futures-item" }, [a("span", { staticClass: "inner-left" }, [t._v(" 33 ")]), a("span", { staticClass: "inner-right" }, [t._v(" Backgrounds ")])])])])]), a("div", { staticClass: "right" }, [a("img", { attrs: { src: "assets/img/rarity-bg.png", alt: "" } })])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", { attrs: { id: "videoSection" } }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "head" }, [a("h2", [t._v(" CWP NFTs  ")])]), a("div", { staticClass: "videos" }, [a("figure", [a("img", { attrs: { src: "assets/img/1.gif", alt: "" } }), a("p", [t._v(" CleanWaterProject has minted a coin that will act as the native currency to our platform. It can be traded, held, used for purchasing merchandise and other items as well as used for the gaming end of our platform, just incase you wanted to put your skills in some fun, simple games against other CleanWaterProject members. There is even a nice prize pot twist to the gaming. ")])]), a("figure", [a("img", { attrs: { src: "assets/img/2.gif", alt: "" } }), a("p", [t._v(" Clean Water is something so necessary for every living thing. It is hard to fathom that in this day and age we still have this issue plaguing as many communities as it does. While clean water is a problem in many parts of the developing world, it is also a problem right here inside our own borders. CleanWaterProject is based in Canada ")])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("footer", { attrs: { id: "footerSection" } }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "footer-column" }, [a("div", { staticClass: "column-head" }, [t._v("  ")]), a("ul", { staticClass: "column-list" }, [a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "" } }, [t._v("  ")])]), a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v("  ")])]), a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v("  ")])])])]), a("div", { staticClass: "footer-column" }, [a("div", { staticClass: "column-head" }, [t._v(" ")]), a("ul", { staticClass: "column-list" }, [a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v(" ")])]), a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v("@ CleanWaterProject 2022 ")])]), a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v("  ")])])])]), a("div", { staticClass: "footer-column" }, [a("div", { staticClass: "column-head" }, [t._v("  ")]), a("ul", { staticClass: "column-list" }, [a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v(" ")])]), a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "#" } }, [t._v("  ")])]), a("li", { staticClass: "column-item" }, [a("a", { attrs: { href: "" } }, [t._v("  ")])])])]), a("div", { staticClass: "footer-column social-media" }, [a("div", { staticClass: "column-head" }, [t._v(" Connect ")]), a("ul", { staticClass: "column-list" }, [a("li", { staticClass: "social-item" }, [a("a", { attrs: { href: "https://twitter.com/cwpcrypto" } }, [a("img", { attrs: { src: "assets/img/twitter.png", alt: "" } })])]), a("li", { staticClass: "social-item" }, [a("a", { attrs: { href: "https://t.me/CleanWaterProjectOfficial" } }, [a("img", { attrs: { src: "assets/img/instagram.png", alt: "" } })])]), a("li", { staticClass: "social-item" }, [a("a", { attrs: { href: "#" } }, [a("img", { attrs: { src: "assets/img/discord.png", alt: "" } })])])])])]), a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "footer-images" }, [a("div", { staticClass: "image" }, [a("img", { attrs: { src: "assets/img/f1.png", alt: "" } })]), a("div", { staticClass: "image" }, [a("img", { attrs: { src: "assets/img/f2.png", alt: "" } })]), a("div", { staticClass: "image" }, [a("img", { attrs: { src: "assets/img/f3.png", alt: "" } })]), a("div", { staticClass: "image" }, [a("img", { attrs: { src: "assets/img/f4.png", alt: "" } })]), a("div", { staticClass: "image hidden-xs" }, [a("img", { attrs: { src: "assets/img/f5.png", alt: "" } })]), a("div", { staticClass: "image hidden-xs" }, [a("img", { attrs: { src: "assets/img/f6.png", alt: "" } })]), a("div", { staticClass: "image hidden-xs" }, [a("img", { attrs: { src: "assets/img/f7.png", alt: "" } })]), a("div", { staticClass: "image hidden-xs" }, [a("img", { attrs: { src: "assets/img/f8.png", alt: "" } })])])])])
            }],
            o = a("1da1"),
            r = a("3835"),
            l = (a("96cf"), a("b680"), a("d3b7"), a("25f0"), a("99e5")),
            c = a.n(l),
            u = function() { return new Promise((function(t) { window.addEventListener("load", (function() { window.ethereum ? t(window.ethereum) : window.web3 ? (window.web3 = new c.a(window.web3.currentProvider), t("no")) : (t(null), console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")) })) })) },
            p = u,
            d = a("2eaf"),
            m = function() { var t = new d["a"]({ infuraId: "19aeeccb1bc542b894a80eeffc995007" }); return t },
            f = m,
            y = [{ inputs: [{ internalType: "string", name: "_initBaseURI", type: "string" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "approved", type: "address" }, { indexed: !0, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "operator", type: "address" }, { indexed: !1, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "previousOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "from", type: "address" }, { indexed: !0, internalType: "address", name: "to", type: "address" }, { indexed: !0, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [], name: "MAXSUPPLY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "MAX_SELF_MINT", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "baseURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "mainAddress", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "workflow", outputs: [{ internalType: "enum FamousApeMovieClub.WorkflowStatus", name: "", type: "uint8" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [], name: "publicSaleLimit", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "pure", type: "function", constant: !0 }, { inputs: [], name: "getSaleStatus", outputs: [{ internalType: "enum FamousApeMovieClub.WorkflowStatus", name: "", type: "uint8" }], stateMutability: "view", type: "function", constant: !0 }, { inputs: [{ internalType: "bytes32", name: "message", type: "bytes32" }, { internalType: "bytes", name: "sig", type: "bytes" }], name: "recoverSigner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "pure", type: "function", constant: !0 }, { inputs: [{ internalType: "bytes", name: "sig", type: "bytes" }], name: "splitSignature", outputs: [{ internalType: "uint8", name: "", type: "uint8" }, { internalType: "bytes32", name: "", type: "bytes32" }, { internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "pure", type: "function", constant: !0 }, { inputs: [{ internalType: "bytes32", name: "messageHash", type: "bytes32" }, { internalType: "bytes", name: "signature", type: "bytes" }, { internalType: "uint256", name: "ammount", type: "uint256" }], name: "presaleMint", outputs: [], stateMutability: "payable", type: "function", payable: !0 }, { inputs: [{ internalType: "uint256", name: "ammount", type: "uint256" }], name: "publicSaleMint", outputs: [], stateMutability: "payable", type: "function", payable: !0 }, { inputs: [], name: "setUpPresale", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setUpBeforesale", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "setUpSale", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }], name: "setBaseURI", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_newAddress", type: "address" }], name: "setSignerAddress", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "withdrawAll", outputs: [], stateMutability: "payable", type: "function", payable: !0 }, { inputs: [{ internalType: "address", name: "_newwalladdress", type: "address" }], name: "changeWallet", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function", constant: !0 }],
            b = y,
            v = a("6467"),
            h = v,
            g = a("bc3a"),
            w = a.n(g),
            C = "0x5EA6b858dd5EAA1851da7E65d63a1B9D2f46b045",
            _ = {
                name: "App",
                data: function() { return { signsay: 0, meta: null, cnwallet: null, newweb3: null, wallet: !1, test11: null, mintcount: 1, web3: null, account: null, contractInstance: null, gene: null, matron: null, sire: null, vipers: [], isLoading: !1, keccak: null, sign: null, signs: {}, wallets2: ["0x7150DdcABE48b7dC983B269d0EC40bB5c54df877"], wallets: ["0x51dBB33E4638A30C108cC5a4421b7617B86768F2", "0xaa5dab3f0e522bdf1bc71b7e4f4571c459f32f7f", "0x33E194ab6eA7d9923AC6986629F708714bB6e6bB", "0x639c93E5511462aCd49628b4EDC9BEd71b0c8361"] } },
                mounted: function() {
                    var t = this;
                    p().then((function(e) {
                        console.log("r1"), console.log(e), console.log("r2"), t.newweb3 = e, t.web3 = new c.a(window.ethereum), null != e && (null == e.selectedAddress ? t.wallet = !1 : (t.web3.eth.getAccounts().then((function(e) {
                            console.log(e);
                            var a = Object(r["a"])(e, 1);
                            t.account = a[0], t.wallet = !0, t.meta = !0
                        })), t.contractInstance = new t.web3.eth.Contract(b, C), console.log(t.account), t.wallet = !0))
                    }))
                },
                components: {},
                methods: {
                    connectionwallet: function() { return 0 == this.wallet ? "Connection Wallet" : (this.meta, "Connected") },
                    thanks: function() { alert("Thank you so much! SOLD OUT !!") },
                    mintotalethpublic: function() {
                        var t = (.12 * this.mintcount).toFixed(2),
                            e = t.toString();
                        return e
                    },
                    mintotaleth: function() {
                        var t = (.08 * this.mintcount).toFixed(2),
                            e = t.toString();
                        return console.log(e), e
                    },
                    incrementValue: function() { this.mintcount < 1 && (this.mintcount += 1, console.log(this.mintcount)) },
                    incrementValueks: function() { this.mintcount > 1 && this.mintcount-- },
                    kontrol: function() { this.mintcount > 1 && alert("Max 1") },
                    bagla: function() {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            var a, n;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.newweb3 != window.ethereum || null == t.newweb3) { e.next = 5; break }
                                        t.web3 = new c.a(window.ethereum), 0 == t.wallet && (t.newweb3.enable().then((function() {
                                            t.web3.eth.getAccounts().then((function(e) {
                                                console.log(e);
                                                var a = Object(r["a"])(e, 1);
                                                t.account = a[0], t.wallet = !0, t.meta = !0
                                            }))
                                        })), t.contractInstance = new t.web3.eth.Contract(b, C)), e.next = 26;
                                        break;
                                    case 5:
                                        return e.prev = 5, t.cnwallet = f(), e.next = 9, t.cnwallet.enable();
                                    case 9:
                                        return t.cnwallet.on("disconnect", Object(o["a"])(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, t.cnwallet.disconnect();
                                                    case 2:
                                                        return e.next = 4, t.cnwallet.close();
                                                    case 4:
                                                        t.wallet = !1;
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))), t.web3 = new c.a(t.cnwallet), e.next = 13, t.web3.eth.getAccounts();
                                    case 13:
                                        a = e.sent, t.contractInstance = new t.web3.eth.Contract(b, C), n = Object(r["a"])(a, 1), t.account = n[0], console.log("ac1"), console.log(t.account), t.wallet = !0, t.meta = !1, e.next = 26;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e["catch"](5), console.log(e.t0);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 23]
                            ])
                        })))()
                    },
                    buyFameApe: function() {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t.mintcount > 1)) { e.next = 4; break }
                                        alert("Max 1"), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, w.a.get("https://sign.famousapemovieclub.io/api.famousapemovieclub.io/sign/" + t.account, { headers: { "X-Requested-With": "XMLHttpRequest" } }).then((function(e) { console.log(e), void 0 == e.data || null == e.data || "" == e.data || " " == e.data ? alert("Sorry!! You are not in whitelist") : (console.log(e.data.sign), console.log(t.mintcount), console.log(t.account), console.log(t.mintotaleth()), t.contractInstance.methods.presaleMint(e.data.keccak, e.data.sign, t.mintcount).send({ from: t.account, value: t.web3.utils.toWei(t.mintotaleth(), "ether") }).then((function(e) { console.log("recipt" + e), t.isLoading = !1 })).catch((function(e) { console.log(e, "err"), t.isLoading = !1 }))) })).catch((function(t) { console.log(t) }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    buyFameApePublic: function() {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.mintcount > 1 ? alert("Max 1") : t.contractInstance.methods.publicSaleMint(t.mintcount).send({ from: t.account, value: t.web3.utils.toWei(t.mintotalethpublic(), "ether") }).then((function(e) { console.log("recipt" + e), t.isLoading = !1 })).catch((function(e) { console.log(e, "err"), t.isLoading = !1 }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    signgetir: function() {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.signgetir().then((function(t) { console.log("res2"), console.log(t), console.log("res1") })).catch((function(t) { console.log(t) }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    signfunc2: function() {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            var a, n;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, console.log("test"), 0 != t.wallets.length) { e.next = 15; break }
                                        return e.prev = 3, a = JSON.stringify(t.signs), console.log("dadad"), console.log(a), e.next = 9, w.a.get("http://192.168.1.2:3000/test/" + a);
                                    case 9:
                                        alert("bitti"), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e["catch"](3), console.log(e.t0);
                                    case 15:
                                        n = h.hash.keccak256([{ type: "uint256", value: t.wallets[0] }]), t.web3.eth.sign(n, "0x454359b0ba79eEC5331dE58077AF2B2b2576639F").then((function(e) { console.log("ok5"), console.log(e), t.signsay += 1, console.log(t.signsay), t.signs[t.wallets[0]] = { keccak: n, sign: e }, t.wallets.shift() })).catch((function(t) { console.log(t) })), console.log("test2"), e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e["catch"](0), console.log(e.t1);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 20],
                                [3, 12]
                            ])
                        })))()
                    },
                    buyBunny: function() {
                        var t = this;
                        this.mintcount < 21 ? (this.isLoading = !0, this.contractInstance.methods.mintBunny(this.account, this.mintcount).send({ from: this.account, value: this.web3.utils.toWei(this.mintotaleth(), "ether") }).then((function(e) { console.log("recipt" + e), t.isLoading = !1 })).catch((function(e) { console.log(e, "err"), t.isLoading = !1 }))) : alert("Max 20")
                    }
                }
            },
            T = _,
            x = (a("034f"), a("2877")),
            M = Object(x["a"])(T, s, i, !1, null, null, null),
            k = M.exports;
        n["a"].config.productionTip = !1, new n["a"]({ render: function(t) { return t(k) } }).$mount("#app")
    },
    6: function(t, e) {},
    7: function(t, e) {},
    8: function(t, e) {},
    "85ec": function(t, e, a) {},
    9: function(t, e) {}
});
//# sourceMappingURL=app.3ef7eb46.js.map