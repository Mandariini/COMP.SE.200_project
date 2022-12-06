import chai from "chai"
const expect = chai.expect
import filter from '../src/filter.js'

describe('filter', () => {
    it('one boolean', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false },
            { 'active': true, 'user': 'john' }
        ]
        const expectedOutput = [
            { 'user': 'barney', 'active': true },
            { 'user': 'john', 'active': true, }
        ]

        const output = filter(users, ({ active }) => active);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('filter by number', () => {
        const users = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'user': 'fred', 'active': false, 'age': 20 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': false, 'user': 'jack', 'age2': 50 },
        ]
        const expectedOutput = [
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
        ]

        const output = filter(users, ({ age }) => age > 20)
        expect(output).deep.to.equal(expectedOutput);
    })

    it('filter by multiple fields', () => {
        const users = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'user': 'fred', 'active': false, 'age': 20 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': false, 'user': 'john', 'age2': 50 },
            { 'active': true, 'user': 'bob', 'age2': 60 },
            { 'active': true, 'user': 'testguy', 'age3': 60 },
        ]
        const expectedOutput = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': true, 'user': 'bob', 'age2': 60 },
            { 'active': true, 'user': 'testguy', 'age3': 60 },
        ]

        const output = filter(users, ({ age, age2, user }) => age > 20 || age == 10 || age2 > 50 || user == 'testguy')
        expect(output).deep.to.equal(expectedOutput);
    })

    it('empty filter', () => {
        const users = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'user': 'fred', 'active': false, 'age': 20 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': false, 'user': 'john', 'age2': 50 },
            { 'active': true, 'user': 'bob', 'age2': 60 },
            { 'active': true, 'user': 'testguy', 'age3': 60 },
        ]
        const expectedOutput = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'user': 'fred', 'active': false, 'age': 20 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': false, 'user': 'john', 'age2': 50 },
            { 'active': true, 'user': 'bob', 'age2': 60 },
            { 'active': true, 'user': 'testguy', 'age3': 60 },
        ]

        const output = filter(users, () => true);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('filter all', () => {
        const users = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'user': 'fred', 'active': false, 'age': 20 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': false, 'user': 'john', 'age2': 50 },
            { 'active': true, 'user': 'bob', 'age2': 60 },
            { 'active': true, 'user': 'testguy', 'age3': 60 },
        ]
        const expectedOutput = [[]]

        const output = filter(users, () => false);
        expect(output).deep.to.equal(expectedOutput);
    })

    it('predicate nonexisting field', () => {
        const users = [
            { 'user': 'barney', 'active': true, 'age': 10 },
            { 'user': 'fred', 'active': false, 'age': 20 },
            { 'active': true, 'user': 'john', 'age': 30 },
            { 'active': false, 'user': 'jack', 'age': 40 },
            { 'active': false, 'user': 'john', 'age2': 50 },
            { 'active': true, 'user': 'bob', 'age2': 60 },
            { 'active': true, 'user': 'testguy', 'age3': 60 },
        ]
        const expectedOutput = [[]]

        const output = filter(users, (nonactive) => nonactive == true);
        expect(output).deep.to.equal(expectedOutput);
    })
})
