function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateHelloWorld() {
  return "Hello World";
}

module.exports = { generateRandomNumber, generateHelloWorld };
