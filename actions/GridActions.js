
var GridActions = {

    gridSet: function(dispatcher, card, position) {
        dispatcher.dispatch('grid-set', {
            card: card,
            x: position % 3,
            y: Math.floor(position / 3)
        });
    }

}

module.exports = GridActions;
