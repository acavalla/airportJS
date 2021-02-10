class Weather {
  constructor(weather = generateWeather()){
    this.weatherReport = weather;
  }

  generateWeather(weather) {
    if (weather === 0) {
      if (Math.random() * 10 > 7) {
        this.weatherReport = "stormy";
      } else {
        this.weatherReport = "sunny";
      }
    } else {
      this.weatherReport = weather;
    }
    return this.weatherReport;
  }

  showWeather() {
    return this.weatherReport;
  }
}
