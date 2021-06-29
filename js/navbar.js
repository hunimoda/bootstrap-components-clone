function addEventListenerToAll(event, eventHandler, targets) {
    for (let i = 0; i < targets.length; i++)
        targets[i].addEventListener(event, eventHandler);
}

function onTopNavbarAnchorClick(event) {
    event.preventDefault();

    const currentLi = event.currentTarget.parentElement;
    if (currentLi.classList.contains(ACTIVE))
        return;

    const allLis = currentLi.parentElement.getElementsByTagName('li');
    // remove 'active' from all li(s)
    for (let i = 0; i < allLis.length; i++)
        allLis[i].classList.remove(ACTIVE);

    currentLi.classList.add(ACTIVE);
}

function sideNavbarToggle(event) {
    const sideNavbar = document.querySelector('.side-navbar__container .side-navbar');
    const content = document.querySelector('.side-navbar__container .page-content');
    const screenMask = document.querySelector('.side-navbar__container .screen-mask');

    sideNavbar.classList.toggle(ACTIVE);
    content.classList.toggle(ACTIVE);
    screenMask.classList.toggle(ACTIVE);
}

function mainApp() {
    const topNavbarAnchors = document.querySelectorAll('.top-navbar a');
    addEventListenerToAll('click', onTopNavbarAnchorClick, topNavbarAnchors);

    const sideNavbarOpener = document.querySelector('.side-navbar__container .fa-bars');
    sideNavbarOpener.addEventListener('click', sideNavbarToggle);
    const sideNavbarScreenMask = document.querySelector('.side-navbar__container .screen-mask');
    sideNavbarScreenMask.addEventListener('click', sideNavbarToggle);
}
mainApp();