import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import CreateCharacterContainer from './components/CreateCharacterContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import getTestData from "./services/test-service";

function App() {

    const test = async () => {
        let data = await getTestData()
        console.log(data);
    }

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
          <Button onClick={test}>
              click me!
          </Button>
      </Container>
      </Router>
    </div>
  );
}

export default App;
