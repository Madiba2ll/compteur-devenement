input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
})
let nombre = 0
let etat_actuel = 0
let etat_passe = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe) {
        if (etat_actuel == 1) {
            nombre += 1
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(1000)
        }
    }
    etat_passe = etat_actuel
    basic.showNumber(nombre)
})
