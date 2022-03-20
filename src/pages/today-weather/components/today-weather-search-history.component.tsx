import React from "react";
import { Table } from "react-bootstrap";

export interface SearchHistoryData {
  city: String;
  country: String;
  searchTime: String;
}

interface Props {
  data: Array<SearchHistoryData>;
}

const TodayWeatherSearchHistoryComponent = (props: Props) => {
  return (
    <>
      <div className="border-bottom border-dark mt-4 mb-3">
        <h5 className="fw-bold">Search History</h5>
      </div>
      <Table hover>
        <tbody>
          {props.data.map((val, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {val.city}, {val.country}
                </td>
                <td>{val.searchTime}</td>
                <td>Search</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TodayWeatherSearchHistoryComponent;
