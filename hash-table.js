//constructor for hash table - set size of hash table, initializes array of set size. 
function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

let myHT = new HashTable(30);

//constructor for hash node
function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

// the hash function takes in a key and returns a bucket number whish will be used as our index for the key 
HashTable.prototype.hash = function(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    let bucket = total % this.numBuckets;
    return bucket;
}

//when inserting or updating a node we are running the key through our hashing function and then checking for collisions - if there is a collision, we traverse the bucket's chain and find the last node and insert at that postion
HashTable.prototype.insert = function(key, value) {
    let index = this.hash(key);
    console.log(index);
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value)
    } else if (this.buckets[index].key === key) {
        this.buckets[index].value = value
    } else {
        let currentNode = this.buckets[index]
        console.log(currentNode.next);
        while (currentNode.next) {
            console.log("curNode.nex.key");
            console.log(currentNode.next.key);
            if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
}

// search for particular node by key name
HashTable.prototype.get = function(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) {
        console.log("null");
        return null;
    }
    let currentNode = this.buckets[index];
    while (currentNode) {
        if (currentNode.key === key) {
            console.log(currentNode);
            console.log(currentNode.value);
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    console.log("null");
    return null;
}

//iterates through all buckets, and checks for chains in each bucket - returns array of all hash nodes
HashTable.prototype.retrieveAll = function() {
    let allNodes = [];
    console.log("allNodes", allNodes);
    console.log(this.numBuckets);
    console.log(this.buckets);
    console.log(this.buckets[0]);
    // for (let i = 0; this.numBuckets; i++) {
    //     let currentNode = this.buckets[i]
    //     console.log(this.buckets[i]);
    //     // while (currentNode) {
    //     //     allNodes.push(currentNode);
    //     //     currentNode = currentNode.next;
    //     // }
    // }
    // console.log(allNodes);
    // return allNodes;
}

// myHT.insert("Christina", 24);
// myHT.insert("Tommy", 25);
// myHT.insert("Riley", 20);
// myHT.get("Christina");
// console.log(myHT[24]);
// myHT.insert("Andrea", 22);
// myHT.insert("Thomas", 25);
// myHT.insert("Kenny", 20);

//ES6 Swap array
// [ list[x], list[y] ] = [ list[y], list[x] ];

function sortZeros(array) {
    let firstNum = 0;
    let secondNum = array.length - 1;
    while (firstNum < secondNum) {
        if (array[firstNum] < array[secondNum]) {
            firstNum = firstNum + 1;
        } else if (array[firstNum] > array[secondNum]) {
            array[firstNum] = 0;
            array[secondNum] = 1;
            firstNum += 1;
            secondNum -= 1;
        } else if (array[firstNum] === 1 && array[secondNum] === 1) {
            secondNum -= 1;
        } else {
            firstNum += 1;
        }
    }
    return (array);
}

const bitArray = [0, 1, 1, 0, 1, 0];

console.log(sortZeros(bitArray));