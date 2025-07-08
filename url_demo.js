import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// Create a URL object from a URL string
const urlObject = new URL(urlString);
console.log(urlObject);
/*
output: URL {
  href: 'https://www.google.com/search?q=hello+world',
  origin: 'https://www.google.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.google.com',
  hostname: 'www.google.com',
  port: '',
  pathname: '/search',
  search: '?q=hello+world',
  searchParams: URLSearchParams { 'q' => 'hello world' },
  hash: ''
}
*/

// Get the query string part (everything after '?')
console.log(urlObject.search); // output: ?q=hello+world

// Parse query parameters from the search string
const params = new URLSearchParams(urlObject.search);
console.log(params.get("q")); // output: hello world

// Add a new parameter
params.append("limit", "5");
console.log(params); // output: URLSearchParams { 'q' => 'hello world', 'limit' => '5' }

// Remove a parameter
params.delete("limit");
console.log(params); // output: URLSearchParams { 'q' => 'hello world' }

// format() - Converts a URL object back into a full URL string
console.log(url.format(urlObject)); // output: https://www.google.com/search?q=hello+world

// import.meta.url - Returns the full file URL of the current module (only in ES modules)
console.log(import.meta.url); // output: file:///D:/nodejs_crash/url_demo.js

// fileURLToPath() - Converts a file URL (e.g., from import.meta.url) into a regular file system path
console.log(url.fileURLToPath(import.meta.url)); // output: D:\nodejs_crash\url_demo.js
