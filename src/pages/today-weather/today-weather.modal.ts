export interface SearchResult {
  city: String;
  country: String;
  weatherStatus: String;
  description: String;
  temperature: String;
  humidity: String;
  time: String;
}

export interface TodayWeatherSearchFormInterface {
  city: String;
  country: String;
}

export interface SearchHistoryItem {
  city: String;
  country: String;
  searchTime: String;
}
