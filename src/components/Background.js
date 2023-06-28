import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Background() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          style={{
            width: "1100px",
            minHeight: "428px",
            marginBottom: "50px",
            backgroundColor: "#DEEED6",
          }}
          className="text-black"
        >
          <div
            style={{
              top: "auto",
              width: "578px",
              marginLeft: "100px",
              marginBottom: "50px",
              marginTop: "75px",
            }}
          >
            <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: "1em" }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="   Enter your address                                         "
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
      <div>
        <img
          style={{
            height: "428px",
            width: "28%",
            position: "absolute",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          src="background.jpg"
          alt="Card image"
        />
      </div>
    </div>
  );
}
export default Background;
