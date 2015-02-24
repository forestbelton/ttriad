var React = require('react');

var Card = React.createClass({
    propTypes: {
        name:   React.PropTypes.string.isRequired,
        top:    React.PropTypes.number.isRequired,
        right:  React.PropTypes.number.isRequired,
        bottom: React.PropTypes.number.isRequired,
        left:   React.PropTypes.number.isRequired
    },

    render: function() {
        return (
            <div className="card">
                <div className="card-name">{this.props.name}</div>
                <div className="card-top">{this.props.top}</div>
                <div className="card-right">{this.props.right}</div>
                <div className="card-bottom">{this.props.bottom}</div>
                <div className="card-left">{this.props.left}</div>
            </div>
        );
    }
});
module.exports = Card;
