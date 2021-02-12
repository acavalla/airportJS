'use strict';

describe('Plane', function() {
  // var weather;
  var plane;
  var airport;

  beforeEach(function() {
    // weather = new Weather();
    // weather.isStormy = function(){
    //   return false;
    // };
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['land', 'takeoff']);
  })

  it('changes status of the plane after landing and takeoff', function() {
    plane.land(airport);
    expect(plane.showStatus()).toBe(airport)
    plane.takeoff(airport);
    expect(plane.showStatus()).toBe("In The Air");
  })

  it('calls a method on the airport', function() {
    plane.land(airport);
    expect(airport.land).toHaveBeenCalledWith(plane);
    plane.takeoff(airport);
    expect(airport.takeoff).toHaveBeenCalledWith(plane);
  })

})
