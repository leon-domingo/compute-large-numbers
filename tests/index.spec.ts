import { Calculator } from '../index'
import { expect } from 'chai'

describe('calculator', () => {
  const calc = new Calculator()

  describe('sum', () => {
    describe('single digits', () => {
      it('add 2 single-digit numbers', () => {
        const sum1 = calc._addSingleNumbers('1', '2')
        expect(sum1).to.be.equal('3')

        const sum2 = calc._addSingleNumbers('5', '5')
        expect(sum2).to.be.equal('10')
      })
    })

    describe('multiple digits', () => {
      it('try to pass only 1 number for adding (!)', () => {
        const fn = function () {
          calc.addNumbers('123')
        }
        expect(fn).to.throw('At least 2 numbers have to be indicated')
      })

      it('add 2 numbers of 1 and 2 digits respectively', () => {
        const sum = calc.addTwoNumbers('22', '1')
        expect(sum).to.be.equal('23')
      })

      it('add 2 numbers with several digits', () => {
        const sum = calc.addTwoNumbers('777', '888')
        expect(sum).to.be.equal('1665')
      })

      it('add 2 numbers with different number of digits', () => {
        const sum = calc.addTwoNumbers('123456789', '4231')
        expect(sum).to.be.equal('123461020')
      })

      it('add 2 numbers', () => {
        const sum = calc.addNumbers('123', '123')
        expect(sum).to.be.equal('246')
      })

      it('add 3 numbers', () => {
        const sum = calc.addNumbers('123', '123', '123')
        expect(sum).to.be.equal('369')
      })
    })
  })

  describe('multiply', () => {
    describe('single digits', () => {
      it('multiply by 0', () => {
        const res = calc._multiplySingleNumbers('0', '1')
        expect(res).to.equal('0')
      })

      it('multiply by 1', () => {
        const res = calc._multiplySingleNumbers('1', '5')
        expect(res).to.equal('5')
      })

      it('multiple 2 single-digit numbers', () => {
        const res1 = calc._multiplySingleNumbers('2', '3')
        expect(res1).to.be.equal('6')

        const res2 = calc._multiplySingleNumbers('7', '6')
        expect(res2).to.be.equal('42')

        const res3 = calc._multiplySingleNumbers('9', '9')
        expect(res3).to.be.equal('81')
      })
    })

    describe('multiple digits', () => {
      it('try to pass only 1 number for multiplying (!)', () => {
        function fn() {
          calc.multiplyNumbers('123')
        }
        expect(fn).to.throw('At least 2 numbers have to be indicated')
      })

      it('multiply two numbers', () => {
        const res = calc.multiplyTwoNumbers('15', '32')
        expect(res).to.be.equal('480')
      })

      it('multiply several numbers', () => {
        const res1 = calc.multiplyNumbers('10', '5')
        expect(res1).to.be.equal('50')

        const res2 = calc.multiplyNumbers('50', '3')
        expect(res2).to.be.equal('150')

        const res3 = calc.multiplyNumbers('150', '30')
        expect(res3).to.be.equal('4500')
      })
    })
  })
})
