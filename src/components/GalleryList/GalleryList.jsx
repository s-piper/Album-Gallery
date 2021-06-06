import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({catalog, getAlbumList}){



    return (
        <div className = "tBD">
            {catalog.map(album => {

                return(
                    
                    <GalleryItem getAlbumList = {getAlbumList} key= {album.id} album = {album} />
                )
            })}
        </div>

    )
}

export default GalleryList;