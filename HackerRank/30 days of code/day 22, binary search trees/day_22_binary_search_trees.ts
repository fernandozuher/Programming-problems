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

interface Node {
    data: number
    left: Node | null
    right: Node | null
}

class Tree {

    static insert(root : Node, data : number) : Node {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left)
                this.insert(root.left, data);
            else
                root.left = new Node(data);
        }
        else {
            if (root.right)
                this.insert(root.right, data);
            else
                root.right = new Node(data);
        }
        
        return this.root;
    }

    static getHeight(root : Node) : number {

        arguments.callee.height = arguments.callee.height || 0
        arguments.callee.maxHeight = arguments.callee.maxHeight || 0

        if (root.left || root.right) {
            arguments.callee.height++
            if (root.left)
                this.getHeight(root.left)
            if (root.right)
                this.getHeight(root.right)
            arguments.callee.height--
        }
        else if (arguments.callee.height > arguments.callee.maxHeight)
            arguments.callee.maxHeight = arguments.callee.height
        
        return arguments.callee.maxHeight
    }
}

function main() {
    
    let root: Node = null;
    
    readLine()
    let values = readLine.split().map(Number);
    
    values.forEach((value) => {root = Tree.insert(root, value)});
    
    console.log(Tree.getHeight(root));
}
