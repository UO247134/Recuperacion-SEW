"use strick"

class Tracks{
    constructor(){};
    initTrack() {
            var track = document.createElement("track");
            var video = document.getElementById("video");
            track.kind = "captions";
            track.label = "Spanish";
            track.srclang = "es";
            track.src = "Textrack/subtitulos.vtt";
            video.appendChild(track);
            track.addEventListener("load",function () {
                this.mode = "showing";
                video.textTracks[0].mode = "showing";
            });
    }

}

let tracks = new Tracks();
tracks.initTrack();

