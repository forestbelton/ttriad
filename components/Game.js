var React = require('react'),
    Deck = require('./Deck'),
    Grid = require('./Grid');

require('less/Game.less');
var Game = React.createClass({
    render: function() {
        var allCards = require('../cards'),
            gridCards = allCards.slice(0, 8).concat(null),
            deck1 = allCards.slice(0, 5),
            deck2 = allCards.slice(4, 9);

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
