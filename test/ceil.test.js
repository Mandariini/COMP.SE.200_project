import chai from "chai"
const expect = chai.expect
import ceil from '../src/ceil.js'

describe('ceil',()=>{


    it('given number is floating number', () => {

        expect(ceil(1702.0325) == 1702);
        expect(ceil(1702.0325, 2) == 1702.03);
        expect(ceil(1702.0352, -2) == 1700);

    })
    it('given number is an integer', () => {
        expect(ceil(350) == 350);
        expect(ceil(350, 2) == 350.00);
        expect(ceil(350, -3) == 400);

    })
    it('given number is +0, -0', () => {
        expect(ceil(+0) == 0);
        expect(ceil(-0, 2) == 0.00);
        expect(ceil(0, -3) == 0);
    })
    it('null or NaN as arguments', () => {
        expect(ceil(1562.5345, null) == 1562.5345);
        expect(ceil(null, 2) == null);
        expect(ceil(null, null) == null);
        expect(ceil(1562.5345, NaN) == 1562.5345);
        expect(ceil(NaN, 2) == null);
        expect(ceil(NaN, NaN) == null);

    })
    it('undefined arguments', () => {
        expect(ceil(1562.5345, undefined) == 1562.5345);
        expect(ceil(undefined, 2) == null);
        expect(ceil(undefined, undefined) == null);
    })

    
})