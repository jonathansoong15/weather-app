import React, { useState } from "react";
import TodayWeatherSearchHistoryComponent from "./components/today-weather-search-history.component";
import TodayWeatherSearchResultComponent from "./components/today-weather-search-result.component";
import TodayWeatherSearchComponent from "./components/today-weather-search.component";
import { WeatherApiService } from "../../services/weather.api";
import {
  SearchResult,
  TodayWeatherSearchFormInterface,
  SearchHistoryItem,
} from "./today-weather.modal";

const TodayWeatherPage = () => {
  const [data, setData] = useState<SearchResult | null | undefined>(null);
  const [searchHistory, setSearchHistory] = useState<Array<SearchHistoryItem>>(
    []
  );
  const [notFoundError, setNotFoundError] = useState(false);

  const handleSearchSubmit = async (
    { city, country }: TodayWeatherSearchFormInterface,
    skipAddIntoSearchHistory?: boolean
  ) => {
    const result: any = await WeatherApiService.getCurrentWeather({
      cityName: city,
      countryCode: country,
    });

    if (result?.cod === "404") {
      setNotFoundError(true);
      setData(null);
      return;
    }

    const timestamp = new Date().toString();
    const transformedDate = {
      city: result.name,
      country: result.sys.country,
      weatherStatus: result.weather[0].main,
      description: result.weather[0].description,
      temperature: `${result.main.temp_min} ~ ${result.main.temp_max}`,
      humidity: result.main.humidity,
      time: timestamp,
    };

    setData(transformedDate);
    setNotFoundError(false);

    if (skipAddIntoSearchHistory) return;
    setSearchHistory([
      { city, country, searchTime: timestamp },
      ...searchHistory,
    ]);
  };

  const handleSearchHistoryDelete = (index: number) => {
    const filteredList = searchHistory.filter((val, i) => i !== index);
    setSearchHistory(filteredList);
  };

  return (
    <>
      <div className="container">
        <div className="border-bottom border-dark mt-2 mb-2">
          <h1>Today's Weather</h1>
        </div>
        <TodayWeatherSearchComponent handleSearchSubmit={handleSearchSubmit} />
        <TodayWeatherSearchResultComponent
          data={data}
          displayNotFoundError={notFoundError}
        />
        <TodayWeatherSearchHistoryComponent
          data={searchHistory}
          handleSeachButtonClick={(data) => {
            handleSearchSubmit(data, true);
          }}
          handleDeleteButtonClick={handleSearchHistoryDelete}
        />
      </div>
    </>
  );
};

export default TodayWeatherPage;
