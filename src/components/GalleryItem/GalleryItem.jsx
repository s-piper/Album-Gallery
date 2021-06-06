import { useState } from 'react';
import axios from 'axios';

function GalleryItem({album, getAlbumList}) {

    const [isText, setIsText] = useState(false)

    const handleLike = () =>{
        axios.put(`/gallery/like/${album.id}`)
        .then(response => {
            console.log('Put res:',response);
            getAlbumList();
        }).catch(err=>{
            console.log('Put error', err);
        })
    }
    
    return(

        <div className="pictureBox">

            <img src={album.path} width="200" height="200"/>
            <button onClick={handleLike}>Love It!</button>
            <p>{album.likes} people love this!</p>


        </div>
       

    )
}


export default GalleryItem;