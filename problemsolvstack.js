





let stack = [];
let count = 0;
let min = 0;
let start0 = 0;
function push0(element) {
    stack[count] = element;
    count++;
    console.log(element + " " + "added to " + count);
    if (min == 0 && start0 == 0) {
        min = element;
        start0 = 1;
    } else if (min > element) {
        min = element;
    }
    return count - 1
}

push0(400)
push0(200)
push0(300)

console.log(`${min} is the minimum element`)















// Javascript program to implement Queue using  
// two stacks with costly enQueue()  
class Queue {

    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enQueue(x) {

        // Move all elements from s1 to s2 
        while (this.s1.length != 0) {
            this.s2.push(this.s1.pop());
            //s1.pop(); 
        }

        // Push item into s1 
        this.s1.push(x);

        // Push everything back to s1 
        while (this.s2.length != 0) {
            this.s1.push(this.s2.pop());
            //s2.pop(); 
        }
    }

    // Dequeue an item from the queue  
    deQueue() {

        // If first stack is empty 
        if (this.s1.length == 0) {
            document.write("Q is Empty");
        }

        // Return top of s1 
        let x = this.s1[this.s1.length - 1];
        this.s1.pop();
        return x;
    }
}

// Driver code
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");