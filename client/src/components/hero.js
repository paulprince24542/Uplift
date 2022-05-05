import { Container, Row, Col } from "reactstrap";
import "./css/hero.css";

function hero() {
  return (
    <Container className="main-container" fluid>
      <Row>
        <Col xl="6">
          <div className="head-div">
            <h1 className="main-heading">Welcome to Uplift</h1>
            <p className="sub-par">Place where developer's connect</p>
          </div>
        </Col>
        <Col xl="6">
            <div class="sub-head">
                <h1>Be a member dude</h1>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default hero;
