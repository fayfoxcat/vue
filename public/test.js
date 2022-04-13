function greeter(person) {
    return "hello" + person.lastname + ' ' + person.firstname;
}
var user = {
    firstname: 'Yee',
    lastname: 'Huang'
};
console.log(greeter(user));
