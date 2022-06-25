function isKeyPressed(event) {
    var text = "";
    if (event.shiftKey == 1) {
        text = "WOW!";
    }
    document.getElementById("shift").innerHTML = text;
}
