var React = require('react'),
    Card = require('./Card');

var Grid = React.createClass({
    propTypes: {
        cards: React.PropTypes.array.isRequired
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
