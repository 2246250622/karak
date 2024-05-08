/*! For license information please see 1511.270ceb10.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunklanding = self.webpackChunklanding || []).push([
    [1511], {
        9122: (e, t, n) => {
            function r() {
                return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
            }

            function o() {
                const e = r();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = r, t.getSubtleCrypto = o, t.isBrowserCryptoAvailable = function() {
                return !!r() && !!o()
            }
        },
        54683: (e, t) => {
            function n() {
                return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
            }

            function r() {
                return "undefined" !== typeof process && "undefined" !== typeof process.versions && "undefined" !== typeof process.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = r, t.isBrowser = function() {
                return !n() && !r()
            }
        },
        67323: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(37856);
            r.__exportStar(n(9122), t), r.__exportStar(n(54683), t)
        },
        37856: (e, t, n) => {
            n.r(t), n.d(t, {
                __assign: () => i,
                __asyncDelegator: () => m,
                __asyncGenerator: () => w,
                __asyncValues: () => b,
                __await: () => R,
                __awaiter: () => l,
                __classPrivateFieldGet: () => S,
                __classPrivateFieldSet: () => J,
                __createBinding: () => f,
                __decorate: () => c,
                __exportStar: () => p,
                __extends: () => o,
                __generator: () => d,
                __importDefault: () => O,
                __importStar: () => E,
                __makeTemplateObject: () => _,
                __metadata: () => u,
                __param: () => a,
                __read: () => v,
                __rest: () => s,
                __spread: () => y,
                __spreadArrays: () => g,
                __values: () => h
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, r(e, t)
            };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }

            function c(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            }

            function a(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            a(r.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        try {
                            a(r.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, c)
                    }
                    a((r = r.apply(e, t || [])).next())
                }))
            }

            function d(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (c) {
                                i = [6, c], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            }

            function f(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function p(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function h(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                return e
            }

            function g() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, c = i.length; s < c; s++, o++) r[o] = i[s];
                return r
            }

            function R(e) {
                return this instanceof R ? (this.v = e, this) : new R(e)
            }

            function w(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(e, t || []),
                    i = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(e) {
                    o[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            i.push([e, t, n, r]) > 1 || c(e, t)
                        }))
                    })
                }

                function c(e, t) {
                    try {
                        (n = o[e](t)).value instanceof R ? Promise.resolve(n.value.v).then(a, u) : l(i[0][2], n)
                    } catch (r) {
                        l(i[0][3], r)
                    }
                    var n
                }

                function a(e) {
                    c("next", e)
                }

                function u(e) {
                    c("throw", e)
                }

                function l(e, t) {
                    e(t), i.shift(), i.length && c(i[0][0], i[0][1])
                }
            }

            function m(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, o) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: R(e[r](t)),
                            done: "return" === r
                        } : o ? o(t) : t
                    } : o
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, o) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, o, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function _(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function O(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function J(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        10159: (e, t, n) => {
            n.d(t, {
                k: () => u,
                Z: () => l
            });
            var r = n(47465),
                o = n(84255),
                i = n.n(o),
                s = n(75457),
                c = n(28477);
            const a = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class u {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.url = e, this.disableProviderPing = t, this.events = new r.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, c.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw new Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        const t = (0, s.u)(e),
                            n = await i()(this.url, Object.assign(Object.assign({}, a), {
                                body: t
                            })),
                            r = await n.json();
                        this.onPayload({
                            data: r
                        })
                    } catch (n) {
                        this.onError(e.id, n)
                    }
                }
                async register() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0, c.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        const e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                            this.events.once("register_error", (e => {
                                this.resetMaxListeners(), t(e)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.isAvailable) return t(new Error("HTTP connection is missing or invalid"));
                                e()
                            }))
                        }))
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            const t = (0, s.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await i()(e, Object.assign(Object.assign({}, a), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        const e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if ("undefined" === typeof e.data) return;
                    const t = "string" === typeof e.data ? (0, s.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const n = this.parseError(t),
                        r = n.message || n.toString(),
                        o = (0, c.formatJsonRpcError)(e, r);
                    this.events.emit("payload", o)
                }
                parseError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0, c.parseConnectionError)(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const l = u
        },
        42829: (e, t, n) => {
            n.d(t, {
                r: () => i
            });
            var r = n(47465),
                o = n(28477);
            class i extends o.IJsonRpcProvider {
                constructor(e) {
                    super(e), this.events = new r.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict((0, o.formatJsonRpcRequest)(e.method, e.params || [], e.id || (0, o.getBigIntRpcId)().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise((async (n, r) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (i) {
                            r(i)
                        }
                        this.events.on(`${e.id}`, (e => {
                            (0, o.isJsonRpcError)(e) ? r(e.error): n(e.result)
                        }));
                        try {
                            await this.connection.send(e, t)
                        } catch (i) {
                            r(i)
                        }
                    }))
                }
                setConnection() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                }
                onPayload(e) {
                    this.events.emit("payload", e), (0, o.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" === typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (e => this.onPayload(e))), this.connection.on("close", (e => this.onClose(e))), this.connection.on("error", (e => this.events.emit("error", e))), this.connection.on("register_error", (e => this.onClose())), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        65670: (e, t, n) => {
            n.d(t, {
                XR: () => o,
                x0: () => s
            });
            class r {}
            class o extends r {
                constructor(e) {
                    super()
                }
            }
            class i extends r {
                constructor() {
                    super()
                }
            }
            class s extends i {
                constructor(e) {
                    super()
                }
            }
        },
        60476: (e, t, n) => {
            n.d(t, {
                CA: () => o,
                JV: () => c,
                O4: () => r,
                dQ: () => i,
                xK: () => s
            });
            const r = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                i = [-32700, -32600, -32601, -32602, -32603],
                s = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                c = o
        },
        15812: (e, t, n) => {
            var r = n(67323);
            n.o(r, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "formatJsonRpcError") && n.d(t, {
                formatJsonRpcError: function() {
                    return r.formatJsonRpcError
                }
            }), n.o(r, "formatJsonRpcRequest") && n.d(t, {
                formatJsonRpcRequest: function() {
                    return r.formatJsonRpcRequest
                }
            }), n.o(r, "formatJsonRpcResult") && n.d(t, {
                formatJsonRpcResult: function() {
                    return r.formatJsonRpcResult
                }
            }), n.o(r, "getBigIntRpcId") && n.d(t, {
                getBigIntRpcId: function() {
                    return r.getBigIntRpcId
                }
            }), n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcRequest") && n.d(t, {
                isJsonRpcRequest: function() {
                    return r.isJsonRpcRequest
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            }), n.o(r, "isJsonRpcResult") && n.d(t, {
                isJsonRpcResult: function() {
                    return r.isJsonRpcResult
                }
            }), n.o(r, "isLocalhostUrl") && n.d(t, {
                isLocalhostUrl: function() {
                    return r.isLocalhostUrl
                }
            }), n.o(r, "isReactNative") && n.d(t, {
                isReactNative: function() {
                    return r.isReactNative
                }
            }), n.o(r, "isWsUrl") && n.d(t, {
                isWsUrl: function() {
                    return r.isWsUrl
                }
            }), n.o(r, "payloadId") && n.d(t, {
                payloadId: function() {
                    return r.payloadId
                }
            })
        },
        41154: (e, t, n) => {
            n.d(t, {
                CX: () => c,
                L2: () => s,
                by: () => i,
                i5: () => o
            });
            var r = n(60476);

            function o(e) {
                return r.dQ.includes(e)
            }

            function i(e) {
                return Object.keys(r.xK).includes(e) ? r.xK[e] : r.xK[r.JV]
            }

            function s(e) {
                const t = Object.values(r.xK).find((t => t.code === e));
                return t || r.xK[r.JV]
            }

            function c(e, t, n) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${n} RPC url at ${t}`) : e
            }
        },
        810: (e, t, n) => {
            n.d(t, {
                CS: () => s,
                RI: () => u,
                o0: () => i,
                sT: () => c,
                tm: () => a
            });
            var r = n(41154),
                o = n(60476);

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
            }

            function s() {
                return BigInt(i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6))
            }

            function c(e, t, n) {
                return {
                    id: n || i(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function a(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function u(e, t, n) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: l(t, n)
                }
            }

            function l(e, t) {
                return "undefined" === typeof e ? (0, r.by)(o.O4) : ("string" === typeof e && (e = Object.assign(Object.assign({}, (0, r.by)(o.CA)), {
                    message: e
                })), "undefined" !== typeof t && (e.data = t), (0, r.i5)(e.code) && (e = (0, r.L2)(e.code)), e)
            }
        },
        28477: (e, t, n) => {
            n.d(t, {
                IJsonRpcProvider: () => s.x0,
                formatJsonRpcError: () => i.RI,
                formatJsonRpcRequest: () => i.sT,
                formatJsonRpcResult: () => i.tm,
                getBigIntRpcId: () => i.CS,
                isHttpUrl: () => c.jK,
                isJsonRpcError: () => a.jg,
                isJsonRpcRequest: () => a.DW,
                isJsonRpcResponse: () => a.u,
                isJsonRpcResult: () => a.k4,
                isLocalhostUrl: () => c.JF,
                isWsUrl: () => c.UZ,
                parseConnectionError: () => r.CX,
                payloadId: () => i.o0
            });
            n(60476);
            var r = n(41154),
                o = n(15812);
            n.o(o, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return o.IJsonRpcProvider
                }
            }), n.o(o, "formatJsonRpcError") && n.d(t, {
                formatJsonRpcError: function() {
                    return o.formatJsonRpcError
                }
            }), n.o(o, "formatJsonRpcRequest") && n.d(t, {
                formatJsonRpcRequest: function() {
                    return o.formatJsonRpcRequest
                }
            }), n.o(o, "formatJsonRpcResult") && n.d(t, {
                formatJsonRpcResult: function() {
                    return o.formatJsonRpcResult
                }
            }), n.o(o, "getBigIntRpcId") && n.d(t, {
                getBigIntRpcId: function() {
                    return o.getBigIntRpcId
                }
            }), n.o(o, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return o.isHttpUrl
                }
            }), n.o(o, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return o.isJsonRpcError
                }
            }), n.o(o, "isJsonRpcRequest") && n.d(t, {
                isJsonRpcRequest: function() {
                    return o.isJsonRpcRequest
                }
            }), n.o(o, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return o.isJsonRpcResponse
                }
            }), n.o(o, "isJsonRpcResult") && n.d(t, {
                isJsonRpcResult: function() {
                    return o.isJsonRpcResult
                }
            }), n.o(o, "isLocalhostUrl") && n.d(t, {
                isLocalhostUrl: function() {
                    return o.isLocalhostUrl
                }
            }), n.o(o, "isReactNative") && n.d(t, {
                isReactNative: function() {
                    return o.isReactNative
                }
            }), n.o(o, "isWsUrl") && n.d(t, {
                isWsUrl: function() {
                    return o.isWsUrl
                }
            }), n.o(o, "payloadId") && n.d(t, {
                payloadId: function() {
                    return o.payloadId
                }
            });
            var i = n(810),
                s = n(38480),
                c = n(79493),
                a = n(806)
        },
        38480: (e, t, n) => {
            n.d(t, {
                x0: () => r.x0
            });
            var r = n(65670)
        },
        79493: (e, t, n) => {
            n.d(t, {
                JF: () => a,
                UZ: () => c,
                jK: () => s
            });
            const r = "^https?:",
                o = "^wss?:";

            function i(e, t) {
                const n = function(e) {
                    const t = e.match(new RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return "undefined" !== typeof n && new RegExp(t).test(n)
            }

            function s(e) {
                return i(e, r)
            }

            function c(e) {
                return i(e, o)
            }

            function a(e) {
                return new RegExp("wss?://localhost(:d{2,5})?").test(e)
            }
        },
        806: (e, t, n) => {
            function r(e) {
                return "object" === typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function o(e) {
                return r(e) && "method" in e
            }

            function i(e) {
                return r(e) && (s(e) || c(e))
            }

            function s(e) {
                return "result" in e
            }

            function c(e) {
                return "error" in e
            }
            n.d(t, {
                DW: () => o,
                jg: () => c,
                k4: () => s,
                u: () => i
            })
        },
        75457: (e, t, n) => {
            n.d(t, {
                D: () => i,
                u: () => s
            });
            const r = e => JSON.stringify(e, ((e, t) => "bigint" === typeof t ? t.toString() + "n" : t)),
                o = e => {
                    const t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, ((e, t) => "string" === typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t))
                };

            function i(e) {
                if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
                try {
                    return o(e)
                } catch (t) {
                    return e
                }
            }

            function s(e) {
                return "string" === typeof e ? e : r(e) || ""
            }
        },
        59761: (e, t, n) => {
            n.d(t, {
                qY: () => p
            });
            var r = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                o = function(e, t, n) {
                    this.name = e, this.version = t, this.os = n, this.type = "browser"
                },
                i = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = process.platform
                },
                s = function(e, t, n, r) {
                    this.name = e, this.version = t, this.os = n, this.bot = r, this.type = "bot-device"
                },
                c = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                a = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                u = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                l = 3,
                d = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                f = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function p(e) {
                return e ? v(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new a : "undefined" !== typeof navigator ? v(navigator.userAgent) : "undefined" !== typeof process && process.version ? new i(process.version.slice(1)) : null
            }

            function h(e) {
                return "" !== e && d.reduce((function(t, n) {
                    var r = n[0],
                        o = n[1];
                    if (t) return t;
                    var i = o.exec(e);
                    return !!i && [r, i]
                }), !1)
            }

            function v(e) {
                var t = h(e);
                if (!t) return null;
                var n = t[0],
                    i = t[1];
                if ("searchbot" === n) return new c;
                var a = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
                a ? a.length < l && (a = r(r([], a, !0), function(e) {
                    for (var t = [], n = 0; n < e; n++) t.push("0");
                    return t
                }(l - a.length), !0)) : a = [];
                var d = a.join("."),
                    p = function(e) {
                        for (var t = 0, n = f.length; t < n; t++) {
                            var r = f[t],
                                o = r[0];
                            if (r[1].exec(e)) return o
                        }
                        return null
                    }(e),
                    v = u.exec(e);
                return v && v[1] ? new s(n, d, p, v[1]) : new o(n, d, p)
            }
        },
        45559: e => {
            e.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);
//# sourceMappingURL=1511.270ceb10.chunk.js.map