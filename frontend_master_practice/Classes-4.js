"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Contact = void 0;
//CLASSES
var Contact = /** @class */ (function () {
    function Contact(name, email) {
        this.email = email;
        this.name = name;
    }
    return Contact;
}());
exports.Contact = Contact;
var ParamPropContact = /** @class */ (function () {
    function ParamPropContact(name, email) {
        if (email === void 0) { email = "no email"; }
        this.name = name;
        this.email = email;
    }
    return ParamPropContact;
}());
var OtherContact = /** @class */ (function () {
    function OtherContact(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = 0;
    }
    return OtherContact;
}());
var AbstractContact = /** @class */ (function () {
    function AbstractContact(name, email) {
        this.name = name;
        this.email = email;
    }
    return AbstractContact;
}());
var ConcreteContact = /** @class */ (function (_super) {
    __extends(ConcreteContact, _super);
    function ConcreteContact(phone, name, email) {
        var _this = _super.call(this, name, email) || this;
        _this.phone = phone;
        return _this;
    }
    ConcreteContact.prototype.sendEmail = function () {
        console.log("sending an email");
    };
    return ConcreteContact;
}(AbstractContact));
