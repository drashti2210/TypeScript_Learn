import { HasPhoneNumber, HasEmail } from "./Basics-1";

//CLASSES
export class Contact implements HasEmail {
  email: string;
  name: string;
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

class ParamPropContact implements HasEmail {
  constructor(public name: string, public email: string = "no email") {
  }
}

class OtherContact implements HasEmail, HasPhoneNumber {
  protected age: number = 0;
  constructor(public name: string, public email: string, public phone: number) {
  }
}

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
  public abstract phone: number; 
  constructor(
    public name: string,
    public email: string 
  ) {}

  abstract sendEmail(): void; 
}

class ConcreteContact extends AbstractContact {
  constructor(
    public phone: number, 
    name: string,
    email: string
  ) {
    super(name, email);
  }
  sendEmail() {
    console.log("sending an email");
  }
}
