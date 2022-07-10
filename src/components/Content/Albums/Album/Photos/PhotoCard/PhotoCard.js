import './PhotoCard.scss';
import { useState, useEffect, useRef } from 'react';
import OutsideAlerter from './OutsideAlerter/OutsideAlerter';

function PhotoCard({
    id,
    title,
    thumbnailUrl,
    imgUrl,
    showModal,
    handleTitleChange
}) {

    const [currentTitle, setCurrentTitle] = useState(title);
    const [lastTitle, setLastTitle] = useState(title);
    const titleEditRef = useRef(null);

    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            e.target.blur();
        } else if (e.keyCode === 27) {
            setCurrentTitle(lastTitle);
            e.target.blur();
        }
    }

    function handleTitleBlur(e) {
        setTimeout(() => {
            if (e.target.value !== lastTitle) {
                handleTitleChange(id, currentTitle);
            }
        }, 50);

    }

    function handleTitleFocus(e) {
        setLastTitle(e.target.value);
    }

    function handleEdit(e) {
        setCurrentTitle(e.target.value);
    }

    return (
        <div className="PhotoCard">
            {id === 1 ? console.log('render photo 1') : ''}
            <img
                src={thumbnailUrl}
                alt={title}
                onClick={() => showModal(title, imgUrl)}
            />
            <textarea
                ref={titleEditRef}
                value={currentTitle}
                onChange={e => handleEdit(e)}
                onFocus={e => handleTitleFocus(e)}
                onBlur={e => handleTitleBlur(e)}
                onKeyDown={e => handleKeyDown(e)}
            />
        </div>
    )
}
export default PhotoCard