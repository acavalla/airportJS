class Airport {
  constructor(capacity = 20, weather = new Weather()) {
    this.capacity = capacity
    this.planes = []
    this.weather = weather.isStormy;
    //this.weather = weather.showWeather();
  }

  planesInAirport() {
    return this.planes;
  }

  showCapacity() {
    return this.capacity;
  }

  theWeather() {
    return this.weather;
  }

  land(plane) {
    if (this.weather === "true") {
      throw new Error ('Too stormy to land.')
    }
    if(this.planes.length === this.capacity) {
      throw new Error ('Airport full.');
    } else {
      this.planes.push(plane);
      plane.landed();
    }
  }

  takeoff(plane) {

    if(this.planes.length === 0) {
      throw new Error ('Airport empty.')
      } else if(plane.status === "In The Air") {
      throw new Error ('Plane airborne.')
        } else if(this.planes.indexOf(plane) === -1) {
      throw new Error ('Plane not in airport.')
    } else {
      this.planes.pop();
      plane.takeoff();
    }
  }
}
