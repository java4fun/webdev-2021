let counter = 0;

console.log("Module A");

const increment = () => {
  counter++;
};

const getCount = () => {
  console.log(counter);
};

export { increment, getCount };
