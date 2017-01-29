const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        let i = 0;
        while (i != index) {
            node = node.next;
            i++;
        }
        return node.data;
    }

    insertAt(index, data) {
        /*let node = new Node(data);
        node.prev = this.at(index).prev;
        node.next = this.at(index).next;
        this.at(index).prev = node;
        this.at(index).next = node;
        this.length++;*/
    }

    isEmpty() {
        if (this.length == 0) return true;
        else return false;
    }

    clear() {
        let node = this._tail;
        while (!this.isEmpty()){
            node.data = null;
            node.next = null;
            node = node.prev;
            this.length--;
        }
    }

    deleteAt(index) {
        let node = this._head;
        let i = 0;
        while (i < index) {
            node = node.next;
            i++;
        }
        while (i != this.length - 1) {
            node.data = node.next.data;
            this._tail = node;
            node = node.next;
            i++;
        }
        node.data = null;
        node.next = null;
        this.length--;
        return this;
    }

    reverse() {}

    indexOf(data) {
        let node = this._head;
        let i = 0;
        do {
            if (node.data == data) return i;
            node = node.next;
            i++;
        } while (i != this.length);
        return -1;
    }
}

module.exports = LinkedList;
