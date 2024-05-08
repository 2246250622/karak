/*! For license information please see 2897.06724fae.chunk.js.LICENSE.txt */
(self.webpackChunklanding = self.webpackChunklanding || []).push([
    [2897], {
        2421: (e, t, r) => {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
            const n = r(56271),
                i = r(40526),
                s = r(9116);

            function o(e) {
                const t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.jQ = 64, t.KS = 64, t.aP = 32;
            new Uint8Array(32)[0] = 9;
            const a = o(),
                c = o([1]),
                u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                l = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                h = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function g(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let n = e[r] + t + 65535;
                    t = Math.floor(n / 65536), e[r] = n - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function v(e, t, r) {
                const n = ~(r - 1);
                for (let i = 0; i < 16; i++) {
                    const r = n & (e[i] ^ t[i]);
                    e[i] ^= r, t[i] ^= r
                }
            }

            function y(e, t) {
                const r = o(),
                    n = o();
                for (let i = 0; i < 16; i++) n[i] = t[i];
                g(n), g(n), g(n);
                for (let i = 0; i < 2; i++) {
                    r[0] = n[0] - 65517;
                    for (let t = 1; t < 15; t++) r[t] = n[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
                    r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                    const e = r[15] >> 16 & 1;
                    r[14] &= 65535, v(n, r, 1 - e)
                }
                for (let i = 0; i < 16; i++) e[2 * i] = 255 & n[i], e[2 * i + 1] = n[i] >> 8
            }

            function m(e, t) {
                let r = 0;
                for (let n = 0; n < 32; n++) r |= e[n] ^ t[n];
                return (1 & r - 1 >>> 8) - 1
            }

            function w(e, t) {
                const r = new Uint8Array(32),
                    n = new Uint8Array(32);
                return y(r, e), y(n, t), m(r, n)
            }

            function _(e) {
                const t = new Uint8Array(32);
                return y(t, e), 1 & t[0]
            }

            function b(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
            }

            function I(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
            }

            function E(e, t, r) {
                let n, i, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    v = 0,
                    y = 0,
                    m = 0,
                    w = 0,
                    _ = 0,
                    b = 0,
                    I = 0,
                    E = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    R = 0,
                    N = 0,
                    x = 0,
                    C = 0,
                    A = 0,
                    j = 0,
                    T = 0,
                    D = 0,
                    q = 0,
                    L = r[0],
                    k = r[1],
                    $ = r[2],
                    z = r[3],
                    M = r[4],
                    U = r[5],
                    K = r[6],
                    H = r[7],
                    V = r[8],
                    B = r[9],
                    F = r[10],
                    W = r[11],
                    G = r[12],
                    J = r[13],
                    Q = r[14],
                    Y = r[15];
                n = t[0], s += n * L, o += n * k, a += n * $, c += n * z, u += n * M, l += n * U, h += n * K, p += n * H, f += n * V, d += n * B, g += n * F, v += n * W, y += n * G, m += n * J, w += n * Q, _ += n * Y, n = t[1], o += n * L, a += n * k, c += n * $, u += n * z, l += n * M, h += n * U, p += n * K, f += n * H, d += n * V, g += n * B, v += n * F, y += n * W, m += n * G, w += n * J, _ += n * Q, b += n * Y, n = t[2], a += n * L, c += n * k, u += n * $, l += n * z, h += n * M, p += n * U, f += n * K, d += n * H, g += n * V, v += n * B, y += n * F, m += n * W, w += n * G, _ += n * J, b += n * Q, I += n * Y, n = t[3], c += n * L, u += n * k, l += n * $, h += n * z, p += n * M, f += n * U, d += n * K, g += n * H, v += n * V, y += n * B, m += n * F, w += n * W, _ += n * G, b += n * J, I += n * Q, E += n * Y, n = t[4], u += n * L, l += n * k, h += n * $, p += n * z, f += n * M, d += n * U, g += n * K, v += n * H, y += n * V, m += n * B, w += n * F, _ += n * W, b += n * G, I += n * J, E += n * Q, P += n * Y, n = t[5], l += n * L, h += n * k, p += n * $, f += n * z, d += n * M, g += n * U, v += n * K, y += n * H, m += n * V, w += n * B, _ += n * F, b += n * W, I += n * G, E += n * J, P += n * Q, S += n * Y, n = t[6], h += n * L, p += n * k, f += n * $, d += n * z, g += n * M, v += n * U, y += n * K, m += n * H, w += n * V, _ += n * B, b += n * F, I += n * W, E += n * G, P += n * J, S += n * Q, O += n * Y, n = t[7], p += n * L, f += n * k, d += n * $, g += n * z, v += n * M, y += n * U, m += n * K, w += n * H, _ += n * V, b += n * B, I += n * F, E += n * W, P += n * G, S += n * J, O += n * Q, R += n * Y, n = t[8], f += n * L, d += n * k, g += n * $, v += n * z, y += n * M, m += n * U, w += n * K, _ += n * H, b += n * V, I += n * B, E += n * F, P += n * W, S += n * G, O += n * J, R += n * Q, N += n * Y, n = t[9], d += n * L, g += n * k, v += n * $, y += n * z, m += n * M, w += n * U, _ += n * K, b += n * H, I += n * V, E += n * B, P += n * F, S += n * W, O += n * G, R += n * J, N += n * Q, x += n * Y, n = t[10], g += n * L, v += n * k, y += n * $, m += n * z, w += n * M, _ += n * U, b += n * K, I += n * H, E += n * V, P += n * B, S += n * F, O += n * W, R += n * G, N += n * J, x += n * Q, C += n * Y, n = t[11], v += n * L, y += n * k, m += n * $, w += n * z, _ += n * M, b += n * U, I += n * K, E += n * H, P += n * V, S += n * B, O += n * F, R += n * W, N += n * G, x += n * J, C += n * Q, A += n * Y, n = t[12], y += n * L, m += n * k, w += n * $, _ += n * z, b += n * M, I += n * U, E += n * K, P += n * H, S += n * V, O += n * B, R += n * F, N += n * W, x += n * G, C += n * J, A += n * Q, j += n * Y, n = t[13], m += n * L, w += n * k, _ += n * $, b += n * z, I += n * M, E += n * U, P += n * K, S += n * H, O += n * V, R += n * B, N += n * F, x += n * W, C += n * G, A += n * J, j += n * Q, T += n * Y, n = t[14], w += n * L, _ += n * k, b += n * $, I += n * z, E += n * M, P += n * U, S += n * K, O += n * H, R += n * V, N += n * B, x += n * F, C += n * W, A += n * G, j += n * J, T += n * Q, D += n * Y, n = t[15], _ += n * L, b += n * k, I += n * $, E += n * z, P += n * M, S += n * U, O += n * K, R += n * H, N += n * V, x += n * B, C += n * F, A += n * W, j += n * G, T += n * J, D += n * Q, q += n * Y, s += 38 * b, o += 38 * I, a += 38 * E, c += 38 * P, u += 38 * S, l += 38 * O, h += 38 * R, p += 38 * N, f += 38 * x, d += 38 * C, g += 38 * A, v += 38 * j, y += 38 * T, m += 38 * D, w += 38 * q, i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), _ = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), _ = n - 65536 * i, s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = v, e[12] = y, e[13] = m, e[14] = w, e[15] = _
            }

            function P(e, t) {
                E(e, t, t)
            }

            function S(e, t) {
                const r = o();
                let n;
                for (n = 0; n < 16; n++) r[n] = t[n];
                for (n = 253; n >= 0; n--) P(r, r), 2 !== n && 4 !== n && E(r, r, t);
                for (n = 0; n < 16; n++) e[n] = r[n]
            }

            function O(e, t) {
                const r = o(),
                    n = o(),
                    i = o(),
                    s = o(),
                    a = o(),
                    c = o(),
                    u = o(),
                    h = o(),
                    p = o();
                I(r, e[1], e[0]), I(p, t[1], t[0]), E(r, r, p), b(n, e[0], e[1]), b(p, t[0], t[1]), E(n, n, p), E(i, e[3], t[3]), E(i, i, l), E(s, e[2], t[2]), b(s, s, s), I(a, n, r), I(c, s, i), b(u, s, i), b(h, n, r), E(e[0], a, c), E(e[1], h, u), E(e[2], u, c), E(e[3], a, h)
            }

            function R(e, t, r) {
                for (let n = 0; n < 4; n++) v(e[n], t[n], r)
            }

            function N(e, t) {
                const r = o(),
                    n = o(),
                    i = o();
                S(i, t[2]), E(r, t[0], i), E(n, t[1], i), y(e, n), e[31] ^= _(r) << 7
            }

            function x(e, t, r) {
                d(e[0], a), d(e[1], c), d(e[2], c), d(e[3], a);
                for (let n = 255; n >= 0; --n) {
                    const i = r[n / 8 | 0] >> (7 & n) & 1;
                    R(e, t, i), O(t, e), O(e, e), R(e, t, i)
                }
            }

            function C(e, t) {
                const r = [o(), o(), o(), o()];
                d(r[0], h), d(r[1], p), d(r[2], c), E(r[3], h, p), x(e, r, t)
            }

            function A(e) {
                if (e.length !== t.aP) throw new Error(`ed25519: seed must be ${t.aP} bytes`);
                const r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                const n = new Uint8Array(32),
                    s = [o(), o(), o(), o()];
                C(s, r), N(n, s);
                const a = new Uint8Array(64);
                return a.set(e), a.set(n, 32), {
                    publicKey: n,
                    secretKey: a
                }
            }
            t._w = A;
            const j = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function T(e, t) {
                let r, n, i, s;
                for (n = 63; n >= 32; --n) {
                    for (r = 0, i = n - 32, s = n - 12; i < s; ++i) t[i] += r - 16 * t[n] * j[i - (n - 32)], r = Math.floor((t[i] + 128) / 256), t[i] -= 256 * r;
                    t[i] += r, t[n] = 0
                }
                for (r = 0, i = 0; i < 32; i++) t[i] += r - (t[31] >> 4) * j[i], r = t[i] >> 8, t[i] &= 255;
                for (i = 0; i < 32; i++) t[i] -= r * j[i];
                for (n = 0; n < 32; n++) t[n + 1] += t[n] >> 8, e[n] = 255 & t[n]
            }

            function D(e) {
                const t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let r = 0; r < 64; r++) e[r] = 0;
                T(e, t)
            }

            function q(e, t) {
                const r = o(),
                    n = o(),
                    i = o(),
                    s = o(),
                    l = o(),
                    h = o(),
                    p = o();
                return d(e[2], c),
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(e[1], t), P(i, e[1]), E(s, i, u), I(i, i, e[2]), b(s, e[2], s), P(l, s), P(h, l), E(p, h, l), E(r, p, i), E(r, r, s),
                    function(e, t) {
                        const r = o();
                        let n;
                        for (n = 0; n < 16; n++) r[n] = t[n];
                        for (n = 250; n >= 0; n--) P(r, r), 1 !== n && E(r, r, t);
                        for (n = 0; n < 16; n++) e[n] = r[n]
                    }(r, r), E(r, r, i), E(r, r, s), E(r, r, s), E(e[0], r, s), P(n, e[0]), E(n, n, s), w(n, i) && E(e[0], e[0], f), P(n, e[0]), E(n, n, s), w(n, i) ? -1 : (_(e[0]) === t[31] >> 7 && I(e[0], a, e[0]), E(e[3], e[0], e[1]), 0)
            }
            t.Xx = function(e, t) {
                const r = new Float64Array(64),
                    n = [o(), o(), o(), o()],
                    s = (0, i.hash)(e.subarray(0, 32));
                s[0] &= 248, s[31] &= 127, s[31] |= 64;
                const a = new Uint8Array(64);
                a.set(s.subarray(32), 32);
                const c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                const u = c.digest();
                c.clean(), D(u), C(n, u), N(a, n), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                const l = c.digest();
                D(l);
                for (let i = 0; i < 32; i++) r[i] = u[i];
                for (let i = 0; i < 32; i++)
                    for (let e = 0; e < 32; e++) r[i + e] += l[i] * s[e];
                return T(a.subarray(32), r), a
            }
        },
        40526: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(76232),
                i = r(9116);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    i.wipe(this._buffer), i.wipe(this._tempHi), i.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var n = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, n, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            i = t / 536870912 | 0,
                            s = t << 3,
                            o = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
                        n.writeUint32BE(i, this._buffer, o - 8), n.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 8; c++) n.writeUint32BE(this._stateHi[c], e, 8 * c), n.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    i.wipe(e.stateHi), i.wipe(e.stateLo), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, i, s, a, c) {
                for (var u, l, h, p, f, d, g, v, y = r[0], m = r[1], w = r[2], _ = r[3], b = r[4], I = r[5], E = r[6], P = r[7], S = i[0], O = i[1], R = i[2], N = i[3], x = i[4], C = i[5], A = i[6], j = i[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var D = 8 * T + a;
                        e[T] = n.readUint32BE(s, D), t[T] = n.readUint32BE(s, D + 4)
                    }
                    for (T = 0; T < 80; T++) {
                        var q, L, k = y,
                            $ = m,
                            z = w,
                            M = _,
                            U = b,
                            K = I,
                            H = E,
                            V = S,
                            B = O,
                            F = R,
                            W = N,
                            G = x,
                            J = C,
                            Q = A;
                        if (f = 65535 & (l = j), d = l >>> 16, g = 65535 & (u = P), v = u >>> 16, f += 65535 & (l = (x >>> 14 | b << 18) ^ (x >>> 18 | b << 14) ^ (b >>> 9 | x << 23)), d += l >>> 16, g += 65535 & (u = (b >>> 14 | x << 18) ^ (b >>> 18 | x << 14) ^ (x >>> 9 | b << 23)), v += u >>> 16, f += 65535 & (l = x & C ^ ~x & A), d += l >>> 16, g += 65535 & (u = b & I ^ ~b & E), v += u >>> 16, u = o[2 * T], f += 65535 & (l = o[2 * T + 1]), d += l >>> 16, g += 65535 & u, v += u >>> 16, u = e[T % 16], d += (l = t[T % 16]) >>> 16, g += 65535 & u, v += u >>> 16, g += (d += (f += 65535 & l) >>> 16) >>> 16, f = 65535 & (l = p = 65535 & f | d << 16), d = l >>> 16, g = 65535 & (u = h = 65535 & g | (v += g >>> 16) << 16), v = u >>> 16, f += 65535 & (l = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)), d += l >>> 16, g += 65535 & (u = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25)), v += u >>> 16, d += (l = S & O ^ S & R ^ O & R) >>> 16, g += 65535 & (u = y & m ^ y & w ^ m & w), v += u >>> 16, q = 65535 & (g += (d += (f += 65535 & l) >>> 16) >>> 16) | (v += g >>> 16) << 16, L = 65535 & f | d << 16, f = 65535 & (l = W), d = l >>> 16, g = 65535 & (u = M), v = u >>> 16, d += (l = p) >>> 16, g += 65535 & (u = h), v += u >>> 16, m = k, w = $, _ = z, b = M = 65535 & (g += (d += (f += 65535 & l) >>> 16) >>> 16) | (v += g >>> 16) << 16, I = U, E = K, P = H, y = q, O = V, R = B, N = F, x = W = 65535 & f | d << 16, C = G, A = J, j = Q, S = L, T % 16 === 15)
                            for (D = 0; D < 16; D++) u = e[D], f = 65535 & (l = t[D]), d = l >>> 16, g = 65535 & u, v = u >>> 16, u = e[(D + 9) % 16], f += 65535 & (l = t[(D + 9) % 16]), d += l >>> 16, g += 65535 & u, v += u >>> 16, h = e[(D + 1) % 16], f += 65535 & (l = ((p = t[(D + 1) % 16]) >>> 1 | h << 31) ^ (p >>> 8 | h << 24) ^ (p >>> 7 | h << 25)), d += l >>> 16, g += 65535 & (u = (h >>> 1 | p << 31) ^ (h >>> 8 | p << 24) ^ h >>> 7), v += u >>> 16, h = e[(D + 14) % 16], d += (l = ((p = t[(D + 14) % 16]) >>> 19 | h << 13) ^ (h >>> 29 | p << 3) ^ (p >>> 6 | h << 26)) >>> 16, g += 65535 & (u = (h >>> 19 | p << 13) ^ (p >>> 29 | h << 3) ^ h >>> 6), v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, e[D] = 65535 & g | v << 16, t[D] = 65535 & f | d << 16
                    }
                    f = 65535 & (l = S), d = l >>> 16, g = 65535 & (u = y), v = u >>> 16, u = r[0], d += (l = i[0]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[0] = y = 65535 & g | v << 16, i[0] = S = 65535 & f | d << 16, f = 65535 & (l = O), d = l >>> 16, g = 65535 & (u = m), v = u >>> 16, u = r[1], d += (l = i[1]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[1] = m = 65535 & g | v << 16, i[1] = O = 65535 & f | d << 16, f = 65535 & (l = R), d = l >>> 16, g = 65535 & (u = w), v = u >>> 16, u = r[2], d += (l = i[2]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[2] = w = 65535 & g | v << 16, i[2] = R = 65535 & f | d << 16, f = 65535 & (l = N), d = l >>> 16, g = 65535 & (u = _), v = u >>> 16, u = r[3], d += (l = i[3]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[3] = _ = 65535 & g | v << 16, i[3] = N = 65535 & f | d << 16, f = 65535 & (l = x), d = l >>> 16, g = 65535 & (u = b), v = u >>> 16, u = r[4], d += (l = i[4]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[4] = b = 65535 & g | v << 16, i[4] = x = 65535 & f | d << 16, f = 65535 & (l = C), d = l >>> 16, g = 65535 & (u = I), v = u >>> 16, u = r[5], d += (l = i[5]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[5] = I = 65535 & g | v << 16, i[5] = C = 65535 & f | d << 16, f = 65535 & (l = A), d = l >>> 16, g = 65535 & (u = E), v = u >>> 16, u = r[6], d += (l = i[6]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[6] = E = 65535 & g | v << 16, i[6] = A = 65535 & f | d << 16, f = 65535 & (l = j), d = l >>> 16, g = 65535 & (u = P), v = u >>> 16, u = r[7], d += (l = i[7]) >>> 16, g += 65535 & u, v += u >>> 16, v += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16, r[7] = P = 65535 & g | v << 16, i[7] = j = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        39586: (e, t, r) => {
            "use strict";
            r.d(t, {
                EthereumProvider: () => Go
            });
            var n = r(47465),
                i = r.n(n),
                s = r(53642),
                o = r(52497),
                a = r(56271),
                c = r(24888),
                u = r(52029),
                l = r(24301),
                h = r(59761),
                p = r(63182),
                f = r(29808),
                d = r(37296),
                g = r(21750),
                v = r(44859);
            const y = ":";

            function m(e) {
                const [t, r] = e.split(y);
                return {
                    namespace: t,
                    reference: r
                }
            }

            function w(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            const _ = "base10",
                b = "base16",
                I = "base64pad",
                E = "utf8",
                P = 0,
                S = 1,
                O = 0,
                R = 1,
                N = 12,
                x = 32;

            function C() {
                const e = (0, a.randomBytes)(x);
                return (0, l.BB)(e, b)
            }

            function A(e) {
                const t = (0, c.vp)((0, l.mL)(e, E));
                return (0, l.BB)(t, b)
            }

            function j(e) {
                return Number((0, l.BB)(e, _))
            }

            function T(e) {
                const t = function(e) {
                    return (0, l.mL)(`${e}`, _)
                }(typeof e.type < "u" ? e.type : P);
                if (j(t) === S && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                const r = typeof e.senderPublicKey < "u" ? (0, l.mL)(e.senderPublicKey, b) : void 0,
                    n = typeof e.iv < "u" ? (0, l.mL)(e.iv, b) : (0, a.randomBytes)(N);
                return function(e) {
                    if (j(e.type) === S) {
                        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                        return (0, l.BB)((0, l.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), I)
                    }
                    return (0, l.BB)((0, l.zo)([e.type, e.iv, e.sealed]), I)
                }({
                    type: t,
                    sealed: new s.OK((0, l.mL)(e.symKey, b)).seal(n, (0, l.mL)(e.message, E)),
                    iv: n,
                    senderPublicKey: r
                })
            }

            function D(e) {
                const t = (0, l.mL)(e, I),
                    r = t.slice(O, R),
                    n = R;
                if (j(r) === S) {
                    const e = n + x,
                        i = e + N,
                        s = t.slice(n, e),
                        o = t.slice(e, i);
                    return {
                        type: r,
                        sealed: t.slice(i),
                        iv: o,
                        senderPublicKey: s
                    }
                }
                const i = n + N,
                    s = t.slice(n, i);
                return {
                    type: r,
                    sealed: t.slice(i),
                    iv: s
                }
            }

            function q(e) {
                const t = (null === e || void 0 === e ? void 0 : e.type) || P;
                if (t === S) {
                    if (typeof(null === e || void 0 === e ? void 0 : e.senderPublicKey) > "u") throw new Error("missing sender public key");
                    if (typeof(null === e || void 0 === e ? void 0 : e.receiverPublicKey) > "u") throw new Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: null === e || void 0 === e ? void 0 : e.senderPublicKey,
                    receiverPublicKey: null === e || void 0 === e ? void 0 : e.receiverPublicKey
                }
            }

            function L(e) {
                return e.type === S && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var k = Object.defineProperty,
                $ = Object.getOwnPropertySymbols,
                z = Object.prototype.hasOwnProperty,
                M = Object.prototype.propertyIsEnumerable,
                U = (e, t, r) => t in e ? k(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                K = (e, t) => {
                    for (var r in t || (t = {})) z.call(t, r) && U(e, r, t[r]);
                    if ($)
                        for (var r of $(t)) M.call(t, r) && U(e, r, t[r]);
                    return e
                };
            const H = "ReactNative",
                V = {
                    reactNative: "react-native",
                    node: "node",
                    browser: "browser",
                    unknown: "unknown"
                },
                B = "js";

            function F() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }

            function W() {
                return !(0, f.getDocument)() && !!(0, f.getNavigator)() && navigator.product === H
            }

            function G() {
                return !F() && !!(0, f.getNavigator)()
            }

            function J() {
                return W() ? V.reactNative : F() ? V.node : G() ? V.browser : V.unknown
            }

            function Q(e, t, n) {
                const i = function() {
                        if (J() === V.reactNative && typeof r.g < "u" && typeof(null == r.g ? void 0 : r.g.Platform) < "u") {
                            const {
                                OS: e,
                                Version: t
                            } = r.g.Platform;
                            return [e, t].join("-")
                        }
                        const e = (0, h.qY)();
                        if (null === e) return "unknown";
                        const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                        return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
                    }(),
                    s = function() {
                        var e;
                        const t = J();
                        return t === V.browser ? [t, (null == (e = (0, f.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                    }();
                return [
                    [e, t].join("-"), [B, n].join("-"), i, s
                ].join("/")
            }

            function Y(e) {
                let {
                    protocol: t,
                    version: r,
                    relayUrl: n,
                    sdkVersion: i,
                    auth: s,
                    projectId: o,
                    useOnCloseEvent: a,
                    bundleId: c
                } = e;
                const u = n.split("?"),
                    l = {
                        auth: s,
                        ua: Q(t, r, i),
                        projectId: o,
                        useOnCloseEvent: a || void 0,
                        origin: c || void 0
                    },
                    h = function(e, t) {
                        let r = g.parse(e);
                        return r = K(K({}, r), t), g.stringify(r)
                    }(u[1] || "", l);
                return u[0] + "?" + h
            }

            function Z(e, t) {
                return e.filter((e => t.includes(e))).length === e.length
            }

            function X(e) {
                return Object.fromEntries(e.entries())
            }

            function ee(e) {
                return new Map(Object.entries(e))
            }

            function te() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.FIVE_MINUTES,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                const r = (0, p.toMiliseconds)(e || p.FIVE_MINUTES);
                let n, i, s;
                return {
                    resolve: e => {
                        s && n && (clearTimeout(s), n(e))
                    },
                    reject: e => {
                        s && i && (clearTimeout(s), i(e))
                    },
                    done: () => new Promise(((e, o) => {
                        s = setTimeout((() => {
                            o(new Error(t))
                        }), r), n = e, i = o
                    }))
                }
            }

            function re(e, t, r) {
                return new Promise((async (n, i) => {
                    const s = setTimeout((() => i(new Error(r))), t);
                    try {
                        n(await e)
                    } catch (o) {
                        i(o)
                    }
                    clearTimeout(s)
                }))
            }

            function ne(e, t) {
                if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
                    return `topic:${t}`
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
                    return `id:${t}`
                }
                throw new Error(`Unknown expirer target type: ${e}`)
            }

            function ie(e) {
                const [t, r] = e.split(":"), n = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof r) n.topic = r;
                else {
                    if ("id" !== t || !Number.isInteger(Number(r))) throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
                    n.id = Number(r)
                }
                return n
            }

            function se(e, t) {
                return (0, p.fromMiliseconds)((t || Date.now()) + (0, p.toMiliseconds)(e))
            }

            function oe(e) {
                return Date.now() >= (0, p.toMiliseconds)(e)
            }

            function ae(e, t) {
                return `${e}${t?`:${t}`:""}`
            }

            function ce() {
                return [...new Set([...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []])]
            }

            function ue(e) {
                return (null === e || void 0 === e ? void 0 : e.relay) || {
                    protocol: "irn"
                }
            }

            function le(e) {
                const t = v.RELAY_JSONRPC[e];
                if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
                return t
            }
            var he = Object.defineProperty,
                pe = Object.getOwnPropertySymbols,
                fe = Object.prototype.hasOwnProperty,
                de = Object.prototype.propertyIsEnumerable,
                ge = (e, t, r) => t in e ? he(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;

            function ve(e) {
                const t = {},
                    r = "relay" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-");
                return Object.keys(e).forEach((n => {
                    if (n.startsWith(r)) {
                        const i = n.replace(r, ""),
                            s = e[n];
                        t[i] = s
                    }
                })), t
            }

            function ye(e) {
                const t = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":"),
                    r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    n = e.substring(0, t),
                    i = e.substring(t + 1, r).split("@"),
                    s = typeof r < "u" ? e.substring(r) : "",
                    o = g.parse(s);
                return {
                    protocol: n,
                    topic: me(i[0]),
                    version: parseInt(i[1], 10),
                    symKey: o.symKey,
                    relay: ve(o)
                }
            }

            function me(e) {
                return e.startsWith("//") ? e.substring(2) : e
            }

            function we(e) {
                return `${e.protocol}:${e.topic}@${e.version}?` + g.stringify(((e, t) => {
                    for (var r in t || (t = {})) fe.call(t, r) && ge(e, r, t[r]);
                    if (pe)
                        for (var r of pe(t)) de.call(t, r) && ge(e, r, t[r]);
                    return e
                })({
                    symKey: e.symKey
                }, function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                    const r = {};
                    return Object.keys(e).forEach((n => {
                        const i = "relay" + t + n;
                        e[n] && (r[i] = e[n])
                    })), r
                }(e.relay)))
            }
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

            function _e(e) {
                const t = [];
                return e.forEach((e => {
                    const [r, n] = e.split(":");
                    t.push(`${r}:${n}`)
                })), t
            }

            function be(e) {
                return e.includes(":")
            }

            function Ie(e) {
                return be(e) ? e.split(":")[0] : e
            }
            const Ee = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                Pe = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function Se(e, t) {
                const {
                    message: r,
                    code: n
                } = Pe[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: n
                }
            }

            function Oe(e, t) {
                const {
                    message: r,
                    code: n
                } = Ee[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: n
                }
            }

            function Re(e, t) {
                return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
            }

            function Ne(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function xe(e) {
                return typeof e > "u"
            }

            function Ce(e, t) {
                return !(!t || !xe(e)) || "string" == typeof e && !!e.trim().length
            }

            function Ae(e, t) {
                return !(!t || !xe(e)) || "number" == typeof e && !isNaN(e)
            }

            function je(e) {
                return !(!Ce(e, !1) || !e.includes(":")) && 2 === e.split(":").length
            }

            function Te(e) {
                let t = !0;
                return Re(e) ? e.length && (t = e.every((e => Ce(e, !1)))) : t = !1, t
            }

            function De(e, t, r) {
                let n = null;
                return Object.entries(e).forEach((e => {
                    let [i, s] = e;
                    if (n) return;
                    const o = function(e, t, r) {
                        let n = null;
                        return Re(t) && t.length ? t.forEach((e => {
                            n || je(e) || (n = Oe("UNSUPPORTED_CHAINS", `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                        })) : je(e) || (n = Oe("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n
                    }(i, w(i, s), `${t} ${r}`);
                    o && (n = o)
                })), n
            }

            function qe(e, t) {
                let r = null;
                return Re(e) ? e.forEach((e => {
                    r || function(e) {
                        if (Ce(e, !1) && e.includes(":")) {
                            const t = e.split(":");
                            if (3 === t.length) {
                                const e = t[0] + ":" + t[1];
                                return !!t[2] && je(e)
                            }
                        }
                        return !1
                    }(e) || (r = Oe("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                })) : r = Oe("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r
            }

            function Le(e, t) {
                let r = null;
                return Object.values(e).forEach((e => {
                    if (r) return;
                    const n = function(e, t) {
                        let r = null;
                        return Te(null === e || void 0 === e ? void 0 : e.methods) ? Te(null === e || void 0 === e ? void 0 : e.events) || (r = Oe("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Oe("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r
                    }(e, `${t}, namespace`);
                    n && (r = n)
                })), r
            }

            function ke(e, t) {
                let r = null;
                if (e && Ne(e)) {
                    const n = Le(e, t);
                    n && (r = n);
                    const i = function(e, t) {
                        let r = null;
                        return Object.values(e).forEach((e => {
                            if (r) return;
                            const n = qe(null === e || void 0 === e ? void 0 : e.accounts, `${t} namespace`);
                            n && (r = n)
                        })), r
                    }(e, t);
                    i && (r = i)
                } else r = Se("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
                return r
            }

            function $e(e) {
                return Ce(e.protocol, !0)
            }

            function ze(e) {
                return typeof e < "u" && null !== typeof e
            }

            function Me(e, t) {
                return !(!je(t) || ! function(e) {
                    const t = [];
                    return Object.values(e).forEach((e => {
                        t.push(..._e(e.accounts))
                    })), t
                }(e).includes(t))
            }

            function Ue(e, t, r) {
                return !!Ce(r, !1) && function(e, t) {
                    const r = [];
                    return Object.values(e).forEach((e => {
                        _e(e.accounts).includes(t) && r.push(...e.methods)
                    })), r
                }(e, t).includes(r)
            }

            function Ke(e, t, r) {
                return !!Ce(r, !1) && function(e, t) {
                    const r = [];
                    return Object.values(e).forEach((e => {
                        _e(e.accounts).includes(t) && r.push(...e.events)
                    })), r
                }(e, t).includes(r)
            }

            function He(e, t, r) {
                let n = null;
                const i = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((r => {
                            var n;
                            r.includes(":") ? t[r] = e[r] : null == (n = e[r].chains) || n.forEach((n => {
                                t[n] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            }))
                        })), t
                    }(e),
                    s = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                const n = _e(e[r].accounts);
                                null === n || void 0 === n || n.forEach((n => {
                                    t[n] = {
                                        accounts: e[r].accounts.filter((e => e.includes(`${n}:`))),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                }))
                            }
                        })), t
                    }(t),
                    o = Object.keys(i),
                    a = Object.keys(s),
                    c = Ve(Object.keys(e)),
                    u = Ve(Object.keys(t)),
                    l = c.filter((e => !u.includes(e)));
                return l.length && (n = Se("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${l.toString()}\n      Received: ${Object.keys(t).toString()}`)), Z(o, a) || (n = Se("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)), Object.keys(t).forEach((e => {
                    if (!e.includes(":") || n) return;
                    const i = _e(t[e].accounts);
                    i.includes(e) || (n = Se("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))
                })), o.forEach((e => {
                    n || (Z(i[e].methods, s[e].methods) ? Z(i[e].events, s[e].events) || (n = Se("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : n = Se("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
                })), n
            }

            function Ve(e) {
                return [...new Set(e.map((e => e.includes(":") ? e.split(":")[0] : e)))]
            }

            function Be() {
                const e = J();
                return new Promise((t => {
                    switch (e) {
                        case V.browser:
                            t(function() {
                                var e;
                                return G() && (null === (e = navigator) || void 0 === e ? void 0 : e.onLine)
                            }());
                            break;
                        case V.reactNative:
                            t(async function() {
                                if (W() && typeof r.g < "u" && null != r.g && r.g.NetInfo) {
                                    const e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                                    return null === e || void 0 === e ? void 0 : e.isConnected
                                }
                                return !0
                            }());
                            break;
                        case V.node:
                        default:
                            t(!0)
                    }
                }))
            }

            function Fe(e) {
                switch (J()) {
                    case V.browser:
                        ! function(e) {
                            !W() && G() && (window.addEventListener("online", (() => e(!0))), window.addEventListener("offline", (() => e(!1))))
                        }(e);
                        break;
                    case V.reactNative:
                        ! function(e) {
                            var t;
                            W() && typeof r.g < "u" && null != r.g && r.g.NetInfo && (null === (t = r.g) || void 0 === t || t.NetInfo.addEventListener((t => e(null === t || void 0 === t ? void 0 : t.isConnected))))
                        }(e);
                    case V.node:
                }
            }
            const We = {};
            class Ge {
                static get(e) {
                    return We[e]
                }
                static set(e, t) {
                    We[e] = t
                }
                static delete(e) {
                    delete We[e]
                }
            }
            const Je = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                Qe = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                Ye = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function Ze(e, t) {
                if (!("__proto__" === e || "constructor" === e && t && "object" === typeof t && "prototype" in t)) return t;
                ! function(e) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
                }(e)
            }

            function Xe(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("string" !== typeof e) return e;
                const r = e.trim();
                if ('"' === e[0] && '"' === e.at(-1) && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    const e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!Ye.test(e)) {
                    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (Je.test(e) || Qe.test(e)) {
                        if (t.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, Ze)
                    }
                    return JSON.parse(e)
                } catch (n) {
                    if (t.strict) throw n;
                    return e
                }
            }

            function et(e) {
                try {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    return (i = e(...r)) && "function" === typeof i.then ? i : Promise.resolve(i)
                } catch (s) {
                    return Promise.reject(s)
                }
                var i
            }

            function tt(e) {
                if (function(e) {
                        const t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        const t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" === typeof e.toJSON) return tt(e.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function rt() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const nt = "base64:";

            function it(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function st() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return it(t.join(":"))
            }

            function ot(e) {
                return (e = it(e)) ? e + ":" : ""
            }
            const at = () => {
                const e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem(t) {
                        var r;
                        return null !== (r = e.get(t)) && void 0 !== r ? r : null
                    },
                    getItemRaw(t) {
                        var r;
                        return null !== (r = e.get(t)) && void 0 !== r ? r : null
                    },
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function ct() {
                const e = {
                        mounts: {
                            "": (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).driver || at()
                        },
                        mountpoints: [""],
                        watching: !1,
                        watchListeners: [],
                        unwatch: {}
                    },
                    t = t => {
                        for (const r of e.mountpoints)
                            if (t.startsWith(r)) return {
                                base: r,
                                relativeKey: t.slice(r.length),
                                driver: e.mounts[r]
                            };
                        return {
                            base: "",
                            relativeKey: t,
                            driver: e.mounts[""]
                        }
                    },
                    r = (t, r) => e.mountpoints.filter((e => e.startsWith(t) || r && t.startsWith(e))).map((r => ({
                        relativeBase: t.length > r.length ? t.slice(r.length) : void 0,
                        mountpoint: r,
                        driver: e.mounts[r]
                    }))),
                    n = (t, r) => {
                        if (e.watching) {
                            r = it(r);
                            for (const n of e.watchListeners) n(t, r)
                        }
                    },
                    i = async () => {
                        if (e.watching) {
                            for (const t in e.unwatch) await e.unwatch[t]();
                            e.unwatch = {}, e.watching = !1
                        }
                    },
                    s = (e, r, n) => {
                        const i = new Map,
                            s = e => {
                                let t = i.get(e.base);
                                return t || (t = {
                                    driver: e.driver,
                                    base: e.base,
                                    items: []
                                }, i.set(e.base, t)), t
                            };
                        for (const o of e) {
                            const e = "string" === typeof o,
                                n = it(e ? o : o.key),
                                i = e ? void 0 : o.value,
                                a = e || !o.options ? r : { ...r,
                                    ...o.options
                                },
                                c = t(n);
                            s(c).items.push({
                                key: n,
                                value: i,
                                relativeKey: c.relativeKey,
                                options: a
                            })
                        }
                        return Promise.all([...i.values()].map((e => n(e)))).then((e => e.flat()))
                    },
                    o = {
                        hasItem(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = it(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e);
                            return et(i.hasItem, n, r)
                        },
                        getItem(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = it(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e);
                            return et(i.getItem, n, r).then((e => Xe(e)))
                        },
                        getItems: (e, t) => s(e, t, (e => e.driver.getItems ? et(e.driver.getItems, e.items.map((e => ({
                            key: e.relativeKey,
                            options: e.options
                        }))), t).then((t => t.map((t => ({
                            key: st(e.base, t.key),
                            value: Xe(t.value)
                        }))))) : Promise.all(e.items.map((t => et(e.driver.getItem, t.relativeKey, t.options).then((e => ({
                            key: t.key,
                            value: Xe(e)
                        })))))))),
                        getItemRaw(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = it(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e);
                            return i.getItemRaw ? et(i.getItemRaw, n, r) : et(i.getItem, n, r).then((e => function(e) {
                                return "string" !== typeof e ? e : e.startsWith(nt) ? (rt(), Buffer.from(e.slice(nt.length), "base64")) : e
                            }(e)))
                        },
                        async setItem(e, r) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (void 0 === r) return o.removeItem(e);
                            e = it(e);
                            const {
                                relativeKey: s,
                                driver: a
                            } = t(e);
                            a.setItem && (await et(a.setItem, s, tt(r), i), a.watch || n("update", e))
                        },
                        async setItems(e, t) {
                            await s(e, t, (async e => {
                                e.driver.setItems && await et(e.driver.setItems, e.items.map((e => ({
                                    key: e.relativeKey,
                                    value: tt(e.value),
                                    options: e.options
                                }))), t), e.driver.setItem && await Promise.all(e.items.map((t => et(e.driver.setItem, t.relativeKey, tt(t.value), t.options))))
                            }))
                        },
                        async setItemRaw(e, r) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (void 0 === r) return o.removeItem(e, i);
                            e = it(e);
                            const {
                                relativeKey: s,
                                driver: a
                            } = t(e);
                            if (a.setItemRaw) await et(a.setItemRaw, s, r, i);
                            else {
                                if (!a.setItem) return;
                                await et(a.setItem, s, function(e) {
                                    if ("string" === typeof e) return e;
                                    rt();
                                    const t = Buffer.from(e).toString("base64");
                                    return nt + t
                                }(r), i)
                            }
                            a.watch || n("update", e)
                        },
                        async removeItem(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            "boolean" === typeof r && (r = {
                                removeMeta: r
                            }), e = it(e);
                            const {
                                relativeKey: i,
                                driver: s
                            } = t(e);
                            s.removeItem && (await et(s.removeItem, i, r), (r.removeMeta || r.removeMata) && await et(s.removeItem, i + "$", r), s.watch || n("remove", e))
                        },
                        async getMeta(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            "boolean" === typeof r && (r = {
                                nativeOnly: r
                            }), e = it(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e), s = Object.create(null);
                            if (i.getMeta && Object.assign(s, await et(i.getMeta, n, r)), !r.nativeOnly) {
                                const e = await et(i.getItem, n + "$", r).then((e => Xe(e)));
                                e && "object" === typeof e && ("string" === typeof e.atime && (e.atime = new Date(e.atime)), "string" === typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                            }
                            return s
                        },
                        setMeta(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.setItem(e + "$", t, r)
                        },
                        removeMeta(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.removeItem(e + "$", t)
                        },
                        async getKeys(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = ot(e);
                            const n = r(e, !0);
                            let i = [];
                            const s = [];
                            for (const r of n) {
                                const e = (await et(r.driver.getKeys, r.relativeBase, t)).map((e => r.mountpoint + it(e))).filter((e => !i.some((t => e.startsWith(t)))));
                                s.push(...e), i = [r.mountpoint, ...i.filter((e => !e.startsWith(r.mountpoint)))]
                            }
                            return e ? s.filter((t => t.startsWith(e) && !t.endsWith("$"))) : s.filter((e => !e.endsWith("$")))
                        },
                        async clear(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = ot(e), await Promise.all(r(e, !1).map((async e => {
                                if (e.driver.clear) return et(e.driver.clear, e.relativeBase, t);
                                if (e.driver.removeItem) {
                                    const r = await e.driver.getKeys(e.relativeBase || "", t);
                                    return Promise.all(r.map((r => e.driver.removeItem(r, t))))
                                }
                            })))
                        },
                        async dispose() {
                            await Promise.all(Object.values(e.mounts).map((e => lt(e))))
                        },
                        watch: async t => (await (async () => {
                            if (!e.watching) {
                                e.watching = !0;
                                for (const t in e.mounts) e.unwatch[t] = await ut(e.mounts[t], n, t)
                            }
                        })(), e.watchListeners.push(t), async () => {
                            e.watchListeners = e.watchListeners.filter((e => e !== t)), 0 === e.watchListeners.length && await i()
                        }),
                        async unwatch() {
                            e.watchListeners = [], await i()
                        },
                        mount(t, r) {
                            if ((t = ot(t)) && e.mounts[t]) throw new Error(`already mounted at ${t}`);
                            return t && (e.mountpoints.push(t), e.mountpoints.sort(((e, t) => t.length - e.length))), e.mounts[t] = r, e.watching && Promise.resolve(ut(r, n, t)).then((r => {
                                e.unwatch[t] = r
                            })).catch(console.error), o
                        },
                        async unmount(t) {
                            let r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            (t = ot(t)) && e.mounts[t] && (e.watching && t in e.unwatch && (e.unwatch[t](), delete e.unwatch[t]), r && await lt(e.mounts[t]), e.mountpoints = e.mountpoints.filter((e => e !== t)), delete e.mounts[t])
                        },
                        getMount() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            e = it(e) + ":";
                            const r = t(e);
                            return {
                                driver: r.driver,
                                base: r.base
                            }
                        },
                        getMounts() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = it(e);
                            return r(e, t.parents).map((e => ({
                                driver: e.driver,
                                base: e.mountpoint
                            })))
                        }
                    };
                return o
            }

            function ut(e, t, r) {
                return e.watch ? e.watch(((e, n) => t(e, r + n))) : () => {}
            }
            async function lt(e) {
                "function" === typeof e.dispose && await et(e.dispose)
            }

            function ht(e) {
                return new Promise(((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                }))
            }

            function pt(e, t) {
                const r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                const n = ht(r);
                return (e, r) => n.then((n => r(n.transaction(t, e).objectStore(t))))
            }
            let ft;

            function dt() {
                return ft || (ft = pt("keyval-store", "keyval")), ft
            }

            function gt(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dt())("readonly", (t => ht(t.get(e))))
            }

            function vt(e, t) {
                return e.openCursor().onsuccess = function() {
                    this.result && (t(this.result), this.result.continue())
                }, ht(e.transaction)
            }
            var yt = r(75457);
            var mt = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = e.base && e.base.length > 0 ? `${e.base}:` : "",
                    r = e => t + e;
                let n;
                return e.dbName && e.storeName && (n = pt(e.dbName, e.storeName)), {
                    name: "idb-keyval",
                    options: e,
                    hasItem: async e => !(typeof await gt(r(e), n) > "u"),
                    async getItem(e) {
                        var t;
                        return null !== (t = await gt(r(e), n)) && void 0 !== t ? t : null
                    },
                    setItem: (e, t) => function(e, t) {
                        return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dt())("readwrite", (r => (r.put(t, e), ht(r.transaction))))
                    }(r(e), t, n),
                    removeItem: e => function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dt())("readwrite", (t => (t.delete(e), ht(t.transaction))))
                    }(r(e), n),
                    getKeys: () => function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt())("readonly", (e => {
                            if (e.getAllKeys) return ht(e.getAllKeys());
                            const t = [];
                            return vt(e, (e => t.push(e.key))).then((() => t))
                        }))
                    }(n),
                    clear: () => function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt())("readwrite", (e => (e.clear(), ht(e.transaction))))
                    }(n)
                }
            };
            class wt {
                constructor() {
                    this.indexedDb = ct({
                        driver: mt({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e => [e.key, e.value]))
                }
                async getItem(e) {
                    const t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, (0, yt.u)(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                bt = {
                    exports: {}
                };

            function It(e) {
                var t;
                return [e[0], (0, yt.D)(null != (t = e[1]) ? t : "")]
            }! function() {
                let e;

                function t() {}
                e = t, e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    const e = this;
                    Object.keys(e).forEach((function(t) {
                        e[t] = void 0, delete e[t]
                    }))
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", (function() {
                    return Object.keys(this).length
                })), typeof _t < "u" && _t.localStorage ? bt.exports = _t.localStorage : typeof window < "u" && window.localStorage ? bt.exports = window.localStorage : bt.exports = new t
            }();
            class Et {
                constructor() {
                    this.localStorage = bt.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(It)
                }
                async getItem(e) {
                    const t = this.localStorage.getItem(e);
                    if (null !== t) return (0, yt.D)(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, (0, yt.u)(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            const Pt = async (e, t) => {
                t.length && t.forEach((async t => {
                    await e.removeItem(t)
                }))
            };
            class St {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    const e = new Et;
                    this.storage = e;
                    try {
                        (async (e, t, r) => {
                            const n = "wc_storage_version",
                                i = await t.getItem(n);
                            if (i && i >= 1) return void r(t);
                            const s = await e.getKeys();
                            if (!s.length) return void r(t);
                            const o = [];
                            for (; s.length;) {
                                const r = s.shift();
                                if (!r) continue;
                                const n = r.toLowerCase();
                                if (n.includes("wc@") || n.includes("walletconnect") || n.includes("wc_") || n.includes("wallet_connect")) {
                                    const n = await e.getItem(r);
                                    await t.setItem(r, n), o.push(r)
                                }
                            }
                            await t.setItem(n, 1), r(t), Pt(e, o)
                        })(e, new wt, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise((e => {
                        const t = setInterval((() => {
                            this.initialized && (clearInterval(t), e())
                        }), 20)
                    }))
                }
            }
            var Ot = r(6961),
                Rt = r(21581),
                Nt = r(90948);
            class xt extends Nt.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class Ct extends Nt.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class At {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class jt extends Nt.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Tt extends Nt.q {
                constructor(e) {
                    super()
                }
            }
            class Dt {
                constructor(e, t, r, n) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class qt extends Nt.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Lt extends Nt.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class kt {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class $t {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class zt {
                constructor(e) {
                    this.client = e
                }
            }
            var Mt = r(2421);
            const Ut = ".",
                Kt = "base64url",
                Ht = "utf8",
                Vt = "utf8",
                Bt = ":",
                Ft = "did",
                Wt = "key",
                Gt = "base58btc",
                Jt = "z",
                Qt = "K36";
            var Yt = r(83466),
                Zt = r(82051),
                Xt = r(46765);

            function er(e) {
                return (0, Zt.B)((0, Xt.m)((0, yt.u)(e), Ht), Kt)
            }

            function tr(e) {
                const t = (0, Xt.m)(Qt, Gt),
                    r = Jt + (0, Zt.B)((0, Yt.z)([t, e]), Gt);
                return [Ft, Wt, r].join(Bt)
            }

            function rr() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.randomBytes)(32);
                return Mt._w(e)
            }
            async function nr(e, t, r, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, p.fromMiliseconds)(Date.now());
                const s = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    o = {
                        iss: tr(n.publicKey),
                        sub: e,
                        aud: t,
                        iat: i,
                        exp: i + r
                    },
                    a = (c = {
                        header: s,
                        payload: o
                    }, (0, Xt.m)([er(c.header), er(c.payload)].join(Ut), Vt));
                var c;
                return function(e) {
                    return [er(e.header), er(e.payload), (t = e.signature, (0, Zt.B)(t, Kt))].join(Ut);
                    var t
                }({
                    header: s,
                    payload: o,
                    signature: Mt.Xx(n.secretKey, a)
                })
            }
            r(6584);
            var ir = r(42829),
                sr = r(28477);
            const or = e => e.split("?")[0],
                ar = typeof WebSocket < "u" ? WebSocket : typeof r.g < "u" && typeof r.g.WebSocket < "u" ? r.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : r(45559);
            class cr {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !(0, sr.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return typeof this.socket < "u"
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
                    return new Promise(((e, t) => {
                        typeof this.socket > "u" ? t(new Error("Connection already closed")) : (this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close())
                    }))
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send((0, yt.u)(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0, sr.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        const e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                            this.events.once("register_error", (e => {
                                this.resetMaxListeners(), t(e)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(new Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            }))
                        }))
                    }
                    return this.url = e, this.registering = !0, new Promise(((t, n) => {
                        const i = new URLSearchParams(e).get("origin"),
                            s = (0, sr.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !(0, sr.isLocalhostUrl)(e)
                            },
                            o = new ar(e, [], s);
                        typeof WebSocket < "u" || typeof r.g < "u" && typeof r.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? o.onerror = e => {
                            const t = e;
                            n(this.emitError(t.error))
                        } : o.on("error", (e => {
                            n(this.emitError(e))
                        })), o.onopen = () => {
                            this.onOpen(o), t(o)
                        }
                    }))
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    const t = "string" == typeof e.data ? (0, yt.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const r = this.parseError(t),
                        n = r.message || r.toString(),
                        i = (0, sr.formatJsonRpcError)(e, n);
                    this.events.emit("payload", i)
                }
                parseError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0, sr.parseConnectionError)(e, or(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    const t = this.parseError(new Error((null === e || void 0 === e ? void 0 : e.message) || `WebSocket connection failed for host: ${or(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var ur = r(32467),
                lr = r.n(ur);
            var hr = function(e, t) {
                    if (e.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                    for (var i = 0; i < e.length; i++) {
                        var s = e.charAt(i),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
                        r[o] = i
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw new TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[t]) {
                            for (var n = 0, i = 0; e[t] === c;) n++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, p = s - 1;
                                    (0 !== l || h < i) && -1 !== p; p--, h++) l += a * o[p] >>> 0, o[p] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                i = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var f = s - i; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(n + (s - f)), g = n; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                            for (var o = (s - i) * l + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
                                for (var h = t[i], p = 0, f = o - 1;
                                    (0 !== h || p < n) && -1 !== f; f--, p++) h += 256 * u[f] >>> 0, u[f] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw new Error("Non-zero carry");
                                n = p, i++
                            }
                            for (var d = o - n; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw new Error(`Non-${t} character`)
                        }
                    }
                },
                pr = hr;
            const fr = e => {
                if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                if (e instanceof ArrayBuffer) return new Uint8Array(e);
                if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class dr {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class gr {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return yr(this, e)
                }
            }
            class vr {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return yr(this, e)
                }
                decode(e) {
                    const t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const yr = (e, t) => new vr({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class mr {
                constructor(e, t, r, n) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new dr(e, t, r), this.decoder = new gr(e, t, n)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const wr = e => {
                    let {
                        name: t,
                        prefix: r,
                        encode: n,
                        decode: i
                    } = e;
                    return new mr(t, r, n, i)
                },
                _r = e => {
                    let {
                        prefix: t,
                        name: r,
                        alphabet: n
                    } = e;
                    const {
                        encode: i,
                        decode: s
                    } = pr(n, r);
                    return wr({
                        prefix: t,
                        name: r,
                        encode: i,
                        decode: e => fr(s(e))
                    })
                },
                br = e => {
                    let {
                        name: t,
                        prefix: r,
                        bitsPerChar: n,
                        alphabet: i
                    } = e;
                    return wr({
                        prefix: r,
                        name: t,
                        encode: e => ((e, t, r) => {
                            const n = "=" === t[t.length - 1],
                                i = (1 << r) - 1;
                            let s = "",
                                o = 0,
                                a = 0;
                            for (let c = 0; c < e.length; ++c)
                                for (a = a << 8 | e[c], o += 8; o > r;) o -= r, s += t[i & a >> o];
                            if (o && (s += t[i & a << r - o]), n)
                                for (; s.length * r & 7;) s += "=";
                            return s
                        })(e, i, n),
                        decode: e => ((e, t, r, n) => {
                            const i = {};
                            for (let l = 0; l < t.length; ++l) i[t[l]] = l;
                            let s = e.length;
                            for (;
                                "=" === e[s - 1];) --s;
                            const o = new Uint8Array(s * r / 8 | 0);
                            let a = 0,
                                c = 0,
                                u = 0;
                            for (let l = 0; l < s; ++l) {
                                const t = i[e[l]];
                                if (void 0 === t) throw new SyntaxError(`Non-${n} character`);
                                c = c << r | t, a += r, a >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                            }
                            if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                            return o
                        })(e, i, n, t)
                    })
                },
                Ir = wr({
                    prefix: "\0",
                    name: "identity",
                    encode: e => (e => (new TextDecoder).decode(e))(e),
                    decode: e => (e => (new TextEncoder).encode(e))(e)
                });
            var Er = Object.freeze({
                __proto__: null,
                identity: Ir
            });
            const Pr = br({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Sr = Object.freeze({
                __proto__: null,
                base2: Pr
            });
            const Or = br({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Rr = Object.freeze({
                __proto__: null,
                base8: Or
            });
            const Nr = _r({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var xr = Object.freeze({
                __proto__: null,
                base10: Nr
            });
            const Cr = br({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Ar = br({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var jr = Object.freeze({
                __proto__: null,
                base16: Cr,
                base16upper: Ar
            });
            const Tr = br({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Dr = br({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                qr = br({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Lr = br({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                kr = br({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                $r = br({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                zr = br({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                Mr = br({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Ur = br({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Kr = Object.freeze({
                __proto__: null,
                base32: Tr,
                base32upper: Dr,
                base32pad: qr,
                base32padupper: Lr,
                base32hex: kr,
                base32hexupper: $r,
                base32hexpad: zr,
                base32hexpadupper: Mr,
                base32z: Ur
            });
            const Hr = _r({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Vr = _r({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var Br = Object.freeze({
                __proto__: null,
                base36: Hr,
                base36upper: Vr
            });
            const Fr = _r({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                Wr = _r({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var Gr = Object.freeze({
                __proto__: null,
                base58btc: Fr,
                base58flickr: Wr
            });
            const Jr = br({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                Qr = br({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Yr = br({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Zr = br({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var Xr = Object.freeze({
                __proto__: null,
                base64: Jr,
                base64pad: Qr,
                base64url: Yr,
                base64urlpad: Zr
            });
            const en = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                tn = en.reduce(((e, t, r) => (e[r] = t, e)), []),
                rn = en.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
            const nn = wr({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(e) {
                    return e.reduce(((e, t) => e += tn[t]), "")
                },
                decode: function(e) {
                    const t = [];
                    for (const r of e) {
                        const e = rn[r.codePointAt(0)];
                        if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
                        t.push(e)
                    }
                    return new Uint8Array(t)
                }
            });
            var sn = Object.freeze({
                    __proto__: null,
                    base256emoji: nn
                }),
                on = function e(t, r, n) {
                    r = r || [];
                    for (var i = n = n || 0; t >= un;) r[n++] = 255 & t | an, t /= 128;
                    for (; t & cn;) r[n++] = 255 & t | an, t >>>= 7;
                    return r[n] = 0 | t, e.bytes = n - i + 1, r
                },
                an = 128,
                cn = -128,
                un = Math.pow(2, 31);
            var ln = function e(t, r) {
                    var n, i = 0,
                        s = 0,
                        o = r = r || 0,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
                        n = t[o++], i += s < 28 ? (n & pn) << s : (n & pn) * Math.pow(2, s), s += 7
                    } while (n >= hn);
                    return e.bytes = o - r, i
                },
                hn = 128,
                pn = 127;
            var fn = Math.pow(2, 7),
                dn = Math.pow(2, 14),
                gn = Math.pow(2, 21),
                vn = Math.pow(2, 28),
                yn = Math.pow(2, 35),
                mn = Math.pow(2, 42),
                wn = Math.pow(2, 49),
                _n = Math.pow(2, 56),
                bn = Math.pow(2, 63),
                In = {
                    encode: on,
                    decode: ln,
                    encodingLength: function(e) {
                        return e < fn ? 1 : e < dn ? 2 : e < gn ? 3 : e < vn ? 4 : e < yn ? 5 : e < mn ? 6 : e < wn ? 7 : e < _n ? 8 : e < bn ? 9 : 10
                    }
                };
            const En = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return In.encode(e, t, r), t
                },
                Pn = e => In.encodingLength(e),
                Sn = (e, t) => {
                    const r = t.byteLength,
                        n = Pn(e),
                        i = n + Pn(r),
                        s = new Uint8Array(i + r);
                    return En(e, s, 0), En(r, s, n), s.set(t, i), new On(e, r, t, s)
                };
            class On {
                constructor(e, t, r, n) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = n
                }
            }
            const Rn = e => {
                let {
                    name: t,
                    code: r,
                    encode: n
                } = e;
                return new Nn(t, r, n)
            };
            class Nn {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Sn(this.code, t) : t.then((e => Sn(this.code, e)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const xn = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                Cn = Rn({
                    name: "sha2-256",
                    code: 18,
                    encode: xn("SHA-256")
                }),
                An = Rn({
                    name: "sha2-512",
                    code: 19,
                    encode: xn("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Cn,
                sha512: An
            });
            const jn = fr,
                Tn = {
                    code: 0,
                    name: "identity",
                    encode: jn,
                    digest: e => Sn(0, jn(e))
                };
            Object.freeze({
                __proto__: null,
                identity: Tn
            });
            new TextEncoder, new TextDecoder;
            const Dn = { ...Er,
                ...Sr,
                ...Rr,
                ...xr,
                ...jr,
                ...Kr,
                ...Br,
                ...Gr,
                ...Xr,
                ...sn
            };

            function qn(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function Ln(e, t, r, n) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }
            const kn = Ln("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))),
                $n = Ln("ascii", "a", (e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }), (e => {
                    const t = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? qn(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                })),
                zn = {
                    utf8: kn,
                    "utf-8": kn,
                    hex: Dn.base16,
                    latin1: $n,
                    ascii: $n,
                    binary: $n,
                    ...Dn
                };
            const Mn = "core",
                Un = `wc@2:${Mn}:`,
                Kn = "error",
                Hn = {
                    database: ":memory:"
                },
                Vn = "client_ed25519_seed",
                Bn = p.ONE_DAY,
                Fn = p.SIX_HOURS,
                Wn = "wss://relay.walletconnect.com",
                Gn = "wss://relay.walletconnect.org",
                Jn = "relayer_message",
                Qn = "relayer_message_ack",
                Yn = "relayer_connect",
                Zn = "relayer_disconnect",
                Xn = "relayer_error",
                ei = "relayer_connection_stalled",
                ti = "relayer_publish",
                ri = "payload",
                ni = "connect",
                ii = "disconnect",
                si = "error",
                oi = p.ONE_SECOND,
                ai = "subscription_created",
                ci = "subscription_deleted",
                ui = "subscription_sync",
                li = "subscription_resubscribed",
                hi = 1e3 * p.FIVE_SECONDS,
                pi = {
                    wc_pairingDelete: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                fi = "pairing_create",
                di = "pairing_expire",
                gi = "pairing_delete",
                vi = "pairing_ping",
                yi = "history_created",
                mi = "history_updated",
                wi = "history_deleted",
                _i = "history_sync",
                bi = "expirer_created",
                Ii = "expirer_deleted",
                Ei = "expirer_expired",
                Pi = "expirer_sync",
                Si = "verify-api",
                Oi = "https://verify.walletconnect.com",
                Ri = "https://verify.walletconnect.org",
                Ni = [Oi, Ri];
            class xi {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Un, this.init = async () => {
                        if (!this.initialized) {
                            const e = await this.getKeyChain();
                            typeof e < "u" && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        const t = this.keychain.get(e);
                        if (typeof t > "u") {
                            const {
                                message: t
                            } = Se("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw new Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, Rt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, X(e))
                }
                async getKeyChain() {
                    const e = await this.core.storage.getItem(this.storageKey);
                    return typeof e < "u" ? ee(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Ci {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        return tr(rr(await this.getClientSeed()).publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        const e = function() {
                            const e = u.Au();
                            return {
                                privateKey: (0, l.BB)(e.secretKey, b),
                                publicKey: (0, l.BB)(e.publicKey, b)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        const t = rr(await this.getClientSeed()),
                            r = C(),
                            n = Bn;
                        return await nr(r, e, n, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        const n = function(e, t) {
                            const r = u.gi((0, l.mL)(e, b), (0, l.mL)(t, b), !0),
                                n = new o.t(c.mE, r).expand(x);
                            return (0, l.BB)(n, b)
                        }(this.getPrivateKey(e), t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        const r = t || function(e) {
                            const t = (0, c.vp)((0, l.mL)(e, b));
                            return (0, l.BB)(t, b)
                        }(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        const n = q(r),
                            i = (0, yt.u)(t);
                        if (L(n)) {
                            const t = n.senderPublicKey,
                                r = n.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        const s = this.getSymKey(e),
                            {
                                type: o,
                                senderPublicKey: a
                            } = n;
                        return T({
                            type: o,
                            symKey: s,
                            message: i,
                            senderPublicKey: a
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        const n = function(e, t) {
                            const r = D(e);
                            return q({
                                type: j(r.type),
                                senderPublicKey: typeof r.senderPublicKey < "u" ? (0, l.BB)(r.senderPublicKey, b) : void 0,
                                receiverPublicKey: null === t || void 0 === t ? void 0 : t.receiverPublicKey
                            })
                        }(t, r);
                        if (L(n)) {
                            const t = n.receiverPublicKey,
                                r = n.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            const r = function(e) {
                                const t = new s.OK((0, l.mL)(e.symKey, b)),
                                    {
                                        sealed: r,
                                        iv: n
                                    } = D(e.encoded),
                                    i = t.open(n, r);
                                if (null === i) throw new Error("Failed to decrypt");
                                return (0, l.BB)(i, E)
                            }({
                                symKey: this.getSymKey(e),
                                encoded: t
                            });
                            return (0, yt.D)(r)
                        } catch (Ce) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(Ce)
                        }
                    }, this.getPayloadType = e => j(D(e).type), this.getPayloadSenderPublicKey = e => {
                        const t = D(e);
                        return t.senderPublicKey ? (0, l.BB)(t.senderPublicKey, b) : void 0
                    }, this.core = e, this.logger = (0, Rt.generateChildLogger)(t, this.name), this.keychain = r || new xi(this.core, this.logger)
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(Vn)
                    } catch {
                        e = C(), await this.keychain.set(Vn, e)
                    }
                    return function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                        const r = zn[t];
                        if (!r) throw new Error(`Unsupported encoding "${t}"`);
                        return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${e}`) : qn(globalThis.Buffer.from(e, "utf-8"))
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Ai extends At {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Un, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                const e = await this.getRelayerMessages();
                                typeof e < "u" && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        const r = A(t);
                        let n = this.messages.get(e);
                        return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = t, this.messages.set(e, n), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        return typeof this.get(e)[A(t)] < "u"
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, Rt.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, X(e))
                }
                async getRelayerMessages() {
                    const e = await this.core.storage.getItem(this.storageKey);
                    return typeof e < "u" ? ee(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class ji extends jt {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, p.toMiliseconds)(p.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var n;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            const i = (null === r || void 0 === r ? void 0 : r.ttl) || Fn,
                                s = ue(r),
                                o = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                                a = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                                c = (null === r || void 0 === r ? void 0 : r.id) || (0, sr.getBigIntRpcId)().toString(),
                                u = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: i,
                                        relay: s,
                                        prompt: o,
                                        tag: a,
                                        id: c
                                    }
                                },
                                l = setTimeout((() => this.queue.set(c, u)), this.publishTimeout);
                            try {
                                await await re(this.rpcPublish(e, t, i, s, o, a, c), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(c), this.relayer.events.emit(ti, u)
                            } catch (jt) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (n = null === r || void 0 === r ? void 0 : r.internal) && n.throwOnFailedPublish) throw this.removeRequestFromQueue(c), jt;
                                return
                            } finally {
                                clearTimeout(l)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (At) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(At), At
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, Rt.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, n, i, s, o) {
                    var a, c, u, l;
                    const h = {
                        method: le(n.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: i,
                            tag: s
                        },
                        id: o
                    };
                    return xe(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt), xe(null == (u = h.params) ? void 0 : u.tag) && (null == (l = h.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: h
                    }), this.relayer.request(h)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach((async e => {
                        const {
                            topic: t,
                            message: r,
                            opts: n
                        } = e;
                        await this.publish(t, r, n)
                    }))
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Ot.HEARTBEAT_EVENTS.pulse, (() => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(ei);
                        this.checkQueue()
                    })), this.relayer.on(Qn, (e => {
                        this.removeRequestFromQueue(e.id.toString())
                    }))
                }
            }
            class Ti {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        const r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") return void this.map.delete(e);
                        if (!this.map.has(e)) return;
                        const r = this.get(e);
                        if (!this.exists(e, t)) return;
                        const n = r.filter((e => e !== t));
                        n.length ? this.map.set(e, n) : this.map.delete(e)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var Di = Object.defineProperty,
                qi = Object.defineProperties,
                Li = Object.getOwnPropertyDescriptors,
                ki = Object.getOwnPropertySymbols,
                $i = Object.prototype.hasOwnProperty,
                zi = Object.prototype.propertyIsEnumerable,
                Mi = (e, t, r) => t in e ? Di(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Ui = (e, t) => {
                    for (var r in t || (t = {})) $i.call(t, r) && Mi(e, r, t[r]);
                    if (ki)
                        for (var r of ki(t)) zi.call(t, r) && Mi(e, r, t[r]);
                    return e
                },
                Ki = (e, t) => qi(e, Li(t));
            class Hi extends qt {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Ti, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Un, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            const r = ue(t),
                                n = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, n);
                            const i = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(i, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), i
                        } catch (xt) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(xt), xt
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), typeof(null === t || void 0 === t ? void 0 : t.id) < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise(((t, r) => {
                        const n = new p.Watch;
                        n.start(this.pendingSubscriptionWatchLabel);
                        const i = setInterval((() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), t(!0)), n.elapsed(this.pendingSubscriptionWatchLabel) >= hi && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), r(new Error("Subscription resolution timeout")))
                        }), this.pollingInterval)
                    })).catch((() => !1)), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, Rt.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    const r = this.topicMap.get(e);
                    await Promise.all(r.map((async r => await this.unsubscribeById(e, r, t))))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        const n = ue(r);
                        await this.rpcUnsubscribe(e, t, n);
                        const i = Oe("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (n) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n
                    }
                }
                async rpcSubscribe(e, t) {
                    const r = {
                        method: le(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await re(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ei)
                    }
                    return A(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    const t = {
                        method: le(e[0].relay.protocol).batchSubscribe,
                        params: {
                            topics: e.map((e => e.topic))
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: t
                    });
                    try {
                        return await await re(this.relayer.request(t), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ei)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    const n = {
                        method: le(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: n
                    }), this.relayer.request(n)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, Ki(Ui({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach((e => {
                        this.setSubscription(e.id, Ui({}, e)), this.pending.delete(e.topic)
                    }))
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, Ui({}, t)), this.topicMap.set(t.topic, e), this.events.emit(ai, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    const t = this.subscriptions.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    const r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(ci, Ki(Ui({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(ui)
                }
                async reset() {
                    if (this.cached.length) {
                        const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(li)
                }
                async restore() {
                    try {
                        const e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            const {
                                message: e
                            } = Se("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    const t = await this.rpcBatchSubscribe(e);
                    Re(t) && this.onBatchSubscribe(t.map(((t, r) => Ki(Ui({}, e[r]), {
                        id: t
                    }))))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    const e = [];
                    this.pending.forEach((t => {
                        e.push(t)
                    })), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Ot.HEARTBEAT_EVENTS.pulse, (async () => {
                        await this.checkPending()
                    })), this.relayer.on(Yn, (async () => {
                        await this.onConnect()
                    })), this.relayer.on(Zn, (() => {
                        this.onDisconnect()
                    })), this.events.on(ai, (async e => {
                        const t = ai;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })), this.events.on(ci, (async e => {
                        const t = ci;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise((e => {
                        const t = setInterval((() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }), this.pollingInterval)
                    }))
                }
            }
            var Vi = Object.defineProperty,
                Bi = Object.getOwnPropertySymbols,
                Fi = Object.prototype.hasOwnProperty,
                Wi = Object.prototype.propertyIsEnumerable,
                Gi = (e, t, r) => t in e ? Vi(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            class Ji extends Tt {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (t) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(t), t
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(Yn)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(Xn, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(ri, this.onPayloadHandler), this.provider.on(ni, this.onConnectHandler), this.provider.on(ii, this.onDisconnectHandler), this.provider.on(si, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, Rt.generateChildLogger)(e.logger, this.name) : (0, Rt.pino)((0, Rt.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new Ai(this.logger, e.core), this.subscriber = new Hi(this, this.logger), this.publisher = new ji(this, this.logger), this.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || Wn, this.projectId = e.projectId, this.bundleId = function() {
                        var e;
                        try {
                            return W() && typeof r.g < "u" && typeof(null == r.g ? void 0 : r.g.Application) < "u" ? null == (e = r.g.Application) ? void 0 : e.applicationId : void 0
                        } catch {
                            return
                        }
                    }(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Gn}...`), await this.restartTransport(Gn)
                    }
                    this.initialized = !0, setTimeout((async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }), 1e4)
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    this.isInitialized();
                    let n, i = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (i) return i;
                    const s = t => {
                        t.topic === e && (this.subscriber.off(ai, s), n())
                    };
                    return await Promise.all([new Promise((e => {
                        n = e, this.subscriber.on(ai, s)
                    })), new Promise((async r => {
                        i = await this.subscriber.subscribe(e, t), r()
                    }))]), i
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
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
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await re(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((() => this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise((e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(li, (() => {
                                    e()
                                }))
                            })), new Promise((async (e, t) => {
                                try {
                                    await re(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (r) {
                                    return void t(r)
                                }
                                e()
                            }))])
                        } catch (t) {
                            this.logger.error(t);
                            const e = t;
                            if (!this.isConnectionStalled(e.message)) throw t;
                            this.provider.events.emit(ii)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await Be()) throw new Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some((t => e.includes(t)))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    const e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new ir.r(new cr(Y({
                        sdkVersion: "2.10.6",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    const {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    const {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    const n = this.messages.has(t, r);
                    return n && this.logger.debug(`Ignoring duplicate message: ${r}`), n
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, sr.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        const t = e.params,
                            {
                                topic: r,
                                message: n,
                                publishedAt: i
                            } = t.data,
                            s = {
                                topic: r,
                                message: n,
                                publishedAt: i
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((e, t) => {
                            for (var r in t || (t = {})) Fi.call(t, r) && Gi(e, r, t[r]);
                            if (Bi)
                                for (var r of Bi(t)) Wi.call(t, r) && Gi(e, r, t[r]);
                            return e
                        })({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else(0, sr.isJsonRpcResponse)(e) && this.events.emit(Qn, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Jn, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    const t = (0, sr.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(ri, this.onPayloadHandler), this.provider.off(ni, this.onConnectHandler), this.provider.off(ii, this.onDisconnectHandler), this.provider.off(si, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(ei, (() => {
                        this.restartTransport().catch((e => this.logger.error(e)))
                    }));
                    let e = await Be();
                    Fe((async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((e => this.logger.error(e))) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((e => this.logger.error(e)))))
                    }))
                }
                onProviderDisconnect() {
                    this.events.emit(Zn), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((async () => {
                        await this.restartTransport().catch((e => this.logger.error(e)))
                    }), (0, p.toMiliseconds)(oi)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise((e => {
                            const t = setInterval((() => {
                                this.connected && (clearInterval(t), e())
                            }), this.connectionStatusPollingInterval)
                        }));
                        await this.restartTransport()
                    }
                }
            }
            var Qi = Object.defineProperty,
                Yi = Object.getOwnPropertySymbols,
                Zi = Object.prototype.hasOwnProperty,
                Xi = Object.prototype.propertyIsEnumerable,
                es = (e, t, r) => t in e ? Qi(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ts = (e, t) => {
                    for (var r in t || (t = {})) Zi.call(t, r) && es(e, r, t[r]);
                    if (Yi)
                        for (var r of Yi(t)) Xi.call(t, r) && es(e, r, t[r]);
                    return e
                };
            class rs extends Dt {
                constructor(e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Un,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                    super(e, t, r, n), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Un, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => {
                            this.getKey && null !== e && !xe(e) ? this.map.set(this.getKey(e), e) : function(e) {
                                var t;
                                return null == (t = null === e || void 0 === e ? void 0 : e.proposer) ? void 0 : t.publicKey
                            }(e) ? this.map.set(e.id, e) : function(e) {
                                return null === e || void 0 === e ? void 0 : e.topic
                            }(e) && this.map.set(e.topic, e)
                        })), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter((t => Object.keys(e).every((r => lr()(t[r], e[r]))))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        const r = ts(ts({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, Rt.generateChildLogger)(t, this.name), this.storagePrefix = n, this.getKey = i
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    const t = this.map.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), new Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            const {
                                message: e
                            } = Se("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class ns {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(i()), this.initialized = !1, this.storagePrefix = Un, this.ignoredPayloadTypes = [S], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = e => {
                        let {
                            methods: t
                        } = e;
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                    }, this.create = async () => {
                        this.isInitialized();
                        const e = C(),
                            t = await this.core.crypto.setSymKey(e),
                            r = se(p.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            i = {
                                topic: t,
                                expiry: r,
                                relay: n,
                                active: !1
                            },
                            s = we({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: n
                            });
                        return await this.pairings.set(t, i), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                            topic: t,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        const {
                            topic: t,
                            symKey: r,
                            relay: n
                        } = ye(e.uri);
                        let i;
                        if (this.pairings.keys.includes(t) && (i = this.pairings.get(t), i.active)) throw new Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        const s = se(p.FIVE_MINUTES),
                            o = {
                                topic: t,
                                relay: n,
                                expiry: s,
                                active: !1
                            };
                        return await this.pairings.set(t, o), this.core.expirer.set(t, s), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(fi, o), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: n
                        })), o
                    }, this.activate = async e => {
                        let {
                            topic: t
                        } = e;
                        this.isInitialized();
                        const r = se(p.THIRTY_DAYS);
                        await this.pairings.update(t, {
                            active: !0,
                            expiry: r
                        }), this.core.expirer.set(t, r)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        const {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            const e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: n,
                                    reject: i
                                } = te();
                            this.events.once(ae("pairing_ping", e), (e => {
                                let {
                                    error: t
                                } = e;
                                t ? i(t) : n()
                            })), await r()
                        }
                    }, this.updateExpiry = async e => {
                        let {
                            topic: t,
                            expiry: r
                        } = e;
                        this.isInitialized(), await this.pairings.update(t, {
                            expiry: r
                        })
                    }, this.updateMetadata = async e => {
                        let {
                            topic: t,
                            metadata: r
                        } = e;
                        this.isInitialized(), await this.pairings.update(t, {
                            peerMetadata: r
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        const {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", Oe("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        const n = (0, sr.formatJsonRpcRequest)(t, r),
                            i = await this.core.crypto.encode(e, n),
                            s = pi[t].req;
                        return this.core.history.set(e, n), this.core.relayer.publish(e, i, s), n.id
                    }, this.sendResult = async (e, t, r) => {
                        const n = (0, sr.formatJsonRpcResult)(e, r),
                            i = await this.core.crypto.encode(t, n),
                            s = await this.core.history.get(t, e),
                            o = pi[s.request.method].res;
                        await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
                    }, this.sendError = async (e, t, r) => {
                        const n = (0, sr.formatJsonRpcError)(e, r),
                            i = await this.core.crypto.encode(t, n),
                            s = await this.core.history.get(t, e),
                            o = pi[s.request.method] ? pi[s.request.method].res : pi.unregistered_method.res;
                        await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, Oe("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        const e = this.pairings.getAll().filter((e => oe(e.expiry)));
                        await Promise.all(e.map((e => this.deletePairing(e.topic))))
                    }, this.onRelayEventRequest = e => {
                        const {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        const {
                            topic: t,
                            payload: r
                        } = e, n = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === n ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(n)
                    }, this.onPairingPingRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(vi, {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.logger.error(n)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        setTimeout((() => {
                            (0, sr.isJsonRpcResult)(t) ? this.events.emit(ae("pairing_ping", r), {}): (0, sr.isJsonRpcError)(t) && this.events.emit(ae("pairing_ping", r), {
                                error: t.error
                            })
                        }), 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(gi, {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.logger.error(n)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        const {
                            id: r,
                            method: n
                        } = t;
                        try {
                            if (this.registeredMethods.includes(n)) return;
                            const t = Oe("WC_METHOD_UNSUPPORTED", n);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (At) {
                            await this.sendError(r, e, At), this.logger.error(At)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(Oe("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw new Error(t)
                        }
                        if (! function(e) {
                                if (Ce(e, !1)) try {
                                    return typeof new URL(e) < "u"
                                } catch {
                                    return !1
                                }
                                return !1
                            }(e.uri)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw new Error(t)
                        }
                        const r = ye(e.uri);
                        if (null == (t = null === r || void 0 === r ? void 0 : r.relay) || !t.protocol) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(e)
                        }
                        if (null == r || !r.symKey) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!Ce(e, !1)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw new Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            const {
                                message: t
                            } = Se("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw new Error(t)
                        }
                        if (oe(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            const {
                                message: t
                            } = Se("EXPIRED", `pairing topic: ${e}`);
                            throw new Error(t)
                        }
                    }, this.core = e, this.logger = (0, Rt.generateChildLogger)(t, this.name), this.pairings = new rs(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(Jn, (async e => {
                        const {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        const n = await this.core.crypto.decode(t, r);
                        try {
                            (0, sr.isJsonRpcRequest)(n) ? (this.core.history.set(t, n), this.onRelayEventRequest({
                                topic: t,
                                payload: n
                            })) : (0, sr.isJsonRpcResponse)(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
                                topic: t,
                                payload: n
                            }), this.core.history.delete(t, n.id))
                        } catch (xt) {
                            this.logger.error(xt)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.core.expirer.on(Ei, (async e => {
                        const {
                            topic: t
                        } = ie(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(di, {
                            topic: t
                        }))
                    }))
                }
            }
            class is extends Ct {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Un, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.records.set(e.id, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        const n = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: se(p.THIRTY_DAYS)
                        };
                        this.records.set(n.id, n), this.events.emit(yi, n)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        const t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, sr.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(mi, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach((r => {
                            if (r.topic === e) {
                                if (typeof t < "u" && r.id !== t) return;
                                this.records.delete(r.id), this.events.emit(wi, r)
                            }
                        }))
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, Rt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const e = [];
                    return this.values.forEach((t => {
                        if (typeof t.response < "u") return;
                        const r = {
                            topic: t.topic,
                            request: (0, sr.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    })), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    const t = this.records.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(_i)
                }
                async restore() {
                    try {
                        const e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            const {
                                message: e
                            } = Se("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(yi, (e => {
                        const t = yi;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.events.on(mi, (e => {
                        const t = mi;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.events.on(wi, (e => {
                        const t = wi;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.core.heartbeat.on(Ot.HEARTBEAT_EVENTS.pulse, (() => {
                        this.cleanup()
                    }))
                }
                cleanup() {
                    try {
                        this.records.forEach((e => {
                            (0, p.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        }))
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class ss extends Lt {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Un, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.expirations.set(e.target, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            const t = this.formatTarget(e);
                            return typeof this.getExpiration(t) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        const r = this.formatTarget(e),
                            n = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(bi, {
                            target: r,
                            expiration: n
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        const t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            const t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(Ii, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, Rt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return function(e) {
                        return ne("topic", e)
                    }(e);
                    if ("number" == typeof e) return function(e) {
                        return ne("id", e)
                    }(e);
                    const {
                        message: t
                    } = Se("UNKNOWN_TYPE", "Target type: " + typeof e);
                    throw new Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(Pi)
                }
                async restore() {
                    try {
                        const e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            const {
                                message: e
                            } = Se("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    const t = this.expirations.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), new Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    const {
                        expiry: r
                    } = t;
                    (0, p.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(Ei, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach(((e, t) => this.checkExpiry(t, e)))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(Ot.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(bi, (e => {
                        const t = bi;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })), this.events.on(Ei, (e => {
                        const t = Ei;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })), this.events.on(Ii, (e => {
                        const t = Ii;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class os extends kt {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = Si, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || W() || !G()) return;
                        const t = this.getVerifyUrl(null === e || void 0 === e ? void 0 : e.verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (xt) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(xt)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = Ri;
                            try {
                                await this.createIframe()
                            } catch (xt) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(xt), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        if (this.isDevEnv) return "";
                        const t = this.getVerifyUrl(null === e || void 0 === e ? void 0 : e.verifyUrl);
                        let r;
                        try {
                            r = await this.fetchAttestation(e.attestationId, t)
                        } catch (n) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${t}`), this.logger.info(n), r = await this.fetchAttestation(e.attestationId, Ri)
                        }
                        return r
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        const r = this.startAbortTimer(2 * p.ONE_SECOND),
                            n = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === n.status ? await n.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach((e => this.sendPost(e))), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        const t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise((r => {
                            if (document.getElementById(Si)) return r();
                            window.addEventListener("message", t);
                            const n = document.createElement("iframe");
                            n.id = Si, n.src = `${this.verifyUrl}/${this.projectId}`, n.style.display = "none", document.body.append(n), this.iframe = n, e = r
                        })), new Promise(((e, r) => setTimeout((() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }), (0, p.toMiliseconds)(p.FIVE_SECONDS))))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || Oi;
                        return Ni.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${Oi}`), t = Oi), t
                    }, this.logger = (0, Rt.generateChildLogger)(t, this.name), this.verifyUrl = Oi, this.abortController = new AbortController, this.isDevEnv = F() && {
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0
                    }.IS_VITEST
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout((() => this.abortController.abort()), (0, p.toMiliseconds)(e))
                }
            }
            var as = Object.defineProperty,
                cs = Object.getOwnPropertySymbols,
                us = Object.prototype.hasOwnProperty,
                ls = Object.prototype.propertyIsEnumerable,
                hs = (e, t, r) => t in e ? as(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ps = (e, t) => {
                    for (var r in t || (t = {})) us.call(t, r) && hs(e, r, t[r]);
                    if (cs)
                        for (var r of cs(t)) ls.call(t, r) && hs(e, r, t[r]);
                    return e
                };
            class fs extends xt {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = Mn, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = null === e || void 0 === e ? void 0 : e.projectId, this.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || Wn, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    const t = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Rt.pino)((0, Rt.getDefaultLoggerOptions)({
                        level: (null === e || void 0 === e ? void 0 : e.logger) || Kn
                    }));
                    this.logger = (0, Rt.generateChildLogger)(t, this.name), this.heartbeat = new Ot.HeartBeat, this.crypto = new Ci(this, this.logger, null === e || void 0 === e ? void 0 : e.keychain), this.history = new is(this, this.logger), this.expirer = new ss(this, this.logger), this.storage = null != e && e.storage ? e.storage : new St(ps(ps({}, Hn), null === e || void 0 === e ? void 0 : e.storageOptions)), this.relayer = new Ji({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new ns(this, this.logger), this.verify = new os(this.projectId || "", this.logger)
                }
                static async init(e) {
                    const t = new fs(e);
                    await t.initialize();
                    const r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            const ds = fs,
                gs = "client",
                vs = `wc@2:${gs}:`,
                ys = gs,
                ms = "error",
                ws = "WALLETCONNECT_DEEPLINK_CHOICE",
                _s = "Proposal expired",
                bs = p.SEVEN_DAYS,
                Is = {
                    wc_sessionPropose: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                Es = {
                    min: p.FIVE_MINUTES,
                    max: p.SEVEN_DAYS
                },
                Ps = "IDLE",
                Ss = "ACTIVE",
                Os = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var Rs = Object.defineProperty,
                Ns = Object.defineProperties,
                xs = Object.getOwnPropertyDescriptors,
                Cs = Object.getOwnPropertySymbols,
                As = Object.prototype.hasOwnProperty,
                js = Object.prototype.propertyIsEnumerable,
                Ts = (e, t, r) => t in e ? Rs(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Ds = (e, t) => {
                    for (var r in t || (t = {})) As.call(t, r) && Ts(e, r, t[r]);
                    if (Cs)
                        for (var r of Cs(t)) js.call(t, r) && Ts(e, r, t[r]);
                    return e
                },
                qs = (e, t) => Ns(e, xs(t));
            class Ls extends zt {
                constructor(e) {
                    var t;
                    super(e), t = this, this.name = "engine", this.events = new(i()), this.initialized = !1, this.ignoredPayloadTypes = [S], this.requestQueue = {
                        state: Ps,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: Ps,
                        queue: []
                    }, this.requestQueueDelay = p.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(Is)
                        }), this.initialized = !0, setTimeout((() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }), (0, p.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        const t = qs(Ds({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        const {
                            pairingTopic: r,
                            requiredNamespaces: n,
                            optionalNamespaces: i,
                            sessionProperties: s,
                            relays: o
                        } = t;
                        let a, c = r,
                            u = !1;
                        if (c && (u = this.client.core.pairing.pairings.get(c).active), !c || !u) {
                            const {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, a = t
                        }
                        const l = await this.client.core.crypto.generateKeyPair(),
                            h = Ds({
                                requiredNamespaces: n,
                                optionalNamespaces: i,
                                relays: null !== o && void 0 !== o ? o : [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = te(p.FIVE_MINUTES, _s);
                        if (this.events.once(ae("session_connect"), (async e => {
                                let {
                                    error: t,
                                    session: r
                                } = e;
                                if (t) f(t);
                                else if (r) {
                                    r.self.publicKey = l;
                                    const e = qs(Ds({}, r), {
                                        requiredNamespaces: r.requiredNamespaces,
                                        optionalNamespaces: r.optionalNamespaces
                                    });
                                    await this.client.session.set(r.topic, e), await this.setExpiry(r.topic, r.expiry), c && await this.client.core.pairing.updateMetadata({
                                        topic: c,
                                        metadata: r.peer.metadata
                                    }), d(e)
                                }
                            })), !c) {
                            const {
                                message: e
                            } = Se("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw new Error(e)
                        }
                        const v = await this.sendRequest({
                                topic: c,
                                method: "wc_sessionPropose",
                                params: h
                            }),
                            y = se(p.FIVE_MINUTES);
                        return await this.setProposal(v, Ds({
                            id: v,
                            expiry: y
                        }, h)), {
                            uri: a,
                            approval: g
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        const {
                            id: t,
                            relayProtocol: r,
                            namespaces: n,
                            sessionProperties: i
                        } = e, s = this.client.proposal.get(t);
                        let {
                            pairingTopic: o,
                            proposer: a,
                            requiredNamespaces: c,
                            optionalNamespaces: u
                        } = s;
                        o = o || "", Ne(c) || (c = function(e, t) {
                            const r = ke(e, t);
                            if (r) throw new Error(r.message);
                            const n = {};
                            for (const [i, s] of Object.entries(e)) n[i] = {
                                methods: s.methods,
                                events: s.events,
                                chains: s.accounts.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
                            };
                            return n
                        }(n, "approve()"));
                        const l = await this.client.core.crypto.generateKeyPair(),
                            h = a.publicKey,
                            p = await this.client.core.crypto.generateSharedKey(l, h);
                        o && t && (await this.client.core.pairing.updateMetadata({
                            topic: o,
                            metadata: a.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: o,
                            result: {
                                relay: {
                                    protocol: null !== r && void 0 !== r ? r : "irn"
                                },
                                responderPublicKey: l
                            }
                        }), await this.client.proposal.delete(t, Oe("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: o
                        }));
                        const f = Ds({
                            relay: {
                                protocol: null !== r && void 0 !== r ? r : "irn"
                            },
                            namespaces: n,
                            requiredNamespaces: c,
                            optionalNamespaces: u,
                            pairingTopic: o,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: se(bs)
                        }, i && {
                            sessionProperties: i
                        });
                        await this.client.core.relayer.subscribe(p), await this.sendRequest({
                            topic: p,
                            method: "wc_sessionSettle",
                            params: f,
                            throwOnFailedPublish: !0
                        });
                        const d = qs(Ds({}, f), {
                            topic: p,
                            pairingTopic: o,
                            acknowledged: !1,
                            self: f.controller,
                            peer: {
                                publicKey: a.publicKey,
                                metadata: a.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(p, d), await this.setExpiry(p, se(bs)), {
                            topic: p,
                            acknowledged: () => new Promise((e => setTimeout((() => e(this.client.session.get(p))), 500)))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        const {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: n
                        } = this.client.proposal.get(t);
                        n && (await this.sendError(t, n, r), await this.client.proposal.delete(t, Oe("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        const {
                            topic: t,
                            namespaces: r
                        } = e, n = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: i,
                            resolve: s,
                            reject: o
                        } = te();
                        return this.events.once(ae("session_update", n), (e => {
                            let {
                                error: t
                            } = e;
                            t ? o(t) : s()
                        })), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: i
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        const {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: n,
                            resolve: i,
                            reject: s
                        } = te();
                        return this.events.once(ae("session_extend", r), (e => {
                            let {
                                error: t
                            } = e;
                            t ? s(t) : i()
                        })), await this.setExpiry(t, se(bs)), {
                            acknowledged: n
                        }
                    }, this.request = async t => {
                        await this.isInitialized(), await this.isValidRequest(t);
                        const {
                            chainId: n,
                            request: i,
                            topic: s,
                            expiry: o
                        } = t, a = (0, sr.payloadId)(), {
                            done: c,
                            resolve: u,
                            reject: l
                        } = te(o, "Request expired. Please try again.");
                        return this.events.once(ae("session_request", a), (e => {
                            let {
                                error: t,
                                result: r
                            } = e;
                            t ? l(t) : u(r)
                        })), await Promise.all([new Promise((async e => {
                            await this.sendRequest({
                                clientRpcId: a,
                                topic: s,
                                method: "wc_sessionRequest",
                                params: {
                                    request: i,
                                    chainId: n
                                },
                                expiry: o,
                                throwOnFailedPublish: !0
                            }).catch((e => l(e))), this.client.events.emit("session_request_sent", {
                                topic: s,
                                request: i,
                                chainId: n,
                                id: a
                            }), e()
                        })), new Promise((async t => {
                            const n = await async function(e, t) {
                                try {
                                    return await e.getItem(t) || (G() ? localStorage.getItem(t) : void 0)
                                } catch (i) {
                                    console.error(i)
                                }
                            }(this.client.core.storage, ws);
                            (async function(t) {
                                let {
                                    id: n,
                                    topic: i,
                                    wcDeepLink: s
                                } = t;
                                try {
                                    if (!s) return;
                                    const e = "string" == typeof s ? JSON.parse(s) : s;
                                    let t = null === e || void 0 === e ? void 0 : e.href;
                                    if ("string" != typeof t) return;
                                    t.endsWith("/") && (t = t.slice(0, -1));
                                    const o = `${t}/wc?requestId=${n}&sessionTopic=${i}`,
                                        a = J();
                                    a === V.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === V.reactNative && typeof(null == r.g ? void 0 : r.g.Linking) < "u" && await r.g.Linking.openURL(o)
                                } catch (e) {
                                    console.error(e)
                                }
                            })({
                                id: a,
                                topic: s,
                                wcDeepLink: n
                            }), t()
                        })), c()]).then((e => e[2]))
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        const {
                            topic: t,
                            response: r
                        } = e, {
                            id: n
                        } = r;
                        (0, sr.isJsonRpcResult)(r) ? await this.sendResult({
                            id: n,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, sr.isJsonRpcError)(r) && await this.sendError(n, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        const {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            const e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: n,
                                    reject: i
                                } = te();
                            this.events.once(ae("session_ping", e), (e => {
                                let {
                                    error: t
                                } = e;
                                t ? i(t) : n()
                            })), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        const {
                            topic: t,
                            event: r,
                            chainId: n
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: n
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        const {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: Oe("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter((t => function(e, t) {
                        const {
                            requiredNamespaces: r
                        } = t, n = Object.keys(e.namespaces), i = Object.keys(r);
                        let s = !0;
                        return !!Z(i, n) && (n.forEach((t => {
                            const {
                                accounts: n,
                                methods: i,
                                events: o
                            } = e.namespaces[t], a = _e(n), c = r[t];
                            (!Z(w(t, c), a) || !Z(c.methods, i) || !Z(c.events, o)) && (s = !1)
                        })), s)
                    }(t, e)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            const t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter((r => {
                                    var n, i;
                                    return (null == (n = r.peerMetadata) ? void 0 : n.url) && (null == (i = r.peerMetadata) ? void 0 : i.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                }));
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            })))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    }, this.deleteSession = async (e, t) => {
                        const {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, Oe("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e), this.client.core.storage.removeItem(ws).catch((e => this.client.logger.warn(e)))
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, Oe("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async function(e, r) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        await Promise.all([t.client.pendingRequest.delete(e, r), n ? Promise.resolve() : t.client.core.expirer.del(e)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter((t => t.id !== e)), n && (t.sessionRequestQueue.state = Ps)
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        const t = Is.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: n,
                                params: i,
                                verifyContext: s
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: n,
                            params: i,
                            verifyContext: s
                        }), t && this.client.core.expirer.set(r, se(t))
                    }, this.sendRequest = async e => {
                        const {
                            topic: t,
                            method: r,
                            params: n,
                            expiry: i,
                            relayRpcId: s,
                            clientRpcId: o,
                            throwOnFailedPublish: a
                        } = e, c = (0, sr.formatJsonRpcRequest)(r, n, o);
                        if (G() && Os.includes(r)) {
                            const e = A(JSON.stringify(c));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        const u = await this.client.core.crypto.encode(t, c),
                            l = Is[r].req;
                        return i && (l.ttl = i), s && (l.id = s), this.client.core.history.set(t, c), a ? (l.internal = qs(Ds({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, u, l)) : this.client.core.relayer.publish(t, u, l).catch((e => this.client.logger.error(e))), c.id
                    }, this.sendResult = async e => {
                        const {
                            id: t,
                            topic: r,
                            result: n,
                            throwOnFailedPublish: i
                        } = e, s = (0, sr.formatJsonRpcResult)(t, n), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, t), c = Is[a.request.method].res;
                        i ? (c.internal = qs(Ds({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch((e => this.client.logger.error(e))), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        const n = (0, sr.formatJsonRpcError)(e, r),
                            i = await this.client.core.crypto.encode(t, n),
                            s = await this.client.core.history.get(t, e),
                            o = Is[s.request.method].res;
                        this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(n)
                    }, this.cleanup = async () => {
                        const e = [],
                            t = [];
                        this.client.session.getAll().forEach((t => {
                            oe(t.expiry) && e.push(t.topic)
                        })), this.client.proposal.getAll().forEach((e => {
                            oe(e.expiry) && t.push(e.id)
                        })), await Promise.all([...e.map((e => this.deleteSession(e))), ...t.map((e => this.deleteProposal(e)))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state !== Ss) {
                            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                                this.requestQueue.state = Ss;
                                const t = this.requestQueue.queue.shift();
                                if (t) try {
                                    this.processRequest(t), await new Promise((e => setTimeout(e, 300)))
                                } catch (e) {
                                    this.client.logger.warn(e)
                                }
                            }
                            this.requestQueue.state = Ps
                        } else this.client.logger.info("Request queue already active, skipping...")
                    }, this.processRequest = e => {
                        const {
                            topic: t,
                            payload: r
                        } = e, n = r.method;
                        switch (n) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${n}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        const {
                            topic: t,
                            payload: r
                        } = e, n = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (n) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${n}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        const {
                            topic: t
                        } = e, {
                            message: r
                        } = Se("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        const {
                            params: r,
                            id: n
                        } = t;
                        try {
                            this.isValidConnect(Ds({}, t.params));
                            const i = se(p.FIVE_MINUTES),
                                s = Ds({
                                    id: n,
                                    pairingTopic: e,
                                    expiry: i
                                }, r);
                            await this.setProposal(n, s);
                            const o = A(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: n,
                                params: s,
                                verifyContext: a
                            })
                        } catch (xt) {
                            await this.sendError(n, e, xt), this.client.logger.error(xt)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        if ((0, sr.isJsonRpcResult)(t)) {
                            const {
                                result: n
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: n
                            });
                            const i = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: i
                            });
                            const s = i.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            const o = n.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            const a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            const c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, sr.isJsonRpcError)(t) && (await this.client.proposal.delete(r, Oe("USER_DISCONNECTED")), this.events.emit(ae("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        const {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(n);
                            const {
                                relay: r,
                                controller: i,
                                expiry: s,
                                namespaces: o,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                sessionProperties: u,
                                pairingTopic: l
                            } = t.params, h = Ds({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                controller: i.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: i.publicKey,
                                    metadata: i.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit(ae("session_connect"), {
                                session: h
                            }), this.cleanupDuplicatePairings(h)
                        } catch (xt) {
                            await this.sendError(r, e, xt), this.client.logger.error(xt)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, sr.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(ae("session_approve", r), {})) : (0, sr.isJsonRpcError)(t) && (await this.client.session.delete(e, Oe("USER_DISCONNECTED")), this.events.emit(ae("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        const {
                            params: r,
                            id: n
                        } = t;
                        try {
                            const t = `${e}_session_update`,
                                i = Ge.get(t);
                            if (i && this.isRequestOutOfSync(i, n)) return void this.client.logger.info(`Discarding out of sync request - ${n}`);
                            this.isValidUpdate(Ds({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: n,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: n,
                                topic: e,
                                params: r
                            }), Ge.set(t, n)
                        } catch (xt) {
                            await this.sendError(n, e, xt), this.client.logger.error(xt)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, sr.isJsonRpcResult)(t) ? this.events.emit(ae("session_update", r), {}): (0, sr.isJsonRpcError)(t) && this.events.emit(ae("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, se(bs)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.client.logger.error(n)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, sr.isJsonRpcResult)(t) ? this.events.emit(ae("session_extend", r), {}): (0, sr.isJsonRpcError)(t) && this.events.emit(ae("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.client.logger.error(n)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        setTimeout((() => {
                            (0, sr.isJsonRpcResult)(t) ? this.events.emit(ae("session_ping", r), {}): (0, sr.isJsonRpcError)(t) && this.events.emit(ae("session_ping", r), {
                                error: t.error
                            })
                        }), 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise((t => {
                                this.client.core.relayer.once(ti, (async () => {
                                    t(await this.deleteSession(e))
                                }))
                            })), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            this.client.logger.error(n)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        const {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidRequest(Ds({
                                topic: e
                            }, n));
                            const t = A(JSON.stringify((0, sr.formatJsonRpcRequest)("wc_sessionRequest", n, r))),
                                i = this.client.session.get(e),
                                s = {
                                    id: r,
                                    topic: e,
                                    params: n,
                                    verifyContext: await this.getVerifyContext(t, i.peer.metadata)
                                };
                            await this.setPendingSessionRequest(s), this.addSessionRequestToSessionRequestQueue(s), this.processSessionRequestQueue()
                        } catch (xt) {
                            await this.sendError(r, e, xt), this.client.logger.error(xt)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, sr.isJsonRpcResult)(t) ? this.events.emit(ae("session_request", r), {
                            result: t.result
                        }): (0, sr.isJsonRpcError)(t) && this.events.emit(ae("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        const {
                            id: r,
                            params: n
                        } = t;
                        try {
                            const t = `${e}_session_event_${n.event.name}`,
                                i = Ge.get(t);
                            if (i && this.isRequestOutOfSync(i, r)) return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                            this.isValidEmit(Ds({
                                topic: e
                            }, n)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: n
                            }), Ge.set(t, r)
                        } catch (xt) {
                            await this.sendError(r, e, xt), this.client.logger.error(xt)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout((() => {
                            this.sessionRequestQueue.state = Ps, this.processSessionRequestQueue()
                        }), (0, p.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === Ss) return void this.client.logger.info("session request queue is already active.");
                        const e = this.sessionRequestQueue.queue[0];
                        if (e) try {
                            this.sessionRequestQueue.state = Ss, this.client.events.emit("session_request", e)
                        } catch (t) {
                            this.client.logger.error(t)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        const t = this.client.proposal.getAll().find((t => t.pairingTopic === e.topic));
                        t && this.onSessionProposeRequest(e.topic, (0, sr.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw new Error(t)
                        }
                        const {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: n,
                            sessionProperties: i,
                            relays: s
                        } = e;
                        if (xe(t) || await this.isValidPairingTopic(t), ! function(e, t) {
                                let r = !1;
                                return t && !e ? r = !0 : e && Re(e) && e.length && e.forEach((e => {
                                    r = $e(e)
                                })), r
                            }(s, !0)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `connect() relays: ${s}`);
                            throw new Error(e)
                        }!xe(r) && 0 !== Ne(r) && this.validateNamespaces(r, "requiredNamespaces"), !xe(n) && 0 !== Ne(n) && this.validateNamespaces(n, "optionalNamespaces"), xe(i) || this.validateSessionProps(i, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        const r = function(e, t, r) {
                            let n = null;
                            if (e && Ne(e)) {
                                const i = Le(e, t);
                                i && (n = i);
                                const s = De(e, t, r);
                                s && (n = s)
                            } else n = Se("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
                            return n
                        }(e, "connect()", t);
                        if (r) throw new Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!ze(e)) throw new Error(Se("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        const {
                            id: t,
                            namespaces: r,
                            relayProtocol: n,
                            sessionProperties: i
                        } = e;
                        await this.isValidProposalId(t);
                        const s = this.client.proposal.get(t),
                            o = ke(r, "approve()");
                        if (o) throw new Error(o.message);
                        const a = He(s.requiredNamespaces, r, "approve()");
                        if (a) throw new Error(a.message);
                        if (!Ce(n, !0)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                            throw new Error(e)
                        }
                        xe(i) || this.validateSessionProps(i, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), ! function(e) {
                                return !(!e || "object" != typeof e || !e.code || !Ae(e.code, !1) || !e.message || !Ce(e.message, !1))
                            }(r)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw new Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            relay: t,
                            controller: r,
                            namespaces: n,
                            expiry: i
                        } = e;
                        if (!$e(t)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(e)
                        }
                        const s = function(e, t) {
                            let r = null;
                            return Ce(null === e || void 0 === e ? void 0 : e.publicKey, !1) || (r = Se("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r
                        }(r, "onSessionSettleRequest()");
                        if (s) throw new Error(s.message);
                        const o = ke(n, "onSessionSettleRequest()");
                        if (o) throw new Error(o.message);
                        if (oe(i)) {
                            const {
                                message: e
                            } = Se("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        const n = this.client.session.get(t),
                            i = ke(r, "update()");
                        if (i) throw new Error(i.message);
                        const s = He(n.requiredNamespaces, r, "update()");
                        if (s) throw new Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            request: r,
                            chainId: n,
                            expiry: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        const {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!Me(s, n)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `request() chainId: ${n}`);
                            throw new Error(e)
                        }
                        if (! function(e) {
                                return !(xe(e) || !Ce(e.method, !1))
                            }(r)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw new Error(e)
                        }
                        if (!Ue(s, n, r.method)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw new Error(e)
                        }
                        if (i && ! function(e, t) {
                                return Ae(e, !1) && e <= t.max && e >= t.min
                            }(i, Es)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `request() expiry: ${i}. Expiry must be a number (in seconds) between ${Es.min} and ${Es.max}`);
                            throw new Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            response: r
                        } = e;
                        if (await this.isValidSessionTopic(t), ! function(e) {
                                return !(xe(e) || xe(e.result) && xe(e.error) || !Ae(e.id, !1) || !Ce(e.jsonrpc, !1))
                            }(r)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw new Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            event: r,
                            chainId: n
                        } = e;
                        await this.isValidSessionTopic(t);
                        const {
                            namespaces: i
                        } = this.client.session.get(t);
                        if (!Me(i, n)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                            throw new Error(e)
                        }
                        if (! function(e) {
                                return !(xe(e) || !Ce(e.name, !1))
                            }(r)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(e)
                        }
                        if (!Ke(i, n, r.name)) {
                            const {
                                message: e
                            } = Se("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!ze(e)) {
                            const {
                                message: t
                            } = Se("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        const r = {
                            verified: {
                                verifyUrl: t.verifyUrl || Oi,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            const n = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            n && (r.verified.origin = n.origin, r.verified.isScam = n.isScam, r.verified.validation = n.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (n) {
                            this.client.logger.info(n)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach((e => {
                            if (!Ce(e, !1)) {
                                const {
                                    message: r
                                } = Se("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw new Error(r)
                            }
                        }))
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = Se("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(Jn, (async e => {
                        const {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        const n = await this.client.core.crypto.decode(t, r);
                        try {
                            (0, sr.isJsonRpcRequest)(n) ? (this.client.core.history.set(t, n), this.onRelayEventRequest({
                                topic: t,
                                payload: n
                            })) : (0, sr.isJsonRpcResponse)(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                                topic: t,
                                payload: n
                            }), this.client.core.history.delete(t, n.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: n
                            })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(Ei, (async e => {
                        const {
                            topic: t,
                            id: r
                        } = ie(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, Se("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    }))
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(fi, (e => this.onPairingCreated(e)))
                }
                isValidPairingTopic(e) {
                    if (!Ce(e, !1)) {
                        const {
                            message: t
                        } = Se("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (oe(this.client.core.pairing.pairings.get(e).expiry)) {
                        const {
                            message: t
                        } = Se("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!Ce(e, !1)) {
                        const {
                            message: t
                        } = Se("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (oe(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        const {
                            message: t
                        } = Se("EXPIRED", `session topic: ${e}`);
                        throw new Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(e)) {
                            if (Ce(e, !1)) {
                                const {
                                    message: t
                                } = Se("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                                throw new Error(t)
                            } {
                                const {
                                    message: t
                                } = Se("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                                throw new Error(t)
                            }
                        }
                        this.isValidPairingTopic(e)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        const {
                            message: t
                        } = Se("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        const {
                            message: t
                        } = Se("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (oe(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        const {
                            message: t
                        } = Se("EXPIRED", `proposal id: ${e}`);
                        throw new Error(t)
                    }
                }
            }
            class ks extends rs {
                constructor(e, t) {
                    super(e, t, "proposal", vs), this.core = e, this.logger = t
                }
            }
            class $s extends rs {
                constructor(e, t) {
                    super(e, t, "session", vs), this.core = e, this.logger = t
                }
            }
            class zs extends rs {
                constructor(e, t) {
                    super(e, t, "request", vs, (e => e.id)), this.core = e, this.logger = t
                }
            }
            class Ms extends $t {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = ys, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = (null === e || void 0 === e ? void 0 : e.name) || ys, this.metadata = (null === e || void 0 === e ? void 0 : e.metadata) || (0, d.D)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    const t = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Rt.pino)((0, Rt.getDefaultLoggerOptions)({
                        level: (null === e || void 0 === e ? void 0 : e.logger) || ms
                    }));
                    this.core = (null === e || void 0 === e ? void 0 : e.core) || new ds(e), this.logger = (0, Rt.generateChildLogger)(t, this.name), this.session = new $s(this.core, this.logger), this.proposal = new ks(this.core, this.logger), this.pendingRequest = new zs(this.core, this.logger), this.engine = new Ls(this)
                }
                static async init(e) {
                    const t = new Ms(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, Rt.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var Us = r(10159);
            const Ks = "error",
                Hs = "wc@2:universal_provider:",
                Vs = "default_chain_changed";
            var Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                Fs = {
                    exports: {}
                };
            ! function(e, t) {
                (function() {
                    var r, n = "Expected a function",
                        i = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 16,
                        a = 32,
                        c = 64,
                        u = 128,
                        l = 256,
                        h = 1 / 0,
                        p = 9007199254740991,
                        f = NaN,
                        d = 4294967295,
                        g = [
                            ["ary", u],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", o],
                            ["flip", 512],
                            ["partial", a],
                            ["partialRight", c],
                            ["rearg", l]
                        ],
                        v = "[object Arguments]",
                        y = "[object Array]",
                        m = "[object Boolean]",
                        w = "[object Date]",
                        _ = "[object Error]",
                        b = "[object Function]",
                        I = "[object GeneratorFunction]",
                        E = "[object Map]",
                        P = "[object Number]",
                        S = "[object Object]",
                        O = "[object Promise]",
                        R = "[object RegExp]",
                        N = "[object Set]",
                        x = "[object String]",
                        C = "[object Symbol]",
                        A = "[object WeakMap]",
                        j = "[object ArrayBuffer]",
                        T = "[object DataView]",
                        D = "[object Float32Array]",
                        q = "[object Float64Array]",
                        L = "[object Int8Array]",
                        k = "[object Int16Array]",
                        $ = "[object Int32Array]",
                        z = "[object Uint8Array]",
                        M = "[object Uint8ClampedArray]",
                        U = "[object Uint16Array]",
                        K = "[object Uint32Array]",
                        H = /\b__p \+= '';/g,
                        V = /\b(__p \+=) '' \+/g,
                        B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        F = /&(?:amp|lt|gt|quot|#39);/g,
                        W = /[&<>"']/g,
                        G = RegExp(F.source),
                        J = RegExp(W.source),
                        Q = /<%-([\s\S]+?)%>/g,
                        Y = /<%([\s\S]+?)%>/g,
                        Z = /<%=([\s\S]+?)%>/g,
                        X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        ee = /^\w*$/,
                        te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        re = /[\\^$.*+?()[\]{}|]/g,
                        ne = RegExp(re.source),
                        ie = /^\s+/,
                        se = /\s/,
                        oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ae = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ce = /,? & /,
                        ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        le = /[()=,{}\[\]\/\s]/,
                        he = /\\(\\)?/g,
                        pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        fe = /\w*$/,
                        de = /^[-+]0x[0-9a-f]+$/i,
                        ge = /^0b[01]+$/i,
                        ve = /^\[object .+?Constructor\]$/,
                        ye = /^0o[0-7]+$/i,
                        me = /^(?:0|[1-9]\d*)$/,
                        we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        _e = /($^)/,
                        be = /['\n\r\u2028\u2029\\]/g,
                        Ie = "\\ud800-\\udfff",
                        Ee = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Pe = "\\u2700-\\u27bf",
                        Se = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Oe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        Re = "\\ufe0e\\ufe0f",
                        Ne = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        xe = "['\u2019]",
                        Ce = "[" + Ie + "]",
                        Ae = "[" + Ne + "]",
                        je = "[" + Ee + "]",
                        Te = "\\d+",
                        De = "[" + Pe + "]",
                        qe = "[" + Se + "]",
                        Le = "[^" + Ie + Ne + Te + Pe + Se + Oe + "]",
                        ke = "\\ud83c[\\udffb-\\udfff]",
                        $e = "[^" + Ie + "]",
                        ze = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Me = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Ue = "[" + Oe + "]",
                        Ke = "\\u200d",
                        He = "(?:" + qe + "|" + Le + ")",
                        Ve = "(?:" + Ue + "|" + Le + ")",
                        Be = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Fe = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        We = "(?:" + je + "|" + ke + ")" + "?",
                        Ge = "[" + Re + "]?",
                        Je = Ge + We + ("(?:" + Ke + "(?:" + [$e, ze, Me].join("|") + ")" + Ge + We + ")*"),
                        Qe = "(?:" + [De, ze, Me].join("|") + ")" + Je,
                        Ye = "(?:" + [$e + je + "?", je, ze, Me, Ce].join("|") + ")",
                        Ze = RegExp(xe, "g"),
                        Xe = RegExp(je, "g"),
                        et = RegExp(ke + "(?=" + ke + ")|" + Ye + Je, "g"),
                        tt = RegExp([Ue + "?" + qe + "+" + Be + "(?=" + [Ae, Ue, "$"].join("|") + ")", Ve + "+" + Fe + "(?=" + [Ae, Ue + He, "$"].join("|") + ")", Ue + "?" + He + "+" + Be, Ue + "+" + Fe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Te, Qe].join("|"), "g"),
                        rt = RegExp("[" + Ke + Ie + Ee + Re + "]"),
                        nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        it = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        st = -1,
                        ot = {};
                    ot[D] = ot[q] = ot[L] = ot[k] = ot[$] = ot[z] = ot[M] = ot[U] = ot[K] = !0, ot[v] = ot[y] = ot[j] = ot[m] = ot[T] = ot[w] = ot[_] = ot[b] = ot[E] = ot[P] = ot[S] = ot[R] = ot[N] = ot[x] = ot[A] = !1;
                    var at = {};
                    at[v] = at[y] = at[j] = at[T] = at[m] = at[w] = at[D] = at[q] = at[L] = at[k] = at[$] = at[E] = at[P] = at[S] = at[R] = at[N] = at[x] = at[C] = at[z] = at[M] = at[U] = at[K] = !0, at[_] = at[b] = at[A] = !1;
                    var ct = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        ut = parseFloat,
                        lt = parseInt,
                        ht = "object" == typeof Bs && Bs && Bs.Object === Object && Bs,
                        pt = "object" == typeof self && self && self.Object === Object && self,
                        ft = ht || pt || Function("return this")(),
                        dt = t && !t.nodeType && t,
                        gt = dt && e && !e.nodeType && e,
                        vt = gt && gt.exports === dt,
                        yt = vt && ht.process,
                        mt = function() {
                            try {
                                return gt && gt.require && gt.require("util").types || yt && yt.binding && yt.binding("util")
                            } catch {}
                        }(),
                        wt = mt && mt.isArrayBuffer,
                        _t = mt && mt.isDate,
                        bt = mt && mt.isMap,
                        It = mt && mt.isRegExp,
                        Et = mt && mt.isSet,
                        Pt = mt && mt.isTypedArray;

                    function St(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function Ot(e, t, r, n) {
                        for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
                            var o = e[i];
                            t(n, o, r(o), e)
                        }
                        return n
                    }

                    function Rt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                        return e
                    }

                    function Nt(e, t) {
                        for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                        return e
                    }

                    function xt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function Ct(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                            var o = e[r];
                            t(o, r, e) && (s[i++] = o)
                        }
                        return s
                    }

                    function At(e, t) {
                        return !!(null == e ? 0 : e.length) && Ut(e, t, 0) > -1
                    }

                    function jt(e, t, r) {
                        for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                            if (r(t, e[n])) return !0;
                        return !1
                    }

                    function Tt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                        return i
                    }

                    function Dt(e, t) {
                        for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                        return e
                    }

                    function qt(e, t, r, n) {
                        var i = -1,
                            s = null == e ? 0 : e.length;
                        for (n && s && (r = e[++i]); ++i < s;) r = t(r, e[i], i, e);
                        return r
                    }

                    function Lt(e, t, r, n) {
                        var i = null == e ? 0 : e.length;
                        for (n && i && (r = e[--i]); i--;) r = t(r, e[i], i, e);
                        return r
                    }

                    function kt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var $t = Bt("length");

                    function zt(e, t, r) {
                        var n;
                        return r(e, (function(e, r, i) {
                            if (t(e, r, i)) return n = r, !1
                        })), n
                    }

                    function Mt(e, t, r, n) {
                        for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function Ut(e, t, r) {
                        return t === t ? function(e, t, r) {
                            for (var n = r - 1, i = e.length; ++n < i;)
                                if (e[n] === t) return n;
                            return -1
                        }(e, t, r) : Mt(e, Ht, r)
                    }

                    function Kt(e, t, r, n) {
                        for (var i = r - 1, s = e.length; ++i < s;)
                            if (n(e[i], t)) return i;
                        return -1
                    }

                    function Ht(e) {
                        return e !== e
                    }

                    function Vt(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? Gt(e, t) / r : f
                    }

                    function Bt(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function Ft(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function Wt(e, t, r, n, i) {
                        return i(e, (function(e, i, s) {
                            r = n ? (n = !1, e) : t(r, e, i, s)
                        })), r
                    }

                    function Gt(e, t) {
                        for (var n, i = -1, s = e.length; ++i < s;) {
                            var o = t(e[i]);
                            o !== r && (n = n === r ? o : n + o)
                        }
                        return n
                    }

                    function Jt(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }

                    function Qt(e) {
                        return e && e.slice(0, pr(e) + 1).replace(ie, "")
                    }

                    function Yt(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function Zt(e, t) {
                        return Tt(t, (function(t) {
                            return e[t]
                        }))
                    }

                    function Xt(e, t) {
                        return e.has(t)
                    }

                    function er(e, t) {
                        for (var r = -1, n = e.length; ++r < n && Ut(t, e[r], 0) > -1;);
                        return r
                    }

                    function tr(e, t) {
                        for (var r = e.length; r-- && Ut(t, e[r], 0) > -1;);
                        return r
                    }
                    var rr = Ft({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        nr = Ft({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function ir(e) {
                        return "\\" + ct[e]
                    }

                    function sr(e) {
                        return rt.test(e)
                    }

                    function or(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach((function(e, n) {
                            r[++t] = [n, e]
                        })), r
                    }

                    function ar(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function cr(e, t) {
                        for (var r = -1, n = e.length, i = 0, o = []; ++r < n;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[i++] = r)
                        }
                        return o
                    }

                    function ur(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach((function(e) {
                            r[++t] = e
                        })), r
                    }

                    function lr(e) {
                        return sr(e) ? function(e) {
                            for (var t = et.lastIndex = 0; et.test(e);) ++t;
                            return t
                        }(e) : $t(e)
                    }

                    function hr(e) {
                        return sr(e) ? function(e) {
                            return e.match(et) || []
                        }(e) : function(e) {
                            return e.split("")
                        }(e)
                    }

                    function pr(e) {
                        for (var t = e.length; t-- && se.test(e.charAt(t)););
                        return t
                    }
                    var fr = Ft({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var dr = function e(t) {
                        var se = (t = null == t ? ft : dr.defaults(ft.Object(), t, dr.pick(ft, it))).Array,
                            Ie = t.Date,
                            Ee = t.Error,
                            Pe = t.Function,
                            Se = t.Math,
                            Oe = t.Object,
                            Re = t.RegExp,
                            Ne = t.String,
                            xe = t.TypeError,
                            Ce = se.prototype,
                            Ae = Pe.prototype,
                            je = Oe.prototype,
                            Te = t["__core-js_shared__"],
                            De = Ae.toString,
                            qe = je.hasOwnProperty,
                            Le = 0,
                            ke = function() {
                                var e = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
                                return e ? "Symbol(src)_1." + e : ""
                            }(),
                            $e = je.toString,
                            ze = De.call(Oe),
                            Me = ft._,
                            Ue = Re("^" + De.call(qe).replace(re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ke = vt ? t.Buffer : r,
                            He = t.Symbol,
                            Ve = t.Uint8Array,
                            Be = Ke ? Ke.allocUnsafe : r,
                            Fe = ar(Oe.getPrototypeOf, Oe),
                            We = Oe.create,
                            Ge = je.propertyIsEnumerable,
                            Je = Ce.splice,
                            Qe = He ? He.isConcatSpreadable : r,
                            Ye = He ? He.iterator : r,
                            et = He ? He.toStringTag : r,
                            rt = function() {
                                try {
                                    var e = ls(Oe, "defineProperty");
                                    return e({}, "", {}), e
                                } catch {}
                            }(),
                            ct = t.clearTimeout !== ft.clearTimeout && t.clearTimeout,
                            ht = Ie && Ie.now !== ft.Date.now && Ie.now,
                            pt = t.setTimeout !== ft.setTimeout && t.setTimeout,
                            dt = Se.ceil,
                            gt = Se.floor,
                            yt = Oe.getOwnPropertySymbols,
                            mt = Ke ? Ke.isBuffer : r,
                            $t = t.isFinite,
                            Ft = Ce.join,
                            gr = ar(Oe.keys, Oe),
                            vr = Se.max,
                            yr = Se.min,
                            mr = Ie.now,
                            wr = t.parseInt,
                            _r = Se.random,
                            br = Ce.reverse,
                            Ir = ls(t, "DataView"),
                            Er = ls(t, "Map"),
                            Pr = ls(t, "Promise"),
                            Sr = ls(t, "Set"),
                            Or = ls(t, "WeakMap"),
                            Rr = ls(Oe, "create"),
                            Nr = Or && new Or,
                            xr = {},
                            Cr = Ls(Ir),
                            Ar = Ls(Er),
                            jr = Ls(Pr),
                            Tr = Ls(Sr),
                            Dr = Ls(Or),
                            qr = He ? He.prototype : r,
                            Lr = qr ? qr.valueOf : r,
                            kr = qr ? qr.toString : r;

                        function $r(e) {
                            if (ea(e) && !Ho(e) && !(e instanceof Kr)) {
                                if (e instanceof Ur) return e;
                                if (qe.call(e, "__wrapped__")) return ks(e)
                            }
                            return new Ur(e)
                        }
                        var zr = function() {
                            function e() {}
                            return function(t) {
                                if (!Xo(t)) return {};
                                if (We) return We(t);
                                e.prototype = t;
                                var n = new e;
                                return e.prototype = r, n
                            }
                        }();

                        function Mr() {}

                        function Ur(e, t) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                        }

                        function Kr(e) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, this.__views__ = []
                        }

                        function Hr(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.clear(); ++t < r;) {
                                var n = e[t];
                                this.set(n[0], n[1])
                            }
                        }

                        function Vr(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.clear(); ++t < r;) {
                                var n = e[t];
                                this.set(n[0], n[1])
                            }
                        }

                        function Br(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.clear(); ++t < r;) {
                                var n = e[t];
                                this.set(n[0], n[1])
                            }
                        }

                        function Fr(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.__data__ = new Br; ++t < r;) this.add(e[t])
                        }

                        function Wr(e) {
                            var t = this.__data__ = new Vr(e);
                            this.size = t.size
                        }

                        function Gr(e, t) {
                            var r = Ho(e),
                                n = !r && Ko(e),
                                i = !r && !n && Wo(e),
                                s = !r && !n && !i && ca(e),
                                o = r || n || i || s,
                                a = o ? Jt(e.length, Ne) : [],
                                c = a.length;
                            for (var u in e)(t || qe.call(e, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ys(u, c))) && a.push(u);
                            return a
                        }

                        function Jr(e) {
                            var t = e.length;
                            return t ? e[Wn(0, t - 1)] : r
                        }

                        function Qr(e, t) {
                            return Ts(Ni(e), on(t, 0, e.length))
                        }

                        function Yr(e) {
                            return Ts(Ni(e))
                        }

                        function Zr(e, t, n) {
                            (n !== r && !zo(e[t], n) || n === r && !(t in e)) && nn(e, t, n)
                        }

                        function Xr(e, t, n) {
                            var i = e[t];
                            (!qe.call(e, t) || !zo(i, n) || n === r && !(t in e)) && nn(e, t, n)
                        }

                        function en(e, t) {
                            for (var r = e.length; r--;)
                                if (zo(e[r][0], t)) return r;
                            return -1
                        }

                        function tn(e, t, r, n) {
                            return hn(e, (function(e, i, s) {
                                t(n, e, r(e), s)
                            })), n
                        }

                        function rn(e, t) {
                            return e && xi(t, Ca(t), e)
                        }

                        function nn(e, t, r) {
                            "__proto__" == t && rt ? rt(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: r,
                                writable: !0
                            }) : e[t] = r
                        }

                        function sn(e, t) {
                            for (var n = -1, i = t.length, s = se(i), o = null == e; ++n < i;) s[n] = o ? r : Sa(e, t[n]);
                            return s
                        }

                        function on(e, t, n) {
                            return e === e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e
                        }

                        function an(e, t, n, i, s, o) {
                            var a, c = 1 & t,
                                u = 2 & t,
                                l = 4 & t;
                            if (n && (a = s ? n(e, i, s, o) : n(e)), a !== r) return a;
                            if (!Xo(e)) return e;
                            var h = Ho(e);
                            if (h) {
                                if (a = function(e) {
                                        var t = e.length,
                                            r = new e.constructor(t);
                                        return t && "string" == typeof e[0] && qe.call(e, "index") && (r.index = e.index, r.input = e.input), r
                                    }(e), !c) return Ni(e, a)
                            } else {
                                var p = fs(e),
                                    f = p == b || p == I;
                                if (Wo(e)) return Ii(e, c);
                                if (p == S || p == v || f && !s) {
                                    if (a = u || f ? {} : gs(e), !c) return u ? function(e, t) {
                                        return xi(e, ps(e), t)
                                    }(e, function(e, t) {
                                        return e && xi(t, Aa(t), e)
                                    }(a, e)) : function(e, t) {
                                        return xi(e, hs(e), t)
                                    }(e, rn(a, e))
                                } else {
                                    if (!at[p]) return s ? e : {};
                                    a = function(e, t, r) {
                                        var n = e.constructor;
                                        switch (t) {
                                            case j:
                                                return Ei(e);
                                            case m:
                                            case w:
                                                return new n(+e);
                                            case T:
                                                return function(e, t) {
                                                    var r = t ? Ei(e.buffer) : e.buffer;
                                                    return new e.constructor(r, e.byteOffset, e.byteLength)
                                                }(e, r);
                                            case D:
                                            case q:
                                            case L:
                                            case k:
                                            case $:
                                            case z:
                                            case M:
                                            case U:
                                            case K:
                                                return Pi(e, r);
                                            case E:
                                                return new n;
                                            case P:
                                            case x:
                                                return new n(e);
                                            case R:
                                                return function(e) {
                                                    var t = new e.constructor(e.source, fe.exec(e));
                                                    return t.lastIndex = e.lastIndex, t
                                                }(e);
                                            case N:
                                                return new n;
                                            case C:
                                                return function(e) {
                                                    return Lr ? Oe(Lr.call(e)) : {}
                                                }(e)
                                        }
                                    }(e, p, c)
                                }
                            }
                            o || (o = new Wr);
                            var d = o.get(e);
                            if (d) return d;
                            o.set(e, a), sa(e) ? e.forEach((function(r) {
                                a.add(an(r, t, n, r, e, o))
                            })) : ta(e) && e.forEach((function(r, i) {
                                a.set(i, an(r, t, n, i, e, o))
                            }));
                            var g = h ? r : (l ? u ? ns : rs : u ? Aa : Ca)(e);
                            return Rt(g || e, (function(r, i) {
                                g && (r = e[i = r]), Xr(a, i, an(r, t, n, i, e, o))
                            })), a
                        }

                        function cn(e, t, n) {
                            var i = n.length;
                            if (null == e) return !i;
                            for (e = Oe(e); i--;) {
                                var s = n[i],
                                    o = t[s],
                                    a = e[s];
                                if (a === r && !(s in e) || !o(a)) return !1
                            }
                            return !0
                        }

                        function un(e, t, i) {
                            if ("function" != typeof e) throw new xe(n);
                            return xs((function() {
                                e.apply(r, i)
                            }), t)
                        }

                        function ln(e, t, r, n) {
                            var i = -1,
                                s = At,
                                o = !0,
                                a = e.length,
                                c = [],
                                u = t.length;
                            if (!a) return c;
                            r && (t = Tt(t, Yt(r))), n ? (s = jt, o = !1) : t.length >= 200 && (s = Xt, o = !1, t = new Fr(t));
                            e: for (; ++i < a;) {
                                var l = e[i],
                                    h = null == r ? l : r(l);
                                if (l = n || 0 !== l ? l : 0, o && h === h) {
                                    for (var p = u; p--;)
                                        if (t[p] === h) continue e;
                                    c.push(l)
                                } else s(t, h, n) || c.push(l)
                            }
                            return c
                        }
                        $r.templateSettings = {
                            escape: Q,
                            evaluate: Y,
                            interpolate: Z,
                            variable: "",
                            imports: {
                                _: $r
                            }
                        }, $r.prototype = Mr.prototype, $r.prototype.constructor = $r, Ur.prototype = zr(Mr.prototype), Ur.prototype.constructor = Ur, Kr.prototype = zr(Mr.prototype), Kr.prototype.constructor = Kr, Hr.prototype.clear = function() {
                            this.__data__ = Rr ? Rr(null) : {}, this.size = 0
                        }, Hr.prototype.delete = function(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= t ? 1 : 0, t
                        }, Hr.prototype.get = function(e) {
                            var t = this.__data__;
                            if (Rr) {
                                var n = t[e];
                                return n === i ? r : n
                            }
                            return qe.call(t, e) ? t[e] : r
                        }, Hr.prototype.has = function(e) {
                            var t = this.__data__;
                            return Rr ? t[e] !== r : qe.call(t, e)
                        }, Hr.prototype.set = function(e, t) {
                            var n = this.__data__;
                            return this.size += this.has(e) ? 0 : 1, n[e] = Rr && t === r ? i : t, this
                        }, Vr.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, Vr.prototype.delete = function(e) {
                            var t = this.__data__,
                                r = en(t, e);
                            return !(r < 0) && (r == t.length - 1 ? t.pop() : Je.call(t, r, 1), --this.size, !0)
                        }, Vr.prototype.get = function(e) {
                            var t = this.__data__,
                                n = en(t, e);
                            return n < 0 ? r : t[n][1]
                        }, Vr.prototype.has = function(e) {
                            return en(this.__data__, e) > -1
                        }, Vr.prototype.set = function(e, t) {
                            var r = this.__data__,
                                n = en(r, e);
                            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                        }, Br.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new Hr,
                                map: new(Er || Vr),
                                string: new Hr
                            }
                        }, Br.prototype.delete = function(e) {
                            var t = cs(this, e).delete(e);
                            return this.size -= t ? 1 : 0, t
                        }, Br.prototype.get = function(e) {
                            return cs(this, e).get(e)
                        }, Br.prototype.has = function(e) {
                            return cs(this, e).has(e)
                        }, Br.prototype.set = function(e, t) {
                            var r = cs(this, e),
                                n = r.size;
                            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                        }, Fr.prototype.add = Fr.prototype.push = function(e) {
                            return this.__data__.set(e, i), this
                        }, Fr.prototype.has = function(e) {
                            return this.__data__.has(e)
                        }, Wr.prototype.clear = function() {
                            this.__data__ = new Vr, this.size = 0
                        }, Wr.prototype.delete = function(e) {
                            var t = this.__data__,
                                r = t.delete(e);
                            return this.size = t.size, r
                        }, Wr.prototype.get = function(e) {
                            return this.__data__.get(e)
                        }, Wr.prototype.has = function(e) {
                            return this.__data__.has(e)
                        }, Wr.prototype.set = function(e, t) {
                            var r = this.__data__;
                            if (r instanceof Vr) {
                                var n = r.__data__;
                                if (!Er || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                                r = this.__data__ = new Br(n)
                            }
                            return r.set(e, t), this.size = r.size, this
                        };
                        var hn = ji(wn),
                            pn = ji(_n, !0);

                        function fn(e, t) {
                            var r = !0;
                            return hn(e, (function(e, n, i) {
                                return r = !!t(e, n, i)
                            })), r
                        }

                        function dn(e, t, n) {
                            for (var i = -1, s = e.length; ++i < s;) {
                                var o = e[i],
                                    a = t(o);
                                if (null != a && (c === r ? a === a && !aa(a) : n(a, c))) var c = a,
                                    u = o
                            }
                            return u
                        }

                        function gn(e, t) {
                            var r = [];
                            return hn(e, (function(e, n, i) {
                                t(e, n, i) && r.push(e)
                            })), r
                        }

                        function vn(e, t, r, n, i) {
                            var s = -1,
                                o = e.length;
                            for (r || (r = vs), i || (i = []); ++s < o;) {
                                var a = e[s];
                                t > 0 && r(a) ? t > 1 ? vn(a, t - 1, r, n, i) : Dt(i, a) : n || (i[i.length] = a)
                            }
                            return i
                        }
                        var yn = Ti(),
                            mn = Ti(!0);

                        function wn(e, t) {
                            return e && yn(e, t, Ca)
                        }

                        function _n(e, t) {
                            return e && mn(e, t, Ca)
                        }

                        function bn(e, t) {
                            return Ct(t, (function(t) {
                                return Qo(e[t])
                            }))
                        }

                        function In(e, t) {
                            for (var n = 0, i = (t = mi(t, e)).length; null != e && n < i;) e = e[qs(t[n++])];
                            return n && n == i ? e : r
                        }

                        function En(e, t, r) {
                            var n = t(e);
                            return Ho(e) ? n : Dt(n, r(e))
                        }

                        function Pn(e) {
                            return null == e ? e === r ? "[object Undefined]" : "[object Null]" : et && et in Oe(e) ? function(e) {
                                var t = qe.call(e, et),
                                    n = e[et];
                                try {
                                    e[et] = r;
                                    var i = !0
                                } catch {}
                                var s = $e.call(e);
                                return i && (t ? e[et] = n : delete e[et]), s
                            }(e) : function(e) {
                                return $e.call(e)
                            }(e)
                        }

                        function Sn(e, t) {
                            return e > t
                        }

                        function On(e, t) {
                            return null != e && qe.call(e, t)
                        }

                        function Rn(e, t) {
                            return null != e && t in Oe(e)
                        }

                        function Nn(e, t, n) {
                            for (var i = n ? jt : At, s = e[0].length, o = e.length, a = o, c = se(o), u = 1 / 0, l = []; a--;) {
                                var h = e[a];
                                a && t && (h = Tt(h, Yt(t))), u = yr(h.length, u), c[a] = !n && (t || s >= 120 && h.length >= 120) ? new Fr(a && h) : r
                            }
                            h = e[0];
                            var p = -1,
                                f = c[0];
                            e: for (; ++p < s && l.length < u;) {
                                var d = h[p],
                                    g = t ? t(d) : d;
                                if (d = n || 0 !== d ? d : 0, !(f ? Xt(f, g) : i(l, g, n))) {
                                    for (a = o; --a;) {
                                        var v = c[a];
                                        if (!(v ? Xt(v, g) : i(e[a], g, n))) continue e
                                    }
                                    f && f.push(g), l.push(d)
                                }
                            }
                            return l
                        }

                        function xn(e, t, n) {
                            var i = null == (e = Os(e, t = mi(t, e))) ? e : e[qs(Gs(t))];
                            return null == i ? r : St(i, e, n)
                        }

                        function Cn(e) {
                            return ea(e) && Pn(e) == v
                        }

                        function An(e, t, n, i, s) {
                            return e === t || (null == e || null == t || !ea(e) && !ea(t) ? e !== e && t !== t : function(e, t, n, i, s, o) {
                                var a = Ho(e),
                                    c = Ho(t),
                                    u = a ? y : fs(e),
                                    l = c ? y : fs(t);
                                u = u == v ? S : u, l = l == v ? S : l;
                                var h = u == S,
                                    p = l == S,
                                    f = u == l;
                                if (f && Wo(e)) {
                                    if (!Wo(t)) return !1;
                                    a = !0, h = !1
                                }
                                if (f && !h) return o || (o = new Wr), a || ca(e) ? es(e, t, n, i, s, o) : function(e, t, r, n, i, s, o) {
                                    switch (r) {
                                        case T:
                                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                            e = e.buffer, t = t.buffer;
                                        case j:
                                            return !(e.byteLength != t.byteLength || !s(new Ve(e), new Ve(t)));
                                        case m:
                                        case w:
                                        case P:
                                            return zo(+e, +t);
                                        case _:
                                            return e.name == t.name && e.message == t.message;
                                        case R:
                                        case x:
                                            return e == t + "";
                                        case E:
                                            var a = or;
                                        case N:
                                            var c = 1 & n;
                                            if (a || (a = ur), e.size != t.size && !c) return !1;
                                            var u = o.get(e);
                                            if (u) return u == t;
                                            n |= 2, o.set(e, t);
                                            var l = es(a(e), a(t), n, i, s, o);
                                            return o.delete(e), l;
                                        case C:
                                            if (Lr) return Lr.call(e) == Lr.call(t)
                                    }
                                    return !1
                                }(e, t, u, n, i, s, o);
                                if (!(1 & n)) {
                                    var d = h && qe.call(e, "__wrapped__"),
                                        g = p && qe.call(t, "__wrapped__");
                                    if (d || g) {
                                        var b = d ? e.value() : e,
                                            I = g ? t.value() : t;
                                        return o || (o = new Wr), s(b, I, n, i, o)
                                    }
                                }
                                return !!f && (o || (o = new Wr), function(e, t, n, i, s, o) {
                                    var a = 1 & n,
                                        c = rs(e),
                                        u = c.length,
                                        l = rs(t),
                                        h = l.length;
                                    if (u != h && !a) return !1;
                                    for (var p = u; p--;) {
                                        var f = c[p];
                                        if (!(a ? f in t : qe.call(t, f))) return !1
                                    }
                                    var d = o.get(e),
                                        g = o.get(t);
                                    if (d && g) return d == t && g == e;
                                    var v = !0;
                                    o.set(e, t), o.set(t, e);
                                    for (var y = a; ++p < u;) {
                                        var m = e[f = c[p]],
                                            w = t[f];
                                        if (i) var _ = a ? i(w, m, f, t, e, o) : i(m, w, f, e, t, o);
                                        if (!(_ === r ? m === w || s(m, w, n, i, o) : _)) {
                                            v = !1;
                                            break
                                        }
                                        y || (y = "constructor" == f)
                                    }
                                    if (v && !y) {
                                        var b = e.constructor,
                                            I = t.constructor;
                                        b != I && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof I && I instanceof I) && (v = !1)
                                    }
                                    return o.delete(e), o.delete(t), v
                                }(e, t, n, i, s, o))
                            }(e, t, n, i, An, s))
                        }

                        function jn(e, t, n, i) {
                            var s = n.length,
                                o = s,
                                a = !i;
                            if (null == e) return !o;
                            for (e = Oe(e); s--;) {
                                var c = n[s];
                                if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                            }
                            for (; ++s < o;) {
                                var u = (c = n[s])[0],
                                    l = e[u],
                                    h = c[1];
                                if (a && c[2]) {
                                    if (l === r && !(u in e)) return !1
                                } else {
                                    var p = new Wr;
                                    if (i) var f = i(l, h, u, e, t, p);
                                    if (!(f === r ? An(h, l, 3, i, p) : f)) return !1
                                }
                            }
                            return !0
                        }

                        function Tn(e) {
                            return !(!Xo(e) || function(e) {
                                return !!ke && ke in e
                            }(e)) && (Qo(e) ? Ue : ve).test(Ls(e))
                        }

                        function Dn(e) {
                            return "function" == typeof e ? e : null == e ? rc : "object" == typeof e ? Ho(e) ? Mn(e[0], e[1]) : zn(e) : hc(e)
                        }

                        function qn(e) {
                            if (!Is(e)) return gr(e);
                            var t = [];
                            for (var r in Oe(e)) qe.call(e, r) && "constructor" != r && t.push(r);
                            return t
                        }

                        function Ln(e) {
                            if (!Xo(e)) return function(e) {
                                var t = [];
                                if (null != e)
                                    for (var r in Oe(e)) t.push(r);
                                return t
                            }(e);
                            var t = Is(e),
                                r = [];
                            for (var n in e) "constructor" == n && (t || !qe.call(e, n)) || r.push(n);
                            return r
                        }

                        function kn(e, t) {
                            return e < t
                        }

                        function $n(e, t) {
                            var r = -1,
                                n = Bo(e) ? se(e.length) : [];
                            return hn(e, (function(e, i, s) {
                                n[++r] = t(e, i, s)
                            })), n
                        }

                        function zn(e) {
                            var t = us(e);
                            return 1 == t.length && t[0][2] ? Ps(t[0][0], t[0][1]) : function(r) {
                                return r === e || jn(r, e, t)
                            }
                        }

                        function Mn(e, t) {
                            return ws(e) && Es(t) ? Ps(qs(e), t) : function(n) {
                                var i = Sa(n, e);
                                return i === r && i === t ? Oa(n, e) : An(t, i, 3)
                            }
                        }

                        function Un(e, t, n, i, s) {
                            e !== t && yn(t, (function(o, a) {
                                if (s || (s = new Wr), Xo(o)) ! function(e, t, n, i, s, o, a) {
                                    var c = Rs(e, n),
                                        u = Rs(t, n),
                                        l = a.get(u);
                                    if (l) return void Zr(e, n, l);
                                    var h = o ? o(c, u, n + "", e, t, a) : r,
                                        p = h === r;
                                    if (p) {
                                        var f = Ho(u),
                                            d = !f && Wo(u),
                                            g = !f && !d && ca(u);
                                        h = u, f || d || g ? Ho(c) ? h = c : Fo(c) ? h = Ni(c) : d ? (p = !1, h = Ii(u, !0)) : g ? (p = !1, h = Pi(u, !0)) : h = [] : na(u) || Ko(u) ? (h = c, Ko(c) ? h = va(c) : (!Xo(c) || Qo(c)) && (h = gs(u))) : p = !1
                                    }
                                    p && (a.set(u, h), s(h, u, i, o, a), a.delete(u)), Zr(e, n, h)
                                }(e, t, a, n, Un, i, s);
                                else {
                                    var c = i ? i(Rs(e, a), o, a + "", e, t, s) : r;
                                    c === r && (c = o), Zr(e, a, c)
                                }
                            }), Aa)
                        }

                        function Kn(e, t) {
                            var n = e.length;
                            if (n) return ys(t += t < 0 ? n : 0, n) ? e[t] : r
                        }

                        function Hn(e, t, r) {
                            t = t.length ? Tt(t, (function(e) {
                                return Ho(e) ? function(t) {
                                    return In(t, 1 === e.length ? e[0] : e)
                                } : e
                            })) : [rc];
                            var n = -1;
                            t = Tt(t, Yt(as()));
                            var i = $n(e, (function(e, r, i) {
                                var s = Tt(t, (function(t) {
                                    return t(e)
                                }));
                                return {
                                    criteria: s,
                                    index: ++n,
                                    value: e
                                }
                            }));
                            return function(e, t) {
                                var r = e.length;
                                for (e.sort(t); r--;) e[r] = e[r].value;
                                return e
                            }(i, (function(e, t) {
                                return function(e, t, r) {
                                    for (var n = -1, i = e.criteria, s = t.criteria, o = i.length, a = r.length; ++n < o;) {
                                        var c = Si(i[n], s[n]);
                                        if (c) return n >= a ? c : c * ("desc" == r[n] ? -1 : 1)
                                    }
                                    return e.index - t.index
                                }(e, t, r)
                            }))
                        }

                        function Vn(e, t, r) {
                            for (var n = -1, i = t.length, s = {}; ++n < i;) {
                                var o = t[n],
                                    a = In(e, o);
                                r(a, o) && Zn(s, mi(o, e), a)
                            }
                            return s
                        }

                        function Bn(e, t, r, n) {
                            var i = n ? Kt : Ut,
                                s = -1,
                                o = t.length,
                                a = e;
                            for (e === t && (t = Ni(t)), r && (a = Tt(e, Yt(r))); ++s < o;)
                                for (var c = 0, u = t[s], l = r ? r(u) : u;
                                    (c = i(a, l, c, n)) > -1;) a !== e && Je.call(a, c, 1), Je.call(e, c, 1);
                            return e
                        }

                        function Fn(e, t) {
                            for (var r = e ? t.length : 0, n = r - 1; r--;) {
                                var i = t[r];
                                if (r == n || i !== s) {
                                    var s = i;
                                    ys(i) ? Je.call(e, i, 1) : li(e, i)
                                }
                            }
                            return e
                        }

                        function Wn(e, t) {
                            return e + gt(_r() * (t - e + 1))
                        }

                        function Gn(e, t) {
                            var r = "";
                            if (!e || t < 1 || t > p) return r;
                            do {
                                t % 2 && (r += e), (t = gt(t / 2)) && (e += e)
                            } while (t);
                            return r
                        }

                        function Jn(e, t) {
                            return Cs(Ss(e, t, rc), e + "")
                        }

                        function Qn(e) {
                            return Jr(za(e))
                        }

                        function Yn(e, t) {
                            var r = za(e);
                            return Ts(r, on(t, 0, r.length))
                        }

                        function Zn(e, t, n, i) {
                            if (!Xo(e)) return e;
                            for (var s = -1, o = (t = mi(t, e)).length, a = o - 1, c = e; null != c && ++s < o;) {
                                var u = qs(t[s]),
                                    l = n;
                                if ("__proto__" === u || "constructor" === u || "prototype" === u) return e;
                                if (s != a) {
                                    var h = c[u];
                                    (l = i ? i(h, u, c) : r) === r && (l = Xo(h) ? h : ys(t[s + 1]) ? [] : {})
                                }
                                Xr(c, u, l), c = c[u]
                            }
                            return e
                        }
                        var Xn = Nr ? function(e, t) {
                                return Nr.set(e, t), e
                            } : rc,
                            ei = rt ? function(e, t) {
                                return rt(e, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: Xa(t),
                                    writable: !0
                                })
                            } : rc;

                        function ti(e) {
                            return Ts(za(e))
                        }

                        function ri(e, t, r) {
                            var n = -1,
                                i = e.length;
                            t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                            for (var s = se(i); ++n < i;) s[n] = e[n + t];
                            return s
                        }

                        function ni(e, t) {
                            var r;
                            return hn(e, (function(e, n, i) {
                                return !(r = t(e, n, i))
                            })), !!r
                        }

                        function ii(e, t, r) {
                            var n = 0,
                                i = null == e ? n : e.length;
                            if ("number" == typeof t && t === t && i <= 2147483647) {
                                for (; n < i;) {
                                    var s = n + i >>> 1,
                                        o = e[s];
                                    null !== o && !aa(o) && (r ? o <= t : o < t) ? n = s + 1 : i = s
                                }
                                return i
                            }
                            return si(e, t, rc, r)
                        }

                        function si(e, t, n, i) {
                            var s = 0,
                                o = null == e ? 0 : e.length;
                            if (0 === o) return 0;
                            for (var a = (t = n(t)) !== t, c = null === t, u = aa(t), l = t === r; s < o;) {
                                var h = gt((s + o) / 2),
                                    p = n(e[h]),
                                    f = p !== r,
                                    d = null === p,
                                    g = p === p,
                                    v = aa(p);
                                if (a) var y = i || g;
                                else y = l ? g && (i || f) : c ? g && f && (i || !d) : u ? g && f && !d && (i || !v) : !d && !v && (i ? p <= t : p < t);
                                y ? s = h + 1 : o = h
                            }
                            return yr(o, 4294967294)
                        }

                        function oi(e, t) {
                            for (var r = -1, n = e.length, i = 0, s = []; ++r < n;) {
                                var o = e[r],
                                    a = t ? t(o) : o;
                                if (!r || !zo(a, c)) {
                                    var c = a;
                                    s[i++] = 0 === o ? 0 : o
                                }
                            }
                            return s
                        }

                        function ai(e) {
                            return "number" == typeof e ? e : aa(e) ? f : +e
                        }

                        function ci(e) {
                            if ("string" == typeof e) return e;
                            if (Ho(e)) return Tt(e, ci) + "";
                            if (aa(e)) return kr ? kr.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -h ? "-0" : t
                        }

                        function ui(e, t, r) {
                            var n = -1,
                                i = At,
                                s = e.length,
                                o = !0,
                                a = [],
                                c = a;
                            if (r) o = !1, i = jt;
                            else if (s >= 200) {
                                var u = t ? null : Gi(e);
                                if (u) return ur(u);
                                o = !1, i = Xt, c = new Fr
                            } else c = t ? [] : a;
                            e: for (; ++n < s;) {
                                var l = e[n],
                                    h = t ? t(l) : l;
                                if (l = r || 0 !== l ? l : 0, o && h === h) {
                                    for (var p = c.length; p--;)
                                        if (c[p] === h) continue e;
                                    t && c.push(h), a.push(l)
                                } else i(c, h, r) || (c !== a && c.push(h), a.push(l))
                            }
                            return a
                        }

                        function li(e, t) {
                            return null == (e = Os(e, t = mi(t, e))) || delete e[qs(Gs(t))]
                        }

                        function hi(e, t, r, n) {
                            return Zn(e, t, r(In(e, t)), n)
                        }

                        function pi(e, t, r, n) {
                            for (var i = e.length, s = n ? i : -1;
                                (n ? s-- : ++s < i) && t(e[s], s, e););
                            return r ? ri(e, n ? 0 : s, n ? s + 1 : i) : ri(e, n ? s + 1 : 0, n ? i : s)
                        }

                        function fi(e, t) {
                            var r = e;
                            return r instanceof Kr && (r = r.value()), qt(t, (function(e, t) {
                                return t.func.apply(t.thisArg, Dt([e], t.args))
                            }), r)
                        }

                        function di(e, t, r) {
                            var n = e.length;
                            if (n < 2) return n ? ui(e[0]) : [];
                            for (var i = -1, s = se(n); ++i < n;)
                                for (var o = e[i], a = -1; ++a < n;) a != i && (s[i] = ln(s[i] || o, e[a], t, r));
                            return ui(vn(s, 1), t, r)
                        }

                        function gi(e, t, n) {
                            for (var i = -1, s = e.length, o = t.length, a = {}; ++i < s;) {
                                var c = i < o ? t[i] : r;
                                n(a, e[i], c)
                            }
                            return a
                        }

                        function vi(e) {
                            return Fo(e) ? e : []
                        }

                        function yi(e) {
                            return "function" == typeof e ? e : rc
                        }

                        function mi(e, t) {
                            return Ho(e) ? e : ws(e, t) ? [e] : Ds(ya(e))
                        }
                        var wi = Jn;

                        function _i(e, t, n) {
                            var i = e.length;
                            return n = n === r ? i : n, !t && n >= i ? e : ri(e, t, n)
                        }
                        var bi = ct || function(e) {
                            return ft.clearTimeout(e)
                        };

                        function Ii(e, t) {
                            if (t) return e.slice();
                            var r = e.length,
                                n = Be ? Be(r) : new e.constructor(r);
                            return e.copy(n), n
                        }

                        function Ei(e) {
                            var t = new e.constructor(e.byteLength);
                            return new Ve(t).set(new Ve(e)), t
                        }

                        function Pi(e, t) {
                            var r = t ? Ei(e.buffer) : e.buffer;
                            return new e.constructor(r, e.byteOffset, e.length)
                        }

                        function Si(e, t) {
                            if (e !== t) {
                                var n = e !== r,
                                    i = null === e,
                                    s = e === e,
                                    o = aa(e),
                                    a = t !== r,
                                    c = null === t,
                                    u = t === t,
                                    l = aa(t);
                                if (!c && !l && !o && e > t || o && a && u && !c && !l || i && a && u || !n && u || !s) return 1;
                                if (!i && !o && !l && e < t || l && n && s && !i && !o || c && n && s || !a && s || !u) return -1
                            }
                            return 0
                        }

                        function Oi(e, t, r, n) {
                            for (var i = -1, s = e.length, o = r.length, a = -1, c = t.length, u = vr(s - o, 0), l = se(c + u), h = !n; ++a < c;) l[a] = t[a];
                            for (; ++i < o;)(h || i < s) && (l[r[i]] = e[i]);
                            for (; u--;) l[a++] = e[i++];
                            return l
                        }

                        function Ri(e, t, r, n) {
                            for (var i = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, l = vr(s - a, 0), h = se(l + u), p = !n; ++i < l;) h[i] = e[i];
                            for (var f = i; ++c < u;) h[f + c] = t[c];
                            for (; ++o < a;)(p || i < s) && (h[f + r[o]] = e[i++]);
                            return h
                        }

                        function Ni(e, t) {
                            var r = -1,
                                n = e.length;
                            for (t || (t = se(n)); ++r < n;) t[r] = e[r];
                            return t
                        }

                        function xi(e, t, n, i) {
                            var s = !n;
                            n || (n = {});
                            for (var o = -1, a = t.length; ++o < a;) {
                                var c = t[o],
                                    u = i ? i(n[c], e[c], c, n, e) : r;
                                u === r && (u = e[c]), s ? nn(n, c, u) : Xr(n, c, u)
                            }
                            return n
                        }

                        function Ci(e, t) {
                            return function(r, n) {
                                var i = Ho(r) ? Ot : tn,
                                    s = t ? t() : {};
                                return i(r, e, as(n, 2), s)
                            }
                        }

                        function Ai(e) {
                            return Jn((function(t, n) {
                                var i = -1,
                                    s = n.length,
                                    o = s > 1 ? n[s - 1] : r,
                                    a = s > 2 ? n[2] : r;
                                for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && ms(n[0], n[1], a) && (o = s < 3 ? r : o, s = 1), t = Oe(t); ++i < s;) {
                                    var c = n[i];
                                    c && e(t, c, i, o)
                                }
                                return t
                            }))
                        }

                        function ji(e, t) {
                            return function(r, n) {
                                if (null == r) return r;
                                if (!Bo(r)) return e(r, n);
                                for (var i = r.length, s = t ? i : -1, o = Oe(r);
                                    (t ? s-- : ++s < i) && !1 !== n(o[s], s, o););
                                return r
                            }
                        }

                        function Ti(e) {
                            return function(t, r, n) {
                                for (var i = -1, s = Oe(t), o = n(t), a = o.length; a--;) {
                                    var c = o[e ? a : ++i];
                                    if (!1 === r(s[c], c, s)) break
                                }
                                return t
                            }
                        }

                        function Di(e) {
                            return function(t) {
                                var n = sr(t = ya(t)) ? hr(t) : r,
                                    i = n ? n[0] : t.charAt(0),
                                    s = n ? _i(n, 1).join("") : t.slice(1);
                                return i[e]() + s
                            }
                        }

                        function qi(e) {
                            return function(t) {
                                return qt(Qa(Ka(t).replace(Ze, "")), e, "")
                            }
                        }

                        function Li(e) {
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t[0]);
                                    case 2:
                                        return new e(t[0], t[1]);
                                    case 3:
                                        return new e(t[0], t[1], t[2]);
                                    case 4:
                                        return new e(t[0], t[1], t[2], t[3]);
                                    case 5:
                                        return new e(t[0], t[1], t[2], t[3], t[4]);
                                    case 6:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                    case 7:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                }
                                var r = zr(e.prototype),
                                    n = e.apply(r, t);
                                return Xo(n) ? n : r
                            }
                        }

                        function ki(e) {
                            return function(t, n, i) {
                                var s = Oe(t);
                                if (!Bo(t)) {
                                    var o = as(n, 3);
                                    t = Ca(t), n = function(e) {
                                        return o(s[e], e, s)
                                    }
                                }
                                var a = e(t, n, i);
                                return a > -1 ? s[o ? t[a] : a] : r
                            }
                        }

                        function $i(e) {
                            return ts((function(t) {
                                var i = t.length,
                                    s = i,
                                    o = Ur.prototype.thru;
                                for (e && t.reverse(); s--;) {
                                    var a = t[s];
                                    if ("function" != typeof a) throw new xe(n);
                                    if (o && !c && "wrapper" == ss(a)) var c = new Ur([], !0)
                                }
                                for (s = c ? s : i; ++s < i;) {
                                    var u = ss(a = t[s]),
                                        l = "wrapper" == u ? is(a) : r;
                                    c = l && _s(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[ss(l[0])].apply(c, l[3]) : 1 == a.length && _s(a) ? c[u]() : c.thru(a)
                                }
                                return function() {
                                    var e = arguments,
                                        r = e[0];
                                    if (c && 1 == e.length && Ho(r)) return c.plant(r).value();
                                    for (var n = 0, s = i ? t[n].apply(this, e) : r; ++n < i;) s = t[n].call(this, s);
                                    return s
                                }
                            }))
                        }

                        function zi(e, t, n, i, s, o, a, c, l, h) {
                            var p = t & u,
                                f = 1 & t,
                                d = 2 & t,
                                g = 24 & t,
                                v = 512 & t,
                                y = d ? r : Li(e);
                            return function u() {
                                for (var m = arguments.length, w = se(m), _ = m; _--;) w[_] = arguments[_];
                                if (g) var b = os(u),
                                    I = function(e, t) {
                                        for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                                        return n
                                    }(w, b);
                                if (i && (w = Oi(w, i, s, g)), o && (w = Ri(w, o, a, g)), m -= I, g && m < h) {
                                    var E = cr(w, b);
                                    return Fi(e, t, zi, u.placeholder, n, w, E, c, l, h - m)
                                }
                                var P = f ? n : this,
                                    S = d ? P[e] : e;
                                return m = w.length, c ? w = function(e, t) {
                                    for (var n = e.length, i = yr(t.length, n), s = Ni(e); i--;) {
                                        var o = t[i];
                                        e[i] = ys(o, n) ? s[o] : r
                                    }
                                    return e
                                }(w, c) : v && m > 1 && w.reverse(), p && l < m && (w.length = l), this && this !== ft && this instanceof u && (S = y || Li(S)), S.apply(P, w)
                            }
                        }

                        function Mi(e, t) {
                            return function(r, n) {
                                return function(e, t, r, n) {
                                    return wn(e, (function(e, i, s) {
                                        t(n, r(e), i, s)
                                    })), n
                                }(r, e, t(n), {})
                            }
                        }

                        function Ui(e, t) {
                            return function(n, i) {
                                var s;
                                if (n === r && i === r) return t;
                                if (n !== r && (s = n), i !== r) {
                                    if (s === r) return i;
                                    "string" == typeof n || "string" == typeof i ? (n = ci(n), i = ci(i)) : (n = ai(n), i = ai(i)), s = e(n, i)
                                }
                                return s
                            }
                        }

                        function Ki(e) {
                            return ts((function(t) {
                                return t = Tt(t, Yt(as())), Jn((function(r) {
                                    var n = this;
                                    return e(t, (function(e) {
                                        return St(e, n, r)
                                    }))
                                }))
                            }))
                        }

                        function Hi(e, t) {
                            var n = (t = t === r ? " " : ci(t)).length;
                            if (n < 2) return n ? Gn(t, e) : t;
                            var i = Gn(t, dt(e / lr(t)));
                            return sr(t) ? _i(hr(i), 0, e).join("") : i.slice(0, e)
                        }

                        function Vi(e) {
                            return function(t, n, i) {
                                return i && "number" != typeof i && ms(t, n, i) && (n = i = r), t = pa(t), n === r ? (n = t, t = 0) : n = pa(n),
                                    function(e, t, r, n) {
                                        for (var i = -1, s = vr(dt((t - e) / (r || 1)), 0), o = se(s); s--;) o[n ? s : ++i] = e, e += r;
                                        return o
                                    }(t, n, i = i === r ? t < n ? 1 : -1 : pa(i), e)
                            }
                        }

                        function Bi(e) {
                            return function(t, r) {
                                return "string" == typeof t && "string" == typeof r || (t = ga(t), r = ga(r)), e(t, r)
                            }
                        }

                        function Fi(e, t, n, i, s, o, u, l, h, p) {
                            var f = 8 & t;
                            t |= f ? a : c, 4 & (t &= ~(f ? c : a)) || (t &= -4);
                            var d = [e, t, s, f ? o : r, f ? u : r, f ? r : o, f ? r : u, l, h, p],
                                g = n.apply(r, d);
                            return _s(e) && Ns(g, d), g.placeholder = i, As(g, e, t)
                        }

                        function Wi(e) {
                            var t = Se[e];
                            return function(e, r) {
                                if (e = ga(e), (r = null == r ? 0 : yr(fa(r), 292)) && $t(e)) {
                                    var n = (ya(e) + "e").split("e");
                                    return +((n = (ya(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                                }
                                return t(e)
                            }
                        }
                        var Gi = Sr && 1 / ur(new Sr([, -0]))[1] == h ? function(e) {
                            return new Sr(e)
                        } : ac;

                        function Ji(e) {
                            return function(t) {
                                var r = fs(t);
                                return r == E ? or(t) : r == N ? function(e) {
                                    var t = -1,
                                        r = Array(e.size);
                                    return e.forEach((function(e) {
                                        r[++t] = [e, e]
                                    })), r
                                }(t) : function(e, t) {
                                    return Tt(t, (function(t) {
                                        return [t, e[t]]
                                    }))
                                }(t, e(t))
                            }
                        }

                        function Qi(e, t, i, h, p, f, d, g) {
                            var v = 2 & t;
                            if (!v && "function" != typeof e) throw new xe(n);
                            var y = h ? h.length : 0;
                            if (y || (t &= -97, h = p = r), d = d === r ? d : vr(fa(d), 0), g = g === r ? g : fa(g), y -= p ? p.length : 0, t & c) {
                                var m = h,
                                    w = p;
                                h = p = r
                            }
                            var _ = v ? r : is(e),
                                b = [e, t, i, h, p, m, w, f, d, g];
                            if (_ && function(e, t) {
                                    var r = e[1],
                                        n = t[1],
                                        i = r | n,
                                        o = i < 131,
                                        a = n == u && 8 == r || n == u && r == l && e[7].length <= t[8] || 384 == n && t[7].length <= t[8] && 8 == r;
                                    if (!o && !a) return e;
                                    1 & n && (e[2] = t[2], i |= 1 & r ? 0 : 4);
                                    var c = t[3];
                                    if (c) {
                                        var h = e[3];
                                        e[3] = h ? Oi(h, c, t[4]) : c, e[4] = h ? cr(e[3], s) : t[4]
                                    }
                                    c = t[5], c && (h = e[5], e[5] = h ? Ri(h, c, t[6]) : c, e[6] = h ? cr(e[5], s) : t[6]), c = t[7], c && (e[7] = c), n & u && (e[8] = null == e[8] ? t[8] : yr(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
                                }(b, _), e = b[0], t = b[1], i = b[2], h = b[3], p = b[4], !(g = b[9] = b[9] === r ? v ? 0 : e.length : vr(b[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) I = 8 == t || t == o ? function(e, t, n) {
                                var i = Li(e);
                                return function s() {
                                    for (var o = arguments.length, a = se(o), c = o, u = os(s); c--;) a[c] = arguments[c];
                                    var l = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : cr(a, u);
                                    return (o -= l.length) < n ? Fi(e, t, zi, s.placeholder, r, a, l, r, r, n - o) : St(this && this !== ft && this instanceof s ? i : e, this, a)
                                }
                            }(e, t, g) : t != a && 33 != t || p.length ? zi.apply(r, b) : function(e, t, r, n) {
                                var i = 1 & t,
                                    s = Li(e);
                                return function t() {
                                    for (var o = -1, a = arguments.length, c = -1, u = n.length, l = se(u + a), h = this && this !== ft && this instanceof t ? s : e; ++c < u;) l[c] = n[c];
                                    for (; a--;) l[c++] = arguments[++o];
                                    return St(h, i ? r : this, l)
                                }
                            }(e, t, i, h);
                            else var I = function(e, t, r) {
                                var n = 1 & t,
                                    i = Li(e);
                                return function t() {
                                    return (this && this !== ft && this instanceof t ? i : e).apply(n ? r : this, arguments)
                                }
                            }(e, t, i);
                            return As((_ ? Xn : Ns)(I, b), e, t)
                        }

                        function Yi(e, t, n, i) {
                            return e === r || zo(e, je[n]) && !qe.call(i, n) ? t : e
                        }

                        function Zi(e, t, n, i, s, o) {
                            return Xo(e) && Xo(t) && (o.set(t, e), Un(e, t, r, Zi, o), o.delete(t)), e
                        }

                        function Xi(e) {
                            return na(e) ? r : e
                        }

                        function es(e, t, n, i, s, o) {
                            var a = 1 & n,
                                c = e.length,
                                u = t.length;
                            if (c != u && !(a && u > c)) return !1;
                            var l = o.get(e),
                                h = o.get(t);
                            if (l && h) return l == t && h == e;
                            var p = -1,
                                f = !0,
                                d = 2 & n ? new Fr : r;
                            for (o.set(e, t), o.set(t, e); ++p < c;) {
                                var g = e[p],
                                    v = t[p];
                                if (i) var y = a ? i(v, g, p, t, e, o) : i(g, v, p, e, t, o);
                                if (y !== r) {
                                    if (y) continue;
                                    f = !1;
                                    break
                                }
                                if (d) {
                                    if (!kt(t, (function(e, t) {
                                            if (!Xt(d, t) && (g === e || s(g, e, n, i, o))) return d.push(t)
                                        }))) {
                                        f = !1;
                                        break
                                    }
                                } else if (g !== v && !s(g, v, n, i, o)) {
                                    f = !1;
                                    break
                                }
                            }
                            return o.delete(e), o.delete(t), f
                        }

                        function ts(e) {
                            return Cs(Ss(e, r, Hs), e + "")
                        }

                        function rs(e) {
                            return En(e, Ca, hs)
                        }

                        function ns(e) {
                            return En(e, Aa, ps)
                        }
                        var is = Nr ? function(e) {
                            return Nr.get(e)
                        } : ac;

                        function ss(e) {
                            for (var t = e.name + "", r = xr[t], n = qe.call(xr, t) ? r.length : 0; n--;) {
                                var i = r[n],
                                    s = i.func;
                                if (null == s || s == e) return i.name
                            }
                            return t
                        }

                        function os(e) {
                            return (qe.call($r, "placeholder") ? $r : e).placeholder
                        }

                        function as() {
                            var e = $r.iteratee || nc;
                            return e = e === nc ? Dn : e, arguments.length ? e(arguments[0], arguments[1]) : e
                        }

                        function cs(e, t) {
                            var r = e.__data__;
                            return function(e) {
                                var t = typeof e;
                                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                            }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                        }

                        function us(e) {
                            for (var t = Ca(e), r = t.length; r--;) {
                                var n = t[r],
                                    i = e[n];
                                t[r] = [n, i, Es(i)]
                            }
                            return t
                        }

                        function ls(e, t) {
                            var n = function(e, t) {
                                return null == e ? r : e[t]
                            }(e, t);
                            return Tn(n) ? n : r
                        }
                        var hs = yt ? function(e) {
                                return null == e ? [] : (e = Oe(e), Ct(yt(e), (function(t) {
                                    return Ge.call(e, t)
                                })))
                            } : dc,
                            ps = yt ? function(e) {
                                for (var t = []; e;) Dt(t, hs(e)), e = Fe(e);
                                return t
                            } : dc,
                            fs = Pn;

                        function ds(e, t, r) {
                            for (var n = -1, i = (t = mi(t, e)).length, s = !1; ++n < i;) {
                                var o = qs(t[n]);
                                if (!(s = null != e && r(e, o))) break;
                                e = e[o]
                            }
                            return s || ++n != i ? s : !!(i = null == e ? 0 : e.length) && Zo(i) && ys(o, i) && (Ho(e) || Ko(e))
                        }

                        function gs(e) {
                            return "function" != typeof e.constructor || Is(e) ? {} : zr(Fe(e))
                        }

                        function vs(e) {
                            return Ho(e) || Ko(e) || !!(Qe && e && e[Qe])
                        }

                        function ys(e, t) {
                            var r, n = typeof e;
                            return !!(t = null !== (r = t) && void 0 !== r ? r : p) && ("number" == n || "symbol" != n && me.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function ms(e, t, r) {
                            if (!Xo(r)) return !1;
                            var n = typeof t;
                            return !!("number" == n ? Bo(r) && ys(t, r.length) : "string" == n && t in r) && zo(r[t], e)
                        }

                        function ws(e, t) {
                            if (Ho(e)) return !1;
                            var r = typeof e;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != e && !aa(e)) || (ee.test(e) || !X.test(e) || null != t && e in Oe(t))
                        }

                        function _s(e) {
                            var t = ss(e),
                                r = $r[t];
                            if ("function" != typeof r || !(t in Kr.prototype)) return !1;
                            if (e === r) return !0;
                            var n = is(r);
                            return !!n && e === n[0]
                        }(Ir && fs(new Ir(new ArrayBuffer(1))) != T || Er && fs(new Er) != E || Pr && fs(Pr.resolve()) != O || Sr && fs(new Sr) != N || Or && fs(new Or) != A) && (fs = function(e) {
                            var t = Pn(e),
                                n = t == S ? e.constructor : r,
                                i = n ? Ls(n) : "";
                            if (i) switch (i) {
                                case Cr:
                                    return T;
                                case Ar:
                                    return E;
                                case jr:
                                    return O;
                                case Tr:
                                    return N;
                                case Dr:
                                    return A
                            }
                            return t
                        });
                        var bs = Te ? Qo : gc;

                        function Is(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || je)
                        }

                        function Es(e) {
                            return e === e && !Xo(e)
                        }

                        function Ps(e, t) {
                            return function(n) {
                                return null != n && (n[e] === t && (t !== r || e in Oe(n)))
                            }
                        }

                        function Ss(e, t, n) {
                            return t = vr(t === r ? e.length - 1 : t, 0),
                                function() {
                                    for (var r = arguments, i = -1, s = vr(r.length - t, 0), o = se(s); ++i < s;) o[i] = r[t + i];
                                    i = -1;
                                    for (var a = se(t + 1); ++i < t;) a[i] = r[i];
                                    return a[t] = n(o), St(e, this, a)
                                }
                        }

                        function Os(e, t) {
                            return t.length < 2 ? e : In(e, ri(t, 0, -1))
                        }

                        function Rs(e, t) {
                            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                        }
                        var Ns = js(Xn),
                            xs = pt || function(e, t) {
                                return ft.setTimeout(e, t)
                            },
                            Cs = js(ei);

                        function As(e, t, r) {
                            var n = t + "";
                            return Cs(e, function(e, t) {
                                var r = t.length;
                                if (!r) return e;
                                var n = r - 1;
                                return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(oe, "{\n/* [wrapped with " + t + "] */\n")
                            }(n, function(e, t) {
                                return Rt(g, (function(r) {
                                    var n = "_." + r[0];
                                    t & r[1] && !At(e, n) && e.push(n)
                                })), e.sort()
                            }(function(e) {
                                var t = e.match(ae);
                                return t ? t[1].split(ce) : []
                            }(n), r)))
                        }

                        function js(e) {
                            var t = 0,
                                n = 0;
                            return function() {
                                var i = mr(),
                                    s = 16 - (i - n);
                                if (n = i, s > 0) {
                                    if (++t >= 800) return arguments[0]
                                } else t = 0;
                                return e.apply(r, arguments)
                            }
                        }

                        function Ts(e, t) {
                            var n = -1,
                                i = e.length,
                                s = i - 1;
                            for (t = t === r ? i : t; ++n < t;) {
                                var o = Wn(n, s),
                                    a = e[o];
                                e[o] = e[n], e[n] = a
                            }
                            return e.length = t, e
                        }
                        var Ds = function(e) {
                            var t = To(e, (function(e) {
                                    return 500 === r.size && r.clear(), e
                                })),
                                r = t.cache;
                            return t
                        }((function(e) {
                            var t = [];
                            return 46 === e.charCodeAt(0) && t.push(""), e.replace(te, (function(e, r, n, i) {
                                t.push(n ? i.replace(he, "$1") : r || e)
                            })), t
                        }));

                        function qs(e) {
                            if ("string" == typeof e || aa(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -h ? "-0" : t
                        }

                        function Ls(e) {
                            if (null != e) {
                                try {
                                    return De.call(e)
                                } catch {}
                                try {
                                    return e + ""
                                } catch {}
                            }
                            return ""
                        }

                        function ks(e) {
                            if (e instanceof Kr) return e.clone();
                            var t = new Ur(e.__wrapped__, e.__chain__);
                            return t.__actions__ = Ni(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                        }
                        var $s = Jn((function(e, t) {
                                return Fo(e) ? ln(e, vn(t, 1, Fo, !0)) : []
                            })),
                            zs = Jn((function(e, t) {
                                var n = Gs(t);
                                return Fo(n) && (n = r), Fo(e) ? ln(e, vn(t, 1, Fo, !0), as(n, 2)) : []
                            })),
                            Ms = Jn((function(e, t) {
                                var n = Gs(t);
                                return Fo(n) && (n = r), Fo(e) ? ln(e, vn(t, 1, Fo, !0), r, n) : []
                            }));

                        function Us(e, t, r) {
                            var n = null == e ? 0 : e.length;
                            if (!n) return -1;
                            var i = null == r ? 0 : fa(r);
                            return i < 0 && (i = vr(n + i, 0)), Mt(e, as(t, 3), i)
                        }

                        function Ks(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var s = i - 1;
                            return n !== r && (s = fa(n), s = n < 0 ? vr(i + s, 0) : yr(s, i - 1)), Mt(e, as(t, 3), s, !0)
                        }

                        function Hs(e) {
                            return (null == e ? 0 : e.length) ? vn(e, 1) : []
                        }

                        function Vs(e) {
                            return e && e.length ? e[0] : r
                        }
                        var Bs = Jn((function(e) {
                                var t = Tt(e, vi);
                                return t.length && t[0] === e[0] ? Nn(t) : []
                            })),
                            Fs = Jn((function(e) {
                                var t = Gs(e),
                                    n = Tt(e, vi);
                                return t === Gs(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? Nn(n, as(t, 2)) : []
                            })),
                            Ws = Jn((function(e) {
                                var t = Gs(e),
                                    n = Tt(e, vi);
                                return (t = "function" == typeof t ? t : r) && n.pop(), n.length && n[0] === e[0] ? Nn(n, r, t) : []
                            }));

                        function Gs(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? e[t - 1] : r
                        }
                        var Js = Jn(Qs);

                        function Qs(e, t) {
                            return e && e.length && t && t.length ? Bn(e, t) : e
                        }
                        var Ys = ts((function(e, t) {
                            var r = null == e ? 0 : e.length,
                                n = sn(e, t);
                            return Fn(e, Tt(t, (function(e) {
                                return ys(e, r) ? +e : e
                            })).sort(Si)), n
                        }));

                        function Zs(e) {
                            return null == e ? e : br.call(e)
                        }
                        var Xs = Jn((function(e) {
                                return ui(vn(e, 1, Fo, !0))
                            })),
                            eo = Jn((function(e) {
                                var t = Gs(e);
                                return Fo(t) && (t = r), ui(vn(e, 1, Fo, !0), as(t, 2))
                            })),
                            to = Jn((function(e) {
                                var t = Gs(e);
                                return t = "function" == typeof t ? t : r, ui(vn(e, 1, Fo, !0), r, t)
                            }));

                        function ro(e) {
                            if (!e || !e.length) return [];
                            var t = 0;
                            return e = Ct(e, (function(e) {
                                if (Fo(e)) return t = vr(e.length, t), !0
                            })), Jt(t, (function(t) {
                                return Tt(e, Bt(t))
                            }))
                        }

                        function no(e, t) {
                            if (!e || !e.length) return [];
                            var n = ro(e);
                            return null == t ? n : Tt(n, (function(e) {
                                return St(t, r, e)
                            }))
                        }
                        var io = Jn((function(e, t) {
                                return Fo(e) ? ln(e, t) : []
                            })),
                            so = Jn((function(e) {
                                return di(Ct(e, Fo))
                            })),
                            oo = Jn((function(e) {
                                var t = Gs(e);
                                return Fo(t) && (t = r), di(Ct(e, Fo), as(t, 2))
                            })),
                            ao = Jn((function(e) {
                                var t = Gs(e);
                                return t = "function" == typeof t ? t : r, di(Ct(e, Fo), r, t)
                            })),
                            co = Jn(ro);
                        var uo = Jn((function(e) {
                            var t = e.length,
                                n = t > 1 ? e[t - 1] : r;
                            return n = "function" == typeof n ? (e.pop(), n) : r, no(e, n)
                        }));

                        function lo(e) {
                            var t = $r(e);
                            return t.__chain__ = !0, t
                        }

                        function ho(e, t) {
                            return t(e)
                        }
                        var po = ts((function(e) {
                            var t = e.length,
                                n = t ? e[0] : 0,
                                i = this.__wrapped__,
                                s = function(t) {
                                    return sn(t, e)
                                };
                            return !(t > 1 || this.__actions__.length) && i instanceof Kr && ys(n) ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                                func: ho,
                                args: [s],
                                thisArg: r
                            }), new Ur(i, this.__chain__).thru((function(e) {
                                return t && !e.length && e.push(r), e
                            }))) : this.thru(s)
                        }));
                        var fo = Ci((function(e, t, r) {
                            qe.call(e, r) ? ++e[r] : nn(e, r, 1)
                        }));
                        var go = ki(Us),
                            vo = ki(Ks);

                        function yo(e, t) {
                            return (Ho(e) ? Rt : hn)(e, as(t, 3))
                        }

                        function mo(e, t) {
                            return (Ho(e) ? Nt : pn)(e, as(t, 3))
                        }
                        var wo = Ci((function(e, t, r) {
                            qe.call(e, r) ? e[r].push(t) : nn(e, r, [t])
                        }));
                        var _o = Jn((function(e, t, r) {
                                var n = -1,
                                    i = "function" == typeof t,
                                    s = Bo(e) ? se(e.length) : [];
                                return hn(e, (function(e) {
                                    s[++n] = i ? St(t, e, r) : xn(e, t, r)
                                })), s
                            })),
                            bo = Ci((function(e, t, r) {
                                nn(e, r, t)
                            }));

                        function Io(e, t) {
                            return (Ho(e) ? Tt : $n)(e, as(t, 3))
                        }
                        var Eo = Ci((function(e, t, r) {
                            e[r ? 0 : 1].push(t)
                        }), (function() {
                            return [
                                [],
                                []
                            ]
                        }));
                        var Po = Jn((function(e, t) {
                                if (null == e) return [];
                                var r = t.length;
                                return r > 1 && ms(e, t[0], t[1]) ? t = [] : r > 2 && ms(t[0], t[1], t[2]) && (t = [t[0]]), Hn(e, vn(t, 1), [])
                            })),
                            So = ht || function() {
                                return ft.Date.now()
                            };

                        function Oo(e, t, n) {
                            return t = n ? r : t, t = e && null == t ? e.length : t, Qi(e, u, r, r, r, r, t)
                        }

                        function Ro(e, t) {
                            var i;
                            if ("function" != typeof t) throw new xe(n);
                            return e = fa(e),
                                function() {
                                    return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i
                                }
                        }
                        var No = Jn((function(e, t, r) {
                                var n = 1;
                                if (r.length) {
                                    var i = cr(r, os(No));
                                    n |= a
                                }
                                return Qi(e, n, t, r, i)
                            })),
                            xo = Jn((function(e, t, r) {
                                var n = 3;
                                if (r.length) {
                                    var i = cr(r, os(xo));
                                    n |= a
                                }
                                return Qi(t, n, e, r, i)
                            }));

                        function Co(e, t, i) {
                            var s, o, a, c, u, l, h = 0,
                                p = !1,
                                f = !1,
                                d = !0;
                            if ("function" != typeof e) throw new xe(n);

                            function g(t) {
                                var n = s,
                                    i = o;
                                return s = o = r, h = t, c = e.apply(i, n)
                            }

                            function v(e) {
                                var n = e - l;
                                return l === r || n >= t || n < 0 || f && e - h >= a
                            }

                            function y() {
                                var e = So();
                                if (v(e)) return m(e);
                                u = xs(y, function(e) {
                                    var r = t - (e - l);
                                    return f ? yr(r, a - (e - h)) : r
                                }(e))
                            }

                            function m(e) {
                                return u = r, d && s ? g(e) : (s = o = r, c)
                            }

                            function w() {
                                var e = So(),
                                    n = v(e);
                                if (s = arguments, o = this, l = e, n) {
                                    if (u === r) return function(e) {
                                        return h = e, u = xs(y, t), p ? g(e) : c
                                    }(l);
                                    if (f) return bi(u), u = xs(y, t), g(l)
                                }
                                return u === r && (u = xs(y, t)), c
                            }
                            return t = ga(t) || 0, Xo(i) && (p = !!i.leading, a = (f = "maxWait" in i) ? vr(ga(i.maxWait) || 0, t) : a, d = "trailing" in i ? !!i.trailing : d), w.cancel = function() {
                                u !== r && bi(u), h = 0, s = l = o = u = r
                            }, w.flush = function() {
                                return u === r ? c : m(So())
                            }, w
                        }
                        var Ao = Jn((function(e, t) {
                                return un(e, 1, t)
                            })),
                            jo = Jn((function(e, t, r) {
                                return un(e, ga(t) || 0, r)
                            }));

                        function To(e, t) {
                            if ("function" != typeof e || null != t && "function" != typeof t) throw new xe(n);
                            var r = function() {
                                var n = arguments,
                                    i = t ? t.apply(this, n) : n[0],
                                    s = r.cache;
                                if (s.has(i)) return s.get(i);
                                var o = e.apply(this, n);
                                return r.cache = s.set(i, o) || s, o
                            };
                            return r.cache = new(To.Cache || Br), r
                        }

                        function Do(e) {
                            if ("function" != typeof e) throw new xe(n);
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return !e.call(this);
                                    case 1:
                                        return !e.call(this, t[0]);
                                    case 2:
                                        return !e.call(this, t[0], t[1]);
                                    case 3:
                                        return !e.call(this, t[0], t[1], t[2])
                                }
                                return !e.apply(this, t)
                            }
                        }
                        To.Cache = Br;
                        var qo = wi((function(e, t) {
                                var r = (t = 1 == t.length && Ho(t[0]) ? Tt(t[0], Yt(as())) : Tt(vn(t, 1), Yt(as()))).length;
                                return Jn((function(n) {
                                    for (var i = -1, s = yr(n.length, r); ++i < s;) n[i] = t[i].call(this, n[i]);
                                    return St(e, this, n)
                                }))
                            })),
                            Lo = Jn((function(e, t) {
                                var n = cr(t, os(Lo));
                                return Qi(e, a, r, t, n)
                            })),
                            ko = Jn((function(e, t) {
                                var n = cr(t, os(ko));
                                return Qi(e, c, r, t, n)
                            })),
                            $o = ts((function(e, t) {
                                return Qi(e, l, r, r, r, t)
                            }));

                        function zo(e, t) {
                            return e === t || e !== e && t !== t
                        }
                        var Mo = Bi(Sn),
                            Uo = Bi((function(e, t) {
                                return e >= t
                            })),
                            Ko = Cn(function() {
                                return arguments
                            }()) ? Cn : function(e) {
                                return ea(e) && qe.call(e, "callee") && !Ge.call(e, "callee")
                            },
                            Ho = se.isArray,
                            Vo = wt ? Yt(wt) : function(e) {
                                return ea(e) && Pn(e) == j
                            };

                        function Bo(e) {
                            return null != e && Zo(e.length) && !Qo(e)
                        }

                        function Fo(e) {
                            return ea(e) && Bo(e)
                        }
                        var Wo = mt || gc,
                            Go = _t ? Yt(_t) : function(e) {
                                return ea(e) && Pn(e) == w
                            };

                        function Jo(e) {
                            if (!ea(e)) return !1;
                            var t = Pn(e);
                            return t == _ || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !na(e)
                        }

                        function Qo(e) {
                            if (!Xo(e)) return !1;
                            var t = Pn(e);
                            return t == b || t == I || "[object AsyncFunction]" == t || "[object Proxy]" == t
                        }

                        function Yo(e) {
                            return "number" == typeof e && e == fa(e)
                        }

                        function Zo(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= p
                        }

                        function Xo(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        }

                        function ea(e) {
                            return null != e && "object" == typeof e
                        }
                        var ta = bt ? Yt(bt) : function(e) {
                            return ea(e) && fs(e) == E
                        };

                        function ra(e) {
                            return "number" == typeof e || ea(e) && Pn(e) == P
                        }

                        function na(e) {
                            if (!ea(e) || Pn(e) != S) return !1;
                            var t = Fe(e);
                            if (null === t) return !0;
                            var r = qe.call(t, "constructor") && t.constructor;
                            return "function" == typeof r && r instanceof r && De.call(r) == ze
                        }
                        var ia = It ? Yt(It) : function(e) {
                            return ea(e) && Pn(e) == R
                        };
                        var sa = Et ? Yt(Et) : function(e) {
                            return ea(e) && fs(e) == N
                        };

                        function oa(e) {
                            return "string" == typeof e || !Ho(e) && ea(e) && Pn(e) == x
                        }

                        function aa(e) {
                            return "symbol" == typeof e || ea(e) && Pn(e) == C
                        }
                        var ca = Pt ? Yt(Pt) : function(e) {
                            return ea(e) && Zo(e.length) && !!ot[Pn(e)]
                        };
                        var ua = Bi(kn),
                            la = Bi((function(e, t) {
                                return e <= t
                            }));

                        function ha(e) {
                            if (!e) return [];
                            if (Bo(e)) return oa(e) ? hr(e) : Ni(e);
                            if (Ye && e[Ye]) return function(e) {
                                for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                return r
                            }(e[Ye]());
                            var t = fs(e);
                            return (t == E ? or : t == N ? ur : za)(e)
                        }

                        function pa(e) {
                            return e ? (e = ga(e)) === h || e === -h ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
                        }

                        function fa(e) {
                            var t = pa(e),
                                r = t % 1;
                            return t === t ? r ? t - r : t : 0
                        }

                        function da(e) {
                            return e ? on(fa(e), 0, d) : 0
                        }

                        function ga(e) {
                            if ("number" == typeof e) return e;
                            if (aa(e)) return f;
                            if (Xo(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = Xo(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = Qt(e);
                            var r = ge.test(e);
                            return r || ye.test(e) ? lt(e.slice(2), r ? 2 : 8) : de.test(e) ? f : +e
                        }

                        function va(e) {
                            return xi(e, Aa(e))
                        }

                        function ya(e) {
                            return null == e ? "" : ci(e)
                        }
                        var ma = Ai((function(e, t) {
                                if (Is(t) || Bo(t)) xi(t, Ca(t), e);
                                else
                                    for (var r in t) qe.call(t, r) && Xr(e, r, t[r])
                            })),
                            wa = Ai((function(e, t) {
                                xi(t, Aa(t), e)
                            })),
                            _a = Ai((function(e, t, r, n) {
                                xi(t, Aa(t), e, n)
                            })),
                            ba = Ai((function(e, t, r, n) {
                                xi(t, Ca(t), e, n)
                            })),
                            Ia = ts(sn);
                        var Ea = Jn((function(e, t) {
                                e = Oe(e);
                                var n = -1,
                                    i = t.length,
                                    s = i > 2 ? t[2] : r;
                                for (s && ms(t[0], t[1], s) && (i = 1); ++n < i;)
                                    for (var o = t[n], a = Aa(o), c = -1, u = a.length; ++c < u;) {
                                        var l = a[c],
                                            h = e[l];
                                        (h === r || zo(h, je[l]) && !qe.call(e, l)) && (e[l] = o[l])
                                    }
                                return e
                            })),
                            Pa = Jn((function(e) {
                                return e.push(r, Zi), St(Ta, r, e)
                            }));

                        function Sa(e, t, n) {
                            var i = null == e ? r : In(e, t);
                            return i === r ? n : i
                        }

                        function Oa(e, t) {
                            return null != e && ds(e, t, Rn)
                        }
                        var Ra = Mi((function(e, t, r) {
                                null != t && "function" != typeof t.toString && (t = $e.call(t)), e[t] = r
                            }), Xa(rc)),
                            Na = Mi((function(e, t, r) {
                                null != t && "function" != typeof t.toString && (t = $e.call(t)), qe.call(e, t) ? e[t].push(r) : e[t] = [r]
                            }), as),
                            xa = Jn(xn);

                        function Ca(e) {
                            return Bo(e) ? Gr(e) : qn(e)
                        }

                        function Aa(e) {
                            return Bo(e) ? Gr(e, !0) : Ln(e)
                        }
                        var ja = Ai((function(e, t, r) {
                                Un(e, t, r)
                            })),
                            Ta = Ai((function(e, t, r, n) {
                                Un(e, t, r, n)
                            })),
                            Da = ts((function(e, t) {
                                var r = {};
                                if (null == e) return r;
                                var n = !1;
                                t = Tt(t, (function(t) {
                                    return t = mi(t, e), n || (n = t.length > 1), t
                                })), xi(e, ns(e), r), n && (r = an(r, 7, Xi));
                                for (var i = t.length; i--;) li(r, t[i]);
                                return r
                            }));
                        var qa = ts((function(e, t) {
                            return null == e ? {} : function(e, t) {
                                return Vn(e, t, (function(t, r) {
                                    return Oa(e, r)
                                }))
                            }(e, t)
                        }));

                        function La(e, t) {
                            if (null == e) return {};
                            var r = Tt(ns(e), (function(e) {
                                return [e]
                            }));
                            return t = as(t), Vn(e, r, (function(e, r) {
                                return t(e, r[0])
                            }))
                        }
                        var ka = Ji(Ca),
                            $a = Ji(Aa);

                        function za(e) {
                            return null == e ? [] : Zt(e, Ca(e))
                        }
                        var Ma = qi((function(e, t, r) {
                            return t = t.toLowerCase(), e + (r ? Ua(t) : t)
                        }));

                        function Ua(e) {
                            return Ja(ya(e).toLowerCase())
                        }

                        function Ka(e) {
                            return (e = ya(e)) && e.replace(we, rr).replace(Xe, "")
                        }
                        var Ha = qi((function(e, t, r) {
                                return e + (r ? "-" : "") + t.toLowerCase()
                            })),
                            Va = qi((function(e, t, r) {
                                return e + (r ? " " : "") + t.toLowerCase()
                            })),
                            Ba = Di("toLowerCase");
                        var Fa = qi((function(e, t, r) {
                            return e + (r ? "_" : "") + t.toLowerCase()
                        }));
                        var Wa = qi((function(e, t, r) {
                            return e + (r ? " " : "") + Ja(t)
                        }));
                        var Ga = qi((function(e, t, r) {
                                return e + (r ? " " : "") + t.toUpperCase()
                            })),
                            Ja = Di("toUpperCase");

                        function Qa(e, t, n) {
                            return e = ya(e), (t = n ? r : t) === r ? function(e) {
                                return nt.test(e)
                            }(e) ? function(e) {
                                return e.match(tt) || []
                            }(e) : function(e) {
                                return e.match(ue) || []
                            }(e) : e.match(t) || []
                        }
                        var Ya = Jn((function(e, t) {
                                try {
                                    return St(e, r, t)
                                } catch (n) {
                                    return Jo(n) ? n : new Ee(n)
                                }
                            })),
                            Za = ts((function(e, t) {
                                return Rt(t, (function(t) {
                                    t = qs(t), nn(e, t, No(e[t], e))
                                })), e
                            }));

                        function Xa(e) {
                            return function() {
                                return e
                            }
                        }
                        var ec = $i(),
                            tc = $i(!0);

                        function rc(e) {
                            return e
                        }

                        function nc(e) {
                            return Dn("function" == typeof e ? e : an(e, 1))
                        }
                        var ic = Jn((function(e, t) {
                                return function(r) {
                                    return xn(r, e, t)
                                }
                            })),
                            sc = Jn((function(e, t) {
                                return function(r) {
                                    return xn(e, r, t)
                                }
                            }));

                        function oc(e, t, r) {
                            var n = Ca(t),
                                i = bn(t, n);
                            null == r && (!Xo(t) || !i.length && n.length) && (r = t, t = e, e = this, i = bn(t, Ca(t)));
                            var s = !(Xo(r) && "chain" in r) || !!r.chain,
                                o = Qo(e);
                            return Rt(i, (function(r) {
                                var n = t[r];
                                e[r] = n, o && (e.prototype[r] = function() {
                                    var t = this.__chain__;
                                    if (s || t) {
                                        var r = e(this.__wrapped__);
                                        return (r.__actions__ = Ni(this.__actions__)).push({
                                            func: n,
                                            args: arguments,
                                            thisArg: e
                                        }), r.__chain__ = t, r
                                    }
                                    return n.apply(e, Dt([this.value()], arguments))
                                })
                            })), e
                        }

                        function ac() {}
                        var cc = Ki(Tt),
                            uc = Ki(xt),
                            lc = Ki(kt);

                        function hc(e) {
                            return ws(e) ? Bt(qs(e)) : function(e) {
                                return function(t) {
                                    return In(t, e)
                                }
                            }(e)
                        }
                        var pc = Vi(),
                            fc = Vi(!0);

                        function dc() {
                            return []
                        }

                        function gc() {
                            return !1
                        }
                        var vc = Ui((function(e, t) {
                                return e + t
                            }), 0),
                            yc = Wi("ceil"),
                            mc = Ui((function(e, t) {
                                return e / t
                            }), 1),
                            wc = Wi("floor");
                        var _c = Ui((function(e, t) {
                                return e * t
                            }), 1),
                            bc = Wi("round"),
                            Ic = Ui((function(e, t) {
                                return e - t
                            }), 0);
                        return $r.after = function(e, t) {
                            if ("function" != typeof t) throw new xe(n);
                            return e = fa(e),
                                function() {
                                    if (--e < 1) return t.apply(this, arguments)
                                }
                        }, $r.ary = Oo, $r.assign = ma, $r.assignIn = wa, $r.assignInWith = _a, $r.assignWith = ba, $r.at = Ia, $r.before = Ro, $r.bind = No, $r.bindAll = Za, $r.bindKey = xo, $r.castArray = function() {
                            if (!arguments.length) return [];
                            var e = arguments[0];
                            return Ho(e) ? e : [e]
                        }, $r.chain = lo, $r.chunk = function(e, t, n) {
                            t = (n ? ms(e, t, n) : t === r) ? 1 : vr(fa(t), 0);
                            var i = null == e ? 0 : e.length;
                            if (!i || t < 1) return [];
                            for (var s = 0, o = 0, a = se(dt(i / t)); s < i;) a[o++] = ri(e, s, s += t);
                            return a
                        }, $r.compact = function(e) {
                            for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                                var s = e[t];
                                s && (i[n++] = s)
                            }
                            return i
                        }, $r.concat = function() {
                            var e = arguments.length;
                            if (!e) return [];
                            for (var t = se(e - 1), r = arguments[0], n = e; n--;) t[n - 1] = arguments[n];
                            return Dt(Ho(r) ? Ni(r) : [r], vn(t, 1))
                        }, $r.cond = function(e) {
                            var t = null == e ? 0 : e.length,
                                r = as();
                            return e = t ? Tt(e, (function(e) {
                                if ("function" != typeof e[1]) throw new xe(n);
                                return [r(e[0]), e[1]]
                            })) : [], Jn((function(r) {
                                for (var n = -1; ++n < t;) {
                                    var i = e[n];
                                    if (St(i[0], this, r)) return St(i[1], this, r)
                                }
                            }))
                        }, $r.conforms = function(e) {
                            return function(e) {
                                var t = Ca(e);
                                return function(r) {
                                    return cn(r, e, t)
                                }
                            }(an(e, 1))
                        }, $r.constant = Xa, $r.countBy = fo, $r.create = function(e, t) {
                            var r = zr(e);
                            return null == t ? r : rn(r, t)
                        }, $r.curry = function e(t, n, i) {
                            var s = Qi(t, 8, r, r, r, r, r, n = i ? r : n);
                            return s.placeholder = e.placeholder, s
                        }, $r.curryRight = function e(t, n, i) {
                            var s = Qi(t, o, r, r, r, r, r, n = i ? r : n);
                            return s.placeholder = e.placeholder, s
                        }, $r.debounce = Co, $r.defaults = Ea, $r.defaultsDeep = Pa, $r.defer = Ao, $r.delay = jo, $r.difference = $s, $r.differenceBy = zs, $r.differenceWith = Ms, $r.drop = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? ri(e, (t = n || t === r ? 1 : fa(t)) < 0 ? 0 : t, i) : []
                        }, $r.dropRight = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? ri(e, 0, (t = i - (t = n || t === r ? 1 : fa(t))) < 0 ? 0 : t) : []
                        }, $r.dropRightWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3), !0, !0) : []
                        }, $r.dropWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3), !0) : []
                        }, $r.fill = function(e, t, n, i) {
                            var s = null == e ? 0 : e.length;
                            return s ? (n && "number" != typeof n && ms(e, t, n) && (n = 0, i = s), function(e, t, n, i) {
                                var s = e.length;
                                for ((n = fa(n)) < 0 && (n = -n > s ? 0 : s + n), (i = i === r || i > s ? s : fa(i)) < 0 && (i += s), i = n > i ? 0 : da(i); n < i;) e[n++] = t;
                                return e
                            }(e, t, n, i)) : []
                        }, $r.filter = function(e, t) {
                            return (Ho(e) ? Ct : gn)(e, as(t, 3))
                        }, $r.flatMap = function(e, t) {
                            return vn(Io(e, t), 1)
                        }, $r.flatMapDeep = function(e, t) {
                            return vn(Io(e, t), h)
                        }, $r.flatMapDepth = function(e, t, n) {
                            return n = n === r ? 1 : fa(n), vn(Io(e, t), n)
                        }, $r.flatten = Hs, $r.flattenDeep = function(e) {
                            return (null == e ? 0 : e.length) ? vn(e, h) : []
                        }, $r.flattenDepth = function(e, t) {
                            return (null == e ? 0 : e.length) ? vn(e, t = t === r ? 1 : fa(t)) : []
                        }, $r.flip = function(e) {
                            return Qi(e, 512)
                        }, $r.flow = ec, $r.flowRight = tc, $r.fromPairs = function(e) {
                            for (var t = -1, r = null == e ? 0 : e.length, n = {}; ++t < r;) {
                                var i = e[t];
                                n[i[0]] = i[1]
                            }
                            return n
                        }, $r.functions = function(e) {
                            return null == e ? [] : bn(e, Ca(e))
                        }, $r.functionsIn = function(e) {
                            return null == e ? [] : bn(e, Aa(e))
                        }, $r.groupBy = wo, $r.initial = function(e) {
                            return (null == e ? 0 : e.length) ? ri(e, 0, -1) : []
                        }, $r.intersection = Bs, $r.intersectionBy = Fs, $r.intersectionWith = Ws, $r.invert = Ra, $r.invertBy = Na, $r.invokeMap = _o, $r.iteratee = nc, $r.keyBy = bo, $r.keys = Ca, $r.keysIn = Aa, $r.map = Io, $r.mapKeys = function(e, t) {
                            var r = {};
                            return t = as(t, 3), wn(e, (function(e, n, i) {
                                nn(r, t(e, n, i), e)
                            })), r
                        }, $r.mapValues = function(e, t) {
                            var r = {};
                            return t = as(t, 3), wn(e, (function(e, n, i) {
                                nn(r, n, t(e, n, i))
                            })), r
                        }, $r.matches = function(e) {
                            return zn(an(e, 1))
                        }, $r.matchesProperty = function(e, t) {
                            return Mn(e, an(t, 1))
                        }, $r.memoize = To, $r.merge = ja, $r.mergeWith = Ta, $r.method = ic, $r.methodOf = sc, $r.mixin = oc, $r.negate = Do, $r.nthArg = function(e) {
                            return e = fa(e), Jn((function(t) {
                                return Kn(t, e)
                            }))
                        }, $r.omit = Da, $r.omitBy = function(e, t) {
                            return La(e, Do(as(t)))
                        }, $r.once = function(e) {
                            return Ro(2, e)
                        }, $r.orderBy = function(e, t, n, i) {
                            return null == e ? [] : (Ho(t) || (t = null == t ? [] : [t]), Ho(n = i ? r : n) || (n = null == n ? [] : [n]), Hn(e, t, n))
                        }, $r.over = cc, $r.overArgs = qo, $r.overEvery = uc, $r.overSome = lc, $r.partial = Lo, $r.partialRight = ko, $r.partition = Eo, $r.pick = qa, $r.pickBy = La, $r.property = hc, $r.propertyOf = function(e) {
                            return function(t) {
                                return null == e ? r : In(e, t)
                            }
                        }, $r.pull = Js, $r.pullAll = Qs, $r.pullAllBy = function(e, t, r) {
                            return e && e.length && t && t.length ? Bn(e, t, as(r, 2)) : e
                        }, $r.pullAllWith = function(e, t, n) {
                            return e && e.length && t && t.length ? Bn(e, t, r, n) : e
                        }, $r.pullAt = Ys, $r.range = pc, $r.rangeRight = fc, $r.rearg = $o, $r.reject = function(e, t) {
                            return (Ho(e) ? Ct : gn)(e, Do(as(t, 3)))
                        }, $r.remove = function(e, t) {
                            var r = [];
                            if (!e || !e.length) return r;
                            var n = -1,
                                i = [],
                                s = e.length;
                            for (t = as(t, 3); ++n < s;) {
                                var o = e[n];
                                t(o, n, e) && (r.push(o), i.push(n))
                            }
                            return Fn(e, i), r
                        }, $r.rest = function(e, t) {
                            if ("function" != typeof e) throw new xe(n);
                            return Jn(e, t = t === r ? t : fa(t))
                        }, $r.reverse = Zs, $r.sampleSize = function(e, t, n) {
                            return t = (n ? ms(e, t, n) : t === r) ? 1 : fa(t), (Ho(e) ? Qr : Yn)(e, t)
                        }, $r.set = function(e, t, r) {
                            return null == e ? e : Zn(e, t, r)
                        }, $r.setWith = function(e, t, n, i) {
                            return i = "function" == typeof i ? i : r, null == e ? e : Zn(e, t, n, i)
                        }, $r.shuffle = function(e) {
                            return (Ho(e) ? Yr : ti)(e)
                        }, $r.slice = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (n && "number" != typeof n && ms(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : fa(t), n = n === r ? i : fa(n)), ri(e, t, n)) : []
                        }, $r.sortBy = Po, $r.sortedUniq = function(e) {
                            return e && e.length ? oi(e) : []
                        }, $r.sortedUniqBy = function(e, t) {
                            return e && e.length ? oi(e, as(t, 2)) : []
                        }, $r.split = function(e, t, n) {
                            return n && "number" != typeof n && ms(e, t, n) && (t = n = r), (n = n === r ? d : n >>> 0) ? (e = ya(e)) && ("string" == typeof t || null != t && !ia(t)) && (!(t = ci(t)) && sr(e)) ? _i(hr(e), 0, n) : e.split(t, n) : []
                        }, $r.spread = function(e, t) {
                            if ("function" != typeof e) throw new xe(n);
                            return t = null == t ? 0 : vr(fa(t), 0), Jn((function(r) {
                                var n = r[t],
                                    i = _i(r, 0, t);
                                return n && Dt(i, n), St(e, this, i)
                            }))
                        }, $r.tail = function(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? ri(e, 1, t) : []
                        }, $r.take = function(e, t, n) {
                            return e && e.length ? ri(e, 0, (t = n || t === r ? 1 : fa(t)) < 0 ? 0 : t) : []
                        }, $r.takeRight = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? ri(e, (t = i - (t = n || t === r ? 1 : fa(t))) < 0 ? 0 : t, i) : []
                        }, $r.takeRightWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3), !1, !0) : []
                        }, $r.takeWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3)) : []
                        }, $r.tap = function(e, t) {
                            return t(e), e
                        }, $r.throttle = function(e, t, r) {
                            var i = !0,
                                s = !0;
                            if ("function" != typeof e) throw new xe(n);
                            return Xo(r) && (i = "leading" in r ? !!r.leading : i, s = "trailing" in r ? !!r.trailing : s), Co(e, t, {
                                leading: i,
                                maxWait: t,
                                trailing: s
                            })
                        }, $r.thru = ho, $r.toArray = ha, $r.toPairs = ka, $r.toPairsIn = $a, $r.toPath = function(e) {
                            return Ho(e) ? Tt(e, qs) : aa(e) ? [e] : Ni(Ds(ya(e)))
                        }, $r.toPlainObject = va, $r.transform = function(e, t, r) {
                            var n = Ho(e),
                                i = n || Wo(e) || ca(e);
                            if (t = as(t, 4), null == r) {
                                var s = e && e.constructor;
                                r = i ? n ? new s : [] : Xo(e) && Qo(s) ? zr(Fe(e)) : {}
                            }
                            return (i ? Rt : wn)(e, (function(e, n, i) {
                                return t(r, e, n, i)
                            })), r
                        }, $r.unary = function(e) {
                            return Oo(e, 1)
                        }, $r.union = Xs, $r.unionBy = eo, $r.unionWith = to, $r.uniq = function(e) {
                            return e && e.length ? ui(e) : []
                        }, $r.uniqBy = function(e, t) {
                            return e && e.length ? ui(e, as(t, 2)) : []
                        }, $r.uniqWith = function(e, t) {
                            return t = "function" == typeof t ? t : r, e && e.length ? ui(e, r, t) : []
                        }, $r.unset = function(e, t) {
                            return null == e || li(e, t)
                        }, $r.unzip = ro, $r.unzipWith = no, $r.update = function(e, t, r) {
                            return null == e ? e : hi(e, t, yi(r))
                        }, $r.updateWith = function(e, t, n, i) {
                            return i = "function" == typeof i ? i : r, null == e ? e : hi(e, t, yi(n), i)
                        }, $r.values = za, $r.valuesIn = function(e) {
                            return null == e ? [] : Zt(e, Aa(e))
                        }, $r.without = io, $r.words = Qa, $r.wrap = function(e, t) {
                            return Lo(yi(t), e)
                        }, $r.xor = so, $r.xorBy = oo, $r.xorWith = ao, $r.zip = co, $r.zipObject = function(e, t) {
                            return gi(e || [], t || [], Xr)
                        }, $r.zipObjectDeep = function(e, t) {
                            return gi(e || [], t || [], Zn)
                        }, $r.zipWith = uo, $r.entries = ka, $r.entriesIn = $a, $r.extend = wa, $r.extendWith = _a, oc($r, $r), $r.add = vc, $r.attempt = Ya, $r.camelCase = Ma, $r.capitalize = Ua, $r.ceil = yc, $r.clamp = function(e, t, n) {
                            return n === r && (n = t, t = r), n !== r && (n = (n = ga(n)) === n ? n : 0), t !== r && (t = (t = ga(t)) === t ? t : 0), on(ga(e), t, n)
                        }, $r.clone = function(e) {
                            return an(e, 4)
                        }, $r.cloneDeep = function(e) {
                            return an(e, 5)
                        }, $r.cloneDeepWith = function(e, t) {
                            return an(e, 5, t = "function" == typeof t ? t : r)
                        }, $r.cloneWith = function(e, t) {
                            return an(e, 4, t = "function" == typeof t ? t : r)
                        }, $r.conformsTo = function(e, t) {
                            return null == t || cn(e, t, Ca(t))
                        }, $r.deburr = Ka, $r.defaultTo = function(e, t) {
                            return null == e || e !== e ? t : e
                        }, $r.divide = mc, $r.endsWith = function(e, t, n) {
                            e = ya(e), t = ci(t);
                            var i = e.length,
                                s = n = n === r ? i : on(fa(n), 0, i);
                            return (n -= t.length) >= 0 && e.slice(n, s) == t
                        }, $r.eq = zo, $r.escape = function(e) {
                            return (e = ya(e)) && J.test(e) ? e.replace(W, nr) : e
                        }, $r.escapeRegExp = function(e) {
                            return (e = ya(e)) && ne.test(e) ? e.replace(re, "\\$&") : e
                        }, $r.every = function(e, t, n) {
                            var i = Ho(e) ? xt : fn;
                            return n && ms(e, t, n) && (t = r), i(e, as(t, 3))
                        }, $r.find = go, $r.findIndex = Us, $r.findKey = function(e, t) {
                            return zt(e, as(t, 3), wn)
                        }, $r.findLast = vo, $r.findLastIndex = Ks, $r.findLastKey = function(e, t) {
                            return zt(e, as(t, 3), _n)
                        }, $r.floor = wc, $r.forEach = yo, $r.forEachRight = mo, $r.forIn = function(e, t) {
                            return null == e ? e : yn(e, as(t, 3), Aa)
                        }, $r.forInRight = function(e, t) {
                            return null == e ? e : mn(e, as(t, 3), Aa)
                        }, $r.forOwn = function(e, t) {
                            return e && wn(e, as(t, 3))
                        }, $r.forOwnRight = function(e, t) {
                            return e && _n(e, as(t, 3))
                        }, $r.get = Sa, $r.gt = Mo, $r.gte = Uo, $r.has = function(e, t) {
                            return null != e && ds(e, t, On)
                        }, $r.hasIn = Oa, $r.head = Vs, $r.identity = rc, $r.includes = function(e, t, r, n) {
                            e = Bo(e) ? e : za(e), r = r && !n ? fa(r) : 0;
                            var i = e.length;
                            return r < 0 && (r = vr(i + r, 0)), oa(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && Ut(e, t, r) > -1
                        }, $r.indexOf = function(e, t, r) {
                            var n = null == e ? 0 : e.length;
                            if (!n) return -1;
                            var i = null == r ? 0 : fa(r);
                            return i < 0 && (i = vr(n + i, 0)), Ut(e, t, i)
                        }, $r.inRange = function(e, t, n) {
                            return t = pa(t), n === r ? (n = t, t = 0) : n = pa(n),
                                function(e, t, r) {
                                    return e >= yr(t, r) && e < vr(t, r)
                                }(e = ga(e), t, n)
                        }, $r.invoke = xa, $r.isArguments = Ko, $r.isArray = Ho, $r.isArrayBuffer = Vo, $r.isArrayLike = Bo, $r.isArrayLikeObject = Fo, $r.isBoolean = function(e) {
                            return !0 === e || !1 === e || ea(e) && Pn(e) == m
                        }, $r.isBuffer = Wo, $r.isDate = Go, $r.isElement = function(e) {
                            return ea(e) && 1 === e.nodeType && !na(e)
                        }, $r.isEmpty = function(e) {
                            if (null == e) return !0;
                            if (Bo(e) && (Ho(e) || "string" == typeof e || "function" == typeof e.splice || Wo(e) || ca(e) || Ko(e))) return !e.length;
                            var t = fs(e);
                            if (t == E || t == N) return !e.size;
                            if (Is(e)) return !qn(e).length;
                            for (var r in e)
                                if (qe.call(e, r)) return !1;
                            return !0
                        }, $r.isEqual = function(e, t) {
                            return An(e, t)
                        }, $r.isEqualWith = function(e, t, n) {
                            var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                            return i === r ? An(e, t, r, n) : !!i
                        }, $r.isError = Jo, $r.isFinite = function(e) {
                            return "number" == typeof e && $t(e)
                        }, $r.isFunction = Qo, $r.isInteger = Yo, $r.isLength = Zo, $r.isMap = ta, $r.isMatch = function(e, t) {
                            return e === t || jn(e, t, us(t))
                        }, $r.isMatchWith = function(e, t, n) {
                            return n = "function" == typeof n ? n : r, jn(e, t, us(t), n)
                        }, $r.isNaN = function(e) {
                            return ra(e) && e != +e
                        }, $r.isNative = function(e) {
                            if (bs(e)) throw new Ee("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return Tn(e)
                        }, $r.isNil = function(e) {
                            return null == e
                        }, $r.isNull = function(e) {
                            return null === e
                        }, $r.isNumber = ra, $r.isObject = Xo, $r.isObjectLike = ea, $r.isPlainObject = na, $r.isRegExp = ia, $r.isSafeInteger = function(e) {
                            return Yo(e) && e >= -p && e <= p
                        }, $r.isSet = sa, $r.isString = oa, $r.isSymbol = aa, $r.isTypedArray = ca, $r.isUndefined = function(e) {
                            return e === r
                        }, $r.isWeakMap = function(e) {
                            return ea(e) && fs(e) == A
                        }, $r.isWeakSet = function(e) {
                            return ea(e) && "[object WeakSet]" == Pn(e)
                        }, $r.join = function(e, t) {
                            return null == e ? "" : Ft.call(e, t)
                        }, $r.kebabCase = Ha, $r.last = Gs, $r.lastIndexOf = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var s = i;
                            return n !== r && (s = (s = fa(n)) < 0 ? vr(i + s, 0) : yr(s, i - 1)), t === t ? function(e, t, r) {
                                for (var n = r + 1; n--;)
                                    if (e[n] === t) return n;
                                return n
                            }(e, t, s) : Mt(e, Ht, s, !0)
                        }, $r.lowerCase = Va, $r.lowerFirst = Ba, $r.lt = ua, $r.lte = la, $r.max = function(e) {
                            return e && e.length ? dn(e, rc, Sn) : r
                        }, $r.maxBy = function(e, t) {
                            return e && e.length ? dn(e, as(t, 2), Sn) : r
                        }, $r.mean = function(e) {
                            return Vt(e, rc)
                        }, $r.meanBy = function(e, t) {
                            return Vt(e, as(t, 2))
                        }, $r.min = function(e) {
                            return e && e.length ? dn(e, rc, kn) : r
                        }, $r.minBy = function(e, t) {
                            return e && e.length ? dn(e, as(t, 2), kn) : r
                        }, $r.stubArray = dc, $r.stubFalse = gc, $r.stubObject = function() {
                            return {}
                        }, $r.stubString = function() {
                            return ""
                        }, $r.stubTrue = function() {
                            return !0
                        }, $r.multiply = _c, $r.nth = function(e, t) {
                            return e && e.length ? Kn(e, fa(t)) : r
                        }, $r.noConflict = function() {
                            return ft._ === this && (ft._ = Me), this
                        }, $r.noop = ac, $r.now = So, $r.pad = function(e, t, r) {
                            e = ya(e);
                            var n = (t = fa(t)) ? lr(e) : 0;
                            if (!t || n >= t) return e;
                            var i = (t - n) / 2;
                            return Hi(gt(i), r) + e + Hi(dt(i), r)
                        }, $r.padEnd = function(e, t, r) {
                            e = ya(e);
                            var n = (t = fa(t)) ? lr(e) : 0;
                            return t && n < t ? e + Hi(t - n, r) : e
                        }, $r.padStart = function(e, t, r) {
                            e = ya(e);
                            var n = (t = fa(t)) ? lr(e) : 0;
                            return t && n < t ? Hi(t - n, r) + e : e
                        }, $r.parseInt = function(e, t, r) {
                            return r || null == t ? t = 0 : t && (t = +t), wr(ya(e).replace(ie, ""), t || 0)
                        }, $r.random = function(e, t, n) {
                            if (n && "boolean" != typeof n && ms(e, t, n) && (t = n = r), n === r && ("boolean" == typeof t ? (n = t, t = r) : "boolean" == typeof e && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = pa(e), t === r ? (t = e, e = 0) : t = pa(t)), e > t) {
                                var i = e;
                                e = t, t = i
                            }
                            if (n || e % 1 || t % 1) {
                                var s = _r();
                                return yr(e + s * (t - e + ut("1e-" + ((s + "").length - 1))), t)
                            }
                            return Wn(e, t)
                        }, $r.reduce = function(e, t, r) {
                            var n = Ho(e) ? qt : Wt,
                                i = arguments.length < 3;
                            return n(e, as(t, 4), r, i, hn)
                        }, $r.reduceRight = function(e, t, r) {
                            var n = Ho(e) ? Lt : Wt,
                                i = arguments.length < 3;
                            return n(e, as(t, 4), r, i, pn)
                        }, $r.repeat = function(e, t, n) {
                            return t = (n ? ms(e, t, n) : t === r) ? 1 : fa(t), Gn(ya(e), t)
                        }, $r.replace = function() {
                            var e = arguments,
                                t = ya(e[0]);
                            return e.length < 3 ? t : t.replace(e[1], e[2])
                        }, $r.result = function(e, t, n) {
                            var i = -1,
                                s = (t = mi(t, e)).length;
                            for (s || (s = 1, e = r); ++i < s;) {
                                var o = null == e ? r : e[qs(t[i])];
                                o === r && (i = s, o = n), e = Qo(o) ? o.call(e) : o
                            }
                            return e
                        }, $r.round = bc, $r.runInContext = e, $r.sample = function(e) {
                            return (Ho(e) ? Jr : Qn)(e)
                        }, $r.size = function(e) {
                            if (null == e) return 0;
                            if (Bo(e)) return oa(e) ? lr(e) : e.length;
                            var t = fs(e);
                            return t == E || t == N ? e.size : qn(e).length
                        }, $r.snakeCase = Fa, $r.some = function(e, t, n) {
                            var i = Ho(e) ? kt : ni;
                            return n && ms(e, t, n) && (t = r), i(e, as(t, 3))
                        }, $r.sortedIndex = function(e, t) {
                            return ii(e, t)
                        }, $r.sortedIndexBy = function(e, t, r) {
                            return si(e, t, as(r, 2))
                        }, $r.sortedIndexOf = function(e, t) {
                            var r = null == e ? 0 : e.length;
                            if (r) {
                                var n = ii(e, t);
                                if (n < r && zo(e[n], t)) return n
                            }
                            return -1
                        }, $r.sortedLastIndex = function(e, t) {
                            return ii(e, t, !0)
                        }, $r.sortedLastIndexBy = function(e, t, r) {
                            return si(e, t, as(r, 2), !0)
                        }, $r.sortedLastIndexOf = function(e, t) {
                            if (null == e ? 0 : e.length) {
                                var r = ii(e, t, !0) - 1;
                                if (zo(e[r], t)) return r
                            }
                            return -1
                        }, $r.startCase = Wa, $r.startsWith = function(e, t, r) {
                            return e = ya(e), r = null == r ? 0 : on(fa(r), 0, e.length), t = ci(t), e.slice(r, r + t.length) == t
                        }, $r.subtract = Ic, $r.sum = function(e) {
                            return e && e.length ? Gt(e, rc) : 0
                        }, $r.sumBy = function(e, t) {
                            return e && e.length ? Gt(e, as(t, 2)) : 0
                        }, $r.template = function(e, t, n) {
                            var i = $r.templateSettings;
                            n && ms(e, t, n) && (t = r), e = ya(e), t = _a({}, t, i, Yi);
                            var s, o, a = _a({}, t.imports, i.imports, Yi),
                                c = Ca(a),
                                u = Zt(a, c),
                                l = 0,
                                h = t.interpolate || _e,
                                p = "__p += '",
                                f = Re((t.escape || _e).source + "|" + h.source + "|" + (h === Z ? pe : _e).source + "|" + (t.evaluate || _e).source + "|$", "g"),
                                d = "//# sourceURL=" + (qe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
                            e.replace(f, (function(t, r, n, i, a, c) {
                                return n || (n = i), p += e.slice(l, c).replace(be, ir), r && (s = !0, p += "' +\n__e(" + r + ") +\n'"), a && (o = !0, p += "';\n" + a + ";\n__p += '"), n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), l = c + t.length, t
                            })), p += "';\n";
                            var g = qe.call(t, "variable") && t.variable;
                            if (g) {
                                if (le.test(g)) throw new Ee("Invalid `variable` option passed into `_.template`")
                            } else p = "with (obj) {\n" + p + "\n}\n";
                            p = (o ? p.replace(H, "") : p).replace(V, "$1").replace(B, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                            var v = Ya((function() {
                                return Pe(c, d + "return " + p).apply(r, u)
                            }));
                            if (v.source = p, Jo(v)) throw v;
                            return v
                        }, $r.times = function(e, t) {
                            if ((e = fa(e)) < 1 || e > p) return [];
                            var r = d,
                                n = yr(e, d);
                            t = as(t), e -= d;
                            for (var i = Jt(n, t); ++r < e;) t(r);
                            return i
                        }, $r.toFinite = pa, $r.toInteger = fa, $r.toLength = da, $r.toLower = function(e) {
                            return ya(e).toLowerCase()
                        }, $r.toNumber = ga, $r.toSafeInteger = function(e) {
                            return e ? on(fa(e), -p, p) : 0 === e ? e : 0
                        }, $r.toString = ya, $r.toUpper = function(e) {
                            return ya(e).toUpperCase()
                        }, $r.trim = function(e, t, n) {
                            if ((e = ya(e)) && (n || t === r)) return Qt(e);
                            if (!e || !(t = ci(t))) return e;
                            var i = hr(e),
                                s = hr(t);
                            return _i(i, er(i, s), tr(i, s) + 1).join("")
                        }, $r.trimEnd = function(e, t, n) {
                            if ((e = ya(e)) && (n || t === r)) return e.slice(0, pr(e) + 1);
                            if (!e || !(t = ci(t))) return e;
                            var i = hr(e);
                            return _i(i, 0, tr(i, hr(t)) + 1).join("")
                        }, $r.trimStart = function(e, t, n) {
                            if ((e = ya(e)) && (n || t === r)) return e.replace(ie, "");
                            if (!e || !(t = ci(t))) return e;
                            var i = hr(e);
                            return _i(i, er(i, hr(t))).join("")
                        }, $r.truncate = function(e, t) {
                            var n = 30,
                                i = "...";
                            if (Xo(t)) {
                                var s = "separator" in t ? t.separator : s;
                                n = "length" in t ? fa(t.length) : n, i = "omission" in t ? ci(t.omission) : i
                            }
                            var o = (e = ya(e)).length;
                            if (sr(e)) {
                                var a = hr(e);
                                o = a.length
                            }
                            if (n >= o) return e;
                            var c = n - lr(i);
                            if (c < 1) return i;
                            var u = a ? _i(a, 0, c).join("") : e.slice(0, c);
                            if (s === r) return u + i;
                            if (a && (c += u.length - c), ia(s)) {
                                if (e.slice(c).search(s)) {
                                    var l, h = u;
                                    for (s.global || (s = Re(s.source, ya(fe.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var p = l.index;
                                    u = u.slice(0, p === r ? c : p)
                                }
                            } else if (e.indexOf(ci(s), c) != c) {
                                var f = u.lastIndexOf(s);
                                f > -1 && (u = u.slice(0, f))
                            }
                            return u + i
                        }, $r.unescape = function(e) {
                            return (e = ya(e)) && G.test(e) ? e.replace(F, fr) : e
                        }, $r.uniqueId = function(e) {
                            var t = ++Le;
                            return ya(e) + t
                        }, $r.upperCase = Ga, $r.upperFirst = Ja, $r.each = yo, $r.eachRight = mo, $r.first = Vs, oc($r, function() {
                            var e = {};
                            return wn($r, (function(t, r) {
                                qe.call($r.prototype, r) || (e[r] = t)
                            })), e
                        }(), {
                            chain: !1
                        }), $r.VERSION = "4.17.21", Rt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                            $r[e].placeholder = $r
                        })), Rt(["drop", "take"], (function(e, t) {
                            Kr.prototype[e] = function(n) {
                                n = n === r ? 1 : vr(fa(n), 0);
                                var i = this.__filtered__ && !t ? new Kr(this) : this.clone();
                                return i.__filtered__ ? i.__takeCount__ = yr(n, i.__takeCount__) : i.__views__.push({
                                    size: yr(n, d),
                                    type: e + (i.__dir__ < 0 ? "Right" : "")
                                }), i
                            }, Kr.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        })), Rt(["filter", "map", "takeWhile"], (function(e, t) {
                            var r = t + 1,
                                n = 1 == r || 3 == r;
                            Kr.prototype[e] = function(e) {
                                var t = this.clone();
                                return t.__iteratees__.push({
                                    iteratee: as(e, 3),
                                    type: r
                                }), t.__filtered__ = t.__filtered__ || n, t
                            }
                        })), Rt(["head", "last"], (function(e, t) {
                            var r = "take" + (t ? "Right" : "");
                            Kr.prototype[e] = function() {
                                return this[r](1).value()[0]
                            }
                        })), Rt(["initial", "tail"], (function(e, t) {
                            var r = "drop" + (t ? "" : "Right");
                            Kr.prototype[e] = function() {
                                return this.__filtered__ ? new Kr(this) : this[r](1)
                            }
                        })), Kr.prototype.compact = function() {
                            return this.filter(rc)
                        }, Kr.prototype.find = function(e) {
                            return this.filter(e).head()
                        }, Kr.prototype.findLast = function(e) {
                            return this.reverse().find(e)
                        }, Kr.prototype.invokeMap = Jn((function(e, t) {
                            return "function" == typeof e ? new Kr(this) : this.map((function(r) {
                                return xn(r, e, t)
                            }))
                        })), Kr.prototype.reject = function(e) {
                            return this.filter(Do(as(e)))
                        }, Kr.prototype.slice = function(e, t) {
                            e = fa(e);
                            var n = this;
                            return n.__filtered__ && (e > 0 || t < 0) ? new Kr(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (n = (t = fa(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                        }, Kr.prototype.takeRightWhile = function(e) {
                            return this.reverse().takeWhile(e).reverse()
                        }, Kr.prototype.toArray = function() {
                            return this.take(d)
                        }, wn(Kr.prototype, (function(e, t) {
                            var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                i = /^(?:head|last)$/.test(t),
                                s = $r[i ? "take" + ("last" == t ? "Right" : "") : t],
                                o = i || /^find/.test(t);
                            s && ($r.prototype[t] = function() {
                                var t = this.__wrapped__,
                                    a = i ? [1] : arguments,
                                    c = t instanceof Kr,
                                    u = a[0],
                                    l = c || Ho(t),
                                    h = function(e) {
                                        var t = s.apply($r, Dt([e], a));
                                        return i && p ? t[0] : t
                                    };
                                l && n && "function" == typeof u && 1 != u.length && (c = l = !1);
                                var p = this.__chain__,
                                    f = !!this.__actions__.length,
                                    d = o && !p,
                                    g = c && !f;
                                if (!o && l) {
                                    t = g ? t : new Kr(this);
                                    var v = e.apply(t, a);
                                    return v.__actions__.push({
                                        func: ho,
                                        args: [h],
                                        thisArg: r
                                    }), new Ur(v, p)
                                }
                                return d && g ? e.apply(this, a) : (v = this.thru(h), d ? i ? v.value()[0] : v.value() : v)
                            })
                        })), Rt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                            var t = Ce[e],
                                r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                n = /^(?:pop|shift)$/.test(e);
                            $r.prototype[e] = function() {
                                var e = arguments;
                                if (n && !this.__chain__) {
                                    var i = this.value();
                                    return t.apply(Ho(i) ? i : [], e)
                                }
                                return this[r]((function(r) {
                                    return t.apply(Ho(r) ? r : [], e)
                                }))
                            }
                        })), wn(Kr.prototype, (function(e, t) {
                            var r = $r[t];
                            if (r) {
                                var n = r.name + "";
                                qe.call(xr, n) || (xr[n] = []), xr[n].push({
                                    name: t,
                                    func: r
                                })
                            }
                        })), xr[zi(r, 2).name] = [{
                            name: "wrapper",
                            func: r
                        }], Kr.prototype.clone = function() {
                            var e = new Kr(this.__wrapped__);
                            return e.__actions__ = Ni(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ni(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ni(this.__views__), e
                        }, Kr.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var e = new Kr(this);
                                e.__dir__ = -1, e.__filtered__ = !0
                            } else(e = this.clone()).__dir__ *= -1;
                            return e
                        }, Kr.prototype.value = function() {
                            var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                r = Ho(e),
                                n = t < 0,
                                i = r ? e.length : 0,
                                s = function(e, t, r) {
                                    for (var n = -1, i = r.length; ++n < i;) {
                                        var s = r[n],
                                            o = s.size;
                                        switch (s.type) {
                                            case "drop":
                                                e += o;
                                                break;
                                            case "dropRight":
                                                t -= o;
                                                break;
                                            case "take":
                                                t = yr(t, e + o);
                                                break;
                                            case "takeRight":
                                                e = vr(e, t - o)
                                        }
                                    }
                                    return {
                                        start: e,
                                        end: t
                                    }
                                }(0, i, this.__views__),
                                o = s.start,
                                a = s.end,
                                c = a - o,
                                u = n ? a : o - 1,
                                l = this.__iteratees__,
                                h = l.length,
                                p = 0,
                                f = yr(c, this.__takeCount__);
                            if (!r || !n && i == c && f == c) return fi(e, this.__actions__);
                            var d = [];
                            e: for (; c-- && p < f;) {
                                for (var g = -1, v = e[u += t]; ++g < h;) {
                                    var y = l[g],
                                        m = y.iteratee,
                                        w = y.type,
                                        _ = m(v);
                                    if (2 == w) v = _;
                                    else if (!_) {
                                        if (1 == w) continue e;
                                        break e
                                    }
                                }
                                d[p++] = v
                            }
                            return d
                        }, $r.prototype.at = po, $r.prototype.chain = function() {
                            return lo(this)
                        }, $r.prototype.commit = function() {
                            return new Ur(this.value(), this.__chain__)
                        }, $r.prototype.next = function() {
                            this.__values__ === r && (this.__values__ = ha(this.value()));
                            var e = this.__index__ >= this.__values__.length;
                            return {
                                done: e,
                                value: e ? r : this.__values__[this.__index__++]
                            }
                        }, $r.prototype.plant = function(e) {
                            for (var t, n = this; n instanceof Mr;) {
                                var i = ks(n);
                                i.__index__ = 0, i.__values__ = r, t ? s.__wrapped__ = i : t = i;
                                var s = i;
                                n = n.__wrapped__
                            }
                            return s.__wrapped__ = e, t
                        }, $r.prototype.reverse = function() {
                            var e = this.__wrapped__;
                            if (e instanceof Kr) {
                                var t = e;
                                return this.__actions__.length && (t = new Kr(this)), (t = t.reverse()).__actions__.push({
                                    func: ho,
                                    args: [Zs],
                                    thisArg: r
                                }), new Ur(t, this.__chain__)
                            }
                            return this.thru(Zs)
                        }, $r.prototype.toJSON = $r.prototype.valueOf = $r.prototype.value = function() {
                            return fi(this.__wrapped__, this.__actions__)
                        }, $r.prototype.first = $r.prototype.head, Ye && ($r.prototype[Ye] = function() {
                            return this
                        }), $r
                    }();
                    gt ? ((gt.exports = dr)._ = dr, dt._ = dr) : ft._ = dr
                }).call(Bs)
            }(Fs, Fs.exports);
            var Ws = Object.defineProperty,
                Gs = Object.defineProperties,
                Js = Object.getOwnPropertyDescriptors,
                Qs = Object.getOwnPropertySymbols,
                Ys = Object.prototype.hasOwnProperty,
                Zs = Object.prototype.propertyIsEnumerable,
                Xs = (e, t, r) => t in e ? Ws(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eo = (e, t) => {
                    for (var r in t || (t = {})) Ys.call(t, r) && Xs(e, r, t[r]);
                    if (Qs)
                        for (var r of Qs(t)) Zs.call(t, r) && Xs(e, r, t[r]);
                    return e
                },
                to = (e, t) => Gs(e, Js(t));

            function ro(e, t, r) {
                var n;
                const i = m(e);
                return (null == (n = t.rpcMap) ? void 0 : n[i.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${i.namespace}:${i.reference}&projectId=${r}`
            }

            function no(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function io(e) {
                return e.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
            }

            function so(e) {
                var t, r, n, i;
                const s = {};
                if (!Ne(e)) return s;
                for (const [o, a] of Object.entries(e)) {
                    const e = be(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        l = a.rpcMap || {},
                        h = Ie(o);
                    s[h] = to(eo(eo({}, s[h]), a), {
                        chains: ce(e, null == (t = s[h]) ? void 0 : t.chains),
                        methods: ce(c, null == (r = s[h]) ? void 0 : r.methods),
                        events: ce(u, null == (n = s[h]) ? void 0 : n.events),
                        rpcMap: eo(eo({}, l), null == (i = s[h]) ? void 0 : i.rpcMap)
                    })
                }
                return s
            }

            function oo(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function ao(e) {
                const t = {};
                for (const [r, n] of Object.entries(e)) {
                    const e = n.methods || [],
                        i = n.events || [],
                        s = n.accounts || [],
                        o = be(r) ? [r] : n.chains ? n.chains : io(n.accounts);
                    t[r] = {
                        chains: o,
                        methods: e,
                        events: i,
                        accounts: s
                    }
                }
                return t
            }

            function co(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            const uo = {},
                lo = e => uo[e],
                ho = (e, t) => {
                    uo[e] = t
                };
            class po {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Vs, `${this.name}:${e}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = no(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || ro(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            class fo {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(Vs, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    const r = t || ro(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.k(r, lo("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = parseInt(no(t));
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                getHttpProvider() {
                    const e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let n = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                    n = n.startsWith("0x") ? n : `0x${n}`;
                    const i = parseInt(n, 16);
                    if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
                    else {
                        if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                        await this.client.request({
                            topic: e.topic,
                            request: {
                                method: e.request.method,
                                params: [{
                                    chainId: n
                                }]
                            },
                            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                        }), this.setDefaultChain(`${i}`)
                    }
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class go {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Vs, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = no(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || ro(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            class vo {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Vs, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = no(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || ro(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            class yo {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Vs, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        const r = this.getCardanoRPCUrl(t),
                            n = no(t);
                        e[n] = this.createHttpProvider(n, r)
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    const t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            class mo {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Vs, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = no(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || ro(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            class wo {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Vs, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = no(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || ro(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            class _o {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = lo("events"), this.client = lo("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        const r = t || ro(`${this.name}:${e}`, this.namespace);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(Vs, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || ro(e, this.namespace);
                    return typeof r > "u" ? void 0 : new ir.r(new Us.Z(r, lo("disableProviderPing")))
                }
            }
            var bo = Object.defineProperty,
                Io = Object.defineProperties,
                Eo = Object.getOwnPropertyDescriptors,
                Po = Object.getOwnPropertySymbols,
                So = Object.prototype.hasOwnProperty,
                Oo = Object.prototype.propertyIsEnumerable,
                Ro = (e, t, r) => t in e ? bo(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                No = (e, t) => {
                    for (var r in t || (t = {})) So.call(t, r) && Ro(e, r, t[r]);
                    if (Po)
                        for (var r of Po(t)) Oo.call(t, r) && Ro(e, r, t[r]);
                    return e
                },
                xo = (e, t) => Io(e, Eo(t));
            class Co {
                constructor(e) {
                    this.events = new(i()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Rt.pino)((0, Rt.getDefaultLoggerOptions)({
                        level: (null === e || void 0 === e ? void 0 : e.logger) || Ks
                    })), this.disableProviderPing = (null === e || void 0 === e ? void 0 : e.disableProviderPing) || !1
                }
                static async init(e) {
                    const t = new Co(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    const [r, n] = this.validateChain(t);
                    if (!this.session) throw new Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: No({}, e),
                        chainId: `${r}:${n}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    this.request(e, r).then((e => t(null, e))).catch((e => t(e, void 0)))
                }
                async enable() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw new Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: Oe("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                        const {
                            uri: r,
                            approval: n
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await n().then((e => {
                            this.session = e, this.namespaces || (this.namespaces = ao(e.namespaces), this.persist("namespaces", this.namespaces))
                        })).catch((e => {
                            if (e.message !== _s) throw e;
                            t++
                        }))
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        const [r, n] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(n, t)
                    } catch (qt) {
                        if (!/Please call connect/.test(qt.message)) throw qt
                    }
                }
                async cleanupPendingPairings() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger.info("Cleaning up inactive pairings...");
                    const t = this.client.pairing.getAll();
                    if (Re(t)) {
                        for (const r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        const e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await Ms.init({
                        logger: this.providerOpts.logger || Ks,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const e = [...new Set(Object.keys(this.session.namespaces).map((e => Ie(e))))];
                    ho("client", this.client), ho("events", this.events), ho("disableProviderPing", this.disableProviderPing), e.forEach((e => {
                        if (!this.session) return;
                        const t = function(e, t) {
                                const r = Object.keys(t.namespaces).filter((t => t.includes(e)));
                                if (!r.length) return [];
                                const n = [];
                                return r.forEach((e => {
                                    const r = t.namespaces[e].accounts;
                                    n.push(...r)
                                })), n
                            }(e, this.session),
                            r = io(t),
                            n = function() {
                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                const t = so(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                                    r = so(e);
                                return Fs.exports.merge(t, r)
                            }(this.namespaces, this.optionalNamespaces),
                            i = xo(No({}, n[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new fo({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new go({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new vo({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new po({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new yo({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new mo({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new wo({
                                    namespace: i
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new _o({
                                    namespace: i
                                })
                        }
                    }))
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (e => {
                        this.events.emit("session_ping", e)
                    })), this.client.on("session_event", (e => {
                        const {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            const e = r.data;
                            e && Re(e) && this.events.emit("accountsChanged", e.map(oo))
                        } else if ("chainChanged" === r.name) {
                            const e = t.chainId,
                                r = t.event.data,
                                n = Ie(e),
                                i = co(e) !== co(r) ? `${n}:${co(r)}` : e;
                            this.onChainChanged(i)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    })), this.client.on("session_update", (e => {
                        let {
                            topic: t,
                            params: r
                        } = e;
                        var n;
                        const {
                            namespaces: i
                        } = r, s = null == (n = this.client) ? void 0 : n.session.get(t);
                        this.session = xo(No({}, s), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: r
                        })
                    })), this.client.on("session_delete", (async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", xo(No({}, Oe("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    })), this.on(Vs, (e => {
                        this.onChainChanged(e, !0)
                    }))
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    }))
                }
                setNamespaces(e) {
                    const {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: n
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = n, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    const [t, r] = (null === e || void 0 === e ? void 0 : e.split(":")) || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map((e => Ie(e))).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    const n = Ie(Object.keys(this.namespaces)[0]);
                    return [n, this.rpcProviders[n].getDefaultChain()]
                }
                async requestAccounts() {
                    const [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var r;
                    if (!this.namespaces) return;
                    const [n, i] = this.validateChain(e);
                    t || this.getProvider(n).setDefaultChain(i), (null != (r = this.namespaces[n]) ? r : this.namespaces[`${n}:${i}`]).defaultChain = i, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${Hs}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${Hs}/${e}`)
                }
            }
            const Ao = Co,
                jo = ["eth_sendTransaction", "personal_sign"],
                To = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Do = ["chainChanged", "accountsChanged"],
                qo = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var Lo = Object.defineProperty,
                ko = Object.defineProperties,
                $o = Object.getOwnPropertyDescriptors,
                zo = Object.getOwnPropertySymbols,
                Mo = Object.prototype.hasOwnProperty,
                Uo = Object.prototype.propertyIsEnumerable,
                Ko = (e, t, r) => t in e ? Lo(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Ho = (e, t) => {
                    for (var r in t || (t = {})) Mo.call(t, r) && Ko(e, r, t[r]);
                    if (zo)
                        for (var r of zo(t)) Uo.call(t, r) && Ko(e, r, t[r]);
                    return e
                },
                Vo = (e, t) => ko(e, $o(t));

            function Bo(e) {
                return Number(e[0].split(":")[1])
            }

            function Fo(e) {
                return `0x${e.toString(16)}`
            }
            class Wo {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    const t = new Wo;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    const {
                        required: t,
                        optional: r
                    } = function(e) {
                        const {
                            chains: t,
                            optionalChains: r,
                            methods: n,
                            optionalMethods: i,
                            events: s,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!Re(t)) throw new Error("Invalid chains");
                        const c = {
                                chains: t,
                                methods: n || jo,
                                events: s || Do,
                                rpcMap: Ho({}, t.length ? {
                                    [Bo(t)]: a[Bo(t)]
                                } : {})
                            },
                            u = null === s || void 0 === s ? void 0 : s.filter((e => !Do.includes(e))),
                            l = null === n || void 0 === n ? void 0 : n.filter((e => !jo.includes(e)));
                        if (!r && !o && !i && (null == u || !u.length) && (null == l || !l.length)) return {
                            required: t.length ? c : void 0
                        };
                        const h = (null === u || void 0 === u ? void 0 : u.length) && (null === l || void 0 === l ? void 0 : l.length) || !r,
                            p = {
                                chains: [...new Set(h ? c.chains.concat(r || []) : r)],
                                methods: [...new Set(c.methods.concat(null != i && i.length ? i : To))],
                                events: [...new Set(c.events.concat(null != o && o.length ? o : qo))],
                                rpcMap: a
                            };
                        return {
                            required: t.length ? c : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        const n = await new Promise((async (n, i) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((e => {
                                !e.open && !this.signer.session && (this.signer.abortPairingAttempt(), i(new Error("Connection request reset. Please try again.")))
                            }))), await this.signer.connect(Vo(Ho({
                                namespaces: Ho({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: null === e || void 0 === e ? void 0 : e.pairingTopic
                            })).then((e => {
                                n(e)
                            })).catch((e => {
                                i(new Error(e.message))
                            }))
                        }));
                        if (!n) return;
                        const i = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            const r = [];
                            return Object.keys(e).forEach((n => {
                                if (t.length && !t.includes(n)) return;
                                const i = e[n];
                                r.push(...i.accounts)
                            })), r
                        }(n.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i), this.setAccounts(i), this.events.emit("connect", {
                            chainId: Fo(this.chainId)
                        })
                    } catch (xt) {
                        throw this.signer.logger.error(xt), xt
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", (e => {
                        const {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    })), this.signer.on("chainChanged", (e => {
                        const t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", Fo(this.chainId)), this.persist()
                    })), this.signer.on("session_update", (e => {
                        this.events.emit("session_update", e)
                    })), this.signer.on("session_delete", (e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", Vo(Ho({}, Oe("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    })), this.signer.on("display_uri", (e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    }))
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    const t = e.filter((e => this.isCompatibleChainId(e))).map((e => this.parseChainId(e)));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", Fo(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        const t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    const [t, r, n] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: n
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter((e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)).map((e => this.parseAccountId(e).address)), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    const n = null != (t = null === e || void 0 === e ? void 0 : e.chains) ? t : [],
                        i = null != (r = null === e || void 0 === e ? void 0 : e.optionalChains) ? r : [],
                        s = n.concat(i);
                    if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const o = n.length ? (null === e || void 0 === e ? void 0 : e.methods) || jo : [],
                        a = n.length ? (null === e || void 0 === e ? void 0 : e.events) || Do : [],
                        c = (null === e || void 0 === e ? void 0 : e.optionalMethods) || [],
                        u = (null === e || void 0 === e ? void 0 : e.optionalEvents) || [],
                        l = (null === e || void 0 === e ? void 0 : e.rpcMap) || this.buildRpcMap(s, e.projectId),
                        h = (null === e || void 0 === e ? void 0 : e.qrModalOptions) || void 0;
                    return {
                        chains: null === n || void 0 === n ? void 0 : n.map((e => this.formatChainId(e))),
                        optionalChains: i.map((e => this.formatChainId(e))),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: l,
                        showQrModal: !(null == e || !e.showQrModal),
                        qrModalOptions: h,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    const r = {};
                    return e.forEach((e => {
                        r[e] = this.getRpcUrl(e, t)
                    })), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? Bo(this.rpc.chains) : Bo(this.rpc.optionalChains), this.signer = await Ao.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            const {
                                WalletConnectModal: t
                            } = await r.e(774).then(r.bind(r, 774));
                            e = t
                        } catch {
                            throw new Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(Ho({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (t) {
                            throw this.signer.logger.error(t), new Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    const {
                        chains: t,
                        optionalChains: r,
                        rpcMap: n
                    } = e;
                    t && Re(t) && (this.rpc.chains = t.map((e => this.formatChainId(e))), t.forEach((e => {
                        this.rpc.rpcMap[e] = (null === n || void 0 === n ? void 0 : n[e]) || this.getRpcUrl(e)
                    }))), r && Re(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null === r || void 0 === r ? void 0 : r.map((e => this.formatChainId(e))), r.forEach((e => {
                        this.rpc.rpcMap[e] = (null === n || void 0 === n ? void 0 : n[e]) || this.getRpcUrl(e)
                    })))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : null === t || void 0 === t ? void 0 : t.accounts), this.setAccounts(null === t || void 0 === t ? void 0 : t.accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e => this.parseAccount(e)))
                }
            }
            const Go = Wo
        },
        90948: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => n
            });
            class n {}
        },
        98196: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: () => n.q
            });
            var n = r(90948)
        },
        94601: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            const n = r(63182);
            t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        63007: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(67492).__exportStar(r(94601), t)
        },
        12101: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            const n = r(67492),
                i = r(47465),
                s = r(63182),
                o = r(58830),
                a = r(63007);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new i.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null === e || void 0 === e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return n.__awaiter(this, void 0, void 0, (function*() {
                        const t = new c(e);
                        return yield t.init(), t
                    }))
                }
                init() {
                    return n.__awaiter(this, void 0, void 0, (function*() {
                        yield this.initialize()
                    }))
                }
                stop() {
                    clearInterval(this.intervalRef)
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
                initialize() {
                    return n.__awaiter(this, void 0, void 0, (function*() {
                        this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval))
                    }))
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        6961: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(67492);
            n.__exportStar(r(12101), t), n.__exportStar(r(58830), t), n.__exportStar(r(63007), t)
        },
        65336: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            const n = r(98196);
            class i extends n.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = i
        },
        58830: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(67492).__exportStar(r(65336), t)
        },
        67492: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                __assign: () => s,
                __asyncDelegator: () => _,
                __asyncGenerator: () => w,
                __asyncValues: () => b,
                __await: () => m,
                __awaiter: () => l,
                __classPrivateFieldGet: () => S,
                __classPrivateFieldSet: () => O,
                __createBinding: () => p,
                __decorate: () => a,
                __exportStar: () => f,
                __extends: () => i,
                __generator: () => h,
                __importDefault: () => P,
                __importStar: () => E,
                __makeTemplateObject: () => I,
                __metadata: () => u,
                __param: () => c,
                __read: () => g,
                __rest: () => o,
                __spread: () => v,
                __spreadArrays: () => y,
                __values: () => d
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }, n(e, t)
            };

            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, s.apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                }
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))((function(i, s) {
                    function o(e) {
                        try {
                            c(n.next(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(o, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            }

            function h(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (a) {
                                s = [6, a], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" === typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function v() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function y() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    i = 0;
                for (t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function w(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        }))
                    })
                }

                function a(e, t) {
                    try {
                        (r = i[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (n) {
                        l(s[0][3], n)
                    }
                    var r
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, i) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }), t)
                            })(n, i, (t = e[r](t)).done, t.value)
                        }))
                    }
                }
            }

            function I(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        49083: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        21581: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            const n = r(28959),
                i = n.__importDefault(r(32656));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), n.__exportStar(r(49083), t), n.__exportStar(r(49889), t)
        },
        49889: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            const n = r(49083);

            function i(e) {
                return e[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY] || ""
            }

            function s(e, t) {
                return e[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY] = t, e
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY,
                    r = "";
                return r = "undefined" === typeof e.bindings ? i(e, t) : e.bindings().context || "", r
            }

            function a(e, t) {
                const r = o(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY);
                return r.trim() ? `${r}/${t}` : t
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null === e || void 0 === e ? void 0 : e.level) || n.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = i, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY;
                const i = a(e, t, r);
                return s(e.child({
                    context: i
                }), i, r)
            }
        },
        28959: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                __assign: () => s,
                __asyncDelegator: () => _,
                __asyncGenerator: () => w,
                __asyncValues: () => b,
                __await: () => m,
                __awaiter: () => l,
                __classPrivateFieldGet: () => S,
                __classPrivateFieldSet: () => O,
                __createBinding: () => p,
                __decorate: () => a,
                __exportStar: () => f,
                __extends: () => i,
                __generator: () => h,
                __importDefault: () => P,
                __importStar: () => E,
                __makeTemplateObject: () => I,
                __metadata: () => u,
                __param: () => c,
                __read: () => g,
                __rest: () => o,
                __spread: () => v,
                __spreadArrays: () => y,
                __values: () => d
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }, n(e, t)
            };

            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, s.apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                }
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))((function(i, s) {
                    function o(e) {
                        try {
                            c(n.next(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(o, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            }

            function h(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (a) {
                                s = [6, a], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" === typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function v() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function y() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    i = 0;
                for (t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function w(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        }))
                    })
                }

                function a(e, t) {
                    try {
                        (r = i[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (n) {
                        l(s[0][3], n)
                    }
                    var r
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, i) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }), t)
                            })(n, i, (t = e[r](t)).done, t.value)
                        }))
                    }
                }
            }

            function I(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        6584: () => {},
        21750: (e, t, r) => {
            "use strict";
            const n = r(40499),
                i = r(59412),
                s = r(70845),
                o = r(62683),
                a = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function l(e, t) {
                return t.decode ? i(e) : e
            }

            function h(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? h(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function p(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function f(e) {
                const t = (e = p(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    const i = "string" === typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" === typeof r && !i && l(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? l(r, e) : r;
                                    const o = i || s ? r.split(e.arrayFormatSeparator).map((t => l(t, e))) : null === r ? r : l(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    const i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? l(r, e) : r);
                                    const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => l(t, e)));
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                                };
                            default:
                                return (e, t, r) => {
                                    void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" !== typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (const i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : l(o, t), r(l(e, t), o, n)
                }
                for (const i of Object.keys(n)) {
                    const e = n[i];
                    if ("object" === typeof e && null !== e)
                        for (const r of Object.keys(e)) e[r] = d(e[r], t);
                    else n[i] = d(e, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
                    const r = n[t];
                    return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = h(r) : e[t] = r, e
                }), Object.create(null))
            }
            t.extract = f, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const r = r => {
                        return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                        var n
                    },
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    const i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                        [u(r, e), t, u(i, e)].join("")
                                    ] : [
                                        [n, u(i, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
                const s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map((r => {
                    const i = e[r];
                    return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(f(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: l(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [a]: !0
                }, r);
                const n = p(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query);
                let c = t.stringify(o, r);
                c && (c = `?${c}`);
                let l = function(e) {
                    let t = "";
                    const r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (l = `#${r[a]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${n}${c}${l}`
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [a]: !1
                }, n);
                const {
                    url: i,
                    query: s,
                    fragmentIdentifier: c
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: c
                }, n)
            }, t.exclude = (e, r, n) => {
                const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        32467: (e, t, r) => {
            e = r.nmd(e);
            var n = "__lodash_hash_undefined__",
                i = 1,
                s = 2,
                o = 9007199254740991,
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object AsyncFunction]",
                l = "[object Boolean]",
                h = "[object Date]",
                p = "[object Error]",
                f = "[object Function]",
                d = "[object GeneratorFunction]",
                g = "[object Map]",
                v = "[object Number]",
                y = "[object Null]",
                m = "[object Object]",
                w = "[object Promise]",
                _ = "[object Proxy]",
                b = "[object RegExp]",
                I = "[object Set]",
                E = "[object String]",
                P = "[object Symbol]",
                S = "[object Undefined]",
                O = "[object WeakMap]",
                R = "[object ArrayBuffer]",
                N = "[object DataView]",
                x = /^\[object .+?Constructor\]$/,
                C = /^(?:0|[1-9]\d*)$/,
                A = {};
            A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = !0, A[a] = A[c] = A[R] = A[l] = A[N] = A[h] = A[p] = A[f] = A[g] = A[v] = A[m] = A[b] = A[I] = A[E] = A[O] = !1;
            var j = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                T = "object" == typeof self && self && self.Object === Object && self,
                D = j || T || Function("return this")(),
                q = t && !t.nodeType && t,
                L = q && e && !e.nodeType && e,
                k = L && L.exports === q,
                $ = k && j.process,
                z = function() {
                    try {
                        return $ && $.binding && $.binding("util")
                    } catch (e) {}
                }(),
                M = z && z.isTypedArray;

            function U(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }

            function K(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            }

            function H(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
            var V, B, F = Array.prototype,
                W = Function.prototype,
                G = Object.prototype,
                J = D["__core-js_shared__"],
                Q = W.toString,
                Y = G.hasOwnProperty,
                Z = function() {
                    var e = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                X = G.toString,
                ee = RegExp("^" + Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                te = k ? D.Buffer : void 0,
                re = D.Symbol,
                ne = D.Uint8Array,
                ie = G.propertyIsEnumerable,
                se = F.splice,
                oe = re ? re.toStringTag : void 0,
                ae = Object.getOwnPropertySymbols,
                ce = te ? te.isBuffer : void 0,
                ue = (V = Object.keys, B = Object, function(e) {
                    return V(B(e))
                }),
                le = $e(D, "DataView"),
                he = $e(D, "Map"),
                pe = $e(D, "Promise"),
                fe = $e(D, "Set"),
                de = $e(D, "WeakMap"),
                ge = $e(Object, "create"),
                ve = Ke(le),
                ye = Ke(he),
                me = Ke(pe),
                we = Ke(fe),
                _e = Ke(de),
                be = re ? re.prototype : void 0,
                Ie = be ? be.valueOf : void 0;

            function Ee(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Pe(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Se(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Oe(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new Se; ++t < r;) this.add(e[t])
            }

            function Re(e) {
                var t = this.__data__ = new Pe(e);
                this.size = t.size
            }

            function Ne(e, t) {
                var r = Be(e),
                    n = !r && Ve(e),
                    i = !r && !n && Fe(e),
                    s = !r && !n && !i && Ye(e),
                    o = r || n || i || s,
                    a = o ? function(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }(e.length, String) : [],
                    c = a.length;
                for (var u in e) !t && !Y.call(e, u) || o && ("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Ue(u, c)) || a.push(u);
                return a
            }

            function xe(e, t) {
                for (var r = e.length; r--;)
                    if (He(e[r][0], t)) return r;
                return -1
            }

            function Ce(e) {
                return null == e ? void 0 === e ? S : y : oe && oe in Object(e) ? function(e) {
                    var t = Y.call(e, oe),
                        r = e[oe];
                    try {
                        e[oe] = void 0;
                        var n = !0
                    } catch (s) {}
                    var i = X.call(e);
                    n && (t ? e[oe] = r : delete e[oe]);
                    return i
                }(e) : function(e) {
                    return X.call(e)
                }(e)
            }

            function Ae(e) {
                return Qe(e) && Ce(e) == a
            }

            function je(e, t, r, n, o) {
                return e === t || (null == e || null == t || !Qe(e) && !Qe(t) ? e !== e && t !== t : function(e, t, r, n, o, u) {
                    var f = Be(e),
                        d = Be(t),
                        y = f ? c : Me(e),
                        w = d ? c : Me(t),
                        _ = (y = y == a ? m : y) == m,
                        S = (w = w == a ? m : w) == m,
                        O = y == w;
                    if (O && Fe(e)) {
                        if (!Fe(t)) return !1;
                        f = !0, _ = !1
                    }
                    if (O && !_) return u || (u = new Re), f || Ye(e) ? qe(e, t, r, n, o, u) : function(e, t, r, n, o, a, c) {
                        switch (r) {
                            case N:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case R:
                                return !(e.byteLength != t.byteLength || !a(new ne(e), new ne(t)));
                            case l:
                            case h:
                            case v:
                                return He(+e, +t);
                            case p:
                                return e.name == t.name && e.message == t.message;
                            case b:
                            case E:
                                return e == t + "";
                            case g:
                                var u = K;
                            case I:
                                var f = n & i;
                                if (u || (u = H), e.size != t.size && !f) return !1;
                                var d = c.get(e);
                                if (d) return d == t;
                                n |= s, c.set(e, t);
                                var y = qe(u(e), u(t), n, o, a, c);
                                return c.delete(e), y;
                            case P:
                                if (Ie) return Ie.call(e) == Ie.call(t)
                        }
                        return !1
                    }(e, t, y, r, n, o, u);
                    if (!(r & i)) {
                        var x = _ && Y.call(e, "__wrapped__"),
                            C = S && Y.call(t, "__wrapped__");
                        if (x || C) {
                            var A = x ? e.value() : e,
                                j = C ? t.value() : t;
                            return u || (u = new Re), o(A, j, r, n, u)
                        }
                    }
                    if (!O) return !1;
                    return u || (u = new Re),
                        function(e, t, r, n, s, o) {
                            var a = r & i,
                                c = Le(e),
                                u = c.length,
                                l = Le(t),
                                h = l.length;
                            if (u != h && !a) return !1;
                            var p = u;
                            for (; p--;) {
                                var f = c[p];
                                if (!(a ? f in t : Y.call(t, f))) return !1
                            }
                            var d = o.get(e);
                            if (d && o.get(t)) return d == t;
                            var g = !0;
                            o.set(e, t), o.set(t, e);
                            var v = a;
                            for (; ++p < u;) {
                                var y = e[f = c[p]],
                                    m = t[f];
                                if (n) var w = a ? n(m, y, f, t, e, o) : n(y, m, f, e, t, o);
                                if (!(void 0 === w ? y === m || s(y, m, r, n, o) : w)) {
                                    g = !1;
                                    break
                                }
                                v || (v = "constructor" == f)
                            }
                            if (g && !v) {
                                var _ = e.constructor,
                                    b = t.constructor;
                                _ == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b || (g = !1)
                            }
                            return o.delete(e), o.delete(t), g
                        }(e, t, r, n, o, u)
                }(e, t, r, n, je, o))
            }

            function Te(e) {
                return !(!Je(e) || function(e) {
                    return !!Z && Z in e
                }(e)) && (We(e) ? ee : x).test(Ke(e))
            }

            function De(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            r = "function" == typeof t && t.prototype || G;
                        return e === r
                    }(e)) return ue(e);
                var t = [];
                for (var r in Object(e)) Y.call(e, r) && "constructor" != r && t.push(r);
                return t
            }

            function qe(e, t, r, n, o, a) {
                var c = r & i,
                    u = e.length,
                    l = t.length;
                if (u != l && !(c && l > u)) return !1;
                var h = a.get(e);
                if (h && a.get(t)) return h == t;
                var p = -1,
                    f = !0,
                    d = r & s ? new Oe : void 0;
                for (a.set(e, t), a.set(t, e); ++p < u;) {
                    var g = e[p],
                        v = t[p];
                    if (n) var y = c ? n(v, g, p, t, e, a) : n(g, v, p, e, t, a);
                    if (void 0 !== y) {
                        if (y) continue;
                        f = !1;
                        break
                    }
                    if (d) {
                        if (!U(t, (function(e, t) {
                                if (i = t, !d.has(i) && (g === e || o(g, e, r, n, a))) return d.push(t);
                                var i
                            }))) {
                            f = !1;
                            break
                        }
                    } else if (g !== v && !o(g, v, r, n, a)) {
                        f = !1;
                        break
                    }
                }
                return a.delete(e), a.delete(t), f
            }

            function Le(e) {
                return function(e, t, r) {
                    var n = t(e);
                    return Be(e) ? n : function(e, t) {
                        for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                        return e
                    }(n, r(e))
                }(e, Ze, ze)
            }

            function ke(e, t) {
                var r = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function $e(e, t) {
                var r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return Te(r) ? r : void 0
            }
            Ee.prototype.clear = function() {
                this.__data__ = ge ? ge(null) : {}, this.size = 0
            }, Ee.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, Ee.prototype.get = function(e) {
                var t = this.__data__;
                if (ge) {
                    var r = t[e];
                    return r === n ? void 0 : r
                }
                return Y.call(t, e) ? t[e] : void 0
            }, Ee.prototype.has = function(e) {
                var t = this.__data__;
                return ge ? void 0 !== t[e] : Y.call(t, e)
            }, Ee.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = ge && void 0 === t ? n : t, this
            }, Pe.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, Pe.prototype.delete = function(e) {
                var t = this.__data__,
                    r = xe(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : se.call(t, r, 1), --this.size, !0)
            }, Pe.prototype.get = function(e) {
                var t = this.__data__,
                    r = xe(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, Pe.prototype.has = function(e) {
                return xe(this.__data__, e) > -1
            }, Pe.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = xe(r, e);
                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
            }, Se.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new Ee,
                    map: new(he || Pe),
                    string: new Ee
                }
            }, Se.prototype.delete = function(e) {
                var t = ke(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, Se.prototype.get = function(e) {
                return ke(this, e).get(e)
            }, Se.prototype.has = function(e) {
                return ke(this, e).has(e)
            }, Se.prototype.set = function(e, t) {
                var r = ke(this, e),
                    n = r.size;
                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
            }, Oe.prototype.add = Oe.prototype.push = function(e) {
                return this.__data__.set(e, n), this
            }, Oe.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Re.prototype.clear = function() {
                this.__data__ = new Pe, this.size = 0
            }, Re.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, Re.prototype.get = function(e) {
                return this.__data__.get(e)
            }, Re.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Re.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof Pe) {
                    var n = r.__data__;
                    if (!he || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new Se(n)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var ze = ae ? function(e) {
                    return null == e ? [] : (e = Object(e), function(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                            var o = e[r];
                            t(o, r, e) && (s[i++] = o)
                        }
                        return s
                    }(ae(e), (function(t) {
                        return ie.call(e, t)
                    })))
                } : function() {
                    return []
                },
                Me = Ce;

            function Ue(e, t) {
                return !!(t = null == t ? o : t) && ("number" == typeof e || C.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Ke(e) {
                if (null != e) {
                    try {
                        return Q.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }

            function He(e, t) {
                return e === t || e !== e && t !== t
            }(le && Me(new le(new ArrayBuffer(1))) != N || he && Me(new he) != g || pe && Me(pe.resolve()) != w || fe && Me(new fe) != I || de && Me(new de) != O) && (Me = function(e) {
                var t = Ce(e),
                    r = t == m ? e.constructor : void 0,
                    n = r ? Ke(r) : "";
                if (n) switch (n) {
                    case ve:
                        return N;
                    case ye:
                        return g;
                    case me:
                        return w;
                    case we:
                        return I;
                    case _e:
                        return O
                }
                return t
            });
            var Ve = Ae(function() {
                    return arguments
                }()) ? Ae : function(e) {
                    return Qe(e) && Y.call(e, "callee") && !ie.call(e, "callee")
                },
                Be = Array.isArray;
            var Fe = ce || function() {
                return !1
            };

            function We(e) {
                if (!Je(e)) return !1;
                var t = Ce(e);
                return t == f || t == d || t == u || t == _
            }

            function Ge(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
            }

            function Je(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Qe(e) {
                return null != e && "object" == typeof e
            }
            var Ye = M ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(M) : function(e) {
                return Qe(e) && Ge(e.length) && !!A[Ce(e)]
            };

            function Ze(e) {
                return null != (t = e) && Ge(t.length) && !We(t) ? Ne(e) : De(e);
                var t
            }
            e.exports = function(e, t) {
                return je(e, t)
            }
        },
        71157: e => {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, n) {
                var i = n && n.stringify || t;
                if ("object" === typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = new Array(s);
                    o[0] = i(e);
                    for (var a = 1; a < s; a++) o[a] = i(r[a]);
                    return o.join(" ")
                }
                if ("string" !== typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, p = e && e.length || 0, f = 0; f < p;) {
                    if (37 === e.charCodeAt(f) && f + 1 < p) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (l >= c) break;
                                if (null == r[l]) break;
                                h < f && (u += e.slice(h, f)), u += Number(r[l]), h = f + 2, f++;
                                break;
                            case 105:
                                if (l >= c) break;
                                if (null == r[l]) break;
                                h < f && (u += e.slice(h, f)), u += Math.floor(Number(r[l])), h = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c) break;
                                if (void 0 === r[l]) break;
                                h < f && (u += e.slice(h, f));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    u += "'" + r[l] + "'", h = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[l].name || "<anonymous>", h = f + 2, f++;
                                    break
                                }
                                u += i(r[l]), h = f + 2, f++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < f && (u += e.slice(h, f)), u += String(r[l]), h = f + 2, f++;
                                break;
                            case 37:
                                h < f && (u += e.slice(h, f)), u += "%", h = f + 2, f++, l--
                        }++l
                    }++f
                }
                if (-1 === h) return e;
                h < p && (u += e.slice(h));
                return u
            }
        },
        32656: (e, t, r) => {
            "use strict";
            const n = r(71157);
            e.exports = o;
            const i = function() {
                    function e(e) {
                        return "undefined" !== typeof e && e
                    }
                    try {
                        return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch (t) {
                        return e(self) || e(window) || e(this) || {}
                    }
                }().console || {},
                s = {
                    mapHttpRequest: p,
                    mapHttpResponse: p,
                    wrapRequestSerializer: f,
                    wrapResponseSerializer: f,
                    wrapErrorSerializer: f,
                    req: p,
                    res: p,
                    err: function(e) {
                        const t = {
                            type: e.constructor.name,
                            msg: e.message,
                            stack: e.stack
                        };
                        for (const r in e) void 0 === t[r] && (t[r] = e[r]);
                        return t
                    }
                };

            function o(e) {
                (e = e || {}).browser = e.browser || {};
                const t = e.browser.transmit;
                if (t && "function" !== typeof t.send) throw Error("pino: transmit option must have a send function");
                const r = e.browser.write || i;
                e.browser.write && (e.browser.asObject = !0);
                const n = e.serializers || {},
                    s = function(e, t) {
                        if (Array.isArray(e)) return e.filter((function(e) {
                            return "!stdSerializers.err" !== e
                        }));
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, n);
                let p = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (p = !1);
                "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === e.enabled && (e.level = "silent");
                const f = e.level || "info",
                    g = Object.create(r);
                g.log || (g.log = d), Object.defineProperty(g, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(g, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, a(v, g, "error", "log"), a(v, g, "fatal", "error"), a(v, g, "warn", "error"), a(v, g, "info", "log"), a(v, g, "debug", "log"), a(v, g, "trace", "log")
                    }
                });
                const v = {
                    transmit: t,
                    serialize: s,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: h(e)
                };
                return g.levels = o.levels, g.level = f, g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = d, g.serializers = n, g._serialize = s, g._stdErrSerialize = p, g.child = function(r, i) {
                    if (!r) throw new Error("missing bindings for child Pino");
                    i = i || {}, s && r.serializers && (i.serializers = r.serializers);
                    const o = i.serializers;
                    if (s && o) {
                        var a = Object.assign({}, n, o),
                            h = !0 === e.browser.serialize ? Object.keys(a) : s;
                        delete r.serializers, c([r], h, a, this._stdErrSerialize)
                    }

                    function p(e) {
                        this._childLevel = 1 + (0 | e._childLevel), this.error = u(e, r, "error"), this.fatal = u(e, r, "fatal"), this.warn = u(e, r, "warn"), this.info = u(e, r, "info"), this.debug = u(e, r, "debug"), this.trace = u(e, r, "trace"), a && (this.serializers = a, this._serialize = h), t && (this._logEvent = l([].concat(e._logEvent.bindings, r)))
                    }
                    return p.prototype = this, new p(this)
                }, t && (g._logEvent = l()), g
            }

            function a(e, t, r, s) {
                const a = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? d : a[r] ? a[r] : i[r] || i[s] || d,
                    function(e, t, r) {
                        if (!e.transmit && t[r] === d) return;
                        t[r] = (s = t[r], function() {
                            const a = e.timestamp(),
                                u = new Array(arguments.length),
                                h = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                            for (var p = 0; p < u.length; p++) u[p] = arguments[p];
                            if (e.serialize && !e.asObject && c(u, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? s.call(h, function(e, t, r, i) {
                                    e._serialize && c(r, e._serialize, e.serializers, e._stdErrSerialize);
                                    const s = r.slice();
                                    let a = s[0];
                                    const u = {};
                                    i && (u.time = i), u.level = o.levels.values[t];
                                    let l = 1 + (0 | e._childLevel);
                                    if (l < 1 && (l = 1), null !== a && "object" === typeof a) {
                                        for (; l-- && "object" === typeof s[0];) Object.assign(u, s.shift());
                                        a = s.length ? n(s.shift(), s) : void 0
                                    } else "string" === typeof a && (a = n(s.shift(), s));
                                    return void 0 !== a && (u.msg = a), u
                                }(this, r, u, a)) : s.apply(h, u), e.transmit) {
                                const n = e.transmit.level || t.level,
                                    i = o.levels.values[n],
                                    s = o.levels.values[r];
                                if (s < i) return;
                                ! function(e, t, r) {
                                    const n = t.send,
                                        i = t.ts,
                                        s = t.methodLevel,
                                        o = t.methodValue,
                                        a = t.val,
                                        u = e._logEvent.bindings;
                                    c(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = i, e._logEvent.messages = r.filter((function(e) {
                                        return -1 === u.indexOf(e)
                                    })), e._logEvent.level.label = s, e._logEvent.level.value = o, n(s, e._logEvent, a), e._logEvent = l(u)
                                }(this, {
                                    ts: a,
                                    methodLevel: r,
                                    methodValue: s,
                                    transmitLevel: n,
                                    transmitValue: o.levels.values[e.transmit.level || t.level],
                                    send: e.transmit.send,
                                    val: t.levelVal
                                }, u)
                            }
                        });
                        var s
                    }(e, t, r)
            }

            function c(e, t, r, n) {
                for (const i in e)
                    if (n && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
                    else if ("object" === typeof e[i] && !Array.isArray(e[i]))
                    for (const n in e[i]) t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]))
            }

            function u(e, t, r) {
                return function() {
                    const n = new Array(1 + arguments.length);
                    n[0] = t;
                    for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
                    return e[r].apply(this, n)
                }
            }

            function l(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function h(e) {
                return "function" === typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? g : v
            }

            function p() {
                return {}
            }

            function f(e) {
                return e
            }

            function d() {}

            function g() {
                return !1
            }

            function v() {
                return Date.now()
            }
            o.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
                nullTime: g,
                epochTime: v,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);
//# sourceMappingURL=2897.06724fae.chunk.js.map