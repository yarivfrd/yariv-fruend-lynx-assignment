import './Album.scss';
import Photos from "./Photos/Photos";

function Album({
  albumData: [albumId, albumPhotos],
  handleTitleChange,
  handlePhotoDelete,
  showModal
}) {
  return (
    <div className="Album">
        <h3 className="album-title">#{albumId}</h3>
        <Photos
          albumPhotos={albumPhotos}
          handleTitleChange={handleTitleChange}
          handlePhotoDelete={handlePhotoDelete}
          showModal={showModal}
        />
    </div>
  )
}
export default Album