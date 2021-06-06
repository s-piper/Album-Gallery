

function GalleryList ({catalog, getAlbumList}){



    return (
        <div className = "tBD">
            {catalog.map(item => {

                return(
                    <div>
                        <p key = "{item.id}">
                            <img src={item.path} width="100" height="100" />
                        
                        </p>
                    </div>
                )
            })}
        </div>

    )
}

export default GalleryList;