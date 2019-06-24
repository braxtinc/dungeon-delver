exports.run = (client, message, args) => {
	if(client.inventory.exists(message.author.id)){
		message.channel.send('Here is your iventory,\n' + 
			client.inventory.get(message.author.id, `Crafting`) + `\n` +
			client.inventory.get(message.author.id, `Equipment`) + `\n` +
			client.inventory.get(message.author.id, `Junk`));
	} else {
		client.emit('guildMemberAdd', message.author);
	}
}