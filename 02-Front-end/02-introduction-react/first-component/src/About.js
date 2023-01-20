import React from 'react';
import './App.css'

class About extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1 className='Title'>
          {'Aline Resende'}
        </h1>
        <p className='App'>
          {'Im currently focusing on Web Development Technologies'}
        </p>
        <h2 className='Title'>Skills</h2>
        <ul>
          <li>{'At the moment Im developing projects with JavaScript and Golang'}</li>
          <li>{'Front-end technologies: JavaScript - ES6+ | ReactJS | Design System, UI/UX Design | Unit Tesing - Jest, CyPress | CSS3, Bootstrap, Tailwind | HTML5 | Git | Figma'}</li>
          <li>{'Back-end technologies: Golang | Python | Database - MySQL'}</li>                    
        </ul>
      </div>
    );
  }
}

export default About;
