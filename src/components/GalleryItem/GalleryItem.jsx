import { useState } from 'react';
import axios from 'axios';

function GalleryItem({album, getAlbumList}) {

    const [isText, setIsText] = useState(false)
    
    return(

        <div className="pictureBox">

            <img src={album.path} width="200" height="200"/>
            <button>Love It!</button>

        </div>
       

    )
}


export default GalleryItem;