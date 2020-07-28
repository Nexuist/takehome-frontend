import React, { useEffect, useState } from "react";
import { Card, Button, Col, Modal, Form } from "react-bootstrap";
import { Edit } from "react-feather";

/*
  - className: string
  - header: string
  - editableProperties: { name: string, defaultValue: string, textArea: boolean }
  - onSaveChanges: function
  - child: any
*/
function CardCol(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleClose = () => setShowEditModal(false);
  const handleShow = () => setShowEditModal(true);
  let obj = {};
  if (props.editableProperties) obj = props.editableProperties;
  const [state, setState] = useState(obj);
  const handleChange = (name, evt) => {
    setState({
      ...state,
      [name]: {
        val: evt.target.value,
        textArea: state[name].textArea,
      },
    });
  };
  const handleUpdate = () => {
    props.onSaveChanges(state);
    handleClose();
  };
  return (
    <Col className={props.className + " col-12 col-md-6 mb-5"}>
      <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state &&
            Object.entries(state).map(([key, val]) => (
              <Form.Group key={key}>
                <Form.Label>{key}</Form.Label>
                {val.textArea ? (
                  <textarea
                    className="form-control"
                    value={val.value}
                    onChange={(e) => handleChange(key, e)}
                  />
                ) : (
                  <Form.Control
                    type="string"
                    value={val.value}
                    onChange={(e) => handleChange(key, e)}
                  />
                )}
              </Form.Group>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Card id="description">
        <Card.Header as="h5">
          {props.header}
          {props.editableProperties && (
            <Edit
              size={18}
              color="blue"
              className="float-right"
              onClick={handleShow}
            />
          )}
        </Card.Header>
        {props.children}
      </Card>
    </Col>
  );
}
export default CardCol;
