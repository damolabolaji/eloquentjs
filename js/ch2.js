let number;

for(number = 1; number <= 100; number++){

    if(number % 5 === 0 && number % 3 === 0){
        console.log(number + 'FizzBuzz')
    }
    else if(number % 3 === 0){
        console.log('Fizz')
    }
    else if(number % 5 === 0 && !number % 3 === 0){
        console.log('Buzz')
    }
    
    else(
        console.log(number)
    )
}

let hashCharacter = '';

for(i = 0; i < 7; i++){
    hashCharacter = hashCharacter + '#'
    console.log(hashCharacter)
}


let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
