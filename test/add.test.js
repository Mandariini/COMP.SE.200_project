import chai from "chai"
const expect = chai.expect
import add from '../src/add.js'

describe('add', () => {
    it('addition with integers', () => {
        expect(add(1, -2)).to.equal(-1);
        expect(add(-10, 2)).to.equal(-8);
        expect(add(-99, -122)).to.equal(-221);
        expect(add(-7653126735126, -12221873612)).to.equal(-7665348608738);

        expect(add(1, 2)).to.equal(3);
        expect(add(10, 2)).to.equal(12);
        expect(add(99, 122)).to.equal(221);
        expect(add(7653126735126, 12221873612)).to.equal(7665348608738);
    })

    it('addition with floating point numbers', () => {
        const delta = 0.000000000000001;
        // floating point additions need to be rounded because of accuracy
        expect(add(0.1, 0.22)).to.be.approximately(0.3200, delta);
        expect(add(-0.1, -0.2)).to.be.approximately(-0.3, delta);
        expect(add(0.8123946723, -123411254.8971)).to.be.approximately(-123411254.0847053277, delta);
        expect(add(-0.8123946723, 123411254.8971)).to.be.approximately(123411254.0847053277, delta);
        expect(add(0.99, 0.28632)).to.be.approximately(1.276320000, delta);
    })

    it('addition with null', () => {
        expect(add(123.99, null)).to.equal(123.99);
        expect(add(null, 89789.777867868)).to.equal(89789.777867868);
        expect(add(null, null)).to.equal(null + null);
    })

    it('addition with strings', () => {
        expect(add(123.7896789678967, "test_string")).to.equal("123.7896789678967test_string");
        expect(add("test_string", 3)).to.equal("test_string3");
        expect(add("string1", "string2")).to.equal("string1string2");
        expect(add(null, "string")).to.equal("nullstring");
        expect(add("string", null)).to.equal("stringnull");
    })

    it('addition with undefined', () => {
        expect(add(undefined, undefined)).to.equal(0);
        expect(add(undefined, 1.22)).to.equal(1.22);
        expect(add(-0.2222, undefined)).to.equal(-0.2222);
    })

})
