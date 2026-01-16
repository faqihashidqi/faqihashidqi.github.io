const phone = "6281234567890"; // ganti nomor WA kamu

const products = [
  { name: "MEVVA", price: "Rp 150.000", image: "mevva.jpg" },
  { name: "X-MOOD", price: "Rp 150.000", image: "xmood.jpg" },
  { name: "REXTASE", price: "Rp 150.000", image: "rextase.jpg" }
];

const list = document.getElementById("productList");

products.forEach(p => {
  const msg = encodeURIComponent(
    `Halo, saya mau pesan:\n${p.name}\nHarga: ${p.price}`
  );

  list.innerHTML += `
    <div class="product-card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a class="btn" href="https://wa.me/${phone}?text=${msg}">
        Order via WhatsApp
      </a>
    </div>
  `;
});