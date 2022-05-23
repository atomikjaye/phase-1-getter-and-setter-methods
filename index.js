// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  get diameter() {
    return 2 * this.radius
  }
  get circumference() {
    return 2 * Math.PI * this.radius
  }
  get area() {
    return Math.PI * (this.radius ** 2)
  }
  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }

  set circumference(newCirc) {
    this.radius = newCirc / Math.PI / 2
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI)
  }
}