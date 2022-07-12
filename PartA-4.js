const fizzBuzz = (x) => {
    let a,b = "";
    switch (x%3 === 0) {
        case true: 
        a = 'Fizz';
        break;
        case false: 
        a = '';
        break;        
    }
    switch (x%5 === 0) {
        case true: 
        b = 'Buzz';
        break;
        case false: 
        b = '';
        break;        
    }
    return a+b;
}
console.log(fizzBuzz(45))
