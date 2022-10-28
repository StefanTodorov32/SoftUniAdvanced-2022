const { assert, expect } = require('chai');
let bookSelection = require('../bookSelection')
describe("bookSelection Functionallity", function() {
    describe("isGenreSuitable Functionallity", function() {

        it('check genre notsuitable', function() {
            assert.equal(bookSelection.isGenreSuitable('Thriller',1),`Books with Thriller genre are not suitable for kids at 1 age` )
            assert.equal(bookSelection.isGenreSuitable('Horror',6),`Books with Horror genre are not suitable for kids at 6 age` )
            assert.equal(bookSelection.isGenreSuitable('Horror',7),`Books with Horror genre are not suitable for kids at 7 age` )
        });
        it('check genre suitable', function() {
            assert.equal(bookSelection.isGenreSuitable('Horror',52),`Those books are suitable` )
            assert.equal(bookSelection.isGenreSuitable('Thriller',55),`Those books are suitable` )
            assert.equal(bookSelection.isGenreSuitable('Horror',18),`Those books are suitable` )
        });
        it('check genre all', function() {
            assert.equal(bookSelection.isGenreSuitable('Horror',52),`Those books are suitable` )
            assert.equal(bookSelection.isGenreSuitable('Thriller',55),`Those books are suitable` )
            assert.equal(bookSelection.isGenreSuitable('Horror',18),`Those books are suitable` )
        });
     });
    describe("isItAffordable Functionallity", function() {

        it('check if errors', function() {
            assert.throw(()=> bookSelection.isItAffordable(undefined, undefined), undefined)
            assert.throw(()=> bookSelection.isItAffordable('undefined', undefined), undefined)
            assert.throw(()=> bookSelection.isItAffordable([], 3), undefined)
        });
        it('check if no money', function() {
            assert.equal(bookSelection.isItAffordable(10, 1), "You don't have enough money")
            assert.equal(bookSelection.isItAffordable(100, 87), "You don't have enough money")
            assert.equal(bookSelection.isItAffordable(11232, 555), "You don't have enough money")
        });
        it('check if valid', function() {
            assert.equal(bookSelection.isItAffordable(10, 100), `Book bought. You have 90$ left`)
            assert.equal(bookSelection.isItAffordable(87, 100), "Book bought. You have 13$ left")
            assert.equal(bookSelection.isItAffordable(500, 10000), "Book bought. You have 9500$ left")
        });
        
     });
    describe("suitableTitles  Functionallity", function() {

        it('check if errors', function() {
            assert.throw(()=> bookSelection.suitableTitles(['asd'],['asd']),"Invalid input")
            assert.throw(()=> bookSelection.suitableTitles(undefined,3),"Invalid input")
            assert.throw(()=> bookSelection.suitableTitles(3,['asd']),"Invalid input")
        });
        it('check if valid', function() {
            let inputs = [
                {title: 'The Hello', genre: 'Horror'},
                {title: 'The Sims', genre: 'Thriller'},
                {title: 'The Pimp', genre: 'Horror'}
            ]
            let res = ['The Hello', 'The Pimp']
            assert.equal(bookSelection.suitableTitles(inputs, 'Horror').join(' '), res.join(' '))
             res = ['The Sims']
            assert.equal(bookSelection.suitableTitles(inputs, 'Thriller').join(' '), res.join(' '))
             res = []
            assert.equal(bookSelection.suitableTitles(inputs, 'Com').join(' '), res.join(' '))
        });
        
     });

});
