var createStore = require('dispatchr/utils/createStore');

var DeckStore = createStore({
    storeName: 'DeckStore',

    _mockDeck: function(cards) {
        var out = [];

        for(var i = 0; i < 5; ++i) {
            const idx = Math.floor(Math.random() * (cards.length - 1));
            out.push(cards[idx]);
        }

        return out;
    },

    initialize: function() {
        var allCards = require('../data/cards');
        this.red = this._mockDeck(allCards);
        this.blue = this._mockDeck(allCards);
    },

    getDecks: function () {
        return [this.getRedDeck(), this.getBlueDeck()];
    },

    getRedDeck: function() {
        return this.red;
    },

    getBlueDeck: function() {
        return this.blue;
    },

    handlers: {
        'play-card': function(payload) {
            var removeCard = function(card) {
                return card.name.en != payload.card.name.en;
            };
            
            if(payload.card.color == 'red') {
                this.red = this.red.filter(removeCard);
            } else if(payload.card.color == 'blue') {
                this.blue = this.blue.filter(removeCard);
            }

            this.emitChange();
        }
    }
});
module.exports = DeckStore;
