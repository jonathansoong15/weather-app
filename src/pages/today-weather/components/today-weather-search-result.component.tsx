import React from "react";
import { Container, Row } from "react-bootstrap";
import LabelValuePair from "../../../components/LabelValuePair.component";

interface Props {
  city: String;
  country: String;
  weatherStatus: String;
  description: String;
  temperature: String;
  humidity: String;
  time: String;
}

const TodayWeatherSearchResultComponent = (props: Props) => {
  return (
    <div className="container mt-5">
      <span className="font-weight-light text-secondary">
        {props.city}, {props.country}
      </span>
      <h1>{props.weatherStatus}</h1>
      <Container className="px-0">
        <Row>
          <LabelValuePair label="Description:" value={props.description} />
        </Row>
        <Row>
          <LabelValuePair label="Temperature:" value={props.temperature} />
        </Row>
        <Row>
          <LabelValuePair label="Humidity:" value={props.humidity} />
        </Row>
        <Row>
          <LabelValuePair label="Time:" value={props.time} />
        </Row>
      </Container>
    </div>
  );
};

export default TodayWeatherSearchResultComponent;
