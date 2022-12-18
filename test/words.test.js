import chai, { assert } from "chai"
const expect = chai.expect
import words from '../src/words.js'

describe('words', ()=>{

    it('simple sentence with only letters and numbers', () => {
        const input1 = 'Fred ate my lunch';
        const expectedOutput1 = ['Fred','ate','my','lunch'];

        const output1 = words(input1);
        expect(output1).deep.to.equal(expectedOutput1);

        const input2 = 'Archie has 3 dollars';
        const expectedOutput2 = ['Archie', 'has', '3', 'dollars'];

        const output2 = words(input2);
        expect(expectedOutput2).deep.to.equal(expectedOutput2);
    })

    it('sentence with special characters', () => {
        const input1 = 'Archie has 3 dollars & 50 cents';
        const expectedOutput1 = ['Archie', 'has', '3', 'dollars', '50', 'cents'];

        const output1 = words(input1);
        expect(output1).deep.to.equal(expectedOutput1);

        const input2 = 'Archie has 3 dollars & 50 cents';
        const expectedOutput2 = ['Archie', 'has', '3', 'dollars', '&', '50', 'cents'];

        const output2 = words(input2, /[^, ]+/g);
        expect(output2).deep.to.equal(expectedOutput2);

        const input3 = 'Archie & Veronica owns 50 % of the company !';
        const expectedOutput3 = ['Archie', '&', 'Veronica', 'owns', '50', '%', 'of', 'the', 'company','!'];

        const output3 = words(input3, /[^, ]+/g);
        expect(output2).deep.to.equal(expectedOutput2);

    })
    it('empty string',()=>{

        const input = '';

        const output = words(input);
        const expected = [];
        expect(output).to.equal(expected);

    })

})