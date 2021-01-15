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
exports.Album = exports.baz = exports.foo = void 0;
function foo() { }
exports.foo = foo;
var baz;
(function (baz) {
    baz.biz = "hello";
})(baz || (baz = {}));
exports.baz = baz;
var x = foo;
var y = {};
baz;
var xx = 4;
var yy = 4;
// const z = Address; //ERROR
var Contact = /** @class */ (function () {
    function Contact(name) {
        this.name = name;
    }
    return Contact;
}());
var contactClass = Contact;
var contactInstance = new Contact("abc");
var Album = /** @class */ (function () {
    function Album() {
        this.label = new Album.AlbumLabel();
    }
    return Album;
}());
exports.Album = Album;
(function (Album) {
    var AlbumLabel = /** @class */ (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    }());
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
exports.Album = Album;
var al;
var alValue = Album;
var AddressBook = /** @class */ (function () {
    function AddressBook() {
    }
    return AddressBook;
}());
(function (AddressBook) {
    var ABContact = /** @class */ (function (_super) {
        __extends(ABContact, _super);
        function ABContact() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ABContact;
    }(Contact));
    AddressBook.ABContact = ABContact;
})(AddressBook || (AddressBook = {}));
var ab = new AddressBook();
ab.contacts.push(new AddressBook.ABContact("abc"));
function format(amt) {
    return "" + format.currency + amt.toFixed(2);
}
(function (format) {
    format.currency = "$ ";
})(format || (format = {}));
format(2.314);
format.currency;
