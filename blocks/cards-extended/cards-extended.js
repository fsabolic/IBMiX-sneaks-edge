import { createOptimizedPicture } from '../../scripts/aem.js';
import { getProductHTML, getProducts } from '../../scripts/productAPI.js';
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

  const productHTML = getProductHTML(product);
  li.append(productHTML);
  ul.append(li);
}

