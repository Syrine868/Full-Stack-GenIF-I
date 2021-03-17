import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Sound from "../../assets/img/Son.mp3"

//npm install react-audio-player

export default function Audio() {

    return (

          <ReactAudioPlayer
            src={Sound}
            autoPlay
            loop
        />

    )

}