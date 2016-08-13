///<reference path='wiring_pi.d.ts' />
declare var require: any
let wpi: WiringPi = require("wiring-pi")

wpi.wiringPiSetupGpio()
wpi.pinMode(21, wpi.OUTPUT)

let value = wpi.HIGH
let pin = 21
setInterval(function() {
  wpi.digitalWrite(pin, value)
  value = +!value
}, 500)
