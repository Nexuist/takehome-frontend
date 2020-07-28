import React, { useEffect, useState } from "react";
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

/*
  - active: boolean
  - name: string
*/
function ProductItem(props) {
  return (
    <Nav.Item>
      <Nav.Link active={props.active} href="#">
        <ShoppingCart size={18} className="text-muted mr-2" /> {props.name}
      </Nav.Link>
    </Nav.Item>
  );
}

/*
  - username: string
  - onLogOut: function
*/
function Sidebar(props) {
  return (
    <div className="sidebar-sticky">
      <div className="text-center mb-4">
        <h5 className="text-muted">{props.username}</h5>
        <Button
          variant="outline-danger"
          size="sm"
          block={false}
          onClick={props.onLogOut}
        >
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
        <ProductItem active={true} name="Banana" />
        <ProductItem name="Orange" />
      </Nav>
    </div>
  );
}

/*
  - className: string
  - header: string
  - editable: boolean
  - child: any
*/
function CardCol(props) {
  return (
    <Col className={props.className + " col-12 col-md-6 mb-5"}>
      <Card id="description">
        <Card.Header as="h5">
          {props.header}
          {props.editable == true && (
            <Edit size={18} color="blue" className="float-right" />
          )}
        </Card.Header>
        {props.children}
      </Card>
    </Col>
  );
}

/*
  - className: string
  - header: string
  - editable: boolean
  - child: any
*/
function CardColWithBody(props) {
  return (
    <CardCol {...props}>
      <Card.Body>{props.children}</Card.Body>
    </CardCol>
  );
}

const sampleData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Banana Sales",
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
  let [products, setProducts] = useState(null);
  let [selectedProduct, selectProduct] = useState(null);
  useEffect(() => {
    async function fetchProducts() {
      let result = await props
        .post("/products/mine", {
          username: props.user.username,
          password: props.user.password,
        })
        .then((res) => res.json());
      if (!result.success)
        alert("There was a problem retrieving your products");
      selectProduct(result.products[0]);
      setProducts(result.products);
    }
    fetchProducts();
  }, []);
  return (
    <Container fluid>
      <Row>
        <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <Sidebar
            username={props.user.username}
            onLogOut={props.onLogOut}
            products={products}
          />
        </Nav>
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          {products == null ? (
            <p className="text-muted text-center">loading...</p>
          ) : (
            <Container fluid>
              <Row className="mb-5">
                <Col>
                  <h1>
                    {selectedProduct.name} <Edit size={18} color="blue" />
                  </h1>
                </Col>
              </Row>
              <Row>
                <CardColWithBody header="Description" editable={true}>
                  <Card.Text>{selectedProduct.description}</Card.Text>
                </CardColWithBody>
                <CardCol header="Metadata" editable={true}>
                  {Object.keys(selectedProduct.metadata).length == 0 && (
                    <p className="text-muted pt-3 pl-3">
                      No product metadata available.
                    </p>
                  )}
                  <Table striped hover className="mb-0">
                    <thead>
                      <tr>
                        <th>Property</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(selectedProduct.metadata).map(
                        ([key, value]) => (
                          <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                </CardCol>
              </Row>
              <Row>
                <CardColWithBody header="Sales">
                  <Line data={sampleData} />
                </CardColWithBody>

                <CardColWithBody
                  header="Price & Inventory"
                  editable={true}
                  className="pb-2"
                >
                  <h1>
                    ${selectedProduct.price} <small>per item</small>
                  </h1>
                  <h1>
                    {selectedProduct.inventoryCount}{" "}
                    <small>units in inventory</small>
                  </h1>
                </CardColWithBody>
              </Row>
              <Row>
                <CardColWithBody
                  header="Media"
                  editable={true}
                  className="col-md-12"
                >
                  {selectedProduct.media.length == 0 && (
                    <p className="text-muted">No product media listed.</p>
                  )}
                  {selectedProduct.media.map((x) => (
                    <Image
                      src="https://via.placeholder.com/500C/"
                      width="180px"
                      height="180px"
                      thumbnail
                      className="mr-3"
                    />
                  ))}
                </CardColWithBody>
              </Row>
              <Row>
                <CardColWithBody header="Reviews" className="col-md-12">
                  {selectedProduct.reviews.length == 0 && (
                    <p class="text-muted">
                      No reviews available for this product.
                    </p>
                  )}
                  {selectedProduct.reviews.map((x) => (
                    <Media as="li">
                      <span className="mr-2">
                        <Star size={18} /> {x.stars}
                      </span>
                      <Media.Body>
                        <h5>{x.reviewerUsername}</h5>
                        <p>{x.text}</p>
                      </Media.Body>
                    </Media>
                  ))}
                </CardColWithBody>
              </Row>
            </Container>
          )}
        </main>
      </Row>
    </Container>
  );
}

export default Dashboard;
