import { useEffect, useState } from 'react';
import './App.css';

const text = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. I know I\'m not very creative. By the way this code will probably be on GitHub if you are somehow interested. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.';
const textTokens = text.split(' ');

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const listener = () => setProgress(Math.min(progress + 1, textTokens.length));
    document.addEventListener('keyup', listener);

    return () => document.removeEventListener('keyup', listener);
  }, [progress]);

  return (
    <div className="App">
      { progress === textTokens.length && 
        <div className="Congrats">
          <div className="Congrats-background"></div>
          <div className="Congrats-modal">
            Congrats!
            <br />
            169 WPM!!!
          </div>
        </div>
      }
      <h1 className="Header">Typer Trainer Beta</h1>
      <div className="Type-box">
        {textTokens.slice(0, progress).join(' ')}
        <span className="Cursor">_</span>
      </div>
    </div>
  );
}

export default App;
