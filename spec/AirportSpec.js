describe('Airport', function() {
  beforeEach(function() {
    weather = new Weather();
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();
    airportSmall = new Airport(1);
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

    it('does not allow takeoff of flying planes', function(){
      plane2 = new Plane();
      airport.land(plane2);
      expect (function() {
                  airport.takeoff(plane);
                }).toThrow(new Error("Plane airborne."))
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
      var weather = new Weather();
      weather.isStormy = function(){
        return false;
      };
      var airport = new Airport(20, weather);
      console.log(airport)
      expect( function(){
                  airport.land(plane);
                }).toThrow(new Error("Too stormy to land."))
    })
  })
})
