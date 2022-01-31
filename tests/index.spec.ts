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
          calc.add('123')
        }
        expect(fn).to.throw('At least 2 numbers have to be indicated')
      })

      it('add 2 numbers of 1 and 2 digits respectively', () => {
        const sum = calc.addTwo('22', '1')
        expect(sum).to.be.equal('23')
      })

      it('add 2 numbers with several digits', () => {
        const sum = calc.addTwo('777', '888')
        expect(sum).to.be.equal('1665')
      })

      it('add 2 numbers with different number of digits', () => {
        const sum = calc.addTwo('123456789', '4231')
        expect(sum).to.be.equal('123461020')
      })

      it('add 2 numbers', () => {
        const sum = calc.add('123', '123')
        expect(sum).to.be.equal('246')
      })

      it('add 3 numbers', () => {
        const sum = calc.add('123', '123', '123')
        expect(sum).to.be.equal('369')
      })
    })
  })

  describe('multiply', () => {
    describe('single digits', () => {
      it('multiply by 0', () => {
        const res = calc._multiplySingle('0', '1')
        expect(res).to.equal('0')
      })

      it('multiply by 1', () => {
        const res = calc._multiplySingle('1', '5')
        expect(res).to.equal('5')
      })

      it('multiple 2 single-digit numbers', () => {
        const res1 = calc._multiplySingle('2', '3')
        expect(res1).to.be.equal('6')

        const res2 = calc._multiplySingle('7', '6')
        expect(res2).to.be.equal('42')

        const res3 = calc._multiplySingle('9', '9')
        expect(res3).to.be.equal('81')
      })
    })

    describe('multiple digits', () => {
      it('try to pass only 1 number for multiplying (!)', () => {
        function fn() {
          calc.multiply('123')
        }
        expect(fn).to.throw('At least 2 numbers have to be indicated')
      })

      it('multiply two numbers', () => {
        const res1 = calc.multiplyTwo('15', '32')
        expect(res1).to.be.equal('480')
        const res2 = calc.multiplyTwo('999', '999')
        expect(res2).to.be.equal('998001')
      })

      it('multiply by 0', () => {
        const res1 = calc.multiplyTwo('9999', '0')
        expect(res1).to.equal('0')

        const res2 = calc.multiplyTwo('0', '12345')
        expect(res2).to.equal('0')
      })

      it('multiply by 1', () => {
        const res1 = calc.multiplyTwo('9999', '1')
        expect(res1).to.equal('9999')

        const res2 = calc.multiplyTwo('1', '12345')
        expect(res2).to.equal('12345')
      })

      it('multiply several numbers', () => {
        const res1 = calc.multiply('10', '5')
        expect(res1).to.be.equal('50')

        const res2 = calc.multiply('50', '3')
        expect(res2).to.be.equal('150')

        const res3 = calc.multiply('150', '30')
        expect(res3).to.be.equal('4500')
      })
    })
  })
})
