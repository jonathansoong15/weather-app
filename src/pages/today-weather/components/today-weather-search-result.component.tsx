import React from "react";
import { Container, Row, Alert } from "react-bootstrap";
import { SearchResult } from "../today-weather.modal";
import { LabelValuePair } from "../../../components";

interface Props {
  data?: SearchResult | null;
  displayNotFoundError?: boolean;
}

const TodayWeatherSearchResultComponent = (props: Props) => {
  return (
    <div className="container mt-5">
      {props?.data && (
        <>
          <span className="font-weight-light text-secondary">
            {props.data.city}, {props.data.country}
          </span>
          <h1>{props.data.weatherStatus}</h1>
          <Container className="px-0">
            <Row>
              <LabelValuePair
                label="Description:"
                value={props.data.description}
              />
            </Row>
            <Row>
              <LabelValuePair
                label="Temperature:"
                value={props.data.temperature}
              />
            </Row>
            <Row>
              <LabelValuePair label="Humidity:" value={props.data.humidity} />
            </Row>
            <Row>
              <LabelValuePair label="Time:" value={props.data.time} />
            </Row>
          </Container>
        </>
      )}
      {props?.displayNotFoundError && (
        <Alert variant="danger">
          <p>Not found.</p>
        </Alert>
      )}
    </div>
  );
};

export default TodayWeatherSearchResultComponent;
