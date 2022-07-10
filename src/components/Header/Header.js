import './Header.scss';

function Header({
  handlePhotoAdd
}) {
  return (
    <header className="Header">
      <h1>Photo Album</h1>
      <button className='add-btn' onClick={handlePhotoAdd}>Add Photo +</button>
    </header>
  )
}
export default Header;