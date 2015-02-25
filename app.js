var React = require('react'),
    Dispatcher = require('dispatchr')(),
    Game = require('./components/Game');

var GridStore = require('./stores/GridStore');

[
    GridStore
].forEach(function(store) {
    Dispatcher.registerStore(store);
});

React.withContext({ dispatcher: new Dispatcher() }, function() {
    React.render(<Game />, document.body);
});
