var f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function a(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var o = function n() {
      if (this instanceof n) {
        var t = [null];
        t.push.apply(t, arguments);
        var u = Function.bind.apply(r, t);
        return new u
      }
      return r.apply(this, arguments)
    };
    o.prototype = r.prototype
  } else o = {};
  return Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function (n) {
    var t = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(o, n, t.get ? t : {
      enumerable: !0,
      get: function () {
        return e[n]
      }
    })
  }), o
}
export {
  l as a, f as c, a as g
};