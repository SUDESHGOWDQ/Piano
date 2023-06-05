const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio(newUrl).play()
}


pianoKeys.forEach((pianoKey, i) => {
    
    const newUrl = './key' + (i+1) + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})

