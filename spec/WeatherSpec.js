'use strict';

describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  })
  describe('weatherReport', function() {
    it('can generate a forecase of sunny', function() {
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(weather.isStormy()).toBe(true);
    })

    it('can generate a forecast of stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(weather.isStormy()).toBe(false);
    })
  })
})
