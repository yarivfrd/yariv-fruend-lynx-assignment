import Albums from "./Albums/Albums";

function Content({
  albumsData,
  navIndex,
  handleTitleChange,
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
        handleNavBack={handleNavBack}
        handleNavNext={handleNavNext}
        showModal={showModal}
      />
    </div>
  )
}
export default Content