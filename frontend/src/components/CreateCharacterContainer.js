import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

const CreateCharacterContainer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Modal show = {show} onHide={handleClose} animation= {false}>
        <Modal.Header closeButton>
          <Modal.Title> Create Your Character here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "primary" onClick = {handleClose}>
            Save Changes
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