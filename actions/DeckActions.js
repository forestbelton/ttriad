
var DeckActions = {

    playCard: function(dispatcher, card, position) {
        dispatcher.dispatch('play-card', {
            card: card,
            position: position
        });
    }

}

module.exports = DeckActions;
