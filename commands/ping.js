exports.run = (client, message, args) => {
	message.reply(`pong! \`\`${client.ping}\`\``).catch(console.error);
}