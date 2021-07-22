import React, {useState} from 'react';
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
          <Form.Control type="text" placeholder= "Enter Name here" onChange = { (e) => {props.setName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterDescription">
          <Form.Label>Character Description</Form.Label>
          <Form.Control as = "textarea" placeholder = "Enter Description here" onChange = { (e) => {props.setDescription(e.target.value)}}/>
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>STR </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} onChange = { (e) => {props.setStr(e.target.value)} }/> 
            <Form.Label>DEX </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} onChange = { (e) => {props.setDex(e.target.value)} }/>  
            <Form.Label>CON </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} onChange = { (e) => {props.setCon(e.target.value)} }/>  
          </InputGroup>    
        </Form.Group>

        <br/>

        <Form.Group className = "characterCreate" controlId = "characterStat2">
          <InputGroup className = "characterCreateStats" >
            <Form.Label>INT </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} onChange = { (e) => {props.setInt(e.target.value)} }/>  
            <Form.Label>WIS </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} onChange = { (e) => {props.setWis(e.target.value)} }/>  
            <Form.Label>CHA </Form.Label>
            <Form.Control type="number" min = {MIN_STAT} max = {MAX_STAT} onChange = { (e) => {props.setCha(e.target.value)} }/>
            </InputGroup>    
        </Form.Group>

        <Form.Group className = "characterCreate" controlId = "characterAlignment" >
          <Form.Label> Character Alignment : </Form.Label>
          <Form.Check inline type = "radio"  name="Alignment" id= 'lg' label = {Alignments.LawfulGood} onChange = { () => {props.setAlignment(Alignments.LawfulGood)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ng' label = {Alignments.NeutralGood} onChange = { () => {props.setAlignment(Alignments.NeutralGood)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cg' label = {Alignments.ChaoticGood} onChange = { () => {props.setAlignment(Alignments.ChaoticGood)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ln' label = {Alignments.LawfulNeutral} onChange = { () => {props.setAlignment(Alignments.LawfulNeutral)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'n'  label = {Alignments.Neutral} onChange = { () => {props.setAlignment(Alignments.Neutral)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'cn' label = {Alignments.ChaoticNeutral} onChange = { () => {props.setAlignment(Alignments.ChaoticNeutral)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'le' label = {Alignments.LawfulEvil} onChange = { () => {props.setAlignment(Alignments.LawfulEvil)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ne' label = {Alignments.NeutralEvil} onChange = { () => {props.setAlignment(Alignments.NeutralEvil)}}/>
          <Form.Check inline type = "radio"  name="Alignment" id= 'ce' label = {Alignments.ChaoticEvil} onChange = { () => {props.setAlignment(Alignments.ChaoticEvil)}}/>
        </Form.Group>


        <Form.Group className = "characterCreate" controlId = "characterFaction">
          <Form.Label> Character Faction :</Form.Label>
          <Form.Control type="text" placeholder= "Enter Faction here" onChange = { (e) => {props.setFaction(e.target.value)} }/>
         </Form.Group>

      </Form>
    </div>
  )
}

export default CreateCharacterForm;