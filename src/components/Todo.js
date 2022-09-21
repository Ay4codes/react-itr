import {useState} from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop';

function Card(props) {
  const [ modalIsOpen, setModayIsOpen ] = useState(false);

  function deleteHandler() {
    setModayIsOpen(true)
  }
  function closeModalHandler() {
    setModayIsOpen(false)
  }

    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}  />}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    )
}

export default Card