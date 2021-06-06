import './GalleryList.css'
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({catalog, getAlbumList}){



    return (
        //creates a div that will be on the DOM
        //loops through data passed in
        <div className = "arrangement">
            {catalog.map(album => {

                return(
                    //passes getAlbumList function, id, and data
                    <GalleryItem getAlbumList = {getAlbumList} key= {album.id} album = {album} />
                )
            })}
        </div>

    )
}

export default GalleryList;