function playMusic(song) {
    let player = document.getElementById("player");
    player.src = song;
    player.type = 'audio/mp3'
    player.load();
    player.play();
    console.log(player.src);
}