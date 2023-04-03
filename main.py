def on_button_pressed_a():
    you.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global _false, _true
    _false = 0
    _false = 1
    _true = 1
    _true = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    you.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

qwer = 0
you: game.LedSprite = None
_true = 0
_false = 0
_4: game.LedSprite = None
_3: game.LedSprite = None
_2: game.LedSprite = None
_1: game.LedSprite = None
_false = 1
_true = 0
you = game.create_sprite(0, 2)
you.turn(Direction.LEFT, 90)
while _false == 1:
    game.set_score(0)
    while _true == 0:
        qwer = randint(1, 5)
        if qwer == 1:
            _1 = game.create_sprite(4, 1)
            _2 = game.create_sprite(4, 2)
            _3 = game.create_sprite(4, 3)
            _4 = game.create_sprite(4, 4)
            for index in range(4):
                _1.move(-1)
                _2.move(-1)
                _3.move(-1)
                _4.move(-1)
                basic.pause(1000)
            if you.get(LedSpriteProperty.X) == 0 and you.get(LedSpriteProperty.Y) == 0:
                game.add_score(1)
            else:
                basic.show_string("GAME OVER")
                basic.show_string("Score")
                basic.show_string("" + str((game.score())))
                basic.show_string("Press A+B to restart")
            _1.delete()
            _2.delete()
            _3.delete()
            _4.delete()
        if qwer == 2:
            _1 = game.create_sprite(4, 0)
            _2 = game.create_sprite(4, 2)
            _3 = game.create_sprite(4, 3)
            _4 = game.create_sprite(4, 4)
            for index2 in range(4):
                _1.move(-1)
                _2.move(-1)
                _3.move(-1)
                _4.move(-1)
                basic.pause(1000)
            if you.get(LedSpriteProperty.X) == 0 and you.get(LedSpriteProperty.Y) == 1:
                game.add_score(1)
            else:
                basic.show_string("GAME OVER")
                basic.show_string("score")
                basic.show_string("" + str((game.score())))
                basic.show_string("Press A+B to reatart")
            _1.delete()
            _2.delete()
            _3.delete()
            _4.delete()
        if qwer == 3:
            _1 = game.create_sprite(4, 0)
            _2 = game.create_sprite(4, 1)
            _3 = game.create_sprite(4, 3)
            _4 = game.create_sprite(4, 4)
            for index3 in range(4):
                _1.move(-1)
                _2.move(-1)
                _3.move(-1)
                _4.move(-1)
                basic.pause(1000)
            if you.get(LedSpriteProperty.X) == 0 and you.get(LedSpriteProperty.Y) == 4:
                game.add_score(1)
            else:
                basic.show_string("GAME OVER")
                basic.show_string("SCORE")
                basic.show_string("" + str((game.score())))
                basic.show_string("Press A+B to restart")
            _1.delete()
            _2.delete()
            _3.delete()
            _4.delete()
        if qwer == 3:
            _1 = game.create_sprite(4, 0)
            _2 = game.create_sprite(4, 1)
            _3 = game.create_sprite(4, 2)
            _4 = game.create_sprite(4, 4)
            for index4 in range(4):
                _1.move(-1)
                _2.move(-1)
                _3.move(-1)
                _4.move(-1)
                basic.pause(1000)
            if you.get(LedSpriteProperty.X) == 0 and you.get(LedSpriteProperty.Y) == 4:
                game.add_score(1)
            else:
                basic.show_string("GAME OVER")
                basic.show_string("SCORE")
                basic.show_string("" + str((game.score())))
                basic.show_string("Press A+B to restart")
            _1.delete()
            _2.delete()
            _3.delete()
            _4.delete()