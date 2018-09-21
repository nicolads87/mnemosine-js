let Mnemosine = require('./mnemosine');


let store = new Mnemosine();


var person = {
	name: "Jade",
	age: 30,
	email: "jade@ewample.com",
	id: process.argv[3]
};
store.put(process.argv[2], JSON.stringify(person));