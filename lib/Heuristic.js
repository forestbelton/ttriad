/*
 * The heuristic is based on two pieces of information about the game state.
 * 
 * 1) How many cards on the grid does the player have over their opponent? This
 *    number becomes more important when it is greater than 1.
 * 2) For every card that the player has on the grid, how many exposed spots
 *    can the opponent attack and capture? This number needs to be minimized.
 *
 * Based on this, I chose the heuristic h(grid) = 2^(f(grid) - 1) - 1/10 g(grid)
 * where f and g represent the values described in 1) and 2), respectively.
 */
function Heuristic(grid, cards, player) {
    this.grid   = grid;
    this.cards  = cards;
    this.player = player;

    this.cells  = grid._grid;
    this.playerCards = this.cells.filter(function(cell) {
        return cell !== null && cell.player == player;
    });
    this.opponentCards = this.cells.filter(function(cell) {
        return cell !== null && cell.player != player;
    });
}

// For a player's card with an exposed side, find all of the opponent's cards
// which can beat it.
Heuristic.prototype.find_better = function(x, y, value, prop) {
    var tally = 0;

    try {
        if(this.grid.at(x, y) === null) {
            tally += this.cards.filter(function(card) {
                return card.values[prop] > value;
            }).length;
        }
    } catch(e) {}

    return tally;
};

Heuristic.prototype.g = function() {
    var tally = 0;

    for(var x = 0; x < 3; ++x) {
        for(var y = 0; y < 3; ++y) {
            var cell = this.grid.at(x, y);

            if(cell === null || cell.player != this.player) {
                continue;
            }

            tally += this.find_better(x - 1, y, cell.values.left, 'right');
            tally += this.find_better(x + 1, y, cell.values.right, 'left');
            tally += this.find_better(x, y - 1, cell.values.top, 'bottom');
            tally += this.find_better(x, y + 1, cell.values.bottom, 'top');
        }
    }

    return tally;
};

Heuristic.prototype.f = function() {
    return this.playerCards.length - this.opponentCards.length;
};

Heuristic.prototype.compute = function() {
    // All cells in the grid have cards, so this is a final state.
    if(this.playerCards.length + this.opponentCards.length == this.cells.length) {
        return this.playerCards.length > this.opponentCards.length
            ? Infinity
            : -Infinity;
    }

    return Math.pow(2, this.f() - 1) - 1/10 * this.g();
};
 
module.exports = Heuristic;
