let x; // I'm shared
export default {
  get() {
    return x;
  },
  set(val) {
    x = val;
  },
};
