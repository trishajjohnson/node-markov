/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();
    
    for(let x = 0; x < this.words.length; x++) {
      let word = this.words[x] || null;
      let nextWord = this.words[x + 1] || null;

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      }
      else {
        chains.set(word, [nextWord]);
      }
    }

    this.chains = chains;
  }

  static getRandomValue(array) {
    const value = array[Math.floor(Math.random() * array.length)];
    return value;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let words = Array.from(this.chains.keys());
    let word = MarkovMachine.getRandomValue(words);
    let text = [];
    
    while(text.length < numWords && word !== null) {
      text.push(word);
      word = MarkovMachine.getRandomValue(this.chains.get(word));
    }
    
    console.log(text.join(" "))
    return text.join(" ");
  }
}

module.exports = MarkovMachine;
