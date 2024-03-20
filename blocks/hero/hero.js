export default function decorate(block) {
    let buttonsHTML = document.createElement('div');
    buttonsHTML.classList.add('siblings-hero');
    let buttons = block.querySelectorAll('.button-container');
    buttons.forEach(element => {
        element.classList.add('button-hero');
        buttonsHTML.append(element);
    });
    console.log(buttonsHTML);
    block.append(buttonsHTML);

}
