import { getProductHTML, getProducts } from '../../scripts/productAPI.js';

export default async function decorate(block) {
  const numberOfProducts = block.children[0].children[0].innerHTML;
  const products = await getProducts(numberOfProducts);
  
  const ul = document.createElement('ul');
  products.forEach((product) => {
    constructProduct(product, ul);
  });
  block.textContent = '';
  block.append(ul);
}

function constructProduct(product, ul) {
  const li = document.createElement('li');

  const productHTML = getProductHTML(product);
  li.append(productHTML);
  ul.append(li);
}




