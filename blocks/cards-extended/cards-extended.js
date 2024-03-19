import { createOptimizedPicture } from '../../scripts/aem.js';
import { getAllProducts } from '../../scripts/productAPI.js';

export default async function decorate(block) {
  const numberOfProducts = block.children[0].children[0].innerHTML;
  const response = await fetch("https://fakestoreapi.com/products?limit="+numberOfProducts);
  const products = await response.json();
  console.log(products);
  
  /* change to ul, li */
  const ul = document.createElement('ul');
  products.forEach((product) => {
    const li = document.createElement('li');
    
    const productHTML = document.createElement('div');
    productHTML.classList.add('product');

    const productImage = document.createElement('image');
    productImage.classList.add('product-image');
    productImage.setAttribute('src',product["image"]);
    productHTML.append(productImage);

    const productTitle = document.createElement('p');
    productTitle.classList.add('product-title');
    productTitle.textContent = product["title"];
    productHTML.append(productTitle);

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    
    productDescription.textContent = product["description"];
    if(product["description"].lenght>50){
      
    productDescription.textContent = product["description"].substring(0,50);
    }
    productHTML.append(productDescription);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = product["price"];
    productHTML.append(productPrice);
    li.append(productHTML);
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
