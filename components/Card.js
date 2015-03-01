var React = require('react/addons');

require('less/Card.less');
var Card = React.createClass({
    propTypes: {
        color: React.PropTypes.oneOf(['red', 'blue']).isRequired,
        inDeck: React.PropTypes.bool.isRequired,
        name: React.PropTypes.shape({
            en: React.PropTypes.string
        }).isRequired,
        values: React.PropTypes.shape({
            top:    React.PropTypes.number,
            right:  React.PropTypes.number,
            bottom: React.PropTypes.number,
            left:   React.PropTypes.number
        }).isRequired
    },

    onDragStart: function(ev) {
        ev.dataTransfer.setData("card", JSON.stringify(this.props));
    },

    render: function() {
        var cardClasses = React.addons.classSet({
            'card':      true,
            'red-card':  this.props.color === 'red',
            'blue-card': this.props.color === 'blue',
            'deck-card': this.props.inDeck
        });

        var cardImage = "data/" + ("000" + this.props.id).slice(-3) + ".png";

        return (
            <div draggable={this.props.inDeck} onDragStart={this.onDragStart}
                 className={cardClasses} alt={this.props.name.en}>
                <img src={cardImage}/>
                <div className="card-values">
                    <div className="card-top">{this.props.values.top}</div>
                    <div className="card-left">{this.props.values.left}</div>
                    <div className="card-right">{this.props.values.right}</div>
                    <div className="card-bottom">{this.props.values.bottom}</div>
                </div>
            </div>
        );
    }
});
module.exports = Card;
