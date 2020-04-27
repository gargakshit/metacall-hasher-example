const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.json());

app.use(express.static("static"));

app.post("/getHash", (req, res) => {
  const { text } = req.body;

  const hashes = {
    md5: crypto.createHash("md5").update(text).digest("hex"),
    sha1: crypto.createHash("sha1").update(text).digest("hex"),
    sha256: crypto.createHash("sha256").update(text).digest("hex"),
    sha512: crypto.createHash("sha512").update(text).digest("hex"),
  };

  res.json({ hashes });
});

app.listen(3000, () => console.log("Server ready on :3000"));
