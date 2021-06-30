const OPEN = 'open';

const searchBox = document.querySelector('.search-box');
const searchInput = searchBox.querySelector('input');
const searchBtn = searchBox.querySelector('.search-btn');

const swingSearch = document.querySelector('.swing-search');
const swingSearchInput = swingSearch.querySelector('input');

function onSearchBtnClick(event) {
    searchBox.classList.add(OPEN);
    searchInput.focus();
}

function onSearchInputFocusOut(event) {
    searchBox.classList.remove(OPEN);
}

function onSwingSearchMouseEnter(event) {
    swingSearchInput.focus();
}

function mainApp() {
    searchBtn.addEventListener('click', onSearchBtnClick);
    searchInput.addEventListener('focusout', onSearchInputFocusOut);

    swingSearch.addEventListener('mouseenter', onSwingSearchMouseEnter);
}
mainApp();