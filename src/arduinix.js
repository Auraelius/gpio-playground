class arduinix

exports.printMsg = function () {
  console.log('This is a message from the arduinix package');
};

/* 
 * there can be only one arduinox in the current hardware architecture so 
 * this will be a singleton so these buffers should be the only ones for the system 
 * 
 * expects an array of eight strings matching "/^[0-9b\ ]+$/" (any numeral, or 'b', or ' ')
 * 
 */
let currentTubes = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']; // start with all tubes blank
let nextTubes = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];  

exports.setNextTube(tubeDigits){

  console.log(`setNextTube is running`)

  // validate incoming string
  let regex = RegExp( "/^[0-9b\ ]+$/");
  if(!regex.test(tubeDigits)) return false;

  nextTubes = Array.from(tubeDigits); //clone the array
  return true; 
}
