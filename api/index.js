// api/index.js - Obfuscated version (strong obfuscation, same behavior)

export const config = { runtime: "edge" };

// ---- junk code & noise start ----
const _0x9a2b3c = (function() {
  let _ = 0x7e3d;
  for (let i = 0; i < 3; i++) _ = (_ << 2) ^ 0x9a2b;
  return _;
})();
function _0x4d5e6f(_x) {
  let _y = 0;
  for (let _i = 0; _i < _x.length; _i++) _y += _x.charCodeAt(_i);
  return _y % 0x7f;
}
const _0x1a2b3c = [null, undefined, false, true, 42, "junk"];
const _0x7f8e9d = (function() {
  let arr = [];
  for (let i = 0; i < 10; i++) arr.push(i * i);
  return arr.reduce((a, b) => a + b, 0);
})();
// ---- junk code end ----

const _0x3f2a1c = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");

const _0x2b4d6e = new Set([
  (function() { let a = "host"; return a; })(),
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "forwarded",
  (() => { let x = "x-forwarded-host"; return x; })(),
  (() => { let y = "x-forwarded-proto"; return y; })(),
  (() => { let z = "x-forwarded-port"; return z; })()
]);

// helper to add more junk
function _0x9c8d7e(_input) {
  let _res = [];
  for (let _i = 0; _i < _input.length; _i++) {
    _res.push(_input.charCodeAt(_i) ^ 0x1f);
  }
  return String.fromCharCode(..._res);
}
const _ERROR_MSG_500 = "TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"; // base64 of "Misconfigured: TARGET_DOMAIN is not set"
const _ERROR_MSG_502 = "QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ"; // base64 of "Bad Gateway: Tunnel Failed"

function _0x2f3a4b(_str) {
  return Buffer.from(_str, 'base64').toString();
}

export default async function _0x7e6d5c(_req) {
  // junk computations
  let _junk1 = [1,2,3].map(x => x * 2).reduce((a,b) => a + b, 0);
  let _junk2 = (function() { let s = 0; for(let i=0;i<100;i++) s+=i; return s; })();
  if (_junk1 && _junk2) {
    // do nothing
  }

  if (!_0x3f2a1c) {
    // decode error message
    return new Response(_0x2f3a4b(_ERROR_MSG_500), { status: 500 });
  }

  try {
    // extract path from url
    const _pathStart = _req.url.indexOf("/", 8);
    let _targetUrl;
    if (_pathStart === -1) {
      _targetUrl = _0x3f2a1c + "/";
    } else {
      _targetUrl = _0x3f2a1c + _req.url.slice(_pathStart);
    }

    const _headersOut = new Headers();
    let _clientIp = null;

    // iterate headers with junk inside
    for (let _entry of _req.headers) {
      const _k = _entry[0];
      const _v = _entry[1];

      // junk: compute useless hash
      let _hash = 0;
      for (let _ch of _k) _hash = ((_hash << 5) - _hash) + _ch.charCodeAt(0);

      if (_0x2b4d6e.has(_k)) continue;
      if (_k.startsWith("x-vercel-")) continue;
      if (_k === "x-real-ip") {
        _clientIp = _v;
        continue;
      }
      if (_k === "x-forwarded-for") {
        if (!_clientIp) _clientIp = _v;
        continue;
      }
      _headersOut.set(_k, _v);
    }

    if (_clientIp) _headersOut.set("x-forwarded-for", _clientIp);

    const _method = _req.method;
    const _hasBody = !(_method === "GET" || _method === "HEAD");

    // junk promise that resolves immediately
    await Promise.resolve(true);

    const _fetchOpts = {
      method: _method,
      headers: _headersOut,
      body: _hasBody ? _req.body : undefined,
      duplex: "half",
      redirect: "manual"
    };

    // extra junk: fake fetch wrapper
    let _fake = false;
    if (typeof _fetchOpts.duplex === "string" && _fake === false) {
      // nothing
    }

    return await fetch(_targetUrl, _fetchOpts);
  } catch (_err) {
    console.error("relay error:", _err);
    // junk: simulate extra logging
    let _junkErr = { code: 0xdead, msg: _err.message };
    _junkErr.code += 1;
    return new Response(_0x2f3a4b(_ERROR_MSG_502), { status: 502 });
  }
    }
