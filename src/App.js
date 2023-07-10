import profilePic from './assets/Profile Pic.jpg';
import github from './assets/github.svg';
import repo from './assets/repo.svg';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import notification from './assets/notification.svg';
import website from './assets/website.svg';
import npm from './assets/npm.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [tagline, setTagline] = useState({ tag: "Loading.." })
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    typeWriter();
  }, [count])

  const typeWriter = () => {
    let lines = ["Software Engineer", "Certified SAFe® 5 Practitioner", "Web Developer", "Software Developer"];
    let speed = 120;
    setTimeout(() => {
      if (tagline.tag.length < lines[index].length) {
        setTagline(count === 0 ? { tag: lines[index].charAt(count) } : { tag: tagline.tag + lines[index].charAt(count) });
        setCount(count + 1);
      }
      else if (index !== lines.length - 1) {
        setTagline({ tag: "" })
        setCount(0);
        setIndex(index + 1);
      }
    }, speed)
  }

  return (
    <div className="App">
      <div className='sidebar'>
        <a href="https://kashyapkaki.github.io" rel="noopener noreferrer" target="_blank" className='silent-link'>
          <img src={website}></img>
        </a>
        <a href="https://github.com/kashyapkaki" rel="noopener noreferrer" target="_blank" className='silent-link'>
          <img src={github}></img>
        </a>
        <a href="https://www.npmjs.com/search?q=maintainer%3Akashyapkaki" rel="noopener noreferrer" target="_blank" className='silent-link'>
          <img src={npm}></img>
        </a>
        <a href='https://in.linkedin.com/in/kashyapkaki' rel="noopener noreferrer" target="_blank" className='silent-link'>
          <img src={linkedin}></img>
        </a>
        <a href='https://www.instagram.com/kashyapkaki' rel="noopener noreferrer" target="_blank" className='silent-link'>
          <img src={instagram}></img>
        </a>
      </div>
      <div className="App-header">
        <img src={profilePic} className="App-logo" alt="logo" />
        <h2 className='greeting-name'>Hi! I'm Kashyap</h2>
        <h3 className='tagline'>{tagline.tag}</h3>
        {/* <h2 className='welcome'>Welcome to My Portfolio</h2> */}
      </div>
      <footer>
        <a href="https://github.com/kashyapkaki" rel="noopener noreferrer" target="_blank" className='master-link'>
          <img src={repo}></img>
          <span>master</span>
        </a>
        <span>
          <img src={notification} className="bi-bell"></img>
        </span>
      </footer>
    </div>
  );
}

export default App;
