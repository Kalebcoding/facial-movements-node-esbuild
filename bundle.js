var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/@mediapipe/tasks-vision/vision_bundle.cjs
var require_vision_bundle = __commonJS({
  "node_modules/@mediapipe/tasks-vision/vision_bundle.cjs"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var t = "undefined" != typeof self ? self : {};
    function e(e2, n2) {
      e2 = e2.split(".");
      var r2, i2 = t;
      e2[0] in i2 || void 0 === i2.execScript || i2.execScript("var " + e2[0]);
      for (; e2.length && (r2 = e2.shift()); ) e2.length || void 0 === n2 ? i2 = i2[r2] && i2[r2] !== Object.prototype[r2] ? i2[r2] : i2[r2] = {} : i2[r2] = n2;
    }
    function n() {
      throw Error("Invalid UTF8");
    }
    function r(t2, e2) {
      return e2 = String.fromCharCode.apply(null, e2), null == t2 ? e2 : t2 + e2;
    }
    var i;
    var s;
    var o = "undefined" != typeof TextDecoder;
    var a;
    var c = "undefined" != typeof TextEncoder;
    function h(t2) {
      if (c) t2 = (a ||= new TextEncoder()).encode(t2);
      else {
        let n2 = 0;
        const r2 = new Uint8Array(3 * t2.length);
        for (let i2 = 0; i2 < t2.length; i2++) {
          var e2 = t2.charCodeAt(i2);
          if (e2 < 128) r2[n2++] = e2;
          else {
            if (e2 < 2048) r2[n2++] = e2 >> 6 | 192;
            else {
              if (e2 >= 55296 && e2 <= 57343) {
                if (e2 <= 56319 && i2 < t2.length) {
                  const s2 = t2.charCodeAt(++i2);
                  if (s2 >= 56320 && s2 <= 57343) {
                    e2 = 1024 * (e2 - 55296) + s2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                    continue;
                  }
                  i2--;
                }
                e2 = 65533;
              }
              r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
            }
            r2[n2++] = 63 & e2 | 128;
          }
        }
        t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
      }
      return t2;
    }
    var u;
    var l;
    t: {
      for (f = ["CLOSURE_FLAGS"], d = t, p = 0; p < f.length; p++) if (null == (d = d[f[p]])) {
        l = null;
        break t;
      }
      l = d;
    }
    var f;
    var d;
    var p;
    var g;
    var m = l && l[610401301];
    u = null != m && m;
    var y = t.navigator;
    function _(t2) {
      return !!u && (!!g && g.brands.some(({ brand: e2 }) => e2 && -1 != e2.indexOf(t2)));
    }
    function v(e2) {
      var n2;
      return (n2 = t.navigator) && (n2 = n2.userAgent) || (n2 = ""), -1 != n2.indexOf(e2);
    }
    function E() {
      return !!u && (!!g && g.brands.length > 0);
    }
    function w() {
      return E() ? _("Chromium") : (v("Chrome") || v("CriOS")) && !(!E() && v("Edge")) || v("Silk");
    }
    function T(t2) {
      return T[" "](t2), t2;
    }
    g = y && y.userAgentData || null, T[" "] = function() {
    };
    var b = !E() && (v("Trident") || v("MSIE"));
    !v("Android") || w(), w(), v("Safari") && (w() || !E() && v("Coast") || !E() && v("Opera") || !E() && v("Edge") || (E() ? _("Microsoft Edge") : v("Edg/")) || E() && _("Opera"));
    var A = {};
    var k = null;
    function x(t2) {
      const e2 = t2.length;
      let n2 = 3 * e2 / 4;
      n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
      const r2 = new Uint8Array(n2);
      let i2 = 0;
      return function(t3, e3) {
        function n3(e4) {
          for (; r3 < t3.length; ) {
            const e5 = t3.charAt(r3++), n4 = k[e5];
            if (null != n4) return n4;
            if (!/^[\s\xa0]*$/.test(e5)) throw Error("Unknown base64 encoding at char: " + e5);
          }
          return e4;
        }
        S();
        let r3 = 0;
        for (; ; ) {
          const t4 = n3(-1), r4 = n3(0), i3 = n3(64), s2 = n3(64);
          if (64 === s2 && -1 === t4) break;
          e3(t4 << 2 | r4 >> 4), 64 != i3 && (e3(r4 << 4 & 240 | i3 >> 2), 64 != s2 && e3(i3 << 6 & 192 | s2));
        }
      }(t2, function(t3) {
        r2[i2++] = t3;
      }), i2 !== n2 ? r2.subarray(0, i2) : r2;
    }
    function S() {
      if (!k) {
        k = {};
        var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"];
        for (let n2 = 0; n2 < 5; n2++) {
          const r2 = t2.concat(e2[n2].split(""));
          A[n2] = r2;
          for (let t3 = 0; t3 < r2.length; t3++) {
            const e3 = r2[t3];
            void 0 === k[e3] && (k[e3] = t3);
          }
        }
      }
    }
    var L = "undefined" != typeof Uint8Array;
    var R = !b && "function" == typeof btoa;
    function F(t2) {
      if (!R) {
        var e2;
        void 0 === e2 && (e2 = 0), S(), e2 = A[e2];
        var n2 = Array(Math.floor(t2.length / 3)), r2 = e2[64] || "";
        let c2 = 0, h2 = 0;
        for (; c2 < t2.length - 2; c2 += 3) {
          var i2 = t2[c2], s2 = t2[c2 + 1], o2 = t2[c2 + 2], a2 = e2[i2 >> 2];
          i2 = e2[(3 & i2) << 4 | s2 >> 4], s2 = e2[(15 & s2) << 2 | o2 >> 6], o2 = e2[63 & o2], n2[h2++] = a2 + i2 + s2 + o2;
        }
        switch (a2 = 0, o2 = r2, t2.length - c2) {
          case 2:
            o2 = e2[(15 & (a2 = t2[c2 + 1])) << 2] || r2;
          case 1:
            t2 = t2[c2], n2[h2] = e2[t2 >> 2] + e2[(3 & t2) << 4 | a2 >> 4] + o2 + r2;
        }
        return n2.join("");
      }
      for (e2 = "", n2 = 0, r2 = t2.length - 10240; n2 < r2; ) e2 += String.fromCharCode.apply(null, t2.subarray(n2, n2 += 10240));
      return e2 += String.fromCharCode.apply(null, n2 ? t2.subarray(n2) : t2), btoa(e2);
    }
    var I = /[-_.]/g;
    var M = { "-": "+", _: "/", ".": "=" };
    function P(t2) {
      return M[t2] || "";
    }
    function O(t2) {
      if (!R) return x(t2);
      I.test(t2) && (t2 = t2.replace(I, P)), t2 = atob(t2);
      const e2 = new Uint8Array(t2.length);
      for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
      return e2;
    }
    function C(t2) {
      return L && null != t2 && t2 instanceof Uint8Array;
    }
    var U = {};
    function N() {
      return G ||= new B(null, U);
    }
    function D(t2) {
      V(U);
      var e2 = t2.g;
      return null == (e2 = null == e2 || C(e2) ? e2 : "string" == typeof e2 ? O(e2) : null) ? e2 : t2.g = e2;
    }
    var B = class {
      h() {
        return new Uint8Array(D(this) || 0);
      }
      constructor(t2, e2) {
        if (V(e2), this.g = t2, null != t2 && 0 === t2.length) throw Error("ByteString should be constructed with non-empty values");
      }
    };
    var G;
    var j;
    function V(t2) {
      if (t2 !== U) throw Error("illegal external caller");
    }
    function X(t2, e2) {
      t2.__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = e2;
    }
    function H() {
      const e2 = Error();
      X(e2, "incident"), function(e3) {
        t.setTimeout(() => {
          throw e3;
        }, 0);
      }(e2);
    }
    function W(t2) {
      return X(t2 = Error(t2), "warning"), t2;
    }
    function z() {
      return "function" == typeof BigInt;
    }
    function K(t2) {
      return Array.prototype.slice.call(t2);
    }
    var Y = "function" == typeof Symbol && "symbol" == typeof Symbol();
    function $(t2) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : t2;
    }
    var q = $();
    var J = $("0di");
    var Z = $("2ex");
    var Q = $("1oa");
    var tt = Y ? (t2, e2) => {
      t2[q] |= e2;
    } : (t2, e2) => {
      void 0 !== t2.G ? t2.G |= e2 : Object.defineProperties(t2, { G: { value: e2, configurable: true, writable: true, enumerable: false } });
    };
    var et = Y ? (t2, e2) => {
      t2[q] &= ~e2;
    } : (t2, e2) => {
      void 0 !== t2.G && (t2.G &= ~e2);
    };
    var nt = Y ? (t2) => 0 | t2[q] : (t2) => 0 | t2.G;
    var rt = Y ? (t2) => t2[q] : (t2) => t2.G;
    var it = Y ? (t2, e2) => {
      t2[q] = e2;
    } : (t2, e2) => {
      void 0 !== t2.G ? t2.G = e2 : Object.defineProperties(t2, { G: { value: e2, configurable: true, writable: true, enumerable: false } });
    };
    function st(t2) {
      return tt(t2, 34), t2;
    }
    function ot(t2, e2) {
      it(e2, -30975 & (0 | t2));
    }
    function at(t2, e2) {
      it(e2, -30941 & (34 | t2));
    }
    var ct;
    var ht = {};
    var ut = {};
    function lt(t2) {
      return !(!t2 || "object" != typeof t2 || t2.Ia !== ut);
    }
    function ft(t2) {
      return null !== t2 && "object" == typeof t2 && !Array.isArray(t2) && t2.constructor === Object;
    }
    function dt(t2, e2) {
      if (null != t2) {
        if ("string" == typeof t2) t2 = t2 ? new B(t2, U) : N();
        else if (t2.constructor !== B) if (C(t2)) t2 = t2.length ? new B(new Uint8Array(t2), U) : N();
        else {
          if (!e2) throw Error();
          t2 = void 0;
        }
      }
      return t2;
    }
    function pt(t2) {
      return !(!Array.isArray(t2) || t2.length) && !!(1 & nt(t2));
    }
    var gt = [];
    function mt(t2) {
      if (2 & t2) throw Error();
    }
    it(gt, 55), ct = Object.freeze(gt);
    var yt = class _yt {
      constructor(t2, e2, n2) {
        this.l = 0, this.g = t2, this.h = e2, this.m = n2;
      }
      next() {
        if (this.l < this.g.length) {
          const t2 = this.g[this.l++];
          return { done: false, value: this.h ? this.h.call(this.m, t2) : t2 };
        }
        return { done: true, value: void 0 };
      }
      [Symbol.iterator]() {
        return new _yt(this.g, this.h, this.m);
      }
    };
    var _t;
    function vt(t2, e2) {
      (e2 = _t ? e2[_t] : void 0) && (t2[_t] = K(e2));
    }
    var Et = Object.freeze({});
    function wt(t2) {
      return t2.Pa = true, t2;
    }
    var Tt = wt((t2) => "number" == typeof t2);
    var bt = wt((t2) => "string" == typeof t2);
    var At = wt((t2) => "boolean" == typeof t2);
    var kt = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
    var xt = wt((t2) => kt ? t2 >= Lt && t2 <= Ft : "-" === t2[0] ? It(t2, St) : It(t2, Rt));
    var St = Number.MIN_SAFE_INTEGER.toString();
    var Lt = kt ? BigInt(Number.MIN_SAFE_INTEGER) : void 0;
    var Rt = Number.MAX_SAFE_INTEGER.toString();
    var Ft = kt ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    function It(t2, e2) {
      if (t2.length > e2.length) return false;
      if (t2.length < e2.length || t2 === e2) return true;
      for (let n2 = 0; n2 < t2.length; n2++) {
        const r2 = t2[n2], i2 = e2[n2];
        if (r2 > i2) return false;
        if (r2 < i2) return true;
      }
    }
    var Mt = "function" == typeof Uint8Array.prototype.slice;
    var Pt;
    var Ot = 0;
    var Ct = 0;
    function Ut(t2) {
      const e2 = t2 >>> 0;
      Ot = e2, Ct = (t2 - e2) / 4294967296 >>> 0;
    }
    function Nt(t2) {
      if (t2 < 0) {
        Ut(-t2);
        const [e2, n2] = Ht(Ot, Ct);
        Ot = e2 >>> 0, Ct = n2 >>> 0;
      } else Ut(t2);
    }
    function Dt(t2) {
      const e2 = Pt ||= new DataView(new ArrayBuffer(8));
      e2.setFloat32(0, +t2, true), Ct = 0, Ot = e2.getUint32(0, true);
    }
    function Bt(t2, e2) {
      const n2 = 4294967296 * e2 + (t2 >>> 0);
      return Number.isSafeInteger(n2) ? n2 : jt(t2, e2);
    }
    function Gt(t2, e2) {
      const n2 = 2147483648 & e2;
      return n2 && (e2 = ~e2 >>> 0, 0 == (t2 = 1 + ~t2 >>> 0) && (e2 = e2 + 1 >>> 0)), "number" == typeof (t2 = Bt(t2, e2)) ? n2 ? -t2 : t2 : n2 ? "-" + t2 : t2;
    }
    function jt(t2, e2) {
      if (t2 >>>= 0, (e2 >>>= 0) <= 2097151) var n2 = "" + (4294967296 * e2 + t2);
      else z() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, t2 >= 1e7 && (n2 += t2 / 1e7 >>> 0, t2 %= 1e7), n2 >= 1e7 && (e2 += n2 / 1e7 >>> 0, n2 %= 1e7), n2 = e2 + Vt(n2) + Vt(t2));
      return n2;
    }
    function Vt(t2) {
      return t2 = String(t2), "0000000".slice(t2.length) + t2;
    }
    function Xt(t2) {
      if (t2.length < 16) Nt(Number(t2));
      else if (z()) t2 = BigInt(t2), Ot = Number(t2 & BigInt(4294967295)) >>> 0, Ct = Number(t2 >> BigInt(32) & BigInt(4294967295));
      else {
        const e2 = +("-" === t2[0]);
        Ct = Ot = 0;
        const n2 = t2.length;
        for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
          const e3 = Number(t2.slice(r2, i2));
          Ct *= 1e6, Ot = 1e6 * Ot + e3, Ot >= 4294967296 && (Ct += Math.trunc(Ot / 4294967296), Ct >>>= 0, Ot >>>= 0);
        }
        if (e2) {
          const [t3, e3] = Ht(Ot, Ct);
          Ot = t3, Ct = e3;
        }
      }
    }
    function Ht(t2, e2) {
      return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
    }
    function Wt(t2) {
      return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
    }
    function zt(t2) {
      return null == t2 || "boolean" == typeof t2 ? t2 : "number" == typeof t2 ? !!t2 : void 0;
    }
    var Kt = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function Yt(t2) {
      const e2 = typeof t2;
      switch (e2) {
        case "bigint":
          return true;
        case "number":
          return Number.isFinite(t2);
      }
      return "string" === e2 && Kt.test(t2);
    }
    function $t(t2) {
      if (null == t2) return t2;
      if ("string" == typeof t2) {
        if (!t2) return;
        t2 = +t2;
      }
      return "number" == typeof t2 && Number.isFinite(t2) ? 0 | t2 : void 0;
    }
    function qt(t2) {
      if (null == t2) return t2;
      if ("string" == typeof t2) {
        if (!t2) return;
        t2 = +t2;
      }
      return "number" == typeof t2 && Number.isFinite(t2) ? t2 >>> 0 : void 0;
    }
    function Jt(t2) {
      return "-" !== t2[0] && (t2.length < 20 || 20 === t2.length && Number(t2.substring(0, 6)) < 184467);
    }
    function Zt(t2) {
      return t2 = Math.trunc(t2), Number.isSafeInteger(t2) || (Nt(t2), t2 = Gt(Ot, Ct)), t2;
    }
    function Qt(t2) {
      var e2 = Math.trunc(Number(t2));
      if (Number.isSafeInteger(e2)) return String(e2);
      if (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), !("-" === t2[0] ? t2.length < 20 || 20 === t2.length && Number(t2.substring(0, 7)) > -922337 : t2.length < 19 || 19 === t2.length && Number(t2.substring(0, 6)) < 922337)) if (Xt(t2), t2 = Ot, 2147483648 & (e2 = Ct)) if (z()) t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
      else {
        const [n2, r2] = Ht(t2, e2);
        t2 = "-" + jt(n2, r2);
      }
      else t2 = jt(t2, e2);
      return t2;
    }
    function te(t2) {
      return null == t2 ? t2 : "bigint" == typeof t2 ? (xt(t2) ? t2 = Number(t2) : (t2 = BigInt.asIntN(64, t2), t2 = xt(t2) ? Number(t2) : String(t2)), t2) : Yt(t2) ? "number" == typeof t2 ? Zt(t2) : Qt(t2) : void 0;
    }
    function ee(t2) {
      if (null == t2) return t2;
      var e2 = typeof t2;
      if ("bigint" === e2) return String(BigInt.asUintN(64, t2));
      if (Yt(t2)) {
        if ("string" === e2) return e2 = Math.trunc(Number(t2)), Number.isSafeInteger(e2) && e2 >= 0 ? t2 = String(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), Jt(t2) || (Xt(t2), t2 = jt(Ot, Ct))), t2;
        if ("number" === e2) return (t2 = Math.trunc(t2)) >= 0 && Number.isSafeInteger(t2) ? t2 : function(t3) {
          if (t3 < 0) {
            Nt(t3);
            var e3 = jt(Ot, Ct);
            return t3 = Number(e3), Number.isSafeInteger(t3) ? t3 : e3;
          }
          return Jt(e3 = String(t3)) ? e3 : (Nt(t3), Bt(Ot, Ct));
        }(t2);
      }
    }
    function ne(t2) {
      if ("string" != typeof t2) throw Error();
      return t2;
    }
    function re(t2) {
      if (null != t2 && "string" != typeof t2) throw Error();
      return t2;
    }
    function ie(t2) {
      return null == t2 || "string" == typeof t2 ? t2 : void 0;
    }
    function se(t2, e2, n2, r2) {
      if (null != t2 && "object" == typeof t2 && t2.X === ht) return t2;
      if (!Array.isArray(t2)) return n2 ? 2 & r2 ? (t2 = e2[J]) ? e2 = t2 : (st((t2 = new e2()).u), e2 = e2[J] = t2) : e2 = new e2() : e2 = void 0, e2;
      let i2 = n2 = nt(t2);
      return 0 === i2 && (i2 |= 32 & r2), i2 |= 2 & r2, i2 !== n2 && it(t2, i2), new e2(t2);
    }
    function oe(t2, e2, n2) {
      if (e2) t: {
        if (!Yt(e2 = t2)) throw W("int64");
        switch (typeof e2) {
          case "string":
            e2 = Qt(e2);
            break t;
          case "bigint":
            if (t2 = e2 = BigInt.asIntN(64, e2), bt(t2)) {
              if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t2)) throw Error(String(t2));
            } else if (Tt(t2) && !Number.isSafeInteger(t2)) throw Error(String(t2));
            e2 = kt ? BigInt(e2) : At(e2) ? e2 ? "1" : "0" : bt(e2) ? e2.trim() || "0" : String(e2);
            break t;
          default:
            e2 = Zt(e2);
        }
      }
      else e2 = te(t2);
      return "string" == typeof (n2 = null == (t2 = e2) ? n2 ? 0 : void 0 : t2) && (e2 = +n2, Number.isSafeInteger(e2)) ? e2 : n2;
    }
    function ae(t2) {
      var e2;
      return void 0 === ue && (ue = "function" == typeof Proxy ? me(Proxy) : null), (e2 = !ue) || (void 0 === le && (le = "function" == typeof WeakMap ? me(WeakMap) : null), e2 = !le), e2 ? t2 : (e2 = ce?.get(t2)) ? e2 : Math.random() > 0.01 ? t2 : (function(t3) {
        if (void 0 === fe) {
          const t4 = new ue([], {});
          fe = 1 === Array.prototype.concat.call([], t4).length;
        }
        fe && "function" == typeof Symbol && Symbol.isConcatSpreadable && (t3[Symbol.isConcatSpreadable] = true);
      }(t2), function(t3, e3) {
        (ce ||= new le()).set(t3, e3), (he ||= new le()).set(e3, t3);
      }(t2, e2 = new ue(t2, { set: (t3, e3, n2) => (H(), t3[e3] = n2, true) })), e2);
    }
    var ce;
    var he;
    var ue;
    var le;
    var fe;
    var de;
    var pe;
    var ge;
    function me(t2) {
      try {
        return -1 !== t2.toString().indexOf("[native code]") ? t2 : null;
      } catch {
        return null;
      }
    }
    function ye(t2, e2, n2) {
      return t2 = _e(t2, e2[0], e2[1], n2 ? 1 : 2), e2 !== pe && n2 && tt(t2, 16384), t2;
    }
    function _e(t2, e2, n2, r2) {
      if (r2 = r2 ?? 0, null == t2 && (t2 = de), de = void 0, null == t2) {
        var i2 = 96;
        n2 ? (t2 = [n2], i2 |= 512) : t2 = [], e2 && (i2 = -33521665 & i2 | (1023 & e2) << 15);
      } else {
        if (!Array.isArray(t2)) throw Error("narr");
        if (2048 & (i2 = nt(t2))) throw Error("farr");
        if (64 & i2) return t2;
        if (1 === r2 || 2 === r2 || (i2 |= 64), n2 && (i2 |= 512, n2 !== t2[0])) throw Error("mid");
        t: {
          if (r2 = (n2 = t2).length) {
            const t3 = r2 - 1;
            if (ft(n2[t3])) {
              if ((e2 = t3 - (+!!(512 & (i2 |= 256)) - 1)) >= 1024) throw Error("pvtlmt");
              i2 = -33521665 & i2 | (1023 & e2) << 15;
              break t;
            }
          }
          if (e2) {
            if ((e2 = Math.max(e2, r2 - (+!!(512 & i2) - 1))) > 1024) throw Error("spvt");
            i2 = -33521665 & i2 | (1023 & e2) << 15;
          }
        }
      }
      return it(t2, i2), t2;
    }
    var ve = {};
    var Ee = function() {
      try {
        return T(new class extends Map {
          constructor() {
            super();
          }
        }()), false;
      } catch {
        return true;
      }
    }();
    var we = class {
      constructor() {
        this.g = /* @__PURE__ */ new Map();
      }
      get(t2) {
        return this.g.get(t2);
      }
      set(t2, e2) {
        return this.g.set(t2, e2), this.size = this.g.size, this;
      }
      delete(t2) {
        return t2 = this.g.delete(t2), this.size = this.g.size, t2;
      }
      clear() {
        this.g.clear(), this.size = this.g.size;
      }
      has(t2) {
        return this.g.has(t2);
      }
      entries() {
        return this.g.entries();
      }
      keys() {
        return this.g.keys();
      }
      values() {
        return this.g.values();
      }
      forEach(t2, e2) {
        return this.g.forEach(t2, e2);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    var Te = Ee ? (Object.setPrototypeOf(we.prototype, Map.prototype), Object.defineProperties(we.prototype, { size: { value: 0, configurable: true, enumerable: true, writable: true } }), we) : class extends Map {
      constructor() {
        super();
      }
    };
    function be(t2) {
      return t2;
    }
    function Ae(t2) {
      if (2 & t2.M) throw Error("Cannot mutate an immutable Map");
    }
    var ke = class extends Te {
      constructor(t2, e2, n2 = be, r2 = be) {
        super();
        let i2 = nt(t2);
        i2 |= 64, it(t2, i2), this.M = i2, this.T = e2, this.S = n2, this.Z = this.T ? xe : r2;
        for (let s2 = 0; s2 < t2.length; s2++) {
          const o2 = t2[s2], a2 = n2(o2[0], false, true);
          let c2 = o2[1];
          e2 ? void 0 === c2 && (c2 = null) : c2 = r2(o2[1], false, true, void 0, void 0, i2), super.set(a2, c2);
        }
      }
      oa(t2 = Se) {
        if (0 !== this.size) return this.Y(t2);
      }
      Y(t2 = Se) {
        const e2 = [], n2 = super.entries();
        for (var r2; !(r2 = n2.next()).done; ) (r2 = r2.value)[0] = t2(r2[0]), r2[1] = t2(r2[1]), e2.push(r2);
        return e2;
      }
      clear() {
        Ae(this), super.clear();
      }
      delete(t2) {
        return Ae(this), super.delete(this.S(t2, true, false));
      }
      entries() {
        var t2 = this.na();
        return new yt(t2, Le, this);
      }
      keys() {
        return this.Ha();
      }
      values() {
        var t2 = this.na();
        return new yt(t2, ke.prototype.get, this);
      }
      forEach(t2, e2) {
        super.forEach((n2, r2) => {
          t2.call(e2, this.get(r2), r2, this);
        });
      }
      set(t2, e2) {
        return Ae(this), null == (t2 = this.S(t2, true, false)) ? this : null == e2 ? (super.delete(t2), this) : super.set(t2, this.Z(e2, true, true, this.T, false, this.M));
      }
      Na(t2) {
        const e2 = this.S(t2[0], false, true);
        t2 = t2[1], t2 = this.T ? void 0 === t2 ? null : t2 : this.Z(t2, false, true, void 0, false, this.M), super.set(e2, t2);
      }
      has(t2) {
        return super.has(this.S(t2, false, false));
      }
      get(t2) {
        t2 = this.S(t2, false, false);
        const e2 = super.get(t2);
        if (void 0 !== e2) {
          var n2 = this.T;
          return n2 ? ((n2 = this.Z(e2, false, true, n2, this.sa, this.M)) !== e2 && super.set(t2, n2), n2) : e2;
        }
      }
      na() {
        return Array.from(super.keys());
      }
      Ha() {
        return super.keys();
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    function xe(t2, e2, n2, r2, i2, s2) {
      return t2 = se(t2, r2, n2, s2), i2 && (t2 = De(t2)), t2;
    }
    function Se(t2) {
      return t2;
    }
    function Le(t2) {
      return [t2, this.get(t2)];
    }
    var Re;
    function Fe() {
      return Re ||= new ke(st([]), void 0, void 0, void 0, ve);
    }
    function Ie(t2, e2, n2, r2, i2) {
      if (null != t2) {
        if (Array.isArray(t2)) t2 = pt(t2) ? void 0 : i2 && 2 & nt(t2) ? t2 : Me(t2, e2, n2, void 0 !== r2, i2);
        else if (ft(t2)) {
          const s2 = {};
          for (let o2 in t2) s2[o2] = Ie(t2[o2], e2, n2, r2, i2);
          t2 = s2;
        } else t2 = e2(t2, r2);
        return t2;
      }
    }
    function Me(t2, e2, n2, r2, i2) {
      const s2 = r2 || n2 ? nt(t2) : 0;
      r2 = r2 ? !!(32 & s2) : void 0;
      const o2 = K(t2);
      for (let t3 = 0; t3 < o2.length; t3++) o2[t3] = Ie(o2[t3], e2, n2, r2, i2);
      return n2 && (vt(o2, t2), n2(s2, o2)), o2;
    }
    function Pe(t2) {
      return Ie(t2, Oe, void 0, void 0, false);
    }
    function Oe(t2) {
      return t2.X === ht ? t2.toJSON() : t2 instanceof ke ? t2.oa(Pe) : function(t3) {
        switch (typeof t3) {
          case "number":
            return isFinite(t3) ? t3 : String(t3);
          case "bigint":
            return xt(t3) ? Number(t3) : String(t3);
          case "boolean":
            return t3 ? 1 : 0;
          case "object":
            if (t3) if (Array.isArray(t3)) {
              if (pt(t3)) return;
            } else {
              if (C(t3)) return F(t3);
              if (t3 instanceof B) {
                const e2 = t3.g;
                return null == e2 ? "" : "string" == typeof e2 ? e2 : t3.g = F(e2);
              }
              if (t3 instanceof ke) return t3.oa();
            }
        }
        return t3;
      }(t2);
    }
    function Ce(t2, e2, n2 = at) {
      if (null != t2) {
        if (L && t2 instanceof Uint8Array) return e2 ? t2 : new Uint8Array(t2);
        if (Array.isArray(t2)) {
          var r2 = nt(t2);
          return 2 & r2 ? t2 : (e2 &&= 0 === r2 || !!(32 & r2) && !(64 & r2 || !(16 & r2)), e2 ? (it(t2, -12293 & (34 | r2)), t2) : Me(t2, Ce, 4 & r2 ? at : n2, true, true));
        }
        return t2.X === ht ? (n2 = t2.u, t2 = 2 & (r2 = rt(n2)) ? t2 : Ue(t2, n2, r2, true)) : t2 instanceof ke && !(2 & t2.M) && (n2 = st(t2.Y(Ce)), t2 = new ke(n2, t2.T, t2.S, t2.Z)), t2;
      }
    }
    function Ue(t2, e2, n2, r2) {
      return t2 = t2.constructor, de = e2 = Ne(e2, n2, r2), e2 = new t2(e2), de = void 0, e2;
    }
    function Ne(t2, e2, n2) {
      const r2 = n2 || 2 & e2 ? at : ot, i2 = !!(32 & e2);
      return t2 = function(t3, e3, n3) {
        const r3 = K(t3);
        var i3 = r3.length;
        const s2 = 256 & e3 ? r3[i3 - 1] : void 0;
        for (i3 += s2 ? -1 : 0, e3 = 512 & e3 ? 1 : 0; e3 < i3; e3++) r3[e3] = n3(r3[e3]);
        if (s2) {
          e3 = r3[e3] = {};
          for (const t4 in s2) e3[t4] = n3(s2[t4]);
        }
        return vt(r3, t3), r3;
      }(t2, e2, (t3) => Ce(t3, i2, r2)), tt(t2, 32 | (n2 ? 2 : 0)), t2;
    }
    function De(t2) {
      const e2 = t2.u, n2 = rt(e2);
      return 2 & n2 ? Ue(t2, e2, n2, false) : t2;
    }
    function Be(t2, e2) {
      return je(t2 = t2.u, rt(t2), e2);
    }
    function Ge(t2, e2, n2, r2) {
      if (!((e2 = r2 + (+!!(512 & e2) - 1)) < 0 || e2 >= t2.length || e2 >= n2)) return t2[e2];
    }
    function je(t2, e2, n2, r2) {
      if (-1 === n2) return null;
      const i2 = e2 >> 15 & 1023 || 536870912;
      if (!(n2 >= i2)) {
        var s2 = t2.length;
        return r2 && 256 & e2 && null != (r2 = t2[s2 - 1][n2]) ? (Ge(t2, e2, i2, n2) && null != Z && ((e2 = (t2 = j ??= {})[Z] || 0) >= 4 || (t2[Z] = e2 + 1, H())), r2) : Ge(t2, e2, i2, n2);
      }
      return 256 & e2 ? t2[t2.length - 1][n2] : void 0;
    }
    function Ve(t2, e2, n2) {
      const r2 = t2.u;
      let i2 = rt(r2);
      return mt(i2), Xe(r2, i2, e2, n2), t2;
    }
    function Xe(t2, e2, n2, r2) {
      const i2 = e2 >> 15 & 1023 || 536870912;
      if (n2 >= i2) {
        let s2, o2 = e2;
        if (256 & e2) s2 = t2[t2.length - 1];
        else {
          if (null == r2) return o2;
          s2 = t2[i2 + (+!!(512 & e2) - 1)] = {}, o2 |= 256;
        }
        return s2[n2] = r2, n2 < i2 && (t2[n2 + (+!!(512 & e2) - 1)] = void 0), o2 !== e2 && it(t2, o2), o2;
      }
      return t2[n2 + (+!!(512 & e2) - 1)] = r2, 256 & e2 && (n2 in (t2 = t2[t2.length - 1]) && delete t2[n2]), e2;
    }
    function He(t2, e2) {
      t2 = t2.u;
      let n2 = rt(t2);
      const r2 = je(t2, n2, e2), i2 = Wt(r2);
      return null != i2 && i2 !== r2 && Xe(t2, n2, e2, i2), i2;
    }
    function We(t2) {
      t2 = t2.u;
      let e2 = rt(t2);
      const n2 = je(t2, e2, 1), r2 = dt(n2, true);
      return null != r2 && r2 !== n2 && Xe(t2, e2, 1, r2), r2;
    }
    function ze() {
      return void 0 === Et ? 2 : 4;
    }
    function Ke(t2, e2, n2, r2, i2) {
      const s2 = t2.u, o2 = 2 & (t2 = rt(s2)) ? 1 : r2;
      i2 = !!i2, r2 = Ye(s2, t2, e2);
      var a2 = nt(r2);
      if (!(4 & a2)) {
        4 & a2 && (r2 = K(r2), a2 = fn(a2, t2), t2 = Xe(s2, t2, e2, r2));
        let i3 = 0, o3 = 0;
        for (; i3 < r2.length; i3++) {
          const t3 = n2(r2[i3]);
          null != t3 && (r2[o3++] = t3);
        }
        o3 < i3 && (r2.length = o3), a2 = -4097 & (20 | (a2 = $e(a2, t2))), it(r2, a2 &= -8193), 2 & a2 && Object.freeze(r2);
      }
      let c2;
      return 1 === o2 || 4 === o2 && 32 & a2 ? qe(a2) || (i2 = a2, (a2 |= 2) !== i2 && it(r2, a2), Object.freeze(r2)) : (n2 = 5 === o2 && (!!(32 & a2) || qe(a2) || !!ce?.get(r2)), (2 === o2 || n2) && qe(a2) && (r2 = K(r2), a2 = dn(a2 = fn(a2, t2), t2, i2), it(r2, a2), t2 = Xe(s2, t2, e2, r2)), qe(a2) || (e2 = a2, (a2 = dn(a2, t2, i2)) !== e2 && it(r2, a2)), n2 ? c2 = ae(r2) : 2 !== o2 || i2 || ce?.delete(r2)), c2 || r2;
    }
    function Ye(t2, e2, n2, r2) {
      return t2 = je(t2, e2, n2, r2), Array.isArray(t2) ? t2 : ct;
    }
    function $e(t2, e2) {
      return 0 === t2 && (t2 = fn(t2, e2)), 1 | t2;
    }
    function qe(t2) {
      return !!(2 & t2) && !!(4 & t2) || !!(2048 & t2);
    }
    function Je(t2) {
      t2 = K(t2);
      for (let e2 = 0; e2 < t2.length; e2++) {
        const n2 = t2[e2] = K(t2[e2]);
        Array.isArray(n2[1]) && (n2[1] = st(n2[1]));
      }
      return t2;
    }
    function Ze(t2, e2, n2, r2) {
      t2 = t2.u;
      let i2 = rt(t2);
      mt(i2), Xe(t2, i2, e2, ("0" === r2 ? 0 === Number(n2) : n2 === r2) ? void 0 : n2);
    }
    function Qe(t2, e2, n2, r2, i2) {
      mt(e2);
      var s2 = !(!(64 & e2) && 16384 & e2);
      const o2 = (i2 = Ye(t2, e2, n2, i2)) !== ct;
      if (s2 || !o2) {
        let a2 = s2 = o2 ? nt(i2) : 0;
        (!o2 || 2 & a2 || qe(a2) || 4 & a2 && !(32 & a2)) && (i2 = K(i2), a2 = fn(a2, e2), e2 = Xe(t2, e2, n2, i2)), a2 = -13 & $e(a2, e2), a2 = dn(r2 ? -17 & a2 : 16 | a2, e2, true), a2 !== s2 && it(i2, a2);
      }
      return i2;
    }
    function tn(t2, e2) {
      var n2 = As;
      return rn(en(t2 = t2.u), t2, rt(t2), n2) === e2 ? e2 : -1;
    }
    function en(t2) {
      if (Y) return t2[Q] ?? (t2[Q] = /* @__PURE__ */ new Map());
      if (Q in t2) return t2[Q];
      const e2 = /* @__PURE__ */ new Map();
      return Object.defineProperty(t2, Q, { value: e2 }), e2;
    }
    function nn(t2, e2, n2, r2) {
      const i2 = en(t2), s2 = rn(i2, t2, e2, n2);
      return s2 !== r2 && (s2 && (e2 = Xe(t2, e2, s2)), i2.set(n2, r2)), e2;
    }
    function rn(t2, e2, n2, r2) {
      let i2 = t2.get(r2);
      if (null != i2) return i2;
      i2 = 0;
      for (let t3 = 0; t3 < r2.length; t3++) {
        const s2 = r2[t3];
        null != je(e2, n2, s2) && (0 !== i2 && (n2 = Xe(e2, n2, i2)), i2 = s2);
      }
      return t2.set(r2, i2), i2;
    }
    function sn(t2, e2, n2, r2) {
      let i2, s2 = rt(t2);
      if (null != (r2 = je(t2, s2, n2, r2)) && r2.X === ht) return (e2 = De(r2)) !== r2 && Xe(t2, s2, n2, e2), e2.u;
      if (Array.isArray(r2)) {
        const t3 = nt(r2);
        i2 = 2 & t3 ? ye(Ne(r2, t3, false), e2, true) : 64 & t3 ? r2 : ye(i2, e2, true);
      } else i2 = ye(void 0, e2, true);
      return i2 !== r2 && Xe(t2, s2, n2, i2), i2;
    }
    function on(t2, e2, n2, r2) {
      t2 = t2.u;
      let i2 = rt(t2);
      return (e2 = se(r2 = je(t2, i2, n2, r2), e2, false, i2)) !== r2 && null != e2 && Xe(t2, i2, n2, e2), e2;
    }
    function an(t2, e2, n2, r2 = false) {
      if (null == (e2 = on(t2, e2, n2, r2))) return e2;
      if (t2 = t2.u, !(2 & (r2 = rt(t2)))) {
        const i2 = De(e2);
        i2 !== e2 && Xe(t2, r2, n2, e2 = i2);
      }
      return e2;
    }
    function cn(t2, e2, n2, r2, i2, s2, o2) {
      t2 = t2.u;
      var a2 = !!(2 & e2);
      i2 = a2 ? 1 : i2, s2 = !!s2, o2 &&= !a2, a2 = Ye(t2, e2, r2);
      var c2 = nt(a2), h2 = !!(4 & c2);
      if (!h2) {
        var u2 = a2, l2 = e2;
        const t3 = !!(2 & (c2 = $e(c2, e2)));
        t3 && (l2 |= 2);
        let r3 = !t3, i3 = true, s3 = 0, o3 = 0;
        for (; s3 < u2.length; s3++) {
          const e3 = se(u2[s3], n2, false, l2);
          if (e3 instanceof n2) {
            if (!t3) {
              const t4 = !!(2 & nt(e3.u));
              r3 &&= !t4, i3 &&= t4;
            }
            u2[o3++] = e3;
          }
        }
        o3 < s3 && (u2.length = o3), c2 |= 4, c2 = i3 ? 16 | c2 : -17 & c2, it(u2, c2 = r3 ? 8 | c2 : -9 & c2), t3 && Object.freeze(u2);
      }
      if (o2 && !(8 & c2 || !a2.length && (1 === i2 || 4 === i2 && 32 & c2))) {
        for (qe(c2) && (a2 = K(a2), c2 = fn(c2, e2), e2 = Xe(t2, e2, r2, a2)), n2 = a2, o2 = c2, u2 = 0; u2 < n2.length; u2++) (c2 = n2[u2]) !== (l2 = De(c2)) && (n2[u2] = l2);
        o2 |= 8, o2 = n2.length ? -17 & o2 : 16 | o2, it(n2, o2), c2 = o2;
      }
      let f2;
      return 1 === i2 || 4 === i2 && 32 & c2 ? qe(c2) || (e2 = c2, (c2 |= !a2.length || 16 & c2 && (!h2 || 32 & c2) ? 2 : 2048) !== e2 && it(a2, c2), Object.freeze(a2)) : (h2 = 5 === i2 && (!!(32 & c2) || qe(c2) || !!ce?.get(a2)), (2 === i2 || h2) && qe(c2) && (a2 = K(a2), c2 = dn(c2 = fn(c2, e2), e2, s2), it(a2, c2), e2 = Xe(t2, e2, r2, a2)), qe(c2) || (r2 = c2, (c2 = dn(c2, e2, s2)) !== r2 && it(a2, c2)), h2 ? f2 = ae(a2) : 2 !== i2 || s2 || ce?.delete(a2)), f2 || a2;
    }
    function hn(t2, e2, n2) {
      const r2 = rt(t2.u);
      return cn(t2, r2, e2, n2, ze(), false, !(2 & r2));
    }
    function un(t2, e2, n2, r2) {
      return null == r2 && (r2 = void 0), Ve(t2, n2, r2);
    }
    function ln(t2, e2, n2, r2) {
      null == r2 && (r2 = void 0);
      t: {
        t2 = t2.u;
        let i2 = rt(t2);
        if (mt(i2), null == r2) {
          const r3 = en(t2);
          if (rn(r3, t2, i2, n2) !== e2) break t;
          r3.set(n2, 0);
        } else i2 = nn(t2, i2, n2, e2);
        Xe(t2, i2, e2, r2);
      }
    }
    function fn(t2, e2) {
      return -2049 & (t2 = 32 | (2 & e2 ? 2 | t2 : -3 & t2));
    }
    function dn(t2, e2, n2) {
      return 32 & e2 && n2 || (t2 &= -33), t2;
    }
    function pn(t2, e2, n2, r2) {
      const i2 = rt(t2.u);
      mt(i2), t2 = cn(t2, i2, n2, e2, 2, true), r2 = null != r2 ? r2 : new n2(), t2.push(r2), 2 & nt(r2.u) ? et(t2, 8) : et(t2, 16);
    }
    function gn(t2, e2) {
      return t2 ?? e2;
    }
    function mn(t2, e2) {
      return $t(Be(t2, e2));
    }
    function yn(t2, e2) {
      return gn(He(t2, e2), 0);
    }
    function _n(t2, e2) {
      return gn(ie(Be(t2, e2)), "");
    }
    function vn(t2, e2, n2) {
      if (null != n2 && "boolean" != typeof n2) throw t2 = typeof n2, Error(`Expected boolean but got ${"object" != t2 ? t2 : n2 ? Array.isArray(n2) ? "array" : t2 : "null"}: ${n2}`);
      Ve(t2, e2, n2);
    }
    function En(t2, e2, n2) {
      if (null != n2) {
        if ("number" != typeof n2) throw W("int32");
        if (!Number.isFinite(n2)) throw W("int32");
        n2 |= 0;
      }
      Ve(t2, e2, n2);
    }
    function wn(t2, e2, n2) {
      if (null != n2 && "number" != typeof n2) throw Error(`Value of float/double field must be a number, found ${typeof n2}: ${n2}`);
      Ve(t2, e2, n2);
    }
    function Tn(t2, e2, n2) {
      {
        const o2 = t2.u;
        let a2 = rt(o2);
        if (mt(a2), null == n2) Xe(o2, a2, e2);
        else {
          n2 = he?.get(n2) || n2;
          var r2 = t2 = nt(n2), i2 = qe(t2), s2 = i2 || Object.isFrozen(n2);
          for (i2 || (t2 = 0), s2 || (n2 = K(n2), r2 = 0, t2 = dn(t2 = fn(t2, a2), a2, true), s2 = false), t2 |= 21, i2 = 0; i2 < n2.length; i2++) {
            const e3 = n2[i2], o3 = ne(e3);
            Object.is(e3, o3) || (s2 && (n2 = K(n2), r2 = 0, t2 = dn(t2 = fn(t2, a2), a2, true), s2 = false), n2[i2] = o3);
          }
          t2 !== r2 && (s2 && (n2 = K(n2), t2 = dn(t2 = fn(t2, a2), a2, true)), it(n2, t2)), Xe(o2, a2, e2, n2);
        }
      }
    }
    function bn(t2, e2, n2) {
      mt(rt(t2.u)), Ke(t2, e2, ie, 2, true).push(ne(n2));
    }
    function An(t2, e2) {
      return Error(`Invalid wire type: ${t2} (at position ${e2})`);
    }
    function kn() {
      return Error("Failed to read varint, encoding is invalid.");
    }
    function xn(t2, e2) {
      return Error(`Tried to read past the end of the data ${e2} > ${t2}`);
    }
    function Sn(t2) {
      if ("string" == typeof t2) return { buffer: O(t2), O: false };
      if (Array.isArray(t2)) return { buffer: new Uint8Array(t2), O: false };
      if (t2.constructor === Uint8Array) return { buffer: t2, O: false };
      if (t2.constructor === ArrayBuffer) return { buffer: new Uint8Array(t2), O: false };
      if (t2.constructor === B) return { buffer: D(t2) || new Uint8Array(0), O: true };
      if (t2 instanceof Uint8Array) return { buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), O: false };
      throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
    }
    function Ln(t2, e2) {
      let n2, r2 = 0, i2 = 0, s2 = 0;
      const o2 = t2.h;
      let a2 = t2.g;
      do {
        n2 = o2[a2++], r2 |= (127 & n2) << s2, s2 += 7;
      } while (s2 < 32 && 128 & n2);
      for (s2 > 32 && (i2 |= (127 & n2) >> 4), s2 = 3; s2 < 32 && 128 & n2; s2 += 7) n2 = o2[a2++], i2 |= (127 & n2) << s2;
      if (Un(t2, a2), n2 < 128) return e2(r2 >>> 0, i2 >>> 0);
      throw kn();
    }
    function Rn(t2) {
      let e2 = 0, n2 = t2.g;
      const r2 = n2 + 10, i2 = t2.h;
      for (; n2 < r2; ) {
        const r3 = i2[n2++];
        if (e2 |= r3, 0 == (128 & r3)) return Un(t2, n2), !!(127 & e2);
      }
      throw kn();
    }
    function Fn(t2) {
      const e2 = t2.h;
      let n2 = t2.g, r2 = e2[n2++], i2 = 127 & r2;
      if (128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 7, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 14, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 21, 128 & r2 && (r2 = e2[n2++], i2 |= r2 << 28, 128 & r2 && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++]))))) throw kn();
      return Un(t2, n2), i2;
    }
    function In(t2) {
      return Fn(t2) >>> 0;
    }
    function Mn(t2) {
      var e2 = t2.h;
      const n2 = t2.g, r2 = e2[n2], i2 = e2[n2 + 1], s2 = e2[n2 + 2];
      return e2 = e2[n2 + 3], Un(t2, t2.g + 4), (r2 << 0 | i2 << 8 | s2 << 16 | e2 << 24) >>> 0;
    }
    function Pn(t2) {
      var e2 = Mn(t2);
      t2 = 2 * (e2 >> 31) + 1;
      const n2 = e2 >>> 23 & 255;
      return e2 &= 8388607, 255 == n2 ? e2 ? NaN : t2 * (1 / 0) : 0 == n2 ? 1401298464324817e-60 * t2 * e2 : t2 * Math.pow(2, n2 - 150) * (e2 + 8388608);
    }
    function On(t2) {
      return Fn(t2);
    }
    function Cn(t2, e2, { ca: n2 = false } = {}) {
      t2.ca = n2, e2 && (e2 = Sn(e2), t2.h = e2.buffer, t2.m = e2.O, t2.j = 0, t2.l = t2.h.length, t2.g = t2.j);
    }
    function Un(t2, e2) {
      if (t2.g = e2, e2 > t2.l) throw xn(t2.l, e2);
    }
    function Nn(t2, e2) {
      if (e2 < 0) throw Error(`Tried to read a negative byte length: ${e2}`);
      const n2 = t2.g, r2 = n2 + e2;
      if (r2 > t2.l) throw xn(e2, t2.l - n2);
      return t2.g = r2, n2;
    }
    function Dn(t2, e2) {
      if (0 == e2) return N();
      var n2 = Nn(t2, e2);
      return t2.ca && t2.m ? n2 = t2.h.subarray(n2, n2 + e2) : (t2 = t2.h, n2 = n2 === (e2 = n2 + e2) ? new Uint8Array(0) : Mt ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), 0 == n2.length ? N() : new B(n2, U);
    }
    ke.prototype.toJSON = void 0, ke.prototype.Ia = ut;
    var Bn = [];
    function Gn(t2) {
      var e2 = t2.g;
      if (e2.g == e2.l) return false;
      t2.l = t2.g.g;
      var n2 = In(t2.g);
      if (e2 = n2 >>> 3, !((n2 &= 7) >= 0 && n2 <= 5)) throw An(n2, t2.l);
      if (e2 < 1) throw Error(`Invalid field number: ${e2} (at position ${t2.l})`);
      return t2.m = e2, t2.h = n2, true;
    }
    function jn(t2) {
      switch (t2.h) {
        case 0:
          0 != t2.h ? jn(t2) : Rn(t2.g);
          break;
        case 1:
          Un(t2 = t2.g, t2.g + 8);
          break;
        case 2:
          if (2 != t2.h) jn(t2);
          else {
            var e2 = In(t2.g);
            Un(t2 = t2.g, t2.g + e2);
          }
          break;
        case 5:
          Un(t2 = t2.g, t2.g + 4);
          break;
        case 3:
          for (e2 = t2.m; ; ) {
            if (!Gn(t2)) throw Error("Unmatched start-group tag: stream EOF");
            if (4 == t2.h) {
              if (t2.m != e2) throw Error("Unmatched end-group tag");
              break;
            }
            jn(t2);
          }
          break;
        default:
          throw An(t2.h, t2.l);
      }
    }
    function Vn(t2, e2, n2) {
      const r2 = t2.g.l, i2 = In(t2.g), s2 = t2.g.g + i2;
      let o2 = s2 - r2;
      if (o2 <= 0 && (t2.g.l = s2, n2(e2, t2, void 0, void 0, void 0), o2 = s2 - t2.g.g), o2) throw Error(`Message parsing ended unexpectedly. Expected to read ${i2} bytes, instead read ${i2 - o2} bytes, either the data ended unexpectedly or the message misreported its own length`);
      return t2.g.g = s2, t2.g.l = r2, e2;
    }
    function Xn(t2) {
      var e2 = In(t2.g), a2 = Nn(t2 = t2.g, e2);
      if (t2 = t2.h, o) {
        var c2, h2 = t2;
        (c2 = s) || (c2 = s = new TextDecoder("utf-8", { fatal: true })), e2 = a2 + e2, h2 = 0 === a2 && e2 === h2.length ? h2 : h2.subarray(a2, e2);
        try {
          var u2 = c2.decode(h2);
        } catch (t3) {
          if (void 0 === i) {
            try {
              c2.decode(new Uint8Array([128]));
            } catch (t4) {
            }
            try {
              c2.decode(new Uint8Array([97])), i = true;
            } catch (t4) {
              i = false;
            }
          }
          throw !i && (s = void 0), t3;
        }
      } else {
        e2 = (u2 = a2) + e2, a2 = [];
        let i2, s2 = null;
        for (; u2 < e2; ) {
          var l2 = t2[u2++];
          l2 < 128 ? a2.push(l2) : l2 < 224 ? u2 >= e2 ? n() : (i2 = t2[u2++], l2 < 194 || 128 != (192 & i2) ? (u2--, n()) : a2.push((31 & l2) << 6 | 63 & i2)) : l2 < 240 ? u2 >= e2 - 1 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 224 === l2 && i2 < 160 || 237 === l2 && i2 >= 160 || 128 != (192 & (c2 = t2[u2++])) ? (u2--, n()) : a2.push((15 & l2) << 12 | (63 & i2) << 6 | 63 & c2)) : l2 <= 244 ? u2 >= e2 - 2 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || i2 - 144 + (l2 << 28) >> 30 != 0 || 128 != (192 & (c2 = t2[u2++])) || 128 != (192 & (h2 = t2[u2++])) ? (u2--, n()) : (l2 = (7 & l2) << 18 | (63 & i2) << 12 | (63 & c2) << 6 | 63 & h2, l2 -= 65536, a2.push(55296 + (l2 >> 10 & 1023), 56320 + (1023 & l2)))) : n(), a2.length >= 8192 && (s2 = r(s2, a2), a2.length = 0);
        }
        u2 = r(s2, a2);
      }
      return u2;
    }
    function Hn(t2) {
      const e2 = In(t2.g);
      return Dn(t2.g, e2);
    }
    function Wn(t2, e2, n2) {
      var r2 = In(t2.g);
      for (r2 = t2.g.g + r2; t2.g.g < r2; ) n2.push(e2(t2.g));
    }
    var zn = [];
    var Kn;
    function Yn(t2, e2, n2) {
      e2.g ? e2.m(t2, e2.g, e2.h, n2, true) : e2.m(t2, e2.h, n2, true);
    }
    var $n = class {
      constructor(t2, e2) {
        this.u = _e(t2, e2);
      }
      toJSON() {
        return qn(this);
      }
      l() {
        var t2 = Eo;
        return t2.g ? t2.l(this, t2.g, t2.h, true) : t2.l(this, t2.h, t2.defaultValue, true);
      }
      clone() {
        const t2 = this.u;
        return Ue(this, t2, rt(t2), false);
      }
      O() {
        return !!(2 & nt(this.u));
      }
    };
    function qn(t2) {
      t2 = t2.u, t2 = Kn ? t2 : Me(t2, Oe, void 0, void 0, false);
      {
        var e2 = !Kn;
        let h2 = t2.length;
        if (h2) {
          var n2 = t2[h2 - 1], r2 = ft(n2);
          r2 ? h2-- : n2 = void 0;
          var i2 = t2;
          if (r2) {
            t: {
              var s2, o2 = n2, a2 = false;
              if (o2) for (let t3 in o2) isNaN(+t3) ? (s2 ??= {})[t3] = o2[t3] : (r2 = o2[t3], Array.isArray(r2) && (pt(r2) || lt(r2) && 0 === r2.size) && (r2 = null), null == r2 && (a2 = true), null != r2 && ((s2 ??= {})[t3] = r2));
              if (a2 || (s2 = o2), s2) for (let t3 in s2) {
                a2 = s2;
                break t;
              }
              a2 = null;
            }
            o2 = null == a2 ? null != n2 : a2 !== n2;
          }
          for (; h2 > 0 && (null == (s2 = i2[h2 - 1]) || pt(s2) || lt(s2) && 0 === s2.size); h2--) var c2 = true;
          (i2 !== t2 || o2 || c2) && (e2 ? (c2 || o2 || a2) && (i2.length = h2) : i2 = Array.prototype.slice.call(i2, 0, h2), a2 && i2.push(a2)), c2 = i2;
        } else c2 = t2;
      }
      return c2;
    }
    function Jn(t2) {
      return t2 ? /^\d+$/.test(t2) ? (Xt(t2), new Zn(Ot, Ct)) : null : Qn ||= new Zn(0, 0);
    }
    $n.prototype.X = ht, $n.prototype.toString = function() {
      try {
        return Kn = true, qn(this).toString();
      } finally {
        Kn = false;
      }
    };
    var Zn = class {
      constructor(t2, e2) {
        this.h = t2 >>> 0, this.g = e2 >>> 0;
      }
    };
    var Qn;
    function tr(t2) {
      return t2 ? /^-?\d+$/.test(t2) ? (Xt(t2), new er(Ot, Ct)) : null : nr ||= new er(0, 0);
    }
    var er = class {
      constructor(t2, e2) {
        this.h = t2 >>> 0, this.g = e2 >>> 0;
      }
    };
    var nr;
    function rr(t2, e2, n2) {
      for (; n2 > 0 || e2 > 127; ) t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
      t2.g.push(e2);
    }
    function ir(t2, e2) {
      for (; e2 > 127; ) t2.g.push(127 & e2 | 128), e2 >>>= 7;
      t2.g.push(e2);
    }
    function sr(t2, e2) {
      if (e2 >= 0) ir(t2, e2);
      else {
        for (let n2 = 0; n2 < 9; n2++) t2.g.push(127 & e2 | 128), e2 >>= 7;
        t2.g.push(1);
      }
    }
    function or(t2, e2) {
      t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
    }
    function ar(t2, e2) {
      0 !== e2.length && (t2.l.push(e2), t2.h += e2.length);
    }
    function cr(t2, e2, n2) {
      ir(t2.g, 8 * e2 + n2);
    }
    function hr(t2, e2) {
      return cr(t2, e2, 2), e2 = t2.g.end(), ar(t2, e2), e2.push(t2.h), e2;
    }
    function ur(t2, e2) {
      var n2 = e2.pop();
      for (n2 = t2.h + t2.g.length() - n2; n2 > 127; ) e2.push(127 & n2 | 128), n2 >>>= 7, t2.h++;
      e2.push(n2), t2.h++;
    }
    function lr(t2, e2, n2) {
      cr(t2, e2, 2), ir(t2.g, n2.length), ar(t2, t2.g.end()), ar(t2, n2);
    }
    function fr(t2, e2, n2, r2) {
      null != n2 && (e2 = hr(t2, e2), r2(n2, t2), ur(t2, e2));
    }
    function dr() {
      const t2 = class {
        constructor() {
          throw Error();
        }
      };
      return Object.setPrototypeOf(t2, t2.prototype), t2;
    }
    var pr = dr();
    var gr = dr();
    var mr = dr();
    var yr = dr();
    var _r = dr();
    var vr = dr();
    var Er = dr();
    var wr = dr();
    var Tr = dr();
    var br = class {
      constructor(t2, e2, n2) {
        this.g = t2, this.h = e2, t2 = pr, this.l = !!t2 && n2 === t2 || false;
      }
    };
    function Ar(t2, e2) {
      return new br(t2, e2, pr);
    }
    function kr(t2, e2, n2, r2, i2) {
      fr(t2, n2, Ur(e2, r2), i2);
    }
    var xr = Ar(function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (Vn(t2, sn(e2, r2, n2), i2), true);
    }, kr);
    var Sr = Ar(function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (Vn(t2, sn(e2, r2, n2, true), i2), true);
    }, kr);
    var Lr = Symbol();
    var Rr = Symbol();
    var Fr = Symbol();
    var Ir = Symbol();
    var Mr;
    var Pr;
    function Or(t2, e2, n2, r2) {
      var i2 = r2[t2];
      if (i2) return i2;
      (i2 = {}).W = function(t3) {
        switch (typeof t3) {
          case "boolean":
            return pe ||= [0, void 0, true];
          case "number":
            return t3 > 0 ? void 0 : 0 === t3 ? ge ||= [0, void 0] : [-t3, void 0];
          case "string":
            return [0, t3];
          case "object":
            return t3;
        }
      }(r2[0]);
      var s2 = r2[1];
      let o2 = 1;
      s2 && s2.constructor === Object && (i2.ha = s2, "function" == typeof (s2 = r2[++o2]) && (i2.ma = true, Mr ??= s2, Pr ??= r2[o2 + 1], s2 = r2[o2 += 2]));
      const a2 = {};
      for (; s2 && Array.isArray(s2) && s2.length && "number" == typeof s2[0] && s2[0] > 0; ) {
        for (var c2 = 0; c2 < s2.length; c2++) a2[s2[c2]] = s2;
        s2 = r2[++o2];
      }
      for (c2 = 1; void 0 !== s2; ) {
        let t3;
        "number" == typeof s2 && (c2 += s2, s2 = r2[++o2]);
        var h2 = void 0;
        if (s2 instanceof br ? t3 = s2 : (t3 = xr, o2--), t3?.l) {
          s2 = r2[++o2], h2 = r2;
          var u2 = o2;
          "function" == typeof s2 && (s2 = s2(), h2[u2] = s2), h2 = s2;
        }
        for (u2 = c2 + 1, "number" == typeof (s2 = r2[++o2]) && s2 < 0 && (u2 -= s2, s2 = r2[++o2]); c2 < u2; c2++) {
          const r3 = a2[c2];
          h2 ? n2(i2, c2, t3, h2, r3) : e2(i2, c2, t3, r3);
        }
      }
      return r2[t2] = i2;
    }
    function Cr(t2) {
      return Array.isArray(t2) ? t2[0] instanceof br ? t2 : [Sr, t2] : [t2, void 0];
    }
    function Ur(t2, e2) {
      return t2 instanceof $n ? t2.u : Array.isArray(t2) ? ye(t2, e2, false) : void 0;
    }
    function Nr(t2, e2, n2, r2) {
      const i2 = n2.g;
      t2[e2] = r2 ? (t3, e3, n3) => i2(t3, e3, n3, r2) : i2;
    }
    function Dr(t2, e2, n2, r2, i2) {
      const s2 = n2.g;
      let o2, a2;
      t2[e2] = (t3, e3, n3) => s2(t3, e3, n3, a2 ||= Or(Rr, Nr, Dr, r2).W, o2 ||= Br(r2), i2);
    }
    function Br(t2) {
      let e2 = t2[Fr];
      if (null != e2) return e2;
      const n2 = Or(Rr, Nr, Dr, t2);
      return e2 = n2.ma ? (t3, e3) => Mr(t3, e3, n2) : (t3, e3) => {
        const r2 = rt(t3);
        for (; Gn(e3) && 4 != e3.h; ) {
          var i2 = e3.m, s2 = n2[i2];
          if (null == s2) {
            var o2 = n2.ha;
            o2 && (o2 = o2[i2]) && (null != (o2 = Gr(o2)) && (s2 = n2[i2] = o2));
          }
          null != s2 && s2(e3, t3, i2) || (i2 = (s2 = e3).l, jn(s2), s2.ga ? s2 = void 0 : (o2 = s2.g.g - i2, s2.g.g = i2, s2 = Dn(s2.g, o2)), i2 = t3, s2 && (_t ||= Symbol(), (o2 = i2[_t]) ? o2.push(s2) : i2[_t] = [s2]));
        }
        return 16384 & r2 && st(t3), true;
      }, t2[Fr] = e2;
    }
    function Gr(t2) {
      const e2 = (t2 = Cr(t2))[0].g;
      if (t2 = t2[1]) {
        const n2 = Br(t2), r2 = Or(Rr, Nr, Dr, t2).W;
        return (t3, i2, s2) => e2(t3, i2, s2, r2, n2);
      }
      return e2;
    }
    function jr(t2, e2, n2) {
      t2[e2] = n2.h;
    }
    function Vr(t2, e2, n2, r2) {
      let i2, s2;
      const o2 = n2.h;
      t2[e2] = (t3, e3, n3) => o2(t3, e3, n3, s2 ||= Or(Lr, jr, Vr, r2).W, i2 ||= Xr(r2));
    }
    function Xr(t2) {
      let e2 = t2[Ir];
      if (!e2) {
        const n2 = Or(Lr, jr, Vr, t2);
        e2 = (t3, e3) => Hr(t3, e3, n2), t2[Ir] = e2;
      }
      return e2;
    }
    function Hr(t2, e2, n2) {
      for (var r2 = nt(t2), i2 = +!!(512 & r2) - 1, s2 = t2.length, o2 = 512 & r2 ? 1 : 0, a2 = s2 + (256 & r2 ? -1 : 0); o2 < a2; o2++) {
        const r3 = t2[o2];
        if (null == r3) continue;
        const s3 = o2 - i2, a3 = Wr(n2, s3);
        a3 && a3(e2, r3, s3);
      }
      if (256 & r2) {
        r2 = t2[s2 - 1];
        for (const t3 in r2) i2 = +t3, Number.isNaN(i2) || null != (s2 = r2[i2]) && (a2 = Wr(n2, i2)) && a2(e2, s2, i2);
      }
      if (t2 = _t ? t2[_t] : void 0) for (ar(e2, e2.g.end()), n2 = 0; n2 < t2.length; n2++) ar(e2, D(t2[n2]) || new Uint8Array(0));
    }
    function Wr(t2, e2) {
      var n2 = t2[e2];
      if (n2) return n2;
      if ((n2 = t2.ha) && (n2 = n2[e2])) {
        var r2 = (n2 = Cr(n2))[0].h;
        if (n2 = n2[1]) {
          const e3 = Xr(n2), i2 = Or(Lr, jr, Vr, n2).W;
          n2 = t2.ma ? Pr(i2, e3) : (t3, n3, s2) => r2(t3, n3, s2, i2, e3);
        } else n2 = r2;
        return t2[e2] = n2;
      }
    }
    function zr(t2, e2) {
      if (Array.isArray(e2)) {
        var n2 = nt(e2);
        if (4 & n2) return e2;
        for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
          const n3 = t2(e2[r2]);
          null != n3 && (e2[i2++] = n3);
        }
        return i2 < r2 && (e2.length = i2), it(e2, -12289 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
      }
    }
    function Kr(t2, e2, n2) {
      return new br(t2, e2, n2);
    }
    function Yr(t2, e2, n2) {
      return new br(t2, e2, n2);
    }
    function $r(t2, e2, n2) {
      Xe(t2, rt(t2), e2, n2);
    }
    var qr = Ar(function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (t2 = Vn(t2, ye([void 0, void 0], r2, true), i2), mt(r2 = rt(e2)), (i2 = je(e2, r2, n2)) instanceof ke ? 0 != (2 & i2.M) ? ((i2 = i2.Y()).push(t2), Xe(e2, r2, n2, i2)) : i2.Na(t2) : Array.isArray(i2) ? (2 & nt(i2) && Xe(e2, r2, n2, i2 = Je(i2)), i2.push(t2)) : Xe(e2, r2, n2, [t2]), true);
    }, function(t2, e2, n2, r2, i2) {
      if (e2 instanceof ke) e2.forEach((e3, s2) => {
        fr(t2, n2, ye([s2, e3], r2, false), i2);
      });
      else if (Array.isArray(e2)) for (let s2 = 0; s2 < e2.length; s2++) {
        const o2 = e2[s2];
        Array.isArray(o2) && fr(t2, n2, ye(o2, r2, false), i2);
      }
    });
    function Jr(t2, e2, n2) {
      if (e2 = function(t3) {
        if (null == t3) return t3;
        const e3 = typeof t3;
        if ("bigint" === e3) return String(BigInt.asIntN(64, t3));
        if (Yt(t3)) {
          if ("string" === e3) return Qt(t3);
          if ("number" === e3) return Zt(t3);
        }
      }(e2), null != e2) {
        if ("string" == typeof e2) tr(e2);
        if (null != e2) switch (cr(t2, n2, 0), typeof e2) {
          case "number":
            t2 = t2.g, Nt(e2), rr(t2, Ot, Ct);
            break;
          case "bigint":
            n2 = BigInt.asUintN(64, e2), n2 = new er(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), rr(t2.g, n2.h, n2.g);
            break;
          default:
            n2 = tr(e2), rr(t2.g, n2.h, n2.g);
        }
      }
    }
    function Zr(t2, e2, n2) {
      null != (e2 = $t(e2)) && null != e2 && (cr(t2, n2, 0), sr(t2.g, e2));
    }
    function Qr(t2, e2, n2) {
      null != (e2 = zt(e2)) && (cr(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
    }
    function ti(t2, e2, n2) {
      null != (e2 = ie(e2)) && lr(t2, n2, h(e2));
    }
    function ei(t2, e2, n2, r2, i2) {
      fr(t2, n2, Ur(e2, r2), i2);
    }
    function ni(t2, e2, n2) {
      null != (e2 = null == e2 || "string" == typeof e2 || C(e2) || e2 instanceof B ? e2 : void 0) && lr(t2, n2, Sn(e2).buffer);
    }
    function ri(t2, e2, n2) {
      return (5 === t2.h || 2 === t2.h) && (e2 = Qe(e2, rt(e2), n2, false, false), 2 == t2.h ? Wn(t2, Pn, e2) : e2.push(Pn(t2.g)), true);
    }
    var ii = Kr(function(t2, e2, n2) {
      if (1 !== t2.h) return false;
      var r2 = t2.g;
      t2 = Mn(r2);
      const i2 = Mn(r2);
      r2 = 2 * (i2 >> 31) + 1;
      const s2 = i2 >>> 20 & 2047;
      return t2 = 4294967296 * (1048575 & i2) + t2, $r(e2, n2, 2047 == s2 ? t2 ? NaN : r2 * (1 / 0) : 0 == s2 ? 5e-324 * r2 * t2 : r2 * Math.pow(2, s2 - 1075) * (t2 + 4503599627370496)), true;
    }, function(t2, e2, n2) {
      null != (e2 = Wt(e2)) && (cr(t2, n2, 1), t2 = t2.g, (n2 = Pt ||= new DataView(new ArrayBuffer(8))).setFloat64(0, +e2, true), Ot = n2.getUint32(0, true), Ct = n2.getUint32(4, true), or(t2, Ot), or(t2, Ct));
    }, dr());
    var si = Kr(function(t2, e2, n2) {
      return 5 === t2.h && ($r(e2, n2, Pn(t2.g)), true);
    }, function(t2, e2, n2) {
      null != (e2 = Wt(e2)) && (cr(t2, n2, 5), t2 = t2.g, Dt(e2), or(t2, Ot));
    }, Er);
    var oi = Yr(ri, function(t2, e2, n2) {
      if (null != (e2 = zr(Wt, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
        var r2 = t2, i2 = n2, s2 = e2[o2];
        null != s2 && (cr(r2, i2, 5), r2 = r2.g, Dt(s2), or(r2, Ot));
      }
    }, Er);
    var ai = Yr(ri, function(t2, e2, n2) {
      if (null != (e2 = zr(Wt, e2)) && e2.length) {
        cr(t2, n2, 2), ir(t2.g, 4 * e2.length);
        for (let r2 = 0; r2 < e2.length; r2++) n2 = t2.g, Dt(e2[r2]), or(n2, Ot);
      }
    }, Er);
    var ci = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, Ln(t2.g, Gt)), true);
    }, Jr, vr);
    var hi = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, 0 === (t2 = Ln(t2.g, Gt)) ? void 0 : t2), true);
    }, Jr, vr);
    var ui = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, Ln(t2.g, Bt)), true);
    }, function(t2, e2, n2) {
      if (null != (e2 = ee(e2))) {
        if ("string" == typeof e2) Jn(e2);
        if (null != e2) switch (cr(t2, n2, 0), typeof e2) {
          case "number":
            t2 = t2.g, Nt(e2), rr(t2, Ot, Ct);
            break;
          case "bigint":
            n2 = BigInt.asUintN(64, e2), n2 = new Zn(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), rr(t2.g, n2.h, n2.g);
            break;
          default:
            n2 = Jn(e2), rr(t2.g, n2.h, n2.g);
        }
      }
    }, dr());
    var li = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, Fn(t2.g)), true);
    }, Zr, yr);
    var fi = Yr(function(t2, e2, n2) {
      return (0 === t2.h || 2 === t2.h) && (e2 = Qe(e2, rt(e2), n2, false, false), 2 == t2.h ? Wn(t2, Fn, e2) : e2.push(Fn(t2.g)), true);
    }, function(t2, e2, n2) {
      if (null != (e2 = zr($t, e2)) && e2.length) {
        n2 = hr(t2, n2);
        for (let n3 = 0; n3 < e2.length; n3++) sr(t2.g, e2[n3]);
        ur(t2, n2);
      }
    }, yr);
    var di = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, 0 === (t2 = Fn(t2.g)) ? void 0 : t2), true);
    }, Zr, yr);
    var pi = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, Rn(t2.g)), true);
    }, Qr, gr);
    var gi = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, false === (t2 = Rn(t2.g)) ? void 0 : t2), true);
    }, Qr, gr);
    var mi = Yr(function(t2, e2, n2) {
      return 2 === t2.h && (t2 = Xn(t2), Qe(e2, rt(e2), n2, false).push(t2), true);
    }, function(t2, e2, n2) {
      if (null != (e2 = zr(ie, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
        var r2 = t2, i2 = n2, s2 = e2[o2];
        null != s2 && lr(r2, i2, h(s2));
      }
    }, mr);
    var yi = Kr(function(t2, e2, n2) {
      return 2 === t2.h && ($r(e2, n2, "" === (t2 = Xn(t2)) ? void 0 : t2), true);
    }, ti, mr);
    var _i = Kr(function(t2, e2, n2) {
      return 2 === t2.h && ($r(e2, n2, Xn(t2)), true);
    }, ti, mr);
    var vi = function(t2, e2, n2 = pr) {
      return new br(t2, e2, n2);
    }(function(t2, e2, n2, r2, i2) {
      return 2 === t2.h && (r2 = ye(void 0, r2, true), Qe(e2, rt(e2), n2, true).push(r2), Vn(t2, r2, i2), true);
    }, function(t2, e2, n2, r2, i2) {
      if (Array.isArray(e2)) for (let s2 = 0; s2 < e2.length; s2++) ei(t2, e2[s2], n2, r2, i2);
    });
    var Ei = Ar(function(t2, e2, n2, r2, i2, s2) {
      return 2 === t2.h && (nn(e2, nt(e2), s2, n2), Vn(t2, e2 = sn(e2, r2, n2), i2), true);
    }, ei);
    var wi = Kr(function(t2, e2, n2) {
      return 2 === t2.h && ($r(e2, n2, Hn(t2)), true);
    }, ni, wr);
    var Ti = Yr(function(t2, e2, n2) {
      return (0 === t2.h || 2 === t2.h) && (e2 = Qe(e2, rt(e2), n2, false, false), 2 == t2.h ? Wn(t2, In, e2) : e2.push(In(t2.g)), true);
    }, function(t2, e2, n2) {
      if (null != (e2 = zr(qt, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
        var r2 = t2, i2 = n2, s2 = e2[o2];
        null != s2 && (cr(r2, i2, 0), ir(r2.g, s2));
      }
    }, _r);
    var bi = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, 0 === (t2 = In(t2.g)) ? void 0 : t2), true);
    }, function(t2, e2, n2) {
      null != (e2 = qt(e2)) && null != e2 && (cr(t2, n2, 0), ir(t2.g, e2));
    }, _r);
    var Ai = Kr(function(t2, e2, n2) {
      return 0 === t2.h && ($r(e2, n2, Fn(t2.g)), true);
    }, function(t2, e2, n2) {
      null != (e2 = $t(e2)) && (e2 = parseInt(e2, 10), cr(t2, n2, 0), sr(t2.g, e2));
    }, Tr);
    var ki = class {
      constructor(t2, e2) {
        this.h = t2, this.g = e2, this.l = an, this.m = un, this.defaultValue = void 0;
      }
    };
    function xi(t2, e2) {
      return new ki(t2, e2);
    }
    function Si(t2, e2) {
      return (n2, r2) => {
        if (zn.length) {
          const t3 = zn.pop();
          t3.o(r2), Cn(t3.g, n2, r2), n2 = t3;
        } else n2 = new class {
          constructor(t3, e3) {
            if (Bn.length) {
              const n3 = Bn.pop();
              Cn(n3, t3, e3), t3 = n3;
            } else t3 = new class {
              constructor(t4, e4) {
                this.h = null, this.m = false, this.g = this.l = this.j = 0, Cn(this, t4, e4);
              }
              clear() {
                this.h = null, this.m = false, this.g = this.l = this.j = 0, this.ca = false;
              }
            }(t3, e3);
            this.g = t3, this.l = this.g.g, this.h = this.m = -1, this.o(e3);
          }
          o({ ga: t3 = false } = {}) {
            this.ga = t3;
          }
        }(n2, r2);
        try {
          const r3 = new t2(), s2 = r3.u;
          Br(e2)(s2, n2);
          var i2 = r3;
        } finally {
          n2.g.clear(), n2.m = -1, n2.h = -1, zn.length < 100 && zn.push(n2);
        }
        return i2;
      };
    }
    function Li(t2) {
      return function() {
        const e2 = new class {
          constructor() {
            this.l = [], this.h = 0, this.g = new class {
              constructor() {
                this.g = [];
              }
              length() {
                return this.g.length;
              }
              end() {
                const t3 = this.g;
                return this.g = [], t3;
              }
            }();
          }
        }();
        Hr(this.u, e2, Or(Lr, jr, Vr, t2)), ar(e2, e2.g.end());
        const n2 = new Uint8Array(e2.h), r2 = e2.l, i2 = r2.length;
        let s2 = 0;
        for (let t3 = 0; t3 < i2; t3++) {
          const e3 = r2[t3];
          n2.set(e3, s2), s2 += e3.length;
        }
        return e2.l = [n2], n2;
      };
    }
    var Ri = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Fi = [0, yi, Kr(function(t2, e2, n2) {
      return 2 === t2.h && ($r(e2, n2, (t2 = Hn(t2)) === N() ? void 0 : t2), true);
    }, function(t2, e2, n2) {
      if (null != e2) {
        if (e2 instanceof $n) {
          const r2 = e2.Qa;
          return void (r2 && (e2 = r2(e2), null != e2 && lr(t2, n2, Sn(e2).buffer)));
        }
        if (Array.isArray(e2)) return;
      }
      ni(t2, e2, n2);
    }, wr)];
    var Ii;
    var Mi = globalThis.trustedTypes;
    function Pi(t2) {
      void 0 === Ii && (Ii = function() {
        let t3 = null;
        if (!Mi) return t3;
        try {
          const e3 = (t4) => t4;
          t3 = Mi.createPolicy("goog#html", { createHTML: e3, createScript: e3, createScriptURL: e3 });
        } catch (t4) {
        }
        return t3;
      }());
      var e2 = Ii;
      return new class {
        constructor(t3) {
          this.g = t3;
        }
        toString() {
          return this.g + "";
        }
      }(e2 ? e2.createScriptURL(t2) : t2);
    }
    function Oi(t2, ...e2) {
      if (0 === e2.length) return Pi(t2[0]);
      let n2 = t2[0];
      for (let r2 = 0; r2 < e2.length; r2++) n2 += encodeURIComponent(e2[r2]) + t2[r2 + 1];
      return Pi(n2);
    }
    var Ci = [0, li, Ai, pi, -1, fi, Ai, -1];
    var Ui = class extends $n {
      constructor() {
        super();
      }
    };
    var Ni = [0, pi, _i, pi, Ai, -1, Yr(function(t2, e2, n2) {
      return (0 === t2.h || 2 === t2.h) && (e2 = Qe(e2, rt(e2), n2, false, false), 2 == t2.h ? Wn(t2, On, e2) : e2.push(Fn(t2.g)), true);
    }, function(t2, e2, n2) {
      if (null != (e2 = zr($t, e2)) && e2.length) {
        n2 = hr(t2, n2);
        for (let n3 = 0; n3 < e2.length; n3++) sr(t2.g, e2[n3]);
        ur(t2, n2);
      }
    }, Tr), _i, -1, [0, pi, -1], Ai, pi, -1];
    var Di = [0, _i, -2];
    var Bi = class extends $n {
      constructor() {
        super();
      }
    };
    var Gi = [0];
    var ji = [0, li, pi, 1, pi, -3];
    var Vi = class extends $n {
      constructor(t2) {
        super(t2, 2);
      }
    };
    var Xi = {};
    Xi[336783863] = [0, _i, pi, -1, li, [0, [1, 2, 3, 4, 5, 6, 7], Ei, Gi, Ei, Ni, Ei, Di, Ei, ji, Ei, Ci, Ei, [0, _i, -2], Ei, [0, _i, Ai]], [0, _i], pi, [0, [1, 3], [2, 4], Ei, [0, fi], -1, Ei, [0, mi], -1, vi, [0, _i, -1]], _i];
    var Hi = [0, hi, -1, gi, -3, hi, fi, yi, di, hi, -1, gi, di, gi, -2, yi];
    function Wi(t2, e2) {
      Ze(t2, 2, re(e2), "");
    }
    function zi(t2, e2) {
      bn(t2, 3, e2);
    }
    function Ki(t2, e2) {
      bn(t2, 4, e2);
    }
    var Yi = class extends $n {
      constructor(t2) {
        super(t2, 500);
      }
      o(t2) {
        return un(this, 0, 7, t2);
      }
    };
    var $i = [-1, {}];
    var qi = [0, _i, 1, $i];
    var Ji = [0, _i, mi, $i];
    function Zi(t2, e2) {
      pn(t2, 1, Yi, e2);
    }
    function Qi(t2, e2) {
      bn(t2, 10, e2);
    }
    function ts(t2, e2) {
      bn(t2, 15, e2);
    }
    var es = class extends $n {
      constructor(t2) {
        super(t2, 500);
      }
      o(t2) {
        return un(this, 0, 1001, t2);
      }
    };
    var ns = [-500, vi, [-500, yi, -1, mi, -3, [-2, Xi, pi], vi, Fi, di, -1, qi, Ji, vi, [0, yi, gi], yi, Hi, di, mi, 987, mi], 4, vi, [-500, _i, -1, [-1, {}], 998, _i], vi, [-500, _i, mi, -1, [-2, {}, pi], 997, mi, -1], di, vi, [-500, _i, mi, $i, 998, mi], mi, di, qi, Ji, vi, [0, yi, -1, $i], mi, -2, Hi, yi, -1, gi, [0, gi, bi], 978, $i, vi, Fi];
    es.prototype.g = Li(ns);
    var rs = Si(es, ns);
    var is = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var ss = class extends $n {
      constructor(t2) {
        super(t2);
      }
      g() {
        return hn(this, is, 1);
      }
    };
    var os = [0, vi, [0, li, si, _i, -1]];
    var as = Si(ss, os);
    var cs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var hs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var us = class extends $n {
      constructor(t2) {
        super(t2);
      }
      h() {
        return an(this, cs, 2);
      }
      g() {
        return hn(this, hs, 5);
      }
    };
    var ls = Si(class extends $n {
      constructor(t2) {
        super(t2);
      }
    }, [0, mi, fi, ai, [0, Ai, [0, li, -3], [0, si, -3], [0, li, -1, [0, vi, [0, li, -2]]], vi, [0, si, -1, _i, si]], _i, -1, ci, vi, [0, li, si], mi, ci]);
    var fs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var ds = Si(class extends $n {
      constructor(t2) {
        super(t2);
      }
    }, [0, vi, [0, si, -4]]);
    var ps = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var gs = Si(class extends $n {
      constructor(t2) {
        super(t2);
      }
    }, [0, vi, [0, si, -4]]);
    var ms = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var ys = [0, li, -1, ai, Ai];
    var _s = class extends $n {
      constructor() {
        super();
      }
    };
    _s.prototype.g = Li([0, si, -4, ci]);
    var vs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Es = Si(class extends $n {
      constructor(t2) {
        super(t2);
      }
    }, [0, vi, [0, 1, li, _i, os], ci]);
    var ws = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Ts = class extends $n {
      constructor(t2) {
        super(t2);
      }
      pa() {
        const t2 = We(this);
        return null == t2 ? N() : t2;
      }
    };
    var bs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var As = [1, 2];
    var ks = Si(class extends $n {
      constructor(t2) {
        super(t2);
      }
    }, [0, vi, [0, As, Ei, [0, ai], Ei, [0, wi], li, _i], ci]);
    var xs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Ss = [0, _i, li, si, mi, -1];
    var Ls = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Rs = [0, pi, -1];
    var Fs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Is = [1, 2, 3, 4, 5];
    var Ms = class extends $n {
      constructor(t2) {
        super(t2);
      }
      g() {
        return null != We(this);
      }
      h() {
        return null != ie(Be(this, 2));
      }
    };
    var Ps = class extends $n {
      constructor(t2) {
        super(t2);
      }
      g() {
        return zt(Be(this, 2)) ?? false;
      }
    };
    var Os = [0, wi, _i, [0, li, ci, -1], [0, ui, ci]];
    var Cs = [0, Os, pi, [0, Is, Ei, ji, Ei, Ni, Ei, Ci, Ei, Gi, Ei, Di], Ai];
    var Us = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Ns = [0, Cs, si, -1, li];
    var Ds = xi(502141897, Us);
    Xi[502141897] = Ns;
    var Bs = Si(class extends $n {
      constructor(t2) {
        super(t2);
      }
    }, [0, [0, Ai, -1, oi, Ti], ys]);
    var Gs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var js = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Vs = [0, Cs, si, [0, Cs], pi];
    var Xs = [0, Cs, Ns, Vs, si, [0, [0, Os]]];
    var Hs = xi(508968150, js);
    Xi[508968150] = Xs, Xi[508968149] = Vs;
    var Ws = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var zs = xi(513916220, Ws);
    Xi[513916220] = [0, Cs, Xs, li];
    var Ks = class extends $n {
      constructor(t2) {
        super(t2);
      }
      h() {
        return an(this, xs, 2);
      }
      g() {
        Ve(this, 2);
      }
    };
    var Ys = [0, Cs, Ss];
    Xi[478825465] = Ys;
    var $s = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var qs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Js = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Zs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Qs = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var to = [0, Cs, [0, Cs], Ys, -1];
    var eo = [0, Cs, si, li];
    var no = [0, Cs, si];
    var ro = [0, Cs, eo, no, si];
    var io = xi(479097054, Qs);
    Xi[479097054] = [0, Cs, ro, to], Xi[463370452] = to, Xi[464864288] = eo;
    var so = xi(462713202, Zs);
    Xi[462713202] = ro, Xi[474472470] = no;
    var oo = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var ao = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var co = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var ho = class extends $n {
      constructor() {
        super();
      }
    };
    var uo = [0, Cs, si, -1, li];
    var lo = [0, Cs, si, pi];
    ho.prototype.g = Li([0, Cs, no, [0, Cs], Ns, Vs, uo, lo]);
    var fo = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var po = xi(456383383, fo);
    Xi[456383383] = [0, Cs, Ss];
    var go = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var mo = xi(476348187, go);
    Xi[476348187] = [0, Cs, Rs];
    var yo = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var _o = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var vo = [0, Ai, -1];
    var Eo = xi(458105876, class extends $n {
      constructor(t2) {
        super(t2);
      }
      g() {
        var t2 = this.u;
        const e2 = rt(t2);
        const n2 = 2 & e2;
        return t2 = function(t3, e3, n3) {
          var r2 = _o;
          const i2 = 2 & e3;
          let s2 = false;
          if (null == n3) {
            if (i2) return Fe();
            n3 = [];
          } else if (n3.constructor === ke) {
            if (0 == (2 & n3.M) || i2) return n3;
            n3 = n3.Y();
          } else Array.isArray(n3) ? s2 = !!(2 & nt(n3)) : n3 = [];
          if (i2) {
            if (!n3.length) return Fe();
            s2 || (s2 = true, st(n3));
          } else s2 && (s2 = false, n3 = Je(n3));
          return s2 || (64 & nt(n3) ? et(n3, 32) : 32 & e3 && tt(n3, 32)), Xe(t3, e3, 2, r2 = new ke(n3, r2, oe, void 0)), r2;
        }(t2, e2, je(t2, e2, 2)), !n2 && _o && (t2.sa = true), t2;
      }
    });
    Xi[458105876] = [0, vo, qr, [true, ci, [0, _i, -1, mi]]];
    var wo = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var To = xi(458105758, wo);
    Xi[458105758] = [0, Cs, _i, vo];
    var bo = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Ao = xi(443442058, bo);
    Xi[443442058] = [0, Cs, _i, li, si, mi, -1], Xi[514774813] = uo;
    var ko = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var xo = xi(516587230, ko);
    function So(t2, e2) {
      return e2 = e2 ? e2.clone() : new xs(), void 0 !== t2.displayNamesLocale ? Ve(e2, 1, re(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && Ve(e2, 1), void 0 !== t2.maxResults ? En(e2, 2, t2.maxResults) : "maxResults" in t2 && Ve(e2, 2), void 0 !== t2.scoreThreshold ? wn(e2, 3, t2.scoreThreshold) : "scoreThreshold" in t2 && Ve(e2, 3), void 0 !== t2.categoryAllowlist ? Tn(e2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && Ve(e2, 4), void 0 !== t2.categoryDenylist ? Tn(e2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && Ve(e2, 5), e2;
    }
    function Lo(t2, e2 = -1, n2 = "") {
      return { categories: t2.map((t3) => ({ index: gn(mn(t3, 1), 0) ?? -1, score: yn(t3, 2) ?? 0, categoryName: _n(t3, 3) ?? "", displayName: _n(t3, 4) ?? "" })), headIndex: e2, headName: n2 };
    }
    function Ro(t2) {
      var e2 = Ke(t2, 3, Wt, ze()), n2 = Ke(t2, 2, $t, ze()), r2 = Ke(t2, 1, ie, ze()), i2 = Ke(t2, 9, ie, ze());
      const s2 = { categories: [], keypoints: [] };
      for (let t3 = 0; t3 < e2.length; t3++) s2.categories.push({ score: e2[t3], index: n2[t3] ?? -1, categoryName: r2[t3] ?? "", displayName: i2[t3] ?? "" });
      if ((e2 = an(t2, us, 4)?.h()) && (s2.boundingBox = { originX: mn(e2, 1) ?? 0, originY: mn(e2, 2) ?? 0, width: mn(e2, 3) ?? 0, height: mn(e2, 4) ?? 0, angle: 0 }), an(t2, us, 4)?.g().length) for (const e3 of an(t2, us, 4).g()) s2.keypoints.push({ x: He(e3, 1) ?? 0, y: He(e3, 2) ?? 0, score: He(e3, 4) ?? 0, label: ie(Be(e3, 3)) ?? "" });
      return s2;
    }
    function Fo(t2) {
      const e2 = [];
      for (const n2 of hn(t2, ps, 1)) e2.push({ x: yn(n2, 1) ?? 0, y: yn(n2, 2) ?? 0, z: yn(n2, 3) ?? 0, visibility: yn(n2, 4) ?? 0 });
      return e2;
    }
    function Io(t2) {
      const e2 = [];
      for (const n2 of hn(t2, fs, 1)) e2.push({ x: yn(n2, 1) ?? 0, y: yn(n2, 2) ?? 0, z: yn(n2, 3) ?? 0, visibility: yn(n2, 4) ?? 0 });
      return e2;
    }
    function Mo(t2) {
      return Array.from(t2, (t3) => t3 > 127 ? t3 - 256 : t3);
    }
    function Po(t2, e2) {
      if (t2.length !== e2.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${e2.length}).`);
      let n2 = 0, r2 = 0, i2 = 0;
      for (let s2 = 0; s2 < t2.length; s2++) n2 += t2[s2] * e2[s2], r2 += t2[s2] * t2[s2], i2 += e2[s2] * e2[s2];
      if (r2 <= 0 || i2 <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
      return n2 / Math.sqrt(r2 * i2);
    }
    var Oo;
    Xi[516587230] = [0, Cs, uo, lo, si], Xi[518928384] = lo;
    var Co = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
    async function Uo() {
      if (void 0 === Oo) try {
        await WebAssembly.instantiate(Co), Oo = true;
      } catch {
        Oo = false;
      }
      return Oo;
    }
    async function No(t2, e2 = Oi``) {
      const n2 = await Uo() ? "wasm_internal" : "wasm_nosimd_internal";
      return { wasmLoaderPath: `${e2}/${t2}_${n2}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm` };
    }
    var Do = class {
    };
    function Bo() {
      var t2 = navigator;
      return "undefined" != typeof OffscreenCanvas && (!function(t3 = navigator) {
        return (t3 = t3.userAgent).includes("Safari") && !t3.includes("Chrome");
      }(t2) || !!((t2 = t2.userAgent.match(/Version\/([\d]+).*Safari/)) && t2.length >= 1 && Number(t2[1]) >= 17));
    }
    async function Go(t2) {
      if ("function" != typeof importScripts) {
        const e2 = document.createElement("script");
        return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
          e2.addEventListener("load", () => {
            t3();
          }, false), e2.addEventListener("error", (t4) => {
            n2(t4);
          }, false), document.body.appendChild(e2);
        });
      }
      importScripts(t2.toString());
    }
    function jo(t2) {
      return void 0 !== t2.videoWidth ? [t2.videoWidth, t2.videoHeight] : void 0 !== t2.naturalWidth ? [t2.naturalWidth, t2.naturalHeight] : void 0 !== t2.displayWidth ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
    }
    function Vo(t2, e2, n2) {
      t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.i.stringToNewUTF8(e2)), t2.i._free(e2);
    }
    function Xo(t2, e2, n2) {
      if (!t2.i.canvas) throw Error("No OpenGL canvas configured.");
      if (n2 ? t2.i._bindTextureToStream(n2) : t2.i._bindTextureToCanvas(), !(n2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
      t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, e2), t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, false);
      const [r2, i2] = jo(e2);
      return !t2.l || r2 === t2.i.canvas.width && i2 === t2.i.canvas.height || (t2.i.canvas.width = r2, t2.i.canvas.height = i2), [r2, i2];
    }
    function Ho(t2, e2, n2) {
      t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
      const r2 = new Uint32Array(e2.length);
      for (let n3 = 0; n3 < e2.length; n3++) r2[n3] = t2.i.stringToNewUTF8(e2[n3]);
      e2 = t2.i._malloc(4 * r2.length), t2.i.HEAPU32.set(r2, e2 >> 2), n2(e2);
      for (const e3 of r2) t2.i._free(e3);
      t2.i._free(e2);
    }
    function Wo(t2, e2, n2) {
      t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = n2;
    }
    function zo(t2, e2, n2) {
      let r2 = [];
      t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = (t3, e3, i2) => {
        e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
      };
    }
    Do.forVisionTasks = function(t2) {
      return No("vision", t2);
    }, Do.forTextTasks = function(t2) {
      return No("text", t2);
    }, Do.forGenAiExperimentalTasks = function(t2) {
      return No("genai_experimental", t2);
    }, Do.forGenAiTasks = function(t2) {
      return No("genai", t2);
    }, Do.forAudioTasks = function(t2) {
      return No("audio", t2);
    }, Do.isSimdSupported = function() {
      return Uo();
    };
    async function Ko(t2, e2, n2, r2) {
      return t2 = await (async (t3, e3, n3, r3, i2) => {
        if (e3 && await Go(e3), !self.ModuleFactory) throw Error("ModuleFactory not set.");
        if (n3 && (await Go(n3), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
        return self.Module && i2 && ((e3 = self.Module).locateFile = i2.locateFile, i2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = i2.mainScriptUrlOrBlob)), i2 = await self.ModuleFactory(self.Module || i2), self.ModuleFactory = self.Module = void 0, new t3(i2, r3);
      })(t2, n2.wasmLoaderPath, n2.assetLoaderPath, e2, { locateFile: (t3) => t3.endsWith(".wasm") ? n2.wasmBinaryPath.toString() : n2.assetBinaryPath && t3.endsWith(".data") ? n2.assetBinaryPath.toString() : t3 }), await t2.o(r2), t2;
    }
    function Yo(t2, e2) {
      const n2 = an(t2.baseOptions, Ms, 1) || new Ms();
      "string" == typeof e2 ? (Ve(n2, 2, re(e2)), Ve(n2, 1)) : e2 instanceof Uint8Array && (Ve(n2, 1, dt(e2, false)), Ve(n2, 2)), un(t2.baseOptions, 0, 1, n2);
    }
    function $o(t2) {
      try {
        const e2 = t2.H.length;
        if (1 === e2) throw Error(t2.H[0].message);
        if (e2 > 1) throw Error("Encountered multiple errors: " + t2.H.map((t3) => t3.message).join(", "));
      } finally {
        t2.H = [];
      }
    }
    function qo(t2, e2) {
      t2.B = Math.max(t2.B, e2);
    }
    function Jo(t2, e2) {
      t2.A = new Yi(), Wi(t2.A, "PassThroughCalculator"), zi(t2.A, "free_memory"), Ki(t2.A, "free_memory_unused_out"), Qi(e2, "free_memory"), Zi(e2, t2.A);
    }
    function Zo(t2, e2) {
      zi(t2.A, e2), Ki(t2.A, e2 + "_unused_out");
    }
    function Qo(t2) {
      t2.g.addBoolToStream(true, "free_memory", t2.B);
    }
    var ta = class {
      constructor(t2) {
        this.g = t2, this.H = [], this.B = 0, this.g.setAutoRenderToScreen(false);
      }
      l(t2, e2 = true) {
        if (e2) {
          const e3 = t2.baseOptions || {};
          if (t2.baseOptions?.modelAssetBuffer && t2.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
          if (!(an(this.baseOptions, Ms, 1)?.g() || an(this.baseOptions, Ms, 1)?.h() || t2.baseOptions?.modelAssetBuffer || t2.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
          if (function(t3, e4) {
            let n2 = an(t3.baseOptions, Fs, 3);
            if (!n2) {
              var r2 = n2 = new Fs(), i2 = new Bi();
              ln(r2, 4, Is, i2);
            }
            "delegate" in e4 && ("GPU" === e4.delegate ? (e4 = n2, r2 = new Ui(), ln(e4, 2, Is, r2)) : (e4 = n2, r2 = new Bi(), ln(e4, 4, Is, r2))), un(t3.baseOptions, 0, 3, n2);
          }(this, e3), e3.modelAssetPath) return fetch(e3.modelAssetPath.toString()).then((t3) => {
            if (t3.ok) return t3.arrayBuffer();
            throw Error(`Failed to fetch model: ${e3.modelAssetPath} (${t3.status})`);
          }).then((t3) => {
            try {
              this.g.i.FS_unlink("/model.dat");
            } catch {
            }
            this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), Yo(this, "/model.dat"), this.m(), this.J();
          });
          if (e3.modelAssetBuffer instanceof Uint8Array) Yo(this, e3.modelAssetBuffer);
          else if (e3.modelAssetBuffer) return async function(t3) {
            const e4 = [];
            for (var n2 = 0; ; ) {
              const { done: r2, value: i2 } = await t3.read();
              if (r2) break;
              e4.push(i2), n2 += i2.length;
            }
            if (0 === e4.length) return new Uint8Array(0);
            if (1 === e4.length) return e4[0];
            t3 = new Uint8Array(n2), n2 = 0;
            for (const r2 of e4) t3.set(r2, n2), n2 += r2.length;
            return t3;
          }(e3.modelAssetBuffer).then((t3) => {
            Yo(this, t3), this.m(), this.J();
          });
        }
        return this.m(), this.J(), Promise.resolve();
      }
      J() {
      }
      ea() {
        let t2;
        if (this.g.ea((e2) => {
          t2 = rs(e2);
        }), !t2) throw Error("Failed to retrieve CalculatorGraphConfig");
        return t2;
      }
      setGraph(t2, e2) {
        this.g.attachErrorListener((t3, e3) => {
          this.H.push(Error(e3));
        }), this.g.La(), this.g.setGraph(t2, e2), this.A = void 0, $o(this);
      }
      finishProcessing() {
        this.g.finishProcessing(), $o(this);
      }
      close() {
        this.A = void 0, this.g.closeGraph();
      }
    };
    function ea(t2, e2) {
      if (!t2) throw Error(`Unable to obtain required WebGL resource: ${e2}`);
      return t2;
    }
    ta.prototype.close = ta.prototype.close, e("TaskRunner", ta);
    var na = class {
      constructor(t2, e2, n2, r2) {
        this.g = t2, this.h = e2, this.m = n2, this.l = r2;
      }
      bind() {
        this.g.bindVertexArray(this.h);
      }
      close() {
        this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
      }
    };
    function ra(t2, e2, n2) {
      const r2 = t2.g;
      if (n2 = ea(r2.createShader(n2), "Failed to create WebGL shader"), r2.shaderSource(n2, e2), r2.compileShader(n2), !r2.getShaderParameter(n2, r2.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r2.getShaderInfoLog(n2)}`);
      return r2.attachShader(t2.h, n2), n2;
    }
    function ia(t2, e2) {
      const n2 = t2.g, r2 = ea(n2.createVertexArray(), "Failed to create vertex array");
      n2.bindVertexArray(r2);
      const i2 = ea(n2.createBuffer(), "Failed to create buffer");
      n2.bindBuffer(n2.ARRAY_BUFFER, i2), n2.enableVertexAttribArray(t2.P), n2.vertexAttribPointer(t2.P, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), n2.STATIC_DRAW);
      const s2 = ea(n2.createBuffer(), "Failed to create buffer");
      return n2.bindBuffer(n2.ARRAY_BUFFER, s2), n2.enableVertexAttribArray(t2.J), n2.vertexAttribPointer(t2.J, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array(e2 ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), n2.STATIC_DRAW), n2.bindBuffer(n2.ARRAY_BUFFER, null), n2.bindVertexArray(null), new na(n2, r2, i2, s2);
    }
    function sa(t2, e2) {
      if (t2.g) {
        if (e2 !== t2.g) throw Error("Cannot change GL context once initialized");
      } else t2.g = e2;
    }
    function oa(t2, e2, n2, r2) {
      return sa(t2, e2), t2.h || (t2.m(), t2.C()), n2 ? (t2.s || (t2.s = ia(t2, true)), n2 = t2.s) : (t2.v || (t2.v = ia(t2, false)), n2 = t2.v), e2.useProgram(t2.h), n2.bind(), t2.l(), t2 = r2(), n2.g.bindVertexArray(null), t2;
    }
    function aa(t2, e2, n2) {
      return sa(t2, e2), t2 = ea(e2.createTexture(), "Failed to create texture"), e2.bindTexture(e2.TEXTURE_2D, t2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, n2 ?? e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, n2 ?? e2.LINEAR), e2.bindTexture(e2.TEXTURE_2D, null), t2;
    }
    function ca(t2, e2, n2) {
      sa(t2, e2), t2.A || (t2.A = ea(e2.createFramebuffer(), "Failed to create framebuffe.")), e2.bindFramebuffer(e2.FRAMEBUFFER, t2.A), e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, n2, 0);
    }
    function ha(t2) {
      t2.g?.bindFramebuffer(t2.g.FRAMEBUFFER, null);
    }
    var ua = class {
      H() {
        return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
      }
      m() {
        const t2 = this.g;
        if (this.h = ea(t2.createProgram(), "Failed to create WebGL program"), this.ba = ra(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t2.VERTEX_SHADER), this.aa = ra(this, this.H(), t2.FRAGMENT_SHADER), t2.linkProgram(this.h), !t2.getProgramParameter(this.h, t2.LINK_STATUS)) throw Error(`Error during program linking: ${t2.getProgramInfoLog(this.h)}`);
        this.P = t2.getAttribLocation(this.h, "aVertex"), this.J = t2.getAttribLocation(this.h, "aTex");
      }
      C() {
      }
      l() {
      }
      close() {
        if (this.h) {
          const t2 = this.g;
          t2.deleteProgram(this.h), t2.deleteShader(this.ba), t2.deleteShader(this.aa);
        }
        this.A && this.g.deleteFramebuffer(this.A), this.v && this.v.close(), this.s && this.s.close();
      }
    };
    var la = class extends ua {
      H() {
        return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
      }
      C() {
        const t2 = this.g;
        t2.activeTexture(t2.TEXTURE1), this.B = aa(this, t2, t2.LINEAR), t2.activeTexture(t2.TEXTURE2), this.j = aa(this, t2, t2.NEAREST);
      }
      m() {
        super.m();
        const t2 = this.g;
        this.L = ea(t2.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.U = ea(t2.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.K = ea(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
      }
      l() {
        super.l();
        const t2 = this.g;
        t2.uniform1i(this.K, 0), t2.uniform1i(this.L, 1), t2.uniform1i(this.U, 2);
      }
      close() {
        this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
      }
    };
    var fa = class extends ua {
      H() {
        return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
      }
      C() {
        const t2 = this.g;
        t2.activeTexture(t2.TEXTURE1), this.j = aa(this, t2), t2.activeTexture(t2.TEXTURE2), this.B = aa(this, t2);
      }
      m() {
        super.m();
        const t2 = this.g;
        this.K = ea(t2.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.L = ea(t2.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.I = ea(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
      }
      l() {
        super.l();
        const t2 = this.g;
        t2.uniform1i(this.I, 0), t2.uniform1i(this.K, 1), t2.uniform1i(this.L, 2);
      }
      close() {
        this.j && this.g.deleteTexture(this.j), this.B && this.g.deleteTexture(this.B), super.close();
      }
    };
    function da(t2, e2) {
      switch (e2) {
        case 0:
          return t2.g.find((t3) => t3 instanceof Uint8Array);
        case 1:
          return t2.g.find((t3) => t3 instanceof Float32Array);
        case 2:
          return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
        default:
          throw Error(`Type is not supported: ${e2}`);
      }
    }
    function pa(t2) {
      var e2 = da(t2, 1);
      if (!e2) {
        if (e2 = da(t2, 0)) e2 = new Float32Array(e2).map((t3) => t3 / 255);
        else {
          e2 = new Float32Array(t2.width * t2.height);
          const r2 = ma(t2);
          var n2 = _a(t2);
          if (ca(n2, r2, ga(t2)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
            n2 = new Float32Array(t2.width * t2.height * 4), r2.readPixels(0, 0, t2.width, t2.height, r2.RGBA, r2.FLOAT, n2);
            for (let t3 = 0, r3 = 0; t3 < e2.length; ++t3, r3 += 4) e2[t3] = n2[r3];
          } else r2.readPixels(0, 0, t2.width, t2.height, r2.RED, r2.FLOAT, e2);
        }
        t2.g.push(e2);
      }
      return e2;
    }
    function ga(t2) {
      let e2 = da(t2, 2);
      if (!e2) {
        const n2 = ma(t2);
        e2 = va(t2);
        const r2 = pa(t2), i2 = ya(t2);
        n2.texImage2D(n2.TEXTURE_2D, 0, i2, t2.width, t2.height, 0, n2.RED, n2.FLOAT, r2), Ea(t2);
      }
      return e2;
    }
    function ma(t2) {
      if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
      return t2.h || (t2.h = ea(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
    }
    function ya(t2) {
      if (t2 = ma(t2), !wa) if (t2.getExtension("EXT_color_buffer_float") && t2.getExtension("OES_texture_float_linear") && t2.getExtension("EXT_float_blend")) wa = t2.R32F;
      else {
        if (!t2.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
        wa = t2.R16F;
      }
      return wa;
    }
    function _a(t2) {
      return t2.l || (t2.l = new ua()), t2.l;
    }
    function va(t2) {
      const e2 = ma(t2);
      e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
      let n2 = da(t2, 2);
      return n2 || (n2 = aa(_a(t2), e2, t2.m ? e2.LINEAR : e2.NEAREST), t2.g.push(n2), t2.j = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
    }
    function Ea(t2) {
      t2.h.bindTexture(t2.h.TEXTURE_2D, null);
    }
    var wa;
    var Ta = class {
      constructor(t2, e2, n2, r2, i2, s2, o2) {
        this.g = t2, this.m = e2, this.j = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, this.j && (0 === --ba && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."));
      }
      Ga() {
        return !!da(this, 0);
      }
      ka() {
        return !!da(this, 1);
      }
      R() {
        return !!da(this, 2);
      }
      ja() {
        return (e2 = da(t2 = this, 0)) || (e2 = pa(t2), e2 = new Uint8Array(e2.map((t3) => 255 * t3)), t2.g.push(e2)), e2;
        var t2, e2;
      }
      ia() {
        return pa(this);
      }
      N() {
        return ga(this);
      }
      clone() {
        const t2 = [];
        for (const e2 of this.g) {
          let n2;
          if (e2 instanceof Uint8Array) n2 = new Uint8Array(e2);
          else if (e2 instanceof Float32Array) n2 = new Float32Array(e2);
          else {
            if (!(e2 instanceof WebGLTexture)) throw Error(`Type is not supported: ${e2}`);
            {
              const t3 = ma(this), e3 = _a(this);
              t3.activeTexture(t3.TEXTURE1), n2 = aa(e3, t3, this.m ? t3.LINEAR : t3.NEAREST), t3.bindTexture(t3.TEXTURE_2D, n2);
              const r2 = ya(this);
              t3.texImage2D(t3.TEXTURE_2D, 0, r2, this.width, this.height, 0, t3.RED, t3.FLOAT, null), t3.bindTexture(t3.TEXTURE_2D, null), ca(e3, t3, n2), oa(e3, t3, false, () => {
                va(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Ea(this);
              }), ha(e3), Ea(this);
            }
          }
          t2.push(n2);
        }
        return new Ta(t2, this.m, this.R(), this.canvas, this.l, this.width, this.height);
      }
      close() {
        this.j && ma(this).deleteTexture(da(this, 2)), ba = -1;
      }
    };
    Ta.prototype.close = Ta.prototype.close, Ta.prototype.clone = Ta.prototype.clone, Ta.prototype.getAsWebGLTexture = Ta.prototype.N, Ta.prototype.getAsFloat32Array = Ta.prototype.ia, Ta.prototype.getAsUint8Array = Ta.prototype.ja, Ta.prototype.hasWebGLTexture = Ta.prototype.R, Ta.prototype.hasFloat32Array = Ta.prototype.ka, Ta.prototype.hasUint8Array = Ta.prototype.Ga;
    var ba = 250;
    var Aa = { color: "white", lineWidth: 4, radius: 6 };
    function ka(t2) {
      return { ...Aa, fillColor: (t2 = t2 || {}).color, ...t2 };
    }
    function xa(t2, e2) {
      return t2 instanceof Function ? t2(e2) : t2;
    }
    function Sa(t2, e2, n2) {
      return Math.max(Math.min(e2, n2), Math.min(Math.max(e2, n2), t2));
    }
    function La(t2) {
      if (!t2.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
      return t2.l;
    }
    function Ra(t2) {
      if (!t2.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
      return t2.j;
    }
    function Fa(t2, e2, n2) {
      if (e2.R()) n2(e2.N());
      else {
        const r2 = e2.ka() ? e2.ia() : e2.ja();
        t2.m = t2.m ?? new ua();
        const i2 = Ra(t2);
        n2((t2 = new Ta([r2], e2.m, false, i2.canvas, t2.m, e2.width, e2.height)).N()), t2.close();
      }
    }
    function Ia(t2, e2, n2, r2) {
      const i2 = function(t3) {
        return t3.g || (t3.g = new la()), t3.g;
      }(t2), s2 = Ra(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2;
      oa(i2, s2, true, () => {
        !function(t4, e3, n3, r3) {
          const i3 = t4.g;
          if (i3.activeTexture(i3.TEXTURE0), i3.bindTexture(i3.TEXTURE_2D, e3), i3.activeTexture(i3.TEXTURE1), i3.bindTexture(i3.TEXTURE_2D, t4.B), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, i3.RGBA, i3.UNSIGNED_BYTE, n3), t4.I && function(t5, e4) {
            if (t5 !== e4) return false;
            t5 = t5.entries(), e4 = e4.entries();
            for (const [r4, i4] of t5) {
              t5 = r4;
              const s3 = i4;
              var n4 = e4.next();
              if (n4.done) return false;
              const [o3, a2] = n4.value;
              if (n4 = a2, t5 !== o3 || s3[0] !== n4[0] || s3[1] !== n4[1] || s3[2] !== n4[2] || s3[3] !== n4[3]) return false;
            }
            return !!e4.next().done;
          }(t4.I, r3)) i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j);
          else {
            t4.I = r3;
            const e4 = Array(1024).fill(0);
            r3.forEach((t5, n4) => {
              if (4 !== t5.length) throw Error(`Color at index ${n4} is not a four-channel value.`);
              e4[4 * n4] = t5[0], e4[4 * n4 + 1] = t5[1], e4[4 * n4 + 2] = t5[2], e4[4 * n4 + 3] = t5[3];
            }), i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, 256, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, new Uint8Array(e4));
          }
        }(i2, e2, o2, r2), s2.clearColor(0, 0, 0, 0), s2.clear(s2.COLOR_BUFFER_BIT), s2.drawArrays(s2.TRIANGLE_FAN, 0, 4);
        const t3 = i2.g;
        t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
      });
    }
    function Ma(t2, e2, n2, r2) {
      const i2 = Ra(t2), s2 = function(t3) {
        return t3.h || (t3.h = new fa()), t3.h;
      }(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2, a2 = Array.isArray(r2) ? new ImageData(new Uint8ClampedArray(r2), 1, 1) : r2;
      oa(s2, i2, true, () => {
        var t3 = s2.g;
        t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, e2), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, s2.j), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, o2), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, s2.B), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, a2), i2.clearColor(0, 0, 0, 0), i2.clear(i2.COLOR_BUFFER_BIT), i2.drawArrays(i2.TRIANGLE_FAN, 0, 4), i2.bindTexture(i2.TEXTURE_2D, null), (t3 = s2.g).activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
      });
    }
    var Pa = class {
      constructor(t2, e2) {
        t2 instanceof CanvasRenderingContext2D || t2 instanceof OffscreenCanvasRenderingContext2D ? (this.l = t2, this.j = e2) : this.j = t2;
      }
      za(t2, e2) {
        if (t2) {
          var n2 = La(this);
          e2 = ka(e2), n2.save();
          var r2 = n2.canvas, i2 = 0;
          for (const s2 of t2) n2.fillStyle = xa(e2.fillColor, { index: i2, from: s2 }), n2.strokeStyle = xa(e2.color, { index: i2, from: s2 }), n2.lineWidth = xa(e2.lineWidth, { index: i2, from: s2 }), (t2 = new Path2D()).arc(s2.x * r2.width, s2.y * r2.height, xa(e2.radius, { index: i2, from: s2 }), 0, 2 * Math.PI), n2.fill(t2), n2.stroke(t2), ++i2;
          n2.restore();
        }
      }
      ya(t2, e2, n2) {
        if (t2 && e2) {
          var r2 = La(this);
          n2 = ka(n2), r2.save();
          var i2 = r2.canvas, s2 = 0;
          for (const o2 of e2) {
            r2.beginPath(), e2 = t2[o2.start];
            const a2 = t2[o2.end];
            e2 && a2 && (r2.strokeStyle = xa(n2.color, { index: s2, from: e2, to: a2 }), r2.lineWidth = xa(n2.lineWidth, { index: s2, from: e2, to: a2 }), r2.moveTo(e2.x * i2.width, e2.y * i2.height), r2.lineTo(a2.x * i2.width, a2.y * i2.height)), ++s2, r2.stroke();
          }
          r2.restore();
        }
      }
      va(t2, e2) {
        const n2 = La(this);
        e2 = ka(e2), n2.save(), n2.beginPath(), n2.lineWidth = xa(e2.lineWidth, {}), n2.strokeStyle = xa(e2.color, {}), n2.fillStyle = xa(e2.fillColor, {}), n2.moveTo(t2.originX, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY), n2.stroke(), n2.fill(), n2.restore();
      }
      wa(t2, e2, n2 = [0, 0, 0, 255]) {
        this.l ? function(t3, e3, n3, r2) {
          const i2 = Ra(t3);
          Fa(t3, e3, (e4) => {
            Ia(t3, e4, n3, r2), (e4 = La(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
          });
        }(this, t2, n2, e2) : Ia(this, t2.N(), n2, e2);
      }
      xa(t2, e2, n2) {
        this.l ? function(t3, e3, n3, r2) {
          const i2 = Ra(t3);
          Fa(t3, e3, (e4) => {
            Ma(t3, e4, n3, r2), (e4 = La(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
          });
        }(this, t2, e2, n2) : Ma(this, t2.N(), e2, n2);
      }
      close() {
        this.g?.close(), this.g = void 0, this.h?.close(), this.h = void 0, this.m?.close(), this.m = void 0;
      }
    };
    function Oa(t2, e2) {
      switch (e2) {
        case 0:
          return t2.g.find((t3) => t3 instanceof ImageData);
        case 1:
          return t2.g.find((t3) => "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap);
        case 2:
          return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
        default:
          throw Error(`Type is not supported: ${e2}`);
      }
    }
    function Ca(t2) {
      var e2 = Oa(t2, 0);
      if (!e2) {
        e2 = Na(t2);
        const n2 = Da(t2), r2 = new Uint8Array(t2.width * t2.height * 4);
        ca(n2, e2, Ua(t2)), e2.readPixels(0, 0, t2.width, t2.height, e2.RGBA, e2.UNSIGNED_BYTE, r2), ha(n2), e2 = new ImageData(new Uint8ClampedArray(r2.buffer), t2.width, t2.height), t2.g.push(e2);
      }
      return e2;
    }
    function Ua(t2) {
      let e2 = Oa(t2, 2);
      if (!e2) {
        const n2 = Na(t2);
        e2 = Ba(t2);
        const r2 = Oa(t2, 1) || Ca(t2);
        n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, r2), Ga(t2);
      }
      return e2;
    }
    function Na(t2) {
      if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
      return t2.h || (t2.h = ea(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
    }
    function Da(t2) {
      return t2.l || (t2.l = new ua()), t2.l;
    }
    function Ba(t2) {
      const e2 = Na(t2);
      e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
      let n2 = Oa(t2, 2);
      return n2 || (n2 = aa(Da(t2), e2), t2.g.push(n2), t2.m = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
    }
    function Ga(t2) {
      t2.h.bindTexture(t2.h.TEXTURE_2D, null);
    }
    function ja(t2) {
      const e2 = Na(t2);
      return oa(Da(t2), e2, true, () => function(t3, e3) {
        const n2 = t3.canvas;
        if (n2.width === t3.width && n2.height === t3.height) return e3();
        const r2 = n2.width, i2 = n2.height;
        return n2.width = t3.width, n2.height = t3.height, t3 = e3(), n2.width = r2, n2.height = i2, t3;
      }(t2, () => {
        if (e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.clearColor(0, 0, 0, 0), e2.clear(e2.COLOR_BUFFER_BIT), e2.drawArrays(e2.TRIANGLE_FAN, 0, 4), !(t2.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
        return t2.canvas.transferToImageBitmap();
      }));
    }
    Pa.prototype.close = Pa.prototype.close, Pa.prototype.drawConfidenceMask = Pa.prototype.xa, Pa.prototype.drawCategoryMask = Pa.prototype.wa, Pa.prototype.drawBoundingBox = Pa.prototype.va, Pa.prototype.drawConnectors = Pa.prototype.ya, Pa.prototype.drawLandmarks = Pa.prototype.za, Pa.lerp = function(t2, e2, n2, r2, i2) {
      return Sa(r2 * (1 - (t2 - e2) / (n2 - e2)) + i2 * (1 - (n2 - t2) / (n2 - e2)), r2, i2);
    }, Pa.clamp = Sa, e("DrawingUtils", Pa);
    var Va = class {
      constructor(t2, e2, n2, r2, i2, s2, o2) {
        this.g = t2, this.j = e2, this.m = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, (this.j || this.m) && (0 === --Xa && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."));
      }
      Fa() {
        return !!Oa(this, 0);
      }
      la() {
        return !!Oa(this, 1);
      }
      R() {
        return !!Oa(this, 2);
      }
      Da() {
        return Ca(this);
      }
      Ca() {
        var t2 = Oa(this, 1);
        return t2 || (Ua(this), Ba(this), t2 = ja(this), Ga(this), this.g.push(t2), this.j = true), t2;
      }
      N() {
        return Ua(this);
      }
      clone() {
        const t2 = [];
        for (const e2 of this.g) {
          let n2;
          if (e2 instanceof ImageData) n2 = new ImageData(e2.data, this.width, this.height);
          else if (e2 instanceof WebGLTexture) {
            const t3 = Na(this), e3 = Da(this);
            t3.activeTexture(t3.TEXTURE1), n2 = aa(e3, t3), t3.bindTexture(t3.TEXTURE_2D, n2), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, this.width, this.height, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.bindTexture(t3.TEXTURE_2D, null), ca(e3, t3, n2), oa(e3, t3, false, () => {
              Ba(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Ga(this);
            }), ha(e3), Ga(this);
          } else {
            if (!(e2 instanceof ImageBitmap)) throw Error(`Type is not supported: ${e2}`);
            Ua(this), Ba(this), n2 = ja(this), Ga(this);
          }
          t2.push(n2);
        }
        return new Va(t2, this.la(), this.R(), this.canvas, this.l, this.width, this.height);
      }
      close() {
        this.j && Oa(this, 1).close(), this.m && Na(this).deleteTexture(Oa(this, 2)), Xa = -1;
      }
    };
    Va.prototype.close = Va.prototype.close, Va.prototype.clone = Va.prototype.clone, Va.prototype.getAsWebGLTexture = Va.prototype.N, Va.prototype.getAsImageBitmap = Va.prototype.Ca, Va.prototype.getAsImageData = Va.prototype.Da, Va.prototype.hasWebGLTexture = Va.prototype.R, Va.prototype.hasImageBitmap = Va.prototype.la, Va.prototype.hasImageData = Va.prototype.Fa;
    var Xa = 250;
    function Ha(...t2) {
      return t2.map(([t3, e2]) => ({ start: t3, end: e2 }));
    }
    var Wa = /* @__PURE__ */ function(t2) {
      return class extends t2 {
        La() {
          this.i._registerModelResourcesGraphService();
        }
      };
    }((za = class {
      constructor(t2, e2) {
        this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e2 ? this.i.canvas = e2 : Bo() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
      }
      async initializeGraph(t2) {
        const e2 = await (await fetch(t2)).arrayBuffer();
        t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
      }
      setGraphFromString(t2) {
        this.setGraph(new TextEncoder().encode(t2), false);
      }
      setGraph(t2, e2) {
        const n2 = t2.length, r2 = this.i._malloc(n2);
        this.i.HEAPU8.set(t2, r2), e2 ? this.i._changeBinaryGraph(n2, r2) : this.i._changeTextGraph(n2, r2), this.i._free(r2);
      }
      configureAudio(t2, e2, n2, r2, i2) {
        this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Vo(this, r2 || "input_audio", (r3) => {
          Vo(this, i2 = i2 || "audio_header", (i3) => {
            this.i._configureAudio(r3, i3, t2, e2 ?? 0, n2);
          });
        });
      }
      setAutoResizeCanvas(t2) {
        this.l = t2;
      }
      setAutoRenderToScreen(t2) {
        this.i._setAutoRenderToScreen(t2);
      }
      setGpuBufferVerticalFlip(t2) {
        this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
      }
      ea(t2) {
        Wo(this, "__graph_config__", (e2) => {
          t2(e2);
        }), Vo(this, "__graph_config__", (t3) => {
          this.i._getGraphConfig(t3, void 0);
        }), delete this.i.simpleListeners.__graph_config__;
      }
      attachErrorListener(t2) {
        this.i.errorListener = t2;
      }
      attachEmptyPacketListener(t2, e2) {
        this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = e2;
      }
      addAudioToStream(t2, e2, n2) {
        this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
      }
      addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
        const s2 = 4 * t2.length;
        this.h !== s2 && (this.g && this.i._free(this.g), this.g = this.i._malloc(s2), this.h = s2), this.i.HEAPF32.set(t2, this.g / 4), Vo(this, r2, (t3) => {
          this.i._addAudioToInputStream(this.g, e2, n2, t3, i2);
        });
      }
      addGpuBufferToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const [r2, i2] = Xo(this, t2, e3);
          this.i._addBoundTextureToStream(e3, r2, i2, n2);
        });
      }
      addBoolToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          this.i._addBoolToInputStream(t2, e3, n2);
        });
      }
      addDoubleToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          this.i._addDoubleToInputStream(t2, e3, n2);
        });
      }
      addFloatToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          this.i._addFloatToInputStream(t2, e3, n2);
        });
      }
      addIntToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          this.i._addIntToInputStream(t2, e3, n2);
        });
      }
      addUintToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          this.i._addUintToInputStream(t2, e3, n2);
        });
      }
      addStringToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          Vo(this, t2, (t3) => {
            this.i._addStringToInputStream(t3, e3, n2);
          });
        });
      }
      addStringRecordToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          Ho(this, Object.keys(t2), (r2) => {
            Ho(this, Object.values(t2), (i2) => {
              this.i._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
            });
          });
        });
      }
      addProtoToStream(t2, e2, n2, r2) {
        Vo(this, n2, (n3) => {
          Vo(this, e2, (e3) => {
            const i2 = this.i._malloc(t2.length);
            this.i.HEAPU8.set(t2, i2), this.i._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.i._free(i2);
          });
        });
      }
      addEmptyPacketToStream(t2, e2) {
        Vo(this, t2, (t3) => {
          this.i._addEmptyPacketToInputStream(t3, e2);
        });
      }
      addBoolVectorToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const r2 = this.i._allocateBoolVector(t2.length);
          if (!r2) throw Error("Unable to allocate new bool vector on heap.");
          for (const e4 of t2) this.i._addBoolVectorEntry(r2, e4);
          this.i._addBoolVectorToInputStream(r2, e3, n2);
        });
      }
      addDoubleVectorToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const r2 = this.i._allocateDoubleVector(t2.length);
          if (!r2) throw Error("Unable to allocate new double vector on heap.");
          for (const e4 of t2) this.i._addDoubleVectorEntry(r2, e4);
          this.i._addDoubleVectorToInputStream(r2, e3, n2);
        });
      }
      addFloatVectorToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const r2 = this.i._allocateFloatVector(t2.length);
          if (!r2) throw Error("Unable to allocate new float vector on heap.");
          for (const e4 of t2) this.i._addFloatVectorEntry(r2, e4);
          this.i._addFloatVectorToInputStream(r2, e3, n2);
        });
      }
      addIntVectorToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const r2 = this.i._allocateIntVector(t2.length);
          if (!r2) throw Error("Unable to allocate new int vector on heap.");
          for (const e4 of t2) this.i._addIntVectorEntry(r2, e4);
          this.i._addIntVectorToInputStream(r2, e3, n2);
        });
      }
      addUintVectorToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const r2 = this.i._allocateUintVector(t2.length);
          if (!r2) throw Error("Unable to allocate new unsigned int vector on heap.");
          for (const e4 of t2) this.i._addUintVectorEntry(r2, e4);
          this.i._addUintVectorToInputStream(r2, e3, n2);
        });
      }
      addStringVectorToStream(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const r2 = this.i._allocateStringVector(t2.length);
          if (!r2) throw Error("Unable to allocate new string vector on heap.");
          for (const e4 of t2) Vo(this, e4, (t3) => {
            this.i._addStringVectorEntry(r2, t3);
          });
          this.i._addStringVectorToInputStream(r2, e3, n2);
        });
      }
      addBoolToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          this.i._addBoolToInputSidePacket(t2, e3);
        });
      }
      addDoubleToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          this.i._addDoubleToInputSidePacket(t2, e3);
        });
      }
      addFloatToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          this.i._addFloatToInputSidePacket(t2, e3);
        });
      }
      addIntToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          this.i._addIntToInputSidePacket(t2, e3);
        });
      }
      addUintToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          this.i._addUintToInputSidePacket(t2, e3);
        });
      }
      addStringToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          Vo(this, t2, (t3) => {
            this.i._addStringToInputSidePacket(t3, e3);
          });
        });
      }
      addProtoToInputSidePacket(t2, e2, n2) {
        Vo(this, n2, (n3) => {
          Vo(this, e2, (e3) => {
            const r2 = this.i._malloc(t2.length);
            this.i.HEAPU8.set(t2, r2), this.i._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.i._free(r2);
          });
        });
      }
      addBoolVectorToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          const n2 = this.i._allocateBoolVector(t2.length);
          if (!n2) throw Error("Unable to allocate new bool vector on heap.");
          for (const e4 of t2) this.i._addBoolVectorEntry(n2, e4);
          this.i._addBoolVectorToInputSidePacket(n2, e3);
        });
      }
      addDoubleVectorToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          const n2 = this.i._allocateDoubleVector(t2.length);
          if (!n2) throw Error("Unable to allocate new double vector on heap.");
          for (const e4 of t2) this.i._addDoubleVectorEntry(n2, e4);
          this.i._addDoubleVectorToInputSidePacket(n2, e3);
        });
      }
      addFloatVectorToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          const n2 = this.i._allocateFloatVector(t2.length);
          if (!n2) throw Error("Unable to allocate new float vector on heap.");
          for (const e4 of t2) this.i._addFloatVectorEntry(n2, e4);
          this.i._addFloatVectorToInputSidePacket(n2, e3);
        });
      }
      addIntVectorToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          const n2 = this.i._allocateIntVector(t2.length);
          if (!n2) throw Error("Unable to allocate new int vector on heap.");
          for (const e4 of t2) this.i._addIntVectorEntry(n2, e4);
          this.i._addIntVectorToInputSidePacket(n2, e3);
        });
      }
      addUintVectorToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          const n2 = this.i._allocateUintVector(t2.length);
          if (!n2) throw Error("Unable to allocate new unsigned int vector on heap.");
          for (const e4 of t2) this.i._addUintVectorEntry(n2, e4);
          this.i._addUintVectorToInputSidePacket(n2, e3);
        });
      }
      addStringVectorToInputSidePacket(t2, e2) {
        Vo(this, e2, (e3) => {
          const n2 = this.i._allocateStringVector(t2.length);
          if (!n2) throw Error("Unable to allocate new string vector on heap.");
          for (const e4 of t2) Vo(this, e4, (t3) => {
            this.i._addStringVectorEntry(n2, t3);
          });
          this.i._addStringVectorToInputSidePacket(n2, e3);
        });
      }
      attachBoolListener(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachBoolListener(t3);
        });
      }
      attachBoolVectorListener(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachBoolVectorListener(t3);
        });
      }
      attachIntListener(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachIntListener(t3);
        });
      }
      attachIntVectorListener(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachIntVectorListener(t3);
        });
      }
      attachUintListener(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachUintListener(t3);
        });
      }
      attachUintVectorListener(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachUintVectorListener(t3);
        });
      }
      attachDoubleListener(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachDoubleListener(t3);
        });
      }
      attachDoubleVectorListener(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachDoubleVectorListener(t3);
        });
      }
      attachFloatListener(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachFloatListener(t3);
        });
      }
      attachFloatVectorListener(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachFloatVectorListener(t3);
        });
      }
      attachStringListener(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachStringListener(t3);
        });
      }
      attachStringVectorListener(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachStringVectorListener(t3);
        });
      }
      attachProtoListener(t2, e2, n2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachProtoListener(t3, n2 || false);
        });
      }
      attachProtoVectorListener(t2, e2, n2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.i._attachProtoVectorListener(t3, n2 || false);
        });
      }
      attachAudioListener(t2, e2, n2) {
        this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Wo(this, t2, (t3, n3) => {
          t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
        }), Vo(this, t2, (t3) => {
          this.i._attachAudioListener(t3, n2 || false);
        });
      }
      finishProcessing() {
        this.i._waitUntilIdle();
      }
      closeGraph() {
        this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
      }
    }, class extends za {
      get fa() {
        return this.i;
      }
      ra(t2, e2, n2) {
        Vo(this, e2, (e3) => {
          const [r2, i2] = Xo(this, t2, e3);
          this.fa._addBoundTextureAsImageToStream(e3, r2, i2, n2);
        });
      }
      V(t2, e2) {
        Wo(this, t2, e2), Vo(this, t2, (t3) => {
          this.fa._attachImageListener(t3);
        });
      }
      da(t2, e2) {
        zo(this, t2, e2), Vo(this, t2, (t3) => {
          this.fa._attachImageVectorListener(t3);
        });
      }
    }));
    var za;
    var Ka = class extends Wa {
    };
    async function Ya(t2, e2, n2) {
      return async function(t3, e3, n3, r2) {
        return Ko(t3, e3, n3, r2);
      }(t2, n2.canvas ?? (Bo() ? void 0 : document.createElement("canvas")), e2, n2);
    }
    function $a(t2, e2, n2, r2) {
      if (t2.U) {
        const s2 = new _s();
        if (n2?.regionOfInterest) {
          if (!t2.qa) throw Error("This task doesn't support region-of-interest.");
          var i2 = n2.regionOfInterest;
          if (i2.left >= i2.right || i2.top >= i2.bottom) throw Error("Expected RectF with left < right and top < bottom.");
          if (i2.left < 0 || i2.top < 0 || i2.right > 1 || i2.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
          wn(s2, 1, (i2.left + i2.right) / 2), wn(s2, 2, (i2.top + i2.bottom) / 2), wn(s2, 4, i2.right - i2.left), wn(s2, 3, i2.bottom - i2.top);
        } else wn(s2, 1, 0.5), wn(s2, 2, 0.5), wn(s2, 4, 1), wn(s2, 3, 1);
        if (n2?.rotationDegrees) {
          if (n2?.rotationDegrees % 90 != 0) throw Error("Expected rotation to be a multiple of 90\xB0.");
          if (wn(s2, 5, -Math.PI * n2.rotationDegrees / 180), n2?.rotationDegrees % 180 != 0) {
            const [t3, r3] = jo(e2);
            n2 = yn(s2, 3) * r3 / t3, i2 = yn(s2, 4) * t3 / r3, wn(s2, 4, n2), wn(s2, 3, i2);
          }
        }
        t2.g.addProtoToStream(s2.g(), "mediapipe.NormalizedRect", t2.U, r2);
      }
      t2.g.ra(e2, t2.ba, r2 ?? performance.now()), t2.finishProcessing();
    }
    function qa(t2, e2, n2) {
      if (t2.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
      $a(t2, e2, n2, t2.B + 1);
    }
    function Ja(t2, e2, n2, r2) {
      if (!t2.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
      $a(t2, e2, n2, r2);
    }
    function Za(t2, e2, n2, r2) {
      var i2 = e2.data;
      const s2 = e2.width, o2 = s2 * (e2 = e2.height);
      if ((i2 instanceof Uint8Array || i2 instanceof Float32Array) && i2.length !== o2) throw Error("Unsupported channel count: " + i2.length / o2);
      return t2 = new Ta([i2], n2, false, t2.g.i.canvas, t2.P, s2, e2), r2 ? t2.clone() : t2;
    }
    var Qa = class extends ta {
      constructor(t2, e2, n2, r2) {
        super(t2), this.g = t2, this.ba = e2, this.U = n2, this.qa = r2, this.P = new ua();
      }
      l(t2, e2 = true) {
        if ("runningMode" in t2 && vn(this.baseOptions, 2, !!t2.runningMode && "IMAGE" !== t2.runningMode), void 0 !== t2.canvas && this.g.i.canvas !== t2.canvas) throw Error("You must create a new task to reset the canvas.");
        return super.l(t2, e2);
      }
      close() {
        this.P.close(), super.close();
      }
    };
    Qa.prototype.close = Qa.prototype.close;
    var tc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect_in", false), this.j = { detections: [] }, un(t2 = this.h = new Us(), 0, 1, e2 = new Ps()), wn(this.h, 2, 0.5), wn(this.h, 3, 0.3);
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return "minDetectionConfidence" in t2 && wn(this.h, 2, t2.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in t2 && wn(this.h, 3, t2.minSuppressionThreshold ?? 0.3), this.l(t2);
      }
      D(t2, e2) {
        return this.j = { detections: [] }, qa(this, t2, e2), this.j;
      }
      F(t2, e2, n2) {
        return this.j = { detections: [] }, Ja(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect_in"), ts(t2, "detections");
        const e2 = new Vi();
        Yn(e2, Ds, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect_in"), Ki(n2, "DETECTIONS:detections"), n2.o(e2), Zi(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
          for (const e4 of t3) t3 = ls(e4), this.j.detections.push(Ro(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("detections", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    tc.prototype.detectForVideo = tc.prototype.F, tc.prototype.detect = tc.prototype.D, tc.prototype.setOptions = tc.prototype.o, tc.createFromModelPath = async function(t2, e2) {
      return Ya(tc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, tc.createFromModelBuffer = function(t2, e2) {
      return Ya(tc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, tc.createFromOptions = function(t2, e2) {
      return Ya(tc, t2, e2);
    };
    var ec = Ha([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
    var nc = Ha([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
    var rc = Ha([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
    var ic = Ha([474, 475], [475, 476], [476, 477], [477, 474]);
    var sc = Ha([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
    var oc = Ha([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
    var ac = Ha([469, 470], [470, 471], [471, 472], [472, 469]);
    var cc = Ha([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
    var hc = [...ec, ...nc, ...rc, ...sc, ...oc, ...cc];
    var uc = Ha([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
    function lc(t2) {
      t2.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
    }
    var fc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", false), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = false, un(t2 = this.h = new js(), 0, 1, e2 = new Ps()), this.v = new Gs(), un(this.h, 0, 3, this.v), this.s = new Us(), un(this.h, 0, 2, this.s), En(this.s, 4, 1), wn(this.s, 2, 0.5), wn(this.v, 2, 0.5), wn(this.h, 4, 0.5);
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return "numFaces" in t2 && En(this.s, 4, t2.numFaces ?? 1), "minFaceDetectionConfidence" in t2 && wn(this.s, 2, t2.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && wn(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in t2 && wn(this.v, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t2 && (this.outputFacialTransformationMatrixes = !!t2.outputFacialTransformationMatrixes), this.l(t2);
      }
      D(t2, e2) {
        return lc(this), qa(this, t2, e2), this.j;
      }
      F(t2, e2, n2) {
        return lc(this), Ja(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect"), ts(t2, "face_landmarks");
        const e2 = new Vi();
        Yn(e2, Hs, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "NORM_LANDMARKS:face_landmarks"), n2.o(e2), Zi(t2, n2), this.g.attachProtoVectorListener("face_landmarks", (t3, e3) => {
          for (const e4 of t3) t3 = gs(e4), this.j.faceLandmarks.push(Fo(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
          qo(this, t3);
        }), this.outputFaceBlendshapes && (ts(t2, "blendshapes"), Ki(n2, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t3, e3) => {
          if (this.outputFaceBlendshapes) for (const e4 of t3) t3 = as(e4), this.j.faceBlendshapes.push(Lo(t3.g() ?? []));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("blendshapes", (t3) => {
          qo(this, t3);
        })), this.outputFacialTransformationMatrixes && (ts(t2, "face_geometry"), Ki(n2, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t3, e3) => {
          if (this.outputFacialTransformationMatrixes) for (const e4 of t3) (t3 = an(Bs(e4), ms, 2)) && this.j.facialTransformationMatrixes.push({ rows: gn(mn(t3, 1), 0) ?? 0, columns: gn(mn(t3, 2), 0) ?? 0, data: Ke(t3, 3, Wt, ze()).slice() ?? [] });
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("face_geometry", (t3) => {
          qo(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    fc.prototype.detectForVideo = fc.prototype.F, fc.prototype.detect = fc.prototype.D, fc.prototype.setOptions = fc.prototype.o, fc.createFromModelPath = function(t2, e2) {
      return Ya(fc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, fc.createFromModelBuffer = function(t2, e2) {
      return Ya(fc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, fc.createFromOptions = function(t2, e2) {
      return Ya(fc, t2, e2);
    }, fc.FACE_LANDMARKS_LIPS = ec, fc.FACE_LANDMARKS_LEFT_EYE = nc, fc.FACE_LANDMARKS_LEFT_EYEBROW = rc, fc.FACE_LANDMARKS_LEFT_IRIS = ic, fc.FACE_LANDMARKS_RIGHT_EYE = sc, fc.FACE_LANDMARKS_RIGHT_EYEBROW = oc, fc.FACE_LANDMARKS_RIGHT_IRIS = ac, fc.FACE_LANDMARKS_FACE_OVAL = cc, fc.FACE_LANDMARKS_CONTOURS = hc, fc.FACE_LANDMARKS_TESSELATION = uc;
    var dc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", true), un(t2 = this.j = new Ws(), 0, 1, e2 = new Ps());
      }
      get baseOptions() {
        return an(this.j, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.j, 0, 1, t2);
      }
      o(t2) {
        return super.l(t2);
      }
      Oa(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        if (this.h = "function" == typeof e2 ? e2 : n2, qa(this, t2, r2 ?? {}), !this.h) return this.s;
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect"), ts(t2, "stylized_image");
        const e2 = new Vi();
        Yn(e2, zs, this.j);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "STYLIZED_IMAGE:stylized_image"), n2.o(e2), Zi(t2, n2), this.g.V("stylized_image", (t3, e3) => {
          var n3 = !this.h, r2 = t3.data, i2 = t3.width;
          const s2 = i2 * (t3 = t3.height);
          if (r2 instanceof Uint8Array) if (r2.length === 3 * s2) {
            const e4 = new Uint8ClampedArray(4 * s2);
            for (let t4 = 0; t4 < s2; ++t4) e4[4 * t4] = r2[3 * t4], e4[4 * t4 + 1] = r2[3 * t4 + 1], e4[4 * t4 + 2] = r2[3 * t4 + 2], e4[4 * t4 + 3] = 255;
            r2 = new ImageData(e4, i2, t3);
          } else {
            if (r2.length !== 4 * s2) throw Error("Unsupported channel count: " + r2.length / s2);
            r2 = new ImageData(new Uint8ClampedArray(r2.buffer, r2.byteOffset, r2.length), i2, t3);
          }
          else if (!(r2 instanceof WebGLTexture)) throw Error(`Unsupported format: ${r2.constructor.name}`);
          i2 = new Va([r2], false, false, this.g.i.canvas, this.P, i2, t3), this.s = n3 = n3 ? i2.clone() : i2, this.h && this.h(n3), qo(this, e3);
        }), this.g.attachEmptyPacketListener("stylized_image", (t3) => {
          this.s = null, this.h && this.h(null), qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    dc.prototype.stylize = dc.prototype.Oa, dc.prototype.setOptions = dc.prototype.o, dc.createFromModelPath = function(t2, e2) {
      return Ya(dc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, dc.createFromModelBuffer = function(t2, e2) {
      return Ya(dc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, dc.createFromOptions = function(t2, e2) {
      return Ya(dc, t2, e2);
    };
    var pc = Ha([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
    function gc(t2) {
      t2.gestures = [], t2.landmarks = [], t2.worldLandmarks = [], t2.handedness = [];
    }
    function mc(t2) {
      return 0 === t2.gestures.length ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t2.gestures, landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handedness: t2.handedness, handednesses: t2.handedness };
    }
    function yc(t2, e2 = true) {
      const n2 = [];
      for (const i2 of t2) {
        var r2 = as(i2);
        t2 = [];
        for (const n3 of r2.g()) r2 = e2 && null != mn(n3, 1) ? gn(mn(n3, 1), 0) : -1, t2.push({ score: yn(n3, 2) ?? 0, index: r2, categoryName: _n(n3, 3) ?? "", displayName: _n(n3, 4) ?? "" });
        n2.push(t2);
      }
      return n2;
    }
    var _c = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", false), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], un(t2 = this.j = new Qs(), 0, 1, e2 = new Ps()), this.s = new Zs(), un(this.j, 0, 2, this.s), this.C = new Js(), un(this.s, 0, 3, this.C), this.v = new qs(), un(this.s, 0, 2, this.v), this.h = new $s(), un(this.j, 0, 3, this.h), wn(this.v, 2, 0.5), wn(this.s, 4, 0.5), wn(this.C, 2, 0.5);
      }
      get baseOptions() {
        return an(this.j, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.j, 0, 1, t2);
      }
      o(t2) {
        if (En(this.v, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && wn(this.v, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && wn(this.s, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && wn(this.C, 2, t2.minHandPresenceConfidence ?? 0.5), t2.cannedGesturesClassifierOptions) {
          var e2 = new Ks(), n2 = e2, r2 = So(t2.cannedGesturesClassifierOptions, an(this.h, Ks, 3)?.h());
          un(n2, 0, 2, r2), un(this.h, 0, 3, e2);
        } else void 0 === t2.cannedGesturesClassifierOptions && an(this.h, Ks, 3)?.g();
        return t2.customGesturesClassifierOptions ? (un(n2 = e2 = new Ks(), 0, 2, r2 = So(t2.customGesturesClassifierOptions, an(this.h, Ks, 4)?.h())), un(this.h, 0, 4, e2)) : void 0 === t2.customGesturesClassifierOptions && an(this.h, Ks, 4)?.g(), this.l(t2);
      }
      Ja(t2, e2) {
        return gc(this), qa(this, t2, e2), mc(this);
      }
      Ka(t2, e2, n2) {
        return gc(this), Ja(this, t2, n2, e2), mc(this);
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect"), ts(t2, "hand_gestures"), ts(t2, "hand_landmarks"), ts(t2, "world_hand_landmarks"), ts(t2, "handedness");
        const e2 = new Vi();
        Yn(e2, io, this.j);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "HAND_GESTURES:hand_gestures"), Ki(n2, "LANDMARKS:hand_landmarks"), Ki(n2, "WORLD_LANDMARKS:world_hand_landmarks"), Ki(n2, "HANDEDNESS:handedness"), n2.o(e2), Zi(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
          for (const e4 of t3) {
            t3 = gs(e4);
            const n3 = [];
            for (const e5 of hn(t3, ps, 1)) n3.push({ x: yn(e5, 1) ?? 0, y: yn(e5, 2) ?? 0, z: yn(e5, 3) ?? 0, visibility: yn(e5, 4) ?? 0 });
            this.landmarks.push(n3);
          }
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
          for (const e4 of t3) {
            t3 = ds(e4);
            const n3 = [];
            for (const e5 of hn(t3, fs, 1)) n3.push({ x: yn(e5, 1) ?? 0, y: yn(e5, 2) ?? 0, z: yn(e5, 3) ?? 0, visibility: yn(e5, 4) ?? 0 });
            this.worldLandmarks.push(n3);
          }
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoVectorListener("hand_gestures", (t3, e3) => {
          this.gestures.push(...yc(t3, false)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("hand_gestures", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
          this.handedness.push(...yc(t3)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("handedness", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    function vc(t2) {
      return { landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handednesses: t2.handedness, handedness: t2.handedness };
    }
    _c.prototype.recognizeForVideo = _c.prototype.Ka, _c.prototype.recognize = _c.prototype.Ja, _c.prototype.setOptions = _c.prototype.o, _c.createFromModelPath = function(t2, e2) {
      return Ya(_c, t2, { baseOptions: { modelAssetPath: e2 } });
    }, _c.createFromModelBuffer = function(t2, e2) {
      return Ya(_c, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, _c.createFromOptions = function(t2, e2) {
      return Ya(_c, t2, e2);
    }, _c.HAND_CONNECTIONS = pc;
    var Ec = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], un(t2 = this.h = new Zs(), 0, 1, e2 = new Ps()), this.s = new Js(), un(this.h, 0, 3, this.s), this.j = new qs(), un(this.h, 0, 2, this.j), En(this.j, 3, 1), wn(this.j, 2, 0.5), wn(this.s, 2, 0.5), wn(this.h, 4, 0.5);
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return "numHands" in t2 && En(this.j, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && wn(this.j, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && wn(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && wn(this.s, 2, t2.minHandPresenceConfidence ?? 0.5), this.l(t2);
      }
      D(t2, e2) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], qa(this, t2, e2), vc(this);
      }
      F(t2, e2, n2) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ja(this, t2, n2, e2), vc(this);
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect"), ts(t2, "hand_landmarks"), ts(t2, "world_hand_landmarks"), ts(t2, "handedness");
        const e2 = new Vi();
        Yn(e2, so, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "LANDMARKS:hand_landmarks"), Ki(n2, "WORLD_LANDMARKS:world_hand_landmarks"), Ki(n2, "HANDEDNESS:handedness"), n2.o(e2), Zi(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
          for (const e4 of t3) t3 = gs(e4), this.landmarks.push(Fo(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
          for (const e4 of t3) t3 = ds(e4), this.worldLandmarks.push(Io(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
          var n3 = this.handedness, r2 = n3.push;
          const i2 = [];
          for (const e4 of t3) {
            t3 = as(e4);
            const n4 = [];
            for (const e5 of t3.g()) n4.push({ score: yn(e5, 2) ?? 0, index: gn(mn(e5, 1), 0) ?? -1, categoryName: _n(e5, 3) ?? "", displayName: _n(e5, 4) ?? "" });
            i2.push(n4);
          }
          r2.call(n3, ...i2), qo(this, e3);
        }), this.g.attachEmptyPacketListener("handedness", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Ec.prototype.detectForVideo = Ec.prototype.F, Ec.prototype.detect = Ec.prototype.D, Ec.prototype.setOptions = Ec.prototype.o, Ec.createFromModelPath = function(t2, e2) {
      return Ya(Ec, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Ec.createFromModelBuffer = function(t2, e2) {
      return Ya(Ec, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Ec.createFromOptions = function(t2, e2) {
      return Ya(Ec, t2, e2);
    }, Ec.HAND_CONNECTIONS = pc;
    var wc = Ha([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
    function Tc(t2) {
      t2.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
    }
    function bc(t2) {
      try {
        if (!t2.C) return t2.h;
        t2.C(t2.h);
      } finally {
        Qo(t2);
      }
    }
    function Ac(t2, e2) {
      t2 = gs(t2), e2.push(Fo(t2));
    }
    var kc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "input_frames_image", null, false), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = false, un(t2 = this.j = new ho(), 0, 1, e2 = new Ps()), this.K = new Js(), un(this.j, 0, 2, this.K), this.aa = new oo(), un(this.j, 0, 3, this.aa), this.s = new Us(), un(this.j, 0, 4, this.s), this.I = new Gs(), un(this.j, 0, 5, this.I), this.v = new ao(), un(this.j, 0, 6, this.v), this.L = new co(), un(this.j, 0, 7, this.L), wn(this.s, 2, 0.5), wn(this.s, 3, 0.3), wn(this.I, 2, 0.5), wn(this.v, 2, 0.5), wn(this.v, 3, 0.3), wn(this.L, 2, 0.5), wn(this.K, 2, 0.5);
      }
      get baseOptions() {
        return an(this.j, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.j, 0, 1, t2);
      }
      o(t2) {
        return "minFaceDetectionConfidence" in t2 && wn(this.s, 2, t2.minFaceDetectionConfidence ?? 0.5), "minFaceSuppressionThreshold" in t2 && wn(this.s, 3, t2.minFaceSuppressionThreshold ?? 0.3), "minFacePresenceConfidence" in t2 && wn(this.I, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "minPoseDetectionConfidence" in t2 && wn(this.v, 2, t2.minPoseDetectionConfidence ?? 0.5), "minPoseSuppressionThreshold" in t2 && wn(this.v, 3, t2.minPoseSuppressionThreshold ?? 0.3), "minPosePresenceConfidence" in t2 && wn(this.L, 2, t2.minPosePresenceConfidence ?? 0.5), "outputPoseSegmentationMasks" in t2 && (this.outputPoseSegmentationMasks = !!t2.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t2 && wn(this.K, 2, t2.minHandLandmarksConfidence ?? 0.5), this.l(t2);
      }
      D(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        return this.C = "function" == typeof e2 ? e2 : n2, Tc(this), qa(this, t2, r2), bc(this);
      }
      F(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        return this.C = "function" == typeof n2 ? n2 : r2, Tc(this), Ja(this, t2, i2, e2), bc(this);
      }
      m() {
        var t2 = new es();
        Qi(t2, "input_frames_image"), ts(t2, "pose_landmarks"), ts(t2, "pose_world_landmarks"), ts(t2, "face_landmarks"), ts(t2, "left_hand_landmarks"), ts(t2, "left_hand_world_landmarks"), ts(t2, "right_hand_landmarks"), ts(t2, "right_hand_world_landmarks");
        const e2 = new Vi(), n2 = new Ri();
        Ze(n2, 1, re("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), ""), function(t3, e3) {
          if (null != e3) if (Array.isArray(e3)) Ve(t3, 2, Me(e3, Oe, void 0, void 0, false));
          else {
            if (!("string" == typeof e3 || e3 instanceof B || C(e3))) throw Error("invalid value in Any.value field: " + e3 + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
            Ze(t3, 2, dt(e3, false), N());
          }
        }(n2, this.j.g());
        const r2 = new Yi();
        Wi(r2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), pn(r2, 8, Ri, n2), zi(r2, "IMAGE:input_frames_image"), Ki(r2, "POSE_LANDMARKS:pose_landmarks"), Ki(r2, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), Ki(r2, "FACE_LANDMARKS:face_landmarks"), Ki(r2, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), Ki(r2, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), Ki(r2, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), Ki(r2, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), r2.o(e2), Zi(t2, r2), Jo(this, t2), this.g.attachProtoListener("pose_landmarks", (t3, e3) => {
          Ac(t3, this.h.poseLandmarks), qo(this, e3);
        }), this.g.attachEmptyPacketListener("pose_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoListener("pose_world_landmarks", (t3, e3) => {
          var n3 = this.h.poseWorldLandmarks;
          t3 = ds(t3), n3.push(Io(t3)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("pose_world_landmarks", (t3) => {
          qo(this, t3);
        }), this.outputPoseSegmentationMasks && (Ki(r2, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), Zo(this, "pose_segmentation_mask"), this.g.V("pose_segmentation_mask", (t3, e3) => {
          this.h.poseSegmentationMasks = [Za(this, t3, true, !this.C)], qo(this, e3);
        }), this.g.attachEmptyPacketListener("pose_segmentation_mask", (t3) => {
          this.h.poseSegmentationMasks = [], qo(this, t3);
        })), this.g.attachProtoListener("face_landmarks", (t3, e3) => {
          Ac(t3, this.h.faceLandmarks), qo(this, e3);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
          qo(this, t3);
        }), this.outputFaceBlendshapes && (ts(t2, "extra_blendshapes"), Ki(r2, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", (t3, e3) => {
          var n3 = this.h.faceBlendshapes;
          this.outputFaceBlendshapes && (t3 = as(t3), n3.push(Lo(t3.g() ?? []))), qo(this, e3);
        }), this.g.attachEmptyPacketListener("extra_blendshapes", (t3) => {
          qo(this, t3);
        })), this.g.attachProtoListener("left_hand_landmarks", (t3, e3) => {
          Ac(t3, this.h.leftHandLandmarks), qo(this, e3);
        }), this.g.attachEmptyPacketListener("left_hand_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoListener("left_hand_world_landmarks", (t3, e3) => {
          var n3 = this.h.leftHandWorldLandmarks;
          t3 = ds(t3), n3.push(Io(t3)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("left_hand_world_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoListener("right_hand_landmarks", (t3, e3) => {
          Ac(t3, this.h.rightHandLandmarks), qo(this, e3);
        }), this.g.attachEmptyPacketListener("right_hand_landmarks", (t3) => {
          qo(this, t3);
        }), this.g.attachProtoListener("right_hand_world_landmarks", (t3, e3) => {
          var n3 = this.h.rightHandWorldLandmarks;
          t3 = ds(t3), n3.push(Io(t3)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("right_hand_world_landmarks", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    kc.prototype.detectForVideo = kc.prototype.F, kc.prototype.detect = kc.prototype.D, kc.prototype.setOptions = kc.prototype.o, kc.createFromModelPath = function(t2, e2) {
      return Ya(kc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, kc.createFromModelBuffer = function(t2, e2) {
      return Ya(kc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, kc.createFromOptions = function(t2, e2) {
      return Ya(kc, t2, e2);
    }, kc.HAND_CONNECTIONS = pc, kc.POSE_CONNECTIONS = wc, kc.FACE_LANDMARKS_LIPS = ec, kc.FACE_LANDMARKS_LEFT_EYE = nc, kc.FACE_LANDMARKS_LEFT_EYEBROW = rc, kc.FACE_LANDMARKS_LEFT_IRIS = ic, kc.FACE_LANDMARKS_RIGHT_EYE = sc, kc.FACE_LANDMARKS_RIGHT_EYEBROW = oc, kc.FACE_LANDMARKS_RIGHT_IRIS = ac, kc.FACE_LANDMARKS_FACE_OVAL = cc, kc.FACE_LANDMARKS_CONTOURS = hc, kc.FACE_LANDMARKS_TESSELATION = uc;
    var xc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "input_image", "norm_rect", true), this.j = { classifications: [] }, un(t2 = this.h = new fo(), 0, 1, e2 = new Ps());
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return un(this.h, 0, 2, So(t2, an(this.h, xs, 2))), this.l(t2);
      }
      ta(t2, e2) {
        return this.j = { classifications: [] }, qa(this, t2, e2), this.j;
      }
      ua(t2, e2, n2) {
        return this.j = { classifications: [] }, Ja(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new es();
        Qi(t2, "input_image"), Qi(t2, "norm_rect"), ts(t2, "classifications");
        const e2 = new Vi();
        Yn(e2, po, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), zi(n2, "IMAGE:input_image"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "CLASSIFICATIONS:classifications"), n2.o(e2), Zi(t2, n2), this.g.attachProtoListener("classifications", (t3, e3) => {
          this.j = function(t4) {
            const e4 = { classifications: hn(t4, vs, 1).map((t5) => Lo(an(t5, ss, 4)?.g() ?? [], gn(mn(t5, 2), 0), _n(t5, 3))) };
            return null != te(Be(t4, 2)) && (e4.timestampMs = gn(te(Be(t4, 2)), 0)), e4;
          }(Es(t3)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("classifications", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    xc.prototype.classifyForVideo = xc.prototype.ua, xc.prototype.classify = xc.prototype.ta, xc.prototype.setOptions = xc.prototype.o, xc.createFromModelPath = function(t2, e2) {
      return Ya(xc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, xc.createFromModelBuffer = function(t2, e2) {
      return Ya(xc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, xc.createFromOptions = function(t2, e2) {
      return Ya(xc, t2, e2);
    };
    var Sc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", true), this.h = new go(), this.embeddings = { embeddings: [] }, un(t2 = this.h, 0, 1, e2 = new Ps());
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        var e2 = this.h, n2 = an(this.h, Ls, 2);
        return n2 = n2 ? n2.clone() : new Ls(), void 0 !== t2.l2Normalize ? vn(n2, 1, t2.l2Normalize) : "l2Normalize" in t2 && Ve(n2, 1), void 0 !== t2.quantize ? vn(n2, 2, t2.quantize) : "quantize" in t2 && Ve(n2, 2), un(e2, 0, 2, n2), this.l(t2);
      }
      Aa(t2, e2) {
        return qa(this, t2, e2), this.embeddings;
      }
      Ba(t2, e2, n2) {
        return Ja(this, t2, n2, e2), this.embeddings;
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect"), ts(t2, "embeddings_out");
        const e2 = new Vi();
        Yn(e2, mo, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "EMBEDDINGS:embeddings_out"), n2.o(e2), Zi(t2, n2), this.g.attachProtoListener("embeddings_out", (t3, e3) => {
          t3 = ks(t3), this.embeddings = function(t4) {
            return { embeddings: hn(t4, bs, 1).map((t5) => {
              const e4 = { headIndex: gn(mn(t5, 3), 0) ?? -1, headName: _n(t5, 4) ?? "" };
              if (void 0 !== on(t5, ws, tn(t5, 1))) t5 = Ke(t5 = an(t5, ws, tn(t5, 1)), 1, Wt, ze()), e4.floatEmbedding = t5.slice();
              else {
                const n3 = new Uint8Array(0);
                e4.quantizedEmbedding = an(t5, Ts, tn(t5, 2))?.pa()?.h() ?? n3;
              }
              return e4;
            }), timestampMs: gn(te(Be(t4, 2)), 0) };
          }(t3), qo(this, e3);
        }), this.g.attachEmptyPacketListener("embeddings_out", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Sc.cosineSimilarity = function(t2, e2) {
      if (t2.floatEmbedding && e2.floatEmbedding) t2 = Po(t2.floatEmbedding, e2.floatEmbedding);
      else {
        if (!t2.quantizedEmbedding || !e2.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
        t2 = Po(Mo(t2.quantizedEmbedding), Mo(e2.quantizedEmbedding));
      }
      return t2;
    }, Sc.prototype.embedForVideo = Sc.prototype.Ba, Sc.prototype.embed = Sc.prototype.Aa, Sc.prototype.setOptions = Sc.prototype.o, Sc.createFromModelPath = function(t2, e2) {
      return Ya(Sc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Sc.createFromModelBuffer = function(t2, e2) {
      return Ya(Sc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Sc.createFromOptions = function(t2, e2) {
      return Ya(Sc, t2, e2);
    };
    var Lc = class {
      constructor(t2, e2, n2) {
        this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
      }
      close() {
        this.confidenceMasks?.forEach((t2) => {
          t2.close();
        }), this.categoryMask?.close();
      }
    };
    function Rc(t2) {
      t2.categoryMask = void 0, t2.confidenceMasks = void 0, t2.qualityScores = void 0;
    }
    function Fc(t2) {
      try {
        const e2 = new Lc(t2.confidenceMasks, t2.categoryMask, t2.qualityScores);
        if (!t2.j) return e2;
        t2.j(e2);
      } finally {
        Qo(t2);
      }
    }
    Lc.prototype.close = Lc.prototype.close;
    var Ic = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", false), this.s = [], this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new wo(), this.v = new yo(), un(this.h, 0, 3, this.v), un(t2 = this.h, 0, 1, e2 = new Ps());
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return void 0 !== t2.displayNamesLocale ? Ve(this.h, 2, re(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && Ve(this.h, 2), "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
      }
      J() {
        !function(t2) {
          const e2 = hn(t2.ea(), Yi, 1).filter((t3) => _n(t3, 1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
          if (t2.s = [], e2.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
          1 === e2.length && (an(e2[0], Vi, 7)?.l()?.g() ?? /* @__PURE__ */ new Map()).forEach((e3, n2) => {
            t2.s[Number(n2)] = _n(e3, 1);
          });
        }(this);
      }
      segment(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        return this.j = "function" == typeof e2 ? e2 : n2, Rc(this), qa(this, t2, r2), Fc(this);
      }
      Ma(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        return this.j = "function" == typeof n2 ? n2 : r2, Rc(this), Ja(this, t2, i2, e2), Fc(this);
      }
      Ea() {
        return this.s;
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect");
        const e2 = new Vi();
        Yn(e2, To, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), n2.o(e2), Zi(t2, n2), Jo(this, t2), this.outputConfidenceMasks && (ts(t2, "confidence_masks"), Ki(n2, "CONFIDENCE_MASKS:confidence_masks"), Zo(this, "confidence_masks"), this.g.da("confidence_masks", (t3, e3) => {
          this.confidenceMasks = t3.map((t4) => Za(this, t4, true, !this.j)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
          this.confidenceMasks = [], qo(this, t3);
        })), this.outputCategoryMask && (ts(t2, "category_mask"), Ki(n2, "CATEGORY_MASK:category_mask"), Zo(this, "category_mask"), this.g.V("category_mask", (t3, e3) => {
          this.categoryMask = Za(this, t3, false, !this.j), qo(this, e3);
        }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
          this.categoryMask = void 0, qo(this, t3);
        })), ts(t2, "quality_scores"), Ki(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
          this.qualityScores = t3, qo(this, e3);
        }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
          this.categoryMask = void 0, qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Ic.prototype.getLabels = Ic.prototype.Ea, Ic.prototype.segmentForVideo = Ic.prototype.Ma, Ic.prototype.segment = Ic.prototype.segment, Ic.prototype.setOptions = Ic.prototype.o, Ic.createFromModelPath = function(t2, e2) {
      return Ya(Ic, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Ic.createFromModelBuffer = function(t2, e2) {
      return Ya(Ic, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Ic.createFromOptions = function(t2, e2) {
      return Ya(Ic, t2, e2);
    };
    var Mc = class {
      constructor(t2, e2, n2) {
        this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
      }
      close() {
        this.confidenceMasks?.forEach((t2) => {
          t2.close();
        }), this.categoryMask?.close();
      }
    };
    Mc.prototype.close = Mc.prototype.close;
    var Pc = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Oc = [0, li, -2];
    var Cc = [0, ii, -3, pi, ii, -1];
    var Uc = [0, Cc];
    var Nc = [0, Cc, li, -1];
    var Dc = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Bc = [0, ii, -1, pi];
    var Gc = class extends $n {
      constructor() {
        super();
      }
    };
    var jc = class extends $n {
      constructor(t2) {
        super(t2);
      }
    };
    var Vc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15];
    var Xc = class extends $n {
      constructor() {
        super();
      }
    };
    Xc.prototype.g = Li([0, vi, [0, Vc, Ei, Cc, Ei, [0, Cc, Oc], Ei, Uc, Ei, [0, Uc, Oc], Ei, Bc, Ei, [0, ii, -3, pi, Ai], Ei, [0, ii, -3, pi], Ei, [0, _i, ii, -2, pi, li, pi, -1, 2, ii, Oc], Ei, Nc, Ei, [0, Nc, Oc], ii, Oc, _i, Ei, [0, ii, -3, pi, Oc, -1], Ei, [0, vi, Bc]], _i, [0, _i, li, -1, pi]]);
    var Hc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect_in", false), this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new wo(), this.s = new yo(), un(this.h, 0, 3, this.s), un(t2 = this.h, 0, 1, e2 = new Ps());
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
      }
      segment(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        this.j = "function" == typeof n2 ? n2 : r2, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n2 = this.B + 1, r2 = new Xc();
        const s2 = new jc();
        var o2 = new Pc();
        if (En(o2, 1, 255), un(s2, 0, 12, o2), e2.keypoint && e2.scribble) throw Error("Cannot provide both keypoint and scribble.");
        if (e2.keypoint) {
          var a2 = new Dc();
          vn(a2, 3, true), wn(a2, 1, e2.keypoint.x), wn(a2, 2, e2.keypoint.y), ln(s2, 5, Vc, a2);
        } else {
          if (!e2.scribble) throw Error("Must provide either a keypoint or a scribble.");
          for (a2 of (o2 = new Gc(), e2.scribble)) vn(e2 = new Dc(), 3, true), wn(e2, 1, a2.x), wn(e2, 2, a2.y), pn(o2, 1, Dc, e2);
          ln(s2, 15, Vc, o2);
        }
        pn(r2, 1, jc, s2), this.g.addProtoToStream(r2.g(), "drishti.RenderData", "roi_in", n2), qa(this, t2, i2);
        t: {
          try {
            const t3 = new Mc(this.confidenceMasks, this.categoryMask, this.qualityScores);
            if (!this.j) {
              var c2 = t3;
              break t;
            }
            this.j(t3);
          } finally {
            Qo(this);
          }
          c2 = void 0;
        }
        return c2;
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "roi_in"), Qi(t2, "norm_rect_in");
        const e2 = new Vi();
        Yn(e2, To, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "ROI:roi_in"), zi(n2, "NORM_RECT:norm_rect_in"), n2.o(e2), Zi(t2, n2), Jo(this, t2), this.outputConfidenceMasks && (ts(t2, "confidence_masks"), Ki(n2, "CONFIDENCE_MASKS:confidence_masks"), Zo(this, "confidence_masks"), this.g.da("confidence_masks", (t3, e3) => {
          this.confidenceMasks = t3.map((t4) => Za(this, t4, true, !this.j)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
          this.confidenceMasks = [], qo(this, t3);
        })), this.outputCategoryMask && (ts(t2, "category_mask"), Ki(n2, "CATEGORY_MASK:category_mask"), Zo(this, "category_mask"), this.g.V("category_mask", (t3, e3) => {
          this.categoryMask = Za(this, t3, false, !this.j), qo(this, e3);
        }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
          this.categoryMask = void 0, qo(this, t3);
        })), ts(t2, "quality_scores"), Ki(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
          this.qualityScores = t3, qo(this, e3);
        }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
          this.categoryMask = void 0, qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Hc.prototype.segment = Hc.prototype.segment, Hc.prototype.setOptions = Hc.prototype.o, Hc.createFromModelPath = function(t2, e2) {
      return Ya(Hc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Hc.createFromModelBuffer = function(t2, e2) {
      return Ya(Hc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Hc.createFromOptions = function(t2, e2) {
      return Ya(Hc, t2, e2);
    };
    var Wc = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "input_frame_gpu", "norm_rect", false), this.j = { detections: [] }, un(t2 = this.h = new bo(), 0, 1, e2 = new Ps());
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return void 0 !== t2.displayNamesLocale ? Ve(this.h, 2, re(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && Ve(this.h, 2), void 0 !== t2.maxResults ? En(this.h, 3, t2.maxResults) : "maxResults" in t2 && Ve(this.h, 3), void 0 !== t2.scoreThreshold ? wn(this.h, 4, t2.scoreThreshold) : "scoreThreshold" in t2 && Ve(this.h, 4), void 0 !== t2.categoryAllowlist ? Tn(this.h, 5, t2.categoryAllowlist) : "categoryAllowlist" in t2 && Ve(this.h, 5), void 0 !== t2.categoryDenylist ? Tn(this.h, 6, t2.categoryDenylist) : "categoryDenylist" in t2 && Ve(this.h, 6), this.l(t2);
      }
      D(t2, e2) {
        return this.j = { detections: [] }, qa(this, t2, e2), this.j;
      }
      F(t2, e2, n2) {
        return this.j = { detections: [] }, Ja(this, t2, n2, e2), this.j;
      }
      m() {
        var t2 = new es();
        Qi(t2, "input_frame_gpu"), Qi(t2, "norm_rect"), ts(t2, "detections");
        const e2 = new Vi();
        Yn(e2, Ao, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.ObjectDetectorGraph"), zi(n2, "IMAGE:input_frame_gpu"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "DETECTIONS:detections"), n2.o(e2), Zi(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
          for (const e4 of t3) t3 = ls(e4), this.j.detections.push(Ro(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("detections", (t3) => {
          qo(this, t3);
        }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    Wc.prototype.detectForVideo = Wc.prototype.F, Wc.prototype.detect = Wc.prototype.D, Wc.prototype.setOptions = Wc.prototype.o, Wc.createFromModelPath = async function(t2, e2) {
      return Ya(Wc, t2, { baseOptions: { modelAssetPath: e2 } });
    }, Wc.createFromModelBuffer = function(t2, e2) {
      return Ya(Wc, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, Wc.createFromOptions = function(t2, e2) {
      return Ya(Wc, t2, e2);
    };
    var zc = class {
      constructor(t2, e2, n2) {
        this.landmarks = t2, this.worldLandmarks = e2, this.segmentationMasks = n2;
      }
      close() {
        this.segmentationMasks?.forEach((t2) => {
          t2.close();
        });
      }
    };
    function Kc(t2) {
      t2.landmarks = [], t2.worldLandmarks = [], t2.segmentationMasks = void 0;
    }
    function Yc(t2) {
      try {
        const e2 = new zc(t2.landmarks, t2.worldLandmarks, t2.segmentationMasks);
        if (!t2.s) return e2;
        t2.s(e2);
      } finally {
        Qo(t2);
      }
    }
    zc.prototype.close = zc.prototype.close;
    var $c = class extends Qa {
      constructor(t2, e2) {
        super(new Ka(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = false, un(t2 = this.h = new ko(), 0, 1, e2 = new Ps()), this.v = new co(), un(this.h, 0, 3, this.v), this.j = new ao(), un(this.h, 0, 2, this.j), En(this.j, 4, 1), wn(this.j, 2, 0.5), wn(this.v, 2, 0.5), wn(this.h, 4, 0.5);
      }
      get baseOptions() {
        return an(this.h, Ps, 1);
      }
      set baseOptions(t2) {
        un(this.h, 0, 1, t2);
      }
      o(t2) {
        return "numPoses" in t2 && En(this.j, 4, t2.numPoses ?? 1), "minPoseDetectionConfidence" in t2 && wn(this.j, 2, t2.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && wn(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in t2 && wn(this.v, 2, t2.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in t2 && (this.outputSegmentationMasks = t2.outputSegmentationMasks ?? false), this.l(t2);
      }
      D(t2, e2, n2) {
        const r2 = "function" != typeof e2 ? e2 : {};
        return this.s = "function" == typeof e2 ? e2 : n2, Kc(this), qa(this, t2, r2), Yc(this);
      }
      F(t2, e2, n2, r2) {
        const i2 = "function" != typeof n2 ? n2 : {};
        return this.s = "function" == typeof n2 ? n2 : r2, Kc(this), Ja(this, t2, i2, e2), Yc(this);
      }
      m() {
        var t2 = new es();
        Qi(t2, "image_in"), Qi(t2, "norm_rect"), ts(t2, "normalized_landmarks"), ts(t2, "world_landmarks"), ts(t2, "segmentation_masks");
        const e2 = new Vi();
        Yn(e2, xo, this.h);
        const n2 = new Yi();
        Wi(n2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), zi(n2, "IMAGE:image_in"), zi(n2, "NORM_RECT:norm_rect"), Ki(n2, "NORM_LANDMARKS:normalized_landmarks"), Ki(n2, "WORLD_LANDMARKS:world_landmarks"), n2.o(e2), Zi(t2, n2), Jo(this, t2), this.g.attachProtoVectorListener("normalized_landmarks", (t3, e3) => {
          this.landmarks = [];
          for (const e4 of t3) t3 = gs(e4), this.landmarks.push(Fo(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("normalized_landmarks", (t3) => {
          this.landmarks = [], qo(this, t3);
        }), this.g.attachProtoVectorListener("world_landmarks", (t3, e3) => {
          this.worldLandmarks = [];
          for (const e4 of t3) t3 = ds(e4), this.worldLandmarks.push(Io(t3));
          qo(this, e3);
        }), this.g.attachEmptyPacketListener("world_landmarks", (t3) => {
          this.worldLandmarks = [], qo(this, t3);
        }), this.outputSegmentationMasks && (Ki(n2, "SEGMENTATION_MASK:segmentation_masks"), Zo(this, "segmentation_masks"), this.g.da("segmentation_masks", (t3, e3) => {
          this.segmentationMasks = t3.map((t4) => Za(this, t4, true, !this.s)), qo(this, e3);
        }), this.g.attachEmptyPacketListener("segmentation_masks", (t3) => {
          this.segmentationMasks = [], qo(this, t3);
        })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
      }
    };
    $c.prototype.detectForVideo = $c.prototype.F, $c.prototype.detect = $c.prototype.D, $c.prototype.setOptions = $c.prototype.o, $c.createFromModelPath = function(t2, e2) {
      return Ya($c, t2, { baseOptions: { modelAssetPath: e2 } });
    }, $c.createFromModelBuffer = function(t2, e2) {
      return Ya($c, t2, { baseOptions: { modelAssetBuffer: e2 } });
    }, $c.createFromOptions = function(t2, e2) {
      return Ya($c, t2, e2);
    }, $c.POSE_CONNECTIONS = wc, exports2.FaceDetector = tc, exports2.FaceLandmarker = fc, exports2.FaceStylizer = dc, exports2.FilesetResolver = Do, exports2.GestureRecognizer = _c, exports2.HandLandmarker = Ec, exports2.HolisticLandmarker = kc, exports2.ImageClassifier = xc, exports2.ImageEmbedder = Sc, exports2.ImageSegmenter = Ic, exports2.ImageSegmenterResult = Lc, exports2.InteractiveSegmenter = Hc, exports2.InteractiveSegmenterResult = Mc, exports2.MPImage = Va, exports2.MPMask = Ta, exports2.ObjectDetector = Wc, exports2.PoseLandmarker = $c, exports2.VisionTaskRunner = Qa;
  }
});

// dist/index.js
var taskVision = require_vision_bundle();
var audioPlayer = document.getElementById("face-audio");
var setAudioSource = (path, showControls) => {
  if (audioPlayer instanceof HTMLAudioElement) {
    audioPlayer.src = path;
    showControls ? audioPlayer.setAttribute("controls", "") : audioPlayer.removeAttribute("controls");
  }
};
var { FaceLandmarker, FilesetResolver, DrawingUtils } = taskVision;
var camTracker = null;
var setFaceLandmarker = async () => {
  const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
  camTracker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU"
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1
  });
};
var video = document.getElementById("webcam");
var setWebcamStream = async () => {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.addEventListener("loadeddata", trackFace);
  });
};
var trackFace = async () => {
  let lastVideoTime = -1;
  let startTimeMs = performance.now();
  if (video.currentTime != lastVideoTime) {
    lastVideoTime = video.currentTime;
    const detections = camTracker.detectForVideo(video, startTimeMs);
    const jawOpenVal = detections?.faceBlendshapes[0]?.categories[25].score * 100;
    if (jawOpenVal > 50 && audioPlayer.paused) {
      audioPlayer.play();
    }
    if (jawOpenVal < 50 && !audioPlayer.paused) {
      audioPlayer.pause();
    }
  }
  window.requestAnimationFrame(trackFace);
};
setAudioSource("./OhHoney.mp3", true);
setFaceLandmarker();
setWebcamStream();
console.log("Hello from bundled Node.js app!");