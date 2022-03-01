'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const S: string = readLine()

    try {
        let error = () => {throw "Bad String"}
        let num = parseInt(S) ? parseInt(S) : error()
        console.log(num)
    } 
    catch (e) {
        console.log(e)
    }
}