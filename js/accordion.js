// const accBtn = document.getElementsByClassName('accordion');

// function onAccBtnClick() {
//     this.classList.toggle('active');
//     const panel = this.nextElementSibling;
//     panel.classList.toggle('pannel--shown')
// }

// for (let i = 0; i < accBtn.length; i++)
//     accBtn[i].addEventListener('click', onAccBtnClick);


function onAcc3TitleClick() {
    if (!this.parentElement.classList.contains('accordion-3__item--selected')) {
        const items = this.parentElement.parentElement.querySelectorAll('.accordion-3__item');
        console.log(items);
        for (let i = 0; i < items.length; i++)
            if (items[i].classList.contains('accordion-3__item--selected')) {
                items[i].classList.remove('accordion-3__item--selected');
                break;
            }
        this.parentElement.classList.add('accordion-3__item--selected');
    }
}

function onAcc4HeaderClick() {
    const father = this.parentElement;
    const grandFather = father.parentElement;

    for (let i = 0; i < grandFather.children.length; i++)
        grandFather.children[i].classList.add('accordion-4__item--hidden');
    father.classList.remove('accordion-4__item--hidden')
}

function mainApp() {
    const accTitles = document.querySelectorAll('.accordion-3__title');
    for (let i = 0; i < accTitles.length; i++)
        accTitles[i].addEventListener('click', onAcc3TitleClick);

    const acc4Headers = document.querySelectorAll('.item__header');
    for (let i = 0; i < acc4Headers.length; i++)
        acc4Headers[i].addEventListener('click', onAcc4HeaderClick);
}
mainApp();