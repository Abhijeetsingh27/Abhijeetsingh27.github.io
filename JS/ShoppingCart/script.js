let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
];

const productListDiv = document.getElementById("product-list");
const cartListDiv = document.getElementById("cart-list");
const orderValueEl = document.getElementById("order-value");

const showProducts = () => {
  productListDiv.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      ${product.name} - ₹${product.price}
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productListDiv.appendChild(div);
  });
};

const showCart = () => {
  cartListDiv.innerHTML = "";
  products.forEach((product) => {
    const qty = cart[product.id] || 0;
    if (qty > 0) {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        ${product.name} - ₹${product.price} × ${qty} = ₹${qty * product.price}
        <div>
          <button onclick="decrement(${product.id})">-</button>
          <button onclick="increment(${product.id})">+</button>
        </div>
      `;
      cartListDiv.appendChild(div);
    }
  });
  const total = products.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0);
  orderValueEl.innerText = `Your total order value = ₹${total}`;
};

const addToCart = (id) => {
  cart = { ...cart, [id]: 1 };
  showCart();
};

const increment = (id) => {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
  showCart();
};

const decrement = (id) => {
  if (cart[id] > 1) {
    cart = { ...cart, [id]: cart[id] - 1 };
  } else {
    delete cart[id];
  }
  showCart();
};

showProducts();
showCart();
