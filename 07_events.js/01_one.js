document.querySelector("#images").addEventListener("click", function (img) {
    if (img.target.tagName === 'IMG') {
        let delImg = img.target.parentNode
        // console.log(delImg);
        delImg.remove()
    }
console.log();
clg
    

}, false)