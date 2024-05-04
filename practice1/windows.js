import { Computer } from "./computer"; //if we remove the middle braces here then it didnot works and one more thing if we had exported multiple class form other file  then here in middle braces we have to give all the imported class name but though we remove the braces then we have to put the exports default
class Windows extends Computer {
  constructor(name, company) {
    super(name);
    this.company = company;
  }

  logIn() {
    //fnction
    console.log("You are logged into a windows " + this.name);
  }
}

export default Windows;
