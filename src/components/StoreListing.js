import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function StoreListings() {
  return (
    <Container className="p-3">
      <p className="text-center text-white">
        Thank you for visiting this website
      </p>
      <p className="text-center mt-5 text-white">Follow us on social media:</p>
      <Row className="spacing">
        <Col className="text-center">
          <Container style={{ textAlign: "center" }}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                  marginLeft: "120px",
                  textAlign: "center",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
              <Card.Body>
                <Card.Title>ALDI</Card.Title>
                <Card.Text>Delivery * Pickup</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col className="text-center">
          <Container style={{ textAlign: "center" }}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                  marginLeft: "120px",
                  textAlign: "center",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png"
                roundedCircle
              />
              <Card.Body>
                <Card.Title>HEB</Card.Title>
                <Card.Text>Delivery * Pickup</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Row className="spacing">
        <Col className="text-center">
          <Container style={{ textAlign: "center" }}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                  marginLeft: "120px",
                  textAlign: "center",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
              <Card.Body>
                <Card.Title>ALDI</Card.Title>
                <Card.Text>Delivery * Pickup</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col className="text-center">
          <Container style={{ textAlign: "center" }}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                  marginLeft: "120px",
                  textAlign: "center",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png"
                roundedCircle
              />
              <Card.Body>
                <Card.Title>HEB</Card.Title>
                <Card.Text>Delivery * Pickup</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Row className="spacing">
        <Col className="text-center">
          <Container style={{ textAlign: "center" }}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                  marginLeft: "120px",
                  textAlign: "center",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
              <Card.Body>
                <Card.Title>ALDI</Card.Title>
                <Card.Text>Delivery * Pickup</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col className="text-center">
          <Container style={{ textAlign: "center" }}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                  marginLeft: "120px",
                  textAlign: "center",
                }}
                src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png"
                roundedCircle
              />
              <Card.Body>
                <Card.Title>HEB</Card.Title>
                <Card.Text>Delivery * Pickup</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreListings;
