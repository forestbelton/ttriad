var React = require('react'),
    Deck = require('./Deck'),
    Grid = require('./Grid');

require('less/Game.less');
var Game = React.createClass({
    contextTypes: {
        dispatcher: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return this._getGame();
    },

    _getGame: function() {
        return {
            decks: this.context.dispatcher.getStore('DeckStore').getDecks()
        };
    },

    _onDeckChange: function() {
        this.setState(this._getGame());
    },

    componentDidMount: function() {
        this.context.dispatcher.getStore('DeckStore')
            .addChangeListener(this._onDeckChange);
    },

    componentWillUnmount: function() {
        this.context.dispatcher.getStore('DeckStore')
            .removeChangeListener(this._onDeckChange);
    },

    render: function() {
        return (
            <div className="game">
                <div className="game-header">Triple Triad</div>
                <Deck name="Red" color="red" cards={this.state.decks[0]} />
                <Grid />
                <Deck name="Blue" color="blue" cards={this.state.decks[1]} />
            </div>
        );
    }
});
module.exports = Game;
