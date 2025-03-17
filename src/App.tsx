import { useState } from 'react';

import HostGameModal from './components/ui/Modal/HostGameModal';
import JoinGameModal from './components/ui/Modal/JoinGameModal';
import './App.css';
import GifBackground from './components/ui/GifBackground';

function App() {
  
  const [showHostModal, setShowHostModal] = useState(false); 
  const [showJoinModal, setShowJoinModal] = useState(false); 
  
  const handleJoin = () => {
    setShowJoinModal(true); 
  };

  const handleHost = () => {
    setShowHostModal(true); 
  };

  return (
    <div className='home-page-container'>
      <GifBackground/>
      <div className="title-container">
        <h1>I'M GONNA GIF</h1>
      </div>
      <div> 
        <h2 style={{zIndex: 10}}>Play with your friends now!</h2>
      </div>
      <div className="main-join-host-btn">
        <button id="main-host-btn" onClick={handleHost}>
          HOST GAME
        </button>
        <button id="main-join-btn" onClick={handleJoin}>
          JOIN GAME
        </button>
      </div>
      <HostGameModal shouldShowModal={showHostModal} setShouldShowModal={setShowHostModal}/>
      <JoinGameModal shouldShowModal={showJoinModal} setShouldShowModal={setShowJoinModal}/>
      <section>
        <h2>Check Out Public Games</h2>
      </section>
    </div>
  );
}

export default App;