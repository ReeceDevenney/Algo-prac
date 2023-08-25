export default function two_crystal_balls(breaks: boolean[]): number {
    
    const jumpAmt = Math.floor(Math.sqrt(breaks.length))
    let index = 0

    do {
       if(breaks[index] === true) {
           for(let i = index - jumpAmt; i < index; ++i) {
               if(breaks[i]) {
                   return i
               }
           }
       } else {
           index = index + jumpAmt
       } 
    } while (index < breaks.length);
    return -1
}
