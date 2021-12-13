class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if(val === current.val) return undefined;
                if (current.val > newNode.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                        
                    } else {
                        current = current.left;
                    }
                } else if(current.val < newNode.val){
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                        
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(val) {
        if(this.root === null) return false;
        let current = this.root;
        if(current.val === val) return current;
        let foundFlag = false;
        while(!foundFlag && current) {
            if(current.value < val) {
                if(current.val < val) {
                    current = current.right;
                }else if(current.val > val) {
                    current = current.left;
                }else {
                    found = true;
                }
            }
        }
        if(!foundFlag) return undefined;
        return current;
    }
}