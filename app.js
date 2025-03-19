var on_fan = document.getElementById("fanon");
var off_fan = document.getElementById("fanoff");
var fan = document.getElementById("fan");
function fan_on() {
    fan.classList.add("rotate");
}
function fan_off() {
    fan.classList.remove("rotate");
}