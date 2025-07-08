// argv - Returns an array of command-line arguments
console.log(process.argv);          // All arguments passed to the script
console.log(process.argv[3]);       // The 4th argument (index starts at 0)

// env - Access environment variables
console.log(process.env.LOGNAME);   // Returns value of the LOGNAME env variable (may be undefined on Windows)

// pid - Current process ID
console.log(process.pid);           // Useful to track or kill the process

// cwd() - Current working directory
console.log(process.cwd());         // Shows the folder where the script is running

// title - Title of the current process
console.log(process.title);         // Usually 'node', can be changed

// memoryUsage() - Returns memory usage info of the process
console.log(process.memoryUsage()); // Shows used heap, RSS, external memory, etc.

// uptime() - Time in seconds since the process started
console.log(process.uptime());      // How long the Node process has been running

// exit event - Fires just before the process exits
process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

// exit() - Ends the Node.js process
process.exit(0); // 0 means successful exit

// This will NOT run, because the process exits above
console.log("Hello from after exit");
