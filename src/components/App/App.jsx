import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';




function App() {

  const [albumList, setAlbumList] =useState([]);

  useEffect (()=> {
    getAlbumList()
  }, []);

  const getAlbumList = () =>{
    console.log('start of GET');
    Axios.get ('/gallery').then(response => {
      setAlbumList(response.data)
    }).catch(err => {
      console.log('error in GET', err);
    })
  }

    console.log(albumList);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">In My Jazz Rotation</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
