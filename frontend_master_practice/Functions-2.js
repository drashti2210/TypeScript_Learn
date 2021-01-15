"use strict";
exports.__esModule = true;
//FUNCTIONS
// Simple Function
function sendEmail(to) {
    return {
        recipient: to.name + " <" + to.email + ">",
        body: "You're pre-qualified for a loan!"
    };
}
// Arrow Function
var sendTextMessage = function (to) {
    return {
        recipient: to.name + " <" + to.phone + ">",
        body: "You're pre-qualified for a loan!"
    };
};
function getNameParts(contact) {
    var parts = contact.name.split(/\s/g);
    if (parts.length < 2) {
        throw new Error("Can't calculate name parts from name \"" + contact.name + "\"");
    }
    return {
        first: parts[0],
        middle: parts.length === 2
            ? undefined
            :
                parts.slice(1, parts.length - 2).join(" "),
        last: parts[parts.length - 1]
    };
}
var sum = function () {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    return vals.reduce(function (sum, x) { return sum + x; }, 0);
};
console.log(sum(3, 4, 6));
// "function implementation"
function contactPeople(method) {
    var people = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        people[_i - 1] = arguments[_i];
    }
    if (method === "email") {
        people.forEach(sendEmail);
    }
    else {
        people.forEach(sendTextMessage);
    }
}
contactPeople("email", { name: "foo", email: "" });
contactPeople("phone", { name: "foo", phone: 1234567890 });
// contactPeople("email", { name: "foo", phone: 12345678 }); // ERROR
function sendMessage(preferredMethod) {
    if (preferredMethod === "email") {
        console.log("sendEmail");
        sendEmail(this);
    }
    else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
var c = { name: "Drashti", phone: 9712649594, email: "drashtijtandel@gmail.com" };
function invokeSoon(cb, timeout) {
    setTimeout(function () { return cb.call(null); }, timeout);
}
// invokeSoon(() => sendMessage("email"), 500); //ERROR
var bound = sendMessage.bind(c, "email");
invokeSoon(function () { return bound(); }, 500);
invokeSoon(function () { return sendMessage.apply(c, ["phone"]); }, 500);
exports["default"] = {};
