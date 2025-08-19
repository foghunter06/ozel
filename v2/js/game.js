(() => {
    var a = {
      "./src/temp.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        var d = c("./node_modules/howler/dist/howler.js");
        var e = c.n(d);
        var f = c("./node_modules/socket.io-client/build/esm/index.js");
        a = c.hmd(a);
        function g(a) {
          return j(a) || i(a) || l(a) || h();
        }
        function h() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function i(a) {
          if (typeof Symbol !== "undefined" && a[Symbol.iterator] != null || a["@@iterator"] != null) {
            return Array.from(a);
          }
        }
        function j(a) {
          if (Array.isArray(a)) {
            return m(a);
          }
        }
        function k(a, b) {
          var c = typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
          if (!c) {
            if (Array.isArray(a) || (c = l(a)) || b && a && typeof a.length === "number") {
              if (c) {
                a = c;
              }
              var d = 0;
              var e = function a() {};
              return {
                s: e,
                n: function b() {
                  if (d >= a.length) {
                    return {
                      done: true
                    };
                  }
                  return {
                    done: false,
                    value: a[d++]
                  };
                },
                e: function b(a) {
                  throw a;
                },
                f: e
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var f = true;
          var g = false;
          var h;
          return {
            s: function b() {
              c = c.call(a);
            },
            n: function a() {
              var b = c.next();
              f = b.done;
              return b;
            },
            e: function b(a) {
              g = true;
              h = a;
            },
            f: function a() {
              try {
                if (!f && c.return != null) {
                  c.return();
                }
              } finally {
                if (g) {
                  throw h;
                }
              }
            }
          };
        }
        function l(a, b) {
          if (!a) {
            return;
          }
          if (typeof a === "string") {
            return m(a, b);
          }
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (c === "Object" && a.constructor) {
            c = a.constructor.name;
          }
          if (c === "Map" || c === "Set") {
            return Array.from(a);
          }
          if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
            return m(a, b);
          }
        }
        function m(a, b) {
          if (b == null || b > a.length) {
            b = a.length;
          }
          for (var c = 0, d = new Array(b); c < b; c++) {
            d[c] = a[c];
          }
          return d;
        }
        function n(a, b) {
          var c = Object.keys(a);
          if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(a);
            if (b) {
              d = d.filter(function (b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
              });
            }
            c.push.apply(c, d);
          }
          return c;
        }
        function o(a) {
          for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b] ?? {};
            if (b % 2) {
              n(Object(c), true).forEach(function (b) {
                q(a, b, c[b]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(a, Object.getOwnPropertyDescriptors(c));
            } else {
              n(Object(c)).forEach(function (b) {
                Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
              });
            }
          }
          return a;
        }
        function q(a, b, c) {
          b = r(b);
          if (b in a) {
            Object.defineProperty(a, b, {
              value: c,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            a[b] = c;
          }
          return a;
        }
        function r(a) {
          var b = s(a, "string");
          if (w(b) === "symbol") {
            return b;
          } else {
            return String(b);
          }
        }
        function s(a, b) {
          if (w(a) !== "object" || a === null) {
            return a;
          }
          var c = a[Symbol.toPrimitive];
          if (c !== undefined) {
            var d = c.call(a, b || "default");
            if (w(d) !== "object") {
              return d;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (b === "string" ? String : Number)(a);
        }
        function t() {
          'use strict';
  
          t = function a() {
            return b;
          };
          var a;
          var b = {};
          var c = Object.prototype;
          var d = c.hasOwnProperty;
          var e = Object.defineProperty || function (a, b, c) {
            a[b] = c.value;
          };
          var f = typeof Symbol == "function" ? Symbol : {};
          var g = f.iterator || "@@iterator";
          var h = f.asyncIterator || "@@asyncIterator";
          var i = f.toStringTag || "@@toStringTag";
          function j(a, b, c) {
            Object.defineProperty(a, b, {
              value: c,
              enumerable: true,
              configurable: true,
              writable: true
            });
            return a[b];
          }
          try {
            j({}, "");
          } catch (a) {
            j = function d(a, b, c) {
              return a[b] = c;
            };
          }
          function k(a, b, c, d) {
            var f = b && b.prototype instanceof s ? b : s;
            var g = Object.create(f.prototype);
            var h = new H(d || []);
            e(g, "_invoke", {
              value: D(a, c, h)
            });
            return g;
          }
          function l(a, b, c) {
            try {
              return {
                type: "normal",
                arg: a.call(b, c)
              };
            } catch (a) {
              return {
                type: "throw",
                arg: a
              };
            }
          }
          b.wrap = k;
          var m = "suspendedStart";
          var n = "suspendedYield";
          var o = "executing";
          var q = "completed";
          var r = {};
          function s() {}
          function u() {}
          function v() {}
          var x = {};
          j(x, g, function () {
            return this;
          });
          var y = Object.getPrototypeOf;
          var z = y && y(y(I([])));
          if (z && z !== c && d.call(z, g)) {
            x = z;
          }
          var A = v.prototype = s.prototype = Object.create(x);
          function B(a) {
            ["next", "throw", "return"].forEach(function (b) {
              j(a, b, function (a) {
                return this._invoke(b, a);
              });
            });
          }
          function C(a, b) {
            function c(e, f, g, h) {
              var i = l(a[e], a, f);
              if (i.type !== "throw") {
                var j = i.arg;
                var k = j.value;
                if (k && w(k) == "object" && d.call(k, "__await")) {
                  return b.resolve(k.__await).then(function (a) {
                    c("next", a, g, h);
                  }, function (a) {
                    c("throw", a, g, h);
                  });
                } else {
                  return b.resolve(k).then(function (a) {
                    j.value = a;
                    g(j);
                  }, function (a) {
                    return c("throw", a, g, h);
                  });
                }
              }
              h(i.arg);
            }
            var f;
            e(this, "_invoke", {
              value: function e(a, d) {
                function g() {
                  return new b(function (b, e) {
                    c(a, d, b, e);
                  });
                }
                return f = f ? f.then(g, g) : g();
              }
            });
          }
          function D(b, c, d) {
            var e = m;
            return function (f, g) {
              if (e === o) {
                throw new Error("Generator is already running");
              }
              if (e === q) {
                if (f === "throw") {
                  throw g;
                }
                return {
                  value: a,
                  done: true
                };
              }
              d.method = f;
              d.arg = g;
              while (true) {
                var h = d.delegate;
                if (h) {
                  var i = E(h, d);
                  if (i) {
                    if (i === r) {
                      continue;
                    }
                    return i;
                  }
                }
                if (d.method === "next") {
                  d.sent = d._sent = d.arg;
                } else if (d.method === "throw") {
                  if (e === m) {
                    e = q;
                    throw d.arg;
                  }
                  d.dispatchException(d.arg);
                } else if (d.method === "return") {
                  d.abrupt("return", d.arg);
                }
                e = o;
                var j = l(b, c, d);
                if (j.type === "normal") {
                  e = d.done ? q : n;
                  if (j.arg === r) {
                    continue;
                  }
                  return {
                    value: j.arg,
                    done: d.done
                  };
                }
                if (j.type === "throw") {
                  e = q;
                  d.method = "throw";
                  d.arg = j.arg;
                }
              }
            };
          }
          function E(b, c) {
            var d = c.method;
            var e = b.iterator[d];
            if (e === a) {
              c.delegate = null;
              if (d !== "throw" || !b.iterator.return || !(c.method = "return", c.arg = a, E(b, c), c.method === "throw")) {
                if (d !== "return") {
                  c.method = "throw";
                  c.arg = new TypeError("The iterator does not provide a '" + d + "' method");
                }
              }
              return r;
            }
            var f = l(e, b.iterator, c.arg);
            if (f.type === "throw") {
              c.method = "throw";
              c.arg = f.arg;
              c.delegate = null;
              return r;
            }
            var g = f.arg;
            if (g) {
              if (g.done) {
                c[b.resultName] = g.value;
                c.next = b.nextLoc;
                if (c.method !== "return") {
                  c.method = "next";
                  c.arg = a;
                }
                c.delegate = null;
                return r;
              } else {
                return g;
              }
            } else {
              c.method = "throw";
              c.arg = new TypeError("iterator result is not an object");
              c.delegate = null;
              return r;
            }
          }
          function F(a) {
            var b = {
              tryLoc: a[0]
            };
            if (1 in a) {
              b.catchLoc = a[1];
            }
            if (2 in a) {
              b.finallyLoc = a[2];
              b.afterLoc = a[3];
            }
            this.tryEntries.push(b);
          }
          function G(a) {
            var b = a.completion || {};
            b.type = "normal";
            delete b.arg;
            a.completion = b;
          }
          function H(a) {
            this.tryEntries = [{
              tryLoc: "root"
            }];
            a.forEach(F, this);
            this.reset(true);
          }
          function I(b) {
            if (b || b === "") {
              var c = b[g];
              if (c) {
                return c.call(b);
              }
              if (typeof b.next == "function") {
                return b;
              }
              if (!isNaN(b.length)) {
                var e = -1;
                var f = function c() {
                  while (++e < b.length) {
                    if (d.call(b, e)) {
                      c.value = b[e];
                      c.done = false;
                      return c;
                    }
                  }
                  c.value = a;
                  c.done = true;
                  return c;
                };
                return f.next = f;
              }
            }
            throw new TypeError(w(b) + " is not iterable");
          }
          u.prototype = v;
          e(A, "constructor", {
            value: v,
            configurable: true
          });
          e(v, "constructor", {
            value: u,
            configurable: true
          });
          u.displayName = j(v, i, "GeneratorFunction");
          b.isGeneratorFunction = function (a) {
            var b = typeof a == "function" && a.constructor;
            return !!b && (b === u || (b.displayName || b.name) === "GeneratorFunction");
          };
          b.mark = function (a) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(a, v);
            } else {
              a.__proto__ = v;
              j(a, i, "GeneratorFunction");
            }
            a.prototype = Object.create(A);
            return a;
          };
          b.awrap = function (a) {
            return {
              __await: a
            };
          };
          B(C.prototype);
          j(C.prototype, h, function () {
            return this;
          });
          b.AsyncIterator = C;
          b.async = function (a, c, d, e, f = undefined) {
            if (f === undefined) f = Promise;
            var g = new C(k(a, c, d, e), f);
            if (b.isGeneratorFunction(c)) {
              return g;
            } else {
              return g.next().then(function (a) {
                if (a.done) {
                  return a.value;
                } else {
                  return g.next();
                }
              });
            }
          };
          B(A);
          j(A, i, "Generator");
          j(A, g, function () {
            return this;
          });
          j(A, "toString", function () {
            return "[object Generator]";
          });
          b.keys = function (a) {
            var b = Object(a);
            var c = [];
            for (var d in b) {
              c.push(d);
            }
            c.reverse();
            return function a() {
              while (c.length) {
                var d = c.pop();
                if (d in b) {
                  a.value = d;
                  a.done = false;
                  return a;
                }
              }
              a.done = true;
              return a;
            };
          };
          b.values = I;
          H.prototype = {
            constructor: H,
            reset: function c(b) {
              this.prev = 0;
              this.next = 0;
              this.sent = this._sent = a;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = a;
              this.tryEntries.forEach(G);
              if (!b) {
                for (var e in this) {
                  if (e.charAt(0) === "t" && d.call(this, e) && !isNaN(+e.slice(1))) {
                    this[e] = a;
                  }
                }
              }
            },
            stop: function a() {
              this.done = true;
              var b = this.tryEntries[0].completion;
              if (b.type === "throw") {
                throw b.arg;
              }
              return this.rval;
            },
            dispatchException: function c(b) {
              if (this.done) {
                throw b;
              }
              var e = this;
              function f(c, d) {
                i.type = "throw";
                i.arg = b;
                e.next = c;
                if (d) {
                  e.method = "next";
                  e.arg = a;
                }
                return !!d;
              }
              for (var g = this.tryEntries.length - 1; g >= 0; --g) {
                var h = this.tryEntries[g];
                var i = h.completion;
                if (h.tryLoc === "root") {
                  return f("end");
                }
                if (h.tryLoc <= this.prev) {
                  var j = d.call(h, "catchLoc");
                  var k = d.call(h, "finallyLoc");
                  if (j && k) {
                    if (this.prev < h.catchLoc) {
                      return f(h.catchLoc, true);
                    }
                    if (this.prev < h.finallyLoc) {
                      return f(h.finallyLoc);
                    }
                  } else if (j) {
                    if (this.prev < h.catchLoc) {
                      return f(h.catchLoc, true);
                    }
                  } else {
                    if (!k) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < h.finallyLoc) {
                      return f(h.finallyLoc);
                    }
                  }
                }
              }
            },
            abrupt: function c(a, b) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var f = this.tryEntries[e];
                if (f.tryLoc <= this.prev && d.call(f, "finallyLoc") && this.prev < f.finallyLoc) {
                  var g = f;
                  break;
                }
              }
              if (g && (a === "break" || a === "continue") && g.tryLoc <= b && b <= g.finallyLoc) {
                g = null;
              }
              var h = g ? g.completion : {};
              h.type = a;
              h.arg = b;
              if (g) {
                this.method = "next";
                this.next = g.finallyLoc;
                return r;
              } else {
                return this.complete(h);
              }
            },
            complete: function c(a, b) {
              if (a.type === "throw") {
                throw a.arg;
              }
              if (a.type === "break" || a.type === "continue") {
                this.next = a.arg;
              } else if (a.type === "return") {
                this.rval = this.arg = a.arg;
                this.method = "return";
                this.next = "end";
              } else if (a.type === "normal" && b) {
                this.next = b;
              }
              return r;
            },
            finish: function b(a) {
              for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.finallyLoc === a) {
                  this.complete(d.completion, d.afterLoc);
                  G(d);
                  return r;
                }
              }
            },
            catch: function b(a) {
              for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc === a) {
                  var e = d.completion;
                  if (e.type === "throw") {
                    var f = e.arg;
                    G(d);
                  }
                  return f;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function e(b, c, d) {
              this.delegate = {
                iterator: I(b),
                resultName: c,
                nextLoc: d
              };
              if (this.method === "next") {
                this.arg = a;
              }
              return r;
            }
          };
          return b;
        }
        function u(a, b, c, d, e, f, g) {
          try {
            var h = a[f](g);
            var i = h.value;
          } catch (a) {
            c(a);
            return;
          }
          if (h.done) {
            b(i);
          } else {
            Promise.resolve(i).then(d, e);
          }
        }
        function v(a) {
          return function () {
            var b = this;
            var c = arguments;
            return new Promise(function (d, e) {
              var f = a.apply(b, c);
              function g(a) {
                u(f, d, e, g, h, "next", a);
              }
              function h(a) {
                u(f, d, e, g, h, "throw", a);
              }
              g(undefined);
            });
          };
        }
        function w(a) {
          '@babel/helpers - typeof';
  
          w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
            return typeof a;
          } : function (a) {
            if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof a;
            }
          };
          return w(a);
        }
        var x = 0;
        window.URLSERV_WORMWORLD = x ? "http://localhost:3102" : "https://wormworld.io/extension";
	window.URLSERV_WORMDE = x ? "http://localhost:3102" : "https://zwormextenstion.com";
        window.URL_CDN = x ? "http://localhost:3000" : "https://asserts.wormworld.io";
        window.URL_CDN_B = x ? "localhost:3000" : "asserts.wormworld.io";
	window.URL_CDN_A = x ? "localhost:3000" : "asserts.wormworld.io";
        window.URL_CDN_C = x;
        window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
        var y = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
        var z = true;
        var A = true;
        var B = false;
        var C = 18;
        (function (b) {
          if ((typeof exports === "undefined" ? "undefined" : w(exports)) === "object" && "object" !== "undefined") {
            a.exports = b();
          } else if (typeof define === "function" && c.amdO) {
            define([], b);
          } else {
            var d;
            if (typeof window !== "undefined") {
              d = window;
            } else if (typeof c.g !== "undefined") {
              d = c.g;
            } else if (typeof self !== "undefined") {
              d = self;
            } else {
              d = this;
            }
            d.nipplejs = b();
          }
        })(function () {
          var a;
          var b;
          var c;
          "use strict";
          var d = !!("ontouchstart" in window);
          var e = window.PointerEvent ? true : false;
          var f = window.MSPointerEvent ? true : false;
          var g = {
            touch: {
              start: "touchstart",
              move: "touchmove",
              end: "touchend, touchcancel"
            },
            mouse: {
              start: "mousedown",
              move: "mousemove",
              end: "mouseup"
            },
            pointer: {
              start: "pointerdown",
              move: "pointermove",
              end: "pointerup, pointercancel"
            },
            MSPointer: {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp"
            }
          };
          var h;
          var i = {};
          if (e) {
            h = g.pointer;
          } else if (f) {
            h = g.MSPointer;
          } else if (d) {
            h = g.touch;
            i = g.mouse;
          } else {
            h = g.mouse;
          }
          var j = {};
          j.distance = function (a, b) {
            var c = b.x - a.x;
            var d = b.y - a.y;
            return Math.sqrt(c * c + d * d);
          };
          j.angle = function (a, b) {
            var c = b.x - a.x;
            var d = b.y - a.y;
            return j.degrees(Math.atan2(d, c));
          };
          j.findCoord = function (a, b, c) {
            var d = {
              x: 0,
              y: 0
            };
            c = j.radians(c);
            d.x = a.x - b * Math.cos(c);
            d.y = a.y - b * Math.sin(c);
            return d;
          };
          j.radians = function (a) {
            return a * (Math.PI / 180);
          };
          j.degrees = function (a) {
            return a * (180 / Math.PI);
          };
          j.bindEvt = function (a, b, c) {
            var d = b.split(/[ ,]+/g);
            var e;
            for (var f = 0; f < d.length; f += 1) {
              e = d[f];
              if (a.addEventListener) {
                a.addEventListener(e, c, false);
              } else if (a.attachEvent) {
                a.attachEvent(e, c);
              }
            }
          };
          j.unbindEvt = function (a, b, c) {
            var d = b.split(/[ ,]+/g);
            var e;
            for (var f = 0; f < d.length; f += 1) {
              e = d[f];
              if (a.removeEventListener) {
                a.removeEventListener(e, c);
              } else if (a.detachEvent) {
                a.detachEvent(e, c);
              }
            }
          };
          j.trigger = function (a, b, c) {
            var d = new CustomEvent(b, c);
            a.dispatchEvent(d);
          };
          j.prepareEvent = function (a) {
            a.preventDefault();
            if (a.type.match(/^touch/)) {
              return a.changedTouches;
            } else {
              return a;
            }
          };
          j.getScroll = function () {
            var a = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
            var b = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            return {
              x: a,
              y: b
            };
          };
          j.applyPosition = function (a, b) {
            if (b.top || b.right || b.bottom || b.left) {
              a.style.top = b.top;
              a.style.right = b.right;
              a.style.bottom = b.bottom;
              a.style.left = b.left;
            } else {
              a.style.left = b.x + "px";
              a.style.top = b.y + "px";
            }
          };
          j.getTransitionStyle = function (a, b, c) {
            var d = j.configStylePropertyObject(a);
            for (var e in d) {
              if (d.hasOwnProperty(e)) {
                if (typeof b === "string") {
                  d[e] = b + " " + c;
                } else {
                  var f = "";
                  for (var g = 0, h = b.length; g < h; g += 1) {
                    f += b[g] + " " + c + ", ";
                  }
                  d[e] = f.slice(0, -2);
                }
              }
            }
            return d;
          };
          j.getVendorStyle = function (a, b) {
            var c = j.configStylePropertyObject(a);
            for (var d in c) {
              if (c.hasOwnProperty(d)) {
                c[d] = b;
              }
            }
            return c;
          };
          j.configStylePropertyObject = function (a) {
            var b = {
              [a]: ""
            };
            var c = ["webkit", "Moz", "o"];
            c.forEach(function (c) {
              b[c + a.charAt(0).toUpperCase() + a.slice(1)] = "";
            });
            return b;
          };
          j.extend = function (a, b) {
            for (var c in b) {
              if (b.hasOwnProperty(c)) {
                a[c] = b[c];
              }
            }
            return a;
          };
          j.safeExtend = function (a, b) {
            var c = {};
            for (var d in a) {
              if (a.hasOwnProperty(d) && b.hasOwnProperty(d)) {
                c[d] = b[d];
              } else if (a.hasOwnProperty(d)) {
                c[d] = a[d];
              }
            }
            return c;
          };
          j.map = function (a, b) {
            if (a.length) {
              for (var c = 0, d = a.length; c < d; c += 1) {
                b(a[c]);
              }
            } else {
              b(a);
            }
          };
          function k() {}
          ;
          k.prototype.on = function (a, b) {
            var c = this;
            var d = a.split(/[ ,]+/g);
            var e;
            c._handlers_ = c._handlers_ || {};
            for (var f = 0; f < d.length; f += 1) {
              e = d[f];
              c._handlers_[e] = c._handlers_[e] || [];
              c._handlers_[e].push(b);
            }
            return c;
          };
          k.prototype.off = function (a, b) {
            var c = this;
            c._handlers_ = c._handlers_ || {};
            if (a === undefined) {
              c._handlers_ = {};
            } else if (b === undefined) {
              c._handlers_[a] = null;
            } else if (c._handlers_[a] && c._handlers_[a].indexOf(b) >= 0) {
              c._handlers_[a].splice(c._handlers_[a].indexOf(b), 1);
            }
            return c;
          };
          k.prototype.trigger = function (a, b) {
            var c = this;
            var d = a.split(/[ ,]+/g);
            var e;
            c._handlers_ = c._handlers_ || {};
            for (var f = 0; f < d.length; f += 1) {
              e = d[f];
              if (c._handlers_[e] && c._handlers_[e].length) {
                c._handlers_[e].forEach(function (a) {
                  a.call(c, {
                    type: e,
                    target: c
                  }, b);
                });
              }
            }
          };
          k.prototype.config = function (a) {
            var b = this;
            b.options = b.defaults || {};
            if (a) {
              b.options = j.safeExtend(b.options, a);
            }
          };
          k.prototype.bindEvt = function (a, b) {
            var c = this;
            c._domHandlers_ = c._domHandlers_ || {};
            c._domHandlers_[b] = function () {
              if (typeof c["on" + b] === "function") {
                c["on" + b].apply(c, arguments);
              } else {
                console.warn("[WARNING] : Missing \"on" + b + "\" handler.");
              }
            };
            j.bindEvt(a, h[b], c._domHandlers_[b]);
            if (i[b]) {
              j.bindEvt(a, i[b], c._domHandlers_[b]);
            }
            return c;
          };
          k.prototype.unbindEvt = function (a, b) {
            var c = this;
            c._domHandlers_ = c._domHandlers_ || {};
            j.unbindEvt(a, h[b], c._domHandlers_[b]);
            if (i[b]) {
              j.unbindEvt(a, i[b], c._domHandlers_[b]);
            }
            delete c._domHandlers_[b];
            return this;
          };
          function l(a, b) {
            this.identifier = b.identifier;
            this.position = b.position;
            this.frontPosition = b.frontPosition;
            this.collection = a;
            this.defaults = {
              size: 100,
              threshold: 0.1,
              color: "white",
              fadeTime: 250,
              dataOnly: false,
              restJoystick: true,
              restOpacity: 0.5,
              mode: "dynamic",
              zone: document.body,
              lockX: false,
              lockY: false,
              dumbBox: null
            };
            this.config(b);
            if (this.options.mode === "dynamic") {
              this.options.restOpacity = 0;
            }
            this.id = l.id;
            l.id += 1;
            this.buildEl().stylize();
            this.instance = {
              el: this.ui.el,
              on: this.on.bind(this),
              off: this.off.bind(this),
              show: this.show.bind(this),
              hide: this.hide.bind(this),
              add: this.addToDom.bind(this),
              remove: this.removeFromDom.bind(this),
              destroy: this.destroy.bind(this),
              resetDirection: this.resetDirection.bind(this),
              computeDirection: this.computeDirection.bind(this),
              trigger: this.trigger.bind(this),
              position: this.position,
              frontPosition: this.frontPosition,
              ui: this.ui,
              identifier: this.identifier,
              id: this.id,
              options: this.options
            };
            return this.instance;
          }
          ;
          l.prototype = new k();
          l.constructor = l;
          l.id = 0;
          l.prototype.buildEl = function (a) {
            this.ui = {};
            if (this.options.dataOnly) {
              return this;
            }
            this.ui.el = document.createElement("div");
            this.ui.back = document.createElement("div");
            this.ui.front = document.createElement("div");
            this.ui.el.className = "nipple collection_" + this.collection.id;
            this.ui.back.className = "back";
            this.ui.front.className = "front";
            this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
            this.ui.el.appendChild(this.ui.back);
            this.ui.el.appendChild(this.ui.front);
            return this;
          };
          l.prototype.stylize = function () {
            if (this.options.dataOnly) {
              return this;
            }
            var a = this.options.fadeTime + "ms";
            var b = j.getVendorStyle("borderRadius", "50%");
            var c = j.getTransitionStyle("transition", "opacity", a);
            var d = {
              el: {
                position: "absolute",
                opacity: this.options.restOpacity,
                display: "block",
                zIndex: 999
              },
              back: {
                position: "absolute",
                display: "block",
                width: this.options.size + "px",
                height: this.options.size + "px",
                marginLeft: -this.options.size / 2 + "px",
                marginTop: -this.options.size / 2 + "px",
                background: this.options.color,
                opacity: ".5"
              },
              front: {
                width: this.options.size / 2 + "px",
                height: this.options.size / 2 + "px",
                position: "absolute",
                display: "block",
                marginLeft: -this.options.size / 4 + "px",
                marginTop: -this.options.size / 4 + "px",
                background: this.options.color,
                opacity: ".5"
              }
            };
            j.extend(d.el, c);
            j.extend(d.back, b);
            j.extend(d.front, b);
            this.applyStyles(d);
            return this;
          };
          l.prototype.applyStyles = function (a) {
            for (var b in this.ui) {
              if (this.ui.hasOwnProperty(b)) {
                for (var c in a[b]) {
                  this.ui[b].style[c] = a[b][c];
                }
              }
            }
            return this;
          };
          l.prototype.addToDom = function () {
            if (this.options.dataOnly || document.body.contains(this.ui.el)) {
              return this;
            }
            this.options.zone.appendChild(this.ui.el);
            return this;
          };
          l.prototype.removeFromDom = function () {
            if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
              return this;
            }
            this.options.zone.removeChild(this.ui.el);
            return this;
          };
          l.prototype.destroy = function () {
            clearTimeout(this.removeTimeout);
            clearTimeout(this.showTimeout);
            clearTimeout(this.restTimeout);
            this.trigger("destroyed", this.instance);
            this.removeFromDom();
            this.off();
          };
          l.prototype.show = function (a) {
            var b = this;
            if (b.options.dataOnly) {
              return b;
            }
            clearTimeout(b.removeTimeout);
            clearTimeout(b.showTimeout);
            clearTimeout(b.restTimeout);
            b.addToDom();
            b.restCallback();
            setTimeout(function () {
              b.ui.el.style.opacity = 1;
            }, 0);
            b.showTimeout = setTimeout(function () {
              b.trigger("shown", b.instance);
              if (typeof a === "function") {
                a.call(this);
              }
            }, b.options.fadeTime);
            return b;
          };
          l.prototype.hide = function (a) {
            var b = this;
            if (b.options.dataOnly) {
              return b;
            }
            b.ui.el.style.opacity = b.options.restOpacity;
            clearTimeout(b.removeTimeout);
            clearTimeout(b.showTimeout);
            clearTimeout(b.restTimeout);
            b.removeTimeout = setTimeout(function () {
              var c = b.options.mode === "dynamic" ? "none" : "block";
              b.ui.el.style.display = c;
              if (typeof a === "function") {
                a.call(b);
              }
              b.trigger("hidden", b.instance);
            }, b.options.fadeTime);
            if (b.options.restJoystick) {
              b.restPosition();
            }
            return b;
          };
          l.prototype.restPosition = function (a) {
            var b = this;
            b.frontPosition = {
              x: 0,
              y: 0
            };
            var c = b.options.fadeTime + "ms";
            var d = {};
            d.front = j.getTransitionStyle("transition", ["top", "left"], c);
            var e = {
              front: {}
            };
            e.front = {
              left: b.frontPosition.x + "px",
              top: b.frontPosition.y + "px"
            };
            b.applyStyles(d);
            b.applyStyles(e);
            b.restTimeout = setTimeout(function () {
              if (typeof a === "function") {
                a.call(b);
              }
              b.restCallback();
            }, b.options.fadeTime);
          };
          l.prototype.restCallback = function () {
            var a = this;
            var b = {};
            b.front = j.getTransitionStyle("transition", "none", "");
            a.applyStyles(b);
            a.trigger("rested", a.instance);
          };
          l.prototype.resetDirection = function () {
            this.direction = {
              x: false,
              y: false,
              angle: false
            };
          };
          l.prototype.computeDirection = function (a) {
            var b = a.angle.radian;
            var c = Math.PI / 4;
            var d = Math.PI / 2;
            var e;
            var f;
            var g;
            if (b > c && b < c * 3 && !a.lockX) {
              e = "up";
            } else if (b > -c && b <= c && !a.lockY) {
              e = "left";
            } else if (b > -c * 3 && b <= -c && !a.lockX) {
              e = "down";
            } else if (!a.lockY) {
              e = "right";
            }
            if (!a.lockY) {
              if (b > -d && b < d) {
                f = "left";
              } else {
                f = "right";
              }
            }
            if (!a.lockX) {
              if (b > 0) {
                g = "up";
              } else {
                g = "down";
              }
            }
            if (a.force > this.options.threshold) {
              var h = {};
              for (var i in this.direction) {
                if (this.direction.hasOwnProperty(i)) {
                  h[i] = this.direction[i];
                }
              }
              var j = {};
              this.direction = {
                x: f,
                y: g,
                angle: e
              };
              a.direction = this.direction;
              for (var i in h) {
                if (h[i] === this.direction[i]) {
                  j[i] = true;
                }
              }
              if (j.x && j.y && j.angle) {
                return a;
              }
              if (!j.x || !j.y) {
                this.trigger("plain", a);
              }
              if (!j.x) {
                this.trigger("plain:" + f, a);
              }
              if (!j.y) {
                this.trigger("plain:" + g, a);
              }
              if (!j.angle) {
                this.trigger("dir dir:" + e, a);
              }
            }
            return a;
          };
          function m(a, b) {
            var c = this;
            c.nipples = [];
            c.idles = [];
            c.actives = [];
            c.ids = [];
            c.pressureIntervals = {};
            c.manager = a;
            c.id = m.id;
            m.id += 1;
            c.defaults = {
              zone: document.body,
              multitouch: false,
              maxNumberOfNipples: 10,
              mode: "dynamic",
              position: {
                top: 0,
                left: 0
              },
              catchDistance: 200,
              size: 100,
              threshold: 0.1,
              color: "white",
              fadeTime: 250,
              dataOnly: false,
              restJoystick: true,
              restOpacity: 0.5,
              lockX: false,
              lockY: false,
              dumbBox: null
            };
            c.config(b);
            if (c.options.mode === "static" || c.options.mode === "semi") {
              c.options.multitouch = false;
            }
            if (!c.options.multitouch) {
              c.options.maxNumberOfNipples = 1;
            }
            c.updateBox();
            c.prepareNipples();
            c.bindings();
            c.begin();
            return c.nipples;
          }
          m.prototype = new k();
          m.constructor = m;
          m.id = 0;
          m.prototype.prepareNipples = function () {
            var a = this;
            var b = a.nipples;
            b.on = a.on.bind(a);
            b.off = a.off.bind(a);
            b.options = a.options;
            b.destroy = a.destroy.bind(a);
            b.ids = a.ids;
            b.id = a.id;
            b.processOnMove = a.processOnMove.bind(a);
            b.processOnEnd = a.processOnEnd.bind(a);
            b.get = function (a) {
              if (a === undefined) {
                return b[0];
              }
              for (var c = 0, d = b.length; c < d; c += 1) {
                if (b[c].identifier === a) {
                  return b[c];
                }
              }
              return false;
            };
          };
          m.prototype.bindings = function () {
            var a = this;
            a.bindEvt(a.options.zone, "start");
            a.options.zone.style.touchAction = "none";
            a.options.zone.style.msTouchAction = "none";
          };
          m.prototype.begin = function () {
            var a = this;
            var b = a.options;
            if (b.mode === "static") {
              var c = a.createNipple(b.position, a.manager.getIdentifier());
              c.add();
              a.idles.push(c);
            }
          };
          m.prototype.createNipple = function (a, b) {
            var c = this;
            var d = j.getScroll();
            var e = {};
            var f = c.options;
            if (a.x && a.y) {
              e = {
                x: a.x - (d.x + c.box.left),
                y: a.y - (d.y + c.box.top)
              };
            } else if (a.top || a.right || a.bottom || a.left) {
              var g = document.createElement("DIV");
              g.style.display = "hidden";
              g.style.top = a.top;
              g.style.right = a.right;
              g.style.bottom = a.bottom;
              g.style.left = a.left;
              g.style.position = "absolute";
              f.zone.appendChild(g);
              var h = g.getBoundingClientRect();
              f.zone.removeChild(g);
              e = a;
              a = {
                x: (f.dumbBox ? f.dumbBox.left : h.left) + d.x,
                y: (f.dumbBox ? f.dumbBox.top : h.top) + d.y
              };
            }
            var i = new l(c, {
              color: f.color,
              size: f.size,
              threshold: f.threshold,
              fadeTime: f.fadeTime,
              dataOnly: f.dataOnly,
              restJoystick: f.restJoystick,
              restOpacity: f.restOpacity,
              mode: f.mode,
              identifier: b,
              position: a,
              zone: f.zone,
              frontPosition: {
                x: 0,
                y: 0
              }
            });
            if (!f.dataOnly) {
              j.applyPosition(i.ui.el, e);
              j.applyPosition(i.ui.front, i.frontPosition);
            }
            c.nipples.push(i);
            c.trigger("added " + i.identifier + ":added", i);
            c.manager.trigger("added " + i.identifier + ":added", i);
            c.bindNipple(i);
            return i;
          };
          m.prototype.updateBox = function () {
            var a = this;
            a.box = a.options.zone.getBoundingClientRect();
          };
          m.prototype.bindNipple = function (a) {
            var b = this;
            var c;
            var d = function e(a, d) {
              c = a.type + " " + d.id + ":" + a.type;
              b.trigger(c, d);
            };
            a.on("destroyed", b.onDestroyed.bind(b));
            a.on("shown hidden rested dir plain", d);
            a.on("dir:up dir:right dir:down dir:left", d);
            a.on("plain:up plain:right plain:down plain:left", d);
          };
          m.prototype.pressureFn = function (a, b, c) {
            var d = this;
            var e = 0;
            clearInterval(d.pressureIntervals[c]);
            d.pressureIntervals[c] = setInterval(function () {
              var c = a.force || a.pressure || a.webkitForce || 0;
              if (c !== e) {
                b.trigger("pressure", c);
                d.trigger("pressure " + b.identifier + ":pressure", c);
                e = c;
              }
            }.bind(d), 100);
          };
          m.prototype.onstart = function (a) {
            var b = this;
            var c = b.options;
            a = j.prepareEvent(a);
            b.updateBox();
            var d = function d(a) {
              if (b.actives.length < c.maxNumberOfNipples) {
                b.processOnStart(a);
              }
            };
            j.map(a, d);
            b.manager.bindDocument();
            return false;
          };
          m.prototype.processOnStart = function (a) {
            var b = this;
            var c = b.options;
            var d;
            var e = b.manager.getIdentifier(a);
            var f = a.force || a.pressure || a.webkitForce || 0;
            var g = {
              x: a.pageX,
              y: a.pageY
            };
            var h = b.getOrCreate(e, g);
            if (h.identifier !== e) {
              b.manager.removeIdentifier(h.identifier);
            }
            h.identifier = e;
            var i = function d(c) {
              c.trigger("start", c);
              b.trigger("start " + c.id + ":start", c);
              c.show();
              if (f > 0) {
                b.pressureFn(a, c, c.identifier);
              }
              b.processOnMove(a);
            };
            if ((d = b.idles.indexOf(h)) >= 0) {
              b.idles.splice(d, 1);
            }
            b.actives.push(h);
            b.ids.push(h.identifier);
            if (c.mode !== "semi") {
              i(h);
            } else {
              var k = j.distance(g, h.position);
              if (k <= c.catchDistance) {
                i(h);
              } else {
                h.destroy();
                b.processOnStart(a);
                return;
              }
            }
            return h;
          };
          m.prototype.getOrCreate = function (a, b) {
            var c = this;
            var d = c.options;
            var e;
            if (/(semi|static)/.test(d.mode)) {
              e = c.idles[0];
              if (e) {
                c.idles.splice(0, 1);
                return e;
              }
              if (d.mode === "semi") {
                return c.createNipple(b, a);
              }
              console.warn("Coudln't find the needed nipple.");
              return false;
            }
            e = c.createNipple(b, a);
            return e;
          };
          m.prototype.processOnMove = function (a) {
            var b = this;
            var c = b.options;
            var d = b.manager.getIdentifier(a);
            var e = b.nipples.get(d);
            if (!e) {
              console.error("Found zombie joystick with ID " + d);
              b.manager.removeIdentifier(d);
              return;
            }
            e.identifier = d;
            var f = e.options.size / 2;
            var g = {
              x: a.pageX,
              y: a.pageY
            };
            var h = j.distance(g, e.position);
            var i = j.angle(g, e.position);
            var k = j.radians(i);
            var l = h / f;
            if (h > f) {
              h = f;
              g = j.findCoord(e.position, h, i);
            }
            var m = g.x - e.position.x;
            var n = g.y - e.position.y;
            if (c.lockX) {
              n = 0;
            }
            if (c.lockY) {
              m = 0;
            }
            e.frontPosition = {
              x: m,
              y: n
            };
            if (!c.dataOnly) {
              j.applyPosition(e.ui.front, e.frontPosition);
            }
            var o = {
              identifier: e.identifier,
              position: g,
              force: l,
              pressure: a.force || a.pressure || a.webkitForce || 0,
              distance: h,
              angle: {
                radian: k,
                degree: i
              },
              instance: e,
              lockX: c.lockX,
              lockY: c.lockY
            };
            o = e.computeDirection(o);
            o.angle = {
              radian: j.radians(180 - i),
              degree: 180 - i
            };
            e.trigger("move", o);
            b.trigger("move " + e.id + ":move", o);
          };
          m.prototype.processOnEnd = function (a) {
            var b = this;
            var c = b.options;
            var d = b.manager.getIdentifier(a);
            var e = b.nipples.get(d);
            var f = b.manager.removeIdentifier(e.identifier);
            if (!e) {
              return;
            }
            if (!c.dataOnly) {
              e.hide(function () {
                if (c.mode === "dynamic") {
                  e.trigger("removed", e);
                  b.trigger("removed " + e.id + ":removed", e);
                  b.manager.trigger("removed " + e.id + ":removed", e);
                  e.destroy();
                }
              });
            }
            clearInterval(b.pressureIntervals[e.identifier]);
            e.resetDirection();
            e.trigger("end", e);
            b.trigger("end " + e.id + ":end", e);
            if (b.ids.indexOf(e.identifier) >= 0) {
              b.ids.splice(b.ids.indexOf(e.identifier), 1);
            }
            if (b.actives.indexOf(e) >= 0) {
              b.actives.splice(b.actives.indexOf(e), 1);
            }
            if (/(semi|static)/.test(c.mode)) {
              b.idles.push(e);
            } else if (b.nipples.indexOf(e) >= 0) {
              b.nipples.splice(b.nipples.indexOf(e), 1);
            }
            b.manager.unbindDocument();
            if (/(semi|static)/.test(c.mode)) {
              b.manager.ids[f.id] = f.identifier;
            }
          };
          m.prototype.onDestroyed = function (a, b) {
            var c = this;
            if (c.nipples.indexOf(b) >= 0) {
              c.nipples.splice(c.nipples.indexOf(b), 1);
            }
            if (c.actives.indexOf(b) >= 0) {
              c.actives.splice(c.actives.indexOf(b), 1);
            }
            if (c.idles.indexOf(b) >= 0) {
              c.idles.splice(c.idles.indexOf(b), 1);
            }
            if (c.ids.indexOf(b.identifier) >= 0) {
              c.ids.splice(c.ids.indexOf(b.identifier), 1);
            }
            c.manager.removeIdentifier(b.identifier);
            c.manager.unbindDocument();
          };
          m.prototype.destroy = function () {
            var a = this;
            a.unbindEvt(a.options.zone, "start");
            a.nipples.forEach(function (a) {
              a.destroy();
            });
            for (var b in a.pressureIntervals) {
              if (a.pressureIntervals.hasOwnProperty(b)) {
                clearInterval(a.pressureIntervals[b]);
              }
            }
            a.trigger("destroyed", a.nipples);
            a.manager.unbindDocument();
            a.off();
          };
          function n(a) {
            var b = this;
            b.ids = {};
            b.index = 0;
            b.collections = [];
            b.config(a);
            b.prepareCollections();
            var c;
            j.bindEvt(window, "resize", function (a) {
              clearTimeout(c);
              c = setTimeout(function () {
                var a;
                var c = j.getScroll();
                b.collections.forEach(function (b) {
                  b.forEach(function (b) {
                    a = b.el.getBoundingClientRect();
                    b.position = {
                      x: c.x + a.left,
                      y: c.y + a.top
                    };
                  });
                });
              }, 100);
            });
            return b.collections;
          }
          ;
          n.prototype = new k();
          n.constructor = n;
          n.prototype.prepareCollections = function () {
            var a = this;
            a.collections.create = a.create.bind(a);
            a.collections.on = a.on.bind(a);
            a.collections.off = a.off.bind(a);
            a.collections.destroy = a.destroy.bind(a);
            a.collections.get = function (b) {
              var c;
              a.collections.every(function (a) {
                if (c = a.get(b)) {
                  return false;
                }
                return true;
              });
              return c;
            };
          };
          n.prototype.create = function (a) {
            return this.createCollection(a);
          };
          n.prototype.createCollection = function (a) {
            var b = this;
            var c = new m(b, a);
            b.bindCollection(c);
            b.collections.push(c);
            return c;
          };
          n.prototype.bindCollection = function (a) {
            var b = this;
            var c;
            var d = function e(a, d) {
              c = a.type + " " + d.id + ":" + a.type;
              b.trigger(c, d);
            };
            a.on("destroyed", b.onDestroyed.bind(b));
            a.on("shown hidden rested dir plain", d);
            a.on("dir:up dir:right dir:down dir:left", d);
            a.on("plain:up plain:right plain:down plain:left", d);
          };
          n.prototype.bindDocument = function () {
            var a = this;
            if (!a.binded) {
              a.bindEvt(document, "move").bindEvt(document, "end");
              a.binded = true;
            }
          };
          n.prototype.unbindDocument = function (a) {
            var b = this;
            if (!Object.keys(b.ids).length || a === true) {
              b.unbindEvt(document, "move").unbindEvt(document, "end");
              b.binded = false;
            }
          };
          n.prototype.getIdentifier = function (a) {
            var b;
            if (!a) {
              b = this.index;
            } else {
              b = a.identifier === undefined ? a.pointerId : a.identifier;
              if (b === undefined) {
                b = this.latest || 0;
              }
            }
            if (this.ids[b] === undefined) {
              this.ids[b] = this.index;
              this.index += 1;
            }
            this.latest = b;
            return this.ids[b];
          };
          n.prototype.removeIdentifier = function (a) {
            var b = {};
            for (var c in this.ids) {
              if (this.ids[c] === a) {
                b.id = c;
                b.identifier = this.ids[c];
                delete this.ids[c];
                break;
              }
            }
            return b;
          };
          n.prototype.onmove = function (a) {
            var b = this;
            b.onAny("move", a);
            return false;
          };
          n.prototype.onend = function (a) {
            var b = this;
            b.onAny("end", a);
            return false;
          };
          n.prototype.oncancel = function (a) {
            var b = this;
            b.onAny("end", a);
            return false;
          };
          n.prototype.onAny = function (a, b) {
            var c = this;
            var d;
            var e = "processOn" + a.charAt(0).toUpperCase() + a.slice(1);
            b = j.prepareEvent(b);
            var f = function d(a, b, c) {
              if (c.ids.indexOf(b) >= 0) {
                c[e](a);
                a._found_ = true;
              }
            };
            var g = function b(a) {
              d = c.getIdentifier(a);
              j.map(c.collections, f.bind(null, a, d));
              if (!a._found_) {
                c.removeIdentifier(d);
              }
            };
            j.map(b, g);
            return false;
          };
          n.prototype.destroy = function () {
            var a = this;
            a.unbindDocument(true);
            a.ids = {};
            a.index = 0;
            a.collections.forEach(function (a) {
              a.destroy();
            });
            a.off();
          };
          n.prototype.onDestroyed = function (a, b) {
            var c = this;
            if (c.collections.indexOf(b) < 0) {
              return false;
            }
            c.collections.splice(c.collections.indexOf(b), 1);
          };
          var o = new n();
          return {
            create: function b(a) {
              return o.create(a);
            },
            factory: o
          };
        });
        var D = false;
        var E = true;
        var F = 2;
        var G = null;
        var H = 1;
        var I = {};
        var J = {
          sao: "wss://nycsam01.wormworld.io",
          dal: "wss://nycsam01.wormworld.io",
          hil: "wss://nycsam01.wormworld.io",
          vin: "wss://nycsam01.wormworld.io",
          fra: "wss://fraceu01.wormworld.io",
          gra: "wss://fraceu01.wormworld.io",
          dxb: "wss://fraceu01.wormworld.io",
          sin: "wss://sin01.wormworld.io",
          tok: "wss://sin01.wormworld.io",
          local: "wss://nycsam01.wormworld.io"
        };
        var K = {
          fra: [30055, 31770, 30106, 30339],
          gra: [32054, 31038],
          sin: [31764, 30165, 30703, 31211],
          tok: [30171],
          sao: [30208, 31770, 31533, 30208, 30327, 30786],
          hil: [30162, 30042, 32403],
          dal: [31091, 31230, 32584],
          dxb: [32703, 31975, 32650]
        };
        var L = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
        var M = {
          loaded: false,
          sprites: {},
          textures: {},
          resources: {}
        };
        $("#mm-params-nickname").attr("maxlength", C);
        var N = {
          ref: [],
          hs: {},
          fxdo: function b(a) {
            if (bbs.activeSounds2 && bbs.start) {
              if (!N[a].playing()) {
                N[a].play();
              }
            }
          },
          fxAux: function c(a, b) {
            if (b === 1 && !N.fxStatus.top1) {
              N.fxStatus.top1 = true;
              N.fxdo("top1");
            }
            return a;
          },
          fxStatus: {
            top1: false
          }
        };
        window._wwcio = {
          message: null,
          obj: {},
          join: function a() {},
          update: function a() {},
          leave: function a() {},
          leaderboardUpdated: function c(a, b) {
            wa(a, b);
          },
          close: function a() {},
          set: function b(a) {
            return;
          }
        };
        window._wwc = {
          customPaths: {
            map: null
          },
          _ass_type: [],
          testSkinMod: function b(a) {
            var c = typeof a === "string";
            a = parseInt(a);
            if (c && isNaN(a)) {
              return false;
            } else {
              return parseInt(a) >= 399 && parseInt(a) < 8999;
            }
          },
          testWear: function b(a) {
            var c = typeof a === "string";
            a = parseInt(a);
            if (c && isNaN(a)) {
              return false;
            } else {
              return parseInt(a) >= 399 && parseInt(a) < 8999;
            }
          },
          isNumberValid: function b(a) {
            return a !== "" && a !== null && a !== undefined && !isNaN(a);
          },
          validInputWear: function b(a) {
            var c = _wwc.testWear(a);
            var d = typeof skinId === "string";
            if (!c && !d) {
              return a;
            }
            return 0;
          },
          validInput: function b(a) {
            var c = _wwc.testSkinMod(a);
            var d = typeof a === "string";
            if (!c && !d) {
              return a;
            }
            try {
              var e = $("#inputReplaceSkin").val();
              return encodeURI(_wwc.isNumberValid(e) ? e : bbs.idReplaceSkin || 35);
            } catch (a) {
              return encodeURI(35);
            }
          },
          fullscreen: null,
          joystick: function b(a) {
            var c = {
              checked: true,
              color: bbs.joystick && bbs.joystick.color || "red"
            };
            a = bbs.joystick && bbs.joystick.mode || "dynamic";
            if (a === "dynamic") {
              return c;
            }
            c.position = {
              bottom: "100px"
            };
            c.position[bbs.joystick.positionMode === "L" ? "left" : "right"] = "110px";
            return c;
          },
          load_con: function a() {
            $(".selecionar-sala-v2").click(function (a) {
              a.preventDefault();
              var b = $(this).attr("data-con") || bbs.con;
              var c = $(this).attr("data-type");
              la.addRoom($(this).attr("data-room"));
              Ba.dh.Zp = function (a, c, d) {
                bbs.con = d ? a : b || a;
                _wwc.Zp(bbs.con, c);
              };
              Ba.Pn();
            });
          },
          fnSaveGame: function a() {
            var b = $("#saveGame");
            b.prop("checked", bbs.saveGame);
            b.change(function () {
              if (!this.checked) {
                var a = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù� Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
                $(this).prop("checked", !a);
                if (!this.checked) {
                  _wwc.fnSetCounts("zerar");
                }
              }
              bbs.saveGame = this.checked;
              la.hsTotal.alpha = this.checked ? 1 : 0;
              la.killTotal.alpha = this.checked ? 1 : 0;
              localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
            });
          },
          fnSetCounts: function c(a, b) {
            var d = function e(a, b, c, d) {
              _wwc.setCountGame(a, b, c, d);
            };
            if (a === "count") {
              bbs.kill = (bbs.kill || 0) + (b ? 0 : 1);
              bbs.headshot = (bbs.headshot || 0) + (b ? 1 : 0);
              bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
              bbs.tkill = bbs.tkill + (b ? 0 : 1);
              bbs.theadshot = bbs.theadshot + (b ? 1 : 0);
            }
            if (a === "open") {
              bbs.kill = 0;
              bbs.headshot = 0;
              if (bbs.saveGame) {}
            }
            if (a === "close") {
              if (bbs.saveGame) {
                bbs.died = (bbs.died || 0) + 1;
              } else {
                _wwc.fnSetCounts("zerar");
              }
            }
            if (a === "zerar") {
              bbs.kill = 0;
              bbs.tkill = 0;
              bbs.headshot = 0;
              bbs.theadshot = 0;
              bbs.died = 0;
            }
            d(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
          },
          setCountGame: function e(a, b, c, d) {
            if (!bbs.saveGame) {
              la.hsTotal.alpha = 0;
              la.killTotal.alpha = 0;
            }
            la.hs.text = b;
            la.hsTotal.text = d;
            la.kill.text = a;
            la.killTotal.text = c;
          },
          ismobile: ka(),
          Zp: undefined
        };
        window.bbs = {
          version: 0,
          headshot: 0,
          kill: 0,
          theadshot: 0,
          tkill: 0,
          died: 0,
          start: 0,
          HOL: 0,
          tk: null,
          country: null,
          finish: 0,
          saveGame: false,
          idReplaceSkin: 34,
          mobile: false,
          joystick: null,
          customJoystick: null,
          display: {
            customClock: null,
            clock: {
              x: 60,
              y: 60
            },
            top: {
              x: 225,
              y: 1
            },
            default: false,
            custom: false,
            m: {
              x: 60,
              y: 60
            },
            r: {
              x: 225,
              y: 1
            },
            ms: false
          },
          PropertyManager: {},
          acs: true,
          lr: false,
          showTophs: true,
          showRechs: true,
          con: null,
          params: "",
          arrow: true,
          activeBadLang: false,
          activeSounds2: true,
          activeZoom: false,
          activeZoomMobile: false,
          top10Show: []
        };
        var O = localStorage.getItem("wwc_version");
        var P = localStorage.getItem("wwcSaveGame");
        var Q = localStorage.getItem("wwc_config");
        P &&= JSON.parse(P);
        for (var R in P) {
          if (R === "joystick") {
            bbs[R] = _wwc.joystick();
            for (var S in P[R]) {
              bbs[R][S] = P[R][S];
            }
          } else if (R === "display") {
            for (var T in P[R]) {
              bbs[R][T] = P[R][T];
            }
          } else {
            bbs[R] = P[R];
          }
        }
        if (!bbs.version || bbs.version !== F) {
          bbs.version = F;
          bbs.joystick = _wwc.joystick();
        }
        bbs.loading = true;
        window.respawnFn = function () {
          Ba.dh.Cn = 0;
          if (Ba.dh.mq) {
            Ba.dh.mq.close();
          }
          Ba.dh.mq = null;
          Ba.dh.Zp = function (a, b) {
            _wwc.Zp(bbs.con || a, b);
          };
          Ba.Pn();
        };
        window.lobbyFn = function () {
          Ba.dh.Cn = 0;
          if (Ba.dh.mq) {
            Ba.dh.mq.close();
          }
          Ba.dh.mq = null;
          Ba.dh.Np();
          ba();
        };
        $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter("#mm-store");
        $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
        $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
        $("body").append("<div id=\"wwc-set-view\" class=\"base-popup-view\"\n        style=\"display: none;\n        position: relative;\n        background: #FFF;\n        padding: 10px 15px;\n        max-width: 660px;\n        margin: 10px auto;\">\n    </div>");
        var U = "ass";
        window.mbf = {};
        var V = function b(a) {
          if (bbs.shiftKey) {
            return;
          }
          var c = 30;
          var d = 0;
          var e = false;
          function f() {
            var a = parseFloat(Ba.og.af.Bn);
            a = (a - 0.06) % (Math.PI * 2);
            if (a < 0) {
              a += Math.PI * 2;
            }
            Ba.og.af.Bn = a.toFixed(2);
          }
          function g(a) {
            D = setInterval(function () {
              if (a === 1) {
                d = e ? d - 1 : d + 1;
                if (d % 80 === 0 && !e) {
                  c = c + 18;
                  clearInterval(D);
                  g(1);
                }
              }
              f();
            }, c);
          }
          if ((a == 7 || a.key == "7") && D === null) {
            Ba.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
            g(1);
            return;
          }
          if ((a == 8 || a.key == "8") && D === null) {
            Ba.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
            g(2);
            return;
          }
          if (D !== null) {
            clearInterval(D);
            Ba.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
            D = null;
          }
        };
        mbf["mbf" + U + 1] = function () {
          H = H > 30 ? H : H + 0.25;
          la.zoom.text = "x" + H.toFixed(2);
        };
        mbf["mbf" + U + 2] = function () {
          var a = H - 0.25;
          H = a <= 1.15 ? 1.15 : a;
          la.zoom.text = "x" + H.toFixed(2);
        };
        mbf["mbf" + U + 3] = function () {
          V(D ? 0 : 8);
          if (D) {
            $("#mbfB").css("background-color", "#156ab3");
          } else {
            $("#mbfB").css("background-color", "#000");
          }
        };
        mbf["mbf" + U + 4] = function () {
          V(D ? 0 : 7);
          if (D) {
            $("#mbfA").css("background-color", "#156ab3");
          } else {
            $("#mbfA").css("background-color", "#000");
          }
        };
        mbf["mbf" + U + 5] = function () {
          window.location.reload();
        };
        mbf["mbf" + U + 6] = function () {
          respawnFn();
        };
        if (bbs.activeZoom) {
          window.onwheel = function (a) {
            if (a.deltaY < 0) {
              if (H < 30) {
                H += 0.25;
              }
            } else if (H > 0.5) {
              H -= 0.25;
            }
            la.zoom.text = "x" + H;
          };
        }
        $("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"margin-top:5px;width:100%;height: 35px;\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\"\n    style=\"margin-top:5px;width:100%;background-color:#f7941d;color:#fff;border:0;height:35px;\" />\n    <input type=\"button\" value=\"SKINLAB\" onclick=\"window.location.href='https://wormworld.io/skinlab/'\"\n    style=\"margin-top:5px;width:100%;height: 35px;\" />\n    </div>");
        var W = $("#idReplaceSkin");
        var X = function () {
          var a = v(t().mark(function c(a, b) {
            return t().wrap(function d(c) {
              while (1) {
                switch (c.prev = c.next) {
                  case 0:
                    if (!b) {
                      c.next = 2;
                      break;
                    }
                    return c.abrupt("return");
                  case 2:
                    if (!a) {
                      a = Ba.u.wi;
                    }
                    bbs.userId = a.userId;
                    c.next = 6;
                    return fetch("https://zwormextenstion.com/wormExtension/api/servers/wormworld.php?v=, {
                      headers: {
                        "Content-Type": "application/json",
                        "x-access-token": bbs.tk
                      },
                      method: "POST",
                      body: JSON.stringify(a)
                    }).then(function (b) {
                      b.text().then(function (b) {
                        $(".description-text").html(b);
                        if (a.type === "error") {
                          $(".description-text").html(a.msg);
                        }
                      });
                    }).catch(function () {
                      $(".description-text").html("Problema de conexão.");
                    });
                  case 6:
                    c.next = 8;
                    return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                      headers: {
                        "Content-Type": "application/json",
                        "x-access-token": bbs.tk
                      },
                      method: "POST",
                      body: JSON.stringify(bbs)
                    }).then(function (a) {
                      a.text().then(function (a) {
                        $("#wwc-set-view").html(a);
                        $("#mm-wwc").click(function (a) {
                          $("#wwc-set-view").css("display", "block");
                        });
                        _wwc.load_con();
                        _wwc.fnSaveGame();
                        _wwc.fnSetCounts("start");
                        $("#backgroundArena").change(function () {
                          var a = $(this).val();
                          bbs.background = a;
                          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                          Ba.xe._g = Ca.bgg(a);
                          window.location.reload();
                        });
                        var b = _wwc.isNumberValid(bbs.idReplaceSkin);
                        if (b) {
                          $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                        } else {
                          var c = $("#inputReplaceSkin").val();
                          b = _wwc.isNumberValid(c);
                          bbs.idReplaceSkin = b ? c : 33;
                        }
                        if (!bbs.joystick) {
                          $("#joystick_checked").val(true);
                          $("#joystick_color").val("red");
                          $("#joystick_mode").val("dynamic");
                          $("#joystick_position").val("L");
                          $("#joystick_size").val(100);
                          $("#joystick_pxy").val(100);
                        } else {
                          $("#joystick_checked").prop("checked", bbs.joystick.checked);
                          $("#joystick_color").val(bbs.joystick.color);
                          $("#joystick_mode").val(bbs.joystick.mode);
                          $("#joystick_position").val(bbs.joystick.positionMode);
                          $("#joystick_size").val(bbs.joystick.size);
                          $("#joystick_pxy").val(bbs.joystick.pxy);
                        }
                      });
                    });
                  case 8:
                  case "end":
                    return c.stop();
                }
              }
            }, c);
          }));
          return function d(b, c) {
            return a.apply(this, arguments);
          };
        }();
        var Y = function b(a) {
          if (bbs.PropertyManager) {
            if (bbs.PropertyManager.lj) {
              a.skinId = bbs.PropertyManager.lj;
            }
            if (bbs.PropertyManager.mj) {
              a.eyesId = bbs.PropertyManager.mj;
            }
            if (bbs.PropertyManager.nj) {
              a.mouthId = bbs.PropertyManager.nj;
            }
            if (bbs.PropertyManager.pj) {
              a.glassesId = bbs.PropertyManager.pj;
            }
            if (bbs.PropertyManager.oj) {
              a.hatId = bbs.PropertyManager.oj;
            }
          }
        };
        var Z = function () {
          var a = v(t().mark(function c(a, b) {
            var d;
            var e;
            var f;
            var g;
            var h;
            return t().wrap(function i(c) {
              while (1) {
                switch (c.prev = c.next) {
                  case 0:
                    $("#mm-params-nickname").prop("maxlength", C);
                    c.next = 3;
                    return fetch(URLSERV_WORMWORLD + "/register", {
                      headers: {
                        "Content-Type": "application/json",
                        "x-access-token": bbs.tk
                      },
                      method: "POST",
                      body: JSON.stringify(a)
                    }).then(function () {
                      var a = v(t().mark(function b(a) {
                        return t().wrap(function c(b) {
                          while (1) {
                            switch (b.prev = b.next) {
                              case 0:
                                b.next = 2;
                                return a.json();
                              case 2:
                                return b.abrupt("return", b.sent);
                              case 3:
                              case "end":
                                return b.stop();
                            }
                          }
                        }, b);
                      }));
                      return function (b) {
                        return a.apply(this, arguments);
                      };
                    }()).catch(function () {
                      $(".description-text").html("Problema de conexão.");
                    });
                  case 3:
                    d = c.sent;
                    if (!d) {
                      d = {};
                      d.tk = 1;
                    }
                    bbs.tk = d.tk;
                    a.propertyList = d.propertyList;
                    b(a);
                    X(d);
                    _wwc._anApp = Ba;
                    _wwc._tx = function (a) {
                      Object.keys(a).forEach(function (b) {
                        if (a[b].Yi) {
                          a[b].fj.nh.Cc.xc.width = a[b].fj.nh.Cc.xc.width + 2;
                          a[b].fj.nh.Cc.xc.height = a[b].fj.nh.Cc.xc.height + 2;
                        }
                      });
                    };
                    _wwc.Zp = Ba.dh.Zp;
                    Ba.dh.Dq = function (a, b) {
                      var c = Ba.dh;
                      c.mq = new WebSocket(a);
                      H = _wwc.ismobile ? 1.15 : 1;
                      bbs.start = new Date();
                      c.mq.binaryType = "arraybuffer";
                      bbs.con = a;
                      I = {};
                      Ca.setIntervalRun = setInterval(function () {
                        Ca.ps3();
                      }, 16);
                      c.mq.onopen = function () {
                        ca();
                        _wwc.fnSetCounts("open");
                        b();
                      };
                      c.mq.onclose = function () {
                        ba();
                        _wwc.fnSetCounts("close");
                        _wwcio.close();
                        clearInterval(Ca.setIntervalRun);
                        Ca.loadBg = false;
                        bbs.start = 0;
                      };
                      c.mq.onerror = function (a) {
                        ba();
                        _wwc.fnSetCounts("close");
                        _wwcio.close();
                        clearInterval(Ca.setIntervalRun);
                        Ca.loadBg = false;
                        bbs.start = 0;
                      };
                      c.mq.onmessage = function (a) {
                        c.Kp.Ph(a.data);
                      };
                    };
                    Ba.dh.Kp.Yh = function (a, b) {
                      ba();
                      this.dh.Oi();
                    };
                    Ba.og.af.ng.Ug.Uf = function (a) {
                      var b = function () {
                        return Ca.$F.M(Ca.POGL.Sprite, function () {
                          Ca.POGL.Sprite.call(this);
                          this.sh = 0;
                        });
                      }();
                      for (var c in this.rh) {
                        if (a[c] == null || !a[c].hd) {
                          Ca.$F.U(this.rh[c]);
                          delete this.rh[c];
                        }
                      }
                      var d = 0;
                      var e = 1;
                      if (bbs.display.custom) {
                        e = window.innerWidth;
                      }
                      for (var f in a) {
                        var g = a[f];
                        if (g.hd) {
                          var h = this.rh[f];
                          if (!h) {
                            var i = Ba.Lc.Ub().pb(g.nd).ub;
                            h = new b();
                            h.texture = i.Ea();
                            h.width = 40;
                            h.height = 40;
                            this.rh[f] = h;
                            this.addChild(h);
                          }
                          la.setPtc(this, f, g.od);
                          h.sh = g.od;
                          h.position.x = d + (bbs.display.custom ? bbs.display.clock.x * e : 0);
                          h.position.y = bbs.display.custom ? bbs.display.clock.y : h.position.y;
                          d += 40;
                        }
                      }
                    };
                    if (!bbs.display.customClock) {
                      Ba.og.af.ng.Tg.addChild(la.clock);
                    }
                    Ba.og.af.ng.Tg.addChild(la.containerCountInfo);
                    Ba.og.af.ng.Tg.addChild(la.containerHstop);
                    la.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                    Ba.og.af.ng.Tg.addChild(la.containerHsRec);
                    la.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                    Ba.og.af.ng.Tg.addChild(la.labelRoom);
                    la.ptc = {};
                    e = [40, 40, 40, 120, 40, 20, 40];
                    for (f = 0; f < e.length; f++) {
                      g = "clock_ad" + f;
                      la.ptc[g] = new PIXI.Text(e[f], la.fontStyle["tfc" + f]);
                      la.ptc[g].y = 61;
                    }
                    la.setPtc = function (a, b, c) {
                      var d = e[b] - parseInt((c == 0.99 ? 1 : c) * e[b] / 1);
                      var f = "clock_ad" + b;
                      a.rh[b].addChild(la.ptc[f]);
                      if (la.ptc[f]) {
                        la.ptc[f].x = d >= 100 ? 11 : d >= 10 ? 18 : 26;
                        la.ptc[f].text = d;
                      }
                    };
                    h = Ba.og.af.ng.Eb;
                    mbf.onmovepoint = function (a) {
                      if (a.pointerType === "touch" && !a.isPrimary) {
                        return;
                      }
                      if (a.clientX !== undefined) {
                        Ba.og.af.Bn = Math.atan2(a.clientY - h.offsetHeight * 0.5, a.clientX - h.offsetWidth * 0.5);
                      } else {
                        Ba.og.af.Bn = Math.atan2(a.pageY - h.offsetHeight * 0.5, a.pageX - h.offsetWidth * 0.5);
                      }
                    };
                    mbf.onRun = function (a) {
                      if (a && a.pointerType === "touch") {
                        return;
                      }
                      Ba.og.af.An = true;
                    };
                    mbf.onStop = function (a) {
                      if (a && a.pointerType === "touch") {
                        return;
                      }
                      Ba.og.af.An = false;
                    };
                    h.addEventListener("pointermove", mbf.onmovepoint, true);
                    h.addEventListener("pointerdown", mbf.onRun, true);
                    h.addEventListener("pointerup", mbf.onStop, true);
                    if (_wwc.ismobile) {
                      console.log("mobile");
                      h.addEventListener("touchstart", function (a) {
                        if (a = a || window.event) {
                          Ba.og.af.An = a.touches.length >= 2;
                        }
                        a.preventDefault();
                      }, true);
                      h.addEventListener("touchend", function (a) {
                        if (a = a || window.event) {
                          Ba.og.af.An = a.touches.length >= 2;
                        }
                      }, true);
                    }
                    window.addEventListener("keydown", V, false);
                  case 35:
                  case "end":
                    return c.stop();
                }
              }
            }, c);
          }));
          return function d(b, c) {
            return a.apply(this, arguments);
          };
        }();
        function _() {
          var a = document.createElement("div");
          a.style.position = "fixed";
          a.style.top = "0";
          a.style.height = "100%";
          a.style.width = "100%";
          a.style.zIndex = "1000";
          a.id = "zone_joystick";
          document.body.appendChild(a);
        }
        function aa() {
          var a = document.getElementById("zone_joystick");
          if (a) {
            a.remove();
          }
        }
        var ba = function a() {
          if (G) {
            $("#wwc-mobile-box").remove();
            G.destroy();
          }
          aa();
        };
        var ca = function a() {
          try {
            var b = function a() {
              G.on("start end", function (a, b) {}).on("move", function (a, b) {
                var c = b.angle.radian <= Math.PI ? b.angle.radian * -1 : Math.PI - (b.angle.radian - Math.PI);
                Ba.og.af.Bn = c;
              });
            };
            var c = function a() {
              if (G) {
                G.destroy();
              }
              var c = o({}, bbs.joystick);
              var d = {};
              if (bbs.customJoystick) {
                _();
                var e = k(bbs.customJoystick.buttons);
                var f;
                try {
                  for (e.s(); !(f = e.n()).done;) {
                    var g = f.value;
                    var h = document.createElement("div");
                    if (g.svg) {
                      h.innerHTML = g.svg;
                    } else {
                      h.style.color = g.color || "#FFF";
                      h.style.backgroundColor = g.backgroundColor || "#000";
                      h.style.borderRadius = "10px";
                      h.style.textAlign = "center";
                      h.style.fontWeight = "bold";
                      h.style.padding = "5px";
                      h.style.border = "1px solid #f00";
                      h.style.fontSize = g.size || "25px";
                      h.innerHTML = g.value;
                    }
                    h.style.position = "absolute";
                    h.style.top = g.top;
                    h.style.left = g.left;
                    h.style.display = g.display;
                    h.style.cursor = "pointer";
                    h.id = "cbjt_" + g.value;
                    h.dataset.size = g.size;
                    h.dataset.color = g.color || "#FFF";
                    h.style.opacity = 0.6;
                    document.getElementById("zone_joystick").appendChild(h);
                    if (g.display !== "none") {
                      if (g.value === "ZoomIn") {
                        h.addEventListener("click", function (a) {
                          mbf["mbf" + U + 2]();
                        });
                      }
                      if (g.value === "ZoomOut") {
                        h.addEventListener("click", function (a) {
                          mbf["mbf" + U + 1]();
                        });
                      }
                      if (g.value === "Accelerator") {
                        h.addEventListener("pointerdown", function (a) {
                          mbf.onRun();
                        });
                        h.addEventListener("pointerup", function (a) {
                          mbf.onStop();
                        });
                      }
                      if (g.value === "Respawn") {
                        h.addEventListener("click", function (a) {
                          respawnFn();
                        });
                      }
                      if (g.value === "Rotate") {
                        h.addEventListener("click", function (a) {
                          V(D ? 0 : 8);
                        });
                      }
                      if (g.value === "Snail") {
                        h.addEventListener("click", function (a) {
                          V(D ? 0 : 7);
                        });
                      }
                      if (g.value === "Lobby") {
                        h.addEventListener("click", function (a) {
                          lobbyFn();
                        });
                      }
                    }
                    d[g.value] = h;
                  }
                } catch (a) {
                  e.e(a);
                } finally {
                  e.f();
                }
                d.Directional;
                var i = d.Directional.dataset.size / 2;
                var j = parseInt(d.Directional.style.left.replace("px", "")) + i;
                var l = parseInt(d.Directional.style.top.replace("px", "")) + i;
                c = {
                  zone: d.Directional,
                  mode: "static",
                  position: {
                    left: "50%",
                    top: "50%"
                  },
                  dumbBox: {
                    left: j,
                    top: l
                  },
                  color: "transparent",
                  size: Math.floor(d.Directional.dataset.size / 1.6)
                };
              } else {
                c.zone = document.getElementById("game-view");
                if (c.mode === "static") {
                  delete c.zone;
                }
              }
              G = nipplejs.create(c);
              b();
              if (bbs.customJoystick) {
                $(".nipple > .front").css("background", d.Directional.dataset.color);
              }
            };
            if (_wwc.ismobile && bbs.joystick.checked) {
              if (bbs.customJoystick) {
                console.log("customJoystick");
              }
              if (bbs.activeZoomMobile && !bbs.customJoystick) {
                $("body").append(`
        <div id="wwc-mobile-box">
        <style>
          #wwc-mobile-box{
            position: fixed;
            z-index: 1000;
            width: 100%;
            top: 10px;
          }
          #wwc-mobile-buttons {
            position: relative;
            margin: 0 auto;
            width: 225px;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
          }
          #wwc-mobile-buttons > div {
            background-color: #000;
            color: #FFF;
            border: 1px solid #FFF;
            border-radius: 50px;
            width: 36px;
            height: 36px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
        <div id="wwc-mobile-buttons"
        style="">
        <div onclick="mbf.mbf${U}5()" id="mbfR"> R </div>
        <div onclick="mbf.mbf${U}4()" id="mbfA"> A </div>
        <div onclick="mbf.mbf${U}3()" id="mbfB"> B </div>
        <div onclick="mbf.mbf${U}2()" id="mbfMi"> - </div>
        <div onclick="mbf.mbf${U}1()" id="mbfMa"> + </div>
        </div>
        </div>`);
              }
              c();
            }
          } catch (a) {
            console.error(a);
          }
        };
        var da = localStorage.getItem("custom_wormworld_wear");
        var ea = localStorage.getItem("custom_wormworld_skin");
        var fa = localStorage.getItem("custom_wormworld_badLang");
        var ha = localStorage.getItem("custom_wormworld_background");
        localStorage.removeItem("custom_wormworld_background");
        var ia = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
        if (fa) {
          ia = ia.concat(JSON.parse(fa));
        }
        window.badLanguageRegEx = (ia || []).join("|");
        var ja = function b(a) {
          a = a.replace(new RegExp(badLanguageRegEx, "gim"), ":");
          a = a.replace(/\uFDFD/g, "");
          a = a.substring(0, C);
          return a;
        };
        _wwc.customConfig = function (a) {
          var b = function c(a, b) {
            var d = new Blob([a]);
            b.Xd = window.URL.createObjectURL(d);
          };
          var c = function d(b, c = 0) {
            var e = b.id.toString();
            var f = b.type.toString().toLowerCase() + "VariantArray";
            var g = b.type.toString().toLowerCase() + "Dict";
            a.textureDict[e] = {
              custom: true,
              re1ativePath: b.file,
              reference: 1000 + c
            };
            a.regionDict[e] = {
              texture: e,
              x: b.x,
              y: b.y,
              w: b.w,
              h: b.h,
              px: b.px,
              py: b.py,
              pw: 128,
              ph: 128
            };
            a[g][1000 + c] = {
              base: [{
                region: e
              }],
              guest: false,
              nonbuyable: false,
              price: 0,
              priceBefore: 0,
              id: e
            };
            a[f].push([1000 + c]);
          };
          if (da) {
            da = JSON.parse(da);
            if (da.wear) {
              if (da.version == "2") {
                da.data.forEach(function (a, b) {
                  c(a, b);
                });
              } else {
                for (var d in da.wear.textureDict) {
                  a.textureDict[d] = {};
                  a.textureDict[d].h1 = true;
                  a.textureDict[d].h3 = true;
                  a.textureDict[d].re1ativePath = da.wear.textureDict[d].file;
                }
                for (var e in da.wear.regionDict) {
                  a.regionDict[e] = da.wear.regionDict[e];
                  var f = a.regionDict[e];
                  a[f.list][f.obj.id.toString()] = f.obj;
                  a[f.listVariant].push([f.obj.id.toString()]);
                }
              }
            }
          }
          if (ea) {
            ea = JSON.parse(ea);
            if (ea.version_skin == "2") {
              var h = function e(a, b, c, d) {
                return {
                  texture: b,
                  h: c - 5,
                  w: c - 5,
                  x: c * (d ? 0 : a || 0),
                  y: 0
                };
              };
              var i = "SKIN_" + ea.id + "___Z";
              var j = {
                id: i,
                regionDict: {},
                textureDict: {},
                skinArrayDict: [],
                skinGroupArrayDict: [{
                  id: i,
                  name: {
                    en: "Custom V2"
                  },
                  list: []
                }],
                version_skin: 3
              };
              var k = {
                id: i,
                guest: false,
                price: 0,
                priceBefore: 0,
                nonbuyable: false,
                prime: "c_white",
                glow: ea.glow,
                base: []
              };
              for (var l = ea.len - 1; l >= 0; l--) {
                j.regionDict[`${i}_${l}`] = h(l, i, ea.cos, 0);
                k.base.push(`${i}_${l}`);
              }
              j.textureDict[i] = {
                custom: true,
                re1ativePath: ea.file || ea.td.file,
                h1: true,
                h4: true
              };
              j.skinArrayDict.push(k);
              j.skinGroupArrayDict[0].list.push(i);
              if (!ea.textureDict[i]) {
                alert("Error! Texture not found:" + p + " - load again.");
                return;
              }
            }
            if (ea.version_skin == "3") {
              for (var m in ea) {
                var n = w(ea[m]);
                if (n === "object") {
                  a[m] = Array.isArray(ea[m]) ? [].concat(g(a[m]), g(ea[m])) : o(o({}, a[m]), ea[m]);
                }
              }
              return;
            }
            var q = ea.skin.id;
            ea.skin.id = q.toString();
            for (var r in ea.textureDict) {
              a.textureDict[r] = ea.textureDict[r];
              a.textureDict[r].re1ativePath = ea.textureDict[r].file;
              a.textureDict[r].h1 = true;
              a.textureDict[r].h4 = true;
            }
            for (var s in ea.regionDict) {
              a.regionDict[s] = ea.regionDict[s];
            }
            a.skinGroupArrayDict.push({
              id: "custom",
              name: {
                en: "Custom"
              },
              list: [q]
            });
            a.skinArrayDict.push(ea.skin);
          }
        };
        document.getElementById("btnFullScreen").addEventListener("click", function () {
          var a = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
          if (a && !_wwc.fullscreen) {
            try {
              _wwc.fullscreen = true;
              a.call(document.documentElement);
            } catch (a) {}
          } else {
            _wwc.fullscreen = false;
            document.exitFullscreen();
          }
        });
        function ka() {
          var a = false;
          (function (b) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
              a = true;
            }
          })(navigator.userAgent || navigator.vendor || window.opera);
          return a;
        }
        var la = {
          fontStyle: {
            amarelo: new PIXI.TextStyle({
              align: "center",
              fill: "#FFD500",
              fontSize: 10,
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true,
              fontWeight: "bold"
            }),
            branco: new PIXI.TextStyle({
              align: "center",
              fill: "#fff",
              fontSize: 10,
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true,
              fontWeight: "bold"
            }),
            hsBranco: new PIXI.TextStyle({
              align: "center",
              fill: "#fff",
              fontSize: 9,
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true,
              fontWeight: "bold"
            }),
            hsBrancoRight: new PIXI.TextStyle(q({
              align: "center",
              fill: "#fff",
              fontSize: 9,
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true,
              fontWeight: "bold"
            }, "align", "right")),
            brancoXzoom: new PIXI.TextStyle({
              align: "center",
              fill: "#fff",
              fontSize: 12,
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true,
              fontWeight: "bold"
            })
          }
        };
        var ma = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
        for (var na = 0; na < ma.length; na++) {
          var oa = ma[na];
          la.fontStyle["tfc" + na] = new PIXI.TextStyle({
            align: "center",
            fill: oa,
            fontSize: 25,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          });
        }
        la.zoom = new PIXI.Text("x1", la.fontStyle.brancoXzoom);
        la.zoom.x = 82;
        la.zoom.y = 105;
        la.label_hs = new PIXI.Text("HS", la.fontStyle.amarelo);
        la.label_hs.x = 15;
        la.label_hs.y = 107;
        la.hs = new PIXI.Text("0", la.fontStyle.amarelo);
        la.hs.x = 20;
        la.hs.y = 119;
        la.hsTotal = new PIXI.Text("0", la.fontStyle.branco);
        la.hsTotal.x = 20;
        la.hsTotal.y = 132;
        la.label_kill = new PIXI.Text("KILL", la.fontStyle.amarelo);
        la.label_kill.x = 50;
        la.label_kill.y = 107;
        la.kill = new PIXI.Text("0", la.fontStyle.amarelo);
        la.kill.x = 60;
        la.kill.y = 120;
        la.killTotal = new PIXI.Text("0", la.fontStyle.branco);
        la.killTotal.x = 60;
        la.killTotal.y = 133;
        la.clock = PIXI.Sprite.from(URL_CDN + "/images/clock.png");
        la.clock.width = 100;
        la.clock.height = 100;
        la.clock.x = -50;
        la.clock.y = -50;
        la.containerHsRec = new PIXI.Container();
        la.containerHsRec.x = -55;
        la.containerHsRec.y = 195;
        la.containerHstop = new PIXI.Container();
        la.containerHstop.x = -55;
        la.containerHstop.y = 95;
        la.containerHsIndex = new PIXI.Container();
        la.containerHsNames = new PIXI.Container();
        la.containerHsValue = new PIXI.Container();
        var pa = function b(a) {};
        la.top1rec = "🥇";
        la.top2rec = "🥈";
        la.top3rec = "🥉";
        la.titleRec = new PIXI.Text("Records (kb 0)", la.fontStyle.amarelo);
        la.titleRec.y = -5;
        for (var qa = 0; qa < 3; qa++) {
          var ra = qa + 1;
          var sa = new PIXI.Text(la["top" + ra + "rec"], la.fontStyle.hsBrancoRight);
          sa.x = qa >= 9 ? -5 : 0;
          sa.y = ra * 13;
          la.containerHsRec.addChild(sa);
          var ta = new PIXI.Text("--", la.fontStyle.hsBranco);
          ta.x = 15;
          ta.y = ra * 13;
          la.containerHsRec.addChild(ta);
          var ua = new PIXI.Text("-", la.fontStyle.hsBrancoRight);
          ua.x = 110;
          ua.y = ra * 13;
          la.containerHsRec.addChild(ua);
        }
        la.containerHsRec.addChild(la.titleRec);
        var va = 6;
        var wa = function c(a, b) {
          for (var d = 0; d < 3; d++) {
            if (la.containerHsRec.children[d]) {
              la.containerHsRec.children[d * 3 + 1].text = b && b[d] ? b[d].nickname : "--";
            }
            if (la.containerHsRec.children[d]) {
              la.containerHsRec.children[d * 3 + 2].text = b && b[d] ? b[d].score : "--";
            }
          }
          for (var e = 0; e < va; e++) {
            var f = "--";
            var g = "--";
            if (a && a[e]) {
              f = a[e].nickname ? a[e].nickname.substring(0, 14) : "--";
              g = parseInt(a[e].score || 0);
            }
            if (la.containerHsNames.children[e]) {
              la.containerHsNames.children[e].text = f;
            }
            if (la.containerHsValue.children[e]) {
              la.containerHsValue.children[e].text = g;
            }
          }
        };
        la.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", la.fontStyle.amarelo));
        for (var xa = 0; xa < va; xa++) {
          var ya = new PIXI.Text(xa + 1, la.fontStyle.hsBranco);
          ya.x = xa >= 9 ? -5 : 0;
          ya.y = (xa + 1) * 13;
          la.containerHsIndex.addChild(ya);
          var za = new PIXI.Text("..", la.fontStyle.hsBranco);
          za.x = 10;
          za.y = (xa + 1) * 13;
          la.containerHsNames.addChild(za);
          var Aa = new PIXI.Text(0, la.fontStyle.hsBrancoRight);
          Aa.x = 100;
          Aa.y = (xa + 1) * 13;
          la.containerHsValue.addChild(Aa);
        }
        la.containerHstop.addChild(la.containerHsIndex);
        la.containerHstop.addChild(la.containerHsNames);
        la.containerHstop.addChild(la.containerHsValue);
        la.containerCountInfo = new PIXI.Container();
        la.containerCountInfo.x = -45;
        la.containerCountInfo.y = -52;
        la.containerCountInfo.addChild(la.zoom);
        la.containerCountInfo.addChild(la.label_hs);
        la.containerCountInfo.addChild(la.hs);
        la.containerCountInfo.addChild(la.hsTotal);
        la.containerCountInfo.addChild(la.label_kill);
        la.containerCountInfo.addChild(la.kill);
        la.containerCountInfo.addChild(la.killTotal);
        la.labelRoom = new PIXI.Text("WWC", la.fontStyle.amarelo);
        la.labelRoom.x = -50;
        la.labelRoom.y = -56;
        la.addRoom = function (a) {
          la.labelRoom.text = a || "WWC";
        };
        window.addEventListener("keydown", function (a) {
          if (a.key === "0" && bbs.showRechs) {
            la.containerHsRec.alpha = !la.containerHsRec.alpha;
          }
          if (a.key === "9" && bbs.showTophs) {
            la.containerHstop.alpha = !la.containerHstop.alpha;
          }
          if (a.key === "6" && Ca.setIntervalRun) {
            E = !E;
          }
          if (a.key === "5" && Ca.setIntervalRun) {
            respawnFn();
          }
          if (a.key === "x1") {
            _wwcio.update(1);
          }
          if (a.key === "x2") {
            _wwcio.update(2);
          }
          if (a.key === "<" || a.key === ",") {
            mbf["mbf" + U + 1]();
          }
          if (a.key === ">" || a.key === ".") {
            mbf["mbf" + U + 2]();
          }
        });
        var Ba = {
          Lc: {
            Gb: {}
          }
        };
        var Ca = {
          pm: {},
          ps: 0,
          ps2: function d(a, b, c) {
            if (true) {
              var e = c ? 128 : 0;
              var f = Ca.$F.N(b) / Ca.$V.F * 128 & 127;
              var g = (e | f) & 255;
              if (a.nq !== g) {
                var h = new ArrayBuffer(1);
                new DataView(h).setInt8(0, g);
                a.Eq(h);
                a.nq = g;
              }
            } else {}
          },
          ps3: function a() {
            Ba.dh.xq(Ba.og.af.Gn(), Ba.og.af.Hn());
          },
          setIntervalRun: null,
          loadBg: false,
          LG: function d(a, b, c) {
            a.Ll("gg", c.credential, null);
          },
          Lg: function b(a) {
            Ba.xe._g = Ca.bgg();
            if (Ba.xe._g.width > 999) {
              return new a.WMGBS1();
            } else {
              return new a.WMGBS2();
            }
          },
          registry: function () {
            var a = v(t().mark(function b(a) {
              var c;
              return t().wrap(function d(b) {
                while (1) {
                  switch (b.prev = b.next) {
                    case 0:
                      b.next = 2;
                      return fetch(URLSERV_WORMDE + "/wormExtension/api/servers.php", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(a)
                      }).then(function (b) {
                        if (!b.ok) {
                          return a;
                        }
                        return b.json();
                      });
                    case 2:
                      c = b.sent;
                      return b.abrupt("return", c);
                    case 4:
                    case "end":
                      return b.stop();
                  }
                }
              }, b);
            }));
            function b(b) {
              return a.apply(this, arguments);
            }
            return b;
          }()
        };
        Ca.Vd = function (a, b) {
          _wwc.customConfig(a);
          var c = this;
          function d(a) {
            var d = b.Id.Ld;
            c.Rd(d, b.Od.bc(d).lc(a));
          }
          if (this.Fd) {
            this.Pd();
            return;
          }
          var e = [];
          var f = [];
          var g = 0;
          var h = new PIXI.Loader();
          for (var i in a.textureDict) {
            if (a.textureDict.hasOwnProperty(i)) {
              var j = a.textureDict[i];
              var k = j.re1ativePath || j.relativePath;
              var l = j.fileSize || 100;
              var m = j.sha256 || null;
              var n = new b.Wd(i, k, l, m);
              n.h1 = j.h1;
              n.h4 = j.h4;
              n.skinEvo = j.skinEvo;
              n.lines = j.lines;
              n.speed = j.speed;
              e.push(n);
              h.add(i, k);
            }
          }
          h.onProgress.add(function (a, b) {
            d(a.progress / 100);
          });
          h.load(function (d, f) {
            e.forEach(function (a) {
              a.resource = f[a.ae];
            });
            c.$d(a, e, b);
          });
          return;
        };
        Ca.Zd = function (a, b, c, d) {
          $.ajax({
            type: "GET",
            url: a._d,
            xhrFields: {
              responseType: "arraybuffer",
              onprogress: function b(a) {
                if (a.lengthComputable) {
                  d(a.loaded / a.total);
                }
              }
            }
          }).fail(function () {
            b(new Error());
          }).done(function (a) {
            c(a);
          });
        };
        Ca.$d = function (a, b, c) {
          function d(a) {
            var b = c.Id.Md;
            e.Rd(b, c.Od.bc(b).lc(a));
          }
          var e = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          var f;
          var g;
          var h = {};
          var i = function a() {
            for (var c = 0; c < b.length; c++) {
              try {
                window.URL.revokeObjectURL(b[c].Xd);
              } catch (a) {}
            }
            e.Sd(new Error());
          };
          var j = function a() {
            var b = l == 5 ? 0 : l;
            d(b / 4);
            h[f.ae] = new Ca.$C.be(f.Xd, g);
            k();
          };
          var k = function c() {
            try {
              if (l < b.length) {
                f = b[l];
                l++;
                h[f.ae] = new Ca.$C.be(f.resource.texture, f.resource.texture.baseTexture);
                c();
                return;
              }
              return e.ce(a, h);
            } catch (a) {
              console.error(a);
            }
          };
          var l = 0;
          k();
        };
        Ca.p = function (a, b) {
          a = a.split("|");
          Ca.pm[a[0]] = {
            p: a[1],
            i: b
          };
        };
        Ca.ae = function (a, b, c) {
          if (b.maV !== 1) {
            b.maV = 1;
            var d = b.ma.trim().match(y);
            if (d && c.dh.Fh[b.ae]) {
              var e = function c(a, b) {
                if (a.includes("_")) {
                  if (m["WEAR_W" + g + "_" + a]) {
                    return m["WEAR_W" + g + "_" + a].reference;
                  } else {
                    return b;
                  }
                }
                return _wwc.wearMap[a];
              };
              var f = d[3];
              var g = d[4];
              var h = d[5];
              var i = d[6];
              var j = d[7];
              var k = d[8];
              var l = d[9];
              var m = Ba.Lc.Xb().textureDict;
              var n = f === "B";
              if (h !== "000") {
                var o = "SKIN_S" + h.substring(0, 2) + "___" + h.substring(2);
                var q = m[o];
                c.dh.Fh[b.ae].Eh.Hh = !n ? parseInt(_wwc.skinMap[h]) : q ? o : c.dh.Fh[b.ae].Eh.Hh;
              }
              if (i !== "00") {
                c.dh.Fh[b.ae].Eh.ni = e(i, c.dh.Fh[b.ae].Eh.ni);
              }
              if (j !== "00") {
                c.dh.Fh[b.ae].Eh.oi = e(j, c.dh.Fh[b.ae].Eh.oi);
              }
              if (k !== "00") {
                c.dh.Fh[b.ae].Eh.pi = e(k, c.dh.Fh[b.ae].Eh.pi);
              }
              if (l !== "00") {
                c.dh.Fh[b.ae].Eh.qi = e(l, c.dh.Fh[b.ae].Eh.qi);
              }
              c.dh.Fh[b.ae].Eh.ma = ja(c.dh.Fh[b.ae].Eh.ma);
            }
          }
          b.ma = ja(b.ma);
        };
        Ca.Xp = function (a, b, c, d, e, f, g) {
          if (!_wwc.skinMap) {
            _wwc.skinMap = Ba.Lc.Xb().skinMap;
          }
          if (!_wwc.wearMap) {
            _wwc.wearMap = Ba.Lc.Xb().wearMap;
          }
          var h = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
          var i = Ba.Lc.Xb().hatDict[g] ? Ba.Lc.Xb().hatDict[g].id : g;
          var j = Ba.Lc.Xb().glassesDict[f] ? Ba.Lc.Xb().glassesDict[f].id : f;
          var k = Ba.Lc.Xb().glassesDict[e] ? Ba.Lc.Xb().mouthDict[e].id : e;
          var l = Ba.Lc.Xb().glassesDict[d] ? Ba.Lc.Xb().eyesDict[d].id : d;
          var m = "A";
          var n = "";
          var o = "__";
          var q = function c(a, b) {
            if (h.test(a)) {
              var d = h.exec(a);
              return {
                id: d[2],
                value: d[3],
                testRun: true
              };
            }
            return {
              id: null,
              value: null,
              testRun: false
            };
          };
          var r = {
            h: q(c, "h"),
            r: q(l, "r"),
            a: q(k, "a"),
            f: q(j, "f"),
            c: q(i, "c")
          };
          if (r.h.testRun) {
            n = r.h.id.substring(1);
            m = "B";
          }
          if (r.r.testRun || r.a.testRun || r.f.testRun || r.c.testRun) {
            o = (r.r.id || r.a.id || r.f.id || r.c.id).substring(1);
          }
          var s = function c(a, b) {
            if (r[b].value) {
              return r[b].value.padStart(b === "h" ? 3 : 2, "0");
            }
            if (!_wwc[b === "h" ? "testSkinMod" : "testWear"](a || 0)) {
              if (r[b].testRun) {
                return a.toString().padStart(b === "h" ? 3 : 2, "0");
              } else if (b === "h") {
                return "000";
              } else {
                return "00";
              }
            }
            return _wwc[b === "h" ? "skinMap" : "wearMap"][a] || (b === "h" ? "000" : "00");
          };
          var t = s(c, "h");
          var u = s(d, "r");
          var v = s(e, "a");
          var w = s(f, "f");
          var x = s(g, "c");
          var y = m + o + n + t.replace("__", "") + u + v + w + x;
          function z(a, b) {
            var c = "";
            var d = 0;
            for (var e = 0; e < a.length && d < C; e++) {
              var f = a[e];
              if (f.match(/[^\x00-\xff]/)) {
                if (d + 2 <= C) {
                  c += f;
                  d += 2;
                } else {
                  break;
                }
              } else {
                c += f;
                d++;
              }
            }
            c = c.padEnd(C, "_");
            var g = c + b;
            return g;
          }
          b = z(b, y);
          return b;
        };
        Ca.bgg = function (a) {
          var b = PIXI.BaseTexture.from(a || bbs.background || "/images/bg-pattern-pow2-ARENA.png");
          b.wrapMode = b.width > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
          var c = new PIXI.Texture(b);
          return c;
        };
        Ca.genereteTexture = function (a) {
          var b = 128;
          var c = 9;
          try {
            var d = function d() {
              var e = [];
              for (var f = 0; f < a.lines; f++) {
                lineContainer = [];
                for (var g = 0; g < c; g++) {
                  try {
                    var h = PIXI.Texture.from(a._d, {
                      x: g * b,
                      y: f * b,
                      width: b,
                      height: b
                    });
                    lineContainer.push(h);
                  } catch (a) {
                    console.log(f, g);
                    console.log(a);
                    return;
                  }
                }
                e.push(lineContainer);
              }
              return e;
            };
            return d();
          } catch (a) {
            return [];
          }
        };
        var Da = {
          headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
          shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
          speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
          curve: window.URL_CDN + "/sounds/yes_effect.mp3",
          loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
          top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
        };
        N.ref = ["speed", "curve"];
        for (var Ea in Da) {
          N[Ea] = new d.Howl({
            src: [Da[Ea]],
            html5: true,
            autoplay: Ea == "top1",
            loop: false
          });
        }
        var Fa = {
          "rotate(0deg)": 0,
          "rotate(90deg)": 1.5707963267948966,
          "rotate(180deg)": 3.141592653589793,
          "rotate(270deg)": 4.71238898038469,
          "rotate(360deg)": 0
        };
        var Ga = typeof Symbol == "function" && w(Symbol.iterator) == "symbol" ? function (a) {
          return w(a);
        } : function (a) {
          if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
            return "symbol";
          } else {
            return w(a);
          }
        };
        var Ha;
        window.addEventListener("load", function () {
          function a() {
            (function (a, b, c) {
              function d(a, b) {
                return (a === undefined ? "undefined" : Ga(a)) === b;
              }
              function e() {
                if (typeof b.createElement != "function") {
                  return b.createElement(arguments[0]);
                } else if (l) {
                  return b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]);
                } else {
                  return b.createElement.apply(b, arguments);
                }
              }
              var f = [];
              var g = [];
              var h = {
                _version: "3.3.1",
                _config: {
                  classPrefix: "",
                  enableClasses: true,
                  enableJSClass: true,
                  usePrefixes: true
                },
                _q: [],
                on: function c(a, b) {
                  var d = this;
                  setTimeout(function () {
                    b(d[a]);
                  }, 0);
                },
                addTest: function d(a, b, c) {
                  g.push({
                    name: a,
                    fn: b,
                    options: c
                  });
                },
                addAsyncTest: function b(a) {
                  g.push({
                    name: null,
                    fn: a
                  });
                }
              };
              var i = function a() {};
              i.prototype = h;
              i = new i();
              var j = false;
              try {
                j = "WebSocket" in a && a.WebSocket.CLOSING === 2;
              } catch (a) {}
              i.addTest("websockets", j);
              var k = b.documentElement;
              var l = k.nodeName.toLowerCase() === "svg";
              i.addTest("canvas", function () {
                var a = e("canvas");
                return !!a.getContext && !!a.getContext("2d");
              });
              i.addTest("canvastext", function () {
                return i.canvas !== false && typeof e("canvas").getContext("2d").fillText == "function";
              });
              (function () {
                var a;
                var b;
                var c;
                var e;
                var h;
                var j;
                var k;
                for (var l in g) {
                  if (g.hasOwnProperty(l)) {
                    a = [];
                    b = g[l];
                    if (b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length)) {
                      for (c = 0; c < b.options.aliases.length; c++) {
                        a.push(b.options.aliases[c].toLowerCase());
                      }
                    }
                    e = d(b.fn, "function") ? b.fn() : b.fn;
                    h = 0;
                    for (; h < a.length; h++) {
                      j = a[h];
                      k = j.split(".");
                      if (k.length === 1) {
                        i[k[0]] = e;
                      } else {
                        if (!!i[k[0]] && !(i[k[0]] instanceof Boolean)) {
                          i[k[0]] = new Boolean(i[k[0]]);
                        }
                        i[k[0]][k[1]] = e;
                      }
                      f.push((e ? "" : "no-") + k.join("-"));
                    }
                  }
                }
              })();
              (function (a) {
                var b = k.className;
                var c = i._config.classPrefix || "";
                if (l) {
                  b = b.baseVal;
                }
                if (i._config.enableJSClass) {
                  var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
                  b = b.replace(d, "$1" + c + "js$2");
                }
                if (i._config.enableClasses) {
                  b += " " + c + a.join(" " + c);
                  if (l) {
                    k.className.baseVal = b;
                  } else {
                    k.className = b;
                  }
                }
              })(f);
              delete h.addTest;
              delete h.addAsyncTest;
              for (var m = 0; m < i._q.length; m++) {
                i._q[m]();
              }
              a.Modernizr = i;
            })(window, document);
            return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
          }
          document.getElementById("game-wrap").style.display = "block";
          if (!a()) {
            document.getElementById("error-view").style.display = "block";
            return;
          }
          (function () {
            function a() {
              return Ba;
            }
            var b = {};
            var c = {};
            var d = {
              a: {
                r: window.runtimeHash,
                b: "https://gateway.wormate.io",
                c: "https://resources.wormate.io",
                d: "/images/linelogo-valday2023.png",
                e: "/images/guest-avatar-valday2023.png",
                f: "/images/confetti-valday2023.png",
                g: "/images/bg-event-pattern-valday2023.png"
              }
            };
            d.a.i = function () {
              var a = window.I18N_LANG;
              a ||= "en";
              return a;
            }();
            d.a.j = function () {
              var a = undefined;
              switch (d.a.i) {
                case "uk":
                  a = "uk_UA";
                  break;
                case "de":
                  a = "de_DE";
                  break;
                case "fr":
                  a = "fr_FR";
                  break;
                case "es":
                  a = "es_ES";
                  break;
                default:
                  a = "en_US";
              }
              return a;
            }();
            moment.locale(d.a.j);
            var e = function () {
              return {
                Container: PIXI.Container,
                BaseTexture: PIXI.BaseTexture,
                Texture: PIXI.Texture,
                Renderer: PIXI.Renderer,
                Graphics: PIXI.Graphics,
                Shader: PIXI.Shader,
                Rectangle: PIXI.Rectangle,
                Sprite: PIXI.Sprite,
                Text: PIXI.Text,
                Geometry: PIXI.Geometry,
                Mesh: PIXI.Mesh,
                v: {
                  z: PIXI.BLEND_MODES.ADD,
                  A: PIXI.BLEND_MODES.SCREEN,
                  B: PIXI.BLEND_MODES.MULTIPLY
                },
                C: {
                  D: PIXI.WRAP_MODES.REPEAT
                }
              };
            }();
            c.F = 6.283185307179586;
            c.G = Math.PI;
            d.H = function (a) {
              return window.I18N_MESSAGES[a];
            };
            d.I = function (a) {
              if (a[d.a.i]) {
                return a[d.a.i];
              } else if (a.en) {
                return a.en;
              } else {
                return a.x;
              }
            };
            d.J = function (a) {
              var b = (Math.floor(a) % 60).toString();
              var c = (Math.floor(a / 60) % 60).toString();
              var e = (Math.floor(a / 3600) % 24).toString();
              var f = Math.floor(a / 86400).toString();
              var g = d.H("util.time.days");
              var h = d.H("util.time.hours");
              var i = d.H("util.time.min");
              var j = d.H("util.time.sec");
              if (f > 0) {
                return f + " " + g + " " + e + " " + h + " " + c + " " + i + " " + b + " " + j;
              } else if (e > 0) {
                return e + " " + h + " " + c + " " + i + " " + b + " " + j;
              } else if (c > 0) {
                return c + " " + i + " " + b + " " + j;
              } else {
                return b + " " + j;
              }
            };
            d.K = function (a) {
              if (a.includes("href")) {
                return a.replaceAll("href", "target=\"_black\" href");
              } else {
                return a;
              }
            };
            d.L = function (a, b, c, d) {
              var e = document.createElement("script");
              var f = true;
              if (b !== undefined && b !== null) {
                if (b.id !== undefined) {
                  e.id = b.id;
                }
                if (b.async !== undefined && b.async) {
                  e.async = "async";
                }
                if (b.defer !== undefined && b.defer) {
                  e.defer = "defer";
                }
                if (b.crossorigin !== undefined) {
                  e.crossorigin = b.crossorigin;
                }
              }
              e.type = d ? "module" : "text/javascript";
              e.src = a;
              if (c) {
                e.onload = e.onreadystatechange = function () {
                  f = false;
                  try {
                    c();
                  } catch (a) {}
                  e.onload = e.onreadystatechange = null;
                };
              }
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
            };
            d.M = function (a, b) {
              var c = b;
              c.prototype = Object.create(a.prototype);
              c.prototype.constructor = c;
              c.parent = a;
              return c;
            };
            d.N = function (a) {
              a %= c.F;
              if (a < 0) {
                return a + c.F;
              } else {
                return a;
              }
            };
            d.O = function (a, b, c) {
              return d.P(c, a, b);
            };
            d.P = function (a, b, c) {
              if (a > c) {
                return c;
              } else if (a < b) {
                return b;
              } else if (Number.isFinite(a)) {
                return a;
              } else {
                return (b + c) * 0.5;
              }
            };
            d.Q = function (a, b, c, d) {
              if (b > a) {
                return Math.min(b, a + c * d);
              } else {
                return Math.max(b, a - c * d);
              }
            };
            d.R = function (a, b, c, d, e) {
              return b + (a - b) * Math.pow(1 - d, c / e);
            };
            d.S = function (a, b, c) {
              return a - (a - b) * c;
            };
            d.T = function (a, b, c, d) {
              var e = c;
              var f = b;
              var g = b + d;
              if (a == null) {
                throw new TypeError("this is null or not defined");
              }
              var h = a.length >>> 0;
              var i = e >> 0;
              var j = i < 0 ? Math.max(h + i, 0) : Math.min(i, h);
              var k = f >> 0;
              var l = k < 0 ? Math.max(h + k, 0) : Math.min(k, h);
              var m = g === undefined ? h : g >> 0;
              var n = m < 0 ? Math.max(h + m, 0) : Math.min(m, h);
              var o = Math.min(n - l, h - j);
              var q = 1;
              for (l < j && j < l + o && (q = -1, l += o - 1, j += o - 1); o > 0;) {
                if (l in a) {
                  a[j] = a[l];
                } else {
                  delete a[j];
                }
                l += q;
                j += q;
                o--;
              }
              return a;
            };
            d.U = function (a) {
              if (a.parent != null) {
                a.parent.removeChild(a);
              }
            };
            d.V = function (a, b) {
              return a + (b - a) * Math.random();
            };
            d.W = function (a) {
              return a[parseInt(Math.random() * a.length)];
            };
            d.X = function () {
              return Math.random().toString(36).substring(2, 15);
            };
            d.Y = function (a, b, c) {
              var d = (1 - Math.abs(c * 2 - 1)) * b;
              var e = d * (1 - Math.abs(a / 60 % 2 - 1));
              var f = c - d / 2;
              if (a >= 0 && a < 60) {
                return [f + d, f + e, f + 0];
              } else if (a >= 60 && a < 120) {
                return [f + e, f + d, f + 0];
              } else if (a >= 120 && a < 180) {
                return [f + 0, f + d, f + e];
              } else if (a >= 180 && a < 240) {
                return [f + 0, f + e, f + d];
              } else if (a >= 240 && a < 300) {
                return [f + e, f + 0, f + d];
              } else {
                return [f + d, f + 0, f + e];
              }
            };
            d.Z = function (a, b, c) {
              $.get(a).fail(b).done(c);
            };
            d.$ = function (a, b, c, d) {
              $.ajax({
                type: "GET",
                url: a,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function b(a) {
                    if (a.lengthComputable) {
                      d(a.loaded / a.total * 100);
                    }
                  }
                }
              }).fail(b).done(c);
            };
            d._ = function (a, b) {
              for (var c in a) {
                if (a.hasOwnProperty(c)) {
                  b(c, a[c]);
                }
              }
            };
            d.aa = function (a) {
              for (var b = a.length - 1; b > 0; b--) {
                var c = Math.floor(Math.random() * (b + 1));
                var d = a[b];
                a[b] = a[c];
                a[c] = d;
              }
              return a;
            };
            (function () {
              DataView.prototype.ba = function (a) {
                return this.getInt8(a);
              };
              DataView.prototype.ca = function (a) {
                return this.getInt16(a);
              };
              DataView.prototype.da = function (a) {
                return this.getInt32(a);
              };
              DataView.prototype.ea = function (a) {
                return this.getFloat32(a);
              };
              DataView.prototype.fa = function (a) {
                return this.getFloat64(a);
              };
            })();
            d.ga = function () {
              function a() {
                if (URLSERV_WORMWORLD) {
                  try {
                    ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                  } catch (a) {}
                  c(true);
                }
              }
              var b = false;
              var c = function a() {};
              var d = {};
              var e = "JDHnkHtYwyXyVgG9";
              $("#adbl-continue").click(function () {
                $("#" + e).fadeOut(500);
                c(false);
              });
              d.ha = function (a) {
                c = a;
                if (!b) {
                  try {
                    aiptag.cmd.player.push(function () {
                      aiptag.adplayer = new aipPlayer({
                        AD_WIDTH: 960,
                        AD_HEIGHT: 540,
                        AD_FULLSCREEN: true,
                        AD_CENTERPLAYER: false,
                        LOADING_TEXT: "loading advertisement",
                        PREROLL_ELEM: function a() {
                          return document.getElementById("1eaom01c3pxu9wd3");
                        },
                        AIP_COMPLETE: function b(a) {
                          c(true);
                          $("#1eaom01c3pxu9wd3").hide();
                          $("#" + e).hide();
                          try {
                            ga("send", "event", "preroll", window.runtimeHash + "_complete");
                          } catch (a) {}
                        },
                        AIP_REMOVE: function a() {}
                      });
                    });
                    b = true;
                  } catch (a) {}
                }
              };
              d.ia = function () {
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
                } catch (a) {}
                a();
              };
              return d;
            };
            d.ja = function (a, b) {
              var c = $("#" + a);
              var d = b;
              var e = {};
              var f = false;
              e.ha = function () {
                if (!f) {
                  c.empty();
                  c.append("<div id='" + d + "'></div>");
                  try {
                    try {
                      ga("send", "event", "banner", window.runtimeHash + "_display");
                    } catch (a) {}
                    aiptag.cmd.display.push(function () {
                      aipDisplayTag.display(d);
                    });
                    f = true;
                  } catch (a) {}
                }
              };
              e.ka = function () {
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_refresh");
                  } catch (a) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(d);
                  });
                } catch (a) {}
              };
              return e;
            };
            b.la = function () {
              function a(a, b, c, d, e, f, g, h, i, j, k) {
                this.ma = a;
                this.na = b;
                this.oa = null;
                this.pa = false;
                this.qa = c;
                this.ra = d;
                this.sa = e;
                this.ta = f;
                this.ua = g || (i || e) / 2;
                this.va = h || (j || f) / 2;
                this.wa = i || e;
                this.xa = j || f;
                this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
                this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
                this.Aa = this.sa / this.wa;
                if (k) {
                  this.ev = k;
                } else {
                  null;
                }
                this.Ba = this.ta / this.xa;
              }
              a.Ca = function () {
                return new a("", null, 0, 0, 0, 0, 0, 0, 0, 0);
              };
              a.Da = function (b, c, d, e) {
                return new a(b, c, d.x, d.y, d.w, d.h, d.px, d.py, d.pw, d.ph, e);
              };
              a.prototype.Ea = function () {
                if (this.pa) {
                  return this.oa;
                } else {
                  if (this.na != null) {
                    this.oa = new e.Texture(this.na, new e.Rectangle(this.qa, this.ra, this.sa, this.ta));
                  }
                  this.pa = true;
                  return this.oa;
                }
              };
              a.prototype.Fa = function () {
                if (this.oa != null) {
                  this.oa.destroy();
                }
              };
              return a;
            }();
            b.Ga = function () {
              function a(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, q, r, s) {
                this.Ha = a;
                this.Ia = b;
                this.Ja = c;
                this.Ka = d;
                this.La = e;
                this.Ma = f;
                this.Na = g;
                this.Oa = h;
                this.Pa = i;
                this.Qa = j;
                this.Ra = k;
                this.Sa = l;
                this.Ta = m;
                this.Ua = n;
                this.Va = o;
                this.Wa = q;
                this.Xa = r;
                this.Ya = s;
              }
              a.prototype.Fa = function () {
                for (var a = 0; a < this.Ha.length; a++) {
                  this.Ha[a].dispose();
                  this.Ha[a].destroy();
                }
                this.Ha = [];
                for (var b = 0; b < this.Ia.length; b++) {
                  this.Ia[b].Fa();
                }
                this.Ia = [];
              };
              a.Ca = function () {
                var c = new a.Za(b._a.$a, b._a.$a);
                var d = new a.ab("#ffffff", [b._a.$a], [b._a.$a]);
                return new a([], [], {}, c, {}, new a.bb(b._a.$a), {}, d, {}, new a.cb("", d, c), {}, new a.db([b._a.$a]), {}, new a.db([b._a.$a]), {}, new a.db([b._a.$a]), {}, new a.db([b._a.$a]));
              };
              a.eb = function (c, d, e, f) {
                var g = new a.Za(b._a.$a, b._a.$a);
                var h = new a.ab("#ffffff", [c], [d]);
                return new a([], [], {}, g, {}, new a.bb(b._a.$a), {}, h, {}, new a.cb("", h, g), {}, new a.db([e]), {}, new a.db([f]), {}, new a.db([b._a.$a]), {}, new a.db([b._a.$a]));
              };
              a.fb = function (b, c, e, f) {
                var g = {};
                d._(b.colorDict, function (a, b) {
                  g[a] = "#" + b;
                });
                var h = {};
                for (var i = 0; i < b.skinArrayDict.length; i++) {
                  var j = b.skinArrayDict[i];
                  h[j.id] = new a.ab(g[j.prime], j.base.map(function (a) {
                    return c[a];
                  }), j.glow.map(function (a, b) {
                    return c[a];
                  }));
                  if (j.glow[0] == "a_trans") {
                    h[j.id].vbb = c.a_black;
                  }
                }
                var k = undefined;
                var l = b.skinUnknown;
                try {
                  k = new a.ab(g[l.prime], l.base.map(function (a) {
                    return c[a];
                  }), l.glow.map(function (a) {
                    return c[a];
                  }));
                } catch (a) {}
                var m = {};
                d._(b.eyesDict, function (b, d) {
                  var e = parseInt(b);
                  m[e] = new a.db(d.base.map(function (a) {
                    return c[a.region];
                  }));
                });
                var n = new a.db(b.eyesUnknown.base.map(function (a) {
                  return c[a.region];
                }));
                var o = {};
                d._(b.mouthDict, function (b, d) {
                  var e = parseInt(b);
                  o[e] = new a.db(d.base.map(function (a) {
                    return c[a.region];
                  }));
                });
                var q = new a.db(b.mouthUnknown.base.map(function (a) {
                  return c[a.region];
                }));
                var r = {};
                d._(b.hatDict, function (b, d) {
                  var e = parseInt(b);
                  r[e] = new a.db(d.base.map(function (a) {
                    return c[a.region];
                  }));
                });
                var s = new a.db(b.hatUnknown.base.map(function (a) {
                  return c[a.region];
                }));
                var t = {};
                d._(b.glassesDict, function (b, d) {
                  var e = parseInt(b);
                  t[e] = new a.db(d.base.map(function (a) {
                    return c[a.region];
                  }));
                });
                var u = new a.db(b.glassesUnknown.base.map(function (a) {
                  return c[a.region];
                }));
                var v = {};
                d._(b.portionDict, function (b, d) {
                  b = parseInt(b);
                  v[b] = new a.Za(c[d.base], c[d.glow]);
                });
                var w = undefined;
                var x = b.portionUnknown;
                w = new a.Za(c[x.base], c[x.glow]);
                var y = {};
                d._(b.abilityDict, function (b, d) {
                  b = parseInt(b);
                  y[b] = new a.bb(c[d.base]);
                });
                var z = undefined;
                var A = b.abilityUnknown;
                z = new a.bb(c[A.base]);
                var B = {};
                d._(b.teamDict, function (b, d) {
                  b = parseInt(b);
                  B[b] = new a.cb(d.title, new a.ab(g[d.skin.prime], null, d.skin.glow.map(function (a) {
                    return c[a];
                  })), new a.Za(null, c[d.portion.glow]));
                });
                var C = new a.cb({}, k, w);
                return new a(e, f, v, w, y, z, h, k, B, C, m, n, o, q, r, s, t, u);
              };
              a.prototype.gb = function (a) {
                var c = d.aa(Object.keys(this.Na)).slice(0, a);
                var e = d.aa(Object.keys(this.Ra)).slice(0, a);
                var f = d.aa(Object.keys(this.Ta)).slice(0, a);
                var g = d.aa(Object.keys(this.Va)).slice(0, a);
                var h = d.aa(Object.keys(this.Xa)).slice(0, a);
                var i = [];
                for (var j = 0; j < a; j++) {
                  var k = c.length > 0 ? c[j % c.length] : 0;
                  var l = e.length > 0 ? e[j % e.length] : 0;
                  var m = f.length > 0 ? f[j % f.length] : 0;
                  var n = g.length > 0 ? g[j % g.length] : 0;
                  var o = h.length > 0 ? h[j % h.length] : 0;
                  i.push(new b.hb(k, l, m, n, o));
                }
                return i;
              };
              a.prototype.ib = function (a) {
                if (this.Na.hasOwnProperty(a)) {
                  return this.Na[a];
                } else {
                  return this.Oa;
                }
              };
              a.prototype.jb = function (a) {
                if (this.Pa.hasOwnProperty(a)) {
                  return this.Pa[a];
                } else {
                  return this.Qa;
                }
              };
              a.prototype.kb = function (a) {
                if (this.Ra.hasOwnProperty(a)) {
                  return this.Ra[a];
                } else {
                  return this.Sa;
                }
              };
              a.prototype.lb = function (a) {
                if (this.Ta.hasOwnProperty(a)) {
                  return this.Ta[a];
                } else {
                  return this.Ua;
                }
              };
              a.prototype.mb = function (a) {
                if (this.Xa.hasOwnProperty(a)) {
                  return this.Xa[a];
                } else {
                  return this.Ya;
                }
              };
              a.prototype.nb = function (a) {
                if (this.Va.hasOwnProperty(a)) {
                  return this.Va[a];
                } else {
                  return this.Wa;
                }
              };
              a.prototype.ob = function (a) {
                if (this.Ja.hasOwnProperty(a)) {
                  return this.Ja[a];
                } else {
                  return this.Ka;
                }
              };
              a.prototype.pb = function (a) {
                if (this.La.hasOwnProperty(a)) {
                  return this.La[a];
                } else {
                  return this.Ma;
                }
              };
              a.cb = function () {
                function a(a, b, c) {
                  this.qb = a;
                  this.rb = b;
                  this.sb = c;
                }
                return a;
              }();
              a.ab = function () {
                function a(a, b, c) {
                  this.tb = a;
                  this.ub = b;
                  this.vb = c;
                }
                return a;
              }();
              a.db = function () {
                function a(a) {
                  this.ub = a;
                }
                return a;
              }();
              a.Za = function () {
                function a(a, b) {
                  this.ub = a;
                  this.vb = b;
                }
                return a;
              }();
              a.bb = function () {
                function a(a) {
                  this.ub = a;
                }
                return a;
              }();
              return a;
            }();
            b._a = function () {
              function a() {
                var a = e.BaseTexture.from("/images/wear-ability.png");
                for (var c = 1; c < 10; c++) {
                  this["vb" + c] = new b.la("emoji_" + c, a, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
                }
                this.wb = new b.la("magnet_ability", a, 158, 86, 67, 124, 148, 63.5, 128, 128);
                this.xb = new b.la("velocity_ability", a, 158, 4, 87, 74, 203, 63.5, 128, 128);
                this.yb = new b.la("flex_ability", a, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
                var c = e.BaseTexture.from("/images/def-look.png");
                var d = new b.la("def_eyes", c, 0, 0, 42, 80, 75, 64, 128, 128);
                var f = new b.la("def_mouth", c, 46, 0, 20, 48, 109, 63, 128, 128);
                var g = new b.la("def_skin_glow", c, 70, 0, 32, 32, 0, 0, 0, 0);
                var h = new b.la("def_skin_base", c, 46, 52, 64, 64, 0, 0, 0, 0);
                var i = b.Ga.eb(h, g, d, f);
                this.zb = new b.Ab({}, i);
                this.Bb = -10000;
                this.Cb = -10000;
                this.Db = function () {
                  var a = window.document.createElement("canvas");
                  a.width = 80;
                  a.height = 80;
                  return {
                    Eb: a,
                    Fb: a.getContext("2d"),
                    oa: new e.Texture(e.BaseTexture.from(a))
                  };
                }();
                this.Gb = null;
                this.Hb = [];
              }
              a.$a = b.la.Ca();
              a.prototype.ha = function () {};
              a.prototype.Ib = function (a, c, d) {
                var e = this;
                var f = this.zb.Jb();
                if (f > 0 && Date.now() - this.Bb < 1200000) {
                  if (a != null) {
                    a();
                  }
                  return;
                }
                if (this.Gb != null && !this.Gb.Kb()) {
                  if (Date.now() - this.Bb < 300000) {
                    if (a != null) {
                      a();
                    }
                    return;
                  }
                  this.Gb.Lb();
                  this.Gb = null;
                }
                var g = new b.Mb(f);
                g.Nb(function (a, b) {
                  if (g === e.Gb && d != null) {
                    d(a, b);
                  }
                });
                g.Ob(function (a) {
                  if (g === e.Gb && c != null) {
                    c(a);
                  }
                });
                g.Pb(function () {
                  if (g === e.Gb && c != null) {
                    c(new Error());
                  }
                });
                g.Qb(function () {
                  if (g === e.Gb && a != null) {
                    a();
                  }
                });
                g.Rb(function (b) {
                  if (g === e.Gb) {
                    e.Cb = Date.now();
                    e.Gb = null;
                    e.Sb();
                    e.zb.Ub().Fa();
                    e.zb = b;
                    if (a != null) {
                      a();
                    }
                    e.Tb();
                    return;
                  }
                  try {
                    b.Ub().Fa();
                  } catch (a) {}
                });
                g.Vb();
                this.Bb = Date.now();
                this.Gb = g;
              };
              a.prototype.Sb = function () {};
              a.prototype.Wb = function () {
                return this.zb.Jb() > 0;
              };
              a.prototype.Xb = function () {
                return this.zb.Yb();
              };
              a.prototype.Zb = function () {
                return this.Db;
              };
              a.prototype.$b = function (a) {
                this.Hb.push(a);
              };
              a.prototype.Tb = function () {
                for (var a = 0; a < this.Hb.length; a++) {
                  this.Hb[a]();
                }
              };
              a.prototype.Ub = function () {
                return this.zb.Ub();
              };
              return a;
            }();
            b._b = function () {
              function a(a) {
                this.ac = a;
              }
              a.prototype.bc = function (a) {
                return this.ac[a];
              };
              a.cc = function () {
                function b() {
                  this.dc = [];
                }
                b.prototype.ec = function (b, c) {
                  for (var d = 0; d < this.dc.length; d++) {
                    if (this.dc[d].fc === b) {
                      throw new Error();
                    }
                  }
                  this.dc.push(new a.gc(b, c));
                  return this;
                };
                b.prototype.hc = function () {
                  var b = 0;
                  for (var c = 0; c < this.dc.length; c++) {
                    b += this.dc[c].ic;
                  }
                  var d = {};
                  var e = 0;
                  for (var f = 0; f < this.dc.length; f++) {
                    var g = this.dc[f];
                    g.ic = g.ic / b;
                    g.jc = e;
                    g.kc = e + g.ic;
                    e = g.kc;
                    d[g.fc] = g;
                  }
                  return new a(d);
                };
                return b;
              }();
              a.gc = function () {
                function a(a, b) {
                  this.fc = a;
                  this.ic = b;
                  this.jc = 0;
                  this.kc = 0;
                }
                a.prototype.lc = function (a) {
                  return this.jc + (this.kc - this.jc) * a;
                };
                return a;
              }();
              return a;
            }();
            b.WormSpriteTree = function () {
              function c() {
                this.nc = new e.Container();
                this.nc.sortableChildren = true;
                this.oc = new y();
                this.oc.zIndex = f * ((g + 1) * 2 + 1 + 3);
                this.pc = 0;
                this.qc = new Array(g);
                this.qc[0] = this.rc(0, new b.sc(), new b.sc());
                for (var a = 1; a < g; a++) {
                  this.qc[a] = this.rc(a, new b.sc(), new b.sc());
                }
                this.tc = 0;
                this.uc = 0;
                this.vc = 0;
              }
              var f = 0.001;
              var g = 797;
              var h = 3.14159;
              var i = -0.06640625;
              var j = 0.84375;
              var k = 0.2578125;
              var l = -0.03515625;
              var m = -0.0625;
              var n = 0.5625;
              var o = i * 3 + j;
              var q = k - i * 3;
              var r = i + l;
              var s = 0.375;
              var t = 0.75;
              var u = m + m;
              var v = l * 3 + k;
              var w = j - l * 3;
              var x = l + i;
              c.wc = g;
              c.prototype.rc = function (a, b, c) {
                var d = new z(b, c);
                b.xc.zIndex = f * ((g - a) * 2 + 1 + 3);
                c.xc.zIndex = f * ((g - a) * 2 - 2 + 3);
                return d;
              };
              c.prototype.yc = function (a, c, d, e, f, g, h, i) {
                var j = d.ub;
                var k = a === b.Ac.zc ? c.rb.vb : d.vb;
                if (j.length > 0 && k.length > 0) {
                  for (var l = 0; l < this.qc.length; l++) {
                    this.qc[l].Cc.Bc(j[l % j.length], l % j.length, l);
                    this.qc[l].Dc.Bc(l == 0 && d.vbb ? d.vbb : k[l % k.length], l % j.length, l);
                    this.qc[l].Cc.Ec(i);
                    this.qc[l].Dc.Ec(i);
                  }
                }
                this.oc.yc(e, f, g, h);
              };
              var y = function () {
                var c = d.M(e.Container, function () {
                  e.Container.call(this);
                  this.sortableChildren = true;
                  this.Fc = [];
                  this.Gc = [];
                  this.Hc = [];
                  this.Ic = [];
                  this.Jc = new e.Container();
                  this.Kc = [];
                  this.message = new e.Container();
                  for (var c = 0; c < 4; c++) {
                    var d = new b.sc();
                    d.Bc(a().Lc.wb);
                    this.Jc.addChild(d.xc);
                    this.Kc.push(d);
                  }
                  this.message.zIndex = 0.0012;
                  this.addChild(this.message);
                  this.VcUn();
                  this.Jc.zIndex = 0.0011;
                  this.addChild(this.Jc);
                  this.Mc();
                  this.Nc = new b.sc();
                  this.Nc.Bc(a().Lc.xb);
                  this.Nc.xc.zIndex = 0.001;
                  this.addChild(this.Nc.xc);
                  this.Oc();
                });
                c.prototype.yc = function (a, b, c, d) {
                  this.Pc(0.002, this.Fc, a.ub);
                  this.Pc(0.003, this.Gc, b.ub);
                  this.Pc(0.004, this.Ic, d.ub);
                  this.Pc(0.005, this.Hc, c.ub);
                };
                c.prototype.Pc = function (a, c, d) {
                  while (d.length > c.length) {
                    var e = new b.sc();
                    c.push(e);
                    this.addChild(e.Qc());
                  }
                  while (d.length < c.length) {
                    c.pop().Rc();
                  }
                  var f = a;
                  for (var g = 0; g < d.length; g++) {
                    f += 0.0001;
                    var h = c[g];
                    h.Bc(d[g]);
                    h.xc.zIndex = f;
                  }
                };
                c.prototype.Sc = function (a, b, c, d) {
                  this.visible = true;
                  this.position.set(a, b);
                  this.rotation = d;
                  for (var e = 0; e < this.Fc.length; e++) {
                    this.Fc[e].Tc(c);
                  }
                  for (var f = 0; f < this.Gc.length; f++) {
                    this.Gc[f].Tc(c);
                  }
                  for (var g = 0; g < this.Hc.length; g++) {
                    this.Hc[g].Tc(c);
                  }
                  for (var h = 0; h < this.Ic.length; h++) {
                    this.Ic[h].Tc(c);
                  }
                };
                c.prototype.Uc = function () {
                  this.visible = false;
                };
                c.prototype.VcAc = function (a, b, c, d, e) {
                  this.message.visible = true;
                  this.Mc2.Tc(b);
                };
                c.prototype.VcUn = function () {
                  this.message.visible = false;
                };
                c.prototype.Vc = function (a, b, c, d) {
                  this.Jc.visible = true;
                  var e = c / 1000;
                  var f = 1 / this.Kc.length;
                  for (var g = 0; g < this.Kc.length; g++) {
                    var h = 1 - (e + f * g) % 1;
                    this.Kc[g].xc.alpha = 1 - h;
                    this.Kc[g].Tc(b * (0.5 + h * 4.5));
                  }
                };
                c.prototype.Mc = function () {
                  this.Jc.visible = false;
                };
                c.prototype.Wc = function (a, b, c, e) {
                  this.Nc.xc.visible = true;
                  this.Nc.xc.alpha = d.Q(this.Nc.xc.alpha, a.Xc ? 0.9 : 0.2, e, 0.0025);
                  this.Nc.Tc(b);
                };
                c.prototype.WXX = function (a, b, c, e) {
                  this.Nc.xc.visible = true;
                  this.Nc.xc.alpha = d.Q(this.Nc.xc.alpha, a.Xc ? 0.9 : 0.2, e, 0.0025);
                  this.Nc.Tc(b);
                };
                c.prototype.Oc = function () {
                  this.Nc.xc.visible = false;
                };
                return c;
              }();
              c.prototype.Yc = function (a) {
                return this.uc + this.vc * Math.sin(a * h - this.tc);
              };
              c.prototype.Zc = function (a, c, e, f) {
                var g = a.$c * 2;
                var h = a._c;
                var y = a.ad;
                var A = y * 4 - 3;
                var B = A;
                this.tc = c / 400 * Math.PI;
                this.uc = g * 1.5;
                this.vc = g * 0.15 * a.bd;
                var C;
                var D;
                var E;
                var F;
                var G;
                var H;
                var I;
                var J;
                D = h[0];
                H = h[1];
                if (f(D, H)) {
                  E = h[2];
                  I = h[3];
                  F = h[4];
                  J = h[5];
                  var K = Math.atan2(J + H * 2 - I * 3, F + D * 2 - E * 3);
                  this.oc.Sc(D, H, g, K);
                  this.qc[0].Sc(D, H, g, this.Yc(0), K);
                  this.qc[1].Sc(o * D + q * E + r * F, o * H + q * I + r * J, g, this.Yc(1), z.cd(this.qc[0], this.qc[2]));
                  this.qc[2].Sc(s * D + t * E + u * F, s * H + t * I + u * J, g, this.Yc(2), z.cd(this.qc[1], this.qc[3]));
                  this.qc[3].Sc(v * D + w * E + x * F, v * H + w * I + x * J, g, this.Yc(3), z.cd(this.qc[2], this.qc[4]));
                } else {
                  this.oc.Uc();
                  this.qc[0].Uc();
                  this.qc[1].Uc();
                  this.qc[2].Uc();
                  this.qc[3].Uc();
                }
                var L = 4;
                var M = 2;
                var N = y * 2 - 4;
                while (M < N) {
                  D = h[M];
                  H = h[M + 1];
                  if (f(D, H)) {
                    C = h[M - 2];
                    G = h[M - 1];
                    E = h[M + 2];
                    I = h[M + 3];
                    F = h[M + 4];
                    J = h[M + 5];
                    this.qc[L].Sc(D, H, g, this.Yc(L), z.cd(this.qc[L - 1], this.qc[L + 1]));
                    L++;
                    this.qc[L].Sc(i * C + j * D + k * E + l * F, i * G + j * H + k * I + l * J, g, this.Yc(L), z.cd(this.qc[L - 1], this.qc[L + 1]));
                    L++;
                    this.qc[L].Sc(m * C + n * D + n * E + m * F, m * G + n * H + n * I + m * J, g, this.Yc(L), z.cd(this.qc[L - 1], this.qc[L + 1]));
                    L++;
                    this.qc[L].Sc(l * C + k * D + j * E + i * F, l * G + k * H + j * I + i * J, g, this.Yc(L), z.cd(this.qc[L - 1], this.qc[L + 1]));
                    L++;
                  } else {
                    this.qc[L].Uc();
                    L++;
                    this.qc[L].Uc();
                    L++;
                    this.qc[L].Uc();
                    L++;
                    this.qc[L].Uc();
                    L++;
                  }
                  M += 2;
                }
                D = h[y * 2 - 4];
                H = h[y * 2 - 3];
                if (f(D, H)) {
                  C = h[y * 2 - 6];
                  G = h[y * 2 - 5];
                  E = h[y * 2 - 2];
                  I = h[y * 2 - 1];
                  this.qc[A - 5].Sc(D, H, g, this.Yc(A - 5), z.cd(this.qc[A - 6], this.qc[A - 4]));
                  this.qc[A - 4].Sc(x * C + w * D + v * E, x * G + w * H + v * I, g, this.Yc(A - 4), z.cd(this.qc[A - 5], this.qc[A - 3]));
                  this.qc[A - 3].Sc(u * C + t * D + s * E, u * G + t * H + s * I, g, this.Yc(A - 3), z.cd(this.qc[A - 4], this.qc[A - 2]));
                  this.qc[A - 2].Sc(r * C + q * D + o * E, r * G + q * H + o * I, g, this.Yc(A - 2), z.cd(this.qc[A - 3], this.qc[A - 1]));
                  this.qc[A - 1].Sc(E, I, g, this.Yc(A - 1), z.cd(this.qc[A - 2], this.qc[A - 1]));
                } else {
                  this.qc[A - 5].Uc();
                  this.qc[A - 4].Uc();
                  this.qc[A - 3].Uc();
                  this.qc[A - 2].Uc();
                  this.qc[A - 1].Uc();
                }
                if (this.pc === 0 && B > 0) {
                  this.nc.addChild(this.oc);
                }
                if (this.pc > 0 && B === 0) {
                  d.U(this.oc);
                }
                while (this.pc < B) {
                  this.nc.addChild(this.qc[this.pc].Cc.Qc());
                  this.nc.addChild(this.qc[this.pc].Dc.Qc());
                  this.pc += 1;
                }
                while (this.pc > B) {
                  this.pc -= 1;
                  this.qc[this.pc].Dc.Rc();
                  this.qc[this.pc].Cc.Rc();
                }
                var O = a.dd[b.fd.ed];
                if (this.qc[0].gd() && O && O.hd) {
                  this.oc.Vc(a, g, c, e);
                } else {
                  this.oc.Mc();
                }
                var P = a.dd[b.fd.jd];
                if (this.qc[0].gd() && P && P.hd) {
                  this.oc.Wc(a, g, c, e);
                } else {
                  this.oc.Oc();
                }
              };
              var z = function () {
                function a(a, b) {
                  this.Cc = a;
                  this.Cc.kd(false);
                  this.Dc = b;
                  this.Dc.kd(false);
                  this.ev = null;
                }
                a.prototype.Sc = function (a, b, c, d, e) {
                  this.Cc.kd(true);
                  this.Cc.ld(a, b);
                  this.Cc.Tc(c);
                  this.Cc.md(e);
                  this.Dc.kd(true);
                  this.Dc.ld(a, b);
                  this.Dc.Tc(d);
                  this.Dc.md(e);
                };
                a.prototype.Uc = function () {
                  this.Cc.kd(false);
                  this.Dc.kd(false);
                };
                a.prototype.gd = function () {
                  return this.Cc.gd();
                };
                a.cd = function (a, b) {
                  return Math.atan2(a.Cc.xc.position.y - b.Cc.xc.position.y, a.Cc.xc.position.x - b.Cc.xc.position.x);
                };
                return a;
              }();
              return c;
            }();
            b.fd = function () {
              function a(a) {
                this.nd = a;
                this.hd = false;
                this.od = 1;
              }
              a.jd = 0;
              a.pd = 1;
              a.ed = 2;
              a.qd = 6;
              a.rd = 3;
              a.sd = 4;
              a.td = 5;
              return a;
            }();
            b.Ab = function () {
              function a(a, b) {
                this.ud = a;
                this.vd = b;
              }
              a.wd = new a({}, b.Ga.Ca());
              a.prototype.Jb = function () {
                return this.ud.revision;
              };
              a.prototype.Yb = function () {
                Ca.Jb();
                return this.ud;
              };
              a.prototype.Ub = function () {
                return this.vd;
              };
              return a;
            }();
            b.Mb = function () {
              function a(b) {
                this.xd = function () {
                  ++a.yd;
                  return function (a, b) {};
                }();
                this.zd = b;
                this.Ad = null;
                this.Bd = null;
                this.Cd = null;
                this.Dd = null;
                this.Ed = null;
                this.Fd = false;
                this.Gd = false;
                this.Hd = false;
              }
              a.Id = {
                Jd: "0x0",
                Kd: "0x1",
                Ld: "0x2",
                Md: "0x3",
                Nd: "0x4"
              };
              a.yd = 100000;
              a.Od = new b._b.cc().ec(a.Id.Jd, 1).ec(a.Id.Kd, 10).ec(a.Id.Ld, 50).ec(a.Id.Md, 15).ec(a.Id.Nd, 5).hc();
              a.prototype.Rb = function (a) {
                this.Ad = a;
              };
              a.prototype.Qb = function (a) {
                this.Bd = a;
              };
              a.prototype.Ob = function (a) {
                this.Cd = a;
              };
              a.prototype.Pb = function (a) {
                this.Dd = a;
              };
              a.prototype.Nb = function (a) {
                this.Ed = a;
              };
              a.prototype.Kb = function () {
                return this.Hd;
              };
              a.prototype.Lb = function () {
                this.Fd = true;
              };
              a.prototype.Vb = function () {
                if (!this.Gd) {
                  this.Gd = true;
                  if (this.Fd) {
                    this.Pd();
                    return;
                  }
                  this.Qd();
                }
              };
              a.prototype.Qd = function () {
                function b(b) {
                  var d = a.Id.Jd;
                  c.Rd(d, a.Od.bc(d).lc(b));
                }
                var c = this;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                $.ajax({
                  type: "GET",
                  url: d.a.c + "/dynamic/assets/revision.json",
                  xhrFields: {
                    onprogress: function c(a) {
                      if (a.lengthComputable) {
                        b(a.loaded / a.total);
                      }
                    }
                  }
                }).fail(function () {
                  c.Sd(new Error());
                }).done(function (a) {
                  if (a <= c.zd) {
                    c.Td();
                    return;
                  }
                  c.Ud();
                });
              };
              a.prototype.Ud = v(t().mark(function b() {
                var c;
                var e;
                var f;
                return t().wrap(function g(b) {
                  while (1) {
                    switch (b.prev = b.next) {
                      case 0:
                        c = function c(b) {
                          var d = a.Id.Kd;
                          e.Rd(d, a.Od.bc(d).lc(b));
                        };
                        e = this;
                        if (!this.Fd) {
                          b.next = 4;
                          break;
                        }
                        return b.abrupt("return", void this.Pd());
                      case 4:
                        b.next = 6;
                        return fetch(URLSERV_WORMWORLD + "/version").then(function () {
                          var a = v(t().mark(function b(a) {
                            return t().wrap(function c(b) {
                              while (1) {
                                switch (b.prev = b.next) {
                                  case 0:
                                    return b.abrupt("return", a.text());
                                  case 1:
                                  case "end":
                                    return b.stop();
                                }
                              }
                            }, b);
                          }));
                          return function (b) {
                            return a.apply(this, arguments);
                          };
                        }()).catch(function () {
                          return 0;
                        });
                      case 6:
                        f = b.sent;
                        localStorage.setItem("wwc_version", f);
                        if (O != f) {
                          $.ajax({
                            type: "GET",
                            url: d.a.c + "/dynamic/assets/registry.json",
                            xhrFields: {
                              onprogress: function b(a) {
                                if (a.lengthComputable) {
                                  c(a.loaded / a.total);
                                }
                              }
                            }
                          }).fail(function () {
                            e.Sd(new Error());
                          }).done(function () {
                            var b = v(t().mark(function c(b) {
                              return t().wrap(function d(c) {
                                while (1) {
                                  switch (c.prev = c.next) {
                                    case 0:
                                      c.next = 2;
                                      return Ca.registry(b);
                                    case 2:
                                      b = c.sent;
                                      localStorage.setItem("wwc_config", JSON.stringify(b));
                                      e.Vd(b, a);
                                    case 5:
                                    case "end":
                                      return c.stop();
                                  }
                                }
                              }, c);
                            }));
                            return function (a) {
                              return b.apply(this, arguments);
                            };
                          }());
                        } else {
                          try {
                            Q = JSON.parse(Q);
                            c(1);
                            e.Vd(Q, a);
                          } catch (a) {
                            localStorage.removeItem("wwc_version");
                            localStorage.removeItem("wwc_config");
                            window.location.reload();
                          }
                        }
                      case 9:
                      case "end":
                        return b.stop();
                    }
                  }
                }, b, this);
              }));
              a.prototype.Vd = Ca.Vd || function (b) {
                function c(b) {
                  var c = a.Id.Ld;
                  e.Rd(c, a.Od.bc(c).lc(b));
                }
                var e = this;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                var f = [];
                var g = [];
                var h = 0;
                for (var i in b.textureDict) {
                  if (b.textureDict.hasOwnProperty(i)) {
                    var j = b.textureDict[i];
                    var k = d.a.c + j.relativePath;
                    var l = j.fileSize;
                    var m = j.sha256;
                    var n = new a.Wd(i, k, l, m);
                    f.push(n);
                    g.push(n);
                    h += l;
                  }
                }
                var o;
                var q = 0;
                var r = function b(a) {
                  for (var c = 0; c < g.length; c++) {
                    try {
                      window.URL.revokeObjectURL(g[c].Xd);
                    } catch (a) {}
                  }
                  e.Sd(a);
                };
                var s = function b(a) {
                  var d = Math.floor(o.Yd * a);
                  c((q + d) / h);
                };
                var t = function b(a) {
                  var c = new Blob([a]);
                  o.Xd = window.URL.createObjectURL(c);
                  q += o.Yd;
                  u();
                };
                var u = function a() {
                  if (v < g.length) {
                    o = g[v++];
                    e.Zd(o, r, t, s);
                    return;
                  }
                  setTimeout(function () {
                    return e.$d(b, f);
                  }, 0);
                };
                var v = 0;
                u();
              };
              a.prototype.Zd = Ca.Zd || function (a, b, c, d) {
                $.ajax({
                  type: "GET",
                  url: a._d,
                  xhrFields: {
                    responseType: "arraybuffer",
                    onprogress: function b(a) {
                      if (a.lengthComputable) {
                        d(a.loaded / a.total);
                      }
                    }
                  }
                }).fail(function () {
                  b(new Error());
                }).done(function (a) {
                  c(a);
                });
              };
              a.prototype.$d = Ca.$d || function (c, d) {
                function e(b) {
                  var c = a.Id.Md;
                  f.Rd(c, a.Od.bc(c).lc(b));
                }
                var f = this;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                var g;
                var h;
                var i = {};
                var j = function a() {
                  for (var b = 0; b < d.length; b++) {
                    try {
                      window.URL.revokeObjectURL(d[b].Xd);
                    } catch (a) {}
                  }
                  f.Sd(new Error());
                };
                var k = function a() {
                  e(m / d.length);
                  i[g.ae] = new b.be(g.Xd, h);
                  l();
                };
                var l = function a() {
                  if (m < d.length) {
                    g = d[m++];
                    h = PIXI.BaseTexture.from(g.Xd);
                    h.on("error", j);
                    h.on("loaded", k);
                    return;
                  }
                  setTimeout(function () {
                    return f.ce(c, i);
                  }, 0);
                };
                var m = 0;
                l();
              };
              a.prototype.ce = function (c, e) {
                function f(b) {
                  var c = a.Id.Nd;
                  g.Rd(c, a.Od.bc(c).lc(b));
                }
                var g = this;
                var h = {};
                var i = 0;
                var j = Object.values(c.regionDict).length;
                d._(c.regionDict, function (a, c) {
                  var d = null;
                  try {
                    var g = null;
                    if (e[c.texture].ev) {
                      g = e[c.texture].ev;
                    }
                    var k = c.texture + ":" + a;
                    d = b.la.Da(k, e[c.texture].oa, c, g);
                    h[a] = d;
                    if (++i % 10 == 0) {
                      f(i / j);
                    }
                  } catch (a) {}
                });
                var k = Object.values(e).map(function (a) {
                  return a.oa;
                });
                var l = Object.values(h);
                var m = new b.Ab(c, b.Ga.fb(c, h, k, l));
                setTimeout(function () {
                  return g.de(m);
                }, 0);
              };
              a.Wd = function () {
                function a(a, b, c, d) {
                  this.ae = a;
                  this._d = b;
                  this.Yd = c;
                  this.ee = d;
                  this.Xd = "";
                }
                return a;
              }();
              a.prototype.de = function (a) {
                if (this.Hd) {
                  a.Ub().Fa();
                  return;
                }
                this.Hd = true;
                var b = this;
                setTimeout(function () {
                  return b.Ad(a);
                }, 0);
              };
              a.prototype.Td = function () {
                if (!this.Hd) {
                  this.Hd = true;
                  var a = this;
                  setTimeout(function () {
                    return a.Bd();
                  }, 0);
                }
              };
              a.prototype.Sd = function (a) {
                if (!this.Hd) {
                  this.Hd = true;
                  var b = this;
                  setTimeout(function () {
                    return b.Cd(a);
                  }, 0);
                }
              };
              a.prototype.Pd = function () {
                if (!this.Hd) {
                  this.Hd = true;
                  var a = this;
                  setTimeout(function () {
                    return a.Dd();
                  }, 0);
                }
              };
              a.prototype.Rd = function (a, b) {
                if (!this.Hd && !this.Fd) {
                  var c = this;
                  return c.Ed(a, b);
                }
              };
              return a;
            }();
            b.fe = function () {
              return {};
            }();
            b.ge = function () {
              function c() {
                this.he = b.ge.je.ie;
                this.ke = false;
                this.le = false;
                this.me = null;
                this.ne = null;
              }
              c.prototype.ha = function () {};
              c.prototype.oe = function (a) {
                this.le = a;
              };
              c.prototype.pe = function (a) {
                this.he = a;
                this.qe();
              };
              c.prototype.re = function (a) {
                this.ke = a;
                this.qe();
              };
              c.prototype.qe = function () {};
              c.prototype.se = function (b, c) {
                if (!a().Lc.Wb()) {
                  return null;
                }
                var d = b[c];
                if (d == null || d.length === 0) {
                  return null;
                } else {
                  return d[Math.floor(Math.random() * d.length)].cloneNode();
                }
              };
              c.prototype.te = function (a, b, c) {
                if (this.le && c > 0) {
                  var d = this.se(a, b);
                  if (d != null) {
                    d.volume = Math.min(1, c);
                    d.play();
                  }
                }
              };
              c.prototype.ue = function (a, b) {
                if (this.he.ve) {
                  this.te(app.xe.we, a, b);
                }
              };
              c.prototype.ye = function (a, b) {
                if (this.he.ze) {
                  this.te(app.xe.Ae, a, b);
                }
              };
              c.prototype.Be = function () {};
              c.prototype.Ce = function () {};
              c.prototype.De = function () {};
              c.prototype.Ee = function () {};
              c.prototype.Fe = function () {};
              c.prototype.Ge = function () {};
              c.prototype.He = function (a, b, c) {};
              c.prototype.Ie = function (a) {};
              c.prototype.Je = function (a) {};
              c.prototype.Ke = function (a) {};
              c.prototype.Le = function (a) {};
              c.prototype.Me = function (a) {};
              c.prototype.Ne = function (a) {};
              c.prototype.Oe = function (a) {};
              c.prototype.Pe = function (a) {};
              c.prototype.Qe = function (a) {};
              c.prototype.Re = function (a) {};
              c.prototype.Se = function (a) {};
              c.prototype.Te = function (a) {};
              c.prototype.Ue = function (a) {};
              c.prototype.Ve = function (a) {};
              c.prototype.We = function (a, b) {};
              c.prototype.Xe = function (a) {};
              c.prototype.Ye = function (a, b, c) {};
              c.je = {
                ie: {
                  Ze: false,
                  $e: false,
                  ze: true,
                  ve: false
                },
                _e: {
                  Ze: false,
                  $e: true,
                  ze: true,
                  ve: false
                },
                af: {
                  Ze: true,
                  $e: false,
                  ze: false,
                  ve: true
                },
                bf: {
                  Ze: false,
                  $e: false,
                  ze: true,
                  ve: false
                },
                cf: {
                  Ze: false,
                  $e: false,
                  ze: false,
                  ve: false
                }
              };
              return c;
            }();
            b.GameView = function () {
              function b(b) {
                var c = a();
                this.ef = b;
                this.Eb = b.get()[0];
                this.ff = 1;
                this.gf = 1;
                this.hf = null;
                this.lf = new e.Renderer({
                  view: b.get()[0],
                  backgroundColor: 0,
                  transparent: false,
                  antialias: false,
                  autoResize: true
                });
                this.mf = new e.Container();
                this.mf.sortableChildren = true;
                this.nf = new e.Container();
                this.nf.zIndex = 0;
                this.mf.addChild(this.nf);
                this.uf = new e.Container();
                this.uf.zIndex = 3;
                this.mf.addChild(this.uf);
                this.vf = [];
                this.wf = [];
                this.xf = [];
                this.ha();
              }
              var f = 0;
              var g = 5;
              var h = 40;
              var i = [{
                yf: 1,
                zf: 0.15,
                Af: 0
              }, {
                yf: 1,
                zf: 0.125,
                Af: 0
              }, {
                yf: 1,
                zf: 0.1,
                Af: 0
              }, {
                yf: 1,
                zf: 0.075,
                Af: 0
              }, {
                yf: 1,
                zf: 0.05,
                Af: 0
              }, {
                yf: 1,
                zf: 0.025,
                Af: 0
              }, {
                yf: 1,
                zf: 0,
                Af: 0.025
              }, {
                yf: 1,
                zf: 0,
                Af: 0.05
              }, {
                yf: 1,
                zf: 0,
                Af: 0.075
              }, {
                yf: 1,
                zf: 0,
                Af: 0.1
              }, {
                yf: 1,
                zf: 0,
                Af: 0.125
              }, {
                yf: 1,
                zf: 0,
                Af: 0.15
              }];
              b.prototype.ha = function () {
                var b = a();
                this.lf.backgroundColor = f;
                this.vf = new Array(i.length);
                for (var g = 0; g < this.vf.length; g++) {
                  this.vf[g] = new e.Sprite();
                  this.vf[g].texture = b.xe.Bf;
                  this.vf[g].anchor.set(0.5);
                  this.nf.addChild(this.vf[g]);
                }
                this.wf = new Array(b.xe.Cf.length);
                for (var h = 0; h < this.wf.length; h++) {
                  this.wf[h] = new e.Sprite();
                  this.wf[h].texture = b.xe.Cf[h];
                  this.wf[h].anchor.set(0.5);
                  this.uf.addChild(this.wf[h]);
                }
                this.xf = new Array(this.wf.length);
                for (var j = 0; j < this.xf.length; j++) {
                  var k = [0.6, 1, 0.5];
                  this.xf[j] = {
                    Df: d.V(0, c.F),
                    Ef: d.V(0.09, 0.16) * 0.66,
                    Ff: d.V(0, 1),
                    Gf: d.V(0, 1),
                    Hf: 0,
                    yf: k[0],
                    zf: k[1],
                    Af: k[2]
                  };
                }
                this.If();
                this.Jf();
              };
              b.hd = false;
              b.Kf = function (a) {
                b.hd = a;
              };
              b.prototype.Lf = function (a) {
                this.hf.Kf(a);
              };
              b.prototype.Jf = function () {
                var a = window.devicePixelRatio ? window.devicePixelRatio : 1;
                this.ff = this.ef.width();
                this.gf = this.ef.height();
                this.lf.resize(this.ff, this.gf);
                this.lf.resolution = a;
                this.Eb.width = a * this.ff;
                this.Eb.height = a * this.gf;
                var b = Math.max(this.ff, this.gf) * 0.6;
                for (var c = 0; c < this.vf.length; c++) {
                  this.vf[c].width = b;
                  this.vf[c].height = b;
                }
              };
              b.prototype.Nf = function (a, e) {
                if (b.hd) {
                  var f = a / 1000;
                  var g = e / 1000;
                  var h = this.ef.width();
                  var j = this.ef.height();
                  for (var k = 0; k < this.vf.length; k++) {
                    var l = i[k % i.length];
                    var m = this.vf[k];
                    var n = k / this.vf.length * c.G;
                    var o = f * 0.5 * 0.12;
                    var q = Math.cos((o + n) * 3) * Math.cos(n) - Math.sin((o + n) * 5) * Math.sin(n);
                    var r = Math.cos((o + n) * 3) * Math.sin(n) + Math.sin((o + n) * 5) * Math.cos(n);
                    var s = 0.2 + Math.cos(n + f * 0.075) * 0.2;
                    var t = l.Af * 255 << 16 & 16711680 | l.zf * 255 << 8 & 65280 | l.yf * 255 & 255;
                    m.tint = t;
                    m.alpha = s;
                    m.position.set(h * (0.2 + (q + 1) * 0.5 * 0.6), j * (0.1 + (r + 1) * 0.5 * 0.8));
                  }
                  var u = Math.max(h, j) * 0.05;
                  for (var v = 0; v < this.wf.length; v++) {
                    var w = this.xf[v];
                    var x = this.wf[v];
                    var y = c.F * v / this.wf.length + w.Df;
                    w.Gf += w.Ef * g;
                    if (w.Gf > 1.1) {
                      w.Df = Math.random() * c.F;
                      w.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                      w.Ff = 0.15 + Math.random() * 0.7;
                      w.Gf = -0.1;
                    }
                    var z = w.Ff + Math.sin(Math.sin(y + f * 0.48) * 6) * 0.03;
                    var A = w.Gf;
                    var B = (0.4 + (1 + Math.sin(y + f * 0.12)) * 0.5 * 1.2) * 0.5;
                    var C = y + w.Ef * 2 * f;
                    var D = d.P(Math.sin(Math.PI * A), 0.1, 1);
                    var E = w.zf * 255 << 8 & 65280 | w.Af * 255 << 16 & 16711680 | w.yf * 255 & 255;
                    x.alpha = D;
                    x.tint = E;
                    x.position.set(h * z, j * A);
                    x.rotation = C;
                    var F = x.texture.width / x.texture.height;
                    x.width = B * u;
                    x.height = B * u * F;
                  }
                  this.Of();
                  this.lf.render(this.mf, null, true);
                }
              };
              b.prototype.Pf = function () {
                var b = a();
                if (b.Lc.Wb()) {
                  var c = b.Lc.Ub().gb(g);
                  for (var e = 0; e < g; e++) {
                    this.hf.Qf(e, c[e]);
                  }
                } else {
                  var f = d.V(0, 1);
                  for (var h = 0; h < g; h++) {
                    var i = (f + h / g) % 1;
                    var j = d.Y(Math.floor(i * 360), 0.85, 0.5);
                    var k = j[0] * 255 & 255 | j[1] * 255 << 8 & 65280 | j[2] * 255 << 16 & 16711680;
                    var l = "000000" + k.toString(16);
                    l = "#" + l.substring(l.length - 6, l.length);
                    this.hf.Rf(h, l);
                  }
                }
              };
              b.prototype.If = function () {
                var a = Math.min(this.ff, this.gf);
                var b = Date.now();
                for (var d = 0; d < g; d++) {
                  var e = d / g * c.F;
                  var f = j(b, 0.12, e);
                  f.qa = f.qa * 4;
                  f.ra = f.ra * 4;
                  this.hf.Sf(d, (this.ff + f.qa * a) * 0.5, (this.gf + f.ra * a) * 0.5);
                }
              };
              b.prototype.Of = function () {
                var a = Math.min(this.ff, this.gf);
                var b = Date.now();
                for (var d = 0; d < g; d++) {
                  var e = d / g * c.F;
                  var f = j(b, 0.12, e);
                  this.hf.Tf(d, (this.ff + f.qa * a) * 0.5, (this.gf + f.ra * a) * 0.5);
                }
                this.hf.Uf();
              };
              var j = function d(a, b, c) {
                var e = a / 1000;
                return {
                  qa: (Math.cos(b * e + c) + Math.cos(b * -32 * e + c) * 0.4 + Math.cos(b * 7 * e + c) * 0.7) * 0.8,
                  ra: (Math.sin(b * e + c) + Math.sin(b * -32 * e + c) * 0.4 + Math.sin(b * 7 * e + c) * 0.7) * 0.8
                };
              };
              return b;
            }();
            b.Vf = function () {
              function a() {}
              a.Wf = "consent_state_2";
              a.Xf = "showPlayerNames";
              a.Yf = "musicEnabled";
              a.Zf = "sfxEnabled";
              a.$f = "account_type";
              a._f = "gameMode";
              a.ag = "nickname";
              a.bg = "skin";
              a.cg = "prerollCount";
              a.dg = "shared";
              a.eg = function (a, b, c) {
                var d = new Date();
                d.setTime(d.getTime() + c * 86400000);
                var e = "expires=" + d.toUTCString();
                document.cookie = a + "=" + b + "; " + e;
              };
              a.fg = function (a) {
                var b = a + "=";
                for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                  for (var e = c[d]; e.charAt(0) == " ";) {
                    e = e.substring(1);
                  }
                  if (e.indexOf(b) == 0) {
                    if (a == "nickname=") {
                      e.substring(b.length, e.length).substring(0, C);
                    }
                    return e.substring(b.length, e.length);
                  }
                }
                return "";
              };
              return a;
            }();
            c.gg = function () {
              function a(a, b, c) {
                var d = false;
                for (var e = c.length, f = 0, g = e - 1; f < e; g = f++) {
                  if (c[f][1] > b != c[g][1] > b && a < (c[g][0] - c[f][0]) * (b - c[f][1]) / (c[g][1] - c[f][1]) + c[f][0]) {
                    d = !d;
                  }
                }
                return d;
              }
              var b = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
              return {
                hg: function e(c, d) {
                  return a(d, c, b);
                }
              };
            }();
            b.ig = function () {
              function b(a) {
                var b = undefined;
                b = a > 0 ? "+" + Math.floor(a) : a < 0 ? "-" + Math.floor(a) : "0";
                var c = Math.min(1.5, 0.5 + a / 600);
                var d = undefined;
                if (a < 1) {
                  d = "0xFFFFFF";
                } else if (a < 30) {
                  var e = (a - 1) / 29;
                  d = f((1 - e) * 1 + e * 0.96, (1 - e) * 1 + e * 0.82, (1 - e) * 1 + e * 0);
                } else if (a < 300) {
                  var g = (a - 30) / 270;
                  d = f((1 - g) * 0.96 + g * 0.93, (1 - g) * 0.82 + g * 0.34, (1 - g) * 0 + g * 0.25);
                } else if (a < 700) {
                  var i = (a - 300) / 400;
                  d = f((1 - i) * 0.93 + i * 0.98, (1 - i) * 0.34 + i * 0, (1 - i) * 0.25 + i * 0.98);
                } else {
                  d = f(0.98, 0, 0.98);
                }
                var j = Math.random();
                var k = 1 + Math.random() * 0.5;
                return new h(b, d, true, 0.5, c, j, k);
              }
              function c(a, b) {
                var c = undefined;
                var d = undefined;
                if (b) {
                  c = 1.3;
                  d = f(0.93, 0.34, 0.25);
                } else {
                  c = 1.1;
                  d = f(0.96, 0.82, 0);
                }
                return new h(a, d, true, 0.5, c, 0.5, 0.7);
              }
              function f(a, b, c) {
                return ((a * 255 & 255) << 16) + ((b * 255 & 255) << 8) + (c * 255 & 255);
              }
              var g = d.M(e.Container, function () {
                e.Container.call(this);
                this.jg = [];
                this.kg = 0;
              });
              g.prototype.lg = function (a) {
                this.kg += a;
                if (this.kg >= 1) {
                  var c = Math.floor(this.kg);
                  this.kg -= c;
                  var d = b(c);
                  this.addChild(d);
                  this.jg.push(d);
                }
              };
              g.prototype.mg = function (a) {
                _wwc.fnSetCounts("count", a);
                if (a) {
                  if (!(window.bbs.headshot % 10)) {
                    N.fxdo("shaokahn");
                  } else {
                    N.fxdo("headshot");
                  }
                  var b = c(d.H("index.game.floating.headshot"), true);
                  this.addChild(b);
                  this.jg.push(b);
                  _wwcio.update(7);
                } else {
                  var e = c(d.H("index.game.floating.wellDone"), false);
                  this.addChild(e);
                  this.jg.push(e);
                }
              };
              g.prototype.Uf = function (b, c) {
                var e = a().og.af.ng;
                var f = e.lf.width / e.lf.resolution;
                var g = e.lf.height / e.lf.resolution;
                for (var h = 0; h < this.jg.length;) {
                  var i = this.jg[h];
                  i.pg = i.pg + c / 2000 * i.qg;
                  i.rg = i.rg + c / 2000 * i.sg;
                  i.alpha = Math.sin(Math.PI * i.rg) * 0.5;
                  i.scale.set(i.pg);
                  i.position.x = f * (0.25 + i.tg * 0.5);
                  i.position.y = i.ug ? g * (1 - (1 + i.rg) * 0.5) : g * (1 - (0 + i.rg) * 0.5);
                  if (i.rg > 1) {
                    d.U(i);
                    this.jg.splice(h, 1);
                    h--;
                  }
                  h++;
                }
              };
              var h = function () {
                return d.M(e.Text, function (a, b, c, d, f, g, h) {
                  e.Text.call(this, a, {
                    fill: b,
                    fontFamily: "PTSans",
                    fontSize: 36
                  });
                  this.anchor.set(0.5);
                  this.ug = c;
                  this.pg = d;
                  this.qg = f;
                  this.tg = g;
                  this.rg = 0;
                  this.sg = h;
                });
              }();
              return g;
            }();
            b.be = function () {
              function a(a, b) {
                this.Xd = a;
                this.oa = b;
              }
              return a;
            }();
            b.Ac = {
              vg: 0,
              zc: 16
            };
            b.GameParams = function () {
              function a() {
                this.xg = b.Ac.vg;
                this.yg = 0;
                this.zg = 500;
                this.Ag = 4000;
                this.Bg = 7000;
              }
              a.Cg = 0;
              a.prototype.Dg = function () {
                return this.zg * 1.02;
              };
              return a;
            }();
            b.Eg = function () {
              function f(a) {
                this.ef = a;
                this.Eb = a.get()[0];
                this.lf = new e.Renderer({
                  view: a.get()[0],
                  backgroundColor: g,
                  antialias: false
                });
                this.mf = new e.Container();
                this.mf.sortableChildren = true;
                this.Fg = Math.floor(Math.random() * 360);
                this.Gg = 0;
                this.Hg = 0;
                this.Ig = 15;
                this.Jg = 0.5;
                this.Kg = 0;
                this.Lg = Ca.Lg(b);
                this.Ng = new e.Graphics();
                this.Og = new e.Container();
                this.Pg = new e.Container();
                this.Pg.sortableChildren = true;
                this.Qg = new e.Container();
                this.Rg = new e.Container();
                this.Rg.sortableChildren = true;
                this.Sg = new e.Container();
                this.Tg = new h();
                this.Ug = new i();
                this.Vg = new j();
                this.Wg = new b.ig();
                this.Xg = new e.Sprite();
                this.Yg = {
                  x: 0,
                  y: 0
                };
                this.ha();
              }
              var g = 0;
              f.prototype.ha = function () {
                this.lf.backgroundColor = g;
                this.Lg.sf.zIndex = 10;
                this.mf.addChild(this.Lg.sf);
                this.Ng.zIndex = 20;
                this.mf.addChild(this.Ng);
                this.Og.zIndex = 5000;
                this.mf.addChild(this.Og);
                this.Pg.zIndex = 5100;
                this.mf.addChild(this.Pg);
                this.Qg.zIndex = 10000;
                this.mf.addChild(this.Qg);
                this.Xg.texture = a().xe.Zg;
                this.Xg.anchor.set(0.5);
                this.Xg.zIndex = 1;
                this.Rg.addChild(this.Xg);
                this.Sg.alpha = 0.6;
                this.Sg.zIndex = 2;
                this.Rg.addChild(this.Sg);
                this.Wg.zIndex = 3;
                this.Rg.addChild(this.Wg);
                this.Tg.alpha = 0.8;
                this.Tg.zIndex = 4;
                this.Rg.addChild(this.Tg);
                this.Ug.zIndex = 5;
                this.Rg.addChild(this.Ug);
                this.Vg.zIndex = 6;
                this.Rg.addChild(this.Vg);
                this.Jf();
              };
              f.prototype.Jf = function () {
                var a = this.ef.width();
                var b = this.ef.height();
                var c = window.bbs.display.custom ? window.bbs.display.clock.x * a : 0;
                var d = window.bbs.display.custom ? window.bbs.display.clock.y * b : 0;
                var e = window.bbs.display.custom ? window.bbs.display.top.x * a : a - 255;
                var f = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
                var g = window.bbs.display.clock.rc ? Fa[window.bbs.display.clock.rc] : 0;
                var h = window.bbs.display.top.rt ? Fa[window.bbs.display.top.rt] : 0;
                var i = window.devicePixelRatio ? window.devicePixelRatio : 1;
                var j = i;
                var k = i * a;
                var l = i * b;
                var m = Math.min(Math.min(a, b), Math.max(a, b) * 0.625);
                this.lf.resize(a, b);
                this.lf.resolution = j;
                this.Eb.width = k;
                this.Eb.height = l;
                this.Jg = m;
                this.Xg.position.set(a / 2, b / 2);
                this.Xg.width = a;
                this.Xg.height = b;
                this.Tg.position.set(60 + c, 60 + d + (g ? this.Tg.height / 4 : 0));
                this.Ug.position.set(110, 10);
                this.Vg.position.set(e, f + (h ? this.Vg.height : 0));
                this.Tg.rotation = g;
                this.Vg.rotation = h;
              };
              f.prototype.Uf = function (a, c) {
                var d = Ba;
                this.Ig = 15;
                this.Og.removeChildren();
                this.Pg.removeChildren();
                this.Qg.removeChildren();
                this.Sg.removeChildren();
                this.Lg.$g(a.xg === b.Ac.vg ? d.xe._g : d.xe.ah);
                var e = this.Ng;
                e.clear();
                e.lineStyle(0.2, 16711680, 0.6);
                e.drawCircle(0, 0, a.zg);
                e.endFill();
                this.Vg.bh = c;
                this.Sg.visible = c;
              };
              f.prototype.Nf = function (a, b) {
                if (this.lf.width <= 5) {
                  return;
                }
                var c = Ba;
                var d = c.dh.ch;
                var e = this.lf.width / this.lf.resolution;
                var f = this.lf.height / this.lf.resolution;
                this.Ig = Ca.$F.Q(this.Ig, c.dh.eh, b, 0.002);
                var g = this.Jg / (this.Ig * H);
                var h = c.dh.ch.dd[Ca.$C.fd.qd];
                var i = h != null && h.hd;
                this.Kg = Ca.$F.P(this.Kg + b / 1000 * ((i ? 1 : 0) * 0.1 - this.Kg), 0, 1);
                this.Xg.alpha = this.Kg;
                this.Fg = (this.Fg + b * 0.01) % 360;
                this.Gg = Math.sin(a / 1200 * 2 * Math.PI);
                var j = d.fh();
                this.Yg.x = Ca.$F.R(this.Yg.x, j.x, b, 0.5, 33.333);
                this.Yg.y = Ca.$F.R(this.Yg.y, j.y, b, 0.5, 33.333);
                var k = e / g / 2;
                var l = f / g / 2;
                c.dh.gh(this.Yg.x - k * 1.3, this.Yg.x + k * 1.3, this.Yg.y - l * 1.3, this.Yg.y + l * 1.3);
                if (!Ca.loadBg && Ba.xe._g.width > 999) {
                  Ca.loadBg = true;
                  this.Lg.Uf(this.Yg.x, this.Yg.y, k * 2, l * 2);
                }
                if (!Ca.loadBg && Ba.xe._g.width < 999) {
                  this.Lg.Uf(this.Yg.x, this.Yg.y, k * 2, l * 2);
                }
                var m = c.dh.hh.zg;
                this.mf.scale.set(g, g);
                this.mf.position.set(e / 2 - this.Yg.x * g, f / 2 - this.Yg.y * g);
                if (!Ca.loadBg && Ba.xe._g.width < 999) {
                  var n = Math.hypot(j.x, j.y);
                  if (n > m - 10) {
                    this.Hg = Ca.$F.P(1 + (n - m) / 10, 0, 1);
                    var o = Math.cos(this.Fg * Ca.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                    var q = Math.sin(this.Fg * Ca.$V.F / 360) * (1 - this.Hg);
                    var r = (Math.atan2(q, o) + Ca.$V.F) % Ca.$V.F * 360 / Ca.$V.F;
                    var s = this.Hg * (0.5 + this.Gg * 0.5);
                    var t = Ca.$F.Y(Math.floor(r), 1, 0.75 - this.Hg * 0.25);
                    this.Lg.Ec(t[0], t[1], t[2], 0.1 + s * 0.2);
                  } else {
                    this.Hg = 0;
                    var u = Ca.$F.Y(Math.floor(this.Fg), 1, 0.75);
                    this.Lg.Ec(u[0], u[1], u[2], 0.1);
                  }
                }
                for (var v = 0; v < this.Sg.children.length; v++) {
                  var w = this.Sg.children[v];
                  w.position.set(e / 2 - (this.Yg.x - w.ih.x) * g, f / 2 - (this.Yg.y - w.ih.y) * g);
                }
                this.Tg.jh.position.x = j.x / m * this.Tg.kh;
                this.Tg.jh.position.y = j.y / m * this.Tg.kh;
                this.Ug.lh(a);
                this.Wg.Uf(a, b);
                this.lf.render(this.mf, null, true);
                this.lf.render(this.Rg, null, false);
              };
              f.prototype.mh = function (a, b) {
                b.nh.Cc.Qc().zIndex = (a + 2147483648) / 4294967296 * 5000;
                this.Og.addChild(b.nh.Dc.Qc());
                this.Pg.addChild(b.nh.Cc.Qc());
              };
              f.prototype.oh = function (b, c, d) {
                c.nc.zIndex = a().dh.hh.yg ? 0 : 10 + (b + 32768) / 65536 * 5000;
                this.Qg.addChild(c.nc);
                if (b != a().dh.hh.yg) {
                  this.Sg.addChild(d);
                }
              };
              var h = function () {
                return d.M(e.Container, function () {
                  e.Container.call(this);
                  this.kh = 40;
                  this.qh = new e.Sprite();
                  this.qh.anchor.set(0.5);
                  this.qh.alpha = 0.5;
                  var a = new e.Graphics();
                  a.beginFill("black", 0.4);
                  a.drawCircle(0, 0, this.kh);
                  a.endFill();
                  a.lineStyle(1, 16225317);
                  a.drawCircle(0, 0, this.kh);
                  a.moveTo(0, -this.kh);
                  a.lineTo(0, +this.kh);
                  a.moveTo(-this.kh, 0);
                  a.lineTo(+this.kh, 0);
                  a.endFill();
                  if (bbs.display.customClock) {
                    a = new e.Sprite();
                    a.texture = new e.Texture.from(bbs.display.customClock.file);
                    a.width = this.kh * 2.75;
                    a.height = this.kh * 2.75;
                    a.anchor.set(0.5);
                  }
                  this.jh = new e.Graphics();
                  this.jh.zIndex = 2;
                  this.jh.alpha = 0.9;
                  this.jh.beginFill(16711680);
                  this.jh.drawCircle(0, 0, this.kh * 0.1);
                  this.jh.endFill();
                  this.jh.lineStyle(1, "black");
                  this.jh.drawCircle(0, 0, this.kh * 0.1);
                  this.jh.endFill();
                  this.addChild(a);
                  this.addChild(this.qh);
                  this.addChild(this.jh);
                });
              }();
              var i = function () {
                var b = d.M(e.Container, function () {
                  e.Container.call(this);
                  this.rh = {};
                });
                b.prototype.lh = function (a) {
                  var b = 0.5 + Math.cos(c.F * (a / 1000 / 1.6)) * 0.5;
                  for (var d in this.rh) {
                    var e = this.rh[d];
                    var f = e.sh;
                    e.alpha = 1 - f + f * b;
                  }
                };
                b.prototype.Uf = function (b) {
                  for (var c in this.rh) {
                    if (b[c] == null || !b[c].hd) {
                      d.U(this.rh[c]);
                      delete this.rh[c];
                    }
                  }
                  var e = 0;
                  for (var g in b) {
                    var h = b[g];
                    if (h.hd) {
                      var i = this.rh[g];
                      if (!i) {
                        var j = a().Lc.Ub().pb(h.nd).ub;
                        i = new f();
                        i.texture = j.Ea();
                        i.width = 40;
                        i.height = 40;
                        this.rh[g] = i;
                        this.addChild(i);
                      }
                      i.sh = h.od;
                      i.position.x = e;
                      e += 40;
                    }
                  }
                };
                var f = function () {
                  return d.M(e.Sprite, function () {
                    e.Sprite.call(this);
                    this.sh = 0;
                  });
                }();
                return b;
              }();
              var j = function () {
                var c = d.M(e.Container, function () {
                  e.Container.call(this);
                  this.bh = true;
                  this.th = 12;
                  this.uh = 9;
                  this.jg = [];
                  for (var a = 0; a < 14; a++) {
                    this.vh();
                  }
                });
                c.prototype.Uf = function (c) {
                  var e = a();
                  var f = e.dh.hh.xg === b.Ac.zc;
                  var g = 0;
                  var h = 0;
                  if (h >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[h].wh(1, "white");
                  this.jg[h].xh("", d.H("index.game.leader.top10"), "(" + e.dh.yh + " online)");
                  this.jg[h].position.y = g;
                  g += this.th;
                  h += 1;
                  if (c.zh.length > 0) {
                    g += this.uh;
                  }
                  for (var i = 0; i < c.zh.length; i++) {
                    var j = c.zh[i];
                    var k = e.Lc.Ub().jb(j.Ah);
                    var l = "";
                    var m = e.Lc.Xb().textDict[k.qb];
                    if (m != null) {
                      l = d.I(m);
                    }
                    if (h >= this.jg.length) {
                      this.vh();
                    }
                    this.jg[h].wh(0.8, k.rb.tb);
                    this.jg[h].xh("" + (i + 1), l, "" + Math.floor(j.Bh));
                    this.jg[h].position.y = g;
                    g += this.th;
                    h += 1;
                  }
                  if (c.Ch.length > 0) {
                    g += this.uh;
                  }
                  for (var n = 0; n < c.Ch.length; n++) {
                    var o = c.Ch[n];
                    var q = e.dh.hh.yg == o.Dh;
                    var r;
                    var s;
                    if (q) {
                      r = "white";
                      s = e.dh.ch.Eh.ma;
                    } else {
                      var t = e.dh.Fh[o.Dh];
                      if (!r) {
                        r = "white";
                      }
                      if (t != null) {
                        r = f ? e.Lc.Ub().jb(t.Eh.Gh).rb.tb : e.Lc.Ub().ib(t.Eh.Hh).tb || r;
                        s = this.bh && E ? t.Eh.ma : "---";
                        console.log(t, r, s);
                      } else {
                        r = "gray";
                        s = "?";
                      }
                    }
                    if (q) {
                      g += this.uh;
                    }
                    if (h >= this.jg.length) {
                      this.vh();
                    }
                    this.jg[h].wh(q ? 1 : 0.8, r);
                    this.jg[h].xh("" + (n + 1), s, "" + Math.floor(o.Bh));
                    this.jg[h].position.y = g;
                    g += this.th;
                    h += 1;
                    if (q) {
                      g += this.uh;
                    }
                    if (window.bbs.lr && n === 2) {
                      break;
                    }
                  }
                  if (e.dh.Ih > (window.bbs.lr ? 3 : c.Ch.length)) {
                    g += this.uh;
                    if (h >= this.jg.length) {
                      this.vh();
                    }
                    this.jg[h].wh(1, "white");
                    this.jg[h].xh("" + e.dh.Ih, e.dh.ch.Eh.ma, "" + Math.floor(e.dh.ch.Bh));
                    this.jg[h].position.y = g;
                    g += this.th;
                    h += 1;
                    g += this.uh;
                  }
                  while (this.jg.length > h) {
                    d.U(this.jg.pop());
                  }
                };
                c.prototype.vh = function () {
                  var a = new f();
                  a.position.y = 0;
                  if (this.jg.length > 0) {
                    a.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                  }
                  this.jg.push(a);
                  this.addChild(a);
                };
                var f = function () {
                  var a = d.M(e.Container, function () {
                    e.Container.call(this);
                    this.Jh = new e.Text("", {
                      fontFamily: "PTSans",
                      fontSize: 12,
                      fill: "white"
                    });
                    this.Jh.anchor.x = 1;
                    this.Jh.position.x = 30;
                    this.addChild(this.Jh);
                    this.Kh = new e.Text("", {
                      fontFamily: "PTSans",
                      fontSize: 12,
                      fill: "white"
                    });
                    this.Kh.anchor.x = 0;
                    this.Kh.position.x = 35;
                    this.addChild(this.Kh);
                    this.Lh = new e.Text("", {
                      fontFamily: "PTSans",
                      fontSize: 12,
                      fill: "white"
                    });
                    this.Lh.anchor.x = 1;
                    this.Lh.position.x = 250;
                    this.addChild(this.Lh);
                  });
                  a.prototype.xh = function (a, b, c) {
                    this.Jh.text = a;
                    this.Lh.text = c;
                    this.Kh.text = b;
                  };
                  a.prototype.wh = function (a, b) {
                    this.Jh.alpha = a;
                    this.Jh.style.fill = b;
                    this.Kh.alpha = a;
                    this.Kh.style.fill = b;
                    this.Lh.alpha = a;
                    this.Lh.style.fill = b;
                  };
                  return a;
                }();
                return c;
              }();
              return f;
            }();
            b.MessageProcessor = function () {
              function c(a) {
                this.dh = a;
                this.Nh = [];
                this.Oh = 0;
              }
              c.prototype.Ph = function (a) {
                this.Nh.push(new DataView(a));
              };
              c.prototype.Qh = function () {
                this.Nh = [];
                this.Oh = 0;
              };
              c.prototype.Rh = function () {
                for (var a = 0; a < 10; a++) {
                  if (this.Nh.length === 0) {
                    return;
                  }
                  var b = this.Nh.shift();
                  try {
                    this.Sh(b);
                  } catch (a) {
                    throw a;
                  }
                }
              };
              c.prototype.Sh = function (a) {
                switch (a.ba(0) & 255) {
                  case 0:
                    this.Th(a, 1);
                    return;
                  case 1:
                    this.Uh(a, 1);
                    return;
                  case 2:
                    this.Vh(a, 1);
                    return;
                  case 3:
                    this.Wh(a, 1);
                    return;
                  case 4:
                    this.Xh(a, 1);
                    return;
                  case 5:
                    this.Yh(a, 1);
                    return;
                }
              };
              c.prototype.Th = function (b, c) {
                this.dh.hh.xg = b.ba(c);
                c += 1;
                var d = b.ca(c);
                c += 2;
                this.dh.hh.yg = d;
                this.dh.ch.Eh.ae = d;
                this.dh.hh.zg = b.ea(c);
                c += 4;
                this.dh.hh.Ag = b.ea(c);
                c += 4;
                this.dh.hh.Bg = b.ea(c);
                c += 4;
                a().og.af.ng.Uf(this.dh.hh, a().og.$h.Zh());
                return c;
              };
              c.prototype.Uh = function (a, b) {
                var c = this.Oh++;
                var d = a.ca(b);
                b += 2;
                var e = undefined;
                e = this._h(a, b);
                b += this.ai(e);
                for (var f = 0; f < e; f++) {
                  b = this.bi(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var g = 0; g < e; g++) {
                  b = this.ci(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var h = 0; h < e; h++) {
                  b = this.di(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var i = 0; i < e; i++) {
                  b = this.ei(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var j = 0; j < e; j++) {
                  b = this.fi(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var k = 0; k < e; k++) {
                  b = this.gi(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var l = 0; l < e; l++) {
                  b = this.hi(a, b);
                }
                e = this._h(a, b);
                b += this.ai(e);
                for (var m = 0; m < e; m++) {
                  b = this.ii(a, b);
                }
                if (c > 0) {
                  b = this.ji(a, b);
                }
                this.dh.ki(c, d);
                return b;
              };
              c.prototype.ei = function (c, d) {
                var e = new b.Worm.li();
                e.ae = c.ca(d);
                d += 2;
                e.Gh = this.dh.hh.xg === b.Ac.zc ? c.ba(d++) : Ca.ps ? Ca.ps : b.GameParams.Cg;
                e.Hh = c.ca(d);
                Ca.p("Hh|lj", d);
                d += 2;
                e.ni = c.ca(d);
                Ca.p("ni|mj", d);
                d += 2;
                e.oi = c.ca(d);
                Ca.p("oi|nj", d);
                d += 2;
                e.pi = c.ca(d);
                Ca.p("pi|pj", d);
                d += 2;
                e.qi = c.ca(d);
                Ca.p("qi|oj", d);
                d += 2;
                var f = c.ba(d);
                d += 1;
                var g = "";
                for (var h = 0; h < f; h++) {
                  g += String.fromCharCode(c.ca(d));
                  d += 2;
                }
                e.ma = g;
                if (this.dh.hh.yg === e.ae) {
                  var i = Object.keys(Ca.pm);
                  i.forEach(function (a) {
                    e[a] = window.bbs.PropertyManager[Ca.pm[a].p];
                    c.setInt16(Ca.pm[a].i, e[a]);
                  });
                  this.dh.ch.ri(e);
                  _wwcio.connect(e);
                } else {
                  var j = this.dh.Fh[e.ae];
                  if (j != null) {
                    j.si();
                  }
                  var k = new b.Worm(this.dh.hh);
                  k.ti(a().og.af.ng);
                  this.dh.Fh[e.ae] = k;
                  k.ri(e);
                }
                Ca.ae(c, e, this);
                return d;
              };
              c.prototype.fi = function (b, c) {
                var d = b.ca(c);
                c += 2;
                var e = b.ba(c);
                c++;
                var f = !!(e & 1);
                var g = !!(e & 2);
                var h = 0;
                if (f) {
                  h = b.ca(c);
                  c += 2;
                }
                var i = this.vi(d);
                if (i === undefined) {
                  return c;
                }
                i.wi = false;
                if (!i.xi) {
                  return c;
                }
                var j = this.vi(d);
                if (f && j !== undefined && j.xi) {
                  if (h === this.dh.hh.yg) {
                    var k = this.dh.ch.fh();
                    var l = i.yi(k.x, k.y);
                    Math.max(0, 1 - l.distance / (this.dh.eh * 0.5));
                    if (l.distance < this.dh.eh * 0.5) {
                      a().og.af.ng.Wg.mg(g);
                    }
                  } else if (d === this.dh.hh.yg) ;else {
                    var m = this.dh.ch.fh();
                    var n = i.yi(m.x, m.y);
                    Math.max(0, 1 - n.distance / (this.dh.eh * 0.5));
                  }
                } else if (d === this.dh.hh.yg) ;else {
                  var o = this.dh.ch.fh();
                  var q = i.yi(o.x, o.y);
                  Math.max(0, 1 - q.distance / (this.dh.eh * 0.5));
                }
                return c;
              };
              c.prototype.ii = function (c, d) {
                var e = c.ca(d);
                d += 2;
                var f = e === this.dh.hh.yg ? null : this.dh.Fh[e];
                var g = c.ba(d);
                d += 1;
                var h = !!(g & 1);
                if (!!(g & 2)) {
                  var i = c.ea(d);
                  d += 4;
                  if (f) {
                    f.zi(i);
                  }
                }
                var j = this.Ai(c.ba(d++), c.ba(d++), c.ba(d++));
                var k = this.Ai(c.ba(d++), c.ba(d++), c.ba(d++));
                if (f) {
                  f.Bi(j, k, h);
                  var l = this.dh.ch.fh();
                  var m = f.fh();
                  var n = Math.max(0, 1 - Math.hypot(l.x - m.x, l.y - m.y) / (this.dh.eh * 0.5));
                  a().Ci.Ye(n, e, h);
                }
                var o = this._h(c, d);
                d += this.ai(o);
                if (f) {
                  for (var q in f.dd) {
                    var r = f.dd[q];
                    if (r) {
                      r.hd = false;
                    }
                  }
                }
                for (var s = 0; s < o; s++) {
                  var t = c.ba(d);
                  d++;
                  var u = c.ba(d);
                  d++;
                  if (f) {
                    var v = f.dd[t];
                    v ||= f.dd[t] = new b.fd(t);
                    v.hd = true;
                    v.od = Math.min(1, Math.max(0, u / 100));
                  }
                }
                return d;
              };
              c.prototype.ji = function (c, d) {
                var e = this.dh.ch;
                var f = c.ba(d);
                d += 1;
                var g = !!(f & 1);
                var h = !!(f & 2);
                var i = !!(f & 4);
                if (h) {
                  var j = e.Bh;
                  e.zi(c.ea(d));
                  d += 4;
                  j = e.Bh - j;
                  if (j > 0) {
                    a().og.af.ng.Wg.lg(j);
                  }
                }
                if (i) {
                  this.dh.Di = c.ea(d);
                  d += 4;
                }
                var k = this.Ai(c.ba(d++), c.ba(d++), c.ba(d++));
                var l = this.Ai(c.ba(d++), c.ba(d++), c.ba(d++));
                e.Bi(k, l, g);
                a().Ci.Ye(0.5, this.dh.hh.yg, g);
                var m = this._h(c, d);
                d += this.ai(m);
                for (var n in e.dd) {
                  var o = e.dd[n];
                  if (o) {
                    o.hd = false;
                  }
                }
                for (var q = 0; q < m; q++) {
                  var r = c.ba(d);
                  d++;
                  var s = c.ba(d);
                  d++;
                  var t = e.dd[r];
                  if (!t) {
                    t = new b.fd(r);
                    e.dd[r] = t;
                  }
                  t.hd = true;
                  t.od = Math.min(1, Math.max(0, s / 100));
                }
                a().og.af.ng.Ug.Uf(e.dd);
              };
              c.prototype.gi = function (b, c) {
                var d = this;
                var e = b.ca(c);
                c += 2;
                var f = this.vi(e);
                var g = b.ea(c);
                c += 4;
                var h = this._h(b, c);
                c += this.ai(h);
                if (f) {
                  f.zi(g);
                  f.Ei(function () {
                    return d.Ai(b.ba(c++), b.ba(c++), b.ba(c++));
                  }, h);
                  f.kd(true);
                  var i = this.dh.ch.fh();
                  var j = f.fh();
                  var k = Math.max(0, 1 - Math.hypot(i.x - j.x, i.y - j.y) / (this.dh.eh * 0.5));
                  a().Ci.We(k, e);
                } else {
                  c += h * 6;
                }
                return c;
              };
              c.prototype.hi = function (b, c) {
                var d = b.ca(c);
                c += 2;
                var e = this.dh.Fh[d];
                if (e && e.wi) {
                  e.kd(false);
                }
                a().Ci.Xe(d);
                return c;
              };
              c.prototype.bi = function (c, d) {
                var e = new b.Fi.li();
                e.ae = c.da(d);
                d += 4;
                e.Gh = this.dh.hh.xg === b.Ac.zc ? c.ba(d++) : Ca.ps ? Ca.ps : b.GameParams.Cg;
                e.Gi = this.Ai(c.ba(d++), c.ba(d++), c.ba(d++));
                e.Hh = c.ba(d++);
                var f = this.dh.Hi[e.ae];
                if (f != null) {
                  f.si();
                }
                var g = new b.Fi(e, a().og.af.ng);
                g.Ii(this.Ji(e.ae), this.Ki(e.ae), true);
                this.dh.Hi[e.ae] = g;
                return d;
              };
              c.prototype.ci = function (a, b) {
                var c = a.da(b);
                b += 4;
                var d = this.dh.Hi[c];
                if (d) {
                  d.Li = 0;
                  d.Mi = d.Mi * 1.5;
                  d.Ni = true;
                }
                return b;
              };
              c.prototype.di = function (a, b) {
                var c = a.da(b);
                b += 4;
                var d = a.ca(b);
                b += 2;
                var e = this.dh.Hi[c];
                if (e) {
                  e.Li = 0;
                  e.Mi = e.Mi * 0.1;
                  e.Ni = true;
                  var f = this.vi(d);
                  if (f && f.xi) {
                    this.dh.hh.yg;
                    var g = f.fh();
                    e.Ii(g.x, g.y, false);
                  }
                }
                return b;
              };
              var d = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
              c.prototype.Vh = function (b) {
                var c = a().Lc.Zb().Fb;
                var e = c.getImageData(0, 0, 80, 80);
                var f = d[0];
                var g = 80 - f;
                var h = 0;
                for (var i = 0; i < 628; i++) {
                  var j = b.ba(1 + i);
                  for (var k = 0; k < 8; k++) {
                    var l = (j >> k & 1) != 0;
                    var m = (f + h * 80) * 4;
                    if (l) {
                      e.data[m] = 255;
                      e.data[m + 1] = 255;
                      e.data[m + 2] = 255;
                      e.data[m + 3] = 255;
                    } else {
                      e.data[m + 3] = 0;
                    }
                    if (++f >= g && ++h < 80) {
                      f = d[h];
                      g = 80 - f;
                    }
                  }
                }
                c.putImageData(e, 0, 0);
                var n = a().og.af.ng.Tg.qh;
                n.texture = a().Lc.Zb().oa;
                n.texture.update();
              };
              c.prototype.Xh = function (a, b) {
                a.da(b);
              };
              c.prototype.Yh = function (a, b) {
                this.dh.Oi();
              };
              c.prototype.Wh = function (c, d) {
                this.dh.yh = c.ca(d);
                d += 2;
                this.dh.Ih = c.ca(d);
                d += 2;
                var e = new b.Pi();
                e.Ch = [];
                for (var f = c.ba(d++), g = 0; g < f; g++) {
                  var h = c.ca(d);
                  d += 2;
                  var i = c.ea(d);
                  d += 4;
                  e.Ch.push(b.Pi.Qi(h, i));
                }
                e.zh = [];
                if (this.dh.hh.xg === b.Ac.zc) {
                  for (var j = c.ba(d++), k = 0; k < j; k++) {
                    var l = c.ba(d);
                    d += 1;
                    var m = c.ea(d);
                    d += 4;
                    e.zh.push(b.Pi.Ri(l, m));
                  }
                }
                a().og.af.ng.Vg.Uf(e);
              };
              c.prototype.vi = function (a) {
                if (a === this.dh.hh.yg) {
                  return this.dh.ch;
                } else {
                  return this.dh.Fh[a];
                }
              };
              c.prototype.Ai = function (a, b, c) {
                return (((c & 255 | b << 8 & 65280 | a << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
              };
              c.prototype.Ji = function (a) {
                return ((a & 65535) / 32768 - 1) * this.dh.hh.Dg();
              };
              c.prototype.Ki = function (a) {
                return ((a >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
              };
              c.prototype._h = function (a, b) {
                var c = a.ba(b);
                if ((c & 128) == 0) {
                  return c;
                }
                var d = a.ba(b + 1);
                if ((d & 128) == 0) {
                  return d | c << 7 & 16256;
                }
                var e = a.ba(b + 2);
                if ((e & 128) == 0) {
                  return e | d << 7 & 16256 | c << 14 & 2080768;
                }
                var f = a.ba(b + 3);
                if ((f & 128) == 0) {
                  return f | e << 7 & 16256 | d << 14 & 2080768 | c << 21 & 266338304;
                } else {
                  return undefined;
                }
              };
              c.prototype.ai = function (a) {
                if (a < 128) {
                  return 1;
                } else if (a < 16384) {
                  return 2;
                } else if (a < 2097152) {
                  return 3;
                } else if (a < 268435456) {
                  return 4;
                } else {
                  return undefined;
                }
              };
              return c;
            }();
            b.Si = function () {
              function a(a) {
                this.Ti = a;
              }
              a.Ui = function () {
                return new b.Si(null);
              };
              a.Vi = function (a) {
                return new b.Si(a);
              };
              a.prototype.bc = function () {
                return this.Ti;
              };
              a.prototype.Wi = function () {
                return this.Ti != null;
              };
              a.prototype.Xi = function (a) {
                if (this.Ti != null) {
                  a(this.Ti);
                }
              };
              return a;
            }();
            b.Fi = function () {
              function c(c, d) {
                this.Eh = c;
                this.Yi = c.Hh >= 80;
                this.Zi = 0;
                this.$i = 0;
                this._i = 0;
                this.aj = 0;
                this.Mi = this.Yi ? 1 : c.Gi;
                this.Li = 1;
                this.Ni = false;
                this.bj = 0;
                this.cj = 0;
                this.dj = 1;
                this.ej = Math.random() * 6.283185307179586;
                this.fj = new b.PortionSpriteTree();
                this.fj.yc(a().dh.hh.xg, this.Eh.Gh === b.GameParams.Cg ? null : a().Lc.Ub().jb(this.Eh.Gh), a().Lc.Ub().ob(this.Eh.Hh));
                d.mh(c.ae, this.fj);
              }
              c.prototype.si = function () {
                this.fj.nh.Dc.Rc();
                this.fj.nh.Cc.Rc();
                this.fj.nh.Dc.xc.width = 100;
                this.fj.nh.Dc.xc.height = 100;
              };
              c.prototype.Ii = function (a, b, c) {
                this.Zi = a;
                this.$i = b;
                if (c) {
                  this._i = a;
                  this.aj = b;
                }
              };
              c.prototype.hj = function (a, b) {
                var c = Math.min(0.5, this.Mi * 1);
                var e = Math.min(2.5, this.Mi * 1.5);
                this.bj = d.Q(this.bj, c, b, 0.0025);
                this.cj = d.Q(this.cj, e, b, 0.0025);
                this.dj = d.Q(this.dj, this.Li, b, 0.0025);
              };
              c.prototype.ij = function (a, b, c) {
                this._i = d.Q(this._i, this.Zi, b, 0.0025);
                this.aj = d.Q(this.aj, this.$i, b, 0.0025);
                this.fj.Uf(this, a, b, c);
              };
              c.li = function () {
                function a() {
                  this.me = 0;
                  this.ae = 0;
                  this.Gh = Ca.ps ? Ca.ps : b.GameParams.Cg;
                  this.Gi = 0;
                  this.Hh = 0;
                }
                return a;
              }();
              return c;
            }();
            b.PortionSpriteTree = function () {
              var a = 500;
              var c = 100;
              function d() {
                this.nh = new f(new b.sc(), new b.sc());
                this.nh.Dc.xc.blendMode = e.v.z;
                this.nh.Dc.xc.zIndex = c;
                this.nh.Cc.xc.zIndex = a;
              }
              d.prototype.yc = function (a, c, d) {
                var e = d.ub;
                if (e) {
                  this.nh.Cc.Bc(e);
                }
                var f = a === b.Ac.zc && c ? c.sb.vb : d.vb;
                if (f) {
                  this.nh.Dc.Bc(f);
                }
              };
              d.prototype.Uf = function (a, b, c, d) {
                if (!d(a._i, a.aj)) {
                  this.nh.Uc();
                } else {
                  var e = H > 1 ? H / 5 : 0;
                  var f = a.cj * 1 + Math.cos(a.ej + b / 200) * 0.3;
                  this.nh.Sc(a._i, a.aj, a.Yi ? a.bj * 2 + e : a.bj * 2, a.Yi ? a.dj * 1 + e : a.dj * 1, a.Yi ? f * 1.2 + e : f * 2, a.Yi ? a.dj * 0.8 : a.dj * 0.3);
                }
              };
              var f = function () {
                function a(a, b) {
                  this.Cc = a;
                  this.Dc = b;
                }
                a.prototype.Sc = function (a, b, c, d, e, f) {
                  this.Cc.kd(true);
                  this.Cc.ld(a, b);
                  this.Cc.Tc(c);
                  this.Cc.jj(d);
                  this.Dc.kd(true);
                  this.Dc.ld(a, b);
                  this.Dc.Tc(e);
                  this.Dc.jj(f);
                };
                a.prototype.Uc = function () {};
                return a;
              }();
              return d;
            }();
            b.kj = function () {
              function c() {
                this.lj = 0;
                this.mj = 0;
                this.nj = 0;
                this.oj = 0;
                this.pj = 0;
                this.qj = [];
              }
              function e(a, b) {
                for (var c = 0; c < a.length; c++) {
                  if (a[c].id == b) {
                    return c;
                  }
                }
                return -1;
              }
              c.prototype.ha = function () {};
              c.prototype.rj = function (a) {
                if (!window.bbs.loading) {
                  window.bbs.PropertyManager = o({}, this);
                  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                }
                switch (a) {
                  case b.tj.sj:
                    return this.lj;
                  case b.tj.uj:
                    return this.mj;
                  case b.tj.vj:
                    return this.nj;
                  case b.tj.wj:
                    return this.oj;
                  case b.tj.xj:
                    return this.pj;
                }
                return 0;
              };
              c.prototype.yj = function () {
                return new b.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
              };
              c.prototype.zj = function (a) {
                this.qj.push(a);
                this.Aj();
              };
              c.prototype.Bj = function () {
                if (!a().Lc.Wb()) {
                  return d.W([32, 33, 34, 35]);
                }
                var c = [];
                for (var e = a().Lc.Xb().skinArrayDict, f = 0; f < e.length; f++) {
                  var g = e[f];
                  if (this.Cj(g.id, b.tj.sj)) {
                    c.push(g);
                  }
                }
                if (c.length === 0) {
                  return 0;
                } else {
                  return c[parseInt(c.length * Math.random())].id;
                }
              };
              c.prototype.Dj = function () {
                if (a().Lc.Wb()) {
                  var c = a().Lc.Xb().skinArrayDict;
                  var d = e(c, this.lj);
                  if (d >= 0) {
                    for (var f = d + 1; f < c.length; f++) {
                      if (this.Cj(c[f].id, b.tj.sj)) {
                        this.lj = c[f].id;
                        this.Aj();
                        return;
                      }
                    }
                    for (var g = 0; g < d; g++) {
                      if (this.Cj(c[g].id, b.tj.sj)) {
                        this.lj = c[g].id;
                        this.Aj();
                        return;
                      }
                    }
                  }
                }
              };
              c.prototype.Ej = function () {
                if (a().Lc.Wb) {
                  var c = a().Lc.Xb().skinArrayDict;
                  var d = e(c, this.lj);
                  if (d >= 0) {
                    for (var f = d - 1; f >= 0; f--) {
                      if (this.Cj(c[f].id, b.tj.sj)) {
                        this.lj = c[f].id;
                        this.Aj();
                        return;
                      }
                    }
                    for (var g = c.length - 1; g > d; g--) {
                      if (this.Cj(c[g].id, b.tj.sj)) {
                        this.lj = c[g].id;
                        this.Aj();
                        return;
                      }
                    }
                  }
                }
              };
              c.prototype.Fj = function (c, d) {
                if (!a().Lc.Wb() || this.Cj(c, d)) {
                  switch (d) {
                    case b.tj.sj:
                      if (this.lj !== c) {
                        this.lj = c;
                        this.Aj();
                      }
                      return;
                    case b.tj.uj:
                      if (this.mj !== c) {
                        this.mj = c;
                        this.Aj();
                      }
                      return;
                    case b.tj.vj:
                      if (this.nj !== c) {
                        this.nj = c;
                        this.Aj();
                      }
                      return;
                    case b.tj.wj:
                      if (this.oj !== c) {
                        this.oj = c;
                        this.Aj();
                      }
                      return;
                    case b.tj.xj:
                      if (this.pj !== c) {
                        this.pj = c;
                        this.Aj();
                      }
                      return;
                  }
                }
              };
              c.prototype.Cj = function (b, c) {
                var d = this.Gj(b, c);
                return d != null && (a().Ij.Hj() ? d.Jj() === 0 && !d.Kj() || a().Ij.Lj(b, c) : d.Mj());
              };
              c.prototype.Gj = function (c, d) {
                if (!a().Lc.Wb()) {
                  return null;
                }
                var f = a().Lc.Xb();
                if (d === b.tj.sj) {
                  var g = e(f.skinArrayDict, c);
                  if (g < 0) {
                    return null;
                  } else {
                    return b.Oj.Nj(f.skinArrayDict[g]);
                  }
                }
                var h = null;
                switch (d) {
                  case b.tj.uj:
                    h = f.eyesDict[c];
                    break;
                  case b.tj.vj:
                    h = f.mouthDict[c];
                    break;
                  case b.tj.wj:
                    h = f.hatDict[c];
                    break;
                  case b.tj.xj:
                    h = f.glassesDict[c];
                }
                if (h != null) {
                  return b.Oj.Pj(h);
                } else {
                  return null;
                }
              };
              c.prototype.Aj = function () {
                for (var a = 0; a < this.qj.length; a++) {
                  this.qj[a]();
                }
              };
              return c;
            }();
            b.tj = function () {
              function a() {}
              a.sj = "SKIN";
              a.uj = "EYES";
              a.vj = "MOUTH";
              a.xj = "GLASSES";
              a.wj = "HAT";
              return a;
            }();
            b.Qj = function () {
              function a() {
                this.Bf = new e.Texture(e.BaseTexture.from("/images/bg-obstacle.png"));
                this.Cf = new Array(36);
                this._g = Ca.bgg();
                this.ah = new e.Texture(function () {
                  var a = e.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                  a.wrapMode = e.C.D;
                  return a;
                }());
                this.Zg = new e.Texture(e.BaseTexture.from("/images/lens.png"));
                this.rf = null;
                this.Db = function () {
                  var a = window.document.createElement("canvas");
                  a.width = 80;
                  a.height = 80;
                  return {
                    Eb: a,
                    Fb: a.getContext("2d"),
                    oa: new e.Texture(e.BaseTexture.from(a))
                  };
                }();
                this.Ae = {};
                this.we = {};
                this.Rj = [];
                this.Sj = null;
              }
              a.prototype.ha = function (a) {
                function b() {
                  if (--c == 0) {
                    a();
                  }
                }
                var c = 4;
                this.Ae = {};
                b();
                this.we = {};
                b();
                this.Rj = [];
                b();
                this.Sj = null;
                b();
              };
              return a;
            }();
            b.Tj = function () {
              function a() {
                this.Uj = null;
                this.af = new b.Vj();
                this._e = new b.Wj();
                this.Xj = new b.Yj();
                this.Zj = new b.$j();
                this._j = new b.ak();
                this.bk = new b.ck();
                this.dk = new b.ek();
                this.fk = new b.gk();
                this.$h = new b.hk();
                this.ik = new b.jk();
                this.kk = new b.lk();
                this.mk = new b.nk();
                this.ok = new b.pk();
                this.qk = new b.rk();
                this.ie = new b.sk();
                this.tk = new b.uk();
                this.vk = new b.wk();
                this.xk = new b.yk();
                this.zk = [];
              }
              function c(a, b) {
                if (b !== 0) {
                  var c = a[b];
                  d.T(a, 0, 1, b);
                  a[0] = c;
                }
              }
              function e(a, b) {
                if (b !== a.length + 1) {
                  var c = a[b];
                  d.T(a, b + 1, b, a.length - b - 1);
                  a[a.length - 1] = c;
                }
              }
              function f(a, b) {
                for (var c = 0; c < a.length; c++) {
                  if (a[c] === b) {
                    return c;
                  }
                }
                return -1;
              }
              a.prototype.ha = function () {
                this.Uj = null;
                this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
                for (var a = 0; a < this.zk.length; a++) {
                  this.zk[a].ha();
                }
              };
              a.prototype.lh = function (a, b) {
                for (var c = this.zk.length - 1; c >= 0; c--) {
                  this.zk[c].Nf(a, b);
                }
                if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                  this.Uj.Nf(a, b);
                }
              };
              a.prototype.Jf = function () {
                for (var a = this.zk.length - 1; a >= 0; a--) {
                  this.zk[a].Jf();
                }
                if (this.Uj != null) {
                  this.Uj.Jf();
                }
              };
              a.prototype.Ak = function (a) {
                var b = f(this.zk, a);
                if (b >= 0) {
                  this.zk[0].Bk();
                  c(this.zk, b);
                  this.Ck();
                }
              };
              a.prototype.Dk = function () {
                this.zk[0].Bk();
                do {
                  e(this.zk, 0);
                } while (this.zk[0].nd !== b.Fk.Ek);
                this.Ck();
              };
              a.prototype.Ck = function () {
                var a = this.zk[0];
                a.Gk();
                a.Hk();
                this.Ik();
              };
              a.prototype.Jk = function () {
                return this.zk.length !== 0 && this.zk[0].nd === b.Fk.Ek && this.qk.Kk();
              };
              a.prototype.Lk = function () {
                if (this.zk.length === 0) {
                  return null;
                } else {
                  return this.zk[0];
                }
              };
              a.prototype.Ik = function () {
                if (this.Jk()) {
                  this.Ak(this.qk);
                }
              };
              return a;
            }();
            b.Pi = function () {
              function a() {
                this.Ch = [];
                this.zh = [];
              }
              a.Qi = function (a, b) {
                return {
                  Dh: a,
                  Bh: b
                };
              };
              a.Ri = function (a, b) {
                return {
                  Ah: a,
                  Bh: b
                };
              };
              return a;
            }();
            b.Mk = function () {
              function c() {
                this.setNk = new WeakSet();
                this.Nk = [];
                this.Ok = [];
                this.Pk = false;
                this.Qk = e;
                this.Rk = {};
              }
              var e = "guest";
              c.Sk = new (function () {
                function a() {}
                a.Tk = function () {
                  function a(a) {
                    this.Uk = a;
                  }
                  return a;
                }();
                a.prototype.Vk = function () {
                  return typeof FB != "undefined";
                };
                a.prototype.Wk = function (a, b, c) {
                  var d = "https://graph.facebook.com/me?access_token=" + a;
                  $.get(d).fail(function () {
                    b();
                  }).done(function () {
                    c();
                  });
                };
                a.prototype.Xk = function (b, c) {
                  if (!this.Vk()) {
                    b();
                    return;
                  }
                  this.Yk(function () {
                    FB.login(function (d) {
                      if (d.status !== "connected") {
                        b();
                        return;
                      }
                      var e = d.authResponse.accessToken;
                      c(new a.Tk(e));
                    });
                  }, function (a) {
                    c(a);
                  });
                };
                a.prototype.Yk = function (b, c) {
                  var d = this;
                  if (!this.Vk()) {
                    b();
                    return;
                  }
                  FB.getLoginStatus(function (e) {
                    if (e.status !== "connected") {
                      b();
                      return;
                    }
                    var f = e.authResponse.accessToken;
                    d.Wk(f, function () {
                      b();
                    }, function () {
                      c(new a.Tk(f));
                    });
                  });
                };
                a.prototype.Zk = function () {
                  if (this.Vk()) {
                    FB.logout();
                  }
                };
                return a;
              }())();
              c.$k = new (function () {
                function a() {}
                a._k = function () {
                  function a(a, b) {
                    this.Uk = a;
                    this.al = b;
                  }
                  return a;
                }();
                a.prototype.Vk = function () {
                  return Ha !== undefined;
                };
                a.prototype.Xk = function (b, c) {
                  if (Ha === undefined) {
                    b();
                    return;
                  }
                  Ha.then(function () {
                    if (Ha.isSignedIn.get()) {
                      var d = Ha.currentUser.get();
                      var e = d.getAuthResponse().id_token;
                      var f = new Date().getTime() + 0;
                      if (new Date().getTime() < f) {
                        c(new a._k(e, f));
                        return;
                      }
                    }
                    Ha.signIn().then(function (d) {
                      if (d.error !== undefined) {
                        b();
                        return;
                      }
                      if (!d.isSignedIn()) {
                        b();
                        return;
                      }
                      var e = d.getAuthResponse().id_token;
                      var f = new Date().getTime() + d.getAuthResponse().expires_in * 1000;
                      c(new a._k(e, f));
                    });
                  });
                };
                a.prototype.Yk = function (b, c) {
                  if (Ha === undefined) {
                    b();
                    return;
                  }
                  Ha.then(function () {
                    if (Ha.isSignedIn.get()) {
                      var d = Ha.currentUser.get();
                      var e = d.getAuthResponse().id_token;
                      var f = new Date().getTime() + d.getAuthResponse().expires_in * 1000;
                      if (new Date().getTime() < f) {
                        c(new a._k(e, f));
                        return;
                      }
                    }
                    b();
                  });
                };
                a.prototype.Zk = function () {
                  if (Ha !== undefined) {
                    Ha.signOut();
                  }
                };
                return a;
              }())();
              c.prototype.ha = function () {
                this.bl();
              };
              c.prototype.cl = function () {
                if (this.Pk) {
                  return this.Rk.userId;
                } else {
                  return "";
                }
              };
              c.prototype.dl = function () {
                if (this.Pk) {
                  return this.Rk.username;
                } else {
                  return "";
                }
              };
              c.prototype.el = function () {
                if (this.Pk) {
                  return this.Rk.nickname.substring(0, C);
                } else {
                  return "";
                }
              };
              c.prototype.fl = function () {
                if (this.Pk) {
                  return this.Rk.avatarUrl;
                } else {
                  return GUEST_AVATAR_URL;
                }
              };
              c.prototype.gl = function () {
                return this.Pk && this.Rk.isBuyer;
              };
              c.prototype.hl = function () {
                return this.Pk && this.Rk.isConsentGiven;
              };
              c.prototype.il = function () {
                if (this.Pk) {
                  return this.Rk.coins;
                } else {
                  return 0;
                }
              };
              c.prototype.jl = function () {
                if (this.Pk) {
                  return this.Rk.level;
                } else {
                  return 1;
                }
              };
              c.prototype.kl = function () {
                if (this.Pk) {
                  return this.Rk.expOnLevel;
                } else {
                  return 0;
                }
              };
              c.prototype.ll = function () {
                if (this.Pk) {
                  return this.Rk.expToNext;
                } else {
                  return 50;
                }
              };
              c.prototype.ml = function () {
                if (this.Pk) {
                  return this.Rk.skinId;
                } else {
                  return 0;
                }
              };
              c.prototype.nl = function () {
                if (this.Pk) {
                  return this.Rk.eyesId;
                } else {
                  return 0;
                }
              };
              c.prototype.ol = function () {
                if (this.Pk) {
                  return this.Rk.mouthId;
                } else {
                  return 0;
                }
              };
              c.prototype.pl = function () {
                if (this.Pk) {
                  return this.Rk.glassesId;
                } else {
                  return 0;
                }
              };
              c.prototype.ql = function () {
                if (this.Pk) {
                  return this.Rk.hatId;
                } else {
                  return 0;
                }
              };
              c.prototype.rl = function () {
                if (this.Pk) {
                  return this.Rk.highScore;
                } else {
                  return 0;
                }
              };
              c.prototype.sl = function () {
                if (this.Pk) {
                  return this.Rk.bestSurvivalTimeSec;
                } else {
                  return 0;
                }
              };
              c.prototype.tl = function () {
                if (this.Pk) {
                  return this.Rk.kills;
                } else {
                  return 0;
                }
              };
              c.prototype.ul = function () {
                if (this.Pk) {
                  return this.Rk.headShots;
                } else {
                  return 0;
                }
              };
              c.prototype.vl = function () {
                if (this.Pk) {
                  return this.Rk.sessionsPlayed;
                } else {
                  return 0;
                }
              };
              c.prototype.wl = function () {
                if (this.Pk) {
                  return this.Rk.totalPlayTimeSec;
                } else {
                  return 0;
                }
              };
              c.prototype.xl = function () {
                if (this.Pk) {
                  return this.Rk.regDate;
                } else {
                  return {};
                }
              };
              c.prototype.yl = function (a) {
                this.Nk.push(a);
                a();
              };
              c.prototype.zl = function (a) {
                this.Ok.push(a);
                a();
              };
              c.prototype.Lj = function (a, b) {
                var c = this.Rk.propertyList;
                if (c == null) {
                  return false;
                }
                var d = a.toString();
                for (var e = 0; e < c.length; e++) {
                  var f = c[e];
                  if (f.id === d && f.type === b) {
                    return true;
                  }
                }
                return false;
              };
              c.prototype.Hj = function () {
                return this.Pk;
              };
              c.prototype.Al = function () {
                return this.Qk;
              };
              c.prototype.Bl = function (c) {
                var d = this;
                var e = this.cl();
                var f = this.il();
                var g = this.jl();
                this.Cl(function () {
                  if (c != null) {
                    c();
                  }
                }, function (h) {
                  Y(h.user_data);
                  d.Rk = h.user_data;
                  d.Dl();
                  d.Rk.isConsentGiven = true;
                  var i = d.cl();
                  var j = d.il();
                  var k = d.jl();
                  if (e === i) {
                    if (k > 1 && k !== g) {
                      a().og.qk.El(new b.Fl(currLevel));
                    }
                    var l = j - f;
                    if (l >= 20) {
                      a().og.qk.El(new b.Gl(l));
                    }
                  }
                  if (c != null) {
                    c();
                  }
                });
              };
              c.prototype.Cl = function (a, b) {
                var c = d.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
                d.Z(c, a, function (c) {
                  if (c.code !== 1200) {
                    a();
                  } else {
                    b(c);
                  }
                });
              };
              c.prototype.Hl = function (a, b, c, e) {
                var f = d.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + a + "&type=" + b;
                d.Z(f, function () {
                  c();
                }, function (a) {
                  if (a.code !== 1200) {
                    c();
                  } else {
                    e(a);
                  }
                });
              };
              c.prototype.Il = function (a, b) {
                var c = d.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
                d.Z(c, a, function (c) {
                  if (c.code !== 1200) {
                    a();
                  } else {
                    b(c);
                  }
                });
              };
              c.prototype.Jl = function (a) {
                var b = this;
                if (this.Pk) {
                  this.Kl();
                }
                c.Sk.Xk(function () {
                  a();
                }, function (c) {
                  b.Ll("fb", c.Uk, a);
                });
              };
              c.prototype.Ml = function (a) {
                var b = this;
                if (this.Pk) {
                  this.Kl();
                }
                c.$k.Xk(function () {
                  a();
                }, function (c) {
                  b.Ll("gg", c.Uk, a);
                });
              };
              c.prototype.Ll = function (a, b, c, d) {
                d = d || 0;
                var e = $("#please-wait-view");
                if (d < 1) {
                  e.append(` AUTO CONNECTION <i id="auto_connection_text">${d}<i>...`);
                }
                var f = this;
                var g = a + "_" + b;
                var h = "https://gateway.wormate.io/pub/wuid/" + g + "/login";
                bbs.wuid = g;
                setTimeout(function () {
                  d++;
                  e.fadeIn(500);
                  $("#auto_connection_text").html(d);
                  fetch(h).then(function (a) {
                    if (a.ok) {
                      return a.json();
                    } else {
                      throw new Error("Erro na solicitação");
                    }
                  }).then(function (g) {
                    if (g.code !== 1200) {
                      f.Ll(a, b, c, d);
                      return;
                    }
                    if (g.user_data) {
                      e.html("...");
                      e.fadeOut(500);
                      f.Ol(a, b, g.user_data);
                      if (c != null) {
                        c();
                      }
                    }
                  }).catch(function (a) {
                    f.Nl();
                    e.html("...");
                    e.fadeOut(500);
                  });
                }, 1000);
              };
              c.prototype.Kl = function () {
                try {
                  this.Pl();
                  this.Ql();
                } catch (a) {}
                this.Rl();
              };
              c.prototype.Sl = function () {
                if (this.Pk) {
                  this.Il(function () {}, function (a) {});
                }
              };
              c.prototype.Nl = function () {
                a().og.Ak(a().og.tk);
              };
              c.prototype.Ol = function (a, c, d) {
                var e = this;
                var f = this.Pk ? this.Rk.userId : "guest";
                Z(d, function (d) {
                  Y(d);
                  e.Pk = true;
                  e.Qk = a + "_" + c;
                  e.Rk = d;
                  b.Vf.eg(b.Vf.$f, a, 60);
                  if (f !== e.Rk.userId) {
                    e.Tl();
                  } else {
                    e.Dl();
                  }
                  window.bbs.loading = false;
                });
              };
              c.prototype.Rl = function () {
                var a = this.Pk ? this.Rk.userId : "guest";
                this.Pk = false;
                this.Qk = e;
                this.Rk = {};
                b.Vf.eg(b.Vf.$f, "", 60);
                if (a !== this.Rk.userId) {
                  this.Tl();
                } else {
                  this.Dl();
                }
              };
              c.prototype.bl = function () {
                var a = b.Vf.fg(b.Vf.$f);
                var d = this;
                if (a === "fb") {
                  var e = 1;
                  (function a() {
                    if (!c.Sk.Vk() && e++ < 5) {
                      setTimeout(a, 1000);
                      return;
                    }
                    c.Sk.Yk(function () {}, function (a) {
                      d.Ll("fb", a.Uk);
                    });
                  })();
                } else if (a === "gg") {
                  var f = 1;
                  (function a() {
                    if (!c.$k.Vk() && f++ < 5) {
                      setTimeout(a, 1000);
                      return;
                    }
                    c.$k.Yk(function () {}, function (a) {
                      d.Ll("gg", a.Uk);
                    });
                  })();
                }
              };
              c.prototype.Tl = function () {
                for (var a = 0; a < this.Nk.length; a++) {
                  this.Nk[a]();
                }
                this.Dl();
              };
              c.prototype.Dl = function () {
                for (var a = 0; a < this.Ok.length; a++) {
                  this.Ok[a]();
                }
              };
              c.prototype.Pl = function () {
                c.Sk.Zk();
              };
              c.prototype.Ql = function () {
                c.$k.Zk();
              };
              return c;
            }();
            b.if = function () {
              function a(a, c, d) {
                this.ef = d;
                this.hd = false;
                this.nc = new e.Container();
                this.nc.visible = false;
                this.Ul = new Array(a);
                for (var f = 0; f < this.Ul.length; f++) {
                  var g = new b.Vl(new Float32Array(c * 3));
                  g.Wl(c);
                  this.Ul[f] = g;
                  this.nc.addChild(g.tf());
                }
                this.ff = 1;
                this.gf = 1;
                this.Jf();
              }
              a.prototype.tf = function () {
                return this.nc;
              };
              a.prototype.Kf = function (a) {
                this.hd = a;
                this.nc.visible = a;
              };
              a.prototype.Jf = function () {
                this.ff = this.ef.width();
                this.gf = this.ef.height();
                var a = this.gf / 30;
                for (var b = 0; b < this.Ul.length; b++) {
                  this.Ul[b].Xl(a);
                }
              };
              a.prototype.Uf = function () {
                if (this.hd) {
                  for (var a = 0; a < this.Ul.length; a++) {
                    this.Ul[a].Uf(this.lf);
                  }
                }
              };
              a.prototype.Yl = function () {
                return this.ff;
              };
              a.prototype.Zl = function () {
                return this.gf;
              };
              a.prototype.Qf = function (a, b) {
                this.Ul[a].$l(b);
              };
              a.prototype.Rf = function (a, b) {
                this.Ul[a]._l(b);
              };
              a.prototype.Sf = function (a, b, c) {
                var d = this.Ul[a];
                for (var e = d.am(), f = d.bm, g = 0; g < e; g++) {
                  f[g * 3] = b;
                  f[g * 3 + 1] = c;
                  f[g * 3 + 2] = 0;
                }
              };
              a.prototype.Tf = function (a, b, c) {
                var d = this.Ul[a];
                var e = d.am();
                var f = d.bm;
                var g = d.cm();
                var h = f[0];
                var i = undefined;
                var j = f[1];
                var k = undefined;
                var l = b - h;
                var m = c - j;
                var n = Math.hypot(l, m);
                if (n > 0) {
                  f[0] = b;
                  f[1] = c;
                  f[2] = Math.atan2(m, l);
                  var o = g * 0.25 / (g * 0.25 + n);
                  var q = 1 - o * 2;
                  for (var r = 1, s = e; r < s; r++) {
                    i = f[r * 3];
                    f[r * 3] = f[r * 3 - 3] * q + (i + h) * o;
                    h = i;
                    k = f[r * 3 + 1];
                    f[r * 3 + 1] = f[r * 3 - 2] * q + (k + j) * o;
                    j = k;
                    f[r * 3 + 2] = Math.atan2(f[r * 3 - 2] - f[r * 3 + 1], f[r * 3 - 3] - f[r * 3]);
                  }
                }
              };
              return a;
            }();
            b.dm = function () {
              function c(c) {
                var d = this;
                this.ef = c;
                this.Eb = c.get()[0];
                this.lf = new e.Renderer({
                  view: c.get()[0],
                  transparent: true,
                  antialias: false
                });
                this.hd = false;
                this.em = new b.Vl(new Float32Array(f * 3));
                this.ff = 1;
                this.gf = 1;
                this.fm = g.gm;
                this.hm = g.gm;
                this.im = g.gm;
                this.jm = g.gm;
                this.km = g.gm;
                this.Jf();
                a().Lc.$b(function () {
                  d.em.lm();
                });
              }
              var f = Math.min(100, b.WormSpriteTree.wc);
              var g = {
                gm: "0lt0",
                mm: "0lt1",
                nm: "0lt2"
              };
              c.prototype.Kf = function (a) {
                this.hd = a;
              };
              c.prototype.Jf = function () {
                var a = window.devicePixelRatio ? window.devicePixelRatio : 1;
                this.ff = this.ef.width();
                this.gf = this.ef.height();
                this.lf.resize(this.ff, this.gf);
                this.lf.resolution = a;
                this.Eb.width = a * this.ff;
                this.Eb.height = a * this.gf;
                var b = this.gf / 4;
                this.em.Xl(b);
                var c = d.P(Math.floor(this.ff / b) * 2 - 5, 1, f);
                this.em.Wl(c);
              };
              c.prototype.Nf = function () {
                if (this.hd) {
                  var a = Date.now();
                  var b = a / 200;
                  var c = Math.sin(b);
                  this.em.om(this.pm(this.fm, c), this.qm(this.fm, c));
                  this.em.rm(this.sm(this.hm, c), this.sm(this.im, c), this.sm(this.jm, c), this.sm(this.km, c));
                  var d = this.em.cm();
                  for (var e = this.em.am(), f = this.em.bm, g = this.ff - (this.ff - d * 0.5 * (e - 1)) * 0.5, h = this.gf * 0.5, i = 0, j = 0, k = -1; k < e; k++) {
                    var l = k;
                    var m = Math.cos(l * 1 / 12 * Math.PI - b) * (1 - Math.pow(16, l * -1 / 12));
                    if (k >= 0) {
                      f[k * 3] = g + d * -0.5 * l;
                      f[k * 3 + 1] = h + d * 0.5 * m;
                      f[k * 3 + 2] = Math.atan2(j - m, l - i);
                    }
                    i = l;
                    j = m;
                  }
                  this.em.Uf();
                  this.em.tm(this.lf);
                }
              };
              c.prototype.$l = function (a) {
                this.em.$l(a);
              };
              c.prototype.um = function (a) {
                this.fm = a ? g.nm : g.mm;
                this.hm = g.gm;
                this.im = g.gm;
                this.jm = g.gm;
                this.km = g.gm;
              };
              c.prototype.vm = function (a) {
                this.fm = g.gm;
                this.hm = a ? g.nm : g.mm;
                this.im = g.gm;
                this.jm = g.gm;
                this.km = g.gm;
              };
              c.prototype.wm = function (a) {
                this.fm = g.gm;
                this.hm = g.gm;
                this.im = a ? g.nm : g.mm;
                this.jm = g.gm;
                this.km = g.gm;
              };
              c.prototype.xm = function (a) {
                this.fm = g.gm;
                this.hm = g.gm;
                this.im = g.gm;
                this.jm = a ? g.nm : g.mm;
                this.km = g.gm;
              };
              c.prototype.ym = function (a) {
                this.fm = g.gm;
                this.hm = g.gm;
                this.im = g.gm;
                this.jm = g.gm;
                this.km = a ? g.nm : g.mm;
              };
              c.prototype.pm = function (a, b) {
                switch (a) {
                  case g.mm:
                    return 0.9 + b * 0.1;
                  case g.nm:
                    return 0.4 + b * 0.3;
                }
                return 1;
              };
              c.prototype.qm = function (a, b) {
                switch (a) {
                  case g.mm:
                    return 0.6 + b * 0.5;
                  case g.nm:
                    return 0.3 + b * 0.3;
                }
                return 1;
              };
              c.prototype.sm = function (a, b) {
                switch (a) {
                  case g.mm:
                    return 0.9 + b * 0.1;
                  case g.nm:
                    return 0.6 + b * 0.4;
                }
                return 1;
              };
              return c;
            }();
            b.Oj = function () {
              function a(a, b, c, d, e) {
                this.zm = a;
                this.Am = b;
                this.Bm = c;
                this.Cm = d;
                this.Dm = e;
              }
              a.Nj = function (b) {
                return new a(b.price, b.guest, b.nonbuyable, b.nonbuyableCause, b.description);
              };
              a.Pj = function (b) {
                return new a(b.price, b.guest, b.nonbuyable, b.nonbuyableCause, b.description);
              };
              a.prototype.Jj = function () {
                return this.zm;
              };
              a.prototype.Mj = function () {
                return this.Am;
              };
              a.prototype.Kj = function () {
                return this.Bm;
              };
              a.prototype.Em = function () {
                return this.Cm;
              };
              a.prototype.Fm = function () {
                return this.Dm;
              };
              return a;
            }();
            b.qf = function () {
              function a(a) {
                this.Gm = {};
                this.Gm[f] = a;
                var b = e.Shader.from(j, k, this.Gm);
                this.sf = new e.Mesh(i, b);
                this.sf.blendMode = e.v.B;
              }
              var b = "a1_" + d.X();
              var c = "a2_" + d.X();
              var f = "u3_" + d.X();
              var g = "u4_" + d.X();
              var h = "v1_" + d.X();
              var i = new e.Geometry().addAttribute(b, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
              var j = "precision mediump float;attribute vec2 " + b + ";attribute vec2 " + c + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + g + ";varying vec2 " + h + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + b + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + g + ";vec2 uv=" + c + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + h + "=uv;}";
              var k = "precision highp float;varying vec2 " + h + ";uniform sampler2D " + f + ";void main(){gl_FragColor=texture2D(" + f + "," + h + ");}";
              a.prototype.Mf = function (a, b) {
                this.sf.scale.x = a;
                this.sf.scale.y = b;
                this.Gm[g] = [a, b, 1 / a + 1, 1 / b + 1];
              };
              return a;
            }();
            b.WMGBS1 = function () {
              function a() {
                this.Gm = {};
                this.Gm[b] = [1, 0.5, 0.25, 0.5];
                this.Gm[c] = e.Texture.WHITE;
                this.Gm[d] = [0, 0];
                this.Gm[f] = [0, 0];
                this.sf = new PIXI.TilingSprite(Ba.xe._g, Ba.xe._g.width, Ba.xe._g.height);
              }
              var b = "u3_";
              var c = "u4_";
              var d = "u5_";
              var f = "u6_";
              a.prototype.Ec = function (a, c, d, e) {
                var f = this.Gm[b];
                f[0] = a;
                f[1] = c;
                f[2] = d;
                f[3] = e;
              };
              a.prototype.$g = function (a) {
                this.Gm[c] = a;
              };
              a.prototype.Uf = function (a, b, c, d) {
                this.sf.position.x = -550;
                this.sf.position.y = -550;
              };
              return a;
            }();
            b.WMGBS2 = function () {
              function a() {
                this.Gm = {};
                this.Gm[h] = [1, 0.5, 0.25, 0.5];
                this.Gm[i] = e.Texture.WHITE;
                this.Gm[j] = [0, 0];
                this.Gm[k] = [0, 0];
                var a = e.Shader.from(n, o, this.Gm);
                this.sf = new e.Mesh(m, a);
              }
              var b = "a1_" + d.X();
              var c = "a2_" + d.X();
              var f = "translationMatrix";
              var g = "projectionMatrix";
              var h = "u3_" + d.X();
              var i = "u4_" + d.X();
              var j = "u5_" + d.X();
              var k = "u6_" + d.X();
              var l = "v1_" + d.X();
              var m = new e.Geometry().addAttribute(b, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(c, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
              var n = "precision mediump float;attribute vec2 " + b + ";attribute vec2 " + c + ";uniform mat3 " + f + ";uniform mat3 " + g + ";varying vec2 " + l + ";void main(){" + l + "=" + c + ";gl_Position=vec4((" + g + "*" + f + "*vec3(" + b + ",1.0)).xy,0.0,1.0);}";
              var o = "precision highp float;varying vec2 " + l + ";uniform vec4 " + h + ";uniform sampler2D " + i + ";uniform vec2 " + j + ";uniform vec2 " + k + ";void main(){vec2 coord=" + l + "*" + j + "+" + k + ";vec4 v_color_mix=" + h + ";gl_FragColor=texture2D(" + i + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
              a.prototype.Ec = function (a, b, c, d) {
                var e = this.Gm[h];
                e[0] = a;
                e[1] = b;
                e[2] = c;
                e[3] = d;
              };
              a.prototype.$g = function (a) {
                this.Gm[i] = a;
              };
              a.prototype.Uf = function (a, b, c, d) {
                this.sf.position.x = a;
                this.sf.position.y = b;
                this.sf.scale.x = c;
                this.sf.scale.y = d;
                var e = this.Gm[j];
                e[0] = c * 0.2520615384615385;
                e[1] = d * 0.4357063736263738;
                var f = this.Gm[k];
                f[0] = a * 0.2520615384615385;
                f[1] = b * 0.4357063736263738;
              };
              return a;
            }();
            b.sc = function () {
              function a() {
                this.xc = new PIXI.Sprite();
                this.ev = null;
                this.Hm = 0;
                this.Im = 0;
                this.si = null;
              }
              a.prototype.Bc = function (a, b, c) {
                if (a) {
                  this.xc.texture = a.Ea();
                  this.xc.anchor.set(a.ya, a.za);
                  this.Hm = a.Aa;
                  this.Im = a.Ba;
                } else {}
              };
              a.prototype.Ec = function (a) {
                this.xc.tint = parseInt(a.substring(1), 16);
              };
              a.prototype.Tc = function (a) {
                try {
                  this.xc.width = a * this.Hm;
                  this.xc.height = a * this.Im;
                } catch (a) {}
              };
              a.prototype.md = function (a) {
                this.xc.rotation = a;
              };
              a.prototype.ld = function (a, b) {
                this.xc.position.set(a, b);
              };
              a.prototype.kd = function (a) {
                this.xc.visible = a;
              };
              a.prototype.gd = function () {
                return this.xc.visible;
              };
              a.prototype.jj = function (a) {
                this.xc.alpha = a;
              };
              a.prototype.Qc = function () {
                return this.xc;
              };
              a.prototype.Rc = function () {
                d.U(this.xc);
              };
              return a;
            }();
            b.Worm = function () {
              function c(a) {
                this.hh = a;
                this.Eh = new b.Worm.li();
                this.xi = false;
                this.wi = true;
                this.Xc = false;
                this.$c = 0;
                this.Jm = 0;
                this.dj = 1;
                this.bd = 0;
                this.Bh = 0;
                this.dd = {};
                this.ad = 0;
                this.Km = new Float32Array(e * 2);
                this.Lm = new Float32Array(e * 2);
                this._c = new Float32Array(e * 2);
                this.Mm = null;
                this.Nm = null;
                this.Om = null;
                this.Pm();
              }
              var e = 200;
              c.prototype.si = function () {
                if (this.Nm != null) {
                  d.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  d.U(this.Om);
                }
              };
              c.prototype.Pm = function () {
                this.zi(0.25);
                this.Eh.ma = "";
                this.wi = true;
                this.dd = {};
                this.kd(false);
              };
              c.prototype.ri = function (a) {
                this.Eh = a;
                this.Qm(this.xi);
              };
              c.prototype.kd = function (a) {
                var b = this.xi;
                this.xi = a;
                this.Qm(b);
              };
              c.prototype.zi = function (a) {
                this.Bh = a * 50;
                var b = a;
                if (a > this.hh.Ag) {
                  b = Math.atan((a - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
                }
                var c = Math.sqrt(Math.pow(b * 5, 0.707106781186548) * 4 + 25);
                var d = Math.min(e, Math.max(3, (c - 5) * 5 + 1));
                var f = this.ad;
                this.$c = (5 + c * 0.9) * 0.025;
                this.ad = Math.floor(d);
                this.Jm = d - this.ad;
                if (f > 0 && f < this.ad) {
                  var g = this.Km[f * 2 - 2];
                  var h = this.Km[f * 2 - 1];
                  var i = this.Lm[f * 2 - 2];
                  var j = this.Lm[f * 2 - 1];
                  var k = this._c[f * 2 - 2];
                  var l = this._c[f * 2 - 1];
                  for (var m = f; m < this.ad; m++) {
                    this.Km[m * 2] = g;
                    this.Km[m * 2 + 1] = h;
                    this.Lm[m * 2] = i;
                    this.Lm[m * 2 + 1] = j;
                    this._c[m * 2] = k;
                    this._c[m * 2 + 1] = l;
                  }
                }
              };
              c.prototype.Ei = function (a, b) {
                this.ad = b;
                for (var c = 0; c < this.ad; c++) {
                  this.Km[c * 2] = this.Lm[c * 2] = this._c[c * 2] = a();
                  this.Km[c * 2 + 1] = this.Lm[c * 2 + 1] = this._c[c * 2 + 1] = a();
                }
              };
              c.prototype.Bi = function (a, b, c) {
                this.Xc = c;
                for (var d = 0; d < this.ad; d++) {
                  this.Km[d * 2] = this.Lm[d * 2];
                  this.Km[d * 2 + 1] = this.Lm[d * 2 + 1];
                }
                var e = a - this.Lm[0];
                var f = b - this.Lm[1];
                this.Rm(e, f, this.ad, this.Lm);
              };
              c.prototype.Rm = function (a, b, c, d) {
                var e = Math.hypot(a, b);
                if (e > 0) {
                  var f = d[0];
                  var g = undefined;
                  d[0] += a;
                  var h = d[1];
                  var i = undefined;
                  d[1] += b;
                  var j = this.$c / (this.$c + e);
                  var k = 1 - j * 2;
                  for (var l = 1, m = c - 1; l < m; l++) {
                    g = d[l * 2];
                    d[l * 2] = d[l * 2 - 2] * k + (g + f) * j;
                    f = g;
                    i = d[l * 2 + 1];
                    d[l * 2 + 1] = d[l * 2 - 1] * k + (i + h) * j;
                    h = i;
                  }
                  j = this.Jm * this.$c / (this.Jm * this.$c + e);
                  k = 1 - j * 2;
                  d[c * 2 - 2] = d[c * 2 - 4] * k + (d[c * 2 - 2] + f) * j;
                  d[c * 2 - 1] = d[c * 2 - 3] * k + (d[c * 2 - 1] + h) * j;
                }
              };
              c.prototype.fh = function () {
                return {
                  x: this._c[0],
                  y: this._c[1]
                };
              };
              c.prototype.yi = function (a, b) {
                var c = 1000000;
                var d = a;
                var e = b;
                for (var f = 0; f < this.ad; f++) {
                  var g = this._c[f * 2];
                  var h = this._c[f * 2 + 1];
                  var i = Math.hypot(a - g, b - h);
                  if (i < c) {
                    c = i;
                    d = g;
                    e = h;
                  }
                }
                return {
                  x: d,
                  y: e,
                  distance: c
                };
              };
              c.prototype.ti = function (a) {
                this.Mm = a;
              };
              c.prototype.hj = function (a, b) {
                this.dj = d.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(a / 400 * Math.PI) * 0.1 : 1 : 0, b, 1 / 800);
                this.bd = d.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, b, 0.0025);
                if (this.Nm != null) {
                  this.Nm.nc.alpha = this.dj;
                }
                if (this.Om != null) {
                  this.Om.alpha = this.dj;
                }
              };
              c.prototype.ij = function (a, b, c, e) {
                if (this.xi && this.wi) {
                  var f = Math.pow(0.11112, b / 95);
                  for (var g = 0; g < this.ad; g++) {
                    this._c[g * 2] = d.S(d.S(this.Km[g * 2], this.Lm[g * 2], c), this._c[g * 2], f);
                    this._c[g * 2 + 1] = d.S(d.S(this.Km[g * 2 + 1], this.Lm[g * 2 + 1], c), this._c[g * 2 + 1], f);
                  }
                }
                if (this.Nm && this.xi) {
                  this.Nm.Zc(this, a, b, e);
                }
                if (this.Om) {
                  this.Om.ih.x = this._c[0];
                  this.Om.ih.y = this._c[1] - this.$c * 3;
                }
              };
              c.prototype.Qm = function (a) {
                if (this.xi) {
                  if (!a) {
                    this.Sm();
                  }
                } else {
                  if (this.Nm != null) {
                    d.U(this.Nm.nc);
                  }
                  if (this.Om != null) {
                    d.U(this.Om);
                  }
                }
              };
              c.prototype.Sm = function () {
                var c = a();
                this.Nm = this.Nm || new b.WormSpriteTree();
                d.U(this.Nm.nc);
                this.Nm.yc(c.dh.hh.xg, c.Lc.Ub().jb(this.Eh.Gh), c.Lc.Ub().ib(this.Eh.Hh), c.Lc.Ub().kb(this.Eh.ni), c.Lc.Ub().lb(this.Eh.oi), c.Lc.Ub().mb(this.Eh.pi), c.Lc.Ub().nb(this.Eh.qi), "#ffffff");
                this.Om = this.Om || new b.Tm("");
                d.U(this.Om);
                this.Om.style.fontFamily = "PTSans";
                this.Om.anchor.set(0.5);
                this.Om.style.fontSize = 14;
                this.Om.style.fill = c.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
                this.Om.text = E ? this.Eh.ma : "-----";
                this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
              };
              c.li = function () {
                function a() {
                  this.ae = 0;
                  this.Gh = Ca.ps ? Ca.ps : b.GameParams.Cg;
                  this.Hh = 0;
                  this.ni = 0;
                  this.oi = 0;
                  this.pi = 0;
                  this.qi = 0;
                  this.ma = 0;
                }
                return a;
              }();
              return c;
            }();
            b.Tm = function () {
              return d.M(e.Text, function (a, b, c) {
                e.Text.call(this, a, b, c);
                this.ih = {
                  x: 0,
                  y: 0
                };
              });
            }();
            b.hb = function () {
              function a(a, b, c, d, e) {
                this.lj = a;
                this.mj = b;
                this.nj = c;
                this.oj = d;
                this.pj = e;
              }
              a.prototype.Um = function (b) {
                return new a(b, this.mj, this.nj, this.oj, this.pj);
              };
              a.prototype.Vm = function (b) {
                return new a(this.lj, b, this.nj, this.oj, this.pj);
              };
              a.prototype.Wm = function (b) {
                return new a(this.lj, this.mj, b, this.oj, this.pj);
              };
              a.prototype.Xm = function (b) {
                return new a(this.lj, this.mj, this.nj, b, this.pj);
              };
              a.prototype.Ym = function (b) {
                return new a(this.lj, this.mj, this.nj, this.oj, b);
              };
              return a;
            }();
            b.Vl = function () {
              function c(a) {
                this.Zm = new b.WormSpriteTree();
                this.Zm.nc.addChild(this.Zm.oc);
                this.$m = null;
                this._m = null;
                this.bm = a;
                this.pc = 0;
                this.Gi = 1;
                this.an = 1;
                this.bn = 1;
                this.cn = 1;
                this.dn = 1;
                this.gn = 1;
                this.hn = 1;
                this._l("#ffffff");
              }
              var d = new b.hb(0, 0, 0, 0, 0);
              c.prototype.tf = function () {
                return this.Zm.nc;
              };
              c.prototype.Wl = function (a) {
                this.pc = a;
                if (this.Zm.pc !== a) {
                  for (var b = a; b < this.Zm.qc.length; b++) {
                    this.Zm.qc[b].Uc();
                  }
                  while (this.Zm.pc > a) {
                    this.Zm.pc -= 1;
                    var c = this.Zm.qc[this.Zm.pc];
                    c.Dc.Rc();
                    c.Cc.Rc();
                  }
                  while (this.Zm.pc < a) {
                    var d = this.Zm.qc[this.Zm.pc];
                    this.Zm.pc += 1;
                    this.Zm.nc.addChild(d.Cc.Qc());
                    this.Zm.nc.addChild(d.Dc.Qc());
                    d.Cc.jj(this.an);
                    d.Dc.jj(this.bn);
                  }
                  for (var e = 0; e < this.Zm.oc.Fc.length; e++) {
                    this.Zm.oc.Fc[e].jj(this.cn);
                  }
                  for (var f = 0; f < this.Zm.oc.Gc.length; f++) {
                    this.Zm.oc.Gc[f].jj(this.dn);
                  }
                  for (var g = 0; g < this.Zm.oc.Ic.length; g++) {
                    this.Zm.oc.Ic[g].jj(this.gn);
                  }
                  for (var h = 0; h < this.Zm.oc.Hc.length; h++) {
                    this.Zm.oc.Hc[h].jj(this.hn);
                  }
                }
              };
              c.prototype.am = function () {
                return this.pc;
              };
              c.prototype.$l = function (a) {
                this.$m = a;
                this._m = "#ffffff";
                this.lm();
              };
              c.prototype._l = function (a) {
                this.$m = d;
                this._m = a;
                this.lm();
              };
              c.prototype.lm = function () {
                var c = a();
                this.Zm.yc(b.Ac.vg, null, c.Lc.Ub().ib(this.$m.lj), c.Lc.Ub().kb(this.$m.mj), c.Lc.Ub().lb(this.$m.nj), c.Lc.Ub().mb(this.$m.pj), c.Lc.Ub().nb(this.$m.oj), this._m);
              };
              c.prototype.Xl = function (a) {
                this.Gi = a;
              };
              c.prototype.cm = function () {
                return this.Gi;
              };
              c.prototype.om = function (a, b) {
                this.an = a;
                this.bn = b;
                for (var c = 0; c < this.pc; c++) {
                  var d = this.Zm.qc[c];
                  d.Cc.jj(this.an);
                  d.Dc.jj(this.bn);
                }
              };
              c.prototype.rm = function (a, b, c, d) {
                this.cn = a;
                this.dn = b;
                this.gn = c;
                this.hn = d;
                for (var e = 0; e < this.Zm.oc.Fc.length; e++) {
                  this.Zm.oc.Fc[e].jj(this.cn);
                }
                for (var f = 0; f < this.Zm.oc.Gc.length; f++) {
                  this.Zm.oc.Gc[f].jj(this.dn);
                }
                for (var g = 0; g < this.Zm.oc.Ic.length; g++) {
                  this.Zm.oc.Ic[g].jj(this.gn);
                }
                for (var h = 0; h < this.Zm.oc.Hc.length; h++) {
                  this.Zm.oc.Hc[h].jj(this.hn);
                }
              };
              c.prototype.Uf = function () {
                var a = this.Gi * 2;
                var b = this.Gi * 2 * 1.5;
                if (this.pc > 0) {
                  var c = this.bm[0];
                  var d = this.bm[1];
                  var e = this.bm[2];
                  this.Zm.qc[0].Sc(c, d, a, b, e);
                  this.Zm.oc.Sc(c, d, a, e);
                }
                for (var f = 1; f < this.pc; f++) {
                  var g = this.bm[f * 3];
                  var h = this.bm[f * 3 + 1];
                  var i = this.bm[f * 3 + 2];
                  this.Zm.qc[f].Sc(g, h, a, b, i);
                }
              };
              c.prototype.tm = function (a) {
                a.render(this.Zm.nc);
              };
              return c;
            }();
            b.kf = function () {
              function a(a) {
                this.nd = a;
              }
              a.bgcanvas = $("#background-canvas");
              a.socialButtons = $("#social-buttons");
              a.socialButtons.html("");
              a.jn = $("#game-view");
              a.gameCanvas = $("#game-canvas");
              a.ln = $("#results-view");
              a.mn = $("#stretch-box");
              a.nn = $("#main-menu-view");
              a.pn = $("#popup-view");
              a.qn = $("#loading-view");
              a.rn = $("#restricted-view");
              a.sn = $("#toaster-view");
              a.tn = $("#error-gateway-connection-view");
              a.un_error = $("#error-game-connection-view");
              a.vn = $("#markup-wrap");
              a.prototype.ha = function () {};
              a.prototype.Gk = function () {};
              a.prototype.Hk = function () {};
              a.prototype.Bk = function () {};
              a.prototype.Jf = function () {};
              a.prototype.Nf = function (a, b) {};
              return a;
            }();
            b.Vj = function () {
              function c(a, b, c, d, e, f) {
                var g = "OK";
                var h = $(g);
                h.click(function () {
                  if (typeof FB != "undefined" && FB.ui !== undefined) {
                    FB.ui({
                      method: "feed",
                      display: "popup",
                      link: b,
                      name: c,
                      caption: d,
                      description: e,
                      picture: f
                    }, function () {});
                  }
                });
                return h;
              }
              var e = $("#final-caption");
              var f = $("#final-continue");
              var g = $("#congrats-bg");
              var i = $("#unl6wj4czdl84o9b");
              $("#congrats");
              var j = $("#final-share-fb");
              var k = $("#final-message");
              var l = $("#final-score");
              var m = $("#final-place");
              var n = $("#final-board");
              var o = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
                var c = this;
                var g = a();
                j.toggle(h.xn);
                e.text(d.H("index.game.result.title"));
                f.text(d.H("index.game.result.continue"));
                f.click(function () {
                  g.Ci.Be();
                  g.zn.yn.ka();
                  g.Ci.pe(b.ge.je._e);
                  g.og.Ak(g.og._e);
                });
                $("html").keydown(function (a) {
                  if (a.keyCode === 32) {
                    c.An = true;
                  }
                }).keyup(function (a) {
                  if (a.keyCode === 32) {
                    c.An = false;
                  }
                });
                this.ng = new b.Eg(b.kf.gameCanvas);
                this.Cn = 0;
                this.Bn = 0;
                this.An = false;
              });
              o.prototype.ha = function () {};
              o.prototype.Gk = function () {
                if (this.Cn === 0) {
                  b.kf.jn.stop();
                  b.kf.jn.fadeIn(500);
                  b.kf.ln.stop();
                  b.kf.ln.fadeOut(1);
                  b.kf.nn.stop();
                  b.kf.nn.fadeOut(50);
                  b.kf.pn.stop();
                  b.kf.pn.fadeOut(50);
                  b.kf.sn.stop();
                  b.kf.sn.fadeOut(50);
                  b.kf.qn.stop();
                  b.kf.qn.fadeOut(50);
                  b.kf.rn.stop();
                  b.kf.rn.fadeOut(50);
                  b.kf.tn.stop();
                  b.kf.tn.fadeOut(50);
                  b.kf.un_error.stop();
                  b.kf.un_error.fadeOut(50);
                  b.kf.mn.stop();
                  b.kf.mn.fadeOut(1);
                  b.kf.bgcanvas.stop();
                  b.kf.bgcanvas.fadeOut(50);
                  b.GameView.Kf(false);
                  b.kf.socialButtons.stop();
                  b.kf.socialButtons.fadeOut(50);
                  b.kf.vn.stop();
                  b.kf.vn.fadeOut(50);
                } else {
                  b.kf.jn.stop();
                  b.kf.jn.fadeIn(500);
                  b.kf.ln.stop();
                  b.kf.ln.fadeIn(500);
                  b.kf.nn.stop();
                  b.kf.nn.fadeOut(50);
                  b.kf.pn.stop();
                  b.kf.pn.fadeOut(50);
                  b.kf.sn.stop();
                  b.kf.sn.fadeOut(50);
                  b.kf.qn.stop();
                  b.kf.qn.fadeOut(50);
                  b.kf.rn.stop();
                  b.kf.rn.fadeOut(50);
                  b.kf.tn.stop();
                  b.kf.tn.fadeOut(50);
                  b.kf.un_error.stop();
                  b.kf.un_error.fadeOut(50);
                  b.kf.mn.stop();
                  b.kf.mn.fadeOut(1);
                  b.kf.bgcanvas.stop();
                  b.kf.bgcanvas.fadeOut(50);
                  b.GameView.Kf(false);
                  b.kf.socialButtons.stop();
                  b.kf.socialButtons.fadeOut(50);
                  b.kf.vn.stop();
                  b.kf.vn.fadeOut(50);
                }
              };
              o.prototype.Dn = function () {
                this.Cn = 0;
                return this;
              };
              o.prototype.En = function () {
                g.hide();
                setTimeout(function () {
                  g.fadeIn(500);
                }, 3000);
                i.hide();
                setTimeout(function () {
                  i.fadeIn(500);
                }, 500);
                this.Cn = 1;
                return this;
              };
              o.prototype.Hk = function () {
                this.An = false;
                this.ng.Jf();
                if (this.Cn === 1) {
                  a().Ci.Fe();
                }
              };
              o.prototype.Jf = function () {
                this.ng.Jf();
              };
              o.prototype.Nf = function (a, b) {
                this.ng.Nf(a, b);
              };
              o.prototype.Fn = function (a, b, e) {
                var f = undefined;
                var g = undefined;
                var i = undefined;
                if (b >= 1 && b <= 10) {
                  f = d.H("index.game.result.place.i" + b);
                  g = d.H("index.game.result.placeInBoard");
                  i = d.H("index.game.social.shareResult.messGood").replace("{0}", e).replace("{1}", a).replace("{2}", f);
                } else {
                  f = "";
                  g = d.H("index.game.result.tryHit");
                  i = d.H("index.game.social.shareResult.messNorm").replace("{0}", e).replace("{1}", a);
                }
                k.html(d.H("index.game.result.your"));
                l.html(a);
                m.html(f);
                n.html(g);
                if (h.xn) {
                  var o = d.H("index.game.result.share");
                  d.H("index.game.social.shareResult.caption");
                  j.empty().append(c(o, "https://wormate.io", "wormate.io", i, i, "https://wormate.io/images/og-share-img-new.jpg"));
                }
              };
              o.prototype.Gn = function () {
                return this.Bn;
              };
              o.prototype.Hn = function () {
                return this.An;
              };
              return o;
            }();
            b.sk = function () {
              var c = $("#loading-progress-cont");
              var e = $("#loading-progress-bar");
              var f = $("#loading-progress-text");
              var g = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
                this.In = -1;
                this.Jn = "";
              });
              g.prototype.ha = function () {};
              g.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(50);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(50);
                b.kf.qn.stop();
                b.kf.qn.fadeIn(500);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(50);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(50);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(50);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeOut(50);
                b.kf.vn.stop();
                b.kf.vn.fadeOut(50);
              };
              g.prototype.Hk = function () {
                a().Ci.pe(b.ge.je.ie);
              };
              g.prototype.Bk = function () {};
              g.prototype.Kn = function () {
                this.Ln("", 0);
                c.stop();
                c.fadeIn(100);
              };
              g.prototype.Mn = function () {
                c.stop();
                c.fadeOut(100);
              };
              g.prototype.Ln = function (a, b) {
                if (this.Jn !== a) {
                  this.Jn = a;
                }
                var c = d.P(Math.floor(b * 100), 0, 100);
                if (this.In !== c) {
                  e.css({
                    width: c + "%"
                  });
                  f.html(c + " %");
                }
              };
              return g;
            }();
            b.Wj = function () {
              var c = $("#mm-line-top");
              $("#mm-line-center");
              $("#mm-line-bottom");
              var e = $("#mm-bottom-buttons");
              var f = $("#mm-menu-cont");
              var g = $("#mm-loading");
              var i = $("#mm-loading-progress-bar");
              var j = $("#mm-loading-progress-text");
              $("#mm-event-text");
              var k = $("#mm-skin-canv");
              var l = $("#mm-skin-prev");
              var m = $("#mm-skin-next");
              var n = $("#mm-skin-over");
              var o = $("#mm-skin-over-button-list");
              var q = $("#mm-params-nickname");
              var r = $("#mm-params-game-mode");
              var s = $("#mm-action-play");
              var t = $("#mm-action-guest");
              var u = $("#mm-action-login");
              var v = $("#mm-player-info");
              var w = $("#mm-store");
              var x = $("#mm-leaders");
              var y = $("#mm-settings");
              var z = $("#mm-coins-box");
              var A = $("#mm-player-avatar");
              var B = $("#mm-player-username");
              var C = $("#mm-coins-val");
              var D = $("#mm-player-exp-bar");
              var E = $("#mm-player-exp-val");
              var F = $("#mm-player-level");
              var G = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.Ek);
                var c = a();
                this.In = -1;
                this.Jn = "";
                this.Nn = new b.dm(k);
                r.click(function () {
                  c.Ci.Be();
                });
                k.click(function () {
                  if (c.Ij.Hj()) {
                    c.Ci.Be();
                    c.og.Ak(c.og.ik);
                  }
                });
                l.click(function () {
                  c.Ci.Be();
                  c.On.Ej();
                });
                m.click(function () {
                  c.Ci.Be();
                  c.On.Dj();
                });
                q.keypress(function (a) {
                  if (a.keyCode == 13) {
                    c.Pn(true);
                  }
                });
                s.click(function () {
                  c.Ci.Be();
                  c.Pn(true);
                });
                t.click(function () {
                  c.Ci.Be();
                  c.Pn(true);
                });
                u.click(function () {
                  c.Ci.Be();
                  c.og.Ak(c.og.fk);
                });
                y.click(function () {
                  c.Ci.Be();
                  c.og.Ak(c.og.$h);
                });
                v.click(function () {
                  if (c.Ij.Hj()) {
                    c.Ci.Be();
                    c.og.Ak(c.og.dk);
                  }
                });
                x.click(function () {
                  if (c.Ij.Hj()) {
                    c.Ci.Be();
                    c.og.Ak(c.og.bk);
                  }
                });
                w.click(function () {
                  if (c.Ij.Hj()) {
                    c.Ci.Be();
                    c.og.Ak(c.og.kk);
                  }
                });
                z.click(function () {
                  if (c.Ij.Hj()) {
                    c.Ci.Be();
                    c.og.Ak(c.og._j);
                  }
                });
                this.Qn();
                this.Rn();
                var d = b.Vf.fg(b.Vf._f);
                if (d !== "ARENA" && d !== "TEAM2") {
                  d = "ARENA";
                }
                r.val(d);
              });
              G.prototype.ha = function () {
                var c = a();
                var e = this;
                c.Ij.zl(function () {
                  if (c.Ij.Hj()) {
                    c.On.Fj(c.Ij.ml(), b.tj.sj);
                    c.On.Fj(c.Ij.nl(), b.tj.uj);
                    c.On.Fj(c.Ij.ol(), b.tj.vj);
                    c.On.Fj(c.Ij.pl(), b.tj.xj);
                    c.On.Fj(c.Ij.ql(), b.tj.wj);
                  } else {
                    c.On.Fj(c.Sn(), b.tj.sj);
                    c.On.Fj(0, b.tj.uj);
                    c.On.Fj(0, b.tj.vj);
                    c.On.Fj(0, b.tj.xj);
                    c.On.Fj(0, b.tj.wj);
                  }
                });
                c.Ij.zl(function () {
                  s.toggle(c.Ij.Hj());
                  u.toggle(!c.Ij.Hj());
                  v.toggle(true);
                  t.toggle(!c.Ij.Hj());
                  y.toggle(true);
                  x.toggle(c.Ij.Hj());
                  w.toggle(c.Ij.Hj());
                  z.toggle(c.Ij.Hj());
                  if (c.Ij.Hj()) {
                    n.hide();
                    B.html(c.Ij.dl());
                    A.attr("src", c.Ij.fl());
                    C.html(c.Ij.il());
                    D.width(c.Ij.kl() * 100 / c.Ij.ll() + "%");
                    E.html(c.Ij.kl() + " / " + c.Ij.ll());
                    F.html(c.Ij.jl());
                    q.val(c.Ij.el());
                  } else {
                    n.toggle(h.xn && !c.Tn());
                    B.html(B.data("guest"));
                    A.attr("src", d.a.e);
                    C.html("10");
                    D.width("0");
                    E.html("");
                    F.html(1);
                    q.val(b.Vf.fg(b.Vf.ag));
                  }
                });
                c.On.zj(function () {
                  e.Nn.$l(c.On.yj());
                });
              };
              G.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeIn(500);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(50);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(50);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(50);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(50);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(50);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeIn(500);
                b.kf.vn.stop();
                b.kf.vn.fadeIn(500);
              };
              G.prototype.Un = function () {
                c.fadeIn(500);
                e.fadeIn(500);
                f.fadeIn(500);
                g.fadeOut(100);
              };
              G.prototype.Vn = function () {
                c.fadeOut(100);
                e.fadeOut(100);
                f.fadeOut(100);
                g.fadeIn(500);
              };
              G.prototype.Ln = function (a, b) {
                if (this.Jn !== a) {
                  this.Jn = a;
                }
                var c = d.P(Math.floor(b * 100), 0, 100);
                if (this.In !== c) {
                  i.css({
                    width: c + "%"
                  });
                  j.html(c + " %");
                }
              };
              G.prototype.Hk = function () {
                a().Ci.Ce();
                this.Nn.Kf(true);
              };
              G.prototype.Bk = function () {
                this.Nn.Kf(false);
              };
              G.prototype.Jf = function () {
                this.Nn.Jf();
              };
              G.prototype.Nf = function (a, b) {
                this.Nn.Nf();
              };
              G.prototype.el = function () {
                return q.val();
              };
              G.prototype.Wn = function () {
                return r.val();
              };
              G.prototype.Qn = function () {};
              G.prototype.Rn = function () {
                function b() {
                  c.Xn(true);
                  setTimeout(function () {
                    n.hide();
                  }, 3000);
                }
                var c = a();
                if (h.xn && !c.Tn()) {
                  n.show();
                  var e = d.H("index.game.main.menu.unlockSkins.share");
                  var f = encodeURIComponent(d.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                  var g = encodeURIComponent(d.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                  o.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + f + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + e + "</span></a>").click(b));
                  o.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + g + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + e + "</span></a>").click(b));
                }
              };
              return G;
            }();
            b.yk = function () {
              var a = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
              });
              a.prototype.ha = function () {};
              a.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(50);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(50);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(50);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(50);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(50);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(50);
                b.kf.mn.stop();
                b.kf.mn.fadeOut(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeOut(50);
                b.GameView.Kf(false);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeOut(50);
                b.kf.vn.stop();
                b.kf.vn.fadeOut(50);
              };
              return a;
            }();
            b.pk = function () {
              var a = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
              });
              a.prototype.ha = function () {};
              a.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(50);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(50);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(50);
                b.kf.rn.stop();
                b.kf.rn.fadeIn(500);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(50);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(50);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeOut(50);
                b.kf.vn.stop();
                b.kf.vn.fadeOut(50);
              };
              a.prototype.Hk = function () {};
              return a;
            }();
            b.rk = function () {
              var c = $("#toaster-stack");
              var e = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
                this.Yn = [];
                this.Zn = null;
              });
              e.prototype.ha = function () {};
              e.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(50);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeIn(500);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(50);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(50);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(50);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(50);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeOut(50);
                b.kf.vn.stop();
                b.kf.vn.fadeIn(500);
              };
              e.prototype.Hk = function () {
                this.$n();
              };
              e.prototype.Kk = function () {
                return this.Zn != null || this.Yn.length > 0;
              };
              e.prototype._n = function (b) {
                this.Yn.unshift(b);
                setTimeout(function () {
                  a().og.Ik();
                }, 0);
              };
              e.prototype.El = function (b) {
                this.Yn.push(b);
                setTimeout(function () {
                  a().og.Ik();
                }, 0);
              };
              e.prototype.$n = function () {
                var b = this;
                if (this.Zn == null) {
                  if (this.Yn.length == 0) {
                    a().og.Dk();
                    return;
                  }
                  var d = this.Yn.shift();
                  this.Zn = d;
                  var e = d.tf();
                  e.hide();
                  e.fadeIn(300);
                  c.append(e);
                  d.ao = function () {
                    e.fadeOut(300);
                    setTimeout(function () {
                      e.remove();
                    }, 300);
                    if (b.Zn == d) {
                      b.Zn = null;
                    }
                    b.$n();
                  };
                  d.Hk();
                }
              };
              return e;
            }();
            b.Fk = {
              wn: 0,
              Ek: 1
            };
            b.bo = function () {
              var c = $("#popup-menu-label");
              var e = $("#popup-menu-coins-box");
              var g = $("#popup-menu-coins-val");
              $("#popup-menu-back").click(function () {
                var b = a();
                b.Ci.Be();
                b.og.Dk();
              });
              e.click(function () {
                var b = a();
                if (b.Ij.Hj()) {
                  b.Ci.Be();
                  b.og.Ak(b.og._j);
                }
              });
              var h = d.M(b.kf, function (a, c) {
                b.kf.call(this, b.Fk.Ek);
                this.ma = a;
                this.co = c;
                this.do = [];
              });
              h.prototype.ha = function () {
                h.parent.prototype.ha.call(this);
                if (!h.eo) {
                  h.eo = true;
                  var c = a();
                  c.Ij.zl(function () {
                    if (c.Ij.Hj()) {
                      g.html(c.Ij.il());
                    } else {
                      g.html("0");
                    }
                  });
                }
                b.bo.fo.stop();
                b.bo.fo.fadeOut(100);
              };
              h.go = $("#coins-view");
              h.ho = $("#leaders-view");
              h.io = $("#profile-view");
              h.jo = $("#settings-view");
              h.ko = $("#login-view");
              h.lo = $("#skins-view");
              h.mo = $("#store-view");
              h.no = $("#wear-view");
              h.oo = $("#withdraw-consent-view");
              h.po = $("#delete-account-view");
              h.fo = $("#please-wait-view");
              h.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(200);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(200);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(200);
                b.kf.pn.stop();
                b.kf.pn.fadeIn(200);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(200);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(200);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(200);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(200);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(200);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeIn(200);
                b.kf.vn.stop();
                b.kf.vn.fadeIn(200);
                c.html(this.ma);
                e.toggle(this.co);
                this.qo();
              };
              h.prototype.qo = function () {};
              h.prototype.ro = function (a) {
                var c = this;
                var e = d.V(0, 2147483647) & 2147483647;
                this.do.push(e);
                b.bo.fo.stop();
                b.bo.fo.fadeIn(100);
                setTimeout(function () {
                  c.so(e);
                }, a);
                return new f(this, e);
              };
              h.prototype.so = function (a) {
                var c = this.do.indexOf(a);
                if (c >= 0) {
                  this.do.splice(c, 1);
                  if (this.do.length === 0) {
                    b.bo.fo.stop();
                    b.bo.fo.fadeOut(100);
                  }
                }
              };
              return h;
            }();
            var f = function () {
              function a(a, b) {
                this.to = a;
                this.uo = b;
              }
              a.prototype.vo = function () {
                this.to.so(this.uo);
              };
              return a;
            }();
            b.ak = function () {
              var c = $("#store-buy-coins_125000");
              var e = $("#store-buy-coins_50000");
              var f = $("#store-buy-coins_16000");
              var g = $("#store-buy-coins_7000");
              var h = $("#store-buy-coins_3250");
              var i = $("#store-buy-coins_1250");
              var j = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.coins.tab"), false);
                var j = a();
                var k = this;
                c.click(function () {
                  j.Ci.Be();
                  k.wo("coins_125000");
                });
                e.click(function () {
                  j.Ci.Be();
                  k.wo("coins_50000");
                });
                f.click(function () {
                  j.Ci.Be();
                  k.wo("coins_16000");
                });
                g.click(function () {
                  j.Ci.Be();
                  k.wo("coins_7000");
                });
                h.click(function () {
                  j.Ci.Be();
                  k.wo("coins_3250");
                });
                i.click(function () {
                  j.Ci.Be();
                  k.wo("coins_1250");
                });
              });
              j.prototype.ha = function () {
                j.parent.prototype.ha.call(this);
              };
              j.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeIn(200);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              j.prototype.Hk = function () {
                a().Ci.Ce();
              };
              j.prototype.wo = function (a) {};
              return j;
            }();
            b.ck = function () {
              var c = $("#highscore-table");
              var e = $("#leaders-button-level");
              var f = $("#leaders-button-highscore");
              var g = $("#leaders-button-kills");
              var h = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.leaders.tab"), true);
                var c = a();
                var h = this;
                this.xo = {};
                this.yo = {
                  zo: {
                    Ao: e,
                    Bo: "byLevel"
                  },
                  Co: {
                    Ao: f,
                    Bo: "byHighScore"
                  },
                  Do: {
                    Ao: g,
                    Bo: "byKillsAndHeadShots"
                  }
                };
                e.click(function () {
                  c.Ci.Be();
                  h.Eo(h.yo.zo);
                });
                f.click(function () {
                  c.Ci.Be();
                  h.Eo(h.yo.Co);
                });
                g.click(function () {
                  c.Ci.Be();
                  h.Eo(h.yo.Do);
                });
              });
              h.prototype.ha = function () {
                h.parent.prototype.ha.call(this);
              };
              h.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeIn(200);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              h.prototype.Hk = function () {
                var b = this;
                a().Ci.Ce();
                var c = this.ro(5000);
                var e = d.a.b + "/pub/leaders";
                d.Z(e, function () {
                  b.xo = {
                    byLevel: [],
                    byHighScore: [],
                    byKillsAndHeadShots: []
                  };
                  b.Eo(b.Fo ?? b.yo.zo);
                  c.vo();
                }, function (a) {
                  b.xo = a;
                  b.Eo(b.Fo ?? b.yo.zo);
                  c.vo();
                });
              };
              h.prototype.Eo = function (a) {
                this.Fo = a;
                for (var b in this.yo) {
                  if (this.yo.hasOwnProperty(b)) {
                    var d = this.yo[b];
                    d.Ao.removeClass("pressed");
                  }
                }
                this.Fo.Ao.addClass("pressed");
                for (var e = this.xo[this.Fo.Bo], f = "", g = 0; g < e.length; g++) {
                  var h = e[g];
                  f += "<div class=\"table-row\"><span>" + (g + 1) + "</span><span><img src=\"" + h.avatarUrl + "\"/></span><span>" + h.username + "</span><span>" + h.level + "</span><span>" + h.highScore + "</span><span>" + h.headShots + " / " + h.kills + "</span></div>";
                }
                c.empty();
                c.append(f);
              };
              return h;
            }();
            b.gk = function () {
              var c = $("#popup-login-gg");
              var e = $("#popup-login-fb");
              var f = d.M(b.bo, function () {
                var f = this;
                b.bo.call(this, d.H("index.game.popup.menu.login.tab"), false);
                var g = a();
                c.click(function () {
                  g.Ci.Be();
                  var a = f.ro(10000);
                  setTimeout(function () {
                    g.Ij.Ml(function () {
                      if (g.Ij.Hj()) {
                        g.Ci.Fe();
                      }
                      a.vo();
                    });
                  }, 500);
                });
                e.click(function () {
                  g.Ci.Be();
                  var a = f.ro(10000);
                  setTimeout(function () {
                    g.Ij.Jl(function () {
                      if (g.Ij.Hj()) {
                        g.Ci.Fe();
                      }
                      a.vo();
                    });
                  }, 500);
                });
              });
              f.prototype.ha = function () {
                f.parent.prototype.ha.call(this);
              };
              f.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeIn(200);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              f.prototype.Hk = function () {
                a().Ci.Ce();
              };
              return f;
            }();
            b.ek = function () {
              var c = $("#profile-avatar");
              var e = $("#profile-username");
              var f = $("#profile-experience-bar");
              var g = $("#profile-experience-val");
              var h = $("#profile-level");
              var i = $("#profile-stat-highScore");
              var j = $("#profile-stat-bestSurvivalTime");
              var k = $("#profile-stat-kills");
              var l = $("#profile-stat-headshots");
              var m = $("#profile-stat-gamesPlayed");
              var n = $("#profile-stat-totalTimeSpent");
              var o = $("#profile-stat-registrationDate");
              var q = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.profile.tab"), true);
              });
              q.prototype.ha = function () {
                q.parent.prototype.ha.call(this);
              };
              q.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeIn(200);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              q.prototype.Hk = function () {
                var b = a();
                b.Ci.Ce();
                var q = b.Ij.xl();
                var r = moment([q.year, q.month - 1, q.day]).format("LL");
                e.html(b.Ij.dl());
                c.attr("src", b.Ij.fl());
                f.width(b.Ij.kl() * 100 / b.Ij.ll() + "%");
                g.html(b.Ij.kl() + " / " + b.Ij.ll());
                h.html(b.Ij.jl());
                i.html(b.Ij.rl());
                j.html(d.J(b.Ij.sl()));
                k.html(b.Ij.tl());
                l.html(b.Ij.ul());
                m.html(b.Ij.vl());
                n.html(d.J(b.Ij.wl()));
                o.html(r);
              };
              return q;
            }();
            b.hk = function () {
              var c = $("#settings-music-enabled-switch");
              var e = $("#settings-sfx-enabled-switch");
              var f = $("#settings-show-names-switch");
              var g = $("#popup-logout");
              var h = $("#popup-logout-container");
              var i = $("#popup-delete-account");
              var j = $("#popup-delete-account-container");
              var k = $("#popup-withdraw-consent");
              var l = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.settings.tab"), false);
                var h = this;
                var j = a();
                c.click(function () {
                  var a = !!c.prop("checked");
                  b.Vf.eg(b.Vf.Yf, a, 30);
                  j.Ci.re(a);
                  j.Ci.Be();
                });
                e.click(function () {
                  var a = !!e.prop("checked");
                  b.Vf.eg(b.Vf.Zf, a, 30);
                  j.Ci.oe(a);
                  j.Ci.Be();
                });
                f.click(function () {
                  j.Ci.Be();
                });
                g.click(function () {
                  j.Ci.Be();
                  h.ro(500);
                  j.Ij.Kl();
                });
                i.click(function () {
                  if (j.Ij.Hj()) {
                    j.Ci.Be();
                    j.og.Ak(j.og.Zj);
                  } else {
                    j.Ci.Ge();
                  }
                });
                k.click(function () {
                  if (j.Go()) {
                    j.Ci.Be();
                    j.og.Ak(j.og.Xj);
                  } else {
                    j.Ci.Ge();
                  }
                });
              });
              l.prototype.ha = function () {
                l.parent.prototype.ha.call(this);
                var d = a();
                var g = undefined;
                switch (b.Vf.fg(b.Vf.Yf)) {
                  case "false":
                    g = false;
                    break;
                  default:
                    g = true;
                }
                c.prop("checked", g);
                d.Ci.re(g);
                var i = undefined;
                switch (b.Vf.fg(b.Vf.Zf)) {
                  case "false":
                    i = false;
                    break;
                  default:
                    i = true;
                }
                e.prop("checked", i);
                d.Ci.oe(i);
                var k = undefined;
                switch (b.Vf.fg(b.Vf.Xf)) {
                  case "false":
                    k = false;
                    break;
                  default:
                    k = true;
                }
                f.prop("checked", k);
                d.Ij.yl(function () {
                  h.toggle(d.Ij.Hj());
                  j.toggle(d.Ij.Hj());
                });
              };
              l.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeIn(200);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              l.prototype.Hk = function () {
                var b = a();
                b.Ci.Ce();
                if (b.Go()) {
                  k.show();
                } else {
                  k.hide();
                }
              };
              l.prototype.Zh = function () {
                return f.prop("checked");
              };
              return l;
            }();
            b.jk = function () {
              var c = $("#store-view-canv");
              var e = $("#skin-description-text");
              var f = $("#skin-group-description-text");
              var g = $("#store-locked-bar");
              var h = $("#store-locked-bar-text");
              var i = $("#store-buy-button");
              var j = $("#store-item-price");
              var k = $("#store-groups");
              var l = $("#store-view-prev");
              var m = $("#store-view-next");
              var n = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.skins.tab"), true);
                var e = this;
                var f = a();
                this.Ho = null;
                this.Io = [];
                this.Jo = {};
                this.Ko = new b.dm(c);
                i.click(function () {
                  f.Ci.Be();
                  e.Lo();
                });
                l.click(function () {
                  f.Ci.Be();
                  e.Ho.Mo();
                });
                m.click(function () {
                  f.Ci.Be();
                  e.Ho.No();
                });
              });
              n.prototype.ha = function () {
                n.parent.prototype.ha.call(this);
                var b = this;
                var c = a();
                c.Lc.$b(function () {
                  var a = c.Lc.Xb();
                  b.Io = [];
                  for (var d = 0; d < a.skinGroupArrayDict.length; d++) {
                    b.Io.push(new o(b, a.skinGroupArrayDict[d]));
                  }
                  b.Jo = {};
                  for (var e = 0; e < a.skinArrayDict.length; e++) {
                    var f = a.skinArrayDict[e];
                    b.Jo[f.id] = f;
                  }
                  b.Oo();
                });
                this.Po(false);
                c.On.zj(function () {
                  b.Po(false);
                });
              };
              n.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeIn(200);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              n.prototype.Hk = function () {
                a().Ci.pe(b.ge.je._e);
                a().Ci.Ce();
                this.Oo();
                this.Ko.Kf(true);
              };
              n.prototype.Bk = function () {
                this.Ko.Kf(false);
              };
              n.prototype.Jf = function () {
                this.Ko.Jf();
              };
              n.prototype.Nf = function (a, b) {
                this.Ko.Nf();
              };
              n.prototype.Oo = function () {
                var c = this;
                var d = this;
                var e = a();
                k.empty();
                for (var f = 0; f < this.Io.length; f++) {
                  (function (a) {
                    var b = c.Io[a];
                    var f = document.createElement("li");
                    k.append(f);
                    var g = $(f);
                    if (b.To && b.To.isCustom) {
                      g.css("background-color", "#FFF");
                      g.css("color", "#000");
                    }
                    g.html(b.Qo());
                    g.click(function () {
                      e.Ci.Be();
                      d.Ro(b);
                    });
                    b.So = g;
                  })(f);
                }
                if (this.Io.length > 0) {
                  var g = e.On.rj(b.tj.sj);
                  for (var f = 0; f < this.Io.length; f++) {
                    var h = this.Io[f];
                    for (var i = h.To.list, j = 0; j < i.length; j++) {
                      if (i[j] == g) {
                        h.Uo = j;
                        this.Ro(h);
                        return;
                      }
                    }
                  }
                  this.Ro(this.Io[0]);
                }
              };
              n.prototype.Ro = function (b) {
                var c = a();
                if (this.Ho !== b) {
                  this.Ho = b;
                  k.children().removeClass("pressed");
                  if (this.Ho.So) {
                    this.Ho.So.addClass("pressed");
                  }
                  f.html("");
                  if (b.To != null) {
                    var e = c.Lc.Xb().textDict[b.To.description];
                    if (e != null) {
                      f.html(d.K(d.I(e)));
                    }
                  }
                  this.Po(true);
                }
              };
              n.prototype.Vo = function () {
                if (this.Ho == null) {
                  return b.Si.Ui();
                } else {
                  return this.Ho.Wo();
                }
              };
              n.prototype.Lo = function () {
                var a = this;
                var b = this.Vo();
                if (b.Wi()) {
                  var c = b.bc();
                  a.Xo(c);
                }
              };
              n.prototype.Xo = function (c) {
                var d = a();
                var e = d.On.Gj(c, b.tj.sj);
                if (e != null) {
                  var f = e.Jj();
                  if (d.Ij.il() >= f) {
                    var g = d.On.rj(b.tj.sj);
                    var h = d.On.rj(b.tj.uj);
                    var i = d.On.rj(b.tj.vj);
                    var j = d.On.rj(b.tj.xj);
                    var k = d.On.rj(b.tj.wj);
                    var l = this.ro(5000);
                    d.Ij.Hl(c, b.tj.sj, function () {
                      l.vo();
                      d.og.Ak(d.og.tk);
                    }, function (a) {
                      d.Ij.Bl(function () {
                        d.On.Fj(g, b.tj.sj);
                        d.On.Fj(h, b.tj.uj);
                        d.On.Fj(i, b.tj.vj);
                        d.On.Fj(j, b.tj.xj);
                        d.On.Fj(k, b.tj.wj);
                        d.On.Fj(c, b.tj.sj);
                        l.vo();
                      });
                    });
                  }
                }
              };
              n.prototype.Po = function (c) {
                var f = a();
                var k = f.On.yj();
                var l = this.Vo();
                if (l.Wi()) {
                  var m = l.bc();
                  var n = f.On.Gj(m, b.tj.sj);
                  var o = false;
                  if (f.On.Cj(m, b.tj.sj)) {
                    g.hide();
                    i.hide();
                  } else if (n == null || n.Kj()) {
                    o = true;
                    g.show();
                    i.hide();
                    h.text(d.H("index.game.popup.menu.store.locked"));
                    if (n != null && n.Kj()) {
                      var q = f.Lc.Xb().textDict[n.Em()];
                      if (q != null) {
                        h.text(d.I(q));
                      }
                    }
                  } else {
                    g.hide();
                    i.show();
                    j.html(n.Jj());
                  }
                  e.html("");
                  if (n != null && n.Fm() != null) {
                    var r = f.Lc.Xb().textDict[n.Fm()];
                    if (r != null) {
                      e.html(d.K(d.I(r)));
                    }
                  }
                  W.html(m);
                  this.Ko.$l(k.Um(m));
                  this.Ko.um(o);
                  if (c) {
                    f.On.Fj(m, b.tj.sj);
                  }
                }
              };
              var o = function () {
                function c(a, b) {
                  this.Yo = a;
                  this.Uo = 0;
                  this.To = b;
                }
                c.prototype.Mo = function () {
                  if (--this.Uo < 0) {
                    this.Uo = this.To.list.length - 1;
                  }
                  this.Yo.Po(true);
                };
                c.prototype.No = function () {
                  if (++this.Uo >= this.To.list.length) {
                    this.Uo = 0;
                  }
                  this.Yo.Po(true);
                };
                c.prototype.Qo = function () {
                  if (this.To.img) {
                    var b = a().Lc.Xb().customPaths;
                    var c = URL_CDN + "/images/" + b.texture;
                    var e = [];
                    try {
                      e.push(`background-image:url('${c}')`);
                      e.push(`background-position: -${b.map[this.To.img].x}px -${b.map[this.To.img].y}px`);
                      e.push("background-repeat:no-repeat");
                      e.push("width: 180px");
                      e.push("height: 40px");
                    } catch (a) {
                      console.error(c, a);
                    }
                    return `<div id="${this.To.id}" style="${e.join(";")}"></div>`;
                  }
                  return d.I(this.To.name);
                };
                c.prototype.Wo = function () {
                  if (this.Uo >= this.To.list.length) {
                    return b.Si.Ui();
                  } else {
                    return b.Si.Vi(this.To.list[this.Uo]);
                  }
                };
                return c;
              }();
              return n;
            }();
            b.lk = function () {
              var c = $("#store-go-coins-button");
              var e = $("#store-go-skins-button");
              var f = $("#store-go-wear-button");
              var g = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.store.tab"), true);
                var g = a();
                c.click(function () {
                  g.Ci.Be();
                  g.og.Ak(g.og._j);
                });
                e.click(function () {
                  g.Ci.Be();
                  g.og.Ak(g.og.ik);
                });
                f.click(function () {
                  g.Ci.Be();
                  g.og.Ak(g.og.mk);
                });
              });
              g.prototype.ha = function () {
                g.parent.prototype.ha.call(this);
              };
              g.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeIn(200);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              g.prototype.Hk = function () {
                a().Ci.Ce();
              };
              return g;
            }();
            b.nk = function () {
              var c = $("#wear-view-canv");
              var e = $("#wear-description-text");
              var f = $("#wear-locked-bar");
              var g = $("#wear-locked-bar-text");
              var h = $("#wear-buy-button");
              var i = $("#wear-item-price");
              var j = $("#wear-eyes-button");
              var k = $("#wear-mouths-button");
              var l = $("#wear-glasses-button");
              var m = $("#wear-hats-button");
              var n = $("#wear-tint-chooser");
              var o = $("#wear-view-prev");
              var q = $("#wear-view-next");
              var r = d.M(b.bo, function () {
                var e = this;
                b.bo.call(this, d.H("index.game.popup.menu.wear.tab"), true);
                var f = a();
                var g = this;
                this.Zo = [];
                this.uj = new s(this, b.tj.uj, j);
                this.vj = new s(this, b.tj.vj, k);
                this.xj = new s(this, b.tj.xj, l);
                this.wj = new s(this, b.tj.wj, m);
                this.$o = null;
                this._o = null;
                this.ap = null;
                this.bp = null;
                this.cp = null;
                this.dp = null;
                this.Ko = new b.dm(c);
                h.click(function () {
                  f.Ci.Be();
                  g.ep();
                });
                o.click(function () {
                  f.Ci.Be();
                  g.$o.fp();
                });
                q.click(function () {
                  f.Ci.Be();
                  g.$o.gp();
                });
                j.click(function () {
                  f.Ci.Be();
                  g.hp(e.uj);
                });
                k.click(function () {
                  f.Ci.Be();
                  g.hp(e.vj);
                });
                l.click(function () {
                  f.Ci.Be();
                  g.hp(e.xj);
                });
                m.click(function () {
                  f.Ci.Be();
                  g.hp(e.wj);
                });
                this.Zo.push(this.uj);
                this.Zo.push(this.vj);
                this.Zo.push(this.xj);
                this.Zo.push(this.wj);
              });
              r.prototype.ha = function () {
                r.parent.prototype.ha.call(this);
                var b = a();
                var c = this;
                b.Lc.$b(function () {
                  var a = b.Lc.Xb();
                  c._o = a.eyesDict;
                  c.ap = a.mouthDict;
                  c.bp = a.glassesDict;
                  c.cp = a.hatDict;
                  c.dp = a.colorDict;
                  c.uj.ip(a.eyesVariantArray);
                  c.uj.jp(c._o);
                  c.vj.ip(a.mouthVariantArray);
                  c.vj.jp(c.ap);
                  c.xj.ip(a.glassesVariantArray);
                  c.xj.jp(c.bp);
                  c.wj.ip(a.hatVariantArray);
                  c.wj.jp(c.cp);
                });
                this.Po(false);
                b.On.zj(function () {
                  c.Po(false);
                });
              };
              r.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeIn(200);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              r.prototype.Hk = function () {
                a().Ci.pe(b.ge.je._e);
                a().Ci.Ce();
                this.hp(this.$o ?? this.uj);
                this.Ko.Kf(true);
              };
              r.prototype.Bk = function () {
                this.Ko.Kf(false);
              };
              r.prototype.Jf = function () {
                this.Ko.Jf();
              };
              r.prototype.Nf = function (a, b) {
                this.Ko.Nf();
              };
              r.prototype.hp = function (a) {
                this.$o = a;
                for (var b = 0; b < this.Zo.length; b++) {
                  this.Zo[b].Ao.removeClass("pressed");
                }
                this.$o.Ao.addClass("pressed");
                this.$o.Gk();
              };
              r.prototype.kp = function () {
                if (this.$o == null) {
                  return b.Si.Ui();
                } else {
                  return b.Si.Vi({
                    ae: this.$o.Wo(),
                    nd: this.$o.nd
                  });
                }
              };
              r.prototype.ep = function () {
                var a = this;
                var b = this.kp();
                if (b.Wi()) {
                  var c = b.bc();
                  a.lp(c.ae, c.nd);
                }
              };
              r.prototype.lp = function (c, d) {
                var e = a();
                var f = e.On.Gj(c, d);
                if (f != null) {
                  var g = f.Jj();
                  if (e.Ij.il() >= g) {
                    var h = e.On.rj(b.tj.sj);
                    var i = e.On.rj(b.tj.uj);
                    var j = e.On.rj(b.tj.vj);
                    var k = e.On.rj(b.tj.xj);
                    var l = e.On.rj(b.tj.wj);
                    var m = this.ro(5000);
                    e.Ij.Hl(c, d, function () {
                      m.vo();
                      e.og.Ak(e.og.tk);
                    }, function (a) {
                      e.Ij.Bl(function () {
                        e.On.Fj(h, b.tj.sj);
                        e.On.Fj(i, b.tj.uj);
                        e.On.Fj(j, b.tj.vj);
                        e.On.Fj(k, b.tj.xj);
                        e.On.Fj(l, b.tj.wj);
                        e.On.Fj(c, d);
                        m.vo();
                      });
                    });
                  }
                }
              };
              r.prototype.Po = function (c) {
                var j = a();
                var k = j.On.yj();
                var l = this.kp();
                if (l.Wi()) {
                  var m = l.bc();
                  var n = j.On.Gj(m.ae, m.nd);
                  var o = false;
                  if (j.On.Cj(m.ae, m.nd)) {
                    f.hide();
                    h.hide();
                  } else if (n == null || n.Kj()) {
                    o = true;
                    f.show();
                    h.hide();
                    g.text(d.H("index.game.popup.menu.store.locked"));
                    if (n != null && n.Kj()) {
                      var q = j.Lc.Xb().textDict[n.Em()];
                      if (q != null) {
                        g.text(d.I(q));
                      }
                    }
                  } else {
                    f.hide();
                    h.show();
                    i.html(n.Jj());
                  }
                  e.html("");
                  if (n != null && n.Fm() != null) {
                    var r = j.Lc.Xb().textDict[n.Fm()];
                    if (r != null) {
                      e.html(d.K(d.I(r)));
                    }
                  }
                  var s = this.Ko;
                  switch (m.nd) {
                    case b.tj.uj:
                      s.$l(k.Vm(m.ae));
                      s.vm(o);
                      break;
                    case b.tj.vj:
                      s.$l(k.Wm(m.ae));
                      s.wm(o);
                      break;
                    case b.tj.xj:
                      s.$l(k.Ym(m.ae));
                      s.ym(o);
                      break;
                    case b.tj.wj:
                      s.$l(k.Xm(m.ae));
                      s.xm(o);
                  }
                  if (c) {
                    j.On.Fj(m.ae, m.nd);
                  }
                }
              };
              var s = function () {
                function b(a, b, c) {
                  this.Yo = a;
                  this.nd = b;
                  this.Ao = c;
                  this.ac = {};
                  this.mp = [[]];
                  this.np = -10;
                  this.op = -10;
                }
                b.prototype.ip = function (a) {
                  this.mp = a;
                };
                b.prototype.jp = function (a) {
                  this.ac = a;
                };
                b.prototype.Gk = function () {
                  var b = a();
                  var c = b.On.rj(this.nd);
                  for (var d = 0; d < this.mp.length; d++) {
                    for (var e = 0; e < this.mp[d].length; e++) {
                      if (this.mp[d][e] == c) {
                        this.pp(d);
                        this.qp(e);
                        return;
                      }
                    }
                  }
                  this.pp(0);
                  this.qp(0);
                };
                b.prototype.fp = function () {
                  var a = this.np - 1;
                  if (a < 0) {
                    a = this.mp.length - 1;
                  }
                  this.pp(a);
                  this.qp(this.op % this.mp[a].length);
                };
                b.prototype.gp = function () {
                  var a = this.np + 1;
                  if (a >= this.mp.length) {
                    a = 0;
                  }
                  this.pp(a);
                  this.qp(this.op % this.mp[a].length);
                };
                b.prototype.pp = function (b) {
                  var c = this;
                  if (b >= 0 && b < this.mp.length) {
                    this.np = b;
                    n.empty();
                    var d = this.mp[this.np];
                    if (d.length > 1) {
                      for (var e = 0; e < d.length; e++) {
                        (function (b) {
                          var e = d[b];
                          var f = c.ac[e];
                          var g = "#" + c.Yo.dp[f.prime];
                          var h = $("<div style=\"border-color:" + g + "\"></div>");
                          h.click(function () {
                            a().Ci.Be();
                            c.qp(b);
                          });
                          n.append(h);
                        })(e);
                      }
                    }
                  }
                };
                b.prototype.qp = function (a) {
                  if (a >= 0 && a < this.mp[this.np].length) {
                    this.op = a;
                    n.children().css("background-color", "transparent");
                    var b = n.children(":nth-child(" + (1 + a) + ")");
                    b.css("background-color", b.css("border-color"));
                    this.Yo.Po(true);
                  }
                };
                b.prototype.Wo = function () {
                  return this.mp[this.np][this.op];
                };
                return b;
              }();
              return r;
            }();
            b.Yj = function () {
              var c = $("#withdraw-consent-yes");
              var e = $("#withdraw-consent-no");
              var f = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.consent.tab"), false);
                var f = a();
                c.click(function () {
                  f.Ci.Be();
                  if (f.Go()) {
                    f.og.Ak(f.og._e);
                    f.rp(false, true);
                    f.og.qk._n(new b.sp());
                  } else {
                    f.og.Dk();
                  }
                });
                e.click(function () {
                  f.Ci.Be();
                  f.og.Dk();
                });
              });
              f.prototype.ha = function () {
                f.parent.prototype.ha.call(this);
              };
              f.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeIn(200);
                b.bo.po.stop();
                b.bo.po.fadeOut(50);
              };
              f.prototype.Hk = function () {
                a().Ci.Ce();
              };
              return f;
            }();
            b.$j = function () {
              var c = $("#delete-account-timer");
              var e = $("#delete-account-yes");
              var f = $("#delete-account-no");
              var g = d.M(b.bo, function () {
                b.bo.call(this, d.H("index.game.popup.menu.delete.tab"), false);
                var c = a();
                e.click(function () {
                  c.Ci.Be();
                  if (c.Ij.Hj()) {
                    c.Ij.Sl();
                    c.Ij.Kl();
                  } else {
                    c.og.Dk();
                  }
                });
                f.click(function () {
                  c.Ci.Be();
                  c.og.Dk();
                });
                this.tp = [];
              });
              g.prototype.ha = function () {
                g.parent.prototype.ha.call(this);
              };
              g.prototype.qo = function () {
                b.bo.go.stop();
                b.bo.go.fadeOut(50);
                b.bo.ho.stop();
                b.bo.ho.fadeOut(50);
                b.bo.io.stop();
                b.bo.io.fadeOut(50);
                b.bo.ko.stop();
                b.bo.ko.fadeOut(50);
                b.bo.jo.stop();
                b.bo.jo.fadeOut(50);
                b.bo.lo.stop();
                b.bo.lo.fadeOut(50);
                b.bo.mo.stop();
                b.bo.mo.fadeOut(50);
                b.bo.no.stop();
                b.bo.no.fadeOut(50);
                b.bo.oo.stop();
                b.bo.oo.fadeOut(50);
                b.bo.po.stop();
                b.bo.po.fadeIn(200);
              };
              g.prototype.Hk = function () {
                a().Ci.Ge();
                e.stop();
                e.hide();
                c.stop();
                c.show();
                c.text(".. 10 ..");
                this.up();
                this.vp(function () {
                  c.text(".. 9 ..");
                }, 1000);
                this.vp(function () {
                  c.text(".. 8 ..");
                }, 2000);
                this.vp(function () {
                  c.text(".. 7 ..");
                }, 3000);
                this.vp(function () {
                  c.text(".. 6 ..");
                }, 4000);
                this.vp(function () {
                  c.text(".. 5 ..");
                }, 5000);
                this.vp(function () {
                  c.text(".. 4 ..");
                }, 6000);
                this.vp(function () {
                  c.text(".. 3 ..");
                }, 7000);
                this.vp(function () {
                  c.text(".. 2 ..");
                }, 8000);
                this.vp(function () {
                  c.text(".. 1 ..");
                }, 9000);
                this.vp(function () {
                  c.hide();
                  e.fadeIn(300);
                }, 10000);
              };
              g.prototype.vp = function (a, b) {
                var c = setTimeout(a, b);
                this.tp.push(c);
              };
              g.prototype.up = function () {
                for (var a = 0; a < this.tp.length; a++) {
                  clearTimeout(this.tp[a]);
                }
                this.tp = [];
              };
              return g;
            }();
            b.wp = function () {
              function a() {
                this.ao = function () {};
              }
              a.prototype.tf = function () {};
              a.prototype.Hk = function () {};
              return a;
            }();
            b.Gl = function () {
              var c = d.M(b.wp, function (c) {
                b.wp.call(this);
                var e = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
                this.xp = $("<div id=\"" + e + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + c + "</div>    <div class=\"toaster-coins-close\">" + d.H("index.game.toaster.continue") + "</div></div>");
                var f = this;
                this.xp.find(".toaster-coins-close").click(function () {
                  a().Ci.Be();
                  f.ao();
                });
              });
              c.prototype.tf = function () {
                return this.xp;
              };
              c.prototype.Hk = function () {
                a().Ci.Ee();
              };
              return c;
            }();
            b.Fl = function () {
              var c = d.M(b.wp, function (c) {
                b.wp.call(this);
                var e = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
                this.xp = $("<div id=\"" + e + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + c + "</div>    <div class=\"toaster-levelup-text\">" + d.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + d.H("index.game.toaster.continue") + "</div></div>");
                var f = this;
                this.xp.find(".toaster-levelup-close").click(function () {
                  a().Ci.Be();
                  f.ao();
                });
              });
              c.prototype.tf = function () {
                return this.xp;
              };
              c.prototype.Hk = function () {
                a().Ci.De();
              };
              return c;
            }();
            b.sp = function () {
              var c = d.M(b.wp, function () {
                b.wp.call(this);
                var c = this;
                var e = a();
                var f = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
                this.xp = $("<div id=\"" + f + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + d.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + d.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + d.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + d.H("index.game.toaster.consent.iAccept") + "</div></div>");
                this.yp = this.xp.find(".toaster-consent-close");
                this.yp.hide();
                this.yp.click(function () {
                  e.Ci.Be();
                  if (e.Go()) {
                    e.rp(true, true);
                  }
                  c.ao();
                });
              });
              c.prototype.tf = function () {
                return this.xp;
              };
              c.prototype.Hk = function () {
                var b = this;
                var c = a();
                if (c.Go() && !c.hl()) {
                  c.Ci.Ge();
                  setTimeout(function () {
                    b.yp.fadeIn(300);
                  }, 2000);
                } else {
                  setTimeout(function () {
                    b.ao();
                  }, 0);
                }
              };
              return c;
            }();
            b.uk = function () {
              var c = $("#error-gateway-connection-retry");
              var e = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
                var e = a();
                c.click(function () {
                  e.Ci.Be();
                  e.og.ie.Mn();
                  e.og.Ak(e.og.ie);
                  setTimeout(function () {
                    var a = d.a.b + "/pub/healthCheck/ping";
                    d.Z(a, function () {
                      e.og.Ak(e.og.tk);
                    }, function (a) {
                      e.og.ie.Kn();
                      e.Lc.Ib(function () {
                        e.og.Ak(e.og._e);
                      }, function (a) {
                        e.og.Ak(e.og.tk);
                      }, function (a, b) {
                        var c = a;
                        e.og.ie.Ln(c, b);
                      });
                    });
                  }, 2000);
                });
              });
              e.prototype.ha = function () {};
              e.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(50);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(50);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(50);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(50);
                b.kf.tn.stop();
                b.kf.tn.fadeIn(500);
                b.kf.un_error.stop();
                b.kf.un_error.fadeOut(50);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeOut(50);
                b.kf.vn.stop();
                b.kf.vn.fadeOut(50);
              };
              e.prototype.Hk = function () {
                var c = a();
                c.Ci.pe(b.ge.je._e);
                c.Ci.Ge();
              };
              return e;
            }();
            b.wk = function () {
              var c = $("#error-game-connection-retry");
              var e = d.M(b.kf, function () {
                b.kf.call(this, b.Fk.wn);
                var d = a();
                c.click(function () {
                  d.Ci.Be();
                  d.og.Ak(d.og._e);
                });
              });
              e.prototype.ha = function () {};
              e.prototype.Gk = function () {
                b.kf.jn.stop();
                b.kf.jn.fadeOut(50);
                b.kf.ln.stop();
                b.kf.ln.fadeOut(50);
                b.kf.nn.stop();
                b.kf.nn.fadeOut(50);
                b.kf.pn.stop();
                b.kf.pn.fadeOut(50);
                b.kf.sn.stop();
                b.kf.sn.fadeOut(50);
                b.kf.qn.stop();
                b.kf.qn.fadeOut(50);
                b.kf.rn.stop();
                b.kf.rn.fadeOut(50);
                b.kf.tn.stop();
                b.kf.tn.fadeOut(50);
                b.kf.un_error.stop();
                b.kf.un_error.fadeIn(500);
                b.kf.mn.stop();
                b.kf.mn.fadeIn(1);
                b.kf.bgcanvas.stop();
                b.kf.bgcanvas.fadeIn(500);
                b.GameView.Kf(true);
                b.kf.socialButtons.stop();
                b.kf.socialButtons.fadeOut(50);
                b.kf.vn.stop();
                b.kf.vn.fadeOut(50);
              };
              e.prototype.Hk = function () {
                var c = a();
                c.Ci.pe(b.ge.je._e);
                c.Ci.Ge();
              };
              return e;
            }();
            d.zp = function () {
              function a(a) {
                var c = a + Math.floor(Math.random() * 65535) * 37;
                b.Vf.eg(b.Vf.cg, c, 30);
              }
              function e() {
                return parseInt(b.Vf.fg(b.Vf.cg)) % 37;
              }
              return function () {
                var f = e();
                if (f < 0 || f >= h.Ap) {
                  f = Math.max(0, h.Ap - 2);
                }
                var g = {
                  zn: h,
                  Bp: false
                };
                g.Cp = Date.now();
                g.Dp = 0;
                g.Ep = 0;
                g.Fp = null;
                g.Gp = d.a.j;
                g.Hp = d.a.i;
                g.dh = null;
                g.Lc = null;
                g.xe = null;
                g.Ci = null;
                g.og = null;
                g.On = null;
                g.Ij = null;
                try {
                  if (navigator && navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (a) {
                      if (a.coords !== undefined) {
                        var b = a.coords;
                        if (b.latitude !== undefined && b.longitude !== undefined) {
                          g.Fp = a;
                        }
                      }
                    }, function (a) {});
                  }
                } catch (a) {}
                g.Ip = function () {
                  g.dh = new b.Engine();
                  g.dh.Kp = new b.MessageProcessor(g.dh);
                  g.Lc = new b._a();
                  g.xe = new b.Qj();
                  g.Ci = new b.ge();
                  g.og = new b.Tj();
                  g.On = new b.kj();
                  g.Ij = new b.Mk();
                  g.ha();
                };
                g.ha = function () {
                  try {
                    ga("send", "event", "app", window.runtimeHash + "_init");
                  } catch (a) {}
                  g.dh.Lp = function () {
                    g.og.Ak(g.og.vk);
                  };
                  g.dh.Mp = function () {
                    var a = g.og._e.Wn();
                    try {
                      ga("send", "event", "game", window.runtimeHash + "_start", a);
                    } catch (a) {}
                    g.Ci.pe(b.ge.je.af);
                    g.og.Ak(g.og.af.Dn());
                  };
                  g.dh.Np = function () {
                    try {
                      ga("send", "event", "game", window.runtimeHash + "_end");
                    } catch (a) {}
                    if ($("body").height() >= 430) {
                      g.zn.Op.ka();
                    }
                    g.Lc.Ib(null, null, null);
                    (function () {
                      var a = Math.floor(g.dh.ch.Bh);
                      var b = g.dh.Ih;
                      if (g.Ij.Hj()) {
                        g.Ij.Bl(function () {
                          g.Pp(a, b);
                        });
                      } else {
                        g.Pp(a, b);
                      }
                    })();
                  };
                  g.dh.Qp = function (a) {
                    a(g.og.af.Gn(), g.og.af.Hn());
                  };
                  g.Ij.yl(function () {
                    var a = g.og.Lk();
                    if (a != null && a.nd === b.Fk.Ek) {
                      g.Ci.pe(b.ge.je._e);
                      g.og.Ak(g.og._e);
                    }
                    if (g.Ij.Hj()) {
                      try {
                        var c = g.Ij.cl();
                        ga("set", "userId", c);
                      } catch (a) {}
                    }
                    if (g.Go() && g.Ij.Hj() && !g.Ij.hl()) {
                      g.rp(false, false);
                      g.og.qk._n(new b.sp());
                    } else {
                      g.Rp(true);
                    }
                  });
                  g.dh.run();
                  g.og.ha();
                  g.On.ha();
                  g.Lc.ha();
                  g.og._e.Vn();
                  g.og.Ak(g.og._e);
                  g.xe.ha(function () {
                    g.Ci.ha();
                    g.Ij.ha();
                    g.Lc.Ib(function () {
                      g.og._e.Un();
                      g.og.Ak(g.og._e);
                    }, function (a) {
                      g.og._e.Un();
                      g.og.Ak(g.og.tk);
                    }, function (a, b) {
                      var c = a;
                      g.og.ie.Ln(c, b);
                      g.og._e.Ln(c, b);
                    });
                    if (g.Go() && !g.hl()) {
                      g.og.qk._n(new b.sp());
                    } else {
                      g.Rp(true);
                    }
                  });
                };
                g.Sp = function (a) {
                  if (g.Ij.Hj()) {
                    var b = g.Ij.Al();
                    var c = d.a.b + "/pub/wuid/" + b + "/consent/change?value=" + encodeURI(a);
                    d.Z(c, function () {}, function (a) {});
                  }
                };
                g.Pn = function (c) {
                  f++;
                  if (!g.zn.Tp && f >= g.zn.Ap) {
                    g.og.Ak(g.og.xk);
                    g.Ci.pe(b.ge.je.cf);
                    g.zn.Up.ia();
                  } else {
                    a(f);
                    g.Vp(c);
                  }
                };
                g.Vp = function (a) {
                  if (g.dh.Wp()) {
                    g.og.ie.Mn();
                    g.og.Ak(g.og.ie);
                    var c = g.og._e.Wn();
                    b.Vf.eg(b.Vf._f, c, 30);
                    var d = g.og.$h.Zh();
                    b.Vf.eg(b.Vf.Xf, d, 30);
                    var e = 0;
                    if (g.Fp != null) {
                      var f = g.Fp.coords.latitude;
                      var h = g.Fp.coords.longitude;
                      e = Math.max(0, Math.min(32767, (f + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (h + 180) / 360 * 65536)) << 16;
                    }
                    if (g.Ij.Hj()) {
                      g.Xp(c, e, a);
                    } else {
                      var i = g.og._e.el();
                      b.Vf.eg(b.Vf.ag, i, 30);
                      var j = g.On.rj(b.tj.sj);
                      b.Vf.eg(b.Vf.bg, j, 30);
                      g.Yp(c, e);
                    }
                  }
                };
                g.Xp = function (a, c, e) {
                  var f = g;
                  var h = g.Ij.Al();
                  var i = g.og._e.el();
                  var j = g.On.rj(b.tj.sj);
                  var k = g.On.rj(b.tj.uj);
                  var l = g.On.rj(b.tj.vj);
                  var m = g.On.rj(b.tj.xj);
                  var n = g.On.rj(b.tj.wj);
                  var o = (B ? URL_CDN : d.a.b) + "/pub/wuid/" + h + "/start?gameMode=" + encodeURI(a) + "&gh=" + c + "&nickname=" + Ca.Xp(h, i, j, k, l, m, n) + "&skinId=" + encodeURI(_wwc.validInput(j || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(k)) + "&mouthId=" + encodeURI(_wwc.validInputWear(l)) + "&glassesId=" + encodeURI(_wwc.validInputWear(m)) + "&hatId=" + encodeURI(_wwc.validInputWear(n));
                  d.Z(o, function () {
                    f.og.Ak(f.og.tk);
                  }, function (a) {
                    if (a.code === 1460) {
                      f.og.Ak(f.og.ok);
                      try {
                        ga("send", "event", "restricted", window.runtimeHash + "_tick");
                      } catch (a) {}
                    } else if (false) {} else {
                      if (!a.server_url) {
                        Ba.dh.Cq();
                        return;
                      }
                      var b = a.server_url;
                      f.dh.Zp(b, h, e);
                    }
                  });
                };
                g.Yp = function (a, c) {
                  var e = g;
                  var f = g.og._e.el();
                  var h = g.On.rj(b.tj.sj);
                  var i = d.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(a) + "&gh=" + c + "&nickname=" + encodeURI(f) + "&skinId=" + encodeURI(h);
                  d.Z(i, function () {
                    e.og.Ak(e.og.tk);
                  }, function (a) {
                    if (a.code === 1460) {
                      e.og.Ak(e.og.ok);
                      try {
                        ga("send", "event", "restricted", window.runtimeHash + "_tick");
                      } catch (a) {}
                    } else if (a.code !== 1200) {
                      e.og.Ak(e.og.tk);
                    } else {
                      var b = a.server_url;
                      e.dh.$p(b, f, h);
                    }
                  });
                };
                g.Pp = function (a, c) {
                  var d = g.og._e.el();
                  g.og.af.Fn(a, c, d);
                  g.Ci.pe(b.ge.je.bf);
                  g.og.Ak(g.og.af.En());
                };
                g.Sn = function () {
                  if (!g.Tn()) {
                    return g.On.Bj();
                  }
                  var a = parseInt(b.Vf.fg(b.Vf.bg));
                  if (a != null && g.On.Cj(a, b.tj.sj)) {
                    return a;
                  } else {
                    return g.On.Bj();
                  }
                };
                g.Xn = function (a) {
                  b.Vf.eg(b.Vf.dg, a ? "true" : "false", 1800);
                };
                g.Tn = function () {
                  return b.Vf.fg(b.Vf.dg) === "true";
                };
                g.Rp = function (b) {
                  if (b !== g.Bp) {
                    g.Bp = b;
                    var c = c || {};
                    c.consented = b;
                    c.gdprConsent = b;
                    g.zn.yn.ha();
                    g.zn.Op.ha();
                    g.zn.Up.ha(function (b) {
                      if (b) {
                        a(f = 0);
                      }
                      g.Vp();
                    });
                  }
                };
                g.rp = function (a, c) {
                  b.Vf.eg(b.Vf.Wf, a ? "true" : "false");
                  if (c) {
                    g.Sp(a);
                  }
                  g.Rp(a);
                };
                g.hl = function () {
                  switch (b.Vf.fg(b.Vf.Wf)) {
                    case "true":
                      return true;
                    default:
                      return false;
                  }
                };
                g.Go = function () {
                  try {
                    return !!window.isIPInEEA || g.Fp != null && !!c.gg.hg(g.Fp.coords.latitude, g.Fp.coords.longitude);
                  } catch (a) {
                    return true;
                  }
                };
                g.Nf = function () {
                  g.Dp = performance.now();
                  g.Ep = g.Dp - g.Cp;
                  g.dh.lh(g.Dp, g.Ep);
                  g.og.lh(g.Dp, g.Ep);
                  g.Cp = g.Dp;
                };
                g.Jf = function () {
                  g.og.Jf();
                };
                return g;
              }();
            };
            b.Engine = function () {
              var e = {
                dq: 30,
                fq: new Float32Array(100),
                gq: 0,
                hq: 0,
                iq: 0,
                jq: 0,
                kq: 0,
                lq: 0,
                Cn: 0,
                mq: null,
                nq: 300,
                Mp: function () {},
                Np: function () {},
                Qp: function () {},
                Lp: function () {},
                hh: new b.GameParams(),
                Kp: null,
                ch: null,
                Hi: {},
                Fh: {},
                Di: 12.5,
                eh: 40,
                oq: 1,
                pq: -1,
                qq: 1,
                rq: 1,
                sq: -1,
                tq: -1,
                uq: 1,
                vq: 1,
                wq: -1,
                Ih: 500,
                yh: 500
              };
              e.hh.zg = 500;
              e.ch = new b.Worm(e.hh);
              e.run = function () {
                e.ch.ti(a().og.af.ng);
              };
              e.gh = function (a, b, c, d) {
                e.pq = a;
                e.qq = b;
                e.rq = c;
                e.sq = d;
                e.yq();
              };
              e.zq = function (a) {
                e.oq = a;
                e.yq();
              };
              e.yq = function () {
                e.tq = e.pq - e.oq;
                e.uq = e.qq + e.oq;
                e.vq = e.rq - e.oq;
                e.wq = e.sq + e.oq;
              };
              e.lh = function (a, b) {
                e.iq += b;
                e.hq -= e.gq * 0.2 * b;
                e.Kp.Rh();
                if (e.mq !== null && (e.Cn === 2 || e.Cn === 3)) {
                  e.Aq(a, b);
                  e.eh = 4 + e.Di * e.ch.$c;
                }
                var c = 1000 / Math.max(1, b);
                var d = 0;
                for (var f = 0; f < e.fq.length - 1; f++) {
                  d += e.fq[f];
                  e.fq[f] = e.fq[f + 1];
                }
                e.fq[e.fq.length - 1] = c;
                e.dq = (d + c) / e.fq.length;
              };
              e.Bq = function (a, b) {
                return a > e.tq && a < e.uq && b > e.vq && b < e.wq;
              };
              e.Aq = function (a, b) {
                var c = e.iq + e.hq;
                var d = (c - e.jq) / (e.kq - e.jq);
                e.ch.hj(a, b);
                e.ch.ij(a, b, d, e.Bq);
                var f = 0;
                for (var g in e.Fh) {
                  var h = e.Fh[g];
                  h.hj(a, b);
                  h.ij(a, b, d, e.Bq);
                  if (h.xi && h.$c > f) {
                    f = h.$c;
                  }
                  if (!h.wi && (h.dj < 0.005 || !h.xi)) {
                    h.si();
                    delete e.Fh[h.Eh.ae];
                  }
                }
                e.zq(f * 3);
                for (var i in e.Hi) {
                  var j = e.Hi[i];
                  j.hj(a, b);
                  j.ij(a, b, e.Bq);
                  if (j.Ni && (j.dj < 0.005 || !e.Bq(j.Zi, j.$i))) {
                    j.si();
                    delete e.Hi[j.Eh.ae];
                  }
                }
              };
              e.ki = function (b, c) {
                if (e.Cn === 1) {
                  e.Cn = 2;
                  e.Mp();
                }
                var d = a().Dp;
                e.lq = b;
                if (b === 0) {
                  e.jq = d - 95;
                  e.kq = d;
                  e.iq = e.jq;
                  e.hq = 0;
                } else {
                  e.jq = e.kq;
                  e.kq = e.kq + c;
                }
                var f = e.iq + e.hq;
                e.gq = (f - e.jq) / (e.kq - e.jq);
              };
              e.Oi = function () {
                if (e.Cn === 1 || e.Cn === 2) {
                  e.Cn = 3;
                  var a = e.mq;
                  setTimeout(function () {
                    if (e.Cn === 3) {
                      e.Cn = 0;
                    }
                    if (a != null && a === e.mq) {
                      e.mq.close();
                      e.mq = null;
                    }
                  }, 4500);
                  e.Np();
                }
              };
              e.Wp = function () {
                return e.Cn !== 2 && (e.Cn = 1, e.Kp.Qh(), e.Hi = {}, e.Fh = {}, e.ch.Pm(), e.mq != null && (e.mq.close(), e.mq = null), true);
              };
              e.Cq = function () {
                e.mq = null;
                e.Kp.Qh();
                if (e.Cn !== 3) {
                  e.Lp();
                }
                e.Cn = 0;
              };
              e.Zp = function (a, b) {
                e.Dq(a, function () {
                  var a = Math.min(2048, b.length);
                  var c = new ArrayBuffer(6 + a * 2);
                  var d = new DataView(c);
                  var f = 0;
                  d.setInt8(f, 129);
                  f += 1;
                  d.setInt16(f, 2800);
                  f += 2;
                  d.setInt8(f, 1);
                  f += 1;
                  d.setInt16(f, a);
                  f += 2;
                  for (var g = 0; g < a; g++) {
                    d.setInt16(f, b.charCodeAt(g));
                    f += 2;
                  }
                  e.Eq(c);
                });
              };
              e.$p = function (a, b, c) {
                e.Dq(a, function () {
                  var a = Math.min(32, b.length);
                  var d = new ArrayBuffer(7 + a * 2);
                  var f = new DataView(d);
                  var g = 0;
                  f.setInt8(g, 129);
                  g += 1;
                  f.setInt16(g, 2800);
                  g += 2;
                  f.setInt8(g, 0);
                  g += 1;
                  f.setInt16(g, c);
                  g += 2;
                  f.setInt8(g, a);
                  g++;
                  for (var h = 0; h < a; h++) {
                    f.setInt16(g, b.charCodeAt(h));
                    g += 2;
                  }
                  e.Eq(d);
                });
              };
              e.Eq = function (a) {
                try {
                  if (e.mq != null && e.mq.readyState === WebSocket.OPEN) {
                    e.mq.send(a);
                  }
                } catch (a) {
                  e.Cq();
                }
              };
              e.xq = function (a, b) {
                var f = b ? 128 : 0;
                var g = d.N(a) / c.F * 128 & 127;
                var h = (f | g) & 255;
                if (e.nq !== h) {
                  var i = new ArrayBuffer(1);
                  new DataView(i).setInt8(0, h);
                  e.Eq(i);
                  e.nq = h;
                }
              };
              e.Dq = function (a, b) {
                var c = e.mq = new WebSocket(a);
                c.binaryType = "arraybuffer";
                c.onopen = function () {
                  if (e.mq === c) {
                    b();
                  }
                };
                c.onclose = function () {
                  if (e.mq === c) {
                    e.Cq();
                  }
                };
                c.onerror = function (a) {
                  if (e.mq === c) {
                    e.Cq();
                  }
                };
                c.onmessage = function (a) {
                  if (e.mq === c) {
                    e.Kp.Ph(a.data);
                  }
                };
              };
              return e;
            };
            var g = o({}, Ca);
            Ca = o({
              $C: b,
              $V: c,
              $F: d,
              POGL: e
            }, g);
            Ca.Jb = function () {
              (Ba.Lc.zb.ud.skinArrayDict || []).forEach(function (a) {
                if (a.associados && a.associados.includes(Ba.Ij.Rk.userId)) {
                  a[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
                }
              });
            };
            var h = function (a) {
              var b = {};
              b.main = {
                yn: d.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
                Op: d.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
                Up: d.ga(),
                Ap: 4,
                Tp: false,
                xn: true
              };
              b.miniclip = {
                yn: d.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
                Op: d.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
                Up: d.ga(),
                Ap: 4,
                Tp: false,
                xn: false
              };
              var c = b[window.ENV];
              c ||= b.main;
              return c;
            }(window.ENV);
            $(function () {
              FastClick.attach(document.body);
            });
            addEventListener("contextmenu", function (a) {
              a.preventDefault();
              a.stopPropagation();
              return false;
            });
            window.fbAsyncInit = function () {
              FB.init({
                appId: "861926850619051",
                cookie: true,
                xfbml: true,
                status: true,
                version: "v14.0"
              });
            };
            d.L("//apis.google.com/js/api:client.js", null, function () {
              gapi.load("auth2", function () {
                Ha = gapi.auth2.init({
                  client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
                });
              });
            });
            Ba = d.zp();
            Ba.Ip();
            (function () {
              function b() {
                requestAnimationFrame(b);
                a().Nf();
              }
              b();
            })();
            (function () {
              function b() {
                var b = c.width();
                var g = c.height();
                var h = d.outerWidth();
                var i = d.outerHeight();
                var j = e.outerHeight();
                var k = f.outerHeight();
                var l = Math.min(1, Math.min((g - k - j) / i, b / h));
                var m = "translate(-50%, -50%) scale(" + l + ")";
                d.css({
                  "-webkit-transform": m,
                  "-moz-transform": m,
                  "-ms-transform": m,
                  "-o-transform": m,
                  transform: m
                });
                a().Jf();
                window.scrollTo(0, 1);
              }
              var c = $("body");
              var d = $("#stretch-box");
              var e = $("#markup-header");
              var f = $("#markup-footer");
              b();
              $(window).resize(b);
            })();
          })();
        });
        $(".mm-merchant").remove();
        setTimeout(function () {
          $("#launcher").css("display", "none");
          $(".mm-merchant-cont").append(`
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
      <a href="https://www.facebook.com/lareynadelsur28?mibextid=ZbWKwL" target="_blank" style="margin-right: 10px;">
        <img src="${URL_CDN}/images/pub/TL_RDS.png" alt="Happy" width="155">
      </a>
      <a href="https://wormworld.io/install" target="_blank">
        <img src="${URL_CDN}/images/pub/img_01_20240326.png" alt="Happy" width="155">
      </a>
    </div>
    `);
          $(".mm-merchant-cont").css("top", "-10px");
        }, 4500);
        $(".description-text").css("height", "300px");
        var Ia = function b(a) {
          var c = URL_CDN + "/images/background_2404140002.png";
          document.body.style.backgroundColor = "#333";
          document.body.style.backgroundImage = `url('${a || c}')`;
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundSize = "cover";
          var d = document.getElementById("background-canvas");
          var e = document.getElementById("game-wrap");
          d.style.backgroundColor = "#00610c";
          d.style.opacity = "0.65";
          e.style.backgroundColor = "transparent";
        };
        if (ha) {
          ha = JSON.parse(ha);
          if (ha.background) {
            Ia(ha.background);
          } else {
            Ia();
          }
        } else {
          Ia();
        }
        var Ja = function b(a) {
          var c = {
            refer: a.ae,
            nickname: a.ma,
            room: bbs.con,
            wid: bbs.userId
          };
          return c;
        };
        _wwcio.connect = function (a) {
          _wwcio.obj = Ja(a);
          var b = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
          var c = x ? "local" : b[2];
          if (K[b[2]] && !K[b[2]].includes(parseInt(b[4]))) {
            b = null;
          }
          if (b && L.includes(b[2])) {
            la.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
            la.containerHstop.alpha = bbs.showTophs ? 1 : 0;
            var d = (0, f.io)(J[c], {
              path: "/api/"
            });
            d.on("connect", function () {
              d.emit("join", _wwcio.obj);
            });
            d.on("message", function (a) {
              var b = a;
              switch (b.type) {
                case "join":
                  _wwcio.obj.sid = a.sid;
                  break;
                case "leaderBoard":
                  _wwcio.leaderboardUpdated(b.top10, b.top3);
                  break;
                case "update":
                  _wwcio.set(b);
                  break;
                case "leave":
                  break;
                default:
                  break;
              }
              if (b && b.top10) {
                _wwcio.leaderboardUpdated(b.top10, b.top3);
              }
            });
            _wwcio.join = function (a) {
              d.emit("join", a);
            };
            _wwcio.update = function (a) {
              d.emit("message", {
                action: a
              });
            };
            _wwcio.close = function () {
              d.emit("leave");
              d.close();
            };
          } else {
            la.containerHsRec.alpha = 0;
            la.containerHstop.alpha = 0;
          }
        };
      },
      "./node_modules/howler/dist/howler.js": (a, b, c) => {
        var d;
        var e;
        (function () {
          'use strict';
  
          function f() {
            this.init();
          }
          f.prototype = {
            init: function () {
              var a = this || g;
              a._counter = 1000;
              a._html5AudioPool = [];
              a.html5PoolSize = 10;
              a._codecs = {};
              a._howls = [];
              a._muted = false;
              a._volume = 1;
              a._canPlayEvent = "canplaythrough";
              a._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
              a.masterGain = null;
              a.noAudio = false;
              a.usingWebAudio = true;
              a.autoSuspend = true;
              a.ctx = null;
              a.autoUnlock = true;
              a._setup();
              return a;
            },
            volume: function (a) {
              var b = this || g;
              a = parseFloat(a);
              if (!b.ctx) {
                o();
              }
              if (typeof a !== "undefined" && a >= 0 && a <= 1) {
                b._volume = a;
                if (b._muted) {
                  return b;
                }
                if (b.usingWebAudio) {
                  b.masterGain.gain.setValueAtTime(a, g.ctx.currentTime);
                }
                for (var c = 0; c < b._howls.length; c++) {
                  if (!b._howls[c]._webAudio) {
                    var d = b._howls[c]._getSoundIds();
                    for (var e = 0; e < d.length; e++) {
                      var f = b._howls[c]._soundById(d[e]);
                      if (f && f._node) {
                        f._node.volume = f._volume * a;
                      }
                    }
                  }
                }
                return b;
              }
              return b._volume;
            },
            mute: function (a) {
              var b = this || g;
              if (!b.ctx) {
                o();
              }
              b._muted = a;
              if (b.usingWebAudio) {
                b.masterGain.gain.setValueAtTime(a ? 0 : b._volume, g.ctx.currentTime);
              }
              for (var c = 0; c < b._howls.length; c++) {
                if (!b._howls[c]._webAudio) {
                  var d = b._howls[c]._getSoundIds();
                  for (var e = 0; e < d.length; e++) {
                    var f = b._howls[c]._soundById(d[e]);
                    if (f && f._node) {
                      f._node.muted = a ? true : f._muted;
                    }
                  }
                }
              }
              return b;
            },
            stop: function () {
              var a = this || g;
              for (var b = 0; b < a._howls.length; b++) {
                a._howls[b].stop();
              }
              return a;
            },
            unload: function () {
              var a = this || g;
              for (var b = a._howls.length - 1; b >= 0; b--) {
                a._howls[b].unload();
              }
              if (a.usingWebAudio && a.ctx && typeof a.ctx.close !== "undefined") {
                a.ctx.close();
                a.ctx = null;
                o();
              }
              return a;
            },
            codecs: function (a) {
              return (this || g)._codecs[a.replace(/^x-/, "")];
            },
            _setup: function () {
              var a = this || g;
              a.state = a.ctx ? a.ctx.state || "suspended" : "suspended";
              a._autoSuspend();
              if (!a.usingWebAudio) {
                if (typeof Audio !== "undefined") {
                  try {
                    var b = new Audio();
                    if (typeof b.oncanplaythrough === "undefined") {
                      a._canPlayEvent = "canplay";
                    }
                  } catch (b) {
                    a.noAudio = true;
                  }
                } else {
                  a.noAudio = true;
                }
              }
              try {
                var b = new Audio();
                if (b.muted) {
                  a.noAudio = true;
                }
              } catch (a) {}
              if (!a.noAudio) {
                a._setupCodecs();
              }
              return a;
            },
            _setupCodecs: function () {
              var a = this || g;
              var b = null;
              try {
                b = typeof Audio !== "undefined" ? new Audio() : null;
              } catch (b) {
                return a;
              }
              if (!b || typeof b.canPlayType !== "function") {
                return a;
              }
              var c = b.canPlayType("audio/mpeg;").replace(/^no$/, "");
              var d = a._navigator ? a._navigator.userAgent : "";
              var e = d.match(/OPR\/([0-6].)/g);
              var f = e && parseInt(e[0].split("/")[1], 10) < 33;
              var h = d.indexOf("Safari") !== -1 && d.indexOf("Chrome") === -1;
              var i = d.match(/Version\/(.*?) /);
              var j = h && i && parseInt(i[1], 10) < 15;
              a._codecs = {
                mp3: !!!f && (!!c || !!b.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!c,
                opus: !!b.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
                ogg: !!b.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
                oga: !!b.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
                wav: !!(b.canPlayType("audio/wav; codecs=\"1\"") || b.canPlayType("audio/wav")).replace(/^no$/, ""),
                aac: !!b.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!b.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/m4a;") || b.canPlayType("audio/aac;")).replace(/^no$/, ""),
                m4b: !!(b.canPlayType("audio/x-m4b;") || b.canPlayType("audio/m4b;") || b.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(b.canPlayType("audio/x-mp4;") || b.canPlayType("audio/mp4;") || b.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!!j && !!b.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
                webm: !!!j && !!b.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
                dolby: !!b.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
                flac: !!(b.canPlayType("audio/x-flac;") || b.canPlayType("audio/flac;")).replace(/^no$/, "")
              };
              return a;
            },
            _unlockAudio: function () {
              var a = this || g;
              if (a._audioUnlocked || !a.ctx) {
                return;
              }
              a._audioUnlocked = false;
              a.autoUnlock = false;
              if (!a._mobileUnloaded && a.ctx.sampleRate !== 44100) {
                a._mobileUnloaded = true;
                a.unload();
              }
              a._scratchBuffer = a.ctx.createBuffer(1, 1, 22050);
              function b(c) {
                while (a._html5AudioPool.length < a.html5PoolSize) {
                  try {
                    var d = new Audio();
                    d._unlocked = true;
                    a._releaseHtml5Audio(d);
                  } catch (b) {
                    a.noAudio = true;
                    break;
                  }
                }
                for (var e = 0; e < a._howls.length; e++) {
                  if (!a._howls[e]._webAudio) {
                    var f = a._howls[e]._getSoundIds();
                    for (var g = 0; g < f.length; g++) {
                      var h = a._howls[e]._soundById(f[g]);
                      if (h && h._node && !h._node._unlocked) {
                        h._node._unlocked = true;
                        h._node.load();
                      }
                    }
                  }
                }
                a._autoResume();
                var i = a.ctx.createBufferSource();
                i.buffer = a._scratchBuffer;
                i.connect(a.ctx.destination);
                if (typeof i.start === "undefined") {
                  i.noteOn(0);
                } else {
                  i.start(0);
                }
                if (typeof a.ctx.resume === "function") {
                  a.ctx.resume();
                }
                i.onended = function () {
                  i.disconnect(0);
                  a._audioUnlocked = true;
                  document.removeEventListener("touchstart", b, true);
                  document.removeEventListener("touchend", b, true);
                  document.removeEventListener("click", b, true);
                  document.removeEventListener("keydown", b, true);
                  for (var c = 0; c < a._howls.length; c++) {
                    a._howls[c]._emit("unlock");
                  }
                };
              }
              document.addEventListener("touchstart", b, true);
              document.addEventListener("touchend", b, true);
              document.addEventListener("click", b, true);
              document.addEventListener("keydown", b, true);
              return a;
            },
            _obtainHtml5Audio: function () {
              var a = this || g;
              if (a._html5AudioPool.length) {
                return a._html5AudioPool.pop();
              }
              var b = new Audio().play();
              if (b && typeof Promise !== "undefined" && (b instanceof Promise || typeof b.then === "function")) {
                b.catch(function () {
                  console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
                });
              }
              return new Audio();
            },
            _releaseHtml5Audio: function (a) {
              var b = this || g;
              if (a._unlocked) {
                b._html5AudioPool.push(a);
              }
              return b;
            },
            _autoSuspend: function () {
              var a = this;
              if (!a.autoSuspend || !a.ctx || typeof a.ctx.suspend === "undefined" || !g.usingWebAudio) {
                return;
              }
              for (var b = 0; b < a._howls.length; b++) {
                if (a._howls[b]._webAudio) {
                  for (var c = 0; c < a._howls[b]._sounds.length; c++) {
                    if (!a._howls[b]._sounds[c]._paused) {
                      return a;
                    }
                  }
                }
              }
              if (a._suspendTimer) {
                clearTimeout(a._suspendTimer);
              }
              a._suspendTimer = setTimeout(function () {
                if (!a.autoSuspend) {
                  return;
                }
                a._suspendTimer = null;
                a.state = "suspending";
                function b() {
                  a.state = "suspended";
                  if (a._resumeAfterSuspend) {
                    delete a._resumeAfterSuspend;
                    a._autoResume();
                  }
                }
                a.ctx.suspend().then(b, b);
              }, 30000);
              return a;
            },
            _autoResume: function () {
              var a = this;
              if (!a.ctx || typeof a.ctx.resume === "undefined" || !g.usingWebAudio) {
                return;
              }
              if (a.state === "running" && a.ctx.state !== "interrupted" && a._suspendTimer) {
                clearTimeout(a._suspendTimer);
                a._suspendTimer = null;
              } else if (a.state === "suspended" || a.state === "running" && a.ctx.state === "interrupted") {
                a.ctx.resume().then(function () {
                  a.state = "running";
                  for (var b = 0; b < a._howls.length; b++) {
                    a._howls[b]._emit("resume");
                  }
                });
                if (a._suspendTimer) {
                  clearTimeout(a._suspendTimer);
                  a._suspendTimer = null;
                }
              } else if (a.state === "suspending") {
                a._resumeAfterSuspend = true;
              }
              return a;
            }
          };
          var g = new f();
          function h(a) {
            var b = this;
            if (!a.src || a.src.length === 0) {
              console.error("An array of source files must be passed with any new Howl.");
              return;
            }
            b.init(a);
          }
          h.prototype = {
            init: function (a) {
              var b = this;
              if (!g.ctx) {
                o();
              }
              b._autoplay = a.autoplay || false;
              b._format = typeof a.format !== "string" ? a.format : [a.format];
              b._html5 = a.html5 || false;
              b._muted = a.mute || false;
              b._loop = a.loop || false;
              b._pool = a.pool || 5;
              b._preload = typeof a.preload === "boolean" || a.preload === "metadata" ? a.preload : true;
              b._rate = a.rate || 1;
              b._sprite = a.sprite || {};
              b._src = typeof a.src !== "string" ? a.src : [a.src];
              b._volume = a.volume !== undefined ? a.volume : 1;
              b._xhr = {
                method: a.xhr && a.xhr.method ? a.xhr.method : "GET",
                headers: a.xhr && a.xhr.headers ? a.xhr.headers : null,
                withCredentials: a.xhr && a.xhr.withCredentials ? a.xhr.withCredentials : false
              };
              b._duration = 0;
              b._state = "unloaded";
              b._sounds = [];
              b._endTimers = {};
              b._queue = [];
              b._playLock = false;
              b._onend = a.onend ? [{
                fn: a.onend
              }] : [];
              b._onfade = a.onfade ? [{
                fn: a.onfade
              }] : [];
              b._onload = a.onload ? [{
                fn: a.onload
              }] : [];
              b._onloaderror = a.onloaderror ? [{
                fn: a.onloaderror
              }] : [];
              b._onplayerror = a.onplayerror ? [{
                fn: a.onplayerror
              }] : [];
              b._onpause = a.onpause ? [{
                fn: a.onpause
              }] : [];
              b._onplay = a.onplay ? [{
                fn: a.onplay
              }] : [];
              b._onstop = a.onstop ? [{
                fn: a.onstop
              }] : [];
              b._onmute = a.onmute ? [{
                fn: a.onmute
              }] : [];
              b._onvolume = a.onvolume ? [{
                fn: a.onvolume
              }] : [];
              b._onrate = a.onrate ? [{
                fn: a.onrate
              }] : [];
              b._onseek = a.onseek ? [{
                fn: a.onseek
              }] : [];
              b._onunlock = a.onunlock ? [{
                fn: a.onunlock
              }] : [];
              b._onresume = [];
              b._webAudio = g.usingWebAudio && !b._html5;
              if (typeof g.ctx !== "undefined" && g.ctx && g.autoUnlock) {
                g._unlockAudio();
              }
              g._howls.push(b);
              if (b._autoplay) {
                b._queue.push({
                  event: "play",
                  action: function () {
                    b.play();
                  }
                });
              }
              if (b._preload && b._preload !== "none") {
                b.load();
              }
              return b;
            },
            load: function () {
              var a = this;
              var b = null;
              if (g.noAudio) {
                a._emit("loaderror", null, "No audio support.");
                return;
              }
              if (typeof a._src === "string") {
                a._src = [a._src];
              }
              for (var c = 0; c < a._src.length; c++) {
                var d;
                var e;
                if (a._format && a._format[c]) {
                  d = a._format[c];
                } else {
                  e = a._src[c];
                  if (typeof e !== "string") {
                    a._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                    continue;
                  }
                  d = /^data:audio\/([^;,]+);/i.exec(e);
                  if (!d) {
                    d = /\.([^.]+)$/.exec(e.split("?", 1)[0]);
                  }
                  d &&= d[1].toLowerCase();
                }
                if (!d) {
                  console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
                }
                if (d && g.codecs(d)) {
                  b = a._src[c];
                  break;
                }
              }
              if (!b) {
                a._emit("loaderror", null, "No codec support for selected audio sources.");
                return;
              }
              a._src = b;
              a._state = "loading";
              if (window.location.protocol === "https:" && b.slice(0, 5) === "http:") {
                a._html5 = true;
                a._webAudio = false;
              }
              new i(a);
              if (a._webAudio) {
                k(a);
              }
              return a;
            },
            play: function (a, b) {
              var c = this;
              var d = null;
              if (typeof a === "number") {
                d = a;
                a = null;
              } else if (typeof a === "string" && c._state === "loaded" && !c._sprite[a]) {
                return null;
              } else if (typeof a === "undefined") {
                a = "__default";
                if (!c._playLock) {
                  var e = 0;
                  for (var f = 0; f < c._sounds.length; f++) {
                    if (c._sounds[f]._paused && !c._sounds[f]._ended) {
                      e++;
                      d = c._sounds[f]._id;
                    }
                  }
                  if (e === 1) {
                    a = null;
                  } else {
                    d = null;
                  }
                }
              }
              var h = d ? c._soundById(d) : c._inactiveSound();
              if (!h) {
                return null;
              }
              if (d && !a) {
                a = h._sprite || "__default";
              }
              if (c._state !== "loaded") {
                h._sprite = a;
                h._ended = false;
                var i = h._id;
                c._queue.push({
                  event: "play",
                  action: function () {
                    c.play(i);
                  }
                });
                return i;
              }
              if (d && !h._paused) {
                if (!b) {
                  c._loadQueue("play");
                }
                return h._id;
              }
              if (c._webAudio) {
                g._autoResume();
              }
              var j = Math.max(0, h._seek > 0 ? h._seek : c._sprite[a][0] / 1000);
              var k = Math.max(0, (c._sprite[a][0] + c._sprite[a][1]) / 1000 - j);
              var l = k * 1000 / Math.abs(h._rate);
              var m = c._sprite[a][0] / 1000;
              var n = (c._sprite[a][0] + c._sprite[a][1]) / 1000;
              h._sprite = a;
              h._ended = false;
              function o() {
                h._paused = false;
                h._seek = j;
                h._start = m;
                h._stop = n;
                h._loop = !!h._loop || !!c._sprite[a][2];
              }
              if (j >= n) {
                c._ended(h);
                return;
              }
              var q = h._node;
              if (c._webAudio) {
                function a() {
                  c._playLock = false;
                  o();
                  c._refreshBuffer(h);
                  var a = h._muted || c._muted ? 0 : h._volume;
                  q.gain.setValueAtTime(a, g.ctx.currentTime);
                  h._playStart = g.ctx.currentTime;
                  if (typeof q.bufferSource.start === "undefined") {
                    if (h._loop) {
                      q.bufferSource.noteGrainOn(0, j, 86400);
                    } else {
                      q.bufferSource.noteGrainOn(0, j, k);
                    }
                  } else if (h._loop) {
                    q.bufferSource.start(0, j, 86400);
                  } else {
                    q.bufferSource.start(0, j, k);
                  }
                  if (l !== Infinity) {
                    c._endTimers[h._id] = setTimeout(c._ended.bind(c, h), l);
                  }
                  if (!b) {
                    setTimeout(function () {
                      c._emit("play", h._id);
                      c._loadQueue();
                    }, 0);
                  }
                }
                if (g.state === "running" && g.ctx.state !== "interrupted") {
                  a();
                } else {
                  c._playLock = true;
                  c.once("resume", a);
                  c._clearTimer(h._id);
                }
              } else {
                function d() {
                  q.currentTime = j;
                  q.muted = h._muted || c._muted || g._muted || q.muted;
                  q.volume = h._volume * g.volume();
                  q.playbackRate = h._rate;
                  try {
                    var d = q.play();
                    if (d && typeof Promise !== "undefined" && (d instanceof Promise || typeof d.then === "function")) {
                      c._playLock = true;
                      o();
                      d.then(function () {
                        c._playLock = false;
                        q._unlocked = true;
                        if (!b) {
                          c._emit("play", h._id);
                        } else {
                          c._loadQueue();
                        }
                      }).catch(function () {
                        c._playLock = false;
                        c._emit("playerror", h._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                        h._ended = true;
                        h._paused = true;
                      });
                    } else if (!b) {
                      c._playLock = false;
                      o();
                      c._emit("play", h._id);
                    }
                    q.playbackRate = h._rate;
                    if (q.paused) {
                      c._emit("playerror", h._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      return;
                    }
                    if (a !== "__default" || h._loop) {
                      c._endTimers[h._id] = setTimeout(c._ended.bind(c, h), l);
                    } else {
                      c._endTimers[h._id] = function () {
                        c._ended(h);
                        q.removeEventListener("ended", c._endTimers[h._id], false);
                      };
                      q.addEventListener("ended", c._endTimers[h._id], false);
                    }
                  } catch (a) {
                    c._emit("playerror", h._id, a);
                  }
                }
                if (q.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                  q.src = c._src;
                  q.load();
                }
                var r = window && window.ejecta || !q.readyState && g._navigator.isCocoonJS;
                if (q.readyState >= 3 || r) {
                  d();
                } else {
                  c._playLock = true;
                  c._state = "loading";
                  function a() {
                    c._state = "loaded";
                    d();
                    q.removeEventListener(g._canPlayEvent, a, false);
                  }
                  q.addEventListener(g._canPlayEvent, a, false);
                  c._clearTimer(h._id);
                }
              }
              return h._id;
            },
            pause: function (a) {
              var b = this;
              if (b._state !== "loaded" || b._playLock) {
                b._queue.push({
                  event: "pause",
                  action: function () {
                    b.pause(a);
                  }
                });
                return b;
              }
              var c = b._getSoundIds(a);
              for (var d = 0; d < c.length; d++) {
                b._clearTimer(c[d]);
                var e = b._soundById(c[d]);
                if (e && !e._paused) {
                  e._seek = b.seek(c[d]);
                  e._rateSeek = 0;
                  e._paused = true;
                  b._stopFade(c[d]);
                  if (e._node) {
                    if (b._webAudio) {
                      if (!e._node.bufferSource) {
                        continue;
                      }
                      if (typeof e._node.bufferSource.stop === "undefined") {
                        e._node.bufferSource.noteOff(0);
                      } else {
                        e._node.bufferSource.stop(0);
                      }
                      b._cleanBuffer(e._node);
                    } else if (!isNaN(e._node.duration) || e._node.duration === Infinity) {
                      e._node.pause();
                    }
                  }
                }
                if (!arguments[1]) {
                  b._emit("pause", e ? e._id : null);
                }
              }
              return b;
            },
            stop: function (a, b) {
              var c = this;
              if (c._state !== "loaded" || c._playLock) {
                c._queue.push({
                  event: "stop",
                  action: function () {
                    c.stop(a);
                  }
                });
                return c;
              }
              var d = c._getSoundIds(a);
              for (var e = 0; e < d.length; e++) {
                c._clearTimer(d[e]);
                var f = c._soundById(d[e]);
                if (f) {
                  f._seek = f._start || 0;
                  f._rateSeek = 0;
                  f._paused = true;
                  f._ended = true;
                  c._stopFade(d[e]);
                  if (f._node) {
                    if (c._webAudio) {
                      if (f._node.bufferSource) {
                        if (typeof f._node.bufferSource.stop === "undefined") {
                          f._node.bufferSource.noteOff(0);
                        } else {
                          f._node.bufferSource.stop(0);
                        }
                        c._cleanBuffer(f._node);
                      }
                    } else if (!isNaN(f._node.duration) || f._node.duration === Infinity) {
                      f._node.currentTime = f._start || 0;
                      f._node.pause();
                      if (f._node.duration === Infinity) {
                        c._clearSound(f._node);
                      }
                    }
                  }
                  if (!b) {
                    c._emit("stop", f._id);
                  }
                }
              }
              return c;
            },
            mute: function (a, b) {
              var c = this;
              if (c._state !== "loaded" || c._playLock) {
                c._queue.push({
                  event: "mute",
                  action: function () {
                    c.mute(a, b);
                  }
                });
                return c;
              }
              if (typeof b === "undefined") {
                if (typeof a === "boolean") {
                  c._muted = a;
                } else {
                  return c._muted;
                }
              }
              var d = c._getSoundIds(b);
              for (var e = 0; e < d.length; e++) {
                var f = c._soundById(d[e]);
                if (f) {
                  f._muted = a;
                  if (f._interval) {
                    c._stopFade(f._id);
                  }
                  if (c._webAudio && f._node) {
                    f._node.gain.setValueAtTime(a ? 0 : f._volume, g.ctx.currentTime);
                  } else if (f._node) {
                    f._node.muted = g._muted ? true : a;
                  }
                  c._emit("mute", f._id);
                }
              }
              return c;
            },
            volume: function () {
              var a = this;
              var b = arguments;
              var c;
              var d;
              if (b.length === 0) {
                return a._volume;
              } else if (b.length === 1 || b.length === 2 && typeof b[1] === "undefined") {
                var e = a._getSoundIds();
                var f = e.indexOf(b[0]);
                if (f >= 0) {
                  d = parseInt(b[0], 10);
                } else {
                  c = parseFloat(b[0]);
                }
              } else if (b.length >= 2) {
                c = parseFloat(b[0]);
                d = parseInt(b[1], 10);
              }
              var h;
              if (typeof c !== "undefined" && c >= 0 && c <= 1) {
                if (a._state !== "loaded" || a._playLock) {
                  a._queue.push({
                    event: "volume",
                    action: function () {
                      a.volume.apply(a, b);
                    }
                  });
                  return a;
                }
                if (typeof d === "undefined") {
                  a._volume = c;
                }
                d = a._getSoundIds(d);
                for (var i = 0; i < d.length; i++) {
                  h = a._soundById(d[i]);
                  if (h) {
                    h._volume = c;
                    if (!b[2]) {
                      a._stopFade(d[i]);
                    }
                    if (a._webAudio && h._node && !h._muted) {
                      h._node.gain.setValueAtTime(c, g.ctx.currentTime);
                    } else if (h._node && !h._muted) {
                      h._node.volume = c * g.volume();
                    }
                    a._emit("volume", h._id);
                  }
                }
              } else {
                h = d ? a._soundById(d) : a._sounds[0];
                if (h) {
                  return h._volume;
                } else {
                  return 0;
                }
              }
              return a;
            },
            fade: function (a, b, c, d) {
              var e = this;
              if (e._state !== "loaded" || e._playLock) {
                e._queue.push({
                  event: "fade",
                  action: function () {
                    e.fade(a, b, c, d);
                  }
                });
                return e;
              }
              a = Math.min(Math.max(0, parseFloat(a)), 1);
              b = Math.min(Math.max(0, parseFloat(b)), 1);
              c = parseFloat(c);
              e.volume(a, d);
              var f = e._getSoundIds(d);
              for (var h = 0; h < f.length; h++) {
                var i = e._soundById(f[h]);
                if (i) {
                  if (!d) {
                    e._stopFade(f[h]);
                  }
                  if (e._webAudio && !i._muted) {
                    var j = g.ctx.currentTime;
                    var k = j + c / 1000;
                    i._volume = a;
                    i._node.gain.setValueAtTime(a, j);
                    i._node.gain.linearRampToValueAtTime(b, k);
                  }
                  e._startFadeInterval(i, a, b, c, f[h], typeof d === "undefined");
                }
              }
              return e;
            },
            _startFadeInterval: function (a, b, c, d, e, f) {
              var g = this;
              var h = b;
              var i = c - b;
              var j = Math.abs(i / 0.01);
              var k = Math.max(4, j > 0 ? d / j : d);
              var l = Date.now();
              a._fadeTo = c;
              a._interval = setInterval(function () {
                var e = (Date.now() - l) / d;
                l = Date.now();
                h += i * e;
                h = Math.round(h * 100) / 100;
                if (i < 0) {
                  h = Math.max(c, h);
                } else {
                  h = Math.min(c, h);
                }
                if (g._webAudio) {
                  a._volume = h;
                } else {
                  g.volume(h, a._id, true);
                }
                if (f) {
                  g._volume = h;
                }
                if (c < b && h <= c || c > b && h >= c) {
                  clearInterval(a._interval);
                  a._interval = null;
                  a._fadeTo = null;
                  g.volume(c, a._id);
                  g._emit("fade", a._id);
                }
              }, k);
            },
            _stopFade: function (a) {
              var b = this;
              var c = b._soundById(a);
              if (c && c._interval) {
                if (b._webAudio) {
                  c._node.gain.cancelScheduledValues(g.ctx.currentTime);
                }
                clearInterval(c._interval);
                c._interval = null;
                b.volume(c._fadeTo, a);
                c._fadeTo = null;
                b._emit("fade", a);
              }
              return b;
            },
            loop: function () {
              var a = this;
              var b = arguments;
              var c;
              var d;
              var e;
              if (b.length === 0) {
                return a._loop;
              } else if (b.length === 1) {
                if (typeof b[0] === "boolean") {
                  c = b[0];
                  a._loop = c;
                } else {
                  e = a._soundById(parseInt(b[0], 10));
                  if (e) {
                    return e._loop;
                  } else {
                    return false;
                  }
                }
              } else if (b.length === 2) {
                c = b[0];
                d = parseInt(b[1], 10);
              }
              var f = a._getSoundIds(d);
              for (var g = 0; g < f.length; g++) {
                e = a._soundById(f[g]);
                if (e) {
                  e._loop = c;
                  if (a._webAudio && e._node && e._node.bufferSource) {
                    e._node.bufferSource.loop = c;
                    if (c) {
                      e._node.bufferSource.loopStart = e._start || 0;
                      e._node.bufferSource.loopEnd = e._stop;
                      if (a.playing(f[g])) {
                        a.pause(f[g], true);
                        a.play(f[g], true);
                      }
                    }
                  }
                }
              }
              return a;
            },
            rate: function () {
              var a = this;
              var b = arguments;
              var c;
              var d;
              if (b.length === 0) {
                d = a._sounds[0]._id;
              } else if (b.length === 1) {
                var e = a._getSoundIds();
                var f = e.indexOf(b[0]);
                if (f >= 0) {
                  d = parseInt(b[0], 10);
                } else {
                  c = parseFloat(b[0]);
                }
              } else if (b.length === 2) {
                c = parseFloat(b[0]);
                d = parseInt(b[1], 10);
              }
              var h;
              if (typeof c === "number") {
                if (a._state !== "loaded" || a._playLock) {
                  a._queue.push({
                    event: "rate",
                    action: function () {
                      a.rate.apply(a, b);
                    }
                  });
                  return a;
                }
                if (typeof d === "undefined") {
                  a._rate = c;
                }
                d = a._getSoundIds(d);
                for (var i = 0; i < d.length; i++) {
                  h = a._soundById(d[i]);
                  if (h) {
                    if (a.playing(d[i])) {
                      h._rateSeek = a.seek(d[i]);
                      h._playStart = a._webAudio ? g.ctx.currentTime : h._playStart;
                    }
                    h._rate = c;
                    if (a._webAudio && h._node && h._node.bufferSource) {
                      h._node.bufferSource.playbackRate.setValueAtTime(c, g.ctx.currentTime);
                    } else if (h._node) {
                      h._node.playbackRate = c;
                    }
                    var j = a.seek(d[i]);
                    var k = (a._sprite[h._sprite][0] + a._sprite[h._sprite][1]) / 1000 - j;
                    var l = k * 1000 / Math.abs(h._rate);
                    if (a._endTimers[d[i]] || !h._paused) {
                      a._clearTimer(d[i]);
                      a._endTimers[d[i]] = setTimeout(a._ended.bind(a, h), l);
                    }
                    a._emit("rate", h._id);
                  }
                }
              } else {
                h = a._soundById(d);
                if (h) {
                  return h._rate;
                } else {
                  return a._rate;
                }
              }
              return a;
            },
            seek: function () {
              var a = this;
              var b = arguments;
              var c;
              var d;
              if (b.length === 0) {
                if (a._sounds.length) {
                  d = a._sounds[0]._id;
                }
              } else if (b.length === 1) {
                var e = a._getSoundIds();
                var f = e.indexOf(b[0]);
                if (f >= 0) {
                  d = parseInt(b[0], 10);
                } else if (a._sounds.length) {
                  d = a._sounds[0]._id;
                  c = parseFloat(b[0]);
                }
              } else if (b.length === 2) {
                c = parseFloat(b[0]);
                d = parseInt(b[1], 10);
              }
              if (typeof d === "undefined") {
                return 0;
              }
              if (typeof c === "number" && (a._state !== "loaded" || a._playLock)) {
                a._queue.push({
                  event: "seek",
                  action: function () {
                    a.seek.apply(a, b);
                  }
                });
                return a;
              }
              var h = a._soundById(d);
              if (h) {
                if (typeof c === "number" && c >= 0) {
                  var i = a.playing(d);
                  if (i) {
                    a.pause(d, true);
                  }
                  h._seek = c;
                  h._ended = false;
                  a._clearTimer(d);
                  if (!a._webAudio && h._node && !isNaN(h._node.duration)) {
                    h._node.currentTime = c;
                  }
                  function b() {
                    if (i) {
                      a.play(d, true);
                    }
                    a._emit("seek", d);
                  }
                  if (i && !a._webAudio) {
                    function c() {
                      if (!a._playLock) {
                        b();
                      } else {
                        setTimeout(c, 0);
                      }
                    }
                    setTimeout(c, 0);
                  } else {
                    b();
                  }
                } else if (a._webAudio) {
                  var j = a.playing(d) ? g.ctx.currentTime - h._playStart : 0;
                  var k = h._rateSeek ? h._rateSeek - h._seek : 0;
                  return h._seek + (k + j * Math.abs(h._rate));
                } else {
                  return h._node.currentTime;
                }
              }
              return a;
            },
            playing: function (a) {
              var b = this;
              if (typeof a === "number") {
                var c = b._soundById(a);
                if (c) {
                  return !c._paused;
                } else {
                  return false;
                }
              }
              for (var d = 0; d < b._sounds.length; d++) {
                if (!b._sounds[d]._paused) {
                  return true;
                }
              }
              return false;
            },
            duration: function (a) {
              var b = this;
              var c = b._duration;
              var d = b._soundById(a);
              if (d) {
                c = b._sprite[d._sprite][1] / 1000;
              }
              return c;
            },
            state: function () {
              return this._state;
            },
            unload: function () {
              var a = this;
              var b = a._sounds;
              for (var c = 0; c < b.length; c++) {
                if (!b[c]._paused) {
                  a.stop(b[c]._id);
                }
                if (!a._webAudio) {
                  a._clearSound(b[c]._node);
                  b[c]._node.removeEventListener("error", b[c]._errorFn, false);
                  b[c]._node.removeEventListener(g._canPlayEvent, b[c]._loadFn, false);
                  b[c]._node.removeEventListener("ended", b[c]._endFn, false);
                  g._releaseHtml5Audio(b[c]._node);
                }
                delete b[c]._node;
                a._clearTimer(b[c]._id);
              }
              var d = g._howls.indexOf(a);
              if (d >= 0) {
                g._howls.splice(d, 1);
              }
              var e = true;
              for (c = 0; c < g._howls.length; c++) {
                if (g._howls[c]._src === a._src || a._src.indexOf(g._howls[c]._src) >= 0) {
                  e = false;
                  break;
                }
              }
              if (j && e) {
                delete j[a._src];
              }
              g.noAudio = false;
              a._state = "unloaded";
              a._sounds = [];
              a = null;
              return null;
            },
            on: function (a, b, c, d) {
              var e = this;
              var f = e["_on" + a];
              if (typeof b === "function") {
                f.push(d ? {
                  id: c,
                  fn: b,
                  once: d
                } : {
                  id: c,
                  fn: b
                });
              }
              return e;
            },
            off: function (a, b, c) {
              var d = this;
              var e = d["_on" + a];
              var f = 0;
              if (typeof b === "number") {
                c = b;
                b = null;
              }
              if (b || c) {
                for (f = 0; f < e.length; f++) {
                  var g = c === e[f].id;
                  if (b === e[f].fn && g || !b && g) {
                    e.splice(f, 1);
                    break;
                  }
                }
              } else if (a) {
                d["_on" + a] = [];
              } else {
                var h = Object.keys(d);
                for (f = 0; f < h.length; f++) {
                  if (h[f].indexOf("_on") === 0 && Array.isArray(d[h[f]])) {
                    d[h[f]] = [];
                  }
                }
              }
              return d;
            },
            once: function (a, b, c) {
              var d = this;
              d.on(a, b, c, 1);
              return d;
            },
            _emit: function (a, b, c) {
              var d = this;
              var e = d["_on" + a];
              for (var f = e.length - 1; f >= 0; f--) {
                if (!e[f].id || e[f].id === b || a === "load") {
                  setTimeout(function (a) {
                    a.call(this, b, c);
                  }.bind(d, e[f].fn), 0);
                  if (e[f].once) {
                    d.off(a, e[f].fn, e[f].id);
                  }
                }
              }
              d._loadQueue(a);
              return d;
            },
            _loadQueue: function (a) {
              var b = this;
              if (b._queue.length > 0) {
                var c = b._queue[0];
                if (c.event === a) {
                  b._queue.shift();
                  b._loadQueue();
                }
                if (!a) {
                  c.action();
                }
              }
              return b;
            },
            _ended: function (a) {
              var b = this;
              var c = a._sprite;
              if (!b._webAudio && a._node && !a._node.paused && !a._node.ended && a._node.currentTime < a._stop) {
                setTimeout(b._ended.bind(b, a), 100);
                return b;
              }
              var d = !!a._loop || !!b._sprite[c][2];
              b._emit("end", a._id);
              if (!b._webAudio && d) {
                b.stop(a._id, true).play(a._id);
              }
              if (b._webAudio && d) {
                b._emit("play", a._id);
                a._seek = a._start || 0;
                a._rateSeek = 0;
                a._playStart = g.ctx.currentTime;
                var e = (a._stop - a._start) * 1000 / Math.abs(a._rate);
                b._endTimers[a._id] = setTimeout(b._ended.bind(b, a), e);
              }
              if (b._webAudio && !d) {
                a._paused = true;
                a._ended = true;
                a._seek = a._start || 0;
                a._rateSeek = 0;
                b._clearTimer(a._id);
                b._cleanBuffer(a._node);
                g._autoSuspend();
              }
              if (!b._webAudio && !d) {
                b.stop(a._id, true);
              }
              return b;
            },
            _clearTimer: function (a) {
              var b = this;
              if (b._endTimers[a]) {
                if (typeof b._endTimers[a] !== "function") {
                  clearTimeout(b._endTimers[a]);
                } else {
                  var c = b._soundById(a);
                  if (c && c._node) {
                    c._node.removeEventListener("ended", b._endTimers[a], false);
                  }
                }
                delete b._endTimers[a];
              }
              return b;
            },
            _soundById: function (a) {
              var b = this;
              for (var c = 0; c < b._sounds.length; c++) {
                if (a === b._sounds[c]._id) {
                  return b._sounds[c];
                }
              }
              return null;
            },
            _inactiveSound: function () {
              var a = this;
              a._drain();
              for (var b = 0; b < a._sounds.length; b++) {
                if (a._sounds[b]._ended) {
                  return a._sounds[b].reset();
                }
              }
              return new i(a);
            },
            _drain: function () {
              var a = this;
              var b = a._pool;
              var c = 0;
              var d = 0;
              if (a._sounds.length < b) {
                return;
              }
              for (d = 0; d < a._sounds.length; d++) {
                if (a._sounds[d]._ended) {
                  c++;
                }
              }
              for (d = a._sounds.length - 1; d >= 0; d--) {
                if (c <= b) {
                  return;
                }
                if (a._sounds[d]._ended) {
                  if (a._webAudio && a._sounds[d]._node) {
                    a._sounds[d]._node.disconnect(0);
                  }
                  a._sounds.splice(d, 1);
                  c--;
                }
              }
            },
            _getSoundIds: function (a) {
              var b = this;
              if (typeof a === "undefined") {
                var c = [];
                for (var d = 0; d < b._sounds.length; d++) {
                  c.push(b._sounds[d]._id);
                }
                return c;
              } else {
                return [a];
              }
            },
            _refreshBuffer: function (a) {
              var b = this;
              a._node.bufferSource = g.ctx.createBufferSource();
              a._node.bufferSource.buffer = j[b._src];
              if (a._panner) {
                a._node.bufferSource.connect(a._panner);
              } else {
                a._node.bufferSource.connect(a._node);
              }
              a._node.bufferSource.loop = a._loop;
              if (a._loop) {
                a._node.bufferSource.loopStart = a._start || 0;
                a._node.bufferSource.loopEnd = a._stop || 0;
              }
              a._node.bufferSource.playbackRate.setValueAtTime(a._rate, g.ctx.currentTime);
              return b;
            },
            _cleanBuffer: function (a) {
              var b = this;
              var c = g._navigator && g._navigator.vendor.indexOf("Apple") >= 0;
              if (g._scratchBuffer && a.bufferSource) {
                a.bufferSource.onended = null;
                a.bufferSource.disconnect(0);
                if (c) {
                  try {
                    a.bufferSource.buffer = g._scratchBuffer;
                  } catch (a) {}
                }
              }
              a.bufferSource = null;
              return b;
            },
            _clearSound: function (a) {
              var b = /MSIE |Trident\//.test(g._navigator && g._navigator.userAgent);
              if (!b) {
                a.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
              }
            }
          };
          function i(a) {
            this._parent = a;
            this.init();
          }
          i.prototype = {
            init: function () {
              var a = this;
              var b = a._parent;
              a._muted = b._muted;
              a._loop = b._loop;
              a._volume = b._volume;
              a._rate = b._rate;
              a._seek = 0;
              a._paused = true;
              a._ended = true;
              a._sprite = "__default";
              a._id = ++g._counter;
              b._sounds.push(a);
              a.create();
              return a;
            },
            create: function () {
              var a = this;
              var b = a._parent;
              var c = g._muted || a._muted || a._parent._muted ? 0 : a._volume;
              if (b._webAudio) {
                a._node = typeof g.ctx.createGain === "undefined" ? g.ctx.createGainNode() : g.ctx.createGain();
                a._node.gain.setValueAtTime(c, g.ctx.currentTime);
                a._node.paused = true;
                a._node.connect(g.masterGain);
              } else if (!g.noAudio) {
                a._node = g._obtainHtml5Audio();
                a._errorFn = a._errorListener.bind(a);
                a._node.addEventListener("error", a._errorFn, false);
                a._loadFn = a._loadListener.bind(a);
                a._node.addEventListener(g._canPlayEvent, a._loadFn, false);
                a._endFn = a._endListener.bind(a);
                a._node.addEventListener("ended", a._endFn, false);
                a._node.src = b._src;
                a._node.preload = b._preload === true ? "auto" : b._preload;
                a._node.volume = c * g.volume();
                a._node.load();
              }
              return a;
            },
            reset: function () {
              var a = this;
              var b = a._parent;
              a._muted = b._muted;
              a._loop = b._loop;
              a._volume = b._volume;
              a._rate = b._rate;
              a._seek = 0;
              a._rateSeek = 0;
              a._paused = true;
              a._ended = true;
              a._sprite = "__default";
              a._id = ++g._counter;
              return a;
            },
            _errorListener: function () {
              var a = this;
              a._parent._emit("loaderror", a._id, a._node.error ? a._node.error.code : 0);
              a._node.removeEventListener("error", a._errorFn, false);
            },
            _loadListener: function () {
              var a = this;
              var b = a._parent;
              b._duration = Math.ceil(a._node.duration * 10) / 10;
              if (Object.keys(b._sprite).length === 0) {
                b._sprite = {
                  __default: [0, b._duration * 1000]
                };
              }
              if (b._state !== "loaded") {
                b._state = "loaded";
                b._emit("load");
                b._loadQueue();
              }
              a._node.removeEventListener(g._canPlayEvent, a._loadFn, false);
            },
            _endListener: function () {
              var a = this;
              var b = a._parent;
              if (b._duration === Infinity) {
                b._duration = Math.ceil(a._node.duration * 10) / 10;
                if (b._sprite.__default[1] === Infinity) {
                  b._sprite.__default[1] = b._duration * 1000;
                }
                b._ended(a);
              }
              a._node.removeEventListener("ended", a._endFn, false);
            }
          };
          var j = {};
          function k(a) {
            var b = a._src;
            if (j[b]) {
              a._duration = j[b].duration;
              n(a);
              return;
            }
            if (/^data:[^;]+;base64,/.test(b)) {
              var c = atob(b.split(",")[1]);
              var d = new Uint8Array(c.length);
              for (var e = 0; e < c.length; ++e) {
                d[e] = c.charCodeAt(e);
              }
              m(d.buffer, a);
            } else {
              var f = new XMLHttpRequest();
              f.open(a._xhr.method, b, true);
              f.withCredentials = a._xhr.withCredentials;
              f.responseType = "arraybuffer";
              if (a._xhr.headers) {
                Object.keys(a._xhr.headers).forEach(function (b) {
                  f.setRequestHeader(b, a._xhr.headers[b]);
                });
              }
              f.onload = function () {
                var b = (f.status + "")[0];
                if (b !== "0" && b !== "2" && b !== "3") {
                  a._emit("loaderror", null, "Failed loading audio file with status: " + f.status + ".");
                  return;
                }
                m(f.response, a);
              };
              f.onerror = function () {
                if (a._webAudio) {
                  a._html5 = true;
                  a._webAudio = false;
                  a._sounds = [];
                  delete j[b];
                  a.load();
                }
              };
              l(f);
            }
          }
          function l(a) {
            try {
              a.send();
            } catch (b) {
              a.onerror();
            }
          }
          function m(a, b) {
            function c() {
              b._emit("loaderror", null, "Decoding audio data failed.");
            }
            function d(a) {
              if (a && b._sounds.length > 0) {
                j[b._src] = a;
                n(b, a);
              } else {
                c();
              }
            }
            if (typeof Promise !== "undefined" && g.ctx.decodeAudioData.length === 1) {
              g.ctx.decodeAudioData(a).then(d).catch(c);
            } else {
              g.ctx.decodeAudioData(a, d, c);
            }
          }
          function n(a, b) {
            if (b && !a._duration) {
              a._duration = b.duration;
            }
            if (Object.keys(a._sprite).length === 0) {
              a._sprite = {
                __default: [0, a._duration * 1000]
              };
            }
            if (a._state !== "loaded") {
              a._state = "loaded";
              a._emit("load");
              a._loadQueue();
            }
          }
          function o() {
            if (!g.usingWebAudio) {
              return;
            }
            try {
              if (typeof AudioContext !== "undefined") {
                g.ctx = new AudioContext();
              } else if (typeof webkitAudioContext !== "undefined") {
                g.ctx = new webkitAudioContext();
              } else {
                g.usingWebAudio = false;
              }
            } catch (a) {
              g.usingWebAudio = false;
            }
            if (!g.ctx) {
              g.usingWebAudio = false;
            }
            var a = /iP(hone|od|ad)/.test(g._navigator && g._navigator.platform);
            var b = g._navigator && g._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            var c = b ? parseInt(b[1], 10) : null;
            if (a && c && c < 9) {
              var d = /safari/.test(g._navigator && g._navigator.userAgent.toLowerCase());
              if (g._navigator && !d) {
                g.usingWebAudio = false;
              }
            }
            if (g.usingWebAudio) {
              g.masterGain = typeof g.ctx.createGain === "undefined" ? g.ctx.createGainNode() : g.ctx.createGain();
              g.masterGain.gain.setValueAtTime(g._muted ? 0 : g._volume, g.ctx.currentTime);
              g.masterGain.connect(g.ctx.destination);
            }
            g._setup();
          }
          if (true) {
            d = [];
            e = function () {
              return {
                Howler: g,
                Howl: h
              };
            }.apply(b, d);
            if (e !== undefined) {
              a.exports = e;
            }
          }
          if (true) {
            b.Howler = g;
            b.Howl = h;
          }
          if (typeof c.g !== "undefined") {
            c.g.HowlerGlobal = f;
            c.g.Howler = g;
            c.g.Howl = h;
            c.g.Sound = i;
          } else if (typeof window !== "undefined") {
            window.HowlerGlobal = f;
            window.Howler = g;
            window.Howl = h;
            window.Sound = i;
          }
        })();
        (function () {
          'use strict';
  
          HowlerGlobal.prototype._pos = [0, 0, 0];
          HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
          HowlerGlobal.prototype.stereo = function (a) {
            var b = this;
            if (!b.ctx || !b.ctx.listener) {
              return b;
            }
            for (var c = b._howls.length - 1; c >= 0; c--) {
              b._howls[c].stereo(a);
            }
            return b;
          };
          HowlerGlobal.prototype.pos = function (a, b, c) {
            var d = this;
            if (!d.ctx || !d.ctx.listener) {
              return d;
            }
            b = typeof b !== "number" ? d._pos[1] : b;
            c = typeof c !== "number" ? d._pos[2] : c;
            if (typeof a === "number") {
              d._pos = [a, b, c];
              if (typeof d.ctx.listener.positionX !== "undefined") {
                d.ctx.listener.positionX.setTargetAtTime(d._pos[0], Howler.ctx.currentTime, 0.1);
                d.ctx.listener.positionY.setTargetAtTime(d._pos[1], Howler.ctx.currentTime, 0.1);
                d.ctx.listener.positionZ.setTargetAtTime(d._pos[2], Howler.ctx.currentTime, 0.1);
              } else {
                d.ctx.listener.setPosition(d._pos[0], d._pos[1], d._pos[2]);
              }
            } else {
              return d._pos;
            }
            return d;
          };
          HowlerGlobal.prototype.orientation = function (a, b, c, d, e, f) {
            var g = this;
            if (!g.ctx || !g.ctx.listener) {
              return g;
            }
            var h = g._orientation;
            b = typeof b !== "number" ? h[1] : b;
            c = typeof c !== "number" ? h[2] : c;
            d = typeof d !== "number" ? h[3] : d;
            e = typeof e !== "number" ? h[4] : e;
            f = typeof f !== "number" ? h[5] : f;
            if (typeof a === "number") {
              g._orientation = [a, b, c, d, e, f];
              if (typeof g.ctx.listener.forwardX !== "undefined") {
                g.ctx.listener.forwardX.setTargetAtTime(a, Howler.ctx.currentTime, 0.1);
                g.ctx.listener.forwardY.setTargetAtTime(b, Howler.ctx.currentTime, 0.1);
                g.ctx.listener.forwardZ.setTargetAtTime(c, Howler.ctx.currentTime, 0.1);
                g.ctx.listener.upX.setTargetAtTime(d, Howler.ctx.currentTime, 0.1);
                g.ctx.listener.upY.setTargetAtTime(e, Howler.ctx.currentTime, 0.1);
                g.ctx.listener.upZ.setTargetAtTime(f, Howler.ctx.currentTime, 0.1);
              } else {
                g.ctx.listener.setOrientation(a, b, c, d, e, f);
              }
            } else {
              return h;
            }
            return g;
          };
          Howl.prototype.init = function (a) {
            return function (b) {
              var c = this;
              c._orientation = b.orientation || [1, 0, 0];
              c._stereo = b.stereo || null;
              c._pos = b.pos || null;
              c._pannerAttr = {
                coneInnerAngle: typeof b.coneInnerAngle !== "undefined" ? b.coneInnerAngle : 360,
                coneOuterAngle: typeof b.coneOuterAngle !== "undefined" ? b.coneOuterAngle : 360,
                coneOuterGain: typeof b.coneOuterGain !== "undefined" ? b.coneOuterGain : 0,
                distanceModel: typeof b.distanceModel !== "undefined" ? b.distanceModel : "inverse",
                maxDistance: typeof b.maxDistance !== "undefined" ? b.maxDistance : 10000,
                panningModel: typeof b.panningModel !== "undefined" ? b.panningModel : "HRTF",
                refDistance: typeof b.refDistance !== "undefined" ? b.refDistance : 1,
                rolloffFactor: typeof b.rolloffFactor !== "undefined" ? b.rolloffFactor : 1
              };
              c._onstereo = b.onstereo ? [{
                fn: b.onstereo
              }] : [];
              c._onpos = b.onpos ? [{
                fn: b.onpos
              }] : [];
              c._onorientation = b.onorientation ? [{
                fn: b.onorientation
              }] : [];
              return a.call(this, b);
            };
          }(Howl.prototype.init);
          Howl.prototype.stereo = function (b, c) {
            var d = this;
            if (!d._webAudio) {
              return d;
            }
            if (d._state !== "loaded") {
              d._queue.push({
                event: "stereo",
                action: function () {
                  d.stereo(b, c);
                }
              });
              return d;
            }
            var e = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
            if (typeof c === "undefined") {
              if (typeof b === "number") {
                d._stereo = b;
                d._pos = [b, 0, 0];
              } else {
                return d._stereo;
              }
            }
            var f = d._getSoundIds(c);
            for (var g = 0; g < f.length; g++) {
              var h = d._soundById(f[g]);
              if (h) {
                if (typeof b === "number") {
                  h._stereo = b;
                  h._pos = [b, 0, 0];
                  if (h._node) {
                    h._pannerAttr.panningModel = "equalpower";
                    if (!h._panner || !h._panner.pan) {
                      a(h, e);
                    }
                    if (e === "spatial") {
                      if (typeof h._panner.positionX !== "undefined") {
                        h._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime);
                        h._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                        h._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                      } else {
                        h._panner.setPosition(b, 0, 0);
                      }
                    } else {
                      h._panner.pan.setValueAtTime(b, Howler.ctx.currentTime);
                    }
                  }
                  d._emit("stereo", h._id);
                } else {
                  return h._stereo;
                }
              }
            }
            return d;
          };
          Howl.prototype.pos = function (b, c, d, e) {
            var f = this;
            if (!f._webAudio) {
              return f;
            }
            if (f._state !== "loaded") {
              f._queue.push({
                event: "pos",
                action: function () {
                  f.pos(b, c, d, e);
                }
              });
              return f;
            }
            c = typeof c !== "number" ? 0 : c;
            d = typeof d !== "number" ? -0.5 : d;
            if (typeof e === "undefined") {
              if (typeof b === "number") {
                f._pos = [b, c, d];
              } else {
                return f._pos;
              }
            }
            var g = f._getSoundIds(e);
            for (var h = 0; h < g.length; h++) {
              var i = f._soundById(g[h]);
              if (i) {
                if (typeof b === "number") {
                  i._pos = [b, c, d];
                  if (i._node) {
                    if (!i._panner || i._panner.pan) {
                      a(i, "spatial");
                    }
                    if (typeof i._panner.positionX !== "undefined") {
                      i._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime);
                      i._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime);
                      i._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime);
                    } else {
                      i._panner.setPosition(b, c, d);
                    }
                  }
                  f._emit("pos", i._id);
                } else {
                  return i._pos;
                }
              }
            }
            return f;
          };
          Howl.prototype.orientation = function (b, c, d, e) {
            var f = this;
            if (!f._webAudio) {
              return f;
            }
            if (f._state !== "loaded") {
              f._queue.push({
                event: "orientation",
                action: function () {
                  f.orientation(b, c, d, e);
                }
              });
              return f;
            }
            c = typeof c !== "number" ? f._orientation[1] : c;
            d = typeof d !== "number" ? f._orientation[2] : d;
            if (typeof e === "undefined") {
              if (typeof b === "number") {
                f._orientation = [b, c, d];
              } else {
                return f._orientation;
              }
            }
            var g = f._getSoundIds(e);
            for (var h = 0; h < g.length; h++) {
              var i = f._soundById(g[h]);
              if (i) {
                if (typeof b === "number") {
                  i._orientation = [b, c, d];
                  if (i._node) {
                    if (!i._panner) {
                      if (!i._pos) {
                        i._pos = f._pos || [0, 0, -0.5];
                      }
                      a(i, "spatial");
                    }
                    if (typeof i._panner.orientationX !== "undefined") {
                      i._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime);
                      i._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime);
                      i._panner.orientationZ.setValueAtTime(d, Howler.ctx.currentTime);
                    } else {
                      i._panner.setOrientation(b, c, d);
                    }
                  }
                  f._emit("orientation", i._id);
                } else {
                  return i._orientation;
                }
              }
            }
            return f;
          };
          Howl.prototype.pannerAttr = function () {
            var b = this;
            var c = arguments;
            var d;
            var e;
            var f;
            if (!b._webAudio) {
              return b;
            }
            if (c.length === 0) {
              return b._pannerAttr;
            } else if (c.length === 1) {
              if (typeof c[0] === "object") {
                d = c[0];
                if (typeof e === "undefined") {
                  if (!d.pannerAttr) {
                    d.pannerAttr = {
                      coneInnerAngle: d.coneInnerAngle,
                      coneOuterAngle: d.coneOuterAngle,
                      coneOuterGain: d.coneOuterGain,
                      distanceModel: d.distanceModel,
                      maxDistance: d.maxDistance,
                      refDistance: d.refDistance,
                      rolloffFactor: d.rolloffFactor,
                      panningModel: d.panningModel
                    };
                  }
                  b._pannerAttr = {
                    coneInnerAngle: typeof d.pannerAttr.coneInnerAngle !== "undefined" ? d.pannerAttr.coneInnerAngle : b._coneInnerAngle,
                    coneOuterAngle: typeof d.pannerAttr.coneOuterAngle !== "undefined" ? d.pannerAttr.coneOuterAngle : b._coneOuterAngle,
                    coneOuterGain: typeof d.pannerAttr.coneOuterGain !== "undefined" ? d.pannerAttr.coneOuterGain : b._coneOuterGain,
                    distanceModel: typeof d.pannerAttr.distanceModel !== "undefined" ? d.pannerAttr.distanceModel : b._distanceModel,
                    maxDistance: typeof d.pannerAttr.maxDistance !== "undefined" ? d.pannerAttr.maxDistance : b._maxDistance,
                    refDistance: typeof d.pannerAttr.refDistance !== "undefined" ? d.pannerAttr.refDistance : b._refDistance,
                    rolloffFactor: typeof d.pannerAttr.rolloffFactor !== "undefined" ? d.pannerAttr.rolloffFactor : b._rolloffFactor,
                    panningModel: typeof d.pannerAttr.panningModel !== "undefined" ? d.pannerAttr.panningModel : b._panningModel
                  };
                }
              } else {
                f = b._soundById(parseInt(c[0], 10));
                if (f) {
                  return f._pannerAttr;
                } else {
                  return b._pannerAttr;
                }
              }
            } else if (c.length === 2) {
              d = c[0];
              e = parseInt(c[1], 10);
            }
            var g = b._getSoundIds(e);
            for (var h = 0; h < g.length; h++) {
              f = b._soundById(g[h]);
              if (f) {
                var i = f._pannerAttr;
                i = {
                  coneInnerAngle: typeof d.coneInnerAngle !== "undefined" ? d.coneInnerAngle : i.coneInnerAngle,
                  coneOuterAngle: typeof d.coneOuterAngle !== "undefined" ? d.coneOuterAngle : i.coneOuterAngle,
                  coneOuterGain: typeof d.coneOuterGain !== "undefined" ? d.coneOuterGain : i.coneOuterGain,
                  distanceModel: typeof d.distanceModel !== "undefined" ? d.distanceModel : i.distanceModel,
                  maxDistance: typeof d.maxDistance !== "undefined" ? d.maxDistance : i.maxDistance,
                  refDistance: typeof d.refDistance !== "undefined" ? d.refDistance : i.refDistance,
                  rolloffFactor: typeof d.rolloffFactor !== "undefined" ? d.rolloffFactor : i.rolloffFactor,
                  panningModel: typeof d.panningModel !== "undefined" ? d.panningModel : i.panningModel
                };
                var j = f._panner;
                if (j) {
                  j.coneInnerAngle = i.coneInnerAngle;
                  j.coneOuterAngle = i.coneOuterAngle;
                  j.coneOuterGain = i.coneOuterGain;
                  j.distanceModel = i.distanceModel;
                  j.maxDistance = i.maxDistance;
                  j.refDistance = i.refDistance;
                  j.rolloffFactor = i.rolloffFactor;
                  j.panningModel = i.panningModel;
                } else {
                  if (!f._pos) {
                    f._pos = b._pos || [0, 0, -0.5];
                  }
                  a(f, "spatial");
                }
              }
            }
            return b;
          };
          Sound.prototype.init = function (a) {
            return function () {
              var b = this;
              var c = b._parent;
              b._orientation = c._orientation;
              b._stereo = c._stereo;
              b._pos = c._pos;
              b._pannerAttr = c._pannerAttr;
              a.call(this);
              if (b._stereo) {
                c.stereo(b._stereo);
              } else if (b._pos) {
                c.pos(b._pos[0], b._pos[1], b._pos[2], b._id);
              }
            };
          }(Sound.prototype.init);
          Sound.prototype.reset = function (a) {
            return function () {
              var b = this;
              var c = b._parent;
              b._orientation = c._orientation;
              b._stereo = c._stereo;
              b._pos = c._pos;
              b._pannerAttr = c._pannerAttr;
              if (b._stereo) {
                c.stereo(b._stereo);
              } else if (b._pos) {
                c.pos(b._pos[0], b._pos[1], b._pos[2], b._id);
              } else if (b._panner) {
                b._panner.disconnect(0);
                b._panner = undefined;
                c._refreshBuffer(b);
              }
              return a.call(this);
            };
          }(Sound.prototype.reset);
          function a(a, b) {
            b = b || "spatial";
            if (b === "spatial") {
              a._panner = Howler.ctx.createPanner();
              a._panner.coneInnerAngle = a._pannerAttr.coneInnerAngle;
              a._panner.coneOuterAngle = a._pannerAttr.coneOuterAngle;
              a._panner.coneOuterGain = a._pannerAttr.coneOuterGain;
              a._panner.distanceModel = a._pannerAttr.distanceModel;
              a._panner.maxDistance = a._pannerAttr.maxDistance;
              a._panner.refDistance = a._pannerAttr.refDistance;
              a._panner.rolloffFactor = a._pannerAttr.rolloffFactor;
              a._panner.panningModel = a._pannerAttr.panningModel;
              if (typeof a._panner.positionX !== "undefined") {
                a._panner.positionX.setValueAtTime(a._pos[0], Howler.ctx.currentTime);
                a._panner.positionY.setValueAtTime(a._pos[1], Howler.ctx.currentTime);
                a._panner.positionZ.setValueAtTime(a._pos[2], Howler.ctx.currentTime);
              } else {
                a._panner.setPosition(a._pos[0], a._pos[1], a._pos[2]);
              }
              if (typeof a._panner.orientationX !== "undefined") {
                a._panner.orientationX.setValueAtTime(a._orientation[0], Howler.ctx.currentTime);
                a._panner.orientationY.setValueAtTime(a._orientation[1], Howler.ctx.currentTime);
                a._panner.orientationZ.setValueAtTime(a._orientation[2], Howler.ctx.currentTime);
              } else {
                a._panner.setOrientation(a._orientation[0], a._orientation[1], a._orientation[2]);
              }
            } else {
              a._panner = Howler.ctx.createStereoPanner();
              a._panner.pan.setValueAtTime(a._stereo, Howler.ctx.currentTime);
            }
            a._panner.connect(a._node);
            if (!a._paused) {
              a._parent.pause(a._id, true).play(a._id, true);
            }
          }
        })();
      },
      "./node_modules/@socket.io/component-emitter/index.mjs": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Emitter: () => d
        });
        function d(a) {
          if (a) {
            return e(a);
          }
        }
        function e(a) {
          for (var b in d.prototype) {
            a[b] = d.prototype[b];
          }
          return a;
        }
        d.prototype.on = d.prototype.addEventListener = function (a, b) {
          this._callbacks = this._callbacks || {};
          (this._callbacks["$" + a] = this._callbacks["$" + a] || []).push(b);
          return this;
        };
        d.prototype.once = function (a, b) {
          function c() {
            this.off(a, c);
            b.apply(this, arguments);
          }
          c.fn = b;
          this.on(a, c);
          return this;
        };
        d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function (a, b) {
          this._callbacks = this._callbacks || {};
          if (arguments.length == 0) {
            this._callbacks = {};
            return this;
          }
          var c = this._callbacks["$" + a];
          if (!c) {
            return this;
          }
          if (arguments.length == 1) {
            delete this._callbacks["$" + a];
            return this;
          }
          var d;
          for (var e = 0; e < c.length; e++) {
            d = c[e];
            if (d === b || d.fn === b) {
              c.splice(e, 1);
              break;
            }
          }
          if (c.length === 0) {
            delete this._callbacks["$" + a];
          }
          return this;
        };
        d.prototype.emit = function (a) {
          this._callbacks = this._callbacks || {};
          var b = new Array(arguments.length - 1);
          var c = this._callbacks["$" + a];
          for (var d = 1; d < arguments.length; d++) {
            b[d - 1] = arguments[d];
          }
          if (c) {
            c = c.slice(0);
            for (var d = 0, e = c.length; d < e; ++d) {
              c[d].apply(this, b);
            }
          }
          return this;
        };
        d.prototype.emitReserved = d.prototype.emit;
        d.prototype.listeners = function (a) {
          this._callbacks = this._callbacks || {};
          return this._callbacks["$" + a] || [];
        };
        d.prototype.hasListeners = function (a) {
          return !!this.listeners(a).length;
        };
      },
      "./node_modules/engine.io-client/build/esm/contrib/has-cors.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          hasCORS: () => e
        });
        let d = false;
        try {
          d = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
        } catch (a) {}
        const e = d;
      },
      "./node_modules/engine.io-client/build/esm/contrib/parseqs.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          decode: () => e,
          encode: () => d
        });
        function d(a) {
          let b = "";
          for (let c in a) {
            if (a.hasOwnProperty(c)) {
              if (b.length) {
                b += "&";
              }
              b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]);
            }
          }
          return b;
        }
        function e(a) {
          let b = {};
          let c = a.split("&");
          for (let d = 0, e = c.length; d < e; d++) {
            let a = c[d].split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
          }
          return b;
        }
      },
      "./node_modules/engine.io-client/build/esm/contrib/parseuri.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          parse: () => f
        });
        const d = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        const e = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        function f(a) {
          const b = a;
          const c = a.indexOf("[");
          const f = a.indexOf("]");
          if (c != -1 && f != -1) {
            a = a.substring(0, c) + a.substring(c, f).replace(/:/g, ";") + a.substring(f, a.length);
          }
          let i = d.exec(a || "");
          let j = {};
          let k = 14;
          while (k--) {
            j[e[k]] = i[k] || "";
          }
          if (c != -1 && f != -1) {
            j.source = b;
            j.host = j.host.substring(1, j.host.length - 1).replace(/;/g, ":");
            j.authority = j.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
            j.ipv6uri = true;
          }
          j.pathNames = g(j, j.path);
          j.queryKey = h(j, j.query);
          return j;
        }
        function g(a, b) {
          const c = /\/{2,9}/g;
          const d = b.replace(c, "/").split("/");
          if (b.slice(0, 1) == "/" || b.length === 0) {
            d.splice(0, 1);
          }
          if (b.slice(-1) == "/") {
            d.splice(d.length - 1, 1);
          }
          return d;
        }
        function h(a, b) {
          const c = {};
          b.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (a, b, d) {
            if (b) {
              c[b] = d;
            }
          });
          return c;
        }
      },
      "./node_modules/engine.io-client/build/esm/contrib/yeast.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          decode: () => k,
          encode: () => j,
          yeast: () => l
        });
        const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
        const e = 64;
        const f = {};
        let g = 0;
        let h = 0;
        let i;
        function j(a) {
          let b = "";
          do {
            b = d[a % e] + b;
            a = Math.floor(a / e);
          } while (a > 0);
          return b;
        }
        function k(a) {
          let b = 0;
          for (h = 0; h < a.length; h++) {
            b = b * e + f[a.charAt(h)];
          }
          return b;
        }
        function l() {
          const a = j(+new Date());
          if (a !== i) {
            g = 0;
            return i = a;
          }
          return a + "." + j(g++);
        }
        for (; h < e; h++) {
          f[d[h]] = h;
        }
      },
      "./node_modules/engine.io-client/build/esm/globalThis.browser.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          globalThisShim: () => d
        });
        const d = (() => {
          if (typeof self !== "undefined") {
            return self;
          } else if (typeof window !== "undefined") {
            return window;
          } else {
            return Function("return this")();
          }
        })();
      },
      "./node_modules/engine.io-client/build/esm/index.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Socket: () => d.Socket,
          Transport: () => e.Transport,
          installTimerFunctions: () => g.installTimerFunctions,
          nextTick: () => i.nextTick,
          parse: () => h.parse,
          protocol: () => j,
          transports: () => f.transports
        });
        var d = c("./node_modules/engine.io-client/build/esm/socket.js");
        var e = c("./node_modules/engine.io-client/build/esm/transport.js");
        var f = c("./node_modules/engine.io-client/build/esm/transports/index.js");
        var g = c("./node_modules/engine.io-client/build/esm/util.js");
        var h = c("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
        var i = c("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
        const j = d.Socket.protocol;
      },
      "./node_modules/engine.io-client/build/esm/socket.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Socket: () => k
        });
        var d = c("./node_modules/engine.io-client/build/esm/transports/index.js");
        var e = c("./node_modules/engine.io-client/build/esm/util.js");
        var f = c("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
        var g = c("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
        var h = c("./node_modules/@socket.io/component-emitter/index.mjs");
        var i = c("./node_modules/engine.io-parser/build/esm/index.js");
        var j = c("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
        class k extends h.Emitter {
          constructor(a, b = undefined) {
            if (b === undefined) b = {};
            super();
            this.binaryType = j.defaultBinaryType;
            this.writeBuffer = [];
            if (a && typeof a === "object") {
              b = a;
              a = null;
            }
            if (a) {
              a = (0, g.parse)(a);
              b.hostname = a.host;
              b.secure = a.protocol === "https" || a.protocol === "wss";
              b.port = a.port;
              if (a.query) {
                b.query = a.query;
              }
            } else if (b.host) {
              b.hostname = (0, g.parse)(b.host).host;
            }
            (0, e.installTimerFunctions)(this, b);
            this.secure = b.secure ?? (typeof location !== "undefined" && location.protocol === "https:");
            if (b.hostname && !b.port) {
              b.port = this.secure ? "443" : "80";
            }
            this.hostname = b.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
            this.port = b.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
            this.transports = b.transports || ["polling", "websocket", "webtransport"];
            this.writeBuffer = [];
            this.prevBufferLen = 0;
            this.opts = Object.assign({
              path: "/engine.io",
              agent: false,
              withCredentials: false,
              upgrade: true,
              timestampParam: "t",
              rememberUpgrade: false,
              addTrailingSlash: true,
              rejectUnauthorized: true,
              perMessageDeflate: {
                threshold: 1024
              },
              transportOptions: {},
              closeOnBeforeunload: false
            }, b);
            this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
            if (typeof this.opts.query === "string") {
              this.opts.query = (0, f.decode)(this.opts.query);
            }
            this.id = null;
            this.upgrades = null;
            this.pingInterval = null;
            this.pingTimeout = null;
            this.pingTimeoutTimer = null;
            if (typeof addEventListener === "function") {
              if (this.opts.closeOnBeforeunload) {
                this.beforeunloadEventListener = () => {
                  if (this.transport) {
                    this.transport.removeAllListeners();
                    this.transport.close();
                  }
                };
                addEventListener("beforeunload", this.beforeunloadEventListener, false);
              }
              if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost"
                  });
                };
                addEventListener("offline", this.offlineEventListener, false);
              }
            }
            this.open();
          }
          createTransport(a) {
            const b = Object.assign({}, this.opts.query);
            b.EIO = i.protocol;
            b.transport = a;
            if (this.id) {
              b.sid = this.id;
            }
            const c = Object.assign({}, this.opts, {
              query: b,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port
            }, this.opts.transportOptions[a]);
            return new d.transports[a](c);
          }
          open() {
            let a;
            if (this.opts.rememberUpgrade && k.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
              a = "websocket";
            } else if (this.transports.length === 0) {
              this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
              return;
            } else {
              a = this.transports[0];
            }
            this.readyState = "opening";
            try {
              a = this.createTransport(a);
            } catch (a) {
              this.transports.shift();
              this.open();
              return;
            }
            a.open();
            this.setTransport(a);
          }
          setTransport(a) {
            if (this.transport) {
              this.transport.removeAllListeners();
            }
            this.transport = a;
            a.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", a => this.onClose("transport close", a));
          }
          probe(a) {
            let b = this.createTransport(a);
            let c = false;
            k.priorWebsocketSuccess = false;
            const d = () => {
              if (c) {
                return;
              }
              b.send([{
                type: "ping",
                data: "probe"
              }]);
              b.once("packet", a => {
                if (c) {
                  return;
                }
                if (a.type === "pong" && a.data === "probe") {
                  this.upgrading = true;
                  this.emitReserved("upgrading", b);
                  if (!b) {
                    return;
                  }
                  k.priorWebsocketSuccess = b.name === "websocket";
                  this.transport.pause(() => {
                    if (c) {
                      return;
                    }
                    if (this.readyState === "closed") {
                      return;
                    }
                    j();
                    this.setTransport(b);
                    b.send([{
                      type: "upgrade"
                    }]);
                    this.emitReserved("upgrade", b);
                    b = null;
                    this.upgrading = false;
                    this.flush();
                  });
                } else {
                  const a = new Error("probe error");
                  a.transport = b.name;
                  this.emitReserved("upgradeError", a);
                }
              });
            };
            function e() {
              if (c) {
                return;
              }
              c = true;
              j();
              b.close();
              b = null;
            }
            const f = a => {
              const c = new Error("probe error: " + a);
              c.transport = b.name;
              e();
              this.emitReserved("upgradeError", c);
            };
            function g() {
              f("transport closed");
            }
            function h() {
              f("socket closed");
            }
            function i(a) {
              if (b && a.name !== b.name) {
                e();
              }
            }
            const j = () => {
              b.removeListener("open", d);
              b.removeListener("error", f);
              b.removeListener("close", g);
              this.off("close", h);
              this.off("upgrading", i);
            };
            b.once("open", d);
            b.once("error", f);
            b.once("close", g);
            this.once("close", h);
            this.once("upgrading", i);
            if (this.upgrades.indexOf("webtransport") !== -1 && a !== "webtransport") {
              this.setTimeoutFn(() => {
                if (!c) {
                  b.open();
                }
              }, 200);
            } else {
              b.open();
            }
          }
          onOpen() {
            this.readyState = "open";
            k.priorWebsocketSuccess = this.transport.name === "websocket";
            this.emitReserved("open");
            this.flush();
            if (this.readyState === "open" && this.opts.upgrade) {
              let a = 0;
              const b = this.upgrades.length;
              for (; a < b; a++) {
                this.probe(this.upgrades[a]);
              }
            }
          }
          onPacket(a) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
              this.emitReserved("packet", a);
              this.emitReserved("heartbeat");
              this.resetPingTimeout();
              switch (a.type) {
                case "open":
                  this.onHandshake(JSON.parse(a.data));
                  break;
                case "ping":
                  this.sendPacket("pong");
                  this.emitReserved("ping");
                  this.emitReserved("pong");
                  break;
                case "error":
                  const b = new Error("server error");
                  b.code = a.data;
                  this.onError(b);
                  break;
                case "message":
                  this.emitReserved("data", a.data);
                  this.emitReserved("message", a.data);
                  break;
              }
            } else {}
          }
          onHandshake(a) {
            this.emitReserved("handshake", a);
            this.id = a.sid;
            this.transport.query.sid = a.sid;
            this.upgrades = this.filterUpgrades(a.upgrades);
            this.pingInterval = a.pingInterval;
            this.pingTimeout = a.pingTimeout;
            this.maxPayload = a.maxPayload;
            this.onOpen();
            if (this.readyState === "closed") {
              return;
            }
            this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer);
            this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout);
            if (this.opts.autoUnref) {
              this.pingTimeoutTimer.unref();
            }
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen);
            this.prevBufferLen = 0;
            if (this.writeBuffer.length === 0) {
              this.emitReserved("drain");
            } else {
              this.flush();
            }
          }
          flush() {
            if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              const a = this.getWritablePackets();
              this.transport.send(a);
              this.prevBufferLen = a.length;
              this.emitReserved("flush");
            }
          }
          getWritablePackets() {
            const a = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
            if (!a) {
              return this.writeBuffer;
            }
            let b = 1;
            for (let a = 0; a < this.writeBuffer.length; a++) {
              const c = this.writeBuffer[a].data;
              if (c) {
                b += (0, e.byteLength)(c);
              }
              if (a > 0 && b > this.maxPayload) {
                return this.writeBuffer.slice(0, a);
              }
              b += 2;
            }
            return this.writeBuffer;
          }
          write(a, b, c) {
            this.sendPacket("message", a, b, c);
            return this;
          }
          send(a, b, c) {
            this.sendPacket("message", a, b, c);
            return this;
          }
          sendPacket(a, b, c, d) {
            if (typeof b === "function") {
              d = b;
              b = undefined;
            }
            if (typeof c === "function") {
              d = c;
              c = null;
            }
            if (this.readyState === "closing" || this.readyState === "closed") {
              return;
            }
            c = c || {};
            c.compress = c.compress !== false;
            const e = {
              type: a,
              data: b,
              options: c
            };
            this.emitReserved("packetCreate", e);
            this.writeBuffer.push(e);
            if (d) {
              this.once("flush", d);
            }
            this.flush();
          }
          close() {
            const a = () => {
              this.onClose("forced close");
              this.transport.close();
            };
            const b = () => {
              this.off("upgrade", b);
              this.off("upgradeError", b);
              a();
            };
            const c = () => {
              this.once("upgrade", b);
              this.once("upgradeError", b);
            };
            if (this.readyState === "opening" || this.readyState === "open") {
              this.readyState = "closing";
              if (this.writeBuffer.length) {
                this.once("drain", () => {
                  if (this.upgrading) {
                    c();
                  } else {
                    a();
                  }
                });
              } else if (this.upgrading) {
                c();
              } else {
                a();
              }
            }
            return this;
          }
          onError(a) {
            k.priorWebsocketSuccess = false;
            this.emitReserved("error", a);
            this.onClose("transport error", a);
          }
          onClose(a, b) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
              this.clearTimeoutFn(this.pingTimeoutTimer);
              this.transport.removeAllListeners("close");
              this.transport.close();
              this.transport.removeAllListeners();
              if (typeof removeEventListener === "function") {
                removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                removeEventListener("offline", this.offlineEventListener, false);
              }
              this.readyState = "closed";
              this.id = null;
              this.emitReserved("close", a, b);
              this.writeBuffer = [];
              this.prevBufferLen = 0;
            }
          }
          filterUpgrades(a) {
            const b = [];
            let c = 0;
            const d = a.length;
            for (; c < d; c++) {
              if (~this.transports.indexOf(a[c])) {
                b.push(a[c]);
              }
            }
            return b;
          }
        }
        k.protocol = i.protocol;
      },
      "./node_modules/engine.io-client/build/esm/transport.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Transport: () => i
        });
        var d = c("./node_modules/engine.io-parser/build/esm/index.js");
        var e = c("./node_modules/@socket.io/component-emitter/index.mjs");
        var f = c("./node_modules/engine.io-client/build/esm/util.js");
        var g = c("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
        class h extends Error {
          constructor(a, b, c) {
            super(a);
            this.description = b;
            this.context = c;
            this.type = "TransportError";
          }
        }
        class i extends e.Emitter {
          constructor(a) {
            super();
            this.writable = false;
            (0, f.installTimerFunctions)(this, a);
            this.opts = a;
            this.query = a.query;
            this.socket = a.socket;
          }
          onError(a, b, c) {
            super.emitReserved("error", new h(a, b, c));
            return this;
          }
          open() {
            this.readyState = "opening";
            this.doOpen();
            return this;
          }
          close() {
            if (this.readyState === "opening" || this.readyState === "open") {
              this.doClose();
              this.onClose();
            }
            return this;
          }
          send(a) {
            if (this.readyState === "open") {
              this.write(a);
            } else {}
          }
          onOpen() {
            this.readyState = "open";
            this.writable = true;
            super.emitReserved("open");
          }
          onData(a) {
            const b = (0, d.decodePacket)(a, this.socket.binaryType);
            this.onPacket(b);
          }
          onPacket(a) {
            super.emitReserved("packet", a);
          }
          onClose(a) {
            this.readyState = "closed";
            super.emitReserved("close", a);
          }
          pause(a) {}
          createUri(a, b = undefined) {
            if (b === undefined) b = {};
            return a + "://" + this._hostname() + this._port() + this.opts.path + this._query(b);
          }
          _hostname() {
            const a = this.opts.hostname;
            if (a.indexOf(":") === -1) {
              return a;
            } else {
              return "[" + a + "]";
            }
          }
          _port() {
            if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
              return ":" + this.opts.port;
            } else {
              return "";
            }
          }
          _query(a) {
            const b = (0, g.encode)(a);
            if (b.length) {
              return "?" + b;
            } else {
              return "";
            }
          }
        }
      },
      "./node_modules/engine.io-client/build/esm/transports/index.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          transports: () => g
        });
        var d = c("./node_modules/engine.io-client/build/esm/transports/polling.js");
        var e = c("./node_modules/engine.io-client/build/esm/transports/websocket.js");
        var f = c("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
        const g = {
          websocket: e.WS,
          webtransport: f.WT,
          polling: d.Polling
        };
      },
      "./node_modules/engine.io-client/build/esm/transports/polling.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Polling: () => m,
          Request: () => n
        });
        var d = c("./node_modules/engine.io-client/build/esm/transport.js");
        var e = c("./node_modules/engine.io-client/build/esm/contrib/yeast.js");
        var f = c("./node_modules/engine.io-parser/build/esm/index.js");
        var g = c("./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js");
        var h = c("./node_modules/@socket.io/component-emitter/index.mjs");
        var i = c("./node_modules/engine.io-client/build/esm/util.js");
        var j = c("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
        function k() {}
        const l = function () {
          const a = new g.XHR({
            xdomain: false
          });
          return a.responseType != null;
        }();
        class m extends d.Transport {
          constructor(a) {
            super(a);
            this.polling = false;
            if (typeof location !== "undefined") {
              const b = location.protocol === "https:";
              let c = location.port;
              if (!c) {
                c = b ? "443" : "80";
              }
              this.xd = typeof location !== "undefined" && a.hostname !== location.hostname || c !== a.port;
            }
            const b = a && a.forceBase64;
            this.supportsBinary = l && !b;
            if (this.opts.withCredentials) {
              this.cookieJar = (0, g.createCookieJar)();
            }
          }
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(a) {
            this.readyState = "pausing";
            const b = () => {
              this.readyState = "paused";
              a();
            };
            if (this.polling || !this.writable) {
              let a = 0;
              if (this.polling) {
                a++;
                this.once("pollComplete", function () {
                  if (! --a) {
                    b();
                  }
                });
              }
              if (!this.writable) {
                a++;
                this.once("drain", function () {
                  if (! --a) {
                    b();
                  }
                });
              }
            } else {
              b();
            }
          }
          poll() {
            this.polling = true;
            this.doPoll();
            this.emitReserved("poll");
          }
          onData(a) {
            const b = a => {
              if (this.readyState === "opening" && a.type === "open") {
                this.onOpen();
              }
              if (a.type === "close") {
                this.onClose({
                  description: "transport closed by the server"
                });
                return false;
              }
              this.onPacket(a);
            };
            (0, f.decodePayload)(a, this.socket.binaryType).forEach(b);
            if (this.readyState !== "closed") {
              this.polling = false;
              this.emitReserved("pollComplete");
              if (this.readyState === "open") {
                this.poll();
              } else {}
            }
          }
          doClose() {
            const a = () => {
              this.write([{
                type: "close"
              }]);
            };
            if (this.readyState === "open") {
              a();
            } else {
              this.once("open", a);
            }
          }
          write(a) {
            this.writable = false;
            (0, f.encodePayload)(a, a => {
              this.doWrite(a, () => {
                this.writable = true;
                this.emitReserved("drain");
              });
            });
          }
          uri() {
            const a = this.opts.secure ? "https" : "http";
            const b = this.query || {};
            if (this.opts.timestampRequests !== false) {
              b[this.opts.timestampParam] = (0, e.yeast)();
            }
            if (!this.supportsBinary && !b.sid) {
              b.b64 = 1;
            }
            return this.createUri(a, b);
          }
          request(a = undefined) {
            if (a === undefined) a = {};
            Object.assign(a, {
              xd: this.xd,
              cookieJar: this.cookieJar
            }, this.opts);
            return new n(this.uri(), a);
          }
          doWrite(a, b) {
            const c = this.request({
              method: "POST",
              data: a
            });
            c.on("success", b);
            c.on("error", (a, b) => {
              this.onError("xhr post error", a, b);
            });
          }
          doPoll() {
            const a = this.request();
            a.on("data", this.onData.bind(this));
            a.on("error", (a, b) => {
              this.onError("xhr poll error", a, b);
            });
            this.pollXhr = a;
          }
        }
        class n extends h.Emitter {
          constructor(a, b) {
            super();
            (0, i.installTimerFunctions)(this, b);
            this.opts = b;
            this.method = b.method || "GET";
            this.uri = a;
            this.data = b.data !== undefined ? b.data : null;
            this.create();
          }
          create() {
            var a;
            const b = (0, i.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            b.xdomain = !!this.opts.xd;
            const c = this.xhr = new g.XHR(b);
            try {
              c.open(this.method, this.uri, true);
              try {
                if (this.opts.extraHeaders) {
                  if (c.setDisableHeaderCheck) {
                    c.setDisableHeaderCheck(true);
                  }
                  for (let a in this.opts.extraHeaders) {
                    if (this.opts.extraHeaders.hasOwnProperty(a)) {
                      c.setRequestHeader(a, this.opts.extraHeaders[a]);
                    }
                  }
                }
              } catch (a) {}
              if (this.method === "POST") {
                try {
                  c.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (a) {}
              }
              try {
                c.setRequestHeader("Accept", "*/*");
              } catch (a) {}
              if ((a = this.opts.cookieJar) === null || a === undefined) {
                undefined;
              } else {
                a.addCookies(c);
              }
              if ("withCredentials" in c) {
                c.withCredentials = this.opts.withCredentials;
              }
              if (this.opts.requestTimeout) {
                c.timeout = this.opts.requestTimeout;
              }
              c.onreadystatechange = () => {
                var a;
                if (c.readyState === 3) {
                  if ((a = this.opts.cookieJar) === null || a === undefined) {
                    undefined;
                  } else {
                    a.parseCookies(c);
                  }
                }
                if (c.readyState !== 4) {
                  return;
                }
                if (c.status === 200 || c.status === 1223) {
                  this.onLoad();
                } else {
                  this.setTimeoutFn(() => {
                    this.onError(typeof c.status === "number" ? c.status : 0);
                  }, 0);
                }
              };
              c.send(this.data);
            } catch (a) {
              this.setTimeoutFn(() => {
                this.onError(a);
              }, 0);
              return;
            }
            if (typeof document !== "undefined") {
              this.index = n.requestsCount++;
              n.requests[this.index] = this;
            }
          }
          onError(a) {
            this.emitReserved("error", a, this.xhr);
            this.cleanup(true);
          }
          cleanup(a) {
            if (typeof this.xhr === "undefined" || this.xhr === null) {
              return;
            }
            this.xhr.onreadystatechange = k;
            if (a) {
              try {
                this.xhr.abort();
              } catch (a) {}
            }
            if (typeof document !== "undefined") {
              delete n.requests[this.index];
            }
            this.xhr = null;
          }
          onLoad() {
            const a = this.xhr.responseText;
            if (a !== null) {
              this.emitReserved("data", a);
              this.emitReserved("success");
              this.cleanup();
            }
          }
          abort() {
            this.cleanup();
          }
        }
        n.requestsCount = 0;
        n.requests = {};
        if (typeof document !== "undefined") {
          if (typeof attachEvent === "function") {
            attachEvent("onunload", o);
          } else if (typeof addEventListener === "function") {
            const a = "onpagehide" in j.globalThisShim ? "pagehide" : "unload";
            addEventListener(a, o, false);
          }
        }
        function o() {
          for (let a in n.requests) {
            if (n.requests.hasOwnProperty(a)) {
              n.requests[a].abort();
            }
          }
        }
      },
      "./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          WebSocket: () => f,
          defaultBinaryType: () => h,
          nextTick: () => e,
          usingBrowserWebSocket: () => g
        });
        var d = c("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
        const e = (() => {
          const a = typeof Promise === "function" && typeof Promise.resolve === "function";
          if (a) {
            return a => Promise.resolve().then(a);
          } else {
            return (a, b) => b(a, 0);
          }
        })();
        const f = d.globalThisShim.WebSocket || d.globalThisShim.MozWebSocket;
        const g = true;
        const h = "arraybuffer";
      },
      "./node_modules/engine.io-client/build/esm/transports/websocket.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          WS: () => j
        });
        var d = c("./node_modules/engine.io-client/build/esm/transport.js");
        var e = c("./node_modules/engine.io-client/build/esm/contrib/yeast.js");
        var f = c("./node_modules/engine.io-client/build/esm/util.js");
        var g = c("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
        var h = c("./node_modules/engine.io-parser/build/esm/index.js");
        const i = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
        class j extends d.Transport {
          constructor(a) {
            super(a);
            this.supportsBinary = !a.forceBase64;
          }
          get name() {
            return "websocket";
          }
          doOpen() {
            if (!this.check()) {
              return;
            }
            const a = this.uri();
            const b = this.opts.protocols;
            const c = i ? {} : (0, f.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            if (this.opts.extraHeaders) {
              c.headers = this.opts.extraHeaders;
            }
            try {
              this.ws = g.usingBrowserWebSocket && !i ? b ? new g.WebSocket(a, b) : new g.WebSocket(a) : new g.WebSocket(a, b, c);
            } catch (a) {
              return this.emitReserved("error", a);
            }
            this.ws.binaryType = this.socket.binaryType;
            this.addEventListeners();
          }
          addEventListeners() {
            this.ws.onopen = () => {
              if (this.opts.autoUnref) {
                this.ws._socket.unref();
              }
              this.onOpen();
            };
            this.ws.onclose = a => this.onClose({
              description: "websocket connection closed",
              context: a
            });
            this.ws.onmessage = a => this.onData(a.data);
            this.ws.onerror = a => this.onError("websocket error", a);
          }
          write(a) {
            this.writable = false;
            for (let b = 0; b < a.length; b++) {
              const c = a[b];
              const d = b === a.length - 1;
              (0, h.encodePacket)(c, this.supportsBinary, a => {
                const b = {};
                if (!g.usingBrowserWebSocket) {
                  if (c.options) {
                    b.compress = c.options.compress;
                  }
                  if (this.opts.perMessageDeflate) {
                    const c = typeof a === "string" ? Buffer.byteLength(a) : a.length;
                    if (c < this.opts.perMessageDeflate.threshold) {
                      b.compress = false;
                    }
                  }
                }
                try {
                  if (g.usingBrowserWebSocket) {
                    this.ws.send(a);
                  } else {
                    this.ws.send(a, b);
                  }
                } catch (a) {}
                if (d) {
                  (0, g.nextTick)(() => {
                    this.writable = true;
                    this.emitReserved("drain");
                  }, this.setTimeoutFn);
                }
              });
            }
          }
          doClose() {
            if (typeof this.ws !== "undefined") {
              this.ws.close();
              this.ws = null;
            }
          }
          uri() {
            const a = this.opts.secure ? "wss" : "ws";
            const b = this.query || {};
            if (this.opts.timestampRequests) {
              b[this.opts.timestampParam] = (0, e.yeast)();
            }
            if (!this.supportsBinary) {
              b.b64 = 1;
            }
            return this.createUri(a, b);
          }
          check() {
            return !!g.WebSocket;
          }
        }
      },
      "./node_modules/engine.io-client/build/esm/transports/webtransport.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          WT: () => g
        });
        var d = c("./node_modules/engine.io-client/build/esm/transport.js");
        var e = c("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
        var f = c("./node_modules/engine.io-parser/build/esm/index.js");
        class g extends d.Transport {
          get name() {
            return "webtransport";
          }
          doOpen() {
            if (typeof WebTransport !== "function") {
              return;
            }
            this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
            this.transport.closed.then(() => {
              this.onClose();
            }).catch(a => {
              this.onError("webtransport error", a);
            });
            this.transport.ready.then(() => {
              this.transport.createBidirectionalStream().then(a => {
                const b = (0, f.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const c = a.readable.pipeThrough(b).getReader();
                const d = (0, f.createPacketEncoderStream)();
                d.readable.pipeTo(a.writable);
                this.writer = d.writable.getWriter();
                const e = () => {
                  c.read().then(({
                    done: a,
                    value: b
                  }) => {
                    if (a) {
                      return;
                    }
                    this.onPacket(b);
                    e();
                  }).catch(a => {});
                };
                e();
                const g = {
                  type: "open"
                };
                if (this.query.sid) {
                  g.data = "{\"sid\":\"" + this.query.sid + "\"}";
                }
                this.writer.write(g).then(() => this.onOpen());
              });
            });
          }
          write(a) {
            this.writable = false;
            for (let b = 0; b < a.length; b++) {
              const c = a[b];
              const d = b === a.length - 1;
              this.writer.write(c).then(() => {
                if (d) {
                  (0, e.nextTick)(() => {
                    this.writable = true;
                    this.emitReserved("drain");
                  }, this.setTimeoutFn);
                }
              });
            }
          }
          doClose() {
            var a;
            if ((a = this.transport) === null || a === undefined) {
              undefined;
            } else {
              a.close();
            }
          }
        }
      },
      "./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          XHR: () => f,
          createCookieJar: () => g
        });
        var d = c("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");
        var e = c("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
        function f(a) {
          const b = a.xdomain;
          try {
            if (typeof XMLHttpRequest !== "undefined" && (!b || d.hasCORS)) {
              return new XMLHttpRequest();
            }
          } catch (a) {}
          if (!b) {
            try {
              return new e.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
            } catch (a) {}
          }
        }
        function g() {}
      },
      "./node_modules/engine.io-client/build/esm/util.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          byteLength: () => j,
          installTimerFunctions: () => h,
          pick: () => e
        });
        var d = c("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
        function e(a, ...b) {
          return b.reduce((b, c) => {
            if (a.hasOwnProperty(c)) {
              b[c] = a[c];
            }
            return b;
          }, {});
        }
        const f = d.globalThisShim.setTimeout;
        const g = d.globalThisShim.clearTimeout;
        function h(a, b) {
          if (b.useNativeTimers) {
            a.setTimeoutFn = f.bind(d.globalThisShim);
            a.clearTimeoutFn = g.bind(d.globalThisShim);
          } else {
            a.setTimeoutFn = d.globalThisShim.setTimeout.bind(d.globalThisShim);
            a.clearTimeoutFn = d.globalThisShim.clearTimeout.bind(d.globalThisShim);
          }
        }
        const i = 1.33;
        function j(a) {
          if (typeof a === "string") {
            return k(a);
          }
          return Math.ceil((a.byteLength || a.size) * i);
        }
        function k(a) {
          let b = 0;
          let c = 0;
          for (let d = 0, e = a.length; d < e; d++) {
            b = a.charCodeAt(d);
            if (b < 128) {
              c += 1;
            } else if (b < 2048) {
              c += 2;
            } else if (b < 55296 || b >= 57344) {
              c += 3;
            } else {
              d++;
              c += 4;
            }
          }
          return c;
        }
      },
      "./node_modules/engine.io-parser/build/esm/commons.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          ERROR_PACKET: () => f,
          PACKET_TYPES: () => d,
          PACKET_TYPES_REVERSE: () => e
        });
        const d = Object.create(null);
        d.open = "0";
        d.close = "1";
        d.ping = "2";
        d.pong = "3";
        d.message = "4";
        d.upgrade = "5";
        d.noop = "6";
        const e = Object.create(null);
        Object.keys(d).forEach(a => {
          e[d[a]] = a;
        });
        const f = {
          type: "error",
          data: "parser error"
        };
      },
      "./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          decode: () => g,
          encode: () => f
        });
        const d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        const e = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (let f = 0; f < d.length; f++) {
          e[d.charCodeAt(f)] = f;
        }
        const f = a => {
          let b = new Uint8Array(a);
          let c;
          let e = b.length;
          let f = "";
          for (c = 0; c < e; c += 3) {
            f += d[b[c] >> 2];
            f += d[(b[c] & 3) << 4 | b[c + 1] >> 4];
            f += d[(b[c + 1] & 15) << 2 | b[c + 2] >> 6];
            f += d[b[c + 2] & 63];
          }
          if (e % 3 === 2) {
            f = f.substring(0, f.length - 1) + "=";
          } else if (e % 3 === 1) {
            f = f.substring(0, f.length - 2) + "==";
          }
          return f;
        };
        const g = a => {
          let b = a.length * 0.75;
          let c = a.length;
          let d;
          let f = 0;
          let g;
          let h;
          let i;
          let j;
          if (a[a.length - 1] === "=") {
            b--;
            if (a[a.length - 2] === "=") {
              b--;
            }
          }
          const k = new ArrayBuffer(b);
          const l = new Uint8Array(k);
          for (d = 0; d < c; d += 4) {
            g = e[a.charCodeAt(d)];
            h = e[a.charCodeAt(d + 1)];
            i = e[a.charCodeAt(d + 2)];
            j = e[a.charCodeAt(d + 3)];
            l[f++] = g << 2 | h >> 4;
            l[f++] = (h & 15) << 4 | i >> 2;
            l[f++] = (i & 3) << 6 | j & 63;
          }
          return k;
        };
      },
      "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          decodePacket: () => g
        });
        var d = c("./node_modules/engine.io-parser/build/esm/commons.js");
        var e = c("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
        const f = typeof ArrayBuffer === "function";
        const g = (a, b) => {
          if (typeof a !== "string") {
            return {
              type: "message",
              data: i(a, b)
            };
          }
          const c = a.charAt(0);
          if (c === "b") {
            return {
              type: "message",
              data: h(a.substring(1), b)
            };
          }
          const e = d.PACKET_TYPES_REVERSE[c];
          if (!e) {
            return d.ERROR_PACKET;
          }
          if (a.length > 1) {
            return {
              type: d.PACKET_TYPES_REVERSE[c],
              data: a.substring(1)
            };
          } else {
            return {
              type: d.PACKET_TYPES_REVERSE[c]
            };
          }
        };
        const h = (a, b) => {
          if (f) {
            const c = (0, e.decode)(a);
            return i(c, b);
          } else {
            return {
              base64: true,
              data: a
            };
          }
        };
        const i = (a, b) => {
          switch (b) {
            case "blob":
              if (a instanceof Blob) {
                return a;
              } else {
                return new Blob([a]);
              }
            case "arraybuffer":
            default:
              if (a instanceof ArrayBuffer) {
                return a;
              } else {
                return a.buffer;
              }
          }
        };
      },
      "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          encodePacket: () => h,
          encodePacketToBinary: () => l
        });
        var d = c("./node_modules/engine.io-parser/build/esm/commons.js");
        const e = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
        const f = typeof ArrayBuffer === "function";
        const g = a => {
          if (typeof ArrayBuffer.isView === "function") {
            return ArrayBuffer.isView(a);
          } else {
            return a && a.buffer instanceof ArrayBuffer;
          }
        };
        const h = ({
          type: a,
          data: b
        }, c, h) => {
          if (e && b instanceof Blob) {
            if (c) {
              return h(b);
            } else {
              return i(b, h);
            }
          } else if (f && (b instanceof ArrayBuffer || g(b))) {
            if (c) {
              return h(b);
            } else {
              return i(new Blob([b]), h);
            }
          }
          return h(d.PACKET_TYPES[a] + (b || ""));
        };
        const i = (a, b) => {
          const c = new FileReader();
          c.onload = function () {
            const a = c.result.split(",")[1];
            b("b" + (a || ""));
          };
          return c.readAsDataURL(a);
        };
        function j(a) {
          if (a instanceof Uint8Array) {
            return a;
          } else if (a instanceof ArrayBuffer) {
            return new Uint8Array(a);
          } else {
            return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
          }
        }
        let k;
        function l(a, b) {
          if (e && a.data instanceof Blob) {
            return a.data.arrayBuffer().then(j).then(b);
          } else if (f && (a.data instanceof ArrayBuffer || g(a.data))) {
            return b(j(a.data));
          }
          h(a, false, a => {
            if (!k) {
              k = new TextEncoder();
            }
            b(k.encode(a));
          });
        }
      },
      "./node_modules/engine.io-parser/build/esm/index.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          createPacketDecoderStream: () => n,
          createPacketEncoderStream: () => j,
          decodePacket: () => e.decodePacket,
          decodePayload: () => i,
          encodePacket: () => d.encodePacket,
          encodePayload: () => h,
          protocol: () => o
        });
        var d = c("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
        var e = c("./node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
        var f = c("./node_modules/engine.io-parser/build/esm/commons.js");
        const g = String.fromCharCode(30);
        const h = (a, b) => {
          const c = a.length;
          const e = new Array(c);
          let f = 0;
          a.forEach((a, h) => {
            (0, d.encodePacket)(a, false, a => {
              e[h] = a;
              if (++f === c) {
                b(e.join(g));
              }
            });
          });
        };
        const i = (a, b) => {
          const c = a.split(g);
          const d = [];
          for (let f = 0; f < c.length; f++) {
            const a = (0, e.decodePacket)(c[f], b);
            d.push(a);
            if (a.type === "error") {
              break;
            }
          }
          return d;
        };
        function j() {
          return new TransformStream({
            transform(a, b) {
              (0, d.encodePacketToBinary)(a, c => {
                const d = c.length;
                let e;
                if (d < 126) {
                  e = new Uint8Array(1);
                  new DataView(e.buffer).setUint8(0, d);
                } else if (d < 65536) {
                  e = new Uint8Array(3);
                  const a = new DataView(e.buffer);
                  a.setUint8(0, 126);
                  a.setUint16(1, d);
                } else {
                  e = new Uint8Array(9);
                  const a = new DataView(e.buffer);
                  a.setUint8(0, 127);
                  a.setBigUint64(1, BigInt(d));
                }
                if (a.data && typeof a.data !== "string") {
                  e[0] |= 128;
                }
                b.enqueue(e);
                b.enqueue(c);
              });
            }
          });
        }
        let k;
        function l(a) {
          return a.reduce((a, b) => a + b.length, 0);
        }
        function m(a, b) {
          if (a[0].length === b) {
            return a.shift();
          }
          const c = new Uint8Array(b);
          let d = 0;
          for (let e = 0; e < b; e++) {
            c[e] = a[0][d++];
            if (d === a[0].length) {
              a.shift();
              d = 0;
            }
          }
          if (a.length && d < a[0].length) {
            a[0] = a[0].slice(d);
          }
          return c;
        }
        function n(a, b) {
          if (!k) {
            k = new TextDecoder();
          }
          const c = [];
          let d = 0;
          let g = -1;
          let h = false;
          return new TransformStream({
            transform(i, j) {
              c.push(i);
              while (true) {
                if (d === 0) {
                  if (l(c) < 1) {
                    break;
                  }
                  const a = m(c, 1);
                  h = (a[0] & 128) === 128;
                  g = a[0] & 127;
                  if (g < 126) {
                    d = 3;
                  } else if (g === 126) {
                    d = 1;
                  } else {
                    d = 2;
                  }
                } else if (d === 1) {
                  if (l(c) < 2) {
                    break;
                  }
                  const a = m(c, 2);
                  g = new DataView(a.buffer, a.byteOffset, a.length).getUint16(0);
                  d = 3;
                } else if (d === 2) {
                  if (l(c) < 8) {
                    break;
                  }
                  const a = m(c, 8);
                  const b = new DataView(a.buffer, a.byteOffset, a.length);
                  const e = b.getUint32(0);
                  if (e > Math.pow(2, 21) - 1) {
                    j.enqueue(f.ERROR_PACKET);
                    break;
                  }
                  g = e * Math.pow(2, 32) + b.getUint32(4);
                  d = 3;
                } else {
                  if (l(c) < g) {
                    break;
                  }
                  const a = m(c, g);
                  j.enqueue((0, e.decodePacket)(h ? a : k.decode(a), b));
                  d = 0;
                }
                if (g === 0 || g > a) {
                  j.enqueue(f.ERROR_PACKET);
                  break;
                }
              }
            }
          });
        }
        const o = 4;
      },
      "./node_modules/socket.io-client/build/esm/contrib/backo2.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Backoff: () => d
        });
        function d(a) {
          a = a || {};
          this.ms = a.min || 100;
          this.max = a.max || 10000;
          this.factor = a.factor || 2;
          this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0;
          this.attempts = 0;
        }
        d.prototype.duration = function () {
          var a = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var b = Math.random();
            var c = Math.floor(b * this.jitter * a);
            a = (Math.floor(b * 10) & 1) == 0 ? a - c : a + c;
          }
          return Math.min(a, this.max) | 0;
        };
        d.prototype.reset = function () {
          this.attempts = 0;
        };
        d.prototype.setMin = function (a) {
          this.ms = a;
        };
        d.prototype.setMax = function (a) {
          this.max = a;
        };
        d.prototype.setJitter = function (a) {
          this.jitter = a;
        };
      },
      "./node_modules/socket.io-client/build/esm/index.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Manager: () => e.Manager,
          Socket: () => f.Socket,
          connect: () => i,
          default: () => i,
          io: () => i,
          protocol: () => g.protocol
        });
        var d = c("./node_modules/socket.io-client/build/esm/url.js");
        var e = c("./node_modules/socket.io-client/build/esm/manager.js");
        var f = c("./node_modules/socket.io-client/build/esm/socket.js");
        var g = c("./node_modules/socket.io-parser/build/esm/index.js");
        const h = {};
        function i(a, b) {
          if (typeof a === "object") {
            b = a;
            a = undefined;
          }
          b = b || {};
          const c = (0, d.url)(a, b.path || "/socket.io");
          const f = c.source;
          const g = c.id;
          const i = c.path;
          const j = h[g] && i in h[g].nsps;
          const k = b.forceNew || b["force new connection"] || b.multiplex === false || j;
          let l;
          if (k) {
            l = new e.Manager(f, b);
          } else {
            if (!h[g]) {
              h[g] = new e.Manager(f, b);
            }
            l = h[g];
          }
          if (c.query && !b.query) {
            b.query = c.queryKey;
          }
          return l.socket(c.path, b);
        }
        Object.assign(i, {
          Manager: e.Manager,
          Socket: f.Socket,
          io: i,
          connect: i
        });
      },
      "./node_modules/socket.io-client/build/esm/manager.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Manager: () => j
        });
        var d = c("./node_modules/engine.io-client/build/esm/index.js");
        var e = c("./node_modules/socket.io-client/build/esm/socket.js");
        var f = c("./node_modules/socket.io-parser/build/esm/index.js");
        var g = c("./node_modules/socket.io-client/build/esm/on.js");
        var h = c("./node_modules/socket.io-client/build/esm/contrib/backo2.js");
        var i = c("./node_modules/@socket.io/component-emitter/index.mjs");
        class j extends i.Emitter {
          constructor(a, b) {
            super();
            this.nsps = {};
            this.subs = [];
            if (a && typeof a === "object") {
              b = a;
              a = undefined;
            }
            b = b || {};
            b.path = b.path || "/socket.io";
            this.opts = b;
            (0, d.installTimerFunctions)(this, b);
            this.reconnection(b.reconnection !== false);
            this.reconnectionAttempts(b.reconnectionAttempts || Infinity);
            this.reconnectionDelay(b.reconnectionDelay || 1000);
            this.reconnectionDelayMax(b.reconnectionDelayMax || 5000);
            this.randomizationFactor(b.randomizationFactor ?? 0.5);
            this.backoff = new h.Backoff({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor()
            });
            this.timeout(b.timeout == null ? 20000 : b.timeout);
            this._readyState = "closed";
            this.uri = a;
            const c = b.parser || f;
            this.encoder = new c.Encoder();
            this.decoder = new c.Decoder();
            this._autoConnect = b.autoConnect !== false;
            if (this._autoConnect) {
              this.open();
            }
          }
          reconnection(a) {
            if (!arguments.length) {
              return this._reconnection;
            }
            this._reconnection = !!a;
            return this;
          }
          reconnectionAttempts(a) {
            if (a === undefined) {
              return this._reconnectionAttempts;
            }
            this._reconnectionAttempts = a;
            return this;
          }
          reconnectionDelay(a) {
            var b;
            if (a === undefined) {
              return this._reconnectionDelay;
            }
            this._reconnectionDelay = a;
            if ((b = this.backoff) === null || b === undefined) {
              undefined;
            } else {
              b.setMin(a);
            }
            return this;
          }
          randomizationFactor(a) {
            var b;
            if (a === undefined) {
              return this._randomizationFactor;
            }
            this._randomizationFactor = a;
            if ((b = this.backoff) === null || b === undefined) {
              undefined;
            } else {
              b.setJitter(a);
            }
            return this;
          }
          reconnectionDelayMax(a) {
            var b;
            if (a === undefined) {
              return this._reconnectionDelayMax;
            }
            this._reconnectionDelayMax = a;
            if ((b = this.backoff) === null || b === undefined) {
              undefined;
            } else {
              b.setMax(a);
            }
            return this;
          }
          timeout(a) {
            if (!arguments.length) {
              return this._timeout;
            }
            this._timeout = a;
            return this;
          }
          maybeReconnectOnOpen() {
            if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
              this.reconnect();
            }
          }
          open(a) {
            if (~this._readyState.indexOf("open")) {
              return this;
            }
            this.engine = new d.Socket(this.uri, this.opts);
            const b = this.engine;
            const c = this;
            this._readyState = "opening";
            this.skipReconnect = false;
            const e = (0, g.on)(b, "open", function () {
              c.onopen();
              if (a) {
                a();
              }
            });
            const f = b => {
              this.cleanup();
              this._readyState = "closed";
              this.emitReserved("error", b);
              if (a) {
                a(b);
              } else {
                this.maybeReconnectOnOpen();
              }
            };
            const h = (0, g.on)(b, "error", f);
            if (this._timeout !== false) {
              const a = this._timeout;
              const c = this.setTimeoutFn(() => {
                e();
                f(new Error("timeout"));
                b.close();
              }, a);
              if (this.opts.autoUnref) {
                c.unref();
              }
              this.subs.push(() => {
                this.clearTimeoutFn(c);
              });
            }
            this.subs.push(e);
            this.subs.push(h);
            return this;
          }
          connect(a) {
            return this.open(a);
          }
          onopen() {
            this.cleanup();
            this._readyState = "open";
            this.emitReserved("open");
            const a = this.engine;
            this.subs.push((0, g.on)(a, "ping", this.onping.bind(this)), (0, g.on)(a, "data", this.ondata.bind(this)), (0, g.on)(a, "error", this.onerror.bind(this)), (0, g.on)(a, "close", this.onclose.bind(this)), (0, g.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
          }
          onping() {
            this.emitReserved("ping");
          }
          ondata(a) {
            try {
              this.decoder.add(a);
            } catch (a) {
              this.onclose("parse error", a);
            }
          }
          ondecoded(a) {
            (0, d.nextTick)(() => {
              this.emitReserved("packet", a);
            }, this.setTimeoutFn);
          }
          onerror(a) {
            this.emitReserved("error", a);
          }
          socket(a, b) {
            let c = this.nsps[a];
            if (!c) {
              c = new e.Socket(this, a, b);
              this.nsps[a] = c;
            } else if (this._autoConnect && !c.active) {
              c.connect();
            }
            return c;
          }
          _destroy(a) {
            const b = Object.keys(this.nsps);
            for (const c of b) {
              const a = this.nsps[c];
              if (a.active) {
                return;
              }
            }
            this._close();
          }
          _packet(a) {
            const b = this.encoder.encode(a);
            for (let c = 0; c < b.length; c++) {
              this.engine.write(b[c], a.options);
            }
          }
          cleanup() {
            this.subs.forEach(a => a());
            this.subs.length = 0;
            this.decoder.destroy();
          }
          _close() {
            this.skipReconnect = true;
            this._reconnecting = false;
            this.onclose("forced close");
            if (this.engine) {
              this.engine.close();
            }
          }
          disconnect() {
            return this._close();
          }
          onclose(a, b) {
            this.cleanup();
            this.backoff.reset();
            this._readyState = "closed";
            this.emitReserved("close", a, b);
            if (this._reconnection && !this.skipReconnect) {
              this.reconnect();
            }
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect) {
              return this;
            }
            const a = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) {
              this.backoff.reset();
              this.emitReserved("reconnect_failed");
              this._reconnecting = false;
            } else {
              const b = this.backoff.duration();
              this._reconnecting = true;
              const c = this.setTimeoutFn(() => {
                if (a.skipReconnect) {
                  return;
                }
                this.emitReserved("reconnect_attempt", a.backoff.attempts);
                if (a.skipReconnect) {
                  return;
                }
                a.open(b => {
                  if (b) {
                    a._reconnecting = false;
                    a.reconnect();
                    this.emitReserved("reconnect_error", b);
                  } else {
                    a.onreconnect();
                  }
                });
              }, b);
              if (this.opts.autoUnref) {
                c.unref();
              }
              this.subs.push(() => {
                this.clearTimeoutFn(c);
              });
            }
          }
          onreconnect() {
            const a = this.backoff.attempts;
            this._reconnecting = false;
            this.backoff.reset();
            this.emitReserved("reconnect", a);
          }
        }
      },
      "./node_modules/socket.io-client/build/esm/on.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          on: () => d
        });
        function d(a, b, c) {
          a.on(b, c);
          return function d() {
            a.off(b, c);
          };
        }
      },
      "./node_modules/socket.io-client/build/esm/socket.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Socket: () => h
        });
        var d = c("./node_modules/socket.io-parser/build/esm/index.js");
        var e = c("./node_modules/socket.io-client/build/esm/on.js");
        var f = c("./node_modules/@socket.io/component-emitter/index.mjs");
        const g = Object.freeze({
          connect: 1,
          connect_error: 1,
          disconnect: 1,
          disconnecting: 1,
          newListener: 1,
          removeListener: 1
        });
        class h extends f.Emitter {
          constructor(a, b, c) {
            super();
            this.connected = false;
            this.recovered = false;
            this.receiveBuffer = [];
            this.sendBuffer = [];
            this._queue = [];
            this._queueSeq = 0;
            this.ids = 0;
            this.acks = {};
            this.flags = {};
            this.io = a;
            this.nsp = b;
            if (c && c.auth) {
              this.auth = c.auth;
            }
            this._opts = Object.assign({}, c);
            if (this.io._autoConnect) {
              this.open();
            }
          }
          get disconnected() {
            return !this.connected;
          }
          subEvents() {
            if (this.subs) {
              return;
            }
            const a = this.io;
            this.subs = [(0, e.on)(a, "open", this.onopen.bind(this)), (0, e.on)(a, "packet", this.onpacket.bind(this)), (0, e.on)(a, "error", this.onerror.bind(this)), (0, e.on)(a, "close", this.onclose.bind(this))];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            if (this.connected) {
              return this;
            }
            this.subEvents();
            if (!this.io._reconnecting) {
              this.io.open();
            }
            if (this.io._readyState === "open") {
              this.onopen();
            }
            return this;
          }
          open() {
            return this.connect();
          }
          send(...a) {
            a.unshift("message");
            this.emit.apply(this, a);
            return this;
          }
          emit(a, ...b) {
            if (g.hasOwnProperty(a)) {
              throw new Error("\"" + a.toString() + "\" is a reserved event name");
            }
            b.unshift(a);
            if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
              this._addToQueue(b);
              return this;
            }
            const c = {
              type: d.PacketType.EVENT,
              data: b
            };
            c.options = {};
            c.options.compress = this.flags.compress !== false;
            if (typeof b[b.length - 1] === "function") {
              const a = this.ids++;
              const d = b.pop();
              this._registerAckCallback(a, d);
              c.id = a;
            }
            const e = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            const f = this.flags.volatile && (!e || !this.connected);
            if (f) {} else if (this.connected) {
              this.notifyOutgoingListeners(c);
              this.packet(c);
            } else {
              this.sendBuffer.push(c);
            }
            this.flags = {};
            return this;
          }
          _registerAckCallback(a, b) {
            const c = this.flags.timeout ?? this._opts.ackTimeout;
            if (c === undefined) {
              this.acks[a] = b;
              return;
            }
            const d = this.io.setTimeoutFn(() => {
              delete this.acks[a];
              for (let b = 0; b < this.sendBuffer.length; b++) {
                if (this.sendBuffer[b].id === a) {
                  this.sendBuffer.splice(b, 1);
                }
              }
              b.call(this, new Error("operation has timed out"));
            }, c);
            this.acks[a] = (...a) => {
              this.io.clearTimeoutFn(d);
              b.apply(this, [null, ...a]);
            };
          }
          emitWithAck(a, ...b) {
            const c = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
            return new Promise((d, e) => {
              b.push((a, b) => {
                if (c) {
                  if (a) {
                    return e(a);
                  } else {
                    return d(b);
                  }
                } else {
                  return d(a);
                }
              });
              this.emit(a, ...b);
            });
          }
          _addToQueue(a) {
            let b;
            if (typeof a[a.length - 1] === "function") {
              b = a.pop();
            }
            const c = {
              id: this._queueSeq++,
              tryCount: 0,
              pending: false,
              args: a,
              flags: Object.assign({
                fromQueue: true
              }, this.flags)
            };
            a.push((a, ...d) => {
              if (c !== this._queue[0]) {
                return;
              }
              const e = a !== null;
              if (e) {
                if (c.tryCount > this._opts.retries) {
                  this._queue.shift();
                  if (b) {
                    b(a);
                  }
                }
              } else {
                this._queue.shift();
                if (b) {
                  b(null, ...d);
                }
              }
              c.pending = false;
              return this._drainQueue();
            });
            this._queue.push(c);
            this._drainQueue();
          }
          _drainQueue(a = false) {
            if (!this.connected || this._queue.length === 0) {
              return;
            }
            const b = this._queue[0];
            if (b.pending && !a) {
              return;
            }
            b.pending = true;
            b.tryCount++;
            this.flags = b.flags;
            this.emit.apply(this, b.args);
          }
          packet(a) {
            a.nsp = this.nsp;
            this.io._packet(a);
          }
          onopen() {
            if (typeof this.auth == "function") {
              this.auth(a => {
                this._sendConnectPacket(a);
              });
            } else {
              this._sendConnectPacket(this.auth);
            }
          }
          _sendConnectPacket(a) {
            this.packet({
              type: d.PacketType.CONNECT,
              data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
              }, a) : a
            });
          }
          onerror(a) {
            if (!this.connected) {
              this.emitReserved("connect_error", a);
            }
          }
          onclose(a, b) {
            this.connected = false;
            delete this.id;
            this.emitReserved("disconnect", a, b);
          }
          onpacket(a) {
            const b = a.nsp === this.nsp;
            if (!b) {
              return;
            }
            switch (a.type) {
              case d.PacketType.CONNECT:
                if (a.data && a.data.sid) {
                  this.onconnect(a.data.sid, a.data.pid);
                } else {
                  this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
              case d.PacketType.EVENT:
              case d.PacketType.BINARY_EVENT:
                this.onevent(a);
                break;
              case d.PacketType.ACK:
              case d.PacketType.BINARY_ACK:
                this.onack(a);
                break;
              case d.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
              case d.PacketType.CONNECT_ERROR:
                this.destroy();
                const b = new Error(a.data.message);
                b.data = a.data.data;
                this.emitReserved("connect_error", b);
                break;
            }
          }
          onevent(a) {
            const b = a.data || [];
            if (a.id != null) {
              b.push(this.ack(a.id));
            }
            if (this.connected) {
              this.emitEvent(b);
            } else {
              this.receiveBuffer.push(Object.freeze(b));
            }
          }
          emitEvent(a) {
            if (this._anyListeners && this._anyListeners.length) {
              const b = this._anyListeners.slice();
              for (const c of b) {
                c.apply(this, a);
              }
            }
            super.emit.apply(this, a);
            if (this._pid && a.length && typeof a[a.length - 1] === "string") {
              this._lastOffset = a[a.length - 1];
            }
          }
          ack(a) {
            const b = this;
            let c = false;
            return function (...e) {
              if (c) {
                return;
              }
              c = true;
              b.packet({
                type: d.PacketType.ACK,
                id: a,
                data: e
              });
            };
          }
          onack(a) {
            const b = this.acks[a.id];
            if (typeof b === "function") {
              b.apply(this, a.data);
              delete this.acks[a.id];
            } else {}
          }
          onconnect(a, b) {
            this.id = a;
            this.recovered = b && this._pid === b;
            this._pid = b;
            this.connected = true;
            this.emitBuffered();
            this.emitReserved("connect");
            this._drainQueue(true);
          }
          emitBuffered() {
            this.receiveBuffer.forEach(a => this.emitEvent(a));
            this.receiveBuffer = [];
            this.sendBuffer.forEach(a => {
              this.notifyOutgoingListeners(a);
              this.packet(a);
            });
            this.sendBuffer = [];
          }
          ondisconnect() {
            this.destroy();
            this.onclose("io server disconnect");
          }
          destroy() {
            if (this.subs) {
              this.subs.forEach(a => a());
              this.subs = undefined;
            }
            this.io._destroy(this);
          }
          disconnect() {
            if (this.connected) {
              this.packet({
                type: d.PacketType.DISCONNECT
              });
            }
            this.destroy();
            if (this.connected) {
              this.onclose("io client disconnect");
            }
            return this;
          }
          close() {
            return this.disconnect();
          }
          compress(a) {
            this.flags.compress = a;
            return this;
          }
          get volatile() {
            this.flags.volatile = true;
            return this;
          }
          timeout(a) {
            this.flags.timeout = a;
            return this;
          }
          onAny(a) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.push(a);
            return this;
          }
          prependAny(a) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.unshift(a);
            return this;
          }
          offAny(a) {
            if (!this._anyListeners) {
              return this;
            }
            if (a) {
              const b = this._anyListeners;
              for (let c = 0; c < b.length; c++) {
                if (a === b[c]) {
                  b.splice(c, 1);
                  return this;
                }
              }
            } else {
              this._anyListeners = [];
            }
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
          onAnyOutgoing(a) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.push(a);
            return this;
          }
          prependAnyOutgoing(a) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.unshift(a);
            return this;
          }
          offAnyOutgoing(a) {
            if (!this._anyOutgoingListeners) {
              return this;
            }
            if (a) {
              const b = this._anyOutgoingListeners;
              for (let c = 0; c < b.length; c++) {
                if (a === b[c]) {
                  b.splice(c, 1);
                  return this;
                }
              }
            } else {
              this._anyOutgoingListeners = [];
            }
            return this;
          }
          listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
          }
          notifyOutgoingListeners(a) {
            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
              const b = this._anyOutgoingListeners.slice();
              for (const c of b) {
                c.apply(this, a.data);
              }
            }
          }
        }
      },
      "./node_modules/socket.io-client/build/esm/url.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          url: () => e
        });
        var d = c("./node_modules/engine.io-client/build/esm/index.js");
        function e(a, b = "", c) {
          let e = a;
          c = c || typeof location !== "undefined" && location;
          if (a == null) {
            a = c.protocol + "//" + c.host;
          }
          if (typeof a === "string") {
            if (a.charAt(0) === "/") {
              if (a.charAt(1) === "/") {
                a = c.protocol + a;
              } else {
                a = c.host + a;
              }
            }
            if (!/^(https?|wss?):\/\//.test(a)) {
              if (typeof c !== "undefined") {
                a = c.protocol + "//" + a;
              } else {
                a = "https://" + a;
              }
            }
            e = (0, d.parse)(a);
          }
          if (!e.port) {
            if (/^(http|ws)$/.test(e.protocol)) {
              e.port = "80";
            } else if (/^(http|ws)s$/.test(e.protocol)) {
              e.port = "443";
            }
          }
          e.path = e.path || "/";
          const f = e.host.indexOf(":") !== -1;
          const g = f ? "[" + e.host + "]" : e.host;
          e.id = e.protocol + "://" + g + ":" + e.port + b;
          e.href = e.protocol + "://" + g + (c && c.port === e.port ? "" : ":" + e.port);
          return e;
        }
      },
      "./node_modules/socket.io-parser/build/esm/binary.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          deconstructPacket: () => e,
          reconstructPacket: () => g
        });
        var d = c("./node_modules/socket.io-parser/build/esm/is-binary.js");
        function e(a) {
          const b = [];
          const c = a.data;
          const d = a;
          d.data = f(c, b);
          d.attachments = b.length;
          return {
            packet: d,
            buffers: b
          };
        }
        function f(a, b) {
          if (!a) {
            return a;
          }
          if ((0, d.isBinary)(a)) {
            const c = {
              _placeholder: true,
              num: b.length
            };
            b.push(a);
            return c;
          } else if (Array.isArray(a)) {
            const c = new Array(a.length);
            for (let d = 0; d < a.length; d++) {
              c[d] = f(a[d], b);
            }
            return c;
          } else if (typeof a === "object" && !(a instanceof Date)) {
            const c = {};
            for (const d in a) {
              if (Object.prototype.hasOwnProperty.call(a, d)) {
                c[d] = f(a[d], b);
              }
            }
            return c;
          }
          return a;
        }
        function g(a, b) {
          a.data = h(a.data, b);
          delete a.attachments;
          return a;
        }
        function h(a, b) {
          if (!a) {
            return a;
          }
          if (a && a._placeholder === true) {
            const c = typeof a.num === "number" && a.num >= 0 && a.num < b.length;
            if (c) {
              return b[a.num];
            } else {
              throw new Error("illegal attachments");
            }
          } else if (Array.isArray(a)) {
            for (let c = 0; c < a.length; c++) {
              a[c] = h(a[c], b);
            }
          } else if (typeof a === "object") {
            for (const c in a) {
              if (Object.prototype.hasOwnProperty.call(a, c)) {
                a[c] = h(a[c], b);
              }
            }
          }
          return a;
        }
      },
      "./node_modules/socket.io-parser/build/esm/index.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          Decoder: () => l,
          Encoder: () => j,
          PacketType: () => i,
          protocol: () => h
        });
        var d = c("./node_modules/@socket.io/component-emitter/index.mjs");
        var e = c("./node_modules/socket.io-parser/build/esm/binary.js");
        var f = c("./node_modules/socket.io-parser/build/esm/is-binary.js");
        const g = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
        const h = 5;
        var i;
        (function (a) {
          a[a.CONNECT = 0] = "CONNECT";
          a[a.DISCONNECT = 1] = "DISCONNECT";
          a[a.EVENT = 2] = "EVENT";
          a[a.ACK = 3] = "ACK";
          a[a.CONNECT_ERROR = 4] = "CONNECT_ERROR";
          a[a.BINARY_EVENT = 5] = "BINARY_EVENT";
          a[a.BINARY_ACK = 6] = "BINARY_ACK";
        })(i ||= {});
        class j {
          constructor(a) {
            this.replacer = a;
          }
          encode(a) {
            if (a.type === i.EVENT || a.type === i.ACK) {
              if ((0, f.hasBinary)(a)) {
                return this.encodeAsBinary({
                  type: a.type === i.EVENT ? i.BINARY_EVENT : i.BINARY_ACK,
                  nsp: a.nsp,
                  data: a.data,
                  id: a.id
                });
              }
            }
            return [this.encodeAsString(a)];
          }
          encodeAsString(a) {
            let b = "" + a.type;
            if (a.type === i.BINARY_EVENT || a.type === i.BINARY_ACK) {
              b += a.attachments + "-";
            }
            if (a.nsp && a.nsp !== "/") {
              b += a.nsp + ",";
            }
            if (a.id != null) {
              b += a.id;
            }
            if (a.data != null) {
              b += JSON.stringify(a.data, this.replacer);
            }
            return b;
          }
          encodeAsBinary(a) {
            const b = (0, e.deconstructPacket)(a);
            const c = this.encodeAsString(b.packet);
            const d = b.buffers;
            d.unshift(c);
            return d;
          }
        }
        function k(a) {
          return Object.prototype.toString.call(a) === "[object Object]";
        }
        class l extends d.Emitter {
          constructor(a) {
            super();
            this.reviver = a;
          }
          add(a) {
            let b;
            if (typeof a === "string") {
              if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
              }
              b = this.decodeString(a);
              const c = b.type === i.BINARY_EVENT;
              if (c || b.type === i.BINARY_ACK) {
                b.type = c ? i.EVENT : i.ACK;
                this.reconstructor = new m(b);
                if (b.attachments === 0) {
                  super.emitReserved("decoded", b);
                }
              } else {
                super.emitReserved("decoded", b);
              }
            } else if ((0, f.isBinary)(a) || a.base64) {
              if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
              } else {
                b = this.reconstructor.takeBinaryData(a);
                if (b) {
                  this.reconstructor = null;
                  super.emitReserved("decoded", b);
                }
              }
            } else {
              throw new Error("Unknown type: " + a);
            }
          }
          decodeString(a) {
            let b = 0;
            const c = {
              type: Number(a.charAt(0))
            };
            if (i[c.type] === undefined) {
              throw new Error("unknown packet type " + c.type);
            }
            if (c.type === i.BINARY_EVENT || c.type === i.BINARY_ACK) {
              const d = b + 1;
              while (a.charAt(++b) !== "-" && b != a.length) {}
              const e = a.substring(d, b);
              if (e != Number(e) || a.charAt(b) !== "-") {
                throw new Error("Illegal attachments");
              }
              c.attachments = Number(e);
            }
            if (a.charAt(b + 1) === "/") {
              const d = b + 1;
              while (++b) {
                const c = a.charAt(b);
                if (c === ",") {
                  break;
                }
                if (b === a.length) {
                  break;
                }
              }
              c.nsp = a.substring(d, b);
            } else {
              c.nsp = "/";
            }
            const d = a.charAt(b + 1);
            if (d !== "" && Number(d) == d) {
              const d = b + 1;
              while (++b) {
                const c = a.charAt(b);
                if (c == null || Number(c) != c) {
                  --b;
                  break;
                }
                if (b === a.length) {
                  break;
                }
              }
              c.id = Number(a.substring(d, b + 1));
            }
            if (a.charAt(++b)) {
              const d = this.tryParse(a.substr(b));
              if (l.isPayloadValid(c.type, d)) {
                c.data = d;
              } else {
                throw new Error("invalid payload");
              }
            }
            return c;
          }
          tryParse(a) {
            try {
              return JSON.parse(a, this.reviver);
            } catch (a) {
              return false;
            }
          }
          static isPayloadValid(a, b) {
            switch (a) {
              case i.CONNECT:
                return k(b);
              case i.DISCONNECT:
                return b === undefined;
              case i.CONNECT_ERROR:
                return typeof b === "string" || k(b);
              case i.EVENT:
              case i.BINARY_EVENT:
                return Array.isArray(b) && (typeof b[0] === "number" || typeof b[0] === "string" && g.indexOf(b[0]) === -1);
              case i.ACK:
              case i.BINARY_ACK:
                return Array.isArray(b);
            }
          }
          destroy() {
            if (this.reconstructor) {
              this.reconstructor.finishedReconstruction();
              this.reconstructor = null;
            }
          }
        }
        class m {
          constructor(a) {
            this.packet = a;
            this.buffers = [];
            this.reconPack = a;
          }
          takeBinaryData(a) {
            this.buffers.push(a);
            if (this.buffers.length === this.reconPack.attachments) {
              const a = (0, e.reconstructPacket)(this.reconPack, this.buffers);
              this.finishedReconstruction();
              return a;
            }
            return null;
          }
          finishedReconstruction() {
            this.reconPack = null;
            this.buffers = [];
          }
        }
      },
      "./node_modules/socket.io-parser/build/esm/is-binary.js": (a, b, c) => {
        'use strict';
  
        c.r(b);
        c.d(b, {
          hasBinary: () => j,
          isBinary: () => i
        });
        const d = typeof ArrayBuffer === "function";
        const e = a => {
          if (typeof ArrayBuffer.isView === "function") {
            return ArrayBuffer.isView(a);
          } else {
            return a.buffer instanceof ArrayBuffer;
          }
        };
        const f = Object.prototype.toString;
        const g = typeof Blob === "function" || typeof Blob !== "undefined" && f.call(Blob) === "[object BlobConstructor]";
        const h = typeof File === "function" || typeof File !== "undefined" && f.call(File) === "[object FileConstructor]";
        function i(a) {
          return d && (a instanceof ArrayBuffer || e(a)) || g && a instanceof Blob || h && a instanceof File;
        }
        function j(a, b) {
          if (!a || typeof a !== "object") {
            return false;
          }
          if (Array.isArray(a)) {
            for (let b = 0, c = a.length; b < c; b++) {
              if (j(a[b])) {
                return true;
              }
            }
            return false;
          }
          if (i(a)) {
            return true;
          }
          if (a.toJSON && typeof a.toJSON === "function" && arguments.length === 1) {
            return j(a.toJSON(), true);
          }
          for (const c in a) {
            if (Object.prototype.hasOwnProperty.call(a, c) && j(a[c])) {
              return true;
            }
          }
          return false;
        }
      }
    };
    var b = {};
    function c(d) {
      var e = b[d];
      if (e !== undefined) {
        return e.exports;
      }
      var f = b[d] = {
        id: d,
        loaded: false,
        exports: {}
      };
      a[d](f, f.exports, c);
      f.loaded = true;
      return f.exports;
    }
    (() => {
      c.amdO = {};
    })();
    (() => {
      c.n = a => {
        var b = a && a.__esModule ? () => a.default : () => a;
        c.d(b, {
          a: b
        });
        return b;
      };
    })();
    (() => {
      c.d = (a, b) => {
        for (var d in b) {
          if (c.o(b, d) && !c.o(a, d)) {
            Object.defineProperty(a, d, {
              enumerable: true,
              get: b[d]
            });
          }
        }
      };
    })();
    (() => {
      c.g = function () {
        if (typeof globalThis === "object") {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (a) {
          if (typeof window === "object") {
            return window;
          }
        }
      }();
    })();
    (() => {
      c.hmd = a => {
        a = Object.create(a);
        if (!a.children) {
          a.children = [];
        }
        Object.defineProperty(a, "exports", {
          enumerable: true,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + a.id);
          }
        });
        return a;
      };
    })();
    (() => {
      c.o = (a, b) => Object.prototype.hasOwnProperty.call(a, b);
    })();
    (() => {
      c.r = a => {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(a, "__esModule", {
          value: true
        });
      };
    })();
    var d = c("./src/temp.js");
  })();