var React = require('react'),
    Card = require('./Card');

require('less/Deck.less');
var Deck = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        cards: React.PropTypes.array,
        color: React.PropTypes.string.isRequired,
        cardsLenLTE5: function(props) {
            if(props.cards.length > 5) {
                return new Error('Must have 5 or less cards');
            }
        }
    },

    _renderCard: function(cardData) {
        return <Card key={cardData.name.en} color={this.props.color} inDeck={true} {...cardData} />;
    },

    render: function() {
        return (
            <div className="player-deck">
                <div className="deck-name">{this.props.name}</div>
                {this.props.cards.map(this._renderCard)}
            </div>
        );
    }
});
module.exports = Deck;
