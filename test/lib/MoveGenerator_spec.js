var expect = require('chai').expect;

describe('MoveGenerator', function() {
    const Grid = require('../../lib/Grid'),
        MoveGenerator = require('../../lib/MoveGenerator');

    const Card = function(player, top, right, bottom, left) {
        return {
            player: player,
            values: {
                top: top,
                right: right,
                bottom: bottom,
                left: left
            }
        };
    };

    const card  = Card('red', 1, 1, 1, 1);
    const card2 = Card('red', 2, 3, 4, 5);

    const to_array = function(it) {
        var arr = [];

        for(var move of it) {
            arr.push(move);
        }

        return arr;
    };

    it('generates no moves for a full grid', function() {
        var it = MoveGenerator(new Grid([
            card, card, card,
            card, card, card,
            card, card, card
        ]), [card]);

        expect(to_array(it)).to.have.length(0);
    });

    it('generates no moves for an empty card list', function() {
        var it = MoveGenerator(new Grid([
            null, null, null,
            null, null, null,
            null, null, null
        ]), []);

        expect(to_array(it)).to.have.length(0);
    });

    it('generates moves for one card and one empty cell', function() {
        var it = MoveGenerator(new Grid([
            null, card, card,
            card, card, card,
            card, card, card
        ]), [card]);

        expect(to_array(it)).to.deep.equal([
            { x: 0, y: 0, card: card }
        ]);
    });

    it('generates moves for two cards and one empty cell', function() {
        var it = MoveGenerator(new Grid([
            null, card, card,
            card, card, card,
            card, card, card
        ]), [card, card2]);

        expect(to_array(it)).to.deep.equal([
            { x: 0, y: 0, card: card },
            { x: 0, y: 0, card: card2 }
        ]);
    });

    it('generates moves for one card and two empty cells', function() {
        var it = MoveGenerator(new Grid([
            card, card, card,
            card, null, card,
            card, card, null
        ]), [card]);

        expect(to_array(it)).to.deep.equal([
            { x: 1, y: 1, card: card },
            { x: 2, y: 2, card: card }
        ]);
    });

    it('generates moves for two cards and three empty cells', function() {
        var it = MoveGenerator(new Grid([
            card, null, card,
            card, null, null,
            card, card, card
        ]), [card, card2]);

        expect(to_array(it)).to.deep.equal([
            { x: 1, y: 0, card: card },
            { x: 1, y: 0, card: card2 },
            { x: 1, y: 1, card: card },
            { x: 1, y: 1, card: card2 },
            { x: 2, y: 1, card: card },
            { x: 2, y: 1, card: card2 },
        ]);
    });
});
