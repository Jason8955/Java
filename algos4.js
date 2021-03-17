 // remove and return the first node with data === val, if it exists
 removeVal(val) {
    if (this.length == 0){
        return null;
    }
    var runner = this.head;
    while (runner) { // while we have a runner 
        console.log("You have enetered the while statement")
        if (runner.data === val && runner != this.head && runner != this.tail) { // return true if data === value
            runner.prev.next = runner.next;
            runner.next.prev = runner.prev;
            runner.prev = null;
            runner.next = null;
            this.length--;
            console.log("This is the first if statement")
            return runner;
        } else if (runner.data === val && runner == this.head) {
            this.head = runner.next;
            runner.next.prev = null;
            runner.next = null;
            this.length--;
            console.log("This is the second if statement")
            return runner;
        } else if (runner.data === val && runner != this.head && runner == this.tail) {
            this.tail = runner.prev;
            runner.prev.next = null;
            runner.prev = null;
            this.length--;
            console.log("This is the third if statement")
            return runner;
        } else if (runner.data === val && this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            console.log("This is the fourth if statement")
            return runner;
        } else {
            // otherwise advance the runner
            runner = runner.next;
            console.log("Advance the runner")
        }
    } return null;
}

// is it the head?
// is it the tail?
reverse() {
    var runner = this.head;
    if (runner === null) return;
    if (runner === this.tail) return;

    while (runner) {
        var temp = runner.next;
        runner.next = runner.prev;
        runner.prev = temp;
        runner = temp;
    }

    var temp = this.head;
    this.head = this.tail;
    this.tail = temp;
}