function nextGreater(arr) {
  let stack = [],
    res = Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      let idx = stack.pop();
      res[idx] = arr[i];
    }
    stack.push(i);
  }

  return res;
}