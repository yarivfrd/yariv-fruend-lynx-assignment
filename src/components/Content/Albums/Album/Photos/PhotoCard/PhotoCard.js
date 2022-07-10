import { FaTrashAlt } from 'react-icons/fa';
import { useState, useEffect, useRef, memo } from 'react';
import './PhotoCard.scss';

// Only re-render if title prop content was changed
function titleChanged(prevProps, nextProps) {
    if (prevProps.title !== nextProps.title) {
        return false;
    }
    return true;
}

function PhotoCard({
    id,
    title,
    thumbnailUrl,
    imgUrl,
    showModal,
    handleTitleChange,
    handlePhotoDelete
}) {

    const [currentTitle, setCurrentTitle] = useState(title);
    const [lastTitle, setLastTitle] = useState(title);
    const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);

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

    function handleMouseLeave() {
        setDeleteButtonVisible(false);
    }

    function handleMouseOver() {
        setDeleteButtonVisible(true);
    }

    return (
        <div
            className="PhotoCard"
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
        >
            {/* {console.log(`render photocard ${id}`)} */}
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
            {
                deleteButtonVisible &&
                <FaTrashAlt
                    className='delete-btn'
                    onClick={() => handlePhotoDelete(id)}
                    role="button"
                />
            }
        </div>
    )
}

export default memo(PhotoCard, titleChanged);