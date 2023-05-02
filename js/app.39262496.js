(function (e)){
    function t (t) {
        for var n, s, l = t[0], r = t[1], c = t[2], A = 0, h = []; A < l.length; A++
            s = l[A],
            Object.prototype.hasOwnProperty.call(a, s) && a[s] && h.push(a[s][0]),
            a[s] = 0;
        for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        d && d(t);
        while (h.length)
            h.shift()();
        return o.push.apply(o, c || []),
        i()
    }
    function i() {
        for (var e, t = 0; t < o.length; t++) {
            for (var i = o[t], n = !0, s = 1; s < i.length; s++) {
                var r = i[s];
                0 !== a[r] && (n = !1)
            }
            n && (o.splice(t--, 1),
            e = l(l.s = i[0]))
        }
        return e
    }
    var n = {}
      , a = {
        app: 0
    }
      , o = [];
    function s(e) {
        return l.p + "js/" + ({}[e] || e) + "." + {
            "chunk-2d0dea77": "9e176534"
        }[e] + ".js"
    }
    function l(t) {
        if (n[t])
            return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, l),
        i.l = !0,
        i.exports
    }
    l.e = function(e) {
        var t = []
          , i = a[e];
        if (0 !== i)
            if (i)
                t.push(i[2]);
            else {
                var n = new Promise((function(t, n) {
                    i = a[e] = [t, n]
                }
                ));
                t.push(i[2] = n);
                var o, r = document.createElement("script");
                r.charset = "utf-8",
                r.timeout = 120,
                l.nc && r.setAttribute("nonce", l.nc),
                r.src = s(e);
                var c = new Error;
                o = function(t) {
                    r.onerror = r.onload = null,
                    clearTimeout(A);
                    var i = a[e];
                    if (0 !== i) {
                        if (i) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")",
                            c.name = "ChunkLoadError",
                            c.type = n,
                            c.request = o,
                            i[1](c)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var A = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: r
                    })
                }
                ), 12e4);
                r.onerror = r.onload = o,
                document.head.appendChild(r)
            }
        return Promise.all(t)
    }
    ,
    l.m = e,
    l.c = n,
    l.d = function(e, t, i) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (l.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                l.d(i, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return i
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "/",
    l.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var A = 0; A < r.length; A++)
        t(r[A]);
    var d = c;
    o.push([0, "chunk-vendors"]),
    i()
}
)({
    0: function(e, t, i) {
        e.exports = i("56d7")
    },
    "08d9": function(e, t, i) {
        "use strict";
        function n(e) {
            const i = (n=Date.now())=>{
                t || (t = n),
                e(n - t) || window.requestAnimationFrame(()=>i())
            }
            ;
            i()
        }
        i.r(t),
        i.d(t, "default", (function() {
            return n
        }
        ))
    },
    "090e": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "0a98": function(e, t, i) {
        "use strict";
        i("d6d1")
    },
    "0d85": function(e, t, i) {},
    "0efe": function(e, t, i) {},
    "127e": function(e, t, i) {
        "use strict";
        i("cbb5")
    },
    "15be": function(e, t, i) {
        "use strict";
        i("423c")
    },
    "1ef3": function(e, t, i) {
        "use strict";
        i("c252")
    },
    "203a": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "239b": function(e, t, i) {
        e.exports = i.p + "img/biometric.2602816a.png"
    },
    "25bc": function(e, t, i) {},
    "2c18": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAlCAQAAAADkbqNAAAB00lEQVQ4y5WU4XGjMBBG3zApgA6sDqx0IHeQVBA68HWAUsGZCpyrgFwF0EGUCuAqMKlg74cWIRwu8YlhRqC3n1ar3YXt8cB/jArB3Y63CK9bC3dUwMvVXwvsNxwsCwxn6ht2rGkxBQD+W4MaDxDxCc+PbHHUdzm6j5OIN0BNmZanT9rwvOA9DWWm/6HvrG14jrsV+ssDx5X64sxxiV2RgJ6SXYbPDhksv2fjImm8A4eNmFggzB8LHiAddlypb+KTLpGZzfi0rZ7js8keGLbV9xm+y+Z/tvBppWiTM9n9FqurL9XAAUZdKrfxI0a9d+qE1T0sT9e45aS5A0968Adg5BfwklzDI3QMSKrPC4JFuCTXhI4WwUc8PmWq0zPQIZp0ZSIUP3FC+AnAgOgJRONdI7T4Ba8oGRAGOtUGeENouSAMGCoEv2TkgR6DAyrOGDpsLGd6Dp8zcuTAI9AzUjHg6AnA4wKvrylGveGeoOZNlkfaZyLm0uUbLAHLK44dsM/WyAP5/ePvCFkPMzgCAYulZ8Rh6LOcCdeFJnTMwY2htDmwPmog4FLvdVjGtWJxVciNNiGA89yMvhodojcpS9H9exgGjcOwjvnXBm+3wTFl21XzSOMvin699Ld1gP8AAAAASUVORK5CYII="
    },
    "2e50": function(e, t, i) {},
    3963: function(e, t, i) {},
    "3e4e": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "40fe": function(e, t, i) {
        "use strict";
        i("980c")
    },
    "423c": function(e, t, i) {},
    4588: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAAMZlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAAVAAAAZodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciBQcm8gMi4wLjMAAAAEkAQAAgAAABQAAACyoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAooAMABAAAAAEAAAAkAAAAADIwMjE6MDg6MTEgMjE6NTA6MTAAvSsVmwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjM2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAyMS0wOC0xMVQyMTo1MDoxMlo8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIxLTA4LTExVDIxOjUwOjEwWjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciBQcm8gMi4wLjM8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CvmA1UQAAAMiSURBVFgJ7Zi/axRBFMd315xFfhshjZH4ozAhF7lYCQqCYBERQbDQThREFISIsYgELEKIhZ2NtoKFaCAENMsVV6l/wRV2ChbBU0gsbCKO783s7puZHW9/zW4ah5u9mdnZ73z2zZuZx7pOmNwacxz4lZJckN6BS/bUQ48g3x+q2iy5Xm41AuRwMmB+UUEjabH8WgQIqjgHYpJBsMBbc0AuJEEK6sxXBVB5mv3O5TOk4VlxaLI9+nGkTs1RU9ZCwdcLh7NAEkqV8/8fkNu1y3Tfvf/wUjrbu9yp0Q0h95A7pns63kvWc816E9MzXxy4t7i8fCouoLfIglYAEQpfGrIB8Fi98V0YQtz3fb9PR1Lr1gHh6EQwnvEYpcQYc/uGRgJ4nDGPHRg/skM9TCXbgKYxpLbXa2vHBTzf3TjkydNnvkldtGLFgDj63IOFZ3BigZUBkmePzc0vvNDIguouAOLI52bPf4oAA399s75+Ig65S4AIMnZwXFiQ7yAeQ/+EpO3RWQExfowWQbgYcv7z1R76olg0k/WZzwhPWygCRvEgxhAJwQLCRf1RqkgSUY/rgiMyXPDCeNdv3V7RzFhkkOLPCjjS2d7eOko161OMLpDSDQxTPDHV0LacrID0aoVLU/WGtEgcNjA4zDY2Poxowh4LQkJwAvCvitLlK1clOHHsPXn6/IJh+OoBHy09fqls1DDVN27eeWWAwyagF0F1JRZ81/p4KDrq+Cmyh01ON34a4TqdzgB/E5uAygJRgwWE6B/eD4ZAo4jcO7iPtdvtvUbArz9+jdkHRD8OAHDPlFKr1ervxWgGFyZmr8ZWV/1RqQsVYe9xNze3DquAKFwwJewKzWZzSEDW2L35xWtdR5MtKFZy+YAI5PvvR8/OXnzbFQ5vyj5YJWAimNJBmRJ7FoTzFdxF9UFl3IRKeWdx4MX6+ZrAE7tdHmBsqHwN9G1GX7fa1sDlIRyCeOjfI+FhCT++nVoKxQhQGRbiMxOHqU15LqjwfsW/bKEaAeLntrQAJqiwLdIIvAetjilqF9W0VwLEueHfBAPBRMW0/RAl7JsWi/r9BVuZYQYwze/LAAAAAElFTkSuQmCC"
    },
    "46f8": function(e, t, i) {
        e.exports = i.p + "img/barcode_white.6e7278f3.png"
    },
    4883: function(e, t, i) {},
    4890: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "4b92": function(e, t, i) {},
    "4bac": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "4da6": function(e, t, i) {
        "use strict";
        i("b91d")
    },
    "4f35": function(e, t, i) {},
    "4fc0": function(e, t, i) {
        e.exports = i.p + "img/qr_black.cb1b0dc0.png"
    },
    5020: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "507b": function(e, t, i) {},
    5612: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAAAMZlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAAVAAAAZodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciBQcm8gMi4wLjMAAAAEkAQAAgAAABQAAACyoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAgoAMABAAAAAEAAAAoAAAAADIwMjE6MDg6MTEgMjE6NDU6MTEArJwMPQAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjMyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAyMS0wOC0xMVQyMTo0NToxN1o8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIxLTA4LTExVDIxOjQ1OjExWjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciBQcm8gMi4wLjM8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cge3h3oAAAOOSURBVFgJzVjNaxNBFJ/ZrgezySatgqTa1iIeiil6FPGiYsG26KGRitZTxNbq/6LowYonpUi9eEo/hEKgFOwhUKMWFHpQ9K6FWtBqxvdmdrKzaza7s27Age3uzLz3e7/3MW+3IURz3HvwcOzy+PWlgcET3wkxGaEGw2dcwz1NuOjiM7Oz5w72HtnhRonBQNN34ZrJUObx02dnoyNHkCxN3ZlHTwk33My4JOPIUJOVpm7PR4AOFylN3lrkxqnPCCcjUkBoh5ccygLh0s3phXALLSQePXl+hnAwxTh4V7wyUV6orB2SqviMawT2RJSQAOoY7J/S0d13FArNNZ6xu9jy8toBadh/xz0rm3NJgG53H9ZNjHH3/kyRkD0AJjxB75ZWVvJhUJygJxImE1hhmr794vjES1HxgsCNyelZn0jgdGz8KhSgLFYDUnYNsDRHYfD4Nm2E32SLlVeHo0Lw+uCnRqTvWAF7hvYwmEpAW52nAQjwIsbibD6M5stiFbUoBRoxhmXboIXwBsn39MRAkB7wNAR7EIQ896I80N3bX8/39rO5crkQJBe8bsgTgHnUJxAM7N0JTgH77ZVs0yyYQJsM+mGDCXjqtu7XS3Ze2dhID41cWk/n9jn5lk1EnGOwBuu4BrXAz7fuHXRRDwo7netkQyMX11dX32e4F7VazbJy+x1gYdg9/yqBhJ6dl5QFzqLtjs1PX6ofNt7CCwbD7MYdT3+8DsD9avFHZH335w+y+fHzKMWQbG995bax6TDsf40BwhSIubycHbnuvzcUm8jBEuBQysCGALRyneAk5AajIhaRXV1l4EdMYI5prgORDrBKea9sMBKtMwEbrSAoOgnBwD4DVMQMFuL2fI6m+ce1VXcJyLxoYsUQrysRlxHgWW8EIwaooqJ8B8CqqDZl230Ee5AOxWqbu51r2fMkCLTg6ZFOdCIcViKQELqOM+opSMg8h9FpJMlHQNOTthDQyULyBKDFwmubHzF+D4kISCY82K4oAR6G8KOdfAQ0/fnfCISHTNPBv8XVCoVkmamsTXa2vjldGwng+xoCg5lEYf5BgnPYYyF3tbOjaY8+zhFfOin+YzJOnjr9Rr6TUEcI/AJhuAjeUSHiHXXUy6OHeNI4PIKDA4XCO4IfhnvhhwfHc+Qc8eKRiijrxzRYKtvF8Gsc7BFSrVZT54dHX2ds/HXDLxw0j0cgk7XZ0IXhmjT+B8KRw3weTjZyAAAAAElFTkSuQmCC"
    },
    "56d7": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("7a23")
          , a = i("a1e9")
          , o = i("5c40")
          , s = i("6605")
          , l = {
            __name: "App",
            setup(e) {
                const t = Object(s["c"])()
                  , i = Object(a["s"])(null);
                let l = null
                  , r = !1;
                function c() {
                    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
                }
                return window.addEventListener("popstate", ()=>{
                    c()
                }
                ),
                Object(o["kc"])(t, e=>{
                    var t, n, a, o, s, A, d, h, g;
                    if (c())
                        return void (i.value = "");
                    const m = e.path.split("/").length
                      , p = null === (t = l) || void 0 === t || null === (n = t.path) || void 0 === n || null === (a = n.split("/")) || void 0 === a ? void 0 : a.length;
                    !r && l && (null !== (o = e.meta) && void 0 !== o && o.slide || null !== (s = l) && void 0 !== s && null !== (A = s.meta) && void 0 !== A && A.slide) && !(null !== (d = e.meta) && void 0 !== d && d.slideDisabled || null !== (h = l) && void 0 !== h && null !== (g = h.meta) && void 0 !== g && g.slideDisabled) ? i.value = p < m ? "slideLeft" : "slideRight" : (i.value = "default",
                    r = !1),
                    l = Object.assign({}, e)
                }
                ),
                (e,t)=>{
                    const a = Object(n["resolveComponent"])("router-view");
                    return Object(n["openBlock"])(),
                    Object(n["createBlock"])(a, null, {
                        default: Object(n["withCtx"])(({Component: e})=>[Object(n["createVNode"])(n["Transition"], {
                            name: Object(n["unref"])(i),
                            mode: "default"
                        }, {
                            default: Object(n["withCtx"])(()=>[(Object(n["openBlock"])(),
                            Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e)))]),
                            _: 2
                        }, 1032, ["name"])]),
                        _: 1
                    })
                }
            }
        };
        i("854a");
        const r = l;
        var c = r;
        const A = {
            class: "w-full h-full flex flex-col overflow-auto"
        }
          , d = {
            class: "content flex-1 relative transition"
        };
        function h(e, t, i, a, o, s) {
            const l = Object(n["resolveComponent"])("Header")
              , r = Object(n["resolveComponent"])("router-view")
              , c = Object(n["resolveComponent"])("Footer");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", A, [Object(n["createVNode"])(l), Object(n["createElementVNode"])("div", d, [Object(n["createVNode"])(r)]), Object(n["createVNode"])(c, {
                class: "z-10"
            })])
        }
        const g = {
            class: "header px-xlarge py-large flex justify-between items-center"
        }
          , m = {
            class: "flex items-center"
        }
          , p = {
            class: "ml-large text-left"
        }
          , u = {
            key: 0
        };
        function b(e, t, i, a, o, s) {
            const l = Object(n["resolveComponent"])("Logo")
              , r = Object(n["resolveComponent"])("SettingsIcon")
              , c = Object(n["resolveComponent"])("QrScan")
              , A = Object(n["resolveComponent"])("router-link");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("header", g, [Object(n["createElementVNode"])("div", m, [Object(n["createVNode"])(l, {
                class: "logo"
            }), Object(n["createElementVNode"])("div", p, Object(n["toDisplayString"])(a.topLabel), 1)]), "/app/menu" === e.$route.path ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", u)) : "/app/notification" === e.$route.path ? (Object(n["openBlock"])(),
            Object(n["createBlock"])(r, {
                key: 1
            })) : (Object(n["openBlock"])(),
            Object(n["createBlock"])(A, {
                key: 2,
                class: "flex items-center pr-middle",
                to: "/scanner"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(c, {
                    class: "icon"
                })]),
                _: 1
            }))])
        }
        i("14d9");
        var x = i("5502")
          , j = i("ade3")
          , M = (i("d9e2"),
        i("b7ef"),
        i("1344"));
        const I = Object(M["a"])()
          , C = {
            rp: 1
        };
        var y = i("22a2")
          , v = (i("907a"),
        i("986a"),
        i("1d02"),
        i("3c5d"),
        i("c29d"))
          , f = i("5665")
          , O = i("aa81")
          , D = i("4ab2")
          , w = i("67af")
          , N = i("d3fc")
          , k = i("9ac0");
        /*!
 * @pixi/candles - v0.2.0
 * Compiled Sun, 13 Jun 2021 11:15:36 UTC
 *
 * @pixi/candles is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2020, Ivan Popelyshev, All Rights Reserved
 */
        const E = "\nattribute vec4 aRect;\nattribute vec2 aQuad;\nattribute vec4 aColor;\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform float resolution;\nuniform vec4 uColor;\n\nvarying vec4 vPixelPos;\nvarying vec4 vPixelRect;\nvarying vec4 vColor;\n\nvoid main(void){\nvec2 p1 = (translationMatrix * vec3(aRect.xy, 1.0)).xy;\nvec2 p2 = (translationMatrix * vec3(aRect.xy + aRect.zw, 1.0)).xy;\n\nvec2 leftTop = p1;\nvec2 rightBottom = p2;\nvec2 sign = aQuad;\n\n// handle negative width/height, or translationMatrix .a .d < 0\nif (p1.x > p2.x) {\n    sign.x = 1.0 - aQuad.x;\n    leftTop.x = p2.x;\n    rightBottom.x = p1.x;\n}\nif (p1.y > p2.y) {\n    sign.y = 1.0 - aQuad.y;\n    leftTop.y = p2.y;\n    rightBottom.y = p1.y;\n}\n\nvPixelRect = vec4(leftTop * resolution, rightBottom * resolution);\n\nvec2 pos = (translationMatrix * vec3(aRect.xy + aRect.zw * aQuad, 1.0)).xy;\npos = floor(pos * resolution + 0.01 + sign * 0.98);\nvPixelPos = vec4(pos - 0.5, pos + 0.5);\ngl_Position = vec4((projectionMatrix * vec3(pos / resolution, 1.0)).xy, 0.0, 1.0);\n\nvColor = aColor * uColor;\n}"
          , L = "\nvarying vec4 vPixelPos;\nvarying vec4 vPixelRect;\nvarying vec4 vColor;\n\nvoid main(void) {\nvec2 leftTop = max(vPixelPos.xy, vPixelRect.xy);\nvec2 rightBottom = min(vPixelPos.zw, vPixelRect.zw);\nvec2 area = max(rightBottom - leftTop, 0.0);\nfloat clip = area.x * area.y;\n\ngl_FragColor = vColor * clip;\n}";
        class V extends f["d"] {
            static __initStatic() {
                this._prog = null
            }
            static getProgram() {
                return V._prog || (V._prog = new v["w"](E,L)),
                V._prog
            }
            constructor() {
                super(v["G"].WHITE, {
                    uniforms: {
                        resolution: 1
                    },
                    program: V.getProgram()
                })
            }
        }
        V.__initStatic();
        v["s"];
        f["a"];
        const T = "\nattribute vec2 aPoint0;\nattribute vec2 aPoint1;\nattribute vec2 aSides;\nattribute vec2 aQuad;\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform float resolution;\nuniform vec2 lineWidth;\nuniform float miterLimit;\n\nvarying vec3 line;\nvarying vec3 lineLeft;\nvarying vec3 lineRight;\nvarying vec4 vPixelPos;\n\nconst float eps = 0.001;\n\nvoid main(void) {\nfloat lenX = length(translationMatrix * vec3(1.0, 0.0, 0.0));\nfloat w = (lineWidth.x * lenX + lineWidth.y) * 0.5 * resolution;\n\nvec2 p0 = (translationMatrix * vec3(aPoint0, 1.0)).xy;\nvec2 p1 = (translationMatrix * vec3(aPoint1, 1.0)).xy;\n\np0 *= resolution;\np1 *= resolution;\n\nvec2 k0 = (translationMatrix * vec3(1.0, aSides[0], 0.0)).xy;\nvec2 k1 = (translationMatrix * vec3(1.0, aSides[1], 0.0)).xy;\n\nif (p0.x > p1.x) {\n    // make everything positive\n    vec2 tmp = p0;\n    p0 = p1;\n    p1 = tmp;\n    tmp = k0;\n    k0 = k1;\n    k1 = tmp;\n}\n\nline.x = (p1.y - p0.y) / (p1.x - p0.x);\nline.y = p0.y - line.x * p0.x;\nline.z = w * sqrt(line.x * line.x + 1.0);\n\nlineLeft.x = k0.y / k0.x;\nlineLeft.y = p0.y - lineLeft.x * p0.x;\nlineLeft.z = w * sqrt(lineLeft.x * lineLeft.x + 1.0);\n\nlineRight.x = k1.y / k1.x;\nlineRight.y = p1.y - lineRight.x * p1.x;\nlineRight.z = w * sqrt(lineRight.x * lineRight.x + 1.0);\n\n// calculating quad\nvec2 pos = vec2(0.0);\n\nvec2 sign = aQuad;\n// strange rounding\nif (abs(line.x) < 10.0 && p1.x - p0.x > 3.0) {\n    sign.x = 0.5;\n}\n\nfloat H = 0.0;\nif (aQuad.x < 0.5) {\n    H = min(miterLimit * line.z, max(lineLeft.z, line.z));\n    pos = p0;\n} else {\n    H = min(miterLimit * line.z, max(lineRight.z, line.z));\n    pos = p1;\n}\nH += 2.0;\npos.y += H * (aQuad.y * 2.0 - 1.0);\n\npos.y -= (pos.x - floor(pos.x + eps + sign.x)) * line.x;\npos = floor(pos + eps + sign * (1.0 - 2.0 * eps));\nvPixelPos = vec4(pos - 0.5, pos + 0.5);\ngl_Position = vec4((projectionMatrix * vec3(pos / resolution, 1.0)).xy, 0.0, 1.0);\n}"
          , G = "\nvarying vec3 line;\nvarying vec3 lineLeft;\nvarying vec3 lineRight;\nvarying vec4 vPixelPos;\nuniform vec4 uColor;\nuniform vec4 uGeomColor;\n\nfloat cut(float x, float y1, float y2) {\nvec2 range = vec2(dot(line, vec3(x, 1.0, -1.0)), dot(line, vec3(x, 1.0, 1.0)));\nif (line.x + lineLeft.x > 0.0) {\n    float v = dot(lineLeft, vec3(x, 1.0, -1.0));\n    if (line.x < lineLeft.x) {\n        range.x = min(range.x, v);\n    } else {\n        range.x = max(range.x, v);\n    }\n} else {\n    float v = dot(lineLeft, vec3(x, 1.0, 1.0));\n    if (line.x < lineLeft.x) {\n        range.y = min(range.y, v);\n    } else {\n        range.y = max(range.y, v);\n    }\n}\n\nif (line.x + lineRight.x < 0.0) {\n    float v = dot(lineRight, vec3(x, 1.0, -1.0));\n    if (line.x > lineRight.x) {\n        range.x = min(range.x, v);\n    } else {\n        range.x = max(range.x, v);\n    }\n} else {\n    float v = dot(lineRight, vec3(x, 1.0, 1.0));\n    if (line.x > lineRight.x) {\n        range.y = min(range.y, v);\n    } else {\n        range.y = max(range.y, v);\n    }\n}\n\nrange.x = max(range.x, y1);\nrange.y = min(range.y, y2);\nreturn max(range.y - range.x, 0.0);\n}\n\nconst float N = 8.0;\nconst float step = 1.0 / N;\nconst float div = 1.0 / (N + 1.0);\n\nvoid main(void) {\n// float cutLeft = cut(vPixelPos.x, vPixelPos.y, vPixelPos.w);\n// float cutRight = cut(vPixelPos.z, vPixelPos.y, vPixelPos.w);\n// float clip = (cutLeft + cutRight) / 2.0;\n\nfloat d = (vPixelPos.z - vPixelPos.x);\nfloat clip = 0.0;\nfor (float i = 0.0; i < N; i += 1.) {\n    clip += cut(vPixelPos.x + d * i * step, vPixelPos.y, vPixelPos.w);\n}\nclip *= div;\n\ngl_FragColor = uColor * clip + uGeomColor * (1.0 - clip);\n}";
        class B extends f["d"] {
            static __initStatic() {
                this._prog = null
            }
            static getProgram() {
                return B._prog || (B._prog = new v["w"](T,G)),
                B._prog
            }
            constructor() {
                super(v["G"].WHITE, {
                    uniforms: {
                        resolution: 1,
                        lineWidth: new Float32Array([1, 0]),
                        miterLimit: 5,
                        uGeomColor: new Float32Array([0, 0, 0, 0])
                    },
                    program: B.getProgram()
                })
            }
        }
        B.__initStatic();
        v["s"];
        f["a"];
        const S = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec2 rangeY;\n\nvarying float vOrdinate;\n\nvoid main(void)\n{\nvec2 pos = (translationMatrix * vec3(aVertexPosition, 1.0)).xy;\nif (pos.y > rangeY.y) {\n    pos.y = rangeY.y;\n}\ngl_Position = vec4((projectionMatrix * vec3(pos, 1.0)).xy, 0.0, 1.0);\nvOrdinate = pos.y;\n}"
          , z = "\nvarying float vOrdinate;\n\nuniform vec4 colorTop;\nuniform vec4 colorBottom;\nuniform vec4 uColor;\nuniform vec2 rangeY2;\n\nvoid main(void)\n{\nvec4 color = colorTop;\nif (vOrdinate > rangeY2.x) {\n    if (vOrdinate >= rangeY2.y) {\n        color = colorBottom;\n    } else {\n        color = colorTop + (colorBottom - colorTop) * (vOrdinate - rangeY2.x) / (rangeY2.y - rangeY2.x);\n    }\n}\n\ncolor.rgb *= color.a;\ngl_FragColor = color * uColor;\n}\n";
        class Z extends f["d"] {
            static __initStatic() {
                this._prog = null
            }
            static getProgram() {
                return Z._prog || (Z._prog = new v["w"](S,z)),
                Z._prog
            }
            constructor() {
                const e = new Float32Array(2);
                super(v["G"].WHITE, {
                    uniforms: {
                        resolution: 1,
                        colorTop: new Float32Array([1, 1, 1, 1]),
                        colorBottom: new Float32Array([1, 1, 1, 1]),
                        rangeY: e,
                        rangeY2: e
                    },
                    program: Z.getProgram()
                })
            }
        }
        Z.__initStatic();
        v["s"];
        f["a"];
        class R {
            constructor() {
                R.prototype.__init.call(this),
                R.prototype.__init2.call(this),
                R.prototype.__init3.call(this),
                R.prototype.__init4.call(this),
                R.prototype.__init5.call(this)
            }
            __init() {
                this.verts = []
            }
            __init2() {
                this.joints = []
            }
            __init3() {
                this.vertexSize = 0
            }
            __init4() {
                this.indexSize = 0
            }
            __init5() {
                this.closePointEps = 1e-4
            }
            clear() {
                this.verts.length = 0,
                this.joints.length = 0,
                this.vertexSize = 0,
                this.indexSize = 0
            }
            destroy() {
                this.verts.length = 0,
                this.joints.length = 0
            }
        }
        var P;
        (function(e) {
            const t = 0;
            e[e["NONE"] = t] = "NONE";
            const i = 1;
            e[e["FILL"] = i] = "FILL";
            const n = 4;
            e[e["JOINT_BEVEL"] = n] = "JOINT_BEVEL";
            const a = 8;
            e[e["JOINT_MITER"] = a] = "JOINT_MITER";
            const o = 12;
            e[e["JOINT_ROUND"] = o] = "JOINT_ROUND";
            const s = 16;
            e[e["JOINT_CAP_BUTT"] = s] = "JOINT_CAP_BUTT";
            const l = 18;
            e[e["JOINT_CAP_SQUARE"] = l] = "JOINT_CAP_SQUARE";
            const r = 20;
            e[e["JOINT_CAP_ROUND"] = r] = "JOINT_CAP_ROUND";
            const c = 24;
            e[e["FILL_EXPAND"] = c] = "FILL_EXPAND";
            const A = 32;
            e[e["CAP_BUTT"] = A] = "CAP_BUTT";
            const d = 64;
            e[e["CAP_SQUARE"] = d] = "CAP_SQUARE";
            const h = 96;
            e[e["CAP_ROUND"] = h] = "CAP_ROUND";
            const g = 128;
            e[e["CAP_BUTT2"] = g] = "CAP_BUTT2"
        }
        )(P || (P = {}));
        class Y {
            constructor() {
                Y.prototype.__init.call(this),
                Y.prototype.__init2.call(this),
                Y.prototype.__init3.call(this)
            }
            static __initStatic() {
                this.vertsByJoint = []
            }
            __init() {
                this.strideFloats = 12
            }
            updateBufferSize(e, t, i, n) {
                const {joints: a} = n;
                let o = !1
                  , s = 0
                  , l = 0;
                for (let r = e; r < e + t; r++) {
                    const e = -32 & a[r]
                      , t = 31 & a[r];
                    if (t === P.FILL) {
                        o = !0,
                        s++;
                        continue
                    }
                    if (t >= P.FILL_EXPAND) {
                        s += 3,
                        l += 3;
                        continue
                    }
                    const i = Y.vertsByJoint[t] + Y.vertsByJoint[e];
                    i >= 3 && (s += i,
                    l += 3 * (i - 2))
                }
                o && (l += i),
                n.vertexSize += s,
                n.indexSize += l
            }
            __init2() {
                this.bufferPos = 0
            }
            __init3() {
                this.indexPos = 0
            }
            beginPack(e, t, i, n, a=0, o=0) {
                this.buildData = e,
                this.bufFloat = t,
                this.bufUint = i,
                this.indices = n,
                this.bufferPos = a,
                this.indexPos = o
            }
            endPack() {
                this.buildData = null,
                this.bufFloat = null,
                this.bufUint = null,
                this.indices = null
            }
            packInterleavedGeometry(e, t, i, n, a) {
                const {bufFloat: o, bufUint: s, indices: l, buildData: r, strideFloats: c} = this
                  , {joints: A, verts: d} = r;
                let h, g, m, p, u, b, x, j, M = this.bufferPos, I = this.indexPos, C = this.bufferPos / this.strideFloats, y = !1;
                for (let v = e; v < e + t; v++) {
                    const e = A[v]
                      , t = -32 & A[v]
                      , i = 31 & A[v];
                    if (i === P.FILL) {
                        y = !0,
                        h = d[2 * v],
                        g = d[2 * v + 1],
                        o[M] = h,
                        o[M + 1] = g,
                        o[M + 2] = h,
                        o[M + 3] = g,
                        o[M + 4] = h,
                        o[M + 5] = g,
                        o[M + 6] = h,
                        o[M + 7] = g,
                        o[M + 8] = 16 * i,
                        o[M + 9] = 0,
                        o[M + 10] = 0,
                        s[M + 11] = a,
                        M += c;
                        continue
                    }
                    if (i >= P.FILL_EXPAND) {
                        u = d[2 * v],
                        b = d[2 * v + 1],
                        h = d[2 * v + 2],
                        g = d[2 * v + 3],
                        m = d[2 * v + 4],
                        p = d[2 * v + 5];
                        const t = v + 3;
                        for (let i = 0; i < 3; i++)
                            o[M] = u,
                            o[M + 1] = b,
                            o[M + 2] = h,
                            o[M + 3] = g,
                            o[M + 4] = m,
                            o[M + 5] = p,
                            o[M + 6] = d[2 * (t + i)],
                            o[M + 7] = d[2 * (t + i) + 1],
                            o[M + 8] = 16 * e + i,
                            o[M + 9] = 0,
                            o[M + 10] = 0,
                            s[M + 11] = a,
                            M += c;
                        l[I] = C,
                        l[I + 1] = C + 1,
                        l[I + 2] = C + 2,
                        I += 3,
                        C += 3;
                        continue
                    }
                    const r = Y.vertsByJoint[i] + Y.vertsByJoint[t];
                    if (0 !== r) {
                        h = d[2 * v],
                        g = d[2 * v + 1],
                        m = d[2 * v + 2],
                        p = d[2 * v + 3],
                        u = d[2 * v - 2],
                        b = d[2 * v - 1],
                        (-3 & i) !== P.JOINT_CAP_BUTT ? (x = d[2 * v + 4],
                        j = d[2 * v + 5]) : (x = h,
                        j = g);
                        for (let t = 0; t < r; t++)
                            o[M] = u,
                            o[M + 1] = b,
                            o[M + 2] = h,
                            o[M + 3] = g,
                            o[M + 4] = m,
                            o[M + 5] = p,
                            o[M + 6] = x,
                            o[M + 7] = j,
                            o[M + 8] = 16 * e + t,
                            o[M + 9] = n,
                            o[M + 10] = 0,
                            s[M + 11] = a,
                            M += c;
                        l[I] = C,
                        l[I + 1] = C + 1,
                        l[I + 2] = C + 2,
                        l[I + 3] = C,
                        l[I + 4] = C + 2,
                        l[I + 5] = C + 3,
                        I += 6;
                        for (let e = 5; e + 1 < r; e++)
                            l[I] = C + 4,
                            l[I + 1] = C + e,
                            l[I + 2] = C + e + 1,
                            I += 3;
                        C += r
                    }
                }
                if (y) {
                    for (let e = 0; e < i.length; e++)
                        l[I + e] = i[e] + C;
                    I += i.length
                }
                this.bufferPos = M,
                this.indexPos = I
            }
        }
        Y.__initStatic();
        const U = Y.vertsByJoint;
        for (let jh = 0; jh < 256; jh++)
            U.push(0);
        U[P.FILL] = 1;
        for (let jh = 0; jh < 8; jh++)
            U[P.FILL_EXPAND + jh] = 3;
        U[P.JOINT_BEVEL] = 7,
        U[P.JOINT_BEVEL + 1] = 7,
        U[P.JOINT_BEVEL + 2] = 7,
        U[P.JOINT_BEVEL + 3] = 7,
        U[P.JOINT_ROUND] = 9,
        U[P.JOINT_ROUND + 1] = 9,
        U[P.JOINT_ROUND + 2] = 9,
        U[P.JOINT_ROUND + 3] = 9,
        U[P.JOINT_MITER] = 8,
        U[P.JOINT_MITER + 1] = 8,
        U[P.JOINT_MITER + 2] = 4,
        U[P.JOINT_MITER + 3] = 4,
        U[P.JOINT_CAP_BUTT] = 4,
        U[P.JOINT_CAP_BUTT + 1] = 4,
        U[P.JOINT_CAP_SQUARE] = 4,
        U[P.JOINT_CAP_SQUARE + 1] = 4,
        U[P.JOINT_CAP_ROUND] = 8,
        U[P.JOINT_CAP_ROUND + 1] = 8,
        U[P.CAP_ROUND] = 4;
        class W {
            constructor(e, t=null, i=null, n=null) {
                this.shape = e,
                this.lineStyle = i,
                this.fillStyle = t,
                this.matrix = n,
                this.type = e.type,
                this.points = [],
                this.holes = [],
                this.triangles = [],
                this.closeStroke = !1,
                this.clearBuild()
            }
            clearPath() {
                this.points.length = 0,
                this.closeStroke = !0
            }
            clearBuild() {
                this.triangles.length = 0,
                this.fillStart = 0,
                this.fillLen = 0,
                this.strokeStart = 0,
                this.strokeLen = 0,
                this.fillAA = !1
            }
            clone() {
                return new W(this.shape,this.fillStyle,this.lineStyle,this.matrix)
            }
            capType() {
                let e;
                switch (this.lineStyle.cap) {
                case w["f"].SQUARE:
                    e = P.CAP_SQUARE;
                    break;
                case w["f"].ROUND:
                    e = P.CAP_ROUND;
                    break;
                default:
                    e = P.CAP_BUTT;
                    break
                }
                return e
            }
            jointType() {
                let e;
                switch (this.lineStyle.join) {
                case w["g"].BEVEL:
                    e = P.JOINT_BEVEL;
                    break;
                case w["g"].ROUND:
                    e = P.JOINT_ROUND;
                    break;
                default:
                    e = P.JOINT_MITER;
                    break
                }
                return e
            }
            destroy() {
                this.shape = null,
                this.holes.length = 0,
                this.holes = null,
                this.points.length = 0,
                this.points = null,
                this.lineStyle = null,
                this.fillStyle = null,
                this.triangles = null
            }
        }
        class Q {
            path(e, t) {
                const i = e.shape
                  , n = e.points
                  , a = i.x
                  , o = i.y;
                let s, l;
                if (e.type === N["l"].CIRC)
                    s = i.radius,
                    l = i.radius;
                else {
                    const t = e.shape;
                    s = t.width,
                    l = t.height
                }
                if (0 === s || 0 === l)
                    return;
                n.push(a, o);
                let r = Math.floor(30 * Math.sqrt(i.radius)) || Math.floor(15 * Math.sqrt(s + l));
                r /= 2.3,
                r < 3 && (r = 3);
                const c = 2 * Math.PI / r;
                for (let A = 0; A < r - .5; A++)
                    n.push(a + Math.sin(-c * A) * s, o + Math.cos(-c * A) * l)
            }
            fill(e, t) {
                const {verts: i, joints: n} = t
                  , {points: a, triangles: o} = e;
                let s = 1;
                const l = 0;
                if (!e.fillAA) {
                    for (let e = 0; e < a.length; e += 2)
                        i.push(a[e], a[e + 1]),
                        n.push(P.FILL),
                        e > 2 && o.push(s++, l, s);
                    return void o.push(s, l, 1)
                }
                let r = a[0]
                  , c = a[1]
                  , A = e.shape.radius;
                for (let d = 2; d < a.length; d += 2) {
                    let e = d
                      , t = d + 2 < a.length ? d + 2 : 2;
                    i.push(r),
                    i.push(c),
                    i.push(a[e]),
                    i.push(a[e + 1]),
                    i.push(a[t]),
                    i.push(a[t + 1]),
                    i.push(0),
                    i.push(0),
                    i.push((a[e] - r) / A),
                    i.push((a[e + 1] - c) / A),
                    i.push((a[t] - r) / A),
                    i.push((a[t + 1] - c) / A),
                    n.push(P.FILL_EXPAND + 2),
                    n.push(P.NONE),
                    n.push(P.NONE),
                    n.push(P.NONE),
                    n.push(P.NONE),
                    n.push(P.NONE)
                }
            }
            line(e, t) {
                const {verts: i, joints: n} = t
                  , {points: a} = e
                  , o = e.jointType()
                  , s = a.length;
                i.push(a[s - 2], a[s - 1]),
                n.push(P.NONE);
                for (let l = 2; l < s; l += 2)
                    i.push(a[l], a[l + 1]),
                    n.push(o + 3);
                i.push(a[2], a[3]),
                n.push(P.NONE),
                i.push(a[4], a[5]),
                n.push(P.NONE)
            }
        }
        class F {
            path(e, t) {
                const i = e.shape
                  , n = i.x
                  , a = i.y
                  , o = i.width
                  , s = i.height
                  , l = e.points;
                l.length = 0,
                l.push(n, a, n + o, a, n + o, a + s, n, a + s)
            }
            line(e, t) {
                const {verts: i, joints: n} = t
                  , {points: a} = e
                  , o = e.jointType()
                  , s = a.length;
                i.push(a[s - 2], a[s - 1]),
                n.push(P.NONE);
                for (let l = 0; l < s; l += 2)
                    i.push(a[l], a[l + 1]),
                    n.push(o + 3);
                i.push(a[0], a[1]),
                n.push(P.NONE),
                i.push(a[2], a[3]),
                n.push(P.NONE)
            }
            fill(e, t) {
                const {verts: i, joints: n} = t
                  , {points: a, triangles: o} = e;
                o.length = 0,
                i.length,
                i.push(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]),
                n.push(P.FILL, P.FILL, P.FILL, P.FILL),
                o.push(0, 1, 2, 0, 2, 3)
            }
        }
        function J(e, t, i) {
            const n = t - e;
            return e + n * i
        }
        function H(e, t, i, n, a, o, s=[]) {
            const l = 20
              , r = s;
            let c = 0
              , A = 0
              , d = 0
              , h = 0
              , g = 0
              , m = 0;
            for (let p = 0, u = 0; p <= l; ++p)
                u = p / l,
                c = J(e, i, u),
                A = J(t, n, u),
                d = J(i, a, u),
                h = J(n, o, u),
                g = J(c, d, u),
                m = J(A, h, u),
                r.push(g, m);
            return r
        }
        class X {
            path(e, t) {
                const i = e.shape
                  , {points: n} = e
                  , a = i.x
                  , o = i.y
                  , s = i.width
                  , l = i.height
                  , r = Math.max(0, Math.min(i.radius, Math.min(s, l) / 2));
                n.length = 0,
                r ? (H(a, o + r, a, o, a + r, o, n),
                H(a + s - r, o, a + s, o, a + s, o + r, n),
                H(a + s, o + l - r, a + s, o + l, a + s - r, o + l, n),
                H(a + r, o + l, a, o + l, a, o + l - r, n),
                H(a, o + r, a, o, a + r, o, n),
                H(a + s - r, o, a + s, o, a + s, o + r, n),
                H(a + s, o + l - r, a + s, o + l, a + s - r, o + l, n),
                H(a + r, o + l, a, o + l, a, o + l - r, n)) : n.push(a, o, a + s, o, a + s, o + l, a, o + l)
            }
            line(e, t) {
                const {verts: i, joints: n} = t
                  , {points: a} = e
                  , o = e.jointType()
                  , s = a.length;
                i.push(a[s - 2], a[s - 1]),
                n.push(P.NONE);
                for (let l = 0; l < s; l += 2)
                    i.push(a[l], a[l + 1]),
                    n.push(o + 3);
                i.push(a[0], a[1]),
                n.push(P.NONE)
            }
            fill(e, t) {
                const {verts: i, joints: n} = t
                  , {points: a, triangles: o} = e;
                i.length,
                e.triangles = Object(O["earcut"])(a, null, 2);
                for (let s = 0, l = a.length; s < l; s++)
                    i.push(a[s], a[++s]),
                    n.push(P.FILL)
            }
        }
        let K = [];
        class _ {
            path(e, t) {
                const i = e.shape;
                let n = e.points = i.points.slice();
                const a = t.closePointEps
                  , o = a * a;
                if (0 === n.length)
                    return;
                const s = new N["g"](n[0],n[1])
                  , l = new N["g"](n[n.length - 2],n[n.length - 1])
                  , r = e.closeStroke = i.closeStroke;
                let c = n.length
                  , A = 2;
                for (let d = 2; d < c; d += 2) {
                    const e = n[d - 2]
                      , t = n[d - 1]
                      , i = n[d]
                      , o = n[d + 1];
                    let s = !0;
                    Math.abs(e - i) < a && Math.abs(t - o) < a && (s = !1),
                    s && (n[A] = n[d],
                    n[A + 1] = n[d + 1],
                    A += 2)
                }
                n.length = c = A,
                A = 2;
                for (let d = 2; d + 2 < c; d += 2) {
                    let e = n[d - 2]
                      , t = n[d - 1]
                      , i = n[d]
                      , a = n[d + 1]
                      , s = n[d + 2]
                      , l = n[d + 3];
                    e -= i,
                    t -= a,
                    s -= i,
                    l -= a;
                    let r = !0;
                    Math.abs(s * t - l * e) < o && e * i + t * a < -o && (r = !1),
                    r && (n[A] = n[d],
                    n[A + 1] = n[d + 1],
                    A += 2)
                }
                if (n[A] = n[c - 2],
                n[A + 1] = n[c - 1],
                A += 2,
                n.length = c = A,
                !(c <= 2) && r) {
                    const e = Math.abs(s.x - l.x) < a && Math.abs(s.y - l.y) < a;
                    e && (n.pop(),
                    n.pop())
                }
            }
            line(e, t) {
                const {closeStroke: i, points: n} = e
                  , a = t.closePointEps
                  , o = n.length;
                if (e.lineStyle,
                o <= 2)
                    return;
                const {verts: s, joints: l} = t;
                let r, c, A = e.jointType(), d = e.capType(), h = 0;
                i ? (r = n[o - 2],
                c = n[o - 1],
                l.push(P.NONE)) : (r = n[2],
                c = n[3],
                d === P.CAP_ROUND ? (s.push(n[0], n[1]),
                l.push(P.NONE),
                l.push(P.CAP_ROUND),
                h = 0) : (h = d,
                l.push(P.NONE))),
                s.push(r, c);
                for (let g = 0; g < o; g += 2) {
                    const e = n[g]
                      , t = n[g + 1];
                    let m, p;
                    g + 2 < o ? (m = n[g + 2],
                    p = n[g + 3]) : (m = n[0],
                    p = n[1]);
                    const u = m - e
                      , b = p - t;
                    let x, j, M = A;
                    g + 2 >= o ? (x = n[2],
                    j = n[3],
                    i || (M = P.NONE)) : g + 4 >= o ? (x = n[0],
                    j = n[1],
                    i || (d === P.CAP_ROUND && (M = P.JOINT_CAP_ROUND),
                    d === P.CAP_BUTT && (M = P.JOINT_CAP_BUTT),
                    d === P.CAP_SQUARE && (M = P.JOINT_CAP_SQUARE))) : (x = n[g + 4],
                    j = n[g + 5]);
                    const I = e - r
                      , C = t - c;
                    if (A >= P.JOINT_BEVEL && A <= P.JOINT_MITER) {
                        const e = x - m
                          , t = j - p;
                        if (M >= P.JOINT_BEVEL && M <= P.JOINT_MITER + 3) {
                            const i = e * b - t * u;
                            if (Math.abs(i) < a)
                                switch (-4 & A) {
                                case P.JOINT_ROUND:
                                    M = P.JOINT_CAP_ROUND;
                                    break;
                                default:
                                    M = P.JOINT_CAP_BUTT;
                                    break
                                }
                        }
                        if (A === P.JOINT_MITER) {
                            let i = 0;
                            I * u + C * b > -a && i++,
                            M === P.JOINT_MITER && e * u + t * b > -a && (i += 2),
                            M += i
                        }
                    }
                    0 === h && Math.abs(I * b - C * u) < a && (h = P.CAP_BUTT2),
                    M += h,
                    h = 0,
                    s.push(e, t),
                    l.push(M),
                    r = e,
                    c = t
                }
                i ? (s.push(n[0], n[1]),
                l.push(P.NONE),
                s.push(n[2], n[3]),
                l.push(P.NONE)) : (s.push(n[o - 4], n[o - 3]),
                l.push(P.NONE))
            }
            fill(e, t) {
                let i = e.points;
                const n = e.holes
                  , a = t.closePointEps
                  , {verts: o, joints: s} = t;
                if (i.length < 6)
                    return;
                const l = [];
                let r = i.length;
                for (let h = 0; h < n.length; h++) {
                    const e = n[h];
                    l.push(i.length / 2),
                    i = i.concat(e.points)
                }
                const c = K;
                c.length < i.length && (c.length = i.length);
                let A = 0;
                for (let h = 0; h <= l.length; h++) {
                    let e = r / 2;
                    h > 0 && (e = h < l.length ? l[h] : i.length >> 1),
                    c[2 * A] = e - 1,
                    c[2 * (e - 1) + 1] = 0;
                    for (let t = A; t + 1 < e; t++)
                        c[2 * t + 1] = t + 1,
                        c[2 * t + 2] = t
                }
                if (e.triangles = Object(O["earcut"])(i, l, 2),
                !e.triangles)
                    return;
                if (!e.fillAA) {
                    for (let e = 0; e < i.length; e += 2)
                        o.push(i[e], i[e + 1]),
                        s.push(P.FILL);
                    return
                }
                const {triangles: d} = e;
                r = i.length;
                for (let h = 0; h < d.length; h += 3) {
                    let e = 0;
                    for (let t = 0; t < 3; t++) {
                        const i = d[h + t]
                          , n = d[h + (t + 1) % 3];
                        c[2 * i] !== n && c[2 * i + 1] !== n || (e |= 1 << t)
                    }
                    s.push(P.FILL_EXPAND + e),
                    s.push(P.NONE),
                    s.push(P.NONE),
                    s.push(P.NONE),
                    s.push(P.NONE),
                    s.push(P.NONE)
                }
                for (let h = 0; h < r / 2; h++) {
                    let e = c[2 * h]
                      , t = c[2 * h + 1]
                      , n = i[2 * t + 1] - i[2 * h + 1]
                      , o = -(i[2 * t] - i[2 * h])
                      , s = i[2 * h + 1] - i[2 * e + 1]
                      , l = -(i[2 * h] - i[2 * e])
                      , r = Math.sqrt(n * n + o * o);
                    n /= r,
                    o /= r;
                    let A = Math.sqrt(s * s + l * l);
                    s /= A,
                    l /= A;
                    let d = n + s
                      , g = o + l
                      , m = d * n + g * o;
                    Math.abs(m) < a ? (d = n,
                    g = o) : (d /= m,
                    g /= m),
                    c[2 * h] = d,
                    c[2 * h + 1] = g
                }
                for (let h = 0; h < d.length; h += 3) {
                    const e = d[h]
                      , t = d[h + 1]
                      , n = d[h + 2];
                    let a = i[2 * n + 1] - i[2 * t + 1]
                      , s = -(i[2 * n] - i[2 * t])
                      , l = i[2 * t + 1] - i[2 * e + 1]
                      , r = -(i[2 * t] - i[2 * e])
                      , A = 1;
                    a * r - l * s > 0 && (A = 2);
                    for (let c = 0; c < 3; c++) {
                        let e = d[h + c * A % 3];
                        o.push(i[2 * e], i[2 * e + 1])
                    }
                    for (let i = 0; i < 3; i++) {
                        let e = d[h + i * A % 3];
                        o.push(c[2 * e], c[2 * e + 1])
                    }
                }
            }
        }
        const q = {
            [N["l"].POLY]: new _,
            [N["l"].CIRC]: new Q,
            [N["l"].ELIP]: new Q,
            [N["l"].RECT]: new F,
            [N["l"].RREC]: new X
        }
          , {buildLine: $, BatchPart: ee, BATCH_POOL: te, DRAW_CALL_POOL: ie} = w["i"]
          , ne = new N["g"]
          , ae = new k["a"];
        class oe extends v["s"] {
            static __initStatic() {
                this.BATCHABLE_SIZE = 100
            }
            __init() {
                this.indicesUint16 = null
            }
            get points() {
                return this.buildData.verts
            }
            get closePointEps() {
                return this.buildData.closePointEps
            }
            initAttributes(e) {
                this._buffer = new v["l"](null,e,!1),
                this._bufferFloats = new Float32Array,
                this._bufferUint = new Uint32Array,
                this._indexBuffer = new v["l"](null,e,!0),
                this.addAttribute("aPrev", this._buffer, 2, !1, D["p"].FLOAT).addAttribute("aPoint1", this._buffer, 2, !1, D["p"].FLOAT).addAttribute("aPoint2", this._buffer, 2, !1, D["p"].FLOAT).addAttribute("aNext", this._buffer, 2, !1, D["p"].FLOAT).addAttribute("aVertexJoint", this._buffer, 1, !1, D["p"].FLOAT).addAttribute("aLineStyle", this._buffer, 2, !1, D["p"].FLOAT).addAttribute("aColor", this._buffer, 4, !0, D["p"].UNSIGNED_BYTE).addIndex(this._indexBuffer),
                this.strideFloats = 12
            }
            constructor() {
                super(),
                oe.prototype.__init.call(this),
                this.initAttributes(!1),
                this.buildData = new R,
                this.graphicsData = [],
                this.dirty = 0,
                this.batchDirty = -1,
                this.cacheDirty = -1,
                this.clearDirty = 0,
                this.drawCalls = [],
                this.batches = [],
                this.shapeBuildIndex = 0,
                this.shapeBatchIndex = 0,
                this._bounds = new k["a"],
                this.boundsDirty = -1,
                this.boundsPadding = 0,
                this.batchable = !1,
                this.indicesUint16 = null,
                this.packer = null,
                this.packSize = 0,
                this.pack32index = null
            }
            checkInstancing(e, t) {
                this.packer || (this.packer = new Y,
                this.pack32index = t)
            }
            get bounds() {
                return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty,
                this.calculateBounds()),
                this._bounds
            }
            invalidate() {
                this.boundsDirty = -1,
                this.dirty++,
                this.batchDirty++,
                this.shapeBuildIndex = 0,
                this.shapeBatchIndex = 0,
                this.packSize = 0,
                this.buildData.clear();
                for (let e = 0; e < this.drawCalls.length; e++)
                    this.drawCalls[e].texArray.clear(),
                    ie.push(this.drawCalls[e]);
                this.drawCalls.length = 0;
                for (let e = 0; e < this.batches.length; e++) {
                    const t = this.batches[e];
                    t.reset(),
                    te.push(t)
                }
                this.batches.length = 0
            }
            clear() {
                return this.graphicsData.length > 0 && (this.invalidate(),
                this.clearDirty++,
                this.graphicsData.length = 0),
                this
            }
            drawShape(e, t=null, i=null, n=null) {
                const a = new W(e,t,i,n);
                return this.graphicsData.push(a),
                this.dirty++,
                this
            }
            drawHole(e, t=null) {
                if (!this.graphicsData.length)
                    return null;
                const i = new W(e,null,null,t)
                  , n = this.graphicsData[this.graphicsData.length - 1];
                return i.lineStyle = n.lineStyle,
                n.holes.push(i),
                this.dirty++,
                this
            }
            destroy() {
                super.destroy();
                for (let e = 0; e < this.graphicsData.length; ++e)
                    this.graphicsData[e].destroy();
                this.buildData.destroy(),
                this.buildData = null,
                this.indexBuffer.destroy(),
                this.indexBuffer = null,
                this.graphicsData.length = 0,
                this.graphicsData = null,
                this.drawCalls.length = 0,
                this.drawCalls = null,
                this.batches.length = 0,
                this.batches = null,
                this._bounds = null
            }
            containsPoint(e) {
                const t = this.graphicsData;
                for (let i = 0; i < t.length; ++i) {
                    const n = t[i];
                    if (n.fillStyle.visible && (n.shape && (n.matrix ? n.matrix.applyInverse(e, ne) : ne.copyFrom(e),
                    n.shape.contains(ne.x, ne.y)))) {
                        let e = !1;
                        if (n.holes)
                            for (let t = 0; t < n.holes.length; t++) {
                                const i = n.holes[t];
                                if (i.shape.contains(ne.x, ne.y)) {
                                    e = !0;
                                    break
                                }
                            }
                        if (!e)
                            return !0
                    }
                }
                return !1
            }
            updatePoints() {}
            updateBufferSize() {
                this._buffer.update(new Float32Array)
            }
            updateBuild() {
                const {graphicsData: e, buildData: t} = this
                  , i = e.length;
                for (let n = this.shapeBuildIndex; n < i; n++) {
                    const i = e[n];
                    i.strokeStart = 0,
                    i.strokeLen = 0,
                    i.fillStart = 0,
                    i.fillLen = 0;
                    const {fillStyle: a, lineStyle: o, holes: s} = i;
                    if (!a.visible && !o.visible)
                        continue;
                    const l = q[i.type];
                    i.clearPath(),
                    l.path(i, t),
                    i.matrix && this.transformPoints(i.points, i.matrix),
                    i.clearBuild(),
                    a.visible && (s.length && this.processHoles(s),
                    i.fillAA = i.fillStyle.smooth && !(i.lineStyle.visible && i.lineStyle.alpha >= .99 && i.lineStyle.width >= .99),
                    i.fillStart = t.joints.length,
                    l.fill(i, t),
                    i.fillLen = t.joints.length - i.fillStart),
                    o.visible && (i.strokeStart = t.joints.length,
                    l.line(i, t),
                    i.strokeLen = t.joints.length - i.strokeStart)
                }
                this.shapeBuildIndex = i
            }
            updateBatches() {
                if (!this.graphicsData.length)
                    return void (this.batchable = !0);
                if (this.updateBuild(),
                !this.validateBatching())
                    return;
                const {buildData: e, graphicsData: t, packer: i} = this
                  , n = t.length;
                this.cacheDirty = this.dirty;
                let a = null
                  , o = null;
                this.batches.length > 0 && (a = this.batches[this.batches.length - 1],
                o = a.style);
                for (let s = this.shapeBatchIndex; s < n; s++) {
                    const i = t[s]
                      , n = i.fillStyle
                      , l = i.lineStyle;
                    if (i.matrix && this.transformPoints(i.points, i.matrix),
                    n.visible || l.visible)
                        for (let t = 0; t < 2; t++) {
                            const s = 0 === t ? n : l;
                            if (!s.visible)
                                continue;
                            const r = s.texture.baseTexture
                              , c = e.vertexSize
                              , A = e.indexSize;
                            r.wrapMode = D["q"].REPEAT,
                            0 === t ? this.packer.updateBufferSize(i.fillStart, i.fillLen, i.triangles.length, e) : this.packer.updateBufferSize(i.strokeStart, i.strokeLen, i.triangles.length, e);
                            const d = e.vertexSize;
                            d !== c && (a && !this._compareStyles(o, s) && (a.end(A, c),
                            a = null),
                            a || (a = te.pop() || new ee,
                            a.begin(s, A, c),
                            this.batches.push(a),
                            o = s))
                        }
                }
                this.shapeBatchIndex = n,
                a && a.end(e.indexSize, e.vertexSize),
                0 !== this.batches.length ? (this.batchable = this.isBatchable(),
                this.batchable ? this.packBatches() : (this.updatePack(),
                this.buildDrawCalls())) : this.batchable = !0
            }
            updatePack() {
                const {vertexSize: e, indexSize: t} = this.buildData;
                if (this.packSize === e)
                    return;
                const {strideFloats: i, packer: n, buildData: a} = this
                  , o = this._buffer
                  , s = this._indexBuffer
                  , l = e * i;
                if (o.data.length !== l) {
                    const e = new ArrayBuffer(4 * l);
                    this._bufferFloats = new Float32Array(e),
                    this._bufferUint = new Uint32Array(e),
                    o.data = this._bufferFloats
                }
                s.data.length !== t && (e > 65535 && this.pack32index ? s.data = new Uint32Array(t) : s.data = new Uint16Array(t)),
                n.beginPack(a, this._bufferFloats, this._bufferUint, s.data);
                for (let r = 0; r < this.graphicsData.length; r++) {
                    const e = this.graphicsData[r];
                    if (e.fillLen) {
                        const t = 0
                          , i = e.fillStyle.color
                          , a = (i >> 16) + (65280 & i) + ((255 & i) << 16)
                          , o = Object(O["premultiplyTint"])(a, e.fillStyle.alpha);
                        n.packInterleavedGeometry(e.fillStart, e.fillLen, e.triangles, t, o)
                    }
                    if (e.strokeLen) {
                        const t = e.lineStyle.width
                          , i = e.lineStyle.color
                          , a = (i >> 16) + (65280 & i) + ((255 & i) << 16)
                          , o = Object(O["premultiplyTint"])(a, e.lineStyle.alpha);
                        n.packInterleavedGeometry(e.strokeStart, e.strokeLen, e.triangles, t, o)
                    }
                }
                o.update(),
                s.update(),
                this.packSize = e
            }
            _compareStyles(e, t) {
                return !(!e || !t) && (e.texture.baseTexture === t.texture.baseTexture && (e.color + e.alpha === t.color + t.alpha && (!!e.native === !!t.native && !!e.width === !!t.width)))
            }
            validateBatching() {
                if (this.dirty === this.cacheDirty || !this.graphicsData.length)
                    return !1;
                for (let e = 0, t = this.graphicsData.length; e < t; e++) {
                    const t = this.graphicsData[e]
                      , i = t.fillStyle
                      , n = t.lineStyle;
                    if (i && !i.texture.baseTexture.valid)
                        return !1;
                    if (n && !n.texture.baseTexture.valid)
                        return !1
                }
                return !0
            }
            packBatches() {
                this.batchDirty++;
                const e = this.batches;
                for (let t = 0, i = e.length; t < i; t++) {
                    const i = e[t];
                    for (let e = 0; e < i.size; e++) {
                        const t = i.start + e;
                        this.indicesUint16[t] = this.indicesUint16[t] - i.attribStart
                    }
                }
            }
            isBatchable() {
                return !1
            }
            buildDrawCalls() {
                let e = ++v["e"]._globalBatch;
                for (let l = 0; l < this.drawCalls.length; l++)
                    this.drawCalls[l].texArray.clear(),
                    ie.push(this.drawCalls[l]);
                this.drawCalls.length = 0;
                let t = ie.pop();
                t || (t = new v["f"],
                t.texArray = new v["k"]),
                t.texArray.count = 0,
                t.start = 0,
                t.size = 0,
                t.type = D["e"].TRIANGLES;
                let i = 0
                  , n = null
                  , a = !1
                  , o = D["e"].TRIANGLES
                  , s = 0;
                this.drawCalls.push(t);
                for (let l = 0; l < this.batches.length; l++) {
                    const r = this.batches[l]
                      , c = 8
                      , A = r.style
                      , d = A.texture.baseTexture;
                    a !== !!A.native && (a = !!A.native,
                    o = a ? D["e"].LINES : D["e"].TRIANGLES,
                    n = null,
                    i = c,
                    e++),
                    n !== d && (n = d,
                    d._batchEnabled !== e && (i === c && (e++,
                    i = 0,
                    t.size > 0 && (t = ie.pop(),
                    t || (t = new v["f"],
                    t.texArray = new v["k"]),
                    this.drawCalls.push(t)),
                    t.start = s,
                    t.size = 0,
                    t.texArray.count = 0,
                    t.type = o),
                    d.touched = 1,
                    d._batchEnabled = e,
                    d._batchLocation = i,
                    d.wrapMode = 10497,
                    t.texArray.elements[t.texArray.count++] = d,
                    i++)),
                    t.size += r.size,
                    s += r.size,
                    d._batchLocation
                }
                v["e"]._globalBatch = e
            }
            processHoles(e) {
                for (let t = 0; t < e.length; t++) {
                    const i = e[t]
                      , n = q[i.type];
                    n.path(i, this.buildData),
                    i.matrix && this.transformPoints(i.points, i.matrix)
                }
            }
            calculateBounds() {
                const e = this._bounds
                  , t = ae;
                let i = N["d"].IDENTITY;
                this._bounds.clear(),
                t.clear();
                for (let n = 0; n < this.graphicsData.length; n++) {
                    const a = this.graphicsData[n]
                      , o = a.shape
                      , s = a.type
                      , l = a.lineStyle
                      , r = a.matrix || N["d"].IDENTITY;
                    let c = 0;
                    if (l && l.visible) {
                        const e = l.alignment;
                        c = l.width,
                        s === N["l"].POLY ? c *= .5 + Math.abs(.5 - e) : c *= Math.max(0, e)
                    }
                    if (i !== r && (t.isEmpty() || (e.addBoundsMatrix(t, i),
                    t.clear()),
                    i = r),
                    s === N["l"].RECT || s === N["l"].RREC) {
                        const e = o;
                        t.addFramePad(e.x, e.y, e.x + e.width, e.y + e.height, c, c)
                    } else if (s === N["l"].CIRC) {
                        const e = o;
                        t.addFramePad(e.x, e.y, e.x, e.y, e.radius + c, e.radius + c)
                    } else if (s === N["l"].ELIP) {
                        const e = o;
                        t.addFramePad(e.x, e.y, e.x, e.y, e.width + c, e.height + c)
                    } else {
                        const t = o;
                        e.addVerticesMatrix(i, t.points, 0, t.points.length, c, c)
                    }
                }
                t.isEmpty() || e.addBoundsMatrix(t, i),
                e.pad(this.boundsPadding, this.boundsPadding)
            }
            transformPoints(e, t) {
                for (let i = 0; i < e.length / 2; i++) {
                    const n = e[2 * i]
                      , a = e[2 * i + 1];
                    e[2 * i] = t.a * n + t.c * a + t.tx,
                    e[2 * i + 1] = t.b * n + t.d * a + t.ty
                }
            }
            addColors(e, t, i, n) {
                const a = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                  , o = Object(O["premultiplyTint"])(a, i);
                while (n-- > 0)
                    e.push(o)
            }
            addTextureIds(e, t, i) {
                while (i-- > 0)
                    e.push(t)
            }
            addUvs(e, t, i, n, a, o=null) {
                let s = 0;
                const l = t.length
                  , r = i.frame;
                while (s < a) {
                    let i = e[2 * (n + s)]
                      , a = e[2 * (n + s) + 1];
                    if (o) {
                        const e = o.a * i + o.c * a + o.tx;
                        a = o.b * i + o.d * a + o.ty,
                        i = e
                    }
                    s++,
                    t.push(i / r.width, a / r.height)
                }
                const c = i.baseTexture;
                (r.width < c.width || r.height < c.height) && this.adjustUvs(t, i, l, a)
            }
            adjustUvs(e, t, i, n) {
                const a = t.baseTexture
                  , o = 1e-6
                  , s = i + 2 * n
                  , l = t.frame
                  , r = l.width / a.width
                  , c = l.height / a.height;
                let A = l.x / l.width
                  , d = l.y / l.height
                  , h = Math.floor(e[i] + o)
                  , g = Math.floor(e[i + 1] + o);
                for (let m = i + 2; m < s; m += 2)
                    h = Math.min(h, Math.floor(e[m] + o)),
                    g = Math.min(g, Math.floor(e[m + 1] + o));
                A -= h,
                d -= g;
                for (let m = i; m < s; m += 2)
                    e[m] = (e[m] + A) * r,
                    e[m + 1] = (e[m + 1] + d) * c
            }
        }
        oe.__initStatic();
        const {BezierUtils: se, QuadraticUtils: le, ArcUtils: re} = w["i"]
          , ce = new Float32Array(3)
          , Ae = {};
        w["a"].prototype.clone = function() {
            const e = new w["a"];
            return e.color = this.color,
            e.alpha = this.alpha,
            e.texture = this.texture,
            e.matrix = this.matrix,
            e.visible = this.visible,
            e.smooth = this.smooth,
            e
        }
        ;
        class de extends k["b"] {
            static __initStatic() {
                this._TEMP_POINT = new N["g"]
            }
            get geometry() {
                return this._geometry
            }
            constructor(e=null) {
                super(),
                this._geometry = e || new oe,
                this._geometry.refCount++,
                this.shader = null,
                this.state = v["E"].for2d(),
                this._fillStyle = new w["a"],
                this._lineStyle = new w["h"],
                this._matrix = null,
                this._holeMode = !1,
                this.currentPath = null,
                this.batches = [],
                this.batchTint = -1,
                this.batchDirty = -1,
                this.vertexData = null,
                this.pluginName = "smooth",
                this._transformID = -1,
                this.tint = 16777215,
                this.blendMode = D["b"].NORMAL
            }
            clone() {
                return this.finishPoly(),
                new de(this._geometry)
            }
            set blendMode(e) {
                this.state.blendMode = e
            }
            get blendMode() {
                return this.state.blendMode
            }
            get tint() {
                return this._tint
            }
            set tint(e) {
                this._tint = e
            }
            get fill() {
                return this._fillStyle
            }
            get line() {
                return this._lineStyle
            }
            lineStyle(e=null, t=0, i=1, n=.5, a=!1) {
                return "number" === typeof e && (e = {
                    width: e,
                    color: t,
                    alpha: i,
                    alignment: n,
                    native: a
                }),
                this.lineTextureStyle(e)
            }
            lineTextureStyle(e) {
                e = Object.assign({
                    width: 0,
                    texture: v["G"].WHITE,
                    color: e && e.texture ? 16777215 : 0,
                    alpha: 1,
                    matrix: null,
                    alignment: .5,
                    native: !1,
                    cap: w["f"].BUTT,
                    join: w["g"].MITER,
                    miterLimit: 10
                }, e),
                this.currentPath && this.startPoly();
                const t = e.width > 0 && e.alpha > 0;
                return t ? (e.matrix && (e.matrix = e.matrix.clone(),
                e.matrix.invert()),
                Object.assign(this._lineStyle, {
                    visible: t
                }, e)) : this._lineStyle.reset(),
                this
            }
            startPoly() {
                if (this.currentPath) {
                    const e = this.currentPath.points
                      , t = this.currentPath.points.length;
                    t > 2 && (this.drawShape(this.currentPath),
                    this.currentPath = new N["h"],
                    this.currentPath.closeStroke = !1,
                    this.currentPath.points.push(e[t - 2], e[t - 1]))
                } else
                    this.currentPath = new N["h"],
                    this.currentPath.closeStroke = !1
            }
            finishPoly() {
                this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath),
                this.currentPath = null) : this.currentPath.points.length = 0)
            }
            moveTo(e, t) {
                return this.startPoly(),
                this.currentPath.points[0] = e,
                this.currentPath.points[1] = t,
                this
            }
            lineTo(e, t) {
                this.currentPath || this.moveTo(0, 0);
                const i = this.currentPath.points
                  , n = i[i.length - 2]
                  , a = i[i.length - 1];
                return n === e && a === t || i.push(e, t),
                this
            }
            _initCurve(e=0, t=0) {
                this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [e, t]) : this.moveTo(e, t)
            }
            quadraticCurveTo(e, t, i, n) {
                this._initCurve();
                const a = this.currentPath.points;
                return 0 === a.length && this.moveTo(0, 0),
                le.curveTo(e, t, i, n, a),
                this
            }
            bezierCurveTo(e, t, i, n, a, o) {
                return this._initCurve(),
                se.curveTo(e, t, i, n, a, o, this.currentPath.points),
                this
            }
            arcTo(e, t, i, n, a) {
                this._initCurve(e, t);
                const o = this.currentPath.points
                  , s = re.curveTo(e, t, i, n, a, o);
                if (s) {
                    const {cx: e, cy: t, radius: i, startAngle: n, endAngle: a, anticlockwise: o} = s;
                    this.arc(e, t, i, n, a, o)
                }
                return this
            }
            arc(e, t, i, n, a, o=!1) {
                if (n === a)
                    return this;
                !o && a <= n ? a += N["f"] : o && n <= a && (n += N["f"]);
                const s = a - n;
                if (0 === s)
                    return this;
                const l = e + Math.cos(n) * i
                  , r = t + Math.sin(n) * i
                  , c = this._geometry.closePointEps;
                let A = this.currentPath ? this.currentPath.points : null;
                if (A) {
                    const e = Math.abs(A[A.length - 2] - l)
                      , t = Math.abs(A[A.length - 1] - r);
                    e < c && t < c || A.push(l, r)
                } else
                    this.moveTo(l, r),
                    A = this.currentPath.points;
                return re.arc(l, r, e, t, i, n, a, o, A),
                this
            }
            beginFill(e=0, t=1, i=!1) {
                return this.beginTextureFill({
                    texture: v["G"].WHITE,
                    color: e,
                    alpha: t,
                    smooth: i
                })
            }
            beginTextureFill(e) {
                e = Object.assign({
                    texture: v["G"].WHITE,
                    color: 16777215,
                    alpha: 1,
                    matrix: null,
                    smooth: !1
                }, e),
                this.currentPath && this.startPoly();
                const t = e.alpha > 0;
                return t ? (e.matrix && (e.matrix = e.matrix.clone(),
                e.matrix.invert()),
                Object.assign(this._fillStyle, {
                    visible: t
                }, e)) : this._fillStyle.reset(),
                this
            }
            endFill() {
                return this.finishPoly(),
                this._fillStyle.reset(),
                this
            }
            drawRect(e, t, i, n) {
                return this.drawShape(new N["j"](e,t,i,n))
            }
            drawRoundedRect(e, t, i, n, a) {
                return this.drawShape(new N["k"](e,t,i,n,a))
            }
            drawCircle(e, t, i) {
                return this.drawShape(new N["a"](e,t,i))
            }
            drawEllipse(e, t, i, n) {
                return this.drawShape(new N["c"](e,t,i,n))
            }
            drawPolygon(...e) {
                let t, i = !0;
                const n = e[0];
                n.points ? (i = n.closeStroke,
                t = n.points) : t = Array.isArray(e[0]) ? e[0] : e;
                const a = new N["h"](t);
                return a.closeStroke = i,
                this.drawShape(a),
                this
            }
            drawShape(e) {
                return this._holeMode ? this._geometry.drawHole(e, this._matrix) : this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix),
                this
            }
            clear() {
                return this._geometry.clear(),
                this._lineStyle.reset(),
                this._fillStyle.reset(),
                this._boundsID++,
                this._matrix = null,
                this._holeMode = !1,
                this.currentPath = null,
                this
            }
            isFastRect() {
                const e = this._geometry.graphicsData;
                return 1 === e.length && e[0].shape.type === N["l"].RECT && !(e[0].lineStyle.visible && e[0].lineStyle.width)
            }
            _renderCanvas(e) {
                w["c"].prototype._renderCanvas.call(this, e)
            }
            _render(e) {
                this.finishPoly();
                const t = this._geometry
                  , i = e.context.supports.uint32Indices;
                t.checkInstancing(e.geometry.hasInstance, i),
                t.updateBatches(),
                t.batchable ? (this.batchDirty !== t.batchDirty && this._populateBatches(),
                this._renderBatched(e)) : (e.batch.flush(),
                this._renderDirect(e))
            }
            _populateBatches() {
                const e = this._geometry
                  , t = this.blendMode
                  , i = e.batches.length;
                this.batchTint = -1,
                this._transformID = -1,
                this.batchDirty = e.batchDirty,
                this.batches.length = i,
                this.vertexData = new Float32Array(e.points);
                for (let n = 0; n < i; n++) {
                    const i = e.batches[n]
                      , a = i.style.color
                      , o = new Float32Array(this.vertexData.buffer,4 * i.attribStart * 2,2 * i.attribSize)
                      , s = {
                        vertexData: o,
                        blendMode: t,
                        _batchRGB: Object(O["hex2rgb"])(a),
                        _tintRGB: a,
                        _texture: i.style.texture,
                        alpha: i.style.alpha,
                        worldAlpha: 1
                    };
                    this.batches[n] = s
                }
            }
            _renderBatched(e) {
                if (this.batches.length) {
                    e.batch.setObjectRenderer(e.plugins[this.pluginName]),
                    this.calculateVertices(),
                    this.calculateTints();
                    for (let t = 0, i = this.batches.length; t < i; t++) {
                        const i = this.batches[t];
                        i.worldAlpha = this.worldAlpha * i.alpha,
                        e.plugins[this.pluginName].render(i)
                    }
                }
            }
            _renderDirect(e) {
                const t = this._resolveDirectShader(e)
                  , i = this._geometry
                  , n = this.tint
                  , a = this.worldAlpha
                  , o = t.uniforms
                  , s = i.drawCalls;
                o.translationMatrix = this.transform.worldTransform,
                o.tint[0] = (n >> 16 & 255) / 255 * a,
                o.tint[1] = (n >> 8 & 255) / 255 * a,
                o.tint[2] = (255 & n) / 255 * a,
                o.tint[3] = a,
                o.resolution = e.renderTexture.current ? e.renderTexture.current.resolution : e.resolution;
                const l = e.projection.transform;
                if (l) {
                    const e = Math.sqrt(l.a * l.a + l.b * l.b);
                    o.resolution *= e
                }
                o.expand = (e.options.antialias ? 2 : 1) / o.resolution,
                e.shader.bind(t),
                e.geometry.bind(i, t),
                e.state.set(this.state);
                for (let r = 0, c = s.length; r < c; r++)
                    this._renderDrawCallDirect(e, i.drawCalls[r])
            }
            _renderDrawCallDirect(e, t) {
                const {texArray: i, type: n, size: a, start: o} = t
                  , s = i.count;
                for (let l = 0; l < s; l++)
                    e.texture.bind(i.elements[l], l);
                e.geometry.draw(n, a, o)
            }
            _resolveDirectShader(e) {
                let t = this.shader;
                const i = this.pluginName;
                if (!t) {
                    if (!Ae[i]) {
                        const t = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new N["d"],
                            resolution: 1,
                            expand: 1
                        }
                          , n = e.plugins[i]._shader.program;
                        Ae[i] = new v["C"](n,t)
                    }
                    t = Ae[i]
                }
                return t
            }
            _calculateBounds() {
                this.finishPoly();
                const e = this._geometry;
                if (!e.graphicsData.length)
                    return;
                const {minX: t, minY: i, maxX: n, maxY: a} = e.bounds;
                this._bounds.addFrame(this.transform, t, i, n, a)
            }
            containsPoint(e) {
                return this.worldTransform.applyInverse(e, de._TEMP_POINT),
                this._geometry.containsPoint(de._TEMP_POINT)
            }
            calculateTints() {
                if (this.batchTint !== this.tint) {
                    this.batchTint = this.tint;
                    const e = Object(O["hex2rgb"])(this.tint, ce);
                    for (let t = 0; t < this.batches.length; t++) {
                        const i = this.batches[t]
                          , n = i._batchRGB
                          , a = e[0] * n[0] * 255
                          , o = e[1] * n[1] * 255
                          , s = e[2] * n[2] * 255
                          , l = (a << 16) + (o << 8) + (0 | s);
                        i._tintRGB = (l >> 16) + (65280 & l) + ((255 & l) << 16)
                    }
                }
            }
            calculateVertices() {
                const e = this.transform._worldID;
                if (this._transformID === e)
                    return;
                this._transformID = e;
                const t = this.transform.worldTransform
                  , i = t.a
                  , n = t.b
                  , a = t.c
                  , o = t.d
                  , s = t.tx
                  , l = t.ty
                  , r = this._geometry.points
                  , c = this.vertexData;
                let A = 0;
                for (let d = 0; d < r.length; d += 2) {
                    const e = r[d]
                      , t = r[d + 1];
                    c[A++] = i * e + a * t + s,
                    c[A++] = o * t + n * e + l
                }
            }
            closePath() {
                const e = this.currentPath;
                return e && (e.closeStroke = !0),
                this
            }
            setMatrix(e) {
                return this._matrix = e,
                this
            }
            beginHole() {
                return this.finishPoly(),
                this._holeMode = !0,
                this
            }
            endHole() {
                return this.finishPoly(),
                this._holeMode = !1,
                this
            }
            destroy(e) {
                this._geometry.refCount--,
                0 === this._geometry.refCount && this._geometry.dispose(),
                this._matrix = null,
                this.currentPath = null,
                this._lineStyle.destroy(),
                this._lineStyle = null,
                this._fillStyle.destroy(),
                this._fillStyle = null,
                this._geometry = null,
                this.shader = null,
                this.vertexData = null,
                this.batches.length = 0,
                this.batches = null,
                super.destroy(e)
            }
            drawStar(e, t, i, n, a, o=0) {
                return this.drawPolygon(new he(e,t,i,n,a,o))
            }
        }
        de.__initStatic();
        class he extends N["h"] {
            constructor(e, t, i, n, a, o=0) {
                a = a || n / 2;
                const s = -1 * Math.PI / 2 + o
                  , l = 2 * i
                  , r = N["f"] / l
                  , c = [];
                for (let A = 0; A < l; A++) {
                    const i = A % 2 ? a : n
                      , o = A * r + s;
                    c.push(e + i * Math.cos(o), t + i * Math.sin(o))
                }
                super(c)
            }
        }
        const ge = "\nconst float FILL = 1.0;\nconst float BEVEL = 4.0;\nconst float MITER = 8.0;\nconst float ROUND = 12.0;\nconst float JOINT_CAP_BUTT = 16.0;\nconst float JOINT_CAP_SQUARE = 18.0;\nconst float JOINT_CAP_ROUND = 20.0;\n\nconst float FILL_EXPAND = 24.0;\n\nconst float CAP_BUTT = 1.0;\nconst float CAP_SQUARE = 2.0;\nconst float CAP_ROUND = 3.0;\nconst float CAP_BUTT2 = 4.0;\n\nconst float MITER_LIMIT = 10.0;\n\nprecision highp float;\nattribute vec2 aPrev;\nattribute vec2 aPoint1;\nattribute vec2 aPoint2;\nattribute vec2 aNext;\nattribute vec2 aLineStyle;\nattribute float aVertexJoint;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec4 vSignedCoord;\nvarying vec4 vColor;\nvarying vec4 vDistance;\nvarying float vType;\n\nuniform float resolution;\nuniform float expand;\n\nvec2 doBisect(vec2 norm, float len, vec2 norm2, float len2,\n    float dy, float inner) {\n    vec2 bisect = (norm + norm2) / 2.0;\n    bisect /= dot(norm, bisect);\n    vec2 shift = dy * bisect;\n    if (inner > 0.5) {\n        if (len < len2) {\n            if (abs(dy * (bisect.x * norm.y - bisect.y * norm.x)) > len) {\n                return dy * norm;\n            }\n        } else {\n            if (abs(dy * (bisect.x * norm2.y - bisect.y * norm2.x)) > len2) {\n                return dy * norm;\n            }\n        }\n    }\n    return dy * bisect;\n}\n\nvoid main(void){\n    vec2 pointA = (translationMatrix * vec3(aPoint1, 1.0)).xy;\n    vec2 pointB = (translationMatrix * vec3(aPoint2, 1.0)).xy;\n\n    vec2 xBasis = pointB - pointA;\n    float len = length(xBasis);\n    vec2 norm = vec2(xBasis.y, -xBasis.x) / len;\n\n    float type = floor(aVertexJoint / 16.0);\n    float vertexNum = aVertexJoint - type * 16.0;\n    float dx = 0.0, dy = 1.0;\n\n    float capType = floor(type / 32.0);\n    type -= capType * 32.0;\n\n    float lineWidth = aLineStyle.x * 0.5;\n    vec2 pos;\n\n    if (capType == CAP_ROUND) {\n        vertexNum += 4.0;\n        type = JOINT_CAP_ROUND;\n        capType = 0.0;\n    }\n\n    if (type == FILL) {\n        pos = pointA;\n        vDistance = vec4(0.0, -0.5, -0.5, 1.0);\n        vType = 0.0;\n    } else if (type >= FILL_EXPAND && type < FILL_EXPAND + 7.5) {\n        // expand vertices\n        float flags = type - FILL_EXPAND;\n        float flag3 = floor(flags / 4.0);\n        float flag2 = floor((flags - flag3 * 4.0) / 2.0);\n        float flag1 = flags - flag3 * 4.0 - flag2 * 2.0;\n\n        vec2 prev = (translationMatrix * vec3(aPrev, 1.0)).xy;\n\n        if (vertexNum < 0.5) {\n            pos = prev;\n        } else if (vertexNum < 1.5) {\n            pos = pointA;\n        } else {\n            pos = pointB;\n        }\n        float len2 = length(aNext);\n        vec2 bisect = (translationMatrix * vec3(aNext, 0.0)).xy;\n        if (len2 > 0.01) {\n            bisect = normalize(bisect) * len2;\n        }\n\n        vec2 n1 = normalize(vec2(pointA.y - prev.y, -(pointA.x - prev.x)));\n        vec2 n2 = normalize(vec2(pointB.y - pointA.y, -(pointB.x - pointA.x)));\n        vec2 n3 = normalize(vec2(prev.y - pointB.y, -(prev.x - pointB.x)));\n\n        if (n1.x * n2.y - n1.y * n2.x < 0.0) {\n            n1 = -n1;\n            n2 = -n2;\n            n3 = -n3;\n        }\n\n        vDistance.w = 1.0;\n        pos += bisect * expand;\n\n        vDistance = vec4(16.0, 16.0, 16.0, -1.0);\n        if (flag1 > 0.5) {\n            vDistance.x = -dot(pos - prev, n1);\n        }\n        if (flag2 > 0.5) {\n            vDistance.y = -dot(pos - pointA, n2);\n        }\n        if (flag3 > 0.5) {\n            vDistance.z = -dot(pos - pointB, n3);\n        }\n        vDistance.xyz *= resolution;\n        vType = 1.0;\n    } else if (type >= BEVEL) {\n        float dy = lineWidth + expand;\n        float inner = 0.0;\n        if (vertexNum >= 1.5) {\n            dy = -dy;\n            inner = 1.0;\n        }\n\n        vec2 base, next, xBasis2, bisect;\n        float flag = 0.0;\n        float sign2 = 1.0;\n        if (vertexNum < 0.5 || vertexNum > 2.5 && vertexNum < 3.5) {\n            next = (translationMatrix * vec3(aPrev, 1.0)).xy;\n            base = pointA;\n            flag = type - floor(type / 2.0) * 2.0;\n            sign2 = -1.0;\n        } else {\n            next = (translationMatrix * vec3(aNext, 1.0)).xy;\n            base = pointB;\n            if (type >= MITER && type < MITER + 3.5) {\n                flag = step(MITER + 1.5, type);\n                // check miter limit here?\n            }\n        }\n        xBasis2 = next - base;\n        float len2 = length(xBasis2);\n        vec2 norm2 = vec2(xBasis2.y, -xBasis2.x) / len2;\n        float D = norm.x * norm2.y - norm.y * norm2.x;\n        if (D < 0.0) {\n            inner = 1.0 - inner;\n        }\n        norm2 *= sign2;\n        float collinear = step(0.0, dot(norm, norm2));\n\n        vType = 0.0;\n        float dy2 = -0.5;\n        float dy3 = -0.5;\n\n        if (abs(D) < 0.01 && collinear < 0.5) {\n            if (type >= ROUND && type < ROUND + 1.5) {\n                type = JOINT_CAP_ROUND;\n            }\n            //TODO: BUTT here too\n        }\n\n        if (vertexNum < 3.5) {\n            if (abs(D) < 0.01) {\n                pos = dy * norm;\n            } else {\n                if (flag < 0.5 && inner < 0.5) {\n                    pos = dy * norm;\n                } else {\n                    pos = doBisect(norm, len, norm2, len2, dy, inner);\n                }\n            }\n            if (capType >= CAP_BUTT && capType < CAP_ROUND) {\n                vec2 back = -vec2(-norm.y, norm.x);\n                float extra = step(CAP_SQUARE, capType) * lineWidth;\n                if (vertexNum < 0.5 || vertexNum > 2.5) {\n                    pos += back * (expand + extra);\n                    dy2 = expand;\n                } else {\n                    dy2 = dot(pos + base - pointA, back) - extra;\n                }\n            }\n            if (type >= JOINT_CAP_BUTT && type < JOINT_CAP_SQUARE + 0.5) {\n                vec2 forward = vec2(-norm.y, norm.x);\n                float extra = step(JOINT_CAP_SQUARE, type) * lineWidth;\n                if (vertexNum < 0.5 || vertexNum > 2.5) {\n                    dy3 = dot(pos + base - pointB, forward) - extra;\n                } else {\n                    pos += forward * (expand + extra);\n                    dy3 = expand;\n                    if (capType >= CAP_BUTT) {\n                        dy2 -= expand + extra;\n                    }\n                }\n            }\n        } else if (type >= JOINT_CAP_ROUND && type < JOINT_CAP_ROUND + 1.5) {\n            if (inner > 0.5) {\n                dy = -dy;\n                inner = 0.0;\n            }\n            vec2 d2 = abs(dy) * vec2(-norm.y, norm.x);\n            if (vertexNum < 4.5) {\n                dy = -dy;\n                pos = dy * norm;\n            } else if (vertexNum < 5.5) {\n                pos = dy * norm;\n            } else if (vertexNum < 6.5) {\n                pos = dy * norm + d2;\n            } else {\n                dy = -dy;\n                pos = dy * norm + d2;\n            }\n            dy = -0.5;\n            dy2 = pos.x;\n            dy3 = pos.y;\n            vType = 2.0;\n        } else if (abs(D) < 0.01) {\n            pos = dy * norm;\n        } else {\n            if (type >= ROUND && type < ROUND + 1.5) {\n                if (inner > 0.5) {\n                    dy = -dy;\n                    inner = 0.0;\n                }\n                if (vertexNum < 4.5) {\n                    pos = doBisect(norm, len, norm2, len2, -dy, 1.0);\n                } else if (vertexNum < 5.5) {\n                    pos = dy * norm;\n                } else if (vertexNum > 7.5) {\n                    pos = dy * norm2;\n                } else {\n                    pos = doBisect(norm, len, norm2, len2, dy, 0.0);\n                    float d2 = abs(dy);\n                    if (length(pos) > abs(dy) * 1.5) {\n                        if (vertexNum < 6.5) {\n                            pos.x = dy * norm.x - d2 * norm.y;\n                            pos.y = dy * norm.y + d2 * norm.x;\n                        } else {\n                            pos.x = dy * norm2.x + d2 * norm2.y;\n                            pos.y = dy * norm2.y - d2 * norm2.x;\n                        }\n                    }\n                }\n                vec2 norm3 = normalize(norm - norm2);\n                dy = pos.x * norm3.y - pos.y * norm3.x - 3.0;\n                dy2 = pos.x;\n                dy3 = pos.y;\n                vType = 2.0;\n            } else {\n                if (type >= MITER && type < MITER + 3.5) {\n                    if (inner > 0.5) {\n                        dy = -dy;\n                        inner = 0.0;\n                    }\n                    pos = doBisect(norm, len, norm2, len2, dy, 0.0);\n                    if (length(pos) > abs(dy) * MITER_LIMIT) {\n                        type = BEVEL;\n                    } else {\n                        if (vertexNum < 4.5) {\n                            dy = -dy;\n                            pos = doBisect(norm, len, norm2, len2, dy, 1.0);\n                            dy2 = -abs(dy);\n                            dy3 = -abs(dy);\n                        } else if (vertexNum < 5.5) {\n                            pos = dy * norm;\n                        } else if (vertexNum > 6.5) {\n                            pos = dy * norm2;\n                        }\n                    }\n                }\n                if (type >= BEVEL && type < BEVEL + 1.5) {\n                    if (inner < 0.5) {\n                        dy = -dy;\n                        inner = 1.0;\n                    }\n                    vec2 norm3 = normalize((norm + norm2) / 2.0);\n                    if (vertexNum < 4.5) {\n                        pos = doBisect(norm, len, norm2, len2, dy, 1.0);\n                        dy2 = -abs(dot(pos + dy * norm, norm3));\n                    } else {\n                        dy2 = 0.0;\n                        dy = -dy;\n                        if (vertexNum < 5.5) {\n                            pos = dy * norm;\n                        } else {\n                            pos = dy * norm2;\n                        }\n                    }\n                }\n            }\n        }\n\n        pos += base;\n        vDistance = vec4(dy, dy2, dy3, lineWidth) * resolution;\n    }\n\n    gl_Position = vec4((projectionMatrix * vec3(pos, 1.0)).xy, 0.0, 1.0);\n\n    vColor = aColor * tint;\n}"
          , me = "\nvarying vec4 vColor;\nvarying vec4 vDistance;\nvarying float vType;\n\n//%forloop% %count%\n\nvoid main(void){\n    float alpha = 1.0;\n    if (vType < 0.5) {\n        float left = max(vDistance.x - 0.5, -vDistance.w);\n        float right = min(vDistance.x + 0.5, vDistance.w);\n        float near = vDistance.y - 0.5;\n        float far = min(vDistance.y + 0.5, 0.0);\n        float top = vDistance.z - 0.5;\n        float bottom = min(vDistance.z + 0.5, 0.0);\n        alpha = max(right - left, 0.0) * max(bottom - top, 0.0) * max(far - near, 0.0);\n    } else if (vType < 1.5) {\n        alpha *= max(min(vDistance.x + 0.5, 1.0), 0.0);\n        alpha *= max(min(vDistance.y + 0.5, 1.0), 0.0);\n        alpha *= max(min(vDistance.z + 0.5, 1.0), 0.0);\n    } else {\n        float dist2 = sqrt(dot(vDistance.yz, vDistance.yz));\n        float rad = vDistance.w;\n        float left = max(dist2 - 0.5, -rad);\n        float right = min(dist2 + 0.5, rad);\n        // TODO: something has to be done about artifact at vDistance.x far side\n        alpha = 1.0 - step(vDistance.x, 0.0) * (1.0 - max(right - left, 0.0));\n    }\n\n    gl_FragColor = vColor * alpha;\n}\n";
        class pe extends v["j"] {
            generateShader(e) {
                this.programCache[e] || (this.programCache[e] = new v["w"](this.vertexSrc,this.fragTemplate));
                const t = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new N["d"],
                    resolution: 1,
                    expand: 1
                };
                return new v["C"](this.programCache[e],t)
            }
        }
        class ue {
            static create(e) {
                const {vertex: t, fragment: i, vertexSize: n, geometryClass: a} = Object.assign({
                    vertex: ge,
                    fragment: me,
                    geometryClass: v["g"],
                    vertexSize: 11
                }, e);
                return class extends v["a"] {
                    constructor(e) {
                        super(e),
                        this.shaderGenerator = new pe(t,i),
                        this.geometryClass = a,
                        this.vertexSize = n
                    }
                }
            }
        }
        const be = ue.create();
        v["B"].registerPlugin("smooth", be);
        class xe extends y["Sprite"] {
            constructor() {
                super(),
                Object(j["a"])(this, "w", void 0),
                Object(j["a"])(this, "h", void 0),
                Object(j["a"])(this, "bg", void 0),
                this.bg = new de,
                this.addChild(this.bg)
            }
            setSize(e, t, i, n=10, a=!0, o, s=1) {
                this.w = e,
                this.h = t;
                const {bg: l} = this;
                l.clear(),
                "number" === typeof i ? l.beginFill(i) : l.beginFill(i[0], i[1]);
                const r = void 0 === o ? 0 : s;
                void 0 !== o && l.lineStyle(s, o),
                "boolean" === typeof a ? a ? l.drawRoundedRect(r, r, e, t, Math.min(n, t / 2 - .001)) : l.drawRect(r, r, e, t) : (l.drawRoundedRect(0, 0, e, t, Math.min(n, t / 2 - .001)),
                l.lineStyle(0),
                a[0] && l.drawRect(0, 0, n, n),
                a[1] && l.drawRect(e - n, 0, n, n),
                a[2] && l.drawRect(e - n, t - n, n, n),
                a[3] && l.drawRect(0, t - n, n, n),
                l.endFill(),
                void 0 !== o && (l.lineStyle(s, o),
                a[0] && (l.moveTo(0, -n),
                l.lineTo(0, 0),
                l.lineTo(n, 0)),
                a[1] && (l.moveTo(e - n, 0),
                l.lineTo(e, 0),
                l.lineTo(e, n)),
                a[2] && (l.moveTo(e, t - n),
                l.lineTo(e, t),
                l.lineTo(e - n, t)),
                a[3] && (l.moveTo(n, t),
                l.lineTo(0, t),
                l.lineTo(0, t - n)))),
                this.addChild(l)
            }
            draw(e, t, i, n, a, o) {
                this.setSize(e, t, i, a[0], !0, o, n)
            }
            clear() {
                this.bg.clear()
            }
        }
        var je = xe
          , Me = i("e889");
        function Ie(e, t, i) {
            return Math.round((1 - i) * e + i * t)
        }
        function Ce(e, t, i) {
            return Ie((16711680 & e) >> 16, (16711680 & t) >> 16, i) << 16 | Ie((65280 & e) >> 8, (65280 & t) >> 8, i) << 8 | Ie(255 & e, 255 & t, i)
        }
        class ye extends y["Container"] {
            constructor(...e) {
                super(...e),
                Object(j["a"])(this, "paddingX", 0),
                Object(j["a"])(this, "paddingY", 0)
            }
            getBounds(...e) {
                const t = super.getBounds(...e);
                return t.x -= this.paddingX,
                t.y -= this.paddingY,
                t.width += 2 * this.paddingX,
                t.height += 2 * this.paddingY,
                t
            }
            get width() {
                return super.width - 2 * this.paddingX
            }
            get height() {
                return super.height - 2 * this.paddingY
            }
        }
        function ve(e, t, i=!1) {
            let n, a;
            e.interactive = !0;
            const o = e=>{
                n = e.data.global.x,
                a = e.data.global.y,
                i && e.stopPropagation()
            }
              , s = e=>{
                void 0 !== n && void 0 !== a && (Math.abs(e.data.global.y - a) < 5 && Math.abs(e.data.global.x - n) < 5 && t(e),
                n = void 0,
                a = void 0)
            }
            ;
            e.on("pointerdown", o),
            e.on("pointerup", s),
            e.on("pointerupoutside", s)
        }
        class fe extends ye {
            constructor() {
                super(),
                Object(j["a"])(this, "color", 13031913),
                Object(j["a"])(this, "child", void 0),
                this.paddingX = 12,
                this.paddingY = 12,
                this.child = {
                    shadow: new je,
                    panel: new je,
                    label: new y["Text"]("Додати документ",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0,
                        align: "center"
                    }),
                    plus: new y["Sprite"](y["Texture"].from("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDggMGMyNi40OTIgMCA0OCAyMS41MDggNDggNDhzLTIxLjUwOCA0OC00OCA0OC00OC0yMS41MDgtNDgtNDggMjEuNTA4LTQ4IDQ4LTQ4em0wIDQuMTczOWMyNC4xODggMCA0My44MjYgMTkuNjM4IDQzLjgyNiA0My44MjZzLTE5LjYzOCA0My44MjYtNDMuODI2IDQzLjgyNi00My44MjYtMTkuNjM4LTQzLjgyNi00My44MjYgMTkuNjM4LTQzLjgyNiA0My44MjYtNDMuODI2em0yLjA4NyA0MS43MzloMjUuMDQzdjQuMTczOWgtMjUuMDQzdjI1LjA0M2gtNC4xNzM5di0yNS4wNDNoLTI1LjA0M3YtNC4xNzM5aDI1LjA0M3YtMjUuMDQzaDQuMTczOXoiIHN0eWxlPSJzdHJva2Utd2lkdGg6NC4xNzM5Ii8+Cjwvc3ZnPgo="))
                },
                this.child.shadow.filters = [new Me["a"]({
                    color: 2243664,
                    blur: 4,
                    distance: 3,
                    rotation: 90,
                    alpha: .3,
                    shadowOnly: !0
                })],
                this.interactive = !0,
                ve(this, e=>{
                    I.emit("showAddDocsMenu", "passport"),
                    e.disableSwap = !0
                }
                ),
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {label: e, plus: t} = this.child
                  , {rp: i} = C
                  , n = .735 * i
                  , a = i;
                this.setColor(this.currentColor || this.color),
                t.width = .1 * i,
                t.height = .1 * i,
                e.style.fontSize = .052 * i,
                t.position.set((n - t.width) / 2, a / 2 - .14 * i),
                e.position.set((n - e.width) / 2, a / 2)
            }
            setColor(e) {
                const {rp: t} = C;
                this.currentColor = e,
                this.child.panel.setSize(.735 * t, 1 * t, Ce(e, 16777215, .5), Math.floor(.03 * t), !0, Ce(e, 16777215, .5), 1),
                this.child.shadow.setSize(.735 * t * .8, t / 2, 0, Math.floor(.03 * t), !1),
                this.child.shadow.position.set(.735 * t * .1, t / 2 + .005 * t)
            }
        }
        Object(j["a"])(fe, "type", "birthday");
        class Oe extends y["Container"] {
            constructor({label: e, labelSmall: t, icon: i, spacer: n, clickHandler: a}) {
                super(),
                this.child = {
                    label: new y["Text"](e,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2
                    }),
                    labelSmall: new y["Text"](t,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 300,
                        padding: 2,
                        wordWrap: !0,
                        fill: 10396575
                    }),
                    icon: new y["Sprite"](i),
                    spacer: n ? new je : null
                },
                this.addChild(...Object.values(this.child).filter(e=>e)),
                this.interactive = !0,
                ve(this, ()=>null === a || void 0 === a ? void 0 : a(), !1)
            }
            onResize() {
                const {label: e, labelSmall: t, icon: i, spacer: n} = this.child
                  , {rp: a} = C
                  , o = .735 * a
                  , s = .051 * a
                  , l = .024 * a;
                i.width = .075 * a,
                i.height = .075 * a,
                e.style.fontSize = .032 * a,
                t.style.fontSize = .0299 * a,
                t.style.wordWrapWidth = o - 3.5 * s - i.width,
                t.style.lineHeight = .03 * a * 1.5,
                i.position.set(s, l),
                e.position.set(i.position.x + i.width + s, i.position.y),
                t.position.set(e.position.x, e.position.y + e.height + .013 * a),
                this.hitArea = new y["Rectangle"](0,0,o,this.height),
                n && (n.setSize(o, .003 * a, 13161674, !1),
                n.position.set(0, t.position.y + t.height + l))
            }
        }
        class De extends ye {
            constructor() {
                super(),
                Object(j["a"])(this, "color", 13096138),
                Object(j["a"])(this, "child", void 0),
                this.paddingX = 12,
                this.paddingY = 12,
                this.child = {
                    shadow: new je,
                    panel: new je,
                    imageTop: new y["Sprite"](y["Texture"].from("data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxLjAiIGhlaWdodD0iODguMCIgdmlld0JveD0iMCAwIDE3MS4wIDg4LjAiPgogICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iR3JhZGllbnQwIiAgeDE9IjAuMDk2OCIgeTE9IjAuMTY1NiIgeDI9IjAuNjE4OCIgeTI9IjAuMjE3NSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMSUiIHN0b3AtY29sb3I9IiM4MDgwODAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzIzMjMyMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkdyYWRpZW50MSIgIHgxPSIwLjUiIHkxPSIwLjE2NTYiIHgyPSIwLjkiIHkyPSIwLjIxNzUiID4KICAgICAgPHN0b3Agb2Zmc2V0PSIxJSIgc3RvcC1jb2xvcj0iIzIzMjMyMyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjODA4MDgwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iR3JhZGllbnQyIiAgeDE9IjAuODU1IiB5MT0iMC41IiB4Mj0iMC44NTUiIHkyPSIwLjkiPgogICAgICA8c3RvcCBvZmZzZXQ9IjElIiBzdG9wLWNvbG9yPSIjODA4MDgwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxODE4MTgiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJHcmFkaWVudDMiIHgxPSIwLjg1NSIgeTE9IjAuMiIgeDI9IjAuODU1IiB5Mj0iMC43Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIxJSIgc3RvcC1jb2xvcj0iIzgwODA4MCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMTAwJSIgc3RvcC1jb2xvcj0iIzE4MTgxOCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkdyYWRpZW50NCIgeDE9IjAuODU1IiB5MT0iMC4yIiB4Mj0iMC44NTUiIHkyPSIwLjciPgogICAgICA8c3RvcCBvZmZzZXQ9IjElIiBzdG9wLWNvbG9yPSIjODA4MDgwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxODE4MTgiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgoKICA8L2RlZnM+CiAgPGc+CiAgICA8cGF0aCBkPSJNNTguMTksNjQuODJMNTYuNDUsNjEuMDFINDYuNDFMNDQuNjcsNjQuODJINDEuMDdMNDkuNjEsNDcuODZINTMuMjNMNjEuNzksNjQuODJINTguMTlaTTQ3LjQzLDU4LjgzSDU1LjQzTDUxLjQyLDUwLjEyTDQ3LjQzLDU4LjgzWiIgZmlsbD0iIzAwMDAwMGZmIi8+CiAgICA8cGF0aCBkPSJNNzguOTEsNTguOThMODEuOTEsNjQuODJINzguMTNMNzUuNjksNTkuOTJDNzUuMzgsNTkuMzIgNzUuMTQsNTguOSA3NC45OCw1OC42NkM3NC44Miw1OC40IDc0LjU1LDU4LjE4IDc0LjE2LDU3Ljk4QzczLjc4LDU3Ljc4IDczLjI5LDU3LjY3IDcyLjY5LDU3LjY3SDY3LjQ5VjY0LjgySDY0LjA4VjQ3Ljg2SDc0LjMyQzc2LjA2LDQ3Ljg2IDc3LjQ5LDQ4LjIzIDc4LjYxLDQ4Ljk4Qzc5Ljc1LDQ5LjcyIDgwLjMxLDUwLjk0IDgwLjMxLDUyLjY0QzgwLjMxLDU0LjgxIDc5LjI2LDU2LjI4IDc3LjE0LDU3LjA1Qzc3LjgyLDU3LjM5IDc4LjQxLDU4LjA0IDc4LjkxLDU4Ljk4Wk03My41OCw1MC4wN0g2Ny40OVY1NS40Nkg3My41OEM3NS44Myw1NS40NiA3Ni45NSw1NC41NiA3Ni45NSw1Mi43NkM3Ni45NSw1MC45NyA3NS44Myw1MC4wNyA3My41OCw1MC4wN1oiIGZpbGw9IiMwMDAwMDBmZiIvPgogICAgPHBhdGggZD0iTTEwNy42OSw0Ny44NlY2NC44MkgxMDQuNDJWNTAuNjdMOTcuNTEsNjQuODJIOTQuNDRMODcuNTIsNTAuNjdWNjQuODJIODQuMjNWNDcuODZIODkuMTZMOTUuOTksNjEuOTFMMTAyLjc4LDQ3Ljg2SDEwNy42OVoiIGZpbGw9IiMwMDAwMDBmZiIvPgogICAgPHBhdGggZD0iTTEyOS45OSw0Ny44NkwxMjEuNjMsNTguMTZWNjQuODJIMTE4LjI0VjU4LjE0TDEwOS45NSw0Ny44NkgxMTMuODZMMTE5LjkzLDU1Ljk1TDEyNi4wOCw0Ny44NkgxMjkuOTlaIiBmaWxsPSIjMDAwMDAwZmYiLz4KICAgIDxwYXRoIGQ9Ik0xOS44Miw4NS43NEMxOC4yLDg3LjE0IDE1Ljc1LDg3Ljg1IDEyLjQ2LDg3Ljg1QzkuMTcsODcuODUgNi43Miw4Ny4xNCA1LjExLDg1Ljc0QzMuNSw4NC4zMyAyLjcsODIuMTEgMi43LDc5LjA3QzIuNyw3Ni4wNCAzLjUsNzMuODEgNS4xMSw3Mi4zOUM2LjcyLDcwLjk3IDkuMTcsNzAuMjYgMTIuNDYsNzAuMjZDMTUuNzcsNzAuMjYgMTguMjIsNzAuOTcgMTkuODMsNzIuMzlDMjEuNDMsNzMuODEgMjIuMjQsNzYuMDQgMjIuMjQsNzkuMDdDMjIuMjQsODIuMTEgMjEuNDMsODQuMzMgMTkuODIsODUuNzRaTTcuNjMsODMuOTZDOC42NSw4NS4wMyAxMC4yNiw4NS41NiAxMi40Niw4NS41NkMxNC42Nyw4NS41NiAxNi4yOSw4NS4wMyAxNy4zLDgzLjk2QzE4LjMyLDgyLjg4IDE4LjgzLDgxLjI1IDE4LjgzLDc5LjA2QzE4LjgzLDc2Ljg2IDE4LjMyLDc1LjIyIDE3LjMsNzQuMTVDMTYuMjksNzMuMDcgMTQuNjcsNzIuNTMgMTIuNDYsNzIuNTNDMTAuMjYsNzIuNTMgOC42NSw3My4wNyA3LjYzLDc0LjE1QzYuNjIsNzUuMjIgNi4xMSw3Ni44NiA2LjExLDc5LjA2QzYuMTEsODEuMjUgNi42Miw4Mi44OCA3LjYzLDgzLjk2WiIgZmlsbD0iIzAwMDAwMGZmIi8+CiAgICA8cGF0aCBkPSJNMzkuOTUsNzIuODNIMjguNTRWNzguMDNIMzkuNDlWODAuMjRIMjguNTRWODcuNTNIMjUuMTZWNzAuNTdIMzkuOTVWNzIuODNaIiBmaWxsPSIjMDAwMDAwZmYiLz4KICAgIDxwYXRoIGQ9Ik01OS4zMyw3MC41N0M2Mi4xOCw3MC41NyA2NC4zNCw3MS4yMiA2NS44MSw3Mi41M0M2Ny4yOSw3My44NCA2OC4wMyw3NiA2OC4wMyw3OS4wMkM2OC4wMyw4Mi4xMSA2Ny4zLDg0LjI5IDY1Ljg0LDg1LjU5QzY0LjM3LDg2Ljg4IDYyLjIsODcuNTMgNTkuMzMsODcuNTNINDkuNDFWNzAuNTdINTkuMzNaTTU5LjAzLDg1LjI0QzYxLjA4LDg1LjI0IDYyLjUzLDg0Ljc3IDYzLjM3LDgzLjgxQzY0LjIxLDgyLjg1IDY0LjYzLDgxLjI2IDY0LjYzLDc5LjA0QzY0LjYzLDc2LjgxIDY0LjIxLDc1LjIyIDYzLjM3LDc0LjI3QzYyLjUzLDczLjMyIDYxLjA5LDcyLjg1IDU5LjAzLDcyLjg1SDUyLjgyVjg1LjI0SDU5LjAzWiIgZmlsbD0iIzAwMDAwMGZmIi8+CiAgICA8cGF0aCBkPSJNODUuNjcsODEuNjlMODguNjYsODcuNTNIODQuODlMODIuNDQsODIuNjNDODIuMTQsODIuMDMgODEuOSw4MS42MSA4MS43Myw4MS4zN0M4MS41OCw4MS4xMSA4MS4zLDgwLjg5IDgwLjkyLDgwLjY5QzgwLjUzLDgwLjQ5IDgwLjA0LDgwLjM4IDc5LjQ0LDgwLjM4SDc0LjI1Vjg3LjUzSDcwLjg0VjcwLjU3SDgxLjA3QzgyLjgxLDcwLjU3IDg0LjI0LDcwLjk0IDg1LjM3LDcxLjY5Qzg2LjUsNzIuNDMgODcuMDcsNzMuNjUgODcuMDcsNzUuMzVDODcuMDcsNzcuNTIgODYuMDEsNzguOTkgODMuODksNzkuNzZDODQuNTgsODAuMSA4NS4xNyw4MC43NSA4NS42Nyw4MS42OVpNODAuMzQsNzIuNzhINzQuMjVWNzguMTdIODAuMzRDODIuNTgsNzguMTcgODMuNzEsNzcuMjcgODMuNzEsNzUuNDdDODMuNzEsNzMuNjggODIuNTgsNzIuNzggODAuMzQsNzIuNzhaIiBmaWxsPSIjMDAwMDAwZmYiLz4KICAgIDxwYXRoIGQ9Ik0xMDYuOTgsODUuNzRDMTA1LjM3LDg3LjE0IDEwMi45Miw4Ny44NSA5OS42Myw4Ny44NUM5Ni4zNCw4Ny44NSA5My44OSw4Ny4xNCA5Mi4yNyw4NS43NEM5MC42Nyw4NC4zMyA4OS44Niw4Mi4xMSA4OS44Niw3OS4wN0M4OS44Niw3Ni4wNCA5MC42Nyw3My44MSA5Mi4yNyw3Mi4zOUM5My44OSw3MC45NyA5Ni4zNCw3MC4yNiA5OS42Myw3MC4yNkMxMDIuOTMsNzAuMjYgMTA1LjM5LDcwLjk3IDEwNi45OSw3Mi4zOUMxMDguNiw3My44MSAxMDkuNCw3Ni4wNCAxMDkuNCw3OS4wN0MxMDkuNCw4Mi4xMSAxMDguNiw4NC4zMyAxMDYuOTgsODUuNzRaTTk0LjgsODMuOTZDOTUuODEsODUuMDMgOTcuNDIsODUuNTYgOTkuNjMsODUuNTZDMTAxLjg0LDg1LjU2IDEwMy40NSw4NS4wMyAxMDQuNDcsODMuOTZDMTA1LjQ4LDgyLjg4IDEwNS45OSw4MS4yNSAxMDUuOTksNzkuMDZDMTA1Ljk5LDc2Ljg2IDEwNS40OCw3NS4yMiAxMDQuNDcsNzQuMTVDMTAzLjQ1LDczLjA3IDEwMS44NCw3Mi41MyA5OS42Myw3Mi41M0M5Ny40Miw3Mi41MyA5NS44MSw3My4wNyA5NC44LDc0LjE1QzkzLjc4LDc1LjIyIDkzLjI4LDc2Ljg2IDkzLjI4LDc5LjA2QzkzLjI4LDgxLjI1IDkzLjc4LDgyLjg4IDk0LjgsODMuOTZaIiBmaWxsPSIjMDAwMDAwZmYiLz4KICAgIDxwYXRoIGQ9Ik0xMjcuMzMsNzAuNTdIMTMwLjYzVjg3LjUzSDEyNi41OUwxMTUuNTEsNzQuMzVWODcuNTNIMTEyLjIyVjcwLjU3SDExNi4wMkwxMjcuMzMsODQuMTNWNzAuNTdaIiBmaWxsPSIjMDAwMDAwZmYiLz4KICAgIDxwYXRoIGQ9Ik0xMzcuNzQsODUuMjhIMTUwLjFWODcuNTNIMTM0LjM2VjcwLjU3SDE0OS42NFY3Mi44M0gxMzcuNzRWNzcuN0gxNDkuMThWNzkuODhIMTM3Ljc0Vjg1LjI4WiIgZmlsbD0iIzAwMDAwMGZmIi8+CiAgICA8cGF0aCBkPSJNMTU5LjgsODcuODVDMTU3LjAzLDg3Ljg1IDE1NC45NSw4Ny40NSAxNTMuNTcsODYuNjVDMTUyLjE5LDg1Ljg1IDE1MS40OCw4NC41NiAxNTEuNDMsODIuNzhIMTU0LjgyQzE1NC44Miw4NC42NSAxNTYuNTUsODUuNTcgMTYwLjAxLDg1LjU2QzE2MS43MSw4NS41NiAxNjIuOTgsODUuMzQgMTYzLjg0LDg0Ljg5QzE2NC43MSw4NC40MyAxNjUuMTQsODMuNjcgMTY1LjE0LDgyLjYxQzE2NS4xNCw4MS4wMSAxNjMuODIsODAuMTEgMTYxLjE3LDc5LjkyTDE1OC4yNiw3OS43QzE1Ny44Miw3OS42NyAxNTcuNDcsNzkuNjQgMTU3LjIxLDc5LjZDMTU2Ljk0LDc5LjU3IDE1Ni41NSw3OS41MSAxNTYuMDQsNzkuNDFDMTU1LjUzLDc5LjMyIDE1NS4xMiw3OS4yMSAxNTQuOCw3OS4wOEMxNTQuNDcsNzguOTUgMTU0LjEsNzguNzYgMTUzLjY3LDc4LjUyQzE1My4yNiw3OC4yNyAxNTIuOTMsNzggMTUyLjY4LDc3LjdDMTUyLjQ1LDc3LjM5IDE1Mi4yNCw3Ny4wMSAxNTIuMDcsNzYuNTRDMTUxLjksNzYuMDcgMTUxLjgyLDc1LjU1IDE1MS44Miw3NC45OEMxNTEuODIsNzEuODMgMTU0LjU3LDcwLjI2IDE2MC4wOSw3MC4yNkMxNjIuNjcsNzAuMjYgMTY0LjY1LDcwLjYxIDE2Ni4wMiw3MS4zMUMxNjcuNCw3Mi4wMiAxNjguMTEsNzMuMTcgMTY4LjE0LDc0Ljc5SDE2NC43M0MxNjQuNzMsNzMuOTMgMTY0LjM0LDczLjMyIDE2My41Niw3Mi45N0MxNjIuNzgsNzIuNjIgMTYxLjYxLDcyLjQ0IDE2MC4wNiw3Mi40NEMxNTYuODIsNzIuNDQgMTU1LjIsNzMuMjMgMTU1LjIsNzQuODFDMTU1LjIsNzUuMTcgMTU1LjI1LDc1LjQ4IDE1NS4zNiw3NS43NUMxNTUuNDgsNzYuMDEgMTU1LjY2LDc2LjIzIDE1NS44OSw3Ni40QzE1Ni4xMyw3Ni41NiAxNTYuMzYsNzYuNzEgMTU2LjU4LDc2LjgyQzE1Ni44MSw3Ni45NCAxNTcuMDksNzcuMDMgMTU3LjQzLDc3LjFDMTU3Ljc3LDc3LjE2IDE1OC4wMyw3Ny4yIDE1OC4yMyw3Ny4yM0MxNTguNDQsNzcuMjUgMTU4LjY5LDc3LjI3IDE1OSw3Ny4yOUwxNjIuMDksNzcuNTVDMTY2LjQsNzcuOTggMTY4LjU1LDc5LjY2IDE2OC41NSw4Mi41OEMxNjguNTUsODYuMDkgMTY1LjYzLDg3Ljg1IDE1OS44LDg3Ljg1WiIgZmlsbD0iIzAwMDAwMGZmIi8+CiAgICA8cGF0aCBkPSJNOS45MiwxMy4yVjUuNDRMNC4yNSwxLjg5TDAuOTQsMTMuNzJWMTYuNTZWMTguOTJMNjEuODgsMjEuNzZMNzguNDEsMjguODZIOTIuNTlMMTA5LjEyLDIxLjc2TDE3MC4wNSwxOC45MlYxNi41NlYxMy43MkwxNjYuNzUsMS44OUwxNjEuMDgsNS40NFYxMy4yTDExMi40MywxMC40MUwxMDEuMDksMi44NEg2OS45MUw1OC41NywxMC40MUw5LjkyLDEzLjJaIiBmaWxsPSIjMDAwMDAwZmYiLz4KICAgIDxwYXRoIGQ9Ik0xMC44Niw0LjkyVjEyLjJMNTguMjYsOS40OEw2OS42MywxLjg5SDEwMS4zOEwxMTIuNzQsOS40OEwxNjAuMTMsMTIuMlY0LjkyTDE2Ny4zMiwwLjQyTDE3MSwxMy41OVYxOS44M0wxMDkuMzMsMjIuN0w5Mi43OCwyOS44MUg3OC4yMkw2MS42NywyMi43TDAsMTkuODNWMTMuNTlMMy42OCwwLjQyTDEwLjg2LDQuOTJaTTYxLjg4LDIxLjc2TDc4LjQxLDI4Ljg2SDkyLjU5TDEwOS4xMiwyMS43NkwxNzAuMDUsMTguOTJWMTMuNzJMMTY2Ljc1LDEuODlMMTYxLjA4LDUuNDRWMTMuMkwxMTIuNDMsMTAuNDFMMTAxLjA5LDIuODRINjkuOTFMNTguNTcsMTAuNDFMOS45MiwxMy4yVjUuNDRMNC4yNSwxLjg5TDAuOTQsMTMuNzJWMTguOTJMNjEuODgsMjEuNzZaIiBmaWxsPSIjODE4MTgxZmYiLz4KICAgIDxwYXRoIGQ9Ik0wLjk0LDE4LjkyTDkuOTIsMTYuNTZINjAuNDZMNjEuODgsMjEuNzZMMC45NCwxOC45MloiIGZpbGw9InVybCgjR3JhZGllbnQwKSIvPgogICAgPHBhdGggZD0iTTE3MC4wNiwxOC45MkwxNjEuMDgsMTYuNTZIMTEwLjU0TDEwOS4xMiwyMS43NkwxNzAuMDYsMTguOTJaIiBmaWxsPSJ1cmwoI0dyYWRpZW50MSkiLz4KICAgIDxwYXRoIGQ9Ik03NywxNi41Nkg5NEw5Mi41OSwyOC44Nkg3OC40MUw3NywxNi41NloiIGZpbGw9InVybCgjR3JhZGllbnQyKSIvPgogICAgPHBhdGggZD0iTTc3LDE2LjU2TDY5LjkxLDIuODRMNTguNTcsMTAuNDFMNzcsMTYuNTZaIiBmaWxsPSJ1cmwoI0dyYWRpZW50MykiLz4KICAgIDxwYXRoIGQ9Ik05NCwxNi41NkwxMDEuMDksMi44NEwxMTIuNDMsMTAuNDFMOTQsMTYuNTZaIiBmaWxsPSJ1cmwoI0dyYWRpZW50NCkiLz4KICAgIDxwYXRoIGQ9Ik02NC4yNCwxMi4zTDc3LDE2LjU2TDc1LjU4LDEzLjcyTDY3LjA4LDEwLjg4TDY0LjI0LDEyLjNaIiBmaWxsPSIjMWRlMTZiZmYiLz4KICAgIDxwYXRoIGQ9Ik0xMDYuNzYsMTIuM0w5NCwxNi41Nkw5NS40MiwxMy43MkwxMDMuOTIsMTAuODhMMTA2Ljc2LDEyLjNaIiBmaWxsPSIjMWRlMTZiZmYiLz4KICA8L2c+Cjwvc3ZnPg==", {
                        resourceOptions: {
                            scale: 2
                        }
                    })),
                    row1: new Oe({
                        label: "Донат на дрон",
                        labelSmall: "Зробити внесок через UNITED24",
                        icon: y["Texture"].from("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyLjAiIGhlaWdodD0iMzIuMCIgdmlld0JveD0iMCAwIDMyLjAgMzIuMCI+CiAgPHBhdGggZD0iTTE2LDE2bS0xNSwwYTE1LDE1IDAsMSAxLDMwIDBhMTUsMTUgMCwxIDEsLTMwIDAiIGZpbGw9IiMwMDAwMDBmZiIvPgogIDxwYXRoIGQ9Ik0xMSwxNi44ODRDMTEsMTcuMDUzIDExLjA1OSwxNy4xOTYgMTEuMTc5LDE3LjMxMUMxMS4yOTgsMTcuNDI3IDExLjQ0MywxNy40ODQgMTEuNjE0LDE3LjQ4NEgxNS4zODZMMTMuMzc3LDIzLjAwNkMxMy4yODEsMjMuMjkxIDEzLjI5MiwyMy41MjYgMTMuNDExLDIzLjcxMUMxMy41MywyMy44OTYgMTMuNjk3LDIzLjk5MiAxMy45MTMsMjRDMTQuMTM2LDI0LjAwNyAxNC4zMzcsMjMuODk2IDE0LjUxNiwyMy42NjVMMjAuNzk5LDE1LjYzNkMyMC45MzMsMTUuNDUxIDIxLDE1LjI3OCAyMSwxNS4xMTZDMjEsMTQuOTQ3IDIwLjk0MSwxNC44MDQgMjAuODIxLDE0LjY4OUMyMC43MDIsMTQuNTczIDIwLjU1NywxNC41MTYgMjAuMzg2LDE0LjUxNkgxNi42MTRMMTguNjM0LDguOTk0QzE4LjczOCw4LjcwMSAxOC43MjcsOC40NjYgMTguNiw4LjI4OUMxOC40ODEsOC4xMDQgMTguMzE0LDguMDA4IDE4LjA5OCw4QzE3Ljg4Miw3Ljk5MyAxNy42NzgsOC4xMDQgMTcuNDg0LDguMzM1TDExLjIxMiwxNi4zNTJDMTEuMDcxLDE2LjUzNyAxMSwxNi43MTQgMTEsMTYuODg0WiIgZmlsbD0iI2VjZjNlZWZmIi8+Cjwvc3ZnPgo=", {
                            resourceOptions: {
                                scale: 2
                            }
                        }),
                        spacer: !0,
                        clickHandler: ()=>I.emit("action", ["routeTo", "/app/service/army-support"])
                    }),
                    row2: new Oe({
                        label: "Військові облігації",
                        labelSmall: "Забезпечуйте стабільність економіки країни",
                        icon: y["Texture"].from("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+Cjxzdmcgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwLjQ5IC0xMTguMTIpIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguMTE4NTUgMCAwIC4xMTg1NSAxNTYuOSA5Ni40ODQpIj4KICAgPGNpcmNsZSBjeD0iLTI4Ni4yNSIgY3k9IjI4Ny43NiIgcj0iMTAxLjIyIiBzdHlsZT0iZmlsbDojMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Im0tMjg1LjcyIDIyMi4xN2MtMy4wODEyIDMuNDk2NS00Ljk1ODkgOC4wNzM1LTQuOTU4OSAxMy4wOTcgMC4xODI2IDExLjAzIDEuNTM1NSAyMi4wMzggMS42NTMgMzMuMDY2IDAuMjQ0NiAxMC4yNzctMi44MzggMTkuOTMtNi41ODYgMjkuMzQ2LTEuMjQ4OSAyLjYwMi0yLjU5OTggNS4xNDg4LTMuOTUxNiA3LjY5ODFsLTMuOTc3NC0wLjgwMDg1Yy0zLjU3ODktMC43MTU2My01LjkwNjgtNC4xOTYtNS4xOTEzLTcuNzc1NSAwLjYyNjA5LTMuMTMyMiAzLjM4MjQtNS4zMDcxIDYuNDU2OS01LjMyMTVsMS40NDYzIDAuMTU1LTMuMjI4NC0yNi45NjljLTEuMDU1Mi0xMi4wMS03LjI0OTktMjIuNTQ0LTE2LjM3NS0yOS4zOTctMS41NjgtMS4xNzc4LTMuMjI5NS0yLjI1NDYtNC45NTg5LTMuMjAzMnY5NS43ODdoMjIuMTA4YzEuNjUzMSA4Ljk3NTUgNi41OTE4IDE2Ljc5NSAxMy41MzQgMjIuMTY0IDEuNjUxMiAxLjEzODMgMy4wMzQzIDIuNjM5NiA0LjAyOTEgNC4zOTE1IDAuOTk0NzctMS43NTIgMi4zNzc5LTMuMjUzMiA0LjAyOTEtNC4zOTE1IDYuOTQxOC01LjM2OTUgMTEuODgxLTEzLjE4OSAxMy41MzQtMjIuMTY0aDIyLjEwOHYtOTUuNzg3Yy0xLjcyOTQgMC45NDg2NS0zLjM5MDggMi4wMjU0LTQuOTU4OSAzLjIwMzItOS4xMjQ3IDYuODUzNy0xNS4zMTkgMTcuMzg4LTE2LjM3NSAyOS4zOTdsLTMuMjI4NCAyNi45NjkgMS40NDYzLTAuMTU1YzMuMDc0NSAwLjAxNDQgNS44MzA4IDIuMTg5NCA2LjQ1NjkgNS4zMjE1IDAuNzE1NTMgMy41Nzk2LTEuNjEyNCA3LjA1OTktNS4xOTEzIDcuNzc1NWwtMy45Nzc0IDAuODAwODVjLTEuMzUxOC0yLjU0OTMtMi43MDI3LTUuMDk2MS0zLjk1MTYtNy42OTgxLTMuNzQ4LTkuNDE2MS02LjgzMDYtMTkuMDY5LTYuNTg2LTI5LjM0NiAwLjExNzQ5LTExLjAyNyAxLjQ3MDQtMjIuMDM1IDEuNjUyOS0zMy4wNjYgMC01LjAyMzYtMS44Nzc2LTkuNjAwNi00Ljk1ODgtMTMuMDk3em0tMzMuMDU5IDIzLjY4OGM0LjI3ODcgNS4wMjI2IDcuMTUwMyAxMS4yODEgOC4wMDY1IDE4LjE2bDIuNjYwMiAyMi4yNDJjLTMuMzg3NCAxLjY4NjctNS45NTUzIDQuNzgxLTYuOTIxOCA4LjUyNDdoLTMuNzQ1em02Ni4xMTggMHY0OC45MjdoLTMuNzQ1Yy0wLjk2NjQ0LTMuNzQzNy0zLjUzNDQtNi44MzgtNi45MjE4LTguNTI0N2wyLjY2MDItMjIuMjQyYzAuODU2Mi02Ljg3ODcgMy43Mjc4LTEzLjEzOCA4LjAwNjUtMTguMTZ6bS0zMy4wNTkgNDQuNzE2YzEuNzc2MSA1LjgxMDIgNC4yMTk2IDExLjMyNyA3LjI1NzUgMTYuNDU1LTIuODg5NSAwLjg3Nzk4LTUuNDA0NCAyLjU4NTctNy4yNTc1IDQuODgyMy0xLjg1MzEtMi4yOTY2LTQuMzY4LTQuMDA0My03LjI1NzUtNC44ODIzIDMuMDM3OS01LjEyOCA1LjQ4MTQtMTAuNjQ1IDcuMjU3NS0xNi40NTV6bS0zMy4wNTkgMTAuODI0aDMuNzQ1YzEuMTgwOCA0LjU2MzkgNC43NDMyIDguMTY5OSA5LjI3MjEgOS40Mjg4bDMuMTc2OCAwLjcyMzMyYy0wLjg1MDYzIDMuMDg0My0xLjMxNzIgNi4zMzM5LTEuMzE3MiA5LjY4NzJoLTE0Ljg3N3ptNjIuMzczIDBoMy43NDV2MTkuODM5aC0xNC44NzdjMC0zLjM1MzQtMC40NjY1Ny02LjYwMy0xLjMxNzItOS42ODcybDMuMTc2OC0wLjcyMzMyYzQuNTI4OS0xLjI1ODkgOC4wOTEzLTQuODY0OSA5LjI3Mi05LjQyODh6bS0zOS43MjMgMTEuNjc2YzQuMDEwOSAwLjU2NzAxIDcuMTAyNSAzLjk5NTcgNy4xMDI1IDguMTYzMWgtOC4yNjQ4YzAtMi44MzQ4IDAuNDE5ODUtNS41NjY3IDEuMTYyMi04LjE2MzF6bTIwLjgxNyAwYzAuNzQyMzcgMi41OTY0IDEuMTYyMiA1LjMyODMgMS4xNjIyIDguMTYzMWgtOC4yNjQ4YzAtNC4xNjc0IDMuMDkxNy03LjU5NjEgNy4xMDI2LTguMTYzMXptLTIxLjIzIDE0Ljc3Nmg3LjUxNTh2MTMuOTI0Yy0zLjY0NzUtMy44MTM5LTYuMjk3MS04LjYwMjgtNy41MTU4LTEzLjkyNHptMTQuMTI4IDBoNy41MTU4Yy0xLjIxODcgNS4zMjA4LTMuODY4MyAxMC4xMS03LjUxNTggMTMuOTI0eiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6LjMzMDU5Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K", {
                            resourceOptions: {
                                scale: 2
                            }
                        }),
                        spacer: !0,
                        clickHandler: ()=>I.emit("action", ["routeTo", "/app/service/army-obligations"])
                    }),
                    row3: new Oe({
                        label: "єВорог",
                        labelSmall: "Повідомте ЗСУ про окупантів або колаборантів",
                        icon: y["Texture"].from("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyLjAiIGhlaWdodD0iMzIuMCIgdmlld0JveD0iMCAwIDMyLjAgMzIuMCI+CiAgPHBhdGggZD0iTTE2LDBMMTYsMEExNiwxNiAwLDAgMSwzMiAxNkwzMiwxNkExNiwxNiAwLDAgMSwxNiAzMkwxNiwzMkExNiwxNiAwLDAgMSwwIDE2TDAsMTZBMTYsMTYgMCwwIDEsMTYgMHoiIGZpbGw9IiMwMDAwMDBmZiIvPgogIDxwYXRoIGQ9Ik0zMS45NjksMTdDMzEuOTksMTYuNjY5IDMyLDE2LjMzNiAzMiwxNkMzMiw3LjE2MyAyNC44MzcsMCAxNiwwQzE1LjY2NCwwIDE1LjMzMSwwLjAxIDE1LDAuMDMxVjE3SDMxLjk2OVoiIGZpbGw9IiMyM2ExMThmZiIvPgogIDxwYXRoIGQ9Ik0xNSw0aDJ2MjRoLTJ6IiBmaWxsPSIjZWNmM2VlZmYiLz4KICA8cGF0aCBkPSJNNCwxNWgyNHYyaC0yNHoiIGZpbGw9IiNlY2YzZWVmZiIvPgogIDxwYXRoIGQ9Ik0xNiwxNm0tMTIsMGExMiwxMiAwLDEgMSwyNCAwYTEyLDEyIDAsMSAxLC0yNCAwIiBmaWxsPSIjMDAwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi4wIiBzdHJva2U9IiNlY2YzZWVmZiIvPgogIDxwYXRoIGQ9Ik0xNiwxNm0tNywwYTcsNyAwLDEgMSwxNCAwYTcsNyAwLDEgMSwtMTQgMCIgZmlsbD0iIzAwMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuMCIgc3Ryb2tlPSIjZWNmM2VlZmYiLz4KPC9zdmc+Cg==", {
                            resourceOptions: {
                                scale: 2
                            }
                        }),
                        clickHandler: ()=>I.emit("action", ["routeExternal", "https://t.me/evorog_bot"])
                    })
                },
                this.child.shadow.filters = [new Me["a"]({
                    color: 2243664,
                    blur: 4,
                    distance: 3,
                    rotation: 90,
                    alpha: .3,
                    shadowOnly: !0
                })],
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {imageTop: e, row1: t, row2: i, row3: n} = this.child
                  , {rp: a} = C
                  , o = .735 * a
                  , s = .068 * a;
                this.setColor(this.currentColor || this.color),
                e.width = .425 * a,
                e.height = .22 * a,
                t.onResize(),
                i.onResize(),
                n.onResize(),
                e.position.set((o - e.width) / 2, s),
                t.position.set(0, e.position.y + e.height + .065 * a),
                i.position.set(0, t.position.y + t.height + .025 * a),
                n.position.set(0, i.position.y + i.height + .025 * a)
            }
            setColor(e) {
                const {rp: t} = C;
                this.currentColor = e;
                const i = 1;
                this.child.panel.setSize(.735 * t * i, 1 * t * i, Ce(e, 16777215, .5), Math.floor(.03 * t * i), !0, Ce(e, 16777215, .5), 1),
                this.child.shadow.setSize(.735 * t * .8, t / 2, 0, Math.floor(.03 * t), !1),
                this.child.shadow.position.set(.735 * t * .1, t / 2 + .005 * t),
                this.child.panel.scale.set(1 / i)
            }
        }
        Object(j["a"])(De, "type", "startScreen");
        class we extends ye {
            constructor({name: e, sign: t, number: i, birthday: n, photo: a}) {
                super(),
                Object(j["a"])(this, "color", 11519718),
                Object(j["a"])(this, "name", "Паспорт громадянина України <тризуб>"),
                Object(j["a"])(this, "child", void 0),
                this.paddingX = 12,
                this.paddingY = 12,
                this.child = {
                    shadow: new je,
                    panel: new je,
                    photoBorder: new je,
                    photo: new y["Sprite"](a),
                    sign: new y["Sprite"](t),
                    label: new y["Text"](this.name,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    birthday: new y["Text"]("Дата \nнародження:\n" + n,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    number: new y["Text"]("Номер: \n" + i,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    spacer: new je,
                    name: new y["Text"](e,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    dots: new y["Sprite"](y["Texture"].from("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA4IiBoZWlnaHQ9IjIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTA0IDBhMTA0IDEwNCAwIDEgMCAxMDQgMTA0QTEwNC4xMTggMTA0LjExOCAwIDAgMCAxMDQgMHptMCAxOTJhODggODggMCAxIDEgODgtODggODguMSA4OC4xIDAgMCAxLTg4IDg4em0xMi04OGExMiAxMiAwIDEgMS0xMi0xMiAxMi4wMTQgMTIuMDE0IDAgMCAxIDEyIDEyem00OCAwYTEyIDEyIDAgMSAxLTEyLTEyIDEyLjAxNCAxMi4wMTQgMCAwIDEgMTIgMTJ6bS05NiAwYTEyIDEyIDAgMSAxLTEyLTEyIDEyLjAxNCAxMi4wMTQgMCAwIDEgMTIgMTJ6IiAvPjwvc3ZnPg=="))
                },
                this.child.shadow.filters = [new Me["a"]({
                    color: 2243664,
                    blur: 4,
                    distance: 3,
                    rotation: 90,
                    alpha: .3,
                    shadowOnly: !0
                })],
                this.child.dots.interactive = !0,
                ve(this.child.dots, e=>{
                    I.emit("showContextMenu", "passport"),
                    e.disableSwap = !0
                }
                ),
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {label: e, birthday: t, number: i, photo: n, sign: a, photoBorder: o, spacer: s, name: l, dots: r} = this.child
                  , {rp: c} = C
                  , A = 11847136
                  , d = .735 * c
                  , h = .31 * c
                  , g = .4133 * c
                  , m = .005 * c
                  , p = .04 * c
                  , u = .068 * c;
                this.setColor(this.currentColor || this.color),
                o.setSize(h + 2 * m, g + 2 * m, A, 0),
                n.width = h,
                n.height = g,
                a.width = .25 * c,
                a.height = .15 * c,
                e.style.fontSize = .045 * c,
                e.style.wordWrapWidth = d - p,
                t.style.fontSize = .028 * c,
                t.style.wordWrapWidth = d / 2 - 2 * p,
                i.style.fontSize = .028 * c,
                i.style.wordWrapWidth = d / 2 - 2 * p,
                s.setSize(d - 2 * p, .005 * c, A, 0),
                l.style.fontSize = .045 * c,
                l.style.lineHeight = .055 * c * 1.05,
                r.width = .071 * c,
                r.height = .071 * c,
                e.position.set(p, u),
                o.position.set(p, e.position.y + .95 * e.height + u),
                n.position.set(o.position.x + m, o.position.y + m),
                t.position.set(n.position.x + m + h + p, e.position.y + .95 * e.height + u),
                i.position.set(n.position.x + m + h + p, t.position.y + t.height + u / 2),
                a.position.set(n.position.x + m + h + p, i.position.y + i.height + u / 2),
                s.position.set(p, n.position.y + g + u),
                l.position.set(p, s.position.y + .6 * u),
                r.position.set(d - p - r.width, c - .06 * c - r.height)
            }
            setColor(e) {
                const {rp: t} = C;
                this.currentColor = e,
                this.child.panel.setSize(.735 * t, 1 * t, Ce(e, 16777215, .5), Math.floor(.03 * t), !0, Ce(e, 16777215, .5), 1),
                this.child.shadow.setSize(.735 * t * .8, t / 2, 0, Math.floor(.03 * t), !1),
                this.child.shadow.position.set(.735 * t * .1, t / 2 + .005 * t)
            }
        }
        Object(j["a"])(we, "type", "passport"),
        Object(j["a"])(we, "renderable", !0);
        class Ne extends y["Sprite"] {
            constructor() {
                const e = document.createElement("canvas")
                  , t = e.getContext("2d");
                super(y["Texture"].from(e)),
                this.canvasData = {
                    c: e,
                    ctx: t
                }
            }
            drawGradient(e, t, i, n=0) {
                const {c: a, ctx: o} = this.canvasData;
                a.width = e,
                a.height = t;
                const s = o.createLinearGradient(0, 0, e, t);
                for (let l = 0; l < i.length; ++l)
                    s.addColorStop(1 / (i.length - 1) * l, i[l]);
                o.fillStyle = s,
                o.fillRect(0, 0, e, t),
                this.texture.update()
            }
        }
        class ke extends y["Container"] {
            constructor(e, t) {
                super(),
                Object(j["a"])(this, "textL", void 0),
                Object(j["a"])(this, "textR", void 0),
                Object(j["a"])(this, "container", void 0),
                Object(j["a"])(this, "speed", void 0),
                Object(j["a"])(this, "x", 0),
                this.textL = new y["Text"](e),
                this.textR = new y["Text"](e),
                this.container = new y["Container"],
                this.masking = new y["Sprite"](y["Texture"].WHITE),
                this.container.addChild(this.textL, this.textR),
                this.container.mask = this.masking,
                this.addChild(this.container, this.masking),
                this.speed = t,
                y["Ticker"].shared.add(this.onProgress, this)
            }
            setStyle(e, t) {
                this.textL.style = e,
                this.textR.style = e,
                this.textR.position.set(Math.ceil(this.textL.width), 0),
                this.masking.width = t,
                this.masking.height = this.textL.height
            }
            onProgress(e) {
                this.visible && (this.x += -e * this.speed,
                this.x %= Math.ceil(this.textL.width),
                this.container.position.set(this.x, 0))
            }
            destroy() {
                super.destroy(),
                y["Ticker"].shared.remove(this.onProgress, this)
            }
        }
        class Ee extends ye {
            constructor({name: e, number: t, birthday: i}) {
                super(),
                Object(j["a"])(this, "name", "Картка платника податків"),
                Object(j["a"])(this, "color", 14600149),
                Object(j["a"])(this, "child", void 0),
                this.paddingX = 12,
                this.paddingY = 12,
                this.child = {
                    shadow: new je,
                    panel: new je,
                    label: new y["Text"](this.name,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    labelSmall: new y["Text"]("РНОКПП",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    birthday: new y["Text"]("Дата народження: " + i,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    number: new y["Text"](e,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    name: new y["Text"](t,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    dots: new y["Sprite"](y["Texture"].from("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijk2LjAiIGhlaWdodD0iOTYuMCIgdmlld0JveD0iMCAwIDI0LjAgMjQuMCI+CiAgPHBhdGggZD0iTTEwLDEwaDl2OWgtOXoiIGZpbGw9IiMwMDAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjAiIHN0cm9rZT0iIzAwMDAwMGZmIi8+CiAgPHBhdGggZD0iTTYsNkgxM1Y4SDE1VjZWNEgxM0g2SDRWNlYxM1YxNUg2SDhWMTNINlY2WiIgZmlsbD0iIzAwMDAwMGZmIi8+Cjwvc3ZnPgo=")),
                    gradient: new Ne,
                    marquee: new ke("РНОКПП дійсний. Перевірено державною податковою службою  ",.5)
                },
                this.child.shadow.filters = [new Me["a"]({
                    color: 2243664,
                    blur: 4,
                    distance: 3,
                    rotation: 90,
                    alpha: .3,
                    shadowOnly: !0
                })],
                this.child.dots.interactive = !0,
                ve(this.child.dots, e=>{
                    e.disableSwap = !0
                }
                ),
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {label: e, labelSmall: t, birthday: i, number: n, name: a, dots: o, gradient: s, marquee: l} = this.child
                  , {rp: r} = C
                  , c = .735 * r
                  , A = r
                  , d = .04 * r
                  , h = .068 * r;
                this.setColor(this.currentColor || this.color),
                e.style.fontSize = .052 * r,
                e.style.wordWrapWidth = c - 2 * d,
                i.style.fontSize = .03 * r,
                i.style.wordWrapWidth = c / 2,
                i.style.lineHeight = .045 * r,
                t.style.fontSize = .03 * r,
                n.style.fontSize = .0385 * r,
                s.drawGradient(c + .005 * r, .08 * r, ["#a3ed96", "#8fcfce"]),
                l.setStyle({
                    fontFamily: "e-Ukraine",
                    fontWeight: 300,
                    fontSize: .03 * r
                }, c),
                l.speed = .001 * r,
                a.style.fontSize = .07 * r,
                a.style.lineHeight = 1.3 * .07 * r,
                o.width = .075 * r,
                o.height = .075 * r,
                e.position.set(d, h),
                t.position.set(d, e.position.y + e.height + .025 * r),
                n.position.set(d, t.position.y + t.height + .06 * r),
                i.position.set(d, n.position.y + n.height + .045 * r),
                a.position.set(d, A - h - a.height),
                o.position.set(a.position.x + a.width + d, a.position.y + (a.height - o.height) / 2),
                s.position.set(0, a.position.y - s.height - .05 * r),
                l.position.set(0, s.position.y + (s.height - l.height) / 2)
            }
            setColor(e, t) {
                const {rp: i} = C;
                this.currentColor = e,
                this.child.panel.setSize(.735 * i, 1 * i, Ce(e, 16777215, .5), Math.floor(.03 * i), !0, Ce(e, 16777215, .5), 1),
                this.child.shadow.setSize(.735 * i * .8, i / 2, 0, Math.floor(.03 * i), !1),
                this.child.shadow.position.set(.735 * i * .1, i / 2 + .005 * i),
                this.child.marquee.visible != t && (this.child.marquee.x = 0),
                this.child.marquee.visible = t,
                this.child.gradient.visible = t
            }
        }
        Object(j["a"])(Ee, "type", "rnkopp"),
        Object(j["a"])(Ee, "renderable", !0);
        class Le extends ye {
            constructor({name: e, number: t, birthday: i, photo: n}) {
                super(),
                Object(j["a"])(this, "name", "єДокумент"),
                Object(j["a"])(this, "color", 9158640),
                Object(j["a"])(this, "child", void 0),
                this.paddingX = 12,
                this.paddingY = 12,
                this.child = {
                    shadow: new je,
                    panel: new je,
                    photoBorder: new je,
                    photo: new y["Sprite"](n),
                    label: new y["Text"]("єДокумент 🪖",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    birthday: new y["Text"]("Дата народження: " + i,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    number: new y["Text"]("РНОКПП: \n" + t,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    name: new y["Text"](e,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        wordWrap: !0
                    }),
                    dots: new y["Sprite"](y["Texture"].from("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA4IiBoZWlnaHQ9IjIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTA0IDBhMTA0IDEwNCAwIDEgMCAxMDQgMTA0QTEwNC4xMTggMTA0LjExOCAwIDAgMCAxMDQgMHptMCAxOTJhODggODggMCAxIDEgODgtODggODguMSA4OC4xIDAgMCAxLTg4IDg4em0xMi04OGExMiAxMiAwIDEgMS0xMi0xMiAxMi4wMTQgMTIuMDE0IDAgMCAxIDEyIDEyem00OCAwYTEyIDEyIDAgMSAxLTEyLTEyIDEyLjAxNCAxMi4wMTQgMCAwIDEgMTIgMTJ6bS05NiAwYTEyIDEyIDAgMSAxLTEyLTEyIDEyLjAxNCAxMi4wMTQgMCAwIDEgMTIgMTJ6IiAvPjwvc3ZnPg==")),
                    gradient: new Ne,
                    marquee: new ke("Документ діє під час воєнного стану. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо, А ми нашу славну Україну, гей, гей, розвеселимо! ",.5)
                },
                this.child.shadow.filters = [new Me["a"]({
                    color: 2243664,
                    blur: 4,
                    distance: 3,
                    rotation: 90,
                    alpha: .5,
                    shadowOnly: !0
                })],
                this.child.dots.interactive = !0,
                ve(this.child.dots, e=>{
                    I.emit("showContextMenu", "edoc"),
                    e.disableSwap = !0
                }
                ),
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {label: e, birthday: t, number: i, photo: n, photoBorder: a, name: o, dots: s, gradient: l, marquee: r} = this.child
                  , {rp: c} = C
                  , A = 11261695
                  , d = .735 * c
                  , h = .31 * c
                  , g = .4133 * c
                  , m = .005 * c
                  , p = .04 * c
                  , u = .068 * c;
                this.setColor(this.currentColor || this.color),
                a.setSize(h + 2 * m, g + 2 * m, A, 0),
                n.width = h,
                n.height = g,
                e.style.fontSize = .045 * c,
                e.style.wordWrapWidth = d - 2 * p,
                t.style.fontSize = .028 * c,
                t.style.wordWrapWidth = d / 2 - 2 * p,
                i.style.fontSize = .028 * c,
                i.style.wordWrapWidth = d / 2 - 2 * p,
                l.drawGradient(d + .008 * c, .08 * c, ["#5f83f2", "#b1fcde"]),
                r.setStyle({
                    fontFamily: "e-Ukraine",
                    fontWeight: 300,
                    fontSize: .03 * c - 1
                }, d),
                r.speed = .001 * c,
                o.style.fontSize = .045 * c,
                o.style.lineHeight = .055 * c * 1.05,
                s.width = .071 * c,
                s.height = .071 * c,
                e.position.set(p, u),
                a.position.set(p, e.position.y + .08 * c + u),
                n.position.set(a.position.x + m, a.position.y + m),
                t.position.set(n.position.x + m + h + p, e.position.y + .08 * c + u),
                i.position.set(n.position.x + m + h + p, t.position.y + t.height + .022 * c),
                l.position.set(0, n.position.y + g + .02 * c),
                r.position.set(0, n.position.y + g + .02 * c + (l.height - r.height) / 2),
                o.position.set(p, l.position.y + l.height + u / 2),
                s.position.set(d - p - s.width, c - .06 * c - s.height)
            }
            setColor(e, t) {
                const {rp: i} = C;
                this.currentColor = e;
                const n = t ? 16708757 : Ce(e, 16777215, .5);
                this.child.panel.setSize(.735 * i, 1 * i, n, Math.floor(.03 * i), !0, n, 2),
                this.child.shadow.setSize(.735 * i * .8, i / 2, 0, Math.floor(.03 * i), !1),
                this.child.shadow.position.set(.735 * i * .1, i / 2 + .005 * i),
                this.child.marquee.visible != t && (this.child.marquee.x = 0),
                this.child.marquee.visible = t,
                this.child.gradient.visible = t
            }
        }
        Object(j["a"])(Le, "type", "eDoc"),
        Object(j["a"])(Le, "renderable", !0);
        class Ve extends y["Container"] {
            constructor({name: e}) {
                super(),
                Object(j["a"])(this, "child", void 0),
                Object(j["a"])(this, "speed", .045),
                Object(j["a"])(this, "progress", 0),
                this.child = {
                    label: new y["Text"](e,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 300,
                        padding: 2,
                        wordWrap: !0
                    }),
                    labelSmall: new y["Text"]("Завантаження...",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 300,
                        padding: 2,
                        wordWrap: !0
                    }),
                    gradient: new Ne
                },
                this.child.gradient.mask = new w["c"],
                this.addChild(this.child.gradient.mask),
                this.addChild(...Object.values(this.child)),
                y["Ticker"].shared.add(this.onProgress, this)
            }
            onResize() {
                const {gradient: e, label: t, labelSmall: i} = this.child
                  , {rp: n} = C
                  , a = .735 * n
                  , o = .04 * n;
                e.drawGradient(.752 * n, .016 * n, ["#1982d2", "#bcabdf", "#ecb6b6"]),
                t.style.fontSize = .052 * n,
                t.style.wordWrapWidth = a - o,
                i.style.fontSize = .03 * n,
                e.position.set(-.5, -2),
                t.position.set(o, .05 * n),
                i.position.set(o, .235 * n)
            }
            onProgress() {
                this.progressInfo && (this.progress += this.speed,
                this.progress >= this.progressInfo.runTo && (this.progressInfo.callback(),
                this.progressInfo = null,
                this.progress = 0),
                this.child.gradient.mask.clear().beginFill().drawRect(0, 0, this.child.gradient.width * (this.progress % 1), this.child.gradient.height).endFill())
            }
            destroy() {
                super.destroy(),
                y["Ticker"].shared.remove(this.onProgress, this)
            }
            runProgress(e, t=1) {
                this.progressInfo = {
                    runTo: t,
                    callback: e
                },
                this.progress = 0
            }
        }
        const Te = "QR-КОД ДІЯТИМЕ 3 ХВ"
          , Ge = "ШТРИХКОД ДІЯТИМЕ 3 ХВ";
        class Be extends y["Container"] {
            constructor({qrButtons: e, color: t, qr: i, barcode: n}) {
                super(),
                Object(j["a"])(this, "child", void 0),
                Object(j["a"])(this, "selected", "qr"),
                this.qrButtons = e,
                this.color = t,
                this.qr = i,
                this.child = {
                    labelQR: new y["Text"](Te,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 500,
                        padding: 2,
                        fill: 9805225,
                        fontSize: 8
                    }),
                    labelBar: new y["Text"](Ge,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 500,
                        padding: 2,
                        fill: 9805225,
                        fontSize: 8
                    }),
                    buttonBackPanel: new je,
                    imageQR: new y["Sprite"](i),
                    imageBar: new y["Sprite"](n),
                    qrButton: new y["Sprite"],
                    labelQRButton: new y["Text"]("QR-код",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 300,
                        padding: 2
                    }),
                    barButton: new y["Sprite"],
                    labelBarButton: new y["Text"]("Штрихкод",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 300,
                        padding: 2
                    })
                },
                ve(this.child.qrButton, e=>{
                    this.selected = "qr",
                    this.onSelected(),
                    e.stopPropagation()
                }
                , !0),
                ve(this.child.labelQRButton, e=>{
                    this.selected = "qr",
                    this.onSelected(),
                    e.stopPropagation()
                }
                , !0),
                ve(this.child.barButton, e=>{
                    this.selected = "barcode",
                    this.onSelected(),
                    e.stopPropagation()
                }
                , !0),
                ve(this.child.labelBarButton, e=>{
                    this.selected = "barcode",
                    this.onSelected(),
                    e.stopPropagation()
                }
                , !0),
                this.addChild(...Object.values(this.child))
            }
            onSelected() {
                this.child.qrButton.texture = "qr" == this.selected ? this.qrButtons.qr_black : this.qrButtons.qr_white,
                this.child.barButton.texture = "qr" == this.selected ? this.qrButtons.barcode_white : this.qrButtons.barcode_black;
                let e = "qr" == this.selected ? this.child.barButton : this.child.qrButton;
                this.child.buttonBackPanel.position.set(e.x, e.y),
                this.child.labelQR.visible = this.child.imageQR.visible = "qr" == this.selected,
                this.child.labelBar.visible = this.child.imageBar.visible = !this.child.imageQR.visible
            }
            onResize() {
                const {labelQR: e, labelBar: t, labelBarButton: i, labelQRButton: n, barButton: a, qrButton: o, buttonBackPanel: s, imageQR: l, imageBar: r} = this.child
                  , {rp: c} = C
                  , A = .735 * c
                  , d = c
                  , h = .04 * c
                  , g = .068 * c;
                e.style.fontSize = .02 * c,
                t.style.fontSize = .02 * c,
                l.width = .53 * c,
                l.height = l.width,
                r.scale.set(.0012 * c),
                n.style.fontSize = .029 * c,
                i.style.fontSize = .029 * c,
                a.width = .095 * c,
                a.height = .095 * c,
                o.width = .095 * c,
                o.height = .095 * c,
                s.setSize(.095 * c, .095 * c, this.color, .03 * c),
                n.position.set(A / 2 - 1.5 * h - n.width, d - .105 * c),
                i.position.set(A / 2 + 1.2 * h, d - .105 * c),
                o.position.set(n.x + (n.width - o.width) / 2, i.y - .115 * c),
                a.position.set(i.x + (i.width - a.width) / 2, i.y - .115 * c),
                l.position.set((A - l.width) / 2, (d - (d - o.y) - l.height) / 2 + .03 * c),
                e.position.set(l.position.x, l.position.y - g),
                r.position.set((A - r.width) / 2, (d - (d - o.y) - r.height) / 2 + .05 * c),
                t.position.set(r.position.x, r.position.y - g),
                this.onSelected()
            }
        }
        const Se = "QR-КОД ДІЯТИМЕ 3 ХВ";
        class ze extends y["Container"] {
            constructor({color: e, qr: t, showText: i}) {
                super(),
                Object(j["a"])(this, "child", void 0),
                Object(j["a"])(this, "selected", "qr"),
                this.color = e,
                this.qr = t,
                this.child = {
                    labelQR: new y["Text"](Se,{
                        fontFamily: "e-Ukraine",
                        fontWeight: 500,
                        padding: 2,
                        fill: 9805225,
                        fontSize: 8
                    }),
                    imageQR: new y["Sprite"](t)
                },
                !1 === i && (this.child.labelQR.visible = !1),
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {labelQR: e, imageQR: t} = this.child
                  , {rp: i} = C
                  , n = .735 * i
                  , a = i
                  , o = .068 * i;
                e.style.fontSize = .02 * i,
                t.width = .53 * i,
                t.height = .53 * i,
                e.position.set((n - t.width) / 2, (a - (t.height + o + e.height)) / 2),
                t.position.set(e.position.x, e.position.y + o)
            }
        }
        class Ze extends y["Container"] {
            constructor({color: e}) {
                super(),
                Object(j["a"])(this, "child", void 0),
                this.color = e,
                this.child = {
                    panel: new je,
                    text: new y["Text"]("Коди для перевірки\nне завантажено",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        align: "center"
                    }),
                    buttonPanel: new je,
                    buttonText: new y["Text"]("Спробувати ще раз",{
                        fontFamily: "e-Ukraine",
                        fontWeight: 400,
                        padding: 2,
                        align: "center"
                    })
                },
                this.child.buttonText.interactive = !0,
                ve(this.child.buttonText, e=>{
                    e.disableSwap = !0
                }
                ),
                this.addChild(...Object.values(this.child))
            }
            onResize() {
                const {panel: e, text: t, buttonPanel: i, buttonText: n} = this.child
                  , {rp: a} = C
                  , o = .735 * a
                  , s = a
                  , l = .06 * a
                  , r = .05 * a
                  , c = Ce(this.color, 16777215, .35);
                t.style.fontSize = .039 * a,
                t.style.lineHeight = .05 * a,
                n.style.fontSize = .031 * a,
                e.setSize(o - 2 * l, s - 2 * l, c, !1),
                i.setSize(n.width + 2 * r, n.height + r, c, n.height + r, !0, 0, .005 * a),
                e.position.set(l, l),
                t.position.set((o - t.width) / 2, (s - t.height) / 2),
                i.position.set((o - i.w) / 2, t.position.y + t.height + l),
                n.position.set(i.position.x + r, i.position.y + r / 2)
            }
        }
        class Re extends ye {
            constructor({name: e, color: t, qrButtons: i, qr: n, barcode: a, onlyQR: o, qrInfoText: s, selectedColor: l}) {
                super(),
                Object(j["a"])(this, "child", void 0),
                Object(j["a"])(this, "color", void 0),
                this.paddingX = 12,
                this.paddingY = 12,
                this.color = t,
                this.selectedColor = l,
                this.child = {
                    shadow: new je,
                    panel: new je,
                    qrLoading: new Ve({
                        name: e
                    }),
                    qrLoaded: o ? new ze({
                        qr: n,
                        color: t,
                        showText: s
                    }) : new Be({
                        qrButtons: i,
                        color: t,
                        qr: n,
                        barcode: a
                    }),
                    qrOffline: new Ze({
                        color: t
                    })
                },
                this.onlyQR = o,
                this.child.shadow.filters = [new Me["a"]({
                    color: 2243664,
                    blur: 4,
                    distance: 3,
                    rotation: 90,
                    alpha: .3,
                    shadowOnly: !0
                })],
                this.child.qrLoading.visible = !1,
                this.child.qrOffline.visible = !1,
                this.addChild(...Object.values(this.child))
            }
            onFlipped() {
                if (this.offline_enabled)
                    return this.child.qrLoading.visible = !1,
                    this.child.qrLoaded.visible = this.onlyQR,
                    void (this.child.qrOffline.visible = !this.onlyQR);
                this.child.qrLoading.visible = !0,
                this.child.qrLoaded.visible = !1,
                this.child.qrLoading.runProgress(()=>{
                    this.child.qrLoading.visible = !1,
                    this.child.qrLoaded.visible = !0
                }
                , 1)
            }
            onResize() {
                const {qrLoading: e, qrLoaded: t, qrOffline: i} = this.child;
                this.setColor(this.currentColor || this.color),
                e.onResize(),
                t.onResize(),
                i.onResize()
            }
            setColor(e, t) {
                const {rp: i} = C;
                this.currentColor = e,
                this.child.panel.setSize(.735 * i, i, t && this.selectedColor ? this.selectedColor : Ce(e, 16777215, .5), Math.floor(.03 * i), !0, t && this.selectedColor ? this.selectedColor : Ce(e, 16777215, .5), 1),
                this.child.shadow.setSize(.735 * i * .8, i / 2, 0, Math.floor(.03 * i), !1),
                this.child.shadow.position.set(.735 * i * .1, i / 2 + .005 * i)
            }
            setOfflineMode(e) {
                this.offline_enabled = e
            }
        }
        Object(j["a"])(Re, "type", "qr");
        const Pe = "\nprecision mediump float;\n\nvarying vec3 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\nuniform float rotationProgress;\n\n\nuniform vec4 filterArea;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord.xy / vTextureCoord.z );\n}\n"
          , Ye = "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nuniform vec4 filterClamp;\n\nuniform float rotationProgress;\n\nvarying vec3 vTextureCoord;\n\nuniform vec4 filterArea;\n\nvoid main(void)\n{\n\n    float progress = abs(rotationProgress) ;\n\n    vec2 normalizedCoords = vec2( \n                                ( float( aTextureCoord.x > 0.1 ) - 0.5 ) * 2.0 * sign(rotationProgress), \n                                ( float( aTextureCoord.y > 0.1 ) - 0.5 ) * 2.0\n                            );\n\n    float heightScew = 0.35;\n\n    float width = outputFrame[2];\n    float height = outputFrame[3];\n    \n    // aVertexPosition.x - normalizedCoords.x * width / 2.0 * rotationProgress\n    // aVertexPosition.y - normalizedCoords.x * normalizedCoords.y * ( height * heightScew ) * rotationProgress /2.0\n\n\n    // float heightL = height - ( height * heightScew ) * rotationProgress;\n    // float heightR = height + ( height * heightScew ) * rotationProgress;\n    // float widthB = width  * ( 1 -  rotationProgress);\n\n    // float distance = sqrt( pow( (heightL - (hightL - heightR) / 2) , 2) - widthB * widthB );\n\n    float q = \n        1.0 +\n        ( height - normalizedCoords.x *  ( height * heightScew ) * progress  ) /\n        ( height + normalizedCoords.x *  ( height * heightScew ) * progress  )  ;\n\n    \n\n\n    gl_Position = vec4((projectionMatrix * vec3( aVertexPosition.x - normalizedCoords.x * sign(rotationProgress) * width / 2.0 * progress , aVertexPosition.y - normalizedCoords.x * normalizedCoords.y * ( height * heightScew ) * progress / 2.0 , 1.0)).xy, 0.0, 1.0);\n    // gl_Position = vec4((projectionMatrix * vec3( aVertexPosition.x, aVertexPosition.y  , 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = vec3(aTextureCoord.x,aTextureCoord.y ,1.0) * q ;\n}\n";
        class Ue extends v["m"] {
            constructor() {
                super(Ye, Pe),
                this.resolution = 2,
                this.setRotation(0),
                window.a || (window.a = this)
            }
            setRotation(e) {
                this.uniforms.rotationProgress = e
            }
            setDeg(e) {
                this.uniforms.rotationProgress = e % 2 >= 1 ? e % 1 - 1 : e % 1
            }
            getRotation() {
                return this.uniforms.rotationProgress
            }
        }
        const {Container: We} = i("22a2")
          , {default: Qe} = i("08d9")
          , Fe = 400
          , Je = new Ue;
        class He extends We {
            constructor(e, t, i=console.log) {
                super(),
                Object(j["a"])(this, "flipped", !1),
                Object(j["a"])(this, "locked", !1),
                Object(j["a"])(this, "onFlip", void 0),
                Object(j["a"])(this, "front", void 0),
                Object(j["a"])(this, "back", void 0),
                this.front = e,
                this.back = t,
                this.onFlip = i,
                this.color = this.front.color,
                this.addChild(e, t),
                this.interactive = !0,
                ve(this, e=>this.onClick(!0, e)),
                this.forceFlipHandler = ()=>{
                    this.interactive && this.onClick()
                }
                ,
                I.on("rotateAllowed", this.forceFlipHandler)
            }
            onClick(e=!0, t) {
                var i;
                if (null !== t && void 0 !== t && t.disableSwap)
                    return void (t.disableSwap = !1);
                if (this.locked)
                    return;
                this.locked = !0;
                let n = !1;
                null === (i = this.onFlip) || void 0 === i || i.call(this),
                this.front.filters = [Je],
                this.back.filters = [Je],
                Qe(t=>{
                    if (!n && t >= Fe / 2) {
                        var i;
                        this.flipped = !this.flipped,
                        this.front.scale.x = 1,
                        this.back.scale.x = 1,
                        this.onResize(),
                        n = !0;
                        const t = this.flipped ? this.back : this.front;
                        e && t.setColor(t.currentColor, e),
                        null === (i = t.onFlipped) || void 0 === i || i.call(t)
                    }
                    const a = this.flipped ? this.back : this.front;
                    return a.filters[0].setDeg(Math.sin(1.5 * Math.PI + Math.PI * Math.min(1, t / Fe)) + 1),
                    t >= Fe && (this.locked = !1,
                    this.front.filters = [],
                    this.back.filters = [],
                    !0)
                }
                )
            }
            onResize() {
                var e, t, i, n;
                null === (e = (t = this.front).onResize) || void 0 === e || e.call(t),
                null === (i = (n = this.back).onResize) || void 0 === i || i.call(n),
                this.front.visible = !this.flipped,
                this.back.visible = this.flipped,
                this.front.x = this.front.width / 2,
                this.back.x = this.back.width / 2,
                this.front.pivot.set(this.front.width / 2, this.front.pivot.y),
                this.back.pivot.set(this.back.width / 2, this.back.pivot.y)
            }
            setColor(e, t) {
                this.back.setColor(e, t),
                this.front.setColor(e, t),
                0 == t && this.flipped && this.onClick(t),
                this.interactive = t
            }
            setOfflineMode(e) {
                var t, i, n, a;
                null === (t = (i = this.front).setOfflineMode) || void 0 === t || t.call(i, e),
                null === (n = (a = this.back).setOfflineMode) || void 0 === n || n.call(a, e)
            }
        }
        var Xe = i("d055")
          , Ke = i.n(Xe)
          , _e = i("62c5")
          , qe = i.n(_e)
          , $e = i("0342")
          , et = i.n($e)
          , tt = i("bf2b")
          , it = i.n(tt)
          , nt = i("4fc0")
          , at = i.n(nt)
          , ot = i("46f8")
          , st = i.n(ot)
          , lt = i("6892")
          , rt = i.n(lt);
        class ct extends y["Loader"] {
            constructor() {
                super(),
                Object(j["a"])(this, "docs", [fe, De, we, Le, Ee]),
                Object(j["a"])(this, "assets", {
                    qr_white: it.a,
                    qr_black: at.a,
                    barcode_white: st.a,
                    barcode_black: rt.a
                }),
                Object(j["a"])(this, "docsData", void 0),
                Object(j["a"])(this, "loadPromise", void 0)
            }
            async generateDocuments(e=!1) {
                const t = await this.loadPromise;
                if (!e && this.componentsCache)
                    return this.componentsCache;
                e && (this.docsData = e);
                const i = this.docsData.filter(e=>!!this.getDocumentComponent(e.type))
                  , n = i.map(e=>e.renewed ? "Дані оновлено " + e.renewed : "")
                  , a = i.map(e=>{
                    let i = e.type;
                    switch (i) {
                    case "startScreen":
                        return new De;
                    case "birthday":
                        return new fe;
                    default:
                        {
                            let n = this.getDocumentComponent(i)
                              , a = new n({
                                name: e.name,
                                number: e.number,
                                birthday: e.birhday,
                                photo: t.photo,
                                sign: t.signature
                            })
                              , o = new Re({
                                name: a.name,
                                color: a.color,
                                selectedColor: e.selectedColor,
                                qrInfoText: e.qrInfoText,
                                qrButtons: {
                                    qr_white: t.qr_white,
                                    qr_black: t.qr_black,
                                    barcode_white: t.barcode_white,
                                    barcode_black: t.barcode_black
                                },
                                onlyQR: e.onlyQR,
                                qr: t[i + "_qr"],
                                barcode: t[i + "_barcode"]
                            });
                            return new He(a,o)
                        }
                    }
                }
                );
                return this.componentsCache = {
                    components: a,
                    renewedInfo: n
                },
                await this.prerenderDocuments(),
                this.componentsCache
            }
            async prerenderDocuments(e=!1) {
                const {components: t} = await this.generateDocuments(e)
                  , i = 400
                  , n = Object(y["autoDetectRenderer"])();
                if (!e && this.prerenderTextures)
                    return this.prerenderTextures;
                this.prerenderTextures = {};
                let a = C.rp;
                C.rp = i;
                for (let s of t) {
                    var o;
                    const e = (null === s || void 0 === s || null === (o = s.front) || void 0 === o ? void 0 : o.constructor) || s.constructor;
                    if (!e.renderable)
                        continue;
                    const t = y["RenderTexture"].create({
                        width: .735 * i,
                        height: i
                    });
                    null === s || void 0 === s || s.onResize(),
                    null === s || void 0 === s || s.setColor(s.color, 1),
                    n.render(s, t),
                    this.prerenderTextures[e.type] = n.extract.canvas(new y["Sprite"](t)).toDataURL("png", 100)
                }
                return C.rp = a,
                this.prerenderTextures
            }
            reset() {
                super.reset(),
                this.prerenderTextures = void 0,
                this.componentsCache = void 0,
                this.docsData = void 0,
                this.loadPromise = void 0
            }
            loadData(e) {
                return this.reset(),
                this.docsData = e,
                this.loadPromise = Promise.all([this.loadFont("e-Ukraine", {
                    weight: 300,
                    color: "black"
                }), this.loadFont("e-Ukraine", {
                    weight: 400,
                    color: "black"
                }), this.loadPIXIAssets({
                    photo: this.getDocument("passport").photo,
                    signature: this.getDocument("passport").sign,
                    ...this.assets
                }), ...["passport", "eDoc", "rnkopp"].map(e=>[e, this.getDocument(e)]).filter(e=>e[1]).map(([e,t])=>t.getQr().then(t=>this.generateQr(e + "_qr", t))), ...["passport", "eDoc", "rnkopp"].map(e=>[e, this.getDocument(e)]).filter(e=>e[1]).map(([e,t])=>this.generateBarCode(e + "_barcode", t.barcode))]).then(e=>Object.assign({}, ...e.filter(e=>e))).then(e=>{
                    const t = e.photo
                      , i = .31 / .4133
                      , n = Math.min(t.width, t.height * i)
                      , a = n / i;
                    return e.photo = new y["Texture"](t,new y["Rectangle"]((t.width - n) / 2,(t.height - a) / 2,n,a)),
                    e
                }
                ),
                this.loadPromise
            }
            async loadCheck() {
                if (!this.loadPromise)
                    throw Error("Data didnt provided yet");
                return this.loadPromise
            }
            isLoadDataProvided() {
                return !!this.loadPromise
            }
            async loadPIXIAssets(e) {
                for (let t in e)
                    this.add(t, e[t]);
                return new Promise(t=>{
                    this.load(()=>{
                        let i = {};
                        for (let t in e) {
                            var n;
                            i[t] = null === (n = this.resources[t]) || void 0 === n ? void 0 : n.texture
                        }
                        t(i)
                    }
                    )
                }
                )
            }
            async generateQr(e, t) {
                const i = await Ke.a.toDataURL(t, {
                    margin: 0,
                    errorCorrectionLevel: "H",
                    color: {
                        dark: "#000000",
                        light: "#0000"
                    }
                }).catch(e=>{
                    console.error(e)
                }
                );
                return {
                    [e]: y["Texture"].from(i)
                }
            }
            async generateBarCode(e, t) {
                let i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                qe()(i, (t + "").substr(0, 13), {
                    background: "transparent",
                    format: "ITF14",
                    height: 100,
                    font: "monospace",
                    xmlDocument: document,
                    margin: 1
                });
                let n = "data:image/svg+xml;base64," + btoa((new XMLSerializer).serializeToString(i));
                return {
                    [e]: y["Texture"].from(n, {
                        resourceOptions: {
                            scale: 2
                        }
                    })
                }
            }
            async loadFont(e, t={}) {
                const i = new et.a(e,t);
                return i.load().then(t=>({
                    [e]: t
                }))
            }
            getDocument(e) {
                return this.docsData.filter(t=>t.type == e)[0]
            }
            getDocumentComponent(e) {
                return this.docs.filter(t=>t.type == e)[0]
            }
        }
        const At = new ct
          , dt = "https://fundocs.net"
          , ht = "HC1:\n    please do not use this certificate in real life\n    we are not responsible for illegal actions performed using this application\n    it was created solely as a joke.";
        var gt = Object(x["a"])({
            state: {
                password: "0",
                loaded: !1,
                offline: !1,
                auth: !1,
                color: "AFC6E6",
                wm: !1,
                nosign: !1,
                topInfo: "",
                lastLoginError: void 0,
                colorBottom: void 0,
                componentStateStoreWorkaround: {
                    scroll: 0,
                    column: !0
                },
                documents: [{
                    color: "C7D4CA",
                    type: "startScreen"
                }, {
                    type: "passport",
                    sortable: !0,
                    name: "Абдурозик Валерий Альбертович",
                    birhday: "10.01.2020",
                    photo: "/img/example_photo.jpg",
                    sign: "/img/example_signature.png",
                    number: "004324401",
                    color: "AFC6E6",
                    renewed: "10.01.2020 o 01:21",
                    barcode: "1531628700005",
                    cords: "Kyiv is capital of USA\nyes",
                    regPlace: "Якась довга адреса, Житомир, 1000-7, 2342 234,342,234,234",
                    regDate: "24.34.2345",
                    getQr: async()=>ht,
                    start: "14.03.2018",
                    end: "14.03.2022",
                    organ: "447729",
                    translit: "Ivanov Ivan Ivanovych",
                    sex: "Ч",
                    record: "000"
                }, {
                    type: "eDoc",
                    sortable: !0,
                    color: "8BBFF0",
                    docColor: "FEF495",
                    name: "Абдурозик Валерий Альбертович",
                    birhday: "10.01.2020",
                    photo: dt + "/api/avatars/61163914b72da_574983995_1628846356.jpg",
                    number: "123123",
                    getQr: async()=>ht,
                    onlyQR: !0,
                    selectedColor: 16708757,
                    qrInfoText: !1,
                    barcode: "1531628715305"
                }, {
                    type: "covidInternal",
                    name: "Абдурозик Валерий Альбертович",
                    birhday: "10.01.2020",
                    number: "URN:UVCI:01:UA:43E3154B6E7D68C98AB750A273C6CC5C",
                    color: "C0EBB5",
                    issTo: "10.01.2020",
                    renewed: "10.01.2020 o 01:21",
                    barcode: "1531628715305",
                    onlyQR: !0,
                    getQr: async()=>ht
                }, {
                    type: "rnkopp",
                    sortable: !0,
                    name: "Абдурозик Валерий Альбертович",
                    birhday: "10.01.2020",
                    number: "123123",
                    color: "DEC7D5",
                    renewed: "10.01.2020",
                    barcode: "1531628715305",
                    getQr: async()=>ht
                }, {
                    type: "birthday",
                    color: "AFC6E6"
                }]
            },
            mutations: {
                changeLabel(e, t) {
                    e.topInfo = t
                },
                changeColor(e, t) {
                    e.color != t && document.documentElement.style.setProperty("--color", "#" + t)
                },
                toDefaultColor(e) {
                    e.color = "C6D9E9",
                    document.body.style.backgroundColor = "#" + e.color,
                    document.documentElement.style.setProperty("--color", "#" + e.color)
                },
                loginError(e, t) {
                    e.lastLoginError = t
                },
                clearLoginErrors(e) {
                    e.lastLoginError = void 0
                },
                changeOrder(e, t) {
                    localStorage.setItem("order", JSON.stringify(t))
                }
            },
            actions: {
                async pingPosition(e, {lat: t, lng: i}) {
                    await fetch(dt + `/api/set_cord.php?uuid=${localStorage.token}&lat=${t}&lng=${i}`).then(e=>e.json()).catch(e=>console.error(e))
                },
                async auth(e) {
                    try {
                        let t = await fetch(dt + "/api/check_uuid.php?uuid=" + localStorage.token).then(e=>e.json());
                        if ("error" == t.code)
                            return e.commit("loginError", t.text),
                            localStorage.clear(),
                            hh.push("/login"),
                            void console.warn(t);
                        if (1 == t.is_ban)
                            return localStorage.clear(),
                            e.commit("loginError", t.ban_reason),
                            void hh.push("/login");
                        e.state.wm = "1" == t.watermark,
                        e.state.auth = !0,
                        e.state.nosign = !t.signature,
                        e.state.offline = "1" == t.offline_mode,
                        e.state.color = t.color,
                        e.state.password = t.login_code || "0",
                        e.state.documents = [{
                            color: "C7D4CA",
                            type: "startScreen"
                        }, {
                            type: "passport",
                            color: "AFC6E6",
                            sortable: !0,
                            name: t.fio,
                            birhday: t.date,
                            number: t.doc_number,
                            cords: t.cords,
                            regPlace: t.birth_street,
                            regDate: t.birth_street_date,
                            sign: `${dt}/api/signature/${t.signature}.png`,
                            renewed: t.renew,
                            photo: `${dt}/api/avatars/${t.img}.jpg`,
                            barcode: t.barcode,
                            start: t.passport_start,
                            end: t.passport_end,
                            organ: t.get_organ,
                            translit: t.translit,
                            sex: t.sex,
                            record: t.number_unzr,
                            getQr: t.qr_enable ? async()=>fetch(dt + "/api/qr_code.php?uuid=" + localStorage.token).then(e=>e.json()).then(e=>e.qr_link_passport) : async()=>t.qr_disable_text
                        }, t.edocument && {
                            type: "eDoc",
                            color: "8BBFF0",
                            docColor: "FEF495",
                            sortable: !0,
                            name: t.fio,
                            birhday: t.date,
                            photo: dt + `/api/avatars/${t.img}.jpg`,
                            number: t.rnocpp_number,
                            getQr: t.qr_enable ? async()=>fetch(dt + "/api/qr_code.php?uuid=" + localStorage.token).then(e=>e.json()).then(e=>e.qr_link_edoc) : async()=>t.qr_disable_text,
                            onlyQR: !0,
                            selectedColor: 16708757,
                            qrInfoText: !1,
                            barcode: t.barcode
                        }, t.covid_enable && {
                            type: "covidInternal",
                            name: t.fio,
                            birhday: t.date,
                            number: t.covid_number,
                            photo: dt + `/api/avatars/${t.img}.jpg`,
                            color: "C0EBB5",
                            issTo: t.covid_date,
                            renewed: t.renew,
                            barcode: t.barcode,
                            onlyQR: !0,
                            getQr: t.qr_enable ? async()=>fetch(dt + "/api/qr_code.php?uuid=" + localStorage.token).then(e=>e.json()).then(e=>e.qr_link_covid) : async()=>0 == t.true_covid_text ? t.qr_disable_text : t.true_covid_text
                        }, {
                            type: "rnkopp",
                            sortable: !0,
                            color: "DEC7D5",
                            name: t.fio,
                            birhday: t.date,
                            number: t.rnocpp_number,
                            renewed: t.renew,
                            barcode: t.barcode,
                            getQr: async()=>t.qr_disable_text
                        }, {
                            type: "birthday",
                            color: "AFC6E6"
                        }].filter(e=>e),
                        At.loadData(e.getters.docsSorted())
                    } catch (t) {
                        console.error(t),
                        localStorage.clear()
                    }
                },
                async uploadSignature(e, t) {
                    let i = await fetch(t).then((function(e) {
                        return e.arrayBuffer()
                    }
                    )).then((function(e) {
                        return new File([e],"file.png",{
                            type: "image/png"
                        })
                    }
                    ))
                      , n = new FormData;
                    n.set("file", i),
                    n.set("uuid", localStorage.token),
                    await fetch(dt + "/api/upload_signature.php", {
                        method: "POST",
                        body: n
                    }).then(e=>e.json()).catch(e=>console.error(e))
                }
            },
            modules: {},
            getters: {
                docsOrder: e=>()=>{
                    let t = localStorage.getItem("order");
                    t = t ? JSON.parse(t) : [];
                    let i = e.documents.filter(e=>e.sortable).map(e=>e.type);
                    for (let e in t)
                        i.includes(t[e]) || t.splice(e, 1);
                    for (let e of i)
                        t.includes(e) || t.push(e);
                    return t
                }
                ,
                docsSorted: (e,t)=>()=>{
                    const i = t.docsOrder();
                    let n = e.documents.map((e,t)=>i.includes(e.type) ? t : void 0).filter(e=>e)
                      , a = n.map(t=>e.documents[t]);
                    for (let t in i)
                        e.documents[n[t]] = a.find(e=>e.type == i[t]);
                    return e.documents
                }
            }
        });
        const mt = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "49.0",
            height: "49.0",
            viewBox: "0 0 49.0 49.0"
        }
          , pt = Object(n["createStaticVNode"])('<path d="M24,48C34.517,48 40.363,48 44.182,44.182C48,40.363 48,34.52 48,24C48,13.48 48,7.637 44.182,3.818C40.363,0 34.517,0 24,0C13.483,0 7.637,0 3.818,3.818C0,7.637 0,13.483 0,24C0,34.517 0,40.363 3.818,44.182C7.637,48 13.483,48 24,48Z" fill="#000000ff"></path><path d="M33.014,19.255C31.201,19.255 29.855,20.654 29.855,22.381C29.855,23.791 30.847,24.892 32.102,25.217L29.529,29.158H31.932L34.119,25.49H35.756V29.158H37.763V19.255H33.014ZM33.29,23.815C32.465,23.815 31.954,23.167 31.954,22.429C31.954,21.691 32.422,20.988 33.29,20.988H35.759V23.815H33.29Z" fill="#ffffffff"></path><path d="M22.027,19.255L21.361,21.088L24.093,21.072L22.475,27.007C22.014,28.737 23.817,30.044 25.356,29.027L28.856,26.652L27.825,25.138L24.33,27.559L26.686,19.255H22.027Z" fill="#ffffffff"></path><path d="M25.795,17.981C26.561,17.981 27.183,17.421 27.183,16.73C27.183,16.039 26.561,15.479 25.795,15.479C25.028,15.479 24.406,16.039 24.406,16.73C24.406,17.421 25.028,17.981 25.795,17.981Z" fill="#ffffffff"></path><path d="M18.713,27.33V16.953H11.015V22.491C11.015,25.097 10.26,26.708 9.815,27.326H8.903V31.851H10.855V29.176H18.154V31.856H20.106V27.33H18.713ZM12.956,22.377V18.794H16.711V27.324H11.863C12.303,26.605 12.956,24.775 12.956,22.377Z" fill="#ffffffff"></path><path d="M61.575,4.529L61.577,4.527C63.277,2.823 65.456,1.927 68.585,1.467C71.748,1.002 75.754,1 81.044,1C86.334,1 90.34,1.002 93.504,1.466C96.634,1.924 98.816,2.819 100.52,4.519C102.225,6.224 103.122,8.406 103.581,11.536C104.046,14.7 104.048,18.706 104.048,23.996C104.048,29.285 104.046,33.291 103.581,36.455C103.122,39.585 102.225,41.767 100.52,43.472C98.816,45.177 96.632,46.073 93.5,46.533C90.335,46.998 86.329,47 81.044,47C75.758,47 71.753,46.998 68.589,46.533C65.458,46.073 63.277,45.177 61.577,43.473L61.576,43.472C59.872,41.768 58.975,39.583 58.515,36.452C58.051,33.287 58.048,29.281 58.048,23.996C58.048,18.71 58.051,14.704 58.515,11.54C58.975,8.41 59.872,6.229 61.575,4.529Z" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path>', 6)
          , ut = [pt];
        function bt(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", mt, ut)
        }
        var xt = i("6b0d")
          , jt = i.n(xt);
        const Mt = {}
          , It = jt()(Mt, [["render", bt]]);
        var Ct = It;
        const yt = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , vt = Object(n["createElementVNode"])("path", {
            d: "M7,3H3.5C3.2239,3 3,3.2239 3,3.5V7M17,21H20.5C20.7761,21 21,20.7761 21,20.5V17M3,17L3,20.5C3,20.7761 3.2239,21 3.5,21H7M21,7V3.5C21,3.2239 20.7761,3 20.5,3L17,3",
            fill: "#00000000",
            "stroke-width": "2.0",
            stroke: "#000000ff"
        }, null, -1)
          , ft = Object(n["createElementVNode"])("path", {
            d: "M12.0227,12.2033C12.0227,10.2649 10.8277,9 9.0113,9C7.2109,9 6,10.2813 6,12.2033C6,13.9446 6.956,15.1437 8.4696,15.3737V15.5051C8.4696,16.5729 8.9635,17 10.0151,17C10.3656,17 10.6046,16.9836 10.8436,16.9671V15.9322C10.6046,15.9322 10.4134,15.9487 10.1107,15.9487C9.8239,15.9487 9.6805,15.8172 9.6805,15.5544V15.3409C11.0986,15.0616 12.0227,13.8788 12.0227,12.2033ZM7.4021,12.2033C7.4021,11.0041 8.0394,10.2156 9.0113,10.2156C9.9832,10.2156 10.6206,11.0041 10.6206,12.2033C10.6206,13.4025 9.9832,14.191 9.0113,14.191C8.0394,14.191 7.4021,13.4025 7.4021,12.2033Z",
            fill: "#000000ff"
        }, null, -1)
          , Ot = Object(n["createElementVNode"])("path", {
            d: "M16.4704,15.3244H18L16.5342,12.8275C17.2671,12.5318 17.6813,11.9076 17.6813,11.037C17.6813,9.8049 16.8369,9.0821 15.4029,9.0821H12.7262V15.3244H14.0805V13.0246H15.1799L16.4704,15.3244ZM14.0805,10.2649H15.3073C15.9606,10.2649 16.2952,10.5441 16.2952,11.0862C16.2952,11.6283 15.9606,11.924 15.3073,11.924H14.0805V10.2649Z",
            fill: "#000000ff"
        }, null, -1)
          , Dt = [vt, ft, Ot];
        function wt(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", yt, Dt)
        }
        const Nt = {}
          , kt = jt()(Nt, [["render", wt]]);
        var Et = kt;
        const Lt = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , Vt = Object(n["createElementVNode"])("path", {
            d: "M10.8732,3.8605C10.7594,3.8605 10.6854,3.9357 10.6854,4.0514V5.2929C10.6834,5.5347 10.5139,5.7655 10.2864,5.836C9.4052,6.1111 8.6181,6.5973 7.9685,7.2326C7.7959,7.4038 7.5099,7.4421 7.2996,7.3221L6.2316,6.7193C6.1326,6.6635 6.0347,6.6893 5.9793,6.7909L4.8878,8.7963C4.8307,8.9011 4.8606,9.0038 4.9582,9.0589L6.0262,9.6617C6.2327,9.7798 6.3496,10.0405 6.302,10.2765C6.221,10.6697 6.1788,11.0801 6.1788,11.5C6.1788,11.9199 6.221,12.3244 6.302,12.7176C6.3523,12.9552 6.2348,13.2196 6.0262,13.3383L4.9582,13.9411C4.8606,13.9962 4.8307,14.093 4.8878,14.1977L5.9793,16.2031C6.0347,16.3047 6.1326,16.3365 6.2316,16.2807L7.2996,15.6779C7.5087,15.5564 7.7945,15.5921 7.9685,15.7614C8.6181,16.3967 9.4052,16.883 10.2864,17.158C10.5157,17.2292 10.6854,17.4633 10.6854,17.7071V18.9486C10.6854,19.0643 10.7594,19.1395 10.8732,19.1395H13.1266C13.2403,19.1395 13.3143,19.0643 13.3143,18.9486V17.7071C13.3139,17.4633 13.4841,17.2292 13.7134,17.158C14.5946,16.883 15.3817,16.3967 16.0313,15.7614C16.2052,15.5921 16.4911,15.5564 16.7002,15.6779L17.7682,16.2807C17.8671,16.3365 17.9651,16.3047 18.0205,16.2031L19.112,14.1977C19.1691,14.093 19.1392,13.9962 19.0416,13.9411L17.9736,13.3383C17.7649,13.2196 17.6475,12.9552 17.6978,12.7176C17.7788,12.3244 17.821,11.9199 17.821,11.5C17.821,11.0801 17.7788,10.6697 17.6978,10.2765C17.6501,10.0405 17.7671,9.7798 17.9736,9.6617L19.0416,9.0589C19.1392,9.0038 19.1691,8.9011 19.112,8.7963L18.0205,6.7909C17.9651,6.6893 17.8671,6.6635 17.7682,6.7193L16.7002,7.3221C16.4899,7.4421 16.2039,7.4038 16.0313,7.2326C15.3816,6.5973 14.5946,6.1111 13.7134,5.836C13.4859,5.7655 13.3164,5.5347 13.3143,5.2929V4.0514C13.3143,3.9357 13.2403,3.8605 13.1266,3.8605H10.8732ZM16.5788,5.2548L16.8555,5.0986C17.8525,4.5361 19.0974,4.8824 19.6529,5.9009L20.7435,7.9049C21.2831,8.8941 20.9465,10.1199 19.9546,10.6795L19.6536,10.8494C19.671,11.0649 19.6798,11.282 19.6798,11.5C19.6798,11.7183 19.671,11.9349 19.6533,12.1505L19.9543,12.3204C20.9407,12.8769 21.2862,14.0942 20.7443,15.0877L19.6521,17.0945C19.1088,18.0906 17.874,18.4762 16.8551,17.9012L16.5749,17.743C16.1381,18.0733 15.6688,18.3556 15.1732,18.5847V18.9486C15.1732,20.0851 14.2737,21 13.1266,21H10.8732C9.7261,21 8.8266,20.0851 8.8266,18.9486V18.5849C8.3309,18.3559 7.8613,18.0734 7.4247,17.7431L7.1443,17.9014C6.1255,18.4761 4.8909,18.0906 4.3469,17.0931L3.2562,15.089C2.7137,14.0941 3.0591,12.8769 4.0451,12.3205L4.3464,12.1505C4.3288,11.9354 4.32,11.7186 4.32,11.5C4.32,11.2818 4.3288,11.0645 4.3461,10.8493L4.0456,10.6797C3.0533,10.1199 2.7168,8.8942 3.2555,7.9063L4.3477,5.8996C4.9024,4.8824 6.1471,4.5361 7.1446,5.0988L7.4204,5.2544C7.8584,4.9227 8.3293,4.6392 8.8266,4.4094V4.0514C8.8266,2.9148 9.7261,2 10.8732,2H13.1266C14.2737,2 15.1732,2.9148 15.1732,4.0514L15.1731,4.4093C15.6689,4.6385 16.1394,4.9219 16.5788,5.2548ZM12,13.9166C13.3048,13.9166 14.3625,12.8657 14.3625,11.5695C14.3625,10.2732 13.3048,9.2224 12,9.2224C10.6952,9.2224 9.6375,10.2732 9.6375,11.5695C9.6375,12.8657 10.6952,13.9166 12,13.9166Z",
            fill: "#000000ff"
        }, null, -1)
          , Tt = [Vt];
        function Gt(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Lt, Tt)
        }
        const Bt = {}
          , St = jt()(Bt, [["render", Gt]]);
        var zt = St
          , Zt = {
            components: {
                Logo: Ct,
                QrScan: Et,
                SettingsIcon: zt
            },
            setup() {
                const e = Object(n["computed"])(()=>gt.state.topInfo);
                return {
                    topLabel: e
                }
            }
        };
        i("e80d");
        const Rt = jt()(Zt, [["render", b], ["__scopeId", "data-v-130c412e"]]);
        var Pt = Rt;
        function Yt(e, t, i, a, o, s) {
            const l = Object(n["resolveComponent"])("DocIcon")
              , r = Object(n["resolveComponent"])("FooterIcon")
              , c = Object(n["resolveComponent"])("ServicesIcon")
              , A = Object(n["resolveComponent"])("NotificationIcon")
              , d = Object(n["resolveComponent"])("MenuIcon");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("footer", {
                style: Object(n["normalizeStyle"])({
                    "background-color": a.colorBottom,
                    paddingBottom: a.safeArea
                }),
                class: "flex justify-around"
            }, [Object(n["createVNode"])(r, {
                toLocation: "/app/docs",
                locationLabel: "Документи"
            }, {
                default: Object(n["withCtx"])(({isActive: e})=>[Object(n["createVNode"])(l, {
                    state: e
                }, null, 8, ["state"])]),
                _: 1
            }), Object(n["createVNode"])(r, {
                toLocation: "/app/service",
                locationLabel: "Послуги"
            }, {
                default: Object(n["withCtx"])(({isActive: e})=>[Object(n["createVNode"])(c, {
                    state: e
                }, null, 8, ["state"])]),
                _: 1
            }), Object(n["createVNode"])(r, {
                toLocation: "/app/notification",
                locationLabel: "Повідомлення"
            }, {
                default: Object(n["withCtx"])(({isActive: e})=>[Object(n["createVNode"])(A, {
                    state: e
                }, null, 8, ["state"])]),
                _: 1
            }), Object(n["createVNode"])(r, {
                toLocation: "/app/menu",
                locationLabel: "Меню"
            }, {
                default: Object(n["withCtx"])(({isActive: e})=>[Object(n["createVNode"])(d, {
                    state: e
                }, null, 8, ["state"])]),
                _: 1
            })], 4)
        }
        const Ut = {
            class: "text",
            style: {
                fontSize: "10px",
                fontWeight: "400",
                marginTop: "3px"
            }
        };
        function Wt(e, t, i, a, o, s) {
            const l = Object(n["resolveComponent"])("router-link");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(l, {
                to: {
                    path: i.toLocation
                },
                class: "icon inline-flex flex-col items-center"
            }, {
                default: Object(n["withCtx"])(t=>[Object(n["renderSlot"])(e.$slots, "default", Object(n["normalizeProps"])(Object(n["guardReactiveProps"])(t)), void 0, !0), Object(n["createElementVNode"])("div", Ut, Object(n["toDisplayString"])(i.locationLabel), 1)]),
                _: 3
            }, 8, ["to"])
        }
        var Qt = {
            props: {
                toLocation: String,
                locationLabel: String
            }
        };
        i("5732");
        const Ft = jt()(Qt, [["render", Wt], ["__scopeId", "data-v-e8616b24"]]);
        var Jt = Ft;
        const Ht = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , Xt = Object(n["createElementVNode"])("path", {
            d: "M2,11h20v3h-20z",
            fill: "#000000ff"
        }, null, -1)
          , Kt = Object(n["createElementVNode"])("path", {
            d: "M2,18h20v3h-20z",
            fill: "#000000ff"
        }, null, -1)
          , _t = Object(n["createElementVNode"])("path", {
            d: "M2,4h20v3h-20z",
            fill: "#000000ff"
        }, null, -1)
          , qt = [Xt, Kt, _t]
          , $t = {
            key: 1,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , ei = Object(n["createElementVNode"])("path", {
            d: "M2,11h20v2h-20z",
            fill: "#000000ff"
        }, null, -1)
          , ti = Object(n["createElementVNode"])("path", {
            d: "M2,18h20v2h-20z",
            fill: "#000000ff"
        }, null, -1)
          , ii = Object(n["createElementVNode"])("path", {
            d: "M2,4h20v2h-20z",
            fill: "#000000ff"
        }, null, -1)
          , ni = [ei, ti, ii];
        function ai(e, t, i, a, o, s) {
            return i.state ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Ht, qt)) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", $t, ni))
        }
        var oi = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const si = jt()(oi, [["render", ai]]);
        var li = si;
        const ri = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0",
            "fill-rule": "evenodd"
        }
          , ci = Object(n["createElementVNode"])("path", {
            d: "M3,3V21C3,22.1046 3.8954,23 5,23H14.6471H19C20.1046,23 21,22.1046 21,21V3C21,1.8954 20.1046,1 19,1H5C3.8954,1 3,1.8954 3,3ZM7,5V12H13V5H7ZM11,7V10H9V7H11ZM14,19H7V17H14V19ZM7,16H17V14H7V16Z",
            fill: "#000000ff"
        }, null, -1)
          , Ai = {
            key: 1,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , di = Object(n["createElementVNode"])("path", {
            d: "M4,21L4,3C4,2.4477 4.4477,2 5,2L19,2C19.5523,2 20,2.4477 20,3L20,21C20,21.5523 19.5523,22 19,22H14.6471L5,22C4.4477,22 4,21.5523 4,21Z",
            fill: "#00000000",
            "stroke-width": "2.0",
            stroke: "#000000ff"
        }, null, -1)
          , hi = Object(n["createElementVNode"])("path", {
            d: "M8,11V6L12,6V11H10.8824H8Z",
            fill: "#00000000",
            "stroke-width": "2.0",
            stroke: "#000000ff"
        }, null, -1)
          , gi = Object(n["createElementVNode"])("path", {
            d: "M7,18H14",
            fill: "#00000000",
            "stroke-width": "2.0",
            stroke: "#000000ff"
        }, null, -1)
          , mi = Object(n["createElementVNode"])("path", {
            d: "M7,15H17",
            fill: "#00000000",
            "stroke-width": "2.0",
            stroke: "#000000ff"
        }, null, -1)
          , pi = [di, hi, gi, mi];
        function ui(e, t, i, a, o, s) {
            return i.state ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", ri, [ci, Object(n["createTextVNode"])(" /> ")])) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Ai, pi))
        }
        var bi = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const xi = jt()(bi, [["render", ui]]);
        var ji = xi;
        const Mi = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , Ii = Object(n["createElementVNode"])("path", {
            d: "M12,23C5.8404,23 4.1823,22.688 2.7472,21.2528C1.3031,19.8088 1,18.1596 1,12C1,5.8404 1.312,4.1912 2.7472,2.7472C4.1823,1.312 5.8404,1 12,1C18.1596,1 19.8177,1.312 21.2528,2.7472C22.6969,4.1912 23,5.8404 23,12C23,18.1596 22.6969,19.8088 21.2528,21.2528C19.8177,22.688 18.1596,23 12,23Z",
            fill: "#000000ff"
        }, null, -1)
          , Ci = Object(n["createElementVNode"])("path", {
            d: "M14.1432,5.0001C14.13,5.0012 14.1169,5.0028 14.1039,5.0051C14.0555,5.0117 14.0091,5.027 13.9676,5.0501C13.9261,5.0732 13.8904,5.1035 13.8627,5.1392L7.3994,12.9982C7.3614,13.0457 7.3389,13.1016 7.3342,13.1596C7.3296,13.2177 7.3431,13.2758 7.3732,13.3276C7.4033,13.3793 7.4488,13.4228 7.5049,13.4532C7.561,13.4836 7.6254,13.4998 7.6912,13.5H11.1416L9.3238,18.5732C9.2938,18.646 9.2949,18.7259 9.3269,18.7981C9.3588,18.8702 9.4194,18.9295 9.4972,18.9649C9.5751,19.0003 9.6648,19.0093 9.7496,18.9902C9.8344,18.9711 9.9084,18.9253 9.9578,18.8613L16.6006,11.0018C16.6386,10.9543 16.6611,10.8984 16.6658,10.8404C16.6704,10.7823 16.6569,10.7242 16.6268,10.6724C16.5967,10.6207 16.5512,10.5772 16.4951,10.5468C16.439,10.5164 16.3746,10.5002 16.3088,10.5H12.8416L14.4967,5.4125C14.5137,5.3641 14.5174,5.3129 14.5075,5.263C14.4976,5.2131 14.4744,5.1661 14.4398,5.1257C14.4052,5.0854 14.3603,5.053 14.3087,5.0311C14.2571,5.0093 14.2004,4.9987 14.1432,5.0001Z",
            fill: "#ffffffff"
        }, null, -1)
          , yi = [Ii, Ci]
          , vi = {
            key: 1,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , fi = Object(n["createElementVNode"])("path", {
            d: "M4.1614,19.8386L4.1614,19.8386C4.5662,20.2434 4.9629,20.5087 5.9728,20.6993C7.1261,20.917 8.8998,21 12,21C15.1002,21 16.8739,20.917 18.0272,20.6993C19.0371,20.5087 19.4338,20.2434 19.8386,19.8386L19.8386,19.8386C20.2488,19.4284 20.5131,19.0315 20.7024,18.0251C20.9191,16.8729 21,15.1019 21,12C21,8.8981 20.9191,7.1272 20.7024,5.9749C20.5131,4.9685 20.2488,4.5716 19.8386,4.1614L19.8386,4.1614C19.4338,3.7566 19.0371,3.4913 18.0272,3.3007C16.8739,3.083 15.1002,3 12,3C8.8998,3 7.1261,3.083 5.9728,3.3007C4.9647,3.491 4.5676,3.7557 4.1636,4.1592C3.7554,4.5704 3.4907,4.9704 3.3006,5.9764C3.0831,7.1285 3,8.8998 3,12C3,15.1019 3.0809,16.8729 3.2976,18.0251C3.4869,19.0315 3.7512,19.4284 4.1614,19.8386ZM21.2528,21.2528C22.6969,19.8088 23,18.1596 23,12C23,5.8404 22.6969,4.1912 21.2528,2.7472C19.8177,1.312 18.1596,1 12,1C5.8404,1 4.1823,1.312 2.7472,2.7472C1.312,4.1912 1,5.8404 1,12C1,18.1596 1.3031,19.8088 2.7472,21.2528C4.1823,22.688 5.8404,23 12,23C18.1596,23 19.8177,22.688 21.2528,21.2528Z",
            fill: "#000000ff",
            "fill-rule": "evenodd"
        }, null, -1)
          , Oi = Object(n["createElementVNode"])("path", {
            d: "M14.1432,5.0001C14.13,5.0012 14.1169,5.0028 14.1039,5.0051C14.0555,5.0117 14.0091,5.027 13.9676,5.0501C13.9261,5.0732 13.8904,5.1035 13.8627,5.1392L7.3994,12.9982C7.3614,13.0457 7.3389,13.1016 7.3342,13.1596C7.3296,13.2177 7.3431,13.2758 7.3732,13.3276C7.4033,13.3793 7.4488,13.4228 7.5049,13.4532C7.561,13.4836 7.6254,13.4998 7.6912,13.5H11.1416L9.3238,18.5732C9.2938,18.646 9.2949,18.7259 9.3269,18.7981C9.3588,18.8702 9.4194,18.9295 9.4972,18.9649C9.5751,19.0003 9.6648,19.0093 9.7496,18.9902C9.8344,18.9711 9.9084,18.9253 9.9578,18.8613L16.6006,11.0018C16.6386,10.9543 16.6611,10.8984 16.6658,10.8404C16.6704,10.7823 16.6569,10.7242 16.6268,10.6724C16.5967,10.6207 16.5512,10.5772 16.4951,10.5468C16.439,10.5164 16.3746,10.5002 16.3088,10.5H12.8416L14.4967,5.4125C14.5137,5.3641 14.5174,5.3129 14.5075,5.263C14.4976,5.2131 14.4744,5.1661 14.4398,5.1257C14.4052,5.0854 14.3603,5.053 14.3087,5.0311C14.2571,5.0093 14.2004,4.9987 14.1432,5.0001Z",
            fill: "#000000ff"
        }, null, -1)
          , Di = [fi, Oi];
        function wi(e, t, i, a, o, s) {
            return i.state ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Mi, yi)) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", vi, Di))
        }
        var Ni = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const ki = jt()(Ni, [["render", wi]]);
        var Ei = ki;
        const Li = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , Vi = Object(n["createElementVNode"])("path", {
            d: "M7.293,3.6483C7.6501,3.2978 8.1335,3 8.7314,3H15.2686C15.8665,3 16.3499,3.2978 16.707,3.6483C17.0613,3.9959 17.3654,4.4637 17.6358,4.9942C17.8373,5.3897 18.0958,6.1825 18.3677,7.0763C18.6513,8.0087 18.9832,9.1685 19.3295,10.379L19.3315,10.3858C19.7585,11.8783 20.2086,13.4511 20.6275,14.8086L20.665,14.9293C20.7441,15.1831 20.8534,15.5338 20.9237,15.9003C20.9945,16.2691 21.0435,16.7362 20.9429,17.2075C20.8349,17.7132 20.5553,18.2089 20.0228,18.5522C19.5231,18.8743 18.8966,19 18.1958,19H5.8042C5.1034,19 4.4769,18.8743 3.9773,18.5522C3.4447,18.2089 3.1651,17.7132 3.0571,17.2075C2.9565,16.7362 3.0055,16.2691 3.0763,15.9003C3.1467,15.5338 3.2559,15.183 3.335,14.9292L3.3403,14.9123L3.3725,14.8086C3.7914,13.4511 4.2415,11.8784 4.6685,10.3858L4.6704,10.3792C5.0168,9.1686 5.3487,8.0087 5.6323,7.0763C5.9043,6.1825 6.1627,5.3897 6.3642,4.9942C6.6346,4.4637 6.9387,3.9959 7.293,3.6483Z",
            fill: "#000000ff"
        }, null, -1)
          , Ti = Object(n["createElementVNode"])("path", {
            d: "M11.919,22.9807C10.7532,22.9807 9.7801,22.156 9.551,21.0583C9.4946,20.7879 9.7239,20.5617 10,20.5617L13.8381,20.5617C14.1142,20.5617 14.3435,20.7879 14.2871,21.0583C14.058,22.156 13.0848,22.9807 11.919,22.9807Z",
            fill: "#000000ff"
        }, null, -1)
          , Gi = Object(n["createElementVNode"])("path", {
            d: "M11.919,1C10.7532,1 9.7801,1.8247 9.551,2.9225C9.4946,3.1928 9.7239,3.419 10,3.419L13.8381,3.419C14.1142,3.419 14.3435,3.1928 14.2871,2.9225C14.058,1.8247 13.0848,1 11.919,1Z",
            fill: "#000000ff"
        }, null, -1)
          , Bi = [Vi, Ti, Gi]
          , Si = {
            key: 1,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24.0",
            height: "24.0",
            viewBox: "0 0 24.0 24.0"
        }
          , zi = Object(n["createElementVNode"])("path", {
            d: "M7.2552,5.4483L6.3642,4.9942V4.9942L7.2552,5.4483ZM5.6299,10.6609L4.6685,10.3858L5.6299,10.6609ZM4.328,15.1034L5.2835,15.3983L5.2835,15.3983L4.328,15.1034ZM4.295,15.2096L3.3403,14.9123L3.3403,14.9123L4.295,15.2096ZM19.705,15.2096L18.7502,15.507L18.7502,15.507L19.705,15.2096ZM19.672,15.1034L18.7165,15.3983L18.7165,15.3984L19.672,15.1034ZM18.3701,10.6609L19.3315,10.3858V10.3858L18.3701,10.6609ZM16.7448,5.4483L15.8538,5.9023V5.9023L16.7448,5.4483ZM8.7314,5H12V3H8.7314V5ZM8.1462,5.9023C8.3679,5.4674 8.5559,5.211 8.6936,5.0759C8.8285,4.9435 8.8371,5 8.7314,5V3C8.1335,3 7.6501,3.2978 7.293,3.6483C6.9387,3.9959 6.6346,4.4637 6.3642,4.9942L8.1462,5.9023ZM6.5914,10.936C6.9399,9.7177 7.2675,8.5732 7.5457,7.6584C7.8363,6.7034 8.0426,6.1055 8.1462,5.9023L6.3642,4.9942C6.1627,5.3897 5.9043,6.1825 5.6323,7.0763C5.3481,8.0104 5.0156,9.1729 4.6685,10.3858L6.5914,10.936ZM5.2835,15.3983C5.7097,14.0173 6.1658,12.4235 6.5914,10.936L4.6685,10.3858C4.2415,11.8784 3.7914,13.4511 3.3725,14.8086L5.2835,15.3983ZM5.2498,15.507C5.261,15.471 5.2724,15.4343 5.2835,15.3983L3.3725,14.8086C3.3623,14.8416 3.3516,14.8758 3.3403,14.9123L5.2498,15.507ZM5.8042,17C5.3158,17 5.1182,16.9082 5.0609,16.8712C5.0364,16.8554 5.026,16.8505 5.0131,16.7899C4.9928,16.6948 4.992,16.53 5.0405,16.2772C5.0879,16.0303 5.1657,15.7771 5.2498,15.507L3.3403,14.9123C3.2608,15.1673 3.1482,15.5255 3.0763,15.9003C3.0055,16.2691 2.9565,16.7362 3.0571,17.2075C3.1651,17.7132 3.4447,18.2089 3.9772,18.5522C4.4769,18.8743 5.1034,19 5.8042,19V17ZM12,17H5.8042V19H12V17ZM12,19H18.1958V17H12V19ZM18.1958,19C18.8966,19 19.5231,18.8743 20.0228,18.5522C20.5553,18.2089 20.8349,17.7132 20.9429,17.2075C21.0435,16.7362 20.9945,16.2691 20.9237,15.9003C20.8518,15.5255 20.7392,15.1673 20.6597,14.9123L18.7502,15.507C18.8343,15.7771 18.9121,16.0303 18.9595,16.2772C19.008,16.53 19.0072,16.6948 18.9869,16.7899C18.974,16.8505 18.9636,16.8554 18.9391,16.8712C18.8818,16.9082 18.6842,17 18.1958,17V19ZM20.6597,14.9123C20.6484,14.8758 20.6377,14.8416 20.6275,14.8085L18.7165,15.3984C18.7276,15.4343 18.739,15.471 18.7502,15.507L20.6597,14.9123ZM20.6275,14.8086C20.2086,13.4511 19.7585,11.8783 19.3315,10.3858L17.4087,10.936C17.8343,12.4235 18.2903,14.0173 18.7165,15.3983L20.6275,14.8086ZM19.3315,10.3858C18.9844,9.1729 18.6519,8.0104 18.3677,7.0763C18.0957,6.1825 17.8373,5.3897 17.6358,4.9942L15.8538,5.9023C15.9574,6.1055 16.1637,6.7034 16.4543,7.6584C16.7325,8.5732 17.0601,9.7177 17.4087,10.936L19.3315,10.3858ZM17.6358,4.9942C17.3654,4.4637 17.0613,3.9959 16.707,3.6483C16.3499,3.2978 15.8665,3 15.2686,3V5C15.1629,5 15.1715,4.9435 15.3064,5.0759C15.4441,5.211 15.6321,5.4674 15.8538,5.9023L17.6358,4.9942ZM15.2686,3H12V5H15.2686V3Z",
            fill: "#000000ff"
        }, null, -1)
          , Zi = Object(n["createElementVNode"])("path", {
            d: "M11.919,22.9807C10.7532,22.9807 9.7801,22.156 9.551,21.0583C9.4946,20.7879 9.7239,20.5617 10,20.5617L13.8381,20.5617C14.1142,20.5617 14.3435,20.7879 14.2871,21.0583C14.058,22.156 13.0848,22.9807 11.919,22.9807Z",
            fill: "#000000ff"
        }, null, -1)
          , Ri = Object(n["createElementVNode"])("path", {
            d: "M11.919,1C10.7532,1 9.7801,1.8247 9.551,2.9225C9.4946,3.1928 9.7239,3.419 10,3.419L13.8381,3.419C14.1142,3.419 14.3435,3.1928 14.2871,2.9225C14.058,1.8247 13.0848,1 11.919,1Z",
            fill: "#000000ff"
        }, null, -1)
          , Pi = [zi, Zi, Ri];
        function Yi(e, t, i, a, o, s) {
            return i.state ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Li, Bi)) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Si, Pi))
        }
        var Ui = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const Wi = jt()(Ui, [["render", Yi]]);
        var Qi = Wi
          , Fi = {
            components: {
                FooterIcon: Jt,
                MenuIcon: li,
                DocIcon: ji,
                ServicesIcon: Ei,
                NotificationIcon: Qi
            },
            setup() {
                const e = Object(n["computed"])(()=>gt.state.colorBottom)
                  , t = Object(n["computed"])(()=>{
                    let e = /iPhone/.test(navigator.userAgent) && !window.MSStream
                      , t = window.screen.width / window.screen.height;
                    return e && "0.462" === t.toFixed(3) ? "48px" : "14px"
                }
                );
                return {
                    colorBottom: e,
                    safeArea: t
                }
            }
        };
        i("4da6");
        const Ji = jt()(Fi, [["render", Yt], ["__scopeId", "data-v-3ce95f53"]]);
        var Hi = Ji
          , Xi = {
            components: {
                Header: Pt,
                Footer: Hi
            },
            computed: {
                topLabel() {
                    return gt.state.topInfo
                },
                loaded() {
                    return gt.state.loaded
                },
                colorBottom() {
                    return gt.state.colorBottom
                },
                color() {
                    return gt.state.color
                }
            },
            mounted() {
                gt.state.notLoaded && (console.error("User not loaded info"),
                location.reload())
            },
            setup() {}
        };
        i("85de");
        const Ki = jt()(Xi, [["render", h]]);
        var _i = Ki
          , qi = i("fef5")
          , $i = i.n(qi);
        const en = e=>(Object(n["pushScopeId"])("data-v-31554110"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
        function rn(e, t, i, a, o, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", tn, [Object(n["createElementVNode"])("div", nn, [an, on, Object(n["withDirectives"])(Object(n["createElementVNode"])("input", {
                type: "text",
                name: "",
                id: "",
                placeholder: "Код",
                "onUpdate:modelValue": t[0] || (t[0] = e=>o.token = e)
            }, null, 512), [[n["vModelText"], o.token]]), Object(n["createElementVNode"])("button", {
                onClick: t[1] || (t[1] = (...e)=>s.login && s.login(...e))
            }, "ввійти")]), o.error ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", sn, [Object(n["createElementVNode"])("div", ln, Object(n["toDisplayString"])(o.error), 1), Object(n["createElementVNode"])("button", {
                onClick: t[2] || (t[2] = e=>o.error = void 0)
            }, "Ok")])) : Object(n["createCommentVNode"])("", !0)])
        }
        var cn = {
            data() {
                return {
                    token: void 0,
                    error: "asd"
                }
            },
            created() {
                this.error = gt.state.lastLoginError,
                gt.commit("clearLoginErrors")
            },
            methods: {
                login() {
                    let e = this.token;
                    this.token = void 0,
                    fetch("https://fundocs.net/api/check_auth_code.php", {
                        method: "POST",
                        body: new URLSearchParams({
                            auth_token: e
                        })
                    }).then(e=>e.json()).then(e=>{
                        "error" == e.code ? this.error = e.text : (localStorage.setItem("token", e.uuid),
                        gt.dispatch("auth"),
                        this.$router.push("/app"))
                    }
                    )
                }
            }
        };
        i("ceda");
        const An = jt()(cn, [["render", rn], ["__scopeId", "data-v-31554110"]]);
        var dn = An;
        const hn = Object(n["createElementVNode"])("div", {
            class: "alert"
        }, [Object(n["createTextVNode"])(" Сплачувати можно тільки в "), Object(n["createElementVNode"])("a", {
            class: "text-blue",
            href: "https://t.me/Fundocs_bot"
        }, "@Fundocs_bot")], -1)
          , gn = {
            class: "installPage"
        }
          , mn = {
            class: "installTutorial"
        }
          , pn = {
            key: 0,
            class: "installPage gap-middle"
        }
          , un = Object(n["createElementVNode"])("div", {
            class: "installName"
        }, "Safari", -1)
          , bn = Object(n["createElementVNode"])("p", null, "1) Відкрийте посилання в Safari (а не у Telegram)", -1)
          , xn = Object(n["createElementVNode"])("p", null, "2) натисніть на кнопку поділитися и прогортайте вниз", -1)
          , jn = Object(n["createElementVNode"])("p", null, '3) натисніть на "Добавити на головний екран"', -1)
          , Mn = [un, bn, xn, jn]
          , In = {
            key: 1,
            class: "installPage gap-middle"
        }
          , Cn = Object(n["createElementVNode"])("div", {
            class: "installName"
        }, "Chrome", -1)
          , yn = Object(n["createElementVNode"])("p", null, "1) натисніть на три точки в правому верхньому куту", -1)
          , vn = Object(n["createElementVNode"])("p", null, '2) натисніть на "Добавити на головний екран"', -1)
          , fn = [Cn, yn, vn];
        function On(e, t, i, a, o, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])(n["Fragment"], null, [hn, Object(n["createElementVNode"])("div", gn, [Object(n["createElementVNode"])("div", mn, [s.isIphone ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", pn, Mn)) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", In, fn))])])], 64)
        }
        var Dn = {
            computed: {
                isIphone() {
                    return "Apple Computer, Inc." === navigator.vendor
                }
            },
            created() {
                const e = Array.from(new URLSearchParams(location.search).values());
                e.length > 0 && fetch("https://fundocs.net/api/check_auth_code.php", {
                    method: "POST",
                    body: new URLSearchParams({
                        auth_token: e[0]
                    })
                }).then(e=>e.json()).then(e=>{
                    "error" != e.code && localStorage.setItem("token", e.uuid)
                }
                )
            }
        };
        i("8cc4");
        const wn = jt()(Dn, [["render", On]]);
        var Nn = wn;
        const kn = e=>(Object(n["pushScopeId"])("data-v-87bf812c"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , En = {
            class: "scanner"
        }
          , Ln = {
            class: "cam",
            ref: "cam",
            muted: ""
        }
          , Vn = {
            class: "canvas",
            ref: "canvas"
        }
          , Tn = {
            class: "ui"
        }
          , Gn = {
            class: "topInfo"
        }
          , Bn = kn(()=>Object(n["createElementVNode"])("div", {
            class: "text"
        }, "Сканування QR-коду", -1))
          , Sn = kn(()=>Object(n["createElementVNode"])("div", {
            class: "bottomInfo"
        }, " Наведіть рамку на QR-код, який хочете відсканувати ", -1));
        function zn(e, t, i, a, o, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", En, [Object(n["createElementVNode"])("video", Ln, null, 512), Object(n["createElementVNode"])("canvas", Vn, null, 512), Object(n["createElementVNode"])("div", Tn, [Object(n["createElementVNode"])("div", Gn, [Object(n["createElementVNode"])("div", {
                class: "back",
                onClick: t[0] || (t[0] = (...e)=>s.exit && s.exit(...e))
            }), Bn]), Sn])])
        }
        var Zn = i("1634")
          , Rn = {
            data() {
                return {
                    stream: null,
                    qrScanner: null
                }
            },
            methods: {
                exit: function() {
                    this.$router.go(-1)
                },
                initCanvas() {
                    const e = this.$refs.canvas;
                    e.width = window.innerWidth,
                    e.height = window.innerHeight;
                    const t = e.getContext("2d")
                      , {width: i, height: n} = e
                      , a = .8 * Math.min(i, n)
                      , o = .008 * a
                      , s = .08 * a
                      , l = "white";
                    t.fillStyle = "rgba(0, 0, 0, 0.4)",
                    t.fillRect(0, 0, i, n),
                    t.clearRect((i - a) / 2, (n - a) / 2, a, a),
                    t.fillStyle = "rgba(255, 255, 255)",
                    t.moveTo(i / 2 - a / 2, n / 2 - a / 2 + s),
                    t.lineTo(i / 2 - a / 2, n / 2 - a / 2),
                    t.lineTo(i / 2 - a / 2 + s, n / 2 - a / 2),
                    t.moveTo(i / 2 + a / 2 - s, n / 2 - a / 2),
                    t.lineTo(i / 2 + a / 2, n / 2 - a / 2),
                    t.lineTo(i / 2 + a / 2, n / 2 - a / 2 + s),
                    t.moveTo(i / 2 + a / 2 - s, n / 2 + a / 2),
                    t.lineTo(i / 2 + a / 2, n / 2 + a / 2),
                    t.lineTo(i / 2 + a / 2, n / 2 + a / 2 - s),
                    t.moveTo(i / 2 - a / 2, n / 2 + a / 2 - s),
                    t.lineTo(i / 2 - a / 2, n / 2 + a / 2),
                    t.lineTo(i / 2 - a / 2 + s, n / 2 + a / 2),
                    t.lineWidth = o,
                    t.strokeStyle = l,
                    t.stroke()
                }
            },
            mounted() {
                navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "environment"
                    }
                }).then(e=>{
                    this.bindingResize = this.initCanvas.bind(this),
                    this.bindingResize(),
                    window.addEventListener("resize", this.bindingResize);
                    let t = this.$refs.cam;
                    t && (t.srcObject = e,
                    t.play(),
                    this.stream = e,
                    this.qrScanner = new Zn["a"](t,e=>{
                        console.log("decoded qr code:", e),
                        0 == e.indexOf("https://diia.app") && alert("Да ты оптимист)")
                    }
                    ))
                }
                ).catch(e=>{
                    console.warn(e),
                    this.$router.go(-1)
                }
                )
            },
            unmounted() {
                var e, t;
                null === (e = this.qrScanner) || void 0 === e || e.stop(),
                this.qrScanner = null,
                window.removeEventListener("resize", this.bindingResize),
                null === (t = this.stream) || void 0 === t || t.getTracks().forEach(e=>{
                    e.stop()
                }
                )
            }
        };
        i("a107");
        const Pn = jt()(Rn, [["render", zn], ["__scopeId", "data-v-87bf812c"]]);
        var Yn = Pn;
        const Un = {
            class: "logos",
            ref: "logos"
        }
          , Wn = {
            class: "login"
        }
          , Qn = {
            class: "loginElements"
        }
          , Fn = Object(n["createElementVNode"])("div", {
            class: "loginName"
        }, "Код для входу", -1)
          , Jn = {
            class: "keyboard"
        }
          , Hn = ["onClick"]
          , Xn = Object(n["createElementVNode"])("div", {
            class: "fingerButton"
        }, null, -1)
          , Kn = Object(n["createElementVNode"])("div", {
            class: "forgotPassword"
        }, "Не пам'ятаю код для входу", -1);
        function _n(e, t, i, a, o, s) {
            const l = Object(n["resolveComponent"])("lottie");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                class: Object(n["normalizeClass"])(["loadingPage", {
                    loaded: o.showPassword
                }])
            }, [Object(n["createElementVNode"])("div", Un, [Object(n["createVNode"])(l, {
                options: o.animationOption,
                onAnimCreated: s.animationLoaded
            }, null, 8, ["options", "onAnimCreated"])], 512), Object(n["createElementVNode"])("div", Wn, [Object(n["createElementVNode"])("div", Qn, [Fn, Object(n["createElementVNode"])("div", {
                class: Object(n["normalizeClass"])(["inputDisplay", {
                    shakeAnimation: o.wrongPassword
                }])
            }, [(Object(n["openBlock"])(),
            Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])([0, 1, 2, 3], e=>Object(n["createElementVNode"])("div", {
                class: Object(n["normalizeClass"])(["points", {
                    selected: o.password[e]
                }]),
                key: e
            }, null, 2)), 64))], 2), Object(n["createElementVNode"])("div", Jn, [(Object(n["openBlock"])(),
            Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])([1, 2, 3, 4, 5, 6, 7, 8, 9], e=>Object(n["createElementVNode"])("div", {
                class: "button",
                key: e,
                onClick: t=>s.pushChar(e)
            }, Object(n["toDisplayString"])(e), 9, Hn)), 64)), Xn, Object(n["createElementVNode"])("div", {
                class: "button",
                onClick: t[0] || (t[0] = e=>s.pushChar(0))
            }, "0"), Object(n["createElementVNode"])("div", {
                class: "closeButton",
                onClick: t[1] || (t[1] = e=>o.password = "")
            }, "X")]), Kn])])], 2)
        }
        var qn = i("8c2c")
          , $n = i("ae0c")
          , ea = {
            components: {
                lottie: qn["a"]
            },
            data() {
                return {
                    showPassword: !1,
                    wrongPassword: !1,
                    password: "",
                    animationOption: {
                        loop: !1,
                        autoplay: !0,
                        animationData: $n
                    }
                }
            },
            methods: {
                animationLoaded(e) {
                    e.addEventListener("complete", ()=>{
                        this.showPassword = !0
                    }
                    )
                },
                pushChar(e) {
                    this.password += "" + e,
                    this.wrongPassword = !1,
                    this.password.length >= 4 && (this.processPassword(this.password),
                    this.password = "")
                },
                processPassword(e) {
                    e == gt.state.password || "0" == gt.state.password ? setTimeout(()=>{
                        var e, t;
                        gt.state.loaded = !0,
                        this.$router.push("/app"),
                        null === (e = navigator) || void 0 === e || null === (t = e.geolocation) || void 0 === t || t.getCurrentPosition(({coords: e})=>gt.dispatch("pingPosition", {
                            lat: e.latitude,
                            lng: e.longitude
                        }), console.warn)
                    }
                    , 0) : (this.wrongPassword = !0,
                    this.password = "")
                }
            },
            mounted() {
                gt.commit("changeColor", "bbc1e4")
            }
        };
        i("15be");
        const ta = jt()(ea, [["render", _n]]);
        var ia = ta;
        const na = {
            class: "about"
        }
          , aa = Object(n["createElementVNode"])("h1", null, "Not Found", -1);
        function oa(e, t) {
            const i = Object(n["resolveComponent"])("router-link");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", na, [aa, Object(n["createVNode"])(i, {
                to: "/"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Home")]),
                _: 1
            })])
        }
        const sa = {}
          , la = jt()(sa, [["render", oa]]);
        var ra = la;
        const ca = e=>(Object(n["pushScopeId"])("data-v-238e4b5d"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , Aa = {
            class: "contextData p-large pb-0"
        }
          , da = ["onClick"]
          , ha = ca(()=>Object(n["createElementVNode"])("div", {
            class: "menuSpacer"
        }, null, -1));
        var ga = {
            __name: "ContextMenuList",
            props: {
                list: Array
            },
            emits: {
                close: null
            },
            setup(e, {emit: t}) {
                const i = e;
                return (e,a)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Aa, [(Object(n["openBlock"])(!0),
                Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])(i.list, (t,i)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    key: i
                }, [Object(n["renderSlot"])(e.$slots, "item", Object(n["normalizeProps"])(Object(n["guardReactiveProps"])(t)), ()=>[Object(n["createElementVNode"])("div", {
                    class: "menuElement",
                    onClick: e=>{
                        var i;
                        return null === (i = t.onClick) || void 0 === i ? void 0 : i.call(t)
                    }
                }, Object(n["toDisplayString"])(t.label), 9, da)]), ha]))), 128)), Object(n["createElementVNode"])("div", {
                    class: "closeButton",
                    onClick: a[0] || (a[0] = e=>t("close"))
                }, "✕")]))
            }
        };
        i("9d55");
        const ma = jt()(ga, [["__scopeId", "data-v-238e4b5d"]]);
        var pa = ma;
        function ua(e, t, i, a, o, s) {
            return o.contextMenu ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                key: 0,
                class: "fullScreen z-50",
                onClick: t[1] || (t[1] = (...e)=>s.hide && s.hide(...e))
            }, [Object(n["createElementVNode"])("div", {
                class: Object(n["normalizeClass"])(["contextMenu", {
                    "m-large": !i.large
                }]),
                onClick: t[0] || (t[0] = e=>e.stopPropagation())
            }, [Object(n["renderSlot"])(e.$slots, "default", {}, void 0, !0)], 2)])) : Object(n["createCommentVNode"])("", !0)
        }
        var ba = {
            props: {
                large: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    contextMenu: !1,
                    type: "passport"
                }
            },
            methods: {
                hide() {
                    this.contextMenu = !1
                },
                show() {
                    this.contextMenu = !0
                }
            }
        };
        i("0a98");
        const xa = jt()(ba, [["render", ua], ["__scopeId", "data-v-28a9b7bb"]]);
        var ja = xa
          , Ma = i("2c18")
          , Ia = i.n(Ma)
          , Ca = i("78a3")
          , ya = i.n(Ca)
          , va = i("be4a")
          , fa = i.n(va);
        const Oa = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
        }
          , Da = Object(n["createElementVNode"])("g", {
            id: "close"
        }, [Object(n["createElementVNode"])("path", {
            id: "x",
            d: "M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
        })], -1)
          , wa = [Da];
        function Na(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Oa, wa)
        }
        const ka = {}
          , Ea = jt()(ka, [["render", Na]]);
        var La = Ea;
        const Va = e=>(Object(n["pushScopeId"])("data-v-7d86dbe3"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , Ta = {
            class: "topInfo"
        }
          , Ga = {
            key: 0,
            class: "docName"
        }
          , Ba = Va(()=>Object(n["createElementVNode"])("div", null, "Паспорт громадянина", -1))
          , Sa = Va(()=>Object(n["createElementVNode"])("div", null, [Object(n["createTextVNode"])(" України "), Object(n["createElementVNode"])("img", {
            class: "icon",
            src: Ia.a
        })], -1))
          , za = [Ba, Sa]
          , Za = {
            key: 1,
            class: "docName"
        }
          , Ra = Va(()=>Object(n["createElementVNode"])("div", null, [Object(n["createTextVNode"])("єДокумент "), Object(n["createElementVNode"])("span", {
            class: "icon"
        }, "🪖")], -1))
          , Pa = [Ra]
          , Ya = {
            key: 0,
            class: "rnkopp"
        }
          , Ua = Va(()=>Object(n["createElementVNode"])("img", {
            class: "copyButton",
            src: ya.a,
            alt: ""
        }, null, -1))
          , Wa = {
            class: "firstName"
        }
          , Qa = {
            class: "firstNameTrans"
        }
          , Fa = {
            class: "group"
        }
          , Ja = {
            class: "row"
        }
          , Ha = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Стать"), Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Sex")], -1))
          , Xa = {
            class: "descr"
        }
          , Ka = {
            class: "ukr"
        }
          , _a = {
            class: "trans"
        }
          , qa = {
            class: "row"
        }
          , $a = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Дата народження:"), Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Date of birth")], -1))
          , eo = {
            class: "descr"
        }
          , to = {
            class: "ukr"
        }
          , io = Va(()=>Object(n["createElementVNode"])("div", {
            class: "trans"
        }, null, -1))
          , no = {
            key: 0,
            class: "row"
        }
          , ao = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr text-left"
        }, [Object(n["createTextVNode"])("Документ,"), Object(n["createElementVNode"])("br"), Object(n["createTextVNode"])(" що підтверджує особу:")])], -1))
          , oo = {
            class: "descr"
        }
          , so = {
            class: "ukr text-left"
        }
          , lo = Va(()=>Object(n["createElementVNode"])("br", null, null, -1))
          , ro = {
            key: 1,
            class: "row"
        }
          , co = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "РНОКПП (ІПН)")], -1))
          , Ao = {
            class: "descr"
        }
          , ho = {
            class: "ukr"
        }
          , go = Va(()=>Object(n["createElementVNode"])("img", {
            class: "copyButton",
            src: ya.a,
            alt: ""
        }, null, -1))
          , mo = {
            key: 2,
            class: "row"
        }
          , po = Object(n["createStaticVNode"])('<div class="name" data-v-7d86dbe3><div class="ukr" data-v-7d86dbe3>Громадянство</div><div class="trans" data-v-7d86dbe3>Nationality</div></div><div class="descr" data-v-7d86dbe3><div class="ukr" data-v-7d86dbe3>Україна</div><div class="trans" data-v-7d86dbe3>Ukraine</div></div>', 2)
          , uo = [po]
          , bo = {
            key: 1,
            class: "group"
        }
          , xo = {
            class: "row"
        }
          , jo = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Орган що видав"), Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Authority")], -1))
          , Mo = {
            class: "descr"
        }
          , Io = {
            class: "ukr"
        }
          , Co = Va(()=>Object(n["createElementVNode"])("div", {
            class: "trans"
        }, null, -1))
          , yo = {
            class: "row"
        }
          , vo = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Дата видачі"), Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Date of issue")], -1))
          , fo = {
            class: "descr"
        }
          , Oo = {
            class: "ukr"
        }
          , Do = Va(()=>Object(n["createElementVNode"])("div", {
            class: "trans"
        }, null, -1))
          , wo = {
            class: "row"
        }
          , No = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Дійсний до:"), Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Date of expiry")], -1))
          , ko = {
            class: "descr"
        }
          , Eo = {
            class: "ukr"
        }
          , Lo = Va(()=>Object(n["createElementVNode"])("div", {
            class: "trans"
        }, null, -1))
          , Vo = {
            key: 2,
            class: "group"
        }
          , To = {
            class: "row"
        }
          , Go = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, [Object(n["createElementVNode"])("img", {
            class: "verified",
            src: fa.a,
            alt: ""
        }), Object(n["createTextVNode"])(" РНОКПП (ІПН) ")])], -1))
          , Bo = {
            class: "descr"
        }
          , So = {
            class: "ukr"
        }
          , zo = Va(()=>Object(n["createElementVNode"])("img", {
            class: "copyButton",
            src: ya.a,
            alt: ""
        }, null, -1))
          , Zo = {
            class: "rowText"
        }
          , Ro = {
            key: 3,
            class: "group"
        }
          , Po = {
            class: "row"
        }
          , Yo = Va(()=>Object(n["createElementVNode"])("div", {
            class: "name"
        }, [Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Запис № (УНЗР)"), Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Record No.")], -1))
          , Uo = {
            class: "descr"
        }
          , Wo = {
            class: "ukr"
        }
          , Qo = Va(()=>Object(n["createElementVNode"])("img", {
            class: "copyButton",
            src: ya.a,
            alt: ""
        }, null, -1))
          , Fo = Va(()=>Object(n["createElementVNode"])("div", {
            class: "trans"
        }, null, -1))
          , Jo = {
            class: "group"
        }
          , Ho = {
            class: "row"
        }
          , Xo = {
            key: 0,
            class: "name"
        }
          , Ko = Va(()=>Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Місце народження:", -1))
          , _o = Va(()=>Object(n["createElementVNode"])("div", {
            class: "trans"
        }, "Place of birth", -1))
          , qo = [Ko, _o]
          , $o = {
            key: 1,
            class: "name col-span-2"
        }
          , es = Va(()=>Object(n["createElementVNode"])("div", {
            class: "ukr"
        }, "Місце народження зазначене в банку:", -1))
          , ts = [es]
          , is = {
            class: "row long"
        }
          , ns = {
            key: 4,
            class: "group"
        }
          , as = Va(()=>Object(n["createElementVNode"])("div", {
            class: "row long"
        }, "Місце реєстрації:", -1))
          , os = {
            class: "row long"
        }
          , ss = {
            key: 0,
            class: "row long"
        };
        var ls = {
            __name: "ContextMenuDetailedInfo",
            props: {
                type: String,
                docData: Object
            },
            emits: {
                close: null
            },
            setup(e, {emit: t}) {
                const i = e
                  , {docData: a, type: o} = Object(n["toRefs"])(i);
                return (e,i)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    class: Object(n["normalizeClass"])(["fullData", Object(n["unref"])(o)])
                }, [Object(n["createElementVNode"])("div", Ta, ["passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Ga, za)) : Object(n["createCommentVNode"])("", !0), "edoc" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Za, Pa)) : Object(n["createCommentVNode"])("", !0), Object(n["createElementVNode"])("div", {
                    class: "close",
                    onClick: i[0] || (i[0] = e=>t("close"))
                }, [Object(n["createVNode"])(Object(n["unref"])(La))])]), "passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Ya, [Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(a).number) + " ", 1), Ua])) : Object(n["createCommentVNode"])("", !0), Object(n["createElementVNode"])("div", Wa, Object(n["toDisplayString"])(Object(n["unref"])(a).name), 1), Object(n["createElementVNode"])("div", Qa, Object(n["toDisplayString"])(Object(n["unref"])(a).translit), 1), Object(n["createElementVNode"])("div", Fa, [Object(n["createElementVNode"])("div", Ja, [Ha, Object(n["createElementVNode"])("div", Xa, [Object(n["createElementVNode"])("div", Ka, Object(n["toDisplayString"])(Object(n["unref"])(a).sex), 1), Object(n["createElementVNode"])("div", _a, Object(n["toDisplayString"])("Ч" == Object(n["unref"])(a).sex ? "M" : "F"), 1)])]), Object(n["createElementVNode"])("div", qa, [$a, Object(n["createElementVNode"])("div", eo, [Object(n["createElementVNode"])("div", to, Object(n["toDisplayString"])(Object(n["unref"])(a).birthday), 1), io])]), "edoc" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", no, [ao, Object(n["createElementVNode"])("div", oo, [Object(n["createElementVNode"])("div", so, [Object(n["createTextVNode"])(" Паспорт громадянина України "), lo, Object(n["createTextVNode"])(" " + Object(n["toDisplayString"])(Object(n["unref"])(a).number), 1)])])])) : Object(n["createCommentVNode"])("", !0), "edoc" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", ro, [co, Object(n["createElementVNode"])("div", Ao, [Object(n["createElementVNode"])("div", ho, [Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(a).rnkopp) + " ", 1), go])])])) : Object(n["createCommentVNode"])("", !0), "passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", mo, uo)) : Object(n["createCommentVNode"])("", !0)]), "passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", bo, [Object(n["createElementVNode"])("div", xo, [jo, Object(n["createElementVNode"])("div", Mo, [Object(n["createElementVNode"])("div", Io, Object(n["toDisplayString"])(Object(n["unref"])(a).organ), 1), Co])]), Object(n["createElementVNode"])("div", yo, [vo, Object(n["createElementVNode"])("div", fo, [Object(n["createElementVNode"])("div", Oo, Object(n["toDisplayString"])(Object(n["unref"])(a).start), 1), Do])]), Object(n["createElementVNode"])("div", wo, [No, Object(n["createElementVNode"])("div", ko, [Object(n["createElementVNode"])("div", Eo, Object(n["toDisplayString"])(Object(n["unref"])(a).end), 1), Lo])])])) : Object(n["createCommentVNode"])("", !0), "passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Vo, [Object(n["createElementVNode"])("div", To, [Go, Object(n["createElementVNode"])("div", Bo, [Object(n["createElementVNode"])("div", So, [Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(a).rnkopp) + " ", 1), zo])])]), Object(n["createElementVNode"])("div", Zo, " Пройшов перевірку державною податковою службою " + Object(n["toDisplayString"])(Object(n["unref"])(a).checked), 1)])) : Object(n["createCommentVNode"])("", !0), "passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Ro, [Object(n["createElementVNode"])("div", Po, [Yo, Object(n["createElementVNode"])("div", Uo, [Object(n["createElementVNode"])("div", Wo, [Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(a).record) + " ", 1), Qo]), Fo])])])) : Object(n["createCommentVNode"])("", !0), Object(n["createElementVNode"])("div", Jo, [Object(n["createElementVNode"])("div", Ho, ["passport" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Xo, qo)) : Object(n["createCommentVNode"])("", !0), "edoc" == Object(n["unref"])(o) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", $o, ts)) : Object(n["createCommentVNode"])("", !0)]), Object(n["createElementVNode"])("div", is, Object(n["toDisplayString"])(Object(n["unref"])(a).cords), 1)]), "passport" == Object(n["unref"])(o) && Object(n["unref"])(a).regPlace && "0" != Object(n["unref"])(a).regPlace ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", ns, [as, Object(n["createElementVNode"])("div", os, Object(n["toDisplayString"])(Object(n["unref"])(a).regPlace), 1), Object(n["unref"])(a).regDate && "0" != Object(n["unref"])(a).regDate ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", ss, "Дата реєстрації: " + Object(n["toDisplayString"])(Object(n["unref"])(a).regDate), 1)) : Object(n["createCommentVNode"])("", !0)])) : Object(n["createCommentVNode"])("", !0)], 2))
            }
        };
        i("8d32");
        const rs = jt()(ls, [["__scopeId", "data-v-7d86dbe3"]]);
        var cs = rs
          , As = {
            __name: "ContextMenuNew",
            props: {
                bus: Object,
                docData: Object
            },
            setup(e) {
                const t = e
                  , i = Object(n["ref"])(null)
                  , a = Object(n["ref"])("")
                  , o = Object(n["ref"])(!1)
                  , l = Object(s["d"])()
                  , r = [{
                    label: "Повна інформація",
                    onClick: ()=>{
                        o.value = !0
                    }
                }, {
                    label: "Коди для перевірки",
                    onClick: ()=>{
                        t.bus.emit("rotateAllowed"),
                        A()
                    }
                }, {
                    label: "Змінити порядок документів",
                    onClick: ()=>{
                        l.push({
                            name: "DocumentsOrderMenu"
                        }),
                        A()
                    }
                }, {
                    label: "Питання та відповіді",
                    onClick: ()=>{
                        l.push({
                            name: "DocumentsFAQMenu"
                        }),
                        A()
                    }
                }]
                  , c = e=>{
                    a.value = e || "passport",
                    i.value.show()
                }
                ;
                t.bus.on("showContextMenu", c),
                Object(n["onUnmounted"])(()=>{
                    t.bus.off("showContextMenu", c)
                }
                );
                const A = ()=>{
                    o.value = !1,
                    i.value.hide()
                }
                ;
                return (e,s)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(ja, {
                    large: !!o.value,
                    ref_key: "popup",
                    ref: i
                }, {
                    default: Object(n["withCtx"])(()=>[!1 === o.value ? (Object(n["openBlock"])(),
                    Object(n["createBlock"])(pa, {
                        key: 0,
                        list: r,
                        onClose: s[0] || (s[0] = e=>A())
                    })) : (Object(n["openBlock"])(),
                    Object(n["createBlock"])(cs, {
                        key: 1,
                        type: a.value,
                        docData: t.docData,
                        onClose: s[1] || (s[1] = e=>A())
                    }, null, 8, ["type", "docData"]))]),
                    _: 1
                }, 8, ["large"]))
            }
        };
        const ds = As;
        var hs = ds
          , gs = {
            __name: "AddDocuments",
            props: {
                bus: Object
            },
            setup(e) {
                const t = e
                  , i = Object(n["ref"])(null)
                  , a = [{
                    label: "Свідоцтво про народження дитини"
                }, {
                    label: "COVID-сертифікати"
                }, {
                    label: "COVID-сертифікати моїх дітей"
                }, {
                    label: "Пенсійне посвідчення"
                }]
                  , o = ()=>{
                    var e, t;
                    null === i || void 0 === i || null === (e = i.value) || void 0 === e || null === (t = e.show) || void 0 === t || t.call(e)
                }
                ;
                return null === t || void 0 === t || t.bus.on("showAddDocsMenu", o),
                Object(n["onUnmounted"])(()=>{
                    t.bus.off("showContextMenu", o)
                }
                ),
                (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(ja, {
                    ref_key: "contextMenu",
                    ref: i
                }, {
                    default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(pa, {
                        list: a,
                        onClose: t[0] || (t[0] = e=>i.value.hide())
                    })]),
                    _: 1
                }, 512))
            }
        };
        const ms = gs;
        var ps = ms
          , us = i("08d9");
        const bs = .2
          , xs = e=>Math.cos((Math.max(0, Math.min(1, e)) + 1) * Math.PI) / 2 + .5
          , js = 180
          , Ms = e=>Math.cos((Math.max(0, Math.min(1, e)) + 1) * Math.PI) / 2 + .5
          , Is = 100;
        class Cs extends y["Container"] {
            constructor(e, t=(()=>{}
            )) {
                super(),
                Object(j["a"])(this, "container", void 0),
                Object(j["a"])(this, "xStart", 0),
                Object(j["a"])(this, "xMove", 0),
                Object(j["a"])(this, "lastMove", 0),
                Object(j["a"])(this, "state", "none"),
                Object(j["a"])(this, "speedMove", 0),
                Object(j["a"])(this, "cardIndex", 0),
                Object(j["a"])(this, "cardCount", void 0),
                Object(j["a"])(this, "cardsWidth", void 0),
                Object(j["a"])(this, "containerPadding", void 0),
                Object(j["a"])(this, "onUpdate", void 0),
                this.onUpdate = t,
                this.container = new y["Container"],
                this.container.addChild(...e),
                this.cardCount = e.length,
                this.addChild(this.container),
                this.interactive = !0,
                this.addListener("pointerdown", this.onPointerDown, this),
                this.addListener("pointerup", this.onPointerUp, this),
                this.addListener("pointerout", this.onPointerUp, this),
                this.addListener("pointerupoutside", this.onPointerUp, this),
                this.addListener("pointermove", this.onPointerMove, this)
            }
            onResize() {
                if (0 == this.container.children.length)
                    return;
                const {rp: e} = C
                  , t = .04 * e;
                for (let a of this.container.children) {
                    var i;
                    null === (i = a.onResize) || void 0 === i || i.call(a),
                    a.pivot.set(0, a.height / a.scale.y / 2)
                }
                this.cardsWidth = this.container.children[0].width + t,
                this.containerPadding = (window.innerWidth - this.container.children[0].width) / 2,
                this.container.position.y = this.container.children[0].height / this.container.children[0].scale.y / 2;
                let n = 0;
                for (let a of this.container.children)
                    a.position.x = n,
                    n += a.width + t;
                this.update()
            }
            onPointerDown(e) {
                "none" == this.state && (this.state = "move",
                this.xStart = e.data.global.x,
                this.xMove = 0,
                this.lastMove = Date.now(),
                this.speedMove = 0)
            }
            onPointerMove(e) {
                if ("move" != this.state)
                    return;
                const t = Date.now();
                this.speedMove = (this.xMove - e.data.global.x + this.xStart) / (t - this.lastMove),
                this.lastMove = t,
                this.xMove = e.data.global.x - this.xStart,
                0 == this.cardIndex && this.xMove > 0 && (this.xMove = 0),
                this.cardIndex == this.cardCount - 1 && this.xMove < 0 && (this.xMove = 0),
                this.xMove <= -this.cardsWidth && (this.xStart = e.data.global.x - (this.cardsWidth + this.xMove),
                this.xMove = e.data.global.x - this.xStart,
                this.cardIndex++),
                this.xMove >= this.cardsWidth && (this.xStart = e.data.global.x - (this.xMove - this.cardsWidth),
                this.xMove = e.data.global.x - this.xStart,
                this.cardIndex--),
                this.update()
            }
            onPointerUp() {
                if (0 == this.xMove || "move" != this.state)
                    return void (this.state = "none");
                this.state = "next";
                const e = this.xMove
                  , t = this.xMove < 0
                  , i = t ? 1 : -1
                  , n = Math.abs(this.speedMove) > bs || Math.abs(e) > this.cardsWidth / 2;
                Object(us["default"])(t=>{
                    if (n) {
                        const [n,a] = [xs, js];
                        if (this.xMove = e + n(t / a) * (-e - i * this.cardsWidth),
                        this.update(!0),
                        t >= a)
                            return this.cardIndex += i,
                            this.state = "none",
                            this.xMove = 0,
                            this.update(),
                            !0
                    } else {
                        const [n,a] = [Ms, Is];
                        if (this.xMove = e * (1 - n(t / a)),
                        this.update(),
                        this.xMove * i >= 0)
                            return this.state = "none",
                            this.xMove = 0,
                            this.update(),
                            !0
                    }
                }
                )
            }
            update(e=!1) {
                this.container.x = this.containerPadding + this.cardsWidth * -this.cardIndex + this.xMove;
                let t = Math.abs(this.xMove) / this.cardsWidth;
                for (let n = 0; n < this.container.children.length; ++n)
                    this.container.children[n].visible = !0,
                    n == this.cardIndex ? this.container.children[n].scale.y = 1 - .15 * t : 1 == Math.abs(n - this.cardIndex) ? this.container.children[n].scale.y = .85 + .15 * t : this.container.children[n].visible = !1;
                let i = this.cardIndex;
                0 != this.xMove && (i += this.xMove < 0 ? 1 : -1),
                null === this || void 0 === this || this.onUpdate(this.cardIndex, i, t, e)
            }
            setOfflineMode(e) {
                this.container.children.forEach(t=>{
                    var i;
                    return null === (i = t.setOfflineMode) || void 0 === i ? void 0 : i.call(t, e)
                }
                )
            }
        }
        class ys extends k["b"] {
            constructor() {
                super(),
                this.text = new y["Text"]("",{
                    fontFamily: "e-Ukraine",
                    fontWeight: 300,
                    padding: 2
                }),
                this.dots = new de,
                this.dots.mask = new y["Graphics"],
                this.marquee = new ke("Немає доступу до інтернету. Данні не оновлюються.  ",.5),
                this.gradient = new y["Graphics"],
                this.addChild(this.gradient, this.dots, this.dots.mask, this.text, this.marquee)
            }
            onResize() {
                const {rp: e} = C;
                this.text.style.fontSize = .028 * e,
                this.text.style.lineHeight = this.text.style.fontSize,
                this.dots.position.set((C.width - this.dots.width) / 2, C.height - 1.5 * this.dots.height),
                this.dots.mask.position.set(this.dots.position.x, this.dots.position.y),
                this.text.position.set(this.dots.position.x + (this.dots.width - this.text.width) / 2, this.dots.position.y - .06 * e),
                this.gradient.clear().beginFill(16378724).drawRect(0, 0, window.innerWidth, .08 * e).endFill(),
                this.marquee.setStyle({
                    fontFamily: "e-Ukraine",
                    fontWeight: 300,
                    fontSize: .03 * e
                }, window.innerWidth),
                this.marquee.speed = .001 * e,
                this.marquee.position.set(0, C.height - .01 * C.rp - this.marquee.height / 2 - this.gradient.height / 2),
                this.gradient.position.set(0, C.height - .01 * C.rp - .08 * e)
            }
            setOfflineMode(e) {
                this.dots.visible = !e,
                this.text.visible = !e,
                this.marquee.visible = e,
                this.gradient.visible = e
            }
            setInfo(e) {
                e != this.text.text && (this.text.text = e,
                this.onResize())
            }
            setProgress(e, t, i, n) {
                const a = this.dots;
                a.clear();
                let o = .0095 * C.rp;
                const s = 7
                  , l = Math.min(s, n);
                let r, c = 0;
                n < s || e < Math.floor(l / 2) ? r = e : n - e < Math.floor(l / 2) ? r = l - (n - e) : (r = Math.ceil(l / 2) - 1,
                c = i * (e - t) * 2 * o);
                for (let A = 0; A < l; ++A) {
                    let e = 0 == A && r >= Math.floor(l / 2) - 1 || A == l - 1 && r <= Math.ceil(l / 2) ? .8 * o : o;
                    a.beginFill(0, A == r ? 1 : .3).drawCircle(c + o, o, e).endFill(),
                    c += A == l - 1 ? o + o - e : 3 * o
                }
                this.dots.mask.clear().beginFill(0).drawRect(0, 0, 3 * l * o - o, 2 * o).endFill(),
                this.onResize()
            }
        }
        class vs extends y["Application"] {
            constructor(e) {
                super({
                    backgroundAlpha: 0,
                    transparent: !0,
                    view: e,
                    sharedTicker: !0,
                    sharedLoader: !0,
                    width: 0,
                    height: 0,
                    resolution: window.devicePixelRatio,
                    powerPreference: "high-performance"
                }),
                Object(j["a"])(this, "parent", void 0),
                this.parent = e.parentElement,
                this.ticker = y["Ticker"].shared,
                this.onWindowResizeHandler = ()=>this.onResize(),
                window.addEventListener("resize", this.onWindowResizeHandler),
                window.addEventListener("orientationchange", this.onWindowResizeHandler),
                this.onResize()
            }
            async init(e, t=!1) {
                this.stage.addChild(new y["Text"]("",{
                    fontFamily: "e-Ukraine",
                    fontWeight: 400
                })),
                At.isLoadDataProvided() ? await At.loadCheck() : await At.loadData(e);
                const {components: i, renewedInfo: n} = await At.generateDocuments()
                  , a = new ys
                  , o = new Cs(i,(e,t,o,s)=>{
                    if (!i[e] || !i[t])
                        return;
                    let l = Ce(i[e].color, i[t].color, o);
                    document.body.style.backgroundColor = "#" + l.toString(16);
                    let r = s ? t : e;
                    for (let n of i) {
                        var c;
                        null === (c = n.setColor) || void 0 === c || c.call(n, l, n === i[r])
                    }
                    a.setInfo(n[r]),
                    a.setProgress(e, t, o, i.length)
                }
                );
                this.stage.addChild(o, a),
                this.setOfflineMode(t);
                const s = ()=>{
                    o.onResize(),
                    a.onResize(),
                    o.position.set(0, (C.height - a.height - o.height) / 2)
                }
                ;
                this.resizeHandler = s,
                I.on("resize", s),
                s()
            }
            rp() {
                const e = .82 * window.innerWidth
                  , t = .7 * window.innerHeight;
                return Math.min(t, e / .735)
            }
            onResize() {
                let e = this.parent.offsetWidth
                  , t = this.parent.offsetHeight;
                this.renderer.resize(e, t),
                C.rp = this.rp(),
                C.width = e,
                C.height = t,
                this.view.style.transform = `scale(${1 / window.devicePixelRatio})`,
                I.emit("resize", {
                    width: e,
                    height: t
                })
            }
            setOfflineMode(e) {
                this.offline_enabled = e,
                this.stage.children.forEach(t=>{
                    var i;
                    return null === (i = t.setOfflineMode) || void 0 === i ? void 0 : i.call(t, e)
                }
                )
            }
            destroy() {
                super.destroy(),
                I.off("resize", this.resizeHandler),
                window.removeEventListener("resize", this.onWindowResizeHandler),
                window.removeEventListener("orientationchange", this.onWindowResizeHandler)
            }
        }
        var fs = {
            __name: "DocumentApp",
            setup(e) {
                const t = Object(n["computed"])(()=>gt.state.wm)
                  , i = Object(n["computed"])(()=>{
                    const e = gt.state.documents.find(e=>"passport" === e.type)
                      , t = gt.state.documents.find(e=>"rnkopp" === e.type)
                      , i = e.renewed.split(" ")[0].split(".");
                    return {
                        name: e.name,
                        translit: e.translit,
                        sex: e.sex,
                        number: e.number,
                        birthday: e.birhday,
                        start: e.start,
                        organ: e.organ,
                        end: e.end,
                        rnkopp: t.number,
                        record: e.record,
                        cords: e.cords,
                        checked: new Date(i[2],i[1] - 1,i[0] - 7,0,0,0,0).toLocaleDateString(),
                        regPlace: e.regPlace,
                        regDate: e.regDate
                    }
                }
                )
                  , a = Object(s["d"])()
                  , o = Object(n["ref"])(null);
                let l;
                const r = ([e,t])=>{
                    switch (console.log("Handled action", e, t),
                    e) {
                    case "routeTo":
                        a.push(t);
                        break;
                    case "routeExternal":
                        window.open(t, "_blank", "location=yes,scrollbars=yes,status=yes");
                        break;
                    default:
                        console.error("Unknown action", e, t)
                    }
                }
                ;
                return Object(n["onMounted"])(()=>{
                    gt.commit("changeLabel", ""),
                    gt.commit("changeColor", gt.state.documents[0].color),
                    l = new vs(o.value),
                    l.init(gt.getters.docsSorted(), gt.state.offline),
                    I.on("action", r)
                }
                ),
                Object(n["onUnmounted"])(()=>{
                    setTimeout(()=>{
                        var e;
                        null === (e = l) || void 0 === e || e.destroy(),
                        I.off("action", r)
                    }
                    , 500)
                }
                ),
                (e,a)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    class: Object(n["normalizeClass"])(["document bg-purple-500 flex-1", {
                        wm: Object(n["unref"])(t)
                    }]),
                    style: {
                        marginTop: "0px",
                        marginBottom: "0px"
                    }
                }, [Object(n["createElementVNode"])("canvas", {
                    ref_key: "canvas",
                    ref: o
                }, null, 512), Object(n["createVNode"])(hs, {
                    bus: Object(n["unref"])(I),
                    docData: Object(n["unref"])(i)
                }, null, 8, ["bus", "docData"]), Object(n["createVNode"])(ps, {
                    bus: Object(n["unref"])(I)
                }, null, 8, ["bus"])], 2))
            }
        };
        i("1ef3");
        const Os = jt()(fs, [["__scopeId", "data-v-aa15dac2"]]);
        var Ds = Os;
        const ws = {
            class: "notifications"
        }
          , Ns = Object(n["createElementVNode"])("br", null, null, -1);
        function ks(e, t, i, a, o, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", ws, [Object(n["createTextVNode"])(" 👌 "), Ns, Object(n["createTextVNode"])(" У вас немає нових повідомлень ")])
        }
        var Es = {
            mounted() {
                gt.commit("changeLabel", "Повідомлення")
            }
        };
        i("683c");
        const Ls = jt()(Es, [["render", ks]]);
        var Vs = Ls
          , Ts = i("5612")
          , Gs = i.n(Ts)
          , Bs = i("4890")
          , Ss = i.n(Bs)
          , zs = i("baea")
          , Zs = i.n(zs)
          , Rs = i("9417")
          , Ps = i.n(Rs)
          , Ys = i("e343")
          , Us = i.n(Ys)
          , Ws = i("3e4e")
          , Qs = i.n(Ws)
          , Fs = i("4bac")
          , Js = i.n(Fs)
          , Hs = i("75e1")
          , Xs = i.n(Hs)
          , Ks = i("090e")
          , _s = i.n(Ks)
          , qs = i("4588")
          , $s = i.n(qs);
        const el = {
            class: "menu"
        }
          , tl = {
            class: "menuList"
        }
          , il = Object(n["createStaticVNode"])('<div class="menuElement"><img src="' + Gs.a + '" alt="" class="menuIcon"> Підключені пристрої </div><div class="menuSpacer"></div><div class="menuElement"><img src="' + Ss.a + '" alt="" class="menuIcon"> Дія.Підпис </div><div class="menuSpacer"></div>', 4)
          , nl = Object(n["createElementVNode"])("img", {
            src: Zs.a,
            alt: "",
            class: "menuIcon"
        }, null, -1)
          , al = Object(n["createStaticVNode"])('<div class="menuElement"><img src="' + Ps.a + '" alt="" class="menuIcon"> Функції та підказки </div><div class="menuElement"><img src="' + Us.a + '" alt="" class="menuIcon"> Служба підтримки </div><div class="menuSpacer"></div><div class="menuElement"><img src="' + ya.a + '" alt="" class="menuIcon"> Копіювати номер пристрою </div>', 4)
          , ol = Object(n["createElementVNode"])("img", {
            src: Qs.a,
            alt: "",
            class: "menuIcon"
        }, null, -1)
          , sl = Object(n["createStaticVNode"])('<div class="menuSpacer"></div><div class="menuElement"><img src="' + Js.a + '" alt="" class="menuIcon"> Про Дію </div><div class="menuElement"><img src="' + Xs.a + '" alt="" class="menuIcon"> Розповісти друзям </div><div class="menuElement"><img src="' + _s.a + '" alt="" class="menuIcon"> Оновити застосунок </div><div class="menuElement"><img src="' + Ps.a + '" alt="" class="menuIcon"> Повідомлення про обробку персональних даних </div><div class="menuSpacer"></div>', 6)
          , ll = Object(n["createElementVNode"])("img", {
            src: $s.a,
            alt: "",
            class: "menuIcon"
        }, null, -1)
          , rl = Object(n["createElementVNode"])("div", {
            class: "menuVesrion"
        }, "Version 3.0.40.808", -1);
        var cl = {
            __name: "Menu",
            setup(e) {
                const t = Object(s["d"])()
                  , i = ()=>{
                    Promise.all([caches && caches.keys().then(e=>{
                        e.forEach(e=>{
                            caches.delete(e)
                        }
                        )
                    }
                    ), navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then((function(e) {
                        if (e.length)
                            for (let t of e)
                                t.unregister()
                    }
                    ))]).then(()=>{
                        localStorage.clear(),
                        location = "/"
                    }
                    )
                }
                ;
                return Object(n["onMounted"])(()=>{
                    gt.commit("changeLabel", "Вітаємо,\n" + gt.state.documents.filter(e=>"passport" === e.type)[0].name.split(" ")[1])
                }
                ),
                (e,a)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", el, [Object(n["createElementVNode"])("div", tl, [il, Object(n["createElementVNode"])("div", {
                    class: "menuElement",
                    onClick: a[0] || (a[0] = e=>Object(n["unref"])(t).push({
                        name: "DocumentsFAQMenu"
                    }))
                }, [nl, Object(n["createTextVNode"])(" Питання та відповіді ")]), al, Object(n["createElementVNode"])("div", {
                    class: "menuElement",
                    onClick: a[1] || (a[1] = e=>Object(n["unref"])(t).push({
                        name: "SettingsMenu"
                    }))
                }, [ol, Object(n["createTextVNode"])(" Налаштування ")]), sl, Object(n["createElementVNode"])("div", {
                    class: "menuElement",
                    onClick: i
                }, [ll, Object(n["createTextVNode"])(" Вийти ")]), rl])]))
            }
        };
        i("db9c");
        const Al = cl;
        var dl = Al;
        const hl = {
            class: "signature"
        }
          , gl = Object(n["createElementVNode"])("div", {
            class: "aboutSignature"
        }, "Розпишіться в полі знизу", -1)
          , ml = {
            ref: "pane",
            class: "signaturePane bg-gray rounded-2xl"
        }
          , pl = {
            ref: "signature"
        }
          , ul = {
            class: "control"
        };
        function bl(e, t, i, a, o, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", hl, [gl, Object(n["createElementVNode"])("div", ml, [Object(n["createElementVNode"])("canvas", pl, null, 512)], 512), Object(n["createElementVNode"])("div", ul, [Object(n["createElementVNode"])("button", {
                class: "w-1/3 clear bg-gray-light border-2 rounded-lg",
                onClick: t[0] || (t[0] = (...e)=>s.clear && s.clear(...e))
            }, " Знову "), Object(n["createElementVNode"])("button", {
                class: "w-1/3 save bg-gray-light border-2 rounded-lg",
                onClick: t[1] || (t[1] = (...e)=>s.save && s.save(...e))
            }, " Далі ")])])
        }
        var xl = i("90e2")
          , jl = {
            data() {
                return {
                    signaturePad: void 0
                }
            },
            mounted() {
                let e = this.$refs["signature"];
                e.width = .85 * window.innerWidth,
                e.height = e.width / 2,
                this.signaturePad = new xl["a"](e),
                window.s = this.signaturePad
            },
            methods: {
                clear() {
                    this.signaturePad.clear()
                },
                save() {
                    if (this.signaturePad.isEmpty())
                        return;
                    let e = this.signaturePad.toDataURL("image/png");
                    gt.dispatch("uploadSignature", e).then(()=>gt.dispatch("auth")).then(()=>this.$router.push("/app"))
                }
            }
        };
        i("ff0e");
        const Ml = jt()(jl, [["render", bl]]);
        var Il = Ml
          , Cl = i("858e")
          , yl = i.n(Cl)
          , vl = i("8f79")
          , fl = i.n(vl)
          , Ol = i("5020")
          , Dl = i.n(Ol);
        const wl = {
            class: "categoryList grid grid-cols-1 divide-y-2 divide-dblue"
        };
        function Nl(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", wl, [Object(n["renderSlot"])(e.$slots, "default", {}, void 0, !0)])
        }
        i("40fe");
        const kl = {}
          , El = jt()(kl, [["render", Nl], ["__scopeId", "data-v-24ae6fde"]]);
        var Ll = El;
        const Vl = {
            class: "categoryGrid"
        };
        function Tl(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", Vl, [Object(n["renderSlot"])(e.$slots, "default")])
        }
        i("e44e");
        const Gl = {}
          , Bl = jt()(Gl, [["render", Tl]]);
        var Sl = Bl;
        const zl = e=>(Object(n["pushScopeId"])("data-v-23ac7904"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , Zl = {
            class: "service w-full flex flex-col"
        }
          , Rl = {
            class: "categoryChoose"
        }
          , Pl = {
            class: "mb-large label"
        }
          , Yl = zl(()=>Object(n["createElementVNode"])("img", {
            src: yl.a,
            alt: "",
            class: "icon"
        }, null, -1))
          , Ul = zl(()=>Object(n["createElementVNode"])("img", {
            src: fl.a,
            alt: "",
            class: "icon"
        }, null, -1))
          , Wl = zl(()=>Object(n["createElementVNode"])("div", {
            class: "search"
        }, [Object(n["createElementVNode"])("img", {
            src: Dl.a,
            alt: "",
            class: "icon"
        }), Object(n["createTextVNode"])(" Пошук послуги ")], -1))
          , Ql = ["onClick"]
          , Fl = {
            key: 0,
            class: "mr-large text-xl"
        }
          , Jl = ["onClick"]
          , Hl = {
            key: 0,
            class: "mr-large text-xl"
        }
          , Xl = {
            class: "text-left w-2/3 break-words"
        }
          , Kl = {
            name: "Service"
        };
        var _l = Object.assign(Kl, {
            setup(e) {
                const t = Object(s["d"])()
                  , i = Object(a["s"])(!0)
                  , o = Object(a["s"])(null)
                  , l = Object(a["s"])([{
                    iconText: "⚡",
                    name: "Допомога армії",
                    route: {
                        name: "ArmySupportService"
                    }
                }, {
                    iconText: "💡",
                    name: "Обмін лампочок",
                    route: {
                        name: "LampsExchangeService"
                    }
                }, {
                    iconText: "😷",
                    name: "COVID-сертифікати",
                    route: {
                        name: "CovidCertificateService"
                    }
                }, {
                    iconText: "📃",
                    name: "Військові облігації",
                    route: {
                        name: "ArmyObligationService"
                    }
                }, {
                    iconText: "💬",
                    name: "Опитування",
                    route: {
                        name: "SurveyService"
                    }
                }, {
                    iconText: "🏚",
                    name: "Пошкоджене майно",
                    route: {
                        name: "DamagedEstateService"
                    }
                }, {
                    iconText: "📦",
                    name: "Послуги для ВПО",
                    route: {
                        name: "VPOService"
                    }
                }, {
                    iconText: "👔",
                    name: "Допомога по безробіттю",
                    route: {
                        name: "UnemployedService"
                    }
                }, {
                    iconText: "📺",
                    name: "Дія TV",
                    route: {
                        name: "TVService"
                    }
                }, {
                    iconText: "📻",
                    name: "Дія Радіо",
                    route: {
                        name: "RadioService"
                    }
                }, {
                    iconText: "🚔",
                    name: "Штрафи ПДР",
                    route: {
                        name: "AutoPenaltyService"
                    }
                }, {
                    iconText: "🏁",
                    name: "Шеринг авто",
                    route: {
                        name: "ShareAutoService"
                    }
                }, {
                    iconText: "💼",
                    name: "Податки ФОП",
                    route: {
                        name: "FOPTaxesService"
                    }
                }, {
                    iconText: "📋",
                    name: "Довідки та витяги",
                    route: {
                        name: "BlanksService"
                    }
                }, {
                    iconText: "🏛️",
                    name: "Виконавчі провадження",
                    route: {
                        name: "LawService"
                    }
                }])
                  , r = ()=>{
                    i.value = !i.value,
                    gt.state.componentStateStoreWorkaround["service"].column = i.value,
                    localStorage.setItem("column", i.value)
                }
                  , c = e=>{
                    gt.state.componentStateStoreWorkaround["service"].scroll = e.target.scrollTop
                }
                ;
                return Object(n["onMounted"])(()=>{
                    gt.state.componentStateStoreWorkaround["service"] || (gt.state.componentStateStoreWorkaround["service"] = {
                        column: !localStorage.getItem("column") || "true" == localStorage.getItem("column"),
                        scroll: 0
                    });
                    const e = gt.state.componentStateStoreWorkaround["service"];
                    i.value = null === e || void 0 === e ? void 0 : e.column,
                    o.value.scrollTo(0, null === e || void 0 === e ? void 0 : e.scroll),
                    gt.commit("changeLabel", "Послуги")
                }
                ),
                (e,a)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Zl, [Object(n["createElementVNode"])("div", Rl, [Object(n["createElementVNode"])("div", Pl, [Object(n["createTextVNode"])(" Категорії "), Object(n["unref"])(i) ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    key: 0,
                    class: "type",
                    onClick: r
                }, [Yl, Object(n["createTextVNode"])(" Плитками ")])) : (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    key: 1,
                    class: "type",
                    onClick: r
                }, [Ul, Object(n["createTextVNode"])(" Списком ")]))]), Wl]), Object(n["createElementVNode"])("div", {
                    class: "category",
                    onScroll: c,
                    ref_key: "scrollElement",
                    ref: o
                }, [Object(n["unref"])(i) ? (Object(n["openBlock"])(),
                Object(n["createBlock"])(Object(n["unref"])(Ll), {
                    key: 0
                }, {
                    default: Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),
                    Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])(Object(n["unref"])(l), e=>(Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", {
                        key: e,
                        class: "flex items-center",
                        onClick: i=>Object(n["unref"])(t).push(e.route)
                    }, [e.iconText ? (Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", Fl, Object(n["toDisplayString"])(e.iconText), 1)) : Object(n["createCommentVNode"])("", !0), Object(n["createTextVNode"])(" " + Object(n["toDisplayString"])(e.name), 1)], 8, Ql))), 128))]),
                    _: 1
                })) : (Object(n["openBlock"])(),
                Object(n["createBlock"])(Sl, {
                    key: 1
                }, {
                    default: Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),
                    Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])(Object(n["unref"])(l), e=>(Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", {
                        key: e,
                        onClick: i=>Object(n["unref"])(t).push(e.route)
                    }, [e.iconText ? (Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", Hl, Object(n["toDisplayString"])(e.iconText), 1)) : Object(n["createCommentVNode"])("", !0), Object(n["createElementVNode"])("div", Xl, Object(n["toDisplayString"])(e.name), 1)], 8, Jl))), 128))]),
                    _: 1
                }))], 544)]))
            }
        });
        i("127e");
        const ql = jt()(_l, [["__scopeId", "data-v-23ac7904"]]);
        var $l = ql;
        i("13d5");
        const er = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "21.0",
            height: "18.0",
            viewBox: "0 0 21.0 18.0"
        }
          , tr = Object(n["createElementVNode"])("path", {
            d: "M4.4142,8.0001L10.7071,1.7072L9.2929,0.293L1.2929,8.293L0.5858,9.0001L1.2929,9.7072L9.2929,17.7072L10.7071,16.293L4.4142,10.0001H21V8.0001H4.4142Z",
            fill: "#000000ff"
        }, null, -1)
          , ir = [tr];
        function nr(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", er, ir)
        }
        const ar = {}
          , or = jt()(ar, [["render", nr]]);
        var sr = or;
        const lr = {
            style: {
                transform: "scale(1.3)"
            },
            width: "16",
            height: "16",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }
          , rr = Object(n["createElementVNode"])("path", {
            d: "m8 0a8 8 0 1 0 8 8 8.0091 8.0091 0 0 0-8-8zm0 14.769a6.7692 6.7692 0 1 1 6.7692-6.7692 6.7769 6.7769 0 0 1-6.7692 6.7692zm0.92308-6.7692a0.92308 0.92308 0 1 1-0.92308-0.92308 0.92415 0.92415 0 0 1 0.92308 0.92308zm3.6923 0a0.92308 0.92308 0 1 1-0.92308-0.92308 0.92415 0.92415 0 0 1 0.92308 0.92308zm-7.3846 0a0.92308 0.92308 0 1 1-0.92308-0.92308 0.92415 0.92415 0 0 1 0.92308 0.92308z",
            style: {
                "stroke-width": "0.076923"
            }
        }, null, -1)
          , cr = [rr];
        function Ar(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", lr, cr)
        }
        const dr = {}
          , hr = jt()(dr, [["render", Ar]]);
        var gr = hr;
        const mr = {
            key: 0,
            class: "flex items-start pt-large px-xlarge"
        }
          , pr = {
            class: "text-base leading-none"
        }
          , ur = {
            key: 0,
            class: "ml-auto"
        }
          , br = {
            key: 1,
            class: "items-start bg-main-blue pt-large px-xlarge"
        }
          , xr = {
            class: "text-2xl text-left leading-none mt-xxlarge mb-xlarge"
        }
          , jr = {
            key: 2,
            class: "animate-load-bar h-middle bg-gray mt-large",
            style: {
                background: "linear-gradient(\n            90deg,\n            #1982d2 0%,\n            #bcabdf 50%,\n            #ecb6b6 100%\n          )"
            }
        }
          , Mr = {
            key: 0,
            class: "px-xlarge mt-large text-left text-sm"
        };
        var Ir = {
            __name: "ServiceTemplate",
            props: {
                title: String,
                back: [String, Number],
                help: Boolean,
                header: {
                    type: Boolean,
                    default: !1
                },
                infLoad: {
                    type: Boolean,
                    default: !1
                },
                backgroundStyle: String
            },
            setup(e) {
                const t = e
                  , i = Object(s["d"])()
                  , a = ()=>{
                    "number" == typeof t.back ? i.go(t.back) : i.push(t.back)
                }
                ;
                return (e,i)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    class: Object(n["normalizeClass"])([t.backgroundStyle, "bg-light-blue w-full h-full flex flex-col"])
                }, [Object(n["renderSlot"])(e.$slots, "header", {}, ()=>[t.header ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", br, [Object(n["createVNode"])(sr, {
                    class: "mr-xlarge",
                    onClick: i[1] || (i[1] = e=>a())
                }), Object(n["createElementVNode"])("div", xr, Object(n["toDisplayString"])(t.title), 1)])) : (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", mr, [Object(n["createVNode"])(sr, {
                    class: "mr-xlarge",
                    onClick: i[0] || (i[0] = e=>a())
                }), Object(n["createElementVNode"])("div", pr, Object(n["toDisplayString"])(t.title), 1), t.help ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", ur, [Object(n["createVNode"])(gr)])) : Object(n["createCommentVNode"])("", !0)])), t.infLoad ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", jr)) : Object(n["createCommentVNode"])("", !0)]), Object(n["renderSlot"])(e.$slots, "content", {}, ()=>[t.infLoad ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Mr, "Завантаження...")) : Object(n["createCommentVNode"])("", !0)])], 2))
            }
        };
        const Cr = Ir;
        var yr = Cr;
        const vr = {
            width: "295.57",
            height: "19.256",
            version: "1.1",
            viewBox: "0 0 295.57 19.256",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                "margin-bottom": "13px"
            }
        }
          , fr = Object(n["createStaticVNode"])('<defs><linearGradient id="Gradient0" x1="1.9978" x2="11.29" y1="59.638" y2="60.562" gradientTransform="matrix(2.243 0 0 .19139 0 13.924)" gradientUnits="userSpaceOnUse"><stop stop-color="#808080" offset=".01"></stop><stop stop-color="#232323" offset="1"></stop></linearGradient><linearGradient id="Gradient1" x1="40.776" x2="47.897" y1="59.638" y2="60.562" gradientTransform="matrix(2.243 0 0 .19139 0 13.924)" gradientUnits="userSpaceOnUse"><stop stop-color="#232323" offset=".01"></stop><stop stop-color="#808080" offset="1"></stop></linearGradient><linearGradient id="Gradient2" x1="77.86" x2="77.86" y1="26.699" y2="32.483" gradientTransform="matrix(.77028 0 0 .55732 0 13.924)" gradientUnits="userSpaceOnUse"><stop stop-color="#808080" offset=".01"></stop><stop stop-color="#181818" offset="1"></stop></linearGradient><linearGradient id="Gradient3" x1="64.131" x2="64.131" y1="6.4719" y2="14.423" gradientTransform="matrix(.75938 0 0 .56531 0 13.924)" gradientUnits="userSpaceOnUse"><stop stop-color="#808080" offset=".01"></stop><stop stop-color="#181818" offset="11"></stop></linearGradient><linearGradient id="Gradient4" x1="94.7" x2="94.7" y1="6.4719" y2="14.423" gradientTransform="matrix(.75938 0 0 .56531 0 13.924)" gradientUnits="userSpaceOnUse"><stop stop-color="#808080" offset=".01"></stop><stop stop-color="#181818" offset="1"></stop></linearGradient></defs><g transform="translate(0 -14.199)"><g fill="#000000ff"><path d="m133.62 29.595-1.1401-2.4963h-6.5782l-1.14 2.4963h-2.3587l5.5954-11.112h2.3718l5.6086 11.112zm-7.05-3.9247h5.2416l-2.6274-5.7068z" style="stroke-width:0.6552;"></path><path d="m147.19 25.768 1.9656 3.8264h-2.4767l-1.5987-3.2105c-0.20311-0.39312-0.36036-0.66831-0.46519-0.82556-0.10493-0.17035-0.28175-0.3145-0.53726-0.44554-0.24899-0.13104-0.57004-0.20311-0.96316-0.20311h-3.407v4.6847h-2.2343v-11.112h6.7093c1.14 0 2.077 0.24242 2.8108 0.73383 0.74695 0.48485 1.1138 1.2842 1.1138 2.398 0 1.4218-0.68797 2.3849-2.077 2.8894 0.44554 0.22277 0.83211 0.64865 1.1597 1.2645zm-3.4922-5.8379h-3.9902v3.5315h3.9902c1.4742 0 2.208-0.58968 2.208-1.769 0-1.1728-0.73381-1.7625-2.208-1.7625z" style="stroke-width:0.6552;"></path><path d="m166.05 18.482v11.112h-2.1425v-9.2711l-4.5275 9.2711h-2.0115l-4.534-9.2711v9.2711h-2.1556v-11.112h3.2301l4.475 9.2056 4.4488-9.2056z" style="stroke-width:0.6552;"></path><path d="m180.66 18.482-5.4775 6.7486v4.3637h-2.2211v-4.3768l-5.4316-6.7355h2.5618l3.9771 5.3006 4.0295-5.3006z" style="stroke-width:0.6552;"></path><path d="m198.12 28.207c-1.0614 0.91728-2.6667 1.3825-4.8223 1.3825-2.1556 0-3.7609-0.46519-4.8158-1.3825-1.0549-0.92384-1.579-2.3784-1.579-4.3702 0-1.9853 0.52417-3.4464 1.579-4.3768 1.0549-0.93039 2.6601-1.3956 4.8158-1.3956 2.1687 0 3.774 0.46519 4.8288 1.3956 1.0483 0.93039 1.579 2.3915 1.579 4.3768 0 1.9918-0.53071 3.4464-1.5856 4.3702zm-7.9869-1.1663c0.66828 0.70107 1.7232 1.0483 3.1646 1.0483 1.448 0 2.5094-0.34726 3.1712-1.0483 0.6683-0.70762 1.0024-1.7756 1.0024-3.2105 0-1.4414-0.33414-2.516-1.0024-3.217-0.66178-0.70762-1.7232-1.0614-3.1712-1.0614-1.4415 0-2.4963 0.35381-3.1646 1.0614-0.66178 0.70107-0.99592 1.7756-0.99592 3.217 0 1.4349 0.33414 2.5029 0.99592 3.2105z" style="stroke-width:0.6552;"></path><path d="m211.31 19.749h-7.4759v3.4071h7.1745v1.448h-7.1745v4.7764h-2.2146v-11.112h9.6904z" style="stroke-width:0.6552;"></path><path d="m224.01 18.268c1.8673 0 3.2825 0.42588 4.2457 1.2842 0.96968 0.85832 1.4545 2.2736 1.4545 4.2523 0 2.0246-0.4783 3.4529-1.4349 4.3047-0.96317 0.84521-2.385 1.2711-4.2654 1.2711h-6.4996v-11.112zm-0.19657 9.6118c1.3432 0 2.2932-0.30794 2.8436-0.93694 0.55038-0.629 0.82556-1.6708 0.82556-3.1253 0-1.4611-0.27518-2.5029-0.82556-3.1253-0.55036-0.62244-1.4939-0.93039-2.8436-0.93039h-4.0688v8.118z" style="stroke-width:0.6552;"></path><path d="m241.26 25.554 1.959 3.8264h-2.4701l-1.6052-3.2105c-0.19654-0.39312-0.3538-0.66831-0.46519-0.82556-0.0983-0.17035-0.28174-0.3145-0.53071-0.44554-0.25553-0.13104-0.57658-0.20311-0.96971-0.20311h-3.4005v4.6847h-2.2342v-11.112h6.7027c1.1401 0 2.077 0.24243 2.8174 0.73383 0.74041 0.48485 1.1139 1.2842 1.1139 2.398 0 1.4218-0.69452 2.3849-2.0836 2.8894 0.45209 0.22277 0.83865 0.64865 1.1663 1.2645zm-3.4922-5.8379h-3.9902v3.5315h3.9902c1.4677 0 2.208-0.58968 2.208-1.769 0-1.1728-0.74037-1.7625-2.208-1.7625z" style="stroke-width:0.6552;"></path><path d="m255.23 28.207c-1.0549 0.91728-2.6601 1.3825-4.8158 1.3825-2.1556 0-3.7609-0.46519-4.8223-1.3825-1.0483-0.92384-1.579-2.3784-1.579-4.3702 0-1.9853 0.53072-3.4464 1.579-4.3768 1.0614-0.93039 2.6667-1.3956 4.8223-1.3956 2.1622 0 3.774 0.46519 4.8223 1.3956 1.0549 0.93039 1.579 2.3915 1.579 4.3768 0 1.9918-0.52417 3.4464-1.5856 4.3702zm-7.9804-1.1663c0.66178 0.70107 1.7166 1.0483 3.1646 1.0483 1.448 0 2.5029-0.34726 3.1712-1.0483 0.66177-0.70762 0.9959-1.7756 0.9959-3.2105 0-1.4414-0.33413-2.516-0.9959-3.217-0.66833-0.70762-1.7232-1.0614-3.1712-1.0614-1.448 0-2.5028 0.35381-3.1646 1.0614-0.6683 0.70107-0.99589 1.7756-0.99589 3.217 0 1.4349 0.32759 2.5029 0.99589 3.2105z" style="stroke-width:0.6552;"></path><path d="m268.56 18.268h2.1622v11.112h-2.647l-7.2596-8.6356v8.6356h-2.1556v-11.112h2.4898l7.4104 8.8846z" style="stroke-width:0.6552;"></path><path d="m275.38 27.906h8.0983v1.4742h-10.313v-11.112h10.011v1.4808h-7.7969v3.1908h7.4955v1.4283h-7.4955z" style="stroke-width:0.6552;"></path><path d="m289.83 29.59c-1.8149 0-3.1778-0.26208-4.0819-0.78624-0.90416-0.52416-1.3694-1.3694-1.4021-2.5356h2.2211c0 1.2252 1.1335 1.828 3.4005 1.8215 1.1138 0 1.9459-0.14414 2.5094-0.43898 0.57003-0.30139 0.85176-0.79935 0.85176-1.4939 0-1.0483-0.86486-1.638-2.6012-1.7625l-1.9066-0.14414c-0.28829-0.01967-0.51762-0.03931-0.68795-0.06551-0.17693-0.01966-0.43243-0.05897-0.76658-0.12449-0.33417-0.05896-0.60281-0.13104-0.81248-0.21622-0.2162-0.08519-0.45863-0.20967-0.74037-0.36692-0.26862-0.1638-0.48485-0.3407-0.64866-0.53726-0.15068-0.20311-0.28829-0.45209-0.39966-0.76004-0.11139-0.30794-0.1638-0.64865-0.1638-1.0221 0-2.0639 1.8018-3.0926 5.4185-3.0926 1.6904 0 2.9877 0.22932 3.8854 0.68796 0.90418 0.46519 1.3694 1.2187 1.389 2.2801h-2.2342c0-0.56348-0.25554-0.96315-0.7666-1.1925-0.51104-0.22932-1.2776-0.34726-2.2932-0.34726-2.1228 0-3.1843 0.51761-3.1843 1.5528 0 0.23587 0.0328 0.43898 0.10492 0.61589 0.0786 0.17035 0.19657 0.3145 0.34725 0.42588 0.15725 0.10482 0.30795 0.20311 0.45209 0.27519 0.1507 0.07862 0.33416 0.13759 0.55693 0.18346 0.22277 0.03933 0.39311 0.06553 0.52415 0.08518 0.1376 0.0131 0.30141 0.02621 0.50451 0.03931l2.0246 0.17035c2.8239 0.28174 4.2326 1.3825 4.2326 3.2957 0 2.2998-1.9132 3.4529-5.733 3.4529z" style="stroke-width:0.6552;"></path><path d="m6.4996 22.572v-5.0844l-3.715-2.326-2.1687 7.751v3.4071l39.928 1.8608 10.831 4.6519h9.2908l10.831-4.6519 39.922-1.8608v-3.4071l-2.1622-7.751-3.715 2.326v5.0844l-31.876-1.828-7.43-4.9599h-20.429l-7.43 4.9599z" style="stroke-width:0.6552;"></path></g><path d="m7.1155 17.147v4.7699l31.057-1.7822 7.4497-4.973h20.803l7.4431 4.973 31.05 1.7822v-4.7699l4.7109-2.9484 2.4112 8.629v4.0885l-40.406 1.8804-10.844 4.6585h-9.5398l-10.844-4.6585-40.406-1.8804v-4.0885l2.4111-8.629zm33.428 11.034 10.831 4.6519h9.2908l10.831-4.6519 39.922-1.8608v-3.4071l-2.1622-7.751-3.715 2.326v5.0844l-31.876-1.828-7.43-4.9599h-20.429l-7.43 4.9599-31.876 1.828v-5.0844l-3.715-2.326-2.1687 7.751v3.4071z" fill="#818181ff" style="stroke-width:0.6552;"></path><path d="m0.61589 26.32 5.8837-1.5463h33.114l0.93039 3.4071z" fill="url(#Gradient0)" style="fill:url(#Gradient0);stroke-width:0.6552;"></path><path d="m111.42 26.32-5.8837-1.5463h-33.114l-0.93039 3.4071z" fill="url(#Gradient1)" style="fill:url(#Gradient1);stroke-width:0.6552;"></path><path d="m50.451 24.774h11.138l-0.92384 8.059h-9.2908z" fill="url(#Gradient2)" style="fill:url(#Gradient2);stroke-width:0.6552;"></path><path d="m50.451 24.774-4.6454-8.9894-7.43 4.9599z" fill="url(#Gradient3)" style="fill:url(#Gradient3);stroke-width:0.6552;"></path><path d="m61.589 24.774 4.6454-8.9894 7.43 4.9599z" fill="url(#Gradient4)" style="fill:url(#Gradient4);stroke-width:0.6552;"></path><path d="m42.09 21.983 8.3604 2.7912-0.93039-1.8608-5.5692-1.8608z" fill="#1de16bff" style="fill:#00ff00;stroke-width:0.6552;"></path><path d="m69.949 21.983-8.3604 2.7912 0.93039-1.8608 5.5692-1.8608z" fill="#1de16bff" style="fill:#00ff00;stroke-width:0.6552;"></path></g>', 2)
          , Or = [fr];
        function Dr(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", vr, Or)
        }
        const wr = {}
          , Nr = jt()(wr, [["render", Dr]]);
        var kr = Nr;
        const Er = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "17.0",
            height: "14.0",
            viewBox: "0 0 17.0 14.0"
        }
          , Lr = Object(n["createElementVNode"])("path", {
            d: "M-0,7L15,7M15,7L8.5839,1M15,7L8.5839,13",
            fill: "#00000000",
            "stroke-width": "2.0",
            stroke: "#000000ff"
        }, null, -1)
          , Vr = [Lr];
        function Tr(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Er, Vr)
        }
        const Gr = {}
          , Br = jt()(Gr, [["render", Tr]]);
        var Sr = Br;
        const zr = {
            class: "overflow-scroll no-scrollbar px-large mt-xlarge"
        }
          , Zr = {
            class: "m-middle"
        }
          , Rr = Object(n["createElementVNode"])("p", {
            class: "text-left text-xs"
        }, " Щоб посилити українську армію та зберегти життя тисяч військових, Генштаб ЗСУ, Міністерство цифрової трансформації та UNITED24 розпочинають проєкт «Армія дронів»! ", -1)
          , Pr = Object(n["createElementVNode"])("p", {
            class: "text-xs text-left underline"
        }, " Детальніше на сайті UNITED24 ", -1)
          , Yr = {
            class: "w-full bg-white rounded-lg p-large text-left mt-xlarge"
        }
          , Ur = Object(n["createElementVNode"])("p", {
            class: "text-small tracking-tighter"
        }, "Вкажіть суму внеску, грн", -1)
          , Wr = {
            class: "text-base py-small placeholder-grayer text-black border-b-2"
        }
          , Qr = Object(n["createElementVNode"])("p", {
            class: "text-left text-xs mt-large pt-middle"
        }, " Або виберіть розмір внеску з варіантів нижче: ", -1)
          , Fr = {
            class: "grid grid-cols-2 gap-middle mt-large"
        }
          , Jr = {
            class: "mt-xxlarge bg-white rounded-lg p-large"
        }
          , Hr = {
            class: "flex justify-between items-center"
        }
          , Xr = Object(n["createElementVNode"])("span", {
            class: ""
        }, "Вже зібрано", -1)
          , Kr = {
            class: "text-xs"
        }
          , _r = {
            class: "mt-large flex flex-col gap-middle"
        }
          , qr = {
            class: "bg-light-blue rounded-md p-large pb-small rounded-b-none border-b border-dblue"
        }
          , $r = {
            class: "text-left text-sm"
        }
          , ec = {
            class: "flex justify-between mt-middle"
        }
          , tc = {
            class: "text-xs flex items-center"
        }
          , ic = Object(n["createElementVNode"])("div", null, "💳", -1)
          , nc = {
            class: "text-left ml-middle",
            style: {
                "max-width": "5rem"
            }
        }
          , ac = {
            class: "text-xs flex items-center"
        }
          , oc = Object(n["createElementVNode"])("div", null, "👥", -1)
          , sc = {
            class: "text-left ml-middle",
            style: {
                "max-width": "5rem"
            }
        }
          , lc = {
            class: "bg-light-blue rounded-md p-large rounded-t-none text-xs text-left flex items-center justify-between"
        }
          , rc = {
            class: "border-t-2 border-dblue pt-xlarge pb-32px flex justify-center"
        };
        var cc = {
            __name: "ArmySupport",
            setup(e) {
                const t = e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                  , i = ()=>{
                    s.value && window.open("https://savelife.in.ua/donate/#donate-army-card-once", "_blank", "location=yes,scrollbars=yes,status=yes")
                }
                  , a = [{
                    name: "Армія дронів",
                    countMoney: 105325148,
                    countPeople: 164346
                }, {
                    name: "UNITED24",
                    countMoney: 112538235,
                    countPeople: 132035
                }, {
                    name: "Фонд «Повернись живим»",
                    countMoney: 320363132,
                    countPeople: 294136
                }]
                  , o = a.reduce((e,t)=>e + t.countMoney, 0)
                  , s = Object(n["ref"])(null);
                return (e,l)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Допомога армії"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", zr, [Object(n["createVNode"])(kr, {
                        class: "mt-middle ml-small scale-95 mb-middle"
                    }), Object(n["createElementVNode"])("div", Zr, [Rr, Pr, Object(n["createElementVNode"])("div", Yr, [Ur, Object(n["createElementVNode"])("div", Wr, [Object(n["withDirectives"])(Object(n["createElementVNode"])("input", {
                        type: "number",
                        class: "outline-none caret-black",
                        "onUpdate:modelValue": l[0] || (l[0] = e=>s.value = e),
                        placeholder: "Сума"
                    }, null, 512), [[n["vModelText"], s.value]])])]), Qr, Object(n["createElementVNode"])("div", Fr, [Object(n["createElementVNode"])("div", {
                        class: Object(n["normalizeClass"])(["rounded-full text-xs p-10px", {
                            "bg-black text-white": 100 == s.value,
                            "bg-white": 100 != s.value
                        }]),
                        onClick: l[1] || (l[1] = e=>s.value = 100)
                    }, " 100 грн ", 2), Object(n["createElementVNode"])("div", {
                        class: Object(n["normalizeClass"])(["rounded-full text-xs p-10px", {
                            "bg-black text-white": 500 == s.value,
                            "bg-white": 500 != s.value
                        }]),
                        onClick: l[2] || (l[2] = e=>s.value = 500)
                    }, " 500 грн ", 2), Object(n["createElementVNode"])("div", {
                        class: Object(n["normalizeClass"])(["rounded-full text-xs p-10px", {
                            "bg-black text-white": 1e3 == s.value,
                            "bg-white": 1e3 != s.value
                        }]),
                        onClick: l[3] || (l[3] = e=>s.value = 1e3)
                    }, " 1000 грн ", 2), Object(n["createElementVNode"])("div", {
                        class: Object(n["normalizeClass"])(["rounded-full text-xs p-10px", {
                            "bg-black text-white": 5e3 == s.value,
                            "bg-white": 5e3 != s.value
                        }]),
                        onClick: l[4] || (l[4] = e=>s.value = 5e3)
                    }, " 5000 грн ", 2)]), Object(n["createElementVNode"])("div", Jr, [Object(n["createElementVNode"])("div", null, [Object(n["createElementVNode"])("div", Hr, [Xr, Object(n["createElementVNode"])("span", Kr, Object(n["toDisplayString"])(t(Object(n["unref"])(o))) + " грн", 1)]), Object(n["createElementVNode"])("div", _r, [(Object(n["openBlock"])(),
                    Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])(a, (e,i)=>Object(n["createElementVNode"])("div", {
                        key: i
                    }, [Object(n["createElementVNode"])("div", qr, [Object(n["createElementVNode"])("div", $r, Object(n["toDisplayString"])(e.name), 1), Object(n["createElementVNode"])("div", ec, [Object(n["createElementVNode"])("div", tc, [ic, Object(n["createElementVNode"])("div", nc, Object(n["toDisplayString"])(t(e.countMoney)) + " грн ", 1)]), Object(n["createElementVNode"])("div", ac, [oc, Object(n["createElementVNode"])("div", sc, Object(n["toDisplayString"])(t(e.countPeople)), 1)])])]), Object(n["createElementVNode"])("div", lc, [Object(n["createTextVNode"])(" Що вже було придбано "), Object(n["createVNode"])(Sr)])])), 64))])])])])]), Object(n["createElementVNode"])("div", rc, [Object(n["createElementVNode"])("div", {
                        class: Object(n["normalizeClass"])(["py-large text-sm px-xxlarge text-white rounded-full", {
                            "bg-black": !!s.value,
                            "bg-grayer": !s.value
                        }]),
                        onClick: l[5] || (l[5] = e=>i())
                    }, " Перейти до оплати ", 2)])]),
                    _: 1
                }))
            }
        };
        const Ac = cc;
        var dc = Ac;
        const hc = {
            class: "px-xlarge mt-large text-left"
        }
          , gc = {
            class: "my-large text-xl"
        }
          , mc = Object(n["createElementVNode"])("p", {
            class: "text-xs"
        }, " Зараз послуга доступна в усіх містах та селищах міського типу, крім зони бойових дій та тимчасово окупованих територій. ", -1)
          , pc = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, " Обміняйте 5 лампочок розжарювання на 5 економних LED ламп зі звичайним або завуженим цоколем. Після замовлення через Дію, отримайте їх у зручному відділенні Укрпошти ", -1)
          , uc = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, "Що треба для обміну?", -1)
          , bc = Object(n["createElementVNode"])("ul", {
            class: "text-xs list-disc ml-large gap-y-small"
        }, [Object(n["createElementVNode"])("li", null, "вибрати поштове відділення, на якому забиратимете замовлення"), Object(n["createElementVNode"])("li", null, "визначитися, скільки ламп з яким цоколем(звичайним або завуженим) вам потрібно;"), Object(n["createElementVNode"])("li", null, "після сповіщення в Дії про готовність прийти до Укрпошти з цифровим або фізичним паспортом та 5 старими лампочками.")], -1)
          , xc = Object(n["createElementVNode"])("div", {
            class: "absolute text-sm bg-black text-white rounded-3xl px-xxlarge py-large bottom-xlarge mx-auto left-0 right-0",
            style: {
                width: "fit-content"
            }
        }, " Почати ", -1);
        var jc = {
            __name: "LampsExchange",
            setup(e) {
                const t = gt.state.documents.filter(e=>"passport" === e.type)[0].name.split(" ")[1];
                return (e,i)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !0,
                    back: -1,
                    title: "Обмін лампочок"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", hc, [Object(n["createElementVNode"])("div", gc, "Вітаємо, " + Object(n["toDisplayString"])(Object(n["unref"])(t)) + " 👋", 1), mc, pc, uc, bc, xc])]),
                    _: 1
                }))
            }
        };
        const Mc = jc;
        var Ic = Mc;
        const Cc = {
            style: {
                transform: "rotate(180deg)"
            },
            xmlns: "http://www.w3.org/2000/svg",
            width: "21.0",
            height: "18.0",
            viewBox: "0 0 21.0 18.0"
        }
          , yc = Object(n["createElementVNode"])("path", {
            d: "M4.4142,8.0001L10.7071,1.7072L9.2929,0.293L1.2929,8.293L0.5858,9.0001L1.2929,9.7072L9.2929,17.7072L10.7071,16.293L4.4142,10.0001H21V8.0001H4.4142Z",
            fill: "#000000ff"
        }, null, -1)
          , vc = [yc];
        function fc(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", Cc, vc)
        }
        const Oc = {}
          , Dc = jt()(Oc, [["render", fc]]);
        var wc = Dc;
        const Nc = {
            class: "mt-2 overflow-scroll no-scrollbar text-left"
        }
          , kc = {
            class: "flex items-center text-sm justify-between"
        }
          , Ec = {
            class: "flex items-center text-sm justify-between"
        }
          , Lc = Object(n["createElementVNode"])("div", {
            class: "flex items-center"
        }, null, -1);
        var Vc = {
            __name: "CovidCertificate",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "COVID-сертифікати",
                    header: !0
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", Nc, [Object(n["createVNode"])(Ll, null, {
                        default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", kc, [Object(n["createTextVNode"])(" COVID-сертифікати "), Object(n["createVNode"])(wc)]), Object(n["createElementVNode"])("div", Ec, [Object(n["createTextVNode"])(" COVID-сертифікати моїх дітей "), Object(n["createVNode"])(wc)]), Lc]),
                        _: 1
                    })])]),
                    _: 1
                }))
            }
        };
        const Tc = Vc;
        var Gc = Tc;
        const Bc = {
            class: "px-xlarge mt-large text-left"
        }
          , Sc = {
            class: "my-large text-xl"
        }
          , zc = Object(n["createElementVNode"])("p", {
            class: "text-xs"
        }, " Купуючи державні військові облігації, ви інвестуєте в перемогу України та отримуєте гарантований прибуток. ", -1)
          , Zc = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, " Військові облігації - це цінні папери, які випускає держава під час війни. Кошти з них повертаються на карту єПідтримка, через 3, 6, 12 чи більше місяців. Це залежить від дати виплати та строку облігації ", -1)
          , Rc = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, [Object(n["createTextVNode"])(" Облігації зараховуються на інвестиційний рахунок протягом 3 робочих днів."), Object(n["createElementVNode"])("br"), Object(n["createTextVNode"])(" Номінал однієї облігації — 1000 грн. ")], -1)
          , Pc = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, "Як купити облігації?", -1)
          , Yc = Object(n["createElementVNode"])("ul", {
            class: "text-xs mt-large gap-large list-disc space-y-large ml-large"
        }, [Object(n["createElementVNode"])("li", null, "Вибрати тип та продавця;"), Object(n["createElementVNode"])("li", null, "Вказати кількість;"), Object(n["createElementVNode"])("li", null, " Вибрати карту єПідтримка, на яку повернуться гроші та відсотки; "), Object(n["createElementVNode"])("li", null, "Підписати документи на відкриття інвестиційного рахунку.")], -1)
          , Uc = Object(n["createElementVNode"])("div", {
            class: "absolute text-sm bg-black text-white rounded-3xl px-xxlarge py-large bottom-xlarge mx-auto left-0 right-0",
            style: {
                width: "fit-content"
            }
        }, " Почати ", -1);
        var Wc = {
            __name: "ArmyObligations",
            setup(e) {
                const t = gt.state.documents.filter(e=>"passport" === e.type)[0].name.split(" ")[1];
                return (e,i)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !0,
                    back: -1,
                    title: "Військові облігації"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", Bc, [Object(n["createElementVNode"])("div", Sc, "Вітаємо, " + Object(n["toDisplayString"])(Object(n["unref"])(t)) + " 👋", 1), zc, Zc, Rc, Pc, Yc, Uc])]),
                    _: 1
                }))
            }
        };
        const Qc = Wc;
        var Fc = Qc
          , Jc = {
            __name: "Survey",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Опитування",
                    infLoad: !0
                }, {
                    content: Object(n["withCtx"])(()=>[]),
                    _: 1
                }))
            }
        };
        const Hc = Jc;
        var Xc = Hc;
        const Kc = {
            class: "px-xlarge mt-large text-left"
        }
          , _c = {
            class: "my-large text-xl"
        }
          , qc = Object(n["createElementVNode"])("p", {
            class: "text-xs"
        }, " Повідомте про пошкодження або знищення вашої нерухомості внаслідок військової агресії Російської Федерації ", -1)
          , $c = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, " Згодом буде створено спеціальну комісію, яка оцінить збитки. Про порядок та процедуру ми повідомимо пізніше ", -1)
          , eA = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, " Пошкодження побутової техніки чи ремонту вказувати не треба ", -1)
          , tA = Object(n["createElementVNode"])("p", {
            class: "text-xs mt-large"
        }, "Щоб подати заяву , потрібно вказати: ", -1)
          , iA = Object(n["createElementVNode"])("ul", {
            class: "text-xs mt-large gap-large list-disc space-y-large ml-large"
        }, [Object(n["createElementVNode"])("li", null, "дані про обʼєкт, що було пошкоджено;"), Object(n["createElementVNode"])("li", null, "фото, якщо вони є, та опис пошкодження;"), Object(n["createElementVNode"])("li", null, "Контактні дані.")], -1)
          , nA = Object(n["createElementVNode"])("div", {
            class: "absolute text-sm bg-black text-white rounded-3xl px-xxlarge py-large bottom-xlarge mx-auto left-0 right-0",
            style: {
                width: "fit-content"
            }
        }, " Почати ", -1);
        var aA = {
            __name: "DamagedEstate",
            setup(e) {
                const t = gt.state.documents.filter(e=>"passport" === e.type)[0].name.split(" ")[1];
                return (e,i)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !0,
                    back: -1,
                    title: "Пошкоджене майно"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", Kc, [Object(n["createElementVNode"])("div", _c, "Вітаємо, " + Object(n["toDisplayString"])(Object(n["unref"])(t)) + " 👋", 1), qc, $c, eA, tA, iA, nA])]),
                    _: 1
                }))
            }
        };
        const oA = aA;
        var sA = oA;
        const lA = {
            class: "box-wrap rounded-xl"
        }
          , rA = {
            class: "box bg-white rounded-lg text-xs p-large flex items-center text-left whitespace-pre-line"
        }
          , cA = {
            class: "text-4xl pr-middle self-start"
        };
        var AA = {
            __name: "StaticInfoBox",
            props: {
                emoji: String,
                text: String
            },
            setup(e) {
                const t = e;
                return (e,i)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", lA, [Object(n["createElementVNode"])("div", rA, [Object(n["createElementVNode"])("div", cA, Object(n["toDisplayString"])(t.emoji), 1), Object(n["createTextVNode"])(" " + Object(n["toDisplayString"])(t.text), 1)])]))
            }
        };
        i("af28");
        const dA = jt()(AA, [["__scopeId", "data-v-fd96a7da"]]);
        var hA = dA;
        const gA = {
            class: "px-xlarge mt-large text-left"
        }
          , mA = {
            class: "my-large text-xl"
        };
        var pA = {
            __name: "VPO",
            setup(e) {
                const t = gt.state.documents.filter(e=>"passport" === e.type)[0].name.split(" ")[1]
                  , i = "У вас вже є довідка переселенця. Громадяни, які отримали статус ВПО до 24 лютого 2022 року, можуть внести зміни в довідку та оформити виплати через органи соціального захисту або ЦНАП. "
                  , a = "☝️";
                return (e,o)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !0,
                    back: -1,
                    title: "Послуги ВПО"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", gA, [Object(n["createElementVNode"])("div", mA, "Вітаємо, " + Object(n["toDisplayString"])(Object(n["unref"])(t)) + " 👋", 1), Object(n["createVNode"])(hA, {
                        emoji: a,
                        text: i
                    })])]),
                    _: 1
                }))
            }
        };
        const uA = pA;
        var bA = uA;
        const xA = {
            class: "mt-2 overflow-scroll no-scrollbar text-left"
        }
          , jA = {
            class: "flex items-center text-sm justify-between"
        }
          , MA = {
            class: "flex items-center text-sm justify-between"
        }
          , IA = Object(n["createElementVNode"])("div", {
            class: "flex items-center"
        }, null, -1);
        var CA = {
            __name: "Unemployed",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Допомога по безробіттю",
                    header: !0
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", xA, [Object(n["createVNode"])(Ll, null, {
                        default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", jA, [Object(n["createTextVNode"])(" Отримати статус безробітного "), Object(n["createVNode"])(wc)]), Object(n["createElementVNode"])("div", MA, [Object(n["createTextVNode"])(" Скасувати статус безробітного "), Object(n["createVNode"])(wc)]), IA]),
                        _: 1
                    })])]),
                    _: 1
                }))
            }
        };
        const yA = CA;
        var vA = yA
          , fA = {
            __name: "TV",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Дія TV",
                    infLoad: !0
                }))
            }
        };
        const OA = fA;
        var DA = OA
          , wA = {
            __name: "Radio",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Дія Радіо",
                    infLoad: !0
                }))
            }
        };
        const NA = wA;
        var kA = NA;
        const EA = {
            class: "mt-2 overflow-scroll no-scrollbar px-large mt-xlarge"
        };
        var LA = {
            __name: "AutoPenalty",
            setup(e) {
                const t = "У вас все добре\n Штрафи сплачені або відсутні"
                  , i = "👌";
                return (e,a)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Штрафи ПДР"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", EA, [Object(n["createVNode"])(hA, {
                        emoji: i,
                        text: t
                    })])]),
                    _: 1
                }))
            }
        };
        const VA = LA;
        var TA = VA
          , GA = {
            __name: "ShareAuto",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Шеринг авто",
                    infLoad: !0
                }))
            }
        };
        const BA = GA;
        var SA = BA;
        const zA = {
            class: "mt-2 overflow-scroll no-scrollbar px-large mt-xlarge"
        };
        var ZA = {
            __name: "FopTaxes",
            setup(e) {
                const t = "Ви не зареєстровані як ФОП"
                  , i = "☝️";
                return (e,a)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Податки ФОП"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", zA, [Object(n["createVNode"])(hA, {
                        emoji: i,
                        text: t
                    })])]),
                    _: 1
                }))
            }
        };
        const RA = ZA;
        var PA = RA;
        const YA = {
            class: "mt-2 overflow-scroll no-scrollbar text-left"
        }
          , UA = {
            class: "flex items-center text-sm justify-between"
        }
          , WA = {
            class: "flex items-center text-sm justify-between"
        }
          , QA = {
            class: "flex items-center text-sm justify-between"
        }
          , FA = {
            class: "flex items-center text-sm justify-between"
        }
          , JA = Object(n["createElementVNode"])("br", null, null, -1)
          , HA = Object(n["createElementVNode"])("div", {
            class: "flex items-center"
        }, null, -1);
        var XA = {
            __name: "Blanks",
            setup(e) {
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Довідки та витяги",
                    header: !0
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", YA, [Object(n["createVNode"])(Ll, null, {
                        default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", UA, [Object(n["createTextVNode"])(" Довідка ОК-5 "), Object(n["createVNode"])(wc)]), Object(n["createElementVNode"])("div", WA, [Object(n["createTextVNode"])(" Довідка ОК-7 "), Object(n["createVNode"])(wc)]), Object(n["createElementVNode"])("div", QA, [Object(n["createTextVNode"])(" Витяг про місце проживання "), Object(n["createVNode"])(wc)]), Object(n["createElementVNode"])("div", FA, [Object(n["createTextVNode"])(" Витя про місце проживання "), JA, Object(n["createTextVNode"])(" дитини "), Object(n["createVNode"])(wc)]), HA]),
                        _: 1
                    })])]),
                    _: 1
                }))
            }
        };
        const KA = XA;
        var _A = KA;
        const qA = {
            class: "mt-2 overflow-scroll no-scrollbar px-xlarge mt-large"
        };
        var $A = {
            __name: "Law",
            setup(e) {
                const t = "У вас все добре\n Відкритих проваджень немає"
                  , i = "👌";
                return (e,a)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Виконавчі провадження"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", qA, [Object(n["createVNode"])(hA, {
                        emoji: i,
                        text: t
                    })])]),
                    _: 1
                }))
            }
        };
        const ed = $A;
        var td = ed
          , id = i("b041")
          , nd = i.n(id)
          , ad = i("e032")
          , od = i.n(ad)
          , sd = i("239b")
          , ld = i.n(sd)
          , rd = i("203a")
          , cd = i.n(rd);
        const Ad = e=>(Object(n["pushScopeId"])("data-v-da40a190"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , dd = {
            class: "switch"
        }
          , hd = Ad(()=>Object(n["createElementVNode"])("input", {
            type: "checkbox"
        }, null, -1))
          , gd = Ad(()=>Object(n["createElementVNode"])("span", {
            class: "slider round"
        }, null, -1))
          , md = [hd, gd];
        function pd(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("label", dd, md)
        }
        i("ba9b");
        const ud = {}
          , bd = jt()(ud, [["render", pd], ["__scopeId", "data-v-da40a190"]]);
        var xd = bd;
        const jd = {
            class: "bg-light-blue w-full h-full flex flex-col"
        }
          , Md = {
            class: "flex justify-between pt-large px-xlarge"
        }
          , Id = {
            class: "flex-1"
        }
          , Cd = Object(n["createElementVNode"])("div", {
            class: "text-base leading-none"
        }, " Налаштування ", -1)
          , yd = Object(n["createElementVNode"])("div", {
            class: "flex-1"
        }, null, -1)
          , vd = {
            class: "pl-xlarge pr-large mt-xxxxlarge text-left text-sm"
        }
          , fd = Object(n["createElementVNode"])("img", {
            src: nd.a,
            alt: "",
            class: "menuIcon",
            style: {
                "margin-right": "15px"
            }
        }, null, -1)
          , Od = Object(n["createElementVNode"])("div", {
            class: "menuElement"
        }, [Object(n["createElementVNode"])("img", {
            src: od.a,
            alt: "",
            class: "menuIcon",
            style: {
                width: "16px",
                "margin-right": "15px"
            }
        }), Object(n["createTextVNode"])(" Змінити код для входу ")], -1)
          , Dd = {
            class: "menuElement"
        }
          , wd = Object(n["createElementVNode"])("img", {
            src: ld.a,
            alt: "",
            class: "menuIcon",
            style: {
                width: "16px",
                "margin-right": "15px"
            }
        }, null, -1)
          , Nd = {
            class: "ml-auto"
        }
          , kd = {
            class: "menuElement"
        }
          , Ed = Object(n["createElementVNode"])("img", {
            src: cd.a,
            alt: "",
            class: "menuIcon",
            style: {
                width: "18px",
                "margin-right": "15px"
            }
        }, null, -1)
          , Ld = {
            class: "ml-auto"
        };
        var Vd = {
            __name: "Settings",
            setup(e) {
                const t = Object(s["d"])()
                  , i = ()=>{
                    t.go(-1)
                }
                ;
                return (e,a)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", jd, [Object(n["createElementVNode"])("div", Md, [Object(n["createElementVNode"])("div", Id, [Object(n["createVNode"])(sr, {
                    onClick: a[0] || (a[0] = e=>i())
                })]), Cd, yd]), Object(n["createElementVNode"])("div", vd, [Object(n["createElementVNode"])("div", {
                    class: "menuElement",
                    onClick: a[1] || (a[1] = e=>Object(n["unref"])(t).push({
                        name: "DocumentsOrderMenu"
                    }))
                }, [fd, Object(n["createTextVNode"])(" Порядок відображення документів ")]), Od, Object(n["createElementVNode"])("div", Dd, [wd, Object(n["createTextVNode"])(" Біометрична авторізація "), Object(n["createElementVNode"])("div", Nd, [Object(n["createVNode"])(Object(n["unref"])(xd))])]), Object(n["createElementVNode"])("div", kd, [Ed, Object(n["createTextVNode"])(" Дозволити сповіщення "), Object(n["createElementVNode"])("div", Ld, [Object(n["createVNode"])(Object(n["unref"])(xd))])])])]))
            }
        };
        const Td = Vd;
        var Gd = Td
          , Bd = i("b76a")
          , Sd = i.n(Bd);
        const zd = e=>(Object(n["pushScopeId"])("data-v-1db8f381"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , Zd = {
            class: "overflow-scroll no-scrollbar px-large mt-xlarge"
        }
          , Rd = zd(()=>Object(n["createElementVNode"])("div", {
            class: "text-xs"
        }, [Object(n["createTextVNode"])("Перетягніть документи, щоб"), Object(n["createElementVNode"])("br"), Object(n["createTextVNode"])(" змінити порядок їх відображення ")], -1))
          , Pd = {
            class: "padding-2 text-middle"
        }
          , Yd = {
            class: "borderImage"
        }
          , Ud = ["src"];
        var Wd = {
            __name: "DocumentsOrder",
            setup(e) {
                const t = gt.getters.docsOrder()
                  , i = Object(n["ref"])(t.map((e,t)=>({
                    name: e,
                    order: t + 1
                })))
                  , a = Object(n["ref"])(!1)
                  , o = Object(n["ref"])()
                  , s = Object(n["ref"])({
                    animation: 200,
                    group: "description",
                    disabled: !1,
                    ghostClass: "ghost"
                });
                Object(n["onMounted"])(async()=>{
                    At.isLoadDataProvided() || await At.loadData(gt.getters.docsSorted()),
                    o.value = await At.prerenderDocuments()
                }
                ),
                Object(n["onUnmounted"])(()=>{
                    At.generateDocuments(gt.getters.docsSorted())
                }
                );
                const l = ()=>{
                    a.value = !1;
                    let e = new Array(t.length);
                    for (let t in i.value)
                        e[t] = i.value[t].name;
                    gt.commit("changeOrder", e)
                }
                ;
                return (e,t)=>(Object(n["openBlock"])(),
                Object(n["createBlock"])(yr, {
                    help: !1,
                    back: -1,
                    title: "Порядок відображення",
                    backgroundStyle: "bg-main-blue"
                }, {
                    content: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", Zd, [Rd, o.value ? (Object(n["openBlock"])(),
                    Object(n["createBlock"])(Object(n["unref"])(Sd.a), Object(n["mergeProps"])({
                        key: 0,
                        class: "grid gap-y-middle grid-cols-2 mt-xlarge",
                        modelValue: i.value,
                        "onUpdate:modelValue": t[0] || (t[0] = e=>i.value = e),
                        group: "docs",
                        onStart: t[1] || (t[1] = e=>a.value = !0),
                        onEnd: t[2] || (t[2] = e=>l()),
                        "item-key": "id"
                    }, s.value, {
                        "ghost-class": "ghost"
                    }), {
                        item: Object(n["withCtx"])(({element: e, index: t})=>[Object(n["createElementVNode"])("div", Pd, [Object(n["createElementVNode"])("div", Yd, [Object(n["createElementVNode"])("img", {
                            style: {
                                height: "200px"
                            },
                            class: "shadow-lg drop-shadow-2xl",
                            src: o.value[e.name]
                        }, null, 8, Ud)]), Object(n["createTextVNode"])(" " + Object(n["toDisplayString"])(t + 1), 1)])]),
                        _: 1
                    }, 16, ["modelValue"])) : Object(n["createCommentVNode"])("", !0)])]),
                    _: 1
                }))
            }
        };
        i("d87b");
        const Qd = jt()(Wd, [["__scopeId", "data-v-1db8f381"]]);
        var Fd = Qd
          , Jd = i("c5d4")
          , Hd = i.n(Jd);
        const Xd = {
            class: "w-full h-full flex flex-col"
        }
          , Kd = {
            class: "flex justify-between py-large px-xlarge bg-main-blue"
        }
          , _d = {
            class: "flex-1"
        }
          , qd = Object(n["createElementVNode"])("div", {
            class: "text-base leading-none m-small"
        }, " Питання та відповіді ", -1)
          , $d = Object(n["createElementVNode"])("div", {
            class: "flex-1"
        }, null, -1)
          , eh = {
            class: "flex-1 text-left text-sm bg-light-blue w-full flex flex-col overflow-scroll no-scrollbar"
        }
          , th = ["onClick"]
          , ih = Object(n["createElementVNode"])("img", {
            class: "h-large mr-large",
            src: Hd.a
        }, null, -1);
        var nh = {
            __name: "DocumentsFAQMenu",
            setup(e) {
                const t = Object(s["d"])()
                  , i = ()=>{
                    t.go(-1)
                }
                  , a = ["Загальні питання", "єОселя", "Обмін лампочок", "Допомога по безробіттю", "Військові облігації", "Пошкоджене майно", "Дія.TV та Дія.Радіо", "єДокумент", "COVID-сертифікати", "Дія.Підпис", "Довідки ОК-5 та ОК-7", "Витяг про місце проживання", "Запит на копію нотаріального документа", "Опитування", "Виконавчі провадження", "Шеринг авто", "Податкові послуги", "Штрафи ПДР", "Підключенні пристрої", "Студентський квиток"];
                return (e,o)=>(Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", Xd, [Object(n["createElementVNode"])("div", Kd, [Object(n["createElementVNode"])("div", _d, [Object(n["createVNode"])(sr, {
                    onClick: o[0] || (o[0] = e=>i())
                })]), qd, $d]), Object(n["createElementVNode"])("div", eh, [Object(n["createVNode"])(Object(n["unref"])(Ll), null, {
                    default: Object(n["withCtx"])(()=>[(Object(n["openBlock"])(),
                    Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])(a, e=>Object(n["createElementVNode"])("div", {
                        key: e,
                        class: "flex items-center justify-between text-base",
                        onClick: i=>Object(n["unref"])(t).push(e.route)
                    }, [Object(n["createTextVNode"])(Object(n["toDisplayString"])(e) + " ", 1), ih], 8, th)), 64))]),
                    _: 1
                })])]))
            }
        };
        const ah = nh;
        var oh = ah;
        const sh = !1
          , lh = !1;
        function rh(e, t, i) {
            gt.commit("toDefaultColor"),
            gt.state.colorBottom = "#e2ecf5",
            i()
        }
        function ch(e, t, i) {
            sh ? i() : lh || window.matchMedia("(display-mode: standalone)").matches ? localStorage.getItem("token") ? gt.state.auth ? i() : gt.dispatch("auth").then(()=>{
                i()
            }
            ).catch(e=>{
                console.error(e),
                i("/login")
            }
            ) : i("/login") : i("/")
        }
        const Ah = [{
            path: "/",
            name: "Install",
            component: Nn,
            beforeEnter: (e,t,i)=>{
                lh || window.matchMedia("(display-mode: standalone)").matches ? i("/app") : i()
            }
        }, {
            path: "/clearData",
            name: "Clear",
            beforeEnter: (e,t,i)=>{
                Promise.all([caches && caches.keys().then(e=>{
                    e.forEach(e=>{
                        caches.delete(e)
                    }
                    )
                }
                ), navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then((function(e) {
                    if (e.length)
                        for (let t of e)
                            t.unregister()
                }
                ))]).then(()=>i("/app"))
            }
        }, {
            path: "/app",
            name: "App",
            component: _i,
            redirect: "/app/docs",
            beforeEnter: (e,t,i)=>{
                ch(e, t, i)
            }
            ,
            children: [{
                path: "docs",
                component: Ds,
                beforeEnter: function(e, t, i) {
                    if (gt.state.colorBottom = void 0,
                    !sh)
                        return gt.state.nosign ? (console.info("Generation of signature"),
                        void i("/app/signature")) : void (0 != gt.state.loaded ? i() : i("/loading"));
                    i()
                }
            }, {
                path: "service",
                name: "Service",
                component: $l,
                beforeEnter: rh
            }, {
                path: "notification",
                component: Vs,
                beforeEnter: rh
            }, {
                path: "menu",
                component: dl,
                beforeEnter: rh
            }, {
                path: "signature",
                component: Il,
                beforeEnter: rh
            }]
        }, {
            name: "ArmySupportService",
            path: "/app/service/army-support",
            meta: {
                slide: !0
            },
            component: dc
        }, {
            name: "LampsExchangeService",
            path: "/app/service/lamps-exchange",
            meta: {
                slide: !0
            },
            component: Ic
        }, {
            name: "CovidCertificateService",
            path: "/app/service/covid-certificate",
            meta: {
                slide: !0
            },
            component: Gc
        }, {
            name: "ArmyObligationService",
            path: "/app/service/army-obligations",
            meta: {
                slide: !0
            },
            component: Fc
        }, {
            name: "SurveyService",
            path: "/app/service/survey",
            meta: {
                slide: !0
            },
            component: Xc
        }, {
            name: "DamagedEstateService",
            path: "/app/service/damaged-estate",
            meta: {
                slide: !0
            },
            component: sA
        }, {
            name: "VPOService",
            path: "/app/service/vpo",
            meta: {
                slide: !0
            },
            component: bA
        }, {
            name: "UnemployedService",
            path: "/app/service/unemployed",
            meta: {
                slide: !0
            },
            component: vA
        }, {
            name: "TVService",
            path: "/app/service/tv",
            meta: {
                slide: !0
            },
            component: DA
        }, {
            name: "RadioService",
            path: "/app/service/radio",
            meta: {
                slide: !0
            },
            component: kA
        }, {
            name: "AutoPenaltyService",
            path: "/app/service/auto-penalty",
            meta: {
                slide: !0
            },
            component: TA
        }, {
            name: "ShareAutoService",
            path: "/app/service/share-auto",
            meta: {
                slide: !0
            },
            component: SA
        }, {
            name: "FOPTaxesService",
            path: "/app/service/fop-taxes",
            meta: {
                slide: !0
            },
            component: PA
        }, {
            name: "BlanksService",
            path: "/app/service/blanks",
            meta: {
                slide: !0
            },
            component: _A
        }, {
            name: "LawService",
            path: "/app/service/law",
            meta: {
                slide: !0
            },
            component: td
        }, {
            name: "SettingsMenu",
            path: "/app/menu/settings",
            meta: {
                slide: !0
            },
            component: Gd
        }, {
            name: "DocumentsFAQMenu",
            path: "/app/menu/documents-faq",
            meta: {
                slide: !0
            },
            component: oh
        }, {
            name: "DocumentsOrderMenu",
            path: "/app/menu/documents-order",
            meta: {
                slideDisabled: !0
            },
            component: Fd
        }, {
            path: "/login",
            name: "Login",
            component: dn,
            beforeEnter: (e,t,i)=>{
                sh ? i() : lh || window.matchMedia("(display-mode: standalone)").matches ? localStorage.getItem("token") ? i("/app") : i() : i("/")
            }
        }, {
            path: "/loading",
            component: ia,
            beforeEnter: function(e, t, i) {
                gt.state.loaded ? i("/app/") : (sh || !localStorage.getItem("token") || gt.state.auth || gt.dispatch("auth").catch(e=>{
                    console.warn(e)
                }
                ),
                i())
            }
        }, {
            path: "/scanner",
            component: Yn
        }, {
            path: "/:pathMatch(.*)*",
            component: ra
        }]
          , dh = Object(s["a"])({
            history: Object(s["b"])("/"),
            mode: "history",
            routes: Ah
        });
        var hh = dh
          , gh = (i("a766"),
        i("9483"));
        Object(gh["a"])("/service-worker.js", {
            ready() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered() {
                console.log("Service worker has been registered.")
            },
            cached() {
                console.log("Content has been cached for offline use.")
            },
            updatefound() {
                console.log("New content is downloading.")
            },
            updated() {
                console.log("New content is available; please refresh."),
                window.location.reload(!0)
            },
            offline() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error(e) {
                console.error("Error during service worker registration:", e)
            }
        });
        var mh = i("8a39")
          , ph = i("1ddb")
          , uh = i("688d")
          , bh = i("36e7");
        let xh = Object(n["createApp"])(c);
        xh.config.performance = !0,
        xh.use(hh),
        mh["a"]({
            app: xh,
            dsn: "https://66fc72435e0147ddb122e273179110a7@sentry-bitch.fundocs.net/2",
            release: "beta-release-2",
            integrations: [new uh["a"]({
                routingInstrumentation: ph["a"](hh),
                tracePropagationTargets: ["*"]
            }), new bh["a"]({
                levels: ["info", "error"]
            })],
            tracesSampleRate: 1
        }),
        xh.mount("#app")
    },
    5732: function(e, t, i) {
        "use strict";
        i("2e50")
    },
    "683c": function(e, t, i) {
        "use strict";
        i("4b92")
    },
    6892: function(e, t, i) {
        e.exports = i.p + "img/barcode_black.23cf8d42.png"
    },
    "702e": function(e, t, i) {},
    "75e1": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "78a3": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "7eed": function(e, t, i) {},
    "854a": function(e, t, i) {
        "use strict";
        i("eeb4")
    },
    "858e": function(e, t, i) {
        e.exports = i.p + "img/grid_service.d733889e.png"
    },
    "85de": function(e, t, i) {
        "use strict";
        i("f474")
    },
    "8a4b": function(e, t, i) {},
    "8cc4": function(e, t, i) {
        "use strict";
        i("f8fb")
    },
    "8d32": function(e, t, i) {
        "use strict";
        i("4f35")
    },
    "8f79": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    9417: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "980c": function(e, t, i) {},
    "9d55": function(e, t, i) {
        "use strict";
        i("d84e")
    },
    a107: function(e, t, i) {
        "use strict";
        i("702e")
    },
    a766: function(e, t, i) {},
    ae0c: function(e) {
        e.exports = JSON.parse('{"v":"5.6.0","fr":57.6439971923828,"ip":0,"op":171.999991622543,"w":750,"h":1334,"nm":"Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":88,"s":[897,667,0],"to":[-53,0,0],"ti":[53,0,0]},{"t":111.999994544911,"s":[579,667,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[576.383,221.906],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.945097979377,0.352940996955,0.141176006841,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.698038976333,0.282353001015,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-106.809,-8.047],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"logo.mincifra Outlines","cl":"mincifra","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":88,"s":[96.5,667,0],"to":[45.667,0,0],"ti":[-45.667,0,0]},{"t":111.999994544911,"s":[370.5,667,0]}],"ix":2},"a":{"a":0,"k":[546,120,0],"ix":1},"s":{"a":0,"k":[69.048,69.048,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[120,118.866],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[120,120],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.832,-16.318],[-8.16,7.181],[-8.16,-16.318],[-14.622,-16.318],[-14.622,16.319],[-7.831,16.319],[8.16,-7.397],[8.16,16.319],[14.622,16.319],[14.622,-16.318]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[520.532,208.232],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.996,-16.318],[7.996,-3.263],[-7.996,-3.263],[-7.996,-16.318],[-14.567,-16.318],[-14.567,16.319],[-7.996,16.319],[-7.996,2.611],[7.996,2.611],[7.996,16.319],[14.567,16.319],[14.567,-16.318]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[481.047,208.232],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.285,21.867],[3.286,21.867],[3.286,-10.771],[-3.285,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.082,-15.34],[9.201,-15.34],[9.201,-21.867],[2.082,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.201,-15.34],[-2.082,-15.34],[-2.082,-21.867],[-9.201,-21.867]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[452.35,202.684],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":5,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.039,0],[0,3.046],[-4.162,0.654],[-1.205,0.761],[0,0]],"o":[[-3.395,0],[0,-4.243],[3.177,-0.544],[0,0],[0,4.134]],"v":[[-3.615,11.531],[-8.981,6.854],[-0.548,1.305],[5.805,-0.326],[5.805,3.917]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,1.415],[0,0],[7.886,0],[3.833,-3.59],[0,0],[-3.724,0],[0,-2.611],[4.928,-0.653],[0,-8.05],[-6.462,0],[-2.3,3.372],[-4.052,0],[-0.329,0.109],[0,0]],"o":[[-1.424,0],[0,0],[0,-6.745],[-5.695,0],[0,0],[2.629,-2.719],[4.162,0],[0,2.502],[-6.353,0.979],[0,5.658],[4.819,0],[0.438,3.807],[1.096,0],[0,0],[0,0]],"v":[[14.239,10.661],[12.158,8.594],[12.158,-6.092],[-0.548,-16.863],[-14.786,-11.314],[-10.734,-7.072],[-0.876,-11.423],[6.024,-7.072],[-1.314,-3.482],[-15.444,7.288],[-4.71,16.863],[6.791,11.314],[13.143,16.536],[15.444,16.318],[15.444,10.661]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[425.735,208.231],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.852],[-5.805,0],[0,-6.855]],"o":[[-5.805,0],[0,-6.855],[5.805,0],[0,6.852]],"v":[[-0.219,6.147],[-9.748,-5.166],[-0.219,-16.482],[9.2,-5.166]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.007]],"o":[[-4.709,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.155],[8.434,0],[0,-10.228]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.799],[1.533,11.695],[15.882,-5.166]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[390.138,213.399],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0.979],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.053,0],[0,0],[0,0]],"o":[[-0.985,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,3.916],[0,0],[0,0],[0,0]],"v":[[13.089,15.992],[11.446,14.36],[11.446,2.392],[5.421,2.392],[13.746,-10.879],[6.736,-10.879],[-1.041,2.067],[-7.722,2.067],[-7.722,-21.758],[-14.294,-21.758],[-14.294,21.758],[-7.722,21.758],[-7.722,8.05],[4.983,8.05],[4.983,15.775],[11.336,21.758],[14.293,21.758],[14.293,15.992]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[352.295,202.792],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.738,0],[0,2.612],[-0.767,0.87],[0,0],[0,0]],"o":[[-2.629,0],[0,-1.195],[0,0],[0,0],[-1.315,3.372]],"v":[[-4.381,15.176],[-8.653,10.823],[-7.448,7.67],[2.191,7.67],[1.315,10.172]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-3.482],[-6.243,0],[-2.519,6.854],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.628,1.958],[0,5.984],[5.805,0],[0,0],[0,0]],"v":[[12.158,-20.942],[4.053,2.447],[0.657,2.447],[-11.719,-20.942],[-19.496,-20.942],[-6.462,2.447],[-10.953,2.447],[-15.005,10.933],[-4.6,20.942],[7.886,10.498],[19.496,-20.942]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[311.496,204.152],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.29,21.867],[3.29,21.867],[3.29,-10.771],[-3.29,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.08,-15.34],[9.2,-15.34],[9.2,-21.867],[2.08,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.2,-15.34],[-2.08,-15.34],[-2.08,-21.867],[-9.2,-21.867]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1082.8,119.132],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":5,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.285,21.867],[3.285,21.867],[3.285,-10.771],[-3.285,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.615,-15.34],[3.615,-15.34],[3.615,-21.867],[-3.615,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.835,119.132],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":4,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[12.21,6.745],[12.21,-20.127],[5.64,-20.127],[5.64,6.745],[-9.91,6.745],[-9.91,-20.127],[-16.48,-20.127],[-16.48,12.511],[10.24,12.511],[10.24,20.127],[16.48,20.127],[16.48,6.745]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1037.29,128.488],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.038,0],[0,3.047],[-4.161,0.653],[-1.21,0.762],[0,0]],"o":[[-3.396,0],[0,-4.242],[3.175,-0.544],[0,0],[0,4.135]],"v":[[-3.615,11.531],[-8.982,6.854],[-0.55,1.305],[5.805,-0.327],[5.805,3.916]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,1.415],[0,0],[7.885,0],[3.833,-3.591],[0,0],[-3.724,0],[0,-2.611],[4.929,-0.652],[0,-8.051],[-6.463,0],[-2.299,3.372],[-4.06,0],[-0.331,0.109],[0,0]],"o":[[-1.42,0],[0,0],[0,-6.745],[-5.694,0],[0,0],[2.629,-2.719],[4.161,0],[0,2.503],[-6.353,0.98],[0,5.657],[4.82,0],[0.441,3.808],[1.09,0],[0,0],[0,0]],"v":[[14.235,10.661],[12.155,8.594],[12.155,-6.093],[-0.55,-16.863],[-14.787,-11.314],[-10.735,-7.072],[-0.877,-11.423],[6.025,-7.072],[-1.315,-3.482],[-15.445,7.29],[-4.711,16.863],[6.784,11.314],[13.145,16.536],[15.445,16.318],[15.445,10.661]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[998.025,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":4,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[19.386,-16.319],[9.419,-16.319],[0.109,9.03],[-9.311,-16.319],[-19.387,-16.319],[-19.387,16.319],[-13.035,16.319],[-13.035,-9.465],[-3.507,16.319],[3.504,16.319],[13.032,-9.465],[13.032,16.319],[19.386,16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[955.856,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.853],[-5.806,0],[0,-6.854]],"o":[[-5.806,0],[0,-6.854],[5.805,0],[0,6.853]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.652,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.008]],"o":[[-4.709,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.52,3.155],[8.434,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.187,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.311,22.03],[-9.311,6.8],[1.533,11.695],[15.882,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[912.701,129.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.023,0],[0,6.853],[-6.024,0],[0,-6.854]],"o":[[-6.024,0],[0,-6.854],[6.023,0],[0,6.853]],"v":[[0.001,11.314],[-9.966,0.001],[0.001,-11.314],[9.968,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.077,0],[0,10.008],[10.076,0],[0,-10.009]],"o":[[9.856,0],[0,-10.227],[-9.858,0],[0,10.226]],"v":[[0.001,16.863],[16.648,0.001],[0.001,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[872.284,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":4,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.819,0],[0,6.853],[-4.929,0],[0,-6.854]],"o":[[-4.929,0],[0,-6.854],[4.819,0],[0,6.853]],"v":[[10.899,11.314],[2.903,0.001],[10.899,-11.314],[18.894,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.82,0],[0,6.853],[-4.929,0],[0,-6.854]],"o":[[-4.929,0],[0,-6.854],[4.82,0],[0,6.853]],"v":[[-10.898,11.314],[-18.893,0.001],[-10.898,-11.314],[-3.012,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[7.886,0],[2.19,-2.937],[0,0],[0,0],[0,0],[3.834,0],[0,-10.009],[-7.887,0],[-2.191,2.938],[0,0],[0,0],[0,0],[-3.944,0],[0,10.008]],"o":[[-3.833,0],[0,0],[0,0],[0,0],[-2.191,-2.829],[-7.667,0],[0,10.117],[3.834,0],[0,0],[0,0],[0,0],[2.19,2.829],[7.557,0],[0,-10.118]],"v":[[12.542,-16.645],[3.232,-12.185],[3.232,-27.198],[-3.34,-27.198],[-3.34,-12.402],[-12.54,-16.645],[-25.575,0.001],[-12.54,16.646],[-3.34,12.185],[-3.34,27.198],[3.232,27.198],[3.232,12.294],[12.542,16.646],[25.575,0.001]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[824.694,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":5,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.748,0],[-1.863,6.201],[0,0],[3.943,0],[0,6.853],[-6.023,0],[-1.424,-3.808],[0,0],[7.119,0],[0,-10.009]],"o":[[7.011,0],[0,0],[-1.424,3.808],[-6.023,0],[0,-6.854],[4.053,0],[0,0],[-1.863,-6.201],[-9.748,0],[0,10.008]],"v":[[0.876,16.863],[15.554,7.072],[9.311,5.114],[0.876,11.314],[-8.872,0.001],[0.876,-11.314],[9.311,-5.113],[15.554,-7.072],[0.876,-16.863],[-15.553,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[779.514,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"bm":0,"ix":18,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.995,-16.319],[7.995,-3.264],[-7.997,-3.264],[-7.997,-16.319],[-14.567,-16.319],[-14.567,16.319],[-7.997,16.319],[-7.997,2.611],[7.995,2.611],[7.995,16.319],[14.566,16.319],[14.566,-16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[741.507,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"bm":0,"ix":19,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.039,0],[0,3.047],[-4.162,0.653],[-1.205,0.762],[0,0]],"o":[[-3.395,0],[0,-4.242],[3.176,-0.544],[0,0],[0,4.135]],"v":[[-3.614,11.531],[-8.981,6.854],[-0.547,1.305],[5.806,-0.327],[5.806,3.916]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,1.415],[0,0],[7.886,0],[3.834,-3.591],[0,0],[-3.724,0],[0,-2.611],[4.929,-0.652],[0,-8.051],[-6.462,0],[-2.301,3.372],[-4.052,0],[-0.328,0.109],[0,0]],"o":[[-1.424,0],[0,0],[0,-6.745],[-5.695,0],[0,0],[2.629,-2.719],[4.163,0],[0,2.503],[-6.352,0.98],[0,5.657],[4.819,0],[0.438,3.808],[1.096,0],[0,0],[0,0]],"v":[[14.24,10.661],[12.158,8.594],[12.158,-6.093],[-0.547,-16.863],[-14.786,-11.314],[-10.733,-7.072],[-0.876,-11.423],[6.025,-7.072],[-1.314,-3.482],[-15.443,7.29],[-4.709,16.863],[6.792,11.314],[13.144,16.536],[15.444,16.318],[15.444,10.661]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[704.157,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":4,"cix":2,"bm":0,"ix":20,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.853],[-5.805,0],[0,-6.854]],"o":[[-5.805,0],[0,-6.854],[5.805,0],[0,6.853]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.008]],"o":[[-4.71,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.155],[8.435,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.8],[1.533,11.695],[15.882,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[668.561,129.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":4,"cix":2,"bm":0,"ix":21,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.115,-16.319],[-15.115,-16.319],[-15.115,-10.553],[-3.286,-10.553],[-3.286,16.319],[3.286,16.319],[3.286,-10.553],[15.115,-10.553]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[631.321,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"bm":0,"ix":22,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.286,21.867],[3.284,21.867],[3.284,-10.771],[-3.286,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.081,-15.34],[9.201,-15.34],[9.201,-21.867],[2.081,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.201,-15.34],[-2.081,-15.34],[-2.081,-21.867],[-9.201,-21.867]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[588.604,119.132],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":5,"cix":2,"bm":0,"ix":23,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.023,0],[0,6.853],[-6.025,0],[0,-6.854]],"o":[[-6.025,0],[0,-6.854],[6.023,0],[0,6.853]],"v":[[0.001,11.314],[-9.968,0.001],[0.001,-11.314],[9.968,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.077,0],[0,10.008],[10.075,0],[0,-10.009]],"o":[[9.856,0],[0,-10.227],[-9.858,0],[0,10.226]],"v":[[0.001,16.863],[16.648,0.001],[0.001,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[560.236,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":4,"cix":2,"bm":0,"ix":24,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.504,0],[0,0],[0,0],[0,0],[0,-2.829]],"o":[[0,0],[0,0],[0,0],[3.724,0],[0,2.827]],"v":[[1.589,11.097],[-7.284,11.097],[-7.284,2.068],[1.149,2.068],[7.064,6.637]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-2.611],[3.724,0],[0,0]],"o":[[0,0],[3.067,0],[0,3.045],[0,0],[0,0]],"v":[[-7.284,-11.096],[1.368,-11.096],[6.297,-7.071],[1.04,-2.829],[-7.284,-2.829]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[3.614,1.304],[0,3.59],[7.229,0],[0,0],[0,0],[0,0],[0,5.875]],"o":[[2.957,-1.306],[0,-5.875],[0,0],[0,0],[0,0],[7.119,0],[0,-3.916]],"v":[[8.05,-0.434],[12.759,-7.832],[1.04,-16.319],[-13.637,-16.319],[-13.637,16.319],[2.245,16.319],[13.636,7.398]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[524.476,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":5,"cix":2,"bm":0,"ix":25,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.025,0],[0,6.853],[-6.024,0],[0,-6.854]],"o":[[-6.024,0],[0,-6.854],[6.025,0],[0,6.853]],"v":[[0,11.314],[-9.967,0.001],[0,-11.314],[9.967,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.076,0],[0,10.008],[10.077,0],[0,-10.009]],"o":[[9.858,0],[0,-10.227],[-9.857,0],[0,10.226]],"v":[[0,16.863],[16.648,0.001],[0,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[486.305,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":4,"cix":2,"bm":0,"ix":26,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.853],[-5.805,0],[0,-6.854]],"o":[[-5.805,0],[0,-6.854],[5.805,0],[0,6.853]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.008]],"o":[[-4.709,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.155],[8.434,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.8],[1.533,11.695],[15.882,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[448.298,129.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":4,"cix":2,"bm":0,"ix":27,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.819,0],[0,6.853],[-4.929,0],[0,-6.854]],"o":[[-4.929,0],[0,-6.854],[4.819,0],[0,6.853]],"v":[[10.898,11.314],[2.902,0.001],[10.898,-11.314],[18.893,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.82,0],[0,6.853],[-4.928,0],[0,-6.854]],"o":[[-4.928,0],[0,-6.854],[4.82,0],[0,6.853]],"v":[[-10.899,11.314],[-18.894,0.001],[-10.899,-11.314],[-3.012,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[7.886,0],[2.19,-2.937],[0,0],[0,0],[0,0],[3.833,0],[0,-10.009],[-7.887,0],[-2.191,2.938],[0,0],[0,0],[0,0],[-3.943,0],[0,10.008]],"o":[[-3.834,0],[0,0],[0,0],[0,0],[-2.191,-2.829],[-7.667,0],[0,10.117],[3.833,0],[0,0],[0,0],[0,0],[2.19,2.829],[7.557,0],[0,-10.118]],"v":[[12.541,-16.645],[3.231,-12.185],[3.231,-27.198],[-3.341,-27.198],[-3.341,-12.402],[-12.541,-16.645],[-25.575,0.001],[-12.541,16.646],[-3.341,12.185],[-3.341,27.198],[3.231,27.198],[3.231,12.294],[12.541,16.646],[25.575,0.001]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[399.065,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":5,"cix":2,"bm":0,"ix":28,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.832,-16.319],[-8.16,7.182],[-8.16,-16.319],[-14.622,-16.319],[-14.622,16.319],[-7.832,16.319],[8.159,-7.398],[8.159,16.319],[14.622,16.319],[14.622,-16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[350.981,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"bm":0,"ix":29,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[12.213,6.745],[12.213,-20.127],[5.641,-20.127],[5.641,6.745],[-9.912,6.745],[-9.912,-20.127],[-16.484,-20.127],[-16.484,12.511],[10.241,12.511],[10.241,20.127],[16.484,20.127],[16.484,6.745]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[312.646,128.488],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"bm":0,"ix":30,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.024,0],[0,6.854],[-6.023,0],[0,-6.854]],"o":[[-6.023,0],[0,-6.854],[6.024,0],[0,6.854]],"v":[[0,11.314],[-9.968,0.001],[0,-11.314],[9.967,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.077,0],[0,10.008],[10.077,0],[0,-10.009]],"o":[[9.858,0],[0,-10.227],[-9.857,0],[0,10.226]],"v":[[0,16.863],[16.647,0.001],[0,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[690.138,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":4,"cix":2,"bm":0,"ix":31,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.505,0],[0,0],[0,0],[0,0],[0,-2.829]],"o":[[0,0],[0,0],[0,0],[3.723,0],[0,2.828]],"v":[[1.589,11.096],[-7.283,11.096],[-7.283,2.066],[1.152,2.066],[7.066,6.637]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-2.611],[3.724,0],[0,0]],"o":[[0,0],[3.067,0],[0,3.046],[0,0],[0,0]],"v":[[-7.283,-11.096],[1.37,-11.096],[6.299,-7.072],[1.041,-2.828],[-7.283,-2.828]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[3.615,1.306],[0,3.591],[7.23,0],[0,0],[0,0],[0,0],[0,5.875]],"o":[[2.957,-1.305],[0,-5.874],[0,0],[0,0],[0,0],[7.12,0],[0,-3.916]],"v":[[8.051,-0.436],[12.761,-7.833],[1.041,-16.318],[-13.636,-16.318],[-13.636,16.318],[2.246,16.318],[13.637,7.398]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[654.376,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":5,"cix":2,"bm":0,"ix":32,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.115,-16.319],[-15.115,-16.319],[-15.115,-10.553],[-3.286,-10.553],[-3.286,16.319],[3.286,16.319],[3.286,-10.553],[15.115,-10.553]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[619.382,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"bm":0,"ix":33,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.748,0],[-1.862,6.201],[0,0],[3.943,0],[0,6.854],[-6.024,0],[-1.424,-3.807],[0,0],[7.12,0],[0,-10.009]],"o":[[7.01,0],[0,0],[-1.424,3.808],[-6.024,0],[0,-6.854],[4.053,0],[0,0],[-1.862,-6.201],[-9.748,0],[0,10.008]],"v":[[0.876,16.863],[15.553,7.072],[9.31,5.114],[0.876,11.315],[-8.872,0.001],[0.876,-11.314],[9.31,-5.114],[15.553,-7.072],[0.876,-16.863],[-15.553,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[586.414,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"bm":0,"ix":34,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.854],[-5.805,0],[0,-6.854]],"o":[[-5.805,0],[0,-6.854],[5.805,0],[0,6.854]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.628,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.491,0],[0,10.008]],"o":[[-4.71,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.156],[8.434,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.799],[1.533,11.695],[15.881,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[549.503,46.297],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":4,"cix":2,"bm":0,"ix":35,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.148,0],[-0.877,-5.33],[0,0]],"o":[[4.929,0],[0,0],[0.986,-5.221]],"v":[[0.164,-11.423],[9.365,-2.938],[-9.365,-2.938]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.766,5.657],[0,0],[0,0.762],[9.639,0],[0,-10.009],[-10.843,0],[-2.739,3.263],[0,0],[4.819,0]],"o":[[0,0],[0.219,-0.761],[0,-10.226],[-9.638,0],[0,9.682],[6.9,0],[0,0],[-1.862,2.394],[-5.805,0]],"v":[[-9.474,2.067],[15.827,2.067],[16.046,0],[0.164,-16.862],[-16.046,0],[0.712,16.862],[14.951,10.988],[10.46,7.071],[0.712,11.314]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[509.908,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 36","np":4,"cix":2,"bm":0,"ix":36,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.115,-16.319],[-15.115,-16.319],[-15.115,-10.553],[-3.285,-10.553],[-3.285,16.319],[3.286,16.319],[3.286,-10.553],[15.115,-10.553]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[476.556,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 37","np":2,"cix":2,"bm":0,"ix":37,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.748,0],[-1.862,6.201],[0,0],[3.943,0],[0,6.854],[-6.024,0],[-1.424,-3.807],[0,0],[7.12,0],[0,-10.009]],"o":[[7.01,0],[0,0],[-1.424,3.808],[-6.024,0],[0,-6.854],[4.053,0],[0,0],[-1.862,-6.201],[-9.748,0],[0,10.008]],"v":[[0.876,16.863],[15.553,7.072],[9.31,5.114],[0.876,11.315],[-8.872,0.001],[0.876,-11.314],[9.31,-5.114],[15.553,-7.072],[0.876,-16.863],[-15.553,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[443.588,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 38","np":2,"cix":2,"bm":0,"ix":38,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.285,21.867],[3.286,21.867],[3.286,-10.77],[-3.285,-10.77]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.615,-15.34],[3.615,-15.34],[3.615,-21.867],[-3.615,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[416.315,35.582],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 39","np":4,"cix":2,"bm":0,"ix":39,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.996,-16.319],[7.996,-3.264],[-7.996,-3.264],[-7.996,-16.319],[-14.568,-16.319],[-14.568,16.319],[-7.996,16.319],[-7.996,2.611],[7.996,2.611],[7.996,16.319],[14.568,16.319],[14.568,-16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[387.619,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 40","np":2,"cix":2,"bm":0,"ix":40,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.287,21.867],[3.285,21.867],[3.285,-10.77],[-3.287,-10.77]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.615,-15.34],[3.615,-15.34],[3.615,-21.867],[-3.615,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[358.923,35.582],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 41","np":4,"cix":2,"bm":0,"ix":41,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[23.22,-20.67],[12.705,-20.67],[0.109,12.62],[-12.596,-20.67],[-23.221,-20.67],[-23.221,20.67],[-16.539,20.67],[-16.539,-12.837],[-3.834,20.67],[3.833,20.67],[16.538,-12.837],[16.538,20.67],[23.22,20.67]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[320.478,36.778],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 42","np":2,"cix":2,"bm":0,"ix":42,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Logo diia Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[375,667,0],"to":[-16.667,0,0],"ti":[16.667,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":45,"s":[275,667,0],"to":[0,0,0],"ti":[0,0,0]},{"t":59.9999970776311,"s":[275,667,0]}],"ix":2},"a":{"a":0,"k":[1354.061,540,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":88,"s":[25.692,25.692,100]},{"t":94.9999953729159,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.432,0],[0,11.852],[13.169,0],[0,-12.378]],"o":[[13.433,0],[0,-12.378],[-13.168,0],[0,11.852]],"v":[[37.531,-81.119],[56.493,-97.974],[37.531,-115.357],[18.568,-97.974]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-16.855,0],[-5.794,3.686],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.214,15.275],[5.268,0],[0,0],[0,0],[0,0]],"v":[[19.094,55.834],[16.724,54.255],[48.065,-55.834],[-15.408,-55.834],[-22.255,-31.341],[14.617,-31.604],[-9.349,52.411],[13.563,81.908],[29.892,76.904],[73.086,47.67],[59.917,28.18]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[8.164,-12.114],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,34.501],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-62.024,-87.177],[-169.479,-87.177],[-169.479,-19.49],[-183.701,53.99],[-196.607,53.99],[-196.607,115.356],[-170.005,115.356],[-170.005,79.01],[-69.399,79.01],[-69.399,115.356],[-42.797,115.356],[-42.797,53.99],[-62.024,53.99]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,33.448],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[7.11,-12.378]],"v":[[-142.615,-20.544],[-142.615,-61.102],[-89.942,-61.102],[-89.942,53.99],[-156.047,53.99]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-25.021],[-17.909,-5.266],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[-26.601,0],[0,19.752],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[196.606,-55.834],[133.925,-55.834],[89.151,-13.432],[118.385,26.599],[84.147,78.748],[114.434,78.748],[145.25,31.341],[169.479,31.341],[169.479,78.748],[196.606,78.748]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,12.115],[-12.379,0],[0,0],[0,0]],"o":[[-12.379,0],[0,-11.852],[0,0],[0,0],[0,0]],"v":[[137.085,7.901],[116.542,-12.378],[137.085,-32.395],[169.479,-32.395],[169.479,7.901]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1344.447,531.836],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[181.989,0],[42.402,42.403],[0,181.989],[-42.403,42.666],[-181.989,0],[-42.402,-42.403],[0,-181.989],[42.666,-42.666]],"o":[[-181.989,0],[-42.667,-42.666],[0,-181.989],[42.402,-42.403],[181.989,0],[42.666,42.666],[0,181.989],[-42.402,42.403]],"v":[[0,325],[-273.379,273.379],[-325,0],[-273.379,-273.379],[0,-325],[273.379,-273.379],[325,0],[273.379,273.379]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1354.061,540],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"coat in arms Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[375.091,667.103,0],"to":[16.667,0,0],"ti":[-16.667,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":45,"s":[475.091,667.103,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":88,"s":[475.091,667.103,0],"to":[-64.5,0,0],"ti":[64.5,0,0]},{"t":111.999994544911,"s":[88.091,667.103,0]}],"ix":2},"a":{"a":0,"k":[1500,1500,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[36.459,0],[13.238,-13.241],[0,-36.46],[-13.239,-13.24],[-36.462,0],[-13.241,13.239],[0,36.462],[13.236,13.236]],"o":[[-36.462,0],[-13.239,13.236],[0,36.462],[13.238,13.239],[36.459,0],[13.236,-13.24],[0,-36.46],[-13.241,-13.241]],"v":[[0,-83.207],[-69.967,-69.966],[-83.206,-0.001],[-69.967,69.968],[0,83.207],[69.97,69.968],[83.206,-0.001],[69.97,-69.966]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-35.883,0],[-12.474,-12.471],[0,-35.881],[12.475,-12.474],[35.883,0],[12.471,12.472],[0,35.883],[-12.476,12.476]],"o":[[35.883,0],[12.475,12.476],[0,35.883],[-12.474,12.472],[-35.883,0],[-12.476,-12.474],[0,-35.881],[12.471,-12.471]],"v":[[0,-80.595],[68.121,-68.124],[80.596,-0.001],[68.121,68.122],[0,80.594],[-68.12,68.122],[-80.596,-0.001],[-68.12,-68.124]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1499.909,1499.897],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.632,-6.107],[0,0],[-0.843,-3.157]],"o":[[0,0],[-3.789,4.423],[0,0],[2.948,1.686],[0,0]],"v":[[29.267,5.683],[29.267,-37.477],[22.107,-21.475],[19.791,-1.897],[25.898,5.683]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[4,-1.26],[0,0],[0,-2.947]],"o":[[0,0],[0,0],[-1.052,4.002],[0,0],[0.629,2.734],[0,0]],"v":[[29.267,29.053],[29.267,11.578],[25.898,11.578],[17.687,19.998],[14.951,20.633],[16.002,29.053]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-1.052,4.633],[0,0],[0,0]],"o":[[0,0],[0,0],[3.159,-3.582]],"v":[[9.474,34.947],[2.948,34.947],[2.948,47.371]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0.632,2.314],[0,-3.579]],"o":[[0,-2.527],[-3.577,0.419],[0,0]],"v":[[10.316,29.053],[9.264,21.896],[2.948,29.053]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-2.526,0.63],[1.473,5.055],[2.525,-4.634],[-1.686,-1.895]],"o":[[-2.526,-4.634],[-1.474,5.055],[2.525,0.63],[1.685,-1.895]],"v":[[6.317,16.632],[0.002,2.103],[-6.314,16.632],[0.002,20.842]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-3.159,-3.582]],"o":[[0,0],[1.052,4.633],[0,0]],"v":[[-2.945,34.947],[-9.474,34.947],[-2.945,47.371]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[3.581,0.419],[0,-2.527]],"o":[[0,-3.579],[-0.63,2.314],[0,0]],"v":[[-2.945,29.053],[-9.263,21.896],[-10.316,29.053]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[-0.632,2.734],[0,0],[1.052,4.002],[0,0],[0,0]],"o":[[0,-2.947],[0,0],[-4,-1.26],[0,0],[0,0],[0,0]],"v":[[-16,29.053],[-14.948,20.633],[-17.684,19.998],[-25.893,11.578],[-29.264,11.578],[-29.264,29.053]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[-2.947,1.686],[0,0],[3.791,4.423],[0,0]],"o":[[0.841,-3.157],[0,0],[-0.844,-6.107],[0,0],[0,0]],"v":[[-25.893,5.683],[-19.789,-1.897],[-22.104,-21.475],[-29.264,-37.477],[-29.264,5.683]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[1.473,1.051],[1.474,8.002],[0,0],[0,0],[-0.843,-12],[0,0],[0,0],[0,-2.947],[-2.737,-0.632],[0,0],[0,10.737],[0.211,9.894],[-2.738,3.159],[0,-4.423],[0,-9.686],[-5.894,-11.158],[0,0],[0,2.739],[3.158,0],[0,0],[0,0],[-10.525,5.264],[0,0],[0,0],[6.316,-4.423],[0.841,-1.685]],"o":[[-6.107,-4.632],[0,0],[0,0],[10.528,5.264],[0,0],[0,0],[-3.157,0],[0,2.739],[0,0],[5.895,-11.158],[0,-9.686],[0,-4.423],[2.737,3.159],[0,9.894],[0,10.737],[0,0],[2.737,-0.632],[0,-2.947],[0,0],[0,0],[1.473,-12],[0,0],[0,0],[-1.473,8.002],[-1.473,1.051],[-0.842,-1.685]],"v":[[-3.578,54.529],[-15.579,34.947],[-35.159,34.947],[-35.159,-49.689],[-16.209,-20.845],[-13.261,2.949],[-14.736,2.737],[-20.631,8.63],[-15.788,14.315],[-12.209,15.158],[-2.945,-17.686],[-4.42,-46.95],[0.002,-58.529],[4.422,-46.95],[2.948,-17.686],[12.211,15.158],[15.791,14.315],[20.634,8.63],[14.74,2.737],[13.266,2.949],[16.214,-20.845],[35.16,-49.689],[35.16,34.947],[15.58,34.947],[3.58,54.529],[0.002,58.529]],"c":true},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1500.777,1502.708],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":12,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0}],"markers":[]}')
    },
    af28: function(e, t, i) {
        "use strict";
        i("8a4b")
    },
    b041: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    b91d: function(e, t, i) {},
    ba9b: function(e, t, i) {
        "use strict";
        i("0d85")
    },
    baea: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    be4a: function(e, t, i) {
        e.exports = i.p + "img/verify.cd1063c1.png"
    },
    bf2b: function(e, t, i) {
        e.exports = i.p + "img/qr_white.c8ecaa5d.png"
    },
    c252: function(e, t, i) {},
    c5d4: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    cbb5: function(e, t, i) {},
    ceda: function(e, t, i) {
        "use strict";
        i("25bc")
    },
    d6d1: function(e, t, i) {},
    d84e: function(e, t, i) {},
    d87b: function(e, t, i) {
        "use strict";
        i("0efe")
    },
    db9c: function(e, t, i) {
        "use strict";
        i("3963")
    },
    e032: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    e343: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    e44e: function(e, t, i) {
        "use strict";
        i("507b")
    },
    e80d: function(e, t, i) {
        "use strict";
        i("7eed")
    },
    eeb4: function(e, t, i) {},
    f474: function(e, t, i) {},
    f8fb: function(e, t, i) {},
    fef5: function(e, t, i) {
        e.exports = i.p + "img/fundocs.dc3f8852.jpg"
    },
    ff0e: function(e, t, i) {
        "use strict";
        i("4883")
    }
});
