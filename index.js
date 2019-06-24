const Discord = require('Discord.js');
const Enmap = require('enmap');
const fs = require('fs');

const client = new Discord.Client();
const config = require('./config.json');

client.config = config;
client.enmap = Enmap

// Inventory Creation, handled within guildMemberAdd.js

client.inventory = new Enmap();
client.stats = new Enmap();

//Reading the "Events Folder" to be able to trigger said events

fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

console.log('\nLoading Commands\n');

// Grabbing Commands from the commands folder

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split('.')[0];
		console.log(`Loading Command ${commandName}`);
		client.commands.set(commandName, props);
	});
});

console.log('\nLoaded Commands\nLogging In..\n');

client.login(config.token);