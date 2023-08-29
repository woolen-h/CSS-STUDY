// 홈 이미지 영역
const homeImage = document.querySelector("#homeImg");
// travel 메뉴
const travel = document.querySelector("#travel");
// art 메뉴
const art = document.querySelector("#art");
// design 메뉴
const design = document.querySelector("#design");
// style 메뉴
const style = document.querySelector("#style");
// cityGuide 메뉴
const cityGuide = document.querySelector("#cityGuide");
// films 메뉴
const films = document.querySelector("#films");
// playlist 메뉴
const playlist = document.querySelector("#playlist");
// shop 메뉴
const shop = document.querySelector("#shop");

travel.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/Patagonia12-1250x833.jpg')";
});

art.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/Les-Palmiers1-1250x833.jpg')";
});

design.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/KFM-landscape1_edit-1250x833.jpg')";
});

style.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/Cartier-4-1250x833.jpg')";
});

cityGuide.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/JGFrancis_OP2019_M1_DAY3C_CANYON_0021-1250x833.jpg')";
});

films.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/00009951008-2-1250x833.jpg')";
});

playlist.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/Summer-playlist-grid-1250x833.jpg')";
});

shop.addEventListener("mouseover", function () {
    homeImage.style.backgroundImage = "url('/src/img/Home-1250x833.jpg')";
});