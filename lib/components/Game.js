var React = require('react'),
    Grid = require('./Grid');

var Game = React.createClass({
    render: function(): any {
        var cards = require('../cards').slice(0, 9);

        return <Grid cards={cards} />;
    }
});
module.exports = Game;
