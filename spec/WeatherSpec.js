describe('Weather', function() {
  beforeEach(function() {
    weather = new Weather("sunny");
  })
  describe('weatherReport', function() {
    it('can generate a forecase of sunny', function() {
      expect(weather.showWeather()).toBe("sunny");
    })

    it('can generate a forecast of stormy', function() {
      weather.generateWeather("stormy");
      expect(weather.showWeather()).toBe("stormy");
    })
  })
})
