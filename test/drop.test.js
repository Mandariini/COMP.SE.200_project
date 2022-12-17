import chai from "chai"
const expect = chai.expect
import drop from '../src/drop.js'

describe('drop', ()=>{

    it('drop first value from array', () => {
        const arrayToInspect = ["1", "2", "3", "4", "5"];
        const expectedOutput = ["2", "3", "4", "5"];

        const output = drop(arrayToInspect, 1);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('drop multiple values from array', () => {
        const arrayToInspect = [1, "2", 3, "4", 5];
        const expectedOutput = [3, "4", 5];

        const output = drop(arrayToInspect, 2);
        expect(output).deep.to.equal(expectedOutput);

    })

    it('drop everything from array by giving argument higher than array length', () => {
        const arrayToInspect = [1, "2", 3, "4", 5];
        const expectedOutput = [];

        const output = drop(arrayToInspect, 7);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('drop everything from array by giving argument same as array length', () => {
        const arrayToInspect = [null, "2", Object('a'), "4", 5];
        const expectedOutput = [];

        const output = drop(arrayToInspect, arrayToInspect.length);
        expect(output).deep.to.equal(expectedOutput);
    })

    


})