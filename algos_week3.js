// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // return true or false if a node exists with data === val
    exists(val){
        var runner = this.head;
        while (runner) { // while we have a runner 
            if (runner.data === val) { // return true if data === value
                return true;
            } else {runner = runner.next;} // otherwise advance the runner
        } return false;
    }

    // remove and return the first node with data === val, if it exists
    removeVal(val) {
        if (this.length == 0){
            return null;
        }
        var runner = this.head;
        while (runner) { // while we have a runner 
            if (runner.data === val && runner != this.head && runner != this.tail) { // return true if data === value
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.prev = null;
                runner.next = null;
                this.length--;
                return runner;
            } else if (runner.data === val && runner == this.head) {
                this.head = runner.next;
                runner.next.prev = null;
                runner.next = null;
                this.length--;
                return runner;
            } else if (runner.data === val && runner == this.tail) {
                this.tail = runner.prev;
                runner.prev.next = null;
                runner.prev = null;
                this.length--;
                return runner;
            } else if (runner.data === val && this.head == this.tail) {
                this.head = null;
                this.tail = null;
                this.length--;
                return runner;
            } else {
                // otherwise advance the runner
                runner = runner.next;
            }
        } return null;
    }

    // is it the head?
    // is it the tail?
    // is it both?
    // is the node even there?
    // does the list even have nodes?
    

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === target) {
                // 
                runner.prev.next = node;
                node.prev = runner.prev;
                runner.prev = node;
                node.next = runner;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
    }

    append(target, node){
        // start at the tail
        if (this.length == 0){
            return "List is empty";
        }
        var runner = this.tail;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === target) {
                // 
                if (runner.next == null){
                    this.addTail(node);
                    this.length++;
                    return "Node successfully added"
                } 
                runner.next.prev = node;
                node.next = runner.next;
                runner.next = node;
                node.prev = runner;
                this.length++;
                return "Node successfully added"
            }
            // otherwise advance the runner
            runner = runner.prev;
        }
        return "Target not in DLList";
    }

    // push to head
    addHead(node) {
        if (this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else if (this.length == 1){
            this.head = node;
            this.head.next = this.tail;
            this.tail.prev = node;
        } else {
            var temp = this.head;
            this.head = node;
            this.head.next = temp;
            temp.prev = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.isEmpty()){
            return null;
        } else if (this.length == 1){
            var temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        } else {
            var temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
            this.length--;
            return temp;
        }
    }

    // return is empty
    isEmpty() {
        if(this.head == null){
            return true;
        } return false;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else if (this.length == 1){
            this.tail = node;
            this.tail.prev = this.head;
            this.head.next = node;
        } else {
            var temp = this.tail;
            this.tail = node;
            this.tail.prev = temp;
            temp.next = node;
        }
        this.length++;
    }

    // pop from head
    removeHead() {
        if (this.isEmpty()){
            return null;
        } else if (this.length == 1){
            var temp = this.tail;
            this.tail = null;
            this.head = null;
            this.length--;
            return temp;
        } else {
            var temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            this.length--;
            return temp;
        }
    }
}

var newDLL = new DLList();

console.log(newDLL.size());

newDLL.addHead(new DLLNode(1));
console.log(newDLL.removeVal(1));
console.log(newDLL.size());

// newDLL.addHead(new DLLNode(3));
// newDLL.addHead(new DLLNode(5));
// newDLL.addHead(new DLLNode(6));
// newDLL.addHead(new DLLNode(9));

// console.log(newDLL.size());
// console.log(newDLL.removeVal(2));
// console.log(newDLL.size());




