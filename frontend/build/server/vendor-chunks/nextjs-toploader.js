/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nextjs-toploader";
exports.ids = ["vendor-chunks/nextjs-toploader"];
exports.modules = {

/***/ "(ssr)/./node_modules/nextjs-toploader/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/nextjs-toploader/dist/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* __next_internal_client_entry_do_not_use__  cjs */ \nvar J = Object.create;\nvar y = Object.defineProperty;\nvar X = Object.getOwnPropertyDescriptor;\nvar _ = Object.getOwnPropertyNames;\nvar D = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty;\nvar a = (r, o)=>y(r, \"name\", {\n        value: o,\n        configurable: !0\n    });\nvar Q = (r, o)=>{\n    for(var i in o)y(r, i, {\n        get: o[i],\n        enumerable: !0\n    });\n}, M = (r, o, i, g)=>{\n    if (o && typeof o == \"object\" || typeof o == \"function\") for (let c of _(o))!G.call(r, c) && c !== i && y(r, c, {\n        get: ()=>o[c],\n        enumerable: !(g = X(o, c)) || g.enumerable\n    });\n    return r;\n};\nvar N = (r, o, i)=>(i = r != null ? J(D(r)) : {}, M(o || !r || !r.__esModule ? y(i, \"default\", {\n        value: r,\n        enumerable: !0\n    }) : i, r)), V = (r)=>M(y({}, \"__esModule\", {\n        value: !0\n    }), r);\nvar Z = {};\nQ(Z, {\n    default: ()=>Y\n});\nmodule.exports = V(Z);\nvar t = N(__webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\")), v = N(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\")), s = N(__webpack_require__(/*! nprogress */ \"(ssr)/./node_modules/nprogress/nprogress.js\"));\nvar O = a(({ color: r, height: o, showSpinner: i, crawl: g, crawlSpeed: c, initialPosition: L, easing: T, speed: E, shadow: x, template: k, zIndex: H = 1600, showAtBottom: S = !1, showForHashAnchor: z = !0 })=>{\n    let C = \"#29d\", m = r != null ? r : C, K = o != null ? o : 3, W = !x && x !== void 0 ? \"\" : x ? `box-shadow:${x}` : `box-shadow:0 0 10px ${m},0 0 5px ${m}`, j = v.createElement(\"style\", null, `#nprogress{pointer-events:none}#nprogress .bar{background:${m};position:fixed;z-index:${H};${S ? \"bottom: 0;\" : \"top: 0;\"}left:0;width:100%;height:${K}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${W};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${H};${S ? \"bottom: 15px;\" : \"top: 15px;\"}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${m};border-left-color:${m};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`), u = a((h)=>new URL(h, window.location.href).href, \"toAbsoluteURL\"), B = a((h, f)=>{\n        let l = new URL(u(h)), b = new URL(u(f));\n        return l.href.split(\"#\")[0] === b.href.split(\"#\")[0];\n    }, \"isHashAnchor\"), F = a((h, f)=>{\n        let l = new URL(u(h)), b = new URL(u(f));\n        return l.hostname.replace(/^www\\./, \"\") === b.hostname.replace(/^www\\./, \"\");\n    }, \"isSameHostName\");\n    return v.useEffect({\n        \"O.useEffect\": ()=>{\n            s.configure({\n                showSpinner: i != null ? i : !0,\n                trickle: g != null ? g : !0,\n                trickleSpeed: c != null ? c : 200,\n                minimum: L != null ? L : .08,\n                easing: T != null ? T : \"ease\",\n                speed: E != null ? E : 200,\n                template: k != null ? k : '<div class=\"bar\" role=\"bar\"><div class=\"peg\"></div></div><div class=\"spinner\" role=\"spinner\"><div class=\"spinner-icon\"></div></div>'\n            });\n            function h(e, d) {\n                let n = new URL(e), p = new URL(d);\n                if (n.hostname === p.hostname && n.pathname === p.pathname && n.search === p.search) {\n                    let w = n.hash, P = p.hash;\n                    return w !== P && n.href.replace(w, \"\") === p.href.replace(P, \"\");\n                }\n                return !1;\n            }\n            a(h, \"isAnchorOfCurrentUrl\");\n            var f = document.querySelectorAll(\"html\");\n            let l = a({\n                \"O.useEffect.l\": ()=>f.forEach({\n                        \"O.useEffect.l\": (e)=>e.classList.remove(\"nprogress-busy\")\n                    }[\"O.useEffect.l\"])\n            }[\"O.useEffect.l\"], \"removeNProgressClass\");\n            function b(e) {\n                for(; e && e.tagName.toLowerCase() !== \"a\";)e = e.parentElement;\n                return e;\n            }\n            a(b, \"findClosestAnchor\");\n            function A(e) {\n                try {\n                    let d = e.target, n = b(d), p = n == null ? void 0 : n.href;\n                    if (p) {\n                        let w = window.location.href, P = n.target === \"_blank\", q = [\n                            \"tel:\",\n                            \"mailto:\",\n                            \"sms:\",\n                            \"blob:\",\n                            \"download:\"\n                        ].some({\n                            \"O.useEffect.A.q\": (I)=>p.startsWith(I)\n                        }[\"O.useEffect.A.q\"]);\n                        if (!F(window.location.href, n.href)) return;\n                        let $ = h(w, p) || B(window.location.href, n.href);\n                        if (!z && $) return;\n                        p === w || P || q || $ || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || !u(n.href).startsWith(\"http\") ? (s.start(), s.done(), l()) : s.start();\n                    }\n                } catch (d) {\n                    s.start(), s.done();\n                }\n            }\n            a(A, \"handleClick\"), ({\n                \"O.useEffect\": (e)=>{\n                    let d = e.pushState;\n                    e.pushState = ({\n                        \"O.useEffect\": (...n)=>(s.done(), l(), d.apply(e, n))\n                    })[\"O.useEffect\"];\n                }\n            })[\"O.useEffect\"](window.history), ({\n                \"O.useEffect\": (e)=>{\n                    let d = e.replaceState;\n                    e.replaceState = ({\n                        \"O.useEffect\": (...n)=>(s.done(), l(), d.apply(e, n))\n                    })[\"O.useEffect\"];\n                }\n            })[\"O.useEffect\"](window.history);\n            function R() {\n                s.done(), l();\n            }\n            a(R, \"handlePageHide\");\n            function U() {\n                s.done();\n            }\n            return a(U, \"handleBackAndForth\"), window.addEventListener(\"popstate\", U), document.addEventListener(\"click\", A), window.addEventListener(\"pagehide\", R), ({\n                \"O.useEffect\": ()=>{\n                    document.removeEventListener(\"click\", A), window.removeEventListener(\"pagehide\", R), window.removeEventListener(\"popstate\", U);\n                }\n            })[\"O.useEffect\"];\n        }\n    }[\"O.useEffect\"], []), j;\n}, \"NextTopLoader\"), Y = O;\nO.propTypes = {\n    color: t.string,\n    height: t.number,\n    showSpinner: t.bool,\n    crawl: t.bool,\n    crawlSpeed: t.number,\n    initialPosition: t.number,\n    easing: t.string,\n    speed: t.number,\n    template: t.string,\n    shadow: t.oneOfType([\n        t.string,\n        t.bool\n    ]),\n    zIndex: t.number,\n    showAtBottom: t.bool\n}; /**\n *\n * NextTopLoader\n * @license MIT\n * @param {NextTopLoaderProps} props The properties to configure NextTopLoader\n * @returns {React.JSX.Element}\n *\n */  //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dGpzLXRvcGxvYWRlci9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxJQUFBO0FBQUFDLEVBQUFELEdBQUE7SUFBQSxhQUFBRTtBQUFBQTtBQUFBLGlCQUFBQyxFQUFBSDtBQU1BLElBQUFJLElBQTJCLHNGQUMzQkMsSUFBdUIsMkhBQ3ZCQyxJQUEyQjtBQTJGM0IsSUFBTUMsSUFBZ0JDLEVBQUEsQ0FBQyxFQUNyQixPQUFPQyxDQUFBQSxFQUNQLFFBQVFDLENBQUFBLEVBQ1IsYUFBQUMsQ0FBQUEsRUFDQSxPQUFBQyxDQUFBQSxFQUNBLFlBQUFDLENBQUFBLEVBQ0EsaUJBQUFDLENBQUFBLEVBQ0EsUUFBQUMsQ0FBQUEsRUFDQSxPQUFBQyxDQUFBQSxFQUNBLFFBQUFDLENBQUFBLEVBQ0EsVUFBQUMsQ0FBQUEsRUFDQSxRQUFBQyxJQUFTLE1BQ1QsY0FBQUMsSUFBZSxJQUNmLG1CQUFBQyxJQUFvQixFQUN0QixLQUE2QztJQUMzQyxJQUFNQyxJQUFlLFFBR2ZDLElBQVFkLEtBQUEsT0FBQUEsSUFBYWEsR0FDckJFLElBQVNkLEtBQUEsT0FBQUEsSUFBYyxHQUd2QmUsSUFDSixDQUFDUixLQUFVQSxNQUFXLFNBQ2xCLEtBQ0FBLElBQ0UsY0FBY0EsR0FBQUEsR0FDZCx1QkFBdUJNLEVBQUFBLFNBQUFBLEVBQWlCQSxHQUFBQSxFQVMxQ0csSUFDSixnQkFBQyxlQUNFLDZEQUE2REgsRUFBQUEsd0JBQUFBLEVBQWdDSixFQUFBQSxDQUFBQSxFQVI1RUMsSUFBZSxlQUFlLHFDQVFpR0ksRUFBQUEsbUZBQUFBLEVBQTRGQyxFQUFBQSxpTkFBQUEsRUFBNk5OLEVBQUFBLENBQUFBLEVBUGpiQyxJQUFlLGtCQUFrQiw4SUFPZ2pCRyxFQUFBQSxtQkFBQUEsRUFBMkJBLEVBQUFBLHNlQUFBQSxDQUN2b0IsR0FRSUksSUFBZ0JuQixHQUFDb0IsSUFDZCxJQUFJ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Q2xCLGFBQXVCO0lBQ3ZCLE9BQWlCO0lBQ2pCLFlBQXNCO0lBQ3RCLGlCQUEyQjtJQUMzQixRQUFrQjtJQUNsQixPQUFpQjtJQUNqQixVQUFvQjtJQUNwQixRQUFrQixZQUFVO1FBQVc7UUFBa0IsTUFBSTtLQUFDO0lBQzlELFFBQWtCO0lBQ2xCLGNBQXdCO0FBQzFCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEpvaG5DaHJpc3RpYW5CZXJib25cXERvY3VtZW50c1xcQmVyYm9uIC0gVHJhaW5pbmdcXEZST05URU5EXFxHcmVzaGFtJTIwUmVjb3JkaW5nc1xcc3JjXFxpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuLy8gZGVuby10cy1pZ25vcmUtZmlsZVxuLy8gZGVuby1saW50LWlnbm9yZS1maWxlXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5cbi8vIEBkZW5vLXR5cGVzID1cIm5wbTpwcmVhY3RAMTAuMTkuNlwiXG5cbi8vIEBkZW5vLXR5cGVzID1cIm5wbTpucHJvZ3Jlc3NAMC4yLjJcIlxuXG4vLyBAZGVuby10eXBlcyA9XCJucG06QHR5cGVzL3JlYWN0QDE4LjIuNjZcIlxuXG5leHBvcnQgdHlwZSBOZXh0VG9wTG9hZGVyUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBDb2xvciBmb3IgdGhlIFRvcExvYWRlci5cbiAgICogQGRlZmF1bHQgXCIjMjlkXCJcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGluaXRpYWwgcG9zaXRpb24gZm9yIHRoZSBUb3BMb2FkZXIgaW4gcGVyY2VudGFnZSwgMC4wOCBpcyA4JS5cbiAgICogQGRlZmF1bHQgMC4wOFxuICAgKi9cbiAgaW5pdGlhbFBvc2l0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGluY3JlYW1lbnQgZGVsYXkgc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBAZGVmYXVsdCAyMDBcbiAgICovXG4gIGNyYXdsU3BlZWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IGZvciB0aGUgVG9wTG9hZGVyIGluIHBpeGVscyAocHgpLlxuICAgKiBAZGVmYXVsdCAzXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBBdXRvIGluY3JlYW1lbnRpbmcgYmVoYXZpb3VyIGZvciB0aGUgVG9wTG9hZGVyLlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjcmF3bD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUbyBzaG93IHNwaW5uZXIgb3Igbm90LlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBzaG93U3Bpbm5lcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbmltYXRpb24gc2V0dGluZ3MgdXNpbmcgZWFzaW5nIChhIENTUyBlYXNpbmcgc3RyaW5nKS5cbiAgICogQGRlZmF1bHQgXCJlYXNlXCJcbiAgICovXG4gIGVhc2luZz86IHN0cmluZztcbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBzcGVlZCBpbiBtcyBmb3IgdGhlIFRvcExvYWRlci5cbiAgICogQGRlZmF1bHQgMjAwXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbiAgLyoqXG4gICAqIERlZmluZXMgYSBzaGFkb3cgZm9yIHRoZSBUb3BMb2FkZXIuXG4gICAqIEBkZWZhdWx0IFwiMCAwIDEwcHggJHtjb2xvcn0sMCAwIDVweCAke2NvbG9yfVwiXG4gICAqXG4gICAqIEAgeW91IGNhbiBkaXNhYmxlIGl0IGJ5IHNldHRpbmcgaXQgdG8gYGZhbHNlYFxuICAgKi9cbiAgc2hhZG93Pzogc3RyaW5nIHwgZmFsc2U7XG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgdGVtcGxhdGUgZm9yIHRoZSBUb3BMb2FkZXIuXG4gICAqIEBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cImJhclwiIHJvbGU9XCJiYXJcIj48ZGl2IGNsYXNzPVwicGVnXCI+PC9kaXY+PC9kaXY+XG4gICAqIDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgcm9sZT1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwic3Bpbm5lci1pY29uXCI+PC9kaXY+PC9kaXY+XCJcbiAgICovXG4gIHRlbXBsYXRlPzogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lcyB6SW5kZXggZm9yIHRoZSBUb3BMb2FkZXIuXG4gICAqIEBkZWZhdWx0IDE2MDBcbiAgICpcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRvIHNob3cgdGhlIFRvcExvYWRlciBhdCBib3R0b20uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqXG4gICAqL1xuICBzaG93QXRCb3R0b20/OiBib29sZWFuO1xuICAvKipcbiAgICogVG8gc2hvdyB0aGUgVG9wTG9hZGVyIGZvciBoYXNoIGFuY2hvcnMuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICpcbiAgICovXG4gIHNob3dGb3JIYXNoQW5jaG9yPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICpcbiAqIE5leHRUb3BMb2FkZXJcbiAqIEBsaWNlbnNlIE1JVFxuICogQHBhcmFtIHtOZXh0VG9wTG9hZGVyUHJvcHN9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIHRvIGNvbmZpZ3VyZSBOZXh0VG9wTG9hZGVyXG4gKiBAcmV0dXJucyB7UmVhY3QuSlNYLkVsZW1lbnR9XG4gKlxuICovXG5cbmNvbnN0IE5leHRUb3BMb2FkZXIgPSAoe1xuICBjb2xvcjogcHJvcENvbG9yLFxuICBoZWlnaHQ6IHByb3BIZWlnaHQsXG4gIHNob3dTcGlubmVyLFxuICBjcmF3bCxcbiAgY3Jhd2xTcGVlZCxcbiAgaW5pdGlhbFBvc2l0aW9uLFxuICBlYXNpbmcsXG4gIHNwZWVkLFxuICBzaGFkb3csXG4gIHRlbXBsYXRlLFxuICB6SW5kZXggPSAxNjAwLFxuICBzaG93QXRCb3R0b20gPSBmYWxzZSxcbiAgc2hvd0Zvckhhc2hBbmNob3IgPSB0cnVlLFxufTogTmV4dFRvcExvYWRlclByb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBkZWZhdWx0Q29sb3IgPSAnIzI5ZCc7XG4gIGNvbnN0IGRlZmF1bHRIZWlnaHQgPSAzO1xuXG4gIGNvbnN0IGNvbG9yID0gcHJvcENvbG9yID8/IGRlZmF1bHRDb2xvcjtcbiAgY29uc3QgaGVpZ2h0ID0gcHJvcEhlaWdodCA/PyBkZWZhdWx0SGVpZ2h0O1xuXG4gIC8vIEFueSBmYWxzeSAoZXhjZXB0IHVuZGVmaW5lZCkgd2lsbCBkaXNhYmxlIHRoZSBzaGFkb3dcbiAgY29uc3QgYm94U2hhZG93ID1cbiAgICAhc2hhZG93ICYmIHNoYWRvdyAhPT0gdW5kZWZpbmVkXG4gICAgICA/ICcnXG4gICAgICA6IHNoYWRvd1xuICAgICAgICA/IGBib3gtc2hhZG93OiR7c2hhZG93fWBcbiAgICAgICAgOiBgYm94LXNoYWRvdzowIDAgMTBweCAke2NvbG9yfSwwIDAgNXB4ICR7Y29sb3J9YDtcblxuICAvLyBDaGVjayBpZiB0byBzaG93IGF0IGJvdHRvbVxuICBjb25zdCBwb3NpdGlvblN0eWxlID0gc2hvd0F0Qm90dG9tID8gJ2JvdHRvbTogMDsnIDogJ3RvcDogMDsnO1xuICBjb25zdCBzcGlubmVyUG9zaXRpb25TdHlsZSA9IHNob3dBdEJvdHRvbSA/ICdib3R0b206IDE1cHg7JyA6ICd0b3A6IDE1cHg7JztcblxuICAvKipcbiAgICogQ1NTIFN0eWxlcyBmb3IgdGhlIE5leHRUb3BMb2FkZXJcbiAgICovXG4gIGNvbnN0IHN0eWxlcyA9IChcbiAgICA8c3R5bGU+XG4gICAgICB7YCNucHJvZ3Jlc3N7cG9pbnRlci1ldmVudHM6bm9uZX0jbnByb2dyZXNzIC5iYXJ7YmFja2dyb3VuZDoke2NvbG9yfTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OiR7ekluZGV4fTske3Bvc2l0aW9uU3R5bGV9bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OiR7aGVpZ2h0fXB4fSNucHJvZ3Jlc3MgLnBlZ3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7d2lkdGg6MTAwcHg7aGVpZ2h0OjEwMCU7JHtib3hTaGFkb3d9O29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwtNHB4KTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LC00cHgpO3RyYW5zZm9ybTpyb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwtNHB4KX0jbnByb2dyZXNzIC5zcGlubmVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoke3pJbmRleH07JHtzcGlubmVyUG9zaXRpb25TdHlsZX1yaWdodDoxNXB4fSNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbnt3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3AtY29sb3I6JHtjb2xvcn07Ym9yZGVyLWxlZnQtY29sb3I6JHtjb2xvcn07Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC1hbmltYXRpb246bnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGV9Lm5wcm9ncmVzcy1jdXN0b20tcGFyZW50e292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyLC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlfUAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lcnswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1gfVxuICAgIDwvc3R5bGU+XG4gICk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHVybCB0byBBYnNvbHV0ZSBVUkwgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2luZG93IGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdCB0b0Fic29sdXRlVVJMID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gbmV3IFVSTCh1cmwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5ocmVmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBpcyBoYXNoIGFuY2hvciBvciBzYW1lIHBhZ2UgYW5jaG9yXG4gICAqIEBwYXJhbSBjdXJyZW50VXJsIHtzdHJpbmd9IEN1cnJlbnQgVXJsIExvY2F0aW9uXG4gICAqIEBwYXJhbSBuZXdVcmwge3N0cmluZ30gTmV3IFVybCBkZXRlY3RlZCB3aXRoIGVhY2ggYW5jaG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNIYXNoQW5jaG9yID0gKGN1cnJlbnRVcmw6IHN0cmluZywgbmV3VXJsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFVSTCh0b0Fic29sdXRlVVJMKGN1cnJlbnRVcmwpKTtcbiAgICBjb25zdCBuZXh0ID0gbmV3IFVSTCh0b0Fic29sdXRlVVJMKG5ld1VybCkpO1xuICAgIHJldHVybiBjdXJyZW50LmhyZWYuc3BsaXQoJyMnKVswXSA9PT0gbmV4dC5ocmVmLnNwbGl0KCcjJylbMF07XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGlzIFNhbWUgSG9zdCBuYW1lXG4gICAqIEBwYXJhbSBjdXJyZW50VXJsIHtzdHJpbmd9IEN1cnJlbnQgVXJsIExvY2F0aW9uXG4gICAqIEBwYXJhbSBuZXdVcmwge3N0cmluZ30gTmV3IFVybCBkZXRlY3RlZCB3aXRoIGVhY2ggYW5jaG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNTYW1lSG9zdE5hbWUgPSAoY3VycmVudFVybDogc3RyaW5nLCBuZXdVcmw6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXcgVVJMKHRvQWJzb2x1dGVVUkwoY3VycmVudFVybCkpO1xuICAgIGNvbnN0IG5leHQgPSBuZXcgVVJMKHRvQWJzb2x1dGVVUkwobmV3VXJsKSk7XG4gICAgcmV0dXJuIGN1cnJlbnQuaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi8sICcnKSA9PT0gbmV4dC5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogUmV0dXJuVHlwZTxSZWFjdC5FZmZlY3RDYWxsYmFjaz4gPT4ge1xuICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICAgICAgc2hvd1NwaW5uZXI6IHNob3dTcGlubmVyID8/IHRydWUsXG4gICAgICB0cmlja2xlOiBjcmF3bCA/PyB0cnVlLFxuICAgICAgdHJpY2tsZVNwZWVkOiBjcmF3bFNwZWVkID8/IDIwMCxcbiAgICAgIG1pbmltdW06IGluaXRpYWxQb3NpdGlvbiA/PyAwLjA4LFxuICAgICAgZWFzaW5nOiBlYXNpbmcgPz8gJ2Vhc2UnLFxuICAgICAgc3BlZWQ6IHNwZWVkID8/IDIwMCxcbiAgICAgIHRlbXBsYXRlOlxuICAgICAgICB0ZW1wbGF0ZSA/P1xuICAgICAgICAnPGRpdiBjbGFzcz1cImJhclwiIHJvbGU9XCJiYXJcIj48ZGl2IGNsYXNzPVwicGVnXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInNwaW5uZXJcIiByb2xlPVwic3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJzcGlubmVyLWljb25cIj48L2Rpdj48L2Rpdj4nLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIEN1cnJlbnQgVXJsIGlzIHNhbWUgYXMgTmV3IFVybFxuICAgICAqIEBwYXJhbSBjdXJyZW50VXJsIHtzdHJpbmd9XG4gICAgICogQHBhcmFtIG5ld1VybCB7c3RyaW5nfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQW5jaG9yT2ZDdXJyZW50VXJsKGN1cnJlbnRVcmw6IHN0cmluZywgbmV3VXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmxPYmogPSBuZXcgVVJMKGN1cnJlbnRVcmwpO1xuICAgICAgY29uc3QgbmV3VXJsT2JqID0gbmV3IFVSTChuZXdVcmwpO1xuICAgICAgLy8gQ29tcGFyZSBob3N0bmFtZSwgcGF0aG5hbWUsIGFuZCBzZWFyY2ggcGFyYW1ldGVyc1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50VXJsT2JqLmhvc3RuYW1lID09PSBuZXdVcmxPYmouaG9zdG5hbWUgJiZcbiAgICAgICAgY3VycmVudFVybE9iai5wYXRobmFtZSA9PT0gbmV3VXJsT2JqLnBhdGhuYW1lICYmXG4gICAgICAgIGN1cnJlbnRVcmxPYmouc2VhcmNoID09PSBuZXdVcmxPYmouc2VhcmNoXG4gICAgICApIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG5ldyBVUkwgaXMganVzdCBhbiBhbmNob3Igb2YgdGhlIGN1cnJlbnQgVVJMIHBhZ2VcbiAgICAgICAgY29uc3QgY3VycmVudEhhc2ggPSBjdXJyZW50VXJsT2JqLmhhc2g7XG4gICAgICAgIGNvbnN0IG5ld0hhc2ggPSBuZXdVcmxPYmouaGFzaDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjdXJyZW50SGFzaCAhPT0gbmV3SGFzaCAmJiBjdXJyZW50VXJsT2JqLmhyZWYucmVwbGFjZShjdXJyZW50SGFzaCwgJycpID09PSBuZXdVcmxPYmouaHJlZi5yZXBsYWNlKG5ld0hhc2gsICcnKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGRlbm8tbGludC1pZ25vcmUgbm8tdmFyXG4gICAgdmFyIG5Qcm9ncmVzc0NsYXNzOiBOb2RlTGlzdE9mPEhUTUxIdG1sRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdodG1sJyk7XG5cbiAgICBjb25zdCByZW1vdmVOUHJvZ3Jlc3NDbGFzcyA9ICgpOiB2b2lkID0+XG4gICAgICBuUHJvZ3Jlc3NDbGFzcy5mb3JFYWNoKChlbDogRWxlbWVudCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbnByb2dyZXNzLWJ1c3knKSk7XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBjbG9zZXN0IGFuY2hvciB0byB0cmlnZ2VyXG4gICAgICogQHBhcmFtIGVsZW1lbnQge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgKiBAcmV0dXJucyBlbGVtZW50IHtFbGVtZW50fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRDbG9zZXN0QW5jaG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCk6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCB7XG4gICAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCB7TW91c2VFdmVudH1cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBhbmNob3IgPSBmaW5kQ2xvc2VzdEFuY2hvcih0YXJnZXQpO1xuICAgICAgICBjb25zdCBuZXdVcmwgPSBhbmNob3I/LmhyZWY7XG4gICAgICAgIGlmIChuZXdVcmwpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgLy8gY29uc3QgbmV3VXJsID0gKGFuY2hvciBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZjtcbiAgICAgICAgICBjb25zdCBpc0V4dGVybmFsTGluayA9IChhbmNob3IgYXMgSFRNTEFuY2hvckVsZW1lbnQpLnRhcmdldCA9PT0gJ19ibGFuayc7XG5cbiAgICAgICAgICAvLyBDaGVjayBmb3IgU3BlY2lhbCBTY2hlbWVzXG4gICAgICAgICAgY29uc3QgaXNTcGVjaWFsU2NoZW1lID0gWyd0ZWw6JywgJ21haWx0bzonLCAnc21zOicsICdibG9iOicsICdkb3dubG9hZDonXS5zb21lKChzY2hlbWUpID0+XG4gICAgICAgICAgICBuZXdVcmwuc3RhcnRzV2l0aChzY2hlbWUpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IG5vdFNhbWVIb3N0ID0gIWlzU2FtZUhvc3ROYW1lKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBhbmNob3IuaHJlZik7XG4gICAgICAgICAgaWYgKG5vdFNhbWVIb3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNBbmNob3JPckhhc2hBbmNob3IgPVxuICAgICAgICAgICAgaXNBbmNob3JPZkN1cnJlbnRVcmwoY3VycmVudFVybCwgbmV3VXJsKSB8fCBpc0hhc2hBbmNob3Iod2luZG93LmxvY2F0aW9uLmhyZWYsIGFuY2hvci5ocmVmKTtcbiAgICAgICAgICBpZiAoIXNob3dGb3JIYXNoQW5jaG9yICYmIGlzQW5jaG9yT3JIYXNoQW5jaG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV3VXJsID09PSBjdXJyZW50VXJsIHx8XG4gICAgICAgICAgICBpc0V4dGVybmFsTGluayB8fFxuICAgICAgICAgICAgaXNTcGVjaWFsU2NoZW1lIHx8XG4gICAgICAgICAgICBpc0FuY2hvck9ySGFzaEFuY2hvciB8fFxuICAgICAgICAgICAgZXZlbnQuY3RybEtleSB8fFxuICAgICAgICAgICAgZXZlbnQubWV0YUtleSB8fFxuICAgICAgICAgICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICAgICAgICAgIGV2ZW50LmFsdEtleSB8fFxuICAgICAgICAgICAgIXRvQWJzb2x1dGVVUkwoYW5jaG9yLmhyZWYpLnN0YXJ0c1dpdGgoJ2h0dHAnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICAgICAgcmVtb3ZlTlByb2dyZXNzQ2xhc3MoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gTG9nIHRoZSBlcnJvciBpbiBkZXZlbG9wbWVudCBvbmx5IVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTmV4dFRvcExvYWRlciBlcnJvcjogJywgZXJyKTtcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGxldGUgVG9wTG9hZGVyIFByb2dyZXNzIG9uIGFkZGluZyBuZXcgZW50cnkgdG8gaGlzdG9yeSBzdGFja1xuICAgICAqIEBwYXJhbSB7SGlzdG9yeX1cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICAoKGhpc3Rvcnk6IEhpc3RvcnkpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHB1c2hTdGF0ZSA9IGhpc3RvcnkucHVzaFN0YXRlO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICByZW1vdmVOUHJvZ3Jlc3NDbGFzcygpO1xuICAgICAgICByZXR1cm4gcHVzaFN0YXRlLmFwcGx5KGhpc3RvcnksIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KSgod2luZG93IGFzIFdpbmRvdykuaGlzdG9yeSk7XG5cbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZSBUb3BMb2FkZXIgUHJvZ3Jlc3Mgb24gcmVwbGFjaW5nIGN1cnJlbnQgZW50cnkgb2YgaGlzdG9yeSBzdGFja1xuICAgICAqIEBwYXJhbSB7SGlzdG9yeX1cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICAoKGhpc3Rvcnk6IEhpc3RvcnkpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VTdGF0ZSA9IGhpc3RvcnkucmVwbGFjZVN0YXRlO1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICByZW1vdmVOUHJvZ3Jlc3NDbGFzcygpO1xuICAgICAgICByZXR1cm4gcmVwbGFjZVN0YXRlLmFwcGx5KGhpc3RvcnksIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KSgod2luZG93IGFzIFdpbmRvdykuaGlzdG9yeSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQYWdlSGlkZSgpOiB2b2lkIHtcbiAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICByZW1vdmVOUHJvZ3Jlc3NDbGFzcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBCcm93c2VyIEJhY2sgYW5kIEZvcnRoIE5hdmlnYXRpb25cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVCYWNrQW5kRm9ydGgoKTogdm9pZCB7XG4gICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZ2xvYmFsIGNsaWNrIGV2ZW50IGxpc3RlbmVyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgaGFuZGxlQmFja0FuZEZvcnRoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBoYW5kbGVQYWdlSGlkZSk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZ2xvYmFsIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBoYW5kbGVQYWdlSGlkZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBoYW5kbGVCYWNrQW5kRm9ydGgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gc3R5bGVzO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5leHRUb3BMb2FkZXI7XG5cbk5leHRUb3BMb2FkZXIucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93U3Bpbm5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNyYXdsOiBQcm9wVHlwZXMuYm9vbCxcbiAgY3Jhd2xTcGVlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBlYXNpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0ZW1wbGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hhZG93OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dBdEJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl0sIm5hbWVzIjpbInNyY19leHBvcnRzIiwiX19leHBvcnQiLCJzcmNfZGVmYXVsdCIsIl9fdG9Db21tb25KUyIsIlByb3BUeXBlcyIsIlJlYWN0IiwiTlByb2dyZXNzIiwiTmV4dFRvcExvYWRlciIsIl9fbmFtZSIsInByb3BDb2xvciIsInByb3BIZWlnaHQiLCJzaG93U3Bpbm5lciIsImNyYXdsIiwiY3Jhd2xTcGVlZCIsImluaXRpYWxQb3NpdGlvbiIsImVhc2luZyIsInNwZWVkIiwic2hhZG93IiwidGVtcGxhdGUiLCJ6SW5kZXgiLCJzaG93QXRCb3R0b20iLCJzaG93Rm9ySGFzaEFuY2hvciIsImRlZmF1bHRDb2xvciIsImNvbG9yIiwiaGVpZ2h0IiwiYm94U2hhZG93Iiwic3R5bGVzIiwidG9BYnNvbHV0ZVVSTCIsInVybCIsImlzSGFzaEFuY2hvciIsImN1cnJlbnRVcmwiLCJuZXdVcmwiLCJjdXJyZW50IiwibmV4dCIsImlzU2FtZUhvc3ROYW1lIiwiaXNBbmNob3JPZkN1cnJlbnRVcmwiLCJjdXJyZW50VXJsT2JqIiwibmV3VXJsT2JqIiwiY3VycmVudEhhc2giLCJuZXdIYXNoIiwiblByb2dyZXNzQ2xhc3MiLCJyZW1vdmVOUHJvZ3Jlc3NDbGFzcyIsImVsIiwiZmluZENsb3Nlc3RBbmNob3IiLCJlbGVtZW50IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInRhcmdldCIsImFuY2hvciIsImlzRXh0ZXJuYWxMaW5rIiwiaXNTcGVjaWFsU2NoZW1lIiwic2NoZW1lIiwiaXNBbmNob3JPckhhc2hBbmNob3IiLCJlcnIiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiYXJncyIsInJlcGxhY2VTdGF0ZSIsImhhbmRsZVBhZ2VIaWRlIiwiaGFuZGxlQmFja0FuZEZvcnRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nextjs-toploader/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/nextjs-toploader/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/nextjs-toploader/dist/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js")

module.exports = createProxy("C:\\Users\\JohnChristianBerbon\\Documents\\Berbon - Training\\FRONTEND\\Gresham%20Recordings\\frontend\\node_modules\\nextjs-toploader\\dist\\index.js")


/***/ })

};
;