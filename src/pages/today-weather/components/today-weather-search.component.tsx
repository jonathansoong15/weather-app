import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export interface TodayWeatherSearchFormInterface {
  city: string;
  country: string;
}

interface Props {
  handleSearchSubmit: (formValue: TodayWeatherSearchFormInterface) => void;
}

const TodayWeatherSearchComponent = (props: Props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.handleSearchSubmit({ city, country });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={"auto"} className="mb-2">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>
        </Col>

        <Col xs={"auto"} className="mb-2">
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCountry(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
        <Col xs={"auto"} className="align-self-end pb-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodayWeatherSearchComponent;
