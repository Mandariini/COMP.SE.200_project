import chai from "chai"
const expect = chai.expect
import eq from '../src/eq.js'

describe('eq', ()=>{

    it('Value to compare string', () => {
        
        expect(eq('Aimo','Aimo') == true);
        expect(eq('Aimo','Simo') == false);
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
    it('Compare arrays with each other', ()=>{
        const original = ['1','2','3'];
        const array1 = ['1','2','3'];
        const array2 = ['1','2'];
        const array3 = [];

        expect(eq(original,array1) == true);
        expect(eq(original,array2) == false);
        expect(eq(original,array3) == false);
    })
    it('compare maps',()=>{
        const originalMap = new Map();
        originalMap.set('a',1);
        originalMap.set('b',2);
        const compareMap = new Map();
        expect(eq(originalMap,compareMap) == false);
        compareMap.set('a',1);
        expect(eq(originalMap,compareMap) == false);
        compareMap.set('b',2);
        expect(eq(originalMap,compareMap) == true);

    })
    it('compare sets', ()=>{
        const originalSet = new Set();
        originalSet.add(1);
        originalSet.add(2);
        const compareSet = new Set();
        expect(eq(originalSet,compareSet) == false);
        compareSet.add(1);
        expect(eq(originalSet,compareSet) == false);
        compareSet.add(2);
        expect(eq(originalSet,compareSet) == true);
    })
    



    


})