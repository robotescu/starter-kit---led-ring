let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(200)
})
