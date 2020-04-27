const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function getHash(text) {
  const hashes = {
    md5: crypto.createHash("md5").update(text).digest("hex"),
    sha1: crypto.createHash("sha1").update(text).digest("hex"),
    sha256: crypto.createHash("sha256").update(text).digest("hex"),
    sha512: crypto.createHash("sha512").update(text).digest("hex"),
  };

  return { hashes };
}

function index() {
  return fs.readFileSync(path.join(__dirname, "./static/index.html"));
}
