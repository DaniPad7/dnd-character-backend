import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import CreateCharacterContainer from './components/CreateCharacterContainer';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row >
          <p>Character Cards goes here</p>
        </Row>
        <Row>
          <CreateCharacterContainer/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
