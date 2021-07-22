import React from 'react';
import {Form} from 'react-bootstrap';


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
          <Form.Control type="text" placeholder = "Enter Description here" />
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterStr">
          <Form.Label>Character Strength</Form.Label>
          <Form.Control type="number" min = {0} max = {20}/>          
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterDex">
          <Form.Label>Character Dexerity</Form.Label>
          <Form.Control type="number" min = {0} max = {20}/>          
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterCon">
          <Form.Label>Character Constitution</Form.Label>
          <Form.Control type="number" min = {0} max = {20}/>          
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterInt">
          <Form.Label>Character Intelligence</Form.Label>
          <Form.Control type="number" min = {0} max = {20}/>          
        </Form.Group>


        <Form.Group className = "characterCreate" controlId = "characterWis">
          <Form.Label>Character Wisdom</Form.Label>
          <Form.Control type="number" min = {0} max = {20}/>          
        </Form.Group>

      </Form>
    </div>
  )
}

export default CreateCharacterForm;