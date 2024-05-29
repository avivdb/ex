var gELBall
function onBallClicked(elBall) {

    var ballHeight = parseInt(elBall.style.height) || 100
    var ballWidth = parseInt(elBall.style.width) || 100
    var lineHeight = parseInt(elBall.style.lineHeight) || 100

    var randSize = getRandomIntInclusive(20, 60)
    ballHeight += randSize
    ballWidth += randSize
    lineHeight += randSize

    if (ballHeight > 400) {
        ballHeight = 100
        ballWidth = 100
        lineHeight = 100
    }

    elBall.innerHTML = ballWidth
    elBall.style.width = ballWidth + 'px'
    elBall.style.height = ballHeight + 'px'
    elBall.style.lineHeight = lineHeight + 'px'
    elBall.style.backgroundColor = getRandomColor()


}