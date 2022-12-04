import chai, { assert } from "chai"
const expect = chai.expect
import difference from '../src/difference.js'

describe('difference', () => {
    it('difference with one comparison array', () => {
        const arrayToInspect = ["1", "2", "3", "4"];
        const exclusionArray = ["2", "4", "5", "6", "7"];
        const expectedOutput = ["1", "3"]

        const output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('difference with two comparison arrays', () => {
        const arrayToInspect = ["1", "2", "3", "4"];
        const exclusionArray1 = ["2", "4", "5", "6", "7"];
        const exclusionArray2 = ["0", "1", "2", "3"];
        const expectedOutput = []

        const output = difference(arrayToInspect, exclusionArray1, exclusionArray2);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('difference with three comparison arrays', () => {
        const arrayToInspect = [0, 1, "1", "2", "3", "4", 9];
        const exclusionArray1 = ["2", "4", "5", "6", "7"];
        const exclusionArray2 = ["0", "1", "2"];
        const exclusionArray3 = [-1, 2];
        const expectedOutput = [0, 1, "3", 9]

        const output = difference(arrayToInspect, exclusionArray1, exclusionArray2, exclusionArray3);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('difference with null value', () => {
        let arrayToInspect = [null, "1", "2", "3", "4", "1"];
        let exclusionArray = ["2", "4", "5", "6", "7"];
        let expectedOutput = [null, "1", "3", "1"]

        let output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = [null, "1", "2", "2", "3", "4"];
        exclusionArray = ["2", "4", "5", "6", "7", null];
        expectedOutput = ["1", "3"]

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('difference with empty arrays', () => {
        let arrayToInspect = [];
        let exclusionArray = [];
        let expectedOutput = []

        let output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = ["abcd"];
        exclusionArray = [];
        expectedOutput = ["abcd"]

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = [];
        exclusionArray = [undefined];
        expectedOutput = []

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = [", 2"];
        exclusionArray = [];
        expectedOutput = [", 2"]

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('difference with NaNs, -0, +0, boolean, symbol', () => {
        let arrayToInspect = [NaN, +0, true, false];
        let exclusionArray = [-0, NaN, false];
        let expectedOutput = [true];

        let output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = [NaN, -0, NaN, false];
        exclusionArray = [false, -0, NaN];
        expectedOutput = [];

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = [Symbol('foo')];
        exclusionArray = [Symbol('bar')];
        expectedOutput = [Symbol('foo')];

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);

        arrayToInspect = [Symbol('foo')];
        exclusionArray = [Symbol('foo')];
        expectedOutput = [];

        output = difference(arrayToInspect, exclusionArray);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('difference with objects', () => {
        const testObject1 = { firstName: "John", age: 50 };
        const testObject2 = { firstName: "John", age: 50, d: true };

        let arrayToInspect = [testObject1];
        let exclusionArray = [testObject1];
        let expectedOutput = [];

        let output = difference(arrayToInspect, exclusionArray, exclusionArray);
        assert(JSON.stringify(expectedOutput) === JSON.stringify(output), "objects not equal");

        arrayToInspect = [testObject1, testObject2];
        exclusionArray = [testObject1];
        expectedOutput = [testObject2];

        output = difference(arrayToInspect, exclusionArray, exclusionArray);
        assert(JSON.stringify(expectedOutput) === JSON.stringify(output), "objects not equal");

        arrayToInspect = [testObject1, testObject2];
        exclusionArray = [testObject1];
        expectedOutput = [testObject1];

        output = difference(arrayToInspect, exclusionArray, exclusionArray);
        assert(JSON.stringify(expectedOutput) !== JSON.stringify(output), "objects are equal");
    })
})