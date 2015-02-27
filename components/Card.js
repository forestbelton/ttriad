var React = require('react/addons');

require('less/Card.less');
var Card = React.createClass({
    propTypes: {
        color: React.PropTypes.oneOf(['red', 'blue']).isRequired
    },

    onDragStart: function(ev) {
        ev.dataTransfer.setData("card", JSON.stringify(this.props));
    },

    render: function() {
        var cardClasses = React.addons.classSet({
            'card':      true,
            'red-card':  this.props.color === 'red',
            'blue-card': this.props.color === 'blue'
        });

        return (
            <div draggable={true} onDragStart={this.onDragStart} className={cardClasses}>
                <div className="card-name">{this.props.name.en}</div>
                <div className="card-top">{this.props.values.top}</div>
                <div className="card-left">{this.props.values.left}</div>
                <div className="card-right">{this.props.values.right}</div>
                <div className="card-bottom">{this.props.values.bottom}</div>
            </div>
        );
    }
});
module.exports = Card;
