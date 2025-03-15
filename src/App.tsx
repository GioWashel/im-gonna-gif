import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backgroundGifs, setBackgroundGifs] = useState<string[]>([]);

  // Initialize the GIFs
  useEffect(() => {
    const gifs = [
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/PLaH0WcAwmEAAAAd/gopher.gif',
      'https://media.tenor.com/T7eqVK6--PkAAAAM/peter-griffin-popular-vibe.gif',
      'https://media.tenor.com/OayVCZ6qCzsAAAAm/oooo-pogfish.webp',
      'https://media.tenor.com/s0wZ_oQcWusAAAAM/cam-minor-inconvenience.gif',
      'https://media.tenor.com/k7SSrU348xQAAAAM/fnaf-the-rock.gif',
      'https://media.tenor.com/kPYEgJs0h9IAAAAM/walter-white-walter-white-meme.gif',
      'https://media.tenor.com/Vc9Fps8tATgAAAA1/monkey-bruh.webp',
      'https://media.tenor.com/4cuLwPXoFBoAAAAM/confused-dog-breaking-fourth-wall.gif',
      'https://media.tenor.com/3K4bgfughfsAAAAM/uh-oh-run-away.gif',
      'https://media1.tenor.com/m/B4GktlEU4O8AAAAd/kawaii-cookies-xd-ally.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/PLaH0WcAwmEAAAAd/gopher.gif',
      'https://media.tenor.com/T7eqVK6--PkAAAAM/peter-griffin-popular-vibe.gif',
      'https://media.tenor.com/OayVCZ6qCzsAAAAm/oooo-pogfish.webp',
      'https://media.tenor.com/s0wZ_oQcWusAAAAM/cam-minor-inconvenience.gif',
      'https://media.tenor.com/k7SSrU348xQAAAAM/fnaf-the-rock.gif',
      'https://media.tenor.com/kPYEgJs0h9IAAAAM/walter-white-walter-white-meme.gif',
      'https://media.tenor.com/Vc9Fps8tATgAAAA1/monkey-bruh.webp',
      'https://media.tenor.com/4cuLwPXoFBoAAAAM/confused-dog-breaking-fourth-wall.gif',
      'https://media.tenor.com/3K4bgfughfsAAAAM/uh-oh-run-away.gif',
      'https://media1.tenor.com/m/B4GktlEU4O8AAAAd/kawaii-cookies-xd-ally.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',
      'https://media1.tenor.com/m/vXg7CbUsnDEAAAAC/dog.gif',


    ];
    setBackgroundGifs(gifs);
  }, []);

  const handleJoin = () => {
    return;
  };

  const handleHost = () => {
    return;
  };

  return (
    <>
      {/* Background GIFs */}
      <div className="gif-background">
        {backgroundGifs.map((gif, index) => (
          <img
            key={index} // Add a unique key for each GIF
            src={gif}
            className="gif"
            alt={`GIF ${index}`}
            style={{
              position: 'absolute',
              top: `${Math.random() * 70}%`,
              left: `${Math.random() * 70}%`,
              width: '300px', // Adjust size as needed
              height: 'auto',
              opacity: 1, // Start with opacity 0 for fading effect
              transition: 'opacity 2s ease-in-out',
              zIndex: -1
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="title-container">
        <h1>I'M GONNA GIF</h1>
      </div>
      <h2>lord have mercy!</h2>
      <div className="main-join-host-btn">
        <button id="main-host-btn" onClick={handleHost}>
          HOST GAME
        </button>
        <button id="main-join-btn" onClick={handleJoin}>
          JOIN GAME
        </button>
      </div>
    </>
  );
}

export default App;