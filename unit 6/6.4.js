const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];

const setElementColor = (el, color) => {
  el.style.textColor = color;
};

const pickColor = () => {
  let pivot = 0;

  return () => {
    if (pivot === colors.length - 1) pivot = 0;
    return colors[pivot];
  };
};

const colorTree = (node) => {
  const queue = [];
  queue.push(node);
  const getColor = pickColor();

  while (queue.length) {
    const currentNode = queue.shift();

    if (currentNode.tagName === 'LI') {
      setColor(currentNode, getColor());
    }

    if (currentNode.tagName === 'UL') {
      queue.push(...currentNode.childNodes);
    }
  }
};
