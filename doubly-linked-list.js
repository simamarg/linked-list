function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

DoublyList.prototype.print = function() {
    console.log('Doubly-inked list:');
    var currentNode = this.head;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
};

DoublyList.prototype.addToTheBeginning = function(newNode) {
    if (this._length === 0) {
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.previous = newNode;
    }
    this.head = newNode;
    this._length++;
};

DoublyList.prototype.addToTheEnd = function(newNode) {
    if (this._length === 0) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
        newNode.previous = this.tail;
    }
    this.tail = newNode;
    this._length++;
};

DoublyList.prototype.delete = function(node) {
    if (this.head === node) { // the item to remove is in the head
        this.head = node.next;
        this.head.previous = null;
        this._length--;
    } else {
        var currentNode = this.head;
        while (currentNode.next !== null && currentNode.next !== node) {
            currentNode = currentNode.next;
        }
        if (currentNode.next === node) { // found the previous of the node to remove
            currentNode.next = node.next;
            node.next.previous = currentNode;
            this._length--;
        }
    }
};

DoublyList.prototype.removeItemByIndex = function(index) {
    if (index === 0) { // the item to remove is in the head
        this.head = this.head.next;
        this.head.previous = null;
        this._length--;
    } else {
        var currentNode = this.head;
        for (var i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
        currentNode.next.previous = currentNode;
        this._length--;
    }
};

// test the list:
var list = new DoublyList();
list.addToTheBeginning(new Node(3));
list.addToTheBeginning(new Node(5));
list.print(); // 5, 3
var node2 = new Node(4);
list.addToTheEnd(node2);
list.addToTheEnd(new Node(7));
list.print(); // 5, 3, 4, 7
list.delete(node2);
list.print(); // 5, 3, 7
list.removeItemByIndex(1);
list.print(); // 5, 7