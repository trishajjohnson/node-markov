/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
    // this.chains;
    // console.log(this.chains);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();
    for(let x = 0; x < this.words.length; x++) {
      if (chains.has(this.words[x])) {
        chains.get(this.words[x]).push(this.words[x + 1] || null);
      }
      else {
        chains.set([this.words[x]], [this.words[x + 1] || null]);
      }
    }
    this.chains = chains;
    console.log(this.chains);
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

let string = "This is a song I this was I when I am sad.";

const machine = new MarkovMachine(string);

console.log(machine);