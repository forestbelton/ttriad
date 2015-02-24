var React = require('react'),
    Grid = require('./Grid');

var Game = React.createClass({
    render: function(): any {
        var cards = require('../cards');

        return <Grid cards={cards} />;
    }
});
module.exports = Game;
