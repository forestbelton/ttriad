var React = require('react');

require('less/Card.less');
var EmptyCard = React.createClass({
    render: function() {
        return (
            <div className="card empty-card">
                <div className="card-name">Empty</div>
            </div>
        );
    }
});
module.exports = EmptyCard;
