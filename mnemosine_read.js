let Mnemosine = require('./mnemosine');


let store = new Mnemosine();



store.get(process.argv[2], function(data) {
	console.log(data)
});