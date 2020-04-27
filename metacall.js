#!/usr/bin/env node

const crypto = require("crypto");

/**
 * Function getHash
 * Returns hashes of the param text
 * @param {String} text
 */
function getHash(text) {
  const hashes = {
    md5: crypto.createHash("md5").update(text).digest("hex"),
    sha1: crypto.createHash("sha1").update(text).digest("hex"),
    sha256: crypto.createHash("sha256").update(text).digest("hex"),
    sha512: crypto.createHash("sha512").update(text).digest("hex"),
  };

  return { hashes };
}

/**
 * Export the functions
 */
module.exports = { getHash };
