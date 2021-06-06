import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';




function App() {
  //creates an array to store data
  const [albumList, setAlbumList] =useState([]);
  //calls getAlbum to render DOM
  useEffect (()=> {
    getAlbumList()
  }, []);
  //uses axios to get data stored in models going through server and routes
  const getAlbumList = () =>{
    console.log('start of GET');
    Axios.get ('/gallery').then(response => {
      setAlbumList(response.data)
    }).catch(err => {
      console.log('error in GET', err);
    })
  }
    //nice sanity check to make sure you did it right
    console.log(albumList);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">In My Jazz Rotation</h1>
        </header>
        
          {/* //This is where things will render
          //passing along getAlbums function and albumList data */}
          <GalleryList catalog = {albumList} getAlbumList = {getAlbumList} />
      
      </div>
    );
}


export default App;

