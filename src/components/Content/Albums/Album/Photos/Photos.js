import './Photos.scss';
import PhotoCard from './PhotoCard/PhotoCard';

function Photos({
  albumPhotos,
  showModal,
  handleTitleChange,
  handlePhotoDelete
}) {
  return (
    <div className="Photos">
        {
            albumPhotos.map(photo => {
                return (
                <PhotoCard
                    key={photo.id}
                    id={photo.id}
                    title={photo.title}
                    thumbnailUrl={photo.thumbnailUrl}
                    imgUrl={photo.url}
                    handleTitleChange={handleTitleChange}
                    handlePhotoDelete={handlePhotoDelete}
                    showModal={showModal}
                />
                )
            })
        }
    </div>
  )
}
export default Photos