function fib(n) {
    let x = [];
    x[0] = 1;
    x[1] = 1;
    
    for (let i = 2; i<=n-1; i++) {  
        x[i] = x[i-1]+x[i-2];                        
    }
    return x[n-1];
}

console.log(fib(8))