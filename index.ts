export class Calculator {
  private _sums: Map<string, Map<string, string>>
  private _products: Map<string, Map<string, string>>

  constructor() {
    this._sums = new Map()
    this._products = new Map()
    this._init()
  }

  private _init() {
    for (let i = 0; i < 10; i++) {
      const key1 = `${i}`
      this._sums.set(key1, new Map())
      this._products.set(key1, new Map())
      for (let j = 0; j < 10; j++) {
        const key2 = `${j}`
        this._sums.get(key1)?.set(key2, `${i + j}`)
        this._products.get(key1)?.set(key2, `${i * j}`)
      }
    }
  }

  _addSingleNumbers(num1: string, num2: string): string {
    if (num1 === '0') return num2
    else if (num2 === '0') return num1
    else {
      return this._sums.get(num1)?.get(num2) || '0'
    }
  }

  addTwoNumbers(num1: string, num2: string): string {
    if (num1.length === 1 && num2.length === 1)
      return this._addSingleNumbers(num1, num2)

    const revNum1 = num1.split('').reverse()
    const revNum2 = num2.split('').reverse()

    const result: string[] = []
    const maxLength = Math.max(num1.length, num2.length)
    let rest = '0'
    for (let index = 0; index < maxLength; index++) {
      const digit1 = revNum1[index] || '0'
      const digit2 = revNum2[index] || '0'
      const sum = this.addTwoNumbers(
        this._addSingleNumbers(digit1, digit2),
        rest
      )
      if (sum.length === 2) {
        const [left, right] = sum.split('')
        result.unshift(right)
        if (index === maxLength - 1) {
          // last item
          result.unshift(left)
        } else {
          rest = left
        }
      } else {
        result.unshift(sum)
        rest = '0'
      }
    }
    return result.join('')
  }

  addNumbers(...numbers: string[]): string {
    if (numbers.length === 1)
      throw new Error('At least 2 numbers have to be indicated')
    else {
      let result = numbers[0]
      for (let index = 1; index < numbers.length; index++) {
        result = this.addTwoNumbers(result, numbers[index])
      }
      return result
    }
  }

  _multiplySingleNumbers(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0'
    else if (num1 === '1') return num2
    else if (num2 === '1') return num1
    else {
      return this._products.get(num1)?.get(num2) || '1'
    }
  }

  multiplyTwoNumbers(num1: string, num2: string): string {
    const revNum1 = num1.split('').reverse()
    const revNum2 = num2.split('').reverse()

    let rest = '0'
    let result = '0'
    for (let index2 = 0; index2 < num2.length; index2++) {
      const result2 = []
      for (let index1 = 0; index1 < num1.length; index1++) {
        const subProduct = this._multiplySingleNumbers(
          revNum1[index1] || '1',
          revNum2[index2] || '1'
        )
        const subResult = this.addNumbers(subProduct, rest)
        const suffixZeros =
          index1 === 0
            ? index2 > 0
              ? Array(index2).fill('0').join('')
              : ''
            : ''
        if (subResult.length === 2) {
          const [left, right] = subResult.split('')
          if (index1 === num1.length - 1) {
            // last item
            result2.unshift(left, right)
          } else {
            result2.unshift(right + suffixZeros)
            rest = left
          }
        } else {
          result2.unshift(subResult + suffixZeros)
          rest = '0'
        }
      }
      result = this.addNumbers(result, result2.join(''))
    }
    return result
  }

  multiplyNumbers(...numbers: string[]): string {
    if (numbers.length === 1)
      throw new Error('At least 2 numbers have to be indicated')
    else {
      let result = numbers[0]
      for (let index = 1; index < numbers.length; index++) {
        result = this.multiplyTwoNumbers(result, numbers[index])
      }
      return result
    }
  }
}
