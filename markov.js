/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    console.log("here are words", words);
    this.words = words.filter(c => c !== "");
    console.log("words again", this.words);
    // this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

let string = "This is a song I sing when I am sad.";

const machine = new MarkovMachine(string);

// console.log(machine);