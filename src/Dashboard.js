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
  Modal,
} from "react-bootstrap";
import "./dashboard.css";
import { PlusCircle, ShoppingCart, Edit, Star } from "react-feather";
import { Line } from "react-chartjs-2";
import CardCol from "./CardCol";
import CardColWithBody from "./CardColWithBody";

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
  let updateProductKey = async (id, key, value) => {
    let url = `/products/${props.user.username}/${id}/update`;
    console.log(url, key, value);
    return await props.post(url, {
      username: props.user.username,
      password: props.user.password,
      key,
      value,
    });
  };
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
    if (products == null) fetchProducts();
  }, [products]);
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
                <CardColWithBody
                  header="Name"
                  editableProperties={{
                    Name: {
                      value: selectedProduct.name,
                      textArea: false,
                    },
                  }}
                  onSaveChanges={async (edits) => {
                    await updateProductKey(1, "name", edits.Name.value);
                    setProducts(null);
                  }}
                  className="col-md-12"
                >
                  <Card.Text>
                    <h1>{selectedProduct.name}</h1>
                  </Card.Text>
                </CardColWithBody>
              </Row>
              <Row>
                <CardColWithBody
                  header="Description"
                  editableProperties={{
                    Description: {
                      value: selectedProduct.description,
                      textArea: true,
                    },
                  }}
                  onSaveChanges={async (edits) => {
                    await updateProductKey(
                      1,
                      "description",
                      edits.Description.value
                    );
                    setProducts(null);
                  }}
                >
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
                      key={x}
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
                    <Media as="li" key={x.timestamp}>
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
