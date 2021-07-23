import React from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button} from "bootstrap";


export default function CharacterCard(props) {
    return (
        <Container>
            <div id={props.id}>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.desc}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Strength: {props.statStrength} Dexterity: {props.statDexterity}</ListGroupItem>
                        <ListGroupItem>Constitution: {props.statConstitution} Wisdom: {props.statWisdom}</ListGroupItem>
                        <ListGroupItem>Charisma: {props.statCharisma}</ListGroupItem>
                        <ListGroupItem>Faction: {props.faction}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}