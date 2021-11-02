let player_A_score = 0
let player_b_score = 0
let hand = 0
input.onButtonPressed(Button.A, function () {
    player_A_score += 1
    basic.showNumber(player_A_score)
})
// when b is pressed
input.onButtonPressed(Button.AB, function () {
    // asks if the score is at 3
    if (player_A_score == 2) {
        basic.showString("player A wins")
    }
    if (player_b_score == 2) {
        basic.showString("player B wins")
    }
})
input.onButtonPressed(Button.B, function () {
    player_b_score += 1
    basic.showNumber(player_b_score)
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
