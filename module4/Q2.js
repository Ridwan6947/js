
const names = ["Alice", "Bob", "Charlie123", "David", "Eve@Example", "Frank", "123George", "Helen"];

// Regular expression to match names with only letters (case-insensitive)
const regex = /^[a-zA-Z]$/;

// Filter names that match the regular expression
const validNames = names.filter(name => regex.test(name));

console.log(validNames);
