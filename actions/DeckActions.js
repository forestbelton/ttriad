var DeckActions = {
    playCard: function(dispatcher, card) {
        dispatcher.dispatch('play-card', {
            card: card
        });
    }
};

module.exports = DeckActions;
