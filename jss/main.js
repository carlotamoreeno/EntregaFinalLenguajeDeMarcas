var layer1 = document.getElementById("layer1")
scroll = window.pageYOffset;
document.addEventListener("scroll",
 function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll) + "%";
});