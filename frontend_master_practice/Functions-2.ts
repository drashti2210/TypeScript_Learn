import { HasEmail, HasPhoneNumber } from "./Basics-1";

//FUNCTIONS

// Simple Function
function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: "You're pre-qualified for a loan!"
  };
}

// Arrow Function
const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} <${to.phone}>`,
    body: "You're pre-qualified for a loan!"
  };
};

function getNameParts(contact: { name: string }) {
  const parts = contact.name.split(/\s/g); 
  if (parts.length < 2) {
    throw new Error(`Can't calculate name parts from name "${contact.name}"`);
  }
  return {
    first: parts[0],
    middle:
      parts.length === 2
        ? undefined
        : 
          parts.slice(1, parts.length - 2).join(" "),
    last: parts[parts.length - 1]
  };
}

const sum = (...vals: number[]) => vals.reduce((sum, x) => sum + x, 0);
console.log(sum(3, 4, 6)); 

// overload signatures
function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

// "function implementation"
function contactPeople(
  method: "email" | "phone",
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === "email") {
    (people as HasEmail[]).forEach(sendEmail);
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}

contactPeople("email", { name: "foo", email: "" });
contactPeople("phone", { name: "foo", phone: 1234567890 });
// contactPeople("email", { name: "foo", phone: 12345678 }); // ERROR

function sendMessage(
  this: HasEmail & HasPhoneNumber,
  preferredMethod: "phone" | "email"
) {
  if (preferredMethod === "email") {
    console.log("sendEmail");
    sendEmail(this);
  } else {
    console.log("sendTextMessage");
    sendTextMessage(this);
  }
}
const c = { name: "Drashti", phone: 9712649594, email: "drashtijtandel@gmail.com" };

function invokeSoon(cb: () => any, timeout: number) {
  setTimeout(() => cb.call(null), timeout);
}

// invokeSoon(() => sendMessage("email"), 500); //ERROR

const bound = sendMessage.bind(c, "email");
invokeSoon(() => bound(), 500);
invokeSoon(() => sendMessage.apply(c, ["phone"]), 500);

export default {};
