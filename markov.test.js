const MarkovMachine = require('./markov');

describe('Testing MarkovMachine Class', function() {
    
    test('MarkovMachine.makeText() should return string', function() {
        let mm = new MarkovMachine("Here is a string that has words and I think it is not that great so I will end it now");

        expect(mm.makeText()).toEqual(expect.any(String));
    })

    test('MarkovMachine.getRandomValue() should return random word (String)', function() {
        let word = MarkovMachine.getRandomValue(["random", "words", "here"]);

        expect(word).toEqual(expect.any(String));
        
    })
})