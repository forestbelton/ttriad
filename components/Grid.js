var React = require('react'),
    Card = require('./Card'),
    EmptyCard = require('./EmptyCard');

require('less/Grid.less');
var Grid = React.createClass({
    propTypes: {
        cards: React.PropTypes.array.isRequired,
        cardsLenEQ9: function(props) {
            if(props.cards.length != 9) {
                return new Error('Must have exactly 9 cards');
            }
        }
    },

    renderCards: function() {
        return this.props.cards.map((card, i) => card
                                    ? <Card key={i + card.name} {...card} />
                                    : <EmptyCard key={i} />);
    },

    render: function() {
        return (
            <div className="grid">
                {this.renderCards()}
            </div>
        );
    }
});
module.exports = Grid;
