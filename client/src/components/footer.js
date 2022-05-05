import "./css/footer.css";
import { Container, Row, Col, Button } from "reactstrap";

function footer() {
  return (
    <Container fluid>
      <footer>
        <Row className="footer">
          <Col xl="3" md="6">
            <p className="footer-heading">Where To Buy</p>
            <br></br>
            <p>See Authorized Retailers</p>
          </Col>
          <Col xl="3" md="6">
            <p className="footer-heading">Uplift Rewards</p>
            <br></br>
            <p>Join Now</p>
            <p>Learn More</p>
            <p>Manage Account</p>
          </Col>
          <Col xl="3" md="6">
            <p className="footer-heading">News & Info</p>
            <br></br>
            <p>Press Releases</p>
            <p>About Sony</p>
            <p>Product Support</p>
            <p>Product Manuals</p>
            <p>Product Registeration</p>
            <p>Newsletter Signup</p>
            <p>Accesability and Usability</p>
          </Col>
          <Col xl="3" md="6">
            <p className="footer-heading">Other Sites</p>
            <br></br>
            <p>Play Station</p>
            <p>Sony Pictures</p>
            <p>Sony Music</p>
            <p>Sony Module</p>
            <p>Crackle</p>
            <p>Sony Square NYC</p>
          </Col>
          <Col xl="1">
            <br></br>
            <br></br>
            <Button>India</Button>
          </Col>
          <Col xl="1"></Col>
          <Col xl="1"></Col>
          <Col xl="1"></Col>
          <Col xl="1"></Col>
          <Col xl="1"></Col>
          <Col xl="1">
            <br></br>
            <br></br>
            <p>For Professionals</p>
          </Col>
          <Col xl="1">
            <br></br>
            <br></br>
            <p>Careers</p>
          </Col>
          <Col xl="1">
            <br></br>
            <br></br>
            <p>Contact Us</p>
          </Col>
          <Col xl="1">
            <br></br>
            <br></br>
            <p>Company Info</p>
          </Col>
          <Col xl="1"></Col>
          <Col xl="1"></Col>
          <Col xl="1">
            <br></br>
          </Col>
          <hr></hr>
          <Col xs="12" className="copyright">
            © 2015 - 2022 | Uplift Technologies Private Limited. | All Rights
            Reserved with Copyright & TradeMarks
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default footer;
