// debugger

var page = parseInt(new QueryData().page) || 1;
var pageSize = 10;
// DONE: Ensure that a database table for articles exists, every time we load the page.
console.log('begin calling createTable');
Book.createTable();
console.log('end calling createTable');
console.log('begin calling fetchAll');
Book.fetchAll(Book.initPage);
console.log('end calling fetchAll');

// Enumerable properties are those properties whose internal [[Enumerable]] flag is set to true, which is the default
// for properties created via simple assignment or via a property initializer (properties defined via
// Object.defineProperty and such default [[Enumerable]] to false). Enumerable properties show up in `for...in`
// loops unless the property's name is a Symbol.

// var book = new Book({});
// console.log('book own enumerables=', SimplePropertyRetriever.getOwnEnumerables(book)); // none
// console.log('book prototype enumerables=', SimplePropertyRetriever.getPrototypeEnumerables(book)); // check !
//
//
// console.log('Book own enumerables=', SimplePropertyRetriever.getOwnEnumerables(Book)); // good
// console.log('Book prototype enumerables=', SimplePropertyRetriever.getPrototypeEnumerables(Book)); // none

// console.log('M Book=', getMethods(Book));
// console.log('Book=', Object.getOwnPropertyNames(Book).sort());
//
// console.dir(Book);
