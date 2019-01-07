export default class Computer {
  constructor(val1, val2, val3) {
    this.val1 = parseInt(val1, 10)
    this.val2 = parseInt(val2, 10)
    this.val3 = parseInt(val3, 10)
  }
  compute() {
    if (this.checkCDC()) {
      return this.scoreCDC()
    }
    if (this.checkVelutte()) {
      return this.scoreVelutte()
    }
    if (this.checkChouette()) {
      return this.scoreChouette()
    }
    return 0
  }
  checkChouette() {
    return this.val1 === this.val2
  }
  checkVelutte() {
    return this.val1 + this.val2 === this.val3
  }
  checkCDC() {
    return this.val1 === this.val2 && this.val2 === this.val3
  }
  scoreChouette() {
    return this.val1 * this.val1
  }
  scoreVelutte() {
    return 2 * (this.val3 * this.val3)
  }
  scoreCDC() {
    const base = 40
    const additiv = 10 * this.val1
    return base + additiv
  }
}
