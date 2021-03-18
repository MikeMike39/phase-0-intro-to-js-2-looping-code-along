
// Defining "namesArray" an "messageArray"
const namesArray = ['Lisa', 'Kaitlin', 'Jan'];
const messageArray = [];

//Function "writeCards" returning an array of thank you messages for each name provided to the function

function writeCards(namesArray,messages) {
    for (let i = 0; i < namesArray.length; i++) {
        messageArray[i] = `Thank you, ${namesArray[i]}, for the wonderful ${messages} gift!`;
      }
      return messageArray;
}
// Starting the countdown actual "11"
let number = 0;

// Function "countDown" logs each number when counting down, starting from the number provided

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}