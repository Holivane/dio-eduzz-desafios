let lines = gets().split("\n");

let line = lines.shift().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

if ((A % B == 0) || (B % A == 0))
    print("São Multiplos");                   
else
    print("Não são Multiplos");