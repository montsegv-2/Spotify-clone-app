import React, { useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromResponse } from './spotify';
import SpotifyWepApi from "spotify-web-api-js"
import Player from './Player';

const spotify = new SpotifyWepApi();

function App() {
  const [token, setToken] = useState(null);

  //Run code based on a given condition  
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.acces_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then( (user) => {
        console.log(':person:',user);
      })
    }

    console.log('I HAVE A TOKEN ', token)
  },[]);

  return (
    <div className="App"> { token ?  <Player/>  :  <Login/> } </div>
  );
}

export default App;
