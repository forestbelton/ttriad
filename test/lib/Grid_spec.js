var expect = require('chai').expect;

describe('Grid', function() {
    var Grid = require('../../lib/Grid'),
        grid;

    beforeEach(function() {
        grid = new Grid([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should have all entries', function() {
        for(var x = 0; x < 3; ++x) {
            for(var y = 0; y < 3; ++y) {
                expect(grid.at(x, y)).to.equal(y * 3 + x);
            }
        }
    });

    it('should have the right value after setting', function() {
        grid.set(2, 2, 'test');
        expect(grid.at(2, 2)).to.equal('test');
    });

    it('should overwrite a previous set', function() {
        grid.set(0, 1, 'a');
        grid.set(0, 1, 'b');
        expect(grid.at(0, 1)).to.equal('b');
    });

    it('should generate the correct moveset', function() {
        grid = new Grid([0, 1, 2, null, null, 5, 6, 7, null]);
        expect(grid.moves(['a', 'b', 'c'])).to.deep.equal([
            [[0, 1], 'a'],
            [[0, 1], 'b'],
            [[0, 1], 'c'],
            [[1, 1], 'a'],
            [[1, 1], 'b'],
            [[1, 1], 'c'],
            [[2, 2], 'a'],
            [[2, 2], 'b'],
            [[2, 2], 'c']
        ]);
    });
});
