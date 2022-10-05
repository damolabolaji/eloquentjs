
//Finding minimum
function min (a,b){
    if(a < b){
    return a
    }
      else{
        return b
      }
    }
    
    console.log(min(0, 10));
    // → 0
    console.log(min(0, -20));
    // → -20


//B Counting
 function countBs(string){
        let width = string.length;
          counter = 0;
          for(let i = 0; i < width; i++){
          if(string[i] == "B"){
              counter += 1;
              }
            
          }
          return counter;
        }
        
        console.log(countBs("BBC"));
        // → 2

function countChar(string,char){
let width = string.length;
  counter = 0;
  for(let i = 0; i < width; i++){
  if(string[i] == char){
  	counter += 1;
  	}
    
  }
  return counter;
}

console.log(countChar("BBBabaloC", "B"));
// → 3
