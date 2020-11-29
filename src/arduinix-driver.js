

printMsg = function () {
  console.log('This is a message from the arduinix package');
};

/* 
 * there can be only one arduinix in the current hardware architecture so 
 * this will be a singleton so these buffers should be the only ones for the system 
 * 
 * expects an array of eight strings matching "/^[0-9b\ ]+$/" (any numeral, or 'b', or ' ')
 * 
 */
let currentTubes = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']; // start with all tubes blank
let nextTubes = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];  
let numberOfPairs = currentTubes.length/2;

function setNextTube(tubeDigits){

  console.log(`setNextTube is running`)

  // validate incoming string
  let regex = RegExp( "/^[0-9b\ ]+$/");
  if(!regex.test(tubeDigits)) return false;

  nextTubes = Array.from(tubeDigits); //clone the array
  return true; 
}

/* 
 * this is responsible for keeping the tubes lit
 * it encapsulates all the storage and logic it needs
 * it takes new numbers to be displayed from the tube queue at frequent intervals
 * (at the end of the pair cycles)
 * It uses the intensity value to set PWM values before lighting up the tube pair
 * While the pair is lit the PWM duty cycle sets the intensity
 * */



function multiplexer (numberOfTubes ){

//  this function is responsible for keeping the tubes lit
  // use local storage for current tube values and intensities
  // set up forever loop
  
  let tubePair = 0
  let numberOfPairs = numberOfTubes/2


  for (tubePair = 0; tubePair < numberOfPairs; tubePair++){
    displayNumberPair(
      tubePair,
      currentTubes[tubePair],
      currentTubes[tubePair + numberOfPairs]
      )
  }

}

