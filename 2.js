let x = [1,2,3,4]
let a = [];

const shift  = (x,y,z) => {
    z = z%x.length

    if (y === 'left') {
        for (let i = 0; i <= x.length-1; i++) {                                   
            if (i+z >= x.length) {
                a[i] = x[i+z-x.length]
            }
            else {
                a[i] = x[i+z]
            }        
        }    
    }

    else if (y === 'right') {
        for (let i = 0; i <= x.length-1; i++) {           
            if (z > i) {
                a[i] = x[x.length-z+i]
            }
            else {
                a[i] = x[i-z]

            }        
        }    
    }
    return a
}   

console.log(shift(x,'left',14));
