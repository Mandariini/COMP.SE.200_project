import chai from "chai"
const expect = chai.expect
import divide from '../src/divide.js'

describe('divide', () => {
    it('division with integers', () => {
        const delta = 0.00000000001;

        expect(divide(1, -2)).to.equal(-0.5);
        expect(divide(-10, 2)).to.equal(-5);
        expect(divide(-99, -122)).to.be.approximately(0.81147540983, delta);

        expect(divide(1, 2)).to.equal(0.5);
        expect(divide(10, 2)).to.equal(5);
        expect(divide(99, 122)).to.be.approximately(0.81147540983, delta);
    })

    it('division with floating point numbers', () => {
        const delta = 0.00000000001;

        expect(divide(0.1, 0.22)).to.be.approximately(0.45454545454, delta);
        expect(divide(-0.1, -0.2)).to.be.approximately(0.5, delta);
        expect(divide(0.8123946723, -123411254.8971)).to.be.approximately(-6.58282482e-9, delta);
        expect(divide(-0.8123946723, 123411254.8971)).to.be.approximately(-6.58282482e-9, delta);
        expect(divide(0.99, 0.28632)).to.be.approximately(3.45766974015, delta);
    })

    it('division with null', () => {
        expect(divide(123.99, null)).to.equal(Infinity);
        expect(divide(null, 89789.777867868)).to.equal(0);
        expect(divide(null, null)).to.be.NaN;
    })

    it('divions with strings', () => {
        expect(divide(123.7896789678967, "test_string")).to.be.NaN;
        expect(divide("test_string", 3)).to.be.NaN;
        expect(divide("string1", "string2")).to.be.NaN;
        expect(divide(null, "string")).to.be.NaN;
        expect(divide("string", null)).to.be.NaN;
    })

    it('division with numbers close to 0', () => {
        const delta = 0.00000000001;
        expect(divide(0.000000001, 0.000000001)).to.equal(1);
        expect(divide(1.0, 0.0000000000000001)).to.equal(1e+16);
        expect(divide(0.0000000000000001, 0.909)).to.be.approximately(1.10011e-16, delta);
    })

})