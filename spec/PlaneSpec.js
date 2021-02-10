describe('Plane', function() {

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport('sunny');
  })

  it('can check the status of a plane', function() {
    expect(plane.showStatus()).toBe("In The Air");
  })

  it('shows status as in airport after landing', function() {
    plane.landed();
    expect(plane.showStatus()).toBe("In airport")
  })

  it('changes the status of the plane on landing', function() {
    airport.land(plane)
    expect(plane.showStatus()).toBe("In airport")
  })

  it('shows status as in the air after takeoff', function() {
    plane.takeoff();
    expect(plane.showStatus()).toBe("In The Air");
  })

  it('changes the status of the plane on takeoff', function() {
    airport.land(plane)
    airport.takeoff(plane);
    expect(plane.showStatus()).toBe("In The Air");
  })

})
