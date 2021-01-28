const Hosts = (function () {
  let hosts = {};

  return {
    add(name, address) {
      if (!hosts.hasOwnProperty(name)) {
        hosts[name] = [];
      }
      hosts[name].push(address);
    },
    lookupByName(name) {
      if (hosts.hasOwnProperty(name)) {
        return hosts[name];
      }
      return [];
    },
    lookupByIP(address) {
      let matches = [];
      Object.getOwnPropertyNames(hosts).forEach((name) => {
        if (hosts[name].includes(address)) {
          matches.push(name);
        }
      });
      return matches;
    },
    clear() {
      hosts = {};
    },
  };
})();

/*
const Hosts = (function () {
  const hostMap = new Map();

  // private stuff...
  const add = function (host, ip) {
    let ips;
    if (hostMap.has(host)) {
      ips = hostMap.get(host);
    } else {
      ips = [];
    }
    ips.push(ip);
    //hostMap.set(host, ips);
  }

  const lookupByName = function (host) {
    if (hostMap.has(host)) {
      return hostMap.get(host);
    }
    return [];
  }

  const lookupByIP = function (ip) {
    let foundHosts = [];

    hostMap.forEach(function (ips, host) {
      if (ips.includes(ip)) {
        foundHosts.push(host);
      }
    });
    return foundHosts;
  }

  const clear = function () {
    hostMap.clear();
  }

  // public stuff
  return {
    add,
    lookupByName,
    lookupByIP,
    clear,
  }

})();
/**/
