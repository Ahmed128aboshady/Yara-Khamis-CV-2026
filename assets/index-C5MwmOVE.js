(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function e(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const r = e(i);
    fetch(i.href, r);
  }
})();
const ml = "183", Ss = { ROTATE: 0, DOLLY: 1, PAN: 2 }, xs = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, cf = 0, sc = 1, hf = 2, Gr = 1, Mh = 2, Ks = 3, bi = 0, je = 1, Ln = 2, ni = 0, ys = 1, rc = 2, ac = 3, oc = 4, uf = 5, Vi = 100, ff = 101, df = 102, pf = 103, mf = 104, _f = 200, gf = 201, xf = 202, vf = 203, co = 204, ho = 205, Mf = 206, Sf = 207, yf = 208, Ef = 209, Tf = 210, bf = 211, Af = 212, wf = 213, Rf = 214, uo = 0, fo = 1, po = 2, Rs = 3, mo = 4, _o = 5, go = 6, xo = 7, Sh = 0, Cf = 1, Pf = 2, On = 0, yh = 1, Eh = 2, Th = 3, _l = 4, bh = 5, Ah = 6, wh = 7, Rh = 300, Zi = 301, Cs = 302, va = 303, Ma = 304, ha = 306, er = 1e3, ei = 1001, vo = 1002, Ne = 1003, Df = 1004, xr = 1005, ze = 1006, Sa = 1007, Hi = 1008, on = 1009, Ch = 1010, Ph = 1011, nr = 1012, gl = 1013, Vn = 1014, Un = 1015, ri = 1016, xl = 1017, vl = 1018, ir = 1020, Dh = 35902, Lh = 35899, Ih = 1021, Uh = 1022, bn = 1023, ai = 1026, Wi = 1027, Nh = 1028, Ml = 1029, Ps = 1030, Sl = 1031, yl = 1033, Hr = 33776, Wr = 33777, Xr = 33778, Yr = 33779, Mo = 35840, So = 35841, yo = 35842, Eo = 35843, To = 36196, bo = 37492, Ao = 37496, wo = 37488, Ro = 37489, Co = 37490, Po = 37491, Do = 37808, Lo = 37809, Io = 37810, Uo = 37811, No = 37812, Fo = 37813, Oo = 37814, Bo = 37815, ko = 37816, zo = 37817, Vo = 37818, Go = 37819, Ho = 37820, Wo = 37821, Xo = 36492, Yo = 36494, qo = 36495, Ko = 36283, jo = 36284, Zo = 36285, $o = 36286, Lf = 3200, Fh = 0, If = 1, xi = "", pn = "srgb", Ds = "srgb-linear", Jr = "linear", te = "srgb", is = 7680, lc = 519, Uf = 512, Nf = 513, Ff = 514, El = 515, Of = 516, Bf = 517, Tl = 518, kf = 519, cc = 35044, hc = "300 es", Nn = 2e3, sr = 2001;
function zf(s16) {
  for (let t = s16.length - 1; t >= 0; --t) if (s16[t] >= 65535) return true;
  return false;
}
function Qr(s16) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s16);
}
function Vf() {
  const s16 = Qr("canvas");
  return s16.style.display = "block", s16;
}
const uc = {};
function fc(...s16) {
  const t = "THREE." + s16.shift();
  console.log(t, ...s16);
}
function Oh(s16) {
  const t = s16[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const e = s16[1];
    e && e.isStackTrace ? s16[0] += " " + e.getLocation() : s16[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return s16;
}
function Pt(...s16) {
  s16 = Oh(s16);
  const t = "THREE." + s16.shift();
  {
    const e = s16[0];
    e && e.isStackTrace ? console.warn(e.getError(t)) : console.warn(t, ...s16);
  }
}
function Zt(...s16) {
  s16 = Oh(s16);
  const t = "THREE." + s16.shift();
  {
    const e = s16[0];
    e && e.isStackTrace ? console.error(e.getError(t)) : console.error(t, ...s16);
  }
}
function ta(...s16) {
  const t = s16.join(" ");
  t in uc || (uc[t] = true, Pt(...s16));
}
function Gf(s16, t, e) {
  return new Promise(function(n, i) {
    function r() {
      switch (s16.clientWaitSync(t, s16.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s16.WAIT_FAILED:
          i();
          break;
        case s16.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
const Hf = { [uo]: fo, [po]: go, [mo]: xo, [Rs]: _o, [fo]: uo, [go]: po, [xo]: mo, [_o]: Rs };
class Qi {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? false : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[t];
    if (i !== void 0) {
      const r = i.indexOf(e);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, t);
      t.target = null;
    }
  }
}
const Oe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], qr = Math.PI / 180, ea = 180 / Math.PI;
function dr() {
  const s16 = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Oe[s16 & 255] + Oe[s16 >> 8 & 255] + Oe[s16 >> 16 & 255] + Oe[s16 >> 24 & 255] + "-" + Oe[t & 255] + Oe[t >> 8 & 255] + "-" + Oe[t >> 16 & 15 | 64] + Oe[t >> 24 & 255] + "-" + Oe[e & 63 | 128] + Oe[e >> 8 & 255] + "-" + Oe[e >> 16 & 255] + Oe[e >> 24 & 255] + Oe[n & 255] + Oe[n >> 8 & 255] + Oe[n >> 16 & 255] + Oe[n >> 24 & 255]).toLowerCase();
}
function Gt(s16, t, e) {
  return Math.max(t, Math.min(e, s16));
}
function Wf(s16, t) {
  return (s16 % t + t) % t;
}
function ya(s16, t, e) {
  return (1 - e) * s16 + e * t;
}
function zs(s16, t) {
  switch (t.constructor) {
    case Float32Array:
      return s16;
    case Uint32Array:
      return s16 / 4294967295;
    case Uint16Array:
      return s16 / 65535;
    case Uint8Array:
      return s16 / 255;
    case Int32Array:
      return Math.max(s16 / 2147483647, -1);
    case Int16Array:
      return Math.max(s16 / 32767, -1);
    case Int8Array:
      return Math.max(s16 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function qe(s16, t) {
  switch (t.constructor) {
    case Float32Array:
      return s16;
    case Uint32Array:
      return Math.round(s16 * 4294967295);
    case Uint16Array:
      return Math.round(s16 * 65535);
    case Uint8Array:
      return Math.round(s16 * 255);
    case Int32Array:
      return Math.round(s16 * 2147483647);
    case Int16Array:
      return Math.round(s16 * 32767);
    case Int8Array:
      return Math.round(s16 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Xf = { DEG2RAD: qr };
class Lt {
  constructor(t = 0, e = 0) {
    Lt.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Gt(this.x, t.x, e.x), this.y = Gt(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = Gt(this.x, t, e), this.y = Gt(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Gt(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Gt(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ai {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], f = n[i + 3], u = r[a + 0], m = r[a + 1], _ = r[a + 2], g = r[a + 3];
    if (f !== g || l !== u || c !== m || h !== _) {
      let p = l * u + c * m + h * _ + f * g;
      p < 0 && (u = -u, m = -m, _ = -_, g = -g, p = -p);
      let d = 1 - o;
      if (p < 0.9995) {
        const M = Math.acos(p), E = Math.sin(M);
        d = Math.sin(d * M) / E, o = Math.sin(o * M) / E, l = l * d + u * o, c = c * d + m * o, h = h * d + _ * o, f = f * d + g * o;
      } else {
        l = l * d + u * o, c = c * d + m * o, h = h * d + _ * o, f = f * d + g * o;
        const M = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= M, c *= M, h *= M, f *= M;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = f;
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], f = r[a], u = r[a + 1], m = r[a + 2], _ = r[a + 3];
    return t[e] = o * _ + h * f + l * m - c * u, t[e + 1] = l * _ + h * u + c * f - o * m, t[e + 2] = c * _ + h * m + o * u - l * f, t[e + 3] = h * _ - o * f - l * u - c * m, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const n = t._x, i = t._y, r = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), f = o(r / 2), u = l(n / 2), m = l(i / 2), _ = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * f + c * m * _, this._y = c * m * f - u * h * _, this._z = c * h * _ + u * m * f, this._w = c * h * f - u * m * _;
        break;
      case "YXZ":
        this._x = u * h * f + c * m * _, this._y = c * m * f - u * h * _, this._z = c * h * _ - u * m * f, this._w = c * h * f + u * m * _;
        break;
      case "ZXY":
        this._x = u * h * f - c * m * _, this._y = c * m * f + u * h * _, this._z = c * h * _ + u * m * f, this._w = c * h * f - u * m * _;
        break;
      case "ZYX":
        this._x = u * h * f - c * m * _, this._y = c * m * f + u * h * _, this._z = c * h * _ - u * m * f, this._w = c * h * f + u * m * _;
        break;
      case "YZX":
        this._x = u * h * f + c * m * _, this._y = c * m * f + u * h * _, this._z = c * h * _ - u * m * f, this._w = c * h * f - u * m * _;
        break;
      case "XZY":
        this._x = u * h * f - c * m * _, this._y = c * m * f - u * h * _, this._z = c * h * _ + u * m * f, this._w = c * h * f + u * m * _;
        break;
      default:
        Pt("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], r = e[8], a = e[1], o = e[5], l = e[9], c = e[2], h = e[6], f = e[10], u = n + o + f;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (r - c) * m, this._z = (a - i) * m;
    } else if (n > o && n > f) {
      const m = 2 * Math.sqrt(1 + n - o - f);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (i + a) / m, this._z = (r + c) / m;
    } else if (o > f) {
      const m = 2 * Math.sqrt(1 + o - n - f);
      this._w = (r - c) / m, this._x = (i + a) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - i) / m, this._x = (r + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Gt(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + a * o + i * c - r * l, this._y = i * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    let n = t._x, i = t._y, r = t._z, a = t._w, o = this.dot(t);
    o < 0 && (n = -n, i = -i, r = -r, a = -a, o = -o);
    let l = 1 - e;
    if (o < 0.9995) {
      const c = Math.acos(o), h = Math.sin(c);
      l = Math.sin(l * c) / h, e = Math.sin(e * c) / h, this._x = this._x * l + n * e, this._y = this._y * l + i * e, this._z = this._z * l + r * e, this._w = this._w * l + a * e, this._onChangeCallback();
    } else this._x = this._x * l + n * e, this._y = this._y * l + i * e, this._z = this._z * l + r * e, this._w = this._w * l + a * e, this.normalize();
    return this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class k {
  constructor(t = 0, e = 0, n = 0) {
    k.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(dc.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(dc.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * i - o * n), h = 2 * (o * e - r * i), f = 2 * (r * n - a * e);
    return this.x = e + l * c + a * f - o * h, this.y = n + l * h + o * c - r * f, this.z = i + l * f + r * h - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Gt(this.x, t.x, e.x), this.y = Gt(this.y, t.y, e.y), this.z = Gt(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = Gt(this.x, t, e), this.y = Gt(this.y, t, e), this.z = Gt(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Gt(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, r = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = i * l - r * o, this.y = r * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Ea.copy(this).projectOnVector(t), this.sub(Ea);
  }
  reflect(t) {
    return this.sub(Ea.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Gt(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ea = new k(), dc = new Ai();
class Ft {
  constructor(t, e, n, i, r, a, o, l, c) {
    Ft.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, a, o, l, c);
  }
  set(t, e, n, i, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], f = n[7], u = n[2], m = n[5], _ = n[8], g = i[0], p = i[3], d = i[6], M = i[1], E = i[4], S = i[7], b = i[2], A = i[5], w = i[8];
    return r[0] = a * g + o * M + l * b, r[3] = a * p + o * E + l * A, r[6] = a * d + o * S + l * w, r[1] = c * g + h * M + f * b, r[4] = c * p + h * E + f * A, r[7] = c * d + h * S + f * w, r[2] = u * g + m * M + _ * b, r[5] = u * p + m * E + _ * A, r[8] = u * d + m * S + _ * w, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
    return e * a * h - e * o * c - n * r * h + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], f = h * a - o * c, u = o * l - h * r, m = c * r - a * l, _ = e * f + n * u + i * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return t[0] = f * g, t[1] = (i * c - h * n) * g, t[2] = (o * n - i * a) * g, t[3] = u * g, t[4] = (h * e - i * l) * g, t[5] = (i * r - o * e) * g, t[6] = m * g, t[7] = (n * l - c * e) * g, t[8] = (a * e - n * r) * g, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -i * c, i * l, -i * (-c * a + l * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(Ta.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Ta.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Ta.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ta = new Ft(), pc = new Ft().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), mc = new Ft().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Yf() {
  const s16 = { enabled: true, workingColorSpace: Ds, spaces: {}, convert: function(i, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === te && (i.r = ii(i.r), i.g = ii(i.g), i.b = ii(i.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === te && (i.r = Es(i.r), i.g = Es(i.g), i.b = Es(i.b))), i;
  }, workingToColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === xi ? Jr : this.spaces[i].transfer;
  }, getToneMappingMode: function(i) {
    return this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, a) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(i, r) {
    return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), s16.workingToColorSpace(i, r);
  }, toWorkingColorSpace: function(i, r) {
    return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), s16.colorSpaceToWorking(i, r);
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s16.define({ [Ds]: { primaries: t, whitePoint: n, transfer: Jr, toXYZ: pc, fromXYZ: mc, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: pn }, outputColorSpaceConfig: { drawingBufferColorSpace: pn } }, [pn]: { primaries: t, whitePoint: n, transfer: te, toXYZ: pc, fromXYZ: mc, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: pn } } }), s16;
}
const Kt = Yf();
function ii(s16) {
  return s16 < 0.04045 ? s16 * 0.0773993808 : Math.pow(s16 * 0.9478672986 + 0.0521327014, 2.4);
}
function Es(s16) {
  return s16 < 31308e-7 ? s16 * 12.92 : 1.055 * Math.pow(s16, 0.41666) - 0.055;
}
let ss;
class qf {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      ss === void 0 && (ss = Qr("canvas")), ss.width = t.width, ss.height = t.height;
      const i = ss.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), n = ss;
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Qr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = ii(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(ii(e[n] / 255) * 255) : e[n] = ii(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Kf = 0;
class bl {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Kf++ }), this.uuid = dr(), this.data = t, this.dataReady = true, this.version = 0;
  }
  getSize(t) {
    const e = this.data;
    return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : typeof VideoFrame < "u" && e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? r.push(ba(i[a].image)) : r.push(ba(i[a]));
      } else r = ba(i);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function ba(s16) {
  return typeof HTMLImageElement < "u" && s16 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s16 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s16 instanceof ImageBitmap ? qf.getDataURL(s16) : s16.data ? { data: Array.from(s16.data), width: s16.width, height: s16.height, type: s16.data.constructor.name } : (Pt("Texture: Unable to serialize Texture."), {});
}
let jf = 0;
const Aa = new k();
class Ve extends Qi {
  constructor(t = Ve.DEFAULT_IMAGE, e = Ve.DEFAULT_MAPPING, n = ei, i = ei, r = ze, a = Hi, o = bn, l = on, c = Ve.DEFAULT_ANISOTROPY, h = xi) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: jf++ }), this.uuid = dr(), this.name = "", this.source = new bl(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Lt(0, 0), this.repeat = new Lt(1, 1), this.center = new Lt(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ft(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Aa).x;
  }
  get height() {
    return this.source.getSize(Aa).y;
  }
  get depth() {
    return this.source.getSize(Aa).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  setValues(t) {
    for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);
        continue;
      }
      const i = this[e];
      if (i === void 0) {
        Pt(`Texture.setValues(): property '${e}' does not exist.`);
        continue;
      }
      i && n && i.isVector2 && n.isVector2 || i && n && i.isVector3 && n.isVector3 || i && n && i.isMatrix3 && n.isMatrix3 ? i.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Rh) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case er:
        t.x = t.x - Math.floor(t.x);
        break;
      case ei:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case vo:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case er:
        t.y = t.y - Math.floor(t.y);
        break;
      case ei:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case vo:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
Ve.DEFAULT_IMAGE = null;
Ve.DEFAULT_MAPPING = Rh;
Ve.DEFAULT_ANISOTROPY = 1;
class _e {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    _e.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const l = t.elements, c = l[0], h = l[4], f = l[8], u = l[1], m = l[5], _ = l[9], g = l[2], p = l[6], d = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - g) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + g) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + m + d - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const E = (c + 1) / 2, S = (m + 1) / 2, b = (d + 1) / 2, A = (h + u) / 4, w = (f + g) / 4, x = (_ + p) / 4;
      return E > S && E > b ? E < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(E), i = A / n, r = w / n) : S > b ? S < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(S), n = A / i, r = x / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(b), n = w / r, i = x / r), this.set(n, i, r, e), this;
    }
    let M = Math.sqrt((p - _) * (p - _) + (f - g) * (f - g) + (u - h) * (u - h));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (p - _) / M, this.y = (f - g) / M, this.z = (u - h) / M, this.w = Math.acos((c + m + d - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Gt(this.x, t.x, e.x), this.y = Gt(this.y, t.y, e.y), this.z = Gt(this.z, t.z, e.z), this.w = Gt(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = Gt(this.x, t, e), this.y = Gt(this.y, t, e), this.z = Gt(this.z, t, e), this.w = Gt(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Gt(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Zf extends Qi {
  constructor(t = 1, e = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: ze, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new _e(0, 0, t, e), this.scissorTest = false, this.viewport = new _e(0, 0, t, e), this.textures = [];
    const i = { width: t, height: e, depth: n.depth }, r = new Ve(i), a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = { minFilter: ze, generateMipmaps: false, flipY: false, internalFormat: null };
    t.mapping !== void 0 && (e.mapping = t.mapping), t.wrapS !== void 0 && (e.wrapS = t.wrapS), t.wrapT !== void 0 && (e.wrapT = t.wrapT), t.wrapR !== void 0 && (e.wrapR = t.wrapR), t.magFilter !== void 0 && (e.magFilter = t.magFilter), t.minFilter !== void 0 && (e.minFilter = t.minFilter), t.format !== void 0 && (e.format = t.format), t.type !== void 0 && (e.type = t.type), t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy), t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace), t.flipY !== void 0 && (e.flipY = t.flipY), t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps), t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(e);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n, this.textures[i].isData3DTexture !== true && (this.textures[i].isArrayTexture = this.textures[i].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let e = 0, n = t.textures.length; e < n; e++) {
      this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = true, this.textures[e].renderTarget = this;
      const i = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new bl(i);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bn extends Zf {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class Bh extends Ve {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ne, this.minFilter = Ne, this.wrapR = ei, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class $f extends Ve {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ne, this.minFilter = Ne, this.wrapR = ei, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class xe {
  constructor(t, e, n, i, r, a, o, l, c, h, f, u, m, _, g, p) {
    xe.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, a, o, l, c, h, f, u, m, _, g, p);
  }
  set(t, e, n, i, r, a, o, l, c, h, f, u, m, _, g, p) {
    const d = this.elements;
    return d[0] = t, d[4] = e, d[8] = n, d[12] = i, d[1] = r, d[5] = a, d[9] = o, d[13] = l, d[2] = c, d[6] = h, d[10] = f, d[14] = u, d[3] = m, d[7] = _, d[11] = g, d[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new xe().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return this.determinant() === 0 ? (t.set(1, 0, 0), e.set(0, 1, 0), n.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    if (t.determinant() === 0) return this.identity();
    const e = this.elements, n = t.elements, i = 1 / rs.setFromMatrixColumn(t, 0).length(), r = 1 / rs.setFromMatrixColumn(t, 1).length(), a = 1 / rs.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), f = Math.sin(r);
    if (t.order === "XYZ") {
      const u = a * h, m = a * f, _ = o * h, g = o * f;
      e[0] = l * h, e[4] = -l * f, e[8] = c, e[1] = m + _ * c, e[5] = u - g * c, e[9] = -o * l, e[2] = g - u * c, e[6] = _ + m * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const u = l * h, m = l * f, _ = c * h, g = c * f;
      e[0] = u + g * o, e[4] = _ * o - m, e[8] = a * c, e[1] = a * f, e[5] = a * h, e[9] = -o, e[2] = m * o - _, e[6] = g + u * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const u = l * h, m = l * f, _ = c * h, g = c * f;
      e[0] = u - g * o, e[4] = -a * f, e[8] = _ + m * o, e[1] = m + _ * o, e[5] = a * h, e[9] = g - u * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const u = a * h, m = a * f, _ = o * h, g = o * f;
      e[0] = l * h, e[4] = _ * c - m, e[8] = u * c + g, e[1] = l * f, e[5] = g * c + u, e[9] = m * c - _, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const u = a * l, m = a * c, _ = o * l, g = o * c;
      e[0] = l * h, e[4] = g - u * f, e[8] = _ * f + m, e[1] = f, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = m * f + _, e[10] = u - g * f;
    } else if (t.order === "XZY") {
      const u = a * l, m = a * c, _ = o * l, g = o * c;
      e[0] = l * h, e[4] = -f, e[8] = c * h, e[1] = u * f + g, e[5] = a * h, e[9] = m * f - _, e[2] = _ * f - m, e[6] = o * h, e[10] = g * f + u;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Jf, t, Qf);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return nn.subVectors(t, e), nn.lengthSq() === 0 && (nn.z = 1), nn.normalize(), ui.crossVectors(n, nn), ui.lengthSq() === 0 && (Math.abs(n.z) === 1 ? nn.x += 1e-4 : nn.z += 1e-4, nn.normalize(), ui.crossVectors(n, nn)), ui.normalize(), vr.crossVectors(nn, ui), i[0] = ui.x, i[4] = vr.x, i[8] = nn.x, i[1] = ui.y, i[5] = vr.y, i[9] = nn.y, i[2] = ui.z, i[6] = vr.z, i[10] = nn.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], f = n[5], u = n[9], m = n[13], _ = n[2], g = n[6], p = n[10], d = n[14], M = n[3], E = n[7], S = n[11], b = n[15], A = i[0], w = i[4], x = i[8], y = i[12], z = i[1], C = i[5], L = i[9], U = i[13], V = i[2], O = i[6], B = i[10], N = i[14], Z = i[3], $ = i[7], at = i[11], ut = i[15];
    return r[0] = a * A + o * z + l * V + c * Z, r[4] = a * w + o * C + l * O + c * $, r[8] = a * x + o * L + l * B + c * at, r[12] = a * y + o * U + l * N + c * ut, r[1] = h * A + f * z + u * V + m * Z, r[5] = h * w + f * C + u * O + m * $, r[9] = h * x + f * L + u * B + m * at, r[13] = h * y + f * U + u * N + m * ut, r[2] = _ * A + g * z + p * V + d * Z, r[6] = _ * w + g * C + p * O + d * $, r[10] = _ * x + g * L + p * B + d * at, r[14] = _ * y + g * U + p * N + d * ut, r[3] = M * A + E * z + S * V + b * Z, r[7] = M * w + E * C + S * O + b * $, r[11] = M * x + E * L + S * B + b * at, r[15] = M * y + E * U + S * N + b * ut, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], f = t[6], u = t[10], m = t[14], _ = t[3], g = t[7], p = t[11], d = t[15], M = l * m - c * u, E = o * m - c * f, S = o * u - l * f, b = a * m - c * h, A = a * u - l * h, w = a * f - o * h;
    return e * (g * M - p * E + d * S) - n * (_ * M - p * b + d * A) + i * (_ * E - g * b + d * w) - r * (_ * S - g * A + p * w);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], f = t[9], u = t[10], m = t[11], _ = t[12], g = t[13], p = t[14], d = t[15], M = e * o - n * a, E = e * l - i * a, S = e * c - r * a, b = n * l - i * o, A = n * c - r * o, w = i * c - r * l, x = h * g - f * _, y = h * p - u * _, z = h * d - m * _, C = f * p - u * g, L = f * d - m * g, U = u * d - m * p, V = M * U - E * L + S * C + b * z - A * y + w * x;
    if (V === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const O = 1 / V;
    return t[0] = (o * U - l * L + c * C) * O, t[1] = (i * L - n * U - r * C) * O, t[2] = (g * w - p * A + d * b) * O, t[3] = (u * A - f * w - m * b) * O, t[4] = (l * z - a * U - c * y) * O, t[5] = (e * U - i * z + r * y) * O, t[6] = (p * S - _ * w - d * E) * O, t[7] = (h * w - u * S + m * E) * O, t[8] = (a * L - o * z + c * x) * O, t[9] = (n * z - e * L - r * x) * O, t[10] = (_ * A - g * S + d * M) * O, t[11] = (f * S - h * A - m * M) * O, t[12] = (o * y - a * C - l * x) * O, t[13] = (e * C - n * y + i * x) * O, t[14] = (g * E - _ * b - p * M) * O, t[15] = (h * b - f * E + u * M) * O, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = 1 - n, a = t.x, o = t.y, l = t.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, h = a + a, f = o + o, u = r * c, m = r * h, _ = r * f, g = a * h, p = a * f, d = o * f, M = l * c, E = l * h, S = l * f, b = n.x, A = n.y, w = n.z;
    return i[0] = (1 - (g + d)) * b, i[1] = (m + S) * b, i[2] = (_ - E) * b, i[3] = 0, i[4] = (m - S) * A, i[5] = (1 - (u + d)) * A, i[6] = (p + M) * A, i[7] = 0, i[8] = (_ + E) * w, i[9] = (p - M) * w, i[10] = (1 - (u + g)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    t.x = i[12], t.y = i[13], t.z = i[14];
    const r = this.determinant();
    if (r === 0) return n.set(1, 1, 1), e.identity(), this;
    let a = rs.set(i[0], i[1], i[2]).length();
    const o = rs.set(i[4], i[5], i[6]).length(), l = rs.set(i[8], i[9], i[10]).length();
    r < 0 && (a = -a), Mn.copy(this);
    const c = 1 / a, h = 1 / o, f = 1 / l;
    return Mn.elements[0] *= c, Mn.elements[1] *= c, Mn.elements[2] *= c, Mn.elements[4] *= h, Mn.elements[5] *= h, Mn.elements[6] *= h, Mn.elements[8] *= f, Mn.elements[9] *= f, Mn.elements[10] *= f, e.setFromRotationMatrix(Mn), n.x = a, n.y = o, n.z = l, this;
  }
  makePerspective(t, e, n, i, r, a, o = Nn, l = false) {
    const c = this.elements, h = 2 * r / (e - t), f = 2 * r / (n - i), u = (e + t) / (e - t), m = (n + i) / (n - i);
    let _, g;
    if (l) _ = r / (a - r), g = a * r / (a - r);
    else if (o === Nn) _ = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === sr) _ = -a / (a - r), g = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = f, c[9] = m, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = _, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, r, a, o = Nn, l = false) {
    const c = this.elements, h = 2 / (e - t), f = 2 / (n - i), u = -(e + t) / (e - t), m = -(n + i) / (n - i);
    let _, g;
    if (l) _ = 1 / (a - r), g = a / (a - r);
    else if (o === Nn) _ = -2 / (a - r), g = -(a + r) / (a - r);
    else if (o === sr) _ = -1 / (a - r), g = -r / (a - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = u, c[1] = 0, c[5] = f, c[9] = 0, c[13] = m, c[2] = 0, c[6] = 0, c[10] = _, c[14] = g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const rs = new k(), Mn = new xe(), Jf = new k(0, 0, 0), Qf = new k(1, 1, 1), ui = new k(), vr = new k(), nn = new k(), _c = new xe(), gc = new Ai();
class Gn {
  constructor(t = 0, e = 0, n = 0, i = Gn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    const i = t.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], f = i[2], u = i[6], m = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Gt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Gt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Gt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Gt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Gt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Gt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        Pt("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return _c.makeRotationFromQuaternion(t), this.setFromRotationMatrix(_c, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return gc.setFromEuler(this), this.setFromQuaternion(gc, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Gn.DEFAULT_ORDER = "XYZ";
class kh {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let td = 0;
const xc = new k(), as = new Ai(), Kn = new xe(), Mr = new k(), Vs = new k(), ed = new k(), nd = new Ai(), vc = new k(1, 0, 0), Mc = new k(0, 1, 0), Sc = new k(0, 0, 1), yc = { type: "added" }, id = { type: "removed" }, os = { type: "childadded", child: null }, wa = { type: "childremoved", child: null };
class Le extends Qi {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: td++ }), this.uuid = dr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Le.DEFAULT_UP.clone();
    const t = new k(), e = new Gn(), n = new Ai(), i = new k(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new xe() }, normalMatrix: { value: new Ft() } }), this.matrix = new xe(), this.matrixWorld = new xe(), this.matrixAutoUpdate = Le.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new kh(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return as.setFromAxisAngle(t, e), this.quaternion.multiply(as), this;
  }
  rotateOnWorldAxis(t, e) {
    return as.setFromAxisAngle(t, e), this.quaternion.premultiply(as), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(vc, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Mc, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Sc, t);
  }
  translateOnAxis(t, e) {
    return xc.copy(t).applyQuaternion(this.quaternion), this.position.add(xc.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(vc, t);
  }
  translateY(t) {
    return this.translateOnAxis(Mc, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Sc, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(Kn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Mr.copy(t) : Mr.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), Vs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Kn.lookAt(Vs, Mr, this.up) : Kn.lookAt(Mr, Vs, this.up), this.quaternion.setFromRotationMatrix(Kn), i && (Kn.extractRotation(i.matrixWorld), as.setFromRotationMatrix(Kn), this.quaternion.premultiply(as.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (Zt("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(yc), os.child = t, this.dispatchEvent(os), os.child = null) : Zt("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(id), wa.child = t, this.dispatchEvent(wa), wa.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), Kn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), Kn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Kn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(yc), os.child = t, this.dispatchEvent(os), os.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++) i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Vs, t, ed), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Vs, nd, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const t = this.pivot;
    if (t !== null) {
      const e = t.x, n = t.y, i = t.z, r = this.matrix.elements;
      r[12] += e - r[0] * e - r[4] * n - r[8] * i, r[13] += n - r[1] * e - r[5] * n - r[9] * i, r[14] += i - r[2] * e - r[6] * n - r[10] * i;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), this.static !== false && (i.static = this.static), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.pivot !== null && (i.pivot = this.pivot.toArray()), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.morphTargetDictionary !== void 0 && (i.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (i.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), i.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(t), i.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i.boundingBox = this.boundingBox.toJSON()));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const f = l[c];
          r(t.shapes, f);
        }
        else r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(t.materials, this.material[l]));
      i.material = o;
    } else i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), f = a(t.shapes), u = a(t.skeletons), m = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), u.length > 0 && (n.skeletons = u), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), t.pivot !== null && (this.pivot = t.pivot.clone()), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
      const i = t.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
Le.DEFAULT_UP = new k(0, 1, 0);
Le.DEFAULT_MATRIX_AUTO_UPDATE = true;
Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
class ie extends Le {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const sd = { type: "move" };
class Ra {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ie(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ie(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new k(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new k()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ie(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new k(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new k()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let i = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = true;
        for (const g of t.hand.values()) {
          const p = e.getJointPose(g, n), d = this._getHandJoint(c, g);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = true, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], u = h.position.distanceTo(f.position), m = 0.02, _ = 5e-3;
        c.inputState.pinching && u > m + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && u <= m - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(sd)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new ie();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const zh = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, fi = { h: 0, s: 0, l: 0 }, Sr = { h: 0, s: 0, l: 0 };
function Ca(s16, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s16 + (t - s16) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s16 + (t - s16) * 6 * (2 / 3 - e) : s16;
}
class Ht {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const i = t;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = pn) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Kt.colorSpaceToWorking(this, e), this;
  }
  setRGB(t, e, n, i = Kt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Kt.colorSpaceToWorking(this, i), this;
  }
  setHSL(t, e, n, i = Kt.workingColorSpace) {
    if (t = Wf(t, 1), e = Gt(e, 0, 1), n = Gt(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = Ca(a, r, t + 1 / 3), this.g = Ca(a, r, t), this.b = Ca(a, r, t - 1 / 3);
    }
    return Kt.colorSpaceToWorking(this, i), this;
  }
  setStyle(t, e = pn) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && Pt("Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
          break;
        default:
          Pt("Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = i[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(r, 16), e);
      Pt("Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = pn) {
    const n = zh[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : Pt("Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = ii(t.r), this.g = ii(t.g), this.b = ii(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Es(t.r), this.g = Es(t.g), this.b = Es(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = pn) {
    return Kt.workingToColorSpace(Be.copy(this), t), Math.round(Gt(Be.r * 255, 0, 255)) * 65536 + Math.round(Gt(Be.g * 255, 0, 255)) * 256 + Math.round(Gt(Be.b * 255, 0, 255));
  }
  getHexString(t = pn) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Kt.workingColorSpace) {
    Kt.workingToColorSpace(Be.copy(this), e);
    const n = Be.r, i = Be.g, r = Be.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const f = a - o;
      switch (c = h <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          l = (i - r) / f + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / f + 2;
          break;
        case r:
          l = (n - i) / f + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Kt.workingColorSpace) {
    return Kt.workingToColorSpace(Be.copy(this), e), t.r = Be.r, t.g = Be.g, t.b = Be.b, t;
  }
  getStyle(t = pn) {
    Kt.workingToColorSpace(Be.copy(this), t);
    const e = Be.r, n = Be.g, i = Be.b;
    return t !== pn ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(fi), this.setHSL(fi.h + t, fi.s + e, fi.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(fi), t.getHSL(Sr);
    const n = ya(fi.h, Sr.h, e), i = ya(fi.s, Sr.s, e), r = ya(fi.l, Sr.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, i = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Be = new Ht();
Ht.NAMES = zh;
class rd extends Le {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Gn(), this.environmentIntensity = 1, this.environmentRotation = new Gn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
const Sn = new k(), jn = new k(), Pa = new k(), Zn = new k(), ls = new k(), cs = new k(), Ec = new k(), Da = new k(), La = new k(), Ia = new k(), Ua = new _e(), Na = new _e(), Fa = new _e();
class Tn {
  constructor(t = new k(), e = new k(), n = new k()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), Sn.subVectors(t, e), i.cross(Sn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    Sn.subVectors(i, e), jn.subVectors(n, e), Pa.subVectors(t, e);
    const a = Sn.dot(Sn), o = Sn.dot(jn), l = Sn.dot(Pa), c = jn.dot(jn), h = jn.dot(Pa), f = a * c - o * o;
    if (f === 0) return r.set(0, 0, 0), null;
    const u = 1 / f, m = (c * l - o * h) * u, _ = (a * h - o * l) * u;
    return r.set(1 - m - _, _, m);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, Zn) === null ? false : Zn.x >= 0 && Zn.y >= 0 && Zn.x + Zn.y <= 1;
  }
  static getInterpolation(t, e, n, i, r, a, o, l) {
    return this.getBarycoord(t, e, n, i, Zn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Zn.x), l.addScaledVector(a, Zn.y), l.addScaledVector(o, Zn.z), l);
  }
  static getInterpolatedAttribute(t, e, n, i, r, a) {
    return Ua.setScalar(0), Na.setScalar(0), Fa.setScalar(0), Ua.fromBufferAttribute(t, e), Na.fromBufferAttribute(t, n), Fa.fromBufferAttribute(t, i), a.setScalar(0), a.addScaledVector(Ua, r.x), a.addScaledVector(Na, r.y), a.addScaledVector(Fa, r.z), a;
  }
  static isFrontFacing(t, e, n, i) {
    return Sn.subVectors(n, e), jn.subVectors(t, e), Sn.cross(jn).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return Sn.subVectors(this.c, this.b), jn.subVectors(this.a, this.b), Sn.cross(jn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Tn.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Tn.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return Tn.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return Tn.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Tn.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    ls.subVectors(i, n), cs.subVectors(r, n), Da.subVectors(t, n);
    const l = ls.dot(Da), c = cs.dot(Da);
    if (l <= 0 && c <= 0) return e.copy(n);
    La.subVectors(t, i);
    const h = ls.dot(La), f = cs.dot(La);
    if (h >= 0 && f <= h) return e.copy(i);
    const u = l * f - h * c;
    if (u <= 0 && l >= 0 && h <= 0) return a = l / (l - h), e.copy(n).addScaledVector(ls, a);
    Ia.subVectors(t, r);
    const m = ls.dot(Ia), _ = cs.dot(Ia);
    if (_ >= 0 && m <= _) return e.copy(r);
    const g = m * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0) return o = c / (c - _), e.copy(n).addScaledVector(cs, o);
    const p = h * _ - m * f;
    if (p <= 0 && f - h >= 0 && m - _ >= 0) return Ec.subVectors(r, i), o = (f - h) / (f - h + (m - _)), e.copy(i).addScaledVector(Ec, o);
    const d = 1 / (p + g + u);
    return a = g * d, o = u * d, e.copy(n).addScaledVector(ls, a).addScaledVector(cs, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
class pr {
  constructor(t = new k(1 / 0, 1 / 0, 1 / 0), e = new k(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(yn.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(yn.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = yn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === true && r !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, yn) : yn.fromBufferAttribute(r, a), yn.applyMatrix4(t.matrixWorld), this.expandByPoint(yn);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), yr.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), yr.copy(n.boundingBox)), yr.applyMatrix4(t.matrixWorld), this.union(yr);
    }
    const i = t.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, yn), yn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(Gs), Er.subVectors(this.max, Gs), hs.subVectors(t.a, Gs), us.subVectors(t.b, Gs), fs.subVectors(t.c, Gs), di.subVectors(us, hs), pi.subVectors(fs, us), Li.subVectors(hs, fs);
    let e = [0, -di.z, di.y, 0, -pi.z, pi.y, 0, -Li.z, Li.y, di.z, 0, -di.x, pi.z, 0, -pi.x, Li.z, 0, -Li.x, -di.y, di.x, 0, -pi.y, pi.x, 0, -Li.y, Li.x, 0];
    return !Oa(e, hs, us, fs, Er) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Oa(e, hs, us, fs, Er)) ? false : (Tr.crossVectors(di, pi), e = [Tr.x, Tr.y, Tr.z], Oa(e, hs, us, fs, Er));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, yn).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(yn).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : ($n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), $n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), $n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), $n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), $n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), $n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), $n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), $n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints($n), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t) {
    return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
  }
}
const $n = [new k(), new k(), new k(), new k(), new k(), new k(), new k(), new k()], yn = new k(), yr = new pr(), hs = new k(), us = new k(), fs = new k(), di = new k(), pi = new k(), Li = new k(), Gs = new k(), Er = new k(), Tr = new k(), Ii = new k();
function Oa(s16, t, e, n, i) {
  for (let r = 0, a = s16.length - 3; r <= a; r += 3) {
    Ii.fromArray(s16, r);
    const o = i.x * Math.abs(Ii.x) + i.y * Math.abs(Ii.y) + i.z * Math.abs(Ii.z), l = t.dot(Ii), c = e.dot(Ii), h = n.dot(Ii);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const Ee = new k(), br = new Lt();
let ad = 0;
class kn {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: ad++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = cc, this.updateRanges = [], this.gpuType = Un, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) br.fromBufferAttribute(this, e), br.applyMatrix3(t), this.setXY(e, br.x, br.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) Ee.fromBufferAttribute(this, e), Ee.applyMatrix3(t), this.setXYZ(e, Ee.x, Ee.y, Ee.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) Ee.fromBufferAttribute(this, e), Ee.applyMatrix4(t), this.setXYZ(e, Ee.x, Ee.y, Ee.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) Ee.fromBufferAttribute(this, e), Ee.applyNormalMatrix(t), this.setXYZ(e, Ee.x, Ee.y, Ee.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) Ee.fromBufferAttribute(this, e), Ee.transformDirection(t), this.setXYZ(e, Ee.x, Ee.y, Ee.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = zs(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = qe(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = zs(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = qe(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = zs(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = qe(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = zs(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = qe(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = zs(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = qe(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = qe(e, this.array), n = qe(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = qe(e, this.array), n = qe(n, this.array), i = qe(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t *= this.itemSize, this.normalized && (e = qe(e, this.array), n = qe(n, this.array), i = qe(i, this.array), r = qe(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== cc && (t.usage = this.usage), t;
  }
}
class Vh extends kn {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Gh extends kn {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Ye extends kn {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
const od = new pr(), Hs = new k(), Ba = new k();
class Al {
  constructor(t = new k(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : od.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, a = t.length; r < a; r++) i = Math.max(i, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
    Hs.subVectors(t, this.center);
    const e = Hs.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Hs, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Ba.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Hs.copy(t.center).add(Ba)), this.expandByPoint(Hs.copy(t.center).sub(Ba))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(t) {
    return this.radius = t.radius, this.center.fromArray(t.center), this;
  }
}
let ld = 0;
const fn = new xe(), ka = new Le(), ds = new k(), sn = new pr(), Ws = new pr(), Pe = new k();
class An extends Qi {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: ld++ }), this.uuid = dr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (zf(t) ? Gh : Vh)(t, 1) : this.index = t, this;
  }
  setIndirect(t, e = 0) {
    return this.indirect = t, this.indirectOffset = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ft().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return fn.makeRotationFromQuaternion(t), this.applyMatrix4(fn), this;
  }
  rotateX(t) {
    return fn.makeRotationX(t), this.applyMatrix4(fn), this;
  }
  rotateY(t) {
    return fn.makeRotationY(t), this.applyMatrix4(fn), this;
  }
  rotateZ(t) {
    return fn.makeRotationZ(t), this.applyMatrix4(fn), this;
  }
  translate(t, e, n) {
    return fn.makeTranslation(t, e, n), this.applyMatrix4(fn), this;
  }
  scale(t, e, n) {
    return fn.makeScale(t, e, n), this.applyMatrix4(fn), this;
  }
  lookAt(t) {
    return ka.lookAt(t), ka.updateMatrix(), this.applyMatrix4(ka.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ds).negate(), this.translate(ds.x, ds.y, ds.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let i = 0, r = t.length; i < r; i++) {
        const a = t[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Ye(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let i = 0; i < n; i++) {
        const r = t[i];
        e.setXYZ(i, r.x, r.y, r.z || 0);
      }
      t.length > e.count && Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new pr());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new k(-1 / 0, -1 / 0, -1 / 0), new k(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, i = e.length; n < i; n++) {
        const r = e[n];
        sn.setFromBufferAttribute(r), this.morphTargetsRelative ? (Pe.addVectors(this.boundingBox.min, sn.min), this.boundingBox.expandByPoint(Pe), Pe.addVectors(this.boundingBox.max, sn.max), this.boundingBox.expandByPoint(Pe)) : (this.boundingBox.expandByPoint(sn.min), this.boundingBox.expandByPoint(sn.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Al());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new k(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (sn.setFromBufferAttribute(t), e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r];
        Ws.setFromBufferAttribute(o), this.morphTargetsRelative ? (Pe.addVectors(sn.min, Ws.min), sn.expandByPoint(Pe), Pe.addVectors(sn.max, Ws.max), sn.expandByPoint(Pe)) : (sn.expandByPoint(Ws.min), sn.expandByPoint(Ws.max));
      }
      sn.getCenter(n);
      let i = 0;
      for (let r = 0, a = t.count; r < a; r++) Pe.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(Pe));
      if (e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) Pe.fromBufferAttribute(o, c), l && (ds.fromBufferAttribute(t, c), Pe.add(ds)), i = Math.max(i, n.distanceToSquared(Pe));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, i = e.normal, r = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new kn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let x = 0; x < n.count; x++) o[x] = new k(), l[x] = new k();
    const c = new k(), h = new k(), f = new k(), u = new Lt(), m = new Lt(), _ = new Lt(), g = new k(), p = new k();
    function d(x, y, z) {
      c.fromBufferAttribute(n, x), h.fromBufferAttribute(n, y), f.fromBufferAttribute(n, z), u.fromBufferAttribute(r, x), m.fromBufferAttribute(r, y), _.fromBufferAttribute(r, z), h.sub(c), f.sub(c), m.sub(u), _.sub(u);
      const C = 1 / (m.x * _.y - _.x * m.y);
      isFinite(C) && (g.copy(h).multiplyScalar(_.y).addScaledVector(f, -m.y).multiplyScalar(C), p.copy(f).multiplyScalar(m.x).addScaledVector(h, -_.x).multiplyScalar(C), o[x].add(g), o[y].add(g), o[z].add(g), l[x].add(p), l[y].add(p), l[z].add(p));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: t.count }]);
    for (let x = 0, y = M.length; x < y; ++x) {
      const z = M[x], C = z.start, L = z.count;
      for (let U = C, V = C + L; U < V; U += 3) d(t.getX(U + 0), t.getX(U + 1), t.getX(U + 2));
    }
    const E = new k(), S = new k(), b = new k(), A = new k();
    function w(x) {
      b.fromBufferAttribute(i, x), A.copy(b);
      const y = o[x];
      E.copy(y), E.sub(b.multiplyScalar(b.dot(y))).normalize(), S.crossVectors(A, y);
      const C = S.dot(l[x]) < 0 ? -1 : 1;
      a.setXYZW(x, E.x, E.y, E.z, C);
    }
    for (let x = 0, y = M.length; x < y; ++x) {
      const z = M[x], C = z.start, L = z.count;
      for (let U = C, V = C + L; U < V; U += 3) w(t.getX(U + 0)), w(t.getX(U + 1)), w(t.getX(U + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new kn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let u = 0, m = n.count; u < m; u++) n.setXYZ(u, 0, 0, 0);
      const i = new k(), r = new k(), a = new k(), o = new k(), l = new k(), c = new k(), h = new k(), f = new k();
      if (t) for (let u = 0, m = t.count; u < m; u += 3) {
        const _ = t.getX(u + 0), g = t.getX(u + 1), p = t.getX(u + 2);
        i.fromBufferAttribute(e, _), r.fromBufferAttribute(e, g), a.fromBufferAttribute(e, p), h.subVectors(a, r), f.subVectors(i, r), h.cross(f), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, p), o.add(h), l.add(h), c.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let u = 0, m = e.count; u < m; u += 3) i.fromBufferAttribute(e, u + 0), r.fromBufferAttribute(e, u + 1), a.fromBufferAttribute(e, u + 2), h.subVectors(a, r), f.subVectors(i, r), h.cross(f), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) Pe.fromBufferAttribute(t, e), Pe.normalize(), t.setXYZ(e, Pe.x, Pe.y, Pe.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, h = o.itemSize, f = o.normalized, u = new c.constructor(l.length * h);
      let m = 0, _ = 0;
      for (let g = 0, p = l.length; g < p; g++) {
        o.isInterleavedBufferAttribute ? m = l[g] * o.data.stride + o.offset : m = l[g] * h;
        for (let d = 0; d < h; d++) u[_++] = c[m++];
      }
      return new kn(u, h, f);
    }
    if (this.index === null) return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new An(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, f = c.length; h < f; h++) {
        const u = c[h], m = t(u, n);
        l.push(m);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const i = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let f = 0, u = c.length; f < u; f++) {
        const m = c[f];
        h.push(m.toJSON(t.data));
      }
      h.length > 0 && (i[l] = h, r = true);
    }
    r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const i = t.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], f = r[c];
      for (let u = 0, m = f.length; u < m; u++) h.push(f[u].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
let cd = 0;
class Bs extends Qi {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: cd++ }), this.uuid = dr(), this.name = "", this.type = "Material", this.blending = ys, this.side = bi, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = co, this.blendDst = ho, this.blendEquation = Vi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ht(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Rs, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = lc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = is, this.stencilZFail = is, this.stencilZPass = is, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0) for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        Pt(`Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const i = this[e];
      if (i === void 0) {
        Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ys && (n.blending = this.blending), this.side !== bi && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== co && (n.blendSrc = this.blendSrc), this.blendDst !== ho && (n.blendDst = this.blendDst), this.blendEquation !== Vi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Rs && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== lc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== is && (n.stencilFail = this.stencilFail), this.stencilZFail !== is && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== is && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.allowOverride === false && (n.allowOverride = false), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const r = i(t.textures), a = i(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.allowOverride = t.allowOverride, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
}
const Jn = new k(), za = new k(), Ar = new k(), mi = new k(), Va = new k(), wr = new k(), Ga = new k();
class Hh {
  constructor(t = new k(), e = new k(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Jn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Jn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Jn.copy(this.origin).addScaledVector(this.direction, e), Jn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    za.copy(t).add(e).multiplyScalar(0.5), Ar.copy(e).sub(t).normalize(), mi.copy(this.origin).sub(za);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(Ar), o = mi.dot(this.direction), l = -mi.dot(Ar), c = mi.lengthSq(), h = Math.abs(1 - a * a);
    let f, u, m, _;
    if (h > 0) if (f = a * l - o, u = a * o - l, _ = r * h, f >= 0) if (u >= -_) if (u <= _) {
      const g = 1 / h;
      f *= g, u *= g, m = f * (f + a * u + 2 * o) + u * (a * f + u + 2 * l) + c;
    } else u = r, f = Math.max(0, -(a * u + o)), m = -f * f + u * (u + 2 * l) + c;
    else u = -r, f = Math.max(0, -(a * u + o)), m = -f * f + u * (u + 2 * l) + c;
    else u <= -_ ? (f = Math.max(0, -(-a * r + o)), u = f > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -f * f + u * (u + 2 * l) + c) : u <= _ ? (f = 0, u = Math.min(Math.max(-r, -l), r), m = u * (u + 2 * l) + c) : (f = Math.max(0, -(a * r + o)), u = f > 0 ? r : Math.min(Math.max(-r, -l), r), m = -f * f + u * (u + 2 * l) + c);
    else u = a > 0 ? -r : r, f = Math.max(0, -(a * u + o)), m = -f * f + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), i && i.copy(za).addScaledVector(Ar, u), m;
  }
  intersectSphere(t, e) {
    Jn.subVectors(t.center, this.origin);
    const n = Jn.dot(this.direction), i = Jn.dot(Jn) - n * n, r = t.radius * t.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return t.radius < 0 ? false : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), f >= 0 ? (o = (t.min.z - u.z) * f, l = (t.max.z - u.z) * f) : (o = (t.max.z - u.z) * f, l = (t.min.z - u.z) * f), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Jn) !== null;
  }
  intersectTriangle(t, e, n, i, r) {
    Va.subVectors(e, t), wr.subVectors(n, t), Ga.crossVectors(Va, wr);
    let a = this.direction.dot(Ga), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    mi.subVectors(this.origin, t);
    const l = o * this.direction.dot(wr.crossVectors(mi, wr));
    if (l < 0) return null;
    const c = o * this.direction.dot(Va.cross(mi));
    if (c < 0 || l + c > a) return null;
    const h = -o * mi.dot(Ga);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ua extends Bs {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Gn(), this.combine = Sh, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const Tc = new xe(), Ui = new Hh(), Rr = new Al(), bc = new k(), Cr = new k(), Pr = new k(), Dr = new k(), Ha = new k(), Lr = new k(), Ac = new k(), Ir = new k();
class Mt extends Le {
  constructor(t = new An(), e = new ua()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Lr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], f = r[l];
        h !== 0 && (Ha.fromBufferAttribute(f, t), a ? Lr.addScaledVector(Ha, h) : Lr.addScaledVector(Ha.sub(e), h));
      }
      e.add(Lr);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Rr.copy(n.boundingSphere), Rr.applyMatrix4(r), Ui.copy(t.ray).recast(t.near), !(Rr.containsPoint(Ui.origin) === false && (Ui.intersectSphere(Rr, bc) === null || Ui.origin.distanceToSquared(bc) > (t.far - t.near) ** 2)) && (Tc.copy(r).invert(), Ui.copy(t.ray).applyMatrix4(Tc), !(n.boundingBox !== null && Ui.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, Ui)));
  }
  _computeIntersections(t, e, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, f = r.attributes.normal, u = r.groups, m = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let _ = 0, g = u.length; _ < g; _++) {
      const p = u[_], d = a[p.materialIndex], M = Math.max(p.start, m.start), E = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let S = M, b = E; S < b; S += 3) {
        const A = o.getX(S), w = o.getX(S + 1), x = o.getX(S + 2);
        i = Ur(this, d, t, n, c, h, f, A, w, x), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = p.materialIndex, e.push(i));
      }
    }
    else {
      const _ = Math.max(0, m.start), g = Math.min(o.count, m.start + m.count);
      for (let p = _, d = g; p < d; p += 3) {
        const M = o.getX(p), E = o.getX(p + 1), S = o.getX(p + 2);
        i = Ur(this, a, t, n, c, h, f, M, E, S), i && (i.faceIndex = Math.floor(p / 3), e.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let _ = 0, g = u.length; _ < g; _++) {
      const p = u[_], d = a[p.materialIndex], M = Math.max(p.start, m.start), E = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let S = M, b = E; S < b; S += 3) {
        const A = S, w = S + 1, x = S + 2;
        i = Ur(this, d, t, n, c, h, f, A, w, x), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = p.materialIndex, e.push(i));
      }
    }
    else {
      const _ = Math.max(0, m.start), g = Math.min(l.count, m.start + m.count);
      for (let p = _, d = g; p < d; p += 3) {
        const M = p, E = p + 1, S = p + 2;
        i = Ur(this, a, t, n, c, h, f, M, E, S), i && (i.faceIndex = Math.floor(p / 3), e.push(i));
      }
    }
  }
}
function hd(s16, t, e, n, i, r, a, o) {
  let l;
  if (t.side === je ? l = n.intersectTriangle(a, r, i, true, o) : l = n.intersectTriangle(i, r, a, t.side === bi, o), l === null) return null;
  Ir.copy(o), Ir.applyMatrix4(s16.matrixWorld);
  const c = e.ray.origin.distanceTo(Ir);
  return c < e.near || c > e.far ? null : { distance: c, point: Ir.clone(), object: s16 };
}
function Ur(s16, t, e, n, i, r, a, o, l, c) {
  s16.getVertexPosition(o, Cr), s16.getVertexPosition(l, Pr), s16.getVertexPosition(c, Dr);
  const h = hd(s16, t, e, n, Cr, Pr, Dr, Ac);
  if (h) {
    const f = new k();
    Tn.getBarycoord(Ac, Cr, Pr, Dr, f), i && (h.uv = Tn.getInterpolatedAttribute(i, o, l, c, f, new Lt())), r && (h.uv1 = Tn.getInterpolatedAttribute(r, o, l, c, f, new Lt())), a && (h.normal = Tn.getInterpolatedAttribute(a, o, l, c, f, new k()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = { a: o, b: l, c, normal: new k(), materialIndex: 0 };
    Tn.getNormal(Cr, Pr, Dr, u.normal), h.face = u, h.barycoord = f;
  }
  return h;
}
class ud extends Ve {
  constructor(t = null, e = 1, n = 1, i, r, a, o, l, c = Ne, h = Ne, f, u) {
    super(null, a, o, l, c, h, i, r, f, u), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const Wa = new k(), fd = new k(), dd = new Ft();
class gi {
  constructor(t = new k(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = Wa.subVectors(n, e).cross(fd.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Wa), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || dd.getNormalMatrix(t), i = this.coplanarPoint(Wa).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ni = new Al(), pd = new Lt(0.5, 0.5), Nr = new k();
class wl {
  constructor(t = new gi(), e = new gi(), n = new gi(), i = new gi(), r = new gi(), a = new gi()) {
    this.planes = [t, e, n, i, r, a];
  }
  set(t, e, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = Nn, n = false) {
    const i = this.planes, r = t.elements, a = r[0], o = r[1], l = r[2], c = r[3], h = r[4], f = r[5], u = r[6], m = r[7], _ = r[8], g = r[9], p = r[10], d = r[11], M = r[12], E = r[13], S = r[14], b = r[15];
    if (i[0].setComponents(c - a, m - h, d - _, b - M).normalize(), i[1].setComponents(c + a, m + h, d + _, b + M).normalize(), i[2].setComponents(c + o, m + f, d + g, b + E).normalize(), i[3].setComponents(c - o, m - f, d - g, b - E).normalize(), n) i[4].setComponents(l, u, p, S).normalize(), i[5].setComponents(c - l, m - u, d - p, b - S).normalize();
    else if (i[4].setComponents(c - l, m - u, d - p, b - S).normalize(), e === Nn) i[5].setComponents(c + l, m + u, d + p, b + S).normalize();
    else if (e === sr) i[5].setComponents(l, u, p, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Ni);
  }
  intersectsSprite(t) {
    Ni.center.set(0, 0, 0);
    const e = pd.distanceTo(t.center);
    return Ni.radius = 0.7071067811865476 + e, Ni.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ni);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (Nr.x = i.normal.x > 0 ? t.max.x : t.min.x, Nr.y = i.normal.y > 0 ? t.max.y : t.min.y, Nr.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Nr) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wh extends Ve {
  constructor(t = [], e = Zi, n, i, r, a, o, l, c, h) {
    super(t, e, n, i, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class En extends Ve {
  constructor(t, e, n, i, r, a, o, l, c) {
    super(t, e, n, i, r, a, o, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class rr extends Ve {
  constructor(t, e, n = Vn, i, r, a, o = Ne, l = Ne, c, h = ai, f = 1) {
    if (h !== ai && h !== Wi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: t, height: e, depth: f };
    super(u, i, r, a, o, l, h, n, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new bl(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class md extends rr {
  constructor(t, e = Vn, n = Zi, i, r, a = Ne, o = Ne, l, c = ai) {
    const h = { width: t, height: t, depth: 1 }, f = [h, h, h, h, h, h];
    super(t, t, e, n, i, r, a, o, l, c), this.image = f, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Xh extends Ve {
  constructor(t = null) {
    super(), this.sourceTexture = t, this.isExternalTexture = true;
  }
  copy(t) {
    return super.copy(t), this.sourceTexture = t.sourceTexture, this;
  }
}
class Ot extends An {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: a };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], f = [];
    let u = 0, m = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, r, 0), _("z", "y", "x", 1, -1, n, e, -t, a, r, 1), _("x", "z", "y", 1, 1, t, n, e, i, a, 2), _("x", "z", "y", 1, -1, t, n, -e, i, a, 3), _("x", "y", "z", 1, -1, t, e, n, i, r, 4), _("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Ye(c, 3)), this.setAttribute("normal", new Ye(h, 3)), this.setAttribute("uv", new Ye(f, 2));
    function _(g, p, d, M, E, S, b, A, w, x, y) {
      const z = S / w, C = b / x, L = S / 2, U = b / 2, V = A / 2, O = w + 1, B = x + 1;
      let N = 0, Z = 0;
      const $ = new k();
      for (let at = 0; at < B; at++) {
        const ut = at * C - U;
        for (let ot = 0; ot < O; ot++) {
          const It = ot * z - L;
          $[g] = It * M, $[p] = ut * E, $[d] = V, c.push($.x, $.y, $.z), $[g] = 0, $[p] = 0, $[d] = A > 0 ? 1 : -1, h.push($.x, $.y, $.z), f.push(ot / w), f.push(1 - at / x), N += 1;
        }
      }
      for (let at = 0; at < x; at++) for (let ut = 0; ut < w; ut++) {
        const ot = u + ut + O * at, It = u + ut + O * (at + 1), Xt = u + (ut + 1) + O * (at + 1), Yt = u + (ut + 1) + O * at;
        l.push(ot, It, Yt), l.push(It, Xt, Yt), Z += 6;
      }
      o.addGroup(m, Z, y), m += Z, u += N;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ot(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
class si extends An {
  constructor(t = 1, e = 1, n = 1, i = 32, r = 1, a = false, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: l };
    const c = this;
    i = Math.floor(i), r = Math.floor(r);
    const h = [], f = [], u = [], m = [];
    let _ = 0;
    const g = [], p = n / 2;
    let d = 0;
    M(), a === false && (t > 0 && E(true), e > 0 && E(false)), this.setIndex(h), this.setAttribute("position", new Ye(f, 3)), this.setAttribute("normal", new Ye(u, 3)), this.setAttribute("uv", new Ye(m, 2));
    function M() {
      const S = new k(), b = new k();
      let A = 0;
      const w = (e - t) / n;
      for (let x = 0; x <= r; x++) {
        const y = [], z = x / r, C = z * (e - t) + t;
        for (let L = 0; L <= i; L++) {
          const U = L / i, V = U * l + o, O = Math.sin(V), B = Math.cos(V);
          b.x = C * O, b.y = -z * n + p, b.z = C * B, f.push(b.x, b.y, b.z), S.set(O, w, B).normalize(), u.push(S.x, S.y, S.z), m.push(U, 1 - z), y.push(_++);
        }
        g.push(y);
      }
      for (let x = 0; x < i; x++) for (let y = 0; y < r; y++) {
        const z = g[y][x], C = g[y + 1][x], L = g[y + 1][x + 1], U = g[y][x + 1];
        (t > 0 || y !== 0) && (h.push(z, C, U), A += 3), (e > 0 || y !== r - 1) && (h.push(C, L, U), A += 3);
      }
      c.addGroup(d, A, 0), d += A;
    }
    function E(S) {
      const b = _, A = new Lt(), w = new k();
      let x = 0;
      const y = S === true ? t : e, z = S === true ? 1 : -1;
      for (let L = 1; L <= i; L++) f.push(0, p * z, 0), u.push(0, z, 0), m.push(0.5, 0.5), _++;
      const C = _;
      for (let L = 0; L <= i; L++) {
        const V = L / i * l + o, O = Math.cos(V), B = Math.sin(V);
        w.x = y * B, w.y = p * z, w.z = y * O, f.push(w.x, w.y, w.z), u.push(0, z, 0), A.x = O * 0.5 + 0.5, A.y = B * 0.5 * z + 0.5, m.push(A.x, A.y), _++;
      }
      for (let L = 0; L < i; L++) {
        const U = b + L, V = C + L;
        S === true ? h.push(V, V + 1, U) : h.push(V + 1, V, U), x += 3;
      }
      c.addGroup(d, x, S === true ? 1 : 2), d += x;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new si(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class na extends si {
  constructor(t = 1, e = 1, n = 32, i = 1, r = false, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: a, thetaLength: o };
  }
  static fromJSON(t) {
    return new na(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Hn extends An {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i };
    const r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, f = t / o, u = e / l, m = [], _ = [], g = [], p = [];
    for (let d = 0; d < h; d++) {
      const M = d * u - a;
      for (let E = 0; E < c; E++) {
        const S = E * f - r;
        _.push(S, -M, 0), g.push(0, 0, 1), p.push(E / o), p.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++) for (let M = 0; M < o; M++) {
      const E = M + c * d, S = M + c * (d + 1), b = M + 1 + c * (d + 1), A = M + 1 + c * d;
      m.push(E, S, A), m.push(S, b, A);
    }
    this.setIndex(m), this.setAttribute("position", new Ye(_, 3)), this.setAttribute("normal", new Ye(g, 3)), this.setAttribute("uv", new Ye(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Hn(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Rl extends An {
  constructor(t = 1, e = 32, n = 16, i = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: a, thetaLength: o }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], f = new k(), u = new k(), m = [], _ = [], g = [], p = [];
    for (let d = 0; d <= n; d++) {
      const M = [], E = d / n;
      let S = 0;
      d === 0 && a === 0 ? S = 0.5 / e : d === n && l === Math.PI && (S = -0.5 / e);
      for (let b = 0; b <= e; b++) {
        const A = b / e;
        f.x = -t * Math.cos(i + A * r) * Math.sin(a + E * o), f.y = t * Math.cos(a + E * o), f.z = t * Math.sin(i + A * r) * Math.sin(a + E * o), _.push(f.x, f.y, f.z), u.copy(f).normalize(), g.push(u.x, u.y, u.z), p.push(A + S, 1 - E), M.push(c++);
      }
      h.push(M);
    }
    for (let d = 0; d < n; d++) for (let M = 0; M < e; M++) {
      const E = h[d][M + 1], S = h[d][M], b = h[d + 1][M], A = h[d + 1][M + 1];
      (d !== 0 || a > 0) && m.push(E, S, A), (d !== n - 1 || l < Math.PI) && m.push(S, b, A);
    }
    this.setIndex(m), this.setAttribute("position", new Ye(_, 3)), this.setAttribute("normal", new Ye(g, 3)), this.setAttribute("uv", new Ye(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Rl(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class _d extends Bs {
  constructor(t) {
    super(), this.isShadowMaterial = true, this.type = "ShadowMaterial", this.color = new Ht(0), this.transparent = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this;
  }
}
function Ls(s16) {
  const t = {};
  for (const e in s16) {
    t[e] = {};
    for (const n in s16[e]) {
      const i = s16[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function We(s16) {
  const t = {};
  for (let e = 0; e < s16.length; e++) {
    const n = Ls(s16[e]);
    for (const i in n) t[i] = n[i];
  }
  return t;
}
function gd(s16) {
  const t = [];
  for (let e = 0; e < s16.length; e++) t.push(s16[e].clone());
  return t;
}
function Yh(s16) {
  const t = s16.getRenderTarget();
  return t === null ? s16.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Kt.workingColorSpace;
}
const xd = { clone: Ls, merge: We };
var vd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Md = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wn extends Bs {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = vd, this.fragmentShader = Md, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ls(t.uniforms), this.uniformsGroups = gd(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this.defaultAttributeValues = Object.assign({}, t.defaultAttributeValues), this.index0AttributeName = t.index0AttributeName, this.uniformsNeedUpdate = t.uniformsNeedUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? e.uniforms[i] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[i] = { type: "m4", value: a.toArray() } : e.uniforms[i] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Sd extends Wn {
  constructor(t) {
    super(t), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class ue extends Bs {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ht(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Fh, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Gn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Ts extends ue {
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Lt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Gt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(e) {
      this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ht(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ht(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ht(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class yd extends Bs {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Lf, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Ed extends Bs {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class Cl extends Le {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ht(t), this.intensity = e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, e;
  }
}
const Xa = new xe(), wc = new k(), Rc = new k();
class qh {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Lt(512, 512), this.mapType = on, this.map = null, this.mapPass = null, this.matrix = new xe(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new wl(), this._frameExtents = new Lt(1, 1), this._viewportCount = 1, this._viewports = [new _e(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    wc.setFromMatrixPosition(t.matrixWorld), e.position.copy(wc), Rc.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Rc), e.updateMatrixWorld(), Xa.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Xa, e.coordinateSystem, e.reversedDepth), e.coordinateSystem === sr || e.reversedDepth ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Xa);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.autoUpdate = t.autoUpdate, this.needsUpdate = t.needsUpdate, this.normalBias = t.normalBias, this.blurSamples = t.blurSamples, this.mapSize.copy(t.mapSize), this.biasNode = t.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(false).object, delete t.camera.matrix, t;
  }
}
const Fr = new k(), Or = new Ai(), Rn = new k();
class Kh extends Le {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new xe(), this.projectionMatrix = new xe(), this.projectionMatrixInverse = new xe(), this.coordinateSystem = Nn, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorld.decompose(Fr, Or, Rn), Rn.x === 1 && Rn.y === 1 && Rn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Fr, Or, Rn.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorld.decompose(Fr, Or, Rn), Rn.x === 1 && Rn.y === 1 && Rn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Fr, Or, Rn.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _i = new k(), Cc = new Lt(), Pc = new Lt();
class an extends Kh {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = ea * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(qr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return ea * 2 * Math.atan(Math.tan(qr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    _i.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(_i.x, _i.y).multiplyScalar(-t / _i.z), _i.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(_i.x, _i.y).multiplyScalar(-t / _i.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, Cc, Pc), e.subVectors(Pc, Cc);
  }
  setViewOffset(t, e, n, i, r, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(qr * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * i / l, e -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
class Td extends qh {
  constructor() {
    super(new an(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(t) {
    const e = this.camera, n = ea * 2 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height * this.aspect, r = t.distance || e.far;
    (n !== e.fov || i !== e.aspect || r !== e.far) && (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
class bd extends Cl {
  constructor(t, e, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(t, e), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(Le.DEFAULT_UP), this.updateMatrix(), this.target = new Le(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new Td();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.map = t.map, this.shadow = t.shadow.clone(), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.distance = this.distance, e.object.angle = this.angle, e.object.decay = this.decay, e.object.penumbra = this.penumbra, e.object.target = this.target.uuid, this.map && this.map.isTexture && (e.object.map = this.map.toJSON(t).uuid), e.object.shadow = this.shadow.toJSON(), e;
  }
}
class Pl extends Kh {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = i + e, l = i - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class Ad extends qh {
  constructor() {
    super(new Pl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Ya extends Cl {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Le.DEFAULT_UP), this.updateMatrix(), this.target = new Le(), this.shadow = new Ad();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.shadow = this.shadow.toJSON(), e.object.target = this.target.uuid, e;
  }
}
class wd extends Cl {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
const ps = -90, ms = 1;
class Rd extends Le {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new an(ps, ms, t, e);
    i.layers = this.layers, this.add(i);
    const r = new an(ps, ms, t, e);
    r.layers = this.layers, this.add(r);
    const a = new an(ps, ms, t, e);
    a.layers = this.layers, this.add(a);
    const o = new an(ps, ms, t, e);
    o.layers = this.layers, this.add(o);
    const l = new an(ps, ms, t, e);
    l.layers = this.layers, this.add(l);
    const c = new an(ps, ms, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, i, r, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === Nn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === sr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e) this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, f = t.getRenderTarget(), u = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = false;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false;
    let p = false;
    t.isWebGLRenderer === true ? p = t.state.buffers.depth.getReversed() : p = t.reversedDepthBuffer, t.setRenderTarget(n, 0, i), p && t.autoClear === false && t.clearDepth(), t.render(e, r), t.setRenderTarget(n, 1, i), p && t.autoClear === false && t.clearDepth(), t.render(e, a), t.setRenderTarget(n, 2, i), p && t.autoClear === false && t.clearDepth(), t.render(e, o), t.setRenderTarget(n, 3, i), p && t.autoClear === false && t.clearDepth(), t.render(e, l), t.setRenderTarget(n, 4, i), p && t.autoClear === false && t.clearDepth(), t.render(e, c), n.texture.generateMipmaps = g, t.setRenderTarget(n, 5, i), p && t.autoClear === false && t.clearDepth(), t.render(e, h), t.setRenderTarget(f, u, m), t.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Cd extends an {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
  }
}
class Dc {
  constructor(t = 1, e = 0, n = 0) {
    this.radius = t, this.phi = e, this.theta = n;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  makeSafe() {
    return this.phi = Gt(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Gt(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Pd extends Qi {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(t) {
    if (t === void 0) {
      Pt("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = t;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Lc(s16, t, e, n) {
  const i = Dd(n);
  switch (e) {
    case Ih:
      return s16 * t;
    case Nh:
      return s16 * t / i.components * i.byteLength;
    case Ml:
      return s16 * t / i.components * i.byteLength;
    case Ps:
      return s16 * t * 2 / i.components * i.byteLength;
    case Sl:
      return s16 * t * 2 / i.components * i.byteLength;
    case Uh:
      return s16 * t * 3 / i.components * i.byteLength;
    case bn:
      return s16 * t * 4 / i.components * i.byteLength;
    case yl:
      return s16 * t * 4 / i.components * i.byteLength;
    case Hr:
    case Wr:
      return Math.floor((s16 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Xr:
    case Yr:
      return Math.floor((s16 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case So:
    case Eo:
      return Math.max(s16, 16) * Math.max(t, 8) / 4;
    case Mo:
    case yo:
      return Math.max(s16, 8) * Math.max(t, 8) / 2;
    case To:
    case bo:
    case wo:
    case Ro:
      return Math.floor((s16 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ao:
    case Co:
    case Po:
      return Math.floor((s16 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Do:
      return Math.floor((s16 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Lo:
      return Math.floor((s16 + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Io:
      return Math.floor((s16 + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Uo:
      return Math.floor((s16 + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case No:
      return Math.floor((s16 + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Fo:
      return Math.floor((s16 + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Oo:
      return Math.floor((s16 + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Bo:
      return Math.floor((s16 + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case ko:
      return Math.floor((s16 + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case zo:
      return Math.floor((s16 + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Vo:
      return Math.floor((s16 + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Go:
      return Math.floor((s16 + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ho:
      return Math.floor((s16 + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Wo:
      return Math.floor((s16 + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Xo:
    case Yo:
    case qo:
      return Math.ceil(s16 / 4) * Math.ceil(t / 4) * 16;
    case Ko:
    case jo:
      return Math.ceil(s16 / 4) * Math.ceil(t / 4) * 8;
    case Zo:
    case $o:
      return Math.ceil(s16 / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Dd(s16) {
  switch (s16) {
    case on:
    case Ch:
      return { byteLength: 1, components: 1 };
    case nr:
    case Ph:
    case ri:
      return { byteLength: 2, components: 1 };
    case xl:
    case vl:
      return { byteLength: 2, components: 4 };
    case Vn:
    case gl:
    case Un:
      return { byteLength: 4, components: 1 };
    case Dh:
    case Lh:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s16}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ml } }));
typeof window < "u" && (window.__THREE__ ? Pt("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ml);
function jh() {
  let s16 = null, t = false, e = null, n = null;
  function i(r, a) {
    e(r, a), n = s16.requestAnimationFrame(i);
  }
  return { start: function() {
    t !== true && e !== null && (n = s16.requestAnimationFrame(i), t = true);
  }, stop: function() {
    s16.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(r) {
    e = r;
  }, setContext: function(r) {
    s16 = r;
  } };
}
function Ld(s16) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, h = o.usage, f = c.byteLength, u = s16.createBuffer();
    s16.bindBuffer(l, u), s16.bufferData(l, c, h), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = s16.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) m = s16.HALF_FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = s16.HALF_FLOAT : m = s16.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = s16.SHORT;
    else if (c instanceof Uint32Array) m = s16.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = s16.INT;
    else if (c instanceof Int8Array) m = s16.BYTE;
    else if (c instanceof Uint8Array) m = s16.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = s16.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: u, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: f };
  }
  function n(o, l, c) {
    const h = l.array, f = l.updateRanges;
    if (s16.bindBuffer(c, o), f.length === 0) s16.bufferSubData(c, 0, h);
    else {
      f.sort((m, _) => m.start - _.start);
      let u = 0;
      for (let m = 1; m < f.length; m++) {
        const _ = f[u], g = f[m];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++u, f[u] = g);
      }
      f.length = u + 1;
      for (let m = 0, _ = f.length; m < _; m++) {
        const g = f[m];
        s16.bufferSubData(c, g.start * h.BYTES_PER_ELEMENT, h, g.start, g.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (s16.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: i, remove: r, update: a };
}
var Id = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ud = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Nd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Fd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Od = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Bd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, kd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, zd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Vd = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, Gd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Hd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Wd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Xd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Yd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, qd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Kd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, jd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Zd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, $d = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Jd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Qd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, tp = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, ep = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, np = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ip = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, sp = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, rp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ap = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, op = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, lp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, cp = "gl_FragColor = linearToOutputTexel( gl_FragColor );", hp = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, up = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, fp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, dp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, pp = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, mp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, _p = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, gp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, xp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, vp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Mp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Sp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, yp = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Ep = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Tp = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, bp = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Ap = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, wp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Rp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Cp = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Pp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Dp = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Lp = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Ip = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Up = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Np = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Fp = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Op = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Bp = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, kp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, zp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Vp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Gp = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Hp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Wp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Xp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Yp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, qp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Kp = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, jp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Zp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, $p = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Jp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Qp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, tm = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, em = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, nm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, im = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, sm = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, rm = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, am = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, om = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, lm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, cm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, hm = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, um = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, fm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, dm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, pm = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, mm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, _m = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, gm = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, xm = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, vm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Mm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Sm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, ym = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Em = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Tm = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, bm = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Am = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, wm = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Rm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Cm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Pm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Dm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Lm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Im = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Um = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Nm = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Om = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, km = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, zm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Vm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, Gm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Hm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Wm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Xm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ym = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, qm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Km = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, $m = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Qm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, t_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, e_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, n_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, i_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, s_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, r_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, a_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, o_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, l_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, c_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, h_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, u_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Bt = { alphahash_fragment: Id, alphahash_pars_fragment: Ud, alphamap_fragment: Nd, alphamap_pars_fragment: Fd, alphatest_fragment: Od, alphatest_pars_fragment: Bd, aomap_fragment: kd, aomap_pars_fragment: zd, batching_pars_vertex: Vd, batching_vertex: Gd, begin_vertex: Hd, beginnormal_vertex: Wd, bsdfs: Xd, iridescence_fragment: Yd, bumpmap_pars_fragment: qd, clipping_planes_fragment: Kd, clipping_planes_pars_fragment: jd, clipping_planes_pars_vertex: Zd, clipping_planes_vertex: $d, color_fragment: Jd, color_pars_fragment: Qd, color_pars_vertex: tp, color_vertex: ep, common: np, cube_uv_reflection_fragment: ip, defaultnormal_vertex: sp, displacementmap_pars_vertex: rp, displacementmap_vertex: ap, emissivemap_fragment: op, emissivemap_pars_fragment: lp, colorspace_fragment: cp, colorspace_pars_fragment: hp, envmap_fragment: up, envmap_common_pars_fragment: fp, envmap_pars_fragment: dp, envmap_pars_vertex: pp, envmap_physical_pars_fragment: bp, envmap_vertex: mp, fog_vertex: _p, fog_pars_vertex: gp, fog_fragment: xp, fog_pars_fragment: vp, gradientmap_pars_fragment: Mp, lightmap_pars_fragment: Sp, lights_lambert_fragment: yp, lights_lambert_pars_fragment: Ep, lights_pars_begin: Tp, lights_toon_fragment: Ap, lights_toon_pars_fragment: wp, lights_phong_fragment: Rp, lights_phong_pars_fragment: Cp, lights_physical_fragment: Pp, lights_physical_pars_fragment: Dp, lights_fragment_begin: Lp, lights_fragment_maps: Ip, lights_fragment_end: Up, logdepthbuf_fragment: Np, logdepthbuf_pars_fragment: Fp, logdepthbuf_pars_vertex: Op, logdepthbuf_vertex: Bp, map_fragment: kp, map_pars_fragment: zp, map_particle_fragment: Vp, map_particle_pars_fragment: Gp, metalnessmap_fragment: Hp, metalnessmap_pars_fragment: Wp, morphinstance_vertex: Xp, morphcolor_vertex: Yp, morphnormal_vertex: qp, morphtarget_pars_vertex: Kp, morphtarget_vertex: jp, normal_fragment_begin: Zp, normal_fragment_maps: $p, normal_pars_fragment: Jp, normal_pars_vertex: Qp, normal_vertex: tm, normalmap_pars_fragment: em, clearcoat_normal_fragment_begin: nm, clearcoat_normal_fragment_maps: im, clearcoat_pars_fragment: sm, iridescence_pars_fragment: rm, opaque_fragment: am, packing: om, premultiplied_alpha_fragment: lm, project_vertex: cm, dithering_fragment: hm, dithering_pars_fragment: um, roughnessmap_fragment: fm, roughnessmap_pars_fragment: dm, shadowmap_pars_fragment: pm, shadowmap_pars_vertex: mm, shadowmap_vertex: _m, shadowmask_pars_fragment: gm, skinbase_vertex: xm, skinning_pars_vertex: vm, skinning_vertex: Mm, skinnormal_vertex: Sm, specularmap_fragment: ym, specularmap_pars_fragment: Em, tonemapping_fragment: Tm, tonemapping_pars_fragment: bm, transmission_fragment: Am, transmission_pars_fragment: wm, uv_pars_fragment: Rm, uv_pars_vertex: Cm, uv_vertex: Pm, worldpos_vertex: Dm, background_vert: Lm, background_frag: Im, backgroundCube_vert: Um, backgroundCube_frag: Nm, cube_vert: Fm, cube_frag: Om, depth_vert: Bm, depth_frag: km, distance_vert: zm, distance_frag: Vm, equirect_vert: Gm, equirect_frag: Hm, linedashed_vert: Wm, linedashed_frag: Xm, meshbasic_vert: Ym, meshbasic_frag: qm, meshlambert_vert: Km, meshlambert_frag: jm, meshmatcap_vert: Zm, meshmatcap_frag: $m, meshnormal_vert: Jm, meshnormal_frag: Qm, meshphong_vert: t_, meshphong_frag: e_, meshphysical_vert: n_, meshphysical_frag: i_, meshtoon_vert: s_, meshtoon_frag: r_, points_vert: a_, points_frag: o_, shadow_vert: l_, shadow_frag: c_, sprite_vert: h_, sprite_frag: u_ }, lt = { common: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ft() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ft() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ft() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ft() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ft() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ft() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ft() }, normalScale: { value: new Lt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ft() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ft() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ft() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ft() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ht(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 }, uvTransform: { value: new Ft() } }, sprite: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, center: { value: new Lt(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ft() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 } } }, Dn = { basic: { uniforms: We([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.fog]), vertexShader: Bt.meshbasic_vert, fragmentShader: Bt.meshbasic_frag }, lambert: { uniforms: We([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new Ht(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Bt.meshlambert_vert, fragmentShader: Bt.meshlambert_frag }, phong: { uniforms: We([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new Ht(0) }, specular: { value: new Ht(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Bt.meshphong_vert, fragmentShader: Bt.meshphong_frag }, standard: { uniforms: We([lt.common, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.roughnessmap, lt.metalnessmap, lt.fog, lt.lights, { emissive: { value: new Ht(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Bt.meshphysical_vert, fragmentShader: Bt.meshphysical_frag }, toon: { uniforms: We([lt.common, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.gradientmap, lt.fog, lt.lights, { emissive: { value: new Ht(0) } }]), vertexShader: Bt.meshtoon_vert, fragmentShader: Bt.meshtoon_frag }, matcap: { uniforms: We([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, { matcap: { value: null } }]), vertexShader: Bt.meshmatcap_vert, fragmentShader: Bt.meshmatcap_frag }, points: { uniforms: We([lt.points, lt.fog]), vertexShader: Bt.points_vert, fragmentShader: Bt.points_frag }, dashed: { uniforms: We([lt.common, lt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Bt.linedashed_vert, fragmentShader: Bt.linedashed_frag }, depth: { uniforms: We([lt.common, lt.displacementmap]), vertexShader: Bt.depth_vert, fragmentShader: Bt.depth_frag }, normal: { uniforms: We([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Bt.meshnormal_vert, fragmentShader: Bt.meshnormal_frag }, sprite: { uniforms: We([lt.sprite, lt.fog]), vertexShader: Bt.sprite_vert, fragmentShader: Bt.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ft() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Bt.background_vert, fragmentShader: Bt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ft() } }, vertexShader: Bt.backgroundCube_vert, fragmentShader: Bt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Bt.cube_vert, fragmentShader: Bt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Bt.equirect_vert, fragmentShader: Bt.equirect_frag }, distance: { uniforms: We([lt.common, lt.displacementmap, { referencePosition: { value: new k() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Bt.distance_vert, fragmentShader: Bt.distance_frag }, shadow: { uniforms: We([lt.lights, lt.fog, { color: { value: new Ht(0) }, opacity: { value: 1 } }]), vertexShader: Bt.shadow_vert, fragmentShader: Bt.shadow_frag } };
Dn.physical = { uniforms: We([Dn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ft() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ft() }, clearcoatNormalScale: { value: new Lt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ft() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ft() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ft() }, sheen: { value: 0 }, sheenColor: { value: new Ht(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ft() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ft() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ft() }, transmissionSamplerSize: { value: new Lt() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ft() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ht(0) }, specularColor: { value: new Ht(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ft() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ft() }, anisotropyVector: { value: new Lt() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ft() } }]), vertexShader: Bt.meshphysical_vert, fragmentShader: Bt.meshphysical_frag };
const Br = { r: 0, b: 0, g: 0 }, Fi = new Gn(), f_ = new xe();
function d_(s16, t, e, n, i, r) {
  const a = new Ht(0);
  let o = i === true ? 0 : 1, l, c, h = null, f = 0, u = null;
  function m(M) {
    let E = M.isScene === true ? M.background : null;
    if (E && E.isTexture) {
      const S = M.backgroundBlurriness > 0;
      E = t.get(E, S);
    }
    return E;
  }
  function _(M) {
    let E = false;
    const S = m(M);
    S === null ? p(a, o) : S && S.isColor && (p(S, 1), E = true);
    const b = s16.xr.getEnvironmentBlendMode();
    b === "additive" ? e.buffers.color.setClear(0, 0, 0, 1, r) : b === "alpha-blend" && e.buffers.color.setClear(0, 0, 0, 0, r), (s16.autoClear || E) && (e.buffers.depth.setTest(true), e.buffers.depth.setMask(true), e.buffers.color.setMask(true), s16.clear(s16.autoClearColor, s16.autoClearDepth, s16.autoClearStencil));
  }
  function g(M, E) {
    const S = m(E);
    S && (S.isCubeTexture || S.mapping === ha) ? (c === void 0 && (c = new Mt(new Ot(1, 1, 1), new Wn({ name: "BackgroundCubeMaterial", uniforms: Ls(Dn.backgroundCube.uniforms), vertexShader: Dn.backgroundCube.vertexShader, fragmentShader: Dn.backgroundCube.fragmentShader, side: je, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(b, A, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), n.update(c)), Fi.copy(E.backgroundRotation), Fi.x *= -1, Fi.y *= -1, Fi.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === false && (Fi.y *= -1, Fi.z *= -1), c.material.uniforms.envMap.value = S, c.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === false ? -1 : 1, c.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Fi)), c.material.toneMapped = Kt.getTransfer(S.colorSpace) !== te, (h !== S || f !== S.version || u !== s16.toneMapping) && (c.material.needsUpdate = true, h = S, f = S.version, u = s16.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null)) : S && S.isTexture && (l === void 0 && (l = new Mt(new Hn(2, 2), new Wn({ name: "BackgroundMaterial", uniforms: Ls(Dn.background.uniforms), vertexShader: Dn.background.vertexShader, fragmentShader: Dn.background.fragmentShader, side: bi, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), n.update(l)), l.material.uniforms.t2D.value = S, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = Kt.getTransfer(S.colorSpace) !== te, S.matrixAutoUpdate === true && S.updateMatrix(), l.material.uniforms.uvTransform.value.copy(S.matrix), (h !== S || f !== S.version || u !== s16.toneMapping) && (l.material.needsUpdate = true, h = S, f = S.version, u = s16.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(M, E) {
    M.getRGB(Br, Yh(s16)), e.buffers.color.setClear(Br.r, Br.g, Br.b, E, r);
  }
  function d() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(M, E = 1) {
    a.set(M), o = E, p(a, o);
  }, getClearAlpha: function() {
    return o;
  }, setClearAlpha: function(M) {
    o = M, p(a, o);
  }, render: _, addToRenderList: g, dispose: d };
}
function p_(s16, t) {
  const e = s16.getParameter(s16.MAX_VERTEX_ATTRIBS), n = {}, i = u(null);
  let r = i, a = false;
  function o(C, L, U, V, O) {
    let B = false;
    const N = f(C, V, U, L);
    r !== N && (r = N, c(r.object)), B = m(C, V, U, O), B && _(C, V, U, O), O !== null && t.update(O, s16.ELEMENT_ARRAY_BUFFER), (B || a) && (a = false, S(C, L, U, V), O !== null && s16.bindBuffer(s16.ELEMENT_ARRAY_BUFFER, t.get(O).buffer));
  }
  function l() {
    return s16.createVertexArray();
  }
  function c(C) {
    return s16.bindVertexArray(C);
  }
  function h(C) {
    return s16.deleteVertexArray(C);
  }
  function f(C, L, U, V) {
    const O = V.wireframe === true;
    let B = n[L.id];
    B === void 0 && (B = {}, n[L.id] = B);
    const N = C.isInstancedMesh === true ? C.id : 0;
    let Z = B[N];
    Z === void 0 && (Z = {}, B[N] = Z);
    let $ = Z[U.id];
    $ === void 0 && ($ = {}, Z[U.id] = $);
    let at = $[O];
    return at === void 0 && (at = u(l()), $[O] = at), at;
  }
  function u(C) {
    const L = [], U = [], V = [];
    for (let O = 0; O < e; O++) L[O] = 0, U[O] = 0, V[O] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: L, enabledAttributes: U, attributeDivisors: V, object: C, attributes: {}, index: null };
  }
  function m(C, L, U, V) {
    const O = r.attributes, B = L.attributes;
    let N = 0;
    const Z = U.getAttributes();
    for (const $ in Z) if (Z[$].location >= 0) {
      const ut = O[$];
      let ot = B[$];
      if (ot === void 0 && ($ === "instanceMatrix" && C.instanceMatrix && (ot = C.instanceMatrix), $ === "instanceColor" && C.instanceColor && (ot = C.instanceColor)), ut === void 0 || ut.attribute !== ot || ot && ut.data !== ot.data) return true;
      N++;
    }
    return r.attributesNum !== N || r.index !== V;
  }
  function _(C, L, U, V) {
    const O = {}, B = L.attributes;
    let N = 0;
    const Z = U.getAttributes();
    for (const $ in Z) if (Z[$].location >= 0) {
      let ut = B[$];
      ut === void 0 && ($ === "instanceMatrix" && C.instanceMatrix && (ut = C.instanceMatrix), $ === "instanceColor" && C.instanceColor && (ut = C.instanceColor));
      const ot = {};
      ot.attribute = ut, ut && ut.data && (ot.data = ut.data), O[$] = ot, N++;
    }
    r.attributes = O, r.attributesNum = N, r.index = V;
  }
  function g() {
    const C = r.newAttributes;
    for (let L = 0, U = C.length; L < U; L++) C[L] = 0;
  }
  function p(C) {
    d(C, 0);
  }
  function d(C, L) {
    const U = r.newAttributes, V = r.enabledAttributes, O = r.attributeDivisors;
    U[C] = 1, V[C] === 0 && (s16.enableVertexAttribArray(C), V[C] = 1), O[C] !== L && (s16.vertexAttribDivisor(C, L), O[C] = L);
  }
  function M() {
    const C = r.newAttributes, L = r.enabledAttributes;
    for (let U = 0, V = L.length; U < V; U++) L[U] !== C[U] && (s16.disableVertexAttribArray(U), L[U] = 0);
  }
  function E(C, L, U, V, O, B, N) {
    N === true ? s16.vertexAttribIPointer(C, L, U, O, B) : s16.vertexAttribPointer(C, L, U, V, O, B);
  }
  function S(C, L, U, V) {
    g();
    const O = V.attributes, B = U.getAttributes(), N = L.defaultAttributeValues;
    for (const Z in B) {
      const $ = B[Z];
      if ($.location >= 0) {
        let at = O[Z];
        if (at === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (at = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (at = C.instanceColor)), at !== void 0) {
          const ut = at.normalized, ot = at.itemSize, It = t.get(at);
          if (It === void 0) continue;
          const Xt = It.buffer, Yt = It.type, K = It.bytesPerElement, nt = Yt === s16.INT || Yt === s16.UNSIGNED_INT || at.gpuType === gl;
          if (at.isInterleavedBufferAttribute) {
            const rt = at.data, Nt = rt.stride, wt = at.offset;
            if (rt.isInstancedInterleavedBuffer) {
              for (let Ct = 0; Ct < $.locationSize; Ct++) d($.location + Ct, rt.meshPerAttribute);
              C.isInstancedMesh !== true && V._maxInstanceCount === void 0 && (V._maxInstanceCount = rt.meshPerAttribute * rt.count);
            } else for (let Ct = 0; Ct < $.locationSize; Ct++) p($.location + Ct);
            s16.bindBuffer(s16.ARRAY_BUFFER, Xt);
            for (let Ct = 0; Ct < $.locationSize; Ct++) E($.location + Ct, ot / $.locationSize, Yt, ut, Nt * K, (wt + ot / $.locationSize * Ct) * K, nt);
          } else {
            if (at.isInstancedBufferAttribute) {
              for (let rt = 0; rt < $.locationSize; rt++) d($.location + rt, at.meshPerAttribute);
              C.isInstancedMesh !== true && V._maxInstanceCount === void 0 && (V._maxInstanceCount = at.meshPerAttribute * at.count);
            } else for (let rt = 0; rt < $.locationSize; rt++) p($.location + rt);
            s16.bindBuffer(s16.ARRAY_BUFFER, Xt);
            for (let rt = 0; rt < $.locationSize; rt++) E($.location + rt, ot / $.locationSize, Yt, ut, ot * K, ot / $.locationSize * rt * K, nt);
          }
        } else if (N !== void 0) {
          const ut = N[Z];
          if (ut !== void 0) switch (ut.length) {
            case 2:
              s16.vertexAttrib2fv($.location, ut);
              break;
            case 3:
              s16.vertexAttrib3fv($.location, ut);
              break;
            case 4:
              s16.vertexAttrib4fv($.location, ut);
              break;
            default:
              s16.vertexAttrib1fv($.location, ut);
          }
        }
      }
    }
    M();
  }
  function b() {
    y();
    for (const C in n) {
      const L = n[C];
      for (const U in L) {
        const V = L[U];
        for (const O in V) {
          const B = V[O];
          for (const N in B) h(B[N].object), delete B[N];
          delete V[O];
        }
      }
      delete n[C];
    }
  }
  function A(C) {
    if (n[C.id] === void 0) return;
    const L = n[C.id];
    for (const U in L) {
      const V = L[U];
      for (const O in V) {
        const B = V[O];
        for (const N in B) h(B[N].object), delete B[N];
        delete V[O];
      }
    }
    delete n[C.id];
  }
  function w(C) {
    for (const L in n) {
      const U = n[L];
      for (const V in U) {
        const O = U[V];
        if (O[C.id] === void 0) continue;
        const B = O[C.id];
        for (const N in B) h(B[N].object), delete B[N];
        delete O[C.id];
      }
    }
  }
  function x(C) {
    for (const L in n) {
      const U = n[L], V = C.isInstancedMesh === true ? C.id : 0, O = U[V];
      if (O !== void 0) {
        for (const B in O) {
          const N = O[B];
          for (const Z in N) h(N[Z].object), delete N[Z];
          delete O[B];
        }
        delete U[V], Object.keys(U).length === 0 && delete n[L];
      }
    }
  }
  function y() {
    z(), a = true, r !== i && (r = i, c(r.object));
  }
  function z() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: o, reset: y, resetDefaultState: z, dispose: b, releaseStatesOfGeometry: A, releaseStatesOfObject: x, releaseStatesOfProgram: w, initAttributes: g, enableAttribute: p, disableUnusedAttributes: M };
}
function m_(s16, t, e) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s16.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function a(c, h, f) {
    f !== 0 && (s16.drawArraysInstanced(n, c, h, f), e.update(h, n, f));
  }
  function o(c, h, f) {
    if (f === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, f);
    let m = 0;
    for (let _ = 0; _ < f; _++) m += h[_];
    e.update(m, n, 1);
  }
  function l(c, h, f, u) {
    if (f === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let _ = 0; _ < c.length; _++) a(c[_], h[_], u[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, u, 0, f);
      let _ = 0;
      for (let g = 0; g < f; g++) _ += h[g] * u[g];
      e.update(_, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function __(s16, t, e, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const w = t.get("EXT_texture_filter_anisotropic");
      i = s16.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(w) {
    return !(w !== bn && n.convert(w) !== s16.getParameter(s16.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const x = w === ri && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== on && n.convert(w) !== s16.getParameter(s16.IMPLEMENTATION_COLOR_READ_TYPE) && w !== Un && !x);
  }
  function l(w) {
    if (w === "highp") {
      if (s16.getShaderPrecisionFormat(s16.VERTEX_SHADER, s16.HIGH_FLOAT).precision > 0 && s16.getShaderPrecisionFormat(s16.FRAGMENT_SHADER, s16.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && s16.getShaderPrecisionFormat(s16.VERTEX_SHADER, s16.MEDIUM_FLOAT).precision > 0 && s16.getShaderPrecisionFormat(s16.FRAGMENT_SHADER, s16.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (Pt("WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = e.logarithmicDepthBuffer === true, u = e.reversedDepthBuffer === true && t.has("EXT_clip_control"), m = s16.getParameter(s16.MAX_TEXTURE_IMAGE_UNITS), _ = s16.getParameter(s16.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = s16.getParameter(s16.MAX_TEXTURE_SIZE), p = s16.getParameter(s16.MAX_CUBE_MAP_TEXTURE_SIZE), d = s16.getParameter(s16.MAX_VERTEX_ATTRIBS), M = s16.getParameter(s16.MAX_VERTEX_UNIFORM_VECTORS), E = s16.getParameter(s16.MAX_VARYING_VECTORS), S = s16.getParameter(s16.MAX_FRAGMENT_UNIFORM_VECTORS), b = s16.getParameter(s16.MAX_SAMPLES), A = s16.getParameter(s16.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: f, reversedDepthBuffer: u, maxTextures: m, maxVertexTextures: _, maxTextureSize: g, maxCubemapSize: p, maxAttributes: d, maxVertexUniforms: M, maxVaryings: E, maxFragmentUniforms: S, maxSamples: b, samples: A };
}
function g_(s16) {
  const t = this;
  let e = null, n = 0, i = false, r = false;
  const a = new gi(), o = new Ft(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const m = f.length !== 0 || u || n !== 0 || i;
    return i = u, n = f.length, m;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(f, u) {
    e = h(f, u, 0);
  }, this.setState = function(f, u, m) {
    const _ = f.clippingPlanes, g = f.clipIntersection, p = f.clipShadows, d = s16.get(f);
    if (!i || _ === null || _.length === 0 || r && !p) r ? h(null) : c();
    else {
      const M = r ? 0 : n, E = M * 4;
      let S = d.clippingState || null;
      l.value = S, S = h(_, u, E, m);
      for (let b = 0; b !== E; ++b) S[b] = e[b];
      d.clippingState = S, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(f, u, m, _) {
    const g = f !== null ? f.length : 0;
    let p = null;
    if (g !== 0) {
      if (p = l.value, _ !== true || p === null) {
        const d = m + g * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let E = 0, S = m; E !== g; ++E, S += 4) a.copy(f[E]).applyMatrix4(M, o), a.normal.toArray(p, S), p[S + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return t.numPlanes = g, t.numIntersection = 0, p;
  }
}
const vi = 4, Ic = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Gi = 20, x_ = 256, Xs = new Pl(), Uc = new Ht();
let qa = null, Ka = 0, ja = 0, Za = false;
const v_ = new k();
class Nc {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(t, e = 0, n = 0.1, i = 100, r = {}) {
    const { size: a = 256, position: o = v_ } = r;
    qa = this._renderer.getRenderTarget(), Ka = this._renderer.getActiveCubeFace(), ja = this._renderer.getActiveMipmapLevel(), Za = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(t, n, i, l, o), e > 0 && this._blur(l, 0, 0, e), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Bc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Oc(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodMeshes.length; t++) this._lodMeshes[t].geometry.dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(qa, Ka, ja), this._renderer.xr.enabled = Za, t.scissorTest = false, _s(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Zi || t.mapping === Cs ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), qa = this._renderer.getRenderTarget(), Ka = this._renderer.getActiveCubeFace(), ja = this._renderer.getActiveMipmapLevel(), Za = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: ze, minFilter: ze, generateMipmaps: false, type: ri, format: bn, colorSpace: Ds, depthBuffer: false }, i = Fc(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Fc(t, e, n);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = M_(r)), this._blurMaterial = y_(r, t, e), this._ggxMaterial = S_(r, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new Mt(new An(), t);
    this._renderer.compile(e, Xs);
  }
  _sceneToCubeUV(t, e, n, i, r) {
    const l = new an(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], f = this._renderer, u = f.autoClear, m = f.toneMapping;
    f.getClearColor(Uc), f.toneMapping = On, f.autoClear = false, f.state.buffers.depth.getReversed() && (f.setRenderTarget(i), f.clearDepth(), f.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Mt(new Ot(), new ua({ name: "PMREM.Background", side: je, depthWrite: false, depthTest: false })));
    const g = this._backgroundBox, p = g.material;
    let d = false;
    const M = t.background;
    M ? M.isColor && (p.color.copy(M), t.background = null, d = true) : (p.color.copy(Uc), d = true);
    for (let E = 0; E < 6; E++) {
      const S = E % 3;
      S === 0 ? (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[E], r.y, r.z)) : S === 1 ? (l.up.set(0, 0, c[E]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[E], r.z)) : (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[E]));
      const b = this._cubeSize;
      _s(i, S * b, E > 2 ? b : 0, b, b), f.setRenderTarget(i), d && f.render(g, l), f.render(t, l);
    }
    f.toneMapping = m, f.autoClear = u, t.background = M;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === Zi || t.mapping === Cs;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Bc()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Oc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    _s(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, Xs);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const i = this._lodMeshes.length;
    for (let r = 1; r < i; r++) this._applyGGXFilter(t, r - 1, r);
    e.autoClear = n;
  }
  _applyGGXFilter(t, e, n) {
    const i = this._renderer, r = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const l = a.uniforms, c = n / (this._lodMeshes.length - 1), h = e / (this._lodMeshes.length - 1), f = Math.sqrt(c * c - h * h), u = 0 + c * 1.25, m = f * u, { _lodMax: _ } = this, g = this._sizeLods[n], p = 3 * g * (n > _ - vi ? n - _ + vi : 0), d = 4 * (this._cubeSize - g);
    l.envMap.value = t.texture, l.roughness.value = m, l.mipInt.value = _ - e, _s(r, p, d, 3 * g, 2 * g), i.setRenderTarget(r), i.render(o, Xs), l.envMap.value = r.texture, l.roughness.value = 0, l.mipInt.value = _ - n, _s(t, p, d, 3 * g, 2 * g), i.setRenderTarget(t), i.render(o, Xs);
  }
  _blur(t, e, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && Zt("blur direction must be either latitudinal or longitudinal!");
    const h = 3, f = this._lodMeshes[i];
    f.material = c;
    const u = c.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Gi - 1), g = r / _, p = isFinite(r) ? 1 + Math.floor(h * g) : Gi;
    p > Gi && Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);
    const d = [];
    let M = 0;
    for (let w = 0; w < Gi; ++w) {
      const x = w / g, y = Math.exp(-x * x / 2);
      d.push(y), w === 0 ? M += y : w < p && (M += 2 * y);
    }
    for (let w = 0; w < d.length; w++) d[w] = d[w] / M;
    u.envMap.value = t.texture, u.samples.value = p, u.weights.value = d, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: E } = this;
    u.dTheta.value = _, u.mipInt.value = E - n;
    const S = this._sizeLods[i], b = 3 * S * (i > E - vi ? i - E + vi : 0), A = 4 * (this._cubeSize - S);
    _s(e, b, A, 3 * S, 2 * S), l.setRenderTarget(e), l.render(f, Xs);
  }
}
function M_(s16) {
  const t = [], e = [], n = [];
  let i = s16;
  const r = s16 - vi + 1 + Ic.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s16 - vi ? l = Ic[a - s16 + vi - 1] : a === 0 && (l = 0), e.push(l);
    const c = 1 / (o - 2), h = -c, f = 1 + c, u = [h, h, f, h, f, f, h, h, f, f, h, f], m = 6, _ = 6, g = 3, p = 2, d = 1, M = new Float32Array(g * _ * m), E = new Float32Array(p * _ * m), S = new Float32Array(d * _ * m);
    for (let A = 0; A < m; A++) {
      const w = A % 3 * 2 / 3 - 1, x = A > 2 ? 0 : -1, y = [w, x, 0, w + 2 / 3, x, 0, w + 2 / 3, x + 1, 0, w, x, 0, w + 2 / 3, x + 1, 0, w, x + 1, 0];
      M.set(y, g * _ * A), E.set(u, p * _ * A);
      const z = [A, A, A, A, A, A];
      S.set(z, d * _ * A);
    }
    const b = new An();
    b.setAttribute("position", new kn(M, g)), b.setAttribute("uv", new kn(E, p)), b.setAttribute("faceIndex", new kn(S, d)), n.push(new Mt(b, null)), i > vi && i--;
  }
  return { lodMeshes: n, sizeLods: t, sigmas: e };
}
function Fc(s16, t, e) {
  const n = new Bn(s16, t, e);
  return n.texture.mapping = ha, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function _s(s16, t, e, n, i) {
  s16.viewport.set(t, e, n, i), s16.scissor.set(t, e, n, i);
}
function S_(s16, t, e) {
  return new Wn({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: x_, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${s16}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: fa(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: ni, depthTest: false, depthWrite: false });
}
function y_(s16, t, e) {
  const n = new Float32Array(Gi), i = new k(0, 1, 0);
  return new Wn({ name: "SphericalGaussianBlur", defines: { n: Gi, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${s16}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: fa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: ni, depthTest: false, depthWrite: false });
}
function Oc() {
  return new Wn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: fa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: ni, depthTest: false, depthWrite: false });
}
function Bc() {
  return new Wn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: fa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: ni, depthTest: false, depthWrite: false });
}
function fa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
class Zh extends Bn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Wh(i), this._setTextureOptions(e), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new Ot(5, 5, 5), r = new Wn({ name: "CubemapFromEquirect", uniforms: Ls(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: je, blending: ni });
    r.uniforms.tEquirect.value = e;
    const a = new Mt(i, r), o = e.minFilter;
    return e.minFilter === Hi && (e.minFilter = ze), new Rd(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e = true, n = true, i = true) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
function E_(s16) {
  let t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), n = null;
  function i(u, m = false) {
    return u == null ? null : m ? a(u) : r(u);
  }
  function r(u) {
    if (u && u.isTexture) {
      const m = u.mapping;
      if (m === va || m === Ma) if (t.has(u)) {
        const _ = t.get(u).texture;
        return o(_, u.mapping);
      } else {
        const _ = u.image;
        if (_ && _.height > 0) {
          const g = new Zh(_.height);
          return g.fromEquirectangularTexture(s16, u), t.set(u, g), u.addEventListener("dispose", c), o(g.texture, u.mapping);
        } else return null;
      }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const m = u.mapping, _ = m === va || m === Ma, g = m === Zi || m === Cs;
      if (_ || g) {
        let p = e.get(u);
        const d = p !== void 0 ? p.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== d) return n === null && (n = new Nc(s16)), p = _ ? n.fromEquirectangular(u, p) : n.fromCubemap(u, p), p.texture.pmremVersion = u.pmremVersion, e.set(u, p), p.texture;
        if (p !== void 0) return p.texture;
        {
          const M = u.image;
          return _ && M && M.height > 0 || g && M && l(M) ? (n === null && (n = new Nc(s16)), p = _ ? n.fromEquirectangular(u) : n.fromCubemap(u), p.texture.pmremVersion = u.pmremVersion, e.set(u, p), u.addEventListener("dispose", h), p.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, m) {
    return m === va ? u.mapping = Zi : m === Ma && (u.mapping = Cs), u;
  }
  function l(u) {
    let m = 0;
    const _ = 6;
    for (let g = 0; g < _; g++) u[g] !== void 0 && m++;
    return m === _;
  }
  function c(u) {
    const m = u.target;
    m.removeEventListener("dispose", c);
    const _ = t.get(m);
    _ !== void 0 && (t.delete(m), _.dispose());
  }
  function h(u) {
    const m = u.target;
    m.removeEventListener("dispose", h);
    const _ = e.get(m);
    _ !== void 0 && (e.delete(m), _.dispose());
  }
  function f() {
    t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return { get: i, dispose: f };
}
function T_(s16) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    const i = s16.getExtension(n);
    return t[n] = i, i;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = e(n);
    return i === null && ta("WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function b_(s16, t, e, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const u = f.target;
    u.index !== null && t.remove(u.index);
    for (const _ in u.attributes) t.remove(u.attributes[_]);
    u.removeEventListener("dispose", a), delete i[u.id];
    const m = r.get(u);
    m && (t.remove(m), r.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === true && delete u._maxInstanceCount, e.memory.geometries--;
  }
  function o(f, u) {
    return i[u.id] === true || (u.addEventListener("dispose", a), i[u.id] = true, e.memory.geometries++), u;
  }
  function l(f) {
    const u = f.attributes;
    for (const m in u) t.update(u[m], s16.ARRAY_BUFFER);
  }
  function c(f) {
    const u = [], m = f.index, _ = f.attributes.position;
    let g = 0;
    if (_ === void 0) return;
    if (m !== null) {
      const M = m.array;
      g = m.version;
      for (let E = 0, S = M.length; E < S; E += 3) {
        const b = M[E + 0], A = M[E + 1], w = M[E + 2];
        u.push(b, A, A, w, w, b);
      }
    } else {
      const M = _.array;
      g = _.version;
      for (let E = 0, S = M.length / 3 - 1; E < S; E += 3) {
        const b = E + 0, A = E + 1, w = E + 2;
        u.push(b, A, A, w, w, b);
      }
    }
    const p = new (_.count >= 65535 ? Gh : Vh)(u, 1);
    p.version = g;
    const d = r.get(f);
    d && t.remove(d), r.set(f, p);
  }
  function h(f) {
    const u = r.get(f);
    if (u) {
      const m = f.index;
      m !== null && u.version < m.version && c(f);
    } else c(f);
    return r.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function A_(s16, t, e) {
  let n;
  function i(u) {
    n = u;
  }
  let r, a;
  function o(u) {
    r = u.type, a = u.bytesPerElement;
  }
  function l(u, m) {
    s16.drawElements(n, m, r, u * a), e.update(m, n, 1);
  }
  function c(u, m, _) {
    _ !== 0 && (s16.drawElementsInstanced(n, m, r, u * a, _), e.update(m, n, _));
  }
  function h(u, m, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, u, 0, _);
    let p = 0;
    for (let d = 0; d < _; d++) p += m[d];
    e.update(p, n, 1);
  }
  function f(u, m, _, g) {
    if (_ === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null) for (let d = 0; d < u.length; d++) c(u[d] / a, m[d], g[d]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, u, 0, g, 0, _);
      let d = 0;
      for (let M = 0; M < _; M++) d += m[M] * g[M];
      e.update(d, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function w_(s16) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case s16.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case s16.LINES:
        e.lines += o * (r / 2);
        break;
      case s16.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case s16.LINE_LOOP:
        e.lines += o * r;
        break;
      case s16.POINTS:
        e.points += o * r;
        break;
      default:
        Zt("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: i, update: n };
}
function R_(s16, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), i = new _e();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== f) {
      let z = function() {
        x.dispose(), n.delete(o), o.removeEventListener("dispose", z);
      };
      var m = z;
      u !== void 0 && u.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], M = o.morphAttributes.normal || [], E = o.morphAttributes.color || [];
      let S = 0;
      _ === true && (S = 1), g === true && (S = 2), p === true && (S = 3);
      let b = o.attributes.position.count * S, A = 1;
      b > t.maxTextureSize && (A = Math.ceil(b / t.maxTextureSize), b = t.maxTextureSize);
      const w = new Float32Array(b * A * 4 * f), x = new Bh(w, b, A, f);
      x.type = Un, x.needsUpdate = true;
      const y = S * 4;
      for (let C = 0; C < f; C++) {
        const L = d[C], U = M[C], V = E[C], O = b * A * 4 * C;
        for (let B = 0; B < L.count; B++) {
          const N = B * y;
          _ === true && (i.fromBufferAttribute(L, B), w[O + N + 0] = i.x, w[O + N + 1] = i.y, w[O + N + 2] = i.z, w[O + N + 3] = 0), g === true && (i.fromBufferAttribute(U, B), w[O + N + 4] = i.x, w[O + N + 5] = i.y, w[O + N + 6] = i.z, w[O + N + 7] = 0), p === true && (i.fromBufferAttribute(V, B), w[O + N + 8] = i.x, w[O + N + 9] = i.y, w[O + N + 10] = i.z, w[O + N + 11] = V.itemSize === 4 ? i.w : 1);
        }
      }
      u = { count: f, texture: x, size: new Lt(b, A) }, n.set(o, u), o.addEventListener("dispose", z);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(s16, "morphTexture", a.morphTexture, e);
    else {
      let _ = 0;
      for (let p = 0; p < c.length; p++) _ += c[p];
      const g = o.morphTargetsRelative ? 1 : 1 - _;
      l.getUniforms().setValue(s16, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s16, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s16, "morphTargetsTexture", u.texture, e), l.getUniforms().setValue(s16, "morphTargetsTextureSize", u.size);
  }
  return { update: r };
}
function C_(s16, t, e, n, i) {
  let r = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const h = i.render.frame, f = c.geometry, u = t.get(c, f);
    if (r.get(u) !== h && (t.update(u), r.set(u, h)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === false && c.addEventListener("dispose", l), r.get(c) !== h && (e.update(c.instanceMatrix, s16.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, s16.ARRAY_BUFFER), r.set(c, h))), c.isSkinnedMesh) {
      const m = c.skeleton;
      r.get(m) !== h && (m.update(), r.set(m, h));
    }
    return u;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const h = c.target;
    h.removeEventListener("dispose", l), n.releaseStatesOfObject(h), e.remove(h.instanceMatrix), h.instanceColor !== null && e.remove(h.instanceColor);
  }
  return { update: a, dispose: o };
}
const P_ = { [yh]: "LINEAR_TONE_MAPPING", [Eh]: "REINHARD_TONE_MAPPING", [Th]: "CINEON_TONE_MAPPING", [_l]: "ACES_FILMIC_TONE_MAPPING", [Ah]: "AGX_TONE_MAPPING", [wh]: "NEUTRAL_TONE_MAPPING", [bh]: "CUSTOM_TONE_MAPPING" };
function D_(s16, t, e, n, i) {
  const r = new Bn(t, e, { type: s16, depthBuffer: n, stencilBuffer: i }), a = new Bn(t, e, { type: ri, depthBuffer: false, stencilBuffer: false }), o = new An();
  o.setAttribute("position", new Ye([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new Ye([0, 2, 0, 0, 2, 0], 2));
  const l = new Sd({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), c = new Mt(o, l), h = new Pl(-1, 1, 1, -1, 0, 1);
  let f = null, u = null, m = false, _, g = null, p = [], d = false;
  this.setSize = function(M, E) {
    r.setSize(M, E), a.setSize(M, E);
    for (let S = 0; S < p.length; S++) {
      const b = p[S];
      b.setSize && b.setSize(M, E);
    }
  }, this.setEffects = function(M) {
    p = M, d = p.length > 0 && p[0].isRenderPass === true;
    const E = r.width, S = r.height;
    for (let b = 0; b < p.length; b++) {
      const A = p[b];
      A.setSize && A.setSize(E, S);
    }
  }, this.begin = function(M, E) {
    if (m || M.toneMapping === On && p.length === 0) return false;
    if (g = E, E !== null) {
      const S = E.width, b = E.height;
      (r.width !== S || r.height !== b) && this.setSize(S, b);
    }
    return d === false && M.setRenderTarget(r), _ = M.toneMapping, M.toneMapping = On, true;
  }, this.hasRenderPass = function() {
    return d;
  }, this.end = function(M, E) {
    M.toneMapping = _, m = true;
    let S = r, b = a;
    for (let A = 0; A < p.length; A++) {
      const w = p[A];
      if (w.enabled !== false && (w.render(M, b, S, E), w.needsSwap !== false)) {
        const x = S;
        S = b, b = x;
      }
    }
    if (f !== M.outputColorSpace || u !== M.toneMapping) {
      f = M.outputColorSpace, u = M.toneMapping, l.defines = {}, Kt.getTransfer(f) === te && (l.defines.SRGB_TRANSFER = "");
      const A = P_[u];
      A && (l.defines[A] = ""), l.needsUpdate = true;
    }
    l.uniforms.tDiffuse.value = S.texture, M.setRenderTarget(g), M.render(c, h), g = null, m = false;
  }, this.isCompositing = function() {
    return m;
  }, this.dispose = function() {
    r.dispose(), a.dispose(), o.dispose(), l.dispose();
  };
}
const $h = new Ve(), Jo = new rr(1, 1), Jh = new Bh(), Qh = new $f(), tu = new Wh(), kc = [], zc = [], Vc = new Float32Array(16), Gc = new Float32Array(9), Hc = new Float32Array(4);
function ks(s16, t, e) {
  const n = s16[0];
  if (n <= 0 || n > 0) return s16;
  const i = t * e;
  let r = kc[i];
  if (r === void 0 && (r = new Float32Array(i), kc[i] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, s16[a].toArray(r, o);
  }
  return r;
}
function Ae(s16, t) {
  if (s16.length !== t.length) return false;
  for (let e = 0, n = s16.length; e < n; e++) if (s16[e] !== t[e]) return false;
  return true;
}
function we(s16, t) {
  for (let e = 0, n = t.length; e < n; e++) s16[e] = t[e];
}
function da(s16, t) {
  let e = zc[t];
  e === void 0 && (e = new Int32Array(t), zc[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = s16.allocateTextureUnit();
  return e;
}
function L_(s16, t) {
  const e = this.cache;
  e[0] !== t && (s16.uniform1f(this.addr, t), e[0] = t);
}
function I_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s16.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Ae(e, t)) return;
    s16.uniform2fv(this.addr, t), we(e, t);
  }
}
function U_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s16.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (s16.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (Ae(e, t)) return;
    s16.uniform3fv(this.addr, t), we(e, t);
  }
}
function N_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s16.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Ae(e, t)) return;
    s16.uniform4fv(this.addr, t), we(e, t);
  }
}
function F_(s16, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ae(e, t)) return;
    s16.uniformMatrix2fv(this.addr, false, t), we(e, t);
  } else {
    if (Ae(e, n)) return;
    Hc.set(n), s16.uniformMatrix2fv(this.addr, false, Hc), we(e, n);
  }
}
function O_(s16, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ae(e, t)) return;
    s16.uniformMatrix3fv(this.addr, false, t), we(e, t);
  } else {
    if (Ae(e, n)) return;
    Gc.set(n), s16.uniformMatrix3fv(this.addr, false, Gc), we(e, n);
  }
}
function B_(s16, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ae(e, t)) return;
    s16.uniformMatrix4fv(this.addr, false, t), we(e, t);
  } else {
    if (Ae(e, n)) return;
    Vc.set(n), s16.uniformMatrix4fv(this.addr, false, Vc), we(e, n);
  }
}
function k_(s16, t) {
  const e = this.cache;
  e[0] !== t && (s16.uniform1i(this.addr, t), e[0] = t);
}
function z_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s16.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Ae(e, t)) return;
    s16.uniform2iv(this.addr, t), we(e, t);
  }
}
function V_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s16.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Ae(e, t)) return;
    s16.uniform3iv(this.addr, t), we(e, t);
  }
}
function G_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s16.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Ae(e, t)) return;
    s16.uniform4iv(this.addr, t), we(e, t);
  }
}
function H_(s16, t) {
  const e = this.cache;
  e[0] !== t && (s16.uniform1ui(this.addr, t), e[0] = t);
}
function W_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s16.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Ae(e, t)) return;
    s16.uniform2uiv(this.addr, t), we(e, t);
  }
}
function X_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s16.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Ae(e, t)) return;
    s16.uniform3uiv(this.addr, t), we(e, t);
  }
}
function Y_(s16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s16.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Ae(e, t)) return;
    s16.uniform4uiv(this.addr, t), we(e, t);
  }
}
function q_(s16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s16.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s16.SAMPLER_2D_SHADOW ? (Jo.compareFunction = e.isReversedDepthBuffer() ? Tl : El, r = Jo) : r = $h, e.setTexture2D(t || r, i);
}
function K_(s16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s16.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || Qh, i);
}
function j_(s16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s16.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || tu, i);
}
function Z_(s16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s16.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Jh, i);
}
function $_(s16) {
  switch (s16) {
    case 5126:
      return L_;
    case 35664:
      return I_;
    case 35665:
      return U_;
    case 35666:
      return N_;
    case 35674:
      return F_;
    case 35675:
      return O_;
    case 35676:
      return B_;
    case 5124:
    case 35670:
      return k_;
    case 35667:
    case 35671:
      return z_;
    case 35668:
    case 35672:
      return V_;
    case 35669:
    case 35673:
      return G_;
    case 5125:
      return H_;
    case 36294:
      return W_;
    case 36295:
      return X_;
    case 36296:
      return Y_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return q_;
    case 35679:
    case 36299:
    case 36307:
      return K_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return j_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Z_;
  }
}
function J_(s16, t) {
  s16.uniform1fv(this.addr, t);
}
function Q_(s16, t) {
  const e = ks(t, this.size, 2);
  s16.uniform2fv(this.addr, e);
}
function t0(s16, t) {
  const e = ks(t, this.size, 3);
  s16.uniform3fv(this.addr, e);
}
function e0(s16, t) {
  const e = ks(t, this.size, 4);
  s16.uniform4fv(this.addr, e);
}
function n0(s16, t) {
  const e = ks(t, this.size, 4);
  s16.uniformMatrix2fv(this.addr, false, e);
}
function i0(s16, t) {
  const e = ks(t, this.size, 9);
  s16.uniformMatrix3fv(this.addr, false, e);
}
function s0(s16, t) {
  const e = ks(t, this.size, 16);
  s16.uniformMatrix4fv(this.addr, false, e);
}
function r0(s16, t) {
  s16.uniform1iv(this.addr, t);
}
function a0(s16, t) {
  s16.uniform2iv(this.addr, t);
}
function o0(s16, t) {
  s16.uniform3iv(this.addr, t);
}
function l0(s16, t) {
  s16.uniform4iv(this.addr, t);
}
function c0(s16, t) {
  s16.uniform1uiv(this.addr, t);
}
function h0(s16, t) {
  s16.uniform2uiv(this.addr, t);
}
function u0(s16, t) {
  s16.uniform3uiv(this.addr, t);
}
function f0(s16, t) {
  s16.uniform4uiv(this.addr, t);
}
function d0(s16, t, e) {
  const n = this.cache, i = t.length, r = da(e, i);
  Ae(n, r) || (s16.uniform1iv(this.addr, r), we(n, r));
  let a;
  this.type === s16.SAMPLER_2D_SHADOW ? a = Jo : a = $h;
  for (let o = 0; o !== i; ++o) e.setTexture2D(t[o] || a, r[o]);
}
function p0(s16, t, e) {
  const n = this.cache, i = t.length, r = da(e, i);
  Ae(n, r) || (s16.uniform1iv(this.addr, r), we(n, r));
  for (let a = 0; a !== i; ++a) e.setTexture3D(t[a] || Qh, r[a]);
}
function m0(s16, t, e) {
  const n = this.cache, i = t.length, r = da(e, i);
  Ae(n, r) || (s16.uniform1iv(this.addr, r), we(n, r));
  for (let a = 0; a !== i; ++a) e.setTextureCube(t[a] || tu, r[a]);
}
function _0(s16, t, e) {
  const n = this.cache, i = t.length, r = da(e, i);
  Ae(n, r) || (s16.uniform1iv(this.addr, r), we(n, r));
  for (let a = 0; a !== i; ++a) e.setTexture2DArray(t[a] || Jh, r[a]);
}
function g0(s16) {
  switch (s16) {
    case 5126:
      return J_;
    case 35664:
      return Q_;
    case 35665:
      return t0;
    case 35666:
      return e0;
    case 35674:
      return n0;
    case 35675:
      return i0;
    case 35676:
      return s0;
    case 5124:
    case 35670:
      return r0;
    case 35667:
    case 35671:
      return a0;
    case 35668:
    case 35672:
      return o0;
    case 35669:
    case 35673:
      return l0;
    case 5125:
      return c0;
    case 36294:
      return h0;
    case 36295:
      return u0;
    case 36296:
      return f0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return d0;
    case 35679:
    case 36299:
    case 36307:
      return p0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return m0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return _0;
  }
}
class x0 {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = $_(e.type);
  }
}
class v0 {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = g0(e.type);
  }
}
class M0 {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const $a = /(\w+)(\])?(\[|\.)?/g;
function Wc(s16, t) {
  s16.seq.push(t), s16.map[t.id] = t;
}
function S0(s16, t, e) {
  const n = s16.name, i = n.length;
  for ($a.lastIndex = 0; ; ) {
    const r = $a.exec(n), a = $a.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      Wc(e, c === void 0 ? new x0(o, s16, t) : new v0(o, s16, t));
      break;
    } else {
      let f = e.map[o];
      f === void 0 && (f = new M0(o), Wc(e, f)), e = f;
    }
  }
}
class Kr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = t.getActiveUniform(e, a), l = t.getUniformLocation(e, o.name);
      S0(o, l, this);
    }
    const i = [], r = [];
    for (const a of this.seq) a.type === t.SAMPLER_2D_SHADOW || a.type === t.SAMPLER_CUBE_SHADOW || a.type === t.SAMPLER_2D_ARRAY_SHADOW ? i.push(a) : r.push(a);
    i.length > 0 && (this.seq = i.concat(r));
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(t, l.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const a = t[i];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Xc(s16, t, e) {
  const n = s16.createShader(t);
  return s16.shaderSource(n, e), s16.compileShader(n), n;
}
const y0 = 37297;
let E0 = 0;
function T0(s16, t) {
  const e = s16.split(`
`), n = [], i = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Yc = new Ft();
function b0(s16) {
  Kt._getMatrix(Yc, Kt.workingColorSpace, s16);
  const t = `mat3( ${Yc.elements.map((e) => e.toFixed(4))} )`;
  switch (Kt.getTransfer(s16)) {
    case Jr:
      return [t, "LinearTransferOETF"];
    case te:
      return [t, "sRGBTransferOETF"];
    default:
      return Pt("WebGLProgram: Unsupported color space: ", s16), [t, "LinearTransferOETF"];
  }
}
function qc(s16, t, e) {
  const n = s16.getShaderParameter(t, s16.COMPILE_STATUS), r = (s16.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + r + `

` + T0(s16.getShaderSource(t), o);
  } else return r;
}
function A0(s16, t) {
  const e = b0(t);
  return [`vec4 ${s16}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
const w0 = { [yh]: "Linear", [Eh]: "Reinhard", [Th]: "Cineon", [_l]: "ACESFilmic", [Ah]: "AgX", [wh]: "Neutral", [bh]: "Custom" };
function R0(s16, t) {
  const e = w0[t];
  return e === void 0 ? (Pt("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + s16 + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + s16 + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const kr = new k();
function C0() {
  Kt.getLuminanceCoefficients(kr);
  const s16 = kr.x.toFixed(4), t = kr.y.toFixed(4), e = kr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s16}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function P0(s16) {
  return [s16.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s16.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(js).join(`
`);
}
function D0(s16) {
  const t = [];
  for (const e in s16) {
    const n = s16[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function L0(s16, t) {
  const e = {}, n = s16.getProgramParameter(t, s16.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s16.getActiveAttrib(t, i), a = r.name;
    let o = 1;
    r.type === s16.FLOAT_MAT2 && (o = 2), r.type === s16.FLOAT_MAT3 && (o = 3), r.type === s16.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: s16.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function js(s16) {
  return s16 !== "";
}
function Kc(s16, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return s16.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function jc(s16, t) {
  return s16.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const I0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Qo(s16) {
  return s16.replace(I0, N0);
}
const U0 = /* @__PURE__ */ new Map();
function N0(s16, t) {
  let e = Bt[t];
  if (e === void 0) {
    const n = U0.get(t);
    if (n !== void 0) e = Bt[n], Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return Qo(e);
}
const F0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Zc(s16) {
  return s16.replace(F0, O0);
}
function O0(s16, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function $c(s16) {
  let t = `precision ${s16.precision} float;
	precision ${s16.precision} int;
	precision ${s16.precision} sampler2D;
	precision ${s16.precision} samplerCube;
	precision ${s16.precision} sampler3D;
	precision ${s16.precision} sampler2DArray;
	precision ${s16.precision} sampler2DShadow;
	precision ${s16.precision} samplerCubeShadow;
	precision ${s16.precision} sampler2DArrayShadow;
	precision ${s16.precision} isampler2D;
	precision ${s16.precision} isampler3D;
	precision ${s16.precision} isamplerCube;
	precision ${s16.precision} isampler2DArray;
	precision ${s16.precision} usampler2D;
	precision ${s16.precision} usampler3D;
	precision ${s16.precision} usamplerCube;
	precision ${s16.precision} usampler2DArray;
	`;
  return s16.precision === "highp" ? t += `
#define HIGH_PRECISION` : s16.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : s16.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
const B0 = { [Gr]: "SHADOWMAP_TYPE_PCF", [Ks]: "SHADOWMAP_TYPE_VSM" };
function k0(s16) {
  return B0[s16.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const z0 = { [Zi]: "ENVMAP_TYPE_CUBE", [Cs]: "ENVMAP_TYPE_CUBE", [ha]: "ENVMAP_TYPE_CUBE_UV" };
function V0(s16) {
  return s16.envMap === false ? "ENVMAP_TYPE_CUBE" : z0[s16.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const G0 = { [Cs]: "ENVMAP_MODE_REFRACTION" };
function H0(s16) {
  return s16.envMap === false ? "ENVMAP_MODE_REFLECTION" : G0[s16.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const W0 = { [Sh]: "ENVMAP_BLENDING_MULTIPLY", [Cf]: "ENVMAP_BLENDING_MIX", [Pf]: "ENVMAP_BLENDING_ADD" };
function X0(s16) {
  return s16.envMap === false ? "ENVMAP_BLENDING_NONE" : W0[s16.combine] || "ENVMAP_BLENDING_NONE";
}
function Y0(s16) {
  const t = s16.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function q0(s16, t, e, n) {
  const i = s16.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = k0(e), c = V0(e), h = H0(e), f = X0(e), u = Y0(e), m = P0(e), _ = D0(r), g = i.createProgram();
  let p, d, M = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(js).join(`
`), p.length > 0 && (p += `
`), d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(js).join(`
`), d.length > 0 && (d += `
`)) : (p = [$c(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(js).join(`
`), d = [$c(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + f : "", u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "", u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "", u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas || e.batchingColor ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== On ? "#define TONE_MAPPING" : "", e.toneMapping !== On ? Bt.tonemapping_pars_fragment : "", e.toneMapping !== On ? R0("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Bt.colorspace_pars_fragment, A0("linearToOutputTexel", e.outputColorSpace), C0(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(js).join(`
`)), a = Qo(a), a = Kc(a, e), a = jc(a, e), o = Qo(o), o = Kc(o, e), o = jc(o, e), a = Zc(a), o = Zc(o), e.isRawShaderMaterial !== true && (M = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, d = ["#define varying in", e.glslVersion === hc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === hc ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + d);
  const E = M + p + a, S = M + d + o, b = Xc(i, i.VERTEX_SHADER, E), A = Xc(i, i.FRAGMENT_SHADER, S);
  i.attachShader(g, b), i.attachShader(g, A), e.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, e.index0AttributeName) : e.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
  function w(C) {
    if (s16.debug.checkShaderErrors) {
      const L = i.getProgramInfoLog(g) || "", U = i.getShaderInfoLog(b) || "", V = i.getShaderInfoLog(A) || "", O = L.trim(), B = U.trim(), N = V.trim();
      let Z = true, $ = true;
      if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (Z = false, typeof s16.debug.onShaderError == "function") s16.debug.onShaderError(i, g, b, A);
      else {
        const at = qc(i, b, "vertex"), ut = qc(i, A, "fragment");
        Zt("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + O + `
` + at + `
` + ut);
      }
      else O !== "" ? Pt("WebGLProgram: Program Info Log:", O) : (B === "" || N === "") && ($ = false);
      $ && (C.diagnostics = { runnable: Z, programLog: O, vertexShader: { log: B, prefix: p }, fragmentShader: { log: N, prefix: d } });
    }
    i.deleteShader(b), i.deleteShader(A), x = new Kr(i, g), y = L0(i, g);
  }
  let x;
  this.getUniforms = function() {
    return x === void 0 && w(this), x;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && w(this), y;
  };
  let z = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return z === false && (z = i.getProgramParameter(g, y0)), z;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = E0++, this.cacheKey = t, this.usedTimes = 1, this.program = g, this.vertexShader = b, this.fragmentShader = A, this;
}
let K0 = 0;
class j0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new Z0(t), e.set(t, n)), n;
  }
}
class Z0 {
  constructor(t) {
    this.id = K0++, this.code = t, this.usedTimes = 0;
  }
}
function $0(s16, t, e, n, i, r) {
  const a = new kh(), o = new j0(), l = /* @__PURE__ */ new Set(), c = [], h = /* @__PURE__ */ new Map(), f = n.logarithmicDepthBuffer;
  let u = n.precision;
  const m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(x) {
    return l.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function g(x, y, z, C, L) {
    const U = C.fog, V = L.geometry, O = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? C.environment : null, B = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap, N = t.get(x.envMap || O, B), Z = N && N.mapping === ha ? N.image.height : null, $ = m[x.type];
    x.precision !== null && (u = n.getMaxPrecision(x.precision), u !== x.precision && Pt("WebGLProgram.getParameters:", x.precision, "not supported, using", u, "instead."));
    const at = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, ut = at !== void 0 ? at.length : 0;
    let ot = 0;
    V.morphAttributes.position !== void 0 && (ot = 1), V.morphAttributes.normal !== void 0 && (ot = 2), V.morphAttributes.color !== void 0 && (ot = 3);
    let It, Xt, Yt, K;
    if ($) {
      const Qt = Dn[$];
      It = Qt.vertexShader, Xt = Qt.fragmentShader;
    } else It = x.vertexShader, Xt = x.fragmentShader, o.update(x), Yt = o.getVertexShaderID(x), K = o.getFragmentShaderID(x);
    const nt = s16.getRenderTarget(), rt = s16.state.buffers.depth.getReversed(), Nt = L.isInstancedMesh === true, wt = L.isBatchedMesh === true, Ct = !!x.map, Re = !!x.matcap, qt = !!N, Jt = !!x.aoMap, re = !!x.lightMap, kt = !!x.bumpMap, ve = !!x.normalMap, P = !!x.displacementMap, ye = !!x.emissiveMap, $t = !!x.metalnessMap, le = !!x.roughnessMap, St = x.anisotropy > 0, R = x.clearcoat > 0, v = x.dispersion > 0, I = x.iridescence > 0, q = x.sheen > 0, j = x.transmission > 0, Y = St && !!x.anisotropyMap, mt = R && !!x.clearcoatMap, it = R && !!x.clearcoatNormalMap, bt = R && !!x.clearcoatRoughnessMap, Rt = I && !!x.iridescenceMap, J = I && !!x.iridescenceThicknessMap, tt = q && !!x.sheenColorMap, _t = q && !!x.sheenRoughnessMap, xt = !!x.specularMap, ft = !!x.specularColorMap, zt = !!x.specularIntensityMap, D = j && !!x.transmissionMap, st = j && !!x.thicknessMap, et = !!x.gradientMap, pt = !!x.alphaMap, Q = x.alphaTest > 0, X = !!x.alphaHash, gt = !!x.extensions;
    let Dt = On;
    x.toneMapped && (nt === null || nt.isXRRenderTarget === true) && (Dt = s16.toneMapping);
    const ce = { shaderID: $, shaderType: x.type, shaderName: x.name, vertexShader: It, fragmentShader: Xt, defines: x.defines, customVertexShaderID: Yt, customFragmentShaderID: K, isRawShaderMaterial: x.isRawShaderMaterial === true, glslVersion: x.glslVersion, precision: u, batching: wt, batchingColor: wt && L._colorsTexture !== null, instancing: Nt, instancingColor: Nt && L.instanceColor !== null, instancingMorph: Nt && L.morphTexture !== null, outputColorSpace: nt === null ? s16.outputColorSpace : nt.isXRRenderTarget === true ? nt.texture.colorSpace : Ds, alphaToCoverage: !!x.alphaToCoverage, map: Ct, matcap: Re, envMap: qt, envMapMode: qt && N.mapping, envMapCubeUVHeight: Z, aoMap: Jt, lightMap: re, bumpMap: kt, normalMap: ve, displacementMap: P, emissiveMap: ye, normalMapObjectSpace: ve && x.normalMapType === If, normalMapTangentSpace: ve && x.normalMapType === Fh, metalnessMap: $t, roughnessMap: le, anisotropy: St, anisotropyMap: Y, clearcoat: R, clearcoatMap: mt, clearcoatNormalMap: it, clearcoatRoughnessMap: bt, dispersion: v, iridescence: I, iridescenceMap: Rt, iridescenceThicknessMap: J, sheen: q, sheenColorMap: tt, sheenRoughnessMap: _t, specularMap: xt, specularColorMap: ft, specularIntensityMap: zt, transmission: j, transmissionMap: D, thicknessMap: st, gradientMap: et, opaque: x.transparent === false && x.blending === ys && x.alphaToCoverage === false, alphaMap: pt, alphaTest: Q, alphaHash: X, combine: x.combine, mapUv: Ct && _(x.map.channel), aoMapUv: Jt && _(x.aoMap.channel), lightMapUv: re && _(x.lightMap.channel), bumpMapUv: kt && _(x.bumpMap.channel), normalMapUv: ve && _(x.normalMap.channel), displacementMapUv: P && _(x.displacementMap.channel), emissiveMapUv: ye && _(x.emissiveMap.channel), metalnessMapUv: $t && _(x.metalnessMap.channel), roughnessMapUv: le && _(x.roughnessMap.channel), anisotropyMapUv: Y && _(x.anisotropyMap.channel), clearcoatMapUv: mt && _(x.clearcoatMap.channel), clearcoatNormalMapUv: it && _(x.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: bt && _(x.clearcoatRoughnessMap.channel), iridescenceMapUv: Rt && _(x.iridescenceMap.channel), iridescenceThicknessMapUv: J && _(x.iridescenceThicknessMap.channel), sheenColorMapUv: tt && _(x.sheenColorMap.channel), sheenRoughnessMapUv: _t && _(x.sheenRoughnessMap.channel), specularMapUv: xt && _(x.specularMap.channel), specularColorMapUv: ft && _(x.specularColorMap.channel), specularIntensityMapUv: zt && _(x.specularIntensityMap.channel), transmissionMapUv: D && _(x.transmissionMap.channel), thicknessMapUv: st && _(x.thicknessMap.channel), alphaMapUv: pt && _(x.alphaMap.channel), vertexTangents: !!V.attributes.tangent && (ve || St), vertexColors: x.vertexColors, vertexAlphas: x.vertexColors === true && !!V.attributes.color && V.attributes.color.itemSize === 4, pointsUvs: L.isPoints === true && !!V.attributes.uv && (Ct || pt), fog: !!U, useFog: x.fog === true, fogExp2: !!U && U.isFogExp2, flatShading: x.wireframe === false && (x.flatShading === true || V.attributes.normal === void 0 && ve === false && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)), sizeAttenuation: x.sizeAttenuation === true, logarithmicDepthBuffer: f, reversedDepthBuffer: rt, skinning: L.isSkinnedMesh === true, morphTargets: V.morphAttributes.position !== void 0, morphNormals: V.morphAttributes.normal !== void 0, morphColors: V.morphAttributes.color !== void 0, morphTargetsCount: ut, morphTextureStride: ot, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: r.numPlanes, numClipIntersection: r.numIntersection, dithering: x.dithering, shadowMapEnabled: s16.shadowMap.enabled && z.length > 0, shadowMapType: s16.shadowMap.type, toneMapping: Dt, decodeVideoTexture: Ct && x.map.isVideoTexture === true && Kt.getTransfer(x.map.colorSpace) === te, decodeVideoTextureEmissive: ye && x.emissiveMap.isVideoTexture === true && Kt.getTransfer(x.emissiveMap.colorSpace) === te, premultipliedAlpha: x.premultipliedAlpha, doubleSided: x.side === Ln, flipSided: x.side === je, useDepthPacking: x.depthPacking >= 0, depthPacking: x.depthPacking || 0, index0AttributeName: x.index0AttributeName, extensionClipCullDistance: gt && x.extensions.clipCullDistance === true && e.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (gt && x.extensions.multiDraw === true || wt) && e.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: e.has("KHR_parallel_shader_compile"), customProgramCacheKey: x.customProgramCacheKey() };
    return ce.vertexUv1s = l.has(1), ce.vertexUv2s = l.has(2), ce.vertexUv3s = l.has(3), l.clear(), ce;
  }
  function p(x) {
    const y = [];
    if (x.shaderID ? y.push(x.shaderID) : (y.push(x.customVertexShaderID), y.push(x.customFragmentShaderID)), x.defines !== void 0) for (const z in x.defines) y.push(z), y.push(x.defines[z]);
    return x.isRawShaderMaterial === false && (d(y, x), M(y, x), y.push(s16.outputColorSpace)), y.push(x.customProgramCacheKey), y.join();
  }
  function d(x, y) {
    x.push(y.precision), x.push(y.outputColorSpace), x.push(y.envMapMode), x.push(y.envMapCubeUVHeight), x.push(y.mapUv), x.push(y.alphaMapUv), x.push(y.lightMapUv), x.push(y.aoMapUv), x.push(y.bumpMapUv), x.push(y.normalMapUv), x.push(y.displacementMapUv), x.push(y.emissiveMapUv), x.push(y.metalnessMapUv), x.push(y.roughnessMapUv), x.push(y.anisotropyMapUv), x.push(y.clearcoatMapUv), x.push(y.clearcoatNormalMapUv), x.push(y.clearcoatRoughnessMapUv), x.push(y.iridescenceMapUv), x.push(y.iridescenceThicknessMapUv), x.push(y.sheenColorMapUv), x.push(y.sheenRoughnessMapUv), x.push(y.specularMapUv), x.push(y.specularColorMapUv), x.push(y.specularIntensityMapUv), x.push(y.transmissionMapUv), x.push(y.thicknessMapUv), x.push(y.combine), x.push(y.fogExp2), x.push(y.sizeAttenuation), x.push(y.morphTargetsCount), x.push(y.morphAttributeCount), x.push(y.numDirLights), x.push(y.numPointLights), x.push(y.numSpotLights), x.push(y.numSpotLightMaps), x.push(y.numHemiLights), x.push(y.numRectAreaLights), x.push(y.numDirLightShadows), x.push(y.numPointLightShadows), x.push(y.numSpotLightShadows), x.push(y.numSpotLightShadowsWithMaps), x.push(y.numLightProbes), x.push(y.shadowMapType), x.push(y.toneMapping), x.push(y.numClippingPlanes), x.push(y.numClipIntersection), x.push(y.depthPacking);
  }
  function M(x, y) {
    a.disableAll(), y.instancing && a.enable(0), y.instancingColor && a.enable(1), y.instancingMorph && a.enable(2), y.matcap && a.enable(3), y.envMap && a.enable(4), y.normalMapObjectSpace && a.enable(5), y.normalMapTangentSpace && a.enable(6), y.clearcoat && a.enable(7), y.iridescence && a.enable(8), y.alphaTest && a.enable(9), y.vertexColors && a.enable(10), y.vertexAlphas && a.enable(11), y.vertexUv1s && a.enable(12), y.vertexUv2s && a.enable(13), y.vertexUv3s && a.enable(14), y.vertexTangents && a.enable(15), y.anisotropy && a.enable(16), y.alphaHash && a.enable(17), y.batching && a.enable(18), y.dispersion && a.enable(19), y.batchingColor && a.enable(20), y.gradientMap && a.enable(21), x.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reversedDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), x.push(a.mask);
  }
  function E(x) {
    const y = m[x.type];
    let z;
    if (y) {
      const C = Dn[y];
      z = xd.clone(C.uniforms);
    } else z = x.uniforms;
    return z;
  }
  function S(x, y) {
    let z = h.get(y);
    return z !== void 0 ? ++z.usedTimes : (z = new q0(s16, y, x, i), c.push(z), h.set(y, z)), z;
  }
  function b(x) {
    if (--x.usedTimes === 0) {
      const y = c.indexOf(x);
      c[y] = c[c.length - 1], c.pop(), h.delete(x.cacheKey), x.destroy();
    }
  }
  function A(x) {
    o.remove(x);
  }
  function w() {
    o.dispose();
  }
  return { getParameters: g, getProgramCacheKey: p, getUniforms: E, acquireProgram: S, releaseProgram: b, releaseShaderCache: A, programs: c, dispose: w };
}
function J0() {
  let s16 = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return s16.has(a);
  }
  function e(a) {
    let o = s16.get(a);
    return o === void 0 && (o = {}, s16.set(a, o)), o;
  }
  function n(a) {
    s16.delete(a);
  }
  function i(a, o, l) {
    s16.get(a)[o] = l;
  }
  function r() {
    s16 = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: i, dispose: r };
}
function Q0(s16, t) {
  return s16.groupOrder !== t.groupOrder ? s16.groupOrder - t.groupOrder : s16.renderOrder !== t.renderOrder ? s16.renderOrder - t.renderOrder : s16.material.id !== t.material.id ? s16.material.id - t.material.id : s16.materialVariant !== t.materialVariant ? s16.materialVariant - t.materialVariant : s16.z !== t.z ? s16.z - t.z : s16.id - t.id;
}
function Jc(s16, t) {
  return s16.groupOrder !== t.groupOrder ? s16.groupOrder - t.groupOrder : s16.renderOrder !== t.renderOrder ? s16.renderOrder - t.renderOrder : s16.z !== t.z ? t.z - s16.z : s16.id - t.id;
}
function Qc() {
  const s16 = [];
  let t = 0;
  const e = [], n = [], i = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function a(u) {
    let m = 0;
    return u.isInstancedMesh && (m += 2), u.isSkinnedMesh && (m += 1), m;
  }
  function o(u, m, _, g, p, d) {
    let M = s16[t];
    return M === void 0 ? (M = { id: u.id, object: u, geometry: m, material: _, materialVariant: a(u), groupOrder: g, renderOrder: u.renderOrder, z: p, group: d }, s16[t] = M) : (M.id = u.id, M.object = u, M.geometry = m, M.material = _, M.materialVariant = a(u), M.groupOrder = g, M.renderOrder = u.renderOrder, M.z = p, M.group = d), t++, M;
  }
  function l(u, m, _, g, p, d) {
    const M = o(u, m, _, g, p, d);
    _.transmission > 0 ? n.push(M) : _.transparent === true ? i.push(M) : e.push(M);
  }
  function c(u, m, _, g, p, d) {
    const M = o(u, m, _, g, p, d);
    _.transmission > 0 ? n.unshift(M) : _.transparent === true ? i.unshift(M) : e.unshift(M);
  }
  function h(u, m) {
    e.length > 1 && e.sort(u || Q0), n.length > 1 && n.sort(m || Jc), i.length > 1 && i.sort(m || Jc);
  }
  function f() {
    for (let u = t, m = s16.length; u < m; u++) {
      const _ = s16[u];
      if (_.id === null) break;
      _.id = null, _.object = null, _.geometry = null, _.material = null, _.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: i, init: r, push: l, unshift: c, finish: f, sort: h };
}
function tg() {
  let s16 = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const r = s16.get(n);
    let a;
    return r === void 0 ? (a = new Qc(), s16.set(n, [a])) : i >= r.length ? (a = new Qc(), r.push(a)) : a = r[i], a;
  }
  function e() {
    s16 = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function eg() {
  const s16 = {};
  return { get: function(t) {
    if (s16[t.id] !== void 0) return s16[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new k(), color: new Ht() };
        break;
      case "SpotLight":
        e = { position: new k(), direction: new k(), color: new Ht(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new k(), color: new Ht(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new k(), skyColor: new Ht(), groundColor: new Ht() };
        break;
      case "RectAreaLight":
        e = { color: new Ht(), position: new k(), halfWidth: new k(), halfHeight: new k() };
        break;
    }
    return s16[t.id] = e, e;
  } };
}
function ng() {
  const s16 = {};
  return { get: function(t) {
    if (s16[t.id] !== void 0) return s16[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s16[t.id] = e, e;
  } };
}
let ig = 0;
function sg(s16, t) {
  return (t.castShadow ? 2 : 0) - (s16.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (s16.map ? 1 : 0);
}
function rg(s16) {
  const t = new eg(), e = ng(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new k());
  const i = new k(), r = new xe(), a = new xe();
  function o(c) {
    let h = 0, f = 0, u = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let m = 0, _ = 0, g = 0, p = 0, d = 0, M = 0, E = 0, S = 0, b = 0, A = 0, w = 0;
    c.sort(sg);
    for (let y = 0, z = c.length; y < z; y++) {
      const C = c[y], L = C.color, U = C.intensity, V = C.distance;
      let O = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === Ps ? O = C.shadow.map.texture : O = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight) h += L.r * U, f += L.g * U, u += L.b * U;
      else if (C.isLightProbe) {
        for (let B = 0; B < 9; B++) n.probe[B].addScaledVector(C.sh.coefficients[B], U);
        w++;
      } else if (C.isDirectionalLight) {
        const B = t.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const N = C.shadow, Z = e.get(C);
          Z.shadowIntensity = N.intensity, Z.shadowBias = N.bias, Z.shadowNormalBias = N.normalBias, Z.shadowRadius = N.radius, Z.shadowMapSize = N.mapSize, n.directionalShadow[m] = Z, n.directionalShadowMap[m] = O, n.directionalShadowMatrix[m] = C.shadow.matrix, M++;
        }
        n.directional[m] = B, m++;
      } else if (C.isSpotLight) {
        const B = t.get(C);
        B.position.setFromMatrixPosition(C.matrixWorld), B.color.copy(L).multiplyScalar(U), B.distance = V, B.coneCos = Math.cos(C.angle), B.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), B.decay = C.decay, n.spot[g] = B;
        const N = C.shadow;
        if (C.map && (n.spotLightMap[b] = C.map, b++, N.updateMatrices(C), C.castShadow && A++), n.spotLightMatrix[g] = N.matrix, C.castShadow) {
          const Z = e.get(C);
          Z.shadowIntensity = N.intensity, Z.shadowBias = N.bias, Z.shadowNormalBias = N.normalBias, Z.shadowRadius = N.radius, Z.shadowMapSize = N.mapSize, n.spotShadow[g] = Z, n.spotShadowMap[g] = O, S++;
        }
        g++;
      } else if (C.isRectAreaLight) {
        const B = t.get(C);
        B.color.copy(L).multiplyScalar(U), B.halfWidth.set(C.width * 0.5, 0, 0), B.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[p] = B, p++;
      } else if (C.isPointLight) {
        const B = t.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), B.distance = C.distance, B.decay = C.decay, C.castShadow) {
          const N = C.shadow, Z = e.get(C);
          Z.shadowIntensity = N.intensity, Z.shadowBias = N.bias, Z.shadowNormalBias = N.normalBias, Z.shadowRadius = N.radius, Z.shadowMapSize = N.mapSize, Z.shadowCameraNear = N.camera.near, Z.shadowCameraFar = N.camera.far, n.pointShadow[_] = Z, n.pointShadowMap[_] = O, n.pointShadowMatrix[_] = C.shadow.matrix, E++;
        }
        n.point[_] = B, _++;
      } else if (C.isHemisphereLight) {
        const B = t.get(C);
        B.skyColor.copy(C.color).multiplyScalar(U), B.groundColor.copy(C.groundColor).multiplyScalar(U), n.hemi[d] = B, d++;
      }
    }
    p > 0 && (s16.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = lt.LTC_FLOAT_1, n.rectAreaLTC2 = lt.LTC_FLOAT_2) : (n.rectAreaLTC1 = lt.LTC_HALF_1, n.rectAreaLTC2 = lt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = u;
    const x = n.hash;
    (x.directionalLength !== m || x.pointLength !== _ || x.spotLength !== g || x.rectAreaLength !== p || x.hemiLength !== d || x.numDirectionalShadows !== M || x.numPointShadows !== E || x.numSpotShadows !== S || x.numSpotMaps !== b || x.numLightProbes !== w) && (n.directional.length = m, n.spot.length = g, n.rectArea.length = p, n.point.length = _, n.hemi.length = d, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = S + b - A, n.spotLightMap.length = b, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = w, x.directionalLength = m, x.pointLength = _, x.spotLength = g, x.rectAreaLength = p, x.hemiLength = d, x.numDirectionalShadows = M, x.numPointShadows = E, x.numSpotShadows = S, x.numSpotMaps = b, x.numLightProbes = w, n.version = ig++);
  }
  function l(c, h) {
    let f = 0, u = 0, m = 0, _ = 0, g = 0;
    const p = h.matrixWorldInverse;
    for (let d = 0, M = c.length; d < M; d++) {
      const E = c[d];
      if (E.isDirectionalLight) {
        const S = n.directional[f];
        S.direction.setFromMatrixPosition(E.matrixWorld), i.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(p), f++;
      } else if (E.isSpotLight) {
        const S = n.spot[m];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(E.matrixWorld), i.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(p), m++;
      } else if (E.isRectAreaLight) {
        const S = n.rectArea[_];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(p), a.identity(), r.copy(E.matrixWorld), r.premultiply(p), a.extractRotation(r), S.halfWidth.set(E.width * 0.5, 0, 0), S.halfHeight.set(0, E.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), _++;
      } else if (E.isPointLight) {
        const S = n.point[u];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(p), u++;
      } else if (E.isHemisphereLight) {
        const S = n.hemi[g];
        S.direction.setFromMatrixPosition(E.matrixWorld), S.direction.transformDirection(p), g++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function th(s16) {
  const t = new rg(s16), e = [], n = [];
  function i(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function ag(s16) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, r = 0) {
    const a = t.get(i);
    let o;
    return a === void 0 ? (o = new th(s16), t.set(i, [o])) : r >= a.length ? (o = new th(s16), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const og = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, lg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, cg = [new k(1, 0, 0), new k(-1, 0, 0), new k(0, 1, 0), new k(0, -1, 0), new k(0, 0, 1), new k(0, 0, -1)], hg = [new k(0, -1, 0), new k(0, -1, 0), new k(0, 0, 1), new k(0, 0, -1), new k(0, -1, 0), new k(0, -1, 0)], eh = new xe(), Ys = new k(), Ja = new k();
function ug(s16, t, e) {
  let n = new wl();
  const i = new Lt(), r = new Lt(), a = new _e(), o = new yd(), l = new Ed(), c = {}, h = e.maxTextureSize, f = { [bi]: je, [je]: bi, [Ln]: Ln }, u = new Wn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Lt() }, radius: { value: 4 } }, vertexShader: og, fragmentShader: lg }), m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new An();
  _.setAttribute("position", new kn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const g = new Mt(_, u), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Gr;
  let d = this.type;
  this.render = function(A, w, x) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || A.length === 0) return;
    this.type === Mh && (Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = Gr);
    const y = s16.getRenderTarget(), z = s16.getActiveCubeFace(), C = s16.getActiveMipmapLevel(), L = s16.state;
    L.setBlending(ni), L.buffers.depth.getReversed() === true ? L.buffers.color.setClear(0, 0, 0, 0) : L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(true), L.setScissorTest(false);
    const U = d !== this.type;
    U && w.traverse(function(V) {
      V.material && (Array.isArray(V.material) ? V.material.forEach((O) => O.needsUpdate = true) : V.material.needsUpdate = true);
    });
    for (let V = 0, O = A.length; V < O; V++) {
      const B = A[V], N = B.shadow;
      if (N === void 0) {
        Pt("WebGLShadowMap:", B, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === false && N.needsUpdate === false) continue;
      i.copy(N.mapSize);
      const Z = N.getFrameExtents();
      i.multiply(Z), r.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / Z.x), i.x = r.x * Z.x, N.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / Z.y), i.y = r.y * Z.y, N.mapSize.y = r.y));
      const $ = s16.state.buffers.depth.getReversed();
      if (N.camera._reversedDepth = $, N.map === null || U === true) {
        if (N.map !== null && (N.map.depthTexture !== null && (N.map.depthTexture.dispose(), N.map.depthTexture = null), N.map.dispose()), this.type === Ks) {
          if (B.isPointLight) {
            Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          N.map = new Bn(i.x, i.y, { format: Ps, type: ri, minFilter: ze, magFilter: ze, generateMipmaps: false }), N.map.texture.name = B.name + ".shadowMap", N.map.depthTexture = new rr(i.x, i.y, Un), N.map.depthTexture.name = B.name + ".shadowMapDepth", N.map.depthTexture.format = ai, N.map.depthTexture.compareFunction = null, N.map.depthTexture.minFilter = Ne, N.map.depthTexture.magFilter = Ne;
        } else B.isPointLight ? (N.map = new Zh(i.x), N.map.depthTexture = new md(i.x, Vn)) : (N.map = new Bn(i.x, i.y), N.map.depthTexture = new rr(i.x, i.y, Vn)), N.map.depthTexture.name = B.name + ".shadowMap", N.map.depthTexture.format = ai, this.type === Gr ? (N.map.depthTexture.compareFunction = $ ? Tl : El, N.map.depthTexture.minFilter = ze, N.map.depthTexture.magFilter = ze) : (N.map.depthTexture.compareFunction = null, N.map.depthTexture.minFilter = Ne, N.map.depthTexture.magFilter = Ne);
        N.camera.updateProjectionMatrix();
      }
      const at = N.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ut = 0; ut < at; ut++) {
        if (N.map.isWebGLCubeRenderTarget) s16.setRenderTarget(N.map, ut), s16.clear();
        else {
          ut === 0 && (s16.setRenderTarget(N.map), s16.clear());
          const ot = N.getViewport(ut);
          a.set(r.x * ot.x, r.y * ot.y, r.x * ot.z, r.y * ot.w), L.viewport(a);
        }
        if (B.isPointLight) {
          const ot = N.camera, It = N.matrix, Xt = B.distance || ot.far;
          Xt !== ot.far && (ot.far = Xt, ot.updateProjectionMatrix()), Ys.setFromMatrixPosition(B.matrixWorld), ot.position.copy(Ys), Ja.copy(ot.position), Ja.add(cg[ut]), ot.up.copy(hg[ut]), ot.lookAt(Ja), ot.updateMatrixWorld(), It.makeTranslation(-Ys.x, -Ys.y, -Ys.z), eh.multiplyMatrices(ot.projectionMatrix, ot.matrixWorldInverse), N._frustum.setFromProjectionMatrix(eh, ot.coordinateSystem, ot.reversedDepth);
        } else N.updateMatrices(B);
        n = N.getFrustum(), S(w, x, N.camera, B, this.type);
      }
      N.isPointLightShadow !== true && this.type === Ks && M(N, x), N.needsUpdate = false;
    }
    d = this.type, p.needsUpdate = false, s16.setRenderTarget(y, z, C);
  };
  function M(A, w) {
    const x = t.update(g);
    u.defines.VSM_SAMPLES !== A.blurSamples && (u.defines.VSM_SAMPLES = A.blurSamples, m.defines.VSM_SAMPLES = A.blurSamples, u.needsUpdate = true, m.needsUpdate = true), A.mapPass === null && (A.mapPass = new Bn(i.x, i.y, { format: Ps, type: ri })), u.uniforms.shadow_pass.value = A.map.depthTexture, u.uniforms.resolution.value = A.mapSize, u.uniforms.radius.value = A.radius, s16.setRenderTarget(A.mapPass), s16.clear(), s16.renderBufferDirect(w, null, x, u, g, null), m.uniforms.shadow_pass.value = A.mapPass.texture, m.uniforms.resolution.value = A.mapSize, m.uniforms.radius.value = A.radius, s16.setRenderTarget(A.map), s16.clear(), s16.renderBufferDirect(w, null, x, m, g, null);
  }
  function E(A, w, x, y) {
    let z = null;
    const C = x.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (C !== void 0) z = C;
    else if (z = x.isPointLight === true ? l : o, s16.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === true) {
      const L = z.uuid, U = w.uuid;
      let V = c[L];
      V === void 0 && (V = {}, c[L] = V);
      let O = V[U];
      O === void 0 && (O = z.clone(), V[U] = O, w.addEventListener("dispose", b)), z = O;
    }
    if (z.visible = w.visible, z.wireframe = w.wireframe, y === Ks ? z.side = w.shadowSide !== null ? w.shadowSide : w.side : z.side = w.shadowSide !== null ? w.shadowSide : f[w.side], z.alphaMap = w.alphaMap, z.alphaTest = w.alphaToCoverage === true ? 0.5 : w.alphaTest, z.map = w.map, z.clipShadows = w.clipShadows, z.clippingPlanes = w.clippingPlanes, z.clipIntersection = w.clipIntersection, z.displacementMap = w.displacementMap, z.displacementScale = w.displacementScale, z.displacementBias = w.displacementBias, z.wireframeLinewidth = w.wireframeLinewidth, z.linewidth = w.linewidth, x.isPointLight === true && z.isMeshDistanceMaterial === true) {
      const L = s16.properties.get(z);
      L.light = x;
    }
    return z;
  }
  function S(A, w, x, y, z) {
    if (A.visible === false) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && z === Ks) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, A.matrixWorld);
      const U = t.update(A), V = A.material;
      if (Array.isArray(V)) {
        const O = U.groups;
        for (let B = 0, N = O.length; B < N; B++) {
          const Z = O[B], $ = V[Z.materialIndex];
          if ($ && $.visible) {
            const at = E(A, $, y, z);
            A.onBeforeShadow(s16, A, w, x, U, at, Z), s16.renderBufferDirect(x, null, U, at, A, Z), A.onAfterShadow(s16, A, w, x, U, at, Z);
          }
        }
      } else if (V.visible) {
        const O = E(A, V, y, z);
        A.onBeforeShadow(s16, A, w, x, U, O, null), s16.renderBufferDirect(x, null, U, O, A, null), A.onAfterShadow(s16, A, w, x, U, O, null);
      }
    }
    const L = A.children;
    for (let U = 0, V = L.length; U < V; U++) S(L[U], w, x, y, z);
  }
  function b(A) {
    A.target.removeEventListener("dispose", b);
    for (const x in c) {
      const y = c[x], z = A.target.uuid;
      z in y && (y[z].dispose(), delete y[z]);
    }
  }
}
function fg(s16, t) {
  function e() {
    let D = false;
    const st = new _e();
    let et = null;
    const pt = new _e(0, 0, 0, 0);
    return { setMask: function(Q) {
      et !== Q && !D && (s16.colorMask(Q, Q, Q, Q), et = Q);
    }, setLocked: function(Q) {
      D = Q;
    }, setClear: function(Q, X, gt, Dt, ce) {
      ce === true && (Q *= Dt, X *= Dt, gt *= Dt), st.set(Q, X, gt, Dt), pt.equals(st) === false && (s16.clearColor(Q, X, gt, Dt), pt.copy(st));
    }, reset: function() {
      D = false, et = null, pt.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, st = false, et = null, pt = null, Q = null;
    return { setReversed: function(X) {
      if (st !== X) {
        const gt = t.get("EXT_clip_control");
        X ? gt.clipControlEXT(gt.LOWER_LEFT_EXT, gt.ZERO_TO_ONE_EXT) : gt.clipControlEXT(gt.LOWER_LEFT_EXT, gt.NEGATIVE_ONE_TO_ONE_EXT), st = X;
        const Dt = Q;
        Q = null, this.setClear(Dt);
      }
    }, getReversed: function() {
      return st;
    }, setTest: function(X) {
      X ? nt(s16.DEPTH_TEST) : rt(s16.DEPTH_TEST);
    }, setMask: function(X) {
      et !== X && !D && (s16.depthMask(X), et = X);
    }, setFunc: function(X) {
      if (st && (X = Hf[X]), pt !== X) {
        switch (X) {
          case uo:
            s16.depthFunc(s16.NEVER);
            break;
          case fo:
            s16.depthFunc(s16.ALWAYS);
            break;
          case po:
            s16.depthFunc(s16.LESS);
            break;
          case Rs:
            s16.depthFunc(s16.LEQUAL);
            break;
          case mo:
            s16.depthFunc(s16.EQUAL);
            break;
          case _o:
            s16.depthFunc(s16.GEQUAL);
            break;
          case go:
            s16.depthFunc(s16.GREATER);
            break;
          case xo:
            s16.depthFunc(s16.NOTEQUAL);
            break;
          default:
            s16.depthFunc(s16.LEQUAL);
        }
        pt = X;
      }
    }, setLocked: function(X) {
      D = X;
    }, setClear: function(X) {
      Q !== X && (Q = X, st && (X = 1 - X), s16.clearDepth(X));
    }, reset: function() {
      D = false, et = null, pt = null, Q = null, st = false;
    } };
  }
  function i() {
    let D = false, st = null, et = null, pt = null, Q = null, X = null, gt = null, Dt = null, ce = null;
    return { setTest: function(Qt) {
      D || (Qt ? nt(s16.STENCIL_TEST) : rt(s16.STENCIL_TEST));
    }, setMask: function(Qt) {
      st !== Qt && !D && (s16.stencilMask(Qt), st = Qt);
    }, setFunc: function(Qt, Yn, qn) {
      (et !== Qt || pt !== Yn || Q !== qn) && (s16.stencilFunc(Qt, Yn, qn), et = Qt, pt = Yn, Q = qn);
    }, setOp: function(Qt, Yn, qn) {
      (X !== Qt || gt !== Yn || Dt !== qn) && (s16.stencilOp(Qt, Yn, qn), X = Qt, gt = Yn, Dt = qn);
    }, setLocked: function(Qt) {
      D = Qt;
    }, setClear: function(Qt) {
      ce !== Qt && (s16.clearStencil(Qt), ce = Qt);
    }, reset: function() {
      D = false, st = null, et = null, pt = null, Q = null, X = null, gt = null, Dt = null, ce = null;
    } };
  }
  const r = new e(), a = new n(), o = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, u = /* @__PURE__ */ new WeakMap(), m = [], _ = null, g = false, p = null, d = null, M = null, E = null, S = null, b = null, A = null, w = new Ht(0, 0, 0), x = 0, y = false, z = null, C = null, L = null, U = null, V = null;
  const O = s16.getParameter(s16.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = false, N = 0;
  const Z = s16.getParameter(s16.VERSION);
  Z.indexOf("WebGL") !== -1 ? (N = parseFloat(/^WebGL (\d)/.exec(Z)[1]), B = N >= 1) : Z.indexOf("OpenGL ES") !== -1 && (N = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), B = N >= 2);
  let $ = null, at = {};
  const ut = s16.getParameter(s16.SCISSOR_BOX), ot = s16.getParameter(s16.VIEWPORT), It = new _e().fromArray(ut), Xt = new _e().fromArray(ot);
  function Yt(D, st, et, pt) {
    const Q = new Uint8Array(4), X = s16.createTexture();
    s16.bindTexture(D, X), s16.texParameteri(D, s16.TEXTURE_MIN_FILTER, s16.NEAREST), s16.texParameteri(D, s16.TEXTURE_MAG_FILTER, s16.NEAREST);
    for (let gt = 0; gt < et; gt++) D === s16.TEXTURE_3D || D === s16.TEXTURE_2D_ARRAY ? s16.texImage3D(st, 0, s16.RGBA, 1, 1, pt, 0, s16.RGBA, s16.UNSIGNED_BYTE, Q) : s16.texImage2D(st + gt, 0, s16.RGBA, 1, 1, 0, s16.RGBA, s16.UNSIGNED_BYTE, Q);
    return X;
  }
  const K = {};
  K[s16.TEXTURE_2D] = Yt(s16.TEXTURE_2D, s16.TEXTURE_2D, 1), K[s16.TEXTURE_CUBE_MAP] = Yt(s16.TEXTURE_CUBE_MAP, s16.TEXTURE_CUBE_MAP_POSITIVE_X, 6), K[s16.TEXTURE_2D_ARRAY] = Yt(s16.TEXTURE_2D_ARRAY, s16.TEXTURE_2D_ARRAY, 1, 1), K[s16.TEXTURE_3D] = Yt(s16.TEXTURE_3D, s16.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), nt(s16.DEPTH_TEST), a.setFunc(Rs), kt(false), ve(sc), nt(s16.CULL_FACE), Jt(ni);
  function nt(D) {
    h[D] !== true && (s16.enable(D), h[D] = true);
  }
  function rt(D) {
    h[D] !== false && (s16.disable(D), h[D] = false);
  }
  function Nt(D, st) {
    return f[D] !== st ? (s16.bindFramebuffer(D, st), f[D] = st, D === s16.DRAW_FRAMEBUFFER && (f[s16.FRAMEBUFFER] = st), D === s16.FRAMEBUFFER && (f[s16.DRAW_FRAMEBUFFER] = st), true) : false;
  }
  function wt(D, st) {
    let et = m, pt = false;
    if (D) {
      et = u.get(st), et === void 0 && (et = [], u.set(st, et));
      const Q = D.textures;
      if (et.length !== Q.length || et[0] !== s16.COLOR_ATTACHMENT0) {
        for (let X = 0, gt = Q.length; X < gt; X++) et[X] = s16.COLOR_ATTACHMENT0 + X;
        et.length = Q.length, pt = true;
      }
    } else et[0] !== s16.BACK && (et[0] = s16.BACK, pt = true);
    pt && s16.drawBuffers(et);
  }
  function Ct(D) {
    return _ !== D ? (s16.useProgram(D), _ = D, true) : false;
  }
  const Re = { [Vi]: s16.FUNC_ADD, [ff]: s16.FUNC_SUBTRACT, [df]: s16.FUNC_REVERSE_SUBTRACT };
  Re[pf] = s16.MIN, Re[mf] = s16.MAX;
  const qt = { [_f]: s16.ZERO, [gf]: s16.ONE, [xf]: s16.SRC_COLOR, [co]: s16.SRC_ALPHA, [Tf]: s16.SRC_ALPHA_SATURATE, [yf]: s16.DST_COLOR, [Mf]: s16.DST_ALPHA, [vf]: s16.ONE_MINUS_SRC_COLOR, [ho]: s16.ONE_MINUS_SRC_ALPHA, [Ef]: s16.ONE_MINUS_DST_COLOR, [Sf]: s16.ONE_MINUS_DST_ALPHA, [bf]: s16.CONSTANT_COLOR, [Af]: s16.ONE_MINUS_CONSTANT_COLOR, [wf]: s16.CONSTANT_ALPHA, [Rf]: s16.ONE_MINUS_CONSTANT_ALPHA };
  function Jt(D, st, et, pt, Q, X, gt, Dt, ce, Qt) {
    if (D === ni) {
      g === true && (rt(s16.BLEND), g = false);
      return;
    }
    if (g === false && (nt(s16.BLEND), g = true), D !== uf) {
      if (D !== p || Qt !== y) {
        if ((d !== Vi || S !== Vi) && (s16.blendEquation(s16.FUNC_ADD), d = Vi, S = Vi), Qt) switch (D) {
          case ys:
            s16.blendFuncSeparate(s16.ONE, s16.ONE_MINUS_SRC_ALPHA, s16.ONE, s16.ONE_MINUS_SRC_ALPHA);
            break;
          case rc:
            s16.blendFunc(s16.ONE, s16.ONE);
            break;
          case ac:
            s16.blendFuncSeparate(s16.ZERO, s16.ONE_MINUS_SRC_COLOR, s16.ZERO, s16.ONE);
            break;
          case oc:
            s16.blendFuncSeparate(s16.DST_COLOR, s16.ONE_MINUS_SRC_ALPHA, s16.ZERO, s16.ONE);
            break;
          default:
            Zt("WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case ys:
            s16.blendFuncSeparate(s16.SRC_ALPHA, s16.ONE_MINUS_SRC_ALPHA, s16.ONE, s16.ONE_MINUS_SRC_ALPHA);
            break;
          case rc:
            s16.blendFuncSeparate(s16.SRC_ALPHA, s16.ONE, s16.ONE, s16.ONE);
            break;
          case ac:
            Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case oc:
            Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            Zt("WebGLState: Invalid blending: ", D);
            break;
        }
        M = null, E = null, b = null, A = null, w.set(0, 0, 0), x = 0, p = D, y = Qt;
      }
      return;
    }
    Q = Q || st, X = X || et, gt = gt || pt, (st !== d || Q !== S) && (s16.blendEquationSeparate(Re[st], Re[Q]), d = st, S = Q), (et !== M || pt !== E || X !== b || gt !== A) && (s16.blendFuncSeparate(qt[et], qt[pt], qt[X], qt[gt]), M = et, E = pt, b = X, A = gt), (Dt.equals(w) === false || ce !== x) && (s16.blendColor(Dt.r, Dt.g, Dt.b, ce), w.copy(Dt), x = ce), p = D, y = false;
  }
  function re(D, st) {
    D.side === Ln ? rt(s16.CULL_FACE) : nt(s16.CULL_FACE);
    let et = D.side === je;
    st && (et = !et), kt(et), D.blending === ys && D.transparent === false ? Jt(ni) : Jt(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const pt = D.stencilWrite;
    o.setTest(pt), pt && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ye(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? nt(s16.SAMPLE_ALPHA_TO_COVERAGE) : rt(s16.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function kt(D) {
    z !== D && (D ? s16.frontFace(s16.CW) : s16.frontFace(s16.CCW), z = D);
  }
  function ve(D) {
    D !== cf ? (nt(s16.CULL_FACE), D !== C && (D === sc ? s16.cullFace(s16.BACK) : D === hf ? s16.cullFace(s16.FRONT) : s16.cullFace(s16.FRONT_AND_BACK))) : rt(s16.CULL_FACE), C = D;
  }
  function P(D) {
    D !== L && (B && s16.lineWidth(D), L = D);
  }
  function ye(D, st, et) {
    D ? (nt(s16.POLYGON_OFFSET_FILL), (U !== st || V !== et) && (U = st, V = et, a.getReversed() && (st = -st), s16.polygonOffset(st, et))) : rt(s16.POLYGON_OFFSET_FILL);
  }
  function $t(D) {
    D ? nt(s16.SCISSOR_TEST) : rt(s16.SCISSOR_TEST);
  }
  function le(D) {
    D === void 0 && (D = s16.TEXTURE0 + O - 1), $ !== D && (s16.activeTexture(D), $ = D);
  }
  function St(D, st, et) {
    et === void 0 && ($ === null ? et = s16.TEXTURE0 + O - 1 : et = $);
    let pt = at[et];
    pt === void 0 && (pt = { type: void 0, texture: void 0 }, at[et] = pt), (pt.type !== D || pt.texture !== st) && ($ !== et && (s16.activeTexture(et), $ = et), s16.bindTexture(D, st || K[D]), pt.type = D, pt.texture = st);
  }
  function R() {
    const D = at[$];
    D !== void 0 && D.type !== void 0 && (s16.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function v() {
    try {
      s16.compressedTexImage2D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function I() {
    try {
      s16.compressedTexImage3D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function q() {
    try {
      s16.texSubImage2D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function j() {
    try {
      s16.texSubImage3D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function Y() {
    try {
      s16.compressedTexSubImage2D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function mt() {
    try {
      s16.compressedTexSubImage3D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function it() {
    try {
      s16.texStorage2D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function bt() {
    try {
      s16.texStorage3D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function Rt() {
    try {
      s16.texImage2D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function J() {
    try {
      s16.texImage3D(...arguments);
    } catch (D) {
      Zt("WebGLState:", D);
    }
  }
  function tt(D) {
    It.equals(D) === false && (s16.scissor(D.x, D.y, D.z, D.w), It.copy(D));
  }
  function _t(D) {
    Xt.equals(D) === false && (s16.viewport(D.x, D.y, D.z, D.w), Xt.copy(D));
  }
  function xt(D, st) {
    let et = c.get(st);
    et === void 0 && (et = /* @__PURE__ */ new WeakMap(), c.set(st, et));
    let pt = et.get(D);
    pt === void 0 && (pt = s16.getUniformBlockIndex(st, D.name), et.set(D, pt));
  }
  function ft(D, st) {
    const pt = c.get(st).get(D);
    l.get(st) !== pt && (s16.uniformBlockBinding(st, pt, D.__bindingPointIndex), l.set(st, pt));
  }
  function zt() {
    s16.disable(s16.BLEND), s16.disable(s16.CULL_FACE), s16.disable(s16.DEPTH_TEST), s16.disable(s16.POLYGON_OFFSET_FILL), s16.disable(s16.SCISSOR_TEST), s16.disable(s16.STENCIL_TEST), s16.disable(s16.SAMPLE_ALPHA_TO_COVERAGE), s16.blendEquation(s16.FUNC_ADD), s16.blendFunc(s16.ONE, s16.ZERO), s16.blendFuncSeparate(s16.ONE, s16.ZERO, s16.ONE, s16.ZERO), s16.blendColor(0, 0, 0, 0), s16.colorMask(true, true, true, true), s16.clearColor(0, 0, 0, 0), s16.depthMask(true), s16.depthFunc(s16.LESS), a.setReversed(false), s16.clearDepth(1), s16.stencilMask(4294967295), s16.stencilFunc(s16.ALWAYS, 0, 4294967295), s16.stencilOp(s16.KEEP, s16.KEEP, s16.KEEP), s16.clearStencil(0), s16.cullFace(s16.BACK), s16.frontFace(s16.CCW), s16.polygonOffset(0, 0), s16.activeTexture(s16.TEXTURE0), s16.bindFramebuffer(s16.FRAMEBUFFER, null), s16.bindFramebuffer(s16.DRAW_FRAMEBUFFER, null), s16.bindFramebuffer(s16.READ_FRAMEBUFFER, null), s16.useProgram(null), s16.lineWidth(1), s16.scissor(0, 0, s16.canvas.width, s16.canvas.height), s16.viewport(0, 0, s16.canvas.width, s16.canvas.height), h = {}, $ = null, at = {}, f = {}, u = /* @__PURE__ */ new WeakMap(), m = [], _ = null, g = false, p = null, d = null, M = null, E = null, S = null, b = null, A = null, w = new Ht(0, 0, 0), x = 0, y = false, z = null, C = null, L = null, U = null, V = null, It.set(0, 0, s16.canvas.width, s16.canvas.height), Xt.set(0, 0, s16.canvas.width, s16.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: nt, disable: rt, bindFramebuffer: Nt, drawBuffers: wt, useProgram: Ct, setBlending: Jt, setMaterial: re, setFlipSided: kt, setCullFace: ve, setLineWidth: P, setPolygonOffset: ye, setScissorTest: $t, activeTexture: le, bindTexture: St, unbindTexture: R, compressedTexImage2D: v, compressedTexImage3D: I, texImage2D: Rt, texImage3D: J, updateUBOMapping: xt, uniformBlockBinding: ft, texStorage2D: it, texStorage3D: bt, texSubImage2D: q, texSubImage3D: j, compressedTexSubImage2D: Y, compressedTexSubImage3D: mt, scissor: tt, viewport: _t, reset: zt };
}
function dg(s16, t, e, n, i, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Lt(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const u = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(R, v) {
    return m ? new OffscreenCanvas(R, v) : Qr("canvas");
  }
  function g(R, v, I) {
    let q = 1;
    const j = St(R);
    if ((j.width > I || j.height > I) && (q = I / Math.max(j.width, j.height)), q < 1) if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
      const Y = Math.floor(q * j.width), mt = Math.floor(q * j.height);
      f === void 0 && (f = _(Y, mt));
      const it = v ? _(Y, mt) : f;
      return it.width = Y, it.height = mt, it.getContext("2d").drawImage(R, 0, 0, Y, mt), Pt("WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + Y + "x" + mt + ")."), it;
    } else return "data" in R && Pt("WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), R;
    return R;
  }
  function p(R) {
    return R.generateMipmaps;
  }
  function d(R) {
    s16.generateMipmap(R);
  }
  function M(R) {
    return R.isWebGLCubeRenderTarget ? s16.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? s16.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? s16.TEXTURE_2D_ARRAY : s16.TEXTURE_2D;
  }
  function E(R, v, I, q, j = false) {
    if (R !== null) {
      if (s16[R] !== void 0) return s16[R];
      Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let Y = v;
    if (v === s16.RED && (I === s16.FLOAT && (Y = s16.R32F), I === s16.HALF_FLOAT && (Y = s16.R16F), I === s16.UNSIGNED_BYTE && (Y = s16.R8)), v === s16.RED_INTEGER && (I === s16.UNSIGNED_BYTE && (Y = s16.R8UI), I === s16.UNSIGNED_SHORT && (Y = s16.R16UI), I === s16.UNSIGNED_INT && (Y = s16.R32UI), I === s16.BYTE && (Y = s16.R8I), I === s16.SHORT && (Y = s16.R16I), I === s16.INT && (Y = s16.R32I)), v === s16.RG && (I === s16.FLOAT && (Y = s16.RG32F), I === s16.HALF_FLOAT && (Y = s16.RG16F), I === s16.UNSIGNED_BYTE && (Y = s16.RG8)), v === s16.RG_INTEGER && (I === s16.UNSIGNED_BYTE && (Y = s16.RG8UI), I === s16.UNSIGNED_SHORT && (Y = s16.RG16UI), I === s16.UNSIGNED_INT && (Y = s16.RG32UI), I === s16.BYTE && (Y = s16.RG8I), I === s16.SHORT && (Y = s16.RG16I), I === s16.INT && (Y = s16.RG32I)), v === s16.RGB_INTEGER && (I === s16.UNSIGNED_BYTE && (Y = s16.RGB8UI), I === s16.UNSIGNED_SHORT && (Y = s16.RGB16UI), I === s16.UNSIGNED_INT && (Y = s16.RGB32UI), I === s16.BYTE && (Y = s16.RGB8I), I === s16.SHORT && (Y = s16.RGB16I), I === s16.INT && (Y = s16.RGB32I)), v === s16.RGBA_INTEGER && (I === s16.UNSIGNED_BYTE && (Y = s16.RGBA8UI), I === s16.UNSIGNED_SHORT && (Y = s16.RGBA16UI), I === s16.UNSIGNED_INT && (Y = s16.RGBA32UI), I === s16.BYTE && (Y = s16.RGBA8I), I === s16.SHORT && (Y = s16.RGBA16I), I === s16.INT && (Y = s16.RGBA32I)), v === s16.RGB && (I === s16.UNSIGNED_INT_5_9_9_9_REV && (Y = s16.RGB9_E5), I === s16.UNSIGNED_INT_10F_11F_11F_REV && (Y = s16.R11F_G11F_B10F)), v === s16.RGBA) {
      const mt = j ? Jr : Kt.getTransfer(q);
      I === s16.FLOAT && (Y = s16.RGBA32F), I === s16.HALF_FLOAT && (Y = s16.RGBA16F), I === s16.UNSIGNED_BYTE && (Y = mt === te ? s16.SRGB8_ALPHA8 : s16.RGBA8), I === s16.UNSIGNED_SHORT_4_4_4_4 && (Y = s16.RGBA4), I === s16.UNSIGNED_SHORT_5_5_5_1 && (Y = s16.RGB5_A1);
    }
    return (Y === s16.R16F || Y === s16.R32F || Y === s16.RG16F || Y === s16.RG32F || Y === s16.RGBA16F || Y === s16.RGBA32F) && t.get("EXT_color_buffer_float"), Y;
  }
  function S(R, v) {
    let I;
    return R ? v === null || v === Vn || v === ir ? I = s16.DEPTH24_STENCIL8 : v === Un ? I = s16.DEPTH32F_STENCIL8 : v === nr && (I = s16.DEPTH24_STENCIL8, Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === Vn || v === ir ? I = s16.DEPTH_COMPONENT24 : v === Un ? I = s16.DEPTH_COMPONENT32F : v === nr && (I = s16.DEPTH_COMPONENT16), I;
  }
  function b(R, v) {
    return p(R) === true || R.isFramebufferTexture && R.minFilter !== Ne && R.minFilter !== ze ? Math.log2(Math.max(v.width, v.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? v.mipmaps.length : 1;
  }
  function A(R) {
    const v = R.target;
    v.removeEventListener("dispose", A), x(v), v.isVideoTexture && h.delete(v);
  }
  function w(R) {
    const v = R.target;
    v.removeEventListener("dispose", w), z(v);
  }
  function x(R) {
    const v = n.get(R);
    if (v.__webglInit === void 0) return;
    const I = R.source, q = u.get(I);
    if (q) {
      const j = q[v.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && y(R), Object.keys(q).length === 0 && u.delete(I);
    }
    n.remove(R);
  }
  function y(R) {
    const v = n.get(R);
    s16.deleteTexture(v.__webglTexture);
    const I = R.source, q = u.get(I);
    delete q[v.__cacheKey], a.memory.textures--;
  }
  function z(R) {
    const v = n.get(R);
    if (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)), R.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) {
      if (Array.isArray(v.__webglFramebuffer[q])) for (let j = 0; j < v.__webglFramebuffer[q].length; j++) s16.deleteFramebuffer(v.__webglFramebuffer[q][j]);
      else s16.deleteFramebuffer(v.__webglFramebuffer[q]);
      v.__webglDepthbuffer && s16.deleteRenderbuffer(v.__webglDepthbuffer[q]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let q = 0; q < v.__webglFramebuffer.length; q++) s16.deleteFramebuffer(v.__webglFramebuffer[q]);
      else s16.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && s16.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && s16.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let q = 0; q < v.__webglColorRenderbuffer.length; q++) v.__webglColorRenderbuffer[q] && s16.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);
      v.__webglDepthRenderbuffer && s16.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const I = R.textures;
    for (let q = 0, j = I.length; q < j; q++) {
      const Y = n.get(I[q]);
      Y.__webglTexture && (s16.deleteTexture(Y.__webglTexture), a.memory.textures--), n.remove(I[q]);
    }
    n.remove(R);
  }
  let C = 0;
  function L() {
    C = 0;
  }
  function U() {
    const R = C;
    return R >= i.maxTextures && Pt("WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + i.maxTextures), C += 1, R;
  }
  function V(R) {
    const v = [];
    return v.push(R.wrapS), v.push(R.wrapT), v.push(R.wrapR || 0), v.push(R.magFilter), v.push(R.minFilter), v.push(R.anisotropy), v.push(R.internalFormat), v.push(R.format), v.push(R.type), v.push(R.generateMipmaps), v.push(R.premultiplyAlpha), v.push(R.flipY), v.push(R.unpackAlignment), v.push(R.colorSpace), v.join();
  }
  function O(R, v) {
    const I = n.get(R);
    if (R.isVideoTexture && $t(R), R.isRenderTargetTexture === false && R.isExternalTexture !== true && R.version > 0 && I.__version !== R.version) {
      const q = R.image;
      if (q === null) Pt("WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === false) Pt("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        K(I, R, v);
        return;
      }
    } else R.isExternalTexture && (I.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    e.bindTexture(s16.TEXTURE_2D, I.__webglTexture, s16.TEXTURE0 + v);
  }
  function B(R, v) {
    const I = n.get(R);
    if (R.isRenderTargetTexture === false && R.version > 0 && I.__version !== R.version) {
      K(I, R, v);
      return;
    } else R.isExternalTexture && (I.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    e.bindTexture(s16.TEXTURE_2D_ARRAY, I.__webglTexture, s16.TEXTURE0 + v);
  }
  function N(R, v) {
    const I = n.get(R);
    if (R.isRenderTargetTexture === false && R.version > 0 && I.__version !== R.version) {
      K(I, R, v);
      return;
    }
    e.bindTexture(s16.TEXTURE_3D, I.__webglTexture, s16.TEXTURE0 + v);
  }
  function Z(R, v) {
    const I = n.get(R);
    if (R.isCubeDepthTexture !== true && R.version > 0 && I.__version !== R.version) {
      nt(I, R, v);
      return;
    }
    e.bindTexture(s16.TEXTURE_CUBE_MAP, I.__webglTexture, s16.TEXTURE0 + v);
  }
  const $ = { [er]: s16.REPEAT, [ei]: s16.CLAMP_TO_EDGE, [vo]: s16.MIRRORED_REPEAT }, at = { [Ne]: s16.NEAREST, [Df]: s16.NEAREST_MIPMAP_NEAREST, [xr]: s16.NEAREST_MIPMAP_LINEAR, [ze]: s16.LINEAR, [Sa]: s16.LINEAR_MIPMAP_NEAREST, [Hi]: s16.LINEAR_MIPMAP_LINEAR }, ut = { [Uf]: s16.NEVER, [kf]: s16.ALWAYS, [Nf]: s16.LESS, [El]: s16.LEQUAL, [Ff]: s16.EQUAL, [Tl]: s16.GEQUAL, [Of]: s16.GREATER, [Bf]: s16.NOTEQUAL };
  function ot(R, v) {
    if (v.type === Un && t.has("OES_texture_float_linear") === false && (v.magFilter === ze || v.magFilter === Sa || v.magFilter === xr || v.magFilter === Hi || v.minFilter === ze || v.minFilter === Sa || v.minFilter === xr || v.minFilter === Hi) && Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s16.texParameteri(R, s16.TEXTURE_WRAP_S, $[v.wrapS]), s16.texParameteri(R, s16.TEXTURE_WRAP_T, $[v.wrapT]), (R === s16.TEXTURE_3D || R === s16.TEXTURE_2D_ARRAY) && s16.texParameteri(R, s16.TEXTURE_WRAP_R, $[v.wrapR]), s16.texParameteri(R, s16.TEXTURE_MAG_FILTER, at[v.magFilter]), s16.texParameteri(R, s16.TEXTURE_MIN_FILTER, at[v.minFilter]), v.compareFunction && (s16.texParameteri(R, s16.TEXTURE_COMPARE_MODE, s16.COMPARE_REF_TO_TEXTURE), s16.texParameteri(R, s16.TEXTURE_COMPARE_FUNC, ut[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Ne || v.minFilter !== xr && v.minFilter !== Hi || v.type === Un && t.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const I = t.get("EXT_texture_filter_anisotropic");
        s16.texParameterf(R, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function It(R, v) {
    let I = false;
    R.__webglInit === void 0 && (R.__webglInit = true, v.addEventListener("dispose", A));
    const q = v.source;
    let j = u.get(q);
    j === void 0 && (j = {}, u.set(q, j));
    const Y = V(v);
    if (Y !== R.__cacheKey) {
      j[Y] === void 0 && (j[Y] = { texture: s16.createTexture(), usedTimes: 0 }, a.memory.textures++, I = true), j[Y].usedTimes++;
      const mt = j[R.__cacheKey];
      mt !== void 0 && (j[R.__cacheKey].usedTimes--, mt.usedTimes === 0 && y(v)), R.__cacheKey = Y, R.__webglTexture = j[Y].texture;
    }
    return I;
  }
  function Xt(R, v, I) {
    return Math.floor(Math.floor(R / I) / v);
  }
  function Yt(R, v, I, q) {
    const Y = R.updateRanges;
    if (Y.length === 0) e.texSubImage2D(s16.TEXTURE_2D, 0, 0, 0, v.width, v.height, I, q, v.data);
    else {
      Y.sort((J, tt) => J.start - tt.start);
      let mt = 0;
      for (let J = 1; J < Y.length; J++) {
        const tt = Y[mt], _t = Y[J], xt = tt.start + tt.count, ft = Xt(_t.start, v.width, 4), zt = Xt(tt.start, v.width, 4);
        _t.start <= xt + 1 && ft === zt && Xt(_t.start + _t.count - 1, v.width, 4) === ft ? tt.count = Math.max(tt.count, _t.start + _t.count - tt.start) : (++mt, Y[mt] = _t);
      }
      Y.length = mt + 1;
      const it = s16.getParameter(s16.UNPACK_ROW_LENGTH), bt = s16.getParameter(s16.UNPACK_SKIP_PIXELS), Rt = s16.getParameter(s16.UNPACK_SKIP_ROWS);
      s16.pixelStorei(s16.UNPACK_ROW_LENGTH, v.width);
      for (let J = 0, tt = Y.length; J < tt; J++) {
        const _t = Y[J], xt = Math.floor(_t.start / 4), ft = Math.ceil(_t.count / 4), zt = xt % v.width, D = Math.floor(xt / v.width), st = ft, et = 1;
        s16.pixelStorei(s16.UNPACK_SKIP_PIXELS, zt), s16.pixelStorei(s16.UNPACK_SKIP_ROWS, D), e.texSubImage2D(s16.TEXTURE_2D, 0, zt, D, st, et, I, q, v.data);
      }
      R.clearUpdateRanges(), s16.pixelStorei(s16.UNPACK_ROW_LENGTH, it), s16.pixelStorei(s16.UNPACK_SKIP_PIXELS, bt), s16.pixelStorei(s16.UNPACK_SKIP_ROWS, Rt);
    }
  }
  function K(R, v, I) {
    let q = s16.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (q = s16.TEXTURE_2D_ARRAY), v.isData3DTexture && (q = s16.TEXTURE_3D);
    const j = It(R, v), Y = v.source;
    e.bindTexture(q, R.__webglTexture, s16.TEXTURE0 + I);
    const mt = n.get(Y);
    if (Y.version !== mt.__version || j === true) {
      e.activeTexture(s16.TEXTURE0 + I);
      const it = Kt.getPrimaries(Kt.workingColorSpace), bt = v.colorSpace === xi ? null : Kt.getPrimaries(v.colorSpace), Rt = v.colorSpace === xi || it === bt ? s16.NONE : s16.BROWSER_DEFAULT_WEBGL;
      s16.pixelStorei(s16.UNPACK_FLIP_Y_WEBGL, v.flipY), s16.pixelStorei(s16.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s16.pixelStorei(s16.UNPACK_ALIGNMENT, v.unpackAlignment), s16.pixelStorei(s16.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rt);
      let J = g(v.image, false, i.maxTextureSize);
      J = le(v, J);
      const tt = r.convert(v.format, v.colorSpace), _t = r.convert(v.type);
      let xt = E(v.internalFormat, tt, _t, v.colorSpace, v.isVideoTexture);
      ot(q, v);
      let ft;
      const zt = v.mipmaps, D = v.isVideoTexture !== true, st = mt.__version === void 0 || j === true, et = Y.dataReady, pt = b(v, J);
      if (v.isDepthTexture) xt = S(v.format === Wi, v.type), st && (D ? e.texStorage2D(s16.TEXTURE_2D, 1, xt, J.width, J.height) : e.texImage2D(s16.TEXTURE_2D, 0, xt, J.width, J.height, 0, tt, _t, null));
      else if (v.isDataTexture) if (zt.length > 0) {
        D && st && e.texStorage2D(s16.TEXTURE_2D, pt, xt, zt[0].width, zt[0].height);
        for (let Q = 0, X = zt.length; Q < X; Q++) ft = zt[Q], D ? et && e.texSubImage2D(s16.TEXTURE_2D, Q, 0, 0, ft.width, ft.height, tt, _t, ft.data) : e.texImage2D(s16.TEXTURE_2D, Q, xt, ft.width, ft.height, 0, tt, _t, ft.data);
        v.generateMipmaps = false;
      } else D ? (st && e.texStorage2D(s16.TEXTURE_2D, pt, xt, J.width, J.height), et && Yt(v, J, tt, _t)) : e.texImage2D(s16.TEXTURE_2D, 0, xt, J.width, J.height, 0, tt, _t, J.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        D && st && e.texStorage3D(s16.TEXTURE_2D_ARRAY, pt, xt, zt[0].width, zt[0].height, J.depth);
        for (let Q = 0, X = zt.length; Q < X; Q++) if (ft = zt[Q], v.format !== bn) if (tt !== null) if (D) {
          if (et) if (v.layerUpdates.size > 0) {
            const gt = Lc(ft.width, ft.height, v.format, v.type);
            for (const Dt of v.layerUpdates) {
              const ce = ft.data.subarray(Dt * gt / ft.data.BYTES_PER_ELEMENT, (Dt + 1) * gt / ft.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(s16.TEXTURE_2D_ARRAY, Q, 0, 0, Dt, ft.width, ft.height, 1, tt, ce);
            }
            v.clearLayerUpdates();
          } else e.compressedTexSubImage3D(s16.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ft.width, ft.height, J.depth, tt, ft.data);
        } else e.compressedTexImage3D(s16.TEXTURE_2D_ARRAY, Q, xt, ft.width, ft.height, J.depth, 0, ft.data, 0, 0);
        else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else D ? et && e.texSubImage3D(s16.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ft.width, ft.height, J.depth, tt, _t, ft.data) : e.texImage3D(s16.TEXTURE_2D_ARRAY, Q, xt, ft.width, ft.height, J.depth, 0, tt, _t, ft.data);
      } else {
        D && st && e.texStorage2D(s16.TEXTURE_2D, pt, xt, zt[0].width, zt[0].height);
        for (let Q = 0, X = zt.length; Q < X; Q++) ft = zt[Q], v.format !== bn ? tt !== null ? D ? et && e.compressedTexSubImage2D(s16.TEXTURE_2D, Q, 0, 0, ft.width, ft.height, tt, ft.data) : e.compressedTexImage2D(s16.TEXTURE_2D, Q, xt, ft.width, ft.height, 0, ft.data) : Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? et && e.texSubImage2D(s16.TEXTURE_2D, Q, 0, 0, ft.width, ft.height, tt, _t, ft.data) : e.texImage2D(s16.TEXTURE_2D, Q, xt, ft.width, ft.height, 0, tt, _t, ft.data);
      }
      else if (v.isDataArrayTexture) if (D) {
        if (st && e.texStorage3D(s16.TEXTURE_2D_ARRAY, pt, xt, J.width, J.height, J.depth), et) if (v.layerUpdates.size > 0) {
          const Q = Lc(J.width, J.height, v.format, v.type);
          for (const X of v.layerUpdates) {
            const gt = J.data.subarray(X * Q / J.data.BYTES_PER_ELEMENT, (X + 1) * Q / J.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(s16.TEXTURE_2D_ARRAY, 0, 0, 0, X, J.width, J.height, 1, tt, _t, gt);
          }
          v.clearLayerUpdates();
        } else e.texSubImage3D(s16.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, tt, _t, J.data);
      } else e.texImage3D(s16.TEXTURE_2D_ARRAY, 0, xt, J.width, J.height, J.depth, 0, tt, _t, J.data);
      else if (v.isData3DTexture) D ? (st && e.texStorage3D(s16.TEXTURE_3D, pt, xt, J.width, J.height, J.depth), et && e.texSubImage3D(s16.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, tt, _t, J.data)) : e.texImage3D(s16.TEXTURE_3D, 0, xt, J.width, J.height, J.depth, 0, tt, _t, J.data);
      else if (v.isFramebufferTexture) {
        if (st) if (D) e.texStorage2D(s16.TEXTURE_2D, pt, xt, J.width, J.height);
        else {
          let Q = J.width, X = J.height;
          for (let gt = 0; gt < pt; gt++) e.texImage2D(s16.TEXTURE_2D, gt, xt, Q, X, 0, tt, _t, null), Q >>= 1, X >>= 1;
        }
      } else if (zt.length > 0) {
        if (D && st) {
          const Q = St(zt[0]);
          e.texStorage2D(s16.TEXTURE_2D, pt, xt, Q.width, Q.height);
        }
        for (let Q = 0, X = zt.length; Q < X; Q++) ft = zt[Q], D ? et && e.texSubImage2D(s16.TEXTURE_2D, Q, 0, 0, tt, _t, ft) : e.texImage2D(s16.TEXTURE_2D, Q, xt, tt, _t, ft);
        v.generateMipmaps = false;
      } else if (D) {
        if (st) {
          const Q = St(J);
          e.texStorage2D(s16.TEXTURE_2D, pt, xt, Q.width, Q.height);
        }
        et && e.texSubImage2D(s16.TEXTURE_2D, 0, 0, 0, tt, _t, J);
      } else e.texImage2D(s16.TEXTURE_2D, 0, xt, tt, _t, J);
      p(v) && d(q), mt.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    R.__version = v.version;
  }
  function nt(R, v, I) {
    if (v.image.length !== 6) return;
    const q = It(R, v), j = v.source;
    e.bindTexture(s16.TEXTURE_CUBE_MAP, R.__webglTexture, s16.TEXTURE0 + I);
    const Y = n.get(j);
    if (j.version !== Y.__version || q === true) {
      e.activeTexture(s16.TEXTURE0 + I);
      const mt = Kt.getPrimaries(Kt.workingColorSpace), it = v.colorSpace === xi ? null : Kt.getPrimaries(v.colorSpace), bt = v.colorSpace === xi || mt === it ? s16.NONE : s16.BROWSER_DEFAULT_WEBGL;
      s16.pixelStorei(s16.UNPACK_FLIP_Y_WEBGL, v.flipY), s16.pixelStorei(s16.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s16.pixelStorei(s16.UNPACK_ALIGNMENT, v.unpackAlignment), s16.pixelStorei(s16.UNPACK_COLORSPACE_CONVERSION_WEBGL, bt);
      const Rt = v.isCompressedTexture || v.image[0].isCompressedTexture, J = v.image[0] && v.image[0].isDataTexture, tt = [];
      for (let X = 0; X < 6; X++) !Rt && !J ? tt[X] = g(v.image[X], true, i.maxCubemapSize) : tt[X] = J ? v.image[X].image : v.image[X], tt[X] = le(v, tt[X]);
      const _t = tt[0], xt = r.convert(v.format, v.colorSpace), ft = r.convert(v.type), zt = E(v.internalFormat, xt, ft, v.colorSpace), D = v.isVideoTexture !== true, st = Y.__version === void 0 || q === true, et = j.dataReady;
      let pt = b(v, _t);
      ot(s16.TEXTURE_CUBE_MAP, v);
      let Q;
      if (Rt) {
        D && st && e.texStorage2D(s16.TEXTURE_CUBE_MAP, pt, zt, _t.width, _t.height);
        for (let X = 0; X < 6; X++) {
          Q = tt[X].mipmaps;
          for (let gt = 0; gt < Q.length; gt++) {
            const Dt = Q[gt];
            v.format !== bn ? xt !== null ? D ? et && e.compressedTexSubImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, 0, 0, Dt.width, Dt.height, xt, Dt.data) : e.compressedTexImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, zt, Dt.width, Dt.height, 0, Dt.data) : Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? et && e.texSubImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, 0, 0, Dt.width, Dt.height, xt, ft, Dt.data) : e.texImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, zt, Dt.width, Dt.height, 0, xt, ft, Dt.data);
          }
        }
      } else {
        if (Q = v.mipmaps, D && st) {
          Q.length > 0 && pt++;
          const X = St(tt[0]);
          e.texStorage2D(s16.TEXTURE_CUBE_MAP, pt, zt, X.width, X.height);
        }
        for (let X = 0; X < 6; X++) if (J) {
          D ? et && e.texSubImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, tt[X].width, tt[X].height, xt, ft, tt[X].data) : e.texImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, zt, tt[X].width, tt[X].height, 0, xt, ft, tt[X].data);
          for (let gt = 0; gt < Q.length; gt++) {
            const ce = Q[gt].image[X].image;
            D ? et && e.texSubImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, 0, 0, ce.width, ce.height, xt, ft, ce.data) : e.texImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, zt, ce.width, ce.height, 0, xt, ft, ce.data);
          }
        } else {
          D ? et && e.texSubImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, xt, ft, tt[X]) : e.texImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, zt, xt, ft, tt[X]);
          for (let gt = 0; gt < Q.length; gt++) {
            const Dt = Q[gt];
            D ? et && e.texSubImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, 0, 0, xt, ft, Dt.image[X]) : e.texImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, zt, xt, ft, Dt.image[X]);
          }
        }
      }
      p(v) && d(s16.TEXTURE_CUBE_MAP), Y.__version = j.version, v.onUpdate && v.onUpdate(v);
    }
    R.__version = v.version;
  }
  function rt(R, v, I, q, j, Y) {
    const mt = r.convert(I.format, I.colorSpace), it = r.convert(I.type), bt = E(I.internalFormat, mt, it, I.colorSpace), Rt = n.get(v), J = n.get(I);
    if (J.__renderTarget = v, !Rt.__hasExternalTextures) {
      const tt = Math.max(1, v.width >> Y), _t = Math.max(1, v.height >> Y);
      j === s16.TEXTURE_3D || j === s16.TEXTURE_2D_ARRAY ? e.texImage3D(j, Y, bt, tt, _t, v.depth, 0, mt, it, null) : e.texImage2D(j, Y, bt, tt, _t, 0, mt, it, null);
    }
    e.bindFramebuffer(s16.FRAMEBUFFER, R), ye(v) ? o.framebufferTexture2DMultisampleEXT(s16.FRAMEBUFFER, q, j, J.__webglTexture, 0, P(v)) : (j === s16.TEXTURE_2D || j >= s16.TEXTURE_CUBE_MAP_POSITIVE_X && j <= s16.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s16.framebufferTexture2D(s16.FRAMEBUFFER, q, j, J.__webglTexture, Y), e.bindFramebuffer(s16.FRAMEBUFFER, null);
  }
  function Nt(R, v, I) {
    if (s16.bindRenderbuffer(s16.RENDERBUFFER, R), v.depthBuffer) {
      const q = v.depthTexture, j = q && q.isDepthTexture ? q.type : null, Y = S(v.stencilBuffer, j), mt = v.stencilBuffer ? s16.DEPTH_STENCIL_ATTACHMENT : s16.DEPTH_ATTACHMENT;
      ye(v) ? o.renderbufferStorageMultisampleEXT(s16.RENDERBUFFER, P(v), Y, v.width, v.height) : I ? s16.renderbufferStorageMultisample(s16.RENDERBUFFER, P(v), Y, v.width, v.height) : s16.renderbufferStorage(s16.RENDERBUFFER, Y, v.width, v.height), s16.framebufferRenderbuffer(s16.FRAMEBUFFER, mt, s16.RENDERBUFFER, R);
    } else {
      const q = v.textures;
      for (let j = 0; j < q.length; j++) {
        const Y = q[j], mt = r.convert(Y.format, Y.colorSpace), it = r.convert(Y.type), bt = E(Y.internalFormat, mt, it, Y.colorSpace);
        ye(v) ? o.renderbufferStorageMultisampleEXT(s16.RENDERBUFFER, P(v), bt, v.width, v.height) : I ? s16.renderbufferStorageMultisample(s16.RENDERBUFFER, P(v), bt, v.width, v.height) : s16.renderbufferStorage(s16.RENDERBUFFER, bt, v.width, v.height);
      }
    }
    s16.bindRenderbuffer(s16.RENDERBUFFER, null);
  }
  function wt(R, v, I) {
    const q = v.isWebGLCubeRenderTarget === true;
    if (e.bindFramebuffer(s16.FRAMEBUFFER, R), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(v.depthTexture);
    if (j.__renderTarget = v, (!j.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), q) {
      if (j.__webglInit === void 0 && (j.__webglInit = true, v.depthTexture.addEventListener("dispose", A)), j.__webglTexture === void 0) {
        j.__webglTexture = s16.createTexture(), e.bindTexture(s16.TEXTURE_CUBE_MAP, j.__webglTexture), ot(s16.TEXTURE_CUBE_MAP, v.depthTexture);
        const Rt = r.convert(v.depthTexture.format), J = r.convert(v.depthTexture.type);
        let tt;
        v.depthTexture.format === ai ? tt = s16.DEPTH_COMPONENT24 : v.depthTexture.format === Wi && (tt = s16.DEPTH24_STENCIL8);
        for (let _t = 0; _t < 6; _t++) s16.texImage2D(s16.TEXTURE_CUBE_MAP_POSITIVE_X + _t, 0, tt, v.width, v.height, 0, Rt, J, null);
      }
    } else O(v.depthTexture, 0);
    const Y = j.__webglTexture, mt = P(v), it = q ? s16.TEXTURE_CUBE_MAP_POSITIVE_X + I : s16.TEXTURE_2D, bt = v.depthTexture.format === Wi ? s16.DEPTH_STENCIL_ATTACHMENT : s16.DEPTH_ATTACHMENT;
    if (v.depthTexture.format === ai) ye(v) ? o.framebufferTexture2DMultisampleEXT(s16.FRAMEBUFFER, bt, it, Y, 0, mt) : s16.framebufferTexture2D(s16.FRAMEBUFFER, bt, it, Y, 0);
    else if (v.depthTexture.format === Wi) ye(v) ? o.framebufferTexture2DMultisampleEXT(s16.FRAMEBUFFER, bt, it, Y, 0, mt) : s16.framebufferTexture2D(s16.FRAMEBUFFER, bt, it, Y, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ct(R) {
    const v = n.get(R), I = R.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== R.depthTexture) {
      const q = R.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), q) {
        const j = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, q.removeEventListener("dispose", j);
        };
        q.addEventListener("dispose", j), v.__depthDisposeCallback = j;
      }
      v.__boundDepthTexture = q;
    }
    if (R.depthTexture && !v.__autoAllocateDepthBuffer) if (I) for (let q = 0; q < 6; q++) wt(v.__webglFramebuffer[q], R, q);
    else {
      const q = R.texture.mipmaps;
      q && q.length > 0 ? wt(v.__webglFramebuffer[0], R, 0) : wt(v.__webglFramebuffer, R, 0);
    }
    else if (I) {
      v.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++) if (e.bindFramebuffer(s16.FRAMEBUFFER, v.__webglFramebuffer[q]), v.__webglDepthbuffer[q] === void 0) v.__webglDepthbuffer[q] = s16.createRenderbuffer(), Nt(v.__webglDepthbuffer[q], R, false);
      else {
        const j = R.stencilBuffer ? s16.DEPTH_STENCIL_ATTACHMENT : s16.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer[q];
        s16.bindRenderbuffer(s16.RENDERBUFFER, Y), s16.framebufferRenderbuffer(s16.FRAMEBUFFER, j, s16.RENDERBUFFER, Y);
      }
    } else {
      const q = R.texture.mipmaps;
      if (q && q.length > 0 ? e.bindFramebuffer(s16.FRAMEBUFFER, v.__webglFramebuffer[0]) : e.bindFramebuffer(s16.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = s16.createRenderbuffer(), Nt(v.__webglDepthbuffer, R, false);
      else {
        const j = R.stencilBuffer ? s16.DEPTH_STENCIL_ATTACHMENT : s16.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer;
        s16.bindRenderbuffer(s16.RENDERBUFFER, Y), s16.framebufferRenderbuffer(s16.FRAMEBUFFER, j, s16.RENDERBUFFER, Y);
      }
    }
    e.bindFramebuffer(s16.FRAMEBUFFER, null);
  }
  function Re(R, v, I) {
    const q = n.get(R);
    v !== void 0 && rt(q.__webglFramebuffer, R, R.texture, s16.COLOR_ATTACHMENT0, s16.TEXTURE_2D, 0), I !== void 0 && Ct(R);
  }
  function qt(R) {
    const v = R.texture, I = n.get(R), q = n.get(v);
    R.addEventListener("dispose", w);
    const j = R.textures, Y = R.isWebGLCubeRenderTarget === true, mt = j.length > 1;
    if (mt || (q.__webglTexture === void 0 && (q.__webglTexture = s16.createTexture()), q.__version = v.version, a.memory.textures++), Y) {
      I.__webglFramebuffer = [];
      for (let it = 0; it < 6; it++) if (v.mipmaps && v.mipmaps.length > 0) {
        I.__webglFramebuffer[it] = [];
        for (let bt = 0; bt < v.mipmaps.length; bt++) I.__webglFramebuffer[it][bt] = s16.createFramebuffer();
      } else I.__webglFramebuffer[it] = s16.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let it = 0; it < v.mipmaps.length; it++) I.__webglFramebuffer[it] = s16.createFramebuffer();
      } else I.__webglFramebuffer = s16.createFramebuffer();
      if (mt) for (let it = 0, bt = j.length; it < bt; it++) {
        const Rt = n.get(j[it]);
        Rt.__webglTexture === void 0 && (Rt.__webglTexture = s16.createTexture(), a.memory.textures++);
      }
      if (R.samples > 0 && ye(R) === false) {
        I.__webglMultisampledFramebuffer = s16.createFramebuffer(), I.__webglColorRenderbuffer = [], e.bindFramebuffer(s16.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let it = 0; it < j.length; it++) {
          const bt = j[it];
          I.__webglColorRenderbuffer[it] = s16.createRenderbuffer(), s16.bindRenderbuffer(s16.RENDERBUFFER, I.__webglColorRenderbuffer[it]);
          const Rt = r.convert(bt.format, bt.colorSpace), J = r.convert(bt.type), tt = E(bt.internalFormat, Rt, J, bt.colorSpace, R.isXRRenderTarget === true), _t = P(R);
          s16.renderbufferStorageMultisample(s16.RENDERBUFFER, _t, tt, R.width, R.height), s16.framebufferRenderbuffer(s16.FRAMEBUFFER, s16.COLOR_ATTACHMENT0 + it, s16.RENDERBUFFER, I.__webglColorRenderbuffer[it]);
        }
        s16.bindRenderbuffer(s16.RENDERBUFFER, null), R.depthBuffer && (I.__webglDepthRenderbuffer = s16.createRenderbuffer(), Nt(I.__webglDepthRenderbuffer, R, true)), e.bindFramebuffer(s16.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      e.bindTexture(s16.TEXTURE_CUBE_MAP, q.__webglTexture), ot(s16.TEXTURE_CUBE_MAP, v);
      for (let it = 0; it < 6; it++) if (v.mipmaps && v.mipmaps.length > 0) for (let bt = 0; bt < v.mipmaps.length; bt++) rt(I.__webglFramebuffer[it][bt], R, v, s16.COLOR_ATTACHMENT0, s16.TEXTURE_CUBE_MAP_POSITIVE_X + it, bt);
      else rt(I.__webglFramebuffer[it], R, v, s16.COLOR_ATTACHMENT0, s16.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0);
      p(v) && d(s16.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (mt) {
      for (let it = 0, bt = j.length; it < bt; it++) {
        const Rt = j[it], J = n.get(Rt);
        let tt = s16.TEXTURE_2D;
        (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (tt = R.isWebGL3DRenderTarget ? s16.TEXTURE_3D : s16.TEXTURE_2D_ARRAY), e.bindTexture(tt, J.__webglTexture), ot(tt, Rt), rt(I.__webglFramebuffer, R, Rt, s16.COLOR_ATTACHMENT0 + it, tt, 0), p(Rt) && d(tt);
      }
      e.unbindTexture();
    } else {
      let it = s16.TEXTURE_2D;
      if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (it = R.isWebGL3DRenderTarget ? s16.TEXTURE_3D : s16.TEXTURE_2D_ARRAY), e.bindTexture(it, q.__webglTexture), ot(it, v), v.mipmaps && v.mipmaps.length > 0) for (let bt = 0; bt < v.mipmaps.length; bt++) rt(I.__webglFramebuffer[bt], R, v, s16.COLOR_ATTACHMENT0, it, bt);
      else rt(I.__webglFramebuffer, R, v, s16.COLOR_ATTACHMENT0, it, 0);
      p(v) && d(it), e.unbindTexture();
    }
    R.depthBuffer && Ct(R);
  }
  function Jt(R) {
    const v = R.textures;
    for (let I = 0, q = v.length; I < q; I++) {
      const j = v[I];
      if (p(j)) {
        const Y = M(R), mt = n.get(j).__webglTexture;
        e.bindTexture(Y, mt), d(Y), e.unbindTexture();
      }
    }
  }
  const re = [], kt = [];
  function ve(R) {
    if (R.samples > 0) {
      if (ye(R) === false) {
        const v = R.textures, I = R.width, q = R.height;
        let j = s16.COLOR_BUFFER_BIT;
        const Y = R.stencilBuffer ? s16.DEPTH_STENCIL_ATTACHMENT : s16.DEPTH_ATTACHMENT, mt = n.get(R), it = v.length > 1;
        if (it) for (let Rt = 0; Rt < v.length; Rt++) e.bindFramebuffer(s16.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), s16.framebufferRenderbuffer(s16.FRAMEBUFFER, s16.COLOR_ATTACHMENT0 + Rt, s16.RENDERBUFFER, null), e.bindFramebuffer(s16.FRAMEBUFFER, mt.__webglFramebuffer), s16.framebufferTexture2D(s16.DRAW_FRAMEBUFFER, s16.COLOR_ATTACHMENT0 + Rt, s16.TEXTURE_2D, null, 0);
        e.bindFramebuffer(s16.READ_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
        const bt = R.texture.mipmaps;
        bt && bt.length > 0 ? e.bindFramebuffer(s16.DRAW_FRAMEBUFFER, mt.__webglFramebuffer[0]) : e.bindFramebuffer(s16.DRAW_FRAMEBUFFER, mt.__webglFramebuffer);
        for (let Rt = 0; Rt < v.length; Rt++) {
          if (R.resolveDepthBuffer && (R.depthBuffer && (j |= s16.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (j |= s16.STENCIL_BUFFER_BIT)), it) {
            s16.framebufferRenderbuffer(s16.READ_FRAMEBUFFER, s16.COLOR_ATTACHMENT0, s16.RENDERBUFFER, mt.__webglColorRenderbuffer[Rt]);
            const J = n.get(v[Rt]).__webglTexture;
            s16.framebufferTexture2D(s16.DRAW_FRAMEBUFFER, s16.COLOR_ATTACHMENT0, s16.TEXTURE_2D, J, 0);
          }
          s16.blitFramebuffer(0, 0, I, q, 0, 0, I, q, j, s16.NEAREST), l === true && (re.length = 0, kt.length = 0, re.push(s16.COLOR_ATTACHMENT0 + Rt), R.depthBuffer && R.resolveDepthBuffer === false && (re.push(Y), kt.push(Y), s16.invalidateFramebuffer(s16.DRAW_FRAMEBUFFER, kt)), s16.invalidateFramebuffer(s16.READ_FRAMEBUFFER, re));
        }
        if (e.bindFramebuffer(s16.READ_FRAMEBUFFER, null), e.bindFramebuffer(s16.DRAW_FRAMEBUFFER, null), it) for (let Rt = 0; Rt < v.length; Rt++) {
          e.bindFramebuffer(s16.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), s16.framebufferRenderbuffer(s16.FRAMEBUFFER, s16.COLOR_ATTACHMENT0 + Rt, s16.RENDERBUFFER, mt.__webglColorRenderbuffer[Rt]);
          const J = n.get(v[Rt]).__webglTexture;
          e.bindFramebuffer(s16.FRAMEBUFFER, mt.__webglFramebuffer), s16.framebufferTexture2D(s16.DRAW_FRAMEBUFFER, s16.COLOR_ATTACHMENT0 + Rt, s16.TEXTURE_2D, J, 0);
        }
        e.bindFramebuffer(s16.DRAW_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
      } else if (R.depthBuffer && R.resolveDepthBuffer === false && l) {
        const v = R.stencilBuffer ? s16.DEPTH_STENCIL_ATTACHMENT : s16.DEPTH_ATTACHMENT;
        s16.invalidateFramebuffer(s16.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function P(R) {
    return Math.min(i.maxSamples, R.samples);
  }
  function ye(R) {
    const v = n.get(R);
    return R.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function $t(R) {
    const v = a.render.frame;
    h.get(R) !== v && (h.set(R, v), R.update());
  }
  function le(R, v) {
    const I = R.colorSpace, q = R.format, j = R.type;
    return R.isCompressedTexture === true || R.isVideoTexture === true || I !== Ds && I !== xi && (Kt.getTransfer(I) === te ? (q !== bn || j !== on) && Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Zt("WebGLTextures: Unsupported texture color space:", I)), v;
  }
  function St(R) {
    return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (c.width = R.naturalWidth || R.width, c.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (c.width = R.displayWidth, c.height = R.displayHeight) : (c.width = R.width, c.height = R.height), c;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = L, this.setTexture2D = O, this.setTexture2DArray = B, this.setTexture3D = N, this.setTextureCube = Z, this.rebindTextures = Re, this.setupRenderTarget = qt, this.updateRenderTargetMipmap = Jt, this.updateMultisampleRenderTarget = ve, this.setupDepthRenderbuffer = Ct, this.setupFrameBufferTexture = rt, this.useMultisampledRTT = ye, this.isReversedDepthBuffer = function() {
    return e.buffers.depth.getReversed();
  };
}
function pg(s16, t) {
  function e(n, i = xi) {
    let r;
    const a = Kt.getTransfer(i);
    if (n === on) return s16.UNSIGNED_BYTE;
    if (n === xl) return s16.UNSIGNED_SHORT_4_4_4_4;
    if (n === vl) return s16.UNSIGNED_SHORT_5_5_5_1;
    if (n === Dh) return s16.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Lh) return s16.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Ch) return s16.BYTE;
    if (n === Ph) return s16.SHORT;
    if (n === nr) return s16.UNSIGNED_SHORT;
    if (n === gl) return s16.INT;
    if (n === Vn) return s16.UNSIGNED_INT;
    if (n === Un) return s16.FLOAT;
    if (n === ri) return s16.HALF_FLOAT;
    if (n === Ih) return s16.ALPHA;
    if (n === Uh) return s16.RGB;
    if (n === bn) return s16.RGBA;
    if (n === ai) return s16.DEPTH_COMPONENT;
    if (n === Wi) return s16.DEPTH_STENCIL;
    if (n === Nh) return s16.RED;
    if (n === Ml) return s16.RED_INTEGER;
    if (n === Ps) return s16.RG;
    if (n === Sl) return s16.RG_INTEGER;
    if (n === yl) return s16.RGBA_INTEGER;
    if (n === Hr || n === Wr || n === Xr || n === Yr) if (a === te) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === Hr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Wr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Xr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === Yr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === Hr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Wr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Xr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === Yr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Mo || n === So || n === yo || n === Eo) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Mo) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === So) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === yo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Eo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === To || n === bo || n === Ao || n === wo || n === Ro || n === Co || n === Po) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === To || n === bo) return a === te ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Ao) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      if (n === wo) return r.COMPRESSED_R11_EAC;
      if (n === Ro) return r.COMPRESSED_SIGNED_R11_EAC;
      if (n === Co) return r.COMPRESSED_RG11_EAC;
      if (n === Po) return r.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (n === Do || n === Lo || n === Io || n === Uo || n === No || n === Fo || n === Oo || n === Bo || n === ko || n === zo || n === Vo || n === Go || n === Ho || n === Wo) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Do) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Lo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Io) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Uo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === No) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Fo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Oo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Bo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === ko) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === zo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Vo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Go) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Ho) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Wo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Xo || n === Yo || n === qo) if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === Xo) return a === te ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Yo) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === qo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Ko || n === jo || n === Zo || n === $o) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === Ko) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === jo) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Zo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === $o) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === ir ? s16.UNSIGNED_INT_24_8 : s16[n] !== void 0 ? s16[n] : null;
  }
  return { convert: e };
}
const mg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, _g = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class gg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e) {
    if (this.texture === null) {
      const n = new Xh(t.texture);
      (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new Wn({ vertexShader: mg, fragmentShader: _g, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new Mt(new Hn(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class xg extends Qi {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, f = null, u = null, m = null, _ = null;
    const g = typeof XRWebGLBinding < "u", p = new gg(), d = {}, M = e.getContextAttributes();
    let E = null, S = null;
    const b = [], A = [], w = new Lt();
    let x = null;
    const y = new an();
    y.viewport = new _e();
    const z = new an();
    z.viewport = new _e();
    const C = [y, z], L = new Cd();
    let U = null, V = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(K) {
      let nt = b[K];
      return nt === void 0 && (nt = new Ra(), b[K] = nt), nt.getTargetRaySpace();
    }, this.getControllerGrip = function(K) {
      let nt = b[K];
      return nt === void 0 && (nt = new Ra(), b[K] = nt), nt.getGripSpace();
    }, this.getHand = function(K) {
      let nt = b[K];
      return nt === void 0 && (nt = new Ra(), b[K] = nt), nt.getHandSpace();
    };
    function O(K) {
      const nt = A.indexOf(K.inputSource);
      if (nt === -1) return;
      const rt = b[nt];
      rt !== void 0 && (rt.update(K.inputSource, K.frame, c || a), rt.dispatchEvent({ type: K.type, data: K.inputSource }));
    }
    function B() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", B), i.removeEventListener("inputsourceschange", N);
      for (let K = 0; K < b.length; K++) {
        const nt = A[K];
        nt !== null && (A[K] = null, b[K].disconnect(nt));
      }
      U = null, V = null, p.reset();
      for (const K in d) delete d[K];
      t.setRenderTarget(E), m = null, u = null, f = null, i = null, S = null, Yt.stop(), n.isPresenting = false, t.setPixelRatio(x), t.setSize(w.width, w.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(K) {
      r = K, n.isPresenting === true && Pt("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(K) {
      o = K, n.isPresenting === true && Pt("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(K) {
      c = K;
    }, this.getBaseLayer = function() {
      return u !== null ? u : m;
    }, this.getBinding = function() {
      return f === null && g && (f = new XRWebGLBinding(i, e)), f;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(K) {
      if (i = K, i !== null) {
        if (E = t.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", B), i.addEventListener("inputsourceschange", N), M.xrCompatible !== true && await e.makeXRCompatible(), x = t.getPixelRatio(), t.getSize(w), g && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let rt = null, Nt = null, wt = null;
          M.depth && (wt = M.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, rt = M.stencil ? Wi : ai, Nt = M.stencil ? ir : Vn);
          const Ct = { colorFormat: e.RGBA8, depthFormat: wt, scaleFactor: r };
          f = this.getBinding(), u = f.createProjectionLayer(Ct), i.updateRenderState({ layers: [u] }), t.setPixelRatio(1), t.setSize(u.textureWidth, u.textureHeight, false), S = new Bn(u.textureWidth, u.textureHeight, { format: bn, type: on, depthTexture: new rr(u.textureWidth, u.textureHeight, Nt, void 0, void 0, void 0, void 0, void 0, void 0, rt), stencilBuffer: M.stencil, colorSpace: t.outputColorSpace, samples: M.antialias ? 4 : 0, resolveDepthBuffer: u.ignoreDepthValues === false, resolveStencilBuffer: u.ignoreDepthValues === false });
        } else {
          const rt = { antialias: M.antialias, alpha: true, depth: M.depth, stencil: M.stencil, framebufferScaleFactor: r };
          m = new XRWebGLLayer(i, e, rt), i.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, false), S = new Bn(m.framebufferWidth, m.framebufferHeight, { format: bn, type: on, colorSpace: t.outputColorSpace, stencilBuffer: M.stencil, resolveDepthBuffer: m.ignoreDepthValues === false, resolveStencilBuffer: m.ignoreDepthValues === false });
        }
        S.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), Yt.setContext(i), Yt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function N(K) {
      for (let nt = 0; nt < K.removed.length; nt++) {
        const rt = K.removed[nt], Nt = A.indexOf(rt);
        Nt >= 0 && (A[Nt] = null, b[Nt].disconnect(rt));
      }
      for (let nt = 0; nt < K.added.length; nt++) {
        const rt = K.added[nt];
        let Nt = A.indexOf(rt);
        if (Nt === -1) {
          for (let Ct = 0; Ct < b.length; Ct++) if (Ct >= A.length) {
            A.push(rt), Nt = Ct;
            break;
          } else if (A[Ct] === null) {
            A[Ct] = rt, Nt = Ct;
            break;
          }
          if (Nt === -1) break;
        }
        const wt = b[Nt];
        wt && wt.connect(rt);
      }
    }
    const Z = new k(), $ = new k();
    function at(K, nt, rt) {
      Z.setFromMatrixPosition(nt.matrixWorld), $.setFromMatrixPosition(rt.matrixWorld);
      const Nt = Z.distanceTo($), wt = nt.projectionMatrix.elements, Ct = rt.projectionMatrix.elements, Re = wt[14] / (wt[10] - 1), qt = wt[14] / (wt[10] + 1), Jt = (wt[9] + 1) / wt[5], re = (wt[9] - 1) / wt[5], kt = (wt[8] - 1) / wt[0], ve = (Ct[8] + 1) / Ct[0], P = Re * kt, ye = Re * ve, $t = Nt / (-kt + ve), le = $t * -kt;
      if (nt.matrixWorld.decompose(K.position, K.quaternion, K.scale), K.translateX(le), K.translateZ($t), K.matrixWorld.compose(K.position, K.quaternion, K.scale), K.matrixWorldInverse.copy(K.matrixWorld).invert(), wt[10] === -1) K.projectionMatrix.copy(nt.projectionMatrix), K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);
      else {
        const St = Re + $t, R = qt + $t, v = P - le, I = ye + (Nt - le), q = Jt * qt / R * St, j = re * qt / R * St;
        K.projectionMatrix.makePerspective(v, I, q, j, St, R), K.projectionMatrixInverse.copy(K.projectionMatrix).invert();
      }
    }
    function ut(K, nt) {
      nt === null ? K.matrixWorld.copy(K.matrix) : K.matrixWorld.multiplyMatrices(nt.matrixWorld, K.matrix), K.matrixWorldInverse.copy(K.matrixWorld).invert();
    }
    this.updateCamera = function(K) {
      if (i === null) return;
      let nt = K.near, rt = K.far;
      p.texture !== null && (p.depthNear > 0 && (nt = p.depthNear), p.depthFar > 0 && (rt = p.depthFar)), L.near = z.near = y.near = nt, L.far = z.far = y.far = rt, (U !== L.near || V !== L.far) && (i.updateRenderState({ depthNear: L.near, depthFar: L.far }), U = L.near, V = L.far), L.layers.mask = K.layers.mask | 6, y.layers.mask = L.layers.mask & -5, z.layers.mask = L.layers.mask & -3;
      const Nt = K.parent, wt = L.cameras;
      ut(L, Nt);
      for (let Ct = 0; Ct < wt.length; Ct++) ut(wt[Ct], Nt);
      wt.length === 2 ? at(L, y, z) : L.projectionMatrix.copy(y.projectionMatrix), ot(K, L, Nt);
    };
    function ot(K, nt, rt) {
      rt === null ? K.matrix.copy(nt.matrixWorld) : (K.matrix.copy(rt.matrixWorld), K.matrix.invert(), K.matrix.multiply(nt.matrixWorld)), K.matrix.decompose(K.position, K.quaternion, K.scale), K.updateMatrixWorld(true), K.projectionMatrix.copy(nt.projectionMatrix), K.projectionMatrixInverse.copy(nt.projectionMatrixInverse), K.isPerspectiveCamera && (K.fov = ea * 2 * Math.atan(1 / K.projectionMatrix.elements[5]), K.zoom = 1);
    }
    this.getCamera = function() {
      return L;
    }, this.getFoveation = function() {
      if (!(u === null && m === null)) return l;
    }, this.setFoveation = function(K) {
      l = K, u !== null && (u.fixedFoveation = K), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = K);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(L);
    }, this.getCameraTexture = function(K) {
      return d[K];
    };
    let It = null;
    function Xt(K, nt) {
      if (h = nt.getViewerPose(c || a), _ = nt, h !== null) {
        const rt = h.views;
        m !== null && (t.setRenderTargetFramebuffer(S, m.framebuffer), t.setRenderTarget(S));
        let Nt = false;
        rt.length !== L.cameras.length && (L.cameras.length = 0, Nt = true);
        for (let qt = 0; qt < rt.length; qt++) {
          const Jt = rt[qt];
          let re = null;
          if (m !== null) re = m.getViewport(Jt);
          else {
            const ve = f.getViewSubImage(u, Jt);
            re = ve.viewport, qt === 0 && (t.setRenderTargetTextures(S, ve.colorTexture, ve.depthStencilTexture), t.setRenderTarget(S));
          }
          let kt = C[qt];
          kt === void 0 && (kt = new an(), kt.layers.enable(qt), kt.viewport = new _e(), C[qt] = kt), kt.matrix.fromArray(Jt.transform.matrix), kt.matrix.decompose(kt.position, kt.quaternion, kt.scale), kt.projectionMatrix.fromArray(Jt.projectionMatrix), kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(), kt.viewport.set(re.x, re.y, re.width, re.height), qt === 0 && (L.matrix.copy(kt.matrix), L.matrix.decompose(L.position, L.quaternion, L.scale)), Nt === true && L.cameras.push(kt);
        }
        const wt = i.enabledFeatures;
        if (wt && wt.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && g) {
          f = n.getBinding();
          const qt = f.getDepthInformation(rt[0]);
          qt && qt.isValid && qt.texture && p.init(qt, i.renderState);
        }
        if (wt && wt.includes("camera-access") && g) {
          t.state.unbindTexture(), f = n.getBinding();
          for (let qt = 0; qt < rt.length; qt++) {
            const Jt = rt[qt].camera;
            if (Jt) {
              let re = d[Jt];
              re || (re = new Xh(), d[Jt] = re);
              const kt = f.getCameraImage(Jt);
              re.sourceTexture = kt;
            }
          }
        }
      }
      for (let rt = 0; rt < b.length; rt++) {
        const Nt = A[rt], wt = b[rt];
        Nt !== null && wt !== void 0 && wt.update(Nt, nt, c || a);
      }
      It && It(K, nt), nt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: nt }), _ = null;
    }
    const Yt = new jh();
    Yt.setAnimationLoop(Xt), this.setAnimationLoop = function(K) {
      It = K;
    }, this.dispose = function() {
    };
  }
}
const Oi = new Gn(), vg = new xe();
function Mg(s16, t) {
  function e(p, d) {
    p.matrixAutoUpdate === true && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, Yh(s16)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function i(p, d, M, E, S) {
    d.isMeshBasicMaterial ? r(p, d) : d.isMeshLambertMaterial ? (r(p, d), d.envMap && (p.envMapIntensity.value = d.envMapIntensity)) : d.isMeshToonMaterial ? (r(p, d), f(p, d)) : d.isMeshPhongMaterial ? (r(p, d), h(p, d), d.envMap && (p.envMapIntensity.value = d.envMapIntensity)) : d.isMeshStandardMaterial ? (r(p, d), u(p, d), d.isMeshPhysicalMaterial && m(p, d, S)) : d.isMeshMatcapMaterial ? (r(p, d), _(p, d)) : d.isMeshDepthMaterial ? r(p, d) : d.isMeshDistanceMaterial ? (r(p, d), g(p, d)) : d.isMeshNormalMaterial ? r(p, d) : d.isLineBasicMaterial ? (a(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? l(p, d, M, E) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = false);
  }
  function r(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, e(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, e(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === je && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, e(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === je && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, e(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, e(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, e(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const M = t.get(d), E = M.envMap, S = M.envMapRotation;
    E && (p.envMap.value = E, Oi.copy(S), Oi.x *= -1, Oi.y *= -1, Oi.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (Oi.y *= -1, Oi.z *= -1), p.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Oi)), p.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap && (p.lightMap.value = d.lightMap, p.lightMapIntensity.value = d.lightMapIntensity, e(d.lightMap, p.lightMapTransform)), d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, e(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, e(d.map, p.mapTransform));
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function l(p, d, M, E) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * M, p.scale.value = E * 0.5, d.map && (p.map.value = d.map, e(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map, e(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function h(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function f(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function u(p, d) {
    p.metalness.value = d.metalness, d.metalnessMap && (p.metalnessMap.value = d.metalnessMap, e(d.metalnessMap, p.metalnessMapTransform)), p.roughness.value = d.roughness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap, e(d.roughnessMap, p.roughnessMapTransform)), d.envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, M) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, e(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, e(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, e(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, e(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, e(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === je && p.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (p.dispersion.value = d.dispersion), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, e(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, e(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = M.texture, p.transmissionSamplerSize.value.set(M.width, M.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, e(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, e(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, e(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, e(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, e(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function g(p, d) {
    const M = t.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(M.matrixWorld), p.nearDistance.value = M.shadow.camera.near, p.farDistance.value = M.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Sg(s16, t, e, n) {
  let i = {}, r = {}, a = [];
  const o = s16.getParameter(s16.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(M, E) {
    const S = E.program;
    n.uniformBlockBinding(M, S);
  }
  function c(M, E) {
    let S = i[M.id];
    S === void 0 && (_(M), S = h(M), i[M.id] = S, M.addEventListener("dispose", p));
    const b = E.program;
    n.updateUBOMapping(M, b);
    const A = t.render.frame;
    r[M.id] !== A && (u(M), r[M.id] = A);
  }
  function h(M) {
    const E = f();
    M.__bindingPointIndex = E;
    const S = s16.createBuffer(), b = M.__size, A = M.usage;
    return s16.bindBuffer(s16.UNIFORM_BUFFER, S), s16.bufferData(s16.UNIFORM_BUFFER, b, A), s16.bindBuffer(s16.UNIFORM_BUFFER, null), s16.bindBufferBase(s16.UNIFORM_BUFFER, E, S), S;
  }
  function f() {
    for (let M = 0; M < o; M++) if (a.indexOf(M) === -1) return a.push(M), M;
    return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const E = i[M.id], S = M.uniforms, b = M.__cache;
    s16.bindBuffer(s16.UNIFORM_BUFFER, E);
    for (let A = 0, w = S.length; A < w; A++) {
      const x = Array.isArray(S[A]) ? S[A] : [S[A]];
      for (let y = 0, z = x.length; y < z; y++) {
        const C = x[y];
        if (m(C, A, y, b) === true) {
          const L = C.__offset, U = Array.isArray(C.value) ? C.value : [C.value];
          let V = 0;
          for (let O = 0; O < U.length; O++) {
            const B = U[O], N = g(B);
            typeof B == "number" || typeof B == "boolean" ? (C.__data[0] = B, s16.bufferSubData(s16.UNIFORM_BUFFER, L + V, C.__data)) : B.isMatrix3 ? (C.__data[0] = B.elements[0], C.__data[1] = B.elements[1], C.__data[2] = B.elements[2], C.__data[3] = 0, C.__data[4] = B.elements[3], C.__data[5] = B.elements[4], C.__data[6] = B.elements[5], C.__data[7] = 0, C.__data[8] = B.elements[6], C.__data[9] = B.elements[7], C.__data[10] = B.elements[8], C.__data[11] = 0) : (B.toArray(C.__data, V), V += N.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s16.bufferSubData(s16.UNIFORM_BUFFER, L, C.__data);
        }
      }
    }
    s16.bindBuffer(s16.UNIFORM_BUFFER, null);
  }
  function m(M, E, S, b) {
    const A = M.value, w = E + "_" + S;
    if (b[w] === void 0) return typeof A == "number" || typeof A == "boolean" ? b[w] = A : b[w] = A.clone(), true;
    {
      const x = b[w];
      if (typeof A == "number" || typeof A == "boolean") {
        if (x !== A) return b[w] = A, true;
      } else if (x.equals(A) === false) return x.copy(A), true;
    }
    return false;
  }
  function _(M) {
    const E = M.uniforms;
    let S = 0;
    const b = 16;
    for (let w = 0, x = E.length; w < x; w++) {
      const y = Array.isArray(E[w]) ? E[w] : [E[w]];
      for (let z = 0, C = y.length; z < C; z++) {
        const L = y[z], U = Array.isArray(L.value) ? L.value : [L.value];
        for (let V = 0, O = U.length; V < O; V++) {
          const B = U[V], N = g(B), Z = S % b, $ = Z % N.boundary, at = Z + $;
          S += $, at !== 0 && b - at < N.storage && (S += b - at), L.__data = new Float32Array(N.storage / Float32Array.BYTES_PER_ELEMENT), L.__offset = S, S += N.storage;
        }
      }
    }
    const A = S % b;
    return A > 0 && (S += b - A), M.__size = S, M.__cache = {}, this;
  }
  function g(M) {
    const E = { boundary: 0, storage: 0 };
    return typeof M == "number" || typeof M == "boolean" ? (E.boundary = 4, E.storage = 4) : M.isVector2 ? (E.boundary = 8, E.storage = 8) : M.isVector3 || M.isColor ? (E.boundary = 16, E.storage = 12) : M.isVector4 ? (E.boundary = 16, E.storage = 16) : M.isMatrix3 ? (E.boundary = 48, E.storage = 48) : M.isMatrix4 ? (E.boundary = 64, E.storage = 64) : M.isTexture ? Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Pt("WebGLRenderer: Unsupported uniform value type.", M), E;
  }
  function p(M) {
    const E = M.target;
    E.removeEventListener("dispose", p);
    const S = a.indexOf(E.__bindingPointIndex);
    a.splice(S, 1), s16.deleteBuffer(i[E.id]), delete i[E.id], delete r[E.id];
  }
  function d() {
    for (const M in i) s16.deleteBuffer(i[M]);
    a = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: d };
}
const yg = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let Cn = null;
function Eg() {
  return Cn === null && (Cn = new ud(yg, 16, 16, Ps, ri), Cn.name = "DFG_LUT", Cn.minFilter = ze, Cn.magFilter = ze, Cn.wrapS = ei, Cn.wrapT = ei, Cn.generateMipmaps = false, Cn.needsUpdate = true), Cn;
}
class Tg {
  constructor(t = {}) {
    const { canvas: e = Vf(), context: n = null, depth: i = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: f = false, reversedDepthBuffer: u = false, outputBufferType: m = on } = t;
    this.isWebGLRenderer = true;
    let _;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      _ = n.getContextAttributes().alpha;
    } else _ = a;
    const g = m, p = /* @__PURE__ */ new Set([yl, Sl, Ml]), d = /* @__PURE__ */ new Set([on, Vn, nr, ir, xl, vl]), M = new Uint32Array(4), E = new Int32Array(4);
    let S = null, b = null;
    const A = [], w = [];
    let x = null;
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = On, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const y = this;
    let z = false;
    this._outputColorSpace = pn;
    let C = 0, L = 0, U = null, V = -1, O = null;
    const B = new _e(), N = new _e();
    let Z = null;
    const $ = new Ht(0);
    let at = 0, ut = e.width, ot = e.height, It = 1, Xt = null, Yt = null;
    const K = new _e(0, 0, ut, ot), nt = new _e(0, 0, ut, ot);
    let rt = false;
    const Nt = new wl();
    let wt = false, Ct = false;
    const Re = new xe(), qt = new k(), Jt = new _e(), re = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let kt = false;
    function ve() {
      return U === null ? It : 1;
    }
    let P = n;
    function ye(T, F) {
      return e.getContext(T, F);
    }
    try {
      const T = { alpha: true, depth: i, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: f };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ml}`), e.addEventListener("webglcontextlost", gt, false), e.addEventListener("webglcontextrestored", Dt, false), e.addEventListener("webglcontextcreationerror", ce, false), P === null) {
        const F = "webgl2";
        if (P = ye(F, T), P === null) throw ye(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (T) {
      throw Zt("WebGLRenderer: " + T.message), T;
    }
    let $t, le, St, R, v, I, q, j, Y, mt, it, bt, Rt, J, tt, _t, xt, ft, zt, D, st, et, pt;
    function Q() {
      $t = new T_(P), $t.init(), st = new pg(P, $t), le = new __(P, $t, t, st), St = new fg(P, $t), le.reversedDepthBuffer && u && St.buffers.depth.setReversed(true), R = new w_(P), v = new J0(), I = new dg(P, $t, St, v, le, st, R), q = new E_(y), j = new Ld(P), et = new p_(P, j), Y = new b_(P, j, R, et), mt = new C_(P, Y, j, et, R), ft = new R_(P, le, I), tt = new g_(v), it = new $0(y, q, $t, le, et, tt), bt = new Mg(y, v), Rt = new tg(), J = new ag($t), xt = new d_(y, q, St, mt, _, l), _t = new ug(y, mt, le), pt = new Sg(P, R, le, St), zt = new m_(P, $t, R), D = new A_(P, $t, R), R.programs = it.programs, y.capabilities = le, y.extensions = $t, y.properties = v, y.renderLists = Rt, y.shadowMap = _t, y.state = St, y.info = R;
    }
    Q(), g !== on && (x = new D_(g, e.width, e.height, i, r));
    const X = new xg(y, P);
    this.xr = X, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const T = $t.get("WEBGL_lose_context");
      T && T.loseContext();
    }, this.forceContextRestore = function() {
      const T = $t.get("WEBGL_lose_context");
      T && T.restoreContext();
    }, this.getPixelRatio = function() {
      return It;
    }, this.setPixelRatio = function(T) {
      T !== void 0 && (It = T, this.setSize(ut, ot, false));
    }, this.getSize = function(T) {
      return T.set(ut, ot);
    }, this.setSize = function(T, F, W = true) {
      if (X.isPresenting) {
        Pt("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ut = T, ot = F, e.width = Math.floor(T * It), e.height = Math.floor(F * It), W === true && (e.style.width = T + "px", e.style.height = F + "px"), x !== null && x.setSize(e.width, e.height), this.setViewport(0, 0, T, F);
    }, this.getDrawingBufferSize = function(T) {
      return T.set(ut * It, ot * It).floor();
    }, this.setDrawingBufferSize = function(T, F, W) {
      ut = T, ot = F, It = W, e.width = Math.floor(T * W), e.height = Math.floor(F * W), this.setViewport(0, 0, T, F);
    }, this.setEffects = function(T) {
      if (g === on) {
        console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (T) {
        for (let F = 0; F < T.length; F++) if (T[F].isOutputPass === true) {
          console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      x.setEffects(T || []);
    }, this.getCurrentViewport = function(T) {
      return T.copy(B);
    }, this.getViewport = function(T) {
      return T.copy(K);
    }, this.setViewport = function(T, F, W, H) {
      T.isVector4 ? K.set(T.x, T.y, T.z, T.w) : K.set(T, F, W, H), St.viewport(B.copy(K).multiplyScalar(It).round());
    }, this.getScissor = function(T) {
      return T.copy(nt);
    }, this.setScissor = function(T, F, W, H) {
      T.isVector4 ? nt.set(T.x, T.y, T.z, T.w) : nt.set(T, F, W, H), St.scissor(N.copy(nt).multiplyScalar(It).round());
    }, this.getScissorTest = function() {
      return rt;
    }, this.setScissorTest = function(T) {
      St.setScissorTest(rt = T);
    }, this.setOpaqueSort = function(T) {
      Xt = T;
    }, this.setTransparentSort = function(T) {
      Yt = T;
    }, this.getClearColor = function(T) {
      return T.copy(xt.getClearColor());
    }, this.setClearColor = function() {
      xt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xt.getClearAlpha();
    }, this.setClearAlpha = function() {
      xt.setClearAlpha(...arguments);
    }, this.clear = function(T = true, F = true, W = true) {
      let H = 0;
      if (T) {
        let G = false;
        if (U !== null) {
          const ct = U.texture.format;
          G = p.has(ct);
        }
        if (G) {
          const ct = U.texture.type, dt = d.has(ct), ht = xt.getClearColor(), vt = xt.getClearAlpha(), Et = ht.r, Ut = ht.g, Vt = ht.b;
          dt ? (M[0] = Et, M[1] = Ut, M[2] = Vt, M[3] = vt, P.clearBufferuiv(P.COLOR, 0, M)) : (E[0] = Et, E[1] = Ut, E[2] = Vt, E[3] = vt, P.clearBufferiv(P.COLOR, 0, E));
        } else H |= P.COLOR_BUFFER_BIT;
      }
      F && (H |= P.DEPTH_BUFFER_BIT), W && (H |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), H !== 0 && P.clear(H);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", gt, false), e.removeEventListener("webglcontextrestored", Dt, false), e.removeEventListener("webglcontextcreationerror", ce, false), xt.dispose(), Rt.dispose(), J.dispose(), v.dispose(), q.dispose(), mt.dispose(), et.dispose(), pt.dispose(), it.dispose(), X.dispose(), X.removeEventListener("sessionstart", Zl), X.removeEventListener("sessionend", $l), Pi.stop();
    };
    function gt(T) {
      T.preventDefault(), fc("WebGLRenderer: Context Lost."), z = true;
    }
    function Dt() {
      fc("WebGLRenderer: Context Restored."), z = false;
      const T = R.autoReset, F = _t.enabled, W = _t.autoUpdate, H = _t.needsUpdate, G = _t.type;
      Q(), R.autoReset = T, _t.enabled = F, _t.autoUpdate = W, _t.needsUpdate = H, _t.type = G;
    }
    function ce(T) {
      Zt("WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
    }
    function Qt(T) {
      const F = T.target;
      F.removeEventListener("dispose", Qt), Yn(F);
    }
    function Yn(T) {
      qn(T), v.remove(T);
    }
    function qn(T) {
      const F = v.get(T).programs;
      F !== void 0 && (F.forEach(function(W) {
        it.releaseProgram(W);
      }), T.isShaderMaterial && it.releaseShaderCache(T));
    }
    this.renderBufferDirect = function(T, F, W, H, G, ct) {
      F === null && (F = re);
      const dt = G.isMesh && G.matrixWorld.determinant() < 0, ht = nf(T, F, W, H, G);
      St.setMaterial(H, dt);
      let vt = W.index, Et = 1;
      if (H.wireframe === true) {
        if (vt = Y.getWireframeAttribute(W), vt === void 0) return;
        Et = 2;
      }
      const Ut = W.drawRange, Vt = W.attributes.position;
      let Tt = Ut.start * Et, ee = (Ut.start + Ut.count) * Et;
      ct !== null && (Tt = Math.max(Tt, ct.start * Et), ee = Math.min(ee, (ct.start + ct.count) * Et)), vt !== null ? (Tt = Math.max(Tt, 0), ee = Math.min(ee, vt.count)) : Vt != null && (Tt = Math.max(Tt, 0), ee = Math.min(ee, Vt.count));
      const Me = ee - Tt;
      if (Me < 0 || Me === 1 / 0) return;
      et.setup(G, H, ht, W, vt);
      let me, ne = zt;
      if (vt !== null && (me = j.get(vt), ne = D, ne.setIndex(me)), G.isMesh) H.wireframe === true ? (St.setLineWidth(H.wireframeLinewidth * ve()), ne.setMode(P.LINES)) : ne.setMode(P.TRIANGLES);
      else if (G.isLine) {
        let Fe = H.linewidth;
        Fe === void 0 && (Fe = 1), St.setLineWidth(Fe * ve()), G.isLineSegments ? ne.setMode(P.LINES) : G.isLineLoop ? ne.setMode(P.LINE_LOOP) : ne.setMode(P.LINE_STRIP);
      } else G.isPoints ? ne.setMode(P.POINTS) : G.isSprite && ne.setMode(P.TRIANGLES);
      if (G.isBatchedMesh) if (G._multiDrawInstances !== null) ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), ne.renderMultiDrawInstances(G._multiDrawStarts, G._multiDrawCounts, G._multiDrawCount, G._multiDrawInstances);
      else if ($t.get("WEBGL_multi_draw")) ne.renderMultiDraw(G._multiDrawStarts, G._multiDrawCounts, G._multiDrawCount);
      else {
        const Fe = G._multiDrawStarts, yt = G._multiDrawCounts, en = G._multiDrawCount, jt = vt ? j.get(vt).bytesPerElement : 1, vn = v.get(H).currentProgram.getUniforms();
        for (let wn = 0; wn < en; wn++) vn.setValue(P, "_gl_DrawID", wn), ne.render(Fe[wn] / jt, yt[wn]);
      }
      else if (G.isInstancedMesh) ne.renderInstances(Tt, Me, G.count);
      else if (W.isInstancedBufferGeometry) {
        const Fe = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, yt = Math.min(W.instanceCount, Fe);
        ne.renderInstances(Tt, Me, yt);
      } else ne.render(Tt, Me);
    };
    function jl(T, F, W) {
      T.transparent === true && T.side === Ln && T.forceSinglePass === false ? (T.side = je, T.needsUpdate = true, gr(T, F, W), T.side = bi, T.needsUpdate = true, gr(T, F, W), T.side = Ln) : gr(T, F, W);
    }
    this.compile = function(T, F, W = null) {
      W === null && (W = T), b = J.get(W), b.init(F), w.push(b), W.traverseVisible(function(G) {
        G.isLight && G.layers.test(F.layers) && (b.pushLight(G), G.castShadow && b.pushShadow(G));
      }), T !== W && T.traverseVisible(function(G) {
        G.isLight && G.layers.test(F.layers) && (b.pushLight(G), G.castShadow && b.pushShadow(G));
      }), b.setupLights();
      const H = /* @__PURE__ */ new Set();
      return T.traverse(function(G) {
        if (!(G.isMesh || G.isPoints || G.isLine || G.isSprite)) return;
        const ct = G.material;
        if (ct) if (Array.isArray(ct)) for (let dt = 0; dt < ct.length; dt++) {
          const ht = ct[dt];
          jl(ht, W, G), H.add(ht);
        }
        else jl(ct, W, G), H.add(ct);
      }), b = w.pop(), H;
    }, this.compileAsync = function(T, F, W = null) {
      const H = this.compile(T, F, W);
      return new Promise((G) => {
        function ct() {
          if (H.forEach(function(dt) {
            v.get(dt).currentProgram.isReady() && H.delete(dt);
          }), H.size === 0) {
            G(T);
            return;
          }
          setTimeout(ct, 10);
        }
        $t.get("KHR_parallel_shader_compile") !== null ? ct() : setTimeout(ct, 10);
      });
    };
    let ga = null;
    function ef(T) {
      ga && ga(T);
    }
    function Zl() {
      Pi.stop();
    }
    function $l() {
      Pi.start();
    }
    const Pi = new jh();
    Pi.setAnimationLoop(ef), typeof self < "u" && Pi.setContext(self), this.setAnimationLoop = function(T) {
      ga = T, X.setAnimationLoop(T), T === null ? Pi.stop() : Pi.start();
    }, X.addEventListener("sessionstart", Zl), X.addEventListener("sessionend", $l), this.render = function(T, F) {
      if (F !== void 0 && F.isCamera !== true) {
        Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (z === true) return;
      const W = X.enabled === true && X.isPresenting === true, H = x !== null && (U === null || W) && x.begin(y, U);
      if (T.matrixWorldAutoUpdate === true && T.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === true && F.updateMatrixWorld(), X.enabled === true && X.isPresenting === true && (x === null || x.isCompositing() === false) && (X.cameraAutoUpdate === true && X.updateCamera(F), F = X.getCamera()), T.isScene === true && T.onBeforeRender(y, T, F, U), b = J.get(T, w.length), b.init(F), w.push(b), Re.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), Nt.setFromProjectionMatrix(Re, Nn, F.reversedDepth), Ct = this.localClippingEnabled, wt = tt.init(this.clippingPlanes, Ct), S = Rt.get(T, A.length), S.init(), A.push(S), X.enabled === true && X.isPresenting === true) {
        const dt = y.xr.getDepthSensingMesh();
        dt !== null && xa(dt, F, -1 / 0, y.sortObjects);
      }
      xa(T, F, 0, y.sortObjects), S.finish(), y.sortObjects === true && S.sort(Xt, Yt), kt = X.enabled === false || X.isPresenting === false || X.hasDepthSensing() === false, kt && xt.addToRenderList(S, T), this.info.render.frame++, wt === true && tt.beginShadows();
      const G = b.state.shadowsArray;
      if (_t.render(G, T, F), wt === true && tt.endShadows(), this.info.autoReset === true && this.info.reset(), (H && x.hasRenderPass()) === false) {
        const dt = S.opaque, ht = S.transmissive;
        if (b.setupLights(), F.isArrayCamera) {
          const vt = F.cameras;
          if (ht.length > 0) for (let Et = 0, Ut = vt.length; Et < Ut; Et++) {
            const Vt = vt[Et];
            Ql(dt, ht, T, Vt);
          }
          kt && xt.render(T);
          for (let Et = 0, Ut = vt.length; Et < Ut; Et++) {
            const Vt = vt[Et];
            Jl(S, T, Vt, Vt.viewport);
          }
        } else ht.length > 0 && Ql(dt, ht, T, F), kt && xt.render(T), Jl(S, T, F);
      }
      U !== null && L === 0 && (I.updateMultisampleRenderTarget(U), I.updateRenderTargetMipmap(U)), H && x.end(y), T.isScene === true && T.onAfterRender(y, T, F), et.resetDefaultState(), V = -1, O = null, w.pop(), w.length > 0 ? (b = w[w.length - 1], wt === true && tt.setGlobalState(y.clippingPlanes, b.state.camera)) : b = null, A.pop(), A.length > 0 ? S = A[A.length - 1] : S = null;
    };
    function xa(T, F, W, H) {
      if (T.visible === false) return;
      if (T.layers.test(F.layers)) {
        if (T.isGroup) W = T.renderOrder;
        else if (T.isLOD) T.autoUpdate === true && T.update(F);
        else if (T.isLight) b.pushLight(T), T.castShadow && b.pushShadow(T);
        else if (T.isSprite) {
          if (!T.frustumCulled || Nt.intersectsSprite(T)) {
            H && Jt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);
            const dt = mt.update(T), ht = T.material;
            ht.visible && S.push(T, dt, ht, W, Jt.z, null);
          }
        } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || Nt.intersectsObject(T))) {
          const dt = mt.update(T), ht = T.material;
          if (H && (T.boundingSphere !== void 0 ? (T.boundingSphere === null && T.computeBoundingSphere(), Jt.copy(T.boundingSphere.center)) : (dt.boundingSphere === null && dt.computeBoundingSphere(), Jt.copy(dt.boundingSphere.center)), Jt.applyMatrix4(T.matrixWorld).applyMatrix4(Re)), Array.isArray(ht)) {
            const vt = dt.groups;
            for (let Et = 0, Ut = vt.length; Et < Ut; Et++) {
              const Vt = vt[Et], Tt = ht[Vt.materialIndex];
              Tt && Tt.visible && S.push(T, dt, Tt, W, Jt.z, Vt);
            }
          } else ht.visible && S.push(T, dt, ht, W, Jt.z, null);
        }
      }
      const ct = T.children;
      for (let dt = 0, ht = ct.length; dt < ht; dt++) xa(ct[dt], F, W, H);
    }
    function Jl(T, F, W, H) {
      const { opaque: G, transmissive: ct, transparent: dt } = T;
      b.setupLightsView(W), wt === true && tt.setGlobalState(y.clippingPlanes, W), H && St.viewport(B.copy(H)), G.length > 0 && _r(G, F, W), ct.length > 0 && _r(ct, F, W), dt.length > 0 && _r(dt, F, W), St.buffers.depth.setTest(true), St.buffers.depth.setMask(true), St.buffers.color.setMask(true), St.setPolygonOffset(false);
    }
    function Ql(T, F, W, H) {
      if ((W.isScene === true ? W.overrideMaterial : null) !== null) return;
      if (b.state.transmissionRenderTarget[H.id] === void 0) {
        const Tt = $t.has("EXT_color_buffer_half_float") || $t.has("EXT_color_buffer_float");
        b.state.transmissionRenderTarget[H.id] = new Bn(1, 1, { generateMipmaps: true, type: Tt ? ri : on, minFilter: Hi, samples: Math.max(4, le.samples), stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Kt.workingColorSpace });
      }
      const ct = b.state.transmissionRenderTarget[H.id], dt = H.viewport || B;
      ct.setSize(dt.z * y.transmissionResolutionScale, dt.w * y.transmissionResolutionScale);
      const ht = y.getRenderTarget(), vt = y.getActiveCubeFace(), Et = y.getActiveMipmapLevel();
      y.setRenderTarget(ct), y.getClearColor($), at = y.getClearAlpha(), at < 1 && y.setClearColor(16777215, 0.5), y.clear(), kt && xt.render(W);
      const Ut = y.toneMapping;
      y.toneMapping = On;
      const Vt = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), b.setupLightsView(H), wt === true && tt.setGlobalState(y.clippingPlanes, H), _r(T, W, H), I.updateMultisampleRenderTarget(ct), I.updateRenderTargetMipmap(ct), $t.has("WEBGL_multisampled_render_to_texture") === false) {
        let Tt = false;
        for (let ee = 0, Me = F.length; ee < Me; ee++) {
          const me = F[ee], { object: ne, geometry: Fe, material: yt, group: en } = me;
          if (yt.side === Ln && ne.layers.test(H.layers)) {
            const jt = yt.side;
            yt.side = je, yt.needsUpdate = true, tc(ne, W, H, Fe, yt, en), yt.side = jt, yt.needsUpdate = true, Tt = true;
          }
        }
        Tt === true && (I.updateMultisampleRenderTarget(ct), I.updateRenderTargetMipmap(ct));
      }
      y.setRenderTarget(ht, vt, Et), y.setClearColor($, at), Vt !== void 0 && (H.viewport = Vt), y.toneMapping = Ut;
    }
    function _r(T, F, W) {
      const H = F.isScene === true ? F.overrideMaterial : null;
      for (let G = 0, ct = T.length; G < ct; G++) {
        const dt = T[G], { object: ht, geometry: vt, group: Et } = dt;
        let Ut = dt.material;
        Ut.allowOverride === true && H !== null && (Ut = H), ht.layers.test(W.layers) && tc(ht, F, W, vt, Ut, Et);
      }
    }
    function tc(T, F, W, H, G, ct) {
      T.onBeforeRender(y, F, W, H, G, ct), T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), G.onBeforeRender(y, F, W, H, T, ct), G.transparent === true && G.side === Ln && G.forceSinglePass === false ? (G.side = je, G.needsUpdate = true, y.renderBufferDirect(W, F, H, G, T, ct), G.side = bi, G.needsUpdate = true, y.renderBufferDirect(W, F, H, G, T, ct), G.side = Ln) : y.renderBufferDirect(W, F, H, G, T, ct), T.onAfterRender(y, F, W, H, G, ct);
    }
    function gr(T, F, W) {
      F.isScene !== true && (F = re);
      const H = v.get(T), G = b.state.lights, ct = b.state.shadowsArray, dt = G.state.version, ht = it.getParameters(T, G.state, ct, F, W), vt = it.getProgramCacheKey(ht);
      let Et = H.programs;
      H.environment = T.isMeshStandardMaterial || T.isMeshLambertMaterial || T.isMeshPhongMaterial ? F.environment : null, H.fog = F.fog;
      const Ut = T.isMeshStandardMaterial || T.isMeshLambertMaterial && !T.envMap || T.isMeshPhongMaterial && !T.envMap;
      H.envMap = q.get(T.envMap || H.environment, Ut), H.envMapRotation = H.environment !== null && T.envMap === null ? F.environmentRotation : T.envMapRotation, Et === void 0 && (T.addEventListener("dispose", Qt), Et = /* @__PURE__ */ new Map(), H.programs = Et);
      let Vt = Et.get(vt);
      if (Vt !== void 0) {
        if (H.currentProgram === Vt && H.lightsStateVersion === dt) return nc(T, ht), Vt;
      } else ht.uniforms = it.getUniforms(T), T.onBeforeCompile(ht, y), Vt = it.acquireProgram(ht, vt), Et.set(vt, Vt), H.uniforms = ht.uniforms;
      const Tt = H.uniforms;
      return (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === true) && (Tt.clippingPlanes = tt.uniform), nc(T, ht), H.needsLights = rf(T), H.lightsStateVersion = dt, H.needsLights && (Tt.ambientLightColor.value = G.state.ambient, Tt.lightProbe.value = G.state.probe, Tt.directionalLights.value = G.state.directional, Tt.directionalLightShadows.value = G.state.directionalShadow, Tt.spotLights.value = G.state.spot, Tt.spotLightShadows.value = G.state.spotShadow, Tt.rectAreaLights.value = G.state.rectArea, Tt.ltc_1.value = G.state.rectAreaLTC1, Tt.ltc_2.value = G.state.rectAreaLTC2, Tt.pointLights.value = G.state.point, Tt.pointLightShadows.value = G.state.pointShadow, Tt.hemisphereLights.value = G.state.hemi, Tt.directionalShadowMatrix.value = G.state.directionalShadowMatrix, Tt.spotLightMatrix.value = G.state.spotLightMatrix, Tt.spotLightMap.value = G.state.spotLightMap, Tt.pointShadowMatrix.value = G.state.pointShadowMatrix), H.currentProgram = Vt, H.uniformsList = null, Vt;
    }
    function ec(T) {
      if (T.uniformsList === null) {
        const F = T.currentProgram.getUniforms();
        T.uniformsList = Kr.seqWithValue(F.seq, T.uniforms);
      }
      return T.uniformsList;
    }
    function nc(T, F) {
      const W = v.get(T);
      W.outputColorSpace = F.outputColorSpace, W.batching = F.batching, W.batchingColor = F.batchingColor, W.instancing = F.instancing, W.instancingColor = F.instancingColor, W.instancingMorph = F.instancingMorph, W.skinning = F.skinning, W.morphTargets = F.morphTargets, W.morphNormals = F.morphNormals, W.morphColors = F.morphColors, W.morphTargetsCount = F.morphTargetsCount, W.numClippingPlanes = F.numClippingPlanes, W.numIntersection = F.numClipIntersection, W.vertexAlphas = F.vertexAlphas, W.vertexTangents = F.vertexTangents, W.toneMapping = F.toneMapping;
    }
    function nf(T, F, W, H, G) {
      F.isScene !== true && (F = re), I.resetTextureUnits();
      const ct = F.fog, dt = H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial ? F.environment : null, ht = U === null ? y.outputColorSpace : U.isXRRenderTarget === true ? U.texture.colorSpace : Ds, vt = H.isMeshStandardMaterial || H.isMeshLambertMaterial && !H.envMap || H.isMeshPhongMaterial && !H.envMap, Et = q.get(H.envMap || dt, vt), Ut = H.vertexColors === true && !!W.attributes.color && W.attributes.color.itemSize === 4, Vt = !!W.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), Tt = !!W.morphAttributes.position, ee = !!W.morphAttributes.normal, Me = !!W.morphAttributes.color;
      let me = On;
      H.toneMapped && (U === null || U.isXRRenderTarget === true) && (me = y.toneMapping);
      const ne = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, Fe = ne !== void 0 ? ne.length : 0, yt = v.get(H), en = b.state.lights;
      if (wt === true && (Ct === true || T !== O)) {
        const Ce = T === O && H.id === V;
        tt.setState(H, T, Ce);
      }
      let jt = false;
      H.version === yt.__version ? (yt.needsLights && yt.lightsStateVersion !== en.state.version || yt.outputColorSpace !== ht || G.isBatchedMesh && yt.batching === false || !G.isBatchedMesh && yt.batching === true || G.isBatchedMesh && yt.batchingColor === true && G.colorTexture === null || G.isBatchedMesh && yt.batchingColor === false && G.colorTexture !== null || G.isInstancedMesh && yt.instancing === false || !G.isInstancedMesh && yt.instancing === true || G.isSkinnedMesh && yt.skinning === false || !G.isSkinnedMesh && yt.skinning === true || G.isInstancedMesh && yt.instancingColor === true && G.instanceColor === null || G.isInstancedMesh && yt.instancingColor === false && G.instanceColor !== null || G.isInstancedMesh && yt.instancingMorph === true && G.morphTexture === null || G.isInstancedMesh && yt.instancingMorph === false && G.morphTexture !== null || yt.envMap !== Et || H.fog === true && yt.fog !== ct || yt.numClippingPlanes !== void 0 && (yt.numClippingPlanes !== tt.numPlanes || yt.numIntersection !== tt.numIntersection) || yt.vertexAlphas !== Ut || yt.vertexTangents !== Vt || yt.morphTargets !== Tt || yt.morphNormals !== ee || yt.morphColors !== Me || yt.toneMapping !== me || yt.morphTargetsCount !== Fe) && (jt = true) : (jt = true, yt.__version = H.version);
      let vn = yt.currentProgram;
      jt === true && (vn = gr(H, F, G));
      let wn = false, Di = false, es = false;
      const ae = vn.getUniforms(), Ue = yt.uniforms;
      if (St.useProgram(vn.program) && (wn = true, Di = true, es = true), H.id !== V && (V = H.id, Di = true), wn || O !== T) {
        St.buffers.depth.getReversed() && T.reversedDepth !== true && (T._reversedDepth = true, T.updateProjectionMatrix()), ae.setValue(P, "projectionMatrix", T.projectionMatrix), ae.setValue(P, "viewMatrix", T.matrixWorldInverse);
        const hi = ae.map.cameraPosition;
        hi !== void 0 && hi.setValue(P, qt.setFromMatrixPosition(T.matrixWorld)), le.logarithmicDepthBuffer && ae.setValue(P, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && ae.setValue(P, "isOrthographic", T.isOrthographicCamera === true), O !== T && (O = T, Di = true, es = true);
      }
      if (yt.needsLights && (en.state.directionalShadowMap.length > 0 && ae.setValue(P, "directionalShadowMap", en.state.directionalShadowMap, I), en.state.spotShadowMap.length > 0 && ae.setValue(P, "spotShadowMap", en.state.spotShadowMap, I), en.state.pointShadowMap.length > 0 && ae.setValue(P, "pointShadowMap", en.state.pointShadowMap, I)), G.isSkinnedMesh) {
        ae.setOptional(P, G, "bindMatrix"), ae.setOptional(P, G, "bindMatrixInverse");
        const Ce = G.skeleton;
        Ce && (Ce.boneTexture === null && Ce.computeBoneTexture(), ae.setValue(P, "boneTexture", Ce.boneTexture, I));
      }
      G.isBatchedMesh && (ae.setOptional(P, G, "batchingTexture"), ae.setValue(P, "batchingTexture", G._matricesTexture, I), ae.setOptional(P, G, "batchingIdTexture"), ae.setValue(P, "batchingIdTexture", G._indirectTexture, I), ae.setOptional(P, G, "batchingColorTexture"), G._colorsTexture !== null && ae.setValue(P, "batchingColorTexture", G._colorsTexture, I));
      const ci = W.morphAttributes;
      if ((ci.position !== void 0 || ci.normal !== void 0 || ci.color !== void 0) && ft.update(G, W, vn), (Di || yt.receiveShadow !== G.receiveShadow) && (yt.receiveShadow = G.receiveShadow, ae.setValue(P, "receiveShadow", G.receiveShadow)), (H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial) && H.envMap === null && F.environment !== null && (Ue.envMapIntensity.value = F.environmentIntensity), Ue.dfgLUT !== void 0 && (Ue.dfgLUT.value = Eg()), Di && (ae.setValue(P, "toneMappingExposure", y.toneMappingExposure), yt.needsLights && sf(Ue, es), ct && H.fog === true && bt.refreshFogUniforms(Ue, ct), bt.refreshMaterialUniforms(Ue, H, It, ot, b.state.transmissionRenderTarget[T.id]), Kr.upload(P, ec(yt), Ue, I)), H.isShaderMaterial && H.uniformsNeedUpdate === true && (Kr.upload(P, ec(yt), Ue, I), H.uniformsNeedUpdate = false), H.isSpriteMaterial && ae.setValue(P, "center", G.center), ae.setValue(P, "modelViewMatrix", G.modelViewMatrix), ae.setValue(P, "normalMatrix", G.normalMatrix), ae.setValue(P, "modelMatrix", G.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
        const Ce = H.uniformsGroups;
        for (let hi = 0, ns = Ce.length; hi < ns; hi++) {
          const ic = Ce[hi];
          pt.update(ic, vn), pt.bind(ic, vn);
        }
      }
      return vn;
    }
    function sf(T, F) {
      T.ambientLightColor.needsUpdate = F, T.lightProbe.needsUpdate = F, T.directionalLights.needsUpdate = F, T.directionalLightShadows.needsUpdate = F, T.pointLights.needsUpdate = F, T.pointLightShadows.needsUpdate = F, T.spotLights.needsUpdate = F, T.spotLightShadows.needsUpdate = F, T.rectAreaLights.needsUpdate = F, T.hemisphereLights.needsUpdate = F;
    }
    function rf(T) {
      return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === true;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(T, F, W) {
      const H = v.get(T);
      H.__autoAllocateDepthBuffer = T.resolveDepthBuffer === false, H.__autoAllocateDepthBuffer === false && (H.__useRenderToTexture = false), v.get(T.texture).__webglTexture = F, v.get(T.depthTexture).__webglTexture = H.__autoAllocateDepthBuffer ? void 0 : W, H.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(T, F) {
      const W = v.get(T);
      W.__webglFramebuffer = F, W.__useDefaultFramebuffer = F === void 0;
    };
    const af = P.createFramebuffer();
    this.setRenderTarget = function(T, F = 0, W = 0) {
      U = T, C = F, L = W;
      let H = null, G = false, ct = false;
      if (T) {
        const ht = v.get(T);
        if (ht.__useDefaultFramebuffer !== void 0) {
          St.bindFramebuffer(P.FRAMEBUFFER, ht.__webglFramebuffer), B.copy(T.viewport), N.copy(T.scissor), Z = T.scissorTest, St.viewport(B), St.scissor(N), St.setScissorTest(Z), V = -1;
          return;
        } else if (ht.__webglFramebuffer === void 0) I.setupRenderTarget(T);
        else if (ht.__hasExternalTextures) I.rebindTextures(T, v.get(T.texture).__webglTexture, v.get(T.depthTexture).__webglTexture);
        else if (T.depthBuffer) {
          const Ut = T.depthTexture;
          if (ht.__boundDepthTexture !== Ut) {
            if (Ut !== null && v.has(Ut) && (T.width !== Ut.image.width || T.height !== Ut.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            I.setupDepthRenderbuffer(T);
          }
        }
        const vt = T.texture;
        (vt.isData3DTexture || vt.isDataArrayTexture || vt.isCompressedArrayTexture) && (ct = true);
        const Et = v.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget ? (Array.isArray(Et[F]) ? H = Et[F][W] : H = Et[F], G = true) : T.samples > 0 && I.useMultisampledRTT(T) === false ? H = v.get(T).__webglMultisampledFramebuffer : Array.isArray(Et) ? H = Et[W] : H = Et, B.copy(T.viewport), N.copy(T.scissor), Z = T.scissorTest;
      } else B.copy(K).multiplyScalar(It).floor(), N.copy(nt).multiplyScalar(It).floor(), Z = rt;
      if (W !== 0 && (H = af), St.bindFramebuffer(P.FRAMEBUFFER, H) && St.drawBuffers(T, H), St.viewport(B), St.scissor(N), St.setScissorTest(Z), G) {
        const ht = v.get(T.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + F, ht.__webglTexture, W);
      } else if (ct) {
        const ht = F;
        for (let vt = 0; vt < T.textures.length; vt++) {
          const Et = v.get(T.textures[vt]);
          P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0 + vt, Et.__webglTexture, W, ht);
        }
      } else if (T !== null && W !== 0) {
        const ht = v.get(T.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, ht.__webglTexture, W);
      }
      V = -1;
    }, this.readRenderTargetPixels = function(T, F, W, H, G, ct, dt, ht = 0) {
      if (!(T && T.isWebGLRenderTarget)) {
        Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let vt = v.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && dt !== void 0 && (vt = vt[dt]), vt) {
        St.bindFramebuffer(P.FRAMEBUFFER, vt);
        try {
          const Et = T.textures[ht], Ut = Et.format, Vt = Et.type;
          if (T.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + ht), !le.textureFormatReadable(Ut)) {
            Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!le.textureTypeReadable(Vt)) {
            Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= T.width - H && W >= 0 && W <= T.height - G && P.readPixels(F, W, H, G, st.convert(Ut), st.convert(Vt), ct);
        } finally {
          const Et = U !== null ? v.get(U).__webglFramebuffer : null;
          St.bindFramebuffer(P.FRAMEBUFFER, Et);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(T, F, W, H, G, ct, dt, ht = 0) {
      if (!(T && T.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let vt = v.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && dt !== void 0 && (vt = vt[dt]), vt) if (F >= 0 && F <= T.width - H && W >= 0 && W <= T.height - G) {
        St.bindFramebuffer(P.FRAMEBUFFER, vt);
        const Et = T.textures[ht], Ut = Et.format, Vt = Et.type;
        if (T.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + ht), !le.textureFormatReadable(Ut)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!le.textureTypeReadable(Vt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Tt = P.createBuffer();
        P.bindBuffer(P.PIXEL_PACK_BUFFER, Tt), P.bufferData(P.PIXEL_PACK_BUFFER, ct.byteLength, P.STREAM_READ), P.readPixels(F, W, H, G, st.convert(Ut), st.convert(Vt), 0);
        const ee = U !== null ? v.get(U).__webglFramebuffer : null;
        St.bindFramebuffer(P.FRAMEBUFFER, ee);
        const Me = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return P.flush(), await Gf(P, Me, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, Tt), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, ct), P.deleteBuffer(Tt), P.deleteSync(Me), ct;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(T, F = null, W = 0) {
      const H = Math.pow(2, -W), G = Math.floor(T.image.width * H), ct = Math.floor(T.image.height * H), dt = F !== null ? F.x : 0, ht = F !== null ? F.y : 0;
      I.setTexture2D(T, 0), P.copyTexSubImage2D(P.TEXTURE_2D, W, 0, 0, dt, ht, G, ct), St.unbindTexture();
    };
    const of = P.createFramebuffer(), lf = P.createFramebuffer();
    this.copyTextureToTexture = function(T, F, W = null, H = null, G = 0, ct = 0) {
      let dt, ht, vt, Et, Ut, Vt, Tt, ee, Me;
      const me = T.isCompressedTexture ? T.mipmaps[ct] : T.image;
      if (W !== null) dt = W.max.x - W.min.x, ht = W.max.y - W.min.y, vt = W.isBox3 ? W.max.z - W.min.z : 1, Et = W.min.x, Ut = W.min.y, Vt = W.isBox3 ? W.min.z : 0;
      else {
        const Ue = Math.pow(2, -G);
        dt = Math.floor(me.width * Ue), ht = Math.floor(me.height * Ue), T.isDataArrayTexture ? vt = me.depth : T.isData3DTexture ? vt = Math.floor(me.depth * Ue) : vt = 1, Et = 0, Ut = 0, Vt = 0;
      }
      H !== null ? (Tt = H.x, ee = H.y, Me = H.z) : (Tt = 0, ee = 0, Me = 0);
      const ne = st.convert(F.format), Fe = st.convert(F.type);
      let yt;
      F.isData3DTexture ? (I.setTexture3D(F, 0), yt = P.TEXTURE_3D) : F.isDataArrayTexture || F.isCompressedArrayTexture ? (I.setTexture2DArray(F, 0), yt = P.TEXTURE_2D_ARRAY) : (I.setTexture2D(F, 0), yt = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, F.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, F.unpackAlignment);
      const en = P.getParameter(P.UNPACK_ROW_LENGTH), jt = P.getParameter(P.UNPACK_IMAGE_HEIGHT), vn = P.getParameter(P.UNPACK_SKIP_PIXELS), wn = P.getParameter(P.UNPACK_SKIP_ROWS), Di = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, me.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, me.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Et), P.pixelStorei(P.UNPACK_SKIP_ROWS, Ut), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Vt);
      const es = T.isDataArrayTexture || T.isData3DTexture, ae = F.isDataArrayTexture || F.isData3DTexture;
      if (T.isDepthTexture) {
        const Ue = v.get(T), ci = v.get(F), Ce = v.get(Ue.__renderTarget), hi = v.get(ci.__renderTarget);
        St.bindFramebuffer(P.READ_FRAMEBUFFER, Ce.__webglFramebuffer), St.bindFramebuffer(P.DRAW_FRAMEBUFFER, hi.__webglFramebuffer);
        for (let ns = 0; ns < vt; ns++) es && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, v.get(T).__webglTexture, G, Vt + ns), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, v.get(F).__webglTexture, ct, Me + ns)), P.blitFramebuffer(Et, Ut, dt, ht, Tt, ee, dt, ht, P.DEPTH_BUFFER_BIT, P.NEAREST);
        St.bindFramebuffer(P.READ_FRAMEBUFFER, null), St.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else if (G !== 0 || T.isRenderTargetTexture || v.has(T)) {
        const Ue = v.get(T), ci = v.get(F);
        St.bindFramebuffer(P.READ_FRAMEBUFFER, of), St.bindFramebuffer(P.DRAW_FRAMEBUFFER, lf);
        for (let Ce = 0; Ce < vt; Ce++) es ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Ue.__webglTexture, G, Vt + Ce) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, Ue.__webglTexture, G), ae ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, ci.__webglTexture, ct, Me + Ce) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, ci.__webglTexture, ct), G !== 0 ? P.blitFramebuffer(Et, Ut, dt, ht, Tt, ee, dt, ht, P.COLOR_BUFFER_BIT, P.NEAREST) : ae ? P.copyTexSubImage3D(yt, ct, Tt, ee, Me + Ce, Et, Ut, dt, ht) : P.copyTexSubImage2D(yt, ct, Tt, ee, Et, Ut, dt, ht);
        St.bindFramebuffer(P.READ_FRAMEBUFFER, null), St.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else ae ? T.isDataTexture || T.isData3DTexture ? P.texSubImage3D(yt, ct, Tt, ee, Me, dt, ht, vt, ne, Fe, me.data) : F.isCompressedArrayTexture ? P.compressedTexSubImage3D(yt, ct, Tt, ee, Me, dt, ht, vt, ne, me.data) : P.texSubImage3D(yt, ct, Tt, ee, Me, dt, ht, vt, ne, Fe, me) : T.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, ct, Tt, ee, dt, ht, ne, Fe, me.data) : T.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, ct, Tt, ee, me.width, me.height, ne, me.data) : P.texSubImage2D(P.TEXTURE_2D, ct, Tt, ee, dt, ht, ne, Fe, me);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, en), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, jt), P.pixelStorei(P.UNPACK_SKIP_PIXELS, vn), P.pixelStorei(P.UNPACK_SKIP_ROWS, wn), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Di), ct === 0 && F.generateMipmaps && P.generateMipmap(yt), St.unbindTexture();
    }, this.initRenderTarget = function(T) {
      v.get(T).__webglFramebuffer === void 0 && I.setupRenderTarget(T);
    }, this.initTexture = function(T) {
      T.isCubeTexture ? I.setTextureCube(T, 0) : T.isData3DTexture ? I.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? I.setTexture2DArray(T, 0) : I.setTexture2D(T, 0), St.unbindTexture();
    }, this.resetState = function() {
      C = 0, L = 0, U = null, St.reset(), et.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Nn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Kt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Kt._getUnpackColorSpace();
  }
}
const nh = { type: "change" }, Dl = { type: "start" }, eu = { type: "end" }, zr = new Hh(), ih = new gi(), bg = Math.cos(70 * Xf.DEG2RAD), be = new k(), Ke = 2 * Math.PI, se = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, Qa = 1e-6;
class Ag extends Pd {
  constructor(t, e = null) {
    super(t, e), this.state = se.NONE, this.target = new k(), this.cursor = new k(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ss.ROTATE, MIDDLE: Ss.DOLLY, RIGHT: Ss.PAN }, this.touches = { ONE: xs.ROTATE, TWO: xs.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new k(), this._lastQuaternion = new Ai(), this._lastTargetPosition = new k(), this._quat = new Ai().setFromUnitVectors(t.up, new k(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Dc(), this._sphericalDelta = new Dc(), this._scale = 1, this._panOffset = new k(), this._rotateStart = new Lt(), this._rotateEnd = new Lt(), this._rotateDelta = new Lt(), this._panStart = new Lt(), this._panEnd = new Lt(), this._panDelta = new Lt(), this._dollyStart = new Lt(), this._dollyEnd = new Lt(), this._dollyDelta = new Lt(), this._dollyDirection = new k(), this._mouse = new Lt(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Rg.bind(this), this._onPointerDown = wg.bind(this), this._onPointerUp = Cg.bind(this), this._onContextMenu = Fg.bind(this), this._onMouseWheel = Lg.bind(this), this._onKeyDown = Ig.bind(this), this._onTouchStart = Ug.bind(this), this._onTouchMove = Ng.bind(this), this._onMouseDown = Pg.bind(this), this._onMouseMove = Dg.bind(this), this._interceptControlDown = Og.bind(this), this._interceptControlUp = Bg.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  set cursorStyle(t) {
    this._cursorStyle = t, t === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(nh), this.update(), this.state = se.NONE;
  }
  pan(t, e) {
    this._pan(t, e), this.update();
  }
  dollyIn(t) {
    this._dollyIn(t), this.update();
  }
  dollyOut(t) {
    this._dollyOut(t), this.update();
  }
  rotateLeft(t) {
    this._rotateLeft(t), this.update();
  }
  rotateUp(t) {
    this._rotateUp(t), this.update();
  }
  update(t = null) {
    const e = this.object.position;
    be.copy(e).sub(this.target), be.applyQuaternion(this._quat), this._spherical.setFromVector3(be), this.autoRotate && this.state === se.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Ke : n > Math.PI && (n -= Ke), i < -Math.PI ? i += Ke : i > Math.PI && (i -= Ke), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (be.setFromSpherical(this._spherical), be.applyQuaternion(this._quatInverse), e.copy(this.target).add(be), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = be.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new k(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new k(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = be.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (zr.origin.copy(this.object.position), zr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(zr.direction)) < bg ? this.object.lookAt(this.target) : (ih.setFromNormalAndCoplanarPoint(this.object.up, this.target), zr.intersectPlane(ih, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > Qa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Qa || this._lastTargetPosition.distanceToSquared(this.target) > Qa ? (this.dispatchEvent(nh), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ke / 60 * this.autoRotateSpeed * t : Ke / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    be.setFromMatrixColumn(e, 0), be.multiplyScalar(-t), this._panOffset.add(be);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? be.setFromMatrixColumn(e, 1) : (be.setFromMatrixColumn(e, 0), be.crossVectors(this.object.up, be)), be.multiplyScalar(t), this._panOffset.add(be);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      be.copy(i).sub(this.target);
      let r = be.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), i = t - n.left, r = e - n.top, a = n.width, o = n.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ke * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ke * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ke * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ke * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ke * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ke * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ke * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ke * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Lt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function wg(s16) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s16.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s16) && (this._addPointer(s16), s16.pointerType === "touch" ? this._onTouchStart(s16) : this._onMouseDown(s16), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function Rg(s16) {
  this.enabled !== false && (s16.pointerType === "touch" ? this._onTouchMove(s16) : this._onMouseMove(s16));
}
function Cg(s16) {
  switch (this._removePointer(s16), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s16.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(eu), this.state = se.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Pg(s16) {
  let t;
  switch (s16.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case Ss.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s16), this.state = se.DOLLY;
      break;
    case Ss.ROTATE:
      if (s16.ctrlKey || s16.metaKey || s16.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s16), this.state = se.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s16), this.state = se.ROTATE;
      }
      break;
    case Ss.PAN:
      if (s16.ctrlKey || s16.metaKey || s16.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s16), this.state = se.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s16), this.state = se.PAN;
      }
      break;
    default:
      this.state = se.NONE;
  }
  this.state !== se.NONE && this.dispatchEvent(Dl);
}
function Dg(s16) {
  switch (this.state) {
    case se.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s16);
      break;
    case se.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s16);
      break;
    case se.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s16);
      break;
  }
}
function Lg(s16) {
  this.enabled === false || this.enableZoom === false || this.state !== se.NONE || (s16.preventDefault(), this.dispatchEvent(Dl), this._handleMouseWheel(this._customWheelEvent(s16)), this.dispatchEvent(eu));
}
function Ig(s16) {
  this.enabled !== false && this._handleKeyDown(s16);
}
function Ug(s16) {
  switch (this._trackPointer(s16), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case xs.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s16), this.state = se.TOUCH_ROTATE;
          break;
        case xs.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s16), this.state = se.TOUCH_PAN;
          break;
        default:
          this.state = se.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case xs.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s16), this.state = se.TOUCH_DOLLY_PAN;
          break;
        case xs.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s16), this.state = se.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = se.NONE;
      }
      break;
    default:
      this.state = se.NONE;
  }
  this.state !== se.NONE && this.dispatchEvent(Dl);
}
function Ng(s16) {
  switch (this._trackPointer(s16), this.state) {
    case se.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s16), this.update();
      break;
    case se.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s16), this.update();
      break;
    case se.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s16), this.update();
      break;
    case se.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s16), this.update();
      break;
    default:
      this.state = se.NONE;
  }
}
function Fg(s16) {
  this.enabled !== false && s16.preventDefault();
}
function Og(s16) {
  s16.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Bg(s16) {
  s16.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Qn(s16) {
  if (s16 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s16;
}
function nu(s16, t) {
  s16.prototype = Object.create(t.prototype), s16.prototype.constructor = s16, s16.__proto__ = t;
}
var hn = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, Is = { duration: 0.5, overwrite: false, delay: 0 }, Ll, Ge, fe, mn = 1e8, he = 1 / mn, tl = Math.PI * 2, kg = tl / 4, zg = 0, iu = Math.sqrt, Vg = Math.cos, Gg = Math.sin, Ie = function(t) {
  return typeof t == "string";
}, ge = function(t) {
  return typeof t == "function";
}, oi = function(t) {
  return typeof t == "number";
}, Il = function(t) {
  return typeof t > "u";
}, Xn = function(t) {
  return typeof t == "object";
}, Ze = function(t) {
  return t !== false;
}, Ul = function() {
  return typeof window < "u";
}, Vr = function(t) {
  return ge(t) || Ie(t);
}, su = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, He = Array.isArray, el = /(?:-?\.?\d|\.)+/gi, ru = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, to = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, au = /[+-]=-?[.\d]+/, ou = /[^,'"\[\]\s]+/gi, Hg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, de, Pn, nl, Nl, un = {}, ia = {}, lu, cu = function(t) {
  return (ia = $i(t, un)) && tn;
}, Fl = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, ar = function(t, e) {
  return !e && console.warn(t);
}, hu = function(t, e) {
  return t && (un[t] = e) && ia && (ia[t] = e) || un;
}, or = function() {
  return 0;
}, Wg = { suppressEvents: true, isStart: true, kill: false }, jr = { suppressEvents: true, kill: false }, Xg = { suppressEvents: true }, Ol = {}, Ei = [], il = {}, uu, rn = {}, eo = {}, sh = 30, Zr = [], Bl = "", kl = function(t) {
  var e = t[0], n, i;
  if (Xn(e) || ge(e) || (t = [t]), !(n = (e._gsap || {}).harness)) {
    for (i = Zr.length; i-- && !Zr[i].targetTest(e); ) ;
    n = Zr[i];
  }
  for (i = t.length; i--; ) t[i] && (t[i]._gsap || (t[i]._gsap = new Nu(t[i], n))) || t.splice(i, 1);
  return t;
}, Yi = function(t) {
  return t._gsap || kl(_n(t))[0]._gsap;
}, fu = function(t, e, n) {
  return (n = t[e]) && ge(n) ? t[e]() : Il(n) && t.getAttribute && t.getAttribute(e) || n;
}, $e = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, Se = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, De = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, bs = function(t, e) {
  var n = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), n === "+" ? t + i : n === "-" ? t - i : n === "*" ? t * i : t / i;
}, Yg = function(t, e) {
  for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; ) ;
  return i < n;
}, sa = function() {
  var t = Ei.length, e = Ei.slice(0), n, i;
  for (il = {}, Ei.length = 0, n = 0; n < t; n++) i = e[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], true)._lazy = 0);
}, du = function(t, e, n, i) {
  Ei.length && !Ge && sa(), t.render(e, n, Ge && e < 0 && (t._initted || t._startAt)), Ei.length && !Ge && sa();
}, pu = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(ou).length < 2 ? e : Ie(t) ? t.trim() : t;
}, mu = function(t) {
  return t;
}, xn = function(t, e) {
  for (var n in e) n in t || (t[n] = e[n]);
  return t;
}, qg = function(t) {
  return function(e, n) {
    for (var i in n) i in e || i === "duration" && t || i === "ease" || (e[i] = n[i]);
  };
}, $i = function(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}, rh = function s(t, e) {
  for (var n in e) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = Xn(e[n]) ? s(t[n] || (t[n] = {}), e[n]) : e[n]);
  return t;
}, ra = function(t, e) {
  var n = {}, i;
  for (i in t) i in e || (n[i] = t[i]);
  return n;
}, Js = function(t) {
  var e = t.parent || de, n = t.keyframes ? qg(He(t.keyframes)) : xn;
  if (Ze(t.inherit)) for (; e; ) n(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Kg = function(t, e) {
  for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; ) ;
  return n < 0;
}, _u = function(t, e, n, i, r) {
  var a = t[i], o;
  if (r) for (o = e[r]; a && a[r] > o; ) a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e;
}, pa = function(t, e, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var r = e._prev, a = e._next;
  r ? r._next = a : t[n] === e && (t[n] = a), a ? a._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null;
}, wi = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, qi = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) n._dirty = 1, n = n.parent;
  return t;
}, jg = function(t) {
  for (var e = t.parent; e && e.parent; ) e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, sl = function(t, e, n, i) {
  return t._startAt && (Ge ? t._startAt.revert(jr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, true, i));
}, Zg = function s2(t) {
  return !t || t._ts && s2(t.parent);
}, ah = function(t) {
  return t._repeat ? Us(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Us = function(t, e) {
  var n = Math.floor(t /= e);
  return t && n === t ? n - 1 : n;
}, aa = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, ma = function(t) {
  return t._end = De(t._start + (t._tDur / Math.abs(t._ts || t._rts || he) || 0));
}, _a = function(t, e) {
  var n = t._dp;
  return n && n.smoothChildTiming && t._ts && (t._start = De(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ma(t), n._dirty || qi(n, t)), t;
}, gu = function(t, e) {
  var n;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = aa(t.rawTime(), e), (!e._dur || mr(0, e.totalDuration(), n) - e._tTime > he) && e.render(n, true)), qi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    t._zTime = -he;
  }
}, In = function(t, e, n, i) {
  return e.parent && wi(e), e._start = De((oi(n) ? n : n || t !== de ? dn(t, n, e) : t._time) + e._delay), e._end = De(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), _u(t, e, "_first", "_last", t._sort ? "_start" : 0), rl(e) || (t._recent = e), i || gu(t, e), t._ts < 0 && _a(t, t._tTime), t;
}, xu = function(t, e) {
  return (un.ScrollTrigger || Fl("scrollTrigger", e)) && un.ScrollTrigger.create(e, t);
}, vu = function(t, e, n, i, r) {
  if (Vl(t, e, r), !t._initted) return 1;
  if (!n && t._pt && !Ge && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && uu !== ln.frame) return Ei.push(t), t._lazy = [r, i], 1;
}, $g = function s3(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s3(e));
}, rl = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Jg = function(t, e, n, i) {
  var r = t.ratio, a = e < 0 || !e && (!t._start && $g(t) && !(!t._initted && rl(t)) || (t._ts < 0 || t._dp._ts < 0) && !rl(t)) ? 0 : 1, o = t._rDelay, l = 0, c, h, f;
  if (o && t._repeat && (l = mr(0, t._tDur, e), h = Us(l, o), t._yoyo && h & 1 && (a = 1 - a), h !== Us(t._tTime, o) && (r = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== r || Ge || i || t._zTime === he || !e && t._zTime) {
    if (!t._initted && vu(t, e, i, n, l)) return;
    for (f = t._zTime, t._zTime = e || (n ? he : 0), n || (n = e && !f), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = l, c = t._pt; c; ) c.r(a, c.d), c = c._next;
    e < 0 && sl(t, e, n, true), t._onUpdate && !n && cn(t, "onUpdate"), l && t._repeat && !n && t.parent && cn(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && wi(t, 1), !n && !Ge && (cn(t, a ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Qg = function(t, e, n) {
  var i;
  if (n > e) for (i = t._first; i && i._start <= n; ) {
    if (i.data === "isPause" && i._start > e) return i;
    i = i._next;
  }
  else for (i = t._last; i && i._start >= n; ) {
    if (i.data === "isPause" && i._start < e) return i;
    i = i._prev;
  }
}, Ns = function(t, e, n, i) {
  var r = t._repeat, a = De(e) || 0, o = t._tTime / t._tDur;
  return o && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = r ? r < 0 ? 1e10 : De(a * (r + 1) + t._rDelay * r) : a, o > 0 && !i && _a(t, t._tTime = t._tDur * o), t.parent && ma(t), n || qi(t.parent, t), t;
}, oh = function(t) {
  return t instanceof Xe ? qi(t) : Ns(t, t._dur);
}, tx = { _start: 0, endTime: or, totalDuration: or }, dn = function s4(t, e, n) {
  var i = t.labels, r = t._recent || tx, a = t.duration() >= mn ? r.endTime(false) : t._dur, o, l, c;
  return Ie(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), c = e.substr(-1) === "%", o = e.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (o < 0 ? r : n).totalDuration() / 100 : 1)) : o < 0 ? (e in i || (i[e] = a), i[e]) : (l = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), c && n && (l = l / 100 * (He(n) ? n[0] : n).totalDuration()), o > 1 ? s4(t, e.substr(0, o - 1), n) + l : a + l)) : e == null ? a : +e;
}, Qs = function(t, e, n) {
  var i = oi(e[1]), r = (i ? 2 : 1) + (t < 2 ? 0 : 1), a = e[r], o, l;
  if (i && (a.duration = e[1]), a.parent = n, t) {
    for (o = a, l = n; l && !("immediateRender" in o); ) o = l.vars.defaults || {}, l = Ze(l.vars.inherit) && l.parent;
    a.immediateRender = Ze(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[r - 1];
  }
  return new Te(e[0], a, e[r + 1]);
}, Ci = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, mr = function(t, e, n) {
  return n < t ? t : n > e ? e : n;
}, ke = function(t, e) {
  return !Ie(t) || !(e = Hg.exec(t)) ? "" : e[1];
}, ex = function(t, e, n) {
  return Ci(n, function(i) {
    return mr(t, e, i);
  });
}, al = [].slice, Mu = function(t, e) {
  return t && Xn(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Xn(t[0])) && !t.nodeType && t !== Pn;
}, nx = function(t, e, n) {
  return n === void 0 && (n = []), t.forEach(function(i) {
    var r;
    return Ie(i) && !e || Mu(i, 1) ? (r = n).push.apply(r, _n(i)) : n.push(i);
  }) || n;
}, _n = function(t, e, n) {
  return fe && !e && fe.selector ? fe.selector(t) : Ie(t) && !n && (nl || !Fs()) ? al.call((e || Nl).querySelectorAll(t), 0) : He(t) ? nx(t, n) : Mu(t) ? al.call(t, 0) : t ? [t] : [];
}, ol = function(t) {
  return t = _n(t)[0] || ar("Invalid scope") || {}, function(e) {
    var n = t.current || t.nativeElement || t;
    return _n(e, n.querySelectorAll ? n : n === t ? ar("Invalid scope") || Nl.createElement("div") : t);
  };
}, Su = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, yu = function(t) {
  if (ge(t)) return t;
  var e = Xn(t) ? t : { each: t }, n = Ki(e.ease), i = e.from || 0, r = parseFloat(e.base) || 0, a = {}, o = i > 0 && i < 1, l = isNaN(i) || o, c = e.axis, h = i, f = i;
  return Ie(i) ? h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0 : !o && l && (h = i[0], f = i[1]), function(u, m, _) {
    var g = (_ || e).length, p = a[g], d, M, E, S, b, A, w, x, y;
    if (!p) {
      if (y = e.grid === "auto" ? 0 : (e.grid || [1, mn])[1], !y) {
        for (w = -mn; w < (w = _[y++].getBoundingClientRect().left) && y < g; ) ;
        y < g && y--;
      }
      for (p = a[g] = [], d = l ? Math.min(y, g) * h - 0.5 : i % y, M = y === mn ? 0 : l ? g * f / y - 0.5 : i / y | 0, w = 0, x = mn, A = 0; A < g; A++) E = A % y - d, S = M - (A / y | 0), p[A] = b = c ? Math.abs(c === "y" ? S : E) : iu(E * E + S * S), b > w && (w = b), b < x && (x = b);
      i === "random" && Su(p), p.max = w - x, p.min = x, p.v = g = (parseFloat(e.amount) || parseFloat(e.each) * (y > g ? g - 1 : c ? c === "y" ? g / y : y : Math.max(y, g / y)) || 0) * (i === "edges" ? -1 : 1), p.b = g < 0 ? r - g : r, p.u = ke(e.amount || e.each) || 0, n = n && g < 0 ? Lu(n) : n;
    }
    return g = (p[u] - p.min) / p.max || 0, De(p.b + (n ? n(g) : g) * p.v) + p.u;
  };
}, ll = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(n) {
    var i = De(Math.round(parseFloat(n) / t) * t * e);
    return (i - i % 1) / e + (oi(n) ? 0 : ke(n));
  };
}, Eu = function(t, e) {
  var n = He(t), i, r;
  return !n && Xn(t) && (i = n = t.radius || mn, t.values ? (t = _n(t.values), (r = !oi(t[0])) && (i *= i)) : t = ll(t.increment)), Ci(e, n ? ge(t) ? function(a) {
    return r = t(a), Math.abs(r - a) <= i ? r : a;
  } : function(a) {
    for (var o = parseFloat(r ? a.x : a), l = parseFloat(r ? a.y : 0), c = mn, h = 0, f = t.length, u, m; f--; ) r ? (u = t[f].x - o, m = t[f].y - l, u = u * u + m * m) : u = Math.abs(t[f] - o), u < c && (c = u, h = f);
    return h = !i || c <= i ? t[h] : a, r || h === a || oi(a) ? h : h + ke(a);
  } : ll(t));
}, Tu = function(t, e, n, i) {
  return Ci(He(t) ? !e : n === true ? !!(n = 0) : !i, function() {
    return He(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) * n * i) / i;
  });
}, ix = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return function(i) {
    return e.reduce(function(r, a) {
      return a(r);
    }, i);
  };
}, sx = function(t, e) {
  return function(n) {
    return t(parseFloat(n)) + (e || ke(n));
  };
}, rx = function(t, e, n) {
  return Au(t, e, 0, 1, n);
}, bu = function(t, e, n) {
  return Ci(n, function(i) {
    return t[~~e(i)];
  });
}, ax = function s5(t, e, n) {
  var i = e - t;
  return He(t) ? bu(t, s5(0, t.length), e) : Ci(n, function(r) {
    return (i + (r - t) % i) % i + t;
  });
}, ox = function s6(t, e, n) {
  var i = e - t, r = i * 2;
  return He(t) ? bu(t, s6(0, t.length - 1), e) : Ci(n, function(a) {
    return a = (r + (a - t) % r) % r || 0, t + (a > i ? r - a : a);
  });
}, lr = function(t) {
  for (var e = 0, n = "", i, r, a, o; ~(i = t.indexOf("random(", e)); ) a = t.indexOf(")", i), o = t.charAt(i + 7) === "[", r = t.substr(i + 7, a - i - 7).match(o ? ou : el), n += t.substr(e, i - e) + Tu(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5), e = a + 1;
  return n + t.substr(e, t.length - e);
}, Au = function(t, e, n, i, r) {
  var a = e - t, o = i - n;
  return Ci(r, function(l) {
    return n + ((l - t) / a * o || 0);
  });
}, lx = function s7(t, e, n, i) {
  var r = isNaN(t + e) ? 0 : function(m) {
    return (1 - m) * t + m * e;
  };
  if (!r) {
    var a = Ie(t), o = {}, l, c, h, f, u;
    if (n === true && (i = 1) && (n = null), a) t = { p: t }, e = { p: e };
    else if (He(t) && !He(e)) {
      for (h = [], f = t.length, u = f - 2, c = 1; c < f; c++) h.push(s7(t[c - 1], t[c]));
      f--, r = function(_) {
        _ *= f;
        var g = Math.min(u, ~~_);
        return h[g](_ - g);
      }, n = e;
    } else i || (t = $i(He(t) ? [] : {}, t));
    if (!h) {
      for (l in e) zl.call(o, t, l, "get", e[l]);
      r = function(_) {
        return Wl(_, o) || (a ? t.p : t);
      };
    }
  }
  return Ci(n, r);
}, lh = function(t, e, n) {
  var i = t.labels, r = mn, a, o, l;
  for (a in i) o = i[a] - e, o < 0 == !!n && o && r > (o = Math.abs(o)) && (l = a, r = o);
  return l;
}, cn = function(t, e, n) {
  var i = t.vars, r = i[e], a = fe, o = t._ctx, l, c, h;
  if (r) return l = i[e + "Params"], c = i.callbackScope || t, n && Ei.length && sa(), o && (fe = o), h = l ? r.apply(c, l) : r.call(c), fe = a, h;
}, Zs = function(t) {
  return wi(t), t.scrollTrigger && t.scrollTrigger.kill(!!Ge), t.progress() < 1 && cn(t, "onInterrupt"), t;
}, Ms, wu = [], Ru = function(t) {
  if (t) if (t = !t.name && t.default || t, Ul() || t.headless) {
    var e = t.name, n = ge(t), i = e && !n && t.init ? function() {
      this._props = [];
    } : t, r = { init: or, render: Wl, add: zl, kill: Tx, modifier: Ex, rawVars: 0 }, a = { targetTest: 0, get: 0, getSetter: Hl, aliases: {}, register: 0 };
    if (Fs(), t !== i) {
      if (rn[e]) return;
      xn(i, xn(ra(t, r), a)), $i(i.prototype, $i(r, ra(t, a))), rn[i.prop = e] = i, t.targetTest && (Zr.push(i), Ol[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
    }
    hu(e, i), t.register && t.register(tn, i, Je);
  } else wu.push(t);
}, oe = 255, $s = { aqua: [0, oe, oe], lime: [0, oe, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, oe], navy: [0, 0, 128], white: [oe, oe, oe], olive: [128, 128, 0], yellow: [oe, oe, 0], orange: [oe, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [oe, 0, 0], pink: [oe, 192, 203], cyan: [0, oe, oe], transparent: [oe, oe, oe, 0] }, no = function(t, e, n) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : t * 3 < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * oe + 0.5 | 0;
}, Cu = function(t, e, n) {
  var i = t ? oi(t) ? [t >> 16, t >> 8 & oe, t & oe] : 0 : $s.black, r, a, o, l, c, h, f, u, m, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), $s[t]) i = $s[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (r = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + r + r + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & oe, i & oe, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & oe, t & oe];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(el), !e) l = +i[0] % 360 / 360, c = +i[1] / 100, h = +i[2] / 100, a = h <= 0.5 ? h * (c + 1) : h + c - h * c, r = h * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = no(l + 1 / 3, r, a), i[1] = no(l, r, a), i[2] = no(l - 1 / 3, r, a);
      else if (~t.indexOf("=")) return i = t.match(ru), n && i.length < 4 && (i[3] = 1), i;
    } else i = t.match(el) || $s.transparent;
    i = i.map(Number);
  }
  return e && !_ && (r = i[0] / oe, a = i[1] / oe, o = i[2] / oe, f = Math.max(r, a, o), u = Math.min(r, a, o), h = (f + u) / 2, f === u ? l = c = 0 : (m = f - u, c = h > 0.5 ? m / (2 - f - u) : m / (f + u), l = f === r ? (a - o) / m + (a < o ? 6 : 0) : f === a ? (o - r) / m + 2 : (r - a) / m + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, Pu = function(t) {
  var e = [], n = [], i = -1;
  return t.split(Ti).forEach(function(r) {
    var a = r.match(vs) || [];
    e.push.apply(e, a), n.push(i += a.length + 1);
  }), e.c = n, e;
}, ch = function(t, e, n) {
  var i = "", r = (t + i).match(Ti), a = e ? "hsla(" : "rgba(", o = 0, l, c, h, f;
  if (!r) return t;
  if (r = r.map(function(u) {
    return (u = Cu(u, e, 1)) && a + (e ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) + ")";
  }), n && (h = Pu(t), l = n.c, l.join(i) !== h.c.join(i))) for (c = t.replace(Ti, "1").split(vs), f = c.length - 1; o < f; o++) i += c[o] + (~l.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (h.length ? h : r.length ? r : n).shift());
  if (!c) for (c = t.split(Ti), f = c.length - 1; o < f; o++) i += c[o] + r[o];
  return i + c[f];
}, Ti = (function() {
  var s16 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in $s) s16 += "|" + t + "\\b";
  return new RegExp(s16 + ")", "gi");
})(), cx = /hsl[a]?\(/, Du = function(t) {
  var e = t.join(" "), n;
  if (Ti.lastIndex = 0, Ti.test(e)) return n = cx.test(e), t[1] = ch(t[1], n), t[0] = ch(t[0], n, Pu(t[1])), true;
}, cr, ln = (function() {
  var s16 = Date.now, t = 500, e = 33, n = s16(), i = n, r = 1e3 / 240, a = r, o = [], l, c, h, f, u, m, _ = function g(p) {
    var d = s16() - i, M = p === true, E, S, b, A;
    if ((d > t || d < 0) && (n += d - e), i += d, b = i - n, E = b - a, (E > 0 || M) && (A = ++f.frame, u = b - f.time * 1e3, f.time = b = b / 1e3, a += E + (E >= r ? 4 : r - E), S = 1), M || (l = c(g)), S) for (m = 0; m < o.length; m++) o[m](b, u, A, p);
  };
  return f = { time: 0, frame: 0, tick: function() {
    _(true);
  }, deltaRatio: function(p) {
    return u / (1e3 / (p || 60));
  }, wake: function() {
    lu && (!nl && Ul() && (Pn = nl = window, Nl = Pn.document || {}, un.gsap = tn, (Pn.gsapVersions || (Pn.gsapVersions = [])).push(tn.version), cu(ia || Pn.GreenSockGlobals || !Pn.gsap && Pn || {}), wu.forEach(Ru)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && f.sleep(), c = h || function(p) {
      return setTimeout(p, a - f.time * 1e3 + 1 | 0);
    }, cr = 1, _(2));
  }, sleep: function() {
    (h ? cancelAnimationFrame : clearTimeout)(l), cr = 0, c = or;
  }, lagSmoothing: function(p, d) {
    t = p || 1 / 0, e = Math.min(d || 33, t);
  }, fps: function(p) {
    r = 1e3 / (p || 240), a = f.time * 1e3 + r;
  }, add: function(p, d, M) {
    var E = d ? function(S, b, A, w) {
      p(S, b, A, w), f.remove(E);
    } : p;
    return f.remove(p), o[M ? "unshift" : "push"](E), Fs(), E;
  }, remove: function(p, d) {
    ~(d = o.indexOf(p)) && o.splice(d, 1) && m >= d && m--;
  }, _listeners: o }, f;
})(), Fs = function() {
  return !cr && ln.wake();
}, Wt = {}, hx = /^[\d.\-M][\d.\-,\s]/, ux = /["']/g, fx = function(t) {
  for (var e = {}, n = t.substr(1, t.length - 3).split(":"), i = n[0], r = 1, a = n.length, o, l, c; r < a; r++) l = n[r], o = r !== a - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, o), e[i] = isNaN(c) ? c.replace(ux, "").trim() : +c, i = l.substr(o + 1).trim();
  return e;
}, dx = function(t) {
  var e = t.indexOf("(") + 1, n = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
}, px = function(t) {
  var e = (t + "").split("("), n = Wt[e[0]];
  return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [fx(e[1])] : dx(t).split(",").map(pu)) : Wt._CE && hx.test(t) ? Wt._CE("", t) : n;
}, Lu = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Iu = function s8(t, e) {
  for (var n = t._first, i; n; ) n instanceof Xe ? s8(n, e) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== e && (n.timeline ? s8(n.timeline, e) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = e)), n = n._next;
}, Ki = function(t, e) {
  return t && (ge(t) ? t : Wt[t] || px(t)) || e;
}, ts = function(t, e, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - e(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var r = { easeIn: e, easeOut: n, easeInOut: i }, a;
  return $e(t, function(o) {
    Wt[o] = un[o] = r, Wt[a = o.toLowerCase()] = n;
    for (var l in r) Wt[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Wt[o + "." + l] = r[l];
  }), r;
}, Uu = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, io = function s9(t, e, n) {
  var i = e >= 1 ? e : 1, r = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = r / tl * (Math.asin(1 / i) || 0), o = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * Gg((h - a) * r) + 1;
  }, l = t === "out" ? o : t === "in" ? function(c) {
    return 1 - o(1 - c);
  } : Uu(o);
  return r = tl / r, l.config = function(c, h) {
    return s9(t, c, h);
  }, l;
}, so = function s10(t, e) {
  e === void 0 && (e = 1.70158);
  var n = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, i = t === "out" ? n : t === "in" ? function(r) {
    return 1 - n(1 - r);
  } : Uu(n);
  return i.config = function(r) {
    return s10(t, r);
  }, i;
};
$e("Linear,Quad,Cubic,Quart,Quint,Strong", function(s16, t) {
  var e = t < 5 ? t + 1 : t;
  ts(s16 + ",Power" + (e - 1), t ? function(n) {
    return Math.pow(n, e);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, e);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, e) / 2 : 1 - Math.pow((1 - n) * 2, e) / 2;
  });
});
Wt.Linear.easeNone = Wt.none = Wt.Linear.easeIn;
ts("Elastic", io("in"), io("out"), io());
(function(s16, t) {
  var e = 1 / t, n = 2 * e, i = 2.5 * e, r = function(o) {
    return o < e ? s16 * o * o : o < n ? s16 * Math.pow(o - 1.5 / t, 2) + 0.75 : o < i ? s16 * (o -= 2.25 / t) * o + 0.9375 : s16 * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  ts("Bounce", function(a) {
    return 1 - r(1 - a);
  }, r);
})(7.5625, 2.75);
ts("Expo", function(s16) {
  return s16 ? Math.pow(2, 10 * (s16 - 1)) : 0;
});
ts("Circ", function(s16) {
  return -(iu(1 - s16 * s16) - 1);
});
ts("Sine", function(s16) {
  return s16 === 1 ? 1 : -Vg(s16 * kg) + 1;
});
ts("Back", so("in"), so("out"), so());
Wt.SteppedEase = Wt.steps = un.SteppedEase = { config: function(t, e) {
  t === void 0 && (t = 1);
  var n = 1 / t, i = t + (e ? 0 : 1), r = e ? 1 : 0, a = 1 - he;
  return function(o) {
    return ((i * mr(0, a, o) | 0) + r) * n;
  };
} };
Is.ease = Wt["quad.out"];
$e("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s16) {
  return Bl += s16 + "," + s16 + "Params,";
});
var Nu = function(t, e) {
  this.id = zg++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : fu, this.set = e ? e.getSetter : Hl;
}, hr = (function() {
  function s16(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ns(this, +e.duration, 1, 1), this.data = e.data, fe && (this._ctx = fe, fe.data.push(this)), cr || ln.wake();
  }
  var t = s16.prototype;
  return t.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, t.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Ns(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(n, i) {
    if (Fs(), !arguments.length) return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (_a(this, n), !r._dp || r.parent || gu(r, this); r && r.parent; ) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, true), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && In(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === he || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), du(this, n, i)), this;
  }, t.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + ah(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + ah(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(n, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * r, i) : this._repeat ? Us(this._tTime, r) + 1 : 1;
  }, t.timeScale = function(n, i) {
    if (!arguments.length) return this._rts === -he ? 0 : this._rts;
    if (this._rts === n) return this;
    var r = this.parent && this._ts ? aa(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -he ? 0 : this._rts, this.totalTime(mr(-Math.abs(this._delay), this._tDur, r), i !== false), ma(this), jg(this);
  }, t.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Fs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== he && (this._tTime -= he)))), this) : this._ps;
  }, t.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && In(i, this, n - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(n) {
    return this._start + (Ze(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? aa(i.rawTime(n), this) : this._tTime : this._tTime;
  }, t.revert = function(n) {
    n === void 0 && (n = Xg);
    var i = Ge;
    return Ge = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), Ge = i, this;
  }, t.globalTime = function(n) {
    for (var i = this, r = arguments.length ? n : i.rawTime(); i; ) r = i._start + r / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : r;
  }, t.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, oh(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, oh(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, t.seek = function(n, i) {
    return this.totalTime(dn(this, n), Ze(i));
  }, t.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, Ze(i));
  }, t.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(false).paused(false);
  }, t.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(true).paused(false);
  }, t.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(true);
  }, t.resume = function() {
    return this.paused(false);
  }, t.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -he : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -he, this;
  }, t.isActive = function() {
    var n = this.parent || this._dp, i = this._start, r;
    return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(true)) >= i && r < this.endTime(true) - he);
  }, t.eventCallback = function(n, i, r) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[n] = i, r && (a[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = i)) : delete a[n], this) : a[n];
  }, t.then = function(n) {
    var i = this;
    return new Promise(function(r) {
      var a = ge(n) ? n : mu, o = function() {
        var c = i.then;
        i.then = null, ge(a) && (a = a(i)) && (a.then || a === i) && (i.then = c), r(a), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, t.kill = function() {
    Zs(this);
  }, s16;
})();
xn(hr.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -he, _prom: 0, _ps: false, _rts: 1 });
var Xe = (function(s16) {
  nu(t, s16);
  function t(n, i) {
    var r;
    return n === void 0 && (n = {}), r = s16.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = Ze(n.sortChildren), de && In(n.parent || de, Qn(r), i), n.reversed && r.reverse(), n.paused && r.paused(true), n.scrollTrigger && xu(Qn(r), n.scrollTrigger), r;
  }
  var e = t.prototype;
  return e.to = function(i, r, a) {
    return Qs(0, arguments, this), this;
  }, e.from = function(i, r, a) {
    return Qs(1, arguments, this), this;
  }, e.fromTo = function(i, r, a, o) {
    return Qs(2, arguments, this), this;
  }, e.set = function(i, r, a) {
    return r.duration = 0, r.parent = this, Js(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new Te(i, r, dn(this, a), 1), this;
  }, e.call = function(i, r, a) {
    return In(this, Te.delayedCall(0, i, r), a);
  }, e.staggerTo = function(i, r, a, o, l, c, h) {
    return a.duration = r, a.stagger = a.stagger || o, a.onComplete = c, a.onCompleteParams = h, a.parent = this, new Te(i, a, dn(this, l)), this;
  }, e.staggerFrom = function(i, r, a, o, l, c, h) {
    return a.runBackwards = 1, Js(a).immediateRender = Ze(a.immediateRender), this.staggerTo(i, r, a, o, l, c, h);
  }, e.staggerFromTo = function(i, r, a, o, l, c, h, f) {
    return o.startAt = a, Js(o).immediateRender = Ze(o.immediateRender), this.staggerTo(i, r, o, l, c, h, f);
  }, e.render = function(i, r, a) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = i <= 0 ? 0 : De(i), f = this._zTime < 0 != i < 0 && (this._initted || !c), u, m, _, g, p, d, M, E, S, b, A, w;
    if (this !== de && h > l && i >= 0 && (h = l), h !== this._tTime || a || f) {
      if (o !== this._time && c && (h += this._time - o, i += this._time - o), u = h, S = this._start, E = this._ts, d = !E, f && (c || (o = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (A = this._yoyo, p = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(p * 100 + i, r, a);
        if (u = De(h % p), h === l ? (g = this._repeat, u = c) : (g = ~~(h / p), g && g === h / p && (u = c, g--), u > c && (u = c)), b = Us(this._tTime, p), !o && this._tTime && b !== g && this._tTime - b * p - this._dur <= 0 && (b = g), A && g & 1 && (u = c - u, w = 1), g !== b && !this._lock) {
          var x = A && b & 1, y = x === (A && g & 1);
          if (g < b && (x = !x), o = x ? 0 : h % c ? c : h, this._lock = 1, this.render(o || (w ? 0 : De(g * p)), r, !c)._lock = 0, this._tTime = h, !r && this.parent && cn(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), o && o !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (c = this._dur, l = this._tDur, y && (this._lock = 2, o = x ? c : -1e-4, this.render(o, true), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
          Iu(this, w);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (M = Qg(this, De(o), De(u)), M && (h -= u - (u = M._start))), this._tTime = h, this._time = u, this._act = !E, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && u && !r && !g && (cn(this, "onStart"), this._tTime !== h)) return this;
      if (u >= o && i >= 0) for (m = this._first; m; ) {
        if (_ = m._next, (m._act || u >= m._start) && m._ts && M !== m) {
          if (m.parent !== this) return this.render(i, r, a);
          if (m.render(m._ts > 0 ? (u - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (u - m._start) * m._ts, r, a), u !== this._time || !this._ts && !d) {
            M = 0, _ && (h += this._zTime = -he);
            break;
          }
        }
        m = _;
      }
      else {
        m = this._last;
        for (var z = i < 0 ? i : u; m; ) {
          if (_ = m._prev, (m._act || z <= m._end) && m._ts && M !== m) {
            if (m.parent !== this) return this.render(i, r, a);
            if (m.render(m._ts > 0 ? (z - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (z - m._start) * m._ts, r, a || Ge && (m._initted || m._startAt)), u !== this._time || !this._ts && !d) {
              M = 0, _ && (h += this._zTime = z ? -he : he);
              break;
            }
          }
          m = _;
        }
      }
      if (M && !r && (this.pause(), M.render(u >= o ? 0 : -he)._zTime = u >= o ? 1 : -1, this._ts)) return this._start = S, ma(this), this.render(i, r, a);
      this._onUpdate && !r && cn(this, "onUpdate", true), (h === l && this._tTime >= this.totalDuration() || !h && o) && (S === this._start || Math.abs(E) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && wi(this, 1), !r && !(i < 0 && !o) && (h || o || !l) && (cn(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, r) {
    var a = this;
    if (oi(r) || (r = dn(this, r, i)), !(i instanceof hr)) {
      if (He(i)) return i.forEach(function(o) {
        return a.add(o, r);
      }), this;
      if (Ie(i)) return this.addLabel(i, r);
      if (ge(i)) i = Te.delayedCall(0, i);
      else return this;
    }
    return this !== i ? In(this, i, r) : this;
  }, e.getChildren = function(i, r, a, o) {
    i === void 0 && (i = true), r === void 0 && (r = true), a === void 0 && (a = true), o === void 0 && (o = -mn);
    for (var l = [], c = this._first; c; ) c._start >= o && (c instanceof Te ? r && l.push(c) : (a && l.push(c), i && l.push.apply(l, c.getChildren(true, r, a)))), c = c._next;
    return l;
  }, e.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), a = r.length; a--; ) if (r[a].vars.id === i) return r[a];
  }, e.remove = function(i) {
    return Ie(i) ? this.removeLabel(i) : ge(i) ? this.killTweensOf(i) : (pa(this, i), i === this._recent && (this._recent = this._last), qi(this));
  }, e.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = De(ln.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s16.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, r) {
    return this.labels[i] = dn(this, r), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, r, a) {
    var o = Te.delayedCall(0, r || or, a);
    return o.data = "isPause", this._hasPause = 1, In(this, o, dn(this, i));
  }, e.removePause = function(i) {
    var r = this._first;
    for (i = dn(this, i); r; ) r._start === i && r.data === "isPause" && wi(r), r = r._next;
  }, e.killTweensOf = function(i, r, a) {
    for (var o = this.getTweensOf(i, a), l = o.length; l--; ) Mi !== o[l] && o[l].kill(i, r);
    return this;
  }, e.getTweensOf = function(i, r) {
    for (var a = [], o = _n(i), l = this._first, c = oi(r), h; l; ) l instanceof Te ? Yg(l._targets, o) && (c ? (!Mi || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && a.push(l) : (h = l.getTweensOf(o, r)).length && a.push.apply(a, h), l = l._next;
    return a;
  }, e.tweenTo = function(i, r) {
    r = r || {};
    var a = this, o = dn(a, i), l = r, c = l.startAt, h = l.onStart, f = l.onStartParams, u = l.immediateRender, m, _ = Te.to(a, xn({ ease: r.ease || "none", lazy: false, immediateRender: false, time: o, overwrite: "auto", duration: r.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()) || he, onStart: function() {
      if (a.pause(), !m) {
        var p = r.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale());
        _._dur !== p && Ns(_, p, 0, 1).render(_._time, true, true), m = 1;
      }
      h && h.apply(_, f || []);
    } }, r));
    return u ? _.render(0) : _;
  }, e.tweenFromTo = function(i, r, a) {
    return this.tweenTo(r, xn({ startAt: { time: dn(this, i) } }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), lh(this, dn(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), lh(this, dn(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, true) : this.previousLabel(this._time + he);
  }, e.shiftChildren = function(i, r, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, l = this.labels, c; o; ) o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (r) for (c in l) l[c] >= a && (l[c] += i);
    return qi(this);
  }, e.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; ) r.invalidate(i), r = r._next;
    return s16.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = true);
    for (var r = this._first, a; r; ) a = r._next, this.remove(r), r = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), qi(this);
  }, e.totalDuration = function(i) {
    var r = 0, a = this, o = a._last, l = mn, c, h, f;
    if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (f = a.parent; o; ) c = o._prev, o._dirty && o.totalDuration(), h = o._start, h > l && a._sort && o._ts && !a._lock ? (a._lock = 1, In(a, o, h - o._delay, 1)._lock = 0) : l = h, h < 0 && o._ts && (r -= h, (!f && !a._dp || f && f.smoothChildTiming) && (a._start += h / a._ts, a._time -= h, a._tTime -= h), a.shiftChildren(-h, false, -1 / 0), l = 0), o._end > r && o._ts && (r = o._end), o = c;
      Ns(a, a === de && a._time > r ? a._time : r, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(i) {
    if (de._ts && (du(de, aa(i, de)), uu = ln.frame), ln.frame >= sh) {
      sh += hn.autoSleep || 120;
      var r = de._first;
      if ((!r || !r._ts) && hn.autoSleep && ln._listeners.length < 2) {
        for (; r && !r._ts; ) r = r._next;
        r || ln.sleep();
      }
    }
  }, t;
})(hr);
xn(Xe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var mx = function(t, e, n, i, r, a, o) {
  var l = new Je(this._pt, t, e, 0, 1, Vu, null, r), c = 0, h = 0, f, u, m, _, g, p, d, M;
  for (l.b = n, l.e = i, n += "", i += "", (d = ~i.indexOf("random(")) && (i = lr(i)), a && (M = [n, i], a(M, t, e), n = M[0], i = M[1]), u = n.match(to) || []; f = to.exec(i); ) _ = f[0], g = i.substring(c, f.index), m ? m = (m + 1) % 5 : g.substr(-5) === "rgba(" && (m = 1), _ !== u[h++] && (p = parseFloat(u[h - 1]) || 0, l._pt = { _next: l._pt, p: g || h === 1 ? g : ",", s: p, c: _.charAt(1) === "=" ? bs(p, _) - p : parseFloat(_) - p, m: m && m < 4 ? Math.round : 0 }, c = to.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = o, (au.test(i) || d) && (l.e = 0), this._pt = l, l;
}, zl = function(t, e, n, i, r, a, o, l, c, h) {
  ge(i) && (i = i(r || 0, t, a));
  var f = t[e], u = n !== "get" ? n : ge(f) ? c ? t[e.indexOf("set") || !ge(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : f, m = ge(f) ? c ? Mx : ku : Gl, _;
  if (Ie(i) && (~i.indexOf("random(") && (i = lr(i)), i.charAt(1) === "=" && (_ = bs(u, i) + (ke(u) || 0), (_ || _ === 0) && (i = _))), !h || u !== i || cl) return !isNaN(u * i) && i !== "" ? (_ = new Je(this._pt, t, e, +u || 0, i - (u || 0), typeof f == "boolean" ? yx : zu, 0, m), c && (_.fp = c), o && _.modifier(o, this, t), this._pt = _) : (!f && !(e in t) && Fl(e, i), mx.call(this, t, e, u, i, m, l || hn.stringFilter, c));
}, _x = function(t, e, n, i, r) {
  if (ge(t) && (t = tr(t, r, e, n, i)), !Xn(t) || t.style && t.nodeType || He(t) || su(t)) return Ie(t) ? tr(t, r, e, n, i) : t;
  var a = {}, o;
  for (o in t) a[o] = tr(t[o], r, e, n, i);
  return a;
}, Fu = function(t, e, n, i, r, a) {
  var o, l, c, h;
  if (rn[t] && (o = new rn[t]()).init(r, o.rawVars ? e[t] : _x(e[t], i, r, a, n), n, i, a) !== false && (n._pt = l = new Je(n._pt, r, t, 0, 1, o.render, o, 0, o.priority), n !== Ms)) for (c = n._ptLookup[n._targets.indexOf(r)], h = o._props.length; h--; ) c[o._props[h]] = l;
  return o;
}, Mi, cl, Vl = function s11(t, e, n) {
  var i = t.vars, r = i.ease, a = i.startAt, o = i.immediateRender, l = i.lazy, c = i.onUpdate, h = i.runBackwards, f = i.yoyoEase, u = i.keyframes, m = i.autoRevert, _ = t._dur, g = t._startAt, p = t._targets, d = t.parent, M = d && d.data === "nested" ? d.vars.targets : p, E = t._overwrite === "auto" && !Ll, S = t.timeline, b, A, w, x, y, z, C, L, U, V, O, B, N;
  if (S && (!u || !r) && (r = "none"), t._ease = Ki(r, Is.ease), t._yEase = f ? Lu(Ki(f === true ? r : f, Is.ease)) : 0, f && t._yoyo && !t._repeat && (f = t._yEase, t._yEase = t._ease, t._ease = f), t._from = !S && !!i.runBackwards, !S || u && !i.stagger) {
    if (L = p[0] ? Yi(p[0]).harness : 0, B = L && i[L.prop], b = ra(i, Ol), g && (g._zTime < 0 && g.progress(1), e < 0 && h && o && !m ? g.render(-1, true) : g.revert(h && _ ? jr : Wg), g._lazy = 0), a) {
      if (wi(t._startAt = Te.set(p, xn({ data: "isStart", overwrite: false, parent: d, immediateRender: true, lazy: !g && Ze(l), startAt: null, delay: 0, onUpdate: c && function() {
        return cn(t, "onUpdate");
      }, stagger: 0 }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Ge || !o && !m) && t._startAt.revert(jr), o && _ && e <= 0 && n <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (h && _ && !g) {
      if (e && (o = false), w = xn({ overwrite: false, data: "isFromStart", lazy: o && !g && Ze(l), immediateRender: o, stagger: 0, parent: d }, b), B && (w[L.prop] = B), wi(t._startAt = Te.set(p, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Ge ? t._startAt.revert(jr) : t._startAt.render(-1, true)), t._zTime = e, !o) s11(t._startAt, he, he);
      else if (!e) return;
    }
    for (t._pt = t._ptCache = 0, l = _ && Ze(l) || l && !_, A = 0; A < p.length; A++) {
      if (y = p[A], C = y._gsap || kl(p)[A]._gsap, t._ptLookup[A] = V = {}, il[C.id] && Ei.length && sa(), O = M === p ? A : M.indexOf(y), L && (U = new L()).init(y, B || b, t, O, M) !== false && (t._pt = x = new Je(t._pt, y, U.name, 0, 1, U.render, U, 0, U.priority), U._props.forEach(function(Z) {
        V[Z] = x;
      }), U.priority && (z = 1)), !L || B) for (w in b) rn[w] && (U = Fu(w, b, t, O, y, M)) ? U.priority && (z = 1) : V[w] = x = zl.call(t, y, w, "get", b[w], O, M, 0, i.stringFilter);
      t._op && t._op[A] && t.kill(y, t._op[A]), E && t._pt && (Mi = t, de.killTweensOf(y, V, t.globalTime(e)), N = !t.parent, Mi = 0), t._pt && l && (il[C.id] = 1);
    }
    z && Gu(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = c, t._initted = (!t._op || t._pt) && !N, u && e <= 0 && S.render(mn, true, true);
}, gx = function(t, e, n, i, r, a, o, l) {
  var c = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, f, u, m;
  if (!c) for (c = t._ptCache[e] = [], u = t._ptLookup, m = t._targets.length; m--; ) {
    if (h = u[m][e], h && h.d && h.d._pt) for (h = h.d._pt; h && h.p !== e && h.fp !== e; ) h = h._next;
    if (!h) return cl = 1, t.vars[e] = "+=0", Vl(t, o), cl = 0, l ? ar(e + " not eligible for reset") : 1;
    c.push(h);
  }
  for (m = c.length; m--; ) f = c[m], h = f._pt || f, h.s = (i || i === 0) && !r ? i : h.s + (i || 0) + a * h.c, h.c = n - h.s, f.e && (f.e = Se(n) + ke(f.e)), f.b && (f.b = h.s + ke(f.b));
}, xx = function(t, e) {
  var n = t[0] ? Yi(t[0]).harness : 0, i = n && n.aliases, r, a, o, l;
  if (!i) return e;
  r = $i({}, e);
  for (a in i) if (a in r) for (l = i[a].split(","), o = l.length; o--; ) r[l[o]] = r[a];
  return r;
}, vx = function(t, e, n, i) {
  var r = e.ease || i || "power1.inOut", a, o;
  if (He(e)) o = n[t] || (n[t] = []), e.forEach(function(l, c) {
    return o.push({ t: c / (e.length - 1) * 100, v: l, e: r });
  });
  else for (a in e) o = n[a] || (n[a] = []), a === "ease" || o.push({ t: parseFloat(t), v: e[a], e: r });
}, tr = function(t, e, n, i, r) {
  return ge(t) ? t.call(e, n, i, r) : Ie(t) && ~t.indexOf("random(") ? lr(t) : t;
}, Ou = Bl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Bu = {};
$e(Ou + ",id,stagger,delay,duration,paused,scrollTrigger", function(s16) {
  return Bu[s16] = 1;
});
var Te = (function(s16) {
  nu(t, s16);
  function t(n, i, r, a) {
    var o;
    typeof i == "number" && (r.duration = i, i = r, r = null), o = s16.call(this, a ? i : Js(i)) || this;
    var l = o.vars, c = l.duration, h = l.delay, f = l.immediateRender, u = l.stagger, m = l.overwrite, _ = l.keyframes, g = l.defaults, p = l.scrollTrigger, d = l.yoyoEase, M = i.parent || de, E = (He(n) || su(n) ? oi(n[0]) : "length" in i) ? [n] : _n(n), S, b, A, w, x, y, z, C;
    if (o._targets = E.length ? kl(E) : ar("GSAP target " + n + " not found. https://gsap.com", !hn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = m, _ || u || Vr(c) || Vr(h)) {
      if (i = o.vars, S = o.timeline = new Xe({ data: "nested", defaults: g || {}, targets: M && M.data === "nested" ? M.vars.targets : E }), S.kill(), S.parent = S._dp = Qn(o), S._start = 0, u || Vr(c) || Vr(h)) {
        if (w = E.length, z = u && yu(u), Xn(u)) for (x in u) ~Ou.indexOf(x) && (C || (C = {}), C[x] = u[x]);
        for (b = 0; b < w; b++) A = ra(i, Bu), A.stagger = 0, d && (A.yoyoEase = d), C && $i(A, C), y = E[b], A.duration = +tr(c, Qn(o), b, y, E), A.delay = (+tr(h, Qn(o), b, y, E) || 0) - o._delay, !u && w === 1 && A.delay && (o._delay = h = A.delay, o._start += h, A.delay = 0), S.to(y, A, z ? z(b, y, E) : 0), S._ease = Wt.none;
        S.duration() ? c = h = 0 : o.timeline = 0;
      } else if (_) {
        Js(xn(S.vars.defaults, { ease: "none" })), S._ease = Ki(_.ease || i.ease || "none");
        var L = 0, U, V, O;
        if (He(_)) _.forEach(function(B) {
          return S.to(E, B, ">");
        }), S.duration();
        else {
          A = {};
          for (x in _) x === "ease" || x === "easeEach" || vx(x, _[x], A, _.easeEach);
          for (x in A) for (U = A[x].sort(function(B, N) {
            return B.t - N.t;
          }), L = 0, b = 0; b < U.length; b++) V = U[b], O = { ease: V.e, duration: (V.t - (b ? U[b - 1].t : 0)) / 100 * c }, O[x] = V.v, S.to(E, O, L), L += O.duration;
          S.duration() < c && S.to({}, { duration: c - S.duration() });
        }
      }
      c || o.duration(c = S.duration());
    } else o.timeline = 0;
    return m === true && !Ll && (Mi = Qn(o), de.killTweensOf(E), Mi = 0), In(M, Qn(o), r), i.reversed && o.reverse(), i.paused && o.paused(true), (f || !c && !_ && o._start === De(M._time) && Ze(f) && Zg(Qn(o)) && M.data !== "nested") && (o._tTime = -he, o.render(Math.max(0, -h) || 0)), p && xu(Qn(o), p), o;
  }
  var e = t.prototype;
  return e.render = function(i, r, a) {
    var o = this._time, l = this._tDur, c = this._dur, h = i < 0, f = i > l - he && !h ? l : i < he ? 0 : i, u, m, _, g, p, d, M, E, S;
    if (!c) Jg(this, i, r, a);
    else if (f !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (u = f, E = this.timeline, this._repeat) {
        if (g = c + this._rDelay, this._repeat < -1 && h) return this.totalTime(g * 100 + i, r, a);
        if (u = De(f % g), f === l ? (_ = this._repeat, u = c) : (_ = ~~(f / g), _ && _ === De(f / g) && (u = c, _--), u > c && (u = c)), d = this._yoyo && _ & 1, d && (S = this._yEase, u = c - u), p = Us(this._tTime, g), u === o && !a && this._initted && _ === p) return this._tTime = f, this;
        _ !== p && (E && this._yEase && Iu(E, d), this.vars.repeatRefresh && !d && !this._lock && this._time !== g && this._initted && (this._lock = a = 1, this.render(De(g * _), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (vu(this, h ? i : u, a, r, f)) return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && _ !== p)) return this;
        if (c !== this._dur) return this.render(i, r, a);
      }
      if (this._tTime = f, this._time = u, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = M = (S || this._ease)(u / c), this._from && (this.ratio = M = 1 - M), u && !o && !r && !_ && (cn(this, "onStart"), this._tTime !== f)) return this;
      for (m = this._pt; m; ) m.r(M, m.d), m = m._next;
      E && E.render(i < 0 ? i : E._dur * E._ease(u / this._dur), r, a) || this._startAt && (this._zTime = i), this._onUpdate && !r && (h && sl(this, i, r, a), cn(this, "onUpdate")), this._repeat && _ !== p && this.vars.onRepeat && !r && this.parent && cn(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (h && !this._onUpdate && sl(this, i, true, true), (i || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && wi(this, 1), !r && !(h && !o) && (f || o || d) && (cn(this, f === l ? "onComplete" : "onReverseComplete", true), this._prom && !(f < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s16.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, r, a, o, l) {
    cr || ln.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || Vl(this, c), h = this._ease(c / this._dur), gx(this, i, r, a, o, h, c, l) ? this.resetTo(i, r, a, o, 1) : (_a(this, 0), this.parent || _u(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all")) return this._lazy = this._pt = 0, this.parent ? Zs(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, Mi && Mi.vars.overwrite !== true)._first || Zs(this), this.parent && a !== this.timeline.totalDuration() && Ns(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, l = i ? _n(i) : o, c = this._ptLookup, h = this._pt, f, u, m, _, g, p, d;
    if ((!r || r === "all") && Kg(o, l)) return r === "all" && (this._pt = 0), Zs(this);
    for (f = this._op = this._op || [], r !== "all" && (Ie(r) && (g = {}, $e(r, function(M) {
      return g[M] = 1;
    }), r = g), r = xx(o, r)), d = o.length; d--; ) if (~l.indexOf(o[d])) {
      u = c[d], r === "all" ? (f[d] = r, _ = u, m = {}) : (m = f[d] = f[d] || {}, _ = r);
      for (g in _) p = u && u[g], p && ((!("kill" in p.d) || p.d.kill(g) === true) && pa(this, p, "_pt"), delete u[g]), m !== "all" && (m[g] = 1);
    }
    return this._initted && !this._pt && h && Zs(this), this;
  }, t.to = function(i, r) {
    return new t(i, r, arguments[2]);
  }, t.from = function(i, r) {
    return Qs(1, arguments);
  }, t.delayedCall = function(i, r, a, o) {
    return new t(r, 0, { immediateRender: false, lazy: false, overwrite: false, delay: i, onComplete: r, onReverseComplete: r, onCompleteParams: a, onReverseCompleteParams: a, callbackScope: o });
  }, t.fromTo = function(i, r, a) {
    return Qs(2, arguments);
  }, t.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(i, r);
  }, t.killTweensOf = function(i, r, a) {
    return de.killTweensOf(i, r, a);
  }, t;
})(hr);
xn(Te.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
$e("staggerTo,staggerFrom,staggerFromTo", function(s16) {
  Te[s16] = function() {
    var t = new Xe(), e = al.call(arguments, 0);
    return e.splice(s16 === "staggerFromTo" ? 5 : 4, 0, 0), t[s16].apply(t, e);
  };
});
var Gl = function(t, e, n) {
  return t[e] = n;
}, ku = function(t, e, n) {
  return t[e](n);
}, Mx = function(t, e, n, i) {
  return t[e](i.fp, n);
}, Sx = function(t, e, n) {
  return t.setAttribute(e, n);
}, Hl = function(t, e) {
  return ge(t[e]) ? ku : Il(t[e]) && t.setAttribute ? Sx : Gl;
}, zu = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, yx = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Vu = function(t, e) {
  var n = e._pt, i = "";
  if (!t && e.b) i = e.b;
  else if (t === 1 && e.e) i = e.e;
  else {
    for (; n; ) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + i, n = n._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, Wl = function(t, e) {
  for (var n = e._pt; n; ) n.r(t, n.d), n = n._next;
}, Ex = function(t, e, n, i) {
  for (var r = this._pt, a; r; ) a = r._next, r.p === i && r.modifier(t, e, n), r = a;
}, Tx = function(t) {
  for (var e = this._pt, n, i; e; ) i = e._next, e.p === t && !e.op || e.op === t ? pa(this, e, "_pt") : e.dep || (n = 1), e = i;
  return !n;
}, bx = function(t, e, n, i) {
  i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
}, Gu = function(t) {
  for (var e = t._pt, n, i, r, a; e; ) {
    for (n = e._next, i = r; i && i.pr > e.pr; ) i = i._next;
    (e._prev = i ? i._prev : a) ? e._prev._next = e : r = e, (e._next = i) ? i._prev = e : a = e, e = n;
  }
  t._pt = r;
}, Je = (function() {
  function s16(e, n, i, r, a, o, l, c, h) {
    this.t = n, this.s = r, this.c = a, this.p = i, this.r = o || zu, this.d = l || this, this.set = c || Gl, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = s16.prototype;
  return t.modifier = function(n, i, r) {
    this.mSet = this.mSet || this.set, this.set = bx, this.m = n, this.mt = r, this.tween = i;
  }, s16;
})();
$e(Bl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s16) {
  return Ol[s16] = 1;
});
un.TweenMax = un.TweenLite = Te;
un.TimelineLite = un.TimelineMax = Xe;
de = new Xe({ sortChildren: false, defaults: Is, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
hn.stringFilter = Du;
var ji = [], $r = {}, Ax = [], hh = 0, wx = 0, ro = function(t) {
  return ($r[t] || Ax).map(function(e) {
    return e();
  });
}, hl = function() {
  var t = Date.now(), e = [];
  t - hh > 2 && (ro("matchMediaInit"), ji.forEach(function(n) {
    var i = n.queries, r = n.conditions, a, o, l, c;
    for (o in i) a = Pn.matchMedia(i[o]).matches, a && (l = 1), a !== r[o] && (r[o] = a, c = 1);
    c && (n.revert(), l && e.push(n));
  }), ro("matchMediaRevert"), e.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), hh = t, ro("matchMedia"));
}, Hu = (function() {
  function s16(e, n) {
    this.selector = n && ol(n), this.data = [], this._r = [], this.isReverted = false, this.id = wx++, e && this.add(e);
  }
  var t = s16.prototype;
  return t.add = function(n, i, r) {
    ge(n) && (r = i, i = n, n = ge);
    var a = this, o = function() {
      var c = fe, h = a.selector, f;
      return c && c !== a && c.data.push(a), r && (a.selector = ol(r)), fe = a, f = i.apply(a, arguments), ge(f) && a._r.push(f), fe = c, a.selector = h, a.isReverted = false, f;
    };
    return a.last = o, n === ge ? o(a, function(l) {
      return a.add(null, l);
    }) : n ? a[n] = o : o;
  }, t.ignore = function(n) {
    var i = fe;
    fe = null, n(this), fe = i;
  }, t.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof s16 ? n.push.apply(n, i.getTweens()) : i instanceof Te && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(n, i) {
    var r = this;
    if (n ? (function() {
      for (var o = r.getTweens(), l = r.data.length, c; l--; ) c = r.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(true, true, false).forEach(function(h) {
        return o.splice(o.indexOf(h), 1);
      }));
      for (o.map(function(h) {
        return { g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0, t: h };
      }).sort(function(h, f) {
        return f.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(n);
      }), l = r.data.length; l--; ) c = r.data[l], c instanceof Xe ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Te) && c.revert && c.revert(n);
      r._r.forEach(function(h) {
        return h(n, r);
      }), r.isReverted = true;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i) for (var a = ji.length; a--; ) ji[a].id === this.id && ji.splice(a, 1);
  }, t.revert = function(n) {
    this.kill(n || {});
  }, s16;
})(), Rx = (function() {
  function s16(e) {
    this.contexts = [], this.scope = e, fe && fe.data.push(this);
  }
  var t = s16.prototype;
  return t.add = function(n, i, r) {
    Xn(n) || (n = { matches: n });
    var a = new Hu(0, r || this.scope), o = a.conditions = {}, l, c, h;
    fe && !a.selector && (a.selector = fe.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = n;
    for (c in n) c === "all" ? h = 1 : (l = Pn.matchMedia(n[c]), l && (ji.indexOf(a) < 0 && ji.push(a), (o[c] = l.matches) && (h = 1), l.addListener ? l.addListener(hl) : l.addEventListener("change", hl)));
    return h && i(a, function(f) {
      return a.add(null, f);
    }), this;
  }, t.revert = function(n) {
    this.kill(n || {});
  }, t.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, true);
    });
  }, s16;
})(), oa = { registerPlugin: function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  e.forEach(function(i) {
    return Ru(i);
  });
}, timeline: function(t) {
  return new Xe(t);
}, getTweensOf: function(t, e) {
  return de.getTweensOf(t, e);
}, getProperty: function(t, e, n, i) {
  Ie(t) && (t = _n(t)[0]);
  var r = Yi(t || {}).get, a = n ? mu : pu;
  return n === "native" && (n = ""), t && (e ? a((rn[e] && rn[e].get || r)(t, e, n, i)) : function(o, l, c) {
    return a((rn[o] && rn[o].get || r)(t, o, l, c));
  });
}, quickSetter: function(t, e, n) {
  if (t = _n(t), t.length > 1) {
    var i = t.map(function(h) {
      return tn.quickSetter(h, e, n);
    }), r = i.length;
    return function(h) {
      for (var f = r; f--; ) i[f](h);
    };
  }
  t = t[0] || {};
  var a = rn[e], o = Yi(t), l = o.harness && (o.harness.aliases || {})[e] || e, c = a ? function(h) {
    var f = new a();
    Ms._pt = 0, f.init(t, n ? h + n : h, Ms, 0, [t]), f.render(1, f), Ms._pt && Wl(1, Ms);
  } : o.set(t, l);
  return a ? c : function(h) {
    return c(t, l, n ? h + n : h, o, 1);
  };
}, quickTo: function(t, e, n) {
  var i, r = tn.to(t, $i((i = {}, i[e] = "+=0.1", i.paused = true, i), n || {})), a = function(l, c, h) {
    return r.resetTo(e, l, c, h);
  };
  return a.tween = r, a;
}, isTweening: function(t) {
  return de.getTweensOf(t, true).length > 0;
}, defaults: function(t) {
  return t && t.ease && (t.ease = Ki(t.ease, Is.ease)), rh(Is, t || {});
}, config: function(t) {
  return rh(hn, t || {});
}, registerEffect: function(t) {
  var e = t.name, n = t.effect, i = t.plugins, r = t.defaults, a = t.extendTimeline;
  (i || "").split(",").forEach(function(o) {
    return o && !rn[o] && !un[o] && ar(e + " effect requires " + o + " plugin.");
  }), eo[e] = function(o, l, c) {
    return n(_n(o), xn(l || {}, r), c);
  }, a && (Xe.prototype[e] = function(o, l, c) {
    return this.add(eo[e](o, Xn(l) ? l : (c = l) && {}, this), c);
  });
}, registerEase: function(t, e) {
  Wt[t] = Ki(e);
}, parseEase: function(t, e) {
  return arguments.length ? Ki(t, e) : Wt;
}, getById: function(t) {
  return de.getById(t);
}, exportRoot: function(t, e) {
  t === void 0 && (t = {});
  var n = new Xe(t), i, r;
  for (n.smoothChildTiming = Ze(t.smoothChildTiming), de.remove(n), n._dp = 0, n._time = n._tTime = de._time, i = de._first; i; ) r = i._next, (e || !(!i._dur && i instanceof Te && i.vars.onComplete === i._targets[0])) && In(n, i, i._start - i._delay), i = r;
  return In(de, n, 0), n;
}, context: function(t, e) {
  return t ? new Hu(t, e) : fe;
}, matchMedia: function(t) {
  return new Rx(t);
}, matchMediaRefresh: function() {
  return ji.forEach(function(t) {
    var e = t.conditions, n, i;
    for (i in e) e[i] && (e[i] = false, n = 1);
    n && t.revert();
  }) || hl();
}, addEventListener: function(t, e) {
  var n = $r[t] || ($r[t] = []);
  ~n.indexOf(e) || n.push(e);
}, removeEventListener: function(t, e) {
  var n = $r[t], i = n && n.indexOf(e);
  i >= 0 && n.splice(i, 1);
}, utils: { wrap: ax, wrapYoyo: ox, distribute: yu, random: Tu, snap: Eu, normalize: rx, getUnit: ke, clamp: ex, splitColor: Cu, toArray: _n, selector: ol, mapRange: Au, pipe: ix, unitize: sx, interpolate: lx, shuffle: Su }, install: cu, effects: eo, ticker: ln, updateRoot: Xe.updateRoot, plugins: rn, globalTimeline: de, core: { PropTween: Je, globals: hu, Tween: Te, Timeline: Xe, Animation: hr, getCache: Yi, _removeLinkedListItem: pa, reverting: function() {
  return Ge;
}, context: function(t) {
  return t && fe && (fe.data.push(t), t._ctx = fe), fe;
}, suppressOverwrites: function(t) {
  return Ll = t;
} } };
$e("to,from,fromTo,delayedCall,set,killTweensOf", function(s16) {
  return oa[s16] = Te[s16];
});
ln.add(Xe.updateRoot);
Ms = oa.to({}, { duration: 0 });
var Cx = function(t, e) {
  for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
  return n;
}, Px = function(t, e) {
  var n = t._targets, i, r, a;
  for (i in e) for (r = n.length; r--; ) a = t._ptLookup[r][i], a && (a = a.d) && (a._pt && (a = Cx(a, i)), a && a.modifier && a.modifier(e[i], t, n[r], i));
}, ao = function(t, e) {
  return { name: t, rawVars: 1, init: function(i, r, a) {
    a._onInit = function(o) {
      var l, c;
      if (Ie(r) && (l = {}, $e(r, function(h) {
        return l[h] = 1;
      }), r = l), e) {
        l = {};
        for (c in r) l[c] = e(r[c]);
        r = l;
      }
      Px(o, r);
    };
  } };
}, tn = oa.registerPlugin({ name: "attr", init: function(t, e, n, i, r) {
  var a, o, l;
  this.tween = n;
  for (a in e) l = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (l || 0) + "", e[a], i, r, 0, 0, a), o.op = a, o.b = l, this._props.push(a);
}, render: function(t, e) {
  for (var n = e._pt; n; ) Ge ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next;
} }, { name: "endArray", init: function(t, e) {
  for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
} }, ao("roundProps", ll), ao("modifiers"), ao("snap", Eu)) || oa;
Te.version = Xe.version = tn.version = "3.12.5";
lu = 1;
Ul() && Fs();
Wt.Power0;
Wt.Power1;
Wt.Power2;
Wt.Power3;
Wt.Power4;
Wt.Linear;
Wt.Quad;
Wt.Cubic;
Wt.Quart;
Wt.Quint;
Wt.Strong;
Wt.Elastic;
Wt.Back;
Wt.SteppedEase;
Wt.Bounce;
Wt.Sine;
Wt.Expo;
Wt.Circ;
var uh, Si, As, Xl, Xi, fh, Yl, Dx = function() {
  return typeof window < "u";
}, li = {}, zi = 180 / Math.PI, ws = Math.PI / 180, gs = Math.atan2, dh = 1e8, ql = /([A-Z])/g, Lx = /(left|right|width|margin|padding|x)/i, Ix = /[\s,\(]\S/, Fn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, ul = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Ux = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Nx = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Fx = function(t, e) {
  var n = e.s + e.c * t;
  e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
}, Wu = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Xu = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Ox = function(t, e, n) {
  return t.style[e] = n;
}, Bx = function(t, e, n) {
  return t.style.setProperty(e, n);
}, kx = function(t, e, n) {
  return t._gsap[e] = n;
}, zx = function(t, e, n) {
  return t._gsap.scaleX = t._gsap.scaleY = n;
}, Vx = function(t, e, n, i, r) {
  var a = t._gsap;
  a.scaleX = a.scaleY = n, a.renderTransform(r, a);
}, Gx = function(t, e, n, i, r) {
  var a = t._gsap;
  a[e] = n, a.renderTransform(r, a);
}, pe = "transform", Qe = pe + "Origin", Hx = function s12(t, e) {
  var n = this, i = this.target, r = i.style, a = i._gsap;
  if (t in li && r) {
    if (this.tfm = this.tfm || {}, t !== "transform") t = Fn[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
      return n.tfm[o] = ti(i, o);
    }) : this.tfm[t] = a.x ? a[t] : ti(i, t), t === Qe && (this.tfm.zOrigin = a.zOrigin);
    else return Fn.transform.split(",").forEach(function(o) {
      return s12.call(n, o, e);
    });
    if (this.props.indexOf(pe) >= 0) return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Qe, e, "")), t = pe;
  }
  (r || e) && this.props.push(t, e, r[t]);
}, Yu = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Wx = function() {
  var t = this.props, e = this.target, n = e.style, i = e._gsap, r, a;
  for (r = 0; r < t.length; r += 3) t[r + 1] ? e[t[r]] = t[r + 2] : t[r + 2] ? n[t[r]] = t[r + 2] : n.removeProperty(t[r].substr(0, 2) === "--" ? t[r] : t[r].replace(ql, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm) i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), r = Yl(), (!r || !r.isStart) && !n[pe] && (Yu(n), i.zOrigin && n[Qe] && (n[Qe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, qu = function(t, e) {
  var n = { target: t, props: [], revert: Wx, save: Hx };
  return t._gsap || tn.core.getCache(t), e && e.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, Ku, fl = function(t, e) {
  var n = Si.createElementNS ? Si.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Si.createElement(t);
  return n && n.style ? n : Si.createElement(t);
}, zn = function s13(t, e, n) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(ql, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && s13(t, Os(e) || e, 1) || "";
}, ph = "O,Moz,ms,Ms,Webkit".split(","), Os = function(t, e, n) {
  var i = e || Xi, r = i.style, a = 5;
  if (t in r && !n) return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(ph[a] + t in r); ) ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ph[a] : "") + t;
}, dl = function() {
  Dx() && window.document && (uh = window, Si = uh.document, As = Si.documentElement, Xi = fl("div") || { style: {} }, fl("div"), pe = Os(pe), Qe = pe + "Origin", Xi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ku = !!Os("perspective"), Yl = tn.core.reverting, Xl = 1);
}, oo = function s14(t) {
  var e = fl("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, r = this.style.cssText, a;
  if (As.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
    a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = s14;
  } catch {
  }
  else this._gsapBBox && (a = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), As.removeChild(e), this.style.cssText = r, a;
}, mh = function(t, e) {
  for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
}, ju = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = oo.call(t, true);
  }
  return e && (e.width || e.height) || t.getBBox === oo || (e = oo.call(t, true)), e && !e.width && !e.x && !e.y ? { x: +mh(t, ["x", "cx", "x1"]) || 0, y: +mh(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e;
}, Zu = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ju(t));
}, Ji = function(t, e) {
  if (e) {
    var n = t.style, i;
    e in li && e !== Qe && (e = pe), n.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), n.removeProperty(i === "--" ? e : e.replace(ql, "-$1").toLowerCase())) : n.removeAttribute(e);
  }
}, yi = function(t, e, n, i, r, a) {
  var o = new Je(t._pt, e, n, 0, 1, a ? Xu : Wu);
  return t._pt = o, o.b = i, o.e = r, t._props.push(n), o;
}, _h = { deg: 1, rad: 1, turn: 1 }, Xx = { grid: 1, flex: 1 }, Ri = function s15(t, e, n, i) {
  var r = parseFloat(n) || 0, a = (n + "").trim().substr((r + "").length) || "px", o = Xi.style, l = Lx.test(e), c = t.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, u = i === "px", m = i === "%", _, g, p, d;
  if (i === a || !r || _h[i] || _h[a]) return r;
  if (a !== "px" && !u && (r = s15(t, e, n, "px")), d = t.getCTM && Zu(t), (m || a === "%") && (li[e] || ~e.indexOf("adius"))) return _ = d ? t.getBBox()[l ? "width" : "height"] : t[h], Se(m ? r / _ * f : r / 100 * _);
  if (o[l ? "width" : "height"] = f + (u ? a : i), g = ~e.indexOf("adius") || i === "em" && t.appendChild && !c ? t : t.parentNode, d && (g = (t.ownerSVGElement || {}).parentNode), (!g || g === Si || !g.appendChild) && (g = Si.body), p = g._gsap, p && m && p.width && l && p.time === ln.time && !p.uncache) return Se(r / p.width * f);
  if (m && (e === "height" || e === "width")) {
    var M = t.style[e];
    t.style[e] = f + i, _ = t[h], M ? t.style[e] = M : Ji(t, e);
  } else (m || a === "%") && !Xx[zn(g, "display")] && (o.position = zn(t, "position")), g === t && (o.position = "static"), g.appendChild(Xi), _ = Xi[h], g.removeChild(Xi), o.position = "absolute";
  return l && m && (p = Yi(g), p.time = ln.time, p.width = g[h]), Se(u ? _ * r / f : _ && r ? f / _ * r : 0);
}, ti = function(t, e, n, i) {
  var r;
  return Xl || dl(), e in Fn && e !== "transform" && (e = Fn[e], ~e.indexOf(",") && (e = e.split(",")[0])), li[e] && e !== "transform" ? (r = fr(t, i), r = e !== "transformOrigin" ? r[e] : r.svg ? r.origin : ca(zn(t, Qe)) + " " + r.zOrigin + "px") : (r = t.style[e], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = la[e] && la[e](t, e, n) || zn(t, e) || fu(t, e) || (e === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? Ri(t, e, r, n) + n : r;
}, Yx = function(t, e, n, i) {
  if (!n || n === "none") {
    var r = Os(e, t, 1), a = r && zn(t, r, 1);
    a && a !== n ? (e = r, n = a) : e === "borderColor" && (n = zn(t, "borderTopColor"));
  }
  var o = new Je(this._pt, t.style, e, 0, 1, Vu), l = 0, c = 0, h, f, u, m, _, g, p, d, M, E, S, b;
  if (o.b = n, o.e = i, n += "", i += "", i === "auto" && (g = t.style[e], t.style[e] = i, i = zn(t, e) || i, g ? t.style[e] = g : Ji(t, e)), h = [n, i], Du(h), n = h[0], i = h[1], u = n.match(vs) || [], b = i.match(vs) || [], b.length) {
    for (; f = vs.exec(i); ) p = f[0], M = i.substring(l, f.index), _ ? _ = (_ + 1) % 5 : (M.substr(-5) === "rgba(" || M.substr(-5) === "hsla(") && (_ = 1), p !== (g = u[c++] || "") && (m = parseFloat(g) || 0, S = g.substr((m + "").length), p.charAt(1) === "=" && (p = bs(m, p) + S), d = parseFloat(p), E = p.substr((d + "").length), l = vs.lastIndex - E.length, E || (E = E || hn.units[e] || S, l === i.length && (i += E, o.e += E)), S !== E && (m = Ri(t, e, g, E) || 0), o._pt = { _next: o._pt, p: M || c === 1 ? M : ",", s: m, c: d - m, m: _ && _ < 4 || e === "zIndex" ? Math.round : 0 });
    o.c = l < i.length ? i.substring(l, i.length) : "";
  } else o.r = e === "display" && i === "none" ? Xu : Wu;
  return au.test(i) && (o.e = 0), this._pt = o, o;
}, gh = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, qx = function(t) {
  var e = t.split(" "), n = e[0], i = e[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (t = n, n = i, i = t), e[0] = gh[n] || n, e[1] = gh[i] || i, e.join(" ");
}, Kx = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var n = e.t, i = n.style, r = e.u, a = n._gsap, o, l, c;
    if (r === "all" || r === true) i.cssText = "", l = 1;
    else for (r = r.split(","), c = r.length; --c > -1; ) o = r[c], li[o] && (l = 1, o = o === "transformOrigin" ? Qe : pe), Ji(n, o);
    l && (Ji(n, pe), a && (a.svg && n.removeAttribute("transform"), fr(n, 1), a.uncache = 1, Yu(i)));
  }
}, la = { clearProps: function(t, e, n, i, r) {
  if (r.data !== "isFromStart") {
    var a = t._pt = new Je(t._pt, e, n, 0, 0, Kx);
    return a.u = i, a.pr = -10, a.tween = r, t._props.push(n), 1;
  }
} }, ur = [1, 0, 0, 1, 0, 0], $u = {}, Ju = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, xh = function(t) {
  var e = zn(t, pe);
  return Ju(e) ? ur : e.substr(7).match(ru).map(Se);
}, Kl = function(t, e) {
  var n = t._gsap || Yi(t), i = t.style, r = xh(t), a, o, l, c;
  return n.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? ur : r) : (r === ur && !t.offsetParent && t !== As && !n.svg && (l = i.display, i.display = "block", a = t.parentNode, (!a || !t.offsetParent) && (c = 1, o = t.nextElementSibling, As.appendChild(t)), r = xh(t), l ? i.display = l : Ji(t, "display"), c && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : As.removeChild(t))), e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, pl = function(t, e, n, i, r, a) {
  var o = t._gsap, l = r || Kl(t, true), c = o.xOrigin || 0, h = o.yOrigin || 0, f = o.xOffset || 0, u = o.yOffset || 0, m = l[0], _ = l[1], g = l[2], p = l[3], d = l[4], M = l[5], E = e.split(" "), S = parseFloat(E[0]) || 0, b = parseFloat(E[1]) || 0, A, w, x, y;
  n ? l !== ur && (w = m * p - _ * g) && (x = S * (p / w) + b * (-g / w) + (g * M - p * d) / w, y = S * (-_ / w) + b * (m / w) - (m * M - _ * d) / w, S = x, b = y) : (A = ju(t), S = A.x + (~E[0].indexOf("%") ? S / 100 * A.width : S), b = A.y + (~(E[1] || E[0]).indexOf("%") ? b / 100 * A.height : b)), i || i !== false && o.smooth ? (d = S - c, M = b - h, o.xOffset = f + (d * m + M * g) - d, o.yOffset = u + (d * _ + M * p) - M) : o.xOffset = o.yOffset = 0, o.xOrigin = S, o.yOrigin = b, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!n, t.style[Qe] = "0px 0px", a && (yi(a, o, "xOrigin", c, S), yi(a, o, "yOrigin", h, b), yi(a, o, "xOffset", f, o.xOffset), yi(a, o, "yOffset", u, o.yOffset)), t.setAttribute("data-svg-origin", S + " " + b);
}, fr = function(t, e) {
  var n = t._gsap || new Nu(t);
  if ("x" in n && !e && !n.uncache) return n;
  var i = t.style, r = n.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(t), c = zn(t, Qe) || "0", h, f, u, m, _, g, p, d, M, E, S, b, A, w, x, y, z, C, L, U, V, O, B, N, Z, $, at, ut, ot, It, Xt, Yt;
  return h = f = u = g = p = d = M = E = S = 0, m = _ = 1, n.svg = !!(t.getCTM && Zu(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[pe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[pe] !== "none" ? l[pe] : "")), i.scale = i.rotate = i.translate = "none"), w = Kl(t, n.svg), n.svg && (n.uncache ? (Z = t.getBBox(), c = n.xOrigin - Z.x + "px " + (n.yOrigin - Z.y) + "px", N = "") : N = !e && t.getAttribute("data-svg-origin"), pl(t, N || c, !!N || n.originIsAbsolute, n.smooth !== false, w)), b = n.xOrigin || 0, A = n.yOrigin || 0, w !== ur && (C = w[0], L = w[1], U = w[2], V = w[3], h = O = w[4], f = B = w[5], w.length === 6 ? (m = Math.sqrt(C * C + L * L), _ = Math.sqrt(V * V + U * U), g = C || L ? gs(L, C) * zi : 0, M = U || V ? gs(U, V) * zi + g : 0, M && (_ *= Math.abs(Math.cos(M * ws))), n.svg && (h -= b - (b * C + A * U), f -= A - (b * L + A * V))) : (Yt = w[6], It = w[7], at = w[8], ut = w[9], ot = w[10], Xt = w[11], h = w[12], f = w[13], u = w[14], x = gs(Yt, ot), p = x * zi, x && (y = Math.cos(-x), z = Math.sin(-x), N = O * y + at * z, Z = B * y + ut * z, $ = Yt * y + ot * z, at = O * -z + at * y, ut = B * -z + ut * y, ot = Yt * -z + ot * y, Xt = It * -z + Xt * y, O = N, B = Z, Yt = $), x = gs(-U, ot), d = x * zi, x && (y = Math.cos(-x), z = Math.sin(-x), N = C * y - at * z, Z = L * y - ut * z, $ = U * y - ot * z, Xt = V * z + Xt * y, C = N, L = Z, U = $), x = gs(L, C), g = x * zi, x && (y = Math.cos(x), z = Math.sin(x), N = C * y + L * z, Z = O * y + B * z, L = L * y - C * z, B = B * y - O * z, C = N, O = Z), p && Math.abs(p) + Math.abs(g) > 359.9 && (p = g = 0, d = 180 - d), m = Se(Math.sqrt(C * C + L * L + U * U)), _ = Se(Math.sqrt(B * B + Yt * Yt)), x = gs(O, B), M = Math.abs(x) > 2e-4 ? x * zi : 0, S = Xt ? 1 / (Xt < 0 ? -Xt : Xt) : 0), n.svg && (N = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Ju(zn(t, pe)), N && t.setAttribute("transform", N))), Math.abs(M) > 90 && Math.abs(M) < 270 && (r ? (m *= -1, M += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (_ *= -1, M += M <= 0 ? 180 : -180)), e = e || n.uncache, n.x = h - ((n.xPercent = h && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + a, n.y = f - ((n.yPercent = f && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + a, n.z = u + a, n.scaleX = Se(m), n.scaleY = Se(_), n.rotation = Se(g) + o, n.rotationX = Se(p) + o, n.rotationY = Se(d) + o, n.skewX = M + o, n.skewY = E + o, n.transformPerspective = S + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !e && n.zOrigin || 0) && (i[Qe] = ca(c)), n.xOffset = n.yOffset = 0, n.force3D = hn.force3D, n.renderTransform = n.svg ? Zx : Ku ? Qu : jx, n.uncache = 0, n;
}, ca = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, lo = function(t, e, n) {
  var i = ke(e);
  return Se(parseFloat(e) + parseFloat(Ri(t, "x", n + "px", i))) + i;
}, jx = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Qu(t, e);
}, Bi = "0deg", qs = "0px", ki = ") ", Qu = function(t, e) {
  var n = e || this, i = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.z, c = n.rotation, h = n.rotationY, f = n.rotationX, u = n.skewX, m = n.skewY, _ = n.scaleX, g = n.scaleY, p = n.transformPerspective, d = n.force3D, M = n.target, E = n.zOrigin, S = "", b = d === "auto" && t && t !== 1 || d === true;
  if (E && (f !== Bi || h !== Bi)) {
    var A = parseFloat(h) * ws, w = Math.sin(A), x = Math.cos(A), y;
    A = parseFloat(f) * ws, y = Math.cos(A), a = lo(M, a, w * y * -E), o = lo(M, o, -Math.sin(A) * -E), l = lo(M, l, x * y * -E + E);
  }
  p !== qs && (S += "perspective(" + p + ki), (i || r) && (S += "translate(" + i + "%, " + r + "%) "), (b || a !== qs || o !== qs || l !== qs) && (S += l !== qs || b ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + ki), c !== Bi && (S += "rotate(" + c + ki), h !== Bi && (S += "rotateY(" + h + ki), f !== Bi && (S += "rotateX(" + f + ki), (u !== Bi || m !== Bi) && (S += "skew(" + u + ", " + m + ki), (_ !== 1 || g !== 1) && (S += "scale(" + _ + ", " + g + ki), M.style[pe] = S || "translate(0, 0)";
}, Zx = function(t, e) {
  var n = e || this, i = n.xPercent, r = n.yPercent, a = n.x, o = n.y, l = n.rotation, c = n.skewX, h = n.skewY, f = n.scaleX, u = n.scaleY, m = n.target, _ = n.xOrigin, g = n.yOrigin, p = n.xOffset, d = n.yOffset, M = n.forceCSS, E = parseFloat(a), S = parseFloat(o), b, A, w, x, y;
  l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= ws, c *= ws, b = Math.cos(l) * f, A = Math.sin(l) * f, w = Math.sin(l - c) * -u, x = Math.cos(l - c) * u, c && (h *= ws, y = Math.tan(c - h), y = Math.sqrt(1 + y * y), w *= y, x *= y, h && (y = Math.tan(h), y = Math.sqrt(1 + y * y), b *= y, A *= y)), b = Se(b), A = Se(A), w = Se(w), x = Se(x)) : (b = f, x = u, A = w = 0), (E && !~(a + "").indexOf("px") || S && !~(o + "").indexOf("px")) && (E = Ri(m, "x", a, "px"), S = Ri(m, "y", o, "px")), (_ || g || p || d) && (E = Se(E + _ - (_ * b + g * w) + p), S = Se(S + g - (_ * A + g * x) + d)), (i || r) && (y = m.getBBox(), E = Se(E + i / 100 * y.width), S = Se(S + r / 100 * y.height)), y = "matrix(" + b + "," + A + "," + w + "," + x + "," + E + "," + S + ")", m.setAttribute("transform", y), M && (m.style[pe] = y);
}, $x = function(t, e, n, i, r) {
  var a = 360, o = Ie(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? zi : 1), c = l - i, h = i + c + "deg", f, u;
  return o && (f = r.split("_")[1], f === "short" && (c %= a, c !== c % (a / 2) && (c += c < 0 ? a : -a)), f === "cw" && c < 0 ? c = (c + a * dh) % a - ~~(c / a) * a : f === "ccw" && c > 0 && (c = (c - a * dh) % a - ~~(c / a) * a)), t._pt = u = new Je(t._pt, e, n, i, c, Ux), u.e = h, u.u = "deg", t._props.push(n), u;
}, vh = function(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}, Jx = function(t, e, n) {
  var i = vh({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, l, c, h, f, u, m, _;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[pe] = e, o = fr(n, 1), Ji(n, pe), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[pe], a[pe] = e, o = fr(n, 1), a[pe] = c);
  for (l in li) c = i[l], h = o[l], c !== h && r.indexOf(l) < 0 && (m = ke(c), _ = ke(h), f = m !== _ ? Ri(n, l, c, _) : parseFloat(c), u = parseFloat(h), t._pt = new Je(t._pt, o, l, f, u - f, ul), t._pt.u = _ || 0, t._props.push(l));
  vh(o, i);
};
$e("padding,margin,Width,Radius", function(s16, t) {
  var e = "Top", n = "Right", i = "Bottom", r = "Left", a = (t < 3 ? [e, n, i, r] : [e + r, e + n, i + n, i + r]).map(function(o) {
    return t < 2 ? s16 + o : "border" + o + s16;
  });
  la[t > 1 ? "border" + s16 : s16] = function(o, l, c, h, f) {
    var u, m;
    if (arguments.length < 4) return u = a.map(function(_) {
      return ti(o, _, c);
    }), m = u.join(" "), m.split(u[0]).length === 5 ? u[0] : m;
    u = (h + "").split(" "), m = {}, a.forEach(function(_, g) {
      return m[_] = u[g] = u[g] || u[(g - 1) / 2 | 0];
    }), o.init(l, m, f);
  };
});
var tf = { name: "css", register: dl, targetTest: function(t) {
  return t.style && t.nodeType;
}, init: function(t, e, n, i, r) {
  var a = this._props, o = t.style, l = n.vars.startAt, c, h, f, u, m, _, g, p, d, M, E, S, b, A, w, x;
  Xl || dl(), this.styles = this.styles || qu(t), x = this.styles.props, this.tween = n;
  for (g in e) if (g !== "autoRound" && (h = e[g], !(rn[g] && Fu(g, e, n, i, t, r)))) {
    if (m = typeof h, _ = la[g], m === "function" && (h = h.call(n, i, t, r), m = typeof h), m === "string" && ~h.indexOf("random(") && (h = lr(h)), _) _(this, t, g, h, n) && (w = 1);
    else if (g.substr(0, 2) === "--") c = (getComputedStyle(t).getPropertyValue(g) + "").trim(), h += "", Ti.lastIndex = 0, Ti.test(c) || (p = ke(c), d = ke(h)), d ? p !== d && (c = Ri(t, g, c, d) + d) : p && (h += p), this.add(o, "setProperty", c, h, i, r, 0, 0, g), a.push(g), x.push(g, 0, o[g]);
    else if (m !== "undefined") {
      if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(n, i, t, r) : l[g], Ie(c) && ~c.indexOf("random(") && (c = lr(c)), ke(c + "") || c === "auto" || (c += hn.units[g] || ke(ti(t, g)) || ""), (c + "").charAt(1) === "=" && (c = ti(t, g))) : c = ti(t, g), u = parseFloat(c), M = m === "string" && h.charAt(1) === "=" && h.substr(0, 2), M && (h = h.substr(2)), f = parseFloat(h), g in Fn && (g === "autoAlpha" && (u === 1 && ti(t, "visibility") === "hidden" && f && (u = 0), x.push("visibility", 0, o.visibility), yi(this, o, "visibility", u ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), g !== "scale" && g !== "transform" && (g = Fn[g], ~g.indexOf(",") && (g = g.split(",")[0]))), E = g in li, E) {
        if (this.styles.save(g), S || (b = t._gsap, b.renderTransform && !e.parseTransform || fr(t, e.parseTransform), A = e.smoothOrigin !== false && b.smooth, S = this._pt = new Je(this._pt, o, pe, 0, 1, b.renderTransform, b, 0, -1), S.dep = 1), g === "scale") this._pt = new Je(this._pt, b, "scaleY", b.scaleY, (M ? bs(b.scaleY, M + f) : f) - b.scaleY || 0, ul), this._pt.u = 0, a.push("scaleY", g), g += "X";
        else if (g === "transformOrigin") {
          x.push(Qe, 0, o[Qe]), h = qx(h), b.svg ? pl(t, h, 0, A, 0, this) : (d = parseFloat(h.split(" ")[2]) || 0, d !== b.zOrigin && yi(this, b, "zOrigin", b.zOrigin, d), yi(this, o, g, ca(c), ca(h)));
          continue;
        } else if (g === "svgOrigin") {
          pl(t, h, 1, A, 0, this);
          continue;
        } else if (g in $u) {
          $x(this, b, g, u, M ? bs(u, M + h) : h);
          continue;
        } else if (g === "smoothOrigin") {
          yi(this, b, "smooth", b.smooth, h);
          continue;
        } else if (g === "force3D") {
          b[g] = h;
          continue;
        } else if (g === "transform") {
          Jx(this, h, t);
          continue;
        }
      } else g in o || (g = Os(g) || g);
      if (E || (f || f === 0) && (u || u === 0) && !Ix.test(h) && g in o) p = (c + "").substr((u + "").length), f || (f = 0), d = ke(h) || (g in hn.units ? hn.units[g] : p), p !== d && (u = Ri(t, g, c, d)), this._pt = new Je(this._pt, E ? b : o, g, u, (M ? bs(u, M + f) : f) - u, !E && (d === "px" || g === "zIndex") && e.autoRound !== false ? Fx : ul), this._pt.u = d || 0, p !== d && d !== "%" && (this._pt.b = c, this._pt.r = Nx);
      else if (g in o) Yx.call(this, t, g, c, M ? M + h : h);
      else if (g in t) this.add(t, g, c || t[g], M ? M + h : h, i, r);
      else if (g !== "parseTransform") {
        Fl(g, h);
        continue;
      }
      E || (g in o ? x.push(g, 0, o[g]) : x.push(g, 1, c || t[g])), a.push(g);
    }
  }
  w && Gu(this);
}, render: function(t, e) {
  if (e.tween._time || !Yl()) for (var n = e._pt; n; ) n.r(t, n.d), n = n._next;
  else e.styles.revert();
}, get: ti, aliases: Fn, getSetter: function(t, e, n) {
  var i = Fn[e];
  return i && i.indexOf(",") < 0 && (e = i), e in li && e !== Qe && (t._gsap.x || ti(t, "x")) ? n && fh === n ? e === "scale" ? zx : kx : (fh = n || {}) && (e === "scale" ? Vx : Gx) : t.style && !Il(t.style[e]) ? Ox : ~e.indexOf("-") ? Bx : Hl(t, e);
}, core: { _removeProperty: Ji, _getMatrix: Kl } };
tn.utils.checkPrefix = Os;
tn.core.getStyleSaver = qu;
(function(s16, t, e, n) {
  var i = $e(s16 + "," + t + "," + e, function(r) {
    li[r] = 1;
  });
  $e(t, function(r) {
    hn.units[r] = "deg", $u[r] = 1;
  }), Fn[i[13]] = s16 + "," + t, $e(n, function(r) {
    var a = r.split(":");
    Fn[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
$e("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s16) {
  hn.units[s16] = "px";
});
tn.registerPlugin(tf);
var At = tn.registerPlugin(tf) || tn;
At.core.Tween;
class Qx {
  constructor(t) {
    this.scene = t, this.lights = {}, this.init();
  }
  init() {
    this.lights.ambient = new wd(16775151, 1.3), this.scene.add(this.lights.ambient), this.lights.key = new Ya(16774372, 2.6), this.lights.key.position.set(5.5, 8.5, 6.5), this.lights.key.castShadow = true, this.lights.key.shadow.mapSize.width = 2048, this.lights.key.shadow.mapSize.height = 2048, this.lights.key.shadow.camera.near = 0.5, this.lights.key.shadow.camera.far = 25, this.lights.key.shadow.camera.left = -5, this.lights.key.shadow.camera.right = 5, this.lights.key.shadow.camera.top = 5, this.lights.key.shadow.camera.bottom = -5, this.lights.key.shadow.bias = -3e-4, this.lights.key.shadow.radius = 2.5, this.scene.add(this.lights.key), this.lights.fill = new Ya(14477301, 1.1), this.lights.fill.position.set(-6, 4.5, -4), this.scene.add(this.lights.fill), this.lights.rim = new Ya(16772568, 1.5), this.lights.rim.position.set(0, 7.5, -7), this.scene.add(this.lights.rim), this.lights.top = new bd(16777215, 1.2, 15, Math.PI / 4, 0.4), this.lights.top.position.set(0, 8, 0), this.scene.add(this.lights.top);
    const t = document.createElement("canvas");
    t.width = 512, t.height = 512;
    const e = t.getContext("2d"), n = e.createRadialGradient(256, 256, 10, 256, 256, 240);
    n.addColorStop(0, "rgba(40, 30, 20, 0.38)"), n.addColorStop(0.35, "rgba(40, 30, 20, 0.22)"), n.addColorStop(0.7, "rgba(40, 30, 20, 0.08)"), n.addColorStop(1, "rgba(40, 30, 20, 0)"), e.fillStyle = n, e.fillRect(0, 0, 512, 512);
    const i = new En(t), r = new Mt(new Hn(6.2, 6.2), new ua({ map: i, transparent: true, opacity: 0.85, depthWrite: false }));
    r.rotation.x = -Math.PI / 2, r.position.y = -0.502, this.scene.add(r);
    const a = new Hn(35, 35), o = new _d({ opacity: 0.18 }), l = new Mt(a, o);
    l.rotation.x = -Math.PI / 2, l.position.y = -0.505, l.receiveShadow = true, this.scene.add(l);
  }
  setMode(t) {
    t === "warm" ? (this.lights.ambient.color.setHex(16774118), this.lights.key.color.setHex(16768954), this.lights.key.intensity = 2.8) : t === "daylight" ? (this.lights.ambient.color.setHex(16054267), this.lights.key.color.setHex(16777215), this.lights.key.intensity = 2.4) : t === "golden" && (this.lights.ambient.color.setHex(16772295), this.lights.key.color.setHex(16755026), this.lights.key.intensity = 3.2);
  }
}
class tv {
  constructor() {
    this.ctx = null, this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const t = window.AudioContext || window.webkitAudioContext;
      t && (this.ctx = new t());
    }
    this.ctx && this.ctx.state === "suspended" && this.ctx.resume();
  }
  playPaperSlide() {
    if (!this.enabled || (this.init(), !this.ctx)) return;
    const t = Math.floor(this.ctx.sampleRate * 0.22), e = this.ctx.createBuffer(1, t, this.ctx.sampleRate), n = e.getChannelData(0);
    for (let o = 0; o < t; o++) n[o] = (Math.random() * 2 - 1) * Math.exp(-o / (t * 0.4));
    const i = this.ctx.createBufferSource();
    i.buffer = e;
    const r = this.ctx.createBiquadFilter();
    r.type = "bandpass", r.frequency.setValueAtTime(900, this.ctx.currentTime), r.frequency.exponentialRampToValueAtTime(1500, this.ctx.currentTime + 0.18), r.Q.value = 2.5;
    const a = this.ctx.createGain();
    a.gain.setValueAtTime(0.08, this.ctx.currentTime), a.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.2), i.connect(r), r.connect(a), a.connect(this.ctx.destination), i.start();
  }
  playCardboardThud() {
    if (!this.enabled || (this.init(), !this.ctx)) return;
    const t = this.ctx.createOscillator(), e = this.ctx.createGain();
    t.type = "sine", t.frequency.setValueAtTime(130, this.ctx.currentTime), t.frequency.exponentialRampToValueAtTime(38, this.ctx.currentTime + 0.14), e.gain.setValueAtTime(0.12, this.ctx.currentTime), e.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.16), t.connect(e), e.connect(this.ctx.destination), t.start(), t.stop(this.ctx.currentTime + 0.18);
  }
  playClick() {
    if (!this.enabled || (this.init(), !this.ctx)) return;
    const t = this.ctx.createOscillator(), e = this.ctx.createGain();
    t.type = "triangle", t.frequency.setValueAtTime(1400, this.ctx.currentTime), t.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.05), e.gain.setValueAtTime(0.07, this.ctx.currentTime), e.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.06), t.connect(e), e.connect(this.ctx.destination), t.start(), t.stop(this.ctx.currentTime + 0.07);
  }
}
class gn {
  static createKraftTexture(t = 1024, e = 1024, n = "#D4B28C") {
    const i = document.createElement("canvas");
    i.width = t, i.height = e;
    const r = i.getContext("2d");
    r.fillStyle = n, r.fillRect(0, 0, t, e);
    const a = r.getImageData(0, 0, t, e), o = a.data;
    for (let c = 0; c < o.length; c += 4) {
      const h = (Math.random() - 0.5) * 22;
      o[c] = Math.min(255, Math.max(0, o[c] + h)), o[c + 1] = Math.min(255, Math.max(0, o[c + 1] + h * 0.9)), o[c + 2] = Math.min(255, Math.max(0, o[c + 2] + h * 0.8));
    }
    r.putImageData(a, 0, 0), r.strokeStyle = "rgba(90, 65, 45, 0.08)", r.lineWidth = 1;
    for (let c = 0; c < 400; c++) {
      const h = Math.random() * t, f = Math.random() * e;
      r.beginPath(), r.moveTo(h, f), r.lineTo(h + (Math.random() - 0.5) * 12, f + (Math.random() - 0.5) * 12), r.stroke();
    }
    const l = new En(i);
    return l.wrapS = er, l.wrapT = er, l;
  }
  static createGoldFoilBranding(t = "YARA KHAMIS", e = "PACKAGING & BRAND IDENTITY", n = "YK") {
    const i = document.createElement("canvas");
    i.width = 1024, i.height = 1024;
    const r = i.getContext("2d");
    return r.fillStyle = "#1D1C1B", r.fillRect(0, 0, 1024, 1024), r.strokeStyle = "#E6C687", r.lineWidth = 4, r.strokeRect(80, 80, 864, 864), r.lineWidth = 1.5, r.strokeRect(95, 95, 834, 834), [[80, 80], [944, 80], [80, 944], [944, 944]].forEach(([l, c]) => {
      r.fillStyle = "#E6C687", r.beginPath(), r.arc(l, c, 6, 0, Math.PI * 2), r.fill();
    }), r.beginPath(), r.arc(512, 360, 90, 0, Math.PI * 2), r.lineWidth = 3, r.strokeStyle = "#F3DCA3", r.stroke(), r.font = 'italic 700 72px "Playfair Display", "Times New Roman", serif', r.fillStyle = "#F3DCA3", r.textAlign = "center", r.textBaseline = "middle", r.fillText(n, 512, 360), r.font = '700 52px "Plus Jakarta Sans", sans-serif', r.letterSpacing = "10px", r.fillStyle = "#F5E1B5", r.fillText(t, 512, 540), r.font = '400 36px "Amiri", "Traditional Arabic", serif', r.fillStyle = "#E2C288", r.fillText("\u064A\u0627\u0631\u0627 \u062E\u0645\u064A\u0633 \u2014 \u0641\u0646 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062A\u063A\u0644\u064A\u0641", 512, 610), r.font = '500 24px "Plus Jakarta Sans", sans-serif', r.fillStyle = "#D6B87C", r.letterSpacing = "6px", r.fillText(e, 512, 680), r.fillText("EST. 2018 \xB7 FINE ARTS DECOR", 512, 730), new En(i);
  }
  static createFoodLabel(t = "ARTISAN GOURMET", e = "Handcrafted Organic Infusion", n = "\u0645\u0633\u062A\u062E\u0644\u0635\u0627\u062A \u0639\u0634\u0628\u064A\u0629 \u0641\u0627\u062E\u0631\u0629") {
    const i = document.createElement("canvas");
    i.width = 1024, i.height = 1024;
    const r = i.getContext("2d");
    r.fillStyle = "#F6F3EB", r.fillRect(0, 0, 1024, 1024), r.fillStyle = "#E08B73", r.fillRect(80, 0, 864, 1024), r.fillStyle = "#FBF9F5", r.beginPath(), r.arc(512, 400, 240, Math.PI, 0, false), r.lineTo(752, 720), r.arc(512, 720, 240, 0, Math.PI, false), r.closePath(), r.fill(), r.strokeStyle = "#4A5B46", r.lineWidth = 3, r.beginPath(), r.moveTo(512, 560), r.quadraticCurveTo(512, 420, 512, 300), r.stroke();
    for (let o = 0; o < 7; o++) {
      const l = 320 + o * 32, c = o % 2 === 0 ? 1 : -1;
      r.beginPath(), r.ellipse(512 + c * 35, l, 28, 12, c * 0.5, 0, Math.PI * 2), r.fillStyle = o % 2 === 0 ? "#637A5D" : "#8A9E84", r.fill();
    }
    r.textAlign = "center", r.fillStyle = "#2A2928", r.font = '700 42px "Plus Jakarta Sans", sans-serif', r.fillText(t, 512, 220), r.font = 'italic 400 32px "Playfair Display", serif', r.fillStyle = "#3F3D3A", r.fillText(e, 512, 650), r.font = '700 34px "Amiri", serif', r.fillStyle = "#B4573F", r.fillText(n, 512, 710), r.font = '600 20px "Plus Jakarta Sans", sans-serif', r.fillStyle = "#5A5652", r.fillText("100% RECYCLABLE \xB7 FOOD GRADE \xB7 350 GSM", 512, 850), r.fillText("DESIGNED BY YARA KHAMIS", 512, 890), r.fillStyle = "#2A2928";
    const a = 362;
    for (let o = 0; o < 300; o += 6) {
      const l = o % 12 === 0 || o % 18 === 0 ? 4 : 2;
      r.fillRect(a + o, 920, l, 40);
    }
    return new En(i);
  }
  static createWatercolorPage(t = 0) {
    const e = document.createElement("canvas");
    e.width = 1024, e.height = 1024;
    const n = e.getContext("2d");
    n.fillStyle = "#F8F5EE", n.fillRect(0, 0, 1024, 1024);
    const i = n.getImageData(0, 0, 1024, 1024);
    for (let c = 0; c < i.data.length; c += 4) {
      const h = (Math.random() - 0.5) * 14;
      i.data[c] += h, i.data[c + 1] += h, i.data[c + 2] += h;
    }
    n.putImageData(i, 0, 0);
    const r = [["rgba(217, 136, 128, 0.45)", "rgba(235, 175, 140, 0.35)", "Floral Symphony"], ["rgba(123, 158, 137, 0.45)", "rgba(168, 195, 160, 0.35)", "Botanical Whispers"], ["rgba(155, 130, 180, 0.45)", "rgba(205, 170, 210, 0.35)", "Lavender Dreams"]], [a, o, l] = r[t % r.length];
    n.save();
    for (let c = 0; c < 6; c++) {
      n.beginPath(), n.fillStyle = c % 2 === 0 ? a : o;
      const h = 320 + Math.sin(c) * 160, f = 420 + Math.cos(c) * 140, u = 180 + Math.sin(c * 2) * 60;
      n.arc(h, f, u, 0, Math.PI * 2), n.fill();
    }
    return n.restore(), n.textAlign = "center", n.fillStyle = "#3A3632", n.font = 'italic 700 46px "Playfair Display", serif', n.fillText(l, 512, 780), n.font = '400 24px "Plus Jakarta Sans", sans-serif', n.fillStyle = "#78736B", n.fillText("Original Watercolor & Hand-Bound Journal \xB7 Yara Khamis", 512, 840), new En(e);
  }
  static createDielineTexture() {
    const t = document.createElement("canvas");
    t.width = 2048, t.height = 2048;
    const e = t.getContext("2d");
    e.fillStyle = "#FAF7F0", e.fillRect(0, 0, 2048, 2048);
    const n = e.getImageData(0, 0, 2048, 2048), i = n.data;
    for (let l = 0; l < i.length; l += 4) {
      const c = (Math.random() - 0.5) * 12;
      i[l] += c, i[l + 1] += c, i[l + 2] += c;
    }
    e.putImageData(n, 0, 0), e.strokeStyle = "rgba(0, 100, 180, 0.08)", e.lineWidth = 1;
    for (let l = 0; l < 2048; l += 32) e.beginPath(), e.moveTo(l, 0), e.lineTo(l, 2048), e.stroke();
    for (let l = 0; l < 2048; l += 32) e.beginPath(), e.moveTo(0, l), e.lineTo(2048, l), e.stroke();
    e.strokeStyle = "rgba(0, 100, 180, 0.18)", e.lineWidth = 1.5;
    for (let l = 0; l < 2048; l += 160) e.beginPath(), e.moveTo(l, 0), e.lineTo(l, 2048), e.stroke();
    for (let l = 0; l < 2048; l += 160) e.beginPath(), e.moveTo(0, l), e.lineTo(2048, l), e.stroke();
    e.strokeStyle = "#E63946", e.lineWidth = 6, e.strokeRect(300, 300, 1448, 1448), e.setLineDash([24, 16]), e.strokeStyle = "#0077B6", e.lineWidth = 5, e.beginPath(), e.moveTo(662, 300), e.lineTo(662, 1748), e.moveTo(1024, 300), e.lineTo(1024, 1748), e.moveTo(1386, 300), e.lineTo(1386, 1748), e.moveTo(300, 662), e.lineTo(1748, 662), e.moveTo(300, 1386), e.lineTo(1748, 1386), e.stroke(), e.setLineDash([]), e.strokeStyle = "rgba(230, 57, 70, 0.4)", e.lineWidth = 2;
    for (let l = 300; l < 480; l += 16) e.beginPath(), e.moveTo(l, 300), e.lineTo(l - 40, 380), e.stroke();
    e.fillStyle = "#FFFFFF", e.strokeStyle = "#1D3557", e.lineWidth = 4, e.fillRect(1150, 1450, 550, 260), e.strokeRect(1150, 1450, 550, 260), e.fillStyle = "#1D3557", e.font = 'bold 36px "Plus Jakarta Sans", sans-serif', e.fillText("YARA KHAMIS \xB7 PACKAGING LAB", 1180, 1500), e.font = "500 24px monospace", e.fillText("STYLE: STE-B350 FOLDING CARTON", 1180, 1540), e.fillText("DIMENSIONS: 180 x 120 x 105 mm", 1180, 1575), e.fillText("BOARD: 350 GSM GC1 SBS BOARD", 1180, 1610), e.fillText("GRAIN DIRECTION: \u25C4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25BA", 1180, 1645), e.fillText("SCALE: 1:1 \xB7 TOLERANCE: \xB10.2mm", 1180, 1680), e.fillStyle = "#E63946", e.fillRect(320, 1650, 40, 16), e.fillStyle = "#1D3557", e.font = "bold 22px monospace", e.fillText("CUT LINE (SOLID)", 375, 1665), e.fillStyle = "#0077B6", e.fillRect(620, 1650, 40, 16), e.fillStyle = "#1D3557", e.fillText("CREASE LINE (DASHED)", 675, 1665), [[120, 120], [1928, 120], [120, 1928], [1928, 1928]].forEach(([l, c]) => {
      e.strokeStyle = "#111111", e.lineWidth = 3, e.beginPath(), e.arc(l, c, 36, 0, Math.PI * 2), e.moveTo(l - 50, c), e.lineTo(l + 50, c), e.moveTo(l, c - 50), e.lineTo(l, c + 50), e.stroke();
    }), ["#00FFFF", "#FF00FF", "#FFFF00", "#000000", "#D4AF37"].forEach((l, c) => {
      e.fillStyle = l, e.fillRect(320 + c * 80, 1690, 65, 35), e.strokeRect(320 + c * 80, 1690, 65, 35);
    });
    const o = new En(t);
    return o.anisotropy = 8, o;
  }
  static createCuttingMatTexture() {
    const t = document.createElement("canvas");
    t.width = 2048, t.height = 1600;
    const e = t.getContext("2d");
    e.fillStyle = "#1B3B2B", e.fillRect(0, 0, 2048, 1600), e.strokeStyle = "#E8EFE9", e.lineWidth = 4, e.strokeRect(80, 80, 1888, 1440), e.strokeStyle = "rgba(232, 239, 233, 0.22)", e.lineWidth = 1;
    for (let r = 80; r <= 1968; r += 32) e.beginPath(), e.moveTo(r, 80), e.lineTo(r, 1520), e.stroke();
    for (let r = 80; r <= 1520; r += 32) e.beginPath(), e.moveTo(80, r), e.lineTo(1968, r), e.stroke();
    e.strokeStyle = "rgba(232, 239, 233, 0.55)", e.lineWidth = 2;
    for (let r = 80; r <= 1968; r += 160) e.beginPath(), e.moveTo(r, 80), e.lineTo(r, 1520), e.stroke();
    for (let r = 80; r <= 1520; r += 160) e.beginPath(), e.moveTo(80, r), e.lineTo(1968, r), e.stroke();
    e.strokeStyle = "rgba(240, 210, 120, 0.45)", e.lineWidth = 2, e.setLineDash([12, 10]), e.beginPath(), e.moveTo(80, 1520), e.lineTo(1520, 80), e.moveTo(80, 1520), e.lineTo(1968, 432), e.moveTo(80, 1520), e.lineTo(912, 80), e.stroke(), e.setLineDash([]), e.fillStyle = "#E8EFE9", e.font = "bold 22px monospace";
    let n = 0;
    for (let r = 80; r <= 1968; r += 160) e.fillText(`${n}`, r - 10, 65), n += 5;
    e.font = 'bold 32px "Plus Jakarta Sans", sans-serif', e.fillStyle = "rgba(232, 239, 233, 0.65)", e.fillText("YARA KHAMIS \xB7 STUDIO CUTTING MAT \xB7 A2 (600 x 450 mm)", 580, 1565);
    const i = new En(t);
    return i.anisotropy = 8, i;
  }
  static createChocolateWrapTexture(t = "SINGLE ORIGIN 72%", e = "MADAGASCAR COCOA", n = "#9A3B26") {
    const i = document.createElement("canvas");
    i.width = 1024, i.height = 1024;
    const r = i.getContext("2d");
    r.fillStyle = "#F5F1E9", r.fillRect(0, 0, 1024, 1024), r.fillStyle = n, r.fillRect(120, 0, 784, 1024), r.strokeStyle = "#E5C483", r.lineWidth = 6, r.strokeRect(150, 50, 724, 924), r.lineWidth = 2, r.strokeRect(165, 65, 694, 894), r.strokeStyle = "#F3DAA3", r.lineWidth = 3, r.beginPath(), r.arc(512, 380, 110, 0, Math.PI * 2), r.stroke(), r.fillStyle = "#F3DAA3", r.font = 'bold 64px "Playfair Display", serif', r.textAlign = "center", r.fillText("YK", 512, 395), r.fillStyle = "#FAF7F0", r.font = 'bold 44px "Plus Jakarta Sans", sans-serif', r.fillText(t, 512, 570), r.font = 'italic 30px "Playfair Display", serif', r.fillStyle = "#E5C483", r.fillText(e, 512, 630), r.font = 'bold 36px "Amiri", serif', r.fillStyle = "#FFFFFF", r.fillText("\u0634\u0648\u0643\u0648\u0644\u0627\u062A\u0629 \u062D\u0631\u0641\u064A\u0629 \u0641\u0627\u062E\u0631\u0629", 512, 700), r.font = '500 20px "Plus Jakarta Sans", sans-serif', r.fillStyle = "#D9BF96", r.fillText("ORGANIC FAIR TRADE \xB7 85G NET", 512, 780), r.fillText("DESIGNED BY YARA KHAMIS", 512, 820);
    const a = new En(i);
    return a.anisotropy = 4, a;
  }
  static createPerfumeLabel() {
    const t = document.createElement("canvas");
    t.width = 1024, t.height = 1024;
    const e = t.getContext("2d");
    return e.fillStyle = "#F8F6F0", e.fillRect(0, 0, 1024, 1024), e.strokeStyle = "#C9A356", e.lineWidth = 6, e.strokeRect(60, 60, 904, 904), e.strokeStyle = "#E4C98A", e.lineWidth = 2, e.strokeRect(80, 80, 864, 864), e.textAlign = "center", e.font = 'italic 700 80px "Playfair Display", serif', e.fillStyle = "#C9A356", e.fillText("YK", 512, 340), e.font = '700 52px "Playfair Display", serif', e.fillStyle = "#1C1A18", e.fillText("L'\xC9LIXIR D'ALEXANDRIE", 512, 470), e.font = '700 46px "Amiri", serif', e.fillStyle = "#8C6C30", e.fillText("\u0625\u0643\u0633\u064A\u0631 \u0627\u0644\u0625\u0633\u0643\u0646\u062F\u0631\u064A\u0629", 512, 550), e.font = '600 26px "Plus Jakarta Sans", sans-serif', e.fillStyle = "#3F3B36", e.fillText("EAU DE PARFUM \xB7 VAPORISATEUR NATURAL", 512, 650), e.fillText("100 ML \xB7 3.4 FL. OZ", 512, 700), e.font = '500 22px "Plus Jakarta Sans", sans-serif', e.fillStyle = "#8C6C30", e.fillText("HAUTE PARFUMERIE \xB7 YARA KHAMIS", 512, 780), new En(t);
  }
  static createMarbledCoverTexture() {
    const t = document.createElement("canvas");
    t.width = 1024, t.height = 1024;
    const e = t.getContext("2d");
    e.fillStyle = "#1A332E", e.fillRect(0, 0, 1024, 1024);
    const n = ["#2C5248", "#3E6F62", "#D1AC60", "#C59A45", "#0E211E"];
    for (let i = 0; i < 40; i++) {
      e.strokeStyle = n[i % n.length], e.lineWidth = 3 + i % 6 * 3, e.beginPath();
      let r = i * 28;
      e.moveTo(0, r);
      for (let a = 0; a < 1024; a += 120) {
        const o = r + Math.sin((a + i * 50) * 0.015) * 60 + Math.cos(a * 0.02) * 30;
        e.lineTo(a, o);
      }
      e.stroke();
    }
    return e.fillStyle = "rgba(232, 200, 130, 0.95)", e.strokeStyle = "#F0D598", e.lineWidth = 4, e.strokeRect(200, 280, 624, 464), e.strokeRect(215, 295, 594, 434), e.textAlign = "center", e.font = 'italic 700 58px "Playfair Display", serif', e.fillText("ATELIER DECOR", 512, 450), e.font = 'bold 36px "Amiri", serif', e.fillText("\u0645\u0641\u0643\u0631\u0629 \u0627\u0644\u0641\u0646\u0648\u0646 \u0627\u0644\u062C\u0645\u064A\u0644\u0629 \xB7 \u064A\u0627\u0631\u0627 \u062E\u0645\u064A\u0633", 512, 530), e.font = '600 24px "Plus Jakarta Sans", sans-serif', e.fillText("FINE ARTS SKETCHBOOK \xB7 300 GSM", 512, 600), new En(t);
  }
  static createDoypackLabel() {
    const t = document.createElement("canvas");
    t.width = 1024, t.height = 1024;
    const e = t.getContext("2d");
    e.fillStyle = "#F7F3E9", e.fillRect(0, 0, 1024, 1024), e.strokeStyle = "#435845", e.lineWidth = 6, e.strokeRect(50, 50, 924, 924), e.strokeStyle = "#435845", e.lineWidth = 4, e.beginPath(), e.arc(512, 320, 120, 0, Math.PI * 2), e.stroke(), e.textAlign = "center", e.font = '700 48px "Plus Jakarta Sans", sans-serif', e.fillStyle = "#263428", e.fillText("ORGANIC BOTANICALS", 512, 520), e.font = '700 44px "Amiri", serif', e.fillStyle = "#7A4D3B", e.fillText("\u0623\u0639\u0634\u0627\u0628 \u0639\u0636\u0648\u064A\u0629 \u0648\u0645\u0633\u062A\u062E\u0644\u0635\u0627\u062A \u0646\u0642\u064A\u0629", 512, 590), e.font = 'italic 30px "Playfair Display", serif', e.fillStyle = "#4A5B46", e.fillText("Single Harvest \xB7 Sun Dried", 512, 660), e.font = '600 22px "Plus Jakarta Sans", sans-serif', e.fillStyle = "#5A5E56", e.fillText("100% COMPOSTABLE PACKAGING \xB7 250G", 512, 740), e.fillText("ALEXANDRIA \xB7 YARA KHAMIS STUDIO", 512, 780), e.fillStyle = "#263428";
    for (let n = 330; n < 700; n += 8) {
      const i = n % 16 === 0 || n % 24 === 0 ? 5 : 2;
      e.fillRect(n, 840, i, 55);
    }
    return new En(t);
  }
}
class ev {
  constructor(t) {
    this.audio = t, this.group = new ie(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = gn.createKraftTexture(1024, 1024, "#CBB08C"), e = gn.createFoodLabel();
    this.tray = new ie();
    const n = new Ts({ map: t, roughness: 0.75, metalness: 0.04, clearcoat: 0.05 }), i = 2.4, r = 0.85, a = 3.3, o = 0.035, l = new Mt(new Ot(i, o, a), n);
    l.position.y = o / 2, l.receiveShadow = true, this.tray.add(l);
    const c = n, h = new Mt(new Ot(o, r, a), c);
    h.position.set(-i / 2 + o / 2, r / 2, 0), this.tray.add(h);
    const f = new Mt(new Ot(o, r, a), c);
    f.position.set(i / 2 - o / 2, r / 2, 0), this.tray.add(f);
    const u = new Mt(new Ot(i, r, o), c);
    u.position.set(0, r / 2, -a / 2 + o / 2), this.tray.add(u);
    const m = new Mt(new Ot(i, r, o), c);
    m.position.set(0, r / 2, a / 2 - o / 2), this.tray.add(m);
    const _ = new ue({ color: 15058051, roughness: 0.35, metalness: 0.4 }), g = new Mt(new Ot(0.35, 0.04, 0.4), _);
    g.position.set(0, r / 2, a / 2 + 0.18), this.tray.add(g), this.contents = new ie();
    const p = 0.65, d = 0.28, M = 2.8, E = [{ title: "72% DARK NOIR", sub: "MADAGASCAR COCOA", color: "#883222" }, { title: "PISTACHIO MATCHA", sub: "ORGANIC INFUSION", color: "#44563F" }, { title: "SALTED CARAMEL", sub: "ALEXANDRIAN FLEUR", color: "#AA7436" }];
    this.bars = [];
    const S = new ue({ color: 15782543, metalness: 0.85, roughness: 0.25 });
    E.forEach((V, O) => {
      const B = new ie(), N = new Mt(new Ot(p, d, M), S);
      N.castShadow = true, B.add(N);
      const Z = gn.createChocolateWrapTexture(V.title, V.sub, V.color), $ = new ue({ map: Z, roughness: 0.55 }), at = new Mt(new Ot(p + 0.015, d + 0.015, M * 0.72), $);
      B.add(at), B.position.set(-0.75 + O * 0.75, r / 2, 0), this.contents.add(B), this.bars.push(B);
    }), this.tray.add(this.contents), this.group.add(this.tray), this.sleeve = new ie();
    const b = i + 0.08, A = r + 0.08, w = a + 0.02, x = 0.035, y = new Ts({ map: e, roughness: 0.5, metalness: 0.08, clearcoat: 0.25 }), z = new Mt(new Ot(b, x, w), y);
    z.position.y = A, z.castShadow = true, this.sleeve.add(z);
    const C = new Mt(new Ot(b, x, w), y);
    C.position.y = 0, C.receiveShadow = true, this.sleeve.add(C);
    const L = new Mt(new Ot(b, A, x), y);
    L.position.set(0, A / 2, w / 2 - x / 2), L.castShadow = true, this.sleeve.add(L);
    const U = new Mt(new Ot(b, A, x), y);
    U.position.set(0, A / 2, -w / 2 + x / 2), U.castShadow = true, this.sleeve.add(U), this.group.add(this.sleeve), this.group.position.y = -0.4;
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), At.to(this.sleeve.position, { x: -3.4, duration: 1.3, ease: "power3.out" }), At.to(this.tray.position, { z: 1.8, duration: 1.3, ease: "power3.out", onComplete: () => this.audio.playCardboardThud() }), this.bars.forEach((e, n) => {
      At.to(e.position, { y: 0.85, duration: 0.9, delay: 0.35 + n * 0.12, ease: "back.out(1.8)" }), At.to(e.rotation, { x: 0.28, duration: 0.9, delay: 0.35 + n * 0.12, ease: "power2.out" });
    })) : (this.audio.playPaperSlide(), this.bars.forEach((e, n) => {
      At.to(e.position, { y: 0.42, duration: 0.6, delay: n * 0.05, ease: "power2.in" }), At.to(e.rotation, { x: 0, duration: 0.6, delay: n * 0.05, ease: "power2.in" });
    }), At.to(this.tray.position, { z: 0, duration: 1.1, delay: 0.2, ease: "power3.inOut" }), At.to(this.sleeve.position, { x: 0, duration: 1.1, delay: 0.2, ease: "power3.inOut", onComplete: () => this.audio.playCardboardThud() }));
  }
}
class nv {
  constructor(t) {
    this.audio = t, this.group = new ie(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = gn.createGoldFoilBranding(), e = gn.createPerfumeLabel(), n = new Ts({ color: 1315860, roughness: 0.65, metalness: 0.1, clearcoat: 0.15 }), i = 2.6, r = 1.1, a = 2.6;
    this.base = new Mt(new Ot(i, r, a), n), this.base.position.y = r / 2, this.base.castShadow = true, this.base.receiveShadow = true, this.group.add(this.base);
    const o = new ue({ color: 15255691, metalness: 0.92, roughness: 0.2 }), l = new Mt(new Ot(i - 0.08, 0.45, a - 0.08), o);
    l.position.y = r / 2 + 0.15, this.base.add(l);
    const c = new ue({ color: 1709074, roughness: 0.98 }), h = new Mt(new Ot(i - 0.16, 0.35, a - 0.16), c);
    h.position.y = r / 2 + 0.18, this.base.add(h), this.bottle = new ie();
    const f = new Ts({ color: 16777215, transmission: 0.92, opacity: 1, transparent: true, roughness: 0.06, ior: 1.54, thickness: 1.2 }), u = new Mt(new si(0.48, 0.48, 1.25, 8), f);
    u.castShadow = true, this.bottle.add(u);
    const m = new ue({ color: 15046722, roughness: 0.15, metalness: 0.1 }), _ = new Mt(new si(0.38, 0.38, 0.95, 8), m);
    _.position.y = -0.05, this.bottle.add(_);
    const g = new Mt(new Hn(0.55, 0.55), new ue({ map: e, roughness: 0.45, metalness: 0.2 }));
    g.position.set(0, 0, 0.49), this.bottle.add(g);
    const p = new Mt(new si(0.22, 0.26, 0.25, 32), o);
    p.position.y = 0.72, this.bottle.add(p);
    const d = new ue({ color: 1579032, roughness: 0.8 }), M = new Mt(new Ot(0.32, 0.06, 0.1), d);
    M.position.set(0, 0.65, 0.25), this.bottle.add(M);
    const E = new Mt(new Ot(0.38, 0.45, 0.38), o);
    E.position.y = 1, E.castShadow = true, this.bottle.add(E), this.bottle.position.set(0, r + 0.1, 0), this.group.add(this.bottle);
    const S = [n, n, new Ts({ map: t, roughness: 0.38, metalness: 0.4, clearcoat: 0.35 }), n, n, n], b = new Ot(i + 0.06, 0.45, a + 0.06);
    this.lid = new Mt(b, S), this.lid.castShadow = true, this.lidPivot = new ie(), this.lidPivot.position.set(0, r + 0.05, -a / 2), this.lid.position.set(0, 0.22, a / 2), this.lidPivot.add(this.lid), this.group.add(this.lidPivot), this.group.position.y = -0.55;
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), At.to(this.lidPivot.rotation, { x: -Math.PI * 0.68, duration: 1.4, ease: "power3.out", onComplete: () => this.audio.playCardboardThud() }), At.to(this.bottle.position, { y: 1.7, duration: 1.2, delay: 0.35, ease: "power2.out" }), At.to(this.bottle.rotation, { y: Math.PI * 0.45, x: 0.12, duration: 1.6, delay: 0.35, ease: "power1.out" })) : (this.audio.playPaperSlide(), At.to(this.bottle.position, { y: 1.2, duration: 0.8, ease: "power2.in" }), At.to(this.bottle.rotation, { y: 0, x: 0, duration: 0.8, ease: "power2.in" }), At.to(this.lidPivot.rotation, { x: 0, duration: 1, delay: 0.3, ease: "power3.inOut", onComplete: () => this.audio.playClick() }));
  }
}
class iv {
  constructor(t) {
    this.audio = t, this.group = new ie(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = gn.createMarbledCoverTexture(), e = gn.createWatercolorPage(0), n = 2.4, i = 0.32, r = 3.2, a = new ue({ map: t, roughness: 0.75, metalness: 0.1 }), o = new Mt(new Ot(n, 0.08, r), a);
    o.position.y = -i / 2, o.castShadow = true, this.group.add(o);
    const l = new ue({ color: 16645109, roughness: 0.95 }), c = new Mt(new Ot(n - 0.08, i - 0.06, r - 0.08), l);
    c.position.set(0.04, 0, 0), c.receiveShadow = true, this.group.add(c);
    const h = new ue({ color: 2234901, roughness: 0.7 }), f = new Mt(new Ot(0.18, i + 0.08, r + 0.02), h);
    f.position.set(-n / 2 + 0.02, 0, 0), this.group.add(f);
    const u = new ue({ color: 15124619, roughness: 0.4 });
    for (let E = -1.2; E <= 1.2; E += 0.5) {
      const S = new Mt(new si(0.015, 0.015, 0.22, 8), u);
      S.rotation.z = Math.PI / 4, S.position.set(-n / 2 - 0.07, 0, E), this.group.add(S);
    }
    const m = new ue({ color: 14201454, metalness: 0.88, roughness: 0.25 }), _ = (E, S, b) => {
      const A = new Mt(new Ot(0.24, 0.09, 0.24), m);
      A.position.set(S, 0, b), E.add(A);
    };
    _(o, n / 2 - 0.12, r / 2 - 0.12), _(o, n / 2 - 0.12, -r / 2 + 0.12), this.frontCoverPivot = new ie(), this.frontCoverPivot.position.set(-n / 2 + 0.08, i / 2, 0);
    const g = new Mt(new Ot(n, 0.08, r), a);
    g.position.set(n / 2 - 0.08, 0, 0), g.castShadow = true, _(g, n / 2 - 0.12, r / 2 - 0.12), _(g, n / 2 - 0.12, -r / 2 + 0.12), this.frontCoverPivot.add(g), this.group.add(this.frontCoverPivot), this.pagePivot = new ie(), this.pagePivot.position.set(-n / 2 + 0.1, i / 2 - 0.02, 0);
    const p = new ue({ map: e, roughness: 0.9, side: Ln }), d = new Mt(new Hn(n - 0.12, r - 0.12), p);
    d.rotation.x = -Math.PI / 2, d.position.set((n - 0.12) / 2, 0.01, 0), this.pagePivot.add(d), this.group.add(this.pagePivot);
    const M = new ue({ color: 10890027, roughness: 0.35, metalness: 0.2 });
    this.ribbon = new Mt(new Ot(0.12, 0.03, r + 0.8), M), this.ribbon.position.set(0.4, i / 2 + 0.05, 0.25), this.group.add(this.ribbon), this.group.position.y = -0.3;
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), At.to(this.ribbon.position, { x: 2.1, z: 0.5, duration: 0.9, ease: "power2.out" }), At.to(this.frontCoverPivot.rotation, { z: Math.PI * 0.96, duration: 1.4, delay: 0.2, ease: "power3.inOut", onComplete: () => this.audio.playCardboardThud() }), At.to(this.pagePivot.rotation, { z: Math.PI * 0.18, duration: 1.2, delay: 0.7, ease: "power2.out" })) : (this.audio.playPaperSlide(), At.to(this.pagePivot.rotation, { z: 0, duration: 0.7, ease: "power2.in" }), At.to(this.frontCoverPivot.rotation, { z: 0, duration: 1.1, delay: 0.25, ease: "power3.inOut", onComplete: () => this.audio.playCardboardThud() }), At.to(this.ribbon.position, { x: 0.4, z: 0.25, duration: 0.8, delay: 0.8, ease: "power2.out" }));
  }
}
class sv {
  constructor(t) {
    this.audio = t, this.group = new ie(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = gn.createKraftTexture(1024, 1024, "#C29A6B"), e = gn.createDoypackLabel(), n = new Ts({ map: t, roughness: 0.8, metalness: 0.05, clearcoat: 0.05 }), i = new si(0.95, 1.25, 3.4, 32, 4);
    i.scale(1.2, 1, 0.45), this.body = new Mt(i, n), this.body.position.y = 1.7, this.body.castShadow = true, this.body.receiveShadow = true, this.group.add(this.body);
    const r = new ue({ color: 9990728, roughness: 0.85 }), a = new Mt(new si(1.2, 1.2, 0.08, 32), r);
    a.scale.set(1.2, 1, 0.45), a.position.y = 0.04, this.group.add(a);
    const o = new ue({ color: 10385487, roughness: 0.8 }), l = new Mt(new Ot(0.06, 3.3, 0.08), o);
    l.position.set(-1.46, 1.7, 0), this.group.add(l);
    const c = new Mt(new Ot(0.06, 3.3, 0.08), o);
    c.position.set(1.46, 1.7, 0), this.group.add(c), this.sealPivot = new ie(), this.sealPivot.position.set(0, 3.35, 0);
    const h = new ue({ color: 9201214, roughness: 0.75, metalness: 0.15 });
    this.seal = new Mt(new Ot(2.96, 0.42, 0.08), h), this.seal.position.y = 0.21, this.seal.castShadow = true, this.sealPivot.add(this.seal);
    const f = new na(0.07, 0.14, 16), u = new ua({ color: 3351061 }), m = new Mt(f, u);
    m.rotation.z = Math.PI / 2, m.position.set(-1.48, 0.18, 0), this.sealPivot.add(m);
    const _ = new Mt(f, u);
    _.rotation.z = -Math.PI / 2, _.position.set(1.48, 0.18, 0), this.sealPivot.add(_), this.group.add(this.sealPivot);
    const g = new Mt(new Hn(1.6, 2), new ue({ map: e, roughness: 0.55 }));
    g.position.set(0, 1.75, 0.53), this.group.add(g), this.contents = new ie();
    const p = new ue({ color: 16242797, roughness: 0.4 }), d = new ue({ color: 5598798, roughness: 0.6 });
    for (let M = 0; M < 12; M++) {
      const E = M % 3 === 0, S = new Mt(E ? new na(0.12, 0.35, 6) : new Rl(0.12, 12, 12), E ? d : p);
      S.position.set((Math.random() - 0.5) * 1, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.4), S.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0), this.contents.add(S);
    }
    this.contents.position.y = 2.8, this.contents.scale.set(1e-3, 1e-3, 1e-3), this.group.add(this.contents), this.group.position.y = -1.5;
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playClick(), this.audio.playPaperSlide(), At.to(this.sealPivot.position, { y: 4.1, duration: 0.8, ease: "power2.out" }), At.to(this.contents.scale, { x: 1, y: 1, z: 1, duration: 1, delay: 0.25, ease: "back.out(2)" }), At.to(this.contents.position, { y: 3.8, duration: 1.3, ease: "power2.out" }), At.to(this.body.scale, { x: 1.05, z: 1.15, duration: 0.8, ease: "power1.out" })) : (this.audio.playPaperSlide(), At.to(this.contents.position, { y: 2.8, duration: 0.7, ease: "power2.in" }), At.to(this.contents.scale, { x: 1e-3, y: 1e-3, z: 1e-3, duration: 0.5, ease: "power2.in" }), At.to(this.sealPivot.position, { y: 3.35, duration: 0.8, delay: 0.2, ease: "power2.inOut", onComplete: () => this.audio.playCardboardThud() }), At.to(this.body.scale, { x: 1, z: 1, duration: 0.7, ease: "power1.inOut" }));
  }
}
class rv {
  constructor(t) {
    this.audio = t, this.group = new ie(), this.isUnboxed = false, this.build();
  }
  build() {
    this.W = 2.4, this.D = 1.6, this.H = 1.4;
    const o = gn.createDielineTexture(), l = gn.createKraftTexture(512, 512, "#D7B48C"), c = new ue({ color: 12228725, roughness: 0.9 }), h = new ue({ map: o, roughness: 0.65, metalness: 0.05 }), f = new ue({ map: l, roughness: 0.85, metalness: 0.02 }), u = [c, c, h, f, c, c], m = gn.createCuttingMatTexture(), _ = new Mt(new Hn(6.4, 5), new ue({ map: m, roughness: 0.7, metalness: 0.1 }));
    _.rotation.x = -Math.PI / 2, _.position.y = -0.01, _.receiveShadow = true, this.group.add(_), this.cuttingMat = _, this.centerBase = new Mt(new Ot(2.4, 0.025, 1.6), u), this.centerBase.position.set(0, 0.025 / 2, 0), this.centerBase.receiveShadow = true, this.group.add(this.centerBase), this.leftPivot = new ie(), this.leftPivot.position.set(-2.4 / 2, 0.025, 0);
    const g = new Mt(new Ot(1.4, 0.025, 1.6), u);
    g.position.set(-1.4 / 2, 0, 0), g.castShadow = true, this.leftPivot.add(g), this.leftDustPivot = new ie(), this.leftDustPivot.position.set(-1.4, 0, 0);
    const p = new Mt(new Ot(0.55, 0.025, 1.6 * 0.85), u);
    p.position.set(-0.55 / 2, 0, 0), this.leftDustPivot.add(p), this.leftPivot.add(this.leftDustPivot), this.group.add(this.leftPivot), this.rightPivot = new ie(), this.rightPivot.position.set(2.4 / 2, 0.025, 0);
    const d = new Mt(new Ot(1.4, 0.025, 1.6), u);
    d.position.set(1.4 / 2, 0, 0), d.castShadow = true, this.rightPivot.add(d), this.rightDustPivot = new ie(), this.rightDustPivot.position.set(1.4, 0, 0);
    const M = new Mt(new Ot(0.55, 0.025, 1.6 * 0.85), u);
    M.position.set(0.55 / 2, 0, 0), this.rightDustPivot.add(M), this.rightPivot.add(this.rightDustPivot), this.group.add(this.rightPivot), this.frontPivot = new ie(), this.frontPivot.position.set(0, 0.025, 1.6 / 2);
    const E = new Mt(new Ot(2.4, 0.025, 1.4), u);
    E.position.set(0, 0, 1.4 / 2), E.castShadow = true, this.frontPivot.add(E), this.group.add(this.frontPivot), this.backPivot = new ie(), this.backPivot.position.set(0, 0.025, -1.6 / 2);
    const S = new Mt(new Ot(2.4, 0.025, 1.4), u);
    S.position.set(0, 0, -1.4 / 2), S.castShadow = true, this.backPivot.add(S), this.topLidPivot = new ie(), this.topLidPivot.position.set(0, 0, -1.4);
    const b = new Mt(new Ot(2.4, 0.025, 1.6), u);
    b.position.set(0, 0, -1.6 / 2), b.castShadow = true, this.topLidPivot.add(b), this.backPivot.add(this.topLidPivot), this.tuckPivot = new ie(), this.tuckPivot.position.set(0, 0, -1.6);
    const A = new Mt(new Ot(2.4 * 0.92, 0.025, 0.45), u);
    A.position.set(0, 0, -0.45 / 2), this.tuckPivot.add(A), this.topLidPivot.add(this.tuckPivot), this.group.add(this.backPivot), this.group.position.y = -0.5;
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), At.to(this.leftPivot.rotation, { z: -Math.PI / 2, duration: 1.1, ease: "power2.inOut" }), At.to(this.rightPivot.rotation, { z: Math.PI / 2, duration: 1.1, ease: "power2.inOut" }), At.to(this.frontPivot.rotation, { z: 0, x: -Math.PI / 2, duration: 1.1, ease: "power2.inOut" }), At.to(this.backPivot.rotation, { x: Math.PI / 2, duration: 1.1, ease: "power2.inOut", onComplete: () => this.audio.playClick() }), At.to(this.leftDustPivot.rotation, { z: -Math.PI / 2, duration: 0.8, delay: 0.6, ease: "power2.out" }), At.to(this.rightDustPivot.rotation, { z: Math.PI / 2, duration: 0.8, delay: 0.6, ease: "power2.out" }), At.to(this.topLidPivot.rotation, { x: Math.PI / 2, duration: 1, delay: 0.9, ease: "power3.inOut" }), At.to(this.tuckPivot.rotation, { x: Math.PI / 2, duration: 0.8, delay: 1.4, ease: "back.out(1.5)", onComplete: () => this.audio.playCardboardThud() }), At.to(this.cuttingMat.position, { y: -0.06, duration: 1 })) : (this.audio.playPaperSlide(), At.to(this.tuckPivot.rotation, { x: 0, duration: 0.6, ease: "power2.in" }), At.to(this.topLidPivot.rotation, { x: 0, duration: 0.9, delay: 0.2, ease: "power2.out" }), At.to(this.leftDustPivot.rotation, { z: 0, duration: 0.7, delay: 0.5, ease: "power2.out" }), At.to(this.rightDustPivot.rotation, { z: 0, duration: 0.7, delay: 0.5, ease: "power2.out" }), At.to(this.backPivot.rotation, { x: 0, duration: 1, delay: 0.7, ease: "power2.inOut" }), At.to(this.frontPivot.rotation, { x: 0, duration: 1, delay: 0.7, ease: "power2.inOut" }), At.to(this.leftPivot.rotation, { z: 0, duration: 1, delay: 0.7, ease: "power2.inOut" }), At.to(this.rightPivot.rotation, { z: 0, duration: 1, delay: 0.7, ease: "power2.inOut", onComplete: () => this.audio.playCardboardThud() }), At.to(this.cuttingMat.position, { y: -0.01, duration: 1 }));
  }
}
class av {
  constructor(t) {
    this.canvas = t, this.autoRotate = true, this.wireframe = false, this.currentPackageIndex = 0, this.init(), this.setupAudio(), this.setupPackages(), this.setupEvents(), this.animate();
  }
  init() {
    this.scene = new rd(), this.scene.background = new Ht("#F7F4EE"), this.camera = new an(40, window.innerWidth / window.innerHeight, 0.1, 100), this.camera.position.set(1.4, 2.6, 6), this.renderer = new Tg({ canvas: this.canvas, antialias: true, alpha: true, powerPreference: "high-performance" }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6)), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = Mh, this.renderer.toneMapping = _l, this.renderer.toneMappingExposure = 1.15, this.controls = new Ag(this.camera, this.canvas), this.controls.enableDamping = true, this.controls.dampingFactor = 0.05, this.controls.target.set(0, 0.35, 0), this.controls.maxPolarAngle = Math.PI / 2 - 0.05, this.controls.minDistance = 3, this.controls.maxDistance = 12, this.controls.autoRotate = true, this.controls.autoRotateSpeed = 0.6, this.controls.update(), this.lighting = new Qx(this.scene);
  }
  setupAudio() {
    this.audio = new tv();
  }
  setupPackages() {
    this.packageContainer = new ie(), this.scene.add(this.packageContainer), this.packages = [new ev(this.audio), new nv(this.audio), new iv(this.audio), new sv(this.audio), new rv(this.audio)], this.activePackage = this.packages[0], this.packageContainer.add(this.activePackage.group);
  }
  selectPackage(t) {
    if (t === this.currentPackageIndex) return;
    this.currentPackageIndex = t;
    const e = this.packages[t];
    this.audio.playPaperSlide(), At.to(this.activePackage.group.scale, { x: 1e-3, y: 1e-3, z: 1e-3, duration: 0.35, ease: "power2.in", onComplete: () => {
      this.activePackage && this.activePackage.isUnboxed && this.activePackage.unbox(false), this.packageContainer.remove(this.activePackage.group), this.activePackage = e, this.activePackage.isUnboxed && this.activePackage.unbox(false), this.activePackage.group.scale.set(1e-3, 1e-3, 1e-3), this.packageContainer.add(this.activePackage.group), At.to(this.activePackage.group.scale, { x: 1, y: 1, z: 1, duration: 0.55, ease: "back.out(1.6)" });
    } });
  }
  toggleUnbox() {
    return this.activePackage ? (this.activePackage.unbox(!this.activePackage.isUnboxed), this.activePackage.isUnboxed) : false;
  }
  toggleAutoRotate() {
    return this.autoRotate = !this.autoRotate, this.controls.autoRotate = this.autoRotate, this.autoRotate;
  }
  toggleWireframe() {
    return this.wireframe = !this.wireframe, this.scene.traverse((t) => {
      t.isMesh && t.material && (Array.isArray(t.material) ? t.material.forEach((e) => e.wireframe = this.wireframe) : t.material.wireframe = this.wireframe);
    }), this.wireframe;
  }
  resetCamera() {
    At.to(this.camera.position, { x: 1.4, y: 2.6, z: 6, duration: 1, ease: "power2.inOut", onUpdate: () => {
      this.controls.target.set(0, 0.35, 0), this.controls.update();
    } });
  }
  setLighting(t) {
    this.lighting.setMode(t);
  }
  setupEvents() {
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
  animate() {
    requestAnimationFrame(() => this.animate()), this.controls.update(), this.renderer.render(this.scene, this.camera);
  }
}
const ov = [{ cat: "Food & Gourmet Packaging", title: "Artisan Organic Infusion Box", titleAr: "\u062A\u0635\u0645\u064A\u0645 \u062A\u063A\u0644\u064A\u0641 \u0639\u0628\u0648\u0629 \u0623\u063A\u0630\u064A\u0629 \u0641\u0627\u062E\u0631\u0629", desc: "A custom structural drawer packaging featuring a slide-out rigid tray, botanical watercolor illustration sleeve, and warm terracotta color harmony. Engineered for premium shelf appeal and food-grade compliance.", stock: "350 GSM Natural Kraft + Ivory Board", finishing: "Soft Touch Matte + Spot UV Details", structure: "Sleeve & Drawer Tray (Sliding Box)", role: "Die-cut Layout & Visual Identity" }, { cat: "Luxury Cosmetic & Fragrance", title: "Royal Essence Rigid Gift Box", titleAr: "\u0639\u0644\u0628\u0629 \u0647\u062F\u0627\u064A\u0627 \u0648\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0645\u0644\u0643\u064A\u0629 \u0641\u0627\u062E\u0631\u0629", desc: "Premium two-piece clamshell box with magnetic flap closure, stamped with hot gold foil geometric framing. Houses an interior custom molded velvet insert and luxury glass essence bottle.", stock: "1200 GSM Greyboard + Matte Black Art Paper", finishing: "Hot Stamped Gold Foil + Embossed Crest", structure: "Magnetic Hinged Rigid Box", role: "Packaging Engineering & Luxury Branding" }, { cat: "Handmade Craft & Binding", title: "Artisan Watercolor Sketchbook", titleAr: "\u062F\u0641\u062A\u0631 \u0648\u0645\u0641\u0643\u0631\u0629 \u0643\u0627\u0646\u0633\u0648\u0646 \u0645\u0635\u0646\u0648\u0639\u0629 \u064A\u062F\u0648\u064A\u0627\u064B", desc: "Handcrafted notebook featuring hand-bound stitched spine, pure natural kraft hardcover, silk ribbon bookmark, and 300gsm cold-pressed watercolor paper containing original floral artworks.", stock: "300 GSM Heavy Watercolor Cold-Press Paper", finishing: "Exposed Hand-Sewn Thread Binding + Silk Ribbon", structure: "Hand-Bound Hardcover Book", role: "Bookbinding Artisan & Watercolor Painting" }, { cat: "Eco-Friendly Flexible Packaging", title: "Botanical Kraft Stand-Up Pouch", titleAr: "\u0643\u064A\u0633 \u0643\u0631\u0627\u0641\u062A \u0635\u062F\u064A\u0642 \u0644\u0644\u0628\u064A\u0626\u0629 \u0645\u0639 \u0642\u0641\u0644 \u0633\u062D\u0627\u0628", desc: "Sustainable stand-up flexible pouch (Doypack) crafted from biodegradable kraft paper with moisture barrier lining, laser-scored tear notches, and elegant minimalist botanical branding.", stock: "Multi-layer Recyclable Barrier Kraft Paper", finishing: "Eco-Matte Finish + Direct Plant Inks", structure: "Stand-Up Gusset Pouch with Zip-Lock", role: "Sustainable Packaging Design" }, { cat: "Industrial Structural Design", title: "Auto-Folding Dieline Template", titleAr: "\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0625\u0641\u0631\u0627\u062F \u0627\u0644\u0647\u0646\u062F\u0633\u064A \u0648\u0627\u0644\u0637\u064A \u0627\u0644\u0630\u0627\u062A\u064A", desc: "Precision packaging dieline with technical crease and cut markings, glue tabs, and tuck-in flaps. Demonstrates how a 2D flat cardboard die-cut transforms mathematically into a solid retail package.", stock: "380 GSM Solid Bleached Sulfate (SBS)", finishing: "Technical Proofing & Die-cut Calibration", structure: "Reverse Tuck End (RTE) Folding Carton", role: "CAD Structural Packaging Design" }];
window.addEventListener("DOMContentLoaded", () => {
  const s16 = document.getElementById("webgl"), t = new av(s16), e = document.getElementById("btnUnbox"), n = document.getElementById("unboxBtnText"), i = document.getElementById("unboxBtnSub"), r = document.getElementById("btnRotate"), a = document.getElementById("btnLight"), o = document.getElementById("btnWireframe"), l = document.getElementById("btnReset"), c = document.getElementById("btnAudio"), h = document.querySelectorAll(".package-card"), f = document.getElementById("projectDrawer"), u = document.getElementById("btnProjectDetails"), m = document.getElementById("btnCloseDrawer"), _ = document.getElementById("aboutModal"), g = document.getElementById("btnAbout"), p = document.getElementById("btnCloseModal");
  function d(b) {
    const A = ov[b];
    document.getElementById("drawerCat").textContent = A.cat, document.getElementById("drawerTitle").textContent = A.title, document.getElementById("drawerTitleAr").textContent = A.titleAr, document.getElementById("drawerDesc").textContent = A.desc, document.getElementById("specStock").textContent = A.stock, document.getElementById("specFinishing").textContent = A.finishing, document.getElementById("specStructure").textContent = A.structure, document.getElementById("specRole").textContent = A.role;
  }
  h.forEach((b) => {
    b.addEventListener("click", () => {
      const A = parseInt(b.dataset.index);
      h.forEach((w) => w.classList.remove("active")), b.classList.add("active"), t.selectPackage(A), d(A), n.textContent = A === 4 ? "Fold into 3D" : "Unbox Package", i.textContent = A === 4 ? "Click to fold cardboard" : "Click to reveal inner craft";
    });
  }), e.addEventListener("click", () => {
    const b = t.toggleUnbox(), A = t.currentPackageIndex === 4;
    b ? (n.textContent = A ? "Unfold to Flat" : "Close Package", i.textContent = A ? "Click to expand 2D net" : "Click to close lid") : (n.textContent = A ? "Fold into 3D" : "Unbox Package", i.textContent = A ? "Click to fold cardboard" : "Click to reveal inner craft");
  }), r.addEventListener("click", () => {
    const b = t.toggleAutoRotate();
    r.classList.toggle("active", b);
  });
  const M = ["warm", "daylight", "golden"];
  let E = 0;
  a.addEventListener("click", () => {
    E = (E + 1) % M.length, t.setLighting(M[E]);
  }), o.addEventListener("click", () => {
    const b = t.toggleWireframe();
    o.classList.toggle("active", b);
  }), l.addEventListener("click", () => {
    t.resetCamera();
  });
  let S = true;
  c.addEventListener("click", () => {
    S = !S, t.audio.enabled = S, c.style.opacity = S ? "1" : "0.4";
  }), u.addEventListener("click", () => {
    f.classList.add("open");
  }), m.addEventListener("click", () => {
    f.classList.remove("open");
  }), g.addEventListener("click", () => {
    _.classList.add("open");
  }), p.addEventListener("click", () => {
    _.classList.remove("open");
  }), _.addEventListener("click", (b) => {
    b.target === _ && _.classList.remove("open");
  }), d(0);
});
