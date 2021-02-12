'use strict';

class Plane {
  constructor() {
    this.status = "In The Air";
  }

  land(airport) {
    airport.land(this);
    this.status = airport;
  }

  takeoff() {
    this.status.takeoff(this);
    this.status = "In The Air";
  }

  showStatus() {
    return this.status;
  }
}
