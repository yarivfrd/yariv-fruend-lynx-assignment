import Albums from "./Albums/Albums";

function Content({
  albumsData,
  navIndex,
  handleTitleChange,
  handlePhotoDelete,
  handleNavBack,
  handleNavNext,
  showModal
}) {

  return (
    <div className="Content">
      <Albums
        albumsData={albumsData}
        navIndex={navIndex}
        handleTitleChange={handleTitleChange}
        handlePhotoDelete={handlePhotoDelete}
        handleNavBack={handleNavBack}
        handleNavNext={handleNavNext}
        showModal={showModal}
      />
    </div>
  )
}
export default Content