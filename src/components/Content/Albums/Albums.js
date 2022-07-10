import _ from 'lodash';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Album from './Album/Album';

function Albums({
    albumsData,
    navIndex,
    handleTitleChange,
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
                        if (albumId === navIndex || albumId === navIndex + 1) {
                            return (
                                <Album
                                    key={album[0]}
                                    albumData={album}
                                    handleTitleChange={handleTitleChange}
                                    showModal={showModal}
                                />
                            )
                        }
                    })
                }
                <div className="navigation">
                    {navIndex > 1 ?
                    <MdNavigateBefore
                        className='nav-btn'
                        onClick={handleNavBack}
                        role="button"
                    />
                    : ''}
                    <div className="nav-index">
                        {navIndex}
                    </div>
                    {navIndex <= albums.length - 1 ?
                    <MdNavigateNext
                        className='nav-btn'
                        onClick={handleNavNext}
                        role="button"
                    />
                    : ''}
                </div>
            </div>
          )
    } else {
        return 'Loading Albums...';
    }

}
export default Albums