import crypto from "crypto";

// createHash() - Creates a SHA-256 hash object
// const hash = crypto.createHash("sha256");

// update() - Feeds the input string into the hash
// hash.update("password1234");

// digest("hex") - Converts the final hash output into a readable hexadecimal string
// console.log(hash.digest("hex")); // output: b9c950640e1b3740e98acb93e669c65766f6670dd1609ba91ff41052ba48c6f3

// randomBytes() - Generates secure random bytes (useful for tokens, IDs, etc.)
// crypto.randomBytes(16, (error, buffer) => {
//   if (error) throw error;
//   console.log(buffer.toString("hex")); // output: a3f1b2e3d4c5a6b798ab1234cde67890 (example)
// });

// createCipheriv & createDecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello, this is a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted); // Encrypted unreadable string: 576c5a70fc65340b4d6c35af81ba6a99809593692af44ebe9c157aaf13bcaf70

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted); // Output: Hello, this is a secret message
