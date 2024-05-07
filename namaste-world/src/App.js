import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <Header />
      <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-4">
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6"></Col>
            <Col lg="3" md="6"></Col>
            <Col lg="3" md="6"></Col>
            <Col lg="3" md="6"></Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

