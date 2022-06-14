import React, { useState } from "react";
import TodayWeatherSearchHistoryComponent from "./components/today-weather-search-history.component";
import TodayWeatherSearchResultComponent from "./components/today-weather-search-result.component";
import TodayWeatherSearchComponent from "./components/today-weather-search.component";
import { WeatherApiService } from "../../services/apis/weather.api";
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
  const [displayNotFoundError, setDisplayNotFoundError] = useState(false);

  const handleSearchSubmit = async (
    { city, country }: TodayWeatherSearchFormInterface,
    skipAddIntoSearchHistory?: boolean
  ) => {
    const result: any = await WeatherApiService.getCurrentWeather({
      cityName: city,
      countryCode: country,
    });

    if (result?.cod === "404") {
      setDisplayNotFoundError(true);
      setData(null);
      return;
    }

    const timestamp = new Date().toString();
    const transformedData = {
      city: result.name,
      country: result.sys.country,
      weatherStatus: result.weather[0].main,
      description: result.weather[0].description,
      temperature: `${result.main.temp_min} ~ ${result.main.temp_max}`,
      humidity: result.main.humidity,
      time: timestamp,
    };

    setData(transformedData);
    setDisplayNotFoundError(false);

    if (skipAddIntoSearchHistory) return;
    setSearchHistory([
      { city, country, searchTime: timestamp },
      ...searchHistory,
    ]);
  };

  const handleSearchHistoryDelete = (index: number) => {
    setSearchHistory(searchHistory.filter((val, i) => i !== index));
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
          displayNotFoundError={displayNotFoundError}
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
