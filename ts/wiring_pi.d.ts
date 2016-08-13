interface WiringPi {
  wiringPiSetupGpio(): void,
  pinMode(pin: number, mode: number),
  digitalWrite(pin: number, state: number),
  digitalRead(pin: number),
  LOW: number,
  HIGH: number
  INPUT: number,
  OUTPUT: number,
  PWM_OUTPUT: number,
  GPIO_CLOCK: number
}
