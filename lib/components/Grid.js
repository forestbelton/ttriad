var React = require('react'),
    Card = require('./Card');

require('less/Grid.less');
var Grid = React.createClass({
    propTypes: {
        cards: React.PropTypes.array.isRequired,
        cardLenEQ9: function(props) {
            if(props.cards.length != 9) {
                return new Error('Must have exactly 9 cards');
            }
        }
    },

    renderCards: function() {
        return this.props.cards.map((card) =>
                                        <Card key={card.name} {...card} />);
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
