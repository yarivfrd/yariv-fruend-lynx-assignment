import _ from 'lodash';
import Album from './Album/Album';
import Navigation from './Navigation/Navigation';

function Albums({
    albumsData,
    navIndex,
    navIndexModifier,
    handleTitleChange,
    handlePhotoDelete,
    handleNavBack,
    handleNavNext,
    showModal
}) {

    const albums = Object.entries(_.groupBy(albumsData, 'albumId'));

    if (albums.length) {
        return (
            <div className="Albums">
                {
                    albums.map(album => {
                        const albumId = Number(album[0]);
                        if (albumId === navIndex + navIndexModifier || albumId === (navIndex + navIndexModifier) + 1) {
                            return (
                                <Album
                                    key={album[0]}
                                    albumData={album}
                                    handleTitleChange={handleTitleChange}
                                    handlePhotoDelete={handlePhotoDelete}
                                    showModal={showModal}
                                />
                            )
                        }
                    })
                }
                <Navigation
                    navIndex={navIndex}
                    handleNavBack={handleNavBack}
                    handleNavNext={handleNavNext}
                    albums={albums}
                />
            </div>
        )
    } else {
        return 'Loading Albums...';
    }

}
export default Albums