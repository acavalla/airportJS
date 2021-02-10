describe('Airport', function() {
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport('sunny');
  })

  describe('#capacity', function(){
    it('has a default capacity of 20 spaces', function() {
      expect(airport.showCapacity()).toBe(20);
    })
    it('can specify a different default capacity', function() {
      airport_2 = new Airport('sunny', 100);
      expect(airport_2.showCapacity()).toBe(100);
    })
  })

  describe('#landing', function() {
    it('lands planes', function() {
      airport.land(plane);
      expect(airport.planesInAirport()[0]).toBe(plane);
    })

    it('doesnt let planes land when full', function() {
      airport_3 = new Airport('sunny', 1);
      airport_3.land(plane);
      expect ( function() {airport_3.land(plane); }).toThrow(new Error("Airport full."));
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
      plane_2 = new Plane();
      airport.land(plane);
      airport_2 = new Airport('sunny');
      airport_2.land(plane_2);
      expect (function() {
                  airport_2.takeoff(plane);
                    }).toThrow(new Error("Plane not in airport."))

    })

    it('does not allow takeoff of flying planes', function(){
      plane_2 = new Plane();
      airport.land(plane_2);

      expect (function() {
                  airport.takeoff(plane);
                }).toThrow(new Error("Plane airborne."))
    })
  })

  describe('weather', function() {

    it('prevents landing when stormy', function(){
      airport_4 = new Airport('stormy');
      expect( function(){
                  airport_4.land(plane);
                }).toThrow(new Error("Too stormy to land."))
    })
  })
})
