// constants
const ACTIVE = 'active';

function onTabLinkClick(event) {
    const tabLinkLi = event.target;
    const tabLinkLis = tabLinkLi.parentElement.querySelectorAll('li');
    for (let i = 0; i < tabLinkLis.length; i++)
        tabLinkLis[i].classList.remove(ACTIVE);

    const tabContentForm = document.getElementById(event.target.id + '-tab');
    const tabContentForms = tabContentForm.parentElement.querySelectorAll('form');
    for (let i = 0; i < tabContentForms.length; i++)
        tabContentForms[i].classList.remove(ACTIVE);

    tabLinkLi.classList.add(ACTIVE);
    tabContentForm.classList.add(ACTIVE);
}

function mainApp() {
    const tabLinks = document.querySelectorAll('nav.tab-two__links ul li');
    for (let i = 0; i < tabLinks.length; i++)
        tabLinks[i].addEventListener('click', onTabLinkClick);
}
mainApp();