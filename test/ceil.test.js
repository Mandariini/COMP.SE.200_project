import chai from "chai"
const expect = chai.expect
import ceil from '../src/ceil.js'

describe('ceil',()=>{


    it('float number', () => {

        expect(ceil(1702.0325) == 1702);
        expect(ceil(1702.0325, 2) == 1702.03);
        expect(ceil(1702.0352, -2) == 1700);

    })
    
})