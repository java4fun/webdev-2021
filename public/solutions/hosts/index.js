const Hosts = (function () {
  let hosts = {};

  const add = (name, address) => {
    if (!hosts.hasOwnProperty(name)) {
      hosts[name] = [];
    }
    hosts[name].push(address);
  };

  const lookupByName = (name) => {
    if (hosts.hasOwnProperty(name)) {
      return hosts[name];
    }
    return [];
  };

  const lookupByIP = (address) => {
    let matches = [];
    Object.getOwnPropertyNames(hosts).forEach((name) => {
      if (hosts[name].includes(address)) {
        matches.push(name);
      }
    });
    return matches;
  };

  const clear = () => {
    hosts = {};
  };

  const getLength = () => {
    return Object.keys(hosts).length;
  };

  return {
    add,
    lookupByName,
    lookupByIP,
    clear,
    get length() {
      return getLength();
    },
  };
})();

export default Hosts;
