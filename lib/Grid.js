function Grid(grid) {
    this._grid = grid;
}

function idx(x, y) {
    return y * 3 + x;
}

function un_idx(i) {
    return [i % 3, Math.floor(i / 3)];
}

function check_bounds(x, y) {
    if(x < 0 || x > 2 || y < 0 || y > 2) {
        throw new Error('Out of bounds grid access');
    }
}

Grid.prototype.at = function(x, y) {
    check_bounds(x, y);
    return this._grid[idx(x, y)];
};

Grid.prototype.set = function(x, y, card) {
    check_bounds(x, y);
    this._grid[idx(x, y)] = card;
};

Grid.prototype.moves = function(deck) {
    var is = [];

    this._grid.forEach(function(cell, i) {
        if(cell === null) {
            is.push(i);
        }
    });

    return is
        .map(un_idx)
        .map(function(pos) {
            return deck.reduce(function(acc, card) {
                return acc.concat([[pos, card]]);
            }, []);
        })
        .reduce(function(acc, x) {
            return acc.concat(x);
        }, []);
};

Grid.prototype.over = function() {
    return this._grid.every(function(cell) {
        return cell !== null;
    });
};

Grid.prototype.copy = function() {
    var copy = this._grid.map(function(x) { return x; });
    return new Grid(copy);
};

module.exports = Grid;
