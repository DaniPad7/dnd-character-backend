// eslint-disable-next-line 
import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreateCharacterForm from '../forms/CreateCharacterForm';

const CreateCharacterContainer = () => {
  const [show, setShow] = useState(false);

  const [name ,setName] = useState("");
  const [description, setDescription] = useState("");
  const [str, setStr] = useState(1);
  const [dex, setDex] = useState(1);
  const [con, setCon] = useState(1);
  const [int, setInt] = useState(1);
  const [wis, setWis] = useState(1);
  const [cha, setCha] = useState(1);
  const [alignment, setAlignment] = useState("");
  const [faction, setFaction] = useState("")

  const handleShow = () => setShow(true);
  
  const handleClose = () => {
    setShow(false);

    const payload = {
      name : name,
      desc : description ,
      statStrength : str ,
      statDexerity : dex ,
      statConstitution : con ,
      statIntelligence : int ,
      statWisdom : wis ,
      statCharisma : cha,
      faction : faction,
      alignment : alignment
    }
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
          <CreateCharacterForm
            setName = {setName}
            setDescription = {setDescription}
            setStr = {setStr}
            setDex = {setDex}
            setCon = {setCon}
            setInt = {setInt}
            setWis = {setWis}
            setCha = {setCha}
            setAlignment = {setAlignment}
            setFaction = {setFaction}
          />
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