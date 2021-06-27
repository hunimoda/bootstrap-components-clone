// constants
const ACTIVE = 'active';
const MODAL_MAKE_GRAY = 'modal--make-gray';

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

function onPlaceImgMouseEnter(event) {
    // remove ACTIVE from all LIs
    const placeImgLis = event.target.parentElement.getElementsByTagName('li');
    for (let i = 0; i < placeImgLis.length; i++)
        placeImgLis[i].classList.remove(ACTIVE);

    // add ACTIVE to current place image tab
    event.target.classList.add(ACTIVE);

    // remove ACTIVE from all content divs
    const contentDivs = document.querySelectorAll('.tab-three__content > div');
    for (let i = 0; i < contentDivs.length; i++)
        contentDivs[i].classList.remove(ACTIVE);

    // add ACTIVE to the content with corresponding id
    const currentID = event.target.id + '-tab';
    const contentToBeShown = document.getElementById(currentID);
    contentToBeShown.classList.add(ACTIVE);

    // remove ACTIVE from all modals
    const modals = document.querySelectorAll('.tab-three__content .modal--img-top');
    for (let i = 0; i < modals.length; i++)
        modals[i].classList.remove(ACTIVE);

    // add ACTIVE to all question marks
    const qMarks = document.querySelectorAll('.tab-three__content .question-mark-circle');
    for (let i = 0; i < qMarks.length; i++)
        qMarks[i].classList.add('active');

    // restore all bg images
    const bgImages = document.querySelectorAll('.tab-three__content > div > img');
    for (let i = 0; i < bgImages.length; i++)
        bgImages[i].classList.remove(MODAL_MAKE_GRAY);
}

function onPlaceImgQMarkClick(event) {
    // hide the question mark
    const qMarkSpan = event.currentTarget;
    qMarkSpan.classList.remove(ACTIVE);

    // show the modal
    const currentModal = document.querySelector('.tab-three__content > .active .modal--img-top');
    currentModal.classList.add(ACTIVE);

    // make the background gray
    const bgImage = qMarkSpan.parentElement.querySelector('img');
    bgImage.classList.add(MODAL_MAKE_GRAY);
}

function onPlaceImgModalExitClick(event) {
    const currentModal = event.target.parentElement;
    currentModal.classList.remove(ACTIVE);
    
    const qMark = document.querySelector('.tab-three__content > div.active .question-mark-circle');
    qMark.classList.add(ACTIVE);

    // restore bg image
    const bgImage = qMark.parentElement.querySelector('img');
    bgImage.classList.remove(MODAL_MAKE_GRAY);
}

function mainApp() {
    const tabLinks = document.querySelectorAll('nav.tab-two__links ul li');
    for (let i = 0; i < tabLinks.length; i++)
        tabLinks[i].addEventListener('click', onTabLinkClick);

    const placeImgLis = document.querySelectorAll('.tab-three__links li');
    for (let i = 0; i < placeImgLis.length; i++)
        placeImgLis[i].addEventListener('mouseenter', onPlaceImgMouseEnter);

    const placeImgQuestionMarks = document.querySelectorAll('.tab-three__content .question-mark-circle');
    for (let i = 0; i < placeImgQuestionMarks.length; i++)
        placeImgQuestionMarks[i].addEventListener('click', onPlaceImgQMarkClick);
    
    const placeImgModalExits = document.querySelectorAll('.tab-three__content .modal__exit');
    for (let i = 0; i < placeImgModalExits.length; i++)
        placeImgModalExits[i].addEventListener('click', onPlaceImgModalExitClick);
}
mainApp();