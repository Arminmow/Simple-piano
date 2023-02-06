const allKeys = document.querySelectorAll('.key')

function playAudio(url) {
    new Audio(url).play();
}

allKeys.forEach((key, index) => {

    const url = `sounds/key${index + 1 < 10 && index + 1 !== 0 ? `0${index + 1}` : index + 1}.mp3`

    key.addEventListener('click', () => playAudio(url));
})
