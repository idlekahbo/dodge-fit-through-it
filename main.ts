input.onButtonPressed(Button.A, function () {
    you.move(-1)
})
input.onButtonPressed(Button.B, function () {
    you.move(1)
})
let qwer = 0
let you: game.LedSprite = null
let _4: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
you = game.createSprite(0, 2)
you.turn(Direction.Left, 90)
game.setScore(0)
basic.forever(function () {
    qwer = randint(1, 5)
    if (qwer == 1) {
        _1 = game.createSprite(4, 1)
        _2 = game.createSprite(4, 2)
        _3 = game.createSprite(4, 3)
        _4 = game.createSprite(4, 4)
        for (let index = 0; index < 4; index++) {
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _4.move(-1)
            basic.pause(1000)
        }
        if (you.get(LedSpriteProperty.X) == 0 && you.get(LedSpriteProperty.Y) == 0) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        _1.delete()
        _2.delete()
        _3.delete()
        _4.delete()
    }
    if (qwer == 2) {
        _1 = game.createSprite(4, 0)
        _2 = game.createSprite(4, 2)
        _3 = game.createSprite(4, 3)
        _4 = game.createSprite(4, 4)
        for (let index = 0; index < 4; index++) {
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _4.move(-1)
            basic.pause(1000)
        }
        if (you.get(LedSpriteProperty.X) == 0 && you.get(LedSpriteProperty.Y) == 1) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        _1.delete()
        _2.delete()
        _3.delete()
        _4.delete()
        if (you.get(LedSpriteProperty.X) == 0 && you.get(LedSpriteProperty.Y) == 1) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        _1.delete()
        _2.delete()
        _3.delete()
        _4.delete()
    }
    if (qwer == 3) {
        _1 = game.createSprite(4, 0)
        _2 = game.createSprite(4, 1)
        _3 = game.createSprite(4, 3)
        _4 = game.createSprite(4, 4)
        for (let index = 0; index < 4; index++) {
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _4.move(-1)
            basic.pause(1000)
        }
        if (you.get(LedSpriteProperty.X) == 0 && you.get(LedSpriteProperty.Y) == 2) {
            game.addScore(1)
        } else {
            basic.showString("GAME OVER")
            basic.showString("SCORE")
            basic.showString("" + (game.score()))
            basic.showString("Press A+B to restart")
        }
        _1.delete()
        _2.delete()
        _3.delete()
        _4.delete()
    }
    if (qwer == 4) {
        _1 = game.createSprite(4, 0)
        _2 = game.createSprite(4, 1)
        _3 = game.createSprite(4, 2)
        _4 = game.createSprite(4, 4)
        for (let index = 0; index < 4; index++) {
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _4.move(-1)
            basic.pause(1000)
        }
        if (you.get(LedSpriteProperty.X) == 0 && you.get(LedSpriteProperty.Y) == 3) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        _1.delete()
        _2.delete()
        _3.delete()
        _4.delete()
    }
    if (qwer == 5) {
        _1 = game.createSprite(4, 0)
        _2 = game.createSprite(4, 1)
        _3 = game.createSprite(4, 2)
        _4 = game.createSprite(4, 3)
        for (let index = 0; index < 4; index++) {
            _1.move(-1)
            _2.move(-1)
            _3.move(-1)
            _4.move(-1)
            basic.pause(1000)
        }
        if (you.get(LedSpriteProperty.X) == 0 && you.get(LedSpriteProperty.Y) == 4) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        _1.delete()
        _2.delete()
        _3.delete()
        _4.delete()
    }
})
