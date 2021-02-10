class Plane {
  constructor() {
    this.status = "In The Air"
  }

  landed() {
    this.status = "In airport"
  }

  takeoff() {
    this.status = "In The Air"
  }

  showStatus() {
    return this.status 
  }
}
