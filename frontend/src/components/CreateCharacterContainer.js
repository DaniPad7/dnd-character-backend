import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreateCharacterForm from '../forms/CreateCharacterForm';

const CreateCharacterContainer = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  
  const handleClose = () => {
    setShow(false);
  }

  const handleCloseRandom = () => {


    setShow(false);
  }


  return (
    <div>

      <Modal size = "lg" show = {show} onHide={handleClose} animation= {false}>
        <Modal.Header closeButton>
          <Modal.Title> Create Your Character here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCharacterForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "primary" onClick = {handleClose}>
            Save Changes
          </Button>
          <Button variant = "primary" onClick = {handleCloseRandom}>
            Random Gen
          </Button>
          <Button variant= "secondary" onClick = {handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Button variant = "primary" onClick={handleShow}>
        Create a new character
      </Button>
    </div>
  );
}

export default CreateCharacterContainer;