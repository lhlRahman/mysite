import React from 'react';
import TypeWriter from 'typewriter-effect';
import aircadet from '../assets/aircadet.png';
import desktop from '../assets/desktop.png';
import laptop from '../assets/laptop.png';

const TitleTypeWriter = () => {
  return (
    <TypeWriter
      options={{
        loop: true,
        cursor: ''
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(`a Software Engineer <img src="${desktop}" alt="desktop" class="inline h-8" />`)
          .pauseFor(500)
          .deleteAll()
          .typeString(`A Full Stack Developer <img src="${laptop}" alt="laptop" class="inline h-8" />`)
          .pauseFor(500)
          .deleteAll()
          .typeString(`an Air Cadet <img src="${aircadet}" alt="aircadet" class="inline h-8" />`)
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TitleTypeWriter;