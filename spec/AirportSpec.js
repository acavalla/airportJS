'use strict';

describe('Airport', function() {
  var weather;
  var plane;
  var plane2;
  var airport;
  var airportSmall;

  beforeEach(function() {
    weather = new Weather();
    weather.isStormy = function(){
      return false;
    };
    plane = jasmine.createSpy('plane',['land']);
    plane2 = new Plane();
    airport = new Airport(20, weather);
    airportSmall = new Airport(1, weather);
  })

  describe('#capacity', function(){
    it('has a default capacity of 20 spaces', function() {
      expect(airport.showCapacity()).toBe(20);
    })
    it('can specify a different default capacity', function() {
      expect(airportSmall.showCapacity()).toBe(1);
    })
  })

  describe('#landing', function() {
    it('lands planes', function() {
      airport.land(plane);
      expect(airport.planesInAirport().length).toBe(1);
      expect(airport.planesInAirport()[0]).toBe(plane);
    })

    it('doesnt let planes land when full', function() {
      airportSmall.land(plane);
      expect ( function() {airportSmall.land(plane); }).toThrow(new Error("Airport full."));
    })
  })

  describe('#takeoff', function() {
    it('removes the plane from planes on takeoff', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planesInAirport().length).toBe(0);
    })

    it('does not allow takeoff when empty', function(){
      expect (function() {
                  airport.takeoff(plane);
                          }).toThrow(new Error("Airport empty."))
    })

  it('only allows planes in airport to take off', function(){
    airport.land(plane);
    airportSmall.land(plane2);
    expect (function() {
                airportSmall.takeoff(plane);
                  }).toThrow(new Error("Plane not in airport."))
        })

  })

  describe('weather', function() {
    it('prevents landing when stormy', function(){
      var weatherStormy = new Weather();
      weatherStormy.isStormy = function(){
        return true;
      };
      var airport = new Airport(20, weatherStormy);
      expect( function(){
                  airport.land(plane);
                }).toThrow(new Error("Too stormy to land."))
    })
  })
})
