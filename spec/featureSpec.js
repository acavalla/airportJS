'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;
  var plane2;

  beforeEach(function(){
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  it('planes can be instructed to land at an airport', function() {
    spyOn(airport, 'weather').and.returnValue(false);
    airport.land(plane);
    expect(airport.planesInAirport()).toContain(plane);
  });

  it('planes can be instructed to take off', function(){
    spyOn(airport, 'weather').and.returnValue(false);
    plane.land(airport);
    airport.takeoff(plane);
    expect(airport.planesInAirport()).not.toContain(plane);
});

  it('does not allow takeoff of flying planes', function() {
    spyOn(airport, 'weather').and.returnValue(false);
    airport.land(plane2);
    expect (function() {
                airport.takeoff(plane);
              }).toThrow(new Error("Plane airborne."))
          })
})
