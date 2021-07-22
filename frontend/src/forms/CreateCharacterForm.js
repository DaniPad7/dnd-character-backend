import React from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import * as Alignments from '../constants/alignment';

const MIN_STAT = 1;
const MAX_STAT = 20;

const CreateCharacterForm = (props)=> {

  return (
    <div>
      <Form>
        
        <Form.Group className = "characterCreate" controlId= "characterName">
          <Form.Label>Character Name</Form.Label>
          <Form.Control type="text" placeholder= "Enter Name here" />
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterDescription">
          <Form.Label>Character Description</Form.Label>
          <Form.Control as = "textarea" placeholder = "Enter Description here" />
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>STR </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/> 
            <Form.Label>DEX </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>  
            <Form.Label>CON </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>  
          </InputGroup>    
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat2">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>INT </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>  
            <Form.Label>WIS </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>  
            <Form.Label>CHA </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>
            </InputGroup>    
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterAlignment">
          <Form.Label> Character Alignment : </Form.Label>
          <Form.Check inline type = "radio"  name="Alignment" id= 'lg' label = {Alignments.LawfulGood}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ng' label = {Alignments.NeutralGood}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cg' label = {Alignments.ChaoticGood}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ln' label = {Alignments.LawfulNeutral}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'n'  label = {Alignments.Neutral}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cn' label = {Alignments.ChaoticNeutral}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'le' label = {Alignments.LawfulEvil}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ne' label = {Alignments.NeutralEvil}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ce' label = {Alignments.ChaoticEvil}/>
        </Form.Group>


        <Form.Group className = "characterCreate" controlId = "characterFaction">
          <Form.Label> Character Faction :</Form.Label>
          <Form.Control type="text" placeholder= "Enter Faction here" />
         </Form.Group>

      </Form>
    </div>
  )
}

export default CreateCharacterForm;