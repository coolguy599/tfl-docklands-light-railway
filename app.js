// Add this inside your script
const statusDisplay = document.getElementById('statusDisplay');

function playNext() {
    if (currentIndex < playlist.length) {
        let currentFile = playlist[currentIndex];
        player.src = currentFile;
        player.play();
        statusDisplay.innerText = "Now Playing: " + currentFile;
        currentIndex++;
    } else {
        statusDisplay.innerText = "Playback Complete";
    }
}
