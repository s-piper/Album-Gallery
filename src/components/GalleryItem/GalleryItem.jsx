import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'

function GalleryItem({ album, getAlbumList }) {
    //sets a default state for our conditional render
    const [isText, setIsText] = useState(false)

    //makes a PUT to increase the likes by 1 when the like button is clicked
    const likeIt = () => {
        axios.put(`/gallery/like/${album.id}`)
            .then(response => {
                console.log('Put res:', response);
                getAlbumList();
            }).catch(err => {
                console.log('Put error', err);
            })
    }
    //conditional render function
    const switchIt = () => {
        //if isText is false the statement is true false is the default state
        if (!isText) {
            //sets to state to true
            setIsText(true);
        } else {
            //sets it back to false if already true
            setIsText(false);
        }
    }

    return (
        //sets how our card or box will render
        <div className="pictureBox">
            {isText ? (

                //when clicked it will trigger the function to change state
                <div className="textBox" onClick={switchIt}> 
                <p > {album.description}</p>

                </div>
            ) : (

                //when picture is clicked it will trigger the function to switch state
                <div className ="img">
                <img src={album.path} onClick={switchIt} width="200" height="200" />
                </div>
            )}
    
            <div className="bttn"> 
                {/* makes the button to trigger PUT */}
                <button onClick={likeIt}>Love It!</button>
                {/* displays the current count */}
                <p>{album.likes} people love this!</p>
            </div>

        </div>


    )
}


export default GalleryItem;