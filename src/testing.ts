let users: string[] = ["mani", "thilak"];

//tuple
let person: [string, number, boolean] = ["thilakmani", 200, true];

console.log(person[0].indexOf("mani"));

//enum

const enum FilepreviewOption {
  Print = "print",
  Download = "download",
  SplitView = "splitview",
  PIP = "pip",
}

const currentFilepreviewOption: FilepreviewOption = FilepreviewOption.Print;

console.log(currentFilepreviewOption);

//function
function display(name: string, age: number): string {
  return name + " is " + age;
}

console.log(display("thilak", 20));

//object

let animal: {
  name: string;
  age: number;
  country?: string;
} = { name: "lion", age: 50 };

animal.country = "india";

console.log(animal);

type Human = {
  name: string;
  age: number;
  isAlive?: boolean;
  speak?: (text: String) => void;
};

const Person1: Human = {
  name: "ajith",
  age: 25,
  isAlive: true,
};

const Person2: Human = {
  name: "vimal",
  age: 30,
  isAlive: true,
};

const Person3: Human = {
  name: "mani",
  age: 20,
  speak: (msg) => console.log(msg),
};

Person3.speak("hiii");

type Resizable = {
  resize: () => void;
};

type Draggable = {
  drag: () => void;
};

type UIWidget = Resizable & Draggable;

const FilepreviewComponent: UIWidget = {
  drag: () => console.log("draGGINg"),
  resize: () => console.log("resizing"),
};
