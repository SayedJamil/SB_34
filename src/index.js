import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import BackgroundProvider from './contexts/Background';
import SceneContextProvider from './contexts/SceneContext';
import SoundContextProvider from './contexts/SoundContext';

ReactDOM.render(
  <BackgroundProvider>
    <SceneContextProvider>
      <SoundContextProvider>
        <App />
      </SoundContextProvider>
    </SceneContextProvider>
  </BackgroundProvider>
  ,
  document.getElementById('root')
);

