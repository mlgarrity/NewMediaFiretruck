input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onSound(DetectedSound.Loud, function () {
    servos.P0.stop()
    servos.P1.stop()
})
if (input.temperature() > 20) {
    while (true) {
        music.playMelody("B G B G B G B G ", 200)
        music.setVolume(180)
        servos.P1.run(-100)
        servos.P0.run(100)
    }
}
if (input.lightLevel() > 127) {
    servos.P0.run(20)
    servos.P1.run(20)
}
