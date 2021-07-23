import React, { useEffect, useState } from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import {Alignments} from '../constants/alignment';

const MIN_STAT = 1;
const MAX_STAT = 20;

const CreateCharacterForm = (props)=> {

  const [alignment, setAlignment] = useState("");

  // useEffect(() => {

  // }, [])


  const handleAlignment = e => {
    if (props.preset.alignment === e.target.id.toUpperCase()) {
      setAlignment(e.target.label);
    }
  }

  return (
    <div>
      <Form>
        
        <Form.Group className = "characterCreate" controlId= "characterName">
          <Form.Label>Character Name</Form.Label>
          <Form.Control type="text" placeholder= "Enter Name here" value={props.preset.name}/>
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterDescription">
          <Form.Label>Character Description</Form.Label>
          <Form.Control as = "textarea" placeholder = "Enter Description here" value = {props.preset.desc} />
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>STR </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[0]}/> 
            <Form.Label>DEX </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[1]}/>  
            <Form.Label>CON </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[2]}/>  
          </InputGroup>    
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat2">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>INT </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[3]}/>  
            <Form.Label>WIS </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[4]}/>  
            <Form.Label>CHA </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[5]}/>
            </InputGroup>    
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterAlignment">
          <Form.Label> Character Alignment : </Form.Label>
          <Form.Check inline type = "radio"  name="Alignment" id= 'lg' label = {Alignments[0]} checked={alignment === "LG"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ng' label = {Alignments[1]} checked={alignment === "NG"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cg' label = {Alignments[2]} checked={alignment === "CG"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ln' label = {Alignments[3]} checked={alignment === "LN"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'n'  label = {Alignments[4]} checked={alignment === "N"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cn' label = {Alignments[5]} checked={alignment === "CN"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'le' label = {Alignments[6]} checked={alignment === "LE"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ne' label = {Alignments[7]} checked={alignment === "NE"} onChange={handleAlignment}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ce' label = {Alignments[8]} checked={alignment === "CE"} onChange={handleAlignment}/>
        </Form.Group>


        <Form.Group className = "characterCreate" controlId = "characterFaction">
          <Form.Label> Character Faction :</Form.Label>
          <Form.Control type="text" placeholder= "Enter Faction here" value = {props.preset.faction}/>
         </Form.Group>

      </Form>
    </div>
  )
}

export default CreateCharacterForm;