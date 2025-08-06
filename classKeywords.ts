//this is gonna be about the keywords private and public
//if not defined then public by default

class Users1 {
  email: string; //public by default (opp of private)
  name: string; //# instead for private in js
  readonly city: string = "delhi"; //private makes in inaccessible for the use outside of the class (cam be used in the constructor as that is inside the class)
  constructor(email: string, name: string,city:string) {
    //types of the input
    this.email = email;
    this.name = name;
    this.city = "city";
  }
}
const Amisha1 = new Users("Amisha@gmail.com", "Amisha");
// const Amisha1 = new Users("Amisha@gmail.com", "Amisha","Agra");wont work because city is readonly

// Amisha1.city = "Hey";//city is readonly
