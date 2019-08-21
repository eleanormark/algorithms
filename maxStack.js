class MaxStack {
  constructor() {
    this.stack = [];
    this.maxes = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.maxes.length > 0) {
      this.maxes.push(Math.max(val, this.maxes[this.maxes.length - 1]));
    } else {
      this.maxes.push(val);
    }
  }
  pop() {
    if (this.maxes.length > 0) {
      this.maxes.pop();
    }
    return this.stack.pop();
  }
  peekMax() {
    return this.maxes[this.maxes.length - 1];
  }

  peekTop() {
    return this.stack[this.stack.length - 1];
  }

  popMax() {
    let buffer = [];
    let maxVal = this.peekMax();
    while (this.stack[this.stack.length - 1] !== maxVal) {
      buffer.push(this.pop());
    }
    this.pop();
    while (buffer.length > 0) {
      this.push(buffer.pop());
    }

    console.log(this.stack, this.maxes);
    return maxVal;
  }
}

const s = new MaxStack();
s.push(1);
s.push(3);
s.push(2);
s.push(3);
s.push(2);
s.push(2);
console.log(s.peekMax());
s.pop();
s.pop();
console.log(s.peekMax());
console.log(s.popMax());
