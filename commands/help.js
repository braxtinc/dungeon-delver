exports.run = (client, message, args) => {
	message.channel.send(`Basic Commands:
		Ping - Pings
		Help - This
		Inventory - Shows your inventory
		Inventory [@someone] - Show's @someone's inventory
		Skills - Shows your skills
		Fight - Battle time, will appear in a DM`);
}