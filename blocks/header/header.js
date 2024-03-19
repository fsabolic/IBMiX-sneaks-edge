import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['logo','brand','links'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });


  let navLogo = nav.querySelector('.nav-logo');
  let navBrand = nav.querySelector('.nav-brand');
  let navLinks = nav.querySelector('.nav-links');

  removeButtonClass(navLogo);
  removeButtonClass(navBrand);
  removeButtonClass(navLinks);	

  const companyLook = document.createElement('div');
  companyLook.className = 'company-look';
  companyLook.append(navBrand);
  companyLook.append(navLinks);


  nav.append(navLogo);
  nav.append(companyLook);
  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}

function removeButtonClass(element){
  while(element.querySelector('.button')) {
    let link = element.querySelector('.button');
    if (link) {
      link.className = '';
      link.closest('.button-container').className = '';
    }
  }
}