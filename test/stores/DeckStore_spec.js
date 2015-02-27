var expect = require('chai').expect,
    Dispatcher = require('dispatchr')(),
    DeckStore = require('../../stores/DeckStore')

describe('DeckStore', function() {
    var dispatcher,
        deckstore;

    beforeEach(function(){
        Dispatcher.registerStore(DeckStore);

        dispatcher = new Dispatcher();
        deckstore = dispatcher.getStore('DeckStore');
    });

    it('should have a red deck', function() {
      expect(deckstore.getRedDeck()).not.to.be.null;
    });

    it('should have a blue deck', function() {
      expect(deckstore.getBlueDeck()).not.to.be.null;
    });

    it('should return an array with a red and blue deck', function() {
      expect(deckstore.getDecks()).to.have.length(2);
    });

});