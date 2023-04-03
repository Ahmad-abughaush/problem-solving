class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtTail(val) {

        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        }
        else {

            let newTail = this.head;;

            while (newTail.next !== null) {
                newTail = newTail.next;
            }

            newTail.next = newNode;
        }

        this.size++;
    }

    size() {
        return this.size;
    }
}


let link = new LinkedList();

link.addAtTail(1);
link.addAtTail(2)
link.addAtTail(3)
link.addAtTail(4)
link.addAtTail(5)
link.addAtTail(6)

// Q1
function getSizeLinkedList(head) {

    let count = 0;

    while (head.next !== null) {
        head = head.next;
        count++;
    }
    return count;
}

function getMid(size, head) {

    if (size === 0)
        return -1;

    let mid = Math.floor(size / 2);

    if (mid === 1)
        this.head = this.head.next;

    let i = 0;
    let currently = head;

    while (i < mid - 1) {
        currently = currently.next;
        i++;
    }
    let itemDeleted = currently.next;

    currently.next = currently.next.next;
    head = currently;

    return itemDeleted
}

let size = getSizeLinkedList(link.head);

console.log(getMid(size, link.head))

// Q2
function ReverseLinkedList(head) {

    let stack3 = [];

    while (head !== null) {

        stack3.push(head.value);
        head = head.next;
    }

    head = null; // clean The head

    stack3.forEach(value => {
        let newNode = new Node(value);
        newNode.next = head;
        head = newNode;
    });

    return head;
}

console.log(ReverseLinkedList(link.head));