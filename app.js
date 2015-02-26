require('babel/polyfill');

var React = require('react'),
    Dispatcher = require('dispatchr')(),
    Game = require('./components/Game');

var GameStore = require('./stores/GameStore'),
    GridStore = require('./stores/GridStore');

[
    GameStore,
    GridStore
].forEach(function(store) {
    Dispatcher.registerStore(store);
});

React.withContext({ dispatcher: new Dispatcher() }, function() {
    React.render(<Game />, document.body);
});
