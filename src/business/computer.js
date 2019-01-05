export default class Computer {
  constructor(val1, val2, val3) {
    this.val1 = parseInt(val1, 10)
    this.val2 = parseInt(val2, 10)
    this.val3 = parseInt(val3, 10)
  }
  compute() {
    this.checkChouette()
  }
  checkChouette() {
    return (
      this.val1 === this.val2 ||
      this.val2 === this.val3 ||
      this.val1 === this.val3
    )
  }
  checkVelutte() {
    return (
      this.val2 + this.val3 === this.val1 ||
      this.val1 + this.val3 === this.val2 ||
      this.val1 + this.val2 === this.val3
    )
  }
  checkCDC() {
    return this.val1 === this.val2 && this.val2 === this.val3
  }
}
