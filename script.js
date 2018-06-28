function morseDecode(input) {
	const morseCode = {
	  a: '.-',
	  b: '-...',
	  c: '-.-.',
	  d: '-..',
	  e: '.',
	  f: '..-.',
	  g: '--.',
	  h: '....',
	  i: '..',
	  j: '.---',
	  k: '-.-',
	  l: '.-..',
	  m: '--',
	  n: '-.',
	  o: '---',
	  p: '.--.',
	  q: '--.-',
	  r: '.-.',
	  s: '...',
	  t: '-',
	  u: '..-',
	  v: '...-',
	  w: '.--',
	  v: '...-',
	  x: '-..-',
	  y: '-.--',
	  z: '--..'
	};
    // Do your stuff here
    // check for spacing in message, 
  	// if spacing, new word
  		//split the value of the alphabet
  		// match the value with the key
  	// else same word continue loop

  	//splits the morse code message
	var sentence = message.split(' ');
	//accesses the key of the morseCode obj and return as an array
	let morseCodeKeys = Object.keys(morseCode);
	//acesses the values of the morseCode obj and return an array
	let morseCodeValues = Object.values(morseCode)

	let result = [];
	for (var i = 0; i < sentence.length; i++) {
		for (var j = 0; j <morseCodeValues.length; j++){
			if( sentence[i] == morseCodeValues[j] ){
				result.push(morseCodeKeys[j])
			}
		}
	}
	let finalResult = result.join('').toUpperCase();
	return finalResult;
}

function caesarEncode(input, shift) {
  // Do your stuff here
  // message as a string
  // number of places to shift, positive value shift to right, negative value shift to left.

  return "Your result";
}

module.exports = {
  morseDecode,
  caesarEncode
}

var message = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."
console.log(morseDecode(message));