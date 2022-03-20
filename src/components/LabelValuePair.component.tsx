import React from "react";
import { Col } from "react-bootstrap";

interface Props {
  label: String;
  value: String;
}

const LabelValuePair = (props: Props) => {
  return (
    <>
      <Col xs={3}>
        <span className="text-secondary">{props.label}</span>
      </Col>
      <Col xs={9}>
        <span>{props.value}</span>
      </Col>
    </>
  );
};

export default LabelValuePair;
