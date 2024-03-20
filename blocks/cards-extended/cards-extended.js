import { createOptimizedPicture } from '../../scripts/aem.js';
import { getProducts } from '../../scripts/productAPI.js';
import { getAllProducts } from '../../scripts/productAPI.js';

export default async function decorate(block) {
  const numberOfProducts = block.children[0].children[0].innerHTML;
  const products = await getProducts(numberOfProducts);
  
  const ul = document.createElement('ul');
  products.forEach((product) => {
    constructProduct(product, ul);
  });
  //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}

function constructProduct(product, ul) {
  const li = document.createElement('li');

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
  productPrice.textContent = product["price"];
  productHTML.append(productPrice);  
  
  const productButtonCont = document.createElement('p');
  productButtonCont.classList.add('button-container');
  const productLink = document.createElement('a');
  productLink.textContent = 'Buy Now';
  productLink.setAttribute('href','n/a');
  productLink.classList.add('button');
  productButtonCont.append(productLink);
  productHTML.append(productButtonCont);
  li.append(productHTML);
  ul.append(li);
}

