//Function "writeCards" with two arguments "names" "events"
function writeCards(names, event) {
    const messages = []
    //For Loop over names an adds custom thank you for each name in the array
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }

    return messages
}
//Function "countDown"(number)
function countDown(number) {
    for (let i = number; i >= 0; i--)
    console.log(i);
}