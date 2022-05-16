function generateAnimation(str) {
  const stack = [];
  const animation = [];

  for (let char of str) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
    animation.push(stack.join());
  }

  return animation;
}
