var net = require('net');



class Mnemosine {
	constructor() {
		
	}
	
	
	publish(queue_name, message) {
		var client = new net.Socket();
		var self = this;
		client.connect(5005, '127.0.0.1', function() {
			console.log('Connected');
			let meta = {
				task: 'publish',
				method: ''
				
			};
			let body = {
				key: queue_name,
				value: message
			};
			
			
			
			client.write(JSON.stringify({meta: meta, body: body}));
			client.destroy(); // kill client after server's response
		});
	}
	
	
	subscribe(queue_name, callback) {
		var client = new net.Socket();
		var self = this;
		client.connect(5005, '127.0.0.1', function() {
			console.log('Connected');
			let meta = {
				task: 'subscribe',
				method: ''
				
			};
			let body = {
				key: queue_name,
				value: ''
			};
			
			
			
			client.write(JSON.stringify({meta: meta, body: body}));
		});
		
		client.on('data', function(data) {
			callback(data.toString());
		});
	}
	
	put(key, value) {
		var client = new net.Socket();
		var self = this;
		client.connect(5005, '127.0.0.1', function() {
			console.log('Connected');
			let meta = {
				task: 'store',
				method: 'put'
				
			};
			let body = {
				key: key,
				value: value
			};
			
			
			
			client.write(JSON.stringify({meta: meta, body: body}));
			client.destroy(); // kill client after server's response
		});
	}
	
	get(key, callback) {
		var self = this;
		var client = new net.Socket();
		client.connect(5005, '127.0.0.1', function() {
			console.log('Connected');
			let meta = {
				task: 'store',
				method: 'get'
				
			};
			let body = {
				key: key,
				value: ''
			};

			client.write(JSON.stringify({meta: meta, body: body}));
		});

		client.on('data', function(data) {
			callback(JSON.parse(data));
			client.destroy(); // kill client after server's response
		});
	}
}

module.exports = Mnemosine
