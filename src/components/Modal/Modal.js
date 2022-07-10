import { FaRegTimesCircle } from 'react-icons/fa';
import './Modal.scss';

function Modal({imgUrl, title, hideModal }) {

  return (
    <div className="Modal">
        <div className="inner">
            <img src={imgUrl} alt={title} />
            <FaRegTimesCircle
                className='close-btn'
                onClick={hideModal}
                role="button"
            />
        </div>
    </div>
  )
}
export default Modal