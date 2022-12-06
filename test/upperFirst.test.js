import chai, { assert } from "chai"
const expect = chai.expect
import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
    it('uppercase strings', () => {
        expect(upperFirst("TESTSTRING")).to.equal("TESTSTRING");
        expect(upperFirst("T")).to.equal("T");
        expect(upperFirst("TESTSTRING1 TESTRING2")).to.equal("TESTSTRING1 TESTRING2");
    })

    it('lowercase strings', () => {
        expect(upperFirst("teststring")).to.equal("Teststring");
        expect(upperFirst("t")).to.equal("T");
        expect(upperFirst("teststring1 teststring2")).to.equal("Teststring1 teststring2");
    })

    it('different case strings', () => {
        expect(upperFirst("TeStStRiNg1 TeStStRiNg")).to.equal("TeStStRiNg1 TeStStRiNg");
        expect(upperFirst("teStStRiNg1 teStStRiNg")).to.equal("TeStStRiNg1 teStStRiNg");
        expect(upperFirst("test1 TEST2 test3")).to.equal("Test1 TEST2 test3");
    })

    it('symbols', () => {
        expect(upperFirst("❄a")).to.equal("❄a");
        expect(upperFirst("⅍sss fd")).to.equal("⅍sss fd");
        expect(upperFirst("ⅠⅠⅠ")).to.equal("ⅠⅠⅠ");
    })

    it('empty string, different type', () => {
        expect(upperFirst("")).to.equal("");
        expect(() => {
            upperFirst(6).to.throw(TypeError);
        });
    })
})
