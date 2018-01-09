function LinkedList() {
    this._length = 0;
    this.head = null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

LinkedList.prototype.print = function() {
    var currentNode = this.head;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
};

LinkedList.prototype.addToTheBeginning = function(newNode) {
    newNode.next = this.head;
    this.head = newNode;
    this._length++;
};

LinkedList.prototype.addToTheEnd = function(newNode) {
    if (this.head === null) { // if the list is empty, add node as the head of the list
        this.head = newNode;
    } else {
        var currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this._length++;
};

LinkedList.prototype.delete = function(node) {
    if (this.head === node) { // the item to remove is in the head
        this.head = node.next;
        this._length--;
    } else {
        var currentNode = this.head;
        while (currentNode.next !== null && currentNode.next !== node) {
            currentNode = currentNode.next;
        }
        if (currentNode.next === node) { // found the previous of the node to remove
            currentNode.next = node.next;
            this._length--;
        }
    }
};

LinkedList.prototype.removeItemByIndex = function(index) {
    if (index === 0) { // the item to remove is in the head
        this.head = this.head.next;
    } else {
        var currentNode = this.head;
        for (var i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
    }
    this._length--;
};


// test the list:
var list = new LinkedList();
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