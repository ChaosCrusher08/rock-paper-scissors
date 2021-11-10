let player_A_score = 0
let player_b_score = 0
let hand = 0
// Adds a point to player A's score 
input.onButtonPressed(Button.A, function () {
    player_A_score += 1
    basic.showNumber(player_A_score)
    // asks if the score is at 3
    if (player_A_score == 10) {
        basic.showString("player A wins")
        player_A_score = 0
        player_b_score = 0
    }
})
// Adds a point to player B's score
input.onButtonPressed(Button.B, function () {
    player_b_score += 1
    basic.showNumber(player_b_score)
    if (player_b_score == 10) {
        basic.showString("player B wins")
        player_A_score = 0
        player_b_score = 0
    }
})
// Shows rock, paper, or scissors
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
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
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
