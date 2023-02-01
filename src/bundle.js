var app = function() { "use strict";

    function t() {}

    function e(t) { return t() }

    function n() { return Object.create(null) }

    function o(t) { t.forEach(e) }

    function r(t) { return "function" == typeof t }

    function a(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t } let i, c;

    function s(t, e) { return i || (i = document.createElement("a")), i.href = e, t === i.href }

    function l(t, e) { t.appendChild(e) }

    function d(t, e, n) { const o = function(t) { if (!t) return document; const e = t.getRootNode ? t.getRootNode() : t.ownerDocument; if (e && e.host) return e; return t.ownerDocument }(t); if (!o.getElementById(e)) { const t = f("style");
            t.id = e, t.textContent = n,
                function(t, e) { l(t.head || t, e), e.sheet }(o, t) } }

    function u(t) { t.parentNode && t.parentNode.removeChild(t) }

    function f(t) { return document.createElement(t) }

    function p(t) { return document.createTextNode(t) }

    function x() { return p(" ") }

    function h(t, e, n) { null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n) }

    function m(t, e) { e = "" + e, t.wholeText !== e && (t.data = e) }

    function g(t) { c = t } const v = [],
        $ = [],
        y = [],
        b = [],
        w = Promise.resolve(); let _ = !1;

    function k(t) { y.push(t) } const E = new Set; let N = 0;

    function q() { if (0 !== N) return; const t = c;
        do { try { for (; N < v.length;) { const t = v[N];
                    N++, g(t), A(t.$$) } } catch (t) { throw v.length = 0, N = 0, t } for (g(null), v.length = 0, N = 0; $.length;) $.pop()(); for (let t = 0; t < y.length; t += 1) { const e = y[t];
                E.has(e) || (E.add(e), e()) }
            y.length = 0 } while (v.length); for (; b.length;) b.pop()();
        _ = !1, E.clear(), g(t) }

    function A(t) { if (null !== t.fragment) { t.update(), o(t.before_update); const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(k) } } const S = new Set;

    function P(t, e) { t && t.i && (S.delete(t), t.i(e)) }

    function H(t, n, a, i) { const { fragment: c, after_update: s } = t.$$;
        c && c.m(n, a), i || k((() => { const n = t.$$.on_mount.map(e).filter(r);
            t.$$.on_destroy ? t.$$.on_destroy.push(...n) : o(n), t.$$.on_mount = [] })), s.forEach(k) }

    function T(t, e) { const n = t.$$;
        null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []) }

    function j(t, e) {-1 === t.$$.dirty[0] && (v.push(t), _ || (_ = !0, w.then(q)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 }

    function C(e, r, a, i, s, l, d, f = [-1]) { const p = c;
        g(e); const x = e.$$ = { fragment: null, ctx: [], props: l, update: t, not_equal: s, bound: n(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(r.context || (p ? p.$$.context : [])), callbacks: n(), dirty: f, skip_bound: !1, root: r.target || p.$$.root };
        d && d(x.root); let h = !1; if (x.ctx = a ? a(e, r.props || {}, ((t, n, ...o) => { const r = o.length ? o[0] : n; return x.ctx && s(x.ctx[t], x.ctx[t] = r) && (!x.skip_bound && x.bound[t] && x.bound[t](r), h && j(e, t)), n })) : [], x.update(), h = !0, o(x.before_update), x.fragment = !!i && i(x.ctx), r.target) { if (r.hydrate) { const t = function(t) { return Array.from(t.childNodes) }(r.target);
                x.fragment && x.fragment.l(t), t.forEach(u) } else x.fragment && x.fragment.c();
            r.intro && P(e.$$.fragment), H(e, r.target, r.anchor, r.customElement), q() }
        g(p) }
    class O { $destroy() { T(this, 1), this.$destroy = t }
        $on(e, n) { if (!r(n)) return t; const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []); return o.push(n), () => { const t = o.indexOf(n); - 1 !== t && o.splice(t, 1) } }
        $set(t) { var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1) } }

    function z(t) { d(t, "svelte-4aaxx9", '.custom-card.svelte-4aaxx9.svelte-4aaxx9{position:relative;width:581px;height:581px;background:#000}.custom-card.svelte-4aaxx9 .image.svelte-4aaxx9{width:100%;height:100%;overflow:hidden}.custom-card.svelte-4aaxx9 .image img.svelte-4aaxx9{width:100%;transition:0.3s}.custom-card.svelte-4aaxx9:hover .image img.svelte-4aaxx9{opacity:0.5;transform:translateX(30%)}.custom-card.svelte-4aaxx9 .details.svelte-4aaxx9{position:absolute;top:0;left:0;width:70%;height:100%;background:#dadada;transition:0.3s;opacity:0}.custom-card.svelte-4aaxx9:hover .details.svelte-4aaxx9{opacity:1}.custom-card.svelte-4aaxx9 .details .center.svelte-4aaxx9{padding:20px;text-align:center;background:#fff;position:absolute;top:50%;transform:translateY(-50%);border-radius:0 10px 10px 0;padding:24px}.custom-card.svelte-4aaxx9 .details .center h1.svelte-4aaxx9{margin:0;padding:0;color:#333;line-height:20px;font-size:28px;text-transform:uppercase;font-family:"Nike Futura", "Helvetica Neue", Helvetica, Arial, sans-s}.custom-card.svelte-4aaxx9 .details .center p.svelte-4aaxx9{margin:10px 0;padding:0;color:#262626;font-size:22px;font-weight:bold;font-family:"Nike Futura", "Helvetica Neue", Helvetica, Arial, sans-s}') }

    function B(e) { let n, o, r, a, i, c, d, g, v, $, y, b, w, _, k, E, N = e[0].title + "",
            q = e[0].price + ""; return { c() { n = f("div"), o = f("div"), r = f("img"), i = x(), c = f("div"), d = f("span"), g = x(), v = f("div"), $ = f("h1"), y = p(N), b = x(), w = f("p"), _ = p(q), s(r.src, a = e[0].img) || h(r, "src", a), h(r, "class", "svelte-4aaxx9"), h(o, "class", "image svelte-4aaxx9"), h($, "class", "svelte-4aaxx9"), h(w, "class", "svelte-4aaxx9"), h(v, "class", "center svelte-4aaxx9"), h(c, "class", "details svelte-4aaxx9"), h(n, "class", "custom-card svelte-4aaxx9") }, m(t, a) { var s, u, f, p;! function(t, e, n) { t.insertBefore(e, n || null) }(t, n, a), l(n, o), l(o, r), l(n, i), l(n, c), l(c, d), l(c, g), l(c, v), l(v, $), l($, y), l(v, b), l(v, w), l(w, _), k || (s = n, u = "click", f = e[1], s.addEventListener(u, f, p), E = () => s.removeEventListener(u, f, p), k = !0) }, p(t, [e]) { 1 & e && !s(r.src, a = t[0].img) && h(r, "src", a), 1 & e && N !== (N = t[0].title + "") && m(y, N), 1 & e && q !== (q = t[0].price + "") && m(_, q) }, i: t, o: t, d(t) { t && u(n), k = !1, E() } } }

    function D(t, e, n) { let { data: o } = e;
        console.log(o); return t.$$set = t => { "data" in t && n(0, o = t.data) }, [o, () => window.location.href = o.link] }
    class F extends O { constructor(t) { super(), C(this, t, D, B, a, { data: 0 }, z) } }

    function L(t) { d(t, "svelte-1pbqnu4", "\r\n      #ciclp-app\r\n        > div\r\n        > div:nth-child(5)\r\n        .grid-row\r\n        .grid-col\r\n        .slider\r\n        li.slide\r\n        > *:not(.custom-card)\r\n    {display:none}") }

    function R(t) { let e, n; return e = new F({ props: { data: t[0] } }), { c() { var t;
                (t = e.$$.fragment) && t.c() }, m(t, o) { H(e, t, o), n = !0 }, p(t, [n]) { const o = {};
                1 & n && (o.data = t[0]), e.$set(o) }, i(t) { n || (P(e.$$.fragment, t), n = !0) }, o(t) {! function(t, e, n, o) { if (t && t.o) { if (S.has(t)) return;
                        S.add(t), (void 0).c.push((() => { S.delete(t), o && (n && t.d(1), o()) })), t.o(e) } else o && o() }(e.$$.fragment, t), n = !1 }, d(t) { T(e, t) } } }

    function I(t, e, n) { let { dataProduct: o } = e; return console.log("this works!"), t.$$set = t => { "dataProduct" in t && n(0, o = t.dataProduct) }, [o] }
    class M extends O { constructor(t) { super(), C(this, t, I, R, a, { dataProduct: 0 }, L) } } return document.querySelectorAll("#ciclp-app > div > div:nth-child(5) .grid-row .grid-col .slider li.slide").forEach(((t, e) => { console.log(t); const n = t.querySelector("img").src,
            o = t.querySelector("div > a > div > div > h4").innerText,
            r = t.querySelector(".price-wrapper > span").innerText,
            a = t.querySelector("div > a").href;
        new M({ target: t, props: { dataProduct: { img: n, title: o, price: r, link: a } } }) })), app }();
//# sourceMappingURL=bundle.js.map