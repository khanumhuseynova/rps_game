var gameData = ['r', 'p', 's']
var my_point = 0
var comp_point = 0


var player1PointPanel = document.querySelector('#my_point')
var player2PointPanel = document.querySelector('#comp_point')
var winOrLoseInfoPanel1 = document.querySelector('#winorlose1')
var winOrLoseInfoPanel2 = document.querySelector('#winorlose2')
var player1Imgme = document.querySelector('#player1Img')
var player2Imgcomp = document.querySelector('#player2Img')





function randomCompAttack(arr) {
    var randomNum = Math.floor(Math.random() * gameData.length)
    return arr[randomNum]
}

function startGame(e) {
    var userAttack = e.key.toLowerCase()
    var compAttack = randomCompAttack(gameData)



    player1Imgme.src = `./Images/${userAttack}.png`
    player2Imgcomp.src = `./Images/${compAttack}.png`




    if (gameData.indexOf(userAttack) === -1) {
        alert('Please choose "r p s" keypress')
        return
    }

    if (userAttack === compAttack) {
        console.log('----------------');
        console.log('Draw');
        console.log('----------------');

        winOrLoseInfoPanel1.innerHTML = 'DRAW'
        winOrLoseInfoPanel2.innerHTML = 'DRAW'
    } else if (userAttack === 'p' && compAttack === "r") {
        console.log('----------------');
        console.log('Player 1 win');
        console.log('----------------');

        my_point++

        player1PointPanel.innerHTML = `Point: ${my_point}`

        winOrLoseInfoPanel1.innerHTML = 'WIN'
        winOrLoseInfoPanel2.innerHTML = 'LOSE'

        winOrLoseInfoPanel1.classList.add('text-success')
        winOrLoseInfoPanel2.classList.remove('text-success')

        winOrLoseInfoPanel1.classList.remove('text-danger')
        winOrLoseInfoPanel2.classList.add('text-danger')



    } else if (userAttack === 'r' && compAttack === "s") {
        console.log('----------------');
        console.log('Player 1 win');
        console.log('----------------');

        my_point++

        player1PointPanel.innerHTML = `Point: ${my_point}`

        winOrLoseInfoPanel1.innerHTML = 'WIN'
        winOrLoseInfoPanel2.innerHTML = 'LOSE'

        winOrLoseInfoPanel1.classList.add('text-success')
        winOrLoseInfoPanel2.classList.remove('text-success')

        winOrLoseInfoPanel1.classList.remove('text-danger')
        winOrLoseInfoPanel2.classList.add('text-danger')



    } else if (userAttack === 's' && compAttack === "p") {
        console.log('----------------');
        console.log('Player 1 win');
        console.log('----------------');

        my_point++

        player1PointPanel.innerHTML = `Point: ${my_point}`

        winOrLoseInfoPanel1.innerHTML = 'WIN'
        winOrLoseInfoPanel2.innerHTML = 'LOSE'

        winOrLoseInfoPanel1.classList.add('text-success')
        winOrLoseInfoPanel2.classList.remove('text-success')

        winOrLoseInfoPanel1.classList.remove('text-danger')
        winOrLoseInfoPanel2.classList.add('text-danger')



    } else {
        console.log('----------------');
        console.log('Player 2 win');
        console.log('----------------');

        comp_point++

        player2PointPanel.innerHTML = `Point: ${comp_point}`
        winOrLoseInfoPanel1.innerHTML = 'LOSE'
        winOrLoseInfoPanel2.innerHTML = 'WIN'

        winOrLoseInfoPanel1.classList.add('text-success')
        winOrLoseInfoPanel2.classList.remove('text-success')

        winOrLoseInfoPanel1.classList.remove('text-danger')
        winOrLoseInfoPanel2.classList.add('text-danger')


    }

}

window.onkeypress = startGame