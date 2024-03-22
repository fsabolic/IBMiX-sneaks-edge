
import { getProductHTML, getRandomProduct } from '../../scripts/productAPI.js';
export default async function decorate(block) {
  let product = await getRandomProduct();
  let productHTML = getProductHTML(product);
  block.textContent = '';
  block.append(productHTML);
}
