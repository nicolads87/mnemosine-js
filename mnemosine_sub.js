let Mnemosine = require('./mnemosine');


let subscriber = new Mnemosine();
subscriber.subscribe(process.argv[2], function(data) {
	console.log(data);
});