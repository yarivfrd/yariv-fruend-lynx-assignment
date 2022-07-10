import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import './Navigation.scss';

function Navigation({
    navIndex,
    handleNavBack,
    handleNavNext,
    albums
}) {
    return (
        <div className="Navigation">
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
            {navIndex <= albums.length ?
                <MdNavigateNext
                    className='nav-btn'
                    onClick={handleNavNext}
                    role="button"
                />
                : ''}
        </div>
    )
}
export default Navigation