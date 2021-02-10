describe('Weather', function() {
  beforeEach(function() {
    weather = new Weather();
  })
  describe('weatherReport', function() {
    it('can generate a forecase of sunny', function() {
      Math.random = function() {
        return 0.4;
      }
      expect(weather.isStormy()).toBe(true);
    })

    it('can generate a forecast of stormy', function() {
      Math.random = function() {
        return 0.6;
      }
      expect(weather.isStormy()).toBe(false);
    })
  })
})
