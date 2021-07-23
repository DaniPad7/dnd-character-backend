import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreateCharacterForm from '../forms/CreateCharacterForm';
import * as Random from '../constants/random';

const CreateCharacterContainer = () => {
  const [show, setShow] = useState(false);
  const [preset, setPreset] = useState({
    name: '',
    desc: '',
    faction: '',
    alignment: '',
    stats: []
  });

  const handleShow = () => setShow(true);
  
  const handleClose = () => {
    setShow(false);
  }

  const handleRandom = () => {
    let statList = [];
    for (let j = 0; j < 6; j++) {
      let dice = [];
      for (let i = 0; i < 4; i++) {
        let rand = newRNG(6) + 1;
        dice.push(rand);
      }
      dice.sort().reverse().pop();
      statList.push(dice.reduce((a, b) => a+b));
      console.log(statList);
    }
    let n = Random.fNames[newRNG(6)] + " " + Random.sNames[newRNG(6)];
    let d = Random.descs[newRNG(6)];
    let f = Random.factions[newRNG(6)];
    let a = Random.alignments[newRNG(9)];

    setPreset({
      name: n,
      desc: d,
      faction: f,
      alignment: a,
      stats: statList
    });
  }

  function newRNG(n) {
    return Math.floor(((Math.random() * 1000) % n));
  }


  return (
    <div>

      <Modal size = "lg" show = {show} onHide={handleClose} animation= {false}>
        <Modal.Header closeButton>
          <Modal.Title> Create Your Character here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCharacterForm preset = {preset}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "primary" onClick = {handleClose}>
            Save Changes
          </Button>
          <Button variant = "primary" onClick = {handleRandom}>
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