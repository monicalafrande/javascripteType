let a = "A";    //B
let b = "B";    //C
let c = "C";    //A

let tempA = a;
a = b;
b = c;
c = tempA;

    //ou assim

[a, b, c] = [b, c, a];

console.log(a, b, c);