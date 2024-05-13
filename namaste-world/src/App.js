// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Container, Row, Card } from "react-bootstrap"; // Import Row and Col
import weblogo from "./images/wscube-tech-logo.svg";
import aboutImg from "./images/banner-right-img.webp";
import { blog } from "./Data/blog";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-regular-svg-icons";

function App() {
  let template = "";
  let [Count, setCount] = useState(1);
  let [pshow, setPshow] = useState(true);
  //we can use logics for the if else components also
  // m-1
  if (pshow) {
    template = <Hard />;
    // template = (
    //   <>
    //     <button className="bg-[red] p-4" onClick={() => setPshow(!pshow)}>
    //       Hide
    //     </button>
    //     template = <p>Welcome to WS</p>
    //   </>
    // );
  } else {
    template = "";
    // template = (
    //   <button className="bg-[red] p-4" onClick={() => setPshow(!pshow)}>
    //     Show
    //   </button>
    // );
  }

  let displayData = () => {
    setCount(Count + 1);
  };
  let addData = (a, b) => {
    console.log(a + b);
  };
  let headerInfo = {
    email: "bj@gmail.com",
    phone: "1234567890",
  };
  // note : if it is default function like diplay data while calling just put in the curly braces if it is parameterized function then make the arrow function and then call the function with passing the parameter
  return (
    <div className="main">
      {/* <button>Show</button> */}
      {template}
      <div>{Count}</div>
      {/* note: dont put a call like displayData() function it will be automatically show the event while entering the webpages sine only put diaplayData in a curly braces so onclick event works */}
      <button
        className="bg-[red] p-[10px] mr-4"
        onClick={() => addData(20, 25)}
      >
        Add Data
      </button>
      <button className="bg-[red] p-[10px]" onClick={displayData}>
        Save
      </button>
      {/* note for variable putting curly braces is important */}
      <img src={weblogo} alt="logo" width={200} />
      <img src={aboutImg} alt="about" />
      <Header headerInfo={headerInfo} cname="wscubetech" c="hello">
        <h1 className="text-[40px] text-red-900 font-bold">
          Welcome to the bijays world
        </h1>
        {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
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
            return <ProductItems pitems={v} key={i} />;
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

function ProductItems({ pitems }) {
  return (
    <div className="col-lg-3 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>{pitems.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

let Hard = () => {
  return <h1>Welcome to WS</h1>;
};
