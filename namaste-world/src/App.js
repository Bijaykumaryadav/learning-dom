// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Container, Row, Col, Card } from "react-bootstrap"; // Import Row and Col
import { blog } from "./Data/blog";

function App() {
  let headerInfo = {
    email: "bj@gmail.com",
    phone: "1234567890",
  };

  return (
    <div className="main">
      <Header headerInfo={headerInfo} cname="wscubetech" c="hello">
        <h1>Welcome to the bijays world</h1>
      </Header>
      {/* <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-4">
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
      <Container>
        <Row>
          {blog.map((v, i) => {
            return <ProductItems />;
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

function ProductItems() {
  return (
    <Col lg="3" md="6" class="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Course1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
