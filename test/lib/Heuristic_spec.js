var expect = require('chai').expect;

describe('Heuristic', function() {
    var Grid = require('../../lib/Grid'),
        Heuristic = require('../../lib/Heuristic'),
        h;

    function Card(player, top, right, bottom, left) {
        return {
            player: player,
            values: {
                top: top,
                right: right,
                bottom: bottom,
                left: left
            }
        };
    }

    var card = Card('red', 2, 5, 5, 2),
        cards = [
            Card('blue', 1, 1, 1, 1),
            Card('blue', 6, 1, 1, 1),
            Card('blue', 1, 6, 1, 1),
            Card('blue', 1, 1, 6, 1),
            Card('blue', 1, 1, 1, 6)
        ];
 
    beforeEach(function() {
       h = new Heuristic(new Grid([
            null, null, null,
            null, null, null,
            null, null, card
        ]), cards, 'red');
    });

    it('should find 0 better out of bounds', function() {
        expect(h.find_better(-1, 0, 0, 'right')).to.be.zero;
        expect(h.find_better(9, 0, 0, 'top')).to.be.zero;
        expect(h.find_better(2, 9, 0, 'left')).to.be.zero;
        expect(h.find_better(2, -20, 0, 'bottom')).to.be.zero;
    });

    it('should find better above', function() {
        expect(h.find_better(2, 1, card.values.top, 'bottom')).to.equal(1);
    });

    it('should find better to the left', function() {
        expect(h.find_better(1, 2, card.values.left, 'right')).to.equal(1);
    });

    it('should find 4 better for a poor center card', function() {
        expect(h.find_better(1, 0, 1, 'bottom')).to.equal(1);
        expect(h.find_better(2, 1, 1, 'left')).to.equal(1);
        expect(h.find_better(1, 2, 1, 'top')).to.equal(1);
        expect(h.find_better(0, 1, 1, 'right')).to.equal(1);
    });

    it('computes that the player has more cards', function() {
        h = new Heuristic(new Grid([
            card, cards[0], card,
            card, card, null,
            cards[0], cards[0], null
        ]), [], 'red');

        expect(h.f()).to.equal(1);
    });

    it('computes that the player has less cards', function() {
        h = new Heuristic(new Grid([
            cards[0], cards[0], cards[0],
            card, card, null,
            null, null, cards[0]
        ]), [], 'red');

        expect(h.f()).to.equal(-2);
    });

    it('computes better neighbors for corner card', function() {
        expect(h.g()).to.equal(2);
    });

    it('computes better neighbors for center card', function() {
        h = new Heuristic(new Grid([
            null, null, null,
            null, Card('red', 1, 1, 1, 1), null,
            null, null, null
        ]), cards, 'red');

        expect(h.g()).to.equal(4);
    });

    it('computes infinity for player win', function() {
        h = new Heuristic(new Grid([
            card, card, card,
            cards[0], card, cards[0],
            card, cards[0], card
        ]), [], 'red');

        expect(h.compute()).to.equal(Infinity);
    });

    it('computes -infinity for opponent win', function() {
        h = new Heuristic(new Grid([
            cards[0], cards[0], cards[0],
            card, cards[0], card,
            cards[0], card, cards[0]
        ]), [], 'red');

        expect(h.compute()).to.equal(-Infinity);
    });
});
