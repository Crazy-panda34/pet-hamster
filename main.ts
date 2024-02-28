input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    soundExpression.mysterious.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    soundExpression.giggle.playUntilDone()
})
basic.showIcon(IconNames.Rollerskate)
