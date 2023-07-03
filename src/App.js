import profilePic from './Profile Pic.jpg';
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
    let lines = ["I'm a Software Engineer", "I'm Certified SAFe® 5 Practitioner", "I'm a Web Developer", "I'm a Software Developer"];
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
      <div className="App-header">
        <img src={profilePic} className="App-logo" alt="logo" />
        <h2 className='greeting-name'>Hi! I'm Kashyap</h2>
        <h3 className='tagline'>{tagline.tag}</h3>
        <h2 className='welcome'>Welcome to My Portfolio</h2>
      </div>
      <footer>
        <a href="https://github.com/kashyapkaki" rel="noopener noreferrer" target="_blank" className='master-link'>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-branch" className="svg-inline--fa fa-code-branch fa-w-12 fa-inverse fa-xs icon-0-2-30" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#abb2bf" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
          </svg>
          <span>master</span>
        </a>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#abb2bf" className="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </span>
      </footer>
    </div>
  );
}

export default App;
