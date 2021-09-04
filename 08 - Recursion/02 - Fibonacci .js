


function fibonacciIterative(number){
let  arr = [0,1]

    for (let i = 2; i < number+1; i++) {
        arr.push(arr[i-2] + arr[i-1])

    }

    return arr[number]
}


function fibonacciRecursive(n) {

    if(n < 2 ) return n

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}



console.log(fibonacciIterative(43))
