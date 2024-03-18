interface Person {
  name: string;
  age: number;
}

const developer: Person = {
  name: "thilak",
  age: 20,
};

interface setAge {
  (age: number): void;
}

function setAge(age: number): void {
  console.log(age);
}
