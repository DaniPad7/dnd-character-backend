// eslint-disable-next-line 
import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreateCharacterForm from '../forms/CreateCharacterForm';
import * as Random from '../constants/random';
import {postProfile} from '../services/profile-repo';

const CreateCharacterContainer = (props) => {
  const [show, setShow] = useState(false);
  const [name ,setName] = useState("");
  const [description, setDescription] = useState("");
  const [str, setStr] = useState(15);
  const [dex, setDex] = useState(14);
  const [con, setCon] = useState(13);
  const [int, setInt] = useState(12);
  const [wis, setWis] = useState(10);
  const [cha, setCha] = useState(8);
  const [alignment, setAlignment] = useState("");
  const [faction, setFaction] = useState("")

  const handleShow = () => setShow(true);
  
  const handleClose = async () => {
    setShow(false);

    const payload = {
      name : name,
      desc : description,
      statStrength : str,
      statDexterity : dex,
      statConstitution : con,
      statIntelligence : int,
      statWisdom : wis,
      statCharisma : cha,
      faction : faction,
      alignment : {alignment: alignment}
    }

    console.log(payload);

    let newProfile = await postProfile(payload);
    newProfile.alignment = newProfile.alignment.alignment;
    props.setCharacter([...props.character, newProfile]);
  }

  const handleRandom = () => {
    let stats = [];
    for (let j = 0; j < 6; j++) {
      let dice = [];
      for (let i = 0; i < 4; i++) {
        let rand = newRNG(6) + 1;
        dice.push(rand);
      }
      dice.sort().reverse().pop();
      stats.push(dice.reduce((a, b) => a+b));
    }
    setStr(stats[0]);
    setDex(stats[1]);
    setCon(stats[2]);
    setInt(stats[3]);
    setWis(stats[4]);
    setCha(stats[5]);
    setName(Random.fNames[newRNG(6)] + " " + Random.sNames[newRNG(6)]);
    setDescription(Random.descs[newRNG(6)]);
    setFaction(Random.factions[newRNG(6)]);
    setAlignment(Random.alignments[newRNG(9)]);
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
          <CreateCharacterForm
            name = {name}
            setName = {setName}
            description = {description}
            setDescription = {setDescription}
            str = {str}
            setStr = {setStr}
            dex = {dex}
            setDex = {setDex}
            con = {con}
            setCon = {setCon}
            int = {int}
            setInt = {setInt}
            wis = {wis}
            setWis = {setWis}
            cha = {cha}
            setCha = {setCha}
            alignment = {alignment}
            setAlignment = {setAlignment}
            faction = {faction}
            setFaction = {setFaction}
            
          />
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