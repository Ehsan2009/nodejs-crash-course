// import fs from "fs";
import fs from "fs/promises";

// readFile() - Asynchronous (non-blocking), uses a callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous (blocking), waits for the file to be read before continuing
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// readFile() - Promise .then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile() - Overwrites the entire file with new content (creates the file if it doesn't exist)
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I am writing to this file");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile() - Adds content to the end of the file without removing existing content
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

const run = async () => {
  await writeFile();
  await appendFile();
  await readFile();
};

run();
