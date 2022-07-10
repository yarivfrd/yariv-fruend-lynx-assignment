import './Header.scss';

function Header({
  handlePhotoAdd,
  dataAvailable
}) {
  return (
    <header className="Header">
      <h1>Photo Album</h1>
      {dataAvailable && <button className='add-btn' onClick={handlePhotoAdd}>Add Photo +</button>}
    </header>
  )
}
export default Header;