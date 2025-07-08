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

// cpus
console.log(os.cpus());
