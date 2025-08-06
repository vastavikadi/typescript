class Users3 {
  email: string;
  name: string;
  number:number;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  get getUsersEmail():string{
    return `this is the email: ${this.email}`
  }

  set setUsersPhone(phone:number){
    this.number=phone;
  }
}

const Hellio = new Users3("Hellio@gmail.com", "Hellio");
Hellio.getUsersEmail;
Hellio.setUsersPhone = 29842757;

console.log(Hellio.getUsersEmail);
console.log(Hellio.number);
