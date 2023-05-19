const add = require('../index.js');

describe('test', () => {
    it('can add', () => {
        expect(add(1, 2)).toEqual(3)
    })
})
