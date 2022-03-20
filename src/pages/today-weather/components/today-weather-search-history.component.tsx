import React from "react";
import { Container, Table } from "react-bootstrap";
import { TodayWeatherSearchFormInterface } from "../today-weather.modal";
import { Search, Trash } from "react-bootstrap-icons";
import { SearchHistoryItem } from "../today-weather.modal";
interface Props {
  data: Array<SearchHistoryItem>;
  handleSeachButtonClick: ({
    city,
    country,
  }: TodayWeatherSearchFormInterface) => void;
  handleDeleteButtonClick: (index: number) => void;
}

const TodayWeatherSearchHistoryComponent = (props: Props) => {
  return (
    <>
      <div className="border-bottom border-dark mt-4 mb-3">
        <h5 className="fw-bold">Search History</h5>
      </div>
      <Table hover>
        <tbody>
          {props.data.length === 0 && (
            <Container className="text-center">
              <span>No Record</span>
            </Container>
          )}
          {props.data.map((val, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {val.city}, {val.country}
                </td>
                <td>{val.searchTime}</td>
                <td
                  onClick={() => {
                    props.handleSeachButtonClick({
                      city: val.city,
                      country: val.country,
                    });
                  }}
                >
                  <Search style={{ cursor: "pointer" }} />
                </td>
                <td
                  onClick={() => {
                    props.handleDeleteButtonClick(index);
                  }}
                >
                  <Trash style={{ cursor: "pointer" }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TodayWeatherSearchHistoryComponent;
