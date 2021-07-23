import React, {useState} from 'react';
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
          <Form.Control type="text" placeholder= "Enter Name here" value={props.preset.name} onChange = { (e) => {props.setName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterDescription">
          <Form.Label>Character Description</Form.Label>
          <Form.Control as = "textarea" placeholder = "Enter Description here" value = {props.preset.desc} onChange = { (e) => {props.setDescription(e.target.value)}}/>
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>STR </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[0]} onChange = { (e) => {props.setStr( Number( e.target.value  ))} }/> 
            <Form.Label>DEX </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[1]} onChange = { (e) => {props.setDex( Number( e.target.value  ))} }/>  
            <Form.Label>CON </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[2]} onChange = { (e) => {props.setCon( Number( e.target.value  ))} }/>  
          </InputGroup>    
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat2">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>INT </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[3]} onChange = { (e) => {props.setInt( Number( e.target.value  ) )} }/>  
            <Form.Label>WIS </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[4]} onChange = { (e) => {props.setWis( Number( e.target.value  ))} }/>  
            <Form.Label>CHA </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} value={props.preset.stats[5]} onChange = { (e) => {props.setCha( Number( e.target.value  ))} }/>
            </InputGroup>    
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterAlignment" >
          <Form.Label> Character Alignment : </Form.Label>
          <Form.Check inline type = "radio"  name="Alignment" id= 'lg' label = {Alignments[0]} onChange = { () => {props.setAlignment(Alignments[0])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ng' label = {Alignments[1]} onChange = { () => {props.setAlignment(Alignments[1])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cg' label = {Alignments[2]} onChange = { () => {props.setAlignment(Alignments[2])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ln' label = {Alignments[3]} onChange = { () => {props.setAlignment(Alignments[3])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'n'  label = {Alignments[4]} onChange = { () => {props.setAlignment(Alignments[4])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cn' label = {Alignments[5]} onChange = { () => {props.setAlignment(Alignments[5])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'le' label = {Alignments[6]} onChange = { () => {props.setAlignment(Alignments[6])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ne' label = {Alignments[7]} onChange = { () => {props.setAlignment(Alignments[7])}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ce' label = {Alignments[8]} onChange = { () => {props.setAlignment(Alignments[8])}}/>
        </Form.Group>


        <Form.Group className = "characterCreate" controlId = "characterFaction">
          <Form.Label> Character Faction :</Form.Label>
          <Form.Control type="text" placeholder= "Enter Faction here" value = {props.preset.faction} onChange = { (e) => {props.setFaction(e.target.value)} }/>
         </Form.Group>

      </Form>
    </div>
  )
}

export default CreateCharacterForm;