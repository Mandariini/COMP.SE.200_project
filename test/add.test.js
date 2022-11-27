import chai from "chai"
const expect = chai.expect
import add from '../src/add.js'

describe('add', () => {
    it('addition with negative integers', () => {
        expect(add(1, -2)).to.equal(-1);
        expect(add(-10, 2)).to.equal(-8);
        expect(add(-99, -12)).to.equal(-111);
    })
})
