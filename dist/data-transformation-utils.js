!function(t, r) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = r(); else if ("function" == typeof define && define.amd) define([], r); else {
        var e = r();
        for (var n in e) ("object" == typeof exports ? exports : t)[n] = e[n];
    }
}(this, (function() {
    return (() => {
        "use strict";
        var t = {
            46: (t, r, e) => {
                var n = e(721), o = e(334);
                t.exports = {
                    Transformer: n,
                    TwoWayTransformer: o
                };
            },
            329: t => {
                t.exports.isFunction = function(t) {
                    return "function" == typeof t;
                };
            },
            286: (t, r, e) => {
                function n(t, r) {
                    var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!e) {
                        if (Array.isArray(t) || (e = function(t, r) {
                            if (!t) return;
                            if ("string" == typeof t) return o(t, r);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === e && t.constructor && (e = t.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(t);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return o(t, r);
                        }(t)) || r && t && "number" == typeof t.length) {
                            e && (t = e);
                            var n = 0, i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return n >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[n++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: i
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var a, f = !0, u = !1;
                    return {
                        s: function() {
                            e = e.call(t);
                        },
                        n: function() {
                            var t = e.next();
                            return f = t.done, t;
                        },
                        e: function(t) {
                            u = !0, a = t;
                        },
                        f: function() {
                            try {
                                f || null == e.return || e.return();
                            } finally {
                                if (u) throw a;
                            }
                        }
                    };
                }
                function o(t, r) {
                    (null == r || r > t.length) && (r = t.length);
                    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                    return n;
                }
                function i(t, r) {
                    for (var e = 0; e < r.length; e++) {
                        var n = r[e];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(t, n.key, n);
                    }
                }
                function a(t, r, e) {
                    return r && i(t.prototype, r), e && i(t, e), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                }
                var f = e(329).isFunction;
                t.exports = a((function t(r) {
                    !function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.transformationArray = [];
                    var e, o = n(r);
                    try {
                        for (o.s(); !(e = o.n()).done; ) {
                            var i = e.value;
                            if (!f(i)) throw new TypeError("One of passed transformations is not typeof 'function'");
                            this.transformationArray.push(i);
                        }
                    } catch (t) {
                        o.e(t);
                    } finally {
                        o.f();
                    }
                }));
            },
            721: (t, r, e) => {
                function n(t) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t;
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    }, n(t);
                }
                function o(t, r) {
                    for (var e = 0; e < r.length; e++) {
                        var n = r[e];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(t, n.key, n);
                    }
                }
                var i = e(286);
                t.exports = function() {
                    function t(r) {
                        !function(t, r) {
                            if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
                        }(this, t), this.chain = new i(r);
                    }
                    var r, e, a;
                    return r = t, e = [ {
                        key: "applyTransformations",
                        value: function(t) {
                            for (var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], e = t, n = 0; n < this.chain.transformationArray.length; ++n) {
                                var o = this.chain.transformationArray[n];
                                e = o(e), r && this.compareValuesTypeof(t, e, n), e = void 0 === e ? t : e;
                            }
                            return e;
                        }
                    }, {
                        key: "compareValuesTypeof",
                        value: function(t, r, e) {
                            if (n(r) !== n(t)) throw TypeError("One of functions return changed type of value;\n\n            Transformation index is ".concat(e));
                        }
                    } ], e && o(r.prototype, e), a && o(r, a), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), t;
                }();
            },
            334: (t, r, e) => {
                function n(t) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t;
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    }, n(t);
                }
                var o, i;
                function a(t, r) {
                    for (var e = 0; e < r.length; e++) {
                        var n = r[e];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(t, n.key, n);
                    }
                }
                function f(t, r) {
                    return f = Object.setPrototypeOf || function(t, r) {
                        return t.__proto__ = r, t;
                    }, f(t, r);
                }
                function u(t) {
                    var r = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                            !0;
                        } catch (t) {
                            return !1;
                        }
                    }();
                    return function() {
                        var e, n = s(t);
                        if (r) {
                            var o = s(this).constructor;
                            e = Reflect.construct(n, arguments, o);
                        } else e = n.apply(this, arguments);
                        return c(this, e);
                    };
                }
                function c(t, r) {
                    if (r && ("object" === n(r) || "function" == typeof r)) return r;
                    if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t;
                    }(t);
                }
                function s(t) {
                    return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    }, s(t);
                }
                var l, y, p, b = e(721), h = e(286);
                t.exports = (i = o = function(t) {
                    !function(t, r) {
                        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(r && r.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), r && f(t, r);
                    }(i, t);
                    var r, e, n, o = u(i);
                    function i(t) {
                        var r;
                        return function(t, r) {
                            if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
                        }(this, i), (r = o.call(this, [])).transformationMods = {}, r.transformationMods[i.MODS.DIRECT] = r.createChain(t[i.MODS.DIRECT]), 
                        r.transformationMods[i.MODS.INVERSE] = r.createChain(t[i.MODS.INVERSE]), r;
                    }
                    return r = i, (e = [ {
                        key: "createChain",
                        value: function(t) {
                            return new h(t);
                        }
                    }, {
                        key: "directTranform",
                        value: function(t, r) {
                            return this.chain = this.transformationMods[i.MODS.DIRECT], this.applyTransformations(t, r);
                        }
                    }, {
                        key: "inverseTransform",
                        value: function(t, r) {
                            return this.chain = this.transformationMods[i.MODS.INVERSE], this.applyTransformations(t, r);
                        }
                    } ]) && a(r.prototype, e), n && a(r, n), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), i;
                }(b), p = {
                    DIRECT: "DIRECT_MODE",
                    INVERSE: "INVERSE_MODE"
                }, (y = "MODS") in (l = o) ? Object.defineProperty(l, y, {
                    value: p,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : l[y] = p, i);
            }
        }, r = {};
        var e = function e(n) {
            var o = r[n];
            if (void 0 !== o) return o.exports;
            var i = r[n] = {
                exports: {}
            };
            return t[n](i, i.exports, e), i.exports;
        }(46);
        return e;
    })();
}));