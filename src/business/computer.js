export default class Computer {
  constructor(val1, val2, val3) {
    this.val1 = parseInt(val1, 10)
    this.val2 = parseInt(val2, 10)
    this.val3 = parseInt(val3, 10)
  }
  compute() {
    if (this.checkSuite()) {
      return {
        score: -10,
        attribution: 'slowest',
      }
    }
    if (this.checkCDC()) {
      return {
        score: this.scoreCDC(),
        attribution: 'default',
      }
    }
    if (this.checkVelutte()) {
      if (this.checkChouette()) {
        return {
          score: this.scoreVelutte(),
          attribution: 'fastest',
        }
      }
      return {
        score: this.scoreVelutte(),
        attribution: 'default',
      }
    }
    if (this.checkChouette()) {
      return {
        score: this.scoreChouette(),
        attribution: 'sirot',
      }
    }
    return {
      score: 0,
      attribution: 'default',
    }
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
  checkSuite() {
    const dices = [this.val1, this.val2, this.val3].sort((a, b) => a - b)
    return dices[2] - dices[1] === 1 && dices[1] - dices[0] === 1
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
