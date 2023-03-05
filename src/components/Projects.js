import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Countdown Clock',
      description: 'This application is a fun event countdown clock',
      image: 'https://user-images.githubusercontent.com/110504360/203154560-d6aa0cef-aa16-4f99-ab8a-ccd1c74d3b22.png',
      url: 'https://github.com/Rhondoid/event-countdown-clock'
    },
    {
      id: 2,
      title: 'Date-A-Base',
      description: 'This is the application to randomly select a meal, movie and drink for date night',
      image: 'https://github.com/Rhondoid/The-Date-a-base/blob/main/assets/images/homepage.png',
      url: 'https://github.com/Rhondoid/The-Date-a-base'
    },
    {
      id: 3,
      title: 'Pet Feed',
      description: 'This project is a social media platform for pets',
      image: 'https://github.com/Rhondoid/petfeed/blob/main/app.png',
      url: 'https://github.com'
    },
    {
      id: 4,
      title: 'Fur-ever Friends',
      description: 'This is a pet adoption application',
      image: 'placeholder',
      url: 'https://github.com/Rhondoid/petfeed'
    }
  ];

  return (
    <div>
      <h1></h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.url}>View project on GitHub</a>
        </div>
      ))}
    </div>
  );
}


  