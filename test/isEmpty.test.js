import chai, { assert } from "chai"
const expect = chai.expect
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', ()=> {

    it('Check non container-variables', () => {
        
        expect(isEmpty(true) == true);
        expect(isEmpty(null) == true);
        expect(isEmpty(10) == true);


    })

    it('Check strings', () => {
        
        expect(isEmpty('Test') == false);
        expect(isEmpty('T') == false);
        expect(isEmpty('') == true);

    })    
    
    it('Check arrays', () => {
        
        const inputArray1 = ['Fred', 'plays', 'violin']
        expect(isEmpty(inputArray1) == false);

        const inputArray2 = [];
        expect(isEmpty(inputArray2) == true);

    })

    it('Check maps and sets', () => {
        
        const mapTest = new Map();
        expect(isEmpty(mapTest) == true);

        mapTest.set('a', 1);
        mapTest.set('b', 2);
        mapTest.set('c', 3);
        expect(isEmpty(mapTest) == false);

        const setTest = new Set();
        expect(isEmpty(setTest) == true);

        setTest.add(1);
        setTest.add('2');
        expect(isEmpty(setTest) == false);

    })

})