var React = require('react'),
    DeckActions = require('../actions/DeckActions'),
    GridActions = require('../actions/GridActions'),
    Grid = require('../lib/Grid'),
    Negamax = require('../lib/Negamax');

require('less/Card.less');
var EmptyCard = React.createClass({
    contextTypes: {
        dispatcher: React.PropTypes.object.isRequired
    },

    propTypes: {
        position: React.PropTypes.number.isRequired
    },

    onDragOver: function(ev) {
      ev.preventDefault();
    },

    onDrop: function(ev) {
      ev.preventDefault();

      var card = JSON.parse(ev.dataTransfer.getData("card"));
      card.inDeck = false;

      DeckActions.playCard(this.context.dispatcher, card);
      GridActions.gridSet(this.context.dispatcher, card, this.props.position);

      var gridStore = this.context.dispatcher.getStore('GridStore'),
          deckStore = this.context.dispatcher.getStore('DeckStore'),
          grid = new Grid(gridStore.getCards()),
          deck1 = deckStore.getRedDeck(),
          deck2 = deckStore.getBlueDeck(),
          move = Negamax(grid, deck2, deck1, 1, 'blue'),
          card = move[1];

      move[1].card.color = 'blue';
      move[1].card.inDeck = false;

      DeckActions.playCard(this.context.dispatcher, move[1].card);
      GridActions.gridSet(this.context.dispatcher, move[1].card,
                          move[1].y * 3 + move[1].x);
    },

    render: function() {
        return (
            <div onDrop={this.onDrop} onDragOver={this.onDragOver} className="card empty-card">
                <div className="card-name">Empty</div>
            </div>
        );
    }
});
module.exports = EmptyCard;
