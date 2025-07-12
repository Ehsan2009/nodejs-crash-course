import os from "os";

// userInfo()
console.log(os.userInfo());
/*
output: {
  uid: -1,
  gid: -1,
  username: 'Ehsan',
  homedir: 'C:\\Users\\ehsan',
  shell: null
}
*/

// totalmem()
console.log(os.totalmem()); // output: 8471879680 (bytes)

// freemem()
console.log(os.freemem()); // output: 2070671360 (bytes)

// cpus - Returns an array with information about each CPU/core in the system
console.log(os.cpus());
/*
output: [
  {
    model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
    speed: 2496,
    times: {
      user: 31776906,
      nice: 0,
      sys: 26910656,
      idle: 203469953,
      irq: 2439078
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
    speed: 2496,
    times: {
      user: 29843000,
      nice: 0,
      sys: 16758453,
      idle: 215555812,
      irq: 328281
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
    speed: 2496,
    times: {
      user: 37824781,
      nice: 0,
      sys: 20559250,
      idle: 203773234,
      irq: 338562
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
    speed: 2496,
    times: {
      user: 34861343,
      nice: 0,
      sys: 19229968,
      idle: 208065953,
      irq: 270500
    }
  }
]
*/
