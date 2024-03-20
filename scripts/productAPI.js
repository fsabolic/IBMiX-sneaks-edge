export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const product = await response.json();
  return product;
}

export async function getProducts(limit) {
  const response = await fetch("https://fakestoreapi.com/products?limit=" + limit);
  const products = await response.json();
  return products;
}

export async function getRandomProduct(limit) {
  const response = await fetch("https://fakestoreapi.com/products/" + Math.abs(Math.random()%20+1));
  const products = await response.json();
  return products;
}

