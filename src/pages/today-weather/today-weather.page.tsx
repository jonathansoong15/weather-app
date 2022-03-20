import React, { useState } from "react";
import TodayWeatherSearchHistoryComponent, {
  SearchHistoryData,
} from "./components/today-weather-search-history.component";
import TodayWeatherSearchResultComponent from "./components/today-weather-search-result.component";
import TodayWeatherSearchComponent, {
  TodayWeatherSearchFormInterface,
} from "./components/today-weather-search.component";
import { WeatherApiService } from "../../services/weather.api";

interface SearchResult {
  city: String;
  country: String;
  weatherStatus: String;
  description: String;
  temperature: String;
  humidity: String;
  time: String;
}

const TodayWeatherPage = () => {
  const [data, setData] = useState<SearchResult | null>(null);

  const [searchHistory, setSearchHistory] = useState<Array<SearchHistoryData>>(
    []
  );

  const handleSearchSubmit = async ({
    city,
    country,
  }: TodayWeatherSearchFormInterface) => {
    const result: any = await WeatherApiService.getCurrentWeather({
      cityName: city,
      countryCode: country,
    });

    console.log(result);

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

    setSearchHistory([
      { city, country, searchTime: timestamp },
      ...searchHistory,
    ]);
  };

  return (
    <>
      <div className="container">
        <div className="border-bottom border-dark mt-2 mb-2">
          <h1>Today's Weather</h1>
        </div>
        <TodayWeatherSearchComponent handleSearchSubmit={handleSearchSubmit} />
        {data && <TodayWeatherSearchResultComponent {...data} />}
        <TodayWeatherSearchHistoryComponent data={searchHistory} />
      </div>
    </>
  );
};

export default TodayWeatherPage;
