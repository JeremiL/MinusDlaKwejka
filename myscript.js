var y = document.getElementsByClassName('votes');
Array.prototype.slice.call(y).forEach(function (entry) {
    if (entry.childElementCount === 2) {
        var minus = entry.firstElementChild.cloneNode(true);
        minus.setAttribute("data-type", "down");
        minus.setAttribute("class", "vt minus");
        entry.appendChild(minus);
    }
});