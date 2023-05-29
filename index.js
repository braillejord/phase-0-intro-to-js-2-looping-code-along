for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gift) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
};

wrapGifts(gifts);


function writeCards(names, occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const messageBody = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
        messages.push(messageBody);
        debugger;
    }

    return messages;
}; 

function countDown(integer) {
    let countdown = integer;
    while (countdown >= 0) {
        console.log(countdown--);
    }
};