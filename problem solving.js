


q1)
function fib(n) {
    if (n < 2) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}
fib(9)
console.log(fib(9))

out = 34



q2)

let sum = 0
let arr = [1, 2, 3, 4, 5]
function numbers(n) {
    if (n < 0) { return 0; }
    else {
        return sum += arr[n], numbers(n -= 1)
    }
}
numbers(arr.length - 1)
console.log(sum)

out = 15


q3)

function reversestring(str){
    if(str==""){
    return 0;
    }
    else{    
    return str.split("").reverse().join("")
    }
    }
    reversestring("hello")
    console.log(reversestring("hello")
    )

    out= olleh


