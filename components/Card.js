var React = require('react/addons');

require('less/Card.less');
var Card = React.createClass({
    propTypes: {
        name:   React.PropTypes.string.isRequired,
        top:    React.PropTypes.number.isRequired,
        right:  React.PropTypes.number.isRequired,
        bottom: React.PropTypes.number.isRequired,
        left:   React.PropTypes.number.isRequired,
        color:  React.PropTypes.oneOf(['red', 'blue'])
    },

    render: function() {
        var cardClasses = React.addons.classSet({
            'card':      true,
            'red-card':  this.props.color === 'red',
            'blue-card': this.props.color === 'blue'
        });

        return (
            <div className={cardClasses}>
                <div className="card-name">{this.props.name}</div>
                <div className="card-top">{this.props.top}</div>
                <div className="card-left">{this.props.left}</div>
                <div className="card-right">{this.props.right}</div>
                <div className="card-bottom">{this.props.bottom}</div>
            </div>
        );
    }
});
module.exports = Card;
