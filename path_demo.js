import path from "path";
import url from "url";

const filePath = "./dir1/dir2/text.txt";

// basename()
console.log(path.basename(filePath)); // output: text.txt

// dirname()
console.log(path.dirname(filePath)); // output: ./dir1/dir2

// extname()
console.log(path.extname(filePath)); // output: .txt

// parse()
console.log(path.parse(filePath));
/*
output: {
  root: '',
  dir: './dir1/dir2',
  base: 'text.txt',
  ext: '.txt',
  name: 'text'
}
*/

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename); // output: D:\nodejs_crash\path_demo.js
console.log(__dirname); // output: D:\nodejs_crash

// join - Combines path segments (relative or absolute)
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2); // output: D:\nodejs_crash\dir1\dir2\test.txt

// resolve - Builds an absolute path from segments
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3); // output: D:\nodejs_crash\dir1\dir2\test.txt
