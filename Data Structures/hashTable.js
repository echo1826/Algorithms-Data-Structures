class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        // using a prime number reduces collisions, data is spread more evenly using prime numbers as part of the hash operation
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(str.length, 100); i++) {
            let char = str[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % arrLength;
        }
        return total;
    }
    set(key, value) {
        // implement a check to see if the key already exists so no duplicate keys exists in the table
        let hash = this._hash(key);
        if(!this.keyMap[hash]) {
            this.keyMap[hash] = [];
        }
        this.keyMap[hash].push([key, value]);
    }
    get(key) {
        let hash = this._hash(key);
        if(this.keyMap[hash]) {
            for(let i = 0; i < this.keyMap[hash].length; i++) {
                if(this.keyMap[hash][i][0] === key) {
                    return this.keyMap[hash][i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this,keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
        
    }
    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this,keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}