const john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" },
  sam = { name: "Sam Joli" },
  sara = { name: "Sara Lean" };

const userRoles = new Map([
  [john, "Admin"],
  [lily, "Developer"],
  [sam, "Developer"],
  [sara, "Developer"],
  [peter, "Editor"],
]);

const uniqueRoles = [...new Set(userRoles.values())];
console.log(uniqueRoles);
