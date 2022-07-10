import './Album.scss';
import Photos from "./Photos/Photos";

function Album({
  albumData: [albumId, albumPhotos],
  handleTitleChange,
  showModal
}) {
  return (
    <div className="Album">
        <h3 className="album-title">Album {albumId}</h3>
        <Photos
          albumPhotos={albumPhotos}
          handleTitleChange={handleTitleChange}
          showModal={showModal}
        />
    </div>
  )
}
export default Album