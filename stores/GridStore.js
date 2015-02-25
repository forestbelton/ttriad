var createStore = require('dispatchr/utils/createStore');

var GridStore = createStore({
    storeName: 'GridStore',

    initialize: function() {
        this._cards = [];

        for(var i = 0; i < 9; ++i) {
            this._cards.push(null);
        }
    },

    getCards: function() {
        return this._cards;
    },

    handlers: {
        'grid-set': function(payload) {
            if(payload.x < 0 || payload.x > 2 || payload.y < 0 || payload.y > 2) {
                throw new Error('Trying to set a grid card out of bounds');
            }

            this._cards[payload.y * 3 + payload.x] = payload.card;
            this.emitChange();
        }
    }
});
module.exports = GridStore;
