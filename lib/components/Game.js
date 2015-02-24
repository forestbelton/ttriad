var React = require('react'),
    Grid = require('./Grid');

var Game = React.createClass({
    render: function(): any {
        return <Grid cards={[]} />;
    }
});
module.exports = Game;
