import React from 'react';
import BgAudio from 'react-native-background-audio'

export default function Audio() {
    return (
      <BgAudio options={audio_options}/>
    );
}
const audio_options = {
  source:{local: require('../BgAudio/Audio')}  //ex. require('./music/sample.mp3')
}
