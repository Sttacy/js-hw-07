function info({ name, age } = userInfo) {
  console.log(`${name} є ${age} років`);
}

const user = {
  name: "John",
  age: 23,
};
info(user);
