const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};

function personInfo(obj) {
  const { name, age, email, city } = obj;
  const newObject = {
    fullName: `${name} , ${age}`,
    contact: `${email} , ${city}`,
  };

  return newObject;
}
console.log(personInfo(person));

//\* Маєте отримати результат:
// contact: "john.doe@example.com, New York"
// fullName: "John Doe, 30"
