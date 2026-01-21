const input2 = Number(process.argv[2]);

if (!isNaN(input2)) {
    let i = 1
    while (i <= input2) {
        if (input2/3 && input2/5) {
            console.log("Fizzbuzz");
        } else if (input2/3) {
            console.log("Fizz");
        } else if (input2/5) {
            console.log("Buzz");
        i++ 
        console.log(i);
        }

    }
}
//*** 