function *moveSet(grid, cards) {
    for(var x = 0; x < 3; ++x) {
        for(var y = 0; y < 3; ++y) {
            var cell = grid.at(x, y);

            if(cell !== null) {
                continue;
            }

            for(var i = 0; i < cards.length; ++i) {
                yield {
                    x: x,
                    y: y,
                    card: cards[i]
                };
            }
        }
    }
}

module.exports = moveSet;
