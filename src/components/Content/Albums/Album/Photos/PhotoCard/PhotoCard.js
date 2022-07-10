import './PhotoCard.scss';
import { useState, useEffect, useRef, memo } from 'react';

// Only re-render if title content was changed
function titleChanged(prevProps, nextProps) {
    if (prevProps.title === nextProps.title) {
        return true;
    }
    return false;
}

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

    // 'Enter' to save title, 'Esc' to cancel title edit
    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            e.target.blur();
        } else if (e.keyCode === 27) {
            setCurrentTitle(lastTitle);
            e.target.blur();
        }
    }

    // Click outside textarea to save
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

export default memo(PhotoCard, titleChanged);