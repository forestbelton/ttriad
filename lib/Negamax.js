var Heuristic = require('./Heuristic'),
    MoveGenerator = require('./MoveGenerator');

function Negamax(grid, deck1, deck2, depth, color) {
    const nextColor = color == 'red' ? 'blue' : 'red';

    if(depth == 0 || grid.over()) {
        const colorSign = color == 'red' ? 1 : -1,
            val = colorSign * (new Heuristic(grid, deck2, color)).compute();

        return [val, grid];
    }

    var best = [-Infinity, null];
    for(var move of MoveGenerator(grid, deck1)) {
        var nextGrid = grid.copy();
        nextGrid.set(move.x, move.y, move.card);

        var val = Negamax(nextGrid, deck2, deck1, depth - 1, nextColor);

        val[0] = -val[0];
        if(val[0] > best[0]) {
            best = [val[0], move];
        }
    }

    return best;
}

module.exports = Negamax;
