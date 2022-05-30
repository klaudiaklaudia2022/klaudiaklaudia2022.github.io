
(function(){

const mainBtn = document.querySelector(".main-btn");
const hexValue = document.querySelector(".hex-value");

mainBtn.addEventListener("click", () => {
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    let randomColor = "#";
    for(let i = 0; i < 6; i++) {
        randomColor += hexArr[Math.floor(Math.random() * hexArr.length)];
    }

    document.body.style.background= randomColor;
    hexValue.textContent = randomColor;
});


})();


