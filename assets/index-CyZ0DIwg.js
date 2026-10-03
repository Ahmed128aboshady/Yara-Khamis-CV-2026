(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function e(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const s = e(i);
    fetch(i.href, s);
  }
})();
const pl = "183", Mr = { ROTATE: 0, DOLLY: 1, PAN: 2 }, gr = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, of = 0, nc = 1, lf = 2, Gs = 1, xh = 2, Kr = 3, Ei = 0, qe = 1, Pn = 2, ti = 0, Sr = 1, ic = 2, rc = 3, sc = 4, cf = 5, ki = 100, hf = 101, uf = 102, ff = 103, df = 104, pf = 200, mf = 201, _f = 202, gf = 203, oo = 204, lo = 205, xf = 206, vf = 207, Mf = 208, Sf = 209, yf = 210, Ef = 211, Tf = 212, bf = 213, Af = 214, co = 0, ho = 1, uo = 2, wr = 3, fo = 4, po = 5, mo = 6, _o = 7, vh = 0, wf = 1, Rf = 2, Nn = 0, Mh = 1, Sh = 2, yh = 3, ml = 4, Eh = 5, Th = 6, bh = 7, Ah = 300, Ki = 301, Rr = 302, ga = 303, xa = 304, ca = 306, es = 1e3, Qn = 1001, go = 1002, Ie = 1003, Cf = 1004, xs = 1005, Be = 1006, va = 1007, Vi = 1008, rn = 1009, wh = 1010, Rh = 1011, ns = 1012, _l = 1013, kn = 1014, Ln = 1015, ni = 1016, gl = 1017, xl = 1018, is = 1020, Ch = 35902, Ph = 35899, Dh = 1021, Lh = 1022, Tn = 1023, ii = 1026, Gi = 1027, Ih = 1028, vl = 1029, Cr = 1030, Ml = 1031, Sl = 1033, Hs = 33776, Ws = 33777, Xs = 33778, Ys = 33779, xo = 35840, vo = 35841, Mo = 35842, So = 35843, yo = 36196, Eo = 37492, To = 37496, bo = 37488, Ao = 37489, wo = 37490, Ro = 37491, Co = 37808, Po = 37809, Do = 37810, Lo = 37811, Io = 37812, Uo = 37813, No = 37814, Fo = 37815, Oo = 37816, Bo = 37817, ko = 37818, zo = 37819, Vo = 37820, Go = 37821, Ho = 36492, Wo = 36494, Xo = 36495, Yo = 36283, qo = 36284, Ko = 36285, jo = 36286, Pf = 3200, Uh = 0, Df = 1, mi = "", fn = "srgb", Pr = "srgb-linear", Js = "linear", Qt = "srgb", nr = 7680, ac = 519, Lf = 512, If = 513, Uf = 514, yl = 515, Nf = 516, Ff = 517, El = 518, Of = 519, oc = 35044, lc = "300 es", In = 2e3, rs = 2001;
function Bf(r16) {
  for (let t = r16.length - 1; t >= 0; --t) if (r16[t] >= 65535) return true;
  return false;
}
function Qs(r16) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r16);
}
function kf() {
  const r16 = Qs("canvas");
  return r16.style.display = "block", r16;
}
const cc = {};
function hc(...r16) {
  const t = "THREE." + r16.shift();
  console.log(t, ...r16);
}
function Nh(r16) {
  const t = r16[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const e = r16[1];
    e && e.isStackTrace ? r16[0] += " " + e.getLocation() : r16[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return r16;
}
function Rt(...r16) {
  r16 = Nh(r16);
  const t = "THREE." + r16.shift();
  {
    const e = r16[0];
    e && e.isStackTrace ? console.warn(e.getError(t)) : console.warn(t, ...r16);
  }
}
function jt(...r16) {
  r16 = Nh(r16);
  const t = "THREE." + r16.shift();
  {
    const e = r16[0];
    e && e.isStackTrace ? console.error(e.getError(t)) : console.error(t, ...r16);
  }
}
function ta(...r16) {
  const t = r16.join(" ");
  t in cc || (cc[t] = true, Rt(...r16));
}
function zf(r16, t, e) {
  return new Promise(function(n, i) {
    function s() {
      switch (r16.clientWaitSync(t, r16.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r16.WAIT_FAILED:
          i();
          break;
        case r16.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
const Vf = { [co]: ho, [uo]: mo, [fo]: _o, [wr]: po, [ho]: co, [mo]: uo, [_o]: fo, [po]: wr };
class Ji {
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
      const s = i.indexOf(e);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, t);
      t.target = null;
    }
  }
}
const Ne = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], qs = Math.PI / 180, Zo = 180 / Math.PI;
function ds() {
  const r16 = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ne[r16 & 255] + Ne[r16 >> 8 & 255] + Ne[r16 >> 16 & 255] + Ne[r16 >> 24 & 255] + "-" + Ne[t & 255] + Ne[t >> 8 & 255] + "-" + Ne[t >> 16 & 15 | 64] + Ne[t >> 24 & 255] + "-" + Ne[e & 63 | 128] + Ne[e >> 8 & 255] + "-" + Ne[e >> 16 & 255] + Ne[e >> 24 & 255] + Ne[n & 255] + Ne[n >> 8 & 255] + Ne[n >> 16 & 255] + Ne[n >> 24 & 255]).toLowerCase();
}
function zt(r16, t, e) {
  return Math.max(t, Math.min(e, r16));
}
function Gf(r16, t) {
  return (r16 % t + t) % t;
}
function Ma(r16, t, e) {
  return (1 - e) * r16 + e * t;
}
function kr(r16, t) {
  switch (t.constructor) {
    case Float32Array:
      return r16;
    case Uint32Array:
      return r16 / 4294967295;
    case Uint16Array:
      return r16 / 65535;
    case Uint8Array:
      return r16 / 255;
    case Int32Array:
      return Math.max(r16 / 2147483647, -1);
    case Int16Array:
      return Math.max(r16 / 32767, -1);
    case Int8Array:
      return Math.max(r16 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Xe(r16, t) {
  switch (t.constructor) {
    case Float32Array:
      return r16;
    case Uint32Array:
      return Math.round(r16 * 4294967295);
    case Uint16Array:
      return Math.round(r16 * 65535);
    case Uint8Array:
      return Math.round(r16 * 255);
    case Int32Array:
      return Math.round(r16 * 2147483647);
    case Int16Array:
      return Math.round(r16 * 32767);
    case Int8Array:
      return Math.round(r16 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Hf = { DEG2RAD: qs };
class Pt {
  constructor(t = 0, e = 0) {
    Pt.prototype.isVector2 = true, this.x = t, this.y = e;
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
    return this.x = zt(this.x, t.x, e.x), this.y = zt(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = zt(this.x, t, e), this.y = zt(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(zt(n, t, e));
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
    return Math.acos(zt(n, -1, 1));
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
    const n = Math.cos(e), i = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * i + t.x, this.y = s * i + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ti {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], f = n[i + 3], u = s[a + 0], p = s[a + 1], _ = s[a + 2], g = s[a + 3];
    if (f !== g || c !== u || l !== p || h !== _) {
      let d = c * u + l * p + h * _ + f * g;
      d < 0 && (u = -u, p = -p, _ = -_, g = -g, d = -d);
      let m = 1 - o;
      if (d < 0.9995) {
        const M = Math.acos(d), T = Math.sin(M);
        m = Math.sin(m * M) / T, o = Math.sin(o * M) / T, c = c * m + u * o, l = l * m + p * o, h = h * m + _ * o, f = f * m + g * o;
      } else {
        c = c * m + u * o, l = l * m + p * o, h = h * m + _ * o, f = f * m + g * o;
        const M = 1 / Math.sqrt(c * c + l * l + h * h + f * f);
        c *= M, l *= M, h *= M, f *= M;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = f;
  }
  static multiplyQuaternionsFlat(t, e, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], f = s[a], u = s[a + 1], p = s[a + 2], _ = s[a + 3];
    return t[e] = o * _ + h * f + c * p - l * u, t[e + 1] = c * _ + h * u + l * f - o * p, t[e + 2] = l * _ + h * p + o * u - c * f, t[e + 3] = h * _ - o * f - c * u - l * p, t;
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
    const n = t._x, i = t._y, s = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), f = o(s / 2), u = c(n / 2), p = c(i / 2), _ = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * f + l * p * _, this._y = l * p * f - u * h * _, this._z = l * h * _ + u * p * f, this._w = l * h * f - u * p * _;
        break;
      case "YXZ":
        this._x = u * h * f + l * p * _, this._y = l * p * f - u * h * _, this._z = l * h * _ - u * p * f, this._w = l * h * f + u * p * _;
        break;
      case "ZXY":
        this._x = u * h * f - l * p * _, this._y = l * p * f + u * h * _, this._z = l * h * _ + u * p * f, this._w = l * h * f - u * p * _;
        break;
      case "ZYX":
        this._x = u * h * f - l * p * _, this._y = l * p * f + u * h * _, this._z = l * h * _ - u * p * f, this._w = l * h * f + u * p * _;
        break;
      case "YZX":
        this._x = u * h * f + l * p * _, this._y = l * p * f + u * h * _, this._z = l * h * _ - u * p * f, this._w = l * h * f - u * p * _;
        break;
      case "XZY":
        this._x = u * h * f - l * p * _, this._y = l * p * f - u * h * _, this._z = l * h * _ + u * p * f, this._w = l * h * f + u * p * _;
        break;
      default:
        Rt("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], s = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], f = e[10], u = n + o + f;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (h - c) * p, this._y = (s - l) * p, this._z = (a - i) * p;
    } else if (n > o && n > f) {
      const p = 2 * Math.sqrt(1 + n - o - f);
      this._w = (h - c) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (s + l) / p;
    } else if (o > f) {
      const p = 2 * Math.sqrt(1 + o - n - f);
      this._w = (s - l) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (c + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - i) / p, this._x = (s + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(zt(this.dot(t), -1, 1)));
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
    const n = t._x, i = t._y, s = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    let n = t._x, i = t._y, s = t._z, a = t._w, o = this.dot(t);
    o < 0 && (n = -n, i = -i, s = -s, a = -a, o = -o);
    let c = 1 - e;
    if (o < 0.9995) {
      const l = Math.acos(o), h = Math.sin(l);
      c = Math.sin(c * l) / h, e = Math.sin(e * l) / h, this._x = this._x * c + n * e, this._y = this._y * c + i * e, this._z = this._z * c + s * e, this._w = this._w * c + a * e, this._onChangeCallback();
    } else this._x = this._x * c + n * e, this._y = this._y * c + i * e, this._z = this._z * c + s * e, this._w = this._w * c + a * e, this.normalize();
    return this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(i * Math.sin(t), i * Math.cos(t), s * Math.sin(e), s * Math.cos(e));
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
    return this.applyQuaternion(uc.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(uc.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * i, this.y = s[1] * e + s[4] * n + s[7] * i, this.z = s[2] * e + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, s = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * i - o * n), h = 2 * (o * e - s * i), f = 2 * (s * n - a * e);
    return this.x = e + c * l + a * f - o * h, this.y = n + c * h + o * l - s * f, this.z = i + c * f + s * h - a * l, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * i, this.y = s[1] * e + s[5] * n + s[9] * i, this.z = s[2] * e + s[6] * n + s[10] * i, this.normalize();
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
    return this.x = zt(this.x, t.x, e.x), this.y = zt(this.y, t.y, e.y), this.z = zt(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = zt(this.x, t, e), this.y = zt(this.y, t, e), this.z = zt(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(zt(n, t, e));
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
    const n = t.x, i = t.y, s = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Sa.copy(this).projectOnVector(t), this.sub(Sa);
  }
  reflect(t) {
    return this.sub(Sa.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(zt(n, -1, 1));
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
const Sa = new k(), uc = new Ti();
class Ut {
  constructor(t, e, n, i, s, a, o, c, l) {
    Ut.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, s, a, o, c, l);
  }
  set(t, e, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
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
    const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], f = n[7], u = n[2], p = n[5], _ = n[8], g = i[0], d = i[3], m = i[6], M = i[1], T = i[4], y = i[7], b = i[2], A = i[5], w = i[8];
    return s[0] = a * g + o * M + c * b, s[3] = a * d + o * T + c * A, s[6] = a * m + o * y + c * w, s[1] = l * g + h * M + f * b, s[4] = l * d + h * T + f * A, s[7] = l * m + h * y + f * w, s[2] = u * g + p * M + _ * b, s[5] = u * d + p * T + _ * A, s[8] = u * m + p * y + _ * w, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8];
    return e * a * h - e * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], f = h * a - o * l, u = o * c - h * s, p = l * s - a * c, _ = e * f + n * u + i * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return t[0] = f * g, t[1] = (i * l - h * n) * g, t[2] = (o * n - i * a) * g, t[3] = u * g, t[4] = (h * e - i * c) * g, t[5] = (i * s - o * e) * g, t[6] = p * g, t[7] = (n * c - l * e) * g, t[8] = (a * e - n * s) * g, this;
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
  setUvTransform(t, e, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -i * l, i * c, -i * (-l * a + c * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(ya.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(ya.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(ya.makeTranslation(t, e)), this;
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
const ya = new Ut(), fc = new Ut().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), dc = new Ut().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Wf() {
  const r16 = { enabled: true, workingColorSpace: Pr, spaces: {}, convert: function(i, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === Qt && (i.r = ei(i.r), i.g = ei(i.g), i.b = ei(i.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[s].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Qt && (i.r = yr(i.r), i.g = yr(i.g), i.b = yr(i.b))), i;
  }, workingToColorSpace: function(i, s) {
    return this.convert(i, this.workingColorSpace, s);
  }, colorSpaceToWorking: function(i, s) {
    return this.convert(i, s, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === mi ? Js : this.spaces[i].transfer;
  }, getToneMappingMode: function(i) {
    return this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(i, s = this.workingColorSpace) {
    return i.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, s, a) {
    return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(i, s) {
    return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), r16.workingToColorSpace(i, s);
  }, toWorkingColorSpace: function(i, s) {
    return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), r16.colorSpaceToWorking(i, s);
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return r16.define({ [Pr]: { primaries: t, whitePoint: n, transfer: Js, toXYZ: fc, fromXYZ: dc, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: fn }, outputColorSpaceConfig: { drawingBufferColorSpace: fn } }, [fn]: { primaries: t, whitePoint: n, transfer: Qt, toXYZ: fc, fromXYZ: dc, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: fn } } }), r16;
}
const qt = Wf();
function ei(r16) {
  return r16 < 0.04045 ? r16 * 0.0773993808 : Math.pow(r16 * 0.9478672986 + 0.0521327014, 2.4);
}
function yr(r16) {
  return r16 < 31308e-7 ? r16 * 12.92 : 1.055 * Math.pow(r16, 0.41666) - 0.055;
}
let ir;
class Xf {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      ir === void 0 && (ir = Qs("canvas")), ir.width = t.width, ir.height = t.height;
      const i = ir.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), n = ir;
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Qs("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = ei(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(ei(e[n] / 255) * 255) : e[n] = ei(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Yf = 0;
class Tl {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Yf++ }), this.uuid = ds(), this.data = t, this.dataReady = true, this.version = 0;
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
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? s.push(Ea(i[a].image)) : s.push(Ea(i[a]));
      } else s = Ea(i);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ea(r16) {
  return typeof HTMLImageElement < "u" && r16 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r16 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r16 instanceof ImageBitmap ? Xf.getDataURL(r16) : r16.data ? { data: Array.from(r16.data), width: r16.width, height: r16.height, type: r16.data.constructor.name } : (Rt("Texture: Unable to serialize Texture."), {});
}
let qf = 0;
const Ta = new k();
class ke extends Ji {
  constructor(t = ke.DEFAULT_IMAGE, e = ke.DEFAULT_MAPPING, n = Qn, i = Qn, s = Be, a = Vi, o = Tn, c = rn, l = ke.DEFAULT_ANISOTROPY, h = mi) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: qf++ }), this.uuid = ds(), this.name = "", this.source = new Tl(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Pt(0, 0), this.repeat = new Pt(1, 1), this.center = new Pt(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ut(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Ta).x;
  }
  get height() {
    return this.source.getSize(Ta).y;
  }
  get depth() {
    return this.source.getSize(Ta).z;
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
        Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);
        continue;
      }
      const i = this[e];
      if (i === void 0) {
        Rt(`Texture.setValues(): property '${e}' does not exist.`);
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
    if (this.mapping !== Ah) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case es:
        t.x = t.x - Math.floor(t.x);
        break;
      case Qn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case go:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case es:
        t.y = t.y - Math.floor(t.y);
        break;
      case Qn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case go:
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
ke.DEFAULT_IMAGE = null;
ke.DEFAULT_MAPPING = Ah;
ke.DEFAULT_ANISOTROPY = 1;
class de {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    de.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = i;
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
    const e = this.x, n = this.y, i = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * s, this;
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
    let e, n, i, s;
    const c = t.elements, l = c[0], h = c[4], f = c[8], u = c[1], p = c[5], _ = c[9], g = c[2], d = c[6], m = c[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - g) < 0.01 && Math.abs(_ - d) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + g) < 0.1 && Math.abs(_ + d) < 0.1 && Math.abs(l + p + m - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const T = (l + 1) / 2, y = (p + 1) / 2, b = (m + 1) / 2, A = (h + u) / 4, w = (f + g) / 4, x = (_ + d) / 4;
      return T > y && T > b ? T < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), i = A / n, s = w / n) : y > b ? y < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(y), n = A / i, s = x / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(b), n = w / s, i = x / s), this.set(n, i, s, e), this;
    }
    let M = Math.sqrt((d - _) * (d - _) + (f - g) * (f - g) + (u - h) * (u - h));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (d - _) / M, this.y = (f - g) / M, this.z = (u - h) / M, this.w = Math.acos((l + p + m - 1) / 2), this;
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
    return this.x = zt(this.x, t.x, e.x), this.y = zt(this.y, t.y, e.y), this.z = zt(this.z, t.z, e.z), this.w = zt(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = zt(this.x, t, e), this.y = zt(this.y, t, e), this.z = zt(this.z, t, e), this.w = zt(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(zt(n, t, e));
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
class Kf extends Ji {
  constructor(t = 1, e = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Be, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new de(0, 0, t, e), this.scissorTest = false, this.viewport = new de(0, 0, t, e), this.textures = [];
    const i = { width: t, height: e, depth: n.depth }, s = new ke(i), a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = { minFilter: Be, generateMipmaps: false, flipY: false, internalFormat: null };
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
      for (let i = 0, s = this.textures.length; i < s; i++) this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n, this.textures[i].isData3DTexture !== true && (this.textures[i].isArrayTexture = this.textures[i].image.depth > 1);
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
      this.textures[e].source = new Tl(i);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Fn extends Kf {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class Fh extends ke {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ie, this.minFilter = Ie, this.wrapR = Qn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class jf extends ke {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ie, this.minFilter = Ie, this.wrapR = Qn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class me {
  constructor(t, e, n, i, s, a, o, c, l, h, f, u, p, _, g, d) {
    me.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, s, a, o, c, l, h, f, u, p, _, g, d);
  }
  set(t, e, n, i, s, a, o, c, l, h, f, u, p, _, g, d) {
    const m = this.elements;
    return m[0] = t, m[4] = e, m[8] = n, m[12] = i, m[1] = s, m[5] = a, m[9] = o, m[13] = c, m[2] = l, m[6] = h, m[10] = f, m[14] = u, m[3] = p, m[7] = _, m[11] = g, m[15] = d, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new me().fromArray(this.elements);
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
    const e = this.elements, n = t.elements, i = 1 / rr.setFromMatrixColumn(t, 0).length(), s = 1 / rr.setFromMatrixColumn(t, 1).length(), a = 1 / rr.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), f = Math.sin(s);
    if (t.order === "XYZ") {
      const u = a * h, p = a * f, _ = o * h, g = o * f;
      e[0] = c * h, e[4] = -c * f, e[8] = l, e[1] = p + _ * l, e[5] = u - g * l, e[9] = -o * c, e[2] = g - u * l, e[6] = _ + p * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const u = c * h, p = c * f, _ = l * h, g = l * f;
      e[0] = u + g * o, e[4] = _ * o - p, e[8] = a * l, e[1] = a * f, e[5] = a * h, e[9] = -o, e[2] = p * o - _, e[6] = g + u * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const u = c * h, p = c * f, _ = l * h, g = l * f;
      e[0] = u - g * o, e[4] = -a * f, e[8] = _ + p * o, e[1] = p + _ * o, e[5] = a * h, e[9] = g - u * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const u = a * h, p = a * f, _ = o * h, g = o * f;
      e[0] = c * h, e[4] = _ * l - p, e[8] = u * l + g, e[1] = c * f, e[5] = g * l + u, e[9] = p * l - _, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const u = a * c, p = a * l, _ = o * c, g = o * l;
      e[0] = c * h, e[4] = g - u * f, e[8] = _ * f + p, e[1] = f, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = p * f + _, e[10] = u - g * f;
    } else if (t.order === "XZY") {
      const u = a * c, p = a * l, _ = o * c, g = o * l;
      e[0] = c * h, e[4] = -f, e[8] = l * h, e[1] = u * f + g, e[5] = a * h, e[9] = p * f - _, e[2] = _ * f - p, e[6] = o * h, e[10] = g * f + u;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Zf, t, $f);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return tn.subVectors(t, e), tn.lengthSq() === 0 && (tn.z = 1), tn.normalize(), li.crossVectors(n, tn), li.lengthSq() === 0 && (Math.abs(n.z) === 1 ? tn.x += 1e-4 : tn.z += 1e-4, tn.normalize(), li.crossVectors(n, tn)), li.normalize(), vs.crossVectors(tn, li), i[0] = li.x, i[4] = vs.x, i[8] = tn.x, i[1] = li.y, i[5] = vs.y, i[9] = tn.y, i[2] = li.z, i[6] = vs.z, i[10] = tn.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], f = n[5], u = n[9], p = n[13], _ = n[2], g = n[6], d = n[10], m = n[14], M = n[3], T = n[7], y = n[11], b = n[15], A = i[0], w = i[4], x = i[8], S = i[12], z = i[1], C = i[5], L = i[9], U = i[13], G = i[2], O = i[6], B = i[10], N = i[14], Z = i[3], $ = i[7], lt = i[11], ut = i[15];
    return s[0] = a * A + o * z + c * G + l * Z, s[4] = a * w + o * C + c * O + l * $, s[8] = a * x + o * L + c * B + l * lt, s[12] = a * S + o * U + c * N + l * ut, s[1] = h * A + f * z + u * G + p * Z, s[5] = h * w + f * C + u * O + p * $, s[9] = h * x + f * L + u * B + p * lt, s[13] = h * S + f * U + u * N + p * ut, s[2] = _ * A + g * z + d * G + m * Z, s[6] = _ * w + g * C + d * O + m * $, s[10] = _ * x + g * L + d * B + m * lt, s[14] = _ * S + g * U + d * N + m * ut, s[3] = M * A + T * z + y * G + b * Z, s[7] = M * w + T * C + y * O + b * $, s[11] = M * x + T * L + y * B + b * lt, s[15] = M * S + T * U + y * N + b * ut, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], s = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], f = t[6], u = t[10], p = t[14], _ = t[3], g = t[7], d = t[11], m = t[15], M = c * p - l * u, T = o * p - l * f, y = o * u - c * f, b = a * p - l * h, A = a * u - c * h, w = a * f - o * h;
    return e * (g * M - d * T + m * y) - n * (_ * M - d * b + m * A) + i * (_ * T - g * b + m * w) - s * (_ * y - g * A + d * w);
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
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], f = t[9], u = t[10], p = t[11], _ = t[12], g = t[13], d = t[14], m = t[15], M = e * o - n * a, T = e * c - i * a, y = e * l - s * a, b = n * c - i * o, A = n * l - s * o, w = i * l - s * c, x = h * g - f * _, S = h * d - u * _, z = h * m - p * _, C = f * d - u * g, L = f * m - p * g, U = u * m - p * d, G = M * U - T * L + y * C + b * z - A * S + w * x;
    if (G === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const O = 1 / G;
    return t[0] = (o * U - c * L + l * C) * O, t[1] = (i * L - n * U - s * C) * O, t[2] = (g * w - d * A + m * b) * O, t[3] = (u * A - f * w - p * b) * O, t[4] = (c * z - a * U - l * S) * O, t[5] = (e * U - i * z + s * S) * O, t[6] = (d * y - _ * w - m * T) * O, t[7] = (h * w - u * y + p * T) * O, t[8] = (a * L - o * z + l * x) * O, t[9] = (n * z - e * L - s * x) * O, t[10] = (_ * A - g * y + m * M) * O, t[11] = (f * y - h * A - p * M) * O, t[12] = (o * S - a * C - c * x) * O, t[13] = (e * C - n * S + i * x) * O, t[14] = (g * T - _ * b - d * M) * O, t[15] = (h * b - f * T + u * M) * O, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= s, e[1] *= n, e[5] *= i, e[9] *= s, e[2] *= n, e[6] *= i, e[10] *= s, e[3] *= n, e[7] *= i, e[11] *= s, this;
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
    const n = Math.cos(e), i = Math.sin(e), s = 1 - n, a = t.x, o = t.y, c = t.z, l = s * a, h = s * o;
    return this.set(l * a + n, l * o - i * c, l * c + i * o, 0, l * o + i * c, h * o + n, h * c - i * a, 0, l * c - i * o, h * c + i * a, s * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, s, a) {
    return this.set(1, n, s, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements, s = e._x, a = e._y, o = e._z, c = e._w, l = s + s, h = a + a, f = o + o, u = s * l, p = s * h, _ = s * f, g = a * h, d = a * f, m = o * f, M = c * l, T = c * h, y = c * f, b = n.x, A = n.y, w = n.z;
    return i[0] = (1 - (g + m)) * b, i[1] = (p + y) * b, i[2] = (_ - T) * b, i[3] = 0, i[4] = (p - y) * A, i[5] = (1 - (u + m)) * A, i[6] = (d + M) * A, i[7] = 0, i[8] = (_ + T) * w, i[9] = (d - M) * w, i[10] = (1 - (u + g)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    t.x = i[12], t.y = i[13], t.z = i[14];
    const s = this.determinant();
    if (s === 0) return n.set(1, 1, 1), e.identity(), this;
    let a = rr.set(i[0], i[1], i[2]).length();
    const o = rr.set(i[4], i[5], i[6]).length(), c = rr.set(i[8], i[9], i[10]).length();
    s < 0 && (a = -a), Mn.copy(this);
    const l = 1 / a, h = 1 / o, f = 1 / c;
    return Mn.elements[0] *= l, Mn.elements[1] *= l, Mn.elements[2] *= l, Mn.elements[4] *= h, Mn.elements[5] *= h, Mn.elements[6] *= h, Mn.elements[8] *= f, Mn.elements[9] *= f, Mn.elements[10] *= f, e.setFromRotationMatrix(Mn), n.x = a, n.y = o, n.z = c, this;
  }
  makePerspective(t, e, n, i, s, a, o = In, c = false) {
    const l = this.elements, h = 2 * s / (e - t), f = 2 * s / (n - i), u = (e + t) / (e - t), p = (n + i) / (n - i);
    let _, g;
    if (c) _ = s / (a - s), g = a * s / (a - s);
    else if (o === In) _ = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === rs) _ = -a / (a - s), g = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = f, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, s, a, o = In, c = false) {
    const l = this.elements, h = 2 / (e - t), f = 2 / (n - i), u = -(e + t) / (e - t), p = -(n + i) / (n - i);
    let _, g;
    if (c) _ = 1 / (a - s), g = a / (a - s);
    else if (o === In) _ = -2 / (a - s), g = -(a + s) / (a - s);
    else if (o === rs) _ = -1 / (a - s), g = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = f, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const rr = new k(), Mn = new me(), Zf = new k(0, 0, 0), $f = new k(1, 1, 1), li = new k(), vs = new k(), tn = new k(), pc = new me(), mc = new Ti();
class zn {
  constructor(t = 0, e = 0, n = 0, i = zn.DEFAULT_ORDER) {
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
    const i = t.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], f = i[2], u = i[6], p = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(zt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-zt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(zt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-zt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(zt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-zt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        Rt("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return pc.makeRotationFromQuaternion(t), this.setFromRotationMatrix(pc, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return mc.setFromEuler(this), this.setFromQuaternion(mc, t);
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
zn.DEFAULT_ORDER = "XYZ";
class Oh {
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
let Jf = 0;
const _c = new k(), sr = new Ti(), Yn = new me(), Ms = new k(), zr = new k(), Qf = new k(), td = new Ti(), gc = new k(1, 0, 0), xc = new k(0, 1, 0), vc = new k(0, 0, 1), Mc = { type: "added" }, ed = { type: "removed" }, ar = { type: "childadded", child: null }, ba = { type: "childremoved", child: null };
class ze extends Ji {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Jf++ }), this.uuid = ds(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ze.DEFAULT_UP.clone();
    const t = new k(), e = new zn(), n = new Ti(), i = new k(1, 1, 1);
    function s() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new me() }, normalMatrix: { value: new Ut() } }), this.matrix = new me(), this.matrixWorld = new me(), this.matrixAutoUpdate = ze.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Oh(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
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
    return sr.setFromAxisAngle(t, e), this.quaternion.multiply(sr), this;
  }
  rotateOnWorldAxis(t, e) {
    return sr.setFromAxisAngle(t, e), this.quaternion.premultiply(sr), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(gc, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(xc, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(vc, t);
  }
  translateOnAxis(t, e) {
    return _c.copy(t).applyQuaternion(this.quaternion), this.position.add(_c.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(gc, t);
  }
  translateY(t) {
    return this.translateOnAxis(xc, t);
  }
  translateZ(t) {
    return this.translateOnAxis(vc, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(Yn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Ms.copy(t) : Ms.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), zr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yn.lookAt(zr, Ms, this.up) : Yn.lookAt(Ms, zr, this.up), this.quaternion.setFromRotationMatrix(Yn), i && (Yn.extractRotation(i.matrixWorld), sr.setFromRotationMatrix(Yn), this.quaternion.premultiply(sr.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (jt("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Mc), ar.child = t, this.dispatchEvent(ar), ar.child = null) : jt("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(ed), ba.child = t, this.dispatchEvent(ba), ba.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), Yn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), Yn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Yn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Mc), ar.child = t, this.dispatchEvent(ar), ar.child = null, this;
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
    for (let s = 0, a = i.length; s < a; s++) i[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(zr, t, Qf), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(zr, td, t), t;
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
      const e = t.x, n = t.y, i = t.z, s = this.matrix.elements;
      s[12] += e - s[0] * e - s[4] * n - s[8] * i, s[13] += n - s[1] * e - s[5] * n - s[9] * i, s[14] += i - s[2] * e - s[6] * n - s[10] * i;
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
      for (let s = 0, a = i.length; s < a; s++) i[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), this.static !== false && (i.static = this.static), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.pivot !== null && (i.pivot = this.pivot.toArray()), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.morphTargetDictionary !== void 0 && (i.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (i.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), i.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(t), i.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, h = c.length; l < h; l++) {
          const f = c[l];
          s(t.shapes, f);
        }
        else s(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(s(t.materials, this.material[c]));
      i.material = o;
    } else i.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), f = a(t.shapes), u = a(t.skeletons), p = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
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
ze.DEFAULT_UP = new k(0, 1, 0);
ze.DEFAULT_MATRIX_AUTO_UPDATE = true;
ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
class ve extends ze {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const nd = { type: "move" };
class Aa {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ve(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ve(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new k(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new k()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ve(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new k(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new k()), this._grip;
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
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = true;
        for (const g of t.hand.values()) {
          const d = e.getJointPose(g, n), m = this._getHandJoint(l, g);
          d !== null && (m.matrix.fromArray(d.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = true, m.jointRadius = d.radius), m.visible = d !== null;
        }
        const h = l.joints["index-finger-tip"], f = l.joints["thumb-tip"], u = h.position.distanceTo(f.position), p = 0.02, _ = 5e-3;
        l.inputState.pinching && u > p + _ ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && u <= p - _ && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, s.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = false, s.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = false));
      o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(nd)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new ve();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const Bh = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, ci = { h: 0, s: 0, l: 0 }, Ss = { h: 0, s: 0, l: 0 };
function wa(r16, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r16 + (t - r16) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? r16 + (t - r16) * 6 * (2 / 3 - e) : r16;
}
class Vt {
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
  setHex(t, e = fn) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, qt.colorSpaceToWorking(this, e), this;
  }
  setRGB(t, e, n, i = qt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, qt.colorSpaceToWorking(this, i), this;
  }
  setHSL(t, e, n, i = qt.workingColorSpace) {
    if (t = Gf(t, 1), e = zt(e, 0, 1), n = zt(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = wa(a, s, t + 1 / 3), this.g = wa(a, s, t), this.b = wa(a, s, t - 1 / 3);
    }
    return qt.colorSpaceToWorking(this, i), this;
  }
  setStyle(t, e = fn) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && Rt("Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
          break;
        default:
          Rt("Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = i[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(s, 16), e);
      Rt("Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = fn) {
    const n = Bh[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : Rt("Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = ei(t.r), this.g = ei(t.g), this.b = ei(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = yr(t.r), this.g = yr(t.g), this.b = yr(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = fn) {
    return qt.workingToColorSpace(Fe.copy(this), t), Math.round(zt(Fe.r * 255, 0, 255)) * 65536 + Math.round(zt(Fe.g * 255, 0, 255)) * 256 + Math.round(zt(Fe.b * 255, 0, 255));
  }
  getHexString(t = fn) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = qt.workingColorSpace) {
    qt.workingToColorSpace(Fe.copy(this), e);
    const n = Fe.r, i = Fe.g, s = Fe.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a) c = 0, l = 0;
    else {
      const f = a - o;
      switch (l = h <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          c = (i - s) / f + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / f + 2;
          break;
        case s:
          c = (n - i) / f + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = h, t;
  }
  getRGB(t, e = qt.workingColorSpace) {
    return qt.workingToColorSpace(Fe.copy(this), e), t.r = Fe.r, t.g = Fe.g, t.b = Fe.b, t;
  }
  getStyle(t = fn) {
    qt.workingToColorSpace(Fe.copy(this), t);
    const e = Fe.r, n = Fe.g, i = Fe.b;
    return t !== fn ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(ci), this.setHSL(ci.h + t, ci.s + e, ci.l + n);
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
    this.getHSL(ci), t.getHSL(Ss);
    const n = Ma(ci.h, Ss.h, e), i = Ma(ci.s, Ss.s, e), s = Ma(ci.l, Ss.l, e);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, i = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * i, this.g = s[1] * e + s[4] * n + s[7] * i, this.b = s[2] * e + s[5] * n + s[8] * i, this;
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
const Fe = new Vt();
Vt.NAMES = Bh;
class id extends ze {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new zn(), this.environmentIntensity = 1, this.environmentRotation = new zn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
const Sn = new k(), qn = new k(), Ra = new k(), Kn = new k(), or = new k(), lr = new k(), Sc = new k(), Ca = new k(), Pa = new k(), Da = new k(), La = new de(), Ia = new de(), Ua = new de();
class En {
  constructor(t = new k(), e = new k(), n = new k()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), Sn.subVectors(t, e), i.cross(Sn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, s) {
    Sn.subVectors(i, e), qn.subVectors(n, e), Ra.subVectors(t, e);
    const a = Sn.dot(Sn), o = Sn.dot(qn), c = Sn.dot(Ra), l = qn.dot(qn), h = qn.dot(Ra), f = a * l - o * o;
    if (f === 0) return s.set(0, 0, 0), null;
    const u = 1 / f, p = (l * c - o * h) * u, _ = (a * h - o * c) * u;
    return s.set(1 - p - _, _, p);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, Kn) === null ? false : Kn.x >= 0 && Kn.y >= 0 && Kn.x + Kn.y <= 1;
  }
  static getInterpolation(t, e, n, i, s, a, o, c) {
    return this.getBarycoord(t, e, n, i, Kn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Kn.x), c.addScaledVector(a, Kn.y), c.addScaledVector(o, Kn.z), c);
  }
  static getInterpolatedAttribute(t, e, n, i, s, a) {
    return La.setScalar(0), Ia.setScalar(0), Ua.setScalar(0), La.fromBufferAttribute(t, e), Ia.fromBufferAttribute(t, n), Ua.fromBufferAttribute(t, i), a.setScalar(0), a.addScaledVector(La, s.x), a.addScaledVector(Ia, s.y), a.addScaledVector(Ua, s.z), a;
  }
  static isFrontFacing(t, e, n, i) {
    return Sn.subVectors(n, e), qn.subVectors(t, e), Sn.cross(qn).dot(i) < 0;
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
    return Sn.subVectors(this.c, this.b), qn.subVectors(this.a, this.b), Sn.cross(qn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return En.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return En.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, s) {
    return En.getInterpolation(t, this.a, this.b, this.c, e, n, i, s);
  }
  containsPoint(t) {
    return En.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return En.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    or.subVectors(i, n), lr.subVectors(s, n), Ca.subVectors(t, n);
    const c = or.dot(Ca), l = lr.dot(Ca);
    if (c <= 0 && l <= 0) return e.copy(n);
    Pa.subVectors(t, i);
    const h = or.dot(Pa), f = lr.dot(Pa);
    if (h >= 0 && f <= h) return e.copy(i);
    const u = c * f - h * l;
    if (u <= 0 && c >= 0 && h <= 0) return a = c / (c - h), e.copy(n).addScaledVector(or, a);
    Da.subVectors(t, s);
    const p = or.dot(Da), _ = lr.dot(Da);
    if (_ >= 0 && p <= _) return e.copy(s);
    const g = p * l - c * _;
    if (g <= 0 && l >= 0 && _ <= 0) return o = l / (l - _), e.copy(n).addScaledVector(lr, o);
    const d = h * _ - p * f;
    if (d <= 0 && f - h >= 0 && p - _ >= 0) return Sc.subVectors(s, i), o = (f - h) / (f - h + (p - _)), e.copy(i).addScaledVector(Sc, o);
    const m = 1 / (d + g + u);
    return a = g * m, o = u * m, e.copy(n).addScaledVector(or, a).addScaledVector(lr, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
class ps {
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
      const s = n.getAttribute("position");
      if (e === true && s !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, yn) : yn.fromBufferAttribute(s, a), yn.applyMatrix4(t.matrixWorld), this.expandByPoint(yn);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), ys.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ys.copy(n.boundingBox)), ys.applyMatrix4(t.matrixWorld), this.union(ys);
    }
    const i = t.children;
    for (let s = 0, a = i.length; s < a; s++) this.expandByObject(i[s], e);
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
    this.getCenter(Vr), Es.subVectors(this.max, Vr), cr.subVectors(t.a, Vr), hr.subVectors(t.b, Vr), ur.subVectors(t.c, Vr), hi.subVectors(hr, cr), ui.subVectors(ur, hr), Pi.subVectors(cr, ur);
    let e = [0, -hi.z, hi.y, 0, -ui.z, ui.y, 0, -Pi.z, Pi.y, hi.z, 0, -hi.x, ui.z, 0, -ui.x, Pi.z, 0, -Pi.x, -hi.y, hi.x, 0, -ui.y, ui.x, 0, -Pi.y, Pi.x, 0];
    return !Na(e, cr, hr, ur, Es) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Na(e, cr, hr, ur, Es)) ? false : (Ts.crossVectors(hi, ui), e = [Ts.x, Ts.y, Ts.z], Na(e, cr, hr, ur, Es));
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
    return this.isEmpty() ? this : (jn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), jn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), jn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), jn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), jn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), jn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), jn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), jn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(jn), this);
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
const jn = [new k(), new k(), new k(), new k(), new k(), new k(), new k(), new k()], yn = new k(), ys = new ps(), cr = new k(), hr = new k(), ur = new k(), hi = new k(), ui = new k(), Pi = new k(), Vr = new k(), Es = new k(), Ts = new k(), Di = new k();
function Na(r16, t, e, n, i) {
  for (let s = 0, a = r16.length - 3; s <= a; s += 3) {
    Di.fromArray(r16, s);
    const o = i.x * Math.abs(Di.x) + i.y * Math.abs(Di.y) + i.z * Math.abs(Di.z), c = t.dot(Di), l = e.dot(Di), h = n.dot(Di);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return false;
  }
  return true;
}
const Se = new k(), bs = new Pt();
let rd = 0;
class On {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: rd++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = oc, this.updateRanges = [], this.gpuType = Ln, this.version = 0;
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
    for (let i = 0, s = this.itemSize; i < s; i++) this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) bs.fromBufferAttribute(this, e), bs.applyMatrix3(t), this.setXY(e, bs.x, bs.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) Se.fromBufferAttribute(this, e), Se.applyMatrix3(t), this.setXYZ(e, Se.x, Se.y, Se.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) Se.fromBufferAttribute(this, e), Se.applyMatrix4(t), this.setXYZ(e, Se.x, Se.y, Se.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) Se.fromBufferAttribute(this, e), Se.applyNormalMatrix(t), this.setXYZ(e, Se.x, Se.y, Se.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) Se.fromBufferAttribute(this, e), Se.transformDirection(t), this.setXYZ(e, Se.x, Se.y, Se.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = kr(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Xe(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = kr(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Xe(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = kr(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Xe(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = kr(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Xe(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = kr(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Xe(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Xe(e, this.array), n = Xe(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = Xe(e, this.array), n = Xe(n, this.array), i = Xe(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, s) {
    return t *= this.itemSize, this.normalized && (e = Xe(e, this.array), n = Xe(n, this.array), i = Xe(i, this.array), s = Xe(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== oc && (t.usage = this.usage), t;
  }
}
class kh extends On {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class zh extends On {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class gn extends On {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
const sd = new ps(), Gr = new k(), Fa = new k();
class bl {
  constructor(t = new k(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : sd.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let s = 0, a = t.length; s < a; s++) i = Math.max(i, n.distanceToSquared(t[s]));
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
    Gr.subVectors(t, this.center);
    const e = Gr.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Gr, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Fa.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Gr.copy(t.center).add(Fa)), this.expandByPoint(Gr.copy(t.center).sub(Fa))), this);
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
let ad = 0;
const hn = new me(), Oa = new ze(), fr = new k(), en = new ps(), Hr = new ps(), Re = new k();
class Hn extends Ji {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: ad++ }), this.uuid = ds(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Bf(t) ? zh : kh)(t, 1) : this.index = t, this;
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
      const s = new Ut().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return hn.makeRotationFromQuaternion(t), this.applyMatrix4(hn), this;
  }
  rotateX(t) {
    return hn.makeRotationX(t), this.applyMatrix4(hn), this;
  }
  rotateY(t) {
    return hn.makeRotationY(t), this.applyMatrix4(hn), this;
  }
  rotateZ(t) {
    return hn.makeRotationZ(t), this.applyMatrix4(hn), this;
  }
  translate(t, e, n) {
    return hn.makeTranslation(t, e, n), this.applyMatrix4(hn), this;
  }
  scale(t, e, n) {
    return hn.makeScale(t, e, n), this.applyMatrix4(hn), this;
  }
  lookAt(t) {
    return Oa.lookAt(t), Oa.updateMatrix(), this.applyMatrix4(Oa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(fr).negate(), this.translate(fr.x, fr.y, fr.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let i = 0, s = t.length; i < s; i++) {
        const a = t[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new gn(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let i = 0; i < n; i++) {
        const s = t[i];
        e.setXYZ(i, s.x, s.y, s.z || 0);
      }
      t.length > e.count && Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ps());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new k(-1 / 0, -1 / 0, -1 / 0), new k(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, i = e.length; n < i; n++) {
        const s = e[n];
        en.setFromBufferAttribute(s), this.morphTargetsRelative ? (Re.addVectors(this.boundingBox.min, en.min), this.boundingBox.expandByPoint(Re), Re.addVectors(this.boundingBox.max, en.max), this.boundingBox.expandByPoint(Re)) : (this.boundingBox.expandByPoint(en.min), this.boundingBox.expandByPoint(en.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new bl());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new k(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (en.setFromBufferAttribute(t), e) for (let s = 0, a = e.length; s < a; s++) {
        const o = e[s];
        Hr.setFromBufferAttribute(o), this.morphTargetsRelative ? (Re.addVectors(en.min, Hr.min), en.expandByPoint(Re), Re.addVectors(en.max, Hr.max), en.expandByPoint(Re)) : (en.expandByPoint(Hr.min), en.expandByPoint(Hr.max));
      }
      en.getCenter(n);
      let i = 0;
      for (let s = 0, a = t.count; s < a; s++) Re.fromBufferAttribute(t, s), i = Math.max(i, n.distanceToSquared(Re));
      if (e) for (let s = 0, a = e.length; s < a; s++) {
        const o = e[s], c = this.morphTargetsRelative;
        for (let l = 0, h = o.count; l < h; l++) Re.fromBufferAttribute(o, l), c && (fr.fromBufferAttribute(t, l), Re.add(fr)), i = Math.max(i, n.distanceToSquared(Re));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, i = e.normal, s = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new On(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let x = 0; x < n.count; x++) o[x] = new k(), c[x] = new k();
    const l = new k(), h = new k(), f = new k(), u = new Pt(), p = new Pt(), _ = new Pt(), g = new k(), d = new k();
    function m(x, S, z) {
      l.fromBufferAttribute(n, x), h.fromBufferAttribute(n, S), f.fromBufferAttribute(n, z), u.fromBufferAttribute(s, x), p.fromBufferAttribute(s, S), _.fromBufferAttribute(s, z), h.sub(l), f.sub(l), p.sub(u), _.sub(u);
      const C = 1 / (p.x * _.y - _.x * p.y);
      isFinite(C) && (g.copy(h).multiplyScalar(_.y).addScaledVector(f, -p.y).multiplyScalar(C), d.copy(f).multiplyScalar(p.x).addScaledVector(h, -_.x).multiplyScalar(C), o[x].add(g), o[S].add(g), o[z].add(g), c[x].add(d), c[S].add(d), c[z].add(d));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: t.count }]);
    for (let x = 0, S = M.length; x < S; ++x) {
      const z = M[x], C = z.start, L = z.count;
      for (let U = C, G = C + L; U < G; U += 3) m(t.getX(U + 0), t.getX(U + 1), t.getX(U + 2));
    }
    const T = new k(), y = new k(), b = new k(), A = new k();
    function w(x) {
      b.fromBufferAttribute(i, x), A.copy(b);
      const S = o[x];
      T.copy(S), T.sub(b.multiplyScalar(b.dot(S))).normalize(), y.crossVectors(A, S);
      const C = y.dot(c[x]) < 0 ? -1 : 1;
      a.setXYZW(x, T.x, T.y, T.z, C);
    }
    for (let x = 0, S = M.length; x < S; ++x) {
      const z = M[x], C = z.start, L = z.count;
      for (let U = C, G = C + L; U < G; U += 3) w(t.getX(U + 0)), w(t.getX(U + 1)), w(t.getX(U + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new On(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let u = 0, p = n.count; u < p; u++) n.setXYZ(u, 0, 0, 0);
      const i = new k(), s = new k(), a = new k(), o = new k(), c = new k(), l = new k(), h = new k(), f = new k();
      if (t) for (let u = 0, p = t.count; u < p; u += 3) {
        const _ = t.getX(u + 0), g = t.getX(u + 1), d = t.getX(u + 2);
        i.fromBufferAttribute(e, _), s.fromBufferAttribute(e, g), a.fromBufferAttribute(e, d), h.subVectors(a, s), f.subVectors(i, s), h.cross(f), o.fromBufferAttribute(n, _), c.fromBufferAttribute(n, g), l.fromBufferAttribute(n, d), o.add(h), c.add(h), l.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, c.x, c.y, c.z), n.setXYZ(d, l.x, l.y, l.z);
      }
      else for (let u = 0, p = e.count; u < p; u += 3) i.fromBufferAttribute(e, u + 0), s.fromBufferAttribute(e, u + 1), a.fromBufferAttribute(e, u + 2), h.subVectors(a, s), f.subVectors(i, s), h.cross(f), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) Re.fromBufferAttribute(t, e), Re.normalize(), t.setXYZ(e, Re.x, Re.y, Re.z);
  }
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, h = o.itemSize, f = o.normalized, u = new l.constructor(c.length * h);
      let p = 0, _ = 0;
      for (let g = 0, d = c.length; g < d; g++) {
        o.isInterleavedBufferAttribute ? p = c[g] * o.data.stride + o.offset : p = c[g] * h;
        for (let m = 0; m < h; m++) u[_++] = l[p++];
      }
      return new On(u, h, f);
    }
    if (this.index === null) return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Hn(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, f = l.length; h < f; h++) {
        const u = l[h], p = t(u, n);
        c.push(p);
      }
      e.morphAttributes[o] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const i = {};
    let s = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let f = 0, u = l.length; f < u; f++) {
        const p = l[f];
        h.push(p.toJSON(t.data));
      }
      h.length > 0 && (i[c] = h, s = true);
    }
    s && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
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
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(e));
    }
    const s = t.morphAttributes;
    for (const l in s) {
      const h = [], f = s[l];
      for (let u = 0, p = f.length; u < p; u++) h.push(f[u].clone(e));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const f = a[l];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
let od = 0;
class Or extends Ji {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: od++ }), this.uuid = ds(), this.name = "", this.type = "Material", this.blending = Sr, this.side = Ei, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = oo, this.blendDst = lo, this.blendEquation = ki, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Vt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = wr, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = ac, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = nr, this.stencilZFail = nr, this.stencilZPass = nr, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        Rt(`Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const i = this[e];
      if (i === void 0) {
        Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Sr && (n.blending = this.blending), this.side !== Ei && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== oo && (n.blendSrc = this.blendSrc), this.blendDst !== lo && (n.blendDst = this.blendDst), this.blendEquation !== ki && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== wr && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ac && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== nr && (n.stencilFail = this.stencilFail), this.stencilZFail !== nr && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== nr && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.allowOverride === false && (n.allowOverride = false), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (e) {
      const s = i(t.textures), a = i(t.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
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
      for (let s = 0; s !== i; ++s) n[s] = e[s].clone();
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
const Zn = new k(), Ba = new k(), As = new k(), fi = new k(), ka = new k(), ws = new k(), za = new k();
class Vh {
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
    return this.origin.copy(this.at(t, Zn)), this;
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
    const e = Zn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Zn.copy(this.origin).addScaledVector(this.direction, e), Zn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Ba.copy(t).add(e).multiplyScalar(0.5), As.copy(e).sub(t).normalize(), fi.copy(this.origin).sub(Ba);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(As), o = fi.dot(this.direction), c = -fi.dot(As), l = fi.lengthSq(), h = Math.abs(1 - a * a);
    let f, u, p, _;
    if (h > 0) if (f = a * c - o, u = a * o - c, _ = s * h, f >= 0) if (u >= -_) if (u <= _) {
      const g = 1 / h;
      f *= g, u *= g, p = f * (f + a * u + 2 * o) + u * (a * f + u + 2 * c) + l;
    } else u = s, f = Math.max(0, -(a * u + o)), p = -f * f + u * (u + 2 * c) + l;
    else u = -s, f = Math.max(0, -(a * u + o)), p = -f * f + u * (u + 2 * c) + l;
    else u <= -_ ? (f = Math.max(0, -(-a * s + o)), u = f > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -f * f + u * (u + 2 * c) + l) : u <= _ ? (f = 0, u = Math.min(Math.max(-s, -c), s), p = u * (u + 2 * c) + l) : (f = Math.max(0, -(a * s + o)), u = f > 0 ? s : Math.min(Math.max(-s, -c), s), p = -f * f + u * (u + 2 * c) + l);
    else u = a > 0 ? -s : s, f = Math.max(0, -(a * u + o)), p = -f * f + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), i && i.copy(Ba).addScaledVector(As, u), p;
  }
  intersectSphere(t, e) {
    Zn.subVectors(t.center, this.origin);
    const n = Zn.dot(this.direction), i = Zn.dot(Zn) - n * n, s = t.radius * t.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
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
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), h >= 0 ? (s = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (s = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), f >= 0 ? (o = (t.min.z - u.z) * f, c = (t.max.z - u.z) * f) : (o = (t.max.z - u.z) * f, c = (t.min.z - u.z) * f), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Zn) !== null;
  }
  intersectTriangle(t, e, n, i, s) {
    ka.subVectors(e, t), ws.subVectors(n, t), za.crossVectors(ka, ws);
    let a = this.direction.dot(za), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    fi.subVectors(this.origin, t);
    const c = o * this.direction.dot(ws.crossVectors(fi, ws));
    if (c < 0) return null;
    const l = o * this.direction.dot(ka.cross(fi));
    if (l < 0 || c + l > a) return null;
    const h = -o * fi.dot(za);
    return h < 0 ? null : this.at(h / a, s);
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
class Al extends Or {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Vt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new zn(), this.combine = vh, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const yc = new me(), Li = new Vh(), Rs = new bl(), Ec = new k(), Cs = new k(), Ps = new k(), Ds = new k(), Va = new k(), Ls = new k(), Tc = new k(), Is = new k();
class Gt extends ze {
  constructor(t = new Hn(), e = new Al()) {
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
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ls.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], f = s[c];
        h !== 0 && (Va.fromBufferAttribute(f, t), a ? Ls.addScaledVector(Va, h) : Ls.addScaledVector(Va.sub(e), h));
      }
      e.add(Ls);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Rs.copy(n.boundingSphere), Rs.applyMatrix4(s), Li.copy(t.ray).recast(t.near), !(Rs.containsPoint(Li.origin) === false && (Li.intersectSphere(Rs, Ec) === null || Li.origin.distanceToSquared(Ec) > (t.far - t.near) ** 2)) && (yc.copy(s).invert(), Li.copy(t.ray).applyMatrix4(yc), !(n.boundingBox !== null && Li.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, Li)));
  }
  _computeIntersections(t, e, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, f = s.attributes.normal, u = s.groups, p = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let _ = 0, g = u.length; _ < g; _++) {
      const d = u[_], m = a[d.materialIndex], M = Math.max(d.start, p.start), T = Math.min(o.count, Math.min(d.start + d.count, p.start + p.count));
      for (let y = M, b = T; y < b; y += 3) {
        const A = o.getX(y), w = o.getX(y + 1), x = o.getX(y + 2);
        i = Us(this, m, t, n, l, h, f, A, w, x), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = d.materialIndex, e.push(i));
      }
    }
    else {
      const _ = Math.max(0, p.start), g = Math.min(o.count, p.start + p.count);
      for (let d = _, m = g; d < m; d += 3) {
        const M = o.getX(d), T = o.getX(d + 1), y = o.getX(d + 2);
        i = Us(this, a, t, n, l, h, f, M, T, y), i && (i.faceIndex = Math.floor(d / 3), e.push(i));
      }
    }
    else if (c !== void 0) if (Array.isArray(a)) for (let _ = 0, g = u.length; _ < g; _++) {
      const d = u[_], m = a[d.materialIndex], M = Math.max(d.start, p.start), T = Math.min(c.count, Math.min(d.start + d.count, p.start + p.count));
      for (let y = M, b = T; y < b; y += 3) {
        const A = y, w = y + 1, x = y + 2;
        i = Us(this, m, t, n, l, h, f, A, w, x), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = d.materialIndex, e.push(i));
      }
    }
    else {
      const _ = Math.max(0, p.start), g = Math.min(c.count, p.start + p.count);
      for (let d = _, m = g; d < m; d += 3) {
        const M = d, T = d + 1, y = d + 2;
        i = Us(this, a, t, n, l, h, f, M, T, y), i && (i.faceIndex = Math.floor(d / 3), e.push(i));
      }
    }
  }
}
function ld(r16, t, e, n, i, s, a, o) {
  let c;
  if (t.side === qe ? c = n.intersectTriangle(a, s, i, true, o) : c = n.intersectTriangle(i, s, a, t.side === Ei, o), c === null) return null;
  Is.copy(o), Is.applyMatrix4(r16.matrixWorld);
  const l = e.ray.origin.distanceTo(Is);
  return l < e.near || l > e.far ? null : { distance: l, point: Is.clone(), object: r16 };
}
function Us(r16, t, e, n, i, s, a, o, c, l) {
  r16.getVertexPosition(o, Cs), r16.getVertexPosition(c, Ps), r16.getVertexPosition(l, Ds);
  const h = ld(r16, t, e, n, Cs, Ps, Ds, Tc);
  if (h) {
    const f = new k();
    En.getBarycoord(Tc, Cs, Ps, Ds, f), i && (h.uv = En.getInterpolatedAttribute(i, o, c, l, f, new Pt())), s && (h.uv1 = En.getInterpolatedAttribute(s, o, c, l, f, new Pt())), a && (h.normal = En.getInterpolatedAttribute(a, o, c, l, f, new k()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = { a: o, b: c, c: l, normal: new k(), materialIndex: 0 };
    En.getNormal(Cs, Ps, Ds, u.normal), h.face = u, h.barycoord = f;
  }
  return h;
}
class cd extends ke {
  constructor(t = null, e = 1, n = 1, i, s, a, o, c, l = Ie, h = Ie, f, u) {
    super(null, a, o, c, l, h, i, s, f, u), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const Ga = new k(), hd = new k(), ud = new Ut();
class pi {
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
    const i = Ga.subVectors(n, e).cross(hd.subVectors(t, e)).normalize();
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
    const n = t.delta(Ga), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
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
    const n = e || ud.getNormalMatrix(t), i = this.coplanarPoint(Ga).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
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
const Ii = new bl(), fd = new Pt(0.5, 0.5), Ns = new k();
class wl {
  constructor(t = new pi(), e = new pi(), n = new pi(), i = new pi(), s = new pi(), a = new pi()) {
    this.planes = [t, e, n, i, s, a];
  }
  set(t, e, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = In, n = false) {
    const i = this.planes, s = t.elements, a = s[0], o = s[1], c = s[2], l = s[3], h = s[4], f = s[5], u = s[6], p = s[7], _ = s[8], g = s[9], d = s[10], m = s[11], M = s[12], T = s[13], y = s[14], b = s[15];
    if (i[0].setComponents(l - a, p - h, m - _, b - M).normalize(), i[1].setComponents(l + a, p + h, m + _, b + M).normalize(), i[2].setComponents(l + o, p + f, m + g, b + T).normalize(), i[3].setComponents(l - o, p - f, m - g, b - T).normalize(), n) i[4].setComponents(c, u, d, y).normalize(), i[5].setComponents(l - c, p - u, m - d, b - y).normalize();
    else if (i[4].setComponents(l - c, p - u, m - d, b - y).normalize(), e === In) i[5].setComponents(l + c, p + u, m + d, b + y).normalize();
    else if (e === rs) i[5].setComponents(c, u, d, y).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Ii);
  }
  intersectsSprite(t) {
    Ii.center.set(0, 0, 0);
    const e = fd.distanceTo(t.center);
    return Ii.radius = 0.7071067811865476 + e, Ii.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ii);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let s = 0; s < 6; s++) if (e[s].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (Ns.x = i.normal.x > 0 ? t.max.x : t.min.x, Ns.y = i.normal.y > 0 ? t.max.y : t.min.y, Ns.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Ns) < 0) return false;
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
class Gh extends ke {
  constructor(t = [], e = Ki, n, i, s, a, o, c, l, h) {
    super(t, e, n, i, s, a, o, c, l, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Wr extends ke {
  constructor(t, e, n, i, s, a, o, c, l) {
    super(t, e, n, i, s, a, o, c, l), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class ss extends ke {
  constructor(t, e, n = kn, i, s, a, o = Ie, c = Ie, l, h = ii, f = 1) {
    if (h !== ii && h !== Gi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: t, height: e, depth: f };
    super(u, i, s, a, o, c, h, n, l), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new Tl(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class dd extends ss {
  constructor(t, e = kn, n = Ki, i, s, a = Ie, o = Ie, c, l = ii) {
    const h = { width: t, height: t, depth: 1 }, f = [h, h, h, h, h, h];
    super(t, t, e, n, i, s, a, o, c, l), this.image = f, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Hh extends ke {
  constructor(t = null) {
    super(), this.sourceTexture = t, this.isExternalTexture = true;
  }
  copy(t) {
    return super.copy(t), this.sourceTexture = t.sourceTexture, this;
  }
}
class Le extends Hn {
  constructor(t = 1, e = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: s, depthSegments: a };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], f = [];
    let u = 0, p = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, s, 0), _("z", "y", "x", 1, -1, n, e, -t, a, s, 1), _("x", "z", "y", 1, 1, t, n, e, i, a, 2), _("x", "z", "y", 1, -1, t, n, -e, i, a, 3), _("x", "y", "z", 1, -1, t, e, n, i, s, 4), _("x", "y", "z", -1, -1, t, e, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new gn(l, 3)), this.setAttribute("normal", new gn(h, 3)), this.setAttribute("uv", new gn(f, 2));
    function _(g, d, m, M, T, y, b, A, w, x, S) {
      const z = y / w, C = b / x, L = y / 2, U = b / 2, G = A / 2, O = w + 1, B = x + 1;
      let N = 0, Z = 0;
      const $ = new k();
      for (let lt = 0; lt < B; lt++) {
        const ut = lt * C - U;
        for (let at = 0; at < O; at++) {
          const Dt = at * z - L;
          $[g] = Dt * M, $[d] = ut * T, $[m] = G, l.push($.x, $.y, $.z), $[g] = 0, $[d] = 0, $[m] = A > 0 ? 1 : -1, h.push($.x, $.y, $.z), f.push(at / w), f.push(1 - lt / x), N += 1;
        }
      }
      for (let lt = 0; lt < x; lt++) for (let ut = 0; ut < w; ut++) {
        const at = u + ut + O * lt, Dt = u + ut + O * (lt + 1), Wt = u + (ut + 1) + O * (lt + 1), Xt = u + (ut + 1) + O * lt;
        c.push(at, Dt, Xt), c.push(Dt, Wt, Xt), Z += 6;
      }
      o.addGroup(p, Z, S), p += Z, u += N;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Le(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
class ji extends Hn {
  constructor(t = 1, e = 1, n = 1, i = 32, s = 1, a = false, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: i, heightSegments: s, openEnded: a, thetaStart: o, thetaLength: c };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], f = [], u = [], p = [];
    let _ = 0;
    const g = [], d = n / 2;
    let m = 0;
    M(), a === false && (t > 0 && T(true), e > 0 && T(false)), this.setIndex(h), this.setAttribute("position", new gn(f, 3)), this.setAttribute("normal", new gn(u, 3)), this.setAttribute("uv", new gn(p, 2));
    function M() {
      const y = new k(), b = new k();
      let A = 0;
      const w = (e - t) / n;
      for (let x = 0; x <= s; x++) {
        const S = [], z = x / s, C = z * (e - t) + t;
        for (let L = 0; L <= i; L++) {
          const U = L / i, G = U * c + o, O = Math.sin(G), B = Math.cos(G);
          b.x = C * O, b.y = -z * n + d, b.z = C * B, f.push(b.x, b.y, b.z), y.set(O, w, B).normalize(), u.push(y.x, y.y, y.z), p.push(U, 1 - z), S.push(_++);
        }
        g.push(S);
      }
      for (let x = 0; x < i; x++) for (let S = 0; S < s; S++) {
        const z = g[S][x], C = g[S + 1][x], L = g[S + 1][x + 1], U = g[S][x + 1];
        (t > 0 || S !== 0) && (h.push(z, C, U), A += 3), (e > 0 || S !== s - 1) && (h.push(C, L, U), A += 3);
      }
      l.addGroup(m, A, 0), m += A;
    }
    function T(y) {
      const b = _, A = new Pt(), w = new k();
      let x = 0;
      const S = y === true ? t : e, z = y === true ? 1 : -1;
      for (let L = 1; L <= i; L++) f.push(0, d * z, 0), u.push(0, z, 0), p.push(0.5, 0.5), _++;
      const C = _;
      for (let L = 0; L <= i; L++) {
        const G = L / i * c + o, O = Math.cos(G), B = Math.sin(G);
        w.x = S * B, w.y = d * z, w.z = S * O, f.push(w.x, w.y, w.z), u.push(0, z, 0), A.x = O * 0.5 + 0.5, A.y = B * 0.5 * z + 0.5, p.push(A.x, A.y), _++;
      }
      for (let L = 0; L < i; L++) {
        const U = b + L, G = C + L;
        y === true ? h.push(G, G + 1, U) : h.push(G + 1, G, U), x += 3;
      }
      l.addGroup(m, x, y === true ? 1 : 2), m += x;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ji(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class ea extends ji {
  constructor(t = 1, e = 1, n = 32, i = 1, s = false, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, i, s, a, o), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: n, heightSegments: i, openEnded: s, thetaStart: a, thetaLength: o };
  }
  static fromJSON(t) {
    return new ea(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class dn extends Hn {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i };
    const s = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, f = t / o, u = e / c, p = [], _ = [], g = [], d = [];
    for (let m = 0; m < h; m++) {
      const M = m * u - a;
      for (let T = 0; T < l; T++) {
        const y = T * f - s;
        _.push(y, -M, 0), g.push(0, 0, 1), d.push(T / o), d.push(1 - m / c);
      }
    }
    for (let m = 0; m < c; m++) for (let M = 0; M < o; M++) {
      const T = M + l * m, y = M + l * (m + 1), b = M + 1 + l * (m + 1), A = M + 1 + l * m;
      p.push(T, y, A), p.push(y, b, A);
    }
    this.setIndex(p), this.setAttribute("position", new gn(_, 3)), this.setAttribute("normal", new gn(g, 3)), this.setAttribute("uv", new gn(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new dn(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class pd extends Or {
  constructor(t) {
    super(), this.isShadowMaterial = true, this.type = "ShadowMaterial", this.color = new Vt(0), this.transparent = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this;
  }
}
function Dr(r16) {
  const t = {};
  for (const e in r16) {
    t[e] = {};
    for (const n in r16[e]) {
      const i = r16[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function He(r16) {
  const t = {};
  for (let e = 0; e < r16.length; e++) {
    const n = Dr(r16[e]);
    for (const i in n) t[i] = n[i];
  }
  return t;
}
function md(r16) {
  const t = [];
  for (let e = 0; e < r16.length; e++) t.push(r16[e].clone());
  return t;
}
function Wh(r16) {
  const t = r16.getRenderTarget();
  return t === null ? r16.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : qt.workingColorSpace;
}
const _d = { clone: Dr, merge: He };
var gd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, xd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Vn extends Or {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = gd, this.fragmentShader = xd, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Dr(t.uniforms), this.uniformsGroups = md(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this.defaultAttributeValues = Object.assign({}, t.defaultAttributeValues), this.index0AttributeName = t.index0AttributeName, this.uniformsNeedUpdate = t.uniformsNeedUpdate, this;
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
class vd extends Vn {
  constructor(t) {
    super(t), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class sn extends Or {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Vt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Vt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Uh, this.normalScale = new Pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new zn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Er extends sn {
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Pt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return zt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(e) {
      this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Vt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Vt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Vt(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
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
class Md extends Or {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Pf, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Sd extends Or {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class Xh extends ze {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Vt(t), this.intensity = e;
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
const Ha = new me(), bc = new k(), Ac = new k();
class yd {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Pt(512, 512), this.mapType = rn, this.map = null, this.mapPass = null, this.matrix = new me(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new wl(), this._frameExtents = new Pt(1, 1), this._viewportCount = 1, this._viewports = [new de(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    bc.setFromMatrixPosition(t.matrixWorld), e.position.copy(bc), Ac.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Ac), e.updateMatrixWorld(), Ha.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ha, e.coordinateSystem, e.reversedDepth), e.coordinateSystem === rs || e.reversedDepth ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Ha);
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
const Fs = new k(), Os = new Ti(), An = new k();
class Yh extends ze {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new me(), this.projectionMatrix = new me(), this.projectionMatrixInverse = new me(), this.coordinateSystem = In, this._reversedDepth = false;
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
    super.updateMatrixWorld(t), this.matrixWorld.decompose(Fs, Os, An), An.x === 1 && An.y === 1 && An.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Fs, Os, An.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorld.decompose(Fs, Os, An), An.x === 1 && An.y === 1 && An.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Fs, Os, An.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const di = new k(), wc = new Pt(), Rc = new Pt();
class pn extends Yh {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Zo * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(qs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Zo * 2 * Math.atan(Math.tan(qs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    di.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(di.x, di.y).multiplyScalar(-t / di.z), di.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(di.x, di.y).multiplyScalar(-t / di.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, wc, Rc), e.subVectors(Rc, wc);
  }
  setViewOffset(t, e, n, i, s, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(qs * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, e -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
class Rl extends Yh {
  constructor(t = -1, e = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = i + e, c = i - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class Ed extends yd {
  constructor() {
    super(new Rl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Wa extends Xh {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ze.DEFAULT_UP), this.updateMatrix(), this.target = new ze(), this.shadow = new Ed();
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
class Td extends Xh {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
const dr = -90, pr = 1;
class bd extends ze {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new pn(dr, pr, t, e);
    i.layers = this.layers, this.add(i);
    const s = new pn(dr, pr, t, e);
    s.layers = this.layers, this.add(s);
    const a = new pn(dr, pr, t, e);
    a.layers = this.layers, this.add(a);
    const o = new pn(dr, pr, t, e);
    o.layers = this.layers, this.add(o);
    const c = new pn(dr, pr, t, e);
    c.layers = this.layers, this.add(c);
    const l = new pn(dr, pr, t, e);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, i, s, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === In) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === rs) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e) this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, f = t.getRenderTarget(), u = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = false;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false;
    let d = false;
    t.isWebGLRenderer === true ? d = t.state.buffers.depth.getReversed() : d = t.reversedDepthBuffer, t.setRenderTarget(n, 0, i), d && t.autoClear === false && t.clearDepth(), t.render(e, s), t.setRenderTarget(n, 1, i), d && t.autoClear === false && t.clearDepth(), t.render(e, a), t.setRenderTarget(n, 2, i), d && t.autoClear === false && t.clearDepth(), t.render(e, o), t.setRenderTarget(n, 3, i), d && t.autoClear === false && t.clearDepth(), t.render(e, c), t.setRenderTarget(n, 4, i), d && t.autoClear === false && t.clearDepth(), t.render(e, l), n.texture.generateMipmaps = g, t.setRenderTarget(n, 5, i), d && t.autoClear === false && t.clearDepth(), t.render(e, h), t.setRenderTarget(f, u, p), t.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Ad extends pn {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
  }
}
class Cc {
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
    return this.phi = zt(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(zt(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wd extends Ji {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(t) {
    if (t === void 0) {
      Rt("Controls: connect() now requires an element.");
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
function Pc(r16, t, e, n) {
  const i = Rd(n);
  switch (e) {
    case Dh:
      return r16 * t;
    case Ih:
      return r16 * t / i.components * i.byteLength;
    case vl:
      return r16 * t / i.components * i.byteLength;
    case Cr:
      return r16 * t * 2 / i.components * i.byteLength;
    case Ml:
      return r16 * t * 2 / i.components * i.byteLength;
    case Lh:
      return r16 * t * 3 / i.components * i.byteLength;
    case Tn:
      return r16 * t * 4 / i.components * i.byteLength;
    case Sl:
      return r16 * t * 4 / i.components * i.byteLength;
    case Hs:
    case Ws:
      return Math.floor((r16 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Xs:
    case Ys:
      return Math.floor((r16 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case vo:
    case So:
      return Math.max(r16, 16) * Math.max(t, 8) / 4;
    case xo:
    case Mo:
      return Math.max(r16, 8) * Math.max(t, 8) / 2;
    case yo:
    case Eo:
    case bo:
    case Ao:
      return Math.floor((r16 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case To:
    case wo:
    case Ro:
      return Math.floor((r16 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Co:
      return Math.floor((r16 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Po:
      return Math.floor((r16 + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Do:
      return Math.floor((r16 + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Lo:
      return Math.floor((r16 + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Io:
      return Math.floor((r16 + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Uo:
      return Math.floor((r16 + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case No:
      return Math.floor((r16 + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Fo:
      return Math.floor((r16 + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Oo:
      return Math.floor((r16 + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Bo:
      return Math.floor((r16 + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ko:
      return Math.floor((r16 + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case zo:
      return Math.floor((r16 + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Vo:
      return Math.floor((r16 + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Go:
      return Math.floor((r16 + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ho:
    case Wo:
    case Xo:
      return Math.ceil(r16 / 4) * Math.ceil(t / 4) * 16;
    case Yo:
    case qo:
      return Math.ceil(r16 / 4) * Math.ceil(t / 4) * 8;
    case Ko:
    case jo:
      return Math.ceil(r16 / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Rd(r16) {
  switch (r16) {
    case rn:
    case wh:
      return { byteLength: 1, components: 1 };
    case ns:
    case Rh:
    case ni:
      return { byteLength: 2, components: 1 };
    case gl:
    case xl:
      return { byteLength: 2, components: 4 };
    case kn:
    case _l:
    case Ln:
      return { byteLength: 4, components: 1 };
    case Ch:
    case Ph:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r16}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: pl } }));
typeof window < "u" && (window.__THREE__ ? Rt("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = pl);
function qh() {
  let r16 = null, t = false, e = null, n = null;
  function i(s, a) {
    e(s, a), n = r16.requestAnimationFrame(i);
  }
  return { start: function() {
    t !== true && e !== null && (n = r16.requestAnimationFrame(i), t = true);
  }, stop: function() {
    r16.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(s) {
    e = s;
  }, setContext: function(s) {
    r16 = s;
  } };
}
function Cd(r16) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, h = o.usage, f = l.byteLength, u = r16.createBuffer();
    r16.bindBuffer(c, u), r16.bufferData(c, l, h), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array) p = r16.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) p = r16.HALF_FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? p = r16.HALF_FLOAT : p = r16.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) p = r16.SHORT;
    else if (l instanceof Uint32Array) p = r16.UNSIGNED_INT;
    else if (l instanceof Int32Array) p = r16.INT;
    else if (l instanceof Int8Array) p = r16.BYTE;
    else if (l instanceof Uint8Array) p = r16.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) p = r16.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: u, type: p, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: f };
  }
  function n(o, c, l) {
    const h = c.array, f = c.updateRanges;
    if (r16.bindBuffer(l, o), f.length === 0) r16.bufferSubData(l, 0, h);
    else {
      f.sort((p, _) => p.start - _.start);
      let u = 0;
      for (let p = 1; p < f.length; p++) {
        const _ = f[u], g = f[p];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++u, f[u] = g);
      }
      f.length = u + 1;
      for (let p = 0, _ = f.length; p < _; p++) {
        const g = f[p];
        r16.bufferSubData(l, g.start * h.BYTES_PER_ELEMENT, h, g.start, g.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (r16.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const l = t.get(o);
    if (l === void 0) t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return { get: i, remove: s, update: a };
}
var Pd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Dd = `#ifdef USE_ALPHAHASH
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
#endif`, Ld = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Id = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ud = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Nd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Fd = `#ifdef USE_AOMAP
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
#endif`, Od = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Bd = `#ifdef USE_BATCHING
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
#endif`, kd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, zd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Vd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Gd = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Hd = `#ifdef USE_IRIDESCENCE
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
#endif`, Wd = `#ifdef USE_BUMPMAP
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
#endif`, Xd = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Yd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, qd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Kd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, jd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Zd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, $d = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Jd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`, Qd = `#define PI 3.141592653589793
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
} // validated`, tp = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ep = `vec3 transformedNormal = objectNormal;
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
#endif`, np = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ip = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, rp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, sp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ap = "gl_FragColor = linearToOutputTexel( gl_FragColor );", op = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, lp = `#ifdef USE_ENVMAP
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
#endif`, cp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, hp = `#ifdef USE_ENVMAP
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
#endif`, up = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, fp = `#ifdef USE_ENVMAP
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
#endif`, dp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, pp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, mp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, _p = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gp = `#ifdef USE_GRADIENTMAP
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
}`, xp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, vp = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Mp = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Sp = `uniform bool receiveShadow;
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
#endif`, yp = `#ifdef USE_ENVMAP
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
#endif`, Ep = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Tp = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, bp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ap = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wp = `PhysicalMaterial material;
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
#endif`, Rp = `uniform sampler2D dfgLUT;
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
}`, Cp = `
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
#endif`, Pp = `#if defined( RE_IndirectDiffuse )
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
#endif`, Dp = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Lp = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ip = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Up = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Np = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Fp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Op = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Bp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, kp = `#if defined( USE_POINTS_UV )
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
#endif`, zp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Vp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Gp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Hp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Wp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Xp = `#ifdef USE_MORPHTARGETS
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
#endif`, Yp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, qp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Kp = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, jp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Zp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, $p = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Jp = `#ifdef USE_NORMALMAP
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
#endif`, Qp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, tm = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, em = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, nm = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, im = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, rm = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, sm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, am = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, om = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, lm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, cm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, hm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, um = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, fm = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, dm = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, pm = `float getShadowMask() {
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
}`, mm = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, _m = `#ifdef USE_SKINNING
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
#endif`, gm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, xm = `#ifdef USE_SKINNING
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
#endif`, vm = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Mm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Sm = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ym = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Em = `#ifdef USE_TRANSMISSION
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
#endif`, Tm = `#ifdef USE_TRANSMISSION
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
#endif`, bm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Am = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, wm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Rm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Cm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Pm = `uniform sampler2D t2D;
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
}`, Dm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Lm = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Im = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Um = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Nm = `#include <common>
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
}`, Fm = `#if DEPTH_PACKING == 3200
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
}`, Om = `#define DISTANCE
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
}`, Bm = `#define DISTANCE
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
}`, km = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, zm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vm = `uniform float scale;
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
}`, Gm = `uniform vec3 diffuse;
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
}`, Hm = `#include <common>
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
}`, Wm = `uniform vec3 diffuse;
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
}`, Xm = `#define LAMBERT
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
}`, Ym = `#define LAMBERT
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
}`, qm = `#define MATCAP
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
}`, Km = `#define MATCAP
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
}`, jm = `#define NORMAL
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
}`, Zm = `#define NORMAL
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
}`, $m = `#define PHONG
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
}`, Jm = `#define PHONG
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
}`, Qm = `#define STANDARD
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
}`, t_ = `#define STANDARD
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
}`, e_ = `#define TOON
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
}`, n_ = `#define TOON
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
}`, i_ = `uniform float size;
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
}`, r_ = `uniform vec3 diffuse;
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
}`, s_ = `#include <common>
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
}`, a_ = `uniform vec3 color;
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
}`, o_ = `uniform float rotation;
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
}`, l_ = `uniform vec3 diffuse;
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
}`, Nt = { alphahash_fragment: Pd, alphahash_pars_fragment: Dd, alphamap_fragment: Ld, alphamap_pars_fragment: Id, alphatest_fragment: Ud, alphatest_pars_fragment: Nd, aomap_fragment: Fd, aomap_pars_fragment: Od, batching_pars_vertex: Bd, batching_vertex: kd, begin_vertex: zd, beginnormal_vertex: Vd, bsdfs: Gd, iridescence_fragment: Hd, bumpmap_pars_fragment: Wd, clipping_planes_fragment: Xd, clipping_planes_pars_fragment: Yd, clipping_planes_pars_vertex: qd, clipping_planes_vertex: Kd, color_fragment: jd, color_pars_fragment: Zd, color_pars_vertex: $d, color_vertex: Jd, common: Qd, cube_uv_reflection_fragment: tp, defaultnormal_vertex: ep, displacementmap_pars_vertex: np, displacementmap_vertex: ip, emissivemap_fragment: rp, emissivemap_pars_fragment: sp, colorspace_fragment: ap, colorspace_pars_fragment: op, envmap_fragment: lp, envmap_common_pars_fragment: cp, envmap_pars_fragment: hp, envmap_pars_vertex: up, envmap_physical_pars_fragment: yp, envmap_vertex: fp, fog_vertex: dp, fog_pars_vertex: pp, fog_fragment: mp, fog_pars_fragment: _p, gradientmap_pars_fragment: gp, lightmap_pars_fragment: xp, lights_lambert_fragment: vp, lights_lambert_pars_fragment: Mp, lights_pars_begin: Sp, lights_toon_fragment: Ep, lights_toon_pars_fragment: Tp, lights_phong_fragment: bp, lights_phong_pars_fragment: Ap, lights_physical_fragment: wp, lights_physical_pars_fragment: Rp, lights_fragment_begin: Cp, lights_fragment_maps: Pp, lights_fragment_end: Dp, logdepthbuf_fragment: Lp, logdepthbuf_pars_fragment: Ip, logdepthbuf_pars_vertex: Up, logdepthbuf_vertex: Np, map_fragment: Fp, map_pars_fragment: Op, map_particle_fragment: Bp, map_particle_pars_fragment: kp, metalnessmap_fragment: zp, metalnessmap_pars_fragment: Vp, morphinstance_vertex: Gp, morphcolor_vertex: Hp, morphnormal_vertex: Wp, morphtarget_pars_vertex: Xp, morphtarget_vertex: Yp, normal_fragment_begin: qp, normal_fragment_maps: Kp, normal_pars_fragment: jp, normal_pars_vertex: Zp, normal_vertex: $p, normalmap_pars_fragment: Jp, clearcoat_normal_fragment_begin: Qp, clearcoat_normal_fragment_maps: tm, clearcoat_pars_fragment: em, iridescence_pars_fragment: nm, opaque_fragment: im, packing: rm, premultiplied_alpha_fragment: sm, project_vertex: am, dithering_fragment: om, dithering_pars_fragment: lm, roughnessmap_fragment: cm, roughnessmap_pars_fragment: hm, shadowmap_pars_fragment: um, shadowmap_pars_vertex: fm, shadowmap_vertex: dm, shadowmask_pars_fragment: pm, skinbase_vertex: mm, skinning_pars_vertex: _m, skinning_vertex: gm, skinnormal_vertex: xm, specularmap_fragment: vm, specularmap_pars_fragment: Mm, tonemapping_fragment: Sm, tonemapping_pars_fragment: ym, transmission_fragment: Em, transmission_pars_fragment: Tm, uv_pars_fragment: bm, uv_pars_vertex: Am, uv_vertex: wm, worldpos_vertex: Rm, background_vert: Cm, background_frag: Pm, backgroundCube_vert: Dm, backgroundCube_frag: Lm, cube_vert: Im, cube_frag: Um, depth_vert: Nm, depth_frag: Fm, distance_vert: Om, distance_frag: Bm, equirect_vert: km, equirect_frag: zm, linedashed_vert: Vm, linedashed_frag: Gm, meshbasic_vert: Hm, meshbasic_frag: Wm, meshlambert_vert: Xm, meshlambert_frag: Ym, meshmatcap_vert: qm, meshmatcap_frag: Km, meshnormal_vert: jm, meshnormal_frag: Zm, meshphong_vert: $m, meshphong_frag: Jm, meshphysical_vert: Qm, meshphysical_frag: t_, meshtoon_vert: e_, meshtoon_frag: n_, points_vert: i_, points_frag: r_, shadow_vert: s_, shadow_frag: a_, sprite_vert: o_, sprite_frag: l_ }, ot = { common: { diffuse: { value: new Vt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ut() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ut() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ut() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ut() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ut() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ut() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ut() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ut() }, normalScale: { value: new Pt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ut() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ut() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ut() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ut() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Vt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Vt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ut() }, alphaTest: { value: 0 }, uvTransform: { value: new Ut() } }, sprite: { diffuse: { value: new Vt(16777215) }, opacity: { value: 1 }, center: { value: new Pt(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ut() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ut() }, alphaTest: { value: 0 } } }, Cn = { basic: { uniforms: He([ot.common, ot.specularmap, ot.envmap, ot.aomap, ot.lightmap, ot.fog]), vertexShader: Nt.meshbasic_vert, fragmentShader: Nt.meshbasic_frag }, lambert: { uniforms: He([ot.common, ot.specularmap, ot.envmap, ot.aomap, ot.lightmap, ot.emissivemap, ot.bumpmap, ot.normalmap, ot.displacementmap, ot.fog, ot.lights, { emissive: { value: new Vt(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Nt.meshlambert_vert, fragmentShader: Nt.meshlambert_frag }, phong: { uniforms: He([ot.common, ot.specularmap, ot.envmap, ot.aomap, ot.lightmap, ot.emissivemap, ot.bumpmap, ot.normalmap, ot.displacementmap, ot.fog, ot.lights, { emissive: { value: new Vt(0) }, specular: { value: new Vt(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Nt.meshphong_vert, fragmentShader: Nt.meshphong_frag }, standard: { uniforms: He([ot.common, ot.envmap, ot.aomap, ot.lightmap, ot.emissivemap, ot.bumpmap, ot.normalmap, ot.displacementmap, ot.roughnessmap, ot.metalnessmap, ot.fog, ot.lights, { emissive: { value: new Vt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Nt.meshphysical_vert, fragmentShader: Nt.meshphysical_frag }, toon: { uniforms: He([ot.common, ot.aomap, ot.lightmap, ot.emissivemap, ot.bumpmap, ot.normalmap, ot.displacementmap, ot.gradientmap, ot.fog, ot.lights, { emissive: { value: new Vt(0) } }]), vertexShader: Nt.meshtoon_vert, fragmentShader: Nt.meshtoon_frag }, matcap: { uniforms: He([ot.common, ot.bumpmap, ot.normalmap, ot.displacementmap, ot.fog, { matcap: { value: null } }]), vertexShader: Nt.meshmatcap_vert, fragmentShader: Nt.meshmatcap_frag }, points: { uniforms: He([ot.points, ot.fog]), vertexShader: Nt.points_vert, fragmentShader: Nt.points_frag }, dashed: { uniforms: He([ot.common, ot.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Nt.linedashed_vert, fragmentShader: Nt.linedashed_frag }, depth: { uniforms: He([ot.common, ot.displacementmap]), vertexShader: Nt.depth_vert, fragmentShader: Nt.depth_frag }, normal: { uniforms: He([ot.common, ot.bumpmap, ot.normalmap, ot.displacementmap, { opacity: { value: 1 } }]), vertexShader: Nt.meshnormal_vert, fragmentShader: Nt.meshnormal_frag }, sprite: { uniforms: He([ot.sprite, ot.fog]), vertexShader: Nt.sprite_vert, fragmentShader: Nt.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ut() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Nt.background_vert, fragmentShader: Nt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ut() } }, vertexShader: Nt.backgroundCube_vert, fragmentShader: Nt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Nt.cube_vert, fragmentShader: Nt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Nt.equirect_vert, fragmentShader: Nt.equirect_frag }, distance: { uniforms: He([ot.common, ot.displacementmap, { referencePosition: { value: new k() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Nt.distance_vert, fragmentShader: Nt.distance_frag }, shadow: { uniforms: He([ot.lights, ot.fog, { color: { value: new Vt(0) }, opacity: { value: 1 } }]), vertexShader: Nt.shadow_vert, fragmentShader: Nt.shadow_frag } };
Cn.physical = { uniforms: He([Cn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ut() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ut() }, clearcoatNormalScale: { value: new Pt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ut() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ut() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ut() }, sheen: { value: 0 }, sheenColor: { value: new Vt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ut() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ut() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ut() }, transmissionSamplerSize: { value: new Pt() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ut() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Vt(0) }, specularColor: { value: new Vt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ut() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ut() }, anisotropyVector: { value: new Pt() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ut() } }]), vertexShader: Nt.meshphysical_vert, fragmentShader: Nt.meshphysical_frag };
const Bs = { r: 0, b: 0, g: 0 }, Ui = new zn(), c_ = new me();
function h_(r16, t, e, n, i, s) {
  const a = new Vt(0);
  let o = i === true ? 0 : 1, c, l, h = null, f = 0, u = null;
  function p(M) {
    let T = M.isScene === true ? M.background : null;
    if (T && T.isTexture) {
      const y = M.backgroundBlurriness > 0;
      T = t.get(T, y);
    }
    return T;
  }
  function _(M) {
    let T = false;
    const y = p(M);
    y === null ? d(a, o) : y && y.isColor && (d(y, 1), T = true);
    const b = r16.xr.getEnvironmentBlendMode();
    b === "additive" ? e.buffers.color.setClear(0, 0, 0, 1, s) : b === "alpha-blend" && e.buffers.color.setClear(0, 0, 0, 0, s), (r16.autoClear || T) && (e.buffers.depth.setTest(true), e.buffers.depth.setMask(true), e.buffers.color.setMask(true), r16.clear(r16.autoClearColor, r16.autoClearDepth, r16.autoClearStencil));
  }
  function g(M, T) {
    const y = p(T);
    y && (y.isCubeTexture || y.mapping === ca) ? (l === void 0 && (l = new Gt(new Le(1, 1, 1), new Vn({ name: "BackgroundCubeMaterial", uniforms: Dr(Cn.backgroundCube.uniforms), vertexShader: Cn.backgroundCube.vertexShader, fragmentShader: Cn.backgroundCube.fragmentShader, side: qe, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(b, A, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), n.update(l)), Ui.copy(T.backgroundRotation), Ui.x *= -1, Ui.y *= -1, Ui.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === false && (Ui.y *= -1, Ui.z *= -1), l.material.uniforms.envMap.value = y, l.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === false ? -1 : 1, l.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Ui)), l.material.toneMapped = qt.getTransfer(y.colorSpace) !== Qt, (h !== y || f !== y.version || u !== r16.toneMapping) && (l.material.needsUpdate = true, h = y, f = y.version, u = r16.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new Gt(new dn(2, 2), new Vn({ name: "BackgroundMaterial", uniforms: Dr(Cn.background.uniforms), vertexShader: Cn.background.vertexShader, fragmentShader: Cn.background.fragmentShader, side: Ei, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), n.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, c.material.toneMapped = qt.getTransfer(y.colorSpace) !== Qt, y.matrixAutoUpdate === true && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (h !== y || f !== y.version || u !== r16.toneMapping) && (c.material.needsUpdate = true, h = y, f = y.version, u = r16.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(M, T) {
    M.getRGB(Bs, Wh(r16)), e.buffers.color.setClear(Bs.r, Bs.g, Bs.b, T, s);
  }
  function m() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(M, T = 1) {
    a.set(M), o = T, d(a, o);
  }, getClearAlpha: function() {
    return o;
  }, setClearAlpha: function(M) {
    o = M, d(a, o);
  }, render: _, addToRenderList: g, dispose: m };
}
function u_(r16, t) {
  const e = r16.getParameter(r16.MAX_VERTEX_ATTRIBS), n = {}, i = u(null);
  let s = i, a = false;
  function o(C, L, U, G, O) {
    let B = false;
    const N = f(C, G, U, L);
    s !== N && (s = N, l(s.object)), B = p(C, G, U, O), B && _(C, G, U, O), O !== null && t.update(O, r16.ELEMENT_ARRAY_BUFFER), (B || a) && (a = false, y(C, L, U, G), O !== null && r16.bindBuffer(r16.ELEMENT_ARRAY_BUFFER, t.get(O).buffer));
  }
  function c() {
    return r16.createVertexArray();
  }
  function l(C) {
    return r16.bindVertexArray(C);
  }
  function h(C) {
    return r16.deleteVertexArray(C);
  }
  function f(C, L, U, G) {
    const O = G.wireframe === true;
    let B = n[L.id];
    B === void 0 && (B = {}, n[L.id] = B);
    const N = C.isInstancedMesh === true ? C.id : 0;
    let Z = B[N];
    Z === void 0 && (Z = {}, B[N] = Z);
    let $ = Z[U.id];
    $ === void 0 && ($ = {}, Z[U.id] = $);
    let lt = $[O];
    return lt === void 0 && (lt = u(c()), $[O] = lt), lt;
  }
  function u(C) {
    const L = [], U = [], G = [];
    for (let O = 0; O < e; O++) L[O] = 0, U[O] = 0, G[O] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: L, enabledAttributes: U, attributeDivisors: G, object: C, attributes: {}, index: null };
  }
  function p(C, L, U, G) {
    const O = s.attributes, B = L.attributes;
    let N = 0;
    const Z = U.getAttributes();
    for (const $ in Z) if (Z[$].location >= 0) {
      const ut = O[$];
      let at = B[$];
      if (at === void 0 && ($ === "instanceMatrix" && C.instanceMatrix && (at = C.instanceMatrix), $ === "instanceColor" && C.instanceColor && (at = C.instanceColor)), ut === void 0 || ut.attribute !== at || at && ut.data !== at.data) return true;
      N++;
    }
    return s.attributesNum !== N || s.index !== G;
  }
  function _(C, L, U, G) {
    const O = {}, B = L.attributes;
    let N = 0;
    const Z = U.getAttributes();
    for (const $ in Z) if (Z[$].location >= 0) {
      let ut = B[$];
      ut === void 0 && ($ === "instanceMatrix" && C.instanceMatrix && (ut = C.instanceMatrix), $ === "instanceColor" && C.instanceColor && (ut = C.instanceColor));
      const at = {};
      at.attribute = ut, ut && ut.data && (at.data = ut.data), O[$] = at, N++;
    }
    s.attributes = O, s.attributesNum = N, s.index = G;
  }
  function g() {
    const C = s.newAttributes;
    for (let L = 0, U = C.length; L < U; L++) C[L] = 0;
  }
  function d(C) {
    m(C, 0);
  }
  function m(C, L) {
    const U = s.newAttributes, G = s.enabledAttributes, O = s.attributeDivisors;
    U[C] = 1, G[C] === 0 && (r16.enableVertexAttribArray(C), G[C] = 1), O[C] !== L && (r16.vertexAttribDivisor(C, L), O[C] = L);
  }
  function M() {
    const C = s.newAttributes, L = s.enabledAttributes;
    for (let U = 0, G = L.length; U < G; U++) L[U] !== C[U] && (r16.disableVertexAttribArray(U), L[U] = 0);
  }
  function T(C, L, U, G, O, B, N) {
    N === true ? r16.vertexAttribIPointer(C, L, U, O, B) : r16.vertexAttribPointer(C, L, U, G, O, B);
  }
  function y(C, L, U, G) {
    g();
    const O = G.attributes, B = U.getAttributes(), N = L.defaultAttributeValues;
    for (const Z in B) {
      const $ = B[Z];
      if ($.location >= 0) {
        let lt = O[Z];
        if (lt === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (lt = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (lt = C.instanceColor)), lt !== void 0) {
          const ut = lt.normalized, at = lt.itemSize, Dt = t.get(lt);
          if (Dt === void 0) continue;
          const Wt = Dt.buffer, Xt = Dt.type, K = Dt.bytesPerElement, nt = Xt === r16.INT || Xt === r16.UNSIGNED_INT || lt.gpuType === _l;
          if (lt.isInterleavedBufferAttribute) {
            const st = lt.data, It = st.stride, bt = lt.offset;
            if (st.isInstancedInterleavedBuffer) {
              for (let wt = 0; wt < $.locationSize; wt++) m($.location + wt, st.meshPerAttribute);
              C.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = st.meshPerAttribute * st.count);
            } else for (let wt = 0; wt < $.locationSize; wt++) d($.location + wt);
            r16.bindBuffer(r16.ARRAY_BUFFER, Wt);
            for (let wt = 0; wt < $.locationSize; wt++) T($.location + wt, at / $.locationSize, Xt, ut, It * K, (bt + at / $.locationSize * wt) * K, nt);
          } else {
            if (lt.isInstancedBufferAttribute) {
              for (let st = 0; st < $.locationSize; st++) m($.location + st, lt.meshPerAttribute);
              C.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = lt.meshPerAttribute * lt.count);
            } else for (let st = 0; st < $.locationSize; st++) d($.location + st);
            r16.bindBuffer(r16.ARRAY_BUFFER, Wt);
            for (let st = 0; st < $.locationSize; st++) T($.location + st, at / $.locationSize, Xt, ut, at * K, at / $.locationSize * st * K, nt);
          }
        } else if (N !== void 0) {
          const ut = N[Z];
          if (ut !== void 0) switch (ut.length) {
            case 2:
              r16.vertexAttrib2fv($.location, ut);
              break;
            case 3:
              r16.vertexAttrib3fv($.location, ut);
              break;
            case 4:
              r16.vertexAttrib4fv($.location, ut);
              break;
            default:
              r16.vertexAttrib1fv($.location, ut);
          }
        }
      }
    }
    M();
  }
  function b() {
    S();
    for (const C in n) {
      const L = n[C];
      for (const U in L) {
        const G = L[U];
        for (const O in G) {
          const B = G[O];
          for (const N in B) h(B[N].object), delete B[N];
          delete G[O];
        }
      }
      delete n[C];
    }
  }
  function A(C) {
    if (n[C.id] === void 0) return;
    const L = n[C.id];
    for (const U in L) {
      const G = L[U];
      for (const O in G) {
        const B = G[O];
        for (const N in B) h(B[N].object), delete B[N];
        delete G[O];
      }
    }
    delete n[C.id];
  }
  function w(C) {
    for (const L in n) {
      const U = n[L];
      for (const G in U) {
        const O = U[G];
        if (O[C.id] === void 0) continue;
        const B = O[C.id];
        for (const N in B) h(B[N].object), delete B[N];
        delete O[C.id];
      }
    }
  }
  function x(C) {
    for (const L in n) {
      const U = n[L], G = C.isInstancedMesh === true ? C.id : 0, O = U[G];
      if (O !== void 0) {
        for (const B in O) {
          const N = O[B];
          for (const Z in N) h(N[Z].object), delete N[Z];
          delete O[B];
        }
        delete U[G], Object.keys(U).length === 0 && delete n[L];
      }
    }
  }
  function S() {
    z(), a = true, s !== i && (s = i, l(s.object));
  }
  function z() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: o, reset: S, resetDefaultState: z, dispose: b, releaseStatesOfGeometry: A, releaseStatesOfObject: x, releaseStatesOfProgram: w, initAttributes: g, enableAttribute: d, disableUnusedAttributes: M };
}
function f_(r16, t, e) {
  let n;
  function i(l) {
    n = l;
  }
  function s(l, h) {
    r16.drawArrays(n, l, h), e.update(h, n, 1);
  }
  function a(l, h, f) {
    f !== 0 && (r16.drawArraysInstanced(n, l, h, f), e.update(h, n, f));
  }
  function o(l, h, f) {
    if (f === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, f);
    let p = 0;
    for (let _ = 0; _ < f; _++) p += h[_];
    e.update(p, n, 1);
  }
  function c(l, h, f, u) {
    if (f === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null) for (let _ = 0; _ < l.length; _++) a(l[_], h[_], u[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, u, 0, f);
      let _ = 0;
      for (let g = 0; g < f; g++) _ += h[g] * u[g];
      e.update(_, n, 1);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function d_(r16, t, e, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const w = t.get("EXT_texture_filter_anisotropic");
      i = r16.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(w) {
    return !(w !== Tn && n.convert(w) !== r16.getParameter(r16.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const x = w === ni && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== rn && n.convert(w) !== r16.getParameter(r16.IMPLEMENTATION_COLOR_READ_TYPE) && w !== Ln && !x);
  }
  function c(w) {
    if (w === "highp") {
      if (r16.getShaderPrecisionFormat(r16.VERTEX_SHADER, r16.HIGH_FLOAT).precision > 0 && r16.getShaderPrecisionFormat(r16.FRAGMENT_SHADER, r16.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && r16.getShaderPrecisionFormat(r16.VERTEX_SHADER, r16.MEDIUM_FLOAT).precision > 0 && r16.getShaderPrecisionFormat(r16.FRAGMENT_SHADER, r16.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const h = c(l);
  h !== l && (Rt("WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const f = e.logarithmicDepthBuffer === true, u = e.reversedDepthBuffer === true && t.has("EXT_clip_control"), p = r16.getParameter(r16.MAX_TEXTURE_IMAGE_UNITS), _ = r16.getParameter(r16.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = r16.getParameter(r16.MAX_TEXTURE_SIZE), d = r16.getParameter(r16.MAX_CUBE_MAP_TEXTURE_SIZE), m = r16.getParameter(r16.MAX_VERTEX_ATTRIBS), M = r16.getParameter(r16.MAX_VERTEX_UNIFORM_VECTORS), T = r16.getParameter(r16.MAX_VARYING_VECTORS), y = r16.getParameter(r16.MAX_FRAGMENT_UNIFORM_VECTORS), b = r16.getParameter(r16.MAX_SAMPLES), A = r16.getParameter(r16.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: f, reversedDepthBuffer: u, maxTextures: p, maxVertexTextures: _, maxTextureSize: g, maxCubemapSize: d, maxAttributes: m, maxVertexUniforms: M, maxVaryings: T, maxFragmentUniforms: y, maxSamples: b, samples: A };
}
function p_(r16) {
  const t = this;
  let e = null, n = 0, i = false, s = false;
  const a = new pi(), o = new Ut(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const p = f.length !== 0 || u || n !== 0 || i;
    return i = u, n = f.length, p;
  }, this.beginShadows = function() {
    s = true, h(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(f, u) {
    e = h(f, u, 0);
  }, this.setState = function(f, u, p) {
    const _ = f.clippingPlanes, g = f.clipIntersection, d = f.clipShadows, m = r16.get(f);
    if (!i || _ === null || _.length === 0 || s && !d) s ? h(null) : l();
    else {
      const M = s ? 0 : n, T = M * 4;
      let y = m.clippingState || null;
      c.value = y, y = h(_, u, T, p);
      for (let b = 0; b !== T; ++b) y[b] = e[b];
      m.clippingState = y, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(f, u, p, _) {
    const g = f !== null ? f.length : 0;
    let d = null;
    if (g !== 0) {
      if (d = c.value, _ !== true || d === null) {
        const m = p + g * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (d === null || d.length < m) && (d = new Float32Array(m));
        for (let T = 0, y = p; T !== g; ++T, y += 4) a.copy(f[T]).applyMatrix4(M, o), a.normal.toArray(d, y), d[y + 3] = a.constant;
      }
      c.value = d, c.needsUpdate = true;
    }
    return t.numPlanes = g, t.numIntersection = 0, d;
  }
}
const _i = 4, Dc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], zi = 20, m_ = 256, Xr = new Rl(), Lc = new Vt();
let Xa = null, Ya = 0, qa = 0, Ka = false;
const __ = new k();
class Ic {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(t, e = 0, n = 0.1, i = 100, s = {}) {
    const { size: a = 256, position: o = __ } = s;
    Xa = this._renderer.getRenderTarget(), Ya = this._renderer.getActiveCubeFace(), qa = this._renderer.getActiveMipmapLevel(), Ka = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = true, this._sceneToCubeUV(t, n, i, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Fc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Nc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Xa, Ya, qa), this._renderer.xr.enabled = Ka, t.scissorTest = false, mr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Ki || t.mapping === Rr ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Xa = this._renderer.getRenderTarget(), Ya = this._renderer.getActiveCubeFace(), qa = this._renderer.getActiveMipmapLevel(), Ka = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Be, minFilter: Be, generateMipmaps: false, type: ni, format: Tn, colorSpace: Pr, depthBuffer: false }, i = Uc(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Uc(t, e, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = g_(s)), this._blurMaterial = v_(s, t, e), this._ggxMaterial = x_(s, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new Gt(new Hn(), t);
    this._renderer.compile(e, Xr);
  }
  _sceneToCubeUV(t, e, n, i, s) {
    const c = new pn(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], f = this._renderer, u = f.autoClear, p = f.toneMapping;
    f.getClearColor(Lc), f.toneMapping = Nn, f.autoClear = false, f.state.buffers.depth.getReversed() && (f.setRenderTarget(i), f.clearDepth(), f.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Gt(new Le(), new Al({ name: "PMREM.Background", side: qe, depthWrite: false, depthTest: false })));
    const g = this._backgroundBox, d = g.material;
    let m = false;
    const M = t.background;
    M ? M.isColor && (d.color.copy(M), t.background = null, m = true) : (d.color.copy(Lc), m = true);
    for (let T = 0; T < 6; T++) {
      const y = T % 3;
      y === 0 ? (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + h[T], s.y, s.z)) : y === 1 ? (c.up.set(0, 0, l[T]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + h[T], s.z)) : (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + h[T]));
      const b = this._cubeSize;
      mr(i, y * b, T > 2 ? b : 0, b, b), f.setRenderTarget(i), m && f.render(g, c), f.render(t, c);
    }
    f.toneMapping = p, f.autoClear = u, t.background = M;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === Ki || t.mapping === Rr;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fc()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Nc());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    mr(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, Xr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const i = this._lodMeshes.length;
    for (let s = 1; s < i; s++) this._applyGGXFilter(t, s - 1, s);
    e.autoClear = n;
  }
  _applyGGXFilter(t, e, n) {
    const i = this._renderer, s = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), h = e / (this._lodMeshes.length - 1), f = Math.sqrt(l * l - h * h), u = 0 + l * 1.25, p = f * u, { _lodMax: _ } = this, g = this._sizeLods[n], d = 3 * g * (n > _ - _i ? n - _ + _i : 0), m = 4 * (this._cubeSize - g);
    c.envMap.value = t.texture, c.roughness.value = p, c.mipInt.value = _ - e, mr(s, d, m, 3 * g, 2 * g), i.setRenderTarget(s), i.render(o, Xr), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = _ - n, mr(t, d, m, 3 * g, 2 * g), i.setRenderTarget(t), i.render(o, Xr);
  }
  _blur(t, e, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, i, "latitudinal", s), this._halfBlur(a, t, n, n, i, "longitudinal", s);
  }
  _halfBlur(t, e, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && jt("blur direction must be either latitudinal or longitudinal!");
    const h = 3, f = this._lodMeshes[i];
    f.material = l;
    const u = l.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * zi - 1), g = s / _, d = isFinite(s) ? 1 + Math.floor(h * g) : zi;
    d > zi && Rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zi}`);
    const m = [];
    let M = 0;
    for (let w = 0; w < zi; ++w) {
      const x = w / g, S = Math.exp(-x * x / 2);
      m.push(S), w === 0 ? M += S : w < d && (M += 2 * S);
    }
    for (let w = 0; w < m.length; w++) m[w] = m[w] / M;
    u.envMap.value = t.texture, u.samples.value = d, u.weights.value = m, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: T } = this;
    u.dTheta.value = _, u.mipInt.value = T - n;
    const y = this._sizeLods[i], b = 3 * y * (i > T - _i ? i - T + _i : 0), A = 4 * (this._cubeSize - y);
    mr(e, b, A, 3 * y, 2 * y), c.setRenderTarget(e), c.render(f, Xr);
  }
}
function g_(r16) {
  const t = [], e = [], n = [];
  let i = r16;
  const s = r16 - _i + 1 + Dc.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r16 - _i ? c = Dc[a - r16 + _i - 1] : a === 0 && (c = 0), e.push(c);
    const l = 1 / (o - 2), h = -l, f = 1 + l, u = [h, h, f, h, f, f, h, h, f, f, h, f], p = 6, _ = 6, g = 3, d = 2, m = 1, M = new Float32Array(g * _ * p), T = new Float32Array(d * _ * p), y = new Float32Array(m * _ * p);
    for (let A = 0; A < p; A++) {
      const w = A % 3 * 2 / 3 - 1, x = A > 2 ? 0 : -1, S = [w, x, 0, w + 2 / 3, x, 0, w + 2 / 3, x + 1, 0, w, x, 0, w + 2 / 3, x + 1, 0, w, x + 1, 0];
      M.set(S, g * _ * A), T.set(u, d * _ * A);
      const z = [A, A, A, A, A, A];
      y.set(z, m * _ * A);
    }
    const b = new Hn();
    b.setAttribute("position", new On(M, g)), b.setAttribute("uv", new On(T, d)), b.setAttribute("faceIndex", new On(y, m)), n.push(new Gt(b, null)), i > _i && i--;
  }
  return { lodMeshes: n, sizeLods: t, sigmas: e };
}
function Uc(r16, t, e) {
  const n = new Fn(r16, t, e);
  return n.texture.mapping = ca, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function mr(r16, t, e, n, i) {
  r16.viewport.set(t, e, n, i), r16.scissor.set(t, e, n, i);
}
function x_(r16, t, e) {
  return new Vn({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: m_, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${r16}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: ha(), fragmentShader: `

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
		`, blending: ti, depthTest: false, depthWrite: false });
}
function v_(r16, t, e) {
  const n = new Float32Array(zi), i = new k(0, 1, 0);
  return new Vn({ name: "SphericalGaussianBlur", defines: { n: zi, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${r16}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: ha(), fragmentShader: `

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
		`, blending: ti, depthTest: false, depthWrite: false });
}
function Nc() {
  return new Vn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ha(), fragmentShader: `

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
		`, blending: ti, depthTest: false, depthWrite: false });
}
function Fc() {
  return new Vn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ha(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: ti, depthTest: false, depthWrite: false });
}
function ha() {
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
class Kh extends Fn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Gh(i), this._setTextureOptions(e), this.texture.isRenderTargetTexture = true;
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
			` }, i = new Le(5, 5, 5), s = new Vn({ name: "CubemapFromEquirect", uniforms: Dr(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: qe, blending: ti });
    s.uniforms.tEquirect.value = e;
    const a = new Gt(i, s), o = e.minFilter;
    return e.minFilter === Vi && (e.minFilter = Be), new bd(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e = true, n = true, i = true) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(s);
  }
}
function M_(r16) {
  let t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), n = null;
  function i(u, p = false) {
    return u == null ? null : p ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const p = u.mapping;
      if (p === ga || p === xa) if (t.has(u)) {
        const _ = t.get(u).texture;
        return o(_, u.mapping);
      } else {
        const _ = u.image;
        if (_ && _.height > 0) {
          const g = new Kh(_.height);
          return g.fromEquirectangularTexture(r16, u), t.set(u, g), u.addEventListener("dispose", l), o(g.texture, u.mapping);
        } else return null;
      }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const p = u.mapping, _ = p === ga || p === xa, g = p === Ki || p === Rr;
      if (_ || g) {
        let d = e.get(u);
        const m = d !== void 0 ? d.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== m) return n === null && (n = new Ic(r16)), d = _ ? n.fromEquirectangular(u, d) : n.fromCubemap(u, d), d.texture.pmremVersion = u.pmremVersion, e.set(u, d), d.texture;
        if (d !== void 0) return d.texture;
        {
          const M = u.image;
          return _ && M && M.height > 0 || g && M && c(M) ? (n === null && (n = new Ic(r16)), d = _ ? n.fromEquirectangular(u) : n.fromCubemap(u), d.texture.pmremVersion = u.pmremVersion, e.set(u, d), u.addEventListener("dispose", h), d.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, p) {
    return p === ga ? u.mapping = Ki : p === xa && (u.mapping = Rr), u;
  }
  function c(u) {
    let p = 0;
    const _ = 6;
    for (let g = 0; g < _; g++) u[g] !== void 0 && p++;
    return p === _;
  }
  function l(u) {
    const p = u.target;
    p.removeEventListener("dispose", l);
    const _ = t.get(p);
    _ !== void 0 && (t.delete(p), _.dispose());
  }
  function h(u) {
    const p = u.target;
    p.removeEventListener("dispose", h);
    const _ = e.get(p);
    _ !== void 0 && (e.delete(p), _.dispose());
  }
  function f() {
    t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return { get: i, dispose: f };
}
function S_(r16) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    const i = r16.getExtension(n);
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
function y_(r16, t, e, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const u = f.target;
    u.index !== null && t.remove(u.index);
    for (const _ in u.attributes) t.remove(u.attributes[_]);
    u.removeEventListener("dispose", a), delete i[u.id];
    const p = s.get(u);
    p && (t.remove(p), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === true && delete u._maxInstanceCount, e.memory.geometries--;
  }
  function o(f, u) {
    return i[u.id] === true || (u.addEventListener("dispose", a), i[u.id] = true, e.memory.geometries++), u;
  }
  function c(f) {
    const u = f.attributes;
    for (const p in u) t.update(u[p], r16.ARRAY_BUFFER);
  }
  function l(f) {
    const u = [], p = f.index, _ = f.attributes.position;
    let g = 0;
    if (_ === void 0) return;
    if (p !== null) {
      const M = p.array;
      g = p.version;
      for (let T = 0, y = M.length; T < y; T += 3) {
        const b = M[T + 0], A = M[T + 1], w = M[T + 2];
        u.push(b, A, A, w, w, b);
      }
    } else {
      const M = _.array;
      g = _.version;
      for (let T = 0, y = M.length / 3 - 1; T < y; T += 3) {
        const b = T + 0, A = T + 1, w = T + 2;
        u.push(b, A, A, w, w, b);
      }
    }
    const d = new (_.count >= 65535 ? zh : kh)(u, 1);
    d.version = g;
    const m = s.get(f);
    m && t.remove(m), s.set(f, d);
  }
  function h(f) {
    const u = s.get(f);
    if (u) {
      const p = f.index;
      p !== null && u.version < p.version && l(f);
    } else l(f);
    return s.get(f);
  }
  return { get: o, update: c, getWireframeAttribute: h };
}
function E_(r16, t, e) {
  let n;
  function i(u) {
    n = u;
  }
  let s, a;
  function o(u) {
    s = u.type, a = u.bytesPerElement;
  }
  function c(u, p) {
    r16.drawElements(n, p, s, u * a), e.update(p, n, 1);
  }
  function l(u, p, _) {
    _ !== 0 && (r16.drawElementsInstanced(n, p, s, u * a, _), e.update(p, n, _));
  }
  function h(u, p, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, u, 0, _);
    let d = 0;
    for (let m = 0; m < _; m++) d += p[m];
    e.update(d, n, 1);
  }
  function f(u, p, _, g) {
    if (_ === 0) return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null) for (let m = 0; m < u.length; m++) l(u[m] / a, p[m], g[m]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, p, 0, s, u, 0, g, 0, _);
      let m = 0;
      for (let M = 0; M < _; M++) m += p[M] * g[M];
      e.update(m, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function T_(r16) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (e.calls++, a) {
      case r16.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case r16.LINES:
        e.lines += o * (s / 2);
        break;
      case r16.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case r16.LINE_LOOP:
        e.lines += o * s;
        break;
      case r16.POINTS:
        e.points += o * s;
        break;
      default:
        jt("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: i, update: n };
}
function b_(r16, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), i = new de();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== f) {
      let z = function() {
        x.dispose(), n.delete(o), o.removeEventListener("dispose", z);
      };
      var p = z;
      u !== void 0 && u.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, d = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], M = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let y = 0;
      _ === true && (y = 1), g === true && (y = 2), d === true && (y = 3);
      let b = o.attributes.position.count * y, A = 1;
      b > t.maxTextureSize && (A = Math.ceil(b / t.maxTextureSize), b = t.maxTextureSize);
      const w = new Float32Array(b * A * 4 * f), x = new Fh(w, b, A, f);
      x.type = Ln, x.needsUpdate = true;
      const S = y * 4;
      for (let C = 0; C < f; C++) {
        const L = m[C], U = M[C], G = T[C], O = b * A * 4 * C;
        for (let B = 0; B < L.count; B++) {
          const N = B * S;
          _ === true && (i.fromBufferAttribute(L, B), w[O + N + 0] = i.x, w[O + N + 1] = i.y, w[O + N + 2] = i.z, w[O + N + 3] = 0), g === true && (i.fromBufferAttribute(U, B), w[O + N + 4] = i.x, w[O + N + 5] = i.y, w[O + N + 6] = i.z, w[O + N + 7] = 0), d === true && (i.fromBufferAttribute(G, B), w[O + N + 8] = i.x, w[O + N + 9] = i.y, w[O + N + 10] = i.z, w[O + N + 11] = G.itemSize === 4 ? i.w : 1);
        }
      }
      u = { count: f, texture: x, size: new Pt(b, A) }, n.set(o, u), o.addEventListener("dispose", z);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) c.getUniforms().setValue(r16, "morphTexture", a.morphTexture, e);
    else {
      let _ = 0;
      for (let d = 0; d < l.length; d++) _ += l[d];
      const g = o.morphTargetsRelative ? 1 : 1 - _;
      c.getUniforms().setValue(r16, "morphTargetBaseInfluence", g), c.getUniforms().setValue(r16, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(r16, "morphTargetsTexture", u.texture, e), c.getUniforms().setValue(r16, "morphTargetsTextureSize", u.size);
  }
  return { update: s };
}
function A_(r16, t, e, n, i) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const h = i.render.frame, f = l.geometry, u = t.get(l, f);
    if (s.get(u) !== h && (t.update(u), s.set(u, h)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === false && l.addEventListener("dispose", c), s.get(l) !== h && (e.update(l.instanceMatrix, r16.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, r16.ARRAY_BUFFER), s.set(l, h))), l.isSkinnedMesh) {
      const p = l.skeleton;
      s.get(p) !== h && (p.update(), s.set(p, h));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const h = l.target;
    h.removeEventListener("dispose", c), n.releaseStatesOfObject(h), e.remove(h.instanceMatrix), h.instanceColor !== null && e.remove(h.instanceColor);
  }
  return { update: a, dispose: o };
}
const w_ = { [Mh]: "LINEAR_TONE_MAPPING", [Sh]: "REINHARD_TONE_MAPPING", [yh]: "CINEON_TONE_MAPPING", [ml]: "ACES_FILMIC_TONE_MAPPING", [Th]: "AGX_TONE_MAPPING", [bh]: "NEUTRAL_TONE_MAPPING", [Eh]: "CUSTOM_TONE_MAPPING" };
function R_(r16, t, e, n, i) {
  const s = new Fn(t, e, { type: r16, depthBuffer: n, stencilBuffer: i }), a = new Fn(t, e, { type: ni, depthBuffer: false, stencilBuffer: false }), o = new Hn();
  o.setAttribute("position", new gn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new gn([0, 2, 0, 0, 2, 0], 2));
  const c = new vd({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
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
			}`, depthTest: false, depthWrite: false }), l = new Gt(o, c), h = new Rl(-1, 1, 1, -1, 0, 1);
  let f = null, u = null, p = false, _, g = null, d = [], m = false;
  this.setSize = function(M, T) {
    s.setSize(M, T), a.setSize(M, T);
    for (let y = 0; y < d.length; y++) {
      const b = d[y];
      b.setSize && b.setSize(M, T);
    }
  }, this.setEffects = function(M) {
    d = M, m = d.length > 0 && d[0].isRenderPass === true;
    const T = s.width, y = s.height;
    for (let b = 0; b < d.length; b++) {
      const A = d[b];
      A.setSize && A.setSize(T, y);
    }
  }, this.begin = function(M, T) {
    if (p || M.toneMapping === Nn && d.length === 0) return false;
    if (g = T, T !== null) {
      const y = T.width, b = T.height;
      (s.width !== y || s.height !== b) && this.setSize(y, b);
    }
    return m === false && M.setRenderTarget(s), _ = M.toneMapping, M.toneMapping = Nn, true;
  }, this.hasRenderPass = function() {
    return m;
  }, this.end = function(M, T) {
    M.toneMapping = _, p = true;
    let y = s, b = a;
    for (let A = 0; A < d.length; A++) {
      const w = d[A];
      if (w.enabled !== false && (w.render(M, b, y, T), w.needsSwap !== false)) {
        const x = y;
        y = b, b = x;
      }
    }
    if (f !== M.outputColorSpace || u !== M.toneMapping) {
      f = M.outputColorSpace, u = M.toneMapping, c.defines = {}, qt.getTransfer(f) === Qt && (c.defines.SRGB_TRANSFER = "");
      const A = w_[u];
      A && (c.defines[A] = ""), c.needsUpdate = true;
    }
    c.uniforms.tDiffuse.value = y.texture, M.setRenderTarget(g), M.render(l, h), g = null, p = false;
  }, this.isCompositing = function() {
    return p;
  }, this.dispose = function() {
    s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const jh = new ke(), $o = new ss(1, 1), Zh = new Fh(), $h = new jf(), Jh = new Gh(), Oc = [], Bc = [], kc = new Float32Array(16), zc = new Float32Array(9), Vc = new Float32Array(4);
function Br(r16, t, e) {
  const n = r16[0];
  if (n <= 0 || n > 0) return r16;
  const i = t * e;
  let s = Oc[i];
  if (s === void 0 && (s = new Float32Array(i), Oc[i] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, r16[a].toArray(s, o);
  }
  return s;
}
function Te(r16, t) {
  if (r16.length !== t.length) return false;
  for (let e = 0, n = r16.length; e < n; e++) if (r16[e] !== t[e]) return false;
  return true;
}
function be(r16, t) {
  for (let e = 0, n = t.length; e < n; e++) r16[e] = t[e];
}
function ua(r16, t) {
  let e = Bc[t];
  e === void 0 && (e = new Int32Array(t), Bc[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = r16.allocateTextureUnit();
  return e;
}
function C_(r16, t) {
  const e = this.cache;
  e[0] !== t && (r16.uniform1f(this.addr, t), e[0] = t);
}
function P_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (r16.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Te(e, t)) return;
    r16.uniform2fv(this.addr, t), be(e, t);
  }
}
function D_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r16.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (r16.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (Te(e, t)) return;
    r16.uniform3fv(this.addr, t), be(e, t);
  }
}
function L_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r16.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Te(e, t)) return;
    r16.uniform4fv(this.addr, t), be(e, t);
  }
}
function I_(r16, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Te(e, t)) return;
    r16.uniformMatrix2fv(this.addr, false, t), be(e, t);
  } else {
    if (Te(e, n)) return;
    Vc.set(n), r16.uniformMatrix2fv(this.addr, false, Vc), be(e, n);
  }
}
function U_(r16, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Te(e, t)) return;
    r16.uniformMatrix3fv(this.addr, false, t), be(e, t);
  } else {
    if (Te(e, n)) return;
    zc.set(n), r16.uniformMatrix3fv(this.addr, false, zc), be(e, n);
  }
}
function N_(r16, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Te(e, t)) return;
    r16.uniformMatrix4fv(this.addr, false, t), be(e, t);
  } else {
    if (Te(e, n)) return;
    kc.set(n), r16.uniformMatrix4fv(this.addr, false, kc), be(e, n);
  }
}
function F_(r16, t) {
  const e = this.cache;
  e[0] !== t && (r16.uniform1i(this.addr, t), e[0] = t);
}
function O_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (r16.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Te(e, t)) return;
    r16.uniform2iv(this.addr, t), be(e, t);
  }
}
function B_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r16.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Te(e, t)) return;
    r16.uniform3iv(this.addr, t), be(e, t);
  }
}
function k_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r16.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Te(e, t)) return;
    r16.uniform4iv(this.addr, t), be(e, t);
  }
}
function z_(r16, t) {
  const e = this.cache;
  e[0] !== t && (r16.uniform1ui(this.addr, t), e[0] = t);
}
function V_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (r16.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Te(e, t)) return;
    r16.uniform2uiv(this.addr, t), be(e, t);
  }
}
function G_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r16.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Te(e, t)) return;
    r16.uniform3uiv(this.addr, t), be(e, t);
  }
}
function H_(r16, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r16.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Te(e, t)) return;
    r16.uniform4uiv(this.addr, t), be(e, t);
  }
}
function W_(r16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r16.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r16.SAMPLER_2D_SHADOW ? ($o.compareFunction = e.isReversedDepthBuffer() ? El : yl, s = $o) : s = jh, e.setTexture2D(t || s, i);
}
function X_(r16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r16.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || $h, i);
}
function Y_(r16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r16.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || Jh, i);
}
function q_(r16, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r16.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Zh, i);
}
function K_(r16) {
  switch (r16) {
    case 5126:
      return C_;
    case 35664:
      return P_;
    case 35665:
      return D_;
    case 35666:
      return L_;
    case 35674:
      return I_;
    case 35675:
      return U_;
    case 35676:
      return N_;
    case 5124:
    case 35670:
      return F_;
    case 35667:
    case 35671:
      return O_;
    case 35668:
    case 35672:
      return B_;
    case 35669:
    case 35673:
      return k_;
    case 5125:
      return z_;
    case 36294:
      return V_;
    case 36295:
      return G_;
    case 36296:
      return H_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return W_;
    case 35679:
    case 36299:
    case 36307:
      return X_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Y_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return q_;
  }
}
function j_(r16, t) {
  r16.uniform1fv(this.addr, t);
}
function Z_(r16, t) {
  const e = Br(t, this.size, 2);
  r16.uniform2fv(this.addr, e);
}
function $_(r16, t) {
  const e = Br(t, this.size, 3);
  r16.uniform3fv(this.addr, e);
}
function J_(r16, t) {
  const e = Br(t, this.size, 4);
  r16.uniform4fv(this.addr, e);
}
function Q_(r16, t) {
  const e = Br(t, this.size, 4);
  r16.uniformMatrix2fv(this.addr, false, e);
}
function tg(r16, t) {
  const e = Br(t, this.size, 9);
  r16.uniformMatrix3fv(this.addr, false, e);
}
function eg(r16, t) {
  const e = Br(t, this.size, 16);
  r16.uniformMatrix4fv(this.addr, false, e);
}
function ng(r16, t) {
  r16.uniform1iv(this.addr, t);
}
function ig(r16, t) {
  r16.uniform2iv(this.addr, t);
}
function rg(r16, t) {
  r16.uniform3iv(this.addr, t);
}
function sg(r16, t) {
  r16.uniform4iv(this.addr, t);
}
function ag(r16, t) {
  r16.uniform1uiv(this.addr, t);
}
function og(r16, t) {
  r16.uniform2uiv(this.addr, t);
}
function lg(r16, t) {
  r16.uniform3uiv(this.addr, t);
}
function cg(r16, t) {
  r16.uniform4uiv(this.addr, t);
}
function hg(r16, t, e) {
  const n = this.cache, i = t.length, s = ua(e, i);
  Te(n, s) || (r16.uniform1iv(this.addr, s), be(n, s));
  let a;
  this.type === r16.SAMPLER_2D_SHADOW ? a = $o : a = jh;
  for (let o = 0; o !== i; ++o) e.setTexture2D(t[o] || a, s[o]);
}
function ug(r16, t, e) {
  const n = this.cache, i = t.length, s = ua(e, i);
  Te(n, s) || (r16.uniform1iv(this.addr, s), be(n, s));
  for (let a = 0; a !== i; ++a) e.setTexture3D(t[a] || $h, s[a]);
}
function fg(r16, t, e) {
  const n = this.cache, i = t.length, s = ua(e, i);
  Te(n, s) || (r16.uniform1iv(this.addr, s), be(n, s));
  for (let a = 0; a !== i; ++a) e.setTextureCube(t[a] || Jh, s[a]);
}
function dg(r16, t, e) {
  const n = this.cache, i = t.length, s = ua(e, i);
  Te(n, s) || (r16.uniform1iv(this.addr, s), be(n, s));
  for (let a = 0; a !== i; ++a) e.setTexture2DArray(t[a] || Zh, s[a]);
}
function pg(r16) {
  switch (r16) {
    case 5126:
      return j_;
    case 35664:
      return Z_;
    case 35665:
      return $_;
    case 35666:
      return J_;
    case 35674:
      return Q_;
    case 35675:
      return tg;
    case 35676:
      return eg;
    case 5124:
    case 35670:
      return ng;
    case 35667:
    case 35671:
      return ig;
    case 35668:
    case 35672:
      return rg;
    case 35669:
    case 35673:
      return sg;
    case 5125:
      return ag;
    case 36294:
      return og;
    case 36295:
      return lg;
    case 36296:
      return cg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hg;
    case 35679:
    case 36299:
    case 36307:
      return ug;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dg;
  }
}
class mg {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = K_(e.type);
  }
}
class _g {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = pg(e.type);
  }
}
class gg {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const ja = /(\w+)(\])?(\[|\.)?/g;
function Gc(r16, t) {
  r16.seq.push(t), r16.map[t.id] = t;
}
function xg(r16, t, e) {
  const n = r16.name, i = n.length;
  for (ja.lastIndex = 0; ; ) {
    const s = ja.exec(n), a = ja.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Gc(e, l === void 0 ? new mg(o, r16, t) : new _g(o, r16, t));
      break;
    } else {
      let f = e.map[o];
      f === void 0 && (f = new gg(o), Gc(e, f)), e = f;
    }
  }
}
class Ks {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = t.getActiveUniform(e, a), c = t.getUniformLocation(e, o.name);
      xg(o, c, this);
    }
    const i = [], s = [];
    for (const a of this.seq) a.type === t.SAMPLER_2D_SHADOW || a.type === t.SAMPLER_CUBE_SHADOW || a.type === t.SAMPLER_2D_ARRAY_SHADOW ? i.push(a) : s.push(a);
    i.length > 0 && (this.seq = i.concat(s));
  }
  setValue(t, e, n, i) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s], c = n[o.id];
      c.needsUpdate !== false && o.setValue(t, c.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, s = t.length; i !== s; ++i) {
      const a = t[i];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Hc(r16, t, e) {
  const n = r16.createShader(t);
  return r16.shaderSource(n, e), r16.compileShader(n), n;
}
const vg = 37297;
let Mg = 0;
function Sg(r16, t) {
  const e = r16.split(`
`), n = [], i = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Wc = new Ut();
function yg(r16) {
  qt._getMatrix(Wc, qt.workingColorSpace, r16);
  const t = `mat3( ${Wc.elements.map((e) => e.toFixed(4))} )`;
  switch (qt.getTransfer(r16)) {
    case Js:
      return [t, "LinearTransferOETF"];
    case Qt:
      return [t, "sRGBTransferOETF"];
    default:
      return Rt("WebGLProgram: Unsupported color space: ", r16), [t, "LinearTransferOETF"];
  }
}
function Xc(r16, t, e) {
  const n = r16.getShaderParameter(t, r16.COMPILE_STATUS), s = (r16.getShaderInfoLog(t) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + s + `

` + Sg(r16.getShaderSource(t), o);
  } else return s;
}
function Eg(r16, t) {
  const e = yg(t);
  return [`vec4 ${r16}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
const Tg = { [Mh]: "Linear", [Sh]: "Reinhard", [yh]: "Cineon", [ml]: "ACESFilmic", [Th]: "AgX", [bh]: "Neutral", [Eh]: "Custom" };
function bg(r16, t) {
  const e = Tg[t];
  return e === void 0 ? (Rt("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + r16 + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + r16 + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const ks = new k();
function Ag() {
  qt.getLuminanceCoefficients(ks);
  const r16 = ks.x.toFixed(4), t = ks.y.toFixed(4), e = ks.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${r16}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function wg(r16) {
  return [r16.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", r16.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(jr).join(`
`);
}
function Rg(r16) {
  const t = [];
  for (const e in r16) {
    const n = r16[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Cg(r16, t) {
  const e = {}, n = r16.getProgramParameter(t, r16.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r16.getActiveAttrib(t, i), a = s.name;
    let o = 1;
    s.type === r16.FLOAT_MAT2 && (o = 2), s.type === r16.FLOAT_MAT3 && (o = 3), s.type === r16.FLOAT_MAT4 && (o = 4), e[a] = { type: s.type, location: r16.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function jr(r16) {
  return r16 !== "";
}
function Yc(r16, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return r16.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function qc(r16, t) {
  return r16.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Pg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Jo(r16) {
  return r16.replace(Pg, Lg);
}
const Dg = /* @__PURE__ */ new Map();
function Lg(r16, t) {
  let e = Nt[t];
  if (e === void 0) {
    const n = Dg.get(t);
    if (n !== void 0) e = Nt[n], Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return Jo(e);
}
const Ig = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Kc(r16) {
  return r16.replace(Ig, Ug);
}
function Ug(r16, t, e, n) {
  let i = "";
  for (let s = parseInt(t); s < parseInt(e); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function jc(r16) {
  let t = `precision ${r16.precision} float;
	precision ${r16.precision} int;
	precision ${r16.precision} sampler2D;
	precision ${r16.precision} samplerCube;
	precision ${r16.precision} sampler3D;
	precision ${r16.precision} sampler2DArray;
	precision ${r16.precision} sampler2DShadow;
	precision ${r16.precision} samplerCubeShadow;
	precision ${r16.precision} sampler2DArrayShadow;
	precision ${r16.precision} isampler2D;
	precision ${r16.precision} isampler3D;
	precision ${r16.precision} isamplerCube;
	precision ${r16.precision} isampler2DArray;
	precision ${r16.precision} usampler2D;
	precision ${r16.precision} usampler3D;
	precision ${r16.precision} usamplerCube;
	precision ${r16.precision} usampler2DArray;
	`;
  return r16.precision === "highp" ? t += `
#define HIGH_PRECISION` : r16.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : r16.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
const Ng = { [Gs]: "SHADOWMAP_TYPE_PCF", [Kr]: "SHADOWMAP_TYPE_VSM" };
function Fg(r16) {
  return Ng[r16.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Og = { [Ki]: "ENVMAP_TYPE_CUBE", [Rr]: "ENVMAP_TYPE_CUBE", [ca]: "ENVMAP_TYPE_CUBE_UV" };
function Bg(r16) {
  return r16.envMap === false ? "ENVMAP_TYPE_CUBE" : Og[r16.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const kg = { [Rr]: "ENVMAP_MODE_REFRACTION" };
function zg(r16) {
  return r16.envMap === false ? "ENVMAP_MODE_REFLECTION" : kg[r16.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const Vg = { [vh]: "ENVMAP_BLENDING_MULTIPLY", [wf]: "ENVMAP_BLENDING_MIX", [Rf]: "ENVMAP_BLENDING_ADD" };
function Gg(r16) {
  return r16.envMap === false ? "ENVMAP_BLENDING_NONE" : Vg[r16.combine] || "ENVMAP_BLENDING_NONE";
}
function Hg(r16) {
  const t = r16.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function Wg(r16, t, e, n) {
  const i = r16.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = Fg(e), l = Bg(e), h = zg(e), f = Gg(e), u = Hg(e), p = wg(e), _ = Rg(s), g = i.createProgram();
  let d, m, M = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(jr).join(`
`), d.length > 0 && (d += `
`), m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(jr).join(`
`), m.length > 0 && (m += `
`)) : (d = [jc(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(jr).join(`
`), m = [jc(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + f : "", u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "", u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "", u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas || e.batchingColor ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Nn ? "#define TONE_MAPPING" : "", e.toneMapping !== Nn ? Nt.tonemapping_pars_fragment : "", e.toneMapping !== Nn ? bg("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Nt.colorspace_pars_fragment, Eg("linearToOutputTexel", e.outputColorSpace), Ag(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(jr).join(`
`)), a = Jo(a), a = Yc(a, e), a = qc(a, e), o = Jo(o), o = Yc(o, e), o = qc(o, e), a = Kc(a), o = Kc(o), e.isRawShaderMaterial !== true && (M = `#version 300 es
`, d = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + d, m = ["#define varying in", e.glslVersion === lc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === lc ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m);
  const T = M + d + a, y = M + m + o, b = Hc(i, i.VERTEX_SHADER, T), A = Hc(i, i.FRAGMENT_SHADER, y);
  i.attachShader(g, b), i.attachShader(g, A), e.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, e.index0AttributeName) : e.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
  function w(C) {
    if (r16.debug.checkShaderErrors) {
      const L = i.getProgramInfoLog(g) || "", U = i.getShaderInfoLog(b) || "", G = i.getShaderInfoLog(A) || "", O = L.trim(), B = U.trim(), N = G.trim();
      let Z = true, $ = true;
      if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (Z = false, typeof r16.debug.onShaderError == "function") r16.debug.onShaderError(i, g, b, A);
      else {
        const lt = Xc(i, b, "vertex"), ut = Xc(i, A, "fragment");
        jt("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + O + `
` + lt + `
` + ut);
      }
      else O !== "" ? Rt("WebGLProgram: Program Info Log:", O) : (B === "" || N === "") && ($ = false);
      $ && (C.diagnostics = { runnable: Z, programLog: O, vertexShader: { log: B, prefix: d }, fragmentShader: { log: N, prefix: m } });
    }
    i.deleteShader(b), i.deleteShader(A), x = new Ks(i, g), S = Cg(i, g);
  }
  let x;
  this.getUniforms = function() {
    return x === void 0 && w(this), x;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && w(this), S;
  };
  let z = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return z === false && (z = i.getProgramParameter(g, vg)), z;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Mg++, this.cacheKey = t, this.usedTimes = 1, this.program = g, this.vertexShader = b, this.fragmentShader = A, this;
}
let Xg = 0;
class Yg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
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
    return n === void 0 && (n = new qg(t), e.set(t, n)), n;
  }
}
class qg {
  constructor(t) {
    this.id = Xg++, this.code = t, this.usedTimes = 0;
  }
}
function Kg(r16, t, e, n, i, s) {
  const a = new Oh(), o = new Yg(), c = /* @__PURE__ */ new Set(), l = [], h = /* @__PURE__ */ new Map(), f = n.logarithmicDepthBuffer;
  let u = n.precision;
  const p = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(x) {
    return c.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function g(x, S, z, C, L) {
    const U = C.fog, G = L.geometry, O = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? C.environment : null, B = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap, N = t.get(x.envMap || O, B), Z = N && N.mapping === ca ? N.image.height : null, $ = p[x.type];
    x.precision !== null && (u = n.getMaxPrecision(x.precision), u !== x.precision && Rt("WebGLProgram.getParameters:", x.precision, "not supported, using", u, "instead."));
    const lt = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, ut = lt !== void 0 ? lt.length : 0;
    let at = 0;
    G.morphAttributes.position !== void 0 && (at = 1), G.morphAttributes.normal !== void 0 && (at = 2), G.morphAttributes.color !== void 0 && (at = 3);
    let Dt, Wt, Xt, K;
    if ($) {
      const Jt = Cn[$];
      Dt = Jt.vertexShader, Wt = Jt.fragmentShader;
    } else Dt = x.vertexShader, Wt = x.fragmentShader, o.update(x), Xt = o.getVertexShaderID(x), K = o.getFragmentShaderID(x);
    const nt = r16.getRenderTarget(), st = r16.state.buffers.depth.getReversed(), It = L.isInstancedMesh === true, bt = L.isBatchedMesh === true, wt = !!x.map, Ae = !!x.matcap, Yt = !!N, $t = !!x.aoMap, ie = !!x.lightMap, Ft = !!x.bumpMap, _e = !!x.normalMap, P = !!x.displacementMap, Me = !!x.emissiveMap, Zt = !!x.metalnessMap, ae = !!x.roughnessMap, Mt = x.anisotropy > 0, R = x.clearcoat > 0, v = x.dispersion > 0, I = x.iridescence > 0, q = x.sheen > 0, j = x.transmission > 0, Y = Mt && !!x.anisotropyMap, mt = R && !!x.clearcoatMap, it = R && !!x.clearcoatNormalMap, Tt = R && !!x.clearcoatRoughnessMap, At = I && !!x.iridescenceMap, J = I && !!x.iridescenceThicknessMap, tt = q && !!x.sheenColorMap, _t = q && !!x.sheenRoughnessMap, xt = !!x.specularMap, ft = !!x.specularColorMap, Ot = !!x.specularIntensityMap, D = j && !!x.transmissionMap, rt = j && !!x.thicknessMap, et = !!x.gradientMap, pt = !!x.alphaMap, Q = x.alphaTest > 0, X = !!x.alphaHash, gt = !!x.extensions;
    let Ct = Nn;
    x.toneMapped && (nt === null || nt.isXRRenderTarget === true) && (Ct = r16.toneMapping);
    const oe = { shaderID: $, shaderType: x.type, shaderName: x.name, vertexShader: Dt, fragmentShader: Wt, defines: x.defines, customVertexShaderID: Xt, customFragmentShaderID: K, isRawShaderMaterial: x.isRawShaderMaterial === true, glslVersion: x.glslVersion, precision: u, batching: bt, batchingColor: bt && L._colorsTexture !== null, instancing: It, instancingColor: It && L.instanceColor !== null, instancingMorph: It && L.morphTexture !== null, outputColorSpace: nt === null ? r16.outputColorSpace : nt.isXRRenderTarget === true ? nt.texture.colorSpace : Pr, alphaToCoverage: !!x.alphaToCoverage, map: wt, matcap: Ae, envMap: Yt, envMapMode: Yt && N.mapping, envMapCubeUVHeight: Z, aoMap: $t, lightMap: ie, bumpMap: Ft, normalMap: _e, displacementMap: P, emissiveMap: Me, normalMapObjectSpace: _e && x.normalMapType === Df, normalMapTangentSpace: _e && x.normalMapType === Uh, metalnessMap: Zt, roughnessMap: ae, anisotropy: Mt, anisotropyMap: Y, clearcoat: R, clearcoatMap: mt, clearcoatNormalMap: it, clearcoatRoughnessMap: Tt, dispersion: v, iridescence: I, iridescenceMap: At, iridescenceThicknessMap: J, sheen: q, sheenColorMap: tt, sheenRoughnessMap: _t, specularMap: xt, specularColorMap: ft, specularIntensityMap: Ot, transmission: j, transmissionMap: D, thicknessMap: rt, gradientMap: et, opaque: x.transparent === false && x.blending === Sr && x.alphaToCoverage === false, alphaMap: pt, alphaTest: Q, alphaHash: X, combine: x.combine, mapUv: wt && _(x.map.channel), aoMapUv: $t && _(x.aoMap.channel), lightMapUv: ie && _(x.lightMap.channel), bumpMapUv: Ft && _(x.bumpMap.channel), normalMapUv: _e && _(x.normalMap.channel), displacementMapUv: P && _(x.displacementMap.channel), emissiveMapUv: Me && _(x.emissiveMap.channel), metalnessMapUv: Zt && _(x.metalnessMap.channel), roughnessMapUv: ae && _(x.roughnessMap.channel), anisotropyMapUv: Y && _(x.anisotropyMap.channel), clearcoatMapUv: mt && _(x.clearcoatMap.channel), clearcoatNormalMapUv: it && _(x.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Tt && _(x.clearcoatRoughnessMap.channel), iridescenceMapUv: At && _(x.iridescenceMap.channel), iridescenceThicknessMapUv: J && _(x.iridescenceThicknessMap.channel), sheenColorMapUv: tt && _(x.sheenColorMap.channel), sheenRoughnessMapUv: _t && _(x.sheenRoughnessMap.channel), specularMapUv: xt && _(x.specularMap.channel), specularColorMapUv: ft && _(x.specularColorMap.channel), specularIntensityMapUv: Ot && _(x.specularIntensityMap.channel), transmissionMapUv: D && _(x.transmissionMap.channel), thicknessMapUv: rt && _(x.thicknessMap.channel), alphaMapUv: pt && _(x.alphaMap.channel), vertexTangents: !!G.attributes.tangent && (_e || Mt), vertexColors: x.vertexColors, vertexAlphas: x.vertexColors === true && !!G.attributes.color && G.attributes.color.itemSize === 4, pointsUvs: L.isPoints === true && !!G.attributes.uv && (wt || pt), fog: !!U, useFog: x.fog === true, fogExp2: !!U && U.isFogExp2, flatShading: x.wireframe === false && (x.flatShading === true || G.attributes.normal === void 0 && _e === false && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)), sizeAttenuation: x.sizeAttenuation === true, logarithmicDepthBuffer: f, reversedDepthBuffer: st, skinning: L.isSkinnedMesh === true, morphTargets: G.morphAttributes.position !== void 0, morphNormals: G.morphAttributes.normal !== void 0, morphColors: G.morphAttributes.color !== void 0, morphTargetsCount: ut, morphTextureStride: at, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: s.numPlanes, numClipIntersection: s.numIntersection, dithering: x.dithering, shadowMapEnabled: r16.shadowMap.enabled && z.length > 0, shadowMapType: r16.shadowMap.type, toneMapping: Ct, decodeVideoTexture: wt && x.map.isVideoTexture === true && qt.getTransfer(x.map.colorSpace) === Qt, decodeVideoTextureEmissive: Me && x.emissiveMap.isVideoTexture === true && qt.getTransfer(x.emissiveMap.colorSpace) === Qt, premultipliedAlpha: x.premultipliedAlpha, doubleSided: x.side === Pn, flipSided: x.side === qe, useDepthPacking: x.depthPacking >= 0, depthPacking: x.depthPacking || 0, index0AttributeName: x.index0AttributeName, extensionClipCullDistance: gt && x.extensions.clipCullDistance === true && e.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (gt && x.extensions.multiDraw === true || bt) && e.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: e.has("KHR_parallel_shader_compile"), customProgramCacheKey: x.customProgramCacheKey() };
    return oe.vertexUv1s = c.has(1), oe.vertexUv2s = c.has(2), oe.vertexUv3s = c.has(3), c.clear(), oe;
  }
  function d(x) {
    const S = [];
    if (x.shaderID ? S.push(x.shaderID) : (S.push(x.customVertexShaderID), S.push(x.customFragmentShaderID)), x.defines !== void 0) for (const z in x.defines) S.push(z), S.push(x.defines[z]);
    return x.isRawShaderMaterial === false && (m(S, x), M(S, x), S.push(r16.outputColorSpace)), S.push(x.customProgramCacheKey), S.join();
  }
  function m(x, S) {
    x.push(S.precision), x.push(S.outputColorSpace), x.push(S.envMapMode), x.push(S.envMapCubeUVHeight), x.push(S.mapUv), x.push(S.alphaMapUv), x.push(S.lightMapUv), x.push(S.aoMapUv), x.push(S.bumpMapUv), x.push(S.normalMapUv), x.push(S.displacementMapUv), x.push(S.emissiveMapUv), x.push(S.metalnessMapUv), x.push(S.roughnessMapUv), x.push(S.anisotropyMapUv), x.push(S.clearcoatMapUv), x.push(S.clearcoatNormalMapUv), x.push(S.clearcoatRoughnessMapUv), x.push(S.iridescenceMapUv), x.push(S.iridescenceThicknessMapUv), x.push(S.sheenColorMapUv), x.push(S.sheenRoughnessMapUv), x.push(S.specularMapUv), x.push(S.specularColorMapUv), x.push(S.specularIntensityMapUv), x.push(S.transmissionMapUv), x.push(S.thicknessMapUv), x.push(S.combine), x.push(S.fogExp2), x.push(S.sizeAttenuation), x.push(S.morphTargetsCount), x.push(S.morphAttributeCount), x.push(S.numDirLights), x.push(S.numPointLights), x.push(S.numSpotLights), x.push(S.numSpotLightMaps), x.push(S.numHemiLights), x.push(S.numRectAreaLights), x.push(S.numDirLightShadows), x.push(S.numPointLightShadows), x.push(S.numSpotLightShadows), x.push(S.numSpotLightShadowsWithMaps), x.push(S.numLightProbes), x.push(S.shadowMapType), x.push(S.toneMapping), x.push(S.numClippingPlanes), x.push(S.numClipIntersection), x.push(S.depthPacking);
  }
  function M(x, S) {
    a.disableAll(), S.instancing && a.enable(0), S.instancingColor && a.enable(1), S.instancingMorph && a.enable(2), S.matcap && a.enable(3), S.envMap && a.enable(4), S.normalMapObjectSpace && a.enable(5), S.normalMapTangentSpace && a.enable(6), S.clearcoat && a.enable(7), S.iridescence && a.enable(8), S.alphaTest && a.enable(9), S.vertexColors && a.enable(10), S.vertexAlphas && a.enable(11), S.vertexUv1s && a.enable(12), S.vertexUv2s && a.enable(13), S.vertexUv3s && a.enable(14), S.vertexTangents && a.enable(15), S.anisotropy && a.enable(16), S.alphaHash && a.enable(17), S.batching && a.enable(18), S.dispersion && a.enable(19), S.batchingColor && a.enable(20), S.gradientMap && a.enable(21), x.push(a.mask), a.disableAll(), S.fog && a.enable(0), S.useFog && a.enable(1), S.flatShading && a.enable(2), S.logarithmicDepthBuffer && a.enable(3), S.reversedDepthBuffer && a.enable(4), S.skinning && a.enable(5), S.morphTargets && a.enable(6), S.morphNormals && a.enable(7), S.morphColors && a.enable(8), S.premultipliedAlpha && a.enable(9), S.shadowMapEnabled && a.enable(10), S.doubleSided && a.enable(11), S.flipSided && a.enable(12), S.useDepthPacking && a.enable(13), S.dithering && a.enable(14), S.transmission && a.enable(15), S.sheen && a.enable(16), S.opaque && a.enable(17), S.pointsUvs && a.enable(18), S.decodeVideoTexture && a.enable(19), S.decodeVideoTextureEmissive && a.enable(20), S.alphaToCoverage && a.enable(21), x.push(a.mask);
  }
  function T(x) {
    const S = p[x.type];
    let z;
    if (S) {
      const C = Cn[S];
      z = _d.clone(C.uniforms);
    } else z = x.uniforms;
    return z;
  }
  function y(x, S) {
    let z = h.get(S);
    return z !== void 0 ? ++z.usedTimes : (z = new Wg(r16, S, x, i), l.push(z), h.set(S, z)), z;
  }
  function b(x) {
    if (--x.usedTimes === 0) {
      const S = l.indexOf(x);
      l[S] = l[l.length - 1], l.pop(), h.delete(x.cacheKey), x.destroy();
    }
  }
  function A(x) {
    o.remove(x);
  }
  function w() {
    o.dispose();
  }
  return { getParameters: g, getProgramCacheKey: d, getUniforms: T, acquireProgram: y, releaseProgram: b, releaseShaderCache: A, programs: l, dispose: w };
}
function jg() {
  let r16 = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return r16.has(a);
  }
  function e(a) {
    let o = r16.get(a);
    return o === void 0 && (o = {}, r16.set(a, o)), o;
  }
  function n(a) {
    r16.delete(a);
  }
  function i(a, o, c) {
    r16.get(a)[o] = c;
  }
  function s() {
    r16 = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: i, dispose: s };
}
function Zg(r16, t) {
  return r16.groupOrder !== t.groupOrder ? r16.groupOrder - t.groupOrder : r16.renderOrder !== t.renderOrder ? r16.renderOrder - t.renderOrder : r16.material.id !== t.material.id ? r16.material.id - t.material.id : r16.materialVariant !== t.materialVariant ? r16.materialVariant - t.materialVariant : r16.z !== t.z ? r16.z - t.z : r16.id - t.id;
}
function Zc(r16, t) {
  return r16.groupOrder !== t.groupOrder ? r16.groupOrder - t.groupOrder : r16.renderOrder !== t.renderOrder ? r16.renderOrder - t.renderOrder : r16.z !== t.z ? t.z - r16.z : r16.id - t.id;
}
function $c() {
  const r16 = [];
  let t = 0;
  const e = [], n = [], i = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function a(u) {
    let p = 0;
    return u.isInstancedMesh && (p += 2), u.isSkinnedMesh && (p += 1), p;
  }
  function o(u, p, _, g, d, m) {
    let M = r16[t];
    return M === void 0 ? (M = { id: u.id, object: u, geometry: p, material: _, materialVariant: a(u), groupOrder: g, renderOrder: u.renderOrder, z: d, group: m }, r16[t] = M) : (M.id = u.id, M.object = u, M.geometry = p, M.material = _, M.materialVariant = a(u), M.groupOrder = g, M.renderOrder = u.renderOrder, M.z = d, M.group = m), t++, M;
  }
  function c(u, p, _, g, d, m) {
    const M = o(u, p, _, g, d, m);
    _.transmission > 0 ? n.push(M) : _.transparent === true ? i.push(M) : e.push(M);
  }
  function l(u, p, _, g, d, m) {
    const M = o(u, p, _, g, d, m);
    _.transmission > 0 ? n.unshift(M) : _.transparent === true ? i.unshift(M) : e.unshift(M);
  }
  function h(u, p) {
    e.length > 1 && e.sort(u || Zg), n.length > 1 && n.sort(p || Zc), i.length > 1 && i.sort(p || Zc);
  }
  function f() {
    for (let u = t, p = r16.length; u < p; u++) {
      const _ = r16[u];
      if (_.id === null) break;
      _.id = null, _.object = null, _.geometry = null, _.material = null, _.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: i, init: s, push: c, unshift: l, finish: f, sort: h };
}
function $g() {
  let r16 = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const s = r16.get(n);
    let a;
    return s === void 0 ? (a = new $c(), r16.set(n, [a])) : i >= s.length ? (a = new $c(), s.push(a)) : a = s[i], a;
  }
  function e() {
    r16 = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function Jg() {
  const r16 = {};
  return { get: function(t) {
    if (r16[t.id] !== void 0) return r16[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new k(), color: new Vt() };
        break;
      case "SpotLight":
        e = { position: new k(), direction: new k(), color: new Vt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new k(), color: new Vt(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new k(), skyColor: new Vt(), groundColor: new Vt() };
        break;
      case "RectAreaLight":
        e = { color: new Vt(), position: new k(), halfWidth: new k(), halfHeight: new k() };
        break;
    }
    return r16[t.id] = e, e;
  } };
}
function Qg() {
  const r16 = {};
  return { get: function(t) {
    if (r16[t.id] !== void 0) return r16[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pt() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pt() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pt(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return r16[t.id] = e, e;
  } };
}
let t0 = 0;
function e0(r16, t) {
  return (t.castShadow ? 2 : 0) - (r16.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (r16.map ? 1 : 0);
}
function n0(r16) {
  const t = new Jg(), e = Qg(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) n.probe.push(new k());
  const i = new k(), s = new me(), a = new me();
  function o(l) {
    let h = 0, f = 0, u = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, _ = 0, g = 0, d = 0, m = 0, M = 0, T = 0, y = 0, b = 0, A = 0, w = 0;
    l.sort(e0);
    for (let S = 0, z = l.length; S < z; S++) {
      const C = l[S], L = C.color, U = C.intensity, G = C.distance;
      let O = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === Cr ? O = C.shadow.map.texture : O = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight) h += L.r * U, f += L.g * U, u += L.b * U;
      else if (C.isLightProbe) {
        for (let B = 0; B < 9; B++) n.probe[B].addScaledVector(C.sh.coefficients[B], U);
        w++;
      } else if (C.isDirectionalLight) {
        const B = t.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const N = C.shadow, Z = e.get(C);
          Z.shadowIntensity = N.intensity, Z.shadowBias = N.bias, Z.shadowNormalBias = N.normalBias, Z.shadowRadius = N.radius, Z.shadowMapSize = N.mapSize, n.directionalShadow[p] = Z, n.directionalShadowMap[p] = O, n.directionalShadowMatrix[p] = C.shadow.matrix, M++;
        }
        n.directional[p] = B, p++;
      } else if (C.isSpotLight) {
        const B = t.get(C);
        B.position.setFromMatrixPosition(C.matrixWorld), B.color.copy(L).multiplyScalar(U), B.distance = G, B.coneCos = Math.cos(C.angle), B.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), B.decay = C.decay, n.spot[g] = B;
        const N = C.shadow;
        if (C.map && (n.spotLightMap[b] = C.map, b++, N.updateMatrices(C), C.castShadow && A++), n.spotLightMatrix[g] = N.matrix, C.castShadow) {
          const Z = e.get(C);
          Z.shadowIntensity = N.intensity, Z.shadowBias = N.bias, Z.shadowNormalBias = N.normalBias, Z.shadowRadius = N.radius, Z.shadowMapSize = N.mapSize, n.spotShadow[g] = Z, n.spotShadowMap[g] = O, y++;
        }
        g++;
      } else if (C.isRectAreaLight) {
        const B = t.get(C);
        B.color.copy(L).multiplyScalar(U), B.halfWidth.set(C.width * 0.5, 0, 0), B.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[d] = B, d++;
      } else if (C.isPointLight) {
        const B = t.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), B.distance = C.distance, B.decay = C.decay, C.castShadow) {
          const N = C.shadow, Z = e.get(C);
          Z.shadowIntensity = N.intensity, Z.shadowBias = N.bias, Z.shadowNormalBias = N.normalBias, Z.shadowRadius = N.radius, Z.shadowMapSize = N.mapSize, Z.shadowCameraNear = N.camera.near, Z.shadowCameraFar = N.camera.far, n.pointShadow[_] = Z, n.pointShadowMap[_] = O, n.pointShadowMatrix[_] = C.shadow.matrix, T++;
        }
        n.point[_] = B, _++;
      } else if (C.isHemisphereLight) {
        const B = t.get(C);
        B.skyColor.copy(C.color).multiplyScalar(U), B.groundColor.copy(C.groundColor).multiplyScalar(U), n.hemi[m] = B, m++;
      }
    }
    d > 0 && (r16.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ot.LTC_FLOAT_1, n.rectAreaLTC2 = ot.LTC_FLOAT_2) : (n.rectAreaLTC1 = ot.LTC_HALF_1, n.rectAreaLTC2 = ot.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = u;
    const x = n.hash;
    (x.directionalLength !== p || x.pointLength !== _ || x.spotLength !== g || x.rectAreaLength !== d || x.hemiLength !== m || x.numDirectionalShadows !== M || x.numPointShadows !== T || x.numSpotShadows !== y || x.numSpotMaps !== b || x.numLightProbes !== w) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = d, n.point.length = _, n.hemi.length = m, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = y + b - A, n.spotLightMap.length = b, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = w, x.directionalLength = p, x.pointLength = _, x.spotLength = g, x.rectAreaLength = d, x.hemiLength = m, x.numDirectionalShadows = M, x.numPointShadows = T, x.numSpotShadows = y, x.numSpotMaps = b, x.numLightProbes = w, n.version = t0++);
  }
  function c(l, h) {
    let f = 0, u = 0, p = 0, _ = 0, g = 0;
    const d = h.matrixWorldInverse;
    for (let m = 0, M = l.length; m < M; m++) {
      const T = l[m];
      if (T.isDirectionalLight) {
        const y = n.directional[f];
        y.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(d), f++;
      } else if (T.isSpotLight) {
        const y = n.spot[p];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(d), y.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(d), p++;
      } else if (T.isRectAreaLight) {
        const y = n.rectArea[_];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(d), a.identity(), s.copy(T.matrixWorld), s.premultiply(d), a.extractRotation(s), y.halfWidth.set(T.width * 0.5, 0, 0), y.halfHeight.set(0, T.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), _++;
      } else if (T.isPointLight) {
        const y = n.point[u];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(d), u++;
      } else if (T.isHemisphereLight) {
        const y = n.hemi[g];
        y.direction.setFromMatrixPosition(T.matrixWorld), y.direction.transformDirection(d), g++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function Jc(r16) {
  const t = new n0(r16), e = [], n = [];
  function i(h) {
    l.camera = h, e.length = 0, n.length = 0;
  }
  function s(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function c(h) {
    t.setupView(e, h);
  }
  const l = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: i, state: l, setupLights: o, setupLightsView: c, pushLight: s, pushShadow: a };
}
function i0(r16) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, s = 0) {
    const a = t.get(i);
    let o;
    return a === void 0 ? (o = new Jc(r16), t.set(i, [o])) : s >= a.length ? (o = new Jc(r16), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const r0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, s0 = `uniform sampler2D shadow_pass;
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
}`, a0 = [new k(1, 0, 0), new k(-1, 0, 0), new k(0, 1, 0), new k(0, -1, 0), new k(0, 0, 1), new k(0, 0, -1)], o0 = [new k(0, -1, 0), new k(0, -1, 0), new k(0, 0, 1), new k(0, 0, -1), new k(0, -1, 0), new k(0, -1, 0)], Qc = new me(), Yr = new k(), Za = new k();
function l0(r16, t, e) {
  let n = new wl();
  const i = new Pt(), s = new Pt(), a = new de(), o = new Md(), c = new Sd(), l = {}, h = e.maxTextureSize, f = { [Ei]: qe, [qe]: Ei, [Pn]: Pn }, u = new Vn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Pt() }, radius: { value: 4 } }, vertexShader: r0, fragmentShader: s0 }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new Hn();
  _.setAttribute("position", new On(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const g = new Gt(_, u), d = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Gs;
  let m = this.type;
  this.render = function(A, w, x) {
    if (d.enabled === false || d.autoUpdate === false && d.needsUpdate === false || A.length === 0) return;
    this.type === xh && (Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = Gs);
    const S = r16.getRenderTarget(), z = r16.getActiveCubeFace(), C = r16.getActiveMipmapLevel(), L = r16.state;
    L.setBlending(ti), L.buffers.depth.getReversed() === true ? L.buffers.color.setClear(0, 0, 0, 0) : L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(true), L.setScissorTest(false);
    const U = m !== this.type;
    U && w.traverse(function(G) {
      G.material && (Array.isArray(G.material) ? G.material.forEach((O) => O.needsUpdate = true) : G.material.needsUpdate = true);
    });
    for (let G = 0, O = A.length; G < O; G++) {
      const B = A[G], N = B.shadow;
      if (N === void 0) {
        Rt("WebGLShadowMap:", B, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === false && N.needsUpdate === false) continue;
      i.copy(N.mapSize);
      const Z = N.getFrameExtents();
      i.multiply(Z), s.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / Z.x), i.x = s.x * Z.x, N.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / Z.y), i.y = s.y * Z.y, N.mapSize.y = s.y));
      const $ = r16.state.buffers.depth.getReversed();
      if (N.camera._reversedDepth = $, N.map === null || U === true) {
        if (N.map !== null && (N.map.depthTexture !== null && (N.map.depthTexture.dispose(), N.map.depthTexture = null), N.map.dispose()), this.type === Kr) {
          if (B.isPointLight) {
            Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          N.map = new Fn(i.x, i.y, { format: Cr, type: ni, minFilter: Be, magFilter: Be, generateMipmaps: false }), N.map.texture.name = B.name + ".shadowMap", N.map.depthTexture = new ss(i.x, i.y, Ln), N.map.depthTexture.name = B.name + ".shadowMapDepth", N.map.depthTexture.format = ii, N.map.depthTexture.compareFunction = null, N.map.depthTexture.minFilter = Ie, N.map.depthTexture.magFilter = Ie;
        } else B.isPointLight ? (N.map = new Kh(i.x), N.map.depthTexture = new dd(i.x, kn)) : (N.map = new Fn(i.x, i.y), N.map.depthTexture = new ss(i.x, i.y, kn)), N.map.depthTexture.name = B.name + ".shadowMap", N.map.depthTexture.format = ii, this.type === Gs ? (N.map.depthTexture.compareFunction = $ ? El : yl, N.map.depthTexture.minFilter = Be, N.map.depthTexture.magFilter = Be) : (N.map.depthTexture.compareFunction = null, N.map.depthTexture.minFilter = Ie, N.map.depthTexture.magFilter = Ie);
        N.camera.updateProjectionMatrix();
      }
      const lt = N.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ut = 0; ut < lt; ut++) {
        if (N.map.isWebGLCubeRenderTarget) r16.setRenderTarget(N.map, ut), r16.clear();
        else {
          ut === 0 && (r16.setRenderTarget(N.map), r16.clear());
          const at = N.getViewport(ut);
          a.set(s.x * at.x, s.y * at.y, s.x * at.z, s.y * at.w), L.viewport(a);
        }
        if (B.isPointLight) {
          const at = N.camera, Dt = N.matrix, Wt = B.distance || at.far;
          Wt !== at.far && (at.far = Wt, at.updateProjectionMatrix()), Yr.setFromMatrixPosition(B.matrixWorld), at.position.copy(Yr), Za.copy(at.position), Za.add(a0[ut]), at.up.copy(o0[ut]), at.lookAt(Za), at.updateMatrixWorld(), Dt.makeTranslation(-Yr.x, -Yr.y, -Yr.z), Qc.multiplyMatrices(at.projectionMatrix, at.matrixWorldInverse), N._frustum.setFromProjectionMatrix(Qc, at.coordinateSystem, at.reversedDepth);
        } else N.updateMatrices(B);
        n = N.getFrustum(), y(w, x, N.camera, B, this.type);
      }
      N.isPointLightShadow !== true && this.type === Kr && M(N, x), N.needsUpdate = false;
    }
    m = this.type, d.needsUpdate = false, r16.setRenderTarget(S, z, C);
  };
  function M(A, w) {
    const x = t.update(g);
    u.defines.VSM_SAMPLES !== A.blurSamples && (u.defines.VSM_SAMPLES = A.blurSamples, p.defines.VSM_SAMPLES = A.blurSamples, u.needsUpdate = true, p.needsUpdate = true), A.mapPass === null && (A.mapPass = new Fn(i.x, i.y, { format: Cr, type: ni })), u.uniforms.shadow_pass.value = A.map.depthTexture, u.uniforms.resolution.value = A.mapSize, u.uniforms.radius.value = A.radius, r16.setRenderTarget(A.mapPass), r16.clear(), r16.renderBufferDirect(w, null, x, u, g, null), p.uniforms.shadow_pass.value = A.mapPass.texture, p.uniforms.resolution.value = A.mapSize, p.uniforms.radius.value = A.radius, r16.setRenderTarget(A.map), r16.clear(), r16.renderBufferDirect(w, null, x, p, g, null);
  }
  function T(A, w, x, S) {
    let z = null;
    const C = x.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (C !== void 0) z = C;
    else if (z = x.isPointLight === true ? c : o, r16.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === true) {
      const L = z.uuid, U = w.uuid;
      let G = l[L];
      G === void 0 && (G = {}, l[L] = G);
      let O = G[U];
      O === void 0 && (O = z.clone(), G[U] = O, w.addEventListener("dispose", b)), z = O;
    }
    if (z.visible = w.visible, z.wireframe = w.wireframe, S === Kr ? z.side = w.shadowSide !== null ? w.shadowSide : w.side : z.side = w.shadowSide !== null ? w.shadowSide : f[w.side], z.alphaMap = w.alphaMap, z.alphaTest = w.alphaToCoverage === true ? 0.5 : w.alphaTest, z.map = w.map, z.clipShadows = w.clipShadows, z.clippingPlanes = w.clippingPlanes, z.clipIntersection = w.clipIntersection, z.displacementMap = w.displacementMap, z.displacementScale = w.displacementScale, z.displacementBias = w.displacementBias, z.wireframeLinewidth = w.wireframeLinewidth, z.linewidth = w.linewidth, x.isPointLight === true && z.isMeshDistanceMaterial === true) {
      const L = r16.properties.get(z);
      L.light = x;
    }
    return z;
  }
  function y(A, w, x, S, z) {
    if (A.visible === false) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && z === Kr) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, A.matrixWorld);
      const U = t.update(A), G = A.material;
      if (Array.isArray(G)) {
        const O = U.groups;
        for (let B = 0, N = O.length; B < N; B++) {
          const Z = O[B], $ = G[Z.materialIndex];
          if ($ && $.visible) {
            const lt = T(A, $, S, z);
            A.onBeforeShadow(r16, A, w, x, U, lt, Z), r16.renderBufferDirect(x, null, U, lt, A, Z), A.onAfterShadow(r16, A, w, x, U, lt, Z);
          }
        }
      } else if (G.visible) {
        const O = T(A, G, S, z);
        A.onBeforeShadow(r16, A, w, x, U, O, null), r16.renderBufferDirect(x, null, U, O, A, null), A.onAfterShadow(r16, A, w, x, U, O, null);
      }
    }
    const L = A.children;
    for (let U = 0, G = L.length; U < G; U++) y(L[U], w, x, S, z);
  }
  function b(A) {
    A.target.removeEventListener("dispose", b);
    for (const x in l) {
      const S = l[x], z = A.target.uuid;
      z in S && (S[z].dispose(), delete S[z]);
    }
  }
}
function c0(r16, t) {
  function e() {
    let D = false;
    const rt = new de();
    let et = null;
    const pt = new de(0, 0, 0, 0);
    return { setMask: function(Q) {
      et !== Q && !D && (r16.colorMask(Q, Q, Q, Q), et = Q);
    }, setLocked: function(Q) {
      D = Q;
    }, setClear: function(Q, X, gt, Ct, oe) {
      oe === true && (Q *= Ct, X *= Ct, gt *= Ct), rt.set(Q, X, gt, Ct), pt.equals(rt) === false && (r16.clearColor(Q, X, gt, Ct), pt.copy(rt));
    }, reset: function() {
      D = false, et = null, pt.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, rt = false, et = null, pt = null, Q = null;
    return { setReversed: function(X) {
      if (rt !== X) {
        const gt = t.get("EXT_clip_control");
        X ? gt.clipControlEXT(gt.LOWER_LEFT_EXT, gt.ZERO_TO_ONE_EXT) : gt.clipControlEXT(gt.LOWER_LEFT_EXT, gt.NEGATIVE_ONE_TO_ONE_EXT), rt = X;
        const Ct = Q;
        Q = null, this.setClear(Ct);
      }
    }, getReversed: function() {
      return rt;
    }, setTest: function(X) {
      X ? nt(r16.DEPTH_TEST) : st(r16.DEPTH_TEST);
    }, setMask: function(X) {
      et !== X && !D && (r16.depthMask(X), et = X);
    }, setFunc: function(X) {
      if (rt && (X = Vf[X]), pt !== X) {
        switch (X) {
          case co:
            r16.depthFunc(r16.NEVER);
            break;
          case ho:
            r16.depthFunc(r16.ALWAYS);
            break;
          case uo:
            r16.depthFunc(r16.LESS);
            break;
          case wr:
            r16.depthFunc(r16.LEQUAL);
            break;
          case fo:
            r16.depthFunc(r16.EQUAL);
            break;
          case po:
            r16.depthFunc(r16.GEQUAL);
            break;
          case mo:
            r16.depthFunc(r16.GREATER);
            break;
          case _o:
            r16.depthFunc(r16.NOTEQUAL);
            break;
          default:
            r16.depthFunc(r16.LEQUAL);
        }
        pt = X;
      }
    }, setLocked: function(X) {
      D = X;
    }, setClear: function(X) {
      Q !== X && (Q = X, rt && (X = 1 - X), r16.clearDepth(X));
    }, reset: function() {
      D = false, et = null, pt = null, Q = null, rt = false;
    } };
  }
  function i() {
    let D = false, rt = null, et = null, pt = null, Q = null, X = null, gt = null, Ct = null, oe = null;
    return { setTest: function(Jt) {
      D || (Jt ? nt(r16.STENCIL_TEST) : st(r16.STENCIL_TEST));
    }, setMask: function(Jt) {
      rt !== Jt && !D && (r16.stencilMask(Jt), rt = Jt);
    }, setFunc: function(Jt, Wn, Xn) {
      (et !== Jt || pt !== Wn || Q !== Xn) && (r16.stencilFunc(Jt, Wn, Xn), et = Jt, pt = Wn, Q = Xn);
    }, setOp: function(Jt, Wn, Xn) {
      (X !== Jt || gt !== Wn || Ct !== Xn) && (r16.stencilOp(Jt, Wn, Xn), X = Jt, gt = Wn, Ct = Xn);
    }, setLocked: function(Jt) {
      D = Jt;
    }, setClear: function(Jt) {
      oe !== Jt && (r16.clearStencil(Jt), oe = Jt);
    }, reset: function() {
      D = false, rt = null, et = null, pt = null, Q = null, X = null, gt = null, Ct = null, oe = null;
    } };
  }
  const s = new e(), a = new n(), o = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, u = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = false, d = null, m = null, M = null, T = null, y = null, b = null, A = null, w = new Vt(0, 0, 0), x = 0, S = false, z = null, C = null, L = null, U = null, G = null;
  const O = r16.getParameter(r16.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = false, N = 0;
  const Z = r16.getParameter(r16.VERSION);
  Z.indexOf("WebGL") !== -1 ? (N = parseFloat(/^WebGL (\d)/.exec(Z)[1]), B = N >= 1) : Z.indexOf("OpenGL ES") !== -1 && (N = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), B = N >= 2);
  let $ = null, lt = {};
  const ut = r16.getParameter(r16.SCISSOR_BOX), at = r16.getParameter(r16.VIEWPORT), Dt = new de().fromArray(ut), Wt = new de().fromArray(at);
  function Xt(D, rt, et, pt) {
    const Q = new Uint8Array(4), X = r16.createTexture();
    r16.bindTexture(D, X), r16.texParameteri(D, r16.TEXTURE_MIN_FILTER, r16.NEAREST), r16.texParameteri(D, r16.TEXTURE_MAG_FILTER, r16.NEAREST);
    for (let gt = 0; gt < et; gt++) D === r16.TEXTURE_3D || D === r16.TEXTURE_2D_ARRAY ? r16.texImage3D(rt, 0, r16.RGBA, 1, 1, pt, 0, r16.RGBA, r16.UNSIGNED_BYTE, Q) : r16.texImage2D(rt + gt, 0, r16.RGBA, 1, 1, 0, r16.RGBA, r16.UNSIGNED_BYTE, Q);
    return X;
  }
  const K = {};
  K[r16.TEXTURE_2D] = Xt(r16.TEXTURE_2D, r16.TEXTURE_2D, 1), K[r16.TEXTURE_CUBE_MAP] = Xt(r16.TEXTURE_CUBE_MAP, r16.TEXTURE_CUBE_MAP_POSITIVE_X, 6), K[r16.TEXTURE_2D_ARRAY] = Xt(r16.TEXTURE_2D_ARRAY, r16.TEXTURE_2D_ARRAY, 1, 1), K[r16.TEXTURE_3D] = Xt(r16.TEXTURE_3D, r16.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), nt(r16.DEPTH_TEST), a.setFunc(wr), Ft(false), _e(nc), nt(r16.CULL_FACE), $t(ti);
  function nt(D) {
    h[D] !== true && (r16.enable(D), h[D] = true);
  }
  function st(D) {
    h[D] !== false && (r16.disable(D), h[D] = false);
  }
  function It(D, rt) {
    return f[D] !== rt ? (r16.bindFramebuffer(D, rt), f[D] = rt, D === r16.DRAW_FRAMEBUFFER && (f[r16.FRAMEBUFFER] = rt), D === r16.FRAMEBUFFER && (f[r16.DRAW_FRAMEBUFFER] = rt), true) : false;
  }
  function bt(D, rt) {
    let et = p, pt = false;
    if (D) {
      et = u.get(rt), et === void 0 && (et = [], u.set(rt, et));
      const Q = D.textures;
      if (et.length !== Q.length || et[0] !== r16.COLOR_ATTACHMENT0) {
        for (let X = 0, gt = Q.length; X < gt; X++) et[X] = r16.COLOR_ATTACHMENT0 + X;
        et.length = Q.length, pt = true;
      }
    } else et[0] !== r16.BACK && (et[0] = r16.BACK, pt = true);
    pt && r16.drawBuffers(et);
  }
  function wt(D) {
    return _ !== D ? (r16.useProgram(D), _ = D, true) : false;
  }
  const Ae = { [ki]: r16.FUNC_ADD, [hf]: r16.FUNC_SUBTRACT, [uf]: r16.FUNC_REVERSE_SUBTRACT };
  Ae[ff] = r16.MIN, Ae[df] = r16.MAX;
  const Yt = { [pf]: r16.ZERO, [mf]: r16.ONE, [_f]: r16.SRC_COLOR, [oo]: r16.SRC_ALPHA, [yf]: r16.SRC_ALPHA_SATURATE, [Mf]: r16.DST_COLOR, [xf]: r16.DST_ALPHA, [gf]: r16.ONE_MINUS_SRC_COLOR, [lo]: r16.ONE_MINUS_SRC_ALPHA, [Sf]: r16.ONE_MINUS_DST_COLOR, [vf]: r16.ONE_MINUS_DST_ALPHA, [Ef]: r16.CONSTANT_COLOR, [Tf]: r16.ONE_MINUS_CONSTANT_COLOR, [bf]: r16.CONSTANT_ALPHA, [Af]: r16.ONE_MINUS_CONSTANT_ALPHA };
  function $t(D, rt, et, pt, Q, X, gt, Ct, oe, Jt) {
    if (D === ti) {
      g === true && (st(r16.BLEND), g = false);
      return;
    }
    if (g === false && (nt(r16.BLEND), g = true), D !== cf) {
      if (D !== d || Jt !== S) {
        if ((m !== ki || y !== ki) && (r16.blendEquation(r16.FUNC_ADD), m = ki, y = ki), Jt) switch (D) {
          case Sr:
            r16.blendFuncSeparate(r16.ONE, r16.ONE_MINUS_SRC_ALPHA, r16.ONE, r16.ONE_MINUS_SRC_ALPHA);
            break;
          case ic:
            r16.blendFunc(r16.ONE, r16.ONE);
            break;
          case rc:
            r16.blendFuncSeparate(r16.ZERO, r16.ONE_MINUS_SRC_COLOR, r16.ZERO, r16.ONE);
            break;
          case sc:
            r16.blendFuncSeparate(r16.DST_COLOR, r16.ONE_MINUS_SRC_ALPHA, r16.ZERO, r16.ONE);
            break;
          default:
            jt("WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case Sr:
            r16.blendFuncSeparate(r16.SRC_ALPHA, r16.ONE_MINUS_SRC_ALPHA, r16.ONE, r16.ONE_MINUS_SRC_ALPHA);
            break;
          case ic:
            r16.blendFuncSeparate(r16.SRC_ALPHA, r16.ONE, r16.ONE, r16.ONE);
            break;
          case rc:
            jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case sc:
            jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            jt("WebGLState: Invalid blending: ", D);
            break;
        }
        M = null, T = null, b = null, A = null, w.set(0, 0, 0), x = 0, d = D, S = Jt;
      }
      return;
    }
    Q = Q || rt, X = X || et, gt = gt || pt, (rt !== m || Q !== y) && (r16.blendEquationSeparate(Ae[rt], Ae[Q]), m = rt, y = Q), (et !== M || pt !== T || X !== b || gt !== A) && (r16.blendFuncSeparate(Yt[et], Yt[pt], Yt[X], Yt[gt]), M = et, T = pt, b = X, A = gt), (Ct.equals(w) === false || oe !== x) && (r16.blendColor(Ct.r, Ct.g, Ct.b, oe), w.copy(Ct), x = oe), d = D, S = false;
  }
  function ie(D, rt) {
    D.side === Pn ? st(r16.CULL_FACE) : nt(r16.CULL_FACE);
    let et = D.side === qe;
    rt && (et = !et), Ft(et), D.blending === Sr && D.transparent === false ? $t(ti) : $t(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const pt = D.stencilWrite;
    o.setTest(pt), pt && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Me(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? nt(r16.SAMPLE_ALPHA_TO_COVERAGE) : st(r16.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ft(D) {
    z !== D && (D ? r16.frontFace(r16.CW) : r16.frontFace(r16.CCW), z = D);
  }
  function _e(D) {
    D !== of ? (nt(r16.CULL_FACE), D !== C && (D === nc ? r16.cullFace(r16.BACK) : D === lf ? r16.cullFace(r16.FRONT) : r16.cullFace(r16.FRONT_AND_BACK))) : st(r16.CULL_FACE), C = D;
  }
  function P(D) {
    D !== L && (B && r16.lineWidth(D), L = D);
  }
  function Me(D, rt, et) {
    D ? (nt(r16.POLYGON_OFFSET_FILL), (U !== rt || G !== et) && (U = rt, G = et, a.getReversed() && (rt = -rt), r16.polygonOffset(rt, et))) : st(r16.POLYGON_OFFSET_FILL);
  }
  function Zt(D) {
    D ? nt(r16.SCISSOR_TEST) : st(r16.SCISSOR_TEST);
  }
  function ae(D) {
    D === void 0 && (D = r16.TEXTURE0 + O - 1), $ !== D && (r16.activeTexture(D), $ = D);
  }
  function Mt(D, rt, et) {
    et === void 0 && ($ === null ? et = r16.TEXTURE0 + O - 1 : et = $);
    let pt = lt[et];
    pt === void 0 && (pt = { type: void 0, texture: void 0 }, lt[et] = pt), (pt.type !== D || pt.texture !== rt) && ($ !== et && (r16.activeTexture(et), $ = et), r16.bindTexture(D, rt || K[D]), pt.type = D, pt.texture = rt);
  }
  function R() {
    const D = lt[$];
    D !== void 0 && D.type !== void 0 && (r16.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function v() {
    try {
      r16.compressedTexImage2D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function I() {
    try {
      r16.compressedTexImage3D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function q() {
    try {
      r16.texSubImage2D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function j() {
    try {
      r16.texSubImage3D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function Y() {
    try {
      r16.compressedTexSubImage2D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function mt() {
    try {
      r16.compressedTexSubImage3D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function it() {
    try {
      r16.texStorage2D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function Tt() {
    try {
      r16.texStorage3D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function At() {
    try {
      r16.texImage2D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function J() {
    try {
      r16.texImage3D(...arguments);
    } catch (D) {
      jt("WebGLState:", D);
    }
  }
  function tt(D) {
    Dt.equals(D) === false && (r16.scissor(D.x, D.y, D.z, D.w), Dt.copy(D));
  }
  function _t(D) {
    Wt.equals(D) === false && (r16.viewport(D.x, D.y, D.z, D.w), Wt.copy(D));
  }
  function xt(D, rt) {
    let et = l.get(rt);
    et === void 0 && (et = /* @__PURE__ */ new WeakMap(), l.set(rt, et));
    let pt = et.get(D);
    pt === void 0 && (pt = r16.getUniformBlockIndex(rt, D.name), et.set(D, pt));
  }
  function ft(D, rt) {
    const pt = l.get(rt).get(D);
    c.get(rt) !== pt && (r16.uniformBlockBinding(rt, pt, D.__bindingPointIndex), c.set(rt, pt));
  }
  function Ot() {
    r16.disable(r16.BLEND), r16.disable(r16.CULL_FACE), r16.disable(r16.DEPTH_TEST), r16.disable(r16.POLYGON_OFFSET_FILL), r16.disable(r16.SCISSOR_TEST), r16.disable(r16.STENCIL_TEST), r16.disable(r16.SAMPLE_ALPHA_TO_COVERAGE), r16.blendEquation(r16.FUNC_ADD), r16.blendFunc(r16.ONE, r16.ZERO), r16.blendFuncSeparate(r16.ONE, r16.ZERO, r16.ONE, r16.ZERO), r16.blendColor(0, 0, 0, 0), r16.colorMask(true, true, true, true), r16.clearColor(0, 0, 0, 0), r16.depthMask(true), r16.depthFunc(r16.LESS), a.setReversed(false), r16.clearDepth(1), r16.stencilMask(4294967295), r16.stencilFunc(r16.ALWAYS, 0, 4294967295), r16.stencilOp(r16.KEEP, r16.KEEP, r16.KEEP), r16.clearStencil(0), r16.cullFace(r16.BACK), r16.frontFace(r16.CCW), r16.polygonOffset(0, 0), r16.activeTexture(r16.TEXTURE0), r16.bindFramebuffer(r16.FRAMEBUFFER, null), r16.bindFramebuffer(r16.DRAW_FRAMEBUFFER, null), r16.bindFramebuffer(r16.READ_FRAMEBUFFER, null), r16.useProgram(null), r16.lineWidth(1), r16.scissor(0, 0, r16.canvas.width, r16.canvas.height), r16.viewport(0, 0, r16.canvas.width, r16.canvas.height), h = {}, $ = null, lt = {}, f = {}, u = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = false, d = null, m = null, M = null, T = null, y = null, b = null, A = null, w = new Vt(0, 0, 0), x = 0, S = false, z = null, C = null, L = null, U = null, G = null, Dt.set(0, 0, r16.canvas.width, r16.canvas.height), Wt.set(0, 0, r16.canvas.width, r16.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: nt, disable: st, bindFramebuffer: It, drawBuffers: bt, useProgram: wt, setBlending: $t, setMaterial: ie, setFlipSided: Ft, setCullFace: _e, setLineWidth: P, setPolygonOffset: Me, setScissorTest: Zt, activeTexture: ae, bindTexture: Mt, unbindTexture: R, compressedTexImage2D: v, compressedTexImage3D: I, texImage2D: At, texImage3D: J, updateUBOMapping: xt, uniformBlockBinding: ft, texStorage2D: it, texStorage3D: Tt, texSubImage2D: q, texSubImage3D: j, compressedTexSubImage2D: Y, compressedTexSubImage3D: mt, scissor: tt, viewport: _t, reset: Ot };
}
function h0(r16, t, e, n, i, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new Pt(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const u = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(R, v) {
    return p ? new OffscreenCanvas(R, v) : Qs("canvas");
  }
  function g(R, v, I) {
    let q = 1;
    const j = Mt(R);
    if ((j.width > I || j.height > I) && (q = I / Math.max(j.width, j.height)), q < 1) if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
      const Y = Math.floor(q * j.width), mt = Math.floor(q * j.height);
      f === void 0 && (f = _(Y, mt));
      const it = v ? _(Y, mt) : f;
      return it.width = Y, it.height = mt, it.getContext("2d").drawImage(R, 0, 0, Y, mt), Rt("WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + Y + "x" + mt + ")."), it;
    } else return "data" in R && Rt("WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), R;
    return R;
  }
  function d(R) {
    return R.generateMipmaps;
  }
  function m(R) {
    r16.generateMipmap(R);
  }
  function M(R) {
    return R.isWebGLCubeRenderTarget ? r16.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? r16.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? r16.TEXTURE_2D_ARRAY : r16.TEXTURE_2D;
  }
  function T(R, v, I, q, j = false) {
    if (R !== null) {
      if (r16[R] !== void 0) return r16[R];
      Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let Y = v;
    if (v === r16.RED && (I === r16.FLOAT && (Y = r16.R32F), I === r16.HALF_FLOAT && (Y = r16.R16F), I === r16.UNSIGNED_BYTE && (Y = r16.R8)), v === r16.RED_INTEGER && (I === r16.UNSIGNED_BYTE && (Y = r16.R8UI), I === r16.UNSIGNED_SHORT && (Y = r16.R16UI), I === r16.UNSIGNED_INT && (Y = r16.R32UI), I === r16.BYTE && (Y = r16.R8I), I === r16.SHORT && (Y = r16.R16I), I === r16.INT && (Y = r16.R32I)), v === r16.RG && (I === r16.FLOAT && (Y = r16.RG32F), I === r16.HALF_FLOAT && (Y = r16.RG16F), I === r16.UNSIGNED_BYTE && (Y = r16.RG8)), v === r16.RG_INTEGER && (I === r16.UNSIGNED_BYTE && (Y = r16.RG8UI), I === r16.UNSIGNED_SHORT && (Y = r16.RG16UI), I === r16.UNSIGNED_INT && (Y = r16.RG32UI), I === r16.BYTE && (Y = r16.RG8I), I === r16.SHORT && (Y = r16.RG16I), I === r16.INT && (Y = r16.RG32I)), v === r16.RGB_INTEGER && (I === r16.UNSIGNED_BYTE && (Y = r16.RGB8UI), I === r16.UNSIGNED_SHORT && (Y = r16.RGB16UI), I === r16.UNSIGNED_INT && (Y = r16.RGB32UI), I === r16.BYTE && (Y = r16.RGB8I), I === r16.SHORT && (Y = r16.RGB16I), I === r16.INT && (Y = r16.RGB32I)), v === r16.RGBA_INTEGER && (I === r16.UNSIGNED_BYTE && (Y = r16.RGBA8UI), I === r16.UNSIGNED_SHORT && (Y = r16.RGBA16UI), I === r16.UNSIGNED_INT && (Y = r16.RGBA32UI), I === r16.BYTE && (Y = r16.RGBA8I), I === r16.SHORT && (Y = r16.RGBA16I), I === r16.INT && (Y = r16.RGBA32I)), v === r16.RGB && (I === r16.UNSIGNED_INT_5_9_9_9_REV && (Y = r16.RGB9_E5), I === r16.UNSIGNED_INT_10F_11F_11F_REV && (Y = r16.R11F_G11F_B10F)), v === r16.RGBA) {
      const mt = j ? Js : qt.getTransfer(q);
      I === r16.FLOAT && (Y = r16.RGBA32F), I === r16.HALF_FLOAT && (Y = r16.RGBA16F), I === r16.UNSIGNED_BYTE && (Y = mt === Qt ? r16.SRGB8_ALPHA8 : r16.RGBA8), I === r16.UNSIGNED_SHORT_4_4_4_4 && (Y = r16.RGBA4), I === r16.UNSIGNED_SHORT_5_5_5_1 && (Y = r16.RGB5_A1);
    }
    return (Y === r16.R16F || Y === r16.R32F || Y === r16.RG16F || Y === r16.RG32F || Y === r16.RGBA16F || Y === r16.RGBA32F) && t.get("EXT_color_buffer_float"), Y;
  }
  function y(R, v) {
    let I;
    return R ? v === null || v === kn || v === is ? I = r16.DEPTH24_STENCIL8 : v === Ln ? I = r16.DEPTH32F_STENCIL8 : v === ns && (I = r16.DEPTH24_STENCIL8, Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === kn || v === is ? I = r16.DEPTH_COMPONENT24 : v === Ln ? I = r16.DEPTH_COMPONENT32F : v === ns && (I = r16.DEPTH_COMPONENT16), I;
  }
  function b(R, v) {
    return d(R) === true || R.isFramebufferTexture && R.minFilter !== Ie && R.minFilter !== Be ? Math.log2(Math.max(v.width, v.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? v.mipmaps.length : 1;
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
      j.usedTimes--, j.usedTimes === 0 && S(R), Object.keys(q).length === 0 && u.delete(I);
    }
    n.remove(R);
  }
  function S(R) {
    const v = n.get(R);
    r16.deleteTexture(v.__webglTexture);
    const I = R.source, q = u.get(I);
    delete q[v.__cacheKey], a.memory.textures--;
  }
  function z(R) {
    const v = n.get(R);
    if (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)), R.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) {
      if (Array.isArray(v.__webglFramebuffer[q])) for (let j = 0; j < v.__webglFramebuffer[q].length; j++) r16.deleteFramebuffer(v.__webglFramebuffer[q][j]);
      else r16.deleteFramebuffer(v.__webglFramebuffer[q]);
      v.__webglDepthbuffer && r16.deleteRenderbuffer(v.__webglDepthbuffer[q]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let q = 0; q < v.__webglFramebuffer.length; q++) r16.deleteFramebuffer(v.__webglFramebuffer[q]);
      else r16.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && r16.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && r16.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let q = 0; q < v.__webglColorRenderbuffer.length; q++) v.__webglColorRenderbuffer[q] && r16.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);
      v.__webglDepthRenderbuffer && r16.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const I = R.textures;
    for (let q = 0, j = I.length; q < j; q++) {
      const Y = n.get(I[q]);
      Y.__webglTexture && (r16.deleteTexture(Y.__webglTexture), a.memory.textures--), n.remove(I[q]);
    }
    n.remove(R);
  }
  let C = 0;
  function L() {
    C = 0;
  }
  function U() {
    const R = C;
    return R >= i.maxTextures && Rt("WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + i.maxTextures), C += 1, R;
  }
  function G(R) {
    const v = [];
    return v.push(R.wrapS), v.push(R.wrapT), v.push(R.wrapR || 0), v.push(R.magFilter), v.push(R.minFilter), v.push(R.anisotropy), v.push(R.internalFormat), v.push(R.format), v.push(R.type), v.push(R.generateMipmaps), v.push(R.premultiplyAlpha), v.push(R.flipY), v.push(R.unpackAlignment), v.push(R.colorSpace), v.join();
  }
  function O(R, v) {
    const I = n.get(R);
    if (R.isVideoTexture && Zt(R), R.isRenderTargetTexture === false && R.isExternalTexture !== true && R.version > 0 && I.__version !== R.version) {
      const q = R.image;
      if (q === null) Rt("WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === false) Rt("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        K(I, R, v);
        return;
      }
    } else R.isExternalTexture && (I.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    e.bindTexture(r16.TEXTURE_2D, I.__webglTexture, r16.TEXTURE0 + v);
  }
  function B(R, v) {
    const I = n.get(R);
    if (R.isRenderTargetTexture === false && R.version > 0 && I.__version !== R.version) {
      K(I, R, v);
      return;
    } else R.isExternalTexture && (I.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    e.bindTexture(r16.TEXTURE_2D_ARRAY, I.__webglTexture, r16.TEXTURE0 + v);
  }
  function N(R, v) {
    const I = n.get(R);
    if (R.isRenderTargetTexture === false && R.version > 0 && I.__version !== R.version) {
      K(I, R, v);
      return;
    }
    e.bindTexture(r16.TEXTURE_3D, I.__webglTexture, r16.TEXTURE0 + v);
  }
  function Z(R, v) {
    const I = n.get(R);
    if (R.isCubeDepthTexture !== true && R.version > 0 && I.__version !== R.version) {
      nt(I, R, v);
      return;
    }
    e.bindTexture(r16.TEXTURE_CUBE_MAP, I.__webglTexture, r16.TEXTURE0 + v);
  }
  const $ = { [es]: r16.REPEAT, [Qn]: r16.CLAMP_TO_EDGE, [go]: r16.MIRRORED_REPEAT }, lt = { [Ie]: r16.NEAREST, [Cf]: r16.NEAREST_MIPMAP_NEAREST, [xs]: r16.NEAREST_MIPMAP_LINEAR, [Be]: r16.LINEAR, [va]: r16.LINEAR_MIPMAP_NEAREST, [Vi]: r16.LINEAR_MIPMAP_LINEAR }, ut = { [Lf]: r16.NEVER, [Of]: r16.ALWAYS, [If]: r16.LESS, [yl]: r16.LEQUAL, [Uf]: r16.EQUAL, [El]: r16.GEQUAL, [Nf]: r16.GREATER, [Ff]: r16.NOTEQUAL };
  function at(R, v) {
    if (v.type === Ln && t.has("OES_texture_float_linear") === false && (v.magFilter === Be || v.magFilter === va || v.magFilter === xs || v.magFilter === Vi || v.minFilter === Be || v.minFilter === va || v.minFilter === xs || v.minFilter === Vi) && Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r16.texParameteri(R, r16.TEXTURE_WRAP_S, $[v.wrapS]), r16.texParameteri(R, r16.TEXTURE_WRAP_T, $[v.wrapT]), (R === r16.TEXTURE_3D || R === r16.TEXTURE_2D_ARRAY) && r16.texParameteri(R, r16.TEXTURE_WRAP_R, $[v.wrapR]), r16.texParameteri(R, r16.TEXTURE_MAG_FILTER, lt[v.magFilter]), r16.texParameteri(R, r16.TEXTURE_MIN_FILTER, lt[v.minFilter]), v.compareFunction && (r16.texParameteri(R, r16.TEXTURE_COMPARE_MODE, r16.COMPARE_REF_TO_TEXTURE), r16.texParameteri(R, r16.TEXTURE_COMPARE_FUNC, ut[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Ie || v.minFilter !== xs && v.minFilter !== Vi || v.type === Ln && t.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const I = t.get("EXT_texture_filter_anisotropic");
        r16.texParameterf(R, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Dt(R, v) {
    let I = false;
    R.__webglInit === void 0 && (R.__webglInit = true, v.addEventListener("dispose", A));
    const q = v.source;
    let j = u.get(q);
    j === void 0 && (j = {}, u.set(q, j));
    const Y = G(v);
    if (Y !== R.__cacheKey) {
      j[Y] === void 0 && (j[Y] = { texture: r16.createTexture(), usedTimes: 0 }, a.memory.textures++, I = true), j[Y].usedTimes++;
      const mt = j[R.__cacheKey];
      mt !== void 0 && (j[R.__cacheKey].usedTimes--, mt.usedTimes === 0 && S(v)), R.__cacheKey = Y, R.__webglTexture = j[Y].texture;
    }
    return I;
  }
  function Wt(R, v, I) {
    return Math.floor(Math.floor(R / I) / v);
  }
  function Xt(R, v, I, q) {
    const Y = R.updateRanges;
    if (Y.length === 0) e.texSubImage2D(r16.TEXTURE_2D, 0, 0, 0, v.width, v.height, I, q, v.data);
    else {
      Y.sort((J, tt) => J.start - tt.start);
      let mt = 0;
      for (let J = 1; J < Y.length; J++) {
        const tt = Y[mt], _t = Y[J], xt = tt.start + tt.count, ft = Wt(_t.start, v.width, 4), Ot = Wt(tt.start, v.width, 4);
        _t.start <= xt + 1 && ft === Ot && Wt(_t.start + _t.count - 1, v.width, 4) === ft ? tt.count = Math.max(tt.count, _t.start + _t.count - tt.start) : (++mt, Y[mt] = _t);
      }
      Y.length = mt + 1;
      const it = r16.getParameter(r16.UNPACK_ROW_LENGTH), Tt = r16.getParameter(r16.UNPACK_SKIP_PIXELS), At = r16.getParameter(r16.UNPACK_SKIP_ROWS);
      r16.pixelStorei(r16.UNPACK_ROW_LENGTH, v.width);
      for (let J = 0, tt = Y.length; J < tt; J++) {
        const _t = Y[J], xt = Math.floor(_t.start / 4), ft = Math.ceil(_t.count / 4), Ot = xt % v.width, D = Math.floor(xt / v.width), rt = ft, et = 1;
        r16.pixelStorei(r16.UNPACK_SKIP_PIXELS, Ot), r16.pixelStorei(r16.UNPACK_SKIP_ROWS, D), e.texSubImage2D(r16.TEXTURE_2D, 0, Ot, D, rt, et, I, q, v.data);
      }
      R.clearUpdateRanges(), r16.pixelStorei(r16.UNPACK_ROW_LENGTH, it), r16.pixelStorei(r16.UNPACK_SKIP_PIXELS, Tt), r16.pixelStorei(r16.UNPACK_SKIP_ROWS, At);
    }
  }
  function K(R, v, I) {
    let q = r16.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (q = r16.TEXTURE_2D_ARRAY), v.isData3DTexture && (q = r16.TEXTURE_3D);
    const j = Dt(R, v), Y = v.source;
    e.bindTexture(q, R.__webglTexture, r16.TEXTURE0 + I);
    const mt = n.get(Y);
    if (Y.version !== mt.__version || j === true) {
      e.activeTexture(r16.TEXTURE0 + I);
      const it = qt.getPrimaries(qt.workingColorSpace), Tt = v.colorSpace === mi ? null : qt.getPrimaries(v.colorSpace), At = v.colorSpace === mi || it === Tt ? r16.NONE : r16.BROWSER_DEFAULT_WEBGL;
      r16.pixelStorei(r16.UNPACK_FLIP_Y_WEBGL, v.flipY), r16.pixelStorei(r16.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r16.pixelStorei(r16.UNPACK_ALIGNMENT, v.unpackAlignment), r16.pixelStorei(r16.UNPACK_COLORSPACE_CONVERSION_WEBGL, At);
      let J = g(v.image, false, i.maxTextureSize);
      J = ae(v, J);
      const tt = s.convert(v.format, v.colorSpace), _t = s.convert(v.type);
      let xt = T(v.internalFormat, tt, _t, v.colorSpace, v.isVideoTexture);
      at(q, v);
      let ft;
      const Ot = v.mipmaps, D = v.isVideoTexture !== true, rt = mt.__version === void 0 || j === true, et = Y.dataReady, pt = b(v, J);
      if (v.isDepthTexture) xt = y(v.format === Gi, v.type), rt && (D ? e.texStorage2D(r16.TEXTURE_2D, 1, xt, J.width, J.height) : e.texImage2D(r16.TEXTURE_2D, 0, xt, J.width, J.height, 0, tt, _t, null));
      else if (v.isDataTexture) if (Ot.length > 0) {
        D && rt && e.texStorage2D(r16.TEXTURE_2D, pt, xt, Ot[0].width, Ot[0].height);
        for (let Q = 0, X = Ot.length; Q < X; Q++) ft = Ot[Q], D ? et && e.texSubImage2D(r16.TEXTURE_2D, Q, 0, 0, ft.width, ft.height, tt, _t, ft.data) : e.texImage2D(r16.TEXTURE_2D, Q, xt, ft.width, ft.height, 0, tt, _t, ft.data);
        v.generateMipmaps = false;
      } else D ? (rt && e.texStorage2D(r16.TEXTURE_2D, pt, xt, J.width, J.height), et && Xt(v, J, tt, _t)) : e.texImage2D(r16.TEXTURE_2D, 0, xt, J.width, J.height, 0, tt, _t, J.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        D && rt && e.texStorage3D(r16.TEXTURE_2D_ARRAY, pt, xt, Ot[0].width, Ot[0].height, J.depth);
        for (let Q = 0, X = Ot.length; Q < X; Q++) if (ft = Ot[Q], v.format !== Tn) if (tt !== null) if (D) {
          if (et) if (v.layerUpdates.size > 0) {
            const gt = Pc(ft.width, ft.height, v.format, v.type);
            for (const Ct of v.layerUpdates) {
              const oe = ft.data.subarray(Ct * gt / ft.data.BYTES_PER_ELEMENT, (Ct + 1) * gt / ft.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(r16.TEXTURE_2D_ARRAY, Q, 0, 0, Ct, ft.width, ft.height, 1, tt, oe);
            }
            v.clearLayerUpdates();
          } else e.compressedTexSubImage3D(r16.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ft.width, ft.height, J.depth, tt, ft.data);
        } else e.compressedTexImage3D(r16.TEXTURE_2D_ARRAY, Q, xt, ft.width, ft.height, J.depth, 0, ft.data, 0, 0);
        else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else D ? et && e.texSubImage3D(r16.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ft.width, ft.height, J.depth, tt, _t, ft.data) : e.texImage3D(r16.TEXTURE_2D_ARRAY, Q, xt, ft.width, ft.height, J.depth, 0, tt, _t, ft.data);
      } else {
        D && rt && e.texStorage2D(r16.TEXTURE_2D, pt, xt, Ot[0].width, Ot[0].height);
        for (let Q = 0, X = Ot.length; Q < X; Q++) ft = Ot[Q], v.format !== Tn ? tt !== null ? D ? et && e.compressedTexSubImage2D(r16.TEXTURE_2D, Q, 0, 0, ft.width, ft.height, tt, ft.data) : e.compressedTexImage2D(r16.TEXTURE_2D, Q, xt, ft.width, ft.height, 0, ft.data) : Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? et && e.texSubImage2D(r16.TEXTURE_2D, Q, 0, 0, ft.width, ft.height, tt, _t, ft.data) : e.texImage2D(r16.TEXTURE_2D, Q, xt, ft.width, ft.height, 0, tt, _t, ft.data);
      }
      else if (v.isDataArrayTexture) if (D) {
        if (rt && e.texStorage3D(r16.TEXTURE_2D_ARRAY, pt, xt, J.width, J.height, J.depth), et) if (v.layerUpdates.size > 0) {
          const Q = Pc(J.width, J.height, v.format, v.type);
          for (const X of v.layerUpdates) {
            const gt = J.data.subarray(X * Q / J.data.BYTES_PER_ELEMENT, (X + 1) * Q / J.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(r16.TEXTURE_2D_ARRAY, 0, 0, 0, X, J.width, J.height, 1, tt, _t, gt);
          }
          v.clearLayerUpdates();
        } else e.texSubImage3D(r16.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, tt, _t, J.data);
      } else e.texImage3D(r16.TEXTURE_2D_ARRAY, 0, xt, J.width, J.height, J.depth, 0, tt, _t, J.data);
      else if (v.isData3DTexture) D ? (rt && e.texStorage3D(r16.TEXTURE_3D, pt, xt, J.width, J.height, J.depth), et && e.texSubImage3D(r16.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, tt, _t, J.data)) : e.texImage3D(r16.TEXTURE_3D, 0, xt, J.width, J.height, J.depth, 0, tt, _t, J.data);
      else if (v.isFramebufferTexture) {
        if (rt) if (D) e.texStorage2D(r16.TEXTURE_2D, pt, xt, J.width, J.height);
        else {
          let Q = J.width, X = J.height;
          for (let gt = 0; gt < pt; gt++) e.texImage2D(r16.TEXTURE_2D, gt, xt, Q, X, 0, tt, _t, null), Q >>= 1, X >>= 1;
        }
      } else if (Ot.length > 0) {
        if (D && rt) {
          const Q = Mt(Ot[0]);
          e.texStorage2D(r16.TEXTURE_2D, pt, xt, Q.width, Q.height);
        }
        for (let Q = 0, X = Ot.length; Q < X; Q++) ft = Ot[Q], D ? et && e.texSubImage2D(r16.TEXTURE_2D, Q, 0, 0, tt, _t, ft) : e.texImage2D(r16.TEXTURE_2D, Q, xt, tt, _t, ft);
        v.generateMipmaps = false;
      } else if (D) {
        if (rt) {
          const Q = Mt(J);
          e.texStorage2D(r16.TEXTURE_2D, pt, xt, Q.width, Q.height);
        }
        et && e.texSubImage2D(r16.TEXTURE_2D, 0, 0, 0, tt, _t, J);
      } else e.texImage2D(r16.TEXTURE_2D, 0, xt, tt, _t, J);
      d(v) && m(q), mt.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    R.__version = v.version;
  }
  function nt(R, v, I) {
    if (v.image.length !== 6) return;
    const q = Dt(R, v), j = v.source;
    e.bindTexture(r16.TEXTURE_CUBE_MAP, R.__webglTexture, r16.TEXTURE0 + I);
    const Y = n.get(j);
    if (j.version !== Y.__version || q === true) {
      e.activeTexture(r16.TEXTURE0 + I);
      const mt = qt.getPrimaries(qt.workingColorSpace), it = v.colorSpace === mi ? null : qt.getPrimaries(v.colorSpace), Tt = v.colorSpace === mi || mt === it ? r16.NONE : r16.BROWSER_DEFAULT_WEBGL;
      r16.pixelStorei(r16.UNPACK_FLIP_Y_WEBGL, v.flipY), r16.pixelStorei(r16.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r16.pixelStorei(r16.UNPACK_ALIGNMENT, v.unpackAlignment), r16.pixelStorei(r16.UNPACK_COLORSPACE_CONVERSION_WEBGL, Tt);
      const At = v.isCompressedTexture || v.image[0].isCompressedTexture, J = v.image[0] && v.image[0].isDataTexture, tt = [];
      for (let X = 0; X < 6; X++) !At && !J ? tt[X] = g(v.image[X], true, i.maxCubemapSize) : tt[X] = J ? v.image[X].image : v.image[X], tt[X] = ae(v, tt[X]);
      const _t = tt[0], xt = s.convert(v.format, v.colorSpace), ft = s.convert(v.type), Ot = T(v.internalFormat, xt, ft, v.colorSpace), D = v.isVideoTexture !== true, rt = Y.__version === void 0 || q === true, et = j.dataReady;
      let pt = b(v, _t);
      at(r16.TEXTURE_CUBE_MAP, v);
      let Q;
      if (At) {
        D && rt && e.texStorage2D(r16.TEXTURE_CUBE_MAP, pt, Ot, _t.width, _t.height);
        for (let X = 0; X < 6; X++) {
          Q = tt[X].mipmaps;
          for (let gt = 0; gt < Q.length; gt++) {
            const Ct = Q[gt];
            v.format !== Tn ? xt !== null ? D ? et && e.compressedTexSubImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, 0, 0, Ct.width, Ct.height, xt, Ct.data) : e.compressedTexImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, Ot, Ct.width, Ct.height, 0, Ct.data) : Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? et && e.texSubImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, 0, 0, Ct.width, Ct.height, xt, ft, Ct.data) : e.texImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt, Ot, Ct.width, Ct.height, 0, xt, ft, Ct.data);
          }
        }
      } else {
        if (Q = v.mipmaps, D && rt) {
          Q.length > 0 && pt++;
          const X = Mt(tt[0]);
          e.texStorage2D(r16.TEXTURE_CUBE_MAP, pt, Ot, X.width, X.height);
        }
        for (let X = 0; X < 6; X++) if (J) {
          D ? et && e.texSubImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, tt[X].width, tt[X].height, xt, ft, tt[X].data) : e.texImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Ot, tt[X].width, tt[X].height, 0, xt, ft, tt[X].data);
          for (let gt = 0; gt < Q.length; gt++) {
            const oe = Q[gt].image[X].image;
            D ? et && e.texSubImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, 0, 0, oe.width, oe.height, xt, ft, oe.data) : e.texImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, Ot, oe.width, oe.height, 0, xt, ft, oe.data);
          }
        } else {
          D ? et && e.texSubImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, xt, ft, tt[X]) : e.texImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Ot, xt, ft, tt[X]);
          for (let gt = 0; gt < Q.length; gt++) {
            const Ct = Q[gt];
            D ? et && e.texSubImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, 0, 0, xt, ft, Ct.image[X]) : e.texImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + X, gt + 1, Ot, xt, ft, Ct.image[X]);
          }
        }
      }
      d(v) && m(r16.TEXTURE_CUBE_MAP), Y.__version = j.version, v.onUpdate && v.onUpdate(v);
    }
    R.__version = v.version;
  }
  function st(R, v, I, q, j, Y) {
    const mt = s.convert(I.format, I.colorSpace), it = s.convert(I.type), Tt = T(I.internalFormat, mt, it, I.colorSpace), At = n.get(v), J = n.get(I);
    if (J.__renderTarget = v, !At.__hasExternalTextures) {
      const tt = Math.max(1, v.width >> Y), _t = Math.max(1, v.height >> Y);
      j === r16.TEXTURE_3D || j === r16.TEXTURE_2D_ARRAY ? e.texImage3D(j, Y, Tt, tt, _t, v.depth, 0, mt, it, null) : e.texImage2D(j, Y, Tt, tt, _t, 0, mt, it, null);
    }
    e.bindFramebuffer(r16.FRAMEBUFFER, R), Me(v) ? o.framebufferTexture2DMultisampleEXT(r16.FRAMEBUFFER, q, j, J.__webglTexture, 0, P(v)) : (j === r16.TEXTURE_2D || j >= r16.TEXTURE_CUBE_MAP_POSITIVE_X && j <= r16.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r16.framebufferTexture2D(r16.FRAMEBUFFER, q, j, J.__webglTexture, Y), e.bindFramebuffer(r16.FRAMEBUFFER, null);
  }
  function It(R, v, I) {
    if (r16.bindRenderbuffer(r16.RENDERBUFFER, R), v.depthBuffer) {
      const q = v.depthTexture, j = q && q.isDepthTexture ? q.type : null, Y = y(v.stencilBuffer, j), mt = v.stencilBuffer ? r16.DEPTH_STENCIL_ATTACHMENT : r16.DEPTH_ATTACHMENT;
      Me(v) ? o.renderbufferStorageMultisampleEXT(r16.RENDERBUFFER, P(v), Y, v.width, v.height) : I ? r16.renderbufferStorageMultisample(r16.RENDERBUFFER, P(v), Y, v.width, v.height) : r16.renderbufferStorage(r16.RENDERBUFFER, Y, v.width, v.height), r16.framebufferRenderbuffer(r16.FRAMEBUFFER, mt, r16.RENDERBUFFER, R);
    } else {
      const q = v.textures;
      for (let j = 0; j < q.length; j++) {
        const Y = q[j], mt = s.convert(Y.format, Y.colorSpace), it = s.convert(Y.type), Tt = T(Y.internalFormat, mt, it, Y.colorSpace);
        Me(v) ? o.renderbufferStorageMultisampleEXT(r16.RENDERBUFFER, P(v), Tt, v.width, v.height) : I ? r16.renderbufferStorageMultisample(r16.RENDERBUFFER, P(v), Tt, v.width, v.height) : r16.renderbufferStorage(r16.RENDERBUFFER, Tt, v.width, v.height);
      }
    }
    r16.bindRenderbuffer(r16.RENDERBUFFER, null);
  }
  function bt(R, v, I) {
    const q = v.isWebGLCubeRenderTarget === true;
    if (e.bindFramebuffer(r16.FRAMEBUFFER, R), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(v.depthTexture);
    if (j.__renderTarget = v, (!j.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), q) {
      if (j.__webglInit === void 0 && (j.__webglInit = true, v.depthTexture.addEventListener("dispose", A)), j.__webglTexture === void 0) {
        j.__webglTexture = r16.createTexture(), e.bindTexture(r16.TEXTURE_CUBE_MAP, j.__webglTexture), at(r16.TEXTURE_CUBE_MAP, v.depthTexture);
        const At = s.convert(v.depthTexture.format), J = s.convert(v.depthTexture.type);
        let tt;
        v.depthTexture.format === ii ? tt = r16.DEPTH_COMPONENT24 : v.depthTexture.format === Gi && (tt = r16.DEPTH24_STENCIL8);
        for (let _t = 0; _t < 6; _t++) r16.texImage2D(r16.TEXTURE_CUBE_MAP_POSITIVE_X + _t, 0, tt, v.width, v.height, 0, At, J, null);
      }
    } else O(v.depthTexture, 0);
    const Y = j.__webglTexture, mt = P(v), it = q ? r16.TEXTURE_CUBE_MAP_POSITIVE_X + I : r16.TEXTURE_2D, Tt = v.depthTexture.format === Gi ? r16.DEPTH_STENCIL_ATTACHMENT : r16.DEPTH_ATTACHMENT;
    if (v.depthTexture.format === ii) Me(v) ? o.framebufferTexture2DMultisampleEXT(r16.FRAMEBUFFER, Tt, it, Y, 0, mt) : r16.framebufferTexture2D(r16.FRAMEBUFFER, Tt, it, Y, 0);
    else if (v.depthTexture.format === Gi) Me(v) ? o.framebufferTexture2DMultisampleEXT(r16.FRAMEBUFFER, Tt, it, Y, 0, mt) : r16.framebufferTexture2D(r16.FRAMEBUFFER, Tt, it, Y, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function wt(R) {
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
    if (R.depthTexture && !v.__autoAllocateDepthBuffer) if (I) for (let q = 0; q < 6; q++) bt(v.__webglFramebuffer[q], R, q);
    else {
      const q = R.texture.mipmaps;
      q && q.length > 0 ? bt(v.__webglFramebuffer[0], R, 0) : bt(v.__webglFramebuffer, R, 0);
    }
    else if (I) {
      v.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++) if (e.bindFramebuffer(r16.FRAMEBUFFER, v.__webglFramebuffer[q]), v.__webglDepthbuffer[q] === void 0) v.__webglDepthbuffer[q] = r16.createRenderbuffer(), It(v.__webglDepthbuffer[q], R, false);
      else {
        const j = R.stencilBuffer ? r16.DEPTH_STENCIL_ATTACHMENT : r16.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer[q];
        r16.bindRenderbuffer(r16.RENDERBUFFER, Y), r16.framebufferRenderbuffer(r16.FRAMEBUFFER, j, r16.RENDERBUFFER, Y);
      }
    } else {
      const q = R.texture.mipmaps;
      if (q && q.length > 0 ? e.bindFramebuffer(r16.FRAMEBUFFER, v.__webglFramebuffer[0]) : e.bindFramebuffer(r16.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = r16.createRenderbuffer(), It(v.__webglDepthbuffer, R, false);
      else {
        const j = R.stencilBuffer ? r16.DEPTH_STENCIL_ATTACHMENT : r16.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer;
        r16.bindRenderbuffer(r16.RENDERBUFFER, Y), r16.framebufferRenderbuffer(r16.FRAMEBUFFER, j, r16.RENDERBUFFER, Y);
      }
    }
    e.bindFramebuffer(r16.FRAMEBUFFER, null);
  }
  function Ae(R, v, I) {
    const q = n.get(R);
    v !== void 0 && st(q.__webglFramebuffer, R, R.texture, r16.COLOR_ATTACHMENT0, r16.TEXTURE_2D, 0), I !== void 0 && wt(R);
  }
  function Yt(R) {
    const v = R.texture, I = n.get(R), q = n.get(v);
    R.addEventListener("dispose", w);
    const j = R.textures, Y = R.isWebGLCubeRenderTarget === true, mt = j.length > 1;
    if (mt || (q.__webglTexture === void 0 && (q.__webglTexture = r16.createTexture()), q.__version = v.version, a.memory.textures++), Y) {
      I.__webglFramebuffer = [];
      for (let it = 0; it < 6; it++) if (v.mipmaps && v.mipmaps.length > 0) {
        I.__webglFramebuffer[it] = [];
        for (let Tt = 0; Tt < v.mipmaps.length; Tt++) I.__webglFramebuffer[it][Tt] = r16.createFramebuffer();
      } else I.__webglFramebuffer[it] = r16.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let it = 0; it < v.mipmaps.length; it++) I.__webglFramebuffer[it] = r16.createFramebuffer();
      } else I.__webglFramebuffer = r16.createFramebuffer();
      if (mt) for (let it = 0, Tt = j.length; it < Tt; it++) {
        const At = n.get(j[it]);
        At.__webglTexture === void 0 && (At.__webglTexture = r16.createTexture(), a.memory.textures++);
      }
      if (R.samples > 0 && Me(R) === false) {
        I.__webglMultisampledFramebuffer = r16.createFramebuffer(), I.__webglColorRenderbuffer = [], e.bindFramebuffer(r16.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let it = 0; it < j.length; it++) {
          const Tt = j[it];
          I.__webglColorRenderbuffer[it] = r16.createRenderbuffer(), r16.bindRenderbuffer(r16.RENDERBUFFER, I.__webglColorRenderbuffer[it]);
          const At = s.convert(Tt.format, Tt.colorSpace), J = s.convert(Tt.type), tt = T(Tt.internalFormat, At, J, Tt.colorSpace, R.isXRRenderTarget === true), _t = P(R);
          r16.renderbufferStorageMultisample(r16.RENDERBUFFER, _t, tt, R.width, R.height), r16.framebufferRenderbuffer(r16.FRAMEBUFFER, r16.COLOR_ATTACHMENT0 + it, r16.RENDERBUFFER, I.__webglColorRenderbuffer[it]);
        }
        r16.bindRenderbuffer(r16.RENDERBUFFER, null), R.depthBuffer && (I.__webglDepthRenderbuffer = r16.createRenderbuffer(), It(I.__webglDepthRenderbuffer, R, true)), e.bindFramebuffer(r16.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      e.bindTexture(r16.TEXTURE_CUBE_MAP, q.__webglTexture), at(r16.TEXTURE_CUBE_MAP, v);
      for (let it = 0; it < 6; it++) if (v.mipmaps && v.mipmaps.length > 0) for (let Tt = 0; Tt < v.mipmaps.length; Tt++) st(I.__webglFramebuffer[it][Tt], R, v, r16.COLOR_ATTACHMENT0, r16.TEXTURE_CUBE_MAP_POSITIVE_X + it, Tt);
      else st(I.__webglFramebuffer[it], R, v, r16.COLOR_ATTACHMENT0, r16.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0);
      d(v) && m(r16.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (mt) {
      for (let it = 0, Tt = j.length; it < Tt; it++) {
        const At = j[it], J = n.get(At);
        let tt = r16.TEXTURE_2D;
        (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (tt = R.isWebGL3DRenderTarget ? r16.TEXTURE_3D : r16.TEXTURE_2D_ARRAY), e.bindTexture(tt, J.__webglTexture), at(tt, At), st(I.__webglFramebuffer, R, At, r16.COLOR_ATTACHMENT0 + it, tt, 0), d(At) && m(tt);
      }
      e.unbindTexture();
    } else {
      let it = r16.TEXTURE_2D;
      if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (it = R.isWebGL3DRenderTarget ? r16.TEXTURE_3D : r16.TEXTURE_2D_ARRAY), e.bindTexture(it, q.__webglTexture), at(it, v), v.mipmaps && v.mipmaps.length > 0) for (let Tt = 0; Tt < v.mipmaps.length; Tt++) st(I.__webglFramebuffer[Tt], R, v, r16.COLOR_ATTACHMENT0, it, Tt);
      else st(I.__webglFramebuffer, R, v, r16.COLOR_ATTACHMENT0, it, 0);
      d(v) && m(it), e.unbindTexture();
    }
    R.depthBuffer && wt(R);
  }
  function $t(R) {
    const v = R.textures;
    for (let I = 0, q = v.length; I < q; I++) {
      const j = v[I];
      if (d(j)) {
        const Y = M(R), mt = n.get(j).__webglTexture;
        e.bindTexture(Y, mt), m(Y), e.unbindTexture();
      }
    }
  }
  const ie = [], Ft = [];
  function _e(R) {
    if (R.samples > 0) {
      if (Me(R) === false) {
        const v = R.textures, I = R.width, q = R.height;
        let j = r16.COLOR_BUFFER_BIT;
        const Y = R.stencilBuffer ? r16.DEPTH_STENCIL_ATTACHMENT : r16.DEPTH_ATTACHMENT, mt = n.get(R), it = v.length > 1;
        if (it) for (let At = 0; At < v.length; At++) e.bindFramebuffer(r16.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), r16.framebufferRenderbuffer(r16.FRAMEBUFFER, r16.COLOR_ATTACHMENT0 + At, r16.RENDERBUFFER, null), e.bindFramebuffer(r16.FRAMEBUFFER, mt.__webglFramebuffer), r16.framebufferTexture2D(r16.DRAW_FRAMEBUFFER, r16.COLOR_ATTACHMENT0 + At, r16.TEXTURE_2D, null, 0);
        e.bindFramebuffer(r16.READ_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
        const Tt = R.texture.mipmaps;
        Tt && Tt.length > 0 ? e.bindFramebuffer(r16.DRAW_FRAMEBUFFER, mt.__webglFramebuffer[0]) : e.bindFramebuffer(r16.DRAW_FRAMEBUFFER, mt.__webglFramebuffer);
        for (let At = 0; At < v.length; At++) {
          if (R.resolveDepthBuffer && (R.depthBuffer && (j |= r16.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (j |= r16.STENCIL_BUFFER_BIT)), it) {
            r16.framebufferRenderbuffer(r16.READ_FRAMEBUFFER, r16.COLOR_ATTACHMENT0, r16.RENDERBUFFER, mt.__webglColorRenderbuffer[At]);
            const J = n.get(v[At]).__webglTexture;
            r16.framebufferTexture2D(r16.DRAW_FRAMEBUFFER, r16.COLOR_ATTACHMENT0, r16.TEXTURE_2D, J, 0);
          }
          r16.blitFramebuffer(0, 0, I, q, 0, 0, I, q, j, r16.NEAREST), c === true && (ie.length = 0, Ft.length = 0, ie.push(r16.COLOR_ATTACHMENT0 + At), R.depthBuffer && R.resolveDepthBuffer === false && (ie.push(Y), Ft.push(Y), r16.invalidateFramebuffer(r16.DRAW_FRAMEBUFFER, Ft)), r16.invalidateFramebuffer(r16.READ_FRAMEBUFFER, ie));
        }
        if (e.bindFramebuffer(r16.READ_FRAMEBUFFER, null), e.bindFramebuffer(r16.DRAW_FRAMEBUFFER, null), it) for (let At = 0; At < v.length; At++) {
          e.bindFramebuffer(r16.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), r16.framebufferRenderbuffer(r16.FRAMEBUFFER, r16.COLOR_ATTACHMENT0 + At, r16.RENDERBUFFER, mt.__webglColorRenderbuffer[At]);
          const J = n.get(v[At]).__webglTexture;
          e.bindFramebuffer(r16.FRAMEBUFFER, mt.__webglFramebuffer), r16.framebufferTexture2D(r16.DRAW_FRAMEBUFFER, r16.COLOR_ATTACHMENT0 + At, r16.TEXTURE_2D, J, 0);
        }
        e.bindFramebuffer(r16.DRAW_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
      } else if (R.depthBuffer && R.resolveDepthBuffer === false && c) {
        const v = R.stencilBuffer ? r16.DEPTH_STENCIL_ATTACHMENT : r16.DEPTH_ATTACHMENT;
        r16.invalidateFramebuffer(r16.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function P(R) {
    return Math.min(i.maxSamples, R.samples);
  }
  function Me(R) {
    const v = n.get(R);
    return R.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function Zt(R) {
    const v = a.render.frame;
    h.get(R) !== v && (h.set(R, v), R.update());
  }
  function ae(R, v) {
    const I = R.colorSpace, q = R.format, j = R.type;
    return R.isCompressedTexture === true || R.isVideoTexture === true || I !== Pr && I !== mi && (qt.getTransfer(I) === Qt ? (q !== Tn || j !== rn) && Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : jt("WebGLTextures: Unsupported texture color space:", I)), v;
  }
  function Mt(R) {
    return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (l.width = R.naturalWidth || R.width, l.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (l.width = R.displayWidth, l.height = R.displayHeight) : (l.width = R.width, l.height = R.height), l;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = L, this.setTexture2D = O, this.setTexture2DArray = B, this.setTexture3D = N, this.setTextureCube = Z, this.rebindTextures = Ae, this.setupRenderTarget = Yt, this.updateRenderTargetMipmap = $t, this.updateMultisampleRenderTarget = _e, this.setupDepthRenderbuffer = wt, this.setupFrameBufferTexture = st, this.useMultisampledRTT = Me, this.isReversedDepthBuffer = function() {
    return e.buffers.depth.getReversed();
  };
}
function u0(r16, t) {
  function e(n, i = mi) {
    let s;
    const a = qt.getTransfer(i);
    if (n === rn) return r16.UNSIGNED_BYTE;
    if (n === gl) return r16.UNSIGNED_SHORT_4_4_4_4;
    if (n === xl) return r16.UNSIGNED_SHORT_5_5_5_1;
    if (n === Ch) return r16.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ph) return r16.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === wh) return r16.BYTE;
    if (n === Rh) return r16.SHORT;
    if (n === ns) return r16.UNSIGNED_SHORT;
    if (n === _l) return r16.INT;
    if (n === kn) return r16.UNSIGNED_INT;
    if (n === Ln) return r16.FLOAT;
    if (n === ni) return r16.HALF_FLOAT;
    if (n === Dh) return r16.ALPHA;
    if (n === Lh) return r16.RGB;
    if (n === Tn) return r16.RGBA;
    if (n === ii) return r16.DEPTH_COMPONENT;
    if (n === Gi) return r16.DEPTH_STENCIL;
    if (n === Ih) return r16.RED;
    if (n === vl) return r16.RED_INTEGER;
    if (n === Cr) return r16.RG;
    if (n === Ml) return r16.RG_INTEGER;
    if (n === Sl) return r16.RGBA_INTEGER;
    if (n === Hs || n === Ws || n === Xs || n === Ys) if (a === Qt) if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === Hs) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Ws) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Xs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === Ys) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === Hs) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Ws) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Xs) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === Ys) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === xo || n === vo || n === Mo || n === So) if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === xo) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === vo) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Mo) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === So) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === yo || n === Eo || n === To || n === bo || n === Ao || n === wo || n === Ro) if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === yo || n === Eo) return a === Qt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === To) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      if (n === bo) return s.COMPRESSED_R11_EAC;
      if (n === Ao) return s.COMPRESSED_SIGNED_R11_EAC;
      if (n === wo) return s.COMPRESSED_RG11_EAC;
      if (n === Ro) return s.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (n === Co || n === Po || n === Do || n === Lo || n === Io || n === Uo || n === No || n === Fo || n === Oo || n === Bo || n === ko || n === zo || n === Vo || n === Go) if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === Co) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Po) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Do) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Lo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Io) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Uo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === No) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Fo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Oo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Bo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === ko) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === zo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Vo) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Go) return a === Qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Ho || n === Wo || n === Xo) if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === Ho) return a === Qt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Wo) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Xo) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Yo || n === qo || n === Ko || n === jo) if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === Yo) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === qo) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Ko) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === jo) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === is ? r16.UNSIGNED_INT_24_8 : r16[n] !== void 0 ? r16[n] : null;
  }
  return { convert: e };
}
const f0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, d0 = `
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
class p0 {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e) {
    if (this.texture === null) {
      const n = new Hh(t.texture);
      (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new Vn({ vertexShader: f0, fragmentShader: d0, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new Gt(new dn(20, 20), n);
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
class m0 extends Ji {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, f = null, u = null, p = null, _ = null;
    const g = typeof XRWebGLBinding < "u", d = new p0(), m = {}, M = e.getContextAttributes();
    let T = null, y = null;
    const b = [], A = [], w = new Pt();
    let x = null;
    const S = new pn();
    S.viewport = new de();
    const z = new pn();
    z.viewport = new de();
    const C = [S, z], L = new Ad();
    let U = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(K) {
      let nt = b[K];
      return nt === void 0 && (nt = new Aa(), b[K] = nt), nt.getTargetRaySpace();
    }, this.getControllerGrip = function(K) {
      let nt = b[K];
      return nt === void 0 && (nt = new Aa(), b[K] = nt), nt.getGripSpace();
    }, this.getHand = function(K) {
      let nt = b[K];
      return nt === void 0 && (nt = new Aa(), b[K] = nt), nt.getHandSpace();
    };
    function O(K) {
      const nt = A.indexOf(K.inputSource);
      if (nt === -1) return;
      const st = b[nt];
      st !== void 0 && (st.update(K.inputSource, K.frame, l || a), st.dispatchEvent({ type: K.type, data: K.inputSource }));
    }
    function B() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", B), i.removeEventListener("inputsourceschange", N);
      for (let K = 0; K < b.length; K++) {
        const nt = A[K];
        nt !== null && (A[K] = null, b[K].disconnect(nt));
      }
      U = null, G = null, d.reset();
      for (const K in m) delete m[K];
      t.setRenderTarget(T), p = null, u = null, f = null, i = null, y = null, Xt.stop(), n.isPresenting = false, t.setPixelRatio(x), t.setSize(w.width, w.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(K) {
      s = K, n.isPresenting === true && Rt("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(K) {
      o = K, n.isPresenting === true && Rt("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(K) {
      l = K;
    }, this.getBaseLayer = function() {
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return f === null && g && (f = new XRWebGLBinding(i, e)), f;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(K) {
      if (i = K, i !== null) {
        if (T = t.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", B), i.addEventListener("inputsourceschange", N), M.xrCompatible !== true && await e.makeXRCompatible(), x = t.getPixelRatio(), t.getSize(w), g && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let st = null, It = null, bt = null;
          M.depth && (bt = M.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, st = M.stencil ? Gi : ii, It = M.stencil ? is : kn);
          const wt = { colorFormat: e.RGBA8, depthFormat: bt, scaleFactor: s };
          f = this.getBinding(), u = f.createProjectionLayer(wt), i.updateRenderState({ layers: [u] }), t.setPixelRatio(1), t.setSize(u.textureWidth, u.textureHeight, false), y = new Fn(u.textureWidth, u.textureHeight, { format: Tn, type: rn, depthTexture: new ss(u.textureWidth, u.textureHeight, It, void 0, void 0, void 0, void 0, void 0, void 0, st), stencilBuffer: M.stencil, colorSpace: t.outputColorSpace, samples: M.antialias ? 4 : 0, resolveDepthBuffer: u.ignoreDepthValues === false, resolveStencilBuffer: u.ignoreDepthValues === false });
        } else {
          const st = { antialias: M.antialias, alpha: true, depth: M.depth, stencil: M.stencil, framebufferScaleFactor: s };
          p = new XRWebGLLayer(i, e, st), i.updateRenderState({ baseLayer: p }), t.setPixelRatio(1), t.setSize(p.framebufferWidth, p.framebufferHeight, false), y = new Fn(p.framebufferWidth, p.framebufferHeight, { format: Tn, type: rn, colorSpace: t.outputColorSpace, stencilBuffer: M.stencil, resolveDepthBuffer: p.ignoreDepthValues === false, resolveStencilBuffer: p.ignoreDepthValues === false });
        }
        y.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Xt.setContext(i), Xt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return d.getDepthTexture();
    };
    function N(K) {
      for (let nt = 0; nt < K.removed.length; nt++) {
        const st = K.removed[nt], It = A.indexOf(st);
        It >= 0 && (A[It] = null, b[It].disconnect(st));
      }
      for (let nt = 0; nt < K.added.length; nt++) {
        const st = K.added[nt];
        let It = A.indexOf(st);
        if (It === -1) {
          for (let wt = 0; wt < b.length; wt++) if (wt >= A.length) {
            A.push(st), It = wt;
            break;
          } else if (A[wt] === null) {
            A[wt] = st, It = wt;
            break;
          }
          if (It === -1) break;
        }
        const bt = b[It];
        bt && bt.connect(st);
      }
    }
    const Z = new k(), $ = new k();
    function lt(K, nt, st) {
      Z.setFromMatrixPosition(nt.matrixWorld), $.setFromMatrixPosition(st.matrixWorld);
      const It = Z.distanceTo($), bt = nt.projectionMatrix.elements, wt = st.projectionMatrix.elements, Ae = bt[14] / (bt[10] - 1), Yt = bt[14] / (bt[10] + 1), $t = (bt[9] + 1) / bt[5], ie = (bt[9] - 1) / bt[5], Ft = (bt[8] - 1) / bt[0], _e = (wt[8] + 1) / wt[0], P = Ae * Ft, Me = Ae * _e, Zt = It / (-Ft + _e), ae = Zt * -Ft;
      if (nt.matrixWorld.decompose(K.position, K.quaternion, K.scale), K.translateX(ae), K.translateZ(Zt), K.matrixWorld.compose(K.position, K.quaternion, K.scale), K.matrixWorldInverse.copy(K.matrixWorld).invert(), bt[10] === -1) K.projectionMatrix.copy(nt.projectionMatrix), K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);
      else {
        const Mt = Ae + Zt, R = Yt + Zt, v = P - ae, I = Me + (It - ae), q = $t * Yt / R * Mt, j = ie * Yt / R * Mt;
        K.projectionMatrix.makePerspective(v, I, q, j, Mt, R), K.projectionMatrixInverse.copy(K.projectionMatrix).invert();
      }
    }
    function ut(K, nt) {
      nt === null ? K.matrixWorld.copy(K.matrix) : K.matrixWorld.multiplyMatrices(nt.matrixWorld, K.matrix), K.matrixWorldInverse.copy(K.matrixWorld).invert();
    }
    this.updateCamera = function(K) {
      if (i === null) return;
      let nt = K.near, st = K.far;
      d.texture !== null && (d.depthNear > 0 && (nt = d.depthNear), d.depthFar > 0 && (st = d.depthFar)), L.near = z.near = S.near = nt, L.far = z.far = S.far = st, (U !== L.near || G !== L.far) && (i.updateRenderState({ depthNear: L.near, depthFar: L.far }), U = L.near, G = L.far), L.layers.mask = K.layers.mask | 6, S.layers.mask = L.layers.mask & -5, z.layers.mask = L.layers.mask & -3;
      const It = K.parent, bt = L.cameras;
      ut(L, It);
      for (let wt = 0; wt < bt.length; wt++) ut(bt[wt], It);
      bt.length === 2 ? lt(L, S, z) : L.projectionMatrix.copy(S.projectionMatrix), at(K, L, It);
    };
    function at(K, nt, st) {
      st === null ? K.matrix.copy(nt.matrixWorld) : (K.matrix.copy(st.matrixWorld), K.matrix.invert(), K.matrix.multiply(nt.matrixWorld)), K.matrix.decompose(K.position, K.quaternion, K.scale), K.updateMatrixWorld(true), K.projectionMatrix.copy(nt.projectionMatrix), K.projectionMatrixInverse.copy(nt.projectionMatrixInverse), K.isPerspectiveCamera && (K.fov = Zo * 2 * Math.atan(1 / K.projectionMatrix.elements[5]), K.zoom = 1);
    }
    this.getCamera = function() {
      return L;
    }, this.getFoveation = function() {
      if (!(u === null && p === null)) return c;
    }, this.setFoveation = function(K) {
      c = K, u !== null && (u.fixedFoveation = K), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = K);
    }, this.hasDepthSensing = function() {
      return d.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return d.getMesh(L);
    }, this.getCameraTexture = function(K) {
      return m[K];
    };
    let Dt = null;
    function Wt(K, nt) {
      if (h = nt.getViewerPose(l || a), _ = nt, h !== null) {
        const st = h.views;
        p !== null && (t.setRenderTargetFramebuffer(y, p.framebuffer), t.setRenderTarget(y));
        let It = false;
        st.length !== L.cameras.length && (L.cameras.length = 0, It = true);
        for (let Yt = 0; Yt < st.length; Yt++) {
          const $t = st[Yt];
          let ie = null;
          if (p !== null) ie = p.getViewport($t);
          else {
            const _e = f.getViewSubImage(u, $t);
            ie = _e.viewport, Yt === 0 && (t.setRenderTargetTextures(y, _e.colorTexture, _e.depthStencilTexture), t.setRenderTarget(y));
          }
          let Ft = C[Yt];
          Ft === void 0 && (Ft = new pn(), Ft.layers.enable(Yt), Ft.viewport = new de(), C[Yt] = Ft), Ft.matrix.fromArray($t.transform.matrix), Ft.matrix.decompose(Ft.position, Ft.quaternion, Ft.scale), Ft.projectionMatrix.fromArray($t.projectionMatrix), Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(), Ft.viewport.set(ie.x, ie.y, ie.width, ie.height), Yt === 0 && (L.matrix.copy(Ft.matrix), L.matrix.decompose(L.position, L.quaternion, L.scale)), It === true && L.cameras.push(Ft);
        }
        const bt = i.enabledFeatures;
        if (bt && bt.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && g) {
          f = n.getBinding();
          const Yt = f.getDepthInformation(st[0]);
          Yt && Yt.isValid && Yt.texture && d.init(Yt, i.renderState);
        }
        if (bt && bt.includes("camera-access") && g) {
          t.state.unbindTexture(), f = n.getBinding();
          for (let Yt = 0; Yt < st.length; Yt++) {
            const $t = st[Yt].camera;
            if ($t) {
              let ie = m[$t];
              ie || (ie = new Hh(), m[$t] = ie);
              const Ft = f.getCameraImage($t);
              ie.sourceTexture = Ft;
            }
          }
        }
      }
      for (let st = 0; st < b.length; st++) {
        const It = A[st], bt = b[st];
        It !== null && bt !== void 0 && bt.update(It, nt, l || a);
      }
      Dt && Dt(K, nt), nt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: nt }), _ = null;
    }
    const Xt = new qh();
    Xt.setAnimationLoop(Wt), this.setAnimationLoop = function(K) {
      Dt = K;
    }, this.dispose = function() {
    };
  }
}
const Ni = new zn(), _0 = new me();
function g0(r16, t) {
  function e(d, m) {
    d.matrixAutoUpdate === true && d.updateMatrix(), m.value.copy(d.matrix);
  }
  function n(d, m) {
    m.color.getRGB(d.fogColor.value, Wh(r16)), m.isFog ? (d.fogNear.value = m.near, d.fogFar.value = m.far) : m.isFogExp2 && (d.fogDensity.value = m.density);
  }
  function i(d, m, M, T, y) {
    m.isMeshBasicMaterial ? s(d, m) : m.isMeshLambertMaterial ? (s(d, m), m.envMap && (d.envMapIntensity.value = m.envMapIntensity)) : m.isMeshToonMaterial ? (s(d, m), f(d, m)) : m.isMeshPhongMaterial ? (s(d, m), h(d, m), m.envMap && (d.envMapIntensity.value = m.envMapIntensity)) : m.isMeshStandardMaterial ? (s(d, m), u(d, m), m.isMeshPhysicalMaterial && p(d, m, y)) : m.isMeshMatcapMaterial ? (s(d, m), _(d, m)) : m.isMeshDepthMaterial ? s(d, m) : m.isMeshDistanceMaterial ? (s(d, m), g(d, m)) : m.isMeshNormalMaterial ? s(d, m) : m.isLineBasicMaterial ? (a(d, m), m.isLineDashedMaterial && o(d, m)) : m.isPointsMaterial ? c(d, m, M, T) : m.isSpriteMaterial ? l(d, m) : m.isShadowMaterial ? (d.color.value.copy(m.color), d.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = false);
  }
  function s(d, m) {
    d.opacity.value = m.opacity, m.color && d.diffuse.value.copy(m.color), m.emissive && d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (d.map.value = m.map, e(m.map, d.mapTransform)), m.alphaMap && (d.alphaMap.value = m.alphaMap, e(m.alphaMap, d.alphaMapTransform)), m.bumpMap && (d.bumpMap.value = m.bumpMap, e(m.bumpMap, d.bumpMapTransform), d.bumpScale.value = m.bumpScale, m.side === qe && (d.bumpScale.value *= -1)), m.normalMap && (d.normalMap.value = m.normalMap, e(m.normalMap, d.normalMapTransform), d.normalScale.value.copy(m.normalScale), m.side === qe && d.normalScale.value.negate()), m.displacementMap && (d.displacementMap.value = m.displacementMap, e(m.displacementMap, d.displacementMapTransform), d.displacementScale.value = m.displacementScale, d.displacementBias.value = m.displacementBias), m.emissiveMap && (d.emissiveMap.value = m.emissiveMap, e(m.emissiveMap, d.emissiveMapTransform)), m.specularMap && (d.specularMap.value = m.specularMap, e(m.specularMap, d.specularMapTransform)), m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    const M = t.get(m), T = M.envMap, y = M.envMapRotation;
    T && (d.envMap.value = T, Ni.copy(y), Ni.x *= -1, Ni.y *= -1, Ni.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === false && (Ni.y *= -1, Ni.z *= -1), d.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Ni)), d.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === false ? -1 : 1, d.reflectivity.value = m.reflectivity, d.ior.value = m.ior, d.refractionRatio.value = m.refractionRatio), m.lightMap && (d.lightMap.value = m.lightMap, d.lightMapIntensity.value = m.lightMapIntensity, e(m.lightMap, d.lightMapTransform)), m.aoMap && (d.aoMap.value = m.aoMap, d.aoMapIntensity.value = m.aoMapIntensity, e(m.aoMap, d.aoMapTransform));
  }
  function a(d, m) {
    d.diffuse.value.copy(m.color), d.opacity.value = m.opacity, m.map && (d.map.value = m.map, e(m.map, d.mapTransform));
  }
  function o(d, m) {
    d.dashSize.value = m.dashSize, d.totalSize.value = m.dashSize + m.gapSize, d.scale.value = m.scale;
  }
  function c(d, m, M, T) {
    d.diffuse.value.copy(m.color), d.opacity.value = m.opacity, d.size.value = m.size * M, d.scale.value = T * 0.5, m.map && (d.map.value = m.map, e(m.map, d.uvTransform)), m.alphaMap && (d.alphaMap.value = m.alphaMap, e(m.alphaMap, d.alphaMapTransform)), m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
  }
  function l(d, m) {
    d.diffuse.value.copy(m.color), d.opacity.value = m.opacity, d.rotation.value = m.rotation, m.map && (d.map.value = m.map, e(m.map, d.mapTransform)), m.alphaMap && (d.alphaMap.value = m.alphaMap, e(m.alphaMap, d.alphaMapTransform)), m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
  }
  function h(d, m) {
    d.specular.value.copy(m.specular), d.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function f(d, m) {
    m.gradientMap && (d.gradientMap.value = m.gradientMap);
  }
  function u(d, m) {
    d.metalness.value = m.metalness, m.metalnessMap && (d.metalnessMap.value = m.metalnessMap, e(m.metalnessMap, d.metalnessMapTransform)), d.roughness.value = m.roughness, m.roughnessMap && (d.roughnessMap.value = m.roughnessMap, e(m.roughnessMap, d.roughnessMapTransform)), m.envMap && (d.envMapIntensity.value = m.envMapIntensity);
  }
  function p(d, m, M) {
    d.ior.value = m.ior, m.sheen > 0 && (d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), d.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (d.sheenColorMap.value = m.sheenColorMap, e(m.sheenColorMap, d.sheenColorMapTransform)), m.sheenRoughnessMap && (d.sheenRoughnessMap.value = m.sheenRoughnessMap, e(m.sheenRoughnessMap, d.sheenRoughnessMapTransform))), m.clearcoat > 0 && (d.clearcoat.value = m.clearcoat, d.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (d.clearcoatMap.value = m.clearcoatMap, e(m.clearcoatMap, d.clearcoatMapTransform)), m.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, e(m.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (d.clearcoatNormalMap.value = m.clearcoatNormalMap, e(m.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === qe && d.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (d.dispersion.value = m.dispersion), m.iridescence > 0 && (d.iridescence.value = m.iridescence, d.iridescenceIOR.value = m.iridescenceIOR, d.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (d.iridescenceMap.value = m.iridescenceMap, e(m.iridescenceMap, d.iridescenceMapTransform)), m.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = m.iridescenceThicknessMap, e(m.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), m.transmission > 0 && (d.transmission.value = m.transmission, d.transmissionSamplerMap.value = M.texture, d.transmissionSamplerSize.value.set(M.width, M.height), m.transmissionMap && (d.transmissionMap.value = m.transmissionMap, e(m.transmissionMap, d.transmissionMapTransform)), d.thickness.value = m.thickness, m.thicknessMap && (d.thicknessMap.value = m.thicknessMap, e(m.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = m.attenuationDistance, d.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (d.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (d.anisotropyMap.value = m.anisotropyMap, e(m.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = m.specularIntensity, d.specularColor.value.copy(m.specularColor), m.specularColorMap && (d.specularColorMap.value = m.specularColorMap, e(m.specularColorMap, d.specularColorMapTransform)), m.specularIntensityMap && (d.specularIntensityMap.value = m.specularIntensityMap, e(m.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function _(d, m) {
    m.matcap && (d.matcap.value = m.matcap);
  }
  function g(d, m) {
    const M = t.get(m).light;
    d.referencePosition.value.setFromMatrixPosition(M.matrixWorld), d.nearDistance.value = M.shadow.camera.near, d.farDistance.value = M.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function x0(r16, t, e, n) {
  let i = {}, s = {}, a = [];
  const o = r16.getParameter(r16.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(M, T) {
    const y = T.program;
    n.uniformBlockBinding(M, y);
  }
  function l(M, T) {
    let y = i[M.id];
    y === void 0 && (_(M), y = h(M), i[M.id] = y, M.addEventListener("dispose", d));
    const b = T.program;
    n.updateUBOMapping(M, b);
    const A = t.render.frame;
    s[M.id] !== A && (u(M), s[M.id] = A);
  }
  function h(M) {
    const T = f();
    M.__bindingPointIndex = T;
    const y = r16.createBuffer(), b = M.__size, A = M.usage;
    return r16.bindBuffer(r16.UNIFORM_BUFFER, y), r16.bufferData(r16.UNIFORM_BUFFER, b, A), r16.bindBuffer(r16.UNIFORM_BUFFER, null), r16.bindBufferBase(r16.UNIFORM_BUFFER, T, y), y;
  }
  function f() {
    for (let M = 0; M < o; M++) if (a.indexOf(M) === -1) return a.push(M), M;
    return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const T = i[M.id], y = M.uniforms, b = M.__cache;
    r16.bindBuffer(r16.UNIFORM_BUFFER, T);
    for (let A = 0, w = y.length; A < w; A++) {
      const x = Array.isArray(y[A]) ? y[A] : [y[A]];
      for (let S = 0, z = x.length; S < z; S++) {
        const C = x[S];
        if (p(C, A, S, b) === true) {
          const L = C.__offset, U = Array.isArray(C.value) ? C.value : [C.value];
          let G = 0;
          for (let O = 0; O < U.length; O++) {
            const B = U[O], N = g(B);
            typeof B == "number" || typeof B == "boolean" ? (C.__data[0] = B, r16.bufferSubData(r16.UNIFORM_BUFFER, L + G, C.__data)) : B.isMatrix3 ? (C.__data[0] = B.elements[0], C.__data[1] = B.elements[1], C.__data[2] = B.elements[2], C.__data[3] = 0, C.__data[4] = B.elements[3], C.__data[5] = B.elements[4], C.__data[6] = B.elements[5], C.__data[7] = 0, C.__data[8] = B.elements[6], C.__data[9] = B.elements[7], C.__data[10] = B.elements[8], C.__data[11] = 0) : (B.toArray(C.__data, G), G += N.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r16.bufferSubData(r16.UNIFORM_BUFFER, L, C.__data);
        }
      }
    }
    r16.bindBuffer(r16.UNIFORM_BUFFER, null);
  }
  function p(M, T, y, b) {
    const A = M.value, w = T + "_" + y;
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
    const T = M.uniforms;
    let y = 0;
    const b = 16;
    for (let w = 0, x = T.length; w < x; w++) {
      const S = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let z = 0, C = S.length; z < C; z++) {
        const L = S[z], U = Array.isArray(L.value) ? L.value : [L.value];
        for (let G = 0, O = U.length; G < O; G++) {
          const B = U[G], N = g(B), Z = y % b, $ = Z % N.boundary, lt = Z + $;
          y += $, lt !== 0 && b - lt < N.storage && (y += b - lt), L.__data = new Float32Array(N.storage / Float32Array.BYTES_PER_ELEMENT), L.__offset = y, y += N.storage;
        }
      }
    }
    const A = y % b;
    return A > 0 && (y += b - A), M.__size = y, M.__cache = {}, this;
  }
  function g(M) {
    const T = { boundary: 0, storage: 0 };
    return typeof M == "number" || typeof M == "boolean" ? (T.boundary = 4, T.storage = 4) : M.isVector2 ? (T.boundary = 8, T.storage = 8) : M.isVector3 || M.isColor ? (T.boundary = 16, T.storage = 12) : M.isVector4 ? (T.boundary = 16, T.storage = 16) : M.isMatrix3 ? (T.boundary = 48, T.storage = 48) : M.isMatrix4 ? (T.boundary = 64, T.storage = 64) : M.isTexture ? Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Rt("WebGLRenderer: Unsupported uniform value type.", M), T;
  }
  function d(M) {
    const T = M.target;
    T.removeEventListener("dispose", d);
    const y = a.indexOf(T.__bindingPointIndex);
    a.splice(y, 1), r16.deleteBuffer(i[T.id]), delete i[T.id], delete s[T.id];
  }
  function m() {
    for (const M in i) r16.deleteBuffer(i[M]);
    a = [], i = {}, s = {};
  }
  return { bind: c, update: l, dispose: m };
}
const v0 = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let wn = null;
function M0() {
  return wn === null && (wn = new cd(v0, 16, 16, Cr, ni), wn.name = "DFG_LUT", wn.minFilter = Be, wn.magFilter = Be, wn.wrapS = Qn, wn.wrapT = Qn, wn.generateMipmaps = false, wn.needsUpdate = true), wn;
}
class S0 {
  constructor(t = {}) {
    const { canvas: e = kf(), context: n = null, depth: i = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: f = false, reversedDepthBuffer: u = false, outputBufferType: p = rn } = t;
    this.isWebGLRenderer = true;
    let _;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      _ = n.getContextAttributes().alpha;
    } else _ = a;
    const g = p, d = /* @__PURE__ */ new Set([Sl, Ml, vl]), m = /* @__PURE__ */ new Set([rn, kn, ns, is, gl, xl]), M = new Uint32Array(4), T = new Int32Array(4);
    let y = null, b = null;
    const A = [], w = [];
    let x = null;
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Nn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const S = this;
    let z = false;
    this._outputColorSpace = fn;
    let C = 0, L = 0, U = null, G = -1, O = null;
    const B = new de(), N = new de();
    let Z = null;
    const $ = new Vt(0);
    let lt = 0, ut = e.width, at = e.height, Dt = 1, Wt = null, Xt = null;
    const K = new de(0, 0, ut, at), nt = new de(0, 0, ut, at);
    let st = false;
    const It = new wl();
    let bt = false, wt = false;
    const Ae = new me(), Yt = new k(), $t = new de(), ie = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ft = false;
    function _e() {
      return U === null ? Dt : 1;
    }
    let P = n;
    function Me(E, F) {
      return e.getContext(E, F);
    }
    try {
      const E = { alpha: true, depth: i, stencil: s, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: h, failIfMajorPerformanceCaveat: f };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${pl}`), e.addEventListener("webglcontextlost", gt, false), e.addEventListener("webglcontextrestored", Ct, false), e.addEventListener("webglcontextcreationerror", oe, false), P === null) {
        const F = "webgl2";
        if (P = Me(F, E), P === null) throw Me(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw jt("WebGLRenderer: " + E.message), E;
    }
    let Zt, ae, Mt, R, v, I, q, j, Y, mt, it, Tt, At, J, tt, _t, xt, ft, Ot, D, rt, et, pt;
    function Q() {
      Zt = new S_(P), Zt.init(), rt = new u0(P, Zt), ae = new d_(P, Zt, t, rt), Mt = new c0(P, Zt), ae.reversedDepthBuffer && u && Mt.buffers.depth.setReversed(true), R = new T_(P), v = new jg(), I = new h0(P, Zt, Mt, v, ae, rt, R), q = new M_(S), j = new Cd(P), et = new u_(P, j), Y = new y_(P, j, R, et), mt = new A_(P, Y, j, et, R), ft = new b_(P, ae, I), tt = new p_(v), it = new Kg(S, q, Zt, ae, et, tt), Tt = new g0(S, v), At = new $g(), J = new i0(Zt), xt = new h_(S, q, Mt, mt, _, c), _t = new l0(S, mt, ae), pt = new x0(P, R, ae, Mt), Ot = new f_(P, Zt, R), D = new E_(P, Zt, R), R.programs = it.programs, S.capabilities = ae, S.extensions = Zt, S.properties = v, S.renderLists = At, S.shadowMap = _t, S.state = Mt, S.info = R;
    }
    Q(), g !== rn && (x = new R_(g, e.width, e.height, i, s));
    const X = new m0(S, P);
    this.xr = X, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = Zt.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = Zt.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return Dt;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (Dt = E, this.setSize(ut, at, false));
    }, this.getSize = function(E) {
      return E.set(ut, at);
    }, this.setSize = function(E, F, W = true) {
      if (X.isPresenting) {
        Rt("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ut = E, at = F, e.width = Math.floor(E * Dt), e.height = Math.floor(F * Dt), W === true && (e.style.width = E + "px", e.style.height = F + "px"), x !== null && x.setSize(e.width, e.height), this.setViewport(0, 0, E, F);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(ut * Dt, at * Dt).floor();
    }, this.setDrawingBufferSize = function(E, F, W) {
      ut = E, at = F, Dt = W, e.width = Math.floor(E * W), e.height = Math.floor(F * W), this.setViewport(0, 0, E, F);
    }, this.setEffects = function(E) {
      if (g === rn) {
        console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (E) {
        for (let F = 0; F < E.length; F++) if (E[F].isOutputPass === true) {
          console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      x.setEffects(E || []);
    }, this.getCurrentViewport = function(E) {
      return E.copy(B);
    }, this.getViewport = function(E) {
      return E.copy(K);
    }, this.setViewport = function(E, F, W, H) {
      E.isVector4 ? K.set(E.x, E.y, E.z, E.w) : K.set(E, F, W, H), Mt.viewport(B.copy(K).multiplyScalar(Dt).round());
    }, this.getScissor = function(E) {
      return E.copy(nt);
    }, this.setScissor = function(E, F, W, H) {
      E.isVector4 ? nt.set(E.x, E.y, E.z, E.w) : nt.set(E, F, W, H), Mt.scissor(N.copy(nt).multiplyScalar(Dt).round());
    }, this.getScissorTest = function() {
      return st;
    }, this.setScissorTest = function(E) {
      Mt.setScissorTest(st = E);
    }, this.setOpaqueSort = function(E) {
      Wt = E;
    }, this.setTransparentSort = function(E) {
      Xt = E;
    }, this.getClearColor = function(E) {
      return E.copy(xt.getClearColor());
    }, this.setClearColor = function() {
      xt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xt.getClearAlpha();
    }, this.setClearAlpha = function() {
      xt.setClearAlpha(...arguments);
    }, this.clear = function(E = true, F = true, W = true) {
      let H = 0;
      if (E) {
        let V = false;
        if (U !== null) {
          const ct = U.texture.format;
          V = d.has(ct);
        }
        if (V) {
          const ct = U.texture.type, dt = m.has(ct), ht = xt.getClearColor(), vt = xt.getClearAlpha(), yt = ht.r, Lt = ht.g, Bt = ht.b;
          dt ? (M[0] = yt, M[1] = Lt, M[2] = Bt, M[3] = vt, P.clearBufferuiv(P.COLOR, 0, M)) : (T[0] = yt, T[1] = Lt, T[2] = Bt, T[3] = vt, P.clearBufferiv(P.COLOR, 0, T));
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
      e.removeEventListener("webglcontextlost", gt, false), e.removeEventListener("webglcontextrestored", Ct, false), e.removeEventListener("webglcontextcreationerror", oe, false), xt.dispose(), At.dispose(), J.dispose(), v.dispose(), q.dispose(), mt.dispose(), et.dispose(), pt.dispose(), it.dispose(), X.dispose(), X.removeEventListener("sessionstart", Kl), X.removeEventListener("sessionend", jl), Ri.stop();
    };
    function gt(E) {
      E.preventDefault(), hc("WebGLRenderer: Context Lost."), z = true;
    }
    function Ct() {
      hc("WebGLRenderer: Context Restored."), z = false;
      const E = R.autoReset, F = _t.enabled, W = _t.autoUpdate, H = _t.needsUpdate, V = _t.type;
      Q(), R.autoReset = E, _t.enabled = F, _t.autoUpdate = W, _t.needsUpdate = H, _t.type = V;
    }
    function oe(E) {
      jt("WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function Jt(E) {
      const F = E.target;
      F.removeEventListener("dispose", Jt), Wn(F);
    }
    function Wn(E) {
      Xn(E), v.remove(E);
    }
    function Xn(E) {
      const F = v.get(E).programs;
      F !== void 0 && (F.forEach(function(W) {
        it.releaseProgram(W);
      }), E.isShaderMaterial && it.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, F, W, H, V, ct) {
      F === null && (F = ie);
      const dt = V.isMesh && V.matrixWorld.determinant() < 0, ht = tf(E, F, W, H, V);
      Mt.setMaterial(H, dt);
      let vt = W.index, yt = 1;
      if (H.wireframe === true) {
        if (vt = Y.getWireframeAttribute(W), vt === void 0) return;
        yt = 2;
      }
      const Lt = W.drawRange, Bt = W.attributes.position;
      let Et = Lt.start * yt, te = (Lt.start + Lt.count) * yt;
      ct !== null && (Et = Math.max(Et, ct.start * yt), te = Math.min(te, (ct.start + ct.count) * yt)), vt !== null ? (Et = Math.max(Et, 0), te = Math.min(te, vt.count)) : Bt != null && (Et = Math.max(Et, 0), te = Math.min(te, Bt.count));
      const ge = te - Et;
      if (ge < 0 || ge === 1 / 0) return;
      et.setup(V, H, ht, W, vt);
      let fe, ee = Ot;
      if (vt !== null && (fe = j.get(vt), ee = D, ee.setIndex(fe)), V.isMesh) H.wireframe === true ? (Mt.setLineWidth(H.wireframeLinewidth * _e()), ee.setMode(P.LINES)) : ee.setMode(P.TRIANGLES);
      else if (V.isLine) {
        let Ue = H.linewidth;
        Ue === void 0 && (Ue = 1), Mt.setLineWidth(Ue * _e()), V.isLineSegments ? ee.setMode(P.LINES) : V.isLineLoop ? ee.setMode(P.LINE_LOOP) : ee.setMode(P.LINE_STRIP);
      } else V.isPoints ? ee.setMode(P.POINTS) : V.isSprite && ee.setMode(P.TRIANGLES);
      if (V.isBatchedMesh) if (V._multiDrawInstances !== null) ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), ee.renderMultiDrawInstances(V._multiDrawStarts, V._multiDrawCounts, V._multiDrawCount, V._multiDrawInstances);
      else if (Zt.get("WEBGL_multi_draw")) ee.renderMultiDraw(V._multiDrawStarts, V._multiDrawCounts, V._multiDrawCount);
      else {
        const Ue = V._multiDrawStarts, St = V._multiDrawCounts, Qe = V._multiDrawCount, Kt = vt ? j.get(vt).bytesPerElement : 1, vn = v.get(H).currentProgram.getUniforms();
        for (let bn = 0; bn < Qe; bn++) vn.setValue(P, "_gl_DrawID", bn), ee.render(Ue[bn] / Kt, St[bn]);
      }
      else if (V.isInstancedMesh) ee.renderInstances(Et, ge, V.count);
      else if (W.isInstancedBufferGeometry) {
        const Ue = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, St = Math.min(W.instanceCount, Ue);
        ee.renderInstances(Et, ge, St);
      } else ee.render(Et, ge);
    };
    function ql(E, F, W) {
      E.transparent === true && E.side === Pn && E.forceSinglePass === false ? (E.side = qe, E.needsUpdate = true, gs(E, F, W), E.side = Ei, E.needsUpdate = true, gs(E, F, W), E.side = Pn) : gs(E, F, W);
    }
    this.compile = function(E, F, W = null) {
      W === null && (W = E), b = J.get(W), b.init(F), w.push(b), W.traverseVisible(function(V) {
        V.isLight && V.layers.test(F.layers) && (b.pushLight(V), V.castShadow && b.pushShadow(V));
      }), E !== W && E.traverseVisible(function(V) {
        V.isLight && V.layers.test(F.layers) && (b.pushLight(V), V.castShadow && b.pushShadow(V));
      }), b.setupLights();
      const H = /* @__PURE__ */ new Set();
      return E.traverse(function(V) {
        if (!(V.isMesh || V.isPoints || V.isLine || V.isSprite)) return;
        const ct = V.material;
        if (ct) if (Array.isArray(ct)) for (let dt = 0; dt < ct.length; dt++) {
          const ht = ct[dt];
          ql(ht, W, V), H.add(ht);
        }
        else ql(ct, W, V), H.add(ct);
      }), b = w.pop(), H;
    }, this.compileAsync = function(E, F, W = null) {
      const H = this.compile(E, F, W);
      return new Promise((V) => {
        function ct() {
          if (H.forEach(function(dt) {
            v.get(dt).currentProgram.isReady() && H.delete(dt);
          }), H.size === 0) {
            V(E);
            return;
          }
          setTimeout(ct, 10);
        }
        Zt.get("KHR_parallel_shader_compile") !== null ? ct() : setTimeout(ct, 10);
      });
    };
    let ma = null;
    function Qu(E) {
      ma && ma(E);
    }
    function Kl() {
      Ri.stop();
    }
    function jl() {
      Ri.start();
    }
    const Ri = new qh();
    Ri.setAnimationLoop(Qu), typeof self < "u" && Ri.setContext(self), this.setAnimationLoop = function(E) {
      ma = E, X.setAnimationLoop(E), E === null ? Ri.stop() : Ri.start();
    }, X.addEventListener("sessionstart", Kl), X.addEventListener("sessionend", jl), this.render = function(E, F) {
      if (F !== void 0 && F.isCamera !== true) {
        jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (z === true) return;
      const W = X.enabled === true && X.isPresenting === true, H = x !== null && (U === null || W) && x.begin(S, U);
      if (E.matrixWorldAutoUpdate === true && E.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === true && F.updateMatrixWorld(), X.enabled === true && X.isPresenting === true && (x === null || x.isCompositing() === false) && (X.cameraAutoUpdate === true && X.updateCamera(F), F = X.getCamera()), E.isScene === true && E.onBeforeRender(S, E, F, U), b = J.get(E, w.length), b.init(F), w.push(b), Ae.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), It.setFromProjectionMatrix(Ae, In, F.reversedDepth), wt = this.localClippingEnabled, bt = tt.init(this.clippingPlanes, wt), y = At.get(E, A.length), y.init(), A.push(y), X.enabled === true && X.isPresenting === true) {
        const dt = S.xr.getDepthSensingMesh();
        dt !== null && _a(dt, F, -1 / 0, S.sortObjects);
      }
      _a(E, F, 0, S.sortObjects), y.finish(), S.sortObjects === true && y.sort(Wt, Xt), Ft = X.enabled === false || X.isPresenting === false || X.hasDepthSensing() === false, Ft && xt.addToRenderList(y, E), this.info.render.frame++, bt === true && tt.beginShadows();
      const V = b.state.shadowsArray;
      if (_t.render(V, E, F), bt === true && tt.endShadows(), this.info.autoReset === true && this.info.reset(), (H && x.hasRenderPass()) === false) {
        const dt = y.opaque, ht = y.transmissive;
        if (b.setupLights(), F.isArrayCamera) {
          const vt = F.cameras;
          if (ht.length > 0) for (let yt = 0, Lt = vt.length; yt < Lt; yt++) {
            const Bt = vt[yt];
            $l(dt, ht, E, Bt);
          }
          Ft && xt.render(E);
          for (let yt = 0, Lt = vt.length; yt < Lt; yt++) {
            const Bt = vt[yt];
            Zl(y, E, Bt, Bt.viewport);
          }
        } else ht.length > 0 && $l(dt, ht, E, F), Ft && xt.render(E), Zl(y, E, F);
      }
      U !== null && L === 0 && (I.updateMultisampleRenderTarget(U), I.updateRenderTargetMipmap(U)), H && x.end(S), E.isScene === true && E.onAfterRender(S, E, F), et.resetDefaultState(), G = -1, O = null, w.pop(), w.length > 0 ? (b = w[w.length - 1], bt === true && tt.setGlobalState(S.clippingPlanes, b.state.camera)) : b = null, A.pop(), A.length > 0 ? y = A[A.length - 1] : y = null;
    };
    function _a(E, F, W, H) {
      if (E.visible === false) return;
      if (E.layers.test(F.layers)) {
        if (E.isGroup) W = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === true && E.update(F);
        else if (E.isLight) b.pushLight(E), E.castShadow && b.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || It.intersectsSprite(E)) {
            H && $t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);
            const dt = mt.update(E), ht = E.material;
            ht.visible && y.push(E, dt, ht, W, $t.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || It.intersectsObject(E))) {
          const dt = mt.update(E), ht = E.material;
          if (H && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), $t.copy(E.boundingSphere.center)) : (dt.boundingSphere === null && dt.computeBoundingSphere(), $t.copy(dt.boundingSphere.center)), $t.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)), Array.isArray(ht)) {
            const vt = dt.groups;
            for (let yt = 0, Lt = vt.length; yt < Lt; yt++) {
              const Bt = vt[yt], Et = ht[Bt.materialIndex];
              Et && Et.visible && y.push(E, dt, Et, W, $t.z, Bt);
            }
          } else ht.visible && y.push(E, dt, ht, W, $t.z, null);
        }
      }
      const ct = E.children;
      for (let dt = 0, ht = ct.length; dt < ht; dt++) _a(ct[dt], F, W, H);
    }
    function Zl(E, F, W, H) {
      const { opaque: V, transmissive: ct, transparent: dt } = E;
      b.setupLightsView(W), bt === true && tt.setGlobalState(S.clippingPlanes, W), H && Mt.viewport(B.copy(H)), V.length > 0 && _s(V, F, W), ct.length > 0 && _s(ct, F, W), dt.length > 0 && _s(dt, F, W), Mt.buffers.depth.setTest(true), Mt.buffers.depth.setMask(true), Mt.buffers.color.setMask(true), Mt.setPolygonOffset(false);
    }
    function $l(E, F, W, H) {
      if ((W.isScene === true ? W.overrideMaterial : null) !== null) return;
      if (b.state.transmissionRenderTarget[H.id] === void 0) {
        const Et = Zt.has("EXT_color_buffer_half_float") || Zt.has("EXT_color_buffer_float");
        b.state.transmissionRenderTarget[H.id] = new Fn(1, 1, { generateMipmaps: true, type: Et ? ni : rn, minFilter: Vi, samples: Math.max(4, ae.samples), stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: qt.workingColorSpace });
      }
      const ct = b.state.transmissionRenderTarget[H.id], dt = H.viewport || B;
      ct.setSize(dt.z * S.transmissionResolutionScale, dt.w * S.transmissionResolutionScale);
      const ht = S.getRenderTarget(), vt = S.getActiveCubeFace(), yt = S.getActiveMipmapLevel();
      S.setRenderTarget(ct), S.getClearColor($), lt = S.getClearAlpha(), lt < 1 && S.setClearColor(16777215, 0.5), S.clear(), Ft && xt.render(W);
      const Lt = S.toneMapping;
      S.toneMapping = Nn;
      const Bt = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), b.setupLightsView(H), bt === true && tt.setGlobalState(S.clippingPlanes, H), _s(E, W, H), I.updateMultisampleRenderTarget(ct), I.updateRenderTargetMipmap(ct), Zt.has("WEBGL_multisampled_render_to_texture") === false) {
        let Et = false;
        for (let te = 0, ge = F.length; te < ge; te++) {
          const fe = F[te], { object: ee, geometry: Ue, material: St, group: Qe } = fe;
          if (St.side === Pn && ee.layers.test(H.layers)) {
            const Kt = St.side;
            St.side = qe, St.needsUpdate = true, Jl(ee, W, H, Ue, St, Qe), St.side = Kt, St.needsUpdate = true, Et = true;
          }
        }
        Et === true && (I.updateMultisampleRenderTarget(ct), I.updateRenderTargetMipmap(ct));
      }
      S.setRenderTarget(ht, vt, yt), S.setClearColor($, lt), Bt !== void 0 && (H.viewport = Bt), S.toneMapping = Lt;
    }
    function _s(E, F, W) {
      const H = F.isScene === true ? F.overrideMaterial : null;
      for (let V = 0, ct = E.length; V < ct; V++) {
        const dt = E[V], { object: ht, geometry: vt, group: yt } = dt;
        let Lt = dt.material;
        Lt.allowOverride === true && H !== null && (Lt = H), ht.layers.test(W.layers) && Jl(ht, F, W, vt, Lt, yt);
      }
    }
    function Jl(E, F, W, H, V, ct) {
      E.onBeforeRender(S, F, W, H, V, ct), E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), V.onBeforeRender(S, F, W, H, E, ct), V.transparent === true && V.side === Pn && V.forceSinglePass === false ? (V.side = qe, V.needsUpdate = true, S.renderBufferDirect(W, F, H, V, E, ct), V.side = Ei, V.needsUpdate = true, S.renderBufferDirect(W, F, H, V, E, ct), V.side = Pn) : S.renderBufferDirect(W, F, H, V, E, ct), E.onAfterRender(S, F, W, H, V, ct);
    }
    function gs(E, F, W) {
      F.isScene !== true && (F = ie);
      const H = v.get(E), V = b.state.lights, ct = b.state.shadowsArray, dt = V.state.version, ht = it.getParameters(E, V.state, ct, F, W), vt = it.getProgramCacheKey(ht);
      let yt = H.programs;
      H.environment = E.isMeshStandardMaterial || E.isMeshLambertMaterial || E.isMeshPhongMaterial ? F.environment : null, H.fog = F.fog;
      const Lt = E.isMeshStandardMaterial || E.isMeshLambertMaterial && !E.envMap || E.isMeshPhongMaterial && !E.envMap;
      H.envMap = q.get(E.envMap || H.environment, Lt), H.envMapRotation = H.environment !== null && E.envMap === null ? F.environmentRotation : E.envMapRotation, yt === void 0 && (E.addEventListener("dispose", Jt), yt = /* @__PURE__ */ new Map(), H.programs = yt);
      let Bt = yt.get(vt);
      if (Bt !== void 0) {
        if (H.currentProgram === Bt && H.lightsStateVersion === dt) return tc(E, ht), Bt;
      } else ht.uniforms = it.getUniforms(E), E.onBeforeCompile(ht, S), Bt = it.acquireProgram(ht, vt), yt.set(vt, Bt), H.uniforms = ht.uniforms;
      const Et = H.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === true) && (Et.clippingPlanes = tt.uniform), tc(E, ht), H.needsLights = nf(E), H.lightsStateVersion = dt, H.needsLights && (Et.ambientLightColor.value = V.state.ambient, Et.lightProbe.value = V.state.probe, Et.directionalLights.value = V.state.directional, Et.directionalLightShadows.value = V.state.directionalShadow, Et.spotLights.value = V.state.spot, Et.spotLightShadows.value = V.state.spotShadow, Et.rectAreaLights.value = V.state.rectArea, Et.ltc_1.value = V.state.rectAreaLTC1, Et.ltc_2.value = V.state.rectAreaLTC2, Et.pointLights.value = V.state.point, Et.pointLightShadows.value = V.state.pointShadow, Et.hemisphereLights.value = V.state.hemi, Et.directionalShadowMatrix.value = V.state.directionalShadowMatrix, Et.spotLightMatrix.value = V.state.spotLightMatrix, Et.spotLightMap.value = V.state.spotLightMap, Et.pointShadowMatrix.value = V.state.pointShadowMatrix), H.currentProgram = Bt, H.uniformsList = null, Bt;
    }
    function Ql(E) {
      if (E.uniformsList === null) {
        const F = E.currentProgram.getUniforms();
        E.uniformsList = Ks.seqWithValue(F.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function tc(E, F) {
      const W = v.get(E);
      W.outputColorSpace = F.outputColorSpace, W.batching = F.batching, W.batchingColor = F.batchingColor, W.instancing = F.instancing, W.instancingColor = F.instancingColor, W.instancingMorph = F.instancingMorph, W.skinning = F.skinning, W.morphTargets = F.morphTargets, W.morphNormals = F.morphNormals, W.morphColors = F.morphColors, W.morphTargetsCount = F.morphTargetsCount, W.numClippingPlanes = F.numClippingPlanes, W.numIntersection = F.numClipIntersection, W.vertexAlphas = F.vertexAlphas, W.vertexTangents = F.vertexTangents, W.toneMapping = F.toneMapping;
    }
    function tf(E, F, W, H, V) {
      F.isScene !== true && (F = ie), I.resetTextureUnits();
      const ct = F.fog, dt = H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial ? F.environment : null, ht = U === null ? S.outputColorSpace : U.isXRRenderTarget === true ? U.texture.colorSpace : Pr, vt = H.isMeshStandardMaterial || H.isMeshLambertMaterial && !H.envMap || H.isMeshPhongMaterial && !H.envMap, yt = q.get(H.envMap || dt, vt), Lt = H.vertexColors === true && !!W.attributes.color && W.attributes.color.itemSize === 4, Bt = !!W.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), Et = !!W.morphAttributes.position, te = !!W.morphAttributes.normal, ge = !!W.morphAttributes.color;
      let fe = Nn;
      H.toneMapped && (U === null || U.isXRRenderTarget === true) && (fe = S.toneMapping);
      const ee = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, Ue = ee !== void 0 ? ee.length : 0, St = v.get(H), Qe = b.state.lights;
      if (bt === true && (wt === true || E !== O)) {
        const we = E === O && H.id === G;
        tt.setState(H, E, we);
      }
      let Kt = false;
      H.version === St.__version ? (St.needsLights && St.lightsStateVersion !== Qe.state.version || St.outputColorSpace !== ht || V.isBatchedMesh && St.batching === false || !V.isBatchedMesh && St.batching === true || V.isBatchedMesh && St.batchingColor === true && V.colorTexture === null || V.isBatchedMesh && St.batchingColor === false && V.colorTexture !== null || V.isInstancedMesh && St.instancing === false || !V.isInstancedMesh && St.instancing === true || V.isSkinnedMesh && St.skinning === false || !V.isSkinnedMesh && St.skinning === true || V.isInstancedMesh && St.instancingColor === true && V.instanceColor === null || V.isInstancedMesh && St.instancingColor === false && V.instanceColor !== null || V.isInstancedMesh && St.instancingMorph === true && V.morphTexture === null || V.isInstancedMesh && St.instancingMorph === false && V.morphTexture !== null || St.envMap !== yt || H.fog === true && St.fog !== ct || St.numClippingPlanes !== void 0 && (St.numClippingPlanes !== tt.numPlanes || St.numIntersection !== tt.numIntersection) || St.vertexAlphas !== Lt || St.vertexTangents !== Bt || St.morphTargets !== Et || St.morphNormals !== te || St.morphColors !== ge || St.toneMapping !== fe || St.morphTargetsCount !== Ue) && (Kt = true) : (Kt = true, St.__version = H.version);
      let vn = St.currentProgram;
      Kt === true && (vn = gs(H, F, V));
      let bn = false, Ci = false, tr = false;
      const re = vn.getUniforms(), De = St.uniforms;
      if (Mt.useProgram(vn.program) && (bn = true, Ci = true, tr = true), H.id !== G && (G = H.id, Ci = true), bn || O !== E) {
        Mt.buffers.depth.getReversed() && E.reversedDepth !== true && (E._reversedDepth = true, E.updateProjectionMatrix()), re.setValue(P, "projectionMatrix", E.projectionMatrix), re.setValue(P, "viewMatrix", E.matrixWorldInverse);
        const oi = re.map.cameraPosition;
        oi !== void 0 && oi.setValue(P, Yt.setFromMatrixPosition(E.matrixWorld)), ae.logarithmicDepthBuffer && re.setValue(P, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && re.setValue(P, "isOrthographic", E.isOrthographicCamera === true), O !== E && (O = E, Ci = true, tr = true);
      }
      if (St.needsLights && (Qe.state.directionalShadowMap.length > 0 && re.setValue(P, "directionalShadowMap", Qe.state.directionalShadowMap, I), Qe.state.spotShadowMap.length > 0 && re.setValue(P, "spotShadowMap", Qe.state.spotShadowMap, I), Qe.state.pointShadowMap.length > 0 && re.setValue(P, "pointShadowMap", Qe.state.pointShadowMap, I)), V.isSkinnedMesh) {
        re.setOptional(P, V, "bindMatrix"), re.setOptional(P, V, "bindMatrixInverse");
        const we = V.skeleton;
        we && (we.boneTexture === null && we.computeBoneTexture(), re.setValue(P, "boneTexture", we.boneTexture, I));
      }
      V.isBatchedMesh && (re.setOptional(P, V, "batchingTexture"), re.setValue(P, "batchingTexture", V._matricesTexture, I), re.setOptional(P, V, "batchingIdTexture"), re.setValue(P, "batchingIdTexture", V._indirectTexture, I), re.setOptional(P, V, "batchingColorTexture"), V._colorsTexture !== null && re.setValue(P, "batchingColorTexture", V._colorsTexture, I));
      const ai = W.morphAttributes;
      if ((ai.position !== void 0 || ai.normal !== void 0 || ai.color !== void 0) && ft.update(V, W, vn), (Ci || St.receiveShadow !== V.receiveShadow) && (St.receiveShadow = V.receiveShadow, re.setValue(P, "receiveShadow", V.receiveShadow)), (H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial) && H.envMap === null && F.environment !== null && (De.envMapIntensity.value = F.environmentIntensity), De.dfgLUT !== void 0 && (De.dfgLUT.value = M0()), Ci && (re.setValue(P, "toneMappingExposure", S.toneMappingExposure), St.needsLights && ef(De, tr), ct && H.fog === true && Tt.refreshFogUniforms(De, ct), Tt.refreshMaterialUniforms(De, H, Dt, at, b.state.transmissionRenderTarget[E.id]), Ks.upload(P, Ql(St), De, I)), H.isShaderMaterial && H.uniformsNeedUpdate === true && (Ks.upload(P, Ql(St), De, I), H.uniformsNeedUpdate = false), H.isSpriteMaterial && re.setValue(P, "center", V.center), re.setValue(P, "modelViewMatrix", V.modelViewMatrix), re.setValue(P, "normalMatrix", V.normalMatrix), re.setValue(P, "modelMatrix", V.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
        const we = H.uniformsGroups;
        for (let oi = 0, er = we.length; oi < er; oi++) {
          const ec = we[oi];
          pt.update(ec, vn), pt.bind(ec, vn);
        }
      }
      return vn;
    }
    function ef(E, F) {
      E.ambientLightColor.needsUpdate = F, E.lightProbe.needsUpdate = F, E.directionalLights.needsUpdate = F, E.directionalLightShadows.needsUpdate = F, E.pointLights.needsUpdate = F, E.pointLightShadows.needsUpdate = F, E.spotLights.needsUpdate = F, E.spotLightShadows.needsUpdate = F, E.rectAreaLights.needsUpdate = F, E.hemisphereLights.needsUpdate = F;
    }
    function nf(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === true;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(E, F, W) {
      const H = v.get(E);
      H.__autoAllocateDepthBuffer = E.resolveDepthBuffer === false, H.__autoAllocateDepthBuffer === false && (H.__useRenderToTexture = false), v.get(E.texture).__webglTexture = F, v.get(E.depthTexture).__webglTexture = H.__autoAllocateDepthBuffer ? void 0 : W, H.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(E, F) {
      const W = v.get(E);
      W.__webglFramebuffer = F, W.__useDefaultFramebuffer = F === void 0;
    };
    const rf = P.createFramebuffer();
    this.setRenderTarget = function(E, F = 0, W = 0) {
      U = E, C = F, L = W;
      let H = null, V = false, ct = false;
      if (E) {
        const ht = v.get(E);
        if (ht.__useDefaultFramebuffer !== void 0) {
          Mt.bindFramebuffer(P.FRAMEBUFFER, ht.__webglFramebuffer), B.copy(E.viewport), N.copy(E.scissor), Z = E.scissorTest, Mt.viewport(B), Mt.scissor(N), Mt.setScissorTest(Z), G = -1;
          return;
        } else if (ht.__webglFramebuffer === void 0) I.setupRenderTarget(E);
        else if (ht.__hasExternalTextures) I.rebindTextures(E, v.get(E.texture).__webglTexture, v.get(E.depthTexture).__webglTexture);
        else if (E.depthBuffer) {
          const Lt = E.depthTexture;
          if (ht.__boundDepthTexture !== Lt) {
            if (Lt !== null && v.has(Lt) && (E.width !== Lt.image.width || E.height !== Lt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            I.setupDepthRenderbuffer(E);
          }
        }
        const vt = E.texture;
        (vt.isData3DTexture || vt.isDataArrayTexture || vt.isCompressedArrayTexture) && (ct = true);
        const yt = v.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(yt[F]) ? H = yt[F][W] : H = yt[F], V = true) : E.samples > 0 && I.useMultisampledRTT(E) === false ? H = v.get(E).__webglMultisampledFramebuffer : Array.isArray(yt) ? H = yt[W] : H = yt, B.copy(E.viewport), N.copy(E.scissor), Z = E.scissorTest;
      } else B.copy(K).multiplyScalar(Dt).floor(), N.copy(nt).multiplyScalar(Dt).floor(), Z = st;
      if (W !== 0 && (H = rf), Mt.bindFramebuffer(P.FRAMEBUFFER, H) && Mt.drawBuffers(E, H), Mt.viewport(B), Mt.scissor(N), Mt.setScissorTest(Z), V) {
        const ht = v.get(E.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + F, ht.__webglTexture, W);
      } else if (ct) {
        const ht = F;
        for (let vt = 0; vt < E.textures.length; vt++) {
          const yt = v.get(E.textures[vt]);
          P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0 + vt, yt.__webglTexture, W, ht);
        }
      } else if (E !== null && W !== 0) {
        const ht = v.get(E.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, ht.__webglTexture, W);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(E, F, W, H, V, ct, dt, ht = 0) {
      if (!(E && E.isWebGLRenderTarget)) {
        jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let vt = v.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && dt !== void 0 && (vt = vt[dt]), vt) {
        Mt.bindFramebuffer(P.FRAMEBUFFER, vt);
        try {
          const yt = E.textures[ht], Lt = yt.format, Bt = yt.type;
          if (E.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + ht), !ae.textureFormatReadable(Lt)) {
            jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ae.textureTypeReadable(Bt)) {
            jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= E.width - H && W >= 0 && W <= E.height - V && P.readPixels(F, W, H, V, rt.convert(Lt), rt.convert(Bt), ct);
        } finally {
          const yt = U !== null ? v.get(U).__webglFramebuffer : null;
          Mt.bindFramebuffer(P.FRAMEBUFFER, yt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(E, F, W, H, V, ct, dt, ht = 0) {
      if (!(E && E.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let vt = v.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && dt !== void 0 && (vt = vt[dt]), vt) if (F >= 0 && F <= E.width - H && W >= 0 && W <= E.height - V) {
        Mt.bindFramebuffer(P.FRAMEBUFFER, vt);
        const yt = E.textures[ht], Lt = yt.format, Bt = yt.type;
        if (E.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + ht), !ae.textureFormatReadable(Lt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ae.textureTypeReadable(Bt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Et = P.createBuffer();
        P.bindBuffer(P.PIXEL_PACK_BUFFER, Et), P.bufferData(P.PIXEL_PACK_BUFFER, ct.byteLength, P.STREAM_READ), P.readPixels(F, W, H, V, rt.convert(Lt), rt.convert(Bt), 0);
        const te = U !== null ? v.get(U).__webglFramebuffer : null;
        Mt.bindFramebuffer(P.FRAMEBUFFER, te);
        const ge = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return P.flush(), await zf(P, ge, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, Et), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, ct), P.deleteBuffer(Et), P.deleteSync(ge), ct;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(E, F = null, W = 0) {
      const H = Math.pow(2, -W), V = Math.floor(E.image.width * H), ct = Math.floor(E.image.height * H), dt = F !== null ? F.x : 0, ht = F !== null ? F.y : 0;
      I.setTexture2D(E, 0), P.copyTexSubImage2D(P.TEXTURE_2D, W, 0, 0, dt, ht, V, ct), Mt.unbindTexture();
    };
    const sf = P.createFramebuffer(), af = P.createFramebuffer();
    this.copyTextureToTexture = function(E, F, W = null, H = null, V = 0, ct = 0) {
      let dt, ht, vt, yt, Lt, Bt, Et, te, ge;
      const fe = E.isCompressedTexture ? E.mipmaps[ct] : E.image;
      if (W !== null) dt = W.max.x - W.min.x, ht = W.max.y - W.min.y, vt = W.isBox3 ? W.max.z - W.min.z : 1, yt = W.min.x, Lt = W.min.y, Bt = W.isBox3 ? W.min.z : 0;
      else {
        const De = Math.pow(2, -V);
        dt = Math.floor(fe.width * De), ht = Math.floor(fe.height * De), E.isDataArrayTexture ? vt = fe.depth : E.isData3DTexture ? vt = Math.floor(fe.depth * De) : vt = 1, yt = 0, Lt = 0, Bt = 0;
      }
      H !== null ? (Et = H.x, te = H.y, ge = H.z) : (Et = 0, te = 0, ge = 0);
      const ee = rt.convert(F.format), Ue = rt.convert(F.type);
      let St;
      F.isData3DTexture ? (I.setTexture3D(F, 0), St = P.TEXTURE_3D) : F.isDataArrayTexture || F.isCompressedArrayTexture ? (I.setTexture2DArray(F, 0), St = P.TEXTURE_2D_ARRAY) : (I.setTexture2D(F, 0), St = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, F.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, F.unpackAlignment);
      const Qe = P.getParameter(P.UNPACK_ROW_LENGTH), Kt = P.getParameter(P.UNPACK_IMAGE_HEIGHT), vn = P.getParameter(P.UNPACK_SKIP_PIXELS), bn = P.getParameter(P.UNPACK_SKIP_ROWS), Ci = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, fe.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, fe.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, yt), P.pixelStorei(P.UNPACK_SKIP_ROWS, Lt), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Bt);
      const tr = E.isDataArrayTexture || E.isData3DTexture, re = F.isDataArrayTexture || F.isData3DTexture;
      if (E.isDepthTexture) {
        const De = v.get(E), ai = v.get(F), we = v.get(De.__renderTarget), oi = v.get(ai.__renderTarget);
        Mt.bindFramebuffer(P.READ_FRAMEBUFFER, we.__webglFramebuffer), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, oi.__webglFramebuffer);
        for (let er = 0; er < vt; er++) tr && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, v.get(E).__webglTexture, V, Bt + er), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, v.get(F).__webglTexture, ct, ge + er)), P.blitFramebuffer(yt, Lt, dt, ht, Et, te, dt, ht, P.DEPTH_BUFFER_BIT, P.NEAREST);
        Mt.bindFramebuffer(P.READ_FRAMEBUFFER, null), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else if (V !== 0 || E.isRenderTargetTexture || v.has(E)) {
        const De = v.get(E), ai = v.get(F);
        Mt.bindFramebuffer(P.READ_FRAMEBUFFER, sf), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, af);
        for (let we = 0; we < vt; we++) tr ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, De.__webglTexture, V, Bt + we) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, De.__webglTexture, V), re ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, ai.__webglTexture, ct, ge + we) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, ai.__webglTexture, ct), V !== 0 ? P.blitFramebuffer(yt, Lt, dt, ht, Et, te, dt, ht, P.COLOR_BUFFER_BIT, P.NEAREST) : re ? P.copyTexSubImage3D(St, ct, Et, te, ge + we, yt, Lt, dt, ht) : P.copyTexSubImage2D(St, ct, Et, te, yt, Lt, dt, ht);
        Mt.bindFramebuffer(P.READ_FRAMEBUFFER, null), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else re ? E.isDataTexture || E.isData3DTexture ? P.texSubImage3D(St, ct, Et, te, ge, dt, ht, vt, ee, Ue, fe.data) : F.isCompressedArrayTexture ? P.compressedTexSubImage3D(St, ct, Et, te, ge, dt, ht, vt, ee, fe.data) : P.texSubImage3D(St, ct, Et, te, ge, dt, ht, vt, ee, Ue, fe) : E.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, ct, Et, te, dt, ht, ee, Ue, fe.data) : E.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, ct, Et, te, fe.width, fe.height, ee, fe.data) : P.texSubImage2D(P.TEXTURE_2D, ct, Et, te, dt, ht, ee, Ue, fe);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, Qe), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, Kt), P.pixelStorei(P.UNPACK_SKIP_PIXELS, vn), P.pixelStorei(P.UNPACK_SKIP_ROWS, bn), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Ci), ct === 0 && F.generateMipmaps && P.generateMipmap(St), Mt.unbindTexture();
    }, this.initRenderTarget = function(E) {
      v.get(E).__webglFramebuffer === void 0 && I.setupRenderTarget(E);
    }, this.initTexture = function(E) {
      E.isCubeTexture ? I.setTextureCube(E, 0) : E.isData3DTexture ? I.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? I.setTexture2DArray(E, 0) : I.setTexture2D(E, 0), Mt.unbindTexture();
    }, this.resetState = function() {
      C = 0, L = 0, U = null, Mt.reset(), et.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return In;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = qt._getDrawingBufferColorSpace(t), e.unpackColorSpace = qt._getUnpackColorSpace();
  }
}
const th = { type: "change" }, Cl = { type: "start" }, Qh = { type: "end" }, zs = new Vh(), eh = new pi(), y0 = Math.cos(70 * Hf.DEG2RAD), Ee = new k(), Ye = 2 * Math.PI, ne = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, $a = 1e-6;
class E0 extends wd {
  constructor(t, e = null) {
    super(t, e), this.state = ne.NONE, this.target = new k(), this.cursor = new k(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Mr.ROTATE, MIDDLE: Mr.DOLLY, RIGHT: Mr.PAN }, this.touches = { ONE: gr.ROTATE, TWO: gr.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new k(), this._lastQuaternion = new Ti(), this._lastTargetPosition = new k(), this._quat = new Ti().setFromUnitVectors(t.up, new k(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Cc(), this._sphericalDelta = new Cc(), this._scale = 1, this._panOffset = new k(), this._rotateStart = new Pt(), this._rotateEnd = new Pt(), this._rotateDelta = new Pt(), this._panStart = new Pt(), this._panEnd = new Pt(), this._panDelta = new Pt(), this._dollyStart = new Pt(), this._dollyEnd = new Pt(), this._dollyDelta = new Pt(), this._dollyDirection = new k(), this._mouse = new Pt(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = b0.bind(this), this._onPointerDown = T0.bind(this), this._onPointerUp = A0.bind(this), this._onContextMenu = I0.bind(this), this._onMouseWheel = C0.bind(this), this._onKeyDown = P0.bind(this), this._onTouchStart = D0.bind(this), this._onTouchMove = L0.bind(this), this._onMouseDown = w0.bind(this), this._onMouseMove = R0.bind(this), this._interceptControlDown = U0.bind(this), this._interceptControlUp = N0.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(th), this.update(), this.state = ne.NONE;
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
    Ee.copy(e).sub(this.target), Ee.applyQuaternion(this._quat), this._spherical.setFromVector3(Ee), this.autoRotate && this.state === ne.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Ye : n > Math.PI && (n -= Ye), i < -Math.PI ? i += Ye : i > Math.PI && (i -= Ye), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let s = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = a != this._spherical.radius;
    }
    if (Ee.setFromSpherical(this._spherical), Ee.applyQuaternion(this._quatInverse), e.copy(this.target).add(Ee), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = Ee.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), s = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new k(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = c !== this.object.zoom;
        const l = new k(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = Ee.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (zs.origin.copy(this.object.position), zs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(zs.direction)) < y0 ? this.object.lookAt(this.target) : (eh.setFromNormalAndCoplanarPoint(this.object.up, this.target), zs.intersectPlane(eh, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), s = true);
    }
    return this._scale = 1, this._performCursorZoom = false, s || this._lastPosition.distanceToSquared(this.object.position) > $a || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > $a || this._lastTargetPosition.distanceToSquared(this.target) > $a ? (this.dispatchEvent(th), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ye / 60 * this.autoRotateSpeed * t : Ye / 60 / 60 * this.autoRotateSpeed;
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
    Ee.setFromMatrixColumn(e, 0), Ee.multiplyScalar(-t), this._panOffset.add(Ee);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? Ee.setFromMatrixColumn(e, 1) : (Ee.setFromMatrixColumn(e, 0), Ee.crossVectors(this.object.up, Ee)), Ee.multiplyScalar(t), this._panOffset.add(Ee);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      Ee.copy(i).sub(this.target);
      let s = Ee.length();
      s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * s / n.clientHeight, this.object.matrix), this._panUp(2 * e * s / n.clientHeight, this.object.matrix);
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
    const n = this.domElement.getBoundingClientRect(), i = t - n.left, s = e - n.top, a = n.width, o = n.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(s / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(Ye * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ye * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
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
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, s = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, s);
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
      const n = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + n.x), s = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(i, s);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ye * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ye * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, s = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
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
    e === void 0 && (e = new Pt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function T0(r16) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(r16.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(r16) && (this._addPointer(r16), r16.pointerType === "touch" ? this._onTouchStart(r16) : this._onMouseDown(r16), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function b0(r16) {
  this.enabled !== false && (r16.pointerType === "touch" ? this._onTouchMove(r16) : this._onMouseMove(r16));
}
function A0(r16) {
  switch (this._removePointer(r16), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(r16.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Qh), this.state = ne.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function w0(r16) {
  let t;
  switch (r16.button) {
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
    case Mr.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(r16), this.state = ne.DOLLY;
      break;
    case Mr.ROTATE:
      if (r16.ctrlKey || r16.metaKey || r16.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(r16), this.state = ne.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(r16), this.state = ne.ROTATE;
      }
      break;
    case Mr.PAN:
      if (r16.ctrlKey || r16.metaKey || r16.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(r16), this.state = ne.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(r16), this.state = ne.PAN;
      }
      break;
    default:
      this.state = ne.NONE;
  }
  this.state !== ne.NONE && this.dispatchEvent(Cl);
}
function R0(r16) {
  switch (this.state) {
    case ne.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(r16);
      break;
    case ne.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(r16);
      break;
    case ne.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(r16);
      break;
  }
}
function C0(r16) {
  this.enabled === false || this.enableZoom === false || this.state !== ne.NONE || (r16.preventDefault(), this.dispatchEvent(Cl), this._handleMouseWheel(this._customWheelEvent(r16)), this.dispatchEvent(Qh));
}
function P0(r16) {
  this.enabled !== false && this._handleKeyDown(r16);
}
function D0(r16) {
  switch (this._trackPointer(r16), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case gr.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(r16), this.state = ne.TOUCH_ROTATE;
          break;
        case gr.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(r16), this.state = ne.TOUCH_PAN;
          break;
        default:
          this.state = ne.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case gr.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(r16), this.state = ne.TOUCH_DOLLY_PAN;
          break;
        case gr.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(r16), this.state = ne.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = ne.NONE;
      }
      break;
    default:
      this.state = ne.NONE;
  }
  this.state !== ne.NONE && this.dispatchEvent(Cl);
}
function L0(r16) {
  switch (this._trackPointer(r16), this.state) {
    case ne.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(r16), this.update();
      break;
    case ne.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(r16), this.update();
      break;
    case ne.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(r16), this.update();
      break;
    case ne.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(r16), this.update();
      break;
    default:
      this.state = ne.NONE;
  }
}
function I0(r16) {
  this.enabled !== false && r16.preventDefault();
}
function U0(r16) {
  r16.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function N0(r16) {
  r16.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function $n(r16) {
  if (r16 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r16;
}
function tu(r16, t) {
  r16.prototype = Object.create(t.prototype), r16.prototype.constructor = r16, r16.__proto__ = t;
}
var ln = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, Lr = { duration: 0.5, overwrite: false, delay: 0 }, Pl, Ve, ce, mn = 1e8, le = 1 / mn, Qo = Math.PI * 2, F0 = Qo / 4, O0 = 0, eu = Math.sqrt, B0 = Math.cos, k0 = Math.sin, Pe = function(t) {
  return typeof t == "string";
}, pe = function(t) {
  return typeof t == "function";
}, ri = function(t) {
  return typeof t == "number";
}, Dl = function(t) {
  return typeof t > "u";
}, Gn = function(t) {
  return typeof t == "object";
}, Ke = function(t) {
  return t !== false;
}, Ll = function() {
  return typeof window < "u";
}, Vs = function(t) {
  return pe(t) || Pe(t);
}, nu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ge = Array.isArray, tl = /(?:-?\.?\d|\.)+/gi, iu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, xr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ja = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ru = /[+-]=-?[.\d]+/, su = /[^,'"\[\]\s]+/gi, z0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, he, Rn, el, Il, cn = {}, na = {}, au, ou = function(t) {
  return (na = Zi(t, cn)) && Je;
}, Ul = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, as = function(t, e) {
  return !e && console.warn(t);
}, lu = function(t, e) {
  return t && (cn[t] = e) && na && (na[t] = e) || cn;
}, os = function() {
  return 0;
}, V0 = { suppressEvents: true, isStart: true, kill: false }, js = { suppressEvents: true, kill: false }, G0 = { suppressEvents: true }, Nl = {}, Mi = [], nl = {}, cu, nn = {}, Qa = {}, nh = 30, Zs = [], Fl = "", Ol = function(t) {
  var e = t[0], n, i;
  if (Gn(e) || pe(e) || (t = [t]), !(n = (e._gsap || {}).harness)) {
    for (i = Zs.length; i-- && !Zs[i].targetTest(e); ) ;
    n = Zs[i];
  }
  for (i = t.length; i--; ) t[i] && (t[i]._gsap || (t[i]._gsap = new Iu(t[i], n))) || t.splice(i, 1);
  return t;
}, Wi = function(t) {
  return t._gsap || Ol(_n(t))[0]._gsap;
}, hu = function(t, e, n) {
  return (n = t[e]) && pe(n) ? t[e]() : Dl(n) && t.getAttribute && t.getAttribute(e) || n;
}, je = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, xe = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Ce = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Tr = function(t, e) {
  var n = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), n === "+" ? t + i : n === "-" ? t - i : n === "*" ? t * i : t / i;
}, H0 = function(t, e) {
  for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; ) ;
  return i < n;
}, ia = function() {
  var t = Mi.length, e = Mi.slice(0), n, i;
  for (nl = {}, Mi.length = 0, n = 0; n < t; n++) i = e[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], true)._lazy = 0);
}, uu = function(t, e, n, i) {
  Mi.length && !Ve && ia(), t.render(e, n, Ve && e < 0 && (t._initted || t._startAt)), Mi.length && !Ve && ia();
}, fu = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(su).length < 2 ? e : Pe(t) ? t.trim() : t;
}, du = function(t) {
  return t;
}, xn = function(t, e) {
  for (var n in e) n in t || (t[n] = e[n]);
  return t;
}, W0 = function(t) {
  return function(e, n) {
    for (var i in n) i in e || i === "duration" && t || i === "ease" || (e[i] = n[i]);
  };
}, Zi = function(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}, ih = function r(t, e) {
  for (var n in e) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = Gn(e[n]) ? r(t[n] || (t[n] = {}), e[n]) : e[n]);
  return t;
}, ra = function(t, e) {
  var n = {}, i;
  for (i in t) i in e || (n[i] = t[i]);
  return n;
}, Jr = function(t) {
  var e = t.parent || he, n = t.keyframes ? W0(Ge(t.keyframes)) : xn;
  if (Ke(t.inherit)) for (; e; ) n(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, X0 = function(t, e) {
  for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; ) ;
  return n < 0;
}, pu = function(t, e, n, i, s) {
  var a = t[i], o;
  if (s) for (o = e[s]; a && a[s] > o; ) a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e;
}, fa = function(t, e, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var s = e._prev, a = e._next;
  s ? s._next = a : t[n] === e && (t[n] = a), a ? a._prev = s : t[i] === e && (t[i] = s), e._next = e._prev = e.parent = null;
}, bi = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Xi = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) n._dirty = 1, n = n.parent;
  return t;
}, Y0 = function(t) {
  for (var e = t.parent; e && e.parent; ) e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, il = function(t, e, n, i) {
  return t._startAt && (Ve ? t._startAt.revert(js) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, true, i));
}, q0 = function r2(t) {
  return !t || t._ts && r2(t.parent);
}, rh = function(t) {
  return t._repeat ? Ir(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ir = function(t, e) {
  var n = Math.floor(t /= e);
  return t && n === t ? n - 1 : n;
}, sa = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, da = function(t) {
  return t._end = Ce(t._start + (t._tDur / Math.abs(t._ts || t._rts || le) || 0));
}, pa = function(t, e) {
  var n = t._dp;
  return n && n.smoothChildTiming && t._ts && (t._start = Ce(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), da(t), n._dirty || Xi(n, t)), t;
}, mu = function(t, e) {
  var n;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = sa(t.rawTime(), e), (!e._dur || ms(0, e.totalDuration(), n) - e._tTime > le) && e.render(n, true)), Xi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    t._zTime = -le;
  }
}, Dn = function(t, e, n, i) {
  return e.parent && bi(e), e._start = Ce((ri(n) ? n : n || t !== he ? un(t, n, e) : t._time) + e._delay), e._end = Ce(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), pu(t, e, "_first", "_last", t._sort ? "_start" : 0), rl(e) || (t._recent = e), i || mu(t, e), t._ts < 0 && pa(t, t._tTime), t;
}, _u = function(t, e) {
  return (cn.ScrollTrigger || Ul("scrollTrigger", e)) && cn.ScrollTrigger.create(e, t);
}, gu = function(t, e, n, i, s) {
  if (kl(t, e, s), !t._initted) return 1;
  if (!n && t._pt && !Ve && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && cu !== an.frame) return Mi.push(t), t._lazy = [s, i], 1;
}, K0 = function r3(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || r3(e));
}, rl = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, j0 = function(t, e, n, i) {
  var s = t.ratio, a = e < 0 || !e && (!t._start && K0(t) && !(!t._initted && rl(t)) || (t._ts < 0 || t._dp._ts < 0) && !rl(t)) ? 0 : 1, o = t._rDelay, c = 0, l, h, f;
  if (o && t._repeat && (c = ms(0, t._tDur, e), h = Ir(c, o), t._yoyo && h & 1 && (a = 1 - a), h !== Ir(t._tTime, o) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== s || Ve || i || t._zTime === le || !e && t._zTime) {
    if (!t._initted && gu(t, e, i, n, c)) return;
    for (f = t._zTime, t._zTime = e || (n ? le : 0), n || (n = e && !f), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = c, l = t._pt; l; ) l.r(a, l.d), l = l._next;
    e < 0 && il(t, e, n, true), t._onUpdate && !n && on(t, "onUpdate"), c && t._repeat && !n && t.parent && on(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && bi(t, 1), !n && !Ve && (on(t, a ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Z0 = function(t, e, n) {
  var i;
  if (n > e) for (i = t._first; i && i._start <= n; ) {
    if (i.data === "isPause" && i._start > e) return i;
    i = i._next;
  }
  else for (i = t._last; i && i._start >= n; ) {
    if (i.data === "isPause" && i._start < e) return i;
    i = i._prev;
  }
}, Ur = function(t, e, n, i) {
  var s = t._repeat, a = Ce(e) || 0, o = t._tTime / t._tDur;
  return o && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : Ce(a * (s + 1) + t._rDelay * s) : a, o > 0 && !i && pa(t, t._tTime = t._tDur * o), t.parent && da(t), n || Xi(t.parent, t), t;
}, sh = function(t) {
  return t instanceof We ? Xi(t) : Ur(t, t._dur);
}, $0 = { _start: 0, endTime: os, totalDuration: os }, un = function r4(t, e, n) {
  var i = t.labels, s = t._recent || $0, a = t.duration() >= mn ? s.endTime(false) : t._dur, o, c, l;
  return Pe(e) && (isNaN(e) || e in i) ? (c = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), c === "<" || c === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (c === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? s : n).totalDuration() / 100 : 1)) : o < 0 ? (e in i || (i[e] = a), i[e]) : (c = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && n && (c = c / 100 * (Ge(n) ? n[0] : n).totalDuration()), o > 1 ? r4(t, e.substr(0, o - 1), n) + c : a + c)) : e == null ? a : +e;
}, Qr = function(t, e, n) {
  var i = ri(e[1]), s = (i ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s], o, c;
  if (i && (a.duration = e[1]), a.parent = n, t) {
    for (o = a, c = n; c && !("immediateRender" in o); ) o = c.vars.defaults || {}, c = Ke(c.vars.inherit) && c.parent;
    a.immediateRender = Ke(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1];
  }
  return new ye(e[0], a, e[s + 1]);
}, wi = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, ms = function(t, e, n) {
  return n < t ? t : n > e ? e : n;
}, Oe = function(t, e) {
  return !Pe(t) || !(e = z0.exec(t)) ? "" : e[1];
}, J0 = function(t, e, n) {
  return wi(n, function(i) {
    return ms(t, e, i);
  });
}, sl = [].slice, xu = function(t, e) {
  return t && Gn(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Gn(t[0])) && !t.nodeType && t !== Rn;
}, Q0 = function(t, e, n) {
  return n === void 0 && (n = []), t.forEach(function(i) {
    var s;
    return Pe(i) && !e || xu(i, 1) ? (s = n).push.apply(s, _n(i)) : n.push(i);
  }) || n;
}, _n = function(t, e, n) {
  return ce && !e && ce.selector ? ce.selector(t) : Pe(t) && !n && (el || !Nr()) ? sl.call((e || Il).querySelectorAll(t), 0) : Ge(t) ? Q0(t, n) : xu(t) ? sl.call(t, 0) : t ? [t] : [];
}, al = function(t) {
  return t = _n(t)[0] || as("Invalid scope") || {}, function(e) {
    var n = t.current || t.nativeElement || t;
    return _n(e, n.querySelectorAll ? n : n === t ? as("Invalid scope") || Il.createElement("div") : t);
  };
}, vu = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Mu = function(t) {
  if (pe(t)) return t;
  var e = Gn(t) ? t : { each: t }, n = Yi(e.ease), i = e.from || 0, s = parseFloat(e.base) || 0, a = {}, o = i > 0 && i < 1, c = isNaN(i) || o, l = e.axis, h = i, f = i;
  return Pe(i) ? h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0 : !o && c && (h = i[0], f = i[1]), function(u, p, _) {
    var g = (_ || e).length, d = a[g], m, M, T, y, b, A, w, x, S;
    if (!d) {
      if (S = e.grid === "auto" ? 0 : (e.grid || [1, mn])[1], !S) {
        for (w = -mn; w < (w = _[S++].getBoundingClientRect().left) && S < g; ) ;
        S < g && S--;
      }
      for (d = a[g] = [], m = c ? Math.min(S, g) * h - 0.5 : i % S, M = S === mn ? 0 : c ? g * f / S - 0.5 : i / S | 0, w = 0, x = mn, A = 0; A < g; A++) T = A % S - m, y = M - (A / S | 0), d[A] = b = l ? Math.abs(l === "y" ? y : T) : eu(T * T + y * y), b > w && (w = b), b < x && (x = b);
      i === "random" && vu(d), d.max = w - x, d.min = x, d.v = g = (parseFloat(e.amount) || parseFloat(e.each) * (S > g ? g - 1 : l ? l === "y" ? g / S : S : Math.max(S, g / S)) || 0) * (i === "edges" ? -1 : 1), d.b = g < 0 ? s - g : s, d.u = Oe(e.amount || e.each) || 0, n = n && g < 0 ? Pu(n) : n;
    }
    return g = (d[u] - d.min) / d.max || 0, Ce(d.b + (n ? n(g) : g) * d.v) + d.u;
  };
}, ol = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(n) {
    var i = Ce(Math.round(parseFloat(n) / t) * t * e);
    return (i - i % 1) / e + (ri(n) ? 0 : Oe(n));
  };
}, Su = function(t, e) {
  var n = Ge(t), i, s;
  return !n && Gn(t) && (i = n = t.radius || mn, t.values ? (t = _n(t.values), (s = !ri(t[0])) && (i *= i)) : t = ol(t.increment)), wi(e, n ? pe(t) ? function(a) {
    return s = t(a), Math.abs(s - a) <= i ? s : a;
  } : function(a) {
    for (var o = parseFloat(s ? a.x : a), c = parseFloat(s ? a.y : 0), l = mn, h = 0, f = t.length, u, p; f--; ) s ? (u = t[f].x - o, p = t[f].y - c, u = u * u + p * p) : u = Math.abs(t[f] - o), u < l && (l = u, h = f);
    return h = !i || l <= i ? t[h] : a, s || h === a || ri(a) ? h : h + Oe(a);
  } : ol(t));
}, yu = function(t, e, n, i) {
  return wi(Ge(t) ? !e : n === true ? !!(n = 0) : !i, function() {
    return Ge(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) * n * i) / i;
  });
}, tx = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return function(i) {
    return e.reduce(function(s, a) {
      return a(s);
    }, i);
  };
}, ex = function(t, e) {
  return function(n) {
    return t(parseFloat(n)) + (e || Oe(n));
  };
}, nx = function(t, e, n) {
  return Tu(t, e, 0, 1, n);
}, Eu = function(t, e, n) {
  return wi(n, function(i) {
    return t[~~e(i)];
  });
}, ix = function r5(t, e, n) {
  var i = e - t;
  return Ge(t) ? Eu(t, r5(0, t.length), e) : wi(n, function(s) {
    return (i + (s - t) % i) % i + t;
  });
}, rx = function r6(t, e, n) {
  var i = e - t, s = i * 2;
  return Ge(t) ? Eu(t, r6(0, t.length - 1), e) : wi(n, function(a) {
    return a = (s + (a - t) % s) % s || 0, t + (a > i ? s - a : a);
  });
}, ls = function(t) {
  for (var e = 0, n = "", i, s, a, o; ~(i = t.indexOf("random(", e)); ) a = t.indexOf(")", i), o = t.charAt(i + 7) === "[", s = t.substr(i + 7, a - i - 7).match(o ? su : tl), n += t.substr(e, i - e) + yu(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5), e = a + 1;
  return n + t.substr(e, t.length - e);
}, Tu = function(t, e, n, i, s) {
  var a = e - t, o = i - n;
  return wi(s, function(c) {
    return n + ((c - t) / a * o || 0);
  });
}, sx = function r7(t, e, n, i) {
  var s = isNaN(t + e) ? 0 : function(p) {
    return (1 - p) * t + p * e;
  };
  if (!s) {
    var a = Pe(t), o = {}, c, l, h, f, u;
    if (n === true && (i = 1) && (n = null), a) t = { p: t }, e = { p: e };
    else if (Ge(t) && !Ge(e)) {
      for (h = [], f = t.length, u = f - 2, l = 1; l < f; l++) h.push(r7(t[l - 1], t[l]));
      f--, s = function(_) {
        _ *= f;
        var g = Math.min(u, ~~_);
        return h[g](_ - g);
      }, n = e;
    } else i || (t = Zi(Ge(t) ? [] : {}, t));
    if (!h) {
      for (c in e) Bl.call(o, t, c, "get", e[c]);
      s = function(_) {
        return Gl(_, o) || (a ? t.p : t);
      };
    }
  }
  return wi(n, s);
}, ah = function(t, e, n) {
  var i = t.labels, s = mn, a, o, c;
  for (a in i) o = i[a] - e, o < 0 == !!n && o && s > (o = Math.abs(o)) && (c = a, s = o);
  return c;
}, on = function(t, e, n) {
  var i = t.vars, s = i[e], a = ce, o = t._ctx, c, l, h;
  if (s) return c = i[e + "Params"], l = i.callbackScope || t, n && Mi.length && ia(), o && (ce = o), h = c ? s.apply(l, c) : s.call(l), ce = a, h;
}, Zr = function(t) {
  return bi(t), t.scrollTrigger && t.scrollTrigger.kill(!!Ve), t.progress() < 1 && on(t, "onInterrupt"), t;
}, vr, bu = [], Au = function(t) {
  if (t) if (t = !t.name && t.default || t, Ll() || t.headless) {
    var e = t.name, n = pe(t), i = e && !n && t.init ? function() {
      this._props = [];
    } : t, s = { init: os, render: Gl, add: Bl, kill: Sx, modifier: Mx, rawVars: 0 }, a = { targetTest: 0, get: 0, getSetter: Vl, aliases: {}, register: 0 };
    if (Nr(), t !== i) {
      if (nn[e]) return;
      xn(i, xn(ra(t, s), a)), Zi(i.prototype, Zi(s, ra(t, a))), nn[i.prop = e] = i, t.targetTest && (Zs.push(i), Nl[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
    }
    lu(e, i), t.register && t.register(Je, i, Ze);
  } else bu.push(t);
}, se = 255, $r = { aqua: [0, se, se], lime: [0, se, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, se], navy: [0, 0, 128], white: [se, se, se], olive: [128, 128, 0], yellow: [se, se, 0], orange: [se, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [se, 0, 0], pink: [se, 192, 203], cyan: [0, se, se], transparent: [se, se, se, 0] }, to = function(t, e, n) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : t * 3 < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * se + 0.5 | 0;
}, wu = function(t, e, n) {
  var i = t ? ri(t) ? [t >> 16, t >> 8 & se, t & se] : 0 : $r.black, s, a, o, c, l, h, f, u, p, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), $r[t]) i = $r[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + s + s + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & se, i & se, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & se, t & se];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(tl), !e) c = +i[0] % 360 / 360, l = +i[1] / 100, h = +i[2] / 100, a = h <= 0.5 ? h * (l + 1) : h + l - h * l, s = h * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = to(c + 1 / 3, s, a), i[1] = to(c, s, a), i[2] = to(c - 1 / 3, s, a);
      else if (~t.indexOf("=")) return i = t.match(iu), n && i.length < 4 && (i[3] = 1), i;
    } else i = t.match(tl) || $r.transparent;
    i = i.map(Number);
  }
  return e && !_ && (s = i[0] / se, a = i[1] / se, o = i[2] / se, f = Math.max(s, a, o), u = Math.min(s, a, o), h = (f + u) / 2, f === u ? c = l = 0 : (p = f - u, l = h > 0.5 ? p / (2 - f - u) : p / (f + u), c = f === s ? (a - o) / p + (a < o ? 6 : 0) : f === a ? (o - s) / p + 2 : (s - a) / p + 4, c *= 60), i[0] = ~~(c + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, Ru = function(t) {
  var e = [], n = [], i = -1;
  return t.split(Si).forEach(function(s) {
    var a = s.match(xr) || [];
    e.push.apply(e, a), n.push(i += a.length + 1);
  }), e.c = n, e;
}, oh = function(t, e, n) {
  var i = "", s = (t + i).match(Si), a = e ? "hsla(" : "rgba(", o = 0, c, l, h, f;
  if (!s) return t;
  if (s = s.map(function(u) {
    return (u = wu(u, e, 1)) && a + (e ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) + ")";
  }), n && (h = Ru(t), c = n.c, c.join(i) !== h.c.join(i))) for (l = t.replace(Si, "1").split(xr), f = l.length - 1; o < f; o++) i += l[o] + (~c.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (h.length ? h : s.length ? s : n).shift());
  if (!l) for (l = t.split(Si), f = l.length - 1; o < f; o++) i += l[o] + s[o];
  return i + l[f];
}, Si = (function() {
  var r16 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in $r) r16 += "|" + t + "\\b";
  return new RegExp(r16 + ")", "gi");
})(), ax = /hsl[a]?\(/, Cu = function(t) {
  var e = t.join(" "), n;
  if (Si.lastIndex = 0, Si.test(e)) return n = ax.test(e), t[1] = oh(t[1], n), t[0] = oh(t[0], n, Ru(t[1])), true;
}, cs, an = (function() {
  var r16 = Date.now, t = 500, e = 33, n = r16(), i = n, s = 1e3 / 240, a = s, o = [], c, l, h, f, u, p, _ = function g(d) {
    var m = r16() - i, M = d === true, T, y, b, A;
    if ((m > t || m < 0) && (n += m - e), i += m, b = i - n, T = b - a, (T > 0 || M) && (A = ++f.frame, u = b - f.time * 1e3, f.time = b = b / 1e3, a += T + (T >= s ? 4 : s - T), y = 1), M || (c = l(g)), y) for (p = 0; p < o.length; p++) o[p](b, u, A, d);
  };
  return f = { time: 0, frame: 0, tick: function() {
    _(true);
  }, deltaRatio: function(d) {
    return u / (1e3 / (d || 60));
  }, wake: function() {
    au && (!el && Ll() && (Rn = el = window, Il = Rn.document || {}, cn.gsap = Je, (Rn.gsapVersions || (Rn.gsapVersions = [])).push(Je.version), ou(na || Rn.GreenSockGlobals || !Rn.gsap && Rn || {}), bu.forEach(Au)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && f.sleep(), l = h || function(d) {
      return setTimeout(d, a - f.time * 1e3 + 1 | 0);
    }, cs = 1, _(2));
  }, sleep: function() {
    (h ? cancelAnimationFrame : clearTimeout)(c), cs = 0, l = os;
  }, lagSmoothing: function(d, m) {
    t = d || 1 / 0, e = Math.min(m || 33, t);
  }, fps: function(d) {
    s = 1e3 / (d || 240), a = f.time * 1e3 + s;
  }, add: function(d, m, M) {
    var T = m ? function(y, b, A, w) {
      d(y, b, A, w), f.remove(T);
    } : d;
    return f.remove(d), o[M ? "unshift" : "push"](T), Nr(), T;
  }, remove: function(d, m) {
    ~(m = o.indexOf(d)) && o.splice(m, 1) && p >= m && p--;
  }, _listeners: o }, f;
})(), Nr = function() {
  return !cs && an.wake();
}, Ht = {}, ox = /^[\d.\-M][\d.\-,\s]/, lx = /["']/g, cx = function(t) {
  for (var e = {}, n = t.substr(1, t.length - 3).split(":"), i = n[0], s = 1, a = n.length, o, c, l; s < a; s++) c = n[s], o = s !== a - 1 ? c.lastIndexOf(",") : c.length, l = c.substr(0, o), e[i] = isNaN(l) ? l.replace(lx, "").trim() : +l, i = c.substr(o + 1).trim();
  return e;
}, hx = function(t) {
  var e = t.indexOf("(") + 1, n = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
}, ux = function(t) {
  var e = (t + "").split("("), n = Ht[e[0]];
  return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [cx(e[1])] : hx(t).split(",").map(fu)) : Ht._CE && ox.test(t) ? Ht._CE("", t) : n;
}, Pu = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Du = function r8(t, e) {
  for (var n = t._first, i; n; ) n instanceof We ? r8(n, e) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== e && (n.timeline ? r8(n.timeline, e) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = e)), n = n._next;
}, Yi = function(t, e) {
  return t && (pe(t) ? t : Ht[t] || ux(t)) || e;
}, Qi = function(t, e, n, i) {
  n === void 0 && (n = function(c) {
    return 1 - e(1 - c);
  }), i === void 0 && (i = function(c) {
    return c < 0.5 ? e(c * 2) / 2 : 1 - e((1 - c) * 2) / 2;
  });
  var s = { easeIn: e, easeOut: n, easeInOut: i }, a;
  return je(t, function(o) {
    Ht[o] = cn[o] = s, Ht[a = o.toLowerCase()] = n;
    for (var c in s) Ht[a + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = Ht[o + "." + c] = s[c];
  }), s;
}, Lu = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, eo = function r9(t, e, n) {
  var i = e >= 1 ? e : 1, s = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = s / Qo * (Math.asin(1 / i) || 0), o = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * k0((h - a) * s) + 1;
  }, c = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : Lu(o);
  return s = Qo / s, c.config = function(l, h) {
    return r9(t, l, h);
  }, c;
}, no = function r10(t, e) {
  e === void 0 && (e = 1.70158);
  var n = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, i = t === "out" ? n : t === "in" ? function(s) {
    return 1 - n(1 - s);
  } : Lu(n);
  return i.config = function(s) {
    return r10(t, s);
  }, i;
};
je("Linear,Quad,Cubic,Quart,Quint,Strong", function(r16, t) {
  var e = t < 5 ? t + 1 : t;
  Qi(r16 + ",Power" + (e - 1), t ? function(n) {
    return Math.pow(n, e);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, e);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, e) / 2 : 1 - Math.pow((1 - n) * 2, e) / 2;
  });
});
Ht.Linear.easeNone = Ht.none = Ht.Linear.easeIn;
Qi("Elastic", eo("in"), eo("out"), eo());
(function(r16, t) {
  var e = 1 / t, n = 2 * e, i = 2.5 * e, s = function(o) {
    return o < e ? r16 * o * o : o < n ? r16 * Math.pow(o - 1.5 / t, 2) + 0.75 : o < i ? r16 * (o -= 2.25 / t) * o + 0.9375 : r16 * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Qi("Bounce", function(a) {
    return 1 - s(1 - a);
  }, s);
})(7.5625, 2.75);
Qi("Expo", function(r16) {
  return r16 ? Math.pow(2, 10 * (r16 - 1)) : 0;
});
Qi("Circ", function(r16) {
  return -(eu(1 - r16 * r16) - 1);
});
Qi("Sine", function(r16) {
  return r16 === 1 ? 1 : -B0(r16 * F0) + 1;
});
Qi("Back", no("in"), no("out"), no());
Ht.SteppedEase = Ht.steps = cn.SteppedEase = { config: function(t, e) {
  t === void 0 && (t = 1);
  var n = 1 / t, i = t + (e ? 0 : 1), s = e ? 1 : 0, a = 1 - le;
  return function(o) {
    return ((i * ms(0, a, o) | 0) + s) * n;
  };
} };
Lr.ease = Ht["quad.out"];
je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r16) {
  return Fl += r16 + "," + r16 + "Params,";
});
var Iu = function(t, e) {
  this.id = O0++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : hu, this.set = e ? e.getSetter : Vl;
}, hs = (function() {
  function r16(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ur(this, +e.duration, 1, 1), this.data = e.data, ce && (this._ctx = ce, ce.data.push(this)), cs || an.wake();
  }
  var t = r16.prototype;
  return t.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, t.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Ur(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(n, i) {
    if (Nr(), !arguments.length) return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (pa(this, n), !s._dp || s.parent || mu(s, this); s && s.parent; ) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, true), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Dn(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === le || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), uu(this, n, i)), this;
  }, t.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + rh(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + rh(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(n, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? Ir(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(n, i) {
    if (!arguments.length) return this._rts === -le ? 0 : this._rts;
    if (this._rts === n) return this;
    var s = this.parent && this._ts ? sa(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -le ? 0 : this._rts, this.totalTime(ms(-Math.abs(this._delay), this._tDur, s), i !== false), da(this), Y0(this);
  }, t.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Nr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== le && (this._tTime -= le)))), this) : this._ps;
  }, t.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Dn(i, this, n - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(n) {
    return this._start + (Ke(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? sa(i.rawTime(n), this) : this._tTime : this._tTime;
  }, t.revert = function(n) {
    n === void 0 && (n = G0);
    var i = Ve;
    return Ve = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), Ve = i, this;
  }, t.globalTime = function(n) {
    for (var i = this, s = arguments.length ? n : i.rawTime(); i; ) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : s;
  }, t.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, sh(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, sh(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, t.seek = function(n, i) {
    return this.totalTime(un(this, n), Ke(i));
  }, t.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, Ke(i));
  }, t.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(false).paused(false);
  }, t.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(true).paused(false);
  }, t.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(true);
  }, t.resume = function() {
    return this.paused(false);
  }, t.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -le : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -le, this;
  }, t.isActive = function() {
    var n = this.parent || this._dp, i = this._start, s;
    return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(true)) >= i && s < this.endTime(true) - le);
  }, t.eventCallback = function(n, i, s) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[n] = i, s && (a[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete a[n], this) : a[n];
  }, t.then = function(n) {
    var i = this;
    return new Promise(function(s) {
      var a = pe(n) ? n : du, o = function() {
        var l = i.then;
        i.then = null, pe(a) && (a = a(i)) && (a.then || a === i) && (i.then = l), s(a), i.then = l;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, t.kill = function() {
    Zr(this);
  }, r16;
})();
xn(hs.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -le, _prom: 0, _ps: false, _rts: 1 });
var We = (function(r16) {
  tu(t, r16);
  function t(n, i) {
    var s;
    return n === void 0 && (n = {}), s = r16.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = Ke(n.sortChildren), he && Dn(n.parent || he, $n(s), i), n.reversed && s.reverse(), n.paused && s.paused(true), n.scrollTrigger && _u($n(s), n.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(i, s, a) {
    return Qr(0, arguments, this), this;
  }, e.from = function(i, s, a) {
    return Qr(1, arguments, this), this;
  }, e.fromTo = function(i, s, a, o) {
    return Qr(2, arguments, this), this;
  }, e.set = function(i, s, a) {
    return s.duration = 0, s.parent = this, Jr(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new ye(i, s, un(this, a), 1), this;
  }, e.call = function(i, s, a) {
    return Dn(this, ye.delayedCall(0, i, s), a);
  }, e.staggerTo = function(i, s, a, o, c, l, h) {
    return a.duration = s, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = h, a.parent = this, new ye(i, a, un(this, c)), this;
  }, e.staggerFrom = function(i, s, a, o, c, l, h) {
    return a.runBackwards = 1, Jr(a).immediateRender = Ke(a.immediateRender), this.staggerTo(i, s, a, o, c, l, h);
  }, e.staggerFromTo = function(i, s, a, o, c, l, h, f) {
    return o.startAt = a, Jr(o).immediateRender = Ke(o.immediateRender), this.staggerTo(i, s, o, c, l, h, f);
  }, e.render = function(i, s, a) {
    var o = this._time, c = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, h = i <= 0 ? 0 : Ce(i), f = this._zTime < 0 != i < 0 && (this._initted || !l), u, p, _, g, d, m, M, T, y, b, A, w;
    if (this !== he && h > c && i >= 0 && (h = c), h !== this._tTime || a || f) {
      if (o !== this._time && l && (h += this._time - o, i += this._time - o), u = h, y = this._start, T = this._ts, m = !T, f && (l || (o = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (A = this._yoyo, d = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(d * 100 + i, s, a);
        if (u = Ce(h % d), h === c ? (g = this._repeat, u = l) : (g = ~~(h / d), g && g === h / d && (u = l, g--), u > l && (u = l)), b = Ir(this._tTime, d), !o && this._tTime && b !== g && this._tTime - b * d - this._dur <= 0 && (b = g), A && g & 1 && (u = l - u, w = 1), g !== b && !this._lock) {
          var x = A && b & 1, S = x === (A && g & 1);
          if (g < b && (x = !x), o = x ? 0 : h % l ? l : h, this._lock = 1, this.render(o || (w ? 0 : Ce(g * d)), s, !l)._lock = 0, this._tTime = h, !s && this.parent && on(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (l = this._dur, c = this._tDur, S && (this._lock = 2, o = x ? l : -1e-4, this.render(o, true), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !m) return this;
          Du(this, w);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (M = Z0(this, Ce(o), Ce(u)), M && (h -= u - (u = M._start))), this._tTime = h, this._time = u, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && u && !s && !g && (on(this, "onStart"), this._tTime !== h)) return this;
      if (u >= o && i >= 0) for (p = this._first; p; ) {
        if (_ = p._next, (p._act || u >= p._start) && p._ts && M !== p) {
          if (p.parent !== this) return this.render(i, s, a);
          if (p.render(p._ts > 0 ? (u - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (u - p._start) * p._ts, s, a), u !== this._time || !this._ts && !m) {
            M = 0, _ && (h += this._zTime = -le);
            break;
          }
        }
        p = _;
      }
      else {
        p = this._last;
        for (var z = i < 0 ? i : u; p; ) {
          if (_ = p._prev, (p._act || z <= p._end) && p._ts && M !== p) {
            if (p.parent !== this) return this.render(i, s, a);
            if (p.render(p._ts > 0 ? (z - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (z - p._start) * p._ts, s, a || Ve && (p._initted || p._startAt)), u !== this._time || !this._ts && !m) {
              M = 0, _ && (h += this._zTime = z ? -le : le);
              break;
            }
          }
          p = _;
        }
      }
      if (M && !s && (this.pause(), M.render(u >= o ? 0 : -le)._zTime = u >= o ? 1 : -1, this._ts)) return this._start = y, da(this), this.render(i, s, a);
      this._onUpdate && !s && on(this, "onUpdate", true), (h === c && this._tTime >= this.totalDuration() || !h && o) && (y === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (h === c && this._ts > 0 || !h && this._ts < 0) && bi(this, 1), !s && !(i < 0 && !o) && (h || o || !c) && (on(this, h === c && i >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(h < c && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, s) {
    var a = this;
    if (ri(s) || (s = un(this, s, i)), !(i instanceof hs)) {
      if (Ge(i)) return i.forEach(function(o) {
        return a.add(o, s);
      }), this;
      if (Pe(i)) return this.addLabel(i, s);
      if (pe(i)) i = ye.delayedCall(0, i);
      else return this;
    }
    return this !== i ? Dn(this, i, s) : this;
  }, e.getChildren = function(i, s, a, o) {
    i === void 0 && (i = true), s === void 0 && (s = true), a === void 0 && (a = true), o === void 0 && (o = -mn);
    for (var c = [], l = this._first; l; ) l._start >= o && (l instanceof ye ? s && c.push(l) : (a && c.push(l), i && c.push.apply(c, l.getChildren(true, s, a)))), l = l._next;
    return c;
  }, e.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), a = s.length; a--; ) if (s[a].vars.id === i) return s[a];
  }, e.remove = function(i) {
    return Pe(i) ? this.removeLabel(i) : pe(i) ? this.killTweensOf(i) : (fa(this, i), i === this._recent && (this._recent = this._last), Xi(this));
  }, e.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ce(an.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r16.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, s) {
    return this.labels[i] = un(this, s), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, s, a) {
    var o = ye.delayedCall(0, s || os, a);
    return o.data = "isPause", this._hasPause = 1, Dn(this, o, un(this, i));
  }, e.removePause = function(i) {
    var s = this._first;
    for (i = un(this, i); s; ) s._start === i && s.data === "isPause" && bi(s), s = s._next;
  }, e.killTweensOf = function(i, s, a) {
    for (var o = this.getTweensOf(i, a), c = o.length; c--; ) gi !== o[c] && o[c].kill(i, s);
    return this;
  }, e.getTweensOf = function(i, s) {
    for (var a = [], o = _n(i), c = this._first, l = ri(s), h; c; ) c instanceof ye ? H0(c._targets, o) && (l ? (!gi || c._initted && c._ts) && c.globalTime(0) <= s && c.globalTime(c.totalDuration()) > s : !s || c.isActive()) && a.push(c) : (h = c.getTweensOf(o, s)).length && a.push.apply(a, h), c = c._next;
    return a;
  }, e.tweenTo = function(i, s) {
    s = s || {};
    var a = this, o = un(a, i), c = s, l = c.startAt, h = c.onStart, f = c.onStartParams, u = c.immediateRender, p, _ = ye.to(a, xn({ ease: s.ease || "none", lazy: false, immediateRender: false, time: o, overwrite: "auto", duration: s.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || le, onStart: function() {
      if (a.pause(), !p) {
        var d = s.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
        _._dur !== d && Ur(_, d, 0, 1).render(_._time, true, true), p = 1;
      }
      h && h.apply(_, f || []);
    } }, s));
    return u ? _.render(0) : _;
  }, e.tweenFromTo = function(i, s, a) {
    return this.tweenTo(s, xn({ startAt: { time: un(this, i) } }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), ah(this, un(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), ah(this, un(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, true) : this.previousLabel(this._time + le);
  }, e.shiftChildren = function(i, s, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, c = this.labels, l; o; ) o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (s) for (l in c) c[l] >= a && (c[l] += i);
    return Xi(this);
  }, e.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; ) s.invalidate(i), s = s._next;
    return r16.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = true);
    for (var s = this._first, a; s; ) a = s._next, this.remove(s), s = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Xi(this);
  }, e.totalDuration = function(i) {
    var s = 0, a = this, o = a._last, c = mn, l, h, f;
    if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (f = a.parent; o; ) l = o._prev, o._dirty && o.totalDuration(), h = o._start, h > c && a._sort && o._ts && !a._lock ? (a._lock = 1, Dn(a, o, h - o._delay, 1)._lock = 0) : c = h, h < 0 && o._ts && (s -= h, (!f && !a._dp || f && f.smoothChildTiming) && (a._start += h / a._ts, a._time -= h, a._tTime -= h), a.shiftChildren(-h, false, -1 / 0), c = 0), o._end > s && o._ts && (s = o._end), o = l;
      Ur(a, a === he && a._time > s ? a._time : s, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(i) {
    if (he._ts && (uu(he, sa(i, he)), cu = an.frame), an.frame >= nh) {
      nh += ln.autoSleep || 120;
      var s = he._first;
      if ((!s || !s._ts) && ln.autoSleep && an._listeners.length < 2) {
        for (; s && !s._ts; ) s = s._next;
        s || an.sleep();
      }
    }
  }, t;
})(hs);
xn(We.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var fx = function(t, e, n, i, s, a, o) {
  var c = new Ze(this._pt, t, e, 0, 1, ku, null, s), l = 0, h = 0, f, u, p, _, g, d, m, M;
  for (c.b = n, c.e = i, n += "", i += "", (m = ~i.indexOf("random(")) && (i = ls(i)), a && (M = [n, i], a(M, t, e), n = M[0], i = M[1]), u = n.match(Ja) || []; f = Ja.exec(i); ) _ = f[0], g = i.substring(l, f.index), p ? p = (p + 1) % 5 : g.substr(-5) === "rgba(" && (p = 1), _ !== u[h++] && (d = parseFloat(u[h - 1]) || 0, c._pt = { _next: c._pt, p: g || h === 1 ? g : ",", s: d, c: _.charAt(1) === "=" ? Tr(d, _) - d : parseFloat(_) - d, m: p && p < 4 ? Math.round : 0 }, l = Ja.lastIndex);
  return c.c = l < i.length ? i.substring(l, i.length) : "", c.fp = o, (ru.test(i) || m) && (c.e = 0), this._pt = c, c;
}, Bl = function(t, e, n, i, s, a, o, c, l, h) {
  pe(i) && (i = i(s || 0, t, a));
  var f = t[e], u = n !== "get" ? n : pe(f) ? l ? t[e.indexOf("set") || !pe(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : f, p = pe(f) ? l ? gx : Ou : zl, _;
  if (Pe(i) && (~i.indexOf("random(") && (i = ls(i)), i.charAt(1) === "=" && (_ = Tr(u, i) + (Oe(u) || 0), (_ || _ === 0) && (i = _))), !h || u !== i || ll) return !isNaN(u * i) && i !== "" ? (_ = new Ze(this._pt, t, e, +u || 0, i - (u || 0), typeof f == "boolean" ? vx : Bu, 0, p), l && (_.fp = l), o && _.modifier(o, this, t), this._pt = _) : (!f && !(e in t) && Ul(e, i), fx.call(this, t, e, u, i, p, c || ln.stringFilter, l));
}, dx = function(t, e, n, i, s) {
  if (pe(t) && (t = ts(t, s, e, n, i)), !Gn(t) || t.style && t.nodeType || Ge(t) || nu(t)) return Pe(t) ? ts(t, s, e, n, i) : t;
  var a = {}, o;
  for (o in t) a[o] = ts(t[o], s, e, n, i);
  return a;
}, Uu = function(t, e, n, i, s, a) {
  var o, c, l, h;
  if (nn[t] && (o = new nn[t]()).init(s, o.rawVars ? e[t] : dx(e[t], i, s, a, n), n, i, a) !== false && (n._pt = c = new Ze(n._pt, s, t, 0, 1, o.render, o, 0, o.priority), n !== vr)) for (l = n._ptLookup[n._targets.indexOf(s)], h = o._props.length; h--; ) l[o._props[h]] = c;
  return o;
}, gi, ll, kl = function r11(t, e, n) {
  var i = t.vars, s = i.ease, a = i.startAt, o = i.immediateRender, c = i.lazy, l = i.onUpdate, h = i.runBackwards, f = i.yoyoEase, u = i.keyframes, p = i.autoRevert, _ = t._dur, g = t._startAt, d = t._targets, m = t.parent, M = m && m.data === "nested" ? m.vars.targets : d, T = t._overwrite === "auto" && !Pl, y = t.timeline, b, A, w, x, S, z, C, L, U, G, O, B, N;
  if (y && (!u || !s) && (s = "none"), t._ease = Yi(s, Lr.ease), t._yEase = f ? Pu(Yi(f === true ? s : f, Lr.ease)) : 0, f && t._yoyo && !t._repeat && (f = t._yEase, t._yEase = t._ease, t._ease = f), t._from = !y && !!i.runBackwards, !y || u && !i.stagger) {
    if (L = d[0] ? Wi(d[0]).harness : 0, B = L && i[L.prop], b = ra(i, Nl), g && (g._zTime < 0 && g.progress(1), e < 0 && h && o && !p ? g.render(-1, true) : g.revert(h && _ ? js : V0), g._lazy = 0), a) {
      if (bi(t._startAt = ye.set(d, xn({ data: "isStart", overwrite: false, parent: m, immediateRender: true, lazy: !g && Ke(c), startAt: null, delay: 0, onUpdate: l && function() {
        return on(t, "onUpdate");
      }, stagger: 0 }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Ve || !o && !p) && t._startAt.revert(js), o && _ && e <= 0 && n <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (h && _ && !g) {
      if (e && (o = false), w = xn({ overwrite: false, data: "isFromStart", lazy: o && !g && Ke(c), immediateRender: o, stagger: 0, parent: m }, b), B && (w[L.prop] = B), bi(t._startAt = ye.set(d, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Ve ? t._startAt.revert(js) : t._startAt.render(-1, true)), t._zTime = e, !o) r11(t._startAt, le, le);
      else if (!e) return;
    }
    for (t._pt = t._ptCache = 0, c = _ && Ke(c) || c && !_, A = 0; A < d.length; A++) {
      if (S = d[A], C = S._gsap || Ol(d)[A]._gsap, t._ptLookup[A] = G = {}, nl[C.id] && Mi.length && ia(), O = M === d ? A : M.indexOf(S), L && (U = new L()).init(S, B || b, t, O, M) !== false && (t._pt = x = new Ze(t._pt, S, U.name, 0, 1, U.render, U, 0, U.priority), U._props.forEach(function(Z) {
        G[Z] = x;
      }), U.priority && (z = 1)), !L || B) for (w in b) nn[w] && (U = Uu(w, b, t, O, S, M)) ? U.priority && (z = 1) : G[w] = x = Bl.call(t, S, w, "get", b[w], O, M, 0, i.stringFilter);
      t._op && t._op[A] && t.kill(S, t._op[A]), T && t._pt && (gi = t, he.killTweensOf(S, G, t.globalTime(e)), N = !t.parent, gi = 0), t._pt && c && (nl[C.id] = 1);
    }
    z && zu(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !N, u && e <= 0 && y.render(mn, true, true);
}, px = function(t, e, n, i, s, a, o, c) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, f, u, p;
  if (!l) for (l = t._ptCache[e] = [], u = t._ptLookup, p = t._targets.length; p--; ) {
    if (h = u[p][e], h && h.d && h.d._pt) for (h = h.d._pt; h && h.p !== e && h.fp !== e; ) h = h._next;
    if (!h) return ll = 1, t.vars[e] = "+=0", kl(t, o), ll = 0, c ? as(e + " not eligible for reset") : 1;
    l.push(h);
  }
  for (p = l.length; p--; ) f = l[p], h = f._pt || f, h.s = (i || i === 0) && !s ? i : h.s + (i || 0) + a * h.c, h.c = n - h.s, f.e && (f.e = xe(n) + Oe(f.e)), f.b && (f.b = h.s + Oe(f.b));
}, mx = function(t, e) {
  var n = t[0] ? Wi(t[0]).harness : 0, i = n && n.aliases, s, a, o, c;
  if (!i) return e;
  s = Zi({}, e);
  for (a in i) if (a in s) for (c = i[a].split(","), o = c.length; o--; ) s[c[o]] = s[a];
  return s;
}, _x = function(t, e, n, i) {
  var s = e.ease || i || "power1.inOut", a, o;
  if (Ge(e)) o = n[t] || (n[t] = []), e.forEach(function(c, l) {
    return o.push({ t: l / (e.length - 1) * 100, v: c, e: s });
  });
  else for (a in e) o = n[a] || (n[a] = []), a === "ease" || o.push({ t: parseFloat(t), v: e[a], e: s });
}, ts = function(t, e, n, i, s) {
  return pe(t) ? t.call(e, n, i, s) : Pe(t) && ~t.indexOf("random(") ? ls(t) : t;
}, Nu = Fl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Fu = {};
je(Nu + ",id,stagger,delay,duration,paused,scrollTrigger", function(r16) {
  return Fu[r16] = 1;
});
var ye = (function(r16) {
  tu(t, r16);
  function t(n, i, s, a) {
    var o;
    typeof i == "number" && (s.duration = i, i = s, s = null), o = r16.call(this, a ? i : Jr(i)) || this;
    var c = o.vars, l = c.duration, h = c.delay, f = c.immediateRender, u = c.stagger, p = c.overwrite, _ = c.keyframes, g = c.defaults, d = c.scrollTrigger, m = c.yoyoEase, M = i.parent || he, T = (Ge(n) || nu(n) ? ri(n[0]) : "length" in i) ? [n] : _n(n), y, b, A, w, x, S, z, C;
    if (o._targets = T.length ? Ol(T) : as("GSAP target " + n + " not found. https://gsap.com", !ln.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, _ || u || Vs(l) || Vs(h)) {
      if (i = o.vars, y = o.timeline = new We({ data: "nested", defaults: g || {}, targets: M && M.data === "nested" ? M.vars.targets : T }), y.kill(), y.parent = y._dp = $n(o), y._start = 0, u || Vs(l) || Vs(h)) {
        if (w = T.length, z = u && Mu(u), Gn(u)) for (x in u) ~Nu.indexOf(x) && (C || (C = {}), C[x] = u[x]);
        for (b = 0; b < w; b++) A = ra(i, Fu), A.stagger = 0, m && (A.yoyoEase = m), C && Zi(A, C), S = T[b], A.duration = +ts(l, $n(o), b, S, T), A.delay = (+ts(h, $n(o), b, S, T) || 0) - o._delay, !u && w === 1 && A.delay && (o._delay = h = A.delay, o._start += h, A.delay = 0), y.to(S, A, z ? z(b, S, T) : 0), y._ease = Ht.none;
        y.duration() ? l = h = 0 : o.timeline = 0;
      } else if (_) {
        Jr(xn(y.vars.defaults, { ease: "none" })), y._ease = Yi(_.ease || i.ease || "none");
        var L = 0, U, G, O;
        if (Ge(_)) _.forEach(function(B) {
          return y.to(T, B, ">");
        }), y.duration();
        else {
          A = {};
          for (x in _) x === "ease" || x === "easeEach" || _x(x, _[x], A, _.easeEach);
          for (x in A) for (U = A[x].sort(function(B, N) {
            return B.t - N.t;
          }), L = 0, b = 0; b < U.length; b++) G = U[b], O = { ease: G.e, duration: (G.t - (b ? U[b - 1].t : 0)) / 100 * l }, O[x] = G.v, y.to(T, O, L), L += O.duration;
          y.duration() < l && y.to({}, { duration: l - y.duration() });
        }
      }
      l || o.duration(l = y.duration());
    } else o.timeline = 0;
    return p === true && !Pl && (gi = $n(o), he.killTweensOf(T), gi = 0), Dn(M, $n(o), s), i.reversed && o.reverse(), i.paused && o.paused(true), (f || !l && !_ && o._start === Ce(M._time) && Ke(f) && q0($n(o)) && M.data !== "nested") && (o._tTime = -le, o.render(Math.max(0, -h) || 0)), d && _u($n(o), d), o;
  }
  var e = t.prototype;
  return e.render = function(i, s, a) {
    var o = this._time, c = this._tDur, l = this._dur, h = i < 0, f = i > c - le && !h ? c : i < le ? 0 : i, u, p, _, g, d, m, M, T, y;
    if (!l) j0(this, i, s, a);
    else if (f !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (u = f, T = this.timeline, this._repeat) {
        if (g = l + this._rDelay, this._repeat < -1 && h) return this.totalTime(g * 100 + i, s, a);
        if (u = Ce(f % g), f === c ? (_ = this._repeat, u = l) : (_ = ~~(f / g), _ && _ === Ce(f / g) && (u = l, _--), u > l && (u = l)), m = this._yoyo && _ & 1, m && (y = this._yEase, u = l - u), d = Ir(this._tTime, g), u === o && !a && this._initted && _ === d) return this._tTime = f, this;
        _ !== d && (T && this._yEase && Du(T, m), this.vars.repeatRefresh && !m && !this._lock && this._time !== g && this._initted && (this._lock = a = 1, this.render(Ce(g * _), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (gu(this, h ? i : u, a, s, f)) return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && _ !== d)) return this;
        if (l !== this._dur) return this.render(i, s, a);
      }
      if (this._tTime = f, this._time = u, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = M = (y || this._ease)(u / l), this._from && (this.ratio = M = 1 - M), u && !o && !s && !_ && (on(this, "onStart"), this._tTime !== f)) return this;
      for (p = this._pt; p; ) p.r(M, p.d), p = p._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(u / this._dur), s, a) || this._startAt && (this._zTime = i), this._onUpdate && !s && (h && il(this, i, s, a), on(this, "onUpdate")), this._repeat && _ !== d && this.vars.onRepeat && !s && this.parent && on(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (h && !this._onUpdate && il(this, i, true, true), (i || !l) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && bi(this, 1), !s && !(h && !o) && (f || o || m) && (on(this, f === c ? "onComplete" : "onReverseComplete", true), this._prom && !(f < c && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r16.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, s, a, o, c) {
    cs || an.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || kl(this, l), h = this._ease(l / this._dur), px(this, i, s, a, o, h, l, c) ? this.resetTo(i, s, a, o, 1) : (pa(this, 0), this.parent || pu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Zr(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, gi && gi.vars.overwrite !== true)._first || Zr(this), this.parent && a !== this.timeline.totalDuration() && Ur(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, c = i ? _n(i) : o, l = this._ptLookup, h = this._pt, f, u, p, _, g, d, m;
    if ((!s || s === "all") && X0(o, c)) return s === "all" && (this._pt = 0), Zr(this);
    for (f = this._op = this._op || [], s !== "all" && (Pe(s) && (g = {}, je(s, function(M) {
      return g[M] = 1;
    }), s = g), s = mx(o, s)), m = o.length; m--; ) if (~c.indexOf(o[m])) {
      u = l[m], s === "all" ? (f[m] = s, _ = u, p = {}) : (p = f[m] = f[m] || {}, _ = s);
      for (g in _) d = u && u[g], d && ((!("kill" in d.d) || d.d.kill(g) === true) && fa(this, d, "_pt"), delete u[g]), p !== "all" && (p[g] = 1);
    }
    return this._initted && !this._pt && h && Zr(this), this;
  }, t.to = function(i, s) {
    return new t(i, s, arguments[2]);
  }, t.from = function(i, s) {
    return Qr(1, arguments);
  }, t.delayedCall = function(i, s, a, o) {
    return new t(s, 0, { immediateRender: false, lazy: false, overwrite: false, delay: i, onComplete: s, onReverseComplete: s, onCompleteParams: a, onReverseCompleteParams: a, callbackScope: o });
  }, t.fromTo = function(i, s, a) {
    return Qr(2, arguments);
  }, t.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(i, s);
  }, t.killTweensOf = function(i, s, a) {
    return he.killTweensOf(i, s, a);
  }, t;
})(hs);
xn(ye.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
je("staggerTo,staggerFrom,staggerFromTo", function(r16) {
  ye[r16] = function() {
    var t = new We(), e = sl.call(arguments, 0);
    return e.splice(r16 === "staggerFromTo" ? 5 : 4, 0, 0), t[r16].apply(t, e);
  };
});
var zl = function(t, e, n) {
  return t[e] = n;
}, Ou = function(t, e, n) {
  return t[e](n);
}, gx = function(t, e, n, i) {
  return t[e](i.fp, n);
}, xx = function(t, e, n) {
  return t.setAttribute(e, n);
}, Vl = function(t, e) {
  return pe(t[e]) ? Ou : Dl(t[e]) && t.setAttribute ? xx : zl;
}, Bu = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, vx = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, ku = function(t, e) {
  var n = e._pt, i = "";
  if (!t && e.b) i = e.b;
  else if (t === 1 && e.e) i = e.e;
  else {
    for (; n; ) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + i, n = n._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, Gl = function(t, e) {
  for (var n = e._pt; n; ) n.r(t, n.d), n = n._next;
}, Mx = function(t, e, n, i) {
  for (var s = this._pt, a; s; ) a = s._next, s.p === i && s.modifier(t, e, n), s = a;
}, Sx = function(t) {
  for (var e = this._pt, n, i; e; ) i = e._next, e.p === t && !e.op || e.op === t ? fa(this, e, "_pt") : e.dep || (n = 1), e = i;
  return !n;
}, yx = function(t, e, n, i) {
  i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
}, zu = function(t) {
  for (var e = t._pt, n, i, s, a; e; ) {
    for (n = e._next, i = s; i && i.pr > e.pr; ) i = i._next;
    (e._prev = i ? i._prev : a) ? e._prev._next = e : s = e, (e._next = i) ? i._prev = e : a = e, e = n;
  }
  t._pt = s;
}, Ze = (function() {
  function r16(e, n, i, s, a, o, c, l, h) {
    this.t = n, this.s = s, this.c = a, this.p = i, this.r = o || Bu, this.d = c || this, this.set = l || zl, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = r16.prototype;
  return t.modifier = function(n, i, s) {
    this.mSet = this.mSet || this.set, this.set = yx, this.m = n, this.mt = s, this.tween = i;
  }, r16;
})();
je(Fl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r16) {
  return Nl[r16] = 1;
});
cn.TweenMax = cn.TweenLite = ye;
cn.TimelineLite = cn.TimelineMax = We;
he = new We({ sortChildren: false, defaults: Lr, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
ln.stringFilter = Cu;
var qi = [], $s = {}, Ex = [], lh = 0, Tx = 0, io = function(t) {
  return ($s[t] || Ex).map(function(e) {
    return e();
  });
}, cl = function() {
  var t = Date.now(), e = [];
  t - lh > 2 && (io("matchMediaInit"), qi.forEach(function(n) {
    var i = n.queries, s = n.conditions, a, o, c, l;
    for (o in i) a = Rn.matchMedia(i[o]).matches, a && (c = 1), a !== s[o] && (s[o] = a, l = 1);
    l && (n.revert(), c && e.push(n));
  }), io("matchMediaRevert"), e.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), lh = t, io("matchMedia"));
}, Vu = (function() {
  function r16(e, n) {
    this.selector = n && al(n), this.data = [], this._r = [], this.isReverted = false, this.id = Tx++, e && this.add(e);
  }
  var t = r16.prototype;
  return t.add = function(n, i, s) {
    pe(n) && (s = i, i = n, n = pe);
    var a = this, o = function() {
      var l = ce, h = a.selector, f;
      return l && l !== a && l.data.push(a), s && (a.selector = al(s)), ce = a, f = i.apply(a, arguments), pe(f) && a._r.push(f), ce = l, a.selector = h, a.isReverted = false, f;
    };
    return a.last = o, n === pe ? o(a, function(c) {
      return a.add(null, c);
    }) : n ? a[n] = o : o;
  }, t.ignore = function(n) {
    var i = ce;
    ce = null, n(this), ce = i;
  }, t.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof r16 ? n.push.apply(n, i.getTweens()) : i instanceof ye && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(n, i) {
    var s = this;
    if (n ? (function() {
      for (var o = s.getTweens(), c = s.data.length, l; c--; ) l = s.data[c], l.data === "isFlip" && (l.revert(), l.getChildren(true, true, false).forEach(function(h) {
        return o.splice(o.indexOf(h), 1);
      }));
      for (o.map(function(h) {
        return { g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0, t: h };
      }).sort(function(h, f) {
        return f.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(n);
      }), c = s.data.length; c--; ) l = s.data[c], l instanceof We ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof ye) && l.revert && l.revert(n);
      s._r.forEach(function(h) {
        return h(n, s);
      }), s.isReverted = true;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i) for (var a = qi.length; a--; ) qi[a].id === this.id && qi.splice(a, 1);
  }, t.revert = function(n) {
    this.kill(n || {});
  }, r16;
})(), bx = (function() {
  function r16(e) {
    this.contexts = [], this.scope = e, ce && ce.data.push(this);
  }
  var t = r16.prototype;
  return t.add = function(n, i, s) {
    Gn(n) || (n = { matches: n });
    var a = new Vu(0, s || this.scope), o = a.conditions = {}, c, l, h;
    ce && !a.selector && (a.selector = ce.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = n;
    for (l in n) l === "all" ? h = 1 : (c = Rn.matchMedia(n[l]), c && (qi.indexOf(a) < 0 && qi.push(a), (o[l] = c.matches) && (h = 1), c.addListener ? c.addListener(cl) : c.addEventListener("change", cl)));
    return h && i(a, function(f) {
      return a.add(null, f);
    }), this;
  }, t.revert = function(n) {
    this.kill(n || {});
  }, t.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, true);
    });
  }, r16;
})(), aa = { registerPlugin: function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  e.forEach(function(i) {
    return Au(i);
  });
}, timeline: function(t) {
  return new We(t);
}, getTweensOf: function(t, e) {
  return he.getTweensOf(t, e);
}, getProperty: function(t, e, n, i) {
  Pe(t) && (t = _n(t)[0]);
  var s = Wi(t || {}).get, a = n ? du : fu;
  return n === "native" && (n = ""), t && (e ? a((nn[e] && nn[e].get || s)(t, e, n, i)) : function(o, c, l) {
    return a((nn[o] && nn[o].get || s)(t, o, c, l));
  });
}, quickSetter: function(t, e, n) {
  if (t = _n(t), t.length > 1) {
    var i = t.map(function(h) {
      return Je.quickSetter(h, e, n);
    }), s = i.length;
    return function(h) {
      for (var f = s; f--; ) i[f](h);
    };
  }
  t = t[0] || {};
  var a = nn[e], o = Wi(t), c = o.harness && (o.harness.aliases || {})[e] || e, l = a ? function(h) {
    var f = new a();
    vr._pt = 0, f.init(t, n ? h + n : h, vr, 0, [t]), f.render(1, f), vr._pt && Gl(1, vr);
  } : o.set(t, c);
  return a ? l : function(h) {
    return l(t, c, n ? h + n : h, o, 1);
  };
}, quickTo: function(t, e, n) {
  var i, s = Je.to(t, Zi((i = {}, i[e] = "+=0.1", i.paused = true, i), n || {})), a = function(c, l, h) {
    return s.resetTo(e, c, l, h);
  };
  return a.tween = s, a;
}, isTweening: function(t) {
  return he.getTweensOf(t, true).length > 0;
}, defaults: function(t) {
  return t && t.ease && (t.ease = Yi(t.ease, Lr.ease)), ih(Lr, t || {});
}, config: function(t) {
  return ih(ln, t || {});
}, registerEffect: function(t) {
  var e = t.name, n = t.effect, i = t.plugins, s = t.defaults, a = t.extendTimeline;
  (i || "").split(",").forEach(function(o) {
    return o && !nn[o] && !cn[o] && as(e + " effect requires " + o + " plugin.");
  }), Qa[e] = function(o, c, l) {
    return n(_n(o), xn(c || {}, s), l);
  }, a && (We.prototype[e] = function(o, c, l) {
    return this.add(Qa[e](o, Gn(c) ? c : (l = c) && {}, this), l);
  });
}, registerEase: function(t, e) {
  Ht[t] = Yi(e);
}, parseEase: function(t, e) {
  return arguments.length ? Yi(t, e) : Ht;
}, getById: function(t) {
  return he.getById(t);
}, exportRoot: function(t, e) {
  t === void 0 && (t = {});
  var n = new We(t), i, s;
  for (n.smoothChildTiming = Ke(t.smoothChildTiming), he.remove(n), n._dp = 0, n._time = n._tTime = he._time, i = he._first; i; ) s = i._next, (e || !(!i._dur && i instanceof ye && i.vars.onComplete === i._targets[0])) && Dn(n, i, i._start - i._delay), i = s;
  return Dn(he, n, 0), n;
}, context: function(t, e) {
  return t ? new Vu(t, e) : ce;
}, matchMedia: function(t) {
  return new bx(t);
}, matchMediaRefresh: function() {
  return qi.forEach(function(t) {
    var e = t.conditions, n, i;
    for (i in e) e[i] && (e[i] = false, n = 1);
    n && t.revert();
  }) || cl();
}, addEventListener: function(t, e) {
  var n = $s[t] || ($s[t] = []);
  ~n.indexOf(e) || n.push(e);
}, removeEventListener: function(t, e) {
  var n = $s[t], i = n && n.indexOf(e);
  i >= 0 && n.splice(i, 1);
}, utils: { wrap: ix, wrapYoyo: rx, distribute: Mu, random: yu, snap: Su, normalize: nx, getUnit: Oe, clamp: J0, splitColor: wu, toArray: _n, selector: al, mapRange: Tu, pipe: tx, unitize: ex, interpolate: sx, shuffle: vu }, install: ou, effects: Qa, ticker: an, updateRoot: We.updateRoot, plugins: nn, globalTimeline: he, core: { PropTween: Ze, globals: lu, Tween: ye, Timeline: We, Animation: hs, getCache: Wi, _removeLinkedListItem: fa, reverting: function() {
  return Ve;
}, context: function(t) {
  return t && ce && (ce.data.push(t), t._ctx = ce), ce;
}, suppressOverwrites: function(t) {
  return Pl = t;
} } };
je("to,from,fromTo,delayedCall,set,killTweensOf", function(r16) {
  return aa[r16] = ye[r16];
});
an.add(We.updateRoot);
vr = aa.to({}, { duration: 0 });
var Ax = function(t, e) {
  for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
  return n;
}, wx = function(t, e) {
  var n = t._targets, i, s, a;
  for (i in e) for (s = n.length; s--; ) a = t._ptLookup[s][i], a && (a = a.d) && (a._pt && (a = Ax(a, i)), a && a.modifier && a.modifier(e[i], t, n[s], i));
}, ro = function(t, e) {
  return { name: t, rawVars: 1, init: function(i, s, a) {
    a._onInit = function(o) {
      var c, l;
      if (Pe(s) && (c = {}, je(s, function(h) {
        return c[h] = 1;
      }), s = c), e) {
        c = {};
        for (l in s) c[l] = e(s[l]);
        s = c;
      }
      wx(o, s);
    };
  } };
}, Je = aa.registerPlugin({ name: "attr", init: function(t, e, n, i, s) {
  var a, o, c;
  this.tween = n;
  for (a in e) c = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (c || 0) + "", e[a], i, s, 0, 0, a), o.op = a, o.b = c, this._props.push(a);
}, render: function(t, e) {
  for (var n = e._pt; n; ) Ve ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next;
} }, { name: "endArray", init: function(t, e) {
  for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
} }, ro("roundProps", ol), ro("modifiers"), ro("snap", Su)) || aa;
ye.version = We.version = Je.version = "3.12.5";
au = 1;
Ll() && Nr();
Ht.Power0;
Ht.Power1;
Ht.Power2;
Ht.Power3;
Ht.Power4;
Ht.Linear;
Ht.Quad;
Ht.Cubic;
Ht.Quart;
Ht.Quint;
Ht.Strong;
Ht.Elastic;
Ht.Back;
Ht.SteppedEase;
Ht.Bounce;
Ht.Sine;
Ht.Expo;
Ht.Circ;
var ch, xi, br, Hl, Hi, hh, Wl, Rx = function() {
  return typeof window < "u";
}, si = {}, Bi = 180 / Math.PI, Ar = Math.PI / 180, _r = Math.atan2, uh = 1e8, Xl = /([A-Z])/g, Cx = /(left|right|width|margin|padding|x)/i, Px = /[\s,\(]\S/, Un = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, hl = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Dx = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Lx = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Ix = function(t, e) {
  var n = e.s + e.c * t;
  e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
}, Gu = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Hu = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Ux = function(t, e, n) {
  return t.style[e] = n;
}, Nx = function(t, e, n) {
  return t.style.setProperty(e, n);
}, Fx = function(t, e, n) {
  return t._gsap[e] = n;
}, Ox = function(t, e, n) {
  return t._gsap.scaleX = t._gsap.scaleY = n;
}, Bx = function(t, e, n, i, s) {
  var a = t._gsap;
  a.scaleX = a.scaleY = n, a.renderTransform(s, a);
}, kx = function(t, e, n, i, s) {
  var a = t._gsap;
  a[e] = n, a.renderTransform(s, a);
}, ue = "transform", $e = ue + "Origin", zx = function r12(t, e) {
  var n = this, i = this.target, s = i.style, a = i._gsap;
  if (t in si && s) {
    if (this.tfm = this.tfm || {}, t !== "transform") t = Un[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
      return n.tfm[o] = Jn(i, o);
    }) : this.tfm[t] = a.x ? a[t] : Jn(i, t), t === $e && (this.tfm.zOrigin = a.zOrigin);
    else return Un.transform.split(",").forEach(function(o) {
      return r12.call(n, o, e);
    });
    if (this.props.indexOf(ue) >= 0) return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push($e, e, "")), t = ue;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, Wu = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Vx = function() {
  var t = this.props, e = this.target, n = e.style, i = e._gsap, s, a;
  for (s = 0; s < t.length; s += 3) t[s + 1] ? e[t[s]] = t[s + 2] : t[s + 2] ? n[t[s]] = t[s + 2] : n.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Xl, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm) i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = Wl(), (!s || !s.isStart) && !n[ue] && (Wu(n), i.zOrigin && n[$e] && (n[$e] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Xu = function(t, e) {
  var n = { target: t, props: [], revert: Vx, save: zx };
  return t._gsap || Je.core.getCache(t), e && e.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, Yu, ul = function(t, e) {
  var n = xi.createElementNS ? xi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : xi.createElement(t);
  return n && n.style ? n : xi.createElement(t);
}, Bn = function r13(t, e, n) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Xl, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && r13(t, Fr(e) || e, 1) || "";
}, fh = "O,Moz,ms,Ms,Webkit".split(","), Fr = function(t, e, n) {
  var i = e || Hi, s = i.style, a = 5;
  if (t in s && !n) return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(fh[a] + t in s); ) ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? fh[a] : "") + t;
}, fl = function() {
  Rx() && window.document && (ch = window, xi = ch.document, br = xi.documentElement, Hi = ul("div") || { style: {} }, ul("div"), ue = Fr(ue), $e = ue + "Origin", Hi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Yu = !!Fr("perspective"), Wl = Je.core.reverting, Hl = 1);
}, so = function r14(t) {
  var e = ul("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, s = this.style.cssText, a;
  if (br.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
    a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r14;
  } catch {
  }
  else this._gsapBBox && (a = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), br.removeChild(e), this.style.cssText = s, a;
}, dh = function(t, e) {
  for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
}, qu = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = so.call(t, true);
  }
  return e && (e.width || e.height) || t.getBBox === so || (e = so.call(t, true)), e && !e.width && !e.x && !e.y ? { x: +dh(t, ["x", "cx", "x1"]) || 0, y: +dh(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e;
}, Ku = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && qu(t));
}, $i = function(t, e) {
  if (e) {
    var n = t.style, i;
    e in si && e !== $e && (e = ue), n.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), n.removeProperty(i === "--" ? e : e.replace(Xl, "-$1").toLowerCase())) : n.removeAttribute(e);
  }
}, vi = function(t, e, n, i, s, a) {
  var o = new Ze(t._pt, e, n, 0, 1, a ? Hu : Gu);
  return t._pt = o, o.b = i, o.e = s, t._props.push(n), o;
}, ph = { deg: 1, rad: 1, turn: 1 }, Gx = { grid: 1, flex: 1 }, Ai = function r15(t, e, n, i) {
  var s = parseFloat(n) || 0, a = (n + "").trim().substr((s + "").length) || "px", o = Hi.style, c = Cx.test(e), l = t.tagName.toLowerCase() === "svg", h = (l ? "client" : "offset") + (c ? "Width" : "Height"), f = 100, u = i === "px", p = i === "%", _, g, d, m;
  if (i === a || !s || ph[i] || ph[a]) return s;
  if (a !== "px" && !u && (s = r15(t, e, n, "px")), m = t.getCTM && Ku(t), (p || a === "%") && (si[e] || ~e.indexOf("adius"))) return _ = m ? t.getBBox()[c ? "width" : "height"] : t[h], xe(p ? s / _ * f : s / 100 * _);
  if (o[c ? "width" : "height"] = f + (u ? a : i), g = ~e.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, m && (g = (t.ownerSVGElement || {}).parentNode), (!g || g === xi || !g.appendChild) && (g = xi.body), d = g._gsap, d && p && d.width && c && d.time === an.time && !d.uncache) return xe(s / d.width * f);
  if (p && (e === "height" || e === "width")) {
    var M = t.style[e];
    t.style[e] = f + i, _ = t[h], M ? t.style[e] = M : $i(t, e);
  } else (p || a === "%") && !Gx[Bn(g, "display")] && (o.position = Bn(t, "position")), g === t && (o.position = "static"), g.appendChild(Hi), _ = Hi[h], g.removeChild(Hi), o.position = "absolute";
  return c && p && (d = Wi(g), d.time = an.time, d.width = g[h]), xe(u ? _ * s / f : _ && s ? f / _ * s : 0);
}, Jn = function(t, e, n, i) {
  var s;
  return Hl || fl(), e in Un && e !== "transform" && (e = Un[e], ~e.indexOf(",") && (e = e.split(",")[0])), si[e] && e !== "transform" ? (s = fs(t, i), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : la(Bn(t, $e)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = oa[e] && oa[e](t, e, n) || Bn(t, e) || hu(t, e) || (e === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? Ai(t, e, s, n) + n : s;
}, Hx = function(t, e, n, i) {
  if (!n || n === "none") {
    var s = Fr(e, t, 1), a = s && Bn(t, s, 1);
    a && a !== n ? (e = s, n = a) : e === "borderColor" && (n = Bn(t, "borderTopColor"));
  }
  var o = new Ze(this._pt, t.style, e, 0, 1, ku), c = 0, l = 0, h, f, u, p, _, g, d, m, M, T, y, b;
  if (o.b = n, o.e = i, n += "", i += "", i === "auto" && (g = t.style[e], t.style[e] = i, i = Bn(t, e) || i, g ? t.style[e] = g : $i(t, e)), h = [n, i], Cu(h), n = h[0], i = h[1], u = n.match(xr) || [], b = i.match(xr) || [], b.length) {
    for (; f = xr.exec(i); ) d = f[0], M = i.substring(c, f.index), _ ? _ = (_ + 1) % 5 : (M.substr(-5) === "rgba(" || M.substr(-5) === "hsla(") && (_ = 1), d !== (g = u[l++] || "") && (p = parseFloat(g) || 0, y = g.substr((p + "").length), d.charAt(1) === "=" && (d = Tr(p, d) + y), m = parseFloat(d), T = d.substr((m + "").length), c = xr.lastIndex - T.length, T || (T = T || ln.units[e] || y, c === i.length && (i += T, o.e += T)), y !== T && (p = Ai(t, e, g, T) || 0), o._pt = { _next: o._pt, p: M || l === 1 ? M : ",", s: p, c: m - p, m: _ && _ < 4 || e === "zIndex" ? Math.round : 0 });
    o.c = c < i.length ? i.substring(c, i.length) : "";
  } else o.r = e === "display" && i === "none" ? Hu : Gu;
  return ru.test(i) && (o.e = 0), this._pt = o, o;
}, mh = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, Wx = function(t) {
  var e = t.split(" "), n = e[0], i = e[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (t = n, n = i, i = t), e[0] = mh[n] || n, e[1] = mh[i] || i, e.join(" ");
}, Xx = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var n = e.t, i = n.style, s = e.u, a = n._gsap, o, c, l;
    if (s === "all" || s === true) i.cssText = "", c = 1;
    else for (s = s.split(","), l = s.length; --l > -1; ) o = s[l], si[o] && (c = 1, o = o === "transformOrigin" ? $e : ue), $i(n, o);
    c && ($i(n, ue), a && (a.svg && n.removeAttribute("transform"), fs(n, 1), a.uncache = 1, Wu(i)));
  }
}, oa = { clearProps: function(t, e, n, i, s) {
  if (s.data !== "isFromStart") {
    var a = t._pt = new Ze(t._pt, e, n, 0, 0, Xx);
    return a.u = i, a.pr = -10, a.tween = s, t._props.push(n), 1;
  }
} }, us = [1, 0, 0, 1, 0, 0], ju = {}, Zu = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, _h = function(t) {
  var e = Bn(t, ue);
  return Zu(e) ? us : e.substr(7).match(iu).map(xe);
}, Yl = function(t, e) {
  var n = t._gsap || Wi(t), i = t.style, s = _h(t), a, o, c, l;
  return n.svg && t.getAttribute("transform") ? (c = t.transform.baseVal.consolidate().matrix, s = [c.a, c.b, c.c, c.d, c.e, c.f], s.join(",") === "1,0,0,1,0,0" ? us : s) : (s === us && !t.offsetParent && t !== br && !n.svg && (c = i.display, i.display = "block", a = t.parentNode, (!a || !t.offsetParent) && (l = 1, o = t.nextElementSibling, br.appendChild(t)), s = _h(t), c ? i.display = c : $i(t, "display"), l && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : br.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, dl = function(t, e, n, i, s, a) {
  var o = t._gsap, c = s || Yl(t, true), l = o.xOrigin || 0, h = o.yOrigin || 0, f = o.xOffset || 0, u = o.yOffset || 0, p = c[0], _ = c[1], g = c[2], d = c[3], m = c[4], M = c[5], T = e.split(" "), y = parseFloat(T[0]) || 0, b = parseFloat(T[1]) || 0, A, w, x, S;
  n ? c !== us && (w = p * d - _ * g) && (x = y * (d / w) + b * (-g / w) + (g * M - d * m) / w, S = y * (-_ / w) + b * (p / w) - (p * M - _ * m) / w, y = x, b = S) : (A = qu(t), y = A.x + (~T[0].indexOf("%") ? y / 100 * A.width : y), b = A.y + (~(T[1] || T[0]).indexOf("%") ? b / 100 * A.height : b)), i || i !== false && o.smooth ? (m = y - l, M = b - h, o.xOffset = f + (m * p + M * g) - m, o.yOffset = u + (m * _ + M * d) - M) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!n, t.style[$e] = "0px 0px", a && (vi(a, o, "xOrigin", l, y), vi(a, o, "yOrigin", h, b), vi(a, o, "xOffset", f, o.xOffset), vi(a, o, "yOffset", u, o.yOffset)), t.setAttribute("data-svg-origin", y + " " + b);
}, fs = function(t, e) {
  var n = t._gsap || new Iu(t);
  if ("x" in n && !e && !n.uncache) return n;
  var i = t.style, s = n.scaleX < 0, a = "px", o = "deg", c = getComputedStyle(t), l = Bn(t, $e) || "0", h, f, u, p, _, g, d, m, M, T, y, b, A, w, x, S, z, C, L, U, G, O, B, N, Z, $, lt, ut, at, Dt, Wt, Xt;
  return h = f = u = g = d = m = M = T = y = 0, p = _ = 1, n.svg = !!(t.getCTM && Ku(t)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[ue] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[ue] !== "none" ? c[ue] : "")), i.scale = i.rotate = i.translate = "none"), w = Yl(t, n.svg), n.svg && (n.uncache ? (Z = t.getBBox(), l = n.xOrigin - Z.x + "px " + (n.yOrigin - Z.y) + "px", N = "") : N = !e && t.getAttribute("data-svg-origin"), dl(t, N || l, !!N || n.originIsAbsolute, n.smooth !== false, w)), b = n.xOrigin || 0, A = n.yOrigin || 0, w !== us && (C = w[0], L = w[1], U = w[2], G = w[3], h = O = w[4], f = B = w[5], w.length === 6 ? (p = Math.sqrt(C * C + L * L), _ = Math.sqrt(G * G + U * U), g = C || L ? _r(L, C) * Bi : 0, M = U || G ? _r(U, G) * Bi + g : 0, M && (_ *= Math.abs(Math.cos(M * Ar))), n.svg && (h -= b - (b * C + A * U), f -= A - (b * L + A * G))) : (Xt = w[6], Dt = w[7], lt = w[8], ut = w[9], at = w[10], Wt = w[11], h = w[12], f = w[13], u = w[14], x = _r(Xt, at), d = x * Bi, x && (S = Math.cos(-x), z = Math.sin(-x), N = O * S + lt * z, Z = B * S + ut * z, $ = Xt * S + at * z, lt = O * -z + lt * S, ut = B * -z + ut * S, at = Xt * -z + at * S, Wt = Dt * -z + Wt * S, O = N, B = Z, Xt = $), x = _r(-U, at), m = x * Bi, x && (S = Math.cos(-x), z = Math.sin(-x), N = C * S - lt * z, Z = L * S - ut * z, $ = U * S - at * z, Wt = G * z + Wt * S, C = N, L = Z, U = $), x = _r(L, C), g = x * Bi, x && (S = Math.cos(x), z = Math.sin(x), N = C * S + L * z, Z = O * S + B * z, L = L * S - C * z, B = B * S - O * z, C = N, O = Z), d && Math.abs(d) + Math.abs(g) > 359.9 && (d = g = 0, m = 180 - m), p = xe(Math.sqrt(C * C + L * L + U * U)), _ = xe(Math.sqrt(B * B + Xt * Xt)), x = _r(O, B), M = Math.abs(x) > 2e-4 ? x * Bi : 0, y = Wt ? 1 / (Wt < 0 ? -Wt : Wt) : 0), n.svg && (N = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Zu(Bn(t, ue)), N && t.setAttribute("transform", N))), Math.abs(M) > 90 && Math.abs(M) < 270 && (s ? (p *= -1, M += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (_ *= -1, M += M <= 0 ? 180 : -180)), e = e || n.uncache, n.x = h - ((n.xPercent = h && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + a, n.y = f - ((n.yPercent = f && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + a, n.z = u + a, n.scaleX = xe(p), n.scaleY = xe(_), n.rotation = xe(g) + o, n.rotationX = xe(d) + o, n.rotationY = xe(m) + o, n.skewX = M + o, n.skewY = T + o, n.transformPerspective = y + a, (n.zOrigin = parseFloat(l.split(" ")[2]) || !e && n.zOrigin || 0) && (i[$e] = la(l)), n.xOffset = n.yOffset = 0, n.force3D = ln.force3D, n.renderTransform = n.svg ? qx : Yu ? $u : Yx, n.uncache = 0, n;
}, la = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ao = function(t, e, n) {
  var i = Oe(e);
  return xe(parseFloat(e) + parseFloat(Ai(t, "x", n + "px", i))) + i;
}, Yx = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, $u(t, e);
}, Fi = "0deg", qr = "0px", Oi = ") ", $u = function(t, e) {
  var n = e || this, i = n.xPercent, s = n.yPercent, a = n.x, o = n.y, c = n.z, l = n.rotation, h = n.rotationY, f = n.rotationX, u = n.skewX, p = n.skewY, _ = n.scaleX, g = n.scaleY, d = n.transformPerspective, m = n.force3D, M = n.target, T = n.zOrigin, y = "", b = m === "auto" && t && t !== 1 || m === true;
  if (T && (f !== Fi || h !== Fi)) {
    var A = parseFloat(h) * Ar, w = Math.sin(A), x = Math.cos(A), S;
    A = parseFloat(f) * Ar, S = Math.cos(A), a = ao(M, a, w * S * -T), o = ao(M, o, -Math.sin(A) * -T), c = ao(M, c, x * S * -T + T);
  }
  d !== qr && (y += "perspective(" + d + Oi), (i || s) && (y += "translate(" + i + "%, " + s + "%) "), (b || a !== qr || o !== qr || c !== qr) && (y += c !== qr || b ? "translate3d(" + a + ", " + o + ", " + c + ") " : "translate(" + a + ", " + o + Oi), l !== Fi && (y += "rotate(" + l + Oi), h !== Fi && (y += "rotateY(" + h + Oi), f !== Fi && (y += "rotateX(" + f + Oi), (u !== Fi || p !== Fi) && (y += "skew(" + u + ", " + p + Oi), (_ !== 1 || g !== 1) && (y += "scale(" + _ + ", " + g + Oi), M.style[ue] = y || "translate(0, 0)";
}, qx = function(t, e) {
  var n = e || this, i = n.xPercent, s = n.yPercent, a = n.x, o = n.y, c = n.rotation, l = n.skewX, h = n.skewY, f = n.scaleX, u = n.scaleY, p = n.target, _ = n.xOrigin, g = n.yOrigin, d = n.xOffset, m = n.yOffset, M = n.forceCSS, T = parseFloat(a), y = parseFloat(o), b, A, w, x, S;
  c = parseFloat(c), l = parseFloat(l), h = parseFloat(h), h && (h = parseFloat(h), l += h, c += h), c || l ? (c *= Ar, l *= Ar, b = Math.cos(c) * f, A = Math.sin(c) * f, w = Math.sin(c - l) * -u, x = Math.cos(c - l) * u, l && (h *= Ar, S = Math.tan(l - h), S = Math.sqrt(1 + S * S), w *= S, x *= S, h && (S = Math.tan(h), S = Math.sqrt(1 + S * S), b *= S, A *= S)), b = xe(b), A = xe(A), w = xe(w), x = xe(x)) : (b = f, x = u, A = w = 0), (T && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (T = Ai(p, "x", a, "px"), y = Ai(p, "y", o, "px")), (_ || g || d || m) && (T = xe(T + _ - (_ * b + g * w) + d), y = xe(y + g - (_ * A + g * x) + m)), (i || s) && (S = p.getBBox(), T = xe(T + i / 100 * S.width), y = xe(y + s / 100 * S.height)), S = "matrix(" + b + "," + A + "," + w + "," + x + "," + T + "," + y + ")", p.setAttribute("transform", S), M && (p.style[ue] = S);
}, Kx = function(t, e, n, i, s) {
  var a = 360, o = Pe(s), c = parseFloat(s) * (o && ~s.indexOf("rad") ? Bi : 1), l = c - i, h = i + l + "deg", f, u;
  return o && (f = s.split("_")[1], f === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), f === "cw" && l < 0 ? l = (l + a * uh) % a - ~~(l / a) * a : f === "ccw" && l > 0 && (l = (l - a * uh) % a - ~~(l / a) * a)), t._pt = u = new Ze(t._pt, e, n, i, l, Dx), u.e = h, u.u = "deg", t._props.push(n), u;
}, gh = function(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}, jx = function(t, e, n) {
  var i = gh({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, c, l, h, f, u, p, _;
  i.svg ? (l = n.getAttribute("transform"), n.setAttribute("transform", ""), a[ue] = e, o = fs(n, 1), $i(n, ue), n.setAttribute("transform", l)) : (l = getComputedStyle(n)[ue], a[ue] = e, o = fs(n, 1), a[ue] = l);
  for (c in si) l = i[c], h = o[c], l !== h && s.indexOf(c) < 0 && (p = Oe(l), _ = Oe(h), f = p !== _ ? Ai(n, c, l, _) : parseFloat(l), u = parseFloat(h), t._pt = new Ze(t._pt, o, c, f, u - f, hl), t._pt.u = _ || 0, t._props.push(c));
  gh(o, i);
};
je("padding,margin,Width,Radius", function(r16, t) {
  var e = "Top", n = "Right", i = "Bottom", s = "Left", a = (t < 3 ? [e, n, i, s] : [e + s, e + n, i + n, i + s]).map(function(o) {
    return t < 2 ? r16 + o : "border" + o + r16;
  });
  oa[t > 1 ? "border" + r16 : r16] = function(o, c, l, h, f) {
    var u, p;
    if (arguments.length < 4) return u = a.map(function(_) {
      return Jn(o, _, l);
    }), p = u.join(" "), p.split(u[0]).length === 5 ? u[0] : p;
    u = (h + "").split(" "), p = {}, a.forEach(function(_, g) {
      return p[_] = u[g] = u[g] || u[(g - 1) / 2 | 0];
    }), o.init(c, p, f);
  };
});
var Ju = { name: "css", register: fl, targetTest: function(t) {
  return t.style && t.nodeType;
}, init: function(t, e, n, i, s) {
  var a = this._props, o = t.style, c = n.vars.startAt, l, h, f, u, p, _, g, d, m, M, T, y, b, A, w, x;
  Hl || fl(), this.styles = this.styles || Xu(t), x = this.styles.props, this.tween = n;
  for (g in e) if (g !== "autoRound" && (h = e[g], !(nn[g] && Uu(g, e, n, i, t, s)))) {
    if (p = typeof h, _ = oa[g], p === "function" && (h = h.call(n, i, t, s), p = typeof h), p === "string" && ~h.indexOf("random(") && (h = ls(h)), _) _(this, t, g, h, n) && (w = 1);
    else if (g.substr(0, 2) === "--") l = (getComputedStyle(t).getPropertyValue(g) + "").trim(), h += "", Si.lastIndex = 0, Si.test(l) || (d = Oe(l), m = Oe(h)), m ? d !== m && (l = Ai(t, g, l, m) + m) : d && (h += d), this.add(o, "setProperty", l, h, i, s, 0, 0, g), a.push(g), x.push(g, 0, o[g]);
    else if (p !== "undefined") {
      if (c && g in c ? (l = typeof c[g] == "function" ? c[g].call(n, i, t, s) : c[g], Pe(l) && ~l.indexOf("random(") && (l = ls(l)), Oe(l + "") || l === "auto" || (l += ln.units[g] || Oe(Jn(t, g)) || ""), (l + "").charAt(1) === "=" && (l = Jn(t, g))) : l = Jn(t, g), u = parseFloat(l), M = p === "string" && h.charAt(1) === "=" && h.substr(0, 2), M && (h = h.substr(2)), f = parseFloat(h), g in Un && (g === "autoAlpha" && (u === 1 && Jn(t, "visibility") === "hidden" && f && (u = 0), x.push("visibility", 0, o.visibility), vi(this, o, "visibility", u ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), g !== "scale" && g !== "transform" && (g = Un[g], ~g.indexOf(",") && (g = g.split(",")[0]))), T = g in si, T) {
        if (this.styles.save(g), y || (b = t._gsap, b.renderTransform && !e.parseTransform || fs(t, e.parseTransform), A = e.smoothOrigin !== false && b.smooth, y = this._pt = new Ze(this._pt, o, ue, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), g === "scale") this._pt = new Ze(this._pt, b, "scaleY", b.scaleY, (M ? Tr(b.scaleY, M + f) : f) - b.scaleY || 0, hl), this._pt.u = 0, a.push("scaleY", g), g += "X";
        else if (g === "transformOrigin") {
          x.push($e, 0, o[$e]), h = Wx(h), b.svg ? dl(t, h, 0, A, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== b.zOrigin && vi(this, b, "zOrigin", b.zOrigin, m), vi(this, o, g, la(l), la(h)));
          continue;
        } else if (g === "svgOrigin") {
          dl(t, h, 1, A, 0, this);
          continue;
        } else if (g in ju) {
          Kx(this, b, g, u, M ? Tr(u, M + h) : h);
          continue;
        } else if (g === "smoothOrigin") {
          vi(this, b, "smooth", b.smooth, h);
          continue;
        } else if (g === "force3D") {
          b[g] = h;
          continue;
        } else if (g === "transform") {
          jx(this, h, t);
          continue;
        }
      } else g in o || (g = Fr(g) || g);
      if (T || (f || f === 0) && (u || u === 0) && !Px.test(h) && g in o) d = (l + "").substr((u + "").length), f || (f = 0), m = Oe(h) || (g in ln.units ? ln.units[g] : d), d !== m && (u = Ai(t, g, l, m)), this._pt = new Ze(this._pt, T ? b : o, g, u, (M ? Tr(u, M + f) : f) - u, !T && (m === "px" || g === "zIndex") && e.autoRound !== false ? Ix : hl), this._pt.u = m || 0, d !== m && m !== "%" && (this._pt.b = l, this._pt.r = Lx);
      else if (g in o) Hx.call(this, t, g, l, M ? M + h : h);
      else if (g in t) this.add(t, g, l || t[g], M ? M + h : h, i, s);
      else if (g !== "parseTransform") {
        Ul(g, h);
        continue;
      }
      T || (g in o ? x.push(g, 0, o[g]) : x.push(g, 1, l || t[g])), a.push(g);
    }
  }
  w && zu(this);
}, render: function(t, e) {
  if (e.tween._time || !Wl()) for (var n = e._pt; n; ) n.r(t, n.d), n = n._next;
  else e.styles.revert();
}, get: Jn, aliases: Un, getSetter: function(t, e, n) {
  var i = Un[e];
  return i && i.indexOf(",") < 0 && (e = i), e in si && e !== $e && (t._gsap.x || Jn(t, "x")) ? n && hh === n ? e === "scale" ? Ox : Fx : (hh = n || {}) && (e === "scale" ? Bx : kx) : t.style && !Dl(t.style[e]) ? Ux : ~e.indexOf("-") ? Nx : Vl(t, e);
}, core: { _removeProperty: $i, _getMatrix: Yl } };
Je.utils.checkPrefix = Fr;
Je.core.getStyleSaver = Xu;
(function(r16, t, e, n) {
  var i = je(r16 + "," + t + "," + e, function(s) {
    si[s] = 1;
  });
  je(t, function(s) {
    ln.units[s] = "deg", ju[s] = 1;
  }), Un[i[13]] = r16 + "," + t, je(n, function(s) {
    var a = s.split(":");
    Un[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r16) {
  ln.units[r16] = "px";
});
Je.registerPlugin(Ju);
var kt = Je.registerPlugin(Ju) || Je;
kt.core.Tween;
class Zx {
  constructor(t) {
    this.scene = t, this.lights = {}, this.init();
  }
  init() {
    this.lights.ambient = new Td(16774892, 1.2), this.scene.add(this.lights.ambient), this.lights.key = new Wa(16774112, 2.5), this.lights.key.position.set(6, 9, 7), this.lights.key.castShadow = true, this.lights.key.shadow.mapSize.width = 2048, this.lights.key.shadow.mapSize.height = 2048, this.lights.key.shadow.camera.near = 0.5, this.lights.key.shadow.camera.far = 25, this.lights.key.shadow.camera.left = -5, this.lights.key.shadow.camera.right = 5, this.lights.key.shadow.camera.top = 5, this.lights.key.shadow.camera.bottom = -5, this.lights.key.shadow.bias = -5e-4, this.lights.key.shadow.radius = 3, this.scene.add(this.lights.key), this.lights.fill = new Wa(14411775, 1), this.lights.fill.position.set(-6, 5, -5), this.scene.add(this.lights.fill), this.lights.rim = new Wa(16771286, 1.4), this.lights.rim.position.set(0, 8, -8), this.scene.add(this.lights.rim);
    const t = new dn(30, 30), e = new pd({ opacity: 0.16 }), n = new Gt(t, e);
    n.rotation.x = -Math.PI / 2, n.position.y = -1.5, n.receiveShadow = true, this.scene.add(n);
  }
  setMode(t) {
    t === "warm" ? (this.lights.ambient.color.setHex(16774118), this.lights.key.color.setHex(16768954), this.lights.key.intensity = 2.8) : t === "daylight" ? (this.lights.ambient.color.setHex(16054267), this.lights.key.color.setHex(16777215), this.lights.key.intensity = 2.4) : t === "golden" && (this.lights.ambient.color.setHex(16772295), this.lights.key.color.setHex(16755026), this.lights.key.intensity = 3.2);
  }
}
class $x {
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
    const s = this.ctx.createBiquadFilter();
    s.type = "bandpass", s.frequency.setValueAtTime(900, this.ctx.currentTime), s.frequency.exponentialRampToValueAtTime(1500, this.ctx.currentTime + 0.18), s.Q.value = 2.5;
    const a = this.ctx.createGain();
    a.gain.setValueAtTime(0.08, this.ctx.currentTime), a.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.2), i.connect(s), s.connect(a), a.connect(this.ctx.destination), i.start();
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
class yi {
  static createKraftTexture(t = 1024, e = 1024, n = "#D4B28C") {
    const i = document.createElement("canvas");
    i.width = t, i.height = e;
    const s = i.getContext("2d");
    s.fillStyle = n, s.fillRect(0, 0, t, e);
    const a = s.getImageData(0, 0, t, e), o = a.data;
    for (let l = 0; l < o.length; l += 4) {
      const h = (Math.random() - 0.5) * 22;
      o[l] = Math.min(255, Math.max(0, o[l] + h)), o[l + 1] = Math.min(255, Math.max(0, o[l + 1] + h * 0.9)), o[l + 2] = Math.min(255, Math.max(0, o[l + 2] + h * 0.8));
    }
    s.putImageData(a, 0, 0), s.strokeStyle = "rgba(90, 65, 45, 0.08)", s.lineWidth = 1;
    for (let l = 0; l < 400; l++) {
      const h = Math.random() * t, f = Math.random() * e;
      s.beginPath(), s.moveTo(h, f), s.lineTo(h + (Math.random() - 0.5) * 12, f + (Math.random() - 0.5) * 12), s.stroke();
    }
    const c = new Wr(i);
    return c.wrapS = es, c.wrapT = es, c;
  }
  static createGoldFoilBranding(t = "YARA KHAMIS", e = "PACKAGING & BRAND IDENTITY", n = "YK") {
    const i = document.createElement("canvas");
    i.width = 1024, i.height = 1024;
    const s = i.getContext("2d");
    return s.fillStyle = "#1D1C1B", s.fillRect(0, 0, 1024, 1024), s.strokeStyle = "#E6C687", s.lineWidth = 4, s.strokeRect(80, 80, 864, 864), s.lineWidth = 1.5, s.strokeRect(95, 95, 834, 834), [[80, 80], [944, 80], [80, 944], [944, 944]].forEach(([c, l]) => {
      s.fillStyle = "#E6C687", s.beginPath(), s.arc(c, l, 6, 0, Math.PI * 2), s.fill();
    }), s.beginPath(), s.arc(512, 360, 90, 0, Math.PI * 2), s.lineWidth = 3, s.strokeStyle = "#F3DCA3", s.stroke(), s.font = 'italic 700 72px "Playfair Display", "Times New Roman", serif', s.fillStyle = "#F3DCA3", s.textAlign = "center", s.textBaseline = "middle", s.fillText(n, 512, 360), s.font = '700 52px "Plus Jakarta Sans", sans-serif', s.letterSpacing = "10px", s.fillStyle = "#F5E1B5", s.fillText(t, 512, 540), s.font = '400 36px "Amiri", "Traditional Arabic", serif', s.fillStyle = "#E2C288", s.fillText("\u064A\u0627\u0631\u0627 \u062E\u0645\u064A\u0633 \u2014 \u0641\u0646 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062A\u063A\u0644\u064A\u0641", 512, 610), s.font = '500 24px "Plus Jakarta Sans", sans-serif', s.fillStyle = "#D6B87C", s.letterSpacing = "6px", s.fillText(e, 512, 680), s.fillText("EST. 2018 \xB7 FINE ARTS DECOR", 512, 730), new Wr(i);
  }
  static createFoodLabel(t = "ARTISAN GOURMET", e = "Handcrafted Organic Infusion", n = "\u0645\u0633\u062A\u062E\u0644\u0635\u0627\u062A \u0639\u0634\u0628\u064A\u0629 \u0641\u0627\u062E\u0631\u0629") {
    const i = document.createElement("canvas");
    i.width = 1024, i.height = 1024;
    const s = i.getContext("2d");
    s.fillStyle = "#F6F3EB", s.fillRect(0, 0, 1024, 1024), s.fillStyle = "#E08B73", s.fillRect(80, 0, 864, 1024), s.fillStyle = "#FBF9F5", s.beginPath(), s.arc(512, 400, 240, Math.PI, 0, false), s.lineTo(752, 720), s.arc(512, 720, 240, 0, Math.PI, false), s.closePath(), s.fill(), s.strokeStyle = "#4A5B46", s.lineWidth = 3, s.beginPath(), s.moveTo(512, 560), s.quadraticCurveTo(512, 420, 512, 300), s.stroke();
    for (let o = 0; o < 7; o++) {
      const c = 320 + o * 32, l = o % 2 === 0 ? 1 : -1;
      s.beginPath(), s.ellipse(512 + l * 35, c, 28, 12, l * 0.5, 0, Math.PI * 2), s.fillStyle = o % 2 === 0 ? "#637A5D" : "#8A9E84", s.fill();
    }
    s.textAlign = "center", s.fillStyle = "#2A2928", s.font = '700 42px "Plus Jakarta Sans", sans-serif', s.fillText(t, 512, 220), s.font = 'italic 400 32px "Playfair Display", serif', s.fillStyle = "#3F3D3A", s.fillText(e, 512, 650), s.font = '700 34px "Amiri", serif', s.fillStyle = "#B4573F", s.fillText(n, 512, 710), s.font = '600 20px "Plus Jakarta Sans", sans-serif', s.fillStyle = "#5A5652", s.fillText("100% RECYCLABLE \xB7 FOOD GRADE \xB7 350 GSM", 512, 850), s.fillText("DESIGNED BY YARA KHAMIS", 512, 890), s.fillStyle = "#2A2928";
    const a = 362;
    for (let o = 0; o < 300; o += 6) {
      const c = o % 12 === 0 || o % 18 === 0 ? 4 : 2;
      s.fillRect(a + o, 920, c, 40);
    }
    return new Wr(i);
  }
  static createWatercolorPage(t = 0) {
    const e = document.createElement("canvas");
    e.width = 1024, e.height = 1024;
    const n = e.getContext("2d");
    n.fillStyle = "#F8F5EE", n.fillRect(0, 0, 1024, 1024);
    const i = n.getImageData(0, 0, 1024, 1024);
    for (let l = 0; l < i.data.length; l += 4) {
      const h = (Math.random() - 0.5) * 14;
      i.data[l] += h, i.data[l + 1] += h, i.data[l + 2] += h;
    }
    n.putImageData(i, 0, 0);
    const s = [["rgba(217, 136, 128, 0.45)", "rgba(235, 175, 140, 0.35)", "Floral Symphony"], ["rgba(123, 158, 137, 0.45)", "rgba(168, 195, 160, 0.35)", "Botanical Whispers"], ["rgba(155, 130, 180, 0.45)", "rgba(205, 170, 210, 0.35)", "Lavender Dreams"]], [a, o, c] = s[t % s.length];
    n.save();
    for (let l = 0; l < 6; l++) {
      n.beginPath(), n.fillStyle = l % 2 === 0 ? a : o;
      const h = 320 + Math.sin(l) * 160, f = 420 + Math.cos(l) * 140, u = 180 + Math.sin(l * 2) * 60;
      n.arc(h, f, u, 0, Math.PI * 2), n.fill();
    }
    return n.restore(), n.textAlign = "center", n.fillStyle = "#3A3632", n.font = 'italic 700 46px "Playfair Display", serif', n.fillText(c, 512, 780), n.font = '400 24px "Plus Jakarta Sans", sans-serif', n.fillStyle = "#78736B", n.fillText("Original Watercolor & Hand-Bound Journal \xB7 Yara Khamis", 512, 840), new Wr(e);
  }
  static createDielineTexture() {
    const t = document.createElement("canvas");
    t.width = 1024, t.height = 1024;
    const e = t.getContext("2d");
    return e.fillStyle = "#E5C9A4", e.fillRect(0, 0, 1024, 1024), e.strokeStyle = "#D93829", e.lineWidth = 3, e.strokeRect(180, 180, 664, 664), e.setLineDash([12, 8]), e.strokeStyle = "#0077B6", e.lineWidth = 2.5, e.beginPath(), e.moveTo(346, 180), e.lineTo(346, 844), e.moveTo(512, 180), e.lineTo(512, 844), e.moveTo(678, 180), e.lineTo(678, 844), e.moveTo(180, 346), e.lineTo(844, 346), e.moveTo(180, 678), e.lineTo(844, 678), e.stroke(), e.setLineDash([]), e.fillStyle = "#222", e.font = "600 22px monospace", e.fillText("DIELINE STRUCTURE: RETT-B350", 200, 140), e.fillText("DIMENSIONS: 160 x 120 x 80 mm", 200, 165), e.fillText("GRAIN DIRECTION: \u25C4\u2500\u2500\u25BA", 600, 140), [[100, 100], [924, 100], [100, 924], [924, 924]].forEach(([s, a]) => {
      e.strokeStyle = "#111", e.lineWidth = 2, e.beginPath(), e.arc(s, a, 20, 0, Math.PI * 2), e.moveTo(s - 28, a), e.lineTo(s + 28, a), e.moveTo(s, a - 28), e.lineTo(s, a + 28), e.stroke();
    }), ["#00FFFF", "#FF00FF", "#FFFF00", "#000000"].forEach((s, a) => {
      e.fillStyle = s, e.fillRect(200 + a * 45, 870, 35, 20), e.strokeRect(200 + a * 45, 870, 35, 20);
    }), new Wr(t);
  }
}
class Jx {
  constructor(t) {
    this.audio = t, this.group = new ve(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = yi.createKraftTexture(), e = yi.createFoodLabel(), n = new Er({ map: t, roughness: 0.85, metalness: 0.05, clearcoat: 0.05 }), i = new Le(2.4, 0.9, 3.4);
    this.tray = new Gt(i, n), this.tray.castShadow = true, this.tray.receiveShadow = true, this.group.add(this.tray), this.contents = new ve();
    for (let o = 0; o < 3; o++) {
      const c = new sn({ color: o === 0 ? 14715763 : o === 1 ? 6519389 : 13939340, roughness: 0.35, metalness: 0.6 }), l = new Gt(new ji(0.32, 0.32, 0.75, 32), c);
      l.position.set(-0.65 + o * 0.65, 0.1, 0), l.castShadow = true, this.contents.add(l);
    }
    this.tray.add(this.contents);
    const s = new Er({ map: e, roughness: 0.5, metalness: 0.1, clearcoat: 0.2 }), a = new Le(2.46, 0.96, 3.46);
    this.sleeve = new Gt(a, s), this.sleeve.castShadow = true, this.sleeve.receiveShadow = true, this.group.add(this.sleeve);
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), kt.to(this.sleeve.position, { x: -3.2, duration: 1.2, ease: "power3.out" }), kt.to(this.tray.position, { z: 1.8, duration: 1.2, ease: "power3.out", onComplete: () => this.audio.playCardboardThud() }), kt.to(this.contents.position, { y: 0.4, duration: 0.8, delay: 0.4, ease: "back.out(1.8)" })) : (this.audio.playPaperSlide(), kt.to(this.contents.position, { y: 0, duration: 0.6, ease: "power2.in" }), kt.to(this.sleeve.position, { x: 0, duration: 1, ease: "power3.inOut" }), kt.to(this.tray.position, { z: 0, duration: 1, ease: "power3.inOut", onComplete: () => this.audio.playCardboardThud() }));
  }
}
class Qx {
  constructor(t) {
    this.audio = t, this.group = new ve(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = yi.createGoldFoilBranding(), e = new Er({ color: 1710360, roughness: 0.7, metalness: 0.15, clearcoat: 0.1 }), n = new Le(2.6, 1.1, 2.6);
    this.base = new Gt(n, e), this.base.castShadow = true, this.base.receiveShadow = true, this.group.add(this.base);
    const i = new sn({ color: 2759446, roughness: 0.95 }), s = new Gt(new Le(2.4, 0.4, 2.4), i);
    s.position.y = 0.4, this.base.add(s), this.bottle = new ve();
    const a = new Er({ color: 16777215, transmission: 0.88, opacity: 1, transparent: true, roughness: 0.08, ior: 1.52, thickness: 0.8 }), o = new Gt(new ji(0.42, 0.45, 1.2, 32), a);
    o.castShadow = true, this.bottle.add(o);
    const c = new sn({ color: 15255691, metalness: 0.92, roughness: 0.18 }), l = new Gt(new ji(0.24, 0.24, 0.4, 32), c);
    l.position.y = 0.75, l.castShadow = true, this.bottle.add(l), this.bottle.position.set(0, 0.8, 0), this.group.add(this.bottle);
    const h = [e, e, new Er({ map: t, roughness: 0.4, metalness: 0.35, clearcoat: 0.3 }), e, e, e], f = new Le(2.66, 0.4, 2.66);
    this.lid = new Gt(f, h), this.lid.castShadow = true, this.lidPivot = new ve(), this.lidPivot.position.set(0, 0.55, -1.33), this.lid.position.set(0, 0.2, 1.33), this.lidPivot.add(this.lid), this.group.add(this.lidPivot);
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), kt.to(this.lidPivot.rotation, { x: -Math.PI * 0.65, duration: 1.4, ease: "power3.out", onComplete: () => this.audio.playCardboardThud() }), kt.to(this.bottle.position, { y: 1.5, duration: 1.1, delay: 0.4, ease: "power2.out" }), kt.to(this.bottle.rotation, { y: Math.PI * 0.4, duration: 1.5, ease: "power1.out" })) : (this.audio.playPaperSlide(), kt.to(this.bottle.position, { y: 0.8, duration: 0.8, ease: "power2.in" }), kt.to(this.bottle.rotation, { y: 0, duration: 0.8 }), kt.to(this.lidPivot.rotation, { x: 0, duration: 1, delay: 0.3, ease: "power3.inOut", onComplete: () => this.audio.playClick() }));
  }
}
class tv {
  constructor(t) {
    this.audio = t, this.group = new ve(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = yi.createKraftTexture(1024, 1024, "#C9A37A"), e = yi.createWatercolorPage(0);
    yi.createWatercolorPage(1);
    const n = new sn({ map: t, roughness: 0.85, metalness: 0.05 }), i = new Gt(new Le(2.3, 0.08, 3.1), n);
    i.position.y = -0.15, i.castShadow = true, this.group.add(i);
    const s = new sn({ color: 16645111, roughness: 0.95 }), a = new Gt(new Le(2.2, 0.25, 3), s);
    a.position.y = 0.02, this.group.add(a);
    const o = new sn({ color: 6047544, roughness: 0.7 }), c = new Gt(new Le(0.12, 0.35, 3.12), o);
    c.position.set(-1.15, 0.02, 0), this.group.add(c), this.frontCoverPivot = new ve(), this.frontCoverPivot.position.set(-1.15, 0.16, 0);
    const l = new Gt(new Le(2.3, 0.08, 3.1), n);
    l.position.set(1.15, 0, 0), l.castShadow = true, this.frontCoverPivot.add(l), this.group.add(this.frontCoverPivot), this.pagePivot = new ve(), this.pagePivot.position.set(-1.12, 0.15, 0);
    const h = new sn({ map: e, roughness: 0.9 }), f = new Gt(new dn(2.2, 3), h);
    f.rotation.x = -Math.PI / 2, f.position.set(1.1, 0.01, 0), this.pagePivot.add(f), this.group.add(this.pagePivot);
    const u = new sn({ color: 11881014, roughness: 0.3, metalness: 0.2 });
    this.ribbon = new Gt(new Le(0.14, 0.04, 3.6), u), this.ribbon.position.set(0.3, 0.22, 0.3), this.group.add(this.ribbon);
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), kt.to(this.ribbon.position, { x: 1.8, duration: 0.8, ease: "power2.out" }), kt.to(this.frontCoverPivot.rotation, { z: Math.PI * 0.95, duration: 1.3, delay: 0.2, ease: "power3.out", onComplete: () => this.audio.playCardboardThud() }), kt.to(this.pagePivot.rotation, { z: Math.PI * 0.15, duration: 1, delay: 0.6, ease: "power2.out" })) : (this.audio.playPaperSlide(), kt.to(this.pagePivot.rotation, { z: 0, duration: 0.7, ease: "power2.in" }), kt.to(this.frontCoverPivot.rotation, { z: 0, duration: 1, delay: 0.3, ease: "power3.inOut", onComplete: () => this.audio.playCardboardThud() }), kt.to(this.ribbon.position, { x: 0.3, duration: 0.8, delay: 0.8, ease: "power2.out" }));
  }
}
class ev {
  constructor(t) {
    this.audio = t, this.group = new ve(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = yi.createKraftTexture(1024, 1024, "#C8A279"), e = new Er({ map: t, roughness: 0.75, metalness: 0.08, clearcoat: 0.05 }), n = new ji(1, 1.2, 3.2, 32, 1, false, 0, Math.PI * 2);
    n.scale(1.2, 1, 0.45), this.body = new Gt(n, e), this.body.castShadow = true, this.body.receiveShadow = true, this.group.add(this.body);
    const i = new sn({ color: 9860178, roughness: 0.85 });
    this.seal = new Gt(new Le(2.35, 0.35, 0.08), i), this.seal.position.y = 1.7, this.seal.castShadow = true, this.group.add(this.seal);
    const s = new ea(0.06, 0.12, 16), a = new Al({ color: 4863784 }), o = new Gt(s, a);
    o.rotation.z = Math.PI / 2, o.position.set(-1.18, 1.65, 0), this.group.add(o);
    const c = new sn({ color: 16447215, roughness: 0.6 }), l = new Gt(new Le(1.5, 1.8, 0.04), c);
    l.position.set(0, 0.1, 0.48), this.group.add(l), this.contents = new ve();
    for (let h = 0; h < 8; h++) {
      const f = new sn({ color: 5072454, roughness: 0.6 }), u = new Gt(new ea(0.12, 0.35, 8), f);
      u.position.set((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.3), this.contents.add(u);
    }
    this.contents.position.y = 1.2, this.contents.scale.set(1e-3, 1e-3, 1e-3), this.group.add(this.contents);
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playClick(), this.audio.playPaperSlide(), kt.to(this.seal.position, { y: 2.2, duration: 0.8, ease: "power2.out" }), kt.to(this.contents.scale, { x: 1, y: 1, z: 1, duration: 1, delay: 0.3, ease: "back.out(2)" }), kt.to(this.contents.position, { y: 2.4, duration: 1.2, ease: "power2.out" })) : (this.audio.playPaperSlide(), kt.to(this.contents.position, { y: 1.2, duration: 0.7, ease: "power2.in" }), kt.to(this.contents.scale, { x: 1e-3, y: 1e-3, z: 1e-3, duration: 0.5, ease: "power2.in" }), kt.to(this.seal.position, { y: 1.7, duration: 0.8, delay: 0.3, ease: "power2.inOut", onComplete: () => this.audio.playCardboardThud() }));
  }
}
class nv {
  constructor(t) {
    this.audio = t, this.group = new ve(), this.isUnboxed = false, this.build();
  }
  build() {
    const t = yi.createDielineTexture(), e = new sn({ map: t, roughness: 0.85, metalness: 0.05, side: Pn });
    this.centerBase = new Gt(new dn(2, 2), e), this.centerBase.rotation.x = -Math.PI / 2, this.centerBase.receiveShadow = true, this.group.add(this.centerBase), this.leftPivot = new ve(), this.leftPivot.position.set(-1, 0, 0);
    const n = new Gt(new dn(1.2, 2), e);
    n.rotation.x = -Math.PI / 2, n.position.set(-0.6, 0, 0), this.leftPivot.add(n), this.group.add(this.leftPivot), this.rightPivot = new ve(), this.rightPivot.position.set(1, 0, 0);
    const i = new Gt(new dn(1.2, 2), e);
    i.rotation.x = -Math.PI / 2, i.position.set(0.6, 0, 0), this.rightPivot.add(i), this.group.add(this.rightPivot), this.frontPivot = new ve(), this.frontPivot.position.set(0, 0, 1);
    const s = new Gt(new dn(2, 1.2), e);
    s.rotation.x = -Math.PI / 2, s.position.set(0, 0, 0.6), this.frontPivot.add(s), this.group.add(this.frontPivot), this.backPivot = new ve(), this.backPivot.position.set(0, 0, -1);
    const a = new Gt(new dn(2, 1.2), e);
    a.rotation.x = -Math.PI / 2, a.position.set(0, 0, -0.6), this.backPivot.add(a), this.topLidPivot = new ve(), this.topLidPivot.position.set(0, 0, -1.2);
    const o = new Gt(new dn(2, 2), e);
    o.rotation.x = -Math.PI / 2, o.position.set(0, 0, -1), this.topLidPivot.add(o), a.add(this.topLidPivot), this.group.add(this.backPivot);
  }
  unbox(t = true) {
    this.isUnboxed = t, t ? (this.audio.playPaperSlide(), kt.to(this.leftPivot.rotation, { z: -Math.PI / 2, duration: 1, ease: "power2.inOut" }), kt.to(this.rightPivot.rotation, { z: Math.PI / 2, duration: 1, ease: "power2.inOut" }), kt.to(this.frontPivot.rotation, { x: -Math.PI / 2, duration: 1, ease: "power2.inOut" }), kt.to(this.backPivot.rotation, { x: Math.PI / 2, duration: 1, ease: "power2.inOut", onComplete: () => this.audio.playCardboardThud() }), kt.to(this.topLidPivot.rotation, { x: -Math.PI / 2, duration: 1, delay: 0.6, ease: "power3.out" })) : (this.audio.playPaperSlide(), kt.to(this.topLidPivot.rotation, { x: 0, duration: 0.8, ease: "power2.in" }), kt.to(this.backPivot.rotation, { x: 0, duration: 1, delay: 0.3, ease: "power2.inOut" }), kt.to(this.frontPivot.rotation, { x: 0, duration: 1, delay: 0.3, ease: "power2.inOut" }), kt.to(this.leftPivot.rotation, { z: 0, duration: 1, delay: 0.3, ease: "power2.inOut" }), kt.to(this.rightPivot.rotation, { z: 0, duration: 1, delay: 0.3, ease: "power2.inOut", onComplete: () => this.audio.playCardboardThud() }));
  }
}
class iv {
  constructor(t) {
    this.canvas = t, this.autoRotate = true, this.wireframe = false, this.currentPackageIndex = 0, this.init(), this.setupAudio(), this.setupPackages(), this.setupEvents(), this.animate();
  }
  init() {
    this.scene = new id(), this.scene.background = new Vt("#F7F4EE"), this.camera = new pn(40, window.innerWidth / window.innerHeight, 0.1, 100), this.camera.position.set(0, 3.8, 6.8), this.renderer = new S0({ canvas: this.canvas, antialias: true, alpha: true, powerPreference: "high-performance" }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6)), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = xh, this.renderer.toneMapping = ml, this.renderer.toneMappingExposure = 1.15, this.controls = new E0(this.camera, this.canvas), this.controls.enableDamping = true, this.controls.dampingFactor = 0.05, this.controls.maxPolarAngle = Math.PI / 2 - 0.05, this.controls.minDistance = 3.5, this.controls.maxDistance = 12, this.controls.autoRotate = true, this.controls.autoRotateSpeed = 0.8, this.lighting = new Zx(this.scene);
  }
  setupAudio() {
    this.audio = new $x();
  }
  setupPackages() {
    this.packageContainer = new ve(), this.scene.add(this.packageContainer), this.packages = [new Jx(this.audio), new Qx(this.audio), new tv(this.audio), new ev(this.audio), new nv(this.audio)], this.activePackage = this.packages[0], this.packageContainer.add(this.activePackage.group);
  }
  selectPackage(t) {
    if (t === this.currentPackageIndex) return;
    this.currentPackageIndex = t;
    const e = this.packages[t];
    this.audio.playPaperSlide(), kt.to(this.activePackage.group.scale, { x: 1e-3, y: 1e-3, z: 1e-3, duration: 0.4, ease: "power2.in", onComplete: () => {
      this.packageContainer.remove(this.activePackage.group), this.activePackage = e, this.activePackage.group.scale.set(1e-3, 1e-3, 1e-3), this.packageContainer.add(this.activePackage.group), kt.to(this.activePackage.group.scale, { x: 1, y: 1, z: 1, duration: 0.6, ease: "back.out(1.6)" });
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
    kt.to(this.camera.position, { x: 0, y: 3.8, z: 6.8, duration: 1, ease: "power2.inOut", onUpdate: () => this.controls.update() });
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
const rv = [{ cat: "Food & Gourmet Packaging", title: "Artisan Organic Infusion Box", titleAr: "\u062A\u0635\u0645\u064A\u0645 \u062A\u063A\u0644\u064A\u0641 \u0639\u0628\u0648\u0629 \u0623\u063A\u0630\u064A\u0629 \u0641\u0627\u062E\u0631\u0629", desc: "A custom structural drawer packaging featuring a slide-out rigid tray, botanical watercolor illustration sleeve, and warm terracotta color harmony. Engineered for premium shelf appeal and food-grade compliance.", stock: "350 GSM Natural Kraft + Ivory Board", finishing: "Soft Touch Matte + Spot UV Details", structure: "Sleeve & Drawer Tray (Sliding Box)", role: "Die-cut Layout & Visual Identity" }, { cat: "Luxury Cosmetic & Fragrance", title: "Royal Essence Rigid Gift Box", titleAr: "\u0639\u0644\u0628\u0629 \u0647\u062F\u0627\u064A\u0627 \u0648\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0645\u0644\u0643\u064A\u0629 \u0641\u0627\u062E\u0631\u0629", desc: "Premium two-piece clamshell box with magnetic flap closure, stamped with hot gold foil geometric framing. Houses an interior custom molded velvet insert and luxury glass essence bottle.", stock: "1200 GSM Greyboard + Matte Black Art Paper", finishing: "Hot Stamped Gold Foil + Embossed Crest", structure: "Magnetic Hinged Rigid Box", role: "Packaging Engineering & Luxury Branding" }, { cat: "Handmade Craft & Binding", title: "Artisan Watercolor Sketchbook", titleAr: "\u062F\u0641\u062A\u0631 \u0648\u0645\u0641\u0643\u0631\u0629 \u0643\u0627\u0646\u0633\u0648\u0646 \u0645\u0635\u0646\u0648\u0639\u0629 \u064A\u062F\u0648\u064A\u0627\u064B", desc: "Handcrafted notebook featuring hand-bound stitched spine, pure natural kraft hardcover, silk ribbon bookmark, and 300gsm cold-pressed watercolor paper containing original floral artworks.", stock: "300 GSM Heavy Watercolor Cold-Press Paper", finishing: "Exposed Hand-Sewn Thread Binding + Silk Ribbon", structure: "Hand-Bound Hardcover Book", role: "Bookbinding Artisan & Watercolor Painting" }, { cat: "Eco-Friendly Flexible Packaging", title: "Botanical Kraft Stand-Up Pouch", titleAr: "\u0643\u064A\u0633 \u0643\u0631\u0627\u0641\u062A \u0635\u062F\u064A\u0642 \u0644\u0644\u0628\u064A\u0626\u0629 \u0645\u0639 \u0642\u0641\u0644 \u0633\u062D\u0627\u0628", desc: "Sustainable stand-up flexible pouch (Doypack) crafted from biodegradable kraft paper with moisture barrier lining, laser-scored tear notches, and elegant minimalist botanical branding.", stock: "Multi-layer Recyclable Barrier Kraft Paper", finishing: "Eco-Matte Finish + Direct Plant Inks", structure: "Stand-Up Gusset Pouch with Zip-Lock", role: "Sustainable Packaging Design" }, { cat: "Industrial Structural Design", title: "Auto-Folding Dieline Template", titleAr: "\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0625\u0641\u0631\u0627\u062F \u0627\u0644\u0647\u0646\u062F\u0633\u064A \u0648\u0627\u0644\u0637\u064A \u0627\u0644\u0630\u0627\u062A\u064A", desc: "Precision packaging dieline with technical crease and cut markings, glue tabs, and tuck-in flaps. Demonstrates how a 2D flat cardboard die-cut transforms mathematically into a solid retail package.", stock: "380 GSM Solid Bleached Sulfate (SBS)", finishing: "Technical Proofing & Die-cut Calibration", structure: "Reverse Tuck End (RTE) Folding Carton", role: "CAD Structural Packaging Design" }];
window.addEventListener("DOMContentLoaded", () => {
  const r16 = document.getElementById("webgl"), t = new iv(r16), e = document.getElementById("btnUnbox"), n = document.getElementById("unboxBtnText"), i = document.getElementById("unboxBtnSub"), s = document.getElementById("btnRotate"), a = document.getElementById("btnLight"), o = document.getElementById("btnWireframe"), c = document.getElementById("btnReset"), l = document.getElementById("btnAudio"), h = document.querySelectorAll(".package-card"), f = document.getElementById("projectDrawer"), u = document.getElementById("btnProjectDetails"), p = document.getElementById("btnCloseDrawer"), _ = document.getElementById("aboutModal"), g = document.getElementById("btnAbout"), d = document.getElementById("btnCloseModal");
  function m(b) {
    const A = rv[b];
    document.getElementById("drawerCat").textContent = A.cat, document.getElementById("drawerTitle").textContent = A.title, document.getElementById("drawerTitleAr").textContent = A.titleAr, document.getElementById("drawerDesc").textContent = A.desc, document.getElementById("specStock").textContent = A.stock, document.getElementById("specFinishing").textContent = A.finishing, document.getElementById("specStructure").textContent = A.structure, document.getElementById("specRole").textContent = A.role;
  }
  h.forEach((b) => {
    b.addEventListener("click", () => {
      const A = parseInt(b.dataset.index);
      h.forEach((w) => w.classList.remove("active")), b.classList.add("active"), t.selectPackage(A), m(A), n.textContent = A === 4 ? "Fold into 3D" : "Unbox Package", i.textContent = A === 4 ? "Click to fold cardboard" : "Click to reveal inner craft";
    });
  }), e.addEventListener("click", () => {
    const b = t.toggleUnbox(), A = t.currentPackageIndex === 4;
    b ? (n.textContent = A ? "Unfold to Flat" : "Close Package", i.textContent = A ? "Click to expand 2D net" : "Click to close lid") : (n.textContent = A ? "Fold into 3D" : "Unbox Package", i.textContent = A ? "Click to fold cardboard" : "Click to reveal inner craft");
  }), s.addEventListener("click", () => {
    const b = t.toggleAutoRotate();
    s.classList.toggle("active", b);
  });
  const M = ["warm", "daylight", "golden"];
  let T = 0;
  a.addEventListener("click", () => {
    T = (T + 1) % M.length, t.setLighting(M[T]);
  }), o.addEventListener("click", () => {
    const b = t.toggleWireframe();
    o.classList.toggle("active", b);
  }), c.addEventListener("click", () => {
    t.resetCamera();
  });
  let y = true;
  l.addEventListener("click", () => {
    y = !y, t.audio.enabled = y, l.style.opacity = y ? "1" : "0.4";
  }), u.addEventListener("click", () => {
    f.classList.add("open");
  }), p.addEventListener("click", () => {
    f.classList.remove("open");
  }), g.addEventListener("click", () => {
    _.classList.add("open");
  }), d.addEventListener("click", () => {
    _.classList.remove("open");
  }), _.addEventListener("click", (b) => {
    b.target === _ && _.classList.remove("open");
  }), m(0);
});
