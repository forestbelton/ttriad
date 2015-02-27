var React = require('react'),
    Card = require('./Card'),
    EmptyCard = require('./EmptyCard');

require('less/Grid.less');
var Grid = React.createClass({
    contextTypes: {
        dispatcher: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            cards: this._getCards()
        };
    },

    _getCards: function() {
        return this.context.dispatcher.getStore('GridStore').getCards();
    },

    _onGridChange: function() {
        this.setState({
            cards: this._getCards()
        });
    },

    componentDidMount: function() {
        this.context.dispatcher.getStore('GridStore')
            .addChangeListener(this._onGridChange);
    },

    componentWillUnmount: function() {
        this.context.dispatcher.getStore('GridStore')
            .removeChangeListener(this._onGridChange);
    },

    renderCards: function() {
        return this.state.cards.map((card, i) => card
                                    ? <Card key={i + card.name} position={i} {...card} />
                                    : <EmptyCard key={i} position={i} />);
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
