let counter = 0;

const increment = () => {
  counter++;
};

const getCount = () => {
  console.log(counter);
};

export { increment, getCount };
