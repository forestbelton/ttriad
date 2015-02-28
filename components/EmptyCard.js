var React = require('react');
var DeckActions = require('../actions/DeckActions');
var GridActions = require('../actions/GridActions');

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

      DeckActions.playCard(this.context.dispatcher, card, this.props.position);
      GridActions.gridSet(this.context.dispatcher, card, this.props.position);
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
