function isKeyPressed(event) {
    var text = "";
    if (event.shiftKey == 1) {
        text = "BONK!";
    }
    document.getElementById("shift").innerHTML = text;
}
