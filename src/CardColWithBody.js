import React from "react";
import CardCol from "./CardCol";
import { Card } from "react-bootstrap";

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

export default CardColWithBody;
