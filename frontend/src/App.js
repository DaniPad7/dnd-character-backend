import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import CreateCharacterContainer from './components/CreateCharacterContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CharacterCards from "./components/CharacterCards";
import {useState} from "react";

function App() {

    const [character, setCharacter] = useState([]);

  return (
    <div className="App">
      <Router>
      <Container fluid>
        <Row >
          <CharacterCards character={character} setCharacter={setCharacter}/>
        </Row>
        <Row>
          <CreateCharacterContainer/>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
