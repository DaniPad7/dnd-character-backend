import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CreateCharacterform from './components/CreateCharacterForm';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row >
          <p>Character Cards goes here</p>
        </Row>
        <Row>
          <CreateCharacterform/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
