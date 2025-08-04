class Users {
  email: string;
  name: string; //define the types of the inputs/details of Users and then use
  constructor(email: string, name: string) {
    //types of the input
    this.email = email;
    this.name = name;
  }
}
const Amisha = new Users("Amisha@gmail.com", "Amisha"); //new instance/object of the class Users
