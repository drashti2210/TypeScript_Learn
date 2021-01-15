import { HasPhoneNumber, HasEmail } from "./Basics-1";

//TYPE ALIAS

type StringOrNumber = string | number;

type HasName = { name: string };

type NumVal = 1 | 2 | 3 | NumVal[];


export interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}

interface ContactMessenger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}

type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;

const emailer: ContactMessenger1 = (_contact, _message) => {
  /** ... */
};

interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber;
}

interface PhoneNumberDict {
  [numberName: string]:
    | undefined
    | {
        areaCode: number;
        num: number;
      };
}

const phoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 5551212 },
  home: { areaCode: 321, num: 5550010 } // try editing me
};

interface PhoneNumberDict {
  home: {
    areaCode: number;
    num: number;
  };
  office: {
    areaCode: number;
    num: number;
  };
}

phoneDict.home;   
phoneDict.office; 
phoneDict.mobile; 

//TYPE ALIASES vs INTERFACES

type NumberVal = 1 | 2 | 3 | NumberVal[];

type StringVal = "a" | "b" | "c" | StringArr;

// type StringArr = StringVal[];
interface StringArr {
  [k: number]: "a" | "b" | "c" | StringVal[];
}

const x: StringVal = Math.random() > 0.5 ? "b" : ["a"];

export default {};
