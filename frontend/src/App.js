import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import CreateCharacterContainer from './components/CreateCharacterContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CharacterCards from "./components/CharacterCards";
import {useEffect, useState} from "react";

function App() {

  const [character, setCharacter] = useState([]);

  return (
    <div className="App">
      <Container fluid>
        <Row >
          <CharacterCards character={character} setCharacter={setCharacter}/>
        </Row>
        <Row>
          <CreateCharacterContainer character ={character} setCharacter={setCharacter}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
