window.onload = () => {
  const baseUrl = window.location.href.split("/").slice(0, -1).join("/");

  document.getElementById("sub").addEventListener("click", (e) => {
    e.preventDefault();

    const inp = document.getElementById("textinp").value;

    if (inp) {
      fetch(`${baseUrl}/getHash`, {
        method: "POST",
        body: JSON.stringify({
          text: inp,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ hashes }) => {
          document.getElementById("hashes").innerHTML = `
          <h3 class="text-gray-900 font-bold">MD5: ${hashes.md5}</h3>
          <h3 class="text-gray-900 font-bold">SHA1: ${hashes.sha1}</h3>
          <h3 class="text-gray-900 font-bold">SHA256: ${hashes.sha256}</h3>
          <h3 class="text-gray-900 font-bold">SHA512: ${hashes.sha512}</h3>
          `;
        });
    }
  });
};
