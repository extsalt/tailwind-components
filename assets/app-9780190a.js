var Tc = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
import {
  r as x,
  R as H,
  a as Kl,
  e as ja
} from "./index-0c85f979.js";
import {
  c as tr,
  g as _c
} from "./_commonjsHelpers-87174ba5.js";
var Uf = Tc((Jf, yn) => {
  var Or = {},
    Ic = {
      get exports() {
        return Or
      },
      set exports(e) {
        Or = e
      }
    },
    jr = {};
  /** @license React v17.0.2
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Pc = x,
    Xl = 60103;
  jr.Fragment = 60107;
  if (typeof Symbol == "function" && Symbol.for) {
    var qi = Symbol.for;
    Xl = qi("react.element"), jr.Fragment = qi("react.fragment")
  }
  var Oc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Fc = Object.prototype.hasOwnProperty,
    Rc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function Ql(e, t, n) {
    var a, i = {},
      s = null,
      o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (a in t) Fc.call(t, a) && !Rc.hasOwnProperty(a) && (i[a] = t[a]);
    if (e && e.defaultProps)
      for (a in t = e.defaultProps, t) i[a] === void 0 && (i[a] = t[a]);
    return {
      $$typeof: Xl,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: Oc.current
    }
  }
  jr.jsx = Ql;
  jr.jsxs = Ql;
  (function (e) {
    e.exports = jr
  })(Ic);
  const j = Or.Fragment,
    r = Or.jsx,
    l = Or.jsxs;
  var xn = {},
    $c = {
      get exports() {
        return xn
      },
      set exports(e) {
        xn = e
      }
    };
  (function (e, t) {
    var n = 200,
      a = "__lodash_hash_undefined__",
      i = 1,
      s = 2,
      o = 9007199254740991,
      c = "[object Arguments]",
      u = "[object Array]",
      d = "[object AsyncFunction]",
      b = "[object Boolean]",
      w = "[object Date]",
      h = "[object Error]",
      y = "[object Function]",
      m = "[object GeneratorFunction]",
      p = "[object Map]",
      f = "[object Number]",
      N = "[object Null]",
      S = "[object Object]",
      I = "[object Promise]",
      M = "[object Proxy]",
      T = "[object RegExp]",
      L = "[object Set]",
      C = "[object String]",
      g = "[object Symbol]",
      k = "[object Undefined]",
      A = "[object WeakMap]",
      _ = "[object ArrayBuffer]",
      O = "[object DataView]",
      R = "[object Float32Array]",
      $ = "[object Float64Array]",
      P = "[object Int8Array]",
      Z = "[object Int16Array]",
      z = "[object Int32Array]",
      J = "[object Uint8Array]",
      W = "[object Uint8ClampedArray]",
      Ce = "[object Uint16Array]",
      oe = "[object Uint32Array]",
      Te = /[\\^$.*+?()[\]{}|]/g,
      Y = /^\[object .+?Constructor\]$/,
      ee = /^(?:0|[1-9]\d*)$/,
      G = {};
    G[R] = G[$] = G[P] = G[Z] = G[z] = G[J] = G[W] = G[Ce] = G[oe] = !0, G[c] = G[u] = G[_] = G[b] = G[O] = G[w] = G[h] = G[y] = G[p] = G[f] = G[S] = G[T] = G[L] = G[C] = G[A] = !1;
    var te = typeof tr == "object" && tr && tr.Object === Object && tr,
      re = typeof self == "object" && self && self.Object === Object && self,
      ne = te || re || Function("return this")(),
      Ee = t && !t.nodeType && t,
      at = Ee && !0 && e && !e.nodeType && e,
      kt = at && at.exports === Ee,
      mt = kt && te.process,
      vr = function () {
        try {
          return mt && mt.binding && mt.binding("util")
        } catch { }
      }(),
      br = vr && vr.isTypedArray;

    function qr(v, E) {
      for (var F = -1, D = v == null ? 0 : v.length, xe = 0, Q = []; ++F < D;) {
        var ke = v[F];
        E(ke, F, v) && (Q[xe++] = ke)
      }
      return Q
    }

    function Gr(v, E) {
      for (var F = -1, D = E.length, xe = v.length; ++F < D;) v[xe + F] = E[F];
      return v
    }

    function Yr(v, E) {
      for (var F = -1, D = v == null ? 0 : v.length; ++F < D;)
        if (E(v[F], F, v)) return !0;
      return !1
    }

    function Jr(v, E) {
      for (var F = -1, D = Array(v); ++F < v;) D[F] = E(F);
      return D
    }

    function Wn(v) {
      return function (E) {
        return v(E)
      }
    }

    function Kr(v, E) {
      return v.has(E)
    }

    function qn(v, E) {
      return v == null ? void 0 : v[E]
    }

    function Xr(v) {
      var E = -1,
        F = Array(v.size);
      return v.forEach(function (D, xe) {
        F[++E] = [xe, D]
      }), F
    }

    function Qr(v, E) {
      return function (F) {
        return v(E(F))
      }
    }

    function en(v) {
      var E = -1,
        F = Array(v.size);
      return v.forEach(function (D) {
        F[++E] = D
      }), F
    }
    var tn = Array.prototype,
      rn = Function.prototype,
      St = Object.prototype,
      it = ne["__core-js_shared__"],
      yr = rn.toString,
      Ye = St.hasOwnProperty,
      Ct = function () {
        var v = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
        return v ? "Symbol(src)_1." + v : ""
      }(),
      xr = St.toString,
      ae = RegExp("^" + yr.call(Ye).replace(Te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      he = kt ? ne.Buffer : void 0,
      ye = ne.Symbol,
      Yt = ne.Uint8Array,
      Rt = St.propertyIsEnumerable,
      Po = tn.splice,
      $t = ye ? ye.toStringTag : void 0,
      Fi = Object.getOwnPropertySymbols,
      Oo = he ? he.isBuffer : void 0,
      Fo = Qr(Object.keys, Object),
      Gn = Jt(ne, "DataView"),
      wr = Jt(ne, "Map"),
      Yn = Jt(ne, "Promise"),
      Jn = Jt(ne, "Set"),
      Kn = Jt(ne, "WeakMap"),
      Nr = Jt(Object, "create"),
      Ro = Zt(Gn),
      $o = Zt(wr),
      jo = Zt(Yn),
      Ho = Zt(Jn),
      Zo = Zt(Kn),
      Ri = ye ? ye.prototype : void 0,
      Xn = Ri ? Ri.valueOf : void 0;

    function jt(v) {
      var E = -1,
        F = v == null ? 0 : v.length;
      for (this.clear(); ++E < F;) {
        var D = v[E];
        this.set(D[0], D[1])
      }
    }

    function Vo() {
      this.__data__ = Nr ? Nr(null) : {}, this.size = 0
    }

    function zo(v) {
      var E = this.has(v) && delete this.__data__[v];
      return this.size -= E ? 1 : 0, E
    }

    function Do(v) {
      var E = this.__data__;
      if (Nr) {
        var F = E[v];
        return F === a ? void 0 : F
      }
      return Ye.call(E, v) ? E[v] : void 0
    }

    function Bo(v) {
      var E = this.__data__;
      return Nr ? E[v] !== void 0 : Ye.call(E, v)
    }

    function Uo(v, E) {
      var F = this.__data__;
      return this.size += this.has(v) ? 0 : 1, F[v] = Nr && E === void 0 ? a : E, this
    }
    jt.prototype.clear = Vo, jt.prototype.delete = zo, jt.prototype.get = Do, jt.prototype.has = Bo, jt.prototype.set = Uo;

    function pt(v) {
      var E = -1,
        F = v == null ? 0 : v.length;
      for (this.clear(); ++E < F;) {
        var D = v[E];
        this.set(D[0], D[1])
      }
    }

    function Wo() {
      this.__data__ = [], this.size = 0
    }

    function qo(v) {
      var E = this.__data__,
        F = an(E, v);
      if (F < 0) return !1;
      var D = E.length - 1;
      return F == D ? E.pop() : Po.call(E, F, 1), --this.size, !0
    }

    function Go(v) {
      var E = this.__data__,
        F = an(E, v);
      return F < 0 ? void 0 : E[F][1]
    }

    function Yo(v) {
      return an(this.__data__, v) > -1
    }

    function Jo(v, E) {
      var F = this.__data__,
        D = an(F, v);
      return D < 0 ? (++this.size, F.push([v, E])) : F[D][1] = E, this
    }
    pt.prototype.clear = Wo, pt.prototype.delete = qo, pt.prototype.get = Go, pt.prototype.has = Yo, pt.prototype.set = Jo;

    function Ht(v) {
      var E = -1,
        F = v == null ? 0 : v.length;
      for (this.clear(); ++E < F;) {
        var D = v[E];
        this.set(D[0], D[1])
      }
    }

    function Ko() {
      this.size = 0, this.__data__ = {
        hash: new jt,
        map: new (wr || pt),
        string: new jt
      }
    }

    function Xo(v) {
      var E = ln(this, v).delete(v);
      return this.size -= E ? 1 : 0, E
    }

    function Qo(v) {
      return ln(this, v).get(v)
    }

    function ec(v) {
      return ln(this, v).has(v)
    }

    function tc(v, E) {
      var F = ln(this, v),
        D = F.size;
      return F.set(v, E), this.size += F.size == D ? 0 : 1, this
    }
    Ht.prototype.clear = Ko, Ht.prototype.delete = Xo, Ht.prototype.get = Qo, Ht.prototype.has = ec, Ht.prototype.set = tc;

    function nn(v) {
      var E = -1,
        F = v == null ? 0 : v.length;
      for (this.__data__ = new Ht; ++E < F;) this.add(v[E])
    }

    function rc(v) {
      return this.__data__.set(v, a), this
    }

    function nc(v) {
      return this.__data__.has(v)
    }
    nn.prototype.add = nn.prototype.push = rc, nn.prototype.has = nc;

    function Et(v) {
      var E = this.__data__ = new pt(v);
      this.size = E.size
    }

    function ac() {
      this.__data__ = new pt, this.size = 0
    }

    function ic(v) {
      var E = this.__data__,
        F = E.delete(v);
      return this.size = E.size, F
    }

    function lc(v) {
      return this.__data__.get(v)
    }

    function sc(v) {
      return this.__data__.has(v)
    }

    function oc(v, E) {
      var F = this.__data__;
      if (F instanceof pt) {
        var D = F.__data__;
        if (!wr || D.length < n - 1) return D.push([v, E]), this.size = ++F.size, this;
        F = this.__data__ = new Ht(D)
      }
      return F.set(v, E), this.size = F.size, this
    }
    Et.prototype.clear = ac, Et.prototype.delete = ic, Et.prototype.get = lc, Et.prototype.has = sc, Et.prototype.set = oc;

    function cc(v, E) {
      var F = sn(v),
        D = !F && Sc(v),
        xe = !F && !D && Qn(v),
        Q = !F && !D && !xe && Ui(v),
        ke = F || D || xe || Q,
        Me = ke ? Jr(v.length, String) : [],
        _e = Me.length;
      for (var Ne in v) (E || Ye.call(v, Ne)) && !(ke && (Ne == "length" || xe && (Ne == "offset" || Ne == "parent") || Q && (Ne == "buffer" || Ne == "byteLength" || Ne == "byteOffset") || yc(Ne, _e))) && Me.push(Ne);
      return Me
    }

    function an(v, E) {
      for (var F = v.length; F--;)
        if (Vi(v[F][0], E)) return F;
      return -1
    }

    function dc(v, E, F) {
      var D = E(v);
      return sn(v) ? D : Gr(D, F(v))
    }

    function kr(v) {
      return v == null ? v === void 0 ? k : N : $t && $t in Object(v) ? vc(v) : kc(v)
    }

    function $i(v) {
      return Sr(v) && kr(v) == c
    }

    function ji(v, E, F, D, xe) {
      return v === E ? !0 : v == null || E == null || !Sr(v) && !Sr(E) ? v !== v && E !== E : uc(v, E, F, D, ji, xe)
    }

    function uc(v, E, F, D, xe, Q) {
      var ke = sn(v),
        Me = sn(E),
        _e = ke ? u : Mt(v),
        Ne = Me ? u : Mt(E);
      _e = _e == c ? S : _e, Ne = Ne == c ? S : Ne;
      var Be = _e == S,
        Qe = Ne == S,
        Re = _e == Ne;
      if (Re && Qn(v)) {
        if (!Qn(E)) return !1;
        ke = !0, Be = !1
      }
      if (Re && !Be) return Q || (Q = new Et), ke || Ui(v) ? Hi(v, E, F, D, xe, Q) : fc(v, E, _e, F, D, xe, Q);
      if (!(F & i)) {
        var Je = Be && Ye.call(v, "__wrapped__"),
          Ke = Qe && Ye.call(E, "__wrapped__");
        if (Je || Ke) {
          var Lt = Je ? v.value() : v,
            ht = Ke ? E.value() : E;
          return Q || (Q = new Et), xe(Lt, ht, F, D, Q)
        }
      }
      return Re ? (Q || (Q = new Et), gc(v, E, F, D, xe, Q)) : !1
    }

    function mc(v) {
      if (!Bi(v) || wc(v)) return !1;
      var E = zi(v) ? ae : Y;
      return E.test(Zt(v))
    }

    function pc(v) {
      return Sr(v) && Di(v.length) && !!G[kr(v)]
    }

    function hc(v) {
      if (!Nc(v)) return Fo(v);
      var E = [];
      for (var F in Object(v)) Ye.call(v, F) && F != "constructor" && E.push(F);
      return E
    }

    function Hi(v, E, F, D, xe, Q) {
      var ke = F & i,
        Me = v.length,
        _e = E.length;
      if (Me != _e && !(ke && _e > Me)) return !1;
      var Ne = Q.get(v);
      if (Ne && Q.get(E)) return Ne == E;
      var Be = -1,
        Qe = !0,
        Re = F & s ? new nn : void 0;
      for (Q.set(v, E), Q.set(E, v); ++Be < Me;) {
        var Je = v[Be],
          Ke = E[Be];
        if (D) var Lt = ke ? D(Ke, Je, Be, E, v, Q) : D(Je, Ke, Be, v, E, Q);
        if (Lt !== void 0) {
          if (Lt) continue;
          Qe = !1;
          break
        }
        if (Re) {
          if (!Yr(E, function (ht, Vt) {
            if (!Kr(Re, Vt) && (Je === ht || xe(Je, ht, F, D, Q))) return Re.push(Vt)
          })) {
            Qe = !1;
            break
          }
        } else if (!(Je === Ke || xe(Je, Ke, F, D, Q))) {
          Qe = !1;
          break
        }
      }
      return Q.delete(v), Q.delete(E), Qe
    }

    function fc(v, E, F, D, xe, Q, ke) {
      switch (F) {
        case O:
          if (v.byteLength != E.byteLength || v.byteOffset != E.byteOffset) return !1;
          v = v.buffer, E = E.buffer;
        case _:
          return !(v.byteLength != E.byteLength || !Q(new Yt(v), new Yt(E)));
        case b:
        case w:
        case f:
          return Vi(+v, +E);
        case h:
          return v.name == E.name && v.message == E.message;
        case T:
        case C:
          return v == E + "";
        case p:
          var Me = Xr;
        case L:
          var _e = D & i;
          if (Me || (Me = en), v.size != E.size && !_e) return !1;
          var Ne = ke.get(v);
          if (Ne) return Ne == E;
          D |= s, ke.set(v, E);
          var Be = Hi(Me(v), Me(E), D, xe, Q, ke);
          return ke.delete(v), Be;
        case g:
          if (Xn) return Xn.call(v) == Xn.call(E)
      }
      return !1
    }

    function gc(v, E, F, D, xe, Q) {
      var ke = F & i,
        Me = Zi(v),
        _e = Me.length,
        Ne = Zi(E),
        Be = Ne.length;
      if (_e != Be && !ke) return !1;
      for (var Qe = _e; Qe--;) {
        var Re = Me[Qe];
        if (!(ke ? Re in E : Ye.call(E, Re))) return !1
      }
      var Je = Q.get(v);
      if (Je && Q.get(E)) return Je == E;
      var Ke = !0;
      Q.set(v, E), Q.set(E, v);
      for (var Lt = ke; ++Qe < _e;) {
        Re = Me[Qe];
        var ht = v[Re],
          Vt = E[Re];
        if (D) var Wi = ke ? D(Vt, ht, Re, E, v, Q) : D(ht, Vt, Re, v, E, Q);
        if (!(Wi === void 0 ? ht === Vt || xe(ht, Vt, F, D, Q) : Wi)) {
          Ke = !1;
          break
        }
        Lt || (Lt = Re == "constructor")
      }
      if (Ke && !Lt) {
        var on = v.constructor,
          cn = E.constructor;
        on != cn && "constructor" in v && "constructor" in E && !(typeof on == "function" && on instanceof on && typeof cn == "function" && cn instanceof cn) && (Ke = !1)
      }
      return Q.delete(v), Q.delete(E), Ke
    }

    function Zi(v) {
      return dc(v, Mc, bc)
    }

    function ln(v, E) {
      var F = v.__data__;
      return xc(E) ? F[typeof E == "string" ? "string" : "hash"] : F.map
    }

    function Jt(v, E) {
      var F = qn(v, E);
      return mc(F) ? F : void 0
    }

    function vc(v) {
      var E = Ye.call(v, $t),
        F = v[$t];
      try {
        v[$t] = void 0;
        var D = !0
      } catch { }
      var xe = xr.call(v);
      return D && (E ? v[$t] = F : delete v[$t]), xe
    }
    var bc = Fi ? function (v) {
      return v == null ? [] : (v = Object(v), qr(Fi(v), function (E) {
        return Rt.call(v, E)
      }))
    } : Lc,
      Mt = kr;
    (Gn && Mt(new Gn(new ArrayBuffer(1))) != O || wr && Mt(new wr) != p || Yn && Mt(Yn.resolve()) != I || Jn && Mt(new Jn) != L || Kn && Mt(new Kn) != A) && (Mt = function (v) {
      var E = kr(v),
        F = E == S ? v.constructor : void 0,
        D = F ? Zt(F) : "";
      if (D) switch (D) {
        case Ro:
          return O;
        case $o:
          return p;
        case jo:
          return I;
        case Ho:
          return L;
        case Zo:
          return A
      }
      return E
    });

    function yc(v, E) {
      return E = E ?? o, !!E && (typeof v == "number" || ee.test(v)) && v > -1 && v % 1 == 0 && v < E
    }

    function xc(v) {
      var E = typeof v;
      return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? v !== "__proto__" : v === null
    }

    function wc(v) {
      return !!Ct && Ct in v
    }

    function Nc(v) {
      var E = v && v.constructor,
        F = typeof E == "function" && E.prototype || St;
      return v === F
    }

    function kc(v) {
      return xr.call(v)
    }

    function Zt(v) {
      if (v != null) {
        try {
          return yr.call(v)
        } catch { }
        try {
          return v + ""
        } catch { }
      }
      return ""
    }

    function Vi(v, E) {
      return v === E || v !== v && E !== E
    }
    var Sc = $i(function () {
      return arguments
    }()) ? $i : function (v) {
      return Sr(v) && Ye.call(v, "callee") && !Rt.call(v, "callee")
    },
      sn = Array.isArray;

    function Cc(v) {
      return v != null && Di(v.length) && !zi(v)
    }
    var Qn = Oo || Ac;

    function Ec(v, E) {
      return ji(v, E)
    }

    function zi(v) {
      if (!Bi(v)) return !1;
      var E = kr(v);
      return E == y || E == m || E == d || E == M
    }

    function Di(v) {
      return typeof v == "number" && v > -1 && v % 1 == 0 && v <= o
    }

    function Bi(v) {
      var E = typeof v;
      return v != null && (E == "object" || E == "function")
    }

    function Sr(v) {
      return v != null && typeof v == "object"
    }
    var Ui = br ? Wn(br) : pc;

    function Mc(v) {
      return Cc(v) ? cc(v) : hc(v)
    }

    function Lc() {
      return []
    }

    function Ac() {
      return !1
    }
    e.exports = Ec
  })($c, xn);
  var ur = {},
    Ha = {},
    jc = {
      get exports() {
        return Ha
      },
      set exports(e) {
        Ha = e
      }
    },
    wn = {},
    Hc = {
      get exports() {
        return wn
      },
      set exports(e) {
        wn = e
      }
    },
    es = function (t, n) {
      return function () {
        for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
        return t.apply(n, i)
      }
    },
    Zc = es,
    qt = Object.prototype.toString;

  function ii(e) {
    return qt.call(e) === "[object Array]"
  }

  function Za(e) {
    return typeof e > "u"
  }

  function Vc(e) {
    return e !== null && !Za(e) && e.constructor !== null && !Za(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
  }

  function zc(e) {
    return qt.call(e) === "[object ArrayBuffer]"
  }

  function Dc(e) {
    return typeof FormData < "u" && e instanceof FormData
  }

  function Bc(e) {
    var t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t
  }

  function Uc(e) {
    return typeof e == "string"
  }

  function Wc(e) {
    return typeof e == "number"
  }

  function ts(e) {
    return e !== null && typeof e == "object"
  }

  function vn(e) {
    if (qt.call(e) !== "[object Object]") return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
  }

  function qc(e) {
    return qt.call(e) === "[object Date]"
  }

  function Gc(e) {
    return qt.call(e) === "[object File]"
  }

  function Yc(e) {
    return qt.call(e) === "[object Blob]"
  }

  function rs(e) {
    return qt.call(e) === "[object Function]"
  }

  function Jc(e) {
    return ts(e) && rs(e.pipe)
  }

  function Kc(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
  }

  function Xc(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
  }

  function Qc() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
  }

  function li(e, t) {
    if (!(e === null || typeof e > "u"))
      if (typeof e != "object" && (e = [e]), ii(e))
        for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
      else
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
  }

  function Va() {
    var e = {};

    function t(i, s) {
      vn(e[s]) && vn(i) ? e[s] = Va(e[s], i) : vn(i) ? e[s] = Va({}, i) : ii(i) ? e[s] = i.slice() : e[s] = i
    }
    for (var n = 0, a = arguments.length; n < a; n++) li(arguments[n], t);
    return e
  }

  function ed(e, t, n) {
    return li(t, function (i, s) {
      n && typeof i == "function" ? e[s] = Zc(i, n) : e[s] = i
    }), e
  }

  function td(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
  }
  var qe = {
    isArray: ii,
    isArrayBuffer: zc,
    isBuffer: Vc,
    isFormData: Dc,
    isArrayBufferView: Bc,
    isString: Uc,
    isNumber: Wc,
    isObject: ts,
    isPlainObject: vn,
    isUndefined: Za,
    isDate: qc,
    isFile: Gc,
    isBlob: Yc,
    isFunction: rs,
    isStream: Jc,
    isURLSearchParams: Kc,
    isStandardBrowserEnv: Qc,
    forEach: li,
    merge: Va,
    extend: ed,
    trim: Xc,
    stripBOM: td
  },
    Kt = qe;

  function Gi(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }
  var ns = function (t, n, a) {
    if (!n) return t;
    var i;
    if (a) i = a(n);
    else if (Kt.isURLSearchParams(n)) i = n.toString();
    else {
      var s = [];
      Kt.forEach(n, function (u, d) {
        u === null || typeof u > "u" || (Kt.isArray(u) ? d = d + "[]" : u = [u], Kt.forEach(u, function (w) {
          Kt.isDate(w) ? w = w.toISOString() : Kt.isObject(w) && (w = JSON.stringify(w)), s.push(Gi(d) + "=" + Gi(w))
        }))
      }), i = s.join("&")
    }
    if (i) {
      var o = t.indexOf("#");
      o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i
    }
    return t
  },
    rd = qe;

  function _n() {
    this.handlers = []
  }
  _n.prototype.use = function (t, n, a) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
    }), this.handlers.length - 1
  };
  _n.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null)
  };
  _n.prototype.forEach = function (t) {
    rd.forEach(this.handlers, function (a) {
      a !== null && t(a)
    })
  };
  var nd = _n,
    ad = qe,
    id = function (t, n) {
      ad.forEach(t, function (i, s) {
        s !== n && s.toUpperCase() === n.toUpperCase() && (t[n] = i, delete t[s])
      })
    },
    as = function (t, n, a, i, s) {
      return t.config = n, a && (t.code = a), t.request = i, t.response = s, t.isAxiosError = !0, t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        }
      }, t
    },
    ea, Yi;

  function is() {
    if (Yi) return ea;
    Yi = 1;
    var e = as;
    return ea = function (n, a, i, s, o) {
      var c = new Error(n);
      return e(c, a, i, s, o)
    }, ea
  }
  var ta, Ji;

  function ld() {
    if (Ji) return ta;
    Ji = 1;
    var e = is();
    return ta = function (n, a, i) {
      var s = i.config.validateStatus;
      !i.status || !s || s(i.status) ? n(i) : a(e("Request failed with status code " + i.status, i.config, null, i.request, i))
    }, ta
  }
  var ra, Ki;

  function sd() {
    if (Ki) return ra;
    Ki = 1;
    var e = qe;
    return ra = e.isStandardBrowserEnv() ? function () {
      return {
        write: function (a, i, s, o, c, u) {
          var d = [];
          d.push(a + "=" + encodeURIComponent(i)), e.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()), e.isString(o) && d.push("path=" + o), e.isString(c) && d.push("domain=" + c), u === !0 && d.push("secure"), document.cookie = d.join("; ")
        },
        read: function (a) {
          var i = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
          return i ? decodeURIComponent(i[3]) : null
        },
        remove: function (a) {
          this.write(a, "", Date.now() - 864e5)
        }
      }
    }() : function () {
      return {
        write: function () { },
        read: function () {
          return null
        },
        remove: function () { }
      }
    }(), ra
  }
  var na, Xi;

  function od() {
    return Xi || (Xi = 1, na = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }), na
  }
  var aa, Qi;

  function cd() {
    return Qi || (Qi = 1, aa = function (t, n) {
      return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
    }), aa
  }
  var ia, el;

  function dd() {
    if (el) return ia;
    el = 1;
    var e = od(),
      t = cd();
    return ia = function (a, i) {
      return a && !e(i) ? t(a, i) : i
    }, ia
  }
  var la, tl;

  function ud() {
    if (tl) return la;
    tl = 1;
    var e = qe,
      t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return la = function (a) {
      var i = {},
        s, o, c;
      return a && e.forEach(a.split(`
`), function (d) {
        if (c = d.indexOf(":"), s = e.trim(d.substr(0, c)).toLowerCase(), o = e.trim(d.substr(c + 1)), s) {
          if (i[s] && t.indexOf(s) >= 0) return;
          s === "set-cookie" ? i[s] = (i[s] ? i[s] : []).concat([o]) : i[s] = i[s] ? i[s] + ", " + o : o
        }
      }), i
    }, la
  }
  var sa, rl;

  function md() {
    if (rl) return sa;
    rl = 1;
    var e = qe;
    return sa = e.isStandardBrowserEnv() ? function () {
      var n = /(msie|trident)/i.test(navigator.userAgent),
        a = document.createElement("a"),
        i;

      function s(o) {
        var c = o;
        return n && (a.setAttribute("href", c), c = a.href), a.setAttribute("href", c), {
          href: a.href,
          protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
          host: a.host,
          search: a.search ? a.search.replace(/^\?/, "") : "",
          hash: a.hash ? a.hash.replace(/^#/, "") : "",
          hostname: a.hostname,
          port: a.port,
          pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
        }
      }
      return i = s(window.location.href),
        function (c) {
          var u = e.isString(c) ? s(c) : c;
          return u.protocol === i.protocol && u.host === i.host
        }
    }() : function () {
      return function () {
        return !0
      }
    }(), sa
  }
  var oa, nl;

  function al() {
    if (nl) return oa;
    nl = 1;
    var e = qe,
      t = ld(),
      n = sd(),
      a = ns,
      i = dd(),
      s = ud(),
      o = md(),
      c = is();
    return oa = function (d) {
      return new Promise(function (w, h) {
        var y = d.data,
          m = d.headers,
          p = d.responseType;
        e.isFormData(y) && delete m["Content-Type"];
        var f = new XMLHttpRequest;
        if (d.auth) {
          var N = d.auth.username || "",
            S = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
          m.Authorization = "Basic " + btoa(N + ":" + S)
        }
        var I = i(d.baseURL, d.url);
        f.open(d.method.toUpperCase(), a(I, d.params, d.paramsSerializer), !0), f.timeout = d.timeout;

        function M() {
          if (f) {
            var L = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null,
              C = !p || p === "text" || p === "json" ? f.responseText : f.response,
              g = {
                data: C,
                status: f.status,
                statusText: f.statusText,
                headers: L,
                config: d,
                request: f
              };
            t(w, h, g), f = null
          }
        }
        if ("onloadend" in f ? f.onloadend = M : f.onreadystatechange = function () {
          !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(M)
        }, f.onabort = function () {
          f && (h(c("Request aborted", d, "ECONNABORTED", f)), f = null)
        }, f.onerror = function () {
          h(c("Network Error", d, null, f)), f = null
        }, f.ontimeout = function () {
          var C = "timeout of " + d.timeout + "ms exceeded";
          d.timeoutErrorMessage && (C = d.timeoutErrorMessage), h(c(C, d, d.transitional && d.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", f)), f = null
        }, e.isStandardBrowserEnv()) {
          var T = (d.withCredentials || o(I)) && d.xsrfCookieName ? n.read(d.xsrfCookieName) : void 0;
          T && (m[d.xsrfHeaderName] = T)
        }
        "setRequestHeader" in f && e.forEach(m, function (C, g) {
          typeof y > "u" && g.toLowerCase() === "content-type" ? delete m[g] : f.setRequestHeader(g, C)
        }), e.isUndefined(d.withCredentials) || (f.withCredentials = !!d.withCredentials), p && p !== "json" && (f.responseType = d.responseType), typeof d.onDownloadProgress == "function" && f.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", d.onUploadProgress), d.cancelToken && d.cancelToken.promise.then(function (C) {
          f && (f.abort(), h(C), f = null)
        }), y || (y = null), f.send(y)
      })
    }, oa
  }
  var Oe = qe,
    il = id,
    pd = as,
    hd = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

  function ll(e, t) {
    !Oe.isUndefined(e) && Oe.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
  }

  function fd() {
    var e;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = al()), e
  }

  function gd(e, t, n) {
    if (Oe.isString(e)) try {
      return (t || JSON.parse)(e), Oe.trim(e)
    } catch (a) {
      if (a.name !== "SyntaxError") throw a
    }
    return (n || JSON.stringify)(e)
  }
  var In = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    adapter: fd(),
    transformRequest: [function (t, n) {
      return il(n, "Accept"), il(n, "Content-Type"), Oe.isFormData(t) || Oe.isArrayBuffer(t) || Oe.isBuffer(t) || Oe.isStream(t) || Oe.isFile(t) || Oe.isBlob(t) ? t : Oe.isArrayBufferView(t) ? t.buffer : Oe.isURLSearchParams(t) ? (ll(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : Oe.isObject(t) || n && n["Content-Type"] === "application/json" ? (ll(n, "application/json"), gd(t)) : t
    }],
    transformResponse: [function (t) {
      var n = this.transitional,
        a = n && n.silentJSONParsing,
        i = n && n.forcedJSONParsing,
        s = !a && this.responseType === "json";
      if (s || i && Oe.isString(t) && t.length) try {
        return JSON.parse(t)
      } catch (o) {
        if (s) throw o.name === "SyntaxError" ? pd(o, this, "E_JSON_PARSE") : o
      }
      return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return t >= 200 && t < 300
    }
  };
  In.headers = {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  };
  Oe.forEach(["delete", "get", "head"], function (t) {
    In.headers[t] = {}
  });
  Oe.forEach(["post", "put", "patch"], function (t) {
    In.headers[t] = Oe.merge(hd)
  });
  var si = In,
    vd = qe,
    bd = si,
    yd = function (t, n, a) {
      var i = this || bd;
      return vd.forEach(a, function (o) {
        t = o.call(i, t, n)
      }), t
    },
    ca, sl;

  function ls() {
    return sl || (sl = 1, ca = function (t) {
      return !!(t && t.__CANCEL__)
    }), ca
  }
  var ol = qe,
    da = yd,
    xd = ls(),
    wd = si;

  function ua(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
  }
  var Nd = function (t) {
    ua(t), t.headers = t.headers || {}, t.data = da.call(t, t.data, t.headers, t.transformRequest), t.headers = ol.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), ol.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (i) {
      delete t.headers[i]
    });
    var n = t.adapter || wd.adapter;
    return n(t).then(function (i) {
      return ua(t), i.data = da.call(t, i.data, i.headers, t.transformResponse), i
    }, function (i) {
      return xd(i) || (ua(t), i && i.response && (i.response.data = da.call(t, i.response.data, i.response.headers, t.transformResponse))), Promise.reject(i)
    })
  },
    $e = qe,
    ss = function (t, n) {
      n = n || {};
      var a = {},
        i = ["url", "method", "data"],
        s = ["headers", "auth", "proxy", "params"],
        o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
        c = ["validateStatus"];

      function u(h, y) {
        return $e.isPlainObject(h) && $e.isPlainObject(y) ? $e.merge(h, y) : $e.isPlainObject(y) ? $e.merge({}, y) : $e.isArray(y) ? y.slice() : y
      }

      function d(h) {
        $e.isUndefined(n[h]) ? $e.isUndefined(t[h]) || (a[h] = u(void 0, t[h])) : a[h] = u(t[h], n[h])
      }
      $e.forEach(i, function (y) {
        $e.isUndefined(n[y]) || (a[y] = u(void 0, n[y]))
      }), $e.forEach(s, d), $e.forEach(o, function (y) {
        $e.isUndefined(n[y]) ? $e.isUndefined(t[y]) || (a[y] = u(void 0, t[y])) : a[y] = u(void 0, n[y])
      }), $e.forEach(c, function (y) {
        y in n ? a[y] = u(t[y], n[y]) : y in t && (a[y] = u(void 0, t[y]))
      });
      var b = i.concat(s).concat(o).concat(c),
        w = Object.keys(t).concat(Object.keys(n)).filter(function (y) {
          return b.indexOf(y) === -1
        });
      return $e.forEach(w, d), a
    };
  const kd = "axios",
    Sd = "0.21.4",
    Cd = "Promise based HTTP client for the browser and node.js",
    Ed = "index.js",
    Md = {
      test: "grunt test",
      start: "node ./sandbox/server.js",
      build: "NODE_ENV=production grunt build",
      preversion: "npm test",
      version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
      postversion: "git push && git push --tags",
      examples: "node ./examples/server.js",
      coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
      fix: "eslint --fix lib/**/*.js"
    },
    Ld = {
      type: "git",
      url: "https://github.com/axios/axios.git"
    },
    Ad = ["xhr", "http", "ajax", "promise", "node"],
    Td = "Matt Zabriskie",
    _d = "MIT",
    Id = {
      url: "https://github.com/axios/axios/issues"
    },
    Pd = "https://axios-http.com",
    Od = {
      coveralls: "^3.0.0",
      "es6-promise": "^4.2.4",
      grunt: "^1.3.0",
      "grunt-banner": "^0.6.0",
      "grunt-cli": "^1.2.0",
      "grunt-contrib-clean": "^1.1.0",
      "grunt-contrib-watch": "^1.0.0",
      "grunt-eslint": "^23.0.0",
      "grunt-karma": "^4.0.0",
      "grunt-mocha-test": "^0.13.3",
      "grunt-ts": "^6.0.0-beta.19",
      "grunt-webpack": "^4.0.2",
      "istanbul-instrumenter-loader": "^1.0.0",
      "jasmine-core": "^2.4.1",
      karma: "^6.3.2",
      "karma-chrome-launcher": "^3.1.0",
      "karma-firefox-launcher": "^2.1.0",
      "karma-jasmine": "^1.1.1",
      "karma-jasmine-ajax": "^0.1.13",
      "karma-safari-launcher": "^1.0.0",
      "karma-sauce-launcher": "^4.3.6",
      "karma-sinon": "^1.0.5",
      "karma-sourcemap-loader": "^0.3.8",
      "karma-webpack": "^4.0.2",
      "load-grunt-tasks": "^3.5.2",
      minimist: "^1.2.0",
      mocha: "^8.2.1",
      sinon: "^4.5.0",
      "terser-webpack-plugin": "^4.2.3",
      typescript: "^4.0.5",
      "url-search-params": "^0.10.0",
      webpack: "^4.44.2",
      "webpack-dev-server": "^3.11.0"
    },
    Fd = {
      "./lib/adapters/http.js": "./lib/adapters/xhr.js"
    },
    Rd = "dist/axios.min.js",
    $d = "dist/axios.min.js",
    jd = "./index.d.ts",
    Hd = {
      "follow-redirects": "^1.14.0"
    },
    Zd = [{
      path: "./dist/axios.min.js",
      threshold: "5kB"
    }],
    Vd = {
      name: kd,
      version: Sd,
      description: Cd,
      main: Ed,
      scripts: Md,
      repository: Ld,
      keywords: Ad,
      author: Td,
      license: _d,
      bugs: Id,
      homepage: Pd,
      devDependencies: Od,
      browser: Fd,
      jsdelivr: Rd,
      unpkg: $d,
      typings: jd,
      dependencies: Hd,
      bundlesize: Zd
    };
  var os = Vd,
    oi = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
    oi[e] = function (a) {
      return typeof a === e || "a" + (t < 1 ? "n " : " ") + e
    }
  });
  var cl = {},
    zd = os.version.split(".");

  function cs(e, t) {
    for (var n = t ? t.split(".") : zd, a = e.split("."), i = 0; i < 3; i++) {
      if (n[i] > a[i]) return !0;
      if (n[i] < a[i]) return !1
    }
    return !1
  }
  oi.transitional = function (t, n, a) {
    var i = n && cs(n);

    function s(o, c) {
      return "[Axios v" + os.version + "] Transitional option '" + o + "'" + c + (a ? ". " + a : "")
    }
    return function (o, c, u) {
      if (t === !1) throw new Error(s(c, " has been removed in " + n));
      return i && !cl[c] && (cl[c] = !0, console.warn(s(c, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, c, u) : !0
    }
  };

  function Dd(e, t, n) {
    if (typeof e != "object") throw new TypeError("options must be an object");
    for (var a = Object.keys(e), i = a.length; i-- > 0;) {
      var s = a[i],
        o = t[s];
      if (o) {
        var c = e[s],
          u = c === void 0 || o(c, s, e);
        if (u !== !0) throw new TypeError("option " + s + " must be " + u);
        continue
      }
      if (n !== !0) throw Error("Unknown option " + s)
    }
  }
  var Bd = {
    isOlderVersion: cs,
    assertOptions: Dd,
    validators: oi
  },
    ds = qe,
    Ud = ns,
    dl = nd,
    ul = Nd,
    Pn = ss,
    us = Bd,
    Xt = us.validators;

  function Hr(e) {
    this.defaults = e, this.interceptors = {
      request: new dl,
      response: new dl
    }
  }
  Hr.prototype.request = function (t) {
    typeof t == "string" ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = Pn(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
    var n = t.transitional;
    n !== void 0 && us.assertOptions(n, {
      silentJSONParsing: Xt.transitional(Xt.boolean, "1.0.0"),
      forcedJSONParsing: Xt.transitional(Xt.boolean, "1.0.0"),
      clarifyTimeoutError: Xt.transitional(Xt.boolean, "1.0.0")
    }, !1);
    var a = [],
      i = !0;
    this.interceptors.request.forEach(function (h) {
      typeof h.runWhen == "function" && h.runWhen(t) === !1 || (i = i && h.synchronous, a.unshift(h.fulfilled, h.rejected))
    });
    var s = [];
    this.interceptors.response.forEach(function (h) {
      s.push(h.fulfilled, h.rejected)
    });
    var o;
    if (!i) {
      var c = [ul, void 0];
      for (Array.prototype.unshift.apply(c, a), c = c.concat(s), o = Promise.resolve(t); c.length;) o = o.then(c.shift(), c.shift());
      return o
    }
    for (var u = t; a.length;) {
      var d = a.shift(),
        b = a.shift();
      try {
        u = d(u)
      } catch (w) {
        b(w);
        break
      }
    }
    try {
      o = ul(u)
    } catch (w) {
      return Promise.reject(w)
    }
    for (; s.length;) o = o.then(s.shift(), s.shift());
    return o
  };
  Hr.prototype.getUri = function (t) {
    return t = Pn(this.defaults, t), Ud(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
  };
  ds.forEach(["delete", "get", "head", "options"], function (t) {
    Hr.prototype[t] = function (n, a) {
      return this.request(Pn(a || {}, {
        method: t,
        url: n,
        data: (a || {}).data
      }))
    }
  });
  ds.forEach(["post", "put", "patch"], function (t) {
    Hr.prototype[t] = function (n, a, i) {
      return this.request(Pn(i || {}, {
        method: t,
        url: n,
        data: a
      }))
    }
  });
  var Wd = Hr,
    ma, ml;

  function ms() {
    if (ml) return ma;
    ml = 1;

    function e(t) {
      this.message = t
    }
    return e.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "")
    }, e.prototype.__CANCEL__ = !0, ma = e, ma
  }
  var pa, pl;

  function qd() {
    if (pl) return pa;
    pl = 1;
    var e = ms();

    function t(n) {
      if (typeof n != "function") throw new TypeError("executor must be a function.");
      var a;
      this.promise = new Promise(function (o) {
        a = o
      });
      var i = this;
      n(function (o) {
        i.reason || (i.reason = new e(o), a(i.reason))
      })
    }
    return t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }, t.source = function () {
      var a, i = new t(function (o) {
        a = o
      });
      return {
        token: i,
        cancel: a
      }
    }, pa = t, pa
  }
  var ha, hl;

  function Gd() {
    return hl || (hl = 1, ha = function (t) {
      return function (a) {
        return t.apply(null, a)
      }
    }), ha
  }
  var fa, fl;

  function Yd() {
    return fl || (fl = 1, fa = function (t) {
      return typeof t == "object" && t.isAxiosError === !0
    }), fa
  }
  var gl = qe,
    Jd = es,
    bn = Wd,
    Kd = ss,
    Xd = si;

  function ps(e) {
    var t = new bn(e),
      n = Jd(bn.prototype.request, t);
    return gl.extend(n, bn.prototype, t), gl.extend(n, t), n
  }
  var rt = ps(Xd);
  rt.Axios = bn;
  rt.create = function (t) {
    return ps(Kd(rt.defaults, t))
  };
  rt.Cancel = ms();
  rt.CancelToken = qd();
  rt.isCancel = ls();
  rt.all = function (t) {
    return Promise.all(t)
  };
  rt.spread = Gd();
  rt.isAxiosError = Yd();
  Hc.exports = rt;
  wn.default = rt;
  (function (e) {
    e.exports = wn
  })(jc);
  var Qd = function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      n = Symbol("test"),
      a = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]") return !1;
    var i = 42;
    t[n] = i;
    for (n in t) return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n)) return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = Object.getOwnPropertyDescriptor(t, n);
      if (o.value !== i || o.enumerable !== !0) return !1
    }
    return !0
  },
    vl = typeof Symbol < "u" && Symbol,
    eu = Qd,
    tu = function () {
      return typeof vl != "function" || typeof Symbol != "function" || typeof vl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : eu()
    },
    ru = "Function.prototype.bind called on incompatible ",
    ga = Array.prototype.slice,
    nu = Object.prototype.toString,
    au = "[object Function]",
    iu = function (t) {
      var n = this;
      if (typeof n != "function" || nu.call(n) !== au) throw new TypeError(ru + n);
      for (var a = ga.call(arguments, 1), i, s = function () {
        if (this instanceof i) {
          var b = n.apply(this, a.concat(ga.call(arguments)));
          return Object(b) === b ? b : this
        } else return n.apply(t, a.concat(ga.call(arguments)))
      }, o = Math.max(0, n.length - a.length), c = [], u = 0; u < o; u++) c.push("$" + u);
      if (i = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
        var d = function () { };
        d.prototype = n.prototype, i.prototype = new d, d.prototype = null
      }
      return i
    },
    lu = iu,
    ci = Function.prototype.bind || lu,
    su = ci,
    ou = su.call(Function.call, Object.prototype.hasOwnProperty),
    ie, ar = SyntaxError,
    hs = Function,
    nr = TypeError,
    va = function (e) {
      try {
        return hs('"use strict"; return (' + e + ").constructor;")()
      } catch { }
    },
    Ut = Object.getOwnPropertyDescriptor;
  if (Ut) try {
    Ut({}, "")
  } catch {
    Ut = null
  }
  var ba = function () {
    throw new nr
  },
    cu = Ut ? function () {
      try {
        return arguments.callee, ba
      } catch {
        try {
          return Ut(arguments, "callee").get
        } catch {
          return ba
        }
      }
    }() : ba,
    Qt = tu(),
    st = Object.getPrototypeOf || function (e) {
      return e.__proto__
    },
    er = {},
    du = typeof Uint8Array > "u" ? ie : st(Uint8Array),
    Wt = {
      "%AggregateError%": typeof AggregateError > "u" ? ie : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ie : ArrayBuffer,
      "%ArrayIteratorPrototype%": Qt ? st([][Symbol.iterator]()) : ie,
      "%AsyncFromSyncIteratorPrototype%": ie,
      "%AsyncFunction%": er,
      "%AsyncGenerator%": er,
      "%AsyncGeneratorFunction%": er,
      "%AsyncIteratorPrototype%": er,
      "%Atomics%": typeof Atomics > "u" ? ie : Atomics,
      "%BigInt%": typeof BigInt > "u" ? ie : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? ie : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? ie : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? ie : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? ie : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? ie : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ie : FinalizationRegistry,
      "%Function%": hs,
      "%GeneratorFunction%": er,
      "%Int8Array%": typeof Int8Array > "u" ? ie : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? ie : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? ie : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": Qt ? st(st([][Symbol.iterator]())) : ie,
      "%JSON%": typeof JSON == "object" ? JSON : ie,
      "%Map%": typeof Map > "u" ? ie : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !Qt ? ie : st(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? ie : Promise,
      "%Proxy%": typeof Proxy > "u" ? ie : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? ie : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? ie : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !Qt ? ie : st(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ie : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": Qt ? st(""[Symbol.iterator]()) : ie,
      "%Symbol%": Qt ? Symbol : ie,
      "%SyntaxError%": ar,
      "%ThrowTypeError%": cu,
      "%TypedArray%": du,
      "%TypeError%": nr,
      "%Uint8Array%": typeof Uint8Array > "u" ? ie : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ie : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? ie : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? ie : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? ie : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? ie : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? ie : WeakSet
    };
  try {
    null.error
  } catch (e) {
    var uu = st(st(e));
    Wt["%Error.prototype%"] = uu
  }
  var mu = function e(t) {
    var n;
    if (t === "%AsyncFunction%") n = va("async function () {}");
    else if (t === "%GeneratorFunction%") n = va("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") n = va("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var a = e("%AsyncGeneratorFunction%");
      a && (n = a.prototype)
    } else if (t === "%AsyncIteratorPrototype%") {
      var i = e("%AsyncGenerator%");
      i && (n = st(i.prototype))
    }
    return Wt[t] = n, n
  },
    bl = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    Zr = ci,
    Nn = ou,
    pu = Zr.call(Function.call, Array.prototype.concat),
    hu = Zr.call(Function.apply, Array.prototype.splice),
    yl = Zr.call(Function.call, String.prototype.replace),
    kn = Zr.call(Function.call, String.prototype.slice),
    fu = Zr.call(Function.call, RegExp.prototype.exec),
    gu = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    vu = /\\(\\)?/g,
    bu = function (t) {
      var n = kn(t, 0, 1),
        a = kn(t, -1);
      if (n === "%" && a !== "%") throw new ar("invalid intrinsic syntax, expected closing `%`");
      if (a === "%" && n !== "%") throw new ar("invalid intrinsic syntax, expected opening `%`");
      var i = [];
      return yl(t, gu, function (s, o, c, u) {
        i[i.length] = c ? yl(u, vu, "$1") : o || s
      }), i
    },
    yu = function (t, n) {
      var a = t,
        i;
      if (Nn(bl, a) && (i = bl[a], a = "%" + i[0] + "%"), Nn(Wt, a)) {
        var s = Wt[a];
        if (s === er && (s = mu(a)), typeof s > "u" && !n) throw new nr("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
          alias: i,
          name: a,
          value: s
        }
      }
      throw new ar("intrinsic " + t + " does not exist!")
    },
    di = function (t, n) {
      if (typeof t != "string" || t.length === 0) throw new nr("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof n != "boolean") throw new nr('"allowMissing" argument must be a boolean');
      if (fu(/^%?[^%]*%?$/, t) === null) throw new ar("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var a = bu(t),
        i = a.length > 0 ? a[0] : "",
        s = yu("%" + i + "%", n),
        o = s.name,
        c = s.value,
        u = !1,
        d = s.alias;
      d && (i = d[0], hu(a, pu([0, 1], d)));
      for (var b = 1, w = !0; b < a.length; b += 1) {
        var h = a[b],
          y = kn(h, 0, 1),
          m = kn(h, -1);
        if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m) throw new ar("property names with quotes must have matching quotes");
        if ((h === "constructor" || !w) && (u = !0), i += "." + h, o = "%" + i + "%", Nn(Wt, o)) c = Wt[o];
        else if (c != null) {
          if (!(h in c)) {
            if (!n) throw new nr("base intrinsic for " + t + " exists, but the property is not available.");
            return
          }
          if (Ut && b + 1 >= a.length) {
            var p = Ut(c, h);
            w = !!p, w && "get" in p && !("originalValue" in p.get) ? c = p.get : c = c[h]
          } else w = Nn(c, h), c = c[h];
          w && !u && (Wt[o] = c)
        }
      }
      return c
    },
    za = {},
    xu = {
      get exports() {
        return za
      },
      set exports(e) {
        za = e
      }
    };
  (function (e) {
    var t = ci,
      n = di,
      a = n("%Function.prototype.apply%"),
      i = n("%Function.prototype.call%"),
      s = n("%Reflect.apply%", !0) || t.call(i, a),
      o = n("%Object.getOwnPropertyDescriptor%", !0),
      c = n("%Object.defineProperty%", !0),
      u = n("%Math.max%");
    if (c) try {
      c({}, "a", {
        value: 1
      })
    } catch {
      c = null
    }
    e.exports = function (w) {
      var h = s(t, i, arguments);
      if (o && c) {
        var y = o(h, "length");
        y.configurable && c(h, "length", {
          value: 1 + u(0, w.length - (arguments.length - 1))
        })
      }
      return h
    };
    var d = function () {
      return s(t, a, arguments)
    };
    c ? c(e.exports, "apply", {
      value: d
    }) : e.exports.apply = d
  })(xu);
  var fs = di,
    gs = za,
    wu = gs(fs("String.prototype.indexOf")),
    Nu = function (t, n) {
      var a = fs(t, !!n);
      return typeof a == "function" && wu(t, ".prototype.") > -1 ? gs(a) : a
    };
  const ku = {},
    Su = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: ku
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Cu = _c(Su);
  var ui = typeof Map == "function" && Map.prototype,
    ya = Object.getOwnPropertyDescriptor && ui ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Sn = ui && ya && typeof ya.get == "function" ? ya.get : null,
    xl = ui && Map.prototype.forEach,
    mi = typeof Set == "function" && Set.prototype,
    xa = Object.getOwnPropertyDescriptor && mi ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    Cn = mi && xa && typeof xa.get == "function" ? xa.get : null,
    wl = mi && Set.prototype.forEach,
    Eu = typeof WeakMap == "function" && WeakMap.prototype,
    Ar = Eu ? WeakMap.prototype.has : null,
    Mu = typeof WeakSet == "function" && WeakSet.prototype,
    Tr = Mu ? WeakSet.prototype.has : null,
    Lu = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Lu ? WeakRef.prototype.deref : null,
    Au = Boolean.prototype.valueOf,
    Tu = Object.prototype.toString,
    _u = Function.prototype.toString,
    Iu = String.prototype.match,
    pi = String.prototype.slice,
    Tt = String.prototype.replace,
    Pu = String.prototype.toUpperCase,
    kl = String.prototype.toLowerCase,
    vs = RegExp.prototype.test,
    Sl = Array.prototype.concat,
    ot = Array.prototype.join,
    Ou = Array.prototype.slice,
    Cl = Math.floor,
    Da = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    wa = Object.getOwnPropertySymbols,
    Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    ir = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    He = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ir || "symbol") ? Symbol.toStringTag : null,
    bs = Object.prototype.propertyIsEnumerable,
    El = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
      return e.__proto__
    } : null);

  function Ml(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || vs.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
      var a = e < 0 ? -Cl(-e) : Cl(e);
      if (a !== e) {
        var i = String(a),
          s = pi.call(t, i.length + 1);
        return Tt.call(i, n, "$&_") + "." + Tt.call(Tt.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
      }
    }
    return Tt.call(t, n, "$&_")
  }
  var Ua = Cu,
    Ll = Ua.custom,
    Al = xs(Ll) ? Ll : null,
    Fu = function e(t, n, a, i) {
      var s = n || {};
      if (At(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (At(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var o = At(s, "customInspect") ? s.customInspect : !0;
      if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (At(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (At(s, "numericSeparator") && typeof s.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var c = s.numericSeparator;
      if (typeof t > "u") return "undefined";
      if (t === null) return "null";
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "string") return Ns(t, s);
      if (typeof t == "number") {
        if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
        var u = String(t);
        return c ? Ml(t, u) : u
      }
      if (typeof t == "bigint") {
        var d = String(t) + "n";
        return c ? Ml(t, d) : d
      }
      var b = typeof s.depth > "u" ? 5 : s.depth;
      if (typeof a > "u" && (a = 0), a >= b && b > 0 && typeof t == "object") return Wa(t) ? "[Array]" : "[Object]";
      var w = Qu(s, a);
      if (typeof i > "u") i = [];
      else if (ws(i, t) >= 0) return "[Circular]";

      function h(R, $, P) {
        if ($ && (i = Ou.call(i), i.push($)), P) {
          var Z = {
            depth: s.depth
          };
          return At(s, "quoteStyle") && (Z.quoteStyle = s.quoteStyle), e(R, Z, a + 1, i)
        }
        return e(R, s, a + 1, i)
      }
      if (typeof t == "function" && !Tl(t)) {
        var y = Bu(t),
          m = dn(t, h);
        return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (m.length > 0 ? " { " + ot.call(m, ", ") + " }" : "")
      }
      if (xs(t)) {
        var p = ir ? Tt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ba.call(t);
        return typeof t == "object" && !ir ? Cr(p) : p
      }
      if (Ju(t)) {
        for (var f = "<" + kl.call(String(t.nodeName)), N = t.attributes || [], S = 0; S < N.length; S++) f += " " + N[S].name + "=" + ys(Ru(N[S].value), "double", s);
        return f += ">", t.childNodes && t.childNodes.length && (f += "..."), f += "</" + kl.call(String(t.nodeName)) + ">", f
      }
      if (Wa(t)) {
        if (t.length === 0) return "[]";
        var I = dn(t, h);
        return w && !Xu(I) ? "[" + qa(I, w) + "]" : "[ " + ot.call(I, ", ") + " ]"
      }
      if (ju(t)) {
        var M = dn(t, h);
        return !("cause" in Error.prototype) && "cause" in t && !bs.call(t, "cause") ? "{ [" + String(t) + "] " + ot.call(Sl.call("[cause]: " + h(t.cause), M), ", ") + " }" : M.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ot.call(M, ", ") + " }"
      }
      if (typeof t == "object" && o) {
        if (Al && typeof t[Al] == "function" && Ua) return Ua(t, {
          depth: b - a
        });
        if (o !== "symbol" && typeof t.inspect == "function") return t.inspect()
      }
      if (Uu(t)) {
        var T = [];
        return xl && xl.call(t, function (R, $) {
          T.push(h($, t, !0) + " => " + h(R, t))
        }), _l("Map", Sn.call(t), T, w)
      }
      if (Gu(t)) {
        var L = [];
        return wl && wl.call(t, function (R) {
          L.push(h(R, t))
        }), _l("Set", Cn.call(t), L, w)
      }
      if (Wu(t)) return Na("WeakMap");
      if (Yu(t)) return Na("WeakSet");
      if (qu(t)) return Na("WeakRef");
      if (Zu(t)) return Cr(h(Number(t)));
      if (zu(t)) return Cr(h(Da.call(t)));
      if (Vu(t)) return Cr(Au.call(t));
      if (Hu(t)) return Cr(h(String(t)));
      if (!$u(t) && !Tl(t)) {
        var C = dn(t, h),
          g = El ? El(t) === Object.prototype : t instanceof Object || t.constructor === Object,
          k = t instanceof Object ? "" : "null prototype",
          A = !g && He && Object(t) === t && He in t ? pi.call(Pt(t), 8, -1) : k ? "Object" : "",
          _ = g || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
          O = _ + (A || k ? "[" + ot.call(Sl.call([], A || [], k || []), ": ") + "] " : "");
        return C.length === 0 ? O + "{}" : w ? O + "{" + qa(C, w) + "}" : O + "{ " + ot.call(C, ", ") + " }"
      }
      return String(t)
    };

  function ys(e, t, n) {
    var a = (n.quoteStyle || t) === "double" ? '"' : "'";
    return a + e + a
  }

  function Ru(e) {
    return Tt.call(String(e), /"/g, "&quot;")
  }

  function Wa(e) {
    return Pt(e) === "[object Array]" && (!He || !(typeof e == "object" && He in e))
  }

  function $u(e) {
    return Pt(e) === "[object Date]" && (!He || !(typeof e == "object" && He in e))
  }

  function Tl(e) {
    return Pt(e) === "[object RegExp]" && (!He || !(typeof e == "object" && He in e))
  }

  function ju(e) {
    return Pt(e) === "[object Error]" && (!He || !(typeof e == "object" && He in e))
  }

  function Hu(e) {
    return Pt(e) === "[object String]" && (!He || !(typeof e == "object" && He in e))
  }

  function Zu(e) {
    return Pt(e) === "[object Number]" && (!He || !(typeof e == "object" && He in e))
  }

  function Vu(e) {
    return Pt(e) === "[object Boolean]" && (!He || !(typeof e == "object" && He in e))
  }

  function xs(e) {
    if (ir) return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol") return !0;
    if (!e || typeof e != "object" || !Ba) return !1;
    try {
      return Ba.call(e), !0
    } catch { }
    return !1
  }

  function zu(e) {
    if (!e || typeof e != "object" || !Da) return !1;
    try {
      return Da.call(e), !0
    } catch { }
    return !1
  }
  var Du = Object.prototype.hasOwnProperty || function (e) {
    return e in this
  };

  function At(e, t) {
    return Du.call(e, t)
  }

  function Pt(e) {
    return Tu.call(e)
  }

  function Bu(e) {
    if (e.name) return e.name;
    var t = Iu.call(_u.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null
  }

  function ws(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, a = e.length; n < a; n++)
      if (e[n] === t) return n;
    return -1
  }

  function Uu(e) {
    if (!Sn || !e || typeof e != "object") return !1;
    try {
      Sn.call(e);
      try {
        Cn.call(e)
      } catch {
        return !0
      }
      return e instanceof Map
    } catch { }
    return !1
  }

  function Wu(e) {
    if (!Ar || !e || typeof e != "object") return !1;
    try {
      Ar.call(e, Ar);
      try {
        Tr.call(e, Tr)
      } catch {
        return !0
      }
      return e instanceof WeakMap
    } catch { }
    return !1
  }

  function qu(e) {
    if (!Nl || !e || typeof e != "object") return !1;
    try {
      return Nl.call(e), !0
    } catch { }
    return !1
  }

  function Gu(e) {
    if (!Cn || !e || typeof e != "object") return !1;
    try {
      Cn.call(e);
      try {
        Sn.call(e)
      } catch {
        return !0
      }
      return e instanceof Set
    } catch { }
    return !1
  }

  function Yu(e) {
    if (!Tr || !e || typeof e != "object") return !1;
    try {
      Tr.call(e, Tr);
      try {
        Ar.call(e, Ar)
      } catch {
        return !0
      }
      return e instanceof WeakSet
    } catch { }
    return !1
  }

  function Ju(e) {
    return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
  }

  function Ns(e, t) {
    if (e.length > t.maxStringLength) {
      var n = e.length - t.maxStringLength,
        a = "... " + n + " more character" + (n > 1 ? "s" : "");
      return Ns(pi.call(e, 0, t.maxStringLength), t) + a
    }
    var i = Tt.call(Tt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ku);
    return ys(i, "single", t)
  }

  function Ku(e) {
    var t = e.charCodeAt(0),
      n = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + Pu.call(t.toString(16))
  }

  function Cr(e) {
    return "Object(" + e + ")"
  }

  function Na(e) {
    return e + " { ? }"
  }

  function _l(e, t, n, a) {
    var i = a ? qa(n, a) : ot.call(n, ", ");
    return e + " (" + t + ") {" + i + "}"
  }

  function Xu(e) {
    for (var t = 0; t < e.length; t++)
      if (ws(e[t], `
`) >= 0) return !1;
    return !0
  }

  function Qu(e, t) {
    var n;
    if (e.indent === "	") n = "	";
    else if (typeof e.indent == "number" && e.indent > 0) n = ot.call(Array(e.indent + 1), " ");
    else return null;
    return {
      base: n,
      prev: ot.call(Array(t + 1), n)
    }
  }

  function qa(e, t) {
    if (e.length === 0) return "";
    var n = `
` + t.prev + t.base;
    return n + ot.call(e, "," + n) + `
` + t.prev
  }

  function dn(e, t) {
    var n = Wa(e),
      a = [];
    if (n) {
      a.length = e.length;
      for (var i = 0; i < e.length; i++) a[i] = At(e, i) ? t(e[i], e) : ""
    }
    var s = typeof wa == "function" ? wa(e) : [],
      o;
    if (ir) {
      o = {};
      for (var c = 0; c < s.length; c++) o["$" + s[c]] = s[c]
    }
    for (var u in e) At(e, u) && (n && String(Number(u)) === u && u < e.length || ir && o["$" + u] instanceof Symbol || (vs.call(/[^\w$]/, u) ? a.push(t(u, e) + ": " + t(e[u], e)) : a.push(u + ": " + t(e[u], e))));
    if (typeof wa == "function")
      for (var d = 0; d < s.length; d++) bs.call(e, s[d]) && a.push("[" + t(s[d]) + "]: " + t(e[s[d]], e));
    return a
  }
  var hi = di,
    mr = Nu,
    e1 = Fu,
    t1 = hi("%TypeError%"),
    un = hi("%WeakMap%", !0),
    mn = hi("%Map%", !0),
    r1 = mr("WeakMap.prototype.get", !0),
    n1 = mr("WeakMap.prototype.set", !0),
    a1 = mr("WeakMap.prototype.has", !0),
    i1 = mr("Map.prototype.get", !0),
    l1 = mr("Map.prototype.set", !0),
    s1 = mr("Map.prototype.has", !0),
    fi = function (e, t) {
      for (var n = e, a;
        (a = n.next) !== null; n = a)
        if (a.key === t) return n.next = a.next, a.next = e.next, e.next = a, a
    },
    o1 = function (e, t) {
      var n = fi(e, t);
      return n && n.value
    },
    c1 = function (e, t, n) {
      var a = fi(e, t);
      a ? a.value = n : e.next = {
        key: t,
        next: e.next,
        value: n
      }
    },
    d1 = function (e, t) {
      return !!fi(e, t)
    },
    u1 = function () {
      var t, n, a, i = {
        assert: function (s) {
          if (!i.has(s)) throw new t1("Side channel does not contain " + e1(s))
        },
        get: function (s) {
          if (un && s && (typeof s == "object" || typeof s == "function")) {
            if (t) return r1(t, s)
          } else if (mn) {
            if (n) return i1(n, s)
          } else if (a) return o1(a, s)
        },
        has: function (s) {
          if (un && s && (typeof s == "object" || typeof s == "function")) {
            if (t) return a1(t, s)
          } else if (mn) {
            if (n) return s1(n, s)
          } else if (a) return d1(a, s);
          return !1
        },
        set: function (s, o) {
          un && s && (typeof s == "object" || typeof s == "function") ? (t || (t = new un), n1(t, s, o)) : mn ? (n || (n = new mn), l1(n, s, o)) : (a || (a = {
            key: {},
            next: null
          }), c1(a, s, o))
        }
      };
      return i
    },
    m1 = String.prototype.replace,
    p1 = /%20/g,
    ka = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    },
    gi = {
      default: ka.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return m1.call(e, p1, "+")
        },
        RFC3986: function (e) {
          return String(e)
        }
      },
      RFC1738: ka.RFC1738,
      RFC3986: ka.RFC3986
    },
    h1 = gi,
    Sa = Object.prototype.hasOwnProperty,
    Dt = Array.isArray,
    lt = function () {
      for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
      return e
    }(),
    f1 = function (t) {
      for (; t.length > 1;) {
        var n = t.pop(),
          a = n.obj[n.prop];
        if (Dt(a)) {
          for (var i = [], s = 0; s < a.length; ++s) typeof a[s] < "u" && i.push(a[s]);
          n.obj[n.prop] = i
        }
      }
    },
    ks = function (t, n) {
      for (var a = n && n.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i) typeof t[i] < "u" && (a[i] = t[i]);
      return a
    },
    g1 = function e(t, n, a) {
      if (!n) return t;
      if (typeof n != "object") {
        if (Dt(t)) t.push(n);
        else if (t && typeof t == "object") (a && (a.plainObjects || a.allowPrototypes) || !Sa.call(Object.prototype, n)) && (t[n] = !0);
        else return [t, n];
        return t
      }
      if (!t || typeof t != "object") return [t].concat(n);
      var i = t;
      return Dt(t) && !Dt(n) && (i = ks(t, a)), Dt(t) && Dt(n) ? (n.forEach(function (s, o) {
        if (Sa.call(t, o)) {
          var c = t[o];
          c && typeof c == "object" && s && typeof s == "object" ? t[o] = e(c, s, a) : t.push(s)
        } else t[o] = s
      }), t) : Object.keys(n).reduce(function (s, o) {
        var c = n[o];
        return Sa.call(s, o) ? s[o] = e(s[o], c, a) : s[o] = c, s
      }, i)
    },
    v1 = function (t, n) {
      return Object.keys(n).reduce(function (a, i) {
        return a[i] = n[i], a
      }, t)
    },
    b1 = function (e, t, n) {
      var a = e.replace(/\+/g, " ");
      if (n === "iso-8859-1") return a.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(a)
      } catch {
        return a
      }
    },
    y1 = function (t, n, a, i, s) {
      if (t.length === 0) return t;
      var o = t;
      if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), a === "iso-8859-1") return escape(o).replace(/%u[0-9a-f]{4}/gi, function (b) {
        return "%26%23" + parseInt(b.slice(2), 16) + "%3B"
      });
      for (var c = "", u = 0; u < o.length; ++u) {
        var d = o.charCodeAt(u);
        if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || s === h1.RFC1738 && (d === 40 || d === 41)) {
          c += o.charAt(u);
          continue
        }
        if (d < 128) {
          c = c + lt[d];
          continue
        }
        if (d < 2048) {
          c = c + (lt[192 | d >> 6] + lt[128 | d & 63]);
          continue
        }
        if (d < 55296 || d >= 57344) {
          c = c + (lt[224 | d >> 12] + lt[128 | d >> 6 & 63] + lt[128 | d & 63]);
          continue
        }
        u += 1, d = 65536 + ((d & 1023) << 10 | o.charCodeAt(u) & 1023), c += lt[240 | d >> 18] + lt[128 | d >> 12 & 63] + lt[128 | d >> 6 & 63] + lt[128 | d & 63]
      }
      return c
    },
    x1 = function (t) {
      for (var n = [{
        obj: {
          o: t
        },
        prop: "o"
      }], a = [], i = 0; i < n.length; ++i)
        for (var s = n[i], o = s.obj[s.prop], c = Object.keys(o), u = 0; u < c.length; ++u) {
          var d = c[u],
            b = o[d];
          typeof b == "object" && b !== null && a.indexOf(b) === -1 && (n.push({
            obj: o,
            prop: d
          }), a.push(b))
        }
      return f1(n), t
    },
    w1 = function (t) {
      return Object.prototype.toString.call(t) === "[object RegExp]"
    },
    N1 = function (t) {
      return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    },
    k1 = function (t, n) {
      return [].concat(t, n)
    },
    S1 = function (t, n) {
      if (Dt(t)) {
        for (var a = [], i = 0; i < t.length; i += 1) a.push(n(t[i]));
        return a
      }
      return n(t)
    },
    Ss = {
      arrayToObject: ks,
      assign: v1,
      combine: k1,
      compact: x1,
      decode: b1,
      encode: y1,
      isBuffer: N1,
      isRegExp: w1,
      maybeMap: S1,
      merge: g1
    },
    Cs = u1,
    Ga = Ss,
    _r = gi,
    C1 = Object.prototype.hasOwnProperty,
    Il = {
      brackets: function (t) {
        return t + "[]"
      },
      comma: "comma",
      indices: function (t, n) {
        return t + "[" + n + "]"
      },
      repeat: function (t) {
        return t
      }
    },
    gt = Array.isArray,
    E1 = String.prototype.split,
    M1 = Array.prototype.push,
    Es = function (e, t) {
      M1.apply(e, gt(t) ? t : [t])
    },
    L1 = Date.prototype.toISOString,
    Pl = _r.default,
    Ie = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: Ga.encode,
      encodeValuesOnly: !1,
      format: Pl,
      formatter: _r.formatters[Pl],
      indices: !1,
      serializeDate: function (t) {
        return L1.call(t)
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
    A1 = function (t) {
      return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
    },
    Ca = {},
    T1 = function e(t, n, a, i, s, o, c, u, d, b, w, h, y, m, p, f) {
      for (var N = t, S = f, I = 0, M = !1;
        (S = S.get(Ca)) !== void 0 && !M;) {
        var T = S.get(t);
        if (I += 1, typeof T < "u") {
          if (T === I) throw new RangeError("Cyclic object value");
          M = !0
        }
        typeof S.get(Ca) > "u" && (I = 0)
      }
      if (typeof u == "function" ? N = u(n, N) : N instanceof Date ? N = w(N) : a === "comma" && gt(N) && (N = Ga.maybeMap(N, function (W) {
        return W instanceof Date ? w(W) : W
      })), N === null) {
        if (s) return c && !m ? c(n, Ie.encoder, p, "key", h) : n;
        N = ""
      }
      if (A1(N) || Ga.isBuffer(N)) {
        if (c) {
          var L = m ? n : c(n, Ie.encoder, p, "key", h);
          if (a === "comma" && m) {
            for (var C = E1.call(String(N), ","), g = "", k = 0; k < C.length; ++k) g += (k === 0 ? "" : ",") + y(c(C[k], Ie.encoder, p, "value", h));
            return [y(L) + (i && gt(N) && C.length === 1 ? "[]" : "") + "=" + g]
          }
          return [y(L) + "=" + y(c(N, Ie.encoder, p, "value", h))]
        }
        return [y(n) + "=" + y(String(N))]
      }
      var A = [];
      if (typeof N > "u") return A;
      var _;
      if (a === "comma" && gt(N)) _ = [{
        value: N.length > 0 ? N.join(",") || null : void 0
      }];
      else if (gt(u)) _ = u;
      else {
        var O = Object.keys(N);
        _ = d ? O.sort(d) : O
      }
      for (var R = i && gt(N) && N.length === 1 ? n + "[]" : n, $ = 0; $ < _.length; ++$) {
        var P = _[$],
          Z = typeof P == "object" && typeof P.value < "u" ? P.value : N[P];
        if (!(o && Z === null)) {
          var z = gt(N) ? typeof a == "function" ? a(R, P) : R : R + (b ? "." + P : "[" + P + "]");
          f.set(t, I);
          var J = Cs();
          J.set(Ca, f), Es(A, e(Z, z, a, i, s, o, c, u, d, b, w, h, y, m, p, J))
        }
      }
      return A
    },
    _1 = function (t) {
      if (!t) return Ie;
      if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
      var n = t.charset || Ie.charset;
      if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var a = _r.default;
      if (typeof t.format < "u") {
        if (!C1.call(_r.formatters, t.format)) throw new TypeError("Unknown format option provided.");
        a = t.format
      }
      var i = _r.formatters[a],
        s = Ie.filter;
      return (typeof t.filter == "function" || gt(t.filter)) && (s = t.filter), {
        addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ie.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? Ie.allowDots : !!t.allowDots,
        charset: n,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ie.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? Ie.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : Ie.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : Ie.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ie.encodeValuesOnly,
        filter: s,
        format: a,
        formatter: i,
        serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ie.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ie.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ie.strictNullHandling
      }
    },
    I1 = function (e, t) {
      var n = e,
        a = _1(t),
        i, s;
      typeof a.filter == "function" ? (s = a.filter, n = s("", n)) : gt(a.filter) && (s = a.filter, i = s);
      var o = [];
      if (typeof n != "object" || n === null) return "";
      var c;
      t && t.arrayFormat in Il ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
      var u = Il[c];
      if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var d = u === "comma" && t && t.commaRoundTrip;
      i || (i = Object.keys(n)), a.sort && i.sort(a.sort);
      for (var b = Cs(), w = 0; w < i.length; ++w) {
        var h = i[w];
        a.skipNulls && n[h] === null || Es(o, T1(n[h], h, u, d, a.strictNullHandling, a.skipNulls, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.format, a.formatter, a.encodeValuesOnly, a.charset, b))
      }
      var y = o.join(a.delimiter),
        m = a.addQueryPrefix === !0 ? "?" : "";
      return a.charsetSentinel && (a.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), y.length > 0 ? m + y : ""
    },
    lr = Ss,
    Ya = Object.prototype.hasOwnProperty,
    P1 = Array.isArray,
    Le = {
      allowDots: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decoder: lr.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1
    },
    O1 = function (e) {
      return e.replace(/&#(\d+);/g, function (t, n) {
        return String.fromCharCode(parseInt(n, 10))
      })
    },
    Ms = function (e, t) {
      return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
    },
    F1 = "utf8=%26%2310003%3B",
    R1 = "utf8=%E2%9C%93",
    $1 = function (t, n) {
      var a = {},
        i = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
        s = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
        o = i.split(n.delimiter, s),
        c = -1,
        u, d = n.charset;
      if (n.charsetSentinel)
        for (u = 0; u < o.length; ++u) o[u].indexOf("utf8=") === 0 && (o[u] === R1 ? d = "utf-8" : o[u] === F1 && (d = "iso-8859-1"), c = u, u = o.length);
      for (u = 0; u < o.length; ++u)
        if (u !== c) {
          var b = o[u],
            w = b.indexOf("]="),
            h = w === -1 ? b.indexOf("=") : w + 1,
            y, m;
          h === -1 ? (y = n.decoder(b, Le.decoder, d, "key"), m = n.strictNullHandling ? null : "") : (y = n.decoder(b.slice(0, h), Le.decoder, d, "key"), m = lr.maybeMap(Ms(b.slice(h + 1), n), function (p) {
            return n.decoder(p, Le.decoder, d, "value")
          })), m && n.interpretNumericEntities && d === "iso-8859-1" && (m = O1(m)), b.indexOf("[]=") > -1 && (m = P1(m) ? [m] : m), Ya.call(a, y) ? a[y] = lr.combine(a[y], m) : a[y] = m
        } return a
    },
    j1 = function (e, t, n, a) {
      for (var i = a ? t : Ms(t, n), s = e.length - 1; s >= 0; --s) {
        var o, c = e[s];
        if (c === "[]" && n.parseArrays) o = [].concat(i);
        else {
          o = n.plainObjects ? Object.create(null) : {};
          var u = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c,
            d = parseInt(u, 10);
          !n.parseArrays && u === "" ? o = {
            0: i
          } : !isNaN(d) && c !== u && String(d) === u && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (o = [], o[d] = i) : u !== "__proto__" && (o[u] = i)
        }
        i = o
      }
      return i
    },
    H1 = function (t, n, a, i) {
      if (t) {
        var s = a.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
          o = /(\[[^[\]]*])/,
          c = /(\[[^[\]]*])/g,
          u = a.depth > 0 && o.exec(s),
          d = u ? s.slice(0, u.index) : s,
          b = [];
        if (d) {
          if (!a.plainObjects && Ya.call(Object.prototype, d) && !a.allowPrototypes) return;
          b.push(d)
        }
        for (var w = 0; a.depth > 0 && (u = c.exec(s)) !== null && w < a.depth;) {
          if (w += 1, !a.plainObjects && Ya.call(Object.prototype, u[1].slice(1, -1)) && !a.allowPrototypes) return;
          b.push(u[1])
        }
        return u && b.push("[" + s.slice(u.index) + "]"), j1(b, n, a, i)
      }
    },
    Z1 = function (t) {
      if (!t) return Le;
      if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
      if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var n = typeof t.charset > "u" ? Le.charset : t.charset;
      return {
        allowDots: typeof t.allowDots > "u" ? Le.allowDots : !!t.allowDots,
        allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Le.allowPrototypes,
        allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Le.allowSparse,
        arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Le.arrayLimit,
        charset: n,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Le.charsetSentinel,
        comma: typeof t.comma == "boolean" ? t.comma : Le.comma,
        decoder: typeof t.decoder == "function" ? t.decoder : Le.decoder,
        delimiter: typeof t.delimiter == "string" || lr.isRegExp(t.delimiter) ? t.delimiter : Le.delimiter,
        depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Le.depth,
        ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
        interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Le.interpretNumericEntities,
        parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Le.parameterLimit,
        parseArrays: t.parseArrays !== !1,
        plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Le.plainObjects,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Le.strictNullHandling
      }
    },
    V1 = function (e, t) {
      var n = Z1(t);
      if (e === "" || e === null || typeof e > "u") return n.plainObjects ? Object.create(null) : {};
      for (var a = typeof e == "string" ? $1(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, s = Object.keys(a), o = 0; o < s.length; ++o) {
        var c = s[o],
          u = H1(c, a[c], n, typeof e == "string");
        i = lr.merge(i, u, n)
      }
      return n.allowSparse === !0 ? i : lr.compact(i)
    },
    z1 = I1,
    D1 = V1,
    B1 = gi,
    U1 = {
      formats: B1,
      parse: D1,
      stringify: z1
    },
    W1 = function (t) {
      return q1(t) && !G1(t)
    };

  function q1(e) {
    return !!e && typeof e == "object"
  }

  function G1(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || K1(e)
  }
  var Y1 = typeof Symbol == "function" && Symbol.for,
    J1 = Y1 ? Symbol.for("react.element") : 60103;

  function K1(e) {
    return e.$$typeof === J1
  }

  function X1(e) {
    return Array.isArray(e) ? [] : {}
  }

  function Fr(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? sr(X1(e), e, t) : e
  }

  function Q1(e, t, n) {
    return e.concat(t).map(function (a) {
      return Fr(a, n)
    })
  }

  function e0(e, t) {
    if (!t.customMerge) return sr;
    var n = t.customMerge(e);
    return typeof n == "function" ? n : sr
  }

  function t0(e) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
      return Object.propertyIsEnumerable.call(e, t)
    }) : []
  }

  function Ol(e) {
    return Object.keys(e).concat(t0(e))
  }

  function Ls(e, t) {
    try {
      return t in e
    } catch {
      return !1
    }
  }

  function r0(e, t) {
    return Ls(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
  }

  function n0(e, t, n) {
    var a = {};
    return n.isMergeableObject(e) && Ol(e).forEach(function (i) {
      a[i] = Fr(e[i], n)
    }), Ol(t).forEach(function (i) {
      r0(e, i) || (Ls(e, i) && n.isMergeableObject(t[i]) ? a[i] = e0(i, n)(e[i], t[i], n) : a[i] = Fr(t[i], n))
    }), a
  }

  function sr(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || Q1, n.isMergeableObject = n.isMergeableObject || W1, n.cloneUnlessOtherwiseSpecified = Fr;
    var a = Array.isArray(t),
      i = Array.isArray(e),
      s = a === i;
    return s ? a ? n.arrayMerge(e, t, n) : n0(e, t, n) : Fr(t, n)
  }
  sr.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (a, i) {
      return sr(a, i, n)
    }, {})
  };
  var a0 = sr,
    i0 = a0;
  (function (e) {
    function t(L) {
      return L && typeof L == "object" && "default" in L ? L.default : L
    }
    var n = t(Ha),
      a = U1,
      i = t(i0);

    function s() {
      return (s = Object.assign ? Object.assign.bind() : function (L) {
        for (var C = 1; C < arguments.length; C++) {
          var g = arguments[C];
          for (var k in g) Object.prototype.hasOwnProperty.call(g, k) && (L[k] = g[k])
        }
        return L
      }).apply(this, arguments)
    }
    var o, c = {
      modal: null,
      listener: null,
      show: function (L) {
        if (typeof L === "object") {
          var { data, config } = L;
          var url = config.url;
          var urlObject = new URL(url);
          var pathname = urlObject.pathname;

          console.log("Fetching content for URL:", pathname);

          if (pathname !== '/snippet-language') {
            window.location.href = url
          }
        }
      },
      hide: function () {
        this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener)
      },
      hideOnEscape: function (L) {
        L.keyCode === 27 && this.hide()
      }
    };

    function u(L, C) {
      var g;
      return function () {
        var k = arguments,
          A = this;
        clearTimeout(g), g = setTimeout(function () {
          return L.apply(A, [].slice.call(k))
        }, C)
      }
    }

    function d(L, C, g) {
      for (var k in C === void 0 && (C = new FormData), g === void 0 && (g = null), L = L || {}) Object.prototype.hasOwnProperty.call(L, k) && w(C, b(g, k), L[k]);
      return C
    }

    function b(L, C) {
      return L ? L + "[" + C + "]" : C
    }

    function w(L, C, g) {
      return Array.isArray(g) ? Array.from(g.keys()).forEach(function (k) {
        return w(L, b(C, k.toString()), g[k])
      }) : g instanceof Date ? L.append(C, g.toISOString()) : g instanceof File ? L.append(C, g, g.name) : g instanceof Blob ? L.append(C, g) : typeof g == "boolean" ? L.append(C, g ? "1" : "0") : typeof g == "string" ? L.append(C, g) : typeof g == "number" ? L.append(C, "" + g) : g == null ? L.append(C, "") : void d(g, L, C)
    }

    function h(L) {
      return new URL(L.toString(), window.location.toString())
    }

    function y(L, C, g, k) {
      k === void 0 && (k = "brackets");
      var A = /^https?:\/\//.test(C.toString()),
        _ = A || C.toString().startsWith("/"),
        O = !_ && !C.toString().startsWith("#") && !C.toString().startsWith("?"),
        R = C.toString().includes("?") || L === e.Method.GET && Object.keys(g).length,
        $ = C.toString().includes("#"),
        P = new URL(C.toString(), "http://localhost");
      return L === e.Method.GET && Object.keys(g).length && (P.search = a.stringify(i(a.parse(P.search, {
        ignoreQueryPrefix: !0
      }), g), {
        encodeValuesOnly: !0,
        arrayFormat: k
      }), g = {}), [
          [A ? P.protocol + "//" + P.host : "", _ ? P.pathname : "", O ? P.pathname.substring(1) : "", R ? P.search : "", $ ? P.hash : ""].join(""), g
        ]
    }

    function m(L) {
      return (L = new URL(L.href)).hash = "", L
    }

    function p(L, C) {
      return document.dispatchEvent(new CustomEvent("inertia:" + L, C))
    } (o = e.Method || (e.Method = {})).GET = "get", o.POST = "post", o.PUT = "put", o.PATCH = "patch", o.DELETE = "delete";
    var f = function (L) {
      return p("finish", {
        detail: {
          visit: L
        }
      })
    },
      N = function (L) {
        return p("navigate", {
          detail: {
            page: L
          }
        })
      },
      S = typeof window > "u",
      I = function () {
        function L() {
          this.visitId = null
        }
        var C = L.prototype;
        return C.init = function (g) {
          var k = g.resolveComponent,
            A = g.swapComponent;
          this.page = g.initialPage, this.resolveComponent = k, this.swapComponent = A, this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners()
        }, C.handleInitialPageVisit = function (g) {
          this.page.url += window.location.hash, this.setPage(g, {
            preserveState: !0
          }).then(function () {
            return N(g)
          })
        }, C.setupEventListeners = function () {
          window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", u(this.handleScrollEvent.bind(this), 100), !0)
        }, C.scrollRegions = function () {
          return document.querySelectorAll("[scroll-region]")
        }, C.handleScrollEvent = function (g) {
          typeof g.target.hasAttribute == "function" && g.target.hasAttribute("scroll-region") && this.saveScrollPositions()
        }, C.saveScrollPositions = function () {
          this.replaceState(s({}, this.page, {
            scrollRegions: Array.from(this.scrollRegions()).map(function (g) {
              return {
                top: g.scrollTop,
                left: g.scrollLeft
              }
            })
          }))
        }, C.resetScrollPositions = function () {
          var g;
          window.scrollTo(0, 0), this.scrollRegions().forEach(function (k) {
            typeof k.scrollTo == "function" ? k.scrollTo(0, 0) : (k.scrollTop = 0, k.scrollLeft = 0)
          }), this.saveScrollPositions(), window.location.hash && ((g = document.getElementById(window.location.hash.slice(1))) == null || g.scrollIntoView())
        }, C.restoreScrollPositions = function () {
          var g = this;
          this.page.scrollRegions && this.scrollRegions().forEach(function (k, A) {
            var _ = g.page.scrollRegions[A];
            _ && (typeof k.scrollTo == "function" ? k.scrollTo(_.left, _.top) : (k.scrollTop = _.top, k.scrollLeft = _.left))
          })
        }, C.isBackForwardVisit = function () {
          return window.history.state && window.performance && window.performance.getEntriesByType("navigation").length > 0 && window.performance.getEntriesByType("navigation")[0].type === "back_forward"
        }, C.handleBackForwardVisit = function (g) {
          var k = this;
          window.history.state.version = g.version, this.setPage(window.history.state, {
            preserveScroll: !0,
            preserveState: !0
          }).then(function () {
            k.restoreScrollPositions(), N(g)
          })
        }, C.locationVisit = function (g, k) {
          try {
            window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify({
              preserveScroll: k
            })), window.location.href = g.href, m(window.location).href === m(g).href && window.location.reload()
          } catch {
            return !1
          }
        }, C.isLocationVisit = function () {
          try {
            return window.sessionStorage.getItem("inertiaLocationVisit") !== null
          } catch {
            return !1
          }
        }, C.handleLocationVisit = function (g) {
          var k, A, _, O, R = this,
            $ = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
          window.sessionStorage.removeItem("inertiaLocationVisit"), g.url += window.location.hash, g.rememberedState = (k = (A = window.history.state) == null ? void 0 : A.rememberedState) != null ? k : {}, g.scrollRegions = (_ = (O = window.history.state) == null ? void 0 : O.scrollRegions) != null ? _ : [], this.setPage(g, {
            preserveScroll: $.preserveScroll,
            preserveState: !0
          }).then(function () {
            $.preserveScroll && R.restoreScrollPositions(), N(g)
          })
        }, C.isLocationVisitResponse = function (g) {
          return g && g.status === 409 && g.headers["x-inertia-location"]
        }, C.isInertiaResponse = function (g) {
          return g == null ? void 0 : g.headers["x-inertia"]
        }, C.createVisitId = function () {
          return this.visitId = {}, this.visitId
        }, C.cancelVisit = function (g, k) {
          var A = k.cancelled,
            _ = A !== void 0 && A,
            O = k.interrupted,
            R = O !== void 0 && O;
          !g || g.completed || g.cancelled || g.interrupted || (g.cancelToken.cancel(), g.onCancel(), g.completed = !1, g.cancelled = _, g.interrupted = R, f(g), g.onFinish(g))
        }, C.finishVisit = function (g) {
          g.cancelled || g.interrupted || (g.completed = !0, g.cancelled = !1, g.interrupted = !1, f(g), g.onFinish(g))
        }, C.resolvePreserveOption = function (g, k) {
          return typeof g == "function" ? g(k) : g === "errors" ? Object.keys(k.props.errors || {}).length > 0 : g
        }, C.visit = function (g, k) {
          var A = this,
            _ = k === void 0 ? {} : k,
            O = _.method,
            R = O === void 0 ? e.Method.GET : O,
            $ = _.data,
            P = $ === void 0 ? {} : $,
            Z = _.replace,
            z = Z !== void 0 && Z,
            J = _.preserveScroll,
            W = J !== void 0 && J,
            Ce = _.preserveState,
            oe = Ce !== void 0 && Ce,
            Te = _.only,
            Y = Te === void 0 ? [] : Te,
            ee = _.headers,
            G = ee === void 0 ? {} : ee,
            te = _.errorBag,
            re = te === void 0 ? "" : te,
            ne = _.forceFormData,
            Ee = ne !== void 0 && ne,
            at = _.onCancelToken,
            kt = at === void 0 ? function () { } : at,
            mt = _.onBefore,
            vr = mt === void 0 ? function () { } : mt,
            br = _.onStart,
            qr = br === void 0 ? function () { } : br,
            Gr = _.onProgress,
            Yr = Gr === void 0 ? function () { } : Gr,
            Jr = _.onFinish,
            Wn = Jr === void 0 ? function () { } : Jr,
            Kr = _.onCancel,
            qn = Kr === void 0 ? function () { } : Kr,
            Xr = _.onSuccess,
            Qr = Xr === void 0 ? function () { } : Xr,
            en = _.onError,
            tn = en === void 0 ? function () { } : en,
            rn = _.queryStringArrayFormat,
            St = rn === void 0 ? "brackets" : rn,
            it = typeof g == "string" ? h(g) : g;
          if (! function ae(he) {
            return he instanceof File || he instanceof Blob || he instanceof FileList && he.length > 0 || he instanceof FormData && Array.from(he.values()).some(function (ye) {
              return ae(ye)
            }) || typeof he == "object" && he !== null && Object.values(he).some(function (ye) {
              return ae(ye)
            })
          }(P) && !Ee || P instanceof FormData || (P = d(P)), !(P instanceof FormData)) {
            var yr = y(R, it, P, St),
              Ye = yr[1];
            it = h(yr[0]), P = Ye
          }
          var Ct = {
            url: it,
            method: R,
            data: P,
            replace: z,
            preserveScroll: W,
            preserveState: oe,
            only: Y,
            headers: G,
            errorBag: re,
            forceFormData: Ee,
            queryStringArrayFormat: St,
            cancelled: !1,
            completed: !1,
            interrupted: !1
          };
          if (vr(Ct) !== !1 && function (ae) {
            return p("before", {
              cancelable: !0,
              detail: {
                visit: ae
              }
            })
          }(Ct)) {
            this.activeVisit && this.cancelVisit(this.activeVisit, {
              interrupted: !0
            }), this.saveScrollPositions();
            var xr = this.createVisitId();
            this.activeVisit = s({}, Ct, {
              onCancelToken: kt,
              onBefore: vr,
              onStart: qr,
              onProgress: Yr,
              onFinish: Wn,
              onCancel: qn,
              onSuccess: Qr,
              onError: tn,
              queryStringArrayFormat: St,
              cancelToken: n.CancelToken.source()
            }), kt({
              cancel: function () {
                A.activeVisit && A.cancelVisit(A.activeVisit, {
                  cancelled: !0
                })
              }
            }),
              function (ae) {
                p("start", {
                  detail: {
                    visit: ae
                  }
                })
              }(Ct), qr(Ct), n({
                method: R,
                url: m(it).href,
                data: R === e.Method.GET ? {} : P,
                params: R === e.Method.GET ? P : {},
                cancelToken: this.activeVisit.cancelToken.token,
                headers: s({}, G, {
                  Accept: "text/html, application/xhtml+xml",
                  "X-Requested-With": "XMLHttpRequest",
                  "X-Inertia": !0
                }, Y.length ? {
                  "X-Inertia-Partial-Component": this.page.component,
                  "X-Inertia-Partial-Data": Y.join(",")
                } : {}, re && re.length ? {
                  "X-Inertia-Error-Bag": re
                } : {}, this.page.version ? {
                  "X-Inertia-Version": this.page.version
                } : {}),
                onUploadProgress: function (ae) {
                  P instanceof FormData && (ae.percentage = Math.round(ae.loaded / ae.total * 100), function (he) {
                    p("progress", {
                      detail: {
                        progress: he
                      }
                    })
                  }(ae), Yr(ae))
                }
              }).then(function (ae) {
                var he;
                if (!A.isInertiaResponse(ae)) return Promise.reject({
                  response: ae
                });
                var ye = ae.data;
                Y.length && ye.component === A.page.component && (ye.props = s({}, A.page.props, ye.props)), W = A.resolvePreserveOption(W, ye), (oe = A.resolvePreserveOption(oe, ye)) && (he = window.history.state) != null && he.rememberedState && ye.component === A.page.component && (ye.rememberedState = window.history.state.rememberedState);
                var Yt = it,
                  Rt = h(ye.url);
                return Yt.hash && !Rt.hash && m(Yt).href === Rt.href && (Rt.hash = Yt.hash, ye.url = Rt.href), A.setPage(ye, {
                  visitId: xr,
                  replace: z,
                  preserveScroll: W,
                  preserveState: oe
                })
              }).then(function () {
                var ae = A.page.props.errors || {};
                if (Object.keys(ae).length > 0) {
                  var he = re ? ae[re] ? ae[re] : {} : ae;
                  return function (ye) {
                    p("error", {
                      detail: {
                        errors: ye
                      }
                    })
                  }(he), tn(he)
                }
                return p("success", {
                  detail: {
                    page: A.page
                  }
                }), Qr(A.page)
              }).catch(function (ae) {
                if (A.isInertiaResponse(ae.response)) return A.setPage(ae.response.data, {
                  visitId: xr
                });
                if (A.isLocationVisitResponse(ae.response)) {
                  var he = h(ae.response.headers["x-inertia-location"]),
                    ye = it;
                  ye.hash && !he.hash && m(ye).href === he.href && (he.hash = ye.hash), A.locationVisit(he, W === !0)
                } else {
                  if (!ae.response) return Promise.reject(ae);
                  p("invalid", {
                    cancelable: !0,
                    detail: {
                      response: ae.response
                    }
                  }) && c.show({ data: ae.response.data, config: ae.response.config })
                }
              }).then(function () {
                A.activeVisit && A.finishVisit(A.activeVisit)
              }).catch(function (ae) {
                if (!n.isCancel(ae)) {
                  var he = p("exception", {
                    cancelable: !0,
                    detail: {
                      exception: ae
                    }
                  });
                  if (A.activeVisit && A.finishVisit(A.activeVisit), he) return Promise.reject(ae)
                }
              })
          }
        }, C.setPage = function (g, k) {
          var A = this,
            _ = k === void 0 ? {} : k,
            O = _.visitId,
            R = O === void 0 ? this.createVisitId() : O,
            $ = _.replace,
            P = $ !== void 0 && $,
            Z = _.preserveScroll,
            z = Z !== void 0 && Z,
            J = _.preserveState,
            W = J !== void 0 && J;
          return Promise.resolve(this.resolveComponent(g.component)).then(function (Ce) {
            R === A.visitId && (g.scrollRegions = g.scrollRegions || [], g.rememberedState = g.rememberedState || {}, (P = P || h(g.url).href === window.location.href) ? A.replaceState(g) : A.pushState(g), A.swapComponent({
              component: Ce,
              page: g,
              preserveState: W
            }).then(function () {
              z || A.resetScrollPositions(), P || N(g)
            }))
          })
        }, C.pushState = function (g) {
          this.page = g, window.history.pushState(g, "", g.url)
        }, C.replaceState = function (g) {
          this.page = g, window.history.replaceState(g, "", g.url)
        }, C.handlePopstateEvent = function (g) {
          var k = this;
          if (g.state !== null) {
            var A = g.state,
              _ = this.createVisitId();
            Promise.resolve(this.resolveComponent(A.component)).then(function (R) {
              _ === k.visitId && (k.page = A, k.swapComponent({
                component: R,
                page: A,
                preserveState: !1
              }).then(function () {
                k.restoreScrollPositions(), N(A)
              }))
            })
          } else {
            var O = h(this.page.url);
            O.hash = window.location.hash, this.replaceState(s({}, this.page, {
              url: O.href
            })), this.resetScrollPositions()
          }
        }, C.get = function (g, k, A) {
          return k === void 0 && (k = {}), A === void 0 && (A = {}), this.visit(g, s({}, A, {
            method: e.Method.GET,
            data: k
          }))
        }, C.reload = function (g) {
          return g === void 0 && (g = {}), this.visit(window.location.href, s({}, g, {
            preserveScroll: !0,
            preserveState: !0
          }))
        }, C.replace = function (g, k) {
          var A;
          return k === void 0 && (k = {}), console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia." + ((A = k.method) != null ? A : "get") + "() instead."), this.visit(g, s({
            preserveState: !0
          }, k, {
            replace: !0
          }))
        }, C.post = function (g, k, A) {
          return k === void 0 && (k = {}), A === void 0 && (A = {}), this.visit(g, s({
            preserveState: !0
          }, A, {
            method: e.Method.POST,
            data: k
          }))
        }, C.put = function (g, k, A) {
          return k === void 0 && (k = {}), A === void 0 && (A = {}), this.visit(g, s({
            preserveState: !0
          }, A, {
            method: e.Method.PUT,
            data: k
          }))
        }, C.patch = function (g, k, A) {
          return k === void 0 && (k = {}), A === void 0 && (A = {}), this.visit(g, s({
            preserveState: !0
          }, A, {
            method: e.Method.PATCH,
            data: k
          }))
        }, C.delete = function (g, k) {
          return k === void 0 && (k = {}), this.visit(g, s({
            preserveState: !0
          }, k, {
            method: e.Method.DELETE
          }))
        }, C.remember = function (g, k) {
          var A, _;
          k === void 0 && (k = "default"), S || this.replaceState(s({}, this.page, {
            rememberedState: s({}, (A = this.page) == null ? void 0 : A.rememberedState, (_ = {}, _[k] = g, _))
          }))
        }, C.restore = function (g) {
          var k, A;
          if (g === void 0 && (g = "default"), !S) return (k = window.history.state) == null || (A = k.rememberedState) == null ? void 0 : A[g]
        }, C.on = function (g, k) {
          var A = function (_) {
            var O = k(_);
            _.cancelable && !_.defaultPrevented && O === !1 && _.preventDefault()
          };
          return document.addEventListener("inertia:" + g, A),
            function () {
              return document.removeEventListener("inertia:" + g, A)
            }
        }, L
      }(),
      M = {
        buildDOMElement: function (L) {
          var C = document.createElement("template");
          C.innerHTML = L;
          var g = C.content.firstChild;
          if (!L.startsWith("<script ")) return g;
          var k = document.createElement("script");
          return k.innerHTML = g.innerHTML, g.getAttributeNames().forEach(function (A) {
            k.setAttribute(A, g.getAttribute(A) || "")
          }), k
        },
        isInertiaManagedElement: function (L) {
          return L.nodeType === Node.ELEMENT_NODE && L.getAttribute("inertia") !== null
        },
        findMatchingElementIndex: function (L, C) {
          var g = L.getAttribute("inertia");
          return g !== null ? C.findIndex(function (k) {
            return k.getAttribute("inertia") === g
          }) : -1
        },
        update: u(function (L) {
          var C = this,
            g = L.map(function (k) {
              return C.buildDOMElement(k)
            });
          Array.from(document.head.childNodes).filter(function (k) {
            return C.isInertiaManagedElement(k)
          }).forEach(function (k) {
            var A = C.findMatchingElementIndex(k, g);
            if (A !== -1) {
              var _, O = g.splice(A, 1)[0];
              O && !k.isEqualNode(O) && (k == null || (_ = k.parentNode) == null || _.replaceChild(O, k))
            } else {
              var R;
              k == null || (R = k.parentNode) == null || R.removeChild(k)
            }
          }), g.forEach(function (k) {
            return document.head.appendChild(k)
          })
        }, 1)
      },
      T = new I;
    e.Inertia = T, e.createHeadManager = function (L, C, g) {
      var k = {},
        A = 0;

      function _() {
        var R = Object.values(k).reduce(function ($, P) {
          return $.concat(P)
        }, []).reduce(function ($, P) {
          if (P.indexOf("<") === -1) return $;
          if (P.indexOf("<title ") === 0) {
            var Z = P.match(/(<title [^>]+>)(.*?)(<\/title>)/);
            return $.title = Z ? "" + Z[1] + C(Z[2]) + Z[3] : P, $
          }
          var z = P.match(/ inertia="[^"]+"/);
          return z ? $[z[0]] = P : $[Object.keys($).length] = P, $
        }, {});
        return Object.values(R)
      }

      function O() {
        L ? g(_()) : M.update(_())
      }
      return {
        createProvider: function () {
          var R = function () {
            var $ = A += 1;
            return k[$] = [], $.toString()
          }();
          return {
            update: function ($) {
              return function (P, Z) {
                Z === void 0 && (Z = []), P !== null && Object.keys(k).indexOf(P) > -1 && (k[P] = Z), O()
              }(R, $)
            },
            disconnect: function () {
              return function ($) {
                $ !== null && Object.keys(k).indexOf($) !== -1 && (delete k[$], O())
              }(R)
            }
          }
        }
      }
    }, e.hrefToUrl = h, e.mergeDataIntoQueryString = y, e.shouldIntercept = function (L) {
      var C = L.currentTarget.tagName.toLowerCase() === "a";
      return !(L.target && L != null && L.target.isContentEditable || L.defaultPrevented || C && L.which > 1 || C && L.altKey || C && L.ctrlKey || C && L.metaKey || C && L.shiftKey)
    }, e.urlWithoutHash = m
  })(ur);
  var Vr, ut, As, U, Ts;

  function _s(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e
  }
  var l0 = _s(xn),
    se = x,
    s0 = _s(se),
    yt = ur;

  function et() {
    return (et = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
      }
      return e
    }).apply(this, arguments)
  }

  function Fl(e, t) {
    var n = se.useState(function () {
      var s = yt.Inertia.restore(t);
      return s !== void 0 ? s : e
    }),
      a = n[0],
      i = n[1];
    return se.useEffect(function () {
      yt.Inertia.remember(a, t)
    }, [a, t]), [a, i]
  }
  var En = se.createContext();
  En.displayName = "InertiaPageContext";
  var Mn = se.createContext();

  function Is(e) {
    var t = e.children,
      n = e.initialPage,
      a = e.resolveComponent,
      i = e.titleCallback,
      s = e.onHeadUpdate,
      o = se.useState({
        component: e.initialComponent || null,
        page: n,
        key: null
      }),
      c = o[0],
      u = o[1],
      d = se.useMemo(function () {
        return yt.createHeadManager(typeof window > "u", i || function (w) {
          return w
        }, s || function () { })
      }, []);
    if (se.useEffect(function () {
      yt.Inertia.init({
        initialPage: n,
        resolveComponent: a,
        swapComponent: function (w) {
          var h = w.component,
            y = w.page,
            m = w.preserveState;
          try {
            return u(function (p) {
              return {
                component: h,
                page: y,
                key: m ? p.key : Date.now()
              }
            }), Promise.resolve()
          } catch (p) {
            return Promise.reject(p)
          }
        }
      })
    }, []), !c.component) return se.createElement(Mn.Provider, {
      value: d
    }, se.createElement(En.Provider, {
      value: c.page
    }, null));
    var b = t || function (w) {
      var h = w.Component,
        y = w.props,
        m = se.createElement(h, et({
          key: w.key
        }, y));
      return typeof h.layout == "function" ? h.layout(m) : Array.isArray(h.layout) ? h.layout.concat(m).reverse().reduce(function (p, f) {
        return se.createElement(f, et({
          children: p
        }, y))
      }) : m
    };
    return se.createElement(Mn.Provider, {
      value: d
    }, se.createElement(En.Provider, {
      value: c.page
    }, b({
      Component: c.component,
      key: c.key,
      props: c.page.props
    })))
  }

  function o0(e) {
    var t, n, a = e.children,
      i = e.title,
      s = se.useContext(Mn),
      o = se.useMemo(function () {
        return s.createProvider()
      }, [s]);
    return se.useEffect(function () {
      return function () {
        o.disconnect()
      }
    }, [o]), o.update((t = a, n = (Array.isArray(t) ? t : [t]).filter(function (c) {
      return c
    }).map(function (c) {
      return function (u) {
        return function d(b) {
          var w = function (h) {
            var y = Object.keys(h.props).reduce(function (m, p) {
              if (["head-key", "children", "dangerouslySetInnerHTML"].includes(p)) return m;
              var f = h.props[p];
              return f === "" ? m + " " + p : m + " " + p + '="' + f + '"'
            }, "");
            return "<" + h.type + y + ">"
          }(b);
          return b.props.children && (w += function (h) {
            return typeof h.props.children == "string" ? h.props.children : h.props.children.reduce(function (y, m) {
              return y + d(m)
            }, "")
          }(b)), b.props.dangerouslySetInnerHTML && (w += b.props.dangerouslySetInnerHTML.__html),
            function (h) {
              return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(h.type) > -1
            }(b) || (w += "</" + b.type + ">"), w
        }(function (d) {
          return s0.cloneElement(d, {
            inertia: d.props["head-key"] !== void 0 ? d.props["head-key"] : ""
          })
        }(u))
      }(c)
    }), i && !n.find(function (c) {
      return c.startsWith("<title")
    }) && n.push("<title inertia>" + i + "</title>"), n)), null
  }
  Mn.displayName = "InertiaHeadContext", Is.displayName = "Inertia";
  var c0 = ["children", "as", "data", "href", "method", "preserveScroll", "preserveState", "replace", "only", "headers", "queryStringArrayFormat", "onClick", "onCancelToken", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError"],
    ft = function () { },
    d0 = se.forwardRef(function (e, t) {
      var n = e.children,
        a = e.as,
        i = a === void 0 ? "a" : a,
        s = e.data,
        o = s === void 0 ? {} : s,
        c = e.href,
        u = e.method,
        d = u === void 0 ? "get" : u,
        b = e.preserveScroll,
        w = b !== void 0 && b,
        h = e.preserveState,
        y = h === void 0 ? null : h,
        m = e.replace,
        p = m !== void 0 && m,
        f = e.only,
        N = f === void 0 ? [] : f,
        S = e.headers,
        I = S === void 0 ? {} : S,
        M = e.queryStringArrayFormat,
        T = M === void 0 ? "brackets" : M,
        L = e.onClick,
        C = L === void 0 ? ft : L,
        g = e.onCancelToken,
        k = g === void 0 ? ft : g,
        A = e.onBefore,
        _ = A === void 0 ? ft : A,
        O = e.onStart,
        R = O === void 0 ? ft : O,
        $ = e.onProgress,
        P = $ === void 0 ? ft : $,
        Z = e.onFinish,
        z = Z === void 0 ? ft : Z,
        J = e.onCancel,
        W = J === void 0 ? ft : J,
        Ce = e.onSuccess,
        oe = Ce === void 0 ? ft : Ce,
        Te = e.onError,
        Y = Te === void 0 ? ft : Te,
        ee = function (re, ne) {
          if (re == null) return {};
          var Ee, at, kt = {},
            mt = Object.keys(re);
          for (at = 0; at < mt.length; at++) ne.indexOf(Ee = mt[at]) >= 0 || (kt[Ee] = re[Ee]);
          return kt
        }(e, c0),
        G = se.useCallback(function (re) {
          C(re), yt.shouldIntercept(re) && (re.preventDefault(), yt.Inertia.visit(c, {
            data: o,
            method: d,
            preserveScroll: w,
            preserveState: y ?? d !== "get",
            replace: p,
            only: N,
            headers: I,
            onCancelToken: k,
            onBefore: _,
            onStart: R,
            onProgress: P,
            onFinish: z,
            onCancel: W,
            onSuccess: oe,
            onError: Y
          }))
        }, [o, c, d, w, y, p, N, I, C, k, _, R, P, z, W, oe, Y]);
      i = i.toLowerCase(), d = d.toLowerCase();
      var te = yt.mergeDataIntoQueryString(d, c || "", o, T);
      return c = te[0], o = te[1], i === "a" && d !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="` + c + '" method="' + d + '" as="button">...</Link>'), se.createElement(i, et({}, ee, i === "a" ? {
        href: c
      } : {}, {
        ref: t,
        onClick: G
      }), n)
    });
  Ts = o0, U = d0, As = function (e) {
    try {
      var t, n, a, i, s, o, c;
      n = (t = e.id) === void 0 ? "app" : t, a = e.resolve, i = e.setup, s = e.title, o = e.page, c = e.render;
      var u = typeof window > "u",
        d = u ? null : document.getElementById(n),
        b = o || JSON.parse(d.dataset.page),
        w = function (y) {
          return Promise.resolve(a(y)).then(function (m) {
            return m.default || m
          })
        },
        h = [];
      return Promise.resolve(w(b.component).then(function (y) {
        return i({
          el: d,
          App: Is,
          props: {
            initialPage: b,
            initialComponent: y,
            resolveComponent: w,
            titleCallback: s,
            onHeadUpdate: u ? function (m) {
              return h = m
            } : null
          }
        })
      })).then(function (y) {
        return function () {
          if (u) return Promise.resolve(c(se.createElement("div", {
            id: n,
            "data-page": JSON.stringify(b)
          }, y))).then(function (m) {
            return {
              head: h,
              body: m
            }
          })
        }()
      })
    } catch (y) {
      return Promise.reject(y)
    }
  }, ut = function () {
    var e = [].slice.call(arguments),
      t = se.useRef(null),
      n = typeof e[0] == "string" ? e[0] : null,
      a = se.useState((typeof e[0] == "string" ? e[1] : e[0]) || {}),
      i = a[0],
      s = a[1],
      o = se.useRef(null),
      c = se.useRef(null),
      u = n ? Fl(i, n + ":data") : se.useState(i),
      d = u[0],
      b = u[1],
      w = n ? Fl({}, n + ":errors") : se.useState({}),
      h = w[0],
      y = w[1],
      m = se.useState(!1),
      p = m[0],
      f = m[1],
      N = se.useState(!1),
      S = N[0],
      I = N[1],
      M = se.useState(null),
      T = M[0],
      L = M[1],
      C = se.useState(!1),
      g = C[0],
      k = C[1],
      A = se.useState(!1),
      _ = A[0],
      O = A[1],
      R = function (P) {
        return P
      };
    se.useEffect(function () {
      return t.current = !0,
        function () {
          t.current = !1
        }
    }, []);
    var $ = se.useCallback(function (P, Z, z) {
      z === void 0 && (z = {});
      var J = et({}, z, {
        onCancelToken: function (W) {
          if (o.current = W, z.onCancelToken) return z.onCancelToken(W)
        },
        onBefore: function (W) {
          if (k(!1), O(!1), clearTimeout(c.current), z.onBefore) return z.onBefore(W)
        },
        onStart: function (W) {
          if (I(!0), z.onStart) return z.onStart(W)
        },
        onProgress: function (W) {
          if (L(W), z.onProgress) return z.onProgress(W)
        },
        onSuccess: function (W) {
          if (t.current && (I(!1), L(null), y({}), f(!1), k(!0), O(!0), c.current = setTimeout(function () {
            t.current && O(!1)
          }, 2e3)), z.onSuccess) return z.onSuccess(W)
        },
        onError: function (W) {
          if (t.current && (I(!1), L(null), y(W), f(!0)), z.onError) return z.onError(W)
        },
        onCancel: function () {
          if (t.current && (I(!1), L(null)), z.onCancel) return z.onCancel()
        },
        onFinish: function () {
          if (t.current && (I(!1), L(null)), o.current = null, z.onFinish) return z.onFinish()
        }
      });
      P === "delete" ? yt.Inertia.delete(Z, et({}, J, {
        data: R(d)
      })) : yt.Inertia[P](Z, R(d), J)
    }, [d, y]);
    return {
      data: d,
      setData: function (P, Z) {
        var z;
        b(typeof P == "string" ? et({}, d, ((z = {})[P] = Z, z)) : typeof P == "function" ? function (J) {
          return P(J)
        } : P)
      },
      isDirty: !l0(d, i),
      errors: h,
      hasErrors: p,
      processing: S,
      progress: T,
      wasSuccessful: g,
      recentlySuccessful: _,
      transform: function (P) {
        R = P
      },
      setDefaults: function (P, Z) {
        s(P === void 0 ? function () {
          return d
        } : function (z) {
          var J;
          return et({}, z, Z ? ((J = {})[P] = Z, J) : P)
        })
      },
      reset: function () {
        var P = [].slice.call(arguments);
        b(P.length === 0 ? i : Object.keys(i).filter(function (Z) {
          return P.includes(Z)
        }).reduce(function (Z, z) {
          return Z[z] = i[z], Z
        }, et({}, d)))
      },
      setError: function (P, Z) {
        y(function (z) {
          var J, W = et({}, z, Z ? ((J = {})[P] = Z, J) : P);
          return f(Object.keys(W).length > 0), W
        })
      },
      clearErrors: function () {
        var P = [].slice.call(arguments);
        y(function (Z) {
          var z = Object.keys(Z).reduce(function (J, W) {
            var Ce;
            return et({}, J, P.length > 0 && !P.includes(W) ? ((Ce = {})[W] = Z[W], Ce) : {})
          }, {});
          return f(Object.keys(z).length > 0), z
        })
      },
      submit: $,
      get: function (P, Z) {
        $("get", P, Z)
      },
      post: function (P, Z) {
        $("post", P, Z)
      },
      put: function (P, Z) {
        $("put", P, Z)
      },
      patch: function (P, Z) {
        $("patch", P, Z)
      },
      delete: function (P, Z) {
        $("delete", P, Z)
      },
      cancel: function () {
        o.current && o.current.cancel()
      }
    }
  }, Vr = function () {
    var e = se.useContext(En);
    if (!e) throw new Error("usePage must be used within the Inertia component");
    return e
  };

  function Ps(e) {
    var t, n, a = "";
    if (typeof e == "string" || typeof e == "number") a += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++) e[t] && (n = Ps(e[t])) && (a && (a += " "), a += n);
      else
        for (t in e) e[t] && (a && (a += " "), a += t);
    return a
  }

  function B() {
    for (var e, t, n = 0, a = ""; n < arguments.length;)(e = arguments[n++]) && (t = Ps(e)) && (a && (a += " "), a += t);
    return a
  }
  const vi = {
    sm: "py-2 px-3",
    md: "py-2.5 px-4",
    lg: "py-3 px-4"
  },
    bi = {
      primary: "bg-slate-900 text-white hover:bg-slate-700",
      dark: "bg-slate-600 text-white hover:bg-slate-500",
      secondary: "bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ",
      outline: "text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
    };

  function Ge({
    type: e = "button",
    children: t,
    className: n,
    size: a = "md",
    variant: i = "primary",
    ...s
  }) {
    return r("button", {
      type: e,
      className: B("inline-flex justify-center rounded-lg text-sm font-semibold", vi[a], bi[i], n),
      ...s,
      children: r("span", {
        children: t
      })
    })
  }

  function pe({
    href: e,
    children: t,
    className: n,
    size: a = "md",
    variant: i = "primary",
    ...s
  }) {
    return r(U, {
      href: e,
      className: B("inline-flex justify-center rounded-lg text-sm font-semibold", vi[a], bi[i], n),
      ...s,
      children: r("span", {
        children: t
      })
    })
  }

  function rr({
    href: e,
    children: t,
    className: n,
    size: a = "md",
    variant: i = "primary",
    ...s
  }) {
    return r("a", {
      href: e,
      className: B("inline-flex justify-center rounded-lg text-sm font-semibold", vi[a], bi[i], n),
      ...s,
      children: r("span", {
        children: t
      })
    })
  }

  function u0(e) {
    return B("mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500", e ? "ring-2 ring-rose-400" : "ring-1 ring-slate-200")
  }

  function Fe({
    label: e,
    className: t = "",
    id: n,
    error: a,
    value: i,
    onChange: s,
    type: o = "text",
    ...c
  }) {
    return l("div", {
      className: t,
      children: [r("label", {
        htmlFor: n,
        className: "block text-sm font-semibold leading-6 text-gray-900",
        children: e
      }), r("input", {
        type: o,
        id: n,
        className: u0(a),
        value: i,
        onChange: s,
        ...c
      }), a && a !== !0 && r("p", {
        className: "mt-2 text-sm font-medium leading-6 text-red-600",
        children: a
      })]
    })
  }

  function pr({
    title: e,
    subtitle: t,
    children: n
  }) {
    return l(j, {
      children: [r("img", {
        src: "/img/beams-basic.png",
        alt: "",
        className: "absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none"
      }), r("div", {
        className: "px-4 sm:px-6 lg:px-8",
        children: l("div", {
          className: B("relative mx-auto max-w-[37.5rem] pt-20 text-center", {
            "pb-20": n,
            "pb-24": !n
          }),
          children: [r("h1", {
            className: "text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl",
            children: e
          }), r("p", {
            className: "mt-4 text-base leading-7 text-slate-600",
            children: t
          }), n]
        })
      })]
    })
  }

  function Ve({
    as: e = "div",
    size: t,
    className: n,
    ...a
  }) {
    const i = x.useRef(null);
    return x.useEffect(() => {
      window.Prism && window.Prism.highlightAllUnder(i.current)
    }, []), r(e, {
      ref: i,
      className: B(n, {
        sm: "prose-sm"
      }[t], "prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600"),
      ...a
    })
  }

  function Os({
    purchases: e
  }) {
    return l("section", {
      className: "px-4 pt-16 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("circle", {
            cx: 16,
            cy: 16,
            r: 7,
            fill: "#fff"
          }), r("path", {
            d: "M9.707 13a7.251 7.251 0 0 1 13.852 3 7.25 7.25 0 0 1-13.298 4",
            stroke: "#0EA5E9",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), r("path", {
            d: "m12.867 12.28-3.28.74-.393-3.34M15.75 12.75v3.5l2.5 2",
            stroke: "#0EA5E9",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Purchase history"
        })]
      }), l(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: [r("p", {
          children: 'To create a more detailed invoice with any extra information you need to include for your own accounting purposes, click the "View Receipt" link, and then select the "Edit business address" option.'
        }), e.some(t => t.source === "gumroad") && r("p", {
          className: "mt-4",
          children: `For older purchases made via Gumroad, you'll need to click the "Generate" button at the bottom of the receipt instead.`
        })]
      }), l("table", {
        className: "mt-8 w-full rounded-lg bg-white text-sm leading-6 shadow ring-1 ring-gray-900/5",
        children: [r("caption", {
          className: "sr-only",
          children: "Purchase history"
        }), r("thead", {
          className: "border-b border-slate-200 text-left text-slate-900",
          children: l("tr", {
            children: [r("th", {
              className: "w-0 py-3 pl-4 font-semibold sm:pl-6",
              children: "Date"
            }), r("th", {
              className: "w-full py-3 pl-6 font-semibold",
              children: "Package"
            }), r("th", {
              className: "hidden w-0 py-3 pl-6 text-right font-semibold sm:table-cell",
              children: "Price"
            }), r("th", {
              className: "w-0 py-3 pl-6 pr-4 sm:pr-6",
              children: r("span", {
                className: "sr-only",
                children: "Receipt"
              })
            })]
          })
        }), r("tbody", {
          className: "whitespace-nowrap",
          children: e.map(t => l("tr", {
            className: "border-t border-slate-200 first:border-0",
            children: [r("td", {
              className: "py-3 pl-4 align-top text-slate-600 sm:pl-6",
              children: t.date
            }), l("td", {
              className: "max-w-0 py-3 pl-6 text-slate-900",
              children: [r("div", {
                className: "truncate",
                children: t.packageName
              }), r("div", {
                className: "font-semibold sm:hidden",
                children: t.amount
              })]
            }), l("td", {
              className: "hidden py-3 pl-6 text-right font-semibold tabular-nums text-slate-900 sm:table-cell",
              children: [t.refunded && r("span", {
                className: "mr-1 rounded px-1.5 py-0.5 text-red-500",
                children: "Refunded"
              }), r("span", {
                className: t.refunded ? "text-red-500 line-through" : "",
                children: t.amount
              })]
            }), r("td", {
              className: "py-3 pl-6 pr-4 align-top sm:pr-6",
              children: r("a", {
                href: t.url,
                target: "_blank",
                className: "font-semibold text-sky-500 hover:text-sky-600",
                children: "Receipt"
              })
            })]
          }, t.id))
        })]
      })]
    })
  }

  function we({
    title: e,
    description: t = "Beautiful UI components and templates by the creators of Tailwind CSS.",
    twitterImage: n = "https://tailwindui.com/img/og-default.png",
    children: a
  }) {
    return l(Ts, {
      title: e,
      children: [r("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), r("meta", {
        name: "twitter:site",
        content: "@tailwindcss"
      }), r("meta", {
        name: "twitter:title",
        content: e
      }), r("meta", {
        name: "twitter:description",
        content: t
      }), r("meta", {
        name: "twitter:image",
        content: n
      }), r("meta", {
        name: "twitter:creator",
        content: "@tailwindcss"
      }), r("meta", {
        property: "og:url",
        content: "https://www.tailwindui.com/"
      }), r("meta", {
        property: "og:type",
        content: "article"
      }), r("meta", {
        property: "og:title",
        content: e
      }), r("meta", {
        property: "og:description",
        content: t
      }), r("meta", {
        property: "og:image",
        content: n
      }), r("meta", {
        property: "description",
        content: t
      }), a]
    })
  }
  var m0 = Object.defineProperty,
    p0 = (e, t, n) => t in e ? m0(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n,
    Ea = (e, t, n) => (p0(e, typeof t != "symbol" ? t + "" : t, n), n);
  let h0 = class {
    constructor() {
      Ea(this, "current", this.detect()), Ea(this, "handoffState", "pending"), Ea(this, "currentId", 0)
    }
    set(t) {
      this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === "server"
    }
    get isClient() {
      return this.current === "client"
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete")
    }
    get isHandoffComplete() {
      return this.handoffState === "complete"
    }
  },
    dt = new h0,
    me = (e, t) => {
      dt.isServer ? x.useEffect(e, t) : x.useLayoutEffect(e, t)
    };

  function je(e) {
    let t = x.useRef(e);
    return me(() => {
      t.current = e
    }, [e]), t
  }

  function yi(e, t) {
    let [n, a] = x.useState(e), i = je(e);
    return me(() => a(i.current), [i, a, ...t]), n
  }

  function zr(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
      throw t
    }))
  }

  function nt() {
    let e = [],
      t = {
        addEventListener(n, a, i, s) {
          return n.addEventListener(a, i, s), t.add(() => n.removeEventListener(a, i, s))
        },
        requestAnimationFrame(...n) {
          let a = requestAnimationFrame(...n);
          return t.add(() => cancelAnimationFrame(a))
        },
        nextFrame(...n) {
          return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
        },
        setTimeout(...n) {
          let a = setTimeout(...n);
          return t.add(() => clearTimeout(a))
        },
        microTask(...n) {
          let a = {
            current: !0
          };
          return zr(() => {
            a.current && n[0]()
          }), t.add(() => {
            a.current = !1
          })
        },
        add(n) {
          return e.push(n), () => {
            let a = e.indexOf(n);
            if (a >= 0) {
              let [i] = e.splice(a, 1);
              i()
            }
          }
        },
        dispose() {
          for (let n of e.splice(0)) n()
        },
        style(n, a, i) {
          let s = n.style.getPropertyValue(a);
          return Object.assign(n.style, {
            [a]: i
          }), this.add(() => {
            Object.assign(n.style, {
              [a]: s
            })
          })
        }
      };
    return t
  }

  function Ot() {
    let [e] = x.useState(nt);
    return x.useEffect(() => () => e.dispose(), [e]), e
  }
  let V = function (e) {
    let t = je(e);
    return H.useCallback((...n) => t.current(...n), [t])
  };

  function hr() {
    let [e, t] = x.useState(dt.isHandoffComplete);
    return e && dt.isHandoffComplete === !1 && t(!1), x.useEffect(() => {
      e !== !0 && t(!0)
    }, [e]), x.useEffect(() => dt.handoff(), []), e
  }
  var Rl;
  let Se = (Rl = H.useId) != null ? Rl : function () {
    let e = hr(),
      [t, n] = H.useState(e ? () => dt.nextId() : null);
    return me(() => {
      t === null && n(dt.nextId())
    }, [t]), t != null ? "" + t : void 0
  };

  function le(e, t, ...n) {
    if (e in t) {
      let i = t[e];
      return typeof i == "function" ? i(...n) : i
    }
    let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i => `"${i}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, le), a
  }

  function fr(e) {
    return dt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
  }
  let Ja = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
  var fe = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(fe || {}),
    vt = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(vt || {}),
    f0 = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(f0 || {});

  function Dr(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Ja)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
  }
  var On = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(On || {});

  function Fn(e, t = 0) {
    var n;
    return e === ((n = fr(e)) == null ? void 0 : n.body) ? !1 : le(t, {
      [0]() {
        return e.matches(Ja)
      },
      [1]() {
        let a = e;
        for (; a !== null;) {
          if (a.matches(Ja)) return !0;
          a = a.parentElement
        }
        return !1
      }
    })
  }

  function Fs(e) {
    let t = fr(e);
    nt().nextFrame(() => {
      t && !Fn(t.activeElement, 0) && It(e)
    })
  }

  function It(e) {
    e == null || e.focus({
      preventScroll: !0
    })
  }
  let g0 = ["textarea", "input"].join(",");

  function v0(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, g0)) != null ? n : !1
  }

  function _t(e, t = n => n) {
    return e.slice().sort((n, a) => {
      let i = t(n),
        s = t(a);
      if (i === null || s === null) return 0;
      let o = i.compareDocumentPosition(s);
      return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
  }

  function b0(e, t) {
    return Ae(Dr(), t, {
      relativeTo: e
    })
  }

  function Ae(e, t, {
    sorted: n = !0,
    relativeTo: a = null,
    skipElements: i = []
  } = {}) {
    let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
      o = Array.isArray(e) ? n ? _t(e) : e : Dr(e);
    i.length > 0 && o.length > 1 && (o = o.filter(y => !i.includes(y))), a = a ?? s.activeElement;
    let c = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    })(),
      u = (() => {
        if (t & 1) return 0;
        if (t & 2) return Math.max(0, o.indexOf(a)) - 1;
        if (t & 4) return Math.max(0, o.indexOf(a)) + 1;
        if (t & 8) return o.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
      })(),
      d = t & 32 ? {
        preventScroll: !0
      } : {},
      b = 0,
      w = o.length,
      h;
    do {
      if (b >= w || b + w <= 0) return 0;
      let y = u + b;
      if (t & 16) y = (y + w) % w;
      else {
        if (y < 0) return 3;
        if (y >= w) return 1
      }
      h = o[y], h == null || h.focus(d), b += c
    } while (h !== s.activeElement);
    return t & 6 && v0(h) && h.select(), h.hasAttribute("tabindex") || h.setAttribute("tabindex", "0"), 2
  }

  function Ma(e, t, n) {
    let a = je(t);
    x.useEffect(() => {
      function i(s) {
        a.current(s)
      }
      return document.addEventListener(e, i, n), () => document.removeEventListener(e, i, n)
    }, [e, n])
  }

  function Rn(e, t, n = !0) {
    let a = x.useRef(!1);
    x.useEffect(() => {
      requestAnimationFrame(() => {
        a.current = n
      })
    }, [n]);

    function i(o, c) {
      if (!a.current || o.defaultPrevented) return;
      let u = function b(w) {
        return typeof w == "function" ? b(w()) : Array.isArray(w) || w instanceof Set ? w : [w]
      }(e),
        d = c(o);
      if (d !== null && d.getRootNode().contains(d)) {
        for (let b of u) {
          if (b === null) continue;
          let w = b instanceof HTMLElement ? b : b.current;
          if (w != null && w.contains(d) || o.composed && o.composedPath().includes(w)) return
        }
        return !Fn(d, On.Loose) && d.tabIndex !== -1 && o.preventDefault(), t(o, d)
      }
    }
    let s = x.useRef(null);
    Ma("mousedown", o => {
      var c, u;
      a.current && (s.current = ((u = (c = o.composedPath) == null ? void 0 : c.call(o)) == null ? void 0 : u[0]) || o.target)
    }, !0), Ma("click", o => {
      s.current && (i(o, () => s.current), s.current = null)
    }, !0), Ma("blur", o => i(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
  }

  function $l(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
  }

  function $n(e, t) {
    let [n, a] = x.useState(() => $l(e));
    return me(() => {
      a($l(e))
    }, [e.type, e.as]), me(() => {
      n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button")
    }, [n, t]), n
  }
  let Rs = Symbol();

  function $s(e, t = !0) {
    return Object.assign(e, {
      [Rs]: t
    })
  }

  function ue(...e) {
    let t = x.useRef(e);
    x.useEffect(() => {
      t.current = e
    }, [e]);
    let n = V(a => {
      for (let i of t.current) i != null && (typeof i == "function" ? i(a) : i.current = a)
    });
    return e.every(a => a == null || (a == null ? void 0 : a[Rs])) ? void 0 : n
  }

  function js({
    container: e,
    accept: t,
    walk: n,
    enabled: a = !0
  }) {
    let i = x.useRef(t),
      s = x.useRef(n);
    x.useEffect(() => {
      i.current = t, s.current = n
    }, [t, n]), me(() => {
      if (!e || !a) return;
      let o = fr(e);
      if (!o) return;
      let c = i.current,
        u = s.current,
        d = Object.assign(w => c(w), {
          acceptNode: c
        }),
        b = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d, !1);
      for (; b.nextNode();) u(b.currentNode)
    }, [e, a, i, s])
  }

  function y0(e) {
    throw new Error("Unexpected object: " + e)
  }
  var ge = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ge || {});

  function Hs(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0) return null;
    let a = t.resolveActiveIndex(),
      i = a ?? -1,
      s = (() => {
        switch (e.focus) {
          case 0:
            return n.findIndex(o => !t.resolveDisabled(o));
          case 1: {
            let o = n.slice().reverse().findIndex((c, u, d) => i !== -1 && d.length - u - 1 >= i ? !1 : !t.resolveDisabled(c));
            return o === -1 ? o : n.length - 1 - o
          }
          case 2:
            return n.findIndex((o, c) => c <= i ? !1 : !t.resolveDisabled(o));
          case 3: {
            let o = n.slice().reverse().findIndex(c => !t.resolveDisabled(c));
            return o === -1 ? o : n.length - 1 - o
          }
          case 4:
            return n.findIndex(o => t.resolveId(o) === e.id);
          case 5:
            return null;
          default:
            y0(e)
        }
      })();
    return s === -1 ? a : s
  }

  function Zs(...e) {
    return e.filter(Boolean).join(" ")
  }
  var ze = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ze || {}),
    bt = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(bt || {});

  function de({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: a,
    features: i,
    visible: s = !0,
    name: o
  }) {
    let c = Vs(t, e);
    if (s) return pn(c, n, a, o);
    let u = i ?? 0;
    if (u & 2) {
      let {
        static: d = !1,
        ...b
      } = c;
      if (d) return pn(b, n, a, o)
    }
    if (u & 1) {
      let {
        unmount: d = !0,
        ...b
      } = c;
      return le(d ? 0 : 1, {
        [0]() {
          return null
        },
        [1]() {
          return pn({
            ...b,
            hidden: !0,
            style: {
              display: "none"
            }
          }, n, a, o)
        }
      })
    }
    return pn(c, n, a, o)
  }

  function pn(e, t = {}, n, a) {
    var i;
    let {
      as: s = n,
      children: o,
      refName: c = "ref",
      ...u
    } = La(e, ["unmount", "static"]), d = e.ref !== void 0 ? {
      [c]: e.ref
    } : {}, b = typeof o == "function" ? o(t) : o;
    "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
    let w = {};
    if (t) {
      let h = !1,
        y = [];
      for (let [m, p] of Object.entries(t)) typeof p == "boolean" && (h = !0), p === !0 && y.push(m);
      h && (w["data-headlessui-state"] = y.join(" "))
    }
    if (s === x.Fragment && Object.keys(Ka(u)).length > 0) {
      if (!x.isValidElement(b) || Array.isArray(b) && b.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(m => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(m => `  - ${m}`).join(`
`)].join(`
`));
      let h = Zs((i = b.props) == null ? void 0 : i.className, u.className),
        y = h ? {
          className: h
        } : {};
      return x.cloneElement(b, Object.assign({}, Vs(b.props, Ka(La(u, ["ref"]))), w, d, x0(b.ref, d.ref), y))
    }
    return x.createElement(s, Object.assign({}, La(u, ["ref"]), s !== x.Fragment && d, s !== x.Fragment && w), b)
  }

  function x0(...e) {
    return {
      ref: e.every(t => t == null) ? void 0 : t => {
        for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
      }
    }
  }

  function Vs(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
      n = {};
    for (let a of e)
      for (let i in a) i.startsWith("on") && typeof a[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(a[i])) : t[i] = a[i];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(a => [a, void 0])));
    for (let a in n) Object.assign(t, {
      [a](i, ...s) {
        let o = n[a];
        for (let c of o) {
          if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
          c(i, ...s)
        }
      }
    });
    return t
  }

  function ce(e) {
    var t;
    return Object.assign(x.forwardRef(e), {
      displayName: (t = e.displayName) != null ? t : e.name
    })
  }

  function Ka(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
  }

  function La(e, t = []) {
    let n = Object.assign({}, e);
    for (let a of t) a in n && delete n[a];
    return n
  }

  function Br(e) {
    let t = e.parentElement,
      n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let a = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return a && w0(n) ? !1 : a
  }

  function w0(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
      if (t instanceof HTMLLegendElement) return !1;
      t = t.previousElementSibling
    }
    return !0
  }

  function zs(e = {}, t = null, n = []) {
    for (let [a, i] of Object.entries(e)) Bs(n, Ds(t, a), i);
    return n
  }

  function Ds(e, t) {
    return e ? e + "[" + t + "]" : t
  }

  function Bs(e, t, n) {
    if (Array.isArray(n))
      for (let [a, i] of n.entries()) Bs(e, Ds(t, a.toString()), i);
    else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : zs(n, t, e)
  }
  let N0 = "div";
  var xt = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xt || {});

  function k0(e, t) {
    let {
      features: n = 1,
      ...a
    } = e, i = {
      ref: t,
      "aria-hidden": (n & 2) === 2 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...(n & 4) === 4 && (n & 2) !== 2 && {
          display: "none"
        }
      }
    };
    return de({
      ourProps: i,
      theirProps: a,
      slot: {},
      defaultTag: N0,
      name: "Hidden"
    })
  }
  let wt = ce(k0),
    xi = x.createContext(null);
  xi.displayName = "OpenClosedContext";
  var ve = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ve || {});

  function Gt() {
    return x.useContext(xi)
  }

  function jn({
    value: e,
    children: t
  }) {
    return H.createElement(xi.Provider, {
      value: e
    }, t)
  }
  var K = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(K || {});

  function S0(e, t, n) {
    let [a, i] = x.useState(n), s = e !== void 0, o = x.useRef(s), c = x.useRef(!1), u = x.useRef(!1);
    return s && !o.current && !c.current ? (c.current = !0, o.current = s, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !s && o.current && !u.current && (u.current = !0, o.current = s, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [s ? e : a, V(d => (s || i(d), t == null ? void 0 : t(d)))]
  }

  function Ln(e, t) {
    let n = x.useRef([]),
      a = V(e);
    x.useEffect(() => {
      let i = [...n.current];
      for (let [s, o] of t.entries())
        if (n.current[s] !== o) {
          let c = a(t, i);
          return n.current = t, c
        }
    }, [a, ...t])
  }

  function jl(e) {
    return [e.screenX, e.screenY]
  }

  function Us() {
    let e = x.useRef([-1, -1]);
    return {
      wasMoved(t) {
        let n = jl(t);
        return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0)
      },
      update(t) {
        e.current = jl(t)
      }
    }
  }

  function Ws() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
  }

  function C0() {
    return /Android/gi.test(window.navigator.userAgent)
  }

  function E0() {
    return Ws() || C0()
  }
  var M0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(M0 || {}),
    L0 = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(L0 || {}),
    A0 = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(A0 || {}),
    T0 = (e => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.RegisterOption = 3] = "RegisterOption", e[e.UnregisterOption = 4] = "UnregisterOption", e[e.RegisterLabel = 5] = "RegisterLabel", e))(T0 || {});

  function Aa(e, t = n => n) {
    let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
      a = _t(t(e.options.slice()), s => s.dataRef.current.domRef.current),
      i = n ? a.indexOf(n) : null;
    return i === -1 && (i = null), {
      options: a,
      activeOptionIndex: i
    }
  }
  let _0 = {
    [1](e) {
      var t;
      return (t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1 ? e : {
        ...e,
        activeOptionIndex: null,
        comboboxState: 1
      }
    },
    [0](e) {
      var t;
      if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
      let n = e.activeOptionIndex;
      if (e.dataRef.current) {
        let {
          isSelected: a
        } = e.dataRef.current, i = e.options.findIndex(s => a(s.dataRef.current.value));
        i !== -1 && (n = i)
      }
      return {
        ...e,
        comboboxState: 0,
        activeOptionIndex: n
      }
    },
    [2](e, t) {
      var n, a, i, s;
      if ((n = e.dataRef.current) != null && n.disabled || (a = e.dataRef.current) != null && a.optionsRef.current && !((i = e.dataRef.current) != null && i.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
      let o = Aa(e);
      if (o.activeOptionIndex === null) {
        let u = o.options.findIndex(d => !d.dataRef.current.disabled);
        u !== -1 && (o.activeOptionIndex = u)
      }
      let c = Hs(t, {
        resolveItems: () => o.options,
        resolveActiveIndex: () => o.activeOptionIndex,
        resolveId: u => u.id,
        resolveDisabled: u => u.dataRef.current.disabled
      });
      return {
        ...e,
        ...o,
        activeOptionIndex: c,
        activationTrigger: (s = t.trigger) != null ? s : 1
      }
    },
    [3]: (e, t) => {
      var n, a;
      let i = {
        id: t.id,
        dataRef: t.dataRef
      },
        s = Aa(e, c => [...c, i]);
      e.activeOptionIndex === null && (n = e.dataRef.current) != null && n.isSelected(t.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
      let o = {
        ...e,
        ...s,
        activationTrigger: 1
      };
      return (a = e.dataRef.current) != null && a.__demoMode && e.dataRef.current.value === void 0 && (o.activeOptionIndex = 0), o
    },
    [4]: (e, t) => {
      let n = Aa(e, a => {
        let i = a.findIndex(s => s.id === t.id);
        return i !== -1 && a.splice(i, 1), a
      });
      return {
        ...e,
        ...n,
        activationTrigger: 1
      }
    },
    [5]: (e, t) => ({
      ...e,
      labelId: t.id
    })
  },
    wi = x.createContext(null);
  wi.displayName = "ComboboxActionsContext";

  function Ur(e) {
    let t = x.useContext(wi);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Ur), n
    }
    return t
  }
  let Ni = x.createContext(null);
  Ni.displayName = "ComboboxDataContext";

  function gr(e) {
    let t = x.useContext(Ni);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, gr), n
    }
    return t
  }

  function I0(e, t) {
    return le(t.type, _0, e, t)
  }
  let P0 = x.Fragment;

  function O0(e, t) {
    let {
      value: n,
      defaultValue: a,
      onChange: i,
      name: s,
      by: o = (Y, ee) => Y === ee,
      disabled: c = !1,
      __demoMode: u = !1,
      nullable: d = !1,
      multiple: b = !1,
      ...w
    } = e, [h = b ? [] : void 0, y] = S0(n, i, a), [m, p] = x.useReducer(I0, {
      dataRef: x.createRef(),
      comboboxState: u ? 0 : 1,
      options: [],
      activeOptionIndex: null,
      activationTrigger: 1,
      labelId: null
    }), f = x.useRef(!1), N = x.useRef({
      static: !1,
      hold: !1
    }), S = x.useRef(null), I = x.useRef(null), M = x.useRef(null), T = x.useRef(null), L = V(typeof o == "string" ? (Y, ee) => {
      let G = o;
      return (Y == null ? void 0 : Y[G]) === (ee == null ? void 0 : ee[G])
    } : o), C = x.useCallback(Y => le(g.mode, {
      [1]: () => h.some(ee => L(ee, Y)),
      [0]: () => L(h, Y)
    }), [h]), g = x.useMemo(() => ({
      ...m,
      optionsPropsRef: N,
      labelRef: S,
      inputRef: I,
      buttonRef: M,
      optionsRef: T,
      value: h,
      defaultValue: a,
      disabled: c,
      mode: b ? 1 : 0,
      get activeOptionIndex() {
        if (f.current && m.activeOptionIndex === null && m.options.length > 0) {
          let Y = m.options.findIndex(ee => !ee.dataRef.current.disabled);
          if (Y !== -1) return Y
        }
        return m.activeOptionIndex
      },
      compare: L,
      isSelected: C,
      nullable: d,
      __demoMode: u
    }), [h, a, c, b, d, u, m]), k = x.useRef(g.activeOptionIndex !== null ? g.options[g.activeOptionIndex] : null);
    x.useEffect(() => {
      let Y = g.activeOptionIndex !== null ? g.options[g.activeOptionIndex] : null;
      k.current !== Y && (k.current = Y)
    }), me(() => {
      m.dataRef.current = g
    }, [g]), Rn([g.buttonRef, g.inputRef, g.optionsRef], () => W.closeCombobox(), g.comboboxState === 0);
    let A = x.useMemo(() => ({
      open: g.comboboxState === 0,
      disabled: c,
      activeIndex: g.activeOptionIndex,
      activeOption: g.activeOptionIndex === null ? null : g.options[g.activeOptionIndex].dataRef.current.value,
      value: h
    }), [g, c, h]),
      _ = V(Y => {
        let ee = g.options.find(G => G.id === Y);
        ee && J(ee.dataRef.current.value)
      }),
      O = V(() => {
        if (g.activeOptionIndex !== null) {
          let {
            dataRef: Y,
            id: ee
          } = g.options[g.activeOptionIndex];
          J(Y.current.value), W.goToOption(ge.Specific, ee)
        }
      }),
      R = V(() => {
        p({
          type: 0
        }), f.current = !0
      }),
      $ = V(() => {
        p({
          type: 1
        }), f.current = !1
      }),
      P = V((Y, ee, G) => (f.current = !1, Y === ge.Specific ? p({
        type: 2,
        focus: ge.Specific,
        id: ee,
        trigger: G
      }) : p({
        type: 2,
        focus: Y,
        trigger: G
      }))),
      Z = V((Y, ee) => (p({
        type: 3,
        id: Y,
        dataRef: ee
      }), () => {
        var G;
        ((G = k.current) == null ? void 0 : G.id) === Y && (f.current = !0), p({
          type: 4,
          id: Y
        })
      })),
      z = V(Y => (p({
        type: 5,
        id: Y
      }), () => p({
        type: 5,
        id: null
      }))),
      J = V(Y => le(g.mode, {
        [0]() {
          return y == null ? void 0 : y(Y)
        },
        [1]() {
          let ee = g.value.slice(),
            G = ee.findIndex(te => L(te, Y));
          return G === -1 ? ee.push(Y) : ee.splice(G, 1), y == null ? void 0 : y(ee)
        }
      })),
      W = x.useMemo(() => ({
        onChange: J,
        registerOption: Z,
        registerLabel: z,
        goToOption: P,
        closeCombobox: $,
        openCombobox: R,
        selectActiveOption: O,
        selectOption: _
      }), []),
      Ce = t === null ? {} : {
        ref: t
      },
      oe = x.useRef(null),
      Te = Ot();
    return x.useEffect(() => {
      oe.current && a !== void 0 && Te.addEventListener(oe.current, "reset", () => {
        J(a)
      })
    }, [oe, J]), H.createElement(wi.Provider, {
      value: W
    }, H.createElement(Ni.Provider, {
      value: g
    }, H.createElement(jn, {
      value: le(g.comboboxState, {
        [0]: ve.Open,
        [1]: ve.Closed
      })
    }, s != null && h != null && zs({
      [s]: h
    }).map(([Y, ee], G) => H.createElement(wt, {
      features: xt.Hidden,
      ref: G === 0 ? te => {
        var re;
        oe.current = (re = te == null ? void 0 : te.closest("form")) != null ? re : null
      } : void 0,
      ...Ka({
        key: Y,
        as: "input",
        type: "hidden",
        hidden: !0,
        readOnly: !0,
        name: Y,
        value: ee
      })
    })), de({
      ourProps: Ce,
      theirProps: w,
      slot: A,
      defaultTag: P0,
      name: "Combobox"
    }))))
  }
  let F0 = "input";

  function R0(e, t) {
    var n, a, i, s;
    let o = Se(),
      {
        id: c = `headlessui-combobox-input-${o}`,
        onChange: u,
        displayValue: d,
        type: b = "text",
        ...w
      } = e,
      h = gr("Combobox.Input"),
      y = Ur("Combobox.Input"),
      m = ue(h.inputRef, t),
      p = x.useRef(!1),
      f = Ot(),
      N = function () {
        var _;
        return typeof d == "function" && h.value !== void 0 ? (_ = d(h.value)) != null ? _ : "" : typeof h.value == "string" ? h.value : ""
      }();
    Ln(([_, O], [R, $]) => {
      p.current || h.inputRef.current && ($ === 0 && O === 1 || _ !== R) && (h.inputRef.current.value = _)
    }, [N, h.comboboxState]), Ln(([_], [O]) => {
      if (_ === 0 && O === 1) {
        let R = h.inputRef.current;
        if (!R) return;
        let $ = R.value,
          {
            selectionStart: P,
            selectionEnd: Z,
            selectionDirection: z
          } = R;
        R.value = "", R.value = $, z !== null ? R.setSelectionRange(P, Z, z) : R.setSelectionRange(P, Z)
      }
    }, [h.comboboxState]);
    let S = x.useRef(!1),
      I = V(() => {
        S.current = !0
      }),
      M = V(() => {
        setTimeout(() => {
          S.current = !1
        })
      }),
      T = V(_ => {
        switch (p.current = !0, _.key) {
          case K.Backspace:
          case K.Delete:
            if (h.mode !== 0 || !h.nullable) return;
            let O = _.currentTarget;
            f.requestAnimationFrame(() => {
              O.value === "" && (y.onChange(null), h.optionsRef.current && (h.optionsRef.current.scrollTop = 0), y.goToOption(ge.Nothing))
            });
            break;
          case K.Enter:
            if (p.current = !1, h.comboboxState !== 0 || S.current) return;
            if (_.preventDefault(), _.stopPropagation(), h.activeOptionIndex === null) {
              y.closeCombobox();
              return
            }
            y.selectActiveOption(), h.mode === 0 && y.closeCombobox();
            break;
          case K.ArrowDown:
            return p.current = !1, _.preventDefault(), _.stopPropagation(), le(h.comboboxState, {
              [0]: () => {
                y.goToOption(ge.Next)
              },
              [1]: () => {
                y.openCombobox()
              }
            });
          case K.ArrowUp:
            return p.current = !1, _.preventDefault(), _.stopPropagation(), le(h.comboboxState, {
              [0]: () => {
                y.goToOption(ge.Previous)
              },
              [1]: () => {
                y.openCombobox(), f.nextFrame(() => {
                  h.value || y.goToOption(ge.Last)
                })
              }
            });
          case K.Home:
            if (_.shiftKey) break;
            return p.current = !1, _.preventDefault(), _.stopPropagation(), y.goToOption(ge.First);
          case K.PageUp:
            return p.current = !1, _.preventDefault(), _.stopPropagation(), y.goToOption(ge.First);
          case K.End:
            if (_.shiftKey) break;
            return p.current = !1, _.preventDefault(), _.stopPropagation(), y.goToOption(ge.Last);
          case K.PageDown:
            return p.current = !1, _.preventDefault(), _.stopPropagation(), y.goToOption(ge.Last);
          case K.Escape:
            return p.current = !1, h.comboboxState !== 0 ? void 0 : (_.preventDefault(), h.optionsRef.current && !h.optionsPropsRef.current.static && _.stopPropagation(), y.closeCombobox());
          case K.Tab:
            if (p.current = !1, h.comboboxState !== 0) return;
            h.mode === 0 && y.selectActiveOption(), y.closeCombobox();
            break
        }
      }),
      L = V(_ => {
        y.openCombobox(), u == null || u(_)
      }),
      C = V(() => {
        p.current = !1
      }),
      g = yi(() => {
        if (h.labelId) return [h.labelId].join(" ")
      }, [h.labelId]),
      k = x.useMemo(() => ({
        open: h.comboboxState === 0,
        disabled: h.disabled
      }), [h]),
      A = {
        ref: m,
        id: c,
        role: "combobox",
        type: b,
        "aria-controls": (n = h.optionsRef.current) == null ? void 0 : n.id,
        "aria-expanded": h.disabled ? void 0 : h.comboboxState === 0,
        "aria-activedescendant": h.activeOptionIndex === null || (a = h.options[h.activeOptionIndex]) == null ? void 0 : a.id,
        "aria-labelledby": g,
        "aria-autocomplete": "list",
        defaultValue: (s = (i = e.defaultValue) != null ? i : h.defaultValue !== void 0 ? d == null ? void 0 : d(h.defaultValue) : null) != null ? s : h.defaultValue,
        disabled: h.disabled,
        onCompositionStart: I,
        onCompositionEnd: M,
        onKeyDown: T,
        onChange: L,
        onBlur: C
      };
    return de({
      ourProps: A,
      theirProps: w,
      slot: k,
      defaultTag: F0,
      name: "Combobox.Input"
    })
  }
  let $0 = "button";

  function j0(e, t) {
    var n;
    let a = gr("Combobox.Button"),
      i = Ur("Combobox.Button"),
      s = ue(a.buttonRef, t),
      o = Se(),
      {
        id: c = `headlessui-combobox-button-${o}`,
        ...u
      } = e,
      d = Ot(),
      b = V(p => {
        switch (p.key) {
          case K.ArrowDown:
            return p.preventDefault(), p.stopPropagation(), a.comboboxState === 1 && i.openCombobox(), d.nextFrame(() => {
              var f;
              return (f = a.inputRef.current) == null ? void 0 : f.focus({
                preventScroll: !0
              })
            });
          case K.ArrowUp:
            return p.preventDefault(), p.stopPropagation(), a.comboboxState === 1 && (i.openCombobox(), d.nextFrame(() => {
              a.value || i.goToOption(ge.Last)
            })), d.nextFrame(() => {
              var f;
              return (f = a.inputRef.current) == null ? void 0 : f.focus({
                preventScroll: !0
              })
            });
          case K.Escape:
            return a.comboboxState !== 0 ? void 0 : (p.preventDefault(), a.optionsRef.current && !a.optionsPropsRef.current.static && p.stopPropagation(), i.closeCombobox(), d.nextFrame(() => {
              var f;
              return (f = a.inputRef.current) == null ? void 0 : f.focus({
                preventScroll: !0
              })
            }));
          default:
            return
        }
      }),
      w = V(p => {
        if (Br(p.currentTarget)) return p.preventDefault();
        a.comboboxState === 0 ? i.closeCombobox() : (p.preventDefault(), i.openCombobox()), d.nextFrame(() => {
          var f;
          return (f = a.inputRef.current) == null ? void 0 : f.focus({
            preventScroll: !0
          })
        })
      }),
      h = yi(() => {
        if (a.labelId) return [a.labelId, c].join(" ")
      }, [a.labelId, c]),
      y = x.useMemo(() => ({
        open: a.comboboxState === 0,
        disabled: a.disabled,
        value: a.value
      }), [a]),
      m = {
        ref: s,
        id: c,
        type: $n(e, a.buttonRef),
        tabIndex: -1,
        "aria-haspopup": "listbox",
        "aria-controls": (n = a.optionsRef.current) == null ? void 0 : n.id,
        "aria-expanded": a.disabled ? void 0 : a.comboboxState === 0,
        "aria-labelledby": h,
        disabled: a.disabled,
        onClick: w,
        onKeyDown: b
      };
    return de({
      ourProps: m,
      theirProps: u,
      slot: y,
      defaultTag: $0,
      name: "Combobox.Button"
    })
  }
  let H0 = "label";

  function Z0(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-combobox-label-${n}`,
        ...i
      } = e,
      s = gr("Combobox.Label"),
      o = Ur("Combobox.Label"),
      c = ue(s.labelRef, t);
    me(() => o.registerLabel(a), [a]);
    let u = V(() => {
      var b;
      return (b = s.inputRef.current) == null ? void 0 : b.focus({
        preventScroll: !0
      })
    }),
      d = x.useMemo(() => ({
        open: s.comboboxState === 0,
        disabled: s.disabled
      }), [s]);
    return de({
      ourProps: {
        ref: c,
        id: a,
        onClick: u
      },
      theirProps: i,
      slot: d,
      defaultTag: H0,
      name: "Combobox.Label"
    })
  }
  let V0 = "ul",
    z0 = ze.RenderStrategy | ze.Static;

  function D0(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-combobox-options-${n}`,
        hold: i = !1,
        ...s
      } = e,
      o = gr("Combobox.Options"),
      c = ue(o.optionsRef, t),
      u = Gt(),
      d = (() => u !== null ? (u & ve.Open) === ve.Open : o.comboboxState === 0)();
    me(() => {
      var y;
      o.optionsPropsRef.current.static = (y = e.static) != null ? y : !1
    }, [o.optionsPropsRef, e.static]), me(() => {
      o.optionsPropsRef.current.hold = i
    }, [o.optionsPropsRef, i]), js({
      container: o.optionsRef.current,
      enabled: o.comboboxState === 0,
      accept(y) {
        return y.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
      },
      walk(y) {
        y.setAttribute("role", "none")
      }
    });
    let b = yi(() => {
      var y, m;
      return (m = o.labelId) != null ? m : (y = o.buttonRef.current) == null ? void 0 : y.id
    }, [o.labelId, o.buttonRef.current]),
      w = x.useMemo(() => ({
        open: o.comboboxState === 0
      }), [o]),
      h = {
        "aria-labelledby": b,
        role: "listbox",
        "aria-multiselectable": o.mode === 1 ? !0 : void 0,
        id: a,
        ref: c
      };
    return de({
      ourProps: h,
      theirProps: s,
      slot: w,
      defaultTag: V0,
      features: z0,
      visible: d,
      name: "Combobox.Options"
    })
  }
  let B0 = "li";

  function U0(e, t) {
    var n, a;
    let i = Se(),
      {
        id: s = `headlessui-combobox-option-${i}`,
        disabled: o = !1,
        value: c,
        ...u
      } = e,
      d = gr("Combobox.Option"),
      b = Ur("Combobox.Option"),
      w = d.activeOptionIndex !== null ? d.options[d.activeOptionIndex].id === s : !1,
      h = d.isSelected(c),
      y = x.useRef(null),
      m = je({
        disabled: o,
        value: c,
        domRef: y,
        textValue: (a = (n = y.current) == null ? void 0 : n.textContent) == null ? void 0 : a.toLowerCase()
      }),
      p = ue(t, y),
      f = V(() => b.selectOption(s));
    me(() => b.registerOption(s, m), [m, s]);
    let N = x.useRef(!d.__demoMode);
    me(() => {
      if (!d.__demoMode) return;
      let k = nt();
      return k.requestAnimationFrame(() => {
        N.current = !0
      }), k.dispose
    }, []), me(() => {
      if (d.comboboxState !== 0 || !w || !N.current || d.activationTrigger === 0) return;
      let k = nt();
      return k.requestAnimationFrame(() => {
        var A, _;
        (_ = (A = y.current) == null ? void 0 : A.scrollIntoView) == null || _.call(A, {
          block: "nearest"
        })
      }), k.dispose
    }, [y, w, d.comboboxState, d.activationTrigger, d.activeOptionIndex]);
    let S = V(k => {
      if (o) return k.preventDefault();
      f(), d.mode === 0 && b.closeCombobox(), E0() || requestAnimationFrame(() => {
        var A;
        return (A = d.inputRef.current) == null ? void 0 : A.focus()
      })
    }),
      I = V(() => {
        if (o) return b.goToOption(ge.Nothing);
        b.goToOption(ge.Specific, s)
      }),
      M = Us(),
      T = V(k => M.update(k)),
      L = V(k => {
        M.wasMoved(k) && (o || w || b.goToOption(ge.Specific, s, 0))
      }),
      C = V(k => {
        M.wasMoved(k) && (o || w && (d.optionsPropsRef.current.hold || b.goToOption(ge.Nothing)))
      }),
      g = x.useMemo(() => ({
        active: w,
        selected: h,
        disabled: o
      }), [w, h, o]);
    return de({
      ourProps: {
        id: s,
        ref: p,
        role: "option",
        tabIndex: o === !0 ? void 0 : -1,
        "aria-disabled": o === !0 ? !0 : void 0,
        "aria-selected": h,
        disabled: void 0,
        onClick: S,
        onFocus: I,
        onPointerEnter: T,
        onMouseEnter: T,
        onPointerMove: L,
        onMouseMove: L,
        onPointerLeave: C,
        onMouseLeave: C
      },
      theirProps: u,
      slot: g,
      defaultTag: B0,
      name: "Combobox.Option"
    })
  }
  let W0 = ce(O0),
    q0 = ce(j0),
    G0 = ce(R0),
    Y0 = ce(Z0),
    J0 = ce(D0),
    K0 = ce(U0),
    hn = Object.assign(W0, {
      Input: G0,
      Button: q0,
      Label: Y0,
      Options: J0,
      Option: K0
    });

  function X0(e, t, n) {
    let a = je(t);
    x.useEffect(() => {
      function i(s) {
        a.current(s)
      }
      return window.addEventListener(e, i, n), () => window.removeEventListener(e, i, n)
    }, [e, n])
  }
  var Ue = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ue || {});

  function ki() {
    let e = x.useRef(0);
    return X0("keydown", t => {
      t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
  }

  function Hn() {
    let e = x.useRef(!1);
    return me(() => (e.current = !0, () => {
      e.current = !1
    }), []), e
  }

  function Ft(...e) {
    return x.useMemo(() => fr(...e), [...e])
  }

  function Zn(e, t, n, a) {
    let i = je(n);
    x.useEffect(() => {
      e = e ?? window;

      function s(o) {
        i.current(o)
      }
      return e.addEventListener(t, s, a), () => e.removeEventListener(t, s, a)
    }, [e, t, a])
  }
  let Q0 = "div";
  var qs = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(qs || {});

  function em(e, t) {
    let n = x.useRef(null),
      a = ue(n, t),
      {
        initialFocus: i,
        containers: s,
        features: o = 30,
        ...c
      } = e;
    hr() || (o = 1);
    let u = Ft(n);
    rm({
      ownerDocument: u
    }, Boolean(o & 16));
    let d = nm({
      ownerDocument: u,
      container: n,
      initialFocus: i
    }, Boolean(o & 2));
    am({
      ownerDocument: u,
      container: n,
      containers: s,
      previousActiveElement: d
    }, Boolean(o & 8));
    let b = ki(),
      w = V(p => {
        let f = n.current;
        f && (N => N())(() => {
          le(b.current, {
            [Ue.Forwards]: () => {
              Ae(f, fe.First, {
                skipElements: [p.relatedTarget]
              })
            },
            [Ue.Backwards]: () => {
              Ae(f, fe.Last, {
                skipElements: [p.relatedTarget]
              })
            }
          })
        })
      }),
      h = Ot(),
      y = x.useRef(!1),
      m = {
        ref: a,
        onKeyDown(p) {
          p.key == "Tab" && (y.current = !0, h.requestAnimationFrame(() => {
            y.current = !1
          }))
        },
        onBlur(p) {
          let f = new Set(s == null ? void 0 : s.current);
          f.add(n);
          let N = p.relatedTarget;
          N instanceof HTMLElement && N.dataset.headlessuiFocusGuard !== "true" && (Gs(f, N) || (y.current ? Ae(n.current, le(b.current, {
            [Ue.Forwards]: () => fe.Next,
            [Ue.Backwards]: () => fe.Previous
          }) | fe.WrapAround, {
            relativeTo: p.target
          }) : p.target instanceof HTMLElement && It(p.target)))
        }
      };
    return H.createElement(H.Fragment, null, Boolean(o & 4) && H.createElement(wt, {
      as: "button",
      type: "button",
      "data-headlessui-focus-guard": !0,
      onFocus: w,
      features: xt.Focusable
    }), de({
      ourProps: m,
      theirProps: c,
      defaultTag: Q0,
      name: "FocusTrap"
    }), Boolean(o & 4) && H.createElement(wt, {
      as: "button",
      type: "button",
      "data-headlessui-focus-guard": !0,
      onFocus: w,
      features: xt.Focusable
    }))
  }
  let tm = ce(em),
    Er = Object.assign(tm, {
      features: qs
    });

  function rm({
    ownerDocument: e
  }, t) {
    let n = x.useRef(null);
    Zn(e == null ? void 0 : e.defaultView, "focusout", i => {
      t && (n.current || (n.current = i.target))
    }, !0), Ln(() => {
      t || ((e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && It(n.current), n.current = null)
    }, [t]);
    let a = x.useRef(!1);
    x.useEffect(() => (a.current = !1, () => {
      a.current = !0, zr(() => {
        a.current && (It(n.current), n.current = null)
      })
    }), [])
  }

  function nm({
    ownerDocument: e,
    container: t,
    initialFocus: n
  }, a) {
    let i = x.useRef(null),
      s = Hn();
    return Ln(() => {
      if (!a) return;
      let o = t.current;
      o && zr(() => {
        if (!s.current) return;
        let c = e == null ? void 0 : e.activeElement;
        if (n != null && n.current) {
          if ((n == null ? void 0 : n.current) === c) {
            i.current = c;
            return
          }
        } else if (o.contains(c)) {
          i.current = c;
          return
        }
        n != null && n.current ? It(n.current) : Ae(o, fe.First) === vt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement
      })
    }, [a]), i
  }

  function am({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: a
  }, i) {
    let s = Hn();
    Zn(e == null ? void 0 : e.defaultView, "focus", o => {
      if (!i || !s.current) return;
      let c = new Set(n == null ? void 0 : n.current);
      c.add(t);
      let u = a.current;
      if (!u) return;
      let d = o.target;
      d && d instanceof HTMLElement ? Gs(c, d) ? (a.current = d, It(d)) : (o.preventDefault(), o.stopPropagation(), It(u)) : It(a.current)
    }, !0)
  }

  function Gs(e, t) {
    var n;
    for (let a of e)
      if ((n = a.current) != null && n.contains(t)) return !0;
    return !1
  }
  let Ys = x.createContext(!1);

  function im() {
    return x.useContext(Ys)
  }

  function Xa(e) {
    return H.createElement(Ys.Provider, {
      value: e.force
    }, e.children)
  }

  function lm(e) {
    let t = im(),
      n = x.useContext(Js),
      a = Ft(e),
      [i, s] = x.useState(() => {
        if (!t && n !== null || dt.isServer) return null;
        let o = a == null ? void 0 : a.getElementById("headlessui-portal-root");
        if (o) return o;
        if (a === null) return null;
        let c = a.createElement("div");
        return c.setAttribute("id", "headlessui-portal-root"), a.body.appendChild(c)
      });
    return x.useEffect(() => {
      i !== null && (a != null && a.body.contains(i) || a == null || a.body.appendChild(i))
    }, [i, a]), x.useEffect(() => {
      t || n !== null && s(n.current)
    }, [n, s, t]), i
  }
  let sm = x.Fragment;

  function om(e, t) {
    let n = e,
      a = x.useRef(null),
      i = ue($s(b => {
        a.current = b
      }), t),
      s = Ft(a),
      o = lm(a),
      [c] = x.useState(() => {
        var b;
        return dt.isServer ? null : (b = s == null ? void 0 : s.createElement("div")) != null ? b : null
      }),
      u = hr(),
      d = x.useRef(!1);
    return me(() => {
      if (d.current = !1, !(!o || !c)) return o.contains(c) || (c.setAttribute("data-headlessui-portal", ""), o.appendChild(c)), () => {
        d.current = !0, zr(() => {
          var b;
          d.current && (!o || !c || (c instanceof Node && o.contains(c) && o.removeChild(c), o.childNodes.length <= 0 && ((b = o.parentElement) == null || b.removeChild(o))))
        })
      }
    }, [o, c]), u ? !o || !c ? null : Kl.createPortal(de({
      ourProps: {
        ref: i
      },
      theirProps: n,
      defaultTag: sm,
      name: "Portal"
    }), c) : null
  }
  let cm = x.Fragment,
    Js = x.createContext(null);

  function dm(e, t) {
    let {
      target: n,
      ...a
    } = e, i = {
      ref: ue(t)
    };
    return H.createElement(Js.Provider, {
      value: n
    }, de({
      ourProps: i,
      theirProps: a,
      defaultTag: cm,
      name: "Popover.Group"
    }))
  }
  let um = ce(om),
    mm = ce(dm),
    Qa = Object.assign(um, {
      Group: mm
    }),
    Ks = x.createContext(null);

  function Xs() {
    let e = x.useContext(Ks);
    if (e === null) {
      let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(t, Xs), t
    }
    return e
  }

  function pm() {
    let [e, t] = x.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, x.useMemo(() => function (n) {
      let a = V(s => (t(o => [...o, s]), () => t(o => {
        let c = o.slice(),
          u = c.indexOf(s);
        return u !== -1 && c.splice(u, 1), c
      }))),
        i = x.useMemo(() => ({
          register: a,
          slot: n.slot,
          name: n.name,
          props: n.props
        }), [a, n.slot, n.name, n.props]);
      return H.createElement(Ks.Provider, {
        value: i
      }, n.children)
    }, [t])]
  }
  let hm = "p";

  function fm(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-description-${n}`,
        ...i
      } = e,
      s = Xs(),
      o = ue(t);
    me(() => s.register(a), [a, s.register]);
    let c = {
      ref: o,
      ...s.props,
      id: a
    };
    return de({
      ourProps: c,
      theirProps: i,
      slot: s.slot || {},
      defaultTag: hm,
      name: s.name || "Description"
    })
  }
  let gm = ce(fm),
    vm = Object.assign(gm, {}),
    Si = x.createContext(() => { });
  Si.displayName = "StackContext";
  var ei = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ei || {});

  function bm() {
    return x.useContext(Si)
  }

  function ym({
    children: e,
    onUpdate: t,
    type: n,
    element: a,
    enabled: i
  }) {
    let s = bm(),
      o = V((...c) => {
        t == null || t(...c), s(...c)
      });
    return me(() => {
      let c = i === void 0 || i === !0;
      return c && o(0, n, a), () => {
        c && o(1, n, a)
      }
    }, [o, n, a, i]), H.createElement(Si.Provider, {
      value: o
    }, e)
  }

  function xm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  const wm = typeof Object.is == "function" ? Object.is : xm,
    {
      useState: Nm,
      useEffect: km,
      useLayoutEffect: Sm,
      useDebugValue: Cm
    } = ja;

  function Em(e, t, n) {
    const a = t(),
      [{
        inst: i
      }, s] = Nm({
        inst: {
          value: a,
          getSnapshot: t
        }
      });
    return Sm(() => {
      i.value = a, i.getSnapshot = t, Ta(i) && s({
        inst: i
      })
    }, [e, a, t]), km(() => (Ta(i) && s({
      inst: i
    }), e(() => {
      Ta(i) && s({
        inst: i
      })
    })), [e]), Cm(a), a
  }

  function Ta(e) {
    const t = e.getSnapshot,
      n = e.value;
    try {
      const a = t();
      return !wm(n, a)
    } catch {
      return !0
    }
  }

  function Mm(e, t, n) {
    return t()
  }
  const Lm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Am = !Lm,
    Tm = Am ? Mm : Em,
    _m = "useSyncExternalStore" in ja ? (e => e.useSyncExternalStore)(ja) : Tm;

  function Im(e) {
    return _m(e.subscribe, e.getSnapshot, e.getSnapshot)
  }

  function Pm(e, t) {
    let n = e(),
      a = new Set;
    return {
      getSnapshot() {
        return n
      },
      subscribe(i) {
        return a.add(i), () => a.delete(i)
      },
      dispatch(i, ...s) {
        let o = t[i].call(n, ...s);
        o && (n = o, a.forEach(c => c()))
      }
    }
  }

  function Om() {
    let e;
    return {
      before({
        doc: t
      }) {
        var n;
        let a = t.documentElement;
        e = ((n = t.defaultView) != null ? n : window).innerWidth - a.clientWidth
      },
      after({
        doc: t,
        d: n
      }) {
        let a = t.documentElement,
          i = a.clientWidth - a.offsetWidth,
          s = e - i;
        n.style(a, "paddingRight", `${s}px`)
      }
    }
  }

  function Fm() {
    if (!Ws()) return {};
    let e;
    return {
      before() {
        e = window.pageYOffset
      },
      after({
        doc: t,
        d: n,
        meta: a
      }) {
        function i(o) {
          return a.containers.flatMap(c => c()).some(c => c.contains(o))
        }
        n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
        let s = null;
        n.addEventListener(t, "click", o => {
          if (o.target instanceof HTMLElement) try {
            let c = o.target.closest("a");
            if (!c) return;
            let {
              hash: u
            } = new URL(c.href), d = t.querySelector(u);
            d && !i(d) && (s = d)
          } catch { }
        }, !0), n.addEventListener(t, "touchmove", o => {
          o.target instanceof HTMLElement && !i(o.target) && o.preventDefault()
        }, {
          passive: !1
        }), n.add(() => {
          window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({
            block: "nearest"
          }), s = null)
        })
      }
    }
  }

  function Rm() {
    return {
      before({
        doc: e,
        d: t
      }) {
        t.style(e.documentElement, "overflow", "hidden")
      }
    }
  }

  function $m(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
  }
  let Bt = Pm(() => new Map, {
    PUSH(e, t) {
      var n;
      let a = (n = this.get(e)) != null ? n : {
        doc: e,
        count: 0,
        d: nt(),
        meta: new Set
      };
      return a.count++, a.meta.add(t), this.set(e, a), this
    },
    POP(e, t) {
      let n = this.get(e);
      return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
      doc: e,
      d: t,
      meta: n
    }) {
      let a = {
        doc: e,
        d: t,
        meta: $m(n)
      },
        i = [Fm(), Om(), Rm()];
      i.forEach(({
        before: s
      }) => s == null ? void 0 : s(a)), i.forEach(({
        after: s
      }) => s == null ? void 0 : s(a))
    },
    SCROLL_ALLOW({
      d: e
    }) {
      e.dispose()
    },
    TEARDOWN({
      doc: e
    }) {
      this.delete(e)
    }
  });
  Bt.subscribe(() => {
    let e = Bt.getSnapshot(),
      t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
      let a = t.get(n.doc) === "hidden",
        i = n.count !== 0;
      (i && !a || !i && a) && Bt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Bt.dispatch("TEARDOWN", n)
    }
  });

  function jm(e, t, n) {
    let a = Im(Bt),
      i = e ? a.get(e) : void 0,
      s = i ? i.count > 0 : !1;
    return me(() => {
      if (!(!e || !t)) return Bt.dispatch("PUSH", e, n), () => Bt.dispatch("POP", e, n)
    }, [t, e]), s
  }
  let _a = new Map,
    Mr = new Map;

  function Hl(e, t = !0) {
    me(() => {
      var n;
      if (!t) return;
      let a = typeof e == "function" ? e() : e.current;
      if (!a) return;

      function i() {
        var o;
        if (!a) return;
        let c = (o = Mr.get(a)) != null ? o : 1;
        if (c === 1 ? Mr.delete(a) : Mr.set(a, c - 1), c !== 1) return;
        let u = _a.get(a);
        u && (u["aria-hidden"] === null ? a.removeAttribute("aria-hidden") : a.setAttribute("aria-hidden", u["aria-hidden"]), a.inert = u.inert, _a.delete(a))
      }
      let s = (n = Mr.get(a)) != null ? n : 0;
      return Mr.set(a, s + 1), s !== 0 || (_a.set(a, {
        "aria-hidden": a.getAttribute("aria-hidden"),
        inert: a.inert
      }), a.setAttribute("aria-hidden", "true"), a.inert = !0), i
    }, [e, t])
  }
  var Hm = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hm || {}),
    Zm = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(Zm || {});
  let Vm = {
    [0](e, t) {
      return e.titleId === t.id ? e : {
        ...e,
        titleId: t.id
      }
    }
  },
    An = x.createContext(null);
  An.displayName = "DialogContext";

  function Wr(e) {
    let t = x.useContext(An);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Wr), n
    }
    return t
  }

  function zm(e, t, n = () => [document.body]) {
    jm(e, t, a => {
      var i;
      return {
        containers: [...(i = a.containers) != null ? i : [], n]
      }
    })
  }

  function Dm(e, t) {
    return le(t.type, Vm, e, t)
  }
  let Bm = "div",
    Um = ze.RenderStrategy | ze.Static;

  function Wm(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-dialog-${n}`,
        open: i,
        onClose: s,
        initialFocus: o,
        __demoMode: c = !1,
        ...u
      } = e,
      [d, b] = x.useState(0),
      w = Gt();
    i === void 0 && w !== null && (i = (w & ve.Open) === ve.Open);
    let h = x.useRef(new Set),
      y = x.useRef(null),
      m = ue(y, t),
      p = x.useRef(null),
      f = Ft(y),
      N = e.hasOwnProperty("open") || w !== null,
      S = e.hasOwnProperty("onClose");
    if (!N && !S) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!N) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!S) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof i != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
    if (typeof s != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);
    let I = i ? 0 : 1,
      [M, T] = x.useReducer(Dm, {
        titleId: null,
        descriptionId: null,
        panelRef: x.createRef()
      }),
      L = V(() => s(!1)),
      C = V(te => T({
        type: 0,
        id: te
      })),
      g = hr() ? c ? !1 : I === 0 : !1,
      k = d > 1,
      A = x.useContext(An) !== null,
      _ = k ? "parent" : "leaf",
      O = w !== null ? (w & ve.Closing) === ve.Closing : !1,
      R = (() => A || O ? !1 : g)(),
      $ = x.useCallback(() => {
        var te, re;
        return (re = Array.from((te = f == null ? void 0 : f.querySelectorAll("body > *")) != null ? te : []).find(ne => ne.id === "headlessui-portal-root" ? !1 : ne.contains(p.current) && ne instanceof HTMLElement)) != null ? re : null
      }, [p]);
    Hl($, R);
    let P = (() => k ? !0 : g)(),
      Z = x.useCallback(() => {
        var te, re;
        return (re = Array.from((te = f == null ? void 0 : f.querySelectorAll("[data-headlessui-portal]")) != null ? te : []).find(ne => ne.contains(p.current) && ne instanceof HTMLElement)) != null ? re : null
      }, [p]);
    Hl(Z, P);
    let z = V(() => {
      var te, re;
      return [...Array.from((te = f == null ? void 0 : f.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? te : []).filter(ne => !(ne === document.body || ne === document.head || !(ne instanceof HTMLElement) || ne.contains(p.current) || M.panelRef.current && ne.contains(M.panelRef.current))), (re = M.panelRef.current) != null ? re : y.current]
    }),
      J = (() => !(!g || k))();
    Rn(() => z(), L, J);
    let W = (() => !(k || I !== 0))();
    Zn(f == null ? void 0 : f.defaultView, "keydown", te => {
      W && (te.defaultPrevented || te.key === K.Escape && (te.preventDefault(), te.stopPropagation(), L()))
    });
    let Ce = (() => !(O || I !== 0 || A))();
    zm(f, Ce, z), x.useEffect(() => {
      if (I !== 0 || !y.current) return;
      let te = new ResizeObserver(re => {
        for (let ne of re) {
          let Ee = ne.target.getBoundingClientRect();
          Ee.x === 0 && Ee.y === 0 && Ee.width === 0 && Ee.height === 0 && L()
        }
      });
      return te.observe(y.current), () => te.disconnect()
    }, [I, y, L]);
    let [oe, Te] = pm(), Y = x.useMemo(() => [{
      dialogState: I,
      close: L,
      setTitleId: C
    }, M], [I, M, L, C]), ee = x.useMemo(() => ({
      open: I === 0
    }), [I]), G = {
      ref: m,
      id: a,
      role: "dialog",
      "aria-modal": I === 0 ? !0 : void 0,
      "aria-labelledby": M.titleId,
      "aria-describedby": oe
    };
    return H.createElement(ym, {
      type: "Dialog",
      enabled: I === 0,
      element: y,
      onUpdate: V((te, re, ne) => {
        re === "Dialog" && le(te, {
          [ei.Add]() {
            h.current.add(ne), b(Ee => Ee + 1)
          },
          [ei.Remove]() {
            h.current.add(ne), b(Ee => Ee - 1)
          }
        })
      })
    }, H.createElement(Xa, {
      force: !0
    }, H.createElement(Qa, null, H.createElement(An.Provider, {
      value: Y
    }, H.createElement(Qa.Group, {
      target: y
    }, H.createElement(Xa, {
      force: !1
    }, H.createElement(Te, {
      slot: ee,
      name: "Dialog.Description"
    }, H.createElement(Er, {
      initialFocus: o,
      containers: h,
      features: g ? le(_, {
        parent: Er.features.RestoreFocus,
        leaf: Er.features.All & ~Er.features.FocusLock
      }) : Er.features.None
    }, de({
      ourProps: G,
      theirProps: u,
      slot: ee,
      defaultTag: Bm,
      features: Um,
      visible: I === 0,
      name: "Dialog"
    })))))))), H.createElement(wt, {
      features: xt.Hidden,
      ref: p
    }))
  }
  let qm = "div";

  function Gm(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-dialog-overlay-${n}`,
        ...i
      } = e,
      [{
        dialogState: s,
        close: o
      }] = Wr("Dialog.Overlay"),
      c = ue(t),
      u = V(b => {
        if (b.target === b.currentTarget) {
          if (Br(b.currentTarget)) return b.preventDefault();
          b.preventDefault(), b.stopPropagation(), o()
        }
      }),
      d = x.useMemo(() => ({
        open: s === 0
      }), [s]);
    return de({
      ourProps: {
        ref: c,
        id: a,
        "aria-hidden": !0,
        onClick: u
      },
      theirProps: i,
      slot: d,
      defaultTag: qm,
      name: "Dialog.Overlay"
    })
  }
  let Ym = "div";

  function Jm(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-dialog-backdrop-${n}`,
        ...i
      } = e,
      [{
        dialogState: s
      }, o] = Wr("Dialog.Backdrop"),
      c = ue(t);
    x.useEffect(() => {
      if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [o.panelRef]);
    let u = x.useMemo(() => ({
      open: s === 0
    }), [s]);
    return H.createElement(Xa, {
      force: !0
    }, H.createElement(Qa, null, de({
      ourProps: {
        ref: c,
        id: a,
        "aria-hidden": !0
      },
      theirProps: i,
      slot: u,
      defaultTag: Ym,
      name: "Dialog.Backdrop"
    })))
  }
  let Km = "div";

  function Xm(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-dialog-panel-${n}`,
        ...i
      } = e,
      [{
        dialogState: s
      }, o] = Wr("Dialog.Panel"),
      c = ue(t, o.panelRef),
      u = x.useMemo(() => ({
        open: s === 0
      }), [s]),
      d = V(b => {
        b.stopPropagation()
      });
    return de({
      ourProps: {
        ref: c,
        id: a,
        onClick: d
      },
      theirProps: i,
      slot: u,
      defaultTag: Km,
      name: "Dialog.Panel"
    })
  }
  let Qm = "h2";

  function ep(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-dialog-title-${n}`,
        ...i
      } = e,
      [{
        dialogState: s,
        setTitleId: o
      }] = Wr("Dialog.Title"),
      c = ue(t);
    x.useEffect(() => (o(a), () => o(null)), [a, o]);
    let u = x.useMemo(() => ({
      open: s === 0
    }), [s]);
    return de({
      ourProps: {
        ref: c,
        id: a
      },
      theirProps: i,
      slot: u,
      defaultTag: Qm,
      name: "Dialog.Title"
    })
  }
  let tp = ce(Wm),
    rp = ce(Jm),
    np = ce(Xm),
    ap = ce(Gm),
    ip = ce(ep),
    Ir = Object.assign(tp, {
      Backdrop: rp,
      Panel: np,
      Overlay: ap,
      Title: ip,
      Description: vm
    });
  var lp = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(lp || {}),
    sp = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(sp || {}),
    op = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(op || {});

  function Ia(e, t = n => n) {
    let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
      a = _t(t(e.items.slice()), s => s.dataRef.current.domRef.current),
      i = n ? a.indexOf(n) : null;
    return i === -1 && (i = null), {
      items: a,
      activeItemIndex: i
    }
  }
  let cp = {
    [1](e) {
      return e.menuState === 1 ? e : {
        ...e,
        activeItemIndex: null,
        menuState: 1
      }
    },
    [0](e) {
      return e.menuState === 0 ? e : {
        ...e,
        menuState: 0
      }
    },
    [2]: (e, t) => {
      var n;
      let a = Ia(e),
        i = Hs(t, {
          resolveItems: () => a.items,
          resolveActiveIndex: () => a.activeItemIndex,
          resolveId: s => s.id,
          resolveDisabled: s => s.dataRef.current.disabled
        });
      return {
        ...e,
        ...a,
        searchQuery: "",
        activeItemIndex: i,
        activationTrigger: (n = t.trigger) != null ? n : 1
      }
    },
    [3]: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1,
        a = e.searchQuery + t.value.toLowerCase(),
        i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(o => {
          var c;
          return ((c = o.dataRef.current.textValue) == null ? void 0 : c.startsWith(a)) && !o.dataRef.current.disabled
        }),
        s = i ? e.items.indexOf(i) : -1;
      return s === -1 || s === e.activeItemIndex ? {
        ...e,
        searchQuery: a
      } : {
        ...e,
        searchQuery: a,
        activeItemIndex: s,
        activationTrigger: 1
      }
    },
    [4](e) {
      return e.searchQuery === "" ? e : {
        ...e,
        searchQuery: "",
        searchActiveItemIndex: null
      }
    },
    [5]: (e, t) => {
      let n = Ia(e, a => [...a, {
        id: t.id,
        dataRef: t.dataRef
      }]);
      return {
        ...e,
        ...n
      }
    },
    [6]: (e, t) => {
      let n = Ia(e, a => {
        let i = a.findIndex(s => s.id === t.id);
        return i !== -1 && a.splice(i, 1), a
      });
      return {
        ...e,
        ...n,
        activationTrigger: 1
      }
    }
  },
    Ci = x.createContext(null);
  Ci.displayName = "MenuContext";

  function Vn(e) {
    let t = x.useContext(Ci);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Vn), n
    }
    return t
  }

  function dp(e, t) {
    return le(t.type, cp, e, t)
  }
  let up = x.Fragment;

  function mp(e, t) {
    let n = x.useReducer(dp, {
      menuState: 1,
      buttonRef: x.createRef(),
      itemsRef: x.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1
    }),
      [{
        menuState: a,
        itemsRef: i,
        buttonRef: s
      }, o] = n,
      c = ue(t);
    Rn([s, i], (h, y) => {
      var m;
      o({
        type: 1
      }), Fn(y, On.Loose) || (h.preventDefault(), (m = s.current) == null || m.focus())
    }, a === 0);
    let u = V(() => {
      o({
        type: 1
      })
    }),
      d = x.useMemo(() => ({
        open: a === 0,
        close: u
      }), [a, u]),
      b = e,
      w = {
        ref: c
      };
    return H.createElement(Ci.Provider, {
      value: n
    }, H.createElement(jn, {
      value: le(a, {
        [0]: ve.Open,
        [1]: ve.Closed
      })
    }, de({
      ourProps: w,
      theirProps: b,
      slot: d,
      defaultTag: up,
      name: "Menu"
    })))
  }
  let pp = "button";

  function hp(e, t) {
    var n;
    let a = Se(),
      {
        id: i = `headlessui-menu-button-${a}`,
        ...s
      } = e,
      [o, c] = Vn("Menu.Button"),
      u = ue(o.buttonRef, t),
      d = Ot(),
      b = V(p => {
        switch (p.key) {
          case K.Space:
          case K.Enter:
          case K.ArrowDown:
            p.preventDefault(), p.stopPropagation(), c({
              type: 0
            }), d.nextFrame(() => c({
              type: 2,
              focus: ge.First
            }));
            break;
          case K.ArrowUp:
            p.preventDefault(), p.stopPropagation(), c({
              type: 0
            }), d.nextFrame(() => c({
              type: 2,
              focus: ge.Last
            }));
            break
        }
      }),
      w = V(p => {
        switch (p.key) {
          case K.Space:
            p.preventDefault();
            break
        }
      }),
      h = V(p => {
        if (Br(p.currentTarget)) return p.preventDefault();
        e.disabled || (o.menuState === 0 ? (c({
          type: 1
        }), d.nextFrame(() => {
          var f;
          return (f = o.buttonRef.current) == null ? void 0 : f.focus({
            preventScroll: !0
          })
        })) : (p.preventDefault(), c({
          type: 0
        })))
      }),
      y = x.useMemo(() => ({
        open: o.menuState === 0
      }), [o]),
      m = {
        ref: u,
        id: i,
        type: $n(e, o.buttonRef),
        "aria-haspopup": "menu",
        "aria-controls": (n = o.itemsRef.current) == null ? void 0 : n.id,
        "aria-expanded": e.disabled ? void 0 : o.menuState === 0,
        onKeyDown: b,
        onKeyUp: w,
        onClick: h
      };
    return de({
      ourProps: m,
      theirProps: s,
      slot: y,
      defaultTag: pp,
      name: "Menu.Button"
    })
  }
  let fp = "div",
    gp = ze.RenderStrategy | ze.Static;

  function vp(e, t) {
    var n, a;
    let i = Se(),
      {
        id: s = `headlessui-menu-items-${i}`,
        ...o
      } = e,
      [c, u] = Vn("Menu.Items"),
      d = ue(c.itemsRef, t),
      b = Ft(c.itemsRef),
      w = Ot(),
      h = Gt(),
      y = (() => h !== null ? (h & ve.Open) === ve.Open : c.menuState === 0)();
    x.useEffect(() => {
      let S = c.itemsRef.current;
      S && c.menuState === 0 && S !== (b == null ? void 0 : b.activeElement) && S.focus({
        preventScroll: !0
      })
    }, [c.menuState, c.itemsRef, b]), js({
      container: c.itemsRef.current,
      enabled: c.menuState === 0,
      accept(S) {
        return S.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : S.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
      },
      walk(S) {
        S.setAttribute("role", "none")
      }
    });
    let m = V(S => {
      var I, M;
      switch (w.dispose(), S.key) {
        case K.Space:
          if (c.searchQuery !== "") return S.preventDefault(), S.stopPropagation(), u({
            type: 3,
            value: S.key
          });
        case K.Enter:
          if (S.preventDefault(), S.stopPropagation(), u({
            type: 1
          }), c.activeItemIndex !== null) {
            let {
              dataRef: T
            } = c.items[c.activeItemIndex];
            (M = (I = T.current) == null ? void 0 : I.domRef.current) == null || M.click()
          }
          Fs(c.buttonRef.current);
          break;
        case K.ArrowDown:
          return S.preventDefault(), S.stopPropagation(), u({
            type: 2,
            focus: ge.Next
          });
        case K.ArrowUp:
          return S.preventDefault(), S.stopPropagation(), u({
            type: 2,
            focus: ge.Previous
          });
        case K.Home:
        case K.PageUp:
          return S.preventDefault(), S.stopPropagation(), u({
            type: 2,
            focus: ge.First
          });
        case K.End:
        case K.PageDown:
          return S.preventDefault(), S.stopPropagation(), u({
            type: 2,
            focus: ge.Last
          });
        case K.Escape:
          S.preventDefault(), S.stopPropagation(), u({
            type: 1
          }), nt().nextFrame(() => {
            var T;
            return (T = c.buttonRef.current) == null ? void 0 : T.focus({
              preventScroll: !0
            })
          });
          break;
        case K.Tab:
          S.preventDefault(), S.stopPropagation(), u({
            type: 1
          }), nt().nextFrame(() => {
            b0(c.buttonRef.current, S.shiftKey ? fe.Previous : fe.Next)
          });
          break;
        default:
          S.key.length === 1 && (u({
            type: 3,
            value: S.key
          }), w.setTimeout(() => u({
            type: 4
          }), 350));
          break
      }
    }),
      p = V(S => {
        switch (S.key) {
          case K.Space:
            S.preventDefault();
            break
        }
      }),
      f = x.useMemo(() => ({
        open: c.menuState === 0
      }), [c]),
      N = {
        "aria-activedescendant": c.activeItemIndex === null || (n = c.items[c.activeItemIndex]) == null ? void 0 : n.id,
        "aria-labelledby": (a = c.buttonRef.current) == null ? void 0 : a.id,
        id: s,
        onKeyDown: m,
        onKeyUp: p,
        role: "menu",
        tabIndex: 0,
        ref: d
      };
    return de({
      ourProps: N,
      theirProps: o,
      slot: f,
      defaultTag: fp,
      features: gp,
      visible: y,
      name: "Menu.Items"
    })
  }
  let bp = x.Fragment;

  function yp(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-menu-item-${n}`,
        disabled: i = !1,
        ...s
      } = e,
      [o, c] = Vn("Menu.Item"),
      u = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === a : !1,
      d = x.useRef(null),
      b = ue(t, d);
    me(() => {
      if (o.menuState !== 0 || !u || o.activationTrigger === 0) return;
      let M = nt();
      return M.requestAnimationFrame(() => {
        var T, L;
        (L = (T = d.current) == null ? void 0 : T.scrollIntoView) == null || L.call(T, {
          block: "nearest"
        })
      }), M.dispose
    }, [d, u, o.menuState, o.activationTrigger, o.activeItemIndex]);
    let w = x.useRef({
      disabled: i,
      domRef: d
    });
    me(() => {
      w.current.disabled = i
    }, [w, i]), me(() => {
      var M, T;
      w.current.textValue = (T = (M = d.current) == null ? void 0 : M.textContent) == null ? void 0 : T.toLowerCase()
    }, [w, d]), me(() => (c({
      type: 5,
      id: a,
      dataRef: w
    }), () => c({
      type: 6,
      id: a
    })), [w, a]);
    let h = V(() => {
      c({
        type: 1
      })
    }),
      y = V(M => {
        if (i) return M.preventDefault();
        c({
          type: 1
        }), Fs(o.buttonRef.current)
      }),
      m = V(() => {
        if (i) return c({
          type: 2,
          focus: ge.Nothing
        });
        c({
          type: 2,
          focus: ge.Specific,
          id: a
        })
      }),
      p = Us(),
      f = V(M => p.update(M)),
      N = V(M => {
        p.wasMoved(M) && (i || u || c({
          type: 2,
          focus: ge.Specific,
          id: a,
          trigger: 0
        }))
      }),
      S = V(M => {
        p.wasMoved(M) && (i || u && c({
          type: 2,
          focus: ge.Nothing
        }))
      }),
      I = x.useMemo(() => ({
        active: u,
        disabled: i,
        close: h
      }), [u, i, h]);
    return de({
      ourProps: {
        id: a,
        ref: b,
        role: "menuitem",
        tabIndex: i === !0 ? void 0 : -1,
        "aria-disabled": i === !0 ? !0 : void 0,
        disabled: void 0,
        onClick: y,
        onFocus: m,
        onPointerEnter: f,
        onMouseEnter: f,
        onPointerMove: N,
        onMouseMove: N,
        onPointerLeave: S,
        onMouseLeave: S
      },
      theirProps: s,
      slot: I,
      defaultTag: bp,
      name: "Menu.Item"
    })
  }
  let xp = ce(mp),
    wp = ce(hp),
    Np = ce(vp),
    kp = ce(yp),
    Pe = Object.assign(xp, {
      Button: wp,
      Items: Np,
      Item: kp
    });
  var Sp = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Sp || {}),
    Cp = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(Cp || {});
  let Ep = {
    [0]: e => ({
      ...e,
      popoverState: le(e.popoverState, {
        [0]: 1,
        [1]: 0
      })
    }),
    [1](e) {
      return e.popoverState === 1 ? e : {
        ...e,
        popoverState: 1
      }
    },
    [2](e, t) {
      return e.button === t.button ? e : {
        ...e,
        button: t.button
      }
    },
    [3](e, t) {
      return e.buttonId === t.buttonId ? e : {
        ...e,
        buttonId: t.buttonId
      }
    },
    [4](e, t) {
      return e.panel === t.panel ? e : {
        ...e,
        panel: t.panel
      }
    },
    [5](e, t) {
      return e.panelId === t.panelId ? e : {
        ...e,
        panelId: t.panelId
      }
    }
  },
    Ei = x.createContext(null);
  Ei.displayName = "PopoverContext";

  function zn(e) {
    let t = x.useContext(Ei);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, zn), n
    }
    return t
  }
  let Mi = x.createContext(null);
  Mi.displayName = "PopoverAPIContext";

  function Li(e) {
    let t = x.useContext(Mi);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Li), n
    }
    return t
  }
  let Ai = x.createContext(null);
  Ai.displayName = "PopoverGroupContext";

  function Qs() {
    return x.useContext(Ai)
  }
  let Ti = x.createContext(null);
  Ti.displayName = "PopoverPanelContext";

  function Mp() {
    return x.useContext(Ti)
  }

  function Lp(e, t) {
    return le(t.type, Ep, e, t)
  }
  let Ap = "div";

  function Tp(e, t) {
    var n;
    let a = x.useRef(null),
      i = ue(t, $s(O => {
        a.current = O
      })),
      s = x.useRef([]),
      o = x.useReducer(Lp, {
        popoverState: 1,
        buttons: s,
        button: null,
        buttonId: null,
        panel: null,
        panelId: null,
        beforePanelSentinel: x.createRef(),
        afterPanelSentinel: x.createRef()
      }),
      [{
        popoverState: c,
        button: u,
        buttonId: d,
        panel: b,
        panelId: w,
        beforePanelSentinel: h,
        afterPanelSentinel: y
      }, m] = o,
      p = Ft((n = a.current) != null ? n : u),
      f = x.useMemo(() => {
        if (!u || !b) return !1;
        for (let J of document.querySelectorAll("body > *"))
          if (Number(J == null ? void 0 : J.contains(u)) ^ Number(J == null ? void 0 : J.contains(b))) return !0;
        let O = Dr(),
          R = O.indexOf(u),
          $ = (R + O.length - 1) % O.length,
          P = (R + 1) % O.length,
          Z = O[$],
          z = O[P];
        return !b.contains(Z) && !b.contains(z)
      }, [u, b]),
      N = je(d),
      S = je(w),
      I = x.useMemo(() => ({
        buttonId: N,
        panelId: S,
        close: () => m({
          type: 1
        })
      }), [N, S, m]),
      M = Qs(),
      T = M == null ? void 0 : M.registerPopover,
      L = V(() => {
        var O;
        return (O = M == null ? void 0 : M.isFocusWithinPopoverGroup()) != null ? O : (p == null ? void 0 : p.activeElement) && ((u == null ? void 0 : u.contains(p.activeElement)) || (b == null ? void 0 : b.contains(p.activeElement)))
      });
    x.useEffect(() => T == null ? void 0 : T(I), [T, I]), Zn(p == null ? void 0 : p.defaultView, "focus", O => {
      var R, $, P, Z;
      c === 0 && (L() || u && b && O.target !== window && (($ = (R = h.current) == null ? void 0 : R.contains) != null && $.call(R, O.target) || (Z = (P = y.current) == null ? void 0 : P.contains) != null && Z.call(P, O.target) || m({
        type: 1
      })))
    }, !0), Rn([u, b], (O, R) => {
      m({
        type: 1
      }), Fn(R, On.Loose) || (O.preventDefault(), u == null || u.focus())
    }, c === 0);
    let C = V(O => {
      m({
        type: 1
      });
      let R = (() => O ? O instanceof HTMLElement ? O : "current" in O && O.current instanceof HTMLElement ? O.current : u : u)();
      R == null || R.focus()
    }),
      g = x.useMemo(() => ({
        close: C,
        isPortalled: f
      }), [C, f]),
      k = x.useMemo(() => ({
        open: c === 0,
        close: C
      }), [c, C]),
      A = e,
      _ = {
        ref: i
      };
    return H.createElement(Ei.Provider, {
      value: o
    }, H.createElement(Mi.Provider, {
      value: g
    }, H.createElement(jn, {
      value: le(c, {
        [0]: ve.Open,
        [1]: ve.Closed
      })
    }, de({
      ourProps: _,
      theirProps: A,
      slot: k,
      defaultTag: Ap,
      name: "Popover"
    }))))
  }
  let _p = "button";

  function Ip(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-popover-button-${n}`,
        ...i
      } = e,
      [s, o] = zn("Popover.Button"),
      {
        isPortalled: c
      } = Li("Popover.Button"),
      u = x.useRef(null),
      d = `headlessui-focus-sentinel-${Se()}`,
      b = Qs(),
      w = b == null ? void 0 : b.closeOthers,
      h = Mp(),
      y = h === null ? !1 : h === s.panelId;
    x.useEffect(() => {
      if (!y) return o({
        type: 3,
        buttonId: a
      }), () => {
        o({
          type: 3,
          buttonId: null
        })
      }
    }, [y, a, o]);
    let [m] = x.useState(() => Symbol()), p = ue(u, t, y ? null : O => {
      if (O) s.buttons.current.push(m);
      else {
        let R = s.buttons.current.indexOf(m);
        R !== -1 && s.buttons.current.splice(R, 1)
      }
      s.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), O && o({
        type: 2,
        button: O
      })
    }), f = ue(u, t), N = Ft(u), S = V(O => {
      var R, $, P;
      if (y) {
        if (s.popoverState === 1) return;
        switch (O.key) {
          case K.Space:
          case K.Enter:
            O.preventDefault(), ($ = (R = O.target).click) == null || $.call(R), o({
              type: 1
            }), (P = s.button) == null || P.focus();
            break
        }
      } else switch (O.key) {
        case K.Space:
        case K.Enter:
          O.preventDefault(), O.stopPropagation(), s.popoverState === 1 && (w == null || w(s.buttonId)), o({
            type: 0
          });
          break;
        case K.Escape:
          if (s.popoverState !== 0) return w == null ? void 0 : w(s.buttonId);
          if (!u.current || N != null && N.activeElement && !u.current.contains(N.activeElement)) return;
          O.preventDefault(), O.stopPropagation(), o({
            type: 1
          });
          break
      }
    }), I = V(O => {
      y || O.key === K.Space && O.preventDefault()
    }), M = V(O => {
      var R, $;
      Br(O.currentTarget) || e.disabled || (y ? (o({
        type: 1
      }), (R = s.button) == null || R.focus()) : (O.preventDefault(), O.stopPropagation(), s.popoverState === 1 && (w == null || w(s.buttonId)), o({
        type: 0
      }), ($ = s.button) == null || $.focus()))
    }), T = V(O => {
      O.preventDefault(), O.stopPropagation()
    }), L = s.popoverState === 0, C = x.useMemo(() => ({
      open: L
    }), [L]), g = $n(e, u), k = y ? {
      ref: f,
      type: g,
      onKeyDown: S,
      onClick: M
    } : {
      ref: p,
      id: s.buttonId,
      type: g,
      "aria-expanded": e.disabled ? void 0 : s.popoverState === 0,
      "aria-controls": s.panel ? s.panelId : void 0,
      onKeyDown: S,
      onKeyUp: I,
      onClick: M,
      onMouseDown: T
    }, A = ki(), _ = V(() => {
      let O = s.panel;
      if (!O) return;

      function R() {
        le(A.current, {
          [Ue.Forwards]: () => Ae(O, fe.First),
          [Ue.Backwards]: () => Ae(O, fe.Last)
        }) === vt.Error && Ae(Dr().filter($ => $.dataset.headlessuiFocusGuard !== "true"), le(A.current, {
          [Ue.Forwards]: fe.Next,
          [Ue.Backwards]: fe.Previous
        }), {
          relativeTo: s.button
        })
      }
      R()
    });
    return H.createElement(H.Fragment, null, de({
      ourProps: k,
      theirProps: i,
      slot: C,
      defaultTag: _p,
      name: "Popover.Button"
    }), L && !y && c && H.createElement(wt, {
      id: d,
      features: xt.Focusable,
      "data-headlessui-focus-guard": !0,
      as: "button",
      type: "button",
      onFocus: _
    }))
  }
  let Pp = "div",
    Op = ze.RenderStrategy | ze.Static;

  function Fp(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-popover-overlay-${n}`,
        ...i
      } = e,
      [{
        popoverState: s
      }, o] = zn("Popover.Overlay"),
      c = ue(t),
      u = Gt(),
      d = (() => u !== null ? (u & ve.Open) === ve.Open : s === 0)(),
      b = V(h => {
        if (Br(h.currentTarget)) return h.preventDefault();
        o({
          type: 1
        })
      }),
      w = x.useMemo(() => ({
        open: s === 0
      }), [s]);
    return de({
      ourProps: {
        ref: c,
        id: a,
        "aria-hidden": !0,
        onClick: b
      },
      theirProps: i,
      slot: w,
      defaultTag: Pp,
      features: Op,
      visible: d,
      name: "Popover.Overlay"
    })
  }
  let Rp = "div",
    $p = ze.RenderStrategy | ze.Static;

  function jp(e, t) {
    let n = Se(),
      {
        id: a = `headlessui-popover-panel-${n}`,
        focus: i = !1,
        ...s
      } = e,
      [o, c] = zn("Popover.Panel"),
      {
        close: u,
        isPortalled: d
      } = Li("Popover.Panel"),
      b = `headlessui-focus-sentinel-before-${Se()}`,
      w = `headlessui-focus-sentinel-after-${Se()}`,
      h = x.useRef(null),
      y = ue(h, t, C => {
        c({
          type: 4,
          panel: C
        })
      }),
      m = Ft(h);
    me(() => (c({
      type: 5,
      panelId: a
    }), () => {
      c({
        type: 5,
        panelId: null
      })
    }), [a, c]);
    let p = Gt(),
      f = (() => p !== null ? (p & ve.Open) === ve.Open : o.popoverState === 0)(),
      N = V(C => {
        var g;
        switch (C.key) {
          case K.Escape:
            if (o.popoverState !== 0 || !h.current || m != null && m.activeElement && !h.current.contains(m.activeElement)) return;
            C.preventDefault(), C.stopPropagation(), c({
              type: 1
            }), (g = o.button) == null || g.focus();
            break
        }
      });
    x.useEffect(() => {
      var C;
      e.static || o.popoverState === 1 && ((C = e.unmount) == null || C) && c({
        type: 4,
        panel: null
      })
    }, [o.popoverState, e.unmount, e.static, c]), x.useEffect(() => {
      if (!i || o.popoverState !== 0 || !h.current) return;
      let C = m == null ? void 0 : m.activeElement;
      h.current.contains(C) || Ae(h.current, fe.First)
    }, [i, h, o.popoverState]);
    let S = x.useMemo(() => ({
      open: o.popoverState === 0,
      close: u
    }), [o, u]),
      I = {
        ref: y,
        id: a,
        onKeyDown: N,
        onBlur: i && o.popoverState === 0 ? C => {
          var g, k, A, _, O;
          let R = C.relatedTarget;
          R && h.current && ((g = h.current) != null && g.contains(R) || (c({
            type: 1
          }), ((A = (k = o.beforePanelSentinel.current) == null ? void 0 : k.contains) != null && A.call(k, R) || (O = (_ = o.afterPanelSentinel.current) == null ? void 0 : _.contains) != null && O.call(_, R)) && R.focus({
            preventScroll: !0
          })))
        } : void 0,
        tabIndex: -1
      },
      M = ki(),
      T = V(() => {
        let C = h.current;
        if (!C) return;

        function g() {
          le(M.current, {
            [Ue.Forwards]: () => {
              var k;
              Ae(C, fe.First) === vt.Error && ((k = o.afterPanelSentinel.current) == null || k.focus())
            },
            [Ue.Backwards]: () => {
              var k;
              (k = o.button) == null || k.focus({
                preventScroll: !0
              })
            }
          })
        }
        g()
      }),
      L = V(() => {
        let C = h.current;
        if (!C) return;

        function g() {
          le(M.current, {
            [Ue.Forwards]: () => {
              var k;
              if (!o.button) return;
              let A = Dr(),
                _ = A.indexOf(o.button),
                O = A.slice(0, _ + 1),
                R = [...A.slice(_ + 1), ...O];
              for (let $ of R.slice())
                if ($.dataset.headlessuiFocusGuard === "true" || (k = o.panel) != null && k.contains($)) {
                  let P = R.indexOf($);
                  P !== -1 && R.splice(P, 1)
                } Ae(R, fe.First, {
                  sorted: !1
                })
            },
            [Ue.Backwards]: () => {
              var k;
              Ae(C, fe.Previous) === vt.Error && ((k = o.button) == null || k.focus())
            }
          })
        }
        g()
      });
    return H.createElement(Ti.Provider, {
      value: a
    }, f && d && H.createElement(wt, {
      id: b,
      ref: o.beforePanelSentinel,
      features: xt.Focusable,
      "data-headlessui-focus-guard": !0,
      as: "button",
      type: "button",
      onFocus: T
    }), de({
      ourProps: I,
      theirProps: s,
      slot: S,
      defaultTag: Rp,
      features: $p,
      visible: f,
      name: "Popover.Panel"
    }), f && d && H.createElement(wt, {
      id: w,
      ref: o.afterPanelSentinel,
      features: xt.Focusable,
      "data-headlessui-focus-guard": !0,
      as: "button",
      type: "button",
      onFocus: L
    }))
  }
  let Hp = "div";

  function Zp(e, t) {
    let n = x.useRef(null),
      a = ue(n, t),
      [i, s] = x.useState([]),
      o = V(m => {
        s(p => {
          let f = p.indexOf(m);
          if (f !== -1) {
            let N = p.slice();
            return N.splice(f, 1), N
          }
          return p
        })
      }),
      c = V(m => (s(p => [...p, m]), () => o(m))),
      u = V(() => {
        var m;
        let p = fr(n);
        if (!p) return !1;
        let f = p.activeElement;
        return (m = n.current) != null && m.contains(f) ? !0 : i.some(N => {
          var S, I;
          return ((S = p.getElementById(N.buttonId.current)) == null ? void 0 : S.contains(f)) || ((I = p.getElementById(N.panelId.current)) == null ? void 0 : I.contains(f))
        })
      }),
      d = V(m => {
        for (let p of i) p.buttonId.current !== m && p.close()
      }),
      b = x.useMemo(() => ({
        registerPopover: c,
        unregisterPopover: o,
        isFocusWithinPopoverGroup: u,
        closeOthers: d
      }), [c, o, u, d]),
      w = x.useMemo(() => ({}), []),
      h = e,
      y = {
        ref: a
      };
    return H.createElement(Ai.Provider, {
      value: b
    }, de({
      ourProps: y,
      theirProps: h,
      slot: w,
      defaultTag: Hp,
      name: "Popover.Group"
    }))
  }
  let Vp = ce(Tp),
    zp = ce(Ip),
    Dp = ce(Fp),
    Bp = ce(jp),
    Up = ce(Zp),
    fn = Object.assign(Vp, {
      Button: zp,
      Overlay: Dp,
      Panel: Bp,
      Group: Up
    });

  function Wp(e = 0) {
    let [t, n] = x.useState(e), a = x.useCallback(c => n(u => u | c), [t]), i = x.useCallback(c => Boolean(t & c), [t]), s = x.useCallback(c => n(u => u & ~c), [n]), o = x.useCallback(c => n(u => u ^ c), [n]);
    return {
      flags: t,
      addFlag: a,
      hasFlag: i,
      removeFlag: s,
      toggleFlag: o
    }
  }

  function qp({
    onFocus: e
  }) {
    let [t, n] = x.useState(!0);
    return t ? H.createElement(wt, {
      as: "button",
      type: "button",
      features: xt.Focusable,
      onFocus: a => {
        a.preventDefault();
        let i, s = 50;

        function o() {
          if (s-- <= 0) {
            i && cancelAnimationFrame(i);
            return
          }
          if (e()) {
            n(!1), cancelAnimationFrame(i);
            return
          }
          i = requestAnimationFrame(o)
        }
        i = requestAnimationFrame(o)
      }
    }) : null
  }
  const eo = x.createContext(null);

  function Gp() {
    return {
      groups: new Map,
      get(e, t) {
        var n;
        let a = this.groups.get(e);
        a || (a = new Map, this.groups.set(e, a));
        let i = (n = a.get(t)) != null ? n : 0;
        a.set(t, i + 1);
        let s = Array.from(a.keys()).indexOf(t);

        function o() {
          let c = a.get(t);
          c > 1 ? a.set(t, c - 1) : a.delete(t)
        }
        return [s, o]
      }
    }
  }

  function Yp({
    children: e
  }) {
    let t = x.useRef(Gp());
    return x.createElement(eo.Provider, {
      value: t
    }, e)
  }

  function to(e) {
    let t = x.useContext(eo);
    if (!t) throw new Error("You must wrap your component in a <StableCollection>");
    let n = Jp(),
      [a, i] = t.current.get(e, n);
    return x.useEffect(() => i, []), a
  }

  function Jp() {
    var e, t, n;
    let a = (n = (t = (e = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : e.ReactCurrentOwner) == null ? void 0 : t.current) != null ? n : null;
    if (!a) return Symbol();
    let i = [],
      s = a;
    for (; s;) i.push(s.index), s = s.return;
    return "$." + i.join(".")
  }
  var Kp = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Kp || {}),
    Xp = (e => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(Xp || {}),
    Qp = (e => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(Qp || {});
  let e5 = {
    [0](e, t) {
      var n;
      let a = _t(e.tabs, b => b.current),
        i = _t(e.panels, b => b.current),
        s = a.filter(b => {
          var w;
          return !((w = b.current) != null && w.hasAttribute("disabled"))
        }),
        o = {
          ...e,
          tabs: a,
          panels: i
        };
      if (t.index < 0 || t.index > a.length - 1) {
        let b = le(Math.sign(t.index - e.selectedIndex), {
          [-1]: () => 1,
          [0]: () => le(Math.sign(t.index), {
            [-1]: () => 0,
            [0]: () => 0,
            [1]: () => 1
          }),
          [1]: () => 0
        });
        return s.length === 0 ? o : {
          ...o,
          selectedIndex: le(b, {
            [0]: () => a.indexOf(s[0]),
            [1]: () => a.indexOf(s[s.length - 1])
          })
        }
      }
      let c = a.slice(0, t.index),
        u = [...a.slice(t.index), ...c].find(b => s.includes(b));
      if (!u) return o;
      let d = (n = a.indexOf(u)) != null ? n : e.selectedIndex;
      return d === -1 && (d = e.selectedIndex), {
        ...o,
        selectedIndex: d
      }
    },
    [1](e, t) {
      var n;
      if (e.tabs.includes(t.tab)) return e;
      let a = e.tabs[e.selectedIndex],
        i = _t([...e.tabs, t.tab], o => o.current),
        s = (n = i.indexOf(a)) != null ? n : e.selectedIndex;
      return s === -1 && (s = e.selectedIndex), {
        ...e,
        tabs: i,
        selectedIndex: s
      }
    },
    [2](e, t) {
      return {
        ...e,
        tabs: e.tabs.filter(n => n !== t.tab)
      }
    },
    [3](e, t) {
      return e.panels.includes(t.panel) ? e : {
        ...e,
        panels: _t([...e.panels, t.panel], n => n.current)
      }
    },
    [4](e, t) {
      return {
        ...e,
        panels: e.panels.filter(n => n !== t.panel)
      }
    }
  },
    _i = x.createContext(null);
  _i.displayName = "TabsDataContext";

  function or(e) {
    let t = x.useContext(_i);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, or), n
    }
    return t
  }
  let Ii = x.createContext(null);
  Ii.displayName = "TabsActionsContext";

  function Pi(e) {
    let t = x.useContext(Ii);
    if (t === null) {
      let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(n, Pi), n
    }
    return t
  }

  function t5(e, t) {
    return le(t.type, e5, e, t)
  }
  let r5 = x.Fragment;

  function n5(e, t) {
    let {
      defaultIndex: n = 0,
      vertical: a = !1,
      manual: i = !1,
      onChange: s,
      selectedIndex: o = null,
      ...c
    } = e;
    const u = a ? "vertical" : "horizontal",
      d = i ? "manual" : "auto";
    let b = o !== null,
      w = ue(t),
      [h, y] = x.useReducer(t5, {
        selectedIndex: o ?? n,
        tabs: [],
        panels: []
      }),
      m = x.useMemo(() => ({
        selectedIndex: h.selectedIndex
      }), [h.selectedIndex]),
      p = je(s || (() => { })),
      f = je(h.tabs),
      N = x.useMemo(() => ({
        orientation: u,
        activation: d,
        ...h
      }), [u, d, h]),
      S = V(g => (y({
        type: 1,
        tab: g
      }), () => y({
        type: 2,
        tab: g
      }))),
      I = V(g => (y({
        type: 3,
        panel: g
      }), () => y({
        type: 4,
        panel: g
      }))),
      M = V(g => {
        T.current !== g && p.current(g), b || y({
          type: 0,
          index: g
        })
      }),
      T = je(b ? e.selectedIndex : h.selectedIndex),
      L = x.useMemo(() => ({
        registerTab: S,
        registerPanel: I,
        change: M
      }), []);
    me(() => {
      y({
        type: 0,
        index: o ?? n
      })
    }, [o]), me(() => {
      if (T.current === void 0 || h.tabs.length <= 0) return;
      let g = _t(h.tabs, k => k.current);
      g.some((k, A) => h.tabs[A] !== k) && M(g.indexOf(h.tabs[T.current]))
    });
    let C = {
      ref: w
    };
    return H.createElement(Yp, null, H.createElement(Ii.Provider, {
      value: L
    }, H.createElement(_i.Provider, {
      value: N
    }, N.tabs.length <= 0 && H.createElement(qp, {
      onFocus: () => {
        var g, k;
        for (let A of f.current)
          if (((g = A.current) == null ? void 0 : g.tabIndex) === 0) return (k = A.current) == null || k.focus(), !0;
        return !1
      }
    }), de({
      ourProps: C,
      theirProps: c,
      slot: m,
      defaultTag: r5,
      name: "Tabs"
    }))))
  }
  let a5 = "div";

  function i5(e, t) {
    let {
      orientation: n,
      selectedIndex: a
    } = or("Tab.List"), i = ue(t);
    return de({
      ourProps: {
        ref: i,
        role: "tablist",
        "aria-orientation": n
      },
      theirProps: e,
      slot: {
        selectedIndex: a
      },
      defaultTag: a5,
      name: "Tabs.List"
    })
  }
  let l5 = "button";

  function s5(e, t) {
    var n, a;
    let i = Se(),
      {
        id: s = `headlessui-tabs-tab-${i}`,
        ...o
      } = e,
      {
        orientation: c,
        activation: u,
        selectedIndex: d,
        tabs: b,
        panels: w
      } = or("Tab"),
      h = Pi("Tab"),
      y = or("Tab"),
      m = x.useRef(null),
      p = ue(m, t);
    me(() => h.registerTab(m), [h, m]);
    let f = to("tabs"),
      N = b.indexOf(m);
    N === -1 && (N = f);
    let S = N === d,
      I = V(A => {
        var _;
        let O = A();
        if (O === vt.Success && u === "auto") {
          let R = (_ = fr(m)) == null ? void 0 : _.activeElement,
            $ = y.tabs.findIndex(P => P.current === R);
          $ !== -1 && h.change($)
        }
        return O
      }),
      M = V(A => {
        let _ = b.map(O => O.current).filter(Boolean);
        if (A.key === K.Space || A.key === K.Enter) {
          A.preventDefault(), A.stopPropagation(), h.change(N);
          return
        }
        switch (A.key) {
          case K.Home:
          case K.PageUp:
            return A.preventDefault(), A.stopPropagation(), I(() => Ae(_, fe.First));
          case K.End:
          case K.PageDown:
            return A.preventDefault(), A.stopPropagation(), I(() => Ae(_, fe.Last))
        }
        if (I(() => le(c, {
          vertical() {
            return A.key === K.ArrowUp ? Ae(_, fe.Previous | fe.WrapAround) : A.key === K.ArrowDown ? Ae(_, fe.Next | fe.WrapAround) : vt.Error
          },
          horizontal() {
            return A.key === K.ArrowLeft ? Ae(_, fe.Previous | fe.WrapAround) : A.key === K.ArrowRight ? Ae(_, fe.Next | fe.WrapAround) : vt.Error
          }
        })) === vt.Success) return A.preventDefault()
      }),
      T = x.useRef(!1),
      L = V(() => {
        var A;
        T.current || (T.current = !0, (A = m.current) == null || A.focus(), h.change(N), zr(() => {
          T.current = !1
        }))
      }),
      C = V(A => {
        A.preventDefault()
      }),
      g = x.useMemo(() => ({
        selected: S
      }), [S]),
      k = {
        ref: p,
        onKeyDown: M,
        onMouseDown: C,
        onClick: L,
        id: s,
        role: "tab",
        type: $n(e, m),
        "aria-controls": (a = (n = w[N]) == null ? void 0 : n.current) == null ? void 0 : a.id,
        "aria-selected": S,
        tabIndex: S ? 0 : -1
      };
    return de({
      ourProps: k,
      theirProps: o,
      slot: g,
      defaultTag: l5,
      name: "Tabs.Tab"
    })
  }
  let o5 = "div";

  function c5(e, t) {
    let {
      selectedIndex: n
    } = or("Tab.Panels"), a = ue(t), i = x.useMemo(() => ({
      selectedIndex: n
    }), [n]);
    return de({
      ourProps: {
        ref: a
      },
      theirProps: e,
      slot: i,
      defaultTag: o5,
      name: "Tabs.Panels"
    })
  }
  let d5 = "div",
    u5 = ze.RenderStrategy | ze.Static;

  function m5(e, t) {
    var n, a, i, s;
    let o = Se(),
      {
        id: c = `headlessui-tabs-panel-${o}`,
        tabIndex: u = 0,
        ...d
      } = e,
      {
        selectedIndex: b,
        tabs: w,
        panels: h
      } = or("Tab.Panel"),
      y = Pi("Tab.Panel"),
      m = x.useRef(null),
      p = ue(m, t);
    me(() => y.registerPanel(m), [y, m]);
    let f = to("panels"),
      N = h.indexOf(m);
    N === -1 && (N = f);
    let S = N === b,
      I = x.useMemo(() => ({
        selected: S
      }), [S]),
      M = {
        ref: p,
        id: c,
        role: "tabpanel",
        "aria-labelledby": (a = (n = w[N]) == null ? void 0 : n.current) == null ? void 0 : a.id,
        tabIndex: S ? u : -1
      };
    return !S && ((i = d.unmount) == null || i) && !((s = d.static) != null && s) ? H.createElement(wt, {
      as: "span",
      ...M
    }) : de({
      ourProps: M,
      theirProps: d,
      slot: I,
      defaultTag: d5,
      features: u5,
      visible: S,
      name: "Tabs.Panel"
    })
  }
  let p5 = ce(s5),
    h5 = ce(n5),
    f5 = ce(i5),
    g5 = ce(c5),
    v5 = ce(m5),
    be = Object.assign(p5, {
      Group: h5,
      List: f5,
      Panels: g5,
      Panel: v5
    });

  function b5(e) {
    let t = {
      called: !1
    };
    return (...n) => {
      if (!t.called) return t.called = !0, e(...n)
    }
  }

  function Pa(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
  }

  function Oa(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
  }

  function y5(e, t) {
    let n = nt();
    if (!e) return n.dispose;
    let {
      transitionDuration: a,
      transitionDelay: i
    } = getComputedStyle(e), [s, o] = [a, i].map(c => {
      let [u = 0] = c.split(",").filter(Boolean).map(d => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, b) => b - d);
      return u
    });
    if (s + o !== 0) {
      let c = n.addEventListener(e, "transitionend", u => {
        u.target === u.currentTarget && (t(), c())
      })
    } else t();
    return n.add(() => t()), n.dispose
  }

  function x5(e, t, n, a) {
    let i = n ? "enter" : "leave",
      s = nt(),
      o = a !== void 0 ? b5(a) : () => { };
    i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let c = le(i, {
      enter: () => t.enter,
      leave: () => t.leave
    }),
      u = le(i, {
        enter: () => t.enterTo,
        leave: () => t.leaveTo
      }),
      d = le(i, {
        enter: () => t.enterFrom,
        leave: () => t.leaveFrom
      });
    return Oa(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Pa(e, ...c, ...d), s.nextFrame(() => {
      Oa(e, ...d), Pa(e, ...u), y5(e, () => (Oa(e, ...c), Pa(e, ...t.entered), o()))
    }), s.dispose
  }

  function w5({
    container: e,
    direction: t,
    classes: n,
    onStart: a,
    onStop: i
  }) {
    let s = Hn(),
      o = Ot(),
      c = je(t);
    me(() => {
      let u = nt();
      o.add(u.dispose);
      let d = e.current;
      if (d && c.current !== "idle" && s.current) return u.dispose(), a.current(c.current), u.add(x5(d, n.current, c.current === "enter", () => {
        u.dispose(), i.current(c.current)
      })), u.dispose
    }, [t])
  }

  function zt(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
  }
  let Dn = x.createContext(null);
  Dn.displayName = "TransitionContext";
  var N5 = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(N5 || {});

  function k5() {
    let e = x.useContext(Dn);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
  }

  function S5() {
    let e = x.useContext(Bn);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
  }
  let Bn = x.createContext(null);
  Bn.displayName = "NestingContext";

  function Un(e) {
    return "children" in e ? Un(e.children) : e.current.filter(({
      el: t
    }) => t.current !== null).filter(({
      state: t
    }) => t === "visible").length > 0
  }

  function ro(e, t) {
    let n = je(e),
      a = x.useRef([]),
      i = Hn(),
      s = Ot(),
      o = V((y, m = bt.Hidden) => {
        let p = a.current.findIndex(({
          el: f
        }) => f === y);
        p !== -1 && (le(m, {
          [bt.Unmount]() {
            a.current.splice(p, 1)
          },
          [bt.Hidden]() {
            a.current[p].state = "hidden"
          }
        }), s.microTask(() => {
          var f;
          !Un(a) && i.current && ((f = n.current) == null || f.call(n))
        }))
      }),
      c = V(y => {
        let m = a.current.find(({
          el: p
        }) => p === y);
        return m ? m.state !== "visible" && (m.state = "visible") : a.current.push({
          el: y,
          state: "visible"
        }), () => o(y, bt.Unmount)
      }),
      u = x.useRef([]),
      d = x.useRef(Promise.resolve()),
      b = x.useRef({
        enter: [],
        leave: [],
        idle: []
      }),
      w = V((y, m, p) => {
        u.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([f]) => f !== y)), t == null || t.chains.current[m].push([y, new Promise(f => {
          u.current.push(f)
        })]), t == null || t.chains.current[m].push([y, new Promise(f => {
          Promise.all(b.current[m].map(([N, S]) => S)).then(() => f())
        })]), m === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => p(m)) : p(m)
      }),
      h = V((y, m, p) => {
        Promise.all(b.current[m].splice(0).map(([f, N]) => N)).then(() => {
          var f;
          (f = u.current.shift()) == null || f()
        }).then(() => p(m))
      });
    return x.useMemo(() => ({
      children: a,
      register: c,
      unregister: o,
      onStart: w,
      onStop: h,
      wait: d,
      chains: b
    }), [c, o, a, w, h, b, d])
  }

  function C5() { }
  let E5 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

  function Zl(e) {
    var t;
    let n = {};
    for (let a of E5) n[a] = (t = e[a]) != null ? t : C5;
    return n
  }

  function M5(e) {
    let t = x.useRef(Zl(e));
    return x.useEffect(() => {
      t.current = Zl(e)
    }, [e]), t
  }
  let L5 = "div",
    no = ze.RenderStrategy;

  function A5(e, t) {
    let {
      beforeEnter: n,
      afterEnter: a,
      beforeLeave: i,
      afterLeave: s,
      enter: o,
      enterFrom: c,
      enterTo: u,
      entered: d,
      leave: b,
      leaveFrom: w,
      leaveTo: h,
      ...y
    } = e, m = x.useRef(null), p = ue(m, t), f = y.unmount ? bt.Unmount : bt.Hidden, {
      show: N,
      appear: S,
      initial: I
    } = k5(), [M, T] = x.useState(N ? "visible" : "hidden"), L = S5(), {
      register: C,
      unregister: g
    } = L, k = x.useRef(null);
    x.useEffect(() => C(m), [C, m]), x.useEffect(() => {
      if (f === bt.Hidden && m.current) {
        if (N && M !== "visible") {
          T("visible");
          return
        }
        return le(M, {
          hidden: () => g(m),
          visible: () => C(m)
        })
      }
    }, [M, m, C, g, N, f]);
    let A = je({
      enter: zt(o),
      enterFrom: zt(c),
      enterTo: zt(u),
      entered: zt(d),
      leave: zt(b),
      leaveFrom: zt(w),
      leaveTo: zt(h)
    }),
      _ = M5({
        beforeEnter: n,
        afterEnter: a,
        beforeLeave: i,
        afterLeave: s
      }),
      O = hr();
    x.useEffect(() => {
      if (O && M === "visible" && m.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [m, M, O]);
    let R = I && !S,
      $ = (() => !O || R || k.current === N ? "idle" : N ? "enter" : "leave")(),
      P = Wp(0),
      Z = V(oe => le(oe, {
        enter: () => {
          P.addFlag(ve.Opening), _.current.beforeEnter()
        },
        leave: () => {
          P.addFlag(ve.Closing), _.current.beforeLeave()
        },
        idle: () => { }
      })),
      z = V(oe => le(oe, {
        enter: () => {
          P.removeFlag(ve.Opening), _.current.afterEnter()
        },
        leave: () => {
          P.removeFlag(ve.Closing), _.current.afterLeave()
        },
        idle: () => { }
      })),
      J = ro(() => {
        T("hidden"), g(m)
      }, L);
    w5({
      container: m,
      classes: A,
      direction: $,
      onStart: je(oe => {
        J.onStart(m, oe, Z)
      }),
      onStop: je(oe => {
        J.onStop(m, oe, z), oe === "leave" && !Un(J) && (T("hidden"), g(m))
      })
    }), x.useEffect(() => {
      R && (f === bt.Hidden ? k.current = null : k.current = N)
    }, [N, R, M]);
    let W = y,
      Ce = {
        ref: p
      };
    return S && N && dt.isServer && (W = {
      ...W,
      className: Zs(y.className, ...A.current.enter, ...A.current.enterFrom)
    }), H.createElement(Bn.Provider, {
      value: J
    }, H.createElement(jn, {
      value: le(M, {
        visible: ve.Open,
        hidden: ve.Closed
      }) | P.flags
    }, de({
      ourProps: Ce,
      theirProps: W,
      defaultTag: L5,
      features: no,
      visible: M === "visible",
      name: "Transition.Child"
    })))
  }

  function T5(e, t) {
    let {
      show: n,
      appear: a = !1,
      unmount: i,
      ...s
    } = e, o = x.useRef(null), c = ue(o, t);
    hr();
    let u = Gt();
    if (n === void 0 && u !== null && (n = (u & ve.Open) === ve.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [d, b] = x.useState(n ? "visible" : "hidden"), w = ro(() => {
      b("hidden")
    }), [h, y] = x.useState(!0), m = x.useRef([n]);
    me(() => {
      h !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), y(!1))
    }, [m, n]);
    let p = x.useMemo(() => ({
      show: n,
      appear: a,
      initial: h
    }), [n, a, h]);
    x.useEffect(() => {
      if (n) b("visible");
      else if (!Un(w)) b("hidden");
      else {
        let N = o.current;
        if (!N) return;
        let S = N.getBoundingClientRect();
        S.x === 0 && S.y === 0 && S.width === 0 && S.height === 0 && b("hidden")
      }
    }, [n, w]);
    let f = {
      unmount: i
    };
    return H.createElement(Bn.Provider, {
      value: w
    }, H.createElement(Dn.Provider, {
      value: p
    }, de({
      ourProps: {
        ...f,
        as: x.Fragment,
        children: H.createElement(ao, {
          ref: c,
          ...f,
          ...s
        })
      },
      theirProps: {},
      defaultTag: x.Fragment,
      features: no,
      visible: d === "visible",
      name: "Transition"
    })))
  }

  function _5(e, t) {
    let n = x.useContext(Dn) !== null,
      a = Gt() !== null;
    return H.createElement(H.Fragment, null, !n && a ? H.createElement(ti, {
      ref: t,
      ...e
    }) : H.createElement(ao, {
      ref: t,
      ...e
    }))
  }
  let ti = ce(T5),
    ao = ce(A5),
    I5 = ce(_5),
    tt = Object.assign(ti, {
      Child: I5,
      Root: ti
    });

  function Tn() {
    return Tn = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
      }
      return e
    }, Tn.apply(this, arguments)
  }
  var Rr = {},
    P5 = {
      get exports() {
        return Rr
      },
      set exports(e) {
        Rr = e
      }
    },
    io = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      Ấ: "A",
      Ắ: "A",
      Ẳ: "A",
      Ẵ: "A",
      Ặ: "A",
      Æ: "AE",
      Ầ: "A",
      Ằ: "A",
      Ȃ: "A",
      Ç: "C",
      Ḉ: "C",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      Ế: "E",
      Ḗ: "E",
      Ề: "E",
      Ḕ: "E",
      Ḝ: "E",
      Ȇ: "E",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      Ḯ: "I",
      Ȋ: "I",
      Ð: "D",
      Ñ: "N",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      Ố: "O",
      Ṍ: "O",
      Ṓ: "O",
      Ȏ: "O",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      Ý: "Y",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      ấ: "a",
      ắ: "a",
      ẳ: "a",
      ẵ: "a",
      ặ: "a",
      æ: "ae",
      ầ: "a",
      ằ: "a",
      ȃ: "a",
      ç: "c",
      ḉ: "c",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      ế: "e",
      ḗ: "e",
      ề: "e",
      ḕ: "e",
      ḝ: "e",
      ȇ: "e",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      ḯ: "i",
      ȋ: "i",
      ð: "d",
      ñ: "n",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      ố: "o",
      ṍ: "o",
      ṓ: "o",
      ȏ: "o",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      ý: "y",
      ÿ: "y",
      Ā: "A",
      ā: "a",
      Ă: "A",
      ă: "a",
      Ą: "A",
      ą: "a",
      Ć: "C",
      ć: "c",
      Ĉ: "C",
      ĉ: "c",
      Ċ: "C",
      ċ: "c",
      Č: "C",
      č: "c",
      C̆: "C",
      c̆: "c",
      Ď: "D",
      ď: "d",
      Đ: "D",
      đ: "d",
      Ē: "E",
      ē: "e",
      Ĕ: "E",
      ĕ: "e",
      Ė: "E",
      ė: "e",
      Ę: "E",
      ę: "e",
      Ě: "E",
      ě: "e",
      Ĝ: "G",
      Ǵ: "G",
      ĝ: "g",
      ǵ: "g",
      Ğ: "G",
      ğ: "g",
      Ġ: "G",
      ġ: "g",
      Ģ: "G",
      ģ: "g",
      Ĥ: "H",
      ĥ: "h",
      Ħ: "H",
      ħ: "h",
      Ḫ: "H",
      ḫ: "h",
      Ĩ: "I",
      ĩ: "i",
      Ī: "I",
      ī: "i",
      Ĭ: "I",
      ĭ: "i",
      Į: "I",
      į: "i",
      İ: "I",
      ı: "i",
      Ĳ: "IJ",
      ĳ: "ij",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      Ḱ: "K",
      ḱ: "k",
      K̆: "K",
      k̆: "k",
      Ĺ: "L",
      ĺ: "l",
      Ļ: "L",
      ļ: "l",
      Ľ: "L",
      ľ: "l",
      Ŀ: "L",
      ŀ: "l",
      Ł: "l",
      ł: "l",
      Ḿ: "M",
      ḿ: "m",
      M̆: "M",
      m̆: "m",
      Ń: "N",
      ń: "n",
      Ņ: "N",
      ņ: "n",
      Ň: "N",
      ň: "n",
      ŉ: "n",
      N̆: "N",
      n̆: "n",
      Ō: "O",
      ō: "o",
      Ŏ: "O",
      ŏ: "o",
      Ő: "O",
      ő: "o",
      Œ: "OE",
      œ: "oe",
      P̆: "P",
      p̆: "p",
      Ŕ: "R",
      ŕ: "r",
      Ŗ: "R",
      ŗ: "r",
      Ř: "R",
      ř: "r",
      R̆: "R",
      r̆: "r",
      Ȓ: "R",
      ȓ: "r",
      Ś: "S",
      ś: "s",
      Ŝ: "S",
      ŝ: "s",
      Ş: "S",
      Ș: "S",
      ș: "s",
      ş: "s",
      Š: "S",
      š: "s",
      Ţ: "T",
      ţ: "t",
      ț: "t",
      Ț: "T",
      Ť: "T",
      ť: "t",
      Ŧ: "T",
      ŧ: "t",
      T̆: "T",
      t̆: "t",
      Ũ: "U",
      ũ: "u",
      Ū: "U",
      ū: "u",
      Ŭ: "U",
      ŭ: "u",
      Ů: "U",
      ů: "u",
      Ű: "U",
      ű: "u",
      Ų: "U",
      ų: "u",
      Ȗ: "U",
      ȗ: "u",
      V̆: "V",
      v̆: "v",
      Ŵ: "W",
      ŵ: "w",
      Ẃ: "W",
      ẃ: "w",
      X̆: "X",
      x̆: "x",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Y̆: "Y",
      y̆: "y",
      Ź: "Z",
      ź: "z",
      Ż: "Z",
      ż: "z",
      Ž: "Z",
      ž: "z",
      ſ: "s",
      ƒ: "f",
      Ơ: "O",
      ơ: "o",
      Ư: "U",
      ư: "u",
      Ǎ: "A",
      ǎ: "a",
      Ǐ: "I",
      ǐ: "i",
      Ǒ: "O",
      ǒ: "o",
      Ǔ: "U",
      ǔ: "u",
      Ǖ: "U",
      ǖ: "u",
      Ǘ: "U",
      ǘ: "u",
      Ǚ: "U",
      ǚ: "u",
      Ǜ: "U",
      ǜ: "u",
      Ứ: "U",
      ứ: "u",
      Ṹ: "U",
      ṹ: "u",
      Ǻ: "A",
      ǻ: "a",
      Ǽ: "AE",
      ǽ: "ae",
      Ǿ: "O",
      ǿ: "o",
      Þ: "TH",
      þ: "th",
      Ṕ: "P",
      ṕ: "p",
      Ṥ: "S",
      ṥ: "s",
      X́: "X",
      x́: "x",
      Ѓ: "Г",
      ѓ: "г",
      Ќ: "К",
      ќ: "к",
      A̋: "A",
      a̋: "a",
      E̋: "E",
      e̋: "e",
      I̋: "I",
      i̋: "i",
      Ǹ: "N",
      ǹ: "n",
      Ồ: "O",
      ồ: "o",
      Ṑ: "O",
      ṑ: "o",
      Ừ: "U",
      ừ: "u",
      Ẁ: "W",
      ẁ: "w",
      Ỳ: "Y",
      ỳ: "y",
      Ȁ: "A",
      ȁ: "a",
      Ȅ: "E",
      ȅ: "e",
      Ȉ: "I",
      ȉ: "i",
      Ȍ: "O",
      ȍ: "o",
      Ȑ: "R",
      ȑ: "r",
      Ȕ: "U",
      ȕ: "u",
      B̌: "B",
      b̌: "b",
      Č̣: "C",
      č̣: "c",
      Ê̌: "E",
      ê̌: "e",
      F̌: "F",
      f̌: "f",
      Ǧ: "G",
      ǧ: "g",
      Ȟ: "H",
      ȟ: "h",
      J̌: "J",
      ǰ: "j",
      Ǩ: "K",
      ǩ: "k",
      M̌: "M",
      m̌: "m",
      P̌: "P",
      p̌: "p",
      Q̌: "Q",
      q̌: "q",
      Ř̩: "R",
      ř̩: "r",
      Ṧ: "S",
      ṧ: "s",
      V̌: "V",
      v̌: "v",
      W̌: "W",
      w̌: "w",
      X̌: "X",
      x̌: "x",
      Y̌: "Y",
      y̌: "y",
      A̧: "A",
      a̧: "a",
      B̧: "B",
      b̧: "b",
      Ḑ: "D",
      ḑ: "d",
      Ȩ: "E",
      ȩ: "e",
      Ɛ̧: "E",
      ɛ̧: "e",
      Ḩ: "H",
      ḩ: "h",
      I̧: "I",
      i̧: "i",
      Ɨ̧: "I",
      ɨ̧: "i",
      M̧: "M",
      m̧: "m",
      O̧: "O",
      o̧: "o",
      Q̧: "Q",
      q̧: "q",
      U̧: "U",
      u̧: "u",
      X̧: "X",
      x̧: "x",
      Z̧: "Z",
      z̧: "z"
    },
    lo = Object.keys(io).join("|"),
    O5 = new RegExp(lo, "g"),
    F5 = new RegExp(lo, ""),
    so = function (e) {
      return e.replace(O5, function (t) {
        return io[t]
      })
    },
    R5 = function (e) {
      return !!e.match(F5)
    };
  P5.exports = so;
  Rr.has = R5;
  Rr.remove = so;
  var Ze = {
    CASE_SENSITIVE_EQUAL: 7,
    EQUAL: 6,
    STARTS_WITH: 5,
    WORD_STARTS_WITH: 4,
    CONTAINS: 3,
    ACRONYM: 2,
    MATCHES: 1,
    NO_MATCH: 0
  };
  oo.rankings = Ze;
  var $5 = function (t, n) {
    return String(t.rankedValue).localeCompare(String(n.rankedValue))
  };

  function oo(e, t, n) {
    n === void 0 && (n = {});
    var a = n,
      i = a.keys,
      s = a.threshold,
      o = s === void 0 ? Ze.MATCHES : s,
      c = a.baseSort,
      u = c === void 0 ? $5 : c,
      d = a.sorter,
      b = d === void 0 ? function (y) {
        return y.sort(function (m, p) {
          return V5(m, p, u)
        })
      } : d,
      w = e.reduce(h, []);
    return b(w).map(function (y) {
      var m = y.item;
      return m
    });

    function h(y, m, p) {
      var f = j5(m, i, t, n),
        N = f.rank,
        S = f.keyThreshold,
        I = S === void 0 ? o : S;
      return N >= I && y.push(Tn({}, f, {
        item: m,
        index: p
      })), y
    }
  }

  function j5(e, t, n, a) {
    if (!t) {
      var i = e;
      return {
        rankedValue: i,
        rank: Vl(i, n, a),
        keyIndex: -1,
        keyThreshold: a.threshold
      }
    }
    var s = B5(e, t);
    return s.reduce(function (o, c, u) {
      var d = o.rank,
        b = o.rankedValue,
        w = o.keyIndex,
        h = o.keyThreshold,
        y = c.itemValue,
        m = c.attributes,
        p = Vl(y, n, a),
        f = b,
        N = m.minRanking,
        S = m.maxRanking,
        I = m.threshold;
      return p < N && p >= Ze.MATCHES ? p = N : p > S && (p = S), p > d && (d = p, w = u, h = I, f = y), {
        rankedValue: f,
        rank: d,
        keyIndex: w,
        keyThreshold: h
      }
    }, {
      rankedValue: e,
      rank: Ze.NO_MATCH,
      keyIndex: -1,
      keyThreshold: a.threshold
    })
  }

  function Vl(e, t, n) {
    return e = zl(e, n), t = zl(t, n), t.length > e.length ? Ze.NO_MATCH : e === t ? Ze.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? Ze.EQUAL : e.startsWith(t) ? Ze.STARTS_WITH : e.includes(" " + t) ? Ze.WORD_STARTS_WITH : e.includes(t) ? Ze.CONTAINS : t.length === 1 ? Ze.NO_MATCH : H5(e).includes(t) ? Ze.ACRONYM : Z5(e, t))
  }

  function H5(e) {
    var t = "",
      n = e.split(" ");
    return n.forEach(function (a) {
      var i = a.split("-");
      i.forEach(function (s) {
        t += s.substr(0, 1)
      })
    }), t
  }

  function Z5(e, t) {
    var n = 0,
      a = 0;

    function i(h, y, m) {
      for (var p = m, f = y.length; p < f; p++) {
        var N = y[p];
        if (N === h) return n += 1, p + 1
      }
      return -1
    }

    function s(h) {
      var y = 1 / h,
        m = n / t.length,
        p = Ze.MATCHES + m * y;
      return p
    }
    var o = i(t[0], e, 0);
    if (o < 0) return Ze.NO_MATCH;
    a = o;
    for (var c = 1, u = t.length; c < u; c++) {
      var d = t[c];
      a = i(d, e, a);
      var b = a > -1;
      if (!b) return Ze.NO_MATCH
    }
    var w = a - o;
    return s(w)
  }

  function V5(e, t, n) {
    var a = -1,
      i = 1,
      s = e.rank,
      o = e.keyIndex,
      c = t.rank,
      u = t.keyIndex,
      d = s === c;
    return d ? o === u ? n(e, t) : o < u ? a : i : s > c ? a : i
  }

  function zl(e, t) {
    var n = t.keepDiacritics;
    return e = "" + e, n || (e = Rr(e)), e
  }

  function z5(e, t) {
    typeof t == "object" && (t = t.key);
    var n;
    if (typeof t == "function") n = t(e);
    else if (e == null) n = null;
    else if (Object.hasOwnProperty.call(e, t)) n = e[t];
    else {
      if (t.includes(".")) return D5(t, e);
      n = null
    }
    return n == null ? [] : Array.isArray(n) ? n : [String(n)]
  }

  function D5(e, t) {
    for (var n = e.split("."), a = [t], i = 0, s = n.length; i < s; i++) {
      for (var o = n[i], c = [], u = 0, d = a.length; u < d; u++) {
        var b = a[u];
        if (b != null)
          if (Object.hasOwnProperty.call(b, o)) {
            var w = b[o];
            w != null && c.push(w)
          } else o === "*" && (c = c.concat(b))
      }
      a = c
    }
    if (Array.isArray(a[0])) {
      var h = [];
      return h.concat.apply(h, a)
    }
    return a
  }

  function B5(e, t) {
    for (var n = [], a = 0, i = t.length; a < i; a++)
      for (var s = t[a], o = U5(s), c = z5(e, s), u = 0, d = c.length; u < d; u++) n.push({
        itemValue: c[u],
        attributes: o
      });
    return n
  }
  var Dl = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
  };

  function U5(e) {
    return typeof e == "string" ? Dl : Tn({}, Dl, e)
  }

  function W5(...e) {
    return e.filter(Boolean).join(" ")
  }

  function q5({
    items: e
  }) {
    const [t, n] = x.useState(""), [a, i] = x.useState(!1);
    x.useEffect(() => {
      let o = c => {
        if (c.which === 75 && (c.ctrlKey || c.metaKey)) {
          c.preventDefault(), i(!0);
          return
        }
        const u = c.target || c.srcElement,
          d = u.tagName;
        u.isContentEditable || d === "INPUT" || d === "SELECT" || d === "TEXTAREA" || c.which === 191 && (c.preventDefault(), i(!0))
      };
      return window.addEventListener("keydown", o), () => {
        window.removeEventListener("keydown", o)
      }
    }, [i]);
    const s = t === "" ? [] : oo(e, t, {
      keys: ["name", "category"]
    });
    return l(j, {
      children: [l("button", {
        type: "button",
        className: "-my-1 ml-auto flex h-8 w-8 items-center justify-center rounded-lg lg:ml-8",
        onClick: () => i(!0),
        children: [r("span", {
          className: "sr-only",
          children: "Search components"
        }), r("svg", {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6 fill-gray-900 hover:fill-gray-900",
          children: r("path", {
            d: "M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"
          })
        })]
      }), r(tt.Root, {
        show: a,
        as: x.Fragment,
        afterLeave: () => {
          n("")
        },
        children: l(Ir, {
          as: "div",
          className: "fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24",
          onClose: i,
          children: [r(tt.Child, {
            as: x.Fragment,
            enter: "ease-out duration-200",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-150",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: r("div", {
              className: "fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity"
            })
          }), r(tt.Child, {
            as: "div",
            className: "relative w-full max-w-lg transform px-4 transition-all",
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-150",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: r(Ir.Panel, {
              className: "overflow-hidden rounded-lg bg-white shadow-md",
              children: l(hn, {
                onChange: o => window.location = o.url,
                children: [l("div", {
                  className: B("relative", t && "shadow-sm"),
                  children: [r(hn.Input, {
                    className: "block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6",
                    style: {
                      caretColor: "#6b7280"
                    },
                    placeholder: "Find anything...",
                    "aria-label": "Search components",
                    onChange: o => n(o.target.value)
                  }), r("svg", {
                    className: "pointer-events-none absolute right-4 top-4 h-6 w-6 fill-slate-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r("path", {
                      d: "M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"
                    })
                  })]
                }), s.length > 0 && r(hn.Options, {
                  static: !0,
                  className: "max-h-[18.375rem] divide-y divide-slate-200 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm leading-6",
                  children: s.map(o => r(hn.Option, {
                    value: o,
                    className: ({
                      active: c
                    }) => W5("flex items-center justify-between p-4", c && "bg-slate-50"),
                    children: ({
                      active: c
                    }) => l(j, {
                      children: [r("span", {
                        className: B("whitespace-nowrap font-semibold", c ? "text-sky-600" : "text-slate-900"),
                        children: o.name
                      }), r("span", {
                        className: "ml-4 text-right text-xs text-slate-600",
                        children: o.category
                      })]
                    })
                  }, o.url))
                }), t !== "" && s.length === 0 && l("div", {
                  className: "bg-slate-50 px-16 py-20 text-center",
                  children: [r("h2", {
                    className: "font-semibold text-slate-900",
                    children: "No results found"
                  }), r("p", {
                    className: "mt-2 text-sm leading-6 text-slate-600",
                    children: "We can’t find anything with that term at the moment, try searching something else."
                  })]
                })]
              })
            })
          })]
        })
      })]
    })
  }

  function cr(e) {
    return l("svg", {
      ...e,
      "aria-hidden": "true",
      viewBox: "0 0 160 24",
      fill: "none",
      children: [r("path", {
        d: "M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z",
        className: "fill-sky-400"
      }), r("path", {
        d: "M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z",
        fill: "currentColor"
      }), r("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z",
        fill: "currentColor"
      })]
    })
  }

  function G5() {
    let [e, t] = H.useState(!1), {
      auth: n,
      versionPrefix: a
    } = Vr().props;
    return H.useEffect(() => {
      if (!e) return;
      let i = ur.Inertia.on("finish", () => {
        t(!1)
      });
      return () => {
        i()
      }
    }, [e]), l(j, {
      children: [l("button", {
        type: "button",
        onClick: () => t(!0),
        className: "-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden",
        children: [r("span", {
          className: "sr-only",
          children: "Open navigation"
        }), r("svg", {
          viewBox: "0 0 24 24",
          className: "h-6 w-6 stroke-slate-900",
          children: r("path", {
            d: "M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5",
            fill: "none",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        })]
      }), r(tt.Root, {
        show: e,
        as: x.Fragment,
        children: l(Ir, {
          onClose: t,
          as: "div",
          className: "fixed inset-0 z-50 overflow-hidden lg:hidden",
          children: [r(tt.Child, {
            as: x.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: r("div", {
              className: "absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity"
            })
          }), r(tt.Child, {
            as: x.Fragment,
            enter: "ease-in-out duration-300",
            enterFrom: "translate-x-[min(20rem,calc(100vw-theme(spacing.10)))]",
            enterTo: "translate-x-0",
            leave: "ease-in-out duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-[min(20rem,calc(100vw-theme(spacing.10)))]",
            children: r("div", {
              className: "fixed inset-0 flex items-start justify-end overflow-y-auto",
              children: l(Ir.Panel, {
                className: "min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition",
                children: [r(Ir.Title, {
                  className: "sr-only",
                  children: "Navigation"
                }), l("button", {
                  type: "button",
                  onClick: () => t(!1),
                  className: "absolute right-6 top-5 flex h-8 w-8 items-center justify-center",
                  children: [r("span", {
                    className: "sr-only",
                    children: "Close navigation"
                  }), r("svg", {
                    className: "h-3.5 w-3.5 overflow-visible stroke-slate-900",
                    fill: "none",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r("path", {
                      d: "M0 0L14 14M14 0L0 14"
                    })
                  })]
                }), l("nav", {
                  className: "divide-y divide-slate-900/10 text-base leading-7 text-slate-900",
                  children: [r("div", {
                    className: "px-8 py-6",
                    children: l(U, {
                      href: a ? `${a}` : "/",
                      className: "block w-9 overflow-hidden",
                      children: [r("span", {
                        className: "sr-only",
                        children: "Tailwind UI"
                      }), r(cr, {
                        className: "h-6 w-auto"
                      })]
                    })
                  }), r("div", {
                    className: "px-8 py-6",
                    children: l("div", {
                      className: "-my-2 items-start space-y-2",
                      children: [r(U, {
                        href: `${a}/components`,
                        className: "block w-full py-2 font-semibold",
                        children: "Components"
                      }), r(U, {
                        href: "/templates",
                        className: "block w-full py-2 font-semibold",
                        children: "Templates"
                      }), r(U, {
                        href: `${a}/documentation`,
                        className: "block w-full py-2 font-semibold",
                        children: "Documentation"
                      }), n && l(j, {
                        children: [r(U, {
                          className: "block w-full py-2",
                          href: "/changelog",
                          children: "Changelog"
                        }), r(U, {
                          className: "block w-full py-2",
                          href: "/support",
                          children: "Support"
                        }), r(U, {
                          className: "block w-full py-2",
                          href: "/license",
                          children: "License"
                        })]
                      })]
                    })
                  }), n ? l(j, {
                    children: [r("div", {
                      className: "px-8 py-6",
                      children: l("p", {
                        className: "flex flex-col",
                        children: [r("span", {
                          className: "text-sm text-slate-500",
                          children: "Signed in as"
                        }), r("span", {
                          className: "mt-0.5 truncate",
                          children: n.user.email
                        })]
                      })
                    }), n.user.can.accessV1 && r("div", {
                      className: "px-8 py-4",
                      children: l(U, {
                        className: "block w-full py-2",
                        href: `${a === "/v1" ? "" : "/v1"}/components`,
                        children: ["Switch to ", a === "/v1" ? "v2+" : "v1"]
                      })
                    }), n.user.teams.length > 0 && l("div", {
                      className: "px-8 pb-4 pt-6",
                      children: [r("h3", {
                        className: "text-sm text-slate-500",
                        children: n.user.teams.length === 1 ? "My Team" : "My Teams"
                      }), r("ul", {
                        className: "mt-2",
                        children: n.user.teams.map(i => r("li", {
                          children: r(U, {
                            className: "block w-full py-2",
                            href: `/teams/${i.id}`,
                            children: i.name
                          })
                        }, i.id))
                      })]
                    }), r("div", {
                      className: "px-8 py-6",
                      children: l("div", {
                        className: "-my-2 space-y-2",
                        children: [r(U, {
                          className: "block w-full py-2",
                          href: "/account-settings",
                          children: "Account Settings"
                        }), r(U, {
                          className: "block w-full py-2 text-left",
                          as: "button",
                          type: "button",
                          href: "/logout",
                          method: "post",
                          children: "Sign out"
                        })]
                      })
                    })]
                  }) : r("div", {
                    className: "px-8 py-6",
                    children: l("div", {
                      className: "-my-2 space-y-4",
                      children: [r(U, {
                        href: "/login",
                        className: "block w-full py-2 font-semibold",
                        children: "Sign in"
                      }), l(pe, {
                        size: "lg",
                        href: "/all-access",
                        className: "w-full",
                        children: ["Get all-access ", r("span", {
                          "aria-hidden": "true",
                          children: "→"
                        })]
                      })]
                    })
                  })]
                })]
              })
            })
          })]
        })
      })]
    })
  }

  function Y5() {
    let {
      versionPrefix: e,
      auth: t
    } = Vr().props;
    return l(Pe, {
      as: "div",
      className: "relative",
      children: [l(Pe.Button, {
        className: "flex items-center font-semibold hover:text-gray-900",
        children: [l("span", {
          className: "hidden items-center sm:flex",
          children: ["Account", r("svg", {
            "aria-hidden": "true",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "ml-3 h-3 w-3 stroke-slate-400",
            children: r("path", {
              d: "M9.75 4.125 6 7.875l-3.75-3.75",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          })]
        }), r("span", {
          className: "-my-1 flex h-8 w-8 items-center justify-center rounded-lg sm:hidden",
          children: r("svg", {
            "aria-hidden": "true",
            width: 20,
            height: 20,
            fill: "none",
            className: "text-slate-900",
            children: r("path", {
              d: "M3.75 4.75h12.5M3.75 9.75h12.5M3.75 14.75h12.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          })
        })]
      }), r(tt, {
        as: x.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: l(Pe.Items, {
          className: "absolute right-0 top-full -mr-0.5 mt-3 w-60 origin-top-right divide-y divide-gray-100 rounded-lg bg-white text-sm font-normal text-slate-900 shadow-md ring-1 ring-slate-900/5 focus:outline-none sm:-mr-3.5",
          children: [l("p", {
            className: "truncate px-3.5 py-3",
            children: [r("span", {
              className: "block text-xs text-gray-500",
              children: "Signed in as"
            }), r("span", {
              className: "mt-0.5 font-semibold",
              children: t.user.email
            })]
          }), l("div", {
            className: "py-1.5",
            children: [r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                href: "/changelog",
                className: "block py-1.5",
                children: "Changelog"
              })
            }), r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                href: "/support",
                className: "block py-1.5",
                children: "Support"
              })
            }), r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                href: "/license",
                className: "block py-1.5",
                children: "License"
              })
            })]
          }), t.user.can.accessV1 && r("div", {
            className: "py-1.5",
            children: r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: l(U, {
                href: `${e === "/v1" ? "" : "/v1"}/components`,
                className: "block py-1.5",
                children: ["Switch to ", e === "/v1" ? "v2+" : "v1"]
              })
            })
          }), (t.user.can.canUpgradeToStandardAllAccess || t.user.can.upgradeToTeamLicense) && l("div", {
            className: "py-1.5",
            children: [t.user.can.canUpgradeToStandardAllAccess && r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                href: "/upgrade",
                className: "block py-1.5",
                children: "Upgrade to Standard License"
              })
            }), t.user.can.upgradeToTeamLicense && r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                href: "/upgrade-team",
                className: "block py-1.5",
                children: "Upgrade to Team License"
              })
            })]
          }), t.user.teams.length > 0 && l("div", {
            className: "py-1.5",
            children: [r("div", {
              id: "menu-my-teams-heading",
              className: "px-3.5 py-1.5 text-xs text-slate-500",
              children: t.user.teams.length === 1 ? "My Team" : "My Teams"
            }), r("ul", {
              role: "list",
              "aria-labelledby": "menu-my-teams-heading",
              children: t.user.teams.map(n => r("li", {
                children: r(Pe.Item, {
                  className: ({
                    active: a
                  }) => B("block px-3.5 py-1.5 hover:bg-slate-100", a && "bg-slate-100"),
                  children: r(U, {
                    href: `/teams/${n.id}`,
                    className: "block py-1.5",
                    children: n.name
                  })
                })
              }, n.id))
            })]
          }), l("div", {
            className: "py-1.5",
            children: [r(Pe.Item, {
              className: ({
                active: n
              }) => B("block px-3.5 py-1.5 hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                href: "/account-settings",
                className: "block py-1.5",
                children: "Account Settings"
              })
            }), r(Pe.Item, {
              className: ({
                active: n
              }) => B("block w-full px-3.5 py-1.5 text-left hover:bg-slate-100", n && "bg-slate-100"),
              children: r(U, {
                as: "button",
                type: "button",
                href: "/logout",
                method: "post",
                className: "block w-full py-1.5 text-left",
                children: "Sign out"
              })
            })]
          })]
        })
      })]
    })
  }

  function J5() {
    return l(U, {
      href: "/templates/studio",
      className: "group -my-2 ml-6 hidden items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden xl:flex",
      children: [r("svg", {
        className: "h-4 w-4 fill-sky-500",
        viewBox: "0 0 24 24",
        children: r("path", {
          fillRule: "evenodd",
          d: "M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z",
          clipRule: "evenodd"
        })
      }), r("span", {
        className: "font-semibold",
        children: "Meet Studio"
      }), r("svg", {
        width: "2",
        height: "2",
        "aria-hidden": "true",
        className: "fill-slate-900",
        children: r("circle", {
          cx: "1",
          cy: "1",
          r: "1"
        })
      }), l("span", {
        className: "font-medium",
        children: [r("span", {
          className: "md:hidden",
          children: "New agency template"
        }), r("span", {
          className: "hidden md:inline",
          children: "Our beautiful new agency site template"
        })]
      }), r("svg", {
        viewBox: "0 0 5 8",
        className: "h-2 w-[5px] fill-black/30 group-hover:fill-black/60",
        fillRule: "evenodd",
        clipRule: "evenodd",
        "aria-hidden": "true",
        children: r("path", {
          d: "M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z"
        })
      })]
    })
  }

  function De({
    showBorder: e = !1,
    children: t
  }) {
    const {
      auth: n,
      isImpersonating: a,
      versionPrefix: i,
      commandPalette: s
    } = Vr().props;
    return l(j, {
      children: [a && l("div", {
        className: "relative z-50 flex items-center justify-center bg-red-500 px-4 py-2 text-sm font-medium text-white",
        children: ["You are impersonating ", n.user.email, ".", r(U, {
          as: "button",
          type: "button",
          href: "/impersonate",
          method: "delete",
          className: "ml-6 flex items-center rounded bg-red-200 px-3 py-1.5 font-medium text-red-700 hover:bg-red-100",
          children: "Stop Impersonating"
        })]
      }), r("header", {
        className: "relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900",
        children: r("nav", {
          "aria-label": "Global",
          className: "mx-auto max-w-container px-4 sm:px-6 lg:px-8",
          children: l("div", {
            className: "relative flex items-center py-[2.125rem]",
            children: [e && r("div", {
              className: "absolute inset-x-0 bottom-0 h-px bg-slate-900/5"
            }), l(U, {
              href: i ? `${i}` : "/",
              className: "flex-none text-slate-900",
              children: [r("span", {
                className: "sr-only",
                children: "Tailwind UI"
              }), r(cr, {
                className: "h-6 w-auto"
              })]
            }), r(J5, {}), l("div", {
              className: "ml-auto hidden lg:flex lg:items-center",
              children: [r(U, {
                href: `${i}/components`,
                children: "Components"
              }), r(U, {
                href: "/templates",
                className: "ml-8",
                children: "Templates"
              }), r(U, {
                href: `${i}/documentation`,
                className: "ml-8",
                children: "Docs"
              })]
            }), r(q5, {
              items: s
            }), r(G5, {}), r("div", {
              className: "hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8",
              children: n ? r(Y5, {}) : l(j, {
                children: [r(U, {
                  href: "/login",
                  children: "Sign in"
                }), l(pe, {
                  size: "md",
                  href: "/all-access",
                  className: "-my-2.5 ml-8",
                  children: ["Get all-access ", r("span", {
                    "aria-hidden": "true",
                    children: "→"
                  })]
                })]
              })
            })]
          })
        })
      }), t, r("footer", {
        className: "mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8",
        children: l("div", {
          className: "border-t border-slate-900/5 py-10",
          children: [r(cr, {
            className: "mx-auto h-5 w-auto text-slate-900"
          }), r("p", {
            className: "mt-5 text-center text-sm leading-6 text-slate-500",
            children: "© 2023 Tailwind Labs Inc. All rights reserved."
          }), l("div", {
            className: "mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700",
            children: [r(U, {
              href: "/privacy-policy",
              children: "Privacy policy"
            }), r("div", {
              className: "h-4 w-px bg-slate-500/20"
            }), r(U, {
              href: "/changelog",
              children: "Changelog"
            })]
          })]
        })
      })]
    })
  }

  function K5({
    email: e
  }) {
    const {
      data: t,
      setData: n,
      put: a,
      processing: i,
      recentlySuccessful: s,
      errors: o
    } = ut({
      email: e
    });

    function c(u) {
      u.preventDefault(), a(u.target.action, {
        preserveScroll: !0
      })
    }
    return l("section", {
      className: "px-4 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "M8.75 12.75a3 3 0 0 1 3-3h8.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-8.5a3 3 0 0 1-3-3v-6.5Z",
            fill: "#fff",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "M10.28 10.22a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm12.5 1.06a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-13.56 0 4.835 4.836 1.061-1.06-4.836-4.836-1.06 1.06Zm12.5-1.06-4.836 4.835 1.06 1.061 4.836-4.836-1.06-1.06Zm-7.664 5.896a2.75 2.75 0 0 0 3.889 0l-1.061-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06Z",
            fill: "#0EA5E9"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Email address"
        })]
      }), r(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: l("p", {
          children: ["Update your email address associated with your account. This email is not associated with billing. If you want to update your billing address, contact", " ", r("a", {
            href: "mailto:assist@paddle.com",
            children: "assist@paddle.com"
          }), "."]
        })
      }), l("form", {
        onSubmit: c,
        action: "/account-settings/email",
        className: "mt-8",
        children: [r(Fe, {
          label: "Email address",
          id: "email",
          type: "email",
          error: o.email,
          value: t.email,
          onChange: u => n("email", u.target.value),
          required: !0
        }), l("div", {
          className: "mt-4 sm:flex sm:items-center sm:space-x-4 sm:space-x-reverse",
          children: [s && r("p", {
            className: "order-1 -mt-3 mb-6 text-sm font-medium text-gray-500 sm:my-0",
            children: "Email updated successfully."
          }), r(Ge, {
            type: "submit",
            disabled: i,
            children: "Update email"
          })]
        })]
      })]
    })
  }

  function X5() {
    const {
      data: e,
      setData: t,
      put: n,
      reset: a,
      processing: i,
      recentlySuccessful: s,
      errors: o
    } = ut({
      old_password: "",
      new_password: ""
    });

    function c(u) {
      u.preventDefault(), n(u.target.action, {
        preserveScroll: !0,
        onSuccess: () => a("old_password", "new_password")
      })
    }
    return l("section", {
      className: "px-4 pt-16 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "M9.75 16.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-3.5Z",
            fill: "#fff",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "M12.75 13.25V11A3.25 3.25 0 0 1 16 7.75v0A3.25 3.25 0 0 1 19.25 11v2.25M16 17.75v1.5",
            stroke: "#0EA5E9",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Password"
        })]
      }), r(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: r("p", {
          children: "Update your password associated with your account."
        })
      }), l("form", {
        onSubmit: c,
        action: "/account-settings/password",
        className: "mt-8",
        children: [r(Fe, {
          label: "Current password",
          id: "old_password",
          type: "password",
          error: o.old_password,
          value: e.old_password,
          onChange: u => t("old_password", u.target.value),
          required: !0
        }), r(Fe, {
          className: "mt-6",
          label: "New password",
          id: "new_password",
          type: "password",
          autoComplete: "new-password",
          error: o.new_password,
          value: e.new_password,
          onChange: u => t("new_password", u.target.value),
          required: !0
        }), l("div", {
          className: "mt-6 sm:flex sm:items-center sm:space-x-4 sm:space-x-reverse",
          children: [s && r("p", {
            className: "order-1 -mt-3 mb-6 text-sm font-medium text-gray-500 sm:my-0",
            children: "Password updated successfully."
          }), r(Ge, {
            type: "submit",
            disabled: i,
            children: "Update password"
          })]
        })]
      })]
    })
  }

  function Q5() {
    const {
      data: e,
      setData: t,
      post: n,
      reset: a,
      processing: i,
      recentlySuccessful: s,
      errors: o
    } = ut({
      password: ""
    });

    function c(u) {
      u.preventDefault(), n(u.target.action, {
        preserveScroll: !0,
        onSuccess: () => a("password")
      })
    }
    return l("section", {
      className: "px-4 pt-16 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "m18.75 13.75 2.5 2.25-2.5 2.25M21 16h-6.25M16.25 9.75h-1.5a4 4 0 0 0-4 4v4.5a4 4 0 0 0 4 4h1.5",
            stroke: "#0EA5E9",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Log out other sessions"
        })]
      }), r(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: r("p", {
          children: "Please enter your password to confirm you would like to log out of your other sessions across all of your devices."
        })
      }), l("form", {
        onSubmit: c,
        action: "/logout/other",
        className: "mt-8",
        children: [r(Fe, {
          label: "Your password",
          id: "password",
          type: "password",
          autoComplete: "new-password",
          error: o.password,
          value: e.password,
          onChange: u => t("password", u.target.value),
          required: !0
        }), l("div", {
          className: "mt-4 sm:flex sm:items-center sm:space-x-4 sm:space-x-reverse",
          children: [s && r("p", {
            className: "order-1 -mt-3 mb-6 text-sm font-medium text-gray-500 sm:my-0",
            children: "Other sessions successfully logged out."
          }), r(Ge, {
            type: "submit",
            disabled: i,
            children: "Log out other sessions"
          })]
        })]
      })]
    })
  }

  function co({
    email: e,
    purchases: t
  }) {
    return l(j, {
      children: [r(we, {
        title: "Account Settings",
        description: "Manage the email address and password associated with your Tailwind UI account."
      }), l("div", {
        className: "relative -mb-8 -mt-[5.75rem] overflow-hidden pb-8 pt-[5.75rem]",
        children: [r(pr, {
          title: "Account settings",
          subtitle: "Manage the email address and password associated with your account."
        }), l("div", {
          className: "relative mx-auto max-w-[40rem] space-y-16 divide-y divide-slate-100",
          children: [r(K5, {
            email: e
          }), r(X5, {}), r(Q5, {}), t.length > 0 && r(Os, {
            purchases: t
          })]
        })]
      })]
    })
  }
  co.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const eh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: co
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Xe({
    title: e,
    children: t
  }) {
    return l("section", {
      children: [r("h3", {
        className: "text-sm font-semibold leading-7 text-slate-400",
        children: e
      }), r("dl", {
        className: "mt-2 divide-y divide-slate-100",
        children: t
      })]
    })
  }

  function X({
    question: e,
    children: t
  }) {
    return l("details", {
      className: "group py-4 marker:content-['']",
      children: [l("summary", {
        className: "flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&::-webkit-details-marker]:hidden",
        children: [e, l("svg", {
          className: "ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [r("path", {
            d: "M18 12H6"
          }), r("path", {
            className: "group-open:hidden",
            d: "M12 6v12"
          })]
        })]
      }), r("div", {
        className: "pb-6 pt-6",
        children: r("div", {
          className: "prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500",
          children: t
        })
      })]
    })
  }

  function We({
    className: e,
    subtle: t = !1
  }) {
    return l("div", {
      className: B("flex", e),
      children: [r("div", {
        className: "w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
      }), r("div", {
        className: "-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
      }), !t && l(j, {
        children: [r("div", {
          className: "-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
        }), r("div", {
          className: "-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
        })]
      })]
    })
  }

  function dr({
    id: e,
    className: t,
    ...n
  }) {
    return l("svg", {
      className: B("absolute inset-0 h-full w-full", t),
      xmlns: "http://www.w3.org/2000/svg",
      children: [r("defs", {
        children: r("pattern", {
          id: e,
          width: "32",
          height: "32",
          patternUnits: "userSpaceOnUse",
          ...n,
          children: r("path", {
            d: "M0 32V.5H32",
            fill: "none",
            stroke: "currentColor"
          })
        })
      }), r("rect", {
        width: "100%",
        height: "100%",
        fill: `url(#${e})`
      })]
    })
  }
  const Bl = [{
    name: "Alex MacCaw",
    body: "Tailwind UI made it possible for me to ship the first version of Reflect entirely by myself, while still being immensely proud of the design.",
    handle: 'Founder of <a class="text-slate-900" href="https://reflect.app/" target="_blank">Reflect</a> & <a class="text-slate-900" href="https://clearbit.com/" target="_blank">Clearbit</a>',
    img: "/img/maccaw-profile.jpeg"
  }, {
    name: "Ben Barbersmith",
    body: "Yet again Tailwind and Tailwind UI are dramatically speeding up my frontend work. At this point Tailwind UI is hands-down the highest ROI digital asset I’ve ever bought.",
    handle: '<a href="https://twitter.com/benbarbersmith/status/1527291090889371651" target="_blank">@benbarbersmith</a>',
    img: "/img/benbarbersmith-profile.jpeg"
  }, {
    name: "Justin Jackson",
    body: "We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind UI. It’s turned a project I might have never made the time to tackle into something I could finish and ship in an hour.",
    handle: 'Founder of <a class="text-slate-900" href="https://transistor.fm/" target="_blank">Transistor</a>',
    img: "/img/justin-profile.jpg"
  }];

  function th() {
    return l("section", {
      className: "px-6 lg:-mt-8",
      children: [r("h2", {
        className: "sr-only",
        children: "Testimonials"
      }), r("div", {
        className: "mx-auto max-w-2xl lg:max-w-3xl",
        children: l(be.Group, {
          defaultIndex: 1,
          children: [r(be.List, {
            className: "flex justify-center space-x-4 pt-2",
            children: Bl.map(e => l(be, {
              className: ({
                selected: t
              }) => B("h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition [&:focus:not(:focus-visible)]:outline-none", {
                "opacity-40": !t,
                "-translate-y-2": t
              }),
              children: [r("img", {
                src: e.img,
                alt: ""
              }), r("span", {
                className: "sr-only",
                children: e.name
              })]
            }, e.name))
          }), r(be.Panels, {
            className: "mt-10",
            children: Bl.map(e => l(be.Panel, {
              as: "figure",
              className: "text-center",
              children: [r("blockquote", {
                className: "text-2xl leading-9 text-slate-900",
                children: r("p", {
                  className: "before:content-['“'] after:content-['”']",
                  children: e.body
                })
              }), l("figcaption", {
                className: "mt-8",
                children: [r("span", {
                  className: "block text-base font-medium leading-7 text-slate-900",
                  children: e.name
                }), r("span", {
                  className: "text-sm text-slate-600",
                  dangerouslySetInnerHTML: {
                    __html: e.handle
                  }
                })]
              })]
            }, e.name))
          })]
        })
      })]
    })
  }

  function uo({
    personal: e,
    team: t,
    templates: n,
    tailwindVersion: a
  }) {
    return l(j, {
      children: [r(we, {
        title: "Lifetime Access to Tailwind CSS Components & Templates"
      }), l("div", {
        className: "-mt-[5.75rem] overflow-hidden pb-20 sm:pb-24 lg:pb-32",
        children: [l("div", {
          className: "relative bg-slate-50 pb-16 pt-[5.75rem]",
          children: [r("img", {
            src: "/img/beams-pricing.png",
            alt: "",
            className: "absolute left-0 top-0 z-10 w-[90.4375rem] max-w-none"
          }), r("div", {
            className: "relative z-20 mx-auto max-w-container px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8",
            children: l("div", {
              className: "mx-auto max-w-[45rem] text-center",
              children: [r("h1", {
                className: "text-base font-semibold leading-7 text-sky-500",
                children: "All-access"
              }), r("p", {
                className: "mt-4 text-5xl font-extrabold leading-[3.5rem] tracking-tight text-slate-900",
                children: "Get everything, forever."
              }), r("p", {
                className: "mt-4 text-lg text-slate-700",
                children: "Get lifetime access to 500+ components and every template available today, plus any new content we add in the future for a simple one-time price."
              })]
            })
          })]
        }), r("div", {
          className: "mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8",
          children: l("div", {
            className: "mx-auto grid grid-cols-1 items-start gap-8 sm:max-w-lg lg:max-w-[63rem] lg:grid-cols-2",
            children: [l("div", {
              className: "relative",
              children: [r("div", {
                className: "absolute -top-72 bottom-[40%] left-1/2 -ml-[55vw] w-[110vw] bg-slate-50 text-slate-600/10 lg:hidden",
                children: r(dr, {
                  id: "all-access-grid-pattern-2",
                  x: "50%",
                  y: "100%",
                  patternTransform: "translate(0 -1)",
                  className: "z-10 [mask-image:linear-gradient(to_top,white,transparent)]"
                })
              }), l("div", {
                className: "relative z-20 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl",
                children: [r(We, {
                  className: "absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96"
                }), l("div", {
                  className: "relative bg-white p-5 py-10 sm:rounded-3xl sm:px-10",
                  children: [l("div", {
                    className: "flex",
                    children: [l("svg", {
                      className: "h-14 w-14 flex-none",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      stroke: "#0EA5E9",
                      strokeWidth: "1.5",
                      children: [r("path", {
                        d: "M28 33.75c-4.388 0-8.36 2.385-10.627 5.636-1.006 1.443-.428 3.372 1.131 4.187C21.326 45.048 24.771 46 28 46c3.23 0 6.674-.952 9.496-2.427 1.559-.815 2.137-2.744 1.13-4.187C36.36 36.136 32.389 33.75 28 33.75Z",
                        fill: "#E0F2FE"
                      }), r("circle", {
                        cx: "28",
                        cy: "24",
                        r: "6.25",
                        fill: "#E0F2FE"
                      }), r("path", {
                        d: "M44.002 38A19.912 19.912 0 0 0 48 26c0-11.046-8.954-20-20-20S8 14.954 8 26c0 4.502 1.488 8.657 3.998 12",
                        strokeLinecap: "round"
                      })]
                    }), l("div", {
                      className: "ml-4",
                      children: [r("h2", {
                        className: "text-base font-semibold leading-7 text-slate-900",
                        children: "Personal"
                      }), r("p", {
                        className: "text-sm leading-6 text-slate-700",
                        children: "For individuals working on their next big idea."
                      })]
                    })]
                  }), l("div", {
                    className: "relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl",
                    children: [r(We, {
                      className: "absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96"
                    }), l("div", {
                      className: "relative flex flex-col bg-slate-50 px-5 py-8 sm:rounded-2xl",
                      children: [l("p", {
                        className: "flex items-center justify-center",
                        children: [e.price.advertised !== e.price.amount && l("span", {
                          className: "mr-3 block text-lg font-semibold text-slate-500 line-through",
                          children: [e.price.symbol, e.price.advertised]
                        }), l("span", {
                          className: "text-[2.5rem] leading-none text-slate-900",
                          children: [e.price.country, e.price.symbol, r("span", {
                            className: "font-bold",
                            children: e.price.amount
                          })]
                        }), l("span", {
                          className: "ml-3 text-sm",
                          children: [r("span", {
                            className: "font-semibold text-slate-900",
                            children: "one-time payment"
                          }), r("br", {}), r("span", {
                            className: "text-slate-500",
                            children: "plus local taxes"
                          })]
                        })]
                      }), l("p", {
                        className: "order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-500 sm:space-x-2",
                        children: [r("span", {
                          className: "hidden sm:inline",
                          children: "Lifetime access."
                        }), r("span", {
                          className: "hidden sm:inline",
                          children: "Unlimited projects."
                        }), r("span", {
                          className: "hidden sm:inline",
                          children: "Free updates."
                        }), r("span", {
                          className: "sm:hidden",
                          children: "Includes lifetime access and free updates."
                        })]
                      }), e.price.advertised !== e.price.amount && l("div", {
                        className: "relative mt-6 flex items-start rounded-xl border border-slate-600/10 bg-slate-100 p-3",
                        children: [r("svg", {
                          className: "h-6 w-6",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          children: r("path", {
                            d: "M19.4067 15.0682L18.9748 14.455C18.7377 14.6219 18.6181 14.9106 18.6677 15.1963L19.4067 15.0682ZM19.4071 8.93218L18.6682 8.8039C18.6186 9.08961 18.7382 9.37832 18.9752 9.54532L19.4071 8.93218ZM18.3643 5.6359L18.8946 5.10557L18.3643 5.6359ZM15.068 4.59307L14.4548 5.02495C14.6218 5.26205 14.9105 5.38162 15.1963 5.33201L15.068 4.59307ZM8.93194 4.59319L8.8037 5.33214C9.08943 5.38172 9.37814 5.26214 9.54513 5.02504L8.93194 4.59319ZM4.59298 8.93208L5.02488 9.54524C5.26194 9.37826 5.38151 9.08957 5.33193 8.80386L4.59298 8.93208ZM4.59286 15.0678L5.33181 15.1961C5.38141 14.9104 5.26185 14.6217 5.02478 14.4547L4.59286 15.0678ZM5.6357 18.3641L5.10537 18.8945L5.10537 18.8945L5.6357 18.3641ZM8.93204 19.407L9.54521 18.9751C9.37821 18.738 9.08949 18.6184 8.80375 18.668L8.93204 19.407ZM15.068 19.4069L15.1962 18.6679C14.9105 18.6184 14.6218 18.7379 14.4548 18.975L15.068 19.4069ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM9.75 9.75V9C9.33579 9 9 9.33579 9 9.75H9.75ZM9.7575 9.75H10.5075C10.5075 9.33579 10.1717 9 9.7575 9V9.75ZM9.7575 9.7575V10.5075C10.1717 10.5075 10.5075 10.1717 10.5075 9.7575H9.7575ZM9.75 9.7575H9C9 10.1717 9.33579 10.5075 9.75 10.5075V9.7575ZM14.25 14.25V13.5C13.8358 13.5 13.5 13.8358 13.5 14.25H14.25ZM14.2575 14.25H15.0075C15.0075 13.8358 14.6717 13.5 14.2575 13.5V14.25ZM14.2575 14.2575V15.0075C14.6717 15.0075 15.0075 14.6717 15.0075 14.2575H14.2575ZM14.25 14.2575H13.5C13.5 14.6717 13.8358 15.0075 14.25 15.0075V14.2575ZM20.25 12C20.25 13.014 19.7476 13.9108 18.9748 14.455L19.8385 15.6814C20.9931 14.8683 21.75 13.5226 21.75 12H20.25ZM18.9752 9.54532C19.7478 10.0896 20.25 10.9862 20.25 12H21.75C21.75 10.4777 20.9934 9.13219 19.8391 8.31903L18.9752 9.54532ZM17.834 6.16623C18.551 6.88326 18.8299 7.87262 18.6682 8.8039L20.1461 9.06045C20.3876 7.669 19.9713 6.18221 18.8946 5.10557L17.834 6.16623ZM15.1963 5.33201C16.1276 5.17034 17.1169 5.44919 17.834 6.16623L18.8946 5.10557C17.818 4.02892 16.3312 3.61256 14.9397 3.85412L15.1963 5.33201ZM12 3.75C13.0139 3.75 13.9106 4.25228 14.4548 5.02495L15.6812 4.16119C14.868 3.00672 13.5224 2.25 12 2.25V3.75ZM9.54513 5.02504C10.0893 4.25232 10.986 3.75 12 3.75V2.25C10.4775 2.25 9.13188 3.00678 8.31875 4.16133L9.54513 5.02504ZM6.1662 6.1664C6.88319 5.44941 7.87247 5.17054 8.8037 5.33214L9.06017 3.85423C7.66879 3.61278 6.18211 4.02916 5.10554 5.10574L6.1662 6.1664ZM5.33193 8.80386C5.17035 7.87264 5.44922 6.88338 6.1662 6.1664L5.10554 5.10574C4.02898 6.1823 3.61259 7.66895 3.85402 9.06031L5.33193 8.80386ZM3.75 12C3.75 10.9861 4.25224 10.0895 5.02488 9.54524L4.16108 8.31893C3.00667 9.13207 2.25 10.4776 2.25 12H3.75ZM5.02478 14.4547C4.2522 13.9104 3.75 13.0138 3.75 12H2.25C2.25 13.5223 3.00661 14.8678 4.16094 15.681L5.02478 14.4547ZM6.16603 17.8338C5.449 17.1168 5.17014 16.1274 5.33181 15.1961L3.85391 14.9395C3.61236 16.331 4.02873 17.8178 5.10537 18.8945L6.16603 17.8338ZM8.80375 18.668C7.87245 18.8297 6.88308 18.5508 6.16603 17.8338L5.10537 18.8945C6.18203 19.9711 7.66886 20.3875 9.06033 20.1459L8.80375 18.668ZM12 20.25C10.9861 20.25 10.0894 19.7477 9.54521 18.9751L8.31888 19.8389C9.13201 20.9933 10.4776 21.75 12 21.75V20.25ZM14.4548 18.975C13.9106 19.7477 13.0139 20.25 12 20.25V21.75C13.5224 21.75 14.8681 20.9932 15.6812 19.8387L14.4548 18.975ZM17.8334 17.8336C17.1165 18.5505 16.1273 18.8294 15.1962 18.6679L14.9398 20.1458C16.3311 20.3871 17.8176 19.9707 18.8941 18.8943L17.8334 17.8336ZM18.6677 15.1963C18.8292 16.1275 18.5503 17.1167 17.8334 17.8336L18.8941 18.8943C19.9705 17.8178 20.3869 16.3313 20.1456 14.94L18.6677 15.1963ZM9.53033 15.5303L15.5303 9.53033L14.4697 8.46967L8.46967 14.4697L9.53033 15.5303ZM9.75 10.5H9.7575V9H9.75V10.5ZM9.0075 9.75V9.7575H10.5075V9.75H9.0075ZM9.7575 9.0075H9.75V10.5075H9.7575V9.0075ZM10.5 9.7575V9.75H9V9.7575H10.5ZM9.375 9.75C9.375 9.54289 9.54289 9.375 9.75 9.375V10.875C10.3713 10.875 10.875 10.3713 10.875 9.75H9.375ZM9.75 9.375C9.95711 9.375 10.125 9.54289 10.125 9.75H8.625C8.625 10.3713 9.12868 10.875 9.75 10.875V9.375ZM10.125 9.75C10.125 9.95711 9.95711 10.125 9.75 10.125V8.625C9.12868 8.625 8.625 9.12868 8.625 9.75H10.125ZM9.75 10.125C9.54289 10.125 9.375 9.95711 9.375 9.75H10.875C10.875 9.12868 10.3713 8.625 9.75 8.625V10.125ZM14.25 15H14.2575V13.5H14.25V15ZM13.5075 14.25V14.2575H15.0075V14.25H13.5075ZM14.2575 13.5075H14.25V15.0075H14.2575V13.5075ZM15 14.2575V14.25H13.5V14.2575H15ZM13.875 14.25C13.875 14.0429 14.0429 13.875 14.25 13.875V15.375C14.8713 15.375 15.375 14.8713 15.375 14.25H13.875ZM14.25 13.875C14.4571 13.875 14.625 14.0429 14.625 14.25H13.125C13.125 14.8713 13.6287 15.375 14.25 15.375V13.875ZM14.625 14.25C14.625 14.4571 14.4571 14.625 14.25 14.625V13.125C13.6287 13.125 13.125 13.6287 13.125 14.25H14.625ZM14.25 14.625C14.0429 14.625 13.875 14.4571 13.875 14.25H15.375C15.375 13.6287 14.8713 13.125 14.25 13.125V14.625Z",
                            fill: "#94A3B8"
                          })
                        }), l("p", {
                          className: "ml-2 text-sm leading-6 text-slate-700",
                          children: [r("strong", {
                            className: "font-semibold text-slate-900",
                            children: "Discounted"
                          }), " — since you own other products."]
                        })]
                      }), e.upgradable_to_standard_license ? r(pe, {
                        href: e.checkout_url,
                        size: "sm",
                        className: "mt-6 w-full",
                        children: "Upgrade to standard license"
                      }) : e.purchaseable ? r(pe, {
                        href: e.checkout_url,
                        size: "sm",
                        className: "mt-6 w-full",
                        children: "Get all-access"
                      }) : l("div", {
                        className: "mt-6 flex justify-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 ring-1 ring-slate-900/10",
                        children: [r("svg", {
                          className: "mr-1 h-5 w-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          children: r("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M5 13l4 4L19 7"
                          })
                        }), "You already own this"]
                      })]
                    })]
                  }), r("h3", {
                    className: "sr-only",
                    children: "All-access features"
                  }), l("ul", {
                    className: "mt-8 space-y-8 text-sm leading-6 text-slate-700",
                    children: [l("li", {
                      className: "flex",
                      children: [l("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 32 32",
                        className: "h-8 w-8 flex-none",
                        children: [r("path", {
                          fill: "#fff",
                          d: "M0 0h32v32H0z"
                        }), r("path", {
                          fill: "#E0F2FE",
                          d: "M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
                        }), r("path", {
                          fill: "#0EA5E9",
                          d: "M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
                        })]
                      }), l("p", {
                        className: "ml-6",
                        children: [r("strong", {
                          className: "font-semibold text-slate-900",
                          children: "Over 500+ components"
                        }), " ", "— everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more."]
                      })]
                    }), l("li", {
                      className: "flex",
                      children: [l("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 32 32",
                        className: "h-8 w-8 flex-none",
                        children: [r("path", {
                          fill: "#fff",
                          d: "M0 0h32v32H0z"
                        }), r("rect", {
                          width: "23",
                          height: "22",
                          x: "3",
                          y: "5",
                          stroke: "#0EA5E9",
                          strokeLinejoin: "round",
                          strokeWidth: "1.5",
                          rx: "2"
                        }), r("rect", {
                          width: "10",
                          height: "18",
                          x: "19",
                          y: "9",
                          fill: "#E0F2FE",
                          stroke: "#0EA5E9",
                          strokeLinejoin: "round",
                          strokeWidth: "1.5",
                          rx: "2"
                        }), r("circle", {
                          cx: "6",
                          cy: "8",
                          r: "1",
                          fill: "#0EA5E9"
                        }), r("circle", {
                          cx: "9",
                          cy: "8",
                          r: "1",
                          fill: "#0EA5E9"
                        }), r("path", {
                          stroke: "#0EA5E9",
                          strokeWidth: "1.5",
                          d: "M3 11h16"
                        })]
                      }), l("p", {
                        className: "ml-6",
                        children: [r("strong", {
                          className: "font-semibold text-slate-900",
                          children: "Every site template"
                        }), " ", "— beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js."]
                      })]
                    }), l("li", {
                      className: "flex",
                      children: [l("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 32 32",
                        className: "h-8 w-8 flex-none",
                        children: [r("path", {
                          fill: "#fff",
                          d: "M0 0h32v32H0z"
                        }), r("path", {
                          fill: "#E0F2FE",
                          d: "M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
                        }), r("path", {
                          stroke: "#0EA5E9",
                          strokeLinecap: "round",
                          strokeWidth: "1.5",
                          d: "M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
                        }), r("circle", {
                          cx: "16",
                          cy: "16",
                          r: "14",
                          stroke: "#0EA5E9",
                          strokeWidth: "1.5"
                        })]
                      }), l("p", {
                        className: "ml-6",
                        children: [r("strong", {
                          className: "font-semibold text-slate-900",
                          children: "Lifetime access"
                        }), " — get instant access to everything we have today, plus any new components and templates we add in the future."]
                      })]
                    })]
                  })]
                })]
              })]
            }), l("div", {
              className: "relative",
              children: [r("div", {
                className: "absolute -left-[calc(1rem+55vw)] -top-72 bottom-14 hidden w-[110vw] bg-slate-50 text-slate-600/10 lg:block",
                children: r(dr, {
                  id: "all-access-grid-pattern",
                  x: "50%",
                  y: "100%",
                  patternTransform: "translate(0 -1)",
                  className: "z-10 [mask-image:linear-gradient(to_top,white,transparent)]"
                })
              }), l("div", {
                className: "relative z-10 -mx-4 bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] px-5 py-10 shadow-lg sm:mx-0 sm:rounded-3xl sm:px-10",
                children: [l("div", {
                  className: "flex",
                  children: [l("svg", {
                    className: "h-14 w-14 flex-none",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [r("circle", {
                      cx: "21",
                      cy: "26",
                      r: "4.25",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5"
                    }), r("path", {
                      d: "M15.318 43.465c-.972-.798-1.374-2.073-1.196-3.318l.03-.207A6.918 6.918 0 0 1 21 34c3.443 0 6.389 2.717 6.875 6.125l.463-4.162a6.704 6.704 0 0 1 13.325 0l.457 4.112c.132 1.19-.26 2.394-1.172 3.169A19.92 19.92 0 0 1 28 48a19.918 19.918 0 0 1-12.682-4.535Z",
                      fill: "#94A3B8",
                      fillOpacity: ".2"
                    }), r("path", {
                      d: "m14.152 39.94.742.106-.742-.106Zm13.723.185-.742.106a.75.75 0 0 0 1.488-.023l-.746-.083Zm.463-4.162-.746-.083.746.083Zm13.325 0 .745-.083-.745.083Zm.457 4.112-.746.083.746-.083Zm-1.172 3.169-.486-.572.486.572Zm-25.63.221-.476.58.476-.58Zm-1.909-3.631-.03.207 1.486.212.03-.207-1.486-.212ZM21 33.25a7.668 7.668 0 0 0-7.59 6.584l1.484.212A6.168 6.168 0 0 1 21 34.75v-1.5Zm7.618 6.769C28.082 36.266 24.84 33.25 21 33.25v1.5c3.046 0 5.695 2.418 6.133 5.481l1.485-.212Zm-1.026-4.139-.462 4.162 1.49.166.463-4.162-1.49-.166ZM35 29.25a7.454 7.454 0 0 0-7.408 6.63l1.491.166A5.954 5.954 0 0 1 35 30.75v-1.5Zm7.408 6.63A7.454 7.454 0 0 0 35 29.25v1.5a5.954 5.954 0 0 1 5.918 5.296l1.49-.166Zm.457 4.112-.457-4.111-1.49.165.456 4.112 1.491-.166Zm-2.403 2.68A19.17 19.17 0 0 1 28 47.25v1.5a20.67 20.67 0 0 0 13.434-4.935l-.972-1.143ZM28 47.25a19.167 19.167 0 0 1-12.206-4.364l-.952 1.159A20.668 20.668 0 0 0 28 48.75v-1.5Zm13.374-7.092c.11.981-.218 1.925-.912 2.514l.972 1.143c1.13-.96 1.587-2.426 1.431-3.823l-1.49.166ZM13.38 40.04c-.209 1.462.257 3.014 1.462 4.004l.952-1.16c-.738-.605-1.076-1.604-.93-2.632l-1.484-.212Z",
                      fill: "#94A3B8"
                    }), r("circle", {
                      cx: "34.5",
                      cy: "21.5",
                      r: "4.75",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5"
                    }), r("path", {
                      d: "M10.676 38A19.908 19.908 0 0 1 8 28C8 16.954 16.954 8 28 8s20 8.954 20 20c0 3.643-.974 7.058-2.676 10",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5",
                      strokeLinecap: "round"
                    })]
                  }), l("div", {
                    className: "ml-4",
                    children: [r("h2", {
                      className: "text-base font-semibold leading-7 text-white",
                      children: "Teams"
                    }), r("p", {
                      className: "text-sm leading-6 text-slate-400",
                      children: "For product teams and agencies."
                    })]
                  })]
                }), l("div", {
                  className: "relative -mx-5 mt-8 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl",
                  children: [l("p", {
                    className: "flex items-center justify-center",
                    children: [t.price.advertised !== t.price.amount && l("span", {
                      className: "mr-3 block text-lg font-semibold text-slate-400 line-through",
                      children: [t.price.symbol, t.price.advertised]
                    }), l("span", {
                      className: "text-[2.5rem] leading-none text-white",
                      children: [t.price.country, t.price.symbol, r("span", {
                        className: "font-bold",
                        children: t.price.amount
                      })]
                    }), l("span", {
                      className: "ml-3 text-sm",
                      children: [r("span", {
                        className: "font-semibold text-white",
                        children: "one-time payment"
                      }), r("br", {}), r("span", {
                        className: "text-slate-400",
                        children: "plus local taxes"
                      })]
                    })]
                  }), l("p", {
                    className: "order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-400 sm:space-x-2",
                    children: [r("span", {
                      className: "hidden sm:inline",
                      children: "Lifetime access."
                    }), r("span", {
                      className: "hidden sm:inline",
                      children: "Unlimited projects."
                    }), r("span", {
                      className: "hidden sm:inline",
                      children: "Free updates."
                    }), r("span", {
                      className: "sm:hidden",
                      children: "Includes lifetime access and free updates."
                    })]
                  }), t.price.advertised !== t.price.amount && l("div", {
                    className: "relative mt-6 flex items-start rounded-xl border border-slate-800 bg-slate-900 p-3",
                    children: [r("svg", {
                      className: "h-6 w-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: r("path", {
                        d: "M19.4067 15.0682L18.9748 14.455C18.7377 14.6219 18.6181 14.9106 18.6677 15.1963L19.4067 15.0682ZM19.4071 8.93218L18.6682 8.8039C18.6186 9.08961 18.7382 9.37832 18.9752 9.54532L19.4071 8.93218ZM18.3643 5.6359L18.8946 5.10557L18.3643 5.6359ZM15.068 4.59307L14.4548 5.02495C14.6218 5.26205 14.9105 5.38162 15.1963 5.33201L15.068 4.59307ZM8.93194 4.59319L8.8037 5.33214C9.08943 5.38172 9.37814 5.26214 9.54513 5.02504L8.93194 4.59319ZM4.59298 8.93208L5.02488 9.54524C5.26194 9.37826 5.38151 9.08957 5.33193 8.80386L4.59298 8.93208ZM4.59286 15.0678L5.33181 15.1961C5.38141 14.9104 5.26185 14.6217 5.02478 14.4547L4.59286 15.0678ZM5.6357 18.3641L5.10537 18.8945L5.10537 18.8945L5.6357 18.3641ZM8.93204 19.407L9.54521 18.9751C9.37821 18.738 9.08949 18.6184 8.80375 18.668L8.93204 19.407ZM15.068 19.4069L15.1962 18.6679C14.9105 18.6184 14.6218 18.7379 14.4548 18.975L15.068 19.4069ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM9.75 9.75V9C9.33579 9 9 9.33579 9 9.75H9.75ZM9.7575 9.75H10.5075C10.5075 9.33579 10.1717 9 9.7575 9V9.75ZM9.7575 9.7575V10.5075C10.1717 10.5075 10.5075 10.1717 10.5075 9.7575H9.7575ZM9.75 9.7575H9C9 10.1717 9.33579 10.5075 9.75 10.5075V9.7575ZM14.25 14.25V13.5C13.8358 13.5 13.5 13.8358 13.5 14.25H14.25ZM14.2575 14.25H15.0075C15.0075 13.8358 14.6717 13.5 14.2575 13.5V14.25ZM14.2575 14.2575V15.0075C14.6717 15.0075 15.0075 14.6717 15.0075 14.2575H14.2575ZM14.25 14.2575H13.5C13.5 14.6717 13.8358 15.0075 14.25 15.0075V14.2575ZM20.25 12C20.25 13.014 19.7476 13.9108 18.9748 14.455L19.8385 15.6814C20.9931 14.8683 21.75 13.5226 21.75 12H20.25ZM18.9752 9.54532C19.7478 10.0896 20.25 10.9862 20.25 12H21.75C21.75 10.4777 20.9934 9.13219 19.8391 8.31903L18.9752 9.54532ZM17.834 6.16623C18.551 6.88326 18.8299 7.87262 18.6682 8.8039L20.1461 9.06045C20.3876 7.669 19.9713 6.18221 18.8946 5.10557L17.834 6.16623ZM15.1963 5.33201C16.1276 5.17034 17.1169 5.44919 17.834 6.16623L18.8946 5.10557C17.818 4.02892 16.3312 3.61256 14.9397 3.85412L15.1963 5.33201ZM12 3.75C13.0139 3.75 13.9106 4.25228 14.4548 5.02495L15.6812 4.16119C14.868 3.00672 13.5224 2.25 12 2.25V3.75ZM9.54513 5.02504C10.0893 4.25232 10.986 3.75 12 3.75V2.25C10.4775 2.25 9.13188 3.00678 8.31875 4.16133L9.54513 5.02504ZM6.1662 6.1664C6.88319 5.44941 7.87247 5.17054 8.8037 5.33214L9.06017 3.85423C7.66879 3.61278 6.18211 4.02916 5.10554 5.10574L6.1662 6.1664ZM5.33193 8.80386C5.17035 7.87264 5.44922 6.88338 6.1662 6.1664L5.10554 5.10574C4.02898 6.1823 3.61259 7.66895 3.85402 9.06031L5.33193 8.80386ZM3.75 12C3.75 10.9861 4.25224 10.0895 5.02488 9.54524L4.16108 8.31893C3.00667 9.13207 2.25 10.4776 2.25 12H3.75ZM5.02478 14.4547C4.2522 13.9104 3.75 13.0138 3.75 12H2.25C2.25 13.5223 3.00661 14.8678 4.16094 15.681L5.02478 14.4547ZM6.16603 17.8338C5.449 17.1168 5.17014 16.1274 5.33181 15.1961L3.85391 14.9395C3.61236 16.331 4.02873 17.8178 5.10537 18.8945L6.16603 17.8338ZM8.80375 18.668C7.87245 18.8297 6.88308 18.5508 6.16603 17.8338L5.10537 18.8945C6.18203 19.9711 7.66886 20.3875 9.06033 20.1459L8.80375 18.668ZM12 20.25C10.9861 20.25 10.0894 19.7477 9.54521 18.9751L8.31888 19.8389C9.13201 20.9933 10.4776 21.75 12 21.75V20.25ZM14.4548 18.975C13.9106 19.7477 13.0139 20.25 12 20.25V21.75C13.5224 21.75 14.8681 20.9932 15.6812 19.8387L14.4548 18.975ZM17.8334 17.8336C17.1165 18.5505 16.1273 18.8294 15.1962 18.6679L14.9398 20.1458C16.3311 20.3871 17.8176 19.9707 18.8941 18.8943L17.8334 17.8336ZM18.6677 15.1963C18.8292 16.1275 18.5503 17.1167 17.8334 17.8336L18.8941 18.8943C19.9705 17.8178 20.3869 16.3313 20.1456 14.94L18.6677 15.1963ZM9.53033 15.5303L15.5303 9.53033L14.4697 8.46967L8.46967 14.4697L9.53033 15.5303ZM9.75 10.5H9.7575V9H9.75V10.5ZM9.0075 9.75V9.7575H10.5075V9.75H9.0075ZM9.7575 9.0075H9.75V10.5075H9.7575V9.0075ZM10.5 9.7575V9.75H9V9.7575H10.5ZM9.375 9.75C9.375 9.54289 9.54289 9.375 9.75 9.375V10.875C10.3713 10.875 10.875 10.3713 10.875 9.75H9.375ZM9.75 9.375C9.95711 9.375 10.125 9.54289 10.125 9.75H8.625C8.625 10.3713 9.12868 10.875 9.75 10.875V9.375ZM10.125 9.75C10.125 9.95711 9.95711 10.125 9.75 10.125V8.625C9.12868 8.625 8.625 9.12868 8.625 9.75H10.125ZM9.75 10.125C9.54289 10.125 9.375 9.95711 9.375 9.75H10.875C10.875 9.12868 10.3713 8.625 9.75 8.625V10.125ZM14.25 15H14.2575V13.5H14.25V15ZM13.5075 14.25V14.2575H15.0075V14.25H13.5075ZM14.2575 13.5075H14.25V15.0075H14.2575V13.5075ZM15 14.2575V14.25H13.5V14.2575H15ZM13.875 14.25C13.875 14.0429 14.0429 13.875 14.25 13.875V15.375C14.8713 15.375 15.375 14.8713 15.375 14.25H13.875ZM14.25 13.875C14.4571 13.875 14.625 14.0429 14.625 14.25H13.125C13.125 14.8713 13.6287 15.375 14.25 15.375V13.875ZM14.625 14.25C14.625 14.4571 14.4571 14.625 14.25 14.625V13.125C13.6287 13.125 13.125 13.6287 13.125 14.25H14.625ZM14.25 14.625C14.0429 14.625 13.875 14.4571 13.875 14.25H15.375C15.375 13.6287 14.8713 13.125 14.25 13.125V14.625Z",
                        fill: "#94A3B8"
                      })
                    }), l("p", {
                      className: "ml-2 text-sm leading-6 text-slate-400",
                      children: [r("strong", {
                        className: "font-semibold text-slate-100",
                        children: "Discounted"
                      }), " — since you own other products."]
                    })]
                  }), t.purchaseable ? r(pe, {
                    href: t.checkout_url,
                    size: "sm",
                    variant: "dark",
                    className: "mt-6 w-full",
                    children: "Get all-access for your team"
                  }) : l("div", {
                    className: "mt-6 flex justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-400 ring-1 ring-white/10",
                    children: [r("svg", {
                      className: "mr-1 h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      children: r("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M5 13l4 4L19 7"
                      })
                    }), "You already own this"]
                  })]
                }), l("div", {
                  className: "mt-8 flex",
                  children: [l("svg", {
                    className: "h-8 w-8 flex-none",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [r("path", {
                      d: "M2.75 21.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-4.5Z",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5",
                      strokeLinejoin: "round"
                    }), r("path", {
                      d: "M5.75 18.594V17a3.25 3.25 0 0 1 5.327-2.5l.173.156",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }), r("circle", {
                      cx: "9",
                      cy: "24",
                      r: "1",
                      fill: "#94A3B8"
                    }), r("path", {
                      d: "M8.75 10.25v-3.5a4 4 0 0 1 4-4h12.5a4 4 0 0 1 4 4v18.5a4 4 0 0 1-4 4h-6.5",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }), r("path", {
                      d: "M18.75 17.75h.27c2.967 0 4.978 2.425 5.995 4.055.51.816.162 1.812-.76 2.216-1.288.563-3.234 1.229-5.234 1.229h-.271",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }), r("circle", {
                      cx: "19",
                      cy: "11",
                      r: "3.25",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      stroke: "#94A3B8",
                      strokeWidth: "1.5",
                      strokeLinejoin: "round"
                    })]
                  }), r("div", {
                    className: "ml-6 text-sm leading-6 text-slate-400",
                    children: l("p", {
                      children: [r("strong", {
                        className: "font-semibold text-slate-100",
                        children: "Get access for your entire team"
                      }), " ", "— team licenses include access for up to 25 people to accommodate even the largest teams at your company."]
                    })
                  })]
                })]
              })]
            })]
          })
        })]
      }), r(th, {}), r("section", {
        className: "mx-auto mt-32 w-full px-4 sm:px-6 lg:mt-40 lg:max-w-5xl lg:px-8 xl:max-w-container",
        children: l("div", {
          className: "mx-auto max-w-2xl lg:max-w-none",
          children: [l("section", {
            className: "grid grid-cols-1 gap-x-8 gap-y-6 pb-20 xl:grid-cols-4",
            children: [r("h2", {
              className: "text-3xl font-bold tracking-tight text-slate-900",
              children: "What’s included"
            }), r("div", {
              className: "col-span-3",
              children: l("div", {
                className: "max-w-[54rem] text-lg leading-8 text-slate-600",
                children: [r("p", {
                  children: "When you purchase an all-access license, you get access to everything. Every component example, every production-ready website template, and everything we ever add to Tailwind UI in the future."
                }), r("p", {
                  className: "mt-6",
                  children: "There's no recurring subscription and you never have to pay for any updates. You just pay once, and get access to all of our premium Tailwind CSS resources forever."
                })]
              })
            })]
          }), l("div", {
            className: "divide-y divide-slate-700/10 border-t border-slate-700/10",
            children: [l("section", {
              className: "grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4",
              children: [r("h3", {
                className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
                children: "Components"
              }), l("div", {
                className: "col-span-3",
                children: [r("p", {
                  className: "max-w-3xl text-base leading-8 text-slate-700",
                  children: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content."
                }), l("div", {
                  className: "mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-3",
                  children: [l("div", {
                    children: [l("div", {
                      className: "relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200",
                      children: [r("img", {
                        src: "/img/all-access-thumbnail-application-ui.png",
                        alt: ""
                      }), r("div", {
                        className: "absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
                      })]
                    }), l("p", {
                      className: "mt-6 text-slate-700",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Application UI"
                      }), " – Buttons, form controls, application layouts, dialogs, and more."]
                    })]
                  }), l("div", {
                    children: [l("div", {
                      className: "relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200",
                      children: [r("img", {
                        src: "/img/all-access-thumbnail-marketing.png",
                        alt: ""
                      }), r("div", {
                        className: "absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
                      })]
                    }), l("p", {
                      className: "mt-6 text-slate-700",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Marketing"
                      }), " – Heros, feature sections, newsletter sign up forms, and more."]
                    })]
                  }), l("div", {
                    children: [l("div", {
                      className: "relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200",
                      children: [r("img", {
                        src: "/img/all-access-thumbnail-ecomm.png",
                        alt: ""
                      }), r("div", {
                        className: "absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
                      })]
                    }), l("p", {
                      className: "mt-6 text-slate-700",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Ecommerce"
                      }), " – Checkout forms, shopping carts, product views, and more."]
                    })]
                  })]
                }), r("div", {
                  className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10",
                  children: [{
                    title: "React, Vue, or vanilla HTML",
                    description: "every component includes a functioning example in React and Vue, and an HTML-only version if you want to bring-your-own-JavaScript.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M16 29.25 6.75 24V8h18.5v16L16 29.25Z",
                        fill: "#FCE7F3"
                      }), r("path", {
                        d: "M6.75 24 16 29.25M6.75 24V8h18.5v16m-18.5 0-4 2.25m13.25 3L25.25 24M16 29.25V13.5M25.25 24l4-2.25",
                        stroke: "#EC4899",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M6.75 8 16 2.75 25.25 8 16 13.25 6.75 8Z",
                        fill: "#fff",
                        stroke: "#EC4899",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Hundreds of ideas",
                    description: "every category includes a wide variety of UI patterns, so you can always find the perfect starting point for whatever you’re building.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M24.75 2.75h.5a4 4 0 0 1 4 4v.5M7.25 29.25h-.5a4 4 0 0 1-4-4v-.5M24.75 29.25h.5a4 4 0 0 0 4-4v-.5M7.25 2.75h-.5a4 4 0 0 0-4 4v.5",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M20.028 7.75h-8.056a2 2 0 0 0-1.803 1.134l-3.003 6.25a2 2 0 0 0 0 1.732l3.003 6.25a2 2 0 0 0 1.803 1.134h8.056a2 2 0 0 0 1.803-1.134l3.003-6.25a2 2 0 0 0 0-1.732l-3.003-6.25a2 2 0 0 0-1.803-1.134Z",
                        fill: "#E0F2FE",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("circle", {
                        cx: 16,
                        cy: 16,
                        r: "2.25",
                        fill: "#fff",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }].map((i, s) => r(gn, {
                    ...i
                  }, s))
                })]
              })]
            }), l("section", {
              className: "grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4",
              children: [r("h3", {
                className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
                children: "Templates"
              }), l("div", {
                className: "col-span-3",
                children: [r("p", {
                  className: "max-w-3xl text-base leading-8 text-slate-700",
                  children: "Visually-stunning, easy to customize website templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS."
                }), r("div", {
                  className: "mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-3",
                  children: n.map(i => l(U, {
                    href: i.url,
                    children: [l("div", {
                      className: "relative aspect-[280/190] overflow-hidden rounded-xl bg-slate-200",
                      children: [r("img", {
                        src: i.image_url,
                        alt: ""
                      }), r("div", {
                        className: "absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
                      })]
                    }), l("p", {
                      className: "mt-6 text-slate-700",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: i.name
                      }), " –", " ", i.summary]
                    })]
                  }, i.id))
                }), r("div", {
                  className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10",
                  children: [{
                    title: "Built with Next.js",
                    description: "each template is a well-structured, thoughtfully componentized Next.js project, giving you a codebase that’s productive and enjoyable to work in.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M16 29.25 6.75 24V8h18.5v16L16 29.25Z",
                        fill: "#FCE7F3"
                      }), r("path", {
                        d: "M6.75 24 16 29.25M6.75 24V8h18.5v16m-18.5 0-4 2.25m13.25 3L25.25 24M16 29.25V13.5M25.25 24l4-2.25",
                        stroke: "#EC4899",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M6.75 8 16 2.75 25.25 8 16 13.25 6.75 8Z",
                        fill: "#fff",
                        stroke: "#EC4899",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Ready to deploy",
                    description: "every template is production-ready and easily deployed anywhere that you can deploy a Next.js application, like Vercel or Netlify.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M24.75 2.75h.5a4 4 0 0 1 4 4v.5M7.25 29.25h-.5a4 4 0 0 1-4-4v-.5M24.75 29.25h.5a4 4 0 0 0 4-4v-.5M7.25 2.75h-.5a4 4 0 0 0-4 4v.5",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M20.028 7.75h-8.056a2 2 0 0 0-1.803 1.134l-3.003 6.25a2 2 0 0 0 0 1.732l3.003 6.25a2 2 0 0 0 1.803 1.134h8.056a2 2 0 0 0 1.803-1.134l3.003-6.25a2 2 0 0 0 0-1.732l-3.003-6.25a2 2 0 0 0-1.803-1.134Z",
                        fill: "#E0F2FE",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("circle", {
                        cx: 16,
                        cy: 16,
                        r: "2.25",
                        fill: "#fff",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }].map((i, s) => r(gn, {
                    ...i
                  }, s))
                })]
              })]
            }), l("section", {
              className: "grid grid-cols-1 gap-x-8 gap-y-10 pb-20 pt-10 xl:grid-cols-4",
              children: [r("h3", {
                className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
                children: "Built for production"
              }), r("div", {
                className: "xl:col-span-3",
                children: r("div", {
                  className: "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10",
                  children: [{
                    title: "Easy to customize",
                    description: "everything is styled with utility classes, directly in the markup. No configuration variables or complex CSS to wrestle with, just open the markup in your editor and change whatever you want.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M24.75 2.75h.5a4 4 0 0 1 4 4v.5M7.25 29.25h-.5a4 4 0 0 1-4-4v-.5M24.75 29.25h.5a4 4 0 0 0 4-4v-.5M7.25 2.75h-.5a4 4 0 0 0-4 4v.5",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M20.028 7.75h-8.056a2 2 0 0 0-1.803 1.134l-3.003 6.25a2 2 0 0 0 0 1.732l3.003 6.25a2 2 0 0 0 1.803 1.134h8.056a2 2 0 0 0 1.803-1.134l3.003-6.25a2 2 0 0 0 0-1.732l-3.003-6.25a2 2 0 0 0-1.803-1.134Z",
                        fill: "#E0F2FE",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("circle", {
                        cx: 16,
                        cy: 16,
                        r: "2.25",
                        fill: "#fff",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Keyboard accessible",
                    description: "everything we build is keyboard accessible, and we carefully craft the markup to deliver the best screenreader experience we know how.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M11.75 19.5a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0Z",
                        fill: "#ECFEFF",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "m25 25 4.25 4.25",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                      }), r("path", {
                        d: "M7.583 17.25H6.75a4 4 0 0 1-4-4v-6.5a4 4 0 0 1 4-4h6.5a4 4 0 0 1 4 4v.833",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M6.75 13.25 10 6.75l2.103 4.5H7.897",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Built by the Tailwind CSS team",
                    description: "you can trust that all of the code is written following Tailwind CSS best practices, because it’s written by the same team who created and maintain the framework.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M2.75 6.75a4 4 0 0 1 4-4h18.5a4 4 0 0 1 4 4v18.5a4 4 0 0 1-4 4H4.75a2 2 0 0 1-2-2V6.75Z",
                        fill: "#F3E8FF",
                        stroke: "#A855F7",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M2.75 18.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-8.5Z",
                        fill: "#fff",
                        stroke: "#A855F7",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M8.25 20.75 5.75 23l2.5 2.25M11.75 20.75l2.5 2.25-2.5 2.25M3 7.25h26",
                        stroke: "#A855F7",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Production-ready",
                    description: "our components and templates are rigorously tested in the latest versions of all browsers, and handle lots of edge-cases you might easily miss yourself.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M11.75 19.5a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0Z",
                        fill: "#ECFEFF",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "m25 25 4.25 4.25",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                      }), r("path", {
                        d: "M7.583 17.25H6.75a4 4 0 0 1-4-4v-6.5a4 4 0 0 1 4-4h6.5a4 4 0 0 1 4 4v.833",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M6.75 13.25 10 6.75l2.103 4.5H7.897",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }].map((i, s) => r(gn, {
                    ...i
                  }, s))
                })
              })]
            }), l("section", {
              className: "grid grid-cols-1 gap-x-8 gap-y-10 pb-20 pt-10 sm:pb-24 lg:pb-32 xl:grid-cols-4",
              children: [r("h3", {
                className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
                children: "Lifetime access"
              }), r("div", {
                className: "xl:col-span-3",
                children: r("div", {
                  className: "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10",
                  children: [{
                    title: "No subscription",
                    description: "all-access licenses are a one-time purchase, we’ll never charge you again after the initial payment.",
                    icon: l(j, {
                      children: [r("circle", {
                        cx: "16",
                        cy: "16",
                        r: "13.25",
                        fill: "#E0E7FF",
                        stroke: "#6366F1",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "m7 7 18 18",
                        stroke: "#6366F1",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Unlimited projects",
                    description: "buy once and use our components and templates for as many projects as you like.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M2.75 6.75a2 2 0 0 1 2-2h8.308a2 2 0 0 1 1.759 1.049L24.25 23.25H2.75V6.75Z",
                        fill: "#fff",
                        stroke: "#A855F7",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M2.75 8.75h22.5a4 4 0 0 1 4 4v10.5a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4V8.75Z",
                        fill: "#F3E8FF"
                      }), r("path", {
                        d: "M2.75 8.75V8a.75.75 0 0 0-.75.75h.75Zm0 .75h22.5V8H2.75v1.5Zm25.75 3.25v10.5H30v-10.5h-1.5ZM25.25 26.5H6.75V28h18.5v-1.5ZM3.5 23.25V8.75H2v14.5h1.5Zm3.25 3.25a3.25 3.25 0 0 1-3.25-3.25H2A4.75 4.75 0 0 0 6.75 28v-1.5Zm21.75-3.25a3.25 3.25 0 0 1-3.25 3.25V28A4.75 4.75 0 0 0 30 23.25h-1.5ZM25.25 9.5a3.25 3.25 0 0 1 3.25 3.25H30A4.75 4.75 0 0 0 25.25 8v1.5Z",
                        fill: "#A855F7"
                      }), r("path", {
                        d: "M13.75 21c0-1.243 1.065-2.25 2.358-2.25 1.294 0 3.392 1.007 3.392 2.25s-2.09 2.25-3.392 2.25S13.75 22.243 13.75 21Z",
                        fill: "#fff"
                      }), r("path", {
                        d: "M19.5 21c0 1.243 2.09 2.25 3.392 2.25S25.25 22.243 25.25 21s-1.065-2.25-2.358-2.25c-1.294 0-3.392 1.007-3.392 2.25Zm0 0c0 1.243-2.09 2.25-3.392 2.25S13.75 22.243 13.75 21s1.065-2.25 2.358-2.25c1.294 0 3.392 1.007 3.392 2.25Z",
                        stroke: "#A855F7",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }, {
                    title: "Free updates",
                    description: "any improvements we make, new components we build, and new templates we design are included with your original purchase.",
                    icon: l(j, {
                      children: [r("path", {
                        d: "M25.75 2.75h.5a3 3 0 0 1 3 3v20.5a3 3 0 0 1-3 3h-.5",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M2.75 5.75a3 3 0 0 1 3-3h14.5a3 3 0 0 1 3 3v20.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3V5.75Z",
                        fill: "#ECFEFF",
                        stroke: "#06B6D4",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), r("path", {
                        d: "M12.346 21.294a.75.75 0 0 0-1.192.912l1.192-.912Zm6.369-2.955a.75.75 0 0 0-.93-1.178l.93 1.178Zm-5.053 5.911-.596.456a.75.75 0 0 0 1.321-.265l-.725-.191Zm.725.19c.435-1.652 1.496-3.173 2.491-4.307a17.21 17.21 0 0 1 1.698-1.68l.107-.089.026-.02a.091.091 0 0 1 .005-.005h.001l-.465-.589-.465-.588h-.002l-.003.003a2.413 2.413 0 0 1-.01.008l-.035.029-.127.105a18.716 18.716 0 0 0-1.857 1.836c-1.06 1.208-2.294 2.937-2.815 4.916l1.451.382Zm-3.233-2.234 1.912 2.5 1.191-.912-1.911-2.5-1.192.912Z",
                        fill: "#06B6D4"
                      })]
                    })
                  }].map((i, s) => r(gn, {
                    ...i
                  }, s))
                })
              })]
            })]
          })]
        })
      }), r("div", {
        className: "border-t border-slate-700/10 pt-20 sm:pt-24 lg:pt-32",
        children: r(rh, {
          tailwindVersion: a
        })
      })]
    })
  }

  function gn({
    title: e,
    description: t
  }) {
    return r("div", {
      children: l("p", {
        className: "text-base leading-7 text-slate-700",
        children: [r("strong", {
          className: "font-semibold text-slate-900",
          children: e
        }), " —", " ", r("span", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })]
      })
    })
  }

  function rh({
    className: e,
    tailwindVersion: t
  }) {
    return r("section", {
      id: "faqs",
      className: B("mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8", e),
      children: l("div", {
        className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0",
        children: [l("div", {
          className: "lg:col-span-4",
          children: [r("h2", {
            className: "text-base font-semibold leading-7 text-indigo-500",
            children: "Frequently asked questions"
          }), r("p", {
            className: "mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]",
            children: "Everything you need to know"
          })]
        }), l("div", {
          className: "-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6",
          children: [l(Xe, {
            title: "General",
            children: [r(X, {
              question: "What does “lifetime access” mean exactly?",
              children: l("p", {
                children: ["Buying an all-access license is a", " ", r("strong", {
                  children: "one-time purchase, with no recurring subscription"
                }), ". When you purchase all-access, you get access to everything in Tailwind UI forever."]
              })
            }), l(X, {
              question: "What does “free updates” include?",
              children: [r("p", {
                children: "When you purchase an all-access license, you get access to every component package and every site template available today, plus any additional component packages or templates we release in the future at no additional cost."
              }), r("p", {
                children: "This means that if we add a brand new component package like “Journalism” or design a new social media website template, access to those products are included in your original purchase."
              }), l("p", {
                children: ["To get an idea of what updates have looked like in the past,", " ", r(U, {
                  href: "/changelog",
                  children: "check out our changelog"
                }), "."]
              })]
            })]
          }), l(Xe, {
            title: "Compatibility",
            children: [l(X, {
              question: "Are Figma, Sketch, or Adobe XD files included?",
              children: [r("p", {
                children: "No, design assets for tools like Figma, Sketch, or Adobe XD are not included."
              }), r("p", {
                children: "We don't produce high-quality design artifacts as part of our own design and development process, so building these extra resources means we can't spend as much time creating new components and templates in code which is where we believe we can provide the most value."
              })]
            }), l(X, {
              question: "What JS framework is used?",
              children: [l("p", {
                children: ["Our ", r(U, {
                  href: "/templates",
                  children: "website templates"
                }), " are built using Next.js, so all of the markup is written using React."]
              }), l("p", {
                children: ["Our ", r(U, {
                  href: "/components",
                  children: "components"
                }), " are provided in three formats: React, Vue, and vanilla HTML."]
              }), l("p", {
                children: ["The React and Vue examples are fully interactive, and are powered by", " ", r("a", {
                  href: "https://headlessui.dev",
                  children: "Headless UI"
                }), " — a library of unstyled components we designed to integrate perfectly with Tailwind CSS. Headless UI supports both React and Vue 3, but is not compatible with Vue 2."]
              }), l("p", {
                children: ["The vanilla HTML examples ", r("strong", {
                  children: "do not include any JavaScript"
                }), " and are designed for people who prefer to write any necessary JavaScript themselves."]
              }), r("p", {
                children: "Most of the components do not rely on JS at all, but for the ones that do (dropdowns, modals, etc.) we've provided some simple comments in the HTML to explain things like what classes you need to use for different states (like a toggle switch being on or off), or what classes we recommend for transitioning elements on to or off of the screen (like a modal opening)."
              }), l("p", {
                children: ["To get a better idea of how this looks in practice,", " ", r("a", {
                  href: "/documentation#integrating-with-javascript-frameworks",
                  children: "check out our documentation"
                }), "."]
              })]
            }), r(X, {
              question: "What version of Tailwind CSS is used?",
              children: l("p", {
                children: ["Everything in Tailwind UI is designed and developed for the latest version of Tailwind CSS, which is currently Tailwind CSS v", t, "."]
              })
            }), l(X, {
              question: "What browsers are supported?",
              children: [r("p", {
                children: "The components and templates in Tailwind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge."
              }), r("p", {
                children: "We don't support Internet Explorer 11."
              })]
            })]
          }), l(Xe, {
            title: "Licensing",
            children: [l(X, {
              question: "Do I need to purchase a license for each project I work on?",
              children: [r("p", {
                children: "Unlike most other templates/themes, you don't have to buy a new Tailwind UI license every time you want to use it on a new project."
              }), r("p", {
                children: "As long as what you're building is allowed as per the license, you can build as many sites as you want without ever having to buy an additional license."
              }), l("p", {
                children: ["For more information and examples,", " ", r(U, {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI for client projects?",
              children: [r("p", {
                children: "Yes! As long what you're building is a custom website developed for a single client, you can totally use components and templates in Tailwind UI to help build it."
              }), r("p", {
                children: "The only thing you can't do is use Tailwind UI to build a website or template that is resold to multiple clients."
              }), l("p", {
                children: ["For more information and examples, ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI for my own commercial projects?",
              children: [r("p", {
                children: "Absolutely! Your license gives you permission to build as many of your own projects as you like, whether those are simple public websites or SaaS applications that end users need to pay to access."
              }), r("p", {
                children: "As long as what you’re building isn’t a website builder or other tool that customers can use to create their own sites using elements that originate from Tailwind UI, you’re good to go."
              }), l("p", {
                children: ["For more information and examples, ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI in open source projects?",
              children: [r("p", {
                children: "Yep! As long as what you're building is some sort of actual website and not a derivative component library, theme builder, or other product where the primary purpose is clearly to repackage and redistribute our components, it's totally okay for that project to be open source."
              }), l("p", {
                children: ["For more information and examples of what is and isn't okay,", " ", r(U, {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I sell templates/themes I build with Tailwind UI?",
              children: [r("p", {
                children: "No, you cannot use Tailwind UI to create derivative products like themes, UI kits, page builders, or anything else where you would be repackaging and redistributing our components or templates for someone else to use to build their own sites."
              }), l("p", {
                children: ["For more information and examples of what is and isn't okay,", " ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I upgrade to a team license later?",
              children: [r("p", {
                children: "Yup! If you're a solo developer you can start with a regular license, and then upgrade to the team license later if other developers join your team."
              }), r("p", {
                children: 'There is an "Upgrade to Team License" option under the "Account" menu within the Tailwind UI app after logging in.'
              })]
            }), l(X, {
              question: "Can I purchase a team license that includes more than 25 seats?",
              children: [r("p", {
                children: "In general, if you need more than 25 seats we recommend purchasing multiple team licenses — one for each team at your company who needs access."
              }), r("p", {
                children: "For example, if you run an ecommerce business, you might purchase a team license for the storefront team, then down the road another team license for the marketing team, then another for the data science team, and so on."
              }), l("p", {
                children: ["If you need more than 25 seats because you're a large agency or other type of company that isn't really organized into separate divisions/teams, contact us at", " ", r("a", {
                  href: "mailto:support@tailwindui.com",
                  children: "support@tailwindui.com"
                }), " for large team pricing."]
              })]
            })]
          }), l(Xe, {
            title: "Support",
            children: [l(X, {
              question: "Do you offer technical support?",
              children: [r("p", {
                children: "Tailwind UI is a self-serve product, meaning that while we do offer customer support for things like account management and licensing related concerns, the expectation is that customers have the requisite knowledge of Tailwind CSS, HTML, React, and Vue to use the product successfully."
              }), l("p", {
                children: ["Because every project is different and the way independently authored pieces of code interact can be complex and time-consuming to understand,", " ", r("strong", {
                  children: "we do not offer technical support or consulting"
                }), "."]
              }), r("p", {
                children: "Tailwind UI customers do get access to a private Discord community where you can ask questions and help others with their questions in return, but we don't offer first-party technical support or consulting here ourselves."
              })]
            }), r(X, {
              question: "What is your refund policy?",
              children: l("p", {
                children: ["If you're unhappy with your purchase for any reason, email us at", " ", r("a", {
                  href: "mailto:support@tailwindui.com",
                  children: "support@tailwindui.com"
                }), " within 30 days and we'll refund you in full, no questions asked."]
              })
            })]
          })]
        })]
      })
    })
  }
  uo.layout = e => r(De, {
    children: e
  });
  const nh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: uo
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Nt({
    children: e,
    footer: t
  }) {
    return r(j, {
      children: l("main", {
        className: "relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8",
        children: [r("img", {
          src: "/img/beams-cover@95.jpg",
          alt: "",
          className: "absolute left-1/2 top-0 -ml-[47.5rem] w-[122.5rem] max-w-none"
        }), r("div", {
          className: "absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]",
          children: r(dr, {
            id: "grid-bg",
            x: "100%",
            patternTransform: "translate(0 -1)"
          })
        }), l("div", {
          className: "relative flex flex-1 flex-col items-center justify-center pb-16 pt-12",
          children: [r(cr, {
            className: "mx-auto mb-16 h-6 w-auto text-slate-900"
          }), e]
        }), t && r("footer", {
          className: "relative shrink-0",
          children: t
        })]
      })
    })
  }

  function ah({
    upgradeToTeam: e = !1
  }) {
    return l(j, {
      children: [r(we, {
        title: "You’ve got everything!"
      }), r(Nt, {
        children: l("div", {
          className: "max-w-2xl text-center",
          children: [r("h1", {
            className: "text-3xl font-extrabold text-slate-900 sm:text-4xl",
            children: "You’ve got everything!"
          }), r("div", {
            className: "mt-6 text-base leading-7 text-slate-600",
            children: "You already own a license for every Tailwind UI package so there is nothing for you to upgrade to at the moment. Thanks so much for your support!"
          }), r(pe, {
            href: "/",
            className: "mt-6",
            children: "Go back"
          })]
        }),
        footer: e && l("div", {
          className: "relative z-10 flex flex-none items-start justify-center",
          children: [l("svg", {
            width: "32",
            height: "32",
            fill: "none",
            className: "flex-none",
            children: [r("path", {
              d: "M6.75 20.5l-.75.006V20.5h.75zm.77 2.494a.75.75 0 01-1.5.012l1.5-.012zM17 23a.75.75 0 01-1.5 0H17zm8 .5a.75.75 0 01-1.5 0H25zM6.77 20.055l.747.07-.746-.07zM23.5 23a.75.75 0 011.5 0h-1.5zm-14-12.5a2 2 0 002 2V14A3.5 3.5 0 018 10.5h1.5zm2 2a2 2 0 002-2H15a3.5 3.5 0 01-3.5 3.5v-1.5zm2-2a2 2 0 00-2-2V7a3.5 3.5 0 013.5 3.5h-1.5zm-2-2a2 2 0 00-2 2H8A3.5 3.5 0 0111.5 7v1.5zm6 5a2 2 0 002 2V17a3.5 3.5 0 01-3.5-3.5h1.5zm2 2a2 2 0 002-2H23a3.5 3.5 0 01-3.5 3.5v-1.5zm2-2a2 2 0 00-2-2V10a3.5 3.5 0 013.5 3.5h-1.5zm-2-2a2 2 0 00-2 2H16a3.5 3.5 0 013.5-3.5v1.5zm-12 8.994l.02 2.5-1.5.012-.02-2.5 1.5-.012zm8 2.506v-2.5H17V23h-1.5zm4-5a5.5 5.5 0 015.5 5.5h-1.5a4 4 0 00-4-4V18zm-8-1.5a4 4 0 00-3.983 3.625l-1.493-.14A5.5 5.5 0 0111.5 15v1.5zm-3.983 3.625a4.059 4.059 0 00-.017.375H6c0-.173.008-.345.024-.514l1.493.139zM19.5 19.5a3.984 3.984 0 00-2.754 1.1l-1.033-1.088A5.484 5.484 0 0119.5 18v1.5zm-8-4.5a5.5 5.5 0 015.476 4.986l-1.493.139A4 4 0 0011.5 16.5V15zm5.476 4.986c.016.17.024.34.024.514h-1.5a4.08 4.08 0 00-.017-.375l1.493-.14zM25 23v.5h-1.5V23H25z",
              className: "fill-gray-600"
            }), r("path", {
              d: "M28 23v-.75h-1.5V23H28zm-1.5-13v.75H28V10h-1.5zM8.75 3.5h12.5V2H8.75v1.5zM3.5 23.25V8.75H2v14.5h1.5zm17.75 5.25H21V30h.25v-1.5zM11 28.5H8.75V30H11v-1.5zm10 0h-5V30h5v-1.5zm-5 0h-5V30h5v-1.5zM26.5 23v.25H28V23h-1.5zm0-14.25V10H28V8.75h-1.5zM2 23.25A6.75 6.75 0 008.75 30v-1.5a5.25 5.25 0 01-5.25-5.25H2zM21.25 30A6.75 6.75 0 0028 23.25h-1.5c0 2.9-2.35 5.25-5.25 5.25V30zm0-26.5c2.9 0 5.25 2.35 5.25 5.25H28A6.75 6.75 0 0021.25 2v1.5zM8.75 2A6.75 6.75 0 002 8.75h1.5c0-2.9 2.35-5.25 5.25-5.25V2z",
              className: "fill-gray-400"
            }), r("path", {
              d: "M27.25 14v5M29.75 16.5h-5",
              className: "stroke-gray-600",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          }), l("p", {
            className: "ml-6 max-w-lg flex-auto text-sm text-gray-600",
            children: [r("strong", {
              className: "font-semibold text-gray-900",
              children: "Looking for a team license?"
            }), " ", "You can", " ", r(U, {
              href: "/upgrade-team",
              className: "underline",
              children: "upgrade your license to a team license"
            }), " ", "for a reduced price."]
          })]
        })
      })]
    })
  }
  const ih = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ah
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function mo({
    entries: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "Changelog",
        description: "Stay up to date with all of the latest additions and improvements we've made to Tailwind UI."
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        children: [r(pr, {
          title: "Changelog",
          subtitle: "Stay up to date with all of the latest additions and improvements we've made to Tailwind UI.",
          children: l("form", {
            action: "https://app.convertkit.com/forms/1074308/subscriptions",
            method: "post",
            className: "mt-6 flex justify-center",
            children: [r("h2", {
              className: "sr-only",
              children: "Subscribe via email"
            }), l("div", {
              className: "relative w-64 shrink",
              children: [r("label", {
                htmlFor: "subscribe-email",
                className: "sr-only",
                children: "Email address"
              }), r("input", {
                id: "subscribe-email",
                name: "email_address",
                type: "email",
                required: !0,
                className: "block h-10 w-full rounded-md bg-white pl-12 pr-3 text-slate-900 shadow-md shadow-black/5 ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6",
                placeholder: "Subscribe via email"
              }), l("svg", {
                className: "pointer-events-none absolute left-3 top-2 h-6 w-6 stroke-slate-400",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [r("path", {
                  d: "M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"
                }), r("path", {
                  d: "m6 7 6 5 6-5"
                })]
              })]
            }), r(Ge, {
              type: "submit",
              className: "ml-4 flex-none",
              children: "Subscribe"
            })]
          })
        }), r("div", {
          className: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
          children: e.map((t, n) => l("section", {
            id: t.anchor,
            "aria-labelledby": `${t.anchor}-heading`,
            className: "md:flex",
            children: [r("h2", {
              id: `${t.anchor}-heading`,
              className: "pl-7 text-sm leading-6 text-slate-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right",
              children: r("a", {
                href: `#${t.anchor}`,
                children: t.date
              })
            }), l("div", {
              className: B("relative pl-7 pt-2 md:w-3/4 md:pl-12 md:pt-0", {
                "pb-16": n < e.length - 1
              }),
              children: [r("div", {
                className: B("absolute bottom-0 left-0 w-px bg-slate-200", {
                  "-top-3 md:top-2.5": n === 0,
                  "-top-6 md:top-0": n !== 0
                })
              }), r("div", {
                className: "absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]"
              }), r(Ve, {
                size: "sm",
                className: "max-w-none prose-h3:mb-4 prose-h3:text-base prose-h3:leading-6",
                dangerouslySetInnerHTML: {
                  __html: t.content
                }
              })]
            })]
          }, t.anchor))
        })]
      })]
    })
  }
  mo.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const lh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mo
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function sh({
    total: e,
    subtotal: t,
    tax: n,
    taxRate: a,
    taxReady: i
  }) {
    return l("dl", {
      className: "mt-16 hidden divide-y divide-slate-900/5 text-base leading-6 text-slate-700 lg:block",
      children: [l("div", {
        className: "flex justify-between pb-4",
        children: [r("dt", {
          children: "Subtotal"
        }), r("dd", {
          className: "font-semibold text-slate-900",
          children: t
        })]
      }), i ? l("div", {
        className: "flex justify-between py-4",
        children: [l("dt", {
          children: ["Taxes ", a !== "0" && `(${a}%)`]
        }), r("dd", {
          className: "font-semibold text-slate-900",
          children: n
        })]
      }) : l("div", {
        className: "flex justify-between py-4",
        children: [r("dt", {
          children: "Taxes"
        }), r("dd", {
          className: "text-slate-700",
          children: "Calculated at next step"
        })]
      }), l("div", {
        className: "flex justify-between pt-4 font-semibold text-slate-900",
        children: [r("dt", {
          children: "Total price"
        }), r("dd", {
          children: i ? e : t
        })]
      })]
    })
  }

  function oh({
    total: e,
    subtotal: t,
    tax: n,
    taxRate: a,
    taxReady: i
  }) {
    return r(fn, {
      className: "fixed bottom-0 left-0 right-0 z-20 flex flex-col lg:hidden",
      children: ({
        open: s
      }) => l(j, {
        children: [r(tt, {
          as: H.Fragment,
          enter: "ease-in-out duration-150",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-150",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: r(fn.Overlay, {
            className: "fixed inset-0 bg-slate-900/25 backdrop-blur"
          })
        }), r("div", {
          className: B("absolute inset-x-0 bottom-0 h-[12rem] bg-white ring-1 ring-slate-700/10 transition duration-300 ease-in-out", {
            "shadow-[0_0_25px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.04)]": s,
            "translate-y-[7.5rem] shadow-[0_8px_15px_rgba(24,24,27,0.1),0_3px_6px_rgba(24,24,27,0.05)]": !s
          })
        }), r(tt, {
          as: H.Fragment,
          enter: "ease-in-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-150",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: r(fn.Panel, {
            className: "relative px-4 pt-8",
            children: l("dl", {
              className: "mx-auto max-w-md border-b border-slate-900/10 pb-6 text-sm leading-6 text-slate-600",
              children: [l("div", {
                className: "flex justify-between",
                children: [r("dt", {
                  children: "Subtotal"
                }), r("dd", {
                  className: "font-semibold text-slate-900",
                  children: t
                })]
              }), i ? l("div", {
                className: "mt-4 flex justify-between",
                children: [l("dt", {
                  children: ["Taxes ", a !== "0" && `(${a}%)`]
                }), r("dd", {
                  className: "font-semibold text-slate-900",
                  children: n
                })]
              }) : l("div", {
                className: "mt-4 flex justify-between",
                children: [r("dt", {
                  children: "Taxes"
                }), r("dd", {
                  className: "text-slate-700",
                  children: "Calculated at next step"
                })]
              })]
            })
          })
        }), r(fn.Button, {
          className: "relative px-4 py-6 text-base",
          children: l("span", {
            className: "mx-auto flex w-full max-w-md items-center",
            children: [r("span", {
              className: "text-slate-600",
              children: "Total"
            }), r("span", {
              className: "ml-auto font-semibold text-slate-900",
              children: i ? e : t
            }), r("svg", {
              className: B("ml-2 h-6 w-auto flex-none stroke-slate-900 transition duration-100 ease-in-out", {
                "rotate-180": s
              }),
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 25 24",
              children: r("path", {
                d: "m15.75 13.25-3.25-3.5-3.25 3.5",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })
            })]
          })
        })]
      })
    })
  }

  function ch({
    loading: e,
    paddleDown: t
  }) {
    return l("div", {
      children: [e && !t && r("div", {
        className: "grid h-24 place-items-center",
        children: l("svg", {
          className: "h-6 w-6 animate-spin text-slate-600",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [r("circle", {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }), r("path", {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          })]
        })
      }), t && l("div", {
        className: "space-y-4",
        children: [r("p", {
          className: "font-bold text-gray-900",
          children: "Well this is embarrassing…"
        }), r("p", {
          children: "It looks like our payment provider is experiencing down time which means our checkout is unavailable until they resolve it."
        }), r("p", {
          children: "We're working with them to get the issue fixed as quickly as possible, so please check back soon."
        })]
      }), r("div", {
        className: B("-m-[13px]", e && "hidden"),
        children: r("div", {
          className: "paddle-checkout-container"
        })
      })]
    })
  }

  function dh({
    backUrl: e,
    step: t
  }) {
    const n = r("svg", {
      "aria-hidden": "true",
      className: "ml-2 h-6 w-6 stroke-slate-500/40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: r("path", {
        d: "m10.75 8.75 3.5 3.25-3.5 3.25",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    });
    return l("ul", {
      className: "mt-8 hidden space-x-2 text-sm font-medium leading-6 text-slate-700 lg:flex",
      children: [l("li", {
        className: "flex",
        children: [r("a", {
          href: e || "/all-access",
          children: "Packages"
        }), n]
      }), l("li", {
        className: B("flex", {
          "font-semibold text-sky-500": t === 0
        }),
        children: ["Your details", n]
      }), r("li", {
        className: B({
          "font-semibold text-sky-500": t === 1
        }),
        children: "Payment"
      })]
    })
  }

  function uh() {
    return r("section", {
      className: "mt-8 lg:-mb-6",
      children: l("div", {
        className: "relative rounded-2xl bg-slate-200/50 p-6 text-sm leading-6 text-slate-700 backdrop-blur",
        children: [r("div", {
          className: "absolute -left-2 -top-2",
          children: l("svg", {
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 fill-slate-400",
            viewBox: "0 0 24 24",
            children: [r("path", {
              d: "M.354 12.001c0 6.432 5.214 11.646 11.646 11.646s11.646-5.214 11.646-11.646S18.432.355 12 .355.354 5.57.354 12.001z"
            }), r("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M12 5.502a2.161 2.161 0 00-2.124 2.56l.844 4.503a1.302 1.302 0 002.56 0l.844-4.504A2.161 2.161 0 0012 5.502zm0 13a1.625 1.625 0 100-3.25 1.625 1.625 0 000 3.25z",
              clipRule: "evenodd"
            })]
          })
        }), r("h2", {
          className: "text-sm font-semibold leading-6 text-slate-900",
          children: "Restricted license"
        }), l("div", {
          className: "mt-3",
          children: [r("p", {
            children: "This license has the following restrictions:"
          }), l("ul", {
            className: "mt-3 space-y-3",
            children: [l("li", {
              className: "relative pl-6 before:absolute before:left-0 before:top-3 before:-mt-[0.0625rem] before:h-0.5 before:w-2 before:rounded-full before:bg-slate-300",
              children: ["It may be used solely for", " ", r("span", {
                className: "font-medium text-slate-900",
                children: "educational purposes"
              }), " and cannot be used for commercial/client projects."]
            }), r("li", {
              className: "relative pl-6 before:absolute before:left-0 before:top-3 before:-mt-[0.0625rem] before:h-0.5 before:w-2 before:rounded-full before:bg-slate-300",
              children: "Students must be removed from the license (team) when they complete their studies."
            })]
          })]
        })]
      })
    })
  }

  function mh() {
    return r("section", {
      className: "mt-8 lg:-mb-6",
      children: l("div", {
        className: "relative rounded-2xl bg-slate-200/50 p-6 text-sm leading-6 text-slate-700 backdrop-blur",
        children: [r("div", {
          className: "absolute -left-2 -top-2",
          children: l("svg", {
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 fill-slate-400",
            viewBox: "0 0 24 24",
            children: [r("path", {
              d: "M.354 12.001c0 6.432 5.214 11.646 11.646 11.646s11.646-5.214 11.646-11.646S18.432.355 12 .355.354 5.57.354 12.001z"
            }), r("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M12 5.502a2.161 2.161 0 00-2.124 2.56l.844 4.503a1.302 1.302 0 002.56 0l.844-4.504A2.161 2.161 0 0012 5.502zm0 13a1.625 1.625 0 100-3.25 1.625 1.625 0 000 3.25z",
              clipRule: "evenodd"
            })]
          })
        }), r("h2", {
          className: "text-sm font-semibold leading-6 text-slate-900",
          children: "Restricted license"
        }), l("div", {
          className: "mt-3",
          children: [r("p", {
            children: "A restricted license is available for individuals if:"
          }), l("ul", {
            className: "mt-3 space-y-3",
            children: [l("li", {
              className: "relative pl-6 before:absolute before:left-0 before:top-3 before:-mt-[0.0625rem] before:h-0.5 before:w-2 before:rounded-full before:bg-slate-300",
              children: ["You are a student using Tailwind UI purely for", " ", r("span", {
                className: "font-medium text-slate-900",
                children: "educational purposes"
              })]
            }), l("li", {
              className: "relative pl-6 before:absolute before:left-0 before:top-3 before:-mt-[0.0625rem] before:h-0.5 before:w-2 before:rounded-full before:bg-slate-300",
              children: ["You are an individual using Tailwind UI for commercial/client projects and", " ", r("span", {
                className: "font-medium text-slate-900",
                children: "your annual personal income does not exceed $30,000 USD"
              })]
            })]
          })]
        })]
      })
    })
  }

  function Fa(e, t, n) {
    return new Intl.NumberFormat(e, {
      style: "currency",
      currency: t,
      currencyDisplay: "symbol"
    }).format(n)
  }

  function ph(e, t) {
    return e === 0 ? "0" : parseFloat((parseFloat(t) / e * 100).toFixed(1)).toString()
  }
  let hh = ["Checkout.Loaded", "Checkout.Payment.Selection"],
    Ra = {
      UPDATE_PRICING(e, t) {
        return {
          ...e,
          currency: t.payload.currency,
          tax: t.payload.tax,
          total: t.payload.total
        }
      },
      UPDATE_ACTIVE_STEP(e, t) {
        let n = {
          ...e
        };
        t.payload === "Checkout.Location.Submit" ? n.taxReady = !0 : t.payload === "Checkout.Loaded" && (n.loading = !1);
        let a = hh.indexOf(t.payload);
        return a !== -1 && (n.step = a), n
      }
    };

  function fh(e, t) {
    var n;
    return (n = Ra[t.type]) == null ? void 0 : n.call(Ra, e, t)
  }
  let Pr = {
    callbacks: [],
    register: e => (Pr.callbacks.push(e), function () {
      Pr.callbacks = Pr.callbacks.filter(n => n !== e)
    })
  };

  function gh(e) {
    x.useEffect(() => {
      let t = Pr.register(e);
      return Paddle.Setup({
        vendor: 104876,
        eventCallback: n => {
          Pr.callbacks.forEach(a => a(n))
        }
      }), () => t()
    }, [])
  }

  function vh({
    preferredLanguage: e,
    product: t
  }) {
    let [n, a] = x.useState(!1), [i, s] = x.useReducer(fh, {
      step: 0,
      taxReady: !1,
      loading: !0,
      currency: t.price.currency,
      tax: 0,
      total: t.price.amount
    }), {
      step: o,
      loading: c,
      taxReady: u
    } = i, d = x.useMemo(() => Fa(e, i.currency, i.tax), [i.currency, i.tax]), b = x.useMemo(() => Fa(e, i.currency, i.total), [i.currency, i.total]), w = x.useMemo(() => Fa(e, i.currency, (i.total - i.tax).toFixed(2)), [i.currency, i.total, i.tax]), h = x.useMemo(() => ph(i.total - i.tax, i.tax), [i.total, i.tax]), y = x.useCallback(p => s({
      type: "UPDATE_ACTIVE_STEP",
      payload: p
    }), []), m = x.useCallback(p => {
      s({
        type: "UPDATE_PRICING",
        payload: {
          currency: p.currency,
          tax: parseFloat(p.total_tax),
          total: parseFloat(p.total)
        }
      })
    }, []);
    return gh(p => {
      try {
        y(p.event), m(p.eventData.checkout.prices.customer)
      } catch {
        a(!0)
      }
    }), x.useEffect(() => {
      Paddle.Checkout.open({
        method: "inline",
        override: t.payLink,
        disableLogout: !1,
        frameTarget: "paddle-checkout-container",
        frameInitialHeight: 416,
        frameStyle: "width: 100%; background-color: transparent; border: none;"
      })
    }, [t.payLink]), l(j, {
      children: [r(we, {
        title: "Checkout",
        children: r("style", {
          children: ":root { --html-bg-color: #f8fafc }"
        })
      }), l("div", {
        className: "flex flex-auto flex-col overflow-hidden lg:flex-row",
        children: [l("div", {
          className: "absolute inset-x-0 top-0 overflow-hidden pl-[50%] lg:left-[32rem] lg:pl-0 xl:left-[34rem]",
          children: [r("img", {
            src: "/img/beams-checkout@95.jpg",
            alt: "",
            className: "-ml-[48rem] w-[124.125rem] max-w-none lg:-ml-[32rem] lg:-mt-[15.9375rem]"
          }), r(dr, {
            id: "grid-pattern",
            x: "50%",
            className: "text-slate-900/[0.045] [mask-image:linear-gradient(to_bottom,white,transparent)]"
          })]
        }), r("div", {
          className: "shrink-0 px-4 lg:order-2 lg:min-w-0 lg:flex-1 lg:px-16 xl:px-20",
          children: r("div", {
            className: "mx-auto grid max-w-md grid-cols-1 lg:mx-0 lg:max-w-lg",
            children: l("div", {
              className: "relative py-10 lg:pt-24",
              children: [r("div", {
                className: "absolute inset-y-0 left-1/2 -ml-[55vw] w-[110vw] bg-gradient-to-b from-white/100 shadow-slate-900/5 lg:hidden"
              }), l("div", {
                className: "relative",
                children: [r(U, {
                  href: "/",
                  children: r(cr, {
                    className: "h-6 w-auto text-slate-900 lg:hidden"
                  })
                }), l("div", {
                  className: "mt-10 flex space-x-3 lg:mt-0",
                  children: [r("h1", {
                    className: "text-base font-semibold leading-6 text-sky-500",
                    children: t.name
                  }), r("span", {
                    className: "rounded-full bg-slate-300/25 px-3 text-xs font-semibold leading-6 text-slate-500",
                    children: t.license
                  })]
                }), l("div", {
                  className: "mt-4 flex items-center space-x-3",
                  children: [r("p", {
                    className: "text-4xl font-bold text-slate-900",
                    children: u ? b : w
                  }), r("p", {
                    className: "text-sm font-semibold text-slate-500",
                    children: "one-time payment"
                  })]
                }), u && d !== null && r("p", {
                  className: "mt-1 text-slate-500 lg:hidden",
                  children: `Includes ${d} tax`
                }), r("p", {
                  className: "mt-6 text-base leading-7 text-slate-700",
                  children: t.description
                }), l("p", {
                  className: "mt-6 text-sm leading-6 text-slate-600",
                  children: ["All prices in ", i.currency]
                }), t.license === "Team license" && r("div", {
                  className: "mt-4 flex space-x-3 text-sm leading-6",
                  children: l("p", {
                    className: "text-slate-500",
                    children: ["Team licenses include 25 seats.", " ", r(U, {
                      href: "/all-access",
                      className: "text-slate-900 hover:underline",
                      children: "Learn about licenses for larger teams"
                    }), "."]
                  })
                }), t.license === "Classroom license" && r(uh, {}), t.license === "Restricted license" && r(mh, {}), r(sh, {
                  total: b,
                  subtotal: w,
                  tax: d,
                  taxRate: h,
                  taxReady: u
                })]
              })]
            })
          })
        }), l("div", {
          className: "relative w-full bg-white/60 px-4 pb-28 pt-10 backdrop-blur lg:max-w-[34rem] lg:grow-0 lg:px-16 lg:shadow-2xl xl:px-20",
          children: [r(U, {
            href: "/",
            children: r(cr, {
              className: "hidden h-6 w-auto text-slate-900 lg:block"
            })
          }), r(dh, {
            step: o,
            backUrl: t.backUrl
          }), r("section", {
            className: "mx-auto max-w-md lg:mt-12 lg:max-w-sm ",
            children: r(ch, {
              loading: c,
              paddleDown: n
            })
          })]
        })]
      }), r(oh, {
        total: b,
        subtotal: w,
        tax: d,
        taxRate: h,
        taxReady: u
      })]
    })
  }
  const bh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vh
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function yh({
    upgrades: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "Redeem license"
      }), r(Nt, {
        children: l("div", {
          className: "text-sm",
          children: [r("h1", {
            className: "mb-2 text-center font-semibold text-gray-900",
            children: "Upgrade to the complete package"
          }), r("p", {
            className: "text-center",
            children: "Your account has access to multiple licenses."
          }), r("p", {
            className: "mb-10 text-center",
            children: "Select the license that you want to upgrade."
          }), r("div", {
            className: "flex w-full max-w-md flex-wrap divide-y divide-gray-200 rounded-md border border-gray-900 border-opacity-5 bg-white bg-clip-padding px-4 shadow-sm",
            children: e.map((t, n) => l("div", {
              className: "flex w-full py-3",
              children: [t.user ? l(j, {
                children: [l("svg", {
                  "aria-hidden": "true",
                  width: "20",
                  height: "20",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  className: "mr-3 flex-none text-gray-400",
                  children: [r("rect", {
                    x: "7.75",
                    y: "5.75",
                    width: "4.5",
                    height: "4.5",
                    rx: "2.25"
                  }), r("rect", {
                    x: "2.75",
                    y: "2.75",
                    width: "14.5",
                    height: "14.5",
                    rx: "7.25"
                  }), r("path", {
                    d: "M14.618 15.5A5.249 5.249 0 0010 12.75a5.249 5.249 0 00-4.618 2.75"
                  })]
                }), r("div", {
                  className: "mr-4 font-semibold text-gray-900",
                  children: t.user.email
                })]
              }) : t.team ? l(j, {
                children: [l("svg", {
                  "aria-hidden": "true",
                  width: "20",
                  height: "20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "mr-3 flex-none text-gray-400",
                  children: [r("rect", {
                    x: "4.75",
                    y: "6.75",
                    width: "4.5",
                    height: "4.5",
                    rx: "2.25",
                    stroke: "#9CA3AF",
                    strokeWidth: "1.5"
                  }), r("rect", {
                    x: "10.75",
                    y: "2.75",
                    width: "4.5",
                    height: "4.5",
                    rx: "2.25",
                    stroke: "#9CA3AF",
                    strokeWidth: "1.5"
                  }), r("path", {
                    d: "M11.179 16.52c-.854-1.416-2.035-2.77-4.171-2.77s-3.318 1.353-4.171 2.77a.484.484 0 00.425.73h7.492c.379 0 .62-.406.425-.73zM12.75 9.75c2.14 0 3.51 1.358 4.418 2.776.204.32-.035.724-.414.724H12.75",
                    stroke: "#9CA3AF",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  })]
                }), r("div", {
                  className: "mr-4 font-semibold text-gray-900",
                  children: t.team.name
                })]
              }) : null, r(U, {
                href: t.url,
                className: "ml-auto font-medium text-sky-500 hover:text-sky-600",
                children: "Upgrade →"
              })]
            }, n))
          })]
        })
      })]
    })
  }
  const xh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yh
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  let wh = typeof window < "u" ? H.useLayoutEffect : H.useEffect;

  function ri(e, t, n, a = 0) {
    if (typeof e == "string") return [e, a];
    if (Array.isArray(e)) {
      var i = "";
      return e.forEach(function (b) {
        let w = ri(b, t, n, a);
        i += w[0], a = w[1]
      }), [i, a]
    }
    let s = ri(e.content, t, n, a);
    a = s[1];
    var o = {
      type: e.type,
      content: s[0],
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: t
    },
      c = e.alias;
    c && (Array.isArray(c) ? Array.prototype.push.apply(o.classes, c) : o.classes.push(c)), Prism.hooks.run("wrap", o);
    var u = "";
    for (var d in o.attributes) u += " " + d + '="' + (o.attributes[d] || "").replace(/"/g, "&quot;") + '"';
    if (o.content.startsWith("/*foldStart:")) {
      let b = o.content.match(/^\/\*foldStart:(.*?)\*\/$/)[1],
        w = b ? `Expand '${b}' code` : "Expand code",
        h = `fold-${n}-${a++}`;
      return [`<button data-fold aria-controls="${h}" aria-label="${w}" aria-expanded="false" class="select-none align-middle inline-flex rounded-md relative -top-px mx-1 w-5 h-[1.125rem] bg-gray-700 border border-white border-opacity-10 hover:border-opacity-25 focus:outline-none focus-visible:border-sky-400"><svg width="20" height="20" fill="none" class="transform absolute -top-0.5 -left-px"><path d="M9 7l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button><span id="${h}" class="sr-only" aria-hidden="true" style="white-space:inherit">`, a]
    }
    return o.content === "/*foldEnd*/" ? ["</span>", a] : ["<" + o.tag + ' class="' + o.classes.join(" ") + '"' + u + ">" + o.content + "</" + o.tag + ">", a]
  }

  function Nh(e, t) {
    if (typeof window > "u") return "";
    if (e.language === "react" || e.language === "vue") {
      let a = {
        code: e.snippet.replace(/^const (\S+) = ([\{\[])$/gm, "const $1 = $2/*foldStart:$1*/").replace(/^([}\]])$/gm, "/*foldEnd*/$1").replace(/\/\*foldEnd\*\/(\}\s*(?:<\/script>)?)$/, "$1").replace(/^(function [^}]+)\/\*foldEnd\*\/\}$/gm, (i, s) => `${s}}`),
        grammar: Prism.languages[e.highlight],
        language: e.highlight
      };
      return Prism.hooks.run("before-tokenize", a), a.tokens = Prism.tokenize(a.code, a.grammar), Prism.hooks.run("after-tokenize", a), ri(Prism.util.encode(a.tokens), a.language, t)[0]
    } else return Prism.highlight(e.snippet, Prism.languages[e.highlight], e.highlight)
  }

  function po({
    preview: e = !1,
    component: t
  }) {
    let n = H.useRef(),
      [a, i] = H.useState(),
      [s, o] = H.useState(),
      c = H.useCallback(u => {
        document.documentElement.classList.add("resizing");
        let d = n.current.parentElement.parentElement.clientWidth,
          b = n.current.parentElement,
          w = u.pageX,
          h = b.clientWidth;
        n.current.classList.add("pointer-events-none");

        function y(p) {
          let f = Math.round(h + (p.pageX - w));
          Object.assign(b.style, {
            width: `${Math.max(360, Math.min(f, d))}px`
          })
        }

        function m() {
          document.documentElement.classList.remove("resizing"), n.current.classList.remove("pointer-events-none"), window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", m)
        }
        window.addEventListener("pointermove", y), window.addEventListener("pointerup", m)
      }, []);
    return wh(() => {
      n.current.contentWindow.bodyHeight && (o(n.current.contentWindow.bodyHeight), i("auto"));

      function u({
        data: d
      }) {
        d.type === "BODY_HEIGHT" && d.name === n.current.name && (o(d.height), i("auto"))
      }
      return window.addEventListener("message", u), () => {
        window.removeEventListener("message", u)
      }
    }, []), l("div", {
      id: `frame-${t.uuid}`,
      className: "relative",
      style: {
        height: a
      },
      children: [r("style", {
        children: `
        #frame-${t.uuid} {
          height: ${t.smallHeight}px;
        }
        @media (min-width: 704px) {
          #frame-${t.uuid} {
            height: ${t.largeHeight}px;
          }
        }
      `
      }), r("iframe", {
        ref: n,
        className: "w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10",
        style: {
          height: s
        },
        id: `frame-${t.uuid}`,
        title: `${t.name} preview`,
        "aria-label": `${t.name} preview`,
        name: `frame-${t.uuid}`,
        srcDoc: e ? t.previewHtml : t.iframeHtml
      }), r("div", {
        onPointerDown: c,
        className: "absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex",
        children: r("div", {
          className: "h-8 w-1.5 rounded-full bg-slate-400"
        })
      })]
    })
  }

  function kh({
    snippetLang: e,
    component: t
  }) {
    var u;
    let [n, a] = H.useState(e);
    H.useEffect(() => {
      a(e)
    }, [e]), t.snippets.find(d => d.language === n) || (n = t.snippets.find(() => !0).language);
    let [i, s] = H.useState(!1), o = H.useRef(null), c = H.useCallback(() => {
      var b;
      let d = (b = t.snippets.find(w => w.language === n)) == null ? void 0 : b.snippet;
      d && navigator.clipboard.writeText(d).then(() => {
        o.current && clearTimeout(o.current), s(!0), o.current = setTimeout(() => {
          s(!1)
        }, 1500)
      })
    }, [n]);
    return l("section", {
      id: `component-${t.uuid}`,
      children: [l("div", {
        className: "grid grid-cols-[1fr,auto] items-center",
        children: [l("div", {
          className: "flex min-w-0",
          children: [r("h2", {
            className: "truncate text-base font-medium leading-7 text-slate-900",
            children: r("a", {
              href: `#component-${t.uuid}`,
              children: t.name
            })
          }), t.archived ? r("p", {
            className: "ml-3 hidden whitespace-nowrap rounded-lg bg-amber-100 px-2 py-0.5 text-xs font-semibold leading-6 text-amber-800 lg:block",
            children: "Archived"
          }) : l(j, {
            children: [t.requiresJavaScript && r("p", {
              className: "ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block",
              children: "Requires JS"
            }), t.isNew && r("p", {
              className: "ml-3 hidden whitespace-nowrap rounded-lg bg-sky-50 px-2 py-0.5 text-xs font-semibold leading-6 text-sky-700 lg:block",
              children: "New"
            })]
          })]
        }), l(be.Group, {
          children: [l("div", {
            className: "ml-6 flex items-center",
            children: [r(be.List, {
              className: "flex space-x-1 rounded-lg bg-slate-100 p-0.5",
              children: [
                ["Preview", l(j, {
                  children: [r("path", {
                    d: "M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"
                  }), r("circle", {
                    cx: "10",
                    cy: "10",
                    r: "2.25"
                  })]
                })],
                ["Code", r("path", {
                  d: "m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"
                })]
              ].map(([d, b]) => r(be, {
                className: ({
                  selected: w
                }) => B("flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3", {
                  "bg-white shadow": w
                }),
                children: ({
                  selected: w
                }) => l(j, {
                  children: [r("svg", {
                    className: B("h-5 w-5 flex-none", {
                      "stroke-sky-500": w,
                      "stroke-slate-600": !w
                    }),
                    fill: "none",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: b
                  }), r("span", {
                    className: B("sr-only lg:not-sr-only lg:ml-2", {
                      "text-slate-900": w,
                      "text-slate-600": !w
                    }),
                    children: d
                  })]
                })
              }, d))
            }), r("div", {
              className: "ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"
            }), ((u = t.snippets) == null ? void 0 : u.length) > 1 && l("div", {
              className: "relative hidden sm:block",
              children: [r("select", {
                value: n,
                onChange: d => {
                  a(d.target.value), ur.Inertia.put("/snippet-language", {
                    snippet_lang: d.target.value
                  }, {
                    preserveScroll: !0
                  })
                },
                className: "form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm",
                children: t.snippets.map(d => r("option", {
                  value: d.language,
                  children: d.label
                }, d.language))
              }), r("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 8 6",
                width: "8",
                height: "6",
                fill: "none",
                className: "pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500",
                children: r("path", {
                  d: "M7 1.5l-3 3-3-3",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })]
            }), l("button", {
              className: "group relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex",
              onClick: c,
              children: [r(tt, {
                show: i,
                as: "span",
                className: "absolute inset-x-0 bottom-full mb-2.5 flex justify-center",
                enter: "transform ease-out duration-200 transition origin-bottom",
                enterFrom: "scale-95 translate-y-0.5 opacity-0",
                enterTo: "scale-100 translate-y-0 opacity-100",
                leave: "transition ease-in duration-100",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: l("span", {
                  className: "rounded-md bg-gray-900 px-3 py-1 text-[0.625rem] font-semibold uppercase leading-4 tracking-wide text-white drop-shadow-md filter",
                  children: [r("svg", {
                    "aria-hidden": !0,
                    width: 16,
                    height: 6,
                    viewBox: "0 0 16 6",
                    className: "absolute left-1/2 top-full -ml-2 -mt-px text-gray-900",
                    children: r("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z",
                      fill: "currentColor"
                    })
                  }), "Copied!"]
                })
              }), l("svg", {
                className: B("h-8 w-8", i ? "rotate-[-8deg] stroke-[#06B6D4]" : "stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600"),
                fill: "none",
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [r("path", {
                  d: "M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), r("path", {
                  d: "M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), r("path", {
                  d: "M13.7475 16.2499L18.2475 16.2499",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), r("path", {
                  d: "M13.7475 19.2499L18.2475 19.2499",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), l("g", {
                  className: B(!i && "opacity-0"),
                  children: [r("path", {
                    d: "M15.9975 5.99988L15.9975 3.99988",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }), r("path", {
                    d: "M19.9975 5.99988L20.9975 4.99988",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }), r("path", {
                    d: "M11.9975 5.99988L10.9975 4.99988",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })]
                })]
              })]
            })]
          }), l(be.Panels, {
            className: "col-span-2 row-start-2 min-w-0",
            children: [r(be.Panel, {
              unmount: !1,
              className: "mt-4 focus:outline-none",
              children: r(po, {
                component: t
              })
            }), typeof window < "u" && l(be.Panel, {
              className: "mt-4 focus:outline-none",
              children: [r("div", {
                className: "flex space-x-2 rounded-t-lg border-b border-slate-700 bg-slate-800 px-2 text-sm leading-6 sm:hidden",
                children: t.snippets.map(d => r("button", {
                  type: "button",
                  onClick: () => a(d.language),
                  className: B("-mb-px border-b px-2 py-3 font-medium", {
                    "border-sky-400 text-sky-400": n === d.language,
                    "border-transparent text-slate-400 hover:text-slate-300": n !== d.language
                  }),
                  children: d.label
                }, d.language))
              }), r("pre", {
                className: B("flex overflow-auto rounded-b-lg text-sm leading-[1.5714285714] text-white sm:rounded-t-lg", `language-${t.snippets.find(d => d.language === n).highlight}`),
                children: r("code", {
                  className: "p-4",
                  dangerouslySetInnerHTML: {
                    __html: Nh(t.snippets.find(d => d.language === n), t.uuid)
                  }
                })
              })]
            })]
          })]
        })]
      }), t.imageCreditsHtml && r("div", {
        dangerouslySetInnerHTML: {
          __html: t.imageCreditsHtml
        }
      })]
    })
  }

  function Sh({
    auth: e,
    component: t
  }) {
    return l("section", {
      id: `component-${t.uuid}`,
      children: [l("div", {
        className: "flex items-center justify-between",
        children: [l("div", {
          className: "flex min-w-0 items-center",
          children: [r("h2", {
            className: "truncate text-base font-medium leading-7 text-slate-900",
            children: r("a", {
              href: `#component-${t.uuid}`,
              children: t.name
            })
          }), r("p", {
            className: "ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block",
            children: "Preview"
          })]
        }), r(U, {
          href: "/components#pricing",
          className: "ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600",
          children: e ? l(j, {
            children: ["Upgrade to get these components ", r("span", {
              "aria-hidden": "true",
              children: "→"
            })]
          }) : l(j, {
            children: ["Get the code ", r("span", {
              "aria-hidden": "true",
              children: "→"
            })]
          })
        })]
      }), r("div", {
        className: "mt-4",
        children: r(po, {
          preview: !0,
          component: t
        })
      })]
    })
  }

  function Ch({
    auth: e,
    component: t
  }) {
    return l("section", {
      id: `component-${t.uuid}`,
      children: [l("div", {
        className: "flex items-center justify-between",
        children: [l("div", {
          className: "flex min-w-0 items-center",
          children: [r("h2", {
            className: "truncate text-base font-medium leading-7 text-slate-900",
            children: r("a", {
              href: `#component-${t.uuid}`,
              children: t.name
            })
          }), r("p", {
            className: "ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block",
            children: "PNG Preview"
          })]
        }), r(U, {
          href: "/components#pricing",
          className: "ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600",
          children: e ? l(j, {
            children: ["Upgrade to get these components ", r("span", {
              "aria-hidden": "true",
              children: "→"
            })]
          }) : l(j, {
            children: ["Get the code ", r("span", {
              "aria-hidden": "true",
              children: "→"
            })]
          })
        })]
      }), l("div", {
        className: "mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5",
        children: [r("img", {
          className: "h-auto w-full sm:hidden",
          loading: "lazy",
          src: t.smallScreenshotUrl,
          width: t.smallWidth,
          height: t.smallHeight
        }), r("img", {
          className: "hidden h-auto w-full sm:block",
          loading: "lazy",
          src: t.largeScreenshotUrl,
          width: t.largeWidth,
          height: t.largeHeight
        })]
      })]
    })
  }

  function Ul(e) {
    let t = e.target && e.target.closest("[data-fold]");
    if (!t) return;
    let n = t.getAttribute("aria-expanded") === "false",
      a = document.getElementById(t.getAttribute("aria-controls")),
      i = t.firstElementChild;
    n ? (a.removeAttribute("aria-hidden"), a.classList.remove("sr-only"), i.classList.add("rotate-90")) : (a.setAttribute("aria-hidden", "true"), a.classList.add("sr-only"), i.classList.remove("rotate-90")), t.setAttribute("aria-expanded", n.toString()), t.setAttribute("aria-label", t.getAttribute("aria-label").replace(/^(Expand|Collapse)/, n ? "Collapse" : "Expand"))
  }
  let Wl = 0;

  function ho({
    component: e
  }) {
    const {
      auth: t,
      snippetLang: n
    } = Vr().props;
    return H.useEffect(() => (Wl++ === 0 && window.addEventListener("click", Ul), () => {
      --Wl === 0 && window.removeEventListener("click", Ul)
    }), []), r(j, {
      children: e.downloadable ? r(kh, {
        snippetLang: n,
        component: e
      }) : e.previewHtml ? r(Sh, {
        auth: t,
        component: e
      }) : r(Ch, {
        auth: t,
        component: e
      })
    })
  }

  function fo({
    subcategory: e,
    archiveAvailable: t
  }) {
    return l(j, {
      children: [r(we, {
        title: `${e.name} - Official Tailwind CSS UI Components`,
        description: e.description
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        children: [r("img", {
          src: "/img/beams-basic.png",
          alt: "",
          className: "absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none"
        }), l("div", {
          className: "relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8",
          children: [l("div", {
            className: "flex flex-col",
            children: [r("h1", {
              className: "mt-3 text-3xl font-extrabold tracking-tight text-slate-900",
              children: e.name
            }), l("nav", {
              "aria-label": "Breadcrumbs",
              className: "order-first flex space-x-2 text-sm font-semibold",
              children: [r(U, {
                href: e.category.product.url,
                className: "text-slate-500 hover:text-slate-600",
                children: e.category.product.name
              }), r("div", {
                "aria-hidden": "true",
                className: "select-none text-slate-400",
                children: "/"
              }), r(U, {
                href: e.category.url,
                className: "text-slate-500 hover:text-slate-600",
                children: e.category.name
              })]
            })]
          }), r("div", {
            className: "mt-10 space-y-24 pb-px",
            children: e.components.map(n => r(ho, {
              component: n
            }, n.uuid))
          }), t && r("div", {
            className: "mt-16 text-center",
            children: r(U, {
              href: e.url + "?include=archived",
              className: "text-slate-500 hover:text-slate-600",
              preserveScroll: !0,
              children: "Show archived examples"
            })
          })]
        })]
      })]
    })
  }
  fo.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const Eh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: fo
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function go({
    category: e
  }) {
    return l("div", {
      className: "group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100",
      children: [r("div", {
        className: "relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10",
        children: r("img", {
          src: e.imageUrl,
          alt: "",
          className: "absolute inset-0 h-full w-full"
        })
      }), r("h4", {
        className: "mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600",
        children: l(U, {
          href: e.url,
          children: [r("span", {
            className: "absolute -inset-2.5 z-10"
          }), r("span", {
            className: "relative",
            children: e.name
          })]
        })
      }), r("p", {
        className: "relative mt-1.5 text-xs font-medium text-slate-500",
        children: e.components
      }), e.isNew && r("p", {
        className: "pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-sky-500 bg-opacity-90 px-1.5 py-0.5 text-[0.6875rem] font-semibold leading-4 text-white",
        children: "New"
      }), e.isLocked && l("p", {
        className: "pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white",
        children: [r("span", {
          className: "sr-only",
          children: "PNG previews only, upgrade to get the HTML."
        }), r("svg", {
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          fill: "none",
          className: "h-6 w-6",
          children: r("path", {
            d: "M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157",
            stroke: "#fff",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })]
      })]
    })
  }

  function Mh() {
    return l("div", {
      className: "-ml-[32rem] mt-12 h-[46.375rem] origin-top scale-[calc(204/299)] select-none sm:-ml-[24rem] sm:-mt-20 sm:h-auto sm:transform-none md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0",
      children: [r("div", {
        className: "flex justify-end",
        children: l("div", {
          className: "relative flex items-end",
          children: [r("div", {
            className: "absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
          }), r("div", {
            className: "absolute left-16 top-full -mt-px h-8 overflow-hidden",
            children: r(We, {
              className: "-mt-px h-[2px] w-56",
              subtle: !0
            })
          }), l("div", {
            children: [l("div", {
              className: "p-4",
              children: [r($r, {
                className: "ml-auto",
                defaultEnabled: !0
              }), l("div", {
                className: "mt-8 flex items-center justify-end",
                children: [r($r, {}), r(Lh, {})]
              })]
            }), l("div", {
              className: "relative z-10 p-4 text-right",
              children: [r("div", {
                className: "absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute inset-0 -right-px bg-gradient-to-br from-white/0 via-white/25 to-white/0"
              }), r(vo, {})]
            })]
          }), l("div", {
            className: "relative z-10 p-4",
            children: [r("div", {
              className: "absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden",
              children: r(We, {
                className: "-mb-px h-[2px] w-56",
                subtle: !0
              })
            }), r(bo, {})]
          })]
        })
      }), r("div", {
        className: "flex justify-end",
        children: r("div", {
          className: "relative z-10 p-4",
          children: r(Fh, {})
        })
      }), l("div", {
        className: "flex items-start justify-end",
        children: [l("div", {
          children: [l("div", {
            className: "relative flex items-end justify-end",
            children: [r("div", {
              className: "absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), l("div", {
              children: [r("div", {
                className: "flex justify-end p-4",
                children: r(Ih, {})
              }), l("div", {
                className: "relative z-10 p-4",
                children: [r("div", {
                  className: "absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
                }), r("div", {
                  className: "absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
                }), r("div", {
                  className: "absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
                }), r("div", {
                  className: "absolute bottom-full left-16 -mb-px flex h-8 items-end overflow-hidden",
                  children: r(We, {
                    className: "-mb-px h-[2px] w-56",
                    subtle: !0
                  })
                }), r(Oh, {})]
              })]
            }), r("div", {
              className: "relative z-10 p-4",
              children: r(Th, {})
            })]
          }), l("div", {
            className: "flex items-start justify-end",
            children: [l("div", {
              className: "relative p-4",
              children: [r("div", {
                className: "absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r(Rh, {})]
            }), l("div", {
              className: "relative p-4",
              children: [r("div", {
                className: "absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -top-px right-16 h-8 overflow-hidden",
                children: r(We, {
                  className: "-mt-px h-[2px] w-56 -scale-x-100",
                  subtle: !0
                })
              }), r(_h, {})]
            })]
          })]
        }), l("div", {
          children: [r("div", {
            className: "relative p-4",
            children: r(yo, {})
          }), r("div", {
            className: "relative p-4",
            children: r(Ph, {})
          })]
        })]
      })]
    })
  }

  function $r({
    className: e,
    defaultEnabled: t = !1
  }) {
    let [n, a] = H.useState(t);
    return r("div", {
      className: B(e, "pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out", {
        "bg-indigo-600 ring-black/20": n,
        "bg-slate-900/10 ring-slate-900/5": !n
      }),
      onClick: () => a(!n),
      children: r("div", {
        className: B("h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out", {
          "translate-x-4": n
        })
      })
    })
  }

  function Lh() {
    return r("div", {
      className: "pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500",
      children: "Button A"
    })
  }

  function vo() {
    return l("div", {
      className: "pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900",
      children: [l("div", {
        className: "flex px-3 py-2",
        children: [r("svg", {
          className: "mr-2.5 h-5 w-5 flex-none fill-slate-400",
          children: r("path", {
            d: "M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"
          })
        }), "Bookmark"]
      }), r("div", {
        className: "border-l border-slate-400/20 px-2.5 py-2",
        children: "12k"
      })]
    })
  }

  function bo({
    amount: e = 3
  }) {
    return l("div", {
      className: "w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
      children: [
        [{
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          image: "/img/avatar-1.jpg"
        }, {
          name: "Floyd Miles",
          handle: "floydmiles",
          image: "/img/avatar-2.jpg"
        }, {
          name: "Emily Selman",
          handle: "emilyselman",
          image: "/img/avatar-3.jpg"
        }].slice(0, e).map((t, n) => l("div", {
          className: "flex items-center p-4",
          children: [r("img", {
            src: t.image,
            alt: "",
            className: "h-10 w-10 flex-none rounded-full"
          }), l("div", {
            className: "ml-4 flex-auto",
            children: [r("div", {
              className: "font-medium",
              children: t.name
            }), r("div", {
              className: "mt-1 text-slate-700",
              children: `@${t.handle}`
            })]
          }), r("div", {
            className: "pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50",
            children: "View"
          })]
        }, n)), r("div", {
          className: "p-4",
          children: r("div", {
            className: "pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50",
            children: "View all"
          })
        })
      ]
    })
  }

  function Ah() {
    return l("div", {
      className: "w-[19.875rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
      children: [l("div", {
        className: "flex items-center p-4 pb-0",
        children: [r("img", {
          src: "/img/avatar-3.jpg",
          alt: "",
          className: "h-10 w-10 flex-none rounded-full"
        }), l("div", {
          className: "ml-4 flex-auto",
          children: [r("div", {
            className: "font-medium",
            children: "Emily Selman"
          }), r("div", {
            className: "mt-1 text-slate-500",
            children: "Sent you an invite to connect."
          })]
        })]
      }), l("div", {
        className: "flex gap-3 p-4",
        children: [r("div", {
          className: "pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500",
          children: "Accept"
        }), r("div", {
          className: "pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50",
          children: "Decline"
        })]
      })]
    })
  }

  function yo({
    container: e = !0
  }) {
    let t = [{
      name: "Tailwind Labs / Website Redesign"
    }, {
      name: "Laravel LLC / Conference Branding"
    }],
      n = [{
        name: "Add new file...",
        icon: r(j, {
          children: r("path", {
            d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          })
        })
      }, {
        name: "Add new folder...",
        icon: r(j, {
          children: r("path", {
            d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          })
        })
      }, {
        name: "Add hashtag...",
        icon: r(j, {
          children: r("path", {
            d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          })
        })
      }, {
        name: "Add label...",
        icon: r(j, {
          children: r("path", {
            d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          })
        })
      }],
      [a, i] = H.useState(0);
    return l("div", {
      className: e ? "pointer-events-auto w-[25.625rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10" : void 0,
      children: [l("div", {
        className: "flex items-center px-3.5 py-2.5 text-slate-400",
        children: [r("svg", {
          className: "mr-2 h-5 w-5 stroke-slate-500",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 2,
          children: r("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          })
        }), "Search projects..."]
      }), l("div", {
        className: "border-t border-slate-400/20 px-3.5 py-3",
        children: [r("div", {
          className: "mb-1.5 text-[0.6875rem] font-semibold text-slate-500",
          children: "Recent searches"
        }), t.map((s, o) => l("div", {
          className: B("flex items-center rounded-md p-1.5", {
            "bg-indigo-600 text-white": a === o
          }),
          onMouseEnter: () => i(o),
          children: [r("svg", {
            className: B("mr-2.5 h-5 w-5 flex-none", {
              "stroke-white": a === o,
              "stroke-slate-400": a !== o
            }),
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 2,
            children: r("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            })
          }), s.name]
        }, o))]
      }), r("div", {
        className: "border-t border-slate-400/20 px-3.5 py-3",
        children: n.map((s, o) => l("div", {
          className: B("flex items-center rounded-md p-1.5", {
            "bg-indigo-600 text-white": a === t.length + o
          }),
          onMouseEnter: () => i(t.length + o),
          children: [r("svg", {
            className: B("mr-2.5 h-5 w-5 flex-none", {
              "stroke-white": a === t.length + o,
              "stroke-slate-400": a !== t.length + o
            }),
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: s.icon
          }), s.name]
        }, o))
      })]
    })
  }

  function ql({
    title: e,
    subtitle: t,
    users: n,
    selected: a,
    onSelect: i
  }) {
    return l("div", {
      className: B("pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50", {
        "ring-2 ring-indigo-600": a,
        "ring-1 ring-slate-700/10": !a
      }),
      onClick: i,
      children: [l("div", {
        className: "flex justify-between",
        children: [r("div", {
          className: "font-medium text-slate-900",
          children: e
        }), a && r("svg", {
          className: "h-5 w-5 flex-none",
          fill: "none",
          children: r("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z",
            fill: "#4F46E5"
          })
        })]
      }), r("div", {
        className: "mt-1 text-slate-700",
        children: t
      }), l("div", {
        className: "mt-6 font-medium text-slate-900",
        children: [n, " users"]
      })]
    })
  }

  function Th() {
    let [e, t] = H.useState(0);
    return l("div", {
      className: "space-y-4",
      children: [r(ql, {
        title: "Newsletter",
        subtitle: "Last message sent an hour ago",
        users: 621,
        selected: e === 0,
        onSelect: () => t(0)
      }), r(ql, {
        title: "Existing customers",
        subtitle: "Last message sent an hour ago",
        users: 1200,
        selected: e === 1,
        onSelect: () => t(1)
      })]
    })
  }

  function _h() {
    let [e, t] = H.useState(0);
    return l("div", {
      className: "pointer-events-auto w-[28.125rem] text-[0.8125rem] leading-5 text-slate-700",
      children: [r("div", {
        className: "font-semibold text-slate-900",
        children: "Assigned to"
      }), l("div", {
        className: "mt-2 flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-slate-700/10",
        children: ["Tom Cook", r("svg", {
          className: "h-5 w-5 flex-none fill-slate-400",
          children: r("path", {
            d: "M10 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L10 5.414 7.707 7.707a1 1 0 0 1-1.414-1.414l3-3A1 1 0 0 1 10 3Zm-3.707 9.293a1 1 0 0 1 1.414 0L10 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"
          })
        })]
      }), r("div", {
        className: "mt-4 overflow-hidden rounded-md bg-white py-1 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
        children: ["Wade Cooper", "Arlene Mccoy", "Tom Cook", "Devon Webb"].map((n, a) => r("div", {
          className: B("px-3 py-2", {
            "bg-indigo-600 text-white": e === a
          }),
          onMouseEnter: () => t(a),
          children: n
        }, n))
      })]
    })
  }

  function Ih() {
    return l("div", {
      className: "pointer-events-auto flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10",
      children: [r("div", {
        className: "px-4 py-2 hover:bg-slate-50 hover:text-slate-900",
        children: "Years"
      }), r("div", {
        className: "px-4 py-2 hover:bg-slate-50 hover:text-slate-900",
        children: "Months"
      }), r("div", {
        className: "px-4 py-2 hover:bg-slate-50 hover:text-slate-900",
        children: "Days"
      })]
    })
  }

  function Ph() {
    return l("div", {
      className: "-mr-[4.625rem] w-[30.25rem] rounded-md bg-white p-4 text-[0.8125rem] leading-6 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
      children: [r("div", {
        className: "font-semibold leading-5",
        children: "Account"
      }), r("div", {
        className: "mt-2 leading-5 text-slate-500",
        children: "Manage how information is displayed on your account."
      }), l("div", {
        className: "mt-4 flex items-center border-t border-slate-400/20 py-3",
        children: [r("span", {
          className: "w-2/5 flex-none",
          children: "Language"
        }), r("span", {
          className: "",
          children: "English"
        }), r("span", {
          className: "pointer-events-auto ml-auto font-medium text-indigo-600 hover:text-indigo-500",
          children: "Update"
        })]
      }), l("div", {
        className: "flex items-center border-t border-slate-400/20 py-3",
        children: [r("span", {
          className: "w-2/5 flex-none",
          children: "Date format"
        }), r("span", {
          className: "",
          children: "DD-MM-YYYY"
        }), l("span", {
          className: "ml-auto flex items-center font-medium text-indigo-600",
          children: [r("span", {
            className: "pointer-events-auto hover:text-indigo-500",
            children: "Update"
          }), r("span", {
            className: "mx-3 h-6 w-px bg-slate-400/20"
          }), r("span", {
            className: "pointer-events-auto hover:text-indigo-500",
            children: "Remove"
          })]
        })]
      }), l("div", {
        className: "flex items-center border-t border-slate-400/20 py-3",
        children: [r("span", {
          children: "Automatic timezone"
        }), r("span", {
          className: "ml-auto",
          children: r($r, {
            defaultEnabled: !0
          })
        })]
      }), l("div", {
        className: "flex items-center border-t border-slate-400/20 pt-3",
        children: [r("span", {
          children: "Auto-update applicant data"
        }), r("span", {
          className: "ml-auto",
          children: r($r, {
            defaultEnabled: !1
          })
        })]
      })]
    })
  }

  function Oh() {
    return l("div", {
      className: "flex w-[23.5625rem] items-center rounded-md bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
      children: [r("svg", {
        className: "h-6 w-6 flex-none stroke-slate-500",
        strokeWidth: 2,
        strokeLinecap: "round",
        fill: "none",
        children: r("path", {
          d: "M4 7h16M4 12h16M4 17h16"
        })
      }), r("svg", {
        className: "ml-6 h-10 w-10 flex-none",
        viewBox: "0 0 40 40",
        fill: "none",
        children: r("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.8322 6.12083C11.1486 5.56355 11.74 5.21924 12.3808 5.21924H27.1431C27.7322 5.21924 28.2831 5.51055 28.6148 5.99738L37.4718 18.9974C37.8542 19.5587 37.884 20.2887 37.5487 20.8793L30.1679 33.8793C29.8515 34.4366 29.2601 34.7809 28.6192 34.7809L12.3808 34.7809C11.74 34.7809 11.1486 34.4366 10.8322 33.8793L3.45137 20.8793C3.14178 20.334 3.14178 19.6661 3.45137 19.1208L10.8322 6.12083ZM12.3808 10.607L17.7138 20.0001L12.3808 29.3931L7.04787 20.0001L12.3808 10.607ZM15.4397 31.2192L27.5825 31.2192L32.9411 21.7809H20.7984L15.4397 31.2192ZM20.7984 18.2192H32.6319L26.2015 8.78092H15.4397L20.7984 18.2192Z",
          fill: "#38BDF8"
        })
      }), r("div", {
        className: "ml-auto flex h-6 w-6 items-center justify-center rounded-md shadow ring-1 ring-slate-900/10",
        children: r("svg", {
          className: "h-4 w-4 ",
          viewBox: "0 0 16 16",
          fill: "none",
          children: r("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z",
            fill: "#38BDF8"
          })
        })
      }), r("div", {
        className: "ml-6 text-[0.8125rem] font-medium text-slate-700",
        children: "v3.0"
      }), r("svg", {
        className: "ml-2 h-1 w-1.5 overflow-visible fill-slate-400 stroke-slate-400",
        children: r("path", {
          d: "M0 0H6L3 4Z",
          strokeWidth: "1",
          strokeLinejoin: "round"
        })
      }), r("svg", {
        viewBox: "0 0 16 16",
        className: "ml-6 h-6 w-6 fill-slate-400",
        children: r("path", {
          d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        })
      })]
    })
  }

  function Fh() {
    return l("div", {
      className: "flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
      children: [l("div", {
        className: "flex items-center space-x-4 px-6 py-4",
        children: [l("svg", {
          className: "h-6 w-6 flex-none",
          fill: "none",
          children: [r("path", {
            d: "M6.22 11.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 6.75l-.53-.53a.75.75 0 0 0 0 1.06L3 6.75Zm4.28-3.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.5 18a.75.75 0 0 0 0 1.5V18ZM7.28 9.97 3.53 6.22 2.47 7.28l3.75 3.75 1.06-1.06ZM3.53 7.28l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm16.72 5.47c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM15 7.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 6v1.5ZM15 6H3v1.5h12V6Zm0 12h-1.5v1.5H15V18Z",
            fill: "#64748B"
          }), r("path", {
            d: "M3 15.75h.75V21",
            stroke: "#64748B",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), r("path", {
            d: "M9 16.5A.75.75 0 0 0 9 15v1.5Zm-2.25-.75V15a.75.75 0 0 0-.75.75h.75Zm0 2.25H6c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5ZM9 15H6.75v1.5H9V15Zm-3 .75V18h1.5v-2.25H6Zm.75 3h1.5v-1.5h-1.5v1.5Zm1.5 1.5h-1.5v1.5h1.5v-1.5ZM9 19.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25H9Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z",
            fill: "#64748B"
          })]
        }), l("svg", {
          className: "h-10 w-10 flex-none",
          fill: "none",
          children: [r("circle", {
            cx: 20,
            cy: 20,
            r: 20,
            fill: "#0F172A"
          }), r("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.5 13.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L16.28 27.99c-1.25.687-2.779-.217-2.779-1.643V13.653Z",
            fill: "#fff"
          })]
        }), r("svg", {
          className: "h-6 w-6 flex-none",
          fill: "none",
          children: r("path", {
            d: "M16.72 9.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21 6.75l.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-3.22-4.28a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM10.5 19.5a.75.75 0 0 0 0-1.5v1.5Zm3.75-4.5a.75.75 0 0 0 0 1.5V15Zm.75.75h.75A.75.75 0 0 0 15 15v.75ZM14.25 21a.75.75 0 0 0 1.5 0h-1.5Zm6-4.5a.75.75 0 0 0 0-1.5v1.5ZM18 15.75V15a.75.75 0 0 0-.75.75H18ZM18 18h-.75c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5Zm-.22-9.22 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm3.75-4.81-3.75-3.75-1.06 1.06 3.75 3.75 1.06-1.06ZM2.25 12.75A6.75 6.75 0 0 0 9 19.5V18a5.25 5.25 0 0 1-5.25-5.25h-1.5ZM9 6a6.75 6.75 0 0 0-6.75 6.75h1.5C3.75 9.85 6.1 7.5 9 7.5V6Zm0 1.5h12V6H9v1.5Zm0 12h1.5V18H9v1.5Zm5.25-3H15V15h-.75v1.5Zm0-.75V21h1.5v-5.25h-1.5Zm6-.75H18v1.5h2.25V15Zm-3 .75V18h1.5v-2.25h-1.5Zm.75 3h1.5v-1.5H18v1.5Zm1.5 1.5H18v1.5h1.5v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z",
            fill: "#64748B"
          })
        })]
      }), l("div", {
        className: "flex flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem] leading-5 text-slate-700",
        children: [r("div", {
          children: "00:51"
        }), l("div", {
          className: "ml-4 flex flex-auto rounded-full bg-slate-100",
          children: [r("div", {
            className: "h-2 w-1/3 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600"
          }), r("div", {
            className: "-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600"
          })]
        }), r("div", {
          className: "ml-4",
          children: "55:43"
        }), l("svg", {
          className: "ml-6 h-6 w-6 flex-none",
          fill: "none",
          children: [r("path", {
            d: "M14 5 9 9H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z",
            fill: "#64748B",
            stroke: "#64748B",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), r("path", {
            d: "M19 12c0-1.5-1-2-1-2v4s1-.5 1-2Z",
            stroke: "#64748B",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }), r("svg", {
          className: "ml-6 h-6 w-6 flex-none",
          fill: "none",
          children: r("path", {
            d: "M12 8v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1V8Zm0 0V7a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 12v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 16v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1Z",
            fill: "#64748B"
          })
        })]
      })]
    })
  }

  function Rh() {
    let [e, t] = H.useState(0);
    return r("div", {
      className: "pointer-events-auto w-36 space-y-1 rounded-lg bg-white p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
      children: [
        ["Light", r(j, {
          children: r("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z",
            fill: "#38BDF8"
          })
        })],
        ["Dark", r("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
        })],
        ["System", r("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
        })]
      ].map(([n, a], i) => l("div", {
        className: B("flex rounded-[10px] p-1", {
          "bg-slate-50": e === i
        }),
        onMouseEnter: () => t(i),
        children: [r("div", {
          className: "flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10",
          children: r("svg", {
            className: "h-4 w-4 fill-slate-400",
            children: a
          })
        }), r("div", {
          className: B("ml-3", {
            "text-slate-900": e === i
          }),
          children: n
        })]
      }, i))
    })
  }
  const Gl = [{
    name: "Alex MacCaw",
    body: "Tailwind UI made it possible for me to ship the first version of Reflect entirely by myself, while still being immensely proud of the design.",
    handle: 'Founder of <a class="text-slate-900" href="https://reflect.app/" target="_blank">Reflect</a> & <a class="text-slate-900" href="https://clearbit.com/" target="_blank">Clearbit</a>',
    img: "/img/maccaw-profile.jpeg"
  }, {
    name: "Ben Barbersmith",
    body: "Yet again Tailwind and Tailwind UI are dramatically speeding up my frontend work. At this point Tailwind UI is hands-down the highest ROI digital asset I’ve ever bought.",
    handle: '<a href="https://twitter.com/benbarbersmith/status/1527291090889371651" target="_blank">@benbarbersmith</a>',
    img: "/img/benbarbersmith-profile.jpeg"
  }, {
    name: "Justin Jackson",
    body: "We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind UI. It’s turned a project I might have never made the time to tackle into something I could finish and ship in an hour.",
    handle: 'Founder of <a class="text-slate-900" href="https://transistor.fm/" target="_blank">Transistor</a>',
    img: "/img/justin-profile.jpg"
  }];

  function $h({
    className: e
  }) {
    return l("div", {
      className: B("flex flex-wrap", e),
      "aria-hidden": "true",
      children: [l("div", {
        className: "flex items-center text-sm font-medium text-slate-500",
        children: [l("svg", {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-8 w-8 flex-none stroke-slate-400",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [r("path", {
            d: "M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"
          }), r("path", {
            d: "M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"
          })]
        }), r("span", {
          className: "ml-2.5",
          children: "HTML"
        })]
      }), l("div", {
        className: "ml-6 flex items-center text-sm font-medium text-slate-500",
        children: [l("svg", {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-8 w-8 flex-none stroke-slate-400",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [r("ellipse", {
            cx: "16",
            cy: "16",
            rx: "13",
            ry: "5"
          }), r("ellipse", {
            cx: "16",
            cy: "16",
            rx: "13",
            ry: "5",
            transform: "rotate(60 16 16)"
          }), r("ellipse", {
            rx: "13",
            ry: "5",
            transform: "matrix(-.5 .86603 .86603 .5 16 16)"
          }), r("circle", {
            cx: "16",
            cy: "16",
            r: "2"
          })]
        }), r("span", {
          className: "ml-2.5",
          children: "React"
        })]
      }), l("div", {
        className: "ml-6 flex items-center text-sm font-medium text-slate-500",
        children: [l("svg", {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-8 w-8 flex-none stroke-slate-400",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [r("path", {
            d: "M19.924 5 16 11.644 12.075 5H3l13 23L29 5h-9.076Z"
          }), r("path", {
            d: "M19.879 5 16 11.26 12.121 5H8l8 13 8-13h-4.121Z"
          })]
        }), r("span", {
          className: "ml-2.5",
          children: "Vue"
        })]
      })]
    })
  }

  function jh({
    price: e,
    children: t
  }) {
    return l("div", {
      id: "pricing",
      className: "relative overflow-hidden bg-slate-50 pb-20 pt-24 lg:pb-24 xl:pb-32",
      children: [r("img", {
        src: "/img/beams-pricing.png",
        alt: "",
        className: "absolute left-1/2 top-0 -ml-[40rem] w-[90.4375rem] max-w-none"
      }), r("div", {
        className: "absolute inset-x-0 bottom-0 h-96 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]",
        children: r(dr, {
          id: "pricing-pattern",
          x: "50%",
          y: "100%",
          patternTransform: "translate(0 -1)"
        })
      }), l("div", {
        className: "relative mx-auto max-w-container px-4 sm:px-6 lg:px-8",
        children: [l("section", {
          className: "mx-auto max-w-[40rem] lg:max-w-none",
          children: [l("div", {
            className: "max-w-3xl1 pr-12",
            children: [r("h2", {
              className: "text-base font-semibold leading-7 text-sky-500",
              children: "Pricing"
            }), r("p", {
              className: "mt-4 text-5xl font-extrabold tracking-tight text-slate-900",
              children: e.advertised === e.amount ? "Buy once, use forever." : "Upgrade for more components."
            }), r("p", {
              className: "mt-4 max-w-xl text-base leading-8 text-slate-700",
              children: "Every component package includes lifetime access, free updates, and examples in React, Vue, and plain HTML."
            }), r($h, {
              className: "mt-9"
            })]
          }), l("div", {
            className: "mt-16 lg:mt-0 lg:flex lg:flex-row-reverse lg:items-center",
            children: [l("div", {
              className: "relative z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-1/2 lg:flex-none",
              children: [r(We, {
                className: "absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96"
              }), l("div", {
                className: "relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10",
                children: [l("div", {
                  className: "flex items-center justify-between",
                  children: [r("h3", {
                    className: "text-base font-semibold text-sky-500",
                    children: "Get with all-access"
                  }), l(pe, {
                    href: "/all-access",
                    size: "sm",
                    children: ["Get all-access ", r("span", {
                      "aria-hidden": "true",
                      children: "→"
                    })]
                  })]
                }), l("div", {
                  className: "mt-3 flex items-center",
                  children: [e.advertised !== e.amount && l("p", {
                    className: "mr-3 text-lg font-semibold text-slate-500 line-through",
                    children: [e.symbol, e.advertised]
                  }), l("p", {
                    className: "text-[2.5rem] leading-none text-slate-900",
                    children: [e.country, e.symbol, r("span", {
                      className: "font-bold",
                      children: e.amount
                    })]
                  }), l("p", {
                    className: "ml-3 text-sm",
                    children: [r("span", {
                      className: "font-semibold text-slate-900",
                      children: "one-time payment"
                    }), r("br", {}), r("span", {
                      className: "text-slate-500",
                      children: "plus local taxes"
                    })]
                  })]
                }), r("p", {
                  className: "mt-6 text-sm leading-6 text-slate-600",
                  children: "Get lifetime access to all of the application UI, marketing, and ecommerce components, as well as all of our site templates for a single one-time purchase."
                }), e.advertised !== e.amount && l("div", {
                  className: "relative mt-6 flex items-start rounded-xl border border-slate-600/10 bg-slate-50 p-3",
                  children: [r("svg", {
                    className: "h-6 w-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: r("path", {
                      d: "M19.4067 15.0682L18.9748 14.455C18.7377 14.6219 18.6181 14.9106 18.6677 15.1963L19.4067 15.0682ZM19.4071 8.93218L18.6682 8.8039C18.6186 9.08961 18.7382 9.37832 18.9752 9.54532L19.4071 8.93218ZM18.3643 5.6359L18.8946 5.10557L18.3643 5.6359ZM15.068 4.59307L14.4548 5.02495C14.6218 5.26205 14.9105 5.38162 15.1963 5.33201L15.068 4.59307ZM8.93194 4.59319L8.8037 5.33214C9.08943 5.38172 9.37814 5.26214 9.54513 5.02504L8.93194 4.59319ZM4.59298 8.93208L5.02488 9.54524C5.26194 9.37826 5.38151 9.08957 5.33193 8.80386L4.59298 8.93208ZM4.59286 15.0678L5.33181 15.1961C5.38141 14.9104 5.26185 14.6217 5.02478 14.4547L4.59286 15.0678ZM5.6357 18.3641L5.10537 18.8945L5.10537 18.8945L5.6357 18.3641ZM8.93204 19.407L9.54521 18.9751C9.37821 18.738 9.08949 18.6184 8.80375 18.668L8.93204 19.407ZM15.068 19.4069L15.1962 18.6679C14.9105 18.6184 14.6218 18.7379 14.4548 18.975L15.068 19.4069ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM9.75 9.75V9C9.33579 9 9 9.33579 9 9.75H9.75ZM9.7575 9.75H10.5075C10.5075 9.33579 10.1717 9 9.7575 9V9.75ZM9.7575 9.7575V10.5075C10.1717 10.5075 10.5075 10.1717 10.5075 9.7575H9.7575ZM9.75 9.7575H9C9 10.1717 9.33579 10.5075 9.75 10.5075V9.7575ZM14.25 14.25V13.5C13.8358 13.5 13.5 13.8358 13.5 14.25H14.25ZM14.2575 14.25H15.0075C15.0075 13.8358 14.6717 13.5 14.2575 13.5V14.25ZM14.2575 14.2575V15.0075C14.6717 15.0075 15.0075 14.6717 15.0075 14.2575H14.2575ZM14.25 14.2575H13.5C13.5 14.6717 13.8358 15.0075 14.25 15.0075V14.2575ZM20.25 12C20.25 13.014 19.7476 13.9108 18.9748 14.455L19.8385 15.6814C20.9931 14.8683 21.75 13.5226 21.75 12H20.25ZM18.9752 9.54532C19.7478 10.0896 20.25 10.9862 20.25 12H21.75C21.75 10.4777 20.9934 9.13219 19.8391 8.31903L18.9752 9.54532ZM17.834 6.16623C18.551 6.88326 18.8299 7.87262 18.6682 8.8039L20.1461 9.06045C20.3876 7.669 19.9713 6.18221 18.8946 5.10557L17.834 6.16623ZM15.1963 5.33201C16.1276 5.17034 17.1169 5.44919 17.834 6.16623L18.8946 5.10557C17.818 4.02892 16.3312 3.61256 14.9397 3.85412L15.1963 5.33201ZM12 3.75C13.0139 3.75 13.9106 4.25228 14.4548 5.02495L15.6812 4.16119C14.868 3.00672 13.5224 2.25 12 2.25V3.75ZM9.54513 5.02504C10.0893 4.25232 10.986 3.75 12 3.75V2.25C10.4775 2.25 9.13188 3.00678 8.31875 4.16133L9.54513 5.02504ZM6.1662 6.1664C6.88319 5.44941 7.87247 5.17054 8.8037 5.33214L9.06017 3.85423C7.66879 3.61278 6.18211 4.02916 5.10554 5.10574L6.1662 6.1664ZM5.33193 8.80386C5.17035 7.87264 5.44922 6.88338 6.1662 6.1664L5.10554 5.10574C4.02898 6.1823 3.61259 7.66895 3.85402 9.06031L5.33193 8.80386ZM3.75 12C3.75 10.9861 4.25224 10.0895 5.02488 9.54524L4.16108 8.31893C3.00667 9.13207 2.25 10.4776 2.25 12H3.75ZM5.02478 14.4547C4.2522 13.9104 3.75 13.0138 3.75 12H2.25C2.25 13.5223 3.00661 14.8678 4.16094 15.681L5.02478 14.4547ZM6.16603 17.8338C5.449 17.1168 5.17014 16.1274 5.33181 15.1961L3.85391 14.9395C3.61236 16.331 4.02873 17.8178 5.10537 18.8945L6.16603 17.8338ZM8.80375 18.668C7.87245 18.8297 6.88308 18.5508 6.16603 17.8338L5.10537 18.8945C6.18203 19.9711 7.66886 20.3875 9.06033 20.1459L8.80375 18.668ZM12 20.25C10.9861 20.25 10.0894 19.7477 9.54521 18.9751L8.31888 19.8389C9.13201 20.9933 10.4776 21.75 12 21.75V20.25ZM14.4548 18.975C13.9106 19.7477 13.0139 20.25 12 20.25V21.75C13.5224 21.75 14.8681 20.9932 15.6812 19.8387L14.4548 18.975ZM17.8334 17.8336C17.1165 18.5505 16.1273 18.8294 15.1962 18.6679L14.9398 20.1458C16.3311 20.3871 17.8176 19.9707 18.8941 18.8943L17.8334 17.8336ZM18.6677 15.1963C18.8292 16.1275 18.5503 17.1167 17.8334 17.8336L18.8941 18.8943C19.9705 17.8178 20.3869 16.3313 20.1456 14.94L18.6677 15.1963ZM9.53033 15.5303L15.5303 9.53033L14.4697 8.46967L8.46967 14.4697L9.53033 15.5303ZM9.75 10.5H9.7575V9H9.75V10.5ZM9.0075 9.75V9.7575H10.5075V9.75H9.0075ZM9.7575 9.0075H9.75V10.5075H9.7575V9.0075ZM10.5 9.7575V9.75H9V9.7575H10.5ZM9.375 9.75C9.375 9.54289 9.54289 9.375 9.75 9.375V10.875C10.3713 10.875 10.875 10.3713 10.875 9.75H9.375ZM9.75 9.375C9.95711 9.375 10.125 9.54289 10.125 9.75H8.625C8.625 10.3713 9.12868 10.875 9.75 10.875V9.375ZM10.125 9.75C10.125 9.95711 9.95711 10.125 9.75 10.125V8.625C9.12868 8.625 8.625 9.12868 8.625 9.75H10.125ZM9.75 10.125C9.54289 10.125 9.375 9.95711 9.375 9.75H10.875C10.875 9.12868 10.3713 8.625 9.75 8.625V10.125ZM14.25 15H14.2575V13.5H14.25V15ZM13.5075 14.25V14.2575H15.0075V14.25H13.5075ZM14.2575 13.5075H14.25V15.0075H14.2575V13.5075ZM15 14.2575V14.25H13.5V14.2575H15ZM13.875 14.25C13.875 14.0429 14.0429 13.875 14.25 13.875V15.375C14.8713 15.375 15.375 14.8713 15.375 14.25H13.875ZM14.25 13.875C14.4571 13.875 14.625 14.0429 14.625 14.25H13.125C13.125 14.8713 13.6287 15.375 14.25 15.375V13.875ZM14.625 14.25C14.625 14.4571 14.4571 14.625 14.25 14.625V13.125C13.6287 13.125 13.125 13.6287 13.125 14.25H14.625ZM14.25 14.625C14.0429 14.625 13.875 14.4571 13.875 14.25H15.375C15.375 13.6287 14.8713 13.125 14.25 13.125V14.625Z",
                      fill: "#94A3B8"
                    })
                  }), l("p", {
                    className: "ml-2 text-sm leading-6 text-slate-700",
                    children: [r("strong", {
                      className: "font-semibold text-slate-900",
                      children: "Discounted"
                    }), " — since you own other Tailwind UI products."]
                  })]
                }), r("h4", {
                  className: "sr-only",
                  children: "All-access features"
                }), l("ul", {
                  className: "mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700",
                  children: [l("li", {
                    className: "flex",
                    children: [l("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 32 32",
                      className: "h-8 w-8 flex-none",
                      children: [r("path", {
                        fill: "#fff",
                        d: "M0 0h32v32H0z"
                      }), r("path", {
                        fill: "#E0F2FE",
                        d: "M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
                      }), r("path", {
                        fill: "#0EA5E9",
                        d: "M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
                      })]
                    }), l("p", {
                      className: "ml-5",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Over 500+ components"
                      }), " ", "— everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more."]
                    })]
                  }), l("li", {
                    className: "flex",
                    children: [l("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 32 32",
                      className: "h-8 w-8 flex-none",
                      children: [r("path", {
                        fill: "#fff",
                        d: "M0 0h32v32H0z"
                      }), r("rect", {
                        width: "23",
                        height: "22",
                        x: "3",
                        y: "5",
                        stroke: "#0EA5E9",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        rx: "2"
                      }), r("rect", {
                        width: "10",
                        height: "18",
                        x: "19",
                        y: "9",
                        fill: "#E0F2FE",
                        stroke: "#0EA5E9",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        rx: "2"
                      }), r("circle", {
                        cx: "6",
                        cy: "8",
                        r: "1",
                        fill: "#0EA5E9"
                      }), r("circle", {
                        cx: "9",
                        cy: "8",
                        r: "1",
                        fill: "#0EA5E9"
                      }), r("path", {
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        d: "M3 11h16"
                      })]
                    }), l("p", {
                      className: "ml-5",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Every site template"
                      }), " ", "— beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js."]
                    })]
                  }), l("li", {
                    className: "flex",
                    children: [l("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 32 32",
                      className: "h-8 w-8 flex-none",
                      children: [r("path", {
                        fill: "#fff",
                        d: "M0 0h32v32H0z"
                      }), r("path", {
                        fill: "#E0F2FE",
                        d: "M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
                      }), r("path", {
                        stroke: "#0EA5E9",
                        strokeLinecap: "round",
                        strokeWidth: "1.5",
                        d: "M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
                      }), r("circle", {
                        cx: "16",
                        cy: "16",
                        r: "14",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5"
                      })]
                    }), l("p", {
                      className: "ml-5",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Lifetime access"
                      }), " — get instant access to everything we have today, plus any new components and templates we add in the future."]
                    })]
                  })]
                }), l("div", {
                  className: "relative mt-10 flex rounded-xl border border-slate-600/10 bg-slate-50 p-6",
                  children: [l("svg", {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 flex-none",
                    stroke: "#94A3B8",
                    strokeWidth: "1.5",
                    children: [r("circle", {
                      cx: "11",
                      cy: "16",
                      r: "3.25",
                      fill: "#94A3B8",
                      fillOpacity: ".2"
                    }), r("circle", {
                      cx: "21",
                      cy: "13",
                      r: "3.25",
                      fill: "#94A3B8",
                      fillOpacity: ".2"
                    }), r("path", {
                      d: "M28.909 19c.223-.964.341-1.968.341-3 0-7.318-5.932-13.25-13.25-13.25S2.75 8.682 2.75 16c0 1.032.118 2.036.341 3",
                      strokeLinecap: "round"
                    }), r("path", {
                      d: "m18.031 29.016-2.187.109s-1.475-.118-1.827-.29c-1.049-.51-.579-2.915 0-3.95 1.157-2.064 3.752-5.135 7.125-5.135h.024c2.5 0 4.404 1.687 5.692 3.401-1.963 2.975-5.161 5.276-8.827 5.865Z",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      strokeLinejoin: "round"
                    }), r("path", {
                      d: "m14.001 24.913.016-.027c.26-.465.593-.98.991-1.5-1.042-.918-2.374-1.636-3.988-1.636H11c-2.094 0-3.847 1.208-5.055 2.492a12.987 12.987 0 0 0 7.987 4.595l.057-.016c-1.004-.534-.555-2.868.012-3.908Z",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      strokeLinejoin: "round"
                    })]
                  }), l("p", {
                    className: "ml-5 text-sm leading-6 text-slate-700",
                    children: [r("strong", {
                      className: "font-semibold text-slate-900",
                      children: "Available for teams"
                    }), " — get access to all of our components and templates plus any future updates for your entire team."]
                  })]
                })]
              })]
            }), l("div", {
              className: "relative mt-10 lg:mt-0 lg:w-1/2 lg:flex-none",
              children: [r("div", {
                className: "absolute -inset-y-8 -left-2 w-px bg-slate-900/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:left-0"
              }), r("div", {
                className: "absolute -inset-y-8 -right-2 w-px bg-slate-900/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:right-0 lg:hidden"
              }), r("div", {
                className: "absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -inset-x-8 bottom-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), t]
            })]
          })]
        }), l("section", {
          className: "mt-20 lg:mt-24",
          children: [r("h2", {
            className: "sr-only",
            children: "Testimonials"
          }), r("div", {
            className: "mx-auto max-w-[40rem] lg:max-w-[50rem]",
            children: l(be.Group, {
              defaultIndex: 1,
              children: [r(be.List, {
                className: "flex justify-center space-x-4 pt-2",
                children: Gl.map(n => l(be, {
                  className: ({
                    selected: a
                  }) => B("h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition [&:focus:not(:focus-visible)]:outline-none", {
                    "opacity-40": !a,
                    "-translate-y-2": a
                  }),
                  children: [r("img", {
                    src: n.img,
                    alt: ""
                  }), r("span", {
                    className: "sr-only",
                    children: n.name
                  })]
                }, n.name))
              }), r(be.Panels, {
                className: "mt-10",
                children: Gl.map(n => l(be.Panel, {
                  as: "figure",
                  className: "text-center",
                  children: [r("blockquote", {
                    className: "text-2xl leading-9 text-slate-900",
                    children: r("p", {
                      className: "before:content-['“'] after:content-['”']",
                      children: n.body
                    })
                  }), l("figcaption", {
                    className: "mt-8",
                    children: [r("span", {
                      className: "block text-base font-medium leading-7 text-slate-900",
                      children: n.name
                    }), r("span", {
                      className: "text-sm text-slate-600",
                      dangerouslySetInnerHTML: {
                        __html: n.handle
                      }
                    })]
                  })]
                }, n.name))
              })]
            })
          })]
        })]
      })]
    })
  }
  let Hh = {
    HTML: () => l(j, {
      children: [r("path", {
        d: "M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"
      }), r("path", {
        d: "M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"
      })]
    }),
    React: () => l(j, {
      children: [r("ellipse", {
        cx: "16",
        cy: "16",
        rx: "13",
        ry: "5"
      }), r("ellipse", {
        cx: "16",
        cy: "16",
        rx: "13",
        ry: "5",
        transform: "rotate(60 16 16)"
      }), r("ellipse", {
        rx: "13",
        ry: "5",
        transform: "matrix(-.5 .86603 .86603 .5 16 16)"
      }), r("circle", {
        cx: "16",
        cy: "16",
        r: "2"
      })]
    }),
    Vue: () => l(j, {
      children: [r("path", {
        d: "M19.924 5 16 11.644 12.075 5H3l13 23L29 5h-9.076Z"
      }), r("path", {
        d: "M19.879 5 16 11.26 12.121 5H8l8 13 8-13h-4.121Z"
      })]
    }),
    "Next.js": () => l(j, {
      children: [l("defs", {
        children: [l("linearGradient", {
          id: "next-icon-gradient-a",
          x1: "15.125",
          y1: "18.25",
          x2: "24.25",
          y2: "27.375",
          gradientUnits: "userSpaceOnUse",
          children: [r("stop", {
            offset: ".24",
            stopColor: "currentColor"
          }), r("stop", {
            offset: 1,
            stopColor: "currentColor",
            stopOpacity: 0
          })]
        }), l("linearGradient", {
          id: "next-icon-gradient-b",
          x1: "20.5",
          y1: "11.25",
          x2: "20.5",
          y2: "18.25",
          gradientUnits: "userSpaceOnUse",
          children: [r("stop", {
            stopColor: "currentColor"
          }), r("stop", {
            offset: 1,
            stopColor: "currentColor",
            stopOpacity: 0
          })]
        })]
      }), r("path", {
        d: "M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"
      }), r("path", {
        d: "M12 21.5V12l12.25 14.25",
        stroke: "url(#next-icon-gradient-a)"
      }), r("path", {
        d: "M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z",
        fill: "url(#next-icon-gradient-b)",
        strokeWidth: "0"
      })]
    })
  };

  function Oi({
    children: e,
    className: t,
    frameworks: n = ["HTML", "Vue", "React"]
  }) {
    return l("div", {
      className: B("flex flex-wrap", t),
      children: [e, n.map((a, i) => {
        let s = Hh[a];
        return l("div", {
          className: B("flex items-center text-sm font-medium text-slate-500", {
            "ml-6": i > 0
          }),
          children: [r("svg", {
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-8 w-8 flex-none stroke-current text-slate-400",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: r(s, {})
          }), r("span", {
            className: "ml-2.5",
            children: a
          })]
        }, a)
      })]
    })
  }
  const Zh = {
    indigo: {
      eyebrow: "text-indigo-600",
      iconShadow: "shadow-indigo-500/[.12]"
    },
    sky: {
      eyebrow: "text-sky-500",
      iconShadow: "shadow-sky-500/[.12]"
    }
  };

  function Vh({
    name: e
  }) {
    return {
      components: l("svg", {
        className: "h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]",
        viewBox: "0 0 40 40",
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [r("path", {
          d: "M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z",
          className: "fill-indigo-50 stroke-indigo-500"
        }), r("path", {
          d: "M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336",
          className: "stroke-indigo-500/50"
        }), r("path", {
          d: "M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z",
          className: "stroke-indigo-500"
        })]
      }),
      code: l("svg", {
        className: "h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]",
        viewBox: "0 0 40 40",
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [r("path", {
          d: "M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z",
          className: "fill-indigo-50 stroke-indigo-500"
        }), r("path", {
          d: "M22.25 11.75l-4.5 16.5",
          className: "stroke-indigo-500/50"
        }), r("path", {
          d: "M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5",
          className: "stroke-indigo-500"
        })]
      }),
      responsive: l("svg", {
        className: "h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]",
        viewBox: "0 0 40 40",
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [r("path", {
          d: "M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z",
          className: "fill-indigo-50 stroke-indigo-500"
        }), r("path", {
          d: "M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5",
          className: "stroke-indigo-500/50"
        }), r("path", {
          d: "M31.5 8.5l-23 23",
          className: "stroke-indigo-500"
        }), r("path", {
          d: "M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5",
          className: "stroke-indigo-500"
        })]
      }),
      technology: l("svg", {
        className: "h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]",
        viewBox: "0 0 40 40",
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [r("path", {
          d: "M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z",
          className: "fill-sky-50 stroke-sky-500"
        }), r("path", {
          opacity: .4,
          d: "M17.25 33.25h-8.5a2 2 0 01-2-2V8.75a2 2 0 012-2h22.5a2 2 0 012 2v1m-4 3h-18.5",
          className: "stroke-sky-500/40"
        }), r("path", {
          d: "M31.25 12.75h-8.5a2 2 0 00-2 2v16.5a2 2 0 002 2h8.5a2 2 0 002-2v-16.5a2 2 0 00-2-2z",
          className: "fill-white stroke-sky-500"
        }), r("path", {
          d: "M26.75 30.25h.5",
          className: "stroke-sky-500"
        })]
      }),
      customize: l("svg", {
        className: "h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]",
        viewBox: "0 0 40 40",
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [r("path", {
          d: "M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z",
          className: "fill-sky-50 stroke-sky-500"
        }), r("path", {
          d: "M24.847 33.25L19.82 20.113c-.324-.846.543-1.656 1.351-1.261L33.25 24.75l-6.426 2-1.977 6.5z",
          className: "fill-white stroke-sky-500"
        }), r("path", {
          d: "M33.25 20.25V9.75a3 3 0 00-3-3H9.75a3 3 0 00-3 3v20.5a3 3 0 003 3h10.5",
          className: "stroke-sky-500/40"
        }), r("path", {
          d: "M11.75 11.75v16.5",
          className: "stroke-sky-500"
        })]
      }),
      experts: l("svg", {
        className: "h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]",
        viewBox: "0 0 40 40",
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [r("path", {
          d: "M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z",
          className: "fill-sky-50 stroke-sky-500"
        }), r("path", {
          d: "M31.817 26a13.194 13.194 0 001.433-6c0-7.318-5.932-13.25-13.25-13.25S6.75 12.682 6.75 20c0 2.16.517 4.199 1.433 6",
          className: "stroke-sky-500/40"
        }), r("path", {
          d: "M15.75 18a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0z",
          className: "fill-white stroke-sky-500"
        }), r("path", {
          d: "M28.982 29.74c-.994-2.29-4.638-3.99-8.982-3.99-4.344 0-7.989 1.7-8.982 3.99A13.202 13.202 0 0020 33.25c3.466 0 6.62-1.33 8.982-3.51z",
          className: "fill-white stroke-sky-500"
        })]
      })
    }[e]
  }

  function xo({
    color: e,
    title: t,
    frameworks: n,
    description: a,
    buttons: i,
    features: s,
    background: o,
    children: c
  }) {
    return l(j, {
      children: [r("div", {
        className: "absolute inset-x-0 top-0 z-10 overflow-hidden pl-[50%] lg:hidden",
        children: r("img", {
          src: "/img/beams-basic-transparent.png",
          alt: "",
          className: "-ml-[39rem] w-[113.125rem] max-w-none"
        })
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden bg-slate-50 pt-12 md:pt-[5.75rem]",
        children: [o, l("div", {
          className: "mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8",
          children: [l("div", {
            className: "relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20",
            children: [r("h1", {
              className: B("text-base font-semibold leading-7", Zh[e].eyebrow),
              children: "By the makers of Tailwind CSS"
            }), r("p", {
              className: "mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]",
              children: t
            }), r(Oi, {
              frameworks: n,
              className: "mt-4"
            }), r("p", {
              className: "mt-4 text-base leading-7 text-slate-600",
              children: a
            }), i]
          }), c]
        }), r("div", {
          className: "relative z-20 sm:z-auto",
          children: r("div", {
            className: "mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8",
            children: r("div", {
              className: "relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3",
              children: s.map(({
                title: u,
                description: d,
                icon: b
              }) => l("div", {
                className: "flex",
                children: [r("div", {
                  className: "p-0.5",
                  children: r(Vh, {
                    name: b
                  })
                }), l("div", {
                  className: "ml-6",
                  children: [r("h2", {
                    className: "text-sm font-semibold leading-6 text-slate-900",
                    children: u
                  }), r("p", {
                    className: "mt-2 text-sm leading-6 text-slate-700",
                    children: d
                  })]
                })]
              }, u))
            })
          })
        }), r("div", {
          className: "pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"
        })]
      })]
    })
  }

  function zh() {
    return l("div", {
      className: "relative z-10 mt-12 hidden select-none lg:flex",
      children: [l("div", {
        className: "z-20 flex flex-col",
        children: [l("div", {
          className: "relative p-4",
          children: [r("div", {
            className: "absolute bottom-0 left-11 right-0 top-8 bg-slate-900/[0.03]"
          }), r("div", {
            className: "pointer-events-auto relative z-10 w-[24.125rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",
            children: r(yo, {
              container: !1
            })
          }), l("div", {
            className: "z-0",
            children: [r("div", {
              className: "absolute -right-[95%] left-0 top-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -bottom-16 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -right-2/3 top-px -mb-px flex h-8 items-end overflow-hidden",
              children: r(We, {
                className: "-mb-px h-[2px] w-80 -scale-x-100",
                subtle: !0
              })
            })]
          })]
        }), l("div", {
          className: "relative ml-6 flex items-center justify-end",
          children: [l("div", {
            className: "relative p-4",
            children: [r($r, {}), r("div", {
              className: "z-0",
              children: r("div", {
                className: "absolute -top-full bottom-2/3 left-0 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              })
            })]
          }), l("div", {
            className: "relative p-4",
            children: [r(vo, {}), l("div", {
              className: "z-0",
              children: [r("div", {
                className: "absolute -bottom-8 -top-12 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -bottom-8 -top-12 left-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              })]
            })]
          }), r("div", {
            className: "relative p-4",
            children: r("div", {
              className: "pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500",
              children: "Button A"
            })
          }), l("div", {
            className: "z-0",
            children: [r("div", {
              className: "absolute -left-12 -right-4 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -right-4 bottom-0 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            })]
          })]
        })]
      }), l("div", {
        className: "relative z-10 mt-8",
        children: [l("div", {
          className: "relative p-4",
          children: [r(Ah, {}), l("div", {
            className: "z-0",
            children: [r("div", {
              className: "absolute -left-12 -right-4 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -bottom-16 -top-2 left-[21.875rem] w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            })]
          })]
        }), r("div", {
          className: "relative p-4",
          children: r(bo, {
            amount: 2
          })
        })]
      })]
    })
  }

  function wo({
    className: e,
    tailwindVersion: t
  }) {
    return r("section", {
      id: "faqs",
      className: B("mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8", e),
      children: l("div", {
        className: "mx-auto grid max-w-[40rem] grid-cols-1 gap-x-14 gap-y-16 lg:max-w-none lg:grid-cols-12",
        children: [l("div", {
          className: "lg:col-span-4",
          children: [r("h2", {
            className: "text-base font-semibold leading-7 text-indigo-500",
            children: "Frequently asked questions"
          }), r("p", {
            className: "mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]",
            children: "Everything you need to know"
          })]
        }), l("div", {
          className: "-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6",
          children: [l(Xe, {
            title: "General",
            children: [r(X, {
              question: "What does “lifetime access” mean exactly?",
              children: l("p", {
                children: ["Tailwind UI products are a", " ", r("strong", {
                  children: "one-time purchase, with no recurring subscription"
                }), ". When you purchase any Tailwind UI product, you have access to all of the content in that product forever."]
              })
            }), l(X, {
              question: "What does “free updates” include?",
              children: [r("p", {
                children: "When you purchase any Tailwind UI product, any improvements we make or new content we add to that product will always be free for anyone who owns that product."
              }), l("p", {
                children: [r("strong", {
                  children: "Individual component packages:"
                }), " When you buy the Marketing, Application UI, or Ecommerce component packages individually, you'll get any new components we add to those packages in the future at no extra cost."]
              }), l("p", {
                children: ["We regularly add new components to these packages whenever we have new ideas, and you can see what previous updates have looked like", " ", r("a", {
                  href: "/changelog",
                  children: "in our changelog"
                }), "."]
              }), l("p", {
                children: ["Any ", r("em", {
                  children: "new"
                }), " component packages we release are considered separate products, and can be purchased at an upgrade price."]
              }), l("p", {
                children: [r("strong", {
                  children: "All-access:"
                }), " When you purchase an all-access license, you get access to every component package ", r("em", {
                  children: "and"
                }), " every site template available today, plus any additional component packages or templates we release in the future at no additional cost."]
              }), r("p", {
                children: "This means that if we add a brand new component package like “Journalism” or design a new social media website template, access to those products are included in your original purchase, with no upgrade cost."
              })]
            })]
          }), l(Xe, {
            title: "Compatibility",
            children: [l(X, {
              question: "Are Figma, Sketch, or Adobe XD files included?",
              children: [r("p", {
                children: "No, design assets for tools like Figma, Sketch, or Adobe XD are not included."
              }), r("p", {
                children: "We don't produce high-quality design artifacts as part of our own design and development process, so building these extra resources means we can't spend as much time creating new examples in code which is where we believe we can provide the most value."
              })]
            }), l(X, {
              question: "What JS framework is used?",
              children: [r("p", {
                children: "All of the components in Tailwind UI are provided in three formats: React, Vue, and vanilla HTML."
              }), l("p", {
                children: ["The React and Vue examples are fully functional out-of-the-box, and are powered by", " ", r("a", {
                  href: "https://headlessui.dev",
                  children: "Headless UI"
                }), " — a library of unstyled components we designed to integrate perfectly with Tailwind CSS. Headless UI supports both React and Vue 3, but is not compatible with Vue 2."]
              }), l("p", {
                children: ["The vanilla HTML examples ", r("strong", {
                  children: "do not include any JavaScript"
                }), " and are designed for people who prefer to write any necessary JavaScript themselves."]
              }), r("p", {
                children: "Most of the components do not rely on JS at all, but for the ones that do (dropdowns, modals, etc.) we've provided some simple comments in the HTML to explain things like what classes you need to use for different states (like a toggle switch being on or off), or what classes we recommend for transitioning elements on to or off of the screen (like a modal opening)."
              }), l("p", {
                children: ["To get a better idea of how this looks in practice,", " ", r("a", {
                  href: "/documentation#integrating-with-javascript-frameworks",
                  children: "check out our documentation"
                }), "."]
              })]
            }), r(X, {
              question: "What version of Tailwind CSS is used?",
              children: l("p", {
                children: ["Everything in Tailwind UI is designed and developed for the latest version of Tailwind CSS, which is currently Tailwind CSS v", t, "."]
              })
            }), l(X, {
              question: "What browsers are supported?",
              children: [r("p", {
                children: "The components in Tailwind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge."
              }), r("p", {
                children: "We don't support Internet Explorer 11."
              })]
            })]
          }), l(Xe, {
            title: "Licensing",
            children: [l(X, {
              question: "Can I upgrade to a team license later?",
              children: [r("p", {
                children: "Yup! If you're a solo developer you can start with a personal license, and then upgrade to the team license later if other developers join your team."
              }), r("p", {
                children: 'There is an "Upgrade to Team License" option under the "Account" menu within the Tailwind UI app after logging in.'
              }), r("p", {
                children: "Note that we only offer team all-access licenses, and do not offer team licenses for the individual component packages."
              })]
            }), l(X, {
              question: "Do I need to purchase a license for each project I work on?",
              children: [r("p", {
                children: "Unlike most other templates/themes, you don't have to buy a new Tailwind UI license every time you want to use it on a new project."
              }), r("p", {
                children: "As long as what you're building is allowed as per the license, you can build as many sites as you want without ever having to buy an additional license."
              }), l("p", {
                children: ["For more information and examples,", " ", r(U, {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI for client projects?",
              children: [r("p", {
                children: "Yes! As long what you're building is a custom website developed for a single client, you can totally use components and templates in Tailwind UI to help build it."
              }), r("p", {
                children: "The only thing you can't do is use Tailwind UI to build a website or template that is resold to multiple clients."
              }), l("p", {
                children: ["For more information and examples, ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI for my own commercial projects?",
              children: [r("p", {
                children: "Absolutely! Your license gives you permission to build as many of your own projects as you like, whether those are simple public websites or SaaS applications that end users need to pay to access."
              }), r("p", {
                children: "As long as what you’re building isn’t a website builder or other tool that customers can use to create their own sites using elements that originate from Tailwind UI, you’re good to go."
              }), l("p", {
                children: ["For more information and examples,", " ", r(U, {
                  href: "/license",
                  children: "read through our license"
                }), ".."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI in open source projects?",
              children: [r("p", {
                children: "Yep! As long as what you're building is some sort of actual website and not a derivative component library, theme builder, or other product where the primary purpose is clearly to repackage and redistribute our components, it's totally okay for that project to be open source."
              }), l("p", {
                children: ["For more information and examples of what is and isn't okay,", " ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I sell templates/themes I build with Tailwind UI?",
              children: [r("p", {
                children: "No, you cannot use Tailwind UI to create derivative products like themes, UI kits, page builders, or anything else where you would be repackaging and redistributing our components or templates for someone else to use to build their own sites."
              }), l("p", {
                children: ["For more information and examples of what is and isn't okay,", " ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            })]
          }), l(Xe, {
            title: "Support",
            children: [l(X, {
              question: "Do you offer technical support?",
              children: [r("p", {
                children: "Tailwind UI is a self-serve product, meaning that while we do offer customer support for account management and licensing related concerns, the expectation is that customers have the requisite knowledge of Tailwind CSS, HTML, React, and Vue to use the product successfully."
              }), l("p", {
                children: ["Because every project is different and the way independently authored pieces of code interact can be complex and time-consuming to understand,", " ", r("strong", {
                  children: "we do not offer technical support or consulting"
                }), "."]
              }), r("p", {
                children: "Tailwind UI customers do get access to a private Discord community where you can ask questions and help others with their questions in return, but we don't offer first-party technical support or consulting here ourselves."
              })]
            }), r(X, {
              question: "What is your refund policy?",
              children: l("p", {
                children: ["If you're unhappy with your purchase for any reason, email us at", " ", r("a", {
                  href: "mailto:support@tailwindui.com",
                  children: "support@tailwindui.com"
                }), " within 30 days and we'll refund you in full, no questions asked."]
              })
            })]
          })]
        })]
      })
    })
  }

  function No({
    versionPrefix: e,
    tailwindVersion: t,
    can: n,
    products: a,
    allAccessPricing: i
  }) {
    let s = H.useRef(),
      [o, c] = H.useState(!1);
    const u = e !== "/v1" && !a.some(d => d.isLicensed);
    return H.useEffect(() => {
      let d = !1;
      const b = () => d = !0;
      window.addEventListener("scroll", b, {
        passive: !0
      });
      let w = requestAnimationFrame(function h() {
        s.current && d && (d = !1, c(s.current.getBoundingClientRect().top === 0)), w = requestAnimationFrame(h)
      });
      return () => {
        cancelAnimationFrame(w), window.removeEventListener("scroll", b)
      }
    }, [s.current]), l(j, {
      children: [r(we, {
        title: "Tailwind CSS Components - Tailwind UI"
      }), u ? r(xo, {
        color: "indigo",
        title: "Beautiful UI components, crafted with Tailwind CSS.",
        frameworks: ["HTML", "React", "Vue"],
        description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
        buttons: l("div", {
          className: "mt-8 flex gap-4",
          children: [l(pe, {
            size: "lg",
            href: "/preview",
            variant: "primary",
            children: ["Live preview", " ", r("span", {
              "aria-hidden": "true",
              className: "text-slate-400 sm:inline",
              children: "→"
            })]
          }), l(pe, {
            size: "lg",
            href: "/documentation",
            variant: "secondary",
            children: ["Documentation", " ", r("span", {
              "aria-hidden": "true",
              className: "text-black/25 sm:inline",
              children: "→"
            })]
          })]
        }),
        firstFeatureTitle: "500+ Components",
        firstFeatureDescription: "Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.",
        secondFeatureTitle: "React, Vue, and HTML",
        secondFeatureDescription: "Interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.",
        thirdFeatureTitle: "Fully Responsive",
        thirdFeatureDescription: "Every example is fully responsive and carefully designed and implemented to look great at any screen size.",
        features: [{
          title: "500+ Components",
          description: "Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.",
          icon: "components"
        }, {
          title: "React, Vue, and HTML",
          description: "Interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.",
          icon: "code"
        }, {
          title: "Fully Responsive",
          description: "Every example is fully responsive and carefully designed and implemented to look great at any screen size.",
          icon: "responsive"
        }],
        background: r("div", {
          className: "absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/public/img/beams-components.png')] bg-[length:1000px_700px] bg-[position:calc(50%_+_190px)_-50px] bg-no-repeat lg:block"
        }),
        children: r(zh, {})
      }) : r("div", {
        className: "absolute inset-x-0 top-0 overflow-hidden pl-[50%]",
        children: r("img", {
          src: "/img/beams-basic.png",
          alt: "",
          className: "-ml-[39rem] w-[113.125rem] max-w-none"
        })
      }), r("div", {
        ref: s,
        className: B("sticky top-0 overflow-x-auto whitespace-nowrap border-b transition duration-100 ", u || o ? "z-50 border-transparent bg-white shadow-sm" : "z-40 border-slate-900/5 bg-transparent"),
        children: l("div", {
          className: "mx-auto flex max-w-container justify-between space-x-8 py-4 text-sm font-semibold leading-6 text-slate-900",
          children: [r("div", {
            className: "flex space-x-8 pl-4 sm:pl-6 lg:pl-8",
            children: a.map(d => r("a", {
              href: `#${d.anchor}`,
              children: d.name
            }, d.name))
          }), r("div", {
            className: "flex space-x-8 pr-4 sm:pr-6 lg:pr-8",
            children: n.purchaseAllAccess && l(j, {
              children: [r("a", {
                href: "#pricing",
                children: "Pricing"
              }), r("a", {
                href: "#faqs",
                children: r("abbr", {
                  className: "no-underline",
                  title: "Frequently asked questions",
                  children: "FAQs"
                })
              })]
            })
          })]
        })
      }), r("div", {
        className: B("relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8", e !== "/v1" && n.purchaseAllAccess && "pb-20"),
        children: a.map(d => l("section", {
          id: d.anchor,
          className: "scroll-mt-28",
          children: [r("h2", {
            className: "text-xl font-bold text-slate-900",
            children: d.name
          }), r("p", {
            className: "mt-3 text-sm leading-7 text-slate-500",
            children: d.description
          }), r("div", {
            className: "mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12",
            children: d.categories.map(b => l("section", {
              id: b.anchor,
              className: "grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4",
              children: [r("h3", {
                className: "text-base font-semibold text-slate-900",
                children: b.name
              }), r("ul", {
                className: "col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8",
                children: b.subcategories.map(w => r("li", {
                  children: r(go, {
                    category: w
                  })
                }, w.name))
              })]
            }, b.name))
          })]
        }, d.name))
      }), e !== "/v1" && n.purchaseAllAccess && l(j, {
        children: [r(jh, {
          price: i,
          children: r("ul", {
            children: a.map((d, b) => l("li", {
              className: "relative px-2 py-8 sm:px-10",
              children: [b > 0 && r("div", {
                className: "absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), l("div", {
                className: "flex items-center justify-between",
                children: [r("h3", {
                  className: "text-sm font-semibold text-slate-500",
                  children: d.name
                }), d.isLicensed ? l("div", {
                  className: "inline-flex justify-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 ring-1 ring-slate-900/10",
                  children: [r("svg", {
                    className: "mr-1 h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    children: r("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M5 13l4 4L19 7"
                    })
                  }), "Owned"]
                }) : l(pe, {
                  href: d.checkout_url,
                  size: "sm",
                  variant: "outline",
                  children: ["Get package", l("span", {
                    className: "sr-only",
                    children: [", ", d.name]
                  })]
                })]
              }), l("p", {
                className: "flex items-center",
                children: [l("span", {
                  className: "text-2xl text-slate-900",
                  children: [d.price.country, d.price.symbol, r("span", {
                    className: "font-bold",
                    children: d.price.amount
                  })]
                }), r("span", {
                  className: "ml-2 text-sm text-slate-500",
                  children: "plus local taxes"
                })]
              }), r("p", {
                className: "mt-3 text-sm leading-6 text-slate-600",
                children: d.pricing_description
              })]
            }, d.name))
          })
        }), r(wo, {
          tailwindVersion: t,
          className: "mt-20 scroll-m-20 sm:mt-24 sm:scroll-m-24 xl:mt-32 xl:scroll-m-32"
        })]
      })]
    })
  }
  No.layout = e => r(De, {
    children: e,
    showBorder: e.props.products.some(t => t.isLicensed)
  });
  const Dh = Object.freeze(Object.defineProperty({
    __proto__: null,
    Faqs: wo,
    default: No
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function ko({
    tableOfContents: e,
    content: t
  }) {
    return l(j, {
      children: [r(we, {
        title: "Documentation"
      }), r("div", {
        className: "absolute inset-x-0 top-0 overflow-hidden pl-[50%]",
        children: r("img", {
          src: "/img/beams-basic.png",
          alt: "",
          className: "-ml-[39rem] w-[113.125rem] max-w-none"
        })
      }), l("div", {
        className: "relative mx-auto w-full max-w-container px-4 pt-12 sm:px-6 sm:pt-16 lg:flex lg:justify-between lg:px-8 lg:pt-20",
        children: [r("div", {
          className: "mx-auto max-w-[40rem] lg:mx-0 lg:max-w-none lg:flex-none",
          children: r("ul", {
            role: "list",
            className: "space-y-10 text-sm leading-6 text-slate-700 lg:sticky lg:top-0 lg:-mt-16 lg:h-screen lg:w-72 lg:overflow-y-auto lg:py-16 lg:pr-8 lg:[mask-image:linear-gradient(to_bottom,transparent,white_4rem,white)]",
            children: e.map((n, a) => l("li", {
              children: [r("a", {
                href: `#${n.slug}`,
                className: "font-semibold text-slate-900",
                children: n.name
              }), n.children && r("ul", {
                role: "list",
                className: "mt-4 space-y-2 border-l border-slate-200 pl-6",
                children: n.children.map((i, s) => r("li", {
                  children: r("a", {
                    href: `#${i.slug}`,
                    children: i.name
                  })
                }, s))
              })]
            }, a))
          })
        }), r(Ve, {
          size: "sm",
          className: "mx-auto mt-20 min-w-0 max-w-[40rem] lg:ml-16 lg:mr-0 lg:mt-0 lg:max-w-[50rem] lg:flex-auto",
          dangerouslySetInnerHTML: {
            __html: t
          }
        })]
      })]
    })
  }
  ko.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const Bh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ko
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Uh() {
    const {
      data: e,
      setData: t,
      post: n,
      processing: a,
      wasSuccessful: i,
      errors: s
    } = ut({
      email: ""
    });

    function o(c) {
      c.preventDefault(), n(c.target.action)
    }
    return i ? r(Wh, {}) : l("div", {
      className: "max-w-sm",
      children: [r("h1", {
        className: "mb-2 text-center text-sm font-semibold text-gray-900",
        children: "Reset your password"
      }), r("p", {
        className: "mb-10 text-center text-sm",
        children: "Enter your email and we'll send you a link to reset your password."
      }), l("form", {
        onSubmit: o,
        action: "/password/email",
        className: "w-full",
        children: [r(Fe, {
          label: "Email address",
          id: "email-address",
          type: "email",
          error: !!s.email,
          value: e.email,
          onChange: c => t("email", c.target.value),
          required: !0,
          autoFocus: !0
        }), s.email && r("p", {
          className: "mt-3 text-xs font-medium text-red-600",
          children: s.email
        }), r(Ge, {
          type: "submit",
          disabled: a,
          className: "mt-6 w-full",
          children: "Reset your password"
        })]
      })]
    })
  }

  function Wh() {
    return r("div", {
      className: "max-w-sm",
      children: l("div", {
        className: "-mt-2 text-center text-sm",
        children: [l("svg", {
          "aria-hidden": "true",
          width: "32",
          height: "32",
          fill: "none",
          className: "mx-auto mb-6",
          children: [r("circle", {
            cx: "16",
            cy: "16",
            r: "13.25",
            className: "fill-sky-50 stroke-sky-500",
            strokeWidth: "1.5"
          }), r("path", {
            d: "M11 16l2.26 3.013a1 1 0 001.552.059L21 12",
            className: "stroke-sky-500",
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          })]
        }), r("h1", {
          className: "mb-2 font-semibold text-gray-900",
          children: "We’ve sent you a password reset link"
        }), r("p", {
          className: "mb-6",
          children: "You should receive an email any minute with a link to reset your password."
        }), l(U, {
          className: "font-semibold leading-6 text-sky-500 hover:text-sky-600",
          href: "/login",
          children: ["Sign in to your account ", r("span", {
            "aria-hidden": "true",
            children: "→"
          })]
        })]
      })
    })
  }

  function qh() {
    return r(j, {
      children: l("div", {
        className: "space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0",
        children: [r("p", {
          className: "text-center sm:text-left",
          children: "Don't have an account?"
        }), l(pe, {
          href: "/all-access",
          variant: "outline",
          children: ["Get access ", r("span", {
            "aria-hidden": "true",
            children: "→"
          })]
        })]
      })
    })
  }

  function Gh() {
    return l(j, {
      children: [r(we, {
        title: "Forgot Password"
      }), r(Nt, {
        children: r(Uh, {}),
        footer: r(qh, {})
      })]
    })
  }
  const Yh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gh
  }, Symbol.toStringTag, {
    value: "Module"
  })),
    Yl = [{
      title: "Primer",
      type: "Info product",
      description: "We’ve actually published four info products ourselves and this landing page is honestly better than the sites we designed for all of those.",
      background: "md:bg-blue-500",
      border: "border-blue-500",
      text: "text-blue-600",
      imageUrl: "/img/templates/primer/preview.png"
    }, {
      title: "Transmit",
      type: "Podcast",
      description: "You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.",
      background: "md:bg-pink-500",
      border: "border-pink-500",
      text: "text-pink-600",
      imageUrl: "/img/templates/transmit/preview.png"
    }, {
      title: "Syntax",
      type: "Documentation",
      description: "Writing documentation is enough to make you rip your hair out without worrying about the design. Let us help you keep a few strands.",
      background: "md:bg-sky-500",
      border: "border-sky-500",
      text: "text-sky-600",
      imageUrl: "/img/templates/syntax/preview.png"
    }, {
      title: "Salient",
      type: "SaaS marketing",
      description: "Every SaaS marketing site uses the same formula — a hero, feature sections, some testimonials, you know the drill. But some are prettier than others.",
      background: "md:bg-blue-500",
      border: "border-blue-500",
      text: "text-blue-600",
      imageUrl: "/img/templates/salient/preview.png"
    }];

  function Jh() {
    let [e, t] = x.useState(0);
    return l(j, {
      children: [r("div", {
        className: "-mx-4 mt-16 flex overflow-x-auto sm:-mx-6 lg:block",
        children: r("div", {
          className: "min-w-full flex-none px-4 sm:px-6",
          children: r("div", {
            className: "flex space-x-10 border-t border-slate-200 md:space-x-6 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0",
            children: Yl.map(({
              title: n,
              type: a,
              description: i,
              background: s,
              text: o,
              border: c
            }, u) => {
              let d = e === u;
              return l("div", {
                className: B("group relative -mt-px flex flex-none flex-col items-start border-t pb-6 pt-4 text-left md:w-[35vw] md:pb-16 md:pt-8 lg:w-auto", {
                  [c]: d,
                  "border-transparent hover:border-slate-400": !d
                }),
                children: [r("h3", {
                  className: "md:mt-4",
                  children: l("button", {
                    type: "button",
                    onClick: () => t(u),
                    className: B("text-base font-semibold leading-7 md:text-slate-900", {
                      [o]: d,
                      "text-slate-900": !d
                    }),
                    children: [r("span", {
                      className: "absolute inset-0 -top-px"
                    }), n]
                  })
                }), r("p", {
                  className: B("text-sm leading-6 text-slate-600 md:order-first md:rounded-full md:px-2 md:text-xs md:font-semibold md:leading-7", {
                    [s]: d,
                    "md:text-white": d,
                    "md:bg-slate-100 md:text-slate-500 md:group-hover:bg-slate-200": !d
                  }),
                  children: a
                }), r("p", {
                  className: "mt-2 hidden text-sm leading-6 text-slate-700 md:block",
                  children: i
                })]
              }, n)
            })
          })
        })
      }), r("div", {
        className: "-mx-4 flex transition-transform duration-500",
        style: {
          transform: `translateX(${e * -100}%)`
        },
        children: Yl.map(({
          title: n,
          description: a,
          imageUrl: i
        }) => l("div", {
          className: "w-full flex-none sm:px-4",
          children: [r("p", {
            className: "px-4 text-sm leading-6 text-slate-700 sm:px-0 md:hidden",
            children: a
          }), r("img", {
            src: i,
            alt: `Screenshot of the ${n} template`,
            className: "mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0"
          })]
        }, n))
      })]
    })
  }

  function So({
    products: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "Tailwind UI - Official Tailwind CSS Components & Templates"
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]",
        children: [r("img", {
          src: "/img/beams-home@95.jpg",
          alt: "",
          className: "absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"
        }), l("div", {
          className: "relative mx-auto mt-16 grid w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32",
          children: [r("div", {
            className: "col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500",
            "aria-hidden": "true",
            children: "By the makers of Tailwind CSS"
          }), r("h1", {
            className: "col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]",
            children: "Build your next idea even faster."
          }), r("p", {
            className: "col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700",
            children: "Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project."
          }), l("div", {
            className: "col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
            children: [l(pe, {
              size: "lg",
              href: "/components",
              variant: "primary",
              children: ["Browse components", " ", r("span", {
                "aria-hidden": "true",
                className: "hidden text-slate-400 sm:inline",
                children: "→"
              })]
            }), l(pe, {
              size: "lg",
              href: "/templates",
              variant: "secondary",
              children: ["Explore templates", " ", r("span", {
                "aria-hidden": "true",
                className: "hidden text-black/25 sm:inline",
                children: "→"
              })]
            })]
          }), r("div", {
            className: "pointer-events-none col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end",
            children: r(Mh, {})
          })]
        })]
      }), l("section", {
        className: "mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8",
        children: [l("div", {
          className: "max-w-2xl",
          children: [r("h2", {
            className: "text-base font-semibold leading-7 text-indigo-600",
            children: "Components"
          }), r("p", {
            className: "mt-4 text-4xl font-extrabold tracking-tight text-slate-900",
            children: "Beautifully crafted UI components, ready for your next project."
          })]
        }), r("div", {
          className: "max-w-xl",
          children: r("p", {
            className: "mt-4 text-base leading-7 text-slate-700",
            children: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content."
          })
        }), r("div", {
          className: "mt-6",
          children: l(U, {
            href: "/components",
            className: "text-base font-semibold text-indigo-600 hover:text-indigo-700",
            children: ["Browse all components ", r("span", {
              "aria-hidden": "true",
              children: "→"
            })]
          })
        }), r(be.Group, {
          children: ({
            selectedIndex: t
          }) => l(j, {
            children: [r(be.List, {
              className: "mt-16 flex border-t border-slate-200 sm:space-x-10 md:grid md:grid-cols-3 md:gap-x-8 md:space-x-0",
              children: e.map(({
                name: n,
                description: a
              }, i) => l(x.Fragment, {
                children: [r("div", {
                  children: l("div", {
                    className: B("relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8", {
                      "border-indigo-500": t === i,
                      "border-transparent hover:border-slate-400": t !== i
                    }),
                    children: [r("h3", {
                      children: l(be, {
                        className: B("whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&:not(:focus-visible)]:focus:outline-none", {
                          "text-indigo-600": t === i,
                          "text-slate-900": t !== i
                        }),
                        children: [r("span", {
                          className: "absolute inset-0 -top-px"
                        }), n]
                      })
                    }), r("p", {
                      className: "mt-2 hidden text-sm leading-6 text-slate-700 md:block",
                      children: a
                    })]
                  })
                }), i < e.length - 1 && r("div", {
                  className: "w-10 min-w-[1rem] shrink sm:hidden",
                  "aria-hidden": "true"
                })]
              }, n))
            }), r(be.Panels, {
              children: e.map(n => l(be.Panel, {
                children: [r("p", {
                  className: "text-sm leading-6 text-slate-700 md:hidden",
                  children: n.description
                }), l("div", {
                  className: "relative mt-10 md:mt-0",
                  children: [r("ul", {
                    className: "grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: n.categories.map((a, i) => r("li", {
                      className: B({
                        "hidden xl:block": i > 8,
                        "hidden lg:block": i > 5 && i <= 8
                      }),
                      children: r(go, {
                        category: a
                      })
                    }, a.name))
                  }), r("div", {
                    className: "pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"
                  })]
                }), r("div", {
                  className: "pointer-events-none relative z-10 -mt-5 flex justify-center",
                  children: l(pe, {
                    size: "lg",
                    href: `/components/#${n.anchor}`,
                    className: "pointer-events-auto",
                    children: ["Show more...", r("span", {
                      className: "sr-only",
                      children: `, ${n.name}`
                    })]
                  })
                })]
              }, n.name))
            })]
          })
        })]
      }), r("section", {
        className: "mt-32 w-full overflow-hidden",
        children: l("div", {
          className: "mx-auto max-w-container px-4 sm:px-6 lg:px-8",
          children: [l("div", {
            className: "max-w-2xl",
            children: [r("h2", {
              className: "text-base font-semibold leading-7 text-sky-500",
              children: "Templates"
            }), r("p", {
              className: "mt-4 text-4xl font-extrabold tracking-tight text-slate-900",
              children: "Production-ready website templates, built the way you want them."
            })]
          }), r("div", {
            className: "max-w-xl",
            children: r("p", {
              className: "mt-4 text-base leading-7 text-slate-700",
              children: "Visually-stunning, easy to customize site templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS."
            })
          }), r("div", {
            className: "mt-6",
            children: l(U, {
              href: "/templates",
              className: "text-base font-semibold text-sky-500 hover:text-slate-700",
              children: ["Explore all templates ", r("span", {
                "aria-hidden": "true",
                children: "→"
              })]
            })
          }), r(Jh, {})]
        })
      })]
    })
  }
  So.layout = e => r(De, {
    children: e
  });
  const Kh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: So
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Xh({
    team: e
  }) {
    return l("div", {
      className: "w-full max-w-sm text-center text-sm",
      children: [l("h1", {
        className: "mb-2 font-semibold text-gray-900",
        children: ["The ", e.name, " team has reached its seat limit."]
      }), r("p", {
        className: "mb-10",
        children: "Please have the team owner contact us if your team requires additional seats."
      }), r(pe, {
        href: "mailto:support@tailwindui.com",
        className: "mb-6 block w-full rounded-md border border-transparent bg-gray-700 px-3 py-2 font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 sm:text-sm",
        children: "Email support@tailwindui.com"
      })]
    })
  }

  function Qh({
    team: e,
    form: t,
    submit: n
  }) {
    const {
      data: a,
      setData: i,
      processing: s,
      errors: o
    } = t;
    return l("div", {
      className: "w-full max-w-sm text-sm",
      children: [l("h1", {
        className: "mb-2 text-center font-semibold text-gray-900",
        children: ["You've been invited to join the ", e.name, " team."]
      }), r("p", {
        className: "mb-10 text-center",
        children: "Create an account to access Tailwind UI."
      }), l("form", {
        onSubmit: n,
        children: [r(Fe, {
          className: "mb-4",
          label: "Email address",
          placeholder: "Email address",
          id: "email-address",
          type: "email",
          error: o.email,
          value: a.email,
          onChange: c => i("email", c.target.value),
          required: !0
        }), r(Fe, {
          className: "mb-6",
          label: "Password",
          placeholder: "Password",
          id: "password",
          type: "password",
          autoComplete: "new-password",
          error: o.password,
          value: a.password,
          onChange: c => i("password", c.target.value),
          required: !0
        }), r(Ge, {
          type: "submit",
          disabled: s,
          className: "mb-10 block w-full rounded-md border border-transparent bg-gray-700 px-3 py-2 font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 sm:text-sm",
          children: "Create account and join team"
        })]
      }), l("div", {
        className: "mb-6 flex items-center",
        children: [r("div", {
          className: "h-px flex-auto bg-gradient-to-l from-gray-300"
        }), r("p", {
          className: "mx-6 flex-none",
          children: "Or"
        }), r("div", {
          className: "h-px flex-auto bg-gradient-to-r from-gray-300"
        })]
      }), r(pe, {
        href: "/login",
        data: {
          intended_url: e.invite_url
        },
        variant: "outline",
        className: "w-full",
        children: "Join this team with an existing account"
      })]
    })
  }

  function ef({
    auth: e,
    team: t,
    form: n,
    submit: a
  }) {
    const {
      processing: i
    } = n;
    return l("div", {
      className: "w-full max-w-sm text-sm",
      children: [l("h1", {
        className: "mb-2 text-center font-semibold text-gray-900",
        children: ["You've been invited to join the ", t.name, " team."]
      }), l("p", {
        className: "mb-10 text-center",
        children: ["You’re logged in as ", r("span", {
          className: "font-medium text-gray-900",
          children: e.user.email
        }), "."]
      }), r("form", {
        onSubmit: a,
        children: r(Ge, {
          type: "submit",
          disabled: i,
          className: "mb-10 block w-full rounded-md border border-transparent bg-gray-700 px-3 py-2 font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 sm:text-sm",
          children: "Join the team"
        })
      }), l("div", {
        className: "mb-6 flex items-center",
        children: [r("div", {
          className: "h-px flex-auto bg-gradient-to-l from-gray-300"
        }), r("p", {
          className: "mx-6 flex-none",
          children: "Or"
        }), r("div", {
          className: "h-px flex-auto bg-gradient-to-r from-gray-300"
        })]
      }), r(pe, {
        as: "button",
        type: "button",
        href: "/logout",
        method: "post",
        data: {
          redirect_url: t.invite_url
        },
        variant: "outline",
        className: "w-full",
        children: "Sign out to connect to another account"
      })]
    })
  }

  function tf({
    auth: e,
    team: t
  }) {
    const n = ut(e ? {
      invite_token: t.invite_token
    } : {
      email: "",
      password: "",
      invite_token: t.invite_token
    });

    function a(i) {
      i.preventDefault(), n.post(`/teams/${t.id}/members`)
    }
    return l(j, {
      children: [r(we, {
        title: "Join Team"
      }), r(Nt, {
        children: t.is_full ? r(Xh, {
          team: t
        }) : e ? r(ef, {
          auth: e,
          team: t,
          form: n,
          submit: a
        }) : r(Qh, {
          team: t,
          form: n,
          submit: a
        })
      })]
    })
  }
  const rf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tf
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Co({
    content: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "License",
        description: "Learn more about the Tailwind UI licensing model. Have a question? Get in touch and we’ll help you out."
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        children: [r(pr, {
          title: "License",
          subtitle: "Learn more about the Tailwind UI licensing model. Have a question? Get in touch and we’ll help you out."
        }), r("div", {
          className: "relative px-4 sm:px-6 lg:px-8",
          children: r(Ve, {
            size: "sm",
            className: "mx-auto max-w-[40rem]",
            dangerouslySetInnerHTML: {
              __html: e
            }
          })
        })]
      })]
    })
  }
  Co.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const nf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Co
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function af() {
    const {
      data: e,
      setData: t,
      post: n,
      processing: a,
      errors: i
    } = ut({
      email: "",
      password: "",
      remember: !0
    });

    function s(o) {
      o.preventDefault(), n(o.target.action)
    }
    return l(j, {
      children: [r(we, {
        title: "Login"
      }), r(Nt, {
        children: l(j, {
          children: [r("h1", {
            className: "sr-only",
            children: "Log in to your Tailwind UI account"
          }), i.email && r("p", {
            className: "mb-6 text-center text-xs font-medium text-red-600",
            children: i.email
          }), l("form", {
            onSubmit: s,
            action: "/login",
            className: "w-full max-w-sm",
            children: [r(Fe, {
              className: "mb-6",
              label: "Email address",
              id: "email",
              type: "email",
              error: !!i.email,
              value: e.email,
              onChange: o => t("email", o.target.value),
              required: !0
            }), r(Fe, {
              className: "mb-6",
              label: "Password",
              id: "password",
              type: "password",
              error: !!i.email,
              value: e.password,
              onChange: o => t("password", o.target.value),
              required: !0
            }), r(Ge, {
              type: "submit",
              disabled: a,
              className: "w-full",
              children: "Sign in to account"
            }), r("input", {
              type: "hidden",
              name: "remember",
              value: "true"
            }), r("p", {
              className: "mt-8 text-center",
              children: r("a", {
                href: "/password/reset",
                className: "text-sm hover:underline",
                children: "Forgot password?"
              })
            })]
          })]
        }),
        footer: r(j, {
          children: l("div", {
            className: "space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0",
            children: [r("p", {
              className: "text-center sm:text-left",
              children: "Don't have an account?"
            }), l(pe, {
              href: "/all-access",
              variant: "outline",
              children: ["Get access ", r("span", {
                "aria-hidden": "true",
                children: "→"
              })]
            })]
          })
        })
      })]
    })
  }
  const lf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: af
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function sf() {
    return l(j, {
      children: [r(we, {
        title: "Thank you"
      }), r(Nt, {
        children: l("div", {
          className: "max-w-2xl text-center",
          children: [r("h1", {
            className: "text-3xl font-extrabold text-slate-900 sm:text-4xl",
            children: "Thank you! Now check your email…"
          }), l("div", {
            className: "mt-6 text-base leading-7 text-slate-600",
            children: ["You should get a confirmation email soon, open it up and", " ", r("strong", {
              className: "font-semibold text-slate-900",
              children: "click the “Confirm your subscription” button"
            }), " ", "so we can keep you up to date."]
          }), r(pe, {
            href: "/",
            className: "mt-6",
            children: "Done"
          })]
        }),
        footer: l("div", {
          className: "relative z-10 flex flex-none items-start justify-center",
          children: [l("svg", {
            width: "32",
            height: "32",
            fill: "none",
            className: "flex-none",
            children: [r("path", {
              d: "M8.75 3.5H22V2H8.75v1.5zM3.5 23.25V8.75H2v14.5h1.5zM23 28.5h-2V30h2v-1.5zm-12 0H8.75V30H11v-1.5zm10 0h-5V30h5v-1.5zm-5 0h-5V30h5v-1.5zM2 23.25A6.75 6.75 0 008.75 30v-1.5a5.25 5.25 0 01-5.25-5.25H2zM23 30a5 5 0 005-5h-1.5a3.5 3.5 0 01-3.5 3.5V30zM22 3.5A4.5 4.5 0 0126.5 8H28a6 6 0 00-6-6v1.5zM8.75 2A6.75 6.75 0 002 8.75h1.5c0-2.9 2.35-5.25 5.25-5.25V2z",
              className: "fill-gray-400"
            }), r("path", {
              d: "M14.75 12.75a2 2 0 012-2h10.5a2 2 0 012 2v7.5a2 2 0 01-2 2h-10.5a2 2 0 01-2-2v-7.5z",
              className: "stroke-gray-600",
              strokeWidth: "1.5"
            }), r("path", {
              d: "M15.5 11.5l4.512 3.992a3 3 0 003.976 0L28.5 11.5",
              className: "stroke-gray-600",
              strokeWidth: "1.5"
            }), r("path", {
              d: "M9 11v4M9 19v.01",
              className: "stroke-gray-600",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          }), l("p", {
            className: "ml-6 max-w-lg flex-auto text-sm text-gray-600",
            children: [r("strong", {
              className: "font-semibold text-gray-900",
              children: "Don’t see it yet?"
            }), " It might be in your spam folder (ugh) – if so, make sure to click “not spam” so our updates actually make it to your inbox."]
          })]
        })
      })]
    })
  }
  const of = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sf
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function cf({
    children: e,
    id: t
  }) {
    return l("svg", {
      className: "h-11 w-11 flex-none overflow-visible",
      fill: "none",
      children: [r("defs", {
        children: l("filter", {
          id: t,
          x: -3,
          y: -1,
          width: 50,
          height: 50,
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [r("feFlood", {
            floodOpacity: 0,
            result: "BackgroundImageFix"
          }), r("feColorMatrix", {
            in: "SourceAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
          }), r("feOffset", {
            dy: 2
          }), r("feGaussianBlur", {
            stdDeviation: "2.5"
          }), r("feComposite", {
            in2: "hardAlpha",
            operator: "out"
          }), r("feColorMatrix", {
            values: "0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"
          }), r("feBlend", {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_804_95228"
          }), r("feBlend", {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_804_95228",
            result: "shape"
          })]
        })
      }), l("g", {
        filter: `url(#${t})`,
        children: [r("path", {
          d: "M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z",
          fill: "#EEF2FF"
        }), r("path", {
          d: "M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z",
          stroke: "#6366F1",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      }), e]
    })
  }

  function Eo({
    components: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "Tailwind CSS Component Playground - Tailwind UI"
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        children: [r("img", {
          src: "/img/beams-basic.png",
          alt: "",
          className: "absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none"
        }), l("div", {
          className: "relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8",
          children: [l("div", {
            className: "mx-auto max-w-[40rem] lg:max-w-none",
            children: [r("h1", {
              className: "text-base font-semibold leading-7 text-indigo-500",
              children: "Component playground"
            }), r("p", {
              className: "mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl",
              children: "Get a better idea of how our components work by exploring our live playground."
            }), r("ol", {
              className: "mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3",
              children: [{
                title: l(j, {
                  children: [r("span", {
                    className: "xl:hidden",
                    children: "Find a component"
                  }), r("span", {
                    className: "hidden xl:inline",
                    children: "Find the perfect component"
                  })]
                }),
                description: "Every component is embedded live directly on the page, and you can even see what they look like at different breakpoints by dragging the slider on the right.",
                icon: l(j, {
                  children: [r("path", {
                    d: "M11.75 8.75h12.5a3 3 0 0 1 3 3v20.5a3 3 0 0 1-3 3h-12.5a3 3 0 0 1-3-3v-20.5a3 3 0 0 1 3-3Z",
                    fill: "#fff",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }), r("path", {
                    opacity: ".4",
                    d: "M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }), r("path", {
                    d: "M30.25 19.75v4.5",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })]
                })
              }, {
                title: "Copy the snippet",
                description: 'Click the "Code" tab to see the code for a component and grab the part that you need, or click the clipboard button to quickly copy the entire snippet in one step.',
                icon: l(j, {
                  children: [r("path", {
                    opacity: ".4",
                    d: "M28.75 35.25h3.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }), r("path", {
                    d: "M8.75 24.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-11.5a3 3 0 0 1-3-3v-7.5Z",
                    fill: "#fff"
                  }), r("path", {
                    d: "M10.75 23.5h12.5V22h-12.5v1.5Zm13.75 1.25v8.5H26v-8.5h-1.5Zm-1.25 9.75h-11.5V36h11.5v-1.5ZM9.5 32.25v-7.5H8v7.5h1.5Zm2.25 2.25a2.25 2.25 0 0 1-2.25-2.25H8A3.75 3.75 0 0 0 11.75 36v-1.5Zm12.75-1.25c0 .69-.56 1.25-1.25 1.25V36A2.75 2.75 0 0 0 26 33.25h-1.5Zm-1.25-9.75c.69 0 1.25.56 1.25 1.25H26A2.75 2.75 0 0 0 23.25 22v1.5ZM10.75 22A2.75 2.75 0 0 0 8 24.75h1.5c0-.69.56-1.25 1.25-1.25V22Z",
                    fill: "#6366F1"
                  }), r("path", {
                    d: "M15.25 26.75 12.75 29l2.5 2.25M18.75 26.75l2.5 2.25-2.5 2.25",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }), r("path", {
                    opacity: ".4",
                    d: "M12.75 14.25h18.5",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })]
                })
              }, {
                title: "Make it yours",
                description: "Every component is built entirely out of Tailwind utility classes, so you can easily dive in and adjust anything you want to better fit your use case.",
                icon: l(j, {
                  children: [r("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23 35.25c.69 0 1.25-.56 1.25-1.25A3.75 3.75 0 0 1 28 30.25a1.25 1.25 0 1 0 0-2.5A3.75 3.75 0 0 1 24.25 24a1.25 1.25 0 1 0-2.5 0A3.75 3.75 0 0 1 18 27.75a1.25 1.25 0 0 0 0 2.5A3.75 3.75 0 0 1 21.75 34c0 .69.56 1.25 1.25 1.25Z",
                    fill: "#fff"
                  }), r("path", {
                    d: "M28 27a.75.75 0 0 0 0 1.5V27Zm-4.5 7a.5.5 0 0 1-.5.5V36a2 2 0 0 0 2-2h-1.5Zm5-5a.5.5 0 0 1-.5.5V31a2 2 0 0 0 2-2h-1.5Zm-.5-.5a.5.5 0 0 1 .5.5H30a2 2 0 0 0-2-2v1.5Zm-5-5a.5.5 0 0 1 .5.5H25a2 2 0 0 0-2-2v1.5Zm-.5.5a.5.5 0 0 1 .5-.5V22a2 2 0 0 0-2 2h1.5Zm-5 5a.5.5 0 0 1 .5-.5V27a2 2 0 0 0-2 2h1.5Zm.5.5a.5.5 0 0 1-.5-.5H16a2 2 0 0 0 2 2v-1.5Zm5 5a.5.5 0 0 1-.5-.5H21a2 2 0 0 0 2 2v-1.5ZM18 31a3 3 0 0 1 3 3h1.5a4.5 4.5 0 0 0-4.5-4.5V31Zm3-7a3 3 0 0 1-3 3v1.5a4.5 4.5 0 0 0 4.5-4.5H21Zm7 3a3 3 0 0 1-3-3h-1.5a4.5 4.5 0 0 0 4.5 4.5V27Zm-3 7a3 3 0 0 1 3-3v-1.5a4.5 4.5 0 0 0-4.5 4.5H25Z",
                    fill: "#6366F1"
                  }), r("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13 27.25c.69 0 1.25-.56 1.25-1.25 0-.966.784-1.75 1.75-1.75a1.25 1.25 0 1 0 0-2.5A1.75 1.75 0 0 1 14.25 20a1.25 1.25 0 1 0-2.5 0A1.75 1.75 0 0 1 10 21.75a1.25 1.25 0 0 0 0 2.5c.966 0 1.75.784 1.75 1.75 0 .69.56 1.25 1.25 1.25Z",
                    fill: "#fff"
                  }), r("path", {
                    d: "M16 21a.75.75 0 0 0 0 1.5V21Zm-2.5 5a.5.5 0 0 1-.5.5V28a2 2 0 0 0 2-2h-1.5Zm3-3a.5.5 0 0 1-.5.5V25a2 2 0 0 0 2-2h-1.5Zm-.5-.5a.5.5 0 0 1 .5.5H18a2 2 0 0 0-2-2v1.5Zm-3-3a.5.5 0 0 1 .5.5H15a2 2 0 0 0-2-2v1.5Zm-.5.5a.5.5 0 0 1 .5-.5V18a2 2 0 0 0-2 2h1.5Zm-3 3a.5.5 0 0 1 .5-.5V21a2 2 0 0 0-2 2h1.5Zm.5.5a.5.5 0 0 1-.5-.5H8a2 2 0 0 0 2 2v-1.5Zm3 3a.5.5 0 0 1-.5-.5H11a2 2 0 0 0 2 2v-1.5ZM10 25a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5V25Zm1-5a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5H11Zm5 1a1 1 0 0 1-1-1h-1.5a2.5 2.5 0 0 0 2.5 2.5V21Zm-1 5a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5H15Z",
                    fill: "#6366F1"
                  }), r("path", {
                    opacity: ".4",
                    d: "M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v5.5M12.75 14.25h18.5",
                    stroke: "#6366F1",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })]
                })
              }].map((t, n) => l("li", {
                className: "flex",
                children: [r(cf, {
                  id: `step-icon-${n}`,
                  children: t.icon
                }), l("div", {
                  className: "ml-6",
                  children: [l("h2", {
                    className: "flex items-center text-sm font-semibold leading-6",
                    children: [l("span", {
                      className: "text-indigo-500",
                      children: ["Step ", n + 1]
                    }), r("span", {
                      className: "ml-2 h-4 w-px bg-slate-300"
                    }), r("span", {
                      className: "ml-2 text-slate-900",
                      children: t.title
                    })]
                  }), r("p", {
                    className: "mt-2 text-sm leading-7 text-slate-600",
                    children: t.description
                  })]
                })]
              }, t.title))
            })]
          }), r("div", {
            className: "my-20 h-px bg-slate-900/10"
          }), r("div", {
            className: " space-y-24 pb-px",
            children: e.map(t => l("div", {
              children: [l("nav", {
                "aria-label": "Breadcrumbs",
                className: "order-first flex text-sm font-semibold sm:space-x-2",
                children: [r(U, {
                  href: t.subcategory.category.product.url,
                  className: "hove:text-slate-600r hidden text-slate-500 sm:block",
                  children: t.subcategory.category.product.name
                }), r("div", {
                  "aria-hidden": "true",
                  className: "hidden select-none text-slate-400 sm:block",
                  children: "/"
                }), r(U, {
                  href: t.subcategory.category.url,
                  className: "hidden text-slate-500 hover:text-slate-600 sm:block",
                  children: t.subcategory.category.name
                }), r("div", {
                  "aria-hidden": "true",
                  className: "hidden select-none text-slate-400 sm:block",
                  children: "/"
                }), r(U, {
                  href: t.subcategory.url,
                  className: "text-slate-500 hover:text-slate-600",
                  children: t.subcategory.name
                })]
              }), r(ho, {
                component: t,
                className: "mt-2"
              })]
            }, t.uuid))
          })]
        })]
      })]
    })
  }
  Eo.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const df = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Eo
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Mo({
    content: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "Privacy Policy",
        description: "Last updated on November 2, 2021"
      }), l("div", {
        className: "relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        children: [r(pr, {
          title: "Privacy policy",
          subtitle: "Last updated on November 2, 2021"
        }), r("div", {
          className: "relative px-4 sm:px-6 lg:px-8",
          children: r(Ve, {
            size: "sm",
            className: "mx-auto max-w-[40rem]",
            dangerouslySetInnerHTML: {
              __html: e
            }
          })
        })]
      })]
    })
  }
  Mo.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const uf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Mo
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function ni() {
    return l(j, {
      children: [l("div", {
        className: "mb-6 flex items-center",
        children: [r("div", {
          className: "h-px flex-auto bg-gradient-to-l from-gray-300"
        }), r("p", {
          className: "mx-6 flex-none",
          children: "or if this looks incorrect"
        }), r("div", {
          className: "h-px flex-auto bg-gradient-to-r from-gray-300"
        })]
      }), r(rr, {
        href: "mailto:support@tailwindui.com?subject=Problem redeeming license",
        variant: "outline",
        className: "w-full",
        children: "Contact support"
      })]
    })
  }

  function mf({
    license: e
  }) {
    return e.deactivationReason === "upgrade" ? l(j, {
      children: [r("p", {
        className: "mb-10 text-center",
        children: "This license is no longer active because it was used to upgrade to another license."
      }), r(pe, {
        href: "/",
        className: "mb-6 w-full",
        children: "Sign in to Tailwind UI"
      })]
    }) : e.deactivationReason === "refund" ? l(j, {
      children: [r("p", {
        className: "mb-10 text-center",
        children: "This license is no longer active because it was refunded."
      }), r(pe, {
        href: "/",
        className: "mb-6 w-full",
        children: "Visit Tailwind UI"
      }), r(ni, {})]
    }) : l(j, {
      children: [r("p", {
        className: "mb-10 text-center",
        children: "This license is no longer active."
      }), r(pe, {
        href: "/",
        className: "mb-6 w-full",
        children: "Visit Tailwind UI"
      }), r(ni, {})]
    })
  }

  function pf({
    license: e
  }) {
    return l(j, {
      children: [e.team ? l("p", {
        className: "mb-10 text-center",
        children: ["This license is connected to the", " ", r("span", {
          className: "font-medium text-gray-900",
          children: e.team.name
        }), " team."]
      }) : l("p", {
        className: "mb-10 text-center",
        children: ["This license is connected to", " ", r("span", {
          className: "font-medium text-gray-900",
          children: e.user.email
        }), "."]
      }), r(pe, {
        href: "/",
        className: "mb-6 w-full",
        children: "Sign in to access your purchase"
      }), r(ni, {})]
    })
  }

  function hf({
    license: e,
    form: t,
    submit: n
  }) {
    let {
      errors: a,
      data: i,
      setData: s,
      processing: o
    } = t;
    return l(j, {
      children: [r("p", {
        className: "mb-10 text-center",
        children: "Create an account to access Tailwind UI."
      }), l("form", {
        action: `/licenses/${e.key}`,
        className: "mb-6",
        onSubmit: n,
        children: [r(Fe, {
          className: "mb-4",
          label: "Email address",
          id: "email-address",
          type: "email",
          error: a.email,
          value: i.email ?? "",
          onChange: c => s("email", c.target.value),
          required: !0
        }), r(Fe, {
          className: "mb-4",
          label: "Password",
          id: "password",
          type: "password",
          autoComplete: "new-password",
          error: a.password,
          value: i.password ?? "",
          onChange: c => s("password", c.target.value),
          required: !0
        }), e.isTeamLicense && r(Fe, {
          className: "mb-4",
          label: "Team name",
          id: "team-name",
          error: a.team_name,
          value: i.team_name ?? "",
          onChange: c => s("team_name", c.target.value),
          required: !0
        }), r(Ge, {
          type: "submit",
          disabled: o,
          className: "mt-2 w-full",
          children: "Create account"
        })]
      }), l("div", {
        className: "mb-6 flex items-center",
        children: [r("div", {
          className: "h-px flex-auto bg-gradient-to-l from-gray-300"
        }), r("p", {
          className: "mx-6 flex-none",
          children: "Or"
        }), r("div", {
          className: "h-px flex-auto bg-gradient-to-r from-gray-300"
        })]
      }), r(pe, {
        href: "/login",
        data: {
          intended_url: e.url
        },
        variant: "outline",
        className: "w-full",
        children: "Connect this license to an existing account"
      })]
    })
  }

  function ff({
    auth: e,
    license: t,
    form: n,
    submit: a
  }) {
    let {
      data: i,
      setData: s,
      processing: o,
      errors: c
    } = n;
    return l(j, {
      children: [t.isTeamLicense ? l(j, {
        children: [l("p", {
          className: "text-center",
          children: ["You’re logged in as ", r("span", {
            className: "font-medium text-gray-900",
            children: e.user.email
          }), "."]
        }), r("p", {
          className: "mb-10 mt-1 text-center",
          children: "You will become the owner of this new team."
        })]
      }) : l("p", {
        className: "mb-10 text-center",
        children: ["You’re logged in as ", r("span", {
          className: "font-medium text-gray-900",
          children: e.user.email
        }), "."]
      }), l("form", {
        action: `/licenses/${t.key}`,
        onSubmit: a,
        children: [t.isTeamLicense && r(Fe, {
          className: "mb-4",
          label: "Team name",
          id: "team-name",
          error: c.team_name,
          value: i.team_name ?? "",
          onChange: u => s("team_name", u.target.value),
          required: !0
        }), r(Ge, {
          type: "submit",
          disabled: o,
          className: "mb-6 w-full",
          children: t.isTeamLicense ? "Create team" : "Connect this license to this account"
        })]
      }), l("div", {
        className: "mb-6 flex items-center",
        children: [r("div", {
          className: "h-px flex-auto bg-gradient-to-l from-gray-300"
        }), r("p", {
          className: "mx-6 flex-none",
          children: "Or"
        }), r("div", {
          className: "h-px flex-auto bg-gradient-to-r from-gray-300"
        })]
      }), r(pe, {
        as: "button",
        type: "button",
        href: "/logout",
        method: "post",
        data: {
          redirect_url: t.url
        },
        variant: "outline",
        className: "w-full",
        children: "Sign out to connect to another account"
      })]
    })
  }

  function gf({
    auth: e,
    license: t
  }) {
    let n = ut();

    function a(i) {
      i.preventDefault(), n.patch(i.target.action)
    }
    return l(j, {
      children: [r(we, {
        title: "Redeem License"
      }), r(Nt, {
        children: l("div", {
          className: "w-full max-w-sm text-sm",
          children: [l("h1", {
            className: "mb-2 text-center font-semibold text-gray-900",
            children: ["You bought ", t.package.name]
          }), t.isActive ? t.isRedeemable ? e ? r(ff, {
            auth: e,
            license: t,
            form: n,
            submit: a
          }) : r(hf, {
            license: t,
            form: n,
            submit: a
          }) : r(pf, {
            license: t
          }) : r(mf, {
            license: t
          })]
        })
      })]
    })
  }
  const vf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: gf
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function bf({
    token: e,
    email: t
  }) {
    const {
      data: n,
      setData: a,
      post: i,
      processing: s,
      errors: o
    } = ut({
      token: e,
      email: t,
      password: ""
    });

    function c(u) {
      u.preventDefault(), i(u.target.action)
    }
    return l(j, {
      children: [r(we, {
        title: "Reset Password"
      }), r(Nt, {
        children: l("div", {
          className: "w-full max-w-sm",
          children: [r("h1", {
            className: "mb-2 text-center text-sm font-semibold text-gray-900",
            children: "Reset your password"
          }), r("p", {
            className: "mb-10 text-center text-sm",
            children: "Enter your email and the new password you'd like to use to access your account."
          }), l("form", {
            onSubmit: c,
            action: "/password/reset",
            className: "space-y-6",
            children: [r(Fe, {
              label: "Email address",
              id: "email-address",
              type: "email",
              error: o.email,
              value: n.email,
              onChange: u => a("email", u.target.value),
              required: !0
            }), r(Fe, {
              label: "New password",
              id: "new-password",
              type: "password",
              error: o.password,
              value: n.password,
              onChange: u => a("password", u.target.value),
              autoComplete: "new-password",
              required: !0
            }), r(Ge, {
              type: "submit",
              disabled: s,
              className: "w-full",
              children: "Update password"
            })]
          })]
        })
      })]
    })
  }
  const yf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bf
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function $a({
    title: e,
    link: t,
    icon: n,
    children: a
  }) {
    return l("section", {
      className: "group relative -mx-4 p-6 hover:bg-slate-50 sm:mx-0 sm:rounded-3xl",
      children: [l("div", {
        className: "flex items-center",
        children: [r("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          children: n
        }), r("h2", {
          className: "ml-4 text-base font-semibold leading-7 text-slate-900",
          children: e
        })]
      }), r(Ve, {
        size: "sm",
        className: "my-4 max-w-none prose-a:relative prose-a:z-10",
        children: r("p", {
          children: a
        })
      }), l("a", {
        className: "text-sm font-semibold leading-6 text-sky-500 group-hover:text-sky-600",
        ...t,
        children: [r("span", {
          className: "absolute inset-0 rounded-3xl"
        }), t.children, " ", r("span", {
          "aria-hidden": "true",
          children: "→"
        })]
      })]
    })
  }

  function Lo() {
    return l(j, {
      children: [r(we, {
        title: "Support",
        description: "Have a question about Tailwind UI or an issue with your purchase? Get in touch and we’ll help you out."
      }), l("div", {
        className: "relative -mb-6 -mt-[5.75rem] overflow-hidden pt-[5.75rem]",
        children: [r(pr, {
          title: "Support",
          subtitle: "Have a question about Tailwind UI or an issue with your purchase? Get in touch and we’ll help you out."
        }), r("div", {
          className: "relative -mt-6 px-4 sm:px-6 lg:px-8",
          children: l("div", {
            className: "mx-auto max-w-[37.5rem] space-y-6",
            children: [l($a, {
              title: "Sales support",
              link: {
                href: "mailto:support@tailwindui.com",
                children: "Get in touch"
              },
              icon: l(j, {
                children: [r("path", {
                  d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
                  fill: "#F0F9FF",
                  stroke: "#0EA5E9",
                  strokeWidth: "1.5"
                }), r("path", {
                  d: "M16 22.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z",
                  fill: "#fff",
                  stroke: "#0EA5E9",
                  strokeWidth: "1.5"
                }), r("path", {
                  d: "M6.5 6.5l5 5M25.5 6.5l-5 5M6.5 25.5l5-5M25.5 25.5l-5-5",
                  stroke: "#0EA5E9",
                  strokeWidth: "1.5"
                })]
              }),
              children: ["If you need help with something related to your purchase (didn't get your receipt, entered the wrong email at purchase, need a refund, etc.) please", " ", r("a", {
                href: "mailto:support@tailwindui.com",
                children: "email us"
              }), " and we will do everything we can to take care of you."]
            }), l($a, {
              title: "Bug reports",
              link: {
                href: "https://github.com/tailwindui/issues/issues/new?assignees=&labels=bug&template=bug_report.md&title=",
                children: "Report bug",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              icon: l(j, {
                children: [" ", r("path", {
                  d: "M2.75 10.75a8 8 0 0 1 8-8h10.5a8 8 0 0 1 8 8v10.5a8 8 0 0 1-8 8h-10.5a8 8 0 0 1-8-8v-10.5Z",
                  fill: "#F0F9FF"
                }), r("path", {
                  d: "M10.75 3.5h10.5V2h-10.5v1.5Zm17.75 7.25v10.5H30v-10.5h-1.5Zm-25 10.5v-10.5H2v10.5h1.5Zm17.75 7.25H21V30h.25v-1.5ZM11 28.5h-.25V30H11v-1.5Zm10 0h-5V30h5v-1.5Zm-5 0h-5V30h5v-1.5ZM2 21.25A8.75 8.75 0 0 0 10.75 30v-1.5a7.25 7.25 0 0 1-7.25-7.25H2Zm26.5 0a7.25 7.25 0 0 1-7.25 7.25V30A8.75 8.75 0 0 0 30 21.25h-1.5ZM21.25 3.5a7.25 7.25 0 0 1 7.25 7.25H30A8.75 8.75 0 0 0 21.25 2v1.5ZM10.75 2A8.75 8.75 0 0 0 2 10.75h1.5a7.25 7.25 0 0 1 7.25-7.25V2Z",
                  fill: "#0EA5E9"
                }), r("path", {
                  d: "M19.75 18.25s.25-1.5 2.25-1.5 2.25 1.5 2.25 1.5m-12.5 0s.25-1.5 2.25-1.5 2.25 1.5 2.25 1.5m-4.25 5h12",
                  stroke: "#0EA5E9",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })]
              }),
              children: ["If you find a bug with a component that you'd like to report for us to fix, please", " ", r("a", {
                href: "https://github.com/tailwindui/issues/issues/new?assignees=&labels=bug&template=bug_report.md&title=",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "open an issue"
              }), " ", "on GitHub."]
            }), r($a, {
              title: "Technical support",
              link: {
                href: "/discord",
                children: "Join the Tailwind UI Discord Community"
              },
              icon: l(j, {
                children: [r("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M16 28.25c7.155 0 13.25-5.88 13.25-12.75S23.155 2.75 16 2.75 2.75 8.63 2.75 15.5c0 2.73.962 5.302 2.57 7.413.177.231.257.525.2.81-.25 1.253-.632 2.519-1.212 3.545-.435.768-.094 1.904.782 1.797 1.545-.188 3.377-.758 5.043-1.707a1.09 1.09 0 0 1 .948-.064c1.531.614 3.194.956 4.919.956Z",
                  fill: "#F0F9FF"
                }), r("path", {
                  d: "m11.081 27.294-.28.695.28-.695Zm-5.76-4.381.596-.455-.597.455h.001Zm.199.81-.736-.146.736.147v-.001ZM28.5 15.5c0 6.43-5.732 12-12.5 12V29c7.543 0 14-6.19 14-13.5h-1.5ZM16 3.5c6.768 0 12.5 5.57 12.5 12H30C30 8.19 23.543 2 16 2v1.5Zm-12.5 12c0-6.43 5.732-12 12.5-12V2C8.457 2 2 8.19 2 15.5h1.5Zm2.417 6.958C4.399 20.466 3.5 18.05 3.5 15.5H2c0 2.908 1.025 5.639 2.724 7.867l1.193-.909Zm-.957 5.18c.636-1.124 1.037-2.477 1.295-3.767l-1.47-.294c-.244 1.214-.605 2.393-1.13 3.322l1.305.738v.001Zm4.802-.932c-1.58.9-3.317 1.438-4.763 1.615l.182 1.489c1.644-.2 3.57-.803 5.323-1.8l-.742-1.304ZM16 27.5c-1.625 0-3.194-.322-4.64-.902l-.558 1.392A13.938 13.938 0 0 0 16 29v-1.5Zm-5.496.51a.343.343 0 0 1 .298-.02l.559-1.392a1.844 1.844 0 0 0-1.6.108l.743 1.304Zm-6.85-1.11a2.237 2.237 0 0 0-.147 1.863c.113.294.306.584.601.79.305.212.677.305 1.073.257l-.182-1.49a.164.164 0 0 1-.028.002h-.007.002c-.001 0-.03-.023-.058-.095a.74.74 0 0 1 .052-.59L3.655 26.9h-.001Zm1.07-3.533c.06.08.07.157.06.21l1.471.294a1.764 1.764 0 0 0-.338-1.413l-1.193.91v-.001Z",
                  fill: "#0EA5E9"
                }), r("path", {
                  d: "M10.75 18.25h10.475m-10.475-5h10.475H10.75Z",
                  stroke: "#0EA5E9",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })]
              }),
              children: "If you have questions about things like integrating a component into your project, tweaking a design in a particular way, accomplishing some interactive behavior with JavaScript, etc., we recommend joining the Tailwind UI Discord community and asking your question to the group."
            })]
          })
        })]
      })]
    })
  }
  Lo.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const xf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Lo
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function wf({
    team: e,
    member: t
  }) {
    return r("div", {
      className: "relative",
      children: l(Pe, {
        children: [l(Pe.Button, {
          className: "flex h-6 w-6 items-center justify-center rounded-md text-slate-600 hover:bg-slate-50",
          children: [r("span", {
            className: "sr-only",
            children: "Actions"
          }), l("svg", {
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
            children: [r("path", {
              d: "M8.625 5C8.625 4.24061 9.24061 3.625 10 3.625C10.7594 3.625 11.375 4.24061 11.375 5C11.375 5.75939 10.7594 6.375 10 6.375C9.24061 6.375 8.625 5.75939 8.625 5Z"
            }), r("path", {
              d: "M8.625 10C8.625 9.24061 9.24061 8.625 10 8.625C10.7594 8.625 11.375 9.24061 11.375 10C11.375 10.7594 10.7594 11.375 10 11.375C9.24061 11.375 8.625 10.7594 8.625 10Z"
            }), r("path", {
              d: "M8.625 15C8.625 14.2406 9.24061 13.625 10 13.625C10.7594 13.625 11.375 14.2406 11.375 15C11.375 15.7594 10.7594 16.375 10 16.375C9.24061 16.375 8.625 15.7594 8.625 15Z"
            })]
          })]
        }), r(tt, {
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
          className: "absolute -right-1 z-10 mt-2 w-56 origin-top-right",
          children: l(Pe.Items, {
            className: "rounded-lg bg-white py-2 text-sm leading-6 shadow-lg ring-1 ring-slate-900/5 focus:outline-none",
            children: [r(Pe.Item, {
              children: ({
                active: n
              }) => l(U, {
                as: "button",
                type: "button",
                href: `/teams/${e.id}/members/${t.id}`,
                method: "patch",
                data: {
                  role: t.role === "owner" ? "member" : "owner"
                },
                preserveScroll: !0,
                className: B("block w-full px-3 py-1 text-left", n ? "bg-gray-50 text-slate-900" : "text-gray-700"),
                children: ["Change role to ", t.role === "owner" ? "member" : "owner"]
              })
            }), r(Pe.Item, {
              children: ({
                active: n
              }) => r(U, {
                as: "button",
                type: "button",
                href: `/teams/${e.id}/members/${t.id}`,
                method: "delete",
                preserveScroll: !0,
                className: B("block w-full px-3 py-1 text-left", n ? "bg-red-50 text-red-700" : "text-red-500"),
                children: "Remove from team"
              })
            })]
          })
        })]
      })
    })
  }

  function Nf({
    team: e
  }) {
    const {
      data: t,
      setData: n,
      patch: a,
      processing: i,
      recentlySuccessful: s,
      errors: o
    } = ut({
      name: e.name
    });

    function c(u) {
      u.preventDefault(), a(u.target.action, {
        preserveScroll: !0
      })
    }
    return l("section", {
      className: "px-4 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "m6.25 24.927.495-2.162a3.812 3.812 0 0 1 7.403.3c.063.316.505.347.611.041l.842-2.42A4 4 0 0 1 19.379 18h1.767a4 4 0 0 1 3.946 3.342l.596 3.585C23.17 27.354 19.773 29 16 29c-3.852 0-7.219-1.556-9.75-4.073ZM23.535 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13.535 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            fill: "#fff"
          }), r("path", {
            d: "m6.25 24.927.495-2.162a3.812 3.812 0 0 1 7.403.3c.063.316.505.347.611.041l.842-2.42A4 4 0 0 1 19.379 18h1.767a4 4 0 0 1 3.946 3.342l.596 3.585C23.17 27.354 19.773 29 16 29c-3.852 0-7.219-1.556-9.75-4.073ZM23.535 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13.535 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Team name"
        })]
      }), r(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: r("p", {
          children: "Update the name of your team. This is what team members see when they visit your team invite link."
        })
      }), l("form", {
        onSubmit: c,
        action: `/teams/${e.id}`,
        className: "mt-8",
        children: [r(Fe, {
          label: "Name",
          id: "name",
          error: o.name,
          value: t.name,
          onChange: u => n("name", u.target.value),
          required: !0
        }), l("div", {
          className: "mt-4 sm:flex sm:items-center sm:space-x-4 sm:space-x-reverse",
          children: [s && r("p", {
            className: "order-1 -mt-3 mb-6 text-sm font-medium text-gray-500 sm:my-0",
            children: "Name updated successfully."
          }), r(Ge, {
            type: "submit",
            disabled: i,
            children: "Update name"
          })]
        })]
      })]
    })
  }

  function kf({
    team: e
  }) {
    return l("section", {
      className: "px-4 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "m6.25 24.927.495-2.162a3.812 3.812 0 0 1 7.403.3c.063.316.505.347.611.041l.842-2.42A4 4 0 0 1 19.379 18h1.767a4 4 0 0 1 3.946 3.342l.596 3.585C23.17 27.354 19.773 29 16 29c-3.852 0-7.219-1.556-9.75-4.073ZM23.535 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13.535 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            fill: "#fff"
          }), r("path", {
            d: "m6.25 24.927.495-2.162a3.812 3.812 0 0 1 7.403.3c.063.316.505.347.611.041l.842-2.42A4 4 0 0 1 19.379 18h1.767a4 4 0 0 1 3.946 3.342l.596 3.585C23.17 27.354 19.773 29 16 29c-3.852 0-7.219-1.556-9.75-4.073ZM23.535 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13.535 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Team name"
        })]
      }), r(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: r("p", {
          children: "Only team owners have the ability to update the team name."
        })
      }), r(Fe, {
        label: "Name",
        id: "name",
        value: e.name,
        readOnly: !0,
        className: "mt-8"
      })]
    })
  }

  function Sf({
    team: e
  }) {
    function t() {
      return r("a", {
        href: "mailto:support@tailwindui.com",
        className: "font-semibold text-sky-500 hover:text-sky-600",
        children: "contact us"
      })
    }
    return l("div", {
      className: "mt-4 flex rounded-lg border border-slate-100 bg-slate-50 p-4 text-sm leading-6",
      children: [r("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "mr-2 mt-0.5 h-5 w-5 flex-none fill-slate-400",
        viewBox: "0 0 20 20",
        children: r("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
          clipRule: "evenodd"
        })
      }), r("p", {
        children: e.updatable ? l(j, {
          children: ["This team has reached its seat limit. Please ", r(t, {}), " if you require additional seats."]
        }) : l(j, {
          children: ["This team has reached its seat limit. Please have the team owner ", r(t, {}), " if you require additional seats."]
        })
      })]
    })
  }

  function Cf({
    team: e
  }) {
    let [t, n] = x.useState(!1), [a, i] = x.useState(!1), s = x.useRef(null);

    function o() {
      navigator.clipboard.writeText(e.inviteUrl).then(() => {
        i(!0), clearTimeout(s.current), s.current = setTimeout(() => i(!1), 1500)
      })
    }
    return l(j, {
      children: [r("p", {
        className: "mt-8 text-sm font-semibold leading-6 text-slate-900",
        children: "Share this link with your team to give them access to Tailwind UI."
      }), l("div", {
        className: "mt-2 flex",
        children: [r("div", {
          className: "flex h-10 min-w-0 flex-auto select-all items-center rounded-md px-3 text-slate-600 shadow-sm ring-1 ring-slate-200 sm:text-sm",
          children: r("div", {
            className: "truncate",
            children: t ? "Generating new link..." : e.inviteUrl
          })
        }), l(Ge, {
          className: "relative ml-4 flex-none",
          onClick: () => o(),
          children: [r("span", {
            style: a ? {
              opacity: 0
            } : {},
            children: "Copy invite link"
          }), a && r("span", {
            className: "absolute inset-0 flex items-center justify-center",
            children: "Copied!"
          })]
        })]
      }), e.updatable && r("div", {
        className: "mt-4",
        children: r(U, {
          as: "button",
          type: "button",
          href: `/teams/${e.id}/invite-link`,
          method: "delete",
          className: "text-sm font-semibold leading-6 text-sky-500 hover:text-sky-600",
          preserveScroll: !0,
          onBefore: () => n(!0),
          onFinish: () => setTimeout(() => {
            n(!1)
          }, 500),
          children: "Reset your invite link"
        })
      })]
    })
  }

  function Ef({
    team: e
  }) {
    return l("section", {
      className: "px-4 pt-16 sm:px-6 lg:px-8",
      children: [l("div", {
        className: "flex items-center text-base font-semibold leading-7 text-slate-900",
        children: [l("svg", {
          className: "h-8 w-8 flex-none",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [r("path", {
            d: "M16 29.25c7.318 0 13.25-5.932 13.25-13.25S23.318 2.75 16 2.75 2.75 8.682 2.75 16 8.682 29.25 16 29.25Z",
            fill: "#F0F9FF",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          }), r("path", {
            d: "m6.25 24.927.495-2.162a3.812 3.812 0 0 1 7.403.3c.063.316.505.347.611.041l.842-2.42A4 4 0 0 1 19.379 18h1.767a4 4 0 0 1 3.946 3.342l.596 3.585C23.17 27.354 19.773 29 16 29c-3.852 0-7.219-1.556-9.75-4.073ZM23.535 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13.535 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            fill: "#fff"
          }), r("path", {
            d: "m6.25 24.927.495-2.162a3.812 3.812 0 0 1 7.403.3c.063.316.505.347.611.041l.842-2.42A4 4 0 0 1 19.379 18h1.767a4 4 0 0 1 3.946 3.342l.596 3.585C23.17 27.354 19.773 29 16 29c-3.852 0-7.219-1.556-9.75-4.073ZM23.535 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13.535 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            stroke: "#0EA5E9",
            strokeWidth: "1.5"
          })]
        }), r("h2", {
          className: "ml-4",
          children: "Team members"
        })]
      }), r(Ve, {
        size: "sm",
        className: "mt-3 max-w-none",
        children: e.updatable ? r("p", {
          children: 'Here are the members on your team. You can change their role to either "Owner", which gives them the ability to manage the team settings, or "Member" to simply grant them access to your Tailwind UI account.'
        }) : r("p", {
          children: "Here are the members on your team. Only team owners have the ability to change team member's roles."
        })
      }), e.isFull ? r(Sf, {
        team: e
      }) : r(Cf, {
        team: e
      }), l("table", {
        className: "mt-8 w-full rounded-lg bg-white text-sm leading-6 shadow ring-1 ring-slate-900/5",
        children: [r("caption", {
          className: "sr-only",
          children: "Team members"
        }), r("thead", {
          className: "border-b border-slate-200 text-left text-slate-900",
          children: l("tr", {
            children: [r("th", {
              className: "py-3 pl-4 font-semibold sm:pl-6",
              children: "Email"
            }), r("th", {
              className: "hidden py-3 pl-6 font-semibold sm:table-cell",
              children: "Role"
            }), r("th", {
              className: "py-3 pl-6 pr-4",
              children: r("span", {
                className: "sr-only",
                children: "Actions"
              })
            })]
          })
        }), r("tbody", {
          className: "whitespace-nowrap",
          children: e.members.map(t => l("tr", {
            className: "border-t border-slate-200 first:border-0",
            children: [l("td", {
              className: "w-full max-w-0 py-3 pl-4 sm:w-2/3 sm:pl-6",
              children: [r("div", {
                className: "truncate text-slate-900",
                children: t.email
              }), r("div", {
                className: "capitalize text-slate-600 sm:hidden",
                children: t.role
              })]
            }), r("td", {
              className: "hidden w-1/3 py-3 pl-6 capitalize text-slate-600 sm:table-cell",
              children: t.role
            }), r("td", {
              className: "w-0 py-3 pl-6 pr-4 font-medium",
              children: t.updatable && r(wf, {
                team: e,
                member: t
              })
            })]
          }, t.id))
        })]
      })]
    })
  }

  function Ao({
    team: e
  }) {
    return l(j, {
      children: [r(we, {
        title: "Team Settings",
        description: e.updatable ? "Manage your Tailwind UI team name, add and remove team members, and view your billing history" : "See who is on your Tailwind UI team and invite others to join. Only team owners can make changes and view the billing history."
      }), l("div", {
        className: "relative -mb-32 -mt-[5.75rem] overflow-hidden pb-32 pt-[5.75rem]",
        children: [r(pr, {
          title: "Team settings",
          subtitle: e.updatable ? "Manage your team name, add and remove team members, and view your billing history" : "See who is on your team and invite others to join. Only team owners can make changes and view the billing history."
        }), l("div", {
          className: "relative mx-auto w-full max-w-[40rem] space-y-16 divide-y divide-slate-100",
          children: [e.updatable ? r(Nf, {
            team: e
          }) : r(kf, {
            team: e
          }), r(Ef, {
            team: e
          }), e.purchases.length > 0 && r(Os, {
            purchases: e.purchases
          })]
        })]
      })]
    })
  }
  Ao.layout = e => r(De, {
    children: e,
    showBorder: !0
  });
  const Mf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ao
  }, Symbol.toStringTag, {
    value: "Module"
  })),
    Jl = [{
      name: "Alex MacCaw",
      body: "Tailwind UI made it possible for me to ship the first version of Reflect entirely by myself, while still being immensely proud of the design.",
      handle: 'Founder of <a class="text-slate-900" href="https://reflect.app/" target="_blank">Reflect</a> & <a class="text-slate-900" href="https://clearbit.com/" target="_blank">Clearbit</a>',
      img: "/img/maccaw-profile.jpeg"
    }, {
      name: "Ben Barbersmith",
      body: "Yet again Tailwind and Tailwind UI are dramatically speeding up my frontend work. At this point Tailwind UI is hands-down the highest ROI digital asset I’ve ever bought.",
      handle: '<a href="https://twitter.com/benbarbersmith/status/1527291090889371651">@benbarbersmith</a>',
      img: "/img/benbarbersmith-profile.jpeg"
    }, {
      name: "Justin Jackson",
      body: "We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind UI. It’s turned a project I might have never made the time to tackle into something I could finish and ship in an hour.",
      handle: 'Founder of <a class="text-slate-900" href="https://transistor.fm/" target="_blank">Transistor</a>',
      img: "/img/justin-profile.jpg"
    }];

  function Lf({
    price: e,
    children: t
  }) {
    return l("div", {
      id: "pricing",
      className: "relative overflow-hidden bg-slate-50 pb-20 pt-24 lg:pb-24 xl:pb-32",
      children: [r("img", {
        src: "/img/beams-pricing.png",
        alt: "",
        className: "absolute left-1/2 top-0 -ml-[40rem] w-[90.4375rem] max-w-none"
      }), r("div", {
        className: "absolute inset-x-0 bottom-0 h-96 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]",
        children: r(dr, {
          id: "pricing-pattern",
          x: "50%",
          y: "100%",
          patternTransform: "translate(0 -1)"
        })
      }), l("div", {
        className: "relative mx-auto max-w-container px-4 sm:px-6 lg:px-8",
        children: [l("section", {
          className: "mx-auto max-w-[40rem] lg:max-w-none",
          children: [l("div", {
            className: "max-w-3xl1 pr-12",
            children: [r("h2", {
              className: "text-base font-semibold leading-7 text-sky-500",
              children: "Pricing"
            }), r("p", {
              className: "mt-4 text-5xl font-extrabold tracking-tight text-slate-900",
              children: "Get just one or get ’em all."
            }), r("p", {
              className: "mt-4 max-w-xl text-base leading-8 text-slate-700",
              children: "Every template includes free updates, and can be used on unlimited projects — both personal and commercial."
            }), r(Oi, {
              frameworks: ["React", "Next.js"],
              className: "mt-9"
            })]
          }), l("div", {
            className: "mt-16 lg:mt-0 lg:flex lg:flex-row-reverse lg:items-center",
            children: [l("div", {
              className: "relative z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-1/2 lg:flex-none",
              children: [r(We, {
                className: "absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96"
              }), l("div", {
                className: "relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10",
                children: [l("div", {
                  className: "flex items-center justify-between",
                  children: [r("h3", {
                    className: "text-base font-semibold text-sky-500",
                    children: "Get with all-access"
                  }), l(pe, {
                    href: "/all-access",
                    size: "sm",
                    children: ["Get all-access ", r("span", {
                      "aria-hidden": "true",
                      children: "→"
                    })]
                  })]
                }), l("div", {
                  className: "mt-3 flex items-center",
                  children: [e.advertised !== e.amount && l("p", {
                    className: "mr-3 text-lg font-semibold text-slate-500 line-through",
                    children: [e.symbol, e.advertised]
                  }), l("p", {
                    className: "text-[2.5rem] leading-none text-slate-900",
                    children: [e.country, e.symbol, r("span", {
                      className: "font-bold",
                      children: e.amount
                    })]
                  }), l("p", {
                    className: "ml-3 text-sm",
                    children: [r("span", {
                      className: "font-semibold text-slate-900",
                      children: "one-time payment"
                    }), r("br", {}), r("span", {
                      className: "text-slate-500",
                      children: "plus local taxes"
                    })]
                  })]
                }), r("p", {
                  className: "mt-6 text-sm leading-6 text-slate-600",
                  children: "Get lifetime access to every one of our website templates as well as all of our component examples for a single one-time purchase."
                }), e.advertised !== e.amount && l("div", {
                  className: "relative mt-6 flex items-start rounded-xl border border-slate-600/10 bg-slate-50 p-3",
                  children: [r("svg", {
                    className: "h-6 w-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: r("path", {
                      d: "M19.4067 15.0682L18.9748 14.455C18.7377 14.6219 18.6181 14.9106 18.6677 15.1963L19.4067 15.0682ZM19.4071 8.93218L18.6682 8.8039C18.6186 9.08961 18.7382 9.37832 18.9752 9.54532L19.4071 8.93218ZM18.3643 5.6359L18.8946 5.10557L18.3643 5.6359ZM15.068 4.59307L14.4548 5.02495C14.6218 5.26205 14.9105 5.38162 15.1963 5.33201L15.068 4.59307ZM8.93194 4.59319L8.8037 5.33214C9.08943 5.38172 9.37814 5.26214 9.54513 5.02504L8.93194 4.59319ZM4.59298 8.93208L5.02488 9.54524C5.26194 9.37826 5.38151 9.08957 5.33193 8.80386L4.59298 8.93208ZM4.59286 15.0678L5.33181 15.1961C5.38141 14.9104 5.26185 14.6217 5.02478 14.4547L4.59286 15.0678ZM5.6357 18.3641L5.10537 18.8945L5.10537 18.8945L5.6357 18.3641ZM8.93204 19.407L9.54521 18.9751C9.37821 18.738 9.08949 18.6184 8.80375 18.668L8.93204 19.407ZM15.068 19.4069L15.1962 18.6679C14.9105 18.6184 14.6218 18.7379 14.4548 18.975L15.068 19.4069ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM9.75 9.75V9C9.33579 9 9 9.33579 9 9.75H9.75ZM9.7575 9.75H10.5075C10.5075 9.33579 10.1717 9 9.7575 9V9.75ZM9.7575 9.7575V10.5075C10.1717 10.5075 10.5075 10.1717 10.5075 9.7575H9.7575ZM9.75 9.7575H9C9 10.1717 9.33579 10.5075 9.75 10.5075V9.7575ZM14.25 14.25V13.5C13.8358 13.5 13.5 13.8358 13.5 14.25H14.25ZM14.2575 14.25H15.0075C15.0075 13.8358 14.6717 13.5 14.2575 13.5V14.25ZM14.2575 14.2575V15.0075C14.6717 15.0075 15.0075 14.6717 15.0075 14.2575H14.2575ZM14.25 14.2575H13.5C13.5 14.6717 13.8358 15.0075 14.25 15.0075V14.2575ZM20.25 12C20.25 13.014 19.7476 13.9108 18.9748 14.455L19.8385 15.6814C20.9931 14.8683 21.75 13.5226 21.75 12H20.25ZM18.9752 9.54532C19.7478 10.0896 20.25 10.9862 20.25 12H21.75C21.75 10.4777 20.9934 9.13219 19.8391 8.31903L18.9752 9.54532ZM17.834 6.16623C18.551 6.88326 18.8299 7.87262 18.6682 8.8039L20.1461 9.06045C20.3876 7.669 19.9713 6.18221 18.8946 5.10557L17.834 6.16623ZM15.1963 5.33201C16.1276 5.17034 17.1169 5.44919 17.834 6.16623L18.8946 5.10557C17.818 4.02892 16.3312 3.61256 14.9397 3.85412L15.1963 5.33201ZM12 3.75C13.0139 3.75 13.9106 4.25228 14.4548 5.02495L15.6812 4.16119C14.868 3.00672 13.5224 2.25 12 2.25V3.75ZM9.54513 5.02504C10.0893 4.25232 10.986 3.75 12 3.75V2.25C10.4775 2.25 9.13188 3.00678 8.31875 4.16133L9.54513 5.02504ZM6.1662 6.1664C6.88319 5.44941 7.87247 5.17054 8.8037 5.33214L9.06017 3.85423C7.66879 3.61278 6.18211 4.02916 5.10554 5.10574L6.1662 6.1664ZM5.33193 8.80386C5.17035 7.87264 5.44922 6.88338 6.1662 6.1664L5.10554 5.10574C4.02898 6.1823 3.61259 7.66895 3.85402 9.06031L5.33193 8.80386ZM3.75 12C3.75 10.9861 4.25224 10.0895 5.02488 9.54524L4.16108 8.31893C3.00667 9.13207 2.25 10.4776 2.25 12H3.75ZM5.02478 14.4547C4.2522 13.9104 3.75 13.0138 3.75 12H2.25C2.25 13.5223 3.00661 14.8678 4.16094 15.681L5.02478 14.4547ZM6.16603 17.8338C5.449 17.1168 5.17014 16.1274 5.33181 15.1961L3.85391 14.9395C3.61236 16.331 4.02873 17.8178 5.10537 18.8945L6.16603 17.8338ZM8.80375 18.668C7.87245 18.8297 6.88308 18.5508 6.16603 17.8338L5.10537 18.8945C6.18203 19.9711 7.66886 20.3875 9.06033 20.1459L8.80375 18.668ZM12 20.25C10.9861 20.25 10.0894 19.7477 9.54521 18.9751L8.31888 19.8389C9.13201 20.9933 10.4776 21.75 12 21.75V20.25ZM14.4548 18.975C13.9106 19.7477 13.0139 20.25 12 20.25V21.75C13.5224 21.75 14.8681 20.9932 15.6812 19.8387L14.4548 18.975ZM17.8334 17.8336C17.1165 18.5505 16.1273 18.8294 15.1962 18.6679L14.9398 20.1458C16.3311 20.3871 17.8176 19.9707 18.8941 18.8943L17.8334 17.8336ZM18.6677 15.1963C18.8292 16.1275 18.5503 17.1167 17.8334 17.8336L18.8941 18.8943C19.9705 17.8178 20.3869 16.3313 20.1456 14.94L18.6677 15.1963ZM9.53033 15.5303L15.5303 9.53033L14.4697 8.46967L8.46967 14.4697L9.53033 15.5303ZM9.75 10.5H9.7575V9H9.75V10.5ZM9.0075 9.75V9.7575H10.5075V9.75H9.0075ZM9.7575 9.0075H9.75V10.5075H9.7575V9.0075ZM10.5 9.7575V9.75H9V9.7575H10.5ZM9.375 9.75C9.375 9.54289 9.54289 9.375 9.75 9.375V10.875C10.3713 10.875 10.875 10.3713 10.875 9.75H9.375ZM9.75 9.375C9.95711 9.375 10.125 9.54289 10.125 9.75H8.625C8.625 10.3713 9.12868 10.875 9.75 10.875V9.375ZM10.125 9.75C10.125 9.95711 9.95711 10.125 9.75 10.125V8.625C9.12868 8.625 8.625 9.12868 8.625 9.75H10.125ZM9.75 10.125C9.54289 10.125 9.375 9.95711 9.375 9.75H10.875C10.875 9.12868 10.3713 8.625 9.75 8.625V10.125ZM14.25 15H14.2575V13.5H14.25V15ZM13.5075 14.25V14.2575H15.0075V14.25H13.5075ZM14.2575 13.5075H14.25V15.0075H14.2575V13.5075ZM15 14.2575V14.25H13.5V14.2575H15ZM13.875 14.25C13.875 14.0429 14.0429 13.875 14.25 13.875V15.375C14.8713 15.375 15.375 14.8713 15.375 14.25H13.875ZM14.25 13.875C14.4571 13.875 14.625 14.0429 14.625 14.25H13.125C13.125 14.8713 13.6287 15.375 14.25 15.375V13.875ZM14.625 14.25C14.625 14.4571 14.4571 14.625 14.25 14.625V13.125C13.6287 13.125 13.125 13.6287 13.125 14.25H14.625ZM14.25 14.625C14.0429 14.625 13.875 14.4571 13.875 14.25H15.375C15.375 13.6287 14.8713 13.125 14.25 13.125V14.625Z",
                      fill: "#94A3B8"
                    })
                  }), l("p", {
                    className: "ml-2 text-sm leading-6 text-slate-700",
                    children: [r("strong", {
                      className: "font-semibold text-slate-900",
                      children: "Discounted"
                    }), " — since you own other Tailwind UI products."]
                  })]
                }), r("h4", {
                  className: "sr-only",
                  children: "All-access features"
                }), l("ul", {
                  className: "mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700",
                  children: [l("li", {
                    className: "flex",
                    children: [l("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 32 32",
                      className: "h-8 w-8 flex-none",
                      children: [r("path", {
                        fill: "#fff",
                        d: "M0 0h32v32H0z"
                      }), r("rect", {
                        width: "23",
                        height: "22",
                        x: "3",
                        y: "5",
                        stroke: "#0EA5E9",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        rx: "2"
                      }), r("rect", {
                        width: "10",
                        height: "18",
                        x: "19",
                        y: "9",
                        fill: "#E0F2FE",
                        stroke: "#0EA5E9",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        rx: "2"
                      }), r("circle", {
                        cx: "6",
                        cy: "8",
                        r: "1",
                        fill: "#0EA5E9"
                      }), r("circle", {
                        cx: "9",
                        cy: "8",
                        r: "1",
                        fill: "#0EA5E9"
                      }), r("path", {
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5",
                        d: "M3 11h16"
                      })]
                    }), l("p", {
                      className: "ml-5",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Every site template"
                      }), " ", "— beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js."]
                    })]
                  }), l("li", {
                    className: "flex",
                    children: [l("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 32 32",
                      className: "h-8 w-8 flex-none",
                      children: [r("path", {
                        fill: "#fff",
                        d: "M0 0h32v32H0z"
                      }), r("path", {
                        fill: "#E0F2FE",
                        d: "M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
                      }), r("path", {
                        fill: "#0EA5E9",
                        d: "M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
                      })]
                    }), l("p", {
                      className: "ml-5",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Over 500+ components"
                      }), " ", "— everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more."]
                    })]
                  }), l("li", {
                    className: "flex",
                    children: [l("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 32 32",
                      className: "h-8 w-8 flex-none",
                      children: [r("path", {
                        fill: "#fff",
                        d: "M0 0h32v32H0z"
                      }), r("path", {
                        fill: "#E0F2FE",
                        d: "M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
                      }), r("path", {
                        stroke: "#0EA5E9",
                        strokeLinecap: "round",
                        strokeWidth: "1.5",
                        d: "M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
                      }), r("circle", {
                        cx: "16",
                        cy: "16",
                        r: "14",
                        stroke: "#0EA5E9",
                        strokeWidth: "1.5"
                      })]
                    }), l("p", {
                      className: "ml-5",
                      children: [r("strong", {
                        className: "font-semibold text-slate-900",
                        children: "Lifetime access"
                      }), " — get instant access to everything we have today, plus any new components and templates we add in the future."]
                    })]
                  })]
                }), l("div", {
                  className: "relative mt-10 flex rounded-xl border border-slate-600/10 bg-slate-50 p-6",
                  children: [l("svg", {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 flex-none",
                    stroke: "#94A3B8",
                    strokeWidth: "1.5",
                    children: [r("circle", {
                      cx: "11",
                      cy: "16",
                      r: "3.25",
                      fill: "#94A3B8",
                      fillOpacity: ".2"
                    }), r("circle", {
                      cx: "21",
                      cy: "13",
                      r: "3.25",
                      fill: "#94A3B8",
                      fillOpacity: ".2"
                    }), r("path", {
                      d: "M28.909 19c.223-.964.341-1.968.341-3 0-7.318-5.932-13.25-13.25-13.25S2.75 8.682 2.75 16c0 1.032.118 2.036.341 3",
                      strokeLinecap: "round"
                    }), r("path", {
                      d: "m18.031 29.016-2.187.109s-1.475-.118-1.827-.29c-1.049-.51-.579-2.915 0-3.95 1.157-2.064 3.752-5.135 7.125-5.135h.024c2.5 0 4.404 1.687 5.692 3.401-1.963 2.975-5.161 5.276-8.827 5.865Z",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      strokeLinejoin: "round"
                    }), r("path", {
                      d: "m14.001 24.913.016-.027c.26-.465.593-.98.991-1.5-1.042-.918-2.374-1.636-3.988-1.636H11c-2.094 0-3.847 1.208-5.055 2.492a12.987 12.987 0 0 0 7.987 4.595l.057-.016c-1.004-.534-.555-2.868.012-3.908Z",
                      fill: "#94A3B8",
                      fillOpacity: ".2",
                      strokeLinejoin: "round"
                    })]
                  }), l("p", {
                    className: "ml-5 text-sm leading-6 text-slate-700",
                    children: [r("strong", {
                      className: "font-semibold text-slate-900",
                      children: "Available for teams"
                    }), " — get access to all of our templates and components plus any future updates for your entire team."]
                  })]
                })]
              })]
            }), l("div", {
              className: "relative mt-10 lg:mt-0 lg:w-1/2 lg:flex-none",
              children: [r("div", {
                className: "absolute -inset-y-8 -left-2 w-px bg-slate-900/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:left-0"
              }), r("div", {
                className: "absolute -inset-y-8 -right-2 w-px bg-slate-900/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:right-0 lg:hidden"
              }), r("div", {
                className: "absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), r("div", {
                className: "absolute -inset-x-8 bottom-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              }), t]
            })]
          })]
        }), l("section", {
          className: "mt-20 lg:mt-24",
          children: [r("h2", {
            className: "sr-only",
            children: "Testimonials"
          }), r("div", {
            className: "mx-auto max-w-[40rem] lg:max-w-[50rem]",
            children: l(be.Group, {
              defaultIndex: 1,
              children: [r(be.List, {
                className: "flex justify-center space-x-4 pt-2",
                children: Jl.map(n => l(be, {
                  className: ({
                    selected: a
                  }) => B("h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition [&:focus:not(:focus-visible)]:outline-none", {
                    "opacity-40": !a,
                    "-translate-y-2": a
                  }),
                  children: [r("img", {
                    src: n.img,
                    alt: ""
                  }), r("span", {
                    className: "sr-only",
                    children: n.name
                  })]
                }, n.name))
              }), r(be.Panels, {
                className: "mt-10",
                children: Jl.map(n => l(be.Panel, {
                  as: "figure",
                  className: "text-center",
                  children: [r("blockquote", {
                    className: "text-2xl leading-9 text-slate-900",
                    children: r("p", {
                      className: "before:content-['“'] after:content-['”']",
                      children: n.body
                    })
                  }), l("figcaption", {
                    className: "mt-8",
                    children: [r("span", {
                      className: "block text-base font-medium leading-7 text-slate-900",
                      children: n.name
                    }), r("span", {
                      className: "text-sm text-slate-600",
                      dangerouslySetInnerHTML: {
                        __html: n.handle
                      }
                    })]
                  })]
                }, n.name))
              })]
            })
          })]
        })]
      })]
    })
  }

  function To({
    product: e,
    allAccessPricing: t,
    tailwindVersion: n
  }) {
    return l(j, {
      children: [r(we, {
        title: `${e.name} - Tailwind CSS ${e.type.replace(/\w\S*/g, a => a.charAt(0).toUpperCase() + a.substr(1))} Template`,
        description: e.description,
        twitterImage: e.twitter_image_url
      }), l("div", {
        className: "relative -mt-[5.75rem] bg-slate-50 pt-[5.75rem]",
        children: [l("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [r("img", {
            src: "/img/beams-template-header.png",
            alt: "",
            className: "absolute bottom-0 hidden lg:block"
          }), r("img", {
            src: "/img/beams-templates.png",
            alt: "",
            className: "absolute -top-[7rem] left-1/2 -ml-[16rem] w-[60.4375rem] max-w-none sm:-ml-[10rem] md:-ml-[16rem] lg:-top-[10rem] lg:-ml-[22rem] lg:hidden"
          })]
        }), r("div", {
          className: "relative",
          children: r("div", {
            className: "relative mx-auto max-w-container px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20",
            children: l("div", {
              className: "mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3",
              children: [l("div", {
                className: "flex flex-col lg:pb-6",
                children: [r("h1", {
                  className: "mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]",
                  children: e.name
                }), l("div", {
                  className: "order-first flex items-center gap-2",
                  children: [l("p", {
                    className: "text-base font-semibold leading-7 text-slate-500",
                    children: [e.type, " template"]
                  }), e.is_new && r("p", {
                    className: "rounded-full bg-sky-500 px-1.5 py-0.5 text-[0.6875rem] font-semibold leading-4 text-white",
                    children: "New"
                  })]
                }), r("p", {
                  className: "mt-6 text-base leading-7 text-slate-700",
                  children: e.description
                }), r(Oi, {
                  frameworks: ["React", "Next.js"],
                  className: "mt-6"
                }), r("div", {
                  className: "mt-10 flex gap-4",
                  children: e.downloadable ? l(j, {
                    children: [r(rr, {
                      size: "lg",
                      href: e.download_url,
                      children: l("span", {
                        className: "flex items-center",
                        children: ["Download", r("svg", {
                          viewBox: "0 0 20 20",
                          className: "ml-1.5 h-5 w-5 fill-slate-400",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          children: r("path", {
                            d: "M10 2.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM1.25 10a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Zm9.5-4.083v5.606l1.917-1.917 1.06 1.06L10 14.395l-3.727-3.727 1.06-1.061 1.917 1.917V5.917h1.5Z"
                          })
                        })]
                      })
                    }), r(rr, {
                      size: "lg",
                      href: e.preview_url,
                      target: "_blank",
                      variant: "secondary",
                      children: l("span", {
                        className: "flex items-center",
                        children: ["Live preview", r("svg", {
                          viewBox: "0 0 20 20",
                          className: "ml-1.5 h-5 w-5 fill-slate-400",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          children: r("path", {
                            d: "M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"
                          })
                        })]
                      })
                    })]
                  }) : l(j, {
                    children: [r(rr, {
                      size: "lg",
                      href: e.preview_url,
                      target: "_blank",
                      children: l("span", {
                        className: "inline-flex items-center",
                        children: [r("span", {
                          children: "Live preview"
                        }), r("svg", {
                          viewBox: "0 0 20 20",
                          className: "ml-1.5 h-5 w-5 fill-slate-400",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          children: r("path", {
                            d: "M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"
                          })
                        })]
                      })
                    }), l(rr, {
                      size: "lg",
                      href: "#pricing",
                      variant: "secondary",
                      children: ["Get this template", " ", r("span", {
                        "aria-hidden": "true",
                        className: "text-black/25",
                        children: "→"
                      })]
                    })]
                  })
                })]
              }), l("div", {
                className: "relative lg:col-span-2",
                children: [r("img", {
                  src: e.banner_image_url,
                  width: 1600,
                  height: 1280,
                  className: "relative z-20 -mb-36 aspect-[853/682] max-w-[853px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                }), l("div", {
                  className: "z-0 hidden md:block",
                  children: [r("div", {
                    className: "absolute -left-12 -right-12 -top-4 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
                  }), r("div", {
                    className: "absolute -left-4 -top-12 bottom-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"
                  }), r("div", {
                    className: "absolute -right-4 -top-12 bottom-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"
                  }), r("div", {
                    className: "absolute -top-12 right-10 mt-px flex h-8 items-end overflow-hidden",
                    children: r(We, {
                      className: "-mb-px h-[2px] w-80 -scale-x-100",
                      subtle: !0
                    })
                  }), r("div", {
                    className: "absolute -left-48 bottom-0 flex h-8 items-end overflow-hidden",
                    children: r(We, {
                      className: "-mb-px h-[2px] w-80 -scale-x-100",
                      subtle: !0
                    })
                  })]
                })]
              })]
            })
          })
        }), r("div", {
          className: "absolute inset-x-0 bottom-0 h-px overflow-hidden",
          children: r("div", {
            className: "absolute -left-8 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
          })
        })]
      }), r("div", {
        className: "mx-auto mt-52 w-full max-w-container px-4 pb-20 sm:mt-36 sm:px-6 sm:pb-24 lg:mt-28 lg:px-8 lg:pb-32 xl:mt-36",
        children: l("div", {
          className: "mx-auto max-w-[40rem] space-y-20 divide-y divide-slate-200 sm:space-y-24 lg:max-w-none lg:space-y-32",
          children: [l("section", {
            className: "grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3",
            children: [r("h2", {
              className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
              children: "What’s included"
            }), l(Ve, {
              className: "max-w-2xl space-y-10 lg:col-span-2",
              children: [r("div", {
                dangerouslySetInnerHTML: {
                  __html: e.overview
                },
                className: "[&>:first-child]:mt-0 [&>:last-child]:mb-0"
              }), r("div", {
                dangerouslySetInnerHTML: {
                  __html: e.features
                },
                className: "space-y-10"
              })]
            })]
          }), l("section", {
            className: "grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3",
            children: [r("h2", {
              className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
              children: "Screenshots"
            }), r("div", {
              className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2",
              children: e.images.map((a, i) => r("img", {
                src: a.url,
                alt: a.alt,
                className: "aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
              }, a.url))
            })]
          }), l("section", {
            className: "grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3",
            children: [r("h2", {
              className: "text-2xl font-semibold leading-9 tracking-tight text-slate-900",
              children: "Built for developers"
            }), l(Ve, {
              className: "max-w-none lg:col-span-2",
              children: [r("p", {
                children: "Our templates are thoughtfully crafted with the latest and greatest versions of the tools we love so that they are easy to maintain, and fun to actually work on."
              }), r("div", {
                className: "not-prose mt-6",
                children: r("ul", {
                  className: "grid grid-cols-2 gap-x-8 gap-y-6",
                  children: e.technologies.map(a => l("li", {
                    children: [r("strong", {
                      className: "font-semibold text-slate-900",
                      children: a.name
                    }), " ", a.version]
                  }, a.name))
                })
              })]
            })]
          })]
        })
      }), e.downloadable ? r("div", {
        className: "mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8",
        children: r("div", {
          className: "h-px bg-slate-200"
        })
      }) : l(Lf, {
        price: t,
        children: [r("div", {
          className: "px-2 py-8 sm:px-8",
          children: l("div", {
            className: "mx-auto max-w-[28.75rem]",
            children: [l("div", {
              className: "flex items-center justify-between",
              children: [l("h3", {
                className: "text-base font-semibold text-slate-500",
                children: [r("span", {
                  className: "text-slate-900",
                  children: e.name
                }), r("span", {
                  className: "hidden sm:inline",
                  children: " — "
                }), l("span", {
                  className: "block text-sm sm:inline sm:text-base",
                  children: [e.type, " template"]
                })]
              }), l(pe, {
                href: e.checkout_url,
                variant: "outline",
                size: "sm",
                children: ["Get template", " ", r("span", {
                  "aria-hidden": "true",
                  className: "text-black/25",
                  children: "→"
                })]
              })]
            }), l("p", {
              className: "mt-2 flex items-center",
              children: [l("span", {
                className: "text-2xl text-slate-900",
                children: [e.price.country, e.price.symbol, r("span", {
                  className: "font-bold",
                  children: e.price.amount
                })]
              }), r("span", {
                className: "ml-2 text-sm text-slate-500",
                children: "plus local taxes"
              })]
            }), r("p", {
              className: "mt-2 text-sm leading-6 text-slate-700",
              children: e.summary
            })]
          })
        }), l("div", {
          className: "relative px-2 py-10 sm:px-8",
          children: [r("div", {
            className: "absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
          }), r("ul", {
            role: "list",
            className: "mx-auto max-w-[28.75rem] space-y-8 text-sm leading-6 text-slate-700",
            children: [
              ["Unlimited projects", "buy once and use this template for as many projects as you need, both personal and commercial."],
              ["Free updates", "any updates we make to the template are included with your original purchase."],
              ["Simple .zip file", "templates are delivered as a simple archive you can unzip and start playing with right away."]
            ].map(([a, i], s) => l("li", {
              className: "flex",
              children: [r("svg", {
                className: "h-6 w-6 flex-none fill-slate-400",
                xmlns: "http://www.w3.org/2000/svg",
                children: r("path", {
                  d: "M7.672 12.122a1 1 0 0 0-1.344 1.481l1.344-1.48Zm9.98-3.22a1 1 0 0 0-1.304-1.517L17.652 8.9Zm-6.882 7.383-.673.74a1 1 0 0 0 1.579-.317l-.906-.423Zm.906.423c1.382-2.961 3.428-5.616 5.976-7.807l-1.304-1.516c-2.752 2.366-4.976 5.245-6.485 8.477l1.813.846Zm-5.348-3.105 3.77 3.423 1.344-1.481-3.77-3.423-1.344 1.481Z"
                })
              }), l("p", {
                className: "ml-3",
                children: [r("strong", {
                  className: "font-semibold text-slate-900",
                  children: a
                }), " —", " ", i]
              })]
            }, s))
          })]
        })]
      }), r(Af, {
        tailwindVersion: n,
        className: "mt-32"
      })]
    })
  }
  To.layout = e => r(De, {
    children: e
  });

  function Af({
    className: e,
    tailwindVersion: t
  }) {
    return r("section", {
      id: "faqs",
      className: B("mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8", e),
      children: l("div", {
        className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0",
        children: [l("div", {
          className: "lg:col-span-4",
          children: [r("h2", {
            className: "text-base font-semibold leading-7 text-indigo-500",
            children: "Frequently asked questions"
          }), r("p", {
            className: "mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]",
            children: "Everything you need to know"
          })]
        }), l("div", {
          className: "-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6",
          children: [l(Xe, {
            title: "General",
            children: [r(X, {
              question: "What does “lifetime access” mean exactly?",
              children: l("p", {
                children: ["Tailwind UI products are a", " ", r("strong", {
                  children: "one-time purchase, with no recurring subscription"
                }), ". When you purchase any Tailwind UI product, you have access to all of the content in that product forever."]
              })
            }), l(X, {
              question: "What does “free updates” include?",
              children: [r("p", {
                children: "When you purchase any Tailwind UI product, any improvements we make to that product will always be free for anyone who owns that product."
              }), l("p", {
                children: [r("strong", {
                  children: "Individual templates:"
                }), " When you buy an individual template, any improvements we make to that template will be available to you as part of your original purchase."]
              }), r("p", {
                children: "So if we fix a bug or upgrade the template to use the latest version of Tailwind CSS or Next.js, you can download an updated version of the template free of charge."
              }), l("p", {
                children: ["Any ", r("em", {
                  children: "new"
                }), " templates we release are considered separate products, and can be purchased separately."]
              }), l("p", {
                children: [r("strong", {
                  children: "All-access:"
                }), " When you purchase an all-access license, you get access to every site template available ", r("em", {
                  children: "and"
                }), " every component package available today, plus any new templates or component packages we release in the future at no additional cost."]
              }), r("p", {
                children: "This means that if we add a brand new social media website template or new component package like “Journalism”, access to those products are included in your original purchase, with no upgrade cost."
              })]
            })]
          }), l(Xe, {
            title: "Compatibility",
            children: [l(X, {
              question: "Are Figma, Sketch, or Adobe XD files included?",
              children: [r("p", {
                children: "No, design assets for tools like Figma, Sketch, or Adobe XD are not included."
              }), r("p", {
                children: "We don't produce high-quality design artifacts as part of our own design and development process, so building these extra resources means we can't spend as much time creating new components and templates in code which is where we believe we can provide the most value."
              })]
            }), r(X, {
              question: "What JS framework is used?",
              children: r("p", {
                children: "Our website templates are built using Next.js, so all of the markup is written using React."
              })
            }), r(X, {
              question: "What version of Tailwind CSS is used?",
              children: l("p", {
                children: ["Everything in Tailwind UI is designed and developed for the latest version of Tailwind CSS, which is currently Tailwind CSS v", t, "."]
              })
            }), l(X, {
              question: "What browsers are supported?",
              children: [r("p", {
                children: "The components and templates in Tailwind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge."
              }), r("p", {
                children: "We don't support Internet Explorer 11."
              })]
            })]
          }), l(Xe, {
            title: "Licensing",
            children: [l(X, {
              question: "Do I need to purchase a license for each project I work on?",
              children: [r("p", {
                children: "Unlike most other templates/themes, you don't have to buy a new Tailwind UI license every time you want to use it on a new project."
              }), r("p", {
                children: "As long as what you're building is allowed as per the license, you can build as many sites as you want without ever having to buy an additional license."
              }), l("p", {
                children: ["For more information and examples,", " ", r(U, {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI for client projects?",
              children: [r("p", {
                children: "Yes! As long what you're building is a custom website developed for a single client, you can totally use components and templates in Tailwind UI to help build it."
              }), r("p", {
                children: "The only thing you can't do is use Tailwind UI to build a website or template that is resold to multiple clients."
              }), l("p", {
                children: ["For more information and examples, ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI for my own commercial projects?",
              children: [r("p", {
                children: "Absolutely! Your license gives you permission to build as many of your own projects as you like, whether those are simple public websites or SaaS applications that end users need to pay to access."
              }), r("p", {
                children: "As long as what you’re building isn’t a website builder or other tool that customers can use to create their own sites using elements that originate from Tailwind UI, you’re good to go."
              }), l("p", {
                children: ["For more information and examples, ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I use Tailwind UI in open source projects?",
              children: [r("p", {
                children: "Yep! As long as what you're building is some sort of actual website and not a derivative component library, theme builder, or other product where the primary purpose is clearly to repackage and redistribute our components, it's totally okay for that project to be open source."
              }), l("p", {
                children: ["For more information and examples of what is and isn't okay,", " ", r(U, {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            }), l(X, {
              question: "Can I sell templates/themes I build with Tailwind UI?",
              children: [r("p", {
                children: "No, you cannot use Tailwind UI to create derivative products like themes, UI kits, page builders, or anything else where you would be repackaging and redistributing our components or templates for someone else to use to build their own sites."
              }), l("p", {
                children: ["For more information and examples of what is and isn't okay,", " ", r("a", {
                  href: "/license",
                  children: "read through our license"
                }), "."]
              })]
            })]
          }), l(Xe, {
            title: "Support",
            children: [l(X, {
              question: "Do you offer technical support?",
              children: [r("p", {
                children: "Tailwind UI is a self-serve product, meaning that while we do offer customer support for things like account management and licensing related concerns, the expectation is that customers have the requisite knowledge of Tailwind CSS, HTML, React, and Vue to use the product successfully."
              }), l("p", {
                children: ["Because every project is different and the way independently authored pieces of code interact can be complex and time-consuming to understand,", " ", r("strong", {
                  children: "we do not offer technical support or consulting"
                }), "."]
              }), r("p", {
                children: "Tailwind UI customers do get access to a private Discord community where you can ask questions and help others with their questions in return, but we don't offer first-party technical support or consulting here ourselves."
              })]
            }), r(X, {
              question: "What is your refund policy?",
              children: l("p", {
                children: ["If you're unhappy with your purchase for any reason, email us at", " ", r("a", {
                  href: "mailto:support@tailwindui.com",
                  children: "support@tailwindui.com"
                }), " within 30 days and we'll refund you in full, no questions asked."]
              })
            })]
          })]
        })]
      })
    })
  }
  const Tf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: To
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function _f() {
    return r("div", {
      className: "relative z-10 hidden lg:block",
      children: l("div", {
        className: "mt-6 flex",
        children: [l("div", {
          className: "relative flex-shrink-0 p-4",
          children: [r("div", {
            className: "relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5",
            children: r("img", {
              className: "h-[404px] w-[336px]",
              src: "/img/headers/templates/salient.png"
            })
          }), l("div", {
            className: "z-0",
            children: [r("div", {
              className: "absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden",
              children: r(We, {
                className: "-mb-px h-[2px] w-80 -scale-x-100",
                subtle: !0
              })
            })]
          })]
        }), l("div", {
          className: "relative mt-14 flex-shrink-0 p-4",
          children: [r("div", {
            className: "overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5",
            children: r("img", {
              className: "h-[404px] w-[336px]",
              src: "/img/headers/templates/keynote.png"
            })
          }), l("div", {
            children: [r("div", {
              className: "absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -bottom-12 -top-20 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            }), r("div", {
              className: "absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start overflow-hidden",
              children: r(We, {
                className: "-mt-px h-[2px] w-80 -scale-x-100",
                subtle: !0
              })
            })]
          })]
        }), l("div", {
          className: "relative flex-shrink-0 p-4",
          children: [r("div", {
            className: "overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5",
            children: r("img", {
              className: "h-[404px] w-[336px]",
              src: "/img/headers/templates/primer.png"
            })
          }), r("div", {
            children: r("div", {
              className: "absolute -left-12 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            })
          })]
        })]
      })
    })
  }

  function _o({
    can: e,
    products: t
  }) {
    return l(j, {
      children: [r(we, {
        title: "Tailwind CSS Templates - Tailwind UI"
      }), e.purchaseAllAccess ? r(xo, {
        color: "sky",
        title: "Modern website templates, crafted with Tailwind CSS.",
        frameworks: ["React", "Next.js"],
        description: "Visually-stunning, easy to customize site templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS.",
        buttons: l("div", {
          className: "mt-8 flex gap-4",
          children: [l(rr, {
            size: "lg",
            href: "#browse",
            variant: "primary",
            children: ["Browse ", r("span", {
              className: "hidden sm:inline",
              children: "templates"
            }), " ", r("span", {
              "aria-hidden": "true",
              className: "text-slate-400 sm:inline",
              children: "→"
            })]
          }), l(pe, {
            size: "lg",
            href: "/all-access",
            variant: "secondary",
            children: ["Get ", r("span", {
              className: "hidden sm:inline",
              children: "everything"
            }), " with all-access", " ", r("span", {
              "aria-hidden": "true",
              className: "text-black/25 sm:inline",
              children: "→"
            })]
          })]
        }),
        features: [{
          title: "Built with modern technologies",
          description: "Each template is a well-structured Next.js project, giving you a codebase that’s productive and enjoyable to work in.",
          icon: "technology"
        }, {
          title: "Easy to customize",
          description: "Everything is styled with utility classes, just open the markup in your editor and change whatever you want.",
          icon: "customize"
        }, {
          title: "Built by experts",
          description: "All of the code follows Tailwind CSS best practices, because it’s written by the same team who created and maintain the framework.",
          icon: "experts"
        }],
        background: r("div", {
          className: "absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/public/img/beams-templates-header.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block"
        }),
        children: r(_f, {})
      }) : r(j, {
        children: r("div", {
          className: "absolute inset-x-0 top-0 overflow-hidden pl-[50%]",
          children: r("img", {
            src: "/img/beams-basic.png",
            alt: "",
            className: "-ml-[39rem] w-[113.125rem] max-w-none"
          })
        })
      }), r("div", {
        id: "browse",
        className: "relative px-4 sm:px-6 lg:px-0",
        children: r("div", {
          className: "mx-auto mt-20 w-full max-w-[40rem] space-y-8 divide-y divide-slate-900/10 sm:space-y-10 lg:max-w-none lg:space-y-24 lg:divide-y-0",
          children: t.map((n, a) => r("section", {
            id: n.anchor,
            className: B({
              "pt-12 sm:pt-16 lg:pt-0": a > 0
            }),
            children: l("div", {
              className: "relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0",
              children: [l("div", {
                className: "sm:pt-2 md:pr-6 lg:relative lg:ml-auto lg:w-[19.5rem] lg:flex-none lg:pl-8 lg:pr-0",
                children: [l("div", {
                  className: "flex items-center gap-2",
                  children: [r("h2", {
                    className: "text-base font-semibold text-slate-900",
                    children: l(U, {
                      href: n.url,
                      children: [r("span", {
                        className: "absolute inset-0 lg:left-8"
                      }), n.name]
                    })
                  }), n.preview_only && l("span", {
                    className: "flex items-center gap-2 rounded-full border border-dashed border-gray-300 py-px pl-3 pr-1 text-xs/6 font-medium text-gray-900",
                    children: ["Private alpha", r("span", {
                      className: "flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200",
                      children: r("svg", {
                        viewBox: "0 0 8 12",
                        fill: "none",
                        className: "w-2 fill-gray-900",
                        children: r("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M2 3.5C2 2.39543 2.89543 1.5 4 1.5C5.10457 1.5 6 2.39543 6 3.5V4C6 4.27614 5.77614 4.5 5.5 4.5H2.5C2.22386 4.5 2 4.27614 2 4V3.5ZM0.761594 4.92943C0.901674 4.81883 1 4.65765 1 4.47917V3.5C1 1.84315 2.34315 0.5 4 0.5C5.65685 0.5 7 1.84315 7 3.5V4.47917C7 4.65765 7.09833 4.81883 7.23841 4.92943C7.70228 5.2957 8 5.86308 8 6.5V9.5C8 10.6046 7.10457 11.5 6 11.5H2C0.895431 11.5 0 10.6046 0 9.5V6.5C0 5.86308 0.297724 5.2957 0.761594 4.92943Z"
                        })
                      })
                    })]
                  }), n.is_new && r("p", {
                    className: "rounded-full bg-sky-500 px-1.5 py-0.5 text-[0.6875rem] font-semibold leading-4 text-white",
                    children: "New"
                  })]
                }), l("p", {
                  className: "text-sm capitalize leading-6 text-slate-600",
                  children: [n.type, " template"]
                }), r("p", {
                  className: "mt-3 text-sm leading-6 text-slate-600",
                  children: n.summary
                }), r("div", {
                  className: "mt-4 h-px w-6 bg-slate-300"
                }), n.downloadable ? l("a", {
                  href: n.download_url,
                  className: "relative mt-4 inline-flex items-center justify-center text-sm font-semibold text-slate-900 hover:text-sky-600",
                  children: [l("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "mr-2 h-6 w-6 stroke-current",
                    children: [r("circle", {
                      cx: "12",
                      cy: "12",
                      r: "9",
                      strokeWidth: "1.5"
                    }), r("path", {
                      d: "M9 12.75L12 15.75M12 15.75L15 12.75M12 15.75L12 8.25",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })]
                  }), "Download"]
                }) : l("p", {
                  className: "mt-4 text-sm leading-6 text-slate-600",
                  children: [l("strong", {
                    className: "font-semibold text-slate-900",
                    children: [n.price.country, n.price.symbol, n.price.amount]
                  }), " ", "or included with all-access"]
                })]
              }), l("div", {
                className: "lg:relative lg:mr-auto lg:flex lg:min-w-0 lg:overflow-x-auto",
                children: [r("div", {
                  className: "sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-white lg:block"
                }), l("div", {
                  className: "lg:relative lg:flex lg:flex-none lg:items-start lg:pr-8",
                  children: [r(U, {
                    href: n.url,
                    tabIndex: -1,
                    className: "hidden lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block",
                    children: l("span", {
                      className: "sr-only",
                      children: ["View ", n.name, " template"]
                    })
                  }), n.images.map((i, s) => r("img", {
                    src: i.url,
                    alt: i.alt,
                    width: 560,
                    height: 380,
                    className: B("w-full rounded-xl bg-slate-100 lg:w-[19.1666666rem] lg:flex-none", {
                      "lg:ml-8": s > 0,
                      "hidden lg:block": s > 0
                    })
                  }, i.url))]
                })]
              })]
            })
          }, n.id))
        })
      })]
    })
  }
  _o.layout = e => r(De, {
    children: e,
    showBorder: !e.props.can.purchaseAllAccess
  });
  const If = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _o
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function Pf(e) {
    return l("svg", {
      ...e,
      width: "60",
      height: "60",
      fill: "none",
      children: [r("circle", {
        cx: "30.005",
        cy: "30.005",
        r: "28",
        className: "stroke-slate-900/10",
        strokeWidth: "2"
      }), r("path", {
        d: "M16.002 54.253C2.612 46.521-1.975 29.397 5.755 16.005 13.486 2.612 30.608-1.976 43.998 5.756c13.39 7.732 17.977 24.857 10.247 38.249",
        stroke: "url(#paint0_linear)",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), r("defs", {
        children: l("linearGradient", {
          id: "paint0_linear",
          x1: "50.322",
          y1: "19.8",
          x2: "6.877",
          y2: "42.051",
          gradientUnits: "userSpaceOnUse",
          children: [r("stop", {
            stopColor: "#38bdf8"
          }), r("stop", {
            offset: "1",
            stopColor: "#38bdf8",
            stopOpacity: "0"
          })]
        })
      })]
    })
  }

  function Of({
    type: e
  }) {
    return l("div", {
      className: "text-center",
      children: [r(Pf, {
        className: "mx-auto mb-12 animate-spin"
      }), e === "upgrade" ? l(j, {
        children: [r("h1", {
          className: "text-3xl font-extrabold text-slate-900 sm:text-4xl",
          children: "Upgrading your account…"
        }), l("div", {
          className: "mt-6 text-base leading-7 text-slate-600",
          children: [r("p", {
            children: "Stand by while we activate your new license."
          }), r("p", {
            children: "Once that's complete you'll be taken back to the app."
          })]
        })]
      }) : l(j, {
        children: [r("h1", {
          className: "text-3xl font-extrabold text-slate-900 sm:text-4xl",
          children: "Setting up your account…"
        }), l("div", {
          className: "mt-6 text-base leading-7 text-slate-600",
          children: [r("p", {
            children: "Stand by while we get your account ready."
          }), r("p", {
            children: "Next you'll be taken to choose a password for your new Tailwind UI account."
          })]
        })]
      })]
    })
  }

  function Ff() {
    return l("div", {
      className: "text-center",
      children: [r("h1", {
        className: "text-3xl font-extrabold text-slate-900 sm:text-4xl",
        children: "Your activation link is in the mail."
      }), l("div", {
        className: "mt-6 max-w-[37.5rem] text-slate-600",
        children: [r("p", {
          className: "text-base leading-7",
          children: "Something is taking a little longer than we expected but you should receive your activation link via email within a few minutes."
        }), r("hr", {
          className: "mx-auto my-12 w-44 border-slate-900/10"
        }), l("p", {
          className: "text-sm leading-6",
          children: [r("strong", {
            className: "font-semibold text-slate-900",
            children: "Been a while and haven’t received it?"
          }), " ", "If our payment provider is really busy this can take a couple of minutes. If it's been longer than that, please", " ", r("a", {
            href: "mailto:support@tailwindui.com?subject=Didn't receive access link",
            className: "font-semibold text-sky-500 hover:text-sky-600",
            children: "email us"
          }), "."]
        })]
      })]
    })
  }

  function Rf({
    type: e,
    paddleCheckoutHash: t
  }) {
    const [n, a] = x.useState(!1);
    return x.useEffect(() => {
      async function i() {
        for (let s = 0; s < 30; s++) {
          const o = await fetch(`/paddle-purchases/${t}`);
          if (o.ok) {
            const c = await o.json();
            window.location.href = e === "upgrade" ? "/" : `/licenses/${c.license_key}`;
            return
          }
          await new Promise(c => setTimeout(c, 2e3))
        }
        a(!0)
      }
      i()
    }, []), l(j, {
      children: [r(we, {
        title: e === "upgrade" ? "Upgrading your account" : "Setting up your account"
      }), r(Nt, {
        children: n ? r(Ff, {}) : r(Of, {
          type: e
        })
      })]
    })
  }
  const $f = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Rf
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var ai = {},
    jf = {
      get exports() {
        return ai
      },
      set exports(e) {
        ai = e
      }
    };
  /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT */
  (function (e, t) {
    (function (n, a) {
      e.exports = a()
    })(tr, function () {
      var n = {};
      n.version = "0.2.0";
      var a = n.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      };
      n.configure = function (m) {
        var p, f;
        for (p in m) f = m[p], f !== void 0 && m.hasOwnProperty(p) && (a[p] = f);
        return this
      }, n.status = null, n.set = function (m) {
        var p = n.isStarted();
        m = i(m, a.minimum, 1), n.status = m === 1 ? null : m;
        var f = n.render(!p),
          N = f.querySelector(a.barSelector),
          S = a.speed,
          I = a.easing;
        return f.offsetWidth, c(function (M) {
          a.positionUsing === "" && (a.positionUsing = n.getPositioningCSS()), u(N, o(m, S, I)), m === 1 ? (u(f, {
            transition: "none",
            opacity: 1
          }), f.offsetWidth, setTimeout(function () {
            u(f, {
              transition: "all " + S + "ms linear",
              opacity: 0
            }), setTimeout(function () {
              n.remove(), M()
            }, S)
          }, S)) : setTimeout(M, S)
        }), this
      }, n.isStarted = function () {
        return typeof n.status == "number"
      }, n.start = function () {
        n.status || n.set(0);
        var m = function () {
          setTimeout(function () {
            n.status && (n.trickle(), m())
          }, a.trickleSpeed)
        };
        return a.trickle && m(), this
      }, n.done = function (m) {
        return !m && !n.status ? this : n.inc(.3 + .5 * Math.random()).set(1)
      }, n.inc = function (m) {
        var p = n.status;
        return p ? (typeof m != "number" && (m = (1 - p) * i(Math.random() * p, .1, .95)), p = i(p + m, 0, .994), n.set(p)) : n.start()
      }, n.trickle = function () {
        return n.inc(Math.random() * a.trickleRate)
      },
        function () {
          var m = 0,
            p = 0;
          n.promise = function (f) {
            return !f || f.state() === "resolved" ? this : (p === 0 && n.start(), m++, p++, f.always(function () {
              p--, p === 0 ? (m = 0, n.done()) : n.set((m - p) / m)
            }), this)
          }
        }(), n.render = function (m) {
          if (n.isRendered()) return document.getElementById("nprogress");
          b(document.documentElement, "nprogress-busy");
          var p = document.createElement("div");
          p.id = "nprogress", p.innerHTML = a.template;
          var f = p.querySelector(a.barSelector),
            N = m ? "-100" : s(n.status || 0),
            S = document.querySelector(a.parent),
            I;
          return u(f, {
            transition: "all 0 linear",
            transform: "translate3d(" + N + "%,0,0)"
          }), a.showSpinner || (I = p.querySelector(a.spinnerSelector), I && y(I)), S != document.body && b(S, "nprogress-custom-parent"), S.appendChild(p), p
        }, n.remove = function () {
          w(document.documentElement, "nprogress-busy"), w(document.querySelector(a.parent), "nprogress-custom-parent");
          var m = document.getElementById("nprogress");
          m && y(m)
        }, n.isRendered = function () {
          return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function () {
          var m = document.body.style,
            p = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
          return p + "Perspective" in m ? "translate3d" : p + "Transform" in m ? "translate" : "margin"
        };

      function i(m, p, f) {
        return m < p ? p : m > f ? f : m
      }

      function s(m) {
        return (-1 + m) * 100
      }

      function o(m, p, f) {
        var N;
        return a.positionUsing === "translate3d" ? N = {
          transform: "translate3d(" + s(m) + "%,0,0)"
        } : a.positionUsing === "translate" ? N = {
          transform: "translate(" + s(m) + "%,0)"
        } : N = {
          "margin-left": s(m) + "%"
        }, N.transition = "all " + p + "ms " + f, N
      }
      var c = function () {
        var m = [];

        function p() {
          var f = m.shift();
          f && f(p)
        }
        return function (f) {
          m.push(f), m.length == 1 && p()
        }
      }(),
        u = function () {
          var m = ["Webkit", "O", "Moz", "ms"],
            p = {};

          function f(M) {
            return M.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (T, L) {
              return L.toUpperCase()
            })
          }

          function N(M) {
            var T = document.body.style;
            if (M in T) return M;
            for (var L = m.length, C = M.charAt(0).toUpperCase() + M.slice(1), g; L--;)
              if (g = m[L] + C, g in T) return g;
            return M
          }

          function S(M) {
            return M = f(M), p[M] || (p[M] = N(M))
          }

          function I(M, T, L) {
            T = S(T), M.style[T] = L
          }
          return function (M, T) {
            var L = arguments,
              C, g;
            if (L.length == 2)
              for (C in T) g = T[C], g !== void 0 && T.hasOwnProperty(C) && I(M, C, g);
            else I(M, L[1], L[2])
          }
        }();

      function d(m, p) {
        var f = typeof m == "string" ? m : h(m);
        return f.indexOf(" " + p + " ") >= 0
      }

      function b(m, p) {
        var f = h(m),
          N = f + p;
        d(f, p) || (m.className = N.substring(1))
      }

      function w(m, p) {
        var f = h(m),
          N;
        d(m, p) && (N = f.replace(" " + p + " ", " "), m.className = N.substring(1, N.length - 1))
      }

      function h(m) {
        return (" " + (m.className || "") + " ").replace(/\s+/gi, " ")
      }

      function y(m) {
        m && m.parentNode && m.parentNode.removeChild(m)
      }
      return n
    })
  })(jf);
  var Lr, ct = (Lr = ai) && typeof Lr == "object" && "default" in Lr ? Lr.default : Lr,
    Io = null;

  function Hf(e) {
    document.addEventListener("inertia:start", Zf.bind(null, e)), document.addEventListener("inertia:progress", Vf), document.addEventListener("inertia:finish", zf)
  }

  function Zf(e) {
    Io = setTimeout(function () {
      return ct.start()
    }, e)
  }

  function Vf(e) {
    ct.isStarted() && e.detail.progress.percentage && ct.set(Math.max(ct.status, e.detail.progress.percentage / 100 * .9))
  }

  function zf(e) {
    clearTimeout(Io), ct.isStarted() && (e.detail.visit.completed ? ct.done() : e.detail.visit.interrupted ? ct.set(0) : e.detail.visit.cancelled && (ct.done(), ct.remove()))
  }
  var Df = {
    init: function (e) {
      var t = e === void 0 ? {} : e,
        n = t.delay,
        a = t.color,
        i = a === void 0 ? "#29d" : a,
        s = t.includeCSS,
        o = s === void 0 || s,
        c = t.showSpinner,
        u = c !== void 0 && c;
      Hf(n === void 0 ? 250 : n), ct.configure({
        showSpinner: u
      }), o && function (d) {
        var b = document.createElement("style");
        b.type = "text/css", b.textContent = `
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ` + d + `;

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ` + d + ", 0 0 5px " + d + `;
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ` + d + `;
      border-left-color: ` + d + `;
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(b)
      }(i)
    }
  };
  (function (e, t) {
    (function (n, a) {
      a()
    })(tr, function () {
      function n(i) {
        var s = !0,
          o = !1,
          c = null,
          u = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
          };

        function d(T) {
          return !!(T && T !== document && T.nodeName !== "HTML" && T.nodeName !== "BODY" && "classList" in T && "contains" in T.classList)
        }

        function b(T) {
          var L = T.type,
            C = T.tagName;
          return !!(C === "INPUT" && u[L] && !T.readOnly || C === "TEXTAREA" && !T.readOnly || T.isContentEditable)
        }

        function w(T) {
          T.classList.contains("focus-visible") || (T.classList.add("focus-visible"), T.setAttribute("data-focus-visible-added", ""))
        }

        function h(T) {
          T.hasAttribute("data-focus-visible-added") && (T.classList.remove("focus-visible"), T.removeAttribute("data-focus-visible-added"))
        }

        function y(T) {
          T.metaKey || T.altKey || T.ctrlKey || (d(i.activeElement) && w(i.activeElement), s = !0)
        }

        function m(T) {
          s = !1
        }

        function p(T) {
          d(T.target) && (s || b(T.target)) && w(T.target)
        }

        function f(T) {
          d(T.target) && (T.target.classList.contains("focus-visible") || T.target.hasAttribute("data-focus-visible-added")) && (o = !0, window.clearTimeout(c), c = window.setTimeout(function () {
            o = !1
          }, 100), h(T.target))
        }

        function N(T) {
          document.visibilityState === "hidden" && (o && (s = !0), S())
        }

        function S() {
          document.addEventListener("mousemove", M), document.addEventListener("mousedown", M), document.addEventListener("mouseup", M), document.addEventListener("pointermove", M), document.addEventListener("pointerdown", M), document.addEventListener("pointerup", M), document.addEventListener("touchmove", M), document.addEventListener("touchstart", M), document.addEventListener("touchend", M)
        }

        function I() {
          document.removeEventListener("mousemove", M), document.removeEventListener("mousedown", M), document.removeEventListener("mouseup", M), document.removeEventListener("pointermove", M), document.removeEventListener("pointerdown", M), document.removeEventListener("pointerup", M), document.removeEventListener("touchmove", M), document.removeEventListener("touchstart", M), document.removeEventListener("touchend", M)
        }

        function M(T) {
          T.target.nodeName && T.target.nodeName.toLowerCase() === "html" || (s = !1, I())
        }
        document.addEventListener("keydown", y, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("visibilitychange", N, !0), S(), i.addEventListener("focus", p, !0), i.addEventListener("blur", f, !0), i.nodeType === Node.DOCUMENT_FRAGMENT_NODE && i.host ? i.host.setAttribute("data-js-focus-visible", "") : i.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
      }
      if (typeof window < "u" && typeof document < "u") {
        window.applyFocusVisiblePolyfill = n;
        var a;
        try {
          a = new CustomEvent("focus-visible-polyfill-ready")
        } catch {
          a = document.createEvent("CustomEvent"), a.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
        }
        window.dispatchEvent(a)
      }
      typeof document < "u" && n(document)
    })
  })();
  var Bf = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {},
    q = function (e) {
      var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
        n = 0,
        a = {},
        i = {
          manual: e.Prism && e.Prism.manual,
          disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
          util: {
            encode: function m(p) {
              return p instanceof s ? new s(p.type, m(p.content), p.alias) : Array.isArray(p) ? p.map(m) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function (m) {
              return Object.prototype.toString.call(m).slice(8, -1)
            },
            objId: function (m) {
              return m.__id || Object.defineProperty(m, "__id", {
                value: ++n
              }), m.__id
            },
            clone: function m(p, f) {
              var N, S;
              switch (f = f || {}, i.util.type(p)) {
                case "Object":
                  if (S = i.util.objId(p), f[S]) return f[S];
                  for (var I in N = {}, f[S] = N, p) p.hasOwnProperty(I) && (N[I] = m(p[I], f));
                  return N;
                case "Array":
                  return S = i.util.objId(p), f[S] ? f[S] : (N = [], f[S] = N, p.forEach(function (M, T) {
                    N[T] = m(M, f)
                  }), N);
                default:
                  return p
              }
            },
            getLanguage: function (m) {
              for (; m;) {
                var p = t.exec(m.className);
                if (p) return p[1].toLowerCase();
                m = m.parentElement
              }
              return "none"
            },
            setLanguage: function (m, p) {
              m.className = m.className.replace(RegExp(t, "gi"), ""), m.classList.add("language-" + p)
            },
            currentScript: function () {
              if (typeof document > "u") return null;
              if ("currentScript" in document) return document.currentScript;
              try {
                throw new Error
              } catch (N) {
                var m = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(N.stack) || [])[1];
                if (m) {
                  var p = document.getElementsByTagName("script");
                  for (var f in p)
                    if (p[f].src == m) return p[f]
                }
                return null
              }
            },
            isActive: function (m, p, f) {
              for (var N = "no-" + p; m;) {
                var S = m.classList;
                if (S.contains(p)) return !0;
                if (S.contains(N)) return !1;
                m = m.parentElement
              }
              return !!f
            }
          },
          languages: {
            plain: a,
            plaintext: a,
            text: a,
            txt: a,
            extend: function (m, p) {
              var f = i.util.clone(i.languages[m]);
              for (var N in p) f[N] = p[N];
              return f
            },
            insertBefore: function (m, p, f, N) {
              var S = (N = N || i.languages)[m],
                I = {};
              for (var M in S)
                if (S.hasOwnProperty(M)) {
                  if (M == p)
                    for (var T in f) f.hasOwnProperty(T) && (I[T] = f[T]);
                  f.hasOwnProperty(M) || (I[M] = S[M])
                } var L = N[m];
              return N[m] = I, i.languages.DFS(i.languages, function (C, g) {
                g === L && C != m && (this[C] = I)
              }), I
            },
            DFS: function m(p, f, N, S) {
              S = S || {};
              var I = i.util.objId;
              for (var M in p)
                if (p.hasOwnProperty(M)) {
                  f.call(p, M, p[M], N || M);
                  var T = p[M],
                    L = i.util.type(T);
                  L !== "Object" || S[I(T)] ? L !== "Array" || S[I(T)] || (S[I(T)] = !0, m(T, f, M, S)) : (S[I(T)] = !0, m(T, f, null, S))
                }
            }
          },
          plugins: {},
          highlightAll: function (m, p) {
            i.highlightAllUnder(document, m, p)
          },
          highlightAllUnder: function (m, p, f) {
            var N = {
              callback: f,
              container: m,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            i.hooks.run("before-highlightall", N), N.elements = Array.prototype.slice.apply(N.container.querySelectorAll(N.selector)), i.hooks.run("before-all-elements-highlight", N);
            for (var S, I = 0; S = N.elements[I++];) i.highlightElement(S, p === !0, N.callback)
          },
          highlightElement: function (m, p, f) {
            var N = i.util.getLanguage(m),
              S = i.languages[N];
            i.util.setLanguage(m, N);
            var I = m.parentElement;
            I && I.nodeName.toLowerCase() === "pre" && i.util.setLanguage(I, N);
            var M = {
              element: m,
              language: N,
              grammar: S,
              code: m.textContent
            };

            function T(C) {
              M.highlightedCode = C, i.hooks.run("before-insert", M), M.element.innerHTML = M.highlightedCode, i.hooks.run("after-highlight", M), i.hooks.run("complete", M), f && f.call(M.element)
            }
            if (i.hooks.run("before-sanity-check", M), (I = M.element.parentElement) && I.nodeName.toLowerCase() === "pre" && !I.hasAttribute("tabindex") && I.setAttribute("tabindex", "0"), !M.code) return i.hooks.run("complete", M), void (f && f.call(M.element));
            if (i.hooks.run("before-highlight", M), M.grammar)
              if (p && e.Worker) {
                var L = new Worker(i.filename);
                L.onmessage = function (C) {
                  T(C.data)
                }, L.postMessage(JSON.stringify({
                  language: M.language,
                  code: M.code,
                  immediateClose: !0
                }))
              } else T(i.highlight(M.code, M.grammar, M.language));
            else T(i.util.encode(M.code))
          },
          highlight: function (m, p, f) {
            var N = {
              code: m,
              grammar: p,
              language: f
            };
            if (i.hooks.run("before-tokenize", N), !N.grammar) throw new Error('The language "' + N.language + '" has no grammar.');
            return N.tokens = i.tokenize(N.code, N.grammar), i.hooks.run("after-tokenize", N), s.stringify(i.util.encode(N.tokens), N.language)
          },
          tokenize: function (m, p) {
            var f = p.rest;
            if (f) {
              for (var N in f) p[N] = f[N];
              delete p.rest
            }
            var S = new u;
            return d(S, S.head, m), c(m, S, p, S.head, 0),
              function (I) {
                for (var M = [], T = I.head.next; T !== I.tail;) M.push(T.value), T = T.next;
                return M
              }(S)
          },
          hooks: {
            all: {},
            add: function (m, p) {
              var f = i.hooks.all;
              f[m] = f[m] || [], f[m].push(p)
            },
            run: function (m, p) {
              var f = i.hooks.all[m];
              if (f && f.length)
                for (var N, S = 0; N = f[S++];) N(p)
            }
          },
          Token: s
        };

      function s(m, p, f, N) {
        this.type = m, this.content = p, this.alias = f, this.length = 0 | (N || "").length
      }

      function o(m, p, f, N) {
        m.lastIndex = p;
        var S = m.exec(f);
        if (S && N && S[1]) {
          var I = S[1].length;
          S.index += I, S[0] = S[0].slice(I)
        }
        return S
      }

      function c(m, p, f, N, S, I) {
        for (var M in f)
          if (f.hasOwnProperty(M) && f[M]) {
            var T = f[M];
            T = Array.isArray(T) ? T : [T];
            for (var L = 0; L < T.length; ++L) {
              if (I && I.cause == M + "," + L) return;
              var C = T[L],
                g = C.inside,
                k = !!C.lookbehind,
                A = !!C.greedy,
                _ = C.alias;
              if (A && !C.pattern.global) {
                var O = C.pattern.toString().match(/[imsuy]*$/)[0];
                C.pattern = RegExp(C.pattern.source, O + "g")
              }
              for (var R = C.pattern || C, $ = N.next, P = S; $ !== p.tail && !(I && P >= I.reach); P += $.value.length, $ = $.next) {
                var Z = $.value;
                if (p.length > m.length) return;
                if (!(Z instanceof s)) {
                  var z, J = 1;
                  if (A) {
                    if (!(z = o(R, P, m, k)) || z.index >= m.length) break;
                    var W = z.index,
                      Ce = z.index + z[0].length,
                      oe = P;
                    for (oe += $.value.length; W >= oe;) oe += ($ = $.next).value.length;
                    if (P = oe -= $.value.length, $.value instanceof s) continue;
                    for (var Te = $; Te !== p.tail && (oe < Ce || typeof Te.value == "string"); Te = Te.next) J++, oe += Te.value.length;
                    J--, Z = m.slice(P, oe), z.index -= P
                  } else if (!(z = o(R, 0, Z, k))) continue;
                  W = z.index;
                  var Y = z[0],
                    ee = Z.slice(0, W),
                    G = Z.slice(W + Y.length),
                    te = P + Z.length;
                  I && te > I.reach && (I.reach = te);
                  var re = $.prev;
                  if (ee && (re = d(p, re, ee), P += ee.length), b(p, re, J), $ = d(p, re, new s(M, g ? i.tokenize(Y, g) : Y, _, Y)), G && d(p, $, G), J > 1) {
                    var ne = {
                      cause: M + "," + L,
                      reach: te
                    };
                    c(m, p, f, $.prev, P, ne), I && ne.reach > I.reach && (I.reach = ne.reach)
                  }
                }
              }
            }
          }
      }

      function u() {
        var m = {
          value: null,
          prev: null,
          next: null
        },
          p = {
            value: null,
            prev: m,
            next: null
          };
        m.next = p, this.head = m, this.tail = p, this.length = 0
      }

      function d(m, p, f) {
        var N = p.next,
          S = {
            value: f,
            prev: p,
            next: N
          };
        return p.next = S, N.prev = S, m.length++, S
      }

      function b(m, p, f) {
        for (var N = p.next, S = 0; S < f && N !== m.tail; S++) N = N.next;
        p.next = N, N.prev = p, m.length -= S
      }
      if (e.Prism = i, s.stringify = function m(p, f) {
        if (typeof p == "string") return p;
        if (Array.isArray(p)) {
          var N = "";
          return p.forEach(function (L) {
            N += m(L, f)
          }), N
        }
        var S = {
          type: p.type,
          content: m(p.content, f),
          tag: "span",
          classes: ["token", p.type],
          attributes: {},
          language: f
        },
          I = p.alias;
        I && (Array.isArray(I) ? Array.prototype.push.apply(S.classes, I) : S.classes.push(I)), i.hooks.run("wrap", S);
        var M = "";
        for (var T in S.attributes) M += " " + T + '="' + (S.attributes[T] || "").replace(/"/g, "&quot;") + '"';
        return "<" + S.tag + ' class="' + S.classes.join(" ") + '"' + M + ">" + S.content + "</" + S.tag + ">"
      }, !e.document) return e.addEventListener && (i.disableWorkerMessageHandler || e.addEventListener("message", function (m) {
        var p = JSON.parse(m.data),
          f = p.language,
          N = p.code,
          S = p.immediateClose;
        e.postMessage(i.highlight(N, i.languages[f], f)), S && e.close()
      }, !1)), i;
      var w = i.util.currentScript();

      function h() {
        i.manual || i.highlightAll()
      }
      if (w && (i.filename = w.src, w.hasAttribute("data-manual") && (i.manual = !0)), !i.manual) {
        var y = document.readyState;
        y === "loading" || y === "interactive" && w && w.defer ? document.addEventListener("DOMContentLoaded", h) : window.requestAnimationFrame ? window.requestAnimationFrame(h) : window.setTimeout(h, 16)
      }
      return i
    }(Bf);
  typeof yn < "u" && yn.exports && (yn.exports = q), typeof global < "u" && (global.Prism = q);
  q.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  }, q.languages.markup.tag.inside["attr-value"].inside.entity = q.languages.markup.entity, q.languages.markup.doctype.inside["internal-subset"].inside = q.languages.markup, q.hooks.add("wrap", function (e) {
    e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"))
  }), Object.defineProperty(q.languages.markup.tag, "addInlined", {
    value: function (e, t) {
      var n = {};
      n["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: q.languages[t]
      }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: n
        }
      };
      a["language-" + t] = {
        pattern: /[\s\S]+/,
        inside: q.languages[t]
      };
      var i = {};
      i[e] = {
        pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
          return e
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, q.languages.insertBefore("markup", "cdata", i)
    }
  }), Object.defineProperty(q.languages.markup.tag, "addAttribute", {
    value: function (e, t) {
      q.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(`(^|["'\\s])(?:` + e + `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`, "i"),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [t, "language-" + t],
                inside: q.languages[t]
              },
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          }
        }
      })
    }
  }), q.languages.html = q.languages.markup, q.languages.mathml = q.languages.markup, q.languages.svg = q.languages.markup, q.languages.xml = q.languages.extend("markup", {}), q.languages.ssml = q.languages.xml, q.languages.atom = q.languages.xml, q.languages.rss = q.languages.xml;
  (function (e) {
    var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|` + t.source + ")*?(?:;|(?=\\s*\\{))"),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + t.source + `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`, "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + t.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: t,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, e.languages.css.atrule.inside.rest = e.languages.css;
    var n = e.languages.markup;
    n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
  })(q);
  q.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
  q.languages.javascript = q.languages.extend("clike", {
    "class-name": [q.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), q.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, q.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: q.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: q.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: q.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: q.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: q.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), q.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: q.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), q.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), q.languages.markup && (q.languages.markup.tag.addInlined("script", "javascript"), q.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), q.languages.js = q.languages.javascript;
  (function (e) {
    var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
      n = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: "punctuation",
        inside: null
      },
      a = {
        bash: n,
        environment: {
          pattern: RegExp("\\$" + t),
          alias: "constant"
        },
        variable: [{
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [{
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            }, /^\$\(\(/],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        }, {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        }, {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + t),
              lookbehind: !0,
              alias: "constant"
            }
          }
        }, /\$(?:\w+|[#?*!@$])/],
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
    e.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: "important"
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: !0
      },
      "function-name": [{
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      }, {
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: !0
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
            lookbehind: !0,
            alias: "constant"
          }
        },
        alias: "variable",
        lookbehind: !0
      },
      parameter: {
        pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
        alias: "variable",
        lookbehind: !0
      },
      string: [{
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: n
        }
      }, {
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, {
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      }, {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: a.entity
        }
      }],
      environment: {
        pattern: RegExp("\\$?" + t),
        alias: "constant"
      },
      variable: a.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: "class-name"
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      "file-descriptor": {
        pattern: /\B&\d\b/,
        alias: "important"
      },
      operator: {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          "file-descriptor": {
            pattern: /^\d/,
            alias: "important"
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: !0
      }
    }, n.inside = e.languages.bash;
    for (var i = ["comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], s = a.variable[1].inside, o = 0; o < i.length; o++) s[i[o]] = e.languages.bash[i[o]];
    e.languages.sh = e.languages.bash, e.languages.shell = e.languages.bash
  })(q);
  (function (e) {
    e.languages.diff = {
      coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
    };
    var t = {
      "deleted-sign": "-",
      "deleted-arrow": "<",
      "inserted-sign": "+",
      "inserted-arrow": ">",
      unchanged: " ",
      diff: "!"
    };
    Object.keys(t).forEach(function (n) {
      var a = t[n],
        i = [];
      /^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]), n === "diff" && i.push("bold"), e.languages.diff[n] = {
        pattern: RegExp("^(?:[" + a + `].*(?:\r
?|
|(?![\\s\\S])))+`, "m"),
        alias: i,
        inside: {
          line: {
            pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
            lookbehind: !0
          },
          prefix: {
            pattern: /[\s\S]/,
            alias: /\w+/.exec(n)[0]
          }
        }
      }
    }), Object.defineProperty(e.languages.diff, "PREFIXES", {
      value: t
    })
  })(q);
  (function (e) {
    var t = e.util.clone(e.languages.javascript),
      n = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";

    function a(o, c) {
      return o = o.replace(/<S>/g, function () {
        return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"
      }).replace(/<BRACES>/g, function () {
        return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"
      }).replace(/<SPREAD>/g, function () {
        return n
      }), RegExp(o, c)
    }
    n = a(n).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = a(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: a("<SPREAD>"),
        inside: e.languages.jsx
      }
    }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: a("=<BRACES>"),
        alias: "language-javascript",
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: e.languages.jsx
        }
      }
    }, e.languages.jsx.tag);
    var i = function (o) {
      return o ? typeof o == "string" ? o : typeof o.content == "string" ? o.content : o.content.map(i).join("") : ""
    },
      s = function (o) {
        for (var c = [], u = 0; u < o.length; u++) {
          var d = o[u],
            b = !1;
          if (typeof d != "string" && (d.type === "tag" && d.content[0] && d.content[0].type === "tag" ? d.content[0].content[0].content === "</" ? c.length > 0 && c[c.length - 1].tagName === i(d.content[0].content[1]) && c.pop() : d.content[d.content.length - 1].content === "/>" || c.push({
            tagName: i(d.content[0].content[1]),
            openedBraces: 0
          }) : c.length > 0 && d.type === "punctuation" && d.content === "{" ? c[c.length - 1].openedBraces++ : c.length > 0 && c[c.length - 1].openedBraces > 0 && d.type === "punctuation" && d.content === "}" ? c[c.length - 1].openedBraces-- : b = !0), (b || typeof d == "string") && c.length > 0 && c[c.length - 1].openedBraces === 0) {
            var w = i(d);
            u < o.length - 1 && (typeof o[u + 1] == "string" || o[u + 1].type === "plain-text") && (w += i(o[u + 1]), o.splice(u + 1, 1)), u > 0 && (typeof o[u - 1] == "string" || o[u - 1].type === "plain-text") && (w = i(o[u - 1]) + w, o.splice(u - 1, 1), u--), o[u] = new e.Token("plain-text", w, null, w)
          }
          d.content && typeof d.content != "string" && s(d.content)
        }
      };
    e.hooks.add("after-tokenize", function (o) {
      o.language !== "jsx" && o.language !== "tsx" || s(o.tokens)
    })
  })(q);
  window.Prism = window.Prism || {};
  Prism.manual = !0;
  Df.init({
    color: "#06B6D4"
  });
  document.addEventListener("click", e => {
    const t = e.target.closest("a[inertia]");
    t && t.origin === window.location.origin && !t.hasAttribute("download") && ["", "_self"].includes(t.target) && !(t.hash && t.pathname === window.location.pathname) && !t.isContentEditable && !e.defaultPrevented && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (e.preventDefault(), ur.Inertia.visit(t.href))
  });
  ur.Inertia.on("navigate", e => {
    window.fathom && window.fathom.trackPageview()
  });
  As({
    title: e => e.includes("Tailwind") ? e : `${e} - Tailwind UI`,
    resolve: e => Object.assign({
      "./pages/AccountSettings.jsx": eh,
      "./pages/AllAccess.jsx": nh,
      "./pages/AlreadyOnPackage.jsx": ih,
      "./pages/Changelog.jsx": lh,
      "./pages/Checkout.jsx": bh,
      "./pages/ChooseUpgrade.jsx": xh,
      "./pages/ComponentCategory.jsx": Eh,
      "./pages/Components.jsx": Dh,
      "./pages/Documentation.jsx": Bh,
      "./pages/ForgotPassword.jsx": Yh,
      "./pages/Home.jsx": Kh,
      "./pages/JoinTeam.jsx": rf,
      "./pages/License.jsx": nf,
      "./pages/Login.jsx": lf,
      "./pages/NewsletterThankYou.jsx": of,
      "./pages/Preview.jsx": df,
      "./pages/PrivacyPolicy.jsx": uf,
      "./pages/RedeemLicense.jsx": vf,
      "./pages/ResetPassword.jsx": yf,
      "./pages/Support.jsx": xf,
      "./pages/TeamSettings.jsx": Mf,
      "./pages/Template.jsx": Tf,
      "./pages/Templates.jsx": If,
      "./pages/ThankYou.jsx": $f
    })[`./pages/${e}.jsx`],
    setup({
      el: e,
      App: t,
      props: n
    }) {
      Kl.hydrate(r(t, {
        ...n
      }), e)
    }
  })
});
export default Uf();