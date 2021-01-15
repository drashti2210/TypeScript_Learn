import { HasEmail, HasPhoneNumber } from "./Basics-1";

interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { fax: number };
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K] // 💡turning key into value -- a *mapped type*
) {
  //...
}
contact("email", { name: "foo", email: "abc@gmail.com" });
contact("phone", { name: "foo", phone: 1234098765 });
contact("fax", { fax: 1231 });

type AllCommKeys = keyof CommunicationMethods;
type AllCommValues = CommunicationMethods[keyof CommunicationMethods];


type EventualType<T> = T extends Promise<infer S> 
  ? S 
  : T;

let a: EventualType<Promise<number>>;
let b: EventualType<number[]>;

// Built-in Utility Types

type MayHaveEmail = Partial<HasEmail>;
const me: MayHaveEmail = {};

type HasThen<T> = Pick<Promise<T>, "then" | "catch">;

// let hasThen: HasThen<number> = Promise.resolve(4);
// hasThen.then;

type OnlyStrings = Extract<"a" | "b" | 1 | 2, number>;

type NotStrings = Exclude<"a" | "b" | 1 | 2, string>;
type ABCPromises = Record<"a" | "b" | "c", Promise<any>>;

