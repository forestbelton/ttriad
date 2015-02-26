const expect = require('chai').expect;

describe('Negamax', function() {
    const Grid = require('../../lib/Grid'),
        Negamax = require('../../lib/Negamax');

    function Card(player, top, right, bottom, left) {
        return {
            player: player,
            values: {
                top: top,
                right: right,
                bottom: bottom,
                left: left,
            }
        };
    }

    const card1 = Card('red', 4, 1, 1, 4),
        card2 = Card('blue', 3, 3, 3, 3);

    it('plays the card in the corner', function() {
        const res = Negamax(new Grid([
            null, null, null,
            null, null, null,
            null, null, null
        ]), [card1], [card2], 2, 'red'),
            move = res[1];

        expect(move.x).to.equal(2);
        expect(move.y).to.equal(2);
        expect(move.card).to.deep.equal(card1);
    });
});
