const API_KEY = "4a46171ca0ae17f27086ea1de0de86d6";

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
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},,${countryCode}&appid=${API_KEY}`
    );

    return response.json();
  },
};
