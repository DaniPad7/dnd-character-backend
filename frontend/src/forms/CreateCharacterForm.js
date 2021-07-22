import React from 'react';
import {Form, InputGroup} from 'react-bootstrap';

const MIN_STAT = 1;
const MAX_STAT = 20;

const CreateCharacterForm = ()=> {
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

        <Form.Group className = "characterCreate" controlId = "characterStat">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>INT </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>  
            <Form.Label>WIS </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>  
            <Form.Label>CHA </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT}/>
            </InputGroup>    
        </Form.Group>
   
      </Form>
    </div>
  )
}

export default CreateCharacterForm;