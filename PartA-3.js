let x = [1,2,3,3,3,3]

const secondMax  = (x) => {
    let max = Math.max(...x);
    let seMax = 0;

    if (x.length === 0) return "Error!";

    else {
        let sum = x.reduce((value,element) => {
            const total = element +value
            return total
        }) 
    
        if (sum/x.length === max) return max;
    
        else if (sum/x.length < max) {
            for (let i = 0; i <x.length; i++) {
                if (x[i] < max) {            
                    if (x[i] > seMax) {
                        seMax = x[i]
                    }
                }
            }
        } 
    }                   
    return seMax
}

console.log(secondMax(x))
