let Mnemosine = require('./mnemosine');


let publisher = new Mnemosine();


var person = {
	name: "Jade",
	age: 30,
	email: "jade@ewample.com",
	id: process.argv[3]
};
publisher.publish(process.argv[2], JSON.stringify(person));