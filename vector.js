class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static add(a, b) {
    let x = a.x + b.x;
    let y = a.y + b.y;
    return(x, y);
  }

  static subtract(a, b) {
    let x = a.x - b.x;
    let y = a.y - b.y;
    return(x, y);
  }

  static multiplication(a, n) {
    x = a.x * n;
    y = a.y * n;
    return (a, y);
  }

  static magnitude() {
    mag = Math.sqrt((x * x) + (y * y));
    return mag;
  }

  normalize() {
    x = this.x 
  }

  static dot_product(a, b) {

  }

  static cross_product(a, b) {

  }

  static rotation(a, b) {

  }

}
