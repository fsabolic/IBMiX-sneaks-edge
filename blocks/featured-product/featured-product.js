
import { getProductHTML, getRandomProduct } from '../../scripts/productAPI.js';
export default async function decorate(block) {
  let product = await getRandomProduct();
  
  console.log(product);
  let productHTML = getProductHTML(product);
  console.log(productHTML);
  //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(productHTML);
}
