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
  const response = await fetch("https://fakestoreapi.com/products/"+(Math.abs(Math.ceil((Math.random()*10000))%20+1)).toString());
  const products = await response.json();
  return products;
}

export function getProductHTML(product){
  const productHTML = document.createElement('div');
  productHTML.classList.add('product');

  const productPicture = document.createElement('picture');
  const productImage = document.createElement('img');
  productImage.classList.add('product-image');
  productImage.setAttribute('src', "" + product.image + "");
  productPicture.append(productImage);
  productHTML.append(productPicture);

  const productTitle = document.createElement('p');
  productTitle.classList.add('product-title');
  productTitle.textContent = product["title"];
  productHTML.append(productTitle);
/*
  const productDescription = document.createElement('p');
  productDescription.classList.add('product-description');

  productDescription.textContent = product["description"];
  
  productHTML.append(productDescription);
*/

  const productPrice = document.createElement('p');
  productPrice.classList.add('product-price');
  productPrice.textContent = product.price;

  productHTML.append(productPrice);  
  
  const productButtonCont = document.createElement('p');
  productButtonCont.classList.add('button-container');
  const productLink = document.createElement('a');
  productLink.textContent = 'Buy Now';
  productLink.setAttribute('href','n/a');
  productLink.classList.add('button');
  productButtonCont.append(productLink);
  productHTML.append(productButtonCont);
  return productHTML;
}