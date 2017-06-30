! function() {
    "use strict";

    function e() {
        var e = this.value,
            t = this.dataset.canonical;
        "en" === e && (e = ""), e && (e += "/"), location.href = "/" + e + t
    }
    document.getElementById("lang-select").addEventListener("change", e), document.getElementById("mobile-lang-select").addEventListener("change", e)
}(), "scrollingElement" in document || function() {
        function e(e) {
            return window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle
        }

        function t(e) {
            return window.HTMLBodyElement ? e instanceof HTMLBodyElement : /body/i.test(e.tagName)
        }

        function n(e) {
            for (var n = e; n = n.nextSibling;)
                if (1 == n.nodeType && t(n)) return n;
            return null
        }

        function o(e) {
            return "none" != e.display && !("collapse" == e.visibility && /^table-(.+-group|row|column)$/.test(e.display))
        }

        function c(t) {
            var n = e(t),
                c = e(document.documentElement);
            return "visible" != n.overflow && "visible" != c.overflow && o(n) && o(c)
        }
        var i, l = function() {
                var e = /^CSS1/.test(document.compatMode);
                if (!e) return !1;
                if (void 0 === i) {
                    var t = document.createElement("iframe");
                    t.style.height = "1px", (document.body || document.documentElement || document).appendChild(t);
                    var n = t.contentWindow.document;
                    n.write('<!DOCTYPE html><div style="height:9999em">x</div>'), n.close(), i = n.documentElement.scrollHeight > n.body.scrollHeight, t.parentNode.removeChild(t)
                }
                return i
            },
            d = function() {
                if (l()) return document.documentElement;
                var e = document.body,
                    t = e && !/body/i.test(e.tagName);
                return e = t ? n(e) : e, e && c(e) ? null : e
            };
        Object.defineProperty ? Object.defineProperty(document, "scrollingElement", { get: d }) : document.__defineGetter__ ? document.__defineGetter__("scrollingElement", d) : (document.scrollingElement = d(), document.attachEvent && document.attachEvent("onpropertychange", function() { "activeElement" == window.event.propertyName && (document.scrollingElement = d()) }))
    }(),
    function() {
        "use strict";

        function e() {
            var e = document.scrollingElement.scrollTop;
            e > c ? n.classList.add("fixed") : n.classList.remove("fixed")
        }
        var t = document.getElementById("header"),
            n = document.getElementById("article-toc"),
            o = document.getElementById("article-toc-top"),
            c = t.clientHeight;
        n && (window.addEventListener("scroll", function() { window.requestAnimationFrame(e) }), e(), o.addEventListener("click", function(e) { e.preventDefault(), document.scrollingElement.scrollTop = 0 }))
    }(),
    function() {
        "use strict";
        var e = document.getElementsByTagName("body")[0],
            t = document.getElementById("mobile-nav-toggle"),
            n = (document.getElementById("container"), document.getElementById("mobile-nav-dimmer")),
            o = "mobile-nav-on";
        t && (t.addEventListener("click", function(t) { t.preventDefault(), t.stopPropagation(), e.classList.toggle(o) }), n.addEventListener("click", function(t) { e.classList.contains(o) && (t.preventDefault(), e.classList.remove(o)) }))
    }();
