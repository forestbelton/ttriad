var React = require('react'),
    Deck = require('./Deck'),
    Grid = require('./Grid');

require('less/Game.less');
var Game = React.createClass({
    _mockDeck: function(cards) {
        var out = [];

        for(var i = 0; i < 5; ++i) {
            const idx = Math.floor(Math.random() * (cards.length - 1));
            out.push(cards[idx]);
        }

        return out;
    },

    render: function() {
        var allCards = require('data/cards'),
            deck1 = this._mockDeck(allCards),
            deck2 = this._mockDeck(allCards);

        return (
            <div className="game">
                <div className="game-header">Triple Triad</div>
                <Deck name="Red" cards={deck1} />
                <Grid />
                <Deck name="Blue" cards={deck2} />
            </div>
        );
    }
});
module.exports = Game;
