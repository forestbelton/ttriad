var createStore = require('dispatchr/utils/createStore');

var GameStore = createStore({
    storeName: 'GameStore',

    initialize: function() {
        this._turn = 'RED';
    },

    getTurn: function() {
        return this._turn;
    },

    isOver: function() {
        var cards = this.getStore('GridStore').getCards();

        return cards.filter(function(card) {
            return card !== null;
        }).length == cards.length;
    },

    handlers: {
        'switch-turns': function() {
            this._turn = this._turn == 'RED' ? 'BLUE' : 'RED';
            this.emitChange();
        }
    }
});
module.exports = GameStore;
