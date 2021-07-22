import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CreateCharacterContainer from './components/CreateCharacterContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Container fluid>
        <Row >
          <p>Character Cards goes here</p>
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
