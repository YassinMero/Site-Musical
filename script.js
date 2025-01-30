document.addEventListener("DOMContentLoaded", function () {
    console.log("heya");
    let currentAudio = null;
    let currentButton = null;

    let numCase = 0; // Assurez-vous que numCase est déclaré avec `let` pour chaque musique
    data.forEach(function (f) {
        var blocMusiques = document.createElement("section");
        blocMusiques.innerHTML = `
            <h2>${f.musiques}</h2>
            <p>${f.descriptionsMusiques}</p>
            <img src="${f.imageIllustration}" alt="">
            <br>
            <p>${f.avisPersonnel}</p>
            <audio id="audio${numCase}">
                <source src="${f.nomFichier}" type="audio/mpeg">
            </audio>
            <div class="audio-button" id="play${numCase}">&#9654;</div>
        `;
        
        document.querySelector(".listeMusiques").append(blocMusiques);

        // Gestion de la lecture/pause pour chaque musique
        let audio = document.getElementById(`audio${numCase}`);
        let playButton = document.getElementById(`play${numCase}`);
        let isPlaying = false;

        playButton.addEventListener("click", function () {
            // Arrête l'audio en cours de lecture, s'il existe
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentButton.innerHTML = "&#9654;";
            }

            if (isPlaying) {
                audio.pause();
                playButton.innerHTML = "&#9654;";
            } else {
                audio.play();
                playButton.innerHTML = "&#9208;";
                currentAudio = audio;
                currentButton = playButton;
            }
            isPlaying = !isPlaying;
        });

        numCase++; // Incrément pour chaque musique
    });
});
