function getRandom(istart, iend) {
    var iChoice = istart - iend + 1;
    //return parseInt(10 * Math.random());
    //return parseInt(Math.random() * iChoice + iend);
    return Math.floor(Math.random() * iChoice + iend);
    
}

function showRandom() {
    var iArray = [];
    for (var i = 0; i < 10; i++) {
        iArray.push(getRandom(10, 100));
    }

    iArray.sort();
    //iArray.sort(function (a, b) {
    //    return a - b;
    //});
    document.getElementById("randomVal").innerHTML = iArray;
}
