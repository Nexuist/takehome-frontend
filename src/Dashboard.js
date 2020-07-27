import React from "react";
import {
  Image,
  Table,
  Media,
  Card,
  Button,
  Container,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import "./dashboard.css";
import { PlusCircle, ShoppingCart, Edit, Star } from "react-feather";
import { Line } from "react-chartjs-2";

function ProductItem(props) {
  return (
    <Nav.Item>
      <Nav.Link active={props.active} href="#">
        <ShoppingCart size={18} className="text-muted mr-2" /> {props.name}
      </Nav.Link>
    </Nav.Item>
  );
}

const sampleData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

function Dashboard(props) {
  return (
    <Container fluid>
      <Row>
        <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="sidebar-sticky">
            <div className="text-center mb-4">
              <h5 className="text-muted ">Supermarket</h5>
              <Button variant="outline-danger" size="sm" block={false}>
                Sign Out
              </Button>
            </div>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
              <span>Products</span>
              <a className="d-flex align-items-center text-muted">
                <PlusCircle size={18} />
              </a>
            </h6>
            <Nav as="ul" className="flex-column mb-2">
              <ProductItem active={true} name="Product" />
              <ProductItem name="Product" />
            </Nav>
          </div>
        </Nav>
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <h1 className="mb-5">
            Product <Edit size={18} color="blue" />
          </h1>
          <Container fluid>
            <Row className="mb-5">
              <Col>
                <Card id="description">
                  <Card.Header as="h5">
                    Description
                    <Edit size={18} color="blue" className="float-right" />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.With supporting text below as a natural
                      lead-in to additional content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card id="metadata">
                  <Card.Header as="h5">
                    Metadata
                    <Edit size={18} color="blue" className="float-right" />
                  </Card.Header>
                  <Table striped hover className="mb-0">
                    <thead>
                      <tr>
                        <th>Property</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Weight</td>
                        <td>5 oz</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>10 ft</td>
                      </tr>
                      <tr>
                        <td>Volume</td>
                        <td>100 sq ft</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col id="sales">
                <Card>
                  <Card.Header as="h5">Sales</Card.Header>
                  <Card.Body>
                    <Line data={sampleData} />
                  </Card.Body>
                </Card>
              </Col>
              <Col id="inventory">
                <Card>
                  <Card.Header as="h5">
                    Inventory
                    <Edit size={18} color="blue" className="float-right" />
                  </Card.Header>
                  <Card.Body>
                    <h1>200</h1>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <Card>
                  <Card.Header as="h5">
                    Media
                    <Edit size={18} color="blue" className="float-right" />
                  </Card.Header>
                  <Card.Body>
                    <Image
                      src="https://via.placeholder.com/500C/"
                      width="180px"
                      height="180px"
                      thumbnail
                      className="mr-3"
                    />
                    <Image
                      src="https://via.placeholder.com/500C/"
                      width="180px"
                      height="180px"
                      thumbnail
                      className="mr-3"
                    />
                    <Image
                      src="https://via.placeholder.com/500C/"
                      width="180px"
                      height="180px"
                      thumbnail
                      className="mr-3"
                    />
                    <Image
                      src="https://via.placeholder.com/500C/"
                      width="180px"
                      height="180px"
                      thumbnail
                      className="mr-3"
                    />
                    <Image
                      src="https://via.placeholder.com/500C/"
                      width="180px"
                      height="180px"
                      thumbnail
                      className="mr-3"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <Card>
                  <Card.Header as="h5">Reviews</Card.Header>
                  <Card.Body>
                    <ul className="list-unstyled">
                      <Media as="li">
                        <span className="mr-2">
                          <Star size={18} /> 4.5
                        </span>
                        <Media.Body>
                          <h5>List-based media object</h5>
                          <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin commodo.
                            Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi
                            vulputate fringilla. Donec lacinia congue felis in
                            faucibus.
                          </p>
                        </Media.Body>
                      </Media>

                      <Media as="li">
                        <img
                          width={64}
                          height={64}
                          className="mr-3"
                          src="holder.js/64x64"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5>List-based media object</h5>
                          <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin commodo.
                            Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi
                            vulputate fringilla. Donec lacinia congue felis in
                            faucibus.
                          </p>
                        </Media.Body>
                      </Media>

                      <Media as="li">
                        <img
                          width={64}
                          height={64}
                          className="mr-3"
                          src="holder.js/64x64"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5>List-based media object</h5>
                          <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin commodo.
                            Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi
                            vulputate fringilla. Donec lacinia congue felis in
                            faucibus.
                          </p>
                        </Media.Body>
                      </Media>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </Row>
    </Container>
  );
}

export default Dashboard;
