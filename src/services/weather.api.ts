import { ENV_CONFIG } from "../utils/constants";

export interface GetCurrentWeatherInterface {
  cityName: String;
  countryCode: String;
}

export const WeatherApiService = {
  getCurrentWeather: async ({
    cityName,
    countryCode,
  }: GetCurrentWeatherInterface) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},,${countryCode}&appid=${ENV_CONFIG.openWeatherApiKey}`
    );

    return response.json();
  },
};
