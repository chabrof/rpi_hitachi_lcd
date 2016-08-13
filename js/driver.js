var wpi = require("wiring-pi");
wpi.wiringPiSetupGpio();
wpi.pinMode(21, wpi.OUTPUT);
var value = wpi.HIGH;
var pin = 21;
setInterval(function () {
    wpi.digitalWrite(pin, value);
    value = +!value;
}, 500);
//# sourceMappingURL=driver.js.map