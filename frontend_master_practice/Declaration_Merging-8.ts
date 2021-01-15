function foo() {}
interface bar {}
namespace baz {
  export const biz = "hello";
}

const x = foo; 

const y: bar = {};
baz;

export { foo, bar, baz }; 

const xx = 4;
const yy: typeof xx = 4;

interface Address {
  street: string;
}
// const z = Address; //ERROR

class Contact {
  name: string;
  constructor(name:string){
      this.name = name
  }
}

const contactClass = Contact;
const contactInstance: Contact = new Contact("abc"); 

class Album {
  label: Album.AlbumLabel = new Album.AlbumLabel();
}
namespace Album {
  export class AlbumLabel {}
}
interface Album {
  artist: string;
}

let al: Album; 
let alValue = Album; 

export { Album };

class AddressBook {
  contacts!: Contact[];
}
namespace AddressBook {
  export class ABContact extends Contact {}
}

const ab = new AddressBook();
ab.contacts.push(new AddressBook.ABContact("abc"));

function format(amt: number) {
  return `${format.currency}${amt.toFixed(2)}`;
}
namespace format {
  export const currency: string = "$ ";
}

format(2.314);
format.currency; 