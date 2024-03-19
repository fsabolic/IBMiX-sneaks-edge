export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  console.log(await response.json());
}

export async function getProducts(limit) {
  const response = await fetch("https://fakestoreapi.com/products?limit="+limit);
  console.log(await response.json());
}

export async function getRandomProduct() {
  const response = await fetch("https://fakestoreapi.com/products/"+Math.abs(Math.random()%20));
  console.log(await response.json());
}

