import chai from "chai"
const expect = chai.expect
import eq from '../src/eq.js'

describe('eq', ()=>{

    it('Value to compare string', () => {
        
        expect(eq('Aimo','Aimo') == true);
        expect(eq('Aimo','Timo') == false);
        expect(eq('a',1) == false);
        expect(eq('a',Object('a')) == false);
        expect(eq('a' , NaN) == false);
        expect(eq('a', undefined) == false);

    })

    it('Value to compare is number', () => {
        
        expect(eq(123,123) == true );
        expect(eq(123,321) == false);
        expect(eq(123, '123') ==false);
        expect(eq(123,Object(123))==false);
        expect(eq(123 , NaN)==false);
        expect(eq(123, undefined)==false);

    })

    it('Value to compare is NaN', () => {
        
        expect(eq(NaN,NaN) == true);
        expect(eq(NaN, 10) == false);
        expect(eq(NaN, 'a') == false);
        expect(eq(NaN, undefined) == false);

    })


})